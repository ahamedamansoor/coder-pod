'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Eye, CheckCircle, Play, HelpCircle, Zap, Droplet, Layers } from 'lucide-react';
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

interface OpacityBlendingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function OpacityBlending({ onOpenWebPlayground }: OpacityBlendingProps = {}) {
  
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
        topicTitle: 'Opacity & Blending',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const opacityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Opacity</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        👁️ Opacity Control
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control transparency with opacity utilities
      </p>
      
      <!-- Opacity Scale -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Opacity Scale (0-100)</h3>
        <div class="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8">
          <div class="grid grid-cols-5 gap-4">
            <div class="text-center">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-lg opacity-0">
                <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto"></div>
              </div>
              <p class="text-white mt-2 text-sm font-semibold">opacity-0</p>
              <p class="text-white text-xs">Invisible</p>
            </div>
            
            <div class="text-center">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-lg opacity-25">
                <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto"></div>
              </div>
              <p class="text-white mt-2 text-sm font-semibold">opacity-25</p>
              <p class="text-white text-xs">25%</p>
            </div>
            
            <div class="text-center">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-lg opacity-50">
                <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto"></div>
              </div>
              <p class="text-white mt-2 text-sm font-semibold">opacity-50</p>
              <p class="text-white text-xs">50%</p>
            </div>
            
            <div class="text-center">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-lg opacity-75">
                <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto"></div>
              </div>
              <p class="text-white mt-2 text-sm font-semibold">opacity-75</p>
              <p class="text-white text-xs">75%</p>
            </div>
            
            <div class="text-center">
              <div class="bg-white dark:bg-slate-900 p-6 rounded-lg opacity-100">
                <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto"></div>
              </div>
              <p class="text-white mt-2 text-sm font-semibold">opacity-100</p>
              <p class="text-white text-xs">Solid</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Hover Opacity -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Hover Effects</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative overflow-hidden rounded-xl group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop" alt="Abstract" class="w-full h-48 object-cover transition-opacity group-hover:opacity-50" />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
              <span class="text-white font-bold text-lg">Hover Me</span>
            </div>
          </div>
          
          <div class="relative overflow-hidden rounded-xl group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop" alt="Workspace" class="w-full h-48 object-cover transition-opacity group-hover:opacity-30" />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-white font-bold text-lg drop-shadow-lg">Reveal Text</span>
            </div>
          </div>
          
          <div class="relative overflow-hidden rounded-xl group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Tech" class="w-full h-48 object-cover transition-opacity group-hover:opacity-20" />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button class="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">Click Me</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Opacity in UI -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">UI Elements with Opacity</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl">
            <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-4">Disabled States</h4>
            <div class="space-y-3">
              <button class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Active Button
              </button>
              <button class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold opacity-50 cursor-not-allowed">
                Disabled Button
              </button>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl">
            <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-4">Loading States</h4>
            <div class="space-y-3">
              <div class="bg-white dark:bg-slate-900 p-4 rounded-lg">
                <p class="text-slate-900 dark:text-white">Content loaded</p>
              </div>
              <div class="bg-white dark:bg-slate-900 p-4 rounded-lg opacity-50 animate-pulse">
                <p class="text-slate-900 dark:text-white">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fine-grained Opacity -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Fine-grained Control</h3>
        <div class="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-8">
          <div class="grid grid-cols-10 gap-2">
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-10"></div>
              <p class="text-white text-xs mt-1">10</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-20"></div>
              <p class="text-white text-xs mt-1">20</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-30"></div>
              <p class="text-white text-xs mt-1">30</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-40"></div>
              <p class="text-white text-xs mt-1">40</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-50"></div>
              <p class="text-white text-xs mt-1">50</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-60"></div>
              <p class="text-white text-xs mt-1">60</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-70"></div>
              <p class="text-white text-xs mt-1">70</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-80"></div>
              <p class="text-white text-xs mt-1">80</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-90"></div>
              <p class="text-white text-xs mt-1">90</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded p-2 opacity-100"></div>
              <p class="text-white text-xs mt-1">100</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Opacity Classes</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Common Values</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-blue-700 dark:text-blue-300">opacity-0 to opacity-100</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-blue-700 dark:text-blue-300">Step by 5 (0, 5, 10, ..., 100)</code>
          </div>
          <div>
            <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Hover States</p>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-1 text-indigo-700 dark:text-indigo-300">hover:opacity-*</code>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-indigo-700 dark:text-indigo-300">group-hover:opacity-*</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const blendingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blend Modes</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎨 Blend Modes
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Mix colors and elements creatively
      </p>
      
