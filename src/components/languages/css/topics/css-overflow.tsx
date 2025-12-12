'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Maximize2, Sparkles, Lightbulb, Eye, 
  CheckCircle, Info, ArrowRight, Scissors,
  ScrollText, EyeOff
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssOverflowProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssOverflow({ onOpenWebPlayground }: CssOverflowProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Maximize2}
        category="CSS · Fundamentals"
        title="CSS Overflow"
        description="Control what happens when content is too large for its container"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Maximize2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is Overflow?</CardTitle>
              <CardDescription className="text-base">Handling content that doesn't fit</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">The Overflow Problem</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              When content is larger than its container (fixed height/width), it <strong>overflows</strong>. 
              The <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">overflow</code> property 
              controls what happens: show it, hide it, add scrollbars, or clip it.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              Common Scenario
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              You have a fixed-height card with dynamic content. What happens when the text is too long?
            </p>
            <div className="space-y-2 text-xs text-blue-800 dark:text-blue-200">
              <div className="flex items-center gap-2">
                <Badge variant="outline">visible</Badge>
                <span>Content spills out (messy!)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">hidden</Badge>
                <span>Content gets cut off</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">scroll</Badge>
                <span>Scrollbars appear</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">auto</Badge>
                <span>Scrollbars only if needed</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Four Overflow Values */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ScrollText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Four Overflow Values
          </CardTitle>
          <CardDescription>Different ways to handle overflowing content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Visible */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">visible</Badge>
              <h3 className="font-bold mb-2">Default Behavior</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Content overflows and is visible outside the container. Can break layout!
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-blue-100">
                  overflow: visible;
                </code>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                ⚠️ Usually not desired - content spills out
              </p>
            </div>

            {/* Hidden */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <Badge className="bg-red-600 text-white text-lg mb-3">hidden</Badge>
              <h3 className="font-bold mb-2">Clip Content</h3>
              <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                Content is clipped - anything outside the box is hidden. No scrollbars.
              </p>
              <div className="bg-red-900 dark:bg-red-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-red-100">
                  overflow: hidden;
                </code>
              </div>
              <p className="text-xs text-red-700 dark:text-red-300">
                ⚠️ Content is lost - user can't see it
              </p>
            </div>

            {/* Scroll */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">scroll</Badge>
              <h3 className="font-bold mb-2">Always Scrollbars</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Scrollbars are always shown, even if content fits. Both axes get scrollbars.
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-purple-100">
                  overflow: scroll;
                </code>
              </div>
              <p className="text-xs text-purple-700 dark:text-purple-300">
                ℹ️ Scrollbars always visible (can look odd)
              </p>
            </div>

            {/* Auto */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-300 dark:border-green-700 shadow-lg">
              <Badge className="bg-green-600 text-white text-lg mb-3">auto</Badge>
              <Badge className="bg-green-700 text-white mb-3 ml-2">⭐ Recommended</Badge>
              <h3 className="font-bold mb-2">Smart Scrollbars</h3>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Scrollbars appear only when needed. Most commonly used value.
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  overflow: auto;
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                ✅ Best choice - shows scrollbars only if needed
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
            Interactive Overflow Demo
          </CardTitle>
          <CardDescription>See all four overflow values in action</CardDescription>
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
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }
    
    .box {
      background: white;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    .label {
      font-weight: 700;
      padding: 8px 12px;
      border-radius: 8px;
      margin-bottom: 12px;
      text-align: center;
      font-size: 13px;
    }
    
    .label-visible {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-visible {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .label-hidden {
      background: #fee;
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-hidden {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .label-scroll {
      background: #f3e8ff;
      color: #6b21a8;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-scroll {
        background: #581c87;
        color: #e9d5ff;
      }
    }
    
    .label-auto {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-auto {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .content-box {
      height: 150px;
      border: 3px solid #667eea;
      padding: 15px;
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .content-box {
        background: linear-gradient(135deg, #374151, #1f2937);
        border-color: #a78bfa;
      }
    }
    
    .visible {
      overflow: visible;
    }
    
    .hidden {
      overflow: hidden;
    }
    
    .scroll {
      overflow: scroll;
    }
    
    .auto {
      overflow: auto;
    }
    
    .note {
      margin-top: 10px;
      font-size: 11px;
      color: #6b7280;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        color: #9ca3af;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 Overflow Property Demo</h1>
    
    <div class="grid">
      <div class="box">
        <div class="label label-visible">overflow: visible</div>
        <div class="content-box visible">
          This is a lot of content that doesn't fit in the box. 
          Notice how it overflows and spills outside the container. 
          This can break your layout and overlap other elements. 
          Generally not recommended for production use.
        </div>
        <div class="note">Content spills out</div>
      </div>
      
      <div class="box">
        <div class="label label-hidden">overflow: hidden</div>
        <div class="content-box hidden">
          This is a lot of content that doesn't fit in the box. 
          The overflow is hidden - you can't see the rest of the text. 
          No scrollbars appear. Content is simply clipped at the boundary.
        </div>
        <div class="note">Content is clipped</div>
      </div>
      
      <div class="box">
        <div class="label label-scroll">overflow: scroll</div>
        <div class="content-box scroll">
          This is a lot of content that doesn't fit in the box. 
          Scrollbars are always shown on both axes, even if content fits. 
          You can scroll to see all the content.
        </div>
        <div class="note">Always has scrollbars</div>
      </div>
      
      <div class="box">
        <div class="label label-auto">overflow: auto ⭐</div>
        <div class="content-box auto">
          This is a lot of content that doesn't fit in the box. 
          Scrollbars appear only when needed. This is the most commonly 
          used value because it's smart and doesn't add unnecessary scrollbars.
        </div>
        <div class="note">Smart scrollbars</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Overflow Values Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Directional Overflow */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Scissors className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Directional Overflow
          </CardTitle>
          <CardDescription>Control overflow on X and Y axes separately</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            You can control horizontal and vertical overflow independently using 
            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded mx-1">overflow-x</code> and 
            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded mx-1">overflow-y</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">overflow-x</Badge>
              <h3 className="font-bold mb-2">Horizontal Overflow</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Controls overflow on the X-axis (left/right)
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  overflow-x: auto;<br />
                  overflow-y: hidden;
                </code>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-3">
                Example: Horizontal scrolling tables
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">overflow-y</Badge>
              <h3 className="font-bold mb-2">Vertical Overflow</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Controls overflow on the Y-axis (top/bottom)
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  overflow-x: hidden;<br />
                  overflow-y: auto;
                </code>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-3">
                Example: Scrollable chat windows
              </p>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Common Pattern</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Often used for responsive tables: 
              <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900 rounded mx-1">overflow-x: auto</code> allows 
              horizontal scrolling on mobile while preventing vertical scroll.
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
            <span><strong>overflow: auto</strong> is the most common choice (smart scrollbars)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>overflow: hidden</strong> clips content (useful for image containers)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>overflow-x</strong> and <strong>overflow-y</strong> for directional control</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Avoid <strong>overflow: visible</strong> on fixed-height containers</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
