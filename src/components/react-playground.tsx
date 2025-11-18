'use client';
import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import { Terminal, Loader2, AlertTriangle, PanelTop } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { unpkgPathPlugin } from '@/lib/unpkg-path-plugin';
import { fetchPlugin } from '@/lib/fetch-plugin';
import { useReactPlayground } from './react-playground-context';

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
  const { esbuildService, isEsbuildInitialized } = useReactPlayground();

  const buildCode = async (newCode: string) => {
    if (!esbuildService) return;

    setIsBuilding(true);
    setOutput({ code: '', err: '' });

    try {
      const result = await esbuildService.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(newCode)],
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

  useEffect(() => {
    if (isEsbuildInitialized && esbuildService) {
        buildCode(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEsbuildInitialized]);

  // Debounced build
  useEffect(() => {
    if (!isEsbuildInitialized) return;
    const timer = setTimeout(() => {
        buildCode(code);
    }, 750);

    return () => {
        clearTimeout(timer);
    }
  }, [code]);

  if (!isEsbuildInitialized) {
      return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-background text-foreground">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <h2 className="text-xl font-semibold mt-6">Starting Playground Engine...</h2>
              <p className="text-muted-foreground mt-2">This may take a moment.</p>
          </div>
      )
  }

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
