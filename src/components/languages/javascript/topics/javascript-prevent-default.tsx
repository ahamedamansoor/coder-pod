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
  Shield,
  Ban,
  Zap,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  AlertTriangle,
  ArrowUpCircle
} from 'lucide-react';

interface PreventDefaultProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptPreventDefault({ onOpenWebPlayground }: PreventDefaultProps) {
  // Demo states
  const [preventLog, setPreventLog] = useState<string[]>([]);
  const [stopLog, setStopLog] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const resetPreventDemo = () => {
    setPreventLog([]);
    setFormSubmitted(false);
  };

  const resetStopDemo = () => setStopLog([]);

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>preventDefault & stopPropagation Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>🛡️ preventDefault() & stopPropagation()</h1>
    <p class="subtitle">Master these two essential event methods</p>

    <section class="demo-section">
      <h2>preventDefault() - Stop Browser Actions</h2>
      <div class="demo-box">
        <a href="https://google.com" id="link" class="demo-link">
          Click me (won't navigate)
        </a>
        <form id="demo-form">
          <input type="text" placeholder="Enter text..." required />
          <button type="submit">Submit (won't reload)</button>
        </form>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Can't check me!</label>
      </div>
      <div id="prevent-log" class="log"></div>
    </section>

    <section class="demo-section">
      <h2>stopPropagation() - Stop Event Flow</h2>
      <div id="parent" class="parent-box">
        Parent (will NOT receive click)
        <button id="stop-child" class="child-button">
          Click me (stops propagation)
        </button>
      </div>
      <div id="stop-log" class="log"></div>
    </section>

    <section class="demo-section">
      <h2>Combined Example - Modal</h2>
      <button id="open-modal" class="btn-primary">Open Modal</button>
      <div id="modal-backdrop" class="modal-backdrop">
        <div id="modal" class="modal">
          <h3>Modal Dialog</h3>
          <p>Click inside modal or outside on backdrop</p>
          <button id="close-modal" class="btn-secondary">Close</button>
        </div>
      </div>
      <div id="modal-log" class="log"></div>
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

.demo-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.demo-link {
  display: inline-block;
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  transition: background 0.3s;
}

.demo-link:hover {
  background: #2563eb;
}

#demo-form {
  display: flex;
  gap: 12px;
}

input[type="text"] {
  flex: 1;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
}

button[type="submit"] {
  padding: 12px 24px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

button[type="submit"]:hover {
  background: #059669;
}

.parent-box {
  padding: 40px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 3px solid #f59e0b;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  color: #92400e;
  font-weight: 600;
}

.child-button {
  margin-top: 20px;
  padding: 16px 32px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.3s;
}

.child-button:hover {
  background: #2563eb;
}

.btn-primary {
  padding: 12px 24px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #7c3aed;
}

.btn-secondary {
  padding: 10px 20px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.btn-secondary:hover {
  background: #dc2626;
}

.modal-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-backdrop.active {
  display: flex;
}

.modal {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  text-align: center;
}

.modal h3 {
  color: #1e293b;
  margin-bottom: 12px;
}

.modal p {
  color: #64748b;
  margin-bottom: 20px;
}

.log {
  margin-top: 16px;
  padding: 16px;
  background: #0f172a;
  border-radius: 8px;
  color: #22d3ee;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  min-height: 80px;
  max-height: 150px;
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

const preventLog = document.getElementById('prevent-log');
const stopLog = document.getElementById('stop-log');
const modalLog = document.getElementById('modal-log');

// preventDefault() demos
const link = document.getElementById('link');
const form = document.getElementById('demo-form');
const checkbox = document.getElementById('checkbox');

link.addEventListener('click', (e) => {
  e.preventDefault();
  log(preventLog, 'Link clicked but navigation prevented!', '#3b82f6');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  log(preventLog, 'Form submitted but page reload prevented!', '#10b981');
  log(preventLog, 'Form data: ' + new FormData(e.target).get('text'), '#64748b');
});

checkbox.addEventListener('click', (e) => {
  e.preventDefault();
  log(preventLog, 'Checkbox click prevented!', '#ef4444');
});

// stopPropagation() demo
const parent = document.getElementById('parent');
const stopChild = document.getElementById('stop-child');

parent.addEventListener('click', () => {
  log(stopLog, 'Parent clicked (this should NOT appear)', '#ef4444');
});

stopChild.addEventListener('click', (e) => {
  e.stopPropagation();
  log(stopLog, 'Child clicked - propagation stopped!', '#10b981');
  log(stopLog, 'Parent listener will NOT fire', '#64748b');
});

// Modal demo (combined)
const openModalBtn = document.getElementById('open-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

function openModal() {
  modalBackdrop.classList.add('active');
  log(modalLog, 'Modal opened', '#8b5cf6');
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  log(modalLog, 'Modal closed', '#64748b');
}

openModalBtn.addEventListener('click', openModal);

// Prevent modal from closing when clicking inside
modal.addEventListener('click', (e) => {
  e.stopPropagation();
  log(modalLog, 'Clicked inside modal (propagation stopped)', '#3b82f6');
});

// Close modal when clicking backdrop
modalBackdrop.addEventListener('click', () => {
  closeModal();
  log(modalLog, 'Clicked backdrop - modal closed', '#10b981');
});

closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Not needed here but good practice
  closeModal();
});

log(preventLog, '👆 Try clicking the elements above', '#94a3b8');
log(stopLog, '👆 Click the button to see stopPropagation', '#94a3b8');
log(modalLog, '👆 Open the modal and try clicking inside/outside', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Shield}
        category="10. Events"
        title="preventDefault() & stopPropagation()"
        description="Master these two critical methods - control browser behavior and event flow"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The Key Difference
          </CardTitle>
          <CardDescription className="text-base">
            Two different methods that do completely different things
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              These are the two most confused methods in JavaScript events. They do <strong className="text-foreground">completely different things</strong> and are NOT interchangeable. Understanding the difference is crucial for proper event handling.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`link.addEventListener('click', (e) => {
  e.preventDefault();
  // ↑ Stops the BROWSER's default action
  // (prevents navigation, form submit, etc.)
  
  e.stopPropagation();
  // ↑ Stops the EVENT from bubbling to parents
  // (parent listeners won't fire)
  
  // They solve different problems!
});`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Ban className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
                <h3 className="font-semibold text-lg">preventDefault()</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Stops the browser&apos;s default behavior for that event
              </p>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-rose-600 dark:text-rose-400">Prevents:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Link navigation</li>
                  <li>• Form submission</li>
                  <li>• Context menu</li>
                  <li>• Text selection</li>
                </ul>
              </div>
              <Badge className="bg-rose-100/80 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border border-rose-300/50 dark:border-rose-700/40">
                Browser Action
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold text-lg">stopPropagation()</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Stops the event from bubbling up to parent elements
              </p>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-blue-600 dark:text-blue-400">Prevents:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Parent listeners firing</li>
                  <li>• Event delegation</li>
                  <li>• Bubbling phase</li>
                  <li>• Document listeners</li>
                </ul>
              </div>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Event Flow
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* preventDefault() Deep Dive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Ban className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            1. preventDefault() - Stop Browser Actions
          </CardTitle>
          <CardDescription className="text-base">
            Prevent the browser from doing what it normally does
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Links */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Prevent Link Navigation</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Stop link from navigating
const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Link clicked');
  // Page doesn't navigate!
  
  // Now do custom behavior
  loadContentWithAjax(link.href);
});

// Use case: Single Page Apps (SPA)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.hash);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});`}</pre>
            </div>

            {/* Forms */}
            <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3">Prevent Form Submission</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Stop form from reloading page
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
  // Page doesn't reload!
  
  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Send with AJAX instead
  fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(result => console.log(result));
});`}</pre>
            </div>

            {/* Context Menu */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Prevent Context Menu</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Stop right-click menu
const image = document.querySelector('img');

image.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log('Context menu prevented');
  // Browser menu doesn't show!
  
  // Show custom menu instead
  showCustomContextMenu(e.clientX, e.clientY);
});

// Use case: Protect images
document.querySelectorAll('.protected-image').forEach(img => {
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Image protected!');
  });
});`}</pre>
            </div>

            {/* Keyboard */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Prevent Keyboard Actions</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Override keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Prevent Ctrl+S (browser save)
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveDocument(); // Custom save
  }
  
  // Prevent Backspace navigation
  if (e.key === 'Backspace' && 
      e.target.tagName !== 'INPUT') {
    e.preventDefault();
  }
  
  // Prevent F5 refresh
  if (e.key === 'F5') {
    e.preventDefault();
    softRefresh();
  }
});`}</pre>
            </div>
          </div>

          {/* Live preventDefault Demo */}
          <div className="p-6 bg-gradient-to-br from-rose-50/40 to-red-50/40 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              Live Demo - preventDefault()
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <a 
                  href="https://google.com" 
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setPreventLog(prev => [...prev, 'Link clicked - navigation prevented!']);
                  }}
                >
                  Click this link (won&apos;t navigate)
                </a>
              </div>
              
              <form 
                className="p-4 bg-white dark:bg-gray-900 rounded-lg border flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPreventLog(prev => [...prev, 'Form submitted - page reload prevented!']);
                  setFormSubmitted(true);
                  setTimeout(() => setFormSubmitted(false), 2000);
                }}
              >
                <input 
                  type="text" 
                  placeholder="Enter text..." 
                  className="flex-1 px-3 py-2 border rounded"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                >
                  Submit
                </button>
              </form>
              
              {formSubmitted && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded text-emerald-700 dark:text-emerald-300 text-sm">
                  ✓ Form processed without page reload!
                </div>
              )}
              
              {preventLog.length > 0 && (
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p className="font-semibold text-sm mb-2">Event Log:</p>
                  <div className="space-y-1">
                    {preventLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-rose-600 dark:text-rose-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <Button size="sm" variant="outline" onClick={resetPreventDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Check if Preventable</AlertTitle>
            <AlertDescription>
              Not all events can be prevented. Check <code className="text-xs">e.cancelable</code> before calling <code className="text-xs">preventDefault()</code>. If <code className="text-xs">false</code>, preventDefault won&apos;t work.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* stopPropagation() Deep Dive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowUpCircle className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            2. stopPropagation() - Stop Event Bubbling
          </CardTitle>
          <CardDescription className="text-base">
            Prevent the event from reaching parent elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Usage */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">How It Works</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML:
// <div id="parent">
//   <button id="child">Click</button>
// </div>

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent clicked');
  // This won't fire if child stops propagation
});

child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked');
  // Event stops here, doesn't bubble to parent
});

// Click button:
// Output: "Child clicked"
// (Parent listener doesn't fire)`}</pre>
            </div>

            {/* Modal Pattern */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Modal/Dropdown Pattern</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Common use: Click outside to close
const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');

// Prevent modal from closing when clicking inside
modal.addEventListener('click', (e) => {
  e.stopPropagation();
  // Event stops here
});

// Close when clicking backdrop (outside modal)
modalBackdrop.addEventListener('click', () => {
  closeModal();
});

// Also works for dropdowns
dropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  closeAllDropdowns();
});`}</pre>
            </div>

            {/* Nested Clickable */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Nested Clickable Elements</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Card with delete button
const card = document.querySelector('.card');
const deleteBtn = document.querySelector('.delete-btn');

// Card click navigates
card.addEventListener('click', () => {
  window.location.href = '/details';
});

// Delete button should NOT navigate
deleteBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  deleteCard();
  // Card click doesn't fire
});

// Use case: List items with actions
listItem.addEventListener('click', () => {
  selectItem();
});

actionButton.addEventListener('click', (e) => {
  e.stopPropagation();
  performAction();
});`}</pre>
            </div>

            {/* stopImmediatePropagation */}
            <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3">stopImmediatePropagation()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// More aggressive: stops ALL listeners
