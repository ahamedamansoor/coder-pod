'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, ChevronRight, Eye, Play, Code2, EyeOff } from 'lucide-react';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';
import { useReactPlayground } from '@/components/shared/playground/react-playground-context';
import { useAngularPlayground } from '@/components/shared/playground/angular-playground-context';
import { compileScss } from '@/lib/scss-compiler';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

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
  react?: string;
  angular?: string;
  vue?: string;
  next?: string;
  colorTheme?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
  icon?: React.ComponentType<{ className?: string }>;
  previewHeight?: string;
  codeHeight?: string;
  styleLanguage?: 'css' | 'scss' | 'tailwind';
  hideTabs?: Array<'html' | 'css' | 'js'>; // Hide specific tabs (useful for HTML-only content)
  onOpenPlayground?: (html: string, css: string, js: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export const FrontendCodePreview: React.FC<FrontendCodePreviewProps> = ({
  title,
  description,
  html = '',
  css = '',
  js = '',
  react = '',
  angular = '',
  vue = '',
  next = '',
  colorTheme = 'orange',
  icon: Icon = Eye,
  previewHeight = 'auto',
  codeHeight = 'auto',
  styleLanguage = 'css',
  hideTabs = [],
  onOpenPlayground,
  onOpenWebPlayground,
}) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [iframeHeight, setIframeHeight] = useState<number>(500);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [compiledCss, setCompiledCss] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const { theme: appTheme } = useTheme();
  
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
  const hasCSS = !!extractedCSS && !hideTabs.includes('css');
  const hasJS = !!extractedJS && !hideTabs.includes('js');
  const hasReact = !!react;
  const hasAngular = !!angular;
  const hasVue = !!vue;
  const hasNext = !!next;
  
  // Check if any framework code is provided
  const hasFramework = hasReact || hasAngular || hasVue || hasNext;
  
  // Get display HTML (full or with extracted parts removed for cleaner display)
  const getDisplayHTML = (): string => {
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
      .replace(/\n\s*\n\s*\n+/g, '\n\n') // Replace multiple blank lines with double newline
      .replace(/>\s+</g, '>\n<') // Add line breaks between tags
      .trim();
    
    // Format HTML with proper indentation for better readability
    const formatHTML = (htmlString: string): string => {
      const lines = htmlString.split('\n');
      let formatted = '';
      let indent = 0;
      const indentSize = 2;
      
      lines.forEach((line) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return;
        
        // Decrease indent for closing tags
        if (trimmedLine.startsWith('</')) {
          indent = Math.max(0, indent - indentSize);
        }
        
        // Add indented line
        formatted += ' '.repeat(indent) + trimmedLine + '\n';
        
        // Increase indent for opening tags (but not self-closing or closing tags)
        if (
          trimmedLine.startsWith('<') && 
          !trimmedLine.startsWith('</') && 
          !trimmedLine.endsWith('/>') &&
          !trimmedLine.match(/<(img|input|br|hr|meta|link|area|base|col|embed|param|source|track|wbr)[^>]*>/i)
        ) {
          // Check if it's not a self-closing tag
          const tagMatch = trimmedLine.match(/<(\w+)/);
          if (tagMatch) {
            const tagName = tagMatch[1];
            const hasClosingTag = trimmedLine.includes(`</${tagName}>`);
            if (!hasClosingTag) {
              indent += indentSize;
            }
          }
        }
      });
      
      return formatted.trim();
    };
    
    // Only format if we removed CSS/JS to keep structure clean
    if (extractedCSS || extractedJS) {
      cleanedHTML = formatHTML(cleanedHTML);
    }
    
    return cleanedHTML;
  };
  
  // Determine initial tab based on what's provided
  // Prioritize framework code when available, then HTML for HTML learning content
  const getInitialTab = (): 'html' | 'css' | 'js' | 'react' | 'angular' | 'vue' | 'next' => {
    if (hasReact) return 'react';
    if (hasAngular) return 'angular';
    if (hasVue) return 'vue';
    if (hasNext) return 'next';
    if (html && !hideTabs.includes('html')) return 'html'; // Show HTML first for HTML learning content
    if (hasCSS) return 'css';
    if (hasJS) return 'js';
    return 'html';
  };
  
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js' | 'react' | 'angular' | 'vue' | 'next'>(getInitialTab());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCode, setShowCode] = useState(true); // Show code by default for all content

  // Get playground contexts
  const { openWithContent } = useWebPlayground();
  const { openPlayground: openReactPlayground } = useReactPlayground();
  const openReactPlaygroundWithContent = (jsx: string, css?: string) =>
    openReactPlayground({ jsx, css: css || '' });
  const { openPlayground: openAngularPlayground } = useAngularPlayground();

  // Compile SCSS to CSS if needed
  useEffect(() => {
    const compileStyleCode = async () => {
      if (styleLanguage === 'scss' && extractedCSS) {
        setIsCompiling(true);
        console.log('🎨 [SCSS] Starting compilation...');
        console.log('📄 [SCSS] Input length:', extractedCSS.length, 'chars');
        console.log('📝 [SCSS] Preview:', extractedCSS.substring(0, 150).replace(/\n/g, ' '));
        
        try {
          const result = await compileScss(extractedCSS);
          if (result.error) {
            console.error('❌ [SCSS] Compilation Error:', result.error);
            // Don't use SCSS as fallback - it won't work. Instead show error
            setCompiledCss(`/* SCSS Compilation Error:\n${result.error}\n\nPlease check your SCSS syntax. */`);
          } else if (result.css) {
            console.log('✅ [SCSS] Compilation successful!');
            console.log('📦 [SCSS] Output length:', result.css.length, 'chars');
            console.log('📝 [SCSS] Output preview:', result.css.substring(0, 150).replace(/\n/g, ' '));
            setCompiledCss(result.css);
          } else {
            console.warn('⚠️ [SCSS] Compilation returned empty CSS');
            setCompiledCss('/* SCSS compiled but produced no output */');
          }
        } catch (error) {
          console.error('❌ [SCSS] Compilation exception:', error);
          setCompiledCss(`/* SCSS Compilation Failed: ${error}\n\nPlease refresh the page and try again. */`);
        } finally {
          setIsCompiling(false);
        }
      } else {
        // Regular CSS or no styles
        if (styleLanguage === 'css' && extractedCSS) {
          console.log('📝 [CSS] Using regular CSS, length:', extractedCSS.length);
        }
        setCompiledCss(extractedCSS);
        setIsCompiling(false);
      }
    };

    compileStyleCode();
  }, [extractedCSS, styleLanguage]);

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

  // Auto-resize iframe to fit content
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || previewHeight !== 'auto' || isCompiling) return;

    const resizeIframe = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc?.body) {
          // Get the maximum height to ensure all content is visible
          const bodyHeight = Math.max(
            iframeDoc.body.scrollHeight,
            iframeDoc.body.offsetHeight,
            iframeDoc.documentElement.scrollHeight,
            iframeDoc.documentElement.offsetHeight
          );
          setIframeHeight(bodyHeight + 80); // Add extra padding for safety
        }
      } catch (e) {
        // Cross-origin or access issues, use default
        setIframeHeight(500);
      }
    };

    // Resize after content loads
    iframe.addEventListener('load', resizeIframe);
    
    // Multiple resize attempts to ensure content (including images/video) is fully rendered
    const timer1 = setTimeout(resizeIframe, 100);
    const timer2 = setTimeout(resizeIframe, 300);
    const timer3 = setTimeout(resizeIframe, 500);

    return () => {
      iframe.removeEventListener('load', resizeIframe);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [html, compiledCss, js, previewHeight, isDarkMode, isCompiling]);

  const handleCopy = async () => {
    const codeToCopy = activeTab === 'html' ? getDisplayHTML() : 
                       activeTab === 'css' ? extractedCSS : 
                       activeTab === 'react' ? react :
                       activeTab === 'angular' ? angular :
                       activeTab === 'vue' ? vue :
                       activeTab === 'next' ? next :
                       extractedJS;
    await navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Create the full HTML document for preview
  const getPreviewContent = () => {
    // Debug log for SCSS preview
    if (styleLanguage === 'scss') {
      console.log('🎬 [Preview] Generating preview content');
      console.log('📊 [Preview] compiledCss length:', compiledCss.length);
      console.log('📊 [Preview] extractedCSS length:', extractedCSS.length);
      console.log('🔍 [Preview] Using CSS:', compiledCss.substring(0, 100));
    }
    
    // Add Tailwind CDN if styleLanguage is tailwind
    const tailwindCDN = styleLanguage === 'tailwind' 
      ? '<script src="https://cdn.tailwindcss.com"></script>' 
      : '';
      
    // If HTML already contains complete document structure, inject theme detection and Tailwind
    if (html.trim().toLowerCase().startsWith('<!doctype')) {
      // Inject Tailwind CDN and dark mode detection script into the HTML
      const injectedHTML = html.replace(
        '</head>',
        `${tailwindCDN}
        <script>
          (function() {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (isDark) {
              document.documentElement.classList.add('dark');
            }
          })();
        </script>
        </head>`
      );
      return injectedHTML;
    }
    
    // Otherwise, build complete document from parts
    const bgColor = isDarkMode ? '#0f172a' : '#f8fafc';
    const textColor = isDarkMode ? '#e2e8f0' : '#1e293b';
    
    // For Tailwind or SCSS, don't add default styles (SCSS has its own base styles)
    const defaultBodyStyles = (styleLanguage === 'tailwind' || styleLanguage === 'scss')
      ? '' 
      : `
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
    @media (prefers-color-scheme: dark) {
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
    }
    `;
    
    return `<!DOCTYPE html>
<html lang="en" class="${isDarkMode ? 'dark' : ''}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${tailwindCDN}
  <style>
    ${defaultBodyStyles}
    ${compiledCss}
  </style>
  <script>
    (function() {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
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
    neutral: {
      gradient: 'from-neutral-50 to-gray-50 dark:from-neutral-950/20 dark:to-gray-950/20',
      border: 'border-neutral-200/60 dark:border-neutral-700',
      badge: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-900/30 dark:text-neutral-400',
      icon: 'text-neutral-600 dark:text-neutral-400',
      tab: 'bg-neutral-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    stone: {
      gradient: 'from-stone-50 to-gray-50 dark:from-stone-950/20 dark:to-gray-950/20',
      border: 'border-stone-200/60 dark:border-stone-700',
      badge: 'bg-stone-100 text-stone-700 dark:bg-stone-900/30 dark:text-stone-400',
      icon: 'text-stone-600 dark:text-stone-400',
      tab: 'bg-stone-500 text-white',
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
    orange: {
      gradient: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      border: 'border-orange-200/60 dark:border-orange-700',
      badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      icon: 'text-orange-600 dark:text-orange-400',
      tab: 'bg-orange-500 text-white',
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
    yellow: {
      gradient: 'from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20',
      border: 'border-yellow-200/60 dark:border-yellow-700',
      badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      icon: 'text-yellow-600 dark:text-yellow-400',
      tab: 'bg-yellow-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    lime: {
      gradient: 'from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20',
      border: 'border-lime-200/60 dark:border-lime-700',
      badge: 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400',
      icon: 'text-lime-600 dark:text-lime-400',
      tab: 'bg-lime-500 text-white',
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
    blue: {
      gradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      border: 'border-blue-200/60 dark:border-blue-700',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-400',
      tab: 'bg-blue-500 text-white',
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
    teal: {
      gradient: 'from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20',
      border: 'border-teal-200/60 dark:border-teal-700',
      badge: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      icon: 'text-teal-600 dark:text-teal-400',
      tab: 'bg-teal-500 text-white',
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
    sky: {
      gradient: 'from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20',
      border: 'border-sky-200/60 dark:border-sky-700',
      badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
      icon: 'text-sky-600 dark:text-sky-400',
      tab: 'bg-sky-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    indigo: {
      gradient: 'from-indigo-50 to-slate-50 dark:from-indigo-950/20 dark:to-slate-950/20',
      border: 'border-indigo-200/60 dark:border-indigo-700',
      badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
      icon: 'text-indigo-600 dark:text-indigo-400',
      tab: 'bg-indigo-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
    violet: {
      gradient: 'from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20',
      border: 'border-violet-200/60 dark:border-violet-700',
      badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
      icon: 'text-violet-600 dark:text-violet-400',
      tab: 'bg-violet-500 text-white',
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
    fuchsia: {
      gradient: 'from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20',
      border: 'border-fuchsia-200/60 dark:border-fuchsia-700',
      badge: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400',
      icon: 'text-fuchsia-600 dark:text-fuchsia-400',
      tab: 'bg-fuchsia-500 text-white',
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
    rose: {
      gradient: 'from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20',
      border: 'border-rose-200/60 dark:border-rose-700',
      badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
      icon: 'text-rose-600 dark:text-rose-400',
      tab: 'bg-rose-500 text-white',
      tabInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
    },
  };

  const theme = themeColors[colorTheme] ?? themeColors.orange;
  const currentCode = activeTab === 'html' ? getDisplayHTML() : 
                      activeTab === 'css' ? extractedCSS : 
                      activeTab === 'react' ? react :
                      activeTab === 'angular' ? angular :
                      activeTab === 'vue' ? vue :
                      activeTab === 'next' ? next :
                      extractedJS;

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
                {/* Framework tabs - only show when framework code is provided */}
                {hasReact && (
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'react' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    React
                  </button>
                )}
                {hasAngular && (
                  <button
                    onClick={() => setActiveTab('angular')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'angular' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    Angular
                  </button>
                )}
                {hasVue && (
                  <button
                    onClick={() => setActiveTab('vue')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'vue' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    Vue
                  </button>
                )}
                {hasNext && (
                  <button
                    onClick={() => setActiveTab('next')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'next' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    Next.js
                  </button>
                )}
                
                {/* Only show HTML/CSS/JS tabs when NO framework code is provided */}
                {!hasFramework && html && !hideTabs.includes('html') && (
                  <button
                    onClick={() => setActiveTab('html')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      activeTab === 'html' ? theme.tab : theme.tabInactive
                    }`}
                  >
                    HTML
                  </button>
                )}
                {!hasFramework && hasCSS && (
                  <button
                    onClick={() => setActiveTab('css')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
                      activeTab === 'css' ? theme.tab : theme.tabInactive
                    }`}
                    title={styleLanguage === 'scss' ? 'SCSS (compiles to CSS for preview)' : 'CSS'}
                  >
                    {styleLanguage === 'scss' ? 'SCSS' : 'CSS'}
                    {styleLanguage === 'scss' && (
                      <span className="text-[10px] opacity-75 font-normal">→ CSS</span>
                    )}
                  </button>
                )}
                {!hasFramework && hasJS && (
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
            <div className="flex-1 overflow-auto bg-white dark:bg-[#0d1117]">
                <SyntaxHighlighter
                language={
                  activeTab === 'html' ? 'html' :
                  activeTab === 'css' ? (styleLanguage === 'scss' ? 'scss' : 'css') :
                  activeTab === 'js' ? 'javascript' :
                  activeTab === 'react' || activeTab === 'vue' || activeTab === 'angular' ? 'jsx' :
                  activeTab === 'next' ? 'jsx' :
                  'javascript'
                }
                style={appTheme === 'dark' ? vscDarkPlus : prism}
                showLineNumbers={false}
                customStyle={{
                  margin: 0,
                  padding: '1.25rem',
                  background: appTheme === 'dark' ? '#0d1117' : '#ffffff',
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
                {currentCode}
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
                {styleLanguage === 'scss' && !isCompiling && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 font-medium">
                    SCSS → CSS
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    try {
                      // Wait for SCSS compilation if still compiling
                      if (isCompiling) {
                        console.warn('⏳ Please wait for SCSS compilation to finish...');
                        return;
                      }

                      console.log('🚀 Opening playground with CSS:', (compiledCss || extractedCSS).substring(0, 100));

                      // React Playground
                      if (hasReact && openReactPlaygroundWithContent) {
                        openReactPlaygroundWithContent(react, compiledCss || extractedCSS);
                        return;
                      }

                      // Angular Playground
                      if (hasAngular && openAngularPlayground) {
                        openAngularPlayground({
                          title: title,
                          description: description,
                          files: {
                            'src/app/app.component.ts': angular,
                            'src/styles.css': compiledCss || extractedCSS || '',
                          },
                          openFile: 'src/app/app.component.ts',
                        });
                        return;
                      }

                      // Vue Playground (fallback to web playground for now)
                      if (hasVue && openWithContent) {
                        openWithContent(html || '', compiledCss || extractedCSS || '', extractedJS || '', styleLanguage);
                        return;
                      }

                      // Next.js Playground (fallback to web playground for now)
                      if (hasNext && openWithContent) {
                        openWithContent(html || '', compiledCss || extractedCSS || '', extractedJS || '', styleLanguage);
                        return;
                      }

                      // Default: Web Playground for HTML/CSS/JS
                      const htmlContent = html || '';
                      // Use compiledCss (SCSS compiled to CSS) instead of extractedCSS
                      const cssContent = compiledCss || extractedCSS || '';
                      const jsContent = extractedJS || '';

                      console.log('📦 Web Playground Content:', {
                        htmlLength: htmlContent.length,
                        cssLength: cssContent.length,
                        jsLength: jsContent.length,
                        styleLanguage
                      });

                      if (openWithContent) {
                        openWithContent(htmlContent, cssContent, jsContent, styleLanguage);
                        return;
                      }

                      // Fallback to legacy handlers if provided
                      const openHandler = onOpenPlayground ?? onOpenWebPlayground;
                      if (openHandler) {
                        openHandler(htmlContent, cssContent, jsContent);
                      }
                    } catch (error) {
                      console.error('Error opening playground:', error);
                    }
                  }}
                  disabled={isCompiling}
                  className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all group shadow-sm hover:shadow-md ${
                    isCompiling 
                      ? 'bg-gray-400 cursor-not-allowed opacity-50'
                      : 'bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white'
                  }`}
                  title={isCompiling ? 'Compiling SCSS...' : `Open in ${hasReact ? 'React' : hasAngular ? 'Angular' : hasVue ? 'Vue' : hasNext ? 'Next.js' : 'Web'} Playground`}
                >
                  {isCompiling ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs font-semibold">Compiling...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
                      <span className="text-xs font-semibold">Run</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all flex items-center gap-1.5 ${
                    showCode 
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700' 
                      : `${theme.tab} shadow-sm hover:shadow-md`
                  }`}
                  title={showCode ? "Hide Code" : "Show Code"}
                >
                  {showCode ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      Hide Code
                    </>
                  ) : (
                    <>
                      <Code2 className="w-4 h-4" />
                      Show Code
                    </>
                  )}
                </button>
              </div>
            </div>
            <div 
              className="flex-1 p-4 bg-white dark:bg-slate-950 overflow-auto"
            >
              {mounted && !isCompiling && (styleLanguage !== 'scss' || compiledCss) ? (
                <iframe
                  ref={iframeRef}
                  key={`${isDarkMode ? 'dark' : 'light'}-${(compiledCss || extractedCSS).substring(0, 50).replace(/[^a-zA-Z0-9]/g, '')}`}
                  srcDoc={getPreviewContent()}
                  title="Preview"
                  className="w-full h-full border-0 bg-white dark:bg-slate-950 rounded"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                  <div className="text-center text-slate-400 dark:text-slate-500">
                    {isCompiling ? (
                      <>
                        <div className="w-8 h-8 mx-auto mb-2 border-4 border-slate-300 dark:border-slate-700 border-t-pink-500 rounded-full animate-spin"></div>
                        <p className="text-sm">Compiling SCSS...</p>
                      </>
                    ) : (
                      <>
                        <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Loading preview...</p>
                      </>
                    )}
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
