'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Zap,
  Lightbulb,
  Image as ImageIcon,
  Eye,
  Rocket,
} from 'lucide-react';

export default function JavaScriptLazyLoading() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Rocket}
        category="JavaScript Performance"
        title="Lazy Loading"
        description="Load resources only when needed for better performance and user experience"
        colorTheme="yellow"
      />

      {/* What is Lazy Loading? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-sky-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-sky-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Load Resources On-Demand for Better Performance
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-blue-700 dark:text-blue-400">Lazy Loading</strong> is a performance optimization technique that defers loading of non-critical resources until they're actually needed. Perfect for images, videos, and code splitting!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Image Lazy Loading</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load images only when they're about to enter the viewport. Saves bandwidth and speeds up initial page load.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h4 className="font-semibold text-cyan-900 dark:text-cyan-100">Intersection Observer</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Browser API to detect when elements enter the viewport. Perfect for implementing custom lazy loading logic.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/30 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h4 className="font-semibold text-sky-900 dark:text-sky-100">Code Splitting</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load JavaScript modules only when needed using dynamic import(). Reduces initial bundle size significantly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Native Image Lazy Loading */}
      <FrontendCodePreview
        title="Native Image Lazy Loading"
        html={`<div style="max-width: 700px; margin: 0 auto;">
  <h2 style="color: #0284c7; margin-bottom: 20px;">Scroll to Load Images</h2>
  
  <div style="display: flex; gap: 12px; margin-bottom: 20px;">
    <div style="flex: 1; padding: 12px; background: #e0f2fe; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #0284c7; margin-bottom: 4px;">Images Loaded</div>
      <div id="imagesLoaded" style="font-size: 24px; font-weight: bold; color: #0369a1;">0 / 12</div>
    </div>
    <div style="flex: 1; padding: 12px; background: #dcfce7; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #16a34a; margin-bottom: 4px;">Bandwidth Saved</div>
      <div id="bandwidthSaved" style="font-size: 24px; font-weight: bold; color: #15803d;">~0 KB</div>
    </div>
  </div>

  <div id="scrollContainer" style="height: 400px; overflow-y: auto; border: 2px solid #7dd3fc; border-radius: 10px; padding: 20px; background: #f0f9ff;">
    <p style="color: #0369a1; font-weight: bold; margin-bottom: 15px;">Scroll down to see lazy loading in action! 👇</p>
    <div id="imageContainer"></div>
  </div>
  
  <div style="margin-top: 15px; padding: 12px; background: #fef3c7; border-radius: 8px; border: 2px solid #fcd34d;">
    <strong style="color: #92400e;">💡 Tip:</strong> <span style="color: #78350f;">Images only load when they're about to enter the viewport!</span>
  </div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

#scrollContainer::-webkit-scrollbar {
  width: 10px;
}

#scrollContainer::-webkit-scrollbar-track {
  background: #e0f2fe;
  border-radius: 10px;
}

#scrollContainer::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #0284c7, #7dd3fc);
  border-radius: 10px;
}

.image-wrapper {
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s ease;
}

.image-wrapper img:not([src]) {
  opacity: 0;
}

.image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #e0f2fe 0%, #bae6fd 50%, #e0f2fe 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0369a1;
  font-weight: bold;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.image-caption {
  padding: 12px;
  background: #f0f9ff;
  color: #0369a1;
  font-size: 14px;
  font-weight: 600;
}

.loading-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0ea5e9;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}`}
        js={`// Mock image URLs (using placeholder service)
const imageUrls = [
  'https://picsum.photos/600/200?random=1',
  'https://picsum.photos/600/200?random=2',
  'https://picsum.photos/600/200?random=3',
  'https://picsum.photos/600/200?random=4',
  'https://picsum.photos/600/200?random=5',
  'https://picsum.photos/600/200?random=6',
  'https://picsum.photos/600/200?random=7',
  'https://picsum.photos/600/200?random=8',
  'https://picsum.photos/600/200?random=9',
  'https://picsum.photos/600/200?random=10',
  'https://picsum.photos/600/200?random=11',
  'https://picsum.photos/600/200?random=12',
];

let loadedCount = 0;
const avgImageSize = 45; // KB
const container = document.getElementById('imageContainer');

// Create image placeholders
imageUrls.forEach((url, index) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'image-wrapper';
  wrapper.innerHTML = '<div class="image-placeholder">🖼️ Image #' + (index + 1) + ' - Waiting to load...</div><div class="image-caption">Image #' + (index + 1) + '</div>';
  container.appendChild(wrapper);
});

// Intersection Observer for lazy loading
const observerOptions = {
  root: document.getElementById('scrollContainer'),
  rootMargin: '50px', // Start loading 50px before entering viewport
  threshold: 0.01
};

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const wrapper = entry.target;
      const index = Array.from(container.children).indexOf(wrapper);
      
      // Replace placeholder with actual image
      const img = document.createElement('img');
      img.src = imageUrls[index];
      img.alt = 'Image ' + (index + 1);
      
      // Add loading badge
      const badge = document.createElement('div');
      badge.className = 'loading-badge';
      badge.textContent = '⏳ Loading...';
      wrapper.insertBefore(badge, wrapper.firstChild);
      
      img.onload = () => {
        wrapper.querySelector('.image-placeholder').remove();
        badge.remove();
        wrapper.insertBefore(img, wrapper.querySelector('.image-caption'));
        
        loadedCount++;
        updateStats();
      };
      
      // Stop observing this image
      imageObserver.unobserve(wrapper);
    }
  });
}, observerOptions);

// Observe all image wrappers
Array.from(container.children).forEach(wrapper => {
  imageObserver.observe(wrapper);
});

function updateStats() {
  document.getElementById('imagesLoaded').textContent = loadedCount + ' / ' + imageUrls.length;
  const saved = (imageUrls.length - loadedCount) * avgImageSize;
  document.getElementById('bandwidthSaved').textContent = '~' + saved + ' KB';
}`}
        colorTheme="yellow"
      />

      {/* Intersection Observer API */}
      <CodeSnippet
        title="Intersection Observer API - The Foundation"
        description="Modern browser API for detecting element visibility"
        code={`// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is visible!
        const element = entry.target;
        
        // Load the resource
        if (element.dataset.src) {
          element.src = element.dataset.src;
          element.classList.add('loaded');
        }
        
        // Stop observing once loaded
        observer.unobserve(element);
      }
    });
  },
  {
    root: null, // viewport
    rootMargin: '50px', // Start loading 50px before visible
    threshold: 0.1 // Trigger when 10% visible
  }
);

// Observe images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// HTML structure:
// <img data-src="large-image.jpg" alt="Lazy loaded image" />
// Image won't load until it's about to enter viewport!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Native Loading Attribute */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Native Lazy Loading (Super Easy!)</CardTitle>
              <CardDescription>Modern browsers support lazy loading out of the box</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-2 border-emerald-200 dark:border-emerald-800/30">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">
              Just add loading="lazy" attribute!
            </h4>
            <pre className="bg-white dark:bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-800 dark:text-gray-200">{`<!-- Images -->
<img src="photo.jpg" loading="lazy" alt="Photo" />

<!-- Iframes -->
<iframe src="video.html" loading="lazy"></iframe>

<!-- That's it! Browser handles the rest -->
<img src="another-photo.jpg" loading="lazy" alt="Another" />`}</code>
            </pre>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Browser Support</AlertTitle>
            <AlertDescription>
              Supported in all modern browsers (Chrome 77+, Firefox 75+, Safari 15.4+). For older browsers, images load normally - it's a progressive enhancement!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Dynamic Import for Code Splitting */}
      <FrontendCodePreview
        title="Dynamic Import - Code Splitting"
        html={`<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8b5cf6; margin-bottom: 20px;">Load Modules On-Demand</h2>
  
  <div style="display: flex; gap: 12px; margin-bottom: 20px;">
    <div style="flex: 1; padding: 12px; background: #f3e8ff; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #8b5cf6; margin-bottom: 4px;">Modules Loaded</div>
      <div id="modulesLoaded" style="font-size: 24px; font-weight: bold; color: #6b21a8;">0</div>
    </div>
    <div style="flex: 1; padding: 12px; background: #fef3c7; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #f59e0b; margin-bottom: 4px;">Initial Bundle</div>
      <div style="font-size: 24px; font-weight: bold; color: #d97706;">Small ✓</div>
    </div>
  </div>

  <div style="border: 2px solid #c084fc; border-radius: 10px; padding: 20px; background: #faf5ff; margin-bottom: 15px;">
    <h3 style="color: #6b21a8; margin-bottom: 15px;">Click to Load Features:</h3>
    <div style="display: grid; gap: 10px;">
      <button id="loadChart" style="padding: 12px; background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        📊 Load Chart Module
      </button>
      <button id="loadEditor" style="padding: 12px; background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        ✏️ Load Editor Module
      </button>
      <button id="loadGallery" style="padding: 12px; background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        🖼️ Load Gallery Module
      </button>
    </div>
  </div>

  <div id="output" style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #e9d5ff; min-height: 100px; color: #475569;">
    <p style="color: #94a3b8; text-align: center; margin-top: 20px;">Click a button to dynamically load a module...</p>
  </div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  transition: all 0.2s;
}

