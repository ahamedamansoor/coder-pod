'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Copy, Check, ChevronRight, Terminal, Layers, ArrowRight, BookOpen } from 'lucide-react';
import { CheatsheetModal } from './cheatsheet-modal';
import { cn } from '@/lib/utils';
import { cheatsheetCategories, allCheatsheets } from '@/data/cheatsheets';

type MatchingCommand = {
  sheetName: string;
  sheetIcon: any;
  sheetColorTheme: string;
  sectionTitle: string;
  command: {
    command: string;
    description: string;
    usage: string;
    example: string;
  };
};

export default function CheatsheetBoard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSheet, setSelectedSheet] = useState<typeof allCheatsheets[0] | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Enhanced filter that searches deeply within commands
  const searchInSheet = (sheet: typeof allCheatsheets[0], query: string): boolean => {
    const lowerQuery = query.toLowerCase();

    if (
      sheet.name.toLowerCase().includes(lowerQuery) ||
      sheet.description.toLowerCase().includes(lowerQuery)
    ) {
      return true;
    }

    return sheet.sections.some(section => {
      if (section.title.toLowerCase().includes(lowerQuery)) {
        return true;
      }
      return section.commands.some(command => {
        return (
          command.command.toLowerCase().includes(lowerQuery) ||
          command.description.toLowerCase().includes(lowerQuery) ||
          command.usage.toLowerCase().includes(lowerQuery) ||
          command.example.toLowerCase().includes(lowerQuery)
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
      sheet.sections.forEach(section => {
        section.commands.forEach(command => {
          const textMatch = (
            command.command.toLowerCase().includes(lowerQuery) ||
            command.description.toLowerCase().includes(lowerQuery) ||
            command.usage.toLowerCase().includes(lowerQuery) ||
            command.example.toLowerCase().includes(lowerQuery)
          );

          if (textMatch) {
            matches.push({
              sheetName: sheet.name,
              sheetIcon: sheet.icon,
              sheetColorTheme: sheet.colorTheme,
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
  const categories = [
    { id: 'all', label: 'All', icon: Layers, count: allCheatsheets.length },
    ...cheatsheetCategories.map(cat => ({
      id: cat.id,
      label: cat.name,
      icon: Terminal,
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
      {/* Category Filter Pills */}
      <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap',
                  'transition-all duration-300 ease-out',
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />
                )}
                <Icon className={cn(
                  'w-4 h-4 relative z-10 transition-transform duration-300',
                  isActive && 'scale-110'
                )} />
                <span className="relative z-10">{cat.label}</span>
                <span className={cn(
                  'relative z-10 px-2 py-0.5 rounded-full text-xs font-semibold transition-colors duration-300',
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

      <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 bg-transparent relative">
        <div className="w-full relative z-10">

          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <div className="relative max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
              <Input
                id="cheatsheets-search-input"
                data-testid="cheatsheets-search-input"
                placeholder="Search commands, situations, or cheat sheets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "pl-12 h-12 text-base rounded-xl",
                  "bg-white dark:bg-slate-900",
                  "border border-slate-200 dark:border-slate-700",
                  "shadow-sm hover:shadow-md transition-shadow duration-200",
                  "focus:border-blue-400 dark:focus:border-blue-500",
                  "focus:ring-2 focus:ring-blue-500/20"
                )}
              />
            </div>
          </div>

          {/* Split View: Cheatsheets + Matching Commands */}
          <div className={cn(
            "grid gap-6",
            isSearching && matchingCommands.length > 0 ? "lg:grid-cols-[1fr,400px]" : "grid-cols-1"
          )}>
            {/* Left Panel: Cheatsheet Cards */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {filteredCheatsheets.map((sheet) => {
                  const Icon = sheet.icon;
                  const commandCount = sheet.sections.reduce((total: number, section) => total + section.commands.length, 0);

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
                        'border border-slate-200 dark:border-slate-800',
                        'shadow-sm hover:shadow-md',
                        'transition-all duration-200',
                        'hover:-translate-y-0.5'
                      )}>

                        {/* Thin Accent Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

                        {/* Card Content */}
                        <div className="p-5 pl-6">
                          {/* Header */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50">
                              <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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

                          {/* Description */}
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 min-h-[2.5rem]">
                            {sheet.description}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between">
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

                        return (
                          <div key={index} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                              <MatchIcon className="h-3.5 w-3.5 text-blue-500" />
                              <span className="text-xs text-slate-500">
                                {match.sheetName} • {match.sectionTitle}
                              </span>
                            </div>

                            <div className="flex items-start gap-2 mb-2">
                              <code className="flex-1 text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-900 dark:text-white break-all">
                                {match.command.command}
                              </code>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 w-7 p-0 flex-shrink-0"
                                onClick={() => copyToClipboard(match.command.command)}
                              >
                                {isCopied ? (
                                  <Check className="h-3.5 w-3.5 text-green-500" />
                                ) : (
                                  <Copy className="h-3.5 w-3.5" />
                                )}
                              </Button>
                            </div>

                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {match.command.description}
                            </p>
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
          colorTheme={selectedSheet.colorTheme}
          sections={selectedSheet.sections}
        />
      )}
    </>
  );
}

