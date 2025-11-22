'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, EyeOff, Sparkles, Search, FileQuestion, Ruler, Variable, Copy, BookOpen, Shield, Code } from 'lucide-react';
import React, { useState } from 'react';

export default function SassIntrospection({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('typeof');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Type Check', icon: FileQuestion, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Inspect data types', ex: 'type-of()' },
        { type: 'Unit Check', icon: Ruler, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Check units', ex: 'unit(), unitless()' },
        { type: 'Existence', icon: Search, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Check if exists', ex: 'variable-exists()' },
        { type: 'Inspect', icon: Shield, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Analyze values', ex: 'inspect()' }
    ];

    const examples = {
        typeof: {
            title: 'Type Of Check',
            html: '<div class="type-demo">\n  <div class="number-box">Number Type</div>\n  <div class="color-box">Color Type</div>\n  <div class="string-box">String Type</div>\n</div>',
            scss: '// TYPE-OF() - Check data types\n$value-number: 16px;\n$value-color: #3b82f6;\n$value-string: "hello";\n$value-list: 1px 2px 3px;\n$value-map: (key: value);\n$value-bool: true;\n\n// Check types and apply styles\n@if type-of($value-number) == number {\n  .number-box {\n    background: linear-gradient(135deg, #3b82f6, #2563eb);\n    color: white;\n    padding: 2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    &::after {\n      content: " (#{type-of($value-number)})";\n      font-size: 0.75rem;\n    }\n  }\n}\n\n@if type-of($value-color) == color {\n  .color-box {\n    background: linear-gradient(135deg, #10b981, #059669);\n    color: white;\n    padding: 2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    &::after {\n      content: " (#{type-of($value-color)})";\n      font-size: 0.75rem;\n    }\n  }\n}\n\n@if type-of($value-string) == string {\n  .string-box {\n    background: linear-gradient(135deg, #f59e0b, #d97706);\n    color: white;\n    padding: 2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    &::after {\n      content: " (#{type-of($value-string)})";\n      font-size: 0.75rem;\n    }\n  }\n}',
            css: '.number-box {\n  background: linear-gradient(135deg, #3b82f6, #2563eb);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.number-box::after {\n  content: " (number)";\n  font-size: 0.75rem;\n}\n\n.color-box {\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.color-box::after {\n  content: " (color)";\n  font-size: 0.75rem;\n}\n\n.string-box {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.string-box::after {\n  content: " (string)";\n  font-size: 0.75rem;\n}'
        },
        unit: {
            title: 'Unit Checking',
            html: '<div class="unit-demo">\n  <div class="has-unit">With Unit</div>\n  <div class="no-unit">No Unit</div>\n</div>',
            scss: '// UNIT() & UNITLESS() - Check units\n$with-unit: 16px;\n$no-unit: 2;\n$percentage: 50%;\n$em-value: 1.5em;\n\n// Check if value has unit\n@if unitless($with-unit) == false {\n  .has-unit {\n    background: linear-gradient(135deg, #6366f1, #4f46e5);\n    color: white;\n    padding: 2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    // Get the unit\n    &::after {\n      content: " (unit: #{unit($with-unit)})";\n      font-size: 0.75rem;\n    }\n  }\n}\n\n@if unitless($no-unit) {\n  .no-unit {\n    background: linear-gradient(135deg, #ec4899, #db2777);\n    color: white;\n    padding: 2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    &::after {\n      content: " (unitless: true)";\n      font-size: 0.75rem;\n    }\n  }\n}\n\n// comparable() - check if units are compatible\n@if comparable($with-unit, $em-value) {\n  .comparable {\n    display: block;\n  }\n}',
            css: '.has-unit {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.has-unit::after {\n  content: " (unit: px)";\n  font-size: 0.75rem;\n}\n\n.no-unit {\n  background: linear-gradient(135deg, #ec4899, #db2777);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.no-unit::after {\n  content: " (unitless: true)";\n  font-size: 0.75rem;\n}'
        },
        exists: {
            title: 'Variable Existence',
            html: '<div class="exists-demo">\n  <div class="defined">Variable Defined</div>\n  <div class="safe">Safe Fallback</div>\n</div>',
            scss: '// VARIABLE-EXISTS() - Check if variable exists\n$primary-color: #3b82f6;\n// $secondary-color is not defined\n\n// Check before using\n@if variable-exists(primary-color) {\n  .defined {\n    background: $primary-color;\n    color: white;\n    padding: 2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    &::after {\n      content: " (exists)";\n      font-size: 0.75rem;\n    }\n  }\n}\n\n// Safe fallback pattern\n.safe {\n  @if variable-exists(secondary-color) {\n    background: $secondary-color;\n  } @else {\n    background: #64748b; // fallback\n  }\n  \n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (fallback)";\n    font-size: 0.75rem;\n  }\n}\n\n// global-variable-exists() for global scope\n@if global-variable-exists(primary-color) {\n  .global-check {\n    display: block;\n  }\n}',
            css: '.defined {\n  background: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.defined::after {\n  content: " (exists)";\n  font-size: 0.75rem;\n}\n\n.safe {\n  background: #64748b;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.safe::after {\n  content: " (fallback)";\n  font-size: 0.75rem;\n}'
        },
        inspect: {
            title: 'Inspect & Debug',
            html: '<div class="inspect-demo">\n  <div class="debug-box">Inspected Value</div>\n</div>',
            scss: '// INSPECT() - Debug values\n$complex-value: (key1: value1, key2: value2);\n$color-value: rgba(59, 130, 246, 0.8);\n\n// Use inspect() for debugging\n.debug-box {\n  background: linear-gradient(135deg, #14b8a6, #0d9488);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  // Inspect converts to string representation\n  &::before {\n    content: "Type: #{type-of($complex-value)}";\n    display: block;\n    font-size: 0.75rem;\n    margin-bottom: 0.5rem;\n  }\n  \n  &::after {\n    content: "Inspected: #{inspect($complex-value)}";\n    display: block;\n    font-size: 0.75rem;\n    margin-top: 0.5rem;\n  }\n}\n\n// mixin-exists() & function-exists()\n@function test-function($value) {\n  @return $value * 2;\n}\n\n@mixin test-mixin {\n  color: red;\n}\n\n@if function-exists(test-function) {\n  .has-function {\n    padding: test-function(1rem); // 2rem\n  }\n}\n\n@if mixin-exists(test-mixin) {\n  .has-mixin {\n    @include test-mixin;\n  }\n}',
            css: '.debug-box {\n  background: linear-gradient(135deg, #14b8a6, #0d9488);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.debug-box::before {\n  content: "Type: map";\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.debug-box::after {\n  content: "Inspected: (key1: value1, key2: value2)";\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n}\n\n.has-function {\n  padding: 2rem;\n}\n\n.has-mixin {\n  color: red;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Search className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Sass Introspection Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Inspect, analyze, and validate data types, values, and code at compile time for safer, smarter stylesheets.</p>
            </div>

            <Card className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-violet-700 dark:text-violet-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        What is Introspection?
                    </CardTitle>
                    <CardDescription>
                        Introspection functions let you examine values, check types, verify existence, and debug code at compile time.
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
                    <CardTitle className="flex items-center gap-2"><Variable className="w-6 h-6" />Type System Visual</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { type: 'number', example: '16px', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' },
                            { type: 'string', example: '"hello"', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
                            { type: 'color', example: '#3b82f6', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' },
                            { type: 'list', example: '1px 2px', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' },
                            { type: 'map', example: '(key: val)', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' },
                            { type: 'bool', example: 'true', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300' }
                        ].map((item) => (
                            <div key={item.type} className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                                <Badge className={`${item.color} mb-2`}>{item.type}</Badge>
                                <code className="text-sm block">{item.example}</code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Function Categories</CardTitle>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-violet-600 to-purple-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-violet-500 bg-violet-50 dark:bg-violet-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Introspection Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Type Checking</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">type-of($value)</code>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Returns: number, string, color, list, map, bool, null</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Unit Functions</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">unit($number)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">unitless($number)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">comparable($num1, $num2)</code>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Existence Checks</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">variable-exists($name)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">global-variable-exists($name)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">function-exists($name)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">mixin-exists($name)</code>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Debug & Inspect</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">inspect($value)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">call($function, $args...)</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
