'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Layout, Box, ArrowRightLeft, AlignStartVertical, AlignEndVertical, 
    StretchHorizontal, WrapText, ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
    Maximize, Minimize, RotateCcw, Grid3X3, Zap, Settings, Target,
    CheckCircle, AlertTriangle, Code, Hash, Plus, Minus
} from 'lucide-react';

interface CssFlexboxProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssFlexbox({ onOpenWebPlayground }: CssFlexboxProps) {
    const [selectedDirection, setSelectedDirection] = useState('row');
    const [selectedJustify, setSelectedJustify] = useState('flex-start');
    const [selectedAlign, setSelectedAlign] = useState('stretch');

    // Flex Direction Options
    const flexDirections = [
        {
            name: 'row',
            icon: ArrowRight,
            desc: 'Items are placed in a row from left to right (default)',
            visual: '→ → →'
        },
        {
            name: 'row-reverse',
            icon: ArrowLeft,
            desc: 'Items are placed in a row from right to left',
            visual: '← ← ←'
        },
        {
            name: 'column',
            icon: ArrowDown,
            desc: 'Items are placed in a column from top to bottom',
            visual: '↓ ↓ ↓'
        },
        {
            name: 'column-reverse',
            icon: ArrowUp,
            desc: 'Items are placed in a column from bottom to top',
            visual: '↑ ↑ ↑'
        }
    ];

    // Justify Content Options
    const justifyContentOptions = [
        {
            name: 'flex-start',
            desc: 'Items are packed toward the start of the main axis',
            visual: '[1][2][3]     '
        },
        {
            name: 'flex-end',
            desc: 'Items are packed toward the end of the main axis',
            visual: '     [1][2][3]'
        },
        {
            name: 'center',
            desc: 'Items are centered along the main axis',
            visual: '  [1][2][3]  '
        },
        {
            name: 'space-between',
            desc: 'Items are evenly distributed with first item at start, last at end',
            visual: '[1]   [2]   [3]'
        },
        {
            name: 'space-around',
            desc: 'Items are evenly distributed with equal space around them',
            visual: ' [1]  [2]  [3] '
        },
        {
            name: 'space-evenly',
            desc: 'Items are evenly distributed with equal space between them',
            visual: ' [1] [2] [3] '
        }
    ];

    // Align Items Options
    const alignItemsOptions = [
        {
            name: 'stretch',
            desc: 'Items stretch to fill the container (default)',
            visual: 'Full height items'
        },
        {
            name: 'flex-start',
            desc: 'Items are aligned to the start of the cross axis',
            visual: 'Top aligned'
        },
        {
            name: 'flex-end',
            desc: 'Items are aligned to the end of the cross axis',
            visual: 'Bottom aligned'
        },
        {
            name: 'center',
            desc: 'Items are centered along the cross axis',
            visual: 'Center aligned'
        },
        {
            name: 'baseline',
            desc: 'Items are aligned along their text baseline',
            visual: 'Baseline aligned'
        }
    ];

    // Container Properties
    const containerProperties = [
        {
            name: 'display',
            icon: Layout,
            values: ['flex', 'inline-flex'],
            desc: 'Establishes a flex formatting context',
            example: 'display: flex;'
        },
        {
            name: 'flex-direction',
            icon: ArrowRightLeft,
            values: ['row', 'row-reverse', 'column', 'column-reverse'],
            desc: 'Defines the main axis direction',
            example: 'flex-direction: row;'
        },
        {
            name: 'flex-wrap',
            icon: WrapText,
            values: ['nowrap', 'wrap', 'wrap-reverse'],
            desc: 'Controls whether items wrap to new lines',
            example: 'flex-wrap: wrap;'
        },
        {
            name: 'justify-content',
            icon: AlignEndVertical,
            values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
            desc: 'Aligns items along the main axis',
            example: 'justify-content: center;'
        },
        {
            name: 'align-items',
            icon: AlignStartVertical,
            values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
            desc: 'Aligns items along the cross axis',
            example: 'align-items: center;'
        },
        {
            name: 'align-content',
            icon: Grid3X3,
            values: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
            desc: 'Aligns wrapped lines',
            example: 'align-content: center;'
        }
    ];

