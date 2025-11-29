'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Search, Target, Filter, Hash, 
    FileText, Link, Image, Mail, Lock,
    Eye, Settings, CheckCircle, AlertTriangle,
    Zap, Grid3X3, Monitor, Smartphone, Code
} from 'lucide-react';

interface CssAttributeSelectorsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssAttributeSelectors({ onOpenWebPlayground }: CssAttributeSelectorsProps) {
    const [selectedSelector, setSelectedSelector] = useState('presence');

    // Comprehensive Attribute Selector Types
    const attributeSelectorTypes = [
        {
            name: 'presence',
            symbol: '[attr]',
            icon: Target,
            title: 'Attribute Presence',
            syntax: '[disabled]',
            desc: 'Selects elements that have the specified attribute, regardless of its value.',
            example: 'input[required]',
            htmlExample: '<input type="text" required>',
            color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300',
            textColor: 'text-blue-800 dark:text-blue-200',
            useCase: 'Form validation, feature detection'
        },
        {
            name: 'exact',
            symbol: '[attr="value"]',
            icon: Hash,
            title: 'Exact Value Match',
            syntax: '[type="email"]',
            desc: 'Selects elements where the attribute value exactly matches the specified value.',
            example: 'input[type="password"]',
            htmlExample: '<input type="password">',
            color: 'bg-green-100 dark:bg-green-900/30 border-green-300',
            textColor: 'text-green-800 dark:text-green-200',
            useCase: 'Form inputs, specific element types'
        },
        {
            name: 'contains',
            symbol: '[attr*="value"]',
            icon: Search,
            title: 'Contains Substring',
            syntax: '[class*="btn"]',
            desc: 'Selects elements where the attribute value contains the specified substring anywhere.',
            example: '[alt*="logo"]',
            htmlExample: '<img alt="company-logo-2024">',
            color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300',
            textColor: 'text-purple-800 dark:text-purple-200',
            useCase: 'Partial matches, flexible targeting'
        },
        {
            name: 'starts',
            symbol: '[attr^="value"]',
            icon: FileText,
            title: 'Starts With',
            syntax: '[href^="https"]',
            desc: 'Selects elements where the attribute value starts with the specified string.',
            example: '[src^="/images"]',
            htmlExample: '<img src="/images/photo.jpg">',
            color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300',
            textColor: 'text-orange-800 dark:text-orange-200',
            useCase: 'URL patterns, file paths'
        },
        {
            name: 'ends',
            symbol: '[attr$="value"]',
            icon: Link,
            title: 'Ends With',
            syntax: '[href$=".pdf"]',
            desc: 'Selects elements where the attribute value ends with the specified string.',
            example: '[src$=".jpg"]',
            htmlExample: '<a href="document.pdf">',
            color: 'bg-pink-100 dark:bg-pink-900/30 border-pink-300',
            textColor: 'text-pink-800 dark:text-pink-200',
            useCase: 'File extensions, URL endings'
        },
        {
            name: 'word',
            symbol: '[attr~="value"]',
            icon: Filter,
            title: 'Word in List',
            syntax: '[class~="active"]',
            desc: 'Selects elements where the attribute contains the specified word as a complete word in a space-separated list.',
            example: '[title~="important"]',
            htmlExample: '<div title="very important note">',
            color: 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300',
            textColor: 'text-indigo-800 dark:text-indigo-200',
            useCase: 'CSS classes, space-separated values'
        },
        {
            name: 'lang',
            symbol: '[attr|="value"]',
            icon: Grid3X3,
            title: 'Language Prefix',
            syntax: '[lang|="en"]',
            desc: 'Selects elements where the attribute value is exactly the specified value or starts with it followed by a hyphen.',
            example: '[hreflang|="en"]',
            htmlExample: '<html lang="en-US">',
            color: 'bg-teal-100 dark:bg-teal-900/30 border-teal-300',
            textColor: 'text-teal-800 dark:text-teal-200',
            useCase: 'Language codes, hyphenated values'
        }
    ];

