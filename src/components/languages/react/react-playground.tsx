
'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Terminal, Loader2, AlertTriangle, Play, PanelTop, X, Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

const initialCode = `// React and ReactDOM are available globally
const { useState } = React;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello React!</h1>
      <p>Click the Run button to see your changes.</p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
`;

// Helper function to preprocess code and remove ES6 imports
const preprocessCode = (code: string): string => {
  // Remove import statements and replace with comments
  let processedCode = code;
  
  // Remove: import React from 'react'
  processedCode = processedCode.replace(/import\s+React\s*,?\s*{?\s*([^}]*)\s*}?\s*from\s*['"]react['"];?/gi, 
    (match, hooks) => {
      if (hooks && hooks.trim()) {
        return `// React is available globally\nconst { ${hooks.trim()} } = React;`;
      }
      return '// React is available globally';
    }
  );
  
  // Remove: import { useState, useEffect } from 'react'
  processedCode = processedCode.replace(/import\s*{([^}]+)}\s*from\s*['"]react['"];?/gi, 
    (match, hooks) => `const { ${hooks.trim()} } = React;`
  );
  
  // Remove: import ReactDOM from 'react-dom/client'
  processedCode = processedCode.replace(/import\s+ReactDOM\s+from\s*['"]react-dom\/client['"];?/gi, 
    '// ReactDOM is available globally'
  );
  
  // Remove any other import statements
  processedCode = processedCode.replace(/import\s+.+from\s*['"][^'"]+['"];?/gi, 
    '// External imports not supported in playground'
  );
  
  return processedCode;
};

const htmlTemplate = (code: string, captureConsole: boolean = true) => `
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
        // Console capture - send logs to parent window
        ${captureConsole ? `
        const originalConsole = {
          log: console.log,
          warn: console.warn,
          error: console.error,
          info: console.info
        };
        
        ['log', 'warn', 'error', 'info'].forEach(method => {
          console[method] = function(...args) {
            // Call original console
            originalConsole[method].apply(console, args);
            
            // Send to parent window
            window.parent.postMessage({
              type: 'console',
              method: method,
              args: args.map(arg => {
                try {
                  return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
                } catch (e) {
                  return String(arg);
                }
              })
            }, '*');
          };
        });
        ` : ''}
        
        // Error handling for the playground
        window.onerror = function(msg, url, lineNo, columnNo, error) {
          // Send error to parent
          window.parent.postMessage({
            type: 'console',
            method: 'error',
            args: ['Runtime Error: ' + msg]
          }, '*');
          
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

type ConsoleMessage = {
  method: 'log' | 'warn' | 'error' | 'info';
  args: string[];
  timestamp: number;
};

export function ReactPlayground({ defaultCode }: { defaultCode?: string }) {
  const [code, setCode] = useState(defaultCode || initialCode);
  const [output, setOutput] = useState<{ code: string; err: string }>({ 
    code: preprocessCode(defaultCode || initialCode), 
    err: '' 
  });
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<ConsoleMessage[]>([]);
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Handle running the code (preprocess imports, then pass to iframe where Babel transpiles)
  const handleRun = useCallback(() => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    // Preprocess code to remove ES6 imports
    const processedCode = preprocessCode(code);
    setOutput({ code: processedCode, err: '' });
    
    // Small delay to show "running" state
    setTimeout(() => {
      setIsRunning(false);
    }, 300);
  }, [code]);

  // Listen for console messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'console') {
        const { method, args } = event.data;
        setConsoleOutput(prev => [...prev, {
          method,
          args,
          timestamp: Date.now()
        }]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Initial run
  useEffect(() => {
    handleRun();
  }, []); // Only on mount

  const iframeSrcDoc = htmlTemplate(output.code, true);

  return (
    <div className="h-full w-full flex flex-col">
       <DialogHeader className="p-4 border-b flex-row items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-lg font-bold">
              <PanelTop />
              React Playground
            </DialogTitle>
             <div className="flex items-center gap-2">
                 <Button onClick={handleRun} disabled={isRunning} size="sm">
                    {isRunning ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="mr-2 h-4 w-4" />
                    )}
                    {isRunning ? 'Running...' : 'Run'}
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
                 <iframe
                    ref={iframeRef}
                    srcDoc={iframeSrcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                    className="bg-white border-0"
                    key={output.code} // Force re-render when code changes
                />
               </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25} minSize={10}>
              <div className="h-full flex flex-col">
                <div className="p-2 border-b text-sm font-semibold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Console
                    {consoleOutput.length > 0 && (
                      <span className="text-xs text-muted-foreground">
                        ({consoleOutput.length})
                      </span>
                    )}
                  </div>
                  {consoleOutput.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setConsoleOutput([])}
                      className="h-6 px-2 text-xs"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>
                <ScrollArea className="flex-1 p-2 bg-muted/50">
                  {consoleOutput.length > 0 ? (
                    <div className="font-mono text-xs space-y-1">
                      {consoleOutput.map((log, i) => {
                        const colorClass = 
                          log.method === 'error' ? 'text-red-600 dark:text-red-400' :
                          log.method === 'warn' ? 'text-yellow-600 dark:text-yellow-400' :
                          log.method === 'info' ? 'text-blue-600 dark:text-blue-400' :
                          'text-foreground';
                        
                        return (
                          <div key={i} className={`flex items-start gap-2 ${colorClass} py-1 border-b border-border/50`}>
                            <span className="text-muted-foreground shrink-0">
                              {log.method === 'error' ? '❌' : 
                               log.method === 'warn' ? '⚠️' : 
                               log.method === 'info' ? 'ℹ️' : '▸'}
                            </span>
                            <span className="flex-1 break-all">
                              {log.args.join(' ')}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p className="font-semibold text-foreground">✨ React Playground - 100% Local</p>
                      <p>• No API calls required</p>
                      <p>• Code compiles in browser using Babel</p>
                      <p>• React & ReactDOM are available globally</p>
                      <p>• ES6 imports automatically converted</p>
                      <p>• Try console.log() to see output here!</p>
                      <p className="text-xs italic pt-1">Tip: Use "const {`{ useState }`} = React;" instead of imports</p>
                    </div>
                  )}
                </ScrollArea>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
