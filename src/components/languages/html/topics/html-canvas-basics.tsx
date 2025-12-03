'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Paintbrush,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  Gamepad2,
  Type,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlCanvasBasicsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const canvasBasicExample = {
  html: `<div class="canvas-container">
  <h3>Simple Canvas Drawing</h3>
  <canvas id="basicCanvas" width="300" height="250"></canvas>
</div>`,
  css: `.canvas-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
}

@media (prefers-color-scheme: dark) {
  .canvas-container {
    background: #1e293b;
  }
}

h3 {
  color: #06b6d4;
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #06b6d4;
  }
}

#basicCanvas {
  border: 2px solid #cffafe;
  border-radius: 8px;
  background: #ecf9ff;
  cursor: crosshair;
}

@media (prefers-color-scheme: dark) {
  #basicCanvas {
    border-color: #164e63;
    background: #082f49;
  }
}`,
  js: `const canvas = document.getElementById('basicCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = '#f97316';
ctx.fillRect(20, 20, 100, 80);

// Draw circle
ctx.fillStyle = '#06b6d4';
ctx.beginPath();
ctx.arc(200, 80, 40, 0, Math.PI * 2);
ctx.fill();

// Draw text
ctx.fillStyle = '#1e293b';
ctx.font = 'bold 20px system-ui';
ctx.fillText('Canvas Demo', 60, 180);

// Draw line
ctx.strokeStyle = '#8b5cf6';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(280, 200);
ctx.stroke();`,
};

const canvasShapesExample = {
  html: `<div class="shapes-container">
  <h3>Various Canvas Shapes</h3>
  <canvas id="shapesCanvas" width="400" height="300"></canvas>
</div>`,
  css: `.shapes-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .shapes-container {
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

#shapesCanvas {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}

@media (prefers-color-scheme: dark) {
  #shapesCanvas {
    border-color: #404040;
    background: #0f172a;
  }
}`,
  js: `const canvas = document.getElementById('shapesCanvas');
const ctx = canvas.getContext('2d');

// Rectangle (filled)
ctx.fillStyle = '#f97316';
ctx.fillRect(20, 20, 80, 60);

// Rectangle (stroked)
ctx.strokeStyle = '#ea580c';
ctx.lineWidth = 3;
ctx.strokeRect(120, 20, 80, 60);

// Circle
ctx.fillStyle = '#06b6d4';
ctx.beginPath();
ctx.arc(270, 50, 30, 0, Math.PI * 2);
ctx.fill();

// Triangle
ctx.fillStyle = '#10b981';
ctx.beginPath();
ctx.moveTo(50, 120);
ctx.lineTo(130, 120);
ctx.lineTo(90, 160);
ctx.closePath();
ctx.fill();

// Star
ctx.fillStyle = '#ec4899';
drawStar(ctx, 220, 140, 5, 30, 15);

// Curved path
ctx.strokeStyle = '#8b5cf6';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.quadraticCurveTo(100, 250, 180, 200);
ctx.stroke();

// Arc
ctx.strokeStyle = '#3b82f6';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(270, 220, 40, 0, Math.PI);
ctx.stroke();

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}`,
};

const canvasTextExample = {
  html: `<div class="text-container">
  <h3>Text in Canvas</h3>
  <canvas id="textCanvas" width="400" height="250"></canvas>
</div>`,
  css: `.text-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .text-container {
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

#textCanvas {
  border: 2px solid #e9d5ff;
  border-radius: 8px;
  background: #faf5ff;
}

@media (prefers-color-scheme: dark) {
  #textCanvas {
    border-color: #581c87;
    background: #2e1065;
  }
}`,
  js: `const canvas = document.getElementById('textCanvas');
const ctx = canvas.getContext('2d');

// Fill text
ctx.fillStyle = '#8b5cf6';
ctx.font = 'bold 36px system-ui';
ctx.fillText('Canvas Text', 50, 50);

// Stroke text
ctx.strokeStyle = '#3b82f6';
ctx.lineWidth = 2;
ctx.font = 'bold 24px system-ui';
ctx.strokeText('Outlined Text', 50, 100);

// Different fonts
ctx.fillStyle = '#06b6d4';
ctx.font = 'italic 18px Georgia';
ctx.fillText('Styled italic text', 50, 140);

// Text shadow effect
ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
ctx.fillText('Text with shadow', 52, 182);
ctx.fillStyle = '#f97316';
ctx.fillText('Text with shadow', 50, 180);

// Right-aligned text
ctx.fillStyle = '#10b981';
ctx.font = '16px system-ui';
ctx.textAlign = 'right';
ctx.fillText('Right-aligned text', 350, 220);`,
};

