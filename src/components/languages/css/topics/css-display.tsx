'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Layout, Square, Layers, Grid3X3, 
    Minus, Eye, EyeOff, Maximize, Settings,
    ArrowRight, ArrowDown, CheckCircle, AlertTriangle,
    Monitor, Tablet, Smartphone, Zap, Target
} from 'lucide-react';

interface CssDisplayProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssDisplay({ onOpenWebPlayground }: CssDisplayProps) {
    const [selectedDisplay, setSelectedDisplay] = useState('block');

    // Display Property Types
    const displayTypes = [
        {
            name: "block",
            icon: Square,
            desc: "Takes full width, starts on new line. Default for div, p, h1-h6",
            behavior: "Full width container",
            example: "div, p, h1, section",
            color: "bg-blue-100 dark:bg-blue-900/30 border-blue-300",
            textColor: "text-blue-800 dark:text-blue-200"
        },
        {
            name: "inline",
            icon: Minus,
            desc: "Takes only needed width, flows with text. Default for span, a, strong",
            behavior: "Flows with content",
            example: "span, a, strong, em",
            color: "bg-green-100 dark:bg-green-900/30 border-green-300",
            textColor: "text-green-800 dark:text-green-200"
        },
        {
            name: "inline-block",
            icon: Layout,
            desc: "Combines inline flow with block properties. Can set width/height",
            behavior: "Inline + sizing control",
            example: "buttons, images",
            color: "bg-purple-100 dark:bg-purple-900/30 border-purple-300",
            textColor: "text-purple-800 dark:text-purple-200"
        },
        {
            name: "flex",
            icon: ArrowRight,
            desc: "Creates flexible container for responsive layouts",
            behavior: "Flexible container",
            example: "navigation, cards",
            color: "bg-orange-100 dark:bg-orange-900/30 border-orange-300",
            textColor: "text-orange-800 dark:text-orange-200"
        },
        {
            name: "grid",
            icon: Grid3X3,
            desc: "Creates 2D grid system for complex layouts",
            behavior: "Grid container",
            example: "page layouts, galleries",
            color: "bg-pink-100 dark:bg-pink-900/30 border-pink-300",
            textColor: "text-pink-800 dark:text-pink-200"
        },
        {
            name: "none",
            icon: EyeOff,
            desc: "Completely removes element from layout",
            behavior: "Hidden element",
            example: "hidden content, modals",
            color: "bg-gray-100 dark:bg-gray-900/30 border-gray-300",
            textColor: "text-gray-800 dark:text-gray-200"
        }
    ];

    // Block vs Inline Comparison
    const blockInlineComparison = [
        {
            property: "Width",
            block: "Full container width (100%)",
            inline: "Content width only",
            inlineBlock: "Can set custom width"
        },
        {
            property: "Height",
            block: "Can set height",
            inline: "Content height only",
            inlineBlock: "Can set custom height"
        },
        {
            property: "Line Breaks",
            block: "Always starts new line",
            inline: "Flows with text",
            inlineBlock: "Flows with text"
        },
        {
            property: "Margin/Padding",
            block: "All directions work",
            inline: "Only left/right work",
            inlineBlock: "All directions work"
        }
    ];

    // Flexbox Properties
    const flexProperties = [
        {
            property: "flex-direction",
            values: ["row", "column", "row-reverse", "column-reverse"],
            desc: "Controls the main axis direction"
        },
        {
            property: "justify-content",
            values: ["flex-start", "center", "flex-end", "space-between", "space-around"],
            desc: "Aligns items along main axis"
        },
        {
            property: "align-items",
            values: ["flex-start", "center", "flex-end", "stretch", "baseline"],
            desc: "Aligns items along cross axis"
        }
    ];

