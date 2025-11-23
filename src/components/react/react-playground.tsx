
'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Terminal, Loader2, AlertTriangle, Play, PanelTop, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { transpileReactCode } from '@/ai/flows/transpile-react-code';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

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
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; 
          margin: 0; 
          padding: 20px; 
          background-color: #f8f9fa; 
          color: #333; 
          line-height: 1.6;
        }
        .card { 
          background: white; 
          padding: 2rem; 
          border-radius: 12px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
          text-align: center; 
          max-width: 600px;
          margin: 0 auto;
        }
        h1 { color: #007bff; margin-top: 0; }
        h2 { color: #333; }
        button { 
          background: #007bff; 
          color: white; 
          border: none; 
          padding: 12px 20px; 
          border-radius: 6px; 
          cursor: pointer; 
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        button:hover { background: #0056b3; }
        button:disabled { background: #6c757d; cursor: not-allowed; }
        .error { 
          background: #f8d7da; 
          color: #721c24; 
          padding: 1rem; 
          border-radius: 6px; 
          margin: 1rem 0;
          border: 1px solid #f5c6cb;
        }
        input, textarea { 
          padding: 8px 12px; 
          border: 1px solid #ddd; 
          border-radius: 4px; 
          font-size: 14px;
        }
        input:focus, textarea:focus { 
          outline: none; 
          border-color: #007bff; 
          box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
        }
      </style>
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><\/script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><\/script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
    </head>
    <body>
      <div id="root"></div>
      <script>
        // Error handling for the playground
        window.onerror = function(msg, url, lineNo, columnNo, error) {
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error';
          errorDiv.innerHTML = '<strong>Runtime Error:</strong><br>' + msg;
          document.body.appendChild(errorDiv);
          return false;
        };
        
        // Execute the transpiled code
        try {
          // If the code looks like it contains JSX and Babel is available, transpile it
          const codeToExecute = \`${code}\`;
          
          if (window.Babel && (codeToExecute.includes('<') || codeToExecute.includes('JSX'))) {
            try {
              const transpiled = window.Babel.transform(codeToExecute, {
                presets: ['react']
              });
              eval(transpiled.code);
            } catch (babelError) {
              console.warn('Babel transpilation failed, trying direct execution:', babelError);
              eval(codeToExecute);
            }
          } else {
            eval(codeToExecute);
          }
        } catch (error) {
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error';
          errorDiv.innerHTML = '<strong>Execution Error:</strong><br>' + error.message;
          document.body.appendChild(errorDiv);
        }
      <\/script>
    </body>
  </html>
`;

export function ReactPlayground({ defaultCode }: { defaultCode?: string }) {
  const [code, setCode] = useState(defaultCode || initialCode);
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
      setOutput({ code: '', err: e.message || 'Failed to transpile code.' });
    } finally {
      setIsBuilding(false);
    }
  }, []);

  // Initial build
  useEffect(() => {
    buildCode(code);
  }, [buildCode, code]);

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
                <DialogClose asChild>
                    <Button variant="outline" size="icon">
                        <X className="h-4 w-4" />
                    </Button>
                </DialogClose>
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
