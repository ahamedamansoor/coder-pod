'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Zap,
  Sparkles,
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  MousePointer,
  Keyboard,
  FileText,
  Layers,
  Target,
  Globe,
  AlertTriangle,
  RefreshCw,
  PlayCircle,
  TrendingDown,
  TrendingUp,
  ToggleLeft,
  Trash2,
  ShieldOff,
  Clock,
  Repeat,
  Settings
} from 'lucide-react';

interface EventsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptEvents({ onOpenWebPlayground }: EventsProps) {
  // Animation states for live demos
  const [clickCount, setClickCount] = useState(0);
  const [eventLog, setEventLog] = useState<string[]>([]);
  const [bubbleLog, setBubbleLog] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [delegationItems, setDelegationItems] = useState(['Task 1', 'Task 2', 'Task 3']);

  const resetClickDemo = () => {
    setClickCount(0);
    setEventLog([]);
  };

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    addLog(`Click #${clickCount + 1} detected!`);
  };

  const addLog = (message: string) => {
    setEventLog(prev => [...prev.slice(-4), message]);
  };

  const resetBubbleDemo = () => setBubbleLog([]);

  const addBubbleLog = (element: string, phase: string) => {
    setBubbleLog(prev => [...prev, `${element} - ${phase}`]);
  };

  const resetInputDemo = () => setInputValue('');

  const resetDelegationDemo = () => {
    setDelegationItems(['Task 1', 'Task 2', 'Task 3']);
  };

  const addDelegationItem = () => {
    const newIndex = delegationItems.length + 1;
    setDelegationItems(prev => [...prev, `Task ${newIndex}`]);
  };

  const removeDelegationItem = (index: number) => {
    setDelegationItems(prev => prev.filter((_, i) => i !== index));
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Events Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <header>
      <h1>JavaScript Events Playground</h1>
      <p>Master event handling and interaction</p>
    </header>

    <main>
      <!-- Click Events -->
      <section class="demo-section">
        <h2>1. Click Events</h2>
        <button id="click-btn" class="demo-btn">Click Me!</button>
        <button id="dblclick-btn" class="demo-btn">Double Click</button>
        <div id="click-output" class="output-box">Clicks: 0</div>
      </section>

      <!-- Event Bubbling -->
      <section class="demo-section">
        <h2>2. Event Bubbling & Capturing</h2>
        <div id="outer" class="bubble-box outer">
          Outer (Grandparent)
          <div id="middle" class="bubble-box middle">
            Middle (Parent)
            <div id="inner" class="bubble-box inner">
              Inner (Child) - Click Me!
            </div>
          </div>
        </div>
        <button onclick="resetBubbling()">Reset</button>
        <div id="bubble-output" class="output-box"></div>
      </section>

      <!-- Form Events -->
      <section class="demo-section">
        <h2>3. Form Events</h2>
        <form id="demo-form">
          <input type="text" id="name-input" placeholder="Type something..." />
          <button type="submit">Submit</button>
        </form>
        <div id="form-output" class="output-box"></div>
      </section>

      <!-- Event Delegation -->
      <section class="demo-section">
        <h2>4. Event Delegation</h2>
        <div id="todo-container">
          <button onclick="addTodoItem()">Add Item</button>
          <ul id="todo-list">
            <li>Task 1 <button class="delete-btn">×</button></li>
            <li>Task 2 <button class="delete-btn">×</button></li>
          </ul>
        </div>
        <div id="delegation-output" class="output-box"></div>
      </section>
    </main>

    <div id="console-output">
      <h3>Console Log</h3>
      <div id="output"></div>
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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

header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e2e8f0;
}

h1 {
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 8px;
}

.demo-section {
  margin-bottom: 32px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  font-size: 20px;
  color: #334155;
  margin-bottom: 16px;
}

.demo-btn {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 8px 8px 8px 0;
}

.demo-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.demo-btn:active {
  transform: translateY(0);
}

.bubble-box {
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.outer {
  background: #fef3c7;
  border: 3px solid #f59e0b;
}

.middle {
  background: #dbeafe;
  border: 3px solid #3b82f6;
}

.inner {
  background: #dcfce7;
  border: 3px solid #10b981;
}

.bubble-box:hover {
  transform: scale(1.02);
}

form {
  display: flex;
  gap: 12px;
  margin: 16px 0;
}

input[type="text"] {
  flex: 1;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

#todo-list {
  list-style: none;
  margin-top: 16px;
}

#todo-list li {
  padding: 12px;
  margin: 8px 0;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  padding: 4px 12px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

.delete-btn:hover {
  background: #dc2626;
}

.output-box {
  margin-top: 16px;
  padding: 16px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #475569;
  min-height: 60px;
}

#console-output {
  margin-top: 32px;
  padding: 24px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  font-family: 'Courier New', monospace;
  max-height: 300px;
  overflow-y: auto;
}

