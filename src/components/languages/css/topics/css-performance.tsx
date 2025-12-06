import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Gauge, Sparkles, CheckCircle, Code, Zap, Timer, Target, RefreshCw } from 'lucide-react';

interface CssPerformanceProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPerformance({ onOpenWebPlayground }: CssPerformanceProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Gauge}
                category="CSS · Performance"
                title="CSS Performance"
                description="Master CSS optimization techniques for lightning-fast rendering, efficient selectors, and smooth animations"
                colorTheme="indigo"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-indigo-600 dark:text-indigo-400">
                        <div className="relative">
                            <Gauge className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Performance?
                    </CardTitle>
                    <CardDescription className="text-lg text-indigo-600 dark:text-indigo-400">
                        ⚡ Optimize your CSS for blazing-fast page loads, smooth animations, and efficient rendering across all devices!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    ⚡ Speed Optimization
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Performance</strong> is critical for user experience. Slow CSS can block rendering, cause layout thrashing, and create janky animations. Optimized CSS loads 3-4x faster, renders smoothly at 60fps, and uses minimal CPU/memory resources.
                                </p>

                                {/* Performance Visual */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-indigo-200/50">
                                    <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🚀 Performance Impact
                                    </div>
                                    <div className="text-xs text-indigo-600 dark:text-indigo-400">
                                        Optimized CSS can improve page load time by 40-70% and boost FPS from 30 to 60!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Performance Factors
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200/50">
                                        <Timer className="w-6 h-6 text-red-500" />
                                        <div>
                                            <div className="font-semibold text-red-700 dark:text-red-300 text-sm">Load Time</div>
                                            <div className="text-xs text-red-600 dark:text-red-400">Minimize size</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Target className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Selectors</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Keep simple</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200/50">
                                        <RefreshCw className="w-6 h-6 text-yellow-500" />
                                        <div>
                                            <div className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Reflows</div>
                                            <div className="text-xs text-yellow-600 dark:text-yellow-400">Avoid triggers</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Gauge className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Rendering</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">GPU accelerate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-blue-900/30 p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">⚡</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-indigo-700 dark:text-indigo-300">Optimized CSS</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Fast load
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Smooth 60fps
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Low CPU usage
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💡</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use Chrome DevTools Performance tab to profile CSS rendering!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code Example */}
                    <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Performance Best Practice</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">{'/* ⚡ Use GPU-accelerated properties */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-blue-600 dark:text-blue-400">.animated</span> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">  <span className="text-green-600 dark:text-green-400">transform</span>: <span className="text-purple-600 dark:text-purple-400">translateX</span>(<span className="text-yellow-600 dark:text-yellow-400">100px</span>);</div>
                            <div className="text-gray-900 dark:text-white">  <span className="text-green-600 dark:text-green-400">will-change</span>: <span className="text-yellow-600 dark:text-yellow-400">transform</span>;</div>
                            <div className="text-gray-900 dark:text-white">{'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* SELECTOR PERFORMANCE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Efficient CSS Selectors
                    </CardTitle>
                    <CardDescription>
                        Simple selectors render faster - avoid deep nesting and complex combinators
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Selector Performance Comparison"
                        html={`<div class="container">
  <div class="card">
    <h2 class="card-title">Efficient Selectors</h2>
    <p class="card-text">Use class selectors for best performance</p>
  </div>
  
  <div class="slow-card">
    <div>
      <div>
        <h2>Nested Selectors</h2>
        <p>Avoid deep nesting - it's slower!</p>
      </div>
    </div>
  </div>
</div>

<div class="comparison">
  <div class="fast">✓ Fast: .card-title</div>
  <div class="slow">✗ Slow: div > div > div > h2</div>
</div>`}
                        css={`/* ✓ EFFICIENT - Direct class selectors */
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #6366f1;
  font-size: 24px;
  margin-bottom: 12px;
}

.card-text {
  color: #64748b;
  line-height: 1.6;
}

/* ✗ INEFFICIENT - Deep nesting and complex combinators */
.slow-card div > div > div > h2 {
  color: #ef4444;
  font-size: 24px;
  margin-bottom: 12px;
}

.slow-card div div div p {
  color: #dc2626;
  line-height: 1.6;
}

/* Styles */
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  display: grid;
  gap: 24px;
}

.slow-card {
  background: #fee2e2;
  border: 2px solid #ef4444;
  border-radius: 8px;
  padding: 20px;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
}

.fast {
  background: #d1fae5;
  border: 2px solid #10b981;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  color: #065f46;
  text-align: center;
}

.slow {
  background: #fee2e2;
  border: 2px solid #ef4444;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  color: #991b1b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .card {
    background: #1f2937;
  }
  
  .slow-card {
    background: #7f1d1d;
    border-color: #dc2626;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* REFLOW/REPAINT */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Avoid Layout Thrashing
                    </CardTitle>
                    <CardDescription>
                        Minimize reflows and repaints by batching DOM changes
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Reflow Optimization"
                        html={`<div class="demo">
  <h2>Layout Thrashing Example</h2>
  
  <div class="comparison-grid">
    <div class="method bad">
      <h3>❌ Causes Multiple Reflows</h3>
      <p>Reading and writing layout properties repeatedly forces the browser to recalculate layout multiple times.</p>
      <div class="code-ref">
        <code>Read → Write → Read → Write</code>
      </div>
    </div>
    
    <div class="method good">
      <h3>✓ Batches Changes</h3>
      <p>Reading all values first, then writing all changes allows the browser to batch calculations efficiently.</p>
      <div class="code-ref">
        <code>Read → Read → Write → Write</code>
      </div>
    </div>
  </div>
  
  <div class="tip">
    💡 Use <strong>transform</strong> and <strong>opacity</strong> for animations - they don't trigger layout!
  </div>
</div>`}
                        css={`/* Efficient CSS - No layout triggers */
.demo {
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

h2 {
  color: #3b82f6;
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.method {
  padding: 24px;
  border-radius: 12px;
  border: 2px solid;
}

.method.bad {
  background: #fee2e2;
  border-color: #ef4444;
}

.method.bad h3 {
  color: #dc2626;
  font-size: 20px;
  margin-bottom: 16px;
}

.method.good {
  background: #d1fae5;
  border-color: #10b981;
}

.method.good h3 {
  color: #059669;
  font-size: 20px;
  margin-bottom: 16px;
}

.method p {
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 16px;
}

.code-ref {
  background: white;
  padding: 12px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
}

.code-ref code {
  color: #6366f1;
  font-weight: 600;
}

.tip {
  background: #dbeafe;
  border-left: 4px solid #3b82f6;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  color: #1e40af;
}

/* ⚡ GPU-accelerated animations - performant! */
.animated-element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.animated-element:hover {
  transform: translateY(-4px) scale(1.02);
  opacity: 0.95;
}

@media (prefers-color-scheme: dark) {
  .demo {
    background: #111827;
  }
  
  h2 {
    color: #60a5fa;
  }
  
  .method.bad {
    background: #7f1d1d;
    border-color: #dc2626;
  }
  
  .method.good {
    background: #064e3b;
    border-color: #059669;
  }
  
  .method p {
    color: #d1d5db;
  }
  
  .code-ref {
    background: #1f2937;
  }
  
  .tip {
    background: #1e3a8a;
    border-left-color: #60a5fa;
    color: #dbeafe;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* GPU ACCELERATION */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                        GPU-Accelerated Animations
                    </CardTitle>
                    <CardDescription>
                        Use transform and opacity for silky-smooth 60fps animations
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Performance-Friendly Animations"
                        html={`<div class="animation-demo">
  <h2>Animation Performance Comparison</h2>
  
  <div class="cards">
    <div class="card cpu-animated">
      <div class="badge bad">CPU</div>
      <h3>❌ Janky Animation</h3>
      <p>Using left/top/width triggers layout recalculation on every frame.</p>
      <div class="fps">~30 FPS</div>
    </div>
    
    <div class="card gpu-animated">
      <div class="badge good">GPU</div>
      <h3>✓ Smooth Animation</h3>
      <p>Using transform is hardware-accelerated and runs on the GPU.</p>
      <div class="fps">60 FPS</div>
    </div>
  </div>
  
  <div class="properties">
    <div class="prop-group">
      <h4>✓ Use These (GPU):</h4>
      <ul>
        <li>transform</li>
        <li>opacity</li>
        <li>filter</li>
      </ul>
    </div>
    <div class="prop-group">
      <h4>✗ Avoid These (CPU):</h4>
      <ul>
        <li>left, top, right, bottom</li>
        <li>width, height</li>
        <li>margin, padding</li>
      </ul>
    </div>
  </div>
</div>`}
                        css={`.animation-demo {
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

h2 {
  color: #059669;
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

.card {
  padding: 24px;
  border-radius: 12px;
  border: 2px solid;
  position: relative;
  min-height: 200px;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

.badge.bad {
  background: #fee2e2;
  color: #dc2626;
}

.badge.good {
  background: #d1fae5;
  color: #059669;
}

/* ❌ CPU Animation - Triggers layout */
.cpu-animated {
  background: #fef2f2;
  border-color: #fca5a5;
  animation: janky-move 2s ease-in-out infinite;
}

@keyframes janky-move {
  0%, 100% { margin-left: 0; }
  50% { margin-left: 20px; }
}

/* ✓ GPU Animation - Hardware accelerated */
.gpu-animated {
  background: #ecfdf5;
  border-color: #6ee7b7;
  animation: smooth-move 2s ease-in-out infinite;
  will-change: transform;
}

@keyframes smooth-move {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(20px); }
}

.card h3 {
  font-size: 20px;
  margin: 24px 0 12px 0;
}

.card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

.fps {
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-weight: 700;
  font-size: 18px;
  color: #10b981;
}

.cpu-animated .fps {
  color: #ef4444;
}

.properties {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.prop-group {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}

.prop-group h4 {
  font-size: 18px;
  margin-bottom: 16px;
}

.prop-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.prop-group li {
  padding: 8px 12px;
  background: #f9fafb;
  border-radius: 6px;
  margin-bottom: 8px;
  font-family: monospace;
  color: #4b5563;
}

@media (prefers-color-scheme: dark) {
  .animation-demo {
    background: #111827;
  }
  
  h2 {
    color: #34d399;
  }
  
  .cpu-animated {
    background: #7f1d1d;
    border-color: #dc2626;
  }
  
  .gpu-animated {
    background: #064e3b;
    border-color: #059669;
  }
  
  .card p {
    color: #d1d5db;
  }
  
  .prop-group {
    background: #1f2937;
    border-color: #374151;
  }
  
  .prop-group li {
    background: #111827;
    color: #9ca3af;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Sparkles className="w-5 h-5" />
                        CSS Performance Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-indigo-900 dark:text-indigo-200">Keep selectors simple:</strong>
                            <span className="text-indigo-700 dark:text-indigo-300"> Use single class selectors instead of deep nesting (max 3 levels).</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-indigo-900 dark:text-indigo-200">Animate with GPU:</strong>
                            <span className="text-indigo-700 dark:text-indigo-300"> Only animate <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">transform</code> and <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">opacity</code> for 60fps performance.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-indigo-900 dark:text-indigo-200">Minimize reflows:</strong>
                            <span className="text-indigo-700 dark:text-indigo-300"> Batch DOM reads and writes, avoid layout thrashing in JavaScript.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-indigo-900 dark:text-indigo-200">Reduce file size:</strong>
                            <span className="text-indigo-700 dark:text-indigo-300"> Minify CSS, remove unused styles, and split into critical/non-critical chunks.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Universal Techniques</strong>
                    All CSS performance optimizations work across modern browsers. Use Chrome DevTools Performance tab to measure and profile your CSS rendering.
                </AlertDescription>
            </Alert>
        </div>
    );
}
