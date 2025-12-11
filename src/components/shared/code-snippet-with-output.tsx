'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Terminal, Copy, Check, FileCode, Play, Sparkles } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const themeColors = {
  blue: {
    accent: 'text-blue-600 dark:text-blue-400',
  },
  purple: {
    accent: 'text-purple-600 dark:text-purple-400',
  },
  emerald: {
    accent: 'text-emerald-600 dark:text-emerald-400',
  },
  amber: {
    accent: 'text-amber-600 dark:text-amber-400',
  },
  red: {
    accent: 'text-red-600 dark:text-red-400',
  },
  green: {
    accent: 'text-green-600 dark:text-green-400',
  },
  orange: {
    accent: 'text-orange-600 dark:text-orange-400',
  },
  pink: {
    accent: 'text-pink-600 dark:text-pink-400',
  },
} as const;

type ThemeColor = keyof typeof themeColors;

interface CodeSnippetWithOutputProps {
  title: string;
  description?: string;
  code: string;
  output?: string[];
  language?: 'javascript' | 'html' | 'css' | 'scss' | 'typescript' | 'bash' | 'json' | 'python' | 'java';
  colorTheme?: ThemeColor;
  showLineNumbers?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export const CodeSnippetWithOutput: React.FC<CodeSnippetWithOutputProps> = ({
  title,
  description,
  code,
  output = [],
  language = 'javascript',
  colorTheme = 'blue',
  showLineNumbers = false,
  icon: Icon = Code2,
}) => {
  const [copied, setCopied] = useState(false);
  const { theme: appTheme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const theme = themeColors[colorTheme] ?? themeColors.blue;
  const hasOutput = output.length > 0;
  const isDark = appTheme === 'dark';
  const titleBarClass = cn(
    'px-4 py-2.5 border-b',
    isDark
      ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700'
      : 'bg-gradient-to-r from-slate-50/90 to-slate-100/80 border-slate-200'
  );

  // Determine output type based on language
  const isCssLike = language === 'css' || language === 'scss';
  const isCodeExecution = language === 'javascript' || language === 'typescript' || language === 'java' || language === 'python';
  
  // Get output label
  const getOutputLabel = () => {
    if (isCssLike) return 'Compiled CSS';
    if (language === 'bash') return 'Terminal Output';
    return 'Console Output';
  };

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      {/* VS Code-inspired Title Bar */}
      <div className={titleBarClass}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Window Control Dots (macOS style) */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70 dark:bg-red-500/90"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 dark:bg-yellow-500/90"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70 dark:bg-green-500/90"></div>
            </div>
            
            <div className="ml-3 flex items-center gap-2">
              <Sparkles className={`w-4 h-4 ${theme.accent}`} />
              <span className="text-sm font-semibold text-slate-900 dark:text-gray-100">{title}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
              {language}
            </Badge>
          </div>
        </div>
        
        {description && (
          <p className="text-[11px] text-muted-foreground mt-1.5 ml-11">{description}</p>
        )}
      </div>

      {/* Content Area - Side by Side */}
      <div className={`bg-slate-50 dark:bg-slate-950 ${hasOutput ? 'grid md:grid-cols-2' : ''}`}>
        {/* Code Section */}
        <div className={`relative ${hasOutput ? 'border-r border-slate-200 dark:border-slate-700' : ''}`}>
          {/* Copy Button Inside Code */}
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            )}
          </button>
          <SyntaxHighlighter
            language={language}
            style={isDark ? oneDark : prism}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: isDark ? '#282c34' : '#f4f5f7',
              fontSize: '13.5px',
              lineHeight: '1.8',
              borderRadius: 0,
              fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
              fontWeight: '500',
            }}
            showLineNumbers={showLineNumbers}
            wrapLines={true}
            wrapLongLines={true}
            codeTagProps={{
              style: {
                fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
                fontSize: '13.5px',
                fontWeight: '500',
              }
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>

        {/* Output Section */}
        {hasOutput && (
          <div className="relative">
            {/* Output Header */}
            <div className={`px-4 py-2 border-b flex items-center gap-2 ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'
            }`}>
              <Terminal className={`w-3.5 h-3.5 ${theme.accent}`} />
              <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {getOutputLabel()}
              </span>
            </div>
            
            <div className="p-6 md:p-8">
              {isCssLike ? (
                // CSS/SCSS Output - Show as syntax-highlighted code
                <SyntaxHighlighter
                  language="css"
                  style={isDark ? oneDark : prism}
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem',
                    background: isDark ? '#282c34' : '#ffffff',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    borderRadius: '8px',
                    border: isDark ? '1px solid #374151' : '1px solid #e2e8f0',
                  }}
                  showLineNumbers={false}
                  codeTagProps={{
                    style: {
                      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                    }
                  }}
                >
                  {output.join('\n')}
                </SyntaxHighlighter>
              ) : (
                // JavaScript/Java/Other - Show as console output
                <div className={`rounded-lg p-5 font-mono text-[14px] border ${
                  isDark
                    ? 'bg-[#282c34] border-slate-700/50'
                    : 'bg-white border-slate-200/70 shadow-inner'
                }`}>
                  {output.map((line, index) => {
                    // Special formatting for comments
                    if (line.startsWith('//')) {
                      return (
                        <div key={index} className="py-0.5 leading-relaxed">
                          <span className={`${isDark ? 'text-slate-400 italic' : 'text-slate-500 italic'}`} style={{
                            fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, "Courier New", monospace',
                          }}>
                            {line}
                          </span>
                        </div>
                      );
                    }
                    
                    // Empty lines
                    if (line.trim() === '') {
                      return <div key={index} className="py-0.5">&nbsp;</div>;
                    }
                    
                    // Regular output with prompt
                    return (
                      <div key={index} className="flex items-start gap-3 py-0.5 leading-relaxed">
                        <span className={`select-none font-bold flex-shrink-0 ${
                          isDark ? 'text-emerald-400' : 'text-emerald-600'
                        }`}>{'❯'}</span>
                        <span className={`break-all overflow-wrap-anywhere ${
                          line.startsWith('✓') || line.startsWith('✅') ? (isDark ? 'text-emerald-300 font-semibold' : 'text-emerald-500 font-semibold') :
                          line.startsWith('✗') || line.startsWith('❌') ? (isDark ? 'text-red-300 font-semibold' : 'text-red-500 font-semibold') :
                          line.startsWith('>') ? (isDark ? 'text-blue-300 font-medium' : 'text-blue-600 font-medium') :
                          (isDark ? 'text-slate-200 font-medium' : 'text-slate-700 font-medium')
                        }`} style={{
                          fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, "Courier New", monospace',
                          wordBreak: 'break-all',
                          overflowWrap: 'anywhere',
                        }}>
                          {line}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
