'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, ArrowLeft, ArrowRight, Square, Layers, 
    Move, RotateCcw, Eye, Settings, Target, 
    CheckCircle, AlertTriangle, Zap, Grid3X3,
    ArrowDown, ArrowUp, Monitor, Smartphone
} from 'lucide-react';

interface CssFloatClearProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssFloatClear({ onOpenWebPlayground }: CssFloatClearProps) {
    const [selectedFloat, setSelectedFloat] = useState('none');
    const [selectedClear, setSelectedClear] = useState('none');

    // Float Property Values
    const floatValues = [
        {
            name: 'none',
            icon: Square,
            desc: 'Default value. Element does not float and appears in normal document flow.',
            behavior: 'Normal document flow',
            effect: 'No floating behavior',
            color: 'bg-gray-100 dark:bg-gray-900/30 border-gray-300',
            textColor: 'text-gray-800 dark:text-gray-200',
            useCase: 'Default behavior, block elements'
        },
        {
            name: 'left',
            icon: ArrowLeft,
            desc: 'Element floats to the left side of its container. Text wraps around the right.',
            behavior: 'Floats left, text wraps right',
            effect: 'Removed from normal flow',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200',
            useCase: 'Images in text, sidebar layouts'
        },
        {
            name: 'right',
            icon: ArrowRight,
            desc: 'Element floats to the right side of its container. Text wraps around the left.',
            behavior: 'Floats right, text wraps left',
            effect: 'Removed from normal flow',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200',
            useCase: 'Pull quotes, right-aligned images'
        }
    ];

    // Clear Property Values
    const clearValues = [
        {
            name: 'none',
            icon: Square,
            desc: 'Default value. Element can have floated elements on both sides.',
            behavior: 'Allows floating elements',
            color: 'bg-gray-100 dark:bg-gray-900/30 border-gray-300',
            textColor: 'text-gray-800 dark:text-gray-200'
        },
        {
            name: 'left',
            icon: ArrowLeft,
            desc: 'Element moves below any left-floated elements.',
            behavior: 'Clears left floats only',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200'
        },
        {
            name: 'right',
            icon: ArrowRight,
            desc: 'Element moves below any right-floated elements.',
            behavior: 'Clears right floats only',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200'
        },
        {
            name: 'both',
            icon: RotateCcw,
            desc: 'Element moves below all floated elements (left and right).',
            behavior: 'Clears all floats',
            color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300',
            textColor: 'text-purple-800 dark:text-purple-200'
        }
    ];

    // Common Float Issues and Solutions
    const floatIssues = [
        {
            issue: 'Container Collapse',
            problem: 'Parent container height collapses when all children are floated',
            solution: 'Use clearfix hack or overflow: hidden on parent',
            code: '.clearfix::after { content: ""; display: table; clear: both; }'
        },
        {
            issue: 'Unwanted Text Wrapping',
            problem: 'Text wraps around floated elements unexpectedly',
            solution: 'Use clear property on elements that should not wrap',
            code: '.no-wrap { clear: both; }'
        },
        {
            issue: 'Layout Breaking',
            problem: 'Floated elements break out of their containers',
            solution: 'Set width on floated elements and use box-sizing: border-box',
            code: '.float-element { width: 50%; box-sizing: border-box; }'
        }
    ];

