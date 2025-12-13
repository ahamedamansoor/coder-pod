'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Scissors, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Shapes, Circle
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssMasksProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssMasks({ onOpenWebPlayground }: CssMasksProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Scissors}
        category="CSS · Visual Effects"
        title="Masks & Clipping"
        description="Create complex shapes and hide content"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Scissors className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Masks & Clipping</CardTitle>
              <CardDescription className="text-base">Cut elements into custom shapes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Masks & Clipping = Custom Shapes! ✂️</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <strong>clip-path</strong> cuts elements into shapes. <strong>mask</strong> uses images 
              for complex visibility control. Perfect for creative layouts and unique designs!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white mb-2">clip-path</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Clips element to <strong>geometric shapes</strong><br />
                circle(), polygon(), ellipse()
              </p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white mb-2">mask</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Uses <strong>images</strong> for masking<br />
                Gradients, PNGs, SVGs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Shapes className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            clip-path Shapes
          </CardTitle>
          <CardDescription>Basic geometric shapes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                shape: 'circle()',
                code: 'clip-path: circle(50%);',
                desc: 'Perfect circle',
                color: 'blue'
              },
              {
                shape: 'ellipse()',
                code: 'clip-path: ellipse(50% 30%);',
                desc: 'Oval shape',
                color: 'green'
              },
              {
                shape: 'polygon()',
                code: 'clip-path: polygon(50% 0, 100% 100%, 0 100%);',
                desc: 'Triangle (any shape!)',
                color: 'purple'
              },
              {
                shape: 'inset()',
                code: 'clip-path: inset(10px 20px 30px 40px);',
                desc: 'Rectangle with rounded corners',
                color: 'pink'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.shape}</Badge>
                  <span className="text-sm">{item.desc}</span>
                </div>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    {item.code}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Pro Tip!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use <a href="https://bennettfeely.com/clippy/" target="_blank" className="underline">Clippy tool</a> to 
              generate clip-path values visually!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>Different clip-path shapes</CardDescription>
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
      gap: 30px;
    }
    
    .shape-box {
      text-align: center;
    }
    
    .shape {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      margin: 0 auto 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 20px;
      transition: transform 0.3s;
    }
    
    .shape:hover {
      transform: scale(1.05);
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    /* Different clip-path shapes */
    .circle {
      clip-path: circle(50%);
    }
    
    .ellipse {
      clip-path: ellipse(50% 35%);
    }
    
    .triangle {
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }
    
    .diamond {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
    
    .hexagon {
      clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    }
    
    .star {
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
    
    .arrow {
      clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
    }
    
    .message {
      clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✂️ clip-path Shapes</h1>
    
    <div class="grid">
      <div class="shape-box">
        <div class="shape circle">Circle</div>
        <div class="label">circle(50%)</div>
      </div>
      
      <div class="shape-box">
        <div class="shape ellipse">Ellipse</div>
        <div class="label">ellipse()</div>
      </div>
      
      <div class="shape-box">
        <div class="shape triangle">Triangle</div>
        <div class="label">polygon()</div>
      </div>
      
      <div class="shape-box">
        <div class="shape diamond">Diamond</div>
        <div class="label">polygon()</div>
      </div>
      
      <div class="shape-box">
        <div class="shape hexagon">Hexagon</div>
        <div class="label">polygon()</div>
      </div>
      
      <div class="shape-box">
        <div class="shape star">Star</div>
        <div class="label">polygon()</div>
      </div>
      
      <div class="shape-box">
        <div class="shape arrow">Arrow</div>
        <div class="label">polygon()</div>
      </div>
      
      <div class="shape-box">
        <div class="shape message">Speech</div>
        <div class="label">polygon()</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="clip-path Shapes Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Circle className="w-6 h-6 text-green-600 dark:text-green-400" />
            CSS Masks
          </CardTitle>
          <CardDescription>Image-based masking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Masks use images (gradients, PNGs, SVGs) where <strong>black hides</strong> and <strong>white shows</strong> content.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Mask Properties
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`/* Gradient mask */
mask-image: linear-gradient(to bottom, black, transparent);

/* Image mask */
mask-image: url('mask.png');

/* Size and position */
mask-size: cover;
mask-position: center;
mask-repeat: no-repeat;`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { use: 'Fade Out', code: 'mask-image: linear-gradient(to bottom, black 80%, transparent);' },
              { use: 'Text Reveal', code: 'mask-image: url("text-mask.svg");' },
              { use: 'Image Blend', code: 'mask-image: linear-gradient(45deg, black, white);' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <p className="font-bold text-green-900 dark:text-green-100 mb-2">{item.use}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Practical applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Profile Pictures', tech: 'clip-path: circle()', desc: 'Circular avatars' },
            { use: 'Hero Sections', tech: 'clip-path: polygon()', desc: 'Angled edges' },
            { use: 'Hover Effects', tech: 'clip-path + transition', desc: 'Shape morphing' },
            { use: 'Image Reveals', tech: 'mask-image: gradient', desc: 'Fade effects' },
            { use: 'Creative Layouts', tech: 'clip-path: polygon()', desc: 'Unique shapes' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-100">{item.use}</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">{item.desc}</p>
              </div>
              <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded">
                {item.tech}
              </code>
            </div>
          ))}
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>clip-path</strong> for geometric shapes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>mask</strong> for image-based masking</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>polygon()</strong> for any custom shape</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>All modern browsers</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
