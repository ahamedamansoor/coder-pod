'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Moon, CheckCircle, Play, HelpCircle, Zap, Sun, Monitor } from 'lucide-react';
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

interface DarkModeProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function DarkMode({ onOpenWebPlayground }: DarkModeProps) {
  
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
        topicTitle: 'Dark Mode',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const darkModeBasics = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Basics</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class', // 'media' or 'class'
    }
  </script>
</head>
<body class="bg-white dark:bg-slate-900 min-h-screen p-8 transition-colors">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🌙 Dark Mode Basics
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Enable dark mode with the <code class="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">dark:</code> prefix
      </p>
      
      <!-- Toggle Demo -->
      <div class="mb-8 text-center">
        <button onclick="document.documentElement.classList.toggle('dark')" class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
          Toggle Dark Mode
        </button>
      </div>
      
      <!-- Color Examples -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Background Colors</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div class="text-slate-900 dark:text-white font-semibold mb-2">Card Background</div>
            <code class="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
              bg-white dark:bg-slate-800
            </code>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div class="text-slate-900 dark:text-white font-semibold mb-2">Page Background</div>
            <code class="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
              bg-slate-50 dark:bg-slate-900
            </code>
          </div>
          
          <div class="bg-slate-100 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div class="text-slate-900 dark:text-white font-semibold mb-2">Deep Background</div>
            <code class="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
              bg-slate-100 dark:bg-slate-950
            </code>
          </div>
        </div>
      </div>
      
      <!-- Text Colors -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Text Colors</h3>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
            <p class="text-slate-900 dark:text-white font-semibold mb-1">Primary Text</p>
            <code class="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
              text-slate-900 dark:text-white
            </code>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
            <p class="text-slate-700 dark:text-slate-200 mb-1">Secondary Text</p>
            <code class="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
              text-slate-700 dark:text-slate-200
            </code>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-1">Muted Text</p>
            <code class="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
              text-slate-600 dark:text-slate-400
            </code>
          </div>
        </div>
      </div>
      
      <!-- Border Colors -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Borders</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="border-2 border-slate-200 dark:border-slate-700 p-4 rounded-lg text-center">
            <p class="text-slate-900 dark:text-white text-sm font-semibold">Light Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-slate-200</code>
          </div>
          
          <div class="border-2 border-slate-300 dark:border-slate-600 p-4 rounded-lg text-center">
            <p class="text-slate-900 dark:text-white text-sm font-semibold">Medium Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-slate-300</code>
          </div>
          
          <div class="border-2 border-slate-400 dark:border-slate-500 p-4 rounded-lg text-center">
            <p class="text-slate-900 dark:text-white text-sm font-semibold">Strong Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-slate-400</code>
          </div>
        </div>
      </div>
      
      <!-- Configuration -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">⚙️ Configuration</h3>
        <div class="bg-slate-900 dark:bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <div class="text-gray-500">// tailwind.config.js</div>
          <div class="text-gray-300">module.exports = {</div>
          <div class="text-gray-300">  darkMode: <span class="text-yellow-400">'class'</span>, <span class="text-gray-500">// or 'media'</span></div>
          <div class="text-gray-300">  <span class="text-gray-500">// ... rest of config</span></div>
          <div class="text-gray-300">}</div>
        </div>
        <div class="mt-4 text-sm space-y-2">
          <p class="text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">'class'</strong> - Toggle manually via HTML class
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">'media'</strong> - Uses system preference
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const darkModePatterns = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Patterns</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8 transition-colors">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold text-slate-900 dark:text-white">
          🎨 Dark Mode Patterns
        </h1>
        <button onclick="document.documentElement.classList.toggle('dark')" class="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-slate-900 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>
      </div>
      
      <!-- Cards -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">UI Cards</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:scale-105 transition-transform">
            <div class="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
              🎨
            </div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Design</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Beautiful UI components with dark mode support</p>
          </div>
          
          <div class="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:scale-105 transition-transform">
            <div class="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
              💎
            </div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Premium</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">High-quality dark mode implementation</p>
          </div>
          
          <div class="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:scale-105 transition-transform">
            <div class="w-12 h-12 bg-emerald-500 dark:bg-emerald-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
              🚀
            </div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Launch</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">Ship with confidence in any theme</p>
          </div>
        </div>
      </div>
      
      <!-- Buttons -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            Primary
          </button>
          
          <button class="bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
            Secondary
          </button>
          
          <button class="border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            Outline
          </button>
          
          <button class="text-slate-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            Ghost
          </button>
        </div>
      </div>
      
      <!-- Forms -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Form Inputs</h3>
        <div class="space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Email</label>
            <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Message</label>
            <textarea placeholder="Type your message..." rows="4" class="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent outline-none resize-none transition-all"></textarea>
          </div>
          
          <div class="flex items-center gap-3">
            <input type="checkbox" id="terms" class="w-5 h-5 text-blue-500 border-slate-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-blue-500" />
            <label for="terms" class="text-sm text-slate-700 dark:text-slate-300">I agree to the terms and conditions</label>
          </div>
        </div>
      </div>
      
      <!-- Alerts -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Alerts</h3>
        <div class="space-y-4">
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <div class="text-blue-500 dark:text-blue-400 text-2xl">ℹ️</div>
              <div>
                <h4 class="font-semibold text-blue-900 dark:text-blue-200">Info</h4>
                <p class="text-sm text-blue-800 dark:text-blue-300">This is an informational message</p>
              </div>
            </div>
          </div>
          
          <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <div class="text-green-500 dark:text-green-400 text-2xl">✅</div>
              <div>
                <h4 class="font-semibold text-green-900 dark:text-green-200">Success</h4>
                <p class="text-sm text-green-800 dark:text-green-300">Action completed successfully</p>
              </div>
            </div>
          </div>
          
          <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <div class="text-red-500 dark:text-red-400 text-2xl">⚠️</div>
              <div>
                <h4 class="font-semibold text-red-900 dark:text-red-200">Error</h4>
                <p class="text-sm text-red-800 dark:text-red-300">Something went wrong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Dark Mode Tips</h3>
        <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>✨ Use semantic color names (slate, gray) for better dark mode support</li>
          <li>🎨 Test contrast ratios in both light and dark modes</li>
          <li>📦 Use opacity variants for subtle backgrounds (bg-slate-900/50)</li>
          <li>⚡ Add transition-colors for smooth theme switching</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  const playgroundExample = `<!DOCTYPE html>
<html lang="en" class="">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
</head>
<body class="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8 transition-colors duration-300">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
      <!-- Header with Theme Switcher -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-5xl font-bold text-slate-900 dark:text-white mb-2">
            🎮 Dark Mode Playground
          </h1>
          <p class="text-slate-600 dark:text-slate-300 text-lg">
            Try switching between themes!
          </p>
        </div>
        <div class="flex gap-2">
          <button onclick="document.documentElement.classList.remove('dark')" class="p-4 bg-yellow-100 dark:bg-slate-700 rounded-xl hover:scale-110 transition-transform group">
            <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
          </button>
          <button onclick="document.documentElement.classList.add('dark')" class="p-4 bg-slate-100 dark:bg-indigo-900 rounded-xl hover:scale-110 transition-transform group">
            <svg class="w-6 h-6 text-slate-700 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Dashboard Cards -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">📊 Dashboard Cards</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl p-6 shadow-lg text-white">
            <div class="text-3xl mb-2">👥</div>
            <div class="text-4xl font-bold mb-1">2,543</div>
            <div class="text-blue-100 text-sm">Total Users</div>
          </div>
          
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-xl p-6 shadow-lg text-white">
            <div class="text-3xl mb-2">📈</div>
            <div class="text-4xl font-bold mb-1">$12.5k</div>
            <div class="text-purple-100 text-sm">Revenue</div>
          </div>
          
          <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 rounded-xl p-6 shadow-lg text-white">
            <div class="text-3xl mb-2">⚡</div>
            <div class="text-4xl font-bold mb-1">98.5%</div>
            <div class="text-emerald-100 text-sm">Uptime</div>
          </div>
          
          <div class="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-xl p-6 shadow-lg text-white">
            <div class="text-3xl mb-2">🎯</div>
            <div class="text-4xl font-bold mb-1">456</div>
            <div class="text-orange-100 text-sm">Active Projects</div>
          </div>
        </div>
      </div>
      
      <!-- Content Cards -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">📝 Content Cards</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all group">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Dark Mode Design</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">Create beautiful interfaces that work in any theme</p>
              <button class="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">Read More →</button>
            </div>
          </div>
          
          <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all group">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden">
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Tailwind CSS</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">Utility-first CSS framework with dark mode built-in</p>
              <button class="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">Learn More →</button>
            </div>
          </div>
          
          <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all group">
            <div class="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden">
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Best Practices</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">Tips and tricks for implementing dark mode</p>
              <button class="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline">Explore →</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Interactive Form -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">📝 Form Example</h2>
        <div class="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">First Name</label>
                <input type="text" placeholder="John" class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Last Name</label>
                <input type="text" placeholder="Doe" class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Email</label>
              <input type="email" placeholder="john@example.com" class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Theme Preference</label>
              <select class="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>System Default</option>
              </select>
            </div>
            
            <button type="submit" class="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
              Submit Form
            </button>
          </form>
        </div>
      </div>
      
      <!-- Code Example -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Implementation Tips</h3>
        <div class="bg-slate-900 dark:bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
          <div class="text-gray-500">// Toggle dark mode with JavaScript</div>
          <div class="text-purple-400">document</div><div class="text-gray-300">.documentElement.classList.</div><div class="text-blue-400">toggle</div><div class="text-gray-300">(</div><div class="text-yellow-400">'dark'</div><div class="text-gray-300">);</div>
        </div>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>✨ Use <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">dark:</code> prefix for all theme-specific styles</li>
          <li>🎨 Test contrast in both themes for accessibility</li>
          <li>📦 Store user preference in localStorage</li>
          <li>⚡ Add <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">transition-colors</code> for smooth transitions</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Moon}
        category="Tailwind CSS · Configuration"
        title="Dark Mode"
        description="Implement beautiful dark mode support with the dark: variant"
        colorTheme="slate"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-700 dark:text-slate-300">
            <div className="relative">
              <Moon className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is Dark Mode?
          </CardTitle>
          <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
            🌙 Create interfaces that adapt to light and dark themes
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-slate-400 dark:hover:border-slate-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Two Approaches
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/20 rounded-lg border border-slate-200/50">
                    <Monitor className="w-6 h-6 text-slate-500" />
                    <div>
                      <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Class Mode</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Manual toggle</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200/50">
                    <Sun className="w-6 h-6 text-indigo-500" />
                    <div>
                      <div className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Media Query</div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400">System pref</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 dark:from-slate-900/30 dark:via-gray-900/30 dark:to-zinc-900/30 p-6 rounded-xl border border-slate-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">🌙</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-slate-700 dark:text-slate-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Modern UIs
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Eye comfort
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      User choice
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
              <span className="text-slate-600 dark:text-slate-400 text-sm ml-2">Dark Mode Example</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* 🌙 Add dark mode styles */</div>
              <div className="text-gray-900 dark:text-white">&lt;<span className="text-purple-700 dark:text-purple-400">div</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-yellow-600 dark:text-yellow-400">"bg-white dark:bg-slate-800"</span>&gt;</div>
              <div className="text-gray-900 dark:text-white">  <span className="text-gray-500">/* Adapts to theme */</span></div>
              <div className="text-gray-900 dark:text-white">&lt;/<span className="text-purple-700 dark:text-purple-400">div</span>&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-slate-500/10 rounded-lg">
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </div>
            1. Dark Mode Basics
          </CardTitle>
          <CardDescription>Understanding colors, borders, and configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={darkModeBasics}
            title="Dark Mode Basics"
            description="Toggle, backgrounds, text, borders, and config"
            colorTheme="slate"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Sun className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            2. Dark Mode Patterns
          </CardTitle>
          <CardDescription>Common UI patterns with dark mode support</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={darkModePatterns}
            title="Dark Mode Patterns"
            description="Cards, buttons, forms, alerts with theme support"
            colorTheme="indigo"
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
            3. Dark Mode Playground
          </CardTitle>
          <CardDescription>Complete dark mode implementation showcase</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Dark Mode Playground"
            description="Dashboard, cards, forms with theme switcher"
            colorTheme="blue"
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
        <AlertTitle>Dark Mode Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic colors</strong> - Slate/gray colors adapt better than pure black/white</li>
            <li><strong>Test contrast</strong> - Ensure readability in both themes</li>
            <li><strong>Smooth transitions</strong> - Add transition-colors for theme switching</li>
            <li><strong>Store preference</strong> - Remember user's choice in localStorage</li>
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
              Have a question about Dark Mode? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I implement dark mode with system preference?"`} 
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
