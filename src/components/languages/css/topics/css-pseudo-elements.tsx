
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Puzzle, Lightbulb, Type, FileText, Sparkles,
    Quote, Eye, Settings, CheckCircle, AlertTriangle,
    Zap, Grid3X3, Monitor, Smartphone, Code, Hash,
    ArrowRight, Plus, Minus, Star, Heart
} from 'lucide-react';

interface CssPseudoElementsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPseudoElements({ onOpenWebPlayground }: CssPseudoElementsProps) {
    const [selectedCategory, setSelectedCategory] = useState('content');

    // Comprehensive Pseudo-element Categories
    const pseudoElementCategories = [
        {
            name: 'content',
            title: 'Content Generation',
            icon: Plus,
            desc: 'Create virtual elements and insert content before or after existing elements.',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200'
        },
        {
            name: 'typography',
            title: 'Typography Styling',
            icon: Type,
            desc: 'Style specific parts of text content like first letters and lines.',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200'
        },
        {
            name: 'interaction',
            title: 'User Interaction',
            icon: Eye,
            desc: 'Style elements based on user interactions like text selection.',
            color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300',
            textColor: 'text-purple-800 dark:text-purple-200'
        },
        {
            name: 'form',
            title: 'Form Elements',
            icon: FileText,
            desc: 'Style specific parts of form elements like placeholders and markers.',
            color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300',
            textColor: 'text-orange-800 dark:text-orange-200'
        }
    ];

    // Content Generation Pseudo-elements
    const contentElements = [
        {
            name: '::before',
            icon: ArrowRight,
            desc: 'Creates a virtual element that is the first child of the selected element.',
            example: 'p::before { content: "→ "; }',
            useCase: 'Icons, decorative elements, counters',
            properties: ['content (required)', 'display', 'position', 'all styling properties']
        },
        {
            name: '::after',
            icon: Plus,
            desc: 'Creates a virtual element that is the last child of the selected element.',
            example: 'p::after { content: " ←"; }',
            useCase: 'Tooltips, decorative elements, clearfix',
            properties: ['content (required)', 'display', 'position', 'all styling properties']
        }
    ];

    // Typography Pseudo-elements
    const typographyElements = [
        {
            name: '::first-letter',
            icon: Type,
            desc: 'Selects the first letter of the first line in a block-level element.',
            example: 'p::first-letter { font-size: 3em; }',
            useCase: 'Drop caps, magazine-style layouts',
            properties: ['font properties', 'color', 'background', 'margin', 'padding', 'border', 'text-decoration']
        },
        {
            name: '::first-line',
            icon: FileText,
            desc: 'Selects the first line of text in a block-level element.',
            example: 'p::first-line { font-weight: bold; }',
            useCase: 'Emphasis on opening lines, typography hierarchy',
            properties: ['font properties', 'color', 'background', 'word-spacing', 'letter-spacing', 'text-decoration']
        }
    ];

    // Interaction Pseudo-elements
    const interactionElements = [
        {
            name: '::selection',
            icon: Eye,
            desc: 'Styles the portion of text that has been selected by the user.',
            example: '::selection { background: yellow; }',
            useCase: 'Custom text selection colors, branding',
            properties: ['color', 'background-color', 'cursor', 'caret-color', 'outline', 'text-decoration', 'text-emphasis-color', 'text-shadow']
        },
        {
            name: '::highlight',
            icon: Sparkles,
            desc: 'Styles text that has been highlighted using the CSS Custom Highlight API.',
            example: '::highlight(search-results) { background: yellow; }',
            useCase: 'Search result highlighting, custom text marking',
            properties: ['color', 'background-color', 'text-decoration', 'text-shadow']
        }
    ];

    // Form Pseudo-elements
    const formElements = [
        {
            name: '::placeholder',
            icon: Quote,
            desc: 'Styles the placeholder text in input and textarea elements.',
            example: '::placeholder { color: gray; opacity: 0.7; }',
            useCase: 'Form styling, placeholder customization',
            properties: ['color', 'font properties', 'opacity', 'text-transform']
        },
        {
            name: '::file-selector-button',
            icon: Settings,
            desc: 'Styles the button part of file input elements.',
            example: '::file-selector-button { background: blue; }',
            useCase: 'Custom file upload styling',
            properties: ['all styling properties', 'background', 'border', 'padding', 'font properties']
        }
    ];

