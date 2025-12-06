'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Grid3x3, LayoutGrid, CheckCircle, Sparkles, Play, HelpCircle } from 'lucide-react';
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

export default function GridLayout() {
  
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
        topicTitle: 'CSS Grid',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const gridBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Basics</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📐 CSS Grid Basics
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Two-dimensional layouts made easy
      </p>
      
      <!-- Grid Columns -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Grid Columns</h3>
        
        <div class="space-y-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">grid-cols-3</p>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">1</div>
              <div class="bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">2</div>
              <div class="bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">grid-cols-4</p>
            <div class="grid grid-cols-4 gap-4">
              <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">1</div>
              <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">2</div>
              <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">3</div>
              <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">4</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">grid-cols-6</p>
            <div class="grid grid-cols-6 gap-4">
              <div class="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">1</div>
              <div class="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">2</div>
              <div class="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">3</div>
              <div class="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">4</div>
              <div class="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">5</div>
              <div class="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">6</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Grid Rows -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Grid Rows</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">grid-rows-3 grid-flow-col</p>
          <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">1</div>
            <div class="bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">2</div>
            <div class="bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">3</div>
            <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">4</div>
            <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">5</div>
            <div class="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">6</div>
          </div>
        </div>
      </div>
      
      <!-- Gap Utilities -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Gap Spacing</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">gap-2</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-blue-500 text-white p-3 rounded text-center text-sm">A</div>
              <div class="bg-blue-500 text-white p-3 rounded text-center text-sm">B</div>
              <div class="bg-blue-500 text-white p-3 rounded text-center text-sm">C</div>
              <div class="bg-blue-500 text-white p-3 rounded text-center text-sm">D</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">gap-4</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-indigo-500 text-white p-3 rounded text-center text-sm">A</div>
              <div class="bg-indigo-500 text-white p-3 rounded text-center text-sm">B</div>
              <div class="bg-indigo-500 text-white p-3 rounded text-center text-sm">C</div>
              <div class="bg-indigo-500 text-white p-3 rounded text-center text-sm">D</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">gap-8</p>
            <div class="grid grid-cols-2 gap-8">
              <div class="bg-purple-500 text-white p-3 rounded text-center text-sm">A</div>
              <div class="bg-purple-500 text-white p-3 rounded text-center text-sm">B</div>
              <div class="bg-purple-500 text-white p-3 rounded text-center text-sm">C</div>
              <div class="bg-purple-500 text-white p-3 rounded text-center text-sm">D</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Grid Reference -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
        <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-4">💡 Column Options</h3>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-700 dark:text-emerald-300">grid-cols-1</code>
          <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-700 dark:text-emerald-300">grid-cols-2</code>
          <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-700 dark:text-emerald-300">grid-cols-3</code>
          <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-700 dark:text-emerald-300">grid-cols-4</code>
          <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-700 dark:text-emerald-300">grid-cols-6</code>
          <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded text-emerald-700 dark:text-emerald-300">grid-cols-12</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const gridSpanExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Span & Placement</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📊 Grid Span & Placement
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control item sizing and positioning
      </p>
      
      <!-- Column Span -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Column Span</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="grid grid-cols-6 gap-4">
            <div class="col-span-2 bg-blue-500 text-white p-4 rounded-lg text-center font-semibold">
              col-span-2
            </div>
            <div class="col-span-4 bg-indigo-500 text-white p-4 rounded-lg text-center font-semibold">
              col-span-4
            </div>
            <div class="col-span-3 bg-purple-500 text-white p-4 rounded-lg text-center font-semibold">
              col-span-3
            </div>
            <div class="col-span-3 bg-violet-500 text-white p-4 rounded-lg text-center font-semibold">
              col-span-3
            </div>
            <div class="col-span-6 bg-fuchsia-500 text-white p-4 rounded-lg text-center font-semibold">
              col-span-6 (Full Width)
            </div>
          </div>
        </div>
      </div>
      
      <!-- Row Span -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Row Span</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="grid grid-cols-3 grid-rows-3 gap-4 h-96">
            <div class="row-span-2 bg-cyan-500 text-white p-4 rounded-lg flex items-center justify-center font-semibold">
              row-span-2
            </div>
            <div class="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center font-semibold">1</div>
            <div class="row-span-3 bg-indigo-500 text-white p-4 rounded-lg flex items-center justify-center font-semibold">
              row-span-3
            </div>
            <div class="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center font-semibold">2</div>
            <div class="bg-purple-500 text-white p-4 rounded-lg flex items-center justify-center font-semibold">3</div>
            <div class="bg-violet-500 text-white p-4 rounded-lg flex items-center justify-center font-semibold">4</div>
          </div>
        </div>
      </div>
      
      <!-- Grid Start/End -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Grid Start & End</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3 bg-emerald-500 text-white p-4 rounded-lg text-center font-semibold">
              col-start-1<br/>col-end-3
            </div>
            <div class="col-start-3 col-end-7 bg-teal-500 text-white p-4 rounded-lg text-center font-semibold">
              col-start-3<br/>col-end-7
            </div>
            <div class="col-start-2 col-end-6 bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold">
              col-start-2 col-end-6
            </div>
          </div>
        </div>
      </div>
      
      <!-- Dashboard Layout Example -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Dashboard Layout</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="grid grid-cols-4 gap-4 h-96">
            <div class="col-span-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg flex items-center justify-center font-bold text-lg">
              Header
            </div>
            <div class="col-span-1 row-span-2 bg-indigo-400 text-white p-4 rounded-lg flex items-center justify-center font-semibold">
              Sidebar
            </div>
            <div class="col-span-3 bg-blue-400 text-white p-4 rounded-lg flex items-center justify-center font-semibold">
              Main Content
            </div>
            <div class="col-span-2 bg-purple-400 text-white p-4 rounded-lg flex items-center justify-center font-semibold">
              Section 1
            </div>
            <div class="bg-violet-400 text-white p-4 rounded-lg flex items-center justify-center font-semibold">
              Section 2
            </div>
          </div>
        </div>
      </div>
      
      <!-- Span Reference -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Span Options</h3>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Column Span</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-blue-700 dark:text-blue-300">col-span-1 to col-span-12</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-blue-700 dark:text-blue-300">col-span-full</code>
          </div>
          <div>
            <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Row Span</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-indigo-700 dark:text-indigo-300">row-span-1 to row-span-6</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-indigo-700 dark:text-indigo-300">row-span-full</code>
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
  <title>Grid Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎮 Grid Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Experiment with different grid layouts
      </p>
      
      <!-- Photo Gallery -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">📸 Photo Gallery Layout</h3>
        <div class="grid grid-cols-4 grid-rows-3 gap-4 h-[500px]">
          <div class="col-span-2 row-span-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            Featured
          </div>
          <div class="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-white font-semibold">
            Photo 1
          </div>
          <div class="bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center text-white font-semibold">
            Photo 2
          </div>
          <div class="bg-gradient-to-br from-orange-400 to-amber-400 rounded-xl flex items-center justify-center text-white font-semibold">
            Photo 3
          </div>
          <div class="bg-gradient-to-br from-rose-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-semibold">
            Photo 4
          </div>
          <div class="col-span-2 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center text-white font-semibold">
            Photo 5
          </div>
          <div class="col-span-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center text-white font-semibold">
            Photo 6
          </div>
        </div>
      </div>
      
      <!-- Card Grid -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🎴 Responsive Card Grid</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">📱</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Responsive</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">Adapts to all screen sizes</p>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">⚡</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Fast</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">Lightning quick layouts</p>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-pink-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">🎨</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Beautiful</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">Stunning visual design</p>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-emerald-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">🔧</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Flexible</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">Highly customizable</p>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">🚀</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Modern</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">Latest CSS Grid features</p>
          </div>
          
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-cyan-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">💡</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Simple</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm">Easy to understand</p>
          </div>
        </div>
      </div>
      
      <!-- Auto-Fit Grid -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🔄 Auto-Fit Grid</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            <div class="bg-gradient-to-br from-red-400 to-rose-400 p-6 rounded-lg text-white text-center font-semibold">Auto</div>
            <div class="bg-gradient-to-br from-orange-400 to-amber-400 p-6 rounded-lg text-white text-center font-semibold">Fit</div>
            <div class="bg-gradient-to-br from-yellow-400 to-lime-400 p-6 rounded-lg text-white text-center font-semibold">Grid</div>
            <div class="bg-gradient-to-br from-green-400 to-emerald-400 p-6 rounded-lg text-white text-center font-semibold">Items</div>
            <div class="bg-gradient-to-br from-teal-400 to-cyan-400 p-6 rounded-lg text-white text-center font-semibold">Resize</div>
            <div class="bg-gradient-to-br from-blue-400 to-indigo-400 p-6 rounded-lg text-white text-center font-semibold">Window</div>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-3 text-center">Try resizing the browser to see auto-fit in action!</p>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">💡 Grid Tips</h3>
        <ul class="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <li>✨ Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">grid-cols-*</code> for equal columns</li>
          <li>🎯 Combine <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">col-span</code> for flexible layouts</li>
          <li>📱 Add responsive breakpoints: <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">md:grid-cols-*</code></li>
          <li>🔧 Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">gap-*</code> for consistent spacing</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Grid3x3}
        category="Tailwind CSS · Layout"
        title="CSS Grid"
        description="Master two-dimensional layouts with powerful grid utilities"
        colorTheme="emerald"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-emerald-700 dark:text-emerald-300">
            <div className="relative">
              <LayoutGrid className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            CSS Grid System
          </CardTitle>
          <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
            📐 Two-dimensional layouts with rows and columns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">📐 Grid Properties</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Columns</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">grid-cols-1 to 12</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Rows</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">grid-rows-1 to 6</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Span</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">col-span, row-span</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Gap</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">gap-0 to gap-96</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">📐</div>
                  <div className="font-bold text-emerald-700 dark:text-emerald-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Dashboards
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Photo galleries
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Card layouts
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
              <Grid3x3 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            1. Grid Basics
          </CardTitle>
          <CardDescription>Grid columns, rows, and gap utilities</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={gridBasicsExample}
            title="Grid Basics"
            description="Learn grid-cols, grid-rows, and gap spacing"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <LayoutGrid className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            2. Grid Span & Placement
          </CardTitle>
          <CardDescription>Control item sizing with col-span and row-span</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={gridSpanExample}
            title="Grid Span & Placement"
            description="Master col-span, row-span, and grid positioning"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Play className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Interactive Playground
          </CardTitle>
          <CardDescription>Experiment with real-world grid layouts</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Grid Playground"
            description="Photo gallery, cards, and auto-fit grids"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Grid Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use grid-cols-12</strong> for flexible layouts (like Bootstrap)</li>
            <li><strong>Responsive grids</strong> - Combine with md:, lg: breakpoints</li>
            <li><strong>gap for spacing</strong> - Cleaner than margins</li>
            <li><strong>col-span for features</strong> - Highlight important content</li>
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
              Have a question about CSS Grid? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I create a photo gallery with grid?"`} 
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
