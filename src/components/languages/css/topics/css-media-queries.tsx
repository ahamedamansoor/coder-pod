'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Smartphone, Tablet, Laptop, Monitor, Tv, Settings, Target,
    CheckCircle, AlertTriangle, Code, Hash, Plus, Zap, Grid, Layout,
    Eye, Printer, RotateCcw, Sun, Moon, Volume2, VolumeX, Maximize, Grid3X3
} from 'lucide-react';

interface CssMediaQueriesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssMediaQueries({ onOpenWebPlayground }: CssMediaQueriesProps) {
    const [selectedBreakpoint, setSelectedBreakpoint] = useState('mobile');
    const [selectedQuery, setSelectedQuery] = useState('width');
    const [selectedFeature, setSelectedFeature] = useState('prefers-color-scheme');

    // Device Breakpoints with Visual Diagrams
    const deviceBreakpoints = [
        {
            name: 'mobile',
            title: 'Mobile Phones',
            icon: Smartphone,
            range: '320px - 767px',
            query: '(max-width: 767px)',
            desc: 'Phones and small devices',
            color: 'bg-blue-500',
            diagram: '📱',
            examples: ['iPhone', 'Android phones', 'Small tablets']
        },
        {
            name: 'tablet',
            title: 'Tablets',
            icon: Tablet,
            range: '768px - 1023px',
            query: '(min-width: 768px) and (max-width: 1023px)',
            desc: 'Tablets and small laptops',
            color: 'bg-green-500',
            diagram: '📱📱',
            examples: ['iPad', 'Android tablets', 'Surface tablets']
        },
        {
            name: 'desktop',
            title: 'Desktop',
            icon: Laptop,
            range: '1024px - 1439px',
            query: '(min-width: 1024px) and (max-width: 1439px)',
            desc: 'Laptops and desktops',
            color: 'bg-purple-500',
            diagram: '💻💻💻',
            examples: ['Laptops', 'Desktop monitors', 'Small screens']
        },
        {
            name: 'large',
            title: 'Large Screens',
            icon: Monitor,
            range: '1440px+',
            query: '(min-width: 1440px)',
            desc: 'Large monitors and TVs',
            color: 'bg-orange-500',
            diagram: '🖥️🖥️🖥️🖥️',
            examples: ['4K monitors', 'Ultra-wide screens', 'TVs']
        }
    ];

    // Modern CSS Features
    const modernFeatures = [
        {
            name: 'prefers-color-scheme',
            title: 'Dark/Light Mode',
            icon: Sun,
            desc: 'Detect user\'s preferred color scheme',
            values: ['light', 'dark'],
            example: '@media (prefers-color-scheme: dark) {\n  body { background: #000; color: #fff; }\n}',
            diagram: '🌞 ↔️ 🌙'
        },
        {
            name: 'prefers-reduced-motion',
            title: 'Motion Preferences',
            icon: Eye,
            desc: 'Respect user\'s motion sensitivity',
            values: ['reduce', 'no-preference'],
            example: '@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; }\n}',
            diagram: '🏃‍♂️ ↔️ 🚶‍♂️'
        },
        {
            name: 'hover',
            title: 'Hover Capability',
            icon: Target,
            desc: 'Detect if device can hover',
            values: ['hover', 'none'],
            example: '@media (hover: hover) {\n  .button:hover { background: blue; }\n}',
            diagram: '🖱️ ↔️ 👆'
        },
        {
            name: 'pointer',
            title: 'Pointer Precision',
            icon: Hash,
            desc: 'Detect pointer accuracy',
            values: ['fine', 'coarse', 'none'],
            example: '@media (pointer: coarse) {\n  .button { padding: 12px; }\n}',
            diagram: '🎯 ↔️ 👉'
        }
    ];

