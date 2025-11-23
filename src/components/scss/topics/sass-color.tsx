'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Palette, Code, Eye, EyeOff, Sparkles, Droplet, Blend, Lightbulb, Copy, BookOpen, Sun, Moon } from 'lucide-react';
import React, { useState } from 'react';

export default function SassColor({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('lighten');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Lighten/Darken', icon: Lightbulb, color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-950/20', borderColor: 'border-yellow-200', desc: 'Adjust brightness', ex: 'lighten(), darken()' },
        { type: 'Saturate', icon: Droplet, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Adjust saturation', ex: 'saturate(), desaturate()' },
        { type: 'Mix/Blend', icon: Blend, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Combine colors', ex: 'mix(), complement()' },
        { type: 'Adjust', icon: Palette, color: 'text-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-950/20', borderColor: 'border-pink-200', desc: 'Fine-tune colors', ex: 'adjust-hue(), scale()' }
    ];

    const examples = {
        lighten: {
            title: 'Lighten & Darken',
            html: '<div class="color-demo">\n  <div class="base-color">Base Color</div>\n  <div class="lighter-color">Lighter</div>\n  <div class="darker-color">Darker</div>\n</div>',
            scss: '// LIGHTEN & DARKEN FUNCTIONS\n$base-color: #3b82f6;  // Blue\n\n// Base color\n.base-color {\n  background: $base-color;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (#3b82f6)";\n    font-size: 0.75rem;\n    opacity: 0.9;\n  }\n}\n\n// lighten() - make color lighter\n.lighter-color {\n  background: lighten($base-color, 20%);\n  color: #1e40af;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (lighten 20%)";\n    font-size: 0.75rem;\n  }\n}\n\n// darken() - make color darker\n.darker-color {\n  background: darken($base-color, 20%);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (darken 20%)";\n    font-size: 0.75rem;\n  }\n}\n\n.color-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.base-color {\n  background: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.base-color::after {\n  content: " (#3b82f6)";\n  font-size: 0.75rem;\n  opacity: 0.9;\n}\n\n.lighter-color {\n  background: #93bbfd;\n  color: #1e40af;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.lighter-color::after {\n  content: " (lighten 20%)";\n  font-size: 0.75rem;\n}\n\n.darker-color {\n  background: #1e40af;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.darker-color::after {\n  content: " (darken 20%)";\n  font-size: 0.75rem;\n}'
        },
        saturate: {
            title: 'Saturate & Desaturate',
            html: '<div class="saturation-demo">\n  <div class="desaturated">Desaturated</div>\n  <div class="normal">Normal</div>\n  <div class="saturated">Saturated</div>\n</div>',
            scss: '// SATURATE & DESATURATE FUNCTIONS\n$color: #3b82f6;\n\n// desaturate() - reduce color intensity\n.desaturated {\n  background: desaturate($color, 40%);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (less vibrant)";\n    font-size: 0.75rem;\n  }\n}\n\n// Normal color\n.normal {\n  background: $color;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (original)";\n    font-size: 0.75rem;\n  }\n}\n\n// saturate() - increase color intensity\n.saturated {\n  background: saturate($color, 40%);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (more vibrant)";\n    font-size: 0.75rem;\n  }\n}\n\n.saturation-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.desaturated {\n  background: #5e7b9f;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.desaturated::after {\n  content: " (less vibrant)";\n  font-size: 0.75rem;\n}\n\n.normal {\n  background: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.normal::after {\n  content: " (original)";\n  font-size: 0.75rem;\n}\n\n.saturated {\n  background: #0066ff;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.saturated::after {\n  content: " (more vibrant)";\n  font-size: 0.75rem;\n}'
        },
        mix: {
            title: 'Mix & Blend Colors',
            html: '<div class="mix-demo">\n  <div class="color-a">Color A</div>\n  <div class="mixed">Mixed 50/50</div>\n  <div class="color-b">Color B</div>\n</div>',
            scss: '// MIX & BLEND FUNCTIONS\n$blue: #3b82f6;\n$red: #ef4444;\n\n.color-a {\n  background: $blue;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n// mix() - blend two colors\n.mixed {\n  background: mix($blue, $red, 50%);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (blue + red)";\n    font-size: 0.75rem;\n  }\n}\n\n.color-b {\n  background: $red;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n// Different mix ratios\n.mix-25 {\n  background: mix($blue, $red, 25%);\n  // 25% blue, 75% red\n}\n\n.mix-75 {\n  background: mix($blue, $red, 75%);\n  // 75% blue, 25% red\n}\n\n.mix-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.color-a {\n  background: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.mixed {\n  background: #97639d;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.mixed::after {\n  content: " (blue + red)";\n  font-size: 0.75rem;\n}\n\n.color-b {\n  background: #ef4444;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}'
        },
        adjust: {
            title: 'Adjust & Scale',
            html: '<div class="adjust-demo">\n  <div class="original">Original</div>\n  <div class="adjusted">Hue Adjusted</div>\n  <div class="scaled">Scaled</div>\n</div>',
            scss: '// ADJUST & SCALE FUNCTIONS\n$color: #3b82f6;\n\n.original {\n  background: $color;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n// adjust-hue() - shift hue on color wheel\n.adjusted {\n  background: adjust-hue($color, 120deg);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (+120deg hue)";\n    font-size: 0.75rem;\n  }\n}\n\n// scale-color() - scale properties\n.scaled {\n  background: scale-color(\n    $color,\n    $lightness: 30%,\n    $saturation: -20%\n  );\n  color: #1e40af;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (scaled)";\n    font-size: 0.75rem;\n  }\n}\n\n.adjust-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.original {\n  background: #3b82f6;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.adjusted {\n  background: #3bf68c;\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.adjusted::after {\n  content: " (+120deg hue)";\n  font-size: 0.75rem;\n}\n\n.scaled {\n  background: #7daee0;\n  color: #1e40af;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.scaled::after {\n  content: " (scaled)";\n  font-size: 0.75rem;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Palette className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Sass Color Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master color manipulation, blending, and transformation for dynamic, accessible color systems.</p>
            </div>

            <Card className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        Color Manipulation Power
                    </CardTitle>
                    <CardDescription>
                        Transform colors dynamically with powerful functions for creating themes, hover states, and accessible color palettes.
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
                    <CardTitle className="flex items-center gap-2"><Sun className="w-6 h-6" />Color Function Visual Guide</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-pink-700 dark:text-pink-300">Lightness Spectrum</h3>
                            <div className="space-y-2">
                                {[0, 20, 40, 60, 80].map((percent) => (
                                    <div key={percent} className="flex items-center gap-3">
                                        <div className="w-24 h-10 rounded" style={{ background: `hsl(221, 83%, ${50 + percent}%)` }}></div>
                                        <span className="text-sm font-mono">lighten({percent}%)</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-pink-700 dark:text-pink-300">Darkness Spectrum</h3>
                            <div className="space-y-2">
                                {[0, 20, 40, 60, 80].map((percent) => (
                                    <div key={percent} className="flex items-center gap-3">
                                        <div className="w-24 h-10 rounded" style={{ background: `hsl(221, 83%, ${50 - percent}%)` }}></div>
                                        <span className="text-sm font-mono">darken({percent}%)</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Color Function Categories</CardTitle>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-pink-600 to-rose-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-pink-500 bg-pink-50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Color Functions Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Lightness</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">lighten($color, $amount)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">darken($color, $amount)</code>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Saturation</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">saturate($color, $amount)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">desaturate($color, $amount)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">grayscale($color)</code>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Mixing & Blending</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">mix($color1, $color2, $weight)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">complement($color)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">invert($color)</code>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-pink-700 dark:text-pink-300">Advanced</h4>
                                <div className="space-y-2">
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">adjust-hue($color, $degrees)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">scale-color($color, ...)</code>
                                    <code className="block bg-white dark:bg-gray-800 p-2 rounded">adjust-color($color, ...)</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
