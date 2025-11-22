
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Smartphone, Tablet, Laptop, Monitor, Tv, Scaling, Lightbulb,
    ArrowRightLeft, ArrowUpDown, Maximize, Minimize, Settings, Target,
    CheckCircle, AlertTriangle, Code, Hash, Plus, Zap, Grid, Layout
} from 'lucide-react';

interface CssResponsiveDesignProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssResponsiveDesign({ onOpenWebPlayground }: CssResponsiveDesignProps) {
    const [selectedBreakpoint, setSelectedBreakpoint] = useState('mobile');
    const [selectedUnit, setSelectedUnit] = useState('rem');

    // Device Breakpoints
    const deviceBreakpoints = [
        {
            name: 'mobile',
            title: 'Mobile',
            icon: Smartphone,
            width: '320px - 768px',
            desc: 'Phones and small tablets in portrait mode',
            mediaQuery: 'max-width: 767px',
            color: 'bg-blue-500'
        },
        {
            name: 'tablet',
            title: 'Tablet',
            icon: Tablet,
            width: '768px - 1024px',
            desc: 'Tablets and small laptops',
            mediaQuery: 'min-width: 768px and max-width: 1023px',
            color: 'bg-green-500'
        },
        {
            name: 'desktop',
            title: 'Desktop',
            icon: Laptop,
            width: '1024px - 1440px',
            desc: 'Laptops and desktop computers',
            mediaQuery: 'min-width: 1024px and max-width: 1439px',
            color: 'bg-purple-500'
        },
        {
            name: 'large',
            title: 'Large Desktop',
            icon: Monitor,
            width: '1440px+',
            desc: 'Large monitors and TVs',
            mediaQuery: 'min-width: 1440px',
            color: 'bg-orange-500'
        }
    ];

    // Responsive Units
    const responsiveUnits = [
        {
            name: 'rem',
            title: 'rem',
            desc: 'Relative to root font size (16px default)',
            example: '1rem = 16px',
            useCase: 'Typography, spacing, components'
        },
        {
            name: 'em',
            title: 'em',
            desc: 'Relative to parent element font size',
            example: '1em = parent font size',
            useCase: 'Component-based scaling'
        },
        {
            name: 'vw',
            title: 'vw',
            desc: 'Viewport width percentage',
            example: '1vw = 1% of viewport width',
            useCase: 'Full-width elements, responsive typography'
        },
        {
            name: 'vh',
            title: 'vh',
            desc: 'Viewport height percentage',
            example: '1vh = 1% of viewport height',
            useCase: 'Full-height sections, hero areas'
        },
        {
            name: '%',
            title: '%',
            desc: 'Percentage of parent element',
            example: '50% = half of parent width',
            useCase: 'Flexible layouts, responsive grids'
        }
    ];

    // Core Responsive Concepts
    const coreConcepts = [
        {
            icon: Grid,
            title: "Fluid Grids",
            desc: "Using relative units like percentages, fr units, or CSS Grid to create layouts that adapt to screen size",
            example: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
        },
        {
            icon: Scaling,
            title: "Flexible Media",
            desc: "Images and videos that scale with their container using max-width: 100% and height: auto",
            example: "img { max-width: 100%; height: auto; }"
        },
        {
            icon: Code,
            title: "Media Queries",
            desc: "CSS rules that apply only when certain conditions are met, like screen width or device orientation",
            example: "@media (min-width: 768px) { /* tablet styles */ }"
        },
        {
            icon: Target,
            title: "Mobile-First",
            desc: "Design for mobile devices first, then enhance for larger screens using min-width media queries",
            example: "Start with mobile CSS, add @media (min-width: 768px) for larger screens"
        }
    ];

    // Comprehensive Playground Code
    const playgroundCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Responsive Web Design Complete Guide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Responsive Web Design Demo</h1>
        <p class="intro">Resize your browser window to see the layout adapt to different screen sizes!</p>
        
        <section class="breakpoint-indicator">
            <div class="indicator mobile-indicator">📱 Mobile</div>
            <div class="indicator tablet-indicator">📱 Tablet</div>
            <div class="indicator desktop-indicator">💻 Desktop</div>
            <div class="indicator large-indicator">🖥️ Large</div>
        </section>

