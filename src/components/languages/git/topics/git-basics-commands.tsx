'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { GitBranch, Terminal, Plus, Save, Eye, GitCommit, GitMerge, GitPullRequest, Clock, History, CheckCircle, AlertTriangle, Code, FolderOpen, GitFork, GitCompare } from 'lucide-react';

interface GitTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function GitBasicsCommands({ onOpenWebPlayground }: GitTopicProps) {
  const [activeCommand, setActiveCommand] = useState<string>('');

  const commands = [
    {
      id: 'init',
      name: 'git init',
      description: 'Initialize a new Git repository',
      usage: 'git init [directory-name]',
      example: 'git init my-project',
      icon: FolderOpen,
      color: 'blue',
      purpose: 'Creates a new Git repository in the current directory or specified directory'
    },
    {
      id: 'add',
      name: 'git add',
      description: 'Add files to the staging area',
      usage: 'git add [file-name]',
      example: 'git add app.js',
      icon: Plus,
      color: 'green',
      purpose: 'Moves changes from working directory to staging area for commit'
    },
    {
      id: 'commit',
      name: 'git commit',
      description: 'Save changes to repository',
      usage: 'git commit -m "message"',
      example: 'git commit -m "Add user authentication"',
      icon: Save,
      color: 'purple',
      purpose: 'Creates a permanent snapshot of staged changes with descriptive message'
    },
    {
      id: 'status',
      name: 'git status',
      description: 'Show repository status',
      usage: 'git status',
      example: 'git status',
      icon: Eye,
      color: 'orange',
      purpose: 'Shows working directory and staging area status, including modified, staged, and untracked files'
    },
    {
      id: 'log',
      name: 'git log',
      description: 'Show commit history',
      usage: 'git log [options]',
      example: 'git log --oneline --graph',
      icon: History,
      color: 'indigo',
      purpose: 'Displays commit history with details like author, date, and commit message'
    },
    {
      id: 'clone',
      name: 'git clone',
      description: 'Clone remote repository',
      usage: 'git clone [repository-url]',
      example: 'git clone https://github.com/user/repo.git',
      icon: GitFork,
      color: 'pink',
      purpose: 'Creates a local copy of a remote repository including all history'
    }
  ];

