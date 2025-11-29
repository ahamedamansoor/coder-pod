'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Target, Code, Eye, EyeOff, Sparkles, Link2, Layers, GitBranch, Copy, BookOpen, Hash } from 'lucide-react';
import React, { useState } from 'react';

export default function SassSelector({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('append');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Nest', icon: Layers, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Combine selectors', ex: 'selector-nest()' },
        { type: 'Append', icon: Link2, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Add to selectors', ex: 'selector-append()' },
        { type: 'Extend', icon: GitBranch, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Extend selectors', ex: 'selector-extend()' },
        { type: 'Parse', icon: Hash, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Manipulate parts', ex: 'selector-parse()' }
    ];

    const examples = {
        append: {
            title: 'Selector Append',
            html: '<div class="card-large">Card Large</div>\n<div class="btn-primary-active">Button</div>',
            scss: '// SELECTOR-APPEND()\n// Adds suffix to each selector in a list\n\n// Dynamic class generation\n$base-selectors: ".card", ".btn";\n$modifier: "-large";\n\n// selector-append() adds suffix\n$result: selector-append($base-selectors, $modifier);\n// Result: .card-large, .btn-large\n\n@each $selector in $result {\n  #{$selector} {\n    padding: 2rem;\n    border-radius: 8px;\n    font-weight: 700;\n    text-align: center;\n    \n    @if $selector == ".card-large" {\n      background: linear-gradient(135deg, #3b82f6, #1e40af);\n      color: white;\n    } @else {\n      background: linear-gradient(135deg, #10b981, #059669);\n      color: white;\n    }\n  }\n}\n\n// Multiple suffixes\n.btn {\n  $states: "-primary", "-active";\n  \n  @each $state in $states {\n    $selector: selector-append(&, $state);\n    \n    #{$selector} {\n      background: #3b82f6;\n      color: white;\n      padding: 0.75rem 1.5rem;\n      border-radius: 6px;\n    }\n  }\n}',
            css: '.card-large {\n  padding: 2rem;\n  border-radius: 8px;\n  font-weight: 700;\n  text-align: center;\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n}\n\n.btn-large {\n  padding: 2rem;\n  border-radius: 8px;\n  font-weight: 700;\n  text-align: center;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: white;\n}\n\n.btn-primary {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n}\n\n.btn-active {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n}'
        },
        nest: {
            title: 'Selector Nest',
            html: '<div class="container">\n  <div class="card">Nested Card</div>\n</div>',
            scss: '// SELECTOR-NEST()\n// Nests selectors as they would be in Sass\n\n$parent: ".container";\n$child: ".card";\n\n// selector-nest() creates nested selector\n$nested: selector-nest($parent, $child);\n// Result: .container .card\n\n#{$nested} {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n// Complex nesting\n$contexts: ".light-theme", ".dark-theme";\n$component: ".button";\n\n@each $context in $contexts {\n  $nested-selector: selector-nest($context, $component);\n  \n  #{$nested-selector} {\n    padding: 0.75rem 1.5rem;\n    border-radius: 6px;\n    \n    @if $context == ".light-theme" {\n      background: #3b82f6;\n      color: white;\n    } @else {\n      background: #1e293b;\n      color: #f1f5f9;\n      border: 1px solid #475569;\n    }\n  }\n}',
            css: '.container .card {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.light-theme .button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  background: #3b82f6;\n  color: white;\n}\n\n.dark-theme .button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  background: #1e293b;\n  color: #f1f5f9;\n  border: 1px solid #475569;\n}'
        },
        parse: {
            title: 'Selector Parse',
            html: '<button class="btn">Parsed Button</button>',
            scss: '// SELECTOR-PARSE()\n// Parses a selector string into Sass format\n\n// Parse string selector\n$selector-string: ".btn, .button, .link";\n$parsed: selector-parse($selector-string);\n// Result: ((.btn,), (.button,), (.link,))\n\n// Apply styles to parsed selectors\n@each $sel in $parsed {\n  #{$sel} {\n    padding: 0.75rem 1.5rem;\n    border-radius: 6px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    \n    @if $sel == ".btn" {\n      background: linear-gradient(135deg, #3b82f6, #2563eb);\n    } @else if $sel == ".button" {\n      background: linear-gradient(135deg, #10b981, #059669);\n    } @else {\n      background: linear-gradient(135deg, #f59e0b, #d97706);\n    }\n    \n    color: white;\n    \n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n    }\n  }\n}',
            css: '.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: linear-gradient(135deg, #3b82f6, #2563eb);\n  color: white;\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n\n.button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: white;\n}\n\n.button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}'
        },
        unify: {
            title: 'Selector Unify',
            html: '<div class="component special">Unified</div>',
            scss: '// SELECTOR-UNIFY()\n// Creates selector that matches both inputs\n\n$selector1: ".component";\n$selector2: ".special";\n\n// selector-unify() combines selectors\n$unified: selector-unify($selector1, $selector2);\n// Result: .component.special\n\n#{$unified} {\n  background: linear-gradient(135deg, #ec4899, #be185d);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  box-shadow: 0 8px 24px rgba(236, 72, 153, 0.3);\n}\n\n// Unify with pseudo-classes\n$base: ".button";\n$state: ":hover";\n\n$unified-hover: selector-unify($base, $state);\n// Can\'t unify class with pseudo - returns null\n// Use selector-append instead\n\n// Complex unification\n$element: "div";\n$class: ".card";\n\n$unified-complex: selector-unify($element, $class);\n// Result: div.card\n\n#{$unified-complex} {\n  background: linear-gradient(135deg, #14b8a6, #0d9488);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n}',
            css: '.component.special {\n  background: linear-gradient(135deg, #ec4899, #be185d);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  box-shadow: 0 8px 24px rgba(236, 72, 153, 0.3);\n}\n\ndiv.card {\n  background: linear-gradient(135deg, #14b8a6, #0d9488);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Target className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Sass Selector Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Programmatically manipulate, combine, and transform CSS selectors for advanced dynamic styling.</p>
            </div>

            <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        What are Selector Functions?
                    </CardTitle>
                    <CardDescription>
                        Selector functions allow you to inspect and manipulate CSS selectors programmatically, enabling powerful meta-programming patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {categories.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div key={i} className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                                    <div className={`w-12 h-12 ${c.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <Icon className={`w-6 h-6 ${c.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-1">{c.type}</h3>
                                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><GitBranch className="w-6 h-6" />Selector Transformation Visual</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-6 border border-blue-200">
                            <h3 className="font-semibold mb-4 text-blue-700 dark:text-blue-300">selector-append()</h3>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">.btn</Badge>
                                    <span>+</span>
                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">"-primary"</Badge>
                                    <span>→</span>
                                    <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">.btn-primary</Badge>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Adds suffix to selector</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 border border-green-200">
                            <h3 className="font-semibold mb-4 text-green-700 dark:text-green-300">selector-nest()</h3>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">.parent</Badge>
                                    <span>+</span>
                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">.child</Badge>
                                    <span>→</span>
                                    <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">.parent .child</Badge>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Creates descendant selector</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Selector Function Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {categories.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div key={i} className={`p-4 rounded-lg border ${c.bgColor} ${c.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <Icon className={`w-5 h-5 ${c.color} mb-2`} />
                                    <h3 className="font-bold text-sm mb-1">{c.type}</h3>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block break-words">{c.ex}</code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Play className="w-6 h-6" />Interactive Examples</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(examples).map(([key, ex]) => (
                            <Button key={key} variant={selectedExample === key ? "default" : "outline"} onClick={() => setSelectedExample(key)} size="sm">
                                {ex.title}
                            </Button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">SCSS</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{examples[selectedExample as keyof typeof examples].scss}</pre>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">CSS</h3>
                                <Button variant="ghost" size="sm" onClick={() => setShowOutput(!showOutput)}>
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? examples[selectedExample as keyof typeof examples].css : 'Click eye to reveal'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-cyan-600 to-blue-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-cyan-500 bg-cyan-50 dark:bg-cyan-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Selector Functions Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Combination</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">selector-nest($selectors...)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">selector-append($selectors...)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">selector-unify($sel1, $sel2)</code>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-300">Manipulation</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">selector-parse($selector)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">selector-extend($sel, $ext, $target)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">selector-replace($sel, $old, $new)</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
