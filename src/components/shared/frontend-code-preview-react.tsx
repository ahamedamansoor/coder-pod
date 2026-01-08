'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Eye, Play, Code2, EyeOff, ChevronRight } from 'lucide-react';
import { useReactPlayground } from '@/components/shared/playground/react-playground-context';
import { ReactPlayground } from '@/components/shared/playground/react-playground-simple';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

/**
 * FrontendCodePreviewReact - A component specifically designed for React code preview
 * 
 * Perfect for React examples where you want to show both the code and the rendered result.
 * Optimized for React components with built-in React 18 createRoot API support.
 */

interface FrontendCodePreviewReactProps {
  title: string;
  description?: string;
  html?: string;
  css?: string;
  js?: string;
  react: string;
  colorTheme?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
  icon?: React.ComponentType<{ className?: string }>;
  previewHeight?: string;
  codeHeight?: string;
  onOpenReactPlayground?: (jsx: string, css?: string) => void;
  learningContext?: 'react' | 'general';
  liveExample?: React.ReactNode;
}

export const FrontendCodePreviewReact: React.FC<FrontendCodePreviewReactProps> = ({
  title,
  description,
  html = '',
  css = '',
  js = '',
  react = '',
  colorTheme = 'blue',
  icon: Icon = Eye,
  previewHeight = 'auto',
  codeHeight = 'auto',
  onOpenReactPlayground,
  learningContext = 'react',
  liveExample,
}) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [consoleMessages, setConsoleMessages] = useState<Array<{type: 'log' | 'error' | 'warn'; message: string}>>([]);
  const [showConsole, setShowConsole] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js' | 'react'>('react');
  const [showCode, setShowCode] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { theme: appTheme } = useTheme();
  const { openPlayground } = useReactPlayground();
  
  const isDarkMode = appTheme === 'dark';

  // Handle mounting and dark mode detection
  useEffect(() => {
    setMounted(true);
    
    const checkDarkMode = () => {
      // Theme is already handled by useTheme() hook, no need to set state here
    };
    
    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Listen for console messages from iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'console') {
        setConsoleMessages(prev => [...prev, {
          type: event.data.level as 'log' | 'error' | 'warn',
          message: event.data.message
        }]);
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Get React preview content
  const getReactPreviewContent = () => {
    const bgColor = isDarkMode ? '#0f172a' : '#f8fafc';
    const textColor = isDarkMode ? '#e2e8f0' : '#1e293b';
    
    const defaultStyles = `
      * { 
        box-sizing: border-box; 
        margin: 0; 
        padding: 0; 
      }
      
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        padding: 1rem;
        background: ${bgColor};
        color: ${textColor};
        transition: background-color 0.3s, color 0.3s;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      /* Dark mode support for common elements */
      .dark a { color: #60a5fa; }
      .dark a:visited { color: #a78bfa; }
      .dark button:not([style*="background"]) {
        background: #3b82f6;
        color: white;
      }
      .dark input, .dark textarea, .dark select {
        background: #1e293b;
        color: #e2e8f0;
        border-color: #475569;
      }
      
      ${css || ''}
    `;
    
    // Process the React code for execution in iframe
    let processedCode = react
      .replace(/import\s+React\s*(?:,\s*\{[^}]*\})?\s*from\s*['"]react['"];?\s*/g, '')
      .replace(/import\s*\{[^}]*\}\s*from\s*['"]react['"];?\s*/g, '')
      .replace(/import\s*\{[^}]*createRoot[^}]*\}\s*from\s*['"]react-dom\/client['"];?\s*/g, '')
      // Remove the entire createRoot execution pattern since we handle rendering in iframe
      .replace(/\/\/ React 18 createRoot API pattern[\s\S]*?(?=export default)/g, '')
      .replace(/export default/g, 'module.exports =')
      .replace(/`/g, '\\`');
    
    return `<!DOCTYPE html>
<html lang="en" class="${isDarkMode ? 'dark' : ''}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    ${defaultStyles}
  </style>
  <script>
    (function() {
      // Function to update theme
      function updateTheme() {
        // Check if parent has dark mode, fallback to system preference
        const parentHasDark = window.parent.document.documentElement.classList.contains('dark');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = parentHasDark || systemPrefersDark;
        
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      
      // Initial theme setup
      setTimeout(updateTheme, 100);
      
      // Listen for theme changes in parent
      if (window.parent.MutationObserver) {
        const observer = new window.parent.MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              updateTheme();
            }
          });
        });
        
        observer.observe(window.parent.document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        });
      }
    })();
  </script>
</head>
<body>
  <div id="react-root"></div>
  <script>
    // Capture console messages and send to parent
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn
    };
    
    console.log = function(...args) {
      originalConsole.log(...args);
      window.parent.postMessage({
        type: 'console',
        level: 'log',
        message: args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')
      }, '*');
    };
    
    console.error = function(...args) {
      originalConsole.error(...args);
      window.parent.postMessage({
        type: 'console',
        level: 'error',
        message: args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')
      }, '*');
    };
    
    console.warn = function(...args) {
      originalConsole.warn(...args);
      window.parent.postMessage({
        type: 'console',
        level: 'warn',
        message: args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')
      }, '*');
    };
    
    try {
      // Create a module scope for the React component
      const moduleExports = {};
      const module = { exports: moduleExports };
      
      // Execute the React component code in module scope
      const wrappedCode = \`
        (function(module, exports, require, React, ReactDOM) {
          \${processedCode}
        })(module, moduleExports, undefined, React, ReactDOM);
      \`;
      
      eval(wrappedCode);
      
      // Get the component from module.exports
      const Component = module.exports;
      const root = document.getElementById('react-root');
      
      if (root && Component) {
        // Clear previous content
        root.innerHTML = '';
        
        // Use React 18 createRoot API with the specified pattern
        const container = document.getElementById('react-root');
        const reactRoot = ReactDOM.createRoot(container); // Create a root
        
        // Render the App component inside the root
        const reactElement = React.createElement(Component);
        reactRoot.render(reactElement);
        
        console.log('✅ React component rendered successfully with createRoot');
      } else {
        console.error('❌ React component not found or root element missing');
      }
    } catch(e) {
      console.error('❌ React rendering error:', e);
    }
  </script>
</body>
</html>`;
  };

  // Theme colors
  const themeColors = {
    slate: {
      gradient: 'from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20',
      border: 'border-slate-200/60 dark:border-slate-700',
      badge: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400',
      icon: 'text-slate-600 dark:text-slate-400',
      tab: 'bg-slate-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    gray: {
      gradient: 'from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20',
      border: 'border-gray-200/60 dark:border-gray-700',
      badge: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
      icon: 'text-gray-600 dark:text-gray-400',
      tab: 'bg-gray-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    zinc: {
      gradient: 'from-zinc-50 to-gray-50 dark:from-zinc-950/20 dark:to-gray-950/20',
      border: 'border-zinc-200/60 dark:border-zinc-700',
      badge: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400',
      icon: 'text-zinc-600 dark:text-zinc-400',
      tab: 'bg-zinc-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    blue: {
      gradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20',
      border: 'border-blue-200/60 dark:border-blue-700',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-400',
      tab: 'bg-blue-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
  };

  const theme = themeColors[colorTheme as keyof typeof themeColors] || themeColors.blue;

  // Get current code based on active tab
  const getCurrentCode = () => {
    switch (activeTab) {
      case 'html': return html;
      case 'css': return css;
      case 'js': return js;
      case 'react': return react;
      default: return react;
    }
  };

  // Prepare code for React Playground
  const getPlaygroundCode = () => {
    // Process React code for playground (remove imports, createRoot pattern, etc.)
    let processedCode = react
      .replace(/import\s+React\s*(?:,\s*\{[^}]*\})?\s*from\s*['"]react['"];?\s*/g, '')
      .replace(/import\s*\{[^}]*\}\s*from\s*['"]react['"];?\s*/g, '')
      .replace(/import\s*\{[^}]*createRoot[^}]*\}\s*from\s*['"]react-dom\/client['"];?\s*/g, '')
      // Remove the entire createRoot execution pattern since we handle rendering in playground
      .replace(/\/\/ React 18 createRoot API pattern[\s\S]*?(?=export default)/g, '')
      .replace(/export default\s+\w+;?\s*$/g, '');
    
    // Add CSS styling to the code if provided
    if (css && css.trim()) {
      processedCode += `

// CSS Styling
const style = document.createElement('style');
style.textContent = \`${css.replace(/`/g, '\\`')}\`;
document.head.appendChild(style);

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(${extractComponentName(processedCode)}));`;
    }
    
    return processedCode.trim();
  };

  // Extract component name from processed code
  const extractComponentName = (code: string) => {
    const match = code.match(/function\s+(\w+)|const\s+(\w+)\s*=/);
    return match ? (match[1] || match[2]) : 'App';
  };

  // Copy to clipboard function
  const copyToClipboard = () => {
    const currentCode = getCurrentCode();
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Open React playground
  const openReactPlaygroundWithContent = (jsx: string, css?: string) => {
    if (onOpenReactPlayground) {
      onOpenReactPlayground(jsx, css);
    } else if (openPlayground) {
      openPlayground({ jsx, css: css || '' });
    }
  };

  if (!mounted) {
    return (
      <Card className={`${theme.gradient} ${theme.border} border`}>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-1/3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-2/3"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <div className={`px-6 py-4 bg-gradient-to-r ${theme.gradient} border-b ${theme.border}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-white dark:bg-slate-900 border ${theme.border}`}>
              <Icon className={`w-5 h-5 ${theme.icon}`} />
            </div>
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {title}
              </h3>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              )}
            </div>
          </div>
          <Badge className={theme.badge}>React</Badge>
        </div>
      </div>

      <CardContent className="p-0">
        <div 
          className="flex flex-col gap-4 lg:flex-row"
          style={previewHeight === 'auto' ? { height: '700px' } : { height: previewHeight }}
        >
          {showCode && (
            <div
              className="lg:w-1/2 h-full flex flex-col rounded-lg overflow-hidden border border-slate-200/60 dark:border-slate-700/40"
            >
              <div className="flex items-center justify-between bg-[#f6f8fa] dark:bg-[#161b22] px-4 py-2">
                <div className="flex gap-2">
                  {/* React Tab */}
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'react' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    React
                  </button>
                  {/* CSS Tab */}
                  {css && (
                    <button
                      onClick={() => setActiveTab('css')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                        activeTab === 'css' ? theme.tab : theme.tabInactive
                      }`}
                    >
                      CSS
                    </button>
                  )}
                  {/* HTML Tab */}
                  {html && (
                    <button
                      onClick={() => setActiveTab('html')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                        activeTab === 'html' ? theme.tab : theme.tabInactive
                      }`}
                    >
                      HTML
                    </button>
                  )}
                  {/* JS Tab */}
                  {js && (
                    <button
                      onClick={() => setActiveTab('js')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                        activeTab === 'js' ? theme.tab : theme.tabInactive
                      }`}
                    >
                      JavaScript
                    </button>
                  )}
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  )}
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-white dark:bg-[#0d1117]">
                <SyntaxHighlighter
                  language={
                    activeTab === 'html' ? 'html' :
                    activeTab === 'css' ? 'css' :
                    activeTab === 'js' ? 'javascript' :
                    activeTab === 'react' ? 'jsx' :
                    'javascript'
                  }
                  style={isDarkMode ? vscDarkPlus : prism}
                  showLineNumbers={false}
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem',
                    background: isDarkMode ? '#0d1117' : '#ffffff',
                    fontSize: '13px',
                    lineHeight: '1.45',
                    border: 'none',
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                      fontFeatureSettings: '"liga" 0, "calt" 0',
                    }
                  }}
                >
                  {getCurrentCode()}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
          
          <div
            className={`${showCode ? 'lg:w-1/2' : 'w-full'} h-full flex flex-col rounded-lg overflow-hidden border border-slate-200/60 dark:border-slate-700/40`}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                  Live Preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                {openReactPlaygroundWithContent && (
                  <button
                    onClick={() => openReactPlaygroundWithContent(react, css)}
                    className="px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all group shadow-sm hover:shadow-md bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white"
                    title="Open in React Playground"
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
                    <span className="text-xs font-semibold">Run</span>
                  </button>
                )}
                <button
                  onClick={() => setShowCode(!showCode)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all flex items-center gap-1.5 ${
                    showCode 
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700' 
                      : `${theme.tab} shadow-sm hover:shadow-md`
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  {showCode ? 'Hide' : 'Show'} Code
                </button>
              </div>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-950">
              {liveExample ? (
                <div className="w-full h-full p-4 flex items-center justify-center">
                  {liveExample}
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  key={`${isDarkMode ? 'dark' : 'light'}-${react.substring(0, 50).replace(/[^a-zA-Z0-9]/g, '')}`}
                  srcDoc={getReactPreviewContent()}
                  title="React Preview"
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin"
                  style={{ minHeight: '300px' }}
                />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
