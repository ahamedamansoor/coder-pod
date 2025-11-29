
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, MousePointerClick, Target, ListTree, Lightbulb, 
    Eye, Hand, Focus, CheckCircle, XCircle, ArrowRight,
    Settings, Zap, Grid3X3, Monitor, Smartphone, Code,
    Users, User, Hash, Filter, AlertTriangle, FileText
} from 'lucide-react';

interface CssPseudoClassesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssPseudoClasses({ onOpenWebPlayground }: CssPseudoClassesProps) {
    const [selectedCategory, setSelectedCategory] = useState('user-action');

    // Comprehensive Pseudo-class Categories
    const pseudoClassCategories = [
        {
            name: 'user-action',
            title: 'User Action States',
            icon: Hand,
            desc: 'Pseudo-classes that respond to user interactions like hover, focus, and click.',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200'
        },
        {
            name: 'structural',
            title: 'Structural Selectors',
            icon: ListTree,
            desc: 'Target elements based on their position in the document tree.',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200'
        },
        {
            name: 'form-states',
            title: 'Form States',
            icon: CheckCircle,
            desc: 'Pseudo-classes specific to form elements and their validation states.',
            color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300',
            textColor: 'text-purple-800 dark:text-purple-200'
        },
        {
            name: 'link-states',
            title: 'Link States',
            icon: ArrowRight,
            desc: 'Pseudo-classes that apply to links based on their visited status.',
            color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300',
            textColor: 'text-orange-800 dark:text-orange-200'
        }
    ];

    // User Action Pseudo-classes
    const userActionClasses = [
        {
            name: ':hover',
            icon: Eye,
            desc: 'Applies when user hovers over an element with a pointing device.',
            example: 'button:hover { background: blue; }',
            useCase: 'Button hover effects, menu highlights',
            trigger: 'Mouse over'
        },
        {
            name: ':focus',
            icon: Focus,
            desc: 'Applies when an element receives focus (keyboard or click).',
            example: 'input:focus { border-color: blue; }',
            useCase: 'Form field highlighting, accessibility',
            trigger: 'Keyboard/click focus'
        },
        {
            name: ':active',
            icon: Hand,
            desc: 'Applies when an element is being activated (pressed down).',
            example: 'button:active { transform: scale(0.95); }',
            useCase: 'Click feedback, button press effects',
            trigger: 'Mouse/touch press'
        },
        {
            name: ':focus-visible',
            icon: Target,
            desc: 'Applies when element has focus and should show focus indicator.',
            example: 'button:focus-visible { outline: 2px solid blue; }',
            useCase: 'Keyboard navigation indicators',
            trigger: 'Keyboard focus only'
        }
    ];

    // Structural Pseudo-classes
    const structuralClasses = [
        {
            name: ':first-child',
            icon: ArrowRight,
            desc: 'Selects the first child element of its parent.',
            example: 'li:first-child { font-weight: bold; }',
            useCase: 'First item styling, headers'
        },
        {
            name: ':last-child',
            icon: ArrowRight,
            desc: 'Selects the last child element of its parent.',
            example: 'li:last-child { border-bottom: none; }',
            useCase: 'Last item styling, removing borders'
        },
        {
            name: ':nth-child(n)',
            icon: Hash,
            desc: 'Selects elements based on their position using formulas.',
            example: 'tr:nth-child(even) { background: #f0f0f0; }',
            useCase: 'Zebra striping, alternating patterns'
        },
        {
            name: ':nth-of-type(n)',
            icon: Grid3X3,
            desc: 'Selects elements based on position among siblings of same type.',
            example: 'h2:nth-of-type(2) { color: red; }',
            useCase: 'Type-specific positioning'
        },
        {
            name: ':only-child',
            icon: User,
            desc: 'Selects elements that are the only child of their parent.',
            example: 'p:only-child { text-align: center; }',
            useCase: 'Single child special styling'
        },
        {
            name: ':empty',
            icon: XCircle,
            desc: 'Selects elements that have no children or text content.',
            example: 'div:empty { display: none; }',
            useCase: 'Hiding empty containers'
        }
    ];

