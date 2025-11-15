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
        // A real implementation would execute the code and capture stdout.
        // This is a more robust mock to handle different println statements.
        const printlnRegex = /System\.out\.println\(([^)]+)\);/g;
        let match;
        const outputs = [];
        
        // Simple evaluation for variables
        const variables: Record<string, any> = {};
        const varRegex = /(int|double|String|float|boolean|char|long|short|byte)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([^;]+);/g;
        let varMatch;
        while ((varMatch = varRegex.exec(code)) !== null) {
          const name = varMatch[2];
          let value = varMatch[3].trim();
          
          if (value.startsWith('"') && value.endsWith('"')) {
            variables[name] = value.slice(1, -1);
          } else if (value.match(/^[0-9.]+f?L?$/)) {
             variables[name] = parseFloat(value);
          } else if (value === 'true' || value === 'false') {
             variables[name] = value === 'true';
          } else if (value.startsWith("'") && value.endsWith("'")) {
             variables[name] = value.slice(1, -1);
          } else {
             variables[name] = value; // Fallback for simple expressions
          }
        }
        
        while ((match = printlnRegex.exec(code)) !== null) {
            let content = match[1].trim();
            if (content.startsWith('"') && content.endsWith('"')) {
                outputs.push(content.slice(1, -1));
            } else if (variables[content]) {
                outputs.push(variables[content]);
            } else {
                 // Handle simple concatenation for the demo
                const parts = content.split('+').map(p => p.trim());
                const result = parts.map(p => {
                    if (p.startsWith('"') && p.endsWith('"')) return p.slice(1, -1);
                    return variables[p] || p;
                }).join('');
                outputs.push(result);
            }
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
