'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Sparkles, RectangleHorizontal, Image, Video, Maximize2, CheckCircle, Info, Zap, Target } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssAspectRatioProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aspect Ratio Basics</title>
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    h1 {
      text-align: center;
      color: #1e40af;
      margin-bottom: 40px;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #60a5fa; }
    }
    
    .examples {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    
    .demo-box {
      background: linear-gradient(135deg, #e0f2fe, #bfdbfe);
      border: 2px solid #60a5fa;
      border-radius: 12px;
      padding: 20px;
      aspect-ratio: 16 / 9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #1e40af;
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: linear-gradient(135deg, #1e3a8a, #1e40af);
        color: #e0f2fe;
        border-color: #3b82f6;
      }
    }
    
    .demo-box:hover {
      transform: scale(1.05);
    }
    
    .ratio-16-9 { aspect-ratio: 16 / 9; }
    .ratio-4-3 { aspect-ratio: 4 / 3; }
    .ratio-1-1 { aspect-ratio: 1 / 1; }
    .ratio-21-9 { aspect-ratio: 21 / 9; }
    
    .label {
      text-align: center;
      margin-top: 10px;
      font-weight: 600;
      color: #64748b;
    }
    @media (prefers-color-scheme: dark) {
      .label { color: #94a3b8; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 CSS Aspect Ratio Examples</h1>
    
    <div class="examples">
      <div>
        <div class="demo-box ratio-16-9">
          16:9 Widescreen
        </div>
        <div class="label">aspect-ratio: 16 / 9</div>
      </div>
      
      <div>
        <div class="demo-box ratio-4-3">
          4:3 Standard
        </div>
        <div class="label">aspect-ratio: 4 / 3</div>
      </div>
      
      <div>
        <div class="demo-box ratio-1-1">
          1:1 Square
        </div>
        <div class="label">aspect-ratio: 1 / 1</div>
      </div>
      
      <div>
        <div class="demo-box ratio-21-9">
          21:9 Ultrawide
        </div>
        <div class="label">aspect-ratio: 21 / 9</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const videoExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video & Image Aspect Ratios</title>
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    h1 {
      text-align: center;
      color: #7c3aed;
      margin-bottom: 40px;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #a78bfa; }
    }
    
    .video-container {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: linear-gradient(135deg, #ddd6fe, #c4b5fd);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 30px;
      box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
    }
    @media (prefers-color-scheme: dark) {
      .video-container {
        background: linear-gradient(135deg, #581c87, #6b21a8);
      }
    }
    
    .video-placeholder {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
    }
    
    .play-button {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    .play-button:hover {
      transform: scale(1.1);
    }
    
    .play-icon {
      width: 0;
      height: 0;
      border-left: 25px solid #7c3aed;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      margin-left: 8px;
    }
    
    .video-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #5b21b6;
    }
    @media (prefers-color-scheme: dark) {
      .video-text { color: #ddd6fe; }
    }
    
    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }
    
    .image-box {
      aspect-ratio: 3 / 4;
      background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #6b21a8;
      border: 2px solid #a78bfa;
      transition: transform 0.3s ease;
    }
    @media (prefers-color-scheme: dark) {
      .image-box {
        background: linear-gradient(135deg, #4c1d95, #5b21b6);
        color: #e9d5ff;
        border-color: #7c3aed;
      }
    }
    
    .image-box:hover {
      transform: translateY(-5px);
    }
    
    h2 {
      color: #7c3aed;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    @media (prefers-color-scheme: dark) {
      h2 { color: #c4b5fd; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📹 Video & Image Aspect Ratios</h1>
    
    <div class="video-container">
      <div class="video-placeholder">
        <div class="play-button">
          <div class="play-icon"></div>
        </div>
        <div class="video-text">16:9 Video Container</div>
      </div>
    </div>
    
    <p style="text-align: center; color: #64748b; font-size: 0.95rem;">
      aspect-ratio: 16 / 9 • Perfect for YouTube, Vimeo, and modern videos
    </p>
    
    <h2>📸 Portrait Images (3:4 ratio)</h2>
    <div class="image-grid">
      <div class="image-box">Portrait 1</div>
      <div class="image-box">Portrait 2</div>
      <div class="image-box">Portrait 3</div>
      <div class="image-box">Portrait 4</div>
    </div>
  </div>
</body>
</html>`;

const responsiveExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Aspect Ratios</title>
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #15803d 0%, #166534 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    h1 {
      text-align: center;
      color: #16a34a;
      margin-bottom: 40px;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #4ade80; }
    }
    
    .responsive-box {
      width: 100%;
      background: linear-gradient(135deg, #dcfce7, #bbf7d0);
      border: 3px solid #22c55e;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #15803d;
      font-size: 1.2rem;
      margin-bottom: 40px;
      transition: all 0.3s ease;
    }
    @media (prefers-color-scheme: dark) {
      .responsive-box {
        background: linear-gradient(135deg, #166534, #15803d);
        color: #dcfce7;
        border-color: #22c55e;
      }
    }
    
    .mobile-first {
      aspect-ratio: 9 / 16;
    }
    
    @media (min-width: 768px) {
      .mobile-first {
        aspect-ratio: 16 / 9;
      }
    }
    
    .info-box {
      background: rgba(34, 197, 94, 0.1);
      border-left: 4px solid #22c55e;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: rgba(34, 197, 94, 0.2);
        border-color: #4ade80;
      }
    }
    
    .device-label {
      display: inline-block;
      padding: 8px 16px;
      background: #22c55e;
      color: white;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-bottom: 15px;
    }
    
    .mobile-only { display: block; }
    .desktop-only { display: none; }
    
    @media (min-width: 768px) {
      .mobile-only { display: none; }
      .desktop-only { display: block; }
    }
    
    h2 {
      color: #16a34a;
      margin-bottom: 20px;
    }
    @media (prefers-color-scheme: dark) {
      h2 { color: #86efac; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📱 Responsive Aspect Ratios</h1>
    
    <div class="info-box">
      <div class="mobile-only">
        <div class="device-label">📱 Mobile View</div>
        <p><strong>Current aspect ratio: 9:16</strong> (Portrait)</p>
        <p>Perfect for mobile devices and stories!</p>
      </div>
      
      <div class="desktop-only">
        <div class="device-label">💻 Desktop View</div>
        <p><strong>Current aspect ratio: 16:9</strong> (Landscape)</p>
        <p>Optimized for wider screens!</p>
      </div>
    </div>
    
    <div class="responsive-box mobile-first">
      <div style="text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🎯</div>
        <div class="mobile-only">9:16 Portrait</div>
        <div class="desktop-only">16:9 Landscape</div>
      </div>
    </div>
    
    <h2>💡 How it works:</h2>
    <pre style="background: #f1f5f9; padding: 20px; border-radius: 8px; overflow-x: auto; color: #334155;"><code>.responsive-box {
  aspect-ratio: 9 / 16; /* Mobile first */
}

@media (min-width: 768px) {
  .responsive-box {
    aspect-ratio: 16 / 9; /* Desktop */
  }
}</code></pre>
  </div>
</body>
</html>`;

export default function CssAspectRatio({ onOpenWebPlayground }: CssAspectRatioProps) {
  const [selectedRatio, setSelectedRatio] = useState('16/9');
  
  const commonRatios = [
    { value: '16/9', name: '16:9', desc: 'Widescreen (HD Video)', icon: '📺' },
    { value: '4/3', name: '4:3', desc: 'Standard TV', icon: '📼' },
    { value: '1/1', name: '1:1', desc: 'Square (Instagram)', icon: '⬜' },
    { value: '9/16', name: '9:16', desc: 'Portrait (Stories)', icon: '📱' },
    { value: '21/9', name: '21:9', desc: 'Ultrawide (Cinema)', icon: '🎬' },
    { value: '3/2', name: '3:2', desc: 'Photography', icon: '📷' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={RectangleHorizontal}
        category="CSS · Modern Layout"
        title="CSS Aspect Ratio"
        description="Maintain consistent width-to-height ratios with the modern aspect-ratio property"
        colorTheme="blue"
      />

      {/* INTRODUCTION */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is CSS Aspect Ratio?
          </CardTitle>
          <CardDescription>
            A modern CSS property that makes responsive sizing simple
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <strong className="text-foreground">aspect-ratio</strong> CSS property lets you define a preferred 
            width-to-height ratio for an element. Before this property, developers had to use complex padding hacks 
            or JavaScript to maintain aspect ratios. Now, it's as simple as <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">aspect-ratio: 16 / 9</code>!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Video className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Videos & Media</h4>
              <p className="text-sm text-muted-foreground">
                Perfect for responsive video players and embedded media
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Image className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Images & Cards</h4>
              <p className="text-sm text-muted-foreground">
                Maintain consistent image sizes in grid layouts
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Maximize2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Scales perfectly on all screen sizes automatically
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LIVE INTERACTIVE DEMO */}
      <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
            <Zap className="w-5 h-5" />
            Interactive Aspect Ratio Demo
          </CardTitle>
          <CardDescription>
            Click different ratios to see them in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {commonRatios.map((ratio) => (
                <button
                  key={ratio.value}
                  onClick={() => setSelectedRatio(ratio.value)}
                  className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all ${
                    selectedRatio === ratio.value
                      ? 'bg-blue-500 text-white border-blue-500 scale-105'
                      : 'bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800 hover:border-blue-400'
                  }`}
                >
                  <span className="mr-2">{ratio.icon}</span>
                  {ratio.name}
                </button>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <div 
                className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300"
                style={{ aspectRatio: selectedRatio }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {commonRatios.find(r => r.value === selectedRatio)?.icon}
                  </div>
                  <div>{commonRatios.find(r => r.value === selectedRatio)?.name}</div>
                  <div className="text-sm opacity-90 mt-1">
                    {commonRatios.find(r => r.value === selectedRatio)?.desc}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <code className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                  aspect-ratio: {selectedRatio};
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BASIC EXAMPLES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Common Aspect Ratios
          </CardTitle>
          <CardDescription>
            Standard ratios used in web design and media
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Aspect Ratio Basics"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">📐 Popular Aspect Ratios:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>16:9</strong> - Standard for HD video, YouTube, modern TVs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>4:3</strong> - Classic TV format, presentations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>1:1</strong> - Square format for Instagram posts, avatars</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>9:16</strong> - Vertical/portrait for Stories, TikTok, Reels</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* VIDEO & IMAGES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Video className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Videos & Images
          </CardTitle>
          <CardDescription>
            Using aspect ratio for media content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={videoExample}
            title="Video & Image Aspect Ratios"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Pro Tip: Responsive Images</AlertTitle>
            <AlertDescription>
              Combine <code className="text-sm bg-muted px-1 rounded">aspect-ratio</code> with{' '}
              <code className="text-sm bg-muted px-1 rounded">object-fit: cover</code> for perfectly 
              cropped responsive images that maintain their shape across all screen sizes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* RESPONSIVE ASPECT RATIOS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Responsive Aspect Ratios
          </CardTitle>
          <CardDescription>
            Change ratios based on screen size
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={responsiveExample}
            title="Responsive Aspect Ratios"
            colorTheme="emerald"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Common aspect-ratio values and use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">aspect-ratio: 16 / 9;</code>
              <p className="text-sm text-muted-foreground mt-1">Widescreen video, HD content</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">aspect-ratio: 1 / 1;</code>
              <p className="text-sm text-muted-foreground mt-1">Square images, avatars, Instagram posts</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">aspect-ratio: 9 / 16;</code>
              <p className="text-sm text-muted-foreground mt-1">Vertical video for Stories, TikTok, Reels</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">aspect-ratio: auto;</code>
              <p className="text-sm text-muted-foreground mt-1">Use natural dimensions (default behavior)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use with width:</strong> Set width (or max-width) and let aspect-ratio control height</li>
            <li><strong>Combine with object-fit:</strong> Use <code className="text-sm bg-muted px-1 rounded">object-fit: cover</code> for images</li>
            <li><strong>Responsive design:</strong> Change aspect-ratio in media queries for different devices</li>
            <li><strong>Fallback support:</strong> Provide min-height for older browsers if needed</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* BROWSER SUPPORT */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          The <code className="text-sm bg-green-100 dark:bg-green-900/30 px-1 rounded">aspect-ratio</code> property has 
          excellent support in all modern browsers (Chrome 88+, Firefox 89+, Safari 15+, Edge 88+).
        </AlertDescription>
      </Alert>
    </div>
  );
}
