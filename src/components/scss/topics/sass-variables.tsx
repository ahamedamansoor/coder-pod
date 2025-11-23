
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Variable, Lightbulb, Palette, File, Hash, Text,
    Target, Zap, Settings, Globe, Lock, Eye, EyeOff,
    CheckCircle, AlertTriangle, Copy, ArrowRight, Code,
    Layers, RefreshCw, Wrench, BookOpen, Star, Rocket
} from 'lucide-react';
import React, { useState } from 'react';
import { PageHeader } from './page-header';

export default function SassVariables({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const scssCode = `$primary-color: #3b82f6;
$font-stack: Helvetica, sans-serif;
$base-padding: 1rem;

body {
  font-family: $font-stack;
}

.container {
  padding: $base-padding;
  background: $primary-color;
  color: white;
}
`;

    const dataTypes = [
        {
            type: 'Colors',
            icon: Palette,
            color: 'text-pink-600',
            bgColor: 'bg-pink-50 dark:bg-pink-950/20',
            borderColor: 'border-pink-200',
            examples: [
                '$primary: #3b82f6;',
                '$secondary: rgb(100, 116, 139);',
                '$accent: hsl(210, 40%, 60%);',
                '$transparent: rgba(0, 0, 0, 0.5);'
            ]
        },
        {
            type: 'Numbers',
            icon: Hash,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            examples: [
                '$font-size: 16px;',
                '$line-height: 1.6;',
                '$margin: 2rem;',
                '$z-index: 1000;'
            ]
        },
        {
            type: 'Strings',
            icon: Text,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            examples: [
                '$font-family: "Inter";',
                '$image-path: "/images/";',
                '$prefix: "app-";',
                '$content: "★";'
            ]
        },
        {
            type: 'Booleans',
            icon: CheckCircle,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            examples: [
                '$enable-rounded: true;',
                '$debug-mode: false;',
                '$rtl-support: true;',
                '$print-styles: false;'
            ]
        },
        {
            type: 'Lists',
            icon: File,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            examples: [
                '$margins: 0 auto;',
                '$font-stack: Arial, sans-serif;',
                '$breakpoints: 768px 1024px;',
                '$shadows: 0 2px 4px rgba(0,0,0,0.1);'
            ]
        },
        {
            type: 'Maps',
            icon: Layers,
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
            borderColor: 'border-indigo-200',
            examples: [
                '$colors: (primary: #3b82f6, secondary: #64748b);',
                '$breakpoints: (sm: 640px, md: 768px);',
                '$z-indexes: (modal: 1000, tooltip: 1001);',
                '$fonts: (heading: "Inter", body: "System");'
            ]
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic Variables',
            html: '<div class="card"><h2>Welcome</h2><p>This is a card component.</p><button class="btn">Click me</button></div>',
            scss: `// Basic variable usage
$primary-color: #3b82f6;
$secondary-color: #64748b;
$font-size-base: 16px;
$border-radius: 8px;
$spacing: 1rem;

.card {
  background: white;
  border: 1px solid $secondary-color;
  border-radius: $border-radius;
  padding: $spacing * 2;
  margin: $spacing;
  
  h2 {
    color: $primary-color;
    font-size: $font-size-base * 1.5;
    margin-bottom: $spacing;
  }
  
  .btn {
    background: $primary-color;
    color: white;
    padding: $spacing * 0.5 $spacing;
    border: none;
    border-radius: $border-radius * 0.5;
    cursor: pointer;
  }
}`,
            css: `.card {
  background: white;
  border: 1px solid #64748b;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
}

.card h2 {
  color: #3b82f6;
  font-size: 24px;
  margin-bottom: 1rem;
}

.card .btn {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`
        },
        defaults: {
            title: 'Default Values',
            html: '<div class="theme-card primary"><h3>Primary Theme</h3></div><div class="theme-card secondary"><h3>Secondary Theme</h3></div>',
            scss: `// Default values with !default
$primary-color: #3b82f6 !default;
$secondary-color: #64748b !default;
$card-padding: 1.5rem !default;
$card-radius: 12px !default;

// These won't override if already defined
$primary-color: #ef4444 !default;  // Won't apply
$secondary-color: #10b981 !default; // Won't apply

.theme-card {
  padding: $card-padding;
  border-radius: $card-radius;
  margin: 1rem 0;
  
  &.primary {
    background: $primary-color;
    color: white;
  }
  
  &.secondary {
    background: $secondary-color;
    color: white;
  }
}`,
            css: `.theme-card {
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.theme-card.primary {
  background: #3b82f6;
  color: white;
}

.theme-card.secondary {
  background: #64748b;
  color: white;
}`
        },
        interpolation: {
            title: 'Variable Interpolation',
            html: '<div class="app-header"><h1>App Header</h1></div><div class="app-sidebar">Sidebar</div><div class="app-content">Main Content</div>',
            scss: `// Variable interpolation with #{}
$prefix: "app";
$property: "margin";
$side: "top";
$value: 2rem;

// Using interpolation in selectors
.#{$prefix}-header {
  background: #3b82f6;
  color: white;
  padding: 1rem;
}

.#{$prefix}-sidebar {
  background: #f8fafc;
  padding: 1rem;
  
  // Using interpolation in properties
  #{$property}-#{$side}: $value;
}

.#{$prefix}-content {
  padding: 1rem;
  #{$property}: $value 0;
}`,
            css: `.app-header {
  background: #3b82f6;
  color: white;
  padding: 1rem;
}

.app-sidebar {
  background: #f8fafc;
  padding: 1rem;
  margin-top: 2rem;
}

.app-content {
  padding: 1rem;
  margin: 2rem 0;
}`
        }
    };

    const globalScopeCode = `// _variables.scss
$primary-color: #3b82f6;
$base-font-size: 16px;

// main.scss
@import 'variables';

body {
  font-size: $base-font-size;
  color: $primary-color;
}
`;

    const localScopeCode = `.card {
  $card-padding: 1.5rem; // Local variable

  padding: $card-padding;
  
  h2 {
    // This works because h2 is inside .card
    padding-bottom: $card-padding;
  }
}

.footer {
  // This would cause an error! 
  // $card-padding is not available here.
  // padding: $card-padding;
}
`;

    return (
        <div className="w-full space-y-8 min-h-screen pb-16">
            <PageHeader
                icon={Variable}
                category="SCSS Variables"
                title="Sass Variables Mastery"
                description="Master the art of storing reusable values to keep your stylesheets DRY and maintainable"
                colorTheme="blue"
            />

            {/* Quick Start Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Target className="w-6 h-6" />
                        The Power of Variables
                    </CardTitle>
                    <CardDescription>
                        Variables are like labeled containers that store values you want to reuse throughout your stylesheets.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">Define Once</h3>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">$primary: #3b82f6;</code>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl font-bold text-green-600">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Use Everywhere</h3>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">color: $primary;</code>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl font-bold text-purple-600">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">Change Once</h3>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Updates everywhere!</code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Data Types Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Variable Data Types
                    </CardTitle>
                    <CardDescription>
                        Sass variables can store different types of data, each with specific use cases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dataTypes.map((dataType, index) => {
                            const Icon = dataType.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${dataType.bgColor} ${dataType.borderColor}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${dataType.color}`} />
                                        <h3 className="font-bold">{dataType.type}</h3>
                                    </div>
                                    <div className="space-y-2">
                                        {dataType.examples.map((example, idx) => (
                                            <code key={idx} className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                                {example}
                                            </code>
                                        ))}
                                    </div>
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
                        Interactive Variable Examples
                    </CardTitle>
                    <CardDescription>
                        See how variables work in real Sass code with live examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(interactiveExamples).map(([key, example]) => (
                            <Button
                                key={key}
                                variant={selectedExample === key ? "default" : "outline"}
                                onClick={() => setSelectedExample(key)}
                                size="sm"
                            >
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-600" />
                                    SCSS Input
                                </h3>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
                                    {interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <File className="w-5 h-5 text-green-600" />
                                    CSS Output
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowOutput(!showOutput)}
                                >
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal CSS output'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <Button 
                            onClick={() => onOpenWebPlayground(
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].html,
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss,
                                ''
                            )}
                            className="flex items-center gap-2"
                        >
                            <Play className="w-4 h-4" />
                            Try in Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Variable Scope */}
            <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Globe className="w-6 h-6" />
                        Variable Scope & Visibility
                    </CardTitle>
                    <CardDescription>
                        Understanding where variables can be accessed is crucial for maintainable code.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    Global Scope
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Variables defined outside selectors are available everywhere.
                                </p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                    <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{globalScopeCode}</pre>
                                </div>
                            </div>
                            
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Lock className="w-5 h-5 text-orange-600" />
                                    Local Scope
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Variables defined inside selectors are only available within that context.
                                </p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                    <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{localScopeCode}</pre>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Scope Rules</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Global variables</strong> can be accessed from anywhere in your stylesheet
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Local variables</strong> are only available within their containing block
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Nested selectors</strong> can access parent scope variables
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Local variables</strong> shadow global ones with the same name
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Default Values */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="w-6 h-6 text-primary" />
                        Default Values & !default Flag
                    </CardTitle>
                    <CardDescription>
                        Create configurable variables that can be overridden when needed.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-3">How !default Works</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Library defaults
$primary-color: #3b82f6 !default;
$font-size: 16px !default;

// User overrides (defined before import)
$primary-color: #ef4444;

// Result: $primary-color will be #ef4444
// because it was already defined`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Use Cases</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Library development</strong> - Provide sensible defaults
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Theme systems</strong> - Allow customization
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Configuration files</strong> - Safe fallback values
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Component libraries</strong> - Flexible styling
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Variable Interpolation */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Hash className="w-6 h-6" />
                        Variable Interpolation
                    </CardTitle>
                    <CardDescription>
                        Use variables in selectors, property names, and string values with #{} syntax.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Interpolation Examples</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`$prefix: "app";
$property: "margin";
$side: "top";
$size: "large";

// In selectors
.#{$prefix}-header { }          // .app-header
.#{$prefix}-#{$size} { }        // .app-large

// In property names  
#{$property}-#{$side}: 1rem;    // margin-top: 1rem;

// In values
content: "Welcome to #{$prefix}"; // content: "Welcome to app";
background: url("images/#{$prefix}-logo.png");`}</pre>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h4 className="font-semibold mb-2">✅ Selectors</h4>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                                    .#{'#{'}$prefix{'}'}-btn
                                </code>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h4 className="font-semibold mb-2">✅ Properties</h4>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                                    #{'#{'}$property{'}'}: value;
                                </code>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <h4 className="font-semibold mb-2">✅ Values</h4>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                                    content: "#{'#{'}$text{'}'}";
                                </code>
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
                        Variable Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional tips for organizing and naming your Sass variables.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Do's
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use descriptive names: <code>$primary-color</code> not <code>$blue</code></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Group related variables in separate files</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use consistent naming conventions (kebab-case)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Define variables at the top of files</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use !default for library variables</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Don'ts
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't use overly generic names like <code>$color</code></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't define variables you'll only use once</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't mix naming conventions in one project</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't create deeply nested variable dependencies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Don't forget to document complex variable systems</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Advanced Variable Techniques
                    </CardTitle>
                    <CardDescription>
                        Expert-level patterns for complex Sass projects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Variable Maps for Theming</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`$theme-colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981,
  danger: #ef4444,
  warning: #f59e0b
);

// Usage with map-get
.btn-primary {
  background: map-get($theme-colors, primary);
}

// Or with @each loop
@each $name, $color in $theme-colors {
  .btn-#{$name} {
    background: $color;
    color: white;
  }
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. Calculated Variables</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`$base-font-size: 16px;
$scale-ratio: 1.25;

// Calculated typography scale
$font-size-sm: $base-font-size / $scale-ratio;    // 12.8px
$font-size-lg: $base-font-size * $scale-ratio;    // 20px
$font-size-xl: $font-size-lg * $scale-ratio;      // 25px

// Spacing system
$base-spacing: 1rem;
$spacing-xs: $base-spacing * 0.25;  // 0.25rem
$spacing-sm: $base-spacing * 0.5;   // 0.5rem
$spacing-lg: $base-spacing * 2;     // 2rem`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Environment-Based Variables</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`$env: 'development' !default;

$debug-mode: if($env == 'development', true, false);
$api-url: if($env == 'production', 'https://api.example.com', 'http://localhost:3000');

// Conditional styles
@if $debug-mode {
  .debug-info {
    position: fixed;
    top: 0;
    right: 0;
    background: red;
    color: white;
    padding: 0.5rem;
  }
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
                        Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">$variable: value;</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">color: $variable;</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Special Flags</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">$var: value !default;</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">$var: value !global;</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Interpolation</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">.#{'#{'}$prefix{'}'}-class</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block mb-1">#{'#{'}$property{'}'}: value;</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
