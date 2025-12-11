'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  GitBranch, 
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  Zap,
  Split
} from 'lucide-react';

interface SassIfElseNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassIfElseNew({ onOpenWebPlayground }: SassIfElseNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitBranch}
        category="Sass/SCSS · Control & Logic"
        title="@if & @else"
        description="Learn conditional logic in Sass. Create dynamic styles that change based on variables, theme modes, breakpoints, and more."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @if?"
            description="Conditional logic for dynamic styles"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@if</strong> lets you write conditional logic directly in your stylesheets. Generate different CSS based on variables, create theme variations, handle responsive logic, and build smart component systems!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Condition True</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Code inside @if runs
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">@if true {'{'}</div>
                <div className="text-green-600 dark:text-green-400 ml-2">color: green;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Condition False</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Code is skipped
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">@if false {'{'}</div>
                <div className="text-gray-400 dark:text-gray-600 ml-2 line-through">color: red;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <GitBranch className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Smart Styles!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Use @if to generate different CSS based on conditions—perfect for themes, responsive logic, and feature flags!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic @if */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic @if"
            description="Single condition"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Simple @if Statement"
              code={`$theme: 'dark';

.button {
  padding: 0.75rem 1.5rem;
  
  @if $theme == 'dark' {
    background: #1e293b;
    color: white;
  }
}`}
              output={[
                '✓ Condition is true',
                '✓ Dark theme styles applied'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              code={`.button {
  padding: 0.75rem 1.5rem;
  background: #1e293b;
  color: white;
}`}
              language="css"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Number Comparison"
              code={`$screen-width: 1200px;

.container {
  @if $screen-width > 1024px {
    max-width: 1200px;
    padding: 2rem;
  }
}`}
              output={[
                '✓ 1200px > 1024px is true',
                '✓ Desktop styles applied'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* @if @else */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Split className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="@if @else"
            description="Two-way branching"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="@if with @else"
              code={`$theme: 'light';

.card {
  @if $theme == 'dark' {
    background: #1e293b;
    color: white;
  } @else {
    background: white;
    color: #1e293b;
  }
}`}
              output={[
                '✓ Condition is false',
                '✓ @else block runs',
                '✓ Light theme applied'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Boolean Variables"
              code={`$is-mobile: false;

.navigation {
  @if $is-mobile {
    // Mobile: Hamburger menu
    display: flex;
    flex-direction: column;
  } @else {
    // Desktop: Horizontal menu
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* @else if */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="@else if"
            description="Multiple conditions"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Multiple Conditions"
              code={`$screen-width: 800px;

.container {
  @if $screen-width > 1024px {
    max-width: 1200px;
    padding: 3rem;
  } @else if $screen-width > 768px {
    max-width: 900px;
    padding: 2rem;
  } @else if $screen-width > 480px {
    max-width: 100%;
    padding: 1.5rem;
  } @else {
    max-width: 100%;
    padding: 1rem;
  }
}`}
              output={[
                '✓ 800px > 1024px is false',
                '✓ 800px > 768px is true',
                '✓ Second condition matched!'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Theme Variants"
              code={`$theme: 'ocean';

.button {
  @if $theme == 'dark' {
    background: #1e293b;
    color: white;
  } @else if $theme == 'light' {
    background: white;
    color: #1e293b;
  } @else if $theme == 'ocean' {
    background: #0ea5e9;
    color: white;
  } @else {
    // Default theme
    background: #3b82f6;
    color: white;
  }
}`}
              output={[
                '✓ First two conditions false',
                '✓ Third condition true',
                '✓ Ocean theme applied!'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Conditional Styles in Action"
          description="Theme switcher with @if/@else"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card card-primary">
    <h3>Primary Card</h3>
    <p>Theme-aware styling</p>
  </div>
  
  <div class="card card-success">
    <h3>Success Card</h3>
    <p>Conditional colors</p>
  </div>
  
  <div class="card card-warning">
    <h3>Warning Card</h3>
    <p>Dynamic properties</p>
  </div>
</div>`}
          css={`// Theme configuration
$theme: 'dark';  // Try: 'light' or 'dark'
$size: 'medium';  // Try: 'small', 'medium', 'large'

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  // Conditional background
  @if $theme == 'dark' {
    background: #0f172a;
  } @else {
    background: #f8fafc;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  justify-content: center;
}

.card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  // Size variants with @if
  @if $size == 'small' {
    padding: 1rem;
    width: 200px;
  } @else if $size == 'medium' {
    padding: 1.5rem;
    width: 250px;
  } @else if $size == 'large' {
    padding: 2rem;
    width: 300px;
  }
  
  // Theme-based card background
  @if $theme == 'dark' {
    background: #1e293b;
    border: 1px solid #334155;
  } @else {
    background: white;
    border: 1px solid #e2e8f0;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    
    @if $theme == 'dark' {
      color: white;
    } @else {
      color: #1e293b;
    }
  }
  
  p {
    font-size: 0.875rem;
    
    @if $theme == 'dark' {
      color: #94a3b8;
    } @else {
      color: #64748b;
    }
  }
}

// Color variants with conditional styling
.card-primary {
  @if $theme == 'dark' {
    border-left: 4px solid #3b82f6;
    background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
  } @else {
    border-left: 4px solid #3b82f6;
    background: linear-gradient(135deg, #dbeafe 0%, white 100%);
  }
}

.card-success {
  @if $theme == 'dark' {
    border-left: 4px solid #10b981;
    background: linear-gradient(135deg, #064e3b 0%, #1e293b 100%);
  } @else {
    border-left: 4px solid #10b981;
    background: linear-gradient(135deg, #d1fae5 0%, white 100%);
  }
}

.card-warning {
  @if $theme == 'dark' {
    border-left: 4px solid #f59e0b;
    background: linear-gradient(135deg, #78350f 0%, #1e293b 100%);
  } @else {
    border-left: 4px solid #f59e0b;
    background: linear-gradient(135deg, #fef3c7 0%, white 100%);
  }
}`}
          title="Theme-Aware Cards"
          description="Change $theme variable to see different styles"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Complex Conditions */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Complex Conditions"
            description="Combining with logical operators"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Using AND (and)"
              code={`$is-mobile: true;
$has-touch: true;

.button {
  @if $is-mobile and $has-touch {
    // Touch-optimized mobile button
    min-height: 44px;
    min-width: 44px;
    font-size: 16px;
  }
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Using OR (or)"
              code={`$is-admin: false;
$is-moderator: true;

.dashboard {
  @if $is-admin or $is-moderator {
    display: block;
    // Show dashboard
  } @else {
    display: none;
  }
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Using NOT (not)"
              code={`$is-production: false;

.debug-info {
  @if not $is-production {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
  }
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@if</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run code if condition is true
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@else</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run code if condition is false
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">@else if</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Check multiple conditions
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Logical Ops</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combine with and, or, not
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
