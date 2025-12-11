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
  TrendingUp,
  PieChart,
  Percent
} from 'lucide-react';

interface SassMathModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMathModuleNew({ onOpenWebPlayground }: SassMathModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Calculator}
        category="Sass/SCSS · Built-in Modules"
        title="sass:math Module"
        description="Master mathematical functions and constants: ceil, floor, round, abs, pow, sqrt, pi, e, and more for precise calculations."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Calculator className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:math Module"
            description="Advanced mathematical operations"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:math</strong> module provides advanced mathematical functions and constants. Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:math'</code> to access functions like ceil, floor, round, abs, pow, sqrt, and constants like pi and e!
          </p>

          <CodeSnippetWithOutput
            title="Loading the Module"
            code={`// Load the math module
@use 'sass:math';

.circle {
  // Use math functions
  width: math.round(15.7px);        // 16px
  height: math.ceil(15.3px);        // 16px
  border-radius: math.div(16px, 2); // 8px
}`}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Calculator className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Modern Sass Modules!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Always use <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@use 'sass:math'</code> instead of global math functions for better organization!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Rounding Functions */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Rounding Functions"
            description="ceil, floor, round"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">ceil()</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Round up</p>
                <code className="text-xs text-gray-600 dark:text-gray-400">ceil(4.2) → 5</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">floor()</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Round down</p>
                <code className="text-xs text-gray-600 dark:text-gray-400">floor(4.8) → 4</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">round()</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Nearest int</p>
                <code className="text-xs text-gray-600 dark:text-gray-400">round(4.5) → 5</code>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="Rounding Examples"
              code={`@use 'sass:math';

.box {
  // Round up to nearest pixel
  width: math.ceil(15.3px);     // 16px
  
  // Round down
  height: math.floor(15.8px);   // 15px
  
  // Round to nearest
  padding: math.round(7.5px);   // 8px
  margin: math.round(7.4px);    // 7px
}`}
              output={[
                'width: 16px;',
                'height: 15px;',
                'padding: 8px;',
                'margin: 7px;'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Division & Percentage */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Percent className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Division & Percentage"
            description="div(), percentage()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="math.div()"
              description="Proper division in modern Sass"
              code={`@use 'sass:math';

.container {
  // Old way (deprecated): width: 100px / 2;
  // New way with math.div:
  width: math.div(100px, 2);      // 50px
  
  // Column calculations
  $total: 12;
  $span: 4;
  width: math.percentage(math.div($span, $total));  // 33.33333%
}`}
              output={[
                'width: 50px;',
                'width: 33.33333%;'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="math.percentage()"
              code={`@use 'sass:math';

.progress {
  // Convert decimal to percentage
  width: math.percentage(0.75);   // 75%
  width: math.percentage(0.5);    // 50%
  width: math.percentage(1);      // 100%
  
  // Calculate completion
  $completed: 7;
  $total: 10;
  width: math.percentage(math.div($completed, $total));  // 70%
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Use math.div() for Division!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              The <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">/</code> operator is deprecated for division. Always use <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">math.div()</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Power & Square Root */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Power & Square Root"
            description="pow(), sqrt()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="math.pow()"
              description="Raise to power"
              code={`@use 'sass:math';

.scale {
  // Exponential scaling
  transform: scale(math.pow(2, 3));  // scale(8) - 2^3
  
  // Size progression
  $base: 2;
  @for $i from 1 through 5 {
    .size-#{$i} {
      width: #{math.pow($base, $i)}px;  // 2, 4, 8, 16, 32
    }
  }
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="math.sqrt()"
              description="Square root"
              code={`@use 'sass:math';

.diagonal {
  // Calculate diagonal of square
  $side: 100px;
  $diagonal: $side * math.sqrt(2);  // 141.42136px
  
  width: $diagonal;
  
  // Pythagorean theorem
  $a: 3px;
  $b: 4px;
  $c: math.sqrt(math.pow($a, 2) + math.pow($b, 2));  // 5px
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Absolute & Sign */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Absolute Value & More"
            description="abs(), min(), max(), clamp()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="math.abs()"
              description="Absolute value (remove negative)"
              code={`@use 'sass:math';

.position {
  // Always positive
  left: math.abs(-50px);    // 50px
  top: math.abs(30px);      // 30px
  
  // Distance calculation
  $diff: 10px - 25px;       // -15px
  margin: math.abs($diff);  // 15px
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="math.min() & math.max()"
              code={`@use 'sass:math';

.container {
  // Get smallest value
  width: math.min(100%, 600px);     // 600px if viewport > 600px
  
  // Get largest value
  padding: math.max(1rem, 5%);      // At least 1rem
  
  // Multiple values
  font-size: math.max(12px, 14px, 16px);  // 16px
  margin: math.min(2rem, 3rem, 1.5rem);   // 1.5rem
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="math.clamp()"
              code={`@use 'sass:math';

.text {
  // Constrain between min and max
  font-size: math.clamp(12px, 2vw, 24px);
  // Minimum: 12px, Preferred: 2vw, Maximum: 24px
  
  padding: math.clamp(1rem, 5%, 3rem);
  // Between 1rem and 3rem, preferring 5%
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Constants */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<PieChart className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Mathematical Constants"
            description="math.$pi, math.$e"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">math.$pi</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Value: 3.14159265359</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Circle calculations</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">math.$e</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Value: 2.71828182846</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Natural logarithm base</p>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="Using Constants"
              code={`@use 'sass:math';

.circle {
  // Calculate circumference
  $radius: 50px;
  $circumference: 2 * math.$pi * $radius;  // 314.159px
  
  // Circle area
  $area: math.$pi * math.pow($radius, 2);  // 7853.98px
  
  stroke-dasharray: $circumference;
}

.exponential {
  // Natural logarithm calculations
  $growth: math.pow(math.$e, 2);  // 7.38906
}`}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Math Module in Action"
          description="Responsive grid with mathematical calculations"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
</div>`}
          css={`@use 'sass:math';

// Using math functions
// math.round(20.4px) => 20px
// math.ceil(11.5px) => 12px  
// math.floor(11.8px) => 11px
// math.div(24px, 2) => 12px
// math.abs(-5) => 5

$card-padding: 20px;    // math.round(20.4px)
$border-radius: 12px;   // math.ceil(11.5px)
$gap: 12px;             // math.div(24px, 2)

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
  width: 100%;
  max-width: 1200px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $gap;
}

.card {
  background: white;
  padding: $card-padding 2rem;
  border-radius: $border-radius;
  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  // Card 2
  &:nth-child(2) {
    background: linear-gradient(135deg, #fff, #f0f9ff);
    
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(135deg, #1e293b, #1e3a8a);
    }
    
    &:hover {
      transform: translateY(-8px) scale(1.05);
    }
  }
  
  // Card 3
  &:nth-child(3) {
    background: linear-gradient(135deg, #fff, #fef3c7);
    
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(135deg, #1e293b, #78350f);
    }
    
    &:hover {
      transform: translateY(-8px) scale(1.1);
    }
  }
  
  // Card 4
  &:nth-child(4) {
    background: linear-gradient(135deg, #fff, #fce7f3);
    
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(135deg, #1e293b, #831843);
    }
    
    &:hover {
      transform: translateY(-8px) scale(1.15);
    }
  }
}`}
          title="Math Module Grid"
          description="Responsive grid with math.div(), math.round(), math.ceil()"
          colorTheme="cyan"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Load Module</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @use 'sass:math'
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Division</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use math.div(), not /
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Rounding</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ceil, floor, round
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Constants</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                math.$pi, math.$e
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