const canvasAnimationExample = {
  html: `<div class="animation-container">
  <h3>Animated Canvas</h3>
  <canvas id="animCanvas" width="400" height="250"></canvas>
  <p class="anim-info">Circle moves and changes color</p>
</div>`,
  css: `.animation-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .animation-container {
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

#animCanvas {
  border: 2px solid #cffafe;
  border-radius: 8px;
  background: #ecf9ff;
}

@media (prefers-color-scheme: dark) {
  #animCanvas {
    border-color: #164e63;
    background: #082f49;
  }
}

.anim-info {
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .anim-info {
    color: #9ca3af;
  }
}`,
  js: `const canvas = document.getElementById('animCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let vx = 2;
let vy = 1.5;
const radius = 20;
let hue = 0;

function animate() {
  // Clear canvas
  ctx.fillStyle = 'rgba(236, 249, 255, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Update position
  x += vx;
  y += vy;
  
  // Bounce off walls
  if (x - radius < 0 || x + radius > canvas.width) vx *= -1;
  if (y - radius < 0 || y + radius > canvas.height) vy *= -1;
  
  // Draw circle with changing color
  ctx.fillStyle = \`hsl(\${hue}, 100%, 50%)\`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw border
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Update color
  hue = (hue + 1) % 360;
  
  requestAnimationFrame(animate);
}

animate();`,
};

const canvasInteractiveExample = {
  html: `<div class="interactive-container">
  <h3>Interactive Canvas - Paint</h3>
  <canvas id="paintCanvas" width="400" height="250"></canvas>
  <p class="interact-info">Click and drag to draw</p>
</div>`,
  css: `.interactive-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .interactive-container {
    background: #1e293b;
  }
}

h3 {
  color: #ec4899;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #ec4899;
  }
}

#paintCanvas {
  border: 2px solid #fbcfe8;
  border-radius: 8px;
  background: #fce7f3;
  cursor: crosshair;
}

@media (prefers-color-scheme: dark) {
  #paintCanvas {
    border-color: #831843;
    background: #500724;
  }
}

.interact-info {
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .interact-info {
    color: #9ca3af;
  }
}`,
  js: `const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  lastX = e.clientX - rect.left;
  lastY = e.clientY - rect.top;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  
  lastX = x;
  lastY = y;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
  isDrawing = false;
});`,
};

export default function HtmlCanvasBasics({ onOpenWebPlayground }: HtmlCanvasBasicsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Paintbrush}
        category="HTML · Graphics"
        title="Canvas Basics"
        description="Learn to create dynamic pixel-based graphics with Canvas"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Paintbrush className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is Canvas?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Dynamic pixel-based graphics with JavaScript
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The HTML Canvas element is a container for graphics that are drawn using JavaScript.
            Unlike SVG, Canvas uses a raster (pixel-based) approach, giving you pixel-level control for dynamic content like games, animations, and data visualizations.
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
                  <span>High performance for complex graphics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Full JavaScript API control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Pixel-level manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Great for animations and games</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Common Uses
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>🎮 Games and interactive apps</li>
                <li>✨ Animations and motion graphics</li>
                <li>📊 Data visualization with thousands of points</li>
                <li>🖼️ Photo and image manipulation</li>
                <li>🎨 Generative and algorithmic art</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Key Difference</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Canvas is <strong>immediate mode</strong> - once you draw, it's permanent. You must redraw everything on each animation frame.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Canvas Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Getting Started with Canvas
          </CardTitle>
          <CardDescription className="text-base">
            Basic setup and accessing the drawing context
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Step 1: Create the Canvas Element</h4>
              <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-orange-200 dark:border-orange-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<canvas id="myCanvas" width="400" height="300">
  Your browser doesn't support Canvas.
