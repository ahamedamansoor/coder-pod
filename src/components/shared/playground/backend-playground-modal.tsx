'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useBackendPlayground } from './backend-playground-context';

interface ExecutionResult {
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  message?: string;
  time?: string;
  memory?: number;
  exit_code?: number;
  status?: {
    id: number;
    description: string;
  };
}

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import {
  Code, Terminal, Play, Loader2,
  Trash2, Cpu, Clock, HardDrive, CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

// Judge0 API configuration (Sulu official)
const JUDGE0_API_URL = process.env.NEXT_PUBLIC_JUDGE0_API_URL || 'https://judge0-ce.p.sulu.sh';
const JUDGE0_API_KEY = process.env.NEXT_PUBLIC_JUDGE0_API_KEY || '';

// Supported languages
const languages = [
  { id: 71, name: 'Python (3.11.5)', monaco: 'python', extension: 'py' },
  { id: 62, name: 'JavaScript (Node.js 18.15.0)', monaco: 'javascript', extension: 'js' },
  { id: 54, name: 'C++ (GCC 9.4.0)', monaco: 'cpp', extension: 'cpp' },
  { id: 60, name: 'C (GCC 9.4.0)', monaco: 'c', extension: 'c' },
  { id: 63, name: 'Java (JDK 17.0.6)', monaco: 'java', extension: 'java' },
  { id: 68, name: 'PHP (8.2.8)', monaco: 'php', extension: 'php' },
  { id: 73, name: 'Rust (1.70.0)', monaco: 'rust', extension: 'rs' },
  { id: 74, name: 'TypeScript (5.0.3)', monaco: 'typescript', extension: 'ts' },
  { id: 76, name: 'Go (1.20.1)', monaco: 'go', extension: 'go' },
  { id: 87, name: 'Kotlin (1.8.20)', monaco: 'kotlin', extension: 'kt' },
];

const defaultExamples: Record<number, string> = {
  71: `# Python Example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def main():
    n = int(input("Enter a number: "))
    print(f"Fibonacci({n}) = {fibonacci(n)}")

if __name__ == "__main__":
    main()`,
  62: `// JavaScript Example
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  const n = parseInt(input);
  console.log(\`Fibonacci(\${n}) = \${fibonacci(n)}\`);
  rl.close();
});`,
  54: `// C++ Example
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    cout << "Fibonacci(" << n << ") = " << fibonacci(n) << endl;
    return 0;
}`,
  60: `// C Example
#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Fibonacci(%d) = %d\\n", n, fibonacci(n));
    return 0;
}`,
  63: `// Java Example
import java.util.Scanner;

public class Main {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = scanner.nextInt();
        System.out.println("Fibonacci(" + n + ") = " + fibonacci(n));
        scanner.close();
    }
}`,
};

export function BackendPlaygroundModal() {
  const { isOpen, closePlayground, playgroundData, updatePlaygroundData } = useBackendPlayground();
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<Array<{type: 'info' | 'error' | 'success', message: string, timestamp: string}>>([]);
  const [activeTab, setActiveTab] = useState<'code' | 'input' | 'output' | 'settings'>('code');
  const { theme } = useTheme();

  const selectedLanguage = languages.find(lang => lang.id === playgroundData.language_id) || languages[0];

  const addLog = useCallback((type: 'info' | 'error' | 'success', message: string) => {
    setConsoleLogs(prev => [...prev, {
      type,
      message,
      timestamp: new Date().toLocaleTimeString()
    }]);
  }, []);

  const runCode = useCallback(async () => {
    if (!JUDGE0_API_KEY) {
      addLog('error', 'Judge0 API key is not configured. Please set NEXT_PUBLIC_JUDGE0_API_KEY in your environment variables.');
      return;
    }

    setIsRunning(true);
    setExecutionResult(null);
    addLog('info', '🚀 Executing code...');

    try {
      // Create submission
      const submissionResponse = await fetch(`${JUDGE0_API_URL}/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': JUDGE0_API_KEY,
        },
        body: JSON.stringify({
          source_code: playgroundData.source_code,
          language_id: playgroundData.language_id,
          stdin: playgroundData.stdin || '',
          expected_output: playgroundData.expected_output || '',
          compiler_options: playgroundData.compiler_options || '',
          command_line_arguments: playgroundData.command_line_arguments || '',
          max_cpu_time: playgroundData.max_cpu_time || 2,
          max_memory: playgroundData.max_memory || 128000,
        }),
      });

      if (!submissionResponse.ok) {
        throw new Error(`Failed to create submission: ${submissionResponse.statusText}`);
      }

      const submissionData = await submissionResponse.json();
      const token = submissionData.token;
      
      addLog('info', `📤 Submission created with token: ${token}`);

      // Poll for results
      let attempts = 0;
      const maxAttempts = 20;
      
      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const resultResponse = await fetch(`${JUDGE0_API_URL}/submissions/${token}`, {
          headers: {
            'X-Auth-Token': JUDGE0_API_KEY,
          },
        });

        if (!resultResponse.ok) {
          throw new Error(`Failed to get result: ${resultResponse.statusText}`);
        }

        const result = await resultResponse.json();
        
        if (result.status.id <= 2) { // Processing
          addLog('info', `⏳ Processing... (${attempts + 1}/${maxAttempts})`);
          attempts++;
          continue;
        }

        // Execution completed
        setExecutionResult(result);
        
        if (result.status.id === 3) { // Accepted
          addLog('success', '✅ Code executed successfully!');
        } else {
          addLog('error', `❌ Execution failed: ${result.status.description}`);
        }

        if (result.stdout) {
          addLog('info', `📄 Output: ${result.stdout.substring(0, 100)}${result.stdout.length > 100 ? '...' : ''}`);
        }
        
        if (result.stderr) {
          addLog('error', `🐛 Error: ${result.stderr.substring(0, 100)}${result.stderr.length > 100 ? '...' : ''}`);
        }

        break;
      }

      if (attempts >= maxAttempts) {
        addLog('error', '⏰ Execution timed out');
      }

    } catch (error) {
      addLog('error', `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  }, [playgroundData, addLog]);

  const handleLanguageChange = (languageId: number) => {
    updatePlaygroundData({ language_id: languageId });
    
    // Load default example for the new language
    const example = defaultExamples[languageId];
    if (example) {
      updatePlaygroundData({ source_code: example });
    }
  };

  const clearOutput = () => {
    setExecutionResult(null);
    setConsoleLogs([]);
  };

  const getStatusIcon = (statusId?: number) => {
    switch (statusId) {
      case 3:
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closePlayground}>
      <DialogContent className="max-w-7xl h-[80vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Backend Playground
            <Badge variant="outline" className="ml-2">
              {selectedLanguage.name}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Left Panel - Code Editor */}
          <ResizablePanel defaultSize={60} minSize={30}>
            <div className="flex flex-col h-full">
              {/* Toolbar */}
              <div className="flex items-center justify-between p-4 border-b">
                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
                  <TabsList>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="input">Input</TabsTrigger>
                    <TabsTrigger value="output">Output</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center gap-2">
                  <Select
                    value={playgroundData.language_id.toString()}
                    onValueChange={(value) => handleLanguageChange(parseInt(value))}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map(lang => (
                        <SelectItem key={lang.id} value={lang.id.toString()}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isRunning ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Run Code
                      </>
                    )}
                  </Button>

                  <Button variant="outline" size="sm" onClick={clearOutput}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Editor Content */}
              <div className="flex-1 overflow-hidden">
                {activeTab === 'code' && (
                  <Editor
                    height="100%"
                    defaultLanguage={selectedLanguage.monaco}
                    value={playgroundData.source_code}
                    onChange={(value) => updatePlaygroundData({ source_code: value || '' })}
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      wordWrap: 'on',
                      automaticLayout: true,
                    }}
                  />
                )}

                {activeTab === 'input' && (
                  <div className="p-4 h-full">
                    <Label htmlFor="stdin">Standard Input (stdin)</Label>
                    <Textarea
                      id="stdin"
                      placeholder="Enter input for your program..."
                      value={playgroundData.stdin || ''}
                      onChange={(e) => updatePlaygroundData({ stdin: e.target.value })}
                      className="h-full min-h-[200px] font-mono"
                    />
                  </div>
                )}

                {activeTab === 'output' && (
                  <div className="p-4 h-full space-y-4">
                    {executionResult ? (
                      <>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(executionResult.status?.id)}
                          <span className="font-medium">
                            {executionResult.status?.description || 'Unknown Status'}
                          </span>
                        </div>

                        {executionResult.stdout && (
                          <div>
                            <Label>Output</Label>
                            <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-auto max-h-40">
                              {executionResult.stdout}
                            </pre>
                          </div>
                        )}

                        {executionResult.stderr && (
                          <div>
                            <Label className="text-red-500">Error</Label>
                            <pre className="bg-red-50 border border-red-200 p-3 rounded-md text-sm font-mono text-red-700 overflow-auto max-h-40">
                              {executionResult.stderr}
                            </pre>
                          </div>
                        )}

                        {executionResult.compile_output && (
                          <div>
                            <Label>Compilation Output</Label>
                            <pre className="bg-yellow-50 border border-yellow-200 p-3 rounded-md text-sm font-mono overflow-auto max-h-40">
                              {executionResult.compile_output}
                            </pre>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {executionResult.time && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>Time: {executionResult.time}s</span>
                            </div>
                          )}
                          {executionResult.memory && (
                            <div className="flex items-center gap-2">
                              <HardDrive className="w-4 h-4" />
                              <span>Memory: {executionResult.memory} KB</span>
                            </div>
                          )}
                          {executionResult.exit_code !== undefined && (
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4" />
                              <span>Exit Code: {executionResult.exit_code}</span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <div className="text-center">
                          <Terminal className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p>Run your code to see the output here</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="max_cpu_time">Max CPU Time (seconds)</Label>
                        <Input
                          id="max_cpu_time"
                          type="number"
                          min="1"
                          max="10"
                          value={playgroundData.max_cpu_time || 2}
                          onChange={(e) => updatePlaygroundData({ max_cpu_time: parseInt(e.target.value) || 2 })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="max_memory">Max Memory (KB)</Label>
                        <Input
                          id="max_memory"
                          type="number"
                          min="128000"
                          max="128000"
                          value={playgroundData.max_memory || 128000}
                          onChange={(e) => updatePlaygroundData({ max_memory: parseInt(e.target.value) || 128000 })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="compiler_options">Compiler Options</Label>
                      <Input
                        id="compiler_options"
                        placeholder="e.g., -O2 -Wall"
                        value={playgroundData.compiler_options || ''}
                        onChange={(e) => updatePlaygroundData({ compiler_options: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="command_line_arguments">Command Line Arguments</Label>
                      <Input
                        id="command_line_arguments"
                        placeholder="e.g., arg1 arg2"
                        value={playgroundData.command_line_arguments || ''}
                        onChange={(e) => updatePlaygroundData({ command_line_arguments: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="expected_output">Expected Output (for testing)</Label>
                      <Textarea
                        id="expected_output"
                        placeholder="Expected output to compare against..."
                        value={playgroundData.expected_output || ''}
                        onChange={(e) => updatePlaygroundData({ expected_output: e.target.value })}
                      />
                    </div>

                    {!JUDGE0_API_KEY && (
                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                        <p className="text-sm text-yellow-800">
                          ⚠️ Judge0 API key is not configured. Set NEXT_PUBLIC_JUDGE0_API_KEY for the official Sulu API, and optionally NEXT_PUBLIC_JUDGE0_API_URL if your endpoint differs.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right Panel - Console */}
          <ResizablePanel defaultSize={40} minSize={20}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-medium flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Console
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setConsoleLogs([])}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-2">
                  {consoleLogs.map((log, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-2 rounded-md text-sm font-mono",
                        log.type === 'error' && "bg-red-50 text-red-700 border border-red-200",
                        log.type === 'success' && "bg-green-50 text-green-700 border border-green-200",
                        log.type === 'info' && "bg-blue-50 text-blue-700 border border-blue-200"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs opacity-60">{log.timestamp}</span>
                        <span className="flex-1">{log.message}</span>
                      </div>
                    </div>
                  ))}
                  
                  {consoleLogs.length === 0 && (
                    <div className="text-center text-muted-foreground py-8">
                      <Terminal className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Console output will appear here</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DialogContent>
    </Dialog>
  );
}
