'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  MousePointer,
  Keyboard,
  FileText,
  Globe,
  Lightbulb,
  Code2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  PlayCircle,
  RefreshCw,
  Monitor,
  Touchpad,
  Move,
  Focus,
  Copy,
  Scissors
} from 'lucide-react';

interface EventTypesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptEventTypes({ onOpenWebPlayground }: EventTypesProps) {
  // Demo states
  const [mouseLog, setMouseLog] = useState<string[]>([]);
  const [keyLog, setKeyLog] = useState<string[]>([]);
  const [clipboardLog, setClipboardLog] = useState<string[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const addMouseLog = (message: string) => {
    setMouseLog(prev => [...prev.slice(-3), message]);
  };

  const addKeyLog = (message: string) => {
    setKeyLog(prev => [...prev.slice(-3), message]);
  };

  const addClipboardLog = (message: string) => {
    setClipboardLog(prev => [...prev.slice(-2), message]);
  };

  const resetMouseDemo = () => setMouseLog([]);
  const resetKeyDemo = () => setKeyLog([]);
  const resetClipboardDemo = () => setClipboardLog([]);

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Event Types Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>🎯 JavaScript Event Types</h1>
    <p class="subtitle">Interact with different elements to see events in action</p>

    <!-- Mouse Events -->
    <section class="demo-section">
      <h2>Mouse Events</h2>
      <div id="mouse-area" class="interactive-area">
        Hover, click, and move your mouse here
      </div>
      <div id="mouse-output" class="output"></div>
    </section>

    <!-- Keyboard Events -->
    <section class="demo-section">
      <h2>Keyboard Events</h2>
      <input type="text" id="key-input" placeholder="Type something..." />
      <div id="key-output" class="output"></div>
    </section>

    <!-- Form Events -->
    <section class="demo-section">
      <h2>Form Events</h2>
      <form id="demo-form">
        <input type="text" id="form-input" placeholder="Enter text" />
        <select id="form-select">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div id="form-output" class="output"></div>
    </section>

    <!-- Window Events -->
    <section class="demo-section">
      <h2>Window Events</h2>
      <p>Resize window or scroll to trigger events</p>
      <div id="window-output" class="output"></div>
    </section>

    <div id="console" class="console">
      <h3>Event Console</h3>
      <div id="console-log"></div>
    </div>
  </div>
  <script src="./script.js"></script>
</body>
</html>`;

  const playgroundCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  color: #1e293b;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 32px;
}

.demo-section {
  margin-bottom: 32px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  color: #334155;
  font-size: 20px;
  margin-bottom: 16px;
}

.interactive-area {
  padding: 48px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
}

.interactive-area:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
}

input[type="text"],
select {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 12px;
}

input:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
}

button {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.output {
  margin-top: 16px;
  padding: 12px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #475569;
  min-height: 60px;
}

.console {
  margin-top: 32px;
  padding: 24px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  max-height: 300px;
  overflow-y: auto;
}

.console h3 {
  margin-bottom: 16px;
  font-size: 18px;
}

#console-log {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.8;
  color: #94a3b8;
}

.log-entry {
  margin: 4px 0;
  padding: 4px 8px;
  border-left: 3px solid #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}`;

  const playgroundJs = `const consoleLog = document.getElementById('console-log');

function log(message, color = '#94a3b8') {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.style.borderLeftColor = color;
  entry.textContent = '> ' + message;
  consoleLog.appendChild(entry);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

// Mouse Events
const mouseArea = document.getElementById('mouse-area');
const mouseOutput = document.getElementById('mouse-output');

mouseArea.addEventListener('click', (e) => {
  mouseOutput.textContent = 'Event: click';
  log('Mouse clicked at (' + e.clientX + ', ' + e.clientY + ')', '#10b981');
});

mouseArea.addEventListener('dblclick', () => {
  mouseOutput.textContent = 'Event: dblclick';
  log('Mouse double-clicked', '#8b5cf6');
});

mouseArea.addEventListener('mouseenter', () => {
  mouseOutput.textContent = 'Event: mouseenter';
  log('Mouse entered area', '#3b82f6');
});

mouseArea.addEventListener('mouseleave', () => {
  mouseOutput.textContent = 'Event: mouseleave';
  log('Mouse left area', '#ef4444');
});

mouseArea.addEventListener('mousemove', (e) => {
  mouseOutput.textContent = \`Event: mousemove (X: \${e.offsetX}, Y: \${e.offsetY})\`;
});

mouseArea.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  mouseOutput.textContent = 'Event: contextmenu (right-click)';
  log('Right-click detected', '#f59e0b');
});

// Keyboard Events
const keyInput = document.getElementById('key-input');
const keyOutput = document.getElementById('key-output');

keyInput.addEventListener('keydown', (e) => {
  keyOutput.textContent = \`Event: keydown - Key: \${e.key} | Code: \${e.code}\`;
  log(\`Key down: \${e.key}\`, '#22d3ee');
});

keyInput.addEventListener('keyup', (e) => {
  keyOutput.textContent = \`Event: keyup - Key: \${e.key}\`;
});

keyInput.addEventListener('keypress', (e) => {
  log(\`Key pressed: \${e.key}\`, '#a855f7');
});

// Form Events
const form = document.getElementById('demo-form');
const formInput = document.getElementById('form-input');
const formSelect = document.getElementById('form-select');
const formOutput = document.getElementById('form-output');

formInput.addEventListener('input', (e) => {
  formOutput.textContent = \`Event: input - Value: \${e.target.value}\`;
});

formInput.addEventListener('change', (e) => {
  log(\`Input changed: \${e.target.value}\`, '#10b981');
});

formInput.addEventListener('focus', () => {
  formOutput.textContent = 'Event: focus - Input focused';
  log('Input focused', '#3b82f6');
});

formInput.addEventListener('blur', () => {
  formOutput.textContent = 'Event: blur - Input lost focus';
  log('Input blurred', '#64748b');
});

formSelect.addEventListener('change', (e) => {
  formOutput.textContent = \`Event: change - Selected: \${e.target.value}\`;
  log(\`Select changed: \${e.target.value}\`, '#8b5cf6');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formOutput.textContent = 'Event: submit - Form submitted';
  log('Form submitted (prevented default)', '#10b981');
});

// Window Events
const windowOutput = document.getElementById('window-output');

window.addEventListener('resize', () => {
  windowOutput.textContent = \`Event: resize - Window: \${window.innerWidth}x\${window.innerHeight}\`;
  log(\`Window resized: \${window.innerWidth}x\${window.innerHeight}\`, '#f59e0b');
});

let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    windowOutput.textContent = \`Event: scroll - Position: \${window.pageYOffset}px\`;
    log(\`Scrolled to: \${window.pageYOffset}px\`, '#22d3ee');
  }, 100);
});

// Initial log
log('🎯 Event Types Demo Ready!', '#22d3ee');
log('Interact with elements to see events', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={MousePointer}
        category="10. Events"
        title="JavaScript Event Types"
        description="Master every type of event - from mouse clicks to clipboard actions, understand how to handle all user interactions"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Event Types Overview
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript provides events for every type of user interaction
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Mouse Events</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Clicks, hovers, drags, and movements
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              8+ Events
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Keyboard className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Keyboard Events</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Key presses, releases, and combinations
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              3+ Events
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Form Events</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Input changes, focus, and submissions
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              6+ Events
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Window Events</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Page load, scroll, and resize events
            </p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
              5+ Events
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Mouse Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <MousePointer className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. Mouse Events
          </CardTitle>
          <CardDescription className="text-base">
            Handle all types of mouse interactions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Click Events */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">click & dblclick</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const button = document.querySelector('button');

// Single click
button.addEventListener('click', (e) => {
  console.log('Button clicked!');
  console.log('X:', e.clientX, 'Y:', e.clientY);
  console.log('Button:', e.button);
  // 0 = left, 1 = middle, 2 = right
});

// Double click
button.addEventListener('dblclick', () => {
  console.log('Double clicked!');
});

// Use case: Like button (single vs double)
let likeCount = 0;
button.addEventListener('dblclick', () => {
  likeCount += 2; // Double like!
  console.log('Likes:', likeCount);
});`}</pre>
            </div>

