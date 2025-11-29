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
  colorTheme: 'blue' | 'emerald' | 'amber' | 'rose' | 'purple' | 'cyan';
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
        className="max-w-full w-screen h-screen p-0 flex flex-col bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0 rounded-none"
      >
        {/* Header */}
        <DialogHeader className={cn(
          "px-6 py-4 border-b flex-shrink-0 relative",
          "bg-gradient-to-r from-blue-50/80 via-purple-50/50 to-cyan-50/80",
          "dark:from-blue-950/50 dark:via-purple-950/30 dark:to-cyan-950/50",
          "border-slate-200/50 dark:border-slate-800/50"
        )}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm shadow-sm">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {title}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {sections.reduce((acc, s) => acc + s.commands.length, 0)} commands
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className={cn(
                  "h-9 w-9 rounded-full transition-all duration-200",
                  "hover:bg-red-100 dark:hover:bg-red-900/30",
                  "hover:text-red-600 dark:hover:text-red-400",
                  "hover:scale-110"
                )}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Section Filter Tabs */}
        <div className="px-6 pt-4 pb-3 border-b border-slate-200/50 dark:border-slate-800/50 flex-shrink-0 bg-white/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              size="sm"
              variant={selectedSection === null ? "default" : "outline"}
              onClick={() => setSelectedSection(null)}
              className={cn(
                "flex-shrink-0 transition-all duration-200",
                selectedSection === null 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  "flex-shrink-0 transition-all duration-200",
                  selectedSection === section.title
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
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

        {/* Content with 3-column layout - Left aligned */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50/50 via-transparent to-slate-50/50 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/50">
          <div className="px-6 py-6 space-y-8 w-full">
            {displaySections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white border-b pb-2 border-slate-200 dark:border-slate-800 sticky top-0 -mx-6 px-6 py-3 -mt-3 mb-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-10 shadow-sm">
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