#console-output h3 {
  color: #22d3ee;
  margin-bottom: 16px;
  font-size: 18px;
}

#output {
  font-size: 13px;
  line-height: 1.8;
  color: #94a3b8;
}`;

  const playgroundJs = `const output = document.getElementById('output');
let clickCount = 0;
let todoCount = 2;

function log(message, color = '#94a3b8') {
  const line = document.createElement('div');
  line.style.color = color;
  line.textContent = '> ' + message;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

// 1. Click Events
const clickBtn = document.getElementById('click-btn');
const dblclickBtn = document.getElementById('dblclick-btn');

clickBtn.addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-output').textContent = \`Clicks: \${clickCount}\`;
  log(\`Button clicked! Count: \${clickCount}\`, '#10b981');
});

dblclickBtn.addEventListener('dblclick', () => {
  dblclickBtn.style.backgroundColor = '#8b5cf6';
  dblclickBtn.textContent = 'Double Clicked!';
  log('Double click detected!', '#8b5cf6');
  
  setTimeout(() => {
    dblclickBtn.style.backgroundColor = '#3b82f6';
    dblclickBtn.textContent = 'Double Click';
  }, 1000);
});

// 2. Event Bubbling
const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');
const bubbleOutput = document.getElementById('bubble-output');

[inner, middle, outer].forEach((element, index) => {
  const names = ['Inner', 'Middle', 'Outer'];
  element.addEventListener('click', (e) => {
    const msg = \`\${names[index]} clicked (Bubbling Phase)\`;
    bubbleOutput.innerHTML += msg + '<br>';
    log(msg, ['#10b981', '#3b82f6', '#f59e0b'][index]);
    
    // Stop propagation if shift key pressed
    if (e.shiftKey) {
      e.stopPropagation();
      log('Propagation stopped!', '#ef4444');
    }
  });
});

function resetBubbling() {
  bubbleOutput.innerHTML = '';
  log('Bubbling demo reset', '#f59e0b');
}

// 3. Form Events
const form = document.getElementById('demo-form');
const nameInput = document.getElementById('name-input');
const formOutput = document.getElementById('form-output');

nameInput.addEventListener('input', (e) => {
  formOutput.textContent = \`Typing: \${e.target.value}\`;
  log(\`Input: \${e.target.value}\`, '#22d3ee');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = nameInput.value;
  formOutput.textContent = \`Submitted: \${value}\`;
  log(\`Form submitted with: \${value}\`, '#10b981');
  nameInput.value = '';
});

// 4. Event Delegation
const todoList = document.getElementById('todo-list');
const delegationOutput = document.getElementById('delegation-output');

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.closest('li');
    li.style.transition = 'all 0.3s';
    li.style.opacity = '0';
    li.style.transform = 'translateX(100px)';
    
    setTimeout(() => li.remove(), 300);
    
    log('Item deleted with delegation', '#ef4444');
    delegationOutput.textContent = 'Item removed!';
  }
});

function addTodoItem() {
  todoCount++;
  const li = document.createElement('li');
  li.innerHTML = \`Task \${todoCount} <button class="delete-btn">×</button>\`;
  li.style.opacity = '0';
  todoList.appendChild(li);
  
  setTimeout(() => {
    li.style.transition = 'opacity 0.3s';
    li.style.opacity = '1';
  }, 10);
  
  log(\`Added Task \${todoCount}\`, '#10b981');
  delegationOutput.textContent = 'Item added!';
}

log('🎯 Events Demo Ready!', '#22d3ee');
log('Interact with elements to see events', '#94a3b8');
log('Hold Shift while clicking nested boxes to stop propagation', '#f59e0b');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="10. Events"
        title="JavaScript Events"
        description="Master event handling - respond to user interactions and create dynamic, interactive web applications"
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Events Matter
          </CardTitle>
          <CardDescription className="text-base">
            Events are the foundation of interactive web applications
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">User Interaction</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Respond to clicks, typing, scrolling, and other user actions
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Interactive UIs
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Dynamic Behavior</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Execute code when specific actions occur on your page
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Smart Responses
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Event Flow</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Understand bubbling, capturing, and delegation patterns
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Advanced Control
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* What are Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Events?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the foundation of interactive web development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              <strong className="text-foreground">Events</strong> are actions or occurrences that happen in the browser - like clicking a button, typing in an input, scrolling, or loading a page. JavaScript can "listen" for these events and execute code when they happen.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Common event examples:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>User actions:</strong> clicks, double-clicks, hovering, typing</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Form events:</strong> submitting forms, input changes, focus/blur</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Document events:</strong> page load, scroll, resize</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Keyboard events:</strong> key presses, key releases</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 p-6">
            <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Analogy
            </h4>
            <p className="text-sm text-muted-foreground">
              Think of events like a doorbell 🔔. When someone presses it (the event), your doorbell rings (event fires), and you respond by opening the door (your event handler code runs). Without a doorbell (event listener), you wouldn't know someone is at the door!
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Simple Example
            </h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <button id="myButton">Click Me!</button>

const button = document.getElementById('myButton');

// Listen for click event
button.addEventListener('click', function() {
  alert('Button was clicked!');
  console.log('User clicked the button');
});

// When user clicks the button:
// 1. Click event fires
// 2. Our function runs
// 3. Alert shows and log appears

// Output: Alert + Console message`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: addEventListener */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            1. addEventListener() - The Modern Way
          </CardTitle>
          <CardDescription className="text-base">
            Attach event handlers to elements with full control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
              addEventListener Syntax
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`element.addEventListener(eventType, handler, options);

// eventType: 'click', 'keydown', 'submit', etc.
// handler: function to run when event fires
// options: { capture, once, passive, signal }`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Basic Usage</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const button = document.querySelector('button');

// Method 1: Named function
function handleClick() {
  console.log('Button clicked!');
}
button.addEventListener('click', handleClick);

// Method 2: Anonymous function
button.addEventListener('click', function() {
  console.log('Clicked again!');
});

// Method 3: Arrow function
button.addEventListener('click', () => {
  console.log('Arrow function!');
});

// Multiple listeners on same event!
// All three will run when clicked`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">With Event Object</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  // Event object has useful info!
  console.log('Event type:', event.type);
  // Output: "click"
  
  console.log('Target element:', event.target);
  // Output: <button>...</button>
  
  console.log('Click coordinates:', event.clientX, event.clientY);
  // Output: x, y position
  
  console.log('Was Shift pressed?', event.shiftKey);
  // Output: true or false
});

