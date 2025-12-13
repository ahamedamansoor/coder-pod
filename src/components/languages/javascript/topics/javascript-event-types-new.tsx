'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  MousePointer,
  Keyboard,
  FormInput,
  Monitor,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export default function JavaScriptEventTypesNew() {
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
        icon={MousePointer}
        category="JavaScript DOM"
        title="Event Types"
        description="Explore different types of events and when to use them"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20 dark:from-blue-950/10 dark:via-purple-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Event Categories
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript provides <strong className="text-blue-700 dark:text-blue-400">many event types</strong> for different interactions. Understanding which event to use helps you build responsive applications!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <MousePointer className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-1">Mouse Events</h4>
              <p className="text-sm text-muted-foreground">Click, hover, drag</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <Keyboard className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-1">Keyboard Events</h4>
              <p className="text-sm text-muted-foreground">Key presses, typing</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <FormInput className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">Form Events</h4>
              <p className="text-sm text-muted-foreground">Input, submit, change</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <Monitor className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-1">Window Events</h4>
              <p className="text-sm text-muted-foreground">Load, resize, scroll</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mouse Events */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Mouse Events</h2>

        {/* Click vs DblClick */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>click vs dblclick</CardTitle>
            <CardDescription>Single click vs double click detection</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const button = document.querySelector('#btn');

// Single click
button.addEventListener('click', function() {
  console.log('Single click!');
});

// Double click
button.addEventListener('dblclick', function() {
  console.log('Double click!');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'click-dark' : 'click-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    button { padding: 15px 30px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 16px; }
    button:hover { background: #2563eb; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#e2e8f0'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; min-height: 40px; font-size: 14px; }
  </style>
</head>
<body>
  <button id="btn">Click or Double Click Me!</button>
  <div id="output">Try clicking once or twice...</div>
  
  <script>
    const button = document.querySelector('#btn');
    const output = document.querySelector('#output');
    
    button.addEventListener('click', function() {
      output.textContent = '👆 Single click detected!';
      output.style.backgroundColor = '#3b82f6';
      output.style.color = 'white';
    });
    
    button.addEventListener('dblclick', function() {
      output.textContent = '👆👆 Double click detected!';
      output.style.backgroundColor = '#10b981';
      output.style.color = 'white';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="Click Events Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mouse Enter/Leave */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800">
          <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/10">
            <CardTitle>mouseenter vs mouseleave</CardTitle>
            <CardDescription>Detect when mouse enters or leaves an element</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const box = document.querySelector('#hoverBox');

box.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#10b981';
  this.textContent = '🎉 Mouse is inside!';
});

box.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#94a3b8';
  this.textContent = '👋 Mouse left!';
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'hover-dark' : 'hover-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; }
    #hoverBox { padding: 50px; background: ${isDarkMode ? '#475569' : '#94a3b8'}; border-radius: 12px; text-align: center; font-weight: 600; font-size: 18px; cursor: pointer; transition: all 0.3s; color: white; border: 3px dashed ${isDarkMode ? '#64748b' : '#cbd5e1'}; }
  </style>
</head>
<body>
  <div id="hoverBox">Hover over me!</div>
  
  <script>
    const box = document.querySelector('#hoverBox');
    const isDark = ${isDarkMode};
    
    box.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#10b981';
      this.style.borderColor = '#10b981';
      this.textContent = '🎉 Mouse is inside!';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.backgroundColor = isDark ? '#475569' : '#94a3b8';
      this.style.borderColor = isDark ? '#64748b' : '#cbd5e1';
      this.textContent = '👋 Mouse left!';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-cyan-300 dark:border-cyan-700"
                  title="Mouse Enter/Leave Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mouse Move */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10">
            <CardTitle>mousemove</CardTitle>
            <CardDescription>Track mouse position and movement</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const area = document.querySelector('#moveArea');

area.addEventListener('mousemove', function(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  
  const output = document.querySelector('#coords');
  output.textContent = \`X: \${x}, Y: \${y}\`;
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'move-dark' : 'move-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; }
    #moveArea { padding: 40px; background: ${isDarkMode ? '#1e293b' : '#e0e7ff'}; border-radius: 12px; text-align: center; font-weight: 600; cursor: crosshair; border: 2px solid ${isDarkMode ? '#475569' : '#818cf8'}; min-height: 80px; }
    #coords { margin-top: 10px; padding: 10px; background: ${isDarkMode ? '#475569' : '#94a3b8'}; color: white; border-radius: 8px; text-align: center; font-weight: 500; }
  </style>
</head>
<body>
  <div id="moveArea">Move your mouse here!</div>
  <div id="coords">X: 0, Y: 0</div>
  
  <script>
    const area = document.querySelector('#moveArea');
    const coords = document.querySelector('#coords');
    
    area.addEventListener('mousemove', function(e) {
      const x = e.offsetX;
      const y = e.offsetY;
      coords.textContent = 'X: ' + x + ', Y: ' + y;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-indigo-300 dark:border-indigo-700"
                  title="Mouse Move Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Keyboard Events */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">Keyboard Events</h2>

        {/* Keydown vs Keyup */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>keydown vs keyup</CardTitle>
            <CardDescription>Detect when keys are pressed and released</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const input = document.querySelector('#keyInput');

input.addEventListener('keydown', function(e) {
  console.log('Key pressed: ' + e.key);
});

input.addEventListener('keyup', function(e) {
  console.log('Key released: ' + e.key);
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
    input:focus { outline: none; border-color: #8b5cf6; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    .status { padding: 10px; margin-top: 10px; border-radius: 8px; font-size: 14px; font-weight: 500; }
    #downStatus { background: ${isDarkMode ? '#7c3aed' : '#ddd6fe'}; color: ${isDarkMode ? 'white' : '#5b21b6'}; }
    #upStatus { background: ${isDarkMode ? '#059669' : '#d1fae5'}; color: ${isDarkMode ? 'white' : '#047857'}; }
  </style>
</head>
<body>
  <input type="text" id="keyInput" placeholder="Press any key...">
  <div id="downStatus" class="status">Keydown: -</div>
  <div id="upStatus" class="status">Keyup: -</div>
  
  <script>
    const input = document.querySelector('#keyInput');
    const downStatus = document.querySelector('#downStatus');
    const upStatus = document.querySelector('#upStatus');
    
    input.addEventListener('keydown', function(e) {
      downStatus.textContent = '⬇️ Keydown: ' + e.key;
    });
    
    input.addEventListener('keyup', function(e) {
      upStatus.textContent = '⬆️ Keyup: ' + e.key;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Keyboard Events Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form Events */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">Form Events</h2>

        {/* Input vs Change */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>input vs change</CardTitle>
            <CardDescription>Real-time vs committed value changes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const input = document.querySelector('#textInput');

// Fires on every keystroke
input.addEventListener('input', function(e) {
  console.log('Input: ' + e.target.value);
});

// Fires when user commits (blur/enter)
input.addEventListener('change', function(e) {
  console.log('Changed: ' + e.target.value);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'input-dark' : 'input-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    input { width: 100%; padding: 12px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 14px; }
    input:focus { outline: none; border-color: #10b981; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    .log { padding: 10px; margin-top: 8px; border-radius: 8px; font-size: 13px; border: 2px solid; }
    #inputLog { background: ${isDarkMode ? '#1e3a8a' : '#dbeafe'}; border-color: ${isDarkMode ? '#3b82f6' : '#60a5fa'}; color: ${isDarkMode ? '#93c5fd' : '#1e40af'}; }
    #changeLog { background: ${isDarkMode ? '#065f46' : '#d1fae5'}; border-color: ${isDarkMode ? '#10b981' : '#34d399'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; }
  </style>
</head>
<body>
  <input type="text" id="textInput" placeholder="Type and press Enter or click away...">
  <div id="inputLog" class="log">Input event: -</div>
  <div id="changeLog" class="log">Change event: -</div>
  
  <script>
    const input = document.querySelector('#textInput');
    const inputLog = document.querySelector('#inputLog');
    const changeLog = document.querySelector('#changeLog');
    
    input.addEventListener('input', function(e) {
      inputLog.textContent = '⚡ Input (live): ' + e.target.value;
    });
    
    input.addEventListener('change', function(e) {
      changeLog.textContent = '✅ Change (committed): ' + e.target.value;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="Input vs Change Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Focus vs Blur */}
        <Card className="border-2 border-teal-200 dark:border-teal-800">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/10">
            <CardTitle>focus vs blur</CardTitle>
            <CardDescription>Detect when elements gain or lose focus</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const input = document.querySelector('#focusInput');

input.addEventListener('focus', function() {
  console.log('Input focused!');
  this.style.borderColor = '#10b981';
});

input.addEventListener('blur', function() {
  console.log('Input blurred!');
  this.style.borderColor = '#cbd5e1';
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'focus-dark' : 'focus-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    input { width: 100%; padding: 12px; border: 3px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 14px; transition: border-color 0.3s; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    #status { padding: 12px; margin-top: 15px; border-radius: 8px; font-size: 14px; font-weight: 500; text-align: center; background: ${isDarkMode ? '#475569' : '#94a3b8'}; color: white; }
  </style>
</head>
<body>
  <input type="text" id="focusInput" placeholder="Click here to focus...">
  <div id="status">Click the input field</div>
  
  <script>
    const input = document.querySelector('#focusInput');
    const status = document.querySelector('#status');
    
    input.addEventListener('focus', function() {
      this.style.borderColor = '#10b981';
      status.textContent = '🎯 Input is focused!';
      status.style.backgroundColor = '#10b981';
    });
    
    input.addEventListener('blur', function() {
      this.style.borderColor = '${isDarkMode ? '#475569' : '#cbd5e1'}';
      status.textContent = '😴 Input lost focus';
      status.style.backgroundColor = '${isDarkMode ? '#475569' : '#94a3b8'}';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-teal-300 dark:border-teal-700"
                  title="Focus/Blur Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Window Events */}
      <div className="space-y-8 mt-16">
        <h2 className="text-3xl font-bold text-center">Window Events</h2>

        {/* Scroll Event */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>scroll</CardTitle>
            <CardDescription>Track page scrolling</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const container = document.querySelector('#scrollBox');

container.addEventListener('scroll', function() {
  const scrollTop = this.scrollTop;
  const scrollHeight = this.scrollHeight;
  const clientHeight = this.clientHeight;
  
  const percentage = Math.round(
    (scrollTop / (scrollHeight - clientHeight)) * 100
  );
  
  console.log('Scrolled: ' + percentage + '%');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'scroll-dark' : 'scroll-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #scrollBox { height: 120px; overflow-y: scroll; padding: 15px; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; border-radius: 8px; }
    .content { height: 300px; padding: 10px; background: linear-gradient(to bottom, ${isDarkMode ? '#3b82f6' : '#dbeafe'}, ${isDarkMode ? '#8b5cf6' : '#fae8ff'}); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600; }
    #scrollStatus { padding: 10px; margin-top: 10px; border-radius: 8px; background: ${isDarkMode ? '#ea580c' : '#fed7aa'}; color: ${isDarkMode ? 'white' : '#9a3412'}; text-align: center; font-weight: 500; }
  </style>
</head>
<body>
  <div id="scrollBox">
    <div class="content">Scroll down to see progress!</div>
  </div>
  <div id="scrollStatus">Scroll: 0%</div>
  
  <script>
    const scrollBox = document.querySelector('#scrollBox');
    const status = document.querySelector('#scrollStatus');
    
    scrollBox.addEventListener('scroll', function() {
      const scrollTop = this.scrollTop;
      const scrollHeight = this.scrollHeight;
      const clientHeight = this.clientHeight;
      
      const percentage = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
      status.textContent = '📜 Scroll: ' + percentage + '%';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="Scroll Event Demo"
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Event Types Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MousePointer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Mouse Events
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-blue-600 dark:text-blue-400">click</code> - Single click</li>
                  <li><code className="text-blue-600 dark:text-blue-400">dblclick</code> - Double click</li>
                  <li><code className="text-blue-600 dark:text-blue-400">mouseenter</code> - Mouse enters</li>
                  <li><code className="text-blue-600 dark:text-blue-400">mouseleave</code> - Mouse leaves</li>
                  <li><code className="text-blue-600 dark:text-blue-400">mousemove</code> - Mouse moves</li>
                  <li><code className="text-blue-600 dark:text-blue-400">mousedown</code> - Button pressed</li>
                  <li><code className="text-blue-600 dark:text-blue-400">mouseup</code> - Button released</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FormInput className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Form Events
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-green-600 dark:text-green-400">input</code> - Value changes (live)</li>
                  <li><code className="text-green-600 dark:text-green-400">change</code> - Value committed</li>
                  <li><code className="text-green-600 dark:text-green-400">submit</code> - Form submitted</li>
                  <li><code className="text-green-600 dark:text-green-400">focus</code> - Element focused</li>
                  <li><code className="text-green-600 dark:text-green-400">blur</code> - Element unfocused</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Keyboard Events
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-purple-600 dark:text-purple-400">keydown</code> - Key pressed</li>
                  <li><code className="text-purple-600 dark:text-purple-400">keyup</code> - Key released</li>
                  <li><code className="text-purple-600 dark:text-purple-400">keypress</code> - Character typed (deprecated)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  Window Events
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-orange-600 dark:text-orange-400">load</code> - Page fully loaded</li>
                  <li><code className="text-orange-600 dark:text-orange-400">resize</code> - Window resized</li>
                  <li><code className="text-orange-600 dark:text-orange-400">scroll</code> - Page scrolled</li>
                  <li><code className="text-orange-600 dark:text-orange-400">beforeunload</code> - Before leaving page</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Choose the right event for your use case: <code>input</code> for live feedback, <code>change</code> for committed values, <code>mouseenter</code> for hover effects!
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
                <li>• Use <strong>input</strong> for real-time validation</li>
                <li>• Use <strong>change</strong> for final value changes</li>
                <li>• Use <strong>mouseenter/leave</strong> for hover effects</li>
                <li>• Use <strong>keydown</strong> for keyboard shortcuts</li>
                <li>• Remove event listeners when no longer needed</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not use <strong>keypress</strong> (deprecated)</li>
                <li>• Don not use <strong>mouseover</strong> without understanding bubbling</li>
                <li>• Don not attach too many scroll listeners</li>
                <li>• Don not forget to throttle/debounce frequent events</li>
                <li>• Don not use <strong>click</strong> on non-interactive elements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
