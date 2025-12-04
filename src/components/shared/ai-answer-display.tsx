'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Code, Lightbulb, AlertTriangle, CheckCircle, Zap, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FrontendCodePreview } from './frontend-code-preview';

interface AIAnswerDisplayProps {
  answer: string;
  language?: 'html' | 'css' | 'js' | string;
  className?: string;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export function AIAnswerDisplay({ answer, language = 'html', className, onOpenWebPlayground }: AIAnswerDisplayProps) {
  // Extract HTML, CSS, and JavaScript code blocks from the answer
  const extractedCode = useMemo(() => {
    const htmlMatch = answer.match(/```html\n([\s\S]*?)```/);
    const cssMatch = answer.match(/```css\n([\s\S]*?)```/);
    const jsMatch = answer.match(/```javascript\n([\s\S]*?)```/);
    
    const html = htmlMatch ? htmlMatch[1].trim() : '';
    const css = cssMatch ? cssMatch[1].trim() : '';
    const js = jsMatch ? jsMatch[1].trim() : '';
    
    const hasCode = html || css || js;
    
    // Remove code blocks from answer for display
    let textContent = answer;
    if (hasCode) {
      textContent = textContent
        .replace(/### HTML:[\s\S]*?```html[\s\S]*?```/, '')
        .replace(/### CSS:[\s\S]*?```css[\s\S]*?```/, '')
        .replace(/### JavaScript.*?:[\s\S]*?```javascript[\s\S]*?```/, '')
        .replace(/## 💻 Live Preview Code\s*/, '');
    }
    
    return { html, css, js, hasCode, textContent };
  }, [answer]);
  
  // Language-specific theme colors
  const languageThemes = {
    // Frontend Languages
    html: {
      gradient: 'from-orange-500 to-red-500',
      bg: 'from-orange-50 to-red-50/30 dark:from-orange-950/20 dark:to-red-950/10',
      headerBg: 'from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-orange-500/5 dark:via-red-500/5 dark:to-pink-500/5',
      iconGradient: 'from-orange-500 to-red-600',
      border: 'border-orange-200/50 dark:border-orange-800/50',
      accentColor: 'text-orange-600 dark:text-orange-400'
    },
    css: {
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/10',
      headerBg: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10 dark:from-blue-500/5 dark:via-cyan-500/5 dark:to-teal-500/5',
      iconGradient: 'from-blue-500 to-cyan-600',
      border: 'border-blue-200/50 dark:border-blue-800/50',
      accentColor: 'text-blue-600 dark:text-blue-400'
    },
    scss: {
      gradient: 'from-pink-500 to-purple-500',
      bg: 'from-pink-50 to-purple-50/30 dark:from-pink-950/20 dark:to-purple-950/10',
      headerBg: 'from-pink-500/10 via-purple-500/10 to-violet-500/10 dark:from-pink-500/5 dark:via-purple-500/5 dark:to-violet-500/5',
      iconGradient: 'from-pink-500 to-purple-600',
      border: 'border-pink-200/50 dark:border-pink-800/50',
      accentColor: 'text-pink-600 dark:text-pink-400'
    },
    javascript: {
      gradient: 'from-yellow-500 to-amber-500',
      bg: 'from-yellow-50 to-amber-50/30 dark:from-yellow-950/20 dark:to-amber-950/10',
      headerBg: 'from-yellow-500/10 via-amber-500/10 to-orange-500/10 dark:from-yellow-500/5 dark:via-amber-500/5 dark:to-orange-500/5',
      iconGradient: 'from-yellow-500 to-amber-600',
      border: 'border-yellow-200/50 dark:border-yellow-800/50',
      accentColor: 'text-yellow-600 dark:text-yellow-400'
    },
    react: {
      gradient: 'from-cyan-500 to-blue-500',
      bg: 'from-cyan-50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10',
      headerBg: 'from-cyan-500/10 via-blue-500/10 to-sky-500/10 dark:from-cyan-500/5 dark:via-blue-500/5 dark:to-sky-500/5',
      iconGradient: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-200/50 dark:border-cyan-800/50',
      accentColor: 'text-cyan-600 dark:text-cyan-400'
    },
    nextjs: {
      gradient: 'from-slate-500 to-zinc-500',
      bg: 'from-slate-50 to-zinc-50/30 dark:from-slate-950/20 dark:to-zinc-950/10',
      headerBg: 'from-slate-500/10 via-zinc-500/10 to-gray-500/10 dark:from-slate-500/5 dark:via-zinc-500/5 dark:to-gray-500/5',
      iconGradient: 'from-slate-500 to-zinc-600',
      border: 'border-slate-200/50 dark:border-slate-700/50',
      accentColor: 'text-slate-600 dark:text-slate-400'
    },
    // Backend Languages
    java: {
      gradient: 'from-red-500 to-orange-600',
      bg: 'from-red-50 to-orange-50/30 dark:from-red-950/20 dark:to-orange-950/10',
      headerBg: 'from-red-500/10 via-orange-500/10 to-amber-500/10 dark:from-red-500/5 dark:via-orange-500/5 dark:to-amber-500/5',
      iconGradient: 'from-red-500 to-orange-600',
      border: 'border-red-200/50 dark:border-red-800/50',
      accentColor: 'text-red-600 dark:text-red-400'
    },
    spring: {
      gradient: 'from-green-500 to-emerald-500',
      bg: 'from-green-50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10',
      headerBg: 'from-green-500/10 via-emerald-500/10 to-teal-500/10 dark:from-green-500/5 dark:via-emerald-500/5 dark:to-teal-500/5',
      iconGradient: 'from-green-500 to-emerald-600',
      border: 'border-green-200/50 dark:border-green-800/50',
      accentColor: 'text-green-600 dark:text-green-400'
    },
    'spring-boot': {
      gradient: 'from-lime-500 to-green-600',
      bg: 'from-lime-50 to-green-50/30 dark:from-lime-950/20 dark:to-green-950/10',
      headerBg: 'from-lime-500/10 via-green-500/10 to-emerald-500/10 dark:from-lime-500/5 dark:via-green-500/5 dark:to-emerald-500/5',
      iconGradient: 'from-lime-500 to-green-600',
      border: 'border-lime-200/50 dark:border-lime-800/50',
      accentColor: 'text-lime-600 dark:text-lime-400'
    },
    // Testing & Other
    playwright: {
      gradient: 'from-emerald-500 to-teal-600',
      bg: 'from-emerald-50 to-teal-50/30 dark:from-emerald-950/20 dark:to-teal-950/10',
      headerBg: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5',
      iconGradient: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-200/50 dark:border-emerald-800/50',
      accentColor: 'text-emerald-600 dark:text-emerald-400'
    },
    rxjs: {
      gradient: 'from-purple-500 to-fuchsia-600',
      bg: 'from-purple-50 to-fuchsia-50/30 dark:from-purple-950/20 dark:to-fuchsia-950/10',
      headerBg: 'from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 dark:from-purple-500/5 dark:via-fuchsia-500/5 dark:to-pink-500/5',
      iconGradient: 'from-purple-500 to-fuchsia-600',
      border: 'border-purple-200/50 dark:border-purple-800/50',
      accentColor: 'text-purple-600 dark:text-purple-400'
    },
    dsa: {
      gradient: 'from-indigo-500 to-violet-600',
      bg: 'from-indigo-50 to-violet-50/30 dark:from-indigo-950/20 dark:to-violet-950/10',
      headerBg: 'from-indigo-500/10 via-violet-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:via-violet-500/5 dark:to-purple-500/5',
      iconGradient: 'from-indigo-500 to-violet-600',
      border: 'border-indigo-200/50 dark:border-indigo-800/50',
      accentColor: 'text-indigo-600 dark:text-indigo-400'
    },
    default: {
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'from-emerald-50 to-teal-50/30 dark:from-emerald-950/20 dark:to-teal-950/10',
      headerBg: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5',
      iconGradient: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-200/50 dark:border-emerald-800/50',
      accentColor: 'text-emerald-600 dark:text-emerald-400'
    }
  };

  const theme = languageThemes[language as keyof typeof languageThemes] || languageThemes.default;

  // Get language badge info
  const languageBadge = {
    html: { name: 'HTML', icon: Code, color: 'bg-orange-500' },
    css: { name: 'CSS', icon: Code, color: 'bg-blue-500' },
    scss: { name: 'SCSS', icon: Code, color: 'bg-pink-500' },
    javascript: { name: 'JavaScript', icon: Code, color: 'bg-yellow-500' },
    react: { name: 'React', icon: Code, color: 'bg-cyan-500' },
    nextjs: { name: 'Next.js', icon: Code, color: 'bg-slate-600' },
    java: { name: 'Java', icon: Code, color: 'bg-red-500' },
    spring: { name: 'Spring', icon: Code, color: 'bg-green-500' },
    'spring-boot': { name: 'Spring Boot', icon: Code, color: 'bg-lime-500' },
    playwright: { name: 'Playwright', icon: Code, color: 'bg-emerald-500' },
    rxjs: { name: 'RxJS', icon: Code, color: 'bg-purple-500' },
    dsa: { name: 'DSA', icon: Code, color: 'bg-indigo-500' },
    default: { name: 'Code', icon: Code, color: 'bg-emerald-500' }
  };

  const badge = languageBadge[language as keyof typeof languageBadge] || languageBadge.default;
  const BadgeIcon = badge.icon;

  return (
    <div className={cn("relative animate-in fade-in-50 slide-in-from-bottom-3 duration-500 w-full", className)}>
      {/* Language Badge - Floating */}
      <div className="absolute -top-3 right-4 md:right-8 z-10">
        <div className={cn(
          "px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border-2 border-white dark:border-slate-800 flex items-center gap-2",
          badge.color,
          "text-white font-bold text-xs uppercase tracking-wide"
        )}>
          <BadgeIcon className="w-3.5 h-3.5" />
          {badge.name}
        </div>
      </div>

      <Card className={cn(
        "relative border-0 shadow-2xl overflow-hidden bg-gradient-to-br w-full",
        theme.bg
      )}>
        {/* Elegant Header with Animated Gradient */}
        <CardHeader className={cn(
          "relative bg-gradient-to-r backdrop-blur-sm border-b w-full",
          theme.headerBg,
          theme.border
        )}>
          <CardTitle className="flex items-center gap-3 w-full">
            {/* Animated AI Icon */}
            <div className="relative">
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br rounded-lg blur opacity-40 animate-pulse",
                theme.iconGradient
              )}></div>
              <div className={cn(
                "relative w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg",
                theme.iconGradient
              )}>
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                AI Assistant Answer
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-normal flex items-center gap-1.5 mt-0.5">
                <Zap className="w-3 h-3" />
                Powered by artificial intelligence
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        {/* Beautiful Content Area with Enhanced Typography */}
        <CardContent className="p-8 sm:p-10 lg:p-12 w-full">
          <div 
            className="prose prose-base sm:prose-lg max-w-none w-full
            text-slate-700 dark:text-slate-200
            
            /* Headings */
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:bg-gradient-to-r prose-h2:from-slate-800 prose-h2:to-slate-600 dark:prose-h2:from-slate-100 dark:prose-h2:to-slate-300 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:mt-8 prose-h2:first:mt-0 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:flex prose-h2:items-center prose-h2:gap-2
            prose-h3:text-xl prose-h3:text-slate-800 dark:prose-h3:text-slate-100 prose-h3:mt-6 prose-h3:mb-3 prose-h3:font-semibold prose-h3:flex prose-h3:items-center prose-h3:gap-2
            prose-h4:text-lg prose-h4:text-slate-700 dark:prose-h4:text-slate-200 prose-h4:mt-4 prose-h4:mb-2 prose-h4:font-semibold
            
            /* Paragraphs and Text */
            prose-p:text-slate-700 dark:prose-p:text-slate-200 prose-p:leading-relaxed prose-p:my-4 prose-p:text-[15px]
            prose-strong:text-slate-900 dark:prose-strong:text-slate-50 prose-strong:font-bold
            prose-em:text-slate-800 dark:prose-em:text-slate-100 prose-em:italic
            
            /* Inline Code */
            prose-code:text-emerald-700 dark:prose-code:text-emerald-300 prose-code:bg-emerald-50 dark:prose-code:bg-emerald-950/40 prose-code:px-2.5 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-emerald-200 dark:prose-code:border-emerald-800 prose-code:before:content-[''] prose-code:after:content-[''] prose-code:font-semibold prose-code:shadow-sm
            
            /* Code Blocks */
            prose-pre:bg-slate-50 dark:prose-pre:bg-slate-950 prose-pre:border-2 prose-pre:border-slate-200 dark:prose-pre:border-slate-800 prose-pre:rounded-xl prose-pre:text-slate-800 dark:prose-pre:text-slate-100 prose-pre:p-6 prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:shadow-xl prose-pre:font-mono prose-pre:text-sm prose-pre:leading-relaxed
            
            /* Links */
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-a:decoration-2 prose-a:transition-all
            
            /* Blockquotes */
            prose-blockquote:border-l-4 prose-blockquote:border-slate-400 dark:prose-blockquote:border-slate-600 prose-blockquote:pl-6 prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-200 prose-blockquote:bg-slate-100 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:font-medium prose-blockquote:shadow-md
            
            /* Lists */
            prose-ul:my-5 prose-ul:text-slate-700 dark:prose-ul:text-slate-200 prose-ul:space-y-3 prose-ul:pl-6
            prose-ol:my-5 prose-ol:text-slate-700 dark:prose-ol:text-slate-200 prose-ol:space-y-3 prose-ol:pl-6
            prose-li:leading-relaxed prose-li:marker:text-slate-600 dark:prose-li:marker:text-slate-300 prose-li:marker:font-bold prose-li:pl-2
            
            /* Tables */
            prose-table:border-collapse prose-table:border-2 prose-table:border-slate-300 dark:prose-table:border-slate-700 prose-table:rounded-xl prose-table:overflow-hidden prose-table:my-6 prose-table:shadow-xl prose-table:w-full
            prose-thead:bg-gradient-to-r prose-thead:from-slate-100 prose-thead:to-slate-200 dark:prose-thead:from-slate-800 dark:prose-thead:to-slate-700
            prose-th:text-slate-900 dark:prose-th:text-slate-100 prose-th:font-bold prose-th:p-4 prose-th:border prose-th:border-slate-300 dark:prose-th:border-slate-700 prose-th:text-left
            prose-td:p-4 prose-td:border prose-td:border-slate-300 dark:prose-td:border-slate-700 prose-td:text-slate-800 dark:prose-td:text-slate-200
            prose-tr:transition-colors hover:prose-tr:bg-slate-50 dark:hover:prose-tr:bg-slate-900/50
            
            /* Horizontal Rules */
            prose-hr:border-2 prose-hr:border-slate-200 dark:prose-hr:border-slate-700 prose-hr:my-8 prose-hr:rounded-full
            
            /* Images */
            prose-img:rounded-xl prose-img:shadow-xl prose-img:border-2 prose-img:border-slate-300 dark:prose-img:border-slate-700 prose-img:my-6" 
            dangerouslySetInnerHTML={{ __html: extractedCode.textContent }} 
          />

          {/* Live Preview - Show when HTML/CSS/JS code is detected */}
          {extractedCode.hasCode && (
            <div className="mt-8 pt-8 border-t-2 border-slate-200 dark:border-slate-800 w-full">
              <FrontendCodePreview
                title="Live Interactive Preview"
                description="Try out the code example below - it's fully interactive!"
                html={extractedCode.html}
                css={extractedCode.css}
                js={extractedCode.js}
                colorTheme={language === 'html' ? 'orange' : language === 'css' ? 'blue' : language === 'javascript' ? 'amber' : 'emerald'}
                previewHeight="auto"
                onOpenPlayground={onOpenWebPlayground}
              />
            </div>
          )}

          {/* Decorative Elements */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 w-full">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">Generated Response</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  <span>Beginner-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Bottom Decorative Gradient */}
        <div className={cn(
          "h-1 w-full bg-gradient-to-r",
          theme.gradient
        )}></div>
      </Card>
    </div>
  );
}