            {/* Hover Events */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">mouseenter & mouseleave</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const card = document.querySelector('.card');

// Mouse enters element
card.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
  card.style.transform = 'scale(1.05)';
  card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
});

// Mouse leaves element
card.addEventListener('mouseleave', () => {
  console.log('Mouse left');
  card.style.transform = 'scale(1)';
  card.style.boxShadow = 'none';
});

// Use case: Dropdown menus
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
  dropdown.querySelector('.menu').style.display = 'block';
});
dropdown.addEventListener('mouseleave', () => {
  dropdown.querySelector('.menu').style.display = 'none';
});`}</pre>
            </div>

            {/* Mouse Movement */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">mousemove & mouseover</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const area = document.querySelector('.tracking-area');

// Tracks every mouse movement
area.addEventListener('mousemove', (e) => {
  const x = e.clientX; // Viewport X
  const y = e.clientY; // Viewport Y
  const offsetX = e.offsetX; // Element X
  const offsetY = e.offsetY; // Element Y
  
  console.log(\`Mouse at (\${x}, \${y})\`);
  
  // Use case: Custom cursor
  const cursor = document.querySelector('.cursor');
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

// Use case: Image zoom on hover
area.addEventListener('mousemove', (e) => {
  const rect = area.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * 100;
  const y = (e.clientY - rect.top) / rect.height * 100;
  
  area.style.transformOrigin = \`\${x}% \${y}%\`;
});`}</pre>
            </div>

            {/* Mouse Buttons */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">mousedown, mouseup, contextmenu</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const element = document.querySelector('.element');

// Button pressed
element.addEventListener('mousedown', (e) => {
  console.log('Mouse button pressed');
  console.log('Button:', e.button);
  // 0 = left, 1 = middle, 2 = right
});

// Button released
element.addEventListener('mouseup', () => {
  console.log('Mouse button released');
});

// Right-click (context menu)
element.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // Stop default context menu
  console.log('Right-clicked!');
  showCustomMenu(e.clientX, e.clientY);
});

