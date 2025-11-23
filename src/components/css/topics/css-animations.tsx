
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Film, Repeat, Lightbulb, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Move, RotateCcw, Maximize, 
    Eye, MousePointer, Clock, Forward, Timer, Infinity, ArrowRight, RefreshCw
} from 'lucide-react';

interface CssAnimationsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssAnimations({ onOpenWebPlayground }: CssAnimationsProps) {
    const [selectedAnimation, setSelectedAnimation] = useState('bounce');
    const [selectedProperty, setSelectedProperty] = useState('animation-duration');

    // Animation Examples
    const animationExamples = [
        {
            name: 'bounce',
            title: 'Bounce Effect',
            icon: ArrowRight,
            desc: 'Bouncing ball animation',
            keyframes: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
}`
        },
        {
            name: 'spin',
            title: 'Spin Animation',
            icon: RotateCcw,
            desc: 'Continuous rotation',
            keyframes: `@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
        },
        {
            name: 'pulse',
            title: 'Pulse Effect',
            icon: Maximize,
            desc: 'Scaling pulse animation',
            keyframes: `@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}`
        },
        {
            name: 'slide',
            title: 'Slide In',
            icon: Move,
            desc: 'Sliding entrance effect',
            keyframes: `@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`
        }
    ];

    // Animation Properties
    const animationProperties = [
        {
            name: 'animation-duration',
            icon: Clock,
            desc: 'How long the animation takes',
            values: ['1s', '2s', '0.5s', '3s'],
            example: 'animation-duration: 2s;'
        },
        {
            name: 'animation-timing-function',
            icon: Forward,
            desc: 'Speed curve of the animation',
            values: ['ease', 'linear', 'ease-in-out', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'],
            example: 'animation-timing-function: ease-in-out;'
        },
        {
            name: 'animation-iteration-count',
            icon: Infinity,
            desc: 'How many times to repeat',
            values: ['1', '3', 'infinite', '2'],
            example: 'animation-iteration-count: infinite;'
        },
        {
            name: 'animation-direction',
            icon: Repeat,
            desc: 'Direction of animation playback',
            values: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
            example: 'animation-direction: alternate;'
        }
    ];

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Animations Complete Guide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>🎬 CSS Animations Showcase</h1>
        <p>Watch these amazing CSS animations in action!</p>
        
        <section class="demo-section">
            <h2>🎯 Basic Animations</h2>
            <div class="animation-grid">
                <div class="animation-demo">
                    <div class="bounce-ball"></div>
                    <p>Bounce</p>
                </div>
                <div class="animation-demo">
                    <div class="spin-wheel">⚙️</div>
                    <p>Spin</p>
                </div>
                <div class="animation-demo">
                    <div class="pulse-heart">❤️</div>
                    <p>Pulse</p>
                </div>
                <div class="animation-demo">
                    <div class="slide-box">📦</div>
                    <p>Slide</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🌈 Complex Multi-Step Animations</h2>
            <div class="complex-animations">
                <div class="morphing-shape"></div>
                <div class="floating-text">Floating Text</div>
                <div class="loading-spinner">
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🎭 Animation Timing Functions</h2>
            <div class="timing-demo">
                <div class="timing-ball ease">ease</div>
                <div class="timing-ball linear">linear</div>
                <div class="timing-ball ease-in-out">ease-in-out</div>
                <div class="timing-ball cubic">cubic-bezier</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🔄 Animation Directions</h2>
            <div class="direction-demo">
                <div class="direction-box normal">Normal</div>
                <div class="direction-box reverse">Reverse</div>
                <div class="direction-box alternate">Alternate</div>
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

/* Basic Animations */
.animation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.animation-demo {
    text-align: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.bounce-ball {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    border-radius: 50%;
    margin: 0 auto 1rem;
    animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
}

.spin-wheel {
    font-size: 3rem;
    animation: spin 2s linear infinite;
    display: inline-block;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.pulse-heart {
    font-size: 3rem;
    animation: pulse 1.5s ease-in-out infinite;
    display: inline-block;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

.slide-box {
    font-size: 3rem;
    animation: slideIn 3s ease-in-out infinite;
    display: inline-block;
}

@keyframes slideIn {
    0% { transform: translateX(-50px); opacity: 0; }
    50% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(50px); opacity: 0; }
}

/* Complex Animations */
.complex-animations {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.morphing-shape {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    animation: morph 4s ease-in-out infinite;
}

@keyframes morph {
    0% { border-radius: 0; transform: rotate(0deg) scale(1); }
    25% { border-radius: 50%; transform: rotate(90deg) scale(1.2); }
    50% { border-radius: 0; transform: rotate(180deg) scale(0.8); }
    75% { border-radius: 50%; transform: rotate(270deg) scale(1.1); }
    100% { border-radius: 0; transform: rotate(360deg) scale(1); }
}

.floating-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #667eea;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(2deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
}

.loading-spinner {
    display: flex;
    gap: 10px;
}

.spinner-dot {
    width: 15px;
    height: 15px;
    background: #ff6b6b;
    border-radius: 50%;
    animation: wave 1.4s ease-in-out infinite;
}

.spinner-dot:nth-child(2) { animation-delay: 0.2s; }
.spinner-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes wave {
    0%, 60%, 100% { transform: scale(1); opacity: 1; }
    30% { transform: scale(1.5); opacity: 0.7; }
}

/* Timing Functions Demo */
.timing-demo {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
}

.timing-ball {
    width: 60px;
    height: 60px;
    background: #667eea;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: bold;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: moveRight;
}

.ease { animation-timing-function: ease; }
.linear { animation-timing-function: linear; }
.ease-in-out { animation-timing-function: ease-in-out; }
.cubic { animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }

@keyframes moveRight {
    0% { transform: translateX(0); }
    50% { transform: translateX(200px); }
    100% { transform: translateX(0); }
}

/* Direction Demo */
.direction-demo {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.direction-box {
    width: 100px;
    height: 60px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: bold;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: scaleRotate;
}

.normal { animation-direction: normal; }
.reverse { animation-direction: reverse; }
.alternate { animation-direction: alternate; }

@keyframes scaleRotate {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    100% { transform: scale(1) rotate(360deg); }
}

@media (max-width: 768px) {
    .animation-grid { grid-template-columns: repeat(2, 1fr); }
    .complex-animations { flex-direction: column; }
    .direction-demo { flex-direction: column; align-items: center; }
}`,
        js: `document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Animations Demo loaded!');
    
    // Add pause/play functionality on click
    const animatedElements = document.querySelectorAll('[class*="animation"], [class*="bounce"], [class*="spin"], [class*="pulse"], [class*="slide"], [class*="morph"], [class*="float"], [class*="timing"], [class*="direction"]');
    
    animatedElements.forEach(element => {
        element.addEventListener('click', function() {
            if (this.style.animationPlayState === 'paused') {
                this.style.animationPlayState = 'running';
            } else {
                this.style.animationPlayState = 'paused';
            }
        });
    });
    
    console.log('Click any animated element to pause/play!');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Film className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Animations</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Creating complex, multi-step animations with keyframes - from simple effects to advanced sequences.
                </p>
            </div>

            {/* What are CSS Animations? */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Film className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Animations?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Create cinematic multi-step sequences with keyframes - from simple loops to complex choreographed performances!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Animations vs Transitions
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">⚡ Transition (A → B)</div>
                                        <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                            <div 
                                                className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full absolute top-6 left-4 cursor-pointer hover:left-16 transition-all duration-500"
                                            >
                                            </div>
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">Simple Start → End</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">🎬 Animation (Multi-Step)</div>
                                        <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full absolute top-6 left-4 animate-bounce">
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Complex Sequence</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Watch the difference!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Animations can have multiple keyframes with different properties at each step.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    🎨 Animation Capabilities
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Target className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Keyframe Control</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">0%, 25%, 50%, 75%, 100%</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <RefreshCw className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Infinite Loops</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Continuous playback</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Timer className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Timing Control</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Duration, delay, direction</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Palette className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Multi-Property</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Color, size, position</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">🎭</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Animations</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Multi-Step Sequences
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Keyframe Precision
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Complex Choreography
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">⚡</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Transitions</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-orange-500 dark:text-orange-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Simple A → B
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-orange-500 dark:text-orange-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            State-Triggered Only
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-orange-500 dark:text-orange-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Limited Control
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use animations for loading spinners, attention-grabbing effects, and complex visual storytelling!
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
                            <span className="text-gray-400 text-sm ml-2">CSS Animations Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🎬 Define Keyframes */</div>
                            <div className="text-purple-400">@keyframes bounce</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-yellow-400">0%</span> {'{'} <span className="text-green-400">transform</span>: <span className="text-blue-400">translateY(0)</span>; {'}'}</div>
                            <div className="text-white">   <span className="text-yellow-400">50%</span> {'{'} <span className="text-green-400">transform</span>: <span className="text-blue-400">translateY(-20px)</span>; {'}'}</div>
                            <div className="text-white">   <span className="text-yellow-400">100%</span> {'{'} <span className="text-green-400">transform</span>: <span className="text-blue-400">translateY(0)</span>; {'}'}</div>
                            <div className="text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎯 Apply Animation */</div>
                            <div className="text-blue-400">.bouncing-ball</div>
                            <div className="text-white"> {'{'}</div>
                            <div className="text-white">   <span className="text-green-400">animation</span>: <span className="text-yellow-400">bounce 2s infinite</span>;</div>
                            <div className="text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>


            {/* Keyframes Fundamentals */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Code className="w-5 h-5" />
                        @keyframes - The Heart of Animations
                    </CardTitle>
                    <CardDescription>
                        Learn how to define animation sequences using keyframes and percentages.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {animationExamples.map((animation) => (
                                <div 
                                    key={animation.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 ${
                                        selectedAnimation === animation.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary shadow-lg' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedAnimation(animation.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <animation.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{animation.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{animation.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{animationExamples.find(a => a.name === selectedAnimation)?.title} Keyframes</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block whitespace-pre-line">
                                {animationExamples.find(a => a.name === selectedAnimation)?.keyframes}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Animation Properties */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Settings className="w-5 h-5" />
                        Animation Properties
                    </CardTitle>
                    <CardDescription>
                        Master the properties that control how animations behave and play.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            {animationProperties.map((property) => (
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
                                    <div className="flex flex-wrap gap-1">
                                        {property.values.slice(0, 3).map((value, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">{value}</Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{selectedProperty} Example</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                {animationProperties.find(p => p.name === selectedProperty)?.example}
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
                        Live Animation Examples
                    </CardTitle>
                    <CardDescription>
                        Interactive CSS animations you can see in action right here on the page!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* Basic Animations */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🎯 Basic Animations</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-2 animate-bounce"></div>
                                    <p className="text-xs font-medium">Bounce</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 animate-spin"></div>
                                    <p className="text-xs font-medium">Spin</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mb-2 animate-pulse"></div>
                                    <p className="text-xs font-medium">Pulse</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg mx-auto mb-2 animate-ping"></div>
                                    <p className="text-xs font-medium">Ping</p>
                                </div>
                            </div>
                        </div>

                        {/* Custom Animations */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🌟 Custom Keyframe Animations</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-3 rounded-lg"
                                        style={{
                                            animation: 'morphShape 3s ease-in-out infinite'
                                        }}
                                    ></div>
                                    <p className="text-sm font-medium">Morphing Shape</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Border-radius + scale changes</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="text-2xl mx-auto mb-3"
                                        style={{
                                            animation: 'floatText 2s ease-in-out infinite'
                                        }}
                                    >
                                        ✨
                                    </div>
                                    <p className="text-sm font-medium">Floating Element</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Translate + rotate combo</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="flex justify-center gap-1 mb-3">
                                        <div 
                                            className="w-3 h-3 bg-blue-500 rounded-full"
                                            style={{
                                                animation: 'wave 1.4s ease-in-out infinite'
                                            }}
                                        ></div>
                                        <div 
                                            className="w-3 h-3 bg-blue-500 rounded-full"
                                            style={{
                                                animation: 'wave 1.4s ease-in-out infinite 0.2s'
                                            }}
                                        ></div>
                                        <div 
                                            className="w-3 h-3 bg-blue-500 rounded-full"
                                            style={{
                                                animation: 'wave 1.4s ease-in-out infinite 0.4s'
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-sm font-medium">Loading Dots</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Staggered animation delays</p>
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
                        Complete CSS Animations Playground
                    </CardTitle>
                    <CardDescription>
                        Comprehensive playground with keyframes, timing functions, directions, and complex multi-step animations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Interactive Demo
                        </Button>
                        <Badge variant="secondary">🎯 Basic Animations</Badge>
                        <Badge variant="secondary">🌈 Multi-Step Keyframes</Badge>
                        <Badge variant="secondary">⏱️ Timing Functions</Badge>
                        <Badge variant="secondary">🔄 Animation Directions</Badge>
                        <Badge variant="secondary">🎮 Interactive Controls</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Add custom keyframes for live examples */}
            <style jsx>{`
                @keyframes morphShape {
                    0% { border-radius: 0; transform: scale(1) rotate(0deg); }
                    25% { border-radius: 50%; transform: scale(1.1) rotate(90deg); }
                    50% { border-radius: 0; transform: scale(0.9) rotate(180deg); }
                    75% { border-radius: 50%; transform: scale(1.1) rotate(270deg); }
                    100% { border-radius: 0; transform: scale(1) rotate(360deg); }
                }
                
                @keyframes floatText {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    33% { transform: translateY(-8px) rotate(2deg); }
                    66% { transform: translateY(4px) rotate(-1deg); }
                }
                
                @keyframes wave {
                    0%, 60%, 100% { transform: scale(1); opacity: 1; }
                    30% { transform: scale(1.4); opacity: 0.7; }
                }
            `}</style>
        </div>
    );
}
