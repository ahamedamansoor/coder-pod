
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
import { PanelTop, Code, Braces, FileJson, Terminal, Loader2, ChevronsUpDown, X } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { useWebPlayground } from './web-playground-context';
import { Button } from './ui/button';
import { compileScss } from '@/lib/scss-compiler';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from './ui/dropdown-menu';

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

type StyleLang = 'css' | 'scss';

export function WebPlaygroundModal({ children, initialLanguage }: { children: React.ReactNode, initialLanguage?: string }) {
  const { open, setOpen, content, setContent } = useWebPlayground();

  const [htmlCode, setHtmlCode] = useState('');
  const [styleCode, setStyleCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [compiledCss, setCompiledCss] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  
  const initialStyleLang = initialLanguage === 'scss' ? 'scss' : 'css';
  const [styleLang, setStyleLang] = useState<StyleLang>(initialStyleLang);

  const [outputSrc, setOutputSrc] = useState('');
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const [visiblePanels, setVisiblePanels] = useState<string[]>([
    'html', 'style', 'js', 'console'
  ]);
  const { theme } = useTheme();

  // Initialize/reset code when modal opens or content changes
  useEffect(() => {
    if (!open) return; // Only initialize when modal is open
    
    if (content.html || content.css || content.js) {
        const lang = content.css.includes('$') || content.css.includes('@mixin') ? 'scss' : 'css';
        setStyleLang(lang);
        setStyleCode(content.css || (lang === 'scss' ? defaultScss : defaultCss));
        setHtmlCode(content.html || defaultHtml);
        setJsCode(content.js || defaultJs);
    } else {
        // Use initialLanguage to determine default - prioritize SCSS for SCSS pages
        const defaultLang = initialLanguage === 'scss' ? 'scss' : 'css';
        setStyleLang(defaultLang);
        setStyleCode(defaultLang === 'scss' ? defaultScss : defaultCss);
        setHtmlCode(defaultHtml);
        setJsCode(defaultJs);
    }
  }, [content, initialLanguage, open]);

  // Debounced SCSS compilation
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
      const defaultLang = initialLanguage === 'scss' ? 'scss' : 'css';
      if (defaultLang === 'scss') {
        setConsoleLogs([{
          type: 'info',
          message: ['🎨 SCSS Mode Active - Use variables, nesting, mixins and more!'],
          timestamp: new Date().toLocaleTimeString()
        }]);
      }
    }
  }, [open, initialLanguage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutputSrc(`
        data:text/html;charset=utf-8,${encodeURIComponent(`
          <html>
            <head>
              <style>${compiledCss}</style>
              <script>${consoleScript}</script>
            </head>
            <body>
              ${htmlCode}
              <script>${jsCode}</script>
            </body>
          </html>
        `)}
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, compiledCss, jsCode, open]);
  
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
    }
  };


  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] flex flex-col p-0 gap-0" showCloseButton={false}>
        {/* Enhanced Header with gradient */}
        <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <PanelTop className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-lg font-bold">Web Playground</DialogTitle>
              <p className="text-xs text-muted-foreground">Live code editor with instant preview</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Panel Toggles */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-lg border">
              <span className="text-xs font-medium text-muted-foreground">Panels:</span>
              <ToggleGroup
                type="multiple"
                variant="outline"
                value={visiblePanels}
                onValueChange={(value) => setVisiblePanels(value)}
                className="gap-1"
              >
                <ToggleGroupItem value="html" aria-label="Toggle HTML" size="sm" className="h-8 w-8">
                  <FileJson className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="style" aria-label="Toggle Style" size="sm" className="h-8 w-8">
                  <Braces className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="js" aria-label="Toggle JS" size="sm" className="h-8 w-8">
                  <Code className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="console" aria-label="Toggle Console" size="sm" className="h-8 w-8">
                  <Terminal className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {/* Close Button */}
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-destructive/10 hover:text-destructive" aria-label="Close">
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <ResizablePanelGroup direction="horizontal">
                {visiblePanels.includes('html') && (
                  <ResizablePanel defaultSize={18} collapsible minSize={10}>
                    <div className="h-full flex flex-col">
                      <div className="px-4 py-2 bg-orange-500/10 border-b flex items-center gap-2">
                        <FileJson className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">HTML</span>
                      </div>
                      <div className="flex-1">
                        <Editor
                          language="html"
                          value={htmlCode}
                          onChange={(value) => setHtmlCode(value || '')}
                          theme={theme === 'dark' ? 'vs-dark' : 'light'}
                          options={{ 
                            minimap: { enabled: false }, 
                            wordWrap: 'on',
                            fontSize: 14,
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                          }}
                        />
                      </div>
                    </div>
                  </ResizablePanel>
                )}
                {visiblePanels.includes('html') && visiblePanels.includes('style') && <ResizableHandle withHandle />}
                {visiblePanels.includes('style') && (
                  <ResizablePanel defaultSize={18} collapsible minSize={10}>
                     <div className="h-full flex flex-col">
                       <div className="px-4 py-2 bg-blue-500/10 border-b flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <Braces className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                           <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                             {styleLang === 'scss' ? 'SCSS' : 'CSS'}
                           </span>
                           {styleLang === 'scss' && isCompiling && (
                             <div className="flex items-center gap-1 text-xs text-muted-foreground">
                               <Loader2 className="h-3 w-3 animate-spin" />
                               <span>Compiling...</span>
                             </div>
                           )}
                         </div>
                         <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                             <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 hover:bg-blue-500/20">
                               {styleLang.toUpperCase()}
                               <ChevronsUpDown className="h-3 w-3" />
                             </Button>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent>
                             <DropdownMenuRadioGroup value={styleLang} onValueChange={(v) => setStyleLang(v as StyleLang)}>
                               <DropdownMenuRadioItem value="scss">SCSS</DropdownMenuRadioItem>
                               <DropdownMenuRadioItem value="css">CSS</DropdownMenuRadioItem>
                             </DropdownMenuRadioGroup>
                           </DropdownMenuContent>
                         </DropdownMenu>
                       </div>
                       <div className="flex-1">
                         <Editor
                           language={styleLang}
                           value={styleCode}
                           onChange={(value) => setStyleCode(value || '')}
                           theme={theme === 'dark' ? 'vs-dark' : 'light'}
                           options={{ 
                             minimap: { enabled: false }, 
                             wordWrap: 'on',
                             fontSize: 14,
                             lineNumbers: 'on',
                             scrollBeyondLastLine: false,
                             automaticLayout: true,
                           }}
                         />
                       </div>
                     </div>
                  </ResizablePanel>
                )}
                {(visiblePanels.includes('html') || visiblePanels.includes('style')) && visiblePanels.includes('js') && <ResizableHandle withHandle />}
                {visiblePanels.includes('js') && (
                  <ResizablePanel defaultSize={18} collapsible minSize={10}>
                    <div className="h-full flex flex-col">
                      <div className="px-4 py-2 bg-yellow-500/10 border-b flex items-center gap-2">
                        <Code className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">JavaScript</span>
                      </div>
                      <div className="flex-1">
                        <Editor
                          language="javascript"
                          value={jsCode}
                          onChange={(value) => setJsCode(value || '')}
                          theme={theme === 'dark' ? 'vs-dark' : 'light'}
                          options={{ 
                            minimap: { enabled: false }, 
                            wordWrap: 'on',
                            fontSize: 14,
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                          }}
                        />
                      </div>
                    </div>
                  </ResizablePanel>
                )}
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={46} minSize={25}>
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2 bg-green-500/10 border-b flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Live Preview</span>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <iframe
                        src={outputSrc}
                        title="output"
                        sandbox="allow-scripts allow-modals"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        className="bg-white dark:bg-gray-900"
                      />
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>

            {visiblePanels.includes('console') && (
              <>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={25} collapsible minSize={10}>
                  <div className="h-full flex flex-col bg-muted/30">
                    <div className="px-4 py-2 bg-purple-500/10 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Console Output</span>
                        <span className="text-xs text-muted-foreground">
                          ({consoleLogs.length} {consoleLogs.length === 1 ? 'message' : 'messages'})
                        </span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setConsoleLogs([])}
                        className="h-7 text-xs hover:bg-purple-500/20"
                      >
                        Clear
                      </Button>
                    </div>
                    <ScrollArea className="flex-1 p-3">
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
