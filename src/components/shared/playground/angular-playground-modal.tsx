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
import { useAngularPlayground } from './angular-playground-context';
import {
  ExternalLink,
  Code,
  Play,
  FileCode,
  Zap,
  Package,
  BookOpen,
  X,
  Eye,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';

export function AngularPlaygroundModal() {
  const { isOpen, playgroundData, closePlayground, openInStackBlitz } = useAngularPlayground();
  const { theme } = useTheme();
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>(theme === 'dark' ? 'dark' : 'light');
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  // Sync editor theme with app theme
  useEffect(() => {
    setEditorTheme(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  // Reset preview when opening
  useEffect(() => {
    if (isOpen) {
      setPreviewLoaded(false);
    } else {
      setShowLivePreview(true); // Reset to true for next open
    }
  }, [isOpen]);

  // Generate StackBlitz embed URL dynamically from files
  useEffect(() => {
    if (isOpen && playgroundData && showLivePreview && !playgroundData.stackblitzProjectId) {
      setPreviewLoaded(false);
      
      // Clear previous embed
      const embedContainer = document.getElementById('angular-playground-embed');
      if (embedContainer) {
        embedContainer.innerHTML = '';
      }
      
      // Use StackBlitz SDK to embed project from files
      import('@stackblitz/sdk').then((sdk) => {
        const project = {
          title: playgroundData.title || 'Angular Playground',
          description: playgroundData.description || 'Angular example',
          template: 'angular-cli' as const,
          files: {
            ...playgroundData.files,
          },
        };

        // Create embed - this will inject an iframe into the div
        sdk.default.embedProject(
          'angular-playground-embed',
          project,
          {
            openFile: playgroundData.openFile || 'src/app/app.component.ts',
            view: 'preview',
            hideExplorer: true,
            hideNavigation: true,
            theme: editorTheme,
          }
        ).then(() => {
          // Hide loading spinner after embed is created
          setTimeout(() => setPreviewLoaded(true), 3000);
        }).catch((error) => {
          console.error('Failed to embed StackBlitz project:', error);
          setPreviewLoaded(true);
        });
      });
    }
  }, [isOpen, playgroundData, showLivePreview, editorTheme]);


  // Get the first file as default selected file
  React.useEffect(() => {
    if (playgroundData && !selectedFile) {
      const files = Object.keys(playgroundData.files);
      setSelectedFile(playgroundData.openFile || files[0] || '');
    }
  }, [playgroundData, selectedFile]);

  if (!playgroundData) return null;

  const files = Object.keys(playgroundData.files);

  // Get file language for syntax highlighting
  const getFileLanguage = (filename: string): string => {
    if (filename.endsWith('.ts')) return 'typescript';
    if (filename.endsWith('.html')) return 'html';
    if (filename.endsWith('.css') || filename.endsWith('.scss')) return 'css';
    if (filename.endsWith('.json')) return 'json';
    return 'typescript';
  };

  // Get file icon
  const getFileIcon = (filename: string) => {
    if (filename.endsWith('.ts')) return <FileCode className="w-4 h-4 text-blue-500" />;
    if (filename.endsWith('.html')) return <Code className="w-4 h-4 text-orange-500" />;
    if (filename.endsWith('.css') || filename.endsWith('.scss')) return <Zap className="w-4 h-4 text-purple-500" />;
    if (filename.endsWith('.json')) return <Package className="w-4 h-4 text-yellow-500" />;
    return <FileCode className="w-4 h-4 text-gray-500" />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={closePlayground}>
      <DialogContent className="w-screen h-screen max-w-none flex flex-col p-0 gap-0" showCloseButton={false}>
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-red-50/30 to-pink-50/30 dark:from-red-950/20 dark:to-pink-950/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl">
                    {playgroundData.title || 'Angular Playground'}
                  </DialogTitle>
                  <DialogDescription className="mt-1">
                    {playgroundData.description || 'Explore and modify Angular code'}
                  </DialogDescription>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowLivePreview(!showLivePreview)}
                size="sm"
                variant={showLivePreview ? 'default' : 'outline'}
                className={showLivePreview ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700' : 'border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/20'}
              >
                <Eye className="w-4 h-4 mr-2" />
                {showLivePreview ? 'Hide' : 'Show'} Live Preview
              </Button>
              <Button
                onClick={() => openInStackBlitz(playgroundData)}
                size="sm"
                variant="outline"
                className="border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Edit in StackBlitz
              </Button>
              <button
                onClick={closePlayground}
                className="group relative w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg hover:shadow-xl"
                aria-label="Close playground"
              >
                <X className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 rounded-full bg-red-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 flex flex-row overflow-hidden">
          {/* File Sidebar */}
          <div className="w-64 border-r bg-gradient-to-b from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10 flex flex-col">
            <div className="px-4 py-3 border-b bg-red-100/50 dark:bg-red-900/20">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <FileCode className="w-4 h-4" />
                Files
              </h3>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-2">
                {files.map((file) => (
                  <button
                    key={file}
                    onClick={() => setSelectedFile(file)}
                    className={cn(
                      'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors mb-1',
                      selectedFile === file
                        ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-medium'
                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {getFileIcon(file)}
                    <span className="truncate">{file.split('/').pop()}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>

            {/* Info Section */}
            <div className="p-4 border-t bg-red-100/50 dark:bg-red-900/20 space-y-3">
              <div>
                <h4 className="font-semibold text-xs mb-2 flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-3 h-3" />
                  FEATURES
                </h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">TypeScript</Badge>
                  <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">Components</Badge>
                  <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">Reactive</Badge>
                </div>
              </div>

              <div className="text-xs text-muted-foreground space-y-1">
                <p className="flex items-center gap-2">
                  <Play className="w-3 h-3" />
                  Runs on StackBlitz
                </p>
                <p className="flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  Angular 17+
                </p>
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className={`flex flex-col transition-all duration-300 ${showLivePreview ? 'w-1/2 min-w-[400px]' : 'flex-1'}`}>
            <div className="px-4 py-2 border-b bg-gradient-to-r from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getFileIcon(selectedFile)}
                <span className="font-mono text-sm">
                  {selectedFile}
                </span>
              </div>
              <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                Read-only preview
              </Badge>
            </div>

            <div className="flex-1 relative">
              {selectedFile && playgroundData.files[selectedFile] ? (
                <Editor
                  height="100%"
                  language={getFileLanguage(selectedFile)}
                  value={playgroundData.files[selectedFile]}
                  theme={editorTheme === 'dark' ? 'vs-dark' : 'light'}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 13,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", Menlo, Monaco, Consolas, monospace',
                    fontLigatures: true,
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <FileCode className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Select a file to preview</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="px-4 py-3 border-t bg-gradient-to-r from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10 flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                💡 {showLivePreview ? 'Live Angular app running on the right' : 'Click "Show Live Preview" to see this app running'}
              </div>
              {!showLivePreview && (
                <Button
                  onClick={() => openInStackBlitz(playgroundData)}
                  size="sm"
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run in StackBlitz
                </Button>
              )}
            </div>
          </div>

          {/* Live Preview - Instant Loading */}
          {showLivePreview && (
            <div className="w-1/2 min-w-[400px] flex flex-col border-l">
              <div className="px-4 py-2 border-b bg-gradient-to-r from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  <span className="font-semibold text-sm">Live Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs flex items-center gap-1 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                    <Zap className="w-3 h-3" />
                    Running
                  </Badge>
                  <Button
                    onClick={() => openInStackBlitz(playgroundData)}
                    variant="ghost"
                    size="sm"
                    className="hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-400"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 relative bg-gray-50 dark:bg-slate-950 overflow-hidden">
                {!previewLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-red-200 dark:border-red-800 border-t-red-600 dark:border-t-red-400 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-sm text-muted-foreground">Loading Angular app...</p>
                    </div>
                  </div>
                )}
                {playgroundData.stackblitzProjectId ? (
                  <iframe
                    src={`https://stackblitz.com/edit/${playgroundData.stackblitzProjectId}?embed=1&file=${encodeURIComponent(playgroundData.openFile || 'src/app/app.component.ts')}&view=preview&hideExplorer=1&hideNavigation=1&theme=${editorTheme}`}
                    className="w-full h-full border-0 absolute inset-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                    loading="eager"
                    title="Angular Live Preview"
                    onLoad={() => setPreviewLoaded(true)}
                  />
                ) : (
                  <div id="angular-playground-embed" className="w-full h-full absolute inset-0" />
                )}
              </div>

              <div className="px-4 py-2 border-t bg-gradient-to-r from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10 flex items-center justify-between">
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Play className="w-3 h-3" />
                  Powered by StackBlitz
                </div>
                <Button
                  onClick={() => openInStackBlitz(playgroundData)}
                  size="sm"
                  variant="ghost"
                  className="text-xs hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-400"
                >
                  Edit Code →
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
