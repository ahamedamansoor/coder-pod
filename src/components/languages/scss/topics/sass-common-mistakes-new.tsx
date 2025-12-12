'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  AlertTriangle, 
  CheckCircle2,
  X,
  Check,
  Info,
  Code,
  Zap
} from 'lucide-react';

interface SassCommonMistakesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCommonMistakesNew({ onOpenWebPlayground }: SassCommonMistakesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={AlertTriangle}
        category="Sass/SCSS · Best Practices"
        title="Common Mistakes"
        description="Avoid common SCSS pitfalls and write better, more maintainable code by learning from typical mistakes."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Common SCSS Mistakes"
            description="Learn what to avoid"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Even experienced developers make mistakes with Sass/SCSS. Understanding common pitfalls helps you write <strong>cleaner, more maintainable, and performant</strong> stylesheets!
          </p>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Learn from Mistakes</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              These are <strong>real mistakes</strong> developers make. Avoid them to save time debugging and improve code quality!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<X className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Mistake #1: Over-Nesting"
            description="Too many levels of nesting"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Deep Nesting</h4>
              </div>
              <CodeSnippetWithOutput
                title="Over-nested SCSS"
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
                  '❌ 6 levels deep!',
                  '❌ Hard to read',
                  '❌ High specificity',
                  '// Compiled: .header .nav .menu .item .link'
                ]}
                language="scss"
                colorTheme="pink"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Max 3 Levels</h4>
              </div>
              <CodeSnippetWithOutput
                title="Properly nested SCSS"
                code={`.header {
  // Direct child
}

.nav-menu {
  // Flat structure
}

.nav-item {
  // BEM-style naming
}

.nav-link {
  color: blue;
  
  &:hover {
    color: red;
  }
}`}
                output={[
                  '✅ Flat structure',
                  '✅ Easy to read',
                  '✅ Low specificity',
                  '✅ Reusable classes'
                ]}
                language="scss"
                colorTheme="pink"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Rule of Thumb</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Keep nesting to <strong>3 levels maximum</strong>. Use BEM or similar naming conventions instead!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<X className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Mistake #2: @extend Abuse"
            description="Overusing @extend"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Complex @extend</h4>
              </div>
              <CodeSnippetWithOutput
                title="Problematic @extend"
                code={`.button {
  padding: 10px;
  border-radius: 4px;
}

.primary-button {
  @extend .button;  // ⚠️ Creates complex selectors
  background: blue;
}

.secondary-button {
  @extend .button;  // ⚠️ More complexity
  background: gray;
}`}
                output={[
                  '❌ Creates .button, .primary-button, .secondary-button',
                  '❌ Unpredictable order',
                  '❌ Hard to debug',
                  '// Can create bloated CSS'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Use Mixins or Classes</h4>
              </div>
              <CodeSnippetWithOutput
                title="Better Approach"
                code={`// Option 1: Mixin
@mixin button-base {
  padding: 10px;
  border-radius: 4px;
}

.primary-button {
  @include button-base;
  background: blue;
}

.secondary-button {
  @include button-base;
  background: gray;
}

// Option 2: Utility class (even better)
.button {
  padding: 10px;
  border-radius: 4px;
}

.button-primary {
  background: blue;
}

.button-secondary {
  background: gray;
}`}
                output={[
                  '✅ Predictable output',
                  '✅ Easy to debug',
                  '✅ Clean compiled CSS',
                  '// Use mixins for reusable styles'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<X className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Mistake #3: Using @import"
            description="Still using deprecated @import"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: @import (Deprecated)</h4>
              </div>
              <CodeSnippetWithOutput
                title="Deprecated @import"
                code={`// main.scss
@import 'variables';
@import 'mixins';
@import 'components/button';

.page {
  color: $primary;  // Global namespace pollution
}`}
                output={[
                  '❌ Deprecated',
                  '❌ Global namespace',
                  '❌ Loads styles multiple times',
                  '⚠️ Will be removed in Dart Sass 3.0'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: @use and @forward</h4>
              </div>
              <CodeSnippetWithOutput
                title="Modern Module System"
                code={`// main.scss
@use 'variables';
@use 'mixins' as mx;
@use 'components/button';

.page {
  color: variables.$primary;  // ✅ Namespaced
  @include mx.flex-center;
}`}
                output={[
                  '✅ Modern',
                  '✅ Namespaced',
                  '✅ Loads once',
                  '✅ Better performance'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<X className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Mistake #4: Not Using Variables"
            description="Hardcoding values"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Magic Numbers</h4>
              </div>
              <CodeSnippetWithOutput
                title="Hardcoded Values"
                code={`.button {
  background: #3b82f6;  // What color is this?
  padding: 12px 24px;   // Why these values?
  font-size: 16px;      // Why 16px?
}

.card {
  background: #3b82f6;  // Same color, repeated
  padding: 12px 24px;   // Same padding, repeated
}`}
                output={[
                  '❌ Hard to maintain',
                  '❌ Duplicate values',
                  '❌ No consistency',
                  '// Difficult to update globally'
                ]}
                language="scss"
                colorTheme="green"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Use Variables</h4>
              </div>
              <CodeSnippetWithOutput
                title="Variables for Consistency"
                code={`// _variables.scss
$color-primary: #3b82f6;
$spacing-md: 12px;
$spacing-lg: 24px;
$font-size-base: 16px;

// _button.scss
@use 'variables' as *;

.button {
  background: $color-primary;
  padding: $spacing-md $spacing-lg;
  font-size: $font-size-base;
}

.card {
  background: $color-primary;
  padding: $spacing-md $spacing-lg;
}`}
                output={[
                  '✅ Easy to maintain',
                  '✅ Consistent values',
                  '✅ Single source of truth',
                  '✅ Update once, changes everywhere'
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
            icon={<X className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Mistake #5: Ignoring Compiled Output"
            description="Not checking the generated CSS"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Writing Without Checking</h4>
              </div>
              <CodeSnippetWithOutput
                title="Innocent-Looking SCSS"
                code={`@for $i from 1 through 100 {
  .margin-#{$i} {
    margin: #{$i}px;
  }
}`}
                output={[
                  '❌ Generates 100 classes!',
                  '❌ Bloated CSS file',
                  '❌ Slow page load',
                  '// Creates .margin-1 through .margin-100'
                ]}
                language="scss"
                colorTheme="orange"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Generate Only What's Needed</h4>
              </div>
              <CodeSnippetWithOutput
                title="Selective Generation"
                code={`// Only generate commonly used values
$spacing-values: (0, 4, 8, 12, 16, 20, 24, 32);

@each $value in $spacing-values {
  .margin-#{$value} {
    margin: #{$value}px;
  }
}`}
                output={[
                  '✅ Only 8 classes',
                  '✅ Smaller CSS file',
                  '✅ Faster load time',
                  '// Only what you actually use'
                ]}
                language="scss"
                colorTheme="orange"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Always Check Output</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Run <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">sass --watch</code> and check the compiled CSS. You might be surprised by what gets generated!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<X className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Mistake #6: Parent Selector Misuse"
            description="Incorrect & usage"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Confusing & Placement</h4>
              </div>
              <CodeSnippetWithOutput
                title="Wrong Parent Selector"
                code={`.button {
  color: blue;
  
  .icon & {
    color: red;  // ⚠️ Creates .icon .button
  }
}`}
                output={[
                  '❌ Creates: .icon .button',
                  '❌ Probably not what you want',
                  '❌ Hard to understand',
                  '// Compiles to .icon .button { color: red; }'
                ]}
                language="scss"
                colorTheme="indigo"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Proper & Usage</h4>
              </div>
              <CodeSnippetWithOutput
                title="Correct Parent Selector"
                code={`.button {
  color: blue;
  
  &.is-active {
    color: red;  // ✅ Creates .button.is-active
  }
  
  &:hover {
    color: green;  // ✅ Creates .button:hover
  }
  
  &--primary {
    background: blue;  // ✅ BEM modifier
  }
}`}
                output={[
                  '✅ .button.is-active',
                  '✅ .button:hover',
                  '✅ .button--primary',
                  '// Clear and predictable'
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
            icon={<X className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Mistake #7: Not Using Mixins"
            description="Repeating code unnecessarily"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Repeated Code</h4>
              </div>
              <CodeSnippetWithOutput
                title="Copy-Paste Everywhere"
                code={`.card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}`}
                output={[
                  '❌ Repeated 3 times',
                  '❌ Hard to maintain',
                  '❌ Error-prone',
                  '// Update in 3 places if changed'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Use a Mixin</h4>
              </div>
              <CodeSnippetWithOutput
                title="DRY with Mixins"
                code={`@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  @include flex-center;
}

.modal {
  @include flex-center;
}

.container {
  @include flex-center;
}`}
                output={[
                  '✅ Written once',
                  '✅ Easy to maintain',
                  '✅ DRY principle',
                  '// Update in one place'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<X className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="Mistake #8: Using / for Division"
            description="Deprecated division operator"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">❌ Bad: Using / Operator</h4>
              </div>
              <CodeSnippetWithOutput
                title="Deprecated Division"
                code={`$width: 100px / 2;  // ⚠️ Deprecated

.element {
  width: $width;
  padding: 20px / 4;  // ⚠️ Will cause warnings
}`}
                output={[
                  '⚠️ Deprecated in Dart Sass',
                  '⚠️ Will be removed',
                  '⚠️ Causes warnings',
                  '// Use math.div() instead'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">✅ Good: Use math.div()</h4>
              </div>
              <CodeSnippetWithOutput
                title="Modern Division"
                code={`@use "sass:math";

$width: math.div(100px, 2);  // ✅ 50px

.element {
  width: $width;
  padding: math.div(20px, 4);  // ✅ 5px
  
  // Or use calc()
  margin: calc(20px / 4);
}`}
                output={[
                  '✅ Modern approach',
                  '✅ No warnings',
                  '✅ Future-proof',
                  '// Works in Dart Sass'
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
            title="Quick Checklist"
            description="Avoid these mistakes"
            size="lg"
          />

          <div className="space-y-3">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Over-nesting (max 3 levels)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Keep selectors flat</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ @extend abuse</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Use mixins instead</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Using @import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Migrate to @use/@forward</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Hardcoding values</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Use variables</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Not checking output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Review compiled CSS</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Using / for division</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Use math.div()</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Repeating code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Create mixins for reusable patterns</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Confusing & placement</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Understand parent selector</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Keep It Simple</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Flat structure, max 3 levels nesting
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Use Modern Features</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @use instead of @import, math.div() for division
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">DRY Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use variables and mixins to avoid repetition
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Check Output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always review the compiled CSS
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
