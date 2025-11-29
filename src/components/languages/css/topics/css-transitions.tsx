
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Clapperboard, Clock, Forward, Timer, Target, Code, 
    Zap, Settings, CheckCircle, AlertTriangle, Palette, Move,
    RotateCcw, Maximize, Eye, MousePointer
} from 'lucide-react';

interface CssTransitionsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssTransitions({ onOpenWebPlayground }: CssTransitionsProps) {
    const [selectedProperty, setSelectedProperty] = useState('transform');
    const [selectedTiming, setSelectedTiming] = useState('ease');

    // Transition Properties Data
    const transitionProperties = [
        {
            name: 'transform',
            icon: Move,
            desc: 'Scale, rotate, translate elements',
            example: 'transform: scale(1.2) rotate(45deg);'
        },
        {
            name: 'background-color',
            icon: Palette,
            desc: 'Change background colors smoothly',
            example: 'background-color: #ff6b6b;'
        },
        {
            name: 'opacity',
            icon: Eye,
            desc: 'Fade elements in and out',
            example: 'opacity: 0.5;'
        },
        {
            name: 'width',
            icon: Maximize,
            desc: 'Animate width changes',
            example: 'width: 300px;'
        }
    ];

    // Timing Functions
    const timingFunctions = [
        {
            name: 'ease',
            desc: 'Slow start, fast middle, slow end',
            curve: '🏃‍♂️ ⚡ 🚶‍♂️'
        },
        {
            name: 'linear',
            desc: 'Constant speed throughout',
            curve: '🚶‍♂️ 🚶‍♂️ 🚶‍♂️'
        },
        {
            name: 'ease-in',
            desc: 'Slow start, then accelerate',
            curve: '🚶‍♂️ 🏃‍♂️ ⚡'
        },
        {
            name: 'ease-out',
            desc: 'Fast start, then decelerate',
            curve: '⚡ 🏃‍♂️ 🚶‍♂️'
        }
    ];

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Transitions Complete Guide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>🎬 CSS Transitions Demo</h1>
        <p>Hover over the elements to see smooth transitions in action!</p>
        
