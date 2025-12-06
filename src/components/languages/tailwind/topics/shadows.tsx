'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, CheckCircle, Play, HelpCircle, Zap, Box } from 'lucide-react';
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

interface ShadowsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Shadows({ onOpenWebPlayground }: ShadowsProps = {}) {
  
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
        topicTitle: 'Shadows',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const boxShadows = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Shadows</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📦 Box Shadows
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Add depth and elevation to your elements
      </p>
      
      <!-- Shadow Sizes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Shadow Sizes</h3>
        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div class="text-center">
            <div class="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
              <div class="w-16 h-16 bg-blue-500 rounded-lg mx-auto"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">shadow-sm</p>
          </div>
          
          <div class="text-center">
            <div class="bg-white dark:bg-slate-700 p-6 rounded-xl shadow transition-all hover:shadow-lg">
              <div class="w-16 h-16 bg-indigo-500 rounded-lg mx-auto"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">shadow</p>
          </div>
          
          <div class="text-center">
            <div class="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md transition-all hover:shadow-xl">
              <div class="w-16 h-16 bg-purple-500 rounded-lg mx-auto"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">shadow-md</p>
          </div>
          
          <div class="text-center">
            <div class="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl">
              <div class="w-16 h-16 bg-pink-500 rounded-lg mx-auto"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">shadow-lg</p>
          </div>
          
          <div class="text-center">
            <div class="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-xl transition-all hover:scale-105">
              <div class="w-16 h-16 bg-rose-500 rounded-lg mx-auto"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">shadow-xl</p>
          </div>
        </div>
      </div>
      
      <!-- 2XL Shadow -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Extra Large Shadow</h3>
        <div class="flex justify-center">
          <div class="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-2xl">
            <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              2XL
            </div>
          </div>
        </div>
        <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">shadow-2xl - Maximum depth</p>
      </div>
      
      <!-- Shadow Colors -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Colored Shadows</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30">
            <div class="w-full h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              Blue Shadow
            </div>
            <code class="text-xs mt-3 block text-center text-slate-600 dark:text-slate-400">shadow-blue-500/50</code>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg shadow-purple-500/50 dark:shadow-purple-500/30">
            <div class="w-full h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              Purple Shadow
            </div>
            <code class="text-xs mt-3 block text-center text-slate-600 dark:text-slate-400">shadow-purple-500/50</code>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg shadow-pink-500/50 dark:shadow-pink-500/30">
            <div class="w-full h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
              Pink Shadow
            </div>
            <code class="text-xs mt-3 block text-center text-slate-600 dark:text-slate-400">shadow-pink-500/50</code>
          </div>
        </div>
      </div>
      
      <!-- Inner Shadow -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Inner Shadows</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 p-8 rounded-xl shadow-inner">
            <div class="text-center">
              <p class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Inset Effect</p>
              <code class="text-sm text-slate-600 dark:text-slate-400">shadow-inner</code>
            </div>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-8 rounded-xl">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg shadow-inner">
              <input type="text" placeholder="Input with inner shadow" class="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- No Shadow -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Remove Shadow</h3>
        <div class="flex justify-center">
          <div class="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-none border-2 border-slate-300 dark:border-slate-600">
            <p class="text-slate-900 dark:text-white font-semibold">No Shadow (shadow-none)</p>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">Useful for removing default shadows</p>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Shadow Classes</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Sizes</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-slate-700 dark:text-slate-300">shadow-sm, shadow, shadow-md</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-slate-700 dark:text-slate-300">shadow-lg, shadow-xl, shadow-2xl</code>
          </div>
          <div>
            <p class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Special</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-slate-700 dark:text-slate-300">shadow-inner (inset)</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-slate-700 dark:text-slate-300">shadow-none (remove)</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const dropShadows = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drop Shadows</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        💧 Drop Shadows
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Filter-based shadows for non-rectangular shapes
      </p>
      
      <!-- Drop Shadow Sizes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Drop Shadow Sizes</h3>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-20 h-20 text-blue-500 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow-sm</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-20 h-20 text-purple-500 drop-shadow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow</p>
          </div>
          
          <div class="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-20 h-20 text-pink-500 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow-md</p>
          </div>
          