// Use case: Drag detection
let isDragging = false;
element.addEventListener('mousedown', () => {
  isDragging = true;
});
document.addEventListener('mouseup', () => {
  isDragging = false;
});`}</pre>
            </div>
          </div>

          {/* Live Mouse Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - Mouse Events
            </h4>
            <div className="space-y-4">
              <div 
                className="p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg cursor-pointer text-white text-center font-semibold"
                onClick={() => addMouseLog('click event')}
                onDoubleClick={() => addMouseLog('dblclick event')}
                onMouseEnter={() => addMouseLog('mouseenter event')}
                onMouseLeave={() => addMouseLog('mouseleave event')}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePosition({
                    x: Math.round(e.clientX - rect.left),
                    y: Math.round(e.clientY - rect.top)
                  });
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  addMouseLog('contextmenu event (right-click)');
                }}
              >
                Interact with your mouse here
                <div className="text-sm mt-2 opacity-80">
                  Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border min-h-[100px]">
                <p className="font-semibold text-sm mb-2">Event Log:</p>
                {mouseLog.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Click, hover, or move your mouse...</p>
                ) : (
                  <div className="space-y-1">
                    {mouseLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-blue-600 dark:text-blue-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <Button size="sm" variant="outline" onClick={resetMouseDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Mouse Event Properties</AlertTitle>
            <AlertDescription>
              All mouse events provide <code className="text-xs">clientX/Y</code> (viewport position), <code className="text-xs">pageX/Y</code> (document position), <code className="text-xs">offsetX/Y</code> (element position), and <code className="text-xs">button</code> (which button was clicked).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Keyboard Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Keyboard className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            2. Keyboard Events
          </CardTitle>
          <CardDescription className="text-base">
            Capture and respond to key presses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* keydown & keyup */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">keydown & keyup</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Key is pressed down
input.addEventListener('keydown', (e) => {
  console.log('Key down:', e.key);
  console.log('Code:', e.code);
  console.log('Ctrl:', e.ctrlKey);
  console.log('Shift:', e.shiftKey);
  console.log('Alt:', e.altKey);
  
  // Prevent default behavior
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log('Enter blocked!');
  }
});

// Key is released
input.addEventListener('keyup', (e) => {
  console.log('Key up:', e.key);
});

// Use case: Character counter
input.addEventListener('keyup', (e) => {
  const count = e.target.value.length;
  document.querySelector('.counter').textContent = count;
});`}</pre>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Keyboard Shortcuts</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Global shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + S = Save
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveDocument();
    console.log('Saved!');
  }
  
  // Ctrl/Cmd + K = Search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  
  // Escape = Close modal
  if (e.key === 'Escape') {
    closeModal();
  }
  
  // Arrow keys = Navigation
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    navigateDown();
  }
});

