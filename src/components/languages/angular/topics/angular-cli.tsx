'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  Terminal,
  Zap,
  Lightbulb,
  CheckCircle2,
  Rocket,
  FileCode,
  Settings,
  Play,
  Package,
  FolderTree,
  Code,
  Wrench,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function AngularCLI() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Terminal}
        category="Angular · CLI & Tooling"
        title="Angular CLI (Command Line Interface)"
        description="Master the powerful Angular CLI - your all-in-one tool for creating, developing, testing, and deploying Angular applications with ease."
        colorTheme="red"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">What is Angular CLI?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Angular CLI (Command Line Interface) is a powerful command-line tool that makes it easy to create, develop, test, and deploy Angular applications. Think of it as your personal assistant for Angular development - it handles all the complex setup and configuration so you can focus on building your app.
              </p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Quick Start</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Create a new app in seconds</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Best Practices</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Built-in optimizations</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Zero Config</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Works out of the box</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Installing Angular CLI
          </CardTitle>
          <CardDescription className="text-base">
            Get started by installing Angular CLI globally on your system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Prerequisites</AlertTitle>
            <AlertDescription>
              You need <strong>Node.js 18.x or higher</strong> installed. Check with <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">node --version</code>
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Install Angular CLI"
              description="Install the CLI globally using npm"
              code={`npm install -g @angular/cli

# Verify installation
ng version`}
              output={[
                'npm install -g @angular/cli',
                '// Installing...',
                '✓ Successfully installed @angular/cli@17.0.0',
                '',
                'ng version',
                '// Output:',
                'Angular CLI: 17.0.0',
                'Node: 18.17.0',
                'Package Manager: npm 9.6.7',
              ]}
              language="bash"
              colorTheme="blue"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-700 dark:text-green-300">Global Installation</h5>
                </div>
                <p className="text-xs text-muted-foreground">
                  The <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/20 rounded">-g</code> flag installs CLI globally, making the <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/20 rounded">ng</code> command available everywhere
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Update CLI</h5>
                </div>
                <p className="text-xs text-muted-foreground">
                  Run <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/20 rounded">npm update -g @angular/cli</code> to get the latest version
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Essential Commands */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Terminal className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Essential CLI Commands
          </CardTitle>
          <CardDescription className="text-base">
            The most important commands you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* ng new */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <code className="text-red-600 dark:text-red-400">ng new</code>
                    <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800">Most Used</Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Creates a new Angular application with all necessary files and configurations
                  </p>
                  
                  <CodeSnippetWithOutput
                    title="Create New App"
                    code={`ng new my-app

# With options
ng new my-app --routing --style=scss`}
                    output={[
                      '? Would you like to add Angular routing? Yes',
                      '? Which stylesheet format? SCSS',
                      '✓ Packages installed successfully.',
                      '✓ Successfully created my-app',
                    ]}
                    language="bash"
                    colorTheme="red"
                  />

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Creates folder
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Installs dependencies
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Initializes git
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* ng serve */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <code className="text-blue-600 dark:text-blue-400">ng serve</code>
                    <Badge variant="outline" className="text-xs border-blue-200 dark:border-blue-800">Development</Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Starts the development server with live reload
                  </p>
                  
                  <CodeSnippetWithOutput
                    title="Start Dev Server"
                    code={`ng serve

# Open browser automatically
ng serve --open

# Custom port
ng serve --port 4300`}
                    output={[
                      '✓ Browser application bundle generation complete.',
                      '** Angular Live Development Server is listening on localhost:4200 **',
                      '✓ Compiled successfully.',
                    ]}
                    language="bash"
                    colorTheme="blue"
                  />

                  <Alert className="mt-3">
                    <Zap className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Access your app at <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/20 rounded">http://localhost:4200</code>. Changes auto-reload!
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>

            {/* ng generate */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <code className="text-green-600 dark:text-green-400">ng generate</code>
                    <Badge variant="outline" className="text-xs border-green-200 dark:border-green-800">Code Generation</Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Generates components, services, and other Angular elements
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <CodeSnippetWithOutput
                      title="Generate Component"
                      code={`ng generate component header
# Short form
ng g c header`}
                      language="bash"
                      colorTheme="emerald"
                    />
                    
                    <CodeSnippetWithOutput
                      title="Generate Service"
                      code={`ng generate service auth
# Short form
ng g s auth`}
                      language="bash"
                      colorTheme="emerald"
                    />
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">Common Schematics:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>• <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">component</code> (c)</div>
                      <div>• <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">service</code> (s)</div>
                      <div>• <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">module</code> (m)</div>
                      <div>• <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">directive</code> (d)</div>
                      <div>• <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">pipe</code> (p)</div>
                      <div>• <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">guard</code> (g)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ng build */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <code className="text-purple-600 dark:text-purple-400">ng build</code>
                    <Badge variant="outline" className="text-xs border-purple-200 dark:border-purple-800">Production</Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Compiles your app into an output directory for deployment
                  </p>
                  
                  <CodeSnippetWithOutput
                    title="Build for Production"
                    code={`ng build

# Production build (optimized)
ng build --configuration production`}
                    output={[
                      '✓ Browser application bundle generation complete.',
                      '✓ Copying assets complete.',
                      '✓ Index html generation complete.',
                      '',
                      'Initial Chunk Files | Names         | Raw Size',
                      'main.js         | main         | 234.56 kB',
                      'polyfills.js    | polyfills    |  33.01 kB',
                      'styles.css      | styles       |  15.23 kB',
                      '',
                      'Build at: 2024-12-09T07:41:23.456Z',
                      'Output: dist/my-app/',
                    ]}
                    language="bash"
                    colorTheme="purple"
                  />

                  <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">Production Optimizations:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Minification</Badge>
                      <Badge variant="outline" className="text-xs">Tree-shaking</Badge>
                      <Badge variant="outline" className="text-xs">AOT Compilation</Badge>
                      <Badge variant="outline" className="text-xs">Bundle Optimization</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ng test */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <code className="text-amber-600 dark:text-amber-400">ng test</code>
                    <Badge variant="outline" className="text-xs border-amber-200 dark:border-amber-800">Testing</Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Runs unit tests using Karma and Jasmine
                  </p>
                  
                  <CodeSnippetWithOutput
                    title="Run Tests"
                    code={`ng test

# Run once (CI mode)
ng test --watch=false`}
                    output={[
                      'Chrome Headless 120.0.0.0 (Mac OS 10.15.7)',
                      'AppComponent',
                      '  ✓ should create the app',
                      '  ✓ should have title "my-app"',
                      '  ✓ should render title',
                      '',
                      'TOTAL: 3 SUCCESS',
                    ]}
                    language="bash"
                    colorTheme="amber"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderTree className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Generated Project Structure
          </CardTitle>
          <CardDescription className="text-base">
            Understanding what Angular CLI creates for you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Organized by Design</AlertTitle>
            <AlertDescription>
              Angular CLI creates a well-organized project structure following best practices and conventions.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <CodeSnippetWithOutput
                title="Project Root Structure"
                code={`my-app/
├── src/                  # Source files
│   ├── app/             # App components
│   ├── assets/          # Static assets
│   ├── index.html       # Main HTML
│   ├── main.ts          # App entry point
│   └── styles.css       # Global styles
├── node_modules/        # Dependencies
├── angular.json         # CLI config
├── package.json         # NPM packages
└── tsconfig.json        # TypeScript config`}
                language="bash"
                colorTheme="emerald"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/10 dark:to-green-950/10 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h5 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <FolderTree className="w-4 h-4" />
                  Key Folders
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">src/app/</code>
                      <p className="text-xs text-muted-foreground mt-1">Your application code lives here</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">src/assets/</code>
                      <p className="text-xs text-muted-foreground mt-1">Images, fonts, static files</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">node_modules/</code>
                      <p className="text-xs text-muted-foreground mt-1">All npm dependencies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Settings className="w-4 h-4" />
                  Config Files
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <div>
                      <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">angular.json</code>
                      <p className="text-xs text-muted-foreground mt-1">CLI configuration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <div>
                      <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">tsconfig.json</code>
                      <p className="text-xs text-muted-foreground mt-1">TypeScript settings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <div>
                      <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">package.json</code>
                      <p className="text-xs text-muted-foreground mt-1">Dependencies & scripts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CLI Options & Flags */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Useful CLI Options
          </CardTitle>
          <CardDescription className="text-base">
            Customize CLI behavior with flags and options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h5 className="font-semibold mb-3 text-sm">Component Generation Options</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Code className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded">--skip-tests</code>
                    <p className="text-muted-foreground mt-1">Don't create test files</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Code className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded">--inline-style</code>
                    <p className="text-muted-foreground mt-1">Styles in component file</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Code className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded">--inline-template</code>
                    <p className="text-muted-foreground mt-1">Template in component file</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Code className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded">--flat</code>
                    <p className="text-muted-foreground mt-1">No dedicated folder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h5 className="font-semibold mb-3 text-sm">Serve Options</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Play className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">--open</code>
                    <p className="text-muted-foreground mt-1">Auto-open browser</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Play className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">--port 4300</code>
                    <p className="text-muted-foreground mt-1">Custom port</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Play className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">--ssl</code>
                    <p className="text-muted-foreground mt-1">Serve over HTTPS</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Play className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">--host 0.0.0.0</code>
                    <p className="text-muted-foreground mt-1">Access from network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latest Features */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            New in Angular 17 CLI
          </CardTitle>
          <CardDescription className="text-base">
            Latest features and improvements in the Angular CLI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-semibold">Standalone Components Default</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                New projects use standalone components by default - simpler, more modern approach
              </p>
              <CodeSnippetWithOutput
                title="Generate Standalone"
                code={`ng g c my-component
# Creates standalone by default!`}
                language="bash"
                colorTheme="emerald"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-semibold">esbuild & Vite</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Faster builds with modern tooling - up to 2x faster development builds
              </p>
              <div className="flex gap-2">
                <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">esbuild</Badge>
                <Badge className="bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300">Vite</Badge>
                <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">Fast HMR</Badge>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-semibold">Control Flow Syntax</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                New built-in syntax for @if, @for, @switch - more intuitive than directives
              </p>
              <Badge variant="outline" className="text-xs">Better DX</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-semibold">Improved Schematics</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Better code generation with modern patterns and best practices baked in
              </p>
              <Badge variant="outline" className="text-xs">Auto-optimized</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help & Tips */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 border-2 border-amber-200 dark:border-amber-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-amber-600 dark:text-amber-400">Pro Tips for CLI Mastery</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Use <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">ng help</code></p>
                      <p className="text-xs text-muted-foreground">Get help for any command: <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">ng help generate</code></p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Dry Run First</p>
                      <p className="text-xs text-muted-foreground">Add <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">--dry-run</code> to preview changes without actually creating files</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Save Your Preferences</p>
                      <p className="text-xs text-muted-foreground">Set defaults in <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">angular.json</code> to avoid typing flags repeatedly</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Check CLI Version</p>
                      <p className="text-xs text-muted-foreground">Run <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">ng version</code> to see all installed versions and check for updates</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="mt-4">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Quick Reference</AlertTitle>
                <AlertDescription className="text-xs">
                  Bookmark the official docs: <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded">angular.io/cli</code> for complete command reference
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
