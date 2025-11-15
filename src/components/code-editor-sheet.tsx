
"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Code, Play, Terminal } from "lucide-react";
import { Textarea } from "./ui/textarea";

export function CodeEditorSheet({ initialCode }: { initialCode?: string }) {
  const [code, setCode] = useState(
    initialCode || 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
  );
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("");
    // Simulate code execution
    setTimeout(() => {
      try {
        const printlnRegex = /System\.out\.println\(([^)]+)\);/g;
        let match;
        const outputs = [];
        
        const variables: Record<string, any> = {};
        
        // This is a very basic evaluator for demonstration purposes.
        const evaluateExpression = (expr: string): any => {
          expr = expr.trim();

          // If it's a string literal
          if (expr.startsWith('"') && expr.endsWith('"')) {
            return expr.slice(1, -1);
          }
          // If it's a number literal
          if (!isNaN(Number(expr))) {
            return Number(expr);
          }
          // If it's a boolean literal
          if (expr === 'true' || expr === 'false') {
            return expr === 'true';
          }
          // If it's a char literal
          if (expr.startsWith("'") && expr.endsWith("'")) {
             return expr.slice(1, -1);
          }
          // If it's a variable
          if (variables[expr] !== undefined) {
            return variables[expr];
          }

          // Handle simple arithmetic and string concatenation
          const parts = expr.split(/( \+ )/).map(p => p.trim());
          if (parts.length > 1) {
            let result = evaluateExpression(parts[0]);
            for (let i = 1; i < parts.length; i += 2) {
              if (parts[i] === '+') {
                result += evaluateExpression(parts[i+1]);
              }
            }
            return result;
          }

          return expr; // Fallback
        };

        const varRegex = /(int|double|String|float|boolean|char|long|short|byte)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([^;]+);/g;
        let varMatch;
        // Create a copy of the code to manipulate for parsing
        let parsableCode = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ''); // Remove comments

        while ((varMatch = varRegex.exec(parsableCode)) !== null) {
          const name = varMatch[2];
          let valueStr = varMatch[3].trim();
          
          // Evaluate arithmetic expressions in assignments
          const arithmeticMatch = valueStr.match(/([a-zA-Z0-9_]+)\s*([*\/+-])\s*([a-zA-Z0-9_]+)/);
          if (arithmeticMatch) {
            const left = evaluateExpression(arithmeticMatch[1]);
            const operator = arithmeticMatch[2];
            const right = evaluateExpression(arithmeticMatch[3]);
            let result;
            if (typeof left === 'number' && typeof right === 'number') {
               switch(operator) {
                  case '+': result = left + right; break;
                  case '-': result = left - right; break;
                  case '*': result = left * right; break;
                  case '/': result = left / right; break;
               }
               variables[name] = result;
            }
          } else {
            variables[name] = evaluateExpression(valueStr);
          }
        }
        
        while ((match = printlnRegex.exec(code)) !== null) {
            let content = match[1].trim();
            outputs.push(evaluateExpression(content));
        }

        if (outputs.length > 0) {
          setOutput(outputs.join('\n'));
        } else if (code.includes("System.err.println")) {
          const errorMatch = code.match(/System\.err\.println\("([^"]*)"\);/);
          setOutput(errorMatch ? `Error: ${errorMatch[1]}` : "Execution finished with an error.");
        } else {
          setOutput("Execution finished with no output.");
        }

      } catch (e) {
        setOutput("An error occurred during execution.");
      } finally {
        setIsRunning(false);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full border-l bg-card">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Code className="w-6 h-6" /> Java Code Editor
          </h2>
          <p className="text-sm text-muted-foreground">
            Write and test your Java code snippets here. The output will appear
            below.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-6 overflow-y-auto">
          <div className="flex-1 flex flex-col">
            <label htmlFor="code-editor" className="mb-2 text-sm font-medium">
              Code
            </label>
            <Textarea
              id="code-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 font-mono text-sm resize-none"
              placeholder="Enter your Java code here..."
            />
          </div>
          <div className="h-[150px] flex flex-col">
            <label className="mb-2 text-sm font-medium flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Output
            </label>
            <div className="flex-1 bg-muted rounded-md p-4 text-sm font-mono text-muted-foreground">
              {isRunning ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-foreground"></div>
                  <span>Running...</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap">{output || 'Click "Run Code" to see the output.'}</pre>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 border-t">
          <Button onClick={handleRunCode} disabled={isRunning}>
            <Play className="mr-2 h-4 w-4" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
        </div>
    </div>
  );
}
