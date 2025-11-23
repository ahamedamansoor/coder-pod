'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Bug, Code, Eye, EyeOff, Sparkles, AlertTriangle, AlertCircle, Info, Copy, BookOpen, Terminal, Search } from 'lucide-react';
import React, { useState } from 'react';

export default function SassDebugging({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('debug');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: '@debug', icon: Terminal, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Print debug info', ex: '@debug $variable;' },
        { type: '@warn', icon: AlertTriangle, color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-950/20', borderColor: 'border-yellow-200', desc: 'Show warnings', ex: '@warn "Message";' },
        { type: '@error', icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-950/20', borderColor: 'border-red-200', desc: 'Stop compilation', ex: '@error "Error!";' },
        { type: 'inspect()', icon: Search, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Inspect values', ex: 'inspect($value)' }
    ];

    const examples = {
        debug: {
            title: '@debug Directive',
            html: '<div class="debug-demo">\n  <p>Check console for debug output</p>\n</div>',
            scss: '// @DEBUG DIRECTIVE\n// Debug prints to the terminal/console during compilation\n$primary-color: #3b82f6;\n$spacing-unit: 1rem;\n$breakpoints: (mobile: 320px, tablet: 768px, desktop: 1024px);\n\n// Basic debug\n@debug "Starting compilation...";\n@debug $primary-color;  // Prints: #3b82f6\n\n// Debug with context\n@debug "Spacing unit value: #{$spacing-unit}";\n\n// Debug complex structures\n@debug $breakpoints;\n// Output: (mobile: 320px, tablet: 768px, desktop: 1024px)\n\n// Debug in functions\n@function calculate-spacing($multiplier) {\n  $result: $spacing-unit * $multiplier;\n  @debug "Calculating: #{$spacing-unit} × #{$multiplier} = #{$result}";\n  @return $result;\n}\n\n.debug-demo {\n  padding: calculate-spacing(2);  // Debug: "Calculating: 1rem × 2 = 2rem"\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  \n  // Debug type checking\n  @debug type-of($primary-color);  // color\n  @debug type-of($spacing-unit);   // number\n}',
            css: '.debug-demo {\n  padding: 2rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n}\n\n/* Terminal Output:\n   "Starting compilation..."\n   #3b82f6\n   "Spacing unit value: 1rem"\n   (mobile: 320px, tablet: 768px, desktop: 1024px)\n   "Calculating: 1rem × 2 = 2rem"\n   color\n   number\n*/'
        },
        warn: {
            title: '@warn Directive',
            html: '<div class="warn-demo">\n  <p>Warnings appear in console</p>\n</div>',
            scss: '// @WARN DIRECTIVE\n// Warns about potential issues without stopping compilation\n\n@mixin button-variant($bg-color) {\n  background: $bg-color;\n  \n  // Warn about color lightness\n  @if lightness($bg-color) > 80% {\n    @warn "Background color #{$bg-color} is very light. Text may be hard to read.";\n  }\n  \n  @if lightness($bg-color) < 20% {\n    @warn "Background color #{$bg-color} is very dark. Consider lighter text.";\n  }\n}\n\n// Deprecation warning\n@mixin old-mixin() {\n  @warn "old-mixin() is deprecated. Use new-mixin() instead.";\n  padding: 1rem;\n}\n\n// Parameter validation warning\n@function validate-spacing($value) {\n  @if unit($value) != "rem" and unit($value) != "px" {\n    @warn "Spacing value #{$value} should use rem or px units.";\n  }\n  @return $value;\n}\n\n.warn-demo {\n  @include button-variant(#f0f0f0);  // Triggers lightness warning\n  padding: validate-spacing(2em);     // Triggers unit warning\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  color: #1f2937;\n}',
            css: '.warn-demo {\n  background: #f0f0f0;\n  padding: 2em;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n/* Console Warnings:\n   Warning: Background color #f0f0f0 is very light. Text may be hard to read.\n   Warning: Spacing value 2em should use rem or px units.\n*/'
        },
        error: {
            title: '@error Directive',
            html: '<div class="error-demo">\n  <p>Errors stop compilation</p>\n</div>',
            scss: '// @ERROR DIRECTIVE\n// Stops compilation and throws an error\n\n@function divide($a, $b) {\n  // Prevent division by zero\n  @if $b == 0 {\n    @error "Cannot divide by zero! Denominator is #{$b}";\n  }\n  @return $a / $b;\n}\n\n// Type checking with error\n@mixin require-color($color) {\n  @if type-of($color) != color {\n    @error "Expected color, got #{type-of($color)}: #{$color}";\n  }\n  background: $color;\n}\n\n// Required parameter validation\n@mixin grid-columns($columns: null) {\n  @if $columns == null {\n    @error "grid-columns() requires $columns parameter";\n  }\n  \n  @if type-of($columns) != number {\n    @error "$columns must be a number, got #{type-of($columns)}";\n  }\n  \n  grid-template-columns: repeat($columns, 1fr);\n}\n\n.error-demo {\n  padding: 2rem;\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  \n  // These would trigger errors if uncommented:\n  // width: divide(100%, 0);  // Error: Cannot divide by zero!\n  // @include require-color("red");  // Error: Expected color\n  // @include grid-columns();  // Error: requires parameter\n}',
            css: '.error-demo {\n  padding: 2rem;\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n}\n\n/* Example Errors:\n   Error: Cannot divide by zero! Denominator is 0\n   Error: Expected color, got string: "red"\n   Error: grid-columns() requires $columns parameter\n*/'
        },
        inspect: {
            title: 'inspect() Function',
            html: '<div class="inspect-demo">\n  <p>Inspect complex values</p>\n</div>',
            scss: '// INSPECT() FUNCTION\n// Returns string representation of any Sass value\n\n$colors: (primary: #3b82f6, secondary: #10b981, danger: #ef4444);\n$nested-map: (theme: (light: #fff, dark: #000), spacing: (sm: 0.5rem, md: 1rem));\n\n// Inspect complex values\n@debug inspect($colors);\n// Output: (primary: #3b82f6, secondary: #10b981, danger: #ef4444)\n\n// Use in generated content\n.inspect-demo {\n  // Show value in content (for debugging)\n  &::before {\n    content: "Map: " + inspect($colors);\n    display: block;\n    font-size: 0.75rem;\n    margin-bottom: 0.5rem;\n    opacity: 0.8;\n  }\n  \n  padding: 2rem;\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n}\n\n// Debug function to print value info\n@mixin debug-value($value, $name: "value") {\n  @debug "#{$name}: " + inspect($value);\n  @debug "  Type: " + type-of($value);\n  \n  @if type-of($value) == number {\n    @debug "  Unit: " + unit($value);\n  }\n}\n\n// Using debug mixin\n$test-spacing: 2rem;\n@include debug-value($test-spacing, "spacing");\n// Output:\n//   "spacing: 2rem"\n//   "  Type: number"\n//   "  Unit: rem"',
            css: '.inspect-demo {\n  padding: 2rem;\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.inspect-demo::before {\n  content: "Map: (primary: #3b82f6, secondary: #10b981, danger: #ef4444)";\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n\n/* Debug Output:\n   (primary: #3b82f6, secondary: #10b981, danger: #ef4444)\n   "spacing: 2rem"\n   "  Type: number"\n   "  Unit: rem"\n*/'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Bug className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Sass Debugging</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master debugging techniques with @debug, @warn, @error directives and inspection functions.</p>
            </div>

            <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        Debugging Directives
                    </CardTitle>
                    <CardDescription>
                        Use @debug, @warn, and @error to catch issues during compilation and inspect values.
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
                    <CardTitle className="flex items-center gap-2"><Info className="w-6 h-6" />Debugging Levels</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200">
                            <div className="flex items-center gap-2 mb-2">
                                <Terminal className="w-5 h-5 text-blue-600" />
                                <h3 className="font-semibold text-blue-700 dark:text-blue-300">@debug - Information</h3>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Prints messages to console without stopping compilation</p>
                            <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">@debug "Value: #{"{"}$var{"}"}";</code>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">@warn - Warning</h3>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Shows warnings but continues compilation</p>
                            <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">@warn "Deprecated feature";</code>
                        </div>
                        <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                                <h3 className="font-semibold text-red-700 dark:text-red-300">@error - Error</h3>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Stops compilation immediately with error message</p>
                            <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">@error "Invalid parameter";</code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Debugging Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-6 border border-blue-200">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Badge className="bg-blue-600 text-white">1</Badge>
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1">Identify Issue</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Check console for error messages and line numbers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Badge className="bg-blue-600 text-white">2</Badge>
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1">Add Debug Statements</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Use @debug to inspect variable values at different points</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Badge className="bg-blue-600 text-white">3</Badge>
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1">Test Solutions</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Make changes and verify output</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Badge className="bg-blue-600 text-white">4</Badge>
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1">Clean Up</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Remove debug statements before production</p>
                                </div>
                            </div>
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
                                <h3 className="font-semibold">CSS + Console Output</h3>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-red-600 to-orange-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-red-500 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Common Debugging Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Quick Debugging</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@debug $variable;</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@debug type-of($value);</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@debug inspect($complex);</code>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Validation</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@if $val == null @error ...</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@if type-of() != ... @warn ...</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">@if $dep @warn "Deprecated"</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