// Event parameter is automatically passed!`}</pre>
            </div>
          </div>

          {/* Live Click Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Click Events
            </h4>
            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={handleClick}
                className="w-full"
              >
                Click Me! (Count: {clickCount})
              </Button>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border min-h-[100px]">
                <p className="font-semibold text-sm mb-2">Event Log:</p>
                {eventLog.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Click the button to see events...</p>
                ) : (
                  <div className="space-y-1">
                    {eventLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        {log}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <Button size="sm" variant="outline" onClick={resetClickDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              addEventListener vs onclick
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">✅ addEventListener (Use This)</h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs mb-2">
{`// Can add multiple listeners
btn.addEventListener('click', fn1);
btn.addEventListener('click', fn2);
// Both run!

// Modern options support
btn.addEventListener('click', fn, {
  once: true,
  passive: true
});`}</pre>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">❌ onclick (Avoid)</h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs mb-2">
{`// Replaces previous handler
btn.onclick = fn1;
btn.onclick = fn2;
// Only fn2 runs!

// No options support
// Limited control`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Event Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            2. Common Event Types
          </CardTitle>
          <CardDescription className="text-base">
            Mouse, keyboard, form, and document events you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mouse Events */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Mouse Events
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const element = document.querySelector('.box');

// Click events
element.addEventListener('click', () => {
  console.log('Clicked');
});

element.addEventListener('dblclick', () => {
  console.log('Double clicked');
});

// Hover events
element.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
});

element.addEventListener('mouseleave', () => {
  console.log('Mouse left');
});

// Mouse movement
element.addEventListener('mousemove', (e) => {
  console.log(\`X: \${e.clientX}, Y: \${e.clientY}\`);
});

// Mouse buttons
element.addEventListener('mousedown', () => {
  console.log('Button pressed');
});

element.addEventListener('mouseup', () => {
  console.log('Button released');
});`}</pre>
            </div>

            {/* Keyboard Events */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Keyboard Events
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Key pressed down
input.addEventListener('keydown', (e) => {
  console.log('Key down:', e.key);
  // Output: "a", "Enter", "Shift", etc.
});

// Key released
input.addEventListener('keyup', (e) => {
  console.log('Key up:', e.key);
});

// Check modifiers
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Save shortcut!');
  }
  
  if (e.shiftKey && e.key === 'Enter') {
    console.log('Shift + Enter');
  }
});

// Useful properties:
// e.key - actual key ('a', 'Enter')
// e.code - physical key ('KeyA', 'Enter')
// e.ctrlKey, e.shiftKey, e.altKey`}</pre>
            </div>

            {/* Form Events */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Form Events
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('form');
const input = document.querySelector('input');

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page reload!
  console.log('Form submitted');
});

// Input events
input.addEventListener('input', (e) => {
  console.log('Typing:', e.target.value);
  // Fires on every change!
});

input.addEventListener('change', (e) => {
  console.log('Changed:', e.target.value);
  // Fires when input loses focus
});

// Focus events
input.addEventListener('focus', () => {
  console.log('Input focused');
});

