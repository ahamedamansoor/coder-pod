'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Sparkles, Target, Code, Settings, Layers, 
    CheckCircle, AlertTriangle, FileText, Folder, 
    Monitor, Smartphone, Tablet, Grid, Box,
    Zap, RefreshCw, Sun, Moon, Paintbrush, 
    TreePine, Network, Component, Puzzle,
    ArrowRight, ArrowDown, Users, Shield,
    Wrench, Activity, Eye, MousePointer,
    Hash, Sliders, Palette, Gem, Star
} from 'lucide-react';

interface SassScssIntroductionProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function SassScssIntroduction({ onOpenWebPlayground }: SassScssIntroductionProps) {
    const [selectedFeature, setSelectedFeature] = useState('variables');
    const [selectedSyntax, setSelectedSyntax] = useState('scss');

    // Sass Features
    const sassFeatures = [
        {
            id: 'variables',
            name: 'Variables',
            icon: Hash,
            description: 'Store and reuse values throughout your stylesheets',
            difficulty: 'Easy',
            usefulness: 'High',
            color: 'blue'
        },
        {
            id: 'nesting',
            name: 'Nesting',
            icon: TreePine,
            description: 'Write CSS selectors inside other selectors',
            difficulty: 'Easy',
            usefulness: 'High',
            color: 'green'
        },
        {
            id: 'mixins',
            name: 'Mixins',
            icon: Component,
            description: 'Create reusable groups of CSS declarations',
            difficulty: 'Medium',
            usefulness: 'High',
            color: 'purple'
        },
        {
            id: 'functions',
            name: 'Functions',
            icon: Zap,
            description: 'Create custom functions for calculations and logic',
            difficulty: 'Hard',
            usefulness: 'Medium',
            color: 'orange'
        },
        {
            id: 'partials',
            name: 'Partials & Import',
            icon: Folder,
            description: 'Split CSS into multiple files and import them',
            difficulty: 'Easy',
            usefulness: 'High',
            color: 'teal'
        },
        {
            id: 'inheritance',
            name: 'Inheritance',
            icon: Network,
            description: 'Share styles between selectors with @extend',
            difficulty: 'Medium',
            usefulness: 'Medium',
            color: 'pink'
        }
    ];

