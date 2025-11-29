'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Calculator, Target, Code, Zap, Settings, 
    CheckCircle, AlertTriangle, Palette, Eye, MousePointer, 
    Layers, RefreshCw, Sun, Moon, Paintbrush, Sliders,
    Maximize, Move, RotateCcw, Grid3X3, Hash
} from 'lucide-react';

interface CssFunctionsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssFunctions({ onOpenWebPlayground }: CssFunctionsProps) {
    const [selectedCategory, setSelectedCategory] = useState('math');
    const [selectedFunction, setSelectedFunction] = useState('calc');

    // Function Categories
    const functionCategories = [
        {
            name: 'math',
            title: 'Math Functions',
            icon: Calculator,
            desc: 'Mathematical calculations and operations',
            functions: ['calc()', 'min()', 'max()', 'clamp()']
        },
        {
            name: 'color',
            title: 'Color Functions',
            icon: Palette,
            desc: 'Color manipulation and generation',
            functions: ['rgb()', 'hsl()', 'rgba()', 'hsla()']
        },
        {
            name: 'transform',
            title: 'Transform Functions',
            icon: Move,
            desc: 'Element transformation operations',
            functions: ['translate()', 'rotate()', 'scale()', 'skew()']
        },
        {
            name: 'filter',
            title: 'Filter Functions',
            icon: Eye,
            desc: 'Visual effects and filters',
            functions: ['blur()', 'brightness()', 'contrast()', 'saturate()']
        }
    ];

    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Functions Complete Guide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>🧮 CSS Functions Showcase</h1>
        <p>Explore the power of CSS functions with interactive examples!</p>
        
        <section class="demo-section">
            <h2>🧮 Math Functions</h2>
            <div class="function-grid">
                <div class="function-demo calc-demo">
                    <h3>calc()</h3>
                    <div class="calc-box">Dynamic Width</div>
                    <p>width: calc(100% - 40px)</p>
                </div>
                
                <div class="function-demo min-demo">
                    <h3>min()</h3>
                    <div class="min-box">Responsive</div>
                    <p>width: min(300px, 100%)</p>
                </div>
                
                <div class="function-demo max-demo">
                    <h3>max()</h3>
                    <div class="max-box">Minimum Size</div>
                    <p>width: max(200px, 50%)</p>
                </div>
                
                <div class="function-demo clamp-demo">
                    <h3>clamp()</h3>
                    <div class="clamp-box">Clamped</div>
                    <p>width: clamp(200px, 50%, 400px)</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🎨 Color Functions</h2>
            <div class="function-grid">
                <div class="function-demo">
                    <h3>rgb()</h3>
                    <div class="color-box rgb-box"></div>
                    <p>rgb(59, 130, 246)</p>
                </div>
                
                <div class="function-demo">
                    <h3>hsl()</h3>
                    <div class="color-box hsl-box"></div>
                    <p>hsl(220, 91%, 60%)</p>
                </div>
                
                <div class="function-demo">
                    <h3>rgba()</h3>
                    <div class="color-box rgba-box"></div>
                    <p>rgba(16, 185, 129, 0.7)</p>
                </div>
                
                <div class="function-demo">
                    <h3>hsla()</h3>
                    <div class="color-box hsla-box"></div>
                    <p>hsla(45, 93%, 47%, 0.8)</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🔄 Transform Functions</h2>
            <div class="function-grid">
                <div class="function-demo">
                    <h3>translate()</h3>
                    <div class="transform-box translate-box">Move</div>
                </div>
                
                <div class="function-demo">
                    <h3>rotate()</h3>
                    <div class="transform-box rotate-box">Spin</div>
                </div>
                
                <div class="function-demo">
                    <h3>scale()</h3>
                    <div class="transform-box scale-box">Size</div>
                </div>
                
                <div class="function-demo">
                    <h3>skew()</h3>
                    <div class="transform-box skew-box">Slant</div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>🎭 Filter Functions</h2>
            <div class="function-grid">
                <div class="function-demo">
                    <h3>blur()</h3>
                    <div class="filter-box blur-box">Blur Effect</div>
                </div>
                
                <div class="function-demo">
                    <h3>brightness()</h3>
                    <div class="filter-box brightness-box">Bright</div>
                </div>
                
                <div class="function-demo">
                    <h3>contrast()</h3>
                    <div class="filter-box contrast-box">Contrast</div>
                </div>
                
