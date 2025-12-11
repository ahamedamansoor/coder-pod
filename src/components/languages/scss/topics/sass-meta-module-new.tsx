'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Braces, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Eye,
  Wand2,
  Zap
} from 'lucide-react';

interface SassMetaModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMetaModuleNew({ onOpenWebPlayground }: SassMetaModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Braces}
        category="Sass/SCSS · Built-in Modules"
        title="sass:meta Module"
        description="Introspection and metaprogramming: type-of, inspect, keywords, call, get-function for advanced dynamic Sass."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Braces className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:meta Module"
            description="Inspect and manipulate Sass at runtime"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:meta</strong> module provides metaprogramming capabilities to inspect types, call functions dynamically, and work with Sass values at runtime. Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:meta'</code> for advanced introspection and dynamic behavior!
          </p>

          <CodeSnippetWithOutput
            title="Module Basics"
            code={`@use 'sass:meta';

// Check type of a value
$value: 42px;
$type: meta.type-of($value);  // 'number'

// Inspect any value
$list: (1, 2, 3);
$inspected: meta.inspect($list);  // '(1, 2, 3)'`}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Braces className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Advanced Module!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              This module enables powerful metaprogramming patterns for libraries and frameworks.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Type-Of */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Type Checking"
            description="meta.type-of()"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Basic Types</h5>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-1">number</code>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-1">string</code>
                <code className="text-xs text-gray-600 dark:text-gray-400 block">color</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Collections</h5>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-1">list</code>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-1">map</code>
                <code className="text-xs text-gray-600 dark:text-gray-400 block">arglist</code>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Special</h5>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-1">bool</code>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-1">null</code>
                <code className="text-xs text-gray-600 dark:text-gray-400 block">function</code>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="meta.type-of() Examples"
              code={`@use 'sass:meta';

// Numbers
meta.type-of(42);        // 'number'
meta.type-of(10px);      // 'number'
meta.type-of(3.14);      // 'number'

// Strings
meta.type-of('hello');   // 'string'
meta.type-of(unquote(world)); // 'string'

// Colors
meta.type-of(#ff0000);   // 'color'
meta.type-of(blue);      // 'color'

// Collections
meta.type-of((1, 2, 3)); // 'list'
meta.type-of(('a': 1));  // 'map'

// Special
meta.type-of(true);      // 'bool'
meta.type-of(null);      // 'null'`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Type-Based Logic"
              code={`@use 'sass:meta';

@function smart-scale($value, $factor) {
  $type: meta.type-of($value);
  
  @if $type == 'number' {
    @return $value * $factor;
  } @else if $type == 'list' {
    $result: ();
    @each $item in $value {
      $result: append($result, smart-scale($item, $factor));
    }
    @return $result;
  } @else {
    @warn "Cannot scale type: #{$type}";
    @return $value;
  }
}

// Usage
.element {
  padding: smart-scale(10px, 1.5);        // 15px
  margin: smart-scale((5px, 10px), 2);    // (10px, 20px)
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Inspect */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Inspect Values"
            description="meta.inspect()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="meta.inspect()"
              description="Convert any value to string representation"
              code={`@use 'sass:meta';

// Inspect different types
$num: meta.inspect(42px);           // '42px'
$color: meta.inspect(#ff0000);      // '#ff0000'
$list: meta.inspect((1, 2, 3));     // '(1, 2, 3)'
$map: meta.inspect(('a': 1, 'b': 2)); // '("a": 1, "b": 2)'
$bool: meta.inspect(true);          // 'true'
$null: meta.inspect(null);          // 'null'

// Useful for debugging
@debug meta.inspect($my-complex-variable);`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Debug Helper"
              code={`@use 'sass:meta';

@mixin debug-var($name, $value) {
  /* Debug: #{$name} */
  /* Type: #{meta.type-of($value)} */
  /* Value: #{meta.inspect($value)} */
}

$config: (
  'theme': 'dark',
  'size': 16px,
  'colors': (#fff, #000)
);

.component {
  @include debug-var('config', $config);
}

// Output in CSS:
// .component {
//   /* Debug: config */
//   /* Type: map */
//   /* Value: ("theme": "dark", "size": 16px, "colors": #fff, #000) */
// }`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Keywords & Call */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wand2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Dynamic Calls"
            description="meta.call(), meta.get-function()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="meta.get-function()"
              description="Get function reference by name"
              code={`@use 'sass:meta';
@use 'sass:color';

// Get function reference
$lighten-fn: meta.get-function('lighten', $module: 'color');
$darken-fn: meta.get-function('darken', $module: 'color');

// Store in map
$color-functions: (
  'lighten': $lighten-fn,
  'darken': $darken-fn
);`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="meta.call()"
              description="Call function dynamically"
              code={`@use 'sass:meta';
@use 'sass:color';

// Define function
@function double($value) {
  @return $value * 2;
}

// Get function reference
$fn: meta.get-function('double');

// Call it dynamically
$result: meta.call($fn, 10); // 20

// Call built-in functions
$lighten: meta.get-function('lighten', $module: 'color');
$lighter: meta.call($lighten, blue, 20%);

.element {
  width: $result;         // 20
  color: $lighter;        // lighter blue
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Dynamic Function Dispatcher"
              code={`@use 'sass:meta';
@use 'sass:map';

// Function registry
@function add($a, $b) { @return $a + $b; }
@function multiply($a, $b) { @return $a * $b; }
@function subtract($a, $b) { @return $a - $b; }

// Build function map
$operations: (
  'add': meta.get-function('add'),
  'multiply': meta.get-function('multiply'),
  'subtract': meta.get-function('subtract')
);

// Dynamic caller
@function calculate($operation, $a, $b) {
  @if map.has-key($operations, $operation) {
    $fn: map.get($operations, $operation);
    @return meta.call($fn, $a, $b);
  }
  @error "Unknown operation: #{$operation}";
}

// Usage
.result {
  width: calculate('add', 10px, 5px);        // 15px
  height: calculate('multiply', 20px, 2);    // 40px
  margin: calculate('subtract', 50px, 10px); // 40px
}`}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Powerful Pattern!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">meta.call()</code> to build plugin systems and dynamic utilities!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Keywords */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Keyword Arguments"
            description="meta.keywords()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="meta.keywords()"
              description="Get keyword arguments as map"
              code={`@use 'sass:meta';

@function create-config($args...) {
  // Extract keyword arguments
  $keywords: meta.keywords($args);
  
  // $keywords is now a map of name: value pairs
  @return $keywords;
}

// Call with keyword arguments
$config: create-config(
  $color: blue,
  $size: 16px,
  $weight: bold
);

// $config = ('color': blue, 'size': 16px, 'weight': bold)`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Flexible Mixin with Keywords"
              code={`@use 'sass:meta';
@use 'sass:map';

@mixin button($args...) {
  // Get keyword arguments
  $options: meta.keywords($args);
  
  // Set defaults
  $color: map.get($options, 'color') or blue;
  $size: map.get($options, 'size') or 16px;
  $padding: map.get($options, 'padding') or 0.5rem 1rem;
  
  background: $color;
  font-size: $size;
  padding: $padding;
  border: none;
  border-radius: 4px;
}

// Usage with any combination
.btn-1 {
  @include button($color: red);
}

.btn-2 {
  @include button($size: 20px, $color: green);
}

.btn-3 {
  @include button($padding: 1rem 2rem);
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Module Functions */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Module Introspection"
            description="meta.module-functions(), meta.module-variables()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="meta.module-functions()"
              description="List all functions from a module"
              code={`@use 'sass:meta';
@use 'sass:color';

// Get all functions from color module
$color-fns: meta.module-functions('color');

// Returns a map like:
// (
//   'lighten': <function>,
//   'darken': <function>,
//   'saturate': <function>,
//   ...
// )

// Use to build dynamic color utilities
@each $name, $fn in $color-fns {
  .color-#{$name} {
    // Use function dynamically
  }
}`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="meta.module-variables()"
              description="List all variables from a module"
              code={`@use 'sass:meta';

// In _config.scss:
// $primary-color: blue;
// $secondary-color: green;
// $font-size: 16px;

@use 'config';

// Get all variables
$vars: meta.module-variables('config');

// Returns:
// (
//   'primary-color': blue,
//   'secondary-color': green,
//   'font-size': 16px
// )

// Generate utility classes from config
@each $name, $value in $vars {
  .#{$name} {
    // Generate styles based on variable
  }
}`}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Practical Example */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Practical Example"
            description="Type-safe configuration system"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Validated Config System"
            code={`@use 'sass:meta';
@use 'sass:map';

// Type validator
@function validate-type($value, $expected-type, $name) {
  $actual-type: meta.type-of($value);
  
  @if $actual-type != $expected-type {
    @error "#{$name} must be #{$expected-type}, got #{$actual-type}";
  }
  
  @return $value;
}

// Config schema
$schema: (
  'primary-color': 'color',
  'font-size': 'number',
  'border-radius': 'number',
  'font-family': 'string'
);

// Validate config
@function validate-config($config) {
  @each $key, $expected-type in $schema {
    @if map.has-key($config, $key) {
      $value: map.get($config, $key);
      $validated: validate-type($value, $expected-type, $key);
    }
  }
  @return $config;
}

// Usage
$theme: (
  'primary-color': #007bff,
  'font-size': 16px,
  'border-radius': 4px,
  'font-family': 'Arial'
);

$validated-theme: validate-config($theme);

.component {
  color: map.get($validated-theme, 'primary-color');
  font-size: map.get($validated-theme, 'font-size');
}`}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Meta Module in Action"
          description="Type-aware responsive utilities"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="alert alert-info">
    <strong>Info:</strong> This is an information message
  </div>
  
  <div class="alert alert-success">
    <strong>Success:</strong> Operation completed successfully
  </div>
  
  <div class="alert alert-warning">
    <strong>Warning:</strong> Please review your settings
  </div>
  
  <div class="alert alert-error">
    <strong>Error:</strong> Something went wrong
  </div>
</div>`}
          css={`@use 'sass:meta';

// Using meta.inspect() to debug values
// $debug: meta.inspect((info: #3b82f6, success: #10b981));
// Result: "(info: #3b82f6, success: #10b981)"

// Using meta.type-of() for type checking
$primary-color: #3b82f6;
// meta.type-of($primary-color) returns 'color'

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
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 700px;
  
  // Using meta functions for validation
  // @debug meta.type-of($primary-color);  // Outputs: 'color'
}

.alert {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
}

// Alert variants (validated with meta.type-of())
.alert-info {
  background: #dbeafe;
  border-left-color: #3b82f6;
  color: #1e40af;
  
  @media (prefers-color-scheme: dark) {
    background: #1e3a8a;
    color: #bfdbfe;
  }
}

.alert-success {
  background: #d1fae5;
  border-left-color: #10b981;
  color: #047857;
  
  @media (prefers-color-scheme: dark) {
    background: #064e3b;
    color: #a7f3d0;
  }
}

.alert-warning {
  background: #fef3c7;
  border-left-color: #f59e0b;
  color: #92400e;
  
  @media (prefers-color-scheme: dark) {
    background: #78350f;
    color: #fef08a;
  }
}

.alert-error {
  background: #fee2e2;
  border-left-color: #ef4444;
  color: #991b1b;
  
  @media (prefers-color-scheme: dark) {
    background: #7f1d1d;
    color: #fecaca;
  }
}`}
          title="Type-Safe Utilities"
          description="Built with meta module type checking"
          colorTheme="purple"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Inspect</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                type-of(), inspect() for introspection
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Dynamic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                call(), get-function() for runtime calls
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Keywords</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                keywords() for flexible arguments
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Advanced</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Build libraries and frameworks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
