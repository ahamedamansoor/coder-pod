'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, SquareStack, CheckCircle, Sparkles, Play, HelpCircle } from 'lucide-react';
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

export default function ZIndexStacking() {
  
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
        topicTitle: 'Z-Index & Stacking',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const zIndexBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Z-Index Basics</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📚 Z-Index Layers
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control stacking order of overlapping elements
      </p>
      
      <!-- Z-Index Scale -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Z-Index Scale</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative h-96">
          <div class="absolute top-8 left-8 w-40 h-40 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl z-0 shadow-2xl">
            z-0
          </div>
          <div class="absolute top-16 left-16 w-40 h-40 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl z-10 shadow-2xl">
            z-10
          </div>
          <div class="absolute top-24 left-24 w-40 h-40 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl z-20 shadow-2xl">
            z-20
          </div>
          <div class="absolute top-32 left-32 w-40 h-40 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl z-30 shadow-2xl">
            z-30
          </div>
          <div class="absolute top-40 left-40 w-40 h-40 bg-lime-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl z-40 shadow-2xl">
            z-40
          </div>
          <div class="absolute top-48 left-48 w-40 h-40 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl z-50 shadow-2xl">
            z-50
          </div>
          <p class="absolute bottom-4 left-4 text-xs text-slate-600 dark:text-slate-400">Higher z-index = On top</p>
        </div>
      </div>
      
      <!-- Negative Z-Index -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Negative Z-Index</h3>
        <div class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl relative">
          <div class="absolute inset-0 -z-10 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl"></div>
          <div class="relative z-0 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Content (z-0)</h4>
            <p class="text-slate-600 dark:text-slate-400">Background pattern uses -z-10 to stay behind</p>
          </div>
        </div>
      </div>
      
      <!-- Z-Index Values -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Available Z-Index Values</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-indigo-600 dark:text-indigo-400 font-semibold">z-0</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: 0</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-purple-600 dark:text-purple-400 font-semibold">z-10</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: 10</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-pink-600 dark:text-pink-400 font-semibold">z-20</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: 20</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-rose-600 dark:text-rose-400 font-semibold">z-30</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: 30</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-orange-600 dark:text-orange-400 font-semibold">z-40</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: 40</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-amber-600 dark:text-amber-400 font-semibold">z-50</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: 50</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-blue-600 dark:text-blue-400 font-semibold">z-auto</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: auto</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <code class="text-cyan-600 dark:text-cyan-400 font-semibold">-z-10</code>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">z-index: -10</p>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Z-Index Tips</h3>
        <ul class="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <li>✨ Use increments of 10 for flexibility (z-10, z-20, z-30...)</li>
          <li>🎯 Higher values appear on top of lower values</li>
          <li>📱 Use -z-10 for background decorations</li>
          <li>🔧 z-50 is great for modals and dropdowns</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  const stackingContextExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stacking Context</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🏗️ Stacking Context
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Understanding how elements stack in groups
      </p>
      
      <!-- Stacking Context Demo -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Parent-Child Stacking</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Parent Context</h4>
            <div class="relative h-48">
              <div class="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-lg flex items-center justify-center text-white font-semibold z-10">
                Parent<br/>z-10
              </div>
              <div class="absolute top-8 left-8 w-32 h-32 bg-indigo-400 rounded-lg flex items-center justify-center text-white font-semibold z-20">
                Child<br/>z-20
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">Child's z-20 respects parent's z-10</p>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Sibling Contexts</h4>
            <div class="relative h-48">
              <div class="absolute top-0 left-0 w-32 h-32 bg-emerald-400 rounded-lg flex items-center justify-center text-white font-semibold z-20">
                Sibling 1<br/>z-20
              </div>
              <div class="absolute top-8 left-8 w-32 h-32 bg-teal-400 rounded-lg flex items-center justify-center text-white font-semibold z-10">
                Sibling 2<br/>z-10
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">Sibling with z-20 appears on top</p>
          </div>
        </div>
      </div>
      
      <!-- Common Patterns -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Common Stacking Patterns</h3>
        
        <div class="space-y-6">
          <!-- Modal Pattern -->
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="font-semibold text-slate-900 dark:text-white mb-3">🪟 Modal Pattern</h4>
            <div class="relative h-48 bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg overflow-hidden">
              <div class="absolute inset-0 bg-black/50 z-40 flex items-center justify-center">
                <div class="bg-white dark:bg-slate-800 p-6 rounded-xl z-50 shadow-2xl max-w-sm">
                  <h5 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Modal Dialog</h5>
                  <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Overlay: z-40, Modal: z-50</p>
                  <button class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Close</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Dropdown Pattern -->
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="font-semibold text-slate-900 dark:text-white mb-3">📋 Dropdown Pattern</h4>
            <div class="relative">
              <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg">
                Menu
              </button>
              <div class="absolute top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-30 min-w-48">
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Option 1</a>
                  <a href="#" class="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Option 2</a>
                  <a href="#" class="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Option 3</a>
                </div>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">Dropdown: z-30</p>
          </div>
          
          <!-- Sticky Header Pattern -->
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="font-semibold text-slate-900 dark:text-white mb-3">📌 Sticky Header Pattern</h4>
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg sticky top-0 z-40">
              <p class="font-semibold">Sticky Header (z-40)</p>
              <p class="text-xs opacity-90">Stays above content when scrolling</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Layer Organization -->
      <div class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
        <h3 class="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-4">💡 Recommended Z-Index Layers</h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-cyan-800 dark:text-cyan-200">-z-10</span>
            <span class="text-slate-600 dark:text-slate-400">Background decorations</span>
          </div>
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-cyan-800 dark:text-cyan-200">z-0</span>
            <span class="text-slate-600 dark:text-slate-400">Normal content</span>
          </div>
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-cyan-800 dark:text-cyan-200">z-10</span>
            <span class="text-slate-600 dark:text-slate-400">Elevated content</span>
          </div>
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-cyan-800 dark:text-cyan-200">z-20 - z-30</span>
            <span class="text-slate-600 dark:text-slate-400">Dropdowns, tooltips</span>
          </div>
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-cyan-800 dark:text-cyan-200">z-40 - z-50</span>
            <span class="text-slate-600 dark:text-slate-400">Modals, overlays</span>
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
  <title>Z-Index Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎮 Z-Index Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Interactive examples of layering and stacking
      </p>
      
      <!-- Card Stack -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🎴 Card Stack Effect</h3>
        <div class="relative h-80 bg-slate-50 dark:bg-slate-950 rounded-xl p-8">
          <div class="absolute top-16 left-20 w-64 h-48 bg-gradient-to-br from-red-400 to-rose-400 rounded-xl shadow-2xl transform -rotate-6 z-0 p-6 text-white">
            <h4 class="text-xl font-bold mb-2">Card 1</h4>
            <p class="text-sm opacity-90">z-0 • Rotated -6deg</p>
          </div>
          <div class="absolute top-20 left-24 w-64 h-48 bg-gradient-to-br from-orange-400 to-amber-400 rounded-xl shadow-2xl transform -rotate-3 z-10 p-6 text-white">
            <h4 class="text-xl font-bold mb-2">Card 2</h4>
            <p class="text-sm opacity-90">z-10 • Rotated -3deg</p>
          </div>
          <div class="absolute top-24 left-28 w-64 h-48 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl shadow-2xl z-20 p-6 text-white">
            <h4 class="text-xl font-bold mb-2">Card 3</h4>
            <p class="text-sm opacity-90">z-20 • No rotation</p>
          </div>
        </div>
      </div>
      
      <!-- Floating Action Button -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🎯 Floating Elements</h3>
        <div class="relative bg-slate-50 dark:bg-slate-950 rounded-xl p-8 h-64">
          <div class="space-y-4">
            <div class="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <p class="text-slate-700 dark:text-slate-300">Main content area with regular z-index</p>
            </div>
            <div class="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <p class="text-slate-700 dark:text-slate-300">More content flowing normally</p>
            </div>
          </div>
          
          <!-- Floating Button -->
          <div class="fixed bottom-8 right-8 z-50">
            <button class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform">
              +
            </button>
          </div>
          
          <!-- Badge -->
          <div class="absolute top-4 right-4 z-30">
            <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              New
            </span>
          </div>
        </div>
      </div>
      
      <!-- Image Gallery with Overlays -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🖼️ Image Gallery with Info</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="relative group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl"></div>
            <div class="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <div class="text-white text-center">
                <p class="font-bold text-lg">Image 1</p>
                <p class="text-sm opacity-90">Hover overlay: z-10</p>
              </div>
            </div>
          </div>
          
          <div class="relative group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl"></div>
            <div class="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <div class="text-white text-center">
                <p class="font-bold text-lg">Image 2</p>
                <p class="text-sm opacity-90">Hover overlay: z-10</p>
              </div>
            </div>
          </div>
          
          <div class="relative group cursor-pointer">
            <div class="h-48 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl"></div>
            <div class="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <div class="text-white text-center">
                <p class="font-bold text-lg">Image 3</p>
                <p class="text-sm opacity-90">Hover overlay: z-10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Toast Notifications -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🔔 Toast Notifications</h3>
        <div class="relative bg-slate-50 dark:bg-slate-950 rounded-xl p-8 h-48">
          <p class="text-slate-600 dark:text-slate-400">Main content area...</p>
          
          <div class="fixed top-4 right-4 z-50 space-y-2">
            <div class="bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-slide-in">
              <span class="text-xl">✓</span>
              <div>
                <p class="font-semibold text-sm">Success!</p>
                <p class="text-xs opacity-90">Your changes were saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Summary -->
      <div class="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
        <h3 class="text-lg font-semibold text-violet-900 dark:text-violet-100 mb-4">💡 Z-Index Best Practices</h3>
        <ul class="space-y-2 text-sm text-violet-800 dark:text-violet-200">
          <li>✨ Use a consistent scale (0, 10, 20, 30, 40, 50)</li>
          <li>🎯 Reserve z-40+ for modals and overlays</li>
          <li>📱 Use -z-10 for decorative backgrounds</li>
          <li>🔧 Keep z-index values organized and documented</li>
          <li>⚡ Combine with position utilities (relative, absolute, fixed)</li>
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
        category="Tailwind CSS · Layout"
        title="Z-Index & Stacking"
        description="Master element layering and stacking order for complex layouts"
        colorTheme="indigo"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-700 dark:text-indigo-300">
            <div className="relative">
              <SquareStack className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Z-Index & Stacking
          </CardTitle>
          <CardDescription className="text-lg text-indigo-600 dark:text-indigo-400">
            📚 Control which elements appear on top in overlapping layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">📚 Z-Index Scale</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">
                    <code className="font-semibold text-slate-900 dark:text-white">-z-10</code>
                    <span className="text-slate-600 dark:text-slate-400">Behind everything</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                    <code className="font-semibold text-slate-900 dark:text-white">z-0 to z-50</code>
                    <span className="text-slate-600 dark:text-slate-400">Increments of 10</span>
                  </div>
                  <div className="flex justify-between items-center bg-pink-50 dark:bg-pink-900/20 p-2 rounded">
                    <code className="font-semibold text-slate-900 dark:text-white">z-auto</code>
                    <span className="text-slate-600 dark:text-slate-400">Default stacking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">📚</div>
                  <div className="font-bold text-indigo-700 dark:text-indigo-300">Common Uses</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Modals
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Dropdowns
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Tooltips
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
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            1. Z-Index Basics
          </CardTitle>
          <CardDescription>Understanding the z-index scale and layering</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={zIndexBasicsExample}
            title="Z-Index Basics"
            description="Learn z-0 through z-50 and negative values"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <SquareStack className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            2. Stacking Context
          </CardTitle>
          <CardDescription>How elements stack in parent-child relationships</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={stackingContextExample}
            title="Stacking Context"
            description="Modals, dropdowns, and common stacking patterns"
            colorTheme="cyan"
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
            3. Interactive Playground
          </CardTitle>
          <CardDescription>Real-world layering examples</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Z-Index Playground"
            description="Card stacks, floating buttons, and overlays"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Z-Index Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use increments of 10</strong> - Leaves room for in-between values</li>
            <li><strong>Document your scale</strong> - Keep a consistent z-index system</li>
            <li><strong>Reserve high values</strong> - z-40+ for modals and overlays</li>
            <li><strong>Negative for backgrounds</strong> - Use -z-10 for decorative elements</li>
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
              Have a question about Z-Index & Stacking? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I make a modal appear above everything?"`} 
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
