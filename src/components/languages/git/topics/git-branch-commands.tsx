'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  GitBranch, 
  Terminal, 
  Plus, 
  Save, 
  Eye, 
  GitCommit, 
  GitMerge, 
  GitPullRequest, 
  Clock, 
  History, 
  CheckCircle, 
  AlertTriangle, 
  Code, 
  FolderOpen, 
  GitFork, 
  GitCompare,
  ArrowRight,
  Copy,
  Trash2,
  GitBranchPlus,
  Layers
} from 'lucide-react';

interface GitTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function GitBranchCommands({ onOpenWebPlayground }: GitTopicProps) {
  const [activeCommand, setActiveCommand] = useState<string>('');

  const branchCommands = [
    {
      id: 'branch',
      name: 'git branch',
      description: 'List, create, or delete branches',
      usage: 'git branch [branch-name]',
      example: 'git branch feature-auth',
      icon: GitBranch,
      color: 'blue',
      purpose: 'Creates a new branch or lists existing branches',
      variations: [
        { command: 'git branch', description: 'List all local branches' },
        { command: 'git branch -r', description: 'List all remote branches' },
        { command: 'git branch -a', description: 'List all local and remote branches' },
        { command: 'git branch -v', description: 'List branches with latest commit info' }
      ]
    },
    {
      id: 'checkout',
      name: 'git checkout',
      description: 'Switch branches or restore working tree files',
      usage: 'git checkout [branch-name]',
      example: 'git checkout develop',
      icon: GitFork,
      color: 'green',
      purpose: 'Switches to a different branch or restores files',
      variations: [
        { command: 'git checkout -b new-branch', description: 'Create and switch to new branch' },
        { command: 'git checkout -- file.txt', description: 'Restore file from last commit' },
        { command: 'git checkout .', description: 'Restore all files in working directory' }
      ]
    },
    {
      id: 'switch',
      name: 'git switch',
      description: 'Switch branches (modern alternative to checkout)',
      usage: 'git switch [branch-name]',
      example: 'git switch feature-ui',
      icon: Layers,
      color: 'purple',
      purpose: 'Switch to a different branch more safely than checkout',
      variations: [
        { command: 'git switch -c new-branch', description: 'Create and switch to new branch' },
        { command: 'git switch main', description: 'Switch to main branch' },
        { command: 'git switch --detach HEAD~1', description: 'Switch to a detached HEAD state' }
      ]
    },
    {
      id: 'merge',
      name: 'git merge',
      description: 'Merge branches together',
      usage: 'git merge [branch-name]',
      example: 'git merge feature-auth',
      icon: GitMerge,
      color: 'orange',
      purpose: 'Integrate changes from one branch into another',
      variations: [
        { command: 'git merge --no-ff feature', description: 'Merge without fast-forward' },
        { command: 'git merge --abort', description: 'Abort the current merge' },
        { command: 'git merge --continue', description: 'Continue the current merge after conflicts' }
      ]
    },
    {
      id: 'branch-delete',
      name: 'git branch -d',
      description: 'Delete a branch',
      usage: 'git branch -d [branch-name]',
      example: 'git branch -d old-feature',
      icon: Trash2,
      color: 'red',
      purpose: 'Delete a branch that has been merged',
      variations: [
        { command: 'git branch -D force-delete', description: 'Force delete branch (even if not merged)' },
        { command: 'git push origin --delete branch-name', description: 'Delete remote branch' },
        { command: 'git remote prune origin', description: 'Clean up deleted remote branches' }
      ]
    },
    {
      id: 'rebase',
      name: 'git rebase',
      description: 'Reapply commits on top of another base branch',
      usage: 'git rebase [base-branch]',
      example: 'git rebase main',
      icon: History,
      color: 'indigo',
      purpose: 'Move or combine series of commits to a new base',
      variations: [
        { command: 'git rebase --interactive HEAD~3', description: 'Interactive rebase of last 3 commits' },
        { command: 'git rebase --abort', description: 'Abort the current rebase' },
        { command: 'git rebase --continue', description: 'Continue the current rebase after conflicts' }
      ]
    }
  ];

