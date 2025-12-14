'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Maximize2,
  CheckCircle,
  Code2,
  Lightbulb,
  Eye,
  Zap,
  Monitor,
  Shield,
} from 'lucide-react';

export default function JavaScriptResizeObserver() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Maximize2}
        category="JavaScript Browser APIs"
        title="ResizeObserver API"
        description="Detect element size changes with high performance"
        colorTheme="blue"
      />

      {/* What is ResizeObserver */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-xl">
              <Maximize2 className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                What is ResizeObserver?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                ResizeObserver <strong className="text-blue-700 dark:text-blue-400">watches elements</strong> and notifies you when their size changes. 
                Much better than <code className="text-sm bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">window.resize</code> - it's <strong className="text-sky-700 dark:text-sky-400">per-element</strong> and <strong className="text-cyan-700 dark:text-cyan-400">super performant</strong>!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-950/20 border-2 border-blue-300 dark:border-blue-700">
              <div className="text-3xl mb-2">📐</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Element Tracking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Watch specific elements, not window</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-900/30 dark:to-sky-950/20 border-2 border-sky-300 dark:border-sky-700">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-2">High Performance</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Efficient browser-native API</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900/30 dark:to-cyan-950/20 border-2 border-cyan-300 dark:border-cyan-700">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Precise Detection</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Content box, border box sizing</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Better than window.resize?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="text-xs bg-white dark:bg-green-900 px-1.5 py-0.5 rounded">window.resize</code> fires for <strong>entire window</strong> changes. 
              ResizeObserver fires when <strong>individual elements</strong> change size (flex layout, animations, content changes). More precise!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Watch Element Resize"
        description="Drag the textarea corner to see ResizeObserver in action!"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #06b6d4 100%); padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; text-align: center;">📐 ResizeObserver Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px; text-align: center;">Resize the box below - drag the corner!</p>
    
    <div style="background: rgba(255, 255, 255, 0.95); padding: 24px; border-radius: 12px; backdrop-filter: blur(10px);">
      <textarea 
        id="resizableBox" 
        style="width: 100%; min-height: 100px; padding: 16px; border: 3px solid #3b82f6; border-radius: 8px; font-family: 'Segoe UI', sans-serif; font-size: 14px; resize: both; overflow: auto; background: #f0f9ff;"
        placeholder="👆 Drag the bottom-right corner to resize me!"
      >Try resizing this box by dragging the corner! 

ResizeObserver is watching and reporting the size changes in real-time below.

This is much better than window.resize event!</textarea>
      
      <div id="output" style="margin-top: 20px; padding: 16px; background: linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%); border-radius: 8px; border-left: 4px solid #3b82f6;"></div>
    </div>
  </div>
</div>`}
        css={`#resizableBox:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.size-change {
  animation: pulse 0.3s ease-out;
}`}
        js={`const box = document.getElementById('resizableBox');
const output = document.getElementById('output');

let resizeCount = 0;

// Create ResizeObserver
const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    resizeCount++;
    
    // Get different size measurements
    const contentBoxSize = entry.contentBoxSize?.[0];
    const borderBoxSize = entry.borderBoxSize?.[0];
    
    // contentRect gives us the size
    const width = Math.round(entry.contentRect.width);
    const height = Math.round(entry.contentRect.height);
    
    // Update display with animation
    output.className = 'size-change';
    output.innerHTML = \`
      <div style="display: grid; gap: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 700; color: #1e3a8a; font-size: 18px;">📏 Current Size</div>
            <div style="font-size: 24px; font-weight: 700; color: #3b82f6; margin-top: 4px;">
              \${width}px × \${height}px
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 12px; color: #64748b; font-weight: 600;">RESIZE COUNT</div>
            <div style="font-size: 28px; font-weight: 700; color: #0ea5e9;">\${resizeCount}</div>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
          <div style="padding: 8px; background: white; border-radius: 6px;">
            <span style="color: #64748b;">Width:</span> 
            <strong style="color: #1e40af;">\${width}px</strong>
          </div>
          <div style="padding: 8px; background: white; border-radius: 6px;">
            <span style="color: #64748b;">Height:</span> 
            <strong style="color: #1e40af;">\${height}px</strong>
          </div>
          <div style="padding: 8px; background: white; border-radius: 6px;">
            <span style="color: #64748b;">Area:</span> 
            <strong style="color: #1e40af;">\${(width * height).toLocaleString()} px²</strong>
          </div>
          <div style="padding: 8px; background: white; border-radius: 6px;">
            <span style="color: #64748b;">Ratio:</span> 
            <strong style="color: #1e40af;">\${(width / height).toFixed(2)}</strong>
          </div>
        </div>
        
        <div style="font-size: 11px; color: #475569; text-align: center; margin-top: 4px;">
          ⚡ Updated at: \${new Date().toLocaleTimeString()}
        </div>
      </div>
    \`;
    
    setTimeout(() => output.className = '', 300);
  }
});

// Start observing the box
observer.observe(box);

// Initial display
setTimeout(() => {
  const rect = box.getBoundingClientRect();
  output.innerHTML = \`
    <div style="text-align: center; color: #1e40af;">
      <div style="font-weight: 600; margin-bottom: 8px;">👆 Drag the textarea corner to see ResizeObserver in action!</div>
      <div style="font-size: 13px; color: #64748b;">Initial size: \${Math.round(rect.width)}px × \${Math.round(rect.height)}px</div>
    </div>
  \`;
}, 100);

console.log('✅ ResizeObserver is now watching the textarea!');`}
        colorTheme="blue"
      />

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>Simple ResizeObserver setup</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100/50 dark:from-blue-950/20 dark:to-sky-900/10 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Observe Element Size
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Create ResizeObserver
const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    // Get element's new size
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    
    console.log(\`Element resized to: \${width}x\${height}\`);
    
    // Update UI, recalculate layout, etc.
    updateChart(width, height);
  }
});

// Start observing an element
const element = document.getElementById('myElement');
observer.observe(element);

// Later: Stop observing
observer.unobserve(element);

// Or disconnect all observations
observer.disconnect();`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Size Measurements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30">
              <Monitor className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </div>
            <div>
              <CardTitle>Different Size Measurements</CardTitle>
              <CardDescription>contentRect, contentBoxSize, borderBoxSize</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-100/50 dark:from-sky-950/20 dark:to-cyan-900/10 border-2 border-sky-200 dark:border-sky-800/30">
            <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-3">Understanding Size Types</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    // 1. contentRect - Basic size info (legacy)
    console.log('contentRect:', {
      width: entry.contentRect.width,
      height: entry.contentRect.height,
      top: entry.contentRect.top,
      left: entry.contentRect.left
    });
    
    // 2. contentBoxSize - Content area (excluding padding/border)
    const contentBox = entry.contentBoxSize?.[0];
    console.log('contentBox:', {
      inlineSize: contentBox?.inlineSize,  // Width in horizontal writing
      blockSize: contentBox?.blockSize      // Height in horizontal writing
    });
    
    // 3. borderBoxSize - Including padding and border
    const borderBox = entry.borderBoxSize?.[0];
    console.log('borderBox:', {
      inlineSize: borderBox?.inlineSize,
      blockSize: borderBox?.blockSize
    });
    
    // 4. devicePixelContentBoxSize - Device pixel ratio aware
    const deviceBox = entry.devicePixelContentBoxSize?.[0];
    console.log('devicePixels:', {
      inlineSize: deviceBox?.inlineSize,
      blockSize: deviceBox?.blockSize
    });
  }
});

