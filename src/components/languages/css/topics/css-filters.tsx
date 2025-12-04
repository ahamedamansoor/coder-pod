'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
    Sparkles, Image as ImageIcon, Eye, Droplet, Sun, Contrast,
    Palette, Settings, CheckCircle, AlertTriangle, MousePointer,
    Play, Zap, Target, CircleDot
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssFiltersProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssFilters({ onOpenWebPlayground }: CssFiltersProps) {
    const [selectedFilter, setSelectedFilter] = useState('blur');

    const filterTypes = [
        { name: 'blur', icon: CircleDot, desc: 'Blurs the element', values: ['0px', '5px', '10px'], example: 'filter: blur(5px);' },
        { name: 'brightness', icon: Sun, desc: 'Adjusts brightness', values: ['0', '1', '1.5'], example: 'filter: brightness(1.5);' },
        { name: 'contrast', icon: Contrast, desc: 'Adjusts contrast', values: ['0', '1', '2'], example: 'filter: contrast(2);' },
        { name: 'grayscale', icon: Droplet, desc: 'Converts to grayscale', values: ['0', '0.5', '1'], example: 'filter: grayscale(1);' },
        { name: 'hue-rotate', icon: Palette, desc: 'Rotates hue', values: ['0deg', '90deg', '180deg'], example: 'filter: hue-rotate(90deg);' },
        { name: 'saturate', icon: Droplet, desc: 'Adjusts saturation', values: ['0', '1', '2'], example: 'filter: saturate(2);' },
        { name: 'sepia', icon: ImageIcon, desc: 'Applies sepia tone', values: ['0', '0.5', '1'], example: 'filter: sepia(1);' },
        { name: 'invert', icon: Contrast, desc: 'Inverts colors', values: ['0', '0.5', '1'], example: 'filter: invert(1);' }
    ];

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Filters Complete Guide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #333;
        line-height: 1.6;
        padding: 2rem;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
            color: #e5e7eb;
        }
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background: white;
        border-radius: 16px;
        padding: 3rem;
        box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    }

    @media (prefers-color-scheme: dark) {
        .container {
            background: rgba(30, 41, 55, 0.95);
            color: #e5e7eb;
        }
    }

    h1 { 
        font-size: 2.5rem; 
        text-align: center; 
        margin-bottom: 1rem; 
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    h2 { 
        font-size: 1.5rem; 
        margin: 2rem 0 1rem; 
        color: #334155;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (prefers-color-scheme: dark) {
        h2 { color: #cbd5e1; }
    }

    .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .filter-demo {
        text-align: center;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 12px;
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .filter-demo:hover {
        transform: translateY(-5px);
    }

    @media (prefers-color-scheme: dark) {
        .filter-demo {
            background: rgba(55, 65, 81, 0.5);
        }
    }

    .demo-image {
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, #f97316, #ea580c);
        border-radius: 12px;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        transition: all 0.3s ease;
    }

    /* Filter Effects */
    .blur-demo:hover .demo-image { filter: blur(5px); }
    .brightness-demo:hover .demo-image { filter: brightness(1.5); }
    .contrast-demo:hover .demo-image { filter: contrast(2); }
    .grayscale-demo:hover .demo-image { filter: grayscale(1); }
    .hue-demo:hover .demo-image { filter: hue-rotate(180deg); }
    .saturate-demo:hover .demo-image { filter: saturate(3); }
    .sepia-demo:hover .demo-image { filter: sepia(1); }
    .invert-demo:hover .demo-image { filter: invert(1); }

    /* Combined Filters */
    .combined-demo {
        margin-top: 3rem;
        padding: 2rem;
        background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        border-radius: 12px;
    }

    @media (prefers-color-scheme: dark) {
        .combined-demo {
            background: linear-gradient(135deg, #0c4a6e, #075985);
        }
    }

    .combined-image {
        width: 300px;
        height: 300px;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23667eea" width="200" height="200"/><circle fill="%23764ba2" cx="100" cy="100" r="80"/></svg>');
        background-size: cover;
        border-radius: 16px;
        margin: 2rem auto;
        transition: all 0.5s ease;
        cursor: pointer;
    }

    .combined-image:hover {
        filter: blur(2px) brightness(1.2) contrast(1.3) saturate(1.5);
        transform: scale(1.05) rotate(2deg);
    }

    .filter-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #1e293b;
        margin-top: 0.5rem;
    }

    @media (prefers-color-scheme: dark) {
        .filter-label {
            color: #f1f5f9;
        }
    }

    .instruction {
        text-align: center;
        padding: 1rem;
        background: linear-gradient(135deg, #dcfce7, #bbf7d0);
        border-radius: 8px;
        margin-bottom: 2rem;
        font-weight: 600;
        color: #166534;
    }

    @media (prefers-color-scheme: dark) {
        .instruction {
            background: linear-gradient(135deg, #14532d, #166534);
            color: #bbf7d0;
        }
    }

    @media (max-width: 768px) {
        .demo-grid { 
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .demo-image { 
            width: 100px; 
            height: 100px;
            font-size: 2rem;
        }
        .combined-image {
            width: 200px;
            height: 200px;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 CSS Filters Playground</h1>
        <div class="instruction">
            👆 Hover over each box to see the filter effect in action!
        </div>
        
        <section>
            <h2>🎯 Basic Filter Effects</h2>
            <div class="demo-grid">
                <div class="filter-demo blur-demo">
                    <div class="demo-image">🖼️</div>
                    <div class="filter-label">Blur</div>
                    <code style="font-size: 0.8rem; color: #64748b;">blur(5px)</code>
                </div>

                <div class="filter-demo brightness-demo">
                    <div class="demo-image">☀️</div>
                    <div class="filter-label">Brightness</div>
                    <code style="font-size: 0.8rem; color: #64748b;">brightness(1.5)</code>
                </div>

                <div class="filter-demo contrast-demo">
                    <div class="demo-image">🎭</div>
                    <div class="filter-label">Contrast</div>
                    <code style="font-size: 0.8rem; color: #64748b;">contrast(2)</code>
                </div>

                <div class="filter-demo grayscale-demo">
                    <div class="demo-image">⚫</div>
                    <div class="filter-label">Grayscale</div>
                    <code style="font-size: 0.8rem; color: #64748b;">grayscale(1)</code>
                </div>

                <div class="filter-demo hue-demo">
                    <div class="demo-image">🌈</div>
                    <div class="filter-label">Hue Rotate</div>
                    <code style="font-size: 0.8rem; color: #64748b;">hue-rotate(180deg)</code>
                </div>

                <div class="filter-demo saturate-demo">
                    <div class="demo-image">🎨</div>
                    <div class="filter-label">Saturate</div>
                    <code style="font-size: 0.8rem; color: #64748b;">saturate(3)</code>
                </div>

                <div class="filter-demo sepia-demo">
                    <div class="demo-image">📷</div>
                    <div class="filter-label">Sepia</div>
                    <code style="font-size: 0.8rem; color: #64748b;">sepia(1)</code>
                </div>

                <div class="filter-demo invert-demo">
                    <div class="demo-image">🔄</div>
                    <div class="filter-label">Invert</div>
                    <code style="font-size: 0.8rem; color: #64748b;">invert(1)</code>
                </div>
            </div>
        </section>

        <section class="combined-demo">
            <h2>✨ Combined Filters (Hover Me!)</h2>
            <p style="text-align: center; margin-bottom: 1rem; color: #64748b;">
                Multiple filters can be combined for creative effects
            </p>
            <div class="combined-image"></div>
            <p style="text-align: center; font-family: monospace; font-size: 0.9rem; color: #475569;">
                filter: blur(2px) brightness(1.2) contrast(1.3) saturate(1.5);
            </p>
        </section>
    </div>
</body>
</html>`;

    const handleOpenPlayground = () => {
        if (onOpenWebPlayground) {
            onOpenWebPlayground(playgroundCode, '', '');
        }
    };

    return (
        <div className="space-y-8">
            <PageHeader
                icon={Sparkles}
                category="CSS · Visual Effects"
                title="CSS Filters"
                description="Apply stunning visual effects like blur, brightness, contrast, and more to transform your elements with GPU-accelerated filters."
                colorTheme="blue"
            />

            {/* What are CSS Filters? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Sparkles className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Filters?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🎨 Apply Instagram-style effects directly with CSS - blur, brightness, contrast, and more!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                        CSS filters allow you to apply <strong className="text-foreground">graphical effects</strong> like blur, color adjustments, and more to any element. They're <strong className="text-foreground">GPU-accelerated</strong>, making them incredibly performant for real-time effects.
                    </p>

                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                        <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            🎯 Interactive Filter Demo
                        </h4>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center cursor-pointer group">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:filter group-hover:blur-sm flex items-center justify-center text-white font-bold text-2xl">
                                    🖼️
                                </div>
                                <p className="text-xs font-medium">Blur</p>
                                <code className="text-xs text-muted-foreground">blur(8px)</code>
                            </div>

                            <div className="text-center cursor-pointer group">
                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:brightness-150 flex items-center justify-center text-white font-bold text-2xl">
                                    ☀️
                                </div>
                                <p className="text-xs font-medium">Brightness</p>
                                <code className="text-xs text-muted-foreground">brightness(1.5)</code>
                            </div>

                            <div className="text-center cursor-pointer group">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:grayscale flex items-center justify-center text-white font-bold text-2xl">
                                    ⚫
                                </div>
                                <p className="text-xs font-medium">Grayscale</p>
                                <code className="text-xs text-muted-foreground">grayscale(1)</code>
                            </div>

                            <div className="text-center cursor-pointer group">
                                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg mx-auto mb-2 transition-all duration-300 group-hover:hue-rotate-180 flex items-center justify-center text-white font-bold text-2xl">
                                    🌈
                                </div>
                                <p className="text-xs font-medium">Hue Rotate</p>
                                <code className="text-xs text-muted-foreground">hue-rotate(180deg)</code>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                            <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                <MousePointer className="w-4 h-4" />
                                💡 Hover to See Filters!
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400">
                                Each box demonstrates a different filter effect. Hover over them to see the transformation in real-time!
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Filter Types */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Settings className="w-5 h-5" />
                        CSS Filter Functions
                    </CardTitle>
                    <CardDescription>
                        Master the different filter functions available in CSS.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {filterTypes.map((filter) => (
                                <div 
                                    key={filter.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${
                                        selectedFilter === filter.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedFilter(filter.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <filter.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{filter.name}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{filter.desc}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {filter.values.map((value, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">{value}</Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{selectedFilter} Example</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                {filterTypes.find(f => f.name === selectedFilter)?.example}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Complete Playground */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        Complete CSS Filters Playground
                    </CardTitle>
                    <CardDescription>
                        Interactive playground with all filter effects - hover to see them in action!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="CSS Filters Playground"
                        colorTheme="blue"
                        onOpenPlayground={handleOpenPlayground}
                    />
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900 dark:text-green-100">Best Practices</AlertTitle>
                <AlertDescription className="text-green-800 dark:text-green-200">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Performance</strong> - Filters are GPU-accelerated, but use sparingly on many elements</li>
                        <li><strong>Combine Filters</strong> - Chain multiple filters with spaces: <code>filter: blur(5px) brightness(1.2);</code></li>
                        <li><strong>Transitions</strong> - Add smooth transitions for interactive filter effects</li>
                        <li><strong>Browser Support</strong> - Excellent support in all modern browsers</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* Browser Support */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    CSS filters have excellent browser support across all modern browsers including Chrome, Firefox, Safari, and Edge. No prefixes needed!
                </AlertDescription>
            </Alert>
        </div>
    );
}
