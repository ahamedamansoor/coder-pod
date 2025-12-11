'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  FolderTree,
  FileCode,
  Lightbulb,
  CheckCircle2,
  Settings,
  Package,
  Layers,
  FileJson,
  FileText,
  Folder,
  File,
  Code,
  Wrench,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function AngularProjectStructure() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FolderTree}
        category="Angular · Project Setup"
        title="Angular Project Structure"
        description="Understanding the complete file and folder organization of an Angular project, from configuration files to application architecture."
        colorTheme="red"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <FolderTree className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">Why Project Structure Matters</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Angular CLI creates a well-organized project structure that follows best practices and industry standards. Understanding this structure helps you navigate your project efficiently, know where to place new code, and maintain a scalable application.
              </p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Organized</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Clear separation of concerns</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Scalable</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Easy to grow your app</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Standard</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Industry best practices</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Project Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderTree className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Complete Project Structure
          </CardTitle>
          <CardDescription className="text-base">
            Overview of all folders and files in a fresh Angular project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Created by CLI</AlertTitle>
            <AlertDescription>
              When you run <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">ng new my-app</code>, Angular CLI automatically creates this entire structure for you!
            </AlertDescription>
          </Alert>

          <CodeSnippetWithOutput
            title="Full Project Tree"
            description="Complete folder and file structure of an Angular 17 project"
            code={`my-app/
├── .vscode/                 # VS Code settings
│   ├── extensions.json      # Recommended extensions
│   └── tasks.json           # Task configurations
│
├── node_modules/            # All dependencies (don't touch!)
│
├── src/                     # 🎯 Your application source code
│   ├── app/                 # Main application folder
│   │   ├── app.component.ts        # Root component
│   │   ├── app.component.html      # Root template
│   │   ├── app.component.css       # Root styles
│   │   ├── app.component.spec.ts   # Root tests
│   │   ├── app.config.ts           # App configuration
│   │   └── app.routes.ts           # Routing config
│   │
│   ├── assets/              # Static files (images, fonts)
│   │   └── .gitkeep         # Keep empty folder in git
│   │
│   ├── index.html           # Main HTML file
│   ├── main.ts              # Application entry point
│   └── styles.css           # Global styles
│
├── .editorconfig            # Editor configuration
├── .gitignore               # Git ignore rules
├── angular.json             # 🔧 Angular CLI configuration
├── package.json             # 📦 Dependencies & scripts
├── package-lock.json        # Locked dependency versions
├── README.md                # Project documentation
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App TypeScript config
└── tsconfig.spec.json       # Test TypeScript config`}
            language="bash"
            colorTheme="emerald"
          />
        </CardContent>
      </Card>

      {/* Source Folder (src/) */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Folder className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The src/ Folder - Your Workspace
          </CardTitle>
          <CardDescription className="text-base">
            Where you'll spend most of your time writing code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* app/ folder */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Folder className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <code className="text-red-600 dark:text-red-400">src/app/</code>
                    <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800">Main Application</Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The heart of your Angular application - all your components, services, and modules live here
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <FileCode className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold mb-1">app.component.ts</p>
                        <p className="text-xs text-muted-foreground">Root component - the starting point of your app</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <FileText className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold mb-1">app.component.html</p>
                        <p className="text-xs text-muted-foreground">Root template - the main HTML structure</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <Settings className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold mb-1">app.config.ts (Angular 17+)</p>
                        <p className="text-xs text-muted-foreground">Application configuration - providers, routes, etc.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold mb-1">app.routes.ts (Angular 17+)</p>
                        <p className="text-xs text-muted-foreground">Route definitions - your app's navigation paths</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* assets/ folder */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Folder className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    <code className="text-blue-600 dark:text-blue-400">src/assets/</code>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Static files like images, fonts, icons, and JSON data files
                  </p>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Example:</strong> <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded">src/assets/images/logo.png</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Root files */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h5 className="font-semibold mb-3 flex items-center gap-2">
                <File className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Root Files in src/
              </h5>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
                  <p className="text-xs font-semibold mb-1"><code>index.html</code></p>
                  <p className="text-xs text-muted-foreground">Main HTML page, loads your Angular app</p>
                </div>

                <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
                  <p className="text-xs font-semibold mb-1"><code>main.ts</code></p>
                  <p className="text-xs text-muted-foreground">Entry point, bootstraps Angular application</p>
                </div>

                <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
                  <p className="text-xs font-semibold mb-1"><code>styles.css</code></p>
                  <p className="text-xs text-muted-foreground">Global styles applied to entire app</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Configuration Files Explained
          </CardTitle>
          <CardDescription className="text-base">
            Important configuration files and what they do
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* angular.json */}
            <div className="p-5 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/10 dark:to-pink-950/10 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <FileJson className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-2 text-red-600 dark:text-red-400">angular.json</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    The main configuration file for Angular CLI - controls build, serve, test, and deployment settings
                  </p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Build configurations (development, production)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Asset paths and file replacements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Style and script inclusions</span>
                    </div>
                  </div>

                  <CodeSnippetWithOutput
                    title="angular.json Structure"
                    code={`{
  "projects": {
    "my-app": {
      "architect": {
        "build": { /* build settings */ },
        "serve": { /* dev server settings */ },
        "test": { /* test settings */ }
      }
    }
  }
}`}
                    language="json"
                    colorTheme="red"
                  />
                </div>
              </div>
            </div>

            {/* package.json */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">package.json</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    NPM configuration - lists all dependencies and defines command scripts
                  </p>

                  <CodeSnippetWithOutput
                    title="Important Scripts"
                    code={`{
  "scripts": {
    "ng": "ng",
    "start": "ng serve",           // Run dev server
    "build": "ng build",            // Build for production
    "watch": "ng build --watch",    // Auto-rebuild on change
    "test": "ng test"               // Run tests
  },
  "dependencies": {
    "@angular/core": "^17.0.0",     // Angular framework
    "@angular/common": "^17.0.0",   // Common utilities
    // ... more dependencies
  }
}`}
                    language="json"
                    colorTheme="blue"
                  />
                </div>
              </div>
            </div>

            {/* tsconfig.json */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">tsconfig.json</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    TypeScript compiler configuration - how TypeScript code gets compiled
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                      <p className="text-xs font-semibold mb-1">tsconfig.json</p>
                      <p className="text-xs text-muted-foreground">Base TypeScript config</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                      <p className="text-xs font-semibold mb-1">tsconfig.app.json</p>
                      <p className="text-xs text-muted-foreground">App-specific settings</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                      <p className="text-xs font-semibold mb-1">tsconfig.spec.json</p>
                      <p className="text-xs text-muted-foreground">Test-specific settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Angular 17 New Structure */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            What's New in Angular 17
          </CardTitle>
          <CardDescription className="text-base">
            Modern project structure with standalone components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Zap className="h-4 w-4" />
            <AlertTitle>Standalone by Default!</AlertTitle>
            <AlertDescription>
              Angular 17 projects use standalone components by default - no more NgModule boilerplate!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold flex items-center gap-2">
                <Badge variant="outline" className="border-red-200 dark:border-red-800">Old (Before v17)</Badge>
              </h5>
              <CodeSnippetWithOutput
                title="Module-based Structure"
                code={`src/app/
├── app.module.ts         ❌ NgModule
├── app-routing.module.ts ❌ Routing module
├── app.component.ts
├── app.component.html
└── app.component.css`}
                language="bash"
                colorTheme="red"
              />
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold flex items-center gap-2">
                <Badge variant="outline" className="border-green-200 dark:border-green-800">New (Angular 17+)</Badge>
              </h5>
              <CodeSnippetWithOutput
                title="Standalone Structure"
                code={`src/app/
├── app.config.ts         ✅ Configuration
├── app.routes.ts         ✅ Routes
├── app.component.ts      ✅ Standalone
├── app.component.html
└── app.component.css`}
                language="bash"
                colorTheme="emerald"
              />
            </div>
          </div>

          <div className="mt-6 p-5 bg-white dark:bg-gray-900 rounded-xl border">
            <h5 className="font-semibold mb-3">Key Changes</h5>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">No more app.module.ts</p>
                  <p className="text-xs text-muted-foreground">Standalone components don't need modules</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">app.config.ts for configuration</p>
                  <p className="text-xs text-muted-foreground">Providers, routes, and app-level setup</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">app.routes.ts for routing</p>
                  <p className="text-xs text-muted-foreground">Cleaner, type-safe route definitions</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 border-2 border-amber-200 dark:border-amber-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-amber-600 dark:text-amber-400">Organization Best Practices</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Create Feature Folders</p>
                      <p className="text-xs text-muted-foreground">Group related components: <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">src/app/features/user/</code></p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Use Shared Folder</p>
                      <p className="text-xs text-muted-foreground">Common components, pipes, directives: <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">src/app/shared/</code></p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Core Services Folder</p>
                      <p className="text-xs text-muted-foreground">App-wide services: <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">src/app/core/services/</code></p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Keep Components Small</p>
                      <p className="text-xs text-muted-foreground">One component per file, focused responsibilities</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Never Touch node_modules/</p>
                      <p className="text-xs text-muted-foreground">Managed by npm - changes will be lost!</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="mt-4">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription className="text-xs">
                  Use Angular CLI to generate files - it automatically places them in the right location and follows naming conventions!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderTree className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Recommended Structure for Large Apps
          </CardTitle>
          <CardDescription className="text-base">
            How to organize a scalable Angular application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippetWithOutput
            title="Scalable Project Structure"
            description="Best practice organization for production apps"
            code={`src/app/
├── core/                    # Singleton services, guards
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── api.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   └── interceptors/
│       └── http.interceptor.ts
│
├── shared/                  # Reusable components
│   ├── components/
│   │   ├── button/
│   │   ├── modal/
│   │   └── header/
│   ├── pipes/
│   │   └── date-format.pipe.ts
│   └── directives/
│       └── highlight.directive.ts
│
├── features/                # Feature modules
│   ├── dashboard/
│   │   ├── dashboard.component.ts
│   │   ├── dashboard.component.html
│   │   └── dashboard.routes.ts
│   ├── users/
│   │   ├── user-list/
│   │   ├── user-detail/
│   │   └── users.routes.ts
│   └── products/
│       ├── product-list/
│       └── products.routes.ts
│
├── models/                  # TypeScript interfaces
│   ├── user.model.ts
│   └── product.model.ts
│
├── app.component.ts
├── app.config.ts
└── app.routes.ts`}
            language="bash"
            colorTheme="blue"
          />

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/10 dark:to-pink-950/10 rounded-lg border border-red-200 dark:border-red-800">
              <h5 className="font-semibold mb-2 text-red-600 dark:text-red-400">core/</h5>
              <p className="text-xs text-muted-foreground">Services used once across the app</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-lg border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">shared/</h5>
              <p className="text-xs text-muted-foreground">Reusable UI components and utilities</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/10 dark:to-green-950/10 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h5 className="font-semibold mb-2 text-emerald-600 dark:text-emerald-400">features/</h5>
              <p className="text-xs text-muted-foreground">Business logic grouped by feature</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
