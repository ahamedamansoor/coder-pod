'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ShieldX,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Ban,
  StopCircle,
} from 'lucide-react';

export default function JavaScriptPreventDefaultNew() {
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
        icon={ShieldX}
        category="JavaScript DOM"
        title="preventDefault & stopPropagation"
        description="Control browser defaults and event flow"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-rose-50/30 to-pink-50/20 dark:from-red-950/10 dark:via-rose-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400 to-rose-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Controlling Event Behavior
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript gives you <strong className="text-red-700 dark:text-red-400">powerful control</strong> over events. You can stop the browser's default actions and control how events propagate through the DOM!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <Ban className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">preventDefault()</h4>
              <p className="text-sm text-muted-foreground">Stop browser default behavior</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <StopCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-1">stopPropagation()</h4>
              <p className="text-sm text-muted-foreground">Stop event bubbling</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <AlertTriangle className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-1">stopImmediatePropagation()</h4>
              <p className="text-sm text-muted-foreground">Stop ALL handlers</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* preventDefault Examples */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">preventDefault()</h2>

        {/* Form Submit */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>Preventing Form Submission</CardTitle>
            <CardDescription>Stop forms from reloading the page</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop page reload!
  
  const formData = new FormData(form);
  const name = formData.get('name');
  
  console.log('Form submitted:', name);
  // Now handle with JavaScript/AJAX
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'form-dark' : 'form-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 10px; }
    input { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #10b981; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #059669; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <form id="myForm">
    <input type="text" name="name" placeholder="Enter your name" required>
    <button type="submit">Submit (No Page Reload!)</button>
  </form>
  <div id="output">Submit the form - page won't reload!</div>
  
  <script>
    const form = document.querySelector('#myForm');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      output.innerHTML = 
        '✅ <strong>preventDefault()</strong> called!<br>' +
        '📝 Name: ' + name + '<br>' +
        '🚫 Page did NOT reload!';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="Form preventDefault Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link Click */}
        <Card className="border-2 border-teal-200 dark:border-teal-800">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/10">
            <CardTitle>Preventing Link Navigation</CardTitle>
            <CardDescription>Stop links from navigating to another page</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const link = document.querySelector('#myLink');

link.addEventListener('click', function(e) {
  e.preventDefault(); // Stop navigation!
  
  const url = this.getAttribute('href');
  console.log('Would navigate to:', url);
  
  // Handle with JavaScript instead
  alert('Navigation prevented!');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'link-dark' : 'link-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    a { display: inline-block; padding: 12px 24px; background: #14b8a6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s; }
    a:hover { background: #0d9488; transform: scale(1.05); }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#134e4a' : '#ccfbf1'}; color: ${isDarkMode ? '#5eead4' : '#0f766e'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <a href="https://example.com" id="myLink">Click Me (Won't Navigate!)</a>
  <div id="output">Click the link - no navigation will happen!</div>
  
  <script>
    const link = document.querySelector('#myLink');
    const output = document.querySelector('#output');
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      output.innerHTML = 
        '✅ <strong>preventDefault()</strong> called!<br>' +
        '🔗 Would go to: ' + url + '<br>' +
        '🚫 Navigation prevented!';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-teal-300 dark:border-teal-700"
                  title="Link preventDefault Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Context Menu */}
        <Card className="border-2 border-amber-200 dark:border-amber-800">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10">
            <CardTitle>Preventing Context Menu</CardTitle>
            <CardDescription>Stop right-click menu from appearing</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const box = document.querySelector('#box');

box.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Stop right-click menu
  
  console.log('Custom context menu!');
  // Show your own menu instead
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'context-dark' : 'context-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #box { padding: 50px; background: ${isDarkMode ? '#f59e0b' : '#fef3c7'}; border-radius: 12px; text-align: center; font-weight: 600; cursor: pointer; border: 3px dashed ${isDarkMode ? '#d97706' : '#f59e0b'}; color: ${isDarkMode ? 'white' : '#78350f'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <div id="box">Right-click me!</div>
  <div id="output">Try right-clicking the box...</div>
  
  <script>
    const box = document.querySelector('#box');
    const output = document.querySelector('#output');
    
    box.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      output.innerHTML = 
        '✅ <strong>preventDefault()</strong> on contextmenu!<br>' +
        '🖱️ Right-click menu blocked<br>' +
        '💡 You could show custom menu here';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-amber-300 dark:border-amber-700"
                  title="Context Menu preventDefault Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* stopPropagation */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">stopPropagation()</h2>

        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>Stop Event Bubbling</CardTitle>
            <CardDescription>Prevent parent handlers from executing</CardDescription>
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
  // This will NOT run when child is clicked
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
    #parent { padding: 30px; background: ${isDarkMode ? '#3b82f6' : '#dbeafe'}; border-radius: 12px; cursor: pointer; }
    #child { padding: 30px; background: ${isDarkMode ? '#0ea5e9' : '#bae6fd'}; border-radius: 8px; text-align: center; font-weight: 600; color: ${isDarkMode ? 'white' : '#0c4a6e'}; }
    .buttons { display: flex; gap: 10px; margin-bottom: 15px; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
    .with { background: #ef4444; color: white; }
    .without { background: #10b981; color: white; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="buttons">
    <button class="with" id="withStop">With stopPropagation()</button>
    <button class="without" id="withoutStop">Without stopPropagation()</button>
  </div>
  <div id="parent">
    Parent (click me too)
    <div id="child">Child (click me)</div>
  </div>
  <div id="output">Choose a mode and click...</div>
  
  <script>
    const parent = document.querySelector('#parent');
    const child = document.querySelector('#child');
    const output = document.querySelector('#output');
    let useStop = false;
    
    document.querySelector('#withStop').addEventListener('click', () => {
      useStop = true;
      output.innerHTML = '🛑 Mode: <strong>WITH</strong> stopPropagation()<br>Click child now...';
    });
    
    document.querySelector('#withoutStop').addEventListener('click', () => {
      useStop = false;
      output.innerHTML = '✅ Mode: <strong>WITHOUT</strong> stopPropagation()<br>Click child now...';
    });
    
    child.addEventListener('click', function(e) {
      const log = ['✅ Child handler executed'];
      if (useStop) {
        e.stopPropagation();
        log.push('🛑 stopPropagation() called');
        log.push('❌ Parent handler will NOT run');
      } else {
        log.push('⬆️ Event will bubble to parent');
      }
      output.innerHTML = log.join('<br>');
    });
    
    parent.addEventListener('click', function() {
      output.innerHTML += '<br>✅ Parent handler executed';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="stopPropagation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* stopImmediatePropagation */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">stopImmediatePropagation()</h2>

        <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
          <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <AlertTitle className="text-lg">What's the Difference?</AlertTitle>
          <AlertDescription className="text-base leading-relaxed">
            <strong>stopPropagation()</strong> stops bubbling to parents but allows other handlers on the SAME element to run. <strong>stopImmediatePropagation()</strong> stops EVERYTHING - no parent handlers AND no other handlers on the same element!
          </AlertDescription>
        </Alert>

        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>Stop ALL Event Handlers</CardTitle>
            <CardDescription>Prevents remaining handlers on same element AND parent handlers</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const button = document.querySelector('#btn');

// First handler
button.addEventListener('click', function(e) {
  console.log('Handler 1 executed');
  e.stopImmediatePropagation(); // STOP ALL!
});

// Second handler - WON'T RUN!
button.addEventListener('click', function() {
  console.log('Handler 2 executed');
});

// Third handler - WON'T RUN!
button.addEventListener('click', function() {
  console.log('Handler 3 executed');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'immediate-dark' : 'immediate-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    .buttons { display: flex; gap: 10px; margin-bottom: 15px; }
    .buttons button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; }
    .stop { background: #ef4444; color: white; }
    .immediate { background: #8b5cf6; color: white; }
    .none { background: #10b981; color: white; }
    #btn { padding: 20px 40px; background: #8b5cf6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 16px; }
    #btn:hover { background: #7c3aed; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="buttons">
    <button class="immediate" id="useImmediate">stopImmediatePropagation()</button>
    <button class="stop" id="useStop">stopPropagation()</button>
    <button class="none" id="useNone">No stopping</button>
  </div>
  <button id="btn">Click Me!</button>
  <div id="output">Choose a mode and click the button...</div>
  
  <script>
    const btn = document.querySelector('#btn');
    const output = document.querySelector('#output');
    let mode = 'none';
    
    document.querySelector('#useImmediate').addEventListener('click', () => {
      mode = 'immediate';
      output.innerHTML = '🚨 Mode: <strong>stopImmediatePropagation()</strong><br>Click button now...';
    });
    
    document.querySelector('#useStop').addEventListener('click', () => {
      mode = 'stop';
      output.innerHTML = '🛑 Mode: <strong>stopPropagation()</strong><br>Click button now...';
    });
    
    document.querySelector('#useNone').addEventListener('click', () => {
      mode = 'none';
      output.innerHTML = '✅ Mode: <strong>No stopping</strong><br>Click button now...';
    });
    
    // Handler 1
    btn.addEventListener('click', function(e) {
      const log = ['1️⃣ Handler 1 executed'];
      if (mode === 'immediate') {
        e.stopImmediatePropagation();
        log.push('🚨 stopImmediatePropagation() called!');
        log.push('❌ Handlers 2 & 3 will NOT run');
      } else if (mode === 'stop') {
        e.stopPropagation();
        log.push('🛑 stopPropagation() called');
        log.push('✅ Handlers 2 & 3 will still run');
      }
      output.innerHTML = log.join('<br>');
    });
    
    // Handler 2
    btn.addEventListener('click', function() {
      output.innerHTML += '<br>2️⃣ Handler 2 executed';
    });
    
    // Handler 3
    btn.addEventListener('click', function() {
      output.innerHTML += '<br>3️⃣ Handler 3 executed';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="stopImmediatePropagation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10">
            <CardTitle>Comparison: stopPropagation vs stopImmediatePropagation</CardTitle>
            <CardDescription>See the difference side by side</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* stopPropagation */}
              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">stopPropagation()</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Other handlers on SAME element still run</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Parent handlers do NOT run</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Stops bubbling phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Use when:</strong> You want to stop propagation but let other handlers on the element finish</span>
                  </li>
                </ul>
              </div>

              {/* stopImmediatePropagation */}
              <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">stopImmediatePropagation()</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Other handlers on SAME element do NOT run</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Parent handlers do NOT run</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Stops EVERYTHING immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Use when:</strong> You need complete control and want to stop all event handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reference */}
      <Card className="border-2 border-orange-300 dark:border-orange-700 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5 text-green-600 dark:text-green-400" />
                preventDefault()
              </h4>
              <p className="text-sm text-muted-foreground mb-3">Stops browser's default action</p>
              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li>• Form submission</li>
                <li>• Link navigation</li>
                <li>• Context menu</li>
                <li>• Text selection</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <StopCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                stopPropagation()
              </h4>
              <p className="text-sm text-muted-foreground mb-3">Stops event bubbling</p>
              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li>• Parent handlers don't run</li>
                <li>• Same element handlers DO run</li>
                <li>• Most common stopping method</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                stopImmediatePropagation()
              </h4>
              <p className="text-sm text-muted-foreground mb-3">Stops ALL handlers</p>
              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li>• Parent handlers don't run</li>
                <li>• Same element handlers don't run</li>
                <li>• Complete event shutdown</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use <code>preventDefault()</code> for forms (prevent reload) and <code>stopPropagation()</code> for nested elements. Use <code>stopImmediatePropagation()</code> sparingly when you need complete control!
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
                <li>• Use <strong>preventDefault()</strong> on form submit</li>
                <li>• Use <strong>stopPropagation()</strong> for nested clicks</li>
                <li>• Check if prevention is needed first</li>
                <li>• Document why you're stopping events</li>
                <li>• Prefer <strong>stopPropagation()</strong> over immediate</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not overuse <strong>stopPropagation()</strong></li>
                <li>• Don not use <strong>stopImmediatePropagation()</strong> carelessly</li>
                <li>• Don not forget to prevent defaults when needed</li>
                <li>• Don not break event delegation patterns</li>
                <li>• Don not stop events globally without reason</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
