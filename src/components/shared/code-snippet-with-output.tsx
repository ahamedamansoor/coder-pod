'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Play, Terminal, Copy, Check, ChevronRight } from 'lucide-react';

/**
 * CodeSnippetWithOutput - A beautiful, reusable component to display code and its output
 * 
 * Features:
 * - Syntax-highlighted code display
 * - Live output preview
 * - Copy to clipboard functionality
 * - Multiple language support
 * - Responsive design with dark mode
 */

interface CodeSnippetWithOutputProps {
  title: string;
  description?: string;
  code: string;
  output?: string[];
  language?: 'javascript' | 'html' | 'css' | 'typescript';
  colorTheme?: 'blue' | 'purple' | 'emerald' | 'amber';
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Theme colors based on colorTheme prop
  const themeColors = {
    blue: {
      gradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      border: 'border-blue-200/60 dark:border-blue-700',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-400',
      outputBg: 'bg-blue-50 dark:bg-blue-950/30',
      outputBorder: 'border-blue-200 dark:border-blue-800',
    },
    purple: {
      gradient: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      border: 'border-purple-200/60 dark:border-purple-700',
      badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      icon: 'text-purple-600 dark:text-purple-400',
      outputBg: 'bg-purple-50 dark:bg-purple-950/30',
      outputBorder: 'border-purple-200 dark:border-purple-800',
    },
    emerald: {
      gradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20',
      border: 'border-emerald-200/60 dark:border-emerald-700',
      badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      icon: 'text-emerald-600 dark:text-emerald-400',
      outputBg: 'bg-emerald-50 dark:bg-emerald-950/30',
      outputBorder: 'border-emerald-200 dark:border-emerald-800',
    },
    amber: {
      gradient: 'from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20',
      border: 'border-amber-200/60 dark:border-amber-700',
      badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      icon: 'text-amber-600 dark:text-amber-400',
      outputBg: 'bg-amber-50 dark:bg-amber-950/30',
      outputBorder: 'border-amber-200 dark:border-amber-800',
    },
  };

  const theme = themeColors[colorTheme];
  const codeLines = code.split('\n');

  return (
    <Card className="overflow-hidden">
      {/* Clean Header */}
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
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              )}
            </div>
          </div>
          <Badge className={`${theme.badge} px-3 py-1`}>
            {language.toUpperCase()}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Code Section */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden relative">
          {/* Header with Code label */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <Code2 className={`w-4 h-4 ${theme.icon}`} />
              <span className="text-xs font-bold uppercase tracking-wide">Code</span>
            </div>
            
            {/* Copy Icon - In Header */}
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              )}
            </button>
          </div>
          
          {/* Code Display - Beautiful Font */}
          <pre className="p-5 overflow-x-auto" style={{ 
            fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
            fontFeatureSettings: '"liga" 1, "calt" 1'
          }}>
            <code className="text-[13px] leading-relaxed text-slate-800 dark:text-slate-100 antialiased" style={{ 
              fontFamily: 'inherit'
            }}>
              {code}
            </code>
          </pre>
        </div>

        {/* Output Section - Below Code */}
        {output.length > 0 && (
          <div className={`rounded-lg border ${theme.outputBorder} ${theme.outputBg} overflow-hidden`}>
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <Terminal className={`w-4 h-4 ${theme.icon}`} />
              <span className="text-xs font-bold uppercase tracking-wide">Output</span>
              <Badge variant="secondary" className="ml-auto text-[10px]">
                {output.length} {output.length === 1 ? 'line' : 'lines'}
              </Badge>
            </div>
            <div className="p-5">
              <pre className="text-[13px] text-slate-800 dark:text-slate-100 whitespace-pre-wrap leading-relaxed antialiased" style={{ 
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                fontFeatureSettings: '"liga" 1, "calt" 1'
              }}>
                {output.map((line, index) => (
                  <div key={index} className="mb-2 last:mb-0 pl-3 border-l-2 border-slate-300 dark:border-slate-700">
                    {line.startsWith('//') ? (
                      <span className="text-slate-500 dark:text-slate-500 italic">{line}</span>
                    ) : line.startsWith('✓') || line.startsWith('✅') ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{line}</span>
                    ) : line.startsWith('✗') || line.startsWith('❌') ? (
                      <span className="text-red-600 dark:text-red-400 font-semibold">{line}</span>
                    ) : line.startsWith('>') ? (
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{line}</span>
                    ) : (
                      <span className="font-medium">{line}</span>
                    )}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
