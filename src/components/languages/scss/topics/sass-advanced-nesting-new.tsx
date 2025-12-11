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
  Layers, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  GitBranch,
  AlertTriangle,
  Zap
} from 'lucide-react';

interface SassAdvancedNestingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassAdvancedNestingNew({ onOpenWebPlayground }: SassAdvancedNestingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="Sass/SCSS · Advanced Features"
        title="Advanced Nesting Patterns"
        description="Master complex nesting, BEM methodology with &, modifier patterns, and nesting best practices."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Advanced Nesting Patterns"
            description="Write maintainable, scalable CSS with powerful nesting techniques"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Nesting is one of SCSS's most powerful features, allowing you to organize styles hierarchically. Learn advanced patterns including <strong>parent selector (&)</strong>, <strong>BEM methodology</strong>, <strong>modifier patterns</strong>, and best practices to avoid over-nesting!
          </p>

          <CodeSnippetWithOutput
            title="Basic Parent Selector (&)"
            code={`.button {
  background: blue;
  color: white;
  
  &:hover {
    background: darkblue;
  }
  
  &.active {
    background: green;
  }
  
  &__icon {
    margin-right: 8px;
  }
}`}
            output={[
              '.button { background: blue; color: white; }',
              '.button:hover { background: darkblue; }',
              '.button.active { background: green; }',
              '.button__icon { margin-right: 8px; }'
            ]}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Layers className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Parent Selector (&)</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              The <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">&</code> references the parent selector, allowing flexible combinations!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* BEM with & */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="BEM Methodology with &"
            description="Block Element Modifier naming convention"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">BEM Structure</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Block:</strong> <code>.card</code> - Standalone component</li>
                <li><strong>Element:</strong> <code>.card__header</code> - Part of block</li>
                <li><strong>Modifier:</strong> <code>.card--featured</code> - Variation of block</li>
              </ul>
            </div>

            <CodeSnippetWithOutput
              title="BEM Pattern with &"
              code={`.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  
  // Elements use &__
  &__header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  &__body {
    line-height: 1.6;
  }
  
  &__footer {
    margin-top: 1rem;
    text-align: right;
  }
  
  // Modifiers use &--
  &--featured {
    border: 2px solid gold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  &--compact {
    padding: 0.5rem;
  }
}`}
              output={[
                '.card { background: white; padding: 1rem; ... }',
                '.card__header { font-size: 1.5rem; ... }',
                '.card__body { line-height: 1.6; }',
                '.card__footer { margin-top: 1rem; ... }',
                '.card--featured { border: 2px solid gold; ... }',
                '.card--compact { padding: 0.5rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Compound Selectors */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Compound Selectors"
            description="Combining & with other selectors"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="& at the End"
              code={`.button {
  background: blue;
  
  // Prepend class
  .dark & {
    background: navy;
  }
  
  // Sibling selector
  & + & {
    margin-left: 1rem;
  }
  
  // Adjacent parent
  .form & {
    width: 100%;
  }
}`}
              output={[
                '.button { background: blue; }',
                '.dark .button { background: navy; }',
                '.button + .button { margin-left: 1rem; }',
                '.form .button { width: 100%; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Multiple & References"
              code={`.button {
  // Combine with other classes
  &.primary {
    background: blue;
  }
  
  &.secondary {
    background: gray;
  }
  
  // State combinations
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
  
  // Multiple ancestors
  .dark &.primary {
    background: darkblue;
  }
}`}
              output={[
                '.button.primary { background: blue; }',
                '.button.secondary { background: gray; }',
                '.button:hover:not(:disabled) { transform: scale(1.05); }',
                '.dark .button.primary { background: darkblue; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Nested Media Queries */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Nested Media Queries"
            description="Keep responsive styles with their components"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Media Queries Inside Selectors"
              code={`.sidebar {
  width: 300px;
  background: white;
  padding: 2rem;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
  
  &__title {
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
  
  &--collapsed {
    width: 80px;
    
    @media (max-width: 768px) {
      width: 0;
      padding: 0;
    }
  }
}`}
              output={[
                '.sidebar { width: 300px; background: white; padding: 2rem; }',
                '@media (max-width: 768px) {',
                '  .sidebar { width: 100%; padding: 1rem; }',
                '  .sidebar__title { font-size: 1.25rem; }',
                '  .sidebar--collapsed { width: 0; padding: 0; }',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Co-located Styles!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Nesting media queries keeps responsive styles with their components for better maintainability.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Nesting Best Practices"
            description="Avoid common pitfalls"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✓ Good Practices</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Max 3-4 levels deep</li>
                <li>• Use BEM for clarity</li>
                <li>• Nest media queries</li>
                <li>• Group related styles</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">✗ Avoid</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Deep nesting (5+ levels)</li>
                <li>• Overly specific selectors</li>
                <li>• Nesting just because</li>
                <li>• Complex combinations</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="❌ Too Much Nesting (Bad)"
              code={`.page {
  .container {
    .sidebar {
      .menu {
        .item {
          .link {
            color: blue; // 6 levels deep!
          }
        }
      }
    }
  }
}`}
              output={[
                '// Results in:',
                '.page .container .sidebar .menu .item .link {',
                '  color: blue;',
                '}',
                '// Too specific and hard to override!'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="✅ Better Approach (Good)"
              code={`.page {
  // Top-level styles
}

.sidebar {
  // Sidebar styles
  
  &__menu {
    // Menu styles
  }
  
  &__item {
    // Item styles
  }
  
  &__link {
    color: blue; // Flat, BEM structure
  }
}`}
              output={[
                '.page { ... }',
                '.sidebar { ... }',
                '.sidebar__menu { ... }',
                '.sidebar__item { ... }',
                '.sidebar__link { color: blue; }',
                '// Much cleaner and maintainable!'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Advanced Nesting in Action"
          description="Complete BEM component with nesting"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card">
    <div class="card__header">
      <h3>Standard Card</h3>
    </div>
    <div class="card__body">
      <p>This is a standard card with BEM structure.</p>
    </div>
    <div class="card__footer">
      <button class="card__button">Action</button>
    </div>
  </div>
  
  <div class="card card--featured">
    <div class="card__header">
      <h3>Featured Card</h3>
    </div>
    <div class="card__body">
      <p>This card uses the featured modifier.</p>
    </div>
    <div class="card__footer">
      <button class="card__button card__button--primary">Featured Action</button>
    </div>
  </div>
</div>`}
          css={`// Advanced nesting with BEM pattern

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  // Element: Header
  &__header {
    padding: 1.5rem;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-bottom: 2px solid #e2e8f0;
    
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      border-bottom-color: #334155;
    }
    
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
  
  // Element: Body
  &__body {
    padding: 1.5rem;
    
    p {
      line-height: 1.6;
      color: #64748b;
      
      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }
  }
  
  // Element: Footer
  &__footer {
    padding: 1.5rem;
    border-top: 1px solid #e2e8f0;
    
    @media (prefers-color-scheme: dark) {
      border-top-color: #334155;
    }
  }
  
  // Element: Button
  &__button {
    padding: 0.5rem 1rem;
    background: #e2e8f0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    
    &:hover {
      background: #cbd5e1;
      transform: scale(1.05);
    }
    
    // Modifier: Primary button
    &--primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      
      &:hover {
        background: linear-gradient(135deg, #5568d3 0%, #65398b 100%);
      }
    }
  }
  
  // Modifier: Featured card
  &--featured {
    border: 3px solid #f59e0b;
    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);
  }
  
  // Responsive: Mobile
  @media (max-width: 768px) {
    &__header,
    &__body,
    &__footer {
      padding: 1rem;
    }
  }
}`}
          title="BEM Component with Advanced Nesting"
          description="Full example with elements, modifiers, and responsive styles"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Parent Selector (&)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                References parent for flexible combinations
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">BEM Pattern</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use &__ for elements, &-- for modifiers
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Nested Media</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Keep responsive styles with components
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">3-4 Levels Max</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Avoid deep nesting for maintainability
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