button.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('First listener');
  // Other listeners on same element won't fire
});

button.addEventListener('click', () => {
  console.log('Second listener');
  // This won't run!
});

button.addEventListener('click', () => {
  console.log('Third listener');
  // This won't run either!
});

// Click button:
// Output: "First listener"
// (Only first listener executes)

// Also prevents bubbling to parents!`}</pre>
            </div>
          </div>

          {/* Live stopPropagation Demo */}
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Live Demo - stopPropagation()
            </h4>
            <div className="space-y-4">
              <div 
                className="p-8 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-lg border-2 border-amber-400 cursor-pointer"
                onClick={() => setStopLog(prev => [...prev, 'Parent clicked (should NOT appear!)'])}
              >
                <p className="text-center font-semibold text-amber-900 dark:text-amber-100 mb-4">
                  Parent (will not receive click)
                </p>
                <button
                  className="w-full px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    setStopLog(prev => [...prev, 'Child clicked - propagation stopped!']);
                  }}
                >
                  Click Me (stops propagation)
                </button>
              </div>
              
              {stopLog.length > 0 && (
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p className="font-semibold text-sm mb-2">Event Log:</p>
                  <div className="space-y-1">
                    {stopLog.map((log, index) => (
                      <p key={index} className="text-xs font-mono text-blue-600 dark:text-blue-400">
                        → {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <Button size="sm" variant="outline" onClick={resetStopDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Demo
              </Button>
              <p className="text-xs text-muted-foreground">
                💡 Notice: Only the child&apos;s listener fires, parent listener never executes!
              </p>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning: Breaks Event Delegation</AlertTitle>
            <AlertDescription>
              Using <code className="text-xs">stopPropagation()</code> can break event delegation patterns. Use sparingly and only when necessary. Consider checking <code className="text-xs">e.target</code> instead.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* stopImmediatePropagation() Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-orange-600/80 dark:text-orange-400/80" />
            stopImmediatePropagation() - Advanced Control
          </CardTitle>
          <CardDescription className="text-base">
            The most aggressive method - stops ALL listeners including same element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
            <h4 className="font-semibold mb-3">What Makes It Different?</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// stopPropagation() - stops parent listeners
button.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('First');
});

button.addEventListener('click', () => {
  console.log('Second'); // ✓ Still runs!
});

button.addEventListener('click', () => {
  console.log('Third');  // ✓ Still runs!
});
// Output: First, Second, Third

// stopImmediatePropagation() - stops EVERYTHING
button.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('First');
});

button.addEventListener('click', () => {
  console.log('Second'); // ✗ Doesn't run!
});

button.addEventListener('click', () => {
  console.log('Third');  // ✗ Doesn't run!
});
// Output: First (only!)`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Override Plugin */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Override Third-Party Plugins</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Plugin adds its own listener
somePlugin.init(element);
// Plugin's listener is registered first

// Override plugin behavior
element.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('My handler runs first');
  
  // Plugin's listener won't fire
  // Do your custom behavior instead
  customBehavior();
}, true); // Use capture to run BEFORE plugin

// Use case: Fix buggy plugins
// Use case: Temporary override during testing
// Use case: A/B testing different behaviors`}</pre>
            </div>

            {/* Example 2: Prevent Multiple Submissions */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Prevent Double Submission</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`let isSubmitting = false;

// First listener: Guard
button.addEventListener('click', (e) => {
  if (isSubmitting) {
    e.stopImmediatePropagation();
    console.log('Already submitting!');
    return;
  }
  
  isSubmitting = true;
  // Other listeners will run
});

// Second listener: Actual submission
button.addEventListener('click', async () => {
  console.log('Submitting...');
  
  try {
    await submitForm();
    console.log('Success!');
  } finally {
    isSubmitting = false;
  }
});

// Third listener: Analytics
button.addEventListener('click', () => {
  trackEvent('button_clicked');
});`}</pre>
            </div>

            {/* Example 3: Priority Listeners */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Priority Event Handling</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// High priority: Security check
button.addEventListener('click', (e) => {
  if (!isUserAuthorized()) {
    e.stopImmediatePropagation();
    e.preventDefault();
    
    showAuthError();
    redirectToLogin();
    return;
  }
  // If authorized, other listeners run
});

// Medium priority: Validation
button.addEventListener('click', (e) => {
  if (!isFormValid()) {
    e.stopImmediatePropagation();
    showValidationErrors();
    return;
  }
});

// Low priority: Action
button.addEventListener('click', () => {
  performAction();
});

// Order matters! First listener has veto power`}</pre>
            </div>

            {/* Example 4: Conditional Handler */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Feature Toggle/Debug Mode</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Debug mode override
if (window.DEBUG_MODE) {
  document.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    
    console.log('DEBUG: Click intercepted');
    console.log('Target:', e.target);
    console.log('Event:', e);
    
    // Optionally allow through
    if (confirm('Allow this click?')) {
      // Manually trigger other handlers
      const clonedEvent = new MouseEvent('click', e);
      e.target.dispatchEvent(clonedEvent);
    }
  }, true); // Capture phase to intercept first
}

// Feature flag: Disable feature temporarily
if (featureFlags.disableCheckout) {
  checkoutBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    showMaintenanceMessage();
  });
}`}</pre>
            </div>

            {/* Example 5: Event Throttling */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">Throttle Event Handling</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`let lastClickTime = 0;
