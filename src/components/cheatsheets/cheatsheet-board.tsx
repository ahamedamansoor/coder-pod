'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Copy, Check, ChevronRight, Terminal, Layers, ArrowRight, BookOpen, X, Globe, Code, Database, Cloud, Wrench, Monitor, Cpu, Grid3x3, List } from 'lucide-react';
import { CheatsheetModal } from './cheatsheet-modal';
import { cn } from '@/lib/utils';
import { cheatsheetCategories, allCheatsheets } from '@/data/cheatsheets';

type MatchingCommand = {
  sheetName: string;
  sheetIcon: any;
  sheetColorTheme: string;
  sectionTitle: string;
  command: {
    command?: string;
    description?: string;
    usage?: string;
    example?: string;
  };
};

type CheatsheetCommand = {
  command?: string;
  description?: string;
  usage?: string;
  example?: string;
};

type CheatsheetSection = {
  title: string;
  commands: CheatsheetCommand[];
};

type Cheatsheet = {
  id: string;
  name: string;
  description: string;
  icon: any;
  color?: string;
  colorTheme?: string;
  category: string;
  tags: string[];
  sections: CheatsheetSection[];
};

// Type guard to check if an object is a valid command
const isValidCommand = (obj: any): obj is { command: string; description: string; usage: string; example?: string } => {
  return obj && 
         obj.command !== undefined && 
         obj.description !== undefined && 
         obj.usage !== undefined &&
         (typeof obj.command === 'string' || typeof obj.command === 'number') && 
         (typeof obj.description === 'string' || typeof obj.description === 'number') && 
         (typeof obj.usage === 'string' || typeof obj.usage === 'number');
};

