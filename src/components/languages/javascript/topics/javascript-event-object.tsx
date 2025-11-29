'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Code2,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Target,
  MousePointer,
  Keyboard,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  AlertTriangle
} from 'lucide-react';

interface EventObjectProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptEventObject({ onOpenWebPlayground }: EventObjectProps) {
  // Demo states
  const [eventInfo, setEventInfo] = useState<any>(null);
  const [clickLog, setClickLog] = useState<string[]>([]);

  const handleDemoClick = (e: React.MouseEvent) => {
    setEventInfo({
      type: e.type,
      target: e.target instanceof HTMLElement ? e.target.tagName : '',
      currentTarget: e.currentTarget instanceof HTMLElement ? e.currentTarget.tagName : '',
      clientX: e.clientX,
      clientY: e.clientY,
      pageX: e.pageX,
      pageY: e.pageY,
      button: e.button,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      timeStamp: Math.round(e.timeStamp)
    });
    setClickLog(prev => [...prev.slice(-2), `Click at (${e.clientX}, ${e.clientY})`]);
  };

  const resetDemo = () => {
    setEventInfo(null);
    setClickLog([]);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Event Object Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>🎯 Event Object Explorer</h1>
    <p class="subtitle">Click, type, and interact to see event properties</p>

    <section class="demo-section">
      <h2>Click Anywhere</h2>
      <div id="click-area" class="interactive-area">
        Click, right-click, or double-click me!
      </div>
      <div id="event-details" class="details"></div>
    </section>

    <section class="demo-section">
      <h2>Keyboard Input</h2>
      <input type="text" id="key-input" placeholder="Type to see key properties..." />
      <div id="key-details" class="details"></div>
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
  padding: 64px;
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

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

.details {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  min-height: 120px;
}

.property {
  margin: 4px 0;
  padding: 4px 8px;
  background: #f8fafc;
  border-left: 3px solid #3b82f6;
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
}`;

  const playgroundJs = `const consoleLog = document.getElementById('console-log');
const clickArea = document.getElementById('click-area');
const eventDetails = document.getElementById('event-details');
const keyInput = document.getElementById('key-input');
const keyDetails = document.getElementById('key-details');

function log(message, color = '#94a3b8') {
  const entry = document.createElement('div');
  entry.style.color = color;
  entry.textContent = '> ' + message;
  consoleLog.appendChild(entry);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

function showProperty(label, value) {
  return \`<div class="property"><strong>\${label}:</strong> \${value}</div>\`;
}

// Click events
clickArea.addEventListener('click', (e) => {
  let html = '<h4 style="margin-bottom: 8px; color: #3b82f6;">Click Event Properties</h4>';
  html += showProperty('type', e.type);
  html += showProperty('target', e.target.tagName);
  html += showProperty('currentTarget', e.currentTarget.tagName);
  html += showProperty('clientX', e.clientX);
  html += showProperty('clientY', e.clientY);
  html += showProperty('pageX', e.pageX);
  html += showProperty('pageY', e.pageY);
  html += showProperty('offsetX', e.offsetX);
  html += showProperty('offsetY', e.offsetY);
  html += showProperty('button', e.button + ' (0=left, 1=middle, 2=right)');
  html += showProperty('ctrlKey', e.ctrlKey);
  html += showProperty('shiftKey', e.shiftKey);
  html += showProperty('altKey', e.altKey);
  html += showProperty('timeStamp', Math.round(e.timeStamp) + 'ms');
  
  eventDetails.innerHTML = html;
  log(\`Click at (\${e.clientX}, \${e.clientY})\`, '#10b981');
});

clickArea.addEventListener('dblclick', (e) => {
  log('Double-click detected!', '#8b5cf6');
});

clickArea.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  log('Right-click detected (prevented default)', '#f59e0b');
});

// Keyboard events
keyInput.addEventListener('keydown', (e) => {
  let html = '<h4 style="margin-bottom: 8px; color: #8b5cf6;">Keyboard Event Properties</h4>';
  html += showProperty('type', e.type);
  html += showProperty('key', e.key);
  html += showProperty('code', e.code);
  html += showProperty('keyCode', e.keyCode + ' (deprecated)');
  html += showProperty('which', e.which + ' (deprecated)');
  html += showProperty('ctrlKey', e.ctrlKey);
  html += showProperty('shiftKey', e.shiftKey);
  html += showProperty('altKey', e.altKey);
  html += showProperty('metaKey', e.metaKey + ' (Cmd/Win)');
  html += showProperty('repeat', e.repeat);
  html += showProperty('target.value', e.target.value);
  
  keyDetails.innerHTML = html;
  log(\`Key pressed: \${e.key}\`, '#a855f7');
});

log('🎯 Event Object Explorer Ready!', '#22d3ee');
log('Interact with elements to see event properties', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Code2}
        category="10. Events"
        title="Event Object"
        description="Master the event object - access detailed information about every user interaction"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is the Event Object?
          </CardTitle>
          <CardDescription className="text-base">
            Every event handler receives an object with powerful information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              When an event fires, JavaScript automatically creates an <strong className="text-foreground">Event object</strong> containing detailed information about what happened. This object is passed as the first parameter to your event handler function.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// The event object is automatically passed
element.addEventListener('click', (event) => {
  console.log(event.type);        // 'click'
  console.log(event.target);      // Element clicked
  console.log(event.clientX);     // Mouse X position
  console.log(event.timeStamp);   // When it happened
  
  // Access ALL properties of the event!
});

// Common parameter names:
// e, evt, event - all work the same!
element.addEventListener('click', (e) => {
  // Use 'e' for short
});`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">Properties</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Read-only data about the event (type, target, coordinates)
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                20+ Properties
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">Methods</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Functions to control event behavior
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                preventDefault(), etc.
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
                <h3 className="font-semibold">Event Types</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Different events have different properties
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
                MouseEvent, KeyboardEvent
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Info className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. Common Event Properties
          </CardTitle>
          <CardDescription className="text-base">
            Properties available on ALL event types
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* type & target */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">type & target</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`button.addEventListener('click', (e) => {
  // What event occurred?
  console.log(e.type);
  // Output: "click"
  
  // Which element triggered it?
  console.log(e.target);
  // Output: <button>...</button>
  
  console.log(e.target.id);        // Element ID
  console.log(e.target.className); // CSS classes
  console.log(e.target.textContent); // Text inside
});

// Use case: Get clicked item's data
list.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    const id = e.target.dataset.id;
    console.log('Clicked item:', id);
  }
});`}</pre>
            </div>

            {/* currentTarget */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">target vs currentTarget</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <div id="parent">
//          <button id="child">Click</button>
//        </div>

const parent = document.getElementById('parent');

parent.addEventListener('click', (e) => {
  console.log('target:', e.target.id);
  // Output: "child" (what was clicked)
  
  console.log('currentTarget:', e.currentTarget.id);
  // Output: "parent" (where listener is)
  
  // this === e.currentTarget (usually)
  console.log(this === e.currentTarget);
  // Output: true
});

// Key difference:
// target      = element that triggered event
// currentTarget = element with addEventListener`}</pre>
            </div>

            {/* timeStamp & isTrusted */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">timeStamp & isTrusted</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`button.addEventListener('click', (e) => {
  // When did event occur? (milliseconds)
  console.log(e.timeStamp);
  // Output: 1234.567
  
  // Was it a real user action?
  console.log(e.isTrusted);
  // Output: true (user clicked)
  //         false (script triggered)
  
  // Measure time between clicks
  if (lastClickTime) {
    const diff = e.timeStamp - lastClickTime;
    console.log('Time between clicks:', diff);
  }
  lastClickTime = e.timeStamp;
});

