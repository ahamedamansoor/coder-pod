'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Zap, Target, Code, Settings, Timer, 
    CheckCircle, AlertTriangle, TrendingUp, TrendingDown, 
    Monitor, Smartphone, Tablet, Gauge, Activity,
    FileText, Image, Layers, RefreshCw, Sun, Moon, 
    Maximize, Move, RotateCcw, Grid, Compass, Navigation,
    Cpu, HardDrive, Wifi, Clock, BarChart3, LineChart
} from 'lucide-react';

interface CssPerformanceProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPerformance({ onOpenWebPlayground }: CssPerformanceProps) {
    const [selectedMetric, setSelectedMetric] = useState('render-time');
    const [selectedOptimization, setSelectedOptimization] = useState('critical-css');

    // Performance Metrics
    const performanceMetrics = [
        {
            id: 'render-time',
            name: 'Render Time',
            icon: Timer,
            description: 'Time to first paint and layout',
            impact: 'High',
            color: 'red',
            good: '< 100ms',
            bad: '> 300ms'
        },
        {
            id: 'css-size',
            name: 'CSS File Size',
            icon: FileText,
            description: 'Total CSS bundle size',
            impact: 'Medium',
            color: 'orange',
            good: '< 50KB',
            bad: '> 200KB'
        },
        {
            id: 'selector-performance',
            name: 'Selector Performance',
            icon: Target,
            description: 'CSS selector efficiency',
            impact: 'Medium',
            color: 'yellow',
            good: 'Simple selectors',
            bad: 'Complex nested'
        },
        {
            id: 'reflow-repaint',
            name: 'Reflow/Repaint',
            icon: RefreshCw,
            description: 'Layout recalculation frequency',
            impact: 'High',
            color: 'red',
            good: 'Minimal',
            bad: 'Frequent'
        }
    ];