  const advancedCommands = [
    {
      id: 'branch',
      name: 'git branch',
      description: 'Manage branches',
      usage: 'git branch [branch-name]',
      example: 'git branch feature-new',
      icon: GitBranch,
      color: 'cyan',
      purpose: 'Create, list, or delete branches for parallel development'
    },
    {
      id: 'checkout',
      name: 'git checkout',
      description: 'Switch branches or restore files',
      usage: 'git checkout [branch-name]',
      example: 'git checkout main',
      icon: GitCompare,
      color: 'teal',
      purpose: 'Switch between branches or restore files from previous commits'
    },
    {
      id: 'merge',
      name: 'git merge',
      description: 'Merge branches',
      usage: 'git merge [branch-name]',
      example: 'git merge feature-new',
      icon: GitMerge,
      color: 'emerald',
      purpose: 'Combine changes from one branch into another'
    },
    {
      id: 'pull',
      name: 'git pull',
      description: 'Fetch and merge remote changes',
      usage: 'git pull [remote] [branch]',
      example: 'git pull origin main',
      icon: GitPullRequest,
      color: 'rose',
      purpose: 'Fetch changes from remote repository and merge into current branch'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-900 dark:text-blue-100', border: 'border-blue-200 dark:border-blue-700', icon: 'text-blue-600 dark:text-blue-400' },
      green: { bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-900 dark:text-green-100', border: 'border-green-200 dark:border-green-700', icon: 'text-green-600 dark:text-green-400' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-900 dark:text-purple-100', border: 'border-purple-200 dark:border-purple-700', icon: 'text-purple-600 dark:text-purple-400' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-900 dark:text-orange-100', border: 'border-orange-200 dark:border-orange-700', icon: 'text-orange-600 dark:text-orange-400' },
      indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-900 dark:text-indigo-100', border: 'border-indigo-200 dark:border-indigo-700', icon: 'text-indigo-600 dark:text-indigo-400' },
      pink: { bg: 'bg-pink-50 dark:bg-pink-950/30', text: 'text-pink-900 dark:text-pink-100', border: 'border-pink-200 dark:border-pink-700', icon: 'text-pink-600 dark:text-pink-400' },
      cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-900 dark:text-cyan-100', border: 'border-cyan-200 dark:border-cyan-700', icon: 'text-cyan-600 dark:text-cyan-400' },
      teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', text: 'text-teal-900 dark:text-teal-100', border: 'border-teal-200 dark:border-teal-700', icon: 'text-teal-600 dark:text-teal-400' },
      emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-900 dark:text-emerald-100', border: 'border-emerald-200 dark:border-emerald-700', icon: 'text-emerald-600 dark:text-emerald-400' },
      rose: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-900 dark:text-rose-100', border: 'border-rose-200 dark:border-rose-700', icon: 'text-rose-600 dark:text-rose-400' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Terminal}
        category="Git & GitHub · Git Basics"
        title="Essential Git Commands"
        description="Master the fundamental Git commands you'll use every day. Learn how to initialize repositories, track changes, and manage your project history."
        colorTheme="purple"
      />

      {/* Section 1: Why Learn Git Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <Code className="w-7 h-7" />
            Why Master Git Commands?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding Git commands gives you complete control over your version control workflow and enables powerful development practices.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100">Full Control</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Command line gives you access to all Git features and options without limitations.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <Clock className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
              <h4 className="font-bold text-lg text-green-900 dark:text-green-100">Speed & Efficiency</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Commands are faster than GUI tools and can be automated in scripts.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <GitBranch className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100">Universal Skill</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Git commands work the same across all operating systems and development environments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Basic Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <Terminal className="w-7 h-7" />
            Core Git Commands
          </CardTitle>
          <CardDescription className="text-base">
            Click on any command below to see detailed information and examples.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {commands.map((cmd) => {
              const colors = getColorClasses(cmd.color);
              const Icon = cmd.icon;
              
              return (
                <div
                  key={cmd.id}
                  onClick={() => setActiveCommand(activeCommand === cmd.id ? '' : cmd.id)}
                  className={`p-5 ${colors.bg} rounded-xl border ${colors.border} cursor-pointer transition-all hover:shadow-lg ${
                    activeCommand === cmd.id ? 'ring-2 ring-offset-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-6 h-6 ${colors.icon} mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${colors.text} mb-1`}>{cmd.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cmd.description}</p>
                      
                      {activeCommand === cmd.id && (
                        <div className="mt-4 space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Purpose:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{cmd.purpose}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Usage:</h4>
                            <div className="p-2 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400">
                              {cmd.usage}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Example:</h4>
                            <div className="p-2 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded font-mono text-sm">
                              {cmd.example}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          Essential
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Daily Use
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Advanced Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <GitBranch className="w-7 h-7" />
            Branching & Collaboration Commands
          </CardTitle>
          <CardDescription className="text-base">
            Commands for managing branches and working with remote repositories.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {advancedCommands.map((cmd) => {
              const colors = getColorClasses(cmd.color);
              const Icon = cmd.icon;
              
              return (
                <div
                  key={cmd.id}
                  onClick={() => setActiveCommand(activeCommand === cmd.id ? '' : cmd.id)}
                  className={`p-5 ${colors.bg} rounded-xl border ${colors.border} cursor-pointer transition-all hover:shadow-lg ${
                    activeCommand === cmd.id ? 'ring-2 ring-offset-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-6 h-6 ${colors.icon} mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${colors.text} mb-1`}>{cmd.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cmd.description}</p>
                      
                      {activeCommand === cmd.id && (
                        <div className="mt-4 space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Purpose:</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{cmd.purpose}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Usage:</h4>
                            <div className="p-2 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400">
                              {cmd.usage}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">Example:</h4>
                            <div className="p-2 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded font-mono text-sm">
                              {cmd.example}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          Advanced
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Collaboration
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Command Workflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <GitCommit className="w-7 h-7" />
            Typical Git Workflow
          </CardTitle>
          <CardDescription className="text-base">
            Learn the sequence of commands you'll use most frequently in your daily development.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              This workflow represents the most common pattern you'll use when working on features or fixes.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Initialize Repository</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg font-mono text-sm text-green-700 dark:text-green-400">
                  $ git init
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Creates a new Git repository in your project directory.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Add Files to Staging</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg font-mono text-sm text-green-700 dark:text-green-400">
                  $ git add .<br/>
                  $ git add specific-file.js
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Stage your changes for commit. Use <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">.</code> for all files or specify individual files.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Commit Changes</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg font-mono text-sm text-green-700 dark:text-green-400">
                  $ git commit -m "Add user authentication feature"
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Save your staged changes with a descriptive commit message.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Check Status</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg font-mono text-sm text-green-700 dark:text-green-400">
                  $ git status
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Verify your working directory and staging area status.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">View History</h4>
                <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg font-mono text-sm text-green-700 dark:text-green-400">
                  $ git log --oneline
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Review your commit history and track changes over time.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Pro Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <AlertTriangle className="w-7 h-7" />
            Pro Tips & Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Essential tips to make your Git workflow more efficient and professional.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
              <h4 className="font-bold text-lg text-green-900 dark:text-green-100 mb-2">Commit Often</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Make small, frequent commits with clear messages. This makes it easier to track changes and revert if needed.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">Check Before Commit</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Always run <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">git status</code> and <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">git diff</code> before committing to ensure you're committing the right changes.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-2">Use Aliases</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Create aliases for frequently used commands: <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-xs">git config --global alias.st status</code>
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <History className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
              <h4 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-2">Write Clear Messages</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Use present tense, be specific, and keep the first line under 50 characters. Add details after a blank line if needed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
