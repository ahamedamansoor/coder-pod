'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReactPlayground } from './react-playground-context';

interface ConsoleLog {
  method: 'log' | 'error' | 'warn' | 'info';
  args: any[];
  timestamp: number;
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
  FileCode, Eye, Trash2, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Default interactive example
const defaultExample = `function InteractiveCounter() {
  const [count, setCount] = React.useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));
  const reset = () => setCount(0);
  
  // Inline styles for the component
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '16px',
    maxWidth: '400px',
    margin: '2rem auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  };
  
  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0 0 1rem 0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  };
  
  const countStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };
  
  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  };
  
  const decrementStyle = {
    ...buttonStyle,
    background: count > 0 ? '#ff6b6b' : '#ccc',
    color: 'white',
    transform: 'scale(1)'
  };
  
  const resetStyle = {
    ...buttonStyle,
    background: '#4ecdc4',
    color: 'white'
  };
  
  const incrementStyle = {
    ...buttonStyle,
    background: '#51cf66',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🚀 Interactive Counter</h2>
      <div style={countStyle}>{count}</div>
      <div style={buttonContainerStyle}>
        <button 
          style={decrementStyle}
          onClick={decrement}
          disabled={count === 0}
        >
          ➖ Decrease
        </button>
        <button 
          style={resetStyle}
          onClick={reset}
        >
          🔄 Reset
        </button>
        <button 
          style={incrementStyle}
          onClick={increment}
        >
          ➕ Increase
        </button>
      </div>
      <p style={{ marginTop: '1rem', opacity: 0.8 }}>
        Click the buttons to see React state management in action!
      </p>
    </div>
  );
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InteractiveCounter />);`;

export function ReactPlaygroundModal() {
  const { isOpen, playgroundData, closePlayground } = useReactPlayground();
  const [jsxCode, setJsxCode] = useState(defaultExample);
  const [consoleOutput, setConsoleOutput] = useState<ConsoleLog[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [autoRun, setAutoRun] = useState(true);
  const [visiblePanels, setVisiblePanels] = useState({
    editor: true,
    preview: true,
    console: true,
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const autoRunTimeoutRef = useRef<NodeJS.Timeout>();
  const hasInitialRunRef = useRef(false);
  const { theme } = useTheme();

  // Initialize with playground data when modal opens
  useEffect(() => {
    if (isOpen && playgroundData?.jsx) {
      setJsxCode(playgroundData.jsx);
      setConsoleOutput([]);
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

  // Add console log with timestamp
  const addConsoleLog = useCallback((method: ConsoleLog['method'], ...args: unknown[]) => {
    setConsoleOutput(prev => [...prev, {
      method,
      args,
      timestamp: Date.now()
    }]);
  }, []);

  // Simple JSX transformation as primary method (no external Babel dependency)
  const compileJSX = useCallback(async (code: string): Promise<string> => {
    try {
      console.log('🔧 Starting JSX compilation...');
      
      // Check if code contains JSX
      const hasJSX = /<[^>]*>/.test(code) || code.includes('React.Fragment') || code.includes('<>');
      
      if (!hasJSX) {
        console.log('✅ No JSX detected, using code as-is');
        return code; // Return as-is if no JSX
      }

      console.log('⚙️ Transforming JSX to React.createElement...');
      
      // Use our built-in JSX transformation
      const transformedCode = transformJSXToReact(code);
      
      console.log('✅ JSX transformation completed');
      return transformedCode;
    } catch (error) {
      console.error('❌ JSX compilation failed:', error);
      throw new Error(`Compilation failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, []);

  // Enhanced JSX transformation function
  const transformJSXToReact = (code: string): string => {
    console.log('🔄 Applying JSX to React.createElement transformation...');
    
    let transformedCode = code;
    
    // Step 1: Transform JSX elements with props and children
    transformedCode = transformedCode.replace(
      /<(\w+)([^>]*?)>([\s\S]*?)<\/\1>/g,
      (match, tagName, props, children) => {
        console.log(`Transforming <${tagName}> element`);
        
        // Parse props
        let propsObj = 'null';
        if (props.trim()) {
          // Simple prop parsing (basic implementation)
          const propMatches = props.match(/(\w+)=\{([^}]+)\}|(\w+)="([^"]*)"/g);
          if (propMatches) {
            const propsArray: string[] = [];
            propMatches.forEach((prop: string | null) => {
              if (prop && prop.includes('{')) {
                const [, key, value] = prop.match(/(\w+)=\{([^}]+)\}/) || [];
                if (key && value) propsArray.push(`${key}: ${value}`);
              } else if (prop) {
                const [, key, value] = prop.match(/(\w+)="([^"]*)"/) || [];
                if (key && value) propsArray.push(`${key}: "${value}"`);
              }
            });
            propsObj = propsArray.length > 0 ? `{ ${propsArray.join(', ')} }` : 'null';
          }
        }
        
        // Handle children recursively
        let processedChildren = children.trim();
        if (processedChildren) {
          // Check if children contain more JSX
          if (/<[^>]*>/.test(processedChildren)) {
            processedChildren = transformJSXToReact(processedChildren);
          }
          // Wrap text children in quotes
          if (!processedChildren.includes('React.createElement') && !processedChildren.includes('{') && !processedChildren.includes('"')) {
            processedChildren = `"${processedChildren}"`;
          }
        } else {
          processedChildren = 'null';
        }
        
        return `React.createElement('${tagName}', ${propsObj}, ${processedChildren})`;
      }
    );
    
    // Step 2: Transform self-closing tags
    transformedCode = transformedCode.replace(
      /<(\w+)([^>]*?)\/>/g,
      (match, tagName, props) => {
        console.log(`Transforming self-closing <${tagName}/> element`);
        
        let propsObj = 'null';
        if (props.trim()) {
          const propMatches = props.match(/(\w+)=\{([^}]+)\}|(\w+)="([^"]*)"/g);
          if (propMatches) {
            const propsArray: string[] = [];
            propMatches.forEach((prop: string | null) => {
              if (prop && prop.includes('{')) {
                const [, key, value] = prop.match(/(\w+)=\{([^}]+)\}/) || [];
                if (key && value) propsArray.push(`${key}: ${value}`);
              } else if (prop) {
                const [, key, value] = prop.match(/(\w+)="([^"]*)"/) || [];
                if (key && value) propsArray.push(`${key}: "${value}"`);
              }
            });
            propsObj = propsArray.length > 0 ? `{ ${propsArray.join(', ')} }` : 'null';
          }
        }
        
        return `React.createElement('${tagName}', ${propsObj})`;
      }
    );
    
    // Step 3: Handle React.Fragment
    transformedCode = transformedCode.replace(
      /<React.Fragment>([\s\S]*?)<\/React.Fragment>/g,
      (match, children) => {
        let processedChildren = children.trim();
        if (processedChildren && !processedChildren.includes('React.createElement')) {
          processedChildren = `"${processedChildren}"`;
        }
        return `React.createElement(React.Fragment, null, ${processedChildren})`;
      }
    );
    
    // Step 4: Handle empty fragments <>
    transformedCode = transformedCode.replace(
      /<>([\s\S]*?)<\/>/g,
      (match, children) => {
        let processedChildren = children.trim();
        if (processedChildren && !processedChildren.includes('React.createElement')) {
          processedChildren = `"${processedChildren}"`;
        }
        return `React.createElement(React.Fragment, null, ${processedChildren})`;
      }
    );
    
    // Step 5: Add React import if not present
    if (!transformedCode.includes('const React') && !transformedCode.includes('import React')) {
      transformedCode = 'const React = window.React;\n' + transformedCode;
    }
    
    // Step 6: Add ReactDOM import if not present and render call exists
    if (transformedCode.includes('ReactDOM') && !transformedCode.includes('const ReactDOM') && !transformedCode.includes('import ReactDOM')) {
      transformedCode = 'const ReactDOM = window.ReactDOM;\n' + transformedCode;
    }
    
    // Step 7: Ensure proper component rendering setup
    if (!transformedCode.includes('ReactDOM.createRoot') && !transformedCode.includes('ReactDOM.render')) {
      // If no render call found, add automatic rendering
      transformedCode += '\n\n// Auto-render the component\nif (typeof document !== "undefined") {\n  try {\n    const root = ReactDOM.createRoot(document.getElementById("root"));\n    root.render(<InteractiveCounter />);\n  } catch (e) {\n    console.error("Auto-render failed:", e);\n  }\n}';
    }
    
    console.log('✅ JSX transformation completed successfully');
    return transformedCode;
  };

  // Run code in iframe
  const runCode = useCallback(async () => {
    if (!iframeRef.current) {
      addConsoleLog('error', 'No iframe reference available');
      return false;
    }

    console.log('🚀 React Playground: Starting execution...');
    setConsoleOutput([]);
    setHasChanges(false);
    setIsRunning(true);

    try {
      // Compile JSX first
      console.log('🔧 Compiling JSX code...');
      const compiledCode = await compileJSX(jsxCode);
      console.log('✅ JSX compilation successful');
      
      // Create iframe HTML with React and user code
      const iframeHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: system-ui, -apple-system, sans-serif; 
      background: #f8fafc;
      min-height: 100vh;
      transition: background 0.3s ease;
    }
    
    #root {
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Innovative Loading Animation */
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      text-align: center;
      animation: fadeInScale 0.6s ease-out;
    }
    
    .loading-logo {
      width: 80px;
      height: 80px;
      position: relative;
      margin-bottom: 2rem;
    }
    
    .react-atom {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid #61dafb;
      border-radius: 50%;
      animation: rotate 2s linear infinite;
    }
    
    .react-core {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background: #61dafb;
      border-radius: 50%;
      animation: pulse 1.5s ease-in-out infinite;
    }
    
    .react-electron {
      position: absolute;
      width: 12px;
      height: 12px;
      background: #61dafb;
      border-radius: 50%;
      animation: orbit 3s linear infinite;
    }
    
    .react-electron:nth-child(3) {
      animation-delay: 0s;
    }
    
    .react-electron:nth-child(4) {
      animation-delay: 1s;
    }
    
    .react-electron:nth-child(5) {
      animation-delay: 2s;
    }
    
    .loading-text {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
      animation: textGlow 2s ease-in-out infinite;
    }
    
    .loading-subtitle {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 2rem;
      animation: fadeIn 1s ease-out 0.3s both;
    }
    
    .loading-dots {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .loading-dot {
      width: 8px;
      height: 8px;
      background: #61dafb;
      border-radius: 50%;
      animation: dotBounce 1.4s ease-in-out infinite;
    }
    
    .loading-dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .loading-dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    /* Loading Progress Bar */
    .loading-progress {
      width: 200px;
      height: 4px;
      background: #e5e7eb;
      border-radius: 2px;
      overflow: hidden;
      margin-top: 1.5rem;
    }
    
    .loading-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #61dafb, #4fc3f7);
      border-radius: 2px;
      animation: progress 2s ease-in-out infinite;
    }
    
    /* Dark Mode Support */
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
      
      .loading-text {
        color: #f1f5f9;
      }
      
      .loading-subtitle {
        color: #94a3b8;
      }
      
      .loading-progress {
        background: #334155;
      }
      
      .react-atom {
        border-color: #61dafb;
        box-shadow: 0 0 20px rgba(97, 218, 251, 0.5);
      }
      
      .react-core {
        background: #61dafb;
        box-shadow: 0 0 15px rgba(97, 218, 251, 0.8);
      }
      
      .react-electron {
        background: #61dafb;
        box-shadow: 0 0 10px rgba(97, 218, 251, 0.6);
      }
      
      .loading-dot {
        background: #61dafb;
        box-shadow: 0 0 8px rgba(97, 218, 251, 0.5);
      }
    }
    
    /* Animations */
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.2); }
    }
    
    @keyframes orbit {
      from {
        transform: rotate(0deg) translateX(30px) rotate(0deg);
      }
      to {
        transform: rotate(360deg) translateX(30px) rotate(-360deg);
      }
    }
    
    @keyframes textGlow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes dotBounce {
      0%, 80%, 100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
    }
    
    @keyframes progress {
      0% { width: 0%; }
      50% { width: 70%; }
      100% { width: 100%; }
    }
    
    .error {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: system-ui, -apple-system, sans-serif;
      color: #dc2626;
      background: #fef2f2;
    }
    
    @media (prefers-color-scheme: dark) {
      .error {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
  </style>
</head>
<body>
  <div id="root">
    <div class="loading-container">
      <div class="loading-logo">
        <div class="react-atom"></div>
        <div class="react-core"></div>
        <div class="react-electron"></div>
        <div class="react-electron"></div>
        <div class="react-electron"></div>
      </div>
      <div class="loading-text">⚡ React Playground</div>
      <div class="loading-subtitle">Initializing your development environment...</div>
      <div class="loading-dots">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
      <div class="loading-progress">
        <div class="loading-progress-bar"></div>
      </div>
    </div>
  </div>
  
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
      
      const postMessage = (type: string, args: any[]) => {
        window.parent.postMessage({
          source: 'react-playground',
          type: type,
          message: args.map(arg => {
            if (arg instanceof Error) {
              return { type: 'Error', message: arg.message, stack: arg.stack };
            }
            if (typeof arg === 'object' && arg !== null) {
              try {
                return JSON.parse(JSON.stringify(arg, null, 2));
              } catch(e) {
                return '[Object]';
              }
            }
            return arg;
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
    
    // Wait for React to be available with better error handling
    function waitForReact() {
      return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 50; // Increased attempts
        
        function check() {
          attempts++;
          console.log('Checking for React... attempt ' + attempts);
          
          if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
            console.log('✅ React and ReactDOM loaded successfully');
            console.log('React version:', React.version);
            console.log('ReactDOM version:', ReactDOM.version);
            resolve();
          } else if (attempts >= maxAttempts) {
            console.error('❌ Failed to load React libraries after ' + maxAttempts + ' attempts');
            console.log('React available:', typeof React !== 'undefined');
            console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');
            reject(new Error('Failed to load React libraries. Check your internet connection.'));
          } else {
            setTimeout(check, 100); // Increased timeout
          }
        }
        check();
      });
    }
    
    // Execute user code with better error handling
    async function executeUserCode() {
      try {
        console.log('🎯 React Playground: Initializing execution...');
        
        // Wait for React
        await waitForReact();
        
        // Clear and prepare root
        const root = document.getElementById('root');
        root.innerHTML = '';
        
        console.log('⚡ React Playground: Executing user code...');
        
        // Execute compiled user code with try-catch
        try {
          ${compiledCode}
          console.log('🎉 React Playground: Code executed successfully!');
          
          // Verify that something was rendered
          setTimeout(() => {
            const rootElement = document.getElementById('root');
            if (rootElement && rootElement.innerHTML.trim() === '') {
              console.warn('⚠️ Warning: Nothing was rendered to the DOM. Make sure your code includes a ReactDOM.render() or ReactDOM.createRoot().render() call.');
            } else {
              console.log('✅ Component successfully rendered to DOM');
            }
          }, 100);
          
        } catch (codeError) {
          console.error('❌ User code error:', codeError.message);
          console.error('Stack trace:', codeError.stack);
          throw codeError;
        }
        
      } catch (error) {
        console.error('❌ React Playground: Runtime error:', error.message);
        const root = document.getElementById('root');
        root.innerHTML = \`
          <div style="padding: 2rem; text-align: center; color: #dc2626; font-family: system-ui;">
            <h3 style="margin-bottom: 1rem;">⚠️ Runtime Error</h3>
            <pre style="background: #fef2f2; padding: 1rem; border-radius: 8px; text-align: left; overflow: auto; max-width: 600px; margin: 0 auto; font-size: 14px;">\${error.message}</pre>
            <p style="margin-top: 1rem; color: #666; font-size: 14px;">
              <strong>Common issues:</strong><br>
              • Make sure to use ReactDOM.createRoot().render()<br>
              • Check that all React components are properly defined<br>
              • Verify that all variables are declared before use
            </p>
            <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #dc2626; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Reload Playground</button>
          </div>
        \`;
      }
    }
    
    // Start execution with timeout
    setTimeout(executeUserCode, 100);
  </script>
</body>
</html>`;

      // Write to iframe
      const iframeDoc = iframeRef.current.contentDocument;
      if (!iframeDoc) {
        throw new Error('Could not access iframe document');
      }

      iframeDoc.open();
      iframeDoc.write(iframeHtml);
      iframeDoc.close();
      
      console.log('✅ React Playground: Execution completed');
      setIsRunning(false);
      return true;
      
    } catch (error) {
      console.error('❌ React Playground: Execution failed:', error);
      setIsRunning(false);
      addConsoleLog('error', error instanceof Error ? error.message : String(error));
      return false;
    }
  }, [jsxCode, compileJSX, addConsoleLog]);

  // Listen for console messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source === 'react-playground') {
        addConsoleLog(event.data.type, ...event.data.message);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [addConsoleLog]);

  // Auto-run when modal opens
  useEffect(() => {
    if (isOpen && jsxCode && !hasInitialRunRef.current) {
      const timeout = setTimeout(() => {
        runCode().then((success) => {
          if (success) {
            hasInitialRunRef.current = true;
          }
        });
      }, 500);
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
      }, 1000);
    }

    return () => {
      if (autoRunTimeoutRef.current) {
        clearTimeout(autoRunTimeoutRef.current);
      }
    };
  }, [jsxCode, autoRun, runCode]);

  // Toggle panel visibility
  const togglePanel = (panel: keyof typeof visiblePanels) => {
    setVisiblePanels(prev => ({ ...prev, [panel]: !prev[panel] }));
  };

  // Clear console
  const clearConsole = () => {
    setConsoleOutput([]);
  };

  // Get log color based on method
  const getLogColor = (method: string) => {
    switch (method) {
      case 'error':
        return 'text-red-400 bg-red-950/20 border-red-800/30';
      case 'warn':
        return 'text-yellow-400 bg-yellow-950/20 border-yellow-800/30';
      case 'info':
        return 'text-blue-400 bg-blue-950/20 border-blue-800/30';
      case 'log':
      default:
        return 'text-slate-300 bg-slate-800/50 border-slate-700/30';
    }
  };

  // Format log message for display
  const renderLogMessage = (msg: any) => {
    if (typeof msg === 'object' && msg !== null) {
      return JSON.stringify(msg, null, 2);
    }
    return String(msg);
  };

  // Format timestamp
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePlayground()}>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] flex flex-col p-0 m-0 gap-0 rounded-none border-0" showCloseButton={false}>
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/20 flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">React Playground</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">Write, edit, and run React code with live preview</p>
              </div>
            </div>
            
            {/* Language badges */}
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-400">
                React
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-400">
                JSX
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Panel toggles */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Panels</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => togglePanel('editor')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.editor 
                      ? 'bg-blue-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="Code Editor"
                >
                  <FileCode className="h-4 w-4" />
                  {visiblePanels.editor && (
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
                  title="Live Preview"
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
            
            {/* Auto-run toggle */}
            <button
              onClick={() => setAutoRun(!autoRun)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                autoRun
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                  : 'border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 border'
              }`}
              title={autoRun ? 'Auto-run enabled' : 'Manual run - Click to enable auto-run'}
            >
              <RefreshCw className={`h-4 w-4 ${autoRun ? 'animate-spin' : ''}`} />
              <span>{autoRun ? 'Auto-run' : 'Manual'}</span>
            </button>
            
            {/* Run button */}
            {!autoRun && (
              <Button
                variant="default"
                size="sm"
                onClick={runCode}
                className="h-10 px-4 text-xs font-semibold gap-2 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 relative"
                disabled={isRunning}
              >
                {isRunning ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                Run Code
                {hasChanges && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white animate-pulse" />
                )}
              </Button>
            )}
            
            {autoRun && hasChanges && (
              <Badge variant="secondary" className="text-xs px-3 py-1 animate-pulse font-medium">
                ⚡ Running...
              </Badge>
            )}
            
            {/* Clear console */}
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
            
            {/* Close button */}
            <DialogClose asChild>
              <button
                className="group relative w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg hover:shadow-xl"
                aria-label="Close playground"
              >
                <X className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 rounded-full bg-red-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* Code Editor */}
            {visiblePanels.editor && (
              <>
                <ResizablePanel defaultSize={45} minSize={30}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="flex items-center justify-between px-4 py-2 border-b bg-blue-500/10">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">JSX Editor</span>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                        React Component
                      </Badge>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900">
                      <Editor
                        height="100%"
                        language="javascriptreact"
                        value={jsxCode}
                        onChange={(value) => setJsxCode(value || '')}
                        theme={theme === 'dark' ? 'vs-dark' : 'light'}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: 'on',
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                          tabSize: 2,
                          wordWrap: 'on',
                          folding: true,
                          renderWhitespace: 'selection',
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
                <ResizablePanel defaultSize={35} minSize={25}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="flex items-center justify-between px-4 py-2 border-b bg-emerald-500/10">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Live Preview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isRunning && (
                          <Badge variant="secondary" className="gap-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Running...
                          </Badge>
                        )}
                        {!isRunning && (
                          <Badge variant="secondary" className="gap-1 bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400">
                            ✓ Ready
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900">
                      <iframe
                        ref={iframeRef}
                        className="w-full h-full border-0"
                        title="React Preview"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
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
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400">
                        {consoleOutput.length} messages
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-900 dark:bg-slate-950">
                    <ScrollArea className="h-full p-4">
                      <div className="space-y-2 font-mono text-sm">
                        {consoleOutput.length === 0 ? (
                          <div className="text-slate-500 text-center py-8">
                            <Terminal className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            Console output will appear here...
                          </div>
                        ) : (
                          consoleOutput.map((log, index) => (
                            <div
                              key={index}
                              className={cn(
                                'p-2 rounded border break-all',
                                getLogColor(log.method)
                              )}
                            >
                              <div className="flex items-start gap-2">
                                <span className="text-xs font-semibold uppercase opacity-70 min-w-fit">
                                  {log.method}
                                </span>
                                <span className="text-xs opacity-50 ml-auto">
                                  {formatTime(log.timestamp)}
                                </span>
                              </div>
                              <div className="mt-1 space-y-1">
                                {log.args.map((arg, argIndex) => (
                                  <pre key={argIndex} className="whitespace-pre-wrap text-xs">
                                    {renderLogMessage(arg)}
                                  </pre>
                                ))}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </ResizablePanel>
            )}
          </ResizablePanelGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}