const THROTTLE_MS = 1000;

// First listener: Throttle guard
button.addEventListener('click', (e) => {
  const now = Date.now();
  
  if (now - lastClickTime < THROTTLE_MS) {
    e.stopImmediatePropagation();
    console.log('Too fast! Wait...');
    return;
  }
  
  lastClickTime = now;
  // Other listeners will run
});

// Second listener: Expensive operation
button.addEventListener('click', () => {
  console.log('Performing expensive operation...');
  expensiveApiCall();
});

// Prevents spam clicking
// Alternative to debounce for certain cases`}</pre>
            </div>

            {/* Example 6: Listener Chain Control */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Listener Chain Control</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Complex form with multiple validation steps
const validators = [];

// Step 1: Check required fields
validators.push((e) => {
  if (!allFieldsFilled()) {
    e.stopImmediatePropagation();
    showError('Please fill all fields');
    return false;
  }
  return true;
});

// Step 2: Check email format
validators.push((e) => {
  if (!isValidEmail(email.value)) {
    e.stopImmediatePropagation();
    showError('Invalid email');
    return false;
  }
  return true;
});

// Step 3: Check password strength
validators.push((e) => {
  if (!isStrongPassword(password.value)) {
    e.stopImmediatePropagation();
    showError('Weak password');
    return false;
  }
  return true;
});

// Register all validators
validators.forEach(validator => {
  form.addEventListener('submit', validator);
});

// Final handler: Submit
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Only runs if all validators passed
  await submitForm();
});`}</pre>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Use Sparingly!</AlertTitle>
            <AlertDescription>
              <code className="text-xs">stopImmediatePropagation()</code> is the most aggressive method. It should only be used when you need absolute control over event handling. In most cases, <code className="text-xs">stopPropagation()</code> or checking <code className="text-xs">e.target</code> is better.
            </AlertDescription>
          </Alert>

          <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
            <h4 className="font-semibold mb-3">When to Use stopImmediatePropagation()</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">✅ Good Use Cases:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Override buggy third-party plugins</li>
                  <li>• Prevent double-submission guards</li>
                  <li>• Security/authorization checks</li>
                  <li>• Debug/testing mode overrides</li>
                  <li>• Feature flags/A-B testing</li>
                  <li>• Throttling spam clicks</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-rose-600 dark:text-rose-400 mb-2">❌ Avoid For:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Normal event handling</li>
                  <li>• When stopPropagation() is enough</li>
                  <li>• Event delegation patterns</li>
                  <li>• Reusable components</li>
                  <li>• General application code</li>
                  <li>• Analytics/tracking listeners</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Difference Explained */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            The Critical Difference
          </CardTitle>
          <CardDescription className="text-base">
            Side-by-side comparison to eliminate confusion
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                preventDefault()
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">What it affects:</p>
                  <p className="text-muted-foreground">The browser&apos;s default action for that element</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">When to use:</p>
                  <p className="text-muted-foreground">When you want to override browser behavior</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Examples:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Form submit → AJAX instead</li>
                    <li>• Link click → SPA routing</li>
                    <li>• Context menu → custom menu</li>
                    <li>• Keyboard → custom shortcuts</li>
                  </ul>
                </div>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`link.addEventListener('click', (e) => {
  e.preventDefault();
  // Stops: navigation
  // Doesn't stop: bubbling
});`}</pre>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <ArrowUpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                stopPropagation()
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">What it affects:</p>
                  <p className="text-muted-foreground">The event flow through the DOM tree</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">When to use:</p>
                  <p className="text-muted-foreground">When you don&apos;t want parent listeners to fire</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Examples:</p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Modal → prevent close on inside click</li>
                    <li>• Dropdown → prevent close on menu click</li>
                    <li>• Nested buttons → prevent parent action</li>
                    <li>• Card with actions → isolate button click</li>
                  </ul>
                </div>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`child.addEventListener('click', (e) => {
  e.stopPropagation();
  // Stops: event bubbling
  // Doesn't stop: default action
});`}</pre>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold mb-3">Can You Use Both?</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Yes! Often used together
link.addEventListener('click', (e) => {
  e.preventDefault();      // Stop navigation
  e.stopPropagation();     // Stop bubbling
  
  // Now handle the click your way
  loadPageContent(link.href);
});

// Common in frameworks
button.addEventListener('click', (e) => {
  e.preventDefault();      // Prevent any default
  e.stopPropagation();     // Isolate this component
  
  handleButtonClick();
});

// Use case: Form button in a clickable card
deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();      // Don't submit form
  e.stopPropagation();     // Don't trigger card click
  
  deleteItem();
});`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you&apos;ll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                SPA Router (preventDefault)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Intercept all internal links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  
  if (!link) return;
  
  const href = link.getAttribute('href');
  
  // Only intercept internal links
  if (href && href.startsWith('/')) {
    e.preventDefault();
    
    // Update URL without reload
    history.pushState(null, '', href);
    
    // Load new content
    loadPage(href);
  }
});