    // Modern Alternatives
    const modernAlternatives = [
        {
            name: 'Flexbox',
            description: 'Better for one-dimensional layouts',
            code: 'display: flex; justify-content: space-between;',
            useCase: 'Navigation bars, button groups'
        },
        {
            name: 'CSS Grid',
            description: 'Better for two-dimensional layouts',
            code: 'display: grid; grid-template-columns: 1fr 2fr;',
            useCase: 'Page layouts, card grids'
        },
        {
            name: 'Inline-block',
            description: 'Better for simple side-by-side elements',
            code: 'display: inline-block; vertical-align: top;',
            useCase: 'Simple columns, image galleries'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Float & Clear Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Float & Clear: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Float Values Demonstration</h2>
            <div class="float-demo">
                <div class="demo-container">
                    <h3>Float: none (Default)</h3>
                    <div class="content-area">
                        <div class="float-box float-none">Float: none</div>
                        <p>This is normal text flow. The element above does not float, so it takes up the full width and this text appears below it. This is the default behavior for block elements.</p>
                    </div>
                </div>
                
                <div class="demo-container">
                    <h3>Float: left</h3>
                    <div class="content-area">
                        <div class="float-box float-left">Float: left</div>
                        <p>This text wraps around the floated element on the right side. The floated element is removed from the normal document flow and positioned to the left side of its container. Notice how the text flows around it naturally.</p>
                    </div>
                </div>
                
                <div class="demo-container">
                    <h3>Float: right</h3>
                    <div class="content-area">
                        <div class="float-box float-right">Float: right</div>
                        <p>This text wraps around the floated element on the left side. The floated element is positioned to the right side of its container, and the text flows around it from the left. This is commonly used for pull quotes or right-aligned images.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Clear Property Demonstration</h2>
            <div class="clear-demo">
                <div class="demo-container">
                    <h3>Without Clear</h3>
                    <div class="content-area">
                        <div class="float-box float-left">Floated Left</div>
                        <div class="float-box float-right">Floated Right</div>
                        <div class="normal-element">This element appears between the floated elements because it doesn't clear the floats.</div>
                    </div>
                </div>
                
                <div class="demo-container">
                    <h3>With Clear: both</h3>
                    <div class="content-area">
                        <div class="float-box float-left">Floated Left</div>
                        <div class="float-box float-right">Floated Right</div>
                        <div class="normal-element clear-both">This element clears both floats and appears below them.</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Container Collapse Problem</h2>
            <div class="collapse-demo">
                <div class="demo-container">
                    <h3>Problem: Container Collapse</h3>
                    <div class="collapsed-container">
                        <div class="float-box float-left">Floated Element</div>
                        <div class="float-box float-right">Another Float</div>
                    </div>
                    <p class="note">Notice how the container above has no visible height because all its children are floated.</p>
                </div>
                
                <div class="demo-container">
                    <h3>Solution: Clearfix</h3>
                    <div class="clearfix-container">
                        <div class="float-box float-left">Floated Element</div>
                        <div class="float-box float-right">Another Float</div>
                    </div>
                    <p class="note">The container above uses the clearfix technique to contain its floated children.</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Float & Clear Tester</h2>
            <div class="interactive-demo">
                <div class="controls">
                    <div class="control-group">
                        <label>Float Value:</label>
                        <select id="floatSelect">
                            <option value="none">none</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label>Clear Value:</label>
                        <select id="clearSelect">
                            <option value="none">none</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="both">both</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label>Element Width:</label>
                        <input type="range" id="widthRange" min="100" max="300" value="150">
                        <span id="widthValue">150px</span>
                    </div>
                </div>
                <div class="test-area">
                    <div class="test-container">
                        <div class="test-element" id="testElement">Test Element</div>
                        <div class="test-element secondary">Secondary Element</div>
                        <p>This is sample text that will flow around floated elements. You can see how different float and clear values affect the layout. Adjust the controls above to experiment with different combinations.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Real-World Examples</h2>
            <div class="examples-demo">
                <div class="example">
                    <h3>Image with Text Wrap</h3>
                    <div class="image-text-example">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100' viewBox='0 0 150 100'%3E%3Crect width='150' height='100' fill='%234CAF50'/%3E%3Ctext x='75' y='55' text-anchor='middle' fill='white' font-family='Arial' font-size='14'%3EImage%3C/text%3E%3C/svg%3E" alt="Sample Image" class="float-left-image">
                        <p>This is a common pattern where an image floats to the left and text wraps around it. This technique was widely used before flexbox and grid became available. The image is floated left, and the text naturally flows around it on the right side.</p>
                        <p>Additional paragraphs continue to wrap around the floated image until there's a clearing element or the image height is exceeded. This creates a natural, magazine-style layout.</p>
                    </div>
                </div>
                
                <div class="example">
                    <h3>Two-Column Layout</h3>
                    <div class="two-column-example">
                        <div class="sidebar">
                            <h4>Sidebar</h4>
                            <p>This sidebar is floated to create a two-column layout.</p>
                        </div>
                        <div class="main-content">
                            <h4>Main Content</h4>
                            <p>This main content area flows around the floated sidebar. This was a common technique for creating layouts before CSS Grid and Flexbox.</p>
                        </div>
                        <div class="footer">Footer content that clears both columns.</div>
                    </div>
                </div>
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
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
    min-height: 100vh;
    padding: 2rem;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #34495e;
}

.demo-section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Float Demonstration */
.float-demo {
    display: grid;
    gap: 2rem;
}

.demo-container {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px solid #e9ecef;
}

.content-area {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    min-height: 120px;
}

.float-box {
    width: 120px;
    height: 80px;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    margin: 0 10px 10px 0;
}

.float-none {
    background: #6c757d;
    float: none;
    width: 100%;
    margin-bottom: 1rem;
}

.float-left {
    background: #007bff;
    float: left;
}

.float-right {
    background: #28a745;
    float: right;
    margin: 0 0 10px 10px;
}

/* Clear Demonstration */
.clear-demo {
    display: grid;
    gap: 2rem;
}

.normal-element {
    background: #ffc107;
    color: #212529;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
    margin: 10px 0;
}

.clear-both {
    clear: both;
}

/* Container Collapse Demo */
.collapse-demo {
    display: grid;
    gap: 2rem;
}

.collapsed-container {
    background: #ffebee;
    border: 3px solid #f44336;
    border-radius: 8px;
    padding: 1rem;
    /* This container will collapse */
}

.clearfix-container {
    background: #e8f5e8;
    border: 3px solid #4caf50;
    border-radius: 8px;
    padding: 1rem;
}

/* Clearfix technique */
.clearfix-container::after {
    content: "";
    display: table;
    clear: both;
}

.note {
    font-style: italic;
    color: #6c757d;
    margin-top: 1rem;
    font-size: 0.9rem;
}

/* Interactive Demo */
.interactive-demo {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-top: 1rem;
}

.controls {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #dee2e6;
}

.control-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.control-group label {
    font-weight: 600;
    color: #495057;
}

.control-group select,
.control-group input[type="range"] {
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 0.9rem;
}

.control-group span {
    font-family: monospace;
    font-weight: bold;
    color: #007bff;
}

.test-area {
    background: #e9ecef;
    border-radius: 10px;
    padding: 1rem;
}

.test-container {
    background: white;
    border: 2px dashed #6c757d;
    border-radius: 8px;
    padding: 1rem;
    min-height: 300px;
}

.test-element {
    width: 150px;
    height: 80px;
    background: #007bff;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 5px;
    transition: all 0.3s ease;
}

.test-element.secondary {
    background: #6c757d;
    width: 100px;
    height: 60px;
}

/* Real-World Examples */
.examples-demo {
    display: grid;
    gap: 2rem;
}

.example {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #dee2e6;
}

.image-text-example {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.float-left-image {
    float: left;
    margin: 0 1rem 1rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.two-column-example {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.sidebar {
    float: left;
    width: 200px;
    background: #e3f2fd;
    padding: 1rem;
    border-radius: 8px;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.main-content {
    background: #f3e5f5;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.footer {
    clear: both;
    background: #fff3e0;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .interactive-demo { grid-template-columns: 1fr; }
    .sidebar { 
        float: none; 
        width: 100%; 
        margin-right: 0; 
    }
    .float-left-image {
        float: none;
        display: block;
        margin: 0 auto 1rem auto;
    }
}`,
        js: `// Interactive Float & Clear Demo
document.addEventListener('DOMContentLoaded', function() {
    const floatSelect = document.getElementById('floatSelect');
    const clearSelect = document.getElementById('clearSelect');
    const widthRange = document.getElementById('widthRange');
    const testElement = document.getElementById('testElement');
    const widthValue = document.getElementById('widthValue');

    function updateTestElement() {
        const floatValue = floatSelect.value;
        const clearValue = clearSelect.value;
        const width = widthRange.value + 'px';

        testElement.style.float = floatValue;
        testElement.style.clear = clearValue;
        testElement.style.width = width;

        widthValue.textContent = width;

        // Update element color based on float value
        switch(floatValue) {
            case 'none':
                testElement.style.background = '#6c757d';
                break;
            case 'left':
                testElement.style.background = '#007bff';
                break;
            case 'right':
                testElement.style.background = '#28a745';
                break;
        }

        // Update border based on clear value
        switch(clearValue) {
            case 'none':
                testElement.style.border = 'none';
                break;
            case 'left':
                testElement.style.border = '3px solid #007bff';
                break;
            case 'right':
                testElement.style.border = '3px solid #28a745';
                break;
            case 'both':
                testElement.style.border = '3px solid #dc3545';
                break;
        }

        console.log('Element updated:', {
            float: floatValue,
            clear: clearValue,
            width: width
        });
    }

    // Add event listeners
    floatSelect.addEventListener('change', updateTestElement);
    clearSelect.addEventListener('change', updateTestElement);
    widthRange.addEventListener('input', updateTestElement);

    // Add hover effects to demo elements
    const demoElements = document.querySelectorAll('.float-box, .test-element, .normal-element');
    demoElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add click effects to demo containers
    const demoContainers = document.querySelectorAll('.demo-container');
    demoContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Initialize with default values
    updateTestElement();

    console.log('Float & Clear Demo loaded successfully!');
    console.log('Use the interactive controls to experiment with float and clear values.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layers className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Float & Clear</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master floating elements and clearing techniques for text wrapping and legacy layouts.
                </p>
            </div>

            {/* Float Property Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Move className="w-5 h-5 text-blue-500" />
                        Float Property Values
                    </CardTitle>
                    <CardDescription>
                        Understanding how the float property removes elements from normal flow and enables text wrapping.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                        {floatValues.map((value, index) => (
                            <div 
                                key={value.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedFloat === value.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${value.color}`}
                                onClick={() => setSelectedFloat(value.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <value.icon className={`w-5 h-5 ${value.textColor}`} />
                                    <h3 className={`font-bold text-lg ${value.textColor}`}>
                                        float: {value.name}
                                    </h3>
                                </div>
                                <p className={`text-sm mb-3 ${value.textColor}`}>{value.desc}</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Behavior:</span>
                                        <span>{value.behavior}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Effect:</span>
                                        <span>{value.effect}</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs w-full justify-center">
                                        {value.useCase}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Clear Property Overview */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <RotateCcw className="w-5 h-5" />
                        Clear Property Values
                    </CardTitle>
                    <CardDescription>
                        Understanding how the clear property controls element positioning relative to floated elements.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {clearValues.map((value, index) => (
                            <div 
                                key={value.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedClear === value.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${value.color}`}
                                onClick={() => setSelectedClear(value.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <value.icon className={`w-5 h-5 ${value.textColor}`} />
                                    <h3 className={`font-bold text-lg ${value.textColor}`}>
                                        clear: {value.name}
                                    </h3>
                                </div>
                                <p className={`text-sm mb-3 ${value.textColor}`}>{value.desc}</p>
                                <Badge variant="secondary" className="text-xs w-full justify-center">
                                    {value.behavior}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Float Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-5 h-5" />
                        Live Float Demo
                    </CardTitle>
                    <CardDescription>
                        Click the buttons below to see how different float values affect element positioning and text flow in real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Float Controls */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {floatValues.map((value) => (
                                <Button
                                    key={value.name}
                                    variant={selectedFloat === value.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedFloat(value.name)}
                                    className="flex items-center gap-2"
                                >
                                    <value.icon className="w-4 h-4" />
                                    float: {value.name}
                                </Button>
                            ))}
                        </div>

                        {/* Live Demo Container */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-dashed border-gray-300 min-h-[300px]">
                            <div className="mb-4 text-center">
                                <Badge variant="outline" className="text-sm">
                                    Current float: <code className="ml-1">{selectedFloat}</code>
                                </Badge>
                            </div>
                            
                            <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded min-h-[200px] overflow-hidden">
                                <div 
                                    className={`w-32 h-20 rounded text-white text-xs font-bold flex items-center justify-center mb-2 transition-all duration-500 ${
                                        selectedFloat === 'left' ? 'bg-blue-500' :
                                        selectedFloat === 'right' ? 'bg-green-500' :
                                        'bg-gray-500'
                                    }`}
                                    style={{
                                        float: selectedFloat === 'none' ? 'none' : selectedFloat as any,
                                        margin: selectedFloat === 'right' ? '0 0 10px 10px' : 
                                               selectedFloat === 'left' ? '0 10px 10px 0' : 
                                               '0 0 10px 0',
                                        width: selectedFloat === 'none' ? '100%' : '128px'
                                    }}
                                >
                                    Floated Element
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    This is sample text that demonstrates how content flows around floated elements. 
                                    When an element is floated left, text wraps around it on the right side. 
                                    When floated right, text wraps on the left side. When not floated (none), 
                                    the element takes full width and text appears below it. Notice how the 
                                    behavior changes as you switch between different float values above.
                                </p>
                            </div>
                        </div>

                        {/* Current Behavior Explanation */}
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                <strong>Current behavior:</strong> {floatValues.find(f => f.name === selectedFloat)?.desc}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Clear Demo */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <RotateCcw className="w-5 h-5" />
                        Live Clear Demo
                    </CardTitle>
                    <CardDescription>
                        See how the clear property affects element positioning relative to floated elements.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Clear Controls */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {clearValues.map((value) => (
                                <Button
                                    key={value.name}
                                    variant={selectedClear === value.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedClear(value.name)}
                                    className="flex items-center gap-2"
                                >
                                    <value.icon className="w-4 h-4" />
                                    clear: {value.name}
                                </Button>
                            ))}
                        </div>

                        {/* Live Clear Demo Container */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-dashed border-gray-300 min-h-[300px]">
                            <div className="mb-4 text-center">
                                <Badge variant="outline" className="text-sm">
                                    Clear value: <code className="ml-1">{selectedClear}</code>
                                </Badge>
                            </div>
                            
                            <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded min-h-[200px] overflow-hidden">
                                {/* Left floated element */}
                                <div className="w-24 h-16 bg-blue-500 text-white text-xs font-bold flex items-center justify-center rounded mb-2 transition-all duration-300" 
                                     style={{ float: 'left', margin: '0 10px 10px 0' }}>
                                    Float Left
                                </div>
                                
                                {/* Right floated element */}
                                <div className="w-24 h-16 bg-green-500 text-white text-xs font-bold flex items-center justify-center rounded mb-2 transition-all duration-300" 
                                     style={{ float: 'right', margin: '0 0 10px 10px' }}>
                                    Float Right
                                </div>
                                
                                {/* Element with clear property */}
                                <div 
                                    className={`p-3 rounded text-center font-semibold transition-all duration-500 ${
                                        selectedClear === 'none' ? 'bg-yellow-200 dark:bg-yellow-800' :
                                        selectedClear === 'left' ? 'bg-blue-200 dark:bg-blue-800' :
                                        selectedClear === 'right' ? 'bg-green-200 dark:bg-green-800' :
                                        'bg-purple-200 dark:bg-purple-800'
                                    }`}
                                    style={{
                                        clear: selectedClear === 'none' ? 'none' : selectedClear as any,
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    This element has clear: {selectedClear}
                                </div>
                                
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                                    The element above demonstrates how the clear property works. 
                                    {selectedClear === 'none' && ' With clear: none, it can appear next to floated elements.'}
                                    {selectedClear === 'left' && ' With clear: left, it moves below left-floated elements.'}
                                    {selectedClear === 'right' && ' With clear: right, it moves below right-floated elements.'}
                                    {selectedClear === 'both' && ' With clear: both, it moves below all floated elements.'}
                                </p>
                            </div>
                        </div>

                        {/* Current Clear Behavior */}
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-400">
                            <p className="text-sm text-orange-700 dark:text-orange-300">
                                <strong>Clear behavior:</strong> {clearValues.find(c => c.name === selectedClear)?.desc}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Container Collapse Live Demo */}
            <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="w-5 h-5" />
                        Container Collapse Problem & Solution
                    </CardTitle>
                    <CardDescription>
                        See the common container collapse issue and how the clearfix technique solves it.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Problem Demo */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-red-700 dark:text-red-300">❌ Problem: Container Collapse</h3>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="border-2 border-dashed border-red-400 p-2 rounded" style={{ overflow: 'visible' }}>
                                    <div className="w-20 h-12 bg-blue-500 text-white text-xs font-bold flex items-center justify-center rounded" 
                                         style={{ float: 'left', margin: '0 10px 10px 0' }}>
                                        Float 1
                                    </div>
                                    <div className="w-20 h-12 bg-green-500 text-white text-xs font-bold flex items-center justify-center rounded" 
                                         style={{ float: 'right', margin: '0 0 10px 10px' }}>
                                        Float 2
                                    </div>
                                </div>
                                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                                    ⚠️ Container has no height because all children are floated
                                </p>
                            </div>
                        </div>

                        {/* Solution Demo */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-green-700 dark:text-green-300">✅ Solution: Clearfix</h3>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="border-2 border-dashed border-green-400 p-2 rounded clearfix-demo">
                                    <div className="w-20 h-12 bg-blue-500 text-white text-xs font-bold flex items-center justify-center rounded" 
                                         style={{ float: 'left', margin: '0 10px 10px 0' }}>
                                        Float 1
                                    </div>
                                    <div className="w-20 h-12 bg-green-500 text-white text-xs font-bold flex items-center justify-center rounded" 
                                         style={{ float: 'right', margin: '0 0 10px 10px' }}>
                                        Float 2
                                    </div>
                                </div>
                                <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                                    ✅ Container properly contains floated children with clearfix
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Clearfix Code */}
                    <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Clearfix CSS Solution:</h4>
                        <code className="text-sm block">
                            .clearfix::after {'{'}
                            <br />
                            &nbsp;&nbsp;content: "";
                            <br />
                            &nbsp;&nbsp;display: table;
                            <br />
                            &nbsp;&nbsp;clear: both;
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            <style jsx>{`
                .clearfix-demo::after {
                    content: "";
                    display: table;
                    clear: both;
                }
            `}</style>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Float & Clear Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive float and clear examples including value demonstrations, container collapse solutions, interactive controls, and real-world layout patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Float & Clear Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Move className="w-3 h-3" />
                            Float Values
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <RotateCcw className="w-3 h-3" />
                            Clear Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Settings className="w-3 h-3" />
                            Interactive Controls
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            Real Examples
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
