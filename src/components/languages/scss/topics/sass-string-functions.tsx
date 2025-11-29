'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Type, Code, Eye, EyeOff, Sparkles, Quote, Scissors, Search, Shuffle, RefreshCw, Copy, BookOpen } from 'lucide-react';
import React, { useState } from 'react';

export default function SassStringFunctions({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('quote');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Quote', icon: Quote, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Add/remove quotes', ex: 'quote(), unquote()' },
        { type: 'Manipulate', icon: Scissors, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Slice and insert', ex: 'str-slice(), str-insert()' },
        { type: 'Info', icon: Search, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Length and search', ex: 'str-length(), str-index()' },
        { type: 'Transform', icon: Shuffle, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Case conversion', ex: 'to-upper-case()' }
    ];

    const examples = {
        quote: {
            title: 'Quote & Unquote',
            html: '<div class="demo"><div class="box quoted">Quoted</div><div class="box unquoted">Unquoted</div></div>',
            scss: '$font: Helvetica;\n\n.quoted {\n  font-family: quote($font);\n  // Result: "Helvetica"\n  padding: 1rem;\n  background: #dbeafe;\n  border-radius: 8px;\n}\n\n.unquoted {\n  font-family: unquote("sans-serif");\n  // Result: sans-serif\n  padding: 1rem;\n  background: #dcfce7;\n  border-radius: 8px;\n}\n\n.demo { padding: 2rem; }',
            css: '.quoted {\n  font-family: "Helvetica";\n  padding: 1rem;\n  background: #dbeafe;\n  border-radius: 8px;\n}\n\n.unquoted {\n  font-family: sans-serif;\n  padding: 1rem;\n  background: #dcfce7;\n  border-radius: 8px;\n}'
        },
        slice: {
            title: 'String Slice & Insert',
            html: '<div class="demo"><div class="slice-box">Sliced</div><div class="insert-box">Inserted</div></div>',
            scss: '$text: "Hello World";\n\n.slice-box::before {\n  content: str-slice($text, 1, 5);\n  // Result: "Hello"\n}\n\n.slice-box {\n  padding: 1.5rem;\n  background: #8b5cf6;\n  color: white;\n  border-radius: 8px;\n}\n\n.insert-box::before {\n  content: str-insert("Hello", " Sass", 6);\n  // Result: "Hello Sass"\n}\n\n.insert-box {\n  padding: 1.5rem;\n  background: #ec4899;\n  color: white;\n  border-radius: 8px;\n}',
            css: '.slice-box::before {\n  content: "Hello";\n}\n\n.slice-box {\n  padding: 1.5rem;\n  background: #8b5cf6;\n  color: white;\n  border-radius: 8px;\n}\n\n.insert-box::before {\n  content: "Hello Sass";\n}\n\n.insert-box {\n  padding: 1.5rem;\n  background: #ec4899;\n  color: white;\n  border-radius: 8px;\n}'
        },
        case: {
            title: 'Case Transform',
            html: '<div class="demo"><div class="upper">Upper</div><div class="lower">Lower</div></div>',
            scss: '.upper::before {\n  content: to-upper-case("transform text");\n  // Result: "TRANSFORM TEXT"\n}\n\n.upper {\n  padding: 1.5rem;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  letter-spacing: 2px;\n}\n\n.lower::before {\n  content: to-lower-case("TRANSFORM TEXT");\n  // Result: "transform text"\n}\n\n.lower {\n  padding: 1.5rem;\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n}',
            css: '.upper::before {\n  content: "TRANSFORM TEXT";\n}\n\n.upper {\n  padding: 1.5rem;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  letter-spacing: 2px;\n}\n\n.lower::before {\n  content: "transform text";\n}\n\n.lower {\n  padding: 1.5rem;\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Type className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sass String Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master string manipulation and transformation for dynamic content generation.</p>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        String Manipulation Power
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
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />Categories</CardTitle>
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
                    <CardTitle className="flex items-center gap-2"><Play className="w-6 h-6" />Examples</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 mb-6">
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-purple-600 to-pink-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-purple-500 bg-purple-50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Quote</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">quote($string)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">unquote($string)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Manipulate</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">str-slice($str, $start, $end)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">str-insert($str, $insert, $index)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Info</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">str-length($string)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">str-index($str, $substr)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Transform</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">to-upper-case($string)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">to-lower-case($string)</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
