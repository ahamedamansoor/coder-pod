'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, RotateCw, CheckCircle, Sparkles, Play, HelpCircle } from 'lucide-react';
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

interface TransformsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Transforms({ onOpenWebPlayground }: TransformsProps = {}) {
  
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
        topicTitle: 'Transforms',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const scaleRotateExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scale & Rotate</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🔄 Scale & Rotate
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Transform elements with scale and rotation
      </p>
      
      <!-- Scale -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Scale Transform</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-blue-500 rounded-lg scale-75 transition-transform hover:scale-100"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-75</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 dark:bg-purple-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-purple-500 rounded-lg scale-100 transition-transform hover:scale-110"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-100</p>
          </div>
          <div class="text-center">
            <div class="bg-pink-100 dark:bg-pink-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-pink-500 rounded-lg scale-110 transition-transform hover:scale-125"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-110</p>
          </div>
          <div class="text-center">
            <div class="bg-rose-100 dark:bg-rose-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-rose-500 rounded-lg scale-125 transition-transform hover:scale-150"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-125</p>
          </div>
        </div>
      </div>
      
      <!-- Rotate -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Rotate Transform</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="bg-emerald-100 dark:bg-emerald-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-emerald-500 rounded-lg rotate-0 transition-transform hover:rotate-45"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">rotate-0</p>
          </div>
          <div class="text-center">
            <div class="bg-teal-100 dark:bg-teal-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-teal-500 rounded-lg rotate-45 transition-transform hover:rotate-90"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">rotate-45</p>
          </div>
          <div class="text-center">
            <div class="bg-cyan-100 dark:bg-cyan-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-cyan-500 rounded-lg rotate-90 transition-transform hover:rotate-180"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">rotate-90</p>
          </div>
          <div class="text-center">
            <div class="bg-sky-100 dark:bg-sky-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-sky-500 rounded-lg rotate-180 transition-transform hover:rotate-0"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">rotate-180</p>
          </div>
        </div>
      </div>
      
      <!-- Scale X/Y -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Scale X & Y</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="bg-indigo-100 dark:bg-indigo-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-indigo-500 rounded-lg scale-x-150 transition-transform hover:scale-x-100"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-x-150</p>
          </div>
          <div class="text-center">
            <div class="bg-violet-100 dark:bg-violet-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-violet-500 rounded-lg scale-y-150 transition-transform hover:scale-y-100"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-y-150</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 dark:bg-purple-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-purple-500 rounded-lg scale-x-75 scale-y-125 transition-transform hover:scale-100"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">scale-x-75 scale-y-125</p>
          </div>
        </div>
      </div>
      
      <!-- Combined -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Combined Transforms</h3>
        <div class="flex flex-wrap gap-4 justify-center">
          <button class="bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-110 hover:rotate-6 text-white px-6 py-3 rounded-lg transition-transform">
            Scale + Rotate
          </button>
          <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:-rotate-3 text-white px-6 py-3 rounded-lg transition-transform">
            Subtle Combo
          </button>
          <button class="bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-125 hover:rotate-12 text-white px-6 py-3 rounded-lg transition-transform">
            Big Combo
          </button>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-rose-200 dark:border-rose-800">
        <h3 class="text-lg font-semibold text-rose-900 dark:text-rose-100 mb-4">💡 Transform Values</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p class="font-semibold text-rose-800 dark:text-rose-200 mb-2">Scale</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-rose-700 dark:text-rose-300">scale-0 to scale-150</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-rose-700 dark:text-rose-300">scale-x-*, scale-y-*</code>
          </div>
          <div>
            <p class="font-semibold text-pink-800 dark:text-pink-200 mb-2">Rotate</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-pink-700 dark:text-pink-300">rotate-0 to rotate-180</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-pink-700 dark:text-pink-300">-rotate-* (negative)</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const translateSkewExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Translate & Skew</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📐 Translate & Skew
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Move and skew elements with precision
      </p>
      
