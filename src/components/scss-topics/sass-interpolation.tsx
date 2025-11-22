'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Hash, Lightbulb, AlertTriangle, CheckCircle,
    Code, Eye, EyeOff, Target, Zap, Settings, Globe,
    RefreshCw, Copy, ArrowRight, TreePine, Layers,
    Star, Rocket, BookOpen, FolderTree, Users, Link2,
    GitBranch, Workflow, Network, Merge, Sparkles,
    Wand2, Package, Shield, Type, Palette, Binary
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassInterpolation({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const interpolationCategories = [
        {
            type: 'Selector Interpolation',
            icon: Target,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Dynamic selector generation',
            example: '.#{ $prefix }-button'
        },
        {
            type: 'Property Interpolation',
            icon: Settings,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Dynamic property names',
            example: '#{ $property }: value;'
        },
        {
            type: 'Value Interpolation',
            icon: Zap,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Dynamic property values',
            example: 'url("#{ $path }/image.jpg")'
        },
        {
            type: 'String Interpolation',
            icon: Type,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'String concatenation',
            example: '"prefix-#{ $name }-suffix"'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic Interpolation Patterns',
            html: '<div class="demo-container">\n  <div class="btn btn--primary">Primary Button</div>\n  <div class="btn btn--secondary">Secondary Button</div>\n  <div class="icon icon--user">User Icon</div>\n  <div class="icon icon--settings">Settings Icon</div>\n  <div class="theme theme--dark">Dark Theme</div>\n  <div class="theme theme--light">Light Theme</div>\n</div>',
            scss: '// === BASIC INTERPOLATION PATTERNS ===\n$prefix: "btn";\n$icon-prefix: "icon";\n$theme-prefix: "theme";\n$primary-color: #3b82f6;\n$secondary-color: #64748b;\n\n// Selector interpolation\n.#{$prefix} {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  \n  &--primary {\n    background: $primary-color;\n    color: white;\n    \n    &:hover {\n      background: darken($primary-color, 10%);\n    }\n  }\n  \n  &--secondary {\n    background: $secondary-color;\n    color: white;\n    \n    &:hover {\n      background: darken($secondary-color, 10%);\n    }\n  }\n}\n\n// Icon system with interpolation\n.#{$icon-prefix} {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  background-size: contain;\n  \n  &--user {\n    background-image: url("/icons/user.svg");\n  }\n  \n  &--settings {\n    background-image: url("/icons/settings.svg");\n  }\n}\n\n// Theme system\n.#{$theme-prefix} {\n  padding: 1rem;\n  border-radius: 8px;\n  margin: 0.5rem 0;\n  \n  &--dark {\n    background: #1f2937;\n    color: #f9fafb;\n  }\n  \n  &--light {\n    background: #f9fafb;\n    color: #1f2937;\n    border: 1px solid #e5e7eb;\n  }\n}\n\n.demo-container {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  display: grid;\n  gap: 1rem;\n}',
            css: '.btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.btn--primary {\n  background: #3b82f6;\n  color: white;\n}\n\n.btn--primary:hover {\n  background: #2563eb;\n}\n\n.btn--secondary {\n  background: #64748b;\n  color: white;\n}\n\n.btn--secondary:hover {\n  background: #475569;\n}\n\n.icon {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  background-size: contain;\n}\n\n.icon--user {\n  background-image: url("/icons/user.svg");\n}\n\n.icon--settings {\n  background-image: url("/icons/settings.svg");\n}\n\n.theme {\n  padding: 1rem;\n  border-radius: 8px;\n  margin: 0.5rem 0;\n}\n\n.theme--dark {\n  background: #1f2937;\n  color: #f9fafb;\n}\n\n.theme--light {\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n}'
        },
        advanced: {
            title: 'Advanced Property Interpolation',
            html: '<div class="property-demo">\n  <div class="direction-box direction-box--left">Left Border</div>\n  <div class="direction-box direction-box--right">Right Border</div>\n  <div class="direction-box direction-box--top">Top Border</div>\n  <div class="direction-box direction-box--bottom">Bottom Border</div>\n</div>',
            scss: '// === PROPERTY NAME INTERPOLATION ===\n$directions: left, right, top, bottom;\n$border-color: #3b82f6;\n$border-width: 4px;\n\n.property-demo {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n.direction-box {\n  padding: 1.5rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  \n  @each $direction in $directions {\n    &--#{$direction} {\n      // Property name interpolation\n      border-#{$direction}: $border-width solid $border-color;\n      \n      &:hover {\n        // Dynamic transform based on direction\n        @if $direction == left {\n          transform: translateX(-5px);\n        } @else if $direction == right {\n          transform: translateX(5px);\n        } @else if $direction == top {\n          transform: translateY(-5px);\n        } @else if $direction == bottom {\n          transform: translateY(5px);\n        }\n      }\n    }\n  }\n}',
            css: '.property-demo {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n.direction-box {\n  padding: 1.5rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.direction-box--left {\n  border-left: 4px solid #3b82f6;\n}\n\n.direction-box--left:hover {\n  transform: translateX(-5px);\n}\n\n.direction-box--right {\n  border-right: 4px solid #3b82f6;\n}\n\n.direction-box--right:hover {\n  transform: translateX(5px);\n}\n\n.direction-box--top {\n  border-top: 4px solid #3b82f6;\n}\n\n.direction-box--top:hover {\n  transform: translateY(-5px);\n}\n\n.direction-box--bottom {\n  border-bottom: 4px solid #3b82f6;\n}\n\n.direction-box--bottom:hover {\n  transform: translateY(5px);\n}'
        },
        dynamic: {
            title: 'Dynamic URL & Asset Management',
            html: '<div class="asset-demo">\n  <div class="brand-logo brand-logo--dark">Company Logo</div>\n  <div class="brand-logo brand-logo--light">Company Logo</div>\n  <div class="product-image product-image--featured">Featured</div>\n  <div class="product-image product-image--thumbnail">Thumbnail</div>\n</div>',
            scss: '// === URL & VALUE INTERPOLATION ===\n$asset-path: "/assets";\n$image-path: "#{$asset-path}/images";\n$icon-path: "#{$asset-path}/icons";\n$logo-filename: "company-logo";\n$product-id: "product-001";\n\n.asset-demo {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n\n.brand-logo {\n  padding: 2rem;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 8px;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  \n  &--dark {\n    // URL interpolation with variables\n    background-image: url("#{$image-path}/#{$logo-filename}-dark.svg");\n    background-color: #1f2937;\n    color: white;\n  }\n  \n  &--light {\n    background-image: url("#{$image-path}/#{$logo-filename}-light.svg");\n    background-color: #f9fafb;\n    color: #1f2937;\n    border: 1px solid #e5e7eb;\n  }\n}\n\n.product-image {\n  padding: 2rem;\n  background-size: cover;\n  background-position: center;\n  border-radius: 12px;\n  min-height: 150px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  \n  &--featured {\n    // Complex URL with multiple interpolations\n    background-image: url("#{$image-path}/products/#{$product-id}/featured.jpg");\n  }\n  \n  &--thumbnail {\n    background-image: url("#{$image-path}/products/#{$product-id}/thumb.jpg");\n  }\n}',
            css: '.asset-demo {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n\n.brand-logo {\n  padding: 2rem;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 8px;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n\n.brand-logo--dark {\n  background-image: url("/assets/images/company-logo-dark.svg");\n  background-color: #1f2937;\n  color: white;\n}\n\n.brand-logo--light {\n  background-image: url("/assets/images/company-logo-light.svg");\n  background-color: #f9fafb;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n}\n\n.product-image {\n  padding: 2rem;\n  background-size: cover;\n  background-position: center;\n  border-radius: 12px;\n  min-height: 150px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n.product-image--featured {\n  background-image: url("/assets/images/products/product-001/featured.jpg");\n}\n\n.product-image--thumbnail {\n  background-image: url("/assets/images/products/product-001/thumb.jpg");\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Hash className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Sass Interpolation Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master dynamic selector and property generation with #{} interpolation for flexible, maintainable stylesheets.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        The Magic of Dynamic Generation
                    </CardTitle>
                    <CardDescription>
                        Interpolation allows you to inject variables into selectors, properties, and values, creating truly dynamic stylesheets.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Selectors</h3>
                            <p className="text-sm text-muted-foreground">Dynamic class names</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Settings className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Properties</h3>
                            <p className="text-sm text-muted-foreground">Dynamic property names</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Values</h3>
                            <p className="text-sm text-muted-foreground">Dynamic property values</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Type className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Strings</h3>
                            <p className="text-sm text-muted-foreground">String concatenation</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interpolation Categories */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-6 h-6 text-primary" />
                        Interpolation Categories & Patterns
                    </CardTitle>
                    <CardDescription>
                        Different ways to use #{} interpolation for dynamic stylesheet generation.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {interpolationCategories.map((category, index) => {
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
                        Interactive Interpolation Examples
                    </CardTitle>
                    <CardDescription>
                        Explore interpolation patterns with real examples and compiled output.
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
                                    {key === 'basic' ? 'Basic' : key === 'advanced' ? 'Advanced' : 'Dynamic'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-indigo-600" />
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
                            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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

            {/* Quick Reference */}
            <Card className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <BookOpen className="w-6 h-6" />
                        Interpolation Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">{'#{'}{'}$variable{'}'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">.{'#{'}{'}$prefix{'}'}-name</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">{'#{'}{'}$property{'}'}: value;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">"{'#{'}{'}$string{'}'}}"</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Common Patterns</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">BEM methodology</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Icon systems</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Theme switching</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Dynamic URLs</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Best Use Cases</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Component systems</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Design tokens</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Utility classes</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Asset paths</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                            Use interpolation to create flexible, maintainable component systems. It's perfect for 
                            generating dynamic selectors, property names, and values that adapt to your design system's 
                            naming conventions and configuration.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Common Use Cases */}
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Target className="w-6 h-6" />
                        Common Interpolation Use Cases
                    </CardTitle>
                    <CardDescription>
                        Real-world scenarios where interpolation shines in professional development.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">BEM Methodology with Interpolation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// BEM naming with variables
$block: 'card';
$element-title: 'title';
$element-body: 'body';
$modifier-featured: 'featured';

.#{$block} {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  
  // Element with interpolation
  &__#{$element-title} {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  &__#{$element-body} {
    color: #6b7280;
    line-height: 1.6;
  }
  
  // Modifier with interpolation
  &--#{$modifier-featured} {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    .#{$block}__#{$element-body} {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Dynamic Grid System</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Generate grid classes dynamically
$grid-columns: 12;
$grid-prefix: 'col';

@for $i from 1 through $grid-columns {
  .#{$grid-prefix}-#{$i} {
    width: percentage($i / $grid-columns);
  }
  
  // Responsive grid with interpolation
  @media (min-width: 768px) {
    .#{$grid-prefix}-md-#{$i} {
      width: percentage($i / $grid-columns);
    }
  }
  
  @media (min-width: 1024px) {
    .#{$grid-prefix}-lg-#{$i} {
      width: percentage($i / $grid-columns);
    }
  }
}

