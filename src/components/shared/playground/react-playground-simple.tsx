'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Terminal, Loader2, AlertTriangle, Play, X, Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Simple working example
const initialCode = `// React and ReactDOM are available globally
function Counter() {
  const [count, setCount] = React.useState(0);
  
  return React.createElement('div', {
    style: {
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '16px',
      maxWidth: '400px',
      margin: '2rem auto',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    }
  }, [
    React.createElement('h2', { key: 'title', style: { fontSize: '2rem', marginBottom: '1rem' } }, '🚀 React Counter'),
    React.createElement('div', { key: 'count', style: { fontSize: '3rem', fontWeight: 'bold', margin: '1rem 0' } }, count),
    React.createElement('div', { key: 'buttons', style: { display: 'flex', gap: '1rem', justifyContent: 'center' } }, [
      React.createElement('button', {
        key: 'decrement',
        onClick: () => setCount(count - 1),
        style: {
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#ff6b6b',
          color: 'white',
          cursor: 'pointer'
        }
      }, '➖ Decrease'),
      React.createElement('button', {
        key: 'increment',
        onClick: () => setCount(count + 1),
        style: {
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#51cf66',
          color: 'white',
          cursor: 'pointer'
        }
      }, '➕ Increase')
    ])
  ]);
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Counter));`;

interface ConsoleMessage {
  method: 'log' | 'warn' | 'error' | 'info';
  args: string[];
  timestamp: number;
}

