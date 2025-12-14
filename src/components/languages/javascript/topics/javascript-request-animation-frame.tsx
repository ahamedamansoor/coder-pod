'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Play,
  CheckCircle,
  Code2,
  Lightbulb,
  Zap,
  Monitor,
  Gauge,
  Pause,
} from 'lucide-react';

export default function JavaScriptRequestAnimationFrame() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Play}
        category="JavaScript Browser APIs"
        title="requestAnimationFrame"
        description="Create smooth 60fps animations with the browser"
        colorTheme="purple"
      />

      {/* What is requestAnimationFrame */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <Play className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                What is requestAnimationFrame?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="text-sm bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">requestAnimationFrame</code> tells the browser you want to <strong className="text-purple-700 dark:text-purple-400">animate something</strong>. 
                The browser runs your animation callback <strong className="text-fuchsia-700 dark:text-fuchsia-400">before the next repaint</strong>, giving you <strong className="text-pink-700 dark:text-pink-400">smooth 60fps</strong> animations!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-950/20 border-2 border-purple-300 dark:border-purple-700">
              <div className="text-3xl mb-2">🎬</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">60 FPS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Synced with browser refresh rate</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-900/30 dark:to-fuchsia-950/20 border-2 border-fuchsia-300 dark:border-fuchsia-700">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Battery Friendly</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Pauses when tab is hidden</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-950/20 border-2 border-pink-300 dark:border-pink-700">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">No Jank</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Smooth, optimized rendering</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Why Not setTimeout/setInterval?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="text-xs bg-white dark:bg-amber-900 px-1.5 py-0.5 rounded">setTimeout</code> isn't synced with screen refresh! 
              <strong>requestAnimationFrame</strong> runs at the perfect time (60fps), <strong>pauses when hidden</strong>, and is <strong>way more efficient</strong>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Smooth Animation Demo"
        description="Watch requestAnimationFrame create butter-smooth animations!"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #ec4899 100%); padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; text-align: center;">🎬 Animation Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px; text-align: center;">Smooth 60fps animations with requestAnimationFrame</p>
    
    <div style="background: rgba(255, 255, 255, 0.95); padding: 24px; border-radius: 12px; backdrop-filter: blur(10px);">
      <!-- Animation Canvas -->
      <div id="canvas" style="position: relative; height: 150px; background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%); border-radius: 12px; overflow: hidden; margin-bottom: 20px; border: 3px solid #a855f7;">
        <div id="ball" style="position: absolute; top: 50%; width: 40px; height: 40px; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); border-radius: 50%; box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4); transform: translateY(-50%);"></div>
      </div>
      
      <!-- Controls -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
        <button id="startBtn" style="padding: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          ▶️ Start
        </button>
        <button id="stopBtn" disabled style="padding: 14px; background: #6b7280; color: white; border: none; border-radius: 8px; cursor: not-allowed; font-weight: 600; font-size: 15px; opacity: 0.5;">
          ⏸️ Stop
        </button>
      </div>
      
      <!-- Stats -->
      <div id="stats" style="padding: 16px; background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); border-radius: 8px; border-left: 4px solid #f59e0b; font-size: 14px;"></div>
    </div>
  </div>
</div>`}
        css={`button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

button:not(:disabled):active {
  transform: translateY(0);
}

#stopBtn:not(:disabled) {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  cursor: pointer;
  opacity: 1;
}

@keyframes pulse {
  0%, 100% { transform: translateY(-50%) scale(1); }
  50% { transform: translateY(-50%) scale(1.1); }
}`}
        js={`const ball = document.getElementById('ball');
const canvas = document.getElementById('canvas');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const stats = document.getElementById('stats');

let animationId = null;
let position = 0;
let direction = 1;
let frameCount = 0;
let startTime = null;
let lastTime = null;

