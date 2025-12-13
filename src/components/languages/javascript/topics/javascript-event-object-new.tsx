'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Target,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react';

export default function JavaScriptEventObjectNew() {
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
        icon={Target}
        category="JavaScript DOM"
        title="Event Object"
        description="Access detailed information about events with the event object"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Event Object?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                When an event fires, JavaScript automatically creates an <strong className="text-indigo-700 dark:text-indigo-400">event object</strong> containing details about what happened. Access it through the first parameter of your event handler!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800/30">
            <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-lg">Always Available</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              The event object is automatically passed to your handler function. You can name the parameter anything (commonly <code>e</code>, <code>evt</code>, or <code>event</code>).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Properties */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Essential Event Properties</h2>

        {/* event.target vs event.currentTarget */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>event.target vs event.currentTarget</CardTitle>
            <CardDescription>Understanding which element triggered vs which element is handling</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', function(e) {
  // target: element that was actually clicked
  // currentTarget: element with the listener
  console.log('Target:', e.target.id);
  console.log('CurrentTarget:', e.currentTarget.id);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'target-dark' : 'target-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #parent { padding: 30px; background: ${isDarkMode ? '#3b82f6' : '#dbeafe'}; border-radius: 12px; cursor: pointer; }
    #child { padding: 20px; background: ${isDarkMode ? '#8b5cf6' : '#fae8ff'}; border-radius: 8px; text-align: center; font-weight: 600; color: ${isDarkMode ? 'white' : '#581c87'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 13px; font-family: monospace; }
  </style>
</head>
<body>
  <div id="parent">
    <div id="child">Click me or the blue area!</div>
  </div>
  <div id="output">Click to see target vs currentTarget...</div>
  
  <script>
    const parent = document.querySelector('#parent');
    const output = document.querySelector('#output');
    
    parent.addEventListener('click', function(e) {
      output.innerHTML = 
        '🎯 <strong>target</strong>: ' + e.target.id + '<br>' +
        '📍 <strong>currentTarget</strong>: ' + e.currentTarget.id + '<br><br>' +
        '<em>Target = what you clicked<br>CurrentTarget = element with listener</em>';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="Target Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* event.type */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>event.type</CardTitle>
            <CardDescription>Identify which type of event occurred</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const button = document.querySelector('#btn');

function handleEvent(e) {
  console.log('Event type:', e.type);
}

button.addEventListener('click', handleEvent);
button.addEventListener('mouseenter', handleEvent);
button.addEventListener('mouseleave', handleEvent);`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'type-dark' : 'type-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    button { padding: 20px 40px; background: #8b5cf6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 16px; transition: all 0.3s; }
    button:hover { background: #7c3aed; transform: scale(1.05); }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; min-height: 60px; font-family: monospace; font-size: 14px; }
  </style>
</head>
<body>
  <button id="btn">Interact with me!</button>
  <div id="output">Try clicking or hovering...</div>
  
  <script>
    const button = document.querySelector('#btn');
    const output = document.querySelector('#output');
    
    function handleEvent(e) {
      const now = new Date().toLocaleTimeString();
      output.innerHTML = 
        '📋 <strong>Event Type:</strong> ' + e.type + '<br>' +
        '⏰ <strong>Time:</strong> ' + now;
    }
    
    button.addEventListener('click', handleEvent);
    button.addEventListener('mouseenter', handleEvent);
    button.addEventListener('mouseleave', handleEvent);
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Event Type Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* event.preventDefault() */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>event.preventDefault()</CardTitle>
            <CardDescription>Stop the browser's default behavior</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form submission
  
  const input = document.querySelector('#email');
  console.log('Email:', input.value);
  console.log('Form NOT submitted to server');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'prevent-dark' : 'prevent-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; gap: 10px; }
    input { flex: 1; padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #10b981; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #059669; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <form id="myForm">
    <input type="email" id="email" placeholder="Enter email..." required>
    <button type="submit">Submit</button>
  </form>
  <div id="output">✋ Form submission prevented! Page won't reload.</div>
  
  <script>
    const form = document.querySelector('#myForm');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = document.querySelector('#email');
      output.innerHTML = 
        '✅ <strong>preventDefault()</strong> called!<br>' +
        '📧 Email: ' + input.value + '<br>' +
        '🚫 Form NOT sent to server (page didn\\'t reload)';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="PreventDefault Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mouse Event Properties */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">Mouse Event Properties</h2>

        {/* Mouse Coordinates */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800">
          <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/10">
            <CardTitle>Mouse Coordinates</CardTitle>
            <CardDescription>clientX/Y, pageX/Y, screenX/Y, offsetX/Y</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const box = document.querySelector('#box');

box.addEventListener('mousemove', function(e) {
  console.log('clientX:', e.clientX);  // Viewport
  console.log('clientY:', e.clientY);
  console.log('pageX:', e.pageX);      // Document
  console.log('pageY:', e.pageY);
  console.log('offsetX:', e.offsetX);  // Element
  console.log('offsetY:', e.offsetY);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'mouse-dark' : 'mouse-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #box { padding: 60px; background: linear-gradient(135deg, ${isDarkMode ? '#06b6d4' : '#a5f3fc'}, ${isDarkMode ? '#3b82f6' : '#93c5fd'}); border-radius: 12px; cursor: crosshair; text-align: center; font-weight: 600; font-size: 18px; color: ${isDarkMode ? 'white' : '#1e293b'}; border: 3px dashed ${isDarkMode ? '#0891b2' : '#0e7490'}; }
    #output { padding: 12px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 12px; line-height: 1.6; }
  </style>
</head>
<body>
  <div id="box">Move mouse here!</div>
  <div id="output">Coordinates will appear here...</div>
  
  <script>
    const box = document.querySelector('#box');
    const output = document.querySelector('#output');
    
    box.addEventListener('mousemove', function(e) {
      output.innerHTML = 
        '📍 <strong>clientX/Y:</strong> ' + e.clientX + ', ' + e.clientY + ' <em>(viewport)</em><br>' +
        '📄 <strong>pageX/Y:</strong> ' + e.pageX + ', ' + e.pageY + ' <em>(document)</em><br>' +
        '📦 <strong>offsetX/Y:</strong> ' + e.offsetX + ', ' + e.offsetY + ' <em>(element)</em>';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-cyan-300 dark:border-cyan-700"
                  title="Mouse Coordinates Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mouse Buttons */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10">
            <CardTitle>event.button</CardTitle>
            <CardDescription>Detect which mouse button was clicked</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const box = document.querySelector('#box');

box.addEventListener('mousedown', function(e) {
  // 0 = left, 1 = middle, 2 = right
  if (e.button === 0) {
    console.log('Left click');
  } else if (e.button === 2) {
    console.log('Right click');
  }
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'button-dark' : 'button-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #box { padding: 50px; background: ${isDarkMode ? '#4f46e5' : '#e0e7ff'}; border-radius: 12px; cursor: pointer; text-align: center; font-weight: 600; font-size: 18px; color: ${isDarkMode ? 'white' : '#3730a3'}; border: 3px solid ${isDarkMode ? '#6366f1' : '#818cf8'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 14px; font-weight: 500; }
  </style>
</head>
<body>
  <div id="box">Click with any mouse button!</div>
  <div id="output">Try left, right, or middle click...</div>
  
  <script>
    const box = document.querySelector('#box');
    const output = document.querySelector('#output');
    
    box.addEventListener('mousedown', function(e) {
      let buttonName = '';
      if (e.button === 0) buttonName = 'Left';
      else if (e.button === 1) buttonName = 'Middle';
      else if (e.button === 2) buttonName = 'Right';
      
      output.innerHTML = 
        '🖱️ <strong>Button:</strong> ' + buttonName + ' (' + e.button + ')<br>' +
        '<em>0 = Left, 1 = Middle, 2 = Right</em>';
    });
    
    box.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-indigo-300 dark:border-indigo-700"
                  title="Mouse Button Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Keyboard Event Properties */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">Keyboard Event Properties</h2>

        {/* Key Properties */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>event.key & event.code</CardTitle>
            <CardDescription>Identify which key was pressed</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const input = document.querySelector('#input');

input.addEventListener('keydown', function(e) {
  console.log('key:', e.key);      // 'a', 'A', '1'
  console.log('code:', e.code);    // 'KeyA', 'Digit1'
  console.log('altKey:', e.altKey);
  console.log('ctrlKey:', e.ctrlKey);
  console.log('shiftKey:', e.shiftKey);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'key-dark' : 'key-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    input { width: 100%; padding: 12px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 14px; }
    input:focus { outline: none; border-color: #f59e0b; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <input type="text" id="input" placeholder="Press any key...">
  <div id="output">Key details will appear here...</div>
  
  <script>
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    
    input.addEventListener('keydown', function(e) {
      const modifiers = [];
      if (e.altKey) modifiers.push('Alt');
      if (e.ctrlKey) modifiers.push('Ctrl');
      if (e.shiftKey) modifiers.push('Shift');
      
      output.innerHTML = 
        '⌨️ <strong>key:</strong> ' + e.key + '<br>' +
        '🔤 <strong>code:</strong> ' + e.code + '<br>' +
        '🎛️ <strong>Modifiers:</strong> ' + (modifiers.length ? modifiers.join(' + ') : 'None');
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="Keyboard Properties Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reference */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-rose-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Event Object Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-3">Common Properties</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-blue-600 dark:text-blue-400">e.target</code> - Element that triggered event</li>
                  <li><code className="text-blue-600 dark:text-blue-400">e.currentTarget</code> - Element with listener</li>
                  <li><code className="text-blue-600 dark:text-blue-400">e.type</code> - Event type (click, keydown, etc.)</li>
                  <li><code className="text-blue-600 dark:text-blue-400">e.preventDefault()</code> - Stop default behavior</li>
                  <li><code className="text-blue-600 dark:text-blue-400">e.stopPropagation()</code> - Stop bubbling</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
                <h4 className="font-semibold mb-3">Mouse Properties</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-cyan-600 dark:text-cyan-400">e.clientX/Y</code> - Position in viewport</li>
                  <li><code className="text-cyan-600 dark:text-cyan-400">e.pageX/Y</code> - Position in document</li>
                  <li><code className="text-cyan-600 dark:text-cyan-400">e.offsetX/Y</code> - Position in element</li>
                  <li><code className="text-cyan-600 dark:text-cyan-400">e.button</code> - Which button (0/1/2)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-3">Keyboard Properties</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-orange-600 dark:text-orange-400">e.key</code> - Character pressed (a, A, 1)</li>
                  <li><code className="text-orange-600 dark:text-orange-400">e.code</code> - Physical key (KeyA)</li>
                  <li><code className="text-orange-600 dark:text-orange-400">e.altKey</code> - Alt pressed?</li>
                  <li><code className="text-orange-600 dark:text-orange-400">e.ctrlKey</code> - Ctrl pressed?</li>
                  <li><code className="text-orange-600 dark:text-orange-400">e.shiftKey</code> - Shift pressed?</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-3">Form Properties</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-green-600 dark:text-green-400">e.target.value</code> - Input value</li>
                  <li><code className="text-green-600 dark:text-green-400">e.target.checked</code> - Checkbox state</li>
                  <li><code className="text-green-600 dark:text-green-400">e.target.selectedIndex</code> - Select index</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Always use <code>e.preventDefault()</code> on form submit events to handle data with JavaScript instead of page reload!
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
                <li>• Use <strong>e.preventDefault()</strong> to stop defaults</li>
                <li>• Use <strong>e.target</strong> to get clicked element</li>
                <li>• Check <strong>e.type</strong> for event identification</li>
                <li>• Use <strong>e.key</strong> instead of deprecated keyCode</li>
                <li>• Name parameter consistently (e, event, evt)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not use deprecated <strong>keyCode</strong></li>
                <li>• Don not forget to call <strong>preventDefault()</strong></li>
                <li>• Don not confuse <strong>target</strong> with <strong>currentTarget</strong></li>
                <li>• Don not access properties without checking existence</li>
                <li>• Don not use <strong>returnValue</strong> (deprecated)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