</canvas>`}</code>
              </pre>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Step 2: Get the Drawing Context</h4>
              <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');`}</code>
              </pre>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Step 3: Start Drawing</h4>
              <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`// Set style
ctx.fillStyle = '#3b82f6';

// Draw a rectangle
ctx.fillRect(50, 50, 150, 100);`}</code>
              </pre>
            </div>
          </div>

          <FrontendCodePreview
            title="Example: Basic Canvas Drawing"
            description="Rectangle, circle, and text in Canvas"
            html={canvasBasicExample.html}
            css={canvasBasicExample.css}
            js={canvasBasicExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Drawing Shapes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Drawing Shapes
          </CardTitle>
          <CardDescription className="text-base">
            Methods for creating rectangles, circles, lines, and more
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                method: 'fillRect()',
                desc: 'Filled rectangle',
                example: 'ctx.fillRect(x, y, width, height)',
                color: 'orange',
              },
              {
                method: 'strokeRect()',
                desc: 'Rectangle outline',
                example: 'ctx.strokeRect(x, y, width, height)',
                color: 'emerald',
              },
              {
                method: 'arc()',
                desc: 'Circle or arc',
                example: 'ctx.arc(x, y, radius, startAngle, endAngle)',
                color: 'purple',
              },
              {
                method: 'moveTo() / lineTo()',
                desc: 'Draw lines',
                example: 'ctx.moveTo(x1, y1); ctx.lineTo(x2, y2)',
                color: 'amber',
              },
            ].map((item, idx) => {
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
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <h4 className="font-mono font-semibold mb-2">{item.method}</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
                  <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border block mt-2 overflow-x-auto">
                    {item.example}
                  </code>
                </div>
              );
            })}
          </div>

          <FrontendCodePreview
            title="Example: Drawing Various Shapes"
            description="Rectangles, circles, triangle, star, curves, and arcs"
            html={canvasShapesExample.html}
            css={canvasShapesExample.css}
            js={canvasShapesExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Styling and Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Styling and Colors
          </CardTitle>
          <CardDescription className="text-base">
            Control appearance with colors, transparency, and line styles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                property: 'fillStyle',
                desc: 'Fill color for shapes',
                example: "ctx.fillStyle = '#3b82f6'",
                color: 'blue',
              },
              {
                property: 'strokeStyle',
                desc: 'Outline/border color',
                example: "ctx.strokeStyle = '#f97316'",
                color: 'orange',
              },
              {
                property: 'lineWidth',
                desc: 'Thickness of lines',
                example: 'ctx.lineWidth = 3',
                color: 'emerald',
              },
              {
                property: 'globalAlpha',
                desc: 'Transparency (0-1)',
                example: 'ctx.globalAlpha = 0.5',
                color: 'purple',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <h4 className="font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {item.property}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700 block">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Tip: Color Formats</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Use hex (#3b82f6), RGB (rgb(59, 130, 246)), or HSL (hsl(217, 98%, 61%))
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Text in Canvas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Type className="w-7 h-7" />
            Drawing Text
          </CardTitle>
          <CardDescription className="text-base">
            Add readable text to your Canvas drawings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            Use the Canvas API to render text with different fonts, sizes, and alignments.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                method: 'fillText()',
                desc: 'Draw filled text',
                example: 'ctx.fillText("Hello", x, y)',
              },
              {
                method: 'strokeText()',
                desc: 'Draw text outline',
                example: 'ctx.strokeText("Hello", x, y)',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700"
              >
                <h4 className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {item.method}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-700 block">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            title="Example: Text Styles and Alignment"
            description="Different fonts, sizes, and text positioning"
            html={canvasTextExample.html}
            css={canvasTextExample.css}
            js={canvasTextExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Animation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Canvas Animations
          </CardTitle>
          <CardDescription className="text-base">
            Bring your graphics to life with smooth animations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            Animation on Canvas requires clearing and redrawing the entire scene on each frame using <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">requestAnimationFrame()</code>.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Basic Animation Pattern
            </h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update objects (position, rotation, etc.)
  updateObjects();
  
  // Draw everything
  drawObjects();
  
  // Request next frame
  requestAnimationFrame(animate);
}

animate();`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Example: Bouncing Animated Circle"
            description="Circle bounces around with changing colors"
            html={canvasAnimationExample.html}
            css={canvasAnimationExample.css}
            js={canvasAnimationExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Interactive Canvas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Gamepad2 className="w-7 h-7" />
            Interactive Canvas
          </CardTitle>
          <CardDescription className="text-base">
            Handle mouse and keyboard events for user interaction
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            Canvas is part of the DOM, so you can add event listeners for mouse clicks, movement, keyboard input, and more.
          </p>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Common Events</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <code className="bg-white dark:bg-slate-950 px-2 py-1 rounded text-xs">mousedown / mouseup</code>
                <span>- Mouse button pressed/released</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <code className="bg-white dark:bg-slate-950 px-2 py-1 rounded text-xs">mousemove</code>
                <span>- Mouse position changed</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <code className="bg-white dark:bg-slate-950 px-2 py-1 rounded text-xs">click</code>
                <span>- Canvas clicked</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <code className="bg-white dark:bg-slate-950 px-2 py-1 rounded text-xs">keydown / keyup</code>
                <span>- Keyboard input</span>
              </li>
            </ul>
          </div>

          <FrontendCodePreview
            title="Example: Draw by Dragging"
            description="Click and drag your mouse to paint on canvas"
            html={canvasInteractiveExample.html}
            css={canvasInteractiveExample.css}
            js={canvasInteractiveExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Canvas Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use requestAnimationFrame() for animations</li>
                <li>✓ Cache context: const ctx = canvas.getContext('2d')</li>
                <li>✓ Set canvas size with HTML attributes, not CSS</li>
                <li>✓ Clear canvas before each frame</li>
                <li>✓ Use getImageData() sparingly (slow operation)</li>
                <li>✓ Optimize with OffscreenCanvas for heavy work</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't use setTimeout for animations</li>
                <li>✗ Don't set canvas size with CSS only</li>
                <li>✗ Don't forget to clear canvas (causes trails)</li>
                <li>✗ Don't call getContext() repeatedly</li>
                <li>✗ Don't draw millions of objects per frame</li>
                <li>✗ Don't hardcode colors (use variables)</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Performance Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              For best performance with many objects, use <strong>OffscreenCanvas</strong> or render to a secondary canvas and draw that texture.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Canvas vs SVG Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Canvas vs SVG Quick Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-300">Feature</th>
                  <th className="text-left p-3 font-semibold text-cyan-600 dark:text-cyan-400">Canvas</th>
                  <th className="text-left p-3 font-semibold text-purple-600 dark:text-purple-400">SVG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-medium">Type</td>
                  <td className="p-3">Raster (pixel-based)</td>
                  <td className="p-3">Vector (math-based)</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/30">
                  <td className="p-3 font-medium">Performance (many objects)</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✓ Better</td>
                  <td className="p-3">Good for fewer elements</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Scalability</td>
                  <td className="p-3">Pixelated when enlarged</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✓ Scales perfectly</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/30">
                  <td className="p-3 font-medium">DOM Access</td>
                  <td className="p-3">Single element</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✓ Each shape accessible</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Best For</td>
                  <td className="p-3">Games, animations, effects</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✓ Icons, diagrams, charts</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/30">
                  <td className="p-3 font-medium">CSS Styling</td>
                  <td className="p-3">No direct support</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✓ Full CSS support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="mt-4 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Choose Your Tool</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use <strong>Canvas</strong> for dynamic, interactive graphics. Use <strong>SVG</strong> for static, scalable graphics.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Gamepad2 className="w-7 h-7" />
            Real-World Canvas Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: '2D Games', desc: 'Browser-based games', emoji: '🎮' },
              { title: 'Data Charts', desc: 'Interactive visualizations', emoji: '📊' },
              { title: 'Animations', desc: 'Motion graphics', emoji: '✨' },
              { title: 'Photo Filters', desc: 'Image manipulation', emoji: '📸' },
              { title: 'Drawing Apps', desc: 'Paint and sketch tools', emoji: '🎨' },
              { title: 'Generative Art', desc: 'Algorithmic artwork', emoji: '🌈' },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-lg border border-cyan-200 dark:border-cyan-700"
              >
                <div className="text-3xl mb-2">{useCase.emoji}</div>
                <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">{useCase.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

