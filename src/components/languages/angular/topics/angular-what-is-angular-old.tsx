'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { InteractivePlayground } from '@/components/shared';
import { useAngularPlayground } from '@/components/shared/playground/angular-playground-context';
import {
  Zap,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Code,
  Layers,
  Package,
  Component,
  Rocket,
  Terminal,
  FileCode,
  Workflow,
} from 'lucide-react';

export default function AngularWhatIsAngular() {
  const { openPlayground } = useAngularPlayground();
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="Angular · Introduction & Setup"
        title="What is Angular?"
        description="Discover Angular - Google's powerful TypeScript-based framework for building dynamic, scalable web applications with a complete toolset for modern development."
        colorTheme="red"
      />

      {/* What is Angular? */}
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
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <strong>Angular</strong> is a <strong>platform and framework</strong> for building single-page client applications using HTML, CSS, and TypeScript. Think of it as a <strong>complete toolkit</strong> that provides everything you need to build modern web applications - from components and routing to forms and HTTP services. Unlike libraries like React, Angular is a full-featured framework with strong opinions on how your app should be structured.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Component className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-sm">Component-Based</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Build reusable UI components with encapsulated logic and styling
              </p>
              <Badge className="mt-2 bg-red-100/80 text-red-700 dark:bg-red-900/30 text-xs">Modular</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">TypeScript First</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Built with TypeScript for type safety and better tooling
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Type-Safe</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Full-Featured</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Complete solution with routing, forms, HTTP, and more built-in
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">All-in-One</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Angular vs AngularJS</AlertTitle>
            <AlertDescription>
              <strong>Angular</strong> (v2+) is a complete rewrite of <strong>AngularJS</strong> (v1.x). Angular uses TypeScript and components, while AngularJS used JavaScript and controllers. They are completely different frameworks!
            </AlertDescription>
          </Alert>
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
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Two-Way Data Binding
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Automatic synchronization between model and view - change one, update both automatically.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 text-xs font-mono border">
                <div className="text-blue-600 dark:text-blue-400">Model ↔ View</div>
                <div className="text-muted-foreground mt-1">Update model → View updates</div>
                <div className="text-muted-foreground">Update view → Model updates</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Dependency Injection
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Built-in dependency injection system for managing services and testability.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 text-xs font-mono border">
                <div className="text-emerald-600 dark:text-emerald-400">Service → Component</div>
                <div className="text-muted-foreground mt-1">No manual instantiation</div>
                <div className="text-muted-foreground">Framework manages lifecycle</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                RxJS Integration
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Reactive programming with Observables for handling async operations.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 text-xs font-mono border">
                <div className="text-purple-600 dark:text-purple-400">Observable Streams</div>
                <div className="text-muted-foreground mt-1">Handle async data flow</div>
                <div className="text-muted-foreground">Powerful operators</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Powerful CLI
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Angular CLI for scaffolding, development, testing, and deployment.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 text-xs font-mono border">
                <div className="text-amber-600 dark:text-amber-400">ng generate component</div>
                <div className="text-muted-foreground mt-1">Scaffolds components</div>
                <div className="text-muted-foreground">Best practices built-in</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Try in Angular Playground */}
      <Card className="bg-gradient-to-br from-red-50/80 to-pink-50/80 dark:from-red-950/20 dark:to-pink-950/20 border-2 border-red-200 dark:border-red-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                Try This Example in StackBlitz
                <Badge variant="secondary" className="text-xs">Live Editor</Badge>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Experience this Angular component in a real development environment with full TypeScript support and live preview.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => {
                    openPlayground({
                      title: 'My First Angular App',
                      description: 'A simple counter component demonstrating Angular basics',
                      stackblitzProjectId: 'angular-ivy',  // Using Angular Ivy demo project
                      openFile: 'src/app/app.component.ts',
                      files: {
                        'src/app/app.component.ts': `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}`,
                        'src/app/app.component.html': `<div class="container">
  <h1>{{ title }}</h1>
  <p class="subtitle">Welcome to Angular!</p>
  
  <div class="counter">
    <button (click)="decrement()" class="btn btn-danger">-</button>
    <span class="count">{{ count }}</span>
    <button (click)="increment()" class="btn btn-primary">+</button>
  </div>
  
  <button (click)="reset()" class="btn btn-secondary">Reset</button>
</div>`,
                        'src/app/app.component.css': `.container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
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
  background: #dd0031;
  color: white;
}

.btn-primary:hover {
  background: #c50029;
  transform: translateY(-2px);
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #95a5a6;
  color: white;
  margin-top: 20px;
}

.btn-secondary:hover {
  background: #7f8c8d;
  transform: translateY(-2px);
}`,
                        'src/app/app.module.ts': `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
                      },
                      openFile: 'src/app/app.component.ts',
                    });
                  }}
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Open in Playground
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    openInStackBlitz({
                      title: 'My First Angular App',
                      description: 'A simple counter component',
                      files: {
                        'src/app/app.component.ts': `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}`,
                        'src/app/app.component.html': `<div class="container">
  <h1>{{ title }}</h1>
  <p class="subtitle">Welcome to Angular!</p>
  
  <div class="counter">
    <button (click)="decrement()" class="btn btn-danger">-</button>
    <span class="count">{{ count }}</span>
    <button (click)="increment()" class="btn btn-primary">+</button>
  </div>
  
  <button (click)="reset()" class="btn btn-secondary">Reset</button>
</div>`,
                        'src/app/app.component.css': `.container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
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
  background: #dd0031;
  color: white;
}

.btn-primary:hover {
  background: #c50029;
  transform: translateY(-2px);
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #95a5a6;
  color: white;
  margin-top: 20px;
}

.btn-secondary:hover {
  background: #7f8c8d;
  transform: translateY(-2px);
}`,
                        'src/app/app.module.ts': `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
                      },
                      openFile: 'src/app/app.component.ts',
                    });
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in StackBlitz
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Angular Architecture */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Angular Architecture
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the building blocks of Angular applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Modules</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">@NgModule</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Containers that group related components, directives, pipes, and services
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-blue-600 dark:text-blue-400">@NgModule({"{"}"..."{"}"})</div>
                <div className="text-muted-foreground">├── declarations</div>
                <div className="text-muted-foreground">├── imports</div>
                <div className="text-muted-foreground">├── providers</div>
                <div className="text-muted-foreground">└── bootstrap</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Components</h4>
                <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30">@Component</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Building blocks that control a view (HTML template) with logic (TypeScript class)
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-red-600 dark:text-red-400">@Component({"{"}"..."{"}"})</div>
                <div className="text-muted-foreground">├── selector</div>
                <div className="text-muted-foreground">├── templateUrl</div>
                <div className="text-muted-foreground">└── styleUrls</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Services</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">@Injectable</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Reusable business logic, data access, and shared functionality
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-emerald-600 dark:text-emerald-400">@Injectable()</div>
                <div className="text-muted-foreground">└── Singleton pattern</div>
                <div className="text-muted-foreground">    Dependency injection</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Directives</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">@Directive</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Modify DOM elements and their behavior (structural & attribute directives)
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-purple-600 dark:text-purple-400">*ngIf, *ngFor</div>
                <div className="text-muted-foreground">└── Structural</div>
                <div className="text-muted-foreground">    [ngClass], [ngStyle]</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Binding */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Data Binding in Angular
          </CardTitle>
          <CardDescription className="text-base">
            Four ways to bind data between component and template.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white text-xs">1</div>
                Interpolation
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Display component data in the template
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-blue-600 dark:text-blue-400">{"{{ componentProperty }}"}</div>
                <div className="text-muted-foreground mt-2">Component → View</div>
                <div className="text-muted-foreground">One-way binding</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-600 dark:bg-emerald-400 flex items-center justify-center text-white text-xs">2</div>
                Property Binding
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Set element properties from component
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-emerald-600 dark:text-emerald-400">[property]="value"</div>
                <div className="text-muted-foreground mt-2">Component → View</div>
                <div className="text-muted-foreground">Bind to HTML attributes</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-600 dark:bg-amber-400 flex items-center justify-center text-white text-xs">3</div>
                Event Binding
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Listen to events and execute component methods
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-amber-600 dark:text-amber-400">(event)="handler()"</div>
                <div className="text-muted-foreground mt-2">View → Component</div>
                <div className="text-muted-foreground">User interactions</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-600 dark:bg-purple-400 flex items-center justify-center text-white text-xs">4</div>
                Two-Way Binding
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Sync data between component and template
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-purple-600 dark:text-purple-400">[(ngModel)]="property"</div>
                <div className="text-muted-foreground mt-2">Component ↔ View</div>
                <div className="text-muted-foreground">Automatic sync</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Directives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Angular Directives
          </CardTitle>
          <CardDescription className="text-base">
            Built-in directives to manipulate the DOM and add behavior.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                *ngIf - Conditional Rendering
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Show/hide elements based on a condition
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs border">
                <div className="text-blue-600 dark:text-blue-400">*ngIf="condition"</div>
                <div className="text-muted-foreground mt-2">true → Show element</div>
                <div className="text-muted-foreground">false → Remove from DOM</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                *ngFor - List Rendering
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Iterate over arrays and render elements
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs border">
                <div className="text-emerald-600 dark:text-emerald-400">*ngFor="let item of items"</div>
                <div className="text-muted-foreground mt-2">Loops through array</div>
                <div className="text-muted-foreground">Creates element per item</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                [ngClass] - Dynamic Classes
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Add/remove CSS classes conditionally
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs border">
                <div className="text-purple-600 dark:text-purple-400">[ngClass]="{"{"}'active': isActive'"}"}"</div>
                <div className="text-muted-foreground mt-2">Conditional CSS classes</div>
                <div className="text-muted-foreground">Dynamic styling</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                *ngSwitch - Multiple Conditions
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Display different elements based on value
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs border">
                <div className="text-amber-600 dark:text-amber-400">[ngSwitch]="expression"</div>
                <div className="text-muted-foreground mt-2">Like switch statement</div>
                <div className="text-muted-foreground">Multiple cases</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Routing */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Angular Routing
          </CardTitle>
          <CardDescription className="text-base">
            Navigate between different views and pages in your application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Angular's Router enables navigation from one view to the next as users perform application tasks. It interprets a browser URL as an instruction to navigate to a client-generated view and can pass optional parameters to the target component.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                <CheckCircle2 className="w-5 h-5" />
                Route Configuration
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✅ Define paths and components</li>
                <li>✅ Support for nested routes</li>
                <li>✅ Route parameters and query params</li>
                <li>✅ Route guards for auth/protection</li>
                <li>✅ Lazy loading for performance</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                <CheckCircle2 className="w-5 h-5" />
                Navigation Features
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✅ RouterLink directive for links</li>
                <li>✅ Programmatic navigation</li>
                <li>✅ RouterOutlet for rendering</li>
                <li>✅ Active route highlighting</li>
                <li>✅ Browser history integration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latest Features */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Latest Angular Features (v17+)
          </CardTitle>
          <CardDescription className="text-base">
            Modern features and improvements in the latest Angular versions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Standalone Components
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                No need for NgModules - components can be standalone with direct imports
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-emerald-600 dark:text-emerald-400">@Component({"{"}</div>
                <div className="text-muted-foreground ml-2">standalone: true,</div>
                <div className="text-muted-foreground ml-2">imports: [CommonModule]</div>
                <div className="text-emerald-600 dark:text-emerald-400">{"}"})</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Signals (v16+)
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Fine-grained reactivity for better performance and simpler state management
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-blue-600 dark:text-blue-400">count = signal(0);</div>
                <div className="text-muted-foreground mt-1">count.set(10);</div>
                <div className="text-muted-foreground">count.update(n => n + 1);</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Control Flow (@if, @for)
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                New built-in control flow syntax replacing structural directives
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-purple-600 dark:text-purple-400">@if (show) {"{"}</div>
                <div className="text-muted-foreground ml-2">{"<p>Content</p>"}</div>
                <div className="text-purple-600 dark:text-purple-400">{"}"}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Deferred Views (v17)
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Lazy load components and improve initial load performance
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-amber-600 dark:text-amber-400">@defer (on viewport) {"{"}</div>
                <div className="text-muted-foreground ml-2">{"<heavy-component />"}</div>
                <div className="text-amber-600 dark:text-amber-400">{"}"}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/40 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Angular Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use TypeScript for type safety</li>
              <li>✅ Leverage dependency injection</li>
              <li>✅ Follow Angular style guide</li>
              <li>✅ Use OnPush change detection</li>
              <li>✅ Lazy load feature modules</li>
              <li>✅ Unsubscribe from observables</li>
              <li>✅ Use Angular CLI for scaffolding</li>
              <li>✅ Write unit tests with TestBed</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't manipulate DOM directly</li>
              <li>❌ Don't put logic in templates</li>
              <li>❌ Avoid memory leaks with subscriptions</li>
              <li>❌ Don't mix jQuery with Angular</li>
              <li>❌ Don't ignore change detection</li>
              <li>❌ Avoid massive components</li>
              <li>❌ Don't skip error handling</li>
              <li>❌ Don't hardcode API URLs</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
