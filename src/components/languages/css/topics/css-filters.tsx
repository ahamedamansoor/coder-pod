'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Eye, Droplet
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssFiltersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssFilters({ onOpenWebPlayground }: CssFiltersProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Droplet}
        category="CSS · Visual Effects"
        title="CSS Filters"
        description="Image and element effects with filter functions"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Droplet className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Filters</CardTitle>
              <CardDescription className="text-base">Photoshop-like effects in CSS</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">CSS Filters = Instant Effects! ✨</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Apply visual effects like <strong>blur</strong>, <strong>brightness</strong>, and <strong>saturate</strong> 
              to any element with pure CSS. No image editing software needed!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Image Effects', icon: Eye },
              { name: 'Hover States', icon: Sparkles },
              { name: 'Animations', icon: Droplet }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-bold">{item.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Filter Functions
          </CardTitle>
          <CardDescription>10 powerful filter effects</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { func: 'blur()', example: 'blur(5px)', desc: 'Gaussian blur effect' },
            { func: 'brightness()', example: 'brightness(150%)', desc: 'Adjust brightness (0-200%+)' },
            { func: 'contrast()', example: 'contrast(200%)', desc: 'Adjust contrast (0-200%+)' },
            { func: 'grayscale()', example: 'grayscale(100%)', desc: 'Convert to grayscale (0-100%)' },
            { func: 'saturate()', example: 'saturate(200%)', desc: 'Adjust saturation (0-200%+)' },
            { func: 'hue-rotate()', example: 'hue-rotate(90deg)', desc: 'Rotate hue (0-360deg)' },
            { func: 'invert()', example: 'invert(100%)', desc: 'Invert colors (0-100%)' },
            { func: 'sepia()', example: 'sepia(100%)', desc: 'Apply sepia tone (0-100%)' },
            { func: 'opacity()', example: 'opacity(50%)', desc: 'Adjust opacity (0-100%)' },
            { func: 'drop-shadow()', example: 'drop-shadow(2px 2px 4px black)', desc: 'Add drop shadow' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-purple-600 text-white">{item.func}</Badge>
                <code className="text-xs bg-purple-900 dark:bg-purple-950 text-purple-100 px-2 py-1 rounded">
                  {item.example}
                </code>
              </div>
              <p className="text-sm text-purple-600 dark:text-purple-300">{item.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See all filters in action</CardDescription>
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
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    
    .filter-box {
      text-align: center;
    }
    
    .image {
      width: 100%;
      height: 150px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 10px;
      transition: filter 0.3s;
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    /* FILTER EFFECTS */
    .blur { filter: blur(5px); }
    .brightness { filter: brightness(150%); }
    .contrast { filter: contrast(200%); }
    .grayscale { filter: grayscale(100%); }
    .saturate { filter: saturate(300%); }
    .hue-rotate { filter: hue-rotate(180deg); }
    .invert { filter: invert(100%); }
    .sepia { filter: sepia(100%); }
    .opacity { filter: opacity(50%); }
    .drop-shadow { filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.5)); }
    
    /* COMBINED */
    .combined {
      filter: brightness(110%) contrast(120%) saturate(150%);
    }
    
    /* HOVER EFFECT */
    .hover:hover {
      filter: brightness(80%) blur(2px);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ CSS Filters Gallery</h1>
    
    <div class="grid">
      <div class="filter-box">
        <div class="image">CSS</div>
        <div class="label">Original</div>
      </div>
      
      <div class="filter-box">
        <div class="image blur">CSS</div>
        <div class="label">blur(5px)</div>
      </div>
      
      <div class="filter-box">
        <div class="image brightness">CSS</div>
        <div class="label">brightness(150%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image contrast">CSS</div>
        <div class="label">contrast(200%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image grayscale">CSS</div>
        <div class="label">grayscale(100%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image saturate">CSS</div>
        <div class="label">saturate(300%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image hue-rotate">CSS</div>
        <div class="label">hue-rotate(180deg)</div>
      </div>
      
      <div class="filter-box">
        <div class="image invert">CSS</div>
        <div class="label">invert(100%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image sepia">CSS</div>
        <div class="label">sepia(100%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image opacity">CSS</div>
        <div class="label">opacity(50%)</div>
      </div>
      
      <div class="filter-box">
        <div class="image drop-shadow">CSS</div>
        <div class="label">drop-shadow()</div>
      </div>
      
      <div class="filter-box">
        <div class="image combined">CSS</div>
        <div class="label">Combined</div>
      </div>
      
      <div class="filter-box">
        <div class="image hover">Hover</div>
        <div class="label">Hover Effect</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="CSS Filters Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Combining Filters
          </CardTitle>
          <CardDescription>Use multiple filters together</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Chain multiple filter functions separated by spaces:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`/* Combine multiple filters */
.photo {
  filter: 
    brightness(110%)
    contrast(120%)
    saturate(130%);
}

/* Hover effect */
.card:hover {
  filter: brightness(90%) blur(2px);
}`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Instagram-like', code: 'brightness(110%) contrast(110%) saturate(130%)' },
              { name: 'Vintage', code: 'sepia(50%) contrast(120%) brightness(90%)' },
              { name: 'Dramatic', code: 'grayscale(100%) contrast(150%)' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <p className="font-bold text-green-900 dark:text-green-100 mb-2">{item.name}</p>
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
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Where to use filters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Image Effects', filter: 'grayscale(), sepia()', desc: 'B&W or vintage photos' },
            { use: 'Hover States', filter: 'brightness(), blur()', desc: 'Darken on hover' },
            { use: 'Loading States', filter: 'blur(), opacity()', desc: 'Blur placeholder' },
            { use: 'Disabled Elements', filter: 'grayscale(), opacity()', desc: 'Show disabled' },
            { use: 'Focus Attention', filter: 'brightness(), saturate()', desc: 'Highlight active' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-100">{item.use}</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">{item.desc}</p>
              </div>
              <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded">
                {item.filter}
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
            <span>Combine filters with <strong>spaces</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Animate</strong> filters for smooth transitions</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>backdrop-filter</strong> to filter background</span>
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
