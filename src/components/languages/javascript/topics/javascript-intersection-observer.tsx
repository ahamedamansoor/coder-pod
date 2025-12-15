'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Eye, Zap, Image as ImageIcon, Rocket } from 'lucide-react';

export default function JavaScriptIntersectionObserver() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Eye}
        category="APIs & Browser"
        title="Intersection Observer"
        description="Efficiently detecting element visibility for lazy loading and infinite scroll"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
              <Eye className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Intersection Observer? 👀
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Imagine you're reading a long article and images only load when you scroll to them - that's Intersection Observer at work! 
                It watches elements and tells you when they become visible on the screen. <strong className="text-blue-700 dark:text-blue-400">No more constantly checking!</strong>
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">The Problem It Solves 🎯</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Old Way (Bad)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Listen to scroll events → Check position thousands of times → Slow performance → Battery drain 🔋
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ New Way (Good)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Browser watches for you → Only notifies when needed → Fast performance → Happy battery! 🎉
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">How It Works - Visual Explanation 📺</CardTitle>
          <CardDescription>See it in action!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">Scrolling Down a Page</h4>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">📺 Your Screen</span>
                  <span className="text-sm text-gray-500">(Visible Area)</span>
                </div>
                <div className="h-32 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border-2 border-blue-300 dark:border-blue-700 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-900 dark:text-blue-100">Content visible here</span>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-2xl">⬇️</span>
                  <span className="font-bold text-blue-900 dark:text-blue-100">You scroll down...</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-900 dark:text-green-100">Image Enters Screen</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    🎉 Intersection Observer triggers!<br/>
                    → Starts loading the image
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/20 border-2 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-5 h-5 text-gray-600" />
                    <span className="font-bold text-gray-700 dark:text-gray-300">Image Leaves Screen</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    👋 Intersection Observer knows!<br/>
                    → Can stop animations, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Simple Example: Lazy Load Images 🖼️</CardTitle>
          <CardDescription>Load images only when they become visible</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Create an observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is visible!
      const img = entry.target;
      img.src = img.dataset.src; // Load the image
      observer.unobserve(img); // Stop watching
    }
  });
});

// Watch all lazy images
const lazyImages = document.querySelectorAll('img[data-src]');
lazyImages.forEach(img => observer.observe(img));`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Options & Customization ⚙️</CardTitle>
          <CardDescription>Fine-tune when callbacks trigger</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`const options = {
  // Root element (null = viewport)
  root: null,
  
  // Margin around root (like CSS margin)
  rootMargin: '0px',
  // Examples:
  // rootMargin: '50px' - trigger 50px before entering
  // rootMargin: '-100px' - trigger 100px after entering
  
  // Threshold: 0-1 (how much visible)
  threshold: 0.5
  // threshold: 0 - trigger immediately when any part visible
  // threshold: 0.5 - trigger when 50% visible
  // threshold: 1 - trigger when fully visible
  // threshold: [0, 0.5, 1] - trigger at multiple points
};

const observer = new IntersectionObserver(callback, options);`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Use Cases 🌍</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-700">
              <div className="text-4xl mb-3 text-center">🖼️</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 text-center">Lazy Loading Images</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Instagram, Pinterest<br/>
                Load images only when visible
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-4xl mb-3 text-center">📜</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">Infinite Scroll</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Twitter, Facebook feeds<br/>
                Load more as you scroll
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-700">
              <div className="text-4xl mb-3 text-center">✨</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-center">Scroll Animations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Modern websites<br/>
                Fade in as you scroll down
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 border-2 border-orange-200 dark:border-orange-700">
              <div className="text-4xl mb-3 text-center">📊</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 text-center">Analytics Tracking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Track which content users view<br/>
                Know what's popular
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Benefits ⚡</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Better Performance</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    No constant scroll event listening - browser handles it efficiently!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Saves Bandwidth</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Only load resources when needed - great for mobile users!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Easy to Use</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Simple API - create observer, watch elements, done!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Battery Friendly</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Less JavaScript execution = longer battery life on mobile!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Pro Tip!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Always call <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">observer.unobserve(element)</code> after 
              you're done watching an element to prevent memory leaks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👀</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">What is it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Watches elements and tells you when they become visible
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Why use it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Better performance, saves bandwidth, battery friendly!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Common uses?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lazy loading, infinite scroll, animations, analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🚀</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">How to use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create observer → Watch elements → Handle callbacks!
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
