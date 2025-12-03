'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  PenTool,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  Palette,
  Type,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlSvgBasicsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const svgCircleExample = {
  html: `<div class="svg-demo-container">
  <h3>Simple SVG Circle</h3>
  <svg viewBox="0 0 200 200" class="svg-canvas">
    <circle cx="100" cy="100" r="80" fill="#8b5cf6" stroke="#6d28d9" stroke-width="4"/>
  </svg>
  <p class="demo-info">Vector-based circle that scales infinitely</p>
</div>`,
  css: `.svg-demo-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
}

@media (prefers-color-scheme: dark) {
  .svg-demo-container {
    background: #1e293b;
  }
}

h3 {
  color: #8b5cf6;
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #c4b5fd;
  }
}

.svg-canvas {
  width: 200px;
  height: 200px;
  margin: 1.5rem auto;
  border: 2px solid #f0e5ff;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .svg-canvas {
    border-color: #581c87;
  }
}

.demo-info {
  color: #6b7280;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .demo-info {
    color: #9ca3af;
  }
}`,
  js: ``,
};

const svgShapesExample = {
  html: `<div class="shapes-demo">
  <h3>Basic SVG Shapes</h3>
  <svg viewBox="0 0 500 150" class="shapes-svg">
    <!-- Rectangle -->
    <rect x="20" y="20" width="100" height="80" fill="#f97316" rx="5"/>
    
    <!-- Circle -->
    <circle cx="200" cy="60" r="40" fill="#06b6d4"/>
    
    <!-- Ellipse -->
    <ellipse cx="320" cy="60" rx="60" ry="40" fill="#ec4899"/>
    
    <!-- Line -->
    <line x1="20" y1="130" x2="150" y2="130" stroke="#8b5cf6" stroke-width="2"/>
    
    <!-- Polygon (Triangle) -->
    <polygon points="300,20 340,100 260,100" fill="#10b981"/>
  </svg>
</div>`,
  css: `.shapes-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .shapes-demo {
    background: #1e293b;
  }
}

h3 {
  color: #1e293b;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

.shapes-svg {
  width: 100%;
  max-width: 500px;
  height: auto;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}

@media (prefers-color-scheme: dark) {
  .shapes-svg {
    border-color: #404040;
    background: #0f172a;
  }
}`,
  js: ``,
};

const svgPathExample = {
  html: `<div class="path-demo">
  <h3>SVG Paths & Drawing</h3>
  <svg viewBox="0 0 300 200" class="path-svg">
    <!-- Simple path drawing -->
    <path d="M 50 150 L 150 50 L 250 150" stroke="#3b82f6" stroke-width="3" fill="none"/>
    
    <!-- Curved path -->
    <path d="M 50 50 Q 100 20 150 50 T 250 50" stroke="#ec4899" stroke-width="3" fill="none"/>
    
    <!-- Closed path -->
    <path d="M 50 100 L 100 80 L 150 100 L 100 120 Z" fill="#10b981" opacity="0.7"/>
  </svg>
  <p class="path-info">Paths use commands: M (move), L (line), Q (quadratic curve), Z (close)</p>
</div>`,
  css: `.path-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .path-demo {
    background: #1e293b;
  }
}

h3 {
  color: #3b82f6;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.path-svg {
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 2px solid #dbeafe;
  border-radius: 8px;
  background: #f0f9ff;
}

@media (prefers-color-scheme: dark) {
  .path-svg {
    border-color: #1e40af;
    background: #0c2340;
  }
}

.path-info {
  color: #6b7280;
  font-size: 0.85rem;
  margin-top: 1rem;
}

@media (prefers-color-scheme: dark) {
  .path-info {
    color: #9ca3af;
  }
}`,
  js: ``,
};

