'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LucideIcon, X, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheatsheetCommand {
  command: string;
  description: string;
  usage?: string;
  example?: string;
}

interface CheatsheetSection {
  title: string;
  commands: CheatsheetCommand[];
}

interface CheatsheetModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  icon: LucideIcon;
  colorTheme:
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
  sections: CheatsheetSection[];
}

// Color palette for section badges
const sectionColors = [
  'bg-emerald-500',
  'bg-blue-500',
  'bg-purple-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-cyan-500',
  'bg-indigo-500',
  'bg-teal-500',
  'bg-orange-500',
  'bg-pink-500',
];

export function CheatsheetModal({
  open,
  onClose,
  title,
  icon: Icon,
  colorTheme,
  sections,
}: CheatsheetModalProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="max-w-full w-screen h-screen p-0 flex flex-col bg-slate-50 dark:bg-slate-950 border-0 rounded-none"
      >
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">#</span>
                  {title}
                </DialogTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {sections.reduce((acc, s) => acc + s.commands.length, 0)} commands • {sections.length} sections
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Content - Card Grid Layout */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {sections.map((section, sectionIndex) => {
              const badgeColor = sectionColors[sectionIndex % sectionColors.length];

              return (
                <div
                  key={sectionIndex}
                  className="break-inside-avoid mb-4"
                >
                  {/* Section Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    {/* Section Title Badge */}
                    <div className="flex justify-center -mt-px">
                      <div className={cn(
                        'px-4 py-1.5 rounded-b-lg text-sm font-semibold text-white shadow-md',
                        badgeColor
                      )}>
                        {section.title}
                      </div>
                    </div>

                    {/* Commands */}
                    <div className="p-4 space-y-4">
                      {section.commands.map((cmd, cmdIndex) => (
                        <div key={cmdIndex} className="space-y-2">
                          {/* Description */}
                          {cmd.description && (
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {cmd.description}
                            </p>
                          )}

                          {/* Code Block */}
                          <div className="relative group">
                            <pre className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-sm font-mono overflow-x-auto">
                              <code className="text-slate-800 dark:text-slate-200">
                                {cmd.example || cmd.command}
                              </code>
                            </pre>

                            {/* Copy Button */}
                            <button
                              onClick={() => copyToClipboard(cmd.command)}
                              className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-200/80 dark:bg-slate-700/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-300 dark:hover:bg-slate-600"
                            >
                              {copiedCommand === cmd.command ? (
                                <Check className="w-3.5 h-3.5 text-green-500" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                              )}
                            </button>
                          </div>

                          {/* Usage note */}
                          {cmd.usage && cmd.usage !== cmd.command && (
                            <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                              {cmd.usage}
                            </p>
                          )}

                          {/* Separator between commands */}
                          {cmdIndex < section.commands.length - 1 && (
                            <div className="border-b border-slate-100 dark:border-slate-800 pt-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
