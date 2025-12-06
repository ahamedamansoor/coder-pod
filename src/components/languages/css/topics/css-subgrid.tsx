'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Grid, CheckCircle, Layers, Info, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Grid className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is CSS Subgrid?
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            📐 Inherit parent grid tracks for perfect nested grid alignment!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Grid className="w-5 h-5" />
                  The Problem Without Subgrid
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Before subgrid, nested grids couldn't align with their parent's grid tracks. 
                  Each nested grid had its own independent track sizing, making perfect alignment impossible.
                </p>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200/50 mb-4">
                  <div className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Without Subgrid:</div>
                  <div className="text-sm text-red-600 dark:text-red-400">
                    • Nested grids can't align with parent<br/>
                    • Content misalignment issues<br/>
                    • Complex workarounds needed
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200/50">
                  <div className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ With Subgrid:</div>
                  <div className="text-sm text-green-600 dark:text-green-400">
                    • Perfect alignment across levels<br/>
                    • Simplified layout code<br/>
                    • Flexible nested structures
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200/50">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">
                  Key Benefits
                </h4>
                
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Perfect Alignment</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Child items align perfectly with parent grid tracks
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <Layers className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Simplified Code</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        No need for complex calculations or workarounds
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Flexible Layouts</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Create complex nested grids with ease
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">📐</div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Subgrid Syntax</div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                      grid-template-columns: subgrid;
                    </code>
                  </div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">
                    Inherits parent's column tracks
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use subgrid for card layouts where you want all footers to align perfectly!
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Subgrid Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">
                Column Subgrid
              </h4>
              <code className="text-sm bg-white dark:bg-gray-800 p-2 rounded block mb-2">
                grid-template-columns: subgrid;
              </code>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Inherit parent's column tracks for horizontal alignment
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">
                Row Subgrid
              </h4>
              <code className="text-sm bg-white dark:bg-gray-800 p-2 rounded block mb-2">
                grid-template-rows: subgrid;
              </code>
              <p className="text-sm text-pink-600 dark:text-pink-400">
                Inherit parent's row tracks for vertical alignment
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>When to Use Subgrid</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Card layouts</strong> - Align card footers across different content lengths</li>
            <li><strong>Form layouts</strong> - Align labels and inputs in nested fieldsets</li>
            <li><strong>Table-like layouts</strong> - Create complex aligned structures</li>
            <li><strong>Nested components</strong> - Maintain grid alignment across component boundaries</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
        <Info className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-purple-900 dark:text-purple-100">Browser Support</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200">
          <div className="space-y-2 mt-2">
            <div><strong>✅ Chrome 117+</strong> - Full support</div>
            <div><strong>✅ Firefox 71+</strong> - Full support</div>
            <div><strong>✅ Safari 16+</strong> - Full support</div>
            <div><strong>✅ Edge 117+</strong> - Full support</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