        <section class="responsive-grid">
            <div class="card">
                <h3>Responsive Card 1</h3>
                <p>This card adapts to different screen sizes using CSS Grid and flexible units.</p>
            </div>
            <div class="card">
                <h3>Responsive Card 2</h3>
                <p>Notice how the layout changes from single column on mobile to multiple columns on larger screens.</p>
            </div>
            <div class="card">
                <h3>Responsive Card 3</h3>
                <p>The cards maintain consistent spacing and proportions across all device sizes.</p>
            </div>
            <div class="card">
                <h3>Responsive Card 4</h3>
                <p>This demonstrates auto-fit grid columns that adjust based on available space.</p>
            </div>
        </section>

        <section class="responsive-typography">
            <h2>Responsive Typography</h2>
            <p class="responsive-text">This text uses clamp() for fluid typography that scales smoothly between minimum and maximum sizes based on viewport width.</p>
        </section>

        <section class="responsive-images">
            <h2>Responsive Images</h2>
            <div class="image-container">
                <div class="placeholder-image">📷 Responsive Image</div>
                <p>Images scale proportionally and never overflow their containers.</p>
            </div>
        </section>

        <section class="navigation-demo">
            <h2>Responsive Navigation</h2>
            <nav class="responsive-nav">
                <div class="nav-brand">Brand</div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                <div class="nav-toggle">☰</div>
            </nav>
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
    padding: 1rem;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
    color: #2c3e50;
}

.intro {
    text-align: center;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin-bottom: 2rem;
    color: #666;
}

/* Breakpoint Indicators */
.breakpoint-indicator {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.indicator {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.8rem;
    display: none;
    background: #e9ecef;
    color: #495057;
}

/* Responsive Grid */
.responsive-grid {
    display: grid;
    gap: 1rem;
    margin-bottom: 3rem;
    grid-template-columns: 1fr;
}

.card {
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-2px);
}

