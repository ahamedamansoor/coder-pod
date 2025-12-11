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
  Calculator, 
  Plus,
  Minus,
  X,
  Divide,
  Percent,
  Equal,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Scale
} from 'lucide-react';

interface SassOperatorsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassOperatorsNew({ onOpenWebPlayground }: SassOperatorsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Calculator}
        category="Sass/SCSS · Control & Logic"
        title="Operators"
        description="Master arithmetic, comparison, and logical operators in Sass. Perform calculations, compare values, and create dynamic conditional styles."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Calculator className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Operators?"
            description="Perform math and logic in your styles"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Operators</strong> let you perform calculations, compare values, and write conditional logic directly in your stylesheets. Sass supports arithmetic operators for math, comparison operators for conditions, and logical operators for complex expressions!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Arithmetic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Math operations
              </p>
              <code className="text-xs bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                + - * / %
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Comparison</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Compare values
              </p>
              <code className="text-xs bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                == != &lt; &gt; &lt;= &gt;=
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Logical</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Boolean logic
              </p>
              <code className="text-xs bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">
                and or not
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Arithmetic Operators */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Plus className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Arithmetic Operators"
            description="Addition, subtraction, multiplication, division, modulo"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Addition (+)</h5>
                </div>
                <code className="text-sm text-gray-700 dark:text-gray-300">10px + 5px = 15px</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Subtraction (-)</h5>
                </div>
                <code className="text-sm text-gray-700 dark:text-gray-300">20px - 8px = 12px</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Multiplication (*)</h5>
                </div>
                <code className="text-sm text-gray-700 dark:text-gray-300">5px * 3 = 15px</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Divide className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Division (/)</h5>
                </div>
                <code className="text-sm text-gray-700 dark:text-gray-300">20px / 4 = 5px</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">Modulo (%)</h5>
                </div>
                <code className="text-sm text-gray-700 dark:text-gray-300">17 % 5 = 2</code>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="Basic Arithmetic"
              code={`$base-size: 16px;

.container {
  // Addition
  padding: $base-size + 8px;        // 24px
  
  // Subtraction
  margin: $base-size - 4px;         // 12px
  
  // Multiplication
  width: $base-size * 10;           // 160px
  
  // Division
  font-size: $base-size / 2;        // 8px
  
  // Modulo (remainder)
  $remainder: 17 % 5;               // 2
}`}
              output={[
                '✓ padding: 24px',
                '✓ margin: 12px',
                '✓ width: 160px',
                '✓ font-size: 8px'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Complex Calculations"
              code={`$base: 16px;
$columns: 12;
$gutter: 20px;

.sidebar {
  // Combine operators
  width: ($base * 15) + $gutter;    // 260px
  
  // Use parentheses for order
  padding: ($base + $gutter) / 2;   // 18px
  
  // Calculate column width
  $col-width: (100% - ($gutter * 11)) / $columns;
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Unit Compatibility!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              When adding/subtracting, units must be compatible (px + px works, but px + % doesn't). Multiplication and division can mix units!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison Operators */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Scale className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Comparison Operators"
            description="Compare values and return true/false"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Equal (==)</h5>
                <code className="text-sm text-gray-700 dark:text-gray-300">5 == 5 → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Not Equal (!=)</h5>
                <code className="text-sm text-gray-700 dark:text-gray-300">5 != 3 → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Less Than (&lt;)</h5>
                <code className="text-sm text-gray-700 dark:text-gray-300">3 &lt; 5 → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Greater Than (&gt;)</h5>
                <code className="text-sm text-gray-700 dark:text-gray-300">10 &gt; 5 → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Less/Equal (&lt;=)</h5>
                <code className="text-sm text-gray-700 dark:text-gray-300">5 &lt;= 5 → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Greater/Equal (&gt;=)</h5>
                <code className="text-sm text-gray-700 dark:text-gray-300">7 &gt;= 5 → true</code>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="Using Comparisons with @if"
              code={`$screen-width: 768px;
$mobile-max: 640px;
$tablet-max: 1024px;

.container {
  @if $screen-width > $tablet-max {
    max-width: 1200px;  // Desktop
  } @else if $screen-width > $mobile-max {
    max-width: 900px;   // Tablet
  } @else {
    max-width: 100%;    // Mobile
  }
}`}
              output={[
                '✓ 768px > 640px is true',
                '✓ 768px > 1024px is false',
                '✓ Result: max-width: 900px'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Comparing Strings and Colors"
              code={`$theme: 'dark';
$primary-color: #3b82f6;

.button {
  // String comparison
  @if $theme == 'dark' {
    background: #1e293b;
    color: white;
  }
  
  // Color comparison
  @if $primary-color == #3b82f6 {
    border: 2px solid $primary-color;
  }
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Logical Operators */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Logical Operators"
            description="Combine conditions with and, or, not"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">AND (and)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Both must be true</p>
                <code className="text-xs text-gray-700 dark:text-gray-300">true and true → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">OR (or)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">At least one must be true</p>
                <code className="text-xs text-gray-700 dark:text-gray-300">true or false → true</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">NOT (not)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Reverse the boolean</p>
                <code className="text-xs text-gray-700 dark:text-gray-300">not true → false</code>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="AND Operator"
              code={`$is-mobile: true;
$is-dark-mode: true;

.button {
  // Both conditions must be true
  @if $is-mobile and $is-dark-mode {
    font-size: 14px;
    background: #1e293b;
    padding: 12px 20px;
  }
}`}
              output={[
                '✓ Both are true',
                '✓ Applies all mobile dark styles'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="OR Operator"
              code={`$is-admin: true;
$is-moderator: false;

.dashboard {
  // At least one must be true
  @if $is-admin or $is-moderator {
    display: block;
    // Show dashboard for admins OR moderators
  } @else {
    display: none;
  }
}`}
              output={[
                '✓ $is-admin is true',
                '✓ Condition passes',
                '✓ display: block'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="NOT Operator"
              code={`$is-production: false;

.debug-panel {
  // Show debug panel if NOT production
  @if not $is-production {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
  }
}`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Complex Conditions"
              code={`$width: 800px;
$is-responsive: true;
$theme: 'light';

.container {
  // Combine multiple operators
  @if ($width > 768px and $is-responsive) or $theme == 'dark' {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  // Multiple conditions
  @if $width >= 768px and $width < 1024px and $is-responsive {
    padding: 2rem;
  }
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Operators in Action"
          description="Dynamic responsive grid with calculations"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
    <div class="card">Card 5</div>
    <div class="card">Card 6</div>
  </div>
</div>`}
          css={`// Variables for calculations
$base-size: 16px;
$columns: 3;
$gap: 20px;
$card-padding: $base-size * 1.5;  // 24px

// Calculate column width using operators
@function calc-column-width($cols, $gap) {
  @return (100% - ($gap * ($cols - 1))) / $cols;
}

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  padding: $base-size * 2;  // 32px
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
  
  // Responsive with comparison operators
  @media (max-width: 768px) {
    // Mobile: 1 column
    grid-template-columns: 1fr;
    gap: $gap / 2;  // 10px
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    // Tablet: 2 columns
    grid-template-columns: repeat(2, 1fr);
    gap: $gap * 0.75;  // 15px
  }
}

.card {
  background: white;
  padding: $card-padding;
  border-radius: $base-size / 2;  // 8px
  text-align: center;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  // Gradient background using calculations
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.9),
    rgba(37, 99, 235, 0.9)
  );
  color: white;
  
  @media (prefers-color-scheme: dark) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.4);
  }
  
  // Different colors using modulo
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      @if $i % 3 == 1 {
        background: linear-gradient(135deg, #3b82f6, #2563eb);
      } @else if $i % 3 == 2 {
        background: linear-gradient(135deg, #10b981, #059669);
      } @else {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      }
    }
  }
}`}
          title="Responsive Grid with Operators"
          description="Using arithmetic, comparison, and logical operators"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Operator Precedence */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Equal className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Operator Precedence"
            description="Order of operations matters!"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">
                Order of Evaluation (Highest to Lowest):
              </h4>
              <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside">
                <li><strong>Parentheses</strong> - ( )</li>
                <li><strong>Multiplication, Division, Modulo</strong> - * / %</li>
                <li><strong>Addition, Subtraction</strong> - + -</li>
                <li><strong>Comparison</strong> - &lt; &gt; &lt;= &gt;= == !=</li>
                <li><strong>Logical AND</strong> - and</li>
                <li><strong>Logical OR</strong> - or</li>
              </ol>
            </div>

            <CodeSnippetWithOutput
              title="Without Parentheses"
              code={`$result: 10 + 5 * 2;  // 20 (not 30!)
// 5 * 2 is evaluated first = 10
// Then 10 + 10 = 20`}
              output={[
                '✓ Multiplication first',
                '✓ Then addition',
                '✓ Result: 20'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="With Parentheses"
              code={`$result: (10 + 5) * 2;  // 30
// (10 + 5) is evaluated first = 15
// Then 15 * 2 = 30`}
              output={[
                '✓ Parentheses first',
                '✓ Then multiplication',
                '✓ Result: 30'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Use Parentheses!</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              When in doubt, use parentheses to make the order explicit and your code easier to understand!
            </AlertDescription>
          </Alert>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Arithmetic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                + - * / % for calculations
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Comparison</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                == != &lt; &gt; &lt;= &gt;= for conditions
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Logical</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                and or not for complex logic
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Precedence</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use ( ) for clear order
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
