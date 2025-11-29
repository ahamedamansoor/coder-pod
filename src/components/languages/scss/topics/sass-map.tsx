'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Map, Code, Eye, EyeOff, Sparkles, Search, Plus, Key, Copy, BookOpen } from 'lucide-react';
import React, { useState } from 'react';

export default function SassMap({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const examples = {
        basic: {
            title: 'Map Access',
            html: '<div class="theme-demo"><div class="primary-box">Primary</div><div class="success-box">Success</div></div>',
            scss: '$theme-colors: (\n  primary: #3b82f6,\n  secondary: #64748b,\n  success: #10b981\n);\n\n.primary-box {\n  background: map-get($theme-colors, primary);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n}\n\n.success-box {\n  background: map-get($theme-colors, success);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n}',
            css: '.primary-box {\n  background: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n}\n\n.success-box {\n  background: #10b981;\n  color: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n}'
        },
        merge: {
            title: 'Map Merge',
            html: '<div class="theme-box">Combined Theme</div>',
            scss: '$base: (primary: #3b82f6);\n$extended: (success: #10b981);\n\n$all: map-merge($base, $extended);\n\n.theme-box {\n  background: linear-gradient(\n    135deg,\n    map-get($all, primary),\n    map-get($all, success)\n  );\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n}',
            css: '.theme-box {\n  background: linear-gradient(135deg, #3b82f6, #10b981);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n}'
        },
        iterate: {
            title: 'Map Iteration',
            html: '<div class="buttons"><button class="btn-primary">Primary</button><button class="btn-success">Success</button></div>',
            scss: '$colors: (primary: #3b82f6, success: #10b981);\n\n@each $name, $color in $colors {\n  .btn-#{$name} {\n    background: $color;\n    color: white;\n    padding: 0.75rem 1.5rem;\n    border-radius: 6px;\n    \n    &:hover {\n      background: darken($color, 10%);\n    }\n  }\n}',
            css: '.btn-primary {\n  background: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n}\n\n.btn-primary:hover {\n  background: #2563eb;\n}\n\n.btn-success {\n  background: #10b981;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n}\n\n.btn-success:hover {\n  background: #059669;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Map className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Sass Map Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master key-value data structures for organized, maintainable stylesheets.</p>
            </div>

            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        What are Sass Maps?
                    </CardTitle>
                    <CardDescription>
                        Maps are collections of key-value pairs, perfect for organizing colors, spacing, and configuration.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                            <Search className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-sm">Access</h3>
                            <p className="text-xs text-muted-foreground">map-get()</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                            <Plus className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-sm">Modify</h3>
                            <p className="text-xs text-muted-foreground">map-merge()</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                            <Key className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-sm">Inspect</h3>
                            <p className="text-xs text-muted-foreground">map-keys()</p>
                        </div>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-indigo-600 to-purple-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Map Functions Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Access</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">map-get($map, $key)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">map-has-key($map, $key)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Modify</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">map-merge($map1, $map2)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">map-remove($map, $keys...)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Inspect</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">map-keys($map)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">map-values($map)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Iterate</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">@each $key, $val in $map</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
