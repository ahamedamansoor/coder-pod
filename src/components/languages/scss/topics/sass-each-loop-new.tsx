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
  List, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Package,
  Hash,
  Palette
} from 'lucide-react';

interface SassEachLoopNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassEachLoopNew({ onOpenWebPlayground }: SassEachLoopNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={List}
        category="Sass/SCSS · Control & Logic"
        title="@each Loop"
        description="Learn how to iterate over lists and maps with @each. Generate variant classes for colors, themes, sizes, and more!"
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<List className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @each?"
            description="Loop through lists and maps"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@each</strong> lets you iterate over <strong>lists</strong> (like arrays) and <strong>maps</strong> (like objects) to generate CSS. Perfect for creating color variants, size utilities, theme classes, and any pattern based on a collection of values!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <List className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">@for Loop</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Iterates with numbers
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">@for $i from 1 to 5 {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">// 1, 2, 3, 4</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">@each Loop</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Iterates over collections
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@each $color in $colors {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">// red, blue, green</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <List className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Value-Based Iteration!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Unlike @for which uses numbers, @each iterates over actual values from lists and maps!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Lists */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<List className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Looping Over Lists"
            description="Iterate through list values"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @each with List"
              code={`// Define a list
$colors: red, blue, green, yellow;

// Loop through the list
@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}`}
              output={[
                '.text-red { color: red; }',
                '.text-blue { color: blue; }',
                '.text-green { color: green; }',
                '.text-yellow { color: yellow; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Size Variants"
              code={`$sizes: small, medium, large, xlarge;

@each $size in $sizes {
  .btn-#{$size} {
    @if $size == small {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    } @else if $size == medium {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    } @else if $size == large {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    } @else {
      padding: 1.25rem 2.5rem;
      font-size: 1.25rem;
    }
  }
}`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Icon Classes"
              code={`$icons: home, search, user, settings, mail;

@each $icon in $icons {
  .icon-#{$icon} {
    background-image: url('/icons/#{$icon}.svg');
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 24px;
    height: 24px;
  }
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Maps */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Looping Over Maps"
            description="Iterate through key-value pairs"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @each with Map"
              code={`// Define a map
$theme-colors: (
  'primary': #3b82f6,
  'success': #10b981,
  'warning': #f59e0b,
  'danger': #ef4444
);

// Loop through the map
@each $name, $color in $theme-colors {
  .bg-#{$name} {
    background-color: $color;
  }
  
  .text-#{$name} {
    color: $color;
  }
}`}
              output={[
                '.bg-primary { background-color: #3b82f6; }',
                '.text-primary { color: #3b82f6; }',
                '.bg-success { background-color: #10b981; }',
                '...'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Social Media Colors"
              code={`$social-colors: (
  'facebook': #1877f2,
  'twitter': #1da1f2,
  'instagram': #e4405f,
  'linkedin': #0077b5,
  'youtube': #ff0000
);

@each $network, $color in $social-colors {
  .btn-#{$network} {
    background: $color;
    color: white;
    
    &:hover {
      background: darken($color, 10%);
    }
  }
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Two Variables!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              When looping over maps, use two variables: <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">$key, $value</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="@each Loop in Action"
          description="Theme color system"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-info">Info</button>
</div>`}
          css={`// Color map
$colors: (
  'primary': #3b82f6,
  'success': #10b981,
  'warning': #f59e0b,
  'danger': #ef4444,
  'info': #06b6d4
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
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
}

// Base button styles
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}

// Generate color variants with @each
@each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($color, 0.4);
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
  
  // Also generate outline variants
  .btn-outline-#{$name} {
    background: transparent;
    border: 2px solid $color;
    color: $color;
    
    &:hover {
      background: $color;
      color: white;
    }
  }
  
  // Generate badge variants
  .badge-#{$name} {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    background: rgba($color, 0.1);
    color: $color;
  }
}`}
          title="Color System with @each"
          description="Generate all color variants from a map"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Advanced Patterns */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Advanced Patterns"
            description="Nested maps and complex iterations"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Nested Maps"
              code={`$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px
);

@each $name, $width in $breakpoints {
  @media (min-width: $width) {
    .container-#{$name} {
      max-width: $width;
    }
  }
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Multi-Level Map"
              code={`$button-config: (
  'primary': (
    'bg': #3b82f6,
    'text': white,
    'hover': #2563eb
  ),
  'secondary': (
    'bg': #64748b,
    'text': white,
    'hover': #475569
  )
);

@each $variant, $props in $button-config {
  .btn-#{$variant} {
    background: map-get($props, 'bg');
    color: map-get($props, 'text');
    
    &:hover {
      background: map-get($props, 'hover');
    }
  }
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Multiple Lists"
              code={`$sizes: 'sm', 'md', 'lg';
$values: 0.875rem, 1rem, 1.125rem;

// Loop with index
@for $i from 1 through length($sizes) {
  $size: nth($sizes, $i);
  $value: nth($values, $i);
  
  .text-#{$size} {
    font-size: $value;
  }
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Real-World Examples"
            description="Production-ready patterns"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Utility Class Generator"
              code={`$spacing-map: (
  '0': 0,
  '1': 0.25rem,
  '2': 0.5rem,
  '3': 0.75rem,
  '4': 1rem,
  '6': 1.5rem,
  '8': 2rem
);

$directions: (
  't': 'top',
  'r': 'right',
  'b': 'bottom',
  'l': 'left'
);

// Generate margin utilities
@each $size, $value in $spacing-map {
  .m-#{$size} {
    margin: $value;
  }
  
  .p-#{$size} {
    padding: $value;
  }
  
  // Directional utilities
  @each $dir-key, $dir-val in $directions {
    .m#{$dir-key}-#{$size} {
      margin-#{$dir-val}: $value;
    }
    
    .p#{$dir-key}-#{$size} {
      padding-#{$dir-val}: $value;
    }
  }
}`}
              output={[
                '.m-0 { margin: 0; }',
                '.mt-1 { margin-top: 0.25rem; }',
                '.pr-2 { padding-right: 0.5rem; }',
                '...'
              ]}
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Lists</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @each $item in $list
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @each $key, $value in $map
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Variants</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for colors and themes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Utilities</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate utility class systems
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
