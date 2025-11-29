
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Palette, 
    Play, 
    Info, 
    Eye, 
    Lightbulb, 
    Target, 
    Zap, 
    CheckCircle, 
    AlertTriangle,
    Layers,
    Brush,
    Contrast,
    Sparkles,
    Hash,
    Percent,
    Circle,
    Square,
    Paintbrush
} from 'lucide-react';
import React from 'react';

interface CssColorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssColors({ onOpenWebPlayground }: CssColorsProps) {

    // Color format examples with detailed explanations
    const colorFormats = [
        { 
            name: "Named Colors",
            syntax: "color: blue;",
            desc: "Simple, human-readable names. 140+ standard colors like red, blue, crimson, steelblue.",
            example: "dodgerblue",
            value: "dodgerblue",
            pros: "Easy to remember, readable",
            cons: "Limited options, not precise"
        },
        { 
            name: "Hexadecimal (HEX)",
            syntax: "#RRGGBB",
            desc: "Six-digit code: RR (red), GG (green), BB (blue). Each pair: 00-FF (0-255).",
            example: "#1E90FF",
            value: "#1E90FF",
            pros: "Compact, widely supported",
            cons: "Hard to read, not intuitive"
        },
        { 
            name: "RGB",
            syntax: "rgb(R, G, B)",
            desc: "Red, Green, Blue values from 0-255. More intuitive than hex.",
            example: "rgb(30, 144, 255)",
            value: "rgb(30, 144, 255)",
            pros: "Intuitive numbers, easy to adjust",
            cons: "Longer syntax"
        },
        { 
            name: "RGBA",
            syntax: "rgba(R, G, B, A)",
            desc: "RGB + Alpha (transparency). Alpha: 0.0 (transparent) to 1.0 (opaque).",
            example: "rgba(30, 144, 255, 0.7)",
            value: "rgba(30, 144, 255, 0.7)",
            pros: "Built-in transparency",
            cons: "Longer syntax"
        },
        { 
            name: "HSL",
            syntax: "hsl(H, S%, L%)",
            desc: "Hue (0-360°), Saturation (0-100%), Lightness (0-100%). Most intuitive for designers.",
            example: "hsl(209, 100%, 56%)",
            value: "hsl(209, 100%, 56%)",
            pros: "Designer-friendly, easy color variations",
            cons: "Less familiar to developers"
        },
        { 
            name: "HSLA",
            syntax: "hsla(H, S%, L%, A)",
            desc: "HSL + Alpha channel for transparency control.",
            example: "hsla(209, 100%, 56%, 0.8)",
            value: "hsla(209, 100%, 56%, 0.8)",
            pros: "Best of HSL + transparency",
            cons: "Longest syntax"
        }
    ];

    // Color properties examples
    const colorProperties = [
        {
            property: "color",
            desc: "Sets text color",
            example: "color: #333;",
            usage: "Text content"
        },
        {
            property: "background-color", 
            desc: "Sets background color",
            example: "background-color: lightblue;",
            usage: "Element backgrounds"
        },
        {
            property: "border-color",
            desc: "Sets border color", 
            example: "border-color: red;",
            usage: "Element borders"
        },
        {
            property: "outline-color",
            desc: "Sets outline color",
            example: "outline-color: orange;",
            usage: "Focus indicators"
        }
    ];

    // Comprehensive playground example
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Colors & Backgrounds Complete Guide</title>
</head>
<body>
    <div class="container">
        <h1>CSS Colors & Backgrounds: Complete Guide</h1>
        
        <!-- Color Format Examples -->
        <section class="color-formats">
            <h2>🎨 Color Formats</h2>
            <div class="format-grid">
                <div class="color-box named">Named: steelblue</div>
                <div class="color-box hex">HEX: #4682B4</div>
                <div class="color-box rgb">RGB: rgb(70, 130, 180)</div>
                <div class="color-box rgba">RGBA: rgba(70, 130, 180, 0.7)</div>
                <div class="color-box hsl">HSL: hsl(207, 44%, 49%)</div>
                <div class="color-box hsla">HSLA: hsla(207, 44%, 49%, 0.8)</div>
            </div>
        </section>

