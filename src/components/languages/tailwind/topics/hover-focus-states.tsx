'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MousePointerClick, Focus, CheckCircle, Sparkles, Play, HelpCircle } from 'lucide-react';
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

interface HoverFocusStatesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HoverFocusStates({ onOpenWebPlayground }: HoverFocusStatesProps = {}) {
  
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
        topicTitle: 'Hover & Focus States',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const hoverStatesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hover States</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🖱️ Hover States
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Interactive elements that respond to mouse hover
      </p>
      
      <!-- Color Changes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Hover Background Colors</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            Hover Me
          </button>
          <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
            Hover Me
          </button>
          <button class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors">
            Hover Me
          </button>
          <button class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors">
            Hover Me
          </button>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">hover:bg-color-shade</p>
      </div>
      
      <!-- Scale Transform -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Hover Scale</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 text-white px-6 py-3 rounded-lg transition-transform shadow-lg">
            Scale Up
          </button>
          <button class="bg-gradient-to-r from-violet-500 to-purple-500 hover:scale-110 text-white px-6 py-3 rounded-lg transition-transform shadow-lg">
            Scale More
          </button>
          <button class="bg-gradient-to-r from-rose-500 to-pink-500 hover:scale-95 text-white px-6 py-3 rounded-lg transition-transform shadow-lg">
            Scale Down
          </button>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">hover:scale-105, hover:scale-110, hover:scale-95</p>
      </div>
      
      <!-- Shadow Effects -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Hover Shadows</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow cursor-pointer">
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">shadow-lg</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover for shadow</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow cursor-pointer">
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">shadow-xl</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover for shadow</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow cursor-pointer">
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">shadow-2xl</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover for shadow</p>
          </div>
        </div>
      </div>
      
      <!-- Text & Border -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Hover Text & Border</h3>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg">
            <p class="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Hover to change text color (hover:text-blue-600)
            </p>
          </div>
          <div class="border-2 border-slate-300 hover:border-purple-500 dark:border-slate-700 dark:hover:border-purple-400 p-4 rounded-lg transition-colors cursor-pointer">
            <p class="text-slate-900 dark:text-white">Hover to change border color</p>
          </div>
        </div>
      </div>
      
      <!-- Card Hover Effects -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Interactive Cards</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🚀</span>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white mb-2">Lift Effect</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">Hover to lift card</p>
          </div>
          
          <div class="group bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer text-white">
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">✨</span>
            </div>
            <h4 class="font-bold mb-2">Scale Effect</h4>
            <p class="text-sm opacity-90">Hover to scale</p>
          </div>
          
          <div class="group relative bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all cursor-pointer overflow-hidden">
            <div class="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">💫</span>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white mb-2">Slide Effect</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Hover for background</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Common Hover States</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-blue-700 dark:text-blue-300">hover:bg-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-blue-700 dark:text-blue-300">hover:text-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-blue-700 dark:text-blue-300">hover:scale-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-blue-700 dark:text-blue-300">hover:shadow-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-blue-700 dark:text-blue-300">hover:border-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-blue-700 dark:text-blue-300">hover:-translate-y-*</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const focusStatesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Focus States</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎯 Focus States
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Accessibility-friendly focus indicators
      </p>
      
      <!-- Focus Rings -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Focus Ring</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Click/Tab to focus on buttons</p>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 transition-all">
            Focus Ring
          </button>
          <button class="bg-purple-500 text-white px-6 py-3 rounded-lg focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-700 focus:ring-offset-2 transition-all">
            Ring + Offset
          </button>
          <button class="bg-pink-500 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700 transition-all">
            Custom Ring
          </button>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">focus:ring-4 focus:ring-color</p>
      </div>
      
      <!-- Form Inputs -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Form Input Focus</h3>
        <div class="space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Default Focus</label>
            <input 
              type="text" 
              placeholder="Click to focus" 
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Purple Focus</label>
            <input 
              type="email" 
              placeholder="email@example.com" 
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Textarea Focus</label>
            <textarea 
              placeholder="Type something..." 
              rows="3"
              class="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900/50 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            ></textarea>
          </div>
        </div>
      </div>
      
      <!-- Focus Within -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Focus Within (Parent)</h3>
        <div class="max-w-md p-6 rounded-xl border-2 border-slate-300 dark:border-slate-600 focus-within:border-pink-500 dark:focus-within:border-pink-400 focus-within:ring-4 focus-within:ring-pink-100 dark:focus-within:ring-pink-900/50 transition-all">
          <h4 class="font-bold text-slate-900 dark:text-white mb-3">Focus Any Field</h4>
          <input 
            type="text" 
            placeholder="First name" 
            class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 mb-3 outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          />
          <input 
            type="text" 
            placeholder="Last name" 
            class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          />
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">Parent highlights when any child is focused</p>
        </div>
      </div>
      
