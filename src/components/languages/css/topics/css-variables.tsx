
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Play, Variable, Lightbulb, BoxSelect, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Eye, MousePointer, Globe,
    Layers, RefreshCw, Sun, Moon, Paintbrush, Sliders, Sparkles, Info
} from 'lucide-react';

interface CssVariablesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssVariables({ onOpenWebPlayground }: CssVariablesProps) {
    const [selectedTheme, setSelectedTheme] = useState('light');
    const [selectedScope, setSelectedScope] = useState('global');

    // Variable Categories
    const variableCategories = [
        {
            name: 'colors',
            title: 'Colors',
            icon: Palette,
            desc: 'Brand colors, themes, states',
            examples: ['--primary-color', '--text-color', '--bg-color']
        },
        {
            name: 'spacing',
            title: 'Spacing',
            icon: Layers,
            desc: 'Margins, padding, gaps',
            examples: ['--spacing-sm', '--spacing-md', '--spacing-lg']
        },
        {
            name: 'typography',
            title: 'Typography',
            icon: Paintbrush,
            desc: 'Font sizes, weights, families',
            examples: ['--font-size-lg', '--font-weight-bold', '--line-height']
        },
        {
            name: 'layout',
            title: 'Layout',
            icon: BoxSelect,
            desc: 'Widths, heights, borders',
            examples: ['--container-width', '--border-radius', '--shadow']
        }
    ];

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
    * { 
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }

    /* CSS Variables - Light Theme (Default) */
    :root {
        --primary-color: #3b82f6;
        --secondary-color: #10b981;
        --accent-color: #f59e0b;
        --bg-color: #ffffff;
        --text-color: #1f2937;
        --border-color: #e5e7eb;
        --card-bg: #f8f9fa;
        
        --spacing-xs: 4px;
        --spacing-sm: 8px;
        --spacing-md: 16px;
        --spacing-lg: 24px;
        --spacing-xl: 32px;
        
        --font-size-sm: 0.875rem;
        --font-size-md: 1rem;
        --font-size-lg: 1.25rem;
        --font-size-xl: 1.5rem;
        --font-weight-normal: 400;
        --font-weight-bold: 600;
        --line-height: 1.6;
        
        --border-radius: 8px;
        --container-width: 1200px;
        --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        --transition: 0.3s ease;
    }

