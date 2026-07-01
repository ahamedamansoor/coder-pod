'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Download, Terminal, Settings, CheckCircle, AlertCircle, Shield, Zap, 
  Copy, ArrowRight, Lock, Database, ChevronRight, Globe, Cpu, Code, Info, Table
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function MysqlInstallation() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="space-y-8 overflow-x-hidden">
      {/* Header */}
      <PageHeader
        icon={Download}
        category="MySQL · Fundamentals"
        title="MySQL Installation & Setup"
        description="Complete guide to install and configure MySQL on any platform"
        colorTheme="blue"
      />

      {/* Quick Overview */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Quick Overview</CardTitle>
              <CardDescription className="text-base">Why MySQL and what you need to get started</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">MySQL is Cross-Platform</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              MySQL runs on Windows, macOS, and Linux, making it the most versatile open-source database solution available today.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Cross-Platform</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Works on Windows, macOS, and Linux</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Cpu className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Lightweight</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Minimal system requirements</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Secure</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Built-in security features</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Settings className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Prerequisites</CardTitle>
              <CardDescription className="text-base">What you need before installing MySQL</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Admin Access</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Administrator or root privileges required</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Internet Connection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">For downloading MySQL packages</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Disk Space</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Minimum 500MB free space</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Command Line</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Basic terminal knowledge helpful</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Installation */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Download className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Platform Installation</CardTitle>
              <CardDescription className="text-base">Choose your operating system and follow the detailed steps</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Choose the Right Version</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              We recommend MySQL 8.0+ for production use. It includes improved performance, security features, and JSON support. For development, MySQL 8.0 or 5.7 are both suitable.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-6 overflow-x-auto">
            {/* Windows */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 min-w-[300px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-600">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Windows</h3>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">Recommended</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">Method 1: Installer</span>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">Recommended</Badge>
                  </div>
                  <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">1.</span>
                      <span>Download MySQL Installer from <a href="https://dev.mysql.com/downloads/installer/" className="text-blue-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">dev.mysql.com</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">2.</span>
                      <span>Run as Administrator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">3.</span>
                      <span>Choose "Developer Default" setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">4.</span>
                      <span>Set root password during config</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">5.</span>
                      <span>Complete installation</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">Method 2: ZIP Archive</span>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">Advanced</Badge>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Download ZIP, extract, and configure manually</p>
                </div>

                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-xs mb-2">💡 Pro Tips</h4>
                  <ul className="space-y-1 text-xs text-blue-800 dark:text-blue-200">
                    <li>• Use web installer for faster setup</li>
                    <li>• Enable Windows service for auto-start</li>
                    <li>• Configure firewall to allow port 3306</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* macOS */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 min-w-[300px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-green-600">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">macOS</h3>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Homebrew</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">Method 1: Homebrew</span>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">Recommended</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        {copiedCommand === '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                      </button>
                      <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                        <div className="text-slate-400 whitespace-nowrap"># Install Homebrew</div>
                        <div className="break-all">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</div>
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard('brew install mysql')}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        {copiedCommand === 'brew install mysql' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                      </button>
                      <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                        <div className="text-slate-400 whitespace-nowrap"># Install MySQL</div>
                        <div>brew install mysql</div>
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard('brew services start mysql')}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        {copiedCommand === 'brew services start mysql' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                      </button>
                      <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                        <div className="text-slate-400 whitespace-nowrap"># Start MySQL</div>
                        <div>brew services start mysql</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 text-xs mb-2">💡 Pro Tips</h4>
                  <ul className="space-y-1 text-xs text-green-800 dark:text-green-200">
                    <li>• Use brew services for easy management</li>
                    <li>• Add MySQL to PATH automatically</li>
                    <li>• For Apple Silicon, use Rosetta if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Linux */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 min-w-[300px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-600">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">Linux</h3>
                  <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Package Manager</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">Ubuntu/Debian</span>
                    <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs">APT</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard('sudo apt update && sudo apt install mysql-server')}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        {copiedCommand === 'sudo apt update && sudo apt install mysql-server' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                      </button>
                      <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                        <div className="text-slate-400 whitespace-nowrap"># Install MySQL</div>
                        <div>sudo apt update && sudo apt install mysql-server</div>
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard('sudo systemctl start mysql && sudo systemctl enable mysql')}
                        className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        {copiedCommand === 'sudo systemctl start mysql && sudo systemctl enable mysql' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                      </button>
                      <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                        <div className="text-slate-400 whitespace-nowrap"># Start MySQL Service</div>
                        <div>sudo systemctl start mysql && sudo systemctl enable mysql</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 text-xs mb-2">💡 Pro Tips</h4>
                  <ul className="space-y-1 text-xs text-purple-800 dark:text-purple-200">
                    <li>• Use systemctl for service management</li>
                    <li>• Check status with: sudo systemctl status mysql</li>
                    <li>• Configure firewall with ufw if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post-Installation Setup */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Post-Installation Setup</CardTitle>
              <CardDescription className="text-base">Secure your MySQL installation and verify it's working</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Secure Installation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Run security script to configure basic security settings</p>
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard('mysql_secure_installation')}
                    className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    {copiedCommand === 'mysql_secure_installation' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                  </button>
                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                    <div>mysql_secure_installation</div>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>Set root password</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>Remove anonymous users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>Disallow root remote login</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>Remove test database</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Test Connection
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Verify your MySQL installation is working correctly</p>
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard('mysql -u root -p')}
                    className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    {copiedCommand === 'mysql -u root -p' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                  </button>
                  <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                    <div className="text-slate-400 whitespace-nowrap"># Connect to MySQL</div>
                    <div>mysql -u root -p</div>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>Enter root password when prompted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>You should see MySQL prompt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Checklist */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Verification Checklist</CardTitle>
              <CardDescription className="text-base">Ensure your MySQL installation is complete and working</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">MySQL Service Running</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Check if MySQL service is active</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Can Connect as Root</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Successfully login with root credentials</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Port 3306 Accessible</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">MySQL listening on default port</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Configuration Valid</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">my.cnf configuration file exists</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Best Practices</CardTitle>
              <CardDescription className="text-base">Follow these recommendations for optimal MySQL performance and security</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Security First</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always secure your MySQL installation immediately after setup. Change default passwords, remove anonymous users, and restrict remote access.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Security Configuration
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Always set strong root passwords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Remove anonymous users and test databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Disable root remote login for production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use SSL/TLS for remote connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Regularly update MySQL to latest version</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Performance Optimization
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Configure appropriate buffer pool size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Enable query cache for read-heavy workloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use InnoDB storage engine for transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Regularly backup your databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Monitor slow queries and optimize indexes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Command Line Tools */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Terminal className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">MySQL Command Line Tools</CardTitle>
              <CardDescription className="text-base">Essential MySQL commands for database management</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">MySQL Client</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Access the MySQL command line client by running <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">mysql -u root -p</code> and entering your password when prompted.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Database Operations */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Database Operations
                </h3>
                <div className="space-y-3">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('SHOW DATABASES;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'SHOW DATABASES;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Show all databases</div>
                      <div>SHOW DATABASES;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('CREATE DATABASE my_database;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'CREATE DATABASE my_database;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Create a database</div>
                      <div>CREATE DATABASE my_database;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('USE my_database;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'USE my_database;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Select database to use</div>
                      <div>USE my_database;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('DROP DATABASE my_database;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'DROP DATABASE my_database;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Delete a database (use with caution)</div>
                      <div>DROP DATABASE my_database;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Operations */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Table className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Table Operations
                </h3>
                <div className="space-y-3">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('SHOW TABLES;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'SHOW TABLES;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Show all tables</div>
                      <div>SHOW TABLES;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE\n);')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE\n);' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Create a table</div>
                      <div>CREATE TABLE users (</div>
                      <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                      <div className="pl-4">name VARCHAR(100) NOT NULL,</div>
                      <div className="pl-4">email VARCHAR(255) UNIQUE</div>
                      <div>);</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('DESCRIBE users;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'DESCRIBE users;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Show table structure</div>
                      <div>DESCRIBE users;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('DROP TABLE users;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'DROP TABLE users;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Delete a table (use with caution)</div>
                      <div>DROP TABLE users;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* User Management */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  User Management
                </h3>
                <div className="space-y-3">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('CREATE USER \'newuser\'@\'localhost\' IDENTIFIED BY \'password\';')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'CREATE USER \'newuser\'@\'localhost\' IDENTIFIED BY \'password\';' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Create a new user</div>
                      <div>CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('GRANT ALL PRIVILEGES ON my_database.* TO \'newuser\'@\'localhost\';')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'GRANT ALL PRIVILEGES ON my_database.* TO \'newuser\'@\'localhost\';' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Grant all privileges on database</div>
                      <div>GRANT ALL PRIVILEGES ON my_database.* TO 'newuser'@'localhost';</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('FLUSH PRIVILEGES;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'FLUSH PRIVILEGES;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Reload privileges</div>
                      <div>FLUSH PRIVILEGES;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('SHOW GRANTS FOR \'newuser\'@\'localhost\';')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'SHOW GRANTS FOR \'newuser\'@\'localhost\';' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Show user privileges</div>
                      <div>SHOW GRANTS FOR 'newuser'@'localhost';</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Operations */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  Data Operations
                </h3>
                <div className="space-y-3">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('INSERT INTO users (name, email) VALUES (\'John Doe\', \'john@example.com\');')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'INSERT INTO users (name, email) VALUES (\'John Doe\', \'john@example.com\');' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Insert data</div>
                      <div>INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('SELECT * FROM users;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'SELECT * FROM users;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Select all data</div>
                      <div>SELECT * FROM users;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('UPDATE users SET email = \'newemail@example.com\' WHERE id = 1;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'UPDATE users SET email = \'newemail@example.com\' WHERE id = 1;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Update data</div>
                      <div>UPDATE users SET email = 'newemail@example.com' WHERE id = 1;</div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard('DELETE FROM users WHERE id = 1;')}
                      className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      {copiedCommand === 'DELETE FROM users WHERE id = 1;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    </button>
                    <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400 whitespace-nowrap">-- Delete data</div>
                      <div>DELETE FROM users WHERE id = 1;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Issues */}
      <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 via-white to-pink-50/50 dark:from-red-950/20 dark:via-gray-900 dark:to-pink-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Common Issues & Solutions</CardTitle>
              <CardDescription className="text-base">Troubleshoot typical MySQL installation problems</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">Access Denied</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">"Access denied for user 'root'@'localhost'"</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Solution:</span> Reset root password or check credentials
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">Connection Failed</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">"Can't connect to MySQL server"</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Solution:</span> Check service status and firewall
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">Port Already in Use</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">"Port 3306 already in use"</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Solution:</span> Stop conflicting services or change port
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">Permission Denied</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Permission errors during installation</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Solution:</span> Run installer with sudo/admin rights
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      </div>
  );
}
