'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
    Sparkles, Scissors, Shapes, Play, CheckCircle, 
    AlertTriangle, MousePointer, Zap, Target
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssMasksProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssMasks({ onOpenWebPlayground }: CssMasksProps) {

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Masks & Clipping</title>
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
        max-width: 1200px;
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

    h2 {
        font-size: 1.8rem;
        margin: 3rem 0 1.5rem;
        color: #1e293b;
    }

    @media (prefers-color-scheme: dark) {
        h2 { color: #f1f5f9; }
    }

    .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }

    .demo-card {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
    }

    @media (prefers-color-scheme: dark) {
        .demo-card {
            background: rgba(55, 65, 81, 0.5);
        }
    }

    .demo-box {
        width: 200px;
        height: 200px;
        margin: 0 auto 1rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .demo-card:hover .demo-box {
        transform: scale(1.05);
    }

    /* Clip Path Examples */
    .clip-circle {
        clip-path: circle(50%);
    }

    .clip-ellipse {
        clip-path: ellipse(40% 50%);
    }

    .clip-polygon {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    .clip-triangle {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .clip-star {
        clip-path: polygon(
            50% 0%, 61% 35%, 98% 35%, 68% 57%, 
            79% 91%, 50% 70%, 21% 91%, 32% 57%, 
            2% 35%, 39% 35%
        );
    }

    .clip-hexagon {
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }

    .clip-heart {
        clip-path: path('M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z');
    }

    .clip-message {
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    }

    /* Mask Examples */
    .mask-gradient {
        mask-image: linear-gradient(to bottom, black, transparent);
        -webkit-mask-image: linear-gradient(to bottom, black, transparent);
    }

    .mask-radial {
        mask-image: radial-gradient(circle, black 50%, transparent 70%);
        -webkit-mask-image: radial-gradient(circle, black 50%, transparent 70%);
    }

    .label {
        font-weight: 600;
        color: #1e293b;
        margin-top: 0.5rem;
        font-size: 0.9rem;
    }

    @media (prefers-color-scheme: dark) {
        .label { color: #f1f5f9; }
    }

    .code-block {
        background: #f1f5f9;
        padding: 0.75rem;
        border-radius: 6px;
        font-family: monospace;
        font-size: 0.8rem;
        color: #64748b;
        margin-top: 0.5rem;
    }

    @media (prefers-color-scheme: dark) {
        .code-block {
            background: #0f172a;
            color: #94a3b8;
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
        .demo-box {
            width: 120px;
            height: 120px;
            font-size: 2rem;
        }
        h1 { font-size: 2rem; }
        h2 { font-size: 1.4rem; }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>✂️ CSS Masks & Clipping</h1>
        <div class="instruction">
            🖱️ Hover over shapes to see them scale!
        </div>

        <section>
            <h2>✂️ clip-path Shapes</h2>
            <div class="demo-grid">
                <div class="demo-card">
                    <div class="demo-box clip-circle">🎨</div>
                    <div class="label">Circle</div>
                    <div class="code-block">clip-path: circle(50%);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box clip-ellipse">🎭</div>
                    <div class="label">Ellipse</div>
                    <div class="code-block">clip-path: ellipse(40% 50%);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box clip-polygon">💎</div>
                    <div class="label">Diamond</div>
                    <div class="code-block">clip-path: polygon(...);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box clip-triangle">🔺</div>
                    <div class="label">Triangle</div>
                    <div class="code-block">clip-path: polygon(...);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box clip-star">⭐</div>
                    <div class="label">Star</div>
                    <div class="code-block">clip-path: polygon(...);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box clip-hexagon">⬡</div>
                    <div class="label">Hexagon</div>
                    <div class="code-block">clip-path: polygon(...);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box clip-message">💬</div>
                    <div class="label">Message Bubble</div>
                    <div class="code-block">clip-path: polygon(...);</div>
                </div>
            </div>
        </section>

        <section>
            <h2>🎭 CSS Masks</h2>
            <div class="demo-grid">
                <div class="demo-card">
                    <div class="demo-box mask-gradient">🌅</div>
                    <div class="label">Linear Gradient Mask</div>
                    <div class="code-block">mask-image: linear-gradient(...);</div>
                </div>

                <div class="demo-card">
                    <div class="demo-box mask-radial">🎯</div>
                    <div class="label">Radial Gradient Mask</div>
                    <div class="code-block">mask-image: radial-gradient(...);</div>
                </div>
            </div>
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
                icon={Scissors}
                category="CSS · Visual Effects"
                title="CSS Masks & Clipping"
                description="Create complex shapes and hide portions of elements with clip-path and mask - the foundation of creative web design."
                colorTheme="blue"
            />

            {/* What are Masks & Clipping? */}
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50/80 via-blue-50/60 to-indigo-50/80 dark:from-cyan-950/30 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-indigo-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
                        <div className="relative">
                            <Scissors className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Masks & Clipping?
                    </CardTitle>
                    <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
                        ✂️ Cut elements into any shape imaginable - circles, stars, custom paths, and more!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Clipping and masking</strong> allow you to show only specific portions of an element. <code className="text-sm bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">clip-path</code> creates hard-edged shapes, while <code className="text-sm bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">mask</code> allows for gradual transparency.
                    </p>

                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
                        <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                            <Target className="w-5 h-5 animate-pulse" />
                            🎯 clip-path vs mask
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                    <Scissors className="w-4 h-4" />
                                    clip-path
                                </h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                    <strong>Hard edges</strong> - crisp, vector shapes
                                </p>
                                <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded block">
                                    clip-path: circle(50%);
                                </code>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                    <Shapes className="w-4 h-4" />
                                    mask
                                </h5>
                                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                                    <strong>Gradual transparency</strong> - soft edges
                                </p>
                                <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded block">
                                    mask-image: linear-gradient(...);
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mx-auto mb-2"
                                 style={{ clipPath: 'circle(50%)' }}>
                            </div>
                            <p className="text-xs font-medium">circle</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-2"
                                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                            </div>
                            <p className="text-xs font-medium">triangle</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-2"
                                 style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                            </div>
                            <p className="text-xs font-medium">diamond</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-2"
                                 style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                            </div>
                            <p className="text-xs font-medium">hexagon</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Common Shapes */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Shapes className="w-5 h-5" />
                        Common clip-path Shapes
                    </CardTitle>
                    <CardDescription>
                        Ready-to-use clip-path patterns for your designs.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border space-y-4">
                        <div>
                            <h5 className="font-semibold mb-2">Circle</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                clip-path: circle(50% at center);
                            </code>
                        </div>
                        
                        <div>
                            <h5 className="font-semibold mb-2">Triangle</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                            </code>
                        </div>

                        <div>
                            <h5 className="font-semibold mb-2">Star (5-point)</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block overflow-x-auto">
                                {`clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 
                79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);`}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Complete Playground */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                            <Play className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        CSS Masks & Clipping Playground
                    </CardTitle>
                    <CardDescription>
                        Explore clip-path shapes and CSS masks with interactive examples!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="Masks & Clipping Playground"
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
                        <li><strong>Use percentages</strong> - Makes shapes responsive and scalable</li>
                        <li><strong>Test with content</strong> - Ensure important content isn't clipped</li>
                        <li><strong>Add webkit prefix</strong> - Use <code>-webkit-mask</code> for better support</li>
                        <li><strong>Clippy tool</strong> - Use bennettfeely.com/clippy for creating custom shapes</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* Browser Support */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    clip-path has excellent support in all modern browsers. CSS masks require -webkit- prefix for Safari and Chrome. Both are production-ready!
                </AlertDescription>
            </Alert>
        </div>
    );
}
