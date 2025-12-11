'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Play, Code2, FileCode, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * CodeSnippet - A component to display code with optional execution
 * Features: Code display, syntax highlighting, copy button, optional playground
 * Supports executable JavaScript with live console output
 */

interface CodeSnippetProps {
  title: string;
  description?: string;
  code: string;
  language?: 'javascript' | 'typescript' | 'html' | 'css' | 'jsx' | 'tsx';
  colorTheme?: 'blue' | 'purple' | 'emerald' | 'amber' | 'orange' | 'pink' | 'cyan' | 'red' | 'green' | 'yellow';
  icon?: React.ComponentType<{ className?: string }>;
  highlightLines?: number[];
  showLineNumbers?: boolean;
  playgroundConfig?: {
    html?: string;
    css?: string;
    js?: string;
    visiblePanels?: ('html' | 'css' | 'js' | 'preview' | 'console')[];
    layout?: 'horizontal' | 'vertical'; // horizontal: code|preview|console, vertical: preview top, code+console bottom
  };
  onOpenWebPlayground?: (html: string, css: string, js: string, config?: any) => void;
  features?: string[];
  tips?: string[];
  embedPlayground?: boolean; // If true, shows playground inline instead of modal
  previewOnly?: boolean; // If true with embedPlayground, shows ONLY the live preview without code/console
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  title,
  description,
  code,
  language = 'javascript',
  colorTheme = 'blue',
  icon: Icon = Code2,
  highlightLines = [],
  showLineNumbers = true,
  playgroundConfig,
  onOpenWebPlayground,
  features = [],
  tips = [],
  embedPlayground = false,
  previewOnly = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [previewHtml, setPreviewHtml] = useState<string>('');
  const previewRef = React.useRef<HTMLDivElement>(null);
  const outputLinesRef = React.useRef<string[]>([]);
  const [editableCode, setEditableCode] = useState(code);
  const [showEmbeddedPlayground, setShowEmbeddedPlayground] = useState(false);
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview');
  const [playgroundConsole, setPlaygroundConsole] = React.useState<string[]>([]);

  // Update editable code when prop changes
  React.useEffect(() => {
    setEditableCode(code);
  }, [code]);

  // Extract HTML from code comments or playgroundConfig
  React.useEffect(() => {
    // First check if playgroundConfig has HTML
    if (playgroundConfig?.html) {
      // Extract body content if it's a full HTML document
      const bodyMatch = playgroundConfig.html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      if (bodyMatch) {
        setPreviewHtml(bodyMatch[1].trim());
      } else {
        setPreviewHtml(playgroundConfig.html);
      }
      return;
    }
    
    // Otherwise, try to extract from code comments
    const htmlMatch = code.match(/\/\/\s*HTML:\s*(.+?)(?=\n|$)/i);
    if (htmlMatch) {
      setPreviewHtml(htmlMatch[1].trim());
    }
  }, [code, playgroundConfig]);

