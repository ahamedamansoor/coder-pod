'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ConsoleLog {
  method: 'log' | 'error' | 'warn' | 'info';
  args: any[];
}
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
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
  FileCode, Eye, Trash2, Settings2, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useReactPlayground } from './react-playground-context';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const defaultJsx = `function App() {
  const [count, setCount] = React.useState(0);
  
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: 'Arial, sans-serif'
  };
  
  const cardStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
    minWidth: '300px'
  };
  
  const titleStyle = {
    color: '#333',
    marginBottom: '1rem',
    fontSize: '1.5rem'
  };
  
  const countStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '2rem'
  };
  
  const buttonStyle = {
    background: '#10b981',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '0 0.5rem',
    transition: 'background-color 0.2s'
  };

  return React.createElement('div', { style: containerStyle },
    React.createElement('div', { style: cardStyle },
      React.createElement('h1', { style: titleStyle }, 'React Test Counter'),
      React.createElement('div', { style: countStyle }, count.toString()),
      React.createElement('button', {
        style: buttonStyle,
        onClick: () => setCount(count - 1)
      }, '-'),
      React.createElement('button', {
        style: buttonStyle,
        onClick: () => setCount(count + 1)
      }, '+')
    )
  );
}

console.log('React Playground: Rendering test component...');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
console.log('React Playground: Test component rendered successfully!');`;

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

