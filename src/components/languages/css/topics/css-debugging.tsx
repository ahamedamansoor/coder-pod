'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Bug, CheckCircle, Code, Search, Target, 
  Layers, AlertTriangle, Eye, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssDebuggingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssDebugging({ onOpenWebPlayground }: CssDebuggingProps) {
  const [selectedMethod, setSelectedMethod] = useState('devtools');

  const debuggingMethods = [
    { id: 'devtools', name: 'DevTools', icon: Search, color: 'bg-blue-500' },
    { id: 'border', name: 'Border Method', icon: Target, color: 'bg-green-500' },
    { id: 'background', name: 'Background Colors', icon: Layers, color: 'bg-purple-500' },
    { id: 'console', name: 'Console Logging', icon: Code, color: 'bg-orange-500' },
  ];

  const devToolsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Debugging - DevTools</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #ef4444;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fca5a5;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .debug-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .debug-card {
      padding: 24px;
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      border-radius: 12px;
      border: 2px solid #ef4444;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .debug-card {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
        border-color: #fca5a5;
      }
    }
    
    .debug-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    
    .debug-title {
      color: #991b1b;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .debug-title {
        color: #fca5a5;
      }
    }
    
    .debug-desc {
      color: #64748b;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .debug-desc {
        color: #cbd5e0;
      }
    }
    
    .info-box {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #78350f;
        border-left-color: #fbbf24;
      }
    }
    
    .info-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #fde68a;
      }
    }
    
    .shortcut-list {
      list-style: none;
      padding: 0;
    }
    
    .shortcut-item {
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .shortcut-item {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
    
    .shortcut-key {
      background: #1e293b;
      color: white;
      padding: 4px 12px;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🐛 CSS Debugging</h1>
    <p class="subtitle">Master debugging tools and techniques</p>
    
    <div class="debug-grid">
      <div class="debug-card">
        <div class="debug-icon">🔍</div>
        <div class="debug-title">Inspect Element</div>
        <p class="debug-desc">Right-click and inspect any element</p>
      </div>
      
      <div class="debug-card">
        <div class="debug-icon">🎨</div>
        <div class="debug-title">Live Edit</div>
        <p class="debug-desc">Test CSS changes in real-time</p>
      </div>
      
      <div class="debug-card">
        <div class="debug-icon">📊</div>
        <div class="debug-title">Computed Styles</div>
        <p class="debug-desc">See final applied values</p>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">⌨️ DevTools Shortcuts</div>
      <ul class="shortcut-list">
        <li class="shortcut-item">
          <span>Open DevTools</span>
          <span class="shortcut-key">F12 or Ctrl+Shift+I</span>
        </li>
        <li class="shortcut-item">
          <span>Inspect Element</span>
          <span class="shortcut-key">Ctrl+Shift+C</span>
        </li>
        <li class="shortcut-item">
          <span>Toggle Device Mode</span>
          <span class="shortcut-key">Ctrl+Shift+M</span>
        </li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Bug}
        category="CSS · Debugging & Testing"
        title="CSS Debugging"
        description="Find and fix CSS issues with professional debugging techniques"
        colorTheme="red"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-red-700 dark:text-red-300">
            <div className="relative">
              <Bug className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            CSS Debugging Process
          </CardTitle>
          <CardDescription className="text-lg text-red-600 dark:text-red-400">
            🐛 Systematic approach to identifying and fixing CSS issues!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-red-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-red-700 dark:text-red-300 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  The Debugging Workflow
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <div className="font-semibold text-red-700 dark:text-red-300">Identify the Problem</div>
                      <div className="text-sm text-red-600 dark:text-red-400">
                        What exactly isn't working as expected?
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">Inspect with DevTools</div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">
                        Right-click element → Inspect
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <div className="font-semibold text-yellow-700 dark:text-yellow-300">Check Computed Styles</div>
                      <div className="text-sm text-yellow-600 dark:text-yellow-400">
                        See which CSS is actually applied
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Test & Fix</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Edit live in DevTools, then update code
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200/50">
                <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">
                  Common Issues
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <div className="font-semibold text-sm">Specificity</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Styles not applying</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-orange-500" />
                      <div className="font-semibold text-sm">Box Model</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Sizing issues</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-yellow-500" />
                      <div className="font-semibold text-sm">Z-Index</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Stacking problems</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-green-500" />
                      <div className="font-semibold text-sm">Syntax Errors</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Invalid CSS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 dark:from-red-900/30 dark:via-orange-900/30 dark:to-yellow-900/30 p-6 rounded-xl border border-red-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🐛</div>
                  <div className="font-bold text-lg text-red-700 dark:text-red-300">Debugging Tools</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Browser DevTools
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      CSS Validators
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual Methods
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Console Logging
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Master browser DevTools - they're your best debugging friend!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Search className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            Debugging Methods
          </CardTitle>
          <CardDescription>
            Different techniques for finding and fixing CSS issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {debuggingMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedMethod === method.id
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm text-gray-900 dark:text-gray-100">{method.name}</div>
                </div>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            html={devToolsExample}
            title="CSS Debugging with Browser DevTools"
            colorTheme="red"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Debugging Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Border Method
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                Add colored borders to visualize element boundaries
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                * {'{'} border: 1px solid red; {'}'}
              </code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Background Colors
              </h4>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                Use temporary background colors for layout debugging
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                div {'{'} background: rgba(255,0,0,0.1); {'}'}
              </code>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Console Logging
              </h4>
              <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                Log computed styles to the console for analysis
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                console.log(getComputedStyle(el))
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Debugging Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use DevTools</strong> - Master browser developer tools for efficient debugging</li>
            <li><strong>Check specificity</strong> - Understand CSS specificity and cascade rules</li>
            <li><strong>Validate CSS</strong> - Use validators to catch syntax errors early</li>
            <li><strong>Test incrementally</strong> - Make small changes and test frequently</li>
            <li><strong>Document fixes</strong> - Keep notes on common issues and solutions</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
        <Info className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-900 dark:text-red-100">DevTools Shortcuts</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200">
          <div className="space-y-2 mt-2">
            <div><strong>F12 or Ctrl+Shift+I:</strong> Open DevTools</div>
            <div><strong>Ctrl+Shift+C:</strong> Inspect Element Mode</div>
            <div><strong>Ctrl+Shift+M:</strong> Toggle Device Mode</div>
            <div><strong>Ctrl+Shift+P:</strong> Command Menu</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
