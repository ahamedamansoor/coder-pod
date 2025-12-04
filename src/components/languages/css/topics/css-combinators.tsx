
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Link, Plus, GitMerge, Waves, ArrowRight, ArrowDown,
    Users, User, Target, Eye, Settings, CheckCircle, AlertTriangle,
    Zap, Grid3X3, Monitor, Smartphone, Code, TreePine
} from 'lucide-react';

interface CssCombinatorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssCombinators({ onOpenWebPlayground }: CssCombinatorsProps) {
    const [selectedCombinator, setSelectedCombinator] = useState('descendant');

    // Comprehensive Combinator Types
    const combinatorTypes = [
        {
            name: 'descendant',
            symbol: ' ',
            icon: TreePine,
            title: 'Descendant Selector',
            syntax: 'div p',
            desc: 'Selects all elements that are descendants (nested inside) of a specified element, regardless of depth.',
            relationship: 'Any level nested',
            specificity: 'Low',
            performance: 'Slower (searches deep)',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200',
            useCase: 'Styling all nested elements of a type'
        },
        {
            name: 'child',
            symbol: '>',
            icon: ArrowDown,
            title: 'Child Selector',
            syntax: 'div > p',
            desc: 'Selects elements that are direct children (one level down) of a specified element.',
            relationship: 'Direct children only',
            specificity: 'Medium',
            performance: 'Faster (one level only)',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200',
            useCase: 'Styling immediate children only'
        },
        {
            name: 'adjacent',
            symbol: '+',
            icon: Plus,
            title: 'Adjacent Sibling Selector',
            syntax: 'h1 + p',
            desc: 'Selects the first element that immediately follows another specified element (same parent).',
            relationship: 'Next sibling only',
            specificity: 'Medium',
            performance: 'Fast (single element)',
            color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300',
            textColor: 'text-purple-800 dark:text-purple-200',
            useCase: 'First paragraph after heading'
        },
        {
            name: 'general',
            symbol: '~',
            icon: Waves,
            title: 'General Sibling Selector',
            syntax: 'h1 ~ p',
            desc: 'Selects all elements that are siblings of a specified element and come after it (same parent).',
            relationship: 'All following siblings',
            specificity: 'Medium',
            performance: 'Medium (multiple elements)',
            color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300',
            textColor: 'text-orange-800 dark:text-orange-200',
            useCase: 'All paragraphs after heading'
        }
    ];

    // Practical Examples
    const practicalExamples = [
        {
            name: 'Navigation Styling',
            html: 'nav ul li a',
            desc: 'Style all links inside navigation lists',
            useCase: 'Menu styling'
        },
        {
            name: 'Form Labels',
            html: 'form > label',
            desc: 'Style direct label children of forms',
            useCase: 'Form layout'
        },
        {
            name: 'Heading Paragraphs',
            html: 'h2 + p',
            desc: 'Style first paragraph after headings',
            useCase: 'Typography hierarchy'
        },
        {
            name: 'Article Sections',
            html: 'article ~ section',
            desc: 'Style sections that follow articles',
            useCase: 'Content layout'
        }
    ];

