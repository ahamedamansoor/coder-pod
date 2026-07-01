'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Terminal, Database, Zap, Shield, Star, Download, Code, 
  CheckCircle, ExternalLink, AlertCircle, Info, Crown, Lock 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function MysqlClientsTools() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Terminal}
        category="MySQL · Tools"
        title="MySQL Clients & Tools"
        description="Discover the best tools and clients for MySQL development and administration"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Database className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Why Use MySQL Clients?</CardTitle>
              <CardDescription className="text-base">Powerful tools enhance your MySQL workflow and productivity</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Essential for Development</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              MySQL clients provide intuitive interfaces, visual query builders, and powerful features that make database management much easier than command-line alone.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Productivity</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Faster development with GUI tools and shortcuts</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Security</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Secure connections and credential management</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Collaboration</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Team features and shared database connections</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top MySQL Clients */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Top MySQL Clients</CardTitle>
              <CardDescription className="text-base">Industry-standard tools for MySQL development</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* MySQL Workbench */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-2 border-orange-200 dark:border-orange-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-600">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100">MySQL Workbench</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">Official</Badge>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">Free</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://dev.mysql.com/downloads/workbench/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The official MySQL client from Oracle. Comprehensive tool for database administrators and developers with visual design, SQL development, and server administration.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Visual database design and modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>SQL development environment with syntax highlighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Server administration and configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Performance dashboard and query analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Data migration and backup tools</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Best For:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Database administrators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Enterprise development teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Users needing complete MySQL management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DBeaver */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-600">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">DBeaver</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">Universal</Badge>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">Free</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://dbeaver.io/download/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Universal database tool supporting all popular databases including MySQL. Feature-rich with ER diagrams, data transfer, and SQL development capabilities.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Support for 80+ database types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Visual ER diagrams and data modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Data comparison and synchronization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Advanced SQL editor with autocomplete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Cloud database connections</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Best For:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Developers working with multiple databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Cross-platform development teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Users needing data modeling tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TablePlus */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 border-2 border-cyan-200 dark:border-cyan-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-600">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-100">TablePlus</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700">Modern</Badge>
                    <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">Freemium</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://tableplus.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Modern, native database client with beautiful UI. Focus on simplicity and efficiency with powerful features like multiple tabs and query history.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Beautiful modern interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Multi-tab and multi-window support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Smart query builder and editor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Dark mode and customizable themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>SSH tunneling support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Best For:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>macOS users (native app)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Developers valuing UI/UX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Users needing lightweight client</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* phpMyAdmin */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-600">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">phpMyAdmin</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">Web-based</Badge>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">Free</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://www.phpmyadmin.net/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Popular web-based MySQL administration tool. Perfect for server management and shared hosting environments with no installation required on client machines.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Web-based interface (no install needed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Database creation and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>SQL query execution and browsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Import/export functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>User and privilege management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Best For:</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Web developers and PHP projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Shared hosting environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Quick server administration</span>
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
              <CardTitle className="text-2xl">Command Line Tools</CardTitle>
              <CardDescription className="text-base">Essential CLI tools for MySQL development and administration</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Powerful & Efficient</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Command line tools offer maximum performance and are essential for automation, scripting, and professional database administration.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Terminal className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">MySQL Client</h3>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">Built-in</Badge>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Standard command-line client included with MySQL installation. Perfect for quick queries and scripting.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Connect: <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">mysql -u root -p</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Execute SQL files: <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">mysql &lt; file.sql</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Batch operations and automation</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">mysqldump</h3>
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">Backup Tool</Badge>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Essential backup utility for creating database dumps and migrations. Standard for backup strategies.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Backup: <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">mysqldump -u root -p database &gt; backup.sql</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Restore: <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">mysql -u root -p database &lt; backup.sql</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Automated backup scripts</span>
                </li>
              </ul>
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
              <CardDescription className="text-base">Recommendations for choosing and using MySQL clients effectively</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Choosing the Right Client
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use MySQL Workbench for comprehensive administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Choose DBeaver for multi-database environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use TablePlus for modern UI and macOS users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>phpMyAdmin for web-based server management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>CLI tools for automation and scripting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Security Considerations
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Always use SSL/TLS for remote connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Never store passwords in plain text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use SSH tunneling for additional security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Regularly update client software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Limit remote access to trusted IPs only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