    // Form State Pseudo-classes
    const formStateClasses = [
        {
            name: ':required',
            icon: AlertTriangle,
            desc: 'Selects form elements with the required attribute.',
            example: 'input:required { border-left: 3px solid red; }',
            useCase: 'Required field indicators'
        },
        {
            name: ':optional',
            icon: CheckCircle,
            desc: 'Selects form elements without the required attribute.',
            example: 'input:optional { border-left: 3px solid green; }',
            useCase: 'Optional field styling'
        },
        {
            name: ':valid',
            icon: CheckCircle,
            desc: 'Selects form elements with valid input according to validation.',
            example: 'input:valid { background: lightgreen; }',
            useCase: 'Validation success feedback'
        },
        {
            name: ':invalid',
            icon: XCircle,
            desc: 'Selects form elements with invalid input according to validation.',
            example: 'input:invalid { background: lightcoral; }',
            useCase: 'Validation error feedback'
        },
        {
            name: ':checked',
            icon: CheckCircle,
            desc: 'Selects checked radio buttons, checkboxes, or selected options.',
            example: 'input:checked + label { font-weight: bold; }',
            useCase: 'Custom checkbox/radio styling'
        },
        {
            name: ':disabled',
            icon: XCircle,
            desc: 'Selects form elements that are disabled.',
            example: 'input:disabled { opacity: 0.5; }',
            useCase: 'Disabled state styling'
        }
    ];

    // Link State Pseudo-classes
    const linkStateClasses = [
        {
            name: ':link',
            icon: ArrowRight,
            desc: 'Selects unvisited links.',
            example: 'a:link { color: blue; }',
            useCase: 'Default link styling'
        },
        {
            name: ':visited',
            icon: Eye,
            desc: 'Selects links that have been visited by the user.',
            example: 'a:visited { color: purple; }',
            useCase: 'Visited link indication'
        }
    ];