// Use case: Gaming controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'w') moveUp();
  if (e.key === 'a') moveLeft();
  if (e.key === 's') moveDown();
  if (e.key === 'd') moveRight();
  if (e.key === ' ') jump();
});`}</pre>
            </div>

            {/* Key Properties */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Key vs Code vs KeyCode</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`document.addEventListener('keydown', (e) => {
  console.log('key:', e.key);     // 'a', 'Enter', 'Shift'
  console.log('code:', e.code);   // 'KeyA', 'Enter', 'ShiftLeft'
  console.log('keyCode:', e.keyCode); // 65, 13, 16 (deprecated!)
  
  // key = What character (keyboard layout aware)
  // code = Physical key (keyboard layout independent)
  // keyCode = Numeric code (DEPRECATED - don't use!)
});

// Best practice: Use e.key or e.code
document.addEventListener('keydown', (e) => {
  // Use key for character-based logic
  if (e.key === 'Enter') {
    submitForm();
  }
  
  // Use code for position-based logic (gaming)
  if (e.code === 'Space') {
    jump();
  }
});

// Special keys
console.log(e.key === 'Enter');     // Enter key
console.log(e.key === 'Escape');    // Escape key
console.log(e.key === 'ArrowUp');   // Arrow keys
console.log(e.key === 'Backspace'); // Backspace
console.log(e.key === ' ');         // Space`}</pre>
            </div>

            {/* Input Events */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Input Filtering</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Allow only numbers
input.addEventListener('keydown', (e) => {
  const isNumber = /[0-9]/.test(e.key);
  const isControl = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(e.key);
  
  if (!isNumber && !isControl) {
    e.preventDefault();
    console.log('Only numbers allowed!');
  }
});

// Limit input length
input.addEventListener('keydown', (e) => {
  if (input.value.length >= 10 && e.key !== 'Backspace') {
    e.preventDefault();
    console.log('Max length reached!');
  }
});

// Auto-format phone number
input.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\\D/g, '');
  if (value.length > 3 && value.length <= 6) {
    value = value.slice(0,3) + '-' + value.slice(3);
  } else if (value.length > 6) {
    value = value.slice(0,3) + '-' + value.slice(3,6) + '-' + value.slice(6,10);
  }
  e.target.value = value;
});`}</pre>
            </div>
          </div>

          {/* Live Keyboard Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Keyboard Events
            </h4>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Type something or press keyboard shortcuts..."
                className="w-full px-4 py-3 border-2 border-purple-300 dark:border-purple-700 rounded-lg focus:outline-none focus:border-purple-500"
                onKeyDown={(e) => {
                  addKeyLog(`keydown: ${e.key} ${e.ctrlKey ? '(Ctrl)' : ''} ${e.shiftKey ? '(Shift)' : ''} ${e.altKey ? '(Alt)' : ''}`);
                }}
                onKeyUp={(e) => {
                  addKeyLog(`keyup: ${e.key}`);
                }}
              />
              <div className="p-3 bg-white dark:bg-gray-900 rounded border min-h-[100px]">
                <p className="font-semibold text-sm mb-2">Keyboard Log:</p>
                {keyLog.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Start typing to see events...</p>
                ) : (
                  <div className="space-y-1">
                    {keyLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <Button size="sm" variant="outline" onClick={resetKeyDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileText className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. Form Events
          </CardTitle>
          <CardDescription className="text-base">
            Handle form inputs, validation, and submissions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Events */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">input vs change</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Fires on EVERY change (real-time)
input.addEventListener('input', (e) => {
  console.log('Current value:', e.target.value);
  // Perfect for: Live search, character counter
});

// Fires when input LOSES FOCUS (after changes)
input.addEventListener('change', (e) => {
  console.log('Final value:', e.target.value);
  // Perfect for: Form validation, save data
});

// Use case: Live search
input.addEventListener('input', (e) => {
  const query = e.target.value;
  searchResults.innerHTML = '';
  
  if (query.length >= 3) {
    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(data => displayResults(data));
  }
});`}</pre>
            </div>

            {/* Focus Events */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">focus & blur</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Element receives focus
input.addEventListener('focus', (e) => {
  console.log('Input focused');
  e.target.parentElement.classList.add('active');
  e.target.placeholder = 'Type here...';
});

// Element loses focus
input.addEventListener('blur', (e) => {
  console.log('Input blurred');
  e.target.parentElement.classList.remove('active');
  
  // Validate on blur
  if (e.target.value === '') {
    e.target.classList.add('error');
    showError('Field is required');
  }
});

// Use case: Password visibility toggle
const passwordInput = document.querySelector('#password');
passwordInput.addEventListener('focus', () => {
  document.querySelector('.toggle-btn').style.display = 'block';
});
passwordInput.addEventListener('blur', () => {
  document.querySelector('.toggle-btn').style.display = 'none';
});`}</pre>
            </div>

            {/* Submit Event */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">submit Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // ALWAYS prevent default!
  
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  console.log('Form data:', data);
  
  // Validate
  if (!data.email.includes('@')) {
    alert('Invalid email');
    return;
  }
  
  // Submit via AJAX
  fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    console.log('Success:', result);
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
  });
});`}</pre>
            </div>

            {/* Select & Reset */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">select & reset</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const select = document.querySelector('select');
const form = document.querySelector('form');

// Dropdown selection changed
select.addEventListener('change', (e) => {
  console.log('Selected:', e.target.value);
  
  const option = e.target.options[e.target.selectedIndex];
  console.log('Text:', option.text);
  console.log('Value:', option.value);
});

// Form reset button clicked
form.addEventListener('reset', (e) => {
  console.log('Form reset');
  
  // Can prevent reset
  if (!confirm('Clear all fields?')) {
    e.preventDefault();
  }
});

// Use case: Cascading dropdowns
const countrySelect = document.querySelector('#country');
const citySelect = document.querySelector('#city');

countrySelect.addEventListener('change', (e) => {
  const country = e.target.value;
  
  // Load cities for selected country
  fetch(\`/api/cities?country=\${country}\`)
    .then(res => res.json())
    .then(cities => {
      citySelect.innerHTML = cities.map(city => 
        \`<option value="\${city.id}">\${city.name}</option>\`
      ).join('');
    });
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Window & Document Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Monitor className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            4. Window & Document Events
          </CardTitle>
          <CardDescription className="text-base">
            Page lifecycle, scroll, and resize events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Load Events */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">DOMContentLoaded vs load</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// DOM ready (HTML parsed, faster!)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready!');
  console.log('Can access elements now');
  
  // Initialize app
  initializeApp();
  attachEventListeners();
});

// Everything loaded (images, CSS, scripts)
window.addEventListener('load', () => {
  console.log('Page fully loaded');
  console.log('All images loaded');
  
  // Hide loading spinner
  document.querySelector('.spinner').style.display = 'none';
});

// Use case: Progressive loading
document.addEventListener('DOMContentLoaded', () => {
  // Show content immediately
  document.querySelector('.content').style.display = 'block';
});

window.addEventListener('load', () => {
  // Load analytics after everything else
  loadAnalytics();
  loadAds();
});`}</pre>
            </div>

            {/* Scroll Events */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">scroll Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Scroll event (fires MANY times!)
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const scrollPercent = (scrollTop / 
    (document.body.scrollHeight - window.innerHeight)) * 100;
  
  console.log('Scrolled:', scrollPercent.toFixed(0) + '%');
});

// IMPORTANT: Debounce scroll events!
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    console.log('Scrolling stopped');
    checkScrollPosition();
  }, 150);
});

