'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Link2, Lightbulb, Target, Sparkles, Hash, 
    Code, Eye, EyeOff, CheckCircle, AlertTriangle,
    ArrowRight, Zap, Settings, Globe, RefreshCw,
    BookOpen, Star, Rocket, TreePine, Layers, Copy,
    Import, File, FolderTree
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassUseForward({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const modulePatterns = [
        {
            type: '@use Basics',
            icon: Import,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Import modules with namespaces',
            example: '@use "variables" as vars;'
        },
        {
            type: '@forward API',
            icon: ArrowRight,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Create public module interfaces',
            example: '@forward "mixins" show button-style;'
        },
        {
            type: 'Namespacing',
            icon: Hash,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Avoid naming conflicts with prefixes',
            example: 'vars.$primary-color'
        },
        {
            type: 'Module System',
            icon: Layers,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Modern Sass architecture patterns',
            example: '@use "sass:math", "@use "sass:color"'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic @use Examples',
            html: `<div class="modern-app">
  <header class="header">
    <h1 class="header__title">Modern Sass</h1>
  </header>
  <main class="main">
    <div class="card">
      <h2 class="card__title">@use & @forward</h2>
      <p class="card__content">Modern module system in action.</p>
      <button class="btn btn--primary">Learn More</button>
    </div>
  </main>
</div>`,
            files: {
                '_config.scss': `// Configuration module
$primary-color: #3b82f6 !default;
$secondary-color: #64748b !default;
$success-color: #10b981 !default;
$danger-color: #ef4444 !default;

$font-family: 'Inter', system-ui, sans-serif !default;
$font-size-base: 1rem !default;
$font-size-lg: 1.25rem !default;

$spacing-sm: 0.5rem !default;
$spacing-md: 1rem !default;
$spacing-lg: 1.5rem !default;
$spacing-xl: 2rem !default;

$border-radius: 0.5rem !default;
$box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !default;`,
                '_mixins.scss': `// Mixins module
@use 'config';

@mixin button-style($bg-color: config.$primary-color) {
  background: $bg-color;
  color: white;
  padding: config.$spacing-sm config.$spacing-md;
  border: none;
  border-radius: config.$border-radius;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: darken($bg-color, 10%);
    transform: translateY(-1px);
  }
}

@mixin card-style {
  background: white;
  border-radius: config.$border-radius;
  box-shadow: config.$box-shadow;
  padding: config.$spacing-lg;
}`,
                'main.scss': `// Main stylesheet using @use
@use 'config';
@use 'mixins';

body {
  font-family: config.$font-family;
  font-size: config.$font-size-base;
  margin: 0;
  background: #f8fafc;
}

.header {
  background: white;
  padding: config.$spacing-md config.$spacing-lg;
  box-shadow: config.$box-shadow;
  
  &__title {
    margin: 0;
    color: config.$primary-color;
    font-size: config.$font-size-lg;
  }
}

.main {
  padding: config.$spacing-xl;
}

.card {
  @include mixins.card-style;
  
  &__title {
    margin: 0 0 config.$spacing-sm 0;
    color: #1a202c;
  }
  
  &__content {
    color: config.$secondary-color;
    margin-bottom: config.$spacing-md;
  }
}

.btn {
  @include mixins.button-style;
  
  &--primary {
    @include mixins.button-style(config.$primary-color);
  }
}`
            },
            css: `body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  margin: 0;
  background: #f8fafc;
}

.header {
  background: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header__title {
  margin: 0;
  color: #3b82f6;
  font-size: 1.25rem;
}

.main {
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.card__title {
  margin: 0 0 0.5rem 0;
  color: #1a202c;
}

.card__content {
  color: #64748b;
  margin-bottom: 1rem;
}

.btn {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}`
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layers className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sass @use & @forward Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the modern Sass module system for better organization, namespacing, and maintainable code.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Target className="w-6 h-6 animate-bounce" />
                        The Modern Module System
                    </CardTitle>
                    <CardDescription>
                        @use and @forward replace @import with better namespacing, explicit dependencies, and improved performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Import className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Explicit Imports</h3>
                            <p className="text-sm text-muted-foreground">Clear dependencies with @use</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Hash className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Namespacing</h3>
                            <p className="text-sm text-muted-foreground">Avoid naming conflicts</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <ArrowRight className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Public APIs</h3>
                            <p className="text-sm text-muted-foreground">Control exports with @forward</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Module Patterns */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Module System Patterns
                    </CardTitle>
                    <CardDescription>
                        Different ways to use @use and @forward for modern Sass architecture.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {modulePatterns.map((pattern, index) => {
                            const Icon = pattern.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${pattern.bgColor} ${pattern.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${pattern.color}`} />
                                        <h3 className="font-bold text-sm">{pattern.type}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{pattern.description}</p>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                        {pattern.example}
                                    </code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Module Examples
                    </CardTitle>
                    <CardDescription>
                        Explore modern Sass module system with real examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <FolderTree className="w-5 h-5 text-blue-600" />
                                Module Structure
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {Object.entries(interactiveExamples[selectedExample as keyof typeof interactiveExamples].files).map(([filename, content]) => (
                                    <div key={filename} className="bg-gray-100 dark:bg-gray-900 rounded-lg">
                                        <div className="bg-gray-800 px-3 py-2 rounded-t-lg border-b border-gray-700">
                                            <h4 className="text-gray-800 dark:text-white font-mono text-sm flex items-center gap-2">
                                                <File className="w-4 h-4" />
                                                {filename}
                                            </h4>
                                        </div>
                                        <div className="p-3 max-h-64 overflow-y-auto">
                                            <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">
                                                {content}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                    Compiled CSS Output
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowOutput(!showOutput)}
                                >
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal compiled CSS output'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                        <Button 
                            onClick={() => onOpenWebPlayground(
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].html,
                                Object.values(interactiveExamples[selectedExample as keyof typeof interactiveExamples].files).join('\n\n'),
                                ''
                            )}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <Play className="w-4 h-4" />
                            Try in Playground
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(Object.values(interactiveExamples[selectedExample as keyof typeof interactiveExamples].files).join('\n\n'))}
                            className="flex items-center gap-2"
                        >
                            <Copy className="w-4 h-4" />
                            Copy Code
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* @use vs @import Comparison */}
            <Card className="border-amber-500 bg-amber-50 dark:bg-amber-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <AlertTriangle className="w-6 h-6" />
                        @use vs @import: The Evolution
                    </CardTitle>
                    <CardDescription>
                        Understanding why @use and @forward are the future of Sass modules.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">❌ Old @import Problems</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Old @import way
@import 'variables';
@import 'mixins';

// Problems:
// ❌ Global namespace pollution
// ❌ No explicit dependencies
// ❌ Duplicate imports possible
// ❌ Hard to track what's used where

.button {
  // Where does $primary-color come from?
  background: $primary-color;
  // Which file has button-style?
  @include button-style;
}`}</pre>
                            </div>
                            <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/20 rounded border border-red-200">
                                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Issues with @import</h4>
                                <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                                    <li>• Global namespace conflicts</li>
                                    <li>• Unclear dependencies</li>
                                    <li>• Performance issues</li>
                                    <li>• Maintenance difficulties</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">✅ Modern @use Benefits</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Modern @use way
@use 'variables' as vars;
@use 'mixins';

// Benefits:
// ✅ Explicit namespacing
// ✅ Clear dependencies
// ✅ No duplicate loading
// ✅ Better performance

.button {
  // Clear source: vars module
  background: vars.$primary-color;
  // Clear source: mixins module
  @include mixins.button-style;
}`}</pre>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/20 rounded border border-green-200">
                                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Benefits of @use</h4>
                                <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                                    <li>• Namespace protection</li>
                                    <li>• Explicit dependencies</li>
                                    <li>• Better performance</li>
                                    <li>• Easier maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* @use Deep Dive */}
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Import className="w-6 h-6" />
                        @use Deep Dive
                    </CardTitle>
                    <CardDescription>
                        Master all the ways to use @use for importing and namespacing modules.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Basic @use Syntax</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Basic usage - creates namespace from filename
@use 'variables';  // Creates 'variables' namespace
@use 'mixins';     // Creates 'mixins' namespace

.button {
  color: variables.$primary-color;
  @include mixins.button-style;
}

// Custom namespace with 'as'
@use 'variables' as vars;
@use 'mixins' as mix;

.button {
  color: vars.$primary-color;
  @include mix.button-style;
}

// No namespace with 'as *' (use carefully!)
@use 'variables' as *;

.button {
  color: $primary-color; // Direct access, no namespace
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. Built-in Sass Modules</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Built-in Sass modules
@use 'sass:math';
@use 'sass:color';
@use 'sass:string';
@use 'sass:list';
@use 'sass:map';

.component {
  // Math functions
  width: math.percentage(1/3);  // 33.333%
  padding: math.pow(2, 3) * 1px; // 8px
  
  // Color functions
  background: color.scale(#3b82f6, $lightness: 20%);
  border-color: color.adjust(#3b82f6, $alpha: -0.3);
  
  // String functions
  font-family: string.unquote('"Helvetica Neue"');
  
  // List functions
  margin: list.nth((10px, 20px, 30px), 2); // 20px
  
  // Map functions
  $colors: (primary: #3b82f6, secondary: #64748b);
  color: map.get($colors, primary);
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Configuration with @use</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// _theme.scss - Configurable module
$primary-color: #3b82f6 !default;
$secondary-color: #64748b !default;
$border-radius: 0.5rem !default;

@mixin theme-button {
  background: $primary-color;
  border-radius: $border-radius;
}

// main.scss - Configure before using
@use 'theme' with (
  $primary-color: #ef4444,
  $border-radius: 0.25rem
);

.my-button {
  @include theme.theme-button;
  // Uses configured values: red color, small radius
}`}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* @forward Deep Dive */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <ArrowRight className="w-6 h-6" />
                        @forward Deep Dive
                    </CardTitle>
                    <CardDescription>
                        Create clean public APIs and organize module exports with @forward.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Basic @forward Usage</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// _index.scss - Create a public API
@forward 'variables';
@forward 'mixins';
@forward 'functions';

// main.scss - Import everything through index
@use 'components'; // Imports the index file

.button {
  color: components.$primary-color;    // From variables
  @include components.button-style;    // From mixins
  width: components.rem(16px);         // From functions
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. Selective @forward with show/hide</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// _public-api.scss - Control what's exported
@forward 'variables' show $primary-color, $secondary-color;
@forward 'mixins' show button-style, card-style;
@forward 'functions' hide internal-helper;

// Only specified items are available to consumers
// Hidden items remain private to the module

// _internal.scss
$internal-secret: 'hidden';
$public-value: 'visible';

// _api.scss
@forward 'internal' hide $internal-secret;

// Consumer can only access $public-value`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. @forward with Prefixes</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// _theme-api.scss - Add prefixes to avoid conflicts
@forward 'colors' as color-*;
@forward 'typography' as type-*;
@forward 'spacing' as space-*;

// If colors.scss has: $primary, $secondary
// If typography.scss has: $base-size, $scale
// If spacing.scss has: $small, $medium

// Consumer sees:
// $color-primary, $color-secondary
// $type-base-size, $type-scale  
// $space-small, $space-medium

@use 'theme-api' as theme;

.component {
  color: theme.$color-primary;
  font-size: theme.$type-base-size;
  margin: theme.$space-medium;
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">4. Advanced @forward Patterns</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// _design-system.scss - Complete design system API
@forward 'tokens/colors' as color-*;
@forward 'tokens/typography' as type-*;
@forward 'tokens/spacing' as space-*;
@forward 'components/buttons' show button-mixin;
@forward 'components/cards' show card-mixin;
@forward 'utilities/functions';

// _components.scss - Component-specific API
@forward 'button' show button-style, button-variant;
@forward 'card' show card-style;
@forward 'form' hide internal-validation;

// _themes.scss - Theme system
@forward 'light-theme' as light-*;
@forward 'dark-theme' as dark-*;

// Usage in main.scss
@use 'design-system' as ds;
@use 'components';
@use 'themes';

.my-component {
  color: ds.$color-primary;
  font-size: ds.$type-base;
  @include components.button-style;
}`}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <Lightbulb className="w-6 h-6" />
                        Module System Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for using @use and @forward effectively.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Best Practices
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use descriptive namespace aliases</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Create index files for public APIs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use @forward to control exports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Configure modules with 'with' clause</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use built-in Sass modules</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Common Mistakes
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Overusing 'as *' (global namespace)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Not using @forward for public APIs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Mixing @import and @use in same file</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating circular dependencies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Not leveraging built-in modules</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Real-world Architecture */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Real-world Module Architecture
                    </CardTitle>
                    <CardDescription>
                        See how to structure a complete design system with @use and @forward.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Design System Structure</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// File structure
design-system/
├── tokens/
│   ├── _colors.scss
│   ├── _typography.scss
│   ├── _spacing.scss
│   └── _index.scss
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   ├── _form.scss
│   └── _index.scss
├── utilities/
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _index.scss
└── _index.scss (main API)

// tokens/_index.scss
@forward 'colors' as color-*;
@forward 'typography' as type-*;
@forward 'spacing' as space-*;

// components/_index.scss
@forward 'button';
@forward 'card';
@forward 'form';

// utilities/_index.scss
@forward 'functions';
@forward 'mixins';

// _index.scss (main API)
@forward 'tokens';
@forward 'components';
@forward 'utilities';`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Usage in Projects</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// main.scss - Clean, organized imports
@use 'design-system' as ds;

// Configure the design system
@use 'design-system' with (
  $color-primary: #your-brand-color,
  $type-base-size: 18px
);

.my-component {
  // Use tokens
  color: ds.$color-primary;
  font-size: ds.$type-base;
  padding: ds.$space-medium;
  
  // Use component mixins
  @include ds.button-style;
  @include ds.card-style;
  
  // Use utility functions
  width: ds.rem(320px);
  margin: ds.spacing(2);
}`}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <BookOpen className="w-6 h-6" />
                        @use & @forward Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">@use Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'module';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'module' as alias;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'module' as *;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'module' with ($var: value);</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">@forward Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@forward 'module';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@forward 'module' as prefix-*;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@forward 'module' show $var;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@forward 'module' hide $var;</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Built-in Modules</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'sass:math';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'sass:color';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'sass:string';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@use 'sass:list';</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Migration Tip</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            When migrating from @import to @use, start with your leaf modules (those that don't import others) and work your way up. 
                            Use @forward to create clean public APIs and maintain backward compatibility during the transition.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
