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
  RotateCw, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  AlertTriangle,
  Zap
} from 'lucide-react';

interface SassWhileLoopNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassWhileLoopNew({ onOpenWebPlayground }: SassWhileLoopNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={RotateCw}
        category="Sass/SCSS · Control & Logic"
        title="@while Loop"
        description="Learn how to use @while for conditional iteration. Loop until a condition becomes false—perfect for complex calculations and sequences."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<RotateCw className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @while?"
            description="Loop until condition is false"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@while</strong> loops repeatedly while a condition is <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">true</code>. Unlike @for and @each which iterate a known number of times, @while continues until you tell it to stop. Use it for complex calculations, dynamic iterations, and algorithms!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">@for</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Fixed iterations
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">1 to 5</code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">@each</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Over collections
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">in $list</code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <RotateCw className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">@while</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Until condition
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">$i &lt; 10</code>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-300 dark:border-yellow-700">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">Infinite Loop Warning!</AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              Always make sure your @while condition will eventually become false, or you'll create an infinite loop!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic @while */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic @while"
            description="Simple conditional loops"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Simple @while Loop"
              code={`$i: 1;

@while $i <= 5 {
  .item-#{$i} {
    width: $i * 20%;
  }
  
  $i: $i + 1;  // MUST increment!
}`}
              output={[
                '.item-1 { width: 20%; }',
                '.item-2 { width: 40%; }',
                '.item-3 { width: 60%; }',
                '.item-4 { width: 80%; }',
                '.item-5 { width: 100%; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Countdown Example"
              code={`$count: 5;

@while $count > 0 {
  .priority-#{$count} {
    z-index: $count * 10;
  }
  
  $count: $count - 1;  // Decrement
}`}
              output={[
                '.priority-5 { z-index: 50; }',
                '.priority-4 { z-index: 40; }',
                '.priority-3 { z-index: 30; }',
                '.priority-2 { z-index: 20; }',
                '.priority-1 { z-index: 10; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Don't Forget to Update!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Always update the variable inside the loop, or the condition will never become false!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Complex Conditions */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Complex Conditions"
            description="Advanced @while patterns"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Doubling Values"
              code={`$size: 1px;

@while $size < 100px {
  .border-#{$size} {
    border-width: $size;
  }
  
  $size: $size * 2;  // Double each time
}

// Generates: 1px, 2px, 4px, 8px, 16px, 32px, 64px`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Grid Column Calculator"
              code={`$columns: 12;
$i: 1;

@while $i <= $columns {
  .col-#{$i} {
    width: percentage($i / $columns);
    
    @if $i == $columns {
      margin-right: 0;
    } @else {
      margin-right: 2%;
    }
  }
  
  $i: $i + 1;
}`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Power of 2 Classes"
              code={`$base: 2;
$power: 0;
$result: 1;

@while $result < 1024 {
  .size-#{$result} {
    width: #{$result}px;
    height: #{$result}px;
  }
  
  $power: $power + 1;
  $result: $base ** $power;  // 2^power
}

// Generates: size-1, size-2, size-4, size-8, ... size-512`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* When to Use @while */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="When to Use @while"
            description="Choose the right loop"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Good Use Cases
              </h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Don't know iteration count</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Complex mathematical sequences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Dynamic threshold conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Algorithms & calculations</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Better Alternatives
              </h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Fixed iterations? Use <strong>@for</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Over a list/map? Use <strong>@each</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Simple condition? Use <strong>@if</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <CodeSnippetWithOutput
            title="@while vs @for Comparison"
            code={`// ❌ Don't use @while for this:
$i: 1;
@while $i <= 5 {
  .item-#{$i} { }
  $i: $i + 1;
}

// ✅ Use @for instead:
@for $i from 1 through 5 {
  .item-#{$i} { }
}

// ✅ Good @while use case:
$value: 1;
@while $value < 1000 {
  .scale-#{$value} {
    transform: scale($value);
  }
  $value: $value * 1.5;  // Unknown iteration count
}`}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="@while Loop in Action"
          description="Growing circles with geometric progression"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="circle circle-8"></div>
  <div class="circle circle-16"></div>
  <div class="circle circle-32"></div>
  <div class="circle circle-64"></div>
  <div class="circle circle-128"></div>
</div>`}
          css={`// Generate sizes using @while
$size: 8;
$count: 1;

@while $size <= 128 {
  .circle-#{$size} {
    width: #{$size}px;
    height: #{$size}px;
    
    // Vary color based on size
    @if $size <= 16 {
      background: #3b82f6;
    } @else if $size <= 64 {
      background: #8b5cf6;
    } @else {
      background: #ec4899;
    }
  }
  
  $size: $size * 2;  // Double each time
  $count: $count + 1;
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
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.circle {
  border-radius: 50%;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: float 3s ease-in-out infinite;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
}

// Stagger animation delays
$delay: 0s;
$i: 8;

@while $i <= 128 {
  .circle-#{$i} {
    animation-delay: $delay;
  }
  
  $delay: $delay + 0.2s;
  $i: $i * 2;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}`}
          title="Growing Circles with @while"
          description="Geometric progression using @while loop"
          colorTheme="purple"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Condition</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Loops while condition is true
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Update</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Must update variable in loop
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Use Sparingly</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prefer @for or @each when possible
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Watch Out</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Avoid infinite loops!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
