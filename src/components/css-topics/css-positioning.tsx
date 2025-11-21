
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Pin, Link, MapPin, Anchor, Layers, 
    Move, ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
    Eye, Settings, Target, CheckCircle, AlertTriangle,
    Zap, Square, Grid3X3, Monitor, Smartphone
} from 'lucide-react';

interface CssPositioningProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPositioning({ onOpenWebPlayground }: CssPositioningProps) {
    const [selectedPosition, setSelectedPosition] = useState('static');
    const [offsetValues, setOffsetValues] = useState({ top: 0, right: 0, bottom: 0, left: 0 });

    // Position Types with comprehensive details
    const positionTypes = [
        {
            name: 'static',
            icon: Pin,
            desc: 'Default positioning. Elements follow normal document flow.',
            behavior: 'Normal document flow',
            offsetsWork: false,
            relativeTo: 'Document flow',
            color: 'bg-gray-100 dark:bg-gray-900/30 border-gray-300',
            textColor: 'text-gray-800 dark:text-gray-200',
            useCase: 'Default behavior, no special positioning needed'
        },
        {
            name: 'relative',
            icon: Link,
            desc: 'Positioned relative to its normal position. Offsets move it from there.',
            behavior: 'Offset from normal position',
            offsetsWork: true,
            relativeTo: 'Its normal position',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200',
            useCase: 'Small adjustments, creating positioning context'
        },
        {
            name: 'absolute',
            icon: MapPin,
            desc: 'Positioned relative to nearest positioned ancestor or document.',
            behavior: 'Removed from document flow',
            offsetsWork: true,
            relativeTo: 'Nearest positioned ancestor',
            color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300',
            textColor: 'text-purple-800 dark:text-purple-200',
            useCase: 'Overlays, tooltips, precise positioning'
        },
        {
            name: 'fixed',
            icon: Anchor,
            desc: 'Positioned relative to viewport. Stays in place when scrolling.',
            behavior: 'Fixed to viewport',
            offsetsWork: true,
            relativeTo: 'Browser viewport',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200',
            useCase: 'Headers, sidebars, floating buttons'
        },
        {
            name: 'sticky',
            icon: Layers,
            desc: 'Hybrid of relative and fixed. Sticks when threshold is reached.',
            behavior: 'Relative until threshold, then fixed',
            offsetsWork: true,
            relativeTo: 'Scrolling container',
            color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300',
            textColor: 'text-orange-800 dark:text-orange-200',
            useCase: 'Sticky headers, table headers, navigation'
        }
    ];

    // Z-index concepts
    const zIndexConcepts = [
        {
            level: 'auto',
            desc: 'Default stacking order based on document flow',
            example: 'z-index: auto;'
        },
        {
            level: '0',
            desc: 'Creates new stacking context at level 0',
            example: 'z-index: 0;'
        },
        {
            level: 'positive',
            desc: 'Higher numbers appear above lower numbers',
            example: 'z-index: 10;'
        },
        {
            level: 'negative',
            desc: 'Appears behind parent stacking context',
            example: 'z-index: -1;'
        }
    ];