      <!-- Focus Visible -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Focus Visible (Keyboard Only)</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Try clicking vs tabbing to these buttons</p>
        <div class="flex flex-wrap gap-4">
          <button class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg focus-visible:ring-4 focus-visible:ring-cyan-300 dark:focus-visible:ring-cyan-700 transition-all">
            Focus Visible
          </button>
          <button class="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-3 rounded-lg focus-visible:ring-4 focus-visible:ring-violet-300 dark:focus-visible:ring-violet-700 focus-visible:ring-offset-2 transition-all">
            Keyboard Focus Only
          </button>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">focus-visible:ring-* (shows only on keyboard navigation)</p>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">💡 Focus Utilities</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">focus:ring-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">focus:ring-offset-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">focus:border-*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">focus-within:*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">focus-visible:*</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">focus:outline-none</code>
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
  <title>Interactive Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-orange-50 to-rose-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎮 Interactive Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Hover and focus on different elements to see effects
      </p>
      
      <!-- Button Collection -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Button Effects Gallery</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <button class="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl hover:shadow-2xl hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all overflow-hidden">
            <span class="relative z-10">Lift & Shadow</span>
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </button>
          
          <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-xl hover:scale-105 focus:ring-4 focus:ring-purple-300 active:scale-95 transition-all">
            Scale & Active
          </button>
          
          <button class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-pink-500/50 focus:ring-4 focus:ring-pink-300 transition-all">
            Colored Shadow
          </button>
          
          <button class="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 px-6 py-4 rounded-xl hover:bg-emerald-500 hover:text-white focus:ring-4 focus:ring-emerald-300 transition-all">
            Fill on Hover
          </button>
          
          <button class="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 hover:rotate-2 focus:ring-4 focus:ring-orange-300 transition-all">
            Rotate Effect
          </button>
          
          <button class="relative bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-xl hover:scale-110 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600 transition-all group">
            <span class="relative z-10">Pulse Effect</span>
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
          </button>
        </div>
      </div>
      
      <!-- Card Interactions -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Card Interactions</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group relative bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer">
            <div class="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span>→</span>
            </div>
            <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
              <span class="text-3xl">🚀</span>
            </div>
            <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Feature One</h4>
            <p class="text-slate-600 dark:text-slate-400">Hover to see lift and rotation effects</p>
          </div>
          
          <div class="group relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
            <div class="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <div class="relative z-10 text-white">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span class="text-3xl">✨</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Feature Two</h4>
              <p class="opacity-90">Hover for overlay effect</p>
            </div>
          </div>
          
          <div class="group bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all cursor-pointer relative overflow-hidden">
            <div class="absolute inset-0 bg-emerald-500/10 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform">
                <span class="text-3xl">💎</span>
              </div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Feature Three</h4>
              <p class="text-slate-600 dark:text-slate-400">Hover for scale effect</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Form Example -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Interactive Form</h3>
        <div class="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-950 p-8 rounded-xl">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:border-slate-400 dark:hover:border-slate-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                class="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:border-slate-400 dark:hover:border-slate-500"
              />
            </div>
            
            <button class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold focus:ring-4 focus:ring-blue-300 hover:shadow-xl transition-all">
              Sign In
            </button>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">💡 Best Practices</h3>
        <ul class="space-y-2 text-sm text-orange-800 dark:text-orange-200">
          <li>✨ Always include <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">transition-*</code> for smooth effects</li>
          <li>🎯 Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">focus:ring-*</code> for accessibility</li>
          <li>🖱️ Combine hover effects with <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">active:scale-*</code> for click feedback</li>
          <li>⌨️ Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">focus-visible:*</code> for keyboard-only indicators</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MousePointerClick}
        category="Tailwind CSS · Interactivity"
        title="Hover & Focus States"
        description="Create interactive elements with hover and focus effects"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Focus className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Interactive States
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🖱️ Respond to user interactions with hover, focus, and active states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">🖱️ State Types</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Hover</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Mouse over</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Focus</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Keyboard/click</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Active</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Click & hold</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Focus Visible</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Keyboard only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🖱️</div>
                  <div className="font-bold text-blue-700 dark:text-blue-300">Benefits</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Better UX
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Accessibility
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual feedback
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
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <MousePointerClick className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Hover States
          </CardTitle>
          <CardDescription>Interactive effects on mouse hover</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hoverStatesExample}
            title="Hover States"
            description="Colors, scales, shadows, and card effects"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Focus className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Focus States
          </CardTitle>
          <CardDescription>Accessibility-friendly focus indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={focusStatesExample}
            title="Focus States"
            description="Rings, borders, focus-within, and focus-visible"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Play className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            3. Interactive Playground
          </CardTitle>
          <CardDescription>Experiment with combined hover and focus effects</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Interactive Playground"
            description="Buttons, cards, and form interactions"
            colorTheme="orange"
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
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always add transitions</strong> - Smooth animations improve UX</li>
            <li><strong>Use focus rings</strong> - Essential for keyboard navigation</li>
            <li><strong>Combine states</strong> - hover + focus + active for full interactivity</li>
            <li><strong>Test accessibility</strong> - Ensure keyboard users can see focus states</li>
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
              Have a question about Hover & Focus States? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I add a hover effect to buttons?"`} 
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