          <div class="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-20 h-20 text-orange-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow-lg</p>
          </div>
        </div>
      </div>
      
      <!-- Drop Shadow XL & 2XL -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Extra Large Drop Shadows</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-32 h-32 text-emerald-500 drop-shadow-xl" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow-xl</p>
          </div>
          
          <div class="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-32 h-32 text-cyan-500 drop-shadow-2xl" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow-2xl</p>
          </div>
        </div>
      </div>
      
      <!-- Icons with Drop Shadow -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Perfect for Icons & Illustrations</h3>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="text-6xl drop-shadow-lg">🎨</div>
          <div class="text-6xl drop-shadow-lg">🚀</div>
          <div class="text-6xl drop-shadow-lg">⚡</div>
          <div class="text-6xl drop-shadow-lg">🎯</div>
          <div class="text-6xl drop-shadow-lg">💎</div>
          <div class="text-6xl drop-shadow-lg">🌟</div>
        </div>
      </div>
      
      <!-- No Drop Shadow -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Remove Drop Shadow</h3>
        <div class="flex justify-center">
          <svg class="w-32 h-32 text-slate-400 drop-shadow-none" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-3">drop-shadow-none</p>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Drop Shadow vs Box Shadow</h3>
        <ul class="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <li>✨ <strong>Drop Shadow</strong> - Uses CSS filters, works on transparent PNGs and SVGs</li>
          <li>📦 <strong>Box Shadow</strong> - Follows the element's box model, better for rectangular shapes</li>
          <li>🎨 Use drop-shadow for icons, illustrations, and irregular shapes</li>
          <li>⚡ Box shadows are generally more performant for simple rectangles</li>
        </ul>
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
  <title>Shadows Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        🎮 Shadows Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-12 text-lg">
        Explore box shadows and drop shadows in action
      </p>
      
      <!-- Card Gallery with Shadows -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">📦 Elevated Cards</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
              🎨
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Design</h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Hover to see shadow elevation</p>
          </div>
          
          <div class="group bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
              💎
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Premium</h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Starts with larger shadow</p>
          </div>
          
          <div class="group bg-white dark:bg-slate-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
              🚀
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Launch</h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Maximum elevation effect</p>
          </div>
        </div>
      </div>
      
      <!-- Colored Shadows -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🌈 Colored Shadows</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <button class="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:-translate-y-1 transition-all duration-300">
            Blue Glow
          </button>
          
          <button class="bg-gradient-to-br from-purple-500 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:-translate-y-1 transition-all duration-300">
            Purple Glow
          </button>
          
          <button class="bg-gradient-to-br from-pink-500 to-pink-600 text-white px-6 py-4 rounded-xl shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/60 hover:-translate-y-1 transition-all duration-300">
            Pink Glow
          </button>
          
          <button class="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 hover:-translate-y-1 transition-all duration-300">
            Orange Glow
          </button>
        </div>
      </div>
      
      <!-- Inner Shadows -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">⬇️ Inset Shadows</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-inner">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Pressed Button</h3>
            <div class="bg-gray-200 dark:bg-slate-900 px-6 py-3 rounded-lg shadow-inner inline-block">
              <span class="text-slate-700 dark:text-slate-300 font-semibold">Click Me</span>
            </div>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Form Input</h3>
            <input type="text" placeholder="Type something..." class="w-full bg-gray-50 dark:bg-slate-800 px-4 py-3 rounded-lg shadow-inner outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white" />
          </div>
        </div>
      </div>
      
      <!-- Drop Shadows on Icons -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">💧 Drop Shadow Icons</h2>
        <div class="flex flex-wrap justify-center gap-8">
          <div class="group cursor-pointer">
            <svg class="w-20 h-20 text-blue-500 drop-shadow-lg group-hover:drop-shadow-2xl transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </div>
          
