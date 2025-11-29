'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Copy, Check, ChevronRight, Filter, X } from 'lucide-react';
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

// Command type filters
const COMMAND_FILTERS = [
  { id: 'ssh', label: 'SSH', keywords: ['ssh', 'ssh-keygen', 'ssh-copy-id', 'sshfs'] },
  { id: 'grep', label: 'Grep', keywords: ['grep', 'rg', 'ripgrep'] },
  { id: 'git', label: 'Git', keywords: ['git'] },
  { id: 'tar', label: 'Tar', keywords: ['tar', 'zip', 'unzip', 'gzip', 'gunzip'] },
  { id: 'docker', label: 'Docker', keywords: ['docker'] },
  { id: 'npm', label: 'npm', keywords: ['npm', 'npx', 'yarn', 'pnpm'] },
  { id: 'database', label: 'Database', keywords: ['select', 'insert', 'update', 'delete', 'create', 'drop', 'set', 'get', 'hset', 'zadd', 'mongo', 'firebase', 'firestore', 'addDoc', 'getDoc', 'setDoc', 'cql', 'cassandra', 'timescale', 'hypertable', 'time_bucket'] },
  { id: 'vim', label: 'Vim', keywords: ['vim', 'vi', 'nvim'] },
  { id: 'find', label: 'Find', keywords: ['find', 'locate'] },
  { id: 'process', label: 'Process', keywords: ['ps', 'kill', 'top', 'htop', 'pkill', 'killall'] },
  { id: 'network', label: 'Network', keywords: ['curl', 'wget', 'ping', 'netstat', 'ifconfig', 'ip'] },
  { id: 'tmux', label: 'Tmux', keywords: ['tmux', 'screen'] },
  { id: 'sed', label: 'Sed', keywords: ['sed'] },
  { id: 'awk', label: 'Awk', keywords: ['awk'] },
];