      <!-- Background Blend Modes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Background Blend Modes</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative h-48 rounded-xl overflow-hidden" style="background-image: linear-gradient(45deg, #667eea 0%, #764ba2 100%), url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop'); background-blend-mode: multiply;">
            <div class="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
              <code class="text-xs font-semibold text-purple-700">multiply</code>
            </div>
          </div>
          
          <div class="relative h-48 rounded-xl overflow-hidden" style="background-image: linear-gradient(45deg, #f093fb 0%, #f5576c 100%), url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop'); background-blend-mode: screen;">
            <div class="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
              <code class="text-xs font-semibold text-pink-700">screen</code>
            </div>
          </div>
          
          <div class="relative h-48 rounded-xl overflow-hidden" style="background-image: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'); background-blend-mode: overlay;">
            <div class="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
              <code class="text-xs font-semibold text-blue-700">overlay</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mix Blend Modes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Mix Blend Modes</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="relative bg-gradient-to-br from-blue-500 to-purple-500 h-32 rounded-xl flex items-center justify-center">
            <div class="text-white text-4xl font-bold mix-blend-multiply">TEXT</div>
          </div>
          
          <div class="relative bg-gradient-to-br from-pink-500 to-rose-500 h-32 rounded-xl flex items-center justify-center">
            <div class="text-white text-4xl font-bold mix-blend-screen">TEXT</div>
          </div>
          
          <div class="relative bg-gradient-to-br from-emerald-500 to-teal-500 h-32 rounded-xl flex items-center justify-center">
            <div class="text-white text-4xl font-bold mix-blend-overlay">TEXT</div>
          </div>
          
          <div class="relative bg-gradient-to-br from-orange-500 to-red-500 h-32 rounded-xl flex items-center justify-center">
            <div class="text-white text-4xl font-bold mix-blend-difference">TEXT</div>
          </div>
        </div>
      </div>
      
      <!-- Creative Examples -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Creative Effects</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-8 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-orange-500 mix-blend-multiply opacity-70"></div>
            <div class="relative z-10 text-center">
              <h4 class="text-2xl font-bold text-white mb-2">Double Gradients</h4>
              <p class="text-white/90 text-sm">Multiply blend mode</p>
            </div>
          </div>
          
          <div class="relative bg-black rounded-xl p-8 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 mix-blend-screen"></div>
            <div class="relative z-10 text-center">
              <h4 class="text-2xl font-bold text-white mb-2">Glowing Effect</h4>
              <p class="text-white/90 text-sm">Screen blend mode</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- All Blend Modes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">All Blend Modes</h3>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-3">
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-normal"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">normal</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-multiply"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">multiply</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-screen"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">screen</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-overlay"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">overlay</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-darken"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">darken</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-lighten"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">lighten</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-color-dodge"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">color-dodge</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-color-burn"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">color-burn</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-hard-light"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">hard-light</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-soft-light"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">soft-light</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-difference"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">difference</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-exclusion"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">exclusion</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-hue"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">hue</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-saturation"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">saturation</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg">
            <div class="bg-cyan-500 h-12 rounded mix-blend-color"></div>
            <p class="text-center text-xs mt-2 font-semibold text-white">color</p>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">💡 Blend Mode Tips</h3>
        <ul class="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <li>✨ <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">mix-blend-*</code> - Blends element with content behind it</li>
          <li>🎨 <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">bg-blend-*</code> - Blends background layers together</li>
          <li>🔥 <strong>multiply</strong> - Darkens, great for shadows and overlays</li>
          <li>✨ <strong>screen</strong> - Lightens, perfect for glowing effects</li>
          <li>🎯 <strong>overlay</strong> - Combines multiply and screen</li>
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
  <title>Opacity & Blending Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        🎮 Opacity & Blending Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-12 text-lg">
        Interactive showcase of opacity and blend modes
      </p>
      
      <!-- Glass Morphism Cards -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🪟 Glass Morphism</h2>
        <div class="relative bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-2xl p-12">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <h3 class="text-xl font-bold text-white mb-2">Light Glass</h3>
              <p class="text-white/80 text-sm">opacity-10 with blur</p>
            </div>
            
            <div class="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all">
              <h3 class="text-xl font-bold text-white mb-2">Medium Glass</h3>
              <p class="text-white/90 text-sm">opacity-20 with blur</p>
            </div>
            
            <div class="bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl p-6 hover:bg-white/40 transition-all">
              <h3 class="text-xl font-bold text-white mb-2">Strong Glass</h3>
              <p class="text-white/95 text-sm">opacity-30 with blur</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Overlay Effects -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🖼️ Image Overlays</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group relative overflow-hidden rounded-xl cursor-pointer">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop" alt="Abstract" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-6 left-6 right-6">
                <h3 class="text-white font-bold text-xl mb-2">Gradient Overlay</h3>
                <p class="text-white/90 text-sm">Hover to reveal</p>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-xl cursor-pointer">
            <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop" alt="Workspace" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all">
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-xl cursor-pointer">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Tech" class="w-full h-64 object-cover group-hover:opacity-20 transition-opacity duration-500" />
            <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 class="text-slate-900 dark:text-white font-bold text-2xl mb-4">Fade Out</h3>
              <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Blend Mode Typography -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">✨ Blend Mode Typography</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl p-12 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tl from-yellow-400 to-orange-500 mix-blend-multiply opacity-80"></div>
            <h3 class="relative text-6xl font-black text-white text-center">
              MULTIPLY
            </h3>
          </div>
          
          <div class="relative bg-slate-900 rounded-xl p-12 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 mix-blend-screen"></div>
            <h3 class="relative text-6xl font-black text-white text-center">
              SCREEN
            </h3>
          </div>
        </div>
      </div>
      
      <!-- Notification Badges -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🔔 UI Components with Opacity</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="relative inline-block">
            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Messages
            </button>
            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              5
            </span>
          </div>
          
          <div class="relative inline-block">
            <button class="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
              Notifications
            </button>
            <span class="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              12
            </span>
          </div>
          
          <button class="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold opacity-100 hover:opacity-90 transition-opacity">
            Active
          </button>
          
          <button class="w-full bg-slate-400 text-white px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>
      
      <!-- Loading States -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">⏳ Loading States</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
            <div class="space-y-3 animate-pulse">
              <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded opacity-70"></div>
              <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded opacity-50 w-5/6"></div>
              <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded opacity-30 w-4/6"></div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
            <div class="flex items-center space-x-4">
              <div class="rounded-full bg-slate-300 dark:bg-slate-700 h-12 w-12 opacity-50 animate-pulse"></div>
              <div class="flex-1 space-y-2">
                <div class="h-3 bg-slate-300 dark:bg-slate-700 rounded opacity-60"></div>
                <div class="h-3 bg-slate-300 dark:bg-slate-700 rounded opacity-40 w-5/6"></div>
              </div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
            <div class="grid grid-cols-3 gap-2">
              <div class="h-20 bg-slate-300 dark:bg-slate-700 rounded opacity-70 animate-pulse"></div>
              <div class="h-20 bg-slate-300 dark:bg-slate-700 rounded opacity-50 animate-pulse" style="animation-delay: 0.1s;"></div>
              <div class="h-20 bg-slate-300 dark:bg-slate-700 rounded opacity-30 animate-pulse" style="animation-delay: 0.2s;"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Design Tips</h3>
        <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>🪟 Use opacity with backdrop-blur for glass morphism effects</li>
          <li>🎨 Combine opacity with transitions for smooth hover effects</li>
          <li>📦 Use blend modes to create unique color combinations</li>
          <li>⚡ opacity-50 is perfect for disabled states</li>
          <li>✨ Experiment with mix-blend-multiply for rich overlays</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Eye}
        category="Tailwind CSS · Effects"
        title="Opacity & Blending"
        description="Control transparency and mix colors with opacity and blend modes"
        colorTheme="blue"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Eye className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is Opacity & Blending?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            👁️ Control visibility and create unique color combinations
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Two Powerful Tools
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Droplet className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Opacity</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Transparency</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <div className="w-6 h-6 relative">
                      <div className="absolute inset-0 bg-purple-500 rounded"></div>
                      <div className="absolute inset-0 bg-pink-500 rounded mix-blend-multiply"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Blend Modes</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Color mixing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">👁️</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Glass effects
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Overlays
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Creative designs
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
              <span className="text-slate-600 dark:text-slate-400 text-sm ml-2">Opacity Example</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* 👁️ Control transparency */</div>
              <div className="text-gray-900 dark:text-white">&lt;<span className="text-purple-700 dark:text-purple-400">div</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-yellow-600 dark:text-yellow-400">"opacity-50"</span>&gt;</div>
              <div className="text-gray-900 dark:text-white">  Semi-transparent</div>
              <div className="text-gray-900 dark:text-white">&lt;/<span className="text-purple-700 dark:text-purple-400">div</span>&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Droplet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Opacity Control
          </CardTitle>
          <CardDescription>Adjust element transparency from 0 to 100</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={opacityExample}
            title="Opacity"
            description="Opacity scale, hover effects, UI states, fine-grained control"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Blend Modes
          </CardTitle>
          <CardDescription>Mix colors creatively with blend modes</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={blendingExample}
            title="Blend Modes"
            description="Background blend, mix blend, all 15+ blend modes"
            colorTheme="purple"
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
            3. Opacity & Blending Playground
          </CardTitle>
          <CardDescription>Interactive showcase of opacity and blend effects</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Opacity & Blending Playground"
            description="Glass morphism, overlays, typography, UI components"
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
        <AlertTitle>Opacity & Blending Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Glass morphism</strong> - Combine opacity with backdrop-blur for modern UI</li>
            <li><strong>Disabled states</strong> - Use opacity-50 for inactive elements</li>
            <li><strong>Overlays</strong> - Use opacity on backgrounds for readable text</li>
            <li><strong>Blend modes</strong> - Experiment to find unique color combinations</li>
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
              Have a question about Opacity & Blending? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I create a glass morphism effect?"`} 
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