export function ReactPlaygroundModal() {
  const { isOpen, playgroundData, closePlayground } = useReactPlayground();
  const { theme } = useTheme();
  
  const [jsxCode, setJsxCode] = useState(defaultJsx);
  const [compiledJs, setCompiledJs] = useState('');
  const [consoleOutput, setConsoleOutput] = useState<ConsoleLog[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [autoRun, setAutoRun] = useState(true);
  const [visiblePanels, setVisiblePanels] = useState({
    jsx: true,
    preview: true,
    console: true,
  });

  const getErrorMessage = (error: unknown) => error instanceof Error ? error.message : String(error);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const autoRunTimeoutRef = useRef<NodeJS.Timeout>();
  const hasInitialRunRef = useRef(false);
  
  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  // Initialize with playground data
  useEffect(() => {
    if (isOpen && playgroundData) {
      setJsxCode(playgroundData.jsx || defaultJsx);
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

  const addConsoleLog = useCallback((method: ConsoleLog['method'], ...args: unknown[]) => {
    setConsoleOutput(prev => [...prev, {
      method,
      args,
    }]);
  }, []);

  const compileJSX = useCallback(async (code: string) => {
    try {
      setIsCompiling(true);
      console.log('🔧 React Playground: Starting compilation...');
      
      // Check if code already uses React.createElement (no compilation needed)
      const usesReactCreateElement = code.includes('React.createElement') || code.includes('ReactDOM.createRoot');
      
      if (usesReactCreateElement) {
        console.log('✅ React Playground: Code already uses React.createElement, no compilation needed');
        setCompiledJs(code);
        setIsCompiling(false);
        return code;
      }
      
      // Load Babel if not already loaded with retry mechanism
      if (typeof window === 'undefined' || !(window as any).Babel) {
        console.log('📦 React Playground: Loading Babel...');
        const loadBabel = () => new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@babel/standalone@7.23.5/babel.min.js';
          script.onload = () => {
            // Give Babel a moment to initialize
            setTimeout(() => {
              if ((window as any).Babel && (window as any).Babel.transform) {
                console.log('✅ React Playground: Babel loaded successfully');
                resolve();
              } else {
                reject(new Error('Babel loaded but transform method not available'));
              }
            }, 100);
          };
          script.onerror = () => reject(new Error('Failed to load Babel script'));
          document.head.appendChild(script);
        });

        // Try loading Babel with retries
        let attempts = 0;
        const maxAttempts = 3;
        
        while (attempts < maxAttempts) {
          try {
            await loadBabel();
            break; // Success, exit retry loop
          } catch (error) {
            attempts++;
            const errorMessage = getErrorMessage(error);
            console.log(`⚠️ React Playground: Babel load attempt ${attempts} failed, retrying... ${errorMessage}`);
            if (attempts >= maxAttempts) {
              throw new Error(`Failed to load Babel after ${maxAttempts} attempts: ${errorMessage}`);
            }
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      }
      
      // Final check if Babel is available and has transform method
      if (!(window as any).Babel || !(window as any).Babel.transform) {
        throw new Error('Babel is not available or not loaded properly');
      }
      
      console.log('🔄 React Playground: Compiling JSX with Babel...');
      
      // Compile JSX to JavaScript with comprehensive presets
      const result = (window as any).Babel.transform(code, {
        presets: [
          ['react', { runtime: 'automatic' }],
          ['env', { targets: { browsers: ['last 2 versions'] } }]
        ],
        plugins: [],
        filename: 'app.jsx',
        sourceMaps: false,
        babelrc: false,
      });

      console.log('✅ React Playground: JSX compiled successfully');
      console.log('📏 Compiled code length:', result.code.length);
      
      setCompiledJs(result.code);
      setIsCompiling(false);
      return result.code;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.warn('⚠️ React Playground: Babel compilation failed, using original code:', errorMessage);
      
      // If compilation fails, try to use the original code directly
      // This allows pure React.createElement code to work without Babel
      try {
        console.log('🔄 React Playground: Attempting to use original code directly...');
        
        // Check if the code looks like valid JavaScript
        if (code.includes('function') || code.includes('const') || code.includes('React')) {
          console.log('✅ React Playground: Using original code (appears to be valid JavaScript)');
          setCompiledJs(code);
          setIsCompiling(false);
          addConsoleLog('warn', 'Using original code without JSX compilation');
          return code;
        } else {
          throw new Error('Code does not appear to be valid JavaScript');
        }
      } catch (fallbackError) {
        const fallbackMessage = getErrorMessage(fallbackError);
        console.error('❌ React Playground: Both compilation and fallback failed');
        setCompileError(`Compilation failed: ${errorMessage}. Original code also failed: ${fallbackMessage}`);
        setIsCompiling(false);
        addConsoleLog('error', 'Compilation Error:', errorMessage);
        return null;
      }
    }
  }, [addConsoleLog]);

  const runCode = useCallback(async () => {
    if (!iframeRef.current) {
      console.error('❌ React Playground: No iframe reference');
      return false;
    }

    console.log('🚀 React Playground: Starting code execution...');
    setConsoleOutput([]);
    setHasChanges(false);

    // Try to compile JSX, but fall back to direct execution if compilation fails
    let compiled = jsxCode;
    let useCompiled = false;
    
    console.log('📝 React Playground: Attempting JSX compilation...');
    try {
      const compiledCode = await compileJSX(jsxCode);
      if (compiledCode) {
        compiled = compiledCode;
        useCompiled = true;
        console.log('✅ React Playground: JSX compiled successfully');
        console.log('🔍 Compiled code length:', compiled.length);
      } else {
        console.log('⚠️ React Playground: Compilation failed, using original code');
      }
    } catch (error) {
      console.log('⚠️ React Playground: Compilation error, using original code:', getErrorMessage(error));
    }

    // Create iframe content
    const iframeDoc = iframeRef.current.contentDocument;
    if (!iframeDoc) {
      console.error('❌ React Playground: Could not access iframe document');
      return false;
    }

    console.log('🎨 React Playground: Creating iframe content...');
    console.log('📝 React Playground: Using', useCompiled ? 'compiled' : 'original', 'code');
    
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; }
    .loading { 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-size: 1.2rem;
      flex-direction: column;
      gap: 1rem;
    }
    .error { 
      padding: 20px; 
      color: #333; 
      background: #fee2e2; 
      border: 1px solid #fecaca;
      border-radius: 8px; 
      margin: 20px;
    }
    .error h3 { color: #dc2626; margin-bottom: 0.5rem; }
    .error pre { 
      background: #f3f4f6; 
      padding: 1rem; 
      border-radius: 4px; 
      overflow-x: auto;
      font-size: 0.9rem;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255,255,255,0.3);
      border-top: 4px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div id="root" class="loading">
    <div class="spinner"></div>
    <div id="loading-text">Loading React Playground...</div>
  </div>
  
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  
  <script>
    // Update loading text immediately
    document.getElementById('loading-text').textContent = 'Loading React libraries...';
    
    (function() {
      console.log('React Playground: Iframe initialized');
      
      // Enhanced React library detection
      function checkReactLibraries() {
        if (typeof React === 'undefined') {
          console.error('React library not loaded!');
          return { loaded: false, error: 'React library failed to load' };
        }
        
        if (typeof ReactDOM === 'undefined') {
          console.error('ReactDOM library not loaded!');
          return { loaded: false, error: 'ReactDOM library failed to load' };
        }
        
        // Check for essential React functions
        if (typeof React.createElement !== 'function') {
          console.error('React.createElement not available!');
          return { loaded: false, error: 'React.createElement not available' };
        }
        
        if (typeof ReactDOM.createRoot !== 'function') {
          console.error('ReactDOM.createRoot not available!');
          return { loaded: false, error: 'ReactDOM.createRoot not available' };
        }
        
        return { loaded: true };
      }
      
      // Wait for scripts to load with progressive checking
      function waitForReact() {
        return new Promise((resolve, reject) => {
          let attempts = 0;
          const maxAttempts = 30;
          
          function check() {
            attempts++;
            const status = checkReactLibraries();
            
            if (status.loaded) {
              console.log('React and ReactDOM loaded successfully');
              console.log('React version:', React.version);
              console.log('Execution mode: ${useCompiled ? 'Compiled JSX' : 'Direct React.createElement'}');
              resolve();
            } else if (attempts >= maxAttempts) {
              console.error('Failed to load React libraries after', maxAttempts, 'attempts');
              reject(new Error(status.error));
            } else {
              console.log('Waiting for React libraries... attempt', attempts);
              // Update loading text
              document.getElementById('loading-text').textContent = 'Loading React libraries... (' + attempts + '/' + maxAttempts + ')';
              setTimeout(check, 100);
            }
          }
          
          check();
        });
      }
      
      // Enhanced console capture
      function setupConsoleCapture() {
        const originalConsole = {
          log: console.log,
          error: console.error,
          warn: console.warn,
          info: console.info,
        };

        ['log', 'error', 'warn', 'info'].forEach(method => {
          console[method] = (...args) => {
            originalConsole[method](...args);
            try {
              window.parent.postMessage({
                type: 'console',
                method: method,
                args: args.map(arg => {
                  if (arg === null) return 'null';
                  if (arg === undefined) return 'undefined';
                  try {
                    return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
                  } catch {
                    return '[Object]';
                  }
                })
              }, '*');
            } catch (e) {
              originalConsole.error('Failed to post message:', e);
            }
          };
        });
      }
      
      // Enhanced error handling
      function setupErrorHandling() {
        window.onerror = (message, source, lineno, colno, error) => {
          console.error('Error:', message, 'at line', lineno, ':', colno);
          if (error && error.stack) {
            console.error('Stack trace:', error.stack);
          }
          return true;
        };
        
        window.addEventListener('unhandledrejection', (event) => {
          console.error('Unhandled promise rejection:', event.reason);
        });
      }
      
      // Main execution
      async function executeUserCode() {
        try {
          console.log('Setting up console capture...');
          setupConsoleCapture();
          setupErrorHandling();
          
          // Update loading text
          document.getElementById('loading-text').textContent = 'Waiting for React libraries...';
          
          console.log('Waiting for React libraries...');
          await waitForReact();
          
          // Update loading text
          document.getElementById('loading-text').textContent = 'Executing React code...';
          
          console.log('React Playground: Executing user code...');
          console.log('Code length: ${compiled.length} characters');
          
          // Clear loading indicator IMMEDIATELY before executing code
          const rootElement = document.getElementById('root');
          console.log('Clearing loading indicator...');
          console.log('Before clear - className:', rootElement.className, 'innerHTML length:', rootElement.innerHTML.length);
          
          // Force clear with multiple methods
          rootElement.className = '';
          rootElement.classList.remove('loading');
          rootElement.innerHTML = '';
          rootElement.style.display = '';
          rootElement.style.visibility = '';
          
          console.log('After clear - className:', rootElement.className, 'innerHTML length:', rootElement.innerHTML.length);
          
          // Additional force clear after a tiny delay
          setTimeout(() => {
            const checkRoot = document.getElementById('root');
            if (checkRoot) {
              checkRoot.className = '';
              checkRoot.classList.remove('loading');
              console.log('Double-check clear - className:', checkRoot.className);
            }
          }, 10);
          
          // Execute user code with timeout
          console.log('Executing user code...');
          
          // Add a wrapper to catch any synchronous errors
          try {
            (function() {
              ${compiled}
            })();
            console.log('React Playground: Code executed successfully');
            
            // Double-check loading is hidden and notify parent
            setTimeout(() => {
              const checkRoot = document.getElementById('root');
              if (checkRoot && checkRoot.className === 'loading') {
                console.warn('Forcing loading indicator to hide after execution');
                checkRoot.className = '';
              }
              window.parent.postMessage({ type: 'execution-complete' }, '*');
            }, 100);
            
          } catch (syncError) {
            throw syncError;
          }
          
          // Check if something was rendered after a delay
          setTimeout(() => {
            const rootEl = document.getElementById('root');
            if (rootEl && rootEl.children.length === 0) {
              console.warn('Warning: No elements rendered to root. Make sure your code calls ReactDOM.createRoot().render()');
              // Show a helpful message
              rootEl.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;"><h3>No Render Output</h3><p>Make sure your code calls ReactDOM.createRoot(document.getElementById("root")).render(yourComponent)</p></div>';
            }
          }, 2000);
          
        } catch (error) {
          console.error('React Playground: Runtime Error:', error.message);
          console.error('Stack:', error.stack);
          
          const rootElement = document.getElementById('root');
          rootElement.className = 'error';
          rootElement.innerHTML = '<h3>Runtime Error</h3><pre>' + error.message + '</pre><p>Check the console for more details and stack trace.</p>';
          
          // Notify parent of error
          window.parent.postMessage({ type: 'execution-error', error: error.message }, '*');
        }
      }
      
      // Start execution immediately
      executeUserCode();
      
      // Multiple fallbacks: Force hide loading at different intervals
      setTimeout(() => {
        const rootEl = document.getElementById('root');
        if (rootEl) {
          console.log('5-second fallback: Checking loading state');
          if (rootEl.className === 'loading') {
            console.warn('5-second fallback: Force hiding loading indicator');
            rootEl.className = '';
            rootEl.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;"><h3>Loading Timeout</h3><p>The React component took too long to load. Please check the console for errors.</p></div>';
          }
        }
      }, 5000);
      
      setTimeout(() => {
        const rootEl = document.getElementById('root');
        if (rootEl && rootEl.className === 'loading') {
          console.warn('10-second fallback: Force hiding loading indicator');
          rootEl.className = '';
          rootEl.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;"><h3>Loading Timeout</h3><p>The React component took too long to load. Please check the console for errors.</p></div>';
        }
      }, 10000);
    })();
  </script>
</body>
</html>`;

    console.log('📝 React Playground: Writing content to iframe...');
    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();
    console.log('✅ React Playground: Code execution completed');
    return true;
  }, [jsxCode, compileJSX]);

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

  // Initial run when modal opens - work exactly like refresh button
  useEffect(() => {
    if (isOpen && jsxCode && !hasInitialRunRef.current) {
      console.log('🚀 React Playground: Modal opened, running code immediately...');
      
      // Run immediately just like the refresh button
      const executeInitialRun = async () => {
        try {
          const success = await runCode();
          if (success) {
            hasInitialRunRef.current = true;
            console.log('✅ React Playground: Initial run completed successfully');
          } else {
            console.error('❌ React Playground: Initial run failed');
          }
        } catch (error) {
          console.error('❌ React Playground: Initial run error:', error);
        }
      };
      
      // Small delay to ensure iframe is ready, then run immediately
      const timeout = setTimeout(executeInitialRun, 50);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, jsxCode, runCode]);

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
  }, [jsxCode, autoRun, runCode]);

  const handleReset = () => {
    setJsxCode(defaultJsx);
    setConsoleOutput([]);
    setCompileError(null);
  };

  const togglePanel = (panel: keyof typeof visiblePanels) => {
    setVisiblePanels(prev => ({ ...prev, [panel]: !prev[panel] }));
  };

  const clearConsole = () => {
    setConsoleOutput([]);
  };

  const getLogColor = (method: string) => {
    switch (method) {
      case 'error':
        return 'text-red-400 bg-red-950/20';
      case 'warn':
        return 'text-yellow-400 bg-yellow-950/20';
      case 'info':
        return 'text-blue-400 bg-blue-950/20';
      case 'log':
      default:
        return 'text-slate-300 bg-slate-800/50';
    }
  };

  const renderLogMessage = (msg: any) => {
    if (typeof msg === 'object' && msg !== null) {
      return JSON.stringify(msg, null, 2);
    }
    return String(msg);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePlayground()}>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] flex flex-col p-0 m-0 gap-0 rounded-none border-0" showCloseButton={false}>
        {/* Clean, Structured Header matching Web Playground */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-cyan-50/30 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/20 flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">React Playground</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">Build React components with live preview</p>
              </div>
            </div>
            
            {/* Language Badges */}
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-cyan-50 border-cyan-200 text-cyan-700 dark:bg-cyan-950/30 dark:border-cyan-800 dark:text-cyan-400">
                React
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-400">
                JSX
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Clean Square Panel Toggles */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Panels</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => togglePanel('jsx')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.jsx 
                      ? 'bg-cyan-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="JSX"
                >
                  <FileCode className="h-4 w-4" />
                  {visiblePanels.jsx && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
                                <button
                  onClick={() => togglePanel('preview')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.preview 
                      ? 'bg-emerald-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="Preview"
                >
                  <Eye className="h-4 w-4" />
                  {visiblePanels.preview && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => togglePanel('console')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.console 
                      ? 'bg-purple-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="Console"
                >
                  <Terminal className="h-4 w-4" />
                  {visiblePanels.console && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Auto-run Toggle */}
            <button
              onClick={() => setAutoRun(!autoRun)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                autoRun
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg'
                  : 'border-cyan-200 dark:border-cyan-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 border'
              }`}
              title={autoRun ? 'Auto-run enabled - Click to disable' : 'Manual run - Click to enable auto-run'}
            >
              <RefreshCw className={`h-4 w-4 ${autoRun ? 'animate-spin' : ''}`} />
              <span>{autoRun ? 'Auto-run' : 'Manual'}</span>
            </button>
            
            {/* Run Button */}
            {!autoRun && (
              <Button
                variant="default"
                size="sm"
                onClick={runCode}
                className="h-10 px-4 text-xs font-semibold gap-2 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 relative"
                disabled={isCompiling}
              >
                {isCompiling ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                Run Code
                {hasChanges && !isCompiling && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white animate-pulse" />
                )}
              </Button>
            )}
            
            {autoRun && hasChanges && (
              <Badge variant="secondary" className="text-xs px-3 py-1 animate-pulse font-medium">
                ⚡ Running...
              </Badge>
            )}
            
            {/* Clear Console */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearConsole} 
              className="h-8 text-xs gap-1.5"
              title="Clear console"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
            
            <div className="h-4 w-px bg-border" />
            
            {/* Reset Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-8 text-xs gap-1.5"
              title="Reset to default code"
            >
              <RefreshCw className="h-3 w-3" />
            </Button>
            
            {/* Close Button */}
            <DialogClose asChild>
              <button
                className="h-8 w-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                title="Close playground"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* JSX Editor */}
            {visiblePanels.jsx && (
              <>
                <ResizablePanel defaultSize={40} minSize={25}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="flex items-center justify-between px-4 py-2 border-b bg-cyan-500/10">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">JSX</span>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400">React</Badge>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900">
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
                      <div className="flex items-center gap-2">
                        {isCompiling && (
                          <Badge variant="secondary" className="gap-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Compiling...
                          </Badge>
                        )}
                        {!isCompiling && !compileError && (
                          <Badge variant="secondary" className="gap-1 bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400">
                            ✓ Ready
                          </Badge>
                        )}
                      </div>
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
                        <div className="relative w-full h-full">
                          {!isCompiling && !compiledJs && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                              <div className="text-center">
                                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-emerald-500" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">Initializing React preview...</p>
                              </div>
                            </div>
                          )}
                          <iframe
                            ref={iframeRef}
                            className="w-full h-full border-0"
                            title="React Preview"
                            sandbox="allow-scripts allow-same-origin"
                            onLoad={() => {
                              if (!hasInitialRunRef.current && isOpen) {
                                runCode().then((success) => {
                                  if (success) {
                                    hasInitialRunRef.current = true;
                                  }
                                });
                              }
                            }}
                          />
                        </div>
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
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400">{consoleOutput.length}</Badge>
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
                      {!consoleOutput || consoleOutput.length === 0 ? (
                        <p className="text-slate-500 italic">Console output will appear here...</p>
                      ) : (
                        consoleOutput.map((log, index) => (
                          <div
                            key={index}
                            className={cn(
                              "flex items-start gap-2 py-0.5 px-2 rounded",
                              getLogColor(log.method)
                            )}
                          >
                            <span className="text-xs text-slate-500">
                              [{new Date().toLocaleTimeString()}]
                            </span>
                            <span className="flex-1 break-all">
                              {log.args && log.args.map((arg, i) => (
                                <span key={i}>
                                  {i > 0 && " "}
                                  {renderLogMessage(arg)}
                                </span>
                              ))}
                            </span>
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
