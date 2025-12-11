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
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  ArrowLeftRight,
  Zap
} from 'lucide-react';

interface SassFunctionBasicsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassFunctionBasicsNew({ onOpenWebPlayground }: SassFunctionBasicsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Calculator}
        category="Sass/SCSS · Reusability"
        title="Functions"
        description="Learn how to write custom Sass functions with @function and @return. Compute values, transform data, and create reusable calculations."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Calculator className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Functions?"
            description="Compute and return values"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Functions</strong> let you perform calculations and transformations, then <strong>return a value</strong>. Unlike mixins that output styles, functions return values you can use anywhere—in properties, calculations, or even other functions!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Output CSS styles
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">@mixin center {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">display: flex;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-2">Outputs styles</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Return computed values
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@function double($n) {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">@return $n * 2;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-2">✓ Returns value</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <ArrowLeftRight className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Input → Output</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Functions take inputs, perform calculations, and return a single value you can use anywhere!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Functions */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Creating Functions"
            description="Use @function and @return"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Define functions with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@function</code> and return a value with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@return</code>.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Function Syntax"
              description="Define and use a function"
              code={`// Define a function
@function double($number) {
  @return $number * 2;
}

// Use it
.box {
  width: double(50px);        // Returns 100px
  height: double(30px);       // Returns 60px
  padding: double(1rem);      // Returns 2rem
}`}
              output={[
                '✓ width: 100px',
                '✓ height: 60px',
                '✓ padding: 2rem'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Multiple Parameters"
              code={`// Function with multiple parameters
@function add($a, $b) {
  @return $a + $b;
}

// Use it
.container {
  width: add(200px, 100px);   // Returns 300px
  padding: add(1rem, 0.5rem); // Returns 1.5rem
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Must Return!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Every function must have a <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">@return</code> statement!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Practical Functions */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Practical Examples"
            description="Real-world function patterns"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Pixel to REM Converter"
              description="Convert px to rem units"
              code={`// Base font size
$base-font-size: 16px;

// Conversion function
@function px-to-rem($px) {
  @return ($px / $base-font-size) * 1rem;
}

// Use it
.heading {
  font-size: px-to-rem(24px);   // Returns 1.5rem
  margin: px-to-rem(32px);      // Returns 2rem
}

.text {
  font-size: px-to-rem(14px);   // Returns 0.875rem
}`}
              output={[
                '✓ 24px → 1.5rem',
                '✓ 32px → 2rem',
                '✓ 14px → 0.875rem'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Strip Units"
              description="Remove units from numbers"
              code={`// Remove unit from a number
@function strip-unit($number) {
  @return $number / ($number * 0 + 1);
}

// Use it
$width-value: strip-unit(200px);  // Returns 200
$time-value: strip-unit(2s);      // Returns 2

// Useful for calculations
$half-width: strip-unit(200px) / 2; // 100`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Percentage Calculator"
              code={`// Calculate percentage of a value
@function percent($value, $total) {
  @return ($value / $total) * 100%;
}

// Use it
.sidebar {
  width: percent(300px, 1200px);  // Returns 25%
}

.main {
  width: percent(900px, 1200px);  // Returns 75%
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
          title="Functions in Action"
          description="Spacing system with functions"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card card-sm">
    <h3>Small Card</h3>
    <p>Using spacing functions</p>
  </div>
  
  <div class="card card-md">
    <h3>Medium Card</h3>
    <p>Calculated spacing values</p>
  </div>
  
  <div class="card card-lg">
    <h3>Large Card</h3>
    <p>Consistent scale</p>
  </div>
</div>`}
          css={`// Base spacing unit
$base-spacing: 8px;

// Spacing function
@function spacing($multiplier) {
  @return $base-spacing * $multiplier;
}

// px to rem conversion
$base-font-size: 16px;

@function rem($px) {
  @return ($px / $base-font-size) * 1rem;
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

// Base card
.card {
  background: white;
  border-radius: spacing(1);  // 8px
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  max-width: 300px;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #e2e8f0;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
  
  h3 {
    margin-bottom: spacing(1);  // 8px
    font-size: rem(20px);       // 1.25rem
  }
  
  p {
    color: #64748b;
    font-size: rem(14px);       // 0.875rem
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

// Size variants using functions
.card-sm {
  padding: spacing(2);  // 16px
  width: percent(280, 1200);  // ~23.33%
}

.card-md {
  padding: spacing(3);  // 24px
  width: percent(320, 1200);  // ~26.67%
}

.card-lg {
  padding: spacing(4);  // 32px
  width: percent(360, 1200);  // 30%
}`}
          title="Spacing Functions Example"
          description="Consistent spacing with custom functions"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Common Function Patterns */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Common Function Patterns"
            description="Useful function recipes"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <CodeSnippetWithOutput
              title="Clamp Value"
              description="Limit value between min and max"
              code={`@function clamp-value($value, $min, $max) {
  @if $value < $min {
    @return $min;
  } @else if $value > $max {
    @return $max;
  }
  @return $value;
}

$size: clamp-value(250px, 100px, 200px);
// Returns 200px (clamped to max)`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Calculate Contrast"
              code={`@function contrast($color) {
  $lightness: lightness($color);
  
  @if $lightness > 50% {
    @return #000;  // Dark text
  } @else {
    @return #fff;  // Light text
  }
}

.button {
  background: #3b82f6;
  color: contrast(#3b82f6);  // white
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Power Function"
              code={`@function pow($base, $exponent) {
  $result: 1;
  
  @for $i from 1 through $exponent {
    $result: $result * $base;
  }
  
  @return $result;
}

$squared: pow(2, 2);  // 4
$cubed: pow(3, 3);    // 27`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="String Replace"
              code={`@function str-replace($string, $search, $replace) {
  $index: str-index($string, $search);
  
  @if $index {
    $before: str-slice($string, 1, $index - 1);
    $after: str-slice($string, $index + str-length($search));
    @return $before + $replace + $after;
  }
  
  @return $string;
}

$url: str-replace('path/to/file', '/', '-');
// Returns 'path-to-file'`}
              language="scss"
              colorTheme="green"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@function</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define functions with @function
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@return</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always return a value
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Calculations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for math and transformations
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Reusable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use anywhere you need a value
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