observer.observe(element);`}</code>
            </pre>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Which Size to Use?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>contentRect</strong> → Most common, simple width/height<br/>
              <strong>borderBoxSize</strong> → Includes padding and borders<br/>
              <strong>contentBoxSize</strong> → Just the content area
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Real-World Examples</CardTitle>
              <CardDescription>Practical use cases</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-100/50 dark:from-cyan-950/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800/30">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">1. Responsive Chart</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Redraw chart when container resizes
const chartContainer = document.getElementById('chart');
let chart = createChart(chartContainer);

const observer = new ResizeObserver(entries => {
  const { width, height } = entries[0].contentRect;
  
  // Resize chart to fit new container size
  chart.resize(width, height);
  chart.redraw();
});

observer.observe(chartContainer);

// Works with:
// - Window resize
// - Sidebar collapse/expand
// - Parent container flex changes`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">2. Responsive Text Size</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Adjust font size based on container width
const container = document.getElementById('textBox');

const observer = new ResizeObserver(entries => {
  const width = entries[0].contentRect.width;
  
  // Scale font size with container
  const fontSize = Math.max(12, Math.min(24, width / 20));
  container.style.fontSize = fontSize + 'px';
  
  console.log(\`Font size adjusted to: \${fontSize}px\`);
});

observer.observe(container);

// Perfect for:
// - Dashboard cards
// - Responsive headings
// - Adaptive UI components`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">3. Virtual Scrolling</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Update visible items when viewport changes
const scrollContainer = document.getElementById('list');

const observer = new ResizeObserver(entries => {
  const height = entries[0].contentRect.height;
  const itemHeight = 50; // Fixed item height
  
  // Calculate how many items can fit
  const visibleCount = Math.ceil(height / itemHeight);
  
  // Render only visible items
  renderVisibleItems(visibleCount);
  
  console.log(\`Rendering \${visibleCount} visible items\`);
});

observer.observe(scrollContainer);

// Use for:
// - Long lists (1000+ items)
// - Infinite scroll
// - Performance optimization`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Perfect Use Cases</CardTitle>
              <CardDescription>When to use ResizeObserver</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Charts & Graphs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Redraw visualizations when container size changes
              </p>
            </div>

            <div className="p-5 rounded-xl bg-sky-50 dark:bg-sky-950/20 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-2">Responsive Design</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Adjust component layout based on available space
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="text-3xl mb-3">📜</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Virtual Scrolling</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Calculate visible items based on viewport height
              </p>
            </div>

            <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="text-3xl mb-3">🖼️</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Image Galleries</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Recalculate grid layout when container resizes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support & Tips */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Best Practices & Tips</CardTitle>
              <CardDescription>Getting the most out of ResizeObserver</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Disconnect When Done</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Always call <code className="text-xs bg-white dark:bg-green-900 px-1.5 py-0.5 rounded">observer.disconnect()</code> when component unmounts
            </p>
            <pre className="text-xs mt-2 p-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded"><code>useEffect(() => {`{
  return () => observer.disconnect();
}`}, []);</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Debounce Heavy Operations</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If resize handler is expensive, debounce or throttle it
            </p>
            <pre className="text-xs mt-2 p-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded"><code>{`const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};`}</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Observe Multiple Elements</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              One observer can watch many elements efficiently
            </p>
            <pre className="text-xs mt-2 p-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded"><code>{`elements.forEach(el => observer.observe(el));`}</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚡ Excellent Browser Support</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Supported in all modern browsers! Chrome 64+, Firefox 69+, Safari 13.1+
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Element-Specific</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Watch individual elements, not just window
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">High Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Browser-optimized, efficient detection
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for Charts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Resize visualizations dynamically
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Multiple Sizes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    contentRect, borderBox, contentBox
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