// Use case: Detect automated bots
form.addEventListener('submit', (e) => {
  if (!e.isTrusted) {
    console.log('Bot detected!');
    e.preventDefault();
  }
});`}</pre>
            </div>

            {/* bubbles & cancelable */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">bubbles & cancelable</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`element.addEventListener('click', (e) => {
  // Does event bubble up?
  console.log(e.bubbles);
  // Output: true (most events bubble)
  
  // Can preventDefault() work?
  console.log(e.cancelable);
  // Output: true (can be prevented)
  
  // Was preventDefault() called?
  console.log(e.defaultPrevented);
  // Output: false initially, true after calling
});

// Events that don't bubble:
// focus, blur, load, unload, mouseenter, mouseleave

// Events that aren't cancelable:
// Most of them can't be prevented after they occur

link.addEventListener('click', (e) => {
  if (e.cancelable) {
    e.preventDefault(); // Only if cancelable
  }
});`}</pre>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Console.log the Event</AlertTitle>
            <AlertDescription>
              Use <code className="text-xs">console.log(e)</code> in your event handler to see ALL available properties. Different event types have different properties!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Mouse Event Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <MousePointer className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            2. Mouse Event Properties
          </CardTitle>
          <CardDescription className="text-base">
            Properties specific to mouse events (click, mousemove, etc.)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Coordinates */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Mouse Coordinates</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`element.addEventListener('click', (e) => {
  // Relative to viewport (visible area)
  console.log('clientX:', e.clientX);
  console.log('clientY:', e.clientY);
  
  // Relative to entire page (includes scroll)
  console.log('pageX:', e.pageX);
  console.log('pageY:', e.pageY);
  
  // Relative to element itself
  console.log('offsetX:', e.offsetX);
  console.log('offsetY:', e.offsetY);
  
  // Relative to screen
  console.log('screenX:', e.screenX);
  console.log('screenY:', e.screenY);
});

