'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Ruler, Maximize2, Monitor, Type, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react';
import React from 'react';

interface CssUnitsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssUnits({ onOpenWebPlayground }: CssUnitsProps) {

    const absoluteUnits = [
        {
            unit: "px",
            name: "Pixels",
            desc: "Most common absolute unit. 1px = 1/96th of an inch on screens. Fixed size regardless of parent or viewport.",
            useCase: "Borders, small fixed elements, precise control",
            example: "border: 2px solid;"
        },
        {
            unit: "pt",
            name: "Points",
            desc: "Typically used in print. 1pt = 1/72nd of an inch. Not recommended for screen design.",
            useCase: "Print stylesheets, PDF generation",
            example: "font-size: 12pt;"
        },
        {
            unit: "cm / mm / in",
            name: "Physical Units",
            desc: "Centimeters, millimeters, inches. Mainly for print media, not reliable on screens.",
            useCase: "Print layouts, physical media",
            example: "width: 21cm;"
        },
    ];

    const relativeUnits = [
        {
            unit: "em",
            name: "Relative to Parent",
            desc: "Relative to the font-size of the parent element. Cascades and compounds through nested elements.",
            useCase: "Component-based spacing, scalable designs",
            example: "padding: 1.5em;",
            icon: "📦"
        },
        {
            unit: "rem",
            name: "Root EM",
            desc: "Relative to the root element's (html) font-size. Default is usually 16px. Does NOT compound.",
            useCase: "Consistent spacing, typography scales, most common choice",
            example: "font-size: 1.25rem;",
            icon: "🌳"
        },
        {
            unit: "%",
            name: "Percentage",
            desc: "Relative to the parent element's corresponding property (width, height, font-size, etc.).",
            useCase: "Fluid layouts, responsive widths, relative sizing",
            example: "width: 50%;",
            icon: "📊"
        },
        {
            unit: "vw",
            name: "Viewport Width",
            desc: "1vw = 1% of viewport width. Always relative to the browser window width.",
            useCase: "Full-width elements, responsive typography",
            example: "width: 100vw;",
            icon: "↔️"
        },
        {
            unit: "vh",
            name: "Viewport Height",
            desc: "1vh = 1% of viewport height. Always relative to the browser window height.",
            useCase: "Full-height sections, hero banners",
            example: "height: 100vh;",
            icon: "↕️"
        },
        {
            unit: "vmin",
            name: "Viewport Minimum",
            desc: "1vmin = 1% of the smaller dimension (width or height) of the viewport.",
            useCase: "Responsive elements that scale with smallest dimension",
            example: "font-size: 5vmin;",
            icon: "⬇️"
        },
        {
            unit: "vmax",
            name: "Viewport Maximum",
            desc: "1vmax = 1% of the larger dimension (width or height) of the viewport.",
            useCase: "Responsive elements that scale with largest dimension",
            example: "font-size: 3vmax;",
            icon: "⬆️"
        },
        {
            unit: "ch",
            name: "Character Unit",
            desc: "Relative to the width of the '0' (zero) character in the current font. Great for monospace text.",
            useCase: "Limiting line length, monospace layouts",
            example: "max-width: 60ch;",
            icon: "0️⃣"
        },
        {
            unit: "ex",
            name: "X-Height",
            desc: "Relative to the height of the lowercase 'x' in the current font. Rarely used.",
            useCase: "Fine typography adjustments",
            example: "vertical-align: 1ex;",
            icon: "x"
        },
    ];

    const modernUnits = [
        {
            unit: "svw / svh",
            name: "Small Viewport",
            desc: "Viewport units considering the UI is expanded (mobile browsers with visible URL bar).",
            useCase: "Mobile-friendly layouts",
            example: "height: 100svh;",
        },
        {
            unit: "lvw / lvh",
            name: "Large Viewport",
            desc: "Viewport units considering the UI is collapsed (mobile browsers with hidden URL bar).",
            useCase: "Full-screen experiences on mobile",
            example: "height: 100lvh;",
        },
        {
            unit: "dvw / dvh",
            name: "Dynamic Viewport",
            desc: "Dynamically adjusts between small and large viewport as user scrolls. Best for mobile.",
            useCase: "Adaptive mobile layouts",
            example: "height: 100dvh;",
        },
        {
            unit: "cqw / cqh",
            name: "Container Query Units",
            desc: "Relative to the container's width/height when using container queries.",
            useCase: "Component-based responsive design",
            example: "font-size: 5cqw;",
        },
    ];

