'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
    Box, Layers, Type, Sparkles, Sun, Moon,
    Play, CheckCircle, AlertTriangle, MousePointer, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssShadowsProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssShadows({ onOpenWebPlayground }: CssShadowsProps) {
    const [selectedType, setSelectedType] = useState('box');

    const shadowTypes = [
        { name: 'box', icon: Box, desc: 'Box shadow for elements', example: 'box-shadow: 0 4px 6px rgba(0,0,0,0.1);' },
        { name: 'text', icon: Type, desc: 'Text shadow for typography', example: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3);' },
        { name: 'drop', icon: Layers, desc: 'Drop shadow filter', example: 'filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));' }
    ];

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Shadows Masterclass</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #333;
        padding: 3rem 2rem;
        min-height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
            color: #e5e7eb;
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
        font-size: 3rem; 
        text-align: center; 
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: none;
    }

    .subtitle {
        text-align: center;
        color: #64748b;
        margin-bottom: 3rem;
        font-size: 1.1rem;
    }

    @media (prefers-color-scheme: dark) {
        .subtitle { color: #94a3b8; }
    }

    section {
        margin-bottom: 4rem;
    }

    h2 { 
        font-size: 1.8rem; 
        margin-bottom: 2rem;
        color: #1e293b;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    @media (prefers-color-scheme: dark) {
        h2 { color: #f1f5f9; }
    }

    /* Box Shadow Examples */
    .shadow-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .shadow-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        transition: all 0.3s ease;
        cursor: pointer;
        min-height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (prefers-color-scheme: dark) {
        .shadow-card {
            background: #1e293b;
        }
    }

    /* Shadow Variations */
    .shadow-sm {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    .shadow-md {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .shadow-lg {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .shadow-xl {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .shadow-inner {
        box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    }

    .shadow-colored {
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
    }

    .shadow-multi {
        box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 10px 20px rgba(102, 126, 234, 0.2),
            0 20px 40px rgba(118, 75, 162, 0.1);
    }

    .shadow-card:hover {
        transform: translateY(-8px);
    }

    .shadow-sm:hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12); }
    .shadow-md:hover { box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.2); }
    .shadow-lg:hover { box-shadow: 0 20px 30px -3px rgba(0, 0, 0, 0.2); }
    .shadow-xl:hover { box-shadow: 0 30px 40px -5px rgba(0, 0, 0, 0.2); }
    .shadow-2xl:hover { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35); }

    .card-emoji {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .card-title {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #1e293b;
    }

    @media (prefers-color-scheme: dark) {
        .card-title { color: #f1f5f9; }
    }

    .card-code {
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.75rem;
        color: #64748b;
        background: #f1f5f9;
        padding: 0.5rem;
        border-radius: 4px;
        margin-top: 1rem;
        word-break: break-all;
    }

    @media (prefers-color-scheme: dark) {
        .card-code {
            background: #0f172a;
            color: #94a3b8;
        }
    }

    /* Text Shadow Examples */
    .text-examples {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
    }

    .text-demo {
        background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        padding: 3rem 2rem;
        border-radius: 12px;
        text-align: center;
    }

    @media (prefers-color-scheme: dark) {
        .text-demo {
            background: linear-gradient(135deg, #1e293b, #0f172a);
        }
    }

    .text-shadow-soft {
        font-size: 3rem;
        font-weight: 800;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        color: #1e293b;
    }

    @media (prefers-color-scheme: dark) {
        .text-shadow-soft { color: #f1f5f9; }
    }

    .text-shadow-hard {
        font-size: 3rem;
        font-weight: 800;
        text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
        color: #667eea;
    }

    .text-shadow-glow {
        font-size: 3rem;
        font-weight: 800;
        text-shadow: 
            0 0 10px rgba(102, 126, 234, 0.8),
            0 0 20px rgba(102, 126, 234, 0.6),
            0 0 30px rgba(102, 126, 234, 0.4);
        color: #667eea;
    }

    .text-shadow-multi {
        font-size: 3rem;
        font-weight: 800;
        text-shadow: 
            2px 2px 0px #764ba2,
            4px 4px 0px #667eea,
            6px 6px 0px #f97316;
        color: white;
    }

    /* Drop Shadow */
    .drop-shadow-demo {
        display: flex;
        justify-content: center;
        gap: 3rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .shape {
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .shape-star {
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
    }

    .shape-star:hover {
        filter: drop-shadow(0 20px 40px rgba(102, 126, 234, 0.6));
        transform: scale(1.1) rotate(15deg);
    }

    .shape-heart {
        clip-path: path('M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z');
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
    }

    .shape-heart:hover {
        filter: drop-shadow(0 20px 40px rgba(239, 68, 68, 0.6));
        transform: scale(1.1);
    }

    .instruction-box {
        background: linear-gradient(135deg, #dcfce7, #bbf7d0);
        padding: 1.5rem;
        border-radius: 12px;
        text-align: center;
        margin-bottom: 2rem;
        font-weight: 600;
        color: #166534;
    }

    @media (prefers-color-scheme: dark) {
        .instruction-box {
            background: linear-gradient(135deg, #14532d, #166534);
            color: #bbf7d0;
        }
    }

    @media (max-width: 768px) {
        h1 { font-size: 2rem; }
        h2 { font-size: 1.4rem; }
        .shadow-grid { grid-template-columns: 1fr; }
        .text-shadow-soft,
        .text-shadow-hard,
        .text-shadow-glow,
        .text-shadow-multi { font-size: 2rem; }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>💎 CSS Shadows Masterclass</h1>
        <p class="subtitle">Elevate your designs with depth and dimension</p>
        
        <div class="instruction-box">
            🖱️ Hover over any element to see enhanced shadow effects!
        </div>

        <section>
            <h2>📦 Box Shadow Levels</h2>
            <div class="shadow-grid">
                <div class="shadow-card shadow-sm">
                    <div class="card-emoji">🏔️</div>
                    <div class="card-title">Small</div>
                    <div class="card-code">box-shadow: 0 1px 2px rgba(0,0,0,0.05);</div>
                </div>

                <div class="shadow-card shadow-md">
                    <div class="card-emoji">🏕️</div>
                    <div class="card-title">Medium</div>
                    <div class="card-code">box-shadow: 0 4px 6px rgba(0,0,0,0.1);</div>
                </div>

                <div class="shadow-card shadow-lg">
                    <div class="card-emoji">🏔️</div>
                    <div class="card-title">Large</div>
                    <div class="card-code">box-shadow: 0 10px 15px rgba(0,0,0,0.1);</div>
                </div>

                <div class="shadow-card shadow-xl">
                    <div class="card-emoji">⛰️</div>
                    <div class="card-title">Extra Large</div>
                    <div class="card-code">box-shadow: 0 20px 25px rgba(0,0,0,0.1);</div>
                </div>

                <div class="shadow-card shadow-2xl">
                    <div class="card-emoji">🗻</div>
                    <div class="card-title">2XL</div>
                    <div class="card-code">box-shadow: 0 25px 50px rgba(0,0,0,0.25);</div>
                </div>

                <div class="shadow-card shadow-inner">
                    <div class="card-emoji">⬇️</div>
                    <div class="card-title">Inner</div>
                    <div class="card-code">box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);</div>
                </div>

                <div class="shadow-card shadow-colored">
                    <div class="card-emoji">🎨</div>
                    <div class="card-title">Colored</div>
                    <div class="card-code">box-shadow: 0 10px 30px rgba(102,126,234,0.5);</div>
                </div>

                <div class="shadow-card shadow-multi">
                    <div class="card-emoji">✨</div>
                    <div class="card-title">Multi-Layer</div>
                    <div class="card-code">Multiple shadows combined!</div>
                </div>
            </div>
        </section>

        <section>
            <h2>📝 Text Shadow Styles</h2>
            <div class="text-examples">
                <div class="text-demo">
                    <div class="text-shadow-soft">Soft Shadow</div>
                    <code class="card-code">text-shadow: 2px 2px 4px rgba(0,0,0,0.1);</code>
                </div>

                <div class="text-demo">
                    <div class="text-shadow-hard">Hard Shadow</div>
                    <code class="card-code">text-shadow: 4px 4px 0px rgba(0,0,0,0.3);</code>
                </div>

                <div class="text-demo">
                    <div class="text-shadow-glow">Neon Glow</div>
                    <code class="card-code">text-shadow: 0 0 10px rgba(102,126,234,0.8);</code>
                </div>

                <div class="text-demo">
                    <div class="text-shadow-multi">3D Effect</div>
                    <code class="card-code">text-shadow: 2px 2px 0 #764ba2, 4px 4px 0 #667eea;</code>
                </div>
            </div>
        </section>

        <section>
            <h2>🎭 Drop Shadow (for irregular shapes)</h2>
            <div class="drop-shadow-demo">
                <div class="shape shape-star"></div>
            </div>
            <p style="text-align: center; margin-top: 2rem; color: #64748b; font-size: 0.9rem;">
                ⭐ Drop shadow works on irregular shapes! Hover to see the effect.
            </p>
            <code class="card-code" style="display: block; text-align: center; margin-top: 1rem;">filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));</code>
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
                icon={Box}
                category="CSS · Visual Effects"
                title="CSS Shadows"
                description="Add depth and elevation to your designs with box-shadow, text-shadow, and drop-shadow - the foundation of modern UI depth."
                colorTheme="blue"
            />

            {/* What are CSS Shadows? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Box className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Shadows?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        💎 Create depth, elevation, and focus with three powerful shadow types!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                        CSS shadows add <strong className="text-foreground">depth and dimension</strong> to elements, creating visual hierarchy and making interfaces feel more tactile and interactive. There are <strong className="text-foreground">three main shadow types</strong> in CSS.
                    </p>

                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
                        <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                            <Layers className="w-5 h-5 animate-pulse" />
                            🎯 Three Shadow Types
                        </h4>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800 transition-all hover:shadow-xl">
                                <div className="text-3xl mb-2">📦</div>
                                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">box-shadow</h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                    For rectangular elements and containers
                                </p>
                                <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded block mt-2">
                                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                                </code>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800 transition-all hover:shadow-xl">
                                <div className="text-3xl mb-2">📝</div>
                                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">text-shadow</h5>
                                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                                    For typography and text effects
                                </p>
                                <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded block mt-2">
                                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                                </code>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-200 dark:border-green-800 transition-all hover:shadow-xl">
                                <div className="text-3xl mb-2">🎭</div>
                                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">drop-shadow</h5>
                                <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                                    For irregular shapes and transparent images
                                </p>
                                <code className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded block mt-2">
                                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center cursor-pointer group">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 transition-all duration-300 shadow-md group-hover:shadow-2xl flex items-center justify-center text-white font-bold text-2xl">
                                💎
                            </div>
                            <p className="text-xs font-medium">Elevation</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg mx-auto mb-2 transition-all duration-300 shadow-sm group-hover:shadow-xl flex items-center justify-center text-white font-bold text-2xl">
                                🌟
                            </div>
                            <p className="text-xs font-medium">Depth</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mx-auto mb-2 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/50 flex items-center justify-center text-white font-bold text-2xl">
                                🔥
                            </div>
                            <p className="text-xs font-medium">Colored</p>
                        </div>

                        <div className="text-center cursor-pointer group">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-2 transition-all duration-300 shadow-inner group-hover:shadow-lg flex items-center justify-center text-white font-bold text-2xl">
                                ⬇️
                            </div>
                            <p className="text-xs font-medium">Inner</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Shadow Types Selector */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Layers className="w-5 h-5" />
                        Shadow Types Comparison
                    </CardTitle>
                    <CardDescription>
                        Understanding when to use each shadow type.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                            {shadowTypes.map((shadow) => (
                                <div 
                                    key={shadow.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${
                                        selectedType === shadow.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedType(shadow.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <shadow.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{shadow.name}-shadow</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{shadow.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{selectedType}-shadow Example</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block overflow-x-auto">
                                {shadowTypes.find(s => s.name === selectedType)?.example}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Box Shadow Anatomy */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="w-5 h-5" />
                        Box Shadow Anatomy
                    </CardTitle>
                    <CardDescription>
                        Understanding the box-shadow property values.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                        <pre className="text-sm overflow-x-auto mb-4">
                            <code className="language-css">{`box-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color];

/* Example */
box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.3);
            ↑      ↑      ↑     ↑          ↑
         right  down   blur  spread    color`}</code>
                        </pre>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm mb-1">offset-x</div>
                            <p className="text-xs text-blue-600 dark:text-blue-400">Horizontal position</p>
                        </div>

                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm mb-1">offset-y</div>
                            <p className="text-xs text-purple-600 dark:text-purple-400">Vertical position</p>
                        </div>

                        <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm mb-1">blur-radius</div>
                            <p className="text-xs text-pink-600 dark:text-pink-400">Blur amount</p>
                        </div>

                        <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm mb-1">spread-radius</div>
                            <p className="text-xs text-orange-600 dark:text-orange-400">Shadow size</p>
                        </div>

                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">color</div>
                            <p className="text-xs text-green-600 dark:text-green-400">Shadow color</p>
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
                        Complete CSS Shadows Playground
                    </CardTitle>
                    <CardDescription>
                        Explore all shadow types with interactive examples - hover to see enhanced effects!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="CSS Shadows Playground"
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
                        <li><strong>Use subtle shadows</strong> - Less is more. Start with light shadows and increase as needed</li>
                        <li><strong>Match light source</strong> - Keep shadow direction consistent across your design</li>
                        <li><strong>Layer shadows</strong> - Combine multiple shadows for realistic depth</li>
                        <li><strong>Performance</strong> - Shadows are GPU-accelerated, but avoid excessive blur values</li>
                        <li><strong>Colored shadows</strong> - Use brand colors for unique, memorable effects</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* Browser Support */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    All shadow types (box-shadow, text-shadow, drop-shadow) have excellent support across all modern browsers with no prefixes needed!
                </AlertDescription>
            </Alert>
        </div>
    );
}
