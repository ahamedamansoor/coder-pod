'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Image as ImageIcon, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Video
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssObjectFitProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssObjectFit({ onOpenWebPlayground }: CssObjectFitProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={ImageIcon}
        category="CSS · Styling Basics"
        title="CSS Object Fit"
        description="Control how images and videos fit their containers"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <ImageIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Object Fit & Object Position</CardTitle>
              <CardDescription className="text-base">Perfect image & video sizing</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Object-Fit = Image Control</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">object-fit</code> property 
              controls how images and videos fit inside their containers - solving the age-old problem of stretched or distorted media!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <ImageIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-bold mb-2">Works With</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                &lt;img&gt;, &lt;video&gt;, and replaced elements
              </p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Video className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h3 className="font-bold mb-2">Common Use</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Profile pictures, hero images, thumbnails
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Object-Fit Values
          </CardTitle>
          <CardDescription>Five ways to fit content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                value: 'fill',
                desc: 'Stretches to fill container (may distort)',
                use: 'Rarely used - causes distortion',
                color: 'red'
              },
              {
                value: 'contain',
                desc: 'Scales to fit inside, maintains aspect ratio',
                use: 'When you need to see entire image',
                color: 'blue'
              },
              {
                value: 'cover',
                desc: 'Scales to cover container, maintains aspect ratio (crops edges)',
                use: 'Most popular! Perfect for hero images',
                color: 'green'
              },
              {
                value: 'none',
                desc: 'Original size, may be cropped',
                use: 'When size control is elsewhere',
                color: 'gray'
              },
              {
                value: 'scale-down',
                desc: 'Smallest of none or contain',
                use: 'Prevents small images from enlarging',
                color: 'purple'
              }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.value}</Badge>
                  <Badge variant="outline" className={`bg-${item.color}-100 dark:bg-${item.color}-900 text-xs`}>
                    {item.use}
                  </Badge>
                </div>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    object-fit: {item.value};
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>Compare different object-fit values</CardDescription>
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
      max-width: 1400px;
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
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    
    .card {
      text-align: center;
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 15px;
      display: block;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    .image-box {
      width: 100%;
      height: 250px;
      border: 3px solid #667eea;
      border-radius: 12px;
      overflow: hidden;
      background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
      position: relative;
    }
    
    @media (prefers-color-scheme: dark) {
      .image-box {
        border-color: #a78bfa;
        background: linear-gradient(135deg, #374151, #4b5563);
      }
    }
    
    .image-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, #667eea 25%, transparent 25%),
        linear-gradient(-45deg, #764ba2 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #667eea 75%),
        linear-gradient(-45deg, transparent 75%, #764ba2 75%);
      background-size: 40px 40px;
      background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
      opacity: 0.3;
    }
    
    .demo-emoji {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 120px;
      position: relative;
      z-index: 1;
    }
    
    .fill { object-fit: fill; }
    .contain { object-fit: contain; }
    .cover { object-fit: cover; }
    .none { object-fit: none; }
    .scale-down { object-fit: scale-down; }
    
    .desc {
      margin-top: 10px;
      font-size: 13px;
      color: #6b7280;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .desc {
        color: #9ca3af;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖼️ Object-Fit Comparison</h1>
    
    <div class="grid">
      <div class="card">
        <span class="label">fill</span>
        <div class="image-box">
          <div class="demo-emoji fill">📷</div>
        </div>
        <p class="desc">Stretches to fill (may distort)</p>
      </div>
      
      <div class="card">
        <span class="label">contain</span>
        <div class="image-box">
          <div class="demo-emoji contain">📷</div>
        </div>
        <p class="desc">Fits inside, shows all content</p>
      </div>
      
      <div class="card">
        <span class="label">cover ⭐</span>
        <div class="image-box">
          <div class="demo-emoji cover">📷</div>
        </div>
        <p class="desc">Covers area, may crop edges (Most popular!)</p>
      </div>
      
      <div class="card">
        <span class="label">none</span>
        <div class="image-box">
          <div class="demo-emoji none">📷</div>
        </div>
        <p class="desc">Original size, may be cropped</p>
      </div>
      
      <div class="card">
        <span class="label">scale-down</span>
        <div class="image-box">
          <div class="demo-emoji scale-down">📷</div>
        </div>
        <p class="desc">Smallest of none or contain</p>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Object-Fit Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Practical examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                scenario: 'Profile Pictures (Square)',
                solution: 'object-fit: cover;',
                reason: 'Fills square container perfectly'
              },
              {
                scenario: 'Hero Images',
                solution: 'object-fit: cover;',
                reason: 'Covers full width without distortion'
              },
              {
                scenario: 'Product Thumbnails',
                solution: 'object-fit: contain;',
                reason: 'Shows entire product'
              },
              {
                scenario: 'Video Backgrounds',
                solution: 'object-fit: cover;',
                reason: 'Fills viewport perfectly'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.scenario}</h4>
                <code className="text-sm bg-green-900 dark:bg-green-950 text-green-100 px-3 py-1 rounded">
                  {item.solution}
                </code>
                <p className="text-xs text-green-700 dark:text-green-300 mt-2">✓ {item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Object Position
          </CardTitle>
          <CardDescription>Control focal point</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">object-position</code> to 
            control which part of the image is visible when using <code>object-fit: cover</code>.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`img {
  object-fit: cover;
  object-position: center; /* default */
  object-position: top;
  object-position: bottom;
  object-position: left;
  object-position: 25% 75%;
}`}
              </code>
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
            <span><strong>object-fit: cover</strong> is most popular choice</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>contain</strong> to show entire image</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>object-position</strong> controls focal point</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works on <strong>&lt;img&gt;</strong> and <strong>&lt;video&gt;</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
