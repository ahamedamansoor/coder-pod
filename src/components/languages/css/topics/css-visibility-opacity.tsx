'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Eye, EyeOff, Sparkles, Lightbulb, Ghost, 
  CheckCircle, Info, ArrowRight, Layers,
  MousePointer, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssVisibilityOpacityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssVisibilityOpacity({ onOpenWebPlayground }: CssVisibilityOpacityProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Eye}
        category="CSS · Fundamentals"
        title="Visibility & Opacity"
        description="Different ways to hide elements and control their transparency"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Hiding Elements in CSS</CardTitle>
              <CardDescription className="text-base">Three different approaches</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Different Ways to Hide</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS offers multiple ways to hide elements, each with different behaviors. 
              Choose based on whether you want to keep space, allow interactions, or completely remove the element.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
              <EyeOff className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">visibility</h3>
              <p className="text-xs text-blue-800 dark:text-blue-200">Hidden but space remains</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 text-center">
              <Ghost className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">opacity</h3>
              <p className="text-xs text-purple-800 dark:text-purple-200">Transparent (0 to 1)</p>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 text-center">
              <Layers className="w-6 h-6 text-red-600 dark:text-red-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">display: none</h3>
              <p className="text-xs text-red-800 dark:text-red-200">Completely removed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Three Methods Comparison */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Three Ways to Hide Elements
          </CardTitle>
          <CardDescription>Each method behaves differently</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Visibility: hidden */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-blue-600 text-white text-lg">visibility: hidden</Badge>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Element is invisible but still takes up space. Cannot be clicked.
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-blue-100">
                  visibility: hidden;
                </code>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800">
                  <strong className="text-blue-700 dark:text-blue-400">✅ Space:</strong> Yes
                </div>
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800">
                  <strong className="text-blue-700 dark:text-blue-400">❌ Clickable:</strong> No
                </div>
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800">
                  <strong className="text-blue-700 dark:text-blue-400">🔍 SEO:</strong> Yes
                </div>
              </div>
            </div>

            {/* Opacity: 0 */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-purple-600 text-white text-lg">opacity: 0</Badge>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Element is invisible, takes up space, and can still be clicked!
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-purple-100">
                  opacity: 0;
                </code>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800">
                  <strong className="text-purple-700 dark:text-purple-400">✅ Space:</strong> Yes
                </div>
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800">
                  <strong className="text-purple-700 dark:text-purple-400">✅ Clickable:</strong> Yes!
                </div>
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800">
                  <strong className="text-purple-700 dark:text-purple-400">🔍 SEO:</strong> Yes
                </div>
              </div>
            </div>

            {/* Display: none */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-red-600 text-white text-lg">display: none</Badge>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                Element is completely removed from layout. No space, no interaction.
              </p>
              <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-red-100">
                  display: none;
                </code>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800">
                  <strong className="text-red-700 dark:text-red-400">❌ Space:</strong> No
                </div>
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800">
                  <strong className="text-red-700 dark:text-red-400">❌ Clickable:</strong> No
                </div>
                <div className="p-3 rounded bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800">
                  <strong className="text-red-700 dark:text-red-400">🔍 SEO:</strong> Ignored
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Comparison
          </CardTitle>
          <CardDescription>See the difference in behavior</CardDescription>
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
      padding: 40px;
      min-height: 100vh;
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
    
    .section {
      margin-bottom: 40px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: #374151;
      }
    }
    
    .label {
      font-weight: 700;
      padding: 8px 15px;
      border-radius: 8px;
      display: inline-block;
      margin-bottom: 15px;
      font-size: 14px;
    }
    
    .label-blue {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-blue {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .label-purple {
      background: #f3e8ff;
      color: #6b21a8;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-purple {
        background: #581c87;
        color: #e9d5ff;
      }
    }
    
    .label-red {
      background: #fee;
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-red {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .boxes {
      display: flex;
      gap: 15px;
      align-items: flex-start;
    }
    
    .box {
      width: 150px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-weight: 600;
      color: white;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .box:hover {
      transform: scale(1.05);
    }
    
    .box-1 {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
    }
    
    .box-2 {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      visibility: hidden;
    }
    
    .box-3 {
      background: linear-gradient(135deg, #10b981, #059669);
    }
    
    .note {
      margin-top: 15px;
      padding: 12px;
      background: white;
      border-radius: 8px;
      font-size: 13px;
      color: #4b5563;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #1f2937;
        color: #d1d5db;
      }
    }
    
    /* Opacity demo */
    .opacity-box {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      opacity: 0;
    }
    
    /* Display none demo */
    .display-box {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      display: none;
    }
  </style>
  
  <script>
    function handleClick(method) {
      alert('You clicked the box with: ' + method);
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>👁️ Visibility & Opacity Demo</h1>
    
    <div class="section">
      <div class="label label-blue">visibility: hidden</div>
      <div class="boxes">
        <div class="box box-1" onclick="handleClick('Box 1')">Box 1<br>Visible</div>
        <div class="box box-2" onclick="handleClick('Box 2 - visibility:hidden')">Box 2<br>Hidden</div>
        <div class="box box-3" onclick="handleClick('Box 3')">Box 3<br>Visible</div>
      </div>
      <div class="note">
        ⚠️ Notice: Box 2 is hidden but its space remains. Other boxes don't shift.
        Try clicking where Box 2 should be - nothing happens!
      </div>
    </div>
    
    <div class="section">
      <div class="label label-purple">opacity: 0</div>
      <div class="boxes">
        <div class="box box-1" onclick="handleClick('Box 1')">Box 1<br>Visible</div>
        <div class="box opacity-box" onclick="handleClick('Box 2 - opacity:0')">Box 2<br>Invisible</div>
        <div class="box box-3" onclick="handleClick('Box 3')">Box 3<br>Visible</div>
      </div>
      <div class="note">
        ⚠️ Notice: Box 2 is invisible but takes space AND you can still click it! 
        Try clicking where Box 2 should be - the alert will fire!
      </div>
    </div>
    
    <div class="section">
      <div class="label label-red">display: none</div>
      <div class="boxes">
        <div class="box box-1" onclick="handleClick('Box 1')">Box 1<br>Visible</div>
        <div class="box display-box" onclick="handleClick('Box 2 - display:none')">Box 2<br>Removed</div>
        <div class="box box-3" onclick="handleClick('Box 3')">Box 3<br>Visible</div>
      </div>
      <div class="note">
        ✅ Notice: Box 2 is completely gone! Box 3 shifts left. No space, no interaction.
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Visibility & Opacity Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Opacity Levels */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Ghost className="w-6 h-6 text-green-600 dark:text-green-400" />
            Opacity Levels
          </CardTitle>
          <CardDescription>Control transparency from 0 to 1</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">opacity</code> property accepts 
            values from <strong>0</strong> (fully transparent) to <strong>1</strong> (fully opaque).
          </p>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { value: '0', percent: '0%', desc: 'Invisible' },
              { value: '0.25', percent: '25%', desc: 'Very faint' },
              { value: '0.5', percent: '50%', desc: 'Half transparent' },
              { value: '0.75', percent: '75%', desc: 'Slightly transparent' },
              { value: '1', percent: '100%', desc: 'Fully opaque' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div 
                  className="h-24 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 mb-2"
                  style={{ opacity: parseFloat(item.value) }}
                ></div>
                <code className="text-sm font-bold">{item.value}</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
            <h4 className="font-bold mb-3">Common Use Cases:</h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong>Fade effects:</strong> Animate from 0 to 1</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong>Disabled states:</strong> opacity: 0.5 for disabled buttons</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong>Overlays:</strong> Semi-transparent backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong>Watermarks:</strong> Low opacity for subtle branding</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Pointer Events */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MousePointer className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Bonus: pointer-events
          </CardTitle>
          <CardDescription>Control click interactions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">pointer-events</code> property 
            controls whether an element can be clicked or not.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">pointer-events: none</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Element cannot be clicked, even if visible. Clicks pass through to elements below.
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  pointer-events: none;
                </code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">pointer-events: auto</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Default - element can be clicked normally.
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  pointer-events: auto;
                </code>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Combine <code>opacity: 0</code> with <code>pointer-events: none</code> to completely 
              hide an element while keeping it in the DOM (useful for animations).
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
            <span><strong>visibility: hidden</strong> - Invisible, takes space, not clickable</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>opacity: 0</strong> - Invisible, takes space, still clickable!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>display: none</strong> - Completely removed from layout</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>pointer-events: none</strong> to disable clicks on visible elements</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
