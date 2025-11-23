'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Monitor, Eye, EyeOff, Sparkles, Smartphone, Tablet, Copy, BookOpen, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';

export default function SassResponsiveMixins({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const examples = {
        basic: {
            title: 'Basic Mixins',
            html: '<div class="responsive-card"><h2>Responsive</h2></div>',
            scss: '@mixin mobile { @media (max-width: 767px) { @content; } }\n@mixin tablet { @media (min-width: 768px) { @content; } }\n\n.responsive-card {\n  padding: 1rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  \n  @include mobile {\n    padding: 0.75rem;\n    &::after { content: " 📱"; }\n  }\n  \n  @include tablet {\n    padding: 2rem;\n    &::after { content: " 💻"; }\n  }\n}',
            css: '.responsive-card { padding: 1rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }\n@media (max-width: 767px) { .responsive-card { padding: 0.75rem; }\n.responsive-card::after { content: " 📱"; } }\n@media (min-width: 768px) { .responsive-card { padding: 2rem; }\n.responsive-card::after { content: " 💻"; } }'
        },
        mobilefirst: {
            title: 'Mobile-First',
            html: '<div class="mf-component">Mobile First</div>',
            scss: '@mixin min($width) { @media (min-width: $width) { @content; } }\n\n.mf-component {\n  padding: 1rem;\n  font-size: 1rem;\n  background: #3b82f6;\n  color: white;\n  \n  @include min(640px) { padding: 1.5rem; font-size: 1.125rem; }\n  @include min(1024px) { padding: 2rem; font-size: 1.5rem; }\n}',
            css: '.mf-component { padding: 1rem; font-size: 1rem; background: #3b82f6; color: white; }\n@media (min-width: 640px) { .mf-component { padding: 1.5rem; font-size: 1.125rem; } }\n@media (min-width: 1024px) { .mf-component { padding: 2rem; font-size: 1.5rem; } }'
        },
        range: {
            title: 'Range Mixins',
            html: '<div class="range-box">Range Based</div>',
            scss: '@mixin between($min, $max) {\n  @media (min-width: $min) and (max-width: $max - 1px) { @content; }\n}\n\n.range-box {\n  padding: 2rem;\n  background: #10b981;\n  color: white;\n  \n  @include between(768px, 1024px) {\n    background: #f59e0b;\n    &::after { content: " (Tablet Only)"; }\n  }\n}',
            css: '.range-box { padding: 2rem; background: #10b981; color: white; }\n@media (min-width: 768px) and (max-width: 1023px) {\n  .range-box { background: #f59e0b; }\n  .range-box::after { content: " (Tablet Only)"; }\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Monitor className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Sass Responsive Mixins</h1>
                </div>
                <p className="text-muted-foreground text-lg">Build adaptive designs with powerful breakpoint mixins.</p>
            </div>

            <Card className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-sky-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        Responsive Design Made Easy
                    </CardTitle>
                    <CardDescription>
                        Create reusable responsive mixins for breakpoints and fluid layouts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-sm">Mobile-First</h3>
                            <code className="text-xs">@include min()</code>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <Tablet className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-sm">Breakpoints</h3>
                            <code className="text-xs">@include tablet</code>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border">
                            <Monitor className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-sm">Range</h3>
                            <code className="text-xs">@include between()</code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><TrendingUp className="w-6 h-6" />Strategy Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">✓ Mobile-First</h3>
                            <code className="text-xs block mb-2">Base → min(640px) → min(1024px)</code>
                            <p className="text-xs text-green-600">Better performance</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Desktop-First</h3>
                            <code className="text-xs block mb-2">Base → max(1024px) → max(640px)</code>
                            <p className="text-xs text-blue-600">Legacy approach</p>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-sky-600 to-blue-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-sky-500 bg-sky-50 dark:bg-sky-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Mixin Library</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Breakpoints</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1 text-xs">@mixin min($width)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1 text-xs">@mixin max($width)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@mixin between($min, $max)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Named</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1 text-xs">@mixin mobile</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1 text-xs">@mixin tablet</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@mixin desktop</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