        <!-- Color Properties -->
        <section class="color-properties">
            <h2>🖌️ Color Properties</h2>
            <div class="property-examples">
                <div class="text-color">Text Color (color)</div>
                <div class="bg-color">Background Color</div>
                <div class="border-color">Border Color</div>
                <div class="outline-color" tabindex="0">Outline Color (focus me)</div>
            </div>
        </section>

        <!-- HSL Color Wheel Demonstration -->
        <section class="hsl-demo">
            <h2>🌈 HSL Color Wheel</h2>
            <div class="color-wheel">
                <div class="hue-0">0°</div>
                <div class="hue-60">60°</div>
                <div class="hue-120">120°</div>
                <div class="hue-180">180°</div>
                <div class="hue-240">240°</div>
                <div class="hue-300">300°</div>
            </div>
        </section>

        <!-- Transparency Examples -->
        <section class="transparency">
            <h2>👻 Transparency Effects</h2>
            <div class="transparency-demo">
                <div class="overlay-bg">
                    <div class="transparent-box opacity">opacity: 0.5</div>
                    <div class="transparent-box rgba-alpha">rgba alpha: 0.5</div>
                    <div class="transparent-box hsla-alpha">hsla alpha: 0.5</div>
                </div>
            </div>
        </section>

        <!-- Accessibility Examples -->
        <section class="accessibility">
            <h2>♿ Accessibility & Contrast</h2>
            <div class="contrast-examples">
                <div class="good-contrast">Good Contrast ✓</div>
                <div class="poor-contrast">Poor Contrast ✗</div>
                <div class="aa-compliant">AA Compliant ✓</div>
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

h2 {
    color: #34495e;
    margin: 2rem 0 1rem 0;
    font-size: 1.5rem;
    border-left: 4px solid #3498db;
    padding-left: 1rem;
}

section {
    background: white;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Color Format Examples */
.format-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.color-box {
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    transition: transform 0.2s;
}

.color-box:hover {
    transform: translateY(-2px);
}

.named { background-color: steelblue; }
.hex { background-color: #4682B4; }
.rgb { background-color: rgb(70, 130, 180); }
.rgba { background-color: rgba(70, 130, 180, 0.7); }
.hsl { background-color: hsl(207, 44%, 49%); }
.hsla { background-color: hsla(207, 44%, 49%, 0.8); }

/* Color Properties */
.property-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.text-color {
    color: #e74c3c;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
}

.bg-color {
    background-color: #2ecc71;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}

.border-color {
    border: 4px solid #f39c12;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    background: #fef9e7;
    font-weight: bold;
}

.outline-color {
    outline: 3px solid #9b59b6;
    outline-offset: 2px;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    background: #f4f1f8;
    cursor: pointer;
    font-weight: bold;
}

/* HSL Color Wheel */
.color-wheel {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    margin-top: 1rem;
}

.color-wheel > div {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.hue-0 { background-color: hsl(0, 70%, 50%); }
.hue-60 { background-color: hsl(60, 70%, 50%); }
.hue-120 { background-color: hsl(120, 70%, 50%); }
.hue-180 { background-color: hsl(180, 70%, 50%); }
.hue-240 { background-color: hsl(240, 70%, 50%); }
.hue-300 { background-color: hsl(300, 70%, 50%); }

/* Transparency Demo */
.transparency-demo {
    position: relative;
}

.overlay-bg {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    padding: 2rem;
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.transparent-box {
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    color: #333;
}

.opacity {
    background-color: white;
    opacity: 0.5;
}

.rgba-alpha {
    background-color: rgba(255, 255, 255, 0.5);
}

.hsla-alpha {
    background-color: hsla(0, 0%, 100%, 0.5);
}

/* Accessibility Examples */
.contrast-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.good-contrast {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
}

.poor-contrast {
    background-color: #ecf0f1;
    color: #bdc3c7;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
}

.aa-compliant {
    background-color: #27ae60;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .format-grid,
    .property-examples,
    .contrast-examples {
        grid-template-columns: 1fr;
    }
    
    .color-wheel {
        grid-template-columns: repeat(3, 1fr);
    }
}`,
        js: `// Interactive color demonstrations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to color boxes
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Color wheel rotation animation
    const colorWheelItems = document.querySelectorAll('.color-wheel > div');
    colorWheelItems.forEach((item, index) => {
        item.style.animationDelay = \`\${index * 0.1}s\`;
        item.classList.add('fade-in');
    });
    
    console.log('🎨 CSS Colors demo loaded successfully!');
    console.log('💡 Tip: Use HSL for easier color manipulation');
    console.log('♿ Remember: Always check color contrast for accessibility');
});

// Add CSS animation class
const style = document.createElement('style');
style.textContent = \`
    .fade-in {
        animation: fadeIn 0.5s ease-in-out forwards;
        opacity: 0;
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
\`;
document.head.appendChild(style);`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Palette className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Colors & Backgrounds</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master color and background styling for text, elements, borders, and layouts with comprehensive examples and best practices.
                </p>
            </div>

            {/* Color Formats Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Hash className="w-5 h-5 text-blue-500" />
                        Color Formats Comparison
                    </CardTitle>
                    <CardDescription>
                        Understanding different ways to define colors in CSS - each with unique advantages.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {colorFormats.map((format, index) => (
                            <div key={format.name} className="bg-muted/50 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-3">
                                    <div 
                                        className="w-6 h-6 rounded border-2 border-white shadow-sm"
                                        style={{ backgroundColor: format.value }}
                                    />
                                    <h3 className="font-bold text-sm">{format.name}</h3>
                                </div>
                                <code className="text-xs bg-background p-2 rounded block mb-2 font-mono">
                                    {format.syntax}
                                </code>
                                <p className="text-xs text-muted-foreground mb-3">{format.desc}</p>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3 text-green-500" />
                                        <span className="text-xs text-green-700 dark:text-green-400">{format.pros}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <AlertTriangle className="w-3 h-3 text-orange-500" />
                                        <span className="text-xs text-orange-700 dark:text-orange-400">{format.cons}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Color & Background Properties */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brush className="w-5 h-5 text-purple-500" />
                        Color & Background Properties
                    </CardTitle>
                    <CardDescription>
                        Essential CSS properties for styling text colors, backgrounds, borders, and visual elements.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {colorProperties.map((prop, index) => (
                            <div key={prop.property} className="bg-muted/30 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-2">
                                    <Paintbrush className="w-4 h-4 text-blue-500" />
                                    <code className="font-mono font-bold text-sm">{prop.property}</code>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{prop.desc}</p>
                                <code className="text-xs bg-background p-2 rounded block mb-2">
                                    {prop.example}
                                </code>
                                <Badge variant="secondary" className="text-xs">
                                    {prop.usage}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* HSL Color Theory */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Circle className="w-5 h-5" />
                        HSL: The Designer's Choice
                    </CardTitle>
                    <CardDescription>
                        HSL (Hue, Saturation, Lightness) is often preferred for its intuitive color manipulation.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
                            <h4 className="font-semibold text-sm">Hue (0-360°)</h4>
                            <p className="text-xs text-muted-foreground">Color wheel position</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-gray-400 to-blue-500"></div>
                            <h4 className="font-semibold text-sm">Saturation (0-100%)</h4>
                            <p className="text-xs text-muted-foreground">Color intensity</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-black via-blue-500 to-white"></div>
                            <h4 className="font-semibold text-sm">Lightness (0-100%)</h4>
                            <p className="text-xs text-muted-foreground">Brightness level</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                            HSL Advantages
                        </h4>
                        <ul className="text-sm space-y-1">
                            <li>• Easy to create color variations (lighter/darker)</li>
                            <li>• Intuitive for designers familiar with color theory</li>
                            <li>• Perfect for creating color schemes and palettes</li>
                            <li>• Simple to adjust saturation for muted colors</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Transparency Comparison */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-teal-500" />
                        Transparency: opacity vs RGBA/HSLA
                    </CardTitle>
                    <CardDescription>
                        Understanding the difference between opacity and alpha channels.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Square className="w-4 h-4 text-blue-500" />
                                opacity Property
                            </h4>
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
                                <div className="bg-white p-3 rounded opacity-50">
                                    <p className="text-black font-semibold">Entire element is transparent</p>
                                    <p className="text-black text-sm">Including text and children</p>
                                </div>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">
                                opacity: 0.5; /* 0.0 to 1.0 */
                            </code>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Circle className="w-4 h-4 text-green-500" />
                                RGBA/HSLA Alpha
                            </h4>
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
                                <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                    <p className="text-black font-semibold">Only background is transparent</p>
                                    <p className="text-black text-sm">Text remains fully opaque</p>
                                </div>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">
                                background: rgba(255, 255, 255, 0.5);
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Accessibility */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Eye className="w-5 h-5" />
                        Color Accessibility
                    </CardTitle>
                    <CardDescription>
                        Ensuring your colors are accessible to all users, including those with visual impairments.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="bg-gray-900 text-white p-3 rounded-lg mb-2">
                                <p className="font-semibold">Great Contrast</p>
                                <p className="text-sm">4.5:1 ratio</p>
                            </div>
                            <Badge variant="default" className="bg-green-500">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                WCAG AA
                            </Badge>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-600 text-white p-3 rounded-lg mb-2">
                                <p className="font-semibold">Good Contrast</p>
                                <p className="text-sm">3:1 ratio</p>
                            </div>
                            <Badge variant="secondary">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Large Text OK
                            </Badge>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-300 text-gray-400 p-3 rounded-lg mb-2">
                                <p className="font-semibold">Poor Contrast</p>
                                <p className="text-sm">2:1 ratio</p>
                            </div>
                            <Badge variant="destructive">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Fails WCAG
                            </Badge>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-500" />
                            Accessibility Guidelines
                        </h4>
                        <ul className="text-sm space-y-1">
                            <li>• <strong>Normal text:</strong> 4.5:1 contrast ratio minimum</li>
                            <li>• <strong>Large text:</strong> 3:1 contrast ratio minimum</li>
                            <li>• <strong>Don't rely on color alone</strong> to convey information</li>
                            <li>• <strong>Test with color blindness simulators</strong></li>
                            <li>• <strong>Use tools:</strong> WebAIM Contrast Checker, Colour Contrast Analyser</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Sparkles className="w-5 h-5" />
                        Advanced Color Techniques
                    </CardTitle>
                    <CardDescription>
                        Professional tips and modern CSS color features.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">CSS Custom Properties</h4>
                            <code className="text-xs bg-muted p-2 rounded block mb-2">
                                :root {'{'}
                                <br />
                                &nbsp;&nbsp;--primary: #3498db;
                                <br />
                                &nbsp;&nbsp;--primary-light: #5dade2;
                                <br />
                                {'}'}
                                <br />
                                .button {'{ color: var(--primary); }'}
                            </code>
                            <p className="text-xs text-muted-foreground">Reusable color variables</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">currentColor Keyword</h4>
                            <code className="text-xs bg-muted p-2 rounded block mb-2">
                                .icon {'{'}
                                <br />
                                &nbsp;&nbsp;color: #e74c3c;
                                <br />
                                &nbsp;&nbsp;border: 2px solid currentColor;
                                <br />
                                {'}'}
                            </code>
                            <p className="text-xs text-muted-foreground">Inherits the current text color</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Color Functions</h4>
                            <code className="text-xs bg-muted p-2 rounded block mb-2">
                                /* Future CSS */
                                <br />
                                color: color-mix(in srgb, red 50%, blue);
                                <br />
                                color: oklch(70% 0.15 180);
                            </code>
                            <p className="text-xs text-muted-foreground">Modern color manipulation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">System Colors</h4>
                            <code className="text-xs bg-muted p-2 rounded block mb-2">
                                color: CanvasText;
                                <br />
                                background: Canvas;
                                <br />
                                border-color: ButtonBorder;
                            </code>
                            <p className="text-xs text-muted-foreground">Respect user preferences</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Colors & Backgrounds Playground
                    </CardTitle>
                    <CardDescription>
                        Explore all color formats, background techniques, and styling properties with live examples including HSL color wheel, transparency effects, gradient backgrounds, and accessibility demonstrations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Colors & Backgrounds Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Interactive Examples
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Contrast className="w-3 h-3" />
                            Accessibility Tests
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Percent className="w-3 h-3" />
                            Live Color Wheel
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
