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
 * - GitHub Light Default & Dark theme styling
 * - Live output preview
 * - Copy to clipboard functionality
 * - Multiple language support
 * - Responsive design with authentic GitHub colors
 * - SF Mono font stack (GitHub's official monospace font)
 * 
 * Color Schemes:
 * Light: #ffffff bg, #24292f text, #f6f8fa header
 * Dark: #0d1117 bg, #e6edf3 text, #161b22 header
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
        {/* Code Section - GitHub Styled */}
        <div className="bg-[#ffffff] dark:bg-[#0d1117] rounded-lg border border-[#d0d7de] dark:border-[#30363d] overflow-hidden relative">
          {/* Header with Code label - GitHub Style */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22]">
            <div className="flex items-center gap-2">
              <Code2 className={`w-4 h-4 ${theme.icon}`} />
              <span className="text-xs font-bold uppercase tracking-wide text-[#24292f] dark:text-[#e6edf3]">Code</span>
            </div>
            
            {/* Copy Icon - In Header */}
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-[#eaeef2] dark:hover:bg-[#21262d] transition-colors"
              title={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#1a7f37] dark:text-[#3fb950]" />
              ) : (
                <Copy className="w-4 h-4 text-[#57606a] dark:text-[#8b949e]" />
              )}
            </button>
          </div>
          
          {/* Code Display - GitHub Font & Colors */}
          <pre className="p-5 overflow-x-auto" style={{ 
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
            fontFeatureSettings: '"liga" 0, "calt" 0'
          }}>
            <code className="text-[13px] leading-[1.45] text-[#24292f] dark:text-[#e6edf3] antialiased" style={{ 
              fontFamily: 'inherit',
              tabSize: 4
            }}>
              {code}
            </code>
          </pre>
        </div>

        {/* Output Section - GitHub Styled */}
        {output.length > 0 && (
          <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#ffffff] dark:bg-[#0d1117] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22]">
              <Terminal className={`w-4 h-4 ${theme.icon}`} />
              <span className="text-xs font-bold uppercase tracking-wide text-[#24292f] dark:text-[#e6edf3]">Output</span>
              <Badge variant="secondary" className="ml-auto text-[10px]">
                {output.length} {output.length === 1 ? 'line' : 'lines'}
              </Badge>
            </div>
            <div className="p-5">
              <pre className="text-[13px] text-[#24292f] dark:text-[#e6edf3] whitespace-pre-wrap leading-[1.45] antialiased" style={{ 
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                fontFeatureSettings: '"liga" 0, "calt" 0',
                tabSize: 4
              }}>
                {output.map((line, index) => (
                  <div key={index} className="mb-2 last:mb-0 pl-3 border-l-2 border-[#d0d7de] dark:border-[#30363d]">
                    {line.startsWith('//') ? (
                      <span className="text-[#57606a] dark:text-[#8b949e] italic">{line}</span>
                    ) : line.startsWith('✓') || line.startsWith('✅') ? (
                      <span className="text-[#1a7f37] dark:text-[#3fb950] font-semibold">{line}</span>
                    ) : line.startsWith('✗') || line.startsWith('❌') ? (
                      <span className="text-[#cf222e] dark:text-[#ff7b72] font-semibold">{line}</span>
                    ) : line.startsWith('>') ? (
                      <span className="text-[#0969da] dark:text-[#58a6ff] font-medium">{line}</span>
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