    // Practical Examples
    const practicalExamples = [
        {
            category: 'Form Elements',
            examples: [
                { selector: 'input[type="email"]', desc: 'Email input fields', usage: 'Form styling' },
                { selector: 'input[required]', desc: 'Required form fields', usage: 'Validation indicators' },
                { selector: 'input[disabled]', desc: 'Disabled form controls', usage: 'Visual feedback' }
            ]
        },
        {
            category: 'Links & Media',
            examples: [
                { selector: 'a[href^="http"]', desc: 'External links', usage: 'Different styling for external links' },
                { selector: 'a[href$=".pdf"]', desc: 'PDF download links', usage: 'File type indicators' },
                { selector: 'img[alt*="icon"]', desc: 'Icon images', usage: 'Icon-specific styling' }
            ]
        },
        {
            category: 'Data Attributes',
            examples: [
                { selector: '[data-state="active"]', desc: 'Active state elements', usage: 'Component states' },
                { selector: '[data-theme*="dark"]', desc: 'Dark theme elements', usage: 'Theme-based styling' },
                { selector: '[aria-expanded="true"]', desc: 'Expanded UI elements', usage: 'Accessibility states' }
            ]
        }
    ];

    // Advanced Patterns
    const advancedPatterns = [
        {
            pattern: 'Multiple Attributes',
            selector: 'input[type="text"][required]',
            description: 'Combine multiple attribute selectors',
            example: 'Required text inputs only'
        },
        {
            pattern: 'Case Insensitive',
            selector: '[title*="IMPORTANT" i]',
            description: 'Case-insensitive matching with i flag',
            example: 'Matches "important", "Important", "IMPORTANT"'
        },
        {
            pattern: 'Negation',
            selector: 'input:not([type="hidden"])',
            description: 'Select elements without specific attributes',
            example: 'All inputs except hidden ones'
        },
        {
            pattern: 'Complex Combinations',
            selector: 'a[href^="mailto:"], a[href^="tel:"]',
            description: 'Multiple selectors with comma separation',
            example: 'Email and phone links'
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Attribute Selectors Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>CSS Attribute Selectors: Complete Guide</h1>
        
        <section class="demo-section">
            <h2>Attribute Presence Selector [attr]</h2>
            <div class="example-container">
                <form class="demo-form">
                    <input type="text" placeholder="Optional field">
                    <input type="email" required placeholder="Required email">
                    <input type="password" required placeholder="Required password">
                    <button type="submit" disabled>Submit</button>
                </form>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>[required] { border: 2px solid red; }</code><br>
                <strong>CSS:</strong> <code>[disabled] { opacity: 0.5; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Exact Value Match [attr="value"]</h2>
            <div class="example-container">
                <div class="input-types">
                    <input type="text" placeholder="Text input">
                    <input type="email" placeholder="Email input">
                    <input type="password" placeholder="Password input">
                    <input type="number" placeholder="Number input">
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>input[type="email"] { background: lightblue; }</code><br>
                <strong>CSS:</strong> <code>input[type="password"] { background: lightcoral; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Contains Substring [attr*="value"]</h2>
            <div class="example-container">
                <div class="image-gallery">
                    <img src="logo-main.png" alt="company-logo-header" width="100" height="50">
                    <img src="photo1.jpg" alt="team-photo-2024" width="100" height="50">
                    <img src="icon.svg" alt="menu-icon-svg" width="100" height="50">
                    <img src="banner.png" alt="promotional-banner" width="100" height="50">
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>[alt*="logo"] { border: 3px solid gold; }</code><br>
                <strong>CSS:</strong> <code>[alt*="icon"] { border-radius: 50%; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Starts With [attr^="value"]</h2>
            <div class="example-container">
                <div class="link-examples">
                    <a href="https://example.com">External HTTPS Link</a>
                    <a href="http://old-site.com">External HTTP Link</a>
                    <a href="/internal/page">Internal Link</a>
                    <a href="mailto:contact@example.com">Email Link</a>
                    <a href="tel:+1234567890">Phone Link</a>
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>a[href^="https"] { color: green; }</code><br>
                <strong>CSS:</strong> <code>a[href^="mailto"] { color: blue; }</code><br>
                <strong>CSS:</strong> <code>a[href^="tel"] { color: purple; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Ends With [attr$="value"]</h2>
            <div class="example-container">
                <div class="file-links">
                    <a href="document.pdf">PDF Document</a>
                    <a href="image.jpg">JPEG Image</a>
                    <a href="video.mp4">MP4 Video</a>
                    <a href="archive.zip">ZIP Archive</a>
                    <a href="page.html">HTML Page</a>
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>a[href$=".pdf"] { color: red; }</code><br>
                <strong>CSS:</strong> <code>a[href$=".jpg"] { color: orange; }</code><br>
                <strong>CSS:</strong> <code>a[href$=".mp4"] { color: purple; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Word in List [attr~="value"]</h2>
            <div class="example-container">
                <div class="class-examples">
                    <div class="btn primary">Primary Button</div>
                    <div class="btn secondary active">Active Secondary</div>
                    <div class="card featured">Featured Card</div>
                    <div class="card active featured">Active Featured Card</div>
                </div>
            </div>
            <div class="code-example">
                <strong>CSS:</strong> <code>[class~="active"] { box-shadow: 0 0 10px blue; }</code><br>
                <strong>CSS:</strong> <code>[class~="featured"] { border: 2px solid gold; }</code>
            </div>
        </section>

        <section class="demo-section">
            <h2>Interactive Attribute Selector Tester</h2>
            <div class="interactive-demo">
                <div class="controls">
                    <button onclick="testSelector('presence')">Presence [attr]</button>
                    <button onclick="testSelector('exact')">Exact [attr="value"]</button>
                    <button onclick="testSelector('contains')">Contains [attr*="value"]</button>
                    <button onclick="testSelector('starts')">Starts [attr^="value"]</button>
                    <button onclick="testSelector('ends')">Ends [attr$="value"]</button>
                    <button onclick="testSelector('word')">Word [attr~="value"]</button>
                    <button onclick="testSelector('reset')">Reset</button>
                </div>
                <div class="test-elements">
                    <div data-test="example" class="btn primary active" title="primary button">Primary Active Button</div>
                    <div data-test="sample" class="btn secondary" title="secondary button">Secondary Button</div>
                    <input type="email" placeholder="Email input" data-test="input">
                    <a href="https://example.com" data-test="external">External Link</a>
                    <a href="document.pdf" data-test="file">PDF Link</a>
                </div>
                <div class="current-selector" id="currentSelector">
                    Click a button to test different attribute selectors
                </div>
            </div>
        </section>

        <section class="demo-section">
            <h2>Real-World Form Example</h2>
            <div class="form-example">
                <form class="styled-form">
                    <div class="form-group">
                        <label for="name">Name (Required)</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email (Required)</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone (Optional)</label>
                        <input type="tel" id="phone">
                    </div>
                    <div class="form-group">
                        <label for="website">Website</label>
                        <input type="url" id="website" placeholder="https://">
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="newsletter" checked>
                        <label for="newsletter">Subscribe to newsletter</label>
                    </div>
                    <button type="submit">Submit Form</button>
                </form>
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

/* Attribute Presence Demo */
.demo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
}

.demo-form input, .demo-form button {
    padding: 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
}

[required] {
    border: 2px solid #dc3545 !important;
    background-color: #fff5f5;
}

[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Exact Value Match Demo */
.input-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.input-types input {
    padding: 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
}

input[type="email"] {
    background: lightblue !important;
    border-color: #007bff;
}

input[type="password"] {
    background: lightcoral !important;
    border-color: #dc3545;
}

input[type="number"] {
    background: lightgreen !important;
    border-color: #28a745;
}

/* Contains Substring Demo */
.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    align-items: center;
}

.image-gallery img {
    background: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 5px;
    display: block;
    text-align: center;
    padding: 1rem;
}

[alt*="logo"] {
    border: 3px solid gold !important;
    background: #fff9c4 !important;
}

[alt*="icon"] {
    border-radius: 50% !important;
    border: 3px solid #6f42c1 !important;
}

/* Starts With Demo */
.link-examples {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.link-examples a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #dee2e6;
    background: #f8f9fa;
    transition: all 0.3s ease;
}

a[href^="https"] {
    color: green !important;
    background: #d4edda !important;
    border-color: #28a745 !important;
}

a[href^="http"]:not([href^="https"]) {
    color: orange !important;
    background: #fff3cd !important;
    border-color: #ffc107 !important;
}

a[href^="mailto"] {
    color: blue !important;
    background: #cce5ff !important;
    border-color: #007bff !important;
}

a[href^="tel"] {
    color: purple !important;
    background: #e2d5f1 !important;
    border-color: #6f42c1 !important;
}

/* Ends With Demo */
.file-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.file-links a {
    padding: 1rem;
    text-decoration: none;
    border-radius: 8px;
    border: 2px solid #dee2e6;
    background: #f8f9fa;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
}

a[href$=".pdf"] {
    color: red !important;
    background: #f8d7da !important;
    border-color: #dc3545 !important;
}

a[href$=".jpg"] {
    color: orange !important;
    background: #fff3cd !important;
    border-color: #ffc107 !important;
}

a[href$=".mp4"] {
    color: purple !important;
    background: #e2d5f1 !important;
    border-color: #6f42c1 !important;
}

a[href$=".zip"] {
    color: brown !important;
    background: #f5f5f5 !important;
    border-color: #6c757d !important;
}

/* Word in List Demo */
.class-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.btn, .card {
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    border: 2px solid #dee2e6;
    background: #f8f9fa;
}

[class~="active"] {
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.5) !important;
    border-color: #007bff !important;
}

[class~="featured"] {
    border: 3px solid gold !important;
    background: #fff9c4 !important;
}

.primary { background: #007bff; color: white; }
.secondary { background: #6c757d; color: white; }

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

.test-elements > * {
    padding: 1rem;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    background: #fff;
    text-align: center;
    transition: all 0.3s ease;
}

.test-elements .highlighted {
    background: #d4edda !important;
    border: 2px solid #28a745 !important;
    color: #155724 !important;
    font-weight: bold;
    transform: scale(1.05);
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

/* Form Example */
.form-example {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid #dee2e6;
}

.styled-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1rem;
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
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
}

.form-group input[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
}

/* Form-specific attribute selectors */
input[type="email"]:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

input[type="tel"] {
    background-color: #e8f4f8;
}

input[type="url"] {
    background-color: #f0f8e8;
}

input[required]:invalid {
    border-color: #dc3545;
    background-color: #fff5f5;
}

input[required]:valid {
    border-color: #28a745;
    background-color: #f8fff8;
}

input[checked] + label {
    color: #007bff;
    font-weight: bold;
}

.styled-form button {
    width: 100%;
    padding: 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

.styled-form button:hover {
    background: #0056b3;
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

/* Responsive Design */
@media (max-width: 768px) {
    .container { padding: 1rem; }
    h1 { font-size: 2rem; }
    .controls { justify-content: center; }
    .test-elements { grid-template-columns: 1fr; }
    .input-types { grid-template-columns: 1fr; }
    .file-links { grid-template-columns: 1fr; }
}`,
        js: `// Interactive CSS Attribute Selectors Demo
document.addEventListener('DOMContentLoaded', function() {
    const testElements = document.querySelectorAll('.test-elements > *');
    const currentSelector = document.getElementById('currentSelector');

    function clearHighlights() {
        testElements.forEach(el => {
            el.classList.remove('highlighted');
        });
    }

    window.testSelector = function(type) {
        clearHighlights();
        
        switch(type) {
            case 'presence':
                // Select elements with data-test attribute
                document.querySelectorAll('[data-test]').forEach(el => {
                    el.classList.add('highlighted');
                });
                currentSelector.textContent = 'Presence: [data-test] - Selects all elements with data-test attribute';
                break;
                
            case 'exact':
                // Select elements with exact attribute value
                document.querySelectorAll('[type="email"]').forEach(el => {
                    el.classList.add('highlighted');
                });
                currentSelector.textContent = 'Exact Match: [type="email"] - Selects elements where type exactly equals "email"';
                break;
                
            case 'contains':
                // Select elements where class contains "btn"
                document.querySelectorAll('[class*="btn"]').forEach(el => {
                    el.classList.add('highlighted');
                });
                currentSelector.textContent = 'Contains: [class*="btn"] - Selects elements where class contains "btn"';
                break;
                
            case 'starts':
                // Select elements where href starts with "https"
                document.querySelectorAll('[href^="https"]').forEach(el => {
                    el.classList.add('highlighted');
                });
                currentSelector.textContent = 'Starts With: [href^="https"] - Selects elements where href starts with "https"';
                break;
                
            case 'ends':
                // Select elements where href ends with ".pdf"
                document.querySelectorAll('[href$=".pdf"]').forEach(el => {
                    el.classList.add('highlighted');
                });
                currentSelector.textContent = 'Ends With: [href$=".pdf"] - Selects elements where href ends with ".pdf"';
                break;
                
            case 'word':
                // Select elements where class contains "active" as a word
                document.querySelectorAll('[class~="active"]').forEach(el => {
                    el.classList.add('highlighted');
                });
                currentSelector.textContent = 'Word Match: [class~="active"] - Selects elements where class contains "active" as a complete word';
                break;
                
            case 'reset':
                currentSelector.textContent = 'Click a button to test different attribute selectors';
                break;
        }
        
        console.log('Attribute selector demo:', type);
    };

    // Add hover effects to demo elements
    const demoElements = document.querySelectorAll('.test-elements > *, .demo-form input, .input-types input');
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

    // Form validation demo
    const formInputs = document.querySelectorAll('.styled-form input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            // This will trigger the :valid and :invalid pseudo-classes
            // which work with attribute selectors for required fields
        });
    });

    console.log('CSS Attribute Selectors Demo loaded successfully!');
    console.log('Use the interactive controls to see how different attribute selectors work.');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Target className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Attribute Selectors</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Target elements based on their attributes and values with powerful and flexible selectors.
                </p>
            </div>

            {/* Attribute Selector Types Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-blue-500" />
                        Attribute Selector Types
                    </CardTitle>
                    <CardDescription>
                        Understanding the seven main attribute selector patterns and their specific use cases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {attributeSelectorTypes.map((type, index) => (
                            <div 
                                key={type.name} 
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    selectedSelector === type.name 
                                        ? 'ring-2 ring-primary ring-offset-2' 
                                        : ''
                                } ${type.color}`}
                                onClick={() => setSelectedSelector(type.name)}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <type.icon className={`w-5 h-5 ${type.textColor}`} />
                                    <h3 className={`font-bold text-lg ${type.textColor}`}>
                                        {type.title}
                                    </h3>
                                    <Badge variant="secondary" className="text-xs font-mono">
                                        {type.symbol}
                                    </Badge>
                                </div>
                                <p className={`text-sm mb-3 ${type.textColor}`}>{type.desc}</p>
                                <div className="space-y-2">
                                    <code className="text-xs bg-muted p-2 rounded block text-center">
                                        {type.syntax}
                                    </code>
                                    <div className="text-xs">
                                        <strong>Example:</strong> {type.example}
                                    </div>
                                    <div className="text-xs">
                                        <strong>HTML:</strong> <code>{type.htmlExample}</code>
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

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Attribute Selector Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive attribute selector examples including all seven types, form validation, file type detection, and advanced pattern matching.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Attribute Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Presence Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Hash className="w-3 h-3" />
                            Exact Match
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Search className="w-3 h-3" />
                            Contains Demo
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            Starts/Ends
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Filter className="w-3 h-3" />
                            Word Match
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