// Use case: Custom tooltip
document.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 10 + 'px';
  tooltip.style.top = e.pageY + 10 + 'px';
});`}</pre>
            </div>

            {/* Mouse Buttons */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Mouse Buttons & Modifiers</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`element.addEventListener('mousedown', (e) => {
  // Which button was pressed?
  console.log('button:', e.button);
  // 0 = left button
  // 1 = middle button (wheel)
  // 2 = right button
  
  // Which buttons are currently pressed?
  console.log('buttons:', e.buttons);
  // Bitmask: 1=left, 2=right, 4=middle
  
  // Modifier keys pressed?
  console.log('ctrlKey:', e.ctrlKey);   // Ctrl
  console.log('shiftKey:', e.shiftKey); // Shift
  console.log('altKey:', e.altKey);     // Alt
  console.log('metaKey:', e.metaKey);   // Cmd/Win
});

// Use case: Different actions per button
canvas.addEventListener('mousedown', (e) => {
  if (e.button === 0) {
    startDrawing();
  } else if (e.button === 2) {
    e.preventDefault();
    openContextMenu();
  }
});`}</pre>
            </div>

            {/* Movement */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Movement & Relation</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`element.addEventListener('mousemove', (e) => {
  // Movement since last event
  console.log('movementX:', e.movementX);
  console.log('movementY:', e.movementY);
  
  // Related target (for mouseenter/leave)
  console.log('relatedTarget:', e.relatedTarget);
  // Where mouse came from/went to
});

// Use case: Track mouse speed
let lastX = 0, lastY = 0;
document.addEventListener('mousemove', (e) => {
  const speedX = Math.abs(e.clientX - lastX);
  const speedY = Math.abs(e.clientY - lastY);
  const speed = Math.sqrt(speedX**2 + speedY**2);
  
  console.log('Mouse speed:', speed);
  lastX = e.clientX;
  lastY = e.clientY;
});

