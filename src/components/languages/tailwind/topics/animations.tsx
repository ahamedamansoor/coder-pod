'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Film, Sparkles, CheckCircle, Play, HelpCircle, Zap } from 'lucide-react';
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

interface AnimationsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Animations({ onOpenWebPlayground }: AnimationsProps = {}) {
  
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
        topicTitle: 'Animations',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const builtInAnimations = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Built-in Animations</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎬 Built-in Animations
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Tailwind's pre-built animation utilities
      </p>
      
      <!-- Spin -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">⚡ Animate Spin</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Loading Spinner</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-spin</code>
          </div>
          <div class="bg-purple-100 dark:bg-purple-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-16 h-16 text-purple-500 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">SVG Spinner</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-spin</code>
          </div>
          <div class="bg-pink-100 dark:bg-pink-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg animate-spin"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Box Spin</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-spin</code>
          </div>
        </div>
      </div>
      
      <!-- Pulse -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">💓 Animate Pulse</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-red-100 dark:bg-red-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="w-16 h-16 bg-red-500 rounded-full animate-pulse"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Circle Pulse</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-pulse</code>
          </div>
          <div class="bg-orange-100 dark:bg-orange-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="flex gap-2">
              <div class="w-3 h-16 bg-orange-500 rounded animate-pulse"></div>
              <div class="w-3 h-16 bg-orange-500 rounded animate-pulse" style="animation-delay: 0.1s;"></div>
              <div class="w-3 h-16 bg-orange-500 rounded animate-pulse" style="animation-delay: 0.2s;"></div>
              <div class="w-3 h-16 bg-orange-500 rounded animate-pulse" style="animation-delay: 0.3s;"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Audio Bars</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-pulse</code>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900/30 p-8 rounded-xl flex flex-col items-center">
            <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg animate-pulse">
              Loading...
            </button>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Button Pulse</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-pulse</code>
          </div>
        </div>
      </div>
      
      <!-- Bounce -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">🎾 Animate Bounce</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-green-100 dark:bg-green-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Ball Bounce</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-bounce</code>
          </div>
          <div class="bg-teal-100 dark:bg-teal-900/30 p-8 rounded-xl flex flex-col items-center">
            <svg class="w-16 h-16 text-teal-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Scroll Down</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-bounce</code>
          </div>
          <div class="bg-cyan-100 dark:bg-cyan-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="text-4xl animate-bounce">👆</div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Emoji Bounce</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-bounce</code>
          </div>
        </div>
      </div>
      
      <!-- Ping -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">📡 Animate Ping</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-indigo-100 dark:bg-indigo-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="relative">
              <div class="w-16 h-16 bg-indigo-500 rounded-full"></div>
              <div class="absolute inset-0 bg-indigo-500 rounded-full animate-ping"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Radar Ping</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-ping</code>
          </div>
          <div class="bg-violet-100 dark:bg-violet-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="relative inline-block">
              <button class="bg-violet-500 text-white px-4 py-2 rounded-lg">
                Messages
              </button>
              <span class="absolute -top-1 -right-1 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Notification</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-ping</code>
          </div>
          <div class="bg-purple-100 dark:bg-purple-900/30 p-8 rounded-xl flex flex-col items-center">
            <div class="relative">
              <div class="w-4 h-4 bg-green-500 rounded-full"></div>
              <div class="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">Online Status</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-ping</code>
          </div>
        </div>
      </div>
      
