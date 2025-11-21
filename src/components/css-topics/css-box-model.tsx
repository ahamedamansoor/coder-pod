
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Box, Layers, Brush, Ruler, Square, 
    Move, Maximize, Settings, Eye, Target,
    CheckCircle, AlertTriangle, Info, Zap,
    Monitor, Tablet, Smartphone, Calculator
} from 'lucide-react';
import React from 'react';

interface CssBoxModelProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssBoxModel({ onOpenWebPlayground }: CssBoxModelProps) {

    // Box Model Components
    const boxModelParts = [
        {
            name: "Content",
            property: "width, height",
            desc: "The actual content of the element - text, images, or other elements",
            color: "bg-blue-100 dark:bg-blue-900/30 border-blue-300",
            textColor: "text-blue-800 dark:text-blue-200",
            icon: Square,
            example: "width: 200px; height: 100px;"
        },
        {
            name: "Padding",
            property: "padding",
            desc: "Space between content and border. Inherits background color",
            color: "bg-green-100 dark:bg-green-900/30 border-green-300",
            textColor: "text-green-800 dark:text-green-200",
            icon: Layers,
            example: "padding: 20px; /* or padding: 10px 15px; */"
        },
        {
            name: "Border",
            property: "border",
            desc: "Line around padding and content with width, style, and color",
            color: "bg-purple-100 dark:bg-purple-900/30 border-purple-300",
            textColor: "text-purple-800 dark:text-purple-200",
            icon: Brush,
            example: "border: 2px solid #333; /* width style color */"
        },
        {
            name: "Margin",
            property: "margin",
            desc: "Space outside border, completely transparent, creates distance between elements",
            color: "bg-orange-100 dark:bg-orange-900/30 border-orange-300",
            textColor: "text-orange-800 dark:text-orange-200",
            icon: Move,
            example: "margin: 15px; /* or margin: 10px auto; */"
        }
    ];

    // Box Sizing Models
    const boxSizingTypes = [
        {
            name: "content-box",
            desc: "Default. Width/height only includes content",
            calculation: "Total Width = width + padding + border + margin",
            isDefault: true,
            example: "200px content + 20px padding + 5px border = 250px total"
        },
        {
            name: "border-box",
            desc: "Width/height includes content, padding, and border",
            calculation: "Total Width = width (includes padding & border) + margin",
            isDefault: false,
            example: "200px total (content shrinks to fit padding & border)"
        }
    ];

    // Shorthand Properties
    const shorthandProperties = [
        {
            property: "margin",
            values: [
                { syntax: "margin: 10px;", desc: "All sides: 10px" },
                { syntax: "margin: 10px 20px;", desc: "Top/Bottom: 10px, Left/Right: 20px" },
                { syntax: "margin: 10px 20px 15px;", desc: "Top: 10px, Left/Right: 20px, Bottom: 15px" },
                { syntax: "margin: 10px 20px 15px 25px;", desc: "Top: 10px, Right: 20px, Bottom: 15px, Left: 25px" }
            ]
        },
        {
            property: "padding",
            values: [
                { syntax: "padding: 15px;", desc: "All sides: 15px" },
                { syntax: "padding: 10px 20px;", desc: "Top/Bottom: 10px, Left/Right: 20px" },
                { syntax: "padding: 5px 10px 15px;", desc: "Top: 5px, Left/Right: 10px, Bottom: 15px" },
                { syntax: "padding: 5px 10px 15px 20px;", desc: "Top: 5px, Right: 10px, Bottom: 15px, Left: 20px" }
            ]
        }
    ];

    // Common Box Model Issues
    const commonIssues = [
        {
            issue: "Unexpected Element Size",
            cause: "Not accounting for padding and border in width calculations",
            solution: "Use box-sizing: border-box or calculate total size manually",
            icon: AlertTriangle,
            color: "text-red-500"
        },
        {
            issue: "Margin Collapse",
            cause: "Adjacent vertical margins combine into single margin",
            solution: "Use padding instead of margin or understand collapse rules",
            icon: Info,
            color: "text-blue-500"
        },
        {
            issue: "Layout Overflow",
            cause: "Elements wider than container due to box model calculations",
            solution: "Use border-box sizing or adjust width calculations",
            icon: Maximize,
            color: "text-orange-500"
        }
    ];

