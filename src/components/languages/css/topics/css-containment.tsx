'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, CheckCircle, Zap, Info, Sparkles, Lightbulb, ArrowRight, Package, Layers, Lock, Maximize, Palette, Code, TrendingUp, Gauge } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssContainmentProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssContainment({ onOpenWebPlayground }: CssContainmentProps) {
  const [selectedExample, setSelectedExample] = useState('layout');

  const layoutContainExample = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>CSS Containment - Layout</title><style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,sans-serif;background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);padding:40px 20px;min-height:100vh;}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#1e40af 0%,#1e3a8a 100%);}}
.container{max-width:1000px;margin:0 auto;background:white;padding:40px;border-radius:16px;}@media(prefers-color-scheme:dark){.container{background:#1e293b;color:#e2e8f0;}}
h1{color:#3b82f6;text-align:center;margin-bottom:10px;font-size:2.5rem;}@media(prefers-color-scheme:dark){h1{color:#93c5fd;}}
.subtitle{text-align:center;color:#64748b;margin-bottom:30px;}
.demo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:20px;}
.contained{contain:layout style paint;background:linear-gradient(135deg,#dbeafe 0%,#bfdbfe 100%);padding:24px;border-radius:12px;border:3px solid #3b82f6;}@media(prefers-color-scheme:dark){.contained{background:linear-gradient(135deg,#1e40af 0%,#1e3a8a 100%);border-color:#93c5fd;}}
.not-contained{background:linear-gradient(135deg,#fee2e2 0%,#fecaca 100%);padding:24px;border-radius:12px;border:3px solid #ef4444;}@media(prefers-color-scheme:dark){.not-contained{background:linear-gradient(135deg,#7f1d1d 0%,#991b1b 100%);border-color:#fca5a5;}}
.card-title{font-weight:700;font-size:1.2rem;margin-bottom:12px;color:#1e40af;}@media(prefers-color-scheme:dark){.card-title{color:#93c5fd;}}
.card-content{color:#64748b;line-height:1.6;}@media(prefers-color-scheme:dark){.card-content{color:#cbd5e0;}}
.badge{display:inline-block;padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:600;margin-top:12px;}
.badge-contained{background:#3b82f6;color:white;}
.badge-not{background:#ef4444;color:white;}
.info-box{background:linear-gradient(135deg,#fef3c7 0%,#fde68a 100%);border-left:4px solid #f59e0b;padding:20px;border-radius:8px;}@media(prefers-color-scheme:dark){.info-box{background:linear-gradient(135deg,#78350f 0%,#92400e 100%);border-left-color:#fbbf24;}}
.info-title{color:#92400e;font-weight:700;margin-bottom:8px;font-size:1.1rem;}@media(prefers-color-scheme:dark){.info-title{color:#fde68a;}}
.info-text{color:#78350f;line-height:1.6;}@media(prefers-color-scheme:dark){.info-text{color:#fef3c7;}}
</style></head><body><div class="container"><h1>📦 CSS Containment</h1><p class="subtitle">Optimize rendering performance</p><div class="demo-grid"><div class="contained"><div class="card-title">✅ With Containment</div><div class="card-content">This element uses <strong>contain: layout style paint</strong> to isolate its layout from the rest of the page.</div><span class="badge badge-contained">Optimized</span></div><div class="not-contained"><div class="card-title">❌ Without Containment</div><div class="card-content">This element doesn't use containment, so layout changes can affect the entire document.</div><span class="badge badge-not">Not Optimized</span></div></div><div class="info-box"><div class="info-title">⚡ Performance Benefits</div><p class="info-text">Containment tells the browser that an element's internal layout is independent from the rest of the page. This allows the browser to optimize rendering by skipping layout calculations for contained elements when other parts of the page change.</p></div></div></body></html>`;

  const strictContainExample = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>CSS Containment - Strict</title><style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:sans-serif;background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);padding:40px 20px;min-height:100vh;}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#1e40af 0%,#1e3a8a 100%);}}
.container{max-width:800px;margin:0 auto;background:white;padding:40px;border-radius:16px;}@media(prefers-color-scheme:dark){.container{background:#1e293b;color:#e2e8f0;}}
h1{color:#3b82f6;text-align:center;margin-bottom:30px;}@media(prefers-color-scheme:dark){h1{color:#93c5fd;}}
.widget{contain:strict;width:300px;height:200px;background:linear-gradient(135deg,#dbeafe 0%,#bfdbfe 100%);padding:20px;border-radius:12px;margin:20px auto;border:3px solid #3b82f6;}@media(prefers-color-scheme:dark){.widget{background:linear-gradient(135deg,#1e40af 0%,#1e3a8a 100%);border-color:#93c5fd;}}
.widget-title{font-weight:700;color:#1e40af;margin-bottom:10px;}@media(prefers-color-scheme:dark){.widget-title{color:#93c5fd;}}
.widget-content{color:#64748b;}@media(prefers-color-scheme:dark){.widget-content{color:#cbd5e0;}}
</style></head><body><div class="container"><h1>📦 Strict Containment</h1><div class="widget"><div class="widget-title">Isolated Widget</div><div class="widget-content">This widget uses contain: strict for maximum isolation and performance optimization.</div></div></div></body></html>`;

  return (
    <div className="space-y-8">
      <PageHeader icon={Box} category="CSS · Modern Features" title="CSS Containment" description="Optimize rendering performance with layout isolation" colorTheme="blue" />

      {/* What is CSS Containment */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/60 dark:from-blue-950/30 dark:via-slate-900 dark:to-cyan-950/30 backdrop-blur">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl animate-pulse"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    What is CSS Containment?
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Tell the browser to optimize rendering by isolating elements
                  </CardDescription>
                </div>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              Performance
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          {/* Main Explanation */}
          <Alert className="border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Optimize Browser Rendering</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              The <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded">contain</code> property tells the browser that an element's internal layout is completely independent from the rest of the page. This allows the browser to skip expensive layout calculations and dramatically improve performance!
            </AlertDescription>
          </Alert>

          {/* The Problem vs Solution */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-800 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-bold text-lg text-red-700 dark:text-red-300">Without Containment</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Browser recalculates entire page layout
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Slow rendering with many components
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Changes cascade throughout DOM
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Poor performance in long lists
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300">With Containment</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Isolated layout calculations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Faster rendering & better FPS
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Changes stay within element
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Perfect for components & widgets
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="relative p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-2">🚀 How CSS Containment Boosts Performance</h4>
                <p className="text-indigo-800 dark:text-indigo-200 mb-3">
                  When you apply <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded">contain</code>, you're telling the browser: "This element is self-contained. You don't need to check the rest of the page when this changes!"
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="font-semibold text-indigo-900 dark:text-indigo-100 text-sm mb-1">Before:</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Browser checks 1000+ elements</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">After:</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Browser only checks 1 element!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="relative p-6 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-amber-950/30 rounded-xl border-2 border-amber-200 dark:border-amber-800 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">💡 When Should You Use It?</h4>
                <p className="text-amber-800 dark:text-amber-200">
                  Use containment on <strong>independent components</strong> like cards, widgets, list items, and modals. Perfect for React/Vue components, infinite scroll lists, and any self-contained UI element!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Containment Values */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-cyan-50/30 to-blue-50/30 dark:from-blue-950/10 dark:via-cyan-950/10 dark:to-blue-950/10"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Containment Values Explained</CardTitle>
              <CardDescription>Six different containment types - choose what fits</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { value: 'layout', color: 'blue', desc: 'Isolates layout. Changes inside don\'t affect outside.', emoji: '📐' },
              { value: 'paint', color: 'purple', desc: 'Content can\'t display outside bounds.', emoji: '🎨' },
              { value: 'size', color: 'emerald', desc: 'Element sized without checking children.', emoji: '📏' },
              { value: 'style', color: 'orange', desc: 'Scopes counters and quotes to this element.', emoji: '💅' },
              { value: 'content', color: 'indigo', desc: 'Shorthand: layout + paint + style. Recommended!', emoji: '📦' },
              { value: 'strict', color: 'red', desc: 'ALL types! Maximum isolation & performance.', emoji: '🔒' }
            ].map((item, i) => (
              <div key={i} className="relative p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <Badge className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white border-0`}>
                    {item.value}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {item.desc}
                </p>
                <div className="p-2.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <code className="text-xs font-mono text-gray-700 dark:text-gray-300">
                    contain: {item.value};
                  </code>
                </div>
              </div>
            ))}
          </div>

          <Alert className="border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50">
            <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">💡 Recommendation</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Start with <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded font-semibold">contain: content;</code> for most cases - great performance without strict sizing requirements!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Live Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Live Interactive Examples</CardTitle>
              <CardDescription>See the performance difference in action</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setSelectedExample('layout')} 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'layout' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Layout Containment
            </button>
            <button 
              onClick={() => setSelectedExample('strict')} 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'strict' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Strict Containment
            </button>
          </div>

          {selectedExample === 'layout' && (
            <FrontendCodePreview 
              html={layoutContainExample} 
              title="Layout Containment Comparison" 
              colorTheme="blue" 
              onOpenPlayground={onOpenWebPlayground} 
            />
          )}
          
          {selectedExample === 'strict' && (
            <FrontendCodePreview 
              html={strictContainExample} 
              title="Strict Containment Example" 
              colorTheme="blue" 
              onOpenPlayground={onOpenWebPlayground} 
            />
          )}
        </CardContent>
      </Card>

      {/* Use Cases & Browser Support */}
      <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-cyan-50/60 to-blue-50/60 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-blue-950/20"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Use Cases & Browser Support</CardTitle>
              <CardDescription>Real-world applications and compatibility</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <div>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">🎯 Perfect Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { emoji: '🎴', title: 'Component Cards', desc: 'Independent rendering for React/Vue components' },
                { emoji: '📋', title: 'Long Lists', desc: 'Isolate each item for smooth scrolling' },
                { emoji: '∞', title: 'Infinite Scroll', desc: 'Optimize off-screen content' },
                { emoji: '🔌', title: 'Third-Party Embeds', desc: 'Isolate ads, widgets, iframes' }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Browser Support - Excellent!
            </h3>
            <Alert className="mb-4 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
              <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Production Ready!</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                CSS Containment is widely supported and safe to use in production today!
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-4 gap-3">
              {[
                { emoji: '🌐', name: 'Chrome', version: '52+', date: 'Jul 2016' },
                { emoji: '🦊', name: 'Firefox', version: '69+', date: 'Sep 2019' },
                { emoji: '🧭', name: 'Safari', version: '15.4+', date: 'Mar 2022' },
                { emoji: '🔷', name: 'Edge', version: '79+', date: 'Jan 2020' }
              ].map((browser, i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700 text-center">
                  <div className="text-3xl mb-2">{browser.emoji}</div>
                  <div className="font-bold text-sm">{browser.name}</div>
                  <Badge className="bg-emerald-500 text-white text-xs mt-1 mb-1">{browser.version}</Badge>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400">{browser.date}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
