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
import { LucideIcon, X, Copy, Check, Search, Filter, Code, BookOpen, Terminal, Hash } from 'lucide-react';
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

interface FilterOptions {
  searchQuery: string;
  selectedSections: string[];
  contentType: 'all' | 'commands' | 'examples' | 'usage';
  searchIn: 'all' | 'commands' | 'descriptions' | 'examples' | 'usage';
  hasExample: boolean;
  hasUsage: boolean;
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

// Helper function to highlight text
const highlightText = (text: string, query: string): React.ReactNode => {
  if (!query.trim()) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, index) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 px-0.5 rounded">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

export function CheatsheetModal({
  open,
  onClose,
  title,
  icon: Icon,
  colorTheme,
  sections,
}: CheatsheetModalProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [showTopics, setShowTopics] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Enhanced filter state
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    selectedSections: [],
    contentType: 'all',
    searchIn: 'all',
    hasExample: false,
    hasUsage: false,
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Enhanced filter logic
  const filteredSections = useMemo(() => {
    let filtered = sections;

    // Filter by selected sections
    if (filters.selectedSections.length > 0) {
      filtered = filtered.filter(section => filters.selectedSections.includes(section.title));
    }

    // Filter by content type
    if (filters.contentType !== 'all') {
      filtered = filtered.map(section => ({
        ...section,
        commands: section.commands.filter(cmd => {
          switch (filters.contentType) {
            case 'commands':
              return cmd.command.trim() !== '';
            case 'examples':
              return cmd.example && cmd.example.trim() !== '';
            case 'usage':
              return cmd.usage && cmd.usage.trim() !== '' && cmd.usage !== cmd.command;
            default:
              return true;
          }
        })
      })).filter(section => section.commands.length > 0);
    }

    // Filter by hasExample/hasUsage flags
    if (filters.hasExample || filters.hasUsage) {
      filtered = filtered.map(section => ({
        ...section,
        commands: section.commands.filter(cmd => {
          if (filters.hasExample && !filters.hasUsage) {
            return cmd.example && cmd.example.trim() !== '';
          }
          if (filters.hasUsage && !filters.hasExample) {
            return cmd.usage && cmd.usage.trim() !== '' && cmd.usage !== cmd.command;
          }
          if (filters.hasExample && filters.hasUsage) {
            return (cmd.example && cmd.example.trim() !== '') || 
                   (cmd.usage && cmd.usage.trim() !== '' && cmd.usage !== cmd.command);
          }
          return true;
        })
      })).filter(section => section.commands.length > 0);
    }

    // Filter by search query
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.map(section => ({
        ...section,
        commands: section.commands.filter(cmd => {
          const searchTargets = [];
          
          switch (filters.searchIn) {
            case 'commands':
              searchTargets.push(cmd.command);
              break;
            case 'descriptions':
              searchTargets.push(cmd.description);
              break;
            case 'examples':
              if (cmd.example) searchTargets.push(cmd.example);
              break;
            case 'usage':
              if (cmd.usage) searchTargets.push(cmd.usage);
              break;
            case 'all':
            default:
              searchTargets.push(cmd.command, cmd.description);
              if (cmd.example) searchTargets.push(cmd.example);
              if (cmd.usage) searchTargets.push(cmd.usage);
              break;
          }
          
          return searchTargets.some(target => 
            target && target.toLowerCase().includes(query)
          );
        })
      })).filter(section => section.commands.length > 0);
    }

    return filtered;
  }, [sections, filters]);

  // Handle section filter click
  const handleSectionClick = (sectionTitle: string) => {
    setFilters(prev => ({
      ...prev,
      selectedSections: prev.selectedSections.includes(sectionTitle)
        ? prev.selectedSections.filter(title => title !== sectionTitle)
        : [...prev.selectedSections, sectionTitle]
    }));
  };

