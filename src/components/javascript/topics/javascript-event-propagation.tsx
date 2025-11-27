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
  ArrowDown,
  ArrowUp,
  Target,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  Zap,
  AlertTriangle
} from 'lucide-react';

interface EventPropagationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptEventPropagation({ onOpenWebPlayground }: EventPropagationProps) {
  // Demo states
  const [bubbleLog, setBubbleLog] = useState<string[]>([]);
  const [captureLog, setCaptureLog] = useState<string[]>([]);
  const [delegationItems, setDelegationItems] = useState(['Task 1', 'Task 2', 'Task 3']);

  const handleBubbleDemo = (element: string) => {
    setBubbleLog(prev => [...prev, `${element} (bubbling)`]);
  };

  const handleCaptureDemo = (element: string) => {
    setCaptureLog(prev => [...prev, `${element} (capturing)`]);
  };

  const resetBubbleDemo = () => setBubbleLog([]);
  const resetCaptureDemo = () => setCaptureLog([]);
  
  const addDelegationItem = () => {
    setDelegationItems(prev => [...prev, `Task ${prev.length + 1}`]);
  };
  
  const removeDelegationItem = (index: number) => {
    setDelegationItems(prev => prev.filter((_, i) => i !== index));
  };
  
  const resetDelegation = () => {
    setDelegationItems(['Task 1', 'Task 2', 'Task 3']);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Event Propagation Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>🎯 Event Propagation Explorer</h1>
    <p class="subtitle">See how events travel through the DOM</p>

    <section class="demo-section">
      <h2>Event Bubbling</h2>
      <div id="grandparent-bubble" class="box grandparent">
        Grandparent
        <div id="parent-bubble" class="box parent">
          Parent
          <div id="child-bubble" class="box child">
            Click Me!
          </div>
        </div>
      </div>
      <div id="bubble-log" class="log"></div>
    </section>

    <section class="demo-section">
      <h2>Event Capturing</h2>
      <div id="grandparent-capture" class="box grandparent">
        Grandparent
        <div id="parent-capture" class="box parent">
          Parent
          <div id="child-capture" class="box child">
            Click Me!
          </div>
        </div>
      </div>
      <div id="capture-log" class="log"></div>
    </section>

    <section class="demo-section">
      <h2>Stop Propagation</h2>
      <div id="stop-parent" class="box parent">
        Parent (will not receive event)
        <div id="stop-child" class="box child">
          Click Me (stops propagation)
        </div>
      </div>
      <div id="stop-log" class="log"></div>
    </section>
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
  max-width: 1000px;
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
  margin-bottom: 40px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  color: #334155;
  font-size: 20px;
  margin-bottom: 20px;
}

.box {
  padding: 24px;
  border: 3px solid;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  font-weight: 600;
}

.box:hover {
  transform: scale(1.02);
}

.grandparent {
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

.parent {
  margin: 16px;
  background: #dbeafe;
  border-color: #3b82f6;
  color: #1e3a8a;
}

.child {
  margin: 16px;
  background: #dcfce7;
  border-color: #10b981;
  color: #064e3b;
}

.log {
  margin-top: 16px;
  padding: 16px;
  background: #0f172a;
  border-radius: 8px;
  color: #22d3ee;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  min-height: 100px;
  max-height: 200px;
  overflow-y: auto;
}

.log-entry {
  margin: 4px 0;
  padding: 4px 8px;
  background: rgba(34, 211, 238, 0.1);
  border-left: 3px solid #22d3ee;
}`;

  const playgroundJs = `function log(element, message, color = '#22d3ee') {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.style.borderLeftColor = color;
  entry.textContent = message;
  element.appendChild(entry);
  element.scrollTop = element.scrollHeight;
}

// Bubbling Demo
const bubbleLog = document.getElementById('bubble-log');

document.getElementById('grandparent-bubble').addEventListener('click', () => {
  log(bubbleLog, '3. Grandparent clicked (bubbling)', '#f59e0b');
});

document.getElementById('parent-bubble').addEventListener('click', () => {
  log(bubbleLog, '2. Parent clicked (bubbling)', '#3b82f6');
});

document.getElementById('child-bubble').addEventListener('click', () => {
  log(bubbleLog, '1. Child clicked (bubbling)', '#10b981');
});

// Capturing Demo
const captureLog = document.getElementById('capture-log');

document.getElementById('grandparent-capture').addEventListener('click', () => {
  log(captureLog, '1. Grandparent clicked (capturing)', '#f59e0b');
}, true); // true = use capture phase

document.getElementById('parent-capture').addEventListener('click', () => {
  log(captureLog, '2. Parent clicked (capturing)', '#3b82f6');
}, true);

document.getElementById('child-capture').addEventListener('click', () => {
  log(captureLog, '3. Child clicked (target)', '#10b981');
});

// Stop Propagation Demo
const stopLog = document.getElementById('stop-log');

document.getElementById('stop-parent').addEventListener('click', () => {
  log(stopLog, 'Parent clicked - This will NOT show!', '#ef4444');
});

document.getElementById('stop-child').addEventListener('click', (e) => {
  e.stopPropagation();
  log(stopLog, 'Child clicked - Propagation STOPPED!', '#10b981');
  log(stopLog, 'Parent listener will not fire', '#64748b');
});

log(bubbleLog, '👆 Click the child element above', '#94a3b8');
log(captureLog, '👆 Click the child element above', '#94a3b8');
log(stopLog, '👆 Click the child element above', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Code2}
        category="10. Events"
        title="Event Propagation"
        description="Master event flow - understand bubbling, capturing, and how events travel through the DOM"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Event Propagation?
          </CardTitle>
          <CardDescription className="text-base">
            How events travel through the DOM tree in three phases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              When an event occurs on an element, it doesn&apos;t just stop there. The event <strong className="text-foreground">propagates</strong> (travels) through the DOM tree in a specific order. Understanding this flow is crucial for event handling and delegation.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML structure:
// <div id="grandparent">
//   <div id="parent">
//     <button id="child">Click</button>
//   </div>
// </div>

// Click on button triggers 3 phases:
// 1. Capturing: grandparent → parent → child
// 2. Target: child (the actual target)
// 3. Bubbling: child → parent → grandparent

document.getElementById('child').addEventListener('click', () => {
  console.log('Button clicked!');
});

// Event travels through ALL ancestors!`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <ArrowDown className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h3 className="font-semibold">1. Capturing Phase</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Event travels DOWN from window to target element
              </p>
              <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
                Rarely Used
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">2. Target Phase</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Event reaches the actual element that was clicked
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Main Phase
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <ArrowUp className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">3. Bubbling Phase</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Event travels UP from target back to window
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Most Common
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Bubbling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowUp className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. Event Bubbling (Default)
          </CardTitle>
          <CardDescription className="text-base">
            Events bubble UP from child to parent to grandparent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3">How Bubbling Works</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML:
// <div id="grandparent">
//   <div id="parent">
//     <button id="child">Click</button>
//   </div>
// </div>

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// All use default bubbling phase
grandparent.addEventListener('click', () => {
  console.log('3. Grandparent clicked');
});

parent.addEventListener('click', () => {
  console.log('2. Parent clicked');
});

child.addEventListener('click', () => {
  console.log('1. Child clicked');
});

// When you click the button, ALL THREE fire:
// Output:
// 1. Child clicked
// 2. Parent clicked
// 3. Grandparent clicked

// Event "bubbles up" through ancestors!`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3">Why Bubbling Matters</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Use case: Click outside to close dropdown
const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.dropdown-button');

button.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent bubbling!
  dropdown.classList.toggle('open');
});

