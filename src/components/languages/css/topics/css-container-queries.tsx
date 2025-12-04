'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
    Play, Layout, Code, Target, CheckCircle, AlertTriangle, 
    Zap, Grid, Settings, Monitor, Smartphone, Tablet
} from 'lucide-react';

interface CssContainerQueriesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssContainerQueries({ onOpenWebPlayground }: CssContainerQueriesProps) {
    const [selectedExample, setSelectedExample] = useState('card');

    // Container Query Examples
    const containerExamples = [
        {
            name: 'card',
            title: 'Responsive Card',
            icon: Layout,
            desc: 'Card that adapts layout based on container width',
            code: `@container card (min-width: 300px) {
  .card { flex-direction: row; }
}`
        },
        {
            name: 'navigation',
            title: 'Adaptive Navigation',
            icon: Grid,
            desc: 'Navigation that shows/hides items based on space',
            code: `@container nav (min-width: 400px) {
  .nav-links { display: flex; }
  .hamburger { display: none; }
}`
        },
        {
            name: 'sidebar',
            title: 'Flexible Sidebar',
            icon: Monitor,
            desc: 'Sidebar content that adapts to available space',
            code: `@container sidebar (min-width: 200px) {
  .sidebar-content { padding: 1rem; }
  .sidebar-text { display: block; }
}`
        }
    ];

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Container Queries Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>🎯 Container Queries Demo</h1>
        <p>Resize the containers below to see how components adapt!</p>
        
        <section class="demo-section">
            <h2>📋 Responsive Card Component</h2>
            <div class="demo-grid">
                <div class="card-container wide">
                    <div class="responsive-card">
                        <div class="card-icon">🎯</div>
                        <div class="card-content">
                            <h3>Wide Container</h3>
                            <p>Horizontal layout when space allows</p>
                        </div>
                    </div>
                </div>
                
                <div class="card-container narrow">
                    <div class="responsive-card">
                        <div class="card-icon">🎯</div>
                        <div class="card-content">
                            <h3>Narrow Container</h3>
                            <p>Vertical layout for tight spaces</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🧭 Adaptive Navigation</h2>
            <div class="nav-demo-grid">
                <div class="nav-container wide-nav">
                    <nav class="responsive-nav">
                        <div class="nav-brand">Brand</div>
                        <div class="nav-links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Contact</a>
                        </div>
                    </nav>
                </div>
                
