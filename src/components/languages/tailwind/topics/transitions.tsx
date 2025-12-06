'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Zap, Clock, CheckCircle, Sparkles, Play, HelpCircle } from 'lucide-react';
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

interface TransitionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Transitions({ onOpenWebPlayground }: TransitionsProps = {}) {
  
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
        topicTitle: 'Transitions',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const transitionBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transition Basics</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        ⚡ Transition Properties
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Smooth animations for property changes
      </p>
      
      <!-- Transition All -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">transition (all properties)</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-emerald-500 hover:bg-emerald-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition">
            Hover Me
          </button>
          <button class="bg-teal-500 hover:bg-teal-600 hover:scale-105 hover:shadow-xl text-white px-6 py-3 rounded-lg transition">
            Multiple Changes
          </button>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">transition (animates all properties)</p>
      </div>
      
      <!-- Transition Colors -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">transition-colors</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            Color Only
          </button>
          <div class="border-2 border-purple-500 hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 py-3 rounded-lg transition-colors cursor-pointer">
            <span class="text-purple-700 dark:text-purple-300 font-semibold">Border & BG</span>
          </div>
        </div>
      </div>
      
      <!-- Transition Transform -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">transition-transform</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-110 text-white px-6 py-3 rounded-lg transition-transform">
            Scale Only
          </button>
          <button class="bg-gradient-to-r from-violet-500 to-purple-500 hover:-translate-y-2 text-white px-6 py-3 rounded-lg transition-transform shadow-lg">
            Lift Up
          </button>
        </div>
      </div>
      
      <!-- Transition Opacity -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">transition-opacity</h3>
        <div class="flex flex-wrap gap-4">
          <div class="bg-cyan-500 hover:opacity-70 text-white px-6 py-3 rounded-lg transition-opacity cursor-pointer">
            Fade on Hover
          </div>
          <div class="bg-indigo-500 hover:opacity-50 text-white px-6 py-3 rounded-lg transition-opacity cursor-pointer">
            More Fade
          </div>
        </div>
      </div>
      
      <!-- Transition Shadow -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">transition-shadow</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer">
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">Shadow Grow</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover me</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow cursor-pointer">
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">Big Shadow</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover me</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-none transition-shadow cursor-pointer">
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">Shadow Remove</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover me</p>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
        <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-4">💡 Transition Properties</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-emerald-700 dark:text-emerald-300">transition</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-emerald-700 dark:text-emerald-300">transition-colors</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-emerald-700 dark:text-emerald-300">transition-transform</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-emerald-700 dark:text-emerald-300">transition-opacity</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-emerald-700 dark:text-emerald-300">transition-shadow</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-emerald-700 dark:text-emerald-300">transition-none</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const durationEasingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Duration & Easing</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        ⏱️ Duration & Easing
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control animation speed and timing
      </p>
      
      <!-- Duration -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Duration</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">duration-75</div>
            <button class="bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-75">
              Fast (75ms)
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">duration-150</div>
            <button class="bg-indigo-500 hover:bg-indigo-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-150">
              Default (150ms)
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">duration-300</div>
            <button class="bg-purple-500 hover:bg-purple-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-300">
              Medium (300ms)
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">duration-500</div>
            <button class="bg-pink-500 hover:bg-pink-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-500">
              Slow (500ms)
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">duration-1000</div>
            <button class="bg-rose-500 hover:bg-rose-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-1000">
              Very Slow (1s)
            </button>
          </div>
        </div>
      </div>
      
      <!-- Timing Functions -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Easing Functions</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">ease-linear</div>
            <button class="bg-cyan-500 hover:bg-cyan-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-300 ease-linear">
              Linear
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">ease-in</div>
            <button class="bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-300 ease-in">
              Ease In (slow start)
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">ease-out</div>
            <button class="bg-indigo-500 hover:bg-indigo-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-300 ease-out">
              Ease Out (slow end)
            </button>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 text-sm font-semibold text-slate-700 dark:text-slate-300">ease-in-out</div>
            <button class="bg-purple-500 hover:bg-purple-600 hover:scale-110 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out">
              Ease In-Out (both)
            </button>
          </div>
        </div>
      </div>
      
      <!-- Delay -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Delay</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Hover over the container to see staggered effects</p>
        <div class="group bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="flex flex-wrap gap-3">
            <div class="bg-emerald-500 group-hover:scale-110 text-white px-4 py-2 rounded transition duration-300 delay-0">
              No delay
            </div>
            <div class="bg-teal-500 group-hover:scale-110 text-white px-4 py-2 rounded transition duration-300 delay-75">
              75ms
            </div>
            <div class="bg-cyan-500 group-hover:scale-110 text-white px-4 py-2 rounded transition duration-300 delay-150">
              150ms
            </div>
            <div class="bg-sky-500 group-hover:scale-110 text-white px-4 py-2 rounded transition duration-300 delay-300">
              300ms
            </div>
            <div class="bg-blue-500 group-hover:scale-110 text-white px-4 py-2 rounded transition duration-300 delay-500">
              500ms
            </div>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Timing Options</h3>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Duration</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-blue-700 dark:text-blue-300">duration-75 to 1000</code>
          </div>
          <div>
            <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Easing</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-indigo-700 dark:text-indigo-300">ease-linear, in, out, in-out</code>
          </div>
          <div>
            <p class="font-semibold text-purple-800 dark:text-purple-200 mb-2">Delay</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-purple-700 dark:text-purple-300">delay-75 to 1000</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const playgroundExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transitions Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎮 Transitions Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Experiment with smooth animations
      </p>
      