export default function CheatsheetBoard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSheet, setSelectedSheet] = useState<typeof allCheatsheets[0] | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [selectedCommandType, setSelectedCommandType] = useState<string | null>(null);

  // Check if command matches the selected command type filter
  const matchesCommandType = (command: { command: string }): boolean => {
    if (!selectedCommandType) return true;
    
    const filter = COMMAND_FILTERS.find(f => f.id === selectedCommandType);
    if (!filter) return true;
    
    const commandLower = command.command.toLowerCase();
    return filter.keywords.some(keyword => 
      commandLower.startsWith(keyword) || commandLower.includes(` ${keyword}`)
    );
  };

  // Enhanced filter that searches deeply within commands
  const searchInSheet = (sheet: typeof allCheatsheets[0], query: string): boolean => {
    const lowerQuery = query.toLowerCase();
    
    // Search in sheet name and description
    if (
      sheet.name.toLowerCase().includes(lowerQuery) ||
      sheet.description.toLowerCase().includes(lowerQuery)
    ) {
      // If command type filter is active, check if sheet has matching commands
      if (selectedCommandType) {
        return sheet.sections.some(section => 
          section.commands.some(command => matchesCommandType(command))
        );
      }
      return true;
    }

    // Search within all sections and commands
    return sheet.sections.some(section => {
      // Search in section title
      if (section.title.toLowerCase().includes(lowerQuery)) {
        if (selectedCommandType) {
          return section.commands.some(command => matchesCommandType(command));
        }
        return true;
      }

      // Search in commands
      return section.commands.some(command => {
        const textMatch = (
          command.command.toLowerCase().includes(lowerQuery) ||
          command.description.toLowerCase().includes(lowerQuery) ||
          command.usage.toLowerCase().includes(lowerQuery) ||
          command.example.toLowerCase().includes(lowerQuery)
        );
        
        return textMatch && matchesCommandType(command);
      });
    });
  };

  // Get all matching commands for the search query
  const getMatchingCommands = (query: string): MatchingCommand[] => {
    if (!query.trim() && !selectedCommandType) return [];

    const lowerQuery = query.toLowerCase();
    const matches: MatchingCommand[] = [];

    allCheatsheets.forEach(sheet => {
      sheet.sections.forEach(section => {
        section.commands.forEach(command => {
          // Check if command matches the command type filter
          if (!matchesCommandType(command)) {
            return;
          }

          // Check if command matches the search query (or no query)
          const textMatch = !query.trim() || (
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

  // Filter categories and cheatsheets based on deep search and command type
  const filteredCategories = cheatsheetCategories.map(category => ({
    ...category,
    cheatsheets: category.cheatsheets.filter((sheet) => {
      // If no filters, show all
      if (searchQuery.trim() === '' && !selectedCommandType) {
        return true;
      }
      
      // If only command type filter, check if sheet has matching commands
      if (searchQuery.trim() === '' && selectedCommandType) {
        return sheet.sections.some(section => 
          section.commands.some(command => matchesCommandType(command))
        );
      }
      
      // If search query exists, use deep search (which also respects command type)
      return searchInSheet(sheet, searchQuery);
    })
  })).filter(category => category.cheatsheets.length > 0);

  const matchingCommands = getMatchingCommands(searchQuery);
  const isSearching = searchQuery.trim() !== '' || selectedCommandType !== null;

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
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Quick Reference
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Search for specific commands or situations. Click any card to view detailed usage examples.
            </p>
          </div>

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
                  "pl-12 h-11 text-base transition-all duration-300 rounded-xl",
                  "bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl",
                  "border border-white/20 dark:border-white/10",
                  "shadow-[0_8px_32px_rgba(31,38,135,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                  "hover:border-white/30 dark:hover:border-white/20",
                  "focus:border-blue-400/50 dark:focus:border-blue-500/50",
                  "focus:shadow-lg focus:shadow-blue-500/10 dark:focus:shadow-blue-500/20"
                )}
              />
            </div>
          </div>

          {/* Command Type Filters */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Filter by command type:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {COMMAND_FILTERS.map(filter => (
                <Badge
                  key={filter.id}
                  variant={selectedCommandType === filter.id ? 'default' : 'outline'}
                  className={cn(
                    "cursor-pointer transition-all duration-200",
                    "hover:scale-105 active:scale-95",
                    selectedCommandType === filter.id
                      ? "bg-blue-500 hover:bg-blue-600 text-white border-blue-500 shadow-md"
                      : "bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/20 dark:border-white/10 hover:border-blue-400/50 dark:hover:border-blue-500/50 text-slate-700 dark:text-slate-300"
                  )}
                  onClick={() => setSelectedCommandType(selectedCommandType === filter.id ? null : filter.id)}
                >
                  {filter.label}
                  {selectedCommandType === filter.id && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
              {selectedCommandType && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCommandType(null)}
                  className="h-7 px-2 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Clear filter
                </Button>
              )}
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
                      
                      return (
                        <Card
                          key={sheet.id}
                          id={`cheatsheet-card-${sheet.id}`}
                          data-testid={`cheatsheet-card-${sheet.id}`}
                          className={cn(
                            "group relative h-full overflow-hidden rounded-2xl cursor-pointer",
                            // Glass morphism base - transparent with blur
                            "bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl",
                            // Borders with subtle gradient
                            "border border-white/20 dark:border-white/10",
                            "shadow-[0_8px_32px_rgba(31,38,135,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                            // Glass reflection layer
                            "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-white/8 after:via-transparent after:to-transparent after:pointer-events-none",
                            // Smooth transitions - only shine animation on hover
                            "transition-all duration-500 ease-out"
                          )}
                          onClick={() => setSelectedSheet(sheet)}
                        >
                          {/* Holographic shimmer effect */}
                          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shine-glow_1.5s_ease-in-out] pointer-events-none" />
                          </div>
                          
                          <div className="relative p-5">
                            <div className="flex items-start gap-3">
                              <div className={cn(
                                "p-2.5 rounded-xl transition-all duration-300",
                                "bg-blue-50/80 dark:bg-blue-950/50 backdrop-blur-sm",
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
                  "bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl",
                  "border border-white/20 dark:border-white/10",
                  "shadow-[0_8px_32px_rgba(31,38,135,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                )}>
                  {/* Header */}
                  <div className="p-4 border-b border-white/10 dark:border-white/5">
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
                  <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
                    <div className="divide-y divide-white/10 dark:divide-white/5">
                      {matchingCommands.map((match, index) => {
                        const Icon = match.sheetIcon;
                        const isCopied = copiedCommand === match.command.command;

                        return (
                          <div key={index} className="p-4 hover:bg-white/5 dark:hover:bg-white/[0.02] transition-colors">
                            {/* Source Info */}
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {match.sheetName} • {match.sectionTitle}
                              </span>
                            </div>

                            {/* Command */}
                            <div className="flex items-start gap-2 mb-2">
                              <code className="flex-1 text-sm font-mono bg-slate-900/5 dark:bg-white/5 px-2 py-1 rounded text-slate-900 dark:text-white break-all">
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
                "text-center py-16 rounded-2xl relative overflow-hidden",
                "bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl",
                "border border-white/20 dark:border-white/10",
                "shadow-[0_8px_32px_rgba(31,38,135,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-white/8 after:via-transparent after:to-transparent after:pointer-events-none"
              )}
            >
              <div className="relative z-10">
                <div className="bg-blue-100/50 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
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
