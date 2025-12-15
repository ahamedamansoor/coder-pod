'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Copy, Check, ChevronRight } from 'lucide-react';
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

  // Enhanced filter that searches deeply within commands
  const searchInSheet = (sheet: typeof allCheatsheets[0], query: string): boolean => {
    const lowerQuery = query.toLowerCase();
    
    // Search in sheet name and description
    if (
      sheet.name.toLowerCase().includes(lowerQuery) ||
      sheet.description.toLowerCase().includes(lowerQuery)
    ) {
      return true;
    }

    // Search within all sections and commands
    return sheet.sections.some(section => {
      // Search in section title
      if (section.title.toLowerCase().includes(lowerQuery)) {
        return true;
      }

      // Search in commands
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
          // Check if command matches the search query
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

    return matches.slice(0, 20); // Limit to top 20 matches
  };

  // Filter categories and cheatsheets based on search query
  const filteredCategories = cheatsheetCategories.map(category => ({
    ...category,
    cheatsheets: category.cheatsheets.filter((sheet) => {
      // If no search query, show all
      if (searchQuery.trim() === '') {
        return true;
      }
      
      // Use deep search
      return searchInSheet(sheet, searchQuery);
    })
  })).filter(category => category.cheatsheets.length > 0);

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
      <main className="flex-1 overflow-y-auto p-6 sm:p-8 bg-transparent relative">
        <div className="w-full relative z-10">

          {/* Search Bar */}
          <div className="mb-4 flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500 transition-colors" />
              <Input
                id="cheatsheets-search-input"
                data-testid="cheatsheets-search-input"
                placeholder="Search commands, situations, or cheat sheets... (e.g., 'kill port')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "pl-12 h-11 text-base transition-colors duration-200 rounded-xl",
                  "bg-white/50 dark:bg-slate-800/50",
                  "border border-slate-200 dark:border-slate-700",
                  "shadow-sm",
                  "hover:border-slate-300 dark:hover:border-slate-600",
                  "focus:border-blue-400 dark:focus:border-blue-500",
                  "focus:shadow-md focus:ring-2 focus:ring-blue-500/20"
                )}
              />
            </div>
          </div>

          {/* Split View: Cheatsheets + Matching Commands */}
          <div className={cn(
            "grid gap-6",
            isSearching && matchingCommands.length > 0 ? "lg:grid-cols-[1fr,400px]" : "grid-cols-1"
          )}>
            {/* Left Panel: Categories with Cheatsheet Cards */}
            <div className="space-y-8">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-blue-800 pb-2">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h2>
                  </div>

                  {/* Cheatsheet Cards Grid */}
                  <div
                    id={`cheatsheets-grid-${category.id}`}
                    data-testid={`cheatsheets-grid-${category.id}`}
                    className={cn(
                      "grid gap-4",
                      isSearching && matchingCommands.length > 0
                        ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    )}
                  >
                    {category.cheatsheets.map((sheet) => {
                      const Icon = sheet.icon;
                      // Calculate total command count
                      const commandCount = sheet.sections.reduce((total: number, section) => total + section.commands.length, 0);

                      return (
                        <Card
                          key={sheet.id}
                          id={`cheatsheet-card-${sheet.id}`}
                          data-testid={`cheatsheet-card-${sheet.id}`}
                          className={cn(
                            "group relative h-full overflow-hidden rounded-2xl cursor-pointer",
                            "bg-white/80 dark:bg-slate-800/80",
                            "border border-slate-200 dark:border-slate-700",
                            "shadow-sm hover:shadow-md",
                            "transition-all duration-200 ease-out"
                          )}
                          style={{ willChange: 'transform' }}
                          onClick={() => setSelectedSheet(sheet)}
                        >
                          
                          <div className="relative p-5">
                            <div className="flex items-start gap-3">
                              <div className={cn(
                                "p-2.5 rounded-xl transition-colors duration-200",
                                "bg-blue-50 dark:bg-blue-950/50",
                                "shadow-sm"
                              )}>
                                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-base mb-1 text-slate-900 dark:text-white">
                                  {sheet.name}
                                </h3>
                                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                                  {sheet.description}
                                </p>
                                {/* Command count badge */}
                                <div className="mt-2">
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {commandCount} commands
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Panel: Matching Commands (shown when searching) */}
            {isSearching && matchingCommands.length > 0 && (
              <div className="lg:sticky lg:top-6 h-fit">
                <div className={cn(
                  "rounded-2xl overflow-hidden",
                  "bg-white/80 dark:bg-slate-800/80",
                  "border border-slate-200 dark:border-slate-700",
                  "shadow-sm"
                )}>
                  {/* Header */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Matching Commands
                      </h3>
                      <span className="ml-auto text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {matchingCommands.length}
                      </span>
                    </div>
                  </div>

                  {/* Commands List */}
                  <div className="max-h-[calc(100vh-16rem)] overflow-y-auto" style={{ willChange: 'scroll-position' }}>
                    <div className="divide-y divide-slate-200 dark:divide-slate-700">
                      {matchingCommands.map((match, index) => {
                        const Icon = match.sheetIcon;
                        const isCopied = copiedCommand === match.command.command;

                        return (
                          <div key={index} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200">
                            {/* Source Info */}
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {match.sheetName} • {match.sectionTitle}
                              </span>
                            </div>

                            {/* Command */}
                            <div className="flex items-start gap-2 mb-2">
                              <code className="flex-1 text-sm font-mono bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-slate-900 dark:text-white break-all">
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

                            {/* Description */}
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {match.command.description}
                            </p>

                            {/* Example (if short) */}
                            {match.command.example && match.command.example.length < 100 && (
                              <div className="mt-2 text-xs">
                                <code className="text-slate-500 dark:text-slate-500">
                                  {match.command.example.split('\n')[0]}
                                </code>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Empty State */}
          {filteredCategories.length === 0 && (
            <div
              id="cheatsheets-empty-state"
              data-testid="cheatsheets-empty-state"
              className={cn(
                "text-center py-16 rounded-2xl",
                "bg-white/80 dark:bg-slate-800/80",
                "border border-slate-200 dark:border-slate-700",
                "shadow-sm"
              )}
            >
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                </div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">No cheat sheets found</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Try adjusting your search query
                </p>
              </div>
            </div>
          )}
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
