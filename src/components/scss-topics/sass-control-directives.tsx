'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, GitBranch, Lightbulb, AlertTriangle, CheckCircle,
    Code, Eye, EyeOff, Workflow, Sparkles, RotateCw,
    Repeat, List, RefreshCw, Copy, BookOpen
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassControlDirectives({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('if');
    const [showOutput, setShowOutput] = useState(false);

    const directiveCategories = [
        {
            type: '@if / @else',
            icon: GitBranch,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Conditional logic',
            example: '@if $theme == dark'
        },
        {
            type: '@for',
            icon: Repeat,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Counter-based loops',
            example: '@for $i from 1 through 10'
        },
        {
            type: '@each',
            icon: List,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'List/map iteration',
            example: '@each $item in $list'
        },
        {
            type: '@while',
            icon: RotateCw,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Condition-based loops',
            example: '@while $count > 0'
        }
    ];

    const interactiveExamples = {
        if: {
            title: '@if / @else Conditional Logic',
            html: '<div class="theme-container">\n  <div class="card card--dark">Dark Theme</div>\n  <div class="card card--light">Light Theme</div>\n  <div class="alert alert--success">Success</div>\n  <div class="alert alert--error">Error</div>\n</div>',
            scss: '// Conditional theme styling\n$theme: dark;\n$enable-shadows: true;\n\n.card {\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin: 1rem 0;\n  \n  &--dark {\n    @if $theme == dark {\n      background: #1f2937;\n      color: #f9fafb;\n      \n      @if $enable-shadows {\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n      }\n    } @else {\n      background: #374151;\n      color: #d1d5db;\n    }\n  }\n  \n  &--light {\n    @if $theme == light {\n      background: #ffffff;\n      color: #1f2937;\n    } @else {\n      background: #f9fafb;\n      color: #6b7280;\n    }\n  }\n}\n\n.alert {\n  padding: 1rem;\n  border-radius: 6px;\n  margin: 0.5rem 0;\n  \n  &--success {\n    @if $theme == dark {\n      background: rgba(16, 185, 129, 0.2);\n      color: #6ee7b7;\n    } @else {\n      background: #d1fae5;\n      color: #065f46;\n    }\n  }\n  \n  &--error {\n    @if $theme == dark {\n      background: rgba(239, 68, 68, 0.2);\n      color: #fca5a5;\n    } @else {\n      background: #fee2e2;\n      color: #991b1b;\n    }\n  }\n}',
            css: '.card {\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin: 1rem 0;\n}\n\n.card--dark {\n  background: #1f2937;\n  color: #f9fafb;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\n.card--light {\n  background: #f9fafb;\n  color: #6b7280;\n}\n\n.alert {\n  padding: 1rem;\n  border-radius: 6px;\n  margin: 0.5rem 0;\n}\n\n.alert--success {\n  background: rgba(16, 185, 129, 0.2);\n  color: #6ee7b7;\n}\n\n.alert--error {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}'
        },
        for: {
            title: '@for Loop Generation',
            html: '<div class="grid-container">\n  <div class="col col-1">1</div>\n  <div class="col col-2">2</div>\n  <div class="col col-3">3</div>\n  <div class="col col-4">4</div>\n</div>',
            scss: '// Generate column classes\n@for $i from 1 through 4 {\n  .col-#{$i} {\n    grid-column: $i;\n    background: hsl(#{$i * 40}, 70%, 60%);\n  }\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.col {\n  padding: 2rem;\n  color: white;\n  text-align: center;\n  font-weight: 700;\n  border-radius: 8px;\n}',
            css: '.col-1 {\n  grid-column: 1;\n  background: hsl(40, 70%, 60%);\n}\n\n.col-2 {\n  grid-column: 2;\n  background: hsl(80, 70%, 60%);\n}\n\n.col-3 {\n  grid-column: 3;\n  background: hsl(120, 70%, 60%);\n}\n\n.col-4 {\n  grid-column: 4;\n  background: hsl(160, 70%, 60%);\n}'
        },
        each: {
            title: '@each List Iteration',
            html: '<div class="colors">\n  <div class="badge badge--primary">Primary</div>\n  <div class="badge badge--success">Success</div>\n  <div class="badge badge--warning">Warning</div>\n  <div class="badge badge--danger">Danger</div>\n</div>',
            scss: '// Iterate over colors\n$colors: (\n  primary: #3b82f6,\n  success: #10b981,\n  warning: #f59e0b,\n  danger: #ef4444\n);\n\n@each $name, $color in $colors {\n  .badge--#{$name} {\n    background: $color;\n    \n    &:hover {\n      background: darken($color, 10%);\n    }\n  }\n}\n\n.colors {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.badge {\n  padding: 0.5rem 1rem;\n  color: white;\n  border-radius: 6px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}',
            css: '.badge--primary {\n  background: #3b82f6;\n}\n\n.badge--primary:hover {\n  background: #2563eb;\n}\n\n.badge--success {\n  background: #10b981;\n}\n\n.badge--success:hover {\n  background: #059669;\n}\n\n.badge--warning {\n  background: #f59e0b;\n}\n\n.badge--warning:hover {\n  background: #d97706;\n}\n\n.badge--danger {\n  background: #ef4444;\n}\n\n.badge--danger:hover {\n  background: #dc2626;\n}'
        },
        while: {
            title: '@while Condition Loop',
            html: '<div class="scale-demo">\n  <div class="box size-1">1x</div>\n  <div class="box size-2">2x</div>\n  <div class="box size-4">4x</div>\n</div>',
            scss: '// Generate scale classes\n$scale: 1;\n\n@while $scale <= 4 {\n  .size-#{$scale} {\n    width: 50px * $scale;\n    height: 50px * $scale;\n  }\n  $scale: $scale * 2;\n}\n\n.scale-demo {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  padding: 2rem;\n}\n\n.box {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  border-radius: 8px;\n}',
            css: '.size-1 {\n  width: 50px;\n  height: 50px;\n}\n\n.size-2 {\n  width: 100px;\n  height: 100px;\n}\n\n.size-4 {\n  width: 200px;\n  height: 200px;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <GitBranch className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        Sass Control Directives
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master conditional logic, loops, and iterations for dynamic stylesheet generation.
                </p>
            </div>

            <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        Programmatic Styling Power
                    </CardTitle>
                    <CardDescription>
                        Control directives enable conditional logic and loops for dynamic CSS generation.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {directiveCategories.map((cat, idx) => {
                            const Icon = cat.icon;
                            return (
                                <div key={idx} className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                    <Icon className={`w-8 h-8 ${cat.color} mx-auto mb-2`} />
                                    <h3 className="font-semibold text-sm mb-1">{cat.type}</h3>
                                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Workflow className="w-6 h-6 text-primary" />
                        Control Directive Types
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {directiveCategories.map((cat, idx) => {
                            const Icon = cat.icon;
                            return (
                                <div key={idx} className={`p-4 rounded-lg border ${cat.bgColor} ${cat.borderColor} hover:shadow-lg transition-all`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon className={`w-5 h-5 ${cat.color}`} />
                                        <h3 className="font-bold text-sm">{cat.type}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{cat.description}</p>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">{cat.example}</code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Examples
                    </CardTitle>
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
                                <Badge variant="secondary" className="mr-2 text-xs">
                                    {key === 'if' ? '@if' : key === 'for' ? '@for' : key === 'each' ? '@each' : '@while'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-cyan-600" />
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
                                >
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal CSS'}
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
                            className="bg-gradient-to-r from-cyan-600 to-blue-600"
                        >
                            <Play className="w-4 h-4 mr-2" />
                            Try in Playground
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss)}
                        >
                            <Copy className="w-4 h-4 mr-2" />
                            Copy SCSS
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-cyan-500 bg-cyan-50 dark:bg-cyan-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                        <BookOpen className="w-6 h-6" />
                        Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">@if / @else</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs">@if condition</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs mt-1">@else if condition</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs mt-1">@else</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">@for</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs">from 1 through 10</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs mt-1">from 1 to 10</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">@each</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs">$item in $list</code>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs mt-1">$key, $val in $map</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">@while</h4>
                            <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block text-xs">$count > 0</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
