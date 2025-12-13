'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Grid, CheckCircle, Layers, Info, ArrowRight, Lightbulb, Sparkles, Code, Layout, AlignHorizontalSpaceAround } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssSubgridProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSubgrid({ onOpenWebPlayground }: CssSubgridProps) {
  const [selectedExample, setSelectedExample] = useState('basic');

  const basicSubgridExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Subgrid - Basic Example</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
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
      color: #8b5cf6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Parent Grid with 3 columns */
    .parent-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 20px;
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      border-radius: 12px;
      margin-bottom: 20px;
      border: 3px dashed #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .parent-grid { 
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    /* Child with Subgrid - inherits parent columns */
    .subgrid-child {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: span 3;
      gap: 20px;
      background: rgba(255,255,255,0.9);
      border-radius: 8px;
      padding: 20px;
      border: 2px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .subgrid-child { 
        background: rgba(15,23,42,0.9);
        border-color: #c4b5fd; 
      }
    }
    
    .item {
      padding: 20px;
      background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: #6b21a8;
      border: 2px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .item { 
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        color: #e9d5ff;
        border-color: #c4b5fd;
      }
    }
    
    .label {
      font-size: 0.85rem;
      color: #8b5cf6;
      font-weight: 700;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label { color: #c4b5fd; }
    }
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box { 
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24; 
      }
    }
    
    .info-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #fde68a; }
    }
    
    .info-text {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #fef3c7; }
    }
    
    code {
      background: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #8b5cf6;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #c4b5fd; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 CSS Subgrid</h1>
    <p class="subtitle">Inherit grid tracks from parent grid for perfect alignment</p>
    
    <div class="label">Parent Grid (3 columns)</div>
    <div class="parent-grid">
      <div class="subgrid-child">
        <div class="item">Column 1<br>Aligned</div>
        <div class="item">Column 2<br>Aligned</div>
        <div class="item">Column 3<br>Aligned</div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">✨ How Subgrid Works</div>
      <p class="info-text">
        The child element uses <code>grid-template-columns: subgrid</code> to inherit 
        the parent's 3-column grid tracks. This ensures perfect alignment across nested grids!
      </p>
    </div>
  </div>
</body>
</html>`;

  const cardLayoutExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subgrid - Card Layout</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
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
    h1 { color: #8b5cf6; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    
    .card {
      display: grid;
      grid-template-rows: subgrid;
      grid-row: span 3;
      background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
      border-radius: 12px;
      padding: 20px;
      border: 2px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .card { 
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    .card-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #6b21a8;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-title { color: #e9d5ff; }
    }
    
    .card-description {
      color: #7c3aed;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-description { color: #ddd6fe; }
    }
    
    .card-footer {
      margin-top: auto;
      padding-top: 10px;
      border-top: 2px solid #8b5cf6;
      color: #8b5cf6;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-footer { border-top-color: #c4b5fd; color: #c4b5fd; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Subgrid Card Layout</h1>
    
    <div class="card-grid">
      <div class="card">
        <div class="card-title">Card One</div>
        <div class="card-description">Short description</div>
        <div class="card-footer">Read More →</div>
      </div>
      
      <div class="card">
        <div class="card-title">Card Two</div>
        <div class="card-description">This is a much longer description that takes up more space but all footers still align!</div>
        <div class="card-footer">Read More →</div>
      </div>
      
      <div class="card">
        <div class="card-title">Card Three</div>
        <div class="card-description">Medium length content here</div>
        <div class="card-footer">Read More →</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Grid}
        category="CSS · Modern Features"
        title="CSS Subgrid"
        description="Inherit grid tracks from parent grid for perfect alignment across nested layouts"
        colorTheme="purple"
      />

      {/* What is CSS Subgrid Section - Enhanced with animations */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50/60 via-white to-pink-50/60 dark:from-purple-950/30 dark:via-slate-900 dark:to-pink-950/30 backdrop-blur">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl animate-pulse"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Grid className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    What is CSS Subgrid?
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Inherit parent grid tracks for perfect nested alignment
                  </CardDescription>
                </div>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              CSS Grid Level 2
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          {/* Main Explanation */}
          <Alert className="border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">The Magic of Subgrid</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Subgrid allows a grid item to inherit the column or row tracks from its parent grid, enabling perfect alignment across nested grid levels. Before subgrid, achieving this required complex workarounds or was simply impossible!
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Problem vs Solution */}
            <div className="space-y-4">
              <div className="relative p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-800 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <Code className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 className="font-bold text-lg text-red-700 dark:text-red-300">Without Subgrid</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Nested grids create their own independent tracks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Misaligned content across nested levels
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Complex calculations and workarounds needed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">❌</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Card footers at different heights
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300">With Subgrid</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✅</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Child inherits parent's grid tracks perfectly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✅</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Perfect alignment across all nested levels
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✅</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Clean, simple CSS with no calculations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✅</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        All card footers align automatically
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Concepts Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Track Inheritance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Child grid items use parent's column or row track sizing automatically
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <AlignHorizontalSpaceAround className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Perfect Alignment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content aligns perfectly across parent and child grids
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-sm hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">Simplified Code</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No complex calculations or JavaScript needed for alignment
                </p>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="relative p-6 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-amber-950/30 rounded-xl border-2 border-amber-200 dark:border-amber-800 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">💡 Pro Tip: Best Use Cases</h4>
                <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span><strong>Card Layouts:</strong> Keep footers aligned across cards with varying content heights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span><strong>Form Layouts:</strong> Align labels and inputs in nested fieldsets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span><strong>Data Tables:</strong> Create complex table-like layouts with perfect alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Grid className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            Choose an example to see subgrid in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('basic')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'basic'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Basic Subgrid
            </button>
            <button
              onClick={() => setSelectedExample('cards')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'cards'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Card Layout
            </button>
          </div>

          {selectedExample === 'basic' && (
            <FrontendCodePreview
              html={basicSubgridExample}
              title="Basic Subgrid - Column Inheritance"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'cards' && (
            <FrontendCodePreview
              html={cardLayoutExample}
              title="Subgrid Card Layout - Row Alignment"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* Subgrid Syntax & Properties */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-pink-950/10"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Subgrid Syntax & Properties</CardTitle>
              <CardDescription>Two ways to use subgrid for different alignment needs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column Subgrid */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-purple-200 dark:border-purple-700 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Grid className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-purple-700 dark:text-purple-300">Column Subgrid</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">CSS Syntax</div>
                    <code className="block font-mono text-sm text-purple-700 dark:text-purple-300">
                      grid-template-columns: subgrid;
                    </code>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Required Properties:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm font-mono text-gray-700 dark:text-gray-300">display: grid;</code>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Child must be a grid container</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm font-mono text-gray-700 dark:text-gray-300">grid-column: span 3;</code>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Span parent columns to inherit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Use For:</span>
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      Horizontal alignment - perfect for card grids, navigation menus, product listings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row Subgrid */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-blue-200 dark:border-blue-700 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-blue-700 dark:text-blue-300">Row Subgrid</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">CSS Syntax</div>
                    <code className="block font-mono text-sm text-blue-700 dark:text-blue-300">
                      grid-template-rows: subgrid;
                    </code>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Required Properties:</h5>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm font-mono text-gray-700 dark:text-gray-300">display: grid;</code>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Child must be a grid container</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <code className="text-sm font-mono text-gray-700 dark:text-gray-300">grid-row: span 3;</code>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Span parent rows to inherit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Use For:</span>
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      Vertical alignment - great for card layouts where titles, content, and footers align
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Example */}
          <div className="relative p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-3">Complete Subgrid Example</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-700">
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Parent Grid</div>
                    <pre className="font-mono text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}</pre>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-700">
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Child with Subgrid</div>
                    <pre className="font-mono text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`.child {
  display: grid;
  grid-template-columns: subgrid;  /* Inherits 3 columns */
  grid-column: span 3;              /* Spans all 3 columns */
  gap: 20px;
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Use Subgrid - Enhanced Section */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/50 to-cyan-50/50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">When to Use Subgrid</CardTitle>
              <CardDescription>Perfect use cases for CSS Subgrid</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Card Layouts */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layout className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Card Layouts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Align card footers across different content lengths. Perfect for product cards, blog posts, and feature showcases.
                    </p>
                    <div className="mt-3 p-2 bg-purple-50 dark:bg-purple-950/30 rounded text-xs font-mono text-purple-700 dark:text-purple-300">
                      grid-template-rows: subgrid;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Layouts */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Form Layouts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Align labels and inputs in nested fieldsets. Great for complex forms with consistent alignment.
                    </p>
                    <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-950/30 rounded text-xs font-mono text-blue-700 dark:text-blue-300">
                      grid-template-columns: subgrid;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table-like Layouts */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Grid className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">Table-like Layouts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Create complex aligned structures that behave like tables but with more flexibility and semantics.
                    </p>
                    <div className="mt-3 p-2 bg-emerald-50 dark:bg-emerald-950/30 rounded text-xs font-mono text-emerald-700 dark:text-emerald-300">
                      grid-template-columns: subgrid;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nested Components */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-700 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Nested Components</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Maintain grid alignment across component boundaries in modern component-based architectures.
                    </p>
                    <div className="mt-3 p-2 bg-amber-50 dark:bg-amber-950/30 rounded text-xs font-mono text-amber-700 dark:text-amber-300">
                      grid-template-rows: subgrid;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support - Enhanced */}
      <Card className="relative overflow-hidden border-2 border-purple-200 dark:border-purple-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-pink-50/60 to-purple-50/60 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-purple-950/20"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Info className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Browser Support
                </CardTitle>
                <CardDescription>Excellent support across modern browsers</CardDescription>
              </div>
            </div>
            <Badge className="bg-emerald-500 text-white border-0">
              Widely Supported
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <Alert className="mb-6 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Production Ready!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              CSS Subgrid has excellent browser support and is ready for production use. Available in all modern browsers since 2023.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Chrome */}
            <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">Chrome</h4>
                  <Badge className="bg-emerald-500 text-white text-xs">Version 117+</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Full Support Since Aug 2023</span>
              </div>
            </div>

            {/* Firefox */}
            <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🦊</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">Firefox</h4>
                  <Badge className="bg-emerald-500 text-white text-xs">Version 71+</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Full Support Since Dec 2019</span>
              </div>
            </div>

            {/* Safari */}
            <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧭</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">Safari</h4>
                  <Badge className="bg-emerald-500 text-white text-xs">Version 16+</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Full Support Since Sep 2022</span>
              </div>
            </div>

            {/* Edge */}
            <div className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔷</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">Edge</h4>
                  <Badge className="bg-emerald-500 text-white text-xs">Version 117+</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Full Support Since Aug 2023</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Progressive Enhancement</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  For older browsers, use <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-blue-600 dark:text-blue-400">@supports (grid-template-columns: subgrid)</code> to provide fallback layouts. Most users on modern browsers will see the enhanced subgrid version!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