// Listen on document (parent of everything)
document.addEventListener('click', () => {
  dropdown.classList.remove('open');
  // Closes dropdown when clicking outside
});

// Without stopPropagation():
// 1. Button click opens dropdown
// 2. Event bubbles to document
// 3. Document closes dropdown immediately
// 4. Dropdown never stays open!`}</pre>
          </div>

          {/* Live Bubbling Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - Event Bubbling
            </h4>
            <div className="space-y-4">
              <div 
                className="p-6 bg-amber-100 dark:bg-amber-900/30 rounded-lg border-2 border-amber-400 cursor-pointer"
                onClick={() => handleBubbleDemo('Grandparent')}
              >
                Grandparent
                <div 
                  className="mt-4 p-6 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-400"
                  onClick={() => handleBubbleDemo('Parent')}
                >
                  Parent
                  <div 
                    className="mt-4 p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border-2 border-emerald-400"
                    onClick={() => handleBubbleDemo('Child')}
                  >
                    Click Me!
                  </div>
                </div>
              </div>
              {bubbleLog.length > 0 && (
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p className="font-semibold text-sm mb-2">Event Log (order of execution):</p>
                  <div className="space-y-1">
                    {bubbleLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-blue-600 dark:text-blue-400">
                        {index + 1}. {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <Button size="sm" variant="outline" onClick={resetBubbleDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Key Point: Most Events Bubble</AlertTitle>
            <AlertDescription>
              Almost all events bubble up by default: <code className="text-xs">click</code>, <code className="text-xs">input</code>, <code className="text-xs">keydown</code>, etc. Exceptions: <code className="text-xs">focus</code>, <code className="text-xs">blur</code>, <code className="text-xs">mouseenter</code>, <code className="text-xs">mouseleave</code> do NOT bubble.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Event Capturing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowDown className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            2. Event Capturing (Rare)
          </CardTitle>
          <CardDescription className="text-base">
            Events capture DOWN from window to target (opt-in with third parameter)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3">How Capturing Works</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Same HTML structure as before

// Use third parameter: true = capture phase
grandparent.addEventListener('click', () => {
  console.log('1. Grandparent clicked (capturing)');
}, true); // ← true enables capturing

parent.addEventListener('click', () => {
  console.log('2. Parent clicked (capturing)');
}, true);

child.addEventListener('click', () => {
  console.log('3. Child clicked (target)');
}); // false or omitted = bubbling (default)

// When you click the button:
// Output:
// 1. Grandparent clicked (capturing) ⬇️
// 2. Parent clicked (capturing)       ⬇️
// 3. Child clicked (target)           🎯

// Event "captures down" from top to target!`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3">When to Use Capturing</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Rare use case: Intercept events BEFORE child
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

// Intercept ALL clicks on form (even on button)
form.addEventListener('click', (e) => {
  console.log('Form intercepted click!');
  
  if (isFormInvalid()) {
    e.stopPropagation(); // Stop before reaching button
    showError('Please fix errors first');
  }
}, true); // Capturing!

submitButton.addEventListener('click', () => {
  console.log('Button clicked (this may not fire)');
});

// Use case: Global event logging
document.addEventListener('click', (e) => {
  analytics.log('click', e.target);
}, true); // Log ALL clicks before handlers run`}</pre>
          </div>

          {/* Live Capturing Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Event Capturing
            </h4>
            <div className="space-y-4">
              <div 
                className="p-6 bg-amber-100 dark:bg-amber-900/30 rounded-lg border-2 border-amber-400 cursor-pointer"
                onClickCapture={() => handleCaptureDemo('Grandparent')}
              >
                Grandparent
                <div 
                  className="mt-4 p-6 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-400"
                  onClickCapture={() => handleCaptureDemo('Parent')}
                >
                  Parent
                  <div 
                    className="mt-4 p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border-2 border-emerald-400"
                    onClick={() => handleCaptureDemo('Child')}
                  >
                    Click Me!
                  </div>
                </div>
              </div>
              {captureLog.length > 0 && (
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p className="font-semibold text-sm mb-2">Event Log (capturing order):</p>
                  <div className="space-y-1">
                    {captureLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-amber-600 dark:text-amber-400">
                        {index + 1}. {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <Button size="sm" variant="outline" onClick={resetCaptureDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Stick to Bubbling</AlertTitle>
            <AlertDescription>
              99% of the time, you&apos;ll use the default bubbling phase. Capturing is only needed for special cases like global event interception or delegation frameworks.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Event Delegation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. Event Delegation (Powerful Pattern)
          </CardTitle>
          <CardDescription className="text-base">
            Use bubbling to handle events on multiple children with ONE listener
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3">What is Event Delegation?</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ BAD: Add listener to each item (memory intensive)
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log('Clicked:', e.target.textContent);
  });
});
// Problem: 100 items = 100 listeners!
// Problem: Doesn't work for dynamically added items

// ✅ GOOD: Event delegation (ONE listener on parent)
const list = document.getElementById('list');
list.addEventListener('click', (e) => {
  // Check if clicked element matches
  if (e.target.matches('.item')) {
    console.log('Clicked:', e.target.textContent);
  }
});
// Benefit: 100 items = 1 listener!
// Benefit: Works for items added later!`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">How It Works</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML:
// <ul id="todo-list">
//   <li class="task">Task 1 <button>×</button></li>
//   <li class="task">Task 2 <button>×</button></li>
// </ul>

const list = document.getElementById('todo-list');

// ONE listener handles all tasks
list.addEventListener('click', (e) => {
  // e.target = what was actually clicked
  // e.currentTarget = list (where listener is)
  
  if (e.target.tagName === 'BUTTON') {
    const task = e.target.closest('.task');
    task.remove();
    console.log('Task removed!');
  }
});

// Add new task dynamically
const newTask = document.createElement('li');
newTask.className = 'task';
newTask.innerHTML = 'Task 3 <button>×</button>';
list.appendChild(newTask);
// Automatically works! No new listener needed`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Real-World Use Cases</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Table rows
table.addEventListener('click', (e) => {
  const row = e.target.closest('tr');
  if (row) selectRow(row);
});

// Dynamic buttons (e-commerce)
productGrid.addEventListener('click', (e) => {
  if (e.target.matches('.add-to-cart')) {
    const id = e.target.dataset.productId;
    addToCart(id);
  }
});

// Form inputs
form.addEventListener('input', (e) => {
  if (e.target.matches('input[type="text"]')) {
    validateInput(e.target);
  }
});

// Navigation menu
nav.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    smoothScrollTo(e.target.hash);
  }
});`}</pre>
            </div>
          </div>

          {/* Live Delegation Demo */}
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Live Demo - Event Delegation
            </h4>
            <div className="space-y-4">
              <div 
                className="space-y-2"
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.tagName === 'BUTTON' && target.dataset.index) {
                    removeDelegationItem(parseInt(target.dataset.index));
                  }
                }}
              >
                {delegationItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded border hover:border-purple-400 transition-colors"
                  >
                    <span className="font-mono text-sm">{item}</span>
                    <button
                      data-index={index}
                      className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={addDelegationItem}>
                  Add Task
                </Button>
                <Button size="sm" variant="outline" onClick={resetDelegation}>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                💡 Only ONE click listener on the parent handles all delete buttons!
              </p>
            </div>
          </div>

          <Alert>
            <Zap className="h-4 w-4" />
            <AlertTitle>Performance Tip: Use Delegation</AlertTitle>
            <AlertDescription>
              Event delegation is a must-know pattern. It reduces memory usage, works with dynamic content, and is the foundation of modern frameworks like React and Vue.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Stop Propagation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <XCircle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            4. Stopping Propagation
          </CardTitle>
          <CardDescription className="text-base">
            Control event flow with stopPropagation() and stopImmediatePropagation()
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">stopPropagation()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Prevents event from bubbling up
child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked');
  // Parent listeners won't fire
});