button:active {
  transform: scale(0.98);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.module-content {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}`}
        js={`// Simulated modules (in real app, these would be separate files)
const modules = {
  chart: {
    name: 'Chart Module',
    size: '45 KB',
    init: () => ({
      render: () => '<div class="module-content"><h3 style="color: #8b5cf6; margin-bottom: 10px;">📊 Chart Module Loaded!</h3><div style="padding: 20px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 8px;"><div style="font-size: 14px; color: #6b21a8;">Chart rendering capabilities enabled</div><div style="margin-top: 10px; height: 100px; background: white; border-radius: 4px; display: flex; align-items: flex-end; gap: 4px; padding: 8px;"><div style="flex: 1; background: #8b5cf6; height: 60%; border-radius: 2px;"></div><div style="flex: 1; background: #a78bfa; height: 80%; border-radius: 2px;"></div><div style="flex: 1; background: #c084fc; height: 40%; border-radius: 2px;"></div><div style="flex: 1; background: #8b5cf6; height: 90%; border-radius: 2px;"></div></div></div></div>'
    })
  },
  editor: {
    name: 'Editor Module',
    size: '78 KB',
    init: () => ({
      render: () => '<div class="module-content"><h3 style="color: #8b5cf6; margin-bottom: 10px;">✏️ Editor Module Loaded!</h3><div style="padding: 15px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 8px;"><textarea style="width: 100%; height: 80px; padding: 10px; border: 2px solid #c084fc; border-radius: 6px; font-family: monospace; resize: none;" placeholder="Start typing..."></textarea><div style="margin-top: 8px; display: flex; gap: 8px;"><button style="padding: 6px 12px; background: #8b5cf6; color: white; border: none; border-radius: 4px; font-size: 12px;">Bold</button><button style="padding: 6px 12px; background: #a78bfa; color: white; border: none; border-radius: 4px; font-size: 12px;">Italic</button><button style="padding: 6px 12px; background: #c084fc; color: white; border: none; border-radius: 4px; font-size: 12px;">Save</button></div></div></div>'
    })
  },
  gallery: {
    name: 'Gallery Module',
    size: '92 KB',
    init: () => ({
      render: () => '<div class="module-content"><h3 style="color: #8b5cf6; margin-bottom: 10px;">🖼️ Gallery Module Loaded!</h3><div style="padding: 15px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 8px;"><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">' + [...Array(6)].map((_, i) => '<div style="aspect-ratio: 1; background: linear-gradient(135deg, #8b5cf6, #c084fc); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">' + (i + 1) + '</div>').join('') + '</div></div></div>'
    })
  }
};

let modulesLoadedCount = 0;

// Simulate dynamic import
async function loadModule(moduleName) {
  const button = document.getElementById('load' + moduleName.charAt(0).toUpperCase() + moduleName.slice(1));
  button.disabled = true;
  button.textContent = '⏳ Loading...';
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const module = modules[moduleName];
  const instance = module.init();
  
  document.getElementById('output').innerHTML = instance.render();
  modulesLoadedCount++;
  document.getElementById('modulesLoaded').textContent = modulesLoadedCount;
  
  button.textContent = '✓ Loaded';
  button.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';
}

// Event listeners
document.getElementById('loadChart').addEventListener('click', () => loadModule('chart'));
document.getElementById('loadEditor').addEventListener('click', () => loadModule('editor'));
document.getElementById('loadGallery').addEventListener('click', () => loadModule('gallery'));`}
        colorTheme="yellow"
      />

      {/* Real Dynamic Import Example */}
      <FrontendCodePreview
        title="Dynamic Import() in Action"
        html={`<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="color: #f59e0b; margin-bottom: 20px;">Dynamic Module Loading Demo</h2>
  
  <div style="display: flex; gap: 12px; margin-bottom: 20px;">
    <div style="flex: 1; padding: 12px; background: #fef3c7; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #f59e0b; margin-bottom: 4px;">Initial Bundle</div>
      <div style="font-size: 20px; font-weight: bold; color: #d97706;">25 KB</div>
    </div>
    <div style="flex: 1; padding: 12px; background: #dbeafe; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #3b82f6; margin-bottom: 4px;">Loaded On-Demand</div>
      <div id="dynamicLoaded" style="font-size: 20px; font-weight: bold; color: #2563eb;">0 KB</div>
    </div>
  </div>

  <div style="border: 2px solid #fbbf24; border-radius: 10px; padding: 20px; background: #fffbeb; margin-bottom: 15px;">
    <h3 style="color: #d97706; margin-bottom: 15px;">Click to Load Modules:</h3>
    <div style="display: grid; gap: 10px;">
      <button id="loadUtils" style="padding: 12px; background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        📦 Load Utils Module (45 KB)
      </button>
      <button id="loadAnalytics" style="padding: 12px; background: linear-gradient(135deg, #3b82f6, #60a5fa); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        📊 Load Analytics Module (120 KB)
      </button>
      <button id="conditionalLoad" style="padding: 12px; background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        🔍 Conditional Feature Detection
      </button>
    </div>
  </div>

  <div id="output" style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #fed7aa; min-height: 120px;">
    <div style="color: #94a3b8; text-align: center; margin-top: 20px;">
      💡 Click buttons to dynamically import modules<br>
      <span style="font-size: 13px;">Notice: Code only loads when needed!</span>
    </div>
  </div>

  <div style="margin-top: 15px; padding: 12px; background: #dcfce7; border-radius: 8px; border: 2px solid #86efac;">
    <strong style="color: #15803d;">✅ Bundle Savings:</strong> 
    <span style="color: #166534;">By not loading everything upfront, initial page load is much faster!</span>
  </div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
}

