
"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);


  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("");
    // Simulate code execution
    setTimeout(() => {
      try {
        // A very basic mock of a Java interpreter for demonstration purposes.
        const variables: Record<string, any> = {};

        const evaluateExpression = (expr: string): any => {
          expr = expr.trim();
          
          // String literal
          if (expr.startsWith('"') && expr.endsWith('"')) {
            return expr.slice(1, -1);
          }

          // Handle string concatenation
          const parts = expr.split(/(?<!\\)\s?\+\s?/);
          if (parts.length > 1) {
             return parts.map(part => evaluateExpression(part.trim())).join('');
          }
          
          // Variable lookup
          if (variables[expr] !== undefined) {
            return variables[expr];
          }

          // Char literal
          if (expr.startsWith("'") && expr.endsWith("'")) {
             return expr.slice(1, -1);
          }

          // Boolean literals
          if (expr === 'true') return true;
          if (expr === 'false') return false;

          // Number literals
          if (!isNaN(Number(expr))) {
            return Number(expr);
          }
          
          // Handle numeric literals with suffixes (L, f, d)
          if (expr.toLowerCase().endsWith('l')) return BigInt(expr.slice(0,-1));
          if (expr.toLowerCase().endsWith('f')) return parseFloat(expr);
          if (expr.toLowerCase().endsWith('d')) return parseFloat(expr);

          // Basic arithmetic - this part is tricky and limited.
          // This will not respect operator precedence. It evaluates left-to-right.
          try {
            // A safer way to evaluate arithmetic without using eval()
            let result = new Function('return ' + expr.replace(/[a-zA-Z$_]/g, ''))();
            return result;
          } catch(e) {
            // Fallback for more complex expressions or if evaluation fails
            return `[expression: ${expr}]`;
          }
        };
        
        let outputs: any[] = [];
        
        // Remove comments first
        const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
        
        // Process lines
        const lines = codeWithoutComments.split(';').map(l => l.trim()).filter(Boolean);

        for (const line of lines) {
           // Variable declaration
           const varRegex = /^(int|double|String|float|boolean|char|long|short|byte)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)/;
           const varMatch = line.match(varRegex);
           if (varMatch) {
             const [, type, name, valueStr] = varMatch;
             variables[name] = evaluateExpression(valueStr);
             continue;
           }

           // Print statement
           const printlnRegex = /System\.out\.println\((.*)\)/;
           const printMatch = line.match(printlnRegex);
           if (printMatch) {
             const content = printMatch[1].trim();
             outputs.push(evaluateExpression(content));
             continue;
           }
           
           // Print error statement
           const printErrRegex = /System\.err\.println\((.*)\)/;
           const printErrMatch = line.match(printErrRegex);
           if (printErrMatch) {
               const content = printErrMatch[1].trim();
               outputs.push(`Error: ${evaluateExpression(content)}`);
               continue;
           }
        }
        
        if (outputs.length > 0) {
          setOutput(outputs.join('\n'));
        } else {
          setOutput("Execution finished with no output.");
        }

      } catch (e: any) {
        setOutput(`An error occurred during execution: ${e.message}`);
      } finally {
        setIsRunning(false);
      }
    }, 500);
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
