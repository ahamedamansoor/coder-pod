'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ExternalLink,
  Code,
  FileCode,
  Eye,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface AngularPlaygroundData {
  title: string;
  description?: string;
  files: Record<string, string>;
  openFile?: string;
  stackblitzProjectId?: string;
}

interface StandaloneAngularPlaygroundProps {
  isOpen: boolean;
  onClose: () => void;
  playgroundData: AngularPlaygroundData;
}

export function StandaloneAngularPlayground({ isOpen, onClose, playgroundData }: StandaloneAngularPlaygroundProps) {
  const { theme } = useTheme();
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>(theme === 'dark' ? 'dark' : 'light');
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  // Sync editor theme with app theme
  useEffect(() => {
    setEditorTheme(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  // Set initial file when playground opens
  useEffect(() => {
    if (isOpen && playgroundData) {
      const initialFile = playgroundData.openFile || Object.keys(playgroundData.files)[0];
      setSelectedFile(initialFile);
      setShowLivePreview(false);
      setPreviewLoaded(false);
    }
  }, [isOpen, playgroundData]);

  const openInStackBlitz = () => {
    if (!playgroundData) return;

    const project = {
      title: playgroundData.title || 'Angular Playground',
      description: playgroundData.description || 'Angular component example',
      template: 'angular-cli' as const,
      files: {
        ...playgroundData.files,
        'src/main.ts': `import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch(err => console.error(err));`,
        'src/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${playgroundData.title || 'Angular Playground'}</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,
      },
    };

    import('@stackblitz/sdk').then((sdk) => {
      sdk.openProject(project, {
        openFile: selectedFile,
        newWindow: true,
      });
    });
  };

  const getEmbedUrl = () => {
    if (!playgroundData?.stackblitzProjectId) return null;
    return `https://stackblitz.com/edit/${playgroundData.stackblitzProjectId}?embed=1&file=${selectedFile}`;
  };

  if (!playgroundData) return null;

  const files = Object.keys(playgroundData.files);
  const currentCode = playgroundData.files[selectedFile] || '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
                {playgroundData.title}
              </DialogTitle>
              {playgroundData.description && (
                <DialogDescription className="mt-2 text-base">
                  {playgroundData.description}
                </DialogDescription>
              )}
            </div>
            <Button
              onClick={openInStackBlitz}
              variant="outline"
              size="sm"
              className="shrink-0"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Edit in StackBlitz
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 flex overflow-hidden">
          {/* File Tree Sidebar */}
          <div className="w-64 border-r bg-muted/30 flex flex-col">
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Code className="w-4 h-4" />
                Files
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-2 space-y-1">
                {files.map((file) => (
                  <button
                    key={file}
                    onClick={() => setSelectedFile(file)}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2',
                      selectedFile === file
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    <FileCode className="w-4 h-4 shrink-0" />
                    <span className="truncate">{file}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Tabs */}
            <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/30">
              <Badge variant={!showLivePreview ? 'default' : 'outline'}>
                <Code className="w-3 h-3 mr-1" />
                Code
              </Badge>
              {playgroundData.stackblitzProjectId && (
                <Button
                  variant={showLivePreview ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setShowLivePreview(!showLivePreview);
                    if (!showLivePreview) {
                      setPreviewLoaded(false);
                    }
                  }}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showLivePreview ? 'Hide' : 'Show'} Live Preview
                </Button>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Code Editor */}
              <div
                className={cn(
                  'transition-all duration-300',
                  showLivePreview ? 'w-1/2 border-r' : 'w-full'
                )}
              >
                <Editor
                  height="100%"
                  language="typescript"
                  theme={editorTheme === 'dark' ? 'vs-dark' : 'light'}
                  value={currentCode}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              </div>

              {/* Live Preview */}
              {showLivePreview && playgroundData.stackblitzProjectId && (
                <div className="w-1/2 bg-white dark:bg-slate-950 relative">
                  {!previewLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                      <div className="text-center space-y-2">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                        <p className="text-sm text-muted-foreground">Loading preview...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={getEmbedUrl() || ''}
                    className="w-full h-full border-0"
                    onLoad={() => setPreviewLoaded(true)}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
