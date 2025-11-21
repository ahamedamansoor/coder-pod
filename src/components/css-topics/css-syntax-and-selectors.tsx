
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Code, 
  Pointer, 
  Tags, 
  Fingerprint, 
  Star,
  Target,
  Layers,
  ArrowRight,
  Lightbulb,
  Eye,
  Zap,
  CheckCircle,
  XCircle,
  Hash,
  Dot,
  FileText,
  Sparkles,
  AlertTriangle,
  BookOpen,
  Wand2
} from 'lucide-react';
import React from 'react';

interface CssSyntaxAndSelectorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssSyntaxAndSelectors({ onOpenWebPlayground }: CssSyntaxAndSelectorsProps) {

    // Basic syntax breakdown example
    const basicSyntaxExample = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Syntax Demo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Understanding CSS Syntax</h1>
    <p>This paragraph will be styled with CSS rules.</p>
</body>
</html>`,
        css: `/* CSS Rule Anatomy */
h1 {
    color: #2563eb;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
}

p {
    color: #374151;
    font-size: 1.1em;
    line-height: 1.6;
    padding: 15px;
    background-color: #f3f4f6;
    border-radius: 8px;
}`,
        js: ''
    };

    // Comprehensive selector examples
    const selectorShowcase = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Selectors Showcase</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1 id="main-title">CSS Selectors Demo</h1>
        <nav class="navigation">
            <a href="#" class="nav-link active">Home</a>
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Contact</a>
        </nav>
    </header>
    
    <main>
        <section class="content">
            <h2>Welcome to Our Site</h2>
            <p class="intro">This is an introduction paragraph.</p>
            <p>This is a regular paragraph.</p>
            
            <div class="highlight-box">
                <h3>Important Information</h3>
                <p class="warning">This is a warning message.</p>
            </div>
            
            <ul class="feature-list">
                <li>Feature One</li>
                <li class="premium">Feature Two (Premium)</li>
                <li>Feature Three</li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 CSS Demo Site</p>
    </footer>
</body>
</html>`,
        css: `/* Universal Selector - affects ALL elements */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Element Selectors - target HTML tags */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f8fafc;
}

h1, h2, h3 {
    color: #1e293b;
    margin-bottom: 15px;
}

/* ID Selector - targets unique element */
#main-title {
    color: #3b82f6;
    text-align: center;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* Class Selectors - target elements with specific classes */
.navigation {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 15px;
    text-align: center;
    margin-bottom: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    padding: 8px 16px;
    border-radius: 20px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(255,255,255,0.2);
}

.nav-link.active {
    background-color: rgba(255,255,255,0.3);
    font-weight: bold;
}

.content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.intro {
    font-size: 1.2em;
    color: #4f46e5;
    font-weight: 600;
    border-left: 4px solid #4f46e5;
    padding-left: 15px;
}

.highlight-box {
    background: #fef3c7;
    border: 2px solid #f59e0b;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}

.warning {
    color: #dc2626;
    font-weight: bold;
    background: #fee2e2;
    padding: 10px;
    border-radius: 5px;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    padding: 10px;
    margin: 5px 0;
    background: #e0f2fe;
    border-radius: 5px;
    border-left: 4px solid #0891b2;
}

.feature-list .premium {
    background: #fdf4ff;
    border-left-color: #a855f7;
    color: #7c3aed;
    font-weight: bold;
}

footer {
    text-align: center;
    padding: 20px;
    background: #374151;
    color: white;
    margin-top: 30px;
}`,
        js: ''
    };

    // Advanced selectors example
    const advancedExample = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Advanced CSS Selectors</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <article>
            <h2>Article Title</h2>
            <p>First paragraph in article.</p>
            <p>Second paragraph in article.</p>
            <p>Last paragraph in article.</p>
        </article>
        
        <form>
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <input type="text" placeholder="Optional field">
            <button type="submit">Submit</button>
        </form>
        
        <div class="gallery">
            <img src="https://via.placeholder.com/150" alt="Image 1">
            <img src="https://via.placeholder.com/150" alt="Image 2">
            <img src="https://via.placeholder.com/150" alt="Image 3">
        </div>
    </div>
</body>
</html>`,
        css: `/* Pseudo-class selectors */
input:focus {
    outline: 2px solid #3b82f6;
    border-color: #3b82f6;
}

input:required {
    border-left: 3px solid #ef4444;
}

input:valid {
    border-left-color: #10b981;
}

button:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
}

