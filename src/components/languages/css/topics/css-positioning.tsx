'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, Pin, Anchor, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssPositioningProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const positioningTypesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Positioning</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%);
      }
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #a855f7;
      text-align: center;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #c084fc;
      }
    }
    
    .example-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .example-box {
      background: #f8fafc;
      padding: 30px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
      min-height: 300px;
      position: relative;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .example-title {
      font-size: 18px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-title {
        color: #e2e8f0;
      }
    }
    
    .demo-element {
      background: #a855f7;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      width: fit-content;
    }
    
    .static-demo {
      position: static;
    }
    
    .relative-demo {
      position: relative;
      top: 20px;
      left: 30px;
      background: #3b82f6;
    }
    
    .absolute-demo {
      position: absolute;
      top: 80px;
      right: 30px;
      background: #10b981;
    }
    
    .fixed-demo {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #f59e0b;
      z-index: 1000;
    }
    
    .sticky-demo {
      position: sticky;
      top: 20px;
      background: #ec4899;
    }
    
    .code-label {
      margin-top: 15px;
      padding: 10px;
      background: #fef3c7;
      border-radius: 6px;
      font-size: 13px;
      font-family: monospace;
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-label {
        background: #451a03;
        color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📍 CSS Positioning</h1>
    
    <div class="example-grid">
      <div class="example-box">
        <div class="example-title">Static (Default)</div>
        <div class="demo-element static-demo">Static</div>
        <p style="margin-top: 15px; font-size: 14px; color: #64748b;">
          Normal flow, cannot use top/right/bottom/left
        </p>
        <div class="code-label">position: static;</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">Relative</div>
        <div class="demo-element relative-demo">Relative</div>
        <p style="margin-top: 15px; font-size: 14px; color: #64748b;">
          Moved from its normal position (top: 20px, left: 30px)
        </p>
        <div class="code-label">position: relative;<br>top: 20px; left: 30px;</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">Absolute</div>
        <div class="demo-element absolute-demo">Absolute</div>
        <p style="margin-top: 15px; font-size: 14px; color: #64748b;">
          Positioned relative to parent (top: 80px, right: 30px)
        </p>
        <div class="code-label">position: absolute;<br>top: 80px; right: 30px;</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">Sticky</div>
        <div class="demo-element sticky-demo">Sticky</div>
        <p style="margin-top: 15px; font-size: 14px; color: #64748b;">
          Sticks when scrolling past threshold
        </p>
        <div class="code-label">position: sticky;<br>top: 20px;</div>
      </div>
    </div>
    
    <div class="demo-element fixed-demo">
      Fixed (bottom-right)
    </div>
  </div>
</body>
</html>`;

const stickyHeaderExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sticky Header Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
    
    .header {
      position: sticky;
      top: 0;
      background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
      z-index: 100;
    }
    
    .content {
      padding: 40px 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .section {
      margin-bottom: 40px;
      padding: 30px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: #1e293b;
      }
    }
    
    .section h2 {
      color: #a855f7;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section h2 {
        color: #c084fc;
      }
    }
    
    .section p {
      line-height: 1.6;
      color: #64748b;
    }
    
    @media (prefers-color-scheme: dark) {
      .section p {
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    🧲 Sticky Header - Scroll Down!
  </div>
  
  <div class="content">
    <div class="section">
      <h2>Section 1</h2>
      <p>
        The header above is sticky! It stays at the top of the viewport when you scroll. 
        This is perfect for navigation menus, toolbars, and important UI elements that should 
        always be accessible.
      </p>
    </div>
    
    <div class="section">
      <h2>Section 2</h2>
      <p>
        Sticky positioning is a hybrid of relative and fixed positioning. The element is 
        treated as relative positioned until it crosses a specified threshold (like top: 0), 
        at which point it becomes fixed.
      </p>
    </div>
    
    <div class="section">
      <h2>Section 3</h2>
      <p>
        Keep scrolling to see the sticky header in action. Notice how it "sticks" to the 
        top of the page while you scroll through the content. This is much easier than 
        using JavaScript to achieve the same effect!
      </p>
    </div>
    
    <div class="section">
      <h2>Section 4</h2>
      <p>
        Sticky positioning works great for table headers, section headings, and sidebar 
        navigation. It's supported in all modern browsers and provides a smooth user 
        experience without any JavaScript.
      </p>
    </div>
    
    <div class="section">
      <h2>Section 5</h2>
      <p>
        The key properties for sticky positioning are: position: sticky and a threshold 
        (top, right, bottom, or left). The element will stick when scrolling reaches 
        that threshold value.
      </p>
    </div>
  </div>
</body>
</html>`;

// Interactive position tester
const interactivePositionExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Position Tester</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%); }
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #a855f7; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #c084fc; }
    }
    .tester { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
    .controls {
      background: #f8fafc;
      padding: 25px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    @media (prefers-color-scheme: dark) {
      .controls { background: #0f172a; border-color: #334155; }
    }
    .control-group {
      margin-bottom: 20px;
    }
    .control-label {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
      display: block;
      color: #1e293b;
    }
    @media (prefers-color-scheme: dark) {
      .control-label { color: #e2e8f0; }
    }
    select, .slider {
      width: 100%;
      padding: 8px;
      border-radius: 6px;
      border: 2px solid #e2e8f0;
    }
    @media (prefers-color-scheme: dark) {
      select { background: #0f172a; color: #e2e8f0; border-color: #334155; }
    }
    .slider {
      height: 6px;
      background: #e2e8f0;
      outline: none;
      -webkit-appearance: none;
      padding: 0;
    }
    @media (prefers-color-scheme: dark) {
      .slider { background: #334155; }
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #a855f7;
      cursor: pointer;
    }
    .slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #a855f7;
      cursor: pointer;
      border: none;
    }
    .value-display {
      margin-top: 8px;
      padding: 6px 12px;
      background: #f3e8ff;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      color: #7e22ce;
      display: inline-block;
    }
    @media (prefers-color-scheme: dark) {
      .value-display { background: #581c87; color: #e9d5ff; }
    }
    .test-area {
      background: #f8fafc;
      border-radius: 12px;
      padding: 20px;
      border: 2px solid #e2e8f0;
      position: relative;
      min-height: 400px;
    }
    @media (prefers-color-scheme: dark) {
      .test-area { background: #0f172a; border-color: #334155; }
    }
    .test-parent {
      position: relative;
      background: white;
      border: 2px dashed #a855f7;
      border-radius: 8px;
      padding: 20px;
      height: 350px;
    }
    @media (prefers-color-scheme: dark) {
      .test-parent { background: #1e293b; border-color: #c084fc; }
    }
    #testBox {
      width: 100px;
      height: 60px;
      background: linear-gradient(135deg, #a855f7, #9333ea);
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      transition: all 0.3s;
      position: static;
    }
    .reference {
      width: 80px;
      height: 50px;
      background: #64748b;
      color: white;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      margin-top: 10px;
    }
    @media (max-width: 768px) {
      .tester { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎮 Interactive Position Tester</h1>
    <div class="tester">
      <div class="controls">
        <div class="control-group">
          <label class="control-label">Position</label>
          <select id="positionSelect">
            <option value="static">static</option>
            <option value="relative">relative</option>
            <option value="absolute">absolute</option>
            <option value="fixed">fixed</option>
            <option value="sticky">sticky</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label">Top</label>
          <input type="range" class="slider" id="topRange" min="-100" max="100" value="0">
          <div class="value-display" id="topValue">0px</div>
        </div>
        <div class="control-group">
          <label class="control-label">Left</label>
          <input type="range" class="slider" id="leftRange" min="-100" max="100" value="0">
          <div class="value-display" id="leftValue">0px</div>
        </div>
        <div class="control-group">
          <label class="control-label">Z-Index</label>
          <input type="range" class="slider" id="zIndexRange" min="-5" max="10" value="0">
          <div class="value-display" id="zIndexValue">0</div>
        </div>
      </div>
      <div class="test-area">
        <div class="test-parent">
          <div id="testBox">Test Box</div>
          <div class="reference">Reference</div>
        </div>
      </div>
    </div>
  </div>
  <script>
    const testBox = document.getElementById('testBox');
    const positionSelect = document.getElementById('positionSelect');
    const topRange = document.getElementById('topRange');
    const leftRange = document.getElementById('leftRange');
    const zIndexRange = document.getElementById('zIndexRange');
    
    function updateBox() {
      testBox.style.position = positionSelect.value;
      testBox.style.top = topRange.value + 'px';
      testBox.style.left = leftRange.value + 'px';
      testBox.style.zIndex = zIndexRange.value;
      
      document.getElementById('topValue').textContent = topRange.value + 'px';
      document.getElementById('leftValue').textContent = leftRange.value + 'px';
      document.getElementById('zIndexValue').textContent = zIndexRange.value;
    }
    
    positionSelect.addEventListener('change', updateBox);
    topRange.addEventListener('input', updateBox);
    leftRange.addEventListener('input', updateBox);
    zIndexRange.addEventListener('input', updateBox);
  </script>
</body>
</html>`;

// Centered modal pattern
const centeredModalExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centered Modal Pattern</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%); }
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #a855f7; text-align: center; margin-bottom: 20px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #c084fc; }
    }
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    @media (prefers-color-scheme: dark) {
      .subtitle { color: #94a3b8; }
    }
    .demo-area {
      position: relative;
      background: #f8fafc;
      border-radius: 12px;
      height: 400px;
      border: 2px solid #e2e8f0;
      overflow: hidden;
    }
    @media (prefers-color-scheme: dark) {
      .demo-area { background: #0f172a; border-color: #334155; }
    }
    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal {
      position: relative;
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      max-width: 400px;
      width: 90%;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      .modal { background: #1e293b; color: #e2e8f0; }
    }
    .modal h3 {
      color: #a855f7;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .modal h3 { color: #c084fc; }
    }
    .modal p {
      color: #64748b;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    @media (prefers-color-scheme: dark) {
      .modal p { color: #94a3b8; }
    }
    .modal-button {
      background: #a855f7;
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    .modal-button:hover {
      background: #9333ea;
      transform: translateY(-2px);
    }
    .code-section {
      margin-top: 30px;
      padding: 20px;
      background: #fef3c7;
      border-radius: 12px;
      border: 2px solid #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .code-section { background: #451a03; border-color: #d97706; }
    }
    .code-section h4 {
      color: #92400e;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .code-section h4 { color: #fbbf24; }
    }
    .code-snippet {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
      line-height: 1.6;
    }
    @media (prefers-color-scheme: dark) {
      .code-snippet { background: #020617; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Perfect Centering Pattern</h1>
    <p class="subtitle">Absolute positioning + transform for perfect centering</p>
    
    <div class="demo-area">
      <div class="modal-overlay">
        <div class="modal">
          <h3>Perfectly Centered!</h3>
          <p>This modal is centered both horizontally and vertically using absolute positioning and transform.</p>
          <button class="modal-button">Got it!</button>
        </div>
      </div>
    </div>
    
    <div class="code-section">
      <h4>💡 How It Works</h4>
      <div class="code-snippet">
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* OR use flexbox on the container */
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssPositioning({ onOpenWebPlayground }: CssPositioningProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="CSS · Box Model & Layout"
        title="Positioning"
        description="Control where elements appear on the page"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What is Positioning?
          </CardTitle>
          <CardDescription>
            Take elements out of normal flow and place them precisely
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">position</code> property lets you <strong className="text-foreground">control exactly where elements appear</strong>. 
            You can move elements relative to their normal position, place them at fixed positions on the screen, or make them stick when scrolling!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Move className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Relative</h4>
              <p className="text-sm text-muted-foreground">
                Move from normal position
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Pin className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Absolute</h4>
              <p className="text-sm text-muted-foreground">
                Position relative to parent
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Anchor className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Sticky</h4>
              <p className="text-sm text-muted-foreground">
                Stick when scrolling
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Move className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Position Types
          </CardTitle>
          <CardDescription>
            Static, relative, absolute, fixed, and sticky
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={positioningTypesExample}
            title="Position Types"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">💡 Position Explained:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>static:</strong> Default, normal flow, top/left don't work</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>relative:</strong> Offset from normal position, space reserved</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>absolute:</strong> Relative to nearest positioned ancestor</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>fixed:</strong> Relative to viewport, stays on screen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>sticky:</strong> Relative until threshold, then fixed</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-fuchsia-500/10 rounded-lg">
              <Anchor className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            2. Sticky Positioning
          </CardTitle>
          <CardDescription>
            Perfect for sticky headers and navigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={stickyHeaderExample}
            title="Sticky Header"
            colorTheme="fuchsia"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Interactive Position Tester */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Move className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Interactive Position Tester
          </CardTitle>
          <CardDescription>
            Experiment with position, top, left, and z-index in real-time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interactivePositionExample}
            title="Interactive Position Tester"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Try It!</AlertTitle>
            <AlertDescription>
              Select different position values and adjust the sliders to see how each positioning type behaves. 
              Watch how the test box moves relative to its parent container!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Centered Modal Pattern */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Pin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            4. Centered Modal Pattern
          </CardTitle>
          <CardDescription>
            Learn the perfect centering technique for modals and overlays
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={centeredModalExample}
            title="Centered Modal"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">position: relative; top: 20px;</code>
              <p className="text-sm text-muted-foreground mt-1">Move 20px down from normal position</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">position: absolute; top: 0; right: 0;</code>
              <p className="text-sm text-muted-foreground mt-1">Position at top-right of nearest positioned parent</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">position: fixed; bottom: 20px;</code>
              <p className="text-sm text-muted-foreground mt-1">Always 20px from bottom of viewport</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">position: sticky; top: 0;</code>
              <p className="text-sm text-muted-foreground mt-1">Sticks to top when scrolling reaches it</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Absolute needs a positioned parent:</strong> Add <code className="px-1.5 py-0.5 bg-muted rounded text-xs">position: relative</code> to parent</li>
            <li><strong>Fixed stays in viewport:</strong> Perfect for modals, notifications, floating buttons</li>
            <li><strong>Sticky needs a threshold:</strong> Must set top, bottom, left, or right</li>
            <li><strong>Use z-index:</strong> Control stacking order of positioned elements</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
