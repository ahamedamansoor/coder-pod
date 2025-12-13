'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Hand, CheckCircle, Info, Sparkles, Lightbulb, ArrowRight, Move, Lock, Unlock, Code, Layers, MousePointer } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssOverscrollProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssOverscroll({ onOpenWebPlayground }: CssOverscrollProps) {
  const [selectedExample, setSelectedExample] = useState('contain');

  const containExample = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Overscroll Behavior - Contain</title><style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,sans-serif;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);padding:40px 20px;min-height:100vh;}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);}}
.container{max-width:800px;margin:0 auto;background:white;padding:40px;border-radius:16px;}@media(prefers-color-scheme:dark){.container{background:#1e293b;color:#e2e8f0;}}
h1{color:#f97316;text-align:center;margin-bottom:10px;font-size:2.5rem;}@media(prefers-color-scheme:dark){h1{color:#fdba74;}}
.subtitle{text-align:center;color:#64748b;margin-bottom:30px;}
.scroll-box{height:300px;overflow-y:auto;overscroll-behavior:contain;background:linear-gradient(135deg,#fed7aa 0%,#fdba74 100%);padding:20px;border-radius:12px;border:3px solid #f97316;}@media(prefers-color-scheme:dark){.scroll-box{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);border-color:#fdba74;}}
.content{height:800px;padding:20px;background:white;border-radius:8px;}@media(prefers-color-scheme:dark){.content{background:#0f172a;color:#e2e8f0;}}
.info-box{background:linear-gradient(135deg,#fef3c7 0%,#fde68a 100%);border-left:4px solid #f59e0b;padding:20px;border-radius:8px;margin-top:20px;}@media(prefers-color-scheme:dark){.info-box{background:linear-gradient(135deg,#78350f 0%,#92400e 100%);border-left-color:#fbbf24;}}
.info-text{color:#78350f;line-height:1.6;}@media(prefers-color-scheme:dark){.info-text{color:#fef3c7;}}
</style></head><body><div class="container"><h1>🖐️ Overscroll Behavior</h1><p class="subtitle">Prevent scroll chaining</p><div class="scroll-box"><div class="content"><h3 style="color:#f97316;margin-bottom:15px;">Scrollable Content</h3><p style="margin-bottom:15px;">Scroll within this box - the parent page won't scroll!</p><p>This demonstrates <strong>overscroll-behavior: contain</strong> which prevents scroll chaining. When you reach the bottom of this container, scrolling stops instead of continuing to the parent element.</p></div></div><div class="info-box"><p class="info-text"><strong>👆 Try scrolling!</strong> Notice how when you reach the end of the scrollable area, the background doesn't scroll. This is overscroll-behavior: contain in action!</p></div></div></body></html>`;

  const autoExample = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Overscroll Behavior - Auto</title><style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:sans-serif;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);padding:40px 20px;min-height:150vh;}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);}}
.container{max-width:800px;margin:0 auto;background:white;padding:40px;border-radius:16px;margin-bottom:50px;}@media(prefers-color-scheme:dark){.container{background:#1e293b;color:#e2e8f0;}}
h1{color:#f97316;text-align:center;margin-bottom:30px;}@media(prefers-color-scheme:dark){h1{color:#fdba74;}}
.scroll-box{height:200px;overflow-y:auto;overscroll-behavior:auto;background:linear-gradient(135deg,#fed7aa 0%,#fdba74 100%);padding:20px;border-radius:12px;border:3px solid #f97316;}@media(prefers-color-scheme:dark){.scroll-box{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);border-color:#fdba74;}}
.content{height:400px;background:white;padding:20px;border-radius:8px;}@media(prefers-color-scheme:dark){.content{background:#0f172a;color:#e2e8f0;}}
</style></head><body><div class="container"><h1>🖐️ Auto Behavior (Default)</h1><div class="scroll-box"><div class="content"><p>With <strong>overscroll-behavior: auto</strong>, scroll continues to parent element</p></div></div></div></body></html>`;

  return (
    <div className="space-y-8">
      <PageHeader icon={Hand} category="CSS · Modern Features" title="CSS Overscroll Behavior" description="Control scroll boundaries and prevent scroll chaining" colorTheme="orange" />

      {/* What is Overscroll Behavior */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50/60 via-white to-red-50/60 dark:from-orange-950/30 dark:via-slate-900 dark:to-red-950/30 backdrop-blur">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl animate-pulse"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Hand className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                    What is Overscroll Behavior?
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Control what happens when users scroll past boundaries
                  </CardDescription>
                </div>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
              CSS Modern
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          {/* Main Explanation */}
          <Alert className="border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50">
            <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Control Scroll Boundaries</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              The <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded">overscroll-behavior</code> property controls what happens when a user reaches the edge of a scrolling area. It prevents unwanted scroll chaining (where parent elements start scrolling) and browser bounce effects.
            </AlertDescription>
          </Alert>

          {/* The Problem */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative p-6 rounded-xl bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-800 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <MousePointer className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-bold text-lg text-red-700 dark:text-red-300">The Problem (Default)</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Scroll chains to parent element
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Unwanted page scrolling in modals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Rubber-band bounce effect on mobile
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Poor user experience in nested scrolls
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
                    <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300">The Solution</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Contain scrolling within element
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Prevent parent page from scrolling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Disable bounce effects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✅</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Better control in modals & drawers
                    </span>
                  </li>
                </ul>
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
                <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">💡 Perfect for Modals & Drawers</h4>
                <p className="text-amber-800 dark:text-amber-200">
                  Use <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded">overscroll-behavior: contain;</code> on modal dialogs, side drawers, and chat interfaces to prevent the background page from scrolling when users reach the end of the scrollable content!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Property Values */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-red-50/30 to-orange-50/30 dark:from-orange-950/10 dark:via-red-950/10 dark:to-orange-950/10"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Property Values</CardTitle>
              <CardDescription>Three ways to control overscroll behavior</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* contain */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 mb-3">
                  contain
                </Badge>
                <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300 mb-2">Contain Scrolling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Prevents scroll chaining to parent elements. The scrolling stays within the element.
                </p>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                  <code className="text-xs font-mono text-emerald-700 dark:text-emerald-300">
                    overscroll-behavior: contain;
                  </code>
                </div>
                <div className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
                  ✨ Best for: Modals, drawers, chat boxes
                </div>
              </div>
            </div>

            {/* auto */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-blue-200 dark:border-blue-700 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Unlock className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 mb-3">
                  auto
                </Badge>
                <h4 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-2">Default Behavior</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Normal browser behavior. Scroll continues to parent element and bounce effects work.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <code className="text-xs font-mono text-blue-700 dark:text-blue-300">
                    overscroll-behavior: auto;
                  </code>
                </div>
                <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
                  ⚙️ Default - Usually not needed
                </div>
              </div>
            </div>

            {/* none */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-purple-200 dark:border-purple-700 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Move className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-3">
                  none
                </Badge>
                <h4 className="font-bold text-lg text-purple-700 dark:text-purple-300 mb-2">Disable All Effects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Prevents both scroll chaining AND bounce effects. Most restrictive option.
                </p>
                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                  <code className="text-xs font-mono text-purple-700 dark:text-purple-300">
                    overscroll-behavior: none;
                  </code>
                </div>
                <div className="mt-3 text-xs text-purple-600 dark:text-purple-400">
                  🚫 Disables browser scroll effects
                </div>
              </div>
            </div>
          </div>

          {/* Axis Control */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Control Specific Axes
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <code className="font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 block mb-2">
                  overscroll-behavior-x
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Control horizontal overscroll only
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <code className="font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 block mb-2">
                  overscroll-behavior-y
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Control vertical overscroll only
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Hand className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Live Interactive Examples</CardTitle>
              <CardDescription>See overscroll behavior in action</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setSelectedExample('contain')} 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'contain' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Contain
            </button>
            <button 
              onClick={() => setSelectedExample('auto')} 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'auto' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Auto (Default)
            </button>
          </div>

          {selectedExample === 'contain' && (
            <FrontendCodePreview 
              html={containExample} 
              title="Overscroll Behavior: Contain" 
              colorTheme="orange" 
              onOpenPlayground={onOpenWebPlayground} 
            />
          )}
          
          {selectedExample === 'auto' && (
            <FrontendCodePreview 
              html={autoExample} 
              title="Overscroll Behavior: Auto" 
              colorTheme="orange" 
              onOpenPlayground={onOpenWebPlayground} 
            />
          )}
        </CardContent>
      </Card>

      {/* Use Cases & Browser Support */}
      <Card className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-red-50/60 to-orange-50/60 dark:from-orange-950/20 dark:via-red-950/20 dark:to-orange-950/20"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Use Cases & Browser Support</CardTitle>
              <CardDescription>Where to use it and compatibility information</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          {/* Use Cases */}
          <div>
            <h3 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-4">Perfect Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-700 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🪟</span>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">Modal Dialogs</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Prevent body scroll when modal is open
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-700 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📱</span>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">Mobile Navigation</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contain scroll within side drawers
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-700 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💬</span>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">Chat Interfaces</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keep chat scroll independent from page
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-700 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🖼️</span>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">Image Carousels</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Prevent parent scroll during swipe
                </p>
              </div>
            </div>
          </div>

          {/* Browser Support */}
          <div>
            <h3 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Browser Support - Excellent!
            </h3>
            <Alert className="mb-4 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
              <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Production Ready!</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                Supported in all modern browsers since 2017-2022. Safe to use in production!
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-4 gap-3">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700 text-center">
                <div className="text-3xl mb-2">🌐</div>
                <div className="font-bold text-sm">Chrome 63+</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">Dec 2017</div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700 text-center">
                <div className="text-3xl mb-2">🦊</div>
                <div className="font-bold text-sm">Firefox 59+</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">Mar 2018</div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700 text-center">
                <div className="text-3xl mb-2">🧭</div>
                <div className="font-bold text-sm">Safari 16+</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">Sep 2022</div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700 text-center">
                <div className="text-3xl mb-2">🔷</div>
                <div className="font-bold text-sm">Edge 79+</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">Jan 2020</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
