'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Code, Play, Terminal, Copy, Check, X } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { executeJavaCode } from '@/ai/flows/execute-java-code';
import { useToast } from '@/hooks/use-toast';

export function CodeEditorSheet({
  initialCode,
  onClose,
}: {
  initialCode?: string;
  onClose: () => void;
}) {
  const [code, setCode] = useState(
    initialCode ||
      'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
  );
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const { theme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      setOutput(''); // Clear previous output when new code comes in
    }
  }, [initialCode]);

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('');
    try {
      const result = await executeJavaCode({ code });
      setOutput(
        result.output || 'Execution finished with no output.'
      );
    } catch (e: any) {
      console.error('AI execution error:', e);
      toast({
        variant: 'destructive',
        title: 'Execution Failed',
        description: 'The AI model could not execute the code. Please try again.',
      });
      setOutput(`An error occurred: ${e.message || 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    toast({
      title: 'Copied to clipboard!',
    });
  };

  return (
    <div className="flex flex-col h-full border-l bg-card">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Code className="w-6 h-6" /> Java Code Editor
          </h2>
          <p className="text-sm text-muted-foreground">
            Write and run Java code using an AI-powered runtime.
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
          <span className="sr-only">Close editor</span>
        </Button>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
        <div className="flex-1 flex flex-col relative">
          <div className="absolute top-2 right-2 z-10">
            <Button variant="ghost" size="icon" onClick={handleCopyCode}>
              {hasCopied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="sr-only">Copy code</span>
            </Button>
          </div>
          <div className="flex-1 rounded-md border overflow-hidden">
            <Editor
              height="100%"
              language="java"
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              value={code}
              onChange={(value) => setCode(value || '')}
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
              <pre className="whitespace-pre-wrap">
                {output || 'Click "Run Code" to see the output.'}
              </pre>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 border-t flex gap-4">
        <Button onClick={handleRunCode} disabled={isRunning}>
          <Play className="mr-2 h-4 w-4" />
          {isRunning ? 'Running...' : 'Run Code'}
        </Button>
      </div>
    </div>
  );
}