// Use case: FPS camera controls
canvas.addEventListener('mousemove', (e) => {
  camera.rotateX(e.movementY * 0.01);
  camera.rotateY(e.movementX * 0.01);
});`}</pre>
            </div>

            {/* Real-world example */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Real Example: Drag Element</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const draggable = document.querySelector('.draggable');
let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  
  // Store offset from element's top-left
  const rect = draggable.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  
  draggable.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  // Move element to follow mouse
  draggable.style.left = (e.pageX - offsetX) + 'px';
  draggable.style.top = (e.pageY - offsetY) + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggable.style.cursor = 'grab';
});`}</pre>
            </div>
          </div>

          {/* Live Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - Mouse Event Properties
            </h4>
            <div className="space-y-4">
              <div 
                className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg cursor-pointer text-white text-center font-semibold"
                onClick={handleDemoClick}
              >
                Click me to see event properties!
              </div>
              {eventInfo && (
                <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                  <h5 className="font-semibold text-sm mb-3">Event Object Properties:</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div><strong>type:</strong> {eventInfo.type}</div>
                    <div><strong>target:</strong> {eventInfo.target}</div>
                    <div><strong>currentTarget:</strong> {eventInfo.currentTarget}</div>
                    <div><strong>clientX:</strong> {eventInfo.clientX}</div>
                    <div><strong>clientY:</strong> {eventInfo.clientY}</div>
                    <div><strong>pageX:</strong> {eventInfo.pageX}</div>
                    <div><strong>pageY:</strong> {eventInfo.pageY}</div>
                    <div><strong>button:</strong> {eventInfo.button}</div>
                    <div><strong>ctrlKey:</strong> {String(eventInfo.ctrlKey)}</div>
                    <div><strong>shiftKey:</strong> {String(eventInfo.shiftKey)}</div>
                    <div><strong>altKey:</strong> {String(eventInfo.altKey)}</div>
                    <div><strong>timeStamp:</strong> {eventInfo.timeStamp}ms</div>
                  </div>
                </div>
              )}
              {clickLog.length > 0 && (
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p className="font-semibold text-sm mb-2">Click Log:</p>
                  <div className="space-y-1">
                    {clickLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-purple-600 dark:text-purple-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <Button size="sm" variant="outline" onClick={resetDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Keyboard Event Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Keyboard className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            3. Keyboard Event Properties
          </CardTitle>
          <CardDescription className="text-base">
            Properties specific to keyboard events (keydown, keyup, keypress)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* key & code */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">key & code</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`input.addEventListener('keydown', (e) => {
  // What character/key? (layout-aware)
  console.log('key:', e.key);
  // Output: 'a', 'A', 'Enter', 'Escape', 'ArrowUp'
  
  // Physical key location (layout-independent)
  console.log('code:', e.code);
  // Output: 'KeyA', 'Enter', 'Escape', 'ArrowUp'
  
  // Modifiers
  console.log('ctrlKey:', e.ctrlKey);
  console.log('shiftKey:', e.shiftKey);
  console.log('altKey:', e.altKey);
  console.log('metaKey:', e.metaKey); // Cmd/Win
  
  // Is key being held?
  console.log('repeat:', e.repeat);
  // Output: false (first press), true (held down)
});

// Use key for character-based logic
if (e.key === 'Enter') {
  submitForm();
}

// Use code for position-based (gaming)
if (e.code === 'Space') {
  jump();
}`}</pre>
            </div>

            {/* Deprecated properties */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">⚠️ Deprecated: keyCode & which</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`input.addEventListener('keydown', (e) => {
  // ❌ DON'T USE (deprecated!)
  console.log('keyCode:', e.keyCode);  // 65 for 'A'
  console.log('which:', e.which);      // 65 for 'A'
  console.log('charCode:', e.charCode); // deprecated
  
  // ✅ USE INSTEAD
  console.log('key:', e.key);    // 'a' or 'A'
  console.log('code:', e.code);  // 'KeyA'
});

// Old way (don't do this!)
if (e.keyCode === 13) {  // 13 = Enter
  // Bad!
}

// Modern way
if (e.key === 'Enter') {
  // Good!
}