// Result: .col-1 through .col-12,
//         .col-md-1 through .col-md-12,
//         .col-lg-1 through .col-lg-12`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Utility Class Generation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Spacing utilities with interpolation
$spacing-values: (
  '0': 0,
  '1': 0.25rem,
  '2': 0.5rem,
  '3': 0.75rem,
  '4': 1rem,
  '5': 1.5rem,
  '6': 2rem
);

$spacing-properties: ('m': 'margin', 'p': 'padding');
$spacing-directions: (
  't': 'top',
  'r': 'right',
  'b': 'bottom',
  'l': 'left'
);

// Generate utility classes
@each $prop-key, $prop-value in $spacing-properties {
  @each $size-key, $size-value in $spacing-values {
    // All sides: .m-0, .p-4, etc.
    .#{$prop-key}-#{$size-key} {
      #{$prop-value}: $size-value;
    }
    
    // Specific sides: .mt-2, .pr-3, etc.
    @each $dir-key, $dir-value in $spacing-directions {
      .#{$prop-key}#{$dir-key}-#{$size-key} {
        #{$prop-value}-#{$dir-value}: $size-value;
      }
    }
  }
}`}
                                </pre>
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
                        Interpolation Best Practices
                    </CardTitle>
                    <CardDescription>
                        Guidelines for effective and maintainable interpolation usage.
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
                                    <span>Use for dynamic selector and property generation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Combine with maps and loops for utility generation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use descriptive variable names for clarity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document interpolation patterns in team projects</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use for BEM methodology and naming conventions</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Common Pitfalls
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Overusing interpolation where simple strings suffice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating overly complex interpolation chains</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Not considering selector specificity issues</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using interpolation for complex calculations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Forgetting quotes in URL interpolations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎯 When to Use Interpolation</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Perfect For:</h5>
                                <p className="text-blue-600 dark:text-blue-400">Dynamic selectors, BEM, utility generation, asset paths</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-1">Good For:</h5>
                                <p className="text-green-600 dark:text-green-400">Property names, media query values, animation names</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Avoid For:</h5>
                                <p className="text-orange-600 dark:text-orange-400">Simple values, mathematical calculations, color manipulation</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Visual Flow Diagram */}
            <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Workflow className="w-6 h-6" />
                        How Interpolation Works
                    </CardTitle>
                    <CardDescription>
                        Visual breakdown of the interpolation process from SCSS to CSS.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <h4 className="font-semibold">Define Variable</h4>
                                </div>
                                <code className="text-xs block bg-white dark:bg-gray-800 p-2 rounded">
                                    $prefix: "btn";
                                </code>
                            </div>
                            
                            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <h4 className="font-semibold">Use Interpolation</h4>
                                </div>
                                <code className="text-xs block bg-white dark:bg-gray-800 p-2 rounded">
                                    .#{'{ $prefix }'} {'{ ... }'}
                                </code>
                            </div>
                            
                            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                                    <h4 className="font-semibold">Compiled Output</h4>
                                </div>
                                <code className="text-xs block bg-white dark:bg-gray-800 p-2 rounded">
                                    .btn {'{ ... }'}
                                </code>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Complete Example Flow</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="text-sm font-semibold mb-2 text-indigo-600">SCSS Input with #{'{}'}</h5>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                        <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`$namespace: "app";
