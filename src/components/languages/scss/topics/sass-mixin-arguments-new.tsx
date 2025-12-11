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
  Settings, 
  Sliders,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Wand2,
  ArrowRight
} from 'lucide-react';

interface SassMixinArgumentsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMixinArgumentsNew({ onOpenWebPlayground }: SassMixinArgumentsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Settings}
        category="Sass/SCSS · Reusability"
        title="Mixin Arguments"
        description="Learn how to make mixins flexible with arguments. Use positional arguments, named arguments, default values, and variable arguments for powerful, reusable code."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Why Use Arguments?"
            description="Make mixins flexible and customizable"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Arguments</strong> make mixins flexible by letting you pass values into them. Instead of creating separate mixins for every variation, you can create <strong>one mixin that adapts</strong> based on the arguments you provide!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Without Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Need separate mixins for each case
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">@mixin small-box {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">@mixin medium-box {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300">@mixin large-box {'{ }'}</div>
                <div className="text-red-600 dark:text-red-400 text-[10px] mt-1">3 similar mixins!</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                One flexible mixin
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@mixin box($size) {'{ }'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">@include box(100px);</div>
                <div className="text-gray-700 dark:text-gray-300">@include box(200px);</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ One mixin!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Arguments */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ArrowRight className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Positional Arguments"
            description="Pass values in order"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Define arguments in parentheses after the mixin name. Pass values in the same order when including the mixin.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Single Argument"
              description="One parameter for flexibility"
              code={`// Mixin with one argument
@mixin box($size) {
  width: $size;
  height: $size;
}

// Use with different values
.small {
  @include box(100px);
}

.large {
  @include box(200px);
}`}
              output={[
                '✓ .small gets 100px × 100px',
                '✓ .large gets 200px × 200px'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Multiple Arguments"
              description="Pass several values"
              code={`// Mixin with multiple arguments
@mixin box($width, $height, $bg) {
  width: $width;
  height: $height;
  background: $bg;
}

// Pass values in order
.card {
  @include box(300px, 200px, #3b82f6);
}

.banner {
  @include box(100%, 80px, #10b981);
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Order Matters!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              With positional arguments, you must pass values in the exact order they're defined!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Default Values */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wand2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Default Values"
            description="Optional arguments with fallbacks"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Provide default values for arguments. If no value is passed, the default is used.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Arguments with Defaults"
              description="Colon followed by default value"
              code={`// Mixin with default values
@mixin button($bg: #3b82f6, $color: white) {
  background: $bg;
  color: $color;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
}

// Use defaults
.btn-default {
  @include button;
  // Uses #3b82f6 and white
}

// Override first argument
.btn-success {
  @include button(#10b981);
  // Uses #10b981 and white
}

// Override both
.btn-custom {
  @include button(#8b5cf6, #fef3c7);
  // Uses #8b5cf6 and #fef3c7
}`}
              output={[
                '✓ btn-default: blue background, white text',
                '✓ btn-success: green background, white text',
                '✓ btn-custom: purple background, yellow text'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Smart Defaults!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Default values make mixins easier to use. Users can call them without arguments for the common case!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Named Arguments */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sliders className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Named Arguments"
            description="Pass arguments by name, not position"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$name: value</code> syntax to pass arguments by name. Order doesn't matter!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Using Named Arguments"
              description="Much clearer and order-independent"
              code={`// Mixin definition
@mixin box($width, $height, $bg, $border: none) {
  width: $width;
  height: $height;
  background: $bg;
  border: $border;
}

// Named arguments - any order!
.card {
  @include box(
    $bg: #dbeafe,
    $width: 300px,
    $height: 200px,
    $border: 2px solid #3b82f6
  );
}

// Skip optional arguments
.simple {
  @include box(
    $width: 200px,
    $height: 150px,
    $bg: white
    // $border uses default: none
  );
}`}
              output={[
                '✓ Order doesn\'t matter',
                '✓ Very readable',
                '✓ Can skip optional args'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best Practice!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use named arguments for mixins with many parameters. It makes your code much more readable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Arguments in Action"
          description="See flexible mixins working in practice"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="box box-small">Small</div>
  <div class="box box-medium">Medium</div>
  <div class="box box-large">Large</div>
  
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
</div>`}
          css={`// Mixin with arguments
@mixin box($size, $bg: #e5e7eb, $color: #1f2937) {
  width: $size;
  height: $size;
  background: $bg;
  color: $color;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
}

// Button mixin with multiple arguments
@mixin button($bg, $hover-bg, $color: white) {
  background: $bg;
  color: $color;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: $hover-bg;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: scale(0.98);
  }
}

// Base
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  padding: 2rem;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

// Using box mixin with different sizes
.box-small {
  @include box(100px, #dbeafe, #1e40af);
  
  @media (prefers-color-scheme: dark) {
    @include box(100px, #1e3a8a, #bfdbfe);
  }
}

.box-medium {
  @include box(150px, #d1fae5, #065f46);
  
  @media (prefers-color-scheme: dark) {
    @include box(150px, #064e3b, #a7f3d0);
  }
}

.box-large {
  @include box(200px, #fef3c7, #92400e);
  
  @media (prefers-color-scheme: dark) {
    @include box(200px, #78350f, #fde68a);
  }
}

// Using button mixin with named arguments
.btn-primary {
  @include button(
    $bg: #3b82f6,
    $hover-bg: #2563eb
  );
}

.btn-success {
  @include button(
    $bg: #10b981,
    $hover-bg: #059669
  );
}

.btn-danger {
  @include button(
    $bg: #ef4444,
    $hover-bg: #dc2626
  );
}`}
          title="Mixin Arguments Example"
          description="Boxes and buttons using flexible mixins"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Variable Arguments */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Variable Arguments (...)"
            description="Accept any number of arguments"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">...</code> to accept any number of arguments as a list.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Rest Parameters"
              description="Like JavaScript's ...rest"
              code={`// Accept any number of shadows
@mixin shadows($shadows...) {
  box-shadow: $shadows;
}

.card {
  @include shadows(
    0 2px 4px rgba(0,0,0,0.1),
    0 4px 8px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.1)
  );
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Transition Multiple Properties"
              code={`// Transition any number of properties
@mixin transition($props...) {
  transition: $props;
}

.button {
  @include transition(
    background 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease
  );
}`}
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Positional</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @mixin name($arg1, $arg2)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Default Values</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                $arg: default-value
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Named Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @include name($arg: value)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Variable Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                $args... for any number
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: @content!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've mastered mixin arguments! Now learn about <strong>@content</strong> to pass entire blocks of CSS to mixins! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