    const playgroundCode = {
        html: `<div class="demo-container">
  <h1>CSS Units Comparison</h1>
  
  <section class="section">
    <h2>Absolute Units (px)</h2>
    <div class="box absolute">
      Fixed 200px width
      <br>Never changes
    </div>
  </section>
  
  <section class="section">
    <h2>Relative to Parent (em)</h2>
    <div class="parent" style="font-size: 20px;">
      Parent font: 20px
      <div class="box em">
        padding: 1em (20px)
        <div style="font-size: 0.8em; margin-top: 0.5em;">
          Nested em compounds!
        </div>
      </div>
    </div>
  </section>
  
  <section class="section">
    <h2>Root Relative (rem)</h2>
    <div class="box rem">
      padding: 1rem
      <br>Always relative to root (16px)
    </div>
  </section>
  
  <section class="section">
    <h2>Percentage (%)</h2>
    <div class="box percent">
      width: 75%
      <br>Of parent width
    </div>
  </section>
  
  <section class="section">
    <h2>Viewport Width (vw)</h2>
    <div class="box viewport">
      width: 50vw
      <br>50% of viewport width
    </div>
  </section>
  
  <section class="section">
    <h2>Character Unit (ch)</h2>
    <div class="box char">
      max-width: 40ch
      <br>Perfect for readable text!
      <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </section>
</div>`,
        css: `* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 16px; /* root font-size */
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.section {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.box {
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.absolute {
  width: 200px;
}

.em {
  padding: 1em;
}

.rem {
  padding: 1rem;
}

.percent {
  width: 75%;
}

.viewport {
  width: 50vw;
}

.char {
  max-width: 40ch;
  text-align: left;
}

.parent {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}`,
        js: ''
    };

