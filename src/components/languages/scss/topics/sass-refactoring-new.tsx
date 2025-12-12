'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  RefreshCw, 
  CheckCircle2,
  Lightbulb,
  Info,
  Code,
  Zap,
  ArrowRight
} from 'lucide-react';

interface SassRefactoringNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassRefactoringNew({ onOpenWebPlayground }: SassRefactoringNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="Sass/SCSS · Best Practices"
        title="Refactoring"
        description="Improve existing Sass code, reduce technical debt, and modernize your stylesheets for better maintainability."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<RefreshCw className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Refactoring Sass Code"
            description="Continuous improvement"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Refactoring</strong> is the process of improving code structure without changing its behavior. Regular refactoring keeps your Sass codebase <strong>clean, maintainable, and performant</strong>!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Clean Code</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Easier to understand</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Performance</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Faster compilation</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Maintainable</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Easier to change</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Refactor?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Code that works isn't enough! <strong>Good code</strong> is easy to read, maintain, and extend. Refactoring is an investment in your project's future.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Extract Variables"
            description="Remove magic numbers"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before: Hardcoded Values</h4>
              <CodeSnippetWithOutput
                title="Scattered Values"
                code={`.button {
  background: #3b82f6;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
}

.card {
  background: #3b82f6;
  padding: 12px 24px;
  border-radius: 8px;
}

.modal {
  background: #3b82f6;
  padding: 24px;
}`}
                output={[
                  '❌ Repeated values',
                  '❌ Hard to maintain',
                  '❌ No consistency'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After: Extracted Variables</h4>
              <CodeSnippetWithOutput
                title="Centralized Variables"
                code={`// _variables.scss
$color-primary: #3b82f6;
$spacing-sm: 12px;
$spacing-md: 24px;
$font-size-base: 16px;
$border-radius: 8px;

// _button.scss
@use 'variables' as *;

.button {
  background: $color-primary;
  padding: $spacing-sm $spacing-md;
  font-size: $font-size-base;
  border-radius: $border-radius;
}

.card {
  background: $color-primary;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius;
}

.modal {
  background: $color-primary;
  padding: $spacing-md;
}`}
                output={[
                  '✅ Single source of truth',
                  '✅ Easy to update',
                  '✅ Consistent values'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Extract Mixins"
            description="DRY principle"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before: Repeated Code</h4>
              <CodeSnippetWithOutput
                title="Duplicated Styles"
                code={`.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}`}
                output={[
                  '❌ Same pattern 3 times',
                  '❌ Update in multiple places'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After: Reusable Mixin</h4>
              <CodeSnippetWithOutput
                title="Centralized Logic"
                code={`// _mixins.scss
@mixin flex-center($padding: 20px) {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $padding;
}

// Usage
.card {
  @include flex-center;
}

.modal {
  @include flex-center(30px);
}

.sidebar {
  @include flex-center(15px);
}`}
                output={[
                  '✅ Written once',
                  '✅ Parameterized',
                  '✅ Easy to maintain'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Flatten Nesting"
            description="Reduce specificity"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before: Deep Nesting</h4>
              <CodeSnippetWithOutput
                title="Over-nested"
                code={`.header {
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
                  '❌ 6 levels deep',
                  '❌ High specificity',
                  '// .header .nav .menu .item .link'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After: Flat Structure (BEM)</h4>
              <CodeSnippetWithOutput
                title="BEM with Sass"
                code={`.header {
  // Header styles
}

.nav {
  // Navigation styles
}

.nav__menu {
  // Menu styles
}

.nav__item {
  // Item styles
}

.nav__link {
  color: blue;
  
  &:hover {
    color: red;
  }
  
  &--active {
    font-weight: bold;
  }
}`}
                output={[
                  '✅ Flat structure',
                  '✅ Low specificity',
                  '✅ BEM methodology'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<RefreshCw className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Migrate to @use/@forward"
            description="Modern module system"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before: @import (Deprecated)</h4>
              <CodeSnippetWithOutput
                title="Old Module System"
                code={`// main.scss
@import 'variables';
@import 'mixins';
@import 'components/button';

.page {
  color: $primary;  // Global namespace
  @include flex-center;
}`}
                output={[
                  '⚠️ Deprecated',
                  '⚠️ Global namespace pollution'
                ]}
                language="scss"
                colorTheme="orange"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After: @use (Modern)</h4>
              <CodeSnippetWithOutput
                title="Modern Module System"
                code={`// main.scss
@use 'variables' as vars;
@use 'mixins' as mx;
@use 'components/button';

.page {
  color: vars.$primary;  // Namespaced
  @include mx.flex-center;
}`}
                output={[
                  '✅ Modern',
                  '✅ Namespaced',
                  '✅ Better performance'
                ]}
                language="scss"
                colorTheme="orange"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Use sass-migrator</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Use <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">sass-migrator module</code> to automatically migrate from @import to @use!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Organize File Structure"
            description="7-1 Pattern or SMACSS"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before: Unorganized</h4>
              <CodeSnippetWithOutput
                title="Messy Structure"
                code={`styles/
├── style.scss
├── buttons.scss
├── colors.scss
├── header.scss
├── footer.scss
└── utilities.scss`}
                output={[
                  '❌ No clear organization',
                  '❌ Hard to find files'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After: 7-1 Pattern</h4>
              <CodeSnippetWithOutput
                title="Organized Structure"
                code={`scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _forms.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
├── pages/
│   ├── _home.scss
│   └── _about.scss
├── themes/
│   └── _dark.scss
├── vendors/
│   └── _bootstrap.scss
└── main.scss  // Imports all`}
                output={[
                  '✅ Clear organization',
                  '✅ Easy to navigate',
                  '✅ Scalable structure'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Optimize Output"
            description="Reduce compiled CSS size"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Before: Bloated Loops</h4>
              <CodeSnippetWithOutput
                title="Generates Too Much"
                code={`// Generates 100 classes!
@for $i from 1 through 100 {
  .margin-#{$i} {
    margin: #{$i}px;
  }
}`}
                output={[
                  '❌ 100 classes generated',
                  '❌ Large CSS file',
                  '❌ Most unused'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">After: Selective Generation</h4>
              <CodeSnippetWithOutput
                title="Only What's Needed"
                code={`// Only commonly used values
$spacing-values: (0, 4, 8, 12, 16, 20, 24, 32);

@each $value in $spacing-values {
  .margin-#{$value} {
    margin: #{$value}px;
  }
}`}
                output={[
                  '✅ Only 8 classes',
                  '✅ Smaller CSS',
                  '✅ All actually used'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Refactoring Checklist"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Extract Variables</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Replace hardcoded values with named variables
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Create Mixins</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Extract repeated patterns into reusable mixins
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Flatten Nesting</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Keep nesting to max 3 levels, use BEM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Migrate to @use</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Replace @import with modern @use/@forward
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-teal-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-teal-700 dark:text-teal-300">Organize Structure</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Use 7-1 pattern or SMACSS
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Optimize Output</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Review compiled CSS, remove unused code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Continuous Improvement</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Refactor regularly, not just once
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Start Small</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                One file at a time, incremental changes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Test After Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Verify nothing breaks
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Document Why</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Explain refactoring decisions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