    // Optimization Techniques
    const optimizationTechniques = [
        {
            id: 'critical-css',
            name: 'Critical CSS',
            icon: Zap,
            description: 'Inline above-the-fold CSS',
            difficulty: 'Medium',
            impact: 'High',
            category: 'Loading'
        },
        {
            id: 'css-minification',
            name: 'CSS Minification',
            icon: Maximize,
            description: 'Remove whitespace and comments',
            difficulty: 'Easy',
            impact: 'Medium',
            category: 'Size'
        },
        {
            id: 'unused-css',
            name: 'Remove Unused CSS',
            icon: Target,
            description: 'Eliminate dead code',
            difficulty: 'Medium',
            impact: 'High',
            category: 'Size'
        },
        {
            id: 'css-sprites',
            name: 'CSS Sprites',
            icon: Image,
            description: 'Combine images to reduce requests',
            difficulty: 'Hard',
            impact: 'Medium',
            category: 'Images'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Gauge className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Performance</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master CSS performance optimization techniques to create lightning-fast, efficient web experiences.
                </p>
            </div>

            {/* Interactive CSS Performance Playground */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Gauge className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        Interactive CSS Performance Playground
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        Master CSS performance optimization with interactive metrics, live comparisons, and practical techniques.
                    </CardDescription>
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <Button 
                            variant={selectedMetric === 'render-time' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedMetric('render-time')}
                            className="flex items-center gap-2"
                        >
                            <Timer className="w-4 h-4" />
                            Render Time
                        </Button>
                        <Button 
                            variant={selectedMetric === 'css-size' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedMetric('css-size')}
                            className="flex items-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            File Size
                        </Button>
                        <Button 
                            variant={selectedMetric === 'selector-performance' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedMetric('selector-performance')}
                            className="flex items-center gap-2"
                        >
                            <Target className="w-4 h-4" />
                            Selectors
                        </Button>
                        <Button 
                            variant={selectedOptimization === 'critical-css' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedOptimization('critical-css')}
                            className="flex items-center gap-2"
                        >
                            <Zap className="w-4 h-4" />
                            Critical CSS
                        </Button>
                        <Button 
                            variant={selectedOptimization === 'minification' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedOptimization('minification')}
                            className="flex items-center gap-2"
                        >
                            <Maximize className="w-4 h-4" />
                            Minification
                        </Button>
                        <Button 
                            variant={selectedOptimization === 'unused-css' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedOptimization('unused-css')}
                            className="flex items-center gap-2"
                        >
                            <Target className="w-4 h-4" />
                            Remove Unused
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Performance Impact Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Activity className="w-5 h-5" />
                                    🎯 Performance Impact Visualization
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🐌 Slow CSS</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2">
                                                <div className="h-2 bg-red-500 rounded animate-pulse" style={{ width: '100%' }}></div>
                                                <div className="h-2 bg-red-400 rounded animate-pulse" style={{ width: '80%', animationDelay: '0.5s' }}></div>
                                                <div className="h-2 bg-red-300 rounded animate-pulse" style={{ width: '60%', animationDelay: '1s' }}></div>
                                            </div>
                                            <div className="text-xs text-red-600 mt-2">Loading: 3.2s</div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Poor User Experience</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">⚡ Optimized CSS</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2">
                                                <div className="h-2 bg-green-500 rounded" style={{ width: '100%' }}></div>
                                                <div className="h-2 bg-green-400 rounded" style={{ width: '100%' }}></div>
                                                <div className="h-2 bg-green-300 rounded" style={{ width: '100%' }}></div>
                                            </div>
                                            <div className="text-xs text-green-600 mt-2">Loading: 0.8s</div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Fast & Smooth</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Performance Matters!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        A 1-second delay in page load time can reduce conversions by 7% and increase bounce rate by 32%.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5" />
                                    📊 Performance Factors
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200/50">
                                        <FileText className="w-6 h-6 text-red-500" />
                                        <div>
                                            <div className="font-semibold text-red-700 dark:text-red-300 text-sm">File Size</div>
                                            <div className="text-xs text-red-600 dark:text-red-400">Larger = Slower</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Target className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Selectors</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Complex = Slower</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200/50">
                                        <RefreshCw className="w-6 h-6 text-yellow-500" />
                                        <div>
                                            <div className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Reflows</div>
                                            <div className="text-xs text-yellow-600 dark:text-yellow-400">Frequent = Janky</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Layers className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Rendering</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Efficient = Smooth</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2">⚡</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Key Metrics</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <Timer className="w-4 h-4" />
                                            Load Time
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                                            <Cpu className="w-4 h-4" />
                                            CPU Usage
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
                                            <HardDrive className="w-4 h-4" />
                                            Memory Usage
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">+</div>
                                    
                                    <div className="text-4xl mb-2">🎯</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">User Experience</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <TrendingUp className="w-4 h-4" />
                                            Smooth Animations
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-teal-600 dark:text-teal-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Fast Interactions
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Optimize for the critical rendering path - prioritize above-the-fold content!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Performance Metrics Deep Dive */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <BarChart3 className="w-5 h-5" />
                        Performance Metrics & Measurement
                    </CardTitle>
                    <CardDescription>
                        Understanding key performance indicators and how to measure CSS performance effectively.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Metrics Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {performanceMetrics.map((metric) => (
                                <div 
                                    key={metric.id}
                                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        selectedMetric === metric.id
                                            ? 'border-green-500 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedMetric(metric.id)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <metric.icon className={`w-8 h-8 text-${metric.color}-500`} />
                                        <div>
                                            <h3 className="font-bold text-lg">{metric.name}</h3>
                                            <Badge variant="secondary" className={`bg-${metric.color}-100 text-${metric.color}-800`}>
                                                {metric.impact} Impact
                                            </Badge>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        {metric.description}
                                    </p>
                                    <div className="flex justify-between items-center text-xs">
                                        <div className="text-green-600">Good: {metric.good}</div>
                                        <div className="text-red-600">Bad: {metric.bad}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Live Performance Demo */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                            <h4 className="font-semibold mb-4 text-green-700 dark:text-green-300">📊 Live Performance Comparison</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="text-sm font-medium mb-2">Inefficient CSS</div>
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span>Parsing</span>
                                                <span className="text-red-600">120ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span>Rendering</span>
                                                <span className="text-red-600">200ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2">Optimized CSS</div>
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span>Parsing</span>
                                                <span className="text-green-600">45ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span>Rendering</span>
                                                <span className="text-green-600">80ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Optimization Techniques */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-5 h-5" />
                        CSS Optimization Techniques
                    </CardTitle>
                    <CardDescription>
                        Proven strategies to improve CSS performance and loading speed.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Critical CSS Demo */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                ⚡ Critical CSS Implementation
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-3">
                                        <div className="text-sm font-medium mb-2">Above-the-fold content loads first</div>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-green-500 rounded" style={{ width: '100%' }}></div>
                                            <div className="h-4 bg-green-400 rounded" style={{ width: '80%' }}></div>
                                            <div className="h-2 bg-gray-300 rounded" style={{ width: '60%' }}></div>
                                            <div className="h-2 bg-gray-300 rounded" style={{ width: '40%' }}></div>
                                        </div>
                                        <div className="text-xs text-green-600 mt-2">Critical CSS: Loaded instantly</div>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="font-mono text-sm text-white">
                                        <div className="text-gray-400">/* Critical CSS - Inline */</div>
                                        <div><span className="text-blue-400">body</span> {'{'}</div>
                                        <div>  <span className="text-green-400">font-family</span>: <span className="text-yellow-400">Arial</span>;</div>
                                        <div>  <span className="text-green-400">margin</span>: <span className="text-yellow-400">0</span>;</div>
                                        <div>{'}'}</div>
                                        <br />
                                        <div><span className="text-blue-400">.header</span> {'{'}</div>
                                        <div>  <span className="text-green-400">background</span>: <span className="text-yellow-400">#333</span>;</div>
                                        <div>  <span className="text-green-400">height</span>: <span className="text-yellow-400">60px</span>;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CSS Minification Demo */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Maximize className="w-5 h-5" />
                                🗜️ CSS Minification
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="text-sm font-medium mb-2 text-red-600">Before: 2.4KB</div>
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200 font-mono text-xs">
                                        <div>/* Header styles */</div>
                                        <div>.header {'{'}</div>
                                        <div>  background-color: #333333;</div>
                                        <div>  padding: 20px;</div>
                                        <div>  margin: 0;</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2 text-green-600">After: 1.1KB</div>
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 font-mono text-xs">
                                        <div>.header{'{'}background:#333;padding:20px;margin:0{'}'}</div>
                                    </div>
                                    <div className="text-xs text-green-600 mt-2">54% size reduction!</div>
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
                        Test and compare different CSS performance optimization techniques in a live, interactive environment.
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
    <title>CSS Performance Testing</title>
    <style id="critical-css">
        /* Critical CSS - Above the fold */
        body { font-family: Arial, sans-serif; margin: 0; }
        .header { background: #333; color: white; padding: 1rem; }
        .hero { background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 4rem 2rem; text-align: center; }
    </style>
</head>
<body>
    <div class="performance-tester">
        <header class="header">
            <h1>CSS Performance Tester</h1>
            <nav>
                <button onclick="testSelector('efficient')">Test Efficient Selectors</button>
                <button onclick="testSelector('inefficient')">Test Inefficient Selectors</button>
                <button onclick="testReflow()">Test Reflow Performance</button>
                <button onclick="testMinification()">Test Minification</button>
            </nav>
        </header>
        
        <section class="hero">
            <h2>Performance Testing Lab</h2>
            <p>Click buttons above to test different performance scenarios</p>
        </section>
        
        <main class="content">
            <div class="test-results" id="results">
                <h3>Test Results</h3>
                <div id="performance-data"></div>
            </div>
            
            <div class="demo-grid" id="demo-grid">
                <!-- Dynamic content will be added here -->
            </div>
        </main>
    </div>
    
    <link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
</body>
</html>`,
                            `/* Critical CSS is inlined in HTML head */

/* Non-critical CSS - Loaded asynchronously */
.content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.test-results {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.demo-item {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s ease;
}

.demo-item:hover {
    transform: translateY(-2px);
}

/* Efficient selectors */
.efficient-selector {
    background: #d4edda;
    border: 1px solid #c3e6cb;
}

/* Inefficient selectors - avoid these patterns */
div > div > div > div > .deeply-nested {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
}

.universal-selector * {
    color: red; /* Avoid universal selector */
}

/* Performance-friendly animations */
.gpu-accelerated {
    will-change: transform;
    transform: translateZ(0);
}

.smooth-animation {
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

/* Responsive design with performance in mind */
@media (max-width: 768px) {
    .demo-grid {
        grid-template-columns: 1fr;
    }
    
    .content {
        padding: 1rem;
    }
}`,
                            `// Performance testing utilities
let performanceData = [];

function measurePerformance(testName, testFunction) {
    const startTime = performance.now();
    testFunction();
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    performanceData.push({
        test: testName,
        duration: duration.toFixed(2),
        timestamp: new Date().toLocaleTimeString()
    });
    
    updateResults();
    return duration;
}

function updateResults() {
    const resultsDiv = document.getElementById('performance-data');
    resultsDiv.innerHTML = performanceData.map(data => 
        \`<div class="result-item">
            <strong>\${data.test}</strong>: \${data.duration}ms 
            <small>(\${data.timestamp})</small>
        </div>\`
    ).join('');
}

function testSelector(type) {
    const demoGrid = document.getElementById('demo-grid');
    
    if (type === 'efficient') {
        measurePerformance('Efficient Selectors', () => {
            demoGrid.innerHTML = '';
            for (let i = 0; i < 100; i++) {
                const item = document.createElement('div');
                item.className = 'demo-item efficient-selector';
                item.textContent = \`Efficient Item \${i + 1}\`;
                demoGrid.appendChild(item);
            }
        });
    } else {
        measurePerformance('Inefficient Selectors', () => {
            demoGrid.innerHTML = '';
            for (let i = 0; i < 100; i++) {
                const wrapper = document.createElement('div');
                const item = document.createElement('div');
                item.className = 'demo-item deeply-nested';
                item.textContent = \`Inefficient Item \${i + 1}\`;
                wrapper.appendChild(item);
                demoGrid.appendChild(wrapper);
            }
        });
    }
}

function testReflow() {
    measurePerformance('Reflow Test', () => {
        const items = document.querySelectorAll('.demo-item');
        items.forEach((item, index) => {
            // Force reflow by reading layout properties
            item.style.width = (200 + Math.random() * 50) + 'px';
            const width = item.offsetWidth; // This forces reflow
            item.style.height = (100 + Math.random() * 30) + 'px';
        });
    });
}

function testMinification() {
    const originalCSS = \`
    /* Unminified CSS */
    .test-element {
        background-color: #ffffff;
        padding: 20px;
        margin: 10px;
        border-radius: 5px;
    }
    \`;
    
    const minifiedCSS = '.test-element{background:#fff;padding:20px;margin:10px;border-radius:5px}';
    
    const savings = ((originalCSS.length - minifiedCSS.length) / originalCSS.length * 100).toFixed(1);
    
    document.getElementById('performance-data').innerHTML += 
        \`<div class="result-item">
            <strong>Minification Test</strong>: \${savings}% size reduction
            <br><small>Original: \${originalCSS.length} chars → Minified: \${minifiedCSS.length} chars</small>
        </div>\`;
}

// Initialize performance monitoring
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Performance Testing Lab loaded!');
    
    // Measure initial page load performance
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        performanceData.push({
            test: 'Page Load Time',
            duration: loadTime,
            timestamp: new Date().toLocaleTimeString()
        });
        updateResults();
    });
});`
                        )}
                        className="w-full"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Open Performance Testing Lab
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