// Framework-style routing
window.addEventListener('popstate', () => {
  loadPage(location.pathname);
});`}</pre>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Modal System (stopPropagation)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close');

function openModal() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

// Don't close when clicking modal content
modal.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close when clicking backdrop
backdrop.addEventListener('click', closeModal);

// Close button
closeBtn.addEventListener('click', closeModal);`}</pre>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Form Validation (preventDefault)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Validate
  const errors = validateForm(data);
  
  if (errors.length > 0) {
    showErrors(errors);
    return;
  }
  
  // Show loading
  showLoading();
  
  // Submit via API
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    
    const result = await response.json();
    showSuccess(result);
    
  } catch (error) {
    showError(error);
  } finally {
    hideLoading();
  }
});`}</pre>
            </div>

            {/* Example 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Card with Actions (Both)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Clickable card with action buttons
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
  // Card click = view details
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    window.location.href = \`/product/\${id}\`;
  });
  
  // Add to cart button
  const addBtn = card.querySelector('.add-to-cart');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();      // Just in case
    e.stopPropagation();     // Don't navigate!
    
    addToCart(card.dataset.id);
    showToast('Added to cart');
  });
  
  // Delete button (admin)
  const deleteBtn = card.querySelector('.delete');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (confirm('Delete product?')) {
        deleteProduct(card.dataset.id);
      }
    });
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
            Professional patterns for event control
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
                <li>• Use <code className="text-xs">preventDefault()</code> for form submissions</li>
                <li>• Use <code className="text-xs">preventDefault()</code> for SPA navigation</li>
                <li>• Check <code className="text-xs">e.cancelable</code> before preventing</li>
                <li>• Use <code className="text-xs">stopPropagation()</code> for modals/dropdowns</li>
                <li>• Use both when needed (they&apos;re independent)</li>
                <li>• Check <code className="text-xs">e.target</code> before stopping propagation</li>
                <li>• Document why you&apos;re stopping propagation</li>
                <li>• Test with keyboard navigation too</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t confuse the two methods!</li>
                <li>• Don&apos;t overuse <code className="text-xs">stopPropagation()</code></li>
                <li>• Don&apos;t prevent events that can&apos;t be prevented</li>
                <li>• Don&apos;t break event delegation unnecessarily</li>
                <li>• Don&apos;t use <code className="text-xs">return false</code> (jQuery pattern)</li>
                <li>• Don&apos;t prevent all events globally</li>
                <li>• Don&apos;t forget accessibility implications</li>
                <li>• Don&apos;t use when checking <code className="text-xs">e.target</code> works better</li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3">Quick Reference</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Method</th>
                    <th className="text-left p-2 font-semibold">Stops</th>
                    <th className="text-left p-2 font-semibold">Use Case</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">preventDefault()</code></td>
                    <td className="p-2">Browser&apos;s default action</td>
                    <td className="p-2">Forms, links, context menu</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code className="text-xs">stopPropagation()</code></td>
                    <td className="p-2">Event bubbling to parents</td>
                    <td className="p-2">Modals, nested clicks</td>
                  </tr>
                  <tr>
                    <td className="p-2"><code className="text-xs">stopImmediatePropagation()</code></td>
                    <td className="p-2">All listeners + bubbling</td>
                    <td className="p-2">Very rare, override plugins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Golden Rule</AlertTitle>
            <AlertDescription>
              If you&apos;re preventing the browser from doing something → use <code className="text-xs">preventDefault()</code>. If you&apos;re preventing parents from handling the event → use <code className="text-xs">stopPropagation()</code>. They solve different problems!
            </AlertDescription>
          </Alert>
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
            Experiment with both methods in real-time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this playground to see preventDefault and stopPropagation in action. Try different combinations and see what happens!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open preventDefault & stopPropagation Explorer
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