const svgInteractiveExample = {
  html: `<div class="interactive-svg">
  <h3>Interactive SVG Shapes</h3>
  <svg viewBox="0 0 300 300" class="interactive-canvas">
    <!-- Hover circle -->
    <circle id="hoverCircle" cx="100" cy="100" r="40" fill="#8b5cf6" class="interactive-shape"/>
    
    <!-- Click square -->
    <rect id="clickSquare" x="180" y="60" width="80" height="80" fill="#06b6d4" class="interactive-shape"/>
    
    <!-- Hover text -->
    <text id="hoverText" x="100" y="250" text-anchor="middle" class="svg-text">Hover over shapes</text>
  </svg>
</div>`,
  css: `.interactive-svg {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .interactive-svg {
    background: #1e293b;
  }
}

h3 {
  color: #06b6d4;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #06b6d4;
  }
}

.interactive-canvas {
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 2px solid #cffafe;
  border-radius: 8px;
  background: #ecf9ff;
}

@media (prefers-color-scheme: dark) {
  .interactive-canvas {
    border-color: #164e63;
    background: #082f49;
  }
}

.interactive-shape {
  cursor: pointer;
  transition: opacity 0.3s;
}

.interactive-shape:hover {
  opacity: 0.8;
  filter: brightness(1.1);
}

.svg-text {
  fill: #64748b;
  font-size: 14px;
  font-family: system-ui;
}

@media (prefers-color-scheme: dark) {
  .svg-text {
    fill: #cbd5e1;
  }
}`,
  js: `const hoverCircle = document.getElementById('hoverCircle');
const clickSquare = document.getElementById('clickSquare');
const hoverText = document.getElementById('hoverText');

if (hoverCircle) {
  hoverCircle.addEventListener('mouseenter', () => {
    hoverText.textContent = '✓ Circle hovered!';
  });
  hoverCircle.addEventListener('mouseleave', () => {
    hoverText.textContent = 'Hover over shapes';
  });
}

if (clickSquare) {
  clickSquare.addEventListener('click', () => {
    hoverText.textContent = '✓ Square clicked!';
    clickSquare.style.fill = '#ec4899';
    setTimeout(() => {
      clickSquare.style.fill = '#06b6d4';
    }, 500);
  });
}`,
};

const svgTextExample = {
  html: `<div class="text-demo">
  <h3>Text in SVG</h3>
  <svg viewBox="0 0 400 150" class="text-svg">
    <!-- Simple text -->
    <text x="20" y="40" class="text-heading">SVG Text</text>
    
    <!-- Styled text -->
    <text x="20" y="80" class="text-content">Beautiful typography in SVG</text>
    
    <!-- Path text -->
    <path id="textPath" d="M 20 120 Q 100 100 380 120" stroke="none"/>
    <text class="text-curved">
      <textPath href="#textPath" startOffset="50%" text-anchor="middle">
        Text follows a path
      </textPath>
    </text>
  </svg>
</div>`,
  css: `.text-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .text-demo {
    background: #1e293b;
  }
}

h3 {
  color: #8b5cf6;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #c4b5fd;
  }
}

.text-svg {
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 2px solid #e9d5ff;
  border-radius: 8px;
  background: #faf5ff;
}

@media (prefers-color-scheme: dark) {
  .text-svg {
    border-color: #581c87;
    background: #2e1065;
  }
}

.text-heading {
  font-size: 32px;
  font-weight: bold;
  fill: #8b5cf6;
}

@media (prefers-color-scheme: dark) {
  .text-heading {
    fill: #c4b5fd;
  }
}

.text-content {
  font-size: 16px;
  fill: #6b7280;
}

@media (prefers-color-scheme: dark) {
  .text-content {
    fill: #9ca3af;
  }
}

.text-curved {
  font-size: 14px;
  fill: #3b82f6;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  .text-curved {
    fill: #60a5fa;
  }
}`,
  js: ``,
};