// Why avoid keyCode?
// • Different for different keyboard layouts
// • Hard to remember numbers
// • Officially deprecated
// • Browser support being removed`}</pre>
            </div>

            {/* Keyboard shortcuts */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Detecting Keyboard Shortcuts</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + S (Save)
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveDocument();
    console.log('Saved!');
  }
  
  // Ctrl/Cmd + Shift + K (Search)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  
  // Alt + Arrow keys (Navigate)
  if (e.altKey && e.key === 'ArrowLeft') {
    e.preventDefault();
    navigateBack();
  }
  
  // Check multiple modifiers
  const isMac = navigator.platform.includes('Mac');
  const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
  
  if (cmdOrCtrl && e.key === 'z') {
    e.preventDefault();
    undo();
  }
});`}</pre>
            </div>

            {/* Input value */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Accessing Input Value</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  // Current input value (before key)
  console.log('Before:', e.target.value);
  
  // The key being pressed
  console.log('Key:', e.key);
  
  // Get value AFTER key is processed
  setTimeout(() => {
    console.log('After:', e.target.value);
  }, 0);
});

// Use 'input' event for final value
input.addEventListener('input', (e) => {
  console.log('Current value:', e.target.value);
  console.log('Length:', e.target.value.length);
});

// Use case: Character limit
input.addEventListener('keydown', (e) => {
  if (e.target.value.length >= 100 && e.key !== 'Backspace') {
    e.preventDefault();
    console.log('Max length reached!');
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            4. Event Object Methods
          </CardTitle>
          <CardDescription className="text-base">
            Methods to control event behavior
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* preventDefault */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">preventDefault()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Stop default browser behavior
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Don't reload page
  
  // Check if already prevented
  console.log(e.defaultPrevented); // true
  
  // Handle form with AJAX
  submitWithAjax();
});

// Common uses:
link.addEventListener('click', (e) => {
  e.preventDefault(); // Don't navigate
  handleLinkClick();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Don't submit
    goToNextField();
  }
});

// Prevent context menu
element.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  showCustomMenu();
});

// Can't prevent if not cancelable
element.addEventListener('scroll', (e) => {
  e.preventDefault(); // Won't work!
  console.log(e.cancelable); // false
});`}</pre>
            </div>

            {/* stopPropagation */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">stopPropagation()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Stop event from bubbling up
child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked');
  // Parent listeners won't fire
});

parent.addEventListener('click', () => {
  console.log('Parent clicked');
  // This won't run if child stops propagation
});

// Use case: Modal/dropdown
modal.addEventListener('click', (e) => {
  e.stopPropagation();
  // Clicking modal won't close it
});

document.addEventListener('click', () => {
  closeModal(); // Close if clicked outside
});

// stopImmediatePropagation() - more aggressive
button.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('First listener');
  // Even other listeners on same element won't run
});

button.addEventListener('click', () => {
  console.log('Second listener'); // Won't run
});`}</pre>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important: preventDefault vs stopPropagation</AlertTitle>
            <AlertDescription>
              <code className="text-xs">preventDefault()</code> stops the browser's default action (like form submit). <code className="text-xs">stopPropagation()</code> stops the event from bubbling to parent elements. They do different things!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns using event object properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Form Validation on Submit
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('#signupForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Don't submit yet
  
  // Get form data from event
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  console.log('Form data:', data);
  
  // Validate
  const errors = [];
  if (!data.email.includes('@')) {
    errors.push('Invalid email');
  }
  if (data.password.length < 8) {
    errors.push('Password too short');
  }
  
  if (errors.length > 0) {
    showErrors(errors);
    return;
  }
  
  // Submit via AJAX
  fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    console.log('Success:', result);
    e.target.reset(); // Reset form
  });
});`}</pre>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Detect Click Location
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const image = document.querySelector('img');