input.addEventListener('blur', () => {
  console.log('Input lost focus');
});`}</pre>
            </div>

            {/* Document Events */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Document Events
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Page fully loaded
window.addEventListener('load', () => {
  console.log('Page fully loaded');
  // All images, CSS loaded
});

// DOM ready (faster!)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  // HTML parsed, DOM built
});

// Scroll events
window.addEventListener('scroll', () => {
  console.log('Scrolling:', window.pageYOffset);
});

// Resize events
window.addEventListener('resize', () => {
  console.log('Width:', window.innerWidth);
});

// Before page unload
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = ''; // Show confirm dialog
});`}</pre>
            </div>
          </div>

          {/* Live Input Demo */}
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Live Demo - Input Events
            </h4>
            <div className="space-y-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="w-full px-4 py-2 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg focus:outline-none focus:border-cyan-500"
              />
              <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                <p className="text-sm font-semibold mb-1">Current Value:</p>
                <p className="text-xs font-mono">{inputValue || '(empty)'}</p>
                <p className="text-xs text-muted-foreground mt-2">Character count: {inputValue.length}</p>
              </div>
              <Button size="sm" variant="outline" onClick={resetInputDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Clear
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Event Object */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. The Event Object
          </CardTitle>
          <CardDescription className="text-base">
            Access detailed information about the event that occurred
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
              What is the Event Object?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              When an event fires, JavaScript creates an <strong>Event object</strong> containing details about what happened. This object is automatically passed to your event handler function.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2">Common Properties</h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• <code className="text-xs">type</code> - Event name ('click', 'keydown')</li>
                  <li>• <code className="text-xs">target</code> - Element that triggered event</li>
                  <li>• <code className="text-xs">currentTarget</code> - Element with listener</li>
                  <li>• <code className="text-xs">timeStamp</code> - When event occurred</li>
                  <li>• <code className="text-xs">clientX/Y</code> - Mouse coordinates</li>
                  <li>• <code className="text-xs">key</code> - Keyboard key pressed</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2">Common Methods</h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• <code className="text-xs">preventDefault()</code> - Stop default action</li>
                  <li>• <code className="text-xs">stopPropagation()</code> - Stop bubbling</li>
                  <li>• <code className="text-xs">stopImmediatePropagation()</code> - Stop all</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">target vs currentTarget</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// HTML: <div id="parent">
//          <button id="child">Click</button>
//        </div>

const parent = document.getElementById('parent');

parent.addEventListener('click', (e) => {
  console.log('target:', e.target.id);
  // Output: "child" (what was clicked)
  
  console.log('currentTarget:', e.currentTarget.id);
  // Output: "parent" (where listener is)
  
  // target = element that triggered event
  // currentTarget = element with addEventListener
});

// If you click the button:
// target = button (what you clicked)
// currentTarget = parent (has the listener)`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Mouse Event Properties</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`document.addEventListener('click', (e) => {
  // Mouse position relative to viewport
  console.log('clientX:', e.clientX);
  console.log('clientY:', e.clientY);
  
  // Mouse position relative to page
  console.log('pageX:', e.pageX);
  console.log('pageY:', e.pageY);
  
  // Mouse button (0=left, 1=middle, 2=right)
  console.log('button:', e.button);
  
  // Modifier keys
  console.log('shiftKey:', e.shiftKey);
  console.log('ctrlKey:', e.ctrlKey);
  console.log('altKey:', e.altKey);
});

// Useful for custom context menus,
// drag-and-drop, drawing apps, etc.`}</pre>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              preventDefault() - Stop Default Behavior
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Prevent form from reloading page
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form with AJAX instead
  console.log('Form handled by JavaScript');
});

// Prevent link from navigating
link.addEventListener('click', (e) => {
  e.preventDefault();
  // Do something else instead
  console.log('Link click prevented');
});

// Prevent context menu
element.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  // Show custom menu instead
});

// Common use: Stop default browser behavior
// and implement your own!`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Event Bubbling & Capturing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            4. Event Bubbling & Capturing
          </CardTitle>
          <CardDescription className="text-base">
            Understanding how events flow through the DOM tree
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">
              The Event Flow (3 Phases)
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              When an event occurs on a nested element, it travels through the DOM in <strong>three phases</strong>:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-sm flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  ① Capturing Phase (Down)
                </h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Event travels from window → document → parent → child
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-emerald-500">
                <h5 className="font-semibold text-sm flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ② Target Phase
                </h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Event reaches the actual element that was clicked
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
                <h5 className="font-semibold text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  ③ Bubbling Phase (Up)
                </h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Event bubbles up from child → parent → document → window
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Event Bubbling (Default)</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// HTML Structure:
// <div id="grandparent">
//   <div id="parent">
//     <button id="child">Click</button>
//   </div>
// </div>

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// All listen to 'click' (default = bubbling)
child.addEventListener('click', () => {
  console.log('1. Child clicked');
});

parent.addEventListener('click', () => {
  console.log('2. Parent clicked');
});

