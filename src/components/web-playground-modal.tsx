
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { PanelTop, Code, Braces, FileJson, Terminal, Loader2 } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { useWebPlayground } from './web-playground-context';
import { Button } from './ui/button';
import { compileScssCode } from '@/ai/flows/compile-scss-code';

const defaultHtml = `<!DOCTYPE html>
<html>
<head>
  <title>My Playground</title>
</head>
<body>
  <div class="card">
    <h1>Welcome to the SCSS Playground!</h1>
    <p>Edit the SCSS code to see live updates.</p>
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

export function WebPlaygroundModal({ children }: { children: React.ReactNode }) {
  const { open, setOpen, content, setContent } = useWebPlayground();

  const [htmlCode, setHtmlCode] = useState('');
  const [scssCode, setScssCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);

  const [outputSrc, setOutputSrc] = useState('');
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const [visiblePanels, setVisiblePanels] = useState<string[]>([
    'html', 'scss', 'js', 'console'
  ]);
  const { theme } = useTheme();

  useEffect(() => {
    setHtmlCode(content.html || defaultHtml);
    setScssCode(content.css || defaultScss); // Treat incoming CSS as SCSS
    setJsCode(content.js || defaultJs);
  }, [content]);

  // Debounced SCSS compilation
  useEffect(() => {
    if (!open) return;
    
    setIsCompiling(true);
    const handler = setTimeout(async () => {
      try {
        const result = await compileScssCode({ scss: scssCode });
        setCssCode(result.css);
      } catch (e) {
        console.error("SCSS Compilation Error:", e);
        setCssCode(`/* SCSS Compilation Failed */`);
      } finally {
        setIsCompiling(false);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [scssCode, open]);


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
    }
    const timeout = setTimeout(() => {
      setOutputSrc(`
        data:text/html;charset=utf-8,${encodeURIComponent(`
          <html>
            <head>
              <style>${cssCode}</style>
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
  }, [htmlCode, cssCode, jsCode, open]);
  
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
      <DialogContent className="max-w-[95vw] h-[95vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b flex-row items-center justify-between">
          <DialogTitle className="flex items-center gap-2">
            <PanelTop />
            Web Playground
          </DialogTitle>
          <ToggleGroup
            type="multiple"
            variant="outline"
            value={visiblePanels}
            onValueChange={(value) => setVisiblePanels(value)}
            className="gap-1 mr-8"
          >
            <ToggleGroupItem value="html" aria-label="Toggle HTML"><FileJson className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="scss" aria-label="Toggle SCSS"><Braces className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="js" aria-label="Toggle JS"><Code className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="console" aria-label="Toggle Console"><Terminal className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <ResizablePanelGroup direction="horizontal">
                {visiblePanels.includes('html') && (
                  <ResizablePanel defaultSize={25} collapsible minSize={10}>
                    <Editor
                      language="html"
                      value={htmlCode}
                      onChange={(value) => setHtmlCode(value || '')}
                      theme={theme === 'dark' ? 'vs-dark' : 'light'}
                      options={{ minimap: { enabled: false }, wordWrap: 'on' }}
                    />
                  </ResizablePanel>
                )}
                {visiblePanels.includes('html') && visiblePanels.includes('scss') && <ResizableHandle withHandle />}
                {visiblePanels.includes('scss') && (
                  <ResizablePanel defaultSize={25} collapsible minSize={10}>
                     <div className="relative h-full">
                       <div className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-1 text-xs flex items-center gap-1 text-muted-foreground">
                        {isCompiling ? (
                          <>
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>Compiling...</span>
                          </>
                        ) : (
                          <span>SCSS</span>
                        )}
                       </div>
                        <Editor
                          language="scss"
                          value={scssCode}
                          onChange={(value) => setScssCode(value || '')}
                          theme={theme === 'dark' ? 'vs-dark' : 'light'}
                          options={{ minimap: { enabled: false }, wordWrap: 'on' }}
                        />
                     </div>
                  </ResizablePanel>
                )}
                {(visiblePanels.includes('html') || visiblePanels.includes('scss')) && visiblePanels.includes('js') && <ResizableHandle withHandle />}
                {visiblePanels.includes('js') && (
                  <ResizablePanel defaultSize={25} collapsible minSize={10}>
                    <Editor
                      language="javascript"
                      value={jsCode}
                      onChange={(value) => setJsCode(value || '')}
                      theme={theme === 'dark' ? 'vs-dark' : 'light'}
                      options={{ minimap: { enabled: false }, wordWrap: 'on' }}
                    />
                  </ResizablePanel>
                )}
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={25} minSize={20}>
                  <iframe
                    src={outputSrc}
                    title="output"
                    sandbox="allow-scripts allow-modals"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="bg-white"
                  />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>

            {visiblePanels.includes('console') && (
              <>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={25} collapsible minSize={10}>
                  <div className="h-full flex flex-col">
                    <div className="p-2 border-b flex items-center justify-between text-sm font-semibold">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        Console
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setConsoleLogs([])}>Clear</Button>
                    </div>
                    <ScrollArea className="flex-1 p-2 bg-muted/50">
                      {consoleLogs.map((log, index) => (
                        <div key={index} className={cn("flex gap-2 items-start font-mono text-xs border-b border-border/50 py-1", getLogLevelClass(log.type))}>
                           <span className="opacity-50">{log.timestamp}</span>
                           <div className="flex-1 whitespace-pre-wrap">
                            {log.message.map((msg, i) => (
                              <span key={i}>{renderLogMessage(msg)} </span>
                            ))}
                          </div>
                        </div>
                      ))}
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