    /* CRITICAL: Dark Mode using @media query */
    @media (prefers-color-scheme: dark) {
        :root {
            --primary-color: #60a5fa;
            --secondary-color: #34d399;
            --accent-color: #fbbf24;
            --bg-color: #1f2937;
            --text-color: #f9fafb;
            --border-color: #374151;
            --card-bg: #374151;
        }
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: var(--text-color);
        line-height: var(--line-height);
        padding: var(--spacing-lg);
        min-height: 100vh;
        transition: all var(--transition);
        overflow-x: hidden;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
        }
    }

    .container {
        max-width: var(--container-width);
        margin: 0 auto;
        background: var(--bg-color);
        border-radius: 16px;
        padding: var(--spacing-xl);
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        overflow: hidden;
    }

    h1 { 
        font-size: var(--font-size-xl); 
        text-align: center; 
        margin-bottom: var(--spacing-md);
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    h2 { 
        font-size: var(--font-size-lg); 
        margin: var(--spacing-xl) 0 var(--spacing-md);
        color: var(--primary-color);
    }

    h3 {
        font-size: var(--font-size-md);
        margin-bottom: var(--spacing-sm);
        color: var(--primary-color);
    }

    p {
        text-align: center;
        color: var(--text-color);
        margin-bottom: var(--spacing-lg);
    }

    .demo-section { 
        margin-bottom: var(--spacing-xl);
        overflow: hidden;
    }

    .variable-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-md);
        width: 100%;
    }

    .variable-demo {
        padding: var(--spacing-lg);
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--card-bg);
        box-shadow: var(--shadow);
        transition: all var(--transition);
        overflow: hidden;
        max-width: 100%;
    }

    .variable-demo:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .variable-demo h3 {
        color: var(--primary-color);
        margin-bottom: var(--spacing-md);
        font-size: var(--font-size-md);
    }

    .color-swatches {
        display: flex;
        gap: var(--spacing-sm);
        flex-wrap: wrap;
    }

    .swatch {
        width: 60px;
        height: 60px;
        border-radius: var(--border-radius);
        border: 2px solid var(--border-color);
    }

    .swatch.primary { background: var(--primary-color); }
    .swatch.secondary { background: var(--secondary-color); }
    .swatch.accent { background: var(--accent-color); }

    .spacing-example {
        display: flex;
        gap: var(--spacing-sm);
        align-items: center;
        flex-wrap: wrap;
    }

    .box {
        background: var(--primary-color);
        color: white;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-sm);
        word-wrap: break-word;
        overflow: hidden;
    }

    .box.small { 
        padding: var(--spacing-xs);
        width: 40px;
        height: 40px;
        max-width: 100%;
    }

    .box.medium { 
        padding: var(--spacing-sm);
        width: 50px;
        height: 50px;
        max-width: 100%;
    }

    .box.large { 
        padding: var(--spacing-md);
        width: 60px;
        height: 60px;
        max-width: 100%;
    }

    .text-small { font-size: var(--font-size-sm); }
    .text-medium { font-size: var(--font-size-md); font-weight: var(--font-weight-bold); }
    .text-large { font-size: var(--font-size-lg); color: var(--primary-color); }

    .layout-box {
        background: var(--secondary-color);
        color: white;
        padding: var(--spacing-md);
        border-radius: var(--border-radius);
        margin-bottom: var(--spacing-sm);
        text-align: center;
        font-weight: var(--font-weight-bold);
        word-wrap: break-word;
        overflow: hidden;
        max-width: 100%;
    }

    .layout-card {
        background: var(--accent-color);
        color: white;
        padding: var(--spacing-md);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        text-align: center;
        font-weight: var(--font-weight-bold);
        word-wrap: break-word;
        overflow: hidden;
        max-width: 100%;
    }

    .dynamic-demo {
        text-align: center;
        padding: var(--spacing-lg);
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--card-bg);
        overflow: hidden;
        max-width: 100%;
    }

    .slider-container {
        margin-bottom: var(--spacing-md);
    }

    .slider-container label {
        display: block;
        margin-bottom: var(--spacing-xs);
        font-weight: var(--font-weight-bold);
    }

    .slider-container input {
        width: 200px;
        margin: 0 auto;
    }

    .dynamic-box {
        background: var(--primary-color);
        color: white;
        padding: var(--dynamic-spacing, var(--spacing-md));
        border-radius: var(--dynamic-radius, var(--border-radius));
        margin: var(--spacing-lg) auto 0;
        width: 200px;
        max-width: 100%;
        text-align: center;
        font-weight: var(--font-weight-bold);
        transition: all var(--transition);
        word-wrap: break-word;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        .variable-grid { grid-template-columns: 1fr; }
        .spacing-example { flex-direction: column; }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 CSS Variables Showcase</h1>
        <p>See how CSS variables create maintainable and themeable designs!</p>

        <section class="demo-section">
            <h2>🎯 Variable Categories</h2>
            <div class="variable-grid">
                <div class="variable-demo colors-demo">
                    <h3>Colors</h3>
                    <div class="color-swatches">
                        <div class="swatch primary"></div>
                        <div class="swatch secondary"></div>
                        <div class="swatch accent"></div>
                    </div>
                </div>
                
                <div class="variable-demo spacing-demo">
                    <h3>Spacing</h3>
                    <div class="spacing-example">
                        <div class="box small">SM</div>
                        <div class="box medium">MD</div>
                        <div class="box large">LG</div>
                    </div>
                </div>
                
                <div class="variable-demo typography-demo">
                    <h3>Typography</h3>
                    <div class="text-small">Small Text</div>
                    <div class="text-medium">Medium Text</div>
                    <div class="text-large">Large Text</div>
                </div>
                
                <div class="variable-demo layout-demo">
                    <h3>Layout</h3>
                    <div class="layout-box">Rounded Box</div>
                    <div class="layout-card">Card with Shadow</div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🔄 Dynamic Variables</h2>
            <div class="dynamic-demo">
                <div class="slider-container">
                    <label>Border Radius: <span id="radius-value">8px</span></label>
                    <input type="range" id="radius-slider" min="0" max="50" value="8" oninput="updateRadius(this.value)">
                </div>
                <div class="slider-container">
                    <label>Spacing: <span id="spacing-value">16px</span></label>
                    <input type="range" id="spacing-slider" min="8" max="48" value="16" oninput="updateSpacing(this.value)">
                </div>
                <div class="dynamic-box">Dynamic Box</div>
            </div>
        </section>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        console.log('CSS Variables Demo loaded!');
    });

    function updateRadius(value) {
        document.documentElement.style.setProperty('--dynamic-radius', value + 'px');
        document.getElementById('radius-value').textContent = value + 'px';
    }

    function updateSpacing(value) {
        document.documentElement.style.setProperty('--dynamic-spacing', value + 'px');
        document.getElementById('spacing-value').textContent = value + 'px';
    }
    </script>