    // Item Properties
    const itemProperties = [
        {
            name: 'flex-grow',
            icon: Maximize,
            desc: 'Defines how much an item should grow',
            example: 'flex-grow: 1;',
            values: 'number (0 is default)'
        },
        {
            name: 'flex-shrink',
            icon: Minimize,
            desc: 'Defines how much an item should shrink',
            example: 'flex-shrink: 1;',
            values: 'number (1 is default)'
        },
        {
            name: 'flex-basis',
            icon: StretchHorizontal,
            desc: 'Defines the initial size before free space is distributed',
            example: 'flex-basis: 200px;',
            values: 'length | auto | content'
        },
        {
            name: 'align-self',
            icon: Target,
            desc: 'Overrides align-items for individual items',
            example: 'align-self: center;',
            values: 'auto | flex-start | flex-end | center | baseline | stretch'
        },
        {
            name: 'order',
            icon: Hash,
            desc: 'Changes the visual order without affecting HTML',
            example: 'order: 2;',
            values: 'integer (0 is default)'
        }
    ];

    // Common Flexbox Patterns
    const commonPatterns = [
        {
            name: 'Perfect Centering',
            desc: 'Center content both horizontally and vertically',
            css: `display: flex;
justify-content: center;
align-items: center;`,
            useCase: 'Modal dialogs, hero sections'
        },
        {
            name: 'Navigation Bar',
            desc: 'Horizontal navigation with space between items',
            css: `display: flex;
justify-content: space-between;
align-items: center;`,
            useCase: 'Header navigation, toolbars'
        },
        {
            name: 'Card Layout',
            desc: 'Equal height cards in a row',
            css: `display: flex;
gap: 1rem;
align-items: stretch;`,
            useCase: 'Product cards, feature sections'
        },
        {
            name: 'Sidebar Layout',
            desc: 'Fixed sidebar with flexible main content',
            css: `display: flex;
.sidebar { flex: 0 0 250px; }
.main { flex: 1; }`,
            useCase: 'Dashboard layouts, admin panels'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Flexbox Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Flexbox: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Flex Direction Demo</h2>
            <div class="controls">
                <button onclick="changeDirection('row')">Row</button>
                <button onclick="changeDirection('row-reverse')">Row Reverse</button>
                <button onclick="changeDirection('column')">Column</button>
                <button onclick="changeDirection('column-reverse')">Column Reverse</button>
            </div>
            <div class="flex-container" id="directionDemo">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Justify Content Demo</h2>
            <div class="controls">
                <button onclick="changeJustify('flex-start')">Flex Start</button>
                <button onclick="changeJustify('center')">Center</button>
                <button onclick="changeJustify('flex-end')">Flex End</button>
                <button onclick="changeJustify('space-between')">Space Between</button>
                <button onclick="changeJustify('space-around')">Space Around</button>
                <button onclick="changeJustify('space-evenly')">Space Evenly</button>
            </div>
            <div class="flex-container" id="justifyDemo">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Align Items Demo</h2>
            <div class="controls">
                <button onclick="changeAlign('stretch')">Stretch</button>
                <button onclick="changeAlign('flex-start')">Flex Start</button>
                <button onclick="changeAlign('center')">Center</button>
                <button onclick="changeAlign('flex-end')">Flex End</button>
                <button onclick="changeAlign('baseline')">Baseline</button>
            </div>
            <div class="flex-container tall" id="alignDemo">
                <div class="flex-item">Item 1</div>
                <div class="flex-item large">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Flex Item Properties Demo</h2>
            <div class="controls">
                <button onclick="toggleGrow()">Toggle Flex Grow</button>
                <button onclick="changeOrder()">Change Order</button>
                <button onclick="toggleShrink()">Toggle Flex Shrink</button>
                <button onclick="resetItems()">Reset</button>
            </div>
            <div class="flex-container" id="itemDemo">
                <div class="flex-item" id="item1">Item 1</div>
                <div class="flex-item" id="item2">Item 2</div>
                <div class="flex-item" id="item3">Item 3</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Flex Wrap Demo</h2>
            <div class="controls">
                <button onclick="changeWrap('nowrap')">No Wrap</button>
                <button onclick="changeWrap('wrap')">Wrap</button>
                <button onclick="changeWrap('wrap-reverse')">Wrap Reverse</button>
            </div>
            <div class="flex-container narrow" id="wrapDemo">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
                <div class="flex-item">Item 4</div>
                <div class="flex-item">Item 5</div>
                <div class="flex-item">Item 6</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Real-World Examples</h2>
            
            <h3>Perfect Centering</h3>
            <div class="example-container center-example">
                <div class="centered-content">Perfectly Centered!</div>
            </div>
            
            <h3>Navigation Bar</h3>
            <nav class="navbar-example">
                <div class="logo">Logo</div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div class="nav-actions">
                    <button>Login</button>
                </div>
            </nav>
            
            <h3>Card Layout</h3>
            <div class="card-container">
                <div class="card">
                    <h4>Card 1</h4>
                    <p>This is some content for the first card.</p>
                </div>
                <div class="card">
                    <h4>Card 2</h4>
                    <p>This card has more content to demonstrate how flexbox makes all cards the same height automatically.</p>
                </div>
                <div class="card">
                    <h4>Card 3</h4>
                    <p>Short content.</p>
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
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem 0;
    color: #34495e;
}

.demo-section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.controls {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.controls button {
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.controls button:hover {
    background: #0056b3;
    transform: translateY(-1px);
}

.controls button.active {
    background: #28a745;
}

/* Flex Container Styles */
.flex-container {
    display: flex;
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
    padding: 1rem;
    min-height: 120px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.flex-container.tall {
    min-height: 200px;
}

.flex-container.narrow {
    max-width: 400px;
    margin: 0 auto 1rem auto;
}

/* Flex Item Styles */
.flex-item {
    background: #007bff;
    color: white;
    padding: 1rem;
    margin: 0.25rem;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    min-width: 60px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-item.large {
    font-size: 1.5rem;
    padding: 1.5rem;
}

.flex-item:nth-child(1) { background: #007bff; }
.flex-item:nth-child(2) { background: #28a745; }
.flex-item:nth-child(3) { background: #dc3545; }
.flex-item:nth-child(4) { background: #ffc107; color: #333; }
.flex-item:nth-child(5) { background: #6f42c1; }
.flex-item:nth-child(6) { background: #fd7e14; }

/* Real-World Examples */
.example-container {
    background: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.center-example {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
}

.centered-content {
    background: #007bff;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: bold;
}

.navbar-example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #343a40;
    color: white;
    padding: 1rem;
    border-radius: 5px;
}

.logo {
    font-weight: bold;
    font-size: 1.2rem;
}

.nav-links {
    display: flex;
    gap: 1rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 3px;
    transition: background 0.3s ease;
}

.nav-links a:hover {
    background: rgba(255,255,255,0.1);
}

.nav-actions button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    cursor: pointer;
}

.card-container {
    display: flex;
    gap: 1rem;
    align-items: stretch;
}

.card {
    flex: 1;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h4 {
    margin-bottom: 0.5rem;
    color: #007bff;
}

/* Dynamic Classes for JavaScript Control */
.flex-grow-1 { flex-grow: 1; }
.flex-grow-2 { flex-grow: 2; }
.flex-shrink-0 { flex-shrink: 0; }
.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .controls { justify-content: center; }
    .card-container { flex-direction: column; }
    .navbar-example { flex-direction: column; gap: 1rem; }
    .nav-links { justify-content: center; }
}`,
        js: `// Interactive CSS Flexbox Demo
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Flexbox Demo loaded successfully!');

    // Direction Demo
    window.changeDirection = function(direction) {
        const container = document.getElementById('directionDemo');
        container.style.flexDirection = direction;
        
        // Update button states
        const buttons = container.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log('Flex direction changed to:', direction);
    };

    // Justify Content Demo
    window.changeJustify = function(justify) {
        const container = document.getElementById('justifyDemo');
        container.style.justifyContent = justify;
        
        // Update button states
        const buttons = container.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log('Justify content changed to:', justify);
    };

    // Align Items Demo
    window.changeAlign = function(align) {
        const container = document.getElementById('alignDemo');
        container.style.alignItems = align;
        
        // Update button states
        const buttons = container.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log('Align items changed to:', align);
    };

    // Flex Wrap Demo
    window.changeWrap = function(wrap) {
        const container = document.getElementById('wrapDemo');
        container.style.flexWrap = wrap;
        
        // Update button states
        const buttons = container.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log('Flex wrap changed to:', wrap);
    };

    // Item Properties Demo
    let growState = false;
    let orderState = 0;
    let shrinkState = false;

    window.toggleGrow = function() {
        const item2 = document.getElementById('item2');
        growState = !growState;
        
        if (growState) {
            item2.style.flexGrow = '2';
            event.target.textContent = 'Remove Flex Grow';
            event.target.classList.add('active');
        } else {
            item2.style.flexGrow = '0';
            event.target.textContent = 'Toggle Flex Grow';
            event.target.classList.remove('active');
        }
        
        console.log('Flex grow toggled:', growState);
    };

    window.changeOrder = function() {
        const items = ['item1', 'item2', 'item3'];
        orderState = (orderState + 1) % 3;
        
        // Reset all orders
        items.forEach(id => {
            document.getElementById(id).style.order = '0';
        });
        
        // Set new order
        if (orderState === 1) {
            document.getElementById('item1').style.order = '3';
            document.getElementById('item2').style.order = '1';
            document.getElementById('item3').style.order = '2';
            event.target.textContent = 'Order: 2-3-1';
        } else if (orderState === 2) {
            document.getElementById('item1').style.order = '2';
            document.getElementById('item2').style.order = '3';
            document.getElementById('item3').style.order = '1';
            event.target.textContent = 'Order: 3-1-2';
        } else {
            event.target.textContent = 'Change Order';
        }
        
        console.log('Order state:', orderState);
    };

    window.toggleShrink = function() {
        const item1 = document.getElementById('item1');
        shrinkState = !shrinkState;
        
        if (shrinkState) {
            item1.style.flexShrink = '0';
            item1.style.minWidth = '200px';
            event.target.textContent = 'Allow Shrink';
            event.target.classList.add('active');
        } else {
            item1.style.flexShrink = '1';
            item1.style.minWidth = '60px';
            event.target.textContent = 'Toggle Flex Shrink';
            event.target.classList.remove('active');
        }
        
        console.log('Flex shrink toggled:', shrinkState);
    };

    window.resetItems = function() {
        const items = ['item1', 'item2', 'item3'];
        items.forEach(id => {
            const item = document.getElementById(id);
            item.style.flexGrow = '0';
            item.style.flexShrink = '1';
            item.style.order = '0';
            item.style.minWidth = '60px';
        });
        
        // Reset button states
        const buttons = document.querySelectorAll('#itemDemo .controls button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.includes('Grow')) btn.textContent = 'Toggle Flex Grow';
            if (btn.textContent.includes('Order')) btn.textContent = 'Change Order';
            if (btn.textContent.includes('Shrink')) btn.textContent = 'Toggle Flex Shrink';
        });
        
        growState = false;
        orderState = 0;
        shrinkState = false;
        
        console.log('All items reset to default state');
    };

    // Add click effects to all buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add hover effects to flex items
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    console.log('All interactive flexbox demos initialized!');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layout className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Flexbox</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master modern one-dimensional layouts with comprehensive flexbox techniques and interactive examples.
                </p>
            </div>

            {/* Live Flex Direction Demo */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <ArrowRightLeft className="w-5 h-5" />
                        Live Flex Direction Demo
                    </CardTitle>
                    <CardDescription>
                        Click the buttons to see how flex-direction changes the main axis and item flow.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {flexDirections.map((direction) => (
                                <Button
                                    key={direction.name}
                                    variant={selectedDirection === direction.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedDirection(direction.name)}
                                    className="flex items-center gap-2"
                                >
                                    <direction.icon className="w-4 h-4" />
                                    {direction.name}
                                </Button>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div 
                                className={`flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 min-h-[120px] transition-all duration-300 ${
                                    selectedDirection === 'row' ? 'flex-row' :
                                    selectedDirection === 'row-reverse' ? 'flex-row-reverse' :
                                    selectedDirection === 'column' ? 'flex-col' : 'flex-col-reverse'
                                }`}
                            >
                                <div className="bg-blue-500 text-white p-3 rounded font-bold text-center min-w-[60px]">1</div>
                                <div className="bg-green-500 text-white p-3 rounded font-bold text-center min-w-[60px]">2</div>
                                <div className="bg-red-500 text-white p-3 rounded font-bold text-center min-w-[60px]">3</div>
                            </div>
                            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                <strong>Current:</strong> {flexDirections.find(d => d.name === selectedDirection)?.desc}
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                            .container {'{'}
                            <br />
                            {'  '}display: flex;
                            <br />
                            {'  '}flex-direction: {selectedDirection};
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Justify Content Demo */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <AlignEndVertical className="w-5 h-5" />
                        Live Justify Content Demo
                    </CardTitle>
                    <CardDescription>
                        See how justify-content controls alignment along the main axis (horizontal in row direction).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {justifyContentOptions.map((option) => (
                                <Button
                                    key={option.name}
                                    variant={selectedJustify === option.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedJustify(option.name)}
                                >
                                    {option.name}
                                </Button>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div 
                                className={`flex gap-1 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 min-h-[100px] transition-all duration-300 ${
                                    selectedJustify === 'flex-start' ? 'justify-start' :
                                    selectedJustify === 'flex-end' ? 'justify-end' :
                                    selectedJustify === 'center' ? 'justify-center' :
                                    selectedJustify === 'space-between' ? 'justify-between' :
                                    selectedJustify === 'space-around' ? 'justify-around' : 'justify-evenly'
                                }`}
                            >
                                <div className="bg-purple-500 text-white p-3 rounded font-bold text-center min-w-[50px]">A</div>
                                <div className="bg-yellow-500 text-black p-3 rounded font-bold text-center min-w-[50px]">B</div>
                                <div className="bg-pink-500 text-white p-3 rounded font-bold text-center min-w-[50px]">C</div>
                            </div>
                            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                <strong>Visual:</strong> <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">{justifyContentOptions.find(o => o.name === selectedJustify)?.visual}</code>
                                <br />
                                <strong>Description:</strong> {justifyContentOptions.find(o => o.name === selectedJustify)?.desc}
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                            .container {'{'}
                            <br />
                            {'  '}display: flex;
                            <br />
                            {'  '}justify-content: {selectedJustify};
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Align Items Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <AlignStartVertical className="w-5 h-5" />
                        Live Align Items Demo
                    </CardTitle>
                    <CardDescription>
                        See how align-items controls alignment along the cross axis (vertical in row direction).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {alignItemsOptions.map((option) => (
                                <Button
                                    key={option.name}
                                    variant={selectedAlign === option.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedAlign(option.name)}
                                >
                                    {option.name}
                                </Button>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div 
                                className={`flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 h-[150px] transition-all duration-300 ${
                                    selectedAlign === 'stretch' ? 'items-stretch' :
                                    selectedAlign === 'flex-start' ? 'items-start' :
                                    selectedAlign === 'flex-end' ? 'items-end' :
                                    selectedAlign === 'center' ? 'items-center' : 'items-baseline'
                                }`}
                            >
                                <div className="bg-indigo-500 text-white p-3 rounded font-bold text-center min-w-[60px] flex items-center justify-center">
                                    Item 1
                                </div>
                                <div className="bg-teal-500 text-white p-4 rounded font-bold text-center min-w-[60px] text-lg flex items-center justify-center">
                                    Item 2
                                </div>
                                <div className="bg-orange-500 text-white p-2 rounded font-bold text-center min-w-[60px] text-sm flex items-center justify-center">
                                    Item 3
                                </div>
                            </div>
                            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                <strong>Effect:</strong> {alignItemsOptions.find(o => o.name === selectedAlign)?.visual}
                                <br />
                                <strong>Description:</strong> {alignItemsOptions.find(o => o.name === selectedAlign)?.desc}
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                            .container {'{'}
                            <br />
                            {'  '}display: flex;
                            <br />
                            {'  '}align-items: {selectedAlign};
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Flex Item Properties Demo */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Maximize className="w-5 h-5" />
                        Live Flex Item Properties Demo
                    </CardTitle>
                    <CardDescription>
                        Experiment with flex-grow, flex-shrink, flex-basis, and see how items respond to available space.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Flex Grow Demo */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Flex Grow Demo</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Flex-grow determines how much an item should grow relative to other items when there's extra space.
                            </p>
                            <div className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 min-h-[80px]">
                                <div className="bg-blue-500 text-white p-3 rounded font-bold text-center flex-grow-0 flex items-center justify-center">
                                    grow: 0
                                </div>
                                <div className="bg-green-500 text-white p-3 rounded font-bold text-center flex-grow flex items-center justify-center">
                                    grow: 1
                                </div>
                                <div className="bg-red-500 text-white p-3 rounded font-bold text-center flex-grow-0 flex items-center justify-center">
                                    grow: 0
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .item-2 {'{ flex-grow: 1; }'} /* Takes all extra space */
                            </code>
                        </div>

                        {/* Flex Shrink Demo */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Flex Shrink Demo</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Flex-shrink determines how much an item should shrink when there's not enough space.
                            </p>
                            <div className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 min-h-[80px] max-w-[300px]">
                                <div className="bg-purple-500 text-white p-3 rounded font-bold text-center min-w-[120px] flex-shrink-0 flex items-center justify-center text-xs">
                                    shrink: 0
                                </div>
                                <div className="bg-yellow-500 text-black p-3 rounded font-bold text-center min-w-[120px] flex-shrink flex items-center justify-center text-xs">
                                    shrink: 1
                                </div>
                                <div className="bg-pink-500 text-white p-3 rounded font-bold text-center min-w-[120px] flex-shrink flex items-center justify-center text-xs">
                                    shrink: 1
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .item-1 {'{ flex-shrink: 0; }'} /* Won't shrink */
                            </code>
                        </div>

                        {/* Flex Basis Demo */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Flex Basis Demo</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Flex-basis sets the initial size of an item before free space is distributed.
                            </p>
                            <div className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 min-h-[80px]">
                                <div className="bg-indigo-500 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{flexBasis: '100px'}}>
                                    basis: 100px
                                </div>
                                <div className="bg-teal-500 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{flexBasis: '200px'}}>
                                    basis: 200px
                                </div>
                                <div className="bg-orange-500 text-white p-3 rounded font-bold text-center flex items-center justify-center" style={{flexBasis: 'auto'}}>
                                    basis: auto
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .item {'{ flex-basis: 200px; }'} /* Initial size */
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Flex Shorthand Demo */}
            <Card className="border-teal-200 bg-teal-50/50 dark:bg-teal-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                        <Code className="w-5 h-5" />
                        Flex Shorthand Property
                    </CardTitle>
                    <CardDescription>
                        The flex shorthand combines flex-grow, flex-shrink, and flex-basis into one property.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Common Flex Values */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3">flex: 1</h4>
                                <div className="flex gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3">
                                    <div className="bg-blue-500 text-white p-2 rounded text-center flex-1">Item 1</div>
                                    <div className="bg-green-500 text-white p-2 rounded text-center flex-1">Item 2</div>
                                    <div className="bg-red-500 text-white p-2 rounded text-center flex-1">Item 3</div>
                                </div>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                    flex: 1; /* grow: 1, shrink: 1, basis: 0% */
                                </code>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3">flex: auto</h4>
                                <div className="flex gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3">
                                    <div className="bg-purple-500 text-white p-2 rounded text-center" style={{flex: 'auto'}}>Short</div>
                                    <div className="bg-yellow-500 text-black p-2 rounded text-center" style={{flex: 'auto'}}>Medium Content</div>
                                    <div className="bg-pink-500 text-white p-2 rounded text-center" style={{flex: 'auto'}}>Very Long Content Here</div>
                                </div>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                    flex: auto; /* grow: 1, shrink: 1, basis: auto */
                                </code>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3">flex: none</h4>
                                <div className="flex gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3">
                                    <div className="bg-indigo-500 text-white p-2 rounded text-center" style={{flex: 'none'}}>Fixed</div>
                                    <div className="bg-teal-500 text-white p-2 rounded text-center flex-1">Flexible</div>
                                    <div className="bg-orange-500 text-white p-2 rounded text-center" style={{flex: 'none'}}>Fixed</div>
                                </div>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                    flex: none; /* grow: 0, shrink: 0, basis: auto */
                                </code>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3">flex: 0 1 200px</h4>
                                <div className="flex gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3">
                                    <div className="bg-cyan-500 text-white p-2 rounded text-center" style={{flex: '0 1 200px'}}>200px base</div>
                                    <div className="bg-lime-500 text-black p-2 rounded text-center flex-1">Flexible</div>
                                </div>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                    flex: 0 1 200px; /* Custom values */
                                </code>
                            </div>
                        </div>

                        {/* Flex Shorthand Reference */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Flex Shorthand Reference</h4>
                            <div className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                                <p><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">flex: 1</code> = Equal distribution of space</p>
                                <p><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">flex: auto</code> = Size based on content, then distribute extra space</p>
                                <p><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">flex: none</code> = Fixed size, no growing or shrinking</p>
                                <p><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">flex: 0 1 auto</code> = Default value (don't grow, can shrink)</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Flex Wrap Demo */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <WrapText className="w-5 h-5" />
                        Flex Wrap & Multi-line Layouts
                    </CardTitle>
                    <CardDescription>
                        Control how flex items wrap to new lines and align multiple lines with align-content.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Flex Wrap Demo */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">flex-wrap: wrap</h4>
                            <div className="flex flex-wrap gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 max-w-[400px]">
                                {Array.from({length: 8}, (_, i) => (
                                    <div key={i} className={`text-white p-3 rounded font-bold text-center min-w-[80px] ${
                                        i % 4 === 0 ? 'bg-blue-500' :
                                        i % 4 === 1 ? 'bg-green-500' :
                                        i % 4 === 2 ? 'bg-red-500' : 'bg-purple-500'
                                    }`}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .container {'{ flex-wrap: wrap; }'} /* Items wrap to new lines */
                            </code>
                        </div>

                        {/* Align Content Demo */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">align-content: space-between</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                align-content controls the alignment of wrapped lines (only works with multiple lines).
                            </p>
                            <div className="flex flex-wrap content-between gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 h-[200px] max-w-[300px]">
                                {Array.from({length: 6}, (_, i) => (
                                    <div key={i} className={`text-white p-2 rounded font-bold text-center min-w-[60px] text-sm ${
                                        i % 3 === 0 ? 'bg-indigo-500' :
                                        i % 3 === 1 ? 'bg-teal-500' : 'bg-orange-500'
                                    }`}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .container {'{ align-content: space-between; }'} /* Distributes lines */
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Real-World Flex Patterns */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Grid3X3 className="w-5 h-5" />
                        Real-World Flex Patterns
                    </CardTitle>
                    <CardDescription>
                        Common layout patterns using flexbox that you'll use in real projects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Sticky Footer */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Sticky Footer Layout</h4>
                            <div className="flex flex-col h-[200px] bg-gray-100 dark:bg-gray-700 rounded border">
                                <div className="bg-blue-500 text-white p-3 text-center font-bold">Header</div>
                                <div className="flex-1 bg-gray-200 dark:bg-gray-600 p-3 text-center">
                                    Main Content (grows to fill space)
                                </div>
                                <div className="bg-gray-800 text-white p-3 text-center font-bold">Footer</div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .container {'{ display: flex; flex-direction: column; min-height: 100vh; }'}<br/>
                                .main {'{ flex: 1; }'} /* Takes remaining space */
                            </code>
                        </div>

                        {/* Media Object */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Media Object Pattern</h4>
                            <div className="flex gap-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                    IMG
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-bold mb-2">Media Title</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        This is the media content that flows alongside the image. The text area grows to fill the available space while the image maintains its fixed size.
                                    </p>
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .media {'{ display: flex; gap: 1rem; }'}<br/>
                                .media-content {'{ flex: 1; }'} /* Text takes remaining space */
                            </code>
                        </div>

                        {/* Input Group */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Input Group with Button</h4>
                            <div className="flex bg-gray-100 dark:bg-gray-700 rounded p-2">
                                <input 
                                    type="text" 
                                    placeholder="Enter your email..." 
                                    className="flex-1 px-3 py-2 border-0 bg-white dark:bg-gray-600 rounded-l focus:outline-none"
                                />
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .input-group {'{ display: flex; }'}<br/>
                                .input {'{ flex: 1; }'} /* Input takes available space */
                            </code>
                        </div>

                        {/* Card Grid with Equal Heights */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Equal Height Cards</h4>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-lg">
                                    <h5 className="font-bold mb-2">Card 1</h5>
                                    <p className="text-sm">Short content here.</p>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-green-500 to-teal-600 text-white p-4 rounded-lg">
                                    <h5 className="font-bold mb-2">Card 2</h5>
                                    <p className="text-sm">This card has much more content to demonstrate how flexbox automatically makes all cards the same height regardless of content length.</p>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-red-500 to-pink-600 text-white p-4 rounded-lg">
                                    <h5 className="font-bold mb-2">Card 3</h5>
                                    <p className="text-sm">Medium amount of content in this card.</p>
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .card-container {'{ display: flex; gap: 1rem; }'}<br/>
                                .card {'{ flex: 1; }'} /* Equal width, automatic equal height */
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Flexbox Best Practices */}
            <Card className="border-violet-200 bg-violet-50/50 dark:bg-violet-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-violet-700 dark:text-violet-300">
                        <CheckCircle className="w-5 h-5" />
                        Flexbox Best Practices & Tips
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines and common pitfalls to avoid when using flexbox.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                ✅ Best Practices
                            </h4>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                                <li>• Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">flex: 1</code> for equal distribution</li>
                                <li>• Prefer <code className="bg-green-200 dark:bg-green-800 px-1 rounded">gap</code> property over margins for spacing</li>
                                <li>• Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">align-items: center</code> for vertical centering</li>
                                <li>• Combine with CSS Grid for complex layouts</li>
                                <li>• Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">flex-wrap: wrap</code> for responsive designs</li>
                                <li>• Test with different content lengths</li>
                                <li>• Use semantic HTML with flexbox styling</li>
                            </ul>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Common Pitfalls
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                                <li>• Don't use flexbox for overall page layout (use Grid)</li>
                                <li>• Avoid setting width on flex items (use flex-basis)</li>
                                <li>• Don't forget <code className="bg-red-200 dark:bg-red-800 px-1 rounded">min-width: 0</code> for text overflow</li>
                                <li>• Be careful with <code className="bg-red-200 dark:bg-red-800 px-1 rounded">flex-shrink: 0</code> on mobile</li>
                                <li>• Don't use flexbox for simple centering (use Grid)</li>
                                <li>• Avoid complex nested flex containers</li>
                                <li>• Test accessibility with screen readers</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Performance Tips</h4>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Flexbox is optimized for one-dimensional layouts</li>
                            <li>• Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">will-change: transform</code> for animated flex items</li>
                            <li>• Avoid frequent changes to flex properties during animations</li>
                            <li>• Consider CSS Grid for two-dimensional layouts</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Flexbox Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive flexbox examples including direction control, alignment options, wrapping behavior, and real-world layout patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Flexbox Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <ArrowRightLeft className="w-3 h-3" />
                            Direction Control
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <AlignEndVertical className="w-3 h-3" />
                            Justify Content
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <AlignStartVertical className="w-3 h-3" />
                            Align Items
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <WrapText className="w-3 h-3" />
                            Flex Wrap
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Maximize className="w-3 h-3" />
                            Item Properties
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Layout className="w-3 h-3" />
                            Real Examples
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
