
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  PanelTop, Code, Braces, FileJson, Terminal, Loader2, 
  X, Play, Maximize2, RefreshCw, Eye, Settings, Trash2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWebPlayground } from './web-playground-context';
import { Button } from '@/components/ui/button';
import { compileScss } from '@/lib/scss-compiler';
import { Badge } from '@/components/ui/badge';

const defaultHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Web Playground</title>
</head>
<body>
  <div class="card">
    <h1>Welcome to the Playground!</h1>
    <p>Edit the HTML, CSS/SCSS, and JavaScript to see live updates.</p>
    <button>Click Me</button>
  </div>
</body>
</html>
`;

const defaultScss = `// Variables
$primary-color: #3b82f6;
$card-bg: white;
$text-color: #333;

body {
  font-family: sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: $card-bg;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  
  h1 {
    color: $primary-color;
    margin-bottom: 1rem;
  }
  
  p {
    color: $text-color;
  }

  button {
    background-color: $primary-color;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    
    &:hover {
      opacity: 0.9;
    }
  }
}
`;

const defaultCss = `body {
  font-family: sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
}

.card h1 {
  color: #3b82f6;
  margin-bottom: 1rem;
}

.card p {
  color: #333;
}

.card button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

.card button:hover {
  opacity: 0.9;
}
`;

const defaultJs = `function logMessage() {
  console.log("Hello from the playground!");
  console.warn("This is a warning.");
  console.error("This is an error.");
  console.info({ user: "John Doe", id: 123 });
}

// You can call functions on load if you want
logMessage();
`;

const defaultTs = `// TypeScript with type annotations
interface User {
  name: string;
  id: number;
}

