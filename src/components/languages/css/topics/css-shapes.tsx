'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
    Sparkles, Shapes, Circle, Play, CheckCircle, 
    AlertTriangle, MousePointer, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssShapesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssShapes({ onOpenWebPlayground }: CssShapesProps) {

    const playgroundCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Shapes - Text Wrapping</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
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
        max-width: 900px;
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
        margin-bottom: 2rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    h2 {
        font-size: 1.5rem;
        margin: 2rem 0 1rem;
        color: #1e293b;
    }

    @media (prefers-color-scheme: dark) {
        h2 { color: #f1f5f9; }
    }

    .demo {
        margin: 2rem 0;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 12px;
        line-height: 1.8;
        overflow: hidden;
    }

    .demo::after {
        content: "";
        display: table;
        clear: both;
    }

    @media (prefers-color-scheme: dark) {
        .demo {
            background: rgba(55, 65, 81, 0.5);
        }
    }

    .float-shape {
        width: 200px;
        height: 200px;
        float: left;
        margin: 0 2rem 1rem 0;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        shape-outside: circle(50%);
        clip-path: circle(50%);
    }

    .float-polygon {
        width: 200px;
        height: 200px;
        float: right;
        margin: 0 0 1rem 2rem;
        background: linear-gradient(135deg, #f97316, #ea580c);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        shape-outside: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    .float-ellipse {
        width: 250px;
        height: 180px;
        float: left;
        margin: 0 2rem 1rem 0;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        shape-outside: ellipse(40% 50%);
        clip-path: ellipse(40% 50%);
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

    p {
        margin-bottom: 1rem;
        color: #475569;
    }

    p:last-child {
        margin-bottom: 0;
    }

    @media (prefers-color-scheme: dark) {
        p { color: #cbd5e1; }
    }

    @media (max-width: 768px) {
        .float-shape, .float-polygon, .float-ellipse {
            width: 120px;
            height: 120px;
            font-size: 2rem;
            margin: 0 1rem 1rem 0;
        }
        h1 { font-size: 2rem; }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔷 CSS Shapes</h1>
        <div class="instruction">
            📖 Notice how text wraps around the shapes!
        </div>

        <section>
            <h2>🔵 Circle Shape</h2>
            <div class="demo">
                <div class="float-shape">⭕</div>
                <p>
                    CSS Shapes allow you to wrap text around custom shapes, not just rectangles. 
                    The shape-outside property defines the shape around which inline content flows.
                    This creates beautiful, magazine-style layouts that were previously impossible with CSS alone.
                </p>
                <p>
                    In this example, we're using shape-outside: circle(50%) to create a circular 
                    shape. The text flows naturally around the circle, creating an organic and 
                    visually interesting layout. This is perfect for profile images, decorative 
                    elements, or any content where you want text to wrap in a circular pattern.
                </p>
                <p>
                    The combination of clip-path and shape-outside ensures both the visual appearance 
                    and the text flow match perfectly. This technique works great for responsive 
                    designs and adapts beautifully to different screen sizes.
                </p>
            </div>
        </section>

        <section>
            <h2>💎 Diamond Shape</h2>
            <div class="demo">
                <div class="float-polygon">💎</div>
                <p>
                    Polygon shapes offer even more creative possibilities. Using shape-outside with 
                    polygon() allows you to create diamond shapes, triangles, hexagons, and any 
                    custom geometric form you can imagine. The text intelligently wraps around 
                    these complex shapes.
                </p>
                <p>
                    This diamond shape is created using polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%).
                    Each coordinate pair represents a point in the shape, and the text flows around 
                    these defined boundaries. This opens up incredible design possibilities for 
                    editorial layouts and creative web designs.
                </p>
                <p>
                    Custom shapes can transform ordinary text into engaging visual experiences. 
                    Whether you're creating a magazine layout, a portfolio, or an artistic website, 
                    CSS Shapes provides the tools to break free from rectangular constraints.
                </p>
            </div>
        </section>

        <section>
            <h2>⬭ Ellipse Shape</h2>
            <div class="demo">
                <div class="float-ellipse">🥚</div>
                <p>
                    Elliptical shapes are perfect when you need something between a circle and a 
                    rectangle. The ellipse() function in shape-outside accepts two radius values - 
                    one for horizontal and one for vertical - giving you precise control over the 
                    shape's proportions.
                </p>
                <p>
                    This ellipse uses shape-outside: ellipse(40% 50%), creating an oval that's 
                    wider than it is tall. Text wraps smoothly around its curved edges, creating 
                    a softer, more elegant flow compared to rectangular floats. This is ideal 
                    for portrait images or decorative elements.
                </p>
                <p>
                    CSS Shapes work seamlessly with responsive design. As your layout adapts to 
                    different screen sizes, the text reflows naturally around the shapes, maintaining 
                    the visual harmony of your design across all devices.
                </p>
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
                icon={Shapes}
                category="CSS · Visual Effects"
                title="CSS Shapes"
                description="Wrap text around custom shapes with shape-outside - create magazine-style layouts with circular, polygonal, and custom path shapes."
                colorTheme="blue"
            />

            {/* What are CSS Shapes? */}
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/80 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-pink-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-indigo-700 dark:text-indigo-300">
                        <div className="relative">
                            <Shapes className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Shapes?
                    </CardTitle>
                    <CardDescription className="text-lg text-indigo-600 dark:text-indigo-400">
                        🔷 Wrap text around circles, polygons, and custom paths - magazine-style layouts made easy!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                        CSS Shapes use the <code className="text-sm bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">shape-outside</code> property to define <strong className="text-foreground">non-rectangular wrapping areas</strong> for floated elements. This allows inline content to flow around circles, ellipses, polygons, and even images!
                    </p>

                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
                        <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                            <Circle className="w-5 h-5 animate-pulse" />
                            🎯 How CSS Shapes Work
                        </h4>
                        
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">1. Float Element</h5>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                    Element must be <code>float: left</code> or <code>float: right</code>
                                </p>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">2. Define Shape</h5>
                                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                                    Use <code>shape-outside</code> with circle(), ellipse(), or polygon()
                                </p>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">3. Match Visual</h5>
                                <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                                    Add matching <code>clip-path</code> to make element visually match the shape
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Live Text Wrap Demo */}
                    <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border overflow-hidden">
                        <div 
                            className="float-left w-24 h-24 mr-4 mb-2 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold"
                            style={{ 
                                shapeOutside: 'circle(50%)',
                                clipPath: 'circle(50%)'
                            }}
                        >
                            ⭕
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            This is a live example of CSS Shapes in action! Notice how this text wraps around 
                            the circular shape on the left. The <code className="text-xs bg-gray-200 dark:bg-gray-700 px-1 rounded">shape-outside: circle(50%)</code> property 
                            creates an invisible boundary that inline content respects. Combined with <code className="text-xs bg-gray-200 dark:bg-gray-700 px-1 rounded">clip-path</code>, 
                            we get both the visual appearance and the text wrapping behavior we want!
                        </p>
                        <div className="clear-both"></div>
                    </div>
                </CardContent>
            </Card>

            {/* Shape Functions */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="w-5 h-5" />
                        Shape Functions
                    </CardTitle>
                    <CardDescription>
                        Available shape-outside functions for text wrapping.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border space-y-4">
                        <div>
                            <h5 className="font-semibold mb-2 flex items-center gap-2">
                                <Circle className="w-4 h-4" />
                                circle()
                            </h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                shape-outside: circle(50% at center);
                            </code>
                            <p className="text-sm text-muted-foreground mt-2">Perfect for profile images and round decorative elements</p>
                        </div>
                        
                        <div>
                            <h5 className="font-semibold mb-2">ellipse()</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                shape-outside: ellipse(40% 50% at center);
                            </code>
                            <p className="text-sm text-muted-foreground mt-2">Great for oval shapes and portrait orientations</p>
                        </div>

                        <div>
                            <h5 className="font-semibold mb-2">polygon()</h5>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                shape-outside: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                            </code>
                            <p className="text-sm text-muted-foreground mt-2">Custom shapes - triangles, diamonds, hexagons, and more</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Complete Playground */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-indigo-500/10 rounded-lg">
                            <Play className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        CSS Shapes Playground
                    </CardTitle>
                    <CardDescription>
                        See text wrapping around circles, diamonds, and ellipses!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={playgroundCode}
                        title="CSS Shapes Playground"
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
                        <li><strong>Combine with clip-path</strong> - Match visual shape to wrapping shape</li>
                        <li><strong>Use shape-margin</strong> - Add space between shape and text</li>
                        <li><strong>Float required</strong> - shape-outside only works on floated elements</li>
                        <li><strong>Test responsive</strong> - Shapes should adapt to different screen sizes</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* Browser Support */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    CSS Shapes (shape-outside) have excellent support in all modern browsers including Chrome, Firefox, Safari, and Edge. Ready for production use!
                </AlertDescription>
            </Alert>
        </div>
    );
}
