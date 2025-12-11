'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAngularPlayground } from '@/components/shared/playground/angular-playground-context';
import {
  Component as ComponentIcon,
  Box,
  Lightbulb,
  PackageOpen,
  Puzzle,
  Code2,
  Palette,
  Braces,
  Play,
  ArrowDownUp,
  Users,
  Workflow,
  Building2,
  Hammer,
} from 'lucide-react';

export default function AngularComponentBasics() {
  const { openPlayground } = useAngularPlayground();

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={ComponentIcon}
        category="Angular · Core Concepts"
        title="What is an Angular Component?"
        description="The heart of Angular - understanding the building blocks that make your app come alive"
        colorTheme="red"
      />

      {/* Think of it Like This */}
      <Card className="border">
        <CardContent className="pt-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
              <Puzzle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Think of Components as LEGO Blocks
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Imagine building with LEGO. Each block is a <strong>component</strong> - it has its own shape, color, and purpose. 
                You snap them together to create something amazing. That's exactly how Angular works!
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">LEGO Block (Physical)</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Has a specific shape</li>
                    <li>• Has a color</li>
                    <li>• Can connect with other blocks</li>
                    <li>• Reusable in different builds</li>
                  </ul>
                </div>
                
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
                      <ComponentIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h5 className="text-sm font-bold text-gray-900 dark:text-gray-100">Angular Component</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Has its own logic (TypeScript)</li>
                    <li>• Has its own look (HTML + CSS)</li>
                    <li>• Can connect with other components</li>
                    <li>• Reusable across your app</li>
                  </ul>
                </div>
              </div>

              <Alert className="mt-6">
                <Lightbulb className="h-5 w-5" />
                <AlertTitle>The Big Idea</AlertTitle>
                <AlertDescription className="text-sm">
                  Instead of writing one giant messy file, you break your app into small, focused components. 
                  Each component does ONE thing really well. This makes your code easier to understand, test, and reuse!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The 3 Magic Ingredients */}
      <Card className="border">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
              <PackageOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">
                Every Component Has 3 Magic Ingredients
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Like a recipe: you need all three to make it work!
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>

          {/* Visual Diagram of 3 Parts */}
          <div className="mb-8">
            <div className="grid md:grid-cols-3 gap-6">

              {/* Ingredient 1: Logic (Brain) */}
              <div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-yellow-100 dark:bg-yellow-950/30 flex items-center justify-center">
                      <Braces className="w-7 h-7 text-yellow-700 dark:text-yellow-400" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">1. THE BRAIN</Badge>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">Logic (TypeScript)</h4>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    This is the <strong>thinking part</strong>. It stores data and defines what happens when users interact.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                      <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2">What it contains:</p>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>🎯 <strong>Properties</strong> - Store data (name, age, etc.)</li>
                        <li>⚡ <strong>Methods</strong> - Functions that do things</li>
                        <li>🎪 <strong>Lifecycle hooks</strong> - Special moments in time</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg border">
                      <code className="text-xs text-gray-800 dark:text-gray-200">user.component.ts</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredient 2: Template (Body) */}
              <div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                      <Code2 className="w-7 h-7 text-blue-700 dark:text-blue-400" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">2. THE BODY</Badge>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">Template (HTML)</h4>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    This is the <strong>structure</strong>. What users actually see on their screen.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2">What it contains:</p>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>📝 <strong>HTML elements</strong> - Buttons, inputs, text</li>
                        <li>🔗 <strong>Bindings</strong> - Connect to your data</li>
                        <li>🎭 <strong>Directives</strong> - *ngIf, *ngFor, etc.</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg border">
                      <code className="text-xs text-gray-800 dark:text-gray-200">user.component.html</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredient 3: Styles (Clothes) */}
              <div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-950/30 flex items-center justify-center">
                      <Palette className="w-7 h-7 text-pink-700 dark:text-pink-400" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">3. THE STYLE</Badge>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">Styles (CSS)</h4>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    This is the <strong>look and feel</strong>. Colors, sizes, animations - make it beautiful!
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                      <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2">What it contains:</p>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>🎨 <strong>Colors</strong> - backgrounds, text colors</li>
                        <li>📐 <strong>Layout</strong> - spacing, sizing, positioning</li>
                        <li>✨ <strong>Effects</strong> - shadows, transitions, animations</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg border">
                      <code className="text-xs text-gray-800 dark:text-gray-200">user.component.css</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How They Work Together - Animated Architecture */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
              Angular Architecture: How Data Flows 🔄
            </h4>
            
            {/* Animated Flow Diagram */}
            <div className="relative max-w-4xl mx-auto mb-8">
              {/* Component Layer */}
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl group-hover:bg-yellow-400/30 transition-all animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-6 rounded-2xl border-2 border-yellow-300 dark:border-yellow-700 hover:scale-105 transition-transform">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-yellow-500 dark:bg-yellow-600 flex items-center justify-center animate-bounce">
                        <Braces className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-yellow-500 text-white">Component (TS)</Badge>
                      <p className="text-xs text-center font-medium">count = 0</p>
                    </div>
                  </div>
                </div>

                {/* Animated Arrow */}
                <div className="flex flex-col items-center">
                  <div className="animate-pulse">
                    <svg width="60" height="60" viewBox="0 0 60 60" className="text-blue-500">
                      <path d="M10 30 L40 30 L35 25 M40 30 L35 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="45" cy="30" r="3" fill="currentColor" className="animate-ping"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-2">Data Binding</span>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl group-hover:bg-blue-400/30 transition-all animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-2xl border-2 border-blue-300 dark:border-blue-700 hover:scale-105 transition-transform">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-blue-500 dark:bg-blue-600 flex items-center justify-center animate-bounce" style={{animationDelay: '0.3s'}}>
                        <Code2 className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-blue-500 text-white">Template (HTML)</Badge>
                      <p className="text-xs text-center font-medium">{'{{ count }}'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Layer */}
              <div className="flex items-center justify-center gap-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-pink-400/20 rounded-2xl blur-xl group-hover:bg-pink-400/30 transition-all animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-6 rounded-2xl border-2 border-pink-300 dark:border-pink-700 hover:scale-105 transition-transform">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-pink-500 dark:bg-pink-600 flex items-center justify-center animate-bounce" style={{animationDelay: '0.6s'}}>
                        <Palette className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-pink-500 text-white">Styles (CSS)</Badge>
                      <p className="text-xs text-center font-medium">Visual Design</p>
                    </div>
                  </div>
                </div>

                {/* Animated Arrow Down */}
                <div className="flex flex-col items-center">
                  <div className="animate-pulse" style={{animationDelay: '0.3s'}}>
                    <svg width="60" height="60" viewBox="0 0 60 60" className="text-emerald-500" style={{transform: 'rotate(90deg)'}}>
                      <path d="M10 30 L40 30 L35 25 M40 30 L35 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="45" cy="30" r="3" fill="currentColor" className="animate-ping"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2">Renders</span>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl group-hover:bg-emerald-400/30 transition-all animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-2xl border-2 border-emerald-300 dark:border-emerald-700 hover:scale-105 transition-transform">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center">
                        <div className="text-3xl animate-pulse">🎨</div>
                      </div>
                      <Badge className="bg-emerald-500 text-white">Final View</Badge>
                      <p className="text-xs text-center font-medium">User Sees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <Workflow className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">MVVM Pattern Explained</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>Model (TypeScript)</strong>: Stores data and logic →
                <strong>View (HTML Template)</strong>: Displays data using bindings →
                <strong>ViewModel</strong>: Angular component connects them automatically! When data changes, the view updates instantly. ⚡
              </AlertDescription>
            </Alert>
          </div>

          {/* Simple Example */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Hammer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Let's See a Real Example!
            </h4>
            
            <CodeSnippetWithOutput
              title="A Simple Counter Component"
              description="All three ingredients working together"
              code={`import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',     // 👈 Name it to use in HTML
  standalone: true,
  
  // 📝 Template (HTML) - What you see
  template: \`
    <div class="counter-box">
      <h3>🎯 Click Counter</h3>
      <p class="count">{{ count }}</p>
      <button (click)="increment()">Click Me!</button>
    </div>
  \`,
  
  // 🎨 Styles (CSS) - Make it pretty
  styles: [\`
    .counter-box {
      text-align: center;
      padding: 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      color: white;
    }
    .count {
      font-size: 4rem;
      font-weight: bold;
    }
    button {
      padding: 12px 30px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 25px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover {
      transform: scale(1.1);
    }
  \`]
})
// 🧠 Logic (TypeScript) - The brain
export class CounterComponent {
  count: number = 0;        // Store the number
  
  increment(): void {        // Function to increase
    this.count++;
  }
}`}
              language="typescript"
              colorTheme="purple"
            />
          </div>

          <Alert>
            <Play className="h-5 w-5" />
            <AlertTitle>Try It Live!</AlertTitle>
            <AlertDescription>
              Want to see this counter in action? Click the button below to open an interactive playground!
            </AlertDescription>
          </Alert>

          <div className="flex justify-center mt-6">
            <Button
              onClick={() => openPlayground({
                title: "Counter Component - Your First Angular Component!",
                description: "See how TypeScript, HTML, and CSS work together to create an interactive counter. Click 'Show Live Preview' to see it running!",
                files: {
                  'src/main.ts': `import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// Counter Component - Standalone!
@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <div class="counter-box">
      <h2>🎯 Interactive Counter</h2>
      <div class="count-display">{{ count }}</div>
      <div class="button-group">
        <button (click)="decrement()" class="btn btn-danger">−</button>
        <button (click)="reset()" class="btn btn-secondary">Reset</button>
        <button (click)="increment()" class="btn btn-success">+</button>
      </div>
      <p class="info">You clicked {{ count }} time{{ count !== 1 ? 's' : '' }}</p>
    </div>
  \`,
  styles: [\`
    .counter-box {
      max-width: 500px;
      margin: 0 auto;
      padding: 3rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      text-align: center;
      color: white;
    }
    
    h2 {
      margin: 0 0 2rem 0;
      font-size: 1.8rem;
      font-weight: 700;
    }
    
    .count-display {
      font-size: 6rem;
      font-weight: 900;
      margin: 2rem 0;
      text-shadow: 0 4px 12px rgba(0,0,0,0.3);
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .button-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 2rem 0;
    }
    
    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 16px;
      font-size: 1.3rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 80px;
    }
    
    .btn-success {
      background: #10b981;
      color: white;
    }
    
    .btn-danger {
      background: #ef4444;
      color: white;
    }
    
    .btn-secondary {
      background: rgba(255,255,255,0.2);
      color: white;
      backdrop-filter: blur(10px);
    }
    
    .btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    
    .btn:active {
      transform: translateY(-2px);
    }
    
    .info {
      margin-top: 1.5rem;
      font-size: 1rem;
      opacity: 0.9;
    }
  \`]
})
class CounterComponent {
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

// App Component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  template: \`
    <div class="app-container">
      <h1>✨ My First Angular Component</h1>
      <p class="subtitle">Modern Standalone Architecture</p>
      <app-counter></app-counter>
    </div>
  \`,
  styles: [\`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
      padding: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    h1 {
      color: white;
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-align: center;
      font-weight: 900;
      text-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    
    .subtitle {
      color: rgba(255,255,255,0.7);
      font-size: 1.2rem;
      margin-bottom: 3rem;
      text-align: center;
    }
  \`]
})
class AppComponent {}

// Bootstrap the application
bootstrapApplication(AppComponent);`,
                  'src/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular Counter</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,
                  'package.json': `{
  "name": "angular-counter",
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
}`
                },
                openFile: 'src/main.ts'
              })}
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Open Interactive Playground
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Components Talk to Each Other */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Components Can Talk to Each Other!
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Just like friends sharing information
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="p-6 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="text-lg font-bold mb-4 text-emerald-700 dark:text-emerald-300">Think of it like a family 👨‍👩‍👧‍👦</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Parent Component</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Like a parent, it can pass down information (data) to its children.
                  </p>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-green-700 dark:text-green-300 mb-2">Child Component</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Like a child, it can receive data and tell the parent when something happens.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              You'll learn about specific ways components share data (like <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">@Input</code> and <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">@Output</code>) in the other lessons. For now, just remember: components are like teammates working together!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What You Learned Summary */}
      <Card className="relative overflow-hidden border-2 border-gradient-to-r from-red-200 via-purple-200 to-blue-200 dark:from-red-800 dark:via-purple-800 dark:to-blue-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <CardContent className="pt-8 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 mb-4 shadow-2xl">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              What You Learned Today! 🎉
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              You now understand the foundation of Angular!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Puzzle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Components = LEGO Blocks</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Each component is a reusable piece that you snap together to build your app. Simple and powerful!
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <PackageOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">3 Magic Ingredients</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                TypeScript (brain), HTML (body), and CSS (style) work together to create something awesome.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">They Work as a Team</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Data flows from TypeScript to HTML, CSS makes it beautiful, and everything stays in sync!
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">Components Talk</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Like friends sharing information, parent and child components can communicate with each other.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-400 dark:border-green-700">
            <Play className="h-6 w-6 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100 text-lg">Ready for More?</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Now that you understand what components are, you're ready to dive deeper! Explore the other topics in the menu to learn about templates, data binding, lifecycle hooks, and much more. Happy coding! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