grandparent.addEventListener('click', () => {
  console.log('3. Grandparent clicked');
});

// When you click the button:
// Output:
// 1. Child clicked
// 2. Parent clicked  
// 3. Grandparent clicked

// Event bubbles UP from child to ancestors!`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">Event Capturing (Rare)</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Same HTML structure

// Use { capture: true } to listen in capturing phase
grandparent.addEventListener('click', () => {
  console.log('1. Grandparent (capturing)');
}, { capture: true });

parent.addEventListener('click', () => {
  console.log('2. Parent (capturing)');
}, { capture: true });

child.addEventListener('click', () => {
  console.log('3. Child (target)');
});

// When you click the button:
// Output:
// 1. Grandparent (capturing)
// 2. Parent (capturing)
// 3. Child (target)

// Event travels DOWN from ancestors!
// Rarely used in practice.`}</pre>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <ShieldOff className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Stopping Event Propagation
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// stopPropagation() - Stop bubbling/capturing
child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked');
  // Parent and grandparent won't hear this!
});

parent.addEventListener('click', () => {
  console.log('Parent clicked');
  // This won't run if child stops propagation
});

// When you click child:
// Output: Child clicked
// (Parent listener never fires)

// stopImmediatePropagation() - Even more strict!
button.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('First listener');
  // Stops ALL other listeners, even on same element
});

button.addEventListener('click', () => {
  console.log('Second listener');
  // This won't run!
});

// Use cases:
// • Custom dropdowns (prevent closing when clicking inside)
// • Nested clickable elements (button inside a card)
// • Modal overlays (clicking modal shouldn't close it)`}</pre>
          </div>

          {/* Live Bubbling Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Event Bubbling
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Click the inner box to see how events bubble through parent elements
            </p>
            <div className="space-y-4">
              <div 
                className="p-6 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-2 border-amber-400 dark:border-amber-600 rounded-xl cursor-pointer"
                onClick={() => addBubbleLog('Grandparent', 'bubbling')}
              >
                <div className="text-xs font-semibold mb-2 text-amber-700 dark:text-amber-300">Grandparent (Outer)</div>
                <div 
                  className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-400 dark:border-blue-600 rounded-xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    addBubbleLog('Parent', 'bubbling');
                  }}
                >
                  <div className="text-xs font-semibold mb-2 text-blue-700 dark:text-blue-300">Parent (Middle) - Click stops here!</div>
                  <div 
                    className="p-6 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 border-2 border-emerald-400 dark:border-emerald-600 rounded-xl cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      addBubbleLog('Child', 'bubbling');
                    }}
                  >
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Child (Inner) - Click Me!</div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded border min-h-[100px]">
                <p className="font-semibold text-sm mb-2">Event Flow Log:</p>
                {bubbleLog.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Click any box to see bubbling...</p>
                ) : (
                  <div className="space-y-1">
                    {bubbleLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-purple-600 dark:text-purple-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <Button size="sm" variant="outline" onClick={resetBubbleDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Why Bubbling Matters</AlertTitle>
            <AlertDescription>
              Bubbling enables <strong>event delegation</strong> - attaching one listener to a parent instead of many listeners to children. This is crucial for dynamic content and better performance!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 5: Event Delegation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            5. Event Delegation Pattern
          </CardTitle>
          <CardDescription className="text-base">
            One powerful listener to rule them all - handle events efficiently
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
              What is Event Delegation?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Instead of adding listeners to many child elements, add <strong>one listener to their parent</strong>. Use <code className="text-xs">event.target</code> to determine which child was clicked. Works for current <strong>and future</strong> children!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-rose-700 dark:text-rose-300">❌ Without Delegation (Bad)</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`// Adding listeners to each item
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', () => {
    console.log('Clicked:', item.textContent);
  });
});

// Problems:
// 1. Memory waste (many listeners)
// 2. New items won't have listeners
// 3. Must re-attach after DOM updates`}</pre>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-emerald-700 dark:text-emerald-300">✅ With Delegation (Good)</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`// One listener on parent
const list = document.querySelector('.list');
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    console.log('Clicked:', e.target.textContent);
  }
});

// Benefits:
// 1. One listener = less memory
// 2. Works for new items automatically
// 3. Cleaner, more maintainable code`}</pre>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Real Example: Dynamic Todo List</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// HTML: <ul id="todoList"></ul>

const todoList = document.getElementById('todoList');

// ✅ Event Delegation - handles ALL clicks
todoList.addEventListener('click', (e) => {
  // Check if delete button was clicked
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.closest('li');
    li.remove();
    console.log('Item deleted');
  }
  
  // Check if checkbox was clicked
  if (e.target.classList.contains('todo-checkbox')) {
    const li = e.target.closest('li');
    li.classList.toggle('completed');
    console.log('Item toggled');
  }
  
  // Check if edit button was clicked
  if (e.target.classList.contains('edit-btn')) {
    const li = e.target.closest('li');
    const text = li.querySelector('.todo-text');
    text.contentEditable = 'true';
    text.focus();
    console.log('Editing item');
  }
});

// Add new todo dynamically
function addTodo(text) {
  const li = document.createElement('li');
  li.innerHTML = \`
    <input type="checkbox" class="todo-checkbox">
    <span class="todo-text">\${text}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  \`;
  todoList.appendChild(li);
  // No need to add listeners! Delegation handles it ✨
}

addTodo('Learn Event Delegation');
addTodo('Build awesome apps');
// All buttons work automatically!`}</pre>
          </div>

          {/* Live Delegation Demo */}
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Live Demo - Event Delegation
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Add items dynamically - the delete button works automatically thanks to delegation!
            </p>
            <div className="space-y-4">
              <Button onClick={addDelegationItem} className="w-full">
                + Add New Task
              </Button>
              <div 
                className="space-y-2 min-h-[120px] p-3 bg-white dark:bg-gray-900 rounded-lg border"
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.classList.contains('delete-task-btn')) {
                    const index = parseInt(target.getAttribute('data-index') || '0');
                    removeDelegationItem(index);
                  }
                }}
              >
                {delegationItems.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">No tasks yet. Add one!</p>
                ) : (
                  delegationItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border">
                      <span className="text-sm">{item}</span>
                      <button
                        className="delete-task-btn px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition-colors"
                        data-index={index}
                      >
                        <Trash2 className="w-3 h-3 pointer-events-none" />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <Button size="sm" variant="outline" onClick={resetDelegationDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              When to Use Event Delegation
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">✅ Use Delegation When:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• You have many similar child elements</li>
                  <li>• Elements are added/removed dynamically</li>
                  <li>• You want better performance</li>
                  <li>• Handling lists, tables, menus</li>
                  <li>• Managing form with many inputs</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">❌ Don't Use When:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• You only have 1-2 elements</li>
                  <li>• Events don't bubble (focus, blur)</li>
                  <li>• Need different handlers per element</li>
                  <li>• Performance isn't a concern</li>
                  <li>• Direct attachment is clearer</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: addEventListener Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            6. addEventListener Options (Modern Features)
          </CardTitle>
          <CardDescription className="text-base">
            Advanced options for fine-tuned event control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
              The Options Parameter
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`element.addEventListener(event, handler, {
  capture: false,     // Use capturing phase? (default: false)
  once: false,        // Remove after first trigger? (default: false)
  passive: false,     // Won't call preventDefault()? (default: false)
  signal: abortSignal // AbortSignal to remove listener
});`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                once: true - Run Only Once
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Automatically removes after first trigger
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('This runs only ONCE!');
  alert('Button clicked');
}, { once: true });

