
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, 
    Type, 
    CaseSensitive, 
    Pilcrow, 
    Ruler, 
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Eye,
    Lightbulb,
    Target,
    Zap,
    CheckCircle,
    AlertTriangle,
    Layers,
    Hash,
    Percent,
    Circle,
    Square,
    Sparkles,
    BookOpen,
    Palette,
    Settings,
    Monitor,
    Smartphone,
    Tablet
} from 'lucide-react';
import React from 'react';

interface CssTypographyProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssTypography({ onOpenWebPlayground }: CssTypographyProps) {

    // Font families with examples
    const fontFamilies = [
        {
            name: "Serif",
            fonts: "Georgia, 'Times New Roman', serif",
            desc: "Traditional fonts with decorative strokes. Great for readability in print and formal content.",
            example: "The quick brown fox jumps over the lazy dog.",
            usage: "Articles, books, formal documents",
            pros: "Highly readable, traditional, elegant",
            cons: "Can look outdated on screens"
        },
        {
            name: "Sans-serif",
            fonts: "'Helvetica', Arial, sans-serif",
            desc: "Clean, modern fonts without decorative strokes. Most popular for web content.",
            example: "The quick brown fox jumps over the lazy dog.",
            usage: "UI, headings, modern websites",
            pros: "Clean, modern, screen-friendly",
            cons: "Can lack personality"
        },
        {
            name: "Monospace",
            fonts: "'Courier New', Consolas, monospace",
            desc: "Fixed-width fonts where each character takes the same space. Perfect for code.",
            example: "The quick brown fox jumps over the lazy dog.",
            usage: "Code blocks, technical content",
            pros: "Aligned text, code-friendly",
            cons: "Limited readability for long text"
        },
        {
            name: "Cursive",
            fonts: "'Brush Script MT', cursive",
            desc: "Script-like fonts that mimic handwriting. Use sparingly for decorative purposes.",
            example: "The quick brown fox jumps over the lazy dog.",
            usage: "Signatures, decorative headings",
            pros: "Decorative, personal touch",
            cons: "Poor readability, limited use"
        }
    ];

    // Font size units
    const fontSizeUnits = [
        {
            unit: "px",
            name: "Pixels",
            desc: "Fixed size, doesn't scale with user preferences",
            example: "font-size: 16px;",
            usage: "Precise control needed",
            responsive: false
        },
        {
            unit: "em",
            name: "Em",
            desc: "Relative to parent element's font size",
            example: "font-size: 1.2em;",
            usage: "Scalable components",
            responsive: true
        },
        {
            unit: "rem",
            name: "Root Em",
            desc: "Relative to root element's font size",
            example: "font-size: 1.5rem;",
            usage: "Consistent scaling",
            responsive: true
        },
        {
            unit: "%",
            name: "Percentage",
            desc: "Percentage of parent element's font size",
            example: "font-size: 120%;",
            usage: "Relative sizing",
            responsive: true
        }
    ];

    // Text alignment options
    const textAlignments = [
        { value: "left", icon: AlignLeft, desc: "Default alignment, text flows from left" },
        { value: "center", icon: AlignCenter, desc: "Centers text horizontally" },
        { value: "right", icon: AlignRight, desc: "Aligns text to the right edge" },
        { value: "justify", icon: AlignJustify, desc: "Spreads text evenly across the line" }
    ];

    // Font weights
    const fontWeights = [
        { value: "100", name: "Thin", desc: "Ultra-light weight" },
        { value: "300", name: "Light", desc: "Light weight" },
        { value: "400", name: "Normal", desc: "Default weight" },
        { value: "500", name: "Medium", desc: "Medium weight" },
        { value: "700", name: "Bold", desc: "Bold weight" },
        { value: "900", name: "Black", desc: "Ultra-bold weight" }
    ];

    // Comprehensive playground example
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Typography Complete Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Playfair+Display:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="hero">
            <h1 class="hero-title">CSS Typography</h1>
            <p class="hero-subtitle">Mastering the art of beautiful text</p>
        </header>