  const workflows = [
    {
      title: '🌱 Create New Feature Branch',
      description: 'Standard workflow for starting new features',
      steps: [
        'git checkout main',
        'git pull origin main',
        'git checkout -b feature/user-authentication',
        'git add .',
        'git commit -m "feat: Add user authentication"',
        'git push -u origin feature/user-authentication'
      ],
      icon: Plus,
      color: 'green'
    },
    {
      title: '🔄 Sync Branch with Main',
      description: 'Keep your feature branch up to date',
      steps: [
        'git checkout feature-branch',
        'git fetch origin',
        'git rebase origin/main',
        'git push --force-with-lease origin feature-branch'
      ],
      icon: GitCompare,
      color: 'blue'
    },
    {
      title: '🔀 Merge Feature to Main',
      description: 'Safely merge completed features',
      steps: [
        'git checkout main',
        'git pull origin main',
        'git merge feature/user-authentication',
        'git push origin main',
        'git branch -d feature/user-authentication'
      ],
      icon: GitMerge,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-900 dark:text-blue-100', badge: 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200' },
      green: { bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-700', text: 'text-green-900 dark:text-green-100', badge: 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', border: 'border-purple-200 dark:border-purple-700', text: 'text-purple-900 dark:text-purple-100', badge: 'bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-700', text: 'text-orange-900 dark:text-orange-100', badge: 'bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200' },
      red: { bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-700', text: 'text-red-900 dark:text-red-100', badge: 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200' },
      indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', border: 'border-indigo-200 dark:border-indigo-700', text: 'text-indigo-900 dark:text-indigo-100', badge: 'bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Git Branch Commands"
        description="Master branch management with essential Git commands for creating, switching, merging, and managing branches."
        icon={GitBranch}
      />

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            Quick Reference
          </CardTitle>
          <CardDescription>
            Essential branch commands you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branchCommands.map((cmd) => {
              const colors = getColorClasses(cmd.color);
              const Icon = cmd.icon;
              return (
                <div
                  key={cmd.id}
                  className={`p-4 ${colors.bg} ${colors.border} border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    activeCommand === cmd.id ? 'ring-2 ring-offset-2 ring-offset-background ring-blue-500' : ''
                  }`}
                  onClick={() => setActiveCommand(activeCommand === cmd.id ? '' : cmd.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <Icon className={`w-5 h-5 ${colors.text.replace('text-', 'text-').replace('900', '600').replace('100', '400')}`} />
                    <Badge variant="secondary" className={colors.badge}>
                      {cmd.name}
                    </Badge>
                  </div>
                  <h3 className={`font-semibold ${colors.text} mb-1`}>{cmd.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cmd.description}</p>
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    {cmd.example}
                  </code>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Commands */}
      {activeCommand && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              {branchCommands.find(cmd => cmd.id === activeCommand)?.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const cmd = branchCommands.find(c => c.id === activeCommand);
              if (!cmd) return null;
              const colors = getColorClasses(cmd.color);
              const Icon = cmd.icon;
              
              return (
                <div className="space-y-4">
                  <div className={`p-4 ${colors.bg} ${colors.border} border rounded-lg`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-6 h-6 ${colors.text.replace('text-', 'text-').replace('900', '600').replace('100', '400')}`} />
                      <div>
                        <h3 className={`font-semibold ${colors.text}`}>{cmd.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{cmd.purpose}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Usage:</h4>
                        <code className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-2 rounded block">
                          {cmd.usage}
                        </code>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Example:</h4>
                        <code className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-2 rounded block">
                          {cmd.example}
                        </code>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Variations:</h4>
                        <div className="space-y-2">
                          {cmd.variations.map((variation, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <code className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm flex-shrink-0">
                                {variation.command}
                              </code>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{variation.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}

      {/* Common Workflows */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitFork className="w-5 h-5" />
            Common Branch Workflows
          </CardTitle>
          <CardDescription>
            Step-by-step guides for everyday branch operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {workflows.map((workflow, idx) => {
            const colors = getColorClasses(workflow.color);
            const Icon = workflow.icon;
            return (
              <div key={idx} className={`p-4 ${colors.bg} ${colors.border} border rounded-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${colors.text.replace('text-', 'text-').replace('900', '600').replace('100', '400')}`} />
                  <div>
                    <h3 className={`font-semibold ${colors.text}`}>{workflow.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{workflow.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {workflow.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300">
                        {stepIdx + 1}
                      </div>
                      <code className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-2 rounded flex-1 text-sm">
                        {step}
                      </code>
                      {stepIdx < workflow.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Branch Management Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive branch names (feature/user-auth, bugfix/login-issue)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Keep branches focused on single features or fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Regularly sync with main branch to avoid conflicts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Delete branches after merging to keep repository clean</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use pull requests for code review before merging</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-red-900 dark:text-red-100 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't work directly on main/master branch</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't create overly long-lived branches</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't force push to shared branches unless necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't leave stale branches in the repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't rebase public/shared branches</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Detached HEAD state:</strong> Use <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">git checkout main</code> or <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">git switch main</code> to get back to a normal state.
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Merge conflicts:</strong> Resolve conflicts in affected files, then use <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">git add .</code> and <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">git commit</code> to complete the merge.
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Branch not found:</strong> Use <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">git fetch origin</code> to update remote branches, then try again.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
