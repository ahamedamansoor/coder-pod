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
  Lock,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Shield,
  Eye
} from 'lucide-react';

interface SassUseNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassUseNew({ onOpenWebPlayground }: SassUseNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="Sass/SCSS · File Organization"
        title="@use Rule"
        description="Learn the modern way to load Sass modules with @use. Get namespaced access, load files only once, and create private members for better encapsulation."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @use?"
            description="Modern module system for Sass"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@use</strong> is the modern way to load Sass modules. It replaces @import and solves all its problems with <strong>namespacing</strong>, <strong>single loading</strong>, and <strong>private members</strong>. Files are loaded only once, and everything is accessed through namespaces!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">@import (Old)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Global, conflicting, duplicates
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">@import 'colors';</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">color: $primary;</div>
                <div className="text-red-600 dark:text-red-400 text-[10px] mt-1">Global scope</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">@use (New)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Namespaced, safe, efficient
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@use 'colors';</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">color: colors.$primary;</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Namespaced!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Modern & Safe!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              @use is the recommended way to load modules in modern Sass. It prevents naming conflicts and makes your code more maintainable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic @use Syntax"
            description="How to load and use modules"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use</code> to load a module, then access its members through the <strong>namespace</strong>.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_colors.scss"
              description="Module with color variables"
              code={`// Color variables
$primary: #3b82f6;
$secondary: #8b5cf6;
$success: #10b981;
$error: #ef4444;`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Using the colors module"
              code={`// Load the colors module
@use 'colors';

// Access variables with namespace
.button {
  background: colors.$primary;
  
  &:hover {
    background: colors.$secondary;
  }
}

.alert-success {
  color: colors.$success;
}

.alert-error {
  color: colors.$error;
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Namespace = Filename</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              The namespace is derived from the filename. <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">_colors.scss</code> becomes <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">colors</code> namespace!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Custom Namespace */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Custom Namespace"
            description="Use 'as' to change the namespace"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can customize the namespace with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">as</code> keyword.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Short namespace"
              description="Use shorter names for convenience"
              code={`// Use 'c' instead of 'colors'
@use 'colors' as c;

.button {
  background: c.$primary;
  color: c.$secondary;
}`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Remove namespace with *"
              description="Not recommended (global scope)"
              code={`// Load into global namespace
@use 'colors' as *;

// No namespace needed (like @import)
.button {
  background: $primary;  // Works, but not recommended
  color: $secondary;
}`}
              output={[
                '⚠️ Using as * removes namespacing benefits',
                '⚠️ Only use for gradual @import migration'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Avoid as *</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Using <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">as *</code> defeats the purpose of @use. Only use it for gradual migration from @import!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Using Mixins and Functions */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Using Mixins & Functions"
            description="Access mixins and functions through namespace"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Mixins and functions are also accessed through the namespace.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_mixins.scss"
              description="Module with mixins"
              code={`// Flex center mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Button mixin
@mixin button($bg) {
  background: $bg;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="_functions.scss"
              description="Module with functions"
              code={`// Calculate rem from px
@function px-to-rem($px) {
  @return $px / 16 * 1rem;
}

// Lighten color
@function tint($color, $amount) {
  @return mix(white, $color, $amount);
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Using mixins and functions"
              code={`@use 'colors';
@use 'mixins';
@use 'functions';

.container {
  @include mixins.flex-center;
  padding: functions.px-to-rem(32);
}

.button {
  @include mixins.button(colors.$primary);
  
  &:hover {
    background: functions.tint(colors.$primary, 20%);
  }
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Private Members */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lock className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Private Members"
            description="Use - or _ prefix for private members"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Members starting with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">-</code> or <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_</code> are <strong>private</strong> and can't be accessed from other files.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_colors.scss"
              description="Public and private members"
              code={`// Public - can be used externally
$primary: #3b82f6;
$secondary: #8b5cf6;

// Private - internal use only
$-internal-spacing: 1rem;
$-base-color: #1e293b;

// Private mixin
@mixin -private-helper {
  margin: $-internal-spacing;
}

// Public mixin using private members
@mixin card {
  @include -private-helper;
  background: $-base-color;
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Can't access private members"
              code={`@use 'colors';

.card {
  // ✓ Works - public mixin
  @include colors.card;
  color: colors.$primary;
}

.element {
  // ❌ Error - private variable
  // margin: colors.$-internal-spacing;
  
  // ❌ Error - private mixin
  // @include colors.-private-helper;
}`}
              output={[
                '✓ Public members: $primary, $secondary, @mixin card',
                '❌ Private members: Not accessible outside the module'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Shield className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Encapsulation!</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Private members let you hide implementation details. Use them for internal helpers that shouldn't be used externally!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Load Once */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Loads Only Once"
            description="No duplication in output"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Unlike @import, modules loaded with @use are <strong>only loaded once</strong>, even if multiple files use them.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="File Structure"
              description="Multiple files using the same module"
              code={`// _colors.scss
$primary: #3b82f6;

// _buttons.scss
@use 'colors';
.button { color: colors.$primary; }

// _cards.scss
@use 'colors';
.card { border: 1px solid colors.$primary; }

// main.scss
@use 'colors';
@use 'buttons';
@use 'cards';

// colors.scss is loaded ONLY ONCE ✓
// No duplication in output!`}
              output={[
                '✓ colors.scss loaded once',
                '✓ No duplicate CSS in output',
                '✓ Better performance'
              ]}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Configuring Modules"
            description="Override default values with 'with'"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can override module variables using <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">with</code> when loading them.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_theme.scss"
              description="Module with configurable defaults"
              code={`// Defaults with !default flag
$primary: #3b82f6 !default;
$secondary: #8b5cf6 !default;
$border-radius: 6px !default;

// Use the variables
.themed-button {
  background: $primary;
  border-radius: $border-radius;
}`}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Configure the module"
              code={`// Override defaults when loading
@use 'theme' with (
  $primary: #10b981,
  $secondary: #f59e0b,
  $border-radius: 12px
);

// theme module now uses your values
.button {
  background: theme.$primary;  // #10b981 (green)
  border-radius: theme.$border-radius;  // 12px
}`}
              language="scss"
              colorTheme="indigo"
            />
          </div>

          <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
            <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">!default Flag Required</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Variables must have the <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded">!default</code> flag to be configurable with <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded">with</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Benefits of @use"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Namespaced
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No naming conflicts between modules
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Loads Once
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No duplicate code in output CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Private Members
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hide implementation details with - prefix
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Configurable
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Override defaults with 'with' keyword
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Clear Origin
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Know exactly where each value comes from
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Better Performance
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Faster compilation than @import
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@use 'module'</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load modules with namespaced access
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">module.$variable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Access members through namespace
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">as alias</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Customize namespace for convenience
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">- prefix</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Make members private to the module
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: @forward!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've mastered @use! Now learn about <strong>@forward</strong> to create library APIs and re-export modules! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
