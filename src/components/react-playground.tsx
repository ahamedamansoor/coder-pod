
'use client';
import React, { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import { Terminal, PanelTop, Loader2, Play, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { unpkgPathPlugin } from '@/lib/unpkg-path-plugin';
import { fetchPlugin } from '@/lib/fetch-plugin';

const initialCode = `import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = React.useState(0);

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
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f8f9fa; }
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
  const [isBuilding, setIsBuilding] = useState(true);
  const esbuildRef = useRef<any>();
  const { theme } = useTheme();

  useEffect(() => {
    const startService = async () => {
      esbuildRef.current = await esbuild.startService({
        worker: true,
        wasmURL: '/esbuild.wasm',
      });
      setIsBuilding(false);
      buildCode();
    };
    startService();
  }, []);

  const buildCode = async () => {
    if (!esbuildRef.current) return;

    setIsBuilding(true);
    setOutput({ code: '', err: '' });

    try {
      const result = await esbuildRef.current.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(code)],
        define: {
          'process.env.NODE_ENV': '"production"',
          global: 'window',
        },
      });
      setOutput({ code: result.outputFiles[0].text, err: '' });
    } catch (e: any) {
      setOutput({ code: '', err: e.message });
    } finally {
      setIsBuilding(false);
    }
  };
  
  const iframeSrcDoc = htmlTemplate(output.code);

  return (
    <div className="h-full w-full flex flex-col">
       <header className="p-4 border-b flex-row items-center justify-between flex">
          <h1 className="flex items-center gap-2 text-lg font-bold">
            <PanelTop />
            React Playground
          </h1>
          <Button onClick={buildCode} disabled={isBuilding}>
            {isBuilding ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Play className="mr-2 h-4 w-4"/>}
            Run
          </Button>
        </header>
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50}>
          <Editor
            value={code}
            onChange={(value) => setCode(value || '')}
            language="javascript"
            theme={theme === 'dark' ? 'vs-dark' : 'light'}
            options={{ minimap: { enabled: false } }}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
               <iframe
                srcDoc={iframeSrcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25}>
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