// Use case: Navbar hide on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll) {
    // Scrolling down - hide navbar
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up - show navbar
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});`}</pre>
            </div>

            {/* Resize Events */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">resize Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Window resized
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  console.log(\`Window: \${width}x\${height}\`);
});

// Debounce resize (performance!)
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    console.log('Resize complete');
    adjustLayout();
  }, 250);
});

// Use case: Responsive behavior
window.addEventListener('resize', () => {
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    sidebar.style.display = 'none';
    mobileMenu.style.display = 'block';
  } else {
    sidebar.style.display = 'block';
    mobileMenu.style.display = 'none';
  }
});

// Use case: Canvas resizing
const canvas = document.querySelector('canvas');
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  redraw();
});`}</pre>
            </div>

            {/* Before Unload */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">beforeunload Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// User leaving page (close tab/navigate away)
window.addEventListener('beforeunload', (e) => {
  // Check if unsaved changes
  if (hasUnsavedChanges()) {
    e.preventDefault();
    // Modern browsers show generic message
    e.returnValue = '';
    
    // Save to localStorage as backup
    localStorage.setItem('draft', JSON.stringify(formData));
  }
});

// Use case: Warn about unsaved changes
let isDirty = false;

form.addEventListener('input', () => {
  isDirty = true; // Mark as changed
});

form.addEventListener('submit', () => {
  isDirty = false; // Saved, no warning needed
});

window.addEventListener('beforeunload', (e) => {
  if (isDirty) {
    e.preventDefault();
    e.returnValue = ''; // Show warning dialog
  }
});

// Page visibility (tab switched)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Tab hidden - pause video');
    video.pause();
  } else {
    console.log('Tab visible - resume video');
    video.play();
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Touch & Drag Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Touchpad className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            5. Touch & Drag Events
          </CardTitle>
          <CardDescription className="text-base">
            Mobile touch interactions and drag-and-drop
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Touch Events */}
            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-3">Touch Events (Mobile)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const element = document.querySelector('.touchable');

