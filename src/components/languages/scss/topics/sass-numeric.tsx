'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Calculator, Code, Eye, EyeOff, Sparkles, Hash, Percent, Ruler, Plus, Minus, X, Divide, RefreshCw, Copy, BookOpen, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';

export default function SassNumeric({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Basic Math', icon: Calculator, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Add, subtract, multiply, divide', ex: '+, -, *, /' },
        { type: 'Rounding', icon: TrendingUp, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Round numbers', ex: 'round(), ceil(), floor()' },
        { type: 'Min/Max', icon: Ruler, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Compare values', ex: 'min(), max()' },
        { type: 'Percentages', icon: Percent, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Convert to percentage', ex: 'percentage(), abs()' }
    ];

    const examples = {
        basic: {
            title: 'Basic Math Operations',
            html: '<div class="math-demo">\n  <div class="calc-box calc-add">Addition</div>\n  <div class="calc-box calc-sub">Subtraction</div>\n  <div class="calc-box calc-mul">Multiply</div>\n  <div class="calc-box calc-div">Division</div>\n</div>',
            scss: '// BASIC MATH OPERATIONS\n$base-size: 16px;\n$multiplier: 1.5;\n$total-width: 1200px;\n$columns: 4;\n\n.calc-add {\n  // Addition\n  padding: $base-size + 8px;  // 24px\n  margin: 10px + 5px;         // 15px\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n}\n\n.calc-sub {\n  // Subtraction\n  padding: $base-size - 4px;  // 12px\n  margin: 20px - 5px;         // 15px\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n}\n\n.calc-mul {\n  // Multiplication\n  font-size: $base-size * $multiplier;  // 24px\n  padding: $base-size * 0.75;           // 12px\n  background: #8b5cf6;\n  color: white;\n  border-radius: 8px;\n}\n\n.calc-div {\n  // Division\n  width: $total-width / $columns;  // 300px\n  padding: $base-size / 2;         // 8px\n  background: #f59e0b;\n  color: white;\n  border-radius: 8px;\n}\n\n.math-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.calc-add {\n  padding: 24px;\n  margin: 15px;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n}\n\n.calc-sub {\n  padding: 12px;\n  margin: 15px;\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n}\n\n.calc-mul {\n  font-size: 24px;\n  padding: 12px;\n  background: #8b5cf6;\n  color: white;\n  border-radius: 8px;\n}\n\n.calc-div {\n  width: 300px;\n  padding: 8px;\n  background: #f59e0b;\n  color: white;\n  border-radius: 8px;\n}'
        },
        rounding: {
            title: 'Rounding Functions',
            html: '<div class="round-demo">\n  <div class="round-box">Rounded</div>\n  <div class="ceil-box">Ceiling</div>\n  <div class="floor-box">Floor</div>\n  <div class="abs-box">Absolute</div>\n</div>',
            scss: '// ROUNDING FUNCTIONS\n$decimal: 100.7px;\n$negative: -25px;\n\n.round-box {\n  // round() - rounds to nearest\n  width: round($decimal);  // 101px\n  height: round(99.4px);   // 99px\n  \n  padding: 1.5rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - #{round($decimal)}";\n  }\n}\n\n.ceil-box {\n  // ceil() - rounds up\n  width: ceil(100.2px);   // 101px\n  height: ceil($decimal); // 101px\n  \n  padding: 1.5rem;\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - #{ceil($decimal)}";\n  }\n}\n\n.floor-box {\n  // floor() - rounds down\n  width: floor(100.9px);  // 100px\n  height: floor($decimal); // 100px\n  \n  padding: 1.5rem;\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - #{floor($decimal)}";\n  }\n}\n\n.abs-box {\n  // abs() - absolute value\n  width: abs($negative);  // 25px\n  padding: abs(-15px);    // 15px\n  \n  background: linear-gradient(135deg, #fa709a, #fee140);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - #{abs($negative)}";\n  }\n}\n\n.round-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.round-box {\n  width: 101px;\n  height: 99px;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.round-box::after {\n  content: " - 101px";\n}\n\n.ceil-box {\n  width: 101px;\n  height: 101px;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.ceil-box::after {\n  content: " - 101px";\n}\n\n.floor-box {\n  width: 100px;\n  height: 100px;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.floor-box::after {\n  content: " - 100px";\n}\n\n.abs-box {\n  width: 25px;\n  padding: 15px;\n  background: linear-gradient(135deg, #fa709a, #fee140);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.abs-box::after {\n  content: " - 25px";\n}'
        },
        minmax: {
            title: 'Min & Max Functions',
            html: '<div class="minmax-demo">\n  <div class="min-box">Minimum Value</div>\n  <div class="max-box">Maximum Value</div>\n  <div class="clamp-box">Responsive Size</div>\n</div>',
            scss: '// MIN & MAX FUNCTIONS\n$values: 100px, 200px, 150px, 300px;\n\n.min-box {\n  // min() - smallest value\n  width: min(100px, 200px, 150px);  // 100px\n  padding: min(1rem, 2rem);         // 1rem\n  \n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (#{min(100px, 200px, 150px)})";\n  }\n}\n\n.max-box {\n  // max() - largest value\n  width: max(100px, 200px, 150px);  // 200px\n  padding: max(1rem, 0.5rem);       // 1rem\n  \n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (#{max(100px, 200px, 150px)})";\n  }\n}\n\n.clamp-box {\n  // clamp() - value between min and max\n  width: clamp(200px, 50%, 600px);\n  // min: 200px, preferred: 50%, max: 600px\n  \n  padding: 1.5rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (responsive)";\n  }\n}\n\n.minmax-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.min-box {\n  width: 100px;\n  padding: 1rem;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.min-box::after {\n  content: " (100px)";\n}\n\n.max-box {\n  width: 200px;\n  padding: 1rem;\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.max-box::after {\n  content: " (200px)";\n}\n\n.clamp-box {\n  width: clamp(200px, 50%, 600px);\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.clamp-box::after {\n  content: " (responsive)";\n}'
        },
        percentage: {
            title: 'Percentage & Unit Conversion',
            html: '<div class="percent-demo">\n  <div class="percent-box">75%</div>\n  <div class="unit-box">Unit Convert</div>\n  <div class="unitless-box">No Units</div>\n</div>',
            scss: '// PERCENTAGE & UNIT FUNCTIONS\n$fraction: 0.75;\n$width-px: 100px;\n\n.percent-box {\n  // percentage() - convert to %\n  width: percentage($fraction);  // 75%\n  width: percentage(3/4);        // 75%\n  \n  padding: 1.5rem;\n  background: #8b5cf6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " = #{percentage($fraction)}";\n  }\n}\n\n.unit-box {\n  // Unit conversion with division\n  $base: 16px;\n  font-size: $width-px / $base * 1rem;  // Convert px to rem\n  // Result: 6.25rem\n  \n  padding: 1.5rem;\n  background: #ec4899;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.unitless-box {\n  // unitless() - check if has units\n  $value: 42;\n  $with-unit: 42px;\n  \n  @if unitless($value) {\n    line-height: $value;  // Can use as unitless\n  }\n  \n  padding: 1.5rem;\n  background: #f59e0b;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  line-height: 42;\n  \n  &::after {\n    content: " (unitless: #{unitless($value)})";\n  }\n}\n\n.percent-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.percent-box {\n  width: 75%;\n  padding: 1.5rem;\n  background: #8b5cf6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.percent-box::after {\n  content: " = 75%";\n}\n\n.unit-box {\n  font-size: 6.25rem;\n  padding: 1.5rem;\n  background: #ec4899;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.unitless-box {\n  padding: 1.5rem;\n  background: #f59e0b;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  line-height: 42;\n}\n\n.unitless-box::after {\n  content: " (unitless: true)";\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Calculator className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Sass Number & Math Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master mathematical operations and number manipulation for dynamic calculations.</p>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        Mathematical Power
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {categories.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div key={i} className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                    <Icon className={`w-8 h-8 ${c.color} mx-auto mb-2`} />
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
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Math Function Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        {categories.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div key={i} className={`p-4 rounded-lg border ${c.bgColor} ${c.borderColor}`}>
                                    <Icon className={`w-5 h-5 ${c.color} mb-2`} />
                                    <h3 className="font-bold text-sm mb-1">{c.type}</h3>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">{c.ex}</code>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-blue-600 to-cyan-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-blue-500 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Math Functions Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Rounding</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">round($number)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">ceil($number)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">floor($number)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Comparison</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">min($numbers...)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">max($numbers...)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">clamp($min, $val, $max)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Conversion</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">percentage($number)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">abs($number)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Unit Checking</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">unitless($number)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">unit($number)</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
