'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, Palette, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';

export default function JavaScriptCanvasAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Palette}
        category="APIs & Browser"
        title="Canvas API"
        description="Drawing graphics and animations with HTML5 Canvas"
        colorTheme="amber"
      />

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is Canvas API?</CardTitle>
          <CardDescription>Draw graphics dynamically using JavaScript</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Canvas API provides a way to draw graphics dynamically using JavaScript and the HTML <code>&lt;canvas&gt;</code> element. 
            It's used for rendering shapes, images, animations, games, data visualization, photo manipulation, and real-time video processing.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">2D & 3D</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Supports 2D drawing (CanvasRenderingContext2D) and 3D with WebGL
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Pixel-based</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Bitmap-based (unlike SVG which is vector-based)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/10 border border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Immediate Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Draw commands execute immediately; no scene graph
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Getting Started</CardTitle>
          <CardDescription>Setting up and basic drawing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`<!-- HTML -->
<canvas id="myCanvas" width="800" height="600"></canvas>

<script>
// Get canvas element
const canvas = document.getElementById('myCanvas');

// Get 2D rendering context
const ctx = canvas.getContext('2d');

// Check if context is available
if (ctx) {
  // Canvas is supported, start drawing
  console.log('Canvas ready!');
} else {
  console.error('Canvas not supported');
}

// Set canvas size dynamically
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// High DPI display support
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.width * dpr;
canvas.height = canvas.height * dpr;
ctx.scale(dpr, dpr);
</script>`}</code></pre>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Canvas Size</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Canvas has two sizes: the <strong>display size</strong> (CSS width/height) and the <strong>drawing buffer size</strong> (width/height attributes). 
              For crisp graphics, these should match or account for device pixel ratio.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Drawing Shapes</CardTitle>
          <CardDescription>Rectangles, circles, paths, and more</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// 1. RECTANGLES
// Fill rectangle
ctx.fillStyle = '#3B82F6';
ctx.fillRect(50, 50, 200, 100); // x, y, width, height

// Stroke rectangle (outline)
ctx.strokeStyle = '#EF4444';
ctx.lineWidth = 3;
ctx.strokeRect(300, 50, 200, 100);

// Clear rectangle (erase)
ctx.clearRect(100, 75, 100, 50);

