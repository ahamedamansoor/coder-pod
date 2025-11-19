'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import { Terminal, Loader2, AlertTriangle, Play, PanelTop, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { transpileReactCode } from '@/ai/flows/transpile-react-code';
import { Button } from './ui/button';
import { DialogHeader, DialogTitle, DialogClose } from './ui/dialog';

const initialCode = `import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello React!</h1>
      <p>Click the Run button to see your changes.</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
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
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><\/script>
    </head>
    <body>
      <div id="root"></div>
      <script>${code}<\/script>
    </body>
  </html>
`;

export function ReactPlayground() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ code: string; err: string }>({ code: '', err: '' });
  const [isBuilding, setIsBuilding] = useState(true);
  const { theme } = useTheme();

  const buildCode = useCallback(async (newCode: string) => {
    setIsBuilding(true);
    setOutput({ code: '', err: '' });

    try {
      const result = await transpileReactCode({ code: newCode });
      if (result.success && result.transpiledCode) {
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

  // Initial build
  useEffect(() => {
    buildCode(code);
  }, [buildCode]);

  const handleRun = () => {
    buildCode(code);
  };

  const iframeSrcDoc = htmlTemplate(output.code);

  return (
    <div className="h-full w-full flex flex-col">
       <DialogHeader className="p-4 border-b flex-row items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-lg font-bold">
              <PanelTop />
              React Playground
            </DialogTitle>
             <div className="flex items-center gap-2">
                 <Button onClick={handleRun} disabled={isBuilding} size="sm">
                    {isBuilding ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="mr-2 h-4 w-4" />
                    )}
                    {isBuilding ? 'Building...' : 'Run'}
                </Button>
            </div>
         </DialogHeader>
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50}>
          <div className="h-full flex flex-col">
            <Editor
              value={code}
              onChange={(value) => setCode(value || '')}
              language="javascript"
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              options={{ minimap: { enabled: false }, fontSize: 14, wordWrap: 'on' }}
              className="flex-1"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
               <div className="relative w-full h-full">
                {(output.err) && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50">
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            <span className="font-semibold">Build Failed</span>
                        </div>
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
