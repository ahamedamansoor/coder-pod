'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Package, 
  CheckCircle2,
  Lightbulb,
  Info,
  AlertTriangle,
  FileCode,
  ArrowRight,
  Share2
} from 'lucide-react';

interface SassModulesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassModulesNew({ onOpenWebPlayground }: SassModulesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="Sass/SCSS · Advanced"
        title="Sass Modules (@use & @forward)"
        description="The modern way to organize SCSS - modular, namespaced, and maintainable."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Sass Modules"
            description="@use and @forward - Modern module system"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Sass modules</strong> with <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@use</code> and <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@forward</code> replace the old <code className="bg-gray-100 dark:bg-gray-900/30 px-2 py-1 rounded">@import</code>. They provide <strong>namespacing</strong>, better <strong>encapsulation</strong>, and improved <strong>performance</strong>!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Old Way (@import)</h4>
              <pre className="text-xs bg-red-50 dark:bg-red-900/30 p-2 rounded overflow-x-auto"><code>{`@import 'variables';
@import 'mixins';

// Global namespace
// Name conflicts possible`}</code></pre>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ New Way (@use)</h4>
              <pre className="text-xs bg-green-50 dark:bg-green-900/30 p-2 rounded overflow-x-auto"><code>{`@use 'variables';
@use 'mixins';

// Namespaced
// No conflicts!`}</code></pre>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Modules?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Modules prevent naming conflicts, improve build performance, and make dependencies explicit. <strong>@import is deprecated!</strong>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @use Basics */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="@use - Load Modules"
            description="Import with namespacing"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @use"
              code={`// _variables.scss
$primary-color: #3b82f6;
$spacing: 1rem;

// main.scss
@use 'variables';

.button {
  // Access with namespace
  background: variables.$primary-color;
  padding: variables.$spacing;
}`}
              output={[
                '.button { background: #3b82f6; padding: 1rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="@use with Alias"
              code={`// _variables.scss
$primary-color: #3b82f6;

// main.scss
@use 'variables' as vars;

.button {
  // Shorter namespace
  background: vars.$primary-color;
}`}
              output={[
                '.button { background: #3b82f6; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="@use with * (No Namespace)"
              code={`// _variables.scss
$primary-color: #3b82f6;

// main.scss
@use 'variables' as *;

.button {
  // Direct access (no namespace)
  background: $primary-color;
}`}
              output={[
                '.button { background: #3b82f6; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Use Namespaces!</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Avoid <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">as *</code> in most cases. Namespaces prevent conflicts and make code clearer!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Using Mixins and Functions */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Using Mixins & Functions"
            description="Access with namespace"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Mixins with @use"
              code={`// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-style($bg) {
  background: $bg;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

// main.scss
@use 'mixins';

.container {
  @include mixins.flex-center;
}

.button {
  @include mixins.button-style(#3b82f6);
}`}
              output={[
                '.container { display: flex; justify-content: center; align-items: center; }',
                '.button { background: #3b82f6; padding: 0.5rem 1rem; border-radius: 4px; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Functions with @use"
              code={`// _functions.scss
@function rem($pixels) {
  @return ($pixels / 16px) * 1rem;
}

@function darken-color($color, $amount) {
  @return darken($color, $amount);
}

// main.scss
@use 'functions';

.text {
  font-size: functions.rem(24px);
}

.button {
  background: #3b82f6;
  
  &:hover {
    background: functions.darken-color(#3b82f6, 10%);
  }
}`}
              output={[
                '.text { font-size: 1.5rem; }',
                '.button { background: #3b82f6; }',
                '.button:hover { background: #2563eb; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* @forward */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Share2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="@forward - Re-export Modules"
            description="Create public APIs"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">@forward</code> makes a module's members available when your file is loaded. Great for creating index files!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @forward"
              code={`// _colors.scss
$primary: #3b82f6;
$secondary: #8b5cf6;

// _spacing.scss
$small: 0.5rem;
$medium: 1rem;

// _index.scss (public API)
@forward 'colors';
@forward 'spacing';

// main.scss
@use 'index';

.button {
  background: index.$primary;
  padding: index.$medium;
}`}
              output={[
                '.button { background: #3b82f6; padding: 1rem; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="@forward with Prefix"
              code={`// _colors.scss
$primary: #3b82f6;
$secondary: #8b5cf6;

// _index.scss
@forward 'colors' as color-*;

// main.scss
@use 'index';

.button {
  // Prefixed with 'color-'
  background: index.$color-primary;
}`}
              output={[
                '.button { background: #3b82f6; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="@forward with show/hide"
              code={`// _variables.scss
$primary: #3b82f6;
$secondary: #8b5cf6;
$internal-value: 123;  // Private

// _index.scss
// Only forward specific members
@forward 'variables' show $primary, $secondary;

// OR hide specific members
@forward 'variables' hide $internal-value;

// main.scss
@use 'index';

.button {
  background: index.$primary;      // ✅ Available
  // padding: index.$internal-value;  // ❌ Not available
}`}
              output={[
                '.button { background: #3b82f6; }',
                '// $internal-value is hidden'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Configuring Modules */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Configuring Modules"
            description="Override module variables"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Module with !default"
              code={`// _library.scss
$border-radius: 4px !default;
$padding: 1rem !default;

.component {
  border-radius: $border-radius;
  padding: $padding;
}

// main.scss
// Configure module before using
@use 'library' with (
  $border-radius: 8px,
  $padding: 1.5rem
);

// Now library uses custom values
.custom {
  border-radius: library.$border-radius;
}`}
              output={[
                '.component { border-radius: 8px; padding: 1.5rem; }',
                '.custom { border-radius: 8px; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Configurable Theme"
              code={`// _theme.scss
$primary-color: #3b82f6 !default;
$secondary-color: #8b5cf6 !default;

@mixin apply-theme {
  .button-primary {
    background: $primary-color;
  }
  
  .button-secondary {
    background: $secondary-color;
  }
}

// main.scss
@use 'theme' with (
  $primary-color: #ef4444,
  $secondary-color: #f59e0b
);

@include theme.apply-theme;`}
              output={[
                '.button-primary { background: #ef4444; }',
                '.button-secondary { background: #f59e0b; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">!default Flag</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">!default</code> on variables you want to be configurable. Like function default parameters!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Built-in Modules */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Built-in Modules"
            description="sass:math, sass:color, sass:string, etc."
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Sass provides built-in modules with <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:</code> prefix
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="sass:math"
              code={`@use 'sass:math';

.container {
  width: math.div(100%, 3);
  padding: math.round(15.7px);
  
  // Math constants
  border-radius: math.$pi * 2px;
}`}
              output={[
                '.container { width: 33.3333%; padding: 16px; border-radius: 6.2832px; }'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="sass:color"
              code={`@use 'sass:color';

$base: #3b82f6;

.button {
  background: $base;
  
  &:hover {
    background: color.adjust($base, $lightness: -10%);
  }
  
  &:active {
    background: color.scale($base, $lightness: -20%);
  }
}`}
              output={[
                '.button { background: #3b82f6; }',
                '.button:hover { background: #2563eb; }',
                '.button:active { background: #1e40af; }'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="sass:string"
              code={`@use 'sass:string';

$name: 'button';

.#{$name} {
  // String functions
  content: string.to-upper-case($name);
  data-length: string.length($name);
}`}
              output={[
                '.button { content: "BUTTON"; data-length: 6; }'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="sass:list & sass:map"
              code={`@use 'sass:list';
@use 'sass:map';

$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6
);

.info {
  // Map functions
  has-primary: map.has-key($colors, 'primary');
  
  // List functions
  $keys: map.keys($colors);
  first-key: list.nth($keys, 1);
}`}
              output={[
                '.info { has-primary: true; first-key: "primary"; }'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-lg">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">Available Built-in Modules</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:math</code> - Mathematical functions and constants</li>
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:color</code> - Color manipulation functions</li>
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:string</code> - String operations</li>
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:list</code> - List utilities</li>
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:map</code> - Map utilities</li>
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:selector</code> - Selector manipulation</li>
              <li><code className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">sass:meta</code> - Sass introspection</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Module Structure Example */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Real-World Module Structure"
            description="Organizing a design system"
            size="lg"
          />

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre>{`scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _index.scss       ← @forward all
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _index.scss
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _index.scss
└── main.scss`}</pre>
          </div>

          <CodeSnippetWithOutput
            title="abstracts/_index.scss"
            code={`// Re-export all abstracts
@forward 'variables';
@forward 'functions';
@forward 'mixins';`}
            output={[
              '// All abstracts available via @use "abstracts"'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="main.scss"
            code={`// Configure abstracts
@use 'abstracts' with (
  $primary-color: #3b82f6,
  $spacing-unit: 8px
);

// Load base styles
@use 'base';

// Load components (they use abstracts internally)
@use 'components';`}
            output={[
              '// All styles compiled with custom configuration'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* @import vs @use Comparison */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-teal-50/60 dark:from-cyan-950/10 dark:to-teal-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="@import vs @use"
            description="Why migrate to modules"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ @import Problems</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Global namespace</li>
                <li>• Name conflicts</li>
                <li>• Imports run every time</li>
                <li>• Can't configure</li>
                <li>• Deprecated!</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ @use Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Namespaced</li>
                <li>• No conflicts</li>
                <li>• Imports once</li>
                <li>• Configurable</li>
                <li>• Modern & maintained</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Migrate from @import</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">@import</code> is deprecated and will be removed. Migrate to <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">@use</code> and <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">@forward</code> now!
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
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@use</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load modules with namespacing. Prevents conflicts!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">@forward</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Re-export modules. Create public APIs!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Configuration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">with ()</code> to configure modules
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Built-ins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">sass:math</code>, <code className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">sass:color</code>, etc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
