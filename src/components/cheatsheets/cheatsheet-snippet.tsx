'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheatsheetSnippetProps {
  command: string;
  description: string;
  usage?: string;
  example?: string;
  colorTheme?:
    | 'blue'
    | 'emerald'
    | 'amber'
    | 'rose'
    | 'purple'
    | 'cyan'
    | 'red'
    | 'indigo'
    | 'teal'
    | 'slate'
    | 'orange'
    | 'green';
}

export function CheatsheetSnippet({
  command,
  description,
  usage,
  example,
  colorTheme = 'blue',
}: CheatsheetSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-0 border-0 bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      {/* Command Header with gradient accent */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="p-3 border-b border-slate-100 dark:border-slate-700/50 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/80">
          <div className="flex items-start justify-between gap-2">
            <code className="text-sm font-mono font-bold text-slate-900 dark:text-white break-all">
              {command}
            </code>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 flex-shrink-0 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-md transition-colors"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-3">
        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Usage */}
        {usage && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent"></div>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Usage
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent"></div>
            </div>
            <pre className="text-xs bg-slate-900 dark:bg-slate-950 text-emerald-400 dark:text-emerald-300 p-2.5 rounded-md overflow-x-auto font-mono border border-slate-800 dark:border-slate-900">
              {usage}
            </pre>
          </div>
        )}

        {/* Example */}
        {example && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent"></div>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Example
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent"></div>
            </div>
            <pre className="text-xs bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-900/50 text-slate-700 dark:text-slate-300 p-2.5 rounded-md overflow-x-auto font-mono border border-slate-200 dark:border-slate-800">
              {example}
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
