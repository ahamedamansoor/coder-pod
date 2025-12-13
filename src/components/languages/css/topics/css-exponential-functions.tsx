'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { TrendingUp, CheckCircle, Sparkles, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssExponentialFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssExponentialFunctions({ onOpenWebPlayground }: CssExponentialFunctionsProps) {
  const [selectedExample, setSelectedExample] = useState('scaling');

  const scalingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exponential Functions - Scaling Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #b45309 0%, #92400e 100%); }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #f59e0b;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #fcd34d; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-area {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 60px 40px;
      border-radius: 12px;
      margin: 20px 0;
      border: 3px solid #f59e0b;
      display: flex;
      gap: 20px;
      justify-content: space-around;
      align-items: flex-end;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-area {
        background: linear-gradient(135deg, #b45309 0%, #92400e 100%);
        border-color: #fcd34d;
      }
    }
    
    .bar-demo {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    
    .bar-label {
      font-weight: 700;
      color: #d97706;
      font-size: 0.9rem;
      order: 2;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar-label { color: #fde68a; }
    }
    
    .bar {
      background: white;
      border: 3px solid #f59e0b;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #d97706;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      order: 1;
      width: 60px;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar {
        background: #0f172a;
        color: #fde68a;
        border-color: #fcd34d;
      }
    }
    
    .bar:hover {
      transform: scale(1.05);
    }
    
    /* Exponential growth: 2^n * 10px */
    .bar-1 { height: 20px; }   /* 2^1 = 2 → 20px */
    .bar-2 { height: 40px; }   /* 2^2 = 4 → 40px */
    .bar-3 { height: 80px; }   /* 2^3 = 8 → 80px */
    .bar-4 { height: 160px; }  /* 2^4 = 16 → 160px */
    .bar-5 { height: 240px; }  /* Limited for display */
    
    .info-box {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      border-left: 4px solid #3b82f6;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        border-left-color: #60a5fa;
      }
    }
    
    .info-title {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #bfdbfe; }
    }
    
    .info-text {
      color: #1e40af;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #dbeafe; }
    }
    
    code {
      background: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #f59e0b;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #fcd34d; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📈 Exponential Functions</h1>
    <p class="subtitle">Power-based calculations and growth patterns</p>
    
    <div class="demo-area">
      <div class="bar-demo">
        <div class="bar bar-1">2¹</div>
        <div class="bar-label">20px</div>
      </div>
      <div class="bar-demo">
        <div class="bar bar-2">2²</div>
        <div class="bar-label">40px</div>
      </div>
      <div class="bar-demo">
        <div class="bar bar-3">2³</div>
        <div class="bar-label">80px</div>
      </div>
      <div class="bar-demo">
        <div class="bar bar-4">2⁴</div>
        <div class="bar-label">160px</div>
      </div>
      <div class="bar-demo">
        <div class="bar bar-5">2⁵</div>
        <div class="bar-label">240px</div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">🧮 Exponential Growth Pattern</div>
      <p class="info-text">
        This demonstrates exponential growth (2<sup>n</sup>). While CSS supports <code>pow()</code>, 
        <code>sqrt()</code>, <code>log()</code>, and <code>exp()</code> functions, they have 
        <strong>limited browser support</strong>. This example shows pre-calculated exponential values 
        to demonstrate the concept. Each bar is 2× the previous one!
      </p>
    </div>
  </div>
</body>
</html>`;

  const comparativeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Linear vs Exponential Growth</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #b45309 0%, #92400e 100%); }
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { 
      color: #f59e0b; 
      text-align: center; 
      margin-bottom: 10px;
      font-size: 2.5rem;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #fcd34d; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    @media (max-width: 768px) {
      .comparison { grid-template-columns: 1fr; }
    }
    
    .chart {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 30px;
      border-radius: 12px;
      border: 3px solid #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .chart {
        background: linear-gradient(135deg, #b45309 0%, #92400e 100%);
        border-color: #fcd34d;
      }
    }
    
    .chart-title {
      font-weight: 700;
      color: #d97706;
      margin-bottom: 20px;
      text-align: center;
      font-size: 1.2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .chart-title { color: #fde68a; }
    }
    
    .bars {
      display: flex;
      gap: 15px;
      justify-content: space-around;
      align-items: flex-end;
      height: 250px;
    }
    
    .bar-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    
    .bar {
      background: white;
      border: 3px solid #f59e0b;
      border-radius: 6px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #d97706;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar {
        background: #0f172a;
        color: #fde68a;
        border-color: #fcd34d;
      }
    }
    
    .bar-label {
      font-size: 0.8rem;
      color: #d97706;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar-label { color: #fde68a; }
    }
    
    /* Linear: n * 40px */
    .linear-1 { height: 40px; }
    .linear-2 { height: 80px; }
    .linear-3 { height: 120px; }
    .linear-4 { height: 160px; }
    .linear-5 { height: 200px; }
    
    /* Exponential: 2^n * 10px (limited) */
    .exp-1 { height: 20px; }
    .exp-2 { height: 40px; }
    .exp-3 { height: 80px; }
    .exp-4 { height: 160px; }
    .exp-5 { height: 240px; }
    
    .note {
      margin-top: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .note { 
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); 
        color: #dbeafe; 
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📈 Growth Comparison</h1>
    <p class="subtitle">Linear vs Exponential</p>
    
    <div class="comparison">
      <div class="chart">
        <div class="chart-title">📏 Linear Growth (n × 40)</div>
        <div class="bars">
          <div class="bar-wrapper">
            <div class="bar linear-1">1</div>
            <div class="bar-label">40px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar linear-2">2</div>
            <div class="bar-label">80px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar linear-3">3</div>
            <div class="bar-label">120px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar linear-4">4</div>
            <div class="bar-label">160px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar linear-5">5</div>
            <div class="bar-label">200px</div>
          </div>
        </div>
      </div>
      
      <div class="chart">
        <div class="chart-title">📈 Exponential Growth (2<sup>n</sup> × 10)</div>
        <div class="bars">
          <div class="bar-wrapper">
            <div class="bar exp-1">1</div>
            <div class="bar-label">20px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar exp-2">2</div>
            <div class="bar-label">40px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar exp-3">3</div>
            <div class="bar-label">80px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar exp-4">4</div>
            <div class="bar-label">160px</div>
          </div>
          <div class="bar-wrapper">
            <div class="bar exp-5">5</div>
            <div class="bar-label">240px</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="note">
      💡 Exponential growth accelerates dramatically! While linear adds a constant amount, 
      exponential multiplies, creating rapid increases.
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TrendingUp}
        category="CSS · Modern Features"
        title="Exponential Functions"
        description="Power-based calculations with pow(), sqrt(), log(), and exp()"
        colorTheme="amber"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-amber-700 dark:text-amber-300">
            <div className="relative">
              <TrendingUp className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            Exponential Functions
          </CardTitle>
          <CardDescription className="text-lg text-amber-600 dark:text-amber-400">
            📈 Power-based mathematical operations for advanced calculations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-amber-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-amber-700 dark:text-amber-300">
                  What are Exponential Functions?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CSS Exponential Functions (<code className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">pow()</code>, 
                  <code className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">sqrt()</code>, 
                  <code className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">log()</code>, 
                  <code className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">exp()</code>, 
                  <code className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">hypot()</code>) 
                  enable advanced mathematical operations for exponential growth, power calculations, and complex sizing formulas!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-amber-700 dark:text-amber-300">Power Calculations</div>
                      <div className="text-sm text-amber-600 dark:text-amber-400">
                        Calculate exponential values, roots, and logarithms
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300">Dynamic Sizing</div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">
                        Create responsive layouts with mathematical precision
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200/50">
                <h4 className="font-bold mb-4 text-amber-700 dark:text-amber-300">
                  Available Functions
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">⚡</span> pow(base, exponent)
                    </div>
                    <code className="text-sm font-mono text-amber-600 dark:text-amber-400 block mb-2">
                      width: calc(pow(2, 5) * 10px); /* 2⁵ × 10 = 320px */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Raises a base to a power. Returns base<sup>exponent</sup>.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">√</span> sqrt(value)
                    </div>
                    <code className="text-sm font-mono text-orange-600 dark:text-orange-400 block mb-2">
                      width: calc(sqrt(400) * 1px); /* √400 = 20px */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the square root of a number.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📊</span> log(value)
                    </div>
                    <code className="text-sm font-mono text-yellow-600 dark:text-yellow-400 block mb-2">
                      opacity: calc(log(10) / 2.3); /* Natural logarithm */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the natural logarithm (base e) of a number.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📈</span> exp(value)
                    </div>
                    <code className="text-sm font-mono text-red-600 dark:text-red-400 block mb-2">
                      transform: scale(exp(1)); /* e¹ = 2.718... */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns e (Euler's number) raised to the power of value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-amber-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-amber-900/30 p-6 rounded-xl border border-amber-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">📈</div>
                  <div className="font-bold text-lg text-amber-700 dark:text-amber-300">Math Functions</div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-amber-600 dark:text-amber-400">pow()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-orange-600 dark:text-orange-400">sqrt()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-yellow-600 dark:text-yellow-400">log()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-red-600 dark:text-red-400">exp()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                      + hypot()
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-orange-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚠️</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Limited Support</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Cutting-edge functions with evolving browser support!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            See exponential concepts in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('scaling')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'scaling'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Exponential Growth
            </button>
            <button
              onClick={() => setSelectedExample('comparative')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'comparative'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Linear vs Exponential
            </button>
          </div>

          {selectedExample === 'scaling' && (
            <FrontendCodePreview
              html={scalingExample}
              title="Exponential Growth Pattern"
              colorTheme="amber"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'comparative' && (
            <FrontendCodePreview
              html={comparativeExample}
              title="Growth Comparison"
              colorTheme="amber"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200/50">
              <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-3">Layout & Sizing</h4>
              <ul className="text-sm space-y-2 text-amber-600 dark:text-amber-400">
                <li>• <strong>Exponential scales</strong> - Create non-linear size progressions</li>
                <li>• <strong>Responsive sizing</strong> - Calculate dynamic dimensions</li>
                <li>• <strong>Grid systems</strong> - Power-of-2 based layouts</li>
                <li>• <strong>Typography scales</strong> - Harmonious font size ratios</li>
              </ul>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Advanced Calculations</h4>
              <ul className="text-sm space-y-2 text-orange-600 dark:text-orange-400">
                <li>• <strong>Distance formulas</strong> - Calculate using hypot()</li>
                <li>• <strong>Easing functions</strong> - Non-linear animations</li>
                <li>• <strong>Scientific layouts</strong> - Logarithmic scales</li>
                <li>• <strong>Complex transforms</strong> - Mathematical transformations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>When to Use Exponential Functions</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Non-linear scaling:</strong> Create exponential size progressions</li>
            <li><strong>Complex calculations:</strong> Mathematical operations beyond basic arithmetic</li>
            <li><strong>Dynamic spacing:</strong> Power-based spacing systems</li>
            <li><strong>Scientific layouts:</strong> Logarithmic and exponential scales</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-900 dark:text-orange-100">Limited Browser Support</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          <div className="space-y-2 mt-2">
            <div><strong>⚠️ Experimental:</strong> CSS exponential functions have limited browser support</div>
            <div><strong>Chrome 111+:</strong> Behind feature flag</div>
            <div><strong>Firefox 108+:</strong> Behind feature flag</div>
            <div><strong>Safari 15.4+:</strong> Partial support</div>
            <div className="mt-3 pt-3 border-t border-orange-200 dark:border-orange-700">
              <strong>💡 Recommendation:</strong> Use with progressive enhancement and provide fallbacks. Consider 
              pre-calculating values or using JavaScript for production until browser support improves.
            </div>
          </div>
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Learn More</AlertTitle>
        <AlertDescription>
          CSS Math Functions are part of the CSS Values and Units Module Level 4 specification. 
          They enable complex mathematical operations directly in stylesheets, reducing the need for 
          JavaScript calculations. Monitor compatibility before using in production environments.
        </AlertDescription>
      </Alert>
    </div>
  );
}