    // Enhanced Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Box Model Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Box Model: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Box Model Visualization</h2>
            <div class="visualization-container">
                <div class="legend">
                    <div class="legend-item">
                        <div class="legend-color margin-color"></div>
                        <span>Margin (transparent)</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color border-color"></div>
                        <span>Border</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color padding-color"></div>
                        <span>Padding</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color content-color"></div>
                        <span>Content</span>
                    </div>
                </div>
                
                <div class="box-model-diagram">
                    <div class="margin-layer">
                        <div class="border-layer">
                            <div class="padding-layer">
                                <div class="content-layer">
                                    <h3>Actual Content</h3>
                                    <p>Text, images, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="measurements">
                    <div class="measurement-item">
                        <strong>Total Width:</strong> Content + Padding + Border + Margin
                    </div>
                    <div class="measurement-item">
                        <strong>Visible Width:</strong> Content + Padding + Border
                    </div>
                    <div class="measurement-item">
                        <strong>Content Width:</strong> Just the content area
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Box Sizing Comparison</h2>
            <div class="sizing-demo">
                <div class="sizing-example">
                    <h3>content-box (default)</h3>
                    <div class="box content-box-demo">
                        <p>Width: 200px<br>+ Padding: 40px<br>+ Border: 10px<br>= Total: 250px</p>
                    </div>
                </div>
                <div class="sizing-example">
                    <h3>border-box</h3>
                    <div class="box border-box-demo">
                        <p>Total Width: 200px<br>(includes padding & border)<br>Content adjusts</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Margin Collapse Demo</h2>
            <div class="margin-demo">
                <div class="margin-box top-box">Top Box (margin-bottom: 30px)</div>
                <div class="margin-box bottom-box">Bottom Box (margin-top: 20px)</div>
                <p class="collapse-note">Actual gap: 30px (larger margin wins)</p>
            </div>
        </section>

        <section class="demo-section">
            <h2>Shorthand Properties</h2>
            <div class="shorthand-demo">
                <div class="shorthand-box one-value">margin: 20px</div>
                <div class="shorthand-box two-values">margin: 10px 30px</div>
                <div class="shorthand-box three-values">margin: 10px 20px 30px</div>
                <div class="shorthand-box four-values">margin: 5px 10px 15px 20px</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Box Model Calculator</h2>
            <div class="calculator">
                <div class="calculator-inputs">
                    <div class="input-group">
                        <label>Content Width:</label>
                        <input type="number" id="contentWidth" value="200" min="0">
                        <span>px</span>
                    </div>
                    <div class="input-group">
                        <label>Padding:</label>
                        <input type="number" id="paddingValue" value="20" min="0">
                        <span>px</span>
                    </div>
                    <div class="input-group">
                        <label>Border:</label>
                        <input type="number" id="borderValue" value="5" min="0">
                        <span>px</span>
                    </div>
                    <div class="input-group">
                        <label>Margin:</label>
                        <input type="number" id="marginValue" value="15" min="0">
                        <span>px</span>
                    </div>
                    <div class="input-group">
                        <label>Box Sizing:</label>
                        <select id="boxSizing">
                            <option value="content-box">content-box</option>
                            <option value="border-box">border-box</option>
                        </select>
                    </div>
                </div>
                <div class="calculator-result">
                    <div class="result-box" id="resultBox">
                        <div class="result-content">Content</div>
                    </div>
                    <div class="calculations" id="calculations">
                        <p><strong>Total Width:</strong> <span id="totalWidth">250px</span></p>
                        <p><strong>Total Height:</strong> <span id="totalHeight">150px</span></p>
                        <p><strong>Content Area:</strong> <span id="contentArea">200px × 100px</span></p>
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
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
    color: #2c3e50;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #34495e;
}

.demo-section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Box Model Visualization */
.visualization-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

.legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
}

.legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid rgba(0,0,0,0.2);
}

