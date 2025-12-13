'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Smartphone, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Monitor, Tablet
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssMediaQueriesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssMediaQueries({ onOpenWebPlayground }: CssMediaQueriesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Smartphone}
        category="CSS · Responsive Design"
        title="Media Queries"
        description="Adapt styles based on device characteristics and screen size"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Media Queries</CardTitle>
              <CardDescription className="text-base">Responsive design foundation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Media Queries = Conditional CSS</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Media queries let you apply different styles based on device characteristics like screen width, 
              height, orientation, and more. Essential for responsive design!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
              <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Mobile</h3>
              <p className="text-xs text-blue-800 dark:text-blue-200">&lt; 768px</p>
            </div>
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 text-center">
              <Tablet className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Tablet</h3>
              <p className="text-xs text-green-800 dark:text-green-200">768px - 1024px</p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 text-center">
              <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Desktop</h3>
              <p className="text-xs text-purple-800 dark:text-purple-200">&gt; 1024px</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Media Query Syntax
          </CardTitle>
          <CardDescription>Target specific screen sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Mobile-First Approach (Recommended)
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg">
              <code className="text-sm text-purple-100 block">
{`/* Base styles for mobile */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}`}
              </code>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Mobile-First is Best!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Start with mobile styles, then use <code>min-width</code> to add complexity for larger screens. 
              This approach is cleaner and more performant!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Responsive Layout Demo
          </CardTitle>
          <CardDescription>Try resizing your browser!</CardDescription>
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
      padding: 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      background: white;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      max-width: 1200px;
      margin: 0 auto;
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
      margin-bottom: 20px;
      font-size: 1.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .status {
      text-align: center;
      padding: 15px;
      border-radius: 12px;
      font-weight: 600;
      margin-bottom: 30px;
      background: #fee;
      color: #991b1b;
    }
    
    /* Mobile - base styles */
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .status {
      background: #fee;
      color: #991b1b;
    }
    
    /* Tablet - 768px and up */
    @media (min-width: 768px) {
      h1 {
        font-size: 2rem;
      }
      
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      
      .status {
        background: #fef3c7;
        color: #92400e;
      }
    }
    
    /* Desktop - 1024px and up */
    @media (min-width: 1024px) {
      h1 {
        font-size: 2.5rem;
      }
      
      .container {
        padding: 40px;
      }
      
      .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
      }
      
      .status {
        background: #d1fae5;
        color: #065f46;
      }
    }
    
    .card {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      transition: transform 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📱 Responsive Grid</h1>
    <div class="status" id="status">Loading...</div>
    
    <div class="grid">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
      <div class="card">Card 5</div>
      <div class="card">Card 6</div>
    </div>
  </div>
  
  <script>
    function updateStatus() {
      const width = window.innerWidth;
      const status = document.getElementById('status');
      
      if (width < 768) {
        status.textContent = '📱 Mobile (1 column)';
      } else if (width < 1024) {
        status.textContent = '📱 Tablet (2 columns)';
      } else {
        status.textContent = '🖥️ Desktop (3 columns)';
      }
    }
    
    updateStatus();
    window.addEventListener('resize', updateStatus);
  </script>
</body>
</html>`}
            title="Responsive Media Queries"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Common Breakpoints
          </CardTitle>
          <CardDescription>Standard responsive design sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { size: '320px', device: 'Small phones', color: 'red' },
              { size: '480px', device: 'Phones (landscape)', color: 'orange' },
              { size: '768px', device: 'Tablets', color: 'yellow' },
              { size: '1024px', device: 'Laptops', color: 'green' },
              { size: '1280px', device: 'Desktops', color: 'blue' },
              { size: '1536px', device: 'Large screens', color: 'purple' }
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800 flex items-center justify-between`}>
                <div>
                  <code className="font-mono font-bold text-lg">{item.size}</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.device}</p>
                </div>
                <code className={`text-xs bg-${item.color}-100 dark:bg-${item.color}-900 px-3 py-1 rounded`}>
                  @media (min-width: {item.size})
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Media Features
          </CardTitle>
          <CardDescription>Beyond just width</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { feature: 'orientation', example: '@media (orientation: landscape)', desc: 'Portrait or landscape' },
              { feature: 'prefers-color-scheme', example: '@media (prefers-color-scheme: dark)', desc: 'Dark mode detection' },
              { feature: 'hover', example: '@media (hover: hover)', desc: 'Hover capability' },
              { feature: 'aspect-ratio', example: '@media (aspect-ratio: 16/9)', desc: 'Screen aspect ratio' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <Badge className="bg-green-600 text-white mb-2">{item.feature}</Badge>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">{item.desc}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded block">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>mobile-first</strong> approach with min-width</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Common breakpoints: <strong>768px (tablet), 1024px (desktop)</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test on real devices, not just browser resize!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <strong>Flexbox/Grid</strong> for best results</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
