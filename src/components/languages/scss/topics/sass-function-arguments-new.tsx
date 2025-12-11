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
  Sliders, 
  Settings,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  ArrowRight,
  Zap
} from 'lucide-react';

interface SassFunctionArgumentsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassFunctionArgumentsNew({ onOpenWebPlayground }: SassFunctionArgumentsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Sliders}
        category="Sass/SCSS · Reusability"
        title="Function Arguments"
        description="Master function parameters: positional arguments, keyword arguments, default values, and rest parameters for flexible, reusable functions."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sliders className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Function Arguments"
            description="Make functions flexible with parameters"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Just like mixin arguments, <strong>function arguments</strong> make your functions flexible and reusable. Pass values as positional or keyword arguments, provide defaults, and even accept variable numbers of parameters!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">No Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Fixed behavior
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">@function double() {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">@return 10 * 2;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-1">Always returns 20</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Sliders className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Flexible and reusable
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@function double($n) {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">@return $n * 2;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Works with any value!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Positional Arguments */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Positional Arguments"
            description="Pass arguments in order"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Single Argument"
              code={`@function square($n) {
  @return $n * $n;
}

.box {
  width: square(10px);   // 100px
  height: square(5rem);  // 25rem
}`}
              output={[
                '✓ square(10px) returns 100px',
                '✓ square(5rem) returns 25rem'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Multiple Arguments"
              code={`@function calculate-area($width, $height) {
  @return $width * $height;
}

.rectangle {
  // Must pass in order: width, then height
  $area: calculate-area(100px, 50px);  // 5000px
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Order Matters!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              With positional arguments, you must pass values in the exact order they're defined!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Default Values */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Default Values"
            description="Optional parameters with fallbacks"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Arguments with Defaults"
              code={`// Function with default values
@function scale($value, $multiplier: 2) {
  @return $value * $multiplier;
}

// Use default
$double: scale(10px);  // 20px (uses default 2)

// Override default
$triple: scale(10px, 3);  // 30px
$half: scale(10px, 0.5);  // 5px`}
              output={[
                '✓ scale(10px) → 20px',
                '✓ scale(10px, 3) → 30px',
                '✓ scale(10px, 0.5) → 5px'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Multiple Defaults"
              code={`@function spacing($size: 'md', $scale: 1) {
  $base: 16px;
  
  $sizes: (
    'sm': $base * 0.5,
    'md': $base,
    'lg': $base * 2,
    'xl': $base * 3
  );
  
  @return map-get($sizes, $size) * $scale;
}

// All defaults
$default: spacing();  // 16px

// Override first
$large: spacing('lg');  // 32px

// Override both
$scaled: spacing('lg', 1.5);  // 48px`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Keyword Arguments */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Keyword Arguments"
            description="Named parameters for clarity"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Using Keyword Arguments"
              code={`@function calculate-spacing($top, $right, $bottom, $left) {
  @return $top $right $bottom $left;
}

// Positional (confusing!)
.box1 {
  padding: calculate-spacing(10px, 20px, 10px, 20px);
}

// Keyword arguments (clear!)
.box2 {
  padding: calculate-spacing(
    $top: 10px,
    $right: 20px,
    $bottom: 10px,
    $left: 20px
  );
}

// Order doesn't matter with keywords!
.box3 {
  padding: calculate-spacing(
    $left: 20px,
    $top: 10px,
    $right: 20px,
    $bottom: 10px
  );
}`}
              output={[
                '✓ Much more readable',
                '✓ Order independent',
                '✓ Self-documenting'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best Practice!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use keyword arguments for functions with many parameters. Makes code much more readable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Function Arguments in Action"
          description="Flexible color and spacing functions"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card card-blue">
    <h3>Blue Card</h3>
    <p>Using function arguments</p>
  </div>
  
  <div class="card card-green">
    <h3>Green Card</h3>
    <p>With default values</p>
  </div>
  
  <div class="card card-purple">
    <h3>Purple Card</h3>
    <p>Keyword arguments</p>
  </div>
</div>`}
          css={`// Spacing function with default
@function spacing($multiplier: 1) {
  @return $multiplier * 8px;
}

// Color function with alpha
@function color-alpha($r, $g, $b, $alpha: 1) {
  @return rgba($r, $g, $b, $alpha);
}

// Percentage function
@function percent($value, $total: 100) {
  @return ($value / $total) * 100%;
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
  padding: spacing(3);  // 24px
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: spacing(2);  // 16px
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  padding: spacing(3);  // 24px
  border-radius: spacing(1);  // 8px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  max-width: 300px;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    margin-bottom: spacing(1);  // 8px
    font-size: 1.25rem;
  }
  
  p {
    font-size: 0.875rem;
    opacity: 0.9;
  }
}

// Using positional arguments
.card-blue {
  background: color-alpha(59, 130, 246, 0.9);
  color: white;
  
  &:hover {
    background: color-alpha(37, 99, 235, 1);
  }
}

// Using default value for alpha (1)
.card-green {
  background: color-alpha(16, 185, 129, 0.85);
  color: white;
  
  &:hover {
    background: color-alpha(5, 150, 105, 1);
  }
}

// Using keyword arguments
.card-purple {
  background: color-alpha(
    $r: 139,
    $g: 92,
    $b: 246,
    $alpha: 0.9
  );
  color: white;
  
  &:hover {
    background: color-alpha(
      $r: 124,
      $g: 58,
      $b: 237,
      $alpha: 1
    );
  }
}

@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
    }
  }
}`}
          title="Function Arguments Example"
          description="Cards using functions with arguments, defaults, and keywords"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Variable Arguments */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Variable Arguments (...)"
            description="Accept any number of arguments"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Rest Parameters"
              code={`// Accept multiple values as a list
@function sum($numbers...) {
  $total: 0;
  
  @each $num in $numbers {
    $total: $total + $num;
  }
  
  @return $total;
}

$result: sum(1, 2, 3, 4, 5);  // 15
$another: sum(10, 20);         // 30`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Max Function"
              code={`@function max($values...) {
  $max: nth($values, 1);
  
  @each $value in $values {
    @if $value > $max {
      $max: $value;
    }
  }
  
  @return $max;
}

$largest: max(10px, 5px, 20px, 15px);  // 20px`}
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Positional</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pass in order: func($a, $b)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Defaults</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Optional: $arg: default-value
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Keyword Args</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Named: func($arg: value)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Variable ...</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Rest: $args... for any number
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
