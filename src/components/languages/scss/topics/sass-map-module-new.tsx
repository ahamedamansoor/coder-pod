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
  Map, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Key,
  Search,
  Layers
} from 'lucide-react';

interface SassMapModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMapModuleNew({ onOpenWebPlayground }: SassMapModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Map}
        category="Sass/SCSS · Built-in Modules"
        title="sass:map Module"
        description="Master map operations: get, has-key, keys, values, merge, remove for managing key-value data structures."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Map className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:map Module"
            description="Work with key-value pairs"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:map</strong> module provides functions to work with maps (key-value pairs). Maps are like JavaScript objects or Python dictionaries. Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:map'</code> to access functions like get, merge, keys, values, and more!
          </p>

          <CodeSnippetWithOutput
            title="Map Basics"
            code={`@use 'sass:map';

// Define a map
$colors: (
  'primary': #007bff,
  'secondary': #6c757d,
  'success': #28a745,
  'danger': #dc3545
);

.button {
  // Access values with map.get()
  background: map.get($colors, 'primary');   // #007bff
  border-color: map.get($colors, 'success'); // #28a745
}`}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Map className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Maps are Immutable!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Map functions return new maps without modifying the original. Always assign the result to a variable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Get & Has-Key */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Get & Has-Key"
            description="map.get(), map.has-key()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="map.get()"
              description="Get value by key"
              code={`@use 'sass:map';

$theme: (
  'primary': #3490dc,
  'secondary': #ffed4e,
  'danger': #e3342f
);

.card {
  // Get value
  color: map.get($theme, 'primary');       // #3490dc
  background: map.get($theme, 'secondary'); // #ffed4e
  
  // Non-existent key returns null
  border: map.get($theme, 'warning');      // null
}`}
              output={[
                'color: #3490dc;',
                'background: #ffed4e;'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="map.has-key()"
              description="Check if key exists"
              code={`@use 'sass:map';

$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px
);

@if map.has-key($breakpoints, 'md') {
  .container {
    max-width: map.get($breakpoints, 'md'); // 768px
  }
}

// Check before accessing
$key: 'xl';
@if map.has-key($breakpoints, $key) {
  // Won't run - 'xl' doesn't exist
  width: map.get($breakpoints, $key);
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Keys & Values */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Keys & Values"
            description="map.keys(), map.values()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="map.keys()"
              description="Get list of all keys"
              code={`@use 'sass:map';

$colors: (
  'red': #ff0000,
  'green': #00ff00,
  'blue': #0000ff
);

// Get all keys
$color-names: map.keys($colors);  // ('red', 'green', 'blue')

// Loop through keys
@each $name in map.keys($colors) {
  .text-#{$name} {
    color: map.get($colors, $name);
  }
}
// Generates: .text-red, .text-green, .text-blue`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="map.values()"
              description="Get list of all values"
              code={`@use 'sass:map';

$spacing: (
  'sm': 0.5rem,
  'md': 1rem,
  'lg': 2rem
);

// Get all values
$sizes: map.values($spacing);  // (0.5rem, 1rem, 2rem)

// Check if value exists in map
@function has-value($map, $value) {
  @return list.index(map.values($map), $value) != null;
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Merge & Set */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Merge & Set"
            description="map.merge(), map.set()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="map.merge()"
              description="Combine two maps"
              code={`@use 'sass:map';

$defaults: (
  'color': black,
  'size': 16px,
  'weight': 400
);

$custom: (
  'color': blue,
  'size': 18px
);

// Merge maps (custom overrides defaults)
$final: map.merge($defaults, $custom);
// Result: ('color': blue, 'size': 18px, 'weight': 400)

.text {
  color: map.get($final, 'color');     // blue
  font-size: map.get($final, 'size');  // 18px
  font-weight: map.get($final, 'weight'); // 400
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="map.set()"
              description="Add or update a key"
              code={`@use 'sass:map';

$theme: (
  'primary': #007bff,
  'secondary': #6c757d
);

// Add new key
$theme: map.set($theme, 'success', #28a745);
// Now: ('primary': #007bff, 'secondary': #6c757d, 'success': #28a745)

// Update existing key
$theme: map.set($theme, 'primary', #0056b3);
// Now: ('primary': #0056b3, 'secondary': #6c757d, 'success': #28a745)`}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Reassign the Variable!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Remember: <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">$map: map.set($map, key, value)</code> is needed because maps are immutable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Remove */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Remove Keys"
            description="map.remove()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="map.remove()"
              code={`@use 'sass:map';

$colors: (
  'primary': #007bff,
  'secondary': #6c757d,
  'danger': #dc3545,
  'warning': #ffc107
);

// Remove single key
$colors: map.remove($colors, 'warning');
// Now: ('primary': #007bff, 'secondary': #6c757d, 'danger': #dc3545)

// Remove multiple keys
$colors: map.remove($colors, 'secondary', 'danger');
// Now: ('primary': #007bff)

.button {
  background: map.get($colors, 'primary'); // #007bff
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Conditional Remove"
              code={`@use 'sass:map';

$config: (
  'debug': true,
  'api-url': 'https://api.example.com',
  'cache': false,
  'version': '1.0.0'
);

// Remove debug-only keys for production
@if $production {
  $config: map.remove($config, 'debug', 'cache');
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Deep Operations */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Deep Operations"
            description="map.deep-merge(), map.deep-remove()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="map.deep-merge()"
              description="Merge nested maps"
              code={`@use 'sass:map';

$theme-defaults: (
  'colors': (
    'primary': #007bff,
    'text': #333
  ),
  'spacing': (
    'base': 1rem
  )
);

$theme-custom: (
  'colors': (
    'primary': #0056b3  // Override only primary
  ),
  'spacing': (
    'large': 2rem  // Add large spacing
  )
);

// Deep merge preserves nested structure
$theme: map.deep-merge($theme-defaults, $theme-custom);
// Result:
// (
//   'colors': ('primary': #0056b3, 'text': #333),
//   'spacing': ('base': 1rem, 'large': 2rem)
// )`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Nested Map Access"
              code={`@use 'sass:map';

$config: (
  'theme': (
    'dark': (
      'bg': #1a1a1a,
      'text': #ffffff
    ),
    'light': (
      'bg': #ffffff,
      'text': #000000
    )
  )
);

// Access nested values
$dark-theme: map.get($config, 'theme');
$dark-bg: map.get($dark-theme, 'dark');
$bg-color: map.get($dark-bg, 'bg');  // #1a1a1a

// Or chain get calls
$text: map.get(map.get(map.get($config, 'theme'), 'light'), 'text'); // #000000`}
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
          title="Map Module in Action"
          description="Theme system using maps"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="theme-demo">
  <div class="card card-primary">
    <h3>Primary Card</h3>
    <p>Using theme colors from Sass maps</p>
  </div>
  
  <div class="card card-secondary">
    <h3>Secondary Card</h3>
    <p>Managed with map functions</p>
  </div>
  
  <div class="card card-success">
    <h3>Success Card</h3>
    <p>Easy to maintain and scale</p>
  </div>
</div>`}
          css={`@use 'sass:map';

// Using map functions
// $colors: ('primary': #3490dc, 'secondary': #6c757d)
// map.get($colors, 'primary') => #3490dc
// map.has-key($colors, 'success') => true
// map.keys($colors) => 'primary', 'secondary', 'success'

$color-primary: #3490dc;      // map.get($colors, 'primary')
$color-secondary: #6c757d;    // map.get($colors, 'secondary')
$color-success: #38c172;      // map.get($colors, 'success')

$spacing-md: 1rem;            // map.get($spacing, 'md')
$spacing-lg: 1.5rem;          // map.get($spacing, 'lg')
$spacing-xl: 2rem;            // map.get($spacing, 'xl')

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

.theme-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
  width: 100%;
  max-width: 1200px;
}

.card {
  background: white;
  padding: $spacing-xl;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  border-left: 4px solid;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: $spacing-md;
  }
  
  p {
    color: #64748b;
    line-height: 1.6;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

// Card variants (using map.get($colors, 'key'))
.card-primary {
  border-left-color: $color-primary;
  
  h3 {
    color: $color-primary;
  }
}

.card-secondary {
  border-left-color: $color-secondary;
  
  h3 {
    color: $color-secondary;
  }
}

.card-success {
  border-left-color: $color-success;
  
  h3 {
    color: $color-success;
  }
}`}
          title="Theme with Maps"
          description="Using map.get() and @each for dynamic theming"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Access</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                map.get(), map.has-key()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Inspect</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                map.keys(), map.values()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Modify</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                map.merge(), map.set()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Immutable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always reassign: $map: map.set()
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