    // Syntax Comparison
    const syntaxExamples = {
        scss: {
            name: 'SCSS (Sassy CSS)',
            extension: '.scss',
            description: 'CSS-like syntax with braces and semicolons',
            example: `$primary-color: #3498db;
$margin: 20px;

.button {
  background-color: $primary-color;
  margin: $margin;
  
  ${'&'}:hover {
    background-color: darken($primary-color, 10%);
  }
}`
        },
        sass: {
            name: 'Sass (Indented Syntax)',
            extension: '.sass',
            description: 'Indentation-based syntax without braces',
            example: `$primary-color: #3498db
$margin: 20px

.button
  background-color: $primary-color
  margin: $margin
  
  ${'&'}:hover
    background-color: darken($primary-color, 10%)`
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Gem className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass/SCSS Introduction</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    An introduction to CSS with superpowers - variables, nesting, mixins, and more!
                </p>
            </div>

            {/* Interactive Sass/SCSS Playground */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Gem className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        Interactive Sass/SCSS Playground
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        Explore CSS with superpowers through interactive examples, live demos, and practical implementations.
                    </CardDescription>
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <Button 
                            variant={selectedFeature === 'variables' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('variables')}
                            className="flex items-center gap-2"
                        >
                            <Hash className="w-4 h-4" />
                            Variables
                        </Button>
                        <Button 
                            variant={selectedFeature === 'nesting' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('nesting')}
                            className="flex items-center gap-2"
                        >
                            <TreePine className="w-4 h-4" />
                            Nesting
                        </Button>
                        <Button 
                            variant={selectedFeature === 'mixins' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('mixins')}
                            className="flex items-center gap-2"
                        >
                            <Component className="w-4 h-4" />
                            Mixins
                        </Button>
                        <Button 
                            variant={selectedFeature === 'functions' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('functions')}
                            className="flex items-center gap-2"
                        >
                            <Zap className="w-4 h-4" />
                            Functions
                        </Button>
                        <Button 
                            variant={selectedFeature === 'partials' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('partials')}
                            className="flex items-center gap-2"
                        >
                            <Folder className="w-4 h-4" />
                            Partials
                        </Button>
                        <Button 
                            variant={selectedFeature === 'inheritance' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedFeature('inheritance')}
                            className="flex items-center gap-2"
                        >
                            <Network className="w-4 h-4" />
                            Inheritance
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* What is Sass/SCSS */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎯 CSS vs Sass/SCSS Comparison
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🏚️ Regular CSS</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2 text-xs">
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">No variables</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Repetitive code</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">Hard to maintain</div>
                                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">No functions</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Limited & Repetitive</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">✨ Sass/SCSS</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2 text-xs">
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Variables & mixins</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">DRY principle</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Easy maintenance</div>
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Built-in functions</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Powerful & Efficient</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🚀 Sass Superpowers
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Sass adds programming features to CSS: variables, nesting, mixins, functions, and more!
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Code className="w-5 h-5" />
                                    📝 Syntax Comparison
                                </h4>
                                
                                <div className="space-y-4">
                                    <div className="flex gap-2 mb-4">
                                        <Button 
                                            variant={selectedSyntax === 'scss' ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => setSelectedSyntax('scss')}
                                        >
                                            SCSS
                                        </Button>
                                        <Button 
                                            variant={selectedSyntax === 'sass' ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => setSelectedSyntax('sass')}
                                        >
                                            Sass
                                        </Button>
                                    </div>
                                    
                                    <div className="bg-gray-900 rounded-lg p-4">
                                        <div className="text-sm text-gray-300 mb-2">
                                            {syntaxExamples[selectedSyntax as keyof typeof syntaxExamples].name} ({syntaxExamples[selectedSyntax as keyof typeof syntaxExamples].extension})
                                        </div>
                                        <div className="text-xs text-gray-400 mb-3">
                                            {syntaxExamples[selectedSyntax as keyof typeof syntaxExamples].description}
                                        </div>
                                        <pre className="text-sm text-white font-mono overflow-x-auto">
                                            {syntaxExamples[selectedSyntax as keyof typeof syntaxExamples].example}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sass Benefits */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2">💎</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Sass Benefits</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            DRY Code
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better Organization
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Powerful Features
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Easy Maintenance
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Start with SCSS syntax - it's easier to learn and more CSS-like!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Sass Features Deep Dive */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Star className="w-5 h-5" />
                        Essential Sass Features
                    </CardTitle>
                    <CardDescription>
                        Master the core features that make Sass a powerful CSS preprocessor.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {sassFeatures.map((feature) => (
                                <div 
                                    key={feature.id}
                                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        selectedFeature === feature.id
                                            ? 'border-green-500 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedFeature(feature.id)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <feature.icon className={`w-8 h-8 text-${feature.color}-500`} />
                                        <div>
                                            <h3 className="font-bold text-lg">{feature.name}</h3>
                                            <div className="flex gap-2">
                                                <Badge variant="secondary" className={`bg-${feature.color}-100 text-${feature.color}-800`}>
                                                    {feature.difficulty}
                                                </Badge>
                                                <Badge variant="outline">
                                                    {feature.usefulness} Value
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Variables Deep Dive */}
                        {selectedFeature === 'variables' && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200">
                                <h4 className="font-semibold mb-4 text-blue-700 dark:text-blue-300">💎 Variables in Action</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium mb-2 text-green-600">✅ With Variables (Sass)</div>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                            <div className="text-blue-400">$primary-color: #3498db;</div>
                                            <div className="text-blue-400">$font-size: 16px;</div>
                                            <div className="text-blue-400">$margin: 20px;</div>
                                            <br />
                                            <div><span className="text-yellow-400">.button</span> {`{`}</div>
                                            <div>  <span className="text-green-400">color</span>: <span className="text-blue-400">$primary-color</span>;</div>
                                            <div>  <span className="text-green-400">font-size</span>: <span className="text-blue-400">$font-size</span>;</div>
                                            <div>  <span className="text-green-400">margin</span>: <span className="text-blue-400">$margin</span>;</div>
                                            <div>{`}`}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium mb-2 text-red-600">❌ Without Variables (CSS)</div>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                            <div><span className="text-yellow-400">.button</span> {`{`}</div>
                                            <div>  <span className="text-green-400">color</span>: <span className="text-red-400">#3498db</span>;</div>
                                            <div>  <span className="text-green-400">font-size</span>: <span className="text-red-400">16px</span>;</div>
                                            <div>  <span className="text-green-400">margin</span>: <span className="text-red-400">20px</span>;</div>
                                            <div>{`}`}</div>
                                            <br />
                                            <div className="text-gray-500">/* Repeat everywhere... */</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Nesting Deep Dive */}
                        {selectedFeature === 'nesting' && (
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200">
                                <h4 className="font-semibold mb-4 text-green-700 dark:text-green-300">🌳 Nesting Structure</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium mb-2">Sass Nesting</div>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                            <div><span className="text-yellow-400">.nav</span> {`{`}</div>
                                            <div>  <span className="text-green-400">background</span>: <span className="text-blue-400">$nav-bg</span>;</div>
                                            <br />
                                            <div>  <span className="text-yellow-400">ul</span> {`{`}</div>
                                            <div>    <span className="text-green-400">list-style</span>: <span className="text-red-400">none</span>;</div>
                                            <div>  {`}`}</div>
                                            <br />
                                            <div>  <span className="text-yellow-400">li</span> {`{`}</div>
                                            <div>    <span className="text-green-400">display</span>: <span className="text-red-400">inline-block</span>;</div>
                                            <br />
                                            <div>    <span className="text-yellow-400">{'&:hover'}</span> {`{`}</div>
                                            <div>      <span className="text-green-400">background</span>: <span className="text-blue-400">$hover-bg</span>;</div>
                                            <div>    {`}`}</div>
                                            <div>  {`}`}</div>
                                            <div>{`}`}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium mb-2">Compiled CSS</div>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                            <div><span className="text-yellow-400">.nav</span> {`{`}</div>
                                            <div>  <span className="text-green-400">background</span>: <span className="text-blue-400">#333</span>;</div>
                                            <div>{`}`}</div>
                                            <br />
                                            <div><span className="text-yellow-400">.nav ul</span> {`{`}</div>
                                            <div>  <span className="text-green-400">list-style</span>: <span className="text-red-400">none</span>;</div>
                                            <div>{`}`}</div>
                                            <br />
                                            <div><span className="text-yellow-400">.nav li</span> {`{`}</div>
                                            <div>  <span className="text-green-400">display</span>: <span className="text-red-400">inline-block</span>;</div>
                                            <div>{`}`}</div>
                                            <br />
                                            <div><span className="text-yellow-400">.nav li:hover</span> {`{`}</div>
                                            <div>  <span className="text-green-400">background</span>: <span className="text-blue-400">#555</span>;</div>
                                            <div>{`}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Mixins Deep Dive */}
                        {selectedFeature === 'mixins' && (
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200">
                                <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300">🧩 Mixins - Reusable Code Blocks</h4>
                                <div className="space-y-4">
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div className="text-gray-400">// Define a mixin</div>
                                        <div><span className="text-purple-400">@mixin</span> <span className="text-yellow-400">button-style</span>(<span className="text-blue-400">$bg-color</span>, <span className="text-blue-400">$text-color</span>) {`{`}</div>
                                        <div>  <span className="text-green-400">background-color</span>: <span className="text-blue-400">$bg-color</span>;</div>
                                        <div>  <span className="text-green-400">color</span>: <span className="text-blue-400">$text-color</span>;</div>
                                        <div>  <span className="text-green-400">padding</span>: <span className="text-red-400">10px 20px</span>;</div>
                                        <div>  <span className="text-green-400">border</span>: <span className="text-red-400">none</span>;</div>
                                        <div>  <span className="text-green-400">border-radius</span>: <span className="text-red-400">4px</span>;</div>
                                        <div>  <span className="text-green-400">cursor</span>: <span className="text-red-400">pointer</span>;</div>
                                        <div>{`}`}</div>
                                        <br />
                                        <div className="text-gray-400">// Use the mixin</div>
                                        <div><span className="text-yellow-400">.primary-btn</span> {`{`}</div>
                                        <div>  <span className="text-purple-400">@include</span> <span className="text-yellow-400">button-style</span>(<span className="text-blue-400">#007bff</span>, <span className="text-blue-400">white</span>);</div>
                                        <div>{`}`}</div>
                                        <br />
                                        <div><span className="text-yellow-400">.danger-btn</span> {`{`}</div>
                                        <div>  <span className="text-purple-400">@include</span> <span className="text-yellow-400">button-style</span>(<span className="text-blue-400">#dc3545</span>, <span className="text-blue-400">white</span>);</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Functions Deep Dive */}
                        {selectedFeature === 'functions' && (
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200">
                                <h4 className="font-semibold mb-4 text-orange-700 dark:text-orange-300">⚡ Functions - Custom Logic</h4>
                                <div className="space-y-4">
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div className="text-gray-400">// Custom function</div>
                                        <div><span className="text-purple-400">@function</span> <span className="text-yellow-400">calculate-rem</span>(<span className="text-blue-400">$size</span>) {`{`}</div>
                                        <div>  <span className="text-purple-400">@return</span> <span className="text-blue-400">$size</span> / <span className="text-red-400">16px</span> * <span className="text-red-400">1rem</span>;</div>
                                        <div>{`}`}</div>
                                        <br />
                                        <div className="text-gray-400">// Built-in functions</div>
                                        <div><span className="text-yellow-400">.example</span> {`{`}</div>
                                        <div>  <span className="text-green-400">color</span>: <span className="text-yellow-400">darken</span>(<span className="text-blue-400">$primary</span>, <span className="text-red-400">10%</span>);</div>
                                        <div>  <span className="text-green-400">font-size</span>: <span className="text-yellow-400">calculate-rem</span>(<span className="text-red-400">24px</span>);</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Partials Deep Dive */}
                        {selectedFeature === 'partials' && (
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border border-teal-200">
                                <h4 className="font-semibold mb-4 text-teal-700 dark:text-teal-300">📁 Partials & File Organization</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium mb-2">File Structure</div>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                            <div className="text-gray-400">scss/</div>
                                            <div className="text-blue-400 ml-2">├── abstracts/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── _variables.scss</div>
                                            <div className="text-yellow-400 ml-4">│   ├── _mixins.scss</div>
                                            <div className="text-yellow-400 ml-4">│   └── _functions.scss</div>
                                            <div className="text-green-400 ml-2">├── base/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── _reset.scss</div>
                                            <div className="text-yellow-400 ml-4">│   └── _typography.scss</div>
                                            <div className="text-orange-400 ml-2">├── components/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── _buttons.scss</div>
                                            <div className="text-yellow-400 ml-4">│   └── _cards.scss</div>
                                            <div className="text-red-400 ml-2">├── layout/</div>
                                            <div className="text-yellow-400 ml-4">│   ├── _header.scss</div>
                                            <div className="text-yellow-400 ml-4">│   └── _footer.scss</div>
                                            <div className="text-purple-400 ml-2">└── main.scss</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium mb-2">Main.scss</div>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                            <div className="text-gray-400">// Abstracts</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'abstracts/variables'</span>;</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'abstracts/mixins'</span>;</div>
                                            <br />
                                            <div className="text-gray-400">// Base</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'base/reset'</span>;</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'base/typography'</span>;</div>
                                            <br />
                                            <div className="text-gray-400">// Components</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'components/buttons'</span>;</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'components/cards'</span>;</div>
                                            <br />
                                            <div className="text-gray-400">// Layout</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'layout/header'</span>;</div>
                                            <div><span className="text-purple-400">@use</span> <span className="text-green-400">'layout/footer'</span>;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Inheritance Deep Dive */}
                        {selectedFeature === 'inheritance' && (
                            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border border-pink-200">
                                <h4 className="font-semibold mb-4 text-pink-700 dark:text-pink-300">🔗 Inheritance with @extend</h4>
                                <div className="space-y-4">
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div className="text-gray-400">// Base placeholder</div>
                                        <div><span className="text-yellow-400">%button-base</span> {`{`}</div>
                                        <div>  <span className="text-green-400">padding</span>: <span className="text-red-400">0.75rem 1.5rem</span>;</div>
                                        <div>  <span className="text-green-400">border</span>: <span className="text-red-400">none</span>;</div>
                                        <div>  <span className="text-green-400">border-radius</span>: <span className="text-red-400">4px</span>;</div>
                                        <div>  <span className="text-green-400">cursor</span>: <span className="text-red-400">pointer</span>;</div>
                                        <div>  <span className="text-green-400">font-weight</span>: <span className="text-red-400">bold</span>;</div>
                                        <div>{`}`}</div>
                                        <br />
                                        <div className="text-gray-400">// Extend the base</div>
                                        <div><span className="text-yellow-400">.btn-primary</span> {`{`}</div>
                                        <div>  <span className="text-purple-400">@extend</span> <span className="text-yellow-400">%button-base</span>;</div>
                                        <div>  <span className="text-green-400">background</span>: <span className="text-blue-400">$primary-color</span>;</div>
                                        <div>  <span className="text-green-400">color</span>: <span className="text-red-400">white</span>;</div>
                                        <div>{`}`}</div>
                                        <br />
                                        <div><span className="text-yellow-400">.btn-secondary</span> {`{`}</div>
                                        <div>  <span className="text-purple-400">@extend</span> <span className="text-yellow-400">%button-base</span>;</div>
                                        <div>  <span className="text-green-400">background</span>: <span className="text-blue-400">$secondary-color</span>;</div>
                                        <div>  <span className="text-green-400">color</span>: <span className="text-red-400">white</span>;</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Complete Sass/SCSS Learning Path */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Target className="w-5 h-5" />
                        Complete Sass/SCSS Learning Path
                    </CardTitle>
                    <CardDescription>
                        A comprehensive learning journey from absolute beginner to expert level Sass development with all essential topics.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Beginner Level - Foundation */}
                        <div>
                            <h4 className="font-semibold mb-6 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Badge className="bg-green-500 text-white">Level 1</Badge>
                                🌱 Beginner - Foundation Topics
                            </h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium mb-3 text-green-700 dark:text-green-300">1. Getting Started</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• What is Sass/SCSS?</li>
                                        <li>• Installation methods</li>
                                        <li>• Dart Sass vs Node Sass</li>
                                        <li>• Command line basics</li>
                                        <li>• VS Code setup</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium mb-3 text-green-700 dark:text-green-300">2. Syntax Fundamentals</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• SCSS vs Sass syntax</li>
                                        <li>• File extensions (.scss/.sass)</li>
                                        <li>• Comments (// vs /* */)</li>
                                        <li>• Compilation process</li>
                                        <li>• Error handling</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium mb-3 text-green-700 dark:text-green-300">3. Variables Basics</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Variable declaration ($)</li>
                                        <li>• Data types (strings, numbers, colors)</li>
                                        <li>• Variable scope</li>
                                        <li>• Default values (!default)</li>
                                        <li>• Global vs local variables</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium mb-3 text-green-700 dark:text-green-300">4. Nesting Fundamentals</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Basic nesting rules</li>
                                        <li>• Parent selector (&)</li>
                                        <li>• Pseudo-classes & pseudo-elements</li>
                                        <li>• Nesting best practices</li>
                                        <li>• Avoiding over-nesting</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium mb-3 text-green-700 dark:text-green-300">5. Basic Operations</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Math operations (+, -, *, /)</li>
                                        <li>• String concatenation</li>
                                        <li>• Color operations</li>
                                        <li>• Comparison operators</li>
                                        <li>• Boolean operations</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium mb-3 text-green-700 dark:text-green-300">6. File Organization</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Partial files (_filename.scss)</li>
                                        <li>• @import directive</li>
                                        <li>• Basic folder structure</li>
                                        <li>• Main.scss file</li>
                                        <li>• Watch mode setup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Intermediate Level - Building Skills */}
                        <div>
                            <h4 className="font-semibold mb-6 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Badge className="bg-blue-500 text-white">Level 2</Badge>
                                🚀 Intermediate - Building Skills
                            </h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200">
                                    <h5 className="font-medium mb-3 text-blue-700 dark:text-blue-300">7. Mixins Mastery</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Creating mixins (@mixin)</li>
                                        <li>• Including mixins (@include)</li>
                                        <li>• Parameters & arguments</li>
                                        <li>• Default parameter values</li>
                                        <li>• Variable arguments (...)</li>
                                        <li>• Content blocks (@content)</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200">
                                    <h5 className="font-medium mb-3 text-blue-700 dark:text-blue-300">8. Functions Deep Dive</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Built-in functions</li>
                                        <li>• Color functions (lighten, darken)</li>
                                        <li>• Math functions (round, ceil, floor)</li>
                                        <li>• String functions (quote, unquote)</li>
                                        <li>• Custom functions (@function)</li>
                                        <li>• Return statements (@return)</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200">
                                    <h5 className="font-medium mb-3 text-blue-700 dark:text-blue-300">9. Modern @use & @forward</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• @use vs @import</li>
                                        <li>• Namespaces and aliases</li>
                                        <li>• Private members (_)</li>
                                        <li>• @forward directive</li>
                                        <li>• Module system benefits</li>
                                        <li>• Migration strategies</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200">
                                    <h5 className="font-medium mb-3 text-blue-700 dark:text-blue-300">10. Inheritance & @extend</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• @extend directive</li>
                                        <li>• Placeholder selectors (%)</li>
                                        <li>• Inheritance vs mixins</li>
                                        <li>• Selector combination</li>
                                        <li>• @extend limitations</li>
                                        <li>• Best practices</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200">
                                    <h5 className="font-medium mb-3 text-blue-700 dark:text-blue-300">11. Data Structures</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Lists and list functions</li>
                                        <li>• Maps and map functions</li>
                                        <li>• Nested data structures</li>
                                        <li>• Iterating over data</li>
                                        <li>• Configuration maps</li>
                                        <li>• Dynamic property access</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200">
                                    <h5 className="font-medium mb-3 text-blue-700 dark:text-blue-300">12. Responsive Design</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Breakpoint mixins</li>
                                        <li>• Media query helpers</li>
                                        <li>• Responsive typography</li>
                                        <li>• Fluid grids with Sass</li>
                                        <li>• Container queries prep</li>
                                        <li>• Mobile-first approach</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Level - Expert Topics */}
                        <div>
                            <h4 className="font-semibold mb-6 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Badge className="bg-purple-500 text-white">Level 3</Badge>
                                🎯 Advanced - Expert Topics
                            </h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200">
                                    <h5 className="font-medium mb-3 text-purple-700 dark:text-purple-300">13. Control Directives</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• @if, @else if, @else</li>
                                        <li>• @for loops (from/through/to)</li>
                                        <li>• @each iterations</li>
                                        <li>• @while loops</li>
                                        <li>• Complex conditionals</li>
                                        <li>• Dynamic class generation</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200">
                                    <h5 className="font-medium mb-3 text-purple-700 dark:text-purple-300">14. Advanced Functions</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Recursive functions</li>
                                        <li>• Higher-order functions</li>
                                        <li>• Meta functions (inspect, type-of)</li>
                                        <li>• Selector functions</li>
                                        <li>• Custom math libraries</li>
                                        <li>• Function composition</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200">
                                    <h5 className="font-medium mb-3 text-purple-700 dark:text-purple-300">15. Architecture Patterns</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• 7-1 Architecture pattern</li>
                                        <li>• ITCSS methodology</li>
                                        <li>• Component-based architecture</li>
                                        <li>• Design system integration</li>
                                        <li>• Scalable folder structures</li>
                                        <li>• Team collaboration patterns</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200">
                                    <h5 className="font-medium mb-3 text-purple-700 dark:text-purple-300">16. Performance Optimization</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Compilation optimization</li>
                                        <li>• CSS output optimization</li>
                                        <li>• Unused code elimination</li>
                                        <li>• Critical CSS generation</li>
                                        <li>• Bundle size analysis</li>
                                        <li>• Performance monitoring</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200">
                                    <h5 className="font-medium mb-3 text-purple-700 dark:text-purple-300">17. Build Tools Integration</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Webpack configuration</li>
                                        <li>• Vite integration</li>
                                        <li>• Gulp workflows</li>
                                        <li>• PostCSS combination</li>
                                        <li>• Source maps setup</li>
                                        <li>• Hot reload configuration</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200">
                                    <h5 className="font-medium mb-3 text-purple-700 dark:text-purple-300">18. Advanced Techniques</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Dynamic theme generation</li>
                                        <li>• CSS custom properties integration</li>
                                        <li>• Advanced grid systems</li>
                                        <li>• Animation libraries</li>
                                        <li>• Utility class generation</li>
                                        <li>• Framework development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Expert Level - Mastery Topics */}
                        <div>
                            <h4 className="font-semibold mb-6 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Badge className="bg-red-500 text-white">Level 4</Badge>
                                🏆 Expert - Mastery Topics
                            </h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium mb-3 text-red-700 dark:text-red-300">19. Library Development</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Creating Sass libraries</li>
                                        <li>• API design principles</li>
                                        <li>• Documentation strategies</li>
                                        <li>• Version management</li>
                                        <li>• Distribution methods</li>
                                        <li>• Community contribution</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium mb-3 text-red-700 dark:text-red-300">20. Testing & Quality</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Sass unit testing</li>
                                        <li>• Visual regression testing</li>
                                        <li>• Linting configurations</li>
                                        <li>• Code quality metrics</li>
                                        <li>• Automated testing pipelines</li>
                                        <li>• Continuous integration</li>
                                    </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium mb-3 text-red-700 dark:text-red-300">21. Enterprise Solutions</h5>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                        <li>• Large-scale architecture</li>
                                        <li>• Multi-team workflows</li>
                                        <li>• Design token systems</li>
                                        <li>• Brand consistency tools</li>
                                        <li>• Migration strategies</li>
                                        <li>• Legacy code handling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Learning Path Summary */}
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-lg border border-orange-200/50">
                            <h4 className="font-semibold mb-4 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                🎓 Complete Learning Path Summary
                            </h4>
                            <div className="grid md:grid-cols-4 gap-4 text-sm">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">6</div>
                                    <div className="text-green-700 dark:text-green-300">Beginner Topics</div>
                                    <div className="text-xs text-gray-600">Foundation & Basics</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">6</div>
                                    <div className="text-blue-700 dark:text-blue-300">Intermediate Topics</div>
                                    <div className="text-xs text-gray-600">Building Skills</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">6</div>
                                    <div className="text-purple-700 dark:text-purple-300">Advanced Topics</div>
                                    <div className="text-xs text-gray-600">Expert Techniques</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-600">3</div>
                                    <div className="text-red-700 dark:text-red-300">Mastery Topics</div>
                                    <div className="text-xs text-gray-600">Professional Level</div>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="text-lg font-semibold text-orange-700 dark:text-orange-300">
                                    Total: 21 Comprehensive Topics
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    From absolute beginner to Sass expert in a structured learning path
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Sass Features */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Zap className="w-5 h-5" />
                        Advanced Sass Features
                    </CardTitle>
                    <CardDescription>
                        Master advanced Sass concepts including control directives, maps, lists, and complex logic.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Control Directives */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                                <RefreshCw className="w-5 h-5" />
                                Control Directives (@if, @for, @each, @while)
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <div className="text-sm font-medium mb-2">@if Conditional Logic</div>
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div><span className="text-purple-400">@mixin</span> <span className="text-yellow-400">theme-color</span>(<span className="text-blue-400">$theme</span>) {`{`}</div>
                                        <div>  <span className="text-purple-400">@if</span> <span className="text-blue-400">$theme</span> == <span className="text-green-400">dark</span> {`{`}</div>
                                        <div>    <span className="text-green-400">background</span>: <span className="text-red-400">#333</span>;</div>
                                        <div>    <span className="text-green-400">color</span>: <span className="text-red-400">white</span>;</div>
                                        <div>  {`}`} <span className="text-purple-400">@else</span> {`{`}</div>
                                        <div>    <span className="text-green-400">background</span>: <span className="text-red-400">white</span>;</div>
                                        <div>    <span className="text-green-400">color</span>: <span className="text-red-400">#333</span>;</div>
                                        <div>  {`}`}</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2">@for Loops</div>
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div><span className="text-purple-400">@for</span> <span className="text-blue-400">$i</span> <span className="text-purple-400">from</span> <span className="text-red-400">1</span> <span className="text-purple-400">through</span> <span className="text-red-400">5</span> {`{`}</div>
                                        <div>  <span className="text-yellow-400">.col-{'#{'}$i{'}'}</span> {`{`}</div>
                                        <div>    <span className="text-green-400">width</span>: <span className="text-blue-400">$i</span> * <span className="text-red-400">20%</span>;</div>
                                        <div>  {`}`}</div>
                                        <div>{`}`}</div>
                                        <br />
                                        <div className="text-gray-400">// Generates:</div>
                                        <div className="text-gray-400">// .col-1 {`{`} width: 20%; {`}`}</div>
                                        <div className="text-gray-400">// .col-2 {`{`} width: 40%; {`}`}</div>
                                        <div className="text-gray-400">// ... etc</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maps and Lists */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                                <Grid className="w-5 h-5" />
                                Maps & Lists
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <div className="text-sm font-medium mb-2">Sass Maps</div>
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div><span className="text-blue-400">$breakpoints</span>: (</div>
                                        <div>  <span className="text-green-400">small</span>: <span className="text-red-400">576px</span>,</div>
                                        <div>  <span className="text-green-400">medium</span>: <span className="text-red-400">768px</span>,</div>
                                        <div>  <span className="text-green-400">large</span>: <span className="text-red-400">992px</span>,</div>
                                        <div>  <span className="text-green-400">xlarge</span>: <span className="text-red-400">1200px</span></div>
                                        <div>);</div>
                                        <br />
                                        <div><span className="text-purple-400">@each</span> <span className="text-blue-400">$name</span>, <span className="text-blue-400">$size</span> <span className="text-purple-400">in</span> <span className="text-blue-400">$breakpoints</span> {`{`}</div>
                                        <div>  <span className="text-yellow-400">.container-{'#{'}$name{'}'}</span> {`{`}</div>
                                        <div>    <span className="text-green-400">max-width</span>: <span className="text-blue-400">$size</span>;</div>
                                        <div>  {`}`}</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2">Color Palette System</div>
                                    <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                        <div><span className="text-blue-400">$colors</span>: (</div>
                                        <div>  <span className="text-green-400">primary</span>: <span className="text-red-400">#007bff</span>,</div>
                                        <div>  <span className="text-green-400">success</span>: <span className="text-red-400">#28a745</span>,</div>
                                        <div>  <span className="text-green-400">danger</span>: <span className="text-red-400">#dc3545</span>,</div>
                                        <div>  <span className="text-green-400">warning</span>: <span className="text-red-400">#ffc107</span></div>
                                        <div>);</div>
                                        <br />
                                        <div><span className="text-purple-400">@function</span> <span className="text-yellow-400">color</span>(<span className="text-blue-400">$key</span>) {`{`}</div>
                                        <div>  <span className="text-purple-400">@return</span> <span className="text-yellow-400">map-get</span>(<span className="text-blue-400">$colors</span>, <span className="text-blue-400">$key</span>);</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real-world Examples */}
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200/50">
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Gem className="w-5 h-5" />
                                Real-world Example: Responsive Grid System
                            </h4>
                            <div className="bg-gray-900 rounded p-4 font-mono text-xs text-white overflow-x-auto">
                                <div className="text-gray-400">// Advanced Grid System with Sass</div>
                                <div><span className="text-blue-400">$grid-columns</span>: <span className="text-red-400">12</span>;</div>
                                <div><span className="text-blue-400">$grid-gutter</span>: <span className="text-red-400">30px</span>;</div>
                                <br />
                                <div><span className="text-blue-400">$breakpoints</span>: (</div>
                                <div>  <span className="text-green-400">xs</span>: <span className="text-red-400">0</span>,</div>
                                <div>  <span className="text-green-400">sm</span>: <span className="text-red-400">576px</span>,</div>
                                <div>  <span className="text-green-400">md</span>: <span className="text-red-400">768px</span>,</div>
                                <div>  <span className="text-green-400">lg</span>: <span className="text-red-400">992px</span>,</div>
                                <div>  <span className="text-green-400">xl</span>: <span className="text-red-400">1200px</span></div>
                                <div>);</div>
                                <br />
                                <div><span className="text-purple-400">@mixin</span> <span className="text-yellow-400">make-col</span>(<span className="text-blue-400">$size</span>, <span className="text-blue-400">$columns</span>: <span className="text-blue-400">$grid-columns</span>) {`{`}</div>
                                <div>  <span className="text-green-400">flex</span>: <span className="text-red-400">0 0 auto</span>;</div>
                                <div>  <span className="text-green-400">width</span>: <span className="text-yellow-400">percentage</span>(<span className="text_blue-400">$size</span> / <span className="text_blue-400">$columns</span>);</div>
                                <div>{`}`}</div>
                                <br />
                                <div><span className="text-purple-400">@each</span> <span className="text_blue-400">$breakpoint</span>, <span className="text_blue-400">$screen-size</span> <span className="text-purple-400">in</span> <span className="text_blue-400">$breakpoints</span> {`{`}</div>
                                <div>  <span className="text-purple-400">@for</span> <span className="text_blue-400">$i</span> <span className="text-purple-400">from</span> <span className="text-red-400">1</span> <span className="text-purple-400">through</span> <span className="text_blue-400">$grid-columns</span> {`{`}</div>
                                <div>    <span className="text-yellow-400">.col-{'#{'}$breakpoint{'}'}-{'#{'}$i{'}'}</span> {`{`}</div>
                                <div>      <span className="text-purple-400">@include</span> <span className="text-yellow-400">make-col</span>(<span className="text_blue-400">$i</span>);</div>
                                <div>    {`}`}</div>
                                <div>  {`}`}</div>
                                <div>{`}`}</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Workflow & Tools */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Settings className="w-5 h-5" />
                        Sass Workflow & Tools
                    </CardTitle>
                    <CardDescription>
                        Essential tools and workflow setup for professional Sass development.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h5 className="font-medium mb-3 flex items-center gap-2">
                                <Wrench className="w-5 h-5 text-blue-500" />
                                Compilation Tools
                            </h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                <li>• Dart Sass (Primary)</li>
                                <li>• Node Sass (Legacy)</li>
                                <li>• Webpack integration</li>
                                <li>• Vite & modern bundlers</li>
                                <li>• VS Code extensions</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h5 className="font-medium mb-3 flex items-center gap-2">
                                <Folder className="w-5 h-5 text-green-500" />
                                File Structure
                            </h5>
                            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                <div className="text-gray-400">scss/</div>
                                <div className="text-blue-400 ml-2">├── abstracts/</div>
                                <div className="text-yellow-400 ml-4">│   ├── _variables.scss</div>
                                <div className="text-yellow-400 ml-4">│   └── _mixins.scss</div>
                                <div className="text-green-400 ml-2">├── base/</div>
                                <div className="text-orange-400 ml-2">├── components/</div>
                                <div className="text-red-400 ml-2">├── layout/</div>
                                <div className="text-purple-400 ml-2">└── main.scss</div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h5 className="font-medium mb-3 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-purple-500" />
                                Build Process
                            </h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                <li>• Watch mode setup</li>
                                <li>• Auto-compilation</li>
                                <li>• Source maps generation</li>
                                <li>• CSS minification</li>
                                <li>• Browser auto-refresh</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices & Common Pitfalls */}
            <Card className="border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                        <Shield className="w-5 h-5" />
                        Best Practices & Common Pitfalls
                    </CardTitle>
                    <CardDescription>
                        Learn professional Sass development practices and avoid common mistakes.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Best Practices */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                ✅ Best Practices
                            </h4>
                            <div className="space-y-3">
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">1. Use @use instead of @import</h5>
                                    <div className="text-sm text-green-700 dark:text-green-300">
                                        Modern Sass uses @use for better namespace management and performance.
                                    </div>
                                    <div className="bg-gray-900 rounded p-2 mt-2 font-mono text-xs text-white">
                                        <div><span className="text-purple-400">@use</span> <span className="text-green-400">'variables'</span> <span className="text-purple-400">as</span> <span className="text-blue-400">vars</span>;</div>
                                        <div><span className="text-green-400">color</span>: <span className="text-blue-400">vars</span>.<span className="text-yellow-400">$primary</span>;</div>
                                    </div>
                                </div>
                                
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">2. Limit Nesting Depth</h5>
                                    <div className="text-sm text-green-700 dark:text-green-300">
                                        Keep nesting to 3-4 levels maximum for maintainability.
                                    </div>
                                </div>
                                
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">3. Use Meaningful Variable Names</h5>
                                    <div className="text-sm text-green-700 dark:text-green-300">
                                        $primary-color instead of $blue, $large-screen instead of $1200px
                                    </div>
                                </div>
                                
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200">
                                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">4. Organize with 7-1 Architecture</h5>
                                    <div className="text-sm text-green-700 dark:text-green-300">
                                        Structure your Sass files into 7 folders, 1 main file pattern.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Pitfalls */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" />
                                ❌ Common Pitfalls
                            </h4>
                            <div className="space-y-3">
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">1. Over-nesting Selectors</h5>
                                    <div className="text-sm text-red-700 dark:text-red-300">
                                        Deep nesting creates overly specific CSS and maintenance issues.
                                    </div>
                                    <div className="bg-gray-900 rounded p-2 mt-2 font-mono text-xs text-white">
                                        <div className="text-red-400">// Bad: Too deep</div>
                                        <div><span className="text-yellow-400">.nav ul li a span</span> {`{ ... }`}</div>
                                    </div>
                                </div>
                                
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">2. Overusing @extend</h5>
                                    <div className="text-sm text-red-700 dark:text-red-300">
                                        @extend can create complex CSS output. Use mixins for most cases.
                                    </div>
                                </div>
                                
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">3. Not Using Source Maps</h5>
                                    <div className="text-sm text-red-700 dark:text-red-300">
                                        Always enable source maps for easier debugging in browser dev tools.
                                    </div>
                                </div>
                                
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
                                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">4. Ignoring Performance</h5>
                                    <div className="text-sm text-red-700 dark:text-red-300">
                                        Large Sass files can slow compilation. Split into logical partials.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200/50">
                        <h4 className="font-semibold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            💡 Pro Tips for Sass Mastery
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <div className="text-blue-500 mt-1">🎯</div>
                                    <div>Use placeholder selectors (%) for styles that are only extended, never used directly</div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="text-purple-500 mt-1">⚡</div>
                                    <div>Leverage Sass math functions: percentage(), round(), ceil(), floor()</div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="text-green-500 mt-1">🔧</div>
                                    <div>Create utility mixins for common patterns like clearfix, visually-hidden</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <div className="text-orange-500 mt-1">📱</div>
                                    <div>Build responsive mixin libraries for consistent breakpoint management</div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="text-red-500 mt-1">🎨</div>
                                    <div>Use color functions: lighten(), darken(), saturate(), desaturate()</div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="text-indigo-500 mt-1">📦</div>
                                    <div>Consider using Sass libraries like Bootstrap, Foundation, or Bulma as learning resources</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Play className="w-5 h-5" />
                        Interactive Playground
                    </CardTitle>
                    <CardDescription>
                        Practice Sass/SCSS features with live examples and interactive demonstrations.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <Button 
                        onClick={() => onOpenWebPlayground(
                            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sass/SCSS Playground</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Sass/SCSS Learning Playground</h1>
            <nav class="nav">
                <button onclick="showExample('variables')" class="nav-btn active" id="variables-btn">Variables</button>
                <button onclick="showExample('nesting')" class="nav-btn" id="nesting-btn">Nesting</button>
                <button onclick="showExample('mixins')" class="nav-btn" id="mixins-btn">Mixins</button>
                <button onclick="showExample('functions')" class="nav-btn" id="functions-btn">Functions</button>
                <button onclick="showExample('inheritance')" class="nav-btn" id="inheritance-btn">Inheritance</button>
            </nav>
        </header>
        
        <main class="main-content">
            <section class="example-section" id="variables-example">
                <h2>Variables Example</h2>
                <div class="demo-grid">
                    <div class="sass-code">
                        <h3>Sass Code</h3>
                        <pre><code>$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-size: 16px;
$border-radius: 8px;

.card {
  background: $primary-color;
  font-size: $font-size;
  border-radius: $border-radius;
  
  .title {
    color: white;
    font-size: $font-size * 1.5;
  }
  
  .button {
    background: $secondary-color;
    border-radius: $border-radius / 2;
  }
}</code></pre>
                    </div>
                    <div class="result">
                        <h3>Live Result</h3>
                        <div class="card">
                            <div class="title">Card Title</div>
                            <p>This card demonstrates Sass variables in action.</p>
                            <button class="button">Click Me</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="example-section hidden" id="nesting-example">
                <h2>Nesting Example</h2>
                <div class="demo-grid">
                    <div class="sass-code">
                        <h3>Sass Code</h3>
                        <pre><code>.navigation {
  background: #333;
  padding: 1rem;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      margin-right: 1rem;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          color: #3498db;
          text-decoration: underline;
        }
      }
    }
  }
}</code></pre>
                    </div>
                    <div class="result">
                        <h3>Live Result</h3>
                        <nav class="navigation">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            
            <section class="example-section hidden" id="mixins-example">
                <h2>Mixins Example</h2>
                <div class="demo-grid">
                    <div class="sass-code">
                        <h3>Sass Code</h3>
                        <pre><code>@mixin button-style($bg-color, $text-color: white) {
  background: $bg-color;
  color: $text-color;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: darken($bg-color, 10%);
    transform: translateY(-2px);
  }
}

.btn-primary {
  @include button-style(#3498db);
}

.btn-success {
  @include button-style(#2ecc71);
}

.btn-danger {
  @include button-style(#e74c3c);
}</code></pre>
                    </div>
                    <div class="result">
                        <h3>Live Result</h3>
                        <div class="button-group">
                            <button class="btn-primary">Primary Button</button>
                            <button class="btn-success">Success Button</button>
                            <button class="btn-danger">Danger Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>`,
                            `/* Compiled CSS from Sass */
* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 0;
    background: #f8f9fa;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.header {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.header h1 {
    margin: 0 0 1rem 0;
    color: #333;
}

.nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid #007bff;
    background: white;
    color: #007bff;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-btn:hover,
.nav-btn.active {
    background: #007bff;
    color: white;
}

.main-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.example-section {
    display: block;
}

.hidden {
    display: none;
}

.demo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
}

.sass-code {
    background: #2d3748;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
}

.sass-code h3 {
    margin: 0 0 1rem 0;
    color: #e2e8f0;
}

.sass-code pre {
    margin: 0;
    color: #e2e8f0;
    font-size: 0.875rem;
    line-height: 1.5;
}

.result {
    padding: 1.5rem;
    background: #f7fafc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
}

.result h3 {
    margin: 0 0 1rem 0;
    color: #2d3748;
}

/* Variables Example Styles */
.card {
    background: #3498db;
    font-size: 16px;
    border-radius: 8px;
    padding: 1.5rem;
    color: white;
}

.card .title {
    color: white;
    font-size: 24px;
    margin: 0 0 1rem 0;
    font-weight: bold;
}

.card .button {
    background: #2ecc71;
    border-radius: 4px;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

/* Nesting Example Styles */
.navigation {
    background: #333;
    padding: 1rem;
    border-radius: 6px;
}

.navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.navigation ul li {
    display: inline-block;
    margin-right: 1rem;
}

.navigation ul li a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.navigation ul li a:hover {
    color: #3498db;
    text-decoration: underline;
    background: rgba(52, 152, 219, 0.1);
}

/* Mixins Example Styles */
.button-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn-primary {
    background: #3498db;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: #2980b9;
    transform: translateY(-2px);
}

.btn-success {
    background: #2ecc71;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-success:hover {
    background: #27ae60;
    transform: translateY(-2px);
}

.btn-danger {
    background: #e74c3c;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-danger:hover {
    background: #c0392b;
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .demo-grid {
        grid-template-columns: 1fr;
    }
    
    .nav {
        flex-direction: column;
    }
    
    .button-group {
        flex-direction: column;
    }
}`,
                            `// Sass/SCSS Playground JavaScript
let currentExample = 'variables';

const examples = {
    variables: 'Variables Example',
    nesting: 'Nesting Example', 
    mixins: 'Mixins Example',
    functions: 'Functions Example',
    inheritance: 'Inheritance Example'
};

function showExample(example) {
    // Hide all example sections
    document.querySelectorAll('.example-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected example
    const selectedSection = document.getElementById(example + '-example');
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
    
    // Update button states
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(example + '-btn').classList.add('active');
    
    currentExample = example;
    
    console.log('Switched to:', examples[example]);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sass/SCSS Playground loaded!');
    console.log('Explore different Sass features with interactive examples.');
});`
                        )}
                        className="w-full"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Open Sass/SCSS Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