        <section class="demo-section">
            <h2>🎯 Transform Transitions</h2>
            <div class="demo-grid">
                <div class="demo-box scale-box">
                    <span>Scale</span>
                </div>
                <div class="demo-box rotate-box">
                    <span>Rotate</span>
                </div>
                <div class="demo-box translate-box">
                    <span>Translate</span>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🎨 Color Transitions</h2>
            <div class="demo-grid">
                <div class="demo-box color-box">
                    <span>Background</span>
                </div>
                <div class="demo-box border-box">
                    <span>Border</span>
                </div>
                <div class="demo-box shadow-box">
                    <span>Shadow</span>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>⏱️ Timing Functions</h2>
            <div class="timing-demo">
                <div class="timing-box ease-demo">ease</div>
                <div class="timing-box linear-demo">linear</div>
                <div class="timing-box ease-in-demo">ease-in</div>
                <div class="timing-box ease-out-demo">ease-out</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🔄 Multiple Properties</h2>
            <div class="multi-demo">
                <div class="multi-box">
                    <span>Hover for Magic!</span>
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

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.demo-box {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

/* Transform Transitions */
.scale-box:hover { transform: scale(1.2); }
.rotate-box:hover { transform: rotate(45deg); }
.translate-box:hover { transform: translateY(-20px); }

/* Color Transitions */
.color-box:hover { background: linear-gradient(135deg, #ff6b6b, #ee5a24); }
.border-box {
    border: 3px solid transparent;
    transition: all 0.3s ease;
}
.border-box:hover { border-color: #ff6b6b; }

.shadow-box:hover {
    box-shadow: 0 20px 40px rgba(255, 107, 107, 0.4);
}

/* Timing Functions Demo */
.timing-demo {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}

.timing-box {
    width: 100px;
    height: 50px;
    background: #667eea;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
}

.ease-demo { transition: transform 1s ease; }
.linear-demo { transition: transform 1s linear; }
.ease-in-demo { transition: transform 1s ease-in; }
.ease-out-demo { transition: transform 1s ease-out; }

.timing-box:hover { transform: translateX(200px); }

/* Multiple Properties */
.multi-demo {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.multi-box {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.multi-box:hover {
    transform: scale(1.1) rotate(10deg);
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    border-radius: 50%;
    box-shadow: 0 20px 40px rgba(255, 107, 107, 0.4);
}

@media (max-width: 768px) {
    .demo-grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
    .demo-box { width: 120px; height: 120px; }
    .timing-box:hover { transform: translateX(100px); }
}`,
        js: `document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Transitions Demo loaded!');
    
    // Add click handlers for mobile
    const boxes = document.querySelectorAll('.demo-box, .timing-box, .multi-box');
    
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});`
    };
    
    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Clapperboard className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Transitions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Creating smooth animations when an element changes state - from simple hover effects to complex multi-property transitions.
                </p>
            </div>

            {/* What are CSS Transitions? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Timer className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Transitions?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Transform jarring instant changes into buttery-smooth animations that delight users and enhance UX!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Instant vs Smooth Changes
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">⚡ Without Transition</div>
                                        <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                            <div 
                                                className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg absolute top-4 left-4 cursor-pointer hover:left-16"
                                                style={{ transition: 'none' }}
                                            >
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Jarring Jump</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🎬 With Transition</div>
                                        <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                            <div 
                                                className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg absolute top-4 left-4 cursor-pointer hover:left-16 transition-all duration-500 ease-out"
                                            >
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Smooth Glide</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Try it yourself - Hover over the boxes above!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Feel the difference between instant changes and smooth transitions.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    🎨 Transition Properties
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Target className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Property</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">What to animate</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Timer className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Duration</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">How long it takes</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Forward className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Timing Function</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Speed curve</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Clock className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Delay</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">When to start</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">🎬</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Transitions</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Smooth & Natural
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            User-Friendly
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Performance Optimized
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">⚡</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Instant Changes</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Jarring & Abrupt
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Poor UX
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Disorienting
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use transitions for hover effects, state changes, and micro-interactions to create delightful user experiences!
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
                            <span className="text-gray-400 text-sm ml-2">CSS Transitions Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🎬 Basic Transition */</div>
                            <div className="text-blue-400">.smooth-button</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-green-400">transition</span>: <span className="text-yellow-400">all 0.3s ease</span>;</div>
                            <div className="text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎯 Hover Effect */</div>
                            <div className="text-blue-400">.smooth-button:hover</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-green-400">transform</span>: <span className="text-yellow-400">scale(1.1)</span>;</div>
                            <div className="text-white">   <span className="text-green-400">background-color</span>: <span className="text-yellow-400">#3b82f6</span>;</div>
                            <div className="text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Transition Properties */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Settings className="w-5 h-5" />
                        The Four Transition Properties
                    </CardTitle>
                    <CardDescription>
                        Master the four essential properties that control how transitions work.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400">
                            <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                transition-property
                            </h5>
                            <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                                Which CSS properties to animate
                            </p>
                            <code className="text-xs bg-blue-100 dark:bg-blue-800 p-2 rounded block">
                                transition-property: transform, opacity;
                            </code>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400">
                            <h5 className="font-medium text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                transition-duration
                            </h5>
                            <p className="text-xs text-green-600 dark:text-green-400 mb-2">
                                How long the transition takes
                            </p>
                            <code className="text-xs bg-green-100 dark:bg-green-800 p-2 rounded block">
                                transition-duration: 0.3s;
                            </code>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border-l-4 border-purple-400">
                            <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                <Forward className="w-4 h-4" />
                                transition-timing-function
                            </h5>
                            <p className="text-xs text-purple-600 dark:text-purple-400 mb-2">
                                The speed curve of the animation
                            </p>
                            <code className="text-xs bg-purple-100 dark:bg-purple-800 p-2 rounded block">
                                transition-timing-function: ease-in-out;
                            </code>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded border-l-4 border-orange-400">
                            <h5 className="font-medium text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                                <Timer className="w-4 h-4" />
                                transition-delay
                            </h5>
                            <p className="text-xs text-orange-600 dark:text-orange-400 mb-2">
                                Delay before transition starts
                            </p>
                            <code className="text-xs bg-orange-100 dark:bg-orange-800 p-2 rounded block">
                                transition-delay: 0.1s;
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Transitionable Properties */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Palette className="w-5 h-5" />
                        Transitionable Properties
                    </CardTitle>
                    <CardDescription>
                        Explore different CSS properties that can be smoothly animated with transitions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {transitionProperties.map((property) => (
                                <div 
                                    key={property.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${
                                        selectedProperty === property.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedProperty(property.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <property.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{property.name}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{property.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{transitionProperties.find(p => p.name === selectedProperty)?.name} Example</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                {transitionProperties.find(p => p.name === selectedProperty)?.example}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Timing Functions */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Forward className="w-5 h-5" />
                        Timing Functions & Easing
                    </CardTitle>
                    <CardDescription>
                        Control the speed and feel of your transitions with different timing functions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {timingFunctions.map((timing) => (
                                <div 
                                    key={timing.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${
                                        selectedTiming === timing.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedTiming(timing.name)}
                                >
                                    <h3 className="font-bold text-sm mb-2">{timing.name}</h3>
                                    <div className="text-lg mb-2">{timing.curve}</div>
                                    <p className="text-xs text-gray-600">{timing.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">transition-timing-function: {selectedTiming}</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                .element {'{'}
                                <br />
                                {'  '}transition: transform 0.5s {selectedTiming};
                                <br />
                                {'}'}
                                <br />
                                <br />
                                .element:hover {'{'}
                                <br />
                                {'  '}transform: scale(1.2);
                                <br />
                                {'}'}
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
                        Live Interactive Examples
                    </CardTitle>
                    <CardDescription>
                        Hover over the elements below to see CSS transitions in action right here on the page!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* Transform Transitions */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🎯 Transform Transitions</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 transition-transform duration-300 ease-in-out group-hover:scale-125 flex items-center justify-center text-white font-bold"
                                    >
                                        Scale
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Hover to scale</p>
                                </div>
                                
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-2 transition-transform duration-500 ease-in-out group-hover:rotate-45 flex items-center justify-center text-white font-bold"
                                    >
                                        Rotate
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Hover to rotate</p>
                                </div>
                                
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg mx-auto mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-3 flex items-center justify-center text-white font-bold"
                                    >
                                        Move
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Hover to move up</p>
                                </div>
                                
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg mx-auto mb-2 transition-all duration-400 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:rounded-full flex items-center justify-center text-white font-bold"
                                    >
                                        Multi
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Multiple effects</p>
                                </div>
                            </div>
                        </div>

                        {/* Color & Opacity Transitions */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🎨 Color & Opacity Transitions</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-24 h-16 bg-blue-500 rounded-lg mx-auto mb-2 transition-colors duration-300 ease-in-out group-hover:bg-red-500 flex items-center justify-center text-white font-bold"
                                    >
                                        Color
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Background color change</p>
                                </div>
                                
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-24 h-16 bg-purple-500 rounded-lg mx-auto mb-2 transition-opacity duration-500 ease-in-out group-hover:opacity-30 flex items-center justify-center text-white font-bold"
                                    >
                                        Fade
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Opacity transition</p>
                                </div>
                                
                                <div className="text-center cursor-pointer group">
                                    <div 
                                        className="w-24 h-16 bg-green-500 border-4 border-transparent rounded-lg mx-auto mb-2 transition-all duration-300 ease-in-out group-hover:border-yellow-400 group-hover:shadow-lg flex items-center justify-center text-white font-bold"
                                    >
                                        Border
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Border & shadow</p>
                                </div>
                            </div>
                        </div>

                        {/* Timing Function Comparison */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">⏱️ Timing Function Race</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                Hover over the track to see different timing functions in action:
                            </p>
                            <div className="text-center mb-4">
                                <span className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                    🏁 Hover to start race!
                                </span>
                            </div>
                            <div 
                                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 cursor-pointer group overflow-hidden"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono w-16 text-blue-600 font-semibold">ease</span>
                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-4 rounded-full relative">
                                            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full transition-all duration-1000 delay-[5000ms] ease group-hover:ml-[calc(100%-1rem)]"></div>
                                        </div>
                                        <span className="text-sm">🏁</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono w-16 text-green-600 font-semibold">linear</span>
                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-4 rounded-full relative">
                                            <div className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full transition-all duration-1000 delay-[5000ms] linear group-hover:ml-[calc(100%-1rem)]"></div>
                                        </div>
                                        <span className="text-sm">🏁</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono w-16 text-purple-600 font-semibold">ease-in</span>
                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-4 rounded-full relative">
                                            <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full transition-all duration-1000 delay-[5000ms] ease-in group-hover:ml-[calc(100%-1rem)]"></div>
                                        </div>
                                        <span className="text-sm">🏁</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono w-16 text-orange-600 font-semibold">ease-out</span>
                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-4 rounded-full relative">
                                            <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full transition-all duration-1000 delay-[5000ms] ease-out group-hover:ml-[calc(100%-1rem)]"></div>
                                        </div>
                                        <span className="text-sm">🏁</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Button Examples */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🔘 Interactive Button Effects</h4>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg active:scale-95">
                                    Scale Effect
                                </button>
                                
                                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600 hover:-translate-y-1 hover:shadow-xl">
                                    Lift Effect
                                </button>
                                
                                <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-green-600 group">
                                    <span className="relative z-10">Slide Effect</span>
                                    <div className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                                </button>
                                
                                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:rounded-full hover:px-8">
                                    Shape Change
                                </button>
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
                        Complete CSS Transitions Playground
                    </CardTitle>
                    <CardDescription>
                        Interactive playground with transform transitions, color changes, timing functions, and multi-property animations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Interactive Demo
                        </Button>
                        <Badge variant="secondary">🎯 Transform Effects</Badge>
                        <Badge variant="secondary">🎨 Color Transitions</Badge>
                        <Badge variant="secondary">⏱️ Timing Functions</Badge>
                        <Badge variant="secondary">🔄 Multi-Property</Badge>
                        <Badge variant="secondary">📱 Mobile Friendly</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