export function ReactPlayground({ defaultCode }: { defaultCode?: string }) {
  const [code, setCode] = useState(defaultCode || initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<ConsoleMessage[]>([]);
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  // Handle running the code
  const handleRun = useCallback(() => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    // Create iframe HTML with React and user code
    const iframeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              background: ${theme === 'dark' ? '#0f172a' : '#f8fafc'};
              color: ${theme === 'dark' ? '#f1f5f9' : '#1f2937'};
              min-height: 100vh;
              transition: background 0.3s ease, color 0.3s ease;
            }
            #root {
              width: 100%;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .error {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              font-family: system-ui, -apple-system, sans-serif;
              color: ${theme === 'dark' ? '#fca5a5' : '#dc2626'};
              background: ${theme === 'dark' ? '#7f1d1d' : '#fef2f2'};
              padding: 2rem;
              text-align: center;
            }
            .error h3 {
              color: ${theme === 'dark' ? '#fca5a5' : '#dc2626'};
              margin-bottom: 1rem;
            }
            .error pre {
              background: ${theme === 'dark' ? '#450a0a' : '#fef2f2'};
              color: ${theme === 'dark' ? '#fca5a5' : '#dc2626'};
              padding: 1rem;
              border-radius: 8px;
              text-align: left;
              overflow: auto;
              max-width: 600px;
              margin: 0 auto;
              font-size: 14px;
              border: 1px solid ${theme === 'dark' ? '#7f1d1d' : '#fecaca'};
            }
            .error p {
              color: ${theme === 'dark' ? '#fca5a5' : '#7f1d1d'};
              margin-top: 1rem;
            }
            .error button {
              background: ${theme === 'dark' ? '#dc2626' : '#dc2626'};
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
              padding: 0.5rem 1rem;
              margin-top: 1rem;
            }
            .error button:hover {
              background: ${theme === 'dark' ? '#b91c1c' : '#b91c1c'};
            }
            /* Dark mode text colors for user content */
            body h1, body h2, body h3, body h4, body h5, body h6 {
              color: ${theme === 'dark' ? '#f1f5f9' : '#1f2937'};
            }
            body p, body span, body div {
              color: ${theme === 'dark' ? '#e2e8f0' : '#374151'};
            }
            body button {
              background: ${theme === 'dark' ? '#1f2937' : '#f3f4f6'};
              color: ${theme === 'dark' ? '#f1f5f9' : '#1f2937'};
              border: 1px solid ${theme === 'dark' ? '#374151' : '#d1d5db'};
            }
            body input, body textarea, body select {
              background: ${theme === 'dark' ? '#1f2937' : '#ffffff'};
              color: ${theme === 'dark' ? '#f1f5f9' : '#1f2937'};
              border: 1px solid ${theme === 'dark' ? '#374151' : '#d1d5db'};
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
          
          <!-- React Libraries -->
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          
          <script>
            // Console capture system
            (function() {
              const originalLog = console.log;
              const originalError = console.error;
              const originalWarn = console.warn;
              const originalInfo = console.info;
              
              const postMessage = (type, args) => {
                window.parent.postMessage({
                  type: 'console',
                  method: type,
                  args: args.map(arg => {
                    if (typeof arg === 'object' && arg !== null) {
                      try {
                        return JSON.stringify(arg, null, 2);
                      } catch(e) {
                        return '[Object]';
                      }
                    }
                    return String(arg);
                  })
                }, '*');
              };

              console.log = function(...args) {
                originalLog.apply(console, args);
                postMessage('log', args);
              };
              console.error = function(...args) {
                originalError.apply(console, args);
                postMessage('error', args);
              };
              console.warn = function(...args) {
                originalWarn.apply(console, args);
                postMessage('warn', args);
              };
              console.info = function(...args) {
                originalInfo.apply(console, args);
                postMessage('info', args);
              };

              window.addEventListener('error', function(e) {
                postMessage('error', [e.message + (e.lineno ? ' (line ' + e.lineno + ')' : '')]);
              });
            })();
            
            // Wait for React and execute user code
            function waitForReact() {
              return new Promise((resolve, reject) => {
                let attempts = 0;
                const maxAttempts = 50;
                
                function check() {
                  attempts++;
                  
                  if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
                    resolve();
                  } else if (attempts >= maxAttempts) {
                    reject(new Error('Failed to load React libraries'));
                  } else {
                    setTimeout(check, 100);
                  }
                }
                check();
              });
            }
            
            // Execute user code
            async function executeUserCode() {
              try {
                await waitForReact();
                
                const root = document.getElementById('root');
                root.innerHTML = '';
                
                // Execute user code
                ${code.replace(/`/g, '\\`').replace(/\${/g, '\\${')}
                
                console.log('✅ Code executed successfully!');
                
              } catch (error) {
                console.error('❌ Runtime error:', error.message);
                const root = document.getElementById('root');
                root.innerHTML = \`
                  <div class="error">
                    <h3>⚠️ Runtime Error</h3>
                    <pre>\${error.message}</pre>
                    <p><strong>Common issues:</strong><br>
                    • Make sure to use ReactDOM.createRoot().render()<br>
                    • Check that all React components are properly defined<br>
                    • Verify that all variables are declared before use</p>
                  </div>
                \`;
              }
            }
            
            // Start execution
            setTimeout(executeUserCode, 100);
          </script>
        </body>
      </html>
    `;

    // Write to iframe
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(iframeHtml);
        iframeDoc.close();
      }
    }
    
    // Small delay to show "running" state
    setTimeout(() => {
      setIsRunning(false);
    }, 500);
  }, [code]);

  // Initial run
  useEffect(() => {
    handleRun();
  }, []);

  // Re-run when theme changes to update preview colors
  useEffect(() => {
    handleRun();
  }, [theme]);

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-3 border-b bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">React Playground</h3>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              React 18
            </Badge>
            <Badge variant="outline" className="text-xs">
              Live Preview
            </Badge>
            <Badge variant={theme === 'dark' ? 'default' : 'secondary'} className="text-xs">
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </Badge>
            <Button onClick={handleRun} disabled={isRunning} size="sm">
              {isRunning ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              {isRunning ? 'Running...' : 'Run'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="horizontal">
            {/* Code Editor */}
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="flex-shrink-0 px-4 py-2 border-b bg-muted/30">
                  <h3 className="text-sm font-medium">Code Editor</h3>
                </div>
                <div className="flex-1">
                  <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    value={code}
                    onChange={(value) => setCode(value || '')}
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      lineNumbers: 'on',
                      roundedSelection: false,
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                    }}
                  />
                </div>
              </div>
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            {/* Preview */}
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="flex-shrink-0 px-4 py-2 border-b bg-muted/30">
                  <h3 className="text-sm font-medium">Live Preview</h3>
                </div>
                <div className="flex-1 bg-white">
                  <iframe
                    ref={iframeRef}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                    className="bg-white border-0"
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        {/* Console */}
        <ResizablePanel defaultSize={40} minSize={20}>
          <div className="h-full flex flex-col">
            <div className="flex-shrink-0 px-4 py-2 border-b bg-muted/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <h3 className="text-sm font-medium">Console</h3>
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
            <ScrollArea className="flex-1 p-4 bg-muted/50">
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
                  <p className="font-semibold text-foreground">✨ React Playground - Simple & Reliable</p>
                  <p>• React 18 with ReactDOM</p>
                  <p>• No complex transpilation needed</p>
                  <p>• Use React.createElement() for components</p>
                  <p>• Try console.log() to see output here!</p>
                  <p className="text-xs italic pt-1">Tip: React and ReactDOM are available globally</p>
                </div>
              )}
            </ScrollArea>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
