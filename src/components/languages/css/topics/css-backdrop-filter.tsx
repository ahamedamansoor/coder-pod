'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
    Sparkles, Layers, Eye, CircleDot, Droplets, Play, 
    CheckCircle, AlertTriangle, MousePointer, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssBackdropFilterProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBackdropFilter({ onOpenWebPlayground }: CssBackdropFilterProps) {

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Backdrop Filter - Glassmorphism</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-image: 
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="%23ffffff" fill-opacity="0.1" cx="20" cy="20" r="15"/><circle fill="%23ffffff" fill-opacity="0.05" cx="60" cy="70" r="25"/><circle fill="%23ffffff" fill-opacity="0.08" cx="80" cy="30" r="10"/></svg>'),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-size: 400px 400px, cover;
        background-position: 0 0, center;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
            background-image: 
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="%23ffffff" fill-opacity="0.05" cx="20" cy="20" r="15"/><circle fill="%23ffffff" fill-opacity="0.03" cx="60" cy="70" r="25"/><circle fill="%23ffffff" fill-opacity="0.04" cx="80" cy="30" r="10"/></svg>'),
                linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
        }
    }

    .container {
        max-width: 1200px;
        width: 100%;
    }

    h1 { 
        font-size: 2.5rem; 
        text-align: center; 
        margin-bottom: 3rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    /* Glass Card Base */
    .glass-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    @media (prefers-color-scheme: dark) {
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    }

    .glass-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
    }

    .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .card-content {
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
    }

    /* Variation 1: Strong Blur */
    .blur-strong {
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
    }

    /* Variation 2: Light Blur */
    .blur-light {
        backdrop-filter: blur(5px) saturate(150%);
        -webkit-backdrop-filter: blur(5px) saturate(150%);
        background: rgba(255, 255, 255, 0.15);
    }

    /* Variation 3: Brightness + Blur */
    .blur-bright {
        backdrop-filter: blur(10px) brightness(1.2) saturate(200%);
        -webkit-backdrop-filter: blur(10px) brightness(1.2) saturate(200%);
    }

    /* Variation 4: Dark Glass */
    .glass-dark {
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .code-block {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.85rem;
        color: #a5f3fc;
        overflow-x: auto;
    }

    .emoji {
        font-size: 2rem;
        display: inline-block;
    }

    .hero-card {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(15px) saturate(180%);
        -webkit-backdrop-filter: blur(15px) saturate(180%);
    }

    @media (prefers-color-scheme: dark) {
        .hero-card {
            background: rgba(255, 255, 255, 0.08);
        }
    }

    @media (max-width: 768px) {
        h1 { font-size: 2rem; }
        .demo-grid { 
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        .glass-card { padding: 1.5rem; }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>✨ Backdrop Filter - Glassmorphism</h1>
        
        <div class="demo-grid">
            <div class="glass-card hero-card">
                <div class="card-title">
                    <span class="emoji">🪟</span>
                    The Glass Effect
                </div>
                <div class="card-content">
                    <p>Backdrop filter applies effects to the area <strong>behind</strong> an element, creating stunning glassmorphism designs. Hover over each card to see the elevation effect!</p>
                </div>
            </div>

            <div class="glass-card blur-strong">
                <div class="card-title">
                    <span class="emoji">💪</span>
                    Strong Blur
                </div>
                <div class="card-content">
                    <p>Heavy blur creates maximum depth and separation from the background.</p>
                    <div class="code-block">
                        backdrop-filter: blur(20px);
                    </div>
                </div>
            </div>

            <div class="glass-card blur-light">
                <div class="card-title">
                    <span class="emoji">✨</span>
                    Light Blur
                </div>
                <div class="card-content">
                    <p>Subtle blur maintains background visibility while adding elegance.</p>
                    <div class="code-block">
                        backdrop-filter: blur(5px);
                    </div>
                </div>
            </div>

            <div class="glass-card blur-bright">
                <div class="card-title">
                    <span class="emoji">🌟</span>
                    Bright Glass
                </div>
                <div class="card-content">
                    <p>Combine blur with brightness for vibrant, glowing effects.</p>
                    <div class="code-block">
                        backdrop-filter:<br/>
                        blur(10px) brightness(1.2);
                    </div>
                </div>
            </div>

            <div class="glass-card glass-dark">
                <div class="card-title">
                    <span class="emoji">🌙</span>
                    Dark Glass
                </div>
                <div class="card-content">
                    <p>Dark tinted glass for sophisticated, modern interfaces.</p>
                    <div class="code-block">
                        background: rgba(0,0,0,0.2);<br/>
                        backdrop-filter: blur(10px);
                    </div>
                </div>
            </div>
        </div>
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
                icon={Droplets}
                category="CSS · Visual Effects"
                title="CSS Backdrop Filter"
                description="Create stunning glassmorphism effects by applying filters to the backdrop behind elements - the secret to modern, elegant UI design."
                colorTheme="blue"
            />

            {/* What is Backdrop Filter? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-teal-50/80 dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-teal-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Droplets className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is Backdrop Filter?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🪟 The magic behind glassmorphism - blur and filter the background behind elements!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                        <code className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">backdrop-filter</code> applies filter effects to the <strong className="text-foreground">area behind an element</strong>, rather than the element itself. This creates the popular "glassmorphism" or "frosted glass" effect you see in modern UI design.
                    </p>

                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-600 cursor-pointer group">
                        <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                            <Layers className="w-5 h-5 animate-pulse" />
                            🎯 filter vs backdrop-filter
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg border-2 border-red-200 dark:border-red-800">
                                <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                                    <Eye className="w-4 h-4" />
                                    filter
                                </h5>
                                <p className="text-sm text-red-600 dark:text-red-400 mb-2">
                                    Affects the <strong>element and its children</strong>
                                </p>
                                <code className="text-xs bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded block">
                                    filter: blur(5px);
                                </code>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                    <Droplets className="w-4 h-4" />
                                    backdrop-filter
                                </h5>
                                <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                                    Affects the <strong>backdrop behind</strong> the element
                                </p>
                                <code className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded block">
                                    backdrop-filter: blur(5px);
                                </code>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-cyan-200/50">
                            <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                                <MousePointer className="w-4 h-4" />
                                💡 Pro Tip
                            </div>
                            <div className="text-xs text-cyan-600 dark:text-cyan-400">
                                Always combine <code>backdrop-filter</code> with semi-transparent backgrounds (<code>rgba()</code> or opacity) to see the effect!
                            </div>
                        </div>
                    </div>

                    {/* Live Demo */}
                    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-red-900/30 p-8 rounded-xl border border-purple-200/50 dark:border-purple-800/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
                        
                        <div className="relative bg-white/20 dark:bg-black/20 backdrop-blur-md p-6 rounded-lg border border-white/40 dark:border-white/20">
                            <h5 className="text-xl font-bold text-white mb-2">✨ Glass Card with Backdrop Blur</h5>
                            <p className="text-white/90 text-sm">
                                Notice how the background behind this card is blurred? That's <code className="bg-black/20 px-2 py-1 rounded">backdrop-filter: blur()</code> in action!
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Glassmorphism Recipe */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="w-5 h-5" />
                        The Glassmorphism Recipe
                    </CardTitle>
                    <CardDescription>
                        The perfect formula for creating glass effects.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                        <pre className="text-sm overflow-x-auto">
                            <code className="language-css">{`.glass-card {
  /* 1. Semi-transparent background */
  background: rgba(255, 255, 255, 0.1);
  
  /* 2. The magic blur */
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  
  /* 3. Subtle border */
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* 4. Rounded corners */
  border-radius: 16px;
  
  /* 5. Soft shadow */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`}</code>
                        </pre>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="text-2xl mb-2">1️⃣</div>
                            <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Transparency</h5>
                            <p className="text-xs text-blue-600 dark:text-blue-400">Use rgba() with low opacity (0.1-0.2)</p>
                        </div>

                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="text-2xl mb-2">2️⃣</div>
                            <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Backdrop Blur</h5>
                            <p className="text-xs text-purple-600 dark:text-purple-400">The key ingredient - blur(10px to 20px)</p>
                        </div>

                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="text-2xl mb-2">3️⃣</div>
                            <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Polish</h5>
                            <p className="text-xs text-green-600 dark:text-green-400">Add border, shadow, and saturate()</p>
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
                        Glassmorphism Playground
                    </CardTitle>
                    <CardDescription>
                        Explore different backdrop-filter effects with beautiful glass cards!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="Backdrop Filter Playground"
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
                        <li><strong>Always use with transparency</strong> - backdrop-filter needs semi-transparent backgrounds to work</li>
                        <li><strong>Include -webkit- prefix</strong> - Add <code>-webkit-backdrop-filter</code> for Safari support</li>
                        <li><strong>Combine with saturate()</strong> - <code>blur(10px) saturate(180%)</code> for richer colors</li>
                        <li><strong>Test performance</strong> - Backdrop filters are GPU-intensive, use sparingly</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* Browser Support */}
            <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-900 dark:text-yellow-100">Browser Support</AlertTitle>
                <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                    Backdrop filter has good support in modern browsers. Safari requires the <code>-webkit-</code> prefix. Firefox supports it since version 103. Always provide a fallback for older browsers.
                </AlertDescription>
            </Alert>
        </div>
    );
}
