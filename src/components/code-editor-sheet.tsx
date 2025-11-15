
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
    
    // This is a mock executor. It doesn't actually compile or run Java.
    // It scans the code for common patterns and simulates the output.
    setTimeout(() => {
      try {
        let simulatedOutput: string[] = [];
        
        const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

        let mainMethodContent = codeWithoutComments;
        const mainMethodMatch = /public\s+static\s+void\s+main\s*\([\s\S]*?\)\s*\{([\s\S]*)\}/.exec(codeWithoutComments);
        if (mainMethodMatch && mainMethodMatch[1]) {
            mainMethodContent = mainMethodMatch[1];
        }
        
        const lines = mainMethodContent.split('\n').map(l => l.trim()).filter(Boolean);

        const variableValues: Record<string, any> = {};

        const evaluateRhs = (rhs: string) => {
            rhs = rhs.trim();
            // Try to resolve variables
            for (const varName in variableValues) {
                const regex = new RegExp(`\\b${varName}\\b`, 'g');
                rhs = rhs.replace(regex, JSON.stringify(variableValues[varName]));
            }

            // Super simple evaluation for string concatenation and basic math
            try {
                if (rhs.includes('"')) { // Likely string operation
                     // This is tricky; a true evaluation is complex. Let's simplify.
                    // We'll remove quotes and handle simple concatenation.
                    return rhs.replace(/"/g, '').replace(/\s*\+\s*/g, '');
                }
                // Use Function constructor for safer eval-like behavior on simple math
                return new Function(`return ${rhs}`)();
            } catch (e) {
                return rhs; // Return as is if evaluation fails
            }
        };

        for (const line of lines) {
            // System.out.println
            const printlnMatch = /System\.(out|err)\.println\((.*)\);?/.exec(line);
            if (printlnMatch) {
                const [, stream, content] = printlnMatch;
                const evaluatedContent = evaluateRhs(content);
                const finalOutput = evaluatedContent !== null && evaluatedContent !== undefined ? String(evaluatedContent) : "null";
                
                if (stream === 'err') {
                   simulatedOutput.push(`Error: ${finalOutput}`);
                } else {
                   simulatedOutput.push(finalOutput);
                }
                continue;
            }

            // Variable declaration and assignment
            const varAssignMatch = /^(final\s+)?(int|double|String|float|boolean|char|long|short|byte)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*);?/.exec(line);
            if (varAssignMatch) {
                const [, , type, name, valueStr] = varAssignMatch;
                const evaluatedValue = evaluateRhs(valueStr);
                variableValues[name] = evaluatedValue;
                simulatedOutput.push(`// Declared ${type} '${name}' and assigned value: ${evaluatedValue}`);
                continue;
            }

            // Variable re-assignment
            const reassignMatch = /^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*);?/.exec(line);
            if (reassignMatch) {
                const [, name, valueStr] = reassignMatch;
                if (name in variableValues) {
                   const evaluatedValue = evaluateRhs(valueStr);
                   variableValues[name] = evaluatedValue;
                   simulatedOutput.push(`// Re-assigned '${name}' to value: ${evaluatedValue}`);
                }
                continue;
            }

            // For loop
            const forLoopMatch = /for\s*\((.*);(.*);(.*)\)/.exec(line);
            if (forLoopMatch) {
                simulatedOutput.push(`// A 'for' loop was found. Simulating its likely purpose.`);
                continue;
            }
            
            // While loop
            const whileLoopMatch = /while\s*\((.*)\)/.exec(line);
            if (whileLoopMatch) {
                simulatedOutput.push(`// A 'while' loop was found. Simulating its likely purpose.`);
                continue;
            }
        }
        
        if (simulatedOutput.length > 0) {
          setOutput(simulatedOutput.filter(line => !line.startsWith('//')).join('\n'));
        } else {
          setOutput("Execution finished. No print statements found to display output.");
        }

      } catch (e: any) {
        setOutput(`An error occurred during simulation: ${e.message}`);
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
