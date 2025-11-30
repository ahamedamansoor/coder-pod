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
  colorTheme?: 'blue' | 'emerald' | 'amber' | 'rose' | 'purple' | 'cyan' | 'red' | 'indigo' | 'teal' | 'slate' | 'orange';
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

  const themeColors = {
    blue: 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    emerald: 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800',
    amber: 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800',
    rose: 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800',
    purple: 'bg-purple-50/50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800',
    cyan: 'bg-cyan-50/50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800',
    red: 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800',
    indigo: 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800',
    teal: 'bg-teal-50/50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800',
    slate: 'bg-slate-50/50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800',
    orange: 'bg-orange-50/50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800',
  };

  return (
    <Card
      className={cn(
        'p-3 border transition-all duration-200 hover:shadow-sm',
        themeColors[colorTheme]
      )}
    >
      <div className="space-y-2.5">
        {/* Command Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <code className="text-sm font-mono font-semibold text-slate-900 dark:text-white">
              {command}
            </code>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 hover:bg-slate-200 dark:hover:bg-slate-800"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3 w-3 text-emerald-600" />
            ) : (
              <Copy className="h-3 w-3 text-slate-500 dark:text-slate-400" />
            )}
          </Button>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-700 dark:text-slate-300">{description}</p>

        {/* Usage */}
        {usage && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Usage:</p>
            <pre className="text-xs bg-slate-900 dark:bg-slate-950 text-emerald-400 p-2.5 rounded overflow-x-auto font-mono">
              {usage}
            </pre>
          </div>
        )}

        {/* Example */}
        {example && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Example:</p>
            <pre className="text-xs bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 p-2.5 rounded overflow-x-auto font-mono border border-slate-200 dark:border-slate-800">
              {example}
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
