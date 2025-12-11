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
  Repeat, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Hash,
  Grid3x3
} from 'lucide-react';

interface SassForLoopNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassForLoopNew({ onOpenWebPlayground }: SassForLoopNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Repeat}
        category="Sass/SCSS · Control & Logic"
        title="@for Loop"
        description="Learn how to use @for loops to generate repetitive CSS patterns. Master 'from...through' and 'from...to' syntax for iteration."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Repeat className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @for?"
            description="Generate CSS with iteration"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@for</strong> loops let you repeat CSS generation with incrementing numbers. Perfect for creating utility classes, grid systems, spacing scales, and any pattern that follows a numeric sequence!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Without @for</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Repetitive manual code
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">.col-1 {'{ width: 8.33%; }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.col-2 {'{ width: 16.66%; }'}</div>
                <div className="text-gray-700 dark:text-gray-300">.col-3 {'{ width: 25%; }'}</div>
                <div className="text-gray-400 dark:text-gray-600">// ... 9 more times! 😫</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Repeat className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With @for</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Loop generates it all!
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@for $i from 1 through 12 {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">.col-#{'{'}{'}'}$i {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 mt-1">✓ 12 classes generated!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Repeat className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">DRY Principle!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Stop writing repetitive CSS! Use @for to generate utility classes, spacing scales, and more automatically!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* from...through */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="from...through"
            description="Includes the end number"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @for...through Loop"
              code={`// Loop from 1 through 5 (includes 5)
@for $i from 1 through 5 {
  .item-#{$i} {
    order: $i;
  }
}

// Generates 5 classes: .item-1 to .item-5`}
              output={[
                '✓ Loops 5 times',
                '✓ Includes end number (5)'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              code={`.item-1 { order: 1; }
.item-2 { order: 2; }
.item-3 { order: 3; }
.item-4 { order: 4; }
.item-5 { order: 5; }`}
              language="css"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Grid Columns with through"
              code={`// Generate 12 column classes
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}`}
              output={[
                '.col-1 { width: 8.33333%; }',
                '.col-2 { width: 16.66667%; }',
                '...',
                '.col-12 { width: 100%; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">through = Inclusive!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">from 1 through 5</code> runs 5 times and includes the number 5!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* from...to */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="from...to"
            description="Excludes the end number"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="@for...to Loop"
              code={`// Loop from 1 to 5 (excludes 5)
@for $i from 1 to 5 {
  .box-#{$i} {
    z-index: $i;
  }
}

// Generates 4 classes: .box-1 to .box-4`}
              output={[
                '✓ Loops 4 times',
                '✓ Excludes end number (5)'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              code={`.box-1 { z-index: 1; }
.box-2 { z-index: 2; }
.box-3 { z-index: 3; }
.box-4 { z-index: 4; }

/* .box-5 is NOT generated */`}
              language="css"
              colorTheme="purple"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">through (Inclusive)</h5>
                <code className="text-xs text-gray-700 dark:text-gray-300">1 through 5 → 1, 2, 3, 4, 5</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">to (Exclusive)</h5>
                <code className="text-xs text-gray-700 dark:text-gray-300">1 to 5 → 1, 2, 3, 4</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Grid3x3 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Common Patterns"
            description="Real-world @for use cases"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Spacing Utilities"
              code={`// Generate margin utilities: m-0, m-1, m-2, etc.
@for $i from 0 through 8 {
  .m-#{$i} {
    margin: $i * 0.25rem;  // 0, 4px, 8px, 12px...
  }
  
  .p-#{$i} {
    padding: $i * 0.25rem;
  }
}`}
              output={[
                '.m-0 { margin: 0; }',
                '.m-1 { margin: 0.25rem; }',
                '.m-2 { margin: 0.5rem; }',
                '...'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Font Size Scale"
              code={`// Generate text-1 through text-6
@for $i from 1 through 6 {
  .text-#{$i} {
    font-size: 0.75rem + ($i * 0.125rem);
  }
}

// text-1: 0.875rem (14px)
// text-2: 1rem (16px)
// text-3: 1.125rem (18px)
// ...`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Z-Index Layers"
              code={`// Create z-index utility classes
@for $i from 1 through 10 {
  .z-#{$i * 10} {
    z-index: $i * 10;
  }
}

// Generates: z-10, z-20, z-30, ... z-100`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Animation Delays"
              code={`// Stagger animation delays
@for $i from 1 through 5 {
  .delay-#{$i} {
    animation-delay: #{$i * 0.1}s;
  }
}

// delay-1: 0.1s, delay-2: 0.2s, etc.`}
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
          title="@for Loop in Action"
          description="Staggered card animations"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card delay-1">Card 1</div>
  <div class="card delay-2">Card 2</div>
  <div class="card delay-3">Card 3</div>
  <div class="card delay-4">Card 4</div>
  <div class="card delay-5">Card 5</div>
  <div class="card delay-6">Card 6</div>
</div>`}
          css={`// Generate staggered animation delays with @for
@for $i from 1 through 6 {
  .delay-#{$i} {
    animation-delay: #{$i * 0.15}s;
  }
}

// Generate opacity utilities
@for $i from 1 through 10 {
  .opacity-#{$i * 10} {
    opacity: $i / 10;
  }
}

// Keyframes
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Base styles
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  width: 100%;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  
  // Apply animation to all cards
  animation: fadeInUp 0.6s ease-out both;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  // Loop-generated colors for each card
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      @if $i % 3 == 1 {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
      } @else if $i % 3 == 2 {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
      } @else {
        background: linear-gradient(135deg, #4facfe, #00f2fe);
        color: white;
      }
    }
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
  }
}`}
          title="Staggered Animations with @for"
          description="Cards fade in with loop-generated delays"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Advanced Techniques */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Advanced Techniques"
            description="Math and calculations in loops"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Exponential Scale"
              code={`// Generate exponentially growing sizes
@for $i from 1 through 5 {
  .scale-#{$i} {
    transform: scale(1 + ($i * 0.2));
  }
}

// scale-1: scale(1.2)
// scale-2: scale(1.4)
// scale-3: scale(1.6)
// etc.`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Nested @for Loops"
              code={`// Generate a grid system with rows and columns
@for $row from 1 through 3 {
  @for $col from 1 through 4 {
    .grid-#{$row}-#{$col} {
      grid-area: #{$row} / #{$col};
    }
  }
}

// Generates: .grid-1-1, .grid-1-2, ... .grid-3-4`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Calculations in Loops"
              code={`// Fibonacci-like spacing
$prev: 0;
$curr: 1;

@for $i from 1 through 6 {
  .fib-#{$i} {
    margin: #{$curr}rem;
  }
  
  $next: $prev + $curr;
  $prev: $curr;
  $curr: $next;
}

// fib-1: 1rem, fib-2: 1rem, fib-3: 2rem, etc.`}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Don't Overdo It!</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Loops generate CSS at compile time. Large loops create large CSS files. Use responsibly!
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">through</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Includes end: 1 through 5 = 1,2,3,4,5
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">to</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Excludes end: 1 to 5 = 1,2,3,4
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Utilities</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for spacing, grids, delays
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">DRY</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Stop repeating yourself!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