    // Grid Properties
    const gridProperties = [
        {
            property: "grid-template-columns",
            example: "1fr 2fr 1fr",
            desc: "Defines column sizes"
        },
        {
            property: "grid-template-rows",
            example: "100px auto 50px",
            desc: "Defines row sizes"
        },
        {
            property: "gap",
            example: "20px",
            desc: "Space between grid items"
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Display Property Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Display Property: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Block vs Inline vs Inline-Block</h2>
            <div class="comparison-demo">
                <div class="demo-group">
                    <h3>Block Elements</h3>
                    <div class="block-example">Block 1</div>
                    <div class="block-example">Block 2</div>
                    <div class="block-example">Block 3</div>
                </div>
                
                <div class="demo-group">
                    <h3>Inline Elements</h3>
                    <div class="inline-container">
                        <span class="inline-example">Inline 1</span>
                        <span class="inline-example">Inline 2</span>
                        <span class="inline-example">Inline 3</span>
                    </div>
                </div>
                
                <div class="demo-group">
                    <h3>Inline-Block Elements</h3>
                    <div class="inline-block-container">
                        <div class="inline-block-example">IB 1</div>
                        <div class="inline-block-example">IB 2</div>
                        <div class="inline-block-example">IB 3</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Flexbox Layout</h2>
            <div class="flex-controls">
                <button onclick="changeFlexDirection('row')">Row</button>
                <button onclick="changeFlexDirection('column')">Column</button>
                <button onclick="changeJustifyContent('center')">Center</button>
                <button onclick="changeJustifyContent('space-between')">Space Between</button>
            </div>
            <div class="flex-demo" id="flexDemo">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Grid Layout</h2>
            <div class="grid-controls">
                <button onclick="changeGridColumns('1fr 1fr')">2 Columns</button>
                <button onclick="changeGridColumns('1fr 2fr 1fr')">3 Columns</button>
                <button onclick="changeGridColumns('repeat(4, 1fr)')">4 Columns</button>
            </div>
            <div class="grid-demo" id="gridDemo">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Display: none vs Visibility: hidden</h2>
            <div class="visibility-demo">
                <div class="visibility-group">
                    <h3>Display: none</h3>
                    <div class="box">Box 1</div>
                    <div class="box hidden-display" id="displayNone">Hidden Box</div>
                    <div class="box">Box 3</div>
                    <button onclick="toggleDisplay()">Toggle Display</button>
                </div>
                
                <div class="visibility-group">
                    <h3>Visibility: hidden</h3>
                    <div class="box">Box 1</div>
                    <div class="box hidden-visibility" id="visibilityHidden">Hidden Box</div>
                    <div class="box">Box 3</div>
                    <button onclick="toggleVisibility()">Toggle Visibility</button>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Display Switcher</h2>
            <div class="display-switcher">
                <div class="controls">
                    <button onclick="setDisplay('block')">Block</button>
                    <button onclick="setDisplay('inline')">Inline</button>
                    <button onclick="setDisplay('inline-block')">Inline-Block</button>
                    <button onclick="setDisplay('flex')">Flex</button>
                    <button onclick="setDisplay('grid')">Grid</button>
                    <button onclick="setDisplay('none')">None</button>
                </div>
                <div class="display-demo-container">
                    <div class="display-item" id="item1">Item 1</div>
                    <div class="display-item" id="item2">Item 2</div>
                    <div class="display-item" id="item3">Item 3</div>
                </div>
                <div class="display-info" id="displayInfo">
                    Current display: <span id="currentDisplay">block</span>
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 2rem;
    color: #333;
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

.demo-section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Block vs Inline vs Inline-Block Demo */
.comparison-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.demo-group {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px solid #e9ecef;
}

.demo-group h3 {
    margin-bottom: 1rem;
    color: #495057;
    text-align: center;
}

.block-example {
    display: block;
    background: #007bff;
    color: white;
    padding: 10px;
    margin: 5px 0;
    text-align: center;
    border-radius: 5px;
}

.inline-example {
    display: inline;
    background: #28a745;
    color: white;
    padding: 8px 12px;
    margin: 0 5px;
    border-radius: 5px;
}

.inline-block-example {
    display: inline-block;
    background: #6f42c1;
    color: white;
    padding: 10px;
    margin: 5px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
}

/* Flexbox Demo */
.flex-controls {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.flex-controls button,
.grid-controls button,
.visibility-demo button,
.controls button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.3s ease;
}

.flex-controls button:hover,
.grid-controls button:hover,
.visibility-demo button:hover,
.controls button:hover {
    background: #0056b3;
}

.flex-demo {
    display: flex;
    background: #e9ecef;
    padding: 1rem;
    border-radius: 8px;
    gap: 10px;
    min-height: 100px;
    align-items: center;
    transition: all 0.3s ease;
}

.flex-item {
    background: #fd7e14;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}

/* Grid Demo */
.grid-controls {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.grid-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    background: #e9ecef;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.grid-item {
    background: #20c997;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
}

/* Visibility Demo */
.visibility-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.visibility-group {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px solid #e9ecef;
}

.visibility-group h3 {
    margin-bottom: 1rem;
    color: #495057;
    text-align: center;
}

.box {
    background: #6c757d;
    color: white;
    padding: 1rem;
    margin: 0.5rem 0;
    text-align: center;
    border-radius: 5px;
}

.hidden-display {
    display: none;
}

.hidden-visibility {
    visibility: hidden;
}

/* Display Switcher */
.display-switcher {
    text-align: center;
}

.controls {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.display-demo-container {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    border: 2px dashed #dee2e6;
    margin-bottom: 1rem;
    min-height: 150px;
}

.display-item {
    background: #e83e8c;
    color: white;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
}

.display-info {
    background: #d4edda;
    color: #155724;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #c3e6cb;
    font-weight: bold;
}

#currentDisplay {
    color: #007bff;
    font-family: monospace;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .comparison-demo { grid-template-columns: 1fr; }
    .visibility-demo { grid-template-columns: 1fr; }
    .flex-controls, .grid-controls, .controls {
        justify-content: center;
    }
}`,
        js: `// Interactive Display Property Demo
document.addEventListener('DOMContentLoaded', function() {
    let currentFlexDirection = 'row';
    let currentJustifyContent = 'flex-start';
    let currentGridColumns = '1fr 1fr';
    let displayNoneVisible = false;
    let visibilityHiddenVisible = true;

    // Flexbox Controls
    window.changeFlexDirection = function(direction) {
        currentFlexDirection = direction;
        const flexDemo = document.getElementById('flexDemo');
        flexDemo.style.flexDirection = direction;
        console.log('Flex direction changed to:', direction);
    };

    window.changeJustifyContent = function(justify) {
        currentJustifyContent = justify;
        const flexDemo = document.getElementById('flexDemo');
        flexDemo.style.justifyContent = justify;
        console.log('Justify content changed to:', justify);
    };

    // Grid Controls
    window.changeGridColumns = function(columns) {
        currentGridColumns = columns;
        const gridDemo = document.getElementById('gridDemo');
        gridDemo.style.gridTemplateColumns = columns;
        console.log('Grid columns changed to:', columns);
    };

    // Display vs Visibility Toggle
    window.toggleDisplay = function() {
        const element = document.getElementById('displayNone');
        displayNoneVisible = !displayNoneVisible;
        
        if (displayNoneVisible) {
            element.style.display = 'block';
            element.classList.remove('hidden-display');
        } else {
            element.style.display = 'none';
            element.classList.add('hidden-display');
        }
        console.log('Display none toggled:', displayNoneVisible);
    };

    window.toggleVisibility = function() {
        const element = document.getElementById('visibilityHidden');
        visibilityHiddenVisible = !visibilityHiddenVisible;
        
        if (visibilityHiddenVisible) {
            element.style.visibility = 'visible';
            element.classList.remove('hidden-visibility');
        } else {
            element.style.visibility = 'hidden';
            element.classList.add('hidden-visibility');
        }
        console.log('Visibility toggled:', visibilityHiddenVisible);
    };

    // Display Property Switcher
    window.setDisplay = function(displayValue) {
        const items = document.querySelectorAll('.display-item');
        const container = document.querySelector('.display-demo-container');
        const currentDisplaySpan = document.getElementById('currentDisplay');
        
        // Reset container styles
        container.style.display = 'block';
        
        items.forEach(item => {
            item.style.display = displayValue;
            
            // Special handling for different display types
            if (displayValue === 'flex') {
                container.style.display = 'flex';
                container.style.gap = '10px';
                container.style.alignItems = 'center';
                container.style.justifyContent = 'center';
            } else if (displayValue === 'grid') {
                container.style.display = 'grid';
                container.style.gridTemplateColumns = 'repeat(3, 1fr)';
                container.style.gap = '10px';
            } else if (displayValue === 'inline-block') {
                item.style.width = '100px';
                item.style.margin = '5px';
            } else {
                item.style.width = 'auto';
                item.style.margin = '0.5rem';
            }
        });
        
        currentDisplaySpan.textContent = displayValue;
        console.log('Display changed to:', displayValue);
    };

    // Add hover effects to demo items
    const demoItems = document.querySelectorAll('.flex-item, .grid-item, .display-item');
    demoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click effects to control buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    console.log('Display Property Demo loaded successfully!');
    console.log('Try the interactive controls to see how different display values work.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layout className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Display Property</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master how elements are displayed and positioned in the document flow with comprehensive examples and interactive demos.
                </p>
            </div>

            {/* Display Types Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-500" />
                        Display Property Types
                    </CardTitle>
                    <CardDescription>
                        Understanding the fundamental display values and their behaviors in document flow.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {displayTypes.map((type, index) => (
                            <div 
                                key={type.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedDisplay === type.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${type.color}`}
                                onClick={() => setSelectedDisplay(type.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <type.icon className={`w-5 h-5 ${type.textColor}`} />
                                    <h3 className={`font-bold text-lg ${type.textColor}`}>
                                        display: {type.name}
                                    </h3>
                                </div>
                                <p className={`text-sm mb-3 ${type.textColor}`}>{type.desc}</p>
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="text-xs">
                                        {type.behavior}
                                    </Badge>
                                    <p className="text-xs opacity-75">
                                        <strong>Common elements:</strong> {type.example}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Display Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-5 h-5" />
                        Live Display Demo
                    </CardTitle>
                    <CardDescription>
                        Click the buttons below to see how different display values affect the same elements in real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Display Controls */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {displayTypes.map((type) => (
                                <Button
                                    key={type.name}
                                    variant={selectedDisplay === type.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedDisplay(type.name)}
                                    className="flex items-center gap-2"
                                >
                                    <type.icon className="w-4 h-4" />
                                    {type.name}
                                </Button>
                            ))}
                        </div>

                        {/* Live Demo Container */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-dashed border-gray-300 min-h-[200px]">
                            <div className="mb-4 text-center">
                                <Badge variant="outline" className="text-sm">
                                    Current display: <code className="ml-1">{selectedDisplay}</code>
                                </Badge>
                            </div>
                            
                            <div 
                                className={`transition-all duration-300 ${
                                    selectedDisplay === 'flex' ? 'flex gap-4 justify-center items-center' :
                                    selectedDisplay === 'grid' ? 'grid grid-cols-3 gap-4' :
                                    selectedDisplay === 'none' ? '' : 'space-y-2'
                                }`}
                            >
                                {selectedDisplay !== 'none' && (
                                    <>
                                        <div 
                                            className={`bg-blue-500 text-white p-3 rounded text-center font-semibold ${
                                                selectedDisplay === 'inline' ? 'inline px-4 py-2 mx-1' :
                                                selectedDisplay === 'inline-block' ? 'inline-block w-24 mx-1' :
                                                'block'
                                            }`}
                                        >
                                            Item 1
                                        </div>
                                        <div 
                                            className={`bg-green-500 text-white p-3 rounded text-center font-semibold ${
                                                selectedDisplay === 'inline' ? 'inline px-4 py-2 mx-1' :
                                                selectedDisplay === 'inline-block' ? 'inline-block w-24 mx-1' :
                                                'block'
                                            }`}
                                        >
                                            Item 2
                                        </div>
                                        <div 
                                            className={`bg-purple-500 text-white p-3 rounded text-center font-semibold ${
                                                selectedDisplay === 'inline' ? 'inline px-4 py-2 mx-1' :
                                                selectedDisplay === 'inline-block' ? 'inline-block w-24 mx-1' :
                                                'block'
                                            }`}
                                        >
                                            Item 3
                                        </div>
                                    </>
                                )}
                                {selectedDisplay === 'none' && (
                                    <div className="text-center text-gray-500 py-8">
                                        Elements are hidden with display: none
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Behavior Explanation */}
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                <strong>Current behavior:</strong> {displayTypes.find(t => t.name === selectedDisplay)?.desc}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Block vs Inline Comparison */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Layers className="w-5 h-5" />
                        Block vs Inline vs Inline-Block
                    </CardTitle>
                    <CardDescription>
                        Understanding the key differences between the three fundamental display types.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-green-300">
                                    <th className="text-left p-3 font-semibold">Property</th>
                                    <th className="text-left p-3 font-semibold text-blue-700">Block</th>
                                    <th className="text-left p-3 font-semibold text-green-700">Inline</th>
                                    <th className="text-left p-3 font-semibold text-purple-700">Inline-Block</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blockInlineComparison.map((row, index) => (
                                    <tr key={row.property} className="border-b border-green-200">
                                        <td className="p-3 font-semibold">{row.property}</td>
                                        <td className="p-3 text-blue-700">{row.block}</td>
                                        <td className="p-3 text-green-700">{row.inline}</td>
                                        <td className="p-3 text-purple-700">{row.inlineBlock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Display Property Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive display examples including block/inline comparisons, flexbox controls, grid layouts, visibility differences, and interactive switchers with live demonstrations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Display Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Layout className="w-3 h-3" />
                            Block vs Inline
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <ArrowRight className="w-3 h-3" />
                            Flexbox Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Grid3X3 className="w-3 h-3" />
                            Grid Layout
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <EyeOff className="w-3 h-3" />
                            Visibility Tests
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