parent.addEventListener('click', () => {
  console.log('Parent clicked');
  // This won't run
});

// Use case: Modal backdrop
modal.addEventListener('click', (e) => {
  e.stopPropagation();
  // Clicking modal content doesn't close it
});

backdrop.addEventListener('click', () => {
  closeModal();
  // Only runs when clicking outside modal
});`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3">stopImmediatePropagation()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// More aggressive: stops ALL listeners
button.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('First listener');
  // Even other listeners on same element stop
});

button.addEventListener('click', () => {
  console.log('Second listener');
  // This won't run!
});

button.addEventListener('click', () => {
  console.log('Third listener');
  // This won't run either!
});

// Only first listener executes
// Parent listeners also don't fire`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">When to Use</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ✅ Good use: Close dropdown
dropdown.addEventListener('click', (e) => {
  e.stopPropagation();
  // Keep dropdown open when clicking inside
});

document.addEventListener('click', () => {
  closeDropdown(); // Close when clicking outside
});

// ✅ Good use: Nested clickable areas
card.addEventListener('click', () => {
  navigateToPage();
});

deleteButton.addEventListener('click', (e) => {
  e.stopPropagation();
  deleteCard(); // Don't navigate!
});`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">When to Avoid</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ Don't overuse stopPropagation
// It breaks event delegation patterns
list.addEventListener('click', (e) => {
  e.stopPropagation(); // Bad!
  // Other parts of app can't detect clicks
});

// ❌ Don't use in reusable components
// It breaks parent components
component.addEventListener('click', (e) => {
  e.stopPropagation(); // Bad!
  // Parent can't handle component events
});

// ✅ Better: Check e.target instead
list.addEventListener('click', (e) => {
  if (e.target.matches('.specific-item')) {
    // Handle specific clicks
  }
});`}</pre>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning: Use Sparingly</AlertTitle>
            <AlertDescription>
              <code className="text-xs">stopPropagation()</code> can break event delegation and make debugging hard. Only use it when you have a specific reason, like preventing modal close or nested clickable areas.
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
            Practical patterns using event propagation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Dropdown Menu
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown-menu');