      <!-- Translate -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Translate (Move)</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl relative h-48">
            <div class="absolute top-8 left-8 w-24 h-24 bg-orange-500 rounded-lg transition-transform hover:translate-x-12"></div>
            <p class="absolute bottom-4 left-4 text-sm text-slate-600 dark:text-slate-400">translate-x-12</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl relative h-48">
            <div class="absolute top-8 left-8 w-24 h-24 bg-amber-500 rounded-lg transition-transform hover:-translate-y-8"></div>
            <p class="absolute bottom-4 left-4 text-sm text-slate-600 dark:text-slate-400">-translate-y-8</p>
          </div>
        </div>
      </div>
      
      <!-- Translate Combinations -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Translate X & Y Together</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl relative h-48">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
              Centered
            </div>
            <p class="absolute bottom-4 text-xs text-slate-600 dark:text-slate-400 w-full text-center">-translate-x-1/2 -translate-y-1/2</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl relative h-48">
            <div class="absolute top-8 left-8 w-24 h-24 bg-orange-500 rounded-lg transition-transform hover:translate-x-8 hover:translate-y-8"></div>
            <p class="absolute bottom-4 text-xs text-slate-600 dark:text-slate-400 w-full text-center">translate-x-8 translate-y-8</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl relative h-48">
            <div class="absolute top-8 left-8 w-24 h-24 bg-amber-500 rounded-lg transition-transform hover:-translate-x-4 hover:translate-y-12"></div>
            <p class="absolute bottom-4 text-xs text-slate-600 dark:text-slate-400 w-full text-center">-translate-x-4 translate-y-12</p>
          </div>
        </div>
      </div>
      
      <!-- Skew -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Skew Transform</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-blue-500 rounded-lg skew-x-0 transition-transform hover:skew-x-12"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">skew-x-0</p>
          </div>
          <div class="text-center">
            <div class="bg-indigo-100 dark:bg-indigo-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-indigo-500 rounded-lg skew-x-6"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">skew-x-6</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 dark:bg-purple-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-purple-500 rounded-lg skew-y-6"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">skew-y-6</p>
          </div>
          <div class="text-center">
            <div class="bg-pink-100 dark:bg-pink-900/30 p-8 rounded-xl mb-2 flex items-center justify-center">
              <div class="w-16 h-16 bg-pink-500 rounded-lg skew-x-12"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">skew-x-12</p>
          </div>
        </div>
      </div>
      
      <!-- Transform Origin -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Transform Origin</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Hover to see rotation from different origins</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl">
            <div class="w-24 h-24 bg-emerald-500 rounded-lg origin-center hover:rotate-45 transition-transform"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">origin-center</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl">
            <div class="w-24 h-24 bg-teal-500 rounded-lg origin-top-left hover:rotate-45 transition-transform"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">origin-top-left</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-8 rounded-xl">
            <div class="w-24 h-24 bg-cyan-500 rounded-lg origin-bottom-right hover:rotate-45 transition-transform"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">origin-bottom-right</p>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
        <h3 class="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-4">💡 Translate & Skew</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p class="font-semibold text-amber-800 dark:text-amber-200 mb-2">Translate</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-amber-700 dark:text-amber-300">translate-x-*, translate-y-*</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-amber-700 dark:text-amber-300">-translate-* (negative)</code>
          </div>
          <div>
            <p class="font-semibold text-orange-800 dark:text-orange-200 mb-2">Skew & Origin</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-orange-700 dark:text-orange-300">skew-x-*, skew-y-*</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-orange-700 dark:text-orange-300">origin-* (9 positions)</code>
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
  <title>Transforms Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎮 Transforms Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Experiment with scale, rotate, translate, and skew
      </p>
      
      <!-- Card Gallery -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Transform Cards</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 hover:scale-105 hover:-rotate-2 transition-all duration-300 cursor-pointer overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative z-10 text-white">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span class="text-3xl">🎨</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Design</h4>
              <p class="opacity-90">Hover for scale + rotate</p>
            </div>
          </div>
          
          <div class="group relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer">
            <div class="text-white">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-180 transition-transform duration-500">
                <span class="text-3xl">⚡</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Power</h4>
              <p class="opacity-90">Icon rotates independently</p>
            </div>
          </div>
          
          <div class="group relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-6 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div class="text-white">
              <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform">
                <span class="text-3xl">🚀</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Launch</h4>
              <p class="opacity-90">Lift effect</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Button Effects -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Button Transforms</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-110 hover:rotate-6 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
            Scale + Rotate
          </button>
          
