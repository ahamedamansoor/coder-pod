'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, Maximize, Move, CheckCircle, Sparkles, Zap, HelpCircle } from 'lucide-react';
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

export default function SpacingUtilities() {
  
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
        topicTitle: 'Spacing System',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  // Padding Example
  const paddingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Padding Utilities</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📦 Padding Utilities
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control internal spacing with padding classes
      </p>
      
      <!-- Padding Scale -->
      <div class="space-y-4 mb-8">
        <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg overflow-hidden">
          <div class="bg-blue-500 text-white p-2 text-center font-semibold">
            p-2 (0.5rem / 8px)
          </div>
        </div>
        
        <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg overflow-hidden">
          <div class="bg-blue-500 text-white p-4 text-center font-semibold">
            p-4 (1rem / 16px)
          </div>
        </div>
        
        <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg overflow-hidden">
          <div class="bg-blue-500 text-white p-6 text-center font-semibold">
            p-6 (1.5rem / 24px)
          </div>
        </div>
        
        <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg overflow-hidden">
          <div class="bg-blue-500 text-white p-8 text-center font-semibold">
            p-8 (2rem / 32px)
          </div>
        </div>
      </div>
      
      <!-- Directional Padding -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Horizontal Padding</h3>
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <div class="bg-purple-500 text-white px-8 py-2 text-center font-semibold">
              px-8
            </div>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Left and right padding</p>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Vertical Padding</h3>
          <div class="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
            <div class="bg-emerald-500 text-white px-2 py-8 text-center font-semibold">
              py-8
            </div>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Top and bottom padding</p>
        </div>
      </div>
      
      <!-- Individual Sides -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">Individual Sides</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">pt-4</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">pr-4</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">pb-4</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">pl-4</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Margin Example  
  const marginExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Margin Utilities</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎯 Margin Utilities
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control external spacing between elements
      </p>
      
      <!-- Margin Examples -->
      <div class="bg-slate-100 dark:bg-slate-950 rounded-xl p-6 space-y-4">
        <div class="bg-purple-500 text-white p-4 rounded-lg font-semibold text-center">
          No Margin
        </div>
        
        <div class="bg-purple-500 text-white p-4 rounded-lg font-semibold text-center m-4">
          m-4 (All sides)
        </div>
        
        <div class="bg-purple-500 text-white p-4 rounded-lg font-semibold text-center mx-8">
          mx-8 (Horizontal)
        </div>
        
        <div class="bg-purple-500 text-white p-4 rounded-lg font-semibold text-center my-8">
          my-8 (Vertical)
        </div>
      </div>
      
      <!-- Negative Margin -->
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
          <h3 class="text-lg font-semibold text-pink-900 dark:text-pink-100 mb-4">Positive Margin</h3>
          <div class="space-y-2">
            <div class="bg-pink-500 text-white p-3 rounded font-semibold text-sm">Element 1</div>
            <div class="bg-pink-500 text-white p-3 rounded font-semibold text-sm mt-4">mt-4</div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">Negative Margin</h3>
          <div class="space-y-2">
            <div class="bg-purple-500 text-white p-3 rounded font-semibold text-sm">Element 1</div>
            <div class="bg-purple-500 text-white p-3 rounded font-semibold text-sm -mt-2">-mt-2</div>
          </div>
        </div>
      </div>
      
      <!-- Auto Margin for Centering -->
      <div class="mt-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">Auto Margin (Centering)</h3>
        <div class="bg-purple-500 text-white p-4 rounded-lg font-semibold text-center mx-auto max-w-xs">
          mx-auto (Centered)
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Space Between Example
  const spaceBetweenExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space Between Utilities</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        ↔️ Space Between
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Add consistent spacing between child elements
      </p>
      
      <!-- Vertical Space -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Vertical Spacing (space-y-*)</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
            <div class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">space-y-2</div>
            <div class="space-y-2">
              <div class="bg-emerald-500 text-white p-2 rounded text-sm font-semibold text-center">Item 1</div>
              <div class="bg-emerald-500 text-white p-2 rounded text-sm font-semibold text-center">Item 2</div>
              <div class="bg-emerald-500 text-white p-2 rounded text-sm font-semibold text-center">Item 3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
            <div class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">space-y-4</div>
            <div class="space-y-4">
              <div class="bg-teal-500 text-white p-2 rounded text-sm font-semibold text-center">Item 1</div>
              <div class="bg-teal-500 text-white p-2 rounded text-sm font-semibold text-center">Item 2</div>
              <div class="bg-teal-500 text-white p-2 rounded text-sm font-semibold text-center">Item 3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
            <div class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">space-y-6</div>
            <div class="space-y-6">
              <div class="bg-cyan-500 text-white p-2 rounded text-sm font-semibold text-center">Item 1</div>
              <div class="bg-cyan-500 text-white p-2 rounded text-sm font-semibold text-center">Item 2</div>
              <div class="bg-cyan-500 text-white p-2 rounded text-sm font-semibold text-center">Item 3</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Horizontal Space -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Horizontal Spacing (space-x-*)</h3>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
            <div class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">space-x-4</div>
            <div class="flex space-x-4">
              <div class="bg-emerald-500 text-white px-6 py-3 rounded font-semibold">Item 1</div>
              <div class="bg-emerald-500 text-white px-6 py-3 rounded font-semibold">Item 2</div>
              <div class="bg-emerald-500 text-white px-6 py-3 rounded font-semibold">Item 3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
            <div class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">space-x-8</div>
            <div class="flex space-x-8">
              <div class="bg-teal-500 text-white px-6 py-3 rounded font-semibold">Item 1</div>
              <div class="bg-teal-500 text-white px-6 py-3 rounded font-semibold">Item 2</div>
              <div class="bg-teal-500 text-white px-6 py-3 rounded font-semibold">Item 3</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Spacing Scale Reference -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
        <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-4">💡 Spacing Scale</h3>
        <div class="grid grid-cols-4 md:grid-cols-8 gap-2 text-xs">
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">0</code><span class="text-slate-600 dark:text-slate-400">0px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">1</code><span class="text-slate-600 dark:text-slate-400">4px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">2</code><span class="text-slate-600 dark:text-slate-400">8px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">4</code><span class="text-slate-600 dark:text-slate-400">16px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">6</code><span class="text-slate-600 dark:text-slate-400">24px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">8</code><span class="text-slate-600 dark:text-slate-400">32px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">12</code><span class="text-slate-600 dark:text-slate-400">48px</span></div>
          <div class="text-center"><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">16</code><span class="text-slate-600 dark:text-slate-400">64px</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Box}
        category="Tailwind CSS · Core Concepts"
        title="Spacing System"
        description="Master padding, margin, and space-between utilities for perfect layouts"
        colorTheme="blue"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Move className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Tailwind Spacing System
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🎯 Consistent spacing scale from 0px to 384px for perfect layouts
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  📦 Spacing Scale (4px increments)
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <code className="bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded font-mono text-blue-700 dark:text-blue-300">0</code>
                    <span className="text-slate-600 dark:text-slate-400">→ 0px</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded font-mono text-blue-700 dark:text-blue-300">1</code>
                    <span className="text-slate-600 dark:text-slate-400">→ 4px (0.25rem)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded font-mono text-blue-700 dark:text-blue-300">2</code>
                    <span className="text-slate-600 dark:text-slate-400">→ 8px (0.5rem)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded font-mono text-blue-700 dark:text-blue-300">4</code>
                    <span className="text-slate-600 dark:text-slate-400">→ 16px (1rem)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded font-mono text-blue-700 dark:text-blue-300">8</code>
                    <span className="text-slate-600 dark:text-slate-400">→ 32px (2rem)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  🎨 Spacing Types
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200/50">
                    <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">Padding (p-*)</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Internal spacing</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200/50">
                    <div className="font-semibold text-purple-900 dark:text-purple-100 text-sm mb-1">Margin (m-*)</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">External spacing</div>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200/50">
                    <div className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm mb-1">Space (space-*)</div>
                    <div className="text-xs text-emerald-700 dark:text-emerald-300">Between children</div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200/50">
                    <div className="font-semibold text-amber-900 dark:text-amber-100 text-sm mb-1">Gap (gap-*)</div>
                    <div className="text-xs text-amber-700 dark:text-amber-300">Flex/Grid spacing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">📏</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Why Spacing Matters</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent layouts
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual hierarchy
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Better readability
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Design harmony
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use the spacing scale consistently - stick to 4, 8, 16, 24, 32 for most layouts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PADDING */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Padding Utilities
          </CardTitle>
          <CardDescription>
            Control internal spacing within elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={paddingExample}
            title="Padding Examples"
            description="See how padding creates space inside elements"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* MARGIN */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Maximize className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Margin Utilities
          </CardTitle>
          <CardDescription>
            Control external spacing between elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={marginExample}
            title="Margin Examples"
            description="Create space between elements with margin"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* SPACE BETWEEN */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Move className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Space Between
          </CardTitle>
          <CardDescription>
            Add consistent spacing between child elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={spaceBetweenExample}
            title="Space Between Examples"
            description="Quickly add spacing between children"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Spacing Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use the scale</strong> - Stick to 4, 8, 16, 24, 32, 48, 64 for consistency</li>
            <li><strong>Negative margin</strong> - Use sparingly, mainly for overlapping effects</li>
            <li><strong>Auto margin</strong> - Use mx-auto to center block elements</li>
            <li><strong>Space vs Gap</strong> - Use space-* for direct children, gap-* for flex/grid</li>
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
              Have a question about Spacing System? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "What's the difference between padding and margin?"`} 
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
