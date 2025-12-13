'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Maximize2, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Monitor, Smartphone
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssAspectRatioProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAspectRatio({ onOpenWebPlayground }: CssAspectRatioProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Maximize2}
        category="CSS · Responsive Design"
        title="Aspect Ratio"
        description="Maintain perfect width-to-height ratios"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Maximize2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Aspect Ratio Property</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">CSS 2021</Badge>
                Maintain perfect proportions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Aspect Ratio = Perfect Proportions! 📐</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">aspect-ratio</code> property 
              maintains a consistent width-to-height ratio. No more padding-bottom hacks for videos and images!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Before vs After
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Badge className="bg-red-600 text-white mb-2">❌ Old Way (Padding Hack)</Badge>
                <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg">
                  <code className="text-xs text-red-100 block">
{`.video {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 = 9/16 = 56.25% */
}`}
                  </code>
                </div>
              </div>
              <div>
                <Badge className="bg-green-600 text-white mb-2">✅ New Way (aspect-ratio)</Badge>
                <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg">
                  <code className="text-xs text-green-100 block">
{`.video {
  aspect-ratio: 16 / 9;
  /* That's it! */
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Common Aspect Ratios
          </CardTitle>
          <CardDescription>Popular ratios for different content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { ratio: '16 / 9', name: 'Widescreen', use: 'Videos, YouTube, modern TV', percentage: '56.25%' },
            { ratio: '4 / 3', name: 'Standard', use: 'Old TV, presentations', percentage: '75%' },
            { ratio: '1 / 1', name: 'Square', use: 'Instagram, profile pictures', percentage: '100%' },
            { ratio: '21 / 9', name: 'Ultrawide', use: 'Cinema, gaming', percentage: '42.86%' },
            { ratio: '3 / 2', name: 'Classic Photo', use: 'DSLR cameras', percentage: '66.67%' },
            { ratio: '9 / 16', name: 'Vertical', use: 'Stories, Reels, TikTok', percentage: '177.78%' }
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <code className="font-mono font-bold text-purple-700 dark:text-purple-400 text-lg">
                    {item.ratio}
                  </code>
                  <Badge className="bg-purple-600 text-white">{item.name}</Badge>
                </div>
                <span className="text-xs text-purple-600 dark:text-purple-400">{item.percentage}</span>
              </div>
              <p className="text-sm text-purple-600 dark:text-purple-300">{item.use}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>Different aspect ratios in action</CardDescription>
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }
    
    .ratio-box {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .ratio-content {
      background: linear-gradient(135deg, #667eea, #764ba2);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      text-align: center;
      padding: 20px;
    }
    
    .ratio-label {
      font-size: 24px;
      margin-bottom: 5px;
    }
    
    .ratio-name {
      font-size: 14px;
      opacity: 0.9;
    }
    
    /* ASPECT RATIO MAGIC! */
    .ratio-16-9 .ratio-content {
      aspect-ratio: 16 / 9;
    }
    
    .ratio-4-3 .ratio-content {
      aspect-ratio: 4 / 3;
    }
    
    .ratio-1-1 .ratio-content {
      aspect-ratio: 1 / 1;
    }
    
    .ratio-21-9 .ratio-content {
      aspect-ratio: 21 / 9;
    }
    
    .ratio-3-2 .ratio-content {
      aspect-ratio: 3 / 2;
    }
    
    .ratio-9-16 .ratio-content {
      aspect-ratio: 9 / 16;
      max-width: 300px;
      margin: 0 auto;
    }
    
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: 1fr;
      }
      
      .ratio-9-16 .ratio-content {
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Aspect Ratio Demo</h1>
    
    <div class="grid">
      <div class="ratio-box ratio-16-9">
        <div class="ratio-content">
          <div class="ratio-label">16:9</div>
          <div class="ratio-name">Widescreen</div>
        </div>
      </div>
      
      <div class="ratio-box ratio-4-3">
        <div class="ratio-content">
          <div class="ratio-label">4:3</div>
          <div class="ratio-name">Standard</div>
        </div>
      </div>
      
      <div class="ratio-box ratio-1-1">
        <div class="ratio-content">
          <div class="ratio-label">1:1</div>
          <div class="ratio-name">Square</div>
        </div>
      </div>
      
      <div class="ratio-box ratio-21-9">
        <div class="ratio-content">
          <div class="ratio-label">21:9</div>
          <div class="ratio-name">Ultrawide</div>
        </div>
      </div>
      
      <div class="ratio-box ratio-3-2">
        <div class="ratio-content">
          <div class="ratio-label">3:2</div>
          <div class="ratio-name">Classic Photo</div>
        </div>
      </div>
      
      <div class="ratio-box ratio-9-16">
        <div class="ratio-content">
          <div class="ratio-label">9:16</div>
          <div class="ratio-name">Vertical (Stories)</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Aspect Ratio Gallery"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Practical Use Cases
          </CardTitle>
          <CardDescription>Where to use aspect-ratio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                use: 'Video Embeds',
                ratio: '16 / 9',
                code: '.video-wrapper {\n  aspect-ratio: 16 / 9;\n}',
                desc: 'YouTube, Vimeo, responsive videos'
              },
              {
                use: 'Profile Pictures',
                ratio: '1 / 1',
                code: '.avatar {\n  aspect-ratio: 1;\n  border-radius: 50%;\n}',
                desc: 'Square avatars, thumbnails'
              },
              {
                use: 'Product Cards',
                ratio: '3 / 4',
                code: '.product-image {\n  aspect-ratio: 3 / 4;\n  object-fit: cover;\n}',
                desc: 'E-commerce product images'
              },
              {
                use: 'Stories',
                ratio: '9 / 16',
                code: '.story {\n  aspect-ratio: 9 / 16;\n  max-height: 100vh;\n}',
                desc: 'Instagram/Snapchat stories'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-green-900 dark:text-green-100">{item.use}</h4>
                  <Badge className="bg-green-600 text-white text-xs">{item.ratio}</Badge>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">{item.desc}</p>
                <pre className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-3 py-2 rounded overflow-x-auto">
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            With Images & Videos
          </CardTitle>
          <CardDescription>Perfect for media elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Combine with object-fit
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`img {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;  /* Fills the space */
}

iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
  border: none;
}`}
              </code>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Pro Tip!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <code>aspect-ratio</code> with <code>width: 100%</code> for fully responsive media that maintains proportions!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>aspect-ratio: 16 / 9</strong> for widescreen videos</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>aspect-ratio: 1</strong> is shorthand for <code>1 / 1</code> (square)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <strong>width: 100%</strong> for responsive sizing</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 88+, Safari 15+, Firefox 89+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