.card h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.card p {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Responsive Typography */
.responsive-typography {
    margin-bottom: 3rem;
    text-align: center;
}

.responsive-typography h2 {
    font-size: clamp(1.2rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: #2c3e50;
}

.responsive-text {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    max-width: 600px;
    margin: 0 auto;
    color: #666;
}

/* Responsive Images */
.responsive-images {
    margin-bottom: 3rem;
}

.responsive-images h2 {
    font-size: clamp(1.2rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: #2c3e50;
    text-align: center;
}

.image-container {
    text-align: center;
}

.placeholder-image {
    width: 100%;
    max-width: 400px;
    height: 200px;
    background: linear-gradient(135deg, #28a745, #1e7e34);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 10px;
    margin: 0 auto 1rem auto;
}

/* Responsive Navigation */
.navigation-demo h2 {
    font-size: clamp(1.2rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: #2c3e50;
    text-align: center;
}

.responsive-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #343a40;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    flex-wrap: wrap;
}

.nav-brand {
    font-weight: bold;
    font-size: 1.2rem;
}

.nav-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.nav-links a:hover {
    background: rgba(255,255,255,0.1);
}

.nav-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Mobile Styles (320px - 767px) */
@media (max-width: 767px) {
    .mobile-indicator {
        display: block;
        background: #007bff;
        color: white;
    }
    
    .container {
        padding: 1rem;
    }
    
    .responsive-grid {
        grid-template-columns: 1fr;
    }
    
    .nav-links {
        display: none;
    }
    
    .nav-toggle {
        display: block;
    }
    
    .responsive-nav {
        flex-direction: column;
        align-items: flex-start;
    }
}

/* Tablet Styles (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
    .tablet-indicator {
        display: block;
        background: #28a745;
        color: white;
    }
    
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .container {
        padding: 1.5rem;
    }
}

/* Desktop Styles (1024px - 1439px) */
@media (min-width: 1024px) and (max-width: 1439px) {
    .desktop-indicator {
        display: block;
        background: #6f42c1;
        color: white;
    }
    
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .container {
        padding: 2rem;
    }
}

/* Large Desktop Styles (1440px+) */
@media (min-width: 1440px) {
    .large-indicator {
        display: block;
        background: #fd7e14;
        color: white;
    }
    
    .responsive-grid {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .container {
        padding: 3rem;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
    }
    
    .breakpoint-indicator,
    .nav-toggle {
        display: none;
    }
    
    .container {
        box-shadow: none;
        padding: 0;
    }
}

/* High DPI / Retina Displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .placeholder-image {
        background-size: cover;
    }
}

/* Landscape Orientation */
@media (orientation: landscape) and (max-height: 500px) {
    .container {
        padding: 1rem;
    }
    
    h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .card {
        transition: none;
    }
    
    .card:hover {
        transform: none;
    }
}`,
        js: `// Responsive Web Design Demo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Responsive Web Design Demo loaded successfully!');

    // Viewport size indicator
    function updateViewportInfo() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        console.log('Viewport size:', width + 'x' + height);
        
        // Update breakpoint indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.style.display = 'none';
        });
        
        if (width <= 767) {
            document.querySelector('.mobile-indicator').style.display = 'block';
        } else if (width <= 1023) {
            document.querySelector('.tablet-indicator').style.display = 'block';
        } else if (width <= 1439) {
            document.querySelector('.desktop-indicator').style.display = 'block';
        } else {
            document.querySelector('.large-indicator').style.display = 'block';
        }
    }

    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.width = '100%';
                navLinks.style.marginTop = '1rem';
            }
        });
    }

    // Update viewport info on load and resize
    updateViewportInfo();
    window.addEventListener('resize', updateViewportInfo);

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            console.log('Card hovered:', this.querySelector('h3').textContent);
        });
    });

    // Orientation change handler
    window.addEventListener('orientationchange', function() {
        setTimeout(updateViewportInfo, 100);
        console.log('Orientation changed');
    });

    console.log('All responsive design demos initialized!');
});`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Smartphone className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Responsive Web Design</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master responsive design techniques to create websites that look great on any device, from phones to desktops.
                </p>
            </div>

            {/* Device Breakpoints Demo */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Monitor className="w-5 h-5" />
                        Device Breakpoints & Media Queries
                    </CardTitle>
                    <CardDescription>
                        Understanding common device breakpoints and how to target them with media queries.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {deviceBreakpoints.map((device) => (
                                <div 
                                    key={device.name}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                        selectedBreakpoint === device.name 
                                            ? 'ring-2 ring-primary ring-offset-2 border-primary' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedBreakpoint(device.name)}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <device.icon className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-sm">{device.title}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{device.width}</p>
                                    <p className="text-xs text-gray-500">{device.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">Media Query for {deviceBreakpoints.find(d => d.name === selectedBreakpoint)?.title}</h4>
                            <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                                @media ({deviceBreakpoints.find(d => d.name === selectedBreakpoint)?.mediaQuery}) {'{'}
                                <br />
                                {'  '}/* Styles for {deviceBreakpoints.find(d => d.name === selectedBreakpoint)?.title.toLowerCase()} devices */
                                <br />
                                {'  '}.container {'{'}
                                <br />
                                {'    '}/* Your responsive styles here */
                                <br />
                                {'  '}{'}'}
                                <br />
                                {'}'}
                            </code>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Responsive Units Demo */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Scaling className="w-5 h-5" />
                        Responsive Units & Measurements
                    </CardTitle>
                    <CardDescription>
                        Understanding different CSS units and when to use them for responsive design.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {responsiveUnits.map((unit) => (
                                <Button
                                    key={unit.name}
                                    variant={selectedUnit === unit.name ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedUnit(unit.name)}
                                >
                                    {unit.title}
                                </Button>
                            ))}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-3">{responsiveUnits.find(u => u.name === selectedUnit)?.title} Unit</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {responsiveUnits.find(u => u.name === selectedUnit)?.desc}
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-3">
                                <strong>Example:</strong> {responsiveUnits.find(u => u.name === selectedUnit)?.example}
                            </div>
                            <div className="text-sm text-blue-600 dark:text-blue-400">
                                <strong>Best for:</strong> {responsiveUnits.find(u => u.name === selectedUnit)?.useCase}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Core Concepts */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Target className="w-5 h-5" />
                        Core Responsive Design Concepts
                    </CardTitle>
                    <CardDescription>
                        The fundamental principles that make responsive design work effectively.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {coreConcepts.map((concept) => (
                            <div key={concept.title} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="flex items-center gap-2 mb-3">
                                    <concept.icon className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold">{concept.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{concept.desc}</p>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                                    {concept.example}
                                </code>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Live Responsive Grid Demo */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Grid className="w-5 h-5" />
                        Live Responsive Grid Demo
                    </CardTitle>
                    <CardDescription>
                        See how CSS Grid adapts to different screen sizes with auto-fit and minmax.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                            <div className="grid gap-3 border-2 border-dashed border-gray-300 p-4" style={{
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
                            }}>
                                {Array.from({length: 6}, (_, i) => (
                                    <div key={i} className={`text-white p-4 rounded font-bold text-center min-h-[100px] flex items-center justify-center ${
                                        i % 6 === 0 ? 'bg-blue-500' :
                                        i % 6 === 1 ? 'bg-green-500' :
                                        i % 6 === 2 ? 'bg-red-500' :
                                        i % 6 === 3 ? 'bg-yellow-500 text-black' :
                                        i % 6 === 4 ? 'bg-purple-500' : 'bg-orange-500'
                                    }`}>
                                        Card {i + 1}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                                Resize your browser window to see the grid adapt automatically!
                            </p>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            .responsive-grid {'{'}
                            <br />
                            {'  '}display: grid;
                            <br />
                            {'  '}grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            <br />
                            {'  '}gap: 1rem;
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Responsive Typography Demo */}
            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <Code className="w-5 h-5" />
                        Responsive Typography with clamp()
                    </CardTitle>
                    <CardDescription>
                        Fluid typography that scales smoothly between minimum and maximum sizes.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border text-center">
                            <h2 style={{fontSize: 'clamp(1.5rem, 4vw, 3rem)'}} className="font-bold mb-4 text-gray-800 dark:text-gray-200">
                                Fluid Typography Demo
                            </h2>
                            <p style={{fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'}} className="text-gray-600 dark:text-gray-400">
                                This text scales smoothly with the viewport width using the clamp() function. 
                                Resize your browser to see the effect!
                            </p>
                        </div>
                        
                        <code className="text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded block">
                            h1 {'{'}
                            <br />
                            {'  '}font-size: clamp(1.5rem, 4vw, 3rem);
                            <br />
                            {'  '}/* min: 1.5rem, preferred: 4vw, max: 3rem */
                            <br />
                            {'}'}
                            <br />
                            p {'{'}
                            <br />
                            {'  '}font-size: clamp(0.9rem, 2vw, 1.2rem);
                            <br />
                            {'}'}
                        </code>
                    </div>
                </CardContent>
            </Card>

            {/* Responsive Best Practices */}
            <Card className="border-violet-200 bg-violet-50/50 dark:bg-violet-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-violet-700 dark:text-violet-300">
                        <CheckCircle className="w-5 h-5" />
                        Responsive Design Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for creating effective responsive websites.
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
                                <li>• Use mobile-first approach with min-width media queries</li>
                                <li>• Include viewport meta tag in HTML head</li>
                                <li>• Use relative units (rem, em, %, vw, vh) over fixed pixels</li>
                                <li>• Test on real devices, not just browser resize</li>
                                <li>• Optimize images for different screen densities</li>
                                <li>• Use CSS Grid and Flexbox for flexible layouts</li>
                                <li>• Consider touch targets (minimum 44px)</li>
                            </ul>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                ❌ Common Pitfalls
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                                <li>• Don't forget the viewport meta tag</li>
                                <li>• Avoid fixed widths and heights</li>
                                <li>• Don't rely solely on desktop-first design</li>
                                <li>• Avoid horizontal scrolling on mobile</li>
                                <li>• Don't make touch targets too small</li>
                                <li>• Avoid using only pixel-based media queries</li>
                                <li>• Don't ignore performance on mobile devices</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Essential Meta Tag</h4>
                        <code className="text-sm text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-800 p-2 rounded block">
                            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                        </code>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                            This meta tag is crucial for responsive design - it tells the browser how to control the page's dimensions and scaling.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Playground */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Interactive Responsive Design Playground
                    </CardTitle>
                    <CardDescription>
                        Explore comprehensive responsive design examples with breakpoint indicators, fluid grids, responsive typography, and mobile navigation.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                            <Play className="mr-2 h-4 w-4" />
                            Open Complete Responsive Guide
                        </Button>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Monitor className="w-3 h-3" />
                            Breakpoints
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Grid className="w-3 h-3" />
                            Fluid Grids
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Code className="w-3 h-3" />
                            Typography
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Smartphone className="w-3 h-3" />
                            Mobile Navigation
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Scaling className="w-3 h-3" />
                            Flexible Media
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
