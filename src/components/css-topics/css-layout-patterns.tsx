'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Layout, Grid, Columns, Rows, Monitor, Smartphone,
    ArrowRightLeft, ArrowUpDown, Maximize, Settings, Target,
    CheckCircle, AlertTriangle, Code, Hash, Plus, Zap
} from 'lucide-react';

interface CssLayoutPatternsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssLayoutPatterns({ onOpenWebPlayground }: CssLayoutPatternsProps) {
    const [selectedPattern, setSelectedPattern] = useState('holy-grail');

    // Common Layout Patterns
    const layoutPatterns = [
        {
            name: 'holy-grail',
            title: 'Holy Grail Layout',
            desc: 'Classic three-column layout with header and footer',
            icon: Layout,
            difficulty: 'Intermediate',
            useCase: 'Traditional websites, blogs, documentation sites'
        },
        {
            name: 'sidebar',
            title: 'Sidebar Layout',
            desc: 'Fixed sidebar with flexible main content area',
            icon: Columns,
            difficulty: 'Beginner',
            useCase: 'Admin dashboards, documentation, apps'
        },
        {
            name: 'card-grid',
            title: 'Card Grid Layout',
            desc: 'Responsive grid of equal-height cards',
            icon: Grid,
            difficulty: 'Beginner',
            useCase: 'Product catalogs, portfolios, galleries'
        },
        {
            name: 'hero-section',
            title: 'Hero Section',
            desc: 'Full-screen hero with centered content',
            icon: Monitor,
            difficulty: 'Beginner',
            useCase: 'Landing pages, marketing sites'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Layout Patterns Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Layout Patterns: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Holy Grail Layout</h2>
            <div class="holy-grail-demo">
                <header class="header">Header</header>
                <nav class="nav">Navigation</nav>
                <main class="main">Main Content Area</main>
                <aside class="aside">Sidebar</aside>
                <footer class="footer">Footer</footer>
            </div>
        </section>

        <section class="demo-section">
            <h2>Sidebar Layout</h2>
            <div class="sidebar-demo">
                <aside class="sidebar">Sidebar</aside>
                <main class="content">Main Content</main>
            </div>
        </section>

        <section class="demo-section">
            <h2>Card Grid Layout</h2>
            <div class="card-grid-demo">
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>
                <div class="card">Card 3</div>
                <div class="card">Card 4</div>
                <div class="card">Card 5</div>
                <div class="card">Card 6</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Hero Section</h2>
            <div class="hero-demo">
                <div class="hero-content">
                    <h1>Hero Title</h1>
                    <p>Hero description text</p>
                    <button>Call to Action</button>
                </div>
            </div>
        </section>
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
    min-height: 100vh;
    padding: 2rem;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.demo-section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Holy Grail Layout */
.holy-grail-demo {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    height: 400px;
    border: 2px dashed #dee2e6;
    padding: 1rem;
}

.header { grid-area: header; background: #007bff; }
.nav { grid-area: nav; background: #28a745; }
.main { grid-area: main; background: #6c757d; }
.aside { grid-area: aside; background: #ffc107; color: #333; }
.footer { grid-area: footer; background: #dc3545; }

.header, .nav, .main, .aside, .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 1rem;
}

/* Sidebar Layout */
.sidebar-demo {
    display: flex;
    height: 300px;
    gap: 1rem;
    border: 2px dashed #dee2e6;
    padding: 1rem;
}

.sidebar {
    width: 250px;
    background: #007bff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 5px;
}

.content {
    flex: 1;
    background: #6c757d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 5px;
}

/* Card Grid Layout */
.card-grid-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
    border: 2px dashed #dee2e6;
}

.card {
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 120px;
}

.card:nth-child(even) {
    background: linear-gradient(135deg, #28a745, #1e7e34);
}

/* Hero Section */
.hero-demo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    color: white;
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-content button {
    background: #007bff;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.hero-content button:hover {
    background: #0056b3;
}`,
        js: `console.log('CSS Layout Patterns Demo loaded successfully!');`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layout className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Layout Patterns</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master essential layout patterns for modern web development with comprehensive examples and interactive demonstrations.
                </p>
            </div>

            {/* Layout Pattern Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Grid className="w-5 h-5 text-blue-500" />
                        Essential Layout Patterns
                    </CardTitle>
                    <CardDescription>
                        Common layout patterns every web developer should master, from basic to advanced.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {layoutPatterns.map((pattern, index) => (
                            <div 
                                key={pattern.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedPattern === pattern.name 
                                        ? 'ring-2 ring-primary ring-offset-2 border-primary' 
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => setSelectedPattern(pattern.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <pattern.icon className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-sm">{pattern.title}</h3>
                                </div>
                                <p className="text-xs text-gray-600 mb-2">{pattern.desc}</p>
                                <div className="flex items-center justify-between">
                                    <Badge variant="secondary" className="text-xs">
                                        {pattern.difficulty}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Holy Grail Layout Demo */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Layout className="w-5 h-5" />
                        Live Holy Grail Layout Demo
                    </CardTitle>
                    <CardDescription>
                        The classic three-column layout with header and footer using CSS Grid.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div className="grid gap-2 h-[300px] border-2 border-dashed border-gray-300 p-4" style={{
                                gridTemplateAreas: '"header header header" "nav main aside" "footer footer footer"',
                                gridTemplateColumns: '150px 1fr 150px',
                                gridTemplateRows: 'auto 1fr auto'
                            }}>
                                <div className="bg-blue-500 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'header'}}>
                                    Header
                                </div>
                                <div className="bg-green-500 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'nav'}}>
                                    Navigation
                                </div>
                                <div className="bg-gray-600 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'main'}}>
                                    Main Content
                                </div>
                                <div className="bg-yellow-500 text-black p-3 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'aside'}}>
                                    Sidebar
                                </div>
                                <div className="bg-red-500 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'footer'}}>
                                    Footer
                                </div>
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            .container {'{'}
                            <br />
                            {'  '}display: grid;
                            <br />
                            {'  '}grid-template-areas:
                            <br />
                            {'    '}"header header header"
                            <br />
                            {'    '}"nav main aside"
                            <br />
                            {'    '}"footer footer footer";
                            <br />
                            {'  '}grid-template-columns: 200px 1fr 200px;
                            <br />
                            {'  '}grid-template-rows: auto 1fr auto;
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Sidebar Layout Demo */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Columns className="w-5 h-5" />
                        Live Sidebar Layout Demo
                    </CardTitle>
                    <CardDescription>
                        Fixed sidebar with flexible main content area using Flexbox.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div className="flex gap-3 h-[200px] border-2 border-dashed border-gray-300 p-4">
                                <div className="w-[200px] bg-blue-500 text-white p-3 rounded font-bold text-center flex items-center justify-center">
                                    Fixed Sidebar
                                </div>
                                <div className="flex-1 bg-gray-600 text-white p-3 rounded font-bold text-center flex items-center justify-center">
                                    Flexible Main Content
                                </div>
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            .container {'{'}
                            <br />
                            {'  '}display: flex;
                            <br />
                            {'  '}gap: 1rem;
                            <br />
                            {'}'}
                            <br />
                            .sidebar {'{'}
                            <br />
                            {'  '}width: 250px; /* Fixed width */
                            <br />
                            {'}'}
                            <br />
                            .main {'{'}
                            <br />
                            {'  '}flex: 1; /* Takes remaining space */
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Card Grid Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Grid className="w-5 h-5" />
                        Live Card Grid Demo
                    </CardTitle>
                    <CardDescription>
                        Responsive card grid that adapts to screen size using CSS Grid auto-fit.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div className="grid gap-3 border-2 border-dashed border-gray-300 p-4" style={{
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
                            }}>
                                {Array.from({length: 6}, (_, i) => (
                                    <div key={i} className={`text-white p-4 rounded font-bold text-center flex items-center justify-center min-h-[100px] ${
                                        i % 6 === 0 ? 'bg-blue-500' :
                                        i % 6 === 1 ? 'bg-green-500' :
                                        i % 6 === 2 ? 'bg-red-500' :
                                        i % 6 === 3 ? 'bg-yellow-500 text-black' :
                                        i % 6 === 4 ? 'bg-purple-500' : 'bg-orange-500'
                                    }`}>
                                        Card {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            .card-grid {'{'}
                            <br />
                            {'  '}display: grid;
                            <br />
                            {'  '}grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                            <br />
                            {'  '}gap: 1rem;
                            <br />
                            {'}'}
                            <br />
                            .card {'{'}
                            <br />
                            {'  '}padding: 1.5rem;
                            <br />
                            {'  '}border-radius: 8px;
                            <br />
                            {'  '}background: white;
                            <br />
                            {'  '}box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Hero Section Demo */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Monitor className="w-5 h-5" />
                        Live Hero Section Demo
                    </CardTitle>
                    <CardDescription>
                        Full-screen hero section with perfectly centered content using Flexbox.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div className="flex items-center justify-center h-[250px] bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg border-2 border-dashed border-gray-300">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-3">Hero Title</h2>
                                    <p className="text-lg mb-4 opacity-90">Compelling hero description text</p>
                                    <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Call to Action
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            .hero {'{'}
                            <br />
                            {'  '}display: flex;
                            <br />
                            {'  '}align-items: center;
                            <br />
                            {'  '}justify-content: center;
                            <br />
                            {'  '}min-height: 100vh;
                            <br />
                            {'  '}background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            <br />
                            {'  '}text-align: center;
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Layout Patterns */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Settings className="w-5 h-5" />
                        Advanced Layout Patterns
                    </CardTitle>
                    <CardDescription>
                        More complex layout patterns for modern web applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Masonry Layout */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Masonry Layout (Pinterest-style)</h4>
                            <div className="columns-3 gap-3 border-2 border-dashed border-gray-300 p-4">
                                {Array.from({length: 8}, (_, i) => (
                                    <div key={i} className={`mb-3 break-inside-avoid text-white p-3 rounded font-bold text-center ${
                                        i % 4 === 0 ? 'bg-blue-500 h-24' :
                                        i % 4 === 1 ? 'bg-green-500 h-32' :
                                        i % 4 === 2 ? 'bg-red-500 h-20' : 'bg-purple-500 h-28'
                                    }`}>
                                        Item {i + 1}
                                    </div>
                                ))}
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .masonry {'{'}
                                <br />
                                {'  '}columns: 3;
                                <br />
                                {'  '}gap: 1rem;
                                <br />
                                {'}'}
                                <br />
                                .masonry-item {'{'}
                                <br />
                                {'  '}break-inside: avoid;
                                <br />
                                {'  '}margin-bottom: 1rem;
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* Sticky Header Layout */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Sticky Header Layout</h4>
                            <div className="h-[200px] overflow-y-auto border-2 border-dashed border-gray-300">
                                <div className="sticky top-0 bg-blue-500 text-white p-3 font-bold text-center">
                                    Sticky Header
                                </div>
                                <div className="p-4 space-y-4">
                                    {Array.from({length: 10}, (_, i) => (
                                        <div key={i} className="bg-gray-100 p-3 rounded">
                                            Content item {i + 1} - scroll to see sticky header behavior
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .header {'{'}
                                <br />
                                {'  '}position: sticky;
                                <br />
                                {'  '}top: 0;
                                <br />
                                {'  '}z-index: 100;
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Layout Best Practices */}
            <Card className="border-violet-200 bg-violet-50/50 dark:bg-violet-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-violet-700 dark:text-violet-300">
                        <CheckCircle className="w-5 h-5" />
                        Layout Best Practices & Tips
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for choosing and implementing layout patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                ✅ Best Practices
                            </h4>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                                <li>• Use CSS Grid for two-dimensional layouts</li>
                                <li>• Use Flexbox for one-dimensional layouts</li>
                                <li>• Consider mobile-first responsive design</li>
                                <li>• Use semantic HTML with layout CSS</li>
                                <li>• Test layouts with varying content lengths</li>
                                <li>• Implement proper fallbacks for older browsers</li>
                                <li>• Use consistent spacing and alignment</li>
                            </ul>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Common Pitfalls
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                                <li>• Don't use tables for layout</li>
                                <li>• Avoid fixed heights that break with content</li>
                                <li>• Don't rely solely on absolute positioning</li>
                                <li>• Avoid complex nested float layouts</li>
                                <li>• Don't ignore accessibility considerations</li>
                                <li>• Avoid layouts that don't work on mobile</li>
                                <li>• Don't overcomplicate simple layouts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Layout Method Selection Guide</h4>
                        <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <p><strong>CSS Grid:</strong> Page layouts, complex positioning, two-dimensional arrangements</p>
                            <p><strong>Flexbox:</strong> Component layouts, navigation bars, centering, one-dimensional arrangements</p>
                            <p><strong>CSS Multi-column:</strong> Text layouts, masonry-style arrangements</p>
                            <p><strong>Position:</strong> Overlays, tooltips, specific positioning needs</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Layout Patterns Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive layout examples including Holy Grail, Sidebar, Card Grid, Hero Section, and advanced patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Layout Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Layout className="w-3 h-3" />
                            Holy Grail
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Columns className="w-3 h-3" />
                            Sidebar
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Grid className="w-3 h-3" />
                            Card Grid
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Monitor className="w-3 h-3" />
                            Hero Section
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Settings className="w-3 h-3" />
                            Advanced Patterns
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Interactive Demos
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