                <div class="nav-container narrow-nav">
                    <nav class="responsive-nav">
                        <div class="nav-brand">Brand</div>
                        <div class="hamburger">☰</div>
                    </nav>
                </div>
            </div>
        </section>
    </div>
</body>
</html>`,
        css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #333;
    line-height: 1.6;
    padding: 1rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

h1 { font-size: 2.5rem; text-align: center; margin-bottom: 1rem; }
h2 { font-size: 1.5rem; margin: 2rem 0 1rem; }

.demo-section { margin-bottom: 3rem; }

/* Card Demo */
.demo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
}

.card-container {
    border: 2px dashed #d1d5db;
    padding: 1rem;
    border-radius: 10px;
    container-type: inline-size;
    container-name: card;
}

.wide { width: 400px; max-width: 100%; }
.narrow { width: 250px; }

.responsive-card {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

@container card (min-width: 300px) {
    .responsive-card {
        flex-direction: row;
        text-align: left;
        align-items: center;
    }
    
    .card-icon {
        margin-bottom: 0;
        margin-right: 1rem;
        font-size: 2.5rem;
    }
}

/* Navigation Demo */
.nav-demo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
}

.nav-container {
    border: 2px dashed #d1d5db;
    padding: 1rem;
    border-radius: 10px;
    container-type: inline-size;
    container-name: navigation;
}

.wide-nav { width: 500px; max-width: 100%; }
.narrow-nav { width: 300px; }

.responsive-nav {
    background: #374151;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand { font-weight: bold; font-size: 1.1rem; }

.nav-links {
    display: none;
    gap: 1.5rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
}

.hamburger { font-size: 1.5rem; cursor: pointer; }

@container navigation (min-width: 400px) {
    .nav-links { display: flex; }
    .hamburger { display: none; }
}

@media (max-width: 768px) {
    .demo-grid, .nav-demo-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .wide, .wide-nav { width: 100%; }
    .narrow, .narrow-nav { width: 250px; margin: 0 auto; }
}`,
        js: `document.addEventListener('DOMContentLoaded', function() {
    console.log('Container Queries Demo loaded!');
    
    // Log container query support
    if (CSS.supports('container-type', 'inline-size')) {
        console.log('✅ Container queries are supported!');
    } else {
        console.log('❌ Container queries not supported');
    }
});`
    };

    return (
        <div className="space-y-8">
            <PageHeader
                icon={Layout}
                category="CSS · Responsive Design"
                title="Container Queries"
                description="Build components that adapt to their container size instead of just the viewport."
                colorTheme="blue"
            />

            {/* What are Container Queries? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Layout className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are Container Queries?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Revolutionary component-based responsive design - components that adapt to their own space, not the viewport!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Container vs Viewport Queries
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">📦 Container Query</div>
                                        <div className="border-2 border-dashed border-blue-300 p-3 rounded-lg bg-blue-50/50">
                                            <div className="text-xs text-blue-600 mb-2">Container: 200px</div>
                                            <div className="w-full h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                Compact Layout
                                            </div>
                                        </div>
                                        <div className="border-2 border-dashed border-green-300 p-3 rounded-lg bg-green-50/50 mt-2">
                                            <div className="text-xs text-green-600 mb-2">Container: 400px</div>
                                            <div className="grid grid-cols-2 gap-1 h-12">
                                                <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                    Side
                                                </div>
                                                <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                    by Side
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Adapts to Container</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🌐 Media Query</div>
                                        <div className="border-2 border-dashed border-gray-300 p-3 rounded-lg bg-gray-50/50">
                                            <div className="text-xs text-gray-600 mb-2">Viewport: 1200px</div>
                                            <div className="grid grid-cols-2 gap-1 h-12">
                                                <div className="bg-gradient-to-r from-gray-400 to-gray-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                    Side
                                                </div>
                                                <div className="bg-gradient-to-r from-gray-400 to-gray-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                    by Side
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-300 p-3 rounded-lg bg-gray-50/50 mt-2">
                                            <div className="text-xs text-gray-600 mb-2">Viewport: 1200px</div>
                                            <div className="grid grid-cols-2 gap-1 h-12">
                                                <div className="bg-gradient-to-r from-gray-400 to-gray-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                    Side
                                                </div>
                                                <div className="bg-gradient-to-r from-gray-400 to-gray-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                                    by Side
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Ignores Container Size</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Component Intelligence!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Container queries make components truly modular - they adapt based on their own space, not the entire screen!
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Grid className="w-5 h-5" />
                                    🎨 Container Query Features
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Layout className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Component Isolation</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Self-contained responsive logic</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Target className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Reusable Anywhere</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Works in any layout context</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Predictable Behavior</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">No viewport surprises</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Zap className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Modern CSS</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Latest responsive technique</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">📦</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Container Queries</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Component-Aware
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Truly Modular
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Context-Sensitive
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">🌐</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Media Queries</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Viewport-Only
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Global Scope
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Context-Blind
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use container queries for component-level responsiveness and media queries for page-level layouts!
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
                            <span className="text-gray-400 text-sm ml-2">Container Queries Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 📦 Setup Container */</div>
                            <div className="text-blue-400">.card-container</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-green-400">container-type</span>: <span className="text-yellow-400">inline-size</span>;</div>
                            <div className="text-white">   <span className="text-green-400">container-name</span>: <span className="text-yellow-400">card</span>;</div>
                            <div className="text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎯 Container Query */</div>
                            <div className="text-purple-400">@container card (min-width: 300px)</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-blue-400">.card</span> {'{'}</div>
                            <div className="text-white">     <span className="text-green-400">flex-direction</span>: <span className="text-yellow-400">row</span>;</div>
                            <div className="text-white">     <span className="text-green-400">text-align</span>: <span className="text-yellow-400">left</span>;</div>
                            <div className="text-white">   {'}'}</div>
                            <div className="text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Container Query Syntax */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Code className="w-5 h-5" />
                        Basic Syntax & Setup
                    </CardTitle>
                    <CardDescription>
                        Learn the fundamental syntax for defining and using container queries.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h5 className="font-medium mb-2">Step 1: Define Container Context</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                .card-container {'{'}
                                <br />
                                {'  '}container-type: inline-size; /* or size, normal */
                                <br />
                                {'  '}container-name: card; /* optional name */
                                <br />
                                {'}'}
                            </code>
                        </div>
                        <div>
                            <h5 className="font-medium mb-2">Step 2: Apply Container Queries</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                @container card (min-width: 300px) {'{'}
                                <br />
                                {'  '}.card {'{'}
                                <br />
                                {'    '}display: flex;
                                <br />
                                {'    '}flex-direction: row;
                                <br />
                                {'  '}{'}'}
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Container Types */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Settings className="w-5 h-5" />
                        Container Types
                    </CardTitle>
                    <CardDescription>
                        Understanding different container types and when to use them.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400">
                            <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">inline-size</h5>
                            <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                                Queries based on inline dimension (width in horizontal writing mode)
                            </p>
                            <code className="text-xs bg-blue-100 dark:bg-blue-800 p-2 rounded block">
                                container-type: inline-size;
                            </code>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400">
                            <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">size</h5>
                            <p className="text-xs text-green-600 dark:text-green-400 mb-2">
                                Queries based on both inline and block dimensions
                            </p>
                            <code className="text-xs bg-green-100 dark:bg-green-800 p-2 rounded block">
                                container-type: size;
                            </code>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border-l-4 border-purple-400">
                            <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">normal</h5>
                            <p className="text-xs text-purple-600 dark:text-purple-400 mb-2">
                                No containment (default value)
                            </p>
                            <code className="text-xs bg-purple-100 dark:bg-purple-800 p-2 rounded block">
                                container-type: normal;
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Examples */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Target className="w-5 h-5" />
                        Live Container Query Examples
                    </CardTitle>
                    <CardDescription>
                        Interactive demonstrations showing container queries in action.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Card Component Example */}
                        <div>
                            <h5 className="font-medium mb-3">📋 Responsive Card Component</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Wide Container */}
                                <div className="space-y-2">
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Wide Container (500px)</div>
                                    <div 
                                        className="border-2 border-dashed border-gray-300 p-4 rounded"
                                        style={{width: '500px', maxWidth: '100%'}}
                                    >
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded flex items-center gap-4">
                                            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                                                🎯
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="font-bold">Horizontal Layout</h6>
                                                <p className="text-sm opacity-90">Container is wide enough for side-by-side layout</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Narrow Container */}
                                <div className="space-y-2">
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Narrow Container (250px)</div>
                                    <div 
                                        className="border-2 border-dashed border-gray-300 p-4 rounded"
                                        style={{width: '250px'}}
                                    >
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded text-center">
                                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl mx-auto mb-2">
                                                🎯
                                            </div>
                                            <div>
                                                <h6 className="font-bold text-sm">Vertical Layout</h6>
                                                <p className="text-xs opacity-90">Stacked for narrow containers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
                                <h6 className="font-medium mb-2">CSS Code:</h6>
                                <code className="text-xs block whitespace-pre">
{`.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
  text-align: center;
}

@container card (min-width: 300px) {
  .card {
    flex-direction: row;
    text-align: left;
  }
}`}
                                </code>
                            </div>
                        </div>

                        {/* Navigation Example */}
                        <div>
                            <h5 className="font-medium mb-3">🧭 Responsive Navigation</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Full Navigation */}
                                <div className="space-y-2">
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Wide Navigation (600px)</div>
                                    <div 
                                        className="border-2 border-dashed border-gray-300 p-2 rounded"
                                        style={{width: '600px', maxWidth: '100%'}}
                                    >
                                        <nav className="bg-gray-800 text-white p-3 rounded flex items-center justify-between">
                                            <div className="font-bold">Brand</div>
                                            <div className="flex gap-4 text-sm">
                                                <a href="#" className="hover:text-blue-300">Home</a>
                                                <a href="#" className="hover:text-blue-300">About</a>
                                                <a href="#" className="hover:text-blue-300">Services</a>
                                                <a href="#" className="hover:text-blue-300">Contact</a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>

                                {/* Compact Navigation */}
                                <div className="space-y-2">
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Narrow Navigation (300px)</div>
                                    <div 
                                        className="border-2 border-dashed border-gray-300 p-2 rounded"
                                        style={{width: '300px'}}
                                    >
                                        <nav className="bg-gray-800 text-white p-3 rounded flex items-center justify-between">
                                            <div className="font-bold">Brand</div>
                                            <div className="text-xl">☰</div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Features */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Zap className="w-5 h-5" />
                        Advanced Container Query Features
                    </CardTitle>
                    <CardDescription>
                        Explore advanced features like container query units, named containers, and complex conditions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded border-l-4 border-indigo-400">
                                <h5 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">Container Query Units</h5>
                                <div className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                                    <div><code className="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">cqw</code> - 1% of container width</div>
                                    <div><code className="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">cqh</code> - 1% of container height</div>
                                    <div><code className="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">cqi</code> - 1% of container inline size</div>
                                    <div><code className="bg-indigo-100 dark:bg-indigo-800 px-1 rounded">cqb</code> - 1% of container block size</div>
                                </div>
                            </div>
                            
                            <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded border-l-4 border-teal-400">
                                <h5 className="font-medium text-teal-700 dark:text-teal-300 mb-2">Named Containers</h5>
                                <code className="text-xs bg-teal-100 dark:bg-teal-800 p-2 rounded block">
                                    .sidebar {'{'}
                                    <br />
                                    {'  '}container-name: sidebar;
                                    <br />
                                    {'}'}
                                    <br />
                                    <br />
                                    @container sidebar (min-width: 200px) {'{'}
                                    <br />
                                    {'  '}/* styles */
                                    <br />
                                    {'}'}
                                </code>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded border-l-4 border-rose-400">
                                <h5 className="font-medium text-rose-700 dark:text-rose-300 mb-2">Multiple Conditions</h5>
                                <code className="text-xs bg-rose-100 dark:bg-rose-800 p-2 rounded block">
                                    @container (min-width: 300px) and (max-width: 600px) {'{'}
                                    <br />
                                    {'  '}/* Medium container styles */
                                    <br />
                                    {'}'}
                                </code>
                            </div>
                            
                            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded border-l-4 border-amber-400">
                                <h5 className="font-medium text-amber-700 dark:text-amber-300 mb-2">Browser Support</h5>
                                <div className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                                    <div>✅ Chrome 105+</div>
                                    <div>✅ Firefox 110+</div>
                                    <div>✅ Safari 16+</div>
                                    <div>⚠️ Use @supports for fallbacks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <CheckCircle className="w-5 h-5" />
                        Container Queries Best Practices
                    </CardTitle>
                    <CardDescription>
                        Guidelines for effective use of container queries in production applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
                            <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">✅ Do This</h5>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                                <li>• Use for component-level responsiveness</li>
                                <li>• Combine with CSS Grid for powerful layouts</li>
                                <li>• Name containers for clarity</li>
                                <li>• Use container query units for fluid sizing</li>
                                <li>• Test across different container sizes</li>
                                <li>• Provide fallbacks with @supports</li>
                            </ul>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
                            <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Avoid This</h5>
                            <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                                <li>• Don't replace all media queries</li>
                                <li>• Avoid deep nesting of containers</li>
                                <li>• Don't ignore browser support</li>
                                <li>• Avoid complex container hierarchies</li>
                                <li>• Don't forget about performance</li>
                                <li>• Avoid overusing container queries</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Real-world Use Cases */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Grid className="w-5 h-5" />
                        Real-World Use Cases
                    </CardTitle>
                    <CardDescription>
                        Practical applications where container queries excel in modern web development.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                            <div className="text-2xl mb-2">🃏</div>
                            <h5 className="font-medium mb-2">Card Components</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Cards that adapt their layout based on available space in sidebars, grids, or flexible containers.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                            <div className="text-2xl mb-2">🧭</div>
                            <h5 className="font-medium mb-2">Navigation Menus</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Navigation that switches between full menu and hamburger based on container width.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                            <div className="text-2xl mb-2">📊</div>
                            <h5 className="font-medium mb-2">Data Visualizations</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Charts and graphs that adjust complexity and detail based on container size.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Container Queries Playground
                    </CardTitle>
                    <CardDescription>
                        Interactive playground demonstrating container queries with live examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Interactive Demo
                        </Button>
                        <Badge variant="secondary">📦 Container Queries</Badge>
                        <Badge variant="secondary">📋 Responsive Cards</Badge>
                        <Badge variant="secondary">🧭 Adaptive Navigation</Badge>
                        <Badge variant="secondary">📱 Mobile Friendly</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