      <!-- Reference -->
      <div class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
        <h3 class="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-4">💡 Built-in Animations</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2 text-cyan-700 dark:text-cyan-300">animate-spin</code>
            <p class="text-cyan-600 dark:text-cyan-400 text-xs mb-3">Linear infinite rotation (1s)</p>
          </div>
          <div>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2 text-blue-700 dark:text-blue-300">animate-pulse</code>
            <p class="text-blue-600 dark:text-blue-400 text-xs mb-3">Fade in/out effect (2s)</p>
          </div>
          <div>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2 text-indigo-700 dark:text-indigo-300">animate-bounce</code>
            <p class="text-indigo-600 dark:text-indigo-400 text-xs mb-3">Bounce up and down (1s)</p>
          </div>
          <div>
            <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2 text-purple-700 dark:text-purple-300">animate-ping</code>
            <p class="text-purple-600 dark:text-purple-400 text-xs mb-3">Ping radar effect (1s)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const customAnimations = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Animations</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' },
            },
            shake: {
              '0%, 100%': { transform: 'translateX(0)' },
              '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
              '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
            },
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideIn: {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(0)' },
            },
          },
          animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
            shake: 'shake 0.5s ease-in-out',
            fadeIn: 'fadeIn 0.5s ease-out',
            slideIn: 'slideIn 0.5s ease-out',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎨 Custom Animations
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Create your own animations with keyframes
      </p>
      
      <!-- Custom Animations Grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl">
          <div class="flex flex-col items-center">
            <div class="text-6xl animate-wiggle">👋</div>
            <p class="text-lg font-semibold text-slate-900 dark:text-white mt-4">Wiggle</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-wiggle</code>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-xl">
          <div class="flex flex-col items-center">
            <button class="bg-purple-500 hover:animate-shake text-white px-6 py-3 rounded-lg font-semibold">
              Hover to Shake
            </button>
            <p class="text-lg font-semibold text-slate-900 dark:text-white mt-4">Shake</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-shake</code>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-8 rounded-xl">
          <div class="flex flex-col items-center">
            <div class="bg-green-500 text-white px-6 py-3 rounded-lg animate-fadeIn">
              Fade In Effect
            </div>
            <p class="text-lg font-semibold text-slate-900 dark:text-white mt-4">Fade In</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-fadeIn</code>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-8 rounded-xl overflow-hidden">
          <div class="flex flex-col items-center">
            <div class="bg-orange-500 text-white px-6 py-3 rounded-lg animate-slideIn">
              Slide In Effect
            </div>
            <p class="text-lg font-semibold text-slate-900 dark:text-white mt-4">Slide In</p>
            <code class="text-xs mt-2 bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-slideIn</code>
          </div>
        </div>
      </div>
      
      <!-- Code Example -->
      <div class="bg-slate-900 rounded-xl p-6 mb-8">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <span class="text-slate-400 text-sm ml-2">tailwind.config.js</span>
        </div>
        <pre class="text-sm text-slate-300 font-mono overflow-x-auto"><code><span class="text-purple-400">module.exports</span> = {
  <span class="text-blue-400">theme</span>: {
    <span class="text-blue-400">extend</span>: {
      <span class="text-green-400">keyframes</span>: {
        <span class="text-yellow-400">wiggle</span>: {
          <span class="text-pink-400">'0%, 100%'</span>: { <span class="text-cyan-400">transform</span>: <span class="text-orange-400">'rotate(-3deg)'</span> },
          <span class="text-pink-400">'50%'</span>: { <span class="text-cyan-400">transform</span>: <span class="text-orange-400">'rotate(3deg)'</span> },
        }
      },
      <span class="text-green-400">animation</span>: {
        <span class="text-yellow-400">wiggle</span>: <span class="text-orange-400">'wiggle 1s ease-in-out infinite'</span>,
      }
    }
  }
}</code></pre>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">💡 Creating Custom Animations</h3>
        <ol class="space-y-2 text-sm text-purple-800 dark:text-purple-200 list-decimal list-inside">
          <li>Define keyframes in <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">tailwind.config.js</code></li>
          <li>Add animation to the extend section with duration and easing</li>
          <li>Use with <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-[name]</code> class</li>
          <li>Combine with hover/focus states for interactive effects</li>
        </ol>
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
  <title>Animations Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            },
            slideInRight: {
              '0%': { transform: 'translateX(100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
            glow: {
              '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
              '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 1)' },
            },
          },
          animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
            float: 'float 3s ease-in-out infinite',
            slideInRight: 'slideInRight 0.5s ease-out',
            glow: 'glow 2s ease-in-out infinite',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        🎮 Animations Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-12 text-lg">
        Interactive showcase of Tailwind CSS animations
      </p>
      
      <!-- Hero Cards with Animations -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="group bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <div class="flex flex-col items-center text-white">
            <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:animate-spin">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Spin on Hover</h3>
            <p class="text-sm text-center opacity-90">Hover to see icon spin</p>
          </div>
        </div>
        
        <div class="group bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <div class="flex flex-col items-center text-white">
            <div class="relative mb-4">
              <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-pulse">
                <span class="text-3xl">💜</span>
              </div>
              <span class="absolute -top-1 -right-1 flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>
            </div>
            <h3 class="text-xl font-bold mb-2">Pulse & Ping</h3>
            <p class="text-sm text-center opacity-90">Hover for pulse effect</p>
          </div>
        </div>
        
        <div class="group bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <div class="flex flex-col items-center text-white">
            <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
              <span class="text-3xl">🚀</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Bounce Effect</h3>
            <p class="text-sm text-center opacity-90">Hover to see bounce</p>
          </div>
        </div>
      </div>
      
      <!-- Loading States -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">⏳ Loading States</h2>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl flex flex-col items-center">
            <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p class="text-sm text-slate-600 dark:text-slate-400">Spinner</p>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl flex flex-col items-center">
            <div class="flex gap-2 mb-3">
              <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
              <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
              <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">Dots</p>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl flex flex-col items-center">
            <div class="space-y-2 w-full mb-3">
              <div class="h-2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              <div class="h-2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
              <div class="h-2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">Skeleton</p>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl flex flex-col items-center">
            <div class="relative w-12 h-12 mb-3">
              <div class="absolute inset-0 border-4 border-pink-200 dark:border-pink-900 rounded-full"></div>
              <div class="absolute inset-0 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">Ring</p>
          </div>
        </div>
      </div>
      
      <!-- Notification Examples -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🔔 Notifications</h2>
        <div class="space-y-4">
          <div class="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded animate-slideInRight">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-semibold text-green-800 dark:text-green-200">Success! Your changes have been saved.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded animate-slideInRight" style="animation-delay: 0.1s;">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-blue-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-semibold text-blue-800 dark:text-blue-200">New update available!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Button Gallery -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🎨 Animated Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg">
            Scale on Hover
          </button>
          
          <button class="relative bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg overflow-hidden group">
            <span class="relative z-10">Slide Effect</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
          
          <button class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg hover:animate-pulse">
            Pulse Button
          </button>
          
          <button class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg hover:animate-bounce">
            Bounce Button
          </button>
          
          <button class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:animate-wiggle">
            Wiggle Button
          </button>
          
          <button class="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg animate-glow">
            Glowing Effect
          </button>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Animation Best Practices</h3>
        <ul class="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <li>✨ Use animations purposefully - don't overdo it</li>
          <li>⚡ Keep animations under 1 second for better UX</li>
          <li>🎯 Use <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">animate-[name]</code> on interactive elements</li>
          <li>🔄 Combine with transitions for smooth effects</li>
          <li>📱 Consider reduced-motion preference for accessibility</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Film}
        category="Tailwind CSS · Effects"
        title="Animations"
        description="Bring your UI to life with built-in and custom animations"
        colorTheme="cyan"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Film className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are Animations?
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🎬 Add motion and life to your interfaces with smooth, performant animations
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Animation Types
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Spin</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Loading</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <div className="w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Pulse</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Attention</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Bounce</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Playful</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                    <div className="relative w-8 h-8">
                      <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Ping</div>
                      <div className="text-xs text-pink-600 dark:text-pink-400">Notifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">🎬</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Loading states
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      User feedback
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual interest
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
              <span className="text-slate-600 dark:text-slate-400 text-sm ml-2">Animation Example</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* 🎬 Built-in animation */</div>
              <div className="text-gray-900 dark:text-white">&lt;<span className="text-purple-700 dark:text-purple-400">div</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-yellow-600 dark:text-yellow-400">"animate-spin"</span>&gt;</div>
              <div className="text-gray-900 dark:text-white">  Loading...</div>
              <div className="text-gray-900 dark:text-white">&lt;/<span className="text-purple-700 dark:text-purple-400">div</span>&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            1. Built-in Animations
          </CardTitle>
          <CardDescription>Pre-built animation utilities ready to use</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={builtInAnimations}
            title="Built-in Animations"
            description="Spin, pulse, bounce, and ping animations"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Film className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Custom Animations
          </CardTitle>
          <CardDescription>Create your own animations with keyframes</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={customAnimations}
            title="Custom Animations"
            description="Wiggle, shake, fade, and slide effects"
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
            3. Animations Playground
          </CardTitle>
          <CardDescription>Interactive showcase of animation effects</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Animations Playground"
            description="Loading states, notifications, buttons with animations"
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
        <AlertTitle>Animation Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Keep it subtle</strong> - Animations should enhance, not distract</li>
            <li><strong>Performance matters</strong> - Use GPU-accelerated properties (transform, opacity)</li>
            <li><strong>Duration sweet spot</strong> - Most animations work best under 500ms</li>
            <li><strong>Accessibility</strong> - Respect prefers-reduced-motion media query</li>
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
              Have a question about Animations? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I create a loading spinner?"`} 
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