    const comparisonCode = {
        html: `<div class="comparison-grid">
  <div class="unit-demo">
    <h3>16px (Absolute)</h3>
    <div style="font-size: 16px;">Always 16px</div>
  </div>
  
  <div class="unit-demo">
    <h3>1em (Relative)</h3>
    <div style="font-size: 20px;">
      Parent: 20px
      <div style="font-size: 1em;">1em = 20px here</div>
    </div>
  </div>
  
  <div class="unit-demo">
    <h3>1rem (Root)</h3>
    <div style="font-size: 1rem;">Always 16px (root)</div>
  </div>
  
  <div class="unit-demo">
    <h3>10vw (Viewport)</h3>
    <div style="font-size: 10vw;">Resize window!</div>
  </div>
</div>`,
        css: `body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  font-size: 16px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.unit-demo {
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
}

.unit-demo h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.unit-demo > div {
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
}`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Ruler className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Units & Values</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master absolute and relative units to create responsive, scalable designs
                </p>
            </div>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary" />
                        Understanding Units
                    </CardTitle>
                    <CardDescription>
                        CSS units determine how sizes are calculated. They fall into two main categories: **absolute** (fixed) and **relative** (flexible).
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg mb-2">Absolute Units</h3>
                            <p className="text-sm text-muted-foreground">
                                Fixed sizes that don't change based on other elements or viewport. Most common: **px** (pixels).
                            </p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-bold text-lg mb-2">Relative Units</h3>
                            <p className="text-sm text-muted-foreground">
                                Flexible sizes that scale based on parent, root, or viewport. Most common: **rem**, **em**, **%**, **vw**, **vh**.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Visual Comparison Diagram */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Visual Unit Comparison
                    </CardTitle>
                    <CardDescription>
                        See how different units relate to each other
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-6 rounded-lg">
                        {/* Viewport representation */}
                        <div className="border-4 border-purple-500 rounded-lg p-4 mb-4 relative">
                            <div className="absolute -top-3 left-4 bg-background px-2 text-sm font-bold text-purple-500">
                                Viewport (100vw × 100vh)
                            </div>

                            {/* Root element */}
                            <div className="border-4 border-blue-500 rounded-lg p-4 relative">
                                <div className="absolute -top-3 left-4 bg-background px-2 text-sm font-bold text-blue-500">
                                    Root (&lt;html&gt;) - font-size: 16px (1rem)
                                </div>

                                {/* Parent element */}
                                <div className="border-4 border-green-500 rounded-lg p-4 mt-6 relative">
                                    <div className="absolute -top-3 left-4 bg-background px-2 text-sm font-bold text-green-500">
                                        Parent - font-size: 20px (1.25rem)
                                    </div>

                                    {/* Child element */}
                                    <div className="bg-orange-100 dark:bg-orange-900/30 border-4 border-orange-500 rounded-lg p-4 mt-6 relative">
                                        <div className="absolute -top-3 left-4 bg-background px-2 text-sm font-bold text-orange-500">
                                            Child Element
                                        </div>
                                        <div className="mt-2 space-y-2 text-sm">
                                            <div><code className="bg-background px-2 py-1 rounded">1em</code> = 20px (parent's font-size)</div>
                                            <div><code className="bg-background px-2 py-1 rounded">1rem</code> = 16px (root's font-size)</div>
                                            <div><code className="bg-background px-2 py-1 rounded">50%</code> = Half of parent's width</div>
                                            <div><code className="bg-background px-2 py-1 rounded">10vw</code> = 10% of viewport width</div>
                                            <div><code className="bg-background px-2 py-1 rounded">20px</code> = Always 20px</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Absolute Units */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-blue-500" />
                        Absolute Units
                    </CardTitle>
                    <CardDescription>
                        Fixed sizes that remain constant regardless of context
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {absoluteUnits.map((item) => (
                        <div key={item.unit} className="bg-muted p-4 rounded-lg border-l-4 border-blue-500">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="font-bold text-lg">
                                        <code className="bg-background px-2 py-1 rounded text-blue-600 dark:text-blue-400">{item.unit}</code>
                                        <span className="ml-2 text-base font-normal">{item.name}</span>
                                    </h3>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Use Case:</span>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{item.useCase}</span>
                                <code className="text-xs bg-background px-2 py-1 rounded ml-auto">{item.example}</code>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Relative Units */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Maximize2 className="w-5 h-5 text-green-500" />
                        Relative Units
                    </CardTitle>
                    <CardDescription>
                        Flexible sizes that scale based on context - the foundation of responsive design
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {relativeUnits.map((item) => (
                        <div key={item.unit} className="bg-muted p-4 rounded-lg border-l-4 border-green-500">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="font-bold text-lg">
                                        <span className="text-2xl mr-2">{item.icon}</span>
                                        <code className="bg-background px-2 py-1 rounded text-green-600 dark:text-green-400">{item.unit}</code>
                                        <span className="ml-2 text-base font-normal">{item.name}</span>
                                    </h3>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs font-semibold text-green-600 dark:text-green-400">Use Case:</span>
                                <span className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">{item.useCase}</span>
                                <code className="text-xs bg-background px-2 py-1 rounded ml-auto">{item.example}</code>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* em vs rem Deep Dive */}
            <Card className="border-orange-500 border-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                        <AlertCircle className="w-5 h-5" />
                        em vs rem: The Critical Difference
                    </CardTitle>
                    <CardDescription>
                        Understanding this difference is crucial for scalable CSS
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                📦 <code>em</code> - Cascading
                            </h3>
                            <div className="space-y-2 text-sm">
                                <p className="font-semibold">Relative to PARENT font-size</p>
                                <div className="bg-background p-3 rounded border">
                                    <code className="text-xs">
                                        {`<div style="font-size: 20px">
  <p style="font-size: 1em">
    20px
    <span style="font-size: 1em">
      Still 20px
    </span>
  </p>
</div>`}
                                    </code>
                                </div>
                                <p className="text-muted-foreground">✅ Good for: Component-based spacing</p>
                                <p className="text-muted-foreground">⚠️ Caution: Compounds in nested elements</p>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border-2 border-green-200 dark:border-green-800">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                🌳 <code>rem</code> - Predictable
                            </h3>
                            <div className="space-y-2 text-sm">
                                <p className="font-semibold">Relative to ROOT (html) font-size</p>
                                <div className="bg-background p-3 rounded border">
                                    <code className="text-xs">
                                        {`html { font-size: 16px; }
<div style="font-size: 50px">
  <p style="font-size: 1rem">
    16px (from root)
  </p>
</div>`}
                                    </code>
                                </div>
                                <p className="text-muted-foreground">✅ Good for: Consistent spacing, typography</p>
                                <p className="text-muted-foreground">✅ Benefit: Never compounds, predictable</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Modern Viewport Units */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-purple-500" />
                        Modern Viewport Units (2023+)
                    </CardTitle>
                    <CardDescription>
                        New units that solve mobile browser UI problems
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {modernUnits.map((item) => (
                        <div key={item.unit} className="bg-muted p-4 rounded-lg border-l-4 border-purple-500">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="font-bold text-lg">
                                        <code className="bg-background px-2 py-1 rounded text-purple-600 dark:text-purple-400">{item.unit}</code>
                                        <span className="ml-2 text-base font-normal">{item.name}</span>
                                    </h3>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Use Case:</span>
                                <span className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">{item.useCase}</span>
                                <code className="text-xs bg-background px-2 py-1 rounded ml-auto">{item.example}</code>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary" />
                        Best Practices & Recommendations
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                ✅ Do This
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
                                    <strong>Font Sizes:</strong> Use <code>rem</code> for predictable scaling
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
                                    <strong>Spacing:</strong> Use <code>rem</code> for margins/padding
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
                                    <strong>Borders:</strong> Use <code>px</code> (1-2px for crisp lines)
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
                                    <strong>Widths:</strong> Use <code>%</code> or <code>vw</code> for fluid layouts
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
                                    <strong>Line Length:</strong> Use <code>ch</code> (40-75ch ideal)
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
                                    <strong>Mobile Heights:</strong> Use <code>dvh</code> instead of <code>vh</code>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                ❌ Avoid This
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                                    <strong>Font Sizes in px:</strong> Hard to scale for accessibility
                                </div>
                                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                                    <strong>Fixed Widths:</strong> Breaks on different screen sizes
                                </div>
                                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                                    <strong>Nested em:</strong> Causes compounding calculation issues
                                </div>
                                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                                    <strong>100vh on Mobile:</strong> Doesn't account for browser UI
                                </div>
                                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                                    <strong>cm/mm/in/pt:</strong> Unreliable on screens (use for print)
                                </div>
                                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                                    <strong>Mixing units randomly:</strong> Choose consistent approach
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Type className="w-5 h-5" />
                        Quick Reference: Common Conversions
                    </CardTitle>
                    <CardDescription>
                        Assuming default root font-size of 16px
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-2">rem</th>
                                    <th className="text-left p-2">px</th>
                                    <th className="text-left p-2">Common Use</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="p-2"><code>0.5rem</code></td>
                                    <td className="p-2">8px</td>
                                    <td className="p-2 text-muted-foreground">Tiny spacing</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>0.75rem</code></td>
                                    <td className="p-2">12px</td>
                                    <td className="p-2 text-muted-foreground">Small text, captions</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>1rem</code></td>
                                    <td className="p-2">16px</td>
                                    <td className="p-2 text-muted-foreground">Base body text</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>1.125rem</code></td>
                                    <td className="p-2">18px</td>
                                    <td className="p-2 text-muted-foreground">Large body text</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>1.25rem</code></td>
                                    <td className="p-2">20px</td>
                                    <td className="p-2 text-muted-foreground">H5 headings</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>1.5rem</code></td>
                                    <td className="p-2">24px</td>
                                    <td className="p-2 text-muted-foreground">H4 headings</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>2rem</code></td>
                                    <td className="p-2">32px</td>
                                    <td className="p-2 text-muted-foreground">H3 headings</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>2.5rem</code></td>
                                    <td className="p-2">40px</td>
                                    <td className="p-2 text-muted-foreground">H2 headings</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><code>3rem</code></td>
                                    <td className="p-2">48px</td>
                                    <td className="p-2 text-muted-foreground">H1 headings</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced: clamp() function */}
            <Card className="border-purple-500 border-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <ArrowRight className="w-5 h-5" />
                        Advanced: Fluid Typography with clamp()
                    </CardTitle>
                    <CardDescription>
                        Combine units for responsive sizing without media queries
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm mb-3">
                            The <code>clamp()</code> function takes three values: minimum, preferred, and maximum.
                        </p>
                        <div className="bg-background p-4 rounded border font-mono text-sm">
                            <div className="text-purple-600 dark:text-purple-400">font-size: clamp(1rem, 2.5vw, 3rem);</div>
                            <div className="text-muted-foreground mt-2 text-xs">
                                <div>↳ Minimum: 1rem (16px)</div>
                                <div>↳ Preferred: 2.5vw (scales with viewport)</div>
                                <div>↳ Maximum: 3rem (48px)</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                            <div className="font-bold mb-2">📱 Small Screen</div>
                            <div className="text-muted-foreground">Uses minimum (1rem)</div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                            <div className="font-bold mb-2">💻 Medium Screen</div>
                            <div className="text-muted-foreground">Scales fluidly (2.5vw)</div>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded">
                            <div className="font-bold mb-2">🖥️ Large Screen</div>
                            <div className="text-muted-foreground">Caps at maximum (3rem)</div>
                        </div>
                    </div>

                    <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Common clamp() Patterns:</p>
                        <div className="space-y-2 font-mono text-xs">
                            <div><code>clamp(1rem, 2vw + 1rem, 3rem)</code> - Fluid with base size</div>
                            <div><code>clamp(1rem, 5vw, 5rem)</code> - Large fluid headings</div>
                            <div><code>clamp(300px, 50%, 800px)</code> - Fluid container width</div>
                            <div><code>clamp(1rem, 2.5vmin, 2rem)</code> - Responsive to smallest dimension</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle>Interactive Examples</CardTitle>
                    <CardDescription>
                        See all CSS units in action. Try resizing your browser window!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button
                        onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}
                        className="w-full sm:w-auto"
                    >
                        <Play className="mr-2 h-4 w-4" /> Open Full Units Demo
                    </Button>
                    <Button
                        onClick={() => onOpenWebPlayground(comparisonCode.html, comparisonCode.css, comparisonCode.js)}
                        variant="outline"
                        className="w-full sm:w-auto ml-0 sm:ml-2"
                    >
                        <Play className="mr-2 h-4 w-4" /> Open Comparison Demo
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