.margin-color {
    background: linear-gradient(45deg, #ff9800, #ffc107);
    border-color: #ff9800;
}

.border-color {
    background: linear-gradient(45deg, #e74c3c, #c0392b);
    border-color: #e74c3c;
}

.padding-color {
    background: linear-gradient(45deg, #3498db, #2980b9);
    border-color: #3498db;
}

.content-color {
    background: linear-gradient(45deg, #2ecc71, #27ae60);
    border-color: #2ecc71;
}

.box-model-diagram {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.margin-layer {
    background: linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 193, 7, 0.15));
    border: 3px dashed #ff9800;
    padding: 3rem;
    border-radius: 12px;
    position: relative;
}

.margin-layer::before {
    content: 'MARGIN';
    position: absolute;
    top: -15px;
    left: 10px;
    background: #ff9800;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 1px;
}

.border-layer {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    padding: 2rem;
    border-radius: 8px;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.border-layer::before {
    content: 'BORDER';
    position: absolute;
    top: -12px;
    right: 10px;
    background: #c0392b;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 1px;
}

.padding-layer {
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.3), rgba(41, 128, 185, 0.3));
    padding: 1.5rem;
    border-radius: 6px;
    position: relative;
}

.padding-layer::before {
    content: 'PADDING';
    position: absolute;
    bottom: -12px;
    left: 10px;
    background: #3498db;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 1px;
}

.content-layer {
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    padding: 2rem;
    border-radius: 4px;
    text-align: center;
    color: white;
    min-width: 200px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.content-layer::before {
    content: 'CONTENT';
    position: absolute;
    bottom: -12px;
    right: 10px;
    background: #27ae60;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 1px;
}

.content-layer h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: bold;
}

.content-layer p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
}

.measurements {
    background: rgba(255,255,255,0.9);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    max-width: 400px;
    width: 100%;
}

.measurement-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
}

.measurement-item:last-child {
    border-bottom: none;
}

.measurement-item strong {
    color: #2c3e50;
}

/* Box Sizing Comparison */
.sizing-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.sizing-example {
    text-align: center;
}

.sizing-example h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid #34495e;
    margin: 20px auto;
    background: #ecf0f1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.4;
}

.content-box-demo {
    box-sizing: content-box;
    background: #ffebee;
    border-color: #e91e63;
}

.border-box-demo {
    box-sizing: border-box;
    background: #e8f5e8;
    border-color: #4caf50;
}

/* Margin Collapse Demo */
.margin-demo {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    position: relative;
}

.margin-box {
    background: #007bff;
    color: white;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
}

.top-box {
    margin-bottom: 30px;
}

.bottom-box {
    margin-top: 20px;
}

.collapse-note {
    text-align: center;
    font-style: italic;
    color: #6c757d;
    margin-top: 1rem;
    font-weight: bold;
}

/* Shorthand Properties */
.shorthand-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.shorthand-box {
    background: #f8f9fa;
    border: 2px solid #dee2e6;
    text-align: center;
    font-weight: bold;
    color: #495057;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    border-radius: 8px;
}

