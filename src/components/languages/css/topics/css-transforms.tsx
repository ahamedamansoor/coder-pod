'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
    Play, Move, RotateCcw, Maximize, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Eye, MousePointer, ArrowRight,
    ArrowUp, ArrowDown, ArrowLeft, Minimize, RotateCw, FlipHorizontal, Layers
} from 'lucide-react';

interface CssTransformsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssTransforms({ onOpenWebPlayground }: CssTransformsProps) {
    const [selectedTransform, setSelectedTransform] = useState('translate');
    const [selectedFunction, setSelectedFunction] = useState('translateX');

    // Transform Functions
    const transformFunctions = [
        {
            name: 'translate',
            title: 'Translate (Move)',
            icon: Move,
            desc: 'Move elements along X and Y axes',
            functions: ['translateX()', 'translateY()', 'translate()', 'translate3d()']
        },
        {
            name: 'rotate',
            title: 'Rotate',
            icon: RotateCcw,
            desc: 'Rotate elements around their center',
            functions: ['rotate()', 'rotateX()', 'rotateY()', 'rotateZ()']
        },
        {
            name: 'scale',
            title: 'Scale (Resize)',
            icon: Maximize,
            desc: 'Change the size of elements',
            functions: ['scale()', 'scaleX()', 'scaleY()', 'scale3d()']
        },
        {
            name: 'skew',
            title: 'Skew (Distort)',
            icon: FlipHorizontal,
            desc: 'Distort elements along axes',
            functions: ['skew()', 'skewX()', 'skewY()']
        }
    ];

    // Individual Transform Functions
    const individualFunctions = [
        {
            name: 'translateX',
            desc: 'Move horizontally (left/right)',
            example: 'transform: translateX(50px);',
            values: ['50px', '-30px', '100%', '2rem']
        },
        {
            name: 'translateY',
            desc: 'Move vertically (up/down)',
            example: 'transform: translateY(-20px);',
            values: ['-20px', '50px', '-100%', '1.5rem']
        },
        {
            name: 'rotate',
            desc: 'Rotate around center point',
            example: 'transform: rotate(45deg);',
            values: ['45deg', '90deg', '-30deg', '180deg']
        },
        {
            name: 'scale',
            desc: 'Resize proportionally',
            example: 'transform: scale(1.5);',
            values: ['1.5', '0.8', '2', '0.5']
        }
    ];

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Transforms Complete Guide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>🔄 CSS Transforms Showcase</h1>
        <p>Explore the power of CSS transforms with interactive examples!</p>
        