    // Creative Use Cases
    const creativeUseCases = [
        {
            title: 'CSS Tooltips',
            desc: 'Create tooltips using ::before or ::after with positioning',
            code: `[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  background: black;
  color: white;
  padding: 5px;
  border-radius: 3px;
}`
        },
        {
            title: 'Decorative Elements',
            desc: 'Add visual flourishes without extra HTML',
            code: `.fancy-heading::before {
  content: "✨";
  margin-right: 10px;
}
.fancy-heading::after {
  content: "✨";
  margin-left: 10px;
}`
        },
        {
            title: 'CSS Counters',
            desc: 'Automatic numbering using counter properties',
            code: `.numbered-list {
  counter-reset: item;
}
.numbered-list li::before {
  content: counter(item) ". ";
  counter-increment: item;
  font-weight: bold;
}`
        },
        {
            title: 'Clearfix Hack',
            desc: 'Clear floated elements without extra markup',
            code: `.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Pseudo-elements Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Pseudo-elements: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Content Generation (::before & ::after)</h2>
            <div class="content-demo">
                <div class="icon-example">Icon Example</div>
                <div class="quote-example">This is a styled quote with decorative elements.</div>
                <div class="tooltip-example" data-tooltip="This is a CSS-only tooltip!">Hover for tooltip</div>
                <div class="badge-example">New Feature</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Typography Styling</h2>
            <div class="typography-demo">
                <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <p class="first-line-styled">This paragraph has its first line styled differently from the rest of the content. The first line will appear bold and in a different color, while the remaining text maintains normal styling.</p>
            </div>
        </section>

        <section class="demo-section">
            <h2>User Interaction Styling</h2>
            <div class="interaction-demo">
                <p class="selectable-text">Try selecting this text to see custom selection styling! The background and text color will change when you highlight any part of this paragraph.</p>
                <div class="highlight-demo">
                    <p>This text can be highlighted with custom colors. Select any part to see the effect.</p>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Form Element Styling</h2>
            <form class="form-demo">
                <div class="form-group">
                    <input type="text" placeholder="Custom styled placeholder" class="styled-input">
                </div>
                <div class="form-group">
                    <textarea placeholder="This textarea has custom placeholder styling" class="styled-textarea"></textarea>
                </div>
                <div class="form-group">
                    <input type="file" class="styled-file-input">
                </div>
            </form>
        </section>

        <section class="demo-section">
            <h2>Creative Examples</h2>
            <div class="creative-demo">
                <h3 class="fancy-heading">Decorated Heading</h3>
                <ol class="custom-counter">
                    <li>First item with custom counter</li>
                    <li>Second item with custom counter</li>
                    <li>Third item with custom counter</li>
                </ol>
                <div class="speech-bubble">This is a CSS speech bubble created with pseudo-elements!</div>
                <div class="ribbon">Ribbon Effect</div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Pseudo-element Tester</h2>
            <div class="interactive-demo">
                <div class="controls">
                    <button onclick="togglePseudoElement('before')">Toggle ::before</button>
                    <button onclick="togglePseudoElement('after')">Toggle ::after</button>
                    <button onclick="togglePseudoElement('first-letter')">Toggle ::first-letter</button>
                    <button onclick="togglePseudoElement('first-line')">Toggle ::first-line</button>
                    <button onclick="togglePseudoElement('reset')">Reset All</button>
                </div>
                <div class="test-content">
                    <p id="test-paragraph">This is a test paragraph that demonstrates various pseudo-elements. You can toggle different pseudo-element effects using the buttons above to see how they modify the appearance of this content.</p>
                </div>
                <div class="current-effect" id="currentEffect">
                    Click buttons above to see pseudo-element effects
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

/* Content Generation Examples */
.content-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.icon-example::before {
    content: "🚀 ";
    font-size: 1.2em;
}

.quote-example {
    position: relative;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    font-style: italic;
}

.quote-example::before {
    content: """;
    font-size: 3em;
    color: #007bff;
    position: absolute;
    top: -10px;
    left: 10px;
    line-height: 1;
}

.quote-example::after {
    content: """;
    font-size: 3em;
    color: #007bff;
    position: absolute;
    bottom: -20px;
    right: 10px;
    line-height: 1;
}

.tooltip-example {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.tooltip-example::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.8em;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 1000;
}

.tooltip-example::before {
    content: "";
    position: absolute;
    bottom: 115%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #333;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.tooltip-example:hover::after,
.tooltip-example:hover::before {
    opacity: 1;
    visibility: visible;
}

.badge-example {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #28a745;
    color: white;
    border-radius: 5px;
}

.badge-example::after {
    content: "NEW";
    position: absolute;
    top: -8px;
    right: -8px;
    background: #dc3545;
    color: white;
    font-size: 0.7em;
    padding: 2px 6px;
    border-radius: 10px;
    font-weight: bold;
}

/* Typography Examples */
.typography-demo {
    display: grid;
    gap: 2rem;
}

.drop-cap::first-letter {
    font-size: 4em;
    float: left;
    line-height: 0.8;
    margin: 0.1em 0.1em 0 0;
    color: #007bff;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.first-line-styled::first-line {
    font-weight: bold;
    color: #dc3545;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Interaction Examples */
.interaction-demo {
    display: grid;
    gap: 1.5rem;
}

.selectable-text::selection {
    background: #ffc107;
    color: #212529;
}

.highlight-demo p::selection {
    background: #e83e8c;
    color: white;
}

/* Form Examples */
.form-demo {
    display: grid;
    gap: 1rem;
    max-width: 500px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.styled-input::placeholder {
    color: #6c757d;
    font-style: italic;
    opacity: 0.8;
}

.styled-textarea::placeholder {
    color: #007bff;
    font-weight: bold;
}

.styled-file-input::file-selector-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 1rem;
    cursor: pointer;
}

.styled-file-input::file-selector-button:hover {
    background: #0056b3;
}

/* Creative Examples */
.creative-demo {
    display: grid;
    gap: 2rem;
}

.fancy-heading {
    text-align: center;
    font-size: 2em;
    color: #2c3e50;
}

.fancy-heading::before {
    content: "✨ ";
    color: #ffc107;
}

.fancy-heading::after {
    content: " ✨";
    color: #ffc107;
}

.custom-counter {
    counter-reset: item;
    list-style: none;
    padding: 0;
}

.custom-counter li {
    padding: 0.5rem;
    margin: 0.5rem 0;
    background: #f8f9fa;
    border-radius: 5px;
}

.custom-counter li::before {
    content: counter(item) ". ";
    counter-increment: item;
    font-weight: bold;
    color: #007bff;
    margin-right: 0.5rem;
}

.speech-bubble {
    position: relative;
    background: #007bff;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    max-width: 300px;
    margin: 2rem auto;
}

.speech-bubble::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-top-color: #007bff;
}

.ribbon {
    position: relative;
    background: #dc3545;
    color: white;
    padding: 0.5rem 2rem;
    text-align: center;
    font-weight: bold;
    margin: 2rem auto;
    max-width: 200px;
}

.ribbon::before,
.ribbon::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
}

.ribbon::before {
    left: -40px;
    border-right-color: #dc3545;
}

.ribbon::after {
    right: -40px;
    border-left-color: #dc3545;
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

.test-content {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px dashed #dee2e6;
    margin-bottom: 1rem;
}

#test-paragraph {
    font-size: 1.1em;
    line-height: 1.6;
    transition: all 0.3s ease;
}

#test-paragraph.show-before::before {
    content: "→ ";
    color: #007bff;
    font-weight: bold;
    font-size: 1.2em;
}

#test-paragraph.show-after::after {
    content: " ←";
    color: #dc3545;
    font-weight: bold;
    font-size: 1.2em;
}

#test-paragraph.show-first-letter::first-letter {
    font-size: 3em;
    float: left;
    line-height: 0.8;
    margin: 0.1em 0.1em 0 0;
    color: #28a745;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

#test-paragraph.show-first-line::first-line {
    font-weight: bold;
    color: #6f42c1;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.current-effect {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 6px;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    color: #0c5460;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .content-demo { grid-template-columns: 1fr; }
    .controls { justify-content: center; }
    .form-demo { max-width: 100%; }
}`,
        js: `// Interactive CSS Pseudo-elements Demo
document.addEventListener('DOMContentLoaded', function() {
    const testParagraph = document.getElementById('test-paragraph');
    const currentEffect = document.getElementById('currentEffect');
    let activeEffects = new Set();

    function clearAllEffects() {
        testParagraph.classList.remove('show-before', 'show-after', 'show-first-letter', 'show-first-line');
        activeEffects.clear();
    }

    window.togglePseudoElement = function(type) {
        switch(type) {
            case 'before':
                if (activeEffects.has('before')) {
                    testParagraph.classList.remove('show-before');
                    activeEffects.delete('before');
                    currentEffect.textContent = '::before effect removed';
                } else {
                    testParagraph.classList.add('show-before');
                    activeEffects.add('before');
                    currentEffect.textContent = '::before - Arrow added before the paragraph content';
                }
                break;
                
            case 'after':
                if (activeEffects.has('after')) {
                    testParagraph.classList.remove('show-after');
                    activeEffects.delete('after');
                    currentEffect.textContent = '::after effect removed';
                } else {
                    testParagraph.classList.add('show-after');
                    activeEffects.add('after');
                    currentEffect.textContent = '::after - Arrow added after the paragraph content';
                }
                break;
                
            case 'first-letter':
                if (activeEffects.has('first-letter')) {
                    testParagraph.classList.remove('show-first-letter');
                    activeEffects.delete('first-letter');
                    currentEffect.textContent = '::first-letter effect removed';
                } else {
                    testParagraph.classList.add('show-first-letter');
                    activeEffects.add('first-letter');
                    currentEffect.textContent = '::first-letter - First letter enlarged and styled as drop cap';
                }
                break;
                
            case 'first-line':
                if (activeEffects.has('first-line')) {
                    testParagraph.classList.remove('show-first-line');
                    activeEffects.delete('first-line');
                    currentEffect.textContent = '::first-line effect removed';
                } else {
                    testParagraph.classList.add('show-first-line');
                    activeEffects.add('first-line');
                    currentEffect.textContent = '::first-line - First line styled with bold, uppercase, and color';
                }
                break;
                
            case 'reset':
                clearAllEffects();
                currentEffect.textContent = 'All pseudo-element effects reset';
                break;
        }
        
        console.log('Pseudo-element demo:', type, 'Active effects:', Array.from(activeEffects));
    };

    // Add click effects to control buttons
    const buttons = document.querySelectorAll('.controls button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.tooltip-example, .badge-example, .speech-bubble');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            console.log('Hovering over:', this.className);
        });
    });

    // Form input logging
    const formInputs = document.querySelectorAll('.styled-input, .styled-textarea, .styled-file-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            console.log('Form input focused:', this.type || this.tagName);
        });
        
        input.addEventListener('input', function() {
            console.log('Form input changed:', this.value);
        });
    });

    console.log('CSS Pseudo-elements Demo loaded successfully!');
    console.log('Interact with elements to see pseudo-element effects in action.');
});`
    };

    return (
        <div className="space-y-8">
            <PageHeader
                icon={Puzzle}
                category="CSS · Advanced Selectors"
                title="Pseudo-elements"
                description="Master virtual elements and content generation with comprehensive pseudo-element selectors"
                colorTheme="blue"
            />

            {/* Pseudo-element Categories Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-500" />
                        Pseudo-element Categories
                    </CardTitle>
                    <CardDescription>
                        Understanding the four main categories of pseudo-elements and their specific applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {pseudoElementCategories.map((category, index) => (
                            <div 
                                key={category.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedCategory === category.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${category.color}`}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <category.icon className={`w-5 h-5 ${category.textColor}`} />
                                    <h3 className={`font-bold text-sm ${category.textColor}`}>
                                        {category.title}
                                    </h3>
                                </div>
                                <p className={`text-xs ${category.textColor}`}>{category.desc}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Content Generation Examples */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Plus className="w-5 h-5" />
                        Live Content Generation Examples
                    </CardTitle>
                    <CardDescription>
                        See ::before and ::after pseudo-elements in action with real interactive examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Before/After Examples */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">::before & ::after Examples</h4>
                            <div className="grid md:grid-cols-2 gap-4 mb-3">
                                <div className="space-y-3">
                                    <div className="relative p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                        <span className="text-blue-500 text-xl mr-2">🚀</span>
                                        Icon with ::before
                                    </div>
                                    <div className="relative p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                        Checkmark with ::after
                                        <span className="text-green-500 text-xl ml-2">✓</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="relative p-3 bg-blue-50 dark:bg-blue-900/20 rounded italic">
                                        <span className="absolute -top-2 left-2 text-4xl text-blue-500">"</span>
                                        Quote with decorative elements
                                        <span className="absolute -bottom-4 right-2 text-4xl text-blue-500">"</span>
                                    </div>
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                .icon::before {'{'}
                                <br />
                                {'  '}content: "🚀 ";
                                <br />
                                {'  '}color: #3b82f6;
                                <br />
                                {'}'}
                                <br />
                                <br />
                                .checkmark::after {'{'}
                                <br />
                                {'  '}content: " ✓";
                                <br />
                                {'  '}color: #22c55e;
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* Tooltip Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">CSS-Only Tooltip</h4>
                            <div className="flex justify-center mb-3">
                                <div className="relative group">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                        Hover for Tooltip
                                    </button>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        This is a CSS tooltip!
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                .tooltip::after {'{'}
                                <br />
                                {'  '}content: attr(data-tooltip);
                                <br />
                                {'  '}position: absolute;
                                <br />
                                {'  '}background: #1f2937;
                                <br />
                                {'  '}color: white;
                                <br />
                                {'  '}padding: 5px 10px;
                                <br />
                                {'  '}border-radius: 4px;
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Pseudo-elements Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive pseudo-element examples including content generation, typography styling, form elements, and creative applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Pseudo-elements Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Plus className="w-3 h-3" />
                            Content Generation
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Type className="w-3 h-3" />
                            Typography
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            User Interaction
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            Form Elements
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Creative Examples
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
