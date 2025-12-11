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
  Wand2, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Calculator,
  Palette,
  Zap
} from 'lucide-react';

interface SassCustomFunctionsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCustomFunctionsNew({ onOpenWebPlayground }: SassCustomFunctionsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Wand2}
        category="Sass/SCSS · Advanced Features"
        title="Custom Functions"
        description="Create reusable functions for calculations, color manipulation, and complex logic with @function."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wand2 className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Custom Functions"
            description="Build your own reusable functions"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            SCSS allows you to create <strong>custom functions</strong> using the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@function</code> directive. Functions can perform calculations, manipulate colors, implement logic, and return values for reuse throughout your stylesheets!
          </p>

          <CodeSnippetWithOutput
            title="Basic Function Syntax"
            code={`@function double($value) {
  @return $value * 2;
}

.box {
  width: double(50px);    // 100px
  height: double(25px);   // 50px
  padding: double(1rem);  // 2rem
}`}
            output={[
              '.box {',
              '  width: 100px;',
              '  height: 50px;',
              '  padding: 2rem;',
              '}'
            ]}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Wand2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">@return Statement</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Functions must use <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@return</code> to output a value!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Parameters & Default Values */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Parameters & Defaults"
            description="Flexible function arguments"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Default Parameter Values"
              code={`@function spacing($multiplier: 1, $base: 8px) {
  @return $multiplier * $base;
}

.element {
  margin: spacing();           // 1 * 8px = 8px
  padding: spacing(2);         // 2 * 8px = 16px
  gap: spacing(3, 10px);       // 3 * 10px = 30px
}`}
              output={[
                '.element {',
                '  margin: 8px;',
                '  padding: 16px;',
                '  gap: 30px;',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Multiple Parameters"
              code={`@function calculate-area($width, $height) {
  @return $width * $height;
}

@function calculate-diagonal($width, $height) {
  // Using math functions
  $sum: $width * $width + $height * $height;
  @return $sum; // In real SCSS: sqrt($sum)
}

.rectangle {
  // area: calculate-area(100px, 50px) = 5000px²
  width: 100px;
  height: 50px;
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Calculation Functions */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Calculator className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Calculation Functions"
            description="Mathematical operations"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Responsive Font Scaling"
              code={`@function fluid-size($min, $max, $min-vw: 320px, $max-vw: 1200px) {
  $range: $max - $min;
  $vw-range: $max-vw - $min-vw;
  
  // Simplified: in real SCSS would use calc()
  @return $min + $range * 0.5;
}

h1 {
  // font-size: fluid-size(24px, 48px);
  font-size: 36px; // Average for demonstration
}

h2 {
  // font-size: fluid-size(20px, 36px);
  font-size: 28px;
}`}
              output={[
                'h1 { font-size: 36px; }',
                'h2 { font-size: 28px; }',
                '// Scales fluidly between min and max'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Golden Ratio Calculator"
              code={`@function golden-ratio($value, $increment: 1) {
  $ratio: 1.618;
  $result: $value;
  
  @for $i from 1 through $increment {
    $result: $result * $ratio;
  }
  
  @return $result;
}

h1 { font-size: 16px * 1.618 * 1.618; } // ~42px
h2 { font-size: 16px * 1.618; }         // ~26px
h3 { font-size: 16px; }                 // 16px`}
              output={[
                'h1 { font-size: 41.89px; }',
                'h2 { font-size: 25.89px; }',
                'h3 { font-size: 16px; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Color Functions */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Color Manipulation"
            description="Custom color utilities"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Auto Contrast Text Color"
              code={`@function text-contrast($bg-color) {
  // Simplified lightness check
  // In real SCSS: use color.lightness() or luminance
  
  // If background is dark, return light text
  // If background is light, return dark text
  @return white; // Would calculate based on $bg-color
}

.button-primary {
  background: #007bff;
  color: text-contrast(#007bff); // white
}

.button-light {
  background: #f8f9fa;
  // color: text-contrast(#f8f9fa); // would return black
  color: black;
}`}
              output={[
                '.button-primary {',
                '  background: #007bff;',
                '  color: white;',
                '}',
                '.button-light {',
                '  background: #f8f9fa;',
                '  color: black;',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Color Palette Generator"
              code={`@function tint($color, $percentage) {
  // Mix color with white
  // In real SCSS: color.mix($color, white, $percentage)
  @return lighten($color, $percentage);
}

@function shade($color, $percentage) {
  // Mix color with black
  // In real SCSS: color.mix($color, black, $percentage)
  @return darken($color, $percentage);
}

$primary: #3b82f6;

.color-light { color: tint($primary, 20%); }
.color-base { color: $primary; }
.color-dark { color: shade($primary, 20%); }`}
              output={[
                '.color-light { color: #6ea3f8; }',
                '.color-base { color: #3b82f6; }',
                '.color-dark { color: #2563eb; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Palette className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Color Safety!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Always validate color inputs and provide fallbacks for edge cases.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Logic & Conditionals */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Logic & Conditionals"
            description="Functions with @if/@else"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Conditional Returns"
              code={`@function size-class($size) {
  @if $size == 'small' {
    @return 12px;
  } @else if $size == 'medium' {
    @return 16px;
  } @else if $size == 'large' {
    @return 24px;
  } @else {
    @return 16px; // default
  }
}

.text-sm { font-size: size-class('small'); }
.text-md { font-size: size-class('medium'); }
.text-lg { font-size: size-class('large'); }`}
              output={[
                '.text-sm { font-size: 12px; }',
                '.text-md { font-size: 16px; }',
                '.text-lg { font-size: 24px; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Type Validation"
              code={`@function safe-divide($a, $b) {
  @if $b == 0 {
    @warn "Division by zero, returning 0";
    @return 0;
  }
  @return $a / $b;
}

@function strip-unit($value) {
  @if type-of($value) == 'number' {
    @return $value / ($value * 0 + 1);
  }
  @return $value;
}

.element {
  width: safe-divide(100px, 2);  // 50px
  // width: safe-divide(100px, 0); // 0 + warning
}`}
              output={[
                '.element {',
                '  width: 50px;',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Real-World Examples"
            description="Practical utility functions"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Spacing System"
              code={`@function spacing($multiplier: 1) {
  $base: 8px;
  @return $multiplier * $base;
}

.container {
  padding: spacing(2);      // 16px
  margin: spacing(4);       // 32px
  gap: spacing(3);          // 24px
}

.tight {
  padding: spacing(0.5);    // 4px
}`}
              output={[
                '.container {',
                '  padding: 16px;',
                '  margin: 32px;',
                '  gap: 24px;',
                '}',
                '.tight { padding: 4px; }'
              ]}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Responsive Breakpoint Helper"
              code={`@function breakpoint($size) {
  $breakpoints: (
    'xs': 320px,
    'sm': 640px,
    'md': 768px,
    'lg': 1024px,
    'xl': 1280px
  );
  
  @return map-get($breakpoints, $size);
}

// Usage in media queries
@media (min-width: 768px) { // breakpoint('md')
  .container {
    max-width: 768px;
  }
}`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Z-Index Management"
              code={`@function z-index($layer) {
  $layers: (
    'dropdown': 1000,
    'modal': 2000,
    'tooltip': 3000,
    'toast': 4000
  );
  
  @return map-get($layers, $layer);
}

.dropdown { z-index: 1000; }  // z-index('dropdown')
.modal { z-index: 2000; }     // z-index('modal')
.tooltip { z-index: 3000; }   // z-index('tooltip')`}
              output={[
                '.dropdown { z-index: 1000; }',
                '.modal { z-index: 2000; }',
                '.tooltip { z-index: 3000; }'
              ]}
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
          title="Custom Functions in Action"
          description="Design system with utility functions"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card card-primary">
    <h3>Primary Card</h3>
    <p>Using custom spacing and color functions</p>
  </div>
  
  <div class="card card-success">
    <h3>Success Card</h3>
    <p>Responsive sizing with fluid functions</p>
  </div>
  
  <div class="card card-warning">
    <h3>Warning Card</h3>
    <p>Auto-contrast text colors</p>
  </div>
</div>`}
          css={`// Custom utility functions

// Spacing function
// @function spacing($multiplier) { @return $multiplier * 8px; }
$spacing-sm: 8px;      // spacing(1)
$spacing-md: 16px;     // spacing(2)
$spacing-lg: 24px;     // spacing(3)
$spacing-xl: 32px;     // spacing(4)

// Color tint function
// @function tint($color, $percentage) { ... }

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
  padding: $spacing-xl;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-lg;
  max-width: 1200px;
  width: 100%;
}

.card {
  background: white;
  padding: $spacing-lg;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 24px;      // fluid-size(18px, 24px)
    margin-bottom: $spacing-md;
    font-weight: 600;
  }
  
  p {
    line-height: 1.6;
    color: #64748b;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

// Color variants (using tint/shade functions)
.card-primary {
  border-left: 4px solid #3b82f6;
  
  h3 {
    color: #3b82f6;
  }
}

.card-success {
  border-left: 4px solid #10b981;
  
  h3 {
    color: #10b981;
  }
}

.card-warning {
  border-left: 4px solid #f59e0b;
  
  h3 {
    color: #f59e0b;
  }
}

// Responsive spacing (using custom functions)
@media (max-width: 768px) {
  body {
    padding: $spacing-md;
  }
  
  .container {
    gap: $spacing-md;
  }
  
  .card {
    padding: $spacing-md;
    
    h3 {
      font-size: 20px;  // Smaller on mobile
    }
  }
}`}
          title="Design System with Custom Functions"
          description="Spacing, colors, and responsive utilities"
          colorTheme="indigo"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@function</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use @function with @return
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Defaults</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Parameters can have default values
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Calculations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for math and measurements
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Reusable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                DRY principle - Don't Repeat Yourself
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