.one-value { margin: 20px; background: #fff3cd; border-color: #ffc107; }
.two-values { margin: 10px 30px; background: #d4edda; border-color: #28a745; }
.three-values { margin: 10px 20px 30px; background: #cce5ff; border-color: #007bff; }
.four-values { margin: 5px 10px 15px 20px; background: #f8d7da; border-color: #dc3545; }

/* Interactive Calculator */
.calculator {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
}

.calculator-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.input-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.input-group label {
    min-width: 120px;
    font-weight: 600;
}

.input-group input,
.input-group select {
    padding: 8px 12px;
    border: 2px solid #dee2e6;
    border-radius: 5px;
    font-size: 1rem;
    width: 80px;
}

.input-group input:focus,
.input-group select:focus {
    outline: none;
    border-color: #007bff;
}

.calculator-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.result-box {
    position: relative;
    background: #e3f2fd;
    border: 5px solid #2196f3;
    padding: 20px;
    margin: 15px;
    transition: all 0.3s ease;
}

.result-content {
    background: #fff;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
}

.calculations {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.calculations p {
    margin: 0.5rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .box-demo { flex-direction: column; }
    .calculator { grid-template-columns: 1fr; }
    .sizing-demo { grid-template-columns: 1fr; }
}`,
        js: `// Interactive Box Model Calculator
document.addEventListener('DOMContentLoaded', function() {
    const contentWidth = document.getElementById('contentWidth');
    const paddingValue = document.getElementById('paddingValue');
    const borderValue = document.getElementById('borderValue');
    const marginValue = document.getElementById('marginValue');
    const boxSizing = document.getElementById('boxSizing');
    const resultBox = document.getElementById('resultBox');
    const totalWidth = document.getElementById('totalWidth');
    const totalHeight = document.getElementById('totalHeight');
    const contentArea = document.getElementById('contentArea');

    function updateCalculator() {
        const width = parseInt(contentWidth.value) || 0;
        const padding = parseInt(paddingValue.value) || 0;
        const border = parseInt(borderValue.value) || 0;
        const margin = parseInt(marginValue.value) || 0;
        const sizing = boxSizing.value;

        let totalW, totalH, contentW, contentH;

        if (sizing === 'border-box') {
            // border-box: width includes content + padding + border
            contentW = Math.max(0, width - (padding * 2) - (border * 2));
            contentH = Math.max(0, 100 - (padding * 2) - (border * 2));
            totalW = width + (margin * 2);
            totalH = 100 + (margin * 2);
        } else {
            // content-box: width is just content
            contentW = width;
            contentH = 100;
            totalW = width + (padding * 2) + (border * 2) + (margin * 2);
            totalH = 100 + (padding * 2) + (border * 2) + (margin * 2);
        }

        // Update visual representation
        resultBox.style.width = width + 'px';
        resultBox.style.height = '100px';
        resultBox.style.padding = padding + 'px';
        resultBox.style.borderWidth = border + 'px';
        resultBox.style.margin = margin + 'px';
        resultBox.style.boxSizing = sizing;

        // Update calculations display
        totalWidth.textContent = totalW + 'px';
        totalHeight.textContent = totalH + 'px';
        contentArea.textContent = contentW + 'px × ' + contentH + 'px';

        // Update border and background colors based on sizing
        if (sizing === 'border-box') {
            resultBox.style.background = '#e8f5e8';
            resultBox.style.borderColor = '#4caf50';
        } else {
            resultBox.style.background = '#ffebee';
            resultBox.style.borderColor = '#e91e63';
        }
    }

    // Add event listeners
    [contentWidth, paddingValue, borderValue, marginValue, boxSizing].forEach(input => {
        input.addEventListener('input', updateCalculator);
        input.addEventListener('change', updateCalculator);
    });

    // Initial calculation
    updateCalculator();

    // Add hover effects to demonstration boxes
    const demoBoxes = document.querySelectorAll('.shorthand-box, .margin-box');
    demoBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Box model visualization hover effects
    const legendItems = document.querySelectorAll('.legend-item');
    const marginLayer = document.querySelector('.margin-layer');
    const borderLayer = document.querySelector('.border-layer');
    const paddingLayer = document.querySelector('.padding-layer');
    const contentLayer = document.querySelector('.content-layer');

    legendItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            // Reset all layers
            resetLayers();
            
            // Highlight corresponding layer
            switch(index) {
                case 0: // Margin
                    if (marginLayer) {
                        marginLayer.style.background = 'linear-gradient(135deg, rgba(255, 152, 0, 0.4), rgba(255, 193, 7, 0.4))';
                        marginLayer.style.borderColor = '#ff6f00';
                        marginLayer.style.borderWidth = '4px';
                        marginLayer.style.transform = 'scale(1.02)';
                    }
                    break;
                case 1: // Border
                    if (borderLayer) {
                        borderLayer.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
                        borderLayer.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2), 0 0 0 3px rgba(231, 76, 60, 0.3)';
                        borderLayer.style.transform = 'scale(1.02)';
                    }
                    break;
                case 2: // Padding
                    if (paddingLayer) {
                        paddingLayer.style.background = 'linear-gradient(135deg, rgba(52, 152, 219, 0.5), rgba(41, 128, 185, 0.5))';
                        paddingLayer.style.boxShadow = '0 0 0 2px rgba(52, 152, 219, 0.5)';
                        paddingLayer.style.transform = 'scale(1.02)';
                    }
                    break;
                case 3: // Content
                    if (contentLayer) {
                        contentLayer.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                        contentLayer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2), 0 0 0 3px rgba(46, 204, 113, 0.3)';
                        contentLayer.style.transform = 'scale(1.05)';
                    }
                    break;
            }
        });

        item.addEventListener('mouseleave', function() {
            resetLayers();
        });
    });

    function resetLayers() {
        if (marginLayer) {
            marginLayer.style.background = 'linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 193, 7, 0.15))';
            marginLayer.style.borderColor = '#ff9800';
            marginLayer.style.borderWidth = '3px';
            marginLayer.style.transform = 'scale(1)';
        }
        if (borderLayer) {
            borderLayer.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            borderLayer.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)';
            borderLayer.style.transform = 'scale(1)';
        }
        if (paddingLayer) {
            paddingLayer.style.background = 'linear-gradient(135deg, rgba(52, 152, 219, 0.3), rgba(41, 128, 185, 0.3))';
            paddingLayer.style.boxShadow = 'none';
            paddingLayer.style.transform = 'scale(1)';
        }
        if (contentLayer) {
            contentLayer.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
            contentLayer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            contentLayer.style.transform = 'scale(1)';
        }
    }

    // Add smooth transitions to all layers
    [marginLayer, borderLayer, paddingLayer, contentLayer].forEach(layer => {
        if (layer) {
            layer.style.transition = 'all 0.3s ease';
        }
    });

    console.log('Box Model Calculator loaded successfully!');
    console.log('Adjust the values to see how the box model affects element sizing.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Box className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">The CSS Box Model</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master how every HTML element is a rectangular box with content, padding, border, and margin layers.
                </p>
            </div>

            {/* Box Model Components */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-500" />
                        Box Model Components
                    </CardTitle>
                    <CardDescription>
                        Every HTML element consists of four distinct areas that determine its size and spacing.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {boxModelParts.map((part, index) => (
                            <div key={part.name} className={`p-4 rounded-lg border-2 ${part.color}`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <part.icon className={`w-5 h-5 ${part.textColor}`} />
                                    <h3 className={`font-bold text-lg ${part.textColor}`}>{part.name}</h3>
                                </div>
                                <p className={`text-sm mb-3 ${part.textColor}`}>{part.desc}</p>
                                <div className="bg-white dark:bg-gray-800 p-2 rounded">
                                    <code className="text-xs font-mono">{part.example}</code>
                                </div>
                                <Badge variant="secondary" className="mt-2 text-xs">
                                    {part.property}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Interactive Box Model Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Eye className="w-5 h-5" />
                        Live Box Model Demo
                    </CardTitle>
                    <CardDescription>
                        Adjust the sliders below to see how each property affects the box model in real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Controls */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-orange-700 dark:text-orange-300 flex items-center gap-2">
                                    <Move className="w-4 h-4" />
                                    Margin: <span id="marginDisplay">20px</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="50" 
                                    defaultValue="20"
                                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        document.getElementById('marginDisplay').textContent = value + 'px';
                                        document.getElementById('liveBox').style.margin = value + 'px';
                                        updateMeasurements();
                                    }}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Brush className="w-4 h-4" />
                                    Border: <span id="borderDisplay">5px</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="20" 
                                    defaultValue="5"
                                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        document.getElementById('borderDisplay').textContent = value + 'px';
                                        document.getElementById('liveBox').style.borderWidth = value + 'px';
                                        updateMeasurements();
                                    }}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                                    <Layers className="w-4 h-4" />
                                    Padding: <span id="paddingDisplay">15px</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="40" 
                                    defaultValue="15"
                                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        document.getElementById('paddingDisplay').textContent = value + 'px';
                                        document.getElementById('liveBox').style.padding = value + 'px';
                                        updateMeasurements();
                                    }}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Square className="w-4 h-4" />
                                    Width: <span id="widthDisplay">200px</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="100" 
                                    max="300" 
                                    defaultValue="200"
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        document.getElementById('widthDisplay').textContent = value + 'px';
                                        document.getElementById('liveBox').style.width = value + 'px';
                                        updateMeasurements();
                                    }}
                                />
                            </div>
                        </div>

                        {/* Box Sizing Toggle */}
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-semibold">Box Sizing:</label>
                            <div className="flex gap-2">
                                <button 
                                    id="contentBoxBtn"
                                    className="px-3 py-1 text-xs rounded bg-red-100 text-red-700 border border-red-300"
                                    onClick={() => {
                                        document.getElementById('liveBox').style.boxSizing = 'content-box';
                                        document.getElementById('contentBoxBtn').className = 'px-3 py-1 text-xs rounded bg-red-500 text-white border border-red-500';
                                        document.getElementById('borderBoxBtn').className = 'px-3 py-1 text-xs rounded bg-green-100 text-green-700 border border-green-300';
                                        updateMeasurements();
                                    }}
                                >
                                    content-box
                                </button>
                                <button 
                                    id="borderBoxBtn"
                                    className="px-3 py-1 text-xs rounded bg-green-100 text-green-700 border border-green-300"
                                    onClick={() => {
                                        document.getElementById('liveBox').style.boxSizing = 'border-box';
                                        document.getElementById('borderBoxBtn').className = 'px-3 py-1 text-xs rounded bg-green-500 text-white border border-green-500';
                                        document.getElementById('contentBoxBtn').className = 'px-3 py-1 text-xs rounded bg-red-100 text-red-700 border border-red-300';
                                        updateMeasurements();
                                    }}
                                >
                                    border-box
                                </button>
                            </div>
                        </div>

                        {/* Live Demo Box */}
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            <div className="flex-1 flex justify-center">
                                <div className="relative">
                                    <div 
                                        id="liveBox"
                                        className="bg-blue-100 dark:bg-blue-900/50 border-purple-500 text-center transition-all duration-300"
                                        style={{
                                            width: '200px',
                                            height: '100px',
                                            padding: '15px',
                                            border: '5px solid #8b5cf6',
                                            margin: '20px',
                                            boxSizing: 'content-box',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <p className="font-bold text-blue-800 dark:text-blue-200 text-sm">Content Area</p>
                                        <p className="text-xs text-blue-600 dark:text-blue-300">Resize me!</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Live Measurements */}
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm min-w-[250px]">
                                <h4 className="font-bold mb-3 text-center">Live Measurements</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Content Width:</span>
                                        <span id="contentWidthLive" className="font-mono">200px</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>+ Padding (×2):</span>
                                        <span id="paddingTotalLive" className="font-mono">30px</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>+ Border (×2):</span>
                                        <span id="borderTotalLive" className="font-mono">10px</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2 font-bold">
                                        <span>Total Width:</span>
                                        <span id="totalWidthLive" className="font-mono">240px</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>+ Margin (×2):</span>
                                        <span id="marginTotalLive" className="font-mono">40px</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2 font-bold text-primary">
                                        <span>Space Used:</span>
                                        <span id="spaceUsedLive" className="font-mono">280px</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <script dangerouslySetInnerHTML={{
                __html: `
                function updateMeasurements() {
                    const box = document.getElementById('liveBox');
                    if (!box) return;
                    
                    const styles = window.getComputedStyle(box);
                    const width = parseInt(styles.width);
                    const padding = parseInt(styles.paddingLeft);
                    const border = parseInt(styles.borderLeftWidth);
                    const margin = parseInt(styles.marginLeft);
                    const boxSizing = styles.boxSizing;
                    
                    let contentWidth, totalWidth;
                    
                    if (boxSizing === 'border-box') {
                        totalWidth = width;
                        contentWidth = width - (padding * 2) - (border * 2);
                    } else {
                        contentWidth = width;
                        totalWidth = width + (padding * 2) + (border * 2);
                    }
                    
                    const spaceUsed = totalWidth + (margin * 2);
                    
                    document.getElementById('contentWidthLive').textContent = contentWidth + 'px';
                    document.getElementById('paddingTotalLive').textContent = (padding * 2) + 'px';
                    document.getElementById('borderTotalLive').textContent = (border * 2) + 'px';
                    document.getElementById('totalWidthLive').textContent = totalWidth + 'px';
                    document.getElementById('marginTotalLive').textContent = (margin * 2) + 'px';
                    document.getElementById('spaceUsedLive').textContent = spaceUsed + 'px';
                }
                
                // Initialize measurements
                setTimeout(updateMeasurements, 100);
                `
            }} />

            {/* Box Sizing Models */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Settings className="w-5 h-5" />
                        Box Sizing Models
                    </CardTitle>
                    <CardDescription>
                        Understanding how `box-sizing` affects element dimensions and layout calculations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        {boxSizingTypes.map((type, index) => (
                            <div key={type.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calculator className="w-5 h-5 text-blue-500" />
                                    <h3 className="font-bold text-lg">{type.name}</h3>
                                    {type.isDefault && (
                                        <Badge variant="default" className="text-xs">Default</Badge>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{type.desc}</p>
                                <div className="bg-muted p-3 rounded mb-3">
                                    <code className="text-xs font-mono">{type.calculation}</code>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded border-l-4 border-blue-400">
                                    <p className="text-xs text-blue-700 dark:text-blue-300">
                                        <strong>Example:</strong> {type.example}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Shorthand Properties */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Zap className="w-5 h-5" />
                        Shorthand Properties
                    </CardTitle>
                    <CardDescription>
                        Efficient ways to set margin and padding values using shorthand syntax.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {shorthandProperties.map((prop, index) => (
                            <div key={prop.property} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <Ruler className="w-5 h-5 text-purple-500" />
                                    {prop.property} Shorthand
                                </h3>
                                <div className="grid gap-3">
                                    {prop.values.map((value, valueIndex) => (
                                        <div key={valueIndex} className="flex items-center justify-between p-3 bg-muted rounded">
                                            <code className="font-mono text-sm font-bold">{value.syntax}</code>
                                            <span className="text-sm text-muted-foreground">{value.desc}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border-l-4 border-blue-400">
                                    <p className="text-xs text-blue-700 dark:text-blue-300">
                                        <strong>Remember:</strong> Values go clockwise: Top → Right → Bottom → Left
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Common Issues */}
            <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="w-5 h-5" />
                        Common Box Model Issues
                    </CardTitle>
                    <CardDescription>
                        Typical problems developers encounter and how to solve them.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {commonIssues.map((issue, index) => (
                            <div key={issue.issue} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="flex items-start gap-3">
                                    <issue.icon className={`w-5 h-5 mt-1 ${issue.color}`} />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg mb-2">{issue.issue}</h4>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            <strong>Cause:</strong> {issue.cause}
                                        </p>
                                        <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border-l-4 border-green-400">
                                            <p className="text-sm text-green-700 dark:text-green-300">
                                                <strong>Solution:</strong> {issue.solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                        Box Model Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional tips for working effectively with the CSS box model.
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
                                <li>• Use `box-sizing: border-box` globally</li>
                                <li>• Prefer padding over margin for internal spacing</li>
                                <li>• Use margin for spacing between elements</li>
                                <li>• Be consistent with spacing units (rem/em)</li>
                                <li>• Use developer tools to inspect box model</li>
                                <li>• Test layouts on different screen sizes</li>
                            </ul>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Common Mistakes
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                                <li>• Forgetting about margin collapse</li>
                                <li>• Not accounting for padding in width calculations</li>
                                <li>• Using fixed units without considering responsiveness</li>
                                <li>• Mixing box-sizing models inconsistently</li>
                                <li>• Overusing negative margins</li>
                                <li>• Ignoring border width in layouts</li>
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
                        Interactive Box Model Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive box model examples including visualizations, sizing comparisons, margin collapse, shorthand properties, and an interactive calculator with live updates.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Box Model Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Box className="w-3 h-3" />
                            Visual Diagrams
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Calculator className="w-3 h-3" />
                            Interactive Calculator
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Settings className="w-3 h-3" />
                            Box Sizing Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Ruler className="w-3 h-3" />
                            Shorthand Examples
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
