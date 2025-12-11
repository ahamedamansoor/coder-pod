'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { useAngularPlayground } from '@/components/shared/playground/angular-playground-context';
import {
  Zap,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Code,
  Layers,
  Package,
  Component as ComponentIcon,
  Rocket,
  Terminal,
  FileCode,
  Workflow,
  ExternalLink,
} from 'lucide-react';

export default function AngularWhatIsAngular() {
  const { openPlayground } = useAngularPlayground();
  
  // Counter Component Example Data
  const counterExample = {
    title: 'My First Angular App - Counter Component',
    description: 'A simple counter demonstrating Angular basics: components, templates, and event handling',
    openFile: 'src/main.ts',
    files: {
      'src/main.ts': `import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="subtitle">Welcome to Angular!</p>
      
      <div class="counter">
        <button (click)="decrement()" class="btn btn-danger">−</button>
        <span class="count">{{ count }}</span>
        <button (click)="increment()" class="btn btn-primary">+</button>
      </div>
      
      <button (click)="reset()" class="btn btn-secondary">Reset</button>
    </div>
  \`,
  styles: [\`
    .container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  color: #333;
}

h1 {
  color: #dd0031;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}

.count {
  font-size: 4rem;
  font-weight: bold;
  color: #dd0031;
  min-width: 120px;
}

.btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.btn-primary {
  background: linear-gradient(135deg, #dd0031 0%, #c50029 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(221, 0, 49, 0.3);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #c50029 0%, #a50020 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(221, 0, 49, 0.4);
}

.btn-danger {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.btn-danger:hover {
  background: linear-gradient(135deg, #c0392b 0%, #a93226 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
  color: white;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(149, 165, 166, 0.3);
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #7f8c8d 0%, #6c7a7b 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(149, 165, 166, 0.4);
}\`]
})
class AppComponent {
  title = 'My Angular App';
  count = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
  
  reset() {
    this.count = 0;
  }
}

bootstrapApplication(AppComponent);`,
      'src/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Angular App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,
      'package.json': `{
  "name": "angular-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  },
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  }
}`,
      'tsconfig.json': `{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "dom"],
    "useDefineForClassFields": false
  }
}`,
    },
  };
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="Angular · Introduction & Setup"
        title="What is Angular?"
        description="Discover Angular - Google's powerful TypeScript-based framework for building dynamic, scalable web applications with a complete toolset for modern development."
        colorTheme="red"
      />

      {/* What is Angular? - Introduction */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-red-600/80 dark:text-red-400/80" />
            What is Angular?
          </CardTitle>
          <CardDescription className="text-base">
            A comprehensive TypeScript-based framework developed and maintained by Google.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Angular</strong> is a <strong>platform and framework</strong> for building single-page client applications using HTML, CSS, and TypeScript. Think of it as a <strong>complete toolkit</strong> that provides everything you need to build modern web applications - from components and routing to forms and HTTP services. Unlike libraries like React, Angular is a full-featured framework with strong opinions on how your app should be structured.
          </p>
          
          {/* Core Features Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border transition-all hover:shadow-lg hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <ComponentIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold">Component-Based</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Build reusable UI components with encapsulated logic and styling
              </p>
              <Badge className="bg-red-100/80 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-xs">Modular</Badge>
            </div>
            
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border transition-all hover:shadow-lg hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold">TypeScript First</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Built with TypeScript for type safety and better tooling
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs">Type-Safe</Badge>
            </div>
            
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border transition-all hover:shadow-lg hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold">Full-Featured</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Complete solution with routing, forms, HTTP, and more built-in
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 text-xs">All-in-One</Badge>
            </div>
          </div>

          {/* Important Note */}
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Angular vs AngularJS</AlertTitle>
            <AlertDescription>
              <strong>Angular</strong> (v2+) is a complete rewrite of <strong>AngularJS</strong> (v1.x). Angular uses TypeScript and components, while AngularJS used JavaScript and controllers. They are completely different frameworks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground - Counter Example */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border-2 border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-red-600 dark:text-red-400">Try Your First Angular Component</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Explore this interactive counter component to see Angular in action. Click the button below to open the playground with code editor and live preview.
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Component-Based
                </Badge>
                <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Event Handling
                </Badge>
                <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Template Syntax
                </Badge>
                <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  TypeScript
                </Badge>
              </div>

              {/* Button */}
              <Button
                onClick={() => openPlayground(counterExample)}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Open Angular Playground
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Key Features of Angular
          </CardTitle>
          <CardDescription className="text-base">
            What makes Angular powerful for building modern web applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Two-Way Data Binding */}
            <div className="group p-6 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-lg">Two-Way Data Binding</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automatic synchronization between model and view - change one, update both automatically.
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-xs border">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">[(ngModel)]="value"</div>
                    <div className="text-muted-foreground">Model ↔ View sync</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dependency Injection */}
            <div className="group p-6 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-lg">Dependency Injection</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built-in DI system for managing services, improving testability and code organization.
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-xs border">
                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">@Injectable()</div>
                    <div className="text-muted-foreground">Auto service management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Powerful CLI */}
            <div className="group p-6 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-lg">Powerful CLI</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Angular CLI for scaffolding, development, testing, and deployment with best practices built-in.
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-xs border">
                    <div className="text-purple-600 dark:text-purple-400 font-semibold mb-2">ng generate component</div>
                    <div className="text-muted-foreground">Instant scaffolding</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RxJS Integration */}
            <div className="group p-6 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-lg">RxJS Integration</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reactive programming with Observables for handling async operations elegantly.
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-xs border">
                    <div className="text-amber-600 dark:text-amber-400 font-semibold mb-2">Observable streams</div>
                    <div className="text-muted-foreground">Async data flow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Angular Architecture */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Angular Architecture
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the building blocks of an Angular application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                  <ComponentIcon className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Components</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Building blocks of UI with template, styles, and logic
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-indigo-600 dark:text-indigo-400">@Component()</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Modules</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Organize application into cohesive blocks of functionality
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-purple-600 dark:text-purple-400">@NgModule()</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <FileCode className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Services</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Share data and logic across components
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-emerald-600 dark:text-emerald-400">@Injectable()</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Prerequisites
          </CardTitle>
          <CardDescription className="text-base">
            What you need before starting with Angular.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>New to Development?</AlertTitle>
            <AlertDescription>
              Don't worry! We'll guide you through everything you need. Angular requires Node.js, which is a JavaScript runtime. Think of it as the engine that powers Angular development.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {/* Node.js */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Node.js & npm</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Node.js is required to run Angular's development tools. npm (Node Package Manager) comes bundled with Node.js.
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">Required Version</Badge>
                    <span className="text-sm text-muted-foreground">Node.js 18.x or higher</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 dark:border-blue-800"
                    onClick={() => window.open('https://nodejs.org', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download Node.js
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    💡 <strong>Tip:</strong> Download the LTS (Long Term Support) version for stability.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Code Editor</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A good code editor makes development easier. We recommend Visual Studio Code (VS Code) with Angular extensions.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 dark:border-blue-800"
                    onClick={() => window.open('https://code.visualstudio.com', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download VS Code
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    💡 <strong>Optional:</strong> Install the "Angular Language Service" extension for better code completion.
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Knowledge */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Recommended Knowledge</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    While not strictly required, having basic knowledge of these will help:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">HTML & CSS</Badge>
                    <Badge variant="outline" className="text-xs">JavaScript Basics</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript (you'll learn as you go!)</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    💡 <strong>Don't worry:</strong> You can learn these alongside Angular. Start with our interactive examples!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Getting Started
          </CardTitle>
          <CardDescription className="text-base">
            Once you have Node.js installed, follow these steps to create your first Angular app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Verify Node.js Installation</AlertTitle>
            <AlertDescription>
              Open your terminal and run: <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">node --version</code>
              <br />You should see a version number like v18.x.x or higher.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Install Angular CLI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The Angular CLI (Command Line Interface) is a tool that helps you create, build, and manage Angular projects.
                </p>
                <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-sm border">
                  npm install -g @angular/cli
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  This installs Angular CLI globally on your system.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Create New Project</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Create your first Angular application. The CLI will ask a few questions (routing, stylesheet format) - you can press Enter to accept defaults.
                </p>
                <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-sm border">
                  ng new my-app
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  This creates a new folder with all necessary files and installs dependencies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Start Development Server</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Navigate to your project folder and start the development server. Your app will automatically open in the browser!
                </p>
                <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-sm border">
                  cd my-app && ng serve
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Open <code className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-xs">http://localhost:4200</code> in your browser to see your app!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Angular vs React/Vue - Link Card */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border-2 border-purple-200/50 dark:border-purple-800/30 hover:shadow-lg transition-all duration-300">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">Angular vs React vs Vue</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Wondering which framework to choose? View our comprehensive, beginner-friendly comparison with code examples, decision guides, and practical recommendations.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Side-by-side comparison
                </Badge>
                <Badge variant="outline" className="text-xs border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Code examples
                </Badge>
                <Badge variant="outline" className="text-xs border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Decision guide
                </Badge>
              </div>

              <Button
                onClick={() => window.location.href = '/languages/angular/angular-vs-react-vue'}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View Full Comparison
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
