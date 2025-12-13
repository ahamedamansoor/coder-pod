'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  MousePointer,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  RotateCcw,
  ArrowDown,
  ArrowUp,
  Target,
} from 'lucide-react';

interface EventFlowStep {
  phase: string;
  activeElement: string | null;
  output: string[];
  description: string;
  code?: string;
  highlightedPhase: string | null;
}

export default function JavaScriptEventsNew() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const animationSteps: EventFlowStep[] = [
    {
      phase: 'idle',
      activeElement: null,
      output: [],
      description: 'User clicks on the button - event is created',
      code: '// User clicks button',
      highlightedPhase: null
    },
    {
      phase: 'capture',
      activeElement: 'window',
      output: ['Window - Capture'],
      description: 'CAPTURE phase starts at window (top of tree)',
      code: 'window.addEventListener',
      highlightedPhase: 'capture'
    },
    {
      phase: 'capture',
      activeElement: 'document',
      output: ['Window - Capture', 'Document - Capture'],
      description: 'Event travels down through document',
      code: 'document.addEventListener',
      highlightedPhase: 'capture'
    },
    {
      phase: 'capture',
      activeElement: 'div',
      output: ['Window - Capture', 'Document - Capture', 'Div - Capture'],
      description: 'Event continues down through parent div',
      code: 'div.addEventListener',
      highlightedPhase: 'capture'
    },
    {
      phase: 'target',
      activeElement: 'button',
      output: ['Window - Capture', 'Document - Capture', 'Div - Capture', 'Button TARGET'],
      description: 'Reached the TARGET - the actual clicked element',
      code: 'button.addEventListener',
      highlightedPhase: 'target'
    },
    {
      phase: 'bubble',
      activeElement: 'div',
      output: ['Window - Capture', 'Document - Capture', 'Div - Capture', 'Button TARGET', 'Div - Bubble'],
      description: 'BUBBLE phase - event travels back up through div',
      code: 'div.addEventListener',
      highlightedPhase: 'bubble'
    },
    {
      phase: 'bubble',
      activeElement: 'document',
      output: ['Window - Capture', 'Document - Capture', 'Div - Capture', 'Button TARGET', 'Div - Bubble', 'Document - Bubble'],
      description: 'Event bubbles up to document',
      code: 'document.addEventListener',
      highlightedPhase: 'bubble'
    },
    {
      phase: 'bubble',
      activeElement: 'window',
      output: ['Window - Capture', 'Document - Capture', 'Div - Capture', 'Button TARGET', 'Div - Bubble', 'Document - Bubble', 'Window - Bubble'],
      description: 'Event reaches window - complete!',
      code: 'window.addEventListener',
      highlightedPhase: 'bubble'
    },
    {
      phase: 'idle',
      activeElement: null,
      output: ['Window - Capture', 'Document - Capture', 'Div - Capture', 'Button TARGET', 'Div - Bubble', 'Document - Bubble', 'Window - Bubble', 'Complete!'],
      description: 'Complete! Order: Capture to Target to Bubble',
      code: '// Event lifecycle finished',
      highlightedPhase: null
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < animationSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= animationSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    } else if (currentStep >= animationSteps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, animationSteps.length]);

  const step = animationSteps[currentStep];

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={MousePointer}
        category="JavaScript DOM"
        title="Events & Event Listeners"
        description="Master user interactions - make your webpage respond to clicks, typing, and more!"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Events?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Events are <strong className="text-purple-700 dark:text-purple-400">things that happen</strong> on your webpage - clicks, key presses, mouse movements. You can listen for these events and run code when they occur!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-purple-200 dark:border-purple-800/30">
            <MousePointer className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-lg">Event Propagation</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              When you click something, the event travels through <strong>3 phases</strong>: Capture (down) to Target (the element) to Bubble (up). Understanding this flow is key!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Event Propagation Animation</CardTitle>
              <CardDescription>Watch how events travel through the DOM tree</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
                ← Prev
              </Button>
              <Button size="sm" variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="outline" onClick={() => currentStep < animationSteps.length - 1 && setCurrentStep(currentStep + 1)} disabled={currentStep === animationSteps.length - 1}>
                Next →
              </Button>
              <Button size="sm" variant="outline" onClick={() => { setCurrentStep(0); setIsPlaying(false); }}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* DOM Tree Visualization */}
            <div className="relative">
              <div className="flex justify-center items-center min-h-[500px]">
                <div className="space-y-6 w-full max-w-2xl">
                  
                  {/* Window */}
                  <div className={`flex justify-center transition-all duration-500 ${
                    step.activeElement === 'window' ? 'scale-105' : ''
                  }`}>
                    <div className={`px-6 py-4 rounded-xl border-2 transition-all duration-500 ${
                      step.activeElement === 'window' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-600 shadow-2xl animate-pulse' 
                        : 'bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-800'
                    }`}>
                      <div className="text-center">
                        <div className="font-bold text-lg">Window</div>
                        <div className="text-xs opacity-70">Top level</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <ArrowDown className={`w-6 h-6 transition-all duration-500 ${
                      step.highlightedPhase === 'capture' ? 'text-orange-500 animate-bounce' : 'text-gray-300'
                    }`} />
                  </div>

                  {/* Document */}
                  <div className={`flex justify-center transition-all duration-500 ${
                    step.activeElement === 'document' ? 'scale-105' : ''
                  }`}>
                    <div className={`px-6 py-4 rounded-xl border-2 transition-all duration-500 ${
                      step.activeElement === 'document'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-600 shadow-2xl animate-pulse'
                        : 'bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-800'
                    }`}>
                      <div className="text-center">
                        <div className="font-bold text-lg">Document</div>
                        <div className="text-xs opacity-70">HTML document</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <ArrowDown className={`w-6 h-6 transition-all duration-500 ${
                      step.highlightedPhase === 'capture' ? 'text-orange-500 animate-bounce' : 'text-gray-300'
                    }`} />
                  </div>

                  {/* Div Parent */}
                  <div className={`flex justify-center transition-all duration-500 ${
                    step.activeElement === 'div' ? 'scale-105' : ''
                  }`}>
                    <div className={`px-8 py-5 rounded-xl border-2 transition-all duration-500 ${
                      step.activeElement === 'div'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-600 shadow-2xl animate-pulse'
                        : 'bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-800'
                    }`}>
                      <div className="text-center">
                        <div className="font-bold text-lg">&lt;div&gt; Parent</div>
                        <div className="text-xs opacity-70">Container element</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down/Up */}
                  <div className="flex justify-center gap-4">
                    <ArrowDown className={`w-6 h-6 transition-all duration-500 ${
                      step.highlightedPhase === 'capture' ? 'text-orange-500 animate-bounce' : 'text-gray-300'
                    }`} />
                    <ArrowUp className={`w-6 h-6 transition-all duration-500 ${
                      step.highlightedPhase === 'bubble' ? 'text-blue-500 animate-bounce' : 'text-gray-300'
                    }`} />
                  </div>

                  {/* Button Target */}
                  <div className={`flex justify-center transition-all duration-500 ${
                    step.activeElement === 'button' ? 'scale-110' : ''
                  }`}>
                    <div className={`px-10 py-6 rounded-xl border-4 transition-all duration-500 ${
                      step.activeElement === 'button'
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white border-rose-600 shadow-2xl animate-pulse'
                        : 'bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                    }`}>
                      <div className="text-center">
                        <Target className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-bold text-xl">&lt;button&gt; Click Me!</div>
                        <div className="text-xs opacity-70 mt-1">EVENT TARGET</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase Indicators */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Capture Phase */}
              <div className={`border-2 rounded-xl p-4 transition-all duration-500 ${
                step.highlightedPhase === 'capture'
                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowDown className={`w-5 h-5 ${step.highlightedPhase === 'capture' ? 'text-orange-600' : 'text-gray-400'}`} />
                  <h4 className="font-bold">1. Capture Phase</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Event travels <strong>down</strong> from window to target
                </p>
              </div>

              {/* Target Phase */}
              <div className={`border-2 rounded-xl p-4 transition-all duration-500 ${
                step.highlightedPhase === 'target'
                  ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/20 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Target className={`w-5 h-5 ${step.highlightedPhase === 'target' ? 'text-rose-600' : 'text-gray-400'}`} />
                  <h4 className="font-bold">2. Target Phase</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Event reaches the <strong>actual element</strong> clicked
                </p>
              </div>

              {/* Bubble Phase */}
              <div className={`border-2 rounded-xl p-4 transition-all duration-500 ${
                step.highlightedPhase === 'bubble'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <ArrowUp className={`w-5 h-5 ${step.highlightedPhase === 'bubble' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <h4 className="font-bold">3. Bubble Phase</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Event travels <strong>back up</strong> to window
                </p>
              </div>
            </div>

            {/* Console Output */}
            <div className="border-2 border-indigo-300 dark:border-indigo-700 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/10 p-6">
              <h3 className="font-bold mb-3">Event Log</h3>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 min-h-[150px] font-mono text-sm">
                {step.output.length === 0 ? (
                  <div className="text-gray-500">// Waiting for event...</div>
                ) : (
                  step.output.map((line, i) => (
                    <div key={i} className={`animate-in fade-in ${
                      line.includes('TARGET') ? 'text-rose-400 font-bold' :
                      line.includes('Capture') ? 'text-orange-400' :
                      line.includes('Bubble') ? 'text-blue-400' :
                      line.includes('Complete') ? 'text-emerald-400' :
                      'text-gray-400'
                    }`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Description and Code */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    {currentStep + 1}
                  </div>
                  <span className="font-semibold">Step {currentStep + 1} of {animationSteps.length}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>

              {step.code && (
                <div className="bg-slate-900 dark:bg-slate-950 border-2 border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Code Reference
                    </span>
                  </div>
                  <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap">
                    {step.code}
                  </pre>
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="flex justify-center">
              <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                {animationSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStep 
                        ? 'bg-purple-500 w-8' 
                        : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Interactive Event Examples</h2>

        {/* Click Event Example */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>Click Events</CardTitle>
            <CardDescription>Respond to user clicks</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const button = document.querySelector('#clickBtn');

button.addEventListener('click', function() {
  const box = document.querySelector('#box');
  box.textContent = 'Button Clicked! ' + new Date().toLocaleTimeString();
  box.style.backgroundColor = '#10b981';
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'dark' : 'light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    button { padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; }
    button:hover { background: #2563eb; }
    #box { padding: 20px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#e2e8f0'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; text-align: center; font-weight: 500; transition: all 0.3s; }
  </style>
</head>
<body>
  <button id="clickBtn">Click Me!</button>
  <div id="box">Waiting for click...</div>
  
  <script>
    const button = document.querySelector('#clickBtn');
    button.addEventListener('click', function() {
      const box = document.querySelector('#box');
      box.textContent = 'Button Clicked! ' + new Date().toLocaleTimeString();
      box.style.backgroundColor = '#10b981';
      box.style.color = 'white';
    });
  </script>
</body>
</html>`}
                  className="w-full h-48 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="Click Event Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Event Example */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>Form Events</CardTitle>
            <CardDescription>Handle form input and submission</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const form = document.querySelector('#myForm');
const input = document.querySelector('#nameInput');

input.addEventListener('input', function(e) {
  const output = document.querySelector('#output');
  output.textContent = 'Typing: ' + e.target.value;
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted!');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'form-dark' : 'form-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    input { width: 100%; padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 14px; }
    input:focus { outline: none; border-color: #8b5cf6; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 10px 20px; background: #8b5cf6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; margin-top: 10px; }
    button:hover { background: #7c3aed; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; min-height: 20px; }
  </style>
</head>
<body>
  <form id="myForm">
    <input type="text" id="nameInput" placeholder="Type your name...">
    <button type="submit">Submit</button>
  </form>
  <div id="output">Start typing...</div>
  
  <script>
    const form = document.querySelector('#myForm');
    const input = document.querySelector('#nameInput');
    
    input.addEventListener('input', function(e) {
      const output = document.querySelector('#output');
      output.textContent = 'Typing: ' + e.target.value;
    });
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const output = document.querySelector('#output');
      output.textContent = '✅ Form submitted with: ' + input.value;
      output.style.backgroundColor = '#d1fae5';
      output.style.color = '#047857';
    });
  </script>
</body>
</html>`}
                  className="w-full h-48 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Form Event Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mouse Event Example */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>Mouse Events</CardTitle>
            <CardDescription>Track mouse movements and interactions</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const area = document.querySelector('#mouseArea');

area.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#10b981';
  this.textContent = 'Mouse Entered! 🎉';
});

area.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#e2e8f0';
  this.textContent = 'Hover over me!';
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'mouse-dark' : 'mouse-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    #mouseArea { padding: 40px; background: ${isDarkMode ? '#1e293b' : '#e2e8f0'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 12px; text-align: center; font-weight: 600; font-size: 16px; cursor: pointer; transition: all 0.3s; border: 3px dashed ${isDarkMode ? '#475569' : '#cbd5e1'}; }
  </style>
</head>
<body>
  <div id="mouseArea">Hover over me!</div>
  
  <script>
    const area = document.querySelector('#mouseArea');
    const isDark = ${isDarkMode};
    
    area.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#10b981';
      this.style.color = 'white';
      this.style.borderColor = '#10b981';
      this.textContent = 'Mouse Entered! 🎉';
    });
    
    area.addEventListener('mouseleave', function() {
      this.style.backgroundColor = isDark ? '#1e293b' : '#e2e8f0';
      this.style.color = isDark ? '#e2e8f0' : '#1e293b';
      this.style.borderColor = isDark ? '#475569' : '#cbd5e1';
      this.textContent = 'Hover over me!';
    });
  </script>
</body>
</html>`}
                  className="w-full h-48 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="Mouse Event Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Keyboard Event Example */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>Keyboard Events</CardTitle>
            <CardDescription>Detect key presses</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const input = document.querySelector('#keyInput');
const display = document.querySelector('#keyDisplay');

input.addEventListener('keydown', function(e) {
  display.textContent = 'Key: ' + e.key + ' | Code: ' + e.code;
  
  if (e.key === 'Enter') {
    display.style.backgroundColor = '#10b981';
  } else {
    display.style.backgroundColor = '#3b82f6';
  }
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'keyboard-dark' : 'keyboard-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    input { width: 100%; padding: 12px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 14px; }
    input:focus { outline: none; border-color: #f59e0b; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    #keyDisplay { padding: 20px; margin-top: 15px; background: ${isDarkMode ? '#475569' : '#94a3b8'}; border-radius: 8px; text-align: center; font-weight: 500; transition: all 0.3s; color: white; }
  </style>
</head>
<body>
  <input type="text" id="keyInput" placeholder="Press any key...">
  <div id="keyDisplay">Press a key to see details</div>
  
  <script>
    const input = document.querySelector('#keyInput');
    const display = document.querySelector('#keyDisplay');
    
    input.addEventListener('keydown', function(e) {
      display.textContent = 'Key: ' + e.key + ' | Code: ' + e.code;
      
      if (e.key === 'Enter') {
        display.style.backgroundColor = '#10b981';
        display.textContent = '✅ Enter key pressed!';
      } else {
        display.style.backgroundColor = '#3b82f6';
      }
    });
  </script>
</body>
</html>`}
                  className="w-full h-48 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="Keyboard Event Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>addEventListener()</strong></li>
                <li>• Remove listeners when done</li>
                <li>• Use event.preventDefault() for forms</li>
                <li>• Use event.stopPropagation() to stop bubbling</li>
                <li>• Access event.target to get clicked element</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not use <strong>onclick</strong> attributes</li>
                <li>• Don not forget to check event.target</li>
                <li>• Don not add too many listeners</li>
                <li>• Don not forget preventDefault() on forms</li>
                <li>• Don not use capture phase unless necessary</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Reference</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>3 Phases:</strong> Capture (down) to Target (element) to Bubble (up)</div>
              <div><strong>Default:</strong> Most listeners use bubble phase</div>
              <div><strong>Stop Bubbling:</strong> event.stopPropagation()</div>
              <div><strong>Prevent Default:</strong> event.preventDefault()</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use <strong>event delegation</strong>: Add one listener to a parent instead of many to children. Check event.target to know which child was clicked!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