function greetUser(user: User): string {
  console.log(\`Hello, \${user.name}! ID: \${user.id}\`);
  return \`Welcome \${user.name}\`;
}

const currentUser: User = {
  name: "Developer",
  id: 42
};

greetUser(currentUser);
`;

const defaultTailwindHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Tailwind Playground</title>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-8">
  <div class="max-w-md w-full">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-3xl font-bold text-blue-600 mb-4">Welcome to Tailwind!</h1>
      <p class="text-gray-700 mb-4">
        Edit the HTML and use Tailwind utility classes for styling.
      </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
        Click Me
      </button>
    </div>
  </div>
</body>
</html>
`;

const defaultTailwindCss = `/* Tailwind CSS via CDN - Add custom CSS here if needed */
@layer components {
  .custom-button {
    @apply bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300;
  }
}
`;

const consoleScript = `
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalInfo = console.info;
  
  const postMessage = (type, args) => {
    window.parent.postMessage({
      source: 'iframe-console',
      type: type,
      message: args.map(arg => {
        if (arg instanceof Error) {
          return { type: 'Error', message: arg.message, stack: arg.stack };
        }
        if (typeof arg === 'object' && arg !== null) {
          try {
            return JSON.parse(JSON.stringify(arg, null, 2));
          } catch(e) {
            return 'Unserializable Object';
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
    postMessage('error', [e.message]);
  });
`;

type ConsoleLog = {
  type: 'log' | 'error' | 'warn' | 'info';
  message: any[];
  timestamp: string;
};

type StyleLang = 'css' | 'scss' | 'tailwind';
type ScriptLang = 'javascript' | 'typescript';

export function WebPlaygroundModal({
  children,
  initialLanguage,
}: {
  children?: React.ReactNode;
  initialLanguage?: string;
}) {
  const { open, setOpen, content, setContent } = useWebPlayground();

  const [htmlCode, setHtmlCode] = useState('');
  const [styleCode, setStyleCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [compiledCss, setCompiledCss] = useState('');
  const [compiledJs, setCompiledJs] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  
  const initialStyleLang: StyleLang = initialLanguage === 'scss' ? 'scss' : initialLanguage === 'tailwind' ? 'tailwind' : 'css';
  const [styleLang, setStyleLang] = useState<StyleLang>(initialStyleLang);
  
  const initialScriptLang: ScriptLang = initialLanguage === 'typescript' ? 'typescript' : 'javascript';
  const [scriptLang, setScriptLang] = useState<ScriptLang>(initialScriptLang);

  const [outputSrc, setOutputSrc] = useState('about:blank');
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const [iframeKey, setIframeKey] = useState(0);
  const [autoRun, setAutoRun] = useState(false); // Default to manual run
  const [hasChanges, setHasChanges] = useState(false);
  const [visiblePanels, setVisiblePanels] = useState({
    html: true,
    css: true,
    js: true,
    preview: true,
    console: true,
  });
  const { theme } = useTheme();
  const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>(theme === 'dark' ? 'dark' : 'light');
  const hasInitialRunRef = useRef(false);

  const togglePanel = (panel: keyof typeof visiblePanels) => {
    setVisiblePanels(prev => ({ ...prev, [panel]: !prev[panel] }));
  };

  // Sync editor theme with main app theme
  useEffect(() => {
    setEditorTheme(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  // Initialize/reset code when modal opens or content changes
  useEffect(() => {
    if (!open) return; // Only initialize when modal is open
    
    // Reset initial run flag when new content is loaded
    hasInitialRunRef.current = false;
    
    if (content.html || content.css || content.js) {
        const lang = content.css.includes('$') || content.css.includes('@mixin') ? 'scss' : 'css';
        setStyleLang(lang);
        setStyleCode(content.css || (lang === 'scss' ? defaultScss : defaultCss));
        setHtmlCode(content.html || defaultHtml);
        setJsCode(content.js || defaultJs);
    } else {
        // Use initialLanguage to determine defaults
        const defaultStyleLang: StyleLang = 
          initialLanguage === 'scss' ? 'scss' : 
          initialLanguage === 'tailwind' ? 'tailwind' : 
          'css';
        
        const defaultScriptLang: ScriptLang = 
          initialLanguage === 'typescript' ? 'typescript' : 
          'javascript';
        
        setStyleLang(defaultStyleLang);
        setScriptLang(defaultScriptLang);
        
        // Set appropriate default code based on language
        if (defaultStyleLang === 'tailwind') {
          setHtmlCode(defaultTailwindHtml);
          setStyleCode(defaultTailwindCss);
        } else if (defaultStyleLang === 'scss') {
          setHtmlCode(defaultHtml);
          setStyleCode(defaultScss);
        } else {
          setHtmlCode(defaultHtml);
          setStyleCode(defaultCss);
        }
        
        setJsCode(defaultScriptLang === 'typescript' ? defaultTs : defaultJs);
    }
  }, [content, initialLanguage, open]);

  // Debounced SCSS compilation and style processing
  useEffect(() => {
    if (!open) return;
    
    if (styleLang === 'scss') {
      setIsCompiling(true);
      const handler = setTimeout(async () => {
        try {
          const result = await compileScss(styleCode);
          if (result.error) {
            // Add error to console logs
            setConsoleLogs((prev) => [
              ...prev,
              { 
                type: 'error', 
                message: ['SCSS Compilation Error:', result.error], 
                timestamp: new Date().toLocaleTimeString() 
              },
            ]);
          } else {
            // Success - log it
            console.log("SCSS compiled successfully");
            setConsoleLogs((prev) => {
              // Only add success message if there were previous errors or if it's the first compilation
              const hasErrors = prev.some(log => log.type === 'error' && log.message.some(m => 
                typeof m === 'string' && m.includes('SCSS')
              ));
              if (hasErrors || prev.length === 1) {
                return [
                  ...prev,
                  { 
                    type: 'info', 
                    message: ['✓ SCSS compiled successfully'], 
                    timestamp: new Date().toLocaleTimeString() 
                  },
                ];
              }
              return prev;
            });
          }
          setCompiledCss(result.css);
        } catch (e) {
          const errorMsg = e instanceof Error ? e.message : 'Unknown error';
          console.error("SCSS Compilation Error:", e);
          setConsoleLogs((prev) => [
            ...prev,
            { 
              type: 'error', 
              message: ['SCSS Compilation Failed:', errorMsg], 
              timestamp: new Date().toLocaleTimeString() 
            },
          ]);
          setCompiledCss(`/* SCSS Compilation Failed: ${errorMsg} */`);
        } finally {
          setIsCompiling(false);
        }
      }, 500);

      return () => clearTimeout(handler);
    } else if (styleLang === 'tailwind') {
      // Tailwind uses CDN, no compilation needed
      setCompiledCss('/* Tailwind CSS loaded via CDN */');
      setIsCompiling(false);
    } else {
      setCompiledCss(styleCode);
      setIsCompiling(false);
    }
  }, [styleCode, styleLang, open]);


  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source === 'iframe-console') {
        const { type, message } = event.data;
        setConsoleLogs((prev) => [
          ...prev,
          { type, message, timestamp: new Date().toLocaleTimeString() },
        ]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setConsoleLogs([]); // Clear logs when modal opens
      // Add welcome message based on mode
      const messages = [];
      
      if (initialLanguage === 'scss') {
        messages.push({
          type: 'info' as const,
          message: ['🎨 SCSS Mode Active - Use variables, nesting, mixins and more!'],
          timestamp: new Date().toLocaleTimeString()
        });
      } else if (initialLanguage === 'tailwind') {
        messages.push({
          type: 'info' as const,
          message: ['⚡ Tailwind CSS Active - Use utility classes directly in HTML!'],
          timestamp: new Date().toLocaleTimeString()
        });
      } else if (initialLanguage === 'typescript') {
        messages.push({
          type: 'info' as const,
          message: ['📘 TypeScript Mode - Type annotations available!'],
          timestamp: new Date().toLocaleTimeString()
        });
      }
      
      if (messages.length > 0) {
        setConsoleLogs(messages);
      }
    }
  }, [open, initialLanguage]);

  // Function to run the code
  const runCode = useCallback(() => {
    // Clear console before running
    setConsoleLogs([{
      type: 'info',
      message: ['🚀 Running code...'],
      timestamp: new Date().toLocaleTimeString()
    }]);
    
    // Force iframe reload by changing key first
    setIframeKey(prev => prev + 1);
    
    // Small delay to ensure iframe unmounts before updating source
    setTimeout(() => {
      // Add Tailwind CDN if Tailwind is selected
      const tailwindCDN = styleLang === 'tailwind' 
        ? '<script src="https://cdn.tailwindcss.com"></script>' 
        : '';
      
      // Add TypeScript compilation note (browser will treat as JS)
      const scriptToRun = scriptLang === 'typescript' 
        ? `// TypeScript code (running as JavaScript)\n${jsCode}` 
        : jsCode;
      
      // Update the output source
      setOutputSrc(`
        data:text/html;charset=utf-8,${encodeURIComponent(`
          <html>
            <head>
              ${tailwindCDN}
              <style>${compiledCss}</style>
              <script>${consoleScript}</script>
            </head>
            <body>
              ${htmlCode}
              <script>${scriptToRun}</script>
            </body>
          </html>
        `)}
      `);
      setHasChanges(false);
    }, 50);
  }, [htmlCode, compiledCss, jsCode, styleLang, scriptLang]);

  // Track code changes
  useEffect(() => {
    if (open) {
      setHasChanges(true);
    }
  }, [htmlCode, jsCode, styleCode, open]);

  // Auto-run when enabled
  useEffect(() => {
    if (!open) return;
    
    if (autoRun && hasChanges) {
      const timeout = setTimeout(() => {
        runCode();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [htmlCode, compiledCss, jsCode, autoRun, open, hasChanges, runCode]);

  // Initial run when modal opens and content is ready
  useEffect(() => {
    if (open && htmlCode && compiledCss && !hasInitialRunRef.current) {
      // Small delay to ensure everything is initialized
      const timeout = setTimeout(() => {
        runCode();
        hasInitialRunRef.current = true;
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [open, htmlCode, compiledCss, runCode]);
  
  const getLogLevelClass = (type: ConsoleLog['type']) => {
    switch (type) {
      case 'error': return 'text-destructive';
      case 'warn': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-muted-foreground';
    }
  }

  const renderLogMessage = (msg: any) => {
    if (typeof msg === 'object' && msg !== null) {
      return JSON.stringify(msg, null, 2);
    }
    return String(msg);
  }
  
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset content when closing if needed
      setContent({ html: '', css: '', js: '' });
      // Reset initial run flag for next open
      hasInitialRunRef.current = false;
    }
  };


  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] flex flex-col p-0 m-0 gap-0 rounded-none border-0" showCloseButton={false}>
        {/* Clean, Structured Header */}
        <DialogHeader className="px-6 py-3 border-b bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900 flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg shadow-sm">
                <Code className="h-4 w-4 text-white" />
              </div>
              <div>
                <DialogTitle className="text-base font-bold">Web Playground</DialogTitle>
                <p className="text-[10px] text-muted-foreground">Live coding environment</p>
              </div>
            </div>
            
            {/* Language Badges */}
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-950/30 dark:border-orange-800 dark:text-orange-400">
                HTML
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-400">
                {styleLang === 'tailwind' ? 'TAILWIND' : styleLang.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/30 dark:border-yellow-800 dark:text-yellow-400">
                {scriptLang === 'typescript' ? 'TS' : 'JS'}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Clean Square Panel Toggles */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Panels:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => togglePanel('html')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.html 
                      ? 'bg-orange-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="HTML"
                >
                  <FileJson className="h-4 w-4" />
                  {visiblePanels.html && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => togglePanel('css')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.css 
                      ? 'bg-blue-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="CSS"
                >
                  <Braces className="h-4 w-4" />
                  {visiblePanels.css && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => togglePanel('js')}
                  className={`relative w-9 h-9 flex items-center justify-center rounded transition-all ${
                    visiblePanels.js 
                      ? 'bg-yellow-500 text-white shadow-sm' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  title="JavaScript"
                >
                  <Code className="h-4 w-4" />
                  {visiblePanels.js && (
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                autoRun
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:scale-105 border'
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
              >
                <Play className="h-4 w-4" />
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
            
            {/* Clear Console */}
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
            
            {/* Close Button */}
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive" aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        {/* Main Content Area with Resizable Panels - All Horizontal */}
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
                {/* HTML Editor */}
                {visiblePanels.html && (
                  <>
                    <ResizablePanel defaultSize={20} collapsible minSize={15}>
                      <div className="h-full flex flex-col">
                        <div className="px-4 py-2.5 bg-orange-50 dark:bg-orange-950/20 border-b flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-1 bg-orange-500 rounded">
                              <FileJson className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-semibold text-orange-700 dark:text-orange-300">HTML</span>
                          </div>
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5">
                            index.html
                          </Badge>
                        </div>
                      <div className="flex-1">
                      <Editor
                        language="html"
                        value={htmlCode}
                        onChange={(value) => setHtmlCode(value || '')}
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
                        }}
                      />
                      </div>
                    </div>
                  </ResizablePanel>
                  {(visiblePanels.css || visiblePanels.js || visiblePanels.preview) && <ResizableHandle withHandle />}
                </>
                )}
                
                {/* CSS/SCSS Editor */}
                {visiblePanels.css && (
                  <>
                    <ResizablePanel defaultSize={20} collapsible minSize={15}>
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2.5 bg-blue-50 dark:bg-blue-950/20 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-blue-500 rounded">
                          <Braces className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                          {styleLang === 'scss' ? 'SCSS' : styleLang === 'tailwind' ? 'Tailwind CSS' : 'CSS'}
                        </span>
                        {styleLang === 'scss' && isCompiling && (
                          <div className="flex items-center gap-1">
                            <Loader2 className="h-3 w-3 animate-spin text-blue-500" />
                            <span className="text-[10px] text-muted-foreground">Compiling...</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] h-5 px-1.5">
                          styles.{styleLang === 'tailwind' ? 'css' : styleLang}
                        </Badge>
                        <select 
                          value={styleLang}
                          onChange={(e) => setStyleLang(e.target.value as StyleLang)}
                          className="h-6 text-[10px] px-2 rounded border bg-background"
                        >
                          <option value="css">CSS</option>
                          <option value="scss">SCSS</option>
                          <option value="tailwind">Tailwind</option>
                        </select>
                      </div>
                    </div>
                       <div className="flex-1">
                         <Editor
                           language={styleLang === 'tailwind' ? 'css' : styleLang}
                           value={styleCode}
                           onChange={(value) => setStyleCode(value || '')}
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
                           }}
                         />
                      </div>
                    </div>
                  </ResizablePanel>
                  {(visiblePanels.js || visiblePanels.preview) && <ResizableHandle withHandle />}
                </>
                )}
                
                {/* JavaScript Editor */}
                {visiblePanels.js && (
                  <>
                    <ResizablePanel defaultSize={20} collapsible minSize={15}>
                    <div className="h-full flex flex-col">
                      <div className="px-4 py-2.5 bg-yellow-50 dark:bg-yellow-950/20 border-b flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-yellow-500 rounded">
                            <Code className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-300">
                            {scriptLang === 'typescript' ? 'TypeScript' : 'JavaScript'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5">
                            script.{scriptLang === 'typescript' ? 'ts' : 'js'}
                          </Badge>
                          <select 
                            value={scriptLang}
                            onChange={(e) => setScriptLang(e.target.value as ScriptLang)}
                            className="h-6 text-[10px] px-2 rounded border bg-background"
                          >
                            <option value="javascript">JS</option>
                            <option value="typescript">TS</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Editor
                          language={scriptLang === 'typescript' ? 'typescript' : 'javascript'}
                          value={jsCode}
                          onChange={(value) => setJsCode(value || '')}
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
                          }}
                        />
                      </div>
                    </div>
                  </ResizablePanel>
                  {visiblePanels.preview && <ResizableHandle withHandle />}
                </>
                )}
                
                {/* Live Preview */}
                {visiblePanels.preview && (
                  <ResizablePanel defaultSize={40} minSize={20}>
                    <div className="h-full flex flex-col">
                      <div className="px-4 py-2.5 bg-emerald-50 dark:bg-emerald-950/20 border-b flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Live Preview</span>
                      </div>
                      <div className={`flex-1 relative ${editorTheme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
                        <iframe
                          key={iframeKey}
                          src={outputSrc}
                          title="preview"
                          sandbox="allow-scripts allow-modals"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                  </ResizablePanel>
                )}
                
                {/* Console Panel - Now Vertical */}
                {visiblePanels.console && (
                  <>
                    {(visiblePanels.html || visiblePanels.css || visiblePanels.js || visiblePanels.preview) && <ResizableHandle withHandle />}
                    <ResizablePanel defaultSize={20} collapsible minSize={15}>
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2.5 bg-purple-50 dark:bg-purple-950/20 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-purple-500 rounded">
                          <Terminal className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Console</span>
                        <Badge variant="outline" className="text-[10px] h-5 px-1.5">
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
              </>
            )}
          </ResizablePanelGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}