export default function HtmlSvgBasics({ onOpenWebPlayground }: HtmlSvgBasicsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={PenTool}
        category="HTML · Graphics"
        title="SVG Basics"
        description="Learn to create scalable, vector-based graphics with SVG"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <PenTool className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is SVG?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Scalable Vector Graphics for web
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            SVG (Scalable Vector Graphics) is an XML-based format for creating graphics that scale perfectly at any size.
            Unlike raster images (PNG, JPG), SVGs use mathematical vectors to define shapes, making them crisp on any screen.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Key Advantages
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Scales infinitely without quality loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Smaller file sizes than raster images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>CSS and JavaScript interactive support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>DOM elements - each shape is accessible</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Common Uses
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>🎨 Icons and logos</li>
                <li>📊 Charts and graphs</li>
                <li>🗺️ Maps and diagrams</li>
                <li>🎭 Animations and illustrations</li>
                <li>🧩 UI components</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              SVG is perfect for icons and logos because it stays sharp at any size - great for responsive design!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Shapes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Palette className="w-7 h-7" />
            Basic SVG Shapes
          </CardTitle>
          <CardDescription className="text-base">
            Simple elements you can combine to create any graphic
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: 'Rectangle',
                icon: '▭',
                desc: 'Use <rect> element with x, y, width, height',
                color: 'orange',
              },
              {
                name: 'Circle',
                icon: '●',
                desc: 'Use <circle> with cx, cy, r attributes',
                color: 'emerald',
              },
              {
                name: 'Ellipse',
                icon: '◯',
                desc: 'Use <ellipse> with rx and ry radii',
                color: 'purple',
              },
              {
                name: 'Line',
                icon: '—',
                desc: 'Use <line> with x1, y1, x2, y2 coordinates',
                color: 'amber',
              },
            ].map((shape, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400',
                amber: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 border-amber-200 dark:border-amber-700 text-amber-600 dark:text-amber-400',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[shape.color]} rounded-lg border`}
                >
                  <div className="text-3xl mb-2">{shape.icon}</div>
                  <h4 className="font-semibold mb-2">{shape.name}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{shape.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Example: Rectangle</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<svg width="200" height="150">
  <rect x="20" y="20" width="100" height="80" 
        fill="#f97316" stroke="#ea580c" stroke-width="2"/>
</svg>`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Interactive: All Basic Shapes"
            description="Click play to see all SVG shapes in action"
            html={svgShapesExample.html}
            css={svgShapesExample.css}
            js={svgShapesExample.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* SVG Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Palette className="w-7 h-7" />
            Essential SVG Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Control appearance and styling of SVG elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'fill', desc: 'Fill color of the shape', example: 'fill="#8b5cf6"' },
              { attr: 'stroke', desc: 'Border/outline color', example: 'stroke="#6d28d9"' },
              { attr: 'stroke-width', desc: 'Border thickness', example: 'stroke-width="3"' },
              { attr: 'opacity', desc: 'Transparency (0-1)', example: 'opacity="0.5"' },
              { attr: 'viewBox', desc: 'Coordinate system', example: 'viewBox="0 0 200 200"' },
              { attr: 'preserveAspectRatio', desc: 'Scale behavior', example: 'preserveAspectRatio="xMidYMid"' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <h4 className="font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {item.attr}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            title="Example: Styling SVG Circles"
            description="Different colors, strokes, and opacity"
            html={svgCircleExample.html}
            css={svgCircleExample.css}
            js={svgCircleExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* SVG Paths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            SVG Paths: Drawing Complex Shapes
          </CardTitle>
          <CardDescription className="text-base">
            Create any shape with the powerful path element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;path&gt;</code> element
            uses a series of commands to draw custom shapes. Here are the main commands:
          </p>

          <div className="grid gap-3">
            {[
              { cmd: 'M', name: 'Move', desc: 'Move to a position without drawing' },
              { cmd: 'L', name: 'Line', desc: 'Draw a line to a point' },
              { cmd: 'Q', name: 'Quadratic Curve', desc: 'Draw a curved line' },
              { cmd: 'C', name: 'Cubic Curve', desc: 'Draw a smooth curved line' },
              { cmd: 'Z', name: 'Close Path', desc: 'Connect back to start point' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700 flex items-start gap-4"
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 w-12">
                  {item.cmd}
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">{item.name}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            title="Example: Drawing with Paths"
            description="Lines, curves, and closed shapes"
            html={svgPathExample.html}
            css={svgPathExample.css}
            js={svgPathExample.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Text in SVG */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Type className="w-7 h-7" />
            Adding Text to SVG
          </CardTitle>
          <CardDescription className="text-base">
            Include readable text in your graphics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            You can add text to SVG using the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;text&gt;</code> element.
            Text can be styled with CSS or SVG attributes and even follow curved paths!
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Basic Text Example</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<svg width="300" height="100">
  <text x="10" y="50" font-size="32" fill="#3b82f6">
    SVG Text
  </text>
</svg>`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Example: Text Styles and Paths"
            description="Regular text and text following a curved path"
            html={svgTextExample.html}
            css={svgTextExample.css}
            js={svgTextExample.js}
            colorTheme="blue"
            previewHeight="280px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Interactive SVG */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Interactive SVG with JavaScript
          </CardTitle>
          <CardDescription className="text-base">
            Make SVGs respond to user interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            Since SVG elements are part of the DOM, you can add event listeners and dynamically change their properties with JavaScript.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Common SVG Interactions
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>✓ Change color on hover: <code className="bg-white dark:bg-slate-950 px-1 rounded text-xs">element.setAttribute('fill', '#new-color')</code></li>
              <li>✓ Add click handlers: <code className="bg-white dark:bg-slate-950 px-1 rounded text-xs">element.addEventListener('click', callback)</code></li>
              <li>✓ Animate with CSS: <code className="bg-white dark:bg-slate-950 px-1 rounded text-xs">@keyframes animation</code></li>
              <li>✓ Animate with JS: <code className="bg-white dark:bg-slate-950 px-1 rounded text-xs">element.animate() API</code></li>
            </ul>
          </div>

          <FrontendCodePreview
            title="Example: Interactive Shapes"
            description="Hover and click SVG elements to interact"
            html={svgInteractiveExample.html}
            css={svgInteractiveExample.css}
            js={svgInteractiveExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            SVG Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use SVG for icons and logos</li>
                <li>✓ Set proper viewBox for responsive scaling</li>
                <li>✓ Use semantic element names (id, class)</li>
                <li>✓ Optimize SVG files for web</li>
                <li>✓ Group related shapes with &lt;g&gt;</li>
                <li>✓ Use CSS for styling and animations</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't use SVG for complex photos</li>
                <li>✗ Don't forget viewBox attribute</li>
                <li>✗ Don't leave unused elements in code</li>
                <li>✗ Don't hardcode colors (use CSS)</li>
                <li>✗ Don't nest too many layers</li>
                <li>✗ Don't make interactive SVGs too heavy</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Quick Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Use tools like <strong>SVGO</strong> to automatically optimize SVG files by removing unnecessary code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <PenTool className="w-7 h-7" />
            Real-World SVG Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'App Icons', desc: 'Crisp icons at any resolution', emoji: '🎨' },
              { title: 'Charts & Graphs', desc: 'Interactive data visualizations', emoji: '📊' },
              { title: 'Animations', desc: 'Smooth animated graphics', emoji: '✨' },
              { title: 'Logo & Branding', desc: 'Scalable brand assets', emoji: '🏢' },
              { title: 'Maps', desc: 'Interactive geographic displays', emoji: '🗺️' },
              { title: 'UI Components', desc: 'Buttons, badges, decorations', emoji: '🧩' },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <div className="text-3xl mb-2">{useCase.emoji}</div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{useCase.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

