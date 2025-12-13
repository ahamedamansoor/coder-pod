'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  MousePointer2, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Move, Smartphone
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssScrollSnapProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssScrollSnap({ onOpenWebPlayground }: CssScrollSnapProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointer2}
        category="CSS · Modern Features"
        title="Scroll Snap"
        description="Create smooth, snapping scroll experiences"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <MousePointer2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Scroll Snap</CardTitle>
              <CardDescription className="text-base">Snap scroll positions to specific points</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Scroll Snap = Smooth Carousels!</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Create carousel-like scroll behavior with pure CSS! Perfect for image galleries, 
              full-page sections, and mobile-friendly scrolling experiences. No JavaScript needed! 🎯
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Smartphone, title: 'Mobile-First', desc: 'Perfect for touch scrolling' },
              { icon: Move, title: 'No JavaScript', desc: 'Pure CSS solution' },
              { icon: Sparkles, title: 'Smooth UX', desc: 'Native browser behavior' }
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
            <Move className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Setup
          </CardTitle>
          <CardDescription>Two simple properties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">1. Container</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Set snap type on scroll container
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg">
                <code className="text-sm text-blue-100">
{`.container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}`}
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">2. Children</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Set snap align on child items
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg">
                <code className="text-sm text-green-100">
{`.item {
  scroll-snap-align: start;
}`}
                </code>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              scroll-snap-type Values
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <code className="font-bold text-purple-700 dark:text-purple-400">x mandatory</code> - Horizontal, must snap
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <code className="font-bold text-purple-700 dark:text-purple-400">y mandatory</code> - Vertical, must snap
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <code className="font-bold text-purple-700 dark:text-purple-400">x proximity</code> - Snap if close enough
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <code className="font-bold text-purple-700 dark:text-purple-400">both mandatory</code> - Both directions
              </div>
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
          <CardDescription>Horizontal image carousel</CardDescription>
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
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .demo {
      max-width: 800px;
      width: 100%;
      background: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #9ca3af;
      }
    }
    
    /* SCROLL SNAP CONTAINER */
    .carousel {
      scroll-snap-type: x mandatory;
      overflow-x: scroll;
      display: flex;
      gap: 20px;
      padding: 20px;
      background: #f3f4f6;
      border-radius: 12px;
      scrollbar-width: thin;
    }
    
    @media (prefers-color-scheme: dark) {
      .carousel {
        background: #374151;
      }
    }
    
    /* SCROLL SNAP ITEMS */
    .slide {
      scroll-snap-align: start;
      flex: 0 0 100%;
      height: 300px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      color: white;
      font-weight: bold;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    
    .slide:nth-child(1) {
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
    
    .slide:nth-child(2) {
      background: linear-gradient(135deg, #f093fb, #f5576c);
    }
    
    .slide:nth-child(3) {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
    }
    
    .slide:nth-child(4) {
      background: linear-gradient(135deg, #43e97b, #38f9d7);
    }
    
    .slide:nth-child(5) {
      background: linear-gradient(135deg, #fa709a, #fee140);
    }
    
    .slide-number {
      font-size: 80px;
      margin-bottom: 10px;
    }
    
    .slide-text {
      font-size: 18px;
      opacity: 0.9;
    }
    
    .dots {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #d1d5db;
    }
    
    @media (prefers-color-scheme: dark) {
      .dot {
        background: #4b5563;
      }
    }
  </style>
</head>
<body>
  <div class="demo">
    <h1>📸 Scroll Snap Carousel</h1>
    <p class="subtitle">Swipe or scroll horizontally →</p>
    
    <div class="carousel">
      <div class="slide">
        <div class="slide-number">1</div>
        <div class="slide-text">Purple Gradient</div>
      </div>
      
      <div class="slide">
        <div class="slide-number">2</div>
        <div class="slide-text">Pink Gradient</div>
      </div>
      
      <div class="slide">
        <div class="slide-number">3</div>
        <div class="slide-text">Blue Gradient</div>
      </div>
      
      <div class="slide">
        <div class="slide-number">4</div>
        <div class="slide-text">Green Gradient</div>
      </div>
      
      <div class="slide">
        <div class="slide-number">5</div>
        <div class="slide-text">Yellow Gradient</div>
      </div>
    </div>
    
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</body>
</html>`}
            title="Scroll Snap Carousel"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Move className="w-6 h-6 text-green-600 dark:text-green-400" />
            Scroll Snap Align
          </CardTitle>
          <CardDescription>Control snap alignment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              {
                align: 'start',
                desc: 'Snap to the start edge of the item',
                use: 'Image galleries, card carousels'
              },
              {
                align: 'center',
                desc: 'Snap to the center of the item',
                use: 'Featured content, testimonials'
              },
              {
                align: 'end',
                desc: 'Snap to the end edge of the item',
                use: 'Right-aligned layouts'
              },
              {
                align: 'none',
                desc: 'No snapping on this item',
                use: 'Disable snap for specific items'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600 text-white">{item.align}</Badge>
                  <span className="text-xs text-green-700 dark:text-green-300">{item.use}</span>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">{item.desc}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  scroll-snap-align: {item.align};
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
            Additional Properties
          </CardTitle>
          <CardDescription>Fine-tune scroll behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                prop: 'scroll-padding',
                desc: 'Offset for snap position',
                code: 'scroll-padding: 20px;',
                use: 'Add spacing around snapped items'
              },
              {
                prop: 'scroll-snap-stop',
                desc: 'Force stop at snap points',
                code: 'scroll-snap-stop: always;',
                use: 'Prevent skipping slides'
              },
              {
                prop: 'scroll-margin',
                desc: 'Margin around snap item',
                code: 'scroll-margin: 10px;',
                use: 'Adjust item snap position'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.prop}</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">{item.desc}</p>
                <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-3 py-2 rounded block mb-2">
                  {item.code}
                </code>
                <p className="text-xs text-blue-700 dark:text-blue-300">→ {item.use}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Where to use scroll snap</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Image Galleries', example: 'Full-width photo carousels' },
            { use: 'Product Showcases', example: 'E-commerce product images' },
            { use: 'Testimonials', example: 'Customer review sliders' },
            { use: 'Onboarding Screens', example: 'Mobile app tutorials' },
            { use: 'Full-Page Sections', example: 'Landing page sections' },
            { use: 'Card Carousels', example: 'Horizontal card lists' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
              <div>
                <p className="font-bold text-orange-900 dark:text-orange-100">{item.use}</p>
                <p className="text-xs text-orange-700 dark:text-orange-300">{item.example}</p>
              </div>
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
            <span><strong>scroll-snap-type</strong> on container</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>scroll-snap-align</strong> on child items</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>mandatory</strong> for carousels, <strong>proximity</strong> for lists</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for <strong>mobile touch scrolling</strong>!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
