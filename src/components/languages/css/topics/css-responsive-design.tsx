'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Maximize2, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Smartphone, Monitor
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssResponsiveDesignProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssResponsiveDesign({ onOpenWebPlayground }: CssResponsiveDesignProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Maximize2}
        category="CSS · Responsive Design"
        title="Responsive Design"
        description="Create layouts that adapt to any screen size"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Maximize2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Responsive Web Design</CardTitle>
              <CardDescription className="text-base">One design for all devices</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Responsive = Adaptive</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Responsive design means your website automatically adapts to different screen sizes - 
              from phones to tablets to desktops. One codebase, works everywhere!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Smartphone, title: 'Mobile First', desc: 'Start with smallest screens' },
              { icon: Monitor, title: 'Fluid Layouts', desc: 'Use percentages, not pixels' },
              { icon: Maximize2, title: 'Flexible Images', desc: 'Images scale with container' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-blue-800 dark:text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Core Principles
          </CardTitle>
          <CardDescription>The foundation of responsive design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">1. Flexible Grid</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Use relative units (%, fr, rem) instead of fixed pixels
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg">
                <code className="text-sm text-blue-100">
                  width: 80%; /* Not width: 800px; */
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">2. Flexible Images</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Make images scale with their container
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100">
                  img {`{ max-width: 100%; height: auto; }`}
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">3. Media Queries</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Apply different styles at different breakpoints
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg text-xs">
                <code className="text-purple-100">
                  @media (min-width: 768px) {`{ ... }`}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Responsive Layout Example
          </CardTitle>
          <CardDescription>Complete responsive card grid</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      padding: 20px;
      border-radius: 20px;
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
    
    /* Mobile first - base styles */
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .card {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .card h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    .card p {
      opacity: 0.9;
    }
    
    /* Images scale */
    img {
      max-width: 100%;
      height: auto;
    }
    
    /* Tablet - 2 columns */
    @media (min-width: 768px) {
      .container {
        padding: 40px;
      }
      
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }
      
      .card h2 {
        font-size: 1.75rem;
      }
    }
    
    /* Desktop - 3 columns */
    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
      
      .card h2 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📱 Responsive Card Grid</h1>
    
    <div class="grid">
      <div class="card">
        <h2>Card 1</h2>
        <p>Resize browser to see responsive behavior</p>
      </div>
      
      <div class="card">
        <h2>Card 2</h2>
        <p>Mobile: 1 column<br>Tablet: 2 columns<br>Desktop: 3 columns</p>
      </div>
      
      <div class="card">
        <h2>Card 3</h2>
        <p>Built with CSS Grid and media queries</p>
      </div>
      
      <div class="card">
        <h2>Card 4</h2>
        <p>Mobile-first approach</p>
      </div>
      
      <div class="card">
        <h2>Card 5</h2>
        <p>Fluid typography</p>
      </div>
      
      <div class="card">
        <h2>Card 6</h2>
        <p>Flexible layout</p>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Responsive Layout"
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
          <CardDescription>Tips for responsive design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { title: 'Use Viewport Meta Tag', code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
              { title: 'Mobile-First Approach', code: 'Start with mobile styles, use min-width media queries' },
              { title: 'Relative Units', code: 'Use %, rem, em, vw, vh instead of px where possible' },
              { title: 'Flexible Images', code: 'img { max-width: 100%; height: auto; }' },
              { title: 'Test on Real Devices', code: 'Browser DevTools + actual phones/tablets' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.title}</h4>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  {item.code}
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
            <span><strong>Mobile-first</strong> - Start small, scale up</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Viewport meta tag</strong> is essential</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Flexible images:</strong> max-width: 100%</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>relative units</strong> for flexibility</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
