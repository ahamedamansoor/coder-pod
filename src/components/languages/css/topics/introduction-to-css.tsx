
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Paintbrush, 
  Play, 
  Link, 
  Palette, 
  FileCode, 
  Layers,
  Zap,
  Eye,
  Smartphone,
  Globe,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
  Wand2
} from 'lucide-react';
import React from 'react';

interface IntroductionToCssProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function IntroductionToCss({ onOpenWebPlayground }: IntroductionToCssProps) {

    // Basic transformation example
    const basicExample = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>My First CSS Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to CSS!</h1>
    <p>This is a paragraph with styling.</p>
    <button>Click me!</button>
</body>
</html>`,
        css: `/* Transform boring HTML into beautiful design */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 40px;
    color: white;
}

h1 {
    text-align: center;
    font-size: 3em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    margin-bottom: 30px;
}

p {
    font-size: 1.2em;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
}

button {
    display: block;
    margin: 0 auto;
    padding: 15px 30px;
    font-size: 1.1em;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

button:hover {
    transform: scale(1.05);
    background: #ff5252;
}`,
        js: ''
    };

    // Advanced example showing CSS power
    const advancedExample = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Advanced CSS Demo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2>CSS Magic</h2>
            </div>
            <div class="card-body">
                <p>CSS can create amazing layouts, animations, and responsive designs!</p>
                <div class="feature-grid">
                    <div class="feature">Responsive</div>
                    <div class="feature">Animated</div>
                    <div class="feature">Beautiful</div>
                </div>
            </div>
        </div>
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
    background: #f0f2f5;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    max-width: 500px;
    width: 100%;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    overflow: hidden;
    transform: translateY(0);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card-header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 25px;
    text-align: center;
}

.card-header h2 {
    font-size: 2em;
    font-weight: 300;
}

.card-body {
    padding: 30px;
}

.card-body p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 25px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
}

.feature {
    background: #f8f9fa;
    padding: 15px;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    color: #495057;
    transition: all 0.3s ease;
}

.feature:hover {
    background: #667eea;
    color: white;
    transform: scale(1.05);
}

@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
    
    .card-header h2 {
        font-size: 1.5em;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
    }
}`,
        js: ''
    };

    const methods = [
        {
            icon: Link,
            name: "External CSS",
            desc: "The best method. You write CSS in a separate `.css` file and link to it from your HTML file's `<head>` section.",
            pros: "Keeps styles separate, easy to maintain, styles multiple pages.",
        },
        {
            icon: Palette,
            name: "Internal CSS",
            desc: "You write CSS inside a `<style>` tag within the HTML file's `<head>` section.",
            pros: "Good for single-page styles, keeps everything in one file.",
        },
        {
            icon: FileCode,
            name: "Inline CSS",
            desc: "You apply styles directly to an HTML element using the `style` attribute.",
            pros: "Useful for quick, specific styling, but quickly becomes unmanageable.",
        }
    ];

    return (
        <div className="space-y-8">
            {/* Page Title */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Paintbrush className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Introduction</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    What is CSS, how it works with HTML, and why it's essential for web development.
                </p>
            </div>

            {/* What is CSS - Visual Analogy */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wand2 className="h-6 w-6 text-purple-600" />
                        What is CSS?
                    </CardTitle>
                    <CardDescription>
                        CSS (Cascading Style Sheets) is the magic that transforms plain HTML into beautiful, interactive web pages
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="flex items-start gap-4">
                            <Lightbulb className="h-8 w-8 text-purple-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                                    Think of Building a House
                                </h3>
                                <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
                                    <strong>HTML</strong> is like the structure and foundation - it defines what content exists (walls, rooms, doors).
                                    <br />
                                    <strong>CSS</strong> is like the interior design - it makes everything beautiful (paint colors, furniture, decorations).
                                    <br />
                                    <strong>JavaScript</strong> is like the electrical system - it makes things interactive (lights, smart home features).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                Without CSS (Plain HTML)
                            </h4>
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded border">
                                <div className="space-y-2 text-sm">
                                    <div className="font-bold text-black">My Website</div>
                                    <div className="text-blue-600 underline">Home</div>
                                    <div className="text-blue-600 underline">About</div>
                                    <div className="text-blue-600 underline">Contact</div>
                                    <div className="text-black">Welcome to my website. This is a paragraph of text.</div>
                                    <div className="border border-gray-400 px-2 py-1 inline-block">Click me</div>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Boring, hard to read, no visual hierarchy, looks like it's from 1995!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                With CSS (Styled)
                            </h4>
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg text-white">
                                <div className="space-y-3 text-sm">
                                    <div className="text-2xl font-bold">My Website</div>
                                    <div className="flex gap-4">
                                        <div className="hover:text-yellow-300 cursor-pointer">Home</div>
                                        <div className="hover:text-yellow-300 cursor-pointer">About</div>
                                        <div className="hover:text-yellow-300 cursor-pointer">Contact</div>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded">
                                        Welcome to my website. This is a paragraph of text with proper spacing and readability.
                                    </div>
                                    <div className="bg-yellow-500 text-black px-4 py-2 rounded-full inline-block font-semibold cursor-pointer hover:bg-yellow-400">
                                        Click me
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Beautiful, professional, engaging, and modern!
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CSS Powers */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-yellow-600" />
                        The Power of CSS
                    </CardTitle>
                    <CardDescription>
                        CSS gives you complete control over how your web pages look and behave
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 text-center">
                            <Palette className="h-8 w-8 text-red-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Visual Design</h4>
                            <p className="text-xs text-red-700 dark:text-red-300">Colors, fonts, spacing, shadows, gradients</p>
                        </div>
                        
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                            <Layers className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Layout Control</h4>
                            <p className="text-xs text-blue-700 dark:text-blue-300">Positioning, flexbox, grid, responsive design</p>
                        </div>
                        
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 text-center">
                            <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Animations</h4>
                            <p className="text-xs text-green-700 dark:text-green-300">Transitions, keyframes, hover effects</p>
                        </div>
                        
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
                            <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Responsive</h4>
                            <p className="text-xs text-purple-700 dark:text-purple-300">Works on all devices and screen sizes</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* How CSS Works */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code className="h-6 w-6 text-blue-600" />
                        How CSS Works
                    </CardTitle>
                    <CardDescription>
                        Understanding the relationship between HTML and CSS
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            <div className="text-center">
                                <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg mb-3">
                                    <FileCode className="h-8 w-8 text-orange-600 mx-auto" />
                                </div>
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">1. HTML Structure</h4>
                                <p className="text-sm text-blue-700 dark:text-blue-300">Defines content and elements</p>
                            </div>
                            
                            <div className="text-center">
                                <ArrowRight className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mb-3">
                                    <Paintbrush className="h-8 w-8 text-blue-600 mx-auto" />
                                </div>
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">2. CSS Styling</h4>
                                <p className="text-sm text-blue-700 dark:text-blue-300">Selects elements and applies styles</p>
                            </div>
                            
                            <div className="text-center">
                                <ArrowRight className="h-6 w-6 text-blue-600 mx-auto mb-4" />
                                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-3">
                                    <Eye className="h-8 w-8 text-green-600 mx-auto" />
                                </div>
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">3. Beautiful Result</h4>
                                <p className="text-sm text-blue-700 dark:text-blue-300">Browser renders styled page</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">CSS Syntax Example:</h4>
                        <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`/* CSS Rule Structure */
selector {
    property: value;
    property: value;
}

/* Real Example */
h1 {
    color: blue;
    font-size: 2em;
    text-align: center;
}`}
                        </pre>
                    </div>
                </CardContent>
            </Card>

            {/* Three Ways to Add CSS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="h-6 w-6 text-green-600" />
                        Three Ways to Add CSS
                    </CardTitle>
                    <CardDescription>
                        There are three methods for applying CSS to an HTML document. Each has its place!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {methods.map((m, index) => (
                            <div key={m.name} className="bg-muted p-4 rounded-lg border relative">
                                <div className="flex items-center gap-2 mb-2">
                                    <m.icon className="w-5 h-5 text-primary"/>
                                    <h3 className="font-bold">{m.name}</h3>
                                    {index === 0 && <Badge className="bg-green-100 text-green-800 text-xs">Recommended</Badge>}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
                                <p className="text-xs font-semibold text-green-600">
                                    ✅ <span className="font-normal text-muted-foreground">{m.pros}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Best Practice Tip
                        </h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            <strong>Always use External CSS</strong> for production websites. It keeps your HTML clean, 
                            makes styles reusable across multiple pages, and is easier to maintain. Use Internal CSS 
                            for single-page prototypes, and Inline CSS only for quick testing or very specific overrides.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Why CSS Matters */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Globe className="h-6 w-6 text-indigo-600" />
                        Why CSS is Essential
                    </CardTitle>
                    <CardDescription>
                        Understanding why CSS is crucial for modern web development
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4" />
                                Professional Benefits
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>User Experience:</strong> Makes websites beautiful and easy to use</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Brand Identity:</strong> Creates consistent visual identity across all pages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Accessibility:</strong> Improves readability and navigation for all users</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>SEO Benefits:</strong> Well-structured CSS helps search engine rankings</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Mobile-First:</strong> Essential for responsive design on all devices</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                                <Code className="h-4 w-4" />
                                Developer Benefits
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Separation of Concerns:</strong> Keeps content (HTML) separate from presentation (CSS)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Maintainability:</strong> Easy to update styles across entire website</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Reusability:</strong> Write once, use everywhere with classes and IDs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Performance:</strong> Cached CSS files load faster on repeat visits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Team Collaboration:</strong> Multiple developers can work on styles independently</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="h-6 w-6 text-green-600" />
                        Try CSS in Action
                    </CardTitle>
                    <CardDescription>
                        See how CSS transforms plain HTML into beautiful, interactive designs
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Basic Transformation</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                                See how CSS can transform simple HTML into an attractive design with gradients, shadows, and hover effects.
                            </p>
                            <Button 
                                onClick={() => onOpenWebPlayground(basicExample.html, basicExample.css, basicExample.js)}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                <Play className="mr-2 h-4 w-4" /> Try Basic Example
                            </Button>
                        </div>
                        
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Advanced Magic</h4>
                            <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                                Explore advanced CSS with Grid layouts, animations, responsive design, and modern techniques.
                            </p>
                            <Button 
                                onClick={() => onOpenWebPlayground(advancedExample.html, advancedExample.css, advancedExample.js)}
                                className="bg-purple-600 hover:bg-purple-700"
                            >
                                <Play className="mr-2 h-4 w-4" /> Try Advanced Example
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