// Check if a command is technical/useful (not just descriptive)
const isTechnicalCommand = (command: { command: string; description: string; usage: string }): boolean => {
  const commandText = command.command.toLowerCase();
  const usageText = command.usage.toLowerCase();
  
  // Filter out non-technical, descriptive content
  const nonTechnicalPatterns = [
    'what is', 'getting started', 'understanding', 'basics', 'introduction',
    'installing', 'setup', 'overview', 'learn', 'basic', 'fundamentals'
  ];
  
  // Check if command or usage contains non-technical patterns
  const isNonTechnical = nonTechnicalPatterns.some(pattern => 
    commandText.includes(pattern) || 
    usageText.includes(pattern) ||
    command.description.toLowerCase().includes(pattern)
  );
  
  // Check if it looks like an actual technical command
  const isTechnical = (
    // Contains symbols or operators
    /[=+\-*>()[\]{}]/.test(commandText) ||
    // Contains technical keywords
    /graph|sequence|class|state|gantt|pie|flowchart|diagram|chart|er|node|edge|arrow|style|theme|subgraph|participant|classdef|style|link|click|activate|deactivate|loop|alt|opt|par|state|transition|entity|relationship|cardinality|milestone|task|dependency|quadrant|axis|data/.test(commandText) ||
    // Usage contains technical syntax
    /[=+\-*>()[\]{}]/.test(usageText) ||
    /```|mermaid|graph|sequence|class|state|gantt|pie|er/.test(usageText) ||
    // Command is short and technical looking (not a descriptive phrase)
    (commandText.length < 30 && !/\s/.test(commandText)) ||
    // Contains specific technical patterns
    /^graph\s|^sequence|^class|^state|^gantt|^pie|^er|^\w+->\w+|^\w+\[\w+\]|\w+\.\w+/.test(commandText)
  );
  
  return !isNonTechnical && isTechnical;
};

export default function CheatsheetBoard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSheet, setSelectedSheet] = useState<typeof allCheatsheets[0] | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grouped');

  // Enhanced filter that searches deeply within commands
  const searchInSheet = (sheet: typeof allCheatsheets[0], query: string): boolean => {
    const lowerQuery = query.toLowerCase();

    if (
      sheet.name.toLowerCase().includes(lowerQuery) ||
      sheet.description.toLowerCase().includes(lowerQuery)
    ) {
      return true;
    }

    return sheet.sections.some((section: CheatsheetSection) => {
      if (section.title.toLowerCase().includes(lowerQuery)) {
        return true;
      }
      return section.commands.some((command: CheatsheetCommand) => {
        // Use type guard to ensure we only process valid command objects
        if (!isValidCommand(command)) {
          return false;
        }
        
        // Only show technical commands in search results
        if (!isTechnicalCommand(command)) {
          return false;
        }
        
        return (
          (command.command?.toString().toLowerCase().includes(lowerQuery) ?? false) ||
          (command.description?.toString().toLowerCase().includes(lowerQuery) ?? false) ||
          (command.usage?.toString().toLowerCase().includes(lowerQuery) ?? false) ||
          (command.example?.toString().toLowerCase().includes(lowerQuery) ?? false)
        );
      });
    });
  };

  // Get all matching commands for the search query
  const getMatchingCommands = (query: string): MatchingCommand[] => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const matches: MatchingCommand[] = [];

    allCheatsheets.forEach(sheet => {
      sheet.sections.forEach((section: CheatsheetSection) => {
        section.commands.forEach((command: CheatsheetCommand) => {
          // Use type guard to ensure we only process valid command objects
          if (!isValidCommand(command)) {
            return;
          }
          
          // Only show technical commands in search results
          if (!isTechnicalCommand(command)) {
            return;
          }
          
          const textMatch = (
            (command.command?.toString().toLowerCase().includes(lowerQuery) ?? false) ||
            (command.description?.toString().toLowerCase().includes(lowerQuery) ?? false) ||
            (command.usage?.toString().toLowerCase().includes(lowerQuery) ?? false) ||
            (command.example?.toString().toLowerCase().includes(lowerQuery) ?? false)
          );

          if (textMatch) {
            matches.push({
              sheetName: sheet.name,
              sheetIcon: sheet.icon,
              sheetColorTheme: (sheet as any).colorTheme || (sheet as any).color,
              sectionTitle: section.title,
              command: command,
            });
          }
        });
      });
    });

    return matches.slice(0, 20);
  };

  // Build category list with counts
  const categoryIcons: Record<string, any> = {
    'web-development': Globe,
    'programming-languages': Code,
    'databases': Database,
    'devops-cloud': Cloud,
    'developer-tools': Wrench,
    'editors-browsers': Monitor,
    'operating-systems': Cpu,
    'design-patterns': Layers,
  };

  // Color mapping for cheatsheet categories
  const categoryColors: Record<string, { border: string; accent: string; bg: string; icon: string }> = {
    'web-development': {
      border: 'border-blue-500',
      accent: 'bg-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      icon: 'text-blue-600 dark:text-blue-400'
    },
    'programming-languages': {
      border: 'border-emerald-500',
      accent: 'bg-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      icon: 'text-emerald-600 dark:text-emerald-400'
    },
    'databases': {
      border: 'border-purple-500',
      accent: 'bg-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
      icon: 'text-purple-600 dark:text-purple-400'
    },
    'devops-cloud': {
      border: 'border-orange-500',
      accent: 'bg-orange-500',
      bg: 'bg-orange-50 dark:bg-orange-950/30',
      icon: 'text-orange-600 dark:text-orange-400'
    },
    'developer-tools': {
      border: 'border-pink-500',
      accent: 'bg-pink-500',
      bg: 'bg-pink-50 dark:bg-pink-950/30',
      icon: 'text-pink-600 dark:text-pink-400'
    },
    'editors-browsers': {
      border: 'border-indigo-500',
      accent: 'bg-indigo-500',
      bg: 'bg-indigo-50 dark:bg-indigo-950/30',
      icon: 'text-indigo-600 dark:text-indigo-400'
    },
    'operating-systems': {
      border: 'border-slate-500',
      accent: 'bg-slate-500',
      bg: 'bg-slate-50 dark:bg-slate-950/30',
      icon: 'text-slate-600 dark:text-slate-400'
    },
    'design-patterns': {
      border: 'border-teal-500',
      accent: 'bg-teal-500',
      bg: 'bg-teal-50 dark:bg-teal-950/30',
      icon: 'text-teal-600 dark:text-teal-400'
    },
  };

  // Function to get category for a cheatsheet
  const getCheatsheetCategory = (sheetId: string): string => {
    for (const category of cheatsheetCategories) {
      if (category.cheatsheets.some(sheet => sheet.id === sheetId)) {
        return category.id;
      }
    }
    return 'web-development'; // fallback
  };

  const categories = [
    { id: 'all', label: 'All', icon: Layers, count: allCheatsheets.length },
    ...cheatsheetCategories.map(cat => ({
      id: cat.id,
      label: cat.name,
      icon: categoryIcons[cat.id] || Terminal,
      count: cat.cheatsheets.length
    }))
  ];

  // Filter cheatsheets based on category and search
  const getFilteredCheatsheets = () => {
    let sheets = activeCategory === 'all'
      ? allCheatsheets
      : cheatsheetCategories.find(c => c.id === activeCategory)?.cheatsheets || [];

    if (searchQuery.trim()) {
      sheets = sheets.filter(sheet => searchInSheet(sheet, searchQuery));
    }

    return sheets;
  };

  const filteredCheatsheets = getFilteredCheatsheets();
  const matchingCommands = getMatchingCommands(searchQuery);
  const isSearching = searchQuery.trim() !== '';

  // Copy command to clipboard
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
    <>
      {/* Top Controls Section - Sticky */}
      <div className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-4 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-200">
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto w-full">
          {/* Filters - Scrollable */}
          <div className="w-full relative flex justify-center">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide p-1 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 max-w-full w-auto mx-auto lg:mx-0 snap-x">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      'relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 snap-center',
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                    )}
                  >
                    <Icon className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      isActive && 'scale-110'
                    )} />
                    <span>{cat.label}</span>
                    <span className={cn(
                      'ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold transition-colors duration-300',
                      isActive
                        ? 'bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                        : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-500 dark:text-slate-400'
                    )}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          {/* Search Bar */}
          <div className="relative w-full max-w-lg flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input
                id="cheatsheets-search-input"
                data-testid="cheatsheets-search-input"
                placeholder="Search commands, situations, or cheat sheets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                    "pl-10 pr-10 h-10 text-sm rounded-xl",
                    "bg-white/70 dark:bg-slate-900/60 backdrop-blur-md",
                    "border border-slate-200/50 dark:border-slate-700/60",
                    "shadow-sm hover:shadow-md transition-all duration-200",
                    "focus:border-blue-400 dark:focus:border-blue-600",
                    "focus:ring-2 focus:ring-blue-500/20"
                )}
            />
            {searchQuery && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="h-4 w-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" />
                </Button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <button
                onClick={() => setViewMode('grouped')}
                className={cn(
                  'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
                  viewMode === 'grouped'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                <List className="w-4 h-4" />
                <span>Grouped</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                <Grid3x3 className="w-4 h-4" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 relative">
        <div className="w-full relative z-10">

          {/* Split View: Cheatsheets + Matching Commands */}
          <div className={cn(
            "grid gap-6",
            isSearching && matchingCommands.length > 0 ? "lg:grid-cols-[1fr,400px]" : "grid-cols-1"
          )}>
            {/* Left Panel: Cheatsheet Cards */}
            <div className="min-w-0">
              {isSearching ? (
                /* Search Results - Grid View */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {filteredCheatsheets.map((sheet) => {
                    const Icon = sheet.icon;
                    const commandCount = sheet.sections.reduce((total: number, section: CheatsheetSection) => total + section.commands.length, 0);
                    const category = getCheatsheetCategory(sheet.id);
                    const colors = categoryColors[category];

                    return (
                      <div
                        key={sheet.id}
                        id={`cheatsheet-card-${sheet.id}`}
                        data-testid={`cheatsheet-card-${sheet.id}`}
                        onClick={() => setSelectedSheet(sheet)}
                        className="group cursor-pointer"
                      >
                        {/* Clean Card */}
                        <div className={cn(
                          'relative h-full rounded-xl overflow-hidden',
                          'bg-white dark:bg-slate-900',
                          `border ${colors?.border || 'border-slate-200'} dark:${colors?.border || 'dark:border-slate-800'}`,
                          'shadow-sm hover:shadow-md',
                          'transition-all duration-200',
                          'hover:-translate-y-0.5'
                        )}>
                          <div className={cn(
                            'absolute left-0 top-0 bottom-0 w-1',
                            colors?.accent || 'bg-gradient-to-b from-blue-500 to-blue-600'
                          )} />

                          {/* Card Content */}
                          <div className="p-5 pl-6 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-3">
                              <div className={cn(
                                'p-2 rounded-lg flex-shrink-0',
                                colors?.bg || 'bg-blue-50 dark:bg-blue-950/50'
                              )}>
                                <Icon className={cn('h-5 w-5', colors?.icon || 'text-blue-600 dark:text-blue-400')} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 truncate">
                                  {sheet.name}
                                </h3>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  {commandCount} commands
                                </span>
                              </div>
                            </div>

                            {/* Description - Fixed to 3 lines */}
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 min-h-[3.75rem] flex-1">
                              {sheet.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                <BookOpen className="w-4 h-4" />
                                <span>{sheet.sections.length} sections</span>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : viewMode === 'grouped' ? (
                /* Grouped View by Category */
                <div className="space-y-8">
                  {(activeCategory === 'all' ? cheatsheetCategories : cheatsheetCategories.filter(c => c.id === activeCategory)).map((category) => {
                    const CategoryIcon = categoryIcons[category.id] || Terminal;
                    const categorySheets = activeCategory === 'all' ? category.cheatsheets : category.cheatsheets.filter(sheet => searchInSheet(sheet, searchQuery));
                    
                    if (categorySheets.length === 0) return null;
                    
                    return (
                      <div key={category.id} className="space-y-4">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                            <CategoryIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                          </div>
                          <div>
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                              {category.name}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {categorySheets.length} cheatsheet{categorySheets.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        
                        {/* Cheatsheet Grid for this Category */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                          {categorySheets.map((sheet) => {
                            const Icon = sheet.icon;
                            const commandCount = sheet.sections.reduce((total: number, section: CheatsheetSection) => total + section.commands.length, 0);
                            const category = getCheatsheetCategory(sheet.id);
                            const colors = categoryColors[category];

                            return (
                              <div
                                key={sheet.id}
                                id={`cheatsheet-card-${sheet.id}`}
                                data-testid={`cheatsheet-card-${sheet.id}`}
                                onClick={() => setSelectedSheet(sheet)}
                                className="group cursor-pointer"
                              >
                                {/* Clean Card */}
                                <div className={cn(
                                  'relative h-full rounded-xl overflow-hidden',
                                  'bg-white dark:bg-slate-900',
                                  `border ${colors?.border || 'border-slate-200'} dark:${colors?.border || 'dark:border-slate-800'}`,
                                  'shadow-sm hover:shadow-md',
                                  'transition-all duration-200',
                                  'hover:-translate-y-0.5'
                                )}>
                                  <div className={cn(
                                    'absolute left-0 top-0 bottom-0 w-1',
                                    colors?.accent || 'bg-gradient-to-b from-blue-500 to-blue-600'
                                  )} />

                                  {/* Card Content */}
                                  <div className="p-5 pl-6 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-start gap-3 mb-3">
                                      <div className={cn(
                                        'p-2 rounded-lg flex-shrink-0',
                                        colors?.bg || 'bg-blue-50 dark:bg-blue-950/50'
                                      )}>
                                        <Icon className={cn('h-5 w-5', colors?.icon || 'text-blue-600 dark:text-blue-400')} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 truncate">
                                          {sheet.name}
                                        </h3>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                          {commandCount} commands
                                        </span>
                                      </div>
                                    </div>

                                    {/* Description - Fixed to 3 lines */}
                                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 min-h-[3.75rem] flex-1">
                                      {sheet.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-auto">
                                      <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                        <BookOpen className="w-4 h-4" />
                                        <span>{sheet.sections.length} sections</span>
                                      </div>
                                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Grid View (All cheatsheets in one grid) */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {filteredCheatsheets.map((sheet) => {
                    const Icon = sheet.icon;
                    const commandCount = sheet.sections.reduce((total: number, section: CheatsheetSection) => total + section.commands.length, 0);
                    const category = getCheatsheetCategory(sheet.id);
                    const colors = categoryColors[category];

                    return (
                      <div
                        key={sheet.id}
                        id={`cheatsheet-card-${sheet.id}`}
                        data-testid={`cheatsheet-card-${sheet.id}`}
                        onClick={() => setSelectedSheet(sheet)}
                        className="group cursor-pointer"
                      >
                        {/* Clean Card */}
                        <div className={cn(
                          'relative h-full rounded-xl overflow-hidden',
                          'bg-white dark:bg-slate-900',
                          `border ${colors?.border || 'border-slate-200'} dark:${colors?.border || 'dark:border-slate-800'}`,
                          'shadow-sm hover:shadow-md',
                          'transition-all duration-200',
                          'hover:-translate-y-0.5'
                        )}>
                          <div className={cn(
                            'absolute left-0 top-0 bottom-0 w-1',
                            colors?.accent || 'bg-gradient-to-b from-blue-500 to-blue-600'
                          )} />

                          {/* Card Content */}
                          <div className="p-5 pl-6 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-3">
                              <div className={cn(
                                'p-2 rounded-lg flex-shrink-0',
                                colors?.bg || 'bg-blue-50 dark:bg-blue-950/50'
                              )}>
                                <Icon className={cn('h-5 w-5', colors?.icon || 'text-blue-600 dark:text-blue-400')} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 truncate">
                                  {sheet.name}
                                </h3>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  {commandCount} commands
                                </span>
                              </div>
                            </div>

                            {/* Description - Fixed to 3 lines */}
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 min-h-[3.75rem] flex-1">
                              {sheet.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                <BookOpen className="w-4 h-4" />
                                <span>{sheet.sections.length} sections</span>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Empty State */}
              {filteredCheatsheets.length === 0 && (
                <div
                  id="cheatsheets-empty-state"
                  data-testid="cheatsheets-empty-state"
                  className="flex flex-col items-center justify-center py-20"
                >
                  <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white mb-1">No cheat sheets found</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Try adjusting your search or category filter
                  </p>
                  <button
                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    View All
                  </button>
                </div>
              )}
            </div>

            {/* Right Panel: Matching Commands */}
            {isSearching && matchingCommands.length > 0 && (
              <div className="lg:sticky lg:top-6 h-fit">
                <div className={cn(
                  "rounded-xl overflow-hidden",
                  "bg-white dark:bg-slate-900",
                  "border border-slate-200 dark:border-slate-800",
                  "shadow-sm"
                )}>
                  {/* Header */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Matching Commands
                      </h3>
                      <span className="ml-auto text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {matchingCommands.length}
                      </span>
                    </div>
                  </div>

                  {/* Commands List */}
                  <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                      {matchingCommands.map((match, index) => {
                        const MatchIcon = match.sheetIcon;
                        const isCopied = copiedCommand === match.command.command;
                        const hasUsage = match.command.usage && match.command.usage !== match.command.command;
                        const hasExample = match.command.example && match.command.example.length > 50;

                        return (
                          <div key={index} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200">
                            <div className="p-4">
                              {/* Header with icon and metadata */}
                              <div className="flex items-center gap-2 mb-3">
                                <div className={`p-1.5 rounded-lg bg-${match.sheetColorTheme}-50 dark:bg-${match.sheetColorTheme}-950/30`}>
                                  <MatchIcon className={`h-3.5 w-3.5 text-${match.sheetColorTheme}-600 dark:text-${match.sheetColorTheme}-400`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                      {match.sheetName}
                                    </span>
                                    <span className="text-xs text-slate-400">•</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                      {match.sectionTitle}
                                    </span>
                                  </div>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className={`h-7 w-7 p-0 flex-shrink-0 transition-all duration-200 ${
                                    isCopied 
                                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                                  }`}
                                  onClick={() => copyToClipboard(match.command.command!)}
                                >
                                  {isCopied ? (
                                    <Check className="h-3.5 w-3.5" />
                                  ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                  )}
                                </Button>
                              </div>

                              {/* Main command display */}
                              <div className="mb-3">
                                <div className="flex items-start gap-2">
                                  <div className="flex-1 min-w-0">
                                    <code className="block text-sm font-mono bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-slate-900 dark:text-white break-all leading-relaxed border border-slate-200 dark:border-slate-700">
                                      {match.command.command}
                                    </code>
                                  </div>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                                {match.command.description}
                              </p>

                              {/* Usage (if different from command) */}
                              {hasUsage && (
                                <div className="mb-2">
                                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Usage:</div>
                                  <code className="text-xs font-mono bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block">
                                    {match.command.usage}
                                  </code>
                                </div>
                              )}

                              {/* Example preview (truncated) */}
                              {hasExample && (
                                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Example:</div>
                                  <div className="text-xs font-mono bg-slate-50 dark:bg-slate-800/30 px-2 py-1 rounded text-slate-600 dark:text-slate-400 max-h-20 overflow-y-auto line-clamp-3">
                                    {match.command.example?.substring(0, 150)}...
                                  </div>
                                </div>
                              )}

                              {/* Quick actions */}
                              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 px-2 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                  onClick={() => copyToClipboard(match.command.example || match.command.usage || match.command.command!)}
                                >
                                  Copy Example
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 px-2 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                  onClick={() => {
                                    setSelectedSheet(allCheatsheets.find(sheet => sheet.name === match.sheetName) || null);
                                  }}
                                >
                                  View Full
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Cheatsheet Modal */}
      {selectedSheet && (
        <CheatsheetModal
          open={!!selectedSheet}
          onClose={() => setSelectedSheet(null)}
          title={selectedSheet.name}
          icon={selectedSheet.icon}
          colorTheme={(selectedSheet as any).colorTheme || (selectedSheet as any).color}
          sections={selectedSheet.sections}
        />
      )}
    </>
  );
}

