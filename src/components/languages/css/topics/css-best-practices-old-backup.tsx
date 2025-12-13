'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Award, CheckCircle, Code, Zap, Shield, 
  Layers, Target, Users, Sparkles, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssBestPracticesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBestPractices({ onOpenWebPlayground }: CssBestPracticesProps) {
  const [selectedPractice, setSelectedPractice] = useState('organization');

  const bestPractices = [
    { id: 'organization', name: 'Organization', icon: Layers, color: 'bg-blue-500' },
    { id: 'naming', name: 'Naming', icon: Code, color: 'bg-purple-500' },
    { id: 'performance', name: 'Performance', icon: Zap, color: 'bg-green-500' },
    { id: 'maintainability', name: 'Maintainability', icon: Users, color: 'bg-orange-500' },
  ];

  const bestPracticesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Best Practices</title>
  <style>
    /**
     * CSS Best Practices Example
     * Following industry standards and conventions
     */
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      /* Design Tokens */
      --color-primary: #10b981;
      --color-secondary: #059669;
      --spacing-unit: 8px;
      --spacing-xs: calc(var(--spacing-unit) * 1);
      --spacing-sm: calc(var(--spacing-unit) * 2);
      --spacing-md: calc(var(--spacing-unit) * 3);
      --spacing-lg: calc(var(--spacing-unit) * 4);
      --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      --border-radius: 12px;
    }
    
    body {
      font-family: var(--font-family);
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      padding: var(--spacing-lg) var(--spacing-md);
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
    }
    
    /* Component: Container */
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: var(--spacing-lg);
      border-radius: var(--border-radius);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    /* Component: Header */
    .header {
      text-align: center;
      margin-bottom: var(--spacing-lg);
    }
    
    .header__title {
      color: var(--color-primary);
      font-size: 2.5rem;
      margin-bottom: var(--spacing-sm);
    }
    
    @media (prefers-color-scheme: dark) {
      .header__title {
        color: #34d399;
      }
    }
    
    .header__subtitle {
      color: #64748b;
    }
    
    /* Component: Card Grid */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-lg);
    }
    
    /* Component: Card */
    .card {
      padding: var(--spacing-md);
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-radius: var(--border-radius);
      border: 2px solid var(--color-primary);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        border-color: #34d399;
      }
    }
    
    .card__icon {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-sm);
      text-align: center;
    }
    
    .card__title {
      color: #065f46;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: var(--spacing-xs);
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .card__title {
        color: #a7f3d0;
      }
    }
    
    .card__description {
      color: #047857;
      font-size: 0.9rem;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .card__description {
        color: #d1fae5;
      }
    }
    
    /* Component: Info Box */
    .info-box {
      background: #dcfce7;
      border-left: 4px solid var(--color-primary);
      padding: var(--spacing-md);
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #065f46;
        border-left-color: #34d399;
      }
    }
    
    .info-box__title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: var(--spacing-xs);
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box__title {
        color: #a7f3d0;
      }
    }
    
    .info-box__text {
      color: #047857;
      line-height: 1.6;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box__text {
        color: #d1fae5;
      }
    }
    
    /* Utility: Responsive */
    @media (max-width: 768px) {
      .container {
        padding: var(--spacing-md);
      }
      
      .header__title {
        font-size: 2rem;
      }
      
      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <h1 class="header__title">🏆 CSS Best Practices</h1>
      <p class="header__subtitle">Follow these principles for clean, maintainable CSS</p>
    </header>
    
    <div class="card-grid">
      <article class="card">
        <div class="card__icon">📐</div>
        <h3 class="card__title">BEM Naming</h3>
        <p class="card__description">Block__Element--Modifier pattern for clarity</p>
      </article>
      
      <article class="card">
        <div class="card__icon">🎨</div>
        <h3 class="card__title">CSS Variables</h3>
        <p class="card__description">Centralized design tokens and theming</p>
      </article>
      
      <article class="card">
        <div class="card__icon">⚡</div>
        <h3 class="card__title">Performance</h3>
        <p class="card__description">Optimized selectors and minimal CSS</p>
      </article>
      
      <article class="card">
        <div class="card__icon">📚</div>
        <h3 class="card__title">Organization</h3>
        <p class="card__description">Structured, modular architecture</p>
      </article>
    </div>
    
    <aside class="info-box">
      <h3 class="info-box__title">💡 Key Principles</h3>
      <p class="info-box__text">
        Write CSS that is predictable, reusable, maintainable, and scalable. 
        Use meaningful class names, follow conventions, and document your decisions. 
        Think of your CSS as a living system that will grow with your project.
      </p>
    </aside>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Award}
        category="CSS · Professional Development"
        title="CSS Best Practices"
        description="Write clean, maintainable, and scalable CSS following industry standards"
        colorTheme="emerald"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-emerald-700 dark:text-emerald-300">
            <div className="relative">
              <Award className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Professional CSS Standards
          </CardTitle>
          <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
            🏆 Follow industry best practices for production-ready CSS!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Core Principles
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-emerald-700 dark:text-emerald-300">Predictable</div>
                      <div className="text-sm text-emerald-600 dark:text-emerald-400">
                        CSS behaves as expected without surprises
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Layers className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Reusable</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Components can be used across the project
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Maintainable</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Easy to understand and modify by any developer
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">Scalable</div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">
                        Grows gracefully as the project expands
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200/50">
                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">
                  Code Quality Checklist
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="font-semibold text-sm">Valid CSS</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">No syntax errors</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="font-semibold text-sm">Consistent Naming</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Follow conventions</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="font-semibold text-sm">Organized Structure</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Logical grouping</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="font-semibold text-sm">Documented Code</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Clear comments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900/30 dark:via-green-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="font-bold text-lg text-emerald-700 dark:text-emerald-300">Best Practices</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Clean Code
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Standards
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Performance
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Maintainability
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Consistency is key - follow your team's conventions
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
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            Best Practices Categories
          </CardTitle>
          <CardDescription>
            Essential areas for writing professional CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {bestPractices.map((practice) => (
              <div
                key={practice.id}
                onClick={() => setSelectedPractice(practice.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPractice === practice.id
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${practice.color} rounded-lg flex items-center justify-center`}>
                    <practice.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm text-gray-900 dark:text-gray-100">{practice.name}</div>
                </div>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            html={bestPracticesExample}
            title="CSS Best Practices - Clean Code Example"
            colorTheme="emerald"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Essential Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300">✅ Do</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Use meaningful class names</strong> that describe purpose, not appearance
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Keep specificity low</strong> to make styles easier to override
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Use CSS variables</strong> for design tokens and theming
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Mobile-first approach</strong> for responsive design
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-red-700 dark:text-red-300">❌ Don't</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 text-center font-bold">×</div>
                  <div className="text-sm">
                    <strong>Overuse !important</strong> - it makes code hard to maintain
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 text-center font-bold">×</div>
                  <div className="text-sm">
                    <strong>Deep nesting</strong> - increases specificity and complexity
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 text-center font-bold">×</div>
                  <div className="text-sm">
                    <strong>Inline styles</strong> - separates presentation from content
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 text-center font-bold">×</div>
                  <div className="text-sm">
                    <strong>Magic numbers</strong> - use variables for repeated values
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices Summary</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Organize logically</strong> - Group related styles together</li>
            <li><strong>Name consistently</strong> - Follow BEM or similar methodology</li>
            <li><strong>Optimize performance</strong> - Minimize CSS size and complexity</li>
            <li><strong>Document decisions</strong> - Comment complex or non-obvious code</li>
            <li><strong>Test thoroughly</strong> - Verify across browsers and devices</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
        <Info className="h-4 w-4 text-emerald-600" />
        <AlertTitle className="text-emerald-900 dark:text-emerald-100">Methodologies & Frameworks</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200">
          <div className="space-y-2 mt-2">
            <div><strong>🎯 BEM:</strong> Block Element Modifier naming convention</div>
            <div><strong>⚛️ SMACSS:</strong> Scalable and Modular Architecture for CSS</div>
            <div><strong>🎨 OOCSS:</strong> Object-Oriented CSS principles</div>
            <div><strong>🏗️ ITCSS:</strong> Inverted Triangle CSS architecture</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
