'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  FileText, CheckCircle, Code, Book, MessageSquare, 
  Users, Lightbulb, Info, AlertCircle
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssDocumentationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssDocumentation({ onOpenWebPlayground }: CssDocumentationProps) {
  const documentationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Documentation Example</title>
  <style>
    /**
     * ==========================================
     * THEME SYSTEM
     * ==========================================
     * Central color and spacing variables for the design system.
     * @author Design Team
     * @version 1.0.0
     */
    
    :root {
      /* Primary Colors */
      --color-primary: #8b5cf6;
      --color-primary-dark: #7c3aed;
      --color-primary-light: #a78bfa;
      
      /* Spacing Scale */
      --spacing-xs: 8px;
      --spacing-sm: 16px;
      --spacing-md: 24px;
      --spacing-lg: 32px;
      --spacing-xl: 48px;
      
      /* Typography */
      --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      --font-size-base: 16px;
      --line-height-base: 1.5;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-family-base);
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: var(--spacing-xl) var(--spacing-md);
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: var(--spacing-xl);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    /**
     * Component: Page Header
     * ==========================================
     * Main title for documentation pages
     * 
     * @usage
     *   <h1 class="page-title">Title</h1>
     * 
     * @notes
     *   - Responsive font size
     *   - Uses primary color from theme
     */
    .page-title {
      color: var(--color-primary);
      margin-bottom: var(--spacing-sm);
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .page-title {
        color: var(--color-primary-light);
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: var(--spacing-lg);
    }
    
    /**
     * Component: Documentation Card
     * ==========================================
     * Displays documentation examples with clear structure
     * 
     * @dependencies
     *   - Requires theme variables
     *   - Uses spacing scale
     * 
     * @accessibility
     *   - Proper contrast ratios
     *   - Dark mode support
     */
    .doc-card {
      padding: var(--spacing-md);
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      border-radius: 12px;
      border: 2px solid var(--color-primary);
      margin-bottom: var(--spacing-md);
    }
    
    @media (prefers-color-scheme: dark) {
      .doc-card {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: var(--color-primary-light);
      }
    }
    
    .doc-title {
      color: #6d28d9;
      font-weight: 700;
      margin-bottom: var(--spacing-sm);
      font-size: 1.3rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .doc-title {
        color: #ddd6fe;
      }
    }
    
    /* TODO: Add animation on hover */
    /* FIXME: Review spacing on mobile devices */
    /* NOTE: This component is used site-wide */
    
    .doc-list {
      list-style: none;
      padding: 0;
    }
    
    .doc-item {
      padding: var(--spacing-sm);
      background: white;
      border-radius: 8px;
      margin-bottom: var(--spacing-xs);
      border-left: 4px solid var(--color-primary);
    }
    
    @media (prefers-color-scheme: dark) {
      .doc-item {
        background: #0f172a;
        border-left-color: var(--color-primary-light);
        color: #e2e8f0;
      }
    }
    
    /**
     * ==========================================
     * UTILITY CLASSES
     * ==========================================
     */
    
    /* Text alignment utilities */
    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .text-right { text-align: right; }
    
    /* Margin utilities */
    .mt-sm { margin-top: var(--spacing-sm); }
    .mb-sm { margin-bottom: var(--spacing-sm); }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="page-title">📚 CSS Documentation</h1>
    <p class="subtitle">Well-documented CSS is maintainable CSS</p>
    
    <div class="doc-card">
      <h3 class="doc-title">✨ Documentation Benefits</h3>
      
      <ul class="doc-list">
        <li class="doc-item">
          <strong>👥 Team Collaboration:</strong> Help others understand your code
        </li>
        <li class="doc-item">
          <strong>🔄 Maintainability:</strong> Easier to update and refactor
        </li>
        <li class="doc-item">
          <strong>📖 Knowledge Sharing:</strong> Document design decisions
        </li>
        <li class="doc-item">
          <strong>🚀 Onboarding:</strong> Help new team members get started
        </li>
        <li class="doc-item">
          <strong>💡 Context:</strong> Explain "why" not just "what"
        </li>
      </ul>
    </div>
    
    <div style="background: #f3e8ff; padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
      <p style="color: #6b21a8; font-weight: 600; margin-bottom: 8px;">💡 Pro Tip</p>
      <p style="color: #7c3aed; font-size: 0.9rem;">
        Document your CSS as you write it, not as an afterthought. 
        Future you (and your team) will thank you!
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileText}
        category="CSS · Best Practices"
        title="CSS Documentation"
        description="Document your CSS for better maintainability and team collaboration"
        colorTheme="purple"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <FileText className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Why Document CSS?
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            📚 Make your CSS understandable and maintainable for everyone!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Documentation Benefits
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Team Collaboration</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Help teammates understand your code quickly
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Context & Decisions</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Document why certain approaches were chosen
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Easier Maintenance</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Update and refactor code with confidence
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200/50">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">
                  What to Document
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-sm mb-1 text-purple-700 dark:text-purple-300">📐 Complex Logic</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Calculations, layouts</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-sm mb-1 text-blue-700 dark:text-blue-300">🎨 Design System</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Colors, spacing, fonts</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-sm mb-1 text-green-700 dark:text-green-300">🔧 Utilities</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Helper classes, mixins</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-sm mb-1 text-orange-700 dark:text-orange-300">⚠️ Workarounds</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Browser hacks, fixes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100 dark:from-purple-900/30 dark:via-fuchsia-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Documentation</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Clear Comments
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Style Guides
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Usage Examples
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Team Standards
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Document as you code, not later
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
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Documentation Example
          </CardTitle>
          <CardDescription>
            See how to document CSS effectively
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={documentationExample}
            title="Well-Documented CSS Example"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Comment Types
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Section Comments</h4>
              <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200"><code>{`/**
 * ==========================================
 * TYPOGRAPHY SYSTEM
 * ==========================================
 * Base typography styles and scales
 */`}</code></pre>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Component Documentation</h4>
              <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200"><code>{`/**
 * Component: Button
 * @usage <button class="btn btn--primary">Click</button>
 * @dependencies Requires base button styles
 * @notes Available in 3 sizes: small, medium, large
 */`}</code></pre>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Inline Comments</h4>
              <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200"><code>{`/* TODO: Add animation on hover */
/* FIXME: Review mobile spacing */
/* NOTE: This is a temporary workaround */`}</code></pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Be concise</strong> - Write clear, brief comments</li>
            <li><strong>Explain why</strong> - Not just what the code does</li>
            <li><strong>Keep updated</strong> - Update docs when code changes</li>
            <li><strong>Use standards</strong> - Follow team conventions</li>
            <li><strong>Document gotchas</strong> - Explain workarounds and hacks</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
        <Info className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-purple-900 dark:text-purple-100">Documentation Tools</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200">
          <div className="space-y-2 mt-2">
            <div><strong>📖 Storybook:</strong> Component documentation and testing</div>
            <div><strong>📝 Styleguidist:</strong> Living style guide generator</div>
            <div><strong>🎨 KSS:</strong> CSS documentation generator</div>
            <div><strong>📚 Docz:</strong> Documentation powered by MDX</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