button:active {
  transform: scale(0.98);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.module-output {
  animation: slideIn 0.4s ease-out;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-left: 4px solid;
}

@keyframes slideIn {
  from { 
    opacity: 0; 
    transform: translateY(-10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.code-block {
  background: #1e293b;
  color: #e2e8f0;
  padding: 12px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 13px;
  margin-top: 8px;
  overflow-x: auto;
}

.success-badge {
  display: inline-block;
  background: #16a34a;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
}`}
        js={`// Simulated dynamic modules (in real app, these would be separate .js files)
const modules = {
  utils: {
    size: 45,
    async load() {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 600));
      return {
        formatDate: (date) => date.toLocaleDateString(),
        capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
        sum: (...nums) => nums.reduce((a, b) => a + b, 0)
      };
    }
  },
  analytics: {
    size: 120,
    async load() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        trackEvent: (event) => 'Tracked: ' + event,
        getMetrics: () => ({ users: 1234, sessions: 5678 })
      };
    }
  }
};

let totalLoaded = 0;

// Dynamic import simulation for Utils
document.getElementById('loadUtils').addEventListener('click', async function() {
  const btn = this;
  if (btn.disabled) return;
  
  btn.disabled = true;
  btn.textContent = '⏳ Loading Utils...';
  
  try {
    // Simulates: const utils = await import('./utils.js');
    const utils = await modules.utils.load();
    
    totalLoaded += modules.utils.size;
    document.getElementById('dynamicLoaded').textContent = totalLoaded + ' KB';
    
    const output = document.getElementById('output');
    output.innerHTML = '<div class=\"module-output\" style=\"background: #fef3c7; border-color: #f59e0b;\"><strong style=\"color: #d97706;\">✅ Utils Module Loaded!</strong><span class=\"success-badge\">45 KB</span><div class=\"code-block\">// Dynamic import syntax:<br>const utils = await import(' + \"'./utils.js')\" + ';<br><br>// Now available:<br>utils.formatDate() ✓<br>utils.capitalize() ✓<br>utils.sum() ✓</div><p style=\"margin-top: 10px; color: #92400e; font-size: 14px;\">📦 Module loaded on-demand, not in initial bundle!</p></div>';
    
    btn.textContent = '✅ Loaded';
    btn.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';
  } catch (error) {
    btn.textContent = '❌ Failed';
    btn.disabled = false;
  }
});