function animate(timestamp) {
  // Initialize timing
  if (!startTime) startTime = timestamp;
  if (!lastTime) lastTime = timestamp;
  
  const elapsed = timestamp - startTime;
  const delta = timestamp - lastTime;
  lastTime = timestamp;
  
  frameCount++;
  
  // Calculate FPS
  const fps = Math.round(1000 / delta);
  
  // Move the ball
  position += direction * 3;
  
  // Bounce at edges
  const maxPosition = canvas.offsetWidth - 40;
  if (position >= maxPosition || position <= 0) {
    direction *= -1;
    position = Math.max(0, Math.min(position, maxPosition));
  }
  
  // Update ball position
  ball.style.left = position + 'px';
  
  // Update stats
  stats.innerHTML = \`
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
      <div>
        <div style="font-size: 11px; color: #78350f; font-weight: 600;">FRAMES</div>
        <div style="font-size: 20px; font-weight: 700; color: #b45309;">\${frameCount}</div>
      </div>
      <div>
        <div style="font-size: 11px; color: #78350f; font-weight: 600;">FPS</div>
        <div style="font-size: 20px; font-weight: 700; color: #b45309;">\${fps}</div>
      </div>
      <div>
        <div style="font-size: 11px; color: #78350f; font-weight: 600;">TIME</div>
        <div style="font-size: 20px; font-weight: 700; color: #b45309;">\${(elapsed / 1000).toFixed(1)}s</div>
      </div>
    </div>
    <div style="margin-top: 8px; font-size: 12px; color: #78350f; text-align: center;">
      ✨ Smooth 60fps animation with requestAnimationFrame!
    </div>
  \`;
  
  // Continue animation loop
  animationId = requestAnimationFrame(animate);
}

startBtn.addEventListener('click', () => {
  // Reset if starting fresh
  if (animationId === null) {
    startTime = null;
    lastTime = null;
    frameCount = 0;
  }
  
  // Start animation
  animationId = requestAnimationFrame(animate);
  
  // Update buttons
  startBtn.disabled = true;
  stopBtn.disabled = false;
  
  console.log('▶️ Animation started with requestAnimationFrame!');
});

stopBtn.addEventListener('click', () => {
  // Cancel animation
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  
  // Update buttons
  startBtn.disabled = false;
  stopBtn.disabled = true;
  
  console.log('⏸️ Animation stopped!');
});

// Initial stats
stats.innerHTML = \`
  <div style="text-align: center; color: #78350f;">
    <div style="font-weight: 600; margin-bottom: 4px;">👆 Click "Start" to begin smooth animation</div>
    <div style="font-size: 12px; opacity: 0.8;">Watch the ball move at 60 frames per second!</div>
  </div>
\`;

console.log('✅ requestAnimationFrame demo ready!');`}
        colorTheme="purple"
      />

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>Simple animation loop</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-100/50 dark:from-purple-950/20 dark:to-fuchsia-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Animation Loop Pattern
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Animation loop function
function animate(timestamp) {
  // 1. Update your animation state
  position += velocity;
  rotation += rotationSpeed;
  
  // 2. Update DOM elements
  element.style.transform = \`translateX(\${position}px) rotate(\${rotation}deg)\`;
  
  // 3. Request next frame (creates loop)
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);

// 🎯 The callback receives a DOMHighResTimeStamp
// - Precise timestamp of when the frame is called
// - Use it to calculate smooth, time-based animations

// To stop the animation:
let animationId = requestAnimationFrame(animate);
cancelAnimationFrame(animationId);`}</code>
            </pre>
          </div>

          <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
            <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Pro Tip: Delta Time</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Always use the <strong>timestamp</strong> parameter to calculate delta time. This ensures smooth animation even if frame rate varies!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Time-Based Animation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/30">
              <Gauge className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <CardTitle>Time-Based Animation (Proper Way)</CardTitle>
              <CardDescription>Smooth animation regardless of FPS</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-100/50 dark:from-fuchsia-950/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
            <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-3">Delta Time Pattern</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`let lastTime = 0;
let position = 0;
const speed = 100; // pixels per second

function animate(timestamp) {
  // Calculate delta time (time since last frame)
  const deltaTime = (timestamp - lastTime) / 1000; // Convert to seconds
  lastTime = timestamp;
  
  // Move based on time, not frames
  position += speed * deltaTime;
  
  // Update element
  element.style.left = position + 'px';
  
  // Continue
  requestAnimationFrame(animate);
}

// Start
requestAnimationFrame(animate);

// 🎯 Benefits:
// - Animation speed is consistent
// - Works on 30fps, 60fps, 144fps screens
// - Dropped frames don't slow animation
// - Professional game-dev technique`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-100/50 dark:from-pink-950/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800/30">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3">Moving Box Example</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`const box = document.getElementById('box');
let position = 0;
let lastTime = null;

