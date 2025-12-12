'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Move, Sparkles, Lightbulb, Anchor, 
  CheckCircle, Info, ArrowRight, Pin,
  Navigation, Layers, StickyNote
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssPositioningProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPositioning({ onOpenWebPlayground }: CssPositioningProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Move}
        category="CSS · Box Model & Layout"
        title="CSS Positioning"
        description="Control exactly where elements appear on the page"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Move className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Positioning</CardTitle>
              <CardDescription className="text-base">Taking elements out of normal flow</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Position = Placement Control</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">position</code> property 
              determines how an element is positioned in the document. You can make elements stay in place, 
              move relative to their normal position, float over content, or stick to the viewport.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              The Five Position Values
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Badge variant="outline">static</Badge>
                <span>Default - normal flow</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">relative</Badge>
                <span>Offset from normal position</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">absolute</Badge>
                <span>Positioned relative to parent</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">fixed</Badge>
                <span>Stays in viewport</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">sticky</Badge>
                <span>Scrolls then sticks</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Five Position Types */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Pin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Position Types Explained
          </CardTitle>
          <CardDescription>Each position value behaves differently</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Static */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-gray-600 text-white text-lg">static</Badge>
                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                  Default
                </Badge>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Normal document flow. Elements stack naturally. Cannot use top/right/bottom/left.
              </p>
              <div className="bg-gray-900 dark:bg-black p-4 rounded-lg mb-4">
                <code className="text-sm text-gray-100">
                  position: static; /* Default */
                </code>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 This is how elements naturally behave without any positioning
              </p>
            </div>

            {/* Relative */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-blue-600 text-white text-lg">relative</Badge>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Positioned relative to its normal position. Original space is preserved. Can use top/right/bottom/left to offset.
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-blue-100">
                  position: relative;<br />
                  top: 20px;<br />
                  left: 30px;
                </code>
              </div>
              <div className="flex gap-3">
                <div className="w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center text-xs">
                  Normal
                </div>
                <div className="w-20 h-20 bg-blue-400 dark:bg-blue-600 rounded flex items-center justify-center text-xs font-bold relative" style={{top: '10px', left: '10px'}}>
                  Relative
                </div>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-3">
                ✅ Use case: Small adjustments, creating positioning context for children
              </p>
            </div>

            {/* Absolute */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-purple-600 text-white text-lg">absolute</Badge>
                <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                  Popular
                </Badge>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Removed from normal flow. Positioned relative to nearest positioned ancestor (or body). No space reserved.
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-purple-100">
                  position: absolute;<br />
                  top: 10px;<br />
                  right: 10px;
                </code>
              </div>
              <div className="relative h-32 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700 p-4">
                <span className="text-xs text-purple-700 dark:text-purple-300">Parent (position: relative)</span>
                <div className="absolute top-2 right-2 w-16 h-16 bg-purple-500 rounded flex items-center justify-center text-xs text-white font-bold">
                  Absolute
                </div>
              </div>
              <p className="text-xs text-purple-700 dark:text-purple-300 mt-3">
                ✅ Use case: Tooltips, badges, overlays, dropdowns
              </p>
            </div>

            {/* Fixed */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-green-600 text-white text-lg">fixed</Badge>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Positioned relative to the viewport. Stays in place when scrolling. Removed from normal flow.
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-green-100">
                  position: fixed;<br />
                  bottom: 20px;<br />
                  right: 20px;
                </code>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700 text-center">
                <p className="text-xs text-green-800 dark:text-green-200 mb-2">Imagine scrolling the page...</p>
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-bold">
                  Fixed Element (Always visible)
                </div>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300 mt-3">
                ✅ Use case: Navigation bars, chat widgets, back-to-top buttons
              </p>
            </div>

            {/* Sticky */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-300 dark:border-orange-700 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-orange-600 text-white text-lg">sticky</Badge>
                <Badge className="bg-orange-700 text-white">⭐ Modern</Badge>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Hybrid of relative and fixed. Scrolls normally until threshold, then sticks in place.
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-orange-100">
                  position: sticky;<br />
                  top: 0; /* Sticks when reaching top */
                </code>
              </div>
              <div className="space-y-2 text-xs text-orange-700 dark:text-orange-300">
                <div className="flex items-center gap-2">
                  <StickyNote className="w-4 h-4" />
                  <span>Scrolls with content at first</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pin className="w-4 h-4" />
                  <span>Sticks when reaching threshold (e.g., top: 0)</span>
                </div>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-3">
                ✅ Use case: Sticky headers, table headers, sidebar navigation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Positioning Demo
          </CardTitle>
          <CardDescription>See position values in action</CardDescription>
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
      min-height: 200vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      position: relative;
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
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .demo-box {
      margin-bottom: 40px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
      position: relative;
      min-height: 150px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #374151;
      }
    }
    
    .label {
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 15px;
      font-size: 13px;
    }
    
    .box {
      width: 100px;
      height: 100px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-weight: 600;
      color: white;
      font-size: 12px;
      text-align: center;
    }
    
    /* Relative positioning */
    .relative-demo {
      background: #dbeafe;
    }
    
    @media (prefers-color-scheme: dark) {
      .relative-demo {
        background: #1e3a8a;
      }
    }
    
    .relative-demo .label {
      background: #3b82f6;
      color: white;
    }
    
    .relative-box {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      position: relative;
      top: 20px;
      left: 30px;
    }
    
    /* Absolute positioning */
    .absolute-demo {
      background: #f3e8ff;
      position: relative;
    }
    
    @media (prefers-color-scheme: dark) {
      .absolute-demo {
        background: #581c87;
      }
    }
    
    .absolute-demo .label {
      background: #8b5cf6;
      color: white;
    }
    
    .absolute-box {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      position: absolute;
      top: 50px;
      right: 20px;
    }
    
    /* Fixed positioning */
    .fixed-box {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 120px;
      height: 60px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 1000;
      font-size: 13px;
    }
    
    /* Sticky positioning */
    .sticky-header {
      position: sticky;
      top: 0;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-weight: 700;
      text-align: center;
      z-index: 10;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .scroll-content {
      height: 300px;
      background: linear-gradient(to bottom, #fef3c7, #fde68a);
      border-radius: 8px;
      padding: 20px;
      overflow-y: auto;
    }
    
    @media (prefers-color-scheme: dark) {
      .scroll-content {
        background: linear-gradient(to bottom, #78350f, #92400e);
      }
    }
    
    .note {
      margin-top: 15px;
      padding: 10px;
      background: white;
      border-radius: 6px;
      font-size: 12px;
      color: #4b5563;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #1f2937;
        color: #d1d5db;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📍 Positioning Demo</h1>
    
    <div class="demo-box relative-demo">
      <div class="label">position: relative</div>
      <div class="box" style="background: #e5e7eb; color: #333;">Normal</div>
      <div class="box relative-box">Relative<br>(+20px, +30px)</div>
      <div class="note">
        Notice: Relative box is offset but original space is preserved
      </div>
    </div>
    
    <div class="demo-box absolute-demo">
      <div class="label">position: absolute</div>
      <div class="absolute-box">Absolute<br>top: 50px<br>right: 20px</div>
      <div class="note">
        Notice: Absolute box is positioned relative to this parent container
      </div>
    </div>
    
    <div class="demo-box">
      <div class="label" style="background: #f59e0b; color: white;">position: sticky (Scroll to see!)</div>
      <div class="scroll-content">
        <div class="sticky-header">
          Sticky Header - Scroll inside this box!
        </div>
        <p style="margin-bottom: 15px;">Keep scrolling...</p>
        <p style="margin-bottom: 15px;">The header will stick to the top</p>
        <p style="margin-bottom: 15px;">Keep going...</p>
        <p style="margin-bottom: 15px;">Notice how it sticks!</p>
        <p style="margin-bottom: 15px;">This is position: sticky</p>
        <p style="margin-bottom: 15px;">Very useful for headers</p>
        <p style="margin-bottom: 15px;">And navigation menus</p>
        <p>Bottom of scrollable content</p>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px;">
      Scroll down to see more... 👇
    </p>
    
    <div style="height: 400px; display: flex; align-items: center; justify-content: center; color: #6b7280;">
      <p>Keep scrolling to see the fixed box...</p>
    </div>
  </div>
  
  <div class="fixed-box">
    Fixed Box<br>
    <small style="font-size: 10px;">Always visible!</small>
  </div>
</body>
</html>`}
            title="CSS Positioning Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Positioning Properties */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Navigation className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            Positioning Properties
          </CardTitle>
          <CardDescription>Control exact placement with top, right, bottom, left</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Once you set <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">position</code> to anything 
            except <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">static</code>, you can use these properties:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { prop: 'top', desc: 'Distance from top edge', example: 'top: 20px;' },
              { prop: 'right', desc: 'Distance from right edge', example: 'right: 10px;' },
              { prop: 'bottom', desc: 'Distance from bottom edge', example: 'bottom: 0;' },
              { prop: 'left', desc: 'Distance from left edge', example: 'left: 50%;' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800">
                <code className="font-mono font-bold text-cyan-700 dark:text-cyan-400">{item.prop}</code>
                <p className="text-sm text-cyan-800 dark:text-cyan-200 mt-1">{item.desc}</p>
                <code className="text-xs text-cyan-600 dark:text-cyan-400 mt-2 block">{item.example}</code>
              </div>
            ))}
          </div>

          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              To center an absolutely positioned element, use:
              <code className="block mt-2 bg-cyan-900 dark:bg-cyan-950 text-cyan-100 p-2 rounded text-sm">
                position: absolute;<br />
                top: 50%;<br />
                left: 50%;<br />
                transform: translate(-50%, -50%);
              </code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>static</strong> - Default, normal flow</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>relative</strong> - Offset from normal position, space preserved</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>absolute</strong> - Positioned relative to nearest positioned parent</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>fixed</strong> - Stays in viewport when scrolling</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>sticky</strong> - Scrolls until threshold, then sticks</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