/* Structural pseudo-classes */
article p:first-child {
    font-weight: bold;
    color: #1e40af;
}

article p:last-child {
    font-style: italic;
    color: #6b7280;
}

article p:nth-child(2) {
    background-color: #fef3c7;
    padding: 10px;
    border-radius: 5px;
}

/* Attribute selectors */
input[type="email"] {
    background-color: #ecfdf5;
}

img[alt*="Image"] {
    border: 2px solid #d1d5db;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

img[alt*="Image"]:hover {
    transform: scale(1.05);
}

/* Basic styling */
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

article, form, .gallery {
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

input, button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 16px;
}

button {
    background-color: #3b82f6;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.gallery {
    display: flex;
    gap: 15px;
    justify-content: center;
}`,
        js: ''
    };


    return (
        <div className="space-y-8">
            {/* Page Title */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Pointer className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Syntax & Selectors</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    CSS syntax rules, basic selectors (element, class, ID), and how to target HTML elements.
                </p>
            </div>

            {/* CSS Rule Anatomy */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wand2 className="h-6 w-6 text-purple-600" />
                        CSS Rule Anatomy
                    </CardTitle>
                    <CardDescription>
                        Understanding the structure of CSS rules - the building blocks of all styling
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="flex items-start gap-4">
                            <Lightbulb className="h-8 w-8 text-purple-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                                    Think of CSS Rules as Instructions
                                </h3>
                                <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
                                    A CSS rule is like giving instructions to a decorator: <strong>"Find all the headings (selector) and make them blue and large (declarations)."</strong>
                                    <br />
                                    Every CSS rule has two parts: <strong>WHO</strong> to style (selector) and <strong>HOW</strong> to style them (declarations).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Code className="h-5 w-5 text-blue-600" />
                            CSS Rule Structure
                        </h4>
                        <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto mb-4">
                            <pre>{`selector {
    property: value;
    property: value;
    property: value;
}`}</pre>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Selector</h5>
                                <p className="text-blue-700 dark:text-blue-300">Targets which HTML elements to style</p>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Property</h5>
                                <p className="text-green-700 dark:text-green-300">What aspect to change (color, size, etc.)</p>
                            </div>
                            <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded border border-orange-200 dark:border-orange-800">
                                <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Value</h5>
                                <p className="text-orange-700 dark:text-orange-300">How to change it (blue, 20px, etc.)</p>
                            </div>
                        </div>
                    </div>

                    <Button 
                        onClick={() => onOpenWebPlayground(basicSyntaxExample.html, basicSyntaxExample.css, basicSyntaxExample.js)}
                        className="bg-purple-600 hover:bg-purple-700"
                    >
                        <Play className="mr-2 h-4 w-4" /> Try Basic Syntax Example
                    </Button>
                </CardContent>
            </Card>

            {/* Basic Selectors */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="h-6 w-6 text-blue-600" />
                        The Four Essential Selectors
                    </CardTitle>
                    <CardDescription>
                        Master these four selectors and you can style any HTML element on any webpage
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                            <div className="flex items-center gap-2 mb-3">
                                <FileText className="h-5 w-5 text-red-600" />
                                <h4 className="font-semibold text-red-900 dark:text-red-100">Element Selector</h4>
                                <Badge className="bg-red-100 text-red-800 text-xs">Most Common</Badge>
                            </div>
                            <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded text-sm font-mono">h1 &#123; ... &#125;</code>
                            <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                                Targets all HTML elements of a specific type. Use when you want to style ALL paragraphs, ALL headings, etc.
                            </p>
                            <div className="mt-3 text-xs text-red-600 dark:text-red-400">
                                <strong>Examples:</strong> p, h1, div, span, img, a
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center gap-2 mb-3">
                                <Hash className="h-5 w-5 text-blue-600" />
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100">ID Selector</h4>
                                <Badge className="bg-blue-100 text-blue-800 text-xs">Unique</Badge>
                            </div>
                            <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded text-sm font-mono">#header &#123; ... &#125;</code>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                                Targets ONE specific element with a unique ID. Use for special, one-of-a-kind elements like main header, footer.
                            </p>
                            <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
                                <strong>HTML:</strong> &lt;div id="header"&gt;...&lt;/div&gt;
                            </div>
                        </div>

                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-2 mb-3">
                                <Dot className="h-5 w-5 text-green-600" />
                                <h4 className="font-semibold text-green-900 dark:text-green-100">Class Selector</h4>
                                <Badge className="bg-green-100 text-green-800 text-xs">Reusable</Badge>
                            </div>
                            <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded text-sm font-mono">.button &#123; ... &#125;</code>
                            <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                                Targets all elements with a specific class. Use for styling groups of elements that should look the same.
                            </p>
                            <div className="mt-3 text-xs text-green-600 dark:text-green-400">
                                <strong>HTML:</strong> &lt;button class="button"&gt;...&lt;/button&gt;
                            </div>
                        </div>

                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="flex items-center gap-2 mb-3">
                                <Star className="h-5 w-5 text-purple-600" />
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Universal Selector</h4>
                                <Badge className="bg-purple-100 text-purple-800 text-xs">Everything</Badge>
                            </div>
                            <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded text-sm font-mono">* &#123; ... &#125;</code>
                            <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
                                Targets EVERY element on the page. Use sparingly for global resets like removing default margins and padding.
                            </p>
                            <div className="mt-3 text-xs text-purple-600 dark:text-purple-400">
                                <strong>Common use:</strong> * &#123; margin: 0; padding: 0; &#125;
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Selector Priority (Specificity)
                        </h4>
                        <div className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                            <p><strong>1. ID Selectors</strong> (#header) - Highest priority, most specific</p>
                            <p><strong>2. Class Selectors</strong> (.button) - Medium priority, reusable</p>
                            <p><strong>3. Element Selectors</strong> (p) - Lower priority, broad targeting</p>
                            <p><strong>4. Universal Selector</strong> (*) - Lowest priority, affects everything</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Comprehensive Selector Showcase */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-green-600" />
                        Complete Selector Showcase
                    </CardTitle>
                    <CardDescription>
                        See all the basic selectors working together in a real website example
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                            🎯 What You'll See:
                        </h4>
                        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                            <li>• <strong>Universal selector (*)</strong> - Resets all margins and padding</li>
                            <li>• <strong>Element selectors (h1, p, nav)</strong> - Style all headings and paragraphs</li>
                            <li>• <strong>ID selector (#main-title)</strong> - Special styling for the main title</li>
                            <li>• <strong>Class selectors (.navigation, .intro)</strong> - Reusable styles for multiple elements</li>
                            <li>• <strong>Multiple classes (.nav-link.active)</strong> - Combining classes for specific states</li>
                        </ul>
                    </div>
                    
                    <Button 
                        onClick={() => onOpenWebPlayground(selectorShowcase.html, selectorShowcase.css, selectorShowcase.js)}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        <Play className="mr-2 h-4 w-4" /> Try Complete Selector Example
                    </Button>
                </CardContent>
            </Card>

            {/* Advanced Selectors Preview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-orange-600" />
                        Advanced Selectors Preview
                    </CardTitle>
                    <CardDescription>
                        Get a taste of more powerful selectors you'll learn in advanced topics
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded border border-orange-200 dark:border-orange-800">
                            <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Pseudo-classes</h5>
                            <code className="text-xs bg-orange-100 dark:bg-orange-900/30 px-1 rounded">:hover, :focus, :first-child</code>
                            <p className="text-orange-700 dark:text-orange-300 mt-1">Style elements based on their state or position</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                            <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Attribute Selectors</h5>
                            <code className="text-xs bg-blue-100 dark:blue-orange-900/30 px-1 rounded">[type="email"], [alt*="image"]</code>
                            <p className="text-blue-700 dark:text-blue-300 mt-1">Select elements based on their attributes</p>
                        </div>
                    </div>
                    
                    <Button 
                        onClick={() => onOpenWebPlayground(advancedExample.html, advancedExample.css, advancedExample.js)}
                        className="bg-orange-600 hover:bg-orange-700"
                    >
                        <Play className="mr-2 h-4 w-4" /> Try Advanced Selectors
                    </Button>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-indigo-600" />
                        CSS Selector Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional tips for writing clean, maintainable CSS selectors
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4" />
                                Do This
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Use classes for styling:</strong> .button, .card, .header</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Keep selectors simple:</strong> Avoid overly complex chains</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Use meaningful names:</strong> .navigation not .nav123</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Be consistent:</strong> Follow a naming convention</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-red-700 dark:text-red-400 flex items-center gap-2">
                                <XCircle className="h-4 w-4" />
                                Avoid This
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Overusing IDs:</strong> Use classes instead for reusability</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Inline styles:</strong> Keep CSS separate from HTML</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Generic names:</strong> .red, .big, .thing are not descriptive</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span><strong>Deep nesting:</strong> .header .nav .menu .item .link is too much</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
