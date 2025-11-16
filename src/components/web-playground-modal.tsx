
'use client';
import React, { useState, useEffect } from 'react';
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
import { PanelTop } from 'lucide-react';

const defaultHtml = `<!DOCTYPE html>
<html>
<head>
  <title>My Playground</title>
</head>
<body>
  <h1>Welcome to the Web Playground!</h1>
  <p>Edit the HTML, CSS, and JS to see live updates.</p>
  <button onclick="changeColor()">Click Me</button>
</body>
</html>
`;

const defaultCss = `body {
  font-family: sans-serif;
  transition: background-color 0.5s;
  padding: 1rem;
}

h1 {
  color: hsl(var(--primary));
}

button {
  padding: 10px 15px;
  border: none;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-radius: 5px;
  cursor: pointer;
}
`;

const defaultJs = `function changeColor() {
  const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
`;

export function WebPlaygroundModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [cssCode, setCssCode] = useState(defaultCss);
  const [jsCode, setJsCode] = useState(defaultJs);
  const [outputSrc, setOutputSrc] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutputSrc(`
        data:text/html;charset=utf-8,${encodeURIComponent(`
          <html>
            <head>
              <style>${cssCode}</style>
            </head>
            <body>
              ${htmlCode}
              <script>${jsCode}</script>
            </body>
          </html>
        `)}
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[90vw] h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <PanelTop />
            Web Playground
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25}>
              <Editor
                language="html"
                value={htmlCode}
                onChange={(value) => setHtmlCode(value || '')}
                theme={theme === 'dark' ? 'vs-dark' : 'light'}
                options={{ minimap: { enabled: false }, wordWrap: 'on' }}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25}>
              <Editor
                language="css"
                value={cssCode}
                onChange={(value) => setCssCode(value || '')}
                theme={theme === 'dark' ? 'vs-dark' : 'light'}
                options={{ minimap: { enabled: false }, wordWrap: 'on' }}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25}>
              <Editor
                language="javascript"
                value={jsCode}
                onChange={(value) => setJsCode(value || '')}
                theme={theme === 'dark' ? 'vs-dark' : 'light'}
                options={{ minimap: { enabled: false }, wordWrap: 'on' }}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25}>
              <iframe
                src={outputSrc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                className="bg-white"
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}
