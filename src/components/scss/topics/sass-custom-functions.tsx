'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Code2, Code, Eye, EyeOff, Sparkles, ArrowRight, Calculator, Wand2, Copy, BookOpen, Zap, Package } from 'lucide-react';
import React, { useState } from 'react';

export default function SassCustomFunctions({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Unit Convert', icon: Calculator, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Convert units', ex: 'px-to-rem()' },
        { type: 'Color Utils', icon: Wand2, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Color helpers', ex: 'get-contrast()' },
        { type: 'String Utils', icon: Code2, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'String operations', ex: 'str-replace()' },
        { type: 'Math Utils', icon: Zap, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Math operations', ex: 'power(), clamp()' }
    ];

    const examples = {
        basic: {
            title: 'Basic Custom Function',
            html: '<div class="box">\n  <p class="text">Custom Function Result</p>\n</div>',
            scss: '// BASIC CUSTOM FUNCTION\n// Function definition\n@function multiply($value, $multiplier) {\n  @return $value * $multiplier;\n}\n\n// Using the function\n.box {\n  padding: multiply(1rem, 2);  // 2rem\n  margin: multiply(0.5rem, 3);  // 1.5rem\n  \n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n}\n\n// Function with default parameter\n@function spacing($multiplier: 1) {\n  $base: 0.5rem;\n  @return $base * $multiplier;\n}\n\n.text {\n  margin-bottom: spacing();     // 0.5rem (default)\n  padding: spacing(2);          // 1rem\n  font-size: spacing(3);        // 1.5rem\n  font-weight: 600;\n}',
            css: '.box {\n  padding: 2rem;\n  margin: 1.5rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.text {\n  margin-bottom: 0.5rem;\n  padding: 1rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n}'
        },
        unitconvert: {
            title: 'Unit Conversion Functions',
            html: '<div class="responsive-text">\n  <p>Responsive Typography</p>\n</div>',
            scss: '// UNIT CONVERSION FUNCTIONS\n// Convert px to rem\n@function px-to-rem($px, $base: 16px) {\n  @return ($px / $base) * 1rem;\n}\n\n// Convert rem to px\n@function rem-to-px($rem, $base: 16px) {\n  @return $rem * $base;\n}\n\n// Fluid typography calculator\n@function fluid-size($min, $max, $min-width: 320px, $max-width: 1200px) {\n  $slope: ($max - $min) / ($max-width - $min-width);\n  $intersection: $min - ($slope * $min-width);\n  @return calc(#{$intersection} + #{$slope * 100vw});\n}\n\n// Using conversion functions\n.responsive-text {\n  // Convert pixels to rem\n  font-size: px-to-rem(18px);        // 1.125rem\n  padding: px-to-rem(24px);          // 1.5rem\n  margin-bottom: px-to-rem(32px);    // 2rem\n  \n  // Fluid typography\n  font-size: fluid-size(1rem, 2rem);\n  \n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  border-radius: px-to-rem(12px);\n  text-align: center;\n  font-weight: 700;\n  \n  p {\n    margin: 0;\n  }\n}',
            css: '.responsive-text {\n  font-size: 1.125rem;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  font-size: calc(1rem + 0.001136vw);\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  border-radius: 0.75rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.responsive-text p {\n  margin: 0;\n}'
        },
        color: {
            title: 'Color Utility Functions',
            html: '<div class="color-demo">\n  <div class="light-bg">Light Background</div>\n  <div class="dark-bg">Dark Background</div>\n</div>',
            scss: '// COLOR UTILITY FUNCTIONS\n// Get contrasting text color\n@function get-contrast($color) {\n  $lightness: lightness($color);\n  \n  @if $lightness > 50% {\n    @return #1a202c;  // dark text\n  } @else {\n    @return #ffffff;  // light text\n  }\n}\n\n// Tint (mix with white)\n@function tint($color, $percentage) {\n  @return mix(white, $color, $percentage);\n}\n\n// Shade (mix with black)\n@function shade($color, $percentage) {\n  @return mix(black, $color, $percentage);\n}\n\n// Generate color palette\n@function color-palette($base, $variation: 10%) {\n  @return (\n    lighter: tint($base, $variation),\n    base: $base,\n    darker: shade($base, $variation)\n  );\n}\n\n// Using color functions\n$primary: #3b82f6;\n$secondary: #10b981;\n\n.light-bg {\n  background: tint($primary, 70%);\n  color: get-contrast(tint($primary, 70%));\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.dark-bg {\n  background: shade($secondary, 30%);\n  color: get-contrast(shade($secondary, 30%));\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}',
            css: '.light-bg {\n  background: #d4e4fd;\n  color: #1a202c;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.dark-bg {\n  background: #096a47;\n  color: #ffffff;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}'
        },
        advanced: {
            title: 'Advanced Utilities',
            html: '<div class="advanced-demo">\n  <div class="spacing-box">Advanced Functions</div>\n</div>',
            scss: '// ADVANCED UTILITY FUNCTIONS\n// String replacement\n@function str-replace($string, $search, $replace: "") {\n  $index: str-index($string, $search);\n  \n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + \n            str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n  \n  @return $string;\n}\n\n// Power function\n@function power($base, $exponent) {\n  $result: 1;\n  \n  @if $exponent > 0 {\n    @for $i from 1 through $exponent {\n      $result: $result * $base;\n    }\n  }\n  \n  @return $result;\n}\n\n// Modular scale\n@function modular-scale($step, $base: 1rem, $ratio: 1.5) {\n  @return $base * power($ratio, $step);\n}\n\n// Z-index management\n@function z($layer) {\n  $z-layers: (\n    modal: 1000,\n    overlay: 900,\n    dropdown: 800,\n    header: 700,\n    content: 1\n  );\n  \n  @return map-get($z-layers, $layer);\n}\n\n// Using advanced functions\n.spacing-box {\n  // Modular scale typography\n  font-size: modular-scale(2);      // 2.25rem\n  padding: modular-scale(1);        // 1.5rem\n  margin-bottom: modular-scale(0);  // 1rem\n  \n  // Z-index from function\n  z-index: z(dropdown);  // 800\n  \n  background: linear-gradient(135deg, #ec4899, #be185d);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}',
            css: '.spacing-box {\n  font-size: 2.25rem;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n  z-index: 800;\n  background: linear-gradient(135deg, #ec4899, #be185d);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Code2 className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Sass Custom Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Create reusable, powerful utility functions for calculations, conversions, and dynamic style generation.</p>
            </div>

            <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        What are Custom Functions?
                    </CardTitle>
                    <CardDescription>
                        Custom functions use @function and @return to create reusable calculations and transformations that return values.
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
                    <CardTitle className="flex items-center gap-2"><ArrowRight className="w-6 h-6" />Function Anatomy</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-indigo-200">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Function Structure</h3>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">@function</Badge>
                                        <span className="text-blue-600 dark:text-blue-400">name</span>
                                        <span>(</span>
                                        <span className="text-green-600 dark:text-green-400">$param</span>
                                        <span>) {'{'}</span>
                                    </div>
                                    <div className="ml-6">
                                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">@return</Badge>
                                        <span className="ml-2">$value;</span>
                                    </div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Real Example</h3>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">@function</Badge>
                                        <span className="text-blue-600 dark:text-blue-400">double</span>
                                        <span>(</span>
                                        <span className="text-green-600 dark:text-green-400">$num</span>
                                        <span>) {'{'}</span>
                                    </div>
                                    <div className="ml-6">
                                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">@return</Badge>
                                        <span className="ml-2">$num * 2;</span>
                                    </div>
                                    <div>{'}'}</div>
                                    <div className="mt-4 pt-4 border-t">
                                        <span className="text-gray-600 dark:text-gray-400">// Usage:</span>
                                    </div>
                                    <div>padding: <span className="text-blue-600 dark:text-blue-400">double(1rem)</span>; <span className="text-gray-500">// 2rem</span></div>
                                </div>
                            </div>
                        </div>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-indigo-600 to-blue-600">
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
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Function Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Key Principles</h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span><strong>Pure functions:</strong> Same input = same output</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span><strong>Single purpose:</strong> One function, one job</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span><strong>Type safety:</strong> Validate input types</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span><strong>Default values:</strong> Provide sensible defaults</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Common Patterns</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">// Unit conversions</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">// Color manipulations</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">// Mathematical calculations</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">// String operations</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded text-xs">// Map accessors</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Package className="w-6 h-6" />
                        Function Library Example
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{`// _functions.scss - Utility function library

// === UNIT CONVERSIONS ===
@function px-to-rem($px, $base: 16px) {
  @return ($px / $base) * 1rem;
}

// === COLOR UTILITIES ===
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

// === SPACING SYSTEM ===
@function spacing($multiplier: 1) {
  $base: 0.5rem;
  @return $base * $multiplier;
}

// === TYPOGRAPHY SCALE ===
@function font-size($step) {
  $scale: 1.25;
  $base: 1rem;
  @return $base * power($scale, $step);
}`}</pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
