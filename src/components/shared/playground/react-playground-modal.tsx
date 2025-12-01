'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Code, Terminal, Play, RefreshCw, X, Loader2,
  FileCode, Palette, Eye, Trash2, Settings2, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useReactPlayground } from './react-playground-context';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const defaultJsx = `function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('React');

  return (
    <div className="app">
      <div className="card">
        <h1>Hello, {name}! 👋</h1>
        <p className="subtitle">Welcome to React Playground</p>
        
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span className="count">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="info">
          <p>✨ Edit the code to see live updates!</p>
          <p>🎨 Modify the CSS for custom styling</p>
        </div>
      </div>
    </div>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
`;

const defaultCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.app {
  width: 100%;
  max-width: 600px;
}

.card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.counter button {
  background: #667eea;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.counter button:hover {
  background: #5568d3;
  transform: scale(1.1);
}

.counter button:active {
  transform: scale(0.95);
}

.count {
  font-size: 3rem;
  font-weight: bold;
  color: #667eea;
  min-width: 80px;
}

.input-group {
  margin: 2rem 0;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
}

.info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #f3f4f6;
}

.info p {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
`;

interface ConsoleLog {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
  timestamp: number;
}

export function ReactPlaygroundModal() {
  const { isOpen, playgroundData, closePlayground } = useReactPlayground();
  const { theme } = useTheme();
  
  const [jsxCode, setJsxCode] = useState(defaultJsx);
  const [cssCode, setCssCode] = useState(defaultCss);
  const [compiledJs, setCompiledJs] = useState('');
  const [consoleOutput, setConsoleOutput] = useState<ConsoleLog[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [autoRun, setAutoRun] = useState(true);
  const [visiblePanels, setVisiblePanels] = useState({
    jsx: true,
    css: true,
    preview: true,
    console: true,
  });
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const autoRunTimeoutRef = useRef<NodeJS.Timeout>();
  const hasInitialRunRef = useRef(false);
  
  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  // Initialize with playground data
  useEffect(() => {
    if (isOpen && playgroundData) {
      setJsxCode(playgroundData.jsx || defaultJsx);
      setCssCode(playgroundData.css || defaultCss);
      setConsoleOutput([]);
      setCompileError(null);
      hasInitialRunRef.current = false;
    }
  }, [isOpen, playgroundData]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (autoRunTimeoutRef.current) {
        clearTimeout(autoRunTimeoutRef.current);
      }
    };
  }, []);

  const addConsoleLog = useCallback((type: ConsoleLog['type'], ...args: unknown[]) => {
    const message = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' ');
    
    setConsoleOutput(prev => [...prev, {
      type,
      message,
      timestamp: Date.now(),
    }]);
  }, []);

  const compileJSX = useCallback(async (code: string) => {
    setIsCompiling(true);
    setCompileError(null);

    try {
      // Load Babel standalone if not already loaded
      if (typeof window !== 'undefined' && !(window as any).Babel) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@babel/standalone@7.23.5/babel.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Compile JSX to JavaScript
      const result = (window as any).Babel.transform(code, {
        presets: ['react'],
        filename: 'app.jsx',
      });

      setCompiledJs(result.code);
      setIsCompiling(false);
      return result.code;
    } catch (error: any) {
      setCompileError(error.message);
      setIsCompiling(false);
      addConsoleLog('error', 'Compilation Error:', error.message);
      return null;
    }
  }, [addConsoleLog]);

  const runCode = useCallback(async () => {
    if (!iframeRef.current) return;

    setConsoleOutput([]);
    setHasChanges(false);

    // Compile JSX
    const compiled = await compileJSX(jsxCode);
    if (!compiled) return;

    // Create iframe content
    const iframeDoc = iframeRef.current.contentDocument;
    if (!iframeDoc) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>${cssCode}</style>
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        </head>
        <body>
          <div id="root"></div>
          <script>
            // Capture console output
            const originalConsole = {
              log: console.log,
              error: console.error,
              warn: console.warn,
              info: console.info,
            };

            ['log', 'error', 'warn', 'info'].forEach(method => {
              console[method] = (...args) => {
                originalConsole[method](...args);
                window.parent.postMessage({
                  type: 'console',
                  method: method,
                  args: args.map(arg => {
                    try {
                      return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
                    } catch {
                      return String(arg);
                    }
                  })
                }, '*');
              };
            });

            // Capture errors
            window.onerror = (message, source, lineno, colno, error) => {
              console.error(\`Error: \${message} at line \${lineno}\`);
              return true;
            };

            try {
              ${compiled}
            } catch (error) {
              console.error('Runtime Error:', error.message);
            }
          </script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();
  }, [jsxCode, cssCode, compileJSX]);

  // Listen for console messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'console') {
        addConsoleLog(event.data.method, ...event.data.args);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [addConsoleLog]);

  // Initial run when modal opens
  useEffect(() => {
    if (isOpen && jsxCode && cssCode && !hasInitialRunRef.current) {
      const timeout = setTimeout(() => {
        runCode();
        hasInitialRunRef.current = true;
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, jsxCode, cssCode, runCode]);

  // Auto-run on code change
  useEffect(() => {
    if (!hasInitialRunRef.current) return;

    setHasChanges(true);

    if (autoRun) {
      if (autoRunTimeoutRef.current) {
        clearTimeout(autoRunTimeoutRef.current);
      }
      autoRunTimeoutRef.current = setTimeout(() => {
        runCode();
      }, 500);
    }

    return () => {
      if (autoRunTimeoutRef.current) {
        clearTimeout(autoRunTimeoutRef.current);
      }
    };
  }, [jsxCode, cssCode, autoRun, runCode]);

  const handleReset = () => {
    setJsxCode(defaultJsx);
    setCssCode(defaultCss);
    setConsoleOutput([]);
    setCompileError(null);
  };

  const togglePanel = (panel: keyof typeof visiblePanels) => {
    setVisiblePanels(prev => ({ ...prev, [panel]: !prev[panel] }));
  };

  const clearConsole = () => {
    setConsoleOutput([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePlayground()}>
      <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">React Playground</DialogTitle>
                <p className="text-sm text-muted-foreground">Build React components with live preview</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Auto-run toggle */}
              <Button
                variant={autoRun ? "default" : "outline"}
                size="sm"
                onClick={() => setAutoRun(!autoRun)}
                className="gap-2"
              >
                <Zap className={cn("w-4 h-4", autoRun && "text-yellow-300")} />
                Auto-run
              </Button>

              {/* Manual Run button (shows when auto-run is off and there are changes) */}
              {!autoRun && hasChanges && (
                <Button
                  onClick={runCode}
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  disabled={isCompiling}
                >
                  {isCompiling ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </>
                  )}
                </Button>
              )}

              <Button variant="outline" size="sm" onClick={handleReset}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Panel toggles */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-muted-foreground mr-2">Panels:</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('jsx')}
              className={cn(
                "relative w-9 h-9 flex items-center justify-center rounded transition-all",
                visiblePanels.jsx
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              )}
            >
              <FileCode className="h-4 w-4" />
              {visiblePanels.jsx && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('css')}
              className={cn(
                "relative w-9 h-9 flex items-center justify-center rounded transition-all",
                visiblePanels.css
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              )}
            >
              <Palette className="h-4 w-4" />
              {visiblePanels.css && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('preview')}
              className={cn(
                "relative w-9 h-9 flex items-center justify-center rounded transition-all",
                visiblePanels.preview
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              )}
            >
              <Eye className="h-4 w-4" />
              {visiblePanels.preview && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('console')}
              className={cn(
                "relative w-9 h-9 flex items-center justify-center rounded transition-all",
                visiblePanels.console
                  ? 'bg-purple-500 text-white shadow-sm'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              )}
            >
              <Terminal className="h-4 w-4" />
              {visiblePanels.console && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* JSX Editor */}
            {visiblePanels.jsx && (
              <>
                <ResizablePanel defaultSize={25} minSize={15}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="flex items-center justify-between px-4 py-2 border-b bg-cyan-500/10">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">JSX</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">React</Badge>
                    </div>
                    <Editor
                      height="100%"
                      language="javascript"
                      value={jsxCode}
                      onChange={(value) => setJsxCode(value || '')}
                      theme={editorTheme}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 13,
                        lineNumbers: 'on',
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                        wordWrap: 'on',
                      }}
                    />
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
              </>
            )}

            {/* CSS Editor */}
            {visiblePanels.css && (
              <>
                <ResizablePanel defaultSize={20} minSize={15}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="flex items-center justify-between px-4 py-2 border-b bg-blue-500/10">
                      <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">CSS</span>
                      </div>
                    </div>
                    <Editor
                      height="100%"
                      language="css"
                      value={cssCode}
                      onChange={(value) => setCssCode(value || '')}
                      theme={editorTheme}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 13,
                        lineNumbers: 'on',
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                        wordWrap: 'on',
                      }}
                    />
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
              </>
            )}

            {/* Preview */}
            {visiblePanels.preview && (
              <>
                <ResizablePanel defaultSize={35} minSize={20}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="flex items-center justify-between px-4 py-2 border-b bg-emerald-500/10">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Preview</span>
                      </div>
                      {isCompiling && (
                        <Badge variant="secondary" className="gap-1">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Compiling...
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 overflow-auto">
                      {compileError ? (
                        <div className="p-4">
                          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
                            <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">
                              Compilation Error
                            </p>
                            <pre className="text-xs text-red-600 dark:text-red-500 whitespace-pre-wrap font-mono">
                              {compileError}
                            </pre>
                          </div>
                        </div>
                      ) : (
                        <iframe
                          ref={iframeRef}
                          className="w-full h-full border-0"
                          title="React Preview"
                          sandbox="allow-scripts"
                        />
                      )}
                    </div>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
              </>
            )}

            {/* Console */}
            {visiblePanels.console && (
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="h-full flex flex-col bg-muted/30">
                  <div className="flex items-center justify-between px-4 py-2 border-b bg-purple-500/10">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Console</span>
                      <Badge variant="secondary" className="text-xs">{consoleOutput.length}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearConsole}
                      className="h-7 px-2"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                  <ScrollArea className="flex-1 bg-slate-950 dark:bg-slate-950">
                    <div className="p-3 space-y-1 font-mono text-xs">
                      {consoleOutput.length === 0 ? (
                        <p className="text-slate-500 italic">Console output will appear here...</p>
                      ) : (
                        consoleOutput.map((log, index) => (
                          <div
                            key={index}
                            className={cn(
                              "py-1 px-2 rounded",
                              log.type === 'error' && "text-red-400 bg-red-950/30",
                              log.type === 'warn' && "text-yellow-400 bg-yellow-950/30",
                              log.type === 'info' && "text-blue-400 bg-blue-950/30",
                              log.type === 'log' && "text-emerald-400"
                            )}
                          >
                            <span className="text-slate-500 mr-2">
                              [{log.type}]
                            </span>
                            {log.message}
                          </div>
                        ))
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </ResizablePanel>
            )}
          </ResizablePanelGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}