          <div class="group cursor-pointer">
            <svg class="w-20 h-20 text-purple-500 drop-shadow-lg group-hover:drop-shadow-2xl transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <div class="group cursor-pointer">
            <svg class="w-20 h-20 text-pink-500 drop-shadow-lg group-hover:drop-shadow-2xl transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <div class="group cursor-pointer">
            <svg class="w-20 h-20 text-emerald-500 drop-shadow-lg group-hover:drop-shadow-2xl transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <div class="group cursor-pointer">
            <svg class="w-20 h-20 text-orange-500 drop-shadow-lg group-hover:drop-shadow-2xl transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Floating Cards -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🎨 Layered Elevation</h2>
        <div class="relative h-96">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm w-64">
            <h3 class="font-bold text-slate-900 dark:text-white">Layer 1 - Base</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">shadow-sm</p>
          </div>
          
          <div class="absolute top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md w-64">
            <h3 class="font-bold text-slate-900 dark:text-white">Layer 2 - Mid</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">shadow-md</p>
          </div>
          
          <div class="absolute top-40 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-700 p-6 rounded-xl shadow-xl w-64">
            <h3 class="font-bold text-slate-900 dark:text-white">Layer 3 - High</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">shadow-xl</p>
          </div>
          
          <div class="absolute top-60 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-2xl w-64">
            <h3 class="font-bold">Layer 4 - Top</h3>
            <p class="text-sm opacity-90">shadow-2xl</p>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-slate-50 to-zinc-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Shadow Best Practices</h3>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>✨ Use shadows to establish visual hierarchy and depth</li>
          <li>📦 Box shadows work best for rectangular shapes and cards</li>
          <li>💧 Drop shadows are perfect for icons, SVGs, and irregular shapes</li>
          <li>🎨 Colored shadows add personality but use sparingly</li>
          <li>⚡ Combine shadows with transitions for smooth hover effects</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Effects"
        title="Shadows"
        description="Add depth and elevation with box shadows and drop shadows"
        colorTheme="gray"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-700 dark:text-slate-300">
            <div className="relative">
              <Layers className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are Shadows?
          </CardTitle>
          <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
            📦 Create depth, hierarchy, and elevation in your designs
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-slate-400 dark:hover:border-slate-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Shadow Types
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/20 rounded-lg border border-slate-200/50">
                    <Box className="w-6 h-6 text-slate-500" />
                    <div>
                      <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Box Shadow</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Rectangles</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200/50">
                    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Drop Shadow</div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400">Icons/SVGs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 dark:from-slate-900/30 dark:via-gray-900/30 dark:to-zinc-900/30 p-6 rounded-xl border border-slate-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">📦</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-slate-700 dark:text-slate-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Cards & UI
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual depth
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Elevation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-600 dark:text-slate-400 text-sm ml-2">Shadow Example</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* 📦 Add shadow depth */</div>
              <div className="text-gray-900 dark:text-white">&lt;<span className="text-purple-700 dark:text-purple-400">div</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-yellow-600 dark:text-yellow-400">"shadow-lg"</span>&gt;</div>
              <div className="text-gray-900 dark:text-white">  Elevated card</div>
              <div className="text-gray-900 dark:text-white">&lt;/<span className="text-purple-700 dark:text-purple-400">div</span>&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-slate-500/10 rounded-lg">
              <Box className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </div>
            1. Box Shadows
          </CardTitle>
          <CardDescription>Add depth with traditional box shadows</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={boxShadows}
            title="Box Shadows"
            description="sm to 2xl shadows, colored shadows, inner shadows"
            colorTheme="gray"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            2. Drop Shadows
          </CardTitle>
          <CardDescription>Filter-based shadows for non-rectangular shapes</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={dropShadows}
            title="Drop Shadows"
            description="Perfect for SVGs, icons, and irregular shapes"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            3. Shadows Playground
          </CardTitle>
          <CardDescription>Interactive showcase of shadow effects</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Shadows Playground"
            description="Cards, buttons, icons with creative shadow effects"
            colorTheme="indigo"
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
        <AlertTitle>Shadow Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use shadows purposefully</strong> - Establish visual hierarchy and depth</li>
            <li><strong>Box vs Drop</strong> - Box for rectangles, drop for irregular shapes</li>
            <li><strong>Hover effects</strong> - Increase shadow on hover for feedback</li>
            <li><strong>Performance</strong> - Shadows are GPU-accelerated, use freely</li>
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
              Have a question about Shadows? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "When should I use drop-shadow vs box-shadow?"`} 
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
