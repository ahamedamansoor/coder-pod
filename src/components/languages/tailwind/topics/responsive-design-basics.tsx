'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Smartphone, Tablet, Monitor, CheckCircle, Sparkles, Zap, Layout, Maximize2, ArrowRight, HelpCircle } from 'lucide-react';
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

export default function ResponsiveDesignBasics() {
  
  const [activeBreakpoint, setActiveBreakpoint] = useState('mobile');
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
        topicTitle: 'Responsive Design Basics',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  // Responsive Breakpoints Demo
  const breakpointsDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Breakpoints</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📱 Responsive Breakpoints
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Resize your browser to see the layout adapt to different screen sizes
      </p>
      
      <!-- Breakpoint Indicator -->
      <div class="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center">
        <p class="text-sm font-semibold mb-2">Current Breakpoint:</p>
        <div class="text-3xl font-black">
          <span class="sm:hidden">📱 Mobile (default)</span>
          <span class="hidden sm:block md:hidden">📱 SM: ≥640px</span>
          <span class="hidden md:block lg:hidden">💻 MD: ≥768px</span>
          <span class="hidden lg:block xl:hidden">🖥️ LG: ≥1024px</span>
          <span class="hidden xl:block 2xl:hidden">🖥️ XL: ≥1280px</span>
          <span class="hidden 2xl:block">🖥️ 2XL: ≥1536px</span>
        </div>
      </div>
      
      <!-- Grid Layout Changes -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Grid Layout Adaptation
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div class="bg-gradient-to-br from-rose-400 to-pink-500 p-6 rounded-xl text-white text-center">
            <div class="text-3xl mb-2">1️⃣</div>
            <p class="font-semibold">Card 1</p>
          </div>
          <div class="bg-gradient-to-br from-purple-400 to-indigo-500 p-6 rounded-xl text-white text-center">
            <div class="text-3xl mb-2">2️⃣</div>
            <p class="font-semibold">Card 2</p>
          </div>
          <div class="bg-gradient-to-br from-blue-400 to-cyan-500 p-6 rounded-xl text-white text-center">
            <div class="text-3xl mb-2">3️⃣</div>
            <p class="font-semibold">Card 3</p>
          </div>
          <div class="bg-gradient-to-br from-emerald-400 to-teal-500 p-6 rounded-xl text-white text-center">
            <div class="text-3xl mb-2">4️⃣</div>
            <p class="font-semibold">Card 4</p>
          </div>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
          Mobile: 1 column • SM: 2 columns • LG: 3 columns • XL: 4 columns
        </p>
      </div>
      
      <!-- Responsive Text -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Responsive Typography
        </h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Adaptive Heading
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300">
            This text grows larger on bigger screens using responsive utilities
          </p>
        </div>
      </div>
      
      <!-- Hide/Show Elements -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Show/Hide Elements
        </h3>
        <div class="space-y-3">
          <div class="block sm:hidden bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border-2 border-blue-500">
            <p class="text-blue-900 dark:text-blue-100 font-semibold">
              📱 Visible only on Mobile (< 640px)
            </p>
          </div>
          <div class="hidden sm:block md:hidden bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border-2 border-purple-500">
            <p class="text-purple-900 dark:text-purple-100 font-semibold">
              💻 Visible only on SM (640px - 768px)
            </p>
          </div>
          <div class="hidden md:block lg:hidden bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-lg border-2 border-emerald-500">
            <p class="text-emerald-900 dark:text-emerald-100 font-semibold">
              🖥️ Visible only on MD (768px - 1024px)
            </p>
          </div>
          <div class="hidden lg:block bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg border-2 border-amber-500">
            <p class="text-amber-900 dark:text-amber-100 font-semibold">
              🖥️ Visible on LG and above (≥ 1024px)
            </p>
          </div>
        </div>
      </div>
      
      <!-- Breakpoint Reference -->
      <div class="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Tailwind Breakpoints</h4>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
            <code class="font-mono text-blue-600 dark:text-blue-400">sm:</code>
            <span class="text-slate-600 dark:text-slate-400"> ≥640px</span>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
            <code class="font-mono text-purple-600 dark:text-purple-400">md:</code>
            <span class="text-slate-600 dark:text-slate-400"> ≥768px</span>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
            <code class="font-mono text-emerald-600 dark:text-emerald-400">lg:</code>
            <span class="text-slate-600 dark:text-slate-400"> ≥1024px</span>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
            <code class="font-mono text-amber-600 dark:text-amber-400">xl:</code>
            <span class="text-slate-600 dark:text-slate-400"> ≥1280px</span>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
            <code class="font-mono text-red-600 dark:text-red-400">2xl:</code>
            <span class="text-slate-600 dark:text-slate-400"> ≥1536px</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Mobile-First Approach
  const mobileFirstExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile-First Approach</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📱 Mobile-First Approach
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Start with mobile styles, then enhance for larger screens
      </p>
      
      <!-- Visual Explanation -->
      <div class="mb-8 p-6 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl border border-violet-200 dark:border-violet-800">
        <h3 class="font-bold text-violet-900 dark:text-violet-100 mb-4 text-lg">
          🎯 How It Works
        </h3>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              1
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-violet-900 dark:text-violet-100">Start Mobile</p>
              <p class="text-xs text-violet-700 dark:text-violet-300">Default styles work on all screens</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              2
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-purple-900 dark:text-purple-100">Add Breakpoints</p>
              <p class="text-xs text-purple-700 dark:text-purple-300">Use sm:, md:, lg: prefixes to adapt</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              3
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-fuchsia-900 dark:text-fuchsia-100">Progressive Enhancement</p>
              <p class="text-xs text-fuchsia-700 dark:text-fuchsia-300">Enhance for larger screens</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Example: Button -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Example: Responsive Button
        </h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <button class="w-full sm:w-auto bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all shadow-lg">
            Responsive Button
          </button>
          <div class="mt-4 text-xs text-slate-600 dark:text-slate-400">
            <p class="mb-1"><strong>Mobile:</strong> Full width, small padding</p>
            <p><strong>Desktop (sm+):</strong> Auto width, larger padding</p>
          </div>
        </div>
      </div>
      
      <!-- Code Example -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Code Pattern
        </h3>
        <div class="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-2 text-sm font-mono text-slate-600 dark:text-slate-400">mobile-first.html</span>
          </div>
          <pre class="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto"><code>&lt;!-- Mobile-First Pattern --&gt;
&lt;div class="<span class="text-blue-600 dark:text-blue-400">p-4</span> <span class="text-purple-600 dark:text-purple-400">sm:p-6</span> <span class="text-emerald-600 dark:text-emerald-400">lg:p-8</span>"&gt;
  &lt;!-- Padding increases with screen size --&gt;
&lt;/div&gt;

&lt;div class="<span class="text-blue-600 dark:text-blue-400">text-base</span> <span class="text-purple-600 dark:text-purple-400">md:text-lg</span> <span class="text-emerald-600 dark:text-emerald-400">lg:text-xl</span>"&gt;
  &lt;!-- Text size grows on larger screens --&gt;
&lt;/div&gt;

&lt;div class="<span class="text-blue-600 dark:text-blue-400">grid-cols-1</span> <span class="text-purple-600 dark:text-purple-400">sm:grid-cols-2</span> <span class="text-emerald-600 dark:text-emerald-400">lg:grid-cols-3</span>"&gt;
  &lt;!-- 1 column → 2 columns → 3 columns --&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
      
      <!-- Comparison -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">❌</span>
            <h4 class="font-bold text-red-900 dark:text-red-100">Desktop-First</h4>
          </div>
          <p class="text-sm text-red-700 dark:text-red-300 mb-2">
            Starts with desktop, scales down
          </p>
          <code class="text-xs bg-red-100 dark:bg-red-950 px-2 py-1 rounded block text-red-700 dark:text-red-300">
            max-w-[800px] md:max-w-[600px]
          </code>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">✅</span>
            <h4 class="font-bold text-emerald-900 dark:text-emerald-100">Mobile-First</h4>
          </div>
          <p class="text-sm text-emerald-700 dark:text-emerald-300 mb-2">
            Starts with mobile, enhances up
          </p>
          <code class="text-xs bg-emerald-100 dark:bg-emerald-950 px-2 py-1 rounded block text-emerald-700 dark:text-emerald-300">
            max-w-[400px] md:max-w-[600px]
          </code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Responsive Layout Patterns
  const layoutPatternsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Layout Patterns</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Pattern 1: Stack to Horizontal -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        📱 → 💻 Stack to Horizontal
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        Elements stack on mobile, become horizontal on larger screens
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1 bg-gradient-to-br from-emerald-400 to-teal-400 p-6 rounded-xl text-white text-center">
          <p class="font-semibold">Item 1</p>
        </div>
        <div class="flex-1 bg-gradient-to-br from-cyan-400 to-blue-400 p-6 rounded-xl text-white text-center">
          <p class="font-semibold">Item 2</p>
        </div>
        <div class="flex-1 bg-gradient-to-br from-blue-400 to-indigo-400 p-6 rounded-xl text-white text-center">
          <p class="font-semibold">Item 3</p>
        </div>
      </div>
      <code class="mt-4 block text-xs bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded text-slate-700 dark:text-slate-300">
        flex flex-col sm:flex-row gap-4
      </code>
    </div>
    
    <!-- Pattern 2: Adaptive Grid -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        🎛️ Adaptive Grid
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        Grid columns change based on screen size
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
          <div key={num} class="bg-gradient-to-br from-purple-400 to-pink-400 p-6 rounded-xl text-white text-center">
            <p class="font-semibold text-2xl">{num}</p>
          </div>
        ))}
      </div>
      <code class="mt-4 block text-xs bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded text-slate-700 dark:text-slate-300">
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
      </code>
    </div>
    
    <!-- Pattern 3: Sidebar Layout -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        📑 Responsive Sidebar
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        Sidebar stacks on mobile, sits beside content on desktop
      </p>
      <div class="flex flex-col lg:flex-row gap-4">
        <aside class="lg:w-64 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
          <h3 class="font-bold text-amber-900 dark:text-amber-100 mb-3">Sidebar</h3>
          <p class="text-sm text-amber-700 dark:text-amber-300">
            Full width on mobile, fixed width on desktop
          </p>
        </aside>
        <main class="flex-1 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="font-bold text-blue-900 dark:text-blue-100 mb-3">Main Content</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">
            Takes remaining space and adapts to sidebar position
          </p>
        </main>
      </div>
      <code class="mt-4 block text-xs bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded text-slate-700 dark:text-slate-300">
        flex flex-col lg:flex-row gap-4
      </code>
    </div>
    
    <!-- Pattern 4: Hide/Show Navigation -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        🍔 Responsive Navigation
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        Hamburger menu on mobile, full nav on desktop
      </p>
      <div class="bg-slate-900 dark:bg-slate-950 rounded-xl p-4">
        <div class="flex items-center justify-between">
          <div class="text-white font-bold text-lg">Logo</div>
          
          {/* Mobile Menu Button */}
          <button class="lg:hidden bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold">
            ☰ Menu
          </button>
          
          {/* Desktop Navigation */}
          <nav class="hidden lg:flex items-center gap-4">
            <a href="#" class="text-white hover:text-cyan-400 transition-colors">Home</a>
            <a href="#" class="text-white hover:text-cyan-400 transition-colors">About</a>
            <a href="#" class="text-white hover:text-cyan-400 transition-colors">Services</a>
            <a href="#" class="text-white hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      <div class="mt-4 grid sm:grid-cols-2 gap-3 text-xs">
        <code class="bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded text-slate-700 dark:text-slate-300">
          lg:hidden → Show on mobile only
        </code>
        <code class="bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded text-slate-700 dark:text-slate-300">
          hidden lg:flex → Show on desktop only
        </code>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Smartphone}
        category="Tailwind CSS · Responsive Design"
        title="Responsive Design Basics"
        description="Build mobile-friendly layouts that adapt beautifully to any screen size"
        colorTheme="cyan"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Maximize2 className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Responsive Design with Tailwind
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🚀 Build once, work everywhere - create layouts that adapt to any device size
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Device Selector */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  📱 Device Breakpoints
                </h4>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <button
                    onClick={() => setActiveBreakpoint('mobile')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      activeBreakpoint === 'mobile'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-200 dark:ring-blue-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                  >
                    <Smartphone className="w-6 h-6 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Mobile</p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400">&lt;640px</p>
                  </button>
                  
                  <button
                    onClick={() => setActiveBreakpoint('tablet')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      activeBreakpoint === 'tablet'
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 ring-2 ring-purple-200 dark:ring-purple-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                  >
                    <Tablet className="w-6 h-6 mx-auto mb-1 text-purple-600 dark:text-purple-400" />
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Tablet</p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400">≥768px</p>
                  </button>
                  
                  <button
                    onClick={() => setActiveBreakpoint('desktop')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      activeBreakpoint === 'desktop'
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 ring-2 ring-emerald-200 dark:ring-emerald-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700'
                    }`}
                  >
                    <Monitor className="w-6 h-6 mx-auto mb-1 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Desktop</p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400">≥1024px</p>
                  </button>
                </div>

                {activeBreakpoint === 'mobile' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200/50">
                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      📱 Mobile-First
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      Default styles apply to all screens. Start here and enhance for larger devices!
                    </div>
                  </div>
                )}

                {activeBreakpoint === 'tablet' && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200/50">
                    <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      💻 Tablet Styles
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">
                      Use md: prefix to style for tablets and larger screens (≥768px)
                    </div>
                  </div>
                )}

                {activeBreakpoint === 'desktop' && (
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-emerald-200/50">
                    <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      🖥️ Desktop Styles
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400">
                      Use lg: prefix for desktop layouts with more horizontal space (≥1024px)
                    </div>
                  </div>
                )}
              </div>

              {/* Breakpoint Prefixes */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <Layout className="w-5 h-5" />
                  🎯 Breakpoint Prefixes
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <code className="font-mono font-bold text-blue-700 dark:text-blue-300">sm:</code>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="flex-1">
                      <div className="text-xs text-blue-900 dark:text-blue-100">≥640px (Phones landscape, small tablets)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <code className="font-mono font-bold text-purple-700 dark:text-purple-300">md:</code>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="flex-1">
                      <div className="text-xs text-purple-900 dark:text-purple-100">≥768px (Tablets portrait)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200/50">
                    <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">lg:</code>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="flex-1">
                      <div className="text-xs text-emerald-900 dark:text-emerald-100">≥1024px (Laptops, desktops)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200/50">
                    <code className="font-mono font-bold text-amber-700 dark:text-amber-300">xl:</code>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="flex-1">
                      <div className="text-xs text-amber-900 dark:text-amber-100">≥1280px (Large desktops)</div>
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
                    <div className="text-4xl mb-2 animate-bounce">📐</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">Key Benefits</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Mobile-first approach
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Simple breakpoint syntax
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Works with all utilities
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent breakpoints
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Test your responsive designs by resizing the browser window!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BREAKPOINTS DEMO */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            1. Responsive Breakpoints
          </CardTitle>
          <CardDescription>
            See how layouts adapt across different screen sizes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={breakpointsDemo}
            title="Breakpoint Demo"
            description="Resize your browser to see the layout change dynamically"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">💡 How to Use:</h4>
            <ul className="space-y-2 text-sm text-cyan-800 dark:text-cyan-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Mobile default</strong> - No prefix needed, styles apply to all screens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Add breakpoints</strong> - Use sm:, md:, lg: prefixes to override on larger screens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Works with all utilities</strong> - bg-blue-500 md:bg-green-500 lg:bg-purple-500</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* MOBILE-FIRST */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Smartphone className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            2. Mobile-First Approach
          </CardTitle>
          <CardDescription>
            Start with mobile styles, then enhance for larger screens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={mobileFirstExample}
            title="Mobile-First Design"
            description="Build mobile-friendly layouts that scale up gracefully"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* LAYOUT PATTERNS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Layout className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Common Layout Patterns
          </CardTitle>
          <CardDescription>
            Ready-to-use responsive layout patterns for common designs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={layoutPatternsExample}
            title="Layout Patterns"
            description="Stack to horizontal, adaptive grids, sidebars, and navigation"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Responsive Design Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Mobile-first</strong> - Start with mobile styles, add breakpoints for larger screens</li>
            <li><strong>Test on real devices</strong> - Don't rely only on browser dev tools</li>
            <li><strong>Touch-friendly</strong> - Make tap targets at least 44x44 pixels on mobile</li>
            <li><strong>Readable text</strong> - Use at least 16px font size for body text on mobile</li>
            <li><strong>Optimize images</strong> - Use responsive images and modern formats</li>
          </ul>
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
              Have a question about Responsive Design? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "When should I use md: vs lg: breakpoints?"`} 
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