// Toggle dropdown
dropdown.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('open');
});

// Keep open when clicking menu items
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close when clicking anywhere else
document.addEventListener('click', () => {
  menu.classList.remove('open');
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menu.classList.remove('open');
  }
});`}</pre>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Dynamic Table Actions
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const table = document.getElementById('data-table');

// One listener handles all actions
table.addEventListener('click', (e) => {
  const target = e.target;
  const row = target.closest('tr');
  
  if (!row) return;
  
  const id = row.dataset.id;
  
  // Edit button
  if (target.matches('.edit-btn')) {
    editRecord(id);
  }
  
  // Delete button
  if (target.matches('.delete-btn')) {
    if (confirm('Delete?')) {
      deleteRecord(id);
      row.remove();
    }
  }
  
  // Row click (but not buttons)
  if (target === row) {
    selectRow(row);
  }
});`}</pre>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Modal Dialog
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.modal-backdrop');
const closeBtn = document.querySelector('.modal-close');

function openModal() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

// Prevent modal close when clicking inside
modal.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close when clicking backdrop
backdrop.addEventListener('click', closeModal);

// Close button
closeBtn.addEventListener('click', closeModal);

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});`}</pre>
            </div>

            {/* Example 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Form Validation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('form');

// Delegate to all inputs
form.addEventListener('input', (e) => {
  const input = e.target;
  
  if (input.matches('[required]')) {
    validateRequired(input);
  }
  
  if (input.matches('[type="email"]')) {
    validateEmail(input);
  }
  
  if (input.matches('[minlength]')) {
    validateLength(input);
  }
});

// Submit with validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isValid = validateAllFields();
  
  if (isValid) {
    submitForm();
  } else {
    showErrors();
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
            Master event propagation patterns
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
                <li>• Use event delegation for dynamic content</li>
                <li>• Use <code className="text-xs">e.target.matches()</code> to check elements</li>
                <li>• Use <code className="text-xs">e.target.closest()</code> for parent elements</li>
                <li>• Stop propagation only when necessary</li>
                <li>• Use capturing for global event interception</li>
                <li>• Check <code className="text-xs">e.target !== e.currentTarget</code></li>
                <li>• Attach listeners to parent, not children</li>
                <li>• Remember: most events bubble by default</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t add listeners to 100+ elements individually</li>
                <li>• Don&apos;t overuse <code className="text-xs">stopPropagation()</code></li>
                <li>• Don&apos;t assume all events bubble (focus, blur don&apos;t)</li>
                <li>• Don&apos;t forget to remove listeners (memory leaks)</li>
                <li>• Don&apos;t use capturing unless you need it</li>
                <li>• Don&apos;t ignore <code className="text-xs">e.target</code> vs <code className="text-xs">e.currentTarget</code></li>
                <li>• Don&apos;t break event delegation in components</li>
                <li>• Don&apos;t attach listeners inside loops</li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3">Event Propagation Flow Chart</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Phase 1</Badge>
                <ArrowDown className="w-4 h-4 text-amber-600" />
                <span><strong>Capturing:</strong> window → document → html → body → ... → parent</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Phase 2</Badge>
                <Target className="w-4 h-4 text-emerald-600" />
                <span><strong>Target:</strong> The actual element clicked</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Phase 3</Badge>
                <ArrowUp className="w-4 h-4 text-blue-600" />
                <span><strong>Bubbling:</strong> parent → ... → body → html → document → window</span>
              </div>
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
            Explore event propagation phases in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this playground to visualize event propagation phases. See how events bubble up, capture down, and how to stop propagation!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Event Propagation Explorer
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
