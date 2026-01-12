'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { History, Eye, Search, Calendar, User, GitCommit, GitBranch, GitMerge, GitPullRequest, Terminal, Clock, Filter, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface GitTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function GitHistory({ onOpenWebPlayground }: GitTopicProps) {
  const [activeView, setActiveView] = useState<string>('basic');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const logCommands = [
    {
      id: 'basic',
      name: 'git log',
      description: 'Show complete commit history',
      usage: 'git log',
      example: 'git log',
      output: `commit a1b2c3d4e5f6g7h8i9j0\nAuthor: John Doe <john@example.com>\nDate: Mon Jan 8 10:30:00 2024\n\n    Add user authentication feature\n\n    - Implement login functionality\n    - Add password encryption\n    - Create user session management`,
      icon: History,
      color: 'blue',
      purpose: 'Displays the full commit history with detailed information including author, date, and commit message'
    },
    {
      id: 'oneline',
      name: 'git log --oneline',
      description: 'Show condensed commit history',
      usage: 'git log --oneline',
      example: 'git log --oneline',
      output: `a1b2c3d (HEAD -> main) Add user authentication\nf4g5h6i Fix login validation error\ne7j8k9l Update dependencies\nm3n4o5p Refactor user service`,
      icon: Eye,
      color: 'green',
      purpose: 'Shows each commit on a single line with abbreviated hash and commit message'
    },
    {
      id: 'graph',
      name: 'git log --graph',
      description: 'Show commit history with branch graph',
      usage: 'git log --graph --oneline',
      example: 'git log --graph --oneline',
      output: `* a1b2c3d (HEAD -> main) Add user authentication\n| * f4g5h6i (feature-branch) Fix styling issues\n| * g7h8i9j Add responsive design\n* | e7j8k9l Update dependencies\n|/\n* m3n4o5p Refactor user service`,
      icon: GitBranch,
      color: 'purple',
      purpose: 'Displays an ASCII graph of the commit history showing branch merges and structure'
    },
    {
      id: 'stat',
      name: 'git log --stat',
      description: 'Show commit history with file statistics',
      usage: 'git log --stat',
      example: 'git log --stat --oneline',
      output: `a1b2c3d Add user authentication (2 files changed, 45 insertions(+))\n src/auth.js    | 35 +++++++++++++++++++\n src/utils.js   | 10 ++++++++++\nf4g5h6i Fix login validation (1 file changed, 5 deletions(-))\n src/auth.js    | 5 -----`,
      icon: GitCommit,
      color: 'orange',
      purpose: 'Shows which files were changed and how many lines were added or removed in each commit'
    },
    {
      id: 'patch',
      name: 'git log -p',
      description: 'Show commit history with full diff',
      usage: 'git log -p [file]',
      example: 'git log -p src/auth.js',
      output: `commit a1b2c3d4e5f6g7h8i9j0\nAuthor: John Doe <john@example.com>\nDate: Mon Jan 8 10:30:00 2024\n\n    Add user authentication\n\ndiff --git a/src/auth.js b/src/auth.js\nindex 1234567..abcdefg 100644\n--- a/src/auth.js\n+++ b/src/auth.js\n@@ -1,3 +1,38 @@\n+function authenticateUser(username, password) {\n+  // Implementation here\n+}`,
      icon: Terminal,
      color: 'red',
      purpose: 'Shows the complete diff for each commit, displaying exactly what changed'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Commits', icon: History },
    { id: 'author', label: 'By Author', icon: User },
    { id: 'date', label: 'By Date', icon: Calendar },
    { id: 'branch', label: 'By Branch', icon: GitBranch },
    { id: 'merge', label: 'Merges Only', icon: GitMerge }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-900 dark:text-blue-100', border: 'border-blue-200 dark:border-blue-700', icon: 'text-blue-600 dark:text-blue-400' },
      green: { bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-900 dark:text-green-100', border: 'border-green-200 dark:border-green-700', icon: 'text-green-600 dark:text-green-400' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-900 dark:text-purple-100', border: 'border-purple-200 dark:border-purple-700', icon: 'text-purple-600 dark:text-purple-400' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-900 dark:text-orange-100', border: 'border-orange-200 dark:border-orange-700', icon: 'text-orange-600 dark:text-orange-400' },
      red: { bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-900 dark:text-red-100', border: 'border-red-200 dark:border-red-700', icon: 'text-red-600 dark:text-red-400' }
    };
    return colors[color] || colors.blue;
  };

  const sampleHistory = [
    {
      hash: 'a1b2c3d',
      author: 'John Doe',
      date: '2024-01-08 10:30',
      message: 'Add user authentication feature',
      files: 2,
      insertions: 45,
      deletions: 0
    },
    {
      hash: 'f4g5h6i',
      author: 'Jane Smith',
      date: '2024-01-07 15:45',
      message: 'Fix login validation error',
      files: 1,
      insertions: 0,
      deletions: 5
    },
    {
      hash: 'e7j8k9l',
      author: 'Bob Johnson',
      date: '2024-01-06 09:20',
      message: 'Update dependencies and security patches',
      files: 15,
      insertions: 234,
      deletions: 89
    },
    {
      hash: 'm3n4o5p',
      author: 'Alice Brown',
      date: '2024-01-05 14:15',
      message: 'Refactor user service for better performance',
      files: 3,
      insertions: 67,
      deletions: 23
    }
  ];

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={History}
        category="Git & GitHub · Git History"
        title="Viewing Git History"
        description="Master the art of exploring your project's evolution. Learn to navigate commit history, track changes, and understand your codebase's journey through time."
        colorTheme="indigo"
      />

      {/* Section 1: Why Git History Matters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
            <Clock className="w-7 h-7" />
            Why Git History is Essential
          </CardTitle>
          <CardDescription className="text-base">
            Understanding your project's history helps you track progress, debug issues, and collaborate effectively with your team.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <Search className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100">Debug Issues</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Trace back when and how bugs were introduced by examining commit history.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <GitBranch className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
              <h4 className="font-bold text-lg text-green-900 dark:text-green-100">Understand Evolution</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                See how your codebase evolved and why certain decisions were made.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <GitPullRequest className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100">Team Collaboration</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Track team contributions and understand who changed what and when.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Git Log Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
            <Terminal className="w-7 h-7" />
            Essential Git Log Commands
          </CardTitle>
          <CardDescription className="text-base">
            Click on any command to see detailed usage and output examples.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {logCommands.map((cmd) => {
              const colors = getColorClasses(cmd.color);
              const Icon = cmd.icon;
              
              return (
                <div
                  key={cmd.id}
                  onClick={() => setActiveView(activeView === cmd.id ? '' : cmd.id)}
                  className={`p-5 ${colors.bg} rounded-xl border ${colors.border} cursor-pointer transition-all hover:shadow-lg ${
                    activeView === cmd.id ? 'ring-2 ring-offset-2 ring-indigo-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-6 h-6 ${colors.icon} mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`font-bold text-lg ${colors.text}`}>{cmd.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          Core Command
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cmd.description}</p>
                      
                      {activeView === cmd.id && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Purpose:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{cmd.purpose}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Usage:</h4>
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400">
                              {cmd.usage}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Example:</h4>
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400">
                              {cmd.example}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Sample Output:</h4>
                            <div className="p-4 bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl shadow-sm overflow-x-auto">
                              <pre className="whitespace-pre text-slate-700 dark:text-green-400 font-mono text-xs leading-relaxed">{cmd.output}</pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Filtering and Searching */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
            <Filter className="w-7 h-7" />
            Filtering & Searching History
          </CardTitle>
          <CardDescription className="text-base">
            Learn to narrow down your search to find exactly what you need in the commit history.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              const isActive = selectedFilter === option.id;
              
              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedFilter(isActive ? 'all' : option.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    isActive
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`} />
                    <h3 className={`font-semibold ${isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-900 dark:text-gray-100'}`}>
                      {option.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Here are the most useful filtering options for finding specific commits in your project history.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Filter by Author</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                  $ git log --author="John Doe"<br/>
                  $ git log --author="john@example.com"
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                  Shows commits only by the specified author.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Filter by Date Range</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                  $ git log --since="2024-01-01" --until="2024-01-31"<br/>
                  $ git log --after="2 weeks ago"
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Shows commits within a specific date range.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Filter by Message</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                  $ git log --grep="authentication"<br/>
                  $ git log --grep="fix" --oneline
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
                  Shows commits with messages containing specific keywords.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Filter by File</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                  $ git log -- src/auth.js<br/>
                  $ git log -- *.js --oneline
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
                  Shows commits that modified specific files or file patterns.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Advanced History Techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
            <GitCommit className="w-7 h-7" />
            Advanced History Techniques
          </CardTitle>
          <CardDescription className="text-base">
            Powerful commands and techniques for deep diving into your Git history.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-2">git blame</h4>
              <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-3">
                Shows who modified each line of a file and when.
              </p>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git blame src/auth.js
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-900 dark:text-emerald-100 mb-2">git shortlog</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                Summarizes commits by author.
              </p>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git shortlog -sn
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-900 dark:text-rose-100 mb-2">git whatchanged</h4>
              <p className="text-sm text-rose-800 dark:text-rose-200 mb-3">
                Shows commits with files that changed.
              </p>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git whatchanged --stat
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">git reflog</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                Shows a log of all references updates.
              </p>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git reflog --oneline
              </div>
            </div>
          </div>

          <Alert className="mt-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              These advanced commands are powerful tools for debugging and understanding complex project histories. Use them when you need detailed insights into your repository's evolution.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 5: Sample History Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
            <Eye className="w-7 h-7" />
            Sample History Visualization
          </CardTitle>
          <CardDescription className="text-base">
            See how different log formats present the same commit information in various ways.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Standard Log Output
              </h4>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 border border-blue-200 dark:border-gray-700 rounded-xl shadow-lg overflow-x-auto">
                <pre className="whitespace-pre text-slate-700 dark:text-green-400 font-mono text-xs leading-relaxed">{`commit a1b2c3d4e5f6g7h8i9j0 (HEAD -> main, origin/main)
Author: John Doe <john@example.com>
Date: Mon Jan 8 10:30:00 2024 -0500

    Add user authentication feature

    - Implement login functionality with JWT tokens
    - Add password encryption using bcrypt
    - Create user session management
    - Add input validation and error handling`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Oneline Format
              </h4>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 border border-green-200 dark:border-gray-700 rounded-xl shadow-lg overflow-x-auto">
                <pre className="whitespace-pre text-slate-700 dark:text-green-400 font-mono text-xs leading-relaxed">{`a1b2c3d (HEAD -> main, origin/main) Add user authentication feature
f4g5h6i (origin/feature-auth) Fix login validation error
e7j8k9l Update dependencies and security patches
m3n4o5p Refactor user service for better performance`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Graph Format
              </h4>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 border border-purple-200 dark:border-gray-700 rounded-xl shadow-lg overflow-x-auto">
                <pre className="whitespace-pre text-slate-700 dark:text-green-400 font-mono text-xs leading-relaxed">{`* a1b2c3d (HEAD -> main, origin/main) Add user authentication feature
| * f4g5h6i (origin/feature-auth) Fix login validation error
| * g7h8i9j Add responsive design to auth pages
|/
* e7j8k9l Update dependencies and security patches
* m3n4o5p Refactor user service for better performance`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