$component: "button";
$state: "active";

.#{$namespace}-#{$component} {
  padding: 0.75rem 1.5rem;
  
  &--#{$state} {
    background: blue;
  }
}`}
                                        </pre>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-sm font-semibold mb-2 text-green-600">Compiled CSS Output</h5>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                                        <pre className="text-green-600 dark:text-green-400 font-mono text-xs">
{`.app-button {
  padding: 0.75rem 1.5rem;
}

.app-button--active {
  background: blue;
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Patterns */}
            <Card className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Rocket className="w-6 h-6" />
                        Advanced Interpolation Patterns
                    </CardTitle>
                    <CardDescription>
                        Professional techniques for complex interpolation scenarios.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">Multi-Level Interpolation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Nested interpolation for complex naming
$brand: 'company';
$product: 'app';
$version: 'v2';

.#{$brand}-#{$product}-#{$version} {
  // Creates: .company-app-v2
  
  &__component {
    // Creates: .company-app-v2__component
  }
}`}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-2">Conditional Interpolation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Dynamic class generation with conditions
$theme: 'dark';
$prefix: if($theme == 'dark', 'dark', 'light');

.#{$prefix}-mode {
  @if $theme == 'dark' {
    background: #1f2937;
    color: #f9fafb;
  } @else {
    background: #f9fafb;
    color: #1f2937;
  }
}`}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-2">Function + Interpolation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Combining functions with interpolation
@function get-icon-path($icon-name) {
  @return '/assets/icons/#{$icon-name}.svg';
}

$icons: ('home', 'user', 'settings');

@each $icon in $icons {
  .icon-#{$icon} {
    background-image: url(get-icon-path($icon));
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