  // Update filter functions
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      selectedSections: [],
      contentType: 'all',
      searchIn: 'all',
      hasExample: false,
      hasUsage: false,
    });
  };

  // Check if any filters are active
  const hasActiveFilters = filters.searchQuery.trim() !== '' || 
                          filters.selectedSections.length > 0 || 
                          filters.contentType !== 'all' || 
                          filters.searchIn !== 'all' || 
                          filters.hasExample || 
                          filters.hasUsage;

  // Calculate totals
  const totalCommands = filteredSections.reduce((acc, s) => acc + s.commands.length, 0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="max-w-full w-screen h-screen p-0 flex flex-col bg-slate-50 dark:bg-slate-950 border-0 rounded-none"
      >
        {/* Header */}
        <DialogHeader className="px-8 py-6 border-b flex-shrink-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">#</span>
                    {title}
                  </DialogTitle>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {totalCommands} commands • {filteredSections.length} sections
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:scale-110 shadow-lg"
              >
                <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Search Input and Advanced Filter */}
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-3 items-center justify-center w-full">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Filter commands..."
                    value={filters.searchQuery}
                    onChange={(e) => {
                      updateFilter('searchQuery', e.target.value);
                      // Keep selected sections when searching - they work together
                    }}
                    className="pl-12 pr-12 h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-emerald-500/20 text-base"
                  />
                  {filters.searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateFilter('searchQuery', '')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <X className="h-4 w-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" />
                    </Button>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTopics(!showTopics)}
                  className="h-12 px-6 text-sm border-slate-200 dark:border-slate-700 whitespace-nowrap"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {showTopics ? 'Hide Filters' : 'Advanced Filters'}
                  <span className="ml-2 text-xs opacity-75">
                    ({filters.selectedSections.length > 0 ? filters.selectedSections.length : sections.length})
                  </span>
                </Button>
              </div>

              {/* Topics/Sections Filter - Hidden by default, shown when advanced filter is clicked */}
              {showTopics && (
                <div className="flex flex-wrap items-center justify-center gap-3 animate-in slide-in-from-top-2 duration-200">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-2">
                    Topics:
                  </span>
                  {(filters.selectedSections.length > 0 || filters.searchQuery) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 px-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    >
                      Clear filters {filters.selectedSections.length > 0 && `(${filters.selectedSections.length})`}
                    </Button>
                  )}
                  <div className="flex flex-wrap gap-3">
                    {sections.map((section, index) => {
                      const badgeColor = sectionColors[index % sectionColors.length];
                      const isSelected = filters.selectedSections.includes(section.title);

                      return (
                        <button
                          key={section.title}
                          onClick={() => handleSectionClick(section.title)}
                          className={cn(
                            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                            'border border-slate-200 dark:border-slate-700',
                            isSelected
                              ? `${badgeColor} text-white border-transparent shadow-md scale-105`
                              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                          )}
                          title={`${section.commands.length} commands - Click to ${isSelected ? 'deselect' : 'select'}`}
                        >
                          {section.title}
                          <span className="ml-2 text-xs opacity-75">
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
        <div className="flex-1 overflow-y-auto p-8">
          <div className="columns-1 sm:columns-1 md:columns-1 lg:columns-2 xl:columns-2 2xl:columns-3 gap-6 space-y-6">
            {filteredSections.map((section, sectionIndex) => {
              const badgeColor = sectionColors[sectionIndex % sectionColors.length];

              return (
                <div
                  key={sectionIndex}
                  className="break-inside-avoid mb-6"
                >
                  {/* Section Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
                    {/* Section Title Badge */}
                    <div className="flex justify-center -mt-px">
                      <div className={cn(
                        'px-6 py-3 rounded-b-xl text-base font-bold text-white shadow-lg',
                        badgeColor
                      )}>
                        {section.title}
                      </div>
                    </div>

                    {/* Commands */}
                    <div className="p-6 space-y-6">
                      {section.commands.map((cmd, cmdIndex) => (
                        <div key={cmdIndex} className="space-y-4">
                          {/* Command Title - Enhanced with better font weight */}
                          <div className="text-center">
                            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 leading-tight">
                              {highlightText(cmd.command, filters.searchQuery)}
                            </h4>
                            
                            {/* Description */}
                            {cmd.description && (
                              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                {highlightText(cmd.description, filters.searchQuery)}
                              </p>
                            )}
                          </div>

                          {/* Code Block */}
                          <div className="relative group">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                              <pre className="p-4 text-sm font-mono overflow-x-auto">
                                <code className="text-gray-800 dark:text-gray-200">
                                  {highlightText(cmd.example || cmd.command, filters.searchQuery)}
                                </code>
                              </pre>
                            </div>

                            {/* Copy Button */}
                            <button
                              onClick={() => copyToClipboard(cmd.command)}
                              className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-white dark:hover:bg-gray-600 shadow-sm"
                            >
                              {copiedCommand === cmd.command ? (
                                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              )}
                            </button>
                          </div>

                          {/* Usage note */}
                          {cmd.usage && cmd.usage !== cmd.command && (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800/30 shadow-sm">
                              <p className="text-sm text-blue-800 dark:text-blue-200 font-mono p-3">
                                {highlightText(cmd.usage, filters.searchQuery)}
                              </p>
                            </div>
                          )}

                          {/* Separator between commands */}
                          {cmdIndex < section.commands.length - 1 && (
                            <div className="border-b border-slate-100 dark:border-slate-800 pt-4" />
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
                Try adjusting your search for "{filters.searchQuery}"
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
