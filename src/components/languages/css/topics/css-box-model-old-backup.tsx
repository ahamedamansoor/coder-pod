'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, Layers, Maximize, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssBoxModelProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Box model visualization
const boxModelVisualizationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Model Visualization</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
      }
    }
    
    .container {
      background: white;
      padding: 50px;
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
      color: #3b82f6;
      text-align: center;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    .box-demo {
      position: relative;
      margin: 0 auto;
      width: fit-content;
    }
    
    .margin-layer {
      background: rgba(251, 191, 36, 0.2);
      border: 2px dashed #f59e0b;
      padding: 40px;
    }
    
    .border-layer {
      background: rgba(168, 85, 247, 0.2);
      border: 8px solid #a855f7;
      padding: 30px;
    }
    
    .padding-layer {
      background: rgba(16, 185, 129, 0.2);
      border: 2px dashed #10b981;
      padding: 30px;
    }
    
    .content-layer {
      background: #3b82f6;
      color: white;
      padding: 40px 60px;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
    
    .label {
      position: absolute;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      color: white;
    }
    
    .margin-label {
      top: 10px;
      left: 10px;
      background: #f59e0b;
    }
    
    .border-label {
      top: 60px;
      left: 60px;
      background: #a855f7;
    }
    
    .padding-label {
      top: 110px;
      left: 110px;
      background: #10b981;
    }
    
    .legend {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .legend-color {
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
    
    .legend-text {
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .legend-text {
        color: #e2e8f0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 The CSS Box Model</h1>
    
    <div class="box-demo">
      <div class="margin-layer">
        <span class="label margin-label">Margin</span>
        <div class="border-layer">
          <span class="label border-label">Border</span>
          <div class="padding-layer">
            <span class="label padding-label">Padding</span>
            <div class="content-layer">
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="legend">
      <div class="legend-item">
        <div class="legend-color" style="background: rgba(251, 191, 36, 0.4);"></div>
        <span class="legend-text">Margin</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: rgba(168, 85, 247, 0.4);"></div>
        <span class="legend-text">Border</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: rgba(16, 185, 129, 0.4);"></div>
        <span class="legend-text">Padding</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: #3b82f6;"></div>
        <span class="legend-text">Content</span>
      </div>
    </div>
  </div>
</body>
</html>`;

// Interactive box model demo
const interactiveBoxModelExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Box Model</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
      }
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
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #3b82f6;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .demo-box {
      margin: 40px auto;
      padding: 40px;
      border: 5px solid #3b82f6;
      background: #dbeafe;
      width: fit-content;
      transition: all 0.3s;
      text-align: center;
      font-weight: 600;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #1e3a8a;
        color: #93c5fd;
        border-color: #60a5fa;
      }
    }
    
    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .control-group {
      background: #f8fafc;
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .control-group {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .control-label {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
      display: block;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .control-label {
        color: #e2e8f0;
      }
    }
    
    .slider {
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: #e2e8f0;
      outline: none;
      -webkit-appearance: none;
    }
    
    @media (prefers-color-scheme: dark) {
      .slider {
        background: #334155;
      }
    }
    
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #3b82f6;
      cursor: pointer;
    }
    
    .slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #3b82f6;
      cursor: pointer;
      border: none;
    }
    
    .value-display {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 10px;
      background: #dbeafe;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .value-display {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .measurements {
      margin-top: 30px;
      padding: 20px;
      background: #fef3c7;
      border-radius: 12px;
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .measurements {
        background: #451a03;
        border-color: #d97706;
      }
    }
    
    .measurements h3 {
      color: #92400e;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .measurements h3 {
        color: #fbbf24;
      }
    }
    
    .measurement-item {
      font-size: 14px;
      color: #78350f;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .measurement-item {
        color: #fde68a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎮 Interactive Box Model</h1>
    <p class="subtitle">Adjust the sliders to see how each property affects the box</p>
    
    <div id="demoBox" class="demo-box">
      Content Area
    </div>
    
    <div class="controls">
      <div class="control-group">
        <label class="control-label">Margin</label>
        <input type="range" id="marginSlider" class="slider" min="0" max="80" value="40">
        <div class="value-display" id="marginValue">40px</div>
      </div>
      
      <div class="control-group">
        <label class="control-label">Border</label>
        <input type="range" id="borderSlider" class="slider" min="0" max="20" value="5">
        <div class="value-display" id="borderValue">5px</div>
      </div>
      
      <div class="control-group">
        <label class="control-label">Padding</label>
        <input type="range" id="paddingSlider" class="slider" min="0" max="80" value="40">
        <div class="value-display" id="paddingValue">40px</div>
      </div>
    </div>
    
    <div class="measurements">
      <h3>📏 Box Measurements</h3>
      <div class="measurement-item" id="totalWidth"></div>
      <div class="measurement-item" id="contentWidth"></div>
      <div class="measurement-item" id="calculation"></div>
    </div>
  </div>
  
  <script>
    const demoBox = document.getElementById('demoBox');
    const marginSlider = document.getElementById('marginSlider');
    const borderSlider = document.getElementById('borderSlider');
    const paddingSlider = document.getElementById('paddingSlider');
    
    function updateBox() {
      const margin = marginSlider.value;
      const border = borderSlider.value;
      const padding = paddingSlider.value;
      
      demoBox.style.margin = margin + 'px auto';
      demoBox.style.borderWidth = border + 'px';
      demoBox.style.padding = padding + 'px';
      
      document.getElementById('marginValue').textContent = margin + 'px';
      document.getElementById('borderValue').textContent = border + 'px';
      document.getElementById('paddingValue').textContent = padding + 'px';
      
      const contentWidth = 200;
      const totalWidth = contentWidth + (parseInt(padding) * 2) + (parseInt(border) * 2);
      
      document.getElementById('totalWidth').innerHTML = 
        \`<strong>Total Width:</strong> \${totalWidth}px\`;
      document.getElementById('contentWidth').innerHTML = 
        \`<strong>Content Width:</strong> \${contentWidth}px\`;
      document.getElementById('calculation').innerHTML = 
        \`<strong>Calculation:</strong> \${contentWidth}px (content) + \${padding * 2}px (padding) + \${border * 2}px (border) = \${totalWidth}px\`;
    }
    
    marginSlider.addEventListener('input', updateBox);
    borderSlider.addEventListener('input', updateBox);
    paddingSlider.addEventListener('input', updateBox);
    
    updateBox();
  </script>
</body>
</html>`;

// Interactive live box-sizing toggle
const liveBoxSizingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Box-Sizing Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); }
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
    h1 { color: #3b82f6; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #60a5fa; }
    }
    .toggle-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 30px;
    }
    .toggle-btn {
      padding: 12px 30px;
      border: 2px solid #3b82f6;
      background: white;
      color: #3b82f6;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    @media (prefers-color-scheme: dark) {
      .toggle-btn { background: #0f172a; border-color: #60a5fa; color: #60a5fa; }
    }
    .toggle-btn.active { background: #3b82f6; color: white; }
    @media (prefers-color-scheme: dark) {
      .toggle-btn.active { background: #60a5fa; color: #1e293b; }
    }
    .toggle-btn:hover { transform: translateY(-2px); }
    .demo-area {
      background: #f8fafc;
      padding: 40px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 250px;
    }
    @media (prefers-color-scheme: dark) {
      .demo-area { background: #0f172a; border-color: #334155; }
    }
    #demoBox {
      background: linear-gradient(135deg, #dbeafe, #bfdbfe);
      border: 10px solid #3b82f6;
      padding: 20px;
      width: 200px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #1e40af;
      border-radius: 8px;
      transition: all 0.3s;
    }
    @media (prefers-color-scheme: dark) {
      #demoBox { background: linear-gradient(135deg, #1e3a8a, #1e40af); color: #93c5fd; }
    }
    .measurements {
      background: #fef3c7;
      padding: 25px;
      border-radius: 12px;
      border: 2px solid #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .measurements { background: #451a03; border-color: #d97706; }
    }
    .measurements h3 {
      color: #92400e;
      margin-bottom: 20px;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      .measurements h3 { color: #fbbf24; }
    }
    .calc-item {
      padding: 10px;
      margin-bottom: 10px;
      background: rgba(255,255,255,0.5);
      border-radius: 6px;
      color: #78350f;
    }
    @media (prefers-color-scheme: dark) {
      .calc-item { background: rgba(0,0,0,0.3); color: #fde68a; }
    }
    .total { font-size: 18px; font-weight: 700; color: #b45309; }
    @media (prefers-color-scheme: dark) {
      .total { color: #fbbf24; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎮 Live Box-Sizing Toggle</h1>
    <div class="toggle-buttons">
      <button class="toggle-btn active" id="contentBoxBtn" onclick="setMode('content-box')">
        content-box
      </button>
      <button class="toggle-btn" id="borderBoxBtn" onclick="setMode('border-box')">
        border-box
      </button>
    </div>
    <div class="demo-area">
      <div id="demoBox">Content Area</div>
    </div>
    <div class="measurements">
      <h3 id="modeTitle">📦 Mode: content-box</h3>
      <div class="calc-item"><strong>Specified Width:</strong> 200px</div>
      <div class="calc-item"><strong>Padding (both sides):</strong> 40px (20px × 2)</div>
      <div class="calc-item"><strong>Border (both sides):</strong> 20px (10px × 2)</div>
      <div class="calc-item total" id="totalCalc">
        <strong>Total Width:</strong> <span id="totalWidth">260px</span>
      </div>
      <div class="calc-item" id="explanation">
        With content-box, padding and border are ADDED to width
      </div>
    </div>
  </div>
  <script>
    const demoBox = document.getElementById('demoBox');
    const contentBoxBtn = document.getElementById('contentBoxBtn');
    const borderBoxBtn = document.getElementById('borderBoxBtn');
    
    function setMode(mode) {
      demoBox.style.boxSizing = mode;
      if (mode === 'content-box') {
        contentBoxBtn.classList.add('active');
        borderBoxBtn.classList.remove('active');
        document.getElementById('modeTitle').innerHTML = '📦 Mode: <span style="color: #ef4444;">content-box</span>';
        document.getElementById('totalWidth').textContent = '260px';
        document.getElementById('explanation').textContent = 
          'With content-box, padding (40px) and border (20px) are ADDED to width (200px)';
      } else {
        contentBoxBtn.classList.remove('active');
        borderBoxBtn.classList.add('active');
        document.getElementById('modeTitle').innerHTML = '📦 Mode: <span style="color: #10b981;">border-box</span>';
        document.getElementById('totalWidth').textContent = '200px';
        document.getElementById('explanation').textContent = 
          'With border-box, total width stays 200px. Content area shrinks to 140px (200 - 40 - 20)';
      }
    }
  </script>
</body>
</html>`;

// Box-sizing comparison
const boxSizingComparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>box-sizing Comparison</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }
    
    h1 {
      color: #3b82f6;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
    }
    
    .box-example {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .box-example {
        background: #1e293b;
      }
    }
    
    .box-example h3 {
      color: #1e293b;
      margin-bottom: 20px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-example h3 {
        color: #e2e8f0;
      }
    }
    
    .demo-container {
      border: 2px dashed #94a3b8;
      padding: 20px;
      background: #f8fafc;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-container {
        background: #0f172a;
        border-color: #475569;
      }
    }
    
    .demo-box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 10px solid #3b82f6;
      background: #dbeafe;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .content-box {
      box-sizing: content-box;
    }
    
    .border-box {
      box-sizing: border-box;
    }
    
    .info {
      margin-top: 20px;
      padding: 15px;
      background: #fef3c7;
      border-radius: 8px;
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .info {
        background: #451a03;
        border-color: #d97706;
      }
    }
    
    .info-item {
      font-size: 14px;
      color: #78350f;
      margin-bottom: 5px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-item {
        color: #fde68a;
      }
    }
    
    .code {
      margin-top: 15px;
      padding: 12px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #020617;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 box-sizing Property</h1>
    <p class="subtitle">Compare content-box vs border-box</p>
    
    <div class="comparison">
      <div class="box-example">
        <h3>content-box (Default)</h3>
        <div class="demo-container">
          <div class="demo-box content-box">
            Content
          </div>
        </div>
        <div class="info">
          <div class="info-item"><strong>Width:</strong> 200px</div>
          <div class="info-item"><strong>Padding:</strong> 20px each side</div>
          <div class="info-item"><strong>Border:</strong> 10px each side</div>
          <div class="info-item"><strong>Total Width:</strong> 200 + 40 + 20 = <strong>260px</strong></div>
        </div>
        <div class="code">box-sizing: content-box;</div>
      </div>
      
      <div class="box-example">
        <h3>border-box (Better!)</h3>
        <div class="demo-container">
          <div class="demo-box border-box">
            Content
          </div>
        </div>
        <div class="info">
          <div class="info-item"><strong>Width:</strong> 200px</div>
          <div class="info-item"><strong>Padding:</strong> 20px each side</div>
          <div class="info-item"><strong>Border:</strong> 10px each side</div>
          <div class="info-item"><strong>Total Width:</strong> Exactly <strong>200px</strong></div>
        </div>
        <div class="code">box-sizing: border-box;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssBoxModel({ onOpenWebPlayground }: CssBoxModelProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="CSS · Box Model & Layout"
        title="The Box Model"
        description="Understand how margin, border, padding, and content work together"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is the Box Model?
          </CardTitle>
          <CardDescription>
            Every element on your page is a rectangular box
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The CSS Box Model is <strong className="text-foreground">the foundation of layout</strong>. Every HTML element 
            is treated as a box with four layers: content, padding, border, and margin. Understanding how these layers work 
            together is crucial for controlling spacing and layout!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">4 Layers</h4>
              <p className="text-sm text-muted-foreground">
                Content → Padding → Border → Margin (from inside out)
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Maximize className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Total Size</h4>
              <p className="text-sm text-muted-foreground">
                Element width = content + padding + border (+ margin for spacing)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Box Model Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Box Model Layers
          </CardTitle>
          <CardDescription>
            Visual representation of the box model
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={boxModelVisualizationExample}
            title="Box Model Visualization"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">📦 Understanding Each Layer:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Content:</strong> The actual content (text, images, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Padding:</strong> Space between content and border (inside)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Border:</strong> A line around the padding and content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Margin:</strong> Space outside the border (creates gap between elements)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </div>
            2. Interactive Box Model
          </CardTitle>
          <CardDescription>
            Adjust values and see how they affect the box
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interactiveBoxModelExample}
            title="Interactive Demo"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Try It!</AlertTitle>
            <AlertDescription>
              Adjust the sliders to see how margin, border, and padding affect the total width of the box. 
              Notice how adding padding and border increases the total size!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Live Box-sizing Toggle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Maximize className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            3. Live Box-Sizing Toggle
          </CardTitle>
          <CardDescription>
            Switch between content-box and border-box to see the difference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={liveBoxSizingExample}
            title="Live Box-Sizing Demo"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>The Key Difference</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                <strong>content-box (default):</strong> Width and height only apply to the content. Padding and border are added on top.
              </p>
              <p>
                <strong>border-box (recommended):</strong> Width and height include padding and border. The content area shrinks to fit everything within the specified size.
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Box-sizing Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Maximize className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            4. Side-by-Side Comparison
          </CardTitle>
          <CardDescription>
            Visual comparison of both box-sizing modes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={boxSizingComparisonExample}
            title="box-sizing Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Box model properties at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">margin: 20px;</code>
              <p className="text-sm text-muted-foreground mt-1">Space outside the element</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">padding: 20px;</code>
              <p className="text-sm text-muted-foreground mt-1">Space inside the element (between content and border)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">border: 2px solid #3b82f6;</code>
              <p className="text-sm text-muted-foreground mt-1">Border around the element</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">box-sizing: border-box;</code>
              <p className="text-sm text-muted-foreground mt-1">Include padding and border in width calculation (recommended!)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">width: 200px; height: 100px;</code>
              <p className="text-sm text-muted-foreground mt-1">Set content width and height</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use box-sizing: border-box:</strong> Makes sizing predictable and easier</li>
            <li><strong>Reset globally:</strong> Apply <code className="px-1.5 py-0.5 bg-muted rounded text-xs">* {`{ box-sizing: border-box; }`}</code></li>
            <li><strong>Use margin for spacing:</strong> Between elements, not inside them</li>
            <li><strong>Use padding for breathing room:</strong> Inside elements around content</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          The box model and box-sizing property work perfectly in all modern browsers! Universal support since IE8+.
        </AlertDescription>
      </Alert>
    </div>
  );
}
