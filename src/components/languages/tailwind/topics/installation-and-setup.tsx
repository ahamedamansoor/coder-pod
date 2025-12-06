'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Download, Package, Terminal, CheckCircle, AlertTriangle, Zap, Sparkles, Code2, Play, Rocket, Settings, HelpCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { AIAnswerDisplay } from '@/components/shared/ai-answer-display';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';
import { conductInterview } from '@/ai/flows/interview-flow';
import AIProviderModal from '@/components/dashboard/GeminiKeyModal';
import { AIProvider } from '@/types/ai-providers';

export default function InstallationAndSetup() {
  
  const [installMethod, setInstallMethod] = useState('cdn');
  const [question, setQuestion] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [qaResult, setQaResult] = useState<{ answer: string } | null>(null);
  const [isAiEnabled, setIsAiEnabled] = useState(false);
  const [showAiKeyModal, setShowAiKeyModal] = useState(false);
  const { user } = useUser();
  const isUserAuthenticated = !!user;

  React.useEffect(() => {
    const apiKey = localStorage.getItem('ai_api_key');
    const provider = localStorage.getItem('ai_provider');
    setIsAiEnabled(!!(apiKey && provider));
  }, []);

  const handleAskQuestionAction = async () => {
    if (!question.trim()) return;
    setIsAsking(true);
    setQaResult(null);
    
    try {
      const provider = (localStorage.getItem('ai_provider') as AIProvider) || 'gemini';
      const apiKey = localStorage.getItem('ai_api_key') || '';
      
      const result = await conductInterview({
        languageName: 'Tailwind CSS',
        topicTitle: 'Installation & Setup',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  // CDN Quick Start Example
  const cdnExampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CDN Quick Start</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <!-- Hero Card -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 mb-6">
      <h1 class="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
        🎉 Tailwind is Working!
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-6">
        If you can see this styled card, Tailwind CSS is successfully loaded via CDN
      </p>
      
      <!-- Feature Grid -->
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-rose-200 dark:border-rose-800">
          <div class="text-3xl mb-2">⚡</div>
          <h3 class="font-bold text-rose-700 dark:text-rose-300 mb-1">Fast Setup</h3>
          <p class="text-sm text-rose-600 dark:text-rose-400">Just one script tag</p>
        </div>
        
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <div class="text-3xl mb-2">🎨</div>
          <h3 class="font-bold text-emerald-700 dark:text-emerald-300 mb-1">All Utilities</h3>
          <p class="text-sm text-emerald-600 dark:text-emerald-400">Full Tailwind power</p>
        </div>
        
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
          <div class="text-3xl mb-2">🚀</div>
          <h3 class="font-bold text-amber-700 dark:text-amber-300 mb-1">No Build</h3>
          <p class="text-sm text-amber-600 dark:text-amber-400">Start coding now</p>
        </div>
      </div>
      
      <!-- Interactive Button -->
      <div class="mt-6 text-center">
        <button class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
          Click Me - I'm Styled! ✨
        </button>
      </div>
    </div>
    
    <!-- Code Display -->
    <div class="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="ml-2 text-sm font-mono text-slate-600 dark:text-slate-400">index.html</span>
      </div>
      <pre class="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto"><code>&lt;!-- Just add this CDN link --&gt;
&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;

&lt;!-- Then use Tailwind classes --&gt;
&lt;button class="bg-blue-500 text-white px-4 py-2 rounded"&gt;
  Button
&lt;/button&gt;</code></pre>
    </div>
  </div>
</body>
</html>`;

  // CLI Installation Example
  const cliExampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CLI Project</title>
  <link href="./output.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-black text-center mb-2 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
        Production-Ready Setup
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Full Tailwind CLI with custom configuration and optimized builds
      </p>
      
      <!-- Installation Steps -->
      <div class="space-y-4 mb-8">
        <div class="flex items-start gap-4 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-200 dark:border-violet-800">
          <div class="flex-shrink-0 w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-violet-900 dark:text-violet-100 mb-1">Install Tailwind</h3>
            <code class="text-sm bg-violet-100 dark:bg-violet-950 px-3 py-1 rounded text-violet-700 dark:text-violet-300">npm install -D tailwindcss</code>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-purple-900 dark:text-purple-100 mb-1">Initialize Config</h3>
            <code class="text-sm bg-purple-100 dark:bg-purple-950 px-3 py-1 rounded text-purple-700 dark:text-purple-300">npx tailwindcss init</code>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
          <div class="flex-shrink-0 w-8 h-8 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-1">Build CSS</h3>
            <code class="text-sm bg-fuchsia-100 dark:bg-fuchsia-950 px-3 py-1 rounded text-fuchsia-700 dark:text-fuchsia-300">npx tailwindcss -i input.css -o output.css --watch</code>
          </div>
        </div>
      </div>
      
      <!-- Benefits -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <h4 class="font-bold text-green-900 dark:text-green-100">Smaller File Size</h4>
          </div>
          <p class="text-sm text-green-700 dark:text-green-300">Only includes classes you actually use</p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <h4 class="font-bold text-blue-900 dark:text-blue-100">Custom Configuration</h4>
          </div>
          <p class="text-sm text-blue-700 dark:text-blue-300">Extend colors, fonts, and utilities</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Download}
        category="Tailwind CSS · Getting Started"
        title="Installation & Setup"
        description="Get started with Tailwind CSS in minutes - choose the method that works best for your project"
        colorTheme="cyan"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Package className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Getting Started with Tailwind
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🚀 Multiple ways to add Tailwind CSS to your project - from quick prototyping to production builds
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Method Selector */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  🎯 Choose Your Installation Method
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setInstallMethod('cdn')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      installMethod === 'cdn'
                        ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30 ring-2 ring-cyan-200 dark:ring-cyan-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700'
                    }`}
                  >
                    <div className="text-3xl mb-2">⚡</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">CDN</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Quick & Easy</p>
                  </button>
                  
                  <button
                    onClick={() => setInstallMethod('cli')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      installMethod === 'cli'
                        ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/30 ring-2 ring-violet-200 dark:ring-violet-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-700'
                    }`}
                  >
                    <div className="text-3xl mb-2">🔧</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Tailwind CLI</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Production Ready</p>
                  </button>
                </div>

                {installMethod === 'cdn' && (
                  <div className="mt-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-cyan-200/50">
                    <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      💡 Perfect for Learning!
                    </div>
                    <div className="text-xs text-cyan-600 dark:text-cyan-400">
                      The CDN method is ideal for trying Tailwind, building prototypes, or learning. Just add one script tag and start coding!
                    </div>
                  </div>
                )}

                {installMethod === 'cli' && (
                  <div className="mt-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-violet-200/50">
                    <div className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      🚀 Best for Production!
                    </div>
                    <div className="text-xs text-violet-600 dark:text-violet-400">
                      Use the Tailwind CLI for real projects. Get smaller bundle sizes, custom configuration, and optimal performance.
                    </div>
                  </div>
                )}
              </div>

              {/* Comparison Grid */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  📊 Method Comparison
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-green-900 dark:text-green-100 text-sm">Setup Time</div>
                      <div className="text-xs text-green-700 dark:text-green-300">CDN: 30 seconds | CLI: 5 minutes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Bundle Size</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">CDN: ~3MB | CLI: ~10KB (optimized)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200/50">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-amber-900 dark:text-amber-100 text-sm">Customization</div>
                      <div className="text-xs text-amber-700 dark:text-amber-300">CDN: Limited | CLI: Fully customizable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">🎯</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">Why Tailwind?</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      No CSS files needed
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Build faster
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent design
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Easy maintenance
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Start with CDN for learning, then migrate to CLI when building real projects!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CDN METHOD */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Play className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            1. Play CDN Method (Fastest)
          </CardTitle>
          <CardDescription>
            Perfect for prototyping and learning - add one script tag and start using Tailwind
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cdnExampleHtml}
            title="CDN Quick Start"
            description="Working Tailwind example using CDN - click Run to see it in action!"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">💡 Key Points:</h4>
            <ul className="space-y-2 text-sm text-cyan-800 dark:text-cyan-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Instant setup</strong> - Just add the CDN script tag to your HTML</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>All utilities available</strong> - Full Tailwind CSS library at your fingertips</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>No build process</strong> - Start coding immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0 text-orange-600" />
                <span><strong>Not for production</strong> - Large file size (~3MB), use CLI for real projects</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CLI METHOD */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Terminal className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            2. Tailwind CLI (Production)
          </CardTitle>
          <CardDescription>
            Recommended for real projects - smaller bundle size and full customization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cliExampleHtml}
            title="Tailwind CLI Setup"
            description="Production-ready Tailwind with optimized builds and custom configuration"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800">
            <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-3">🚀 Installation Steps:</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <div className="font-semibold text-violet-900 dark:text-violet-100 mb-1">Install via npm</div>
                  <code className="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded text-xs text-violet-700 dark:text-violet-300">npm install -D tailwindcss</code>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <div className="font-semibold text-violet-900 dark:text-violet-100 mb-1">Create config file</div>
                  <code className="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded text-xs text-violet-700 dark:text-violet-300">npx tailwindcss init</code>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <div>
                  <div className="font-semibold text-violet-900 dark:text-violet-100 mb-1">Build your CSS</div>
                  <code className="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded text-xs text-violet-700 dark:text-violet-300">npx tailwindcss -i input.css -o output.css --watch</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FRAMEWORK INTEGRATION */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Framework Integration
          </CardTitle>
          <CardDescription>
            Quick setup guides for popular frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">⚛️</span>
                React / Next.js
              </h4>
              <code className="text-xs bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded block mb-2 text-slate-700 dark:text-slate-300">npx create-next-app@latest --tailwind</code>
              <p className="text-xs text-slate-600 dark:text-slate-400">Tailwind is built-in with Next.js</p>
            </div>
            
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">💚</span>
                Vue / Nuxt
              </h4>
              <code className="text-xs bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded block mb-2 text-slate-700 dark:text-slate-300">npm install -D tailwindcss postcss autoprefixer</code>
              <p className="text-xs text-slate-600 dark:text-slate-400">Add to PostCSS config</p>
            </div>
            
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">🅰️</span>
                Angular
              </h4>
              <code className="text-xs bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded block mb-2 text-slate-700 dark:text-slate-300">npm install -D tailwindcss postcss autoprefixer</code>
              <p className="text-xs text-slate-600 dark:text-slate-400">Configure in angular.json</p>
            </div>
            
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">🔶</span>
                Svelte / SvelteKit
              </h4>
              <code className="text-xs bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded block mb-2 text-slate-700 dark:text-slate-300">npx svelte-add@latest tailwindcss</code>
              <p className="text-xs text-slate-600 dark:text-slate-400">Auto-configures everything</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Setup Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Development</strong> - Use CDN for quick prototypes and learning</li>
            <li><strong>Production</strong> - Always use Tailwind CLI or framework integration for real projects</li>
            <li><strong>Performance</strong> - CLI removes unused CSS, resulting in tiny bundle sizes (~10KB)</li>
            <li><strong>Customization</strong> - Create tailwind.config.js to extend colors, fonts, and utilities</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* BROWSER SUPPORT */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Tailwind CSS v3 works in all modern browsers and supports IE11 with some polyfills. Features like CSS Grid and Flexbox are fully supported.
        </AlertDescription>
      </Alert>

      {/* AI ASSISTANT SECTION */}
      <div className="relative mt-8">
        <Card className={cn(
          "transition-all duration-200 animate-in fade-in-50 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800",
          !isUserAuthenticated && "blur-sm pointer-events-none",
          isUserAuthenticated && "hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-950"
        )}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <HelpCircle className="w-6 h-6 text-primary" />
              Ask a Question
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Have a question about Installation & Setup? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "Which installation method should I use?"`} 
              value={question} 
              onChange={(e) => setQuestion(e.target.value)} 
              disabled={isAsking || !isUserAuthenticated}
              className="transition-colors focus:ring-2 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            <Button 
              onClick={handleAskQuestionAction}
              disabled={isAsking || !question.trim() || !isUserAuthenticated}
              className="transition-all duration-200"
            >
              {isAsking ? 'Thinking...' : 'Get Answer'}
            </Button>
          </CardContent>
        </Card>
        
        {!isUserAuthenticated ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="text-center space-y-3 px-6">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                🔐 Login to use AI Assistant
              </p>
              <Button 
                onClick={() => window.location.href = '/login'}
                size="sm"
                className="shadow-sm"
              >
                Login
              </Button>
            </div>
          </div>
        ) : !isAiEnabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="text-center space-y-3 px-6">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                ⚙️ AI Provider Not Configured
              </p>
              <Button 
                onClick={() => setShowAiKeyModal(true)}
                size="sm"
                className="shadow-sm"
              >
                Setup AI Key
              </Button>
            </div>
          </div>
        )}
      </div>

      {isAsking && (
        <Card className="transition-all duration-200 animate-in fade-in-50 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardContent className="p-6 space-y-2">
            <Skeleton className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800" />
            <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
            <Skeleton className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800" />
          </CardContent>
        </Card>
      )}

      {qaResult && (
        <AIAnswerDisplay 
          answer={qaResult.answer} 
          language="tailwind"
        />
      )}
      
      <AIProviderModal
        isOpen={showAiKeyModal}
        onClose={() => setShowAiKeyModal(false)}
        onSave={async (provider: AIProvider, apiKey: string) => {
          localStorage.setItem('ai_api_key', apiKey);
          localStorage.setItem('ai_provider', provider);
          setIsAiEnabled(true);
          setShowAiKeyModal(false);
        }}
      />
    </div>
  );
}