                <div class="function-demo">
                    <h3>saturate()</h3>
                    <div class="filter-box saturate-box">Vivid</div>
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
h3 { font-size: 1rem; margin-bottom: 0.5rem; color: #667eea; }

.demo-section { margin-bottom: 3rem; }

.function-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.function-demo {
    text-align: center;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
    border: 2px solid #e9ecef;
}

/* Math Functions */
.calc-box {
    width: calc(100% - 40px);
    height: 60px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 auto 1rem;
    font-weight: bold;
}

.min-box {
    width: min(300px, 100%);
    height: 60px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 auto 1rem;
    font-weight: bold;
}

.max-box {
    width: max(200px, 50%);
    height: 60px;
    background: linear-gradient(135deg, #4ecdc4, #44a08d);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 auto 1rem;
    font-weight: bold;
}

.clamp-box {
    width: clamp(200px, 50%, 400px);
    height: 60px;
    background: linear-gradient(135deg, #a8edea, #fed6e3);
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 auto 1rem;
    font-weight: bold;
}

/* Color Functions */
.color-box {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 3px solid white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.rgb-box { background: rgb(59, 130, 246); }
.hsl-box { background: hsl(220, 91%, 60%); }
.rgba-box { background: rgba(16, 185, 129, 0.7); }
.hsla-box { background: hsla(45, 93%, 47%, 0.8); }

/* Transform Functions */
.transform-box {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 auto 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.translate-box:hover { transform: translate(10px, -10px); }
.rotate-box:hover { transform: rotate(45deg); }
.scale-box:hover { transform: scale(1.2); }
.skew-box:hover { transform: skew(15deg, 5deg); }

/* Filter Functions */
.filter-box {
    width: 120px;
    height: 80px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 auto 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.3s ease;
}

.blur-box:hover { filter: blur(3px); }
.brightness-box:hover { filter: brightness(1.5); }
.contrast-box:hover { filter: contrast(1.5); }
.saturate-box:hover { filter: saturate(2); }

@media (max-width: 768px) {
    .function-grid { grid-template-columns: repeat(2, 1fr); }
    .calc-box, .min-box, .max-box, .clamp-box { font-size: 0.8rem; }
}`,
        js: `document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Functions Demo loaded!');
    
    // Add click effects for mobile
    const boxes = document.querySelectorAll('.transform-box, .filter-box');
    
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.transform = this.style.transform ? '' : 
                this.classList.contains('translate-box') ? 'translate(10px, -10px)' :
                this.classList.contains('rotate-box') ? 'rotate(45deg)' :
                this.classList.contains('scale-box') ? 'scale(1.2)' :
                this.classList.contains('skew-box') ? 'skew(15deg, 5deg)' : '';
                
            if (this.classList.contains('filter-box')) {
                this.style.filter = this.style.filter ? '' :
                    this.classList.contains('blur-box') ? 'blur(3px)' :
                    this.classList.contains('brightness-box') ? 'brightness(1.5)' :
                    this.classList.contains('contrast-box') ? 'contrast(1.5)' :
                    this.classList.contains('saturate-box') ? 'saturate(2)' : '';
            }
        });
    });
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Calculator className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master CSS functions for calculations, colors, transforms, and visual effects.
                </p>
            </div>

            {/* What are CSS Functions */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Calculator className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Functions?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Supercharge your CSS with dynamic calculations, intelligent responsiveness, and stunning visual effects!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Interactive Demo */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    🎯 Functions in Action
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">Static Value</div>
                                        <div className="w-full h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-mono">
                                            width: 200px
                                        </div>
                                        <div className="text-xs text-red-500 mt-1">❌ Fixed & Rigid</div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-xs text-gray-600 mb-2">CSS Function</div>
                                        <div 
                                            className="h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-xs font-mono text-white transition-all duration-300"
                                            style={{ width: 'calc(100% - 20px)' }}
                                        >
                                            calc(100% - 20px)
                                        </div>
                                        <div className="text-xs text-green-500 mt-1">✅ Dynamic & Smart</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Try it yourself - Resize this window!
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        The function-based width adapts automatically, while the static width stays the same.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Grid3X3 className="w-5 h-5" />
                                    🎨 Function Categories
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Calculator className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Math Magic</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">calc(), min(), max(), clamp()</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Palette className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Color Wizardry</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">rgb(), hsl(), rgba(), hsla()</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Move className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Transform Power</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">translate(), rotate(), scale()</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Eye className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Visual Effects</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">blur(), brightness(), contrast()</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">🧮</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            ✨
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Functions</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Dynamic & Responsive
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Calculated Values
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Future-Proof
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">vs</div>
                                    
                                    <div className="text-4xl mb-2">📏</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Static Values</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Fixed & Rigid
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Hardcoded Numbers
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Maintenance Nightmare
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Functions make your CSS intelligent and adaptive to different screen sizes, user preferences, and content changes!
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
                            <span className="text-gray-400 text-sm ml-2">CSS Functions Demo</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🧮 Math Functions */</div>
                            <div className="text-blue-400">.responsive-width</div>
                            <div className="text-white"> {'{'} <span className="text-green-400">width</span>: <span className="text-yellow-400">calc(100% - 2rem)</span>; {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎨 Color Functions */</div>
                            <div className="text-blue-400">.dynamic-color</div>
                            <div className="text-white"> {'{'} <span className="text-green-400">background</span>: <span className="text-yellow-400">hsl(220, 91%, 60%)</span>; {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🔄 Transform Functions */</div>
                            <div className="text-blue-400">.animated-element</div>
                            <div className="text-white"> {'{'} <span className="text-green-400">transform</span>: <span className="text-yellow-400">translate(50px, -20px)</span>; {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Function Categories */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Code className="w-5 h-5" />
                        Function Categories
                    </CardTitle>
                    <CardDescription>
                        Explore different categories of CSS functions and their use cases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {functionCategories.map((category) => (
                            <div 
                                key={category.name}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedCategory === category.name 
                                        ? 'ring-2 ring-primary ring-offset-2 border-primary' 
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <category.icon className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-sm">{category.title}</h3>
                                </div>
                                <p className="text-xs text-gray-600 mb-3">{category.desc}</p>
                                <div className="space-y-1">
                                    {category.functions.map((func, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                                            {func}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Interactive Examples */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <MousePointer className="w-5 h-5" />
                        Live Function Examples
                    </CardTitle>
                    <CardDescription>
                        Interactive CSS functions demonstrations right here on the page!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {/* Math Functions */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🧮 Math Functions</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold text-xs"
                                        style={{ width: 'calc(100% - 20px)' }}
                                    >
                                        calc()
                                    </div>
                                    <p className="text-xs font-medium">calc(100% - 20px)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold text-xs"
                                        style={{ width: 'min(120px, 100%)' }}
                                    >
                                        min()
                                    </div>
                                    <p className="text-xs font-medium">min(120px, 100%)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold text-xs"
                                        style={{ width: 'max(80px, 50%)' }}
                                    >
                                        max()
                                    </div>
                                    <p className="text-xs font-medium">max(80px, 50%)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold text-xs"
                                        style={{ width: 'clamp(60px, 50%, 100px)' }}
                                    >
                                        clamp()
                                    </div>
                                    <p className="text-xs font-medium">clamp(60px, 50%, 100px)</p>
                                </div>
                            </div>
                        </div>

                        {/* Color Functions */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🎨 Color Functions</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-white shadow-lg"
                                        style={{ backgroundColor: 'rgb(59, 130, 246)' }}
                                    ></div>
                                    <p className="text-xs font-medium">rgb(59, 130, 246)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-white shadow-lg"
                                        style={{ backgroundColor: 'hsl(220, 91%, 60%)' }}
                                    ></div>
                                    <p className="text-xs font-medium">hsl(220, 91%, 60%)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-white shadow-lg"
                                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.7)' }}
                                    ></div>
                                    <p className="text-xs font-medium">rgba(16, 185, 129, 0.7)</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div 
                                        className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-white shadow-lg"
                                        style={{ backgroundColor: 'hsla(45, 93%, 47%, 0.8)' }}
                                    ></div>
                                    <p className="text-xs font-medium">hsla(45, 93%, 47%, 0.8)</p>
                                </div>
                            </div>
                        </div>

                        {/* Transform Functions */}
                        <div>
                            <h4 className="font-semibold mb-4 text-indigo-700 dark:text-indigo-300">🔄 Transform Functions</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded mx-auto mb-2 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2 flex items-center justify-center text-white font-bold text-xs">
                                        T
                                    </div>
                                    <p className="text-xs font-medium">translate()</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded mx-auto mb-2 cursor-pointer transition-transform duration-300 hover:rotate-45 flex items-center justify-center text-white font-bold text-xs">
                                        R
                                    </div>
                                    <p className="text-xs font-medium">rotate()</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded mx-auto mb-2 cursor-pointer transition-transform duration-300 hover:scale-125 flex items-center justify-center text-white font-bold text-xs">
                                        S
                                    </div>
                                    <p className="text-xs font-medium">scale()</p>
                                </div>
                                
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded mx-auto mb-2 cursor-pointer transition-transform duration-300 hover:skew-x-12 flex items-center justify-center text-white font-bold text-xs">
                                        K
                                    </div>
                                    <p className="text-xs font-medium">skew()</p>
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
                        Complete CSS Functions Playground
                    </CardTitle>
                    <CardDescription>
                        Interactive playground with math, color, transform, and filter functions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Interactive Demo
                        </Button>
                        <Badge variant="secondary">🧮 Math Functions</Badge>
                        <Badge variant="secondary">🎨 Color Functions</Badge>
                        <Badge variant="secondary">🔄 Transform Functions</Badge>
                        <Badge variant="secondary">🎭 Filter Functions</Badge>
                        <Badge variant="secondary">📱 Mobile Friendly</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