    // Common positioning patterns
    const positioningPatterns = [
        {
            name: 'Centering with Absolute',
            css: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
            desc: 'Perfect centering both horizontally and vertically'
        },
        {
            name: 'Full Screen Overlay',
            css: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%;',
            desc: 'Covers entire viewport for modals or overlays'
        },
        {
            name: 'Corner Positioning',
            css: 'position: absolute; top: 10px; right: 10px;',
            desc: 'Position element in specific corner'
        },
        {
            name: 'Sticky Header',
            css: 'position: sticky; top: 0; z-index: 100;',
            desc: 'Header that sticks to top when scrolling'
        }
    ];
    
    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Positioning Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Positioning: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Position Types Comparison</h2>
            <div class="position-demo">
                <div class="demo-container">
                    <div class="positioned-parent">
                        <h3>Positioned Parent (position: relative)</h3>
                        <div class="box static">Static</div>
                        <div class="box relative">Relative</div>
                        <div class="box absolute">Absolute</div>
                        <div class="box sticky">Sticky</div>
                    </div>
                </div>
                <div class="box fixed">Fixed</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Position Tester</h2>
            <div class="position-tester">
                <div class="controls">
                    <div class="control-group">
                        <label>Position:</label>
                        <select id="positionSelect">
                            <option value="static">static</option>
                            <option value="relative">relative</option>
                            <option value="absolute">absolute</option>
                            <option value="fixed">fixed</option>
                            <option value="sticky">sticky</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label>Top:</label>
                        <input type="range" id="topRange" min="-100" max="100" value="0">
                        <span id="topValue">0px</span>
                    </div>
                    <div class="control-group">
                        <label>Left:</label>
                        <input type="range" id="leftRange" min="-100" max="100" value="0">
                        <span id="leftValue">0px</span>
                    </div>
                    <div class="control-group">
                        <label>Z-index:</label>
                        <input type="range" id="zIndexRange" min="-10" max="10" value="0">
                        <span id="zIndexValue">0</span>
                    </div>
                </div>
                <div class="test-area">
                    <div class="test-parent">
                        <div class="test-box" id="testBox">Test Element</div>
                        <div class="reference-box">Reference Element</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Z-Index Stacking Demo</h2>
            <div class="stacking-demo">
                <div class="stack-container">
                    <div class="stack-box" style="z-index: 1; background: #ff6b6b;">Z-Index: 1</div>
                    <div class="stack-box" style="z-index: 3; background: #4ecdc4;">Z-Index: 3</div>
                    <div class="stack-box" style="z-index: 2; background: #45b7d1;">Z-Index: 2</div>
                    <div class="stack-box" style="z-index: -1; background: #96ceb4;">Z-Index: -1</div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Common Positioning Patterns</h2>
            <div class="patterns-demo">
                <div class="pattern-example">
                    <h3>Centered Modal</h3>
                    <div class="modal-demo">
                        <div class="modal-overlay">
                            <div class="modal-content">Centered Modal</div>
                        </div>
                    </div>
                </div>
                
                <div class="pattern-example">
                    <h3>Corner Badge</h3>
                    <div class="badge-demo">
                        <div class="card-with-badge">
                            <div class="corner-badge">New!</div>
                            Card Content
                        </div>
                    </div>
                </div>
                
