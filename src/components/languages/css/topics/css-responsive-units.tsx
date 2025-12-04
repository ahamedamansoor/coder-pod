'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Sparkles, Ruler, Smartphone, Monitor, Maximize2, CheckCircle, Info, Zap, Target, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssResponsiveUnitsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const viewportUnitsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viewport Units Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #92400e 0%, #78350f 100%); }
    }
    
    .hero {
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2vh;
      color: white;
      text-align: center;
      padding: 5vw;
    }
    
    .title {
      font-size: 8vmin;
      font-weight: bold;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    }
    
    .subtitle {
      font-size: 3vmin;
      opacity: 0.95;
      max-width: 60vw;
    }
    
    .demo-boxes {
      position: absolute;
      bottom: 5vh;
      left: 5vw;
      right: 5vw;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20vmin, 1fr));
      gap: 2vmin;
    }
    
    .box {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      padding: 2vmin;
      border-radius: 1vmin;
      border: 2px solid rgba(255, 255, 255, 0.3);
      font-weight: bold;
      text-align: center;
    }
    
    .unit-label {
      font-size: 1.5vmin;
      opacity: 0.8;
      margin-top: 1vmin;
    }
    
    .value {
      font-size: 3vmin;
      margin: 1vmin 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.2);
      }
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="title">🎯 Viewport Units</div>
    <div class="subtitle">
      These elements scale based on your viewport size. 
      Try resizing your browser window!
    </div>
    
    <div class="demo-boxes">
      <div class="box">
        <div class="value">100vw</div>
        <div class="unit-label">Full Width</div>
      </div>
      <div class="box">
        <div class="value">100vh</div>
        <div class="unit-label">Full Height</div>
      </div>
      <div class="box">
        <div class="value">50vmin</div>
        <div class="unit-label">Smaller Dimension</div>
      </div>
      <div class="box">
        <div class="value">50vmax</div>
        <div class="unit-label">Larger Dimension</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const clampExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clamp() Function Demo</title>
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #9f1239 0%, #831843 100%); }
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: clamp(20px, 5vw, 60px);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      font-size: clamp(2rem, 5vw, 4rem);
      color: #be185d;
      margin-bottom: 30px;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .demo-section {
      margin: 40px 0;
      padding: clamp(15px, 3vw, 40px);
      background: linear-gradient(135deg, #fce7f3, #fbcfe8);
      border-radius: 15px;
      border: 2px solid #f9a8d4;
    }
    @media (prefers-color-scheme: dark) {
      .demo-section {
        background: linear-gradient(135deg, #831843, #9f1239);
        border-color: #be185d;
      }
    }
    
    .fluid-text {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      line-height: 1.6;
      color: #831843;
    }
    @media (prefers-color-scheme: dark) {
      .fluid-text { color: #fce7f3; }
    }
    
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 30vw, 300px), 1fr));
      gap: clamp(15px, 3vw, 30px);
      margin-top: 30px;
    }
    
    .card {
      background: white;
      padding: clamp(15px, 3vw, 30px);
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      border: 2px solid #f9a8d4;
    }
    @media (prefers-color-scheme: dark) {
      .card {
        background: #0f172a;
        border-color: #be185d;
      }
    }
    
    .card-title {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      font-weight: bold;
      color: #be185d;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .card-title { color: #fbcfe8; }
    }
    
    .code-block {
      background: #f8fafc;
      padding: 15px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: clamp(0.8rem, 1.5vw, 1rem);
      margin-top: 15px;
      color: #334155;
      overflow-x: auto;
    }
    @media (prefers-color-scheme: dark) {
      .code-block {
        background: #020617;
        color: #cbd5e1;
      }
    }
    
    .label {
      display: inline-block;
      padding: 8px 16px;
      background: #be185d;
      color: white;
      border-radius: 20px;
      font-size: clamp(0.8rem, 1.5vw, 1rem);
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Fluid Typography with clamp()</h1>
    
    <div class="demo-section">
      <div class="fluid-text">
        This text smoothly scales between minimum and maximum sizes based on the viewport width. 
        No media queries needed! Try resizing your browser to see the magic happen.
      </div>
      <div class="code-block">font-size: clamp(1rem, 2.5vw, 1.5rem);</div>
    </div>
    
    <h2 style="font-size: clamp(1.5rem, 3vw, 2.5rem); margin-top: 40px; text-align: center;">
      📦 Responsive Cards
    </h2>
    
    <div class="cards">
      <div class="card">
        <div class="card-title">Fluid Padding</div>
        <p style="color: #64748b; font-size: clamp(0.9rem, 2vw, 1rem);">
          Padding adjusts from 15px to 30px based on viewport
        </p>
        <div class="label">clamp(15px, 3vw, 30px)</div>
      </div>
      
      <div class="card">
        <div class="card-title">Fluid Gaps</div>
        <p style="color: #64748b; font-size: clamp(0.9rem, 2vw, 1rem);">
          Grid gaps scale smoothly from small to large screens
        </p>
        <div class="label">gap: clamp(15px, 3vw, 30px)</div>
      </div>
      
      <div class="card">
        <div class="card-title">Fluid Widths</div>
        <p style="color: #64748b; font-size: clamp(0.9rem, 2vw, 1rem);">
          Column widths adapt perfectly to screen size
        </p>
        <div class="label">minmax(clamp(...))</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const containerUnitsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Container Query Units</title>
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #3730a3 0%, #312e81 100%); }
    }
    
    .main-container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    @media (prefers-color-scheme: dark) {
      .main-container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      text-align: center;
      color: #4f46e5;
      margin-bottom: 40px;
      font-size: clamp(2rem, 4vw, 3rem);
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #818cf8; }
    }
    
    .sidebar-layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 30px;
      margin-bottom: 40px;
    }
    
    @media (max-width: 768px) {
      .sidebar-layout {
        grid-template-columns: 1fr;
      }
    }
    
    .sidebar {
      container-type: inline-size;
      container-name: sidebar;
      background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
      padding: 20px;
      border-radius: 15px;
      border: 2px solid #6366f1;
    }
    @media (prefers-color-scheme: dark) {
      .sidebar {
        background: linear-gradient(135deg, #312e81, #3730a3);
        border-color: #4f46e5;
      }
    }
    
    .sidebar-content {
      font-size: 5cqw;
      font-weight: bold;
      color: #3730a3;
      text-align: center;
      padding: 3cqh 0;
    }
    @media (prefers-color-scheme: dark) {
      .sidebar-content { color: #e0e7ff; }
    }
    
    .main-content {
      container-type: inline-size;
      container-name: main;
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
      padding: 30px;
      border-radius: 15px;
      border: 2px solid #a78bfa;
    }
    @media (prefers-color-scheme: dark) {
      .main-content {
        background: linear-gradient(135deg, #4c1d95, #5b21b6);
        border-color: #7c3aed;
      }
    }
    
    .responsive-card {
      background: white;
      padding: 4cqw;
      border-radius: 12px;
      margin-bottom: 3cqh;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    @media (prefers-color-scheme: dark) {
      .responsive-card {
        background: #0f172a;
      }
    }
    
    .card-title {
      font-size: 4cqw;
      font-weight: bold;
      color: #6366f1;
      margin-bottom: 2cqh;
    }
    @media (prefers-color-scheme: dark) {
      .card-title { color: #a5b4fc; }
    }
    
    .card-text {
      font-size: 2cqw;
      color: #64748b;
      line-height: 1.6;
    }
    @media (prefers-color-scheme: dark) {
      .card-text { color: #cbd5e1; }
    }
    
    .info-box {
      background: rgba(99, 102, 241, 0.1);
      border-left: 4px solid #6366f1;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;
    }
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: rgba(99, 102, 241, 0.2);
        border-color: #818cf8;
      }
    }
  </style>
</head>
<body>
  <div class="main-container">
    <h1>📦 Container Query Units</h1>
    
    <div class="info-box">
      <strong style="color: #4f46e5;">💡 What are Container Query Units?</strong>
      <p style="margin-top: 10px; color: #64748b;">
        Unlike viewport units (vw, vh) that scale based on the viewport, 
        container query units (cqw, cqh) scale based on their parent container's size. 
        This makes components truly modular and reusable!
      </p>
    </div>
    
    <div class="sidebar-layout">
      <div class="sidebar">
        <div class="sidebar-content">
          5cqw Sidebar Text
        </div>
        <div style="text-align: center; font-size: 0.9rem; color: #6366f1; margin-top: 15px;">
          Scales with sidebar width
        </div>
      </div>
      
      <div class="main-content">
        <div class="responsive-card">
          <div class="card-title">4cqw Title</div>
          <div class="card-text">
            This card uses container query units (cqw, cqh) for sizing. 
            The text and padding scale based on the main content container, 
            not the entire viewport!
          </div>
        </div>
        
        <div class="responsive-card">
          <div class="card-title">Responsive Cards</div>
          <div class="card-text">
            Try resizing the browser. Notice how these cards scale independently 
            based on their container, creating a truly component-based design system.
          </div>
        </div>
      </div>
    </div>
    
    <div style="text-align: center; padding: 30px; background: #f8fafc; border-radius: 12px; margin-top: 30px;">
      <h3 style="color: #4f46e5; margin-bottom: 15px;">🎯 Container Unit Types</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 20px;">
        <div style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #e0e7ff;">
          <strong style="color: #6366f1;">cqw</strong>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 5px;">Container Width</div>
        </div>
        <div style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #e0e7ff;">
          <strong style="color: #6366f1;">cqh</strong>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 5px;">Container Height</div>
        </div>
        <div style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #e0e7ff;">
          <strong style="color: #6366f1;">cqi</strong>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 5px;">Inline Size</div>
        </div>
        <div style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #e0e7ff;">
          <strong style="color: #6366f1;">cqb</strong>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 5px;">Block Size</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssResponsiveUnits({ onOpenWebPlayground }: CssResponsiveUnitsProps) {
  const [selectedUnit, setSelectedUnit] = useState('vw');
  
  const units = [
    { value: 'vw', name: 'vw', desc: 'Viewport Width', example: '50vw = 50% of viewport width' },
    { value: 'vh', name: 'vh', desc: 'Viewport Height', example: '100vh = full viewport height' },
    { value: 'vmin', name: 'vmin', desc: 'Smaller Dimension', example: '10vmin = 10% of smaller dimension' },
    { value: 'vmax', name: 'vmax', desc: 'Larger Dimension', example: '10vmax = 10% of larger dimension' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Ruler}
        category="CSS · Modern Layout"
        title="Modern Responsive Units"
        description="Master viewport units, container queries, and fluid sizing with clamp(), min(), and max()"
        colorTheme="purple"
      />

      {/* INTRODUCTION */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What are Modern Responsive Units?
          </CardTitle>
          <CardDescription>
            CSS units that adapt to viewport and container sizes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Modern CSS provides <strong className="text-foreground">powerful responsive units</strong> that go beyond 
            pixels and percentages. These units automatically scale based on viewport size, container dimensions, 
            or use mathematical functions like <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">clamp()</code> for 
            fluid, responsive designs without media queries!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Monitor className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Viewport Units</h4>
              <p className="text-sm text-muted-foreground">
                vw, vh, vmin, vmax - Scale with browser window
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Container Units</h4>
              <p className="text-sm text-muted-foreground">
                cqw, cqh, cqi, cqb - Scale with parent container
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Fluid Functions</h4>
              <p className="text-sm text-muted-foreground">
                clamp(), min(), max() - Mathematical sizing
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LIVE DEMO */}
      <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <Zap className="w-5 h-5" />
            Interactive Unit Comparison
          </CardTitle>
          <CardDescription>
            See how different units behave
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {units.map((unit) => (
                <button
                  key={unit.value}
                  onClick={() => setSelectedUnit(unit.value)}
                  className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all ${
                    selectedUnit === unit.value
                      ? 'bg-purple-500 text-white border-purple-500 scale-105'
                      : 'bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-800 hover:border-purple-400'
                  }`}
                >
                  {unit.name}
                </button>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <div 
                className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300"
                style={{ 
                  width: selectedUnit === 'vw' ? '50vw' : 
                         selectedUnit === 'vh' ? '100%' : 
                         selectedUnit === 'vmin' ? '40vmin' : '40vmax',
                  height: selectedUnit === 'vh' ? '30vh' : 
                          selectedUnit === 'vw' ? '150px' :
                          selectedUnit === 'vmin' ? '20vmin' : '20vmax'
                }}
              >
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">📏</div>
                  <div>{units.find(u => u.value === selectedUnit)?.desc}</div>
                  <div className="text-sm opacity-90 mt-1">
                    {units.find(u => u.value === selectedUnit)?.example}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* VIEWPORT UNITS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Smartphone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Viewport Units (vw, vh, vmin, vmax)
          </CardTitle>
          <CardDescription>
            Units relative to the viewport dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={viewportUnitsExample}
            title="Viewport Units Demo"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">📏 Viewport Unit Types:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>vw (viewport width):</strong> 1vw = 1% of viewport width</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>vh (viewport height):</strong> 1vh = 1% of viewport height</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>vmin:</strong> 1vmin = 1% of smaller viewport dimension</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>vmax:</strong> 1vmax = 1% of larger viewport dimension</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CLAMP FUNCTION */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            2. Fluid Sizing with clamp()
          </CardTitle>
          <CardDescription>
            Set minimum, preferred, and maximum values in one property
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={clampExample}
            title="clamp() Function Demo"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Understanding clamp()</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                <code className="text-sm bg-muted px-1 rounded">clamp(min, preferred, max)</code>
              </p>
              <p>
                The browser chooses a value between min and max, using the preferred value when possible. 
                Perfect for fluid typography and spacing without media queries!
              </p>
              <p className="mt-2 font-semibold">
                Example: <code className="text-sm bg-muted px-1 rounded">font-size: clamp(1rem, 2.5vw, 2rem);</code>
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* CONTAINER QUERY UNITS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            3. Container Query Units (cqw, cqh)
          </CardTitle>
          <CardDescription>
            Size elements based on parent container, not viewport
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={containerUnitsExample}
            title="Container Query Units"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">📦 Container Unit Types:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>cqw:</strong> 1% of container's width</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>cqh:</strong> 1% of container's height</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>cqi:</strong> 1% of container's inline size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>cqb:</strong> 1% of container's block size</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Common responsive unit patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">font-size: clamp(1rem, 2.5vw, 2rem);</code>
              <p className="text-sm text-muted-foreground mt-1">Fluid typography between 1rem and 2rem</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">height: 100vh;</code>
              <p className="text-sm text-muted-foreground mt-1">Full viewport height (hero sections)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">width: min(100%, 1200px);</code>
              <p className="text-sm text-muted-foreground mt-1">Responsive container with max-width</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">padding: clamp(1rem, 5vw, 3rem);</code>
              <p className="text-sm text-muted-foreground mt-1">Fluid spacing that scales</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">font-size: 4cqw;</code>
              <p className="text-sm text-muted-foreground mt-1">Text scales with container width</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use clamp() for typography:</strong> Avoid text being too small or large on any device</li>
            <li><strong>Prefer vmin/vmax for squares:</strong> Maintains shape across all viewports</li>
            <li><strong>Combine units:</strong> <code className="text-sm bg-muted px-1 rounded">calc(50vw - 20px)</code> for precise control</li>
            <li><strong>Container queries for components:</strong> Makes components truly modular and reusable</li>
            <li><strong>Test across devices:</strong> Viewport units behave differently on mobile</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* BROWSER SUPPORT */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <strong>Viewport units:</strong> Excellent support in all modern browsers.<br/>
          <strong>clamp(), min(), max():</strong> Chrome 79+, Firefox 75+, Safari 13.1+<br/>
          <strong>Container queries:</strong> Chrome 105+, Firefox 110+, Safari 16+ (cutting-edge feature!)
        </AlertDescription>
      </Alert>
    </div>
  );
}
