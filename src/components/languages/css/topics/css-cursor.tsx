'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  MousePointer2, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Hand
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssCursorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssCursor({ onOpenWebPlayground }: CssCursorProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointer2}
        category="CSS · Styling Basics"
        title="CSS Cursor"
        description="Change the mouse cursor appearance for better UX"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <MousePointer2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Cursor Property</CardTitle>
              <CardDescription className="text-base">Visual feedback for interactions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Cursor = Visual Feedback</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The cursor property changes the mouse pointer appearance, providing visual cues about what 
              actions are possible. Essential for good user experience!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
              <MousePointer2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Pointers</h3>
              <p className="text-xs text-blue-800 dark:text-blue-200">default, pointer, grab</p>
            </div>
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 text-center">
              <Hand className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Actions</h3>
              <p className="text-xs text-green-800 dark:text-green-200">move, resize, zoom</p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 text-center">
              <Info className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">States</h3>
              <p className="text-xs text-purple-800 dark:text-purple-200">wait, not-allowed, help</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MousePointer2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Common Cursor Values
          </CardTitle>
          <CardDescription>Most frequently used cursors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { cursor: 'default', desc: 'Default arrow', use: 'Normal elements' },
            { cursor: 'pointer', desc: 'Pointing hand', use: 'Links, buttons, clickable items' },
            { cursor: 'text', desc: 'I-beam', use: 'Text input areas' },
            { cursor: 'move', desc: 'Four-way arrow', use: 'Draggable elements' },
            { cursor: 'grab', desc: 'Open hand', use: 'Draggable (ready to grab)' },
            { cursor: 'grabbing', desc: 'Closed hand', use: 'Draggable (while dragging)' },
            { cursor: 'wait', desc: 'Loading spinner', use: 'Processing operations' },
            { cursor: 'not-allowed', desc: 'Prohibition sign', use: 'Disabled elements' },
            { cursor: 'help', desc: 'Question mark', use: 'Help/tooltip triggers' },
            { cursor: 'zoom-in', desc: 'Magnifying glass +', use: 'Images that zoom in' },
            { cursor: 'zoom-out', desc: 'Magnifying glass -', use: 'Images that zoom out' },
            { cursor: 'none', desc: 'Hidden cursor', use: 'Custom cursor implementations' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-pointer">
              <div className="flex-1">
                <code className="font-mono font-bold text-purple-700 dark:text-purple-400">{item.cursor}</code>
                <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">{item.desc}</p>
              </div>
              <Badge variant="outline" className="text-xs">{item.use}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Cursor Demo
          </CardTitle>
          <CardDescription>Hover over elements to see cursors</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .box {
      padding: 40px 20px;
      text-align: center;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      font-weight: 600;
      transition: transform 0.3s;
    }
    
    .box:hover {
      transform: scale(1.05);
    }
    
    .label {
      display: block;
      font-size: 12px;
      margin-top: 8px;
      opacity: 0.9;
    }
    
    /* Different cursors */
    .cursor-default { cursor: default; }
    .cursor-pointer { cursor: pointer; }
    .cursor-text { cursor: text; }
    .cursor-move { cursor: move; }
    .cursor-grab { cursor: grab; }
    .cursor-wait { cursor: wait; }
    .cursor-not-allowed { cursor: not-allowed; }
    .cursor-help { cursor: help; }
    .cursor-zoom-in { cursor: zoom-in; }
    .cursor-zoom-out { cursor: zoom-out; }
    .cursor-crosshair { cursor: crosshair; }
    .cursor-copy { cursor: copy; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖱️ Hover Over Each Box!</h1>
    
    <div class="grid">
      <div class="box cursor-default">
        Default
        <span class="label">Normal arrow</span>
      </div>
      
      <div class="box cursor-pointer">
        Pointer
        <span class="label">Pointing hand</span>
      </div>
      
      <div class="box cursor-text">
        Text
        <span class="label">I-beam</span>
      </div>
      
      <div class="box cursor-move">
        Move
        <span class="label">Four arrows</span>
      </div>
      
      <div class="box cursor-grab">
        Grab
        <span class="label">Open hand</span>
      </div>
      
      <div class="box cursor-wait">
        Wait
        <span class="label">Loading</span>
      </div>
      
      <div class="box cursor-not-allowed">
        Not Allowed
        <span class="label">Prohibited</span>
      </div>
      
      <div class="box cursor-help">
        Help
        <span class="label">Question mark</span>
      </div>
      
      <div class="box cursor-zoom-in">
        Zoom In
        <span class="label">Magnifier +</span>
      </div>
      
      <div class="box cursor-zoom-out">
        Zoom Out
        <span class="label">Magnifier -</span>
      </div>
      
      <div class="box cursor-crosshair">
        Crosshair
        <span class="label">Precision</span>
      </div>
      
      <div class="box cursor-copy">
        Copy
        <span class="label">Duplicate</span>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Cursor Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Best Practices
          </CardTitle>
          <CardDescription>When to use which cursor</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                do: 'Use pointer for clickable elements',
                dont: "Don't use pointer on non-clickable items",
                color: 'blue'
              },
              {
                do: 'Use not-allowed for disabled buttons',
                dont: "Don't hide the cursor unnecessarily",
                color: 'purple'
              },
              {
                do: 'Use grab/grabbing for drag interactions',
                dont: "Don't use move for clickable items",
                color: 'green'
              },
              {
                do: 'Use wait during loading operations',
                dont: "Don't overuse custom cursors",
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                  <span className="text-sm font-medium">{item.do}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.dont}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MousePointer2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Custom Cursors
          </CardTitle>
          <CardDescription>Use your own cursor images</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            You can use custom cursor images with the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">url()</code> function.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`/* Custom cursor with fallback */
cursor: url('cursor.png'), pointer;

/* With coordinates */
cursor: url('cursor.png') 16 16, pointer;`}
              </code>
            </div>
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
              <Info className="w-5 h-5 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Always provide a fallback cursor (like <code>pointer</code>) in case the image fails to load!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>cursor: pointer</strong> for all clickable elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>cursor: not-allowed</strong> for disabled states</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>cursor: wait</strong> during loading operations</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always provide <strong>fallback</strong> for custom cursors</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