</body>
</html>`;


    const handleOpenPlayground = () => {
        if (onOpenWebPlayground) {
            onOpenWebPlayground(playgroundCode, '', '');
        }
    };

    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Variable}
                category="CSS · Core Concepts"
                title="CSS Variables"
                description="Create reusable, maintainable values in your stylesheets with CSS Custom Properties - the foundation of modern design systems."
                colorTheme="blue"
            />

            {/* What are CSS Variables? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Variable className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Variables?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Supercharge your stylesheets with reusable, dynamic values that make maintenance a breeze and enable powerful theming!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Variables vs Hardcoded Values
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">📝 Hardcoded Values</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2 text-xs font-mono">
                                                <div className="p-2 bg-red-500 text-white rounded">color: #ef4444;</div>
                                                <div className="p-2 bg-red-500 text-white rounded">border: 2px solid #ef4444;</div>
                                                <div className="p-2 bg-red-500 text-white rounded">background: #ef4444;</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Repetitive & Hard to Change</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🎨 CSS Variables</div>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                            <div className="space-y-2 text-xs font-mono">
                                                <div className="p-2 bg-blue-500 text-white rounded">--primary: #3b82f6;</div>
                                                <div className="p-2 bg-green-500 text-white rounded">color: var(--primary);</div>
                                                <div className="p-2 bg-green-500 text-white rounded">border: 2px solid var(--primary);</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ DRY & Maintainable</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Change one variable, update everywhere!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        CSS variables eliminate repetition and make global changes effortless.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    🎨 Variable Superpowers
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <RefreshCw className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Dynamic</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Change with JavaScript</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Globe className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Inherited</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Cascade to children</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Palette className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Themeable</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Perfect for themes</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Code className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Fallbacks</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">var(--color, fallback)</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">🎨</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Variables</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Reusable & DRY
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Dynamic Updates
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Theme-Friendly
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">📝</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Hardcoded Values</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Repetitive Code
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Hard to Maintain
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            No Flexibility
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use CSS variables for colors, spacing, and typography to create maintainable design systems!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Code Example */}
                    <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">CSS Variables Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🎨 Define Variables */</div>
                            <div className="text-purple-700 dark:text-purple-400">:root</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">--primary-color</span>: <span className="text-yellow-600 dark:text-yellow-400">#3b82f6</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">--spacing-lg</span>: <span className="text-yellow-600 dark:text-yellow-400">2rem</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎯 Use Variables */</div>
                            <div className="text-blue-600 dark:text-blue-400">.button</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">background</span>: <span className="text-yellow-600 dark:text-yellow-400">var(--primary-color)</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">padding</span>: <span className="text-yellow-600 dark:text-yellow-400">var(--spacing-lg)</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Variable Categories */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Code className="w-5 h-5" />
                        Variable Categories
                    </CardTitle>
                    <CardDescription>
                        Organize your CSS variables into logical categories for better maintainability.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {variableCategories.map((category) => (
                            <div 
                                key={category.name}
                                className="p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <category.icon className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-sm">{category.title}</h3>
                                </div>
                                <p className="text-xs text-gray-600 mb-3">{category.desc}</p>
                                <div className="space-y-1">
                                    {category.examples.map((example, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                                            {example}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Scope and Inheritance */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Globe className="w-5 h-5" />
                        Scope & Inheritance
                    </CardTitle>
                    <CardDescription>
                        Understanding global vs local scope and how CSS variables inherit through the DOM tree.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400">
                                <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    Global Scope (:root)
                                </h5>
                                <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                                    Available throughout the entire document
                                </p>
                                <code className="text-xs bg-blue-100 dark:bg-blue-800 p-2 rounded block">
                                    :root {'{'}
                                    <br />
                                    {'  '}--primary-color: #3b82f6;
                                    <br />
                                    {'}'}
                                </code>
                            </div>
                            
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400">
                                <h5 className="font-medium text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                    <Layers className="w-4 h-4" />
                                    Local Scope
                                </h5>
                                <p className="text-xs text-green-600 dark:text-green-400 mb-2">
                                    Available only within the element and its children
                                </p>
                                <code className="text-xs bg-green-100 dark:bg-green-800 p-2 rounded block">
                                    .component {'{'}
                                    <br />
                                    {'  '}--local-padding: 1rem;
                                    <br />
                                    {'}'}
                                </code>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Inheritance Example</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block whitespace-pre-line">
{`:root {
  --primary-color: blue;
}

