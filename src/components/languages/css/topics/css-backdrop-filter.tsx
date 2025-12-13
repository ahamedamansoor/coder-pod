'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Eye, Layers
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssBackdropFilterProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBackdropFilter({ onOpenWebPlayground }: CssBackdropFilterProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Eye}
        category="CSS · Visual Effects"
        title="Backdrop Filter"
        description="Create glassmorphism and frosted glass effects"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg backdrop-blur-sm">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Backdrop Filter</CardTitle>
              <CardDescription className="text-base">Blur & filter the background behind elements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Backdrop Filter = Glassmorphism! 🪟</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Unlike <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">filter</code> which affects 
              the element itself, <strong>backdrop-filter</strong> affects the <strong>background behind</strong> the element. 
              Perfect for modern glass/frosted effects!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              filter vs backdrop-filter
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Badge className="bg-blue-600 text-white mb-2">filter</Badge>
                <p className="text-gray-600 dark:text-gray-400">
                  Blurs the <strong>element itself</strong><br />
                  Content becomes blurry<br />
                  Use: blur images, darken elements
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Badge className="bg-green-600 text-white mb-2">backdrop-filter</Badge>
                <p className="text-gray-600 dark:text-gray-400">
                  Blurs the <strong>background behind</strong><br />
                  Content stays sharp<br />
                  Use: glassmorphism, frosted glass
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Filter Functions
          </CardTitle>
          <CardDescription>Same functions as filter property</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            backdrop-filter uses the same functions as filter, but applies them to the background!
          </p>

          <div className="space-y-3">
            {[
              { func: 'blur()', example: 'backdrop-filter: blur(10px);', desc: 'Frosted glass effect' },
              { func: 'brightness()', example: 'backdrop-filter: brightness(80%);', desc: 'Darken background' },
              { func: 'contrast()', example: 'backdrop-filter: contrast(150%);', desc: 'Enhance contrast' },
              { func: 'grayscale()', example: 'backdrop-filter: grayscale(100%);', desc: 'Desaturate background' },
              { func: 'saturate()', example: 'backdrop-filter: saturate(200%);', desc: 'Boost colors' },
              { func: 'hue-rotate()', example: 'backdrop-filter: hue-rotate(90deg);', desc: 'Shift colors' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600 text-white text-xs">{item.func}</Badge>
                  <span className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</span>
                </div>
                <code className="text-xs bg-purple-900 dark:bg-purple-950 text-purple-100 px-2 py-1 rounded">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Combine Multiple!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">
                backdrop-filter: blur(10px) saturate(180%);
              </code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Glassmorphism Demo
          </CardTitle>
          <CardDescription>Modern frosted glass cards</CardDescription>
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
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      position: relative;
      overflow: hidden;
    }
    
    /* Colorful background */
    body::before {
      content: '';
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.5) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.5) 0%, transparent 50%),
        radial-gradient(circle at 40% 90%, rgba(240, 147, 251, 0.5) 0%, transparent 50%),
        radial-gradient(circle at 60% 20%, rgba(245, 87, 108, 0.5) 0%, transparent 50%);
      animation: rotate 20s linear infinite;
    }
    
    @media (prefers-color-scheme: dark) {
      body::before {
        background: 
          radial-gradient(circle at 20% 50%, rgba(67, 65, 144, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(90, 61, 122, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 40% 90%, rgba(164, 69, 178, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 60% 20%, rgba(168, 85, 247, 0.8) 0%, transparent 50%);
      }
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1200px;
      width: 100%;
    }
    
    /* GLASSMORPHISM CARDS */
    .glass-card {
      backdrop-filter: blur(20px) saturate(180%);
      background: rgba(255, 255, 255, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .glass-card {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
    
    .glass-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    }
    
    .icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      margin-bottom: 20px;
      backdrop-filter: blur(10px);
    }
    
    h2 {
      color: #1a1a2e;
      margin-bottom: 10px;
      font-size: 1.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: white;
      }
    }
    
    p {
      color: #4a5568;
      line-height: 1.6;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    
    .blur-light {
      backdrop-filter: blur(5px);
    }
    
    .blur-medium {
      backdrop-filter: blur(15px);
    }
    
    .blur-heavy {
      backdrop-filter: blur(30px) saturate(200%);
    }
    
    .title {
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      text-align: center;
    }
    
    .title h1 {
      color: white;
      font-size: 2.5rem;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
      margin-bottom: 10px;
    }
    
    .title p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <div class="title">
    <h1>Glassmorphism</h1>
    <p>Backdrop Filter in Action</p>
  </div>
  
  <div class="container">
    <div class="glass-card blur-light">
      <div class="icon">✨</div>
      <h2>Light Blur</h2>
      <p>backdrop-filter: blur(5px)<br><br>Subtle glass effect with light background blur.</p>
    </div>
    
    <div class="glass-card blur-medium">
      <div class="icon">💎</div>
      <h2>Medium Blur</h2>
      <p>backdrop-filter: blur(15px)<br><br>Classic glassmorphism with moderate blur.</p>
    </div>
    
    <div class="glass-card blur-heavy">
      <div class="icon">🔮</div>
      <h2>Heavy Blur</h2>
      <p>backdrop-filter: blur(30px) saturate(200%)<br><br>Intense frosted glass with enhanced colors.</p>
    </div>
  </div>
</body>
</html>`}
            title="Glassmorphism Cards"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Perfect Glassmorphism Recipe
          </CardTitle>
          <CardDescription>The classic glass card formula</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Complete Glass Effect
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`.glass {
  /* Backdrop blur */
  backdrop-filter: blur(10px) saturate(180%);
  
  /* Semi-transparent background */
  background: rgba(255, 255, 255, 0.25);
  
  /* Subtle border */
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  /* Shadow for depth */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  /* Round corners */
  border-radius: 16px;
}`}
              </code>
            </div>
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                This recipe works on <strong>any background</strong> - images, gradients, or colors!
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-green-900 dark:text-green-100">Key Ingredients:</h4>
            {[
              { ingredient: 'Backdrop blur', why: 'Creates the frosted effect' },
              { ingredient: 'Transparent background', why: 'Shows the blurred background through' },
              { ingredient: 'Border highlight', why: 'Defines the glass edge' },
              { ingredient: 'Saturate filter', why: 'Enhances colors behind' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-green-900 dark:text-green-100">{item.ingredient}:</strong>
                  <span className="text-sm text-green-700 dark:text-green-300 ml-1">{item.why}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Where to use backdrop-filter</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Navigation Bars', desc: 'Transparent header that blurs content behind' },
            { use: 'Modal Overlays', desc: 'Dialog backgrounds with frosted effect' },
            { use: 'Cards', desc: 'Modern glass cards over images/gradients' },
            { use: 'Sidebars', desc: 'Floating panels with glass effect' },
            { use: 'Tooltips', desc: 'Subtle frosted tooltips' },
            { use: 'Search Bars', desc: 'Transparent search overlays' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-100">{item.use}</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Performance Tips
          </CardTitle>
          <CardDescription>Use backdrop-filter wisely</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Performance Cost</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              backdrop-filter is GPU-intensive! Use sparingly and test performance on mobile devices.
            </AlertDescription>
          </Alert>

          <div className="space-y-2 text-sm">
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <strong className="text-green-900 dark:text-green-100">✅ Good:</strong> Small cards, nav bars, modals
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <strong className="text-red-900 dark:text-red-100">❌ Avoid:</strong> Large areas, many elements, animations
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
            <span><strong>backdrop-filter</strong> blurs the background, not the element</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <strong>semi-transparent background</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <strong>saturate(180%)</strong> for vibrant colors</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 76+, Safari 9+, Firefox 103+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