  const themeColors = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
      badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-700 dark:text-purple-300',
      badge: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      iconBg: 'bg-purple-100 dark:bg-purple-900/40',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/20',
      border: 'border-emerald-200 dark:border-emerald-800',
      text: 'text-emerald-700 dark:text-emerald-300',
      badge: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
      button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/20',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      badge: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
      button: 'bg-amber-600 hover:bg-amber-700 text-white',
      iconBg: 'bg-amber-100 dark:bg-amber-900/40',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-950/20',
      border: 'border-orange-200 dark:border-orange-800',
      text: 'text-orange-700 dark:text-orange-300',
      badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
      button: 'bg-orange-600 hover:bg-orange-700 text-white',
      iconBg: 'bg-orange-100 dark:bg-orange-900/40',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
    pink: {
      bg: 'bg-pink-50 dark:bg-pink-950/20',
      border: 'border-pink-200 dark:border-pink-800',
      text: 'text-pink-700 dark:text-pink-300',
      badge: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300',
      button: 'bg-pink-600 hover:bg-pink-700 text-white',
      iconBg: 'bg-pink-100 dark:bg-pink-900/40',
      iconColor: 'text-pink-600 dark:text-pink-400',
    },
    cyan: {
      bg: 'bg-cyan-50 dark:bg-cyan-950/20',
      border: 'border-cyan-200 dark:border-cyan-800',
      text: 'text-cyan-700 dark:text-cyan-300',
      badge: 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300',
      button: 'bg-cyan-600 hover:bg-cyan-700 text-white',
      iconBg: 'bg-cyan-100 dark:bg-cyan-900/40',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
    },
    red: {
      bg: 'bg-red-50 dark:bg-red-950/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-700 dark:text-red-300',
      badge: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
      button: 'bg-red-600 hover:bg-red-700 text-white',
      iconBg: 'bg-red-100 dark:bg-red-900/40',
      iconColor: 'text-red-600 dark:text-red-400',
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-950/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-700 dark:text-green-300',
      badge: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
      button: 'bg-green-600 hover:bg-green-700 text-white',
      iconBg: 'bg-green-100 dark:bg-green-900/40',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    yellow: {
      bg: 'bg-yellow-50 dark:bg-yellow-950/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-700 dark:text-yellow-300',
      badge: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300',
      button: 'bg-yellow-600 hover:bg-yellow-700 text-white',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/40',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
  };

  const theme = themeColors[colorTheme] ?? themeColors.blue;
  const codeLines = code.split('\n');
  
  // Check if code is executable (only JavaScript/TypeScript)
  const isExecutable = language === 'javascript' || language === 'typescript' || language === 'jsx' || language === 'tsx';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editableCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleRunInPlayground = () => {
    // If embedPlayground is true, toggle embedded view instead of opening modal
    if (embedPlayground) {
      setShowEmbeddedPlayground(!showEmbeddedPlayground);
      setPlaygroundConsole([]); // Clear console when toggling
      return;
    }
    
    console.log('Playground button clicked', { onOpenWebPlayground, playgroundConfig });
    
    if (!onOpenWebPlayground) {
      console.warn('onOpenWebPlayground prop is not provided');
      return;
    }
    
    if (!playgroundConfig) {
      console.warn('playgroundConfig is not provided');
      return;
    }
    
    try {
      const htmlContent = playgroundConfig.html || '';
      const cssContent = playgroundConfig.css || '';
      const jsContent = playgroundConfig.js || code;
      
      console.log('Opening playground with:', { htmlContent, cssContent, jsContent });
      
      // Try calling with 5 parameters first
      if (typeof onOpenWebPlayground === 'function') {
        const config = {
          visiblePanels: playgroundConfig.visiblePanels || ['js', 'console'],
        };
        
        // Call with all parameters
        (onOpenWebPlayground as any)(
          htmlContent,
          cssContent,
          jsContent,
          'js', // focused panel
          config
        );
        
        console.log('Playground opened successfully');
      }
    } catch (error) {
      console.error('Error opening playground:', error);
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    
    // Reset output
    outputLinesRef.current = [];
    setConsoleOutput([]);
    
    // Create a persistent mock console that continues to work
    const addOutput = (message: string) => {
      outputLinesRef.current = [...outputLinesRef.current, message];
      setConsoleOutput([...outputLinesRef.current]);
    };
    
    const mockConsole = {
      log: (...args: any[]) => {
        const message = args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' ');
        addOutput(message);
      },
      error: (...args: any[]) => {
        const message = '❌ ' + args.map(arg => String(arg)).join(' ');
        addOutput(message);
      },
      warn: (...args: any[]) => {
        const message = '⚠️ ' + args.map(arg => String(arg)).join(' ');
        addOutput(message);
      },
      info: (...args: any[]) => {
        const message = 'ℹ️ ' + args.map(arg => String(arg)).join(' ');
        addOutput(message);
      },
      clear: () => {
        outputLinesRef.current = [];
        setConsoleOutput([]);
      },
      table: (data: any) => {
        if (Array.isArray(data)) {
          addOutput('📊 Table:');
          data.forEach((item, index) => {
            addOutput(`  ${index}: ${JSON.stringify(item)}`);
          });
        } else if (typeof data === 'object') {
          addOutput('📊 Table:');
          Object.entries(data).forEach(([key, value]) => {
            addOutput(`  ${key}: ${JSON.stringify(value)}`);
          });
        }
      },
      group: (label?: string) => {
        addOutput(label ? `📁 ${label}` : '📁 Group');
      },
      groupEnd: () => {
        // Just a visual separator
      },
      time: (label?: string) => {
        // Store start time
        (mockConsole as any)[`__time_${label || 'default'}`] = Date.now();
      },
      timeEnd: (label?: string) => {
        const key = `__time_${label || 'default'}`;
        const startTime = (mockConsole as any)[key];
        if (startTime) {
          const duration = Date.now() - startTime;
          addOutput(`⏱️ ${label || 'default'}: ${duration}ms`);
          delete (mockConsole as any)[key];
        }
      },
    };
    
    try {
      // Clean code by removing HTML comment lines
      const cleanCode = editableCode.replace(/\/\/\s*HTML:.*$/gm, '').trim();
      
      // If there's a preview, run code in the preview context
      if (previewRef.current && previewHtml) {
        // Find the actual preview-container div where HTML is rendered
        const previewContainer = previewRef.current.querySelector('.preview-container') || previewRef.current;
        
        // Store reference to mock console for event handlers
        (window as any).__mockConsole = mockConsole;
        
        // Helper function to create a proxied element that works with mock console
        const createProxiedElement = (element: Element | null): any => {
          if (!element) {
            console.warn('[CodeSnippet] Element not found');
            return null;
          }
          
          return new Proxy(element, {
            get(target, prop) {
              // Intercept all event-related methods
              if (prop === 'addEventListener') {
                return function(type: string, listener: any, options?: any) {
                  const wrappedListener = function(event: Event) {
                    const originalConsole = (window as any).console;
                    const mockCon = (window as any).__mockConsole;
                    
                    if (mockCon) {
                      (window as any).console = mockCon;
                    }
                    
                    try {
                      if (typeof listener === 'function') {
                        listener.call(target, event);
                      }
                    } catch (error) {
                      console.error('[Event Error]', error);
                      if (mockCon && mockCon.error) {
                        mockCon.error('Event handler error:', error);
                      }
                    } finally {
                      (window as any).console = originalConsole;
                    }
                  };
                  
                  try {
                    (target as HTMLElement).addEventListener(type, wrappedListener, options);
                  } catch (error) {
                    console.error('[addEventListener Error]', error);
                  }
                };
              }
              
              if (prop === 'removeEventListener') {
                return function(type: string, listener: any, options?: any) {
                  (target as HTMLElement).removeEventListener(type, listener, options);
                };
              }
              
              // Handle onclick, onchange, etc. property assignments
              if (typeof prop === 'string' && prop.startsWith('on')) {
                return (target as any)[prop];
              }
              
              // Intercept DOM manipulation methods to return proxied elements
              if (prop === 'appendChild') {
                return function(child: Node) {
                  return (target as HTMLElement).appendChild(child);
                };
              }
              
              if (prop === 'removeChild') {
                return function(child: Node) {
                  return (target as HTMLElement).removeChild(child);
                };
              }
              
              if (prop === 'insertBefore') {
                return function(newNode: Node, referenceNode: Node | null) {
                  return (target as HTMLElement).insertBefore(newNode, referenceNode);
                };
              }
              
              if (prop === 'replaceChild') {
                return function(newChild: Node, oldChild: Node) {
                  return (target as HTMLElement).replaceChild(newChild, oldChild);
                };
              }
              
              // querySelector on element
              if (prop === 'querySelector') {
                return function(selector: string) {
                  const element = (target as Element).querySelector(selector);
                  return createProxiedElement(element);
                };
              }
              
              if (prop === 'querySelectorAll') {
                return function(selector: string) {
                  const elements = (target as Element).querySelectorAll(selector);
                  return Array.from(elements).map(el => createProxiedElement(el));
                };
              }
              
              // Return all other properties/methods as-is
              const value = (target as any)[prop];
              return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
              // Handle onclick, onchange, etc. property assignments
              if (typeof prop === 'string' && prop.startsWith('on') && typeof value === 'function') {
                const wrappedHandler = function(event: Event) {
                  const originalConsole = (window as any).console;
                  const mockCon = (window as any).__mockConsole;
                  
                  if (mockCon) {
                    (window as any).console = mockCon;
                  }
                  
                  try {
                    value.call(target, event);
                  } catch (error) {
                    console.error('[Event Handler Error]', error);
                    if (mockCon && mockCon.error) {
                      mockCon.error('Handler error:', error);
                    }
                  } finally {
                    (window as any).console = originalConsole;
                  }
                };
                (target as any)[prop] = wrappedHandler;
                return true;
              }
              
              // All other property assignments
              (target as any)[prop] = value;
              return true;
            }
          });
        };
        
        // Create a comprehensive scoped document object
        const scopedDocument = {
          // Core selection methods
          getElementById: (id: string) => {
            const element = previewContainer.querySelector(`#${id}`);
            return createProxiedElement(element);
          },
          
          querySelector: (selector: string) => {
            const element = previewContainer.querySelector(selector);
            return createProxiedElement(element);
          },
          
          querySelectorAll: (selector: string) => {
            const elements = previewContainer.querySelectorAll(selector);
            return Array.from(elements).map(el => createProxiedElement(el));
          },
          
          getElementsByClassName: (className: string) => {
            const elements = previewContainer.getElementsByClassName(className);
            return Array.from(elements).map(el => createProxiedElement(el));
          },
          
          getElementsByTagName: (tagName: string) => {
            const elements = previewContainer.getElementsByTagName(tagName);
            return Array.from(elements).map(el => createProxiedElement(el));
          },
          
          // DOM creation methods
          createElement: (tagName: string) => {
            const element = document.createElement(tagName);
            return createProxiedElement(element);
          },
          
          createTextNode: (text: string) => {
            return document.createTextNode(text);
          },
          
          // Other common document properties
          body: createProxiedElement(previewContainer),
          documentElement: createProxiedElement(previewContainer),
        };
        
        // Execute the code with persistent mock console
        try {
          const func = new Function('console', 'document', cleanCode);
          func(mockConsole, scopedDocument);
        } catch (execError) {
          console.error('[Code Execution Error]', execError);
          addOutput(`❌ Error: ${execError instanceof Error ? execError.message : String(execError)}`);
        }
      } else {
        // Run code normally without DOM access
        const func = new Function('console', cleanCode);
        func(mockConsole);
      }
      
      if (outputLinesRef.current.length === 0) {
        addOutput('// Code executed successfully');
      }
    } catch (error) {
      console.error('[handleRunCode Error]', error);
      addOutput(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
      addOutput('// Check browser console for details');
    }
    
    setIsRunning(false);
  };

  const getLanguageColor = () => {
    const colors: Record<string, string> = {
      javascript: 'yellow',
      typescript: 'blue',
      html: 'orange',
      css: 'cyan',
      jsx: 'emerald',
      tsx: 'purple',
    };
    return colors[language] || 'blue';
  };

  // Listen for console messages from iframe (always set up)
  React.useEffect(() => {
    if (!showEmbeddedPlayground) return;
    
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'console') {
        setPlaygroundConsole(prev => [...prev, event.data.message]);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [showEmbeddedPlayground]);

  // If previewOnly is enabled, show ONLY the live preview without code/console
  if (previewOnly && embedPlayground && playgroundConfig) {
    return (
      <Card className="border-0 shadow-sm overflow-hidden bg-white dark:bg-slate-900">
        {/* Subtle Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
              <Icon className={cn('w-4 h-4 text-slate-600 dark:text-slate-400')} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Live Preview</span>
            </div>
          </div>
        </div>

        {/* Live Preview Only */}
        <div className="bg-white dark:bg-slate-900">
          <iframe
            title="Live Preview"
            className="w-full h-[500px] border-0"
            sandbox="allow-scripts"
            srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      padding: 40px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${playgroundConfig.css || ''}
  </style>
</head>
<body>
  ${playgroundConfig.html || ''}
  <script>
    ${playgroundConfig.js || ''}
  </script>
</body>
</html>`}
          />
        </div>
      </Card>
    );
  }

  // If embedPlayground is enabled, show split view directly (no button needed)
  if (embedPlayground && playgroundConfig) {
    const isVerticalLayout = playgroundConfig.layout === 'vertical';
    
    return (
      <Card className="border-0 shadow-sm overflow-hidden bg-white dark:bg-slate-900">
        {/* Subtle Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
              <Icon className={cn('w-4 h-4 text-slate-600 dark:text-slate-400')} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Example</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Live</span>
            </div>
          </div>
        </div>

        {/* Split View - Conditional Layout */}
        {isVerticalLayout ? (
          // Vertical Layout: Preview Top, Code + Console Bottom
          <div className="flex flex-col h-[700px]">
            {/* Live Preview Panel - Top */}
            <div className="bg-white dark:bg-slate-900 overflow-hidden h-[350px] border-b border-slate-200 dark:border-slate-700">
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm font-semibold">Preview</span>
                </div>
              </div>
              <iframe
                title="Live Preview"
                className="w-full h-[calc(100%-52px)] border-0"
                sandbox="allow-scripts"
                srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    ${playgroundConfig.css || ''}
  </style>
</head>
<body>
  ${playgroundConfig.html || ''}
  <script>
    // Capture console logs
    (function() {
      const original = console.log;
      console.log = function(...args) {
        original.apply(console, args);
        window.parent.postMessage({ 
          type: 'console', 
          message: args.map(a => String(a)).join(' ') 
        }, '*');
      };
    })();
    
    try {
      ${playgroundConfig.js || editableCode}
    } catch (error) {
      console.log('❌ Error: ' + error.message);
    }
  </script>
</body>
</html>`}
              />
            </div>

            {/* Code + Console Row - Bottom */}
            <div className="grid grid-cols-2 flex-1">
              {/* Code Panel - Bottom Left */}
              <div className="bg-slate-50 dark:bg-slate-950 overflow-auto border-r border-slate-200 dark:border-slate-700">
                <div className="sticky top-0 z-10 px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-sm font-semibold">Code</span>
                  </div>
                </div>
                <div className="p-4">
                  <pre className="p-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl overflow-x-auto font-mono text-xs leading-relaxed border border-slate-200 dark:border-slate-700">
                    {playgroundConfig.js || editableCode}
                  </pre>
                </div>
              </div>

              {/* Console Panel - Bottom Right */}
              <div className="bg-slate-50 dark:bg-slate-950 flex flex-col">
                <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Terminal className="w-4 h-4" />
                    <span className="text-sm font-semibold">Console</span>
                  </div>
                  {playgroundConsole.length > 0 && (
                    <button
                      onClick={() => setPlaygroundConsole([])}
                      className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group"
                      title="Clear console"
                    >
                      <svg 
                        className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-1.5">
                  {playgroundConsole.length === 0 ? (
                    <div className="text-slate-400 dark:text-slate-500 text-xs italic">
                      Console output will appear here...
                    </div>
                  ) : (
                    playgroundConsole.map((log, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          'px-2 py-1 rounded text-xs',
                          log.startsWith('❌') 
                            ? 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/20'
                            : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800'
                        )}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Horizontal Layout: Code | Preview | Console
          <div className="grid lg:grid-cols-[500px,1fr,350px] h-[600px]">
            {/* Code Panel - Left */}
            <div className="bg-slate-50 dark:bg-slate-950 overflow-auto border-r border-slate-200 dark:border-slate-700">
            <div className="sticky top-0 z-10 px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-sm font-semibold">Code</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="p-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl overflow-x-auto font-mono text-xs leading-relaxed border border-slate-200 dark:border-slate-700">
                {playgroundConfig.js || editableCode}
              </pre>
              
              {playgroundConfig.html && (
                <>
                  <h4 className="text-xs font-semibold mt-4 mb-2 text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    HTML
                  </h4>
                  <pre className="p-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl overflow-x-auto font-mono text-xs leading-relaxed border border-slate-200 dark:border-slate-700">
                    {playgroundConfig.html}
                  </pre>
                </>
              )}
            </div>
          </div>

          {/* Live Preview Panel - Center */}
          <div className="bg-white dark:bg-slate-900 overflow-hidden">
            <div className="sticky top-0 z-10 px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm font-semibold">Preview</span>
              </div>
            </div>
            <iframe
              title="Live Preview"
              className="w-full h-[calc(100%-52px)] border-0"
              sandbox="allow-scripts"
              srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      padding: 40px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Container structures */
    .demo-container,
    .greeting-app {
      width: 100%;
      max-width: 500px;
      text-align: center;
    }
    
    /* Headers */
    h1, h2, h3 {
      color: white;
      margin-bottom: 24px;
      text-align: center;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    
    header h2 {
      margin-bottom: 30px;
    }
    
    main {
      width: 100%;
    }
    
    /* Input group */
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
    }
    
    /* Input fields */
    input {
      width: 100%;
      padding: 14px 18px;
      font-size: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      transition: all 0.3s;
      font-family: inherit;
      background: rgba(255, 255, 255, 0.95);
      color: #1e293b;
    }
    input:focus {
      outline: none;
      border-color: #60a5fa;
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
      background: white;
    }
    input::placeholder {
      color: #94a3b8;
    }
    
    /* Buttons */
    button,
    .action-btn {
      width: 100%;
      padding: 14px 24px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      transition: transform 0.2s, box-shadow 0.2s;
      font-family: inherit;
    }
    button:hover,
    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
    }
    button:active,
    .action-btn:active { 
      transform: translateY(0); 
    }
    
    /* Output display */
    .output-display,
    #output,
    [id*="output"] {
      margin-top: 24px;
      padding: 20px;
      font-size: 18px;
      color: #10b981;
      font-weight: 600;
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      border: 2px solid rgba(16, 185, 129, 0.3);
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }
    
    .output-display:not(:empty),
    #output:not(:empty) {
      border-color: #10b981;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
    }
    
    ${playgroundConfig.css || ''}
  </style>
</head>
<body>
  ${playgroundConfig.html || ''}
  <script>
    // Capture console logs
    (function() {
      const original = console.log;
      console.log = function(...args) {
        original.apply(console, args);
        window.parent.postMessage({ 
          type: 'console', 
          message: args.map(a => String(a)).join(' ') 
        }, '*');
      };
    })();
    
    try {
      ${playgroundConfig.js || editableCode}
    } catch (error) {
      console.log('❌ Error: ' + error.message);
      const output = document.getElementById('output') || document.querySelector('[id*="output"]');
      if (output) {
        output.style.color = '#ef4444';
        output.style.background = '#fef2f2';
        output.style.borderColor = '#ef4444';
        output.textContent = '❌ ' + error.message;
      }
    }
  </script>
</body>
</html>`}
              />
          </div>

          {/* Console Panel */}
          <div className="border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col">
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-100 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Console</span>
              </div>
              {playgroundConsole.length > 0 && (
                <button
                  onClick={() => setPlaygroundConsole([])}
                  className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group"
                  title="Clear console"
                >
                  <svg 
                    className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-1.5">
              {playgroundConsole.length === 0 ? (
                <div className="text-slate-400 dark:text-slate-500 text-xs italic">
                  Console output will appear here...
                </div>
              ) : (
                playgroundConsole.map((log, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      'px-2 py-1 rounded text-xs',
                      log.startsWith('❌') 
                        ? 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/20'
                        : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800'
                    )}
                  >
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
          </div>
        )}
      </Card>
    );
  }

  return (
    <Card className={cn('border-0 shadow-lg overflow-hidden', theme.bg)}>
      <div className="flex flex-col">
        {/* Header */}
        <div className={cn('flex items-center justify-between px-4 py-3 border-b', theme.border)}>
            <div className="flex items-center gap-3">
              <div className={cn('p-2 rounded-lg', theme.iconBg)}>
                <Icon className={cn('w-5 h-5', theme.iconColor)} />
              </div>
              <div>
                <h3 className={cn('font-semibold text-sm', theme.text)}>{title}</h3>
                {description && (
                  <p className="text-xs text-muted-foreground">{description}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Run Code Button - Only for executable languages without embed */}
              {isExecutable && (
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white transition-all group shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Execute code and see output"
                >
                  <Play className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="currentColor" />
                  <span className="text-xs font-semibold">{isRunning ? 'Running...' : 'Run'}</span>
                </button>
              )}
              
              {/* Language Badge */}
              <Badge variant="outline" className={cn('text-xs', theme.badge)}>
                {language}
              </Badge>
              
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                title="Copy code"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                ) : (
                  <Copy className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Interactive Preview Section - Clean, no headers */}
          {previewHtml && (
            <div className="border-b border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 flex items-center justify-center min-h-[80px]">
              <style dangerouslySetInnerHTML={{ __html: `
                .preview-container button {
                  padding: 8px 16px;
                  font-size: 14px;
                  font-weight: 500;
                  border-radius: 6px;
                  border: none;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  cursor: pointer;
                  transition: transform 0.2s, box-shadow 0.2s;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .preview-container button:hover {
                  transform: translateY(-1px);
                  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                }
                .preview-container button:active {
                  transform: translateY(0);
                }
                .preview-container input {
                  padding: 8px 12px;
                  border: 1px solid #e2e8f0;
                  border-radius: 6px;
                  font-size: 14px;
                }
                .preview-container input:focus {
                  outline: 2px solid #667eea;
                  outline-offset: 2px;
                }
              ` }} />
              <div 
                ref={previewRef}
                className="preview-container"
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            </div>
          )}

          {/* Code and Console Grid - Show console only for executable languages */}
          <div className={cn(
            "grid gap-0",
            isExecutable ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
          )}>
            {/* Code Display - Editable only for executable languages */}
            <div className={cn(
              "bg-slate-50 dark:bg-slate-950 overflow-x-auto",
              isExecutable && "border-r border-slate-200 dark:border-slate-800"
            )}>
              {isExecutable ? (
                <textarea
                  value={editableCode}
                  onChange={(e) => setEditableCode(e.target.value)}
                  className={cn(
                    "w-full p-4 font-mono text-xs bg-transparent text-slate-800 dark:text-slate-100 border-none outline-none resize-none leading-relaxed",
                    previewHtml ? "min-h-[300px]" : "min-h-[400px]"
                  )}
                  style={{
                    fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                  }}
                  spellCheck={false}
                />
              ) : (
                <div className="p-4 font-mono text-xs leading-relaxed" style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}>
                  {codeLines.map((line, index) => {
                    const lineNum = index + 1;
                    const isHighlighted = highlightLines.includes(lineNum);
                    
                    return (
                      <div
                        key={index}
                        className={cn(
                          'flex gap-4 min-h-[24px]',
                          isHighlighted && 'bg-blue-500/10 border-l-2 border-blue-500 pl-2 -ml-2'
                        )}
                      >
                        {showLineNumbers && (
                          <span className="text-slate-400 dark:text-slate-500 select-none w-8 text-right flex-shrink-0">
                            {lineNum}
                          </span>
                        )}
                        <span className="text-slate-800 dark:text-slate-100 whitespace-pre flex-1">{line}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Console Output - Only show for executable languages */}
            {isExecutable && (
              <div className="bg-slate-100 dark:bg-slate-900">
                <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Console Output</span>
                  </div>
                  {consoleOutput.length > 0 && (
                    <button
                      onClick={() => {
                        outputLinesRef.current = [];
                        setConsoleOutput([]);
                      }}
                      className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group"
                      title="Clear console"
                    >
                      <svg 
                        className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                </div>
                <div className={cn(
                  "p-4 font-mono text-xs overflow-y-auto",
                  previewHtml ? "h-[300px]" : "h-[400px]"
                )}>
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-400 dark:text-slate-500 text-xs italic">
                      Click "Run Code" to see output here...
                    </div>
                  ) : (
                    consoleOutput.map((line, index) => (
                      <div
                        key={index}
                        className={cn(
                          'mb-1 whitespace-pre-wrap',
                          line.startsWith('❌') ? 'text-red-600 dark:text-red-400' :
                          line.startsWith('⚠️') ? 'text-yellow-600 dark:text-yellow-400' :
                          line.startsWith('//') ? 'text-slate-500 dark:text-slate-400 italic' :
                          'text-emerald-600 dark:text-emerald-400'
                        )}
                      >
                        {line}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
      </div>
    </Card>
  );
};
