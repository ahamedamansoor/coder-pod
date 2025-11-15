
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Code, Play, Terminal } from "lucide-react";
import Editor from "@monaco-editor/react";

export function CodeEditorSheet({ initialCode }: { initialCode?: string }) {
  const [code, setCode] = useState(
    initialCode || 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
  );
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("");
    
    setTimeout(() => {
      try {
        const variables: Record<string, any> = {};
        const finalVariables = new Set<string>();
        let consoleOutput: string[] = [];

        const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

        let codeToRun = codeWithoutComments;
        const mainMethodMatch = /public\s+static\s+void\s+main\s*\([\s\S]*?\)\s*\{([\s\S]*)\}/.exec(codeToRun);
        if (mainMethodMatch && mainMethodMatch[1]) {
            codeToRun = mainMethodMatch[1];
        }
        
        const statements = codeToRun.split(';').map(s => s.trim()).filter(Boolean);

        const evaluateExpression = (expr: string): any => {
          expr = expr.trim();
          
          const parts = expr.split('+').map(p => p.trim());
          let result: any = null;

          for (const part of parts) {
              let value: any;
              if (part.startsWith('"') && part.endsWith('"')) {
                  value = part.slice(1, -1);
              } else if (variables.hasOwnProperty(part)) {
                  value = variables[part];
              } else if (!isNaN(Number(part))) {
                  if (part.includes('.')) value = parseFloat(part);
                  else value = parseInt(part, 10);
              } else if (part === 'true') {
                  value = true;
              } else if (part === 'false') {
                  value = false;
              } else {
                  value = part; // Treat as string if it's an unknown token
              }
              
              if (result === null) {
                  result = value;
              } else {
                  result = String(result) + String(value);
              }
          }
          return result;
        };

        for (const statement of statements) {
            const varRegex = /^(final\s+)?(int|double|String|float|boolean|char|long|short|byte)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)/;
            const varMatch = statement.match(varRegex);
            if (varMatch) {
                const [, isFinal, , name, valueStr] = varMatch;
                if (finalVariables.has(name)) {
                    throw new Error(`error: variable ${name} is already defined and is final`);
                }
                if (isFinal) {
                    finalVariables.add(name);
                }
                variables[name] = evaluateExpression(valueStr);
                continue;
            }

            const reassignRegex = /^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)/;
            const reassignMatch = statement.match(reassignRegex);
            if (reassignMatch) {
                const [, name, valueStr] = reassignMatch;
                if (finalVariables.has(name)) {
                    throw new Error(`cannot assign a value to final variable ${name}`);
                }
                if (variables.hasOwnProperty(name)) {
                    variables[name] = evaluateExpression(valueStr);
                    continue;
                }
            }

            const printlnRegex = /System\.(out|err)\.println\((.*)\)/;
            const printMatch = statement.match(printlnRegex);
            if (printMatch) {
                const [, stream, content] = printMatch;
                const evaluatedContent = evaluateExpression(content);
                const finalOutput = evaluatedContent !== null && evaluatedContent !== undefined ? String(evaluatedContent) : "null";
                
                if (stream === 'err') {
                   consoleOutput.push(`Error: ${finalOutput}`);
                } else {
                   consoleOutput.push(finalOutput);
                }
                continue;
            }
        }
        
        if (consoleOutput.length > 0) {
          setOutput(consoleOutput.join('\n'));
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
            <div className="flex-1 rounded-md border overflow-hidden">
                <Editor
                    height="100%"
                    language="java"
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    options={{ minimap: { enabled: false }, fontSize: 14 }}
                />
            </div>
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