          <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:-translate-y-1 hover:shadow-2xl text-white px-6 py-3 rounded-lg transition-all duration-300">
            Lift Up
          </button>
          
          <button class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 hover:skew-x-3 text-white px-6 py-3 rounded-lg transition-all duration-300">
            Scale + Skew
          </button>
          
          <button class="relative bg-orange-500 hover:scale-110 text-white px-6 py-3 rounded-lg transition-all duration-300 overflow-hidden group">
            <span class="relative z-10">Scale + Overlay</span>
            <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
          
          <button class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-125 hover:-rotate-12 px-6 py-3 rounded-lg transition-all duration-500">
            Big Transform
          </button>
        </div>
      </div>
      
      <!-- Image Gallery -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Image Transform Effects</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="group aspect-square bg-gradient-to-br from-red-400 to-rose-400 rounded-xl overflow-hidden cursor-pointer">
            <div class="w-full h-full flex items-center justify-center text-white text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              📸
            </div>
          </div>
          <div class="group aspect-square bg-gradient-to-br from-orange-400 to-amber-400 rounded-xl overflow-hidden cursor-pointer">
            <div class="w-full h-full flex items-center justify-center text-white text-4xl group-hover:scale-125 transition-all duration-300">
              🎨
            </div>
          </div>
          <div class="group aspect-square bg-gradient-to-br from-yellow-400 to-lime-400 rounded-xl overflow-hidden cursor-pointer">
            <div class="w-full h-full flex items-center justify-center text-white text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
              🎭
            </div>
          </div>
          <div class="group aspect-square bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl overflow-hidden cursor-pointer">
            <div class="w-full h-full flex items-center justify-center text-white text-4xl group-hover:scale-150 transition-all duration-500">
              ✨
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating Animation -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Floating Elements</h3>
        <div class="bg-slate-50 dark:bg-slate-950 rounded-xl p-8 relative h-48 overflow-hidden">
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 rounded-full -translate-y-1/2 animate-bounce"></div>
          <div class="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-500 rounded-lg -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
          <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500 rounded-full -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Transform Tips</h3>
        <ul class="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <li>✨ Combine transforms for unique effects: <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">scale-110 rotate-6</code></li>
          <li>🎯 Always add <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">transition-*</code> for smooth animations</li>
          <li>⚡ Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">origin-*</code> to control rotation/scale center point</li>
          <li>🔧 Negative values work: <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">-translate-x-4 -rotate-6</code></li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="Tailwind CSS · Interactivity"
        title="Transforms"
        description="Scale, rotate, translate, and skew elements with powerful transform utilities"
        colorTheme="pink"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-pink-700 dark:text-pink-300">
            <div className="relative">
              <RotateCw className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Transform System
          </CardTitle>
          <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
            🔄 Manipulate elements with scale, rotate, translate, and skew
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300">🔄 Transform Types</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Scale</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Size changes</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Rotate</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Rotation</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Translate</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Position move</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Skew</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Distortion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🔄</div>
                  <div className="font-bold text-pink-700 dark:text-pink-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Hover effects
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Animations
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Creative layouts
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
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <RotateCw className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            1. Scale & Rotate
          </CardTitle>
          <CardDescription>Resize and rotate elements</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={scaleRotateExample}
            title="Scale & Rotate"
            description="Scale (75-150), rotate (0-180°), and combinations"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Move className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            2. Translate & Skew
          </CardTitle>
          <CardDescription>Move and distort elements</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={translateSkewExample}
            title="Translate & Skew"
            description="Position changes, skew effects, and transform origin"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Play className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            3. Transforms Playground
          </CardTitle>
          <CardDescription>Experiment with combined transform effects</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Transforms Playground"
            description="Cards, buttons, images with creative transforms"
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
        <AlertTitle>Transform Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Combine with transitions</strong> - Always use transition-* for smooth effects</li>
            <li><strong>Use transform origin</strong> - Control rotation/scale center with origin-*</li>
            <li><strong>Keep it subtle</strong> - Small transforms (5-15%) often look best</li>
            <li><strong>Test performance</strong> - Transforms are GPU-accelerated and performant</li>
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
              Have a question about Transforms? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I create a card flip effect?"`} 
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
