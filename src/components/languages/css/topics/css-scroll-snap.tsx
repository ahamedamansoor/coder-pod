'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MousePointerClick, CheckCircle, Smartphone, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssScrollSnapProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssScrollSnap({ onOpenWebPlayground }: CssScrollSnapProps) {
  const [selectedExample, setSelectedExample] = useState('horizontal');

  const horizontalSnapExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Snap - Horizontal</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); }
    }
    
    .container {
      max-width: 800px;
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
      color: #14b8a6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #5eead4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Scroll Container with Snap */
    .scroll-container {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 20px;
      padding: 20px;
      background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
      border-radius: 12px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: #14b8a6 #ccfbf1;
    }
    
    @media (prefers-color-scheme: dark) {
      .scroll-container { 
        background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
        scrollbar-color: #5eead4 #0f766e;
      }
    }
    
    .scroll-container::-webkit-scrollbar {
      height: 8px;
    }
    
    .scroll-container::-webkit-scrollbar-track {
      background: rgba(204, 251, 241, 0.5);
      border-radius: 10px;
    }
    
    .scroll-container::-webkit-scrollbar-thumb {
      background: #14b8a6;
      border-radius: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .scroll-container::-webkit-scrollbar-track {
        background: rgba(15, 118, 110, 0.5);
      }
      .scroll-container::-webkit-scrollbar-thumb {
        background: #5eead4;
      }
    }
    
    /* Scroll Items */
    .scroll-item {
      flex: 0 0 80%;
      scroll-snap-align: center;
      background: white;
      padding: 60px 40px;
      border-radius: 12px;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      color: #0f766e;
      border: 3px solid #14b8a6;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .scroll-item { 
        background: #0f172a;
        color: #99f6e4;
        border-color: #5eead4;
      }
    }
    
    .scroll-item-number {
      font-size: 3rem;
      display: block;
      margin-bottom: 10px;
      color: #14b8a6;
    }
    
    @media (prefers-color-scheme: dark) {
      .scroll-item-number { color: #5eead4; }
    }
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box { 
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24; 
      }
    }
    
    .info-text {
      color: #78350f;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📜 Scroll Snap</h1>
    <p class="subtitle">Smooth horizontal scroll snapping</p>
    
    <div class="scroll-container">
      <div class="scroll-item">
        <span class="scroll-item-number">1</span>
        Slide One
      </div>
      <div class="scroll-item">
        <span class="scroll-item-number">2</span>
        Slide Two
      </div>
      <div class="scroll-item">
        <span class="scroll-item-number">3</span>
        Slide Three
      </div>
      <div class="scroll-item">
        <span class="scroll-item-number">4</span>
        Slide Four
      </div>
      <div class="scroll-item">
        <span class="scroll-item-number">5</span>
        Slide Five
      </div>
    </div>
    
    <div class="info-box">
      <p class="info-text">
        👆 <strong>Scroll horizontally</strong> to snap to each slide! The scroll will automatically 
        snap to the center of each item for a smooth carousel experience.
      </p>
    </div>
  </div>
</body>
</html>`;

  const verticalSnapExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Snap - Vertical</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); }
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #14b8a6; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #5eead4; }
    }
    
    .scroll-container {
      height: 400px;
      overflow-y: auto;
      scroll-snap-type: y mandatory;
      background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
      border-radius: 12px;
      scrollbar-width: thin;
    }
    
    @media (prefers-color-scheme: dark) {
      .scroll-container { background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); }
    }
    
    .section {
      height: 400px;
      scroll-snap-align: start;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
      color: white;
    }
    
    .section:nth-child(1) { background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); }
    .section:nth-child(2) { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); }
    .section:nth-child(3) { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
    .section:nth-child(4) { background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); }
  </style>
</head>
<body>
  <div class="container">
    <h1>📜 Vertical Snap Scrolling</h1>
    <div class="scroll-container">
      <div class="section">Section 1</div>
      <div class="section">Section 2</div>
      <div class="section">Section 3</div>
      <div class="section">Section 4</div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointerClick}
        category="CSS · Modern Features"
        title="CSS Scroll Snap"
        description="Create smooth, controlled scroll experiences with snap points"
        colorTheme="teal"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-teal-700 dark:text-teal-300">
            <div className="relative">
              <MousePointerClick className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            CSS Scroll Snap
          </CardTitle>
          <CardDescription className="text-lg text-teal-600 dark:text-teal-400">
            📜 Control scroll behavior with automatic snap points!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-teal-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-teal-700 dark:text-teal-300">
                  What is Scroll Snap?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CSS Scroll Snap allows you to create smooth, paginated scrolling experiences 
                  where content automatically aligns to specific snap points as the user scrolls.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-teal-700 dark:text-teal-300">Smooth Navigation</div>
                      <div className="text-sm text-teal-600 dark:text-teal-400">
                        Content snaps to defined positions for precise control
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Smartphone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Touch-Friendly</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Perfect for mobile carousels and galleries
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200/50">
                <h4 className="font-bold mb-4 text-teal-700 dark:text-teal-300">
                  Key Properties
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-teal-600 dark:text-teal-400">
                      scroll-snap-type: x mandatory;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Horizontal snap, required to snap
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">
                      scroll-snap-align: center;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Snap to center of container
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      scroll-padding: 20px;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Offset from snap container edges
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-100 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-teal-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">📜</div>
                  <div className="font-bold text-lg text-teal-700 dark:text-teal-300">Snap Types</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-teal-600 dark:text-teal-400">
                      <CheckCircle className="w-4 h-4" />
                      mandatory
                    </div>
                    <div className="flex items-center justify-center gap-2 text-cyan-600 dark:text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      proximity
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use scroll-snap-stop: always to prevent skipping snap points
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
            <div className="p-2 bg-teal-500/10 rounded-lg">
              <MousePointerClick className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            Interactive scroll snap demonstrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('horizontal')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'horizontal'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Horizontal Snap
            </button>
            <button
              onClick={() => setSelectedExample('vertical')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'vertical'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Vertical Snap
            </button>
          </div>

          {selectedExample === 'horizontal' && (
            <FrontendCodePreview
              html={horizontalSnapExample}
              title="Horizontal Scroll Snap Carousel"
              colorTheme="teal"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'vertical' && (
            <FrontendCodePreview
              html={verticalSnapExample}
              title="Vertical Scroll Snap Sections"
              colorTheme="teal"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Snap Alignment Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200/50">
              <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">start</h4>
              <p className="text-sm text-teal-600 dark:text-teal-400 mb-3">
                Snap to the start edge of the container
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                scroll-snap-align: start;
              </code>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200/50">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">center</h4>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-3">
                Snap to the center of the container
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                scroll-snap-align: center;
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">end</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                Snap to the end edge of the container
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                scroll-snap-align: end;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Use Cases for Scroll Snap</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Image carousels</strong> - Smooth image gallery navigation</li>
            <li><strong>Story/slide shows</strong> - Full-screen paginated content</li>
            <li><strong>Product galleries</strong> - E-commerce product browsing</li>
            <li><strong>Onboarding flows</strong> - Step-by-step tutorials</li>
            <li><strong>Section navigation</strong> - Full-page scrolling websites</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/20">
        <Info className="h-4 w-4 text-teal-600" />
        <AlertTitle className="text-teal-900 dark:text-teal-100">Browser Support</AlertTitle>
        <AlertDescription className="text-teal-800 dark:text-teal-200">
          <div className="mt-2">
            CSS Scroll Snap is widely supported in all modern browsers (Chrome 69+, Firefox 68+, Safari 11+, Edge 79+)
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