.parent {
  --local-color: red;
  color: var(--primary-color); /* blue */
}

.child {
  color: var(--local-color); /* red (inherited) */
  background: var(--primary-color); /* blue (inherited) */
}`}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Interactive Examples */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <MousePointer className="w-5 h-5" />
                        Live Variable Examples
                    </CardTitle>
                    <CardDescription>
                        Interactive CSS variables demonstrations right here on the page!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* Theme Switcher */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🌓 Theme Switcher</h4>
                            <div className="flex gap-4 justify-center mb-4">
                                <button 
                                    onClick={() => setSelectedTheme('light')}
                                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                        selectedTheme === 'light' 
                                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    <Sun className="w-4 h-4 inline mr-2" />
                                    Light
                                </button>
                                <button 
                                    onClick={() => setSelectedTheme('dark')}
                                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                        selectedTheme === 'dark' 
                                            ? 'border-gray-700 bg-gray-800 text-white' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    <Moon className="w-4 h-4 inline mr-2" />
                                    Dark
                                </button>
                                <button 
                                    onClick={() => setSelectedTheme('colorful')}
                                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                        selectedTheme === 'colorful' 
                                            ? 'border-pink-500 bg-pink-50 text-pink-700' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    <Palette className="w-4 h-4 inline mr-2" />
                                    Colorful
                                </button>
                            </div>
                            
                            <div 
                                className="p-6 rounded-lg border-2 transition-all duration-300"
                                style={{
                                    backgroundColor: selectedTheme === 'light' ? '#ffffff' : 
                                                   selectedTheme === 'dark' ? '#1f2937' : '#fef3c7',
                                    borderColor: selectedTheme === 'light' ? '#e5e7eb' : 
                                               selectedTheme === 'dark' ? '#374151' : '#f59e0b',
                                    color: selectedTheme === 'light' ? '#1f2937' : 
                                           selectedTheme === 'dark' ? '#f9fafb' : '#7c2d12'
                                }}
                            >
                                <h5 className="font-bold mb-2">Themed Component</h5>
                                <p className="text-sm mb-4">This component changes appearance based on CSS variables!</p>
                                <div className="flex gap-2">
                                    <div 
                                        className="w-8 h-8 rounded"
                                        style={{
                                            backgroundColor: selectedTheme === 'light' ? '#3b82f6' : 
                                                           selectedTheme === 'dark' ? '#60a5fa' : '#ec4899'
                                        }}
                                    ></div>
                                    <div 
                                        className="w-8 h-8 rounded"
                                        style={{
                                            backgroundColor: selectedTheme === 'light' ? '#10b981' : 
                                                           selectedTheme === 'dark' ? '#34d399' : '#8b5cf6'
                                        }}
                                    ></div>
                                    <div 
                                        className="w-8 h-8 rounded"
                                        style={{
                                            backgroundColor: selectedTheme === 'light' ? '#f59e0b' : 
                                                           selectedTheme === 'dark' ? '#fbbf24' : '#06b6d4'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Variable Categories Demo */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🎯 Variable Categories</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <Palette className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                                    <p className="text-sm font-medium">Colors</p>
                                    <div className="flex gap-1 justify-center mt-2">
                                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                                    </div>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <Layers className="w-8 h-8 mx-auto mb-2 text-green-500" />
                                    <p className="text-sm font-medium">Spacing</p>
                                    <div className="flex gap-1 justify-center mt-2">
                                        <div className="w-2 h-4 bg-green-500 rounded"></div>
                                        <div className="w-3 h-4 bg-green-500 rounded"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                                    </div>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <Paintbrush className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                                    <p className="text-sm font-medium">Typography</p>
                                    <div className="mt-2 space-y-1">
                                        <div className="text-xs">Small</div>
                                        <div className="text-sm font-bold">Bold</div>
                                    </div>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <BoxSelect className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                                    <p className="text-sm font-medium">Layout</p>
                                    <div className="mt-2">
                                        <div className="w-12 h-6 bg-orange-500 rounded mx-auto"></div>
                                    </div>
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
                        CSS Variables Best Practices
                    </CardTitle>
                    <CardDescription>
                        Guidelines for effective use of CSS variables in production applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
                            <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">✅ Best Practices</h5>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                                <li>• Use semantic naming (--primary-color, not --blue)</li>
                                <li>• Group related variables together</li>
                                <li>• Provide fallback values: var(--color, #000)</li>
                                <li>• Use :root for global variables</li>
                                <li>• Document your variable system</li>
                                <li>• Consider CSS-in-JS for dynamic values</li>
                            </ul>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
                            <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Common Pitfalls</h5>
                            <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                                <li>• Don't use variables for everything</li>
                                <li>• Avoid deeply nested variable dependencies</li>
                                <li>• Don't forget browser support (IE11-)</li>
                                <li>• Avoid overly generic names (--color-1)</li>
                                <li>• Don't ignore performance implications</li>
                                <li>• Avoid circular dependencies</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Complete CSS Variables Playground
                    </CardTitle>
                    <CardDescription>
                        Interactive playground with theme switching, dynamic variables, and real-world examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="CSS Variables Playground"
                        colorTheme="blue"
                        onOpenPlayground={handleOpenPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900 dark:text-green-100">Best Practices</AlertTitle>
                <AlertDescription className="text-green-800 dark:text-green-200">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Use :root for globals</strong> - Define system-wide variables at the root level</li>
                        <li><strong>Naming convention</strong> - Use descriptive names like --primary-color, not --color-1</li>
                        <li><strong>Fallback values</strong> - Always provide fallbacks: var(--color, #000)</li>
                        <li><strong>Organize by category</strong> - Group colors, spacing, typography, etc.</li>
                        <li><strong>Document your system</strong> - Comment variable purposes and acceptable values</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Excellent support across all modern browsers!</strong> CSS Custom Properties (Variables) are supported in Chrome 49+, Firefox 31+, Safari 9.1+, and Edge 15+. Internet Explorer does not support CSS variables.
                </AlertDescription>
            </Alert>
        </div>
    );
}