// Touch started
element.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  console.log('Touch at:', touch.clientX, touch.clientY);
  console.log('Touches:', e.touches.length);
});

// Touch moved
element.addEventListener('touchmove', (e) => {
  e.preventDefault(); // Prevent scrolling
  const touch = e.touches[0];
  
  element.style.left = touch.clientX + 'px';
  element.style.top = touch.clientY + 'px';
});

// Touch ended
element.addEventListener('touchend', (e) => {
  console.log('Touch ended');
  console.log('Changed touches:', e.changedTouches.length);
});

// Use case: Swipe detection
let touchStartX = 0;
let touchEndX = 0;

element.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

element.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  
  if (diff > 50) {
    console.log('Swiped right');
    nextSlide();
  } else if (diff < -50) {
    console.log('Swiped left');
    prevSlide();
  }
}`}</pre>
            </div>

            {/* Drag Events */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Drag & Drop Events</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const draggable = document.querySelector('.draggable');
const dropzone = document.querySelector('.dropzone');

// Make element draggable
draggable.draggable = true;

// Drag started
draggable.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.effectAllowed = 'move';
  e.target.classList.add('dragging');
});

// Drag ended
draggable.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging');
});

// Drop zone events
dropzone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required!
  e.dataTransfer.dropEffect = 'move';
  dropzone.classList.add('drag-over');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('drag-over');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);
  
  dropzone.appendChild(element);
  dropzone.classList.remove('drag-over');
  console.log('Dropped:', id);
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clipboard Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Copy className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            6. Clipboard Events (Modern API)
          </CardTitle>
          <CardDescription className="text-base">
            Handle copy, cut, and paste operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Copy & Cut */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">copy & cut Events</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const textarea = document.querySelector('textarea');

// Copy event
textarea.addEventListener('copy', (e) => {
  const selection = window.getSelection().toString();
  console.log('Copied:', selection);
  
  // Modify copied text
  e.preventDefault();
  e.clipboardData.setData('text/plain', 
    selection + '\\n\\nSource: MyWebsite.com'
  );
});

// Cut event
textarea.addEventListener('cut', (e) => {
  console.log('Cut:', window.getSelection().toString());
  
  // Can prevent cut
  if (isProtected) {
    e.preventDefault();
    alert('Cutting is disabled');
  }
});

// Use case: Copy button
const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', async () => {
  const text = document.querySelector('#code').textContent;
  
  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard!');
    copyBtn.textContent = 'Copied! ✓';
  } catch (err) {
    console.error('Copy failed:', err);
  }
});`}</pre>
            </div>

            {/* Paste */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">paste Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Paste event
input.addEventListener('paste', (e) => {
  e.preventDefault(); // Block default paste
  
  const pastedText = e.clipboardData.getData('text/plain');
  console.log('Pasted:', pastedText);
  
  // Clean and insert
  const cleaned = pastedText.trim().toLowerCase();
  document.execCommand('insertText', false, cleaned);
});

// Use case: Image paste
const editor = document.querySelector('.editor');

editor.addEventListener('paste', (e) => {
  const items = e.clipboardData.items;
  
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      e.preventDefault();
      
      const file = item.getAsFile();
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        editor.appendChild(img);
      };
      
      reader.readAsDataURL(file);
    }
  }
});

