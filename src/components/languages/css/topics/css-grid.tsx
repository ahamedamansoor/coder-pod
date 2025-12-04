'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Grid, LayoutDashboard, Rows, Columns, Lightbulb, Box,
    ArrowRightLeft, ArrowUpDown, Maximize, Minimize, RotateCcw,
    Settings, Target, CheckCircle, AlertTriangle, Code, Hash,
    Plus, Minus, Zap, Monitor, Smartphone, Grid3X3
} from 'lucide-react';

interface CssGridProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssGrid({ onOpenWebPlayground }: CssGridProps) {
    const [selectedColumns, setSelectedColumns] = useState('repeat(3, 1fr)');
    const [selectedRows, setSelectedRows] = useState('repeat(2, 100px)');
    const [selectedGap, setSelectedGap] = useState('1rem');

    // Grid Template Columns Options
    const columnOptions = [
        {
            value: 'repeat(3, 1fr)',
            name: '3 Equal Columns',
            desc: 'Three columns of equal width',
            visual: '|---|---|---|'
        },
        {
            value: '200px 1fr 100px',
            name: 'Fixed-Flexible-Fixed',
            desc: 'Fixed sidebar, flexible main, fixed aside',
            visual: '|200px|flexible|100px|'
        },
        {
            value: 'repeat(auto-fit, minmax(200px, 1fr))',
            name: 'Responsive Cards',
            desc: 'Auto-fitting columns with minimum 200px width',
            visual: 'Auto-responsive columns'
        },
        {
            value: '1fr 2fr 1fr',
            name: 'Proportional',
            desc: 'Columns in 1:2:1 ratio',
            visual: '|1fr|--2fr--|1fr|'
        }
    ];

    // Grid Template Rows Options
    const rowOptions = [
        {
            value: 'repeat(2, 100px)',
            name: 'Fixed Height Rows',
            desc: 'Two rows of 100px each',
            visual: '100px each'
        },
        {
            value: 'auto 1fr auto',
            name: 'Header-Main-Footer',
            desc: 'Auto header, flexible main, auto footer',
            visual: 'auto|flex|auto'
        },
        {
            value: 'repeat(3, minmax(100px, auto))',
            name: 'Minimum Height',
            desc: 'Rows with minimum 100px, grow as needed',
            visual: 'min 100px, auto grow'
        }
    ];

    // Grid Container Properties
    const containerProperties = [
        {
            name: 'display',
            icon: Grid,
            values: ['grid', 'inline-grid'],
            desc: 'Establishes a grid formatting context',
            example: 'display: grid;'
        },
        {
            name: 'grid-template-columns',
            icon: Columns,
            values: ['1fr 1fr 1fr', 'repeat(3, 1fr)', '200px 1fr', 'auto auto auto'],
            desc: 'Defines the columns of the grid',
            example: 'grid-template-columns: 1fr 2fr 1fr;'
        },
        {
            name: 'grid-template-rows',
            icon: Rows,
            values: ['auto 1fr auto', 'repeat(3, 100px)', 'minmax(100px, auto)'],
            desc: 'Defines the rows of the grid',
            example: 'grid-template-rows: auto 1fr auto;'
        },
        {
            name: 'gap',
            icon: Plus,
            values: ['1rem', '10px 20px', '2rem', '0'],
            desc: 'Sets the gap between grid tracks',
            example: 'gap: 1rem 2rem;'
        },
        {
            name: 'grid-template-areas',
            icon: LayoutDashboard,
            values: ['"header header" "sidebar main"', '"nav main aside"'],
            desc: 'Defines named grid areas',
            example: 'grid-template-areas: "header header";'
        },
        {
            name: 'justify-items',
            icon: ArrowRightLeft,
            values: ['start', 'end', 'center', 'stretch'],
            desc: 'Aligns grid items along the inline axis',
            example: 'justify-items: center;'
        },
        {
            name: 'align-items',
            icon: ArrowUpDown,
            values: ['start', 'end', 'center', 'stretch'],
            desc: 'Aligns grid items along the block axis',
            example: 'align-items: center;'
        }
    ];

