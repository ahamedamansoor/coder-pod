'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Calculator, Plus, Minus, X, Divide, Equal,
    Code, Eye, EyeOff, CheckCircle, Target, Zap,
    Settings, Globe, RefreshCw, Copy, ArrowRight, Hash,
    TreePine, Layers, Star, Rocket, BookOpen, FolderTree,
    Users, Link2, GitBranch, Workflow, Network, Merge,
    Palette, Type, Ruler, Wrench, Cog, Beaker, Sparkles,
    RotateCcw, Percent, Binary, Shuffle
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassOperators({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('arithmetic');
    const [showOutput, setShowOutput] = useState(false);

    const mathHtml = `<div class="container">
  <div class="box">Box with calculated dimensions</div>
</div>`;

    const mathScss = `$base-size: 16px;
$container-width: 1200px;
$columns: 12;
$gutter: 20px;

.container {
  width: $container-width;
  max-width: 100%;
  margin: 0 auto;
  padding: $gutter;
  background: #f5f5f5;
}

.box {
  // Addition
  padding: ($base-size + 8px); // 24px
  
  // Subtraction  
  margin-bottom: ($base-size - 4px); // 12px
  
  // Multiplication
  font-size: ($base-size * 1.5); // 24px
  
  // Division (use math.div() or wrap in parentheses)
  width: ($container-width / $columns); // 100px
  
  // Complex calculation
  height: ($base-size * 4 + $gutter); // 84px
  
  background: #3b82f6;
  color: white;
  border-radius: 8px;
}`;

    const comparisonHtml = `<div class="card large">Large Card</div>
<div class="card small">Small Card</div>`;

    const comparisonScss = `$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$current-width: 900px;

// Comparison operators: ==, !=, <, >, <=, >=
@mixin responsive-text($width) {
  @if $width < $breakpoint-tablet {
    font-size: 14px;
  } @else if $width >= $breakpoint-tablet and $width < $breakpoint-desktop {
    font-size: 16px;
  } @else {
    font-size: 18px;
  }
}

.card {
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  background: #f0f9ff;
  
  &.large {
    @include responsive-text(1100px);
    // font-size will be 18px
  }
  
  &.small {
    @include responsive-text(600px);
    // font-size will be 14px
  }
}

// Boolean operators: and, or, not
$is-dark-mode: true;
$high-contrast: false;

.text {
  @if $is-dark-mode and not $high-contrast {
    color: #e5e7eb;
  } @else if $is-dark-mode and $high-contrast {
    color: #ffffff;
  } @else {
    color: #1f2937;
  }
}`;

    const stringHtml = `<div class="icon-user">User Icon</div>
<div class="font-heading">Heading Text</div>`;

    const stringScss = `$icon-prefix: "icon-";
$font-name: "heading";

// String concatenation with +
.#{$icon-prefix}user {
  // Becomes .icon-user
  background: url("/icons/user.svg");
  width: 24px;
  height: 24px;
}

// String interpolation with #{}
.font-#{$font-name} {
  // Becomes .font-heading
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
}

// Using in property values
$direction: "left";

.arrow {
  border-#{$direction}: 2px solid black;
  // Becomes: border-left: 2px solid black;
  padding-#{$direction}: 10px;
}`;

    const colorHtml = `<div class="theme-primary">Primary Theme</div>
<div class="theme-faded">Faded Theme</div>`;

    const colorScss = `$primary-color: #3b82f6;
$background-color: #ffffff;

.theme-primary {
  background: $primary-color;
  color: white;
  padding: 20px;
  
  // Color mixing
  border: 3px solid mix($primary-color, black, 80%);
}

.theme-faded {
  // Adjust opacity
  background: rgba($primary-color, 0.1);
  color: $primary-color;
  padding: 20px;
  
  &:hover {
    // Increase opacity
    background: rgba($primary-color, 0.2);
  }
}`;

    const unitsHtml = `<div class="flexible-box">Flexible sizing</div>`;

    const unitsScss = `$base-px: 16px;
$base-percent: 50%;
$base-em: 1em;

.flexible-box {
  // You can mix compatible units
  width: 100% - 40px;  // ❌ This won't work! Incompatible units
  
  // Use calc() for mixed units
  width: calc(100% - 40px);  // ✅ This works
  
  // Same unit operations work fine
  padding: $base-px * 2;  // 32px
  margin: $base-px / 4;   // 4px
  
  // Percentage calculations
  width: $base-percent * 2;  // 100%
  
  background: #3b82f6;
  color: white;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}`;

    const practicalHtml = `<div class="grid">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>`;

    const practicalScss = `$grid-columns: 4;
$grid-gap: 20px;
$container-width: 100%;

.grid {
  display: grid;
  gap: $grid-gap;
  
  // Calculate column width accounting for gaps
  // Total gap width = (columns - 1) * gap
  $total-gap: ($grid-columns - 1) * $grid-gap;
  
  grid-template-columns: repeat(
    $grid-columns,
    calc((#{$container-width} - #{$total-gap}) / #{$grid-columns})
  );
  
  padding: 20px;
  background: #f5f5f5;
}

.grid-item {
  background: #3b82f6;
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  
  &:hover {
    // Darken by 10%
    background: darken(#3b82f6, 10%);
    transform: scale(1.05);
  }
}`;

    const operatorCategories = [
        {
            type: 'Arithmetic',
            icon: Calculator,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Mathematical calculations',
            example: '+ - * / %'
        },
        {
            type: 'Comparison',
            icon: Equal,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Value comparisons',
            example: '== != < > <= >='
        },
        {
            type: 'Logical',
            icon: Binary,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Boolean operations',
            example: 'and or not'
        },
        {
            type: 'String',
            icon: Type,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'String manipulation',
            example: '+ #{} interpolation'
        }
    ];

    const interactiveExamples = {
        arithmetic: {
            title: 'Arithmetic Operations',
            html: '<div class="calc-demo">\n  <div class="layout-grid">\n    <div class="grid-item">Addition: 16px + 8px</div>\n    <div class="grid-item">Subtraction: 100% - 20px</div>\n    <div class="grid-item">Multiplication: 1rem * 1.5</div>\n    <div class="grid-item">Division: 100px / 4</div>\n  </div>\n</div>',
            scss: '// === ARITHMETIC OPERATORS ===\n$base-size: 16px;\n$container-width: 1200px;\n$grid-columns: 4;\n$grid-gap: 20px;\n\n.calc-demo {\n  padding: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.layout-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: $grid-gap;\n  margin-bottom: 2rem;\n}\n\n.grid-item {\n  // Addition\n  padding: $base-size + 8px;           // 24px\n  \n  // Subtraction for margin\n  margin-bottom: $base-size - 4px;     // 12px\n  \n  // Multiplication for font size\n  font-size: $base-size * 0.875;      // 14px\n  \n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  \n  &:hover {\n    // Complex calculation\n    transform: scale(1 + 0.05);        // 1.05\n  }\n}',
            css: '.calc-demo {\n  padding: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.layout-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 2rem;\n}\n\n.grid-item {\n  padding: 24px;\n  margin-bottom: 12px;\n  font-size: 14px;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.grid-item:hover {\n  transform: scale(1.05);\n}'
        },
        comparison: {
            title: 'Comparison & Logic',
            html: '<div class="logic-demo">\n  <div class="responsive-text">Responsive Text</div>\n  <div class="theme-switcher">\n    <div class="theme-card theme-card--light">Light Theme</div>\n    <div class="theme-card theme-card--dark">Dark Theme</div>\n    <div class="theme-card theme-card--auto">Auto Theme</div>\n  </div>\n</div>',
            scss: '// === COMPARISON & LOGICAL OPERATORS ===\n$breakpoint-mobile: 480px;\n$breakpoint-tablet: 768px;\n$breakpoint-desktop: 1024px;\n$current-width: 900px;\n\n// Boolean variables\n$is-dark-mode: true;\n$high-contrast: false;\n$mobile-first: true;\n\n// Comparison operators in action\n@mixin responsive-font($width) {\n  @if $width < $breakpoint-mobile {\n    font-size: 14px;\n    line-height: 1.4;\n  } @else if $width >= $breakpoint-mobile and $width < $breakpoint-tablet {\n    font-size: 16px;\n    line-height: 1.5;\n  } @else if $width >= $breakpoint-tablet and $width < $breakpoint-desktop {\n    font-size: 18px;\n    line-height: 1.6;\n  } @else {\n    font-size: 20px;\n    line-height: 1.7;\n  }\n}\n\n.logic-demo {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.responsive-text {\n  @include responsive-font($current-width);\n  padding: 1rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  text-align: center;\n  font-weight: 600;\n}\n\n.theme-switcher {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n.theme-card {\n  padding: 1.5rem;\n  border-radius: 12px;\n  text-align: center;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  \n  &--light {\n    // Using logical operators\n    @if not $is-dark-mode {\n      background: #ffffff;\n      color: #1f2937;\n      border: 2px solid #e5e7eb;\n    } @else {\n      background: #f9fafb;\n      color: #6b7280;\n      border: 2px solid #d1d5db;\n    }\n  }\n  \n  &--dark {\n    @if $is-dark-mode and not $high-contrast {\n      background: #1f2937;\n      color: #f9fafb;\n      border: 2px solid #374151;\n    } @else if $is-dark-mode and $high-contrast {\n      background: #000000;\n      color: #ffffff;\n      border: 2px solid #ffffff;\n    } @else {\n      background: #374151;\n      color: #d1d5db;\n      border: 2px solid #6b7280;\n    }\n  }\n  \n  &--auto {\n    @if $mobile-first or $current-width <= $breakpoint-tablet {\n      background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: 2px solid transparent;\n    } @else {\n      background: linear-gradient(135deg, #10b981, #059669);\n      color: white;\n      border: 2px solid transparent;\n    }\n  }\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n}',
            css: '.logic-demo {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.responsive-text {\n  font-size: 18px;\n  line-height: 1.6;\n  padding: 1rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  text-align: center;\n  font-weight: 600;\n}\n\n.theme-switcher {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n.theme-card {\n  padding: 1.5rem;\n  border-radius: 12px;\n  text-align: center;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.theme-card--light {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 2px solid #d1d5db;\n}\n\n.theme-card--dark {\n  background: #1f2937;\n  color: #f9fafb;\n  border: 2px solid #374151;\n}\n\n.theme-card--auto {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  color: white;\n  border: 2px solid transparent;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Calculator className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Sass Operators Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master calculations, comparisons, and manipulations to create dynamic, intelligent stylesheets.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        The Power of Dynamic Calculations
                    </CardTitle>
                    <CardDescription>
                        Operators enable mathematical calculations, logical decisions, and dynamic value generation directly in your stylesheets.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Calculator className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Calculate</h3>
                            <p className="text-sm text-muted-foreground">Math operations</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Equal className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Compare</h3>
                            <p className="text-sm text-muted-foreground">Value comparisons</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Binary className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Logic</h3>
                            <p className="text-sm text-muted-foreground">Boolean operations</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Type className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Manipulate</h3>
                            <p className="text-sm text-muted-foreground">String operations</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Operator Categories */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Cog className="w-6 h-6 text-primary" />
                        Operator Categories & Types
                    </CardTitle>
                    <CardDescription>
                        Different types of operators for various computational and logical operations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {operatorCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${category.bgColor} ${category.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${category.color}`} />
                                        <h3 className="font-bold text-sm">{category.type}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{category.description}</p>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                        {category.example}
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
                        Interactive Operator Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different operator patterns with real examples and compiled output.
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
                                className="transition-all duration-200"
                            >
                                <Badge variant="secondary" className="mr-2 text-xs">
                                    {key === 'arithmetic' ? 'Math' : 'Logic'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-orange-600" />
                                    SCSS Input
                                </h3>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
                                    {interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                    CSS Output
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowOutput(!showOutput)}
                                    className="transition-all duration-200"
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
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss,
                                ''
                            )}
                            className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        >
                            <Play className="w-4 h-4" />
                            Try in Playground
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss)}
                            className="flex items-center gap-2"
                        >
                            <Copy className="w-4 h-4" />
                            Copy SCSS
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-6 h-6 text-primary" />
                        Arithmetic Operators
                    </CardTitle>
                    <CardDescription>
                        Perform mathematical calculations with numbers and units.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{mathScss}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(mathHtml, mathScss, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try Arithmetic
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Comparison & Boolean Operators</CardTitle>
                    <CardDescription>
                        Make decisions in your stylesheets with conditional logic.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{comparisonScss}</pre>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="border rounded-lg p-3">
                            <h4 className="font-bold mb-2">Comparison</h4>
                            <ul className="text-sm space-y-1">
                                <li><code>==</code> equals</li>
                                <li><code>!=</code> not equals</li>
                                <li><code>&lt;</code> less than</li>
                                <li><code>&gt;</code> greater than</li>
                                <li><code>&lt;=</code> less than or equal</li>
                                <li><code>&gt;=</code> greater than or equal</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3">
                            <h4 className="font-bold mb-2">Boolean</h4>
                            <ul className="text-sm space-y-1">
                                <li><code>and</code> - both conditions true</li>
                                <li><code>or</code> - either condition true</li>
                                <li><code>not</code> - inverts boolean</li>
                            </ul>
                        </div>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(comparisonHtml, comparisonScss, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try Comparisons
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>String Operations & Interpolation</CardTitle>
                    <CardDescription>
                        Combine strings and inject values into selectors and properties.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{stringScss}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(stringHtml, stringScss, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try String Operations
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Color Operations</CardTitle>
                    <CardDescription>
                        Mix, lighten, darken, and adjust colors mathematically.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{colorScss}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(colorHtml, colorScss, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try Color Operations
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
                <CardHeader>
                    <CardTitle className="text-yellow-700 dark:text-yellow-500">Unit Compatibility</CardTitle>
                    <CardDescription>
                        Be careful when mixing different unit types!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-background rounded-md p-4 mb-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{unitsScss}</pre>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p>✅ <strong>Compatible:</strong> <code>16px + 8px</code> → <code>24px</code></p>
                        <p>✅ <strong>Compatible:</strong> <code>50% + 25%</code> → <code>75%</code></p>
                        <p>❌ <strong>Incompatible:</strong> <code>100% - 40px</code> → Error!</p>
                        <p>✅ <strong>Solution:</strong> <code>calc(100% - 40px)</code> → Works!</p>
                    </div>
                    <Button className="mt-4" onClick={() => onOpenWebPlayground(unitsHtml, unitsScss, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try Unit Operations
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="text-green-700 dark:text-green-400">Practical Example: Responsive Grid</CardTitle>
                    <CardDescription>
                        Combining operators to build a flexible grid system.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-background rounded-md p-4 mb-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{practicalScss}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground(practicalHtml, practicalScss, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try Grid System
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-bold mb-2">Arithmetic</h4>
                            <code className="block bg-muted p-2 rounded mb-1">width: 100px + 50px; // 150px</code>
                            <code className="block bg-muted p-2 rounded mb-1">height: 200px - 50px; // 150px</code>
                            <code className="block bg-muted p-2 rounded mb-1">font-size: 16px * 1.5; // 24px</code>
                            <code className="block bg-muted p-2 rounded">padding: 100px / 4; // 25px</code>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Comparison</h4>
                            <code className="block bg-muted p-2 rounded mb-1">@if $width &gt; 768px &#123;...&#125;</code>
                            <code className="block bg-muted p-2 rounded mb-1">@if $color == blue &#123;...&#125;</code>
                            <code className="block bg-muted p-2 rounded mb-1">@if $size &gt;= 1024px &#123;...&#125;</code>
                            <code className="block bg-muted p-2 rounded">@if not $mobile &#123;...&#125;</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
