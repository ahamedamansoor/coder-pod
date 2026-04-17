'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReactPlayground } from './react-playground-context';

interface ConsoleLog {
  type: 'log' | 'error' | 'warn' | 'info';
  message: any[];
  timestamp: string;
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
import Editor, { Monaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import {
  Code, Terminal, Play, RefreshCw, X, Loader2,
  FileCode, Eye, Trash2, Palette, AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const defaultExample = `function CSSTest() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="container">
      <h1>🎨 CSS Button Test</h1>
      <p>Add CSS for .my-button in the CSS editor!</p>
      
      <button className="my-button" onClick={() => setCount(count + 1)}>
        Click me! ({count} clicks)
      </button>
      
      <div className="button-group">
        <button className="btn-primary">Primary Button</button>
        <button className="btn-secondary">Secondary Button</button>
        <button className="btn-success">Success Button</button>
      </div>
      
      <div className="card">
        <h2>Test Card</h2>
        <p>This is a test card. Try styling it with CSS!</p>
        <button className="card-button">Card Button</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CSSTest />);`;

const consoleScript = `
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalInfo = console.info;
  
  const postMessage = (type, args) => {
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
`;

export function ReactPlaygroundModal() {
  const { isOpen, playgroundData, closePlayground } = useReactPlayground();
    const [jsxCode, setJsxCode] = useState(defaultExample);
  const [cssCode, setCssCode] = useState(`/* CSS Button Styles - Your colors will work! */
.my-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.my-button:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #6b7280;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-secondary:hover {
  background: #4b5563;
}

.btn-success {
  background: #10b981;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-success:hover {
  background: #059669;
}

.button-group {
  display: flex;
  gap: 12px;
  margin: 20px 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.card-button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
}

h1, h2 {
  color: #1f2937;
}

p {
  color: #6b7280;
  line-height: 1.6;
}

/* Try changing these colors - they will work! */
.my-button {
  background: purple !important;
  color: yellow !important;
}`);
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [autoRun, setAutoRun] = useState(false);
  const [cssErrors, setCssErrors] = useState<string[]>([]);
  const [outputSrc, setOutputSrc] = useState('about:blank');
  const [iframeKey, setIframeKey] = useState(0);
  const [visiblePanels, setVisiblePanels] = useState({
    editor: true,
    css: false,
    preview: true,
    console: false,
  });
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // CSS validation function - relaxed to allow any CSS
  const validateCSS = (css: string): string[] => {
    const errors: string[] = [];
    
    // Remove comments for validation
    const cleanCSS = css.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Only check for critical syntax errors
    const openBraces = (cleanCSS.match(/{/g) || []).length;
    const closeBraces = (cleanCSS.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
      errors.push(`Mismatched braces: ${openBraces} opening, ${closeBraces} closing`);
    }
    
    // Check for completely invalid selectors (very relaxed)
    const selectorRegex = /([^{}]+)\s*{/g;
    let match;
    while ((match = selectorRegex.exec(cleanCSS)) !== null) {
      const selector = match[1].trim();
      
      // Only check for completely empty selectors
      if (!selector || selector.length === 0) {
        errors.push('Empty selector found');
      }
    }
    
    return errors;
  };

  // Validate CSS when it changes
  useEffect(() => {
    const errors = validateCSS(cssCode);
    setCssErrors(errors);
    
    // Hide CSS panel if CSS content is empty
    if (!cssCode.trim()) {
      setVisiblePanels(prev => ({ ...prev, css: false }));
    }
  }, [cssCode]);

  // Auto-update iframe when CSS changes
  useEffect(() => {
    if (cssCode.trim()) {
      // Add a small delay to avoid too frequent updates while typing
      const timeoutId = setTimeout(() => {
        setIframeKey(prev => prev + 1);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    }
  }, [cssCode]);

  
  
  const hasInitialRunRef = useRef(false);
  const monacoRef = useRef<Monaco | null>(null);
  const { theme } = useTheme();
  const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>(theme === 'dark' ? 'dark' : 'light');

  // Configure Monaco editor for React/JSX support
  const handleEditorWillMount = (monaco: Monaco) => {
    monacoRef.current = monaco;
    
    // Configure JavaScript/TypeScript compiler options for JSX
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      reactNamespace: 'React',
      allowJs: true,
      typeRoots: ['node_modules/@types'],
    });

    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    // Add React type definitions for autocomplete
    const reactTypes = `
      declare namespace React {
        type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactFragment | ReactPortal;
        type ReactElement = { type: any; props: any; key: any };
        type ReactFragment = {} | ReactNode[];
        type ReactPortal = { key: any; children: ReactNode };
        type FC<P = {}> = (props: P) => ReactElement | null;
        type Component<P = {}, S = {}> = { props: P; state: S; render(): ReactNode; setState(s: Partial<S>): void };
        type CSSProperties = { [key: string]: string | number };
        type MouseEvent<T = Element> = { target: T; currentTarget: T; preventDefault(): void; stopPropagation(): void };
        type ChangeEvent<T = Element> = { target: T & { value: string }; currentTarget: T };
        type FormEvent<T = Element> = { target: T; preventDefault(): void };
        type KeyboardEvent<T = Element> = { key: string; code: string; target: T };
        type RefObject<T> = { current: T | null };
        type MutableRefObject<T> = { current: T };
        type Dispatch<A> = (action: A) => void;
        type SetStateAction<S> = S | ((prevState: S) => S);
        
        function useState<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
        function useEffect(effect: () => void | (() => void), deps?: any[]): void;
        function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
        function useMemo<T>(factory: () => T, deps: any[]): T;
        function useRef<T>(initialValue: T): MutableRefObject<T>;
        function useRef<T>(initialValue: T | null): RefObject<T>;
        function useContext<T>(context: React.Context<T>): T;
        function useReducer<R extends (state: any, action: any) => any>(reducer: R, initialState: any): [any, Dispatch<any>];
        function useLayoutEffect(effect: () => void | (() => void), deps?: any[]): void;
        function useImperativeHandle<T>(ref: any, init: () => T, deps?: any[]): void;
        function useDebugValue<T>(value: T): void;
        function useId(): string;
        function useTransition(): [boolean, (callback: () => void) => void];
        function useDeferredValue<T>(value: T): T;
        function useSyncExternalStore<T>(subscribe: (callback: () => void) => () => void, getSnapshot: () => T): T;
        function useInsertionEffect(effect: () => void | (() => void), deps?: any[]): void;
        
        function createContext<T>(defaultValue: T): Context<T>;
        function createElement(type: any, props?: any, ...children: any[]): ReactElement;
        function cloneElement(element: ReactElement, props?: any, ...children: any[]): ReactElement;
        function createRef<T>(): RefObject<T>;
        function forwardRef<T, P>(render: (props: P, ref: any) => ReactElement | null): FC<P>;
        function memo<P>(component: FC<P>): FC<P>;
        function lazy<T extends FC<any>>(factory: () => Promise<{ default: T }>): T;
        function startTransition(callback: () => void): void;
        
        interface Context<T> { Provider: FC<{ value: T; children?: ReactNode }>; Consumer: FC<{ children: (value: T) => ReactNode }> }
        const Fragment: FC<{ children?: ReactNode }>;
        const Suspense: FC<{ fallback?: ReactNode; children?: ReactNode }>;
        const StrictMode: FC<{ children?: ReactNode }>;
        const Profiler: FC<{ id: string; onRender: (...args: any[]) => void; children?: ReactNode }>;
      }
      
      declare namespace ReactDOM {
        function createRoot(container: Element | null): { render(element: React.ReactNode): void; unmount(): void };
        function render(element: React.ReactNode, container: Element | null): void;
        function hydrate(element: React.ReactNode, container: Element | null): void;
        function unmountComponentAtNode(container: Element): boolean;
        function createPortal(children: React.ReactNode, container: Element): React.ReactPortal;
        function flushSync<T>(fn: () => T): T;
      }
      
      declare const React: typeof React;
      declare const ReactDOM: typeof ReactDOM;
    `;

    monaco.languages.typescript.javascriptDefaults.addExtraLib(reactTypes, 'react.d.ts');
  };

  useEffect(() => {
    setEditorTheme(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  // Send theme message to iframe
  const sendThemeToIframe = useCallback(() => {
    if (iframeRef.current) {
      const isDark = theme === 'dark';
      iframeRef.current.contentWindow?.postMessage({
        type: 'theme-change',
        isDark: isDark
      }, '*');
    }
  }, [theme]);

  // Send theme when iframe loads and when theme changes
  useEffect(() => {
    if (isOpen) {
      // Send initial theme after a short delay
      const timeout = setTimeout(sendThemeToIframe, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, sendThemeToIframe]);

  useEffect(() => {
    if (isOpen) {
      sendThemeToIframe();
    }
  }, [theme, isOpen, sendThemeToIframe]);

  useEffect(() => {
    if (isOpen && playgroundData?.jsx) {
      setJsxCode(playgroundData.jsx);
      setCssCode(playgroundData.css || '');
      setConsoleLogs([]);
      hasInitialRunRef.current = false;
      // Don't set hasChanges on initial load to prevent auto-run issues
      setHasChanges(false);
      
      // Show CSS panel if CSS content is provided
      if (playgroundData.css && playgroundData.css.trim()) {
        setVisiblePanels(prev => ({ ...prev, css: true }));
      } else {
        setVisiblePanels(prev => ({ ...prev, css: false }));
      }
    }
  }, [isOpen, playgroundData]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source === 'react-playground') {
        const { type, message } = event.data;
        setConsoleLogs((prev) => [
          ...prev,
          { type, message, timestamp: new Date().toLocaleTimeString() },
        ]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const runCode = useCallback(() => {
    setConsoleLogs([{
      type: 'info',
      message: ['🚀 Compiling and running React code...'],
      timestamp: new Date().toLocaleTimeString()
    }]);
    
    setIsRunning(true);
    setIframeKey(prev => prev + 1);
    
    setTimeout(() => {
      const escapedCode = jsxCode
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');

      // Force dark mode for all examples
      const isDarkTheme = true;
      const initialBackground = '#0f172a';
      const initialTextColor = '#f1f5f9';

      const iframeHtml = `
<!DOCTYPE html>
<html class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <script>
    // Force dark mode preference for user CSS media queries
    if (window.matchMedia) {
      // Override matchMedia to pretend dark mode is preferred
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = function(query) {
        if (query === '(prefers-color-scheme: dark)') {
          return {
            matches: true,
            media: query,
            onchange: null,
            addListener: function() {},
            removeListener: function() {},
            addEventListener: function() {},
            removeEventListener: function() {},
            dispatchEvent: function() {}
          };
        }
        return originalMatchMedia.call(this, query);
      };
    }
  </script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: system-ui, -apple-system, sans-serif; 
      min-height: 100vh;
      transition: background 0.3s ease, color 0.3s ease;
    }
    #root {
      width: 100%;
      min-height: 100vh;
    }
    .error-display {
      padding: 2rem;
      text-align: center;
      color: #dc2626;
      font-family: system-ui;
      background: #fef2f2;
    }
    .error-display h3 {
      margin-bottom: 1rem;
      color: #dc2626;
    }
    .error-display pre {
      background: #fef2f2;
      color: #dc2626;
      padding: 1rem;
      border-radius: 8px;
      text-align: left;
      overflow: auto;
      max-width: 600px;
      margin: 0 auto;
      font-size: 14px;
      border: 1px solid #fecaca;
    }
    /* Removed all dark mode overrides to allow user CSS to work */
    
    /* Removed all forced background and color styles to allow user CSS */
    
    /* Ensure inline styles have highest specificity */
    #root [style] {
      /* Don't override inline styles - they should have highest specificity */
    }
    
    /* Removed all forced styles to allow user CSS to work properly */
    
    /* User CSS - injected with maximum specificity to override all defaults */
    ${cssCode || ''}
    
    /* Enhanced user CSS with maximum specificity */
    ${cssCode ? cssCode.split('}').filter(rule => rule.trim()).map(rule => {
      const selector = rule.split('{')[0]?.trim();
      const properties = rule.split('{')[1]?.trim();
      if (selector && properties) {
        // Add multiple specificity levels to ensure user CSS wins
        return `html body #root ${selector} { ${properties} }`;
      }
      return '';
    }).filter(Boolean).join('\n') : ''}
    
    /* User CSS with !important to ensure it overrides everything */
    ${cssCode ? cssCode.split('}').filter(rule => rule.trim()).map(rule => {
      const selector = rule.split('{')[0]?.trim();
      let properties = rule.split('{')[1]?.trim();
      if (selector && properties) {
        // Add !important to all user CSS properties
        properties = properties.replace(/([^:]+):\s*([^;]+)/g, '$1: $2 !important');
        return `html body #root ${selector} { ${properties} }`;
      }
      return '';
    }).filter(Boolean).join('\n') : ''}
    
    /* Process user media queries - extract and apply dark mode styles */
    ${cssCode ? (() => {
      const mediaQueryRegex = /@media\s*\([^)]*prefers-color-scheme:\s*dark[^)]*\)\s*{([\s\S]*?)}/g;
      let darkModeStyles = '';
      let match;
      while ((match = mediaQueryRegex.exec(cssCode)) !== null) {
        const mediaContent = match[1];
        // Extract rules from media query
        const rules = mediaContent.split('}').filter(rule => rule.trim()).map(rule => {
          const parts = rule.split('{');
          if (parts.length === 2) {
            const selector = parts[0].trim();
            const properties = parts[1].trim();
            if (selector && properties) {
              // Add !important and high specificity
              const importantProps = properties.replace(/([^:]+):\s*([^;]+)/g, '$1: $2 !important');
              return `html body #root ${selector} { ${importantProps} }`;
            }
          }
          return '';
        }).filter(Boolean).join('\n');
        darkModeStyles += rules + '\n';
      }
      return darkModeStyles;
    })() : ''}
    
    /* Support for user-provided dark mode CSS with @media queries */
    @media (prefers-color-scheme: dark) {
      /* This allows user @media (prefers-color-scheme: dark) rules to work */
      /* The playground is always in dark mode, so we simulate the preference */
    }
    
    /* Force dark mode preference for user CSS media queries */
    html {
      color-scheme: dark;
    }
    
    /* Ensure user dark mode CSS works by setting the preference */
    @media (prefers-color-scheme: dark) {
      /* Empty block to trigger user media queries */
    }
  </style>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.24.0/babel.min.js"></script>
  <script>${consoleScript}</script>
</head>
<body>
  <div id="root"></div>
  <script>
    (function() {
      function waitForLibraries(callback, attempts) {
        attempts = attempts || 0;
        if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined' && typeof Babel !== 'undefined') {
          callback();
        } else if (attempts < 50) {
          setTimeout(function() { waitForLibraries(callback, attempts + 1); }, 100);
        } else {
          document.getElementById('root').innerHTML = '<div class="error-display"><h3>⚠️ Error</h3><pre>Failed to load React libraries. Check your internet connection.</pre></div>';
        }
      }
      
      waitForLibraries(function() {
        try {
          var userCode = \`${escapedCode}\`;
          
          // Strip all import/export statements (React/ReactDOM are already global)
          var cleanedCode = userCode
            .replace(/^\\s*import\\s+[\\s\\S]*?from\\s+['"][^'"]+['"];?\\s*$/gm, '')
            .replace(/^\\s*import\\s+['"][^'"]+['"];?\\s*$/gm, '')
            .replace(/^\\s*export\\s+default\\s+/gm, '')
            .replace(/^\\s*export\\s+\\{[^}]*\\};?\\s*$/gm, '')
            .replace(/^\\s*export\\s+(const|let|var|function|class)\\s+/gm, '$1 ');
          
          // Make all React hooks and utilities available globally on window
          window.useState = React.useState;
          window.useEffect = React.useEffect;
          window.useCallback = React.useCallback;
          window.useMemo = React.useMemo;
          window.useRef = React.useRef;
          window.useContext = React.useContext;
          window.useReducer = React.useReducer;
          window.useLayoutEffect = React.useLayoutEffect;
          window.useImperativeHandle = React.useImperativeHandle;
          window.useDebugValue = React.useDebugValue;
          window.useId = React.useId;
          window.useTransition = React.useTransition;
          
          // Ensure proper evaluation context for inline styles
          window.Object = Object;
          window.Array = Array;
          window.String = String;
          window.Number = Number;
          window.useDeferredValue = React.useDeferredValue;
          window.useSyncExternalStore = React.useSyncExternalStore;
          window.useInsertionEffect = React.useInsertionEffect;
          window.createContext = React.createContext;
          window.createElement = React.createElement;
          window.cloneElement = React.cloneElement;
          window.createRef = React.createRef;
          window.forwardRef = React.forwardRef;
          window.memo = React.memo;
          window.lazy = React.lazy;
          window.Fragment = React.Fragment;
          window.Suspense = React.Suspense;
          window.StrictMode = React.StrictMode;
          window.Profiler = React.Profiler;
          window.startTransition = React.startTransition;
          window.Children = React.Children;
          window.isValidElement = React.isValidElement;
          window.createRoot = ReactDOM.createRoot;
          window.createPortal = ReactDOM.createPortal;
          window.flushSync = ReactDOM.flushSync;
          
          var transformedCode = Babel.transform(cleanedCode, {
            presets: [
              ['react', { runtime: 'classic' }],
              ['env', { targets: { browsers: 'last 2 versions' }, modules: false }]
            ],
            filename: 'playground.jsx'
          }).code;
          
          eval(transformedCode);
          
          // Theme is already applied in the initial setup, no need to reapply
          
        } catch (error) {
          console.error('❌ Error:', error.message);
          if (error.stack) {
            console.error('Stack:', error.stack.split('\\n').slice(0, 3).join('\\n'));
          }
          document.getElementById('root').innerHTML = '<div class="error-display"><h3>⚠️ Compilation Error</h3><pre>' + error.message + '</pre></div>';
        }
      });
    })();
  </script>
</body>
</html>`;

      setOutputSrc(`data:text/html;charset=utf-8,${encodeURIComponent(iframeHtml)}`);
      setHasChanges(false);
      setIsRunning(false);
    }, 50);
  }, [jsxCode, cssCode]);

  useEffect(() => {
    if (isOpen && jsxCode) {
      // Set hasChanges when code changes (but not on initial load)
      if (hasInitialRunRef.current) {
        setHasChanges(true);
      }
    }
  }, [jsxCode, cssCode, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    
    if (autoRun && hasChanges) {
      const timeout = setTimeout(() => {
        runCode();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [jsxCode, cssCode, autoRun, isOpen, hasChanges, runCode]);

  useEffect(() => {
    if (isOpen && jsxCode && !hasInitialRunRef.current) {
      const timeout = setTimeout(() => {
        runCode();
        hasInitialRunRef.current = true;
      }, 500); // Increased delay to ensure everything is loaded
      return () => clearTimeout(timeout);
    }
  }, [isOpen, jsxCode, cssCode, runCode]);

  const togglePanel = (panel: keyof typeof visiblePanels) => {
    setVisiblePanels(prev => ({ ...prev, [panel]: !prev[panel] }));
  };

  const getLogLevelClass = (type: ConsoleLog['type']) => {
    switch (type) {
      case 'error': return 'text-destructive';
      case 'warn': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-muted-foreground';
    }
  };

  const renderLogMessage = (msg: any) => {
    if (typeof msg === 'object' && msg !== null) {
      return JSON.stringify(msg, null, 2);
    }
    return String(msg);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closePlayground();
      hasInitialRunRef.current = false;
      setVisiblePanels({
        editor: true,
        css: true,
        preview: true,
        console: true,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] flex flex-col p-0 m-0 gap-0 rounded-none border-0 bg-background dark:bg-background" showCloseButton={false}>
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20 flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-md">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">React Playground</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">Live React coding environment with instant preview</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-400">
                React 18
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-cyan-50 border-cyan-200 text-cyan-700 dark:bg-cyan-950/30 dark:border-cyan-800 dark:text-cyan-400">
                JSX
              </Badge>
              <Badge variant={theme === 'dark' ? 'default' : 'secondary'} className="text-[10px] font-normal px-2 py-0.5">
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
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
                  title="JSX Editor"
                >
                  <FileCode className="h-4 w-4" />
                  {visiblePanels.editor && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => togglePanel('css')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.css 
                      ? 'bg-purple-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="CSS Editor"
                >
                  <Palette className="h-4 w-4" />
                  {visiblePanels.css && (
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
            
            <button
              onClick={() => setAutoRun(!autoRun)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                autoRun
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg'
                  : 'border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 border'
              }`}
              title={autoRun ? 'Auto-run enabled' : 'Manual run - Click to enable auto-run'}
            >
              <RefreshCw className={`h-4 w-4 ${autoRun ? 'animate-spin' : ''}`} />
              <span>{autoRun ? 'Auto-run' : 'Manual'}</span>
            </button>
            
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
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setConsoleLogs([])} 
              className="h-8 text-xs gap-1.5"
              title="Clear console"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
            
            <div className="h-4 w-px bg-border" />
            
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

        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            {visiblePanels.editor && (
              <>
                <ResizablePanel defaultSize={40} collapsible minSize={20}>
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2.5 bg-blue-50 dark:bg-blue-950/20 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-blue-500 rounded">
                          <FileCode className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">JSX Editor</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                        component.jsx
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <Editor
                        language="javascript"
                        value={jsxCode}
                        onChange={(value) => setJsxCode(value || '')}
                        theme={editorTheme === 'dark' ? 'vs-dark' : 'light'}
                        beforeMount={handleEditorWillMount}
                        options={{
                          minimap: { enabled: false },
                          wordWrap: 'on',
                          fontSize: 13,
                          lineNumbers: 'on',
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                          padding: { top: 12, bottom: 12 },
                          lineNumbersMinChars: 3,
                          glyphMargin: false,
                          folding: true,
                          tabSize: 2,
                          suggestOnTriggerCharacters: true,
                          quickSuggestions: true,
                          snippetSuggestions: 'inline',
                          formatOnPaste: true,
                          formatOnType: true,
                          autoClosingBrackets: 'always',
                          autoClosingQuotes: 'always',
                          autoIndent: 'full',
                          bracketPairColorization: { enabled: true },
                        }}
                      />
                    </div>
                  </div>
                </ResizablePanel>
                {visiblePanels.css && <ResizableHandle withHandle />}
              </>
            )}
            
            {visiblePanels.css && (
              <>
                <ResizablePanel defaultSize={20} collapsible minSize={15}>
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2.5 bg-purple-50 dark:bg-purple-950/20 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-purple-500 rounded">
                            <Palette className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">CSS Editor</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setIframeKey(prev => prev + 1);
                            }}
                            className="text-xs px-2 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/50 dark:hover:bg-blue-800/50 text-blue-700 dark:text-blue-300 rounded transition-colors"
                            title="Manual refresh (auto-updates enabled)"
                          >
                            🔄 Refresh
                          </button>
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                            styles.css
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <Editor
                        language="css"
                        value={cssCode}
                        onChange={(value) => setCssCode(value || '')}
                        theme={editorTheme === 'dark' ? 'vs-dark' : 'light'}
                        options={{
                          minimap: { enabled: false },
                          wordWrap: 'on',
                          fontSize: 13,
                          lineNumbers: 'on',
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                          padding: { top: 12, bottom: 12 },
                          lineNumbersMinChars: 3,
                          glyphMargin: false,
                          folding: true,
                          tabSize: 2,
                          suggestOnTriggerCharacters: true,
                          quickSuggestions: true,
                          snippetSuggestions: 'inline',
                          formatOnPaste: true,
                          formatOnType: true,
                          autoClosingBrackets: 'always',
                          autoClosingQuotes: 'always',
                          autoIndent: 'full',
                          bracketPairColorization: { enabled: true },
                        }}
                      />
                      {cssErrors.length > 0 && (
                        <div className="border-t border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 p-2">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                            <span className="text-xs font-medium text-red-700 dark:text-red-300">
                              CSS Errors ({cssErrors.length})
                            </span>
                          </div>
                          <div className="space-y-1 max-h-20 overflow-y-auto">
                            {cssErrors.map((error, index) => (
                              <div key={index} className="text-xs text-red-600 dark:text-red-400 font-mono">
                                • {error}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ResizablePanel>
                {(visiblePanels.css || visiblePanels.preview || visiblePanels.console) && <ResizableHandle withHandle />}
              </>
            )}
            
            {visiblePanels.preview && (
              <>
                <ResizablePanel defaultSize={40} minSize={20}>
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2.5 bg-emerald-50 dark:bg-emerald-950/20 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/50" />
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Live Preview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isRunning ? (
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                            <Loader2 className="h-3 w-3 animate-spin mr-1" />
                            Running...
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                            Real-time
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className={`flex-1 relative ${editorTheme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
                      <iframe
                        key={iframeKey}
                        ref={iframeRef}
                        src={outputSrc}
                        title="React Preview"
                        sandbox="allow-scripts allow-modals"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                </ResizablePanel>
                {visiblePanels.console && <ResizableHandle withHandle />}
              </>
            )}
            
            {visiblePanels.console && (
              <ResizablePanel defaultSize={20} collapsible minSize={15}>
                <div className="h-full flex flex-col">
                  <div className="px-4 py-2.5 bg-purple-50 dark:bg-purple-950/20 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-purple-500 rounded">
                        <Terminal className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Console</span>
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                        {consoleLogs.length} {consoleLogs.length === 1 ? 'msg' : 'msgs'}
                      </Badge>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setConsoleLogs([])}
                      className="h-6 text-[10px] px-2 hover:bg-purple-500/20"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Clear
                    </Button>
                  </div>
                  <ScrollArea className={`flex-1 p-3 ${editorTheme === 'dark' ? 'bg-slate-950' : 'bg-muted/30'}`}>
                    {consoleLogs.length === 0 ? (
                      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                        <div className="text-center">
                          <Terminal className="h-8 w-8 mx-auto mb-2 opacity-50" />
                          <p>Console is empty</p>
                          <p className="text-xs mt-1">Messages will appear here</p>
                        </div>
                      </div>
                    ) : (
                      consoleLogs.map((log, index) => (
                        <div 
                          key={index} 
                          className={cn(
                            "flex gap-3 items-start font-mono text-xs border-l-2 pl-3 py-2 mb-2 rounded-r bg-background/50",
                            log.type === 'error' ? 'border-red-500 bg-red-500/5' : 
                            log.type === 'warn' ? 'border-yellow-500 bg-yellow-500/5' : 
                            log.type === 'info' ? 'border-blue-500 bg-blue-500/5' : 
                            'border-green-500 bg-green-500/5',
                            getLogLevelClass(log.type)
                          )}
                        >
                          <span className="opacity-70 text-[10px] min-w-[60px]">{log.timestamp}</span>
                          <div className="flex-1 whitespace-pre-wrap break-words">
                            {log.message.map((msg, i) => (
                              <span key={i} className="mr-2">{renderLogMessage(msg)}</span>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
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