// Click #1: Alert shows, listener removed
// Click #2: Nothing happens
// Click #3: Nothing happens

// Perfect for:
// • One-time welcome modals
// • Initial setup actions
// • "Click to start" buttons
// • Form submission (prevent double-submit)`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                passive: true - Performance Boost
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Tell browser: "I won't call preventDefault()"
// Browser can optimize scrolling/touch events

document.addEventListener('scroll', () => {
  console.log('Scrolling...');
  // Can't use preventDefault() here!
}, { passive: true });

// Improves performance for:
window.addEventListener('touchstart', handler, {
  passive: true  // Smooth touch scrolling
});

window.addEventListener('wheel', handler, {
  passive: true  // Smooth mouse wheel
});

// ⚠️ Don't use if you need preventDefault()!`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <ShieldOff className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                signal: AbortController (Modern)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Remove multiple listeners at once!
const controller = new AbortController();
const signal = controller.signal;

// Add listeners with same signal
button.addEventListener('click', handler1, { signal });
button.addEventListener('mouseover', handler2, { signal });
input.addEventListener('focus', handler3, { signal });

// Remove ALL at once!
controller.abort();

// Perfect for:
// • Component cleanup
// • Route changes in SPAs
// • Feature toggles
// • Temporary event modes`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                capture: true - Capturing Phase
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Listen during capturing phase (downward)
parent.addEventListener('click', () => {
  console.log('Parent - capturing phase');
}, { capture: true });

child.addEventListener('click', () => {
  console.log('Child - bubbling phase');
});

// Click child:
// Output:
// 1. Parent - capturing phase (down)
// 2. Child - bubbling phase

// Rarely needed, but useful for:
// • Event interception
// • Global shortcuts
// • Security/validation`}</pre>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Real Example: Auto-Cleanup with AbortController</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Modern React-style component cleanup
class FeatureComponent {
  constructor() {
    this.controller = new AbortController();
    this.signal = this.controller.signal;
    this.init();
  }
  
