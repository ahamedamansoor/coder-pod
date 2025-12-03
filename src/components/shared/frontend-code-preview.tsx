'use client';

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, ChevronRight, Eye, Play } from 'lucide-react';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

/**
 * FrontendCodePreview - A component to display frontend code with live preview
 * 
 * Perfect for HTML, CSS, JavaScript examples where you want to show both
 * the code and the rendered result.
 */

interface FrontendCodePreviewProps {
  title: string;
  description?: string;
  html?: string;
  css?: string;
  js?: string;
  colorTheme?: 'blue' | 'purple' | 'emerald' | 'amber' | 'orange' | 'pink' | 'cyan' | 'red' | 'green';
  icon?: React.ComponentType<{ className?: string }>;
  previewHeight?: string;
  codeHeight?: string;
  onOpenPlayground?: (html: string, css: string, js: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export const FrontendCodePreview: React.FC<FrontendCodePreviewProps> = ({
  title,
  description,
  html = '',
  css = '',
  js = '',
  colorTheme = 'orange',
  icon: Icon = Eye,
  previewHeight = 'auto',
  codeHeight = 'auto',
  onOpenPlayground,
  onOpenWebPlayground,
}) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Extract CSS from HTML <style> tags
  const extractCSSFromHTML = (htmlContent: string): string => {
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    const matches = htmlContent.match(styleRegex);
    if (!matches) return '';
    
    return matches
      .map(match => {
        const contentMatch = match.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
        return contentMatch ? contentMatch[1].trim() : '';
      })
      .filter(Boolean)
      .join('\n\n');
  };

  // Extract JS from HTML <script> tags
  const extractJSFromHTML = (htmlContent: string): string => {
    const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    const matches = htmlContent.match(scriptRegex);
    if (!matches) return '';
    
    return matches
      .map(match => {
        const contentMatch = match.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
        return contentMatch ? contentMatch[1].trim() : '';
      })
      .filter(Boolean)
      .join('\n\n');
  };

  // Get extracted or provided content
  const extractedCSS = css || extractCSSFromHTML(html);
  const extractedJS = js || extractJSFromHTML(html);
  const hasCSS = !!extractedCSS;
  const hasJS = !!extractedJS;
  
  // Get display HTML (full or with extracted parts removed for cleaner display)
  const getDisplayHTML = (): string => {
    // If no extraction happened, show HTML as-is
    if (!extractedCSS && !extractedJS) return html;
    
    // Remove extracted <style> and <script> tags from HTML display for cleaner view
    let cleanedHTML = html;
    
    // Remove <style> tags if CSS was extracted
    if (extractedCSS) {
      cleanedHTML = cleanedHTML.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    }
    
    // Remove <script> tags if JS was extracted
    if (extractedJS) {
      cleanedHTML = cleanedHTML.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    }
    
    // Clean up extra whitespace/newlines left after removal
    cleanedHTML = cleanedHTML
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Replace multiple blank lines with double newline
      .trim();
    
    return cleanedHTML;
  };
  
  // Determine initial tab based on what's provided
  const getInitialTab = (): 'html' | 'css' | 'js' => {
    if (html) return 'html';
    if (hasCSS) return 'css';
    if (hasJS) return 'js';
    return 'html';
  };
  
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>(getInitialTab());
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get web playground context
  const { openWithContent } = useWebPlayground();

  // Handle mounting and dark mode detection
  useEffect(() => {
    setMounted(true);
    
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    const codeToCopy = activeTab === 'html' ? getDisplayHTML() : activeTab === 'css' ? extractedCSS : extractedJS;
    await navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Create the full HTML document for preview
  const getPreviewContent = () => {
    // If HTML already contains complete document structure, use it as-is
    if (html.trim().toLowerCase().startsWith('<!doctype')) {
      return html;
    }
    
    // Otherwise, build complete document from parts
    const bgColor = isDarkMode ? '#0f172a' : '#ffffff';
    const textColor = isDarkMode ? '#e2e8f0' : '#1e293b';
    
    return `<!DOCTYPE html>
<html lang="en" class="${isDarkMode ? 'dark' : ''}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
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
    }
    
    /* Dark mode support for common elements */
    ${isDarkMode ? `
    a { color: #60a5fa; }
    a:visited { color: #a78bfa; }
    button:not([style*="background"]) {
      background: #3b82f6;
      color: white;
    }
    input, textarea, select {
      background: #1e293b;
      color: #e2e8f0;
      border-color: #475569;
    }
    ` : ''}
    
    ${extractedCSS}
  </style>
</head>
<body>
  ${html}
  <script>
    try {
      ${extractedJS}
    } catch(e) {
      console.error('Error:', e);
    }
  </script>
</body>
</html>`;
  };

  // Theme colors
  const themeColors = {
    blue: {
      gradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      border: 'border-blue-200/60 dark:border-blue-700',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-400',
      tab: 'bg-blue-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    purple: {
      gradient: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      border: 'border-purple-200/60 dark:border-purple-700',
      badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      icon: 'text-purple-600 dark:text-purple-400',
      tab: 'bg-purple-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    emerald: {
      gradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20',
      border: 'border-emerald-200/60 dark:border-emerald-700',
      badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      icon: 'text-emerald-600 dark:text-emerald-400',
      tab: 'bg-emerald-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    green: {
      gradient: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
      border: 'border-green-200/60 dark:border-green-700',
      badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      icon: 'text-green-600 dark:text-green-400',
      tab: 'bg-green-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    amber: {
      gradient: 'from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20',
      border: 'border-amber-200/60 dark:border-amber-700',
      badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      icon: 'text-amber-600 dark:text-amber-400',
      tab: 'bg-amber-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    orange: {
      gradient: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      border: 'border-orange-200/60 dark:border-orange-700',
      badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      icon: 'text-orange-600 dark:text-orange-400',
      tab: 'bg-orange-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    red: {
      gradient: 'from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20',
      border: 'border-red-200/60 dark:border-red-700',
      badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      icon: 'text-red-600 dark:text-red-400',
      tab: 'bg-red-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    pink: {
      gradient: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20',
      border: 'border-pink-200/60 dark:border-pink-700',
      badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
      icon: 'text-pink-600 dark:text-pink-400',
      tab: 'bg-pink-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    cyan: {
      gradient: 'from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20',
      border: 'border-cyan-200/60 dark:border-cyan-700',
      badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      icon: 'text-cyan-600 dark:text-cyan-400',
      tab: 'bg-cyan-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
  };

  const theme = themeColors[colorTheme] ?? themeColors.orange;
  const currentCode = activeTab === 'html' ? getDisplayHTML() : activeTab === 'css' ? extractedCSS : extractedJS;

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
          <Badge className={theme.badge}>Frontend</Badge>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="lg:w-1/2 flex flex-col border border-slate-200 dark:border-slate-900/40 rounded-lg overflow-hidden shadow-sm">
            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 px-4 py-2 border-b dark:border-slate-800">
              <div className="flex gap-2">
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
                {hasCSS && (
                  <button
                    onClick={() => setActiveTab('css')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'css' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    CSS
                  </button>
                )}
                {hasJS && (
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
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    openWithContent(html, extractedCSS, extractedJS);
                    const openHandler = onOpenPlayground ?? onOpenWebPlayground;
                    if (!openWithContent && openHandler) {
                      openHandler(html, extractedCSS, extractedJS);
                    }
                  }}
                  className="px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white transition-all group shadow-sm hover:shadow-md"
                  title="Open code in Web Playground for interactive editing"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
                  <span className="text-xs font-semibold">Run</span>
                </button>
                <button
                  onClick={handleCopy}
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
            </div>
            <div className="max-h-[600px] overflow-auto">
              <pre 
                className="p-5 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100"
              >
                <code
                  className="text-[13px] leading-relaxed font-mono"
                  style={{
                    fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", Cascadia Code, Menlo, Monaco, Consolas, monospace',
                    fontFeatureSettings: '"liga", "calt"',
                  }}
                >
                  {currentCode}
                </code>
              </pre>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col border border-slate-200 dark:border-slate-900/40 rounded-lg overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 border-b dark:border-slate-800">
              <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                Live Preview
              </span>
            </div>
            <div 
              className="h-[600px] p-4 overflow-auto bg-white dark:bg-slate-950"
              style={previewHeight === 'auto' ? undefined : { height: previewHeight }}
            >
              {mounted ? (
                <iframe
                  key={isDarkMode ? 'dark' : 'light'}
                  srcDoc={getPreviewContent()}
                  title="Preview"
                  className="w-full h-full border-0 bg-white dark:bg-slate-950 rounded"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                  <div className="text-center text-slate-400 dark:text-slate-500">
                    <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Loading preview...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