function moveBox(timestamp) {
  if (!lastTime) lastTime = timestamp;
  
  const delta = (timestamp - lastTime) / 1000;
  lastTime = timestamp;
  
  // Move 200 pixels per second
  position += 200 * delta;
  
  // Wrap around at 500px
  if (position > 500) position = 0;
  
  box.style.transform = \`translateX(\${position}px)\`;
  
  requestAnimationFrame(moveBox);
}

requestAnimationFrame(moveBox);

// Result: Smooth movement at exactly 200px/second
// on any device, any refresh rate!`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Monitor className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Real-World Examples</CardTitle>
              <CardDescription>Practical use cases</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100/50 dark:from-blue-950/20 dark:to-sky-900/10 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">1. Parallax Scrolling</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`const background = document.getElementById('bg');
const foreground = document.getElementById('fg');

function updateParallax() {
  const scrollY = window.scrollY;
  
  // Move background slower than foreground
  background.style.transform = \`translateY(\${scrollY * 0.5}px)\`;
  foreground.style.transform = \`translateY(\${scrollY * 0.8}px)\`;
  
  requestAnimationFrame(updateParallax);
}

requestAnimationFrame(updateParallax);

// Creates smooth parallax effect on scroll!`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">2. Smooth Scroll Animation</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`function smoothScrollTo(element, targetY, duration = 1000) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  
  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-in-out)
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    window.scrollTo(0, startY + distance * eased);
    
    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }
  
  requestAnimationFrame(scroll);
}

// Usage
smoothScrollTo(element, 1000, 800); // Scroll to 1000px in 800ms`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100/50 dark:from-purple-950/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">3. Progress Bar Animation</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`function animateProgress(element, targetPercent, duration = 1000) {
  const startTime = performance.now();
  const startPercent = parseFloat(element.style.width) || 0;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentPercent = startPercent + (targetPercent - startPercent) * progress;
    element.style.width = currentPercent + '%';
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Usage
const progressBar = document.getElementById('progress');
animateProgress(progressBar, 75); // Animate to 75%`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-100/50 dark:from-orange-950/20 dark:to-amber-900/10 border-2 border-orange-200 dark:border-orange-800/30">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">4. Game Loop</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`class Game {
  constructor() {
    this.player = { x: 0, y: 0, vx: 0, vy: 0 };
    this.lastTime = 0;
    this.running = false;
  }
  
  update(deltaTime) {
    // Update game physics
    this.player.x += this.player.vx * deltaTime;
    this.player.y += this.player.vy * deltaTime;
    
    // Apply gravity
    this.player.vy += 980 * deltaTime; // 980px/s²
    
    // Collision detection, etc.
  }
  
  render() {
    // Draw game
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(this.player.x, this.player.y, 32, 32);
  }
  
  loop(timestamp) {
    if (!this.running) return;
    
    const deltaTime = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;
    
    this.update(deltaTime);
    this.render();
    
    requestAnimationFrame((t) => this.loop(t));
  }
  
  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }
  
  stop() {
    this.running = false;
  }
}

const game = new Game();
game.start();`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* vs setTimeout/setInterval */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Why NOT setTimeout/setInterval?</CardTitle>
              <CardDescription>The problems with timer-based animation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Not Synced with Refresh</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <code className="text-xs bg-white dark:bg-red-900 px-1.5 py-0.5 rounded">setInterval(fn, 16)</code> isn't perfectly synced with 60Hz refresh rate, causes visual tearing
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Runs When Hidden</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Continues running when tab is hidden, wasting battery. requestAnimationFrame pauses automatically!
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Can't Batch Updates</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Browser can't optimize multiple DOM updates. requestAnimationFrame batches all changes before paint!
            </p>
          </div>

          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Use requestAnimationFrame</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Perfect sync, battery-friendly, optimized by browser, smooth 60fps animations
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Perfect Use Cases</CardTitle>
              <CardDescription>When to use requestAnimationFrame</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">CSS Animations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                JavaScript-driven animations (move, rotate, scale)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950/20 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="text-3xl mb-3">🎮</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Game Loops</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update game state and render at 60fps
              </p>
            </div>

            <div className="p-5 rounded-xl bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Data Visualization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Animate charts, graphs, transitions
              </p>
            </div>

            <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="text-3xl mb-3">📜</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Scroll Effects</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Parallax, smooth scrolling, reveal animations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">60 FPS</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Synced with browser refresh rate
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⏱️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Delta Time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use timestamp for smooth animation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Battery Friendly</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pauses when tab is hidden
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Cancel with ID</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">cancelAnimationFrame(id)</code>
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