image.addEventListener('click', (e) => {
  // Get click position relative to image
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Calculate percentage
  const percentX = (x / rect.width) * 100;
  const percentY = (y / rect.height) * 100;
  
  console.log(\`Clicked at \${percentX.toFixed(0)}%, \${percentY.toFixed(0)}%\`);
  
  // Use case: Image hotspots
  if (percentX > 40 && percentX < 60 && percentY > 30 && percentY < 50) {
    console.log('Clicked on hotspot!');
    showInfo();
  }
});

// Use case: Custom context menu
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  
  // Position menu at click location
  contextMenu.style.left = e.pageX + 'px';
  contextMenu.style.top = e.pageY + 'px';
  contextMenu.style.display = 'block';
});`}</pre>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Detect Double-Click Speed
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`let lastClickTime = 0;
let clickCount = 0;

button.addEventListener('click', (e) => {
  const currentTime = e.timeStamp;
  const timeSinceLastClick = currentTime - lastClickTime;
  
  if (timeSinceLastClick < 300) {
    clickCount++;
    console.log(\`Click #\${clickCount} (\${timeSinceLastClick.toFixed(0)}ms apart)\`);
    
    if (clickCount >= 3) {
      console.log('Triple-click detected!');
      selectParagraph();
      clickCount = 0;
    }
  } else {
    clickCount = 1;
    console.log('Single click');
  }
  
  lastClickTime = currentTime;
});

// Use case: Easter egg (secret combo)
const secretSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];
const userSequence = [];

document.addEventListener('keydown', (e) => {
  userSequence.push(e.key);
  if (userSequence.length > secretSequence.length) {
    userSequence.shift();
  }
  
  if (JSON.stringify(userSequence) === JSON.stringify(secretSequence)) {
    console.log('Secret unlocked! 🎉');
    showEasterEgg();
  }
});`}</pre>
            </div>

            {/* Example 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Prevent Accidental Navigation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`let hasUnsavedChanges = false;

// Track changes
form.addEventListener('input', (e) => {
  hasUnsavedChanges = true;
  console.log('Form modified:', e.target.name);
});

// Prevent accidental leave
window.addEventListener('beforeunload', (e) => {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = ''; // Show browser dialog
    
    // Save to localStorage as backup
    const formData = new FormData(form);
    localStorage.setItem('draft', JSON.stringify(
      Object.fromEntries(formData)
    ));
  }
});

// Clear flag on successful save
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  saveData().then(() => {
    hasUnsavedChanges = false;
    console.log('Saved! Can navigate safely');
  });
});

// Detect if event is trusted (real user)
document.addEventListener('click', (e) => {
  if (!e.isTrusted) {
    console.log('Automated click detected!');
    // Might be a bot or script
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Professional patterns for using the event object
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
                <li>• Use <code className="text-xs">e.target</code> to identify what was clicked</li>
                <li>• Call <code className="text-xs">preventDefault()</code> on form submit</li>
                <li>• Use <code className="text-xs">e.key</code> instead of <code className="text-xs">e.keyCode</code></li>
                <li>• Check <code className="text-xs">e.isTrusted</code> for security</li>
                <li>• Use <code className="text-xs">e.timeStamp</code> for timing measurements</li>
                <li>• Console.log the event to explore properties</li>
                <li>• Store event data if needed later</li>
                <li>• Use <code className="text-xs">e.currentTarget</code> for delegation</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don't use deprecated <code className="text-xs">keyCode</code> or <code className="text-xs">which</code></li>
                <li>• Don't call <code className="text-xs">stopPropagation()</code> unnecessarily</li>
                <li>• Don't forget to check <code className="text-xs">e.cancelable</code></li>
                <li>• Don't modify the event object</li>
                <li>• Don't assume event properties exist</li>
                <li>• Don't use <code className="text-xs">this</code> with arrow functions</li>
                <li>• Don't store the entire event object (memory leak)</li>
                <li>• Don't ignore browser compatibility</li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3">Event Object Quick Reference</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Property</th>
                    <th className="text-left p-2 font-semibold">Type</th>
                    <th className="text-left p-2 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">type</code></td>
                    <td className="p-2">String</td>
                    <td className="p-2">Event name ('click', 'keydown')</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">target</code></td>
                    <td className="p-2">Element</td>
                    <td className="p-2">Element that triggered event</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">currentTarget</code></td>
                    <td className="p-2">Element</td>
                    <td className="p-2">Element with listener attached</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">clientX/Y</code></td>
                    <td className="p-2">Number</td>
                    <td className="p-2">Mouse position (viewport)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">key</code></td>
                    <td className="p-2">String</td>
                    <td className="p-2">Key pressed ('a', 'Enter')</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">timeStamp</code></td>
                    <td className="p-2">Number</td>
                    <td className="p-2">When event occurred (ms)</td>
                  </tr>
                  <tr>
                    <td className="p-2"><code className="text-xs">isTrusted</code></td>
                    <td className="p-2">Boolean</td>
                    <td className="p-2">Real user action vs script</td>
                  </tr>
                </tbody>
              </table>
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
            Explore event object properties in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this playground to see all event object properties for mouse and keyboard events. Click, type, and interact to explore!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Event Object Explorer
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