    // Grid Item Properties
    const itemProperties = [
        {
            name: 'grid-column',
            icon: ArrowRightLeft,
            desc: 'Determines item\'s location within the grid columns',
            example: 'grid-column: 1 / 3;',
            values: '1 / 3 | span 2 | 2 / -1'
        },
        {
            name: 'grid-row',
            icon: ArrowUpDown,
            desc: 'Determines item\'s location within the grid rows',
            example: 'grid-row: 2 / 4;',
            values: '2 / 4 | span 2 | 1 / -1'
        },
        {
            name: 'grid-area',
            icon: Box,
            desc: 'Assigns item to a named grid area or defines position',
            example: 'grid-area: header;',
            values: 'header | 1 / 1 / 3 / 3'
        },
        {
            name: 'justify-self',
            icon: Target,
            desc: 'Aligns individual item along the inline axis',
            example: 'justify-self: center;',
            values: 'start | end | center | stretch'
        },
        {
            name: 'align-self',
            icon: Target,
            desc: 'Aligns individual item along the block axis',
            example: 'align-self: end;',
            values: 'start | end | center | stretch'
        }
    ];

    // Grid Layout Patterns
    const layoutPatterns = [
        {
            name: 'Holy Grail Layout',
            desc: 'Classic three-column layout with header and footer',
            areas: '"header header header" "nav main aside" "footer footer footer"',
            useCase: 'Traditional web layouts, blogs'
        },
        {
            name: 'Card Grid',
            desc: 'Responsive card layout that adapts to screen size',
            areas: 'repeat(auto-fit, minmax(250px, 1fr))',
            useCase: 'Product catalogs, image galleries'
        },
        {
            name: 'Dashboard Layout',
            desc: 'Complex dashboard with multiple widgets',
            areas: '"header header header header" "sidebar main main aside" "sidebar footer footer aside"',
            useCase: 'Admin panels, analytics dashboards'
        },
        {
            name: 'Magazine Layout',
            desc: 'Asymmetric layout with varying content sizes',
            areas: '"title title image" "content content image" "content sidebar sidebar"',
            useCase: 'News sites, editorial layouts'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Grid Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Grid: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Basic Grid Layout</h2>
            <div class="controls">
                <button onclick="changeColumns('repeat(3, 1fr)')">3 Equal Columns</button>
                <button onclick="changeColumns('200px 1fr 100px')">Fixed-Flex-Fixed</button>
                <button onclick="changeColumns('1fr 2fr 1fr')">1:2:1 Ratio</button>
                <button onclick="changeColumns('repeat(auto-fit, minmax(150px, 1fr))')">Auto-Fit</button>
            </div>
            <div class="grid-demo" id="basicGrid">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Grid Template Areas</h2>
            <div class="controls">
                <button onclick="changeLayout('holy-grail')">Holy Grail</button>
                <button onclick="changeLayout('dashboard')">Dashboard</button>
                <button onclick="changeLayout('magazine')">Magazine</button>
                <button onclick="changeLayout('simple')">Simple</button>
            </div>
            <div class="layout-demo" id="layoutDemo">
                <div class="area-item header">Header</div>
                <div class="area-item nav">Nav</div>
                <div class="area-item main">Main Content</div>
                <div class="area-item aside">Aside</div>
                <div class="area-item footer">Footer</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Grid Item Placement</h2>
            <div class="controls">
                <button onclick="toggleSpanning()">Toggle Spanning</button>
                <button onclick="changeItemPosition()">Change Positions</button>
                <button onclick="resetPlacement()">Reset</button>
            </div>
            <div class="placement-demo" id="placementDemo">
                <div class="placement-item" id="item1">A</div>
                <div class="placement-item" id="item2">B</div>
                <div class="placement-item" id="item3">C</div>
                <div class="placement-item" id="item4">D</div>
                <div class="placement-item" id="item5">E</div>
                <div class="placement-item" id="item6">F</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Responsive Grid Examples</h2>
            
            <h3>Auto-Fit Cards</h3>
            <div class="card-grid">
                <div class="card">
                    <h4>Card 1</h4>
                    <p>Responsive card that adapts to screen size.</p>
                </div>
                <div class="card">
                    <h4>Card 2</h4>
                    <p>These cards automatically wrap to new lines as needed.</p>
                </div>
                <div class="card">
                    <h4>Card 3</h4>
                    <p>Perfect for product catalogs and galleries.</p>
                </div>
                <div class="card">
                    <h4>Card 4</h4>
                    <p>Minimum width ensures readability.</p>
                </div>
            </div>
            
            <h3>Dashboard Layout</h3>
            <div class="dashboard">
                <div class="widget header-widget">Dashboard Header</div>
                <div class="widget sidebar-widget">Navigation</div>
                <div class="widget main-widget">Main Content Area</div>
                <div class="widget stats-widget">Statistics</div>
                <div class="widget chart-widget">Charts</div>
                <div class="widget footer-widget">Footer</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Advanced Grid Techniques</h2>
            
            <h3>Subgrid Example</h3>
            <div class="subgrid-demo">
                <div class="subgrid-item">
                    <h4>Nested Grid</h4>
                    <div class="nested-grid">
                        <div class="nested-item">A</div>
                        <div class="nested-item">B</div>
                        <div class="nested-item">C</div>
                        <div class="nested-item">D</div>
                    </div>
                </div>
                <div class="subgrid-item">
                    <h4>Regular Content</h4>
                    <p>This demonstrates how grids can be nested within grid items.</p>
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

/* Basic Grid Demo */
.grid-demo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    border: 2px dashed #dee2e6;
    transition: all 0.3s ease;
}

.grid-item {
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.grid-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.grid-item:nth-child(1) { background: linear-gradient(135deg, #007bff, #0056b3); }
.grid-item:nth-child(2) { background: linear-gradient(135deg, #28a745, #1e7e34); }
.grid-item:nth-child(3) { background: linear-gradient(135deg, #dc3545, #c82333); }
.grid-item:nth-child(4) { background: linear-gradient(135deg, #ffc107, #e0a800); }
.grid-item:nth-child(5) { background: linear-gradient(135deg, #6f42c1, #5a32a3); }
.grid-item:nth-child(6) { background: linear-gradient(135deg, #fd7e14, #e8650e); }

/* Layout Demo */
.layout-demo {
    display: grid;
    grid-template-areas: 
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    height: 300px;
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border: 2px dashed #dee2e6;
}

.area-item {
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    text-align: center;
}

.header { grid-area: header; background: #007bff; }
.nav { grid-area: nav; background: #28a745; }
.main { grid-area: main; background: #6c757d; }
.aside { grid-area: aside; background: #ffc107; color: #333; }
.footer { grid-area: footer; background: #dc3545; }

/* Placement Demo */
.placement-demo {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 80px);
    gap: 0.5rem;
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border: 2px dashed #dee2e6;
}

.placement-item {
    background: #17a2b8;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.placement-item:hover {
    background: #138496;
    transform: scale(1.1);
}

/* Card Grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.card {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.card h4 {
    color: #007bff;
    margin-bottom: 0.5rem;
}

/* Dashboard Layout */
.dashboard {
    display: grid;
    grid-template-areas:
        "header header header header"
        "sidebar main main stats"
        "sidebar main main chart"
        "footer footer footer footer";
    grid-template-columns: 200px 1fr 1fr 200px;
    grid-template-rows: auto 1fr 1fr auto;
    gap: 1rem;
    height: 400px;
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.widget {
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    text-align: center;
}

.header-widget { grid-area: header; background: #343a40; }
.sidebar-widget { grid-area: sidebar; background: #007bff; }
.main-widget { grid-area: main; background: #6c757d; }
.stats-widget { grid-area: stats; background: #28a745; }
.chart-widget { grid-area: chart; background: #ffc107; color: #333; }
.footer-widget { grid-area: footer; background: #dc3545; }

/* Subgrid Demo */
.subgrid-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
}

.subgrid-item {
    background: white;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #dee2e6;
}

.nested-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin-top: 1rem;
}

.nested-item {
    background: #e9ecef;
    padding: 0.5rem;
    text-align: center;
    border-radius: 3px;
    font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .controls { justify-content: center; }
    .layout-demo {
        grid-template-areas: 
            "header"
            "nav"
            "main"
            "aside"
            "footer";
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr auto auto;
    }
    .dashboard {
        grid-template-areas:
            "header"
            "sidebar"
            "main"
            "stats"
            "chart"
            "footer";
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, auto);
    }
    .card-grid {
        grid-template-columns: 1fr;
    }
}`,
        js: `// Interactive CSS Grid Demo
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Grid Demo loaded successfully!');

    // Basic Grid Column Changes
    window.changeColumns = function(columns) {
        const grid = document.getElementById('basicGrid');
        grid.style.gridTemplateColumns = columns;
        
        // Update button states
        const buttons = grid.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log('Grid columns changed to:', columns);
    };

    // Layout Changes
    const layouts = {
        'holy-grail': {
            areas: '"header header header" "nav main aside" "footer footer footer"',
            columns: '200px 1fr 150px',
            rows: 'auto 1fr auto'
        },
        'dashboard': {
            areas: '"header header header header" "sidebar main main aside" "sidebar footer footer aside"',
            columns: '150px 1fr 1fr 150px',
            rows: 'auto 1fr auto'
        },
        'magazine': {
            areas: '"header header aside" "nav main aside" "footer main aside"',
            columns: '150px 1fr 200px',
            rows: 'auto 1fr auto'
        },
        'simple': {
            areas: '"header header" "main aside" "footer footer"',
            columns: '1fr 200px',
            rows: 'auto 1fr auto'
        }
    };

    window.changeLayout = function(layoutName) {
        const layout = layouts[layoutName];
        const demo = document.getElementById('layoutDemo');
        
        demo.style.gridTemplateAreas = layout.areas;
        demo.style.gridTemplateColumns = layout.columns;
        demo.style.gridTemplateRows = layout.rows;
        
        // Update button states
        const buttons = demo.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log('Layout changed to:', layoutName);
    };

    // Item Placement Demo
    let spanningState = false;
    let positionState = 0;

    window.toggleSpanning = function() {
        const item1 = document.getElementById('item1');
        const item2 = document.getElementById('item2');
        
        spanningState = !spanningState;
        
        if (spanningState) {
            item1.style.gridColumn = 'span 2';
            item2.style.gridRow = 'span 2';
            event.target.textContent = 'Remove Spanning';
            event.target.classList.add('active');
        } else {
            item1.style.gridColumn = 'auto';
            item2.style.gridRow = 'auto';
            event.target.textContent = 'Toggle Spanning';
            event.target.classList.remove('active');
        }
        
        console.log('Spanning toggled:', spanningState);
    };

    window.changeItemPosition = function() {
        const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
        positionState = (positionState + 1) % 3;
        
        // Reset all positions
        items.forEach(id => {
            const item = document.getElementById(id);
            item.style.gridColumn = 'auto';
            item.style.gridRow = 'auto';
        });
        
        if (positionState === 1) {
            document.getElementById('item1').style.gridColumn = '1 / 3';
            document.getElementById('item3').style.gridRow = '2 / 4';
            event.target.textContent = 'Position Set 1';
        } else if (positionState === 2) {
            document.getElementById('item2').style.gridColumn = '2 / 4';
            document.getElementById('item4').style.gridRow = '1 / 3';
            event.target.textContent = 'Position Set 2';
        } else {
            event.target.textContent = 'Change Positions';
        }
        
        console.log('Position state:', positionState);
    };

    window.resetPlacement = function() {
        const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
        items.forEach(id => {
            const item = document.getElementById(id);
            item.style.gridColumn = 'auto';
            item.style.gridRow = 'auto';
        });
        
        // Reset button states
        const buttons = document.querySelectorAll('#placementDemo .controls button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.includes('Spanning')) btn.textContent = 'Toggle Spanning';
            if (btn.textContent.includes('Position')) btn.textContent = 'Change Positions';
        });
        
        spanningState = false;
        positionState = 0;
        
        console.log('All placement reset');
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

    // Add hover effects to grid items
    const gridItems = document.querySelectorAll('.grid-item, .placement-item, .area-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            console.log('Hovering over grid item:', this.textContent);
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .widget');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            console.log('Hovering over card/widget:', this.textContent.substring(0, 20));
        });
    });

    console.log('All interactive grid demos initialized!');
});`
    };

    return (
        <div className="space-y-8">
            <PageHeader
                icon={Grid}
                category="CSS · Modern Layout"
                title="CSS Grid"
                description="Master two-dimensional layouts with comprehensive grid techniques and interactive examples"
                colorTheme="blue"
            />

            {/* Live Grid Template Columns Demo */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Columns className="w-5 h-5" />
                        Live Grid Template Columns Demo
                    </CardTitle>
                    <CardDescription>
                        Click the buttons to see how different grid-template-columns values create various layouts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {columnOptions.map((option) => (
                                <Button
                                    key={option.value}
                                    variant={selectedColumns === option.value ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedColumns(option.value)}
                                >
                                    {option.name}
                                </Button>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div 
                                className="grid gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 min-h-[120px]"
                                style={{ gridTemplateColumns: selectedColumns }}
                            >
                                {Array.from({length: 6}, (_, i) => (
                                    <div key={i} className={`text-white p-3 rounded font-bold text-center flex items-center justify-center ${
                                        i % 6 === 0 ? 'bg-blue-500' :
                                        i % 6 === 1 ? 'bg-green-500' :
                                        i % 6 === 2 ? 'bg-red-500' :
                                        i % 6 === 3 ? 'bg-yellow-500 text-black' :
                                        i % 6 === 4 ? 'bg-purple-500' : 'bg-orange-500'
                                    }`}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                <strong>Visual:</strong> <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">{columnOptions.find(o => o.value === selectedColumns)?.visual}</code>
                                <br />
                                <strong>Description:</strong> {columnOptions.find(o => o.value === selectedColumns)?.desc}
                            </div>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                            .grid-container {'{'}
                            <br />
                            {'  '}display: grid;
                            <br />
                            {'  '}grid-template-columns: {selectedColumns};
                            <br />
                            {'  '}gap: 1rem;
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Live Grid Template Areas Demo */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <LayoutDashboard className="w-5 h-5" />
                        Live Grid Template Areas Demo
                    </CardTitle>
                    <CardDescription>
                        See how grid-template-areas creates semantic, readable layouts with named grid areas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Holy Grail Layout */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Holy Grail Layout</h4>
                            <div className="grid gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 h-[200px]" style={{
                                gridTemplateAreas: '"header header header" "nav main aside" "footer footer footer"',
                                gridTemplateColumns: '150px 1fr 150px',
                                gridTemplateRows: 'auto 1fr auto'
                            }}>
                                <div className="bg-blue-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'header'}}>
                                    Header
                                </div>
                                <div className="bg-green-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'nav'}}>
                                    Nav
                                </div>
                                <div className="bg-gray-600 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'main'}}>
                                    Main Content
                                </div>
                                <div className="bg-yellow-500 text-black p-2 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'aside'}}>
                                    Aside
                                </div>
                                <div className="bg-red-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridArea: 'footer'}}>
                                    Footer
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                grid-template-areas:<br/>
                                {'  '}"header header header"<br/>
                                {'  '}"nav main aside"<br/>
                                {'  '}"footer footer footer";
                            </code>
                        </div>

                        {/* Dashboard Layout */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Dashboard Layout</h4>
                            <div className="grid gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 h-[250px]" style={{
                                gridTemplateAreas: '"header header header header" "sidebar main main stats" "sidebar main main chart" "footer footer footer footer"',
                                gridTemplateColumns: '120px 1fr 1fr 120px',
                                gridTemplateRows: 'auto 1fr 1fr auto'
                            }}>
                                <div className="bg-gray-800 text-white p-2 rounded font-bold text-center flex items-center justify-center text-xs" style={{gridArea: 'header'}}>
                                    Dashboard Header
                                </div>
                                <div className="bg-blue-500 text-white p-2 rounded font-bold text-center flex items-center justify-center text-xs" style={{gridArea: 'sidebar'}}>
                                    Sidebar
                                </div>
                                <div className="bg-gray-600 text-white p-2 rounded font-bold text-center flex items-center justify-center text-xs" style={{gridArea: 'main'}}>
                                    Main Content
                                </div>
                                <div className="bg-green-500 text-white p-2 rounded font-bold text-center flex items-center justify-center text-xs" style={{gridArea: 'stats'}}>
                                    Stats
                                </div>
                                <div className="bg-yellow-500 text-black p-2 rounded font-bold text-center flex items-center justify-center text-xs" style={{gridArea: 'chart'}}>
                                    Chart
                                </div>
                                <div className="bg-red-500 text-white p-2 rounded font-bold text-center flex items-center justify-center text-xs" style={{gridArea: 'footer'}}>
                                    Footer
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                grid-template-areas:<br/>
                                {'  '}"header header header header"<br/>
                                {'  '}"sidebar main main stats"<br/>
                                {'  '}"sidebar main main chart"<br/>
                                {'  '}"footer footer footer footer";
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Grid Item Placement Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Target className="w-5 h-5" />
                        Grid Item Placement & Spanning
                    </CardTitle>
                    <CardDescription>
                        Control exactly where grid items are placed using grid-column, grid-row, and spanning.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Basic Placement */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Grid Line Placement</h4>
                            <div className="grid grid-cols-4 grid-rows-3 gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 h-[200px]">
                                <div className="bg-blue-500 text-white p-2 rounded font-bold text-center flex items-center justify-center col-span-2">
                                    A (span 2 columns)
                                </div>
                                <div className="bg-green-500 text-white p-2 rounded font-bold text-center flex items-center justify-center">
                                    B
                                </div>
                                <div className="bg-red-500 text-white p-2 rounded font-bold text-center flex items-center justify-center row-span-2">
                                    C (span 2 rows)
                                </div>
                                <div className="bg-yellow-500 text-black p-2 rounded font-bold text-center flex items-center justify-center">
                                    D
                                </div>
                                <div className="bg-purple-500 text-white p-2 rounded font-bold text-center flex items-center justify-center">
                                    E
                                </div>
                                <div className="bg-orange-500 text-white p-2 rounded font-bold text-center flex items-center justify-center">
                                    F
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .item-a {'{ grid-column: span 2; }'} /* Spans 2 columns */<br/>
                                .item-c {'{ grid-row: span 2; }'} /* Spans 2 rows */
                            </code>
                        </div>

                        {/* Explicit Positioning */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Explicit Grid Positioning</h4>
                            <div className="grid grid-cols-4 grid-rows-3 gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 h-[200px]">
                                <div className="bg-indigo-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridColumn: '1 / 3', gridRow: '1 / 2'}}>
                                    1/3, 1/2
                                </div>
                                <div className="bg-teal-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridColumn: '3 / 5', gridRow: '2 / 4'}}>
                                    3/5, 2/4
                                </div>
                                <div className="bg-pink-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridColumn: '1 / 2', gridRow: '2 / 4'}}>
                                    1/2, 2/4
                                </div>
                                <div className="bg-cyan-500 text-white p-2 rounded font-bold text-center flex items-center justify-center" style={{gridColumn: '2 / 3', gridRow: '2 / 3'}}>
                                    2/3, 2/3
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                .item {'{ grid-column: 1 / 3; grid-row: 1 / 2; }'}<br/>
                                /* Start at line 1, end at line 3 (columns) */
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Responsive Grid Patterns */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Monitor className="w-5 h-5" />
                        Responsive Grid Patterns
                    </CardTitle>
                    <CardDescription>
                        Real-world responsive layouts using auto-fit, minmax, and other advanced grid techniques.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Auto-Fit Cards */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Auto-Fit Card Grid</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Cards automatically adjust to screen size with minimum width constraints.
                            </p>
                            <div className="grid gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                                {Array.from({length: 6}, (_, i) => (
                                    <div key={i} className={`text-white p-4 rounded font-bold text-center ${
                                        i % 6 === 0 ? 'bg-blue-500' :
                                        i % 6 === 1 ? 'bg-green-500' :
                                        i % 6 === 2 ? 'bg-red-500' :
                                        i % 6 === 3 ? 'bg-yellow-500 text-black' :
                                        i % 6 === 4 ? 'bg-purple-500' : 'bg-orange-500'
                                    }`}>
                                        <h5 className="font-bold mb-1">Card {i + 1}</h5>
                                        <p className="text-xs opacity-90">Responsive content</p>
                                    </div>
                                ))}
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            </code>
                        </div>

                        {/* Dense Grid */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Dense Grid Layout</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                grid-auto-flow: dense fills gaps automatically for masonry-like layouts.
                            </p>
                            <div className="grid grid-cols-4 gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300" style={{gridAutoFlow: 'dense'}}>
                                <div className="bg-blue-500 text-white p-3 rounded font-bold text-center flex items-center justify-center col-span-2">
                                    Wide
                                </div>
                                <div className="bg-green-500 text-white p-3 rounded font-bold text-center flex items-center justify-center">
                                    1
                                </div>
                                <div className="bg-red-500 text-white p-3 rounded font-bold text-center flex items-center justify-center row-span-2">
                                    Tall
                                </div>
                                <div className="bg-yellow-500 text-black p-3 rounded font-bold text-center flex items-center justify-center">
                                    2
                                </div>
                                <div className="bg-purple-500 text-white p-3 rounded font-bold text-center flex items-center justify-center">
                                    3
                                </div>
                                <div className="bg-orange-500 text-white p-3 rounded font-bold text-center flex items-center justify-center col-span-3">
                                    Extra Wide
                                </div>
                                <div className="bg-pink-500 text-white p-3 rounded font-bold text-center flex items-center justify-center">
                                    4
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block mt-3">
                                grid-auto-flow: dense; /* Fills gaps automatically */
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Grid Best Practices */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <CheckCircle className="w-5 h-5" />
                        Grid Best Practices & Tips
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines and common patterns for effective CSS Grid usage.
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
                                <li>• Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">fr</code> units for flexible sizing</li>
                                <li>• Prefer <code className="bg-green-200 dark:bg-green-800 px-1 rounded">grid-template-areas</code> for semantic layouts</li>
                                <li>• Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">minmax()</code> for responsive designs</li>
                                <li>• Combine with Flexbox for component-level layouts</li>
                                <li>• Use <code className="bg-green-200 dark:bg-green-800 px-1 rounded">auto-fit</code> for responsive card grids</li>
                                <li>• Test with different content lengths</li>
                                <li>• Use named grid lines for complex layouts</li>
                            </ul>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Common Pitfalls
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                                <li>• Don't use Grid for simple one-dimensional layouts</li>
                                <li>• Avoid fixed pixel values for responsive designs</li>
                                <li>• Don't forget <code className="bg-red-200 dark:bg-red-800 px-1 rounded">gap</code> property for spacing</li>
                                <li>• Be careful with <code className="bg-red-200 dark:bg-red-800 px-1 rounded">grid-auto-flow: dense</code> and accessibility</li>
                                <li>• Don't overcomplicate simple layouts</li>
                                <li>• Test on various screen sizes</li>
                                <li>• Consider browser support for older features</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Grid vs Flexbox</h4>
                        <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <p><strong>Use Grid for:</strong> Two-dimensional layouts, page-level structure, complex positioning</p>
                            <p><strong>Use Flexbox for:</strong> One-dimensional layouts, component alignment, navigation bars</p>
                            <p><strong>Combine both:</strong> Grid for page layout, Flexbox for component internals</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Grid Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive grid examples including template areas, item placement, responsive patterns, and advanced techniques.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Grid Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Columns className="w-3 h-3" />
                            Template Columns
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <LayoutDashboard className="w-3 h-3" />
                            Template Areas
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Item Placement
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Monitor className="w-3 h-3" />
                            Responsive Patterns
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Grid3X3 className="w-3 h-3" />
                            Advanced Techniques
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Interactive Demos
                        </Badge>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
