'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  ArrowRight, 
  CheckCircle2,
  Lightbulb,
  Info,
  Code,
  Zap,
  Settings
} from 'lucide-react';

interface SassToCSSNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassToCSSNew({ onOpenWebPlayground }: SassToCSSNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ArrowRight}
        category="Sass/SCSS · Migration"
        title="Sass to Plain CSS"
        description="When and how to migrate from Sass to modern CSS with custom properties, nesting, and other native features."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Sass to Plain CSS"
            description="Modern CSS capabilities"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Modern CSS</strong> has evolved significantly! Features like <strong>CSS custom properties</strong>, <strong>native nesting</strong>, and <strong>container queries</strong> mean you might not need Sass anymore for simple projects.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">CSS Variables</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Runtime dynamic values</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Native Nesting</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">No preprocessor needed</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">calc() Power</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Complex calculations</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When to Consider?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Consider migrating to plain CSS if you're <strong>only using Sass for variables and nesting</strong>. Modern CSS can handle these natively!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Variables: Sass → CSS"
            description="CSS custom properties"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Sass Variables</h4>
              <CodeSnippetWithOutput
                title="SCSS"
                code={`$primary: #3b82f6;
$spacing: 1rem;
$font-size: 16px;

.button {
  background: $primary;
  padding: $spacing;
  font-size: $font-size;
}`}
                output={[
                  '// ⚠️ Compile-time only',
                  '// Cannot change at runtime'
                ]}
                language="scss"
                colorTheme="blue"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">CSS Custom Properties</h4>
              <CodeSnippetWithOutput
                title="Plain CSS"
                code={`:root {
  --primary: #3b82f6;
  --spacing: 1rem;
  --font-size: 16px;
}

.button {
  background: var(--primary);
  padding: var(--spacing);
  font-size: var(--font-size);
}

/* ✅ Can change at runtime */
.button:hover {
  --primary: #2563eb;
}`}
                output={[
                  '✅ Runtime dynamic',
                  '✅ Can be changed with JavaScript',
                  '✅ Inheritable'
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
            title="Nesting: Sass → CSS"
            description="Native CSS nesting"
            size="lg"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Sass Nesting</h4>
              <CodeSnippetWithOutput
                title="SCSS"
                code={`.card {
  padding: 1rem;
  
  .title {
    font-size: 1.5rem;
  }
  
  &:hover {
    transform: scale(1.05);
  }
}`}
                output={[
                  '// Requires Sass compiler'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Native CSS Nesting</h4>
              <CodeSnippetWithOutput
                title="Plain CSS (Modern Browsers)"
                code={`.card {
  padding: 1rem;
  
  & .title {
    font-size: 1.5rem;
  }
  
  &:hover {
    transform: scale(1.05);
  }
}

/* ✅ No compiler needed! */`}
                output={[
                  '✅ Native browser support',
                  '✅ No build step required',
                  '// Note: Use & for better compatibility'
                ]}
                language="scss"
                colorTheme="purple"
              />
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Browser Support</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              CSS nesting is supported in all modern browsers (2023+). Check browser compatibility if you need to support older browsers.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="What Sass Still Offers"
            description="When to keep using Sass"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">✅ Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Custom functions with logic
              </p>
              <code className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded block">
                @function to-rem($px) &#123; @return $px / 16px * 1rem; &#125;
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">✅ Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Reusable style blocks with parameters
              </p>
              <code className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded block">
                @mixin button($bg, $text) &#123; ... &#125;
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Control Flow</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                @if, @each, @for loops
              </p>
              <code className="text-xs bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded block">
                @each $color in $colors &#123; ... &#125;
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">✅ Module System</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                @use/@forward for organization
              </p>
              <code className="text-xs bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded block">
                @use 'variables'; @forward 'mixins';
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Math & Color Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Advanced calculations
              </p>
              <code className="text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded block">
                color.scale($primary, $lightness: 20%)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Hybrid Approach"
            description="Best of both worlds"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Mix Sass & CSS Custom Properties"
            code={`// Use Sass for compile-time logic
@use "sass:color";

:root {
  // Define base colors with CSS custom properties
  --primary-500: #3b82f6;
  
  // Use Sass functions to generate shades
  --primary-400: #{color.scale(#3b82f6, $lightness: 20%)};
  --primary-600: #{color.scale(#3b82f6, $lightness: -20%)};
  
  // Sass variables for compile-time calculations
  $base-spacing: 1rem;
  --spacing-sm: #{$base-spacing * 0.5};
  --spacing-md: #{$base-spacing};
  --spacing-lg: #{$base-spacing * 2};
}

.button {
  // Use CSS variables for runtime flexibility
  background: var(--primary-500);
  padding: var(--spacing-md);
  
  &:hover {
    background: var(--primary-600);
  }
}

// Use Sass mixins for complex logic
@mixin responsive($breakpoint) {
  @if $breakpoint == md {
    @media (min-width: 768px) { @content; }
  }
}

.container {
  padding: var(--spacing-sm);
  
  @include responsive(md) {
    padding: var(--spacing-lg);
  }
}`}
            output={[
              '✅ Sass for compile-time logic',
              '✅ CSS variables for runtime flexibility',
              '// Best of both worlds!'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Decision Matrix"
            description="Should you migrate?"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Migrate to Plain CSS If:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Only using variables → Use CSS custom properties</li>
                <li>• Only nesting → Use native CSS nesting</li>
                <li>• Simple project → No build step needed</li>
                <li>• Runtime theming → CSS variables are better</li>
                <li>• Small codebase → Minimal benefit from Sass</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">🔧 Keep Using Sass If:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Using mixins extensively</li>
                <li>• Custom functions needed</li>
                <li>• Control flow (@if, @each)</li>
                <li>• Large component library</li>
                <li>• Team prefers Sass</li>
                <li>• Complex design system</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Migration Strategy"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Convert Variables</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Replace Sass variables with CSS custom properties
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Update Nesting</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Add & selector for native CSS nesting
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Remove Sass Features</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Eliminate mixins/functions if possible
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
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Test Thoroughly</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Verify all styles work correctly
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
                  <h4 className="font-bold text-teal-700 dark:text-teal-300">Remove Build Step</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Uninstall Sass if fully migrated
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
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">CSS Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Runtime dynamic, inheritable
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Native Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No compiler needed (modern browsers)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Sass Still Useful</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For mixins, functions, control flow
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Hybrid Approach</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Best of both worlds
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
