'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Sparkles, Play, Type, Zap, Palette, Eye, 
    Layers, Settings, Circle, CheckCircle, 
    AlertTriangle, Target, Hash, Brush,
    Wand2, Star, Flame, Rainbow, Gem
} from 'lucide-react';

interface CssTextEffectsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssTextEffects({ onOpenWebPlayground }: CssTextEffectsProps) {
    // Text Shadow Effects
    const textShadowEffects = [
        {
            name: "Simple Drop Shadow",
            css: "text-shadow: 2px 2px 4px rgba(0,0,0,0.5);",
            desc: "Basic shadow offset to the right and down",
            example: "Drop Shadow",
            style: { textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }
        },
        {
            name: "Glow Effect",
            css: "text-shadow: 0 0 10px #00ff00;",
            desc: "Creates a glowing effect around text",
            example: "Glow Text",
            style: { textShadow: "0 0 10px #00ff00, 0 0 20px #00ff00" }
        },
        {
            name: "Multiple Shadows",
            css: "text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
            desc: "Combine multiple shadows for complex effects",
            example: "Multi Shadow",
            style: { textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" }
        },
        {
            name: "Embossed Effect",
            css: "text-shadow: 1px 1px 0px #ccc, -1px -1px 0px #000;",
            desc: "Creates a 3D embossed appearance",
            example: "Embossed",
            style: { textShadow: "1px 1px 0px #ccc, -1px -1px 0px #666" }
        }
    ];

    // Gradient Text Effects
    const gradientEffects = [
        {
            name: "Linear Gradient",
            css: "background: linear-gradient(45deg, #ff6b6b, #4ecdc4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
            desc: "Creates colorful gradient text",
            example: "Gradient Text"
        },
        {
            name: "Rainbow Gradient",
            css: "background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
            desc: "Multi-color rainbow effect",
            example: "Rainbow"
        },
        {
            name: "Metallic Gold",
            css: "background: linear-gradient(45deg, #f9d71c, #daa520, #b8860b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
            desc: "Shiny metallic gold appearance",
            example: "Gold Text"
        },
        {
            name: "Chrome Effect",
            css: "background: linear-gradient(to bottom, #eee 0%, #999 50%, #777 51%, #555 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
            desc: "Chrome metallic effect",
            example: "Chrome"
        }
    ];

    // Text Transform Effects
    const transformEffects = [
        {
            name: "Rotate",
            css: "transform: rotate(15deg);",
            desc: "Rotate text at an angle",
            example: "Rotated",
            style: { transform: "rotate(15deg)" }
        },
        {
            name: "Scale",
            css: "transform: scale(1.2);",
            desc: "Make text larger or smaller",
            example: "Scaled",
            style: { transform: "scale(1.2)" }
        },
        {
            name: "Skew",
            css: "transform: skew(20deg, 0deg);",
            desc: "Slant text horizontally or vertically",
            example: "Skewed",
            style: { transform: "skew(20deg, 0deg)" }
        },
        {
            name: "3D Perspective",
            css: "transform: perspective(500px) rotateX(45deg);",
            desc: "Add 3D depth perspective",
            example: "3D Text",
            style: { transform: "perspective(500px) rotateX(45deg)" }
        }
    ];

    // Animation Effects
    const animationEffects = [
        {
            name: "Typewriter",
            desc: "Text appears character by character",
            example: "Typing Effect..."
        },
        {
            name: "Fade In",
            desc: "Text gradually appears with opacity animation",
            example: "Fade In Text"
        },
        {
            name: "Bounce",
            desc: "Text bounces up and down continuously",
            example: "Bouncing!"
        },
        {
            name: "Glow Pulse",
            desc: "Text shadow pulses with changing intensity",
            example: "Pulsing Glow"
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Text Effects Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Text Effects: Complete Guide</h1>
        
        <section class="effects-section">
            <h2>Text Shadow Effects</h2>
            <div class="effect-grid">
                <div class="effect-item">
                    <h3 class="drop-shadow">Drop Shadow</h3>
                    <p>Basic shadow offset</p>
                </div>
                <div class="effect-item">
                    <h3 class="glow-effect">Glow Effect</h3>
                    <p>Glowing text</p>
                </div>
                <div class="effect-item">
                    <h3 class="multi-shadow">Multi Shadow</h3>
                    <p>Multiple shadows</p>
                </div>
                <div class="effect-item">
                    <h3 class="embossed">Embossed</h3>
                    <p>3D embossed look</p>
                </div>
            </div>
        </section>

        <section class="effects-section">
            <h2>Gradient Text Effects</h2>
            <div class="effect-grid">
                <div class="effect-item">
                    <h3 class="gradient-linear">Linear Gradient</h3>
                    <p>Colorful gradient</p>
                </div>
                <div class="effect-item">
                    <h3 class="gradient-rainbow">Rainbow</h3>
                    <p>Multi-color effect</p>
                </div>
                <div class="effect-item">
                    <h3 class="gradient-gold">Gold Text</h3>
                    <p>Metallic gold</p>
                </div>
                <div class="effect-item">
                    <h3 class="gradient-chrome">Chrome</h3>
                    <p>Chrome metallic</p>
                </div>
            </div>
        </section>

        <section class="effects-section">
            <h2>Transform Effects</h2>
            <div class="effect-grid">
                <div class="effect-item">
                    <h3 class="rotate-text">Rotated</h3>
                    <p>Angled text</p>
                </div>
                <div class="effect-item">
                    <h3 class="scale-text">Scaled</h3>
                    <p>Larger text</p>
                </div>
                <div class="effect-item">
                    <h3 class="skew-text">Skewed</h3>
                    <p>Slanted text</p>
                </div>
                <div class="effect-item">
                    <h3 class="perspective-text">3D Text</h3>
                    <p>Perspective view</p>
                </div>
            </div>
        </section>

        <section class="effects-section">
            <h2>Animation Effects</h2>
            <div class="effect-grid">
                <div class="effect-item">
                    <h3 class="typewriter">Typewriter Effect</h3>
                    <p>Character by character</p>
                </div>
                <div class="effect-item">
                    <h3 class="fade-in">Fade In Text</h3>
                    <p>Gradual appearance</p>
                </div>
                <div class="effect-item">
                    <h3 class="bounce">Bouncing!</h3>
                    <p>Up and down motion</p>
                </div>
                <div class="effect-item">
                    <h3 class="glow-pulse">Pulsing Glow</h3>
                    <p>Breathing effect</p>
                </div>
            </div>
        </section>

        <section class="effects-section">
            <h2>Advanced Combinations</h2>
            <div class="advanced-effects">
                <h3 class="neon-sign">NEON SIGN</h3>
                <h3 class="fire-text">🔥 FIRE TEXT 🔥</h3>
                <h3 class="ice-text">❄️ ICE TEXT ❄️</h3>
                <h3 class="retro-text">RETRO 80s</h3>
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
    color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.effects-section {
    margin-bottom: 3rem;
    background: rgba(255,255,255,0.1);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.effects-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.effect-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.effect-item {
    background: rgba(255,255,255,0.1);
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.2);
}

.effect-item h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

.effect-item p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Text Shadow Effects */
.drop-shadow {
    text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
}

.glow-effect {
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    color: #00ff00;
}

.multi-shadow {
    text-shadow: 
        2px 2px 0px #ff0000,
        4px 4px 0px #00ff00,
        6px 6px 0px #0000ff;
}

.embossed {
    text-shadow: 
        1px 1px 0px #ccc,
        -1px -1px 0px #666;
    color: #999;
}

/* Gradient Text Effects */
.gradient-linear {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.gradient-rainbow {
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.gradient-gold {
    background: linear-gradient(45deg, #f9d71c, #daa520, #b8860b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.gradient-chrome {
    background: linear-gradient(to bottom, #eee 0%, #999 50%, #777 51%, #555 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Transform Effects */
.rotate-text {
    transform: rotate(15deg);
    transition: transform 0.3s ease;
}

.rotate-text:hover {
    transform: rotate(-15deg);
}

.scale-text {
    transform: scale(1.2);
    transition: transform 0.3s ease;
}

.scale-text:hover {
    transform: scale(1.4);
}

.skew-text {
    transform: skew(20deg, 0deg);
    transition: transform 0.3s ease;
}

.skew-text:hover {
    transform: skew(-20deg, 0deg);
}

.perspective-text {
    transform: perspective(500px) rotateX(45deg);
    transition: transform 0.3s ease;
}

.perspective-text:hover {
    transform: perspective(500px) rotateX(-45deg);
}

/* Animation Effects */
@keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
}

.typewriter {
    overflow: hidden;
    border-right: 2px solid white;
    white-space: nowrap;
    animation: typewriter 3s steps(40, end) infinite,
               blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: white; }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 2s ease-in-out infinite alternate;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}

.bounce {
    animation: bounce 2s infinite;
}

@keyframes glowPulse {
    0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff; }
    50% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff; }
    100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff; }
}

.glow-pulse {
    animation: glowPulse 2s ease-in-out infinite;
}

/* Advanced Effects */
.advanced-effects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.neon-sign {
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #ff00ff,
        0 0 40px #ff00ff,
        0 0 80px #ff00ff;
    animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #ff00ff,
            0 0 40px #ff00ff,
            0 0 80px #ff00ff;
    }
    20%, 24%, 55% {
        text-shadow: none;
    }
}

.fire-text {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, #ff4500, #ff8c00, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 20px rgba(255, 69, 0, 0.8);
    animation: fireFlicker 0.5s ease-in-out infinite alternate;
}

@keyframes fireFlicker {
    0% { transform: scale(1) rotate(-1deg); }
    100% { transform: scale(1.05) rotate(1deg); }
}

.ice-text {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, #87ceeb, #b0e0e6, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 20px rgba(135, 206, 235, 0.8);
}

.retro-text {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 
        3px 3px 0px #ff00ff,
        6px 6px 0px #00ffff;
    transform: perspective(500px) rotateX(15deg);
}

/* Responsive Design */
@media (max-width: 768px) {
    h1 { font-size: 2rem; }
    .effects-section h2 { font-size: 1.5rem; }
    .effect-item h3 { font-size: 1.4rem; }
    .advanced-effects h3 { font-size: 2rem; }
}`,
        js: `// Interactive Text Effects Demo
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to all effect items
    const effectItems = document.querySelectorAll('.effect-item');
    
    effectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click to copy CSS functionality
    const effectTitles = document.querySelectorAll('.effect-item h3');
    
    effectTitles.forEach(title => {
        title.addEventListener('click', function() {
            const effectName = this.className;
            const cssRule = getCSSRule(effectName);
            
            if (cssRule) {
                navigator.clipboard.writeText(cssRule).then(() => {
                    showCopyNotification(this);
                });
            }
        });
    });
    
    function getCSSRule(className) {
        const rules = {
            'drop-shadow': 'text-shadow: 3px 3px 6px rgba(0,0,0,0.7);',
            'glow-effect': 'text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; color: #00ff00;',
            'gradient-linear': 'background: linear-gradient(45deg, #ff6b6b, #4ecdc4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
            'rotate-text': 'transform: rotate(15deg);',
            'bounce': 'animation: bounce 2s infinite;'
        };
        
        return rules[className] || null;
    }
    
    function showCopyNotification(element) {
        const notification = document.createElement('div');
        notification.textContent = 'CSS Copied!';
        notification.style.cssText = \`
            position: absolute;
            background: #4caf50;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        \`;
        
        document.body.appendChild(notification);
        
        const rect = element.getBoundingClientRect();
        notification.style.left = rect.left + 'px';
        notification.style.top = (rect.top - 30) + 'px';
        
        setTimeout(() => notification.style.opacity = '1', 10);
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 2000);
    }
    
    // Performance monitoring
    console.log('Text Effects Demo loaded successfully!');
    console.log('Click on any effect title to copy its CSS code.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Sparkles className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Text Effects</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Create stunning visual text effects with shadows, gradients, animations, and advanced CSS techniques.
                </p>
            </div>

            {/* Text Shadow Effects */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-500" />
                        Text Shadow Effects
                    </CardTitle>
                    <CardDescription>
                        Add depth and visual interest to your text with various shadow techniques.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {textShadowEffects.map((effect, index) => (
                            <div key={effect.name} className="bg-muted/30 p-4 rounded-lg border">
                                <h3 className="font-bold text-lg mb-2">{effect.name}</h3>
                                <div 
                                    className="mb-3 p-4 bg-white dark:bg-gray-800 rounded border text-center text-2xl font-bold"
                                    style={effect.style}
                                >
                                    {effect.example}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{effect.desc}</p>
                                <code className="text-xs bg-background p-2 rounded block">
                                    {effect.css}
                                </code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Gradient Text Effects */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Rainbow className="w-5 h-5" />
                        Gradient Text Effects
                    </CardTitle>
                    <CardDescription>
                        Create colorful gradient text using CSS background-clip and linear gradients.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {gradientEffects.map((effect, index) => (
                            <div key={effect.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h3 className="font-bold text-lg mb-2">{effect.name}</h3>
                                <div 
                                    className="mb-3 p-4 rounded border text-center text-2xl font-bold"
                                    style={{
                                        background: effect.name === "Linear Gradient" ? "linear-gradient(45deg, #ff6b6b, #4ecdc4)" :
                                                   effect.name === "Rainbow Gradient" ? "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)" :
                                                   effect.name === "Metallic Gold" ? "linear-gradient(45deg, #f9d71c, #daa520, #b8860b)" :
                                                   "linear-gradient(to bottom, #eee 0%, #999 50%, #777 51%, #555 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    {effect.example}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{effect.desc}</p>
                                <code className="text-xs bg-muted p-2 rounded block overflow-x-auto">
                                    {effect.css}
                                </code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Text Transform Effects */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Wand2 className="w-5 h-5" />
                        Text Transform Effects
                    </CardTitle>
                    <CardDescription>
                        Apply 2D and 3D transformations to create dynamic text layouts and effects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {transformEffects.map((effect, index) => (
                            <div key={effect.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h3 className="font-bold text-lg mb-2">{effect.name}</h3>
                                <div 
                                    className="mb-3 p-4 rounded border text-center text-2xl font-bold text-blue-600"
                                    style={effect.style}
                                >
                                    {effect.example}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{effect.desc}</p>
                                <code className="text-xs bg-muted p-2 rounded block">
                                    {effect.css}
                                </code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Animation Effects */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Zap className="w-5 h-5" />
                        Animation Effects
                    </CardTitle>
                    <CardDescription>
                        Bring your text to life with CSS animations and keyframe effects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {animationEffects.map((effect, index) => (
                            <div key={effect.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h3 className="font-bold text-lg mb-2">{effect.name}</h3>
                                <div className="mb-3 p-4 rounded border text-center text-xl font-bold text-green-600">
                                    <div 
                                        className={
                                            effect.name === "Typewriter" ? "animate-pulse" :
                                            effect.name === "Fade In" ? "animate-pulse" :
                                            effect.name === "Bounce" ? "animate-bounce" :
                                            "animate-pulse"
                                        }
                                    >
                                        {effect.example}
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{effect.desc}</p>
                                <Badge variant="outline" className="text-xs">
                                    CSS Animation
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Gem className="w-5 h-5" />
                        Advanced Text Techniques
                    </CardTitle>
                    <CardDescription>
                        Professional-level text effects combining multiple CSS properties for stunning results.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                Neon Sign Effect
                            </h4>
                            <div className="bg-black p-4 rounded-lg text-center">
                                <div 
                                    className="text-2xl font-bold"
                                    style={{
                                        color: '#fff',
                                        textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 40px #ff00ff'
                                    }}
                                >
                                    NEON SIGN
                                </div>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">
                                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
                            </code>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Flame className="w-4 h-4 text-orange-500" />
                                Fire Text Effect
                            </h4>
                            <div className="bg-black p-4 rounded-lg text-center">
                                <div 
                                    className="text-2xl font-bold"
                                    style={{
                                        background: 'linear-gradient(45deg, #ff4500, #ff8c00, #ffd700)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textShadow: '0 0 20px rgba(255, 69, 0, 0.8)'
                                    }}
                                >
                                    🔥 FIRE TEXT 🔥
                                </div>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">
                                background: linear-gradient(45deg, #ff4500, #ff8c00, #ffd700); -webkit-background-clip: text;
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Target className="w-5 h-5" />
                        Text Effects Best Practices
                    </CardTitle>
                    <CardDescription>
                        Guidelines for creating effective and accessible text effects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                ✅ Do's
                            </h4>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                <li>• Use effects sparingly for emphasis</li>
                                <li>• Ensure text remains readable</li>
                                <li>• Test on different devices</li>
                                <li>• Consider accessibility needs</li>
                                <li>• Use fallback fonts</li>
                                <li>• Optimize for performance</li>
                            </ul>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Don'ts
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                                <li>• Overuse flashy animations</li>
                                <li>• Sacrifice readability for style</li>
                                <li>• Use effects on body text</li>
                                <li>• Ignore browser compatibility</li>
                                <li>• Create seizure-inducing effects</li>
                                <li>• Forget mobile optimization</li>
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
                        Interactive Text Effects Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive text effects including shadows, gradients, transforms, animations, and advanced combinations with live examples and interactive features.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Text Effects Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Text Shadows
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Rainbow className="w-3 h-3" />
                            Gradients
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Wand2 className="w-3 h-3" />
                            Transforms
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Animations
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Gem className="w-3 h-3" />
                            Advanced Effects
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
