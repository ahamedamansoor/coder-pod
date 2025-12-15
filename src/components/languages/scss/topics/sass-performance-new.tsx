'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Zap, 
  CheckCircle2,
  Lightbulb,
  Info,
  AlertTriangle,
  TrendingUp,
  FileCode,
  Layers
} from 'lucide-react';

interface SassPerformanceNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassPerformanceNew({ onOpenWebPlayground }: SassPerformanceNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="Sass/SCSS · Best Practices"
        title="Performance Optimization"
        description="Write faster, more efficient SCSS that compiles quickly and produces optimized CSS."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Performance Optimization"
            description="Fast SCSS, optimized CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Optimize your SCSS for <strong>faster compilation</strong> and <strong>smaller CSS output</strong>. Follow these best practices for maximum performance!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">DO</h4>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Limit nesting depth</li>
                <li>✅ Use placeholders</li>
                <li>✅ Minimize @extend</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-red-700 dark:text-red-300">DON'T</h4>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>❌ Deep nesting ({'>'} 3 levels)</li>
                <li>❌ Overuse @extend</li>
                <li>❌ Unnecessary calculations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nesting Depth */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Limit Nesting Depth"
            description="Keep it shallow (max 3 levels)"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="❌ Bad: Deep Nesting"
              code={`// Too deep - hard to read, high specificity
.header {
  .nav {
    .menu {
      .item {
        .link {
          color: blue;
          
          &:hover {
            color: red;
          }
        }
      }
    }
  }
}`}
              output={[
                '.header .nav .menu .item .link { color: blue; }',
                '.header .nav .menu .item .link:hover { color: red; }',
                '// 5 levels deep! High specificity!'
              ]}
              language="scss"
              colorTheme="pink"
            />

            <CodeSnippetWithOutput
              title="✅ Good: Shallow Nesting"
              code={`// Better - flatten structure, use BEM
.nav {
  // 1 level
}

.nav__item {
  // Flat
}

.nav__link {
  color: blue;
  
  &:hover {
    color: red;
  }
  
  // Max 2-3 levels for pseudo-classes/modifiers
  &--active {
    font-weight: 700;
  }
}`}
              output={[
                '.nav { }',
                '.nav__item { }',
                '.nav__link { color: blue; }',
                '.nav__link:hover { color: red; }',
                '.nav__link--active { font-weight: 700; }',
                '// Flat, low specificity!'
              ]}
              language="scss"
              colorTheme="pink"
            />
          </div>

          <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Performance Impact</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Deep nesting creates <strong>high specificity</strong>, makes CSS hard to override, and increases compiled file size!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @extend vs @mixin */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="@extend vs @mixin"
            description="Choose the right tool"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="@extend - Groups Selectors"
              code={`%button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  @extend %button-base;
  background: blue;
  color: white;
}

.button-secondary {
  @extend %button-base;
  background: gray;
  color: white;
}`}
              output={[
                '.button-primary, .button-secondary {',
                '  padding: 0.5rem 1rem;',
                '  border: none;',
                '  border-radius: 4px;',
                '  cursor: pointer;',
                '}',
                '.button-primary { background: blue; color: white; }',
                '.button-secondary { background: gray; color: white; }',
                '// Efficient - shared properties grouped!'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="@mixin - Duplicates Code"
              code={`@mixin button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  @include button-base;
  background: blue;
  color: white;
}

.button-secondary {
  @include button-base;
  background: gray;
  color: white;
}`}
              output={[
                '.button-primary {',
                '  padding: 0.5rem 1rem;',
                '  border: none;',
                '  border-radius: 4px;',
                '  cursor: pointer;',
                '  background: blue;',
                '  color: white;',
                '}',
                '.button-secondary {',
                '  padding: 0.5rem 1rem;',
                '  border: none;',
                '  border-radius: 4px;',
                '  cursor: pointer;',
                '  background: gray;',
                '  color: white;',
                '}',
                '// Properties duplicated!'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">When to Use Each</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-1">✅ Use @extend when:</p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Static properties</li>
                    <li>• No parameters needed</li>
                    <li>• Multiple selectors share code</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">✅ Use @mixin when:</p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Need parameters</li>
                    <li>• Dynamic values</li>
                    <li>• Conditional logic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder Selectors */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Use Placeholder Selectors"
            description="% for reusable styles"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="❌ Bad: Regular Class"
              code={`// This outputs even if never used!
.shared-button {
  padding: 0.5rem 1rem;
  border: none;
}

.primary-button {
  @extend .shared-button;
  background: blue;
}`}
              output={[
                '.shared-button, .primary-button {',
                '  padding: 0.5rem 1rem;',
                '  border: none;',
                '}',
                '.primary-button { background: blue; }',
                '// .shared-button in output (wasted)'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="✅ Good: Placeholder"
              code={`// Only outputs when extended!
%shared-button {
  padding: 0.5rem 1rem;
  border: none;
}

.primary-button {
  @extend %shared-button;
  background: blue;
}`}
              output={[
                '.primary-button {',
                '  padding: 0.5rem 1rem;',
                '  border: none;',
                '  background: blue;',
                '}',
                '// No %shared-button in output!'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Placeholder Benefits</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Placeholders (<code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">%</code>) don't output to CSS unless extended. Saves file size!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Variables & Calculations */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Optimize Variables & Calculations"
            description="Reuse, don't recalculate"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="❌ Bad: Repeated Calculations"
              code={`// Calculates every time!
.box-1 {
  width: calc(100% / 3 - 20px);
  padding: 8px * 2;
}

.box-2 {
  width: calc(100% / 3 - 20px);
  padding: 8px * 2;
}

.box-3 {
  width: calc(100% / 3 - 20px);
  padding: 8px * 2;
}`}
              output={[
                '.box-1 { width: calc(33.3333% - 20px); padding: 16px; }',
                '.box-2 { width: calc(33.3333% - 20px); padding: 16px; }',
                '.box-3 { width: calc(33.3333% - 20px); padding: 16px; }',
                '// Calculation repeated 3 times!'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="✅ Good: Calculate Once"
              code={`// Calculate once, reuse
$box-width: calc(100% / 3 - 20px);
$box-padding: 8px * 2;

.box-1 {
  width: $box-width;
  padding: $box-padding;
}

.box-2 {
  width: $box-width;
  padding: $box-padding;
}

.box-3 {
  width: $box-width;
  padding: $box-padding;
}`}
              output={[
                '.box-1 { width: calc(33.3333% - 20px); padding: 16px; }',
                '.box-2 { width: calc(33.3333% - 20px); padding: 16px; }',
                '.box-3 { width: calc(33.3333% - 20px); padding: 16px; }',
                '// Calculated once during compilation!'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Partials & Imports */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Organize with Partials"
            description="Split large files"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Performance Benefits</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Faster development:</strong> Edit specific files without searching huge files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Better caching:</strong> Only recompile changed partials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lazy loading:</strong> Import only what you need</span>
                </li>
              </ul>
            </div>

            <CodeSnippetWithOutput
              title="File Organization"
              code={`// _variables.scss
$primary: #3b82f6;
$spacing: 1rem;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// _buttons.scss
.button {
  padding: $spacing;
  background: $primary;
  @include flex-center;
}

// main.scss
@import 'variables';
@import 'mixins';
@import 'buttons';`}
              output={[
                '// Compiled CSS from all partials',
                '.button { padding: 1rem; background: #3b82f6; display: flex; justify-content: center; align-items: center; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Output Optimization */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Optimize CSS Output"
            description="Production best practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Compression</h4>
              <code className="text-sm bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">sass --style=compressed input.scss output.css</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">✅ Remove Unused CSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Use tools like PurgeCSS to remove unused styles</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">✅ Minimize @import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Each @import adds overhead. Consolidate where possible</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">✅ Use Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Debug compressed CSS with source maps in development</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Performance Checklist"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Limit nesting to 2-3 levels</li>
                <li>• Use placeholder selectors (%)</li>
                <li>• Calculate once, reuse variables</li>
                <li>• Organize with partials</li>
                <li>• Compress for production</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ DON'T</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Nest more than 3 levels deep</li>
                <li>• Overuse @extend on classes</li>
                <li>• Repeat calculations</li>
                <li>• Create huge monolithic files</li>
                <li>• Ship uncompressed CSS</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