// Modern Clipboard API
async function readClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Clipboard:', text);
  } catch (err) {
    console.error('Read failed:', err);
  }
}`}</pre>
            </div>
          </div>

          {/* Live Clipboard Demo */}
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Live Demo - Clipboard Events
            </h4>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText('Hello from CODER POD!');
                      addClipboardLog('Copied: Hello from CODER POD!');
                    } catch (err) {
                      addClipboardLog('Copy failed: ' + err.message);
                    }
                  }}
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy Text
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={async () => {
                    try {
                      const text = await navigator.clipboard.readText();
                      addClipboardLog('Pasted: ' + text);
                    } catch (err) {
                      addClipboardLog('Paste failed: ' + err.message);
                    }
                  }}
                >
                  <Scissors className="w-3 h-3 mr-1" />
                  Read Clipboard
                </Button>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border min-h-[80px]">
                <p className="font-semibold text-sm mb-2">Clipboard Log:</p>
                {clipboardLog.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Try the clipboard buttons...</p>
                ) : (
                  <div className="space-y-1">
                    {clipboardLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <Button size="sm" variant="outline" onClick={resetClipboardDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Professional patterns for handling different event types
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                ✅ Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use input for real-time, change for validation</li>
                <li>• Debounce scroll and resize events</li>
                <li>• Use passive: true for touch/scroll events</li>
                <li>• Prevent default on form submit</li>
                <li>• Check event.target in delegation</li>
                <li>• Use e.key instead of e.keyCode</li>
                <li>• Clean up listeners on component unmount</li>
                <li>• Use DOMContentLoaded for early init</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don't run heavy code in scroll handlers</li>
                <li>• Don't forget e.preventDefault() on forms</li>
                <li>• Don't use keyCode (deprecated)</li>
                <li>• Don't attach many scroll listeners</li>
                <li>• Don't forget to remove touch event listeners</li>
                <li>• Don't block default clipboard behavior unnecessarily</li>
                <li>• Don't ignore mobile touch events</li>
                <li>• Don't use beforeunload for tracking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Interactive Playground
          </CardTitle>
          <CardDescription className="text-base">
            Test all event types in a live environment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this comprehensive playground to experiment with mouse, keyboard, form, and window events in real-time!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Event Types Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