// 2. CIRCLES AND ARCS
ctx.beginPath();
ctx.arc(150, 250, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = '#10B981';
ctx.fill();

// Half circle (arc)
ctx.beginPath();
ctx.arc(300, 250, 50, 0, Math.PI); // 0 to PI = half circle
ctx.strokeStyle = '#F59E0B';
ctx.lineWidth = 4;
ctx.stroke();

// 3. LINES
ctx.beginPath();
ctx.moveTo(50, 400);  // Starting point
ctx.lineTo(200, 450); // Draw line to
ctx.lineTo(150, 500); // Another line to
ctx.strokeStyle = '#8B5CF6';
ctx.lineWidth = 2;
ctx.stroke();

// 4. TRIANGLES
ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(400, 500);
ctx.lineTo(200, 500);
ctx.closePath(); // Close the path
ctx.fillStyle = '#EC4899';
ctx.fill();

// 5. BEZIER CURVES
ctx.beginPath();
ctx.moveTo(50, 600);
ctx.quadraticCurveTo(200, 550, 350, 600); // control point, end point
ctx.strokeStyle = '#06B6D4';
ctx.lineWidth = 3;
ctx.stroke();

// 6. ROUNDED RECTANGLE (using path)
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

roundRect(ctx, 500, 400, 200, 100, 20);
ctx.fillStyle = '#14B8A6';
ctx.fill();`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Text and Styles</CardTitle>
          <CardDescription>Drawing text with fonts and colors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// TEXT
ctx.font = '48px Arial';
ctx.fillStyle = '#1F2937';
ctx.fillText('Hello Canvas!', 50, 100);

// Stroke text (outline)
ctx.strokeStyle = '#3B82F6';
ctx.lineWidth = 2;
ctx.strokeText('Outlined Text', 50, 200);

// Text alignment
ctx.textAlign = 'center';    // left, right, center, start, end
ctx.textBaseline = 'middle';  // top, bottom, middle, alphabetic
ctx.fillText('Centered', canvas.width / 2, 300);

// Measure text width
const metrics = ctx.measureText('Hello Canvas!');
console.log('Text width:', metrics.width);

// GRADIENTS
// Linear gradient
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, '#3B82F6');
gradient.addColorStop(0.5, '#8B5CF6');
gradient.addColorStop(1, '#EC4899');
ctx.fillStyle = gradient;
ctx.fillRect(50, 400, 200, 100);

// Radial gradient
const radialGradient = ctx.createRadialGradient(400, 450, 10, 400, 450, 50);
radialGradient.addColorStop(0, '#FFFFFF');
radialGradient.addColorStop(1, '#3B82F6');
ctx.fillStyle = radialGradient;
ctx.fillRect(300, 400, 200, 100);

// PATTERNS
const img = new Image();
img.src = '/pattern.png';
img.onload = () => {
  const pattern = ctx.createPattern(img, 'repeat'); // repeat, repeat-x, repeat-y, no-repeat
  ctx.fillStyle = pattern;
  ctx.fillRect(50, 550, 300, 100);
};

// SHADOWS
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.fillStyle = '#10B981';
ctx.fillRect(400, 550, 150, 80);

// Reset shadow
ctx.shadowColor = 'transparent';`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Images and Transformations</CardTitle>
          <CardDescription>Drawing images and manipulating the canvas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// IMAGES
const img = new Image();
img.src = '/photo.jpg';
img.onload = () => {
  // Draw image at position
  ctx.drawImage(img, 0, 0);
  
  // Draw with size
  ctx.drawImage(img, 0, 0, 300, 200);
  
  // Draw with crop and size
  ctx.drawImage(
    img,
    50, 50, 200, 200,    // source x, y, width, height
    100, 100, 300, 300   // dest x, y, width, height
  );
};

// TRANSFORMATIONS
// Save current state
ctx.save();

// Translate (move origin)
ctx.translate(400, 300);

// Rotate (in radians)
ctx.rotate(Math.PI / 4); // 45 degrees

// Scale
ctx.scale(1.5, 1.5);

// Draw after transformations
ctx.fillStyle = '#3B82F6';
ctx.fillRect(0, 0, 100, 100);

// Restore previous state
ctx.restore();

// COMPOSITION
ctx.globalAlpha = 0.5; // Transparency (0-1)
ctx.globalCompositeOperation = 'multiply'; // Blend mode

// Available blend modes:
// source-over, source-in, source-out, source-atop
// destination-over, destination-in, destination-out, destination-atop
// lighter, copy, xor, multiply, screen, overlay, darken, lighten

// CLIPPING
ctx.save();
ctx.beginPath();
ctx.arc(400, 300, 100, 0, Math.PI * 2);
ctx.clip(); // Only draw inside this circle
ctx.fillStyle = '#10B981';
ctx.fillRect(300, 200, 200, 200);
ctx.restore();`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Animation</CardTitle>
          <CardDescription>Creating smooth animations with requestAnimationFrame</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Simple animation
let x = 0;
let y = 200;
let dx = 2;  // velocity x
let dy = 1;  // velocity y

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update position
  x += dx;
  y += dy;
  
  // Bounce off edges
  if (x + 50 > canvas.width || x < 0) {
    dx = -dx;
  }
  if (y + 50 > canvas.height || y < 0) {
    dy = -dy;
  }
  
  // Draw ball
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fillStyle = '#3B82F6';
  ctx.fill();
  
  // Continue animation
  requestAnimationFrame(animate);
}

// Start animation
animate();

// ANIMATION WITH TIME-BASED MOVEMENT
let lastTime = 0;

function animateWithDelta(timestamp) {
  // Calculate delta time
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update (60 FPS independent)
  x += dx * (deltaTime / 16.67);
  
  // Draw
  ctx.fillStyle = '#10B981';
  ctx.fillRect(x, 100, 50, 50);
  
  requestAnimationFrame(animateWithDelta);
}

requestAnimationFrame(animateWithDelta);

// PARTICLE SYSTEM
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
    this.radius = Math.random() * 3 + 2;
    this.life = 1;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= 0.01;
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = \`rgba(59, 130, 246, \${this.life})\`;
    ctx.fill();
  }
  
  isDead() {
    return this.life <= 0;
  }
}

const particles = [];

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Add new particles
  if (Math.random() < 0.1) {
    particles.push(new Particle(400, 300));
  }
  
  // Update and draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw(ctx);
    
    // Remove dead particles
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
  
  requestAnimationFrame(animateParticles);
}

animateParticles();`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Interactive Drawing App</CardTitle>
          <CardDescription>Complete canvas application with mouse interaction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class DrawingApp {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.color = '#000000';
    this.lineWidth = 5;
    this.tool = 'pen'; // pen, eraser, circle, rectangle
    
    this.setupCanvas();
    this.setupEventListeners();
  }
  
  setupCanvas() {
    // Set canvas size
    this.canvas.width = 800;
    this.canvas.height = 600;
    
    // Set default styles
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    
    // Fill with white background
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  setupEventListeners() {
    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    this.canvas.addEventListener('mouseup', () => this.stopDrawing());
    this.canvas.addEventListener('mouseout', () => this.stopDrawing());
    
    // Touch events for mobile
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startDrawing(e.touches[0]);
    });
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.draw(e.touches[0]);
    });
    this.canvas.addEventListener('touchend', () => this.stopDrawing());
  }
  
  getCoordinates(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
  
  startDrawing(e) {
    this.isDrawing = true;
    const coords = this.getCoordinates(e);
    this.lastX = coords.x;
    this.lastY = coords.y;
  }
  
  draw(e) {
    if (!this.isDrawing) return;
    
    const coords = this.getCoordinates(e);
    
    switch(this.tool) {
      case 'pen':
        this.drawLine(coords.x, coords.y);
        break;
      case 'eraser':
        this.erase(coords.x, coords.y);
        break;
    }
  }
  
  drawLine(x, y) {
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.lineWidth;
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    
    this.lastX = x;
    this.lastY = y;
  }
  
  erase(x, y) {
    this.ctx.clearRect(x - 10, y - 10, 20, 20);
    this.lastX = x;
    this.lastY = y;
  }
  
  stopDrawing() {
    this.isDrawing = false;
  }
  
  setColor(color) {
    this.color = color;
  }
  
  setLineWidth(width) {
    this.lineWidth = width;
  }
  
  setTool(tool) {
    this.tool = tool;
  }
  
  clear() {
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  saveImage() {
    const dataURL = this.canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = dataURL;
    link.click();
  }
  
  loadImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Usage
const app = new DrawingApp('myCanvas');

// UI controls
document.getElementById('colorPicker').addEventListener('change', (e) => {
  app.setColor(e.target.value);
});

document.getElementById('lineWidth').addEventListener('input', (e) => {
  app.setLineWidth(e.target.value);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  app.clear();
});

document.getElementById('saveBtn').addEventListener('click', () => {
  app.saveImage();
});

document.getElementById('penBtn').addEventListener('click', () => {
  app.setTool('pen');
});

document.getElementById('eraserBtn').addEventListener('click', () => {
  app.setTool('eraser');
});`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Performance Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Use requestAnimationFrame</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Better than setInterval/setTimeout for animations - syncs with display refresh rate.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Batch draw calls</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Group similar drawing operations together to reduce state changes.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✓ Use layers for static content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Multiple canvases stacked - one for background, one for dynamic content.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✓ Clear only dirty regions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use clearRect() on specific areas instead of the entire canvas.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✗ Avoid frequent getImageData</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pixel manipulation is slow - minimize calls to getImageData/putImageData.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-red-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Immediate Mode</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Draw commands execute immediately
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">requestAnimationFrame</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use for smooth 60 FPS animations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">2D Context</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rich API for shapes, text, images
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance Aware</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimize for smooth rendering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