  init() {
    // Add all event listeners with signal
    document.addEventListener('keydown', this.handleKeydown, {
      signal: this.signal
    });
    
    window.addEventListener('resize', this.handleResize, {
      signal: this.signal
    });
    
    document.querySelector('.btn').addEventListener('click', 
      this.handleClick, 
      { signal: this.signal }
    );
    
    console.log('Feature initialized');
  }
  
  handleKeydown = (e) => {
    if (e.key === 'Escape') {
      this.destroy();
    }
  }
  
  handleResize = () => {
    console.log('Window resized');
  }
  
  handleClick = () => {
    console.log('Button clicked');
  }
  
  destroy() {
    // Remove ALL listeners at once!
    this.controller.abort();
    console.log('Feature destroyed, all listeners removed');
  }
}

// Usage
const feature = new FeatureComponent();

// Later: clean up everything
feature.destroy();
// All 3 event listeners removed automatically! 🎉`}</pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip: Combine Options</AlertTitle>
            <AlertDescription>
              You can combine multiple options: <code className="text-xs">{'{ once: true, passive: true, signal: controller.signal }'}</code> for one-time, optimized, removable listeners!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 7: removeEventListener */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Trash2 className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            7. Removing Event Listeners
          </CardTitle>
          <CardDescription className="text-base">
            Clean up listeners to prevent memory leaks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-rose-50/40 to-red-50/40 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
            <h4 className="font-semibold mb-3 text-rose-700 dark:text-rose-300">
              Why Remove Listeners?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Listeners stay in memory forever unless removed. In SPAs, when navigating between pages or unmounting components, old listeners can cause <strong>memory leaks</strong> and unexpected behavior!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-rose-700 dark:text-rose-300">❌ Memory Leak</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`// Component mounts
button.addEventListener('click', () => {
  console.log('Clicked');
});

// Component unmounts but listener stays!
// Memory leak! 💀

// Navigate back:
// Now TWO listeners exist!
// Clicking runs handler twice!`}</pre>
              </div>
              <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                <h5 className="font-semibold text-sm mb-2 text-emerald-700 dark:text-emerald-300">✅ Proper Cleanup</h5>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded p-2 font-mono text-xs">
{`// Store handler reference
const handleClick = () => {
  console.log('Clicked');
};

// Add listener
button.addEventListener('click', handleClick);

// Remove on cleanup
button.removeEventListener('click', handleClick);

// No memory leak! ✨`}</pre>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">❌ This Won't Work</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Anonymous function - can't remove!
button.addEventListener('click', () => {
  console.log('Clicked');
});

// This does NOTHING!
button.removeEventListener('click', () => {
  console.log('Clicked');
});
// Different function reference!

// Also won't work:
button.addEventListener('click', function() {
  console.log('Clicked');
});

button.removeEventListener('click', function() {
  console.log('Clicked');
});
// Still different references!`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
              <h4 className="font-semibold">✅ This Will Work</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// Named function
function handleClick() {
  console.log('Clicked');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
// ✅ Removed!

// Or store reference
const handler = () => console.log('Clicked');

button.addEventListener('click', handler);
button.removeEventListener('click', handler);
// ✅ Removed!

// Arrow function stored in variable works too!`}</pre>
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Real Example: React useEffect Cleanup</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border overflow-x-auto">
{`// React component with proper cleanup
function MyComponent() {
  useEffect(() => {
    // Define handler
    const handleScroll = () => {
      console.log('Scrolling...');
    };
    
    const handleResize = () => {
      console.log('Resizing...');
    };
    
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        console.log('Escape pressed');
      }
    };
    
    // Add listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyPress);
    
    // Cleanup function
    return () => {
      // Remove ALL listeners when component unmounts
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyPress);
      console.log('Cleanup complete!');
    };
  }, []); // Run once on mount
  
  return <div>My Component</div>;
}

// When component unmounts, all listeners are removed
// No memory leaks! 🎉`}</pre>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Common Mistake</AlertTitle>
            <AlertDescription>
              Using arrow functions or inline functions makes removal impossible! Always store a reference to the exact same function you added.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use every day in production apps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Form Validation */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Live Form Validation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('#signupForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Real-time validation on input
emailInput.addEventListener('input', (e) => {
  const email = e.target.value;
  const isValid = email.includes('@') && email.includes('.');
  
  if (isValid) {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
  }
});

// Password strength check
passwordInput.addEventListener('input', (e) => {
  const password = e.target.value;
  const strength = {
    weak: password.length < 6,
    medium: password.length >= 6 && password.length < 12,
    strong: password.length >= 12
  };
  
  const indicator = document.querySelector('.strength');
  if (strength.strong) {
    indicator.textContent = 'Strong ✅';
    indicator.className = 'strength strong';
  } else if (strength.medium) {
    indicator.textContent = 'Medium ⚠️';
    indicator.className = 'strength medium';
  } else {
    indicator.textContent = 'Weak ❌';
    indicator.className = 'strength weak';
  }
});

// Submit with validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (!email.includes('@')) {
    alert('Invalid email!');
    return;
  }
  
  if (password.length < 6) {
    alert('Password too short!');
    return;
  }
  
  // All valid - submit
  console.log('Form submitted:', { email, password });
  fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
});`}</pre>
            </div>

            {/* Example 2: Infinite Scroll */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Repeat className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Infinite Scroll Pattern
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`let page = 1;
let loading = false;

