'use client';

import { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LucideIcon, X, Copy, Check, Search, Filter } from 'lucide-react';
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
  | 'green'
  | 'pink';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [showTopics, setShowTopics] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Filter logic
  const filteredSections = useMemo(() => {
    let filtered = sections;

    // Filter by selected sections (multi-select)
    if (selectedSections.length > 0) {
      filtered = filtered.filter(section => selectedSections.includes(section.title));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.map(section => ({
        ...section,
        commands: section.commands.filter(cmd =>
          cmd.command.toLowerCase().includes(query) ||
          cmd.description.toLowerCase().includes(query) ||
          (cmd.usage && cmd.usage.toLowerCase().includes(query)) ||
          (cmd.example && cmd.example.toLowerCase().includes(query))
        )
      })).filter(section => section.commands.length > 0);
    }

    return filtered;
  }, [sections, searchQuery, selectedSections]);

  // Handle section filter click (multi-select)
  const handleSectionClick = (sectionTitle: string) => {
    setSelectedSections(prev => {
      if (prev.includes(sectionTitle)) {
        // Remove if already selected
        return prev.filter(title => title !== sectionTitle);
      } else {
        // Add if not selected
        return [...prev, sectionTitle];
      }
    });
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedSections([]);
    setSearchQuery('');
  };

  // Calculate totals
  const totalCommands = filteredSections.reduce((acc, s) => acc + s.commands.length, 0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="max-w-full w-screen h-screen p-0 flex flex-col bg-slate-50 dark:bg-slate-950 border-0 rounded-none"
      >
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-4">
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
                    {totalCommands} commands • {filteredSections.length} sections
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:scale-110 shadow-lg"
              >
                <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Search Input and Advanced Filter */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Filter commands..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      // Keep selected sections when searching - they work together
                    }}
                    className="pl-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-emerald-500/20"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTopics(!showTopics)}
                  className="h-10 px-4 text-xs border-slate-200 dark:border-slate-700 whitespace-nowrap"
                >
                  <Filter className="w-3.5 h-3.5 mr-1.5" />
                  {showTopics ? 'Hide Filters' : 'Advanced Filters'}
                  <span className="ml-1.5 text-[10px] opacity-75">
                    ({selectedSections.length > 0 ? selectedSections.length : sections.length})
                  </span>
                </Button>
              </div>

              {/* Topics/Sections Filter - Hidden by default, shown when advanced filter is clicked */}
              {showTopics && (
                <div className="flex flex-wrap items-center gap-2 animate-in slide-in-from-top-2 duration-200">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">
                    Topics:
                  </span>
                  {(selectedSections.length > 0 || searchQuery) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-7 px-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    >
                      Clear filters {selectedSections.length > 0 && `(${selectedSections.length})`}
                    </Button>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {sections.map((section, index) => {
                      const badgeColor = sectionColors[index % sectionColors.length];
                      const isSelected = selectedSections.includes(section.title);

                      return (
                        <button
                          key={section.title}
                          onClick={() => handleSectionClick(section.title)}
                          className={cn(
                            'px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
                            'border border-slate-200 dark:border-slate-700',
                            isSelected
                              ? `${badgeColor} text-white border-transparent shadow-md scale-105`
                              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                          )}
                          title={`${section.commands.length} commands - Click to ${isSelected ? 'deselect' : 'select'}`}
                        >
                          {section.title}
                          <span className="ml-1.5 text-[10px] opacity-75">
                            ({section.commands.length})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        {/* Content - Card Grid Layout */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-3 2xl:columns-4 gap-4 space-y-4">
            {filteredSections.map((section, sectionIndex) => {
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

          {/* Empty State */}
          {filteredSections.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">No commands found</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Try adjusting your search for "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
