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
  Braces, 
  Code2,
  Tag,
  Type,
  Hash,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  FileText
} from 'lucide-react';

interface SassInterpolationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassInterpolationNew({ onOpenWebPlayground }: SassInterpolationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Braces}
        category="Sass/SCSS · Control & Logic"
        title="Interpolation #{}"
        description="Learn how to inject SassScript values into selectors, property names, strings, and CSS at-rules using interpolation syntax."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Braces className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is Interpolation?"
            description="Inject dynamic values anywhere"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Interpolation</strong> with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">#{'{'} {'}'}</code> lets you insert variables and expressions into places where regular Sass variables don't work—like selectors, property names, strings, and at-rules!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Regular Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Work in property values
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">color: $primary;</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-1">✓ Property values only</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Braces className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Interpolation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Works everywhere!
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">.#{'{'}{'}'}$class {'{'} {'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Selectors, props, strings!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Braces className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Dynamic Everything!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Use <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">#{'{'} {'}'}</code> to inject values into selectors, property names, strings, and more!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Interpolation */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic Syntax"
            description="#{ } inserts values"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Interpolation in Strings"
              code={`$name: 'header';
$size: 'large';

// Without interpolation (doesn't work)
// .class-$name { } // ❌

// With interpolation
.class-#{$name} {
  font-size: 24px;
}

// In property values
.box {
  content: "This is #{$size} box";
}`}
              output={[
                '✓ .class-header { }',
                '✓ content: "This is large box"'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              code={`.class-header {
  font-size: 24px;
}

.box {
  content: "This is large box";
}`}
              language="css"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Selectors */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Tag className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interpolation in Selectors"
            description="Dynamic class and ID names"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Dynamic Selectors"
              code={`$theme: 'dark';
$component: 'button';

// Class name
.#{$theme}-mode {
  background: #1e293b;
}

// Multiple interpolations
.#{$component}-#{$theme} {
  color: white;
  padding: 0.75rem 1.5rem;
}

// ID selector
##{$component}-primary {
  background: #3b82f6;
}`}
              output={[
                '.dark-mode { }',
                '.button-dark { }',
                '#button-primary { }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="BEM with Interpolation"
              code={`$block: 'card';

.#{$block} {
  padding: 1rem;
  
  &__header {
    font-weight: bold;
  }
  
  &__body {
    margin-top: 0.5rem;
  }
  
  &--featured {
    border: 2px solid gold;
  }
}

// Generates:
// .card { }
// .card__header { }
// .card__body { }
// .card--featured { }`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Property Names */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Property Names"
            description="Dynamic CSS properties"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Interpolating Property Names"
              code={`$side: 'top';
$property: 'margin';

.box {
  // Dynamic property name
  #{$property}-#{$side}: 20px;
  
  // Another example
  border-#{$side}: 2px solid blue;
}`}
              output={[
                'margin-top: 20px;',
                'border-top: 2px solid blue;'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Custom Properties (CSS Variables)"
              code={`$theme: 'primary';

.button {
  // Generate CSS custom property name
  --color-#{$theme}: #3b82f6;
  --bg-#{$theme}: #dbeafe;
  
  color: var(--color-#{$theme});
  background: var(--bg-#{$theme});
}`}
              output={[
                '--color-primary: #3b82f6;',
                '--bg-primary: #dbeafe;'
              ]}
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
          title="Interpolation in Action"
          description="Dynamic component generation"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <button class="btn-primary btn-small">Small Primary</button>
  <button class="btn-success btn-medium">Medium Success</button>
  <button class="btn-danger btn-large">Large Danger</button>
</div>`}
          css={`// Variables for interpolation
$colors: (
  'primary': #3b82f6,
  'success': #10b981,
  'danger': #ef4444
);

$sizes: (
  'small': 0.75rem 1rem,
  'medium': 0.875rem 1.5rem,
  'large': 1rem 2rem
);

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

// Generate button variants with interpolation
@each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($color, 0.4);
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
}

// Generate size variants with interpolation
@each $size-name, $padding in $sizes {
  .btn-#{$size-name} {
    padding: $padding;
    
    @if $size-name == 'small' {
      font-size: 0.875rem;
    } @else if $size-name == 'medium' {
      font-size: 1rem;
    } @else {
      font-size: 1.125rem;
    }
  }
}`}
          title="Dynamic Button Generation"
          description="Using interpolation to generate variants"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* At-Rules */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="At-Rules & Media Queries"
            description="Dynamic @media, @keyframes, etc."
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Dynamic Media Queries"
              code={`$breakpoint: 768px;
$feature: 'max-width';

// Dynamic media query
@media (#{$feature}: $breakpoint) {
  .container {
    padding: 1rem;
  }
}

// Generates:
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Dynamic Keyframes"
              code={`$animation-name: 'fadeIn';

// Dynamic animation name
@keyframes #{$animation-name} {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: #{$animation-name} 1s ease;
}

// Generates:
// @keyframes fadeIn { }
// animation: fadeIn 1s ease;`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Dynamic Supports"
              code={`$property: 'grid';

@supports (display: #{$property}) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Expressions */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Expressions in Interpolation"
            description="Calculate inside #{}"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Math in Interpolation"
              code={`$base: 4;

// Calculate inside interpolation
.grid {
  grid-template-columns: repeat(#{$base * 3}, 1fr);
  // Generates: repeat(12, 1fr)
}

// String concatenation
$prefix: 'my';
$suffix: 'class';

.#{$prefix + '-' + $suffix} {
  color: blue;
}
// Generates: .my-class { }`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Function Calls"
              code={`@function get-size($multiplier) {
  @return $multiplier * 8px;
}

$size: 3;

.box {
  // Call function in interpolation
  width: #{get-size($size)};
  // Generates: width: 24px;
  
  // Data attribute
  &[data-size="#{$size}"] {
    opacity: 0.#{$size};
  }
}`}
              language="scss"
              colorTheme="cyan"
            />
          </div>

          <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Keep It Simple!</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              While you can use complex expressions in interpolation, keep them readable. Extract complex logic into variables or functions first!
            </AlertDescription>
          </Alert>
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
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Syntax</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use #{'{'} {'}'} to inject values
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Selectors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Dynamic class and ID names
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Properties</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Dynamic property names
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Everywhere</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                At-rules, strings, expressions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