        <!-- Font Families -->
        <section class="font-families">
            <h2>🔤 Font Families</h2>
            <div class="font-grid">
                <div class="font-example serif">
                    <h3>Serif Font</h3>
                    <p>Traditional and elegant. Perfect for long-form reading and formal content. The serifs guide the eye along the line.</p>
                </div>
                <div class="font-example sans-serif">
                    <h3>Sans-serif Font</h3>
                    <p>Clean and modern. Excellent for digital screens and user interfaces. Highly legible at all sizes.</p>
                </div>
                <div class="font-example monospace">
                    <h3>Monospace Font</h3>
                    <p>Fixed-width characters. Essential for code, data tables, and technical content where alignment matters.</p>
                </div>
                <div class="font-example cursive">
                    <h3>Cursive Font</h3>
                    <p>Decorative and personal. Use sparingly for signatures, invitations, or creative headings.</p>
                </div>
            </div>
        </section>

        <!-- Font Sizes -->
        <section class="font-sizes">
            <h2>📏 Font Sizes & Units</h2>
            <div class="size-examples">
                <div class="size-demo">
                    <h3>Responsive Units</h3>
                    <p class="size-rem">1.5rem - Scales with root font size</p>
                    <p class="size-em">1.2em - Relative to parent element</p>
                    <p class="size-percent">120% - Percentage of parent</p>
                </div>
                <div class="size-demo">
                    <h3>Fixed Units</h3>
                    <p class="size-px-large">24px - Large fixed size</p>
                    <p class="size-px-medium">16px - Medium fixed size</p>
                    <p class="size-px-small">12px - Small fixed size</p>
                </div>
            </div>
        </section>

        <!-- Font Weights -->
        <section class="font-weights">
            <h2>💪 Font Weights</h2>
            <div class="weight-scale">
                <p class="weight-100">100 - Thin</p>
                <p class="weight-300">300 - Light</p>
                <p class="weight-400">400 - Normal</p>
                <p class="weight-500">500 - Medium</p>
                <p class="weight-700">700 - Bold</p>
                <p class="weight-900">900 - Black</p>
            </div>
        </section>

        <!-- Text Alignment -->
        <section class="text-alignment">
            <h2>📐 Text Alignment</h2>
            <div class="alignment-examples">
                <div class="align-left">
                    <h4>Left Aligned (Default)</h4>
                    <p>This text is aligned to the left edge. It's the most common alignment for body text in left-to-right languages.</p>
                </div>
                <div class="align-center">
                    <h4>Center Aligned</h4>
                    <p>This text is centered horizontally. Great for headings, quotes, or short decorative text.</p>
                </div>
                <div class="align-right">
                    <h4>Right Aligned</h4>
                    <p>This text is aligned to the right edge. Often used for dates, signatures, or special layouts.</p>
                </div>
                <div class="align-justify">
                    <h4>Justified</h4>
                    <p>This text is justified, meaning it's stretched to fill the entire width of the container. The spacing between words is adjusted to create clean edges on both sides.</p>
                </div>
            </div>
        </section>

        <!-- Line Height & Spacing -->
        <section class="spacing">
            <h2>📏 Line Height & Spacing</h2>
            <div class="spacing-examples">
                <div class="spacing-tight">
                    <h4>Tight Line Height (1.2)</h4>
                    <p>This paragraph has tight line spacing. It's compact but can feel cramped for long reading. Best for headings or short text blocks.</p>
                </div>
                <div class="spacing-normal">
                    <h4>Normal Line Height (1.5)</h4>
                    <p>This paragraph has normal line spacing. It provides good readability and is the recommended standard for most body text content.</p>
                </div>
                <div class="spacing-loose">
                    <h4>Loose Line Height (2.0)</h4>
                    <p>This paragraph has loose line spacing. It's very airy and can improve readability for some users, but uses more vertical space.</p>
                </div>
            </div>
        </section>

        <!-- Text Decorations -->
        <section class="text-decorations">
            <h2>✨ Text Decorations & Effects</h2>
            <div class="decoration-grid">
                <div class="decoration-example">
                    <h4>Text Styles</h4>
                    <p class="italic">Italic text for emphasis</p>
                    <p class="bold">Bold text for importance</p>
                    <p class="underline">Underlined text (use sparingly)</p>
                    <p class="strikethrough">Strikethrough for deleted content</p>
                </div>
                <div class="decoration-example">
                    <h4>Text Transform</h4>
                    <p class="uppercase">uppercase text</p>
                    <p class="lowercase">LOWERCASE TEXT</p>
                    <p class="capitalize">capitalize each word</p>
                </div>
                <div class="decoration-example">
                    <h4>Letter & Word Spacing</h4>
                    <p class="letter-spacing">L e t t e r   S p a c i n g</p>
                    <p class="word-spacing">Word   Spacing   Example</p>
                </div>
            </div>
        </section>

