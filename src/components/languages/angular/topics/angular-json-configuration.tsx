'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Settings,
  FileJson,
  Lightbulb,
  CheckCircle2,
  Package,
  Wrench,
  Zap,
  Layers,
  FolderTree,
  Code,
  Box,
  HardDrive,
  Image as ImageIcon,
  FileCode,
  AlertTriangle,
  Info,
  Sparkles,
} from 'lucide-react';

export default function AngularJsonConfiguration() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileJson}
        category="Angular · Configuration"
        title="angular.json Configuration"
        description="Master the Angular workspace configuration file - control builds, optimize performance, and customize your development workflow."
        colorTheme="red"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <FileJson className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">What is angular.json?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">angular.json</code> file is the master configuration file for your Angular workspace. It controls how Angular CLI builds, serves, tests, and deploys your application. Think of it as the control center for your entire Angular project!
              </p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Build Settings</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Configure compilation options</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Dev Server</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Customize development experience</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <h5 className="text-xs font-semibold">Assets & Styles</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Manage resources and styling</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Understanding the Structure
          </CardTitle>
          <CardDescription className="text-base">
            Breaking down the main sections of angular.json
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Auto-Generated</AlertTitle>
            <AlertDescription>
              Angular CLI creates and manages this file for you. You'll mainly edit specific sections rather than writing from scratch!
            </AlertDescription>
          </Alert>

          <CodeSnippetWithOutput
            title="High-Level Structure"
            description="Main sections of angular.json file"
            code={`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  
  "projects": {
    "my-app": {
      "projectType": "application",
      "architect": {
        "build": { /* Build configuration */ },
        "serve": { /* Dev server settings */ },
        "test": { /* Testing configuration */ },
        "lint": { /* Linting rules */ }
      }
    }
  },
  
  "cli": {
    "analytics": false
  }
}`}
            language="json"
            colorTheme="blue"
          />

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <FolderTree className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">projects</h5>
                  <p className="text-xs text-muted-foreground">Defines all projects in your workspace (apps and libraries)</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-3">
                <Wrench className="w-5 h-5 mt-0.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">architect</h5>
                  <p className="text-xs text-muted-foreground">Build targets: build, serve, test, deploy configurations</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-3">
                <Settings className="w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">cli</h5>
                  <p className="text-xs text-muted-foreground">CLI-specific settings like analytics, warnings, and defaults</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/10 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 mt-0.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">$schema</h5>
                  <p className="text-xs text-muted-foreground">JSON schema for IDE autocomplete and validation</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Build Configuration */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Build Configuration
          </CardTitle>
          <CardDescription className="text-base">
            Control how your application gets compiled and bundled
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Options</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="assets">Assets & Styles</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <CodeSnippetWithOutput
                title="Basic Build Configuration"
                description="Essential build options"
                code={`"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "outputPath": "dist/my-app",
    "index": "src/index.html",
    "main": "src/main.ts",
    "polyfills": ["zone.js"],
    "tsConfig": "tsconfig.app.json",
    "inlineStyleLanguage": "scss",
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.scss"
    ],
    "scripts": []
  }
}`}
                language="json"
                colorTheme="purple"
              />

              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                      <HardDrive className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-1">outputPath</h5>
                      <p className="text-xs text-muted-foreground">Where compiled files go (default: <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">dist/</code>)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                      <FileCode className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-1">main</h5>
                      <p className="text-xs text-muted-foreground">Application entry point (bootstraps Angular app)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                      <Box className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-1">polyfills</h5>
                      <p className="text-xs text-muted-foreground">Browser compatibility scripts (like zone.js for Angular)</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-6">
              <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertTitle>Production Optimization</AlertTitle>
                <AlertDescription>
                  These settings make your app smaller and faster in production!
                </AlertDescription>
              </Alert>

              <CodeSnippetWithOutput
                title="Optimization Configuration"
                description="Performance and size optimization settings"
                code={`"configurations": {
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "500kb",
        "maximumError": "1mb"
      }
    ],
    "outputHashing": "all",
    "optimization": true,
    "buildOptimizer": true,
    "sourceMap": false,
    "namedChunks": false,
    "aot": true,
    "extractLicenses": true,
    "vendorChunk": false
  },
  "development": {
    "optimization": false,
    "sourceMap": true,
    "namedChunks": true,
    "buildOptimizer": false
  }
}`}
                language="json"
                colorTheme="emerald"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <h5 className="font-semibold text-sm">optimization: true</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Minifies code, removes unused code, optimizes bundle size</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <h5 className="font-semibold text-sm">outputHashing: "all"</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Adds hash to filenames for browser cache busting</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <h5 className="font-semibold text-sm">budgets</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Set size limits, warn/error if exceeded</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <h5 className="font-semibold text-sm">sourceMap: false</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Disable source maps in production for smaller bundles</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="assets" className="space-y-6">
              <CodeSnippetWithOutput
                title="Assets and Styles Configuration"
                description="Managing static files and stylesheets"
                code={`"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "src/assets/images",
    "output": "/images"
  }
],
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js"
],
"stylePreprocessorOptions": {
  "includePaths": [
    "src/styles"
  ]
}`}
                language="json"
                colorTheme="blue"
              />

              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <ImageIcon className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm mb-1">assets</h5>
                      <p className="text-xs text-muted-foreground mb-2">Copy static files to output directory</p>
                      <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded text-xs">
                        <p className="font-mono">String: <code className="text-blue-600">"src/assets"</code> copies entire folder</p>
                        <p className="font-mono mt-1">Object: Use glob patterns for fine control</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <FileCode className="w-5 h-5 mt-0.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm mb-1">styles</h5>
                      <p className="text-xs text-muted-foreground mb-2">Global stylesheets loaded in order</p>
                      <div className="p-2 bg-purple-50 dark:bg-purple-950/20 rounded text-xs">
                        <p>✅ Your app styles</p>
                        <p>✅ Third-party CSS libraries</p>
                        <p>✅ SCSS/SASS/LESS support</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 mt-0.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm mb-1">scripts</h5>
                      <p className="text-xs text-muted-foreground mb-2">Global JavaScript files</p>
                      <Alert className="mt-2">
                        <AlertTriangle className="h-3 w-3" />
                        <AlertDescription className="text-xs">
                          Use sparingly! Prefer npm packages imported in TypeScript instead.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Serve Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Development Server Configuration
          </CardTitle>
          <CardDescription className="text-base">
            Customize your development experience with ng serve
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippetWithOutput
            title="Serve Configuration"
            description="Development server settings for ng serve command"
            code={`"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "buildTarget": "my-app:build"
  },
  "configurations": {
    "production": {
      "buildTarget": "my-app:build:production"
    },
    "development": {
      "buildTarget": "my-app:build:development",
      "port": 4200,
      "host": "localhost",
      "open": true,
      "ssl": false,
      "proxyConfig": "proxy.conf.json"
    }
  },
  "defaultConfiguration": "development"
}`}
            language="json"
            colorTheme="emerald"
          />

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 className="font-semibold mb-3 flex items-center gap-2">
                <Settings className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Common Options
              </h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="font-semibold">port: 4200</code>
                    <p className="text-muted-foreground">Server port number</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="font-semibold">host: "localhost"</code>
                    <p className="text-muted-foreground">Server hostname</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="font-semibold">open: true</code>
                    <p className="text-muted-foreground">Auto-open browser</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <div>
                    <code className="font-semibold">ssl: true</code>
                    <p className="text-muted-foreground">Enable HTTPS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Proxy Configuration
              </h5>
              <p className="text-xs text-muted-foreground mb-3">
                Redirect API calls to backend server during development
              </p>
              <CodeSnippetWithOutput
                title="proxy.conf.json"
                code={`{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}`}
                language="json"
                colorTheme="blue"
              />
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Command Line Override</AlertTitle>
            <AlertDescription className="text-sm">
              You can override these settings via CLI: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">ng serve --port 3000 --open</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Budget Configuration */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Bundle Size Budgets
          </CardTitle>
          <CardDescription className="text-base">
            Set limits to keep your application performant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Performance Guardian</AlertTitle>
            <AlertDescription>
              Budgets prevent your app from getting too large by warning or failing the build when size limits are exceeded!
            </AlertDescription>
          </Alert>

          <CodeSnippetWithOutput
            title="Budget Configuration"
            description="Define size limits for different asset types"
            code={`"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kb",
    "maximumError": "1mb"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "6kb",
    "maximumError": "10kb"
  },
  {
    "type": "bundle",
    "name": "main",
    "baseline": "400kb",
    "maximumWarning": "500kb",
    "maximumError": "600kb"
  },
  {
    "type": "bundle",
    "name": "vendor",
    "baseline": "300kb",
    "maximumWarning": "400kb",
    "maximumError": "500kb"
  }
]`}
            language="json"
            colorTheme="amber"
          />

          <div className="mt-6 space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h5 className="font-semibold mb-3">Budget Types</h5>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border">
                  <code className="font-semibold text-amber-600 dark:text-amber-400">initial</code>
                  <p className="text-muted-foreground mt-1">Total initial bundle size</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border">
                  <code className="font-semibold text-amber-600 dark:text-amber-400">bundle</code>
                  <p className="text-muted-foreground mt-1">Specific bundle (main, vendor, etc.)</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border">
                  <code className="font-semibold text-amber-600 dark:text-amber-400">anyComponentStyle</code>
                  <p className="text-muted-foreground mt-1">Individual component CSS size</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border">
                  <code className="font-semibold text-amber-600 dark:text-amber-400">any</code>
                  <p className="text-muted-foreground mt-1">Any individual file</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h5 className="font-semibold mb-3">Threshold Levels</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold">maximumWarning</p>
                    <p className="text-xs text-muted-foreground">Build succeeds but shows warning in console</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold">maximumError</p>
                    <p className="text-xs text-muted-foreground">Build fails if size exceeds this limit</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">baseline</p>
                    <p className="text-xs text-muted-foreground">Expected size - used for comparison</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Angular 17 New Features */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            What's New in Angular 17
          </CardTitle>
          <CardDescription className="text-base">
            Latest features and improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-2">ESBuild by Default</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Angular 17 uses the application builder with esbuild for faster builds!
                  </p>
                  <CodeSnippetWithOutput
                    title="New Builder (Angular 17+)"
                    code={`"build": {
  "builder": "@angular-devkit/build-angular:application",
  "options": {
    "outputPath": "dist/my-app",
    "index": "src/index.html",
    "browser": "src/main.ts",
    "polyfills": ["zone.js"],
    "tsConfig": "tsconfig.app.json",
    // ... rest of config
  }
}`}
                    language="json"
                    colorTheme="purple"
                  />
                </div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-2">Key Differences from Old Builder</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <p className="font-semibold">70% faster builds</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Thanks to esbuild</p>
                    </div>

                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <p className="font-semibold">"browser" instead of "main"</p>
                      </div>
                      <p className="text-xs text-muted-foreground">New property name</p>
                    </div>

                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <p className="font-semibold">Built-in SSR support</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Server-side rendering ready</p>
                    </div>

                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <p className="font-semibold">Better tree-shaking</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Smaller bundle sizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Migration Note</AlertTitle>
              <AlertDescription className="text-sm">
                New Angular 17 projects use the application builder by default. Existing projects can migrate using: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">ng update @angular/cli</code>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Common Customizations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Wrench className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Common Customizations
          </CardTitle>
          <CardDescription className="text-base">
            Frequently used angular.json modifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Change Output Path */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                1. Change Output Directory
              </h5>
              <CodeSnippetWithOutput
                title="Custom Output Path"
                code={`"outputPath": "dist/my-custom-folder"`}
                language="json"
                colorTheme="blue"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use case: Deploy to specific server directories or integrate with backend build process
              </p>
            </div>

            {/* Add Global Styles */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FileCode className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                2. Add Third-Party Styles
              </h5>
              <CodeSnippetWithOutput
                title="Include External CSS"
                code={`"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/primeicons/primeicons.css"
]`}
                language="json"
                colorTheme="purple"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use case: Include UI framework styles (Bootstrap, Material, PrimeNG, etc.)
              </p>
            </div>

            {/* Custom Port */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                3. Change Default Port
              </h5>
              <CodeSnippetWithOutput
                title="Custom Development Port"
                code={`"serve": {
  "options": {
    "port": 3000,
    "open": true
  }
}`}
                language="json"
                colorTheme="emerald"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use case: Avoid port conflicts or match backend API port conventions
              </p>
            </div>

            {/* Environment Files */}
            <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/10 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. File Replacements (Environment Variables)
              </h5>
              <CodeSnippetWithOutput
                title="Environment-Specific Configurations"
                code={`"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ]
  }
}`}
                language="json"
                colorTheme="amber"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use case: Different API URLs, feature flags, or settings per environment
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border-2 border-green-200 dark:border-green-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Best Practices</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Don't Edit Manually Unless Needed</p>
                      <p className="text-xs text-muted-foreground">Angular CLI manages most settings automatically</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Always Set Budgets</p>
                      <p className="text-xs text-muted-foreground">Prevent performance regressions early</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Use Separate Configurations</p>
                      <p className="text-xs text-muted-foreground">Development, staging, production - each with appropriate settings</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Version Control</p>
                      <p className="text-xs text-muted-foreground">Commit angular.json - it's essential for team consistency</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Keep It Clean</p>
                      <p className="text-xs text-muted-foreground">Remove unused configurations and keep structure organized</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="mt-4">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription className="text-xs">
                  Test your configuration changes with <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">ng build --configuration=production</code> before deploying!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-red-600/80 dark:text-red-400/80" />
            Common Issues & Solutions
          </CardTitle>
          <CardDescription className="text-base">
            Troubleshooting angular.json configuration problems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Schema validation failed</h5>
              <p className="text-sm text-muted-foreground mb-2">JSON syntax error or invalid property</p>
              <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded text-xs">
                <p className="font-semibold mb-1">Solution:</p>
                <p>• Check for missing commas or brackets</p>
                <p>• Validate JSON syntax with a linter</p>
                <p>• Ensure property names match schema</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Budget exceeded</h5>
              <p className="text-sm text-muted-foreground mb-2">Bundle size exceeds defined limits</p>
              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded text-xs">
                <p className="font-semibold mb-1">Solution:</p>
                <p>• Enable production optimizations</p>
                <p>• Use lazy loading for routes</p>
                <p>• Remove unused imports</p>
                <p>• Consider code splitting</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Builder not found</h5>
              <p className="text-sm text-muted-foreground mb-2">Missing or incorrect builder package</p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded text-xs">
                <p className="font-semibold mb-1">Solution:</p>
                <p>• Run <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">npm install</code></p>
                <p>• Verify @angular-devkit packages are installed</p>
                <p>• Check builder name spelling</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Assets not copying</h5>
              <p className="text-sm text-muted-foreground mb-2">Static files not in output directory</p>
              <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded text-xs">
                <p className="font-semibold mb-1">Solution:</p>
                <p>• Verify assets path in angular.json</p>
                <p>• Check file/folder exists in source</p>
                <p>• Ensure proper glob pattern syntax</p>
                <p>• Rebuild the project</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