// Dynamic import simulation for Analytics
document.getElementById('loadAnalytics').addEventListener('click', async function() {
  const btn = this;
  if (btn.disabled) return;
  
  btn.disabled = true;
  btn.textContent = '⏳ Loading Analytics...';
  
  try {
    // Simulates: const analytics = await import('./analytics.js');
    const analytics = await modules.analytics.load();
    
    totalLoaded += modules.analytics.size;
    document.getElementById('dynamicLoaded').textContent = totalLoaded + ' KB';
    
    const output = document.getElementById('output');
    output.innerHTML = '<div class=\"module-output\" style=\"background: #dbeafe; border-color: #3b82f6;\"><strong style=\"color: #2563eb;\">✅ Analytics Module Loaded!</strong><span class=\"success-badge\">120 KB</span><div class=\"code-block\">// Heavy library loaded only when needed:<br>const analytics = await import(' + \"'./analytics.js')\" + ';<br><br>// Saves ~120KB from initial bundle!<br>analytics.trackEvent() ✓<br>analytics.getMetrics() ✓</div><p style=\"margin-top: 10px; color: #1e40af; font-size: 14px;\">🚀 Initial page load was much faster without this!</p></div>';
    
    btn.textContent = '✅ Loaded';
    btn.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';
  } catch (error) {
    btn.textContent = '❌ Failed';
    btn.disabled = false;
  }
});

