'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  GitBranch, 
  CheckCircle2,
  Lightbulb,
  Info,
  Repeat,
  ArrowRight,
  Zap
} from 'lucide-react';

interface SassControlDirectivesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassControlDirectivesNew({ onOpenWebPlayground }: SassControlDirectivesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitBranch}
        category="Sass/SCSS · Advanced"
        title="Control Directives"
        description="@if, @else, @each, @for, @while - Add logic and loops to your SCSS."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Control Directives"
            description="Logic and loops in SCSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Control directives</strong> add programming logic to SCSS. Use <strong>conditionals</strong> and <strong>loops</strong> to generate dynamic styles!
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">@if / @else</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Conditionals</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Repeat className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">@each</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Iterate lists</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">@for</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Count loops</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-bold text-orange-700 dark:text-orange-300 text-sm">@while</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Condition loops</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* @if and @else */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="@if and @else"
            description="Conditional logic"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">@if</code> and <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">@else</code> to conditionally apply styles based on values.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @if"
              code={`@mixin theme-colors($theme) {
  @if $theme == 'dark' {
    background: #1a1a1a;
    color: #ffffff;
  } @else if $theme == 'light' {
    background: #ffffff;
    color: #000000;
  } @else {
    background: #f5f5f5;
    color: #333333;
  }
}

.card-dark {
  @include theme-colors('dark');
}

.card-light {
  @include theme-colors('light');
}

.card-default {
  @include theme-colors('neutral');
}`}
              output={[
                '.card-dark { background: #1a1a1a; color: #ffffff; }',
                '.card-light { background: #ffffff; color: #000000; }',
                '.card-default { background: #f5f5f5; color: #333333; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Conditional Styles"
              code={`@mixin button-style($size) {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  
  @if $size == 'small' {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  } @else if $size == 'large' {
    font-size: 1.125rem;
    padding: 1rem 2rem;
  }
  
  // Default size if neither small nor large
}

.btn-sm {
  @include button-style('small');
}

.btn-lg {
  @include button-style('large');
}`}
              output={[
                '.btn-sm { padding: 0.5rem 1rem; border: none; border-radius: 4px; font-size: 0.875rem; padding: 0.25rem 0.5rem; }',
                '.btn-lg { padding: 0.5rem 1rem; border: none; border-radius: 4px; font-size: 1.125rem; padding: 1rem 2rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Comparison Operators"
              code={`@mixin responsive-text($size) {
  @if $size > 20 {
    font-size: #{$size}px;
    line-height: 1.2;
  } @else if $size >= 16 {
    font-size: #{$size}px;
    line-height: 1.5;
  } @else {
    font-size: #{$size}px;
    line-height: 1.8;
  }
}

.heading {
  @include responsive-text(24);
}

.body {
  @include responsive-text(16);
}

.small {
  @include responsive-text(12);
}`}
              output={[
                '.heading { font-size: 24px; line-height: 1.2; }',
                '.body { font-size: 16px; line-height: 1.5; }',
                '.small { font-size: 12px; line-height: 1.8; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Operators</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">==</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">!=</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">&gt;</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">&lt;</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">&gt;=</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">&lt;=</code> for comparisons
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @each */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Repeat className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="@each Loop"
            description="Iterate over lists and maps"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">@each</code> to loop through lists or maps and generate styles dynamically.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Loop Through List"
              code={`// List of colors
$colors: blue, red, green, orange, purple;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
  
  .bg-#{$color} {
    background: $color;
  }
}`}
              output={[
                '.text-blue { color: blue; }',
                '.bg-blue { background: blue; }',
                '.text-red { color: red; }',
                '.bg-red { background: red; }',
                '.text-green { color: green; }',
                '.bg-green { background: green; }',
                '// ... and so on for all colors'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Loop Through Map"
              code={`// Map of theme colors
$theme-colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981,
  'danger': #ef4444,
  'warning': #f59e0b
);

@each $name, $color in $theme-colors {
  .btn-#{$name} {
    background: $color;
    color: white;
    
    &:hover {
      background: darken($color, 10%);
    }
  }
}`}
              output={[
                '.btn-primary { background: #3b82f6; color: white; }',
                '.btn-primary:hover { background: #2563eb; }',
                '.btn-secondary { background: #8b5cf6; color: white; }',
                '.btn-secondary:hover { background: #7c3aed; }',
                '// ... and so on for all theme colors'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Spacing Utilities"
              code={`// Generate spacing utilities
$spacings: (
  'xs': 0.25rem,
  'sm': 0.5rem,
  'md': 1rem,
  'lg': 1.5rem,
  'xl': 2rem
);

@each $name, $size in $spacings {
  .m-#{$name} { margin: $size; }
  .mt-#{$name} { margin-top: $size; }
  .mb-#{$name} { margin-bottom: $size; }
  .ml-#{$name} { margin-left: $size; }
  .mr-#{$name} { margin-right: $size; }
  
  .p-#{$name} { padding: $size; }
  .pt-#{$name} { padding-top: $size; }
  .pb-#{$name} { padding-bottom: $size; }
  .pl-#{$name} { padding-left: $size; }
  .pr-#{$name} { padding-right: $size; }
}`}
              output={[
                '.m-xs { margin: 0.25rem; }',
                '.mt-xs { margin-top: 0.25rem; }',
                '.mb-xs { margin-bottom: 0.25rem; }',
                '// ... all margin utilities',
                '.p-xs { padding: 0.25rem; }',
                '.pt-xs { padding-top: 0.25rem; }',
                '// ... all padding utilities',
                '// Generated for all spacing sizes!'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* @for */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="@for Loop"
            description="Count-based iteration"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">@for</code> to loop a specific number of times with a counter.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="@for ... through (inclusive)"
              code={`// Generate column classes (1 through 12)
@for $i from 1 through 12 {
  .col-#{$i} {
    width: (100% / 12) * $i;
  }
}`}
              output={[
                '.col-1 { width: 8.3333%; }',
                '.col-2 { width: 16.6667%; }',
                '.col-3 { width: 25%; }',
                '.col-4 { width: 33.3333%; }',
                '...',
                '.col-12 { width: 100%; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="@for ... to (exclusive)"
              code={`// Generate z-index scale (10 to 50, excluding 50)
@for $i from 1 to 5 {
  .z-#{$i * 10} {
    z-index: $i * 10;
  }
}`}
              output={[
                '.z-10 { z-index: 10; }',
                '.z-20 { z-index: 20; }',
                '.z-30 { z-index: 30; }',
                '.z-40 { z-index: 40; }',
                '// Stops before 5 (so no .z-50)'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Opacity Scale"
              code={`// Generate opacity utilities (0-100, step by 10)
@for $i from 0 through 10 {
  .opacity-#{$i * 10} {
    opacity: ($i * 10) / 100;
  }
}`}
              output={[
                '.opacity-0 { opacity: 0; }',
                '.opacity-10 { opacity: 0.1; }',
                '.opacity-20 { opacity: 0.2; }',
                '...',
                '.opacity-100 { opacity: 1; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Animation Delays"
              code={`// Generate staggered animation delays
@for $i from 1 through 5 {
  .fade-in-#{$i} {
    animation: fadeIn 0.5s ease;
    animation-delay: #{$i * 0.1}s;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}
              output={[
                '.fade-in-1 { animation: fadeIn 0.5s ease; animation-delay: 0.1s; }',
                '.fade-in-2 { animation: fadeIn 0.5s ease; animation-delay: 0.2s; }',
                '.fade-in-3 { animation: fadeIn 0.5s ease; animation-delay: 0.3s; }',
                '.fade-in-4 { animation: fadeIn 0.5s ease; animation-delay: 0.4s; }',
                '.fade-in-5 { animation: fadeIn 0.5s ease; animation-delay: 0.5s; }',
                '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">through vs to</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">through</code> includes the end number. <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">to</code> stops before it.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @while */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="@while Loop"
            description="Condition-based iteration"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">@while</code> to loop while a condition is true. Less common than <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">@for</code> or <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">@each</code>.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="@while Example"
              code={`// Generate heading sizes
$i: 1;
@while $i <= 6 {
  h#{$i} {
    font-size: (3rem - ($i * 0.3rem));
    margin-bottom: 0.5rem;
  }
  $i: $i + 1;
}`}
              output={[
                'h1 { font-size: 2.7rem; margin-bottom: 0.5rem; }',
                'h2 { font-size: 2.4rem; margin-bottom: 0.5rem; }',
                'h3 { font-size: 2.1rem; margin-bottom: 0.5rem; }',
                'h4 { font-size: 1.8rem; margin-bottom: 0.5rem; }',
                'h5 { font-size: 1.5rem; margin-bottom: 0.5rem; }',
                'h6 { font-size: 1.2rem; margin-bottom: 0.5rem; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Doubling Values"
              code={`// Generate grid column widths (doubling)
$width: 50px;
$i: 1;

@while $width <= 400 {
  .col-#{$i} {
    width: $width;
  }
  $width: $width * 2;
  $i: $i + 1;
}`}
              output={[
                '.col-1 { width: 50px; }',
                '.col-2 { width: 100px; }',
                '.col-3 { width: 200px; }',
                '.col-4 { width: 400px; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Use @while Carefully</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Always ensure the condition will eventually become false to avoid infinite loops!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Example */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Real-World Example"
            description="Utility class generator"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Complete Utility System"
              code={`// Define breakpoints
$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px
);

// Define colors
$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981,
  'danger': #ef4444
);

// Generate color utilities
@each $name, $color in $colors {
  .text-#{$name} {
    color: $color;
  }
  
  .bg-#{$name} {
    background: $color;
  }
  
  .border-#{$name} {
    border-color: $color;
  }
}

// Generate responsive display utilities
@each $breakpoint, $size in $breakpoints {
  @media (min-width: $size) {
    @each $display in (block, flex, grid, none) {
      .#{$breakpoint}\\:#{$display} {
        display: $display;
      }
    }
  }
}

// Generate spacing scale (0-12)
@for $i from 0 through 12 {
  .m-#{$i} { margin: #{$i * 0.25}rem; }
  .p-#{$i} { padding: #{$i * 0.25}rem; }
}`}
              output={[
                '.text-primary { color: #3b82f6; }',
                '.bg-primary { background: #3b82f6; }',
                '.border-primary { border-color: #3b82f6; }',
                '// ... for all colors',
                '@media (min-width: 640px) { .sm\\:block { display: block; } }',
                '@media (min-width: 640px) { .sm\\:flex { display: flex; } }',
                '// ... for all breakpoints and displays',
                '.m-0 { margin: 0rem; }',
                '.p-0 { padding: 0rem; }',
                '.m-1 { margin: 0.25rem; }',
                '// ... up to m-12 and p-12'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@if / @else</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Conditional logic based on values
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">@each</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Loop through lists or maps
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">@for</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Count-based loops (through/to)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">@while</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Condition-based loops (use carefully!)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