        <section class="demo-section">
            <h2>📍 Translate (Move)</h2>
            <div class="transform-grid">
                <div class="transform-demo">
                    <div class="demo-box translate-x">translateX</div>
                    <p>Move Right</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box translate-y">translateY</div>
                    <p>Move Up</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box translate-xy">translate</div>
                    <p>Move Diagonal</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🔄 Rotate</h2>
            <div class="transform-grid">
                <div class="transform-demo">
                    <div class="demo-box rotate-45">45°</div>
                    <p>Rotate 45°</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box rotate-90">90°</div>
                    <p>Rotate 90°</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box rotate-continuous">∞</div>
                    <p>Continuous</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>📏 Scale (Resize)</h2>
            <div class="transform-grid">
                <div class="transform-demo">
                    <div class="demo-box scale-up">1.5x</div>
                    <p>Scale Up</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box scale-down">0.7x</div>
                    <p>Scale Down</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box scale-x">X only</div>
                    <p>Scale X</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🔀 Skew (Distort)</h2>
            <div class="transform-grid">
                <div class="transform-demo">
                    <div class="demo-box skew-x">skewX</div>
                    <p>Skew X</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box skew-y">skewY</div>
                    <p>Skew Y</p>
                </div>
                <div class="transform-demo">
                    <div class="demo-box skew-both">skew</div>
                    <p>Skew Both</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🎭 Combined Transforms</h2>
            <div class="combined-demo">
                <div class="demo-box combined-1">Hover Me!</div>
                <div class="demo-box combined-2">Click Me!</div>
                <div class="demo-box combined-3">Touch Me!</div>
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

.transform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.transform-demo {
    text-align: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.demo-box {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 0 auto 1rem;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

/* Translate Transforms */
.translate-x:hover { transform: translateX(30px); }
.translate-y:hover { transform: translateY(-30px); }
.translate-xy:hover { transform: translate(20px, -20px); }

/* Rotate Transforms */
.rotate-45:hover { transform: rotate(45deg); }
.rotate-90:hover { transform: rotate(90deg); }
.rotate-continuous { animation: spin 2s linear infinite; }

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Scale Transforms */
.scale-up:hover { transform: scale(1.5); }
.scale-down:hover { transform: scale(0.7); }
.scale-x:hover { transform: scaleX(1.8); }

/* Skew Transforms */
.skew-x:hover { transform: skewX(20deg); }
.skew-y:hover { transform: skewY(15deg); }
.skew-both:hover { transform: skew(10deg, 10deg); }

/* Combined Transforms */
.combined-demo {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.combined-1:hover {
    transform: translateY(-10px) rotate(10deg) scale(1.1);
}

.combined-2:active {
    transform: scale(0.95) rotate(-5deg);
}

.combined-3:hover {
    transform: translateX(10px) skewX(5deg) scale(1.05);
}

@media (max-width: 768px) {
    .transform-grid { grid-template-columns: repeat(2, 1fr); }
    .combined-demo { flex-direction: column; align-items: center; }
}`,
        js: `document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Transforms Demo loaded!');
    
    // Add click effects for mobile
    const demoBoxes = document.querySelectorAll('.demo-box');
    
    demoBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.transform = this.style.transform ? '' : getComputedStyle(this, ':hover').transform;
        });
    });
});`
    };

    return (
        <div className="space-y-8">
            <PageHeader
                icon={Move}
                category="CSS · Animations & Effects"
                title="CSS Transforms"
                description="Move, rotate, scale, and skew elements in 2D space with crisp control."
                colorTheme="blue"
            />

            {/* What are CSS Transforms? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Move className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Transforms?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Manipulate elements in 2D and 3D space without disrupting document flow - the magic of visual transformation!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Transform vs Layout Properties
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🔄 CSS Transform</div>
                                        <div className="relative h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden p-2">
                                            <div className="w-8 h-8 bg-blue-500 rounded absolute top-2 left-2"></div>
                                            <div className="w-8 h-8 bg-green-500 rounded absolute top-2 left-12"></div>
                                            <div 
                                                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded absolute top-2 left-2 cursor-pointer transition-transform duration-500 ease-out hover:translate-x-8 hover:rotate-45 hover:scale-125"
                                            >
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ No Layout Disruption</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">📐 Layout Property</div>
                                        <div className="relative h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden p-2">
                                            <div className="w-8 h-8 bg-blue-500 rounded mb-1"></div>
                                            <div className="w-8 h-8 bg-green-500 rounded mb-1"></div>
                                            <div className="w-8 h-8 bg-red-500 rounded"></div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Affects Document Flow</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Try it yourself - Hover over the purple square!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Notice how transforms don't push other elements around - they're purely visual!
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    🎨 Transform Functions
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Move className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Translate</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Move in X, Y, Z space</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <RotateCcw className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Rotate</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Spin around axes</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Maximize className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Scale</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Resize proportionally</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Layers className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Skew</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Distort shape</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">🔄</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Transforms</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Visual Only
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            No Layout Impact
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Hardware Accelerated
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">📐</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Layout Properties</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Affects Flow
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Triggers Reflow
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Performance Cost
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use transforms for animations and effects - they're GPU-accelerated and don't cause layout shifts!
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
                            <span className="text-gray-400 text-sm ml-2">CSS Transforms Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🔄 Single Transform */</div>
                            <div className="text-blue-400">.element</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-green-400">transform</span>: <span className="text-yellow-400">translateX(50px)</span>;</div>
                            <div className="text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎭 Combined Transforms */</div>
                            <div className="text-blue-400">.complex-element</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-green-400">transform</span>: <span className="text-yellow-400">translate(50px, -20px) rotate(45deg) scale(1.2)</span>;</div>
                            <div className="text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Transform Functions */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Code className="w-5 h-5" />
                        Transform Functions
                    </CardTitle>
                    <CardDescription>
                        Explore the four main categories of CSS transform functions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {transformFunctions.map((transform) => (
                                <div 
                                    key={transform.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${
                                        selectedTransform === transform.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedTransform(transform.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <transform.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{transform.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{transform.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{transformFunctions.find(t => t.name === selectedTransform)?.title} Functions</h4>
                            <div className="flex flex-wrap gap-2">
                                {transformFunctions.find(t => t.name === selectedTransform)?.functions.map((func, idx) => (
                                    <Badge key={idx} variant="secondary">{func}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Interactive Examples */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <MousePointer className="w-5 h-5" />
                        Live Transform Examples
                    </CardTitle>
                    <CardDescription>
                        Interactive CSS transforms you can see in action right here on the page!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* Translate Examples */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">📍 Translate (Move)</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center text-white font-bold text-xs">
                                        →
                                    </div>
                                    <p className="text-xs font-medium">translateX</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center text-white font-bold text-xs">
                                        ↑
                                    </div>
                                    <p className="text-xs font-medium">translateY</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center text-white font-bold text-xs">
                                        ↗
                                    </div>
                                    <p className="text-xs font-medium">translate</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg mx-auto mb-2 transition-all duration-700 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:rotate-12 group-hover:shadow-xl group-hover:scale-110 flex items-center justify-center text-white font-bold text-xs">
                                        3D
                                    </div>
                                    <p className="text-xs font-medium">3D Move</p>
                                </div>
                            </div>
                        </div>

                        {/* Rotate Examples */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🔄 Rotate</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:rotate-45 group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center text-white font-bold text-xs">
                                        45°
                                    </div>
                                    <p className="text-xs font-medium">rotate(45deg)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:rotate-90 group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center text-white font-bold text-xs">
                                        90°
                                    </div>
                                    <p className="text-xs font-medium">rotate(90deg)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:-rotate-45 group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center text-white font-bold text-xs">
                                        -45°
                                    </div>
                                    <p className="text-xs font-medium">rotate(-45deg)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mx-auto mb-2 animate-spin flex items-center justify-center text-white font-bold text-xs">
                                        ∞
                                    </div>
                                    <p className="text-xs font-medium">Continuous</p>
                                </div>
                            </div>
                        </div>

                        {/* Scale Examples */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">📏 Scale (Resize)</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:scale-125 group-hover:shadow-lg flex items-center justify-center text-white font-bold text-xs">
                                        1.25x
                                    </div>
                                    <p className="text-xs font-medium">scale(1.25)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:scale-75 group-hover:shadow-lg flex items-center justify-center text-white font-bold text-xs">
                                        0.75x
                                    </div>
                                    <p className="text-xs font-medium">scale(0.75)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:scale-x-150 group-hover:shadow-lg flex items-center justify-center text-white font-bold text-xs">
                                        X
                                    </div>
                                    <p className="text-xs font-medium">scaleX(1.5)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg mx-auto mb-2 transition-all duration-500 ease-out group-hover:scale-y-150 group-hover:shadow-lg flex items-center justify-center text-white font-bold text-xs">
                                        Y
                                    </div>
                                    <p className="text-xs font-medium">scaleY(1.5)</p>
                                </div>
                            </div>
                        </div>

                        {/* Combined Transforms */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🎭 Combined Transforms</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 cursor-pointer transition-transform duration-300 hover:translate-y-2 hover:rotate-12 hover:scale-110 flex items-center justify-center text-white font-bold text-sm">
                                        Hover
                                    </div>
                                    <p className="text-sm font-medium">Multi Transform</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">translate + rotate + scale</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mx-auto mb-3 cursor-pointer transition-transform duration-300 active:scale-95 active:rotate-6 flex items-center justify-center text-white font-bold text-sm">
                                        Click
                                    </div>
                                    <p className="text-sm font-medium">Active State</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Click and hold</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm"
                                        style={{
                                            animation: 'morphTransform 3s ease-in-out infinite'
                                        }}
                                    >
                                        Auto
                                    </div>
                                    <p className="text-sm font-medium">Animated</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Continuous animation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Complete CSS Transforms Playground
                    </CardTitle>
                    <CardDescription>
                        Comprehensive playground with all transform functions, combinations, and interactive examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Interactive Demo
                        </Button>
                        <Badge variant="secondary">📍 Translate</Badge>
                        <Badge variant="secondary">🔄 Rotate</Badge>
                        <Badge variant="secondary">📏 Scale</Badge>
                        <Badge variant="secondary">🔀 Skew</Badge>
                        <Badge variant="secondary">🎭 Combined</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Add custom keyframes for live examples */}
            <style jsx>{`
                @keyframes morphTransform {
                    0% { transform: scale(1) rotate(0deg); }
                    25% { transform: scale(1.1) rotate(90deg) translateY(-5px); }
                    50% { transform: scale(0.9) rotate(180deg) translateY(5px); }
                    75% { transform: scale(1.1) rotate(270deg) translateY(-5px); }
                    100% { transform: scale(1) rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
