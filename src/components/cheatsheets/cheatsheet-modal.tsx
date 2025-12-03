'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheatsheetSnippet } from './cheatsheet-snippet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LucideIcon, X } from 'lucide-react';
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

export function CheatsheetModal({
  open,
  onClose,
  title,
  icon: Icon,
  colorTheme,
  sections,
}: CheatsheetModalProps) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Reset filter when modal opens
  useEffect(() => {
    if (open) {
      setSelectedSection(null);
    }
  }, [open]);

  // Filter sections based on selection
  const displaySections = selectedSection
    ? sections.filter(s => s.title === selectedSection)
    : sections;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        showCloseButton={false}
        className="max-w-full w-screen h-screen p-0 flex flex-col bg-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-0 rounded-none"
      >
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-slate-900 dark:text-white">
                  {title}
                </DialogTitle>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {sections.reduce((acc, s) => acc + s.commands.length, 0)} commands • Quick reference
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Section Filter Tabs */}
        <div className="px-6 pt-3 pb-3 border-b border-slate-200/50 dark:border-slate-800/50 flex-shrink-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              size="sm"
              variant={selectedSection === null ? "default" : "outline"}
              onClick={() => setSelectedSection(null)}
              className={cn(
                "flex-shrink-0 transition-all duration-200 rounded-full",
                selectedSection === null 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md" 
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-300 dark:border-slate-700"
              )}
            >
              All Sections
            </Button>
            {sections.map((section) => (
              <Button
                key={section.title}
                size="sm"
                variant={selectedSection === section.title ? "default" : "outline"}
                onClick={() => setSelectedSection(section.title)}
                className={cn(
                  "flex-shrink-0 transition-all duration-200 rounded-full",
                  selectedSection === section.title
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-300 dark:border-slate-700"
                )}
              >
                {section.title}
                <span className="ml-1.5 text-xs opacity-70">
                  ({section.commands.length})
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Content with 3-column layout */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-6 space-y-8 w-full">
            {displaySections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <div className="flex items-center gap-3 sticky top-0 -mx-6 px-6 py-3 -mt-3 mb-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl z-10 border-b border-slate-200/50 dark:border-slate-800/50">
                  <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h3>
                  <span className="ml-auto text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {section.commands.length} items
                  </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.commands.map((cmd, cmdIndex) => (
                    <CheatsheetSnippet
                      key={cmdIndex}
                      command={cmd.command}
                      description={cmd.description}
                      usage={cmd.usage}
                      example={cmd.example}
                      colorTheme={colorTheme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
