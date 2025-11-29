'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, List, Code, Eye, EyeOff, Sparkles, Layers, Link2, Search, Plus, Shuffle, Copy, BookOpen, Grid3x3 } from 'lucide-react';
import React, { useState } from 'react';

export default function SassList({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const categories = [
        { type: 'Access', icon: Search, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'border-blue-200', desc: 'Get list items', ex: 'nth(), length(), index()' },
        { type: 'Modify', icon: Plus, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200', desc: 'Add/change items', ex: 'append(), set-nth()' },
        { type: 'Combine', icon: Link2, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'border-purple-200', desc: 'Join lists', ex: 'join(), zip()' },
        { type: 'Iterate', icon: Shuffle, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'border-orange-200', desc: 'Loop through items', ex: '@each $item in $list' }
    ];

    const examples = {
        basic: {
            title: 'List Access & Info',
            html: '<div class="list-demo">\n  <div class="item item-1">Item 1</div>\n  <div class="item item-2">Item 2</div>\n  <div class="item item-3">Item 3</div>\n  <div class="item item-last">Last Item</div>\n</div>',
            scss: '// LIST ACCESS & INFO FUNCTIONS\n$colors: #3b82f6, #10b981, #f59e0b, #ef4444;\n$sizes: 1rem, 1.5rem, 2rem, 2.5rem;\n\n// length() - get list length\n$color-count: length($colors);  // 4\n\n// nth() - access specific item (1-indexed)\n.item-1 {\n  background: nth($colors, 1);  // #3b82f6\n  padding: nth($sizes, 1);      // 1rem\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (#{length($colors)} items)";\n  }\n}\n\n.item-2 {\n  background: nth($colors, 2);  // #10b981\n  padding: nth($sizes, 2);      // 1.5rem\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.item-3 {\n  background: nth($colors, 3);  // #f59e0b\n  padding: nth($sizes, 3);      // 2rem\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n// Access last item with negative index\n.item-last {\n  background: nth($colors, -1);  // Last: #ef4444\n  padding: nth($sizes, -1);      // Last: 2.5rem\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n// index() - find position of item\n$position: index($colors, #10b981);  // 2\n\n.list-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.item-1 {\n  background: #3b82f6;\n  padding: 1rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.item-1::after {\n  content: " (4 items)";\n}\n\n.item-2 {\n  background: #10b981;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.item-3 {\n  background: #f59e0b;\n  padding: 2rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.item-last {\n  background: #ef4444;\n  padding: 2.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}'
        },
        modify: {
            title: 'List Modification',
            html: '<div class="modify-demo">\n  <div class="append-box">Appended</div>\n  <div class="prepend-box">Prepended</div>\n  <div class="set-box">Modified</div>\n</div>',
            scss: '// LIST MODIFICATION FUNCTIONS\n$base-list: 10px, 20px, 30px;\n\n// append() - add to end\n$appended: append($base-list, 40px);\n// Result: 10px, 20px, 30px, 40px\n\n.append-box {\n  padding: nth($appended, 4);  // 40px\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - #{length($appended)} items";\n  }\n}\n\n// append with comma separator\n$colors: red, blue;\n$more-colors: append($colors, green, comma);\n// Result: red, blue, green\n\n.prepend-box {\n  // Prepend by joining\n  $prepended: join(5px, $base-list);\n  padding: nth($prepended, 1);  // 5px\n  \n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - prepended";\n  }\n}\n\n// set-nth() - replace specific item\n$modified: set-nth($base-list, 2, 25px);\n// Changes 20px to 25px\n// Result: 10px, 25px, 30px\n\n.set-box {\n  padding: nth($modified, 2);  // 25px (modified)\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - modified item";\n  }\n}\n\n.modify-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.append-box {\n  padding: 40px;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.append-box::after {\n  content: " - 4 items";\n}\n\n.prepend-box {\n  padding: 5px;\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.prepend-box::after {\n  content: " - prepended";\n}\n\n.set-box {\n  padding: 25px;\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.set-box::after {\n  content: " - modified item";\n}'
        },
        combine: {
            title: 'Combining Lists',
            html: '<div class="combine-demo">\n  <div class="join-box">Joined</div>\n  <div class="zip-box">Zipped</div>\n  <div class="separator-box">Custom Separator</div>\n</div>',
            scss: '// LIST COMBINING FUNCTIONS\n$list1: 10px, 20px, 30px;\n$list2: 40px, 50px;\n\n// join() - combine two lists\n$joined: join($list1, $list2);\n// Result: 10px, 20px, 30px, 40px, 50px\n\n.join-box {\n  padding: nth($joined, 1) nth($joined, 4);\n  // padding: 10px 40px\n  \n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " (#{length($joined)} total)";\n  }\n}\n\n// zip() - combine multiple lists into nested list\n$names: header, main, footer;\n$colors: #3b82f6, #10b981, #f59e0b;\n$zipped: zip($names, $colors);\n// Result: (header #3b82f6), (main #10b981), (footer #f59e0b)\n\n.zip-box {\n  // Access nested list items\n  $first-pair: nth($zipped, 1);  // (header #3b82f6)\n  $color: nth($first-pair, 2);   // #3b82f6\n  \n  background: $color;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  \n  &::after {\n    content: " - #{nth($first-pair, 1)}";\n  }\n}\n\n// join with separator\n$spaced: join($list1, $list2, space);\n$comma-separated: join($list1, $list2, comma);\n\n.separator-box {\n  $values: 1rem, 1.5rem, 2rem;\n  padding: nth($values, 1) nth($values, 2);\n  \n  background: linear-gradient(135deg, #fa709a, #fee140);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.combine-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.join-box {\n  padding: 10px 40px;\n  background: #3b82f6;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.join-box::after {\n  content: " (5 total)";\n}\n\n.zip-box {\n  background: #3b82f6;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.zip-box::after {\n  content: " - header";\n}\n\n.separator-box {\n  padding: 1rem 1.5rem;\n  background: linear-gradient(135deg, #fa709a, #fee140);\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}'
        },
        iterate: {
            title: 'List Iteration with @each',
            html: '<div class="iterate-demo">\n  <div class="color-blue">Blue</div>\n  <div class="color-green">Green</div>\n  <div class="color-yellow">Yellow</div>\n  <div class="color-red">Red</div>\n</div>',
            scss: '// LIST ITERATION WITH @EACH\n$colors: (\n  blue: #3b82f6,\n  green: #10b981,\n  yellow: #f59e0b,\n  red: #ef4444\n);\n\n// Iterate over map (list of pairs)\n@each $name, $color in $colors {\n  .color-#{$name} {\n    background: $color;\n    padding: 1.5rem;\n    color: white;\n    border-radius: 8px;\n    text-align: center;\n    font-weight: 700;\n    \n    &:hover {\n      background: darken($color, 10%);\n      transform: translateY(-2px);\n    }\n  }\n}\n\n// Iterate over simple list\n$sizes: small, medium, large;\n\n@each $size in $sizes {\n  .size-#{$size} {\n    @if $size == small {\n      padding: 0.5rem;\n      font-size: 0.875rem;\n    } @else if $size == medium {\n      padding: 1rem;\n      font-size: 1rem;\n    } @else if $size == large {\n      padding: 1.5rem;\n      font-size: 1.25rem;\n    }\n  }\n}\n\n// Multiple assignment\n$icons: (home 16px), (user 20px), (settings 24px);\n\n@each $name, $size in $icons {\n  .icon-#{$name} {\n    width: $size;\n    height: $size;\n    display: inline-block;\n  }\n}\n\n.iterate-demo {\n  display: grid;\n  gap: 1rem;\n  padding: 2rem;\n}',
            css: '.color-blue {\n  background: #3b82f6;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.color-blue:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}\n\n.color-green {\n  background: #10b981;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.color-green:hover {\n  background: #059669;\n  transform: translateY(-2px);\n}\n\n.color-yellow {\n  background: #f59e0b;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.color-yellow:hover {\n  background: #d97706;\n  transform: translateY(-2px);\n}\n\n.color-red {\n  background: #ef4444;\n  padding: 1.5rem;\n  color: white;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.color-red:hover {\n  background: #dc2626;\n  transform: translateY(-2px);\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <List className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Sass List Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Master list manipulation, iteration, and combination for dynamic stylesheet generation.</p>
            </div>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Sparkles className="w-6 h-6 animate-bounce" />
                        List Processing Power
                    </CardTitle>
                    <CardDescription>
                        Lists are collections of values that can be manipulated, combined, and iterated for dynamic styles.
                    </CardDescription>
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
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6" />List Function Categories</CardTitle>
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
                        <Button onClick={() => onOpenWebPlayground(examples[selectedExample as keyof typeof examples].html, examples[selectedExample as keyof typeof examples].scss, '')} className="bg-gradient-to-r from-green-600 to-emerald-600">
                            <Play className="w-4 h-4 mr-2" />Try Playground
                        </Button>
                        <Button variant="outline" onClick={() => navigator.clipboard.writeText(examples[selectedExample as keyof typeof examples].scss)}>
                            <Copy className="w-4 h-4 mr-2" />Copy
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-green-500 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />List Functions Reference</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Access</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">nth($list, $index)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">length($list)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">index($list, $value)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Modify</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">append($list, $val)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">set-nth($list, $n, $val)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">list-separator($list)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Combine</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">join($list1, $list2)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">zip($lists...)</code>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Check</h4>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded mb-1">is-bracketed($list)</code>
                            <code className="block bg-white dark:bg-gray-800 p-2 rounded">list-separator($list)</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