    // nth-child Formula Examples
    const nthChildExamples = [
        {
            formula: 'odd',
            desc: 'Selects odd-numbered children (1st, 3rd, 5th...)',
            equivalent: '2n+1'
        },
        {
            formula: 'even',
            desc: 'Selects even-numbered children (2nd, 4th, 6th...)',
            equivalent: '2n'
        },
        {
            formula: '3n',
            desc: 'Selects every 3rd child (3rd, 6th, 9th...)',
            equivalent: 'Multiple of 3'
        },
        {
            formula: '2n+3',
            desc: 'Selects starting from 3rd, then every 2nd (3rd, 5th, 7th...)',
            equivalent: 'Custom pattern'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Pseudo-classes Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Pseudo-classes: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>User Action States</h2>
            <div class="action-demo">
                <button class="demo-button">Hover & Click Me</button>
                <input type="text" placeholder="Focus on me" class="demo-input">
                <a href="#" class="demo-link">Interactive Link</a>
            </div>
        </section>

        <section class="demo-section">
            <h2>Structural Pseudo-classes</h2>
            <div class="structural-demo">
                <h3>Child Selectors</h3>
                <ul class="demo-list">
                    <li>First child (special styling)</li>
                    <li>Second child</li>
                    <li>Third child</li>
                    <li>Fourth child</li>
                    <li>Fifth child</li>
                    <li>Last child (special styling)</li>
                </ul>
                
                <h3>nth-child Examples</h3>
                <div class="nth-demo">
                    <div class="item">Item 1</div>
                    <div class="item">Item 2 (even)</div>
                    <div class="item">Item 3 (odd)</div>
                    <div class="item">Item 4 (even)</div>
                    <div class="item">Item 5 (odd)</div>
                    <div class="item">Item 6 (even)</div>
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Form State Pseudo-classes</h2>
            <form class="demo-form">
                <div class="form-group">
                    <label for="required-field">Required Field:</label>
                    <input type="email" id="required-field" required placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="optional-field">Optional Field:</label>
                    <input type="text" id="optional-field" placeholder="Optional text">
                </div>
                <div class="form-group">
                    <input type="checkbox" id="checkbox1">
                    <label for="checkbox1">Check me</label>
                </div>
                <div class="form-group">
                    <input type="radio" id="radio1" name="radio-group">
                    <label for="radio1">Option 1</label>
                    <input type="radio" id="radio2" name="radio-group">
                    <label for="radio2">Option 2</label>
                </div>
                <button type="submit" disabled>Disabled Button</button>
            </form>
        </section>

        <section class="demo-section">
            <h2>Link States (LVHA Order)</h2>
            <div class="link-demo">
                <a href="https://example.com" class="demo-link-state">External Link</a>
                <a href="#visited" class="demo-link-state visited-link">Visited-style Link</a>
                <a href="#" class="demo-link-state">Regular Link</a>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Pseudo-class Tester</h2>
            <div class="interactive-demo">
                <div class="controls">
                    <button onclick="togglePseudoClass('hover')">Toggle :hover</button>
                    <button onclick="togglePseudoClass('focus')">Toggle :focus</button>
                    <button onclick="togglePseudoClass('active')">Toggle :active</button>
                    <button onclick="togglePseudoClass('nth-child')">Toggle :nth-child</button>
                    <button onclick="togglePseudoClass('reset')">Reset All</button>
                </div>
                <div class="test-elements">
                    <div class="test-item" id="item1">Test Element 1</div>
                    <div class="test-item" id="item2">Test Element 2</div>
                    <div class="test-item" id="item3">Test Element 3</div>
                    <div class="test-item" id="item4">Test Element 4</div>
                </div>
                <div class="current-state" id="currentState">
                    Click buttons above to see pseudo-class effects
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Advanced nth-child Patterns</h2>
            <div class="nth-patterns">
                <div class="pattern-demo">
                    <h3>Every 3rd item (3n)</h3>
                    <div class="pattern-grid pattern-3n">
                        <div class="pattern-item">1</div>
                        <div class="pattern-item">2</div>
                        <div class="pattern-item">3</div>
                        <div class="pattern-item">4</div>
                        <div class="pattern-item">5</div>
                        <div class="pattern-item">6</div>
                        <div class="pattern-item">7</div>
                        <div class="pattern-item">8</div>
                        <div class="pattern-item">9</div>
                    </div>
                </div>
                
                <div class="pattern-demo">
                    <h3>Starting from 2nd, every 2nd (2n+2)</h3>
                    <div class="pattern-grid pattern-2n-plus-2">
                        <div class="pattern-item">1</div>
                        <div class="pattern-item">2</div>
                        <div class="pattern-item">3</div>
                        <div class="pattern-item">4</div>
                        <div class="pattern-item">5</div>
                        <div class="pattern-item">6</div>
                        <div class="pattern-item">7</div>
                        <div class="pattern-item">8</div>
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

/* User Action States Demo */
.action-demo {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.demo-button {
    padding: 1rem 2rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.demo-button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.demo-button:active {
    transform: scale(0.95);
    background: #004085;
}

.demo-button:focus {
    outline: 2px solid #ffc107;
    outline-offset: 2px;
}

.demo-input {
    padding: 1rem;
    border: 2px solid #ced4da;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.demo-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
}

.demo-link {
    padding: 1rem;
    color: #007bff;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.demo-link:hover {
    background: #e3f2fd;
    color: #0056b3;
}

.demo-link:active {
    background: #bbdefb;
}

/* Structural Demo */
.structural-demo {
    display: grid;
    gap: 2rem;
}

.demo-list {
    list-style: none;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
}

.demo-list li {
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    transition: all 0.3s ease;
}

.demo-list li:first-child {
    background: #d4edda;
    font-weight: bold;
    color: #155724;
}

.demo-list li:last-child {
    background: #d1ecf1;
    font-style: italic;
    color: #0c5460;
    border-bottom: none;
}

.demo-list li:nth-child(even) {
    background: #e9ecef;
}

.nth-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.item {
    padding: 1rem;
    background: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
}

.item:nth-child(odd) {
    background: #fff3cd;
    border-color: #ffc107;
    color: #856404;
}

.item:nth-child(even) {
    background: #d1ecf1;
    border-color: #17a2b8;
    color: #0c5460;
}

/* Form Demo */
.demo-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #495057;
}

.form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input[type="checkbox"],
.form-group input[type="radio"] {
    width: auto;
    margin-right: 0.5rem;
}

/* Form State Styling */
input:required {
    border-left: 4px solid #dc3545;
}

input:optional {
    border-left: 4px solid #28a745;
}

input:valid {
    background-color: #f8fff8;
    border-color: #28a745;
}

input:invalid {
    background-color: #fff5f5;
    border-color: #dc3545;
}

input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
}

input:checked + label {
    color: #007bff;
    font-weight: bold;
}

input:disabled,
button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #e9ecef;
}

/* Link States Demo */
.link-demo {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.demo-link-state {
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
}

/* LVHA Order */
a.demo-link-state:link {
    color: #007bff;
    background: #e3f2fd;
}

a.demo-link-state:visited {
    color: #6f42c1;
    background: #e2d5f1;
}

a.demo-link-state:hover {
    color: #dc3545;
    background: #f8d7da;
    transform: translateY(-2px);
}

a.demo-link-state:active {
    color: #28a745;
    background: #d4edda;
    transform: scale(0.95);
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

.test-elements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
}

.test-item {
    padding: 1rem;
    background: #fff;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
}

.test-item.simulated-hover {
    background: #e3f2fd;
    border-color: #007bff;
    color: #0056b3;
    transform: translateY(-2px);
}

.test-item.simulated-focus {
    outline: 2px solid #ffc107;
    outline-offset: 2px;
}

.test-item.simulated-active {
    background: #f8d7da;
    border-color: #dc3545;
    transform: scale(0.95);
}

.test-item.simulated-nth-child {
    background: #d4edda;
    border-color: #28a745;
    color: #155724;
}

.current-state {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 6px;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    color: #0c5460;
}

/* nth-child Patterns */
.nth-patterns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.pattern-demo {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #dee2e6;
}

.pattern-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-top: 1rem;
}

.pattern-item {
    padding: 1rem;
    background: #fff;
    border: 2px solid #dee2e6;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
}

.pattern-3n .pattern-item:nth-child(3n) {
    background: #d4edda;
    border-color: #28a745;
    color: #155724;
}

.pattern-2n-plus-2 .pattern-item:nth-child(2n+2) {
    background: #d1ecf1;
    border-color: #17a2b8;
    color: #0c5460;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .action-demo { flex-direction: column; }
    .link-demo { flex-direction: column; }
    .controls { justify-content: center; }
    .test-elements { grid-template-columns: 1fr; }
    .nth-patterns { grid-template-columns: 1fr; }
}`,
        js: `// Interactive CSS Pseudo-classes Demo
document.addEventListener('DOMContentLoaded', function() {
    const testItems = document.querySelectorAll('.test-item');
    const currentState = document.getElementById('currentState');
    let activeStates = new Set();

    function clearAllStates() {
        testItems.forEach(item => {
            item.classList.remove('simulated-hover', 'simulated-focus', 'simulated-active', 'simulated-nth-child');
        });
        activeStates.clear();
    }

    window.togglePseudoClass = function(type) {
        switch(type) {
            case 'hover':
                if (activeStates.has('hover')) {
                    testItems.forEach(item => item.classList.remove('simulated-hover'));
                    activeStates.delete('hover');
                    currentState.textContent = 'Hover effect removed';
                } else {
                    testItems.forEach(item => item.classList.add('simulated-hover'));
                    activeStates.add('hover');
                    currentState.textContent = ':hover - All elements show hover state (background change, transform)';
                }
                break;
                
            case 'focus':
                if (activeStates.has('focus')) {
                    testItems.forEach(item => item.classList.remove('simulated-focus'));
                    activeStates.delete('focus');
                    currentState.textContent = 'Focus effect removed';
                } else {
                    testItems.forEach(item => item.classList.add('simulated-focus'));
                    activeStates.add('focus');
                    currentState.textContent = ':focus - All elements show focus state (outline visible)';
                }
                break;
                
            case 'active':
                if (activeStates.has('active')) {
                    testItems.forEach(item => item.classList.remove('simulated-active'));
                    activeStates.delete('active');
                    currentState.textContent = 'Active effect removed';
                } else {
                    testItems.forEach(item => item.classList.add('simulated-active'));
                    activeStates.add('active');
                    currentState.textContent = ':active - All elements show active state (pressed down effect)';
                }
                break;
                
            case 'nth-child':
                if (activeStates.has('nth-child')) {
                    testItems.forEach(item => item.classList.remove('simulated-nth-child'));
                    activeStates.delete('nth-child');
                    currentState.textContent = 'nth-child effect removed';
                } else {
                    // Apply to even children (2nd and 4th items)
                    testItems.forEach((item, index) => {
                        if ((index + 1) % 2 === 0) {
                            item.classList.add('simulated-nth-child');
                        }
                    });
                    activeStates.add('nth-child');
                    currentState.textContent = ':nth-child(even) - Even-numbered elements (2nd, 4th) are highlighted';
                }
                break;
                
            case 'reset':
                clearAllStates();
                currentState.textContent = 'All pseudo-class effects reset';
                break;
        }
        
        console.log('Pseudo-class demo:', type, 'Active states:', Array.from(activeStates));
    };

    // Add real hover effects to demo elements
    const demoElements = document.querySelectorAll('.demo-button, .demo-input, .demo-link, .test-item');
    demoElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (!this.classList.contains('test-item')) {
                console.log('Real hover on:', this.tagName);
            }
        });
    });

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

    // Form validation demo
    const formInputs = document.querySelectorAll('.demo-form input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            console.log('Form input changed:', this.type, 'Valid:', this.validity.valid);
        });
        
        input.addEventListener('focus', function() {
            console.log('Form input focused:', this.type);
        });
        
        input.addEventListener('blur', function() {
            console.log('Form input blurred:', this.type);
        });
    });

    // Checkbox and radio change events
    const checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    checkboxes.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Checkbox/Radio changed:', this.type, 'Checked:', this.checked);
        });
    });

    console.log('CSS Pseudo-classes Demo loaded successfully!');
    console.log('Interact with elements to see pseudo-class effects in action.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <MousePointerClick className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Pseudo-classes</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master element states and structural targeting with comprehensive pseudo-class selectors.
                </p>
            </div>

            {/* Pseudo-class Categories Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-500" />
                        Pseudo-class Categories
                    </CardTitle>
                    <CardDescription>
                        Understanding the four main categories of pseudo-classes and their specific applications.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {pseudoClassCategories.map((category, index) => (
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

            {/* Live User Action Examples */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Hand className="w-5 h-5" />
                        Live User Action Examples
                    </CardTitle>
                    <CardDescription>
                        Interact with these elements to see pseudo-classes in action. Hover, click, and focus to see real-time changes.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Hover Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:hover Example</h4>
                            <div className="flex flex-wrap gap-4 mb-3">
                                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600 hover:transform hover:scale-105 hover:shadow-lg">
                                    Hover Me!
                                </button>
                                <div className="px-4 py-2 border-2 border-gray-300 rounded-lg transition-all duration-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                                    Hover for Border Change
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                button:hover {'{'}
                                <br />
                                &nbsp;&nbsp;background: #2563eb;
                                <br />
                                &nbsp;&nbsp;transform: scale(1.05);
                                <br />
                                &nbsp;&nbsp;box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* Focus Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:focus Example</h4>
                            <div className="flex flex-wrap gap-4 mb-3">
                                <input 
                                    type="text" 
                                    placeholder="Click to focus" 
                                    className="px-4 py-2 border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                                />
                                <textarea 
                                    placeholder="Focus on this textarea"
                                    className="px-4 py-2 border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none resize-none"
                                    rows={2}
                                />
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                input:focus {'{'}
                                <br />
                                &nbsp;&nbsp;border-color: #3b82f6;
                                <br />
                                &nbsp;&nbsp;ring: 2px solid rgba(59, 130, 246, 0.2);
                                <br />
                                &nbsp;&nbsp;outline: none;
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* Active Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:active Example</h4>
                            <div className="flex flex-wrap gap-4 mb-3">
                                <button className="px-6 py-3 bg-green-500 text-white rounded-lg transition-all duration-150 active:bg-green-700 active:transform active:scale-95">
                                    Press & Hold Me
                                </button>
                                <div className="px-4 py-2 bg-orange-500 text-white rounded-lg cursor-pointer transition-all duration-150 active:bg-orange-700 active:transform active:scale-90 select-none">
                                    Click & Hold
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                button:active {'{'}
                                <br />
                                &nbsp;&nbsp;background: #15803d;
                                <br />
                                &nbsp;&nbsp;transform: scale(0.95);
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Structural Examples */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <ListTree className="w-5 h-5" />
                        Live Structural Examples
                    </CardTitle>
                    <CardDescription>
                        See how structural pseudo-classes target elements based on their position in the DOM.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* First/Last Child Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:first-child & :last-child</h4>
                            <ul className="list-none bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden mb-3">
                                <li className="p-3 border-b border-gray-200 dark:border-gray-600 first:bg-blue-100 first:font-bold first:text-blue-800 dark:first:bg-blue-900 dark:first:text-blue-200">
                                    First item (styled with :first-child)
                                </li>
                                <li className="p-3 border-b border-gray-200 dark:border-gray-600">
                                    Regular item
                                </li>
                                <li className="p-3 border-b border-gray-200 dark:border-gray-600">
                                    Another regular item
                                </li>
                                <li className="p-3 last:bg-green-100 last:font-bold last:text-green-800 last:border-b-0 dark:last:bg-green-900 dark:last:text-green-200">
                                    Last item (styled with :last-child)
                                </li>
                            </ul>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                li:first-child {'{'}
                                <br />
                                &nbsp;&nbsp;background: #dbeafe;
                                <br />
                                &nbsp;&nbsp;font-weight: bold;
                                <br />
                                &nbsp;&nbsp;color: #1e40af;
                                <br />
                                {'}'}
                                <br />
                                <br />
                                li:last-child {'{'}
                                <br />
                                &nbsp;&nbsp;background: #dcfce7;
                                <br />
                                &nbsp;&nbsp;border-bottom: none;
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* nth-child Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:nth-child(even) & :nth-child(odd)</h4>
                            <div className="grid grid-cols-1 gap-2 mb-3">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <div 
                                        key={num}
                                        className={`p-3 rounded text-center font-semibold ${
                                            num % 2 === 0 
                                                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' 
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                        }`}
                                    >
                                        Item {num} {num % 2 === 0 ? '(even)' : '(odd)'}
                                    </div>
                                ))}
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                .item:nth-child(even) {'{'}
                                <br />
                                &nbsp;&nbsp;background: #f3e8ff;
                                <br />
                                &nbsp;&nbsp;color: #6b21a8;
                                <br />
                                {'}'}
                                <br />
                                <br />
                                .item:nth-child(odd) {'{'}
                                <br />
                                &nbsp;&nbsp;background: #fef3c7;
                                <br />
                                &nbsp;&nbsp;color: #92400e;
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Form State Examples */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <CheckCircle className="w-5 h-5" />
                        Live Form State Examples
                    </CardTitle>
                    <CardDescription>
                        Try interacting with these form elements to see validation pseudo-classes in action.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Required/Optional Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:required & :optional</h4>
                            <div className="space-y-3 mb-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Required Email:</label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 border-l-4 border-red-500 border-r border-t border-b border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Optional Phone:</label>
                                    <input 
                                        type="tel" 
                                        placeholder="Enter your phone (optional)"
                                        className="w-full px-3 py-2 border-l-4 border-green-500 border-r border-t border-b border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                input:required {'{'}
                                <br />
                                &nbsp;&nbsp;border-left: 4px solid #ef4444;
                                <br />
                                {'}'}
                                <br />
                                <br />
                                input:optional {'{'}
                                <br />
                                &nbsp;&nbsp;border-left: 4px solid #22c55e;
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* Valid/Invalid Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:valid & :invalid</h4>
                            <div className="space-y-3 mb-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email (try typing):</label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="test@example.com"
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none valid:border-green-500 valid:bg-green-50 invalid:border-red-500 invalid:bg-red-50 dark:valid:bg-green-900/20 dark:invalid:bg-red-900/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Number (1-10):</label>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        max="10" 
                                        placeholder="Enter 1-10"
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none valid:border-green-500 valid:bg-green-50 invalid:border-red-500 invalid:bg-red-50 dark:valid:bg-green-900/20 dark:invalid:bg-red-900/20"
                                    />
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                input:valid {'{'}
                                <br />
                                &nbsp;&nbsp;border-color: #22c55e;
                                <br />
                                &nbsp;&nbsp;background-color: #f0fdf4;
                                <br />
                                {'}'}
                                <br />
                                <br />
                                input:invalid {'{'}
                                <br />
                                &nbsp;&nbsp;border-color: #ef4444;
                                <br />
                                &nbsp;&nbsp;background-color: #fef2f2;
                                <br />
                                {'}'}
                            </code>
                        </div>

                        {/* Checked Example */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">:checked</h4>
                            <div className="space-y-3 mb-3">
                                <div className="flex items-center space-x-3">
                                    <input 
                                        type="checkbox" 
                                        id="checkbox1" 
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="checkbox1" className="text-sm font-medium checkbox-label">
                                        Check me to see label change
                                    </label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <input 
                                        type="radio" 
                                        id="radio1" 
                                        name="demo-radio"
                                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                    />
                                    <label htmlFor="radio1" className="text-sm font-medium radio-label">
                                        Option 1
                                    </label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <input 
                                        type="radio" 
                                        id="radio2" 
                                        name="demo-radio"
                                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                    />
                                    <label htmlFor="radio2" className="text-sm font-medium radio-label">
                                        Option 2
                                    </label>
                                </div>
                            </div>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                input:checked + label {'{'}
                                <br />
                                &nbsp;&nbsp;color: #3b82f6;
                                <br />
                                &nbsp;&nbsp;font-weight: bold;
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced nth-child Patterns */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Hash className="w-5 h-5" />
                        Advanced nth-child Patterns
                    </CardTitle>
                    <CardDescription>
                        Explore complex nth-child formulas with live visual examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {nthChildExamples.map((example, index) => (
                            <div key={example.formula} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <h4 className="font-semibold mb-3">:nth-child({example.formula})</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{example.desc}</p>
                                <div className="grid grid-cols-6 gap-2 mb-3">
                                    {Array.from({ length: 12 }, (_, i) => {
                                        const position = i + 1;
                                        let isSelected = false;
                                        
                                        if (example.formula === 'odd') {
                                            isSelected = position % 2 === 1;
                                        } else if (example.formula === 'even') {
                                            isSelected = position % 2 === 0;
                                        } else if (example.formula === '3n') {
                                            isSelected = position % 3 === 0;
                                        } else if (example.formula === '2n+3') {
                                            isSelected = position >= 3 && (position - 3) % 2 === 0;
                                        }
                                        
                                        return (
                                            <div
                                                key={position}
                                                className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded ${
                                                    isSelected
                                                        ? 'bg-orange-500 text-white'
                                                        : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
                                                }`}
                                            >
                                                {position}
                                            </div>
                                        );
                                    })}
                                </div>
                                <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                    .item:nth-child({example.formula}) {'{'}
                                    <br />
                                    &nbsp;&nbsp;background: #f97316;
                                    <br />
                                    &nbsp;&nbsp;color: white;
                                    <br />
                                    {'}'}
                                </code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <style jsx>{`
                input:checked + .checkbox-label {
                    color: #3b82f6;
                    font-weight: bold;
                }
                input[type="radio"]:checked + .radio-label {
                    color: #7c3aed;
                    font-weight: bold;
                }
            `}</style>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Pseudo-classes Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive pseudo-class examples including user interactions, structural selectors, form states, and advanced nth-child patterns.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Pseudo-classes Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Hand className="w-3 h-3" />
                            User Actions
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <ListTree className="w-3 h-3" />
                            Structural
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Form States
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <ArrowRight className="w-3 h-3" />
                            Link States
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Hash className="w-3 h-3" />
                            nth-child
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
