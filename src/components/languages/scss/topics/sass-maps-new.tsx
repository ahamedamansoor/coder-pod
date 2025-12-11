'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Map, 
  CheckCircle2,
  Lightbulb,
  Info,
  Layers,
  Key,
  List
} from 'lucide-react';

interface SassMapsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMapsNew({ onOpenWebPlayground }: SassMapsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Map}
        category="Sass/SCSS · Advanced"
        title="Sass Maps"
        description="Store key-value pairs for organized, dynamic data structures in SCSS."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Map className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Sass Maps"
            description="Key-value data structures"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Maps</strong> in Sass are like objects or dictionaries - they store <strong>key-value pairs</strong>. Perfect for organizing related data!
          </p>

          <CodeSnippetWithOutput
            title="Map Syntax"
            code={`// Define a map
$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981,
  'danger': #ef4444
);

// Maps use parentheses ()
// Key: value pairs separated by commas`}
            output={[
              '// Map created, no CSS output'
            ]}
            language="scss"
            colorTheme="pink"
          />
        </CardContent>
      </Card>

      {/* Creating Maps */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Map className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Creating Maps"
            description="Define key-value pairs"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Theme Colors Map"
              code={`$theme-colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981,
  'danger': #ef4444,
  'warning': #f59e0b,
  'info': #06b6d4
);

// Access with map-get()
.button-primary {
  background: map-get($theme-colors, 'primary');
}`}
              output={[
                '.button-primary { background: #3b82f6; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Spacing Map"
              code={`$spacing: (
  'xs': 0.25rem,
  'sm': 0.5rem,
  'md': 1rem,
  'lg': 1.5rem,
  'xl': 2rem,
  '2xl': 3rem
);

.card {
  padding: map-get($spacing, 'lg');
  margin-bottom: map-get($spacing, 'md');
}`}
              output={[
                '.card { padding: 1.5rem; margin-bottom: 1rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Font Sizes Map"
              code={`$font-sizes: (
  'xs': 0.75rem,
  'sm': 0.875rem,
  'base': 1rem,
  'lg': 1.125rem,
  'xl': 1.25rem,
  '2xl': 1.5rem,
  '3xl': 1.875rem,
  '4xl': 2.25rem
);

h1 { font-size: map-get($font-sizes, '4xl'); }
h2 { font-size: map-get($font-sizes, '3xl'); }
p { font-size: map-get($font-sizes, 'base'); }`}
              output={[
                'h1 { font-size: 2.25rem; }',
                'h2 { font-size: 1.875rem; }',
                'p { font-size: 1rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Map Functions */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Map Functions"
            description="Work with map data"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="map-get() - Retrieve Values"
              code={`$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6
);

// Get a value by key
.button {
  background: map-get($colors, 'primary');
  border-color: map-get($colors, 'secondary');
}`}
              output={[
                '.button { background: #3b82f6; border-color: #8b5cf6; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="map-has-key() - Check if Key Exists"
              code={`$theme: (
  'primary': #3b82f6,
  'secondary': #8b5cf6
);

@if map-has-key($theme, 'primary') {
  .button {
    background: map-get($theme, 'primary');
  }
}

@if map-has-key($theme, 'tertiary') {
  // Won't execute - key doesn't exist
  .button-tertiary {
    background: map-get($theme, 'tertiary');
  }
}`}
              output={[
                '.button { background: #3b82f6; }',
                '// No .button-tertiary generated'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="map-keys() - Get All Keys"
              code={`$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981
);

// Returns list: primary, secondary, success
$color-names: map-keys($colors);

// Use in loops
@each $name in map-keys($colors) {
  .text-#{$name} {
    color: map-get($colors, $name);
  }
}`}
              output={[
                '.text-primary { color: #3b82f6; }',
                '.text-secondary { color: #8b5cf6; }',
                '.text-success { color: #10b981; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="map-values() - Get All Values"
              code={`$spacing: (
  'sm': 0.5rem,
  'md': 1rem,
  'lg': 1.5rem
);

// Returns list: 0.5rem, 1rem, 1.5rem
$spacing-values: map-values($spacing);`}
              output={[
                '// No CSS output - just retrieves values'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="map-merge() - Combine Maps"
              code={`$base-colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6
);

$status-colors: (
  'success': #10b981,
  'danger': #ef4444
);

// Merge two maps
$all-colors: map-merge($base-colors, $status-colors);

// Result: primary, secondary, success, danger
@each $name, $color in $all-colors {
  .bg-#{$name} {
    background: $color;
  }
}`}
              output={[
                '.bg-primary { background: #3b82f6; }',
                '.bg-secondary { background: #8b5cf6; }',
                '.bg-success { background: #10b981; }',
                '.bg-danger { background: #ef4444; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="map-remove() - Remove Keys"
              code={`$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'old-color': #999999
);

// Remove a key
$new-colors: map-remove($colors, 'old-color');

// Now only has primary and secondary
@each $name, $color in $new-colors {
  .color-#{$name} {
    color: $color;
  }
}`}
              output={[
                '.color-primary { color: #3b82f6; }',
                '.color-secondary { color: #8b5cf6; }',
                '// old-color removed'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Nested Maps */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Nested Maps"
            description="Maps within maps"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Nested Theme Map"
              code={`// Map with nested maps
$themes: (
  'light': (
    'background': #ffffff,
    'text': #000000,
    'primary': #3b82f6
  ),
  'dark': (
    'background': #1a1a1a,
    'text': #ffffff,
    'primary': #60a5fa
  )
);

// Access nested values
.light-theme {
  background: map-get(map-get($themes, 'light'), 'background');
  color: map-get(map-get($themes, 'light'), 'text');
}

.dark-theme {
  background: map-get(map-get($themes, 'dark'), 'background');
  color: map-get(map-get($themes, 'dark'), 'text');
}`}
              output={[
                '.light-theme { background: #ffffff; color: #000000; }',
                '.dark-theme { background: #1a1a1a; color: #ffffff; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Breakpoints with Nested Maps"
              code={`$breakpoints: (
  'small': (
    'min': 640px,
    'container': 600px
  ),
  'medium': (
    'min': 768px,
    'container': 720px
  ),
  'large': (
    'min': 1024px,
    'container': 960px
  )
);

// Use in media queries
@media (min-width: map-get(map-get($breakpoints, 'medium'), 'min')) {
  .container {
    max-width: map-get(map-get($breakpoints, 'medium'), 'container');
  }
}`}
              output={[
                '@media (min-width: 768px) {',
                '  .container { max-width: 720px; }',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Deep Access</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              For nested maps, use multiple <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">map-get()</code> calls or create a custom function for easier access!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Looping Through Maps */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<List className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Looping Through Maps"
            description="Generate styles with @each"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Generate Color Classes"
              code={`$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981,
  'danger': #ef4444
);

// Loop through map
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
}`}
              output={[
                '.text-primary { color: #3b82f6; }',
                '.bg-primary { background: #3b82f6; }',
                '.border-primary { border-color: #3b82f6; }',
                '.text-secondary { color: #8b5cf6; }',
                '// ... and so on for all colors'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Generate Button Variants"
              code={`$button-styles: (
  'primary': (
    'bg': #3b82f6,
    'text': #ffffff,
    'hover': #2563eb
  ),
  'secondary': (
    'bg': #8b5cf6,
    'text': #ffffff,
    'hover': #7c3aed
  ),
  'outline': (
    'bg': transparent,
    'text': #3b82f6,
    'hover': #eff6ff
  )
);

@each $variant, $styles in $button-styles {
  .btn-#{$variant} {
    background: map-get($styles, 'bg');
    color: map-get($styles, 'text');
    
    &:hover {
      background: map-get($styles, 'hover');
    }
  }
}`}
              output={[
                '.btn-primary { background: #3b82f6; color: #ffffff; }',
                '.btn-primary:hover { background: #2563eb; }',
                '.btn-secondary { background: #8b5cf6; color: #ffffff; }',
                '.btn-secondary:hover { background: #7c3aed; }',
                '.btn-outline { background: transparent; color: #3b82f6; }',
                '.btn-outline:hover { background: #eff6ff; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Real-World Example */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Real-World Example"
            description="Complete design system"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Design System with Maps"
            code={`// Design tokens organized in maps
$design-system: (
  'colors': (
    'primary': #3b82f6,
    'secondary': #8b5cf6,
    'success': #10b981,
    'danger': #ef4444
  ),
  'spacing': (
    'xs': 0.25rem,
    'sm': 0.5rem,
    'md': 1rem,
    'lg': 1.5rem,
    'xl': 2rem
  ),
  'font-sizes': (
    'sm': 0.875rem,
    'base': 1rem,
    'lg': 1.125rem,
    'xl': 1.25rem
  ),
  'breakpoints': (
    'sm': 640px,
    'md': 768px,
    'lg': 1024px
  )
);

// Helper function for nested access
@function get($map, $keys...) {
  @each $key in $keys {
    $map: map-get($map, $key);
  }
  @return $map;
}

// Usage
.button {
  background: get($design-system, 'colors', 'primary');
  padding: get($design-system, 'spacing', 'md');
  font-size: get($design-system, 'font-sizes', 'base');
}

// Generate utilities
@each $name, $color in map-get($design-system, 'colors') {
  .text-#{$name} {
    color: $color;
  }
}`}
            output={[
              '.button { background: #3b82f6; padding: 1rem; font-size: 1rem; }',
              '.text-primary { color: #3b82f6; }',
              '.text-secondary { color: #8b5cf6; }',
              '// ... utilities for all colors'
            ]}
            language="scss"
            colorTheme="indigo"
          />
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Syntax</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">('key': value)</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Parentheses with key-value pairs</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Access</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">map-get($map, key)</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Retrieve values by key</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Loop</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">@each $k, $v in $map</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Iterate through key-value pairs</p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                has-key, keys, values, merge, remove
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