      <!-- Animated Cards -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Animated Cards</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer">
            <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <span class="text-3xl">🚀</span>
            </div>
            <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Fast Launch</h4>
            <p class="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Hover for lift effect</p>
          </div>
          
          <div class="group relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 text-white">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                <span class="text-3xl">✨</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Gradient Shift</h4>
              <p class="opacity-90">Hover for color change</p>
            </div>
          </div>
          
          <div class="group bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 delay-75">
                <span class="text-3xl">💫</span>
              </div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Slide Up</h4>
              <p class="text-slate-600 dark:text-slate-400">Hover for background</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Button Gallery -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Button Transitions</h3>
        <div class="flex flex-wrap gap-4">
          <button class="relative bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg overflow-hidden group transition-colors duration-300">
            <span class="relative z-10">Slide From Left</span>
            <div class="absolute inset-0 bg-blue-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
          
          <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Glow & Scale
          </button>
          
          <button class="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300">
            Fill Effect
          </button>
          
          <button class="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-rose-500 hover:to-orange-500 text-white px-6 py-3 rounded-lg transition-all duration-700 hover:scale-110">
            Gradient Reverse
          </button>
          
          <button class="relative group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg overflow-hidden">
            <span class="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">Pulse</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"></div>
          </button>
        </div>
      </div>
      
      <!-- Loading States -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Loading States</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl">
            <div class="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse w-3/4 transition-all duration-1000"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3 text-center">Progress Bar</p>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl flex items-center justify-center">
            <div class="flex gap-2">
              <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
              <div class="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-3 h-3 bg-rose-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl flex items-center justify-center">
            <div class="w-12 h-12 border-4 border-emerald-200 dark:border-emerald-900 border-t-emerald-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
        <h3 class="text-lg font-semibold text-violet-900 dark:text-violet-100 mb-4">💡 Transition Tips</h3>
        <ul class="space-y-2 text-sm text-violet-800 dark:text-violet-200">
          <li>✨ Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">transition-all</code> for multiple properties</li>
          <li>🎯 Use specific transitions (colors, transform) for better performance</li>
          <li>⏱️ 150-300ms is ideal for most UI interactions</li>
          <li>🔄 Combine <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">ease-out</code> with hover effects for natural feel</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="Tailwind CSS · Interactivity"
        title="Transitions"
        description="Smooth animations for interactive elements with duration and easing control"
        colorTheme="emerald"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-emerald-700 dark:text-emerald-300">
            <div className="relative">
              <Clock className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Transitions System
          </CardTitle>
          <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
            ⚡ Animate property changes with smooth transitions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">⚡ Transition Types</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">All Properties</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">transition</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Colors</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">transition-colors</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Transform</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">transition-transform</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Opacity</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">transition-opacity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">⚡</div>
                  <div className="font-bold text-emerald-700 dark:text-emerald-300">Why Use</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Smooth UX
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Professional feel
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Easy to apply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            1. Transition Properties
          </CardTitle>
          <CardDescription>Control which properties animate</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={transitionBasicsExample}
            title="Transition Properties"
            description="All, colors, transform, opacity, shadow"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            2. Duration & Easing
          </CardTitle>
          <CardDescription>Control animation speed and timing functions</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={durationEasingExample}
            title="Duration & Easing"
            description="Speed control with duration and easing functions"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Play className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            3. Transitions Playground
          </CardTitle>
          <CardDescription>Experiment with animated cards and buttons</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Transitions Playground"
            description="Cards, buttons, and loading states"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
          {onOpenWebPlayground && (
            <div className="mt-4">
              <Button 
                onClick={() => onOpenWebPlayground(playgroundExample, '', '')}
                className="gap-2"
              >
                <Play className="w-4 h-4" />
                Open in Web Playground
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Transition Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use specific transitions</strong> - Better performance than transition-all</li>
            <li><strong>150-300ms duration</strong> - Sweet spot for most interactions</li>
            <li><strong>ease-out for hover</strong> - Natural feel for user interactions</li>
            <li><strong>Combine with hover/focus</strong> - Always pair with state changes</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* AI ASSISTANT */}
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
              Have a question about Transitions? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I make smooth color transitions?"`} 
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
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">🔐 Login to use AI Assistant</p>
              <Button onClick={() => window.location.href = '/login'} size="sm" className="shadow-sm">Login</Button>
            </div>
          </div>
        ) : !isAiEnabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="text-center space-y-3 px-6">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">⚙️ AI Provider Not Configured</p>
              <Button onClick={() => setShowAiKeyModal(true)} size="sm" className="shadow-sm">Setup AI Key</Button>
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

      {qaResult && <AIAnswerDisplay answer={qaResult.answer} language="tailwind" />}
      
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