                <div class="pattern-example">
                    <h3>Sticky Navigation</h3>
                    <div class="sticky-demo">
                        <div class="sticky-nav">Sticky Header</div>
                        <div class="content-area">
                            <p>Scroll content...</p>
                            <p>More content...</p>
                            <p>Even more content...</p>
                        </div>
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 200vh;
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

/* Position Types Demo */
.position-demo {
    position: relative;
    min-height: 400px;
}

.demo-container {
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.positioned-parent {
    position: relative;
    background: #e9ecef;
    border: 2px solid #6c757d;
    border-radius: 8px;
    padding: 1.5rem;
    min-height: 300px;
}

.positioned-parent h3 {
    margin-bottom: 1rem;
    color: #495057;
    font-size: 1rem;
}

.box {
    width: 120px;
    height: 60px;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    margin: 5px 0;
    transition: all 0.3s ease;
}

.static {
    background: #6c757d;
    position: static;
}

.relative {
    background: #007bff;
    position: relative;
    top: 20px;
    left: 30px;
}

.absolute {
    background: #28a745;
    position: absolute;
    top: 50px;
    right: 20px;
}

.fixed {
    background: #dc3545;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.sticky {
    background: #fd7e14;
    position: sticky;
    top: 10px;
}

/* Interactive Position Tester */
.position-tester {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
}

.control-group label {
    min-width: 80px;
    font-weight: 600;
}

.control-group select,
.control-group input[type="range"] {
    flex: 1;
}

.control-group span {
    min-width: 50px;
    font-family: monospace;
    font-weight: bold;
}

.test-area {
    background: #e9ecef;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    min-height: 300px;
}

.test-parent {
    position: relative;
    background: #fff;
    border: 2px dashed #6c757d;
    border-radius: 8px;
    padding: 1rem;
    height: 250px;
}

.test-box {
    width: 100px;
    height: 60px;
    background: #007bff;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;
    position: static;
}

.reference-box {
    width: 80px;
    height: 50px;
    background: #6c757d;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    margin-top: 10px;
}

/* Z-Index Stacking Demo */
.stacking-demo {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
}

.stack-container {
    position: relative;
    display: inline-block;
    width: 300px;
    height: 200px;
}

.stack-box {
    position: absolute;
    width: 120px;
    height: 80px;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: 2px solid rgba(0,0,0,0.2);
}

.stack-box:nth-child(1) { top: 20px; left: 20px; }
.stack-box:nth-child(2) { top: 40px; left: 60px; }
.stack-box:nth-child(3) { top: 60px; left: 100px; }
.stack-box:nth-child(4) { top: 80px; left: 140px; }

/* Common Patterns Demo */
.patterns-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.pattern-example {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #dee2e6;
}

.pattern-example h3 {
    margin-bottom: 1rem;
    color: #495057;
}

/* Modal Demo */
.modal-demo {
    position: relative;
    height: 150px;
    background: #e9ecef;
    border-radius: 8px;
    overflow: hidden;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    font-weight: bold;
}

/* Badge Demo */
.badge-demo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
}

.card-with-badge {
    position: relative;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.corner-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #dc3545;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: bold;
}

/* Sticky Demo */
.sticky-demo {
    height: 150px;
    overflow-y: auto;
    border: 1px solid #dee2e6;
    border-radius: 8px;
}

.sticky-nav {
    position: sticky;
    top: 0;
    background: #007bff;
    color: white;
    padding: 0.75rem;
    text-align: center;
    font-weight: bold;
    z-index: 10;
}

.content-area {
    padding: 1rem;
    background: white;
}

.content-area p {
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 4px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .position-tester { grid-template-columns: 1fr; }
    .patterns-demo { grid-template-columns: 1fr; }
    .stack-container { width: 250px; height: 180px; }
    .stack-box { width: 100px; height: 70px; font-size: 0.8rem; }
}`,
        js: `// Interactive CSS Positioning Demo
document.addEventListener('DOMContentLoaded', function() {
    const positionSelect = document.getElementById('positionSelect');
    const topRange = document.getElementById('topRange');
    const leftRange = document.getElementById('leftRange');
    const zIndexRange = document.getElementById('zIndexRange');
    const testBox = document.getElementById('testBox');
    const topValue = document.getElementById('topValue');
    const leftValue = document.getElementById('leftValue');
    const zIndexValue = document.getElementById('zIndexValue');

    function updateTestBox() {
        const position = positionSelect.value;
        const top = topRange.value + 'px';
        const left = leftRange.value + 'px';
        const zIndex = zIndexRange.value;

        testBox.style.position = position;
        testBox.style.top = top;
        testBox.style.left = left;
        testBox.style.zIndex = zIndex;

        topValue.textContent = top;
        leftValue.textContent = left;
        zIndexValue.textContent = zIndex;

        // Update box color based on position type
        switch(position) {
            case 'static':
                testBox.style.background = '#6c757d';
                break;
            case 'relative':
                testBox.style.background = '#007bff';
                break;
            case 'absolute':
                testBox.style.background = '#28a745';
                break;
            case 'fixed':
                testBox.style.background = '#dc3545';
                break;
            case 'sticky':
                testBox.style.background = '#fd7e14';
                break;
        }

        console.log('Position updated:', {
            position: position,
            top: top,
            left: left,
            zIndex: zIndex
        });
    }

    // Add event listeners
    positionSelect.addEventListener('change', updateTestBox);
    topRange.addEventListener('input', updateTestBox);
    leftRange.addEventListener('input', updateTestBox);
    zIndexRange.addEventListener('input', updateTestBox);

    // Add hover effects to demo boxes
    const demoBoxes = document.querySelectorAll('.box, .stack-box');
    demoBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add click effects to pattern examples
    const patternExamples = document.querySelectorAll('.pattern-example');
    patternExamples.forEach(example => {
        example.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Initialize with default values
    updateTestBox();

    console.log('CSS Positioning Demo loaded successfully!');
    console.log('Use the interactive controls to experiment with different positioning values.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <MapPin className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Positioning</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master element positioning with static, relative, absolute, fixed, and sticky values plus z-index stacking.
                </p>
            </div>

            {/* Position Types Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-500" />
                        Position Property Types
                    </CardTitle>
                    <CardDescription>
                        Understanding the five position values and how they affect element placement in the document flow.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {positionTypes.map((type, index) => (
                            <div 
                                key={type.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedPosition === type.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${type.color}`}
                                onClick={() => setSelectedPosition(type.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <type.icon className={`w-5 h-5 ${type.textColor}`} />
                                    <h3 className={`font-bold text-lg ${type.textColor}`}>
                                        position: {type.name}
                                    </h3>
                                </div>
                                <p className={`text-sm mb-3 ${type.textColor}`}>{type.desc}</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Behavior:</span>
                                        <span>{type.behavior}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Relative to:</span>
                                        <span>{type.relativeTo}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Offsets work:</span>
                                        <span>{type.offsetsWork ? '✅ Yes' : '❌ No'}</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs w-full justify-center">
                                        {type.useCase}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Position Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-5 h-5" />
                        Live Position Demo
                    </CardTitle>
                    <CardDescription>
                        Adjust the controls to see how different position values and offsets affect element placement.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Position Controls */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold flex items-center gap-2">
                                    <Settings className="w-4 h-4" />
                                    Position Type
                                </label>
                                <select 
                                    value={selectedPosition}
                                    onChange={(e) => setSelectedPosition(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    {positionTypes.map(type => (
                                        <option key={type.name} value={type.name}>{type.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold flex items-center gap-2">
                                    <ArrowUp className="w-4 h-4" />
                                    Top: {offsetValues.top}px
                                </label>
                                <input 
                                    type="range" 
                                    min="-50" 
                                    max="50" 
                                    value={offsetValues.top}
                                    onChange={(e) => setOffsetValues({...offsetValues, top: parseInt(e.target.value)})}
                                    className="w-full"
                                    disabled={selectedPosition === 'static'}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Left: {offsetValues.left}px
                                </label>
                                <input 
                                    type="range" 
                                    min="-50" 
                                    max="50" 
                                    value={offsetValues.left}
                                    onChange={(e) => setOffsetValues({...offsetValues, left: parseInt(e.target.value)})}
                                    className="w-full"
                                    disabled={selectedPosition === 'static'}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold flex items-center gap-2">
                                    <Layers className="w-4 h-4" />
                                    Z-Index: {offsetValues.bottom}
                                </label>
                                <input 
                                    type="range" 
                                    min="-5" 
                                    max="5" 
                                    value={offsetValues.bottom}
                                    onChange={(e) => setOffsetValues({...offsetValues, bottom: parseInt(e.target.value)})}
                                    className="w-full"
                                    disabled={selectedPosition === 'static'}
                                />
                            </div>
                        </div>

                        {/* Live Demo Container */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-dashed border-gray-300 min-h-[300px] relative">
                            <div className="mb-4 text-center">
                                <Badge variant="outline" className="text-sm">
                                    Current position: <code className="ml-1">{selectedPosition}</code>
                                </Badge>
                            </div>
                            
                            <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded min-h-[200px] border-2 border-dashed border-gray-400">
                                <span className="text-xs text-gray-500 absolute top-1 left-1">Positioned Parent</span>
                                <div className="bg-gray-300 dark:bg-gray-600 p-2 rounded text-xs text-center mb-2">
                                    Reference Element
                                </div>
                                <div 
                                    className={`w-24 h-16 rounded text-white text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                                        positionTypes.find(t => t.name === selectedPosition)?.color.includes('blue') ? 'bg-blue-500' :
                                        positionTypes.find(t => t.name === selectedPosition)?.color.includes('purple') ? 'bg-purple-500' :
                                        positionTypes.find(t => t.name === selectedPosition)?.color.includes('green') ? 'bg-green-500' :
                                        positionTypes.find(t => t.name === selectedPosition)?.color.includes('orange') ? 'bg-orange-500' :
                                        'bg-gray-500'
                                    }`}
                                    style={{
                                        position: selectedPosition === 'static' ? 'static' : selectedPosition as any,
                                        top: selectedPosition !== 'static' ? `${offsetValues.top}px` : 'auto',
                                        left: selectedPosition !== 'static' ? `${offsetValues.left}px` : 'auto',
                                        zIndex: selectedPosition !== 'static' ? offsetValues.bottom : 'auto'
                                    }}
                                >
                                    Test Element
                                </div>
                            </div>
                        </div>

                        {/* Current Behavior Explanation */}
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                <strong>Current behavior:</strong> {positionTypes.find(t => t.name === selectedPosition)?.desc}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Z-Index and Stacking */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Layers className="w-5 h-5" />
                        Z-Index and Stacking Context
                    </CardTitle>
                    <CardDescription>
                        Understanding how elements stack on top of each other using z-index values.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold mb-3">Z-Index Values</h3>
                            <div className="space-y-3">
                                {zIndexConcepts.map((concept, index) => (
                                    <div key={concept.level} className="bg-white dark:bg-gray-800 p-3 rounded border">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold">{concept.level}</span>
                                            <code className="text-xs bg-muted px-2 py-1 rounded">{concept.example}</code>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{concept.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Stacking Order Rules</h3>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                                <ol className="text-sm space-y-2 list-decimal list-inside">
                                    <li><strong>Higher z-index</strong> appears above lower z-index</li>
                                    <li><strong>Positioned elements</strong> appear above non-positioned</li>
                                    <li><strong>Later elements</strong> appear above earlier ones (same z-index)</li>
                                    <li><strong>Stacking contexts</strong> create isolated stacking layers</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Common Positioning Patterns */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Target className="w-5 h-5" />
                        Common Positioning Patterns
                    </CardTitle>
                    <CardDescription>
                        Real-world positioning techniques used in modern web development.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-1 gap-4">
                        {positioningPatterns.map((pattern, index) => (
                            <div key={pattern.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h3 className="font-bold text-lg mb-2">{pattern.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{pattern.desc}</p>
                                <code className="text-sm bg-muted p-3 rounded block overflow-x-auto">
                                    {pattern.css}
                                </code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Target className="w-5 h-5" />
                        Positioning Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for effective CSS positioning.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                ✅ Best Practices
                            </h4>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                <li>• Use <code>position: relative</code> to create positioning context</li>
                                <li>• Keep z-index values organized and documented</li>
                                <li>• Use <code>position: sticky</code> for modern sticky headers</li>
                                <li>• Prefer flexbox/grid over absolute positioning when possible</li>
                                <li>• Test positioning on different screen sizes</li>
                                <li>• Use transform for centering when appropriate</li>
                            </ul>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Common Mistakes
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                                <li>• Using extremely high z-index values (z-index: 99999)</li>
                                <li>• Forgetting that static elements ignore offsets</li>
                                <li>• Not understanding stacking context creation</li>
                                <li>• Overusing absolute positioning for layouts</li>
                                <li>• Not testing sticky positioning browser support</li>
                                <li>• Positioning without considering accessibility</li>
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
                        Interactive Positioning Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive positioning examples including position comparisons, interactive controls, z-index stacking, and common patterns with live demonstrations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Positioning Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            Position Types
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Settings className="w-3 h-3" />
                            Interactive Controls
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Layers className="w-3 h-3" />
                            Z-Index Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Common Patterns
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