    // Media Query Types
    const mediaQueryTypes = [
        {
            name: 'width',
            title: 'Width Queries',
            icon: Monitor,
            desc: 'Target specific viewport widths',
            example: '@media (min-width: 768px) {\n  .container { max-width: 1200px; }\n}',
            color: 'bg-blue-500',
            diagram: '↔️'
        },
        {
            name: 'height',
            title: 'Height Queries',
            icon: Maximize,
            desc: 'Target specific viewport heights',
            example: '@media (min-height: 600px) {\n  .sidebar { position: fixed; }\n}',
            color: 'bg-green-500',
            diagram: '↕️'
        },
        {
            name: 'orientation',
            title: 'Orientation',
            icon: RotateCcw,
            desc: 'Portrait vs landscape orientation',
            example: '@media (orientation: landscape) {\n  .gallery { grid-template-columns: repeat(4, 1fr); }\n}',
            color: 'bg-purple-500',
            diagram: '📱 ↔️ 📱'
        },
        {
            name: 'print',
            title: 'Print Media',
            icon: Printer,
            desc: 'Styles for printing',
            example: '@media print {\n  .no-print { display: none; }\n  body { color: black; }\n}',
            color: 'bg-orange-500',
            diagram: '🖨️'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Settings className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Media Queries</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master responsive design with media queries - from basic breakpoints to advanced user preference detection.
                </p>
            </div>

            {/* What are Media Queries? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Settings className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are Media Queries?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Transform your designs to work flawlessly across every device - from tiny smartwatches to massive displays!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Responsive Magic in Action
                                </h4>
                                
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">📱 Mobile (320px)</div>
                                        <div className="w-full h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                            Single Column
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">Stack Everything</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">💻 Tablet (768px)</div>
                                        <div className="grid grid-cols-2 gap-1 h-16">
                                            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                Side
                                            </div>
                                            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                by Side
                                            </div>
                                        </div>
                                        <div className="text-xs text-blue-500 mt-1">Two Columns</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🖥️ Desktop (1024px)</div>
                                        <div className="grid grid-cols-3 gap-1 h-16">
                                            <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                Nav
                                            </div>
                                            <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                Main
                                            </div>
                                            <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                Side
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">Three Columns</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Try it yourself - Resize this window!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Watch how media queries automatically adapt layouts based on screen width.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Grid3X3 className="w-5 h-5" />
                                    🎨 Media Query Types
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Monitor className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Screen Size</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">min-width, max-width</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <RotateCcw className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Orientation</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">portrait, landscape</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Eye className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">User Preferences</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">prefers-color-scheme</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Maximize className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Resolution</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">min-resolution, dpi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Comparison */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">📱</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Media Queries</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Responsive & Adaptive
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Device-Aware
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            User-Friendly
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">🖥️</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Fixed Design</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            One Size Fits All
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Poor Mobile UX
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Accessibility Issues
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Start with mobile-first design, then progressively enhance for larger screens using min-width queries!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Code Example */}
                    <div className="mt-6 bg-gray-900 rounded-xl p-4 border border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-400 text-sm ml-2">Media Queries Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 📱 Mobile First */</div>
                            <div className="text-blue-400">.container</div>
                            <div className="text-white"> {'{'} <span className="text-green-400">width</span>: <span className="text-yellow-400">100%</span>; {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 💻 Tablet & Up */</div>
                            <div className="text-purple-400">@media (min-width: 768px)</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-blue-400">.container</span> {'{'} <span className="text-green-400">max-width</span>: <span className="text-yellow-400">1200px</span>; {'}'}  </div>
                            <div className="text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🌙 Dark Mode */</div>
                            <div className="text-purple-400">@media (prefers-color-scheme: dark)</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-blue-400">body</span> {'{'} <span className="text-green-400">background</span>: <span className="text-yellow-400">#1a1a1a</span>; {'}'}  </div>
                            <div className="text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Device Breakpoints Demo */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Monitor className="w-5 h-5" />
                        Device Breakpoints & Media Queries
                    </CardTitle>
                    <CardDescription>
                        Interactive guide to common device breakpoints and their corresponding media queries.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {deviceBreakpoints.map((device) => (
                                <div 
                                    key={device.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                        selectedBreakpoint === device.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedBreakpoint(device.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <device.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{device.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{device.range}</p>
                                    <p className="text-xs text-gray-500">{device.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Media Query for {deviceBreakpoints.find(d => d.name === selectedBreakpoint)?.title}</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                @media {deviceBreakpoints.find(d => d.name === selectedBreakpoint)?.query} {'{'}
                                <br />
                                {'  '}/* Styles for {deviceBreakpoints.find(d => d.name === selectedBreakpoint)?.title.toLowerCase()} devices */
                                <br />
                                {'  '}.container {'{'}
                                <br />
                                {'    '}/* Your responsive styles here */
                                <br />
                                {'  '}{'}'}
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Media Query Types */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Code className="w-5 h-5" />
                        Media Query Types & Syntax
                    </CardTitle>
                    <CardDescription>
                        Learn different types of media queries and their practical applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {mediaQueryTypes.map((query) => (
                                <div 
                                    key={query.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                        selectedQuery === query.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedQuery(query.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <query.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{query.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{query.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{mediaQueryTypes.find(q => q.name === selectedQuery)?.title} Example</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block whitespace-pre-line">
                                {mediaQueryTypes.find(q => q.name === selectedQuery)?.example}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Modern CSS Features */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-5 h-5" />
                        Modern CSS Media Features
                    </CardTitle>
                    <CardDescription>
                        Advanced media queries for user preferences and device capabilities.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {modernFeatures.map((feature) => (
                                <Button
                                    key={feature.name}
                                    variant={selectedFeature === feature.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFeature(feature.name)}
                                >
                                    <feature.icon className="w-3 h-3 mr-1" />
                                    {feature.title}
                                </Button>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{modernFeatures.find(f => f.name === selectedFeature)?.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {modernFeatures.find(f => f.name === selectedFeature)?.desc}
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-3">
                                <strong>Values:</strong> {modernFeatures.find(f => f.name === selectedFeature)?.values.join(', ')}
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block whitespace-pre-line">
                                {modernFeatures.find(f => f.name === selectedFeature)?.example}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Complete Media Queries Playground
                    </CardTitle>
                    <CardDescription>
                        Comprehensive interactive playground with all media query types, breakpoints, and modern features.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Interactive Demo
                        </Button>
                        <Badge variant="secondary">📱 Responsive Breakpoints</Badge>
                        <Badge variant="secondary">🌙 Dark Mode</Badge>
                        <Badge variant="secondary">🎯 Hover Detection</Badge>
                        <Badge variant="secondary">🖨️ Print Styles</Badge>
                        <Badge variant="secondary">♿ Accessibility</Badge>
                        <Badge variant="secondary">🎭 Motion Preferences</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

const playgroundCode = {
    html: `<!DOCTYPE html>
<html>
<head>
    <title>🚀 CSS Media Queries Interactive Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Animated Background -->
    <div class="bg-animation"></div>
    
    <div class="container">
        <header class="header">
            <div class="header-content">
                <div class="title-section">
                    <div class="icon-wrapper">
                        <div class="rotating-icon">⚙️</div>
                        <div class="icon-glow"></div>
                    </div>
                    <h1 class="main-title">
                        <span class="gradient-text">CSS Media Queries</span>
                        <span class="subtitle-text">Interactive Playground</span>
                    </h1>
                </div>
                <p class="description">
                    🎯 Resize your browser, change orientation, or toggle system preferences to see media queries in action!
                </p>
                
                <!-- Feature Pills -->
                <div class="feature-pills">
                    <div class="pill pill-blue">📱 Responsive Design</div>
                    <div class="pill pill-purple">🌙 Dark Mode</div>
                    <div class="pill pill-green">♿ Accessibility</div>
                </div>
            </div>
        </header>

        <section class="breakpoint-section">
            <h2 class="section-title">📊 Live Breakpoint Detection</h2>
            <div class="breakpoint-indicators">
                <div class="indicator mobile">
                    <div class="indicator-icon">📱</div>
                    <div class="indicator-text">Mobile</div>
                    <div class="indicator-range">≤ 767px</div>
                </div>
                <div class="indicator tablet">
                    <div class="indicator-icon">📱</div>
                    <div class="indicator-text">Tablet</div>
                    <div class="indicator-range">768px - 1023px</div>
                </div>
                <div class="indicator desktop">
                    <div class="indicator-icon">💻</div>
                    <div class="indicator-text">Desktop</div>
                    <div class="indicator-range">1024px - 1439px</div>
                </div>
                <div class="indicator large">
                    <div class="indicator-icon">🖥️</div>
                    <div class="indicator-text">Large</div>
                    <div class="indicator-range">≥ 1440px</div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2 class="section-title">🎨 Responsive Grid Demo</h2>
            <div class="grid-container">
                <div class="grid">
                    <div class="card card-1">
                        <div class="card-icon">🎯</div>
                        <h3>Responsive Card 1</h3>
                        <p>Adapts beautifully to any screen size</p>
                    </div>
                    <div class="card card-2">
                        <div class="card-icon">🚀</div>
                        <h3>Interactive Card 2</h3>
                        <p>Watch the layout change as you resize</p>
                    </div>
                    <div class="card card-3">
                        <div class="card-icon">✨</div>
                        <h3>Dynamic Card 3</h3>
                        <p>Media queries make this possible</p>
                    </div>
                    <div class="card card-4">
                        <div class="card-icon">🎨</div>
                        <h3>Beautiful Card 4</h3>
                        <p>Consistent design across devices</p>
                    </div>
                    <div class="card card-5">
                        <div class="card-icon">🌟</div>
                        <h3>Stunning Card 5</h3>
                        <p>Professional responsive layouts</p>
                    </div>
                    <div class="card card-6">
                        <div class="card-icon">🎪</div>
                        <h3>Amazing Card 6</h3>
                        <p>Perfect for any project</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="features-section">
            <h2 class="section-title">🌟 Modern CSS Features</h2>
            <div class="features-grid">
                <div class="feature-card dark-mode-card">
                    <div class="feature-header">
                        <div class="feature-icon">🌙</div>
                        <h3>Dark Mode Detection</h3>
                    </div>
                    <p>Automatically adapts to your system's color scheme preference</p>
                    <div class="feature-demo">
                        <div class="theme-toggle">
                            <span class="theme-light">☀️ Light</span>
                            <span class="theme-dark">🌙 Dark</span>
                        </div>
                    </div>
                </div>
                
                <div class="feature-card motion-card">
                    <div class="feature-header">
                        <div class="feature-icon">🎭</div>
                        <h3>Motion Preferences</h3>
                    </div>
                    <p class="animated-text">Respects your reduced motion accessibility settings</p>
                    <div class="motion-demo">
                        <div class="bouncing-ball"></div>
                    </div>
                </div>
                
                <div class="feature-card hover-card">
                    <div class="feature-header">
                        <div class="feature-icon">👆</div>
                        <h3>Hover Detection</h3>
                    </div>
                    <p>Smart hover effects that work on all devices</p>
                    <div class="hover-demo">
                        <div class="hover-target">Hover or tap me!</div>
                    </div>
                </div>
            </div>
        </section>

<section class="print-section">
            <h2 class="section-title">🖨️ Print Optimization</h2>
            <div class="print-demo">
                <p>This page has special styles optimized for printing. Try printing to see the difference!</p>
                <div class="print-features">
                    <div class="print-feature">
                        <span class="feature-check">✅</span>
                        <span>Optimized typography for print</span>
                    </div>
                    <div class="print-feature">
                        <span class="feature-check">✅</span>
                        <span>Removed unnecessary elements</span>
                    </div>
                    <div class="print-feature no-print">
                        <span class="feature-check">❌</span>
                        <span>This won't appear when printed</span>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="footer-content">
                <p>🎨 Beautiful, responsive design powered by CSS Media Queries</p>
                <div class="footer-links">
                    <span class="footer-link">📱 Mobile-First</span>
                    <span class="footer-link">🎯 Accessible</span>
                    <span class="footer-link">⚡ Performance</span>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>`,
    css: `* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #333;
    line-height: 1.6;
    padding: 1rem;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

/* Animated Background */
.bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    z-index: -1;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
}

/* Header Styling */
.header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.header-content {
    position: relative;
    z-index: 10;
}

.title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.icon-wrapper {
    position: relative;
}

.rotating-icon {
    font-size: 3rem;
    animation: rotate 8s linear infinite;
    filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5));
}

.icon-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

.main-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gradient-text {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.subtitle-text {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: 600;
    color: #6b7280;
}

.description {
    font-size: 1.2rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto 2rem;
}

.feature-pills {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.pill {
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
}

.pill-blue {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1));
    border-color: rgba(59, 130, 246, 0.3);
    color: #1e40af;
}

.pill-purple {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(126, 34, 206, 0.1));
    border-color: rgba(147, 51, 234, 0.3);
    color: #7c2d12;
}

.pill-green {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(21, 128, 61, 0.1));
    border-color: rgba(34, 197, 94, 0.3);
    color: #14532d;
}

.pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* Section Styling */
.section-title {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #374151, #1f2937);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Breakpoint Indicators */
.breakpoint-section {
    margin-bottom: 3rem;
}

.breakpoint-indicators {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.indicator {
    display: none;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border: 2px solid transparent;
    transition: all 0.3s ease;
    min-width: 150px;
}

.indicator-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.indicator-text {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.indicator-range {
    font-size: 0.8rem;
    color: #6b7280;
}

/* Responsive Breakpoints */
@media (max-width: 767px) {
    .mobile { 
        display: block; 
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        border-color: #3b82f6;
        animation: pulse 2s infinite;
    }
    .grid { grid-template-columns: 1fr; }
    .container { padding: 1rem; margin: 0.5rem; }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .tablet { 
        display: block; 
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        border-color: #10b981;
        animation: pulse 2s infinite;
    }
    .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) and (max-width: 1439px) {
    .desktop { 
        display: block; 
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        color: white;
        border-color: #8b5cf6;
        animation: pulse 2s infinite;
    }
    .grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1440px) {
    .large { 
        display: block; 
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        border-color: #f59e0b;
        animation: pulse 2s infinite;
    }
    .grid { grid-template-columns: repeat(4, 1fr); }
}

/* Grid Demo */
.demo-section {
    margin-bottom: 3rem;
}

.grid-container {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.grid {
    display: grid;
    gap: 1.5rem;
    margin: 1rem 0;
}

.card {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.card:hover::before {
    left: 100%;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    display: block;
}

.card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.card p {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Feature Cards */
.features-section {
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 2rem;
    border-left: 4px solid;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.dark-mode-card { border-left-color: #8b5cf6; }
.motion-card { border-left-color: #f59e0b; }
.hover-card { border-left-color: #10b981; }

.feature-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.feature-icon {
    font-size: 2rem;
}

.feature-card h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #374151;
}

.feature-card p {
    color: #6b7280;
    margin-bottom: 1rem;
}

/* Feature Demos */
.theme-toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(0,0,0,0.05);
    border-radius: 10px;
}

.bouncing-ball {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: 50%;
    animation: bounce 2s infinite;
    margin: 0 auto;
}

.hover-target {
    background: linear-gradient(135deg, #e5e7eb, #d1d5db);
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 600;
}

@media (hover: hover) {
    .hover-target:hover {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        transform: scale(1.05);
    }
}

@media (hover: none) {
    .hover-target {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
    }
    .hover-target::after {
        content: " (Touch device)";
        font-size: 0.8rem;
        opacity: 0.8;
    }
}

/* Print Section */
.print-section {
    margin-bottom: 3rem;
}

.print-demo {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.print-features {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}

.print-feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(0,0,0,0.02);
    border-radius: 10px;
}

.feature-check {
    font-size: 1.2rem;
}

/* Footer */
.footer {
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 2rem;
}

.footer-content p {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #374151;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.footer-link {
    font-size: 0.9rem;
    color: #6b7280;
    font-weight: 500;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .container {
        background: rgba(30, 30, 30, 0.95);
        color: #e5e7eb;
    }
    
    .gradient-text {
        background: linear-gradient(135deg, #93c5fd 0%, #c084fc 50%, #fbbf24 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .feature-card {
        background: rgba(55, 65, 81, 0.9);
        color: #e5e7eb;
    }
    
    .feature-card h3 {
        color: #f3f4f6;
    }
    
    .section-title {
        background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .bouncing-ball {
        animation: none;
    }
}


/* Print Styles */
@media print {
    body {
        background: white !important;
        color: black !important;
    }
    
    .container {
        background: white !important;
        box-shadow: none !important;
        border: none !important;
    }
    
    .breakpoint-indicators,
    .no-print,
    .bg-animation {
        display: none !important;
    }
    
    .card {
        background: #f8f9fa !important;
        color: black !important;
        border: 1px solid #dee2e6 !important;
    }
}

/* Animations */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
    console.log('Media Queries Demo loaded!');
    
    function updateLayout() {
        const width = window.innerWidth;
        console.log('Width:', width + 'px');
        
        if (width <= 767) console.log('📱 Mobile active');
        else if (width <= 1023) console.log('📱 Tablet active');  
        else if (width <= 1439) console.log('💻 Desktop active');
        else console.log('🖥️ Large active');
    }
    
    window.addEventListener('resize', updateLayout);
    updateLayout();
    
    console.log('Dark mode:', window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log('Reduced motion:', window.matchMedia('(prefers-reduced-motion: reduce)').matches);
});`
};