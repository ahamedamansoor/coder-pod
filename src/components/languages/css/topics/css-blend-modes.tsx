'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
    Sparkles, Layers, Palette, Blend, Play, 
    CheckCircle, AlertTriangle, MousePointer, Zap, Settings
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssBlendModesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBlendModes({ onOpenWebPlayground }: CssBlendModesProps) {
    const [selectedMode, setSelectedMode] = useState('multiply');

    const blendModes = [
        { name: 'multiply', desc: 'Multiplies colors', color: 'bg-purple-100' },
        { name: 'screen', desc: 'Inverted multiply', color: 'bg-blue-100' },
        { name: 'overlay', desc: 'Combines multiply & screen', color: 'bg-pink-100' },
        { name: 'darken', desc: 'Darker of two colors', color: 'bg-gray-100' },
        { name: 'lighten', desc: 'Lighter of two colors', color: 'bg-yellow-100' },
        { name: 'color-dodge', desc: 'Brightens colors', color: 'bg-orange-100' },
        { name: 'color-burn', desc: 'Darkens colors', color: 'bg-red-100' },
        { name: 'hard-light', desc: 'Strong overlay', color: 'bg-indigo-100' },
        { name: 'soft-light', desc: 'Soft overlay', color: 'bg-teal-100' },
        { name: 'difference', desc: 'Subtracts colors', color: 'bg-green-100' },
        { name: 'exclusion', desc: 'Lower contrast difference', color: 'bg-cyan-100' },
        { name: 'hue', desc: 'Hue of top layer', color: 'bg-rose-100' },
        { name: 'saturation', desc: 'Saturation of top', color: 'bg-fuchsia-100' },
        { name: 'color', desc: 'Hue & saturation', color: 'bg-violet-100' },
        { name: 'luminosity', desc: 'Luminosity of top', color: 'bg-amber-100' }
    ];

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Blend Modes - Creative Mixing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        min-height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
        }
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        background: white;
        border-radius: 20px;
        padding: 3rem;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
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

    h2 {
        font-size: 1.8rem;
        margin: 3rem 0 1.5rem;
        color: #1e293b;
    }

    @media (prefers-color-scheme: dark) {
        h2 { color: #f1f5f9; }
    }

    .blend-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .blend-card {
        position: relative;
        height: 200px;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .blend-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .blend-bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .blend-top {
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, #f97316 0%, #ea580c 100%);
    }

    /* Blend Modes */
    .multiply { mix-blend-mode: multiply; }
    .screen { mix-blend-mode: screen; }
    .overlay { mix-blend-mode: overlay; }
    .darken { mix-blend-mode: darken; }
    .lighten { mix-blend-mode: lighten; }
    .color-dodge { mix-blend-mode: color-dodge; }
    .color-burn { mix-blend-mode: color-burn; }
    .hard-light { mix-blend-mode: hard-light; }
    .soft-light { mix-blend-mode: soft-light; }
    .difference { mix-blend-mode: difference; }
    .exclusion { mix-blend-mode: exclusion; }
    .hue { mix-blend-mode: hue; }
    .saturation { mix-blend-mode: saturation; }
    .color { mix-blend-mode: color; }
    .luminosity { mix-blend-mode: luminosity; }

    .blend-label {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        background: rgba(0,0,0,0.7);
        color: white;
        font-weight: 600;
        text-align: center;
        font-size: 0.9rem;
    }

    /* Background Blend Mode Example */
    .bg-blend-demo {
        height: 300px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
        background-image: 
            linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="%23fff" cx="50" cy="50" r="40"/><circle fill="%23fff" cx="150" cy="150" r="40"/><circle fill="%23fff" cx="150" cy="50" r="30"/><circle fill="%23fff" cx="50" cy="150" r="30"/></svg>');
        background-size: cover, 400px;
        background-position: center;
        background-blend-mode: multiply;
        transition: background-blend-mode 0.3s;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .bg-blend-demo:hover {
        background-blend-mode: screen;
    }

    .demo-text {
        font-size: 2rem;
        font-weight: 800;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    @media (max-width: 768px) {
        .blend-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
        }
        .blend-card { height: 150px; }
        h1 { font-size: 2rem; }
        h2 { font-size: 1.4rem; }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 CSS Blend Modes</h1>
        <div class="instruction">
            👆 Hover over each card to see it scale up!
        </div>

        <section>
            <h2>🎭 mix-blend-mode (15 Modes)</h2>
            <div class="blend-grid">
                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top multiply"></div>
                    <div class="blend-label">multiply</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top screen"></div>
                    <div class="blend-label">screen</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top overlay"></div>
                    <div class="blend-label">overlay</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top darken"></div>
                    <div class="blend-label">darken</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top lighten"></div>
                    <div class="blend-label">lighten</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top color-dodge"></div>
                    <div class="blend-label">color-dodge</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top color-burn"></div>
                    <div class="blend-label">color-burn</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top hard-light"></div>
                    <div class="blend-label">hard-light</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top soft-light"></div>
                    <div class="blend-label">soft-light</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top difference"></div>
                    <div class="blend-label">difference</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top exclusion"></div>
                    <div class="blend-label">exclusion</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top hue"></div>
                    <div class="blend-label">hue</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top saturation"></div>
                    <div class="blend-label">saturation</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top color"></div>
                    <div class="blend-label">color</div>
                </div>

                <div class="blend-card">
                    <div class="blend-bg"></div>
                    <div class="blend-top luminosity"></div>
                    <div class="blend-label">luminosity</div>
                </div>
            </div>
        </section>

        <section>
            <h2>🖼️ background-blend-mode</h2>
            <div class="bg-blend-demo">
                <div class="demo-text">Hover to Switch Mode!</div>
            </div>
            <p style="text-align: center; color: #64748b; margin-top: 1rem;">
                multiply → screen on hover
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
                icon={Palette}
                category="CSS · Visual Effects"
                title="CSS Blend Modes"
                description="Mix colors creatively with blend modes - multiply, screen, overlay, and 12 more modes for stunning visual effects."
                colorTheme="blue"
            />

            {/* What are Blend Modes? */}
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50/80 via-pink-50/60 to-rose-50/80 dark:from-purple-950/30 dark:via-pink-950/20 dark:to-rose-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-rose-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
                        <div className="relative">
                            <Palette className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Blend Modes?
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                        🎨 Photoshop-like color blending directly in CSS - 15 creative modes!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                        Blend modes control how <strong className="text-foreground">colors mix</strong> when elements overlap. CSS provides two properties: <code className="text-sm bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">mix-blend-mode</code> for elements and <code className="text-sm bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">background-blend-mode</code> for backgrounds.
                    </p>

                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
                        <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                            <Layers className="w-5 h-5 animate-pulse" />
                            🎯 Two Blend Properties
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">mix-blend-mode</h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                    Blends <strong>element</strong> with backdrop
                                </p>
                                <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded block">
                                    mix-blend-mode: multiply;
                                </code>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-lg border-2 border-pink-200 dark:border-pink-800">
                                <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">background-blend-mode</h5>
                                <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">
                                    Blends <strong>backgrounds</strong> together
                                </p>
                                <code className="text-xs bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded block">
                                    background-blend-mode: screen;
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo */}
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        <div className="text-center cursor-pointer group">
                            <div className="relative h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 mix-blend-multiply"></div>
                            </div>
                            <p className="text-xs mt-1 font-medium">multiply</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="relative h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 mix-blend-screen"></div>
                            </div>
                            <p className="text-xs mt-1 font-medium">screen</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="relative h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 mix-blend-overlay"></div>
                            </div>
                            <p className="text-xs mt-1 font-medium">overlay</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="relative h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 mix-blend-difference"></div>
                            </div>
                            <p className="text-xs mt-1 font-medium">difference</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="relative h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 mix-blend-color-dodge"></div>
                            </div>
                            <p className="text-xs mt-1 font-medium">color-dodge</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Blend Modes List */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Settings className="w-5 h-5" />
                        15 Blend Modes
                    </CardTitle>
                    <CardDescription>
                        All available blend modes for creative color mixing.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {blendModes.map((mode) => (
                            <div 
                                key={mode.name}
                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                                    selectedMode === mode.name 
                                        ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                        : 'border-gray-200 hover:border-gray-300'
                                } ${mode.color}`}
                                onClick={() => setSelectedMode(mode.name)}
                            >
                                <h3 className="font-bold text-xs mb-1">{mode.name}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{mode.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border mt-4">
                        <h4 className="font-semibold mb-3">{selectedMode} Example</h4>
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            {`mix-blend-mode: ${selectedMode};`}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Complete Playground */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Play className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        CSS Blend Modes Playground
                    </CardTitle>
                    <CardDescription>
                        Explore all 15 blend modes with live examples!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="Blend Modes Playground"
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
                        <li><strong>Test thoroughly</strong> - Blend modes look different with different colors</li>
                        <li><strong>Use isolation</strong> - <code>isolation: isolate;</code> creates new stacking context</li>
                        <li><strong>Performance</strong> - Blend modes are GPU-accelerated and performant</li>
                        <li><strong>Fallbacks</strong> - Test on different backgrounds for accessibility</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* Browser Support */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    Excellent support in all modern browsers! mix-blend-mode and background-blend-mode work in Chrome, Firefox, Safari, and Edge without prefixes.
                </AlertDescription>
            </Alert>
        </div>
    );
}
