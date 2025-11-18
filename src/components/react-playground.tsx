'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import { Terminal, Loader2, AlertTriangle } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { transpileReactCode } from '@/ai/flows/transpile-react-code';

const initialCode = `import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello React!</h1>
      <p>Click the button to increment the counter.</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
`;

const htmlTemplate = (code: string) => `
  <html>
    <head>
      <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f8f9fa; color: #333; }
        .card { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
        h1 { color: #007bff; }
        button { background: #007bff; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script type="module">${code}</script>
    </body>
  </html>
`;

export function ReactPlayground() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ code: string; err: string }>({ code: '', err: '' });
  const [isBuilding, setIsBuilding] = useState(false);
  const { theme } = useTheme();

  const buildCode = useCallback(async (newCode: string) => {
    setIsBuilding(true);
    setOutput({ code: '', err: '' });

    try {
      const result = await transpileReactCode({ code: newCode });
      if (result.success) {
        setOutput({ code: result.transpiledCode, err: '' });
      } else {
        setOutput({ code: '', err: result.error || 'Unknown compilation error' });
      }
    } catch (e: any) {
      setOutput({ code: '', err: e.message || 'Failed to communicate with the transpiler service.' });
    } finally {
      setIsBuilding(false);
    }
  }, []);

  useEffect(() => {
    buildCode(code);
  }, []);

  // Debounced build
  useEffect(() => {
    const timer = setTimeout(() => {
      buildCode(code);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [code, buildCode]);

  const iframeSrcDoc = htmlTemplate(output.code);

  return (
    <div className="h-full w-full flex flex-col pt-2">
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50}>
          <Editor
            value={code}
            onChange={(value) => setCode(value || '')}
            language="javascript"
            theme={theme === 'dark' ? 'vs-dark' : 'light'}
            options={{ minimap: { enabled: false }, fontSize: 14, wordWrap: 'on' }}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
               <div className="relative w-full h-full">
                {isBuilding && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}
                 <iframe
                    srcDoc={iframeSrcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                    className="bg-white"
                />
               </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25} minSize={10}>
              <div className="h-full flex flex-col">
                <div className="p-2 border-b text-sm font-semibold flex items-center gap-2">
                  <Terminal />
                  Console
                </div>
                <ScrollArea className="flex-1 p-2 bg-muted/50">
                  {output.err && (
                    <div className="font-mono text-xs text-destructive flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <pre className="whitespace-pre-wrap">{output.err}</pre>
                    </div>
                  )}
                  {!output.err && <div className="text-xs text-muted-foreground">Console output will appear here.</div>}
                </ScrollArea>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
