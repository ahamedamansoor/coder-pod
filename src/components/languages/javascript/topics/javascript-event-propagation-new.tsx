'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  GitBranch,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowDown,
  ArrowUp,
  Target,
} from 'lucide-react';

export default function JavaScriptEventPropagationNew() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitBranch}
        category="JavaScript DOM"
        title="Event Propagation"
        description="Master how events travel through the DOM tree in three phases"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-yellow-50/20 dark:from-orange-950/10 dark:via-amber-950/5 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Event Propagation Flow
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                When you click an element, the event doesn't just fire on that element! It travels through the DOM in <strong className="text-orange-700 dark:text-orange-400">three distinct phases</strong>: Capture (down), Target (element), and Bubble (up).
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <ArrowDown className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-1">1. Capture Phase</h4>
              <p className="text-sm text-muted-foreground">Event travels DOWN from window to target</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <Target className="w-6 h-6 text-rose-600 dark:text-rose-400 mb-2" />
              <h4 className="font-semibold mb-1">2. Target Phase</h4>
              <p className="text-sm text-muted-foreground">Event reaches the target element</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <ArrowUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-1">3. Bubble Phase</h4>
              <p className="text-sm text-muted-foreground">Event travels UP from target to window</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Understanding Propagation</h2>

        {/* Capture Phase */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>Capture Phase (Going Down)</CardTitle>
            <CardDescription>Set capture: true to listen during capture phase</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// Capture phase (3rd parameter = true)
parent.addEventListener('click', function() {
  console.log('Parent - CAPTURE phase');
}, true);

child.addEventListener('click', function() {
  console.log('Child - TARGET phase');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'capture-dark' : 'capture-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #parent { padding: 30px; background: ${isDarkMode ? '#ea580c' : '#fed7aa'}; border-radius: 12px; cursor: pointer; }
    #child { padding: 30px; background: ${isDarkMode ? '#f59e0b' : '#fef3c7'}; border-radius: 8px; text-align: center; font-weight: 600; color: ${isDarkMode ? 'white' : '#78350f'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div id="parent">
    <div id="child">Click Me!</div>
  </div>
  <div id="output">Click to see propagation order...</div>
  
  <script>
    const parent = document.querySelector('#parent');
    const child = document.querySelector('#child');
    const output = document.querySelector('#output');
    const log = [];
    
    parent.addEventListener('click', function() {
      log.push('⬇️ Parent - CAPTURE');
    }, true);
    
    child.addEventListener('click', function() {
      log.push('🎯 Child - TARGET');
      output.innerHTML = log.join('<br>');
      setTimeout(() => { log.length = 0; }, 2000);
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="Capture Phase Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bubble Phase */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>Bubble Phase (Going Up)</CardTitle>
            <CardDescription>Default behavior - events bubble up to parent elements</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// Default is bubble phase
child.addEventListener('click', function() {
  console.log('Child - TARGET phase');
});

parent.addEventListener('click', function() {
  console.log('Parent - BUBBLE phase');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'bubble-dark' : 'bubble-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #parent { padding: 30px; background: ${isDarkMode ? '#3b82f6' : '#dbeafe'}; border-radius: 12px; cursor: pointer; }
    #child { padding: 30px; background: ${isDarkMode ? '#0ea5e9' : '#bae6fd'}; border-radius: 8px; text-align: center; font-weight: 600; color: ${isDarkMode ? 'white' : '#0c4a6e'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div id="parent">
    <div id="child">Click Me!</div>
  </div>
  <div id="output">Click to see propagation order...</div>
  
  <script>
    const parent = document.querySelector('#parent');
    const child = document.querySelector('#child');
    const output = document.querySelector('#output');
    const log = [];
    
    child.addEventListener('click', function() {
      log.push('🎯 Child - TARGET');
    });
    
    parent.addEventListener('click', function() {
      log.push('⬆️ Parent - BUBBLE');
      output.innerHTML = log.join('<br>');
      setTimeout(() => { log.length = 0; }, 2000);
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="Bubble Phase Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complete Flow */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>Complete Propagation Flow</CardTitle>
            <CardDescription>All three phases in action: Capture → Target → Bubble</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const grandparent = document.querySelector('#gp');
const parent = document.querySelector('#p');
const child = document.querySelector('#c');

// Capture phase
grandparent.addEventListener('click', () => {
  console.log('1. Grandparent CAPTURE');
}, true);

// Target phase
child.addEventListener('click', () => {
  console.log('2. Child TARGET');
});

// Bubble phase
parent.addEventListener('click', () => {
  console.log('3. Parent BUBBLE');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'complete-dark' : 'complete-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #gp { padding: 25px; background: ${isDarkMode ? '#6366f1' : '#e0e7ff'}; border-radius: 12px; }
    #p { padding: 25px; background: ${isDarkMode ? '#8b5cf6' : '#ede9fe'}; border-radius: 10px; margin-top: 10px; }
    #c { padding: 25px; background: ${isDarkMode ? '#ec4899' : '#fce7f3'}; border-radius: 8px; margin-top: 10px; text-align: center; font-weight: 600; cursor: pointer; color: ${isDarkMode ? 'white' : '#831843'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div id="gp">
    Grandparent
    <div id="p">
      Parent
      <div id="c">Click Me!</div>
    </div>
  </div>
  <div id="output">Click to see all phases...</div>
  
  <script>
    const gp = document.querySelector('#gp');
    const p = document.querySelector('#p');
    const c = document.querySelector('#c');
    const output = document.querySelector('#output');
    const log = [];
    
    gp.addEventListener('click', () => {
      log.push('⬇️ Grandparent - CAPTURE');
    }, true);
    
    c.addEventListener('click', () => {
      log.push('🎯 Child - TARGET');
    });
    
    p.addEventListener('click', () => {
      log.push('⬆️ Parent - BUBBLE');
    });
    
    gp.addEventListener('click', () => {
      log.push('⬆️ Grandparent - BUBBLE');
      output.innerHTML = log.join('<br>');
      setTimeout(() => { log.length = 0; }, 3000);
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Complete Flow Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* stopPropagation */}
        <Card className="border-2 border-red-200 dark:border-red-800">
          <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/10">
            <CardTitle>event.stopPropagation()</CardTitle>
            <CardDescription>Stop the event from propagating further</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

child.addEventListener('click', function(e) {
  console.log('Child clicked');
  e.stopPropagation(); // Stop here!
});

parent.addEventListener('click', function() {
  console.log('Parent clicked');
  // This will NOT fire!
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'stop-dark' : 'stop-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #parent { padding: 30px; background: ${isDarkMode ? '#dc2626' : '#fee2e2'}; border-radius: 12px; cursor: pointer; }
    #child { padding: 30px; background: ${isDarkMode ? '#ef4444' : '#fecaca'}; border-radius: 8px; text-align: center; font-weight: 600; color: ${isDarkMode ? 'white' : '#7f1d1d'}; }
    .buttons { display: flex; gap: 10px; margin-bottom: 15px; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; }
    .stop-btn { background: #ef4444; color: white; }
    .allow-btn { background: #10b981; color: white; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="buttons">
    <button class="stop-btn" id="stopBtn">With stopPropagation()</button>
    <button class="allow-btn" id="allowBtn">Without stopPropagation()</button>
  </div>
  <div id="parent">
    <div id="child">Click Me!</div>
  </div>
  <div id="output">Click a button first, then click the child...</div>
  
  <script>
    const parent = document.querySelector('#parent');
    const child = document.querySelector('#child');
    const output = document.querySelector('#output');
    let shouldStop = false;
    
    document.querySelector('#stopBtn').addEventListener('click', () => {
      shouldStop = true;
      output.innerHTML = '🛑 Mode: <strong>WITH</strong> stopPropagation()<br>Click child now...';
    });
    
    document.querySelector('#allowBtn').addEventListener('click', () => {
      shouldStop = false;
      output.innerHTML = '✅ Mode: <strong>WITHOUT</strong> stopPropagation()<br>Click child now...';
    });
    
    child.addEventListener('click', function(e) {
      const log = ['✅ Child clicked'];
      if (shouldStop) {
        e.stopPropagation();
        log.push('🛑 stopPropagation() called!');
        log.push('❌ Parent will NOT receive event');
      }
      output.innerHTML = log.join('<br>');
    });
    
    parent.addEventListener('click', function() {
      output.innerHTML += '<br>✅ Parent clicked (event bubbled up)';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-red-300 dark:border-red-700"
                  title="StopPropagation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Delegation */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>Event Delegation</CardTitle>
            <CardDescription>Use bubbling to handle events efficiently</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const list = document.querySelector('#list');

// One listener for all items!
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('Clicked:', e.target.textContent);
    e.target.style.backgroundColor = 'lightgreen';
  }
});

// Add new items dynamically - still works!`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'delegation-dark' : 'delegation-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #list { list-style: none; padding: 0; margin: 0; }
    #list li { padding: 12px 20px; margin: 8px 0; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; border-radius: 8px; cursor: pointer; transition: all 0.3s; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; }
    #list li:hover { border-color: #10b981; }
    button { padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; margin-bottom: 15px; }
    button:hover { background: #059669; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <button id="addBtn">Add New Item</button>
  <ul id="list">
    <li>Item 1 - Click me!</li>
    <li>Item 2 - Click me!</li>
    <li>Item 3 - Click me!</li>
  </ul>
  <div id="output">Click any item...</div>
  
  <script>
    const list = document.querySelector('#list');
    const output = document.querySelector('#output');
    let itemCount = 3;
    
    list.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        output.innerHTML = 
          '✅ Clicked: <strong>' + e.target.textContent + '</strong><br>' +
          '💡 Using event delegation (one listener for all!)';
        e.target.style.backgroundColor = '#10b981';
        e.target.style.color = 'white';
        setTimeout(() => {
          e.target.style.backgroundColor = '';
          e.target.style.color = '';
        }, 1000);
      }
    });
    
    document.querySelector('#addBtn').addEventListener('click', () => {
      itemCount++;
      const li = document.createElement('li');
      li.textContent = 'Item ' + itemCount + ' - Click me!';
      list.appendChild(li);
      output.innerHTML = '➕ New item added! Click it - delegation still works!';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="Event Delegation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reference */}
      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Propagation Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <ArrowDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  Capture Phase
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Event travels <strong>down</strong> from window</li>
                  <li>• Use <code>addEventListener(event, handler, true)</code></li>
                  <li>• Rarely used in practice</li>
                  <li>• Useful for intercepting before target</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <ArrowUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Bubble Phase
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Event travels <strong>up</strong> to window</li>
                  <li>• Default behavior (no 3rd parameter)</li>
                  <li>• Most commonly used phase</li>
                  <li>• Enables event delegation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold mb-3">Stopping Propagation</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <code className="text-red-600 dark:text-red-400">e.stopPropagation()</code> - Stop bubbling</li>
                  <li>• <code className="text-red-600 dark:text-red-400">e.stopImmediatePropagation()</code> - Stop all handlers</li>
                  <li>• Use sparingly - can break delegation</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-3">Event Delegation</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Add ONE listener to parent</li>
                  <li>• Check <code className="text-green-600 dark:text-green-400">e.target</code> to identify child</li>
                  <li>• Works for dynamic elements</li>
                  <li>• Better performance</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use <strong>event delegation</strong> instead of adding listeners to many elements. It's more efficient and works with dynamically added elements!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>event delegation</strong> for lists</li>
                <li>• Rely on <strong>bubble phase</strong> (default)</li>
                <li>• Check <strong>e.target</strong> in delegation</li>
                <li>• Use <strong>stopPropagation()</strong> when needed</li>
                <li>• Understand the propagation flow</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not use <strong>capture phase</strong> unnecessarily</li>
                <li>• Don not overuse <strong>stopPropagation()</strong></li>
                <li>• Don not add many listeners to many elements</li>
                <li>• Don not forget event delegation exists</li>
                <li>• Don not confuse <strong>target</strong> with <strong>currentTarget</strong></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