        <!-- Typography Hierarchy -->
        <section class="typography-hierarchy">
            <h2>🏗️ Typography Hierarchy</h2>
            <div class="hierarchy-example">
                <h1 class="h1-example">H1: Main Page Title</h1>
                <h2 class="h2-example">H2: Section Heading</h2>
                <h3 class="h3-example">H3: Subsection Heading</h3>
                <h4 class="h4-example">H4: Minor Heading</h4>
                <p class="body-large">Large body text for introductions or important paragraphs.</p>
                <p class="body-normal">Normal body text for regular content and reading.</p>
                <p class="body-small">Small text for captions, footnotes, or secondary information.</p>
            </div>
        </section>

        <!-- Accessibility -->
        <section class="accessibility">
            <h2>♿ Typography Accessibility</h2>
            <div class="accessibility-examples">
                <div class="good-typography">
                    <h4>✅ Good Typography</h4>
                    <p>This text has good contrast, appropriate size (16px+), and comfortable line spacing (1.5). It's easy to read for everyone.</p>
                </div>
                <div class="poor-typography">
                    <h4>❌ Poor Typography</h4>
                    <p>This text is too small, has poor contrast, and tight spacing. It's difficult to read and not accessible.</p>
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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Hero Section */
.hero {
    text-align: center;
    margin-bottom: 4rem;
    padding: 3rem 0;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.hero-subtitle {
    font-size: 1.25rem;
    color: #7f8c8d;
    font-weight: 300;
    letter-spacing: 1px;
}

/* Section Styling */
section {
    background: white;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

h2 {
    color: #34495e;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    border-left: 4px solid #3498db;
    padding-left: 1rem;
}

/* Font Families */
.font-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.font-example {
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px solid #ecf0f1;
    transition: transform 0.2s, box-shadow 0.2s;
}

.font-example:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.serif {
    font-family: 'Playfair Display', Georgia, serif;
    background: linear-gradient(135deg, #ffeaa7, #fab1a0);
}

.sans-serif {
    font-family: 'Inter', Arial, sans-serif;
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    color: white;
}

.monospace {
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    color: white;
}

.cursive {
    font-family: 'Dancing Script', cursive;
    background: linear-gradient(135deg, #fd79a8, #e84393);
    color: white;
}

/* Font Sizes */
.size-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.size-demo {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid #3498db;
}

.size-rem { font-size: 1.5rem; color: #e74c3c; }
.size-em { font-size: 1.2em; color: #f39c12; }
.size-percent { font-size: 120%; color: #27ae60; }
.size-px-large { font-size: 24px; color: #8e44ad; }
.size-px-medium { font-size: 16px; color: #2980b9; }
.size-px-small { font-size: 12px; color: #95a5a6; }

/* Font Weights */
.weight-scale {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.weight-scale p {
    padding: 1rem;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border-radius: 8px;
    text-align: center;
    font-size: 1.1rem;
}

.weight-100 { font-weight: 100; }
.weight-300 { font-weight: 300; }
.weight-400 { font-weight: 400; }
.weight-500 { font-weight: 500; }
.weight-700 { font-weight: 700; }
.weight-900 { font-weight: 900; }

/* Text Alignment */
.alignment-examples {
    display: grid;
    gap: 1.5rem;
}

.alignment-examples > div {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
    border: 1px solid #dee2e6;
}

.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }
.align-justify { text-align: justify; }

/* Spacing Examples */
.spacing-examples {
    display: grid;
    gap: 1.5rem;
}

.spacing-examples > div {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.spacing-tight p { line-height: 1.2; }
.spacing-normal p { line-height: 1.5; }
.spacing-loose p { line-height: 2.0; }

/* Text Decorations */
.decoration-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.decoration-example {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.italic { font-style: italic; }
.bold { font-weight: bold; }
.underline { text-decoration: underline; }
.strikethrough { text-decoration: line-through; }
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.letter-spacing { letter-spacing: 0.2em; }
.word-spacing { word-spacing: 0.5em; }

/* Typography Hierarchy */
.hierarchy-example {
    padding: 2rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 15px;
}

.h1-example {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
}

.h2-example {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.h3-example {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.h4-example {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.body-large {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.body-normal {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.8;
}

.body-small {
    font-size: 0.875rem;
    opacity: 0.7;
}

/* Accessibility Examples */
.accessibility-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.good-typography {
    padding: 1.5rem;
    background: #d4edda;
    border: 2px solid #28a745;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: #155724;
}

.poor-typography {
    padding: 1.5rem;
    background: #f8d7da;
    border: 2px solid #dc3545;
    border-radius: 10px;
    font-size: 12px;
    line-height: 1.1;
    color: #721c24;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    .font-grid,
    .size-examples,
    .weight-scale {
        grid-template-columns: 1fr;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    section {
        padding: 1.5rem;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
    }
    
    .container {
        max-width: none;
        padding: 0;
    }
    
    section {
        box-shadow: none;
        border: 1px solid #ccc;
        page-break-inside: avoid;
    }
}`,
        js: `// Interactive typography demonstrations
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive hover effects
    const fontExamples = document.querySelectorAll('.font-example');
    fontExamples.forEach(example => {
        example.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) translateY(-4px)';
            this.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
        });
        
        example.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
    
    // Dynamic font size demonstration
    const sizeDemo = document.querySelector('.size-demo');
    if (sizeDemo) {
        let isLarge = false;
        sizeDemo.addEventListener('click', function() {
            const remElement = this.querySelector('.size-rem');
            if (remElement) {
                isLarge = !isLarge;
                remElement.style.fontSize = isLarge ? '2rem' : '1.5rem';
                remElement.textContent = isLarge ? '2rem - Larger size!' : '1.5rem - Scales with root font size';
            }
        });
    }
    
    // Typography accessibility checker
    function checkTypographyAccessibility() {
        const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
        elements.forEach(el => {
            const styles = window.getComputedStyle(el);
            const fontSize = parseFloat(styles.fontSize);
            const lineHeight = parseFloat(styles.lineHeight);
            
            if (fontSize < 16) {
                console.warn('Small font size detected:', fontSize + 'px', el);
            }
            
            if (lineHeight / fontSize < 1.4) {
                console.warn('Tight line height detected:', lineHeight / fontSize, el);
            }
        });
    }
    
    // Run accessibility check
    setTimeout(checkTypographyAccessibility, 1000);
    
    console.log('🔤 CSS Typography demo loaded successfully!');
    console.log('💡 Tip: Use relative units (rem, em) for better accessibility');
    console.log('📖 Remember: Maintain good contrast and readable font sizes');
    console.log('♿ Accessibility: Minimum 16px font size, 1.5 line height recommended');
});

// Font loading optimization
if ('fonts' in document) {
    document.fonts.ready.then(function() {
        console.log('✅ All fonts loaded successfully');
        document.body.classList.add('fonts-loaded');
    });
}

// Add CSS for font loading
const style = document.createElement('style');
style.textContent = \`
    .fonts-loaded {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
    
    body:not(.fonts-loaded) {
        opacity: 0.9;
    }
\`;
document.head.appendChild(style);`
    };


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Type className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Typography</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of beautiful, readable text with comprehensive typography techniques and best practices.
                </p>
            </div>

            {/* Font Families */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Type className="w-5 h-5 text-blue-500" />
                        Font Families & Categories
                    </CardTitle>
                    <CardDescription>
                        Understanding different font types and when to use them for optimal readability and design.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {fontFamilies.map((font, index) => (
                            <div key={font.name} className="bg-muted/50 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-3">
                                    <Type className="w-5 h-5 text-purple-500" />
                                    <h3 className="font-bold text-lg">{font.name}</h3>
                                </div>
                                <div 
                                    className="mb-3 p-3 bg-white rounded border text-center"
                                    style={{ fontFamily: font.fonts }}
                                >
                                    {font.example}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{font.desc}</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3 text-green-500" />
                                        <span className="text-xs text-green-700 dark:text-green-400">{font.pros}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <AlertTriangle className="w-3 h-3 text-orange-500" />
                                        <span className="text-xs text-orange-700 dark:text-orange-400">{font.cons}</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                        {font.usage}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Font Size Units */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-green-500" />
                        Font Size Units
                    </CardTitle>
                    <CardDescription>
                        Different units for sizing text and their impact on responsiveness and accessibility.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {fontSizeUnits.map((unit, index) => (
                            <div key={unit.unit} className="bg-muted/30 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-2">
                                    <Hash className="w-4 h-4 text-blue-500" />
                                    <code className="font-mono font-bold text-sm">{unit.unit}</code>
                                </div>
                                <h4 className="font-semibold text-sm mb-2">{unit.name}</h4>
                                <p className="text-xs text-muted-foreground mb-2">{unit.desc}</p>
                                <code className="text-xs bg-background p-1 rounded block mb-2">
                                    {unit.example}
                                </code>
                                <div className="flex items-center gap-2">
                                    <Badge variant={unit.responsive ? "default" : "secondary"} className="text-xs">
                                        {unit.responsive ? "Responsive" : "Fixed"}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Text Alignment */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlignLeft className="w-5 h-5 text-purple-500" />
                        Text Alignment
                    </CardTitle>
                    <CardDescription>
                        Control how text is positioned horizontally within its container.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {textAlignments.map((alignment, index) => (
                            <div key={alignment.value} className="bg-muted/30 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-3">
                                    <alignment.icon className="w-4 h-4 text-blue-500" />
                                    <code className="font-mono font-bold text-sm">text-align: {alignment.value}</code>
                                </div>
                                <div 
                                    className="bg-white p-3 rounded border mb-2"
                                    style={{ textAlign: alignment.value as any }}
                                >
                                    This text demonstrates {alignment.value} alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                <p className="text-xs text-muted-foreground">{alignment.desc}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Font Weights */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Bold className="w-5 h-5" />
                        Font Weights
                    </CardTitle>
                    <CardDescription>
                        Control the thickness of your text from thin to ultra-bold.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {fontWeights.map((weight, index) => (
                            <div key={weight.value} className="text-center">
                                <div 
                                    className="bg-white dark:bg-gray-800 p-3 rounded-lg border mb-2"
                                    style={{ fontWeight: weight.value }}
                                >
                                    <div className="text-2xl mb-1">Aa</div>
                                    <div className="text-xs">{weight.name}</div>
                                </div>
                                <code className="text-xs bg-muted px-2 py-1 rounded">{weight.value}</code>
                                <p className="text-xs text-muted-foreground mt-1">{weight.desc}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Line Height & Spacing */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Pilcrow className="w-5 h-5 text-teal-500" />
                        Line Height & Spacing
                    </CardTitle>
                    <CardDescription>
                        Control vertical spacing between lines and characters for optimal readability.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Circle className="w-4 h-4 text-red-500" />
                                Tight (1.2)
                            </h4>
                            <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded border">
                                <p style={{ lineHeight: 1.2 }} className="text-sm">
                                    This text has tight line spacing. It's compact but can feel cramped for long reading. Best for headings or short text blocks where space is limited.
                                </p>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">line-height: 1.2;</code>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Normal (1.5)
                            </h4>
                            <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded border">
                                <p style={{ lineHeight: 1.5 }} className="text-sm">
                                    This text has normal line spacing. It provides good readability and is the recommended standard for most body text content and paragraphs.
                                </p>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">line-height: 1.5;</code>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Circle className="w-4 h-4 text-blue-500" />
                                Loose (2.0)
                            </h4>
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded border">
                                <p style={{ lineHeight: 2.0 }} className="text-sm">
                                    This text has loose line spacing. It's very airy and can improve readability for some users, but uses more vertical space on the page.
                                </p>
                            </div>
                            <code className="text-xs bg-muted p-2 rounded block">line-height: 2.0;</code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Text Decorations */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        Text Decorations & Effects
                    </CardTitle>
                    <CardDescription>
                        Add visual emphasis and styling to your text with various decoration properties.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Italic className="w-4 h-4 text-blue-500" />
                                Text Styles
                            </h4>
                            <div className="space-y-2">
                                <p className="italic">Italic text for emphasis</p>
                                <p className="font-bold">Bold text for importance</p>
                                <p className="underline">Underlined text (use sparingly)</p>
                                <p className="line-through">Strikethrough for deleted content</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CaseSensitive className="w-4 h-4 text-green-500" />
                                Text Transform
                            </h4>
                            <div className="space-y-2">
                                <p className="uppercase">uppercase text</p>
                                <p className="lowercase">LOWERCASE TEXT</p>
                                <p className="capitalize">capitalize each word</p>
                                <p>normal case text</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Settings className="w-4 h-4 text-purple-500" />
                                Letter Spacing
                            </h4>
                            <div className="space-y-2">
                                <p style={{ letterSpacing: '0.1em' }}>Normal spacing</p>
                                <p style={{ letterSpacing: '0.2em' }}>Wide spacing</p>
                                <p style={{ letterSpacing: '-0.05em' }}>Tight spacing</p>
                                <p style={{ wordSpacing: '0.5em' }}>Word spacing</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Typography Hierarchy */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Layers className="w-5 h-5" />
                        Typography Hierarchy
                    </CardTitle>
                    <CardDescription>
                        Create visual hierarchy with consistent sizing and spacing for headings and body text.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">H1: Main Page Title</h1>
                        <h2 className="text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-100">H2: Section Heading</h2>
                        <h3 className="text-2xl font-medium mb-2 text-gray-700 dark:text-gray-200">H3: Subsection Heading</h3>
                        <h4 className="text-xl font-medium mb-2 text-gray-600 dark:text-gray-300">H4: Minor Heading</h4>
                        <p className="text-lg mb-3 text-gray-600 dark:text-gray-300">Large body text for introductions or important paragraphs.</p>
                        <p className="text-base mb-3 text-gray-700 dark:text-gray-300">Normal body text for regular content and reading.</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Small text for captions, footnotes, or secondary information.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Accessibility */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Eye className="w-5 h-5" />
                        Typography Accessibility
                    </CardTitle>
                    <CardDescription>
                        Ensure your typography is readable and accessible to all users, including those with visual impairments.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                ✅ Good Typography
                            </h4>
                            <p className="text-green-700 dark:text-green-300" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                                This text has good contrast, appropriate size (16px+), and comfortable line spacing (1.5). It's easy to read for everyone.
                            </p>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Poor Typography
                            </h4>
                            <p className="text-red-600 dark:text-red-400" style={{ fontSize: '12px', lineHeight: 1.1 }}>
                                This text is too small, has poor contrast, and tight spacing. It's difficult to read and not accessible.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-500" />
                            Accessibility Guidelines
                        </h4>
                        <ul className="text-sm space-y-1">
                            <li>• <strong>Minimum font size:</strong> 16px for body text</li>
                            <li>• <strong>Line height:</strong> 1.5 or greater for readability</li>
                            <li>• <strong>Contrast ratio:</strong> 4.5:1 for normal text, 3:1 for large text</li>
                            <li>• <strong>Font choice:</strong> Use readable fonts, avoid decorative fonts for body text</li>
                            <li>• <strong>Responsive design:</strong> Use relative units (rem, em) for scalability</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Responsive Typography */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Monitor className="w-5 h-5" />
                        Responsive Typography
                    </CardTitle>
                    <CardDescription>
                        Make your typography adapt beautifully across different screen sizes and devices.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                            <h4 className="font-semibold text-sm">Desktop</h4>
                            <p className="text-xs text-muted-foreground">Large screens, comfortable reading distance</p>
                            <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">font-size: 18px;</code>
                        </div>
                        <div className="text-center">
                            <Tablet className="w-8 h-8 mx-auto mb-2 text-green-500" />
                            <h4 className="font-semibold text-sm">Tablet</h4>
                            <p className="text-xs text-muted-foreground">Medium screens, touch interface</p>
                            <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">font-size: 16px;</code>
                        </div>
                        <div className="text-center">
                            <Smartphone className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                            <h4 className="font-semibold text-sm">Mobile</h4>
                            <p className="text-xs text-muted-foreground">Small screens, close reading distance</p>
                            <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">font-size: 16px;</code>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Responsive Techniques</h4>
                        <div className="space-y-2 text-sm">
                            <div><code className="bg-muted px-2 py-1 rounded">clamp(1rem, 4vw, 2rem)</code> - Fluid scaling between min and max</div>
                            <div><code className="bg-muted px-2 py-1 rounded">@media queries</code> - Breakpoint-specific sizing</div>
                            <div><code className="bg-muted px-2 py-1 rounded">rem units</code> - Scale with root font size</div>
                            <div><code className="bg-muted px-2 py-1 rounded">viewport units</code> - Scale with screen size</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Typography Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive typography examples including font families, sizes, weights, spacing, hierarchy, and accessibility demonstrations with Google Fonts integration.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Typography Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Type className="w-3 h-3" />
                            Font Families
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Ruler className="w-3 h-3" />
                            Responsive Sizing
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            Accessibility Tests
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Layers className="w-3 h-3" />
                            Typography Hierarchy
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
