'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Languages, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Globe, MoveRight
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssLogicalPropertiesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssLogicalProperties({ onOpenWebPlayground }: CssLogicalPropertiesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Languages}
        category="CSS · Advanced CSS"
        title="Logical Properties"
        description="Direction-agnostic CSS for international layouts"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Languages className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Logical Properties</CardTitle>
              <CardDescription className="text-base">International-friendly directional properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Logical Properties = International CSS! 🌍</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Instead of <code>left/right/top/bottom</code>, use <strong>inline</strong> (text direction) and <strong>block</strong> (perpendicular). 
              Automatically adapts to RTL (Arabic, Hebrew) and vertical writing modes!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Physical vs Logical
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Badge className="bg-red-600 text-white mb-2">Physical Properties</Badge>
                <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg text-sm">
                  <code className="text-red-100 block mb-2">margin-left: 20px;</code>
                  <p className="text-red-200 text-xs">Always left, regardless of text direction</p>
                </div>
              </div>
              <div>
                <Badge className="bg-green-600 text-white mb-2">Logical Properties</Badge>
                <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg text-sm">
                  <code className="text-green-100 block mb-2">margin-inline-start: 20px;</code>
                  <p className="text-green-200 text-xs">Start of text direction (left in LTR, right in RTL)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MoveRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Inline vs Block
          </CardTitle>
          <CardDescription>Two directions in logical CSS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">inline</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                <strong>Direction of text flow</strong>
              </p>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>→ Left-to-right (English)</li>
                <li>← Right-to-left (Arabic)</li>
                <li>↓ Top-to-bottom (Japanese)</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">block</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                <strong>Direction perpendicular to text</strong>
              </p>
              <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                <li>↓ Top-to-bottom (English)</li>
                <li>↓ Top-to-bottom (Arabic)</li>
                <li>→ Left-to-right (Japanese)</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Logical Property Mapping
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { physical: 'margin-left', logical: 'margin-inline-start' },
                { physical: 'margin-right', logical: 'margin-inline-end' },
                { physical: 'margin-top', logical: 'margin-block-start' },
                { physical: 'margin-bottom', logical: 'margin-block-end' },
                { physical: 'padding-left', logical: 'padding-inline-start' },
                { physical: 'border-right', logical: 'border-inline-end' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <code className="text-xs text-purple-700 dark:text-purple-300">{item.physical}</code>
                  <span className="text-purple-500">→</span>
                  <code className="text-xs font-bold text-purple-900 dark:text-purple-100">{item.logical}</code>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See logical properties adapt to direction</CardDescription>
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
    
    .demo-section {
      margin-bottom: 40px;
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    .direction-toggle {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .direction-toggle button {
      padding: 10px 20px;
      border: 2px solid #667eea;
      background: white;
      color: #667eea;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .direction-toggle button {
        background: #1a1a2e;
        border-color: #a78bfa;
        color: #a78bfa;
      }
    }
    
    .direction-toggle button.active {
      background: #667eea;
      color: white;
    }
    
    @media (prefers-color-scheme: dark) {
      .direction-toggle button.active {
        background: #a78bfa;
        color: #1a1a2e;
      }
    }
    
    .box {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 20px;
      border-radius: 12px;
      font-weight: 600;
      
      /* LOGICAL PROPERTIES */
      margin-inline-start: 40px;
      margin-block-start: 20px;
      padding-inline: 30px;
      padding-block: 20px;
      border-inline-start: 5px solid #10b981;
    }
    
    .content {
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌍 Logical Properties Demo</h1>
    
    <div class="demo-section">
      <div class="label">Click to change text direction:</div>
      <div class="direction-toggle">
        <button class="active" onclick="setDirection('ltr')">LTR (English)</button>
        <button onclick="setDirection('rtl')">RTL (Arabic/Hebrew)</button>
      </div>
      
      <div class="box" id="demoBox">
        <div class="content">
          This box uses logical properties!<br>
          • margin-inline-start (adapts to direction)<br>
          • padding-inline (left & right in LTR)<br>
          • border-inline-start (green border)<br><br>
          Watch how everything flips when you change direction! 🔄
        </div>
      </div>
    </div>
  </div>
  
  <script>
    function setDirection(dir) {
      const box = document.getElementById('demoBox');
      box.style.direction = dir;
      
      // Update button states
      document.querySelectorAll('.direction-toggle button').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
    }
  </script>
</body>
</html>`}
            title="Logical Properties Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Complete Property List
          </CardTitle>
          <CardDescription>All logical properties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { category: 'Margins', props: 'margin-inline-start/end, margin-block-start/end' },
              { category: 'Padding', props: 'padding-inline-start/end, padding-block-start/end' },
              { category: 'Borders', props: 'border-inline-start/end, border-block-start/end' },
              { category: 'Shorthands', props: 'margin-inline, margin-block, padding-inline, padding-block' },
              { category: 'Sizing', props: 'inline-size (width), block-size (height)' },
              { category: 'Min/Max', props: 'min-inline-size, max-inline-size, min-block-size, max-block-size' },
              { category: 'Position', props: 'inset-inline-start/end, inset-block-start/end' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.category}</h4>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  {item.props}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            When to Use
          </CardTitle>
          <CardDescription>Logical vs physical properties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Use Logical Properties
              </h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• International websites (RTL support)</li>
                <li>• Modern web applications</li>
                <li>• Component libraries</li>
                <li>• Design systems</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Physical Still OK
              </h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Absolute positioning (top, left)</li>
                <li>• Decorative elements</li>
                <li>• Single-language sites</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>inline</strong> = text direction, <strong>block</strong> = perpendicular</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>-start/-end</strong> instead of left/right</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Automatically adapts to <strong>RTL</strong> and vertical writing</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 87+, Safari 14.1+, Firefox 66+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
