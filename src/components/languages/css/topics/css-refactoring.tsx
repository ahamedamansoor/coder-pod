'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  RefreshCw, CheckCircle, Code, Trash2, Zap, 
  Target, Layers, AlertCircle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssRefactoringProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssRefactoring({ onOpenWebPlayground }: CssRefactoringProps) {
  const [selectedStep, setSelectedStep] = useState('before');

  const refactoringSteps = [
    { id: 'before', name: 'Before', icon: AlertCircle, color: 'bg-red-500' },
    { id: 'identify', name: 'Identify Issues', icon: Target, color: 'bg-orange-500' },
    { id: 'refactor', name: 'Refactor', icon: RefreshCw, color: 'bg-blue-500' },
    { id: 'after', name: 'After', icon: CheckCircle, color: 'bg-green-500' },
  ];

  const refactoringExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Refactoring Example</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
      }
    }
    
    .container {
      max-width: 1000px;
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
      color: #06b6d4;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* ✅ REFACTORED: Using CSS Variables */
    :root {
      --card-padding: 24px;
      --card-radius: 12px;
      --card-border: 2px;
      --spacing: 20px;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing);
      margin-bottom: var(--spacing);
    }
    
    /* ✅ REFACTORED: DRY - Single card base class */
    .card {
      padding: var(--card-padding);
      border-radius: var(--card-radius);
      border: var(--card-border) solid;
      transition: all 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    
    /* ✅ REFACTORED: Modifiers instead of duplicate styles */
    .card--before {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      border-color: #ef4444;
    }
    
    .card--after {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-color: #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .card--before {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
        border-color: #f87171;
      }
      
      .card--after {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        border-color: #34d399;
      }
    }
    
    .card__title {
      font-weight: 700;
      font-size: 1.3rem;
      margin-bottom: 16px;
    }
    
    .card--before .card__title {
      color: #b91c1c;
    }
    
    .card--after .card__title {
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .card--before .card__title {
        color: #fca5a5;
      }
      
      .card--after .card__title {
        color: #a7f3d0;
      }
    }
    
    .issue-list {
      list-style: none;
      padding: 0;
    }
    
    .issue-item {
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      align-items: start;
      gap: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .issue-item {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
    
    .icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }
    
    .card--before .icon {
      color: #ef4444;
    }
    
    .card--after .icon {
      color: #10b981;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 CSS Refactoring</h1>
    <p class="subtitle">Clean, maintainable, and scalable CSS</p>
    
    <div class="comparison">
      <div class="card card--before">
        <h3 class="card__title">❌ Before Refactoring</h3>
        <ul class="issue-list">
          <li class="issue-item">
            <span class="icon">×</span>
            <span>Duplicate styles</span>
          </li>
          <li class="issue-item">
            <span class="icon">×</span>
            <span>Hard-coded values</span>
          </li>
          <li class="issue-item">
            <span class="icon">×</span>
            <span>Complex selectors</span>
          </li>
          <li class="issue-item">
            <span class="icon">×</span>
            <span>No modularity</span>
          </li>
        </ul>
      </div>
      
      <div class="card card--after">
        <h3 class="card__title">✅ After Refactoring</h3>
        <ul class="issue-list">
          <li class="issue-item">
            <span class="icon">✓</span>
            <span>DRY principles</span>
          </li>
          <li class="issue-item">
            <span class="icon">✓</span>
            <span>CSS variables</span>
          </li>
          <li class="issue-item">
            <span class="icon">✓</span>
            <span>BEM methodology</span>
          </li>
          <li class="issue-item">
            <span class="icon">✓</span>
            <span>Reusable components</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={RefreshCw}
        category="CSS · Best Practices"
        title="CSS Refactoring"
        description="Clean up and improve your CSS for better maintainability"
        colorTheme="cyan"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <RefreshCw className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is CSS Refactoring?
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🔄 Improve your CSS structure without changing its functionality!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Why Refactor CSS?
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <Zap className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-cyan-700 dark:text-cyan-300">Improve Performance</div>
                      <div className="text-sm text-cyan-600 dark:text-cyan-400">
                        Remove unused code and optimize selectors
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Layers className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Better Organization</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Structure code for easier maintenance
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Reduce Technical Debt</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Clean up legacy code and workarounds
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200/50">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">
                  Common Refactoring Tasks
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Trash2 className="w-4 h-4 text-red-500" />
                      <div className="font-semibold text-sm">Remove Duplicates</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">DRY principle</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-blue-500" />
                      <div className="font-semibold text-sm">Simplify Selectors</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Reduce specificity</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-purple-500" />
                      <div className="font-semibold text-sm">Use Variables</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">CSS custom properties</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      <div className="font-semibold text-sm">Extract Components</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Reusable patterns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-teal-100 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🔄</div>
                  <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">Refactoring</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Clean Code
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Maintainable
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Scalable
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Performant
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Refactor incrementally, not all at once
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
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <RefreshCw className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            Refactoring Process
          </CardTitle>
          <CardDescription>
            Step-by-step approach to refactoring CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {refactoringSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setSelectedStep(step.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedStep === step.id
                    ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm text-gray-900 dark:text-gray-100">{step.name}</div>
                </div>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            html={refactoringExample}
            title="CSS Refactoring - Before and After"
            colorTheme="cyan"
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
            Refactoring Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-blue-700 dark:text-blue-300">Code Quality</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Remove duplicate code</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Simplify selectors</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Use CSS variables</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-700 dark:text-green-300">Organization</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Group related styles</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Follow naming convention</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Extract reusable components</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Start small</strong> - Refactor one component at a time</li>
            <li><strong>Test thoroughly</strong> - Verify nothing breaks after refactoring</li>
            <li><strong>Use version control</strong> - Commit before and after refactoring</li>
            <li><strong>Document changes</strong> - Note what and why you refactored</li>
            <li><strong>Regular maintenance</strong> - Schedule periodic refactoring sessions</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <Info className="h-4 w-4 text-cyan-600" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100">Refactoring Tools</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200">
          <div className="space-y-2 mt-2">
            <div><strong>🔍 UnCSS:</strong> Remove unused CSS</div>
            <div><strong>📦 PurgeCSS:</strong> Eliminate unused styles</div>
            <div><strong>🎨 cssnano:</strong> Optimize and minify CSS</div>
            <div><strong>🔧 Stylelint:</strong> Enforce code standards</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
