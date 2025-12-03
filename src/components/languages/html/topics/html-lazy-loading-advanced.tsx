'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Eye, Zap, Image as ImageIcon, Gauge, CheckCircle, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function HtmlLazyLoadingAdvanced() {
  const basicLazyExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Lazy Loading</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .placeholder {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    /* Dark mode placeholders */
    @media (prefers-color-scheme: dark) {
      .placeholder {
        background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
      }
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  </style>
</head>
<body>
  <h1 style="text-align: center; color: #2563eb;">Image Gallery with Lazy Loading</h1>
  
  <div class="gallery">
    <img src="https://picsum.photos/300/200?random=1" 
         alt="Image 1" 
         loading="lazy" 
         class="placeholder">
    
    <img src="https://picsum.photos/300/200?random=2" 
         alt="Image 2" 
         loading="lazy" 
         class="placeholder">
    
    <img src="https://picsum.photos/300/200?random=3" 
         alt="Image 3" 
         loading="lazy" 
         class="placeholder">
    
    <img src="https://picsum.photos/300/200?random=4" 
         alt="Image 4" 
         loading="lazy" 
         class="placeholder">
  </div>
</body>
</html>`;

  const intersectionObserverExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intersection Observer Lazy Loading</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .card {
      margin: 20px 0;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    .card.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      display: none;
    }
    
    .card img.loaded {
      display: block;
    }
    
    .skeleton {
      width: 100%;
      height: 200px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .skeleton {
        background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
      }
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    h2 {
      color: #2563eb;
      margin-top: 0;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #60a5fa;
      }
    }
    
    p {
      color: #4b5563;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="text-align: center; color: #2563eb;">Scroll to Load Content</h1>
    <script>
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('h1').style.color = '#60a5fa';
      }
    </script>
    
    <div class="card lazy-load" data-src="https://picsum.photos/800/200?random=1">
      <div class="skeleton"></div>
      <img alt="Lazy loaded image 1">
      <h2>Card 1</h2>
      <p>This content loads when you scroll to it!</p>
    </div>
    
    <div class="card lazy-load" data-src="https://picsum.photos/800/200?random=2">
      <div class="skeleton"></div>
      <img alt="Lazy loaded image 2">
      <h2>Card 2</h2>
      <p>Using Intersection Observer API for better performance.</p>
    </div>
    
    <div class="card lazy-load" data-src="https://picsum.photos/800/200?random=3">
      <div class="skeleton"></div>
      <img alt="Lazy loaded image 3">
      <h2>Card 3</h2>
      <p>Images load only when needed!</p>
    </div>
    
    <div class="card lazy-load" data-src="https://picsum.photos/800/200?random=4">
      <div class="skeleton"></div>
      <img alt="Lazy loaded image 4">
      <h2>Card 4</h2>
      <p>Save bandwidth and improve performance.</p>
    </div>
  </div>

  <script>
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const img = card.querySelector('img');
          const skeleton = card.querySelector('.skeleton');
          const imgSrc = card.getAttribute('data-src');
          
          // Add visible class for animation
          card.classList.add('visible');
          
          // Load the image
          if (imgSrc && img) {
            img.src = imgSrc;
            img.onload = () => {
              skeleton.style.display = 'none';
              img.classList.add('loaded');
            };
          }
          
          // Stop observing this element
          observer.unobserve(card);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all lazy-load elements
    document.querySelectorAll('.lazy-load').forEach(card => {
      observer.observe(card);
    });
  </script>
</body>
</html>`;

  const progressiveLazyExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progressive Lazy Loading</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .image-wrapper {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      aspect-ratio: 16/9;
    }
    
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .image-wrapper img.loaded {
      opacity: 1;
    }
    
    .blur-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(20px);
      transform: scale(1.1);
      transition: opacity 0.5s ease;
    }
    
    .blur-placeholder.hidden {
      opacity: 0;
    }
    
    .loading-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255, 255, 255, 0.9);
      color: #667eea;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      display: none;
    }
    
    .loading-badge.active {
      display: block;
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
    
    .image-label {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      padding: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Progressive Image Loading</h1>
    
    <div class="grid">
      <div class="image-wrapper" data-src="https://picsum.photos/600/400?random=1">
        <img class="blur-placeholder" 
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3C/svg%3E" 
             alt="placeholder">
        <img class="full-image" alt="Image 1">
        <div class="loading-badge">Loading...</div>
        <div class="image-label">Mountain View</div>
      </div>
      
      <div class="image-wrapper" data-src="https://picsum.photos/600/400?random=2">
        <img class="blur-placeholder" 
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3C/svg%3E" 
             alt="placeholder">
        <img class="full-image" alt="Image 2">
        <div class="loading-badge">Loading...</div>
        <div class="image-label">Ocean Sunset</div>
      </div>
      
      <div class="image-wrapper" data-src="https://picsum.photos/600/400?random=3">
        <img class="blur-placeholder" 
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3C/svg%3E" 
             alt="placeholder">
        <img class="full-image" alt="Image 3">
        <div class="loading-badge">Loading...</div>
        <div class="image-label">Forest Path</div>
      </div>
      
      <div class="image-wrapper" data-src="https://picsum.photos/600/400?random=4">
        <img class="blur-placeholder" 
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3C/svg%3E" 
             alt="placeholder">
        <img class="full-image" alt="Image 4">
        <div class="loading-badge">Loading...</div>
        <div class="image-label">City Lights</div>
      </div>
    </div>
  </div>

  <script>
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const wrapper = entry.target;
          const fullImage = wrapper.querySelector('.full-image');
          const placeholder = wrapper.querySelector('.blur-placeholder');
          const badge = wrapper.querySelector('.loading-badge');
          const imgSrc = wrapper.getAttribute('data-src');
          
          // Show loading badge
          badge.classList.add('active');
          
          // Load full image
          fullImage.src = imgSrc;
          
          fullImage.onload = () => {
            // Hide loading badge
            badge.classList.remove('active');
            
            // Show full image
            fullImage.classList.add('loaded');
            
            // Hide placeholder
            placeholder.classList.add('hidden');
          };
          
          // Stop observing
          observer.unobserve(wrapper);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '100px'
    });

    // Observe all image wrappers
    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
      imageObserver.observe(wrapper);
    });
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Gauge}
        category="14. Performance"
        title="Advanced Lazy Loading"
        description="Master modern lazy loading techniques with Intersection Observer API for optimal performance"
        colorTheme="purple"
      />

      {/* What is Advanced Lazy Loading */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is Advanced Lazy Loading?
          </CardTitle>
          <CardDescription>
            Advanced lazy loading uses the Intersection Observer API to load content only when it's about to enter the viewport
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            While basic lazy loading with <code className="px-2 py-1 bg-muted rounded">loading="lazy"</code> is simple, 
            advanced lazy loading gives you complete control over when and how content loads using JavaScript.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Basic Lazy Loading</h4>
              </div>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>✓ Simple attribute</li>
                <li>✓ No JavaScript needed</li>
                <li>✗ Limited control</li>
                <li>✗ Browser-dependent</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Advanced Lazy Loading</h4>
              </div>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>✓ Full control</li>
                <li>✓ Custom loading logic</li>
                <li>✓ Animations & effects</li>
                <li>✓ Progressive loading</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            How Lazy Loading Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800">
            <div className="space-y-6">
              {/* Viewport visualization */}
              <div className="relative">
                <div className="text-center mb-4">
                  <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Browser Viewport</span>
                </div>
                
                <div className="border-4 border-purple-500 rounded-lg p-4 bg-white dark:bg-slate-900 relative h-64 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 text-center">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs rounded-b font-semibold">
                      ✓ Visible - Loaded
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-2">
                      <div className="w-32 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mx-auto shadow-lg"></div>
                      <p className="text-xs text-green-700 dark:text-green-300 font-medium">Image Loaded</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 left-0 right-0 border-t-4 border-dashed border-amber-500">
                    <div className="text-center mt-2">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs rounded font-semibold">
                        Loading Zone (100px margin)
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Below viewport */}
                <div className="mt-16 border-4 border-gray-300 dark:border-gray-700 border-dashed rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center space-y-2">
                      <div className="w-32 h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto animate-pulse"></div>
                      <p className="text-xs text-gray-500 font-medium">Not Loaded Yet</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-700 dark:text-gray-300">Loaded</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-amber-500 rounded"></div>
                  <span className="text-gray-700 dark:text-gray-300">Loading Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <span className="text-gray-700 dark:text-gray-300">Not Loaded</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Lazy Loading Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Basic Lazy Loading with Attribute
          </CardTitle>
          <CardDescription>
            Simplest way to lazy load images using the loading attribute
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicLazyExample}
            css=""
            title="Basic Lazy Loading"
            colorTheme="blue"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Points:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">loading="lazy"</code> attribute</li>
              <li>• Add placeholder with loading animation</li>
              <li>• Images load as you scroll down</li>
              <li>• Browser handles everything automatically</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Intersection Observer Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Intersection Observer API
          </CardTitle>
          <CardDescription>
            Full control with JavaScript - detect when elements enter the viewport
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={intersectionObserverExample}
            css=""
            title="Intersection Observer Lazy Loading"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>How It Works</AlertTitle>
              <AlertDescription className="text-sm space-y-2">
                <ol className="list-decimal list-inside space-y-1">
                  <li>Observer watches for elements entering viewport</li>
                  <li>When element is 10% visible (threshold: 0.1), it triggers</li>
                  <li>Images load and skeleton disappears</li>
                  <li>Smooth animations show content appearing</li>
                </ol>
              </AlertDescription>
            </Alert>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Intersection Observer Options:</h4>
              <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <div><code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">threshold: 0.1</code> - Trigger when 10% visible</div>
                <div><code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">rootMargin: '50px'</code> - Start loading 50px before visible</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progressive Loading Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
              <Gauge className="h-5 w-5" />
            </div>
            3. Progressive Image Loading
          </CardTitle>
          <CardDescription>
            Beautiful blur-up effect - show low quality placeholder first, then full image
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={progressiveLazyExample}
            css=""
            title="Progressive Lazy Loading"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Progressive Loading Steps:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">1</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">Show blurred placeholder instantly</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">2</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">Display "Loading..." badge</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">Load full resolution image in background</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">4</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">Smooth fade transition to full image</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Always provide width and height to prevent layout shift</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Show loading placeholders for better UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use <code>rootMargin</code> to start loading before visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Test on slow connections (throttle in DevTools)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Clean up observers when done</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Lazy loading images above the fold</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Not providing alt text for images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Observing too many elements at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Forgetting to unobserve after loading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using without fallback for older browsers</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Gauge className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          Intersection Observer API is supported in all modern browsers (Chrome 51+, Firefox 55+, Safari 12.1+, Edge 15+). 
          For older browsers, use a <a href="https://www.npmjs.com/package/intersection-observer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">polyfill</a>.
        </AlertDescription>
      </Alert>
    </div>
  );
}