window.addEventListener('scroll', () => {
  // Check if near bottom
  const scrolled = window.innerHeight + window.pageYOffset;
  const threshold = document.body.offsetHeight - 500;
  
  if (scrolled >= threshold && !loading) {
    loadMoreItems();
  }
});

async function loadMoreItems() {
  loading = true;
  console.log(\`Loading page \${page}...\`);
  
  try {
    const response = await fetch(\`/api/items?page=\${page}\`);
    const items = await response.json();
    
    // Append to container
    const container = document.querySelector('.items');
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = item.title;
      container.appendChild(div);
    });
    
    page++;
    loading = false;
    console.log('Loaded successfully!');
  } catch (error) {
    console.error('Load failed:', error);
    loading = false;
  }
}

// Optimization: Debounce scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    checkIfNeedLoad();
  }, 200); // Wait 200ms after scrolling stops
});`}</pre>
            </div>

            {/* Example 3: Keyboard Shortcuts */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Keyboard Shortcuts
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + S = Save
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveDocument();
    console.log('Document saved');
  }
  
  // Ctrl/Cmd + K = Search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearchModal();
    console.log('Search opened');
  }
  
  // Escape = Close modal
  if (e.key === 'Escape') {
    closeAllModals();
    console.log('Modals closed');
  }
  
  // Ctrl/Cmd + / = Toggle sidebar
  if ((e.ctrlKey || e.metaKey) && e.key === '/') {
    e.preventDefault();
    toggleSidebar();
  }
});

// Arrow navigation
const items = document.querySelectorAll('.menu-item');
let selectedIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
    updateSelection();
  }
  
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex = Math.max(selectedIndex - 1, 0);
    updateSelection();
  }
  
  if (e.key === 'Enter') {
    items[selectedIndex].click();
  }
});

function updateSelection() {
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === selectedIndex);
  });
}`}</pre>
            </div>

            {/* Example 4: Drag and Drop */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Drag & Drop Files
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const dropZone = document.querySelector('.drop-zone');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

// Visual feedback on drag
['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, () => {
    dropZone.classList.add('drag-over');
  });
});

['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, () => {
    dropZone.classList.remove('drag-over');
  });
});

// Handle dropped files
dropZone.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  console.log(\`\${files.length} file(s) dropped\`);
  
  [...files].forEach(file => {
    console.log('File:', file.name, file.type, file.size);
    
    // Upload file
    const formData = new FormData();
    formData.append('file', file);
    
    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      console.log('Upload success:', data);
    })
    .catch(error => {
      console.error('Upload failed:', error);
    });
  });
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Best Practices & Tips
          </CardTitle>
          <CardDescription className="text-base">
            Professional patterns for event handling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                ✅ Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use addEventListener() instead of onclick</li>
                <li>• Store function references for removal</li>
                <li>• Use event delegation for dynamic content</li>
                <li>• Clean up listeners when components unmount</li>
                <li>• Use passive: true for scroll/touch events</li>
                <li>• Use once: true for one-time events</li>
                <li>• Debounce/throttle expensive handlers</li>
                <li>• Check e.target in delegation carefully</li>
                <li>• Use AbortController for cleanup</li>
                <li>• Prevent default when needed</li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don't use onclick = fn (old style)</li>
                <li>• Don't forget to remove listeners</li>
                <li>• Don't use anonymous functions if removing</li>
                <li>• Don't attach many listeners to children</li>
                <li>• Don't run heavy code in scroll handlers</li>
                <li>• Don't stopPropagation() unnecessarily</li>
                <li>• Don't use capturing unless needed</li>
                <li>• Don't ignore memory leaks in SPAs</li>
                <li>• Don't mix inline HTML events with JS</li>
                <li>• Don't forget preventDefault() for forms</li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Performance Tips
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">1. Debounce expensive handlers:</p>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`let timeout;
input.addEventListener('input', (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    expensiveSearch(e.target.value);
  }, 300); // Wait 300ms after typing stops
});`}</pre>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">2. Use event delegation for lists:</p>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`// 1 listener vs 1000 listeners!
list.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handleClick(e.target);
  }
});`}</pre>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">3. Use passive for smooth scrolling:</p>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`window.addEventListener('scroll', handler, { 
  passive: true // Tells browser you won't preventDefault
});`}</pre>
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
            Experiment with events in a live environment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this playground to experiment with click events, event bubbling, form handling, and event delegation. Try clicking different elements and see how events flow!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
