'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { GitBranch, Download, Terminal, CheckCircle, AlertTriangle, Monitor, Apple, Code } from 'lucide-react';

interface GitTopicProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function GitInstallation({ onOpenWebPlayground }: GitTopicProps) {
  const [selectedOS, setSelectedOS] = useState<string>('');

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Download}
        category="Git & GitHub · Getting Started"
        title="Installing Git"
        description="Get Git up and running on your machine. Follow our step-by-step guide for your operating system and start your version control journey!"
        colorTheme="green"
      />

      {/* Section 1: Why Install Git */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <GitBranch className="w-7 h-7" />
            Why Install Git?
          </CardTitle>
          <CardDescription className="text-base">
            Git is the foundation of modern software development. Installing it gives you access to powerful version control capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <Terminal className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
              <h4 className="font-bold text-lg text-green-900 dark:text-green-100">Command Line Power</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Access Git's full capabilities through command line interface for maximum control and automation.
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100">IDE Integration</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Seamlessly integrate with VS Code, IntelliJ, and other development environments for enhanced productivity.
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <Download className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100">Free & Open Source</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Completely free to use with no restrictions. Join millions of developers using Git worldwide.
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
              <h4 className="font-bold text-lg text-orange-900 dark:text-orange-100">Industry Standard</h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Essential skill for developers. Master Git and open doors to countless opportunities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Choose Your Operating System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Monitor className="w-7 h-7" />
            Choose Your Operating System
          </CardTitle>
          <CardDescription className="text-base">
            Select your operating system below to see specific installation instructions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedOS('windows')}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedOS === 'windows'
                  ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-green-300'
              }`}
            >
              <Monitor className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-lg mb-1">Windows</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Windows 10/11</p>
            </button>
            
            <button
              onClick={() => setSelectedOS('macos')}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedOS === 'macos'
                  ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-green-300'
              }`}
            >
              <Apple className="w-8 h-8 mx-auto mb-3 text-gray-800 dark:text-gray-200" />
              <h3 className="font-bold text-lg mb-1">macOS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">macOS 10.15+</p>
            </button>
            
            <button
              onClick={() => setSelectedOS('linux')}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedOS === 'linux'
                  ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-green-300'
              }`}
            >
              <Terminal className="w-8 h-8 mx-auto mb-3 text-orange-600 dark:text-orange-400" />
              <h3 className="font-bold text-lg mb-1">Linux</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ubuntu, Debian, Fedora</p>
            </button>
          </div>

          {/* Windows Installation */}
          {selectedOS === 'windows' && (
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <h3 className="font-bold text-xl mb-4 text-blue-900 dark:text-blue-100">📦 Installing Git on Windows</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Download Git for Windows</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Visit <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">git-scm.com/download/win</code> and download the installer.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Run the Installer</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Double-click the downloaded .exe file and follow the installation wizard.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Choose Default Options</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Accept the default settings during installation. Most importantly, select "Git from the command line and also from 3rd-party software".
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Verify Installation</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Open Command Prompt or PowerShell and run:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ git --version
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* macOS Installation */}
          {selectedOS === 'macos' && (
            <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/20 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">🍎 Installing Git on macOS</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Using Homebrew (Recommended)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      If you have Homebrew installed, run:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ brew install git
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Download Directly</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      Visit <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">git-scm.com/download/mac</code> and download the installer.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Install the DMG</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      Open the downloaded .dmg file and follow the installation instructions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Verify Installation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      Open Terminal and run:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ git --version
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Linux Installation */}
          {selectedOS === 'linux' && (
            <div className="mt-6 p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <h3 className="font-bold text-xl mb-4 text-orange-900 dark:text-orange-100">🐧 Installing Git on Linux</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Ubuntu/Debian</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                      Run the following commands:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ sudo apt update<br/>
                      $ sudo apt install git
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Fedora/CentOS</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                      Run the following commands:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ sudo dnf install git<br/>
                      # or for older systems:<br/>
                      $ sudo yum install git
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Arch Linux</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                      Run:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ sudo pacman -S git
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Verify Installation</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                      Open your terminal and run:
                    </p>
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                      $ git --version
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Section 3: Initial Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Terminal className="w-7 h-7" />
            Initial Git Configuration
          </CardTitle>
          <CardDescription className="text-base">
            After installing Git, configure your identity to properly attribute your commits.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This configuration is required before you can make your first commit. Your name and email will be visible in commit history.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Set Your Name</h4>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git config --global user.name "Your Name"
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                Replace "Your Name" with your actual name. This will appear in all your commits.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Set Your Email</h4>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git config --global user.email "your.email@example.com"
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                Use the same email you use for GitHub or other Git services.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Verify Configuration</h4>
              <div className="p-3 bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 rounded-lg font-mono text-sm">
                $ git config --list
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
                This command shows all your Git settings. Check that your name and email are correct.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">🎉 Congratulations!</h4>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              You've successfully installed and configured Git! You're now ready to start your version control journey. Check out our next guide on creating your first repository.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