    // Common Patterns
    const commonPatterns = [
        {
            pattern: 'Nested Lists',
            selector: 'ul li ul',
            description: 'Target nested unordered lists',
            example: 'Multi-level navigation menus'
        },
        {
            pattern: 'Table Cells',
            selector: 'table > tbody > tr > td',
            description: 'Target table cells with specific hierarchy',
            example: 'Styling data tables'
        },
        {
            pattern: 'Card Content',
            selector: '.card > .header + .content',
            description: 'Target content that follows header in cards',
            example: 'Component styling'
        },
        {
            pattern: 'Form Groups',
            selector: '.form-group ~ .form-group',
            description: 'Target form groups after the first one',
            example: 'Form spacing and layout'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Combinators Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Combinators: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Descendant Selector (space)</h2>
            <div class="example-container descendant-demo">
                <div class="parent">
                    <p class="target">Direct child paragraph (selected)</p>
                    <div class="nested">
                        <p class="target">Nested paragraph (also selected)</p>
                        <span>
                            <p class="target">Deeply nested paragraph (also selected)</p>
                        </span>
                    </div>
                </div>
                <p>Outside paragraph (not selected)</p>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>.parent p { background: lightblue; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Child Selector (>)</h2>
            <div class="example-container child-demo">
                <div class="parent">
                    <p class="target">Direct child paragraph (selected)</p>
                    <div class="nested">
                        <p>Nested paragraph (NOT selected)</p>
                    </div>
                    <p class="target">Another direct child (selected)</p>
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>.parent > p { background: lightgreen; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Adjacent Sibling Selector (+)</h2>
            <div class="example-container adjacent-demo">
                <div class="parent">
                    <h3>Heading</h3>
                    <p class="target">First paragraph after heading (selected)</p>
                    <p>Second paragraph (NOT selected)</p>
                    <div>A div element</div>
                    <p>Paragraph after div (NOT selected)</p>
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>h3 + p { background: lightcoral; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>General Sibling Selector (~)</h2>
            <div class="example-container general-demo">
                <div class="parent">
                    <h3>Heading</h3>
                    <div>A div sibling</div>
                    <p class="target">First paragraph sibling (selected)</p>
                    <span>A span element</span>
                    <p class="target">Second paragraph sibling (also selected)</p>
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>h3 ~ p { background: lightyellow; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Combinator Tester</h2>
            <div class="interactive-demo">
                <div class="controls">
                    <button onclick="showCombinator('descendant')">Descendant ( )</button>
                    <button onclick="showCombinator('child')">Child (>)</button>
                    <button onclick="showCombinator('adjacent')">Adjacent (+)</button>
                    <button onclick="showCombinator('general')">General (~)</button>
                    <button onclick="showCombinator('none')">Reset</button>
                </div>
                <div class="test-structure">
                    <div class="test-parent" id="testParent">
                        <h4>Parent Element</h4>
                        <p class="test-element" id="element1">Direct child paragraph 1</p>
                        <div class="test-nested">
                            <p class="test-element" id="element2">Nested paragraph</p>
                        </div>
                        <p class="test-element" id="element3">Direct child paragraph 2</p>
                        <span class="test-element" id="element4">Span sibling</span>
                        <p class="test-element" id="element5">Another paragraph sibling</p>
                    </div>
                </div>
                <div class="current-selector" id="currentSelector">
                    Click a button to see combinator in action
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Real-World Examples</h2>
            <div class="real-world-examples">
                <div class="example-card">
                    <h3>Navigation Menu</h3>
                    <nav class="nav-example">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li>
                                <a href="#">Products</a>
                                <ul>
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">Phones</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="code-example">
                        <code>nav ul li a { color: blue; }</code><br>
                        <code>nav > ul > li > a { font-weight: bold; }</code>
                    </div>
                </div>

                <div class="example-card">
                    <h3>Article Layout</h3>
                    <article class="article-example">
                        <h2>Article Title</h2>
                        <p>First paragraph after title</p>
                        <p>Second paragraph</p>
                        <blockquote>A quote</blockquote>
                        <p>Paragraph after quote</p>
                    </article>
                    <div class="code-example">
                        <code>h2 + p { font-size: 1.2em; }</code><br>
                        <code>blockquote ~ p { margin-top: 1em; }</code>
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

.demo-section {
    background: white;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.example-container {
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 1rem;
}

.parent {
    background: #e9ecef;
    border: 2px solid #6c757d;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}

.nested {
    background: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 6px;
    padding: 0.75rem;
    margin: 0.5rem 0;
}

.target {
    background: #d4edda !important;
    border: 2px solid #28a745 !important;
    color: #155724 !important;
    font-weight: bold;
}

/* Specific combinator demonstrations */
.descendant-demo .parent p {
    background: #cce5ff;
    border: 2px solid #007bff;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 4px;
}

.child-demo .parent > p {
    background: #d4edda;
    border: 2px solid #28a745;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 4px;
}

.adjacent-demo h3 + p {
    background: #f8d7da;
    border: 2px solid #dc3545;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 4px;
}

.general-demo h3 ~ p {
    background: #fff3cd;
    border: 2px solid #ffc107;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 4px;
}

.code-example {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 1rem;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
}

.code-example code {
    background: #e9ecef;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    color: #e83e8c;
}

/* Interactive Demo */
.interactive-demo {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid #dee2e6;
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
    transition: background 0.3s ease;
}

.controls button:hover {
    background: #0056b3;
}

.test-structure {
    background: white;
    border: 2px dashed #6c757d;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}

.test-parent {
    background: #e9ecef;
    border: 2px solid #6c757d;
    border-radius: 6px;
    padding: 1rem;
}

.test-nested {
    background: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.75rem;
    margin: 0.5rem 0;
}

.test-element {
    background: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 0.5rem;
    margin: 0.25rem 0;
    transition: all 0.3s ease;
}

.test-element.highlighted {
    background: #d4edda;
    border: 2px solid #28a745;
    color: #155724;
    font-weight: bold;
    transform: scale(1.02);
}

.current-selector {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 6px;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    color: #0c5460;
}

/* Real-World Examples */
.real-world-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.example-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    padding: 1.5rem;
}

.nav-example ul {
    list-style: none;
    background: #e9ecef;
    padding: 0.5rem;
    border-radius: 6px;
}

.nav-example li {
    padding: 0.25rem 0;
}

.nav-example a {
    color: #007bff;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    transition: background 0.3s ease;
}

.nav-example a:hover {
    background: #007bff;
    color: white;
}

.nav-example ul ul {
    margin-left: 1rem;
    margin-top: 0.5rem;
    background: #f8f9fa;
}

.article-example {
    background: #fff;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #dee2e6;
}

.article-example h2 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.article-example p {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.article-example blockquote {
    background: #f8f9fa;
    border-left: 4px solid #007bff;
    padding: 1rem;
    margin: 1rem 0;
    font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .real-world-examples { grid-template-columns: 1fr; }
    .controls { justify-content: center; }
}`,
        js: `// Interactive CSS Combinators Demo
document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        element1: document.getElementById('element1'),
        element2: document.getElementById('element2'),
        element3: document.getElementById('element3'),
        element4: document.getElementById('element4'),
        element5: document.getElementById('element5')
    };
    
    const currentSelector = document.getElementById('currentSelector');

    function clearHighlights() {
        Object.values(elements).forEach(el => {
            if (el) el.classList.remove('highlighted');
        });
    }

    window.showCombinator = function(type) {
        clearHighlights();
        
        switch(type) {
            case 'descendant':
                // Descendant selector: .test-parent p (all p elements inside)
                if (elements.element1) elements.element1.classList.add('highlighted');
                if (elements.element2) elements.element2.classList.add('highlighted');
                if (elements.element3) elements.element3.classList.add('highlighted');
                if (elements.element5) elements.element5.classList.add('highlighted');
                currentSelector.textContent = 'Descendant: .test-parent p (all p elements inside parent)';
                break;
                
            case 'child':
                // Child selector: .test-parent > p (only direct children)
                if (elements.element1) elements.element1.classList.add('highlighted');
                if (elements.element3) elements.element3.classList.add('highlighted');
                if (elements.element5) elements.element5.classList.add('highlighted');
                currentSelector.textContent = 'Child: .test-parent > p (only direct p children)';
                break;
                
            case 'adjacent':
                // Adjacent sibling: h4 + p (first p immediately after h4)
                if (elements.element1) elements.element1.classList.add('highlighted');
                currentSelector.textContent = 'Adjacent Sibling: h4 + p (first p immediately after h4)';
                break;
                
            case 'general':
                // General sibling: h4 ~ p (all p siblings after h4)
                if (elements.element1) elements.element1.classList.add('highlighted');
                if (elements.element3) elements.element3.classList.add('highlighted');
                if (elements.element5) elements.element5.classList.add('highlighted');
                currentSelector.textContent = 'General Sibling: h4 ~ p (all p siblings after h4)';
                break;
                
            case 'none':
                currentSelector.textContent = 'Click a button to see combinator in action';
                break;
        }
        
        console.log('Combinator demo:', type);
    };

    // Add hover effects to demo elements
    const demoElements = document.querySelectorAll('.test-element, .target');
    demoElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (!this.classList.contains('highlighted')) {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (!this.classList.contains('highlighted')) {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }
        });
    });

    // Add click effects to control buttons
    const buttons = document.querySelectorAll('.controls button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    console.log('CSS Combinators Demo loaded successfully!');
    console.log('Use the interactive controls to see how different combinators work.');
});`
    };

    return (
        <div className="space-y-8">
            <PageHeader
                icon={Link}
                category="CSS · Advanced Selectors"
                title="Combinators"
                description="Master element relationships and targeting with descendant, child, sibling, and adjacent selectors"
                colorTheme="blue"
            />

            {/* Combinator Types Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TreePine className="w-5 h-5 text-blue-500" />
                        CSS Combinator Types
                    </CardTitle>
                    <CardDescription>
                        Understanding the four main combinators and how they define element relationships in CSS.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {combinatorTypes.map((type, index) => (
                            <div 
                                key={type.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedCombinator === type.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${type.color}`}
                                onClick={() => setSelectedCombinator(type.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <type.icon className={`w-5 h-5 ${type.textColor}`} />
                                    <h3 className={`font-bold text-lg ${type.textColor}`}>
                                        {type.title}
                                    </h3>
                                    <Badge variant="secondary" className="text-xs">
                                        {type.symbol === ' ' ? 'space' : type.symbol}
                                    </Badge>
                                </div>
                                <p className={`text-sm mb-3 ${type.textColor}`}>{type.desc}</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Relationship:</span>
                                        <span>{type.relationship}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="font-semibold">Performance:</span>
                                        <span>{type.performance}</span>
                                    </div>
                                    <code className="text-xs bg-muted p-2 rounded block text-center">
                                        {type.syntax}
                                    </code>
                                    <Badge variant="secondary" className="text-xs w-full justify-center">
                                        {type.useCase}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>What are Combinators?</CardTitle>
                    <CardDescription>
                       A combinator is something that explains the relationship between the selectors. It sits between two selectors to create a more complex and specific rule.
                    </CardDescription>
                </CardHeader>
            </Card>

            {/* Live Combinator Demo */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Zap className="w-5 h-5" />
                        Live Combinator Demo
                    </CardTitle>
                    <CardDescription>
                        Click the buttons below to see how different combinators target elements based on their relationships.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Combinator Controls */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {combinatorTypes.map((type) => (
                                <Button
                                    key={type.name}
                                    variant={selectedCombinator === type.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCombinator(type.name)}
                                    className="flex items-center gap-2"
                                >
                                    <type.icon className="w-4 h-4" />
                                    {type.title}
                                </Button>
                            ))}
                        </div>

                        {/* Live Demo Structure */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-dashed border-gray-300 min-h-[400px]">
                            <div className="mb-4 text-center">
                                <Badge variant="outline" className="text-sm">
                                    Current: <code className="ml-1">{combinatorTypes.find(t => t.name === selectedCombinator)?.syntax}</code>
                                </Badge>
                            </div>
                            
                            {/* HTML Structure Visualization */}
                            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                                <div className="border-2 border-blue-400 bg-blue-50 dark:bg-blue-900/30 p-3 rounded mb-2">
                                    <span className="text-xs font-mono text-blue-700 dark:text-blue-300">Parent Container</span>
                                    
                                    {/* Direct children */}
                                    <div className={`mt-2 p-2 rounded border ${
                                        selectedCombinator === 'descendant' || selectedCombinator === 'child' ? 
                                        'bg-green-200 dark:bg-green-800 border-green-400' : 
                                        'bg-white dark:bg-gray-600 border-gray-300'
                                    }`}>
                                        <span className="text-xs">Direct Child Element 1</span>
                                    </div>
                                    
                                    <div className="mt-2 p-2 rounded border bg-gray-200 dark:bg-gray-600 border-gray-300">
                                        <span className="text-xs">Nested Container</span>
                                        <div className={`mt-1 p-2 rounded border ${
                                            selectedCombinator === 'descendant' ? 
                                            'bg-green-200 dark:bg-green-800 border-green-400' : 
                                            'bg-white dark:bg-gray-500 border-gray-300'
                                        }`}>
                                            <span className="text-xs">Nested Child Element</span>
                                        </div>
                                    </div>
                                    
                                    <div className={`mt-2 p-2 rounded border ${
                                        selectedCombinator === 'descendant' || selectedCombinator === 'child' ? 
                                        'bg-green-200 dark:bg-green-800 border-green-400' : 
                                        'bg-white dark:bg-gray-600 border-gray-300'
                                    }`}>
                                        <span className="text-xs">Direct Child Element 2</span>
                                    </div>
                                </div>
                                
                                {/* Sibling elements */}
                                <div className={`p-2 rounded border mt-2 ${
                                    selectedCombinator === 'adjacent' ? 
                                    'bg-green-200 dark:bg-green-800 border-green-400' : 
                                    'bg-white dark:bg-gray-600 border-gray-300'
                                }`}>
                                    <span className="text-xs">Adjacent Sibling Element</span>
                                </div>
                                
                                <div className={`p-2 rounded border mt-2 ${
                                    selectedCombinator === 'general' ? 
                                    'bg-green-200 dark:bg-green-800 border-green-400' : 
                                    'bg-white dark:bg-gray-600 border-gray-300'
                                }`}>
                                    <span className="text-xs">General Sibling Element</span>
                                </div>
                            </div>
                        </div>

                        {/* Current Behavior Explanation */}
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                <strong>Current behavior:</strong> {combinatorTypes.find(t => t.name === selectedCombinator)?.desc}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Combinator Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive combinator examples including all four types, interactive demonstrations, real-world patterns, and live element targeting.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Combinator Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <TreePine className="w-3 h-3" />
                            Descendant Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <ArrowDown className="w-3 h-3" />
                            Child Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Plus className="w-3 h-3" />
                            Adjacent Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Waves className="w-3 h-3" />
                            General Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Interactive Tester
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