// Conditional loading based on feature detection
document.getElementById('conditionalLoad').addEventListener('click', async function() {
  const btn = this;
  if (btn.disabled) return;
  
  btn.disabled = true;
  btn.textContent = '⏳ Detecting Features...';
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const hasIntersectionObserver = 'IntersectionObserver' in window;
  const hasWebGL = !!document.createElement('canvas').getContext('webgl');
  
  let loadedModule = hasIntersectionObserver ? 'modern-features.js' : 'polyfill.js';
  let moduleSize = hasIntersectionObserver ? 25 : 65;
  
  totalLoaded += moduleSize;
  document.getElementById('dynamicLoaded').textContent = totalLoaded + ' KB';
  
  const output = document.getElementById('output');
  output.innerHTML = '<div class=\"module-output\" style=\"background: #f3e8ff; border-color: #8b5cf6;\"><strong style=\"color: #6b21a8;\">✅ Conditional Load Complete!</strong><span class=\"success-badge\">' + moduleSize + ' KB</span><div class=\"code-block\">// Feature detection:<br>IntersectionObserver: ' + (hasIntersectionObserver ? '✅ Available' : '❌ Missing') + '<br>WebGL: ' + (hasWebGL ? '✅ Available' : '❌ Missing') + '<br><br>// Loaded: ' + loadedModule + '<br>// Only loads what\\'s needed for this browser!</div><p style=\"margin-top: 10px; color: #6b21a8; font-size: 14px;\">🎯 Smart loading based on browser capabilities!</p></div>';
  
  btn.textContent = '✅ Loaded';
  btn.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';
});`}
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Make the most of lazy loading</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Do This
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">📸</span>
                  <span><strong>Lazy load below-the-fold images</strong> - Images not visible on initial load</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">📦</span>
                  <span><strong>Code split large libraries</strong> - Monaco Editor, Chart.js, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">🎯</span>
                  <span><strong>Use rootMargin</strong> - Start loading slightly before viewport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">🖼️</span>
                  <span><strong>Add placeholders</strong> - Show loading state for better UX</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">⚠️</span>
                  <span><strong>Don't lazy load hero images</strong> - Above-the-fold content should load immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">🚫</span>
                  <span><strong>Don't overuse dynamic imports</strong> - Too many requests can hurt performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">📱</span>
                  <span><strong>Don't forget mobile</strong> - Test on slow connections and devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">🔍</span>
                  <span><strong>Don't hurt SEO</strong> - Critical content should be server-rendered</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📸</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Native Lazy Loading</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use loading="lazy" attribute<br/>
                    Supported in all modern browsers<br/>
                    Zero JavaScript required
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Intersection Observer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Detect element visibility<br/>
                    Custom lazy loading logic<br/>
                    Better than scroll listeners
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Code Splitting</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use import() for modules<br/>
                    Load features on-demand<br/>
                    Reduce initial bundle size
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance Gains</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Faster initial page load<br/>
                    Reduced bandwidth usage<br/>
                    Better user experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Combine lazy loading with other techniques like image optimization (WebP, responsive images) and CDN caching for maximum performance. Measure with Lighthouse to see the impact!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
