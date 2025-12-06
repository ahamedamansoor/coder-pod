'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Square, Circle, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
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

export default function BorderUtilities() {
  
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
      const apiKey = localStorage.getItem('api_key') || '';
      
      const result = await conductInterview({
        languageName: 'Tailwind CSS',
        topicTitle: 'Borders',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const borderExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Border Utilities</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🔲 Border Utilities
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control border width, style, and color
      </p>
      
      <!-- Border Width -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Border Width</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="border border-blue-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">border (1px)</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border</code>
          </div>
          <div class="border-2 border-purple-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">border-2 (2px)</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-2</code>
          </div>
          <div class="border-4 border-pink-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">border-4 (4px)</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-4</code>
          </div>
          <div class="border-8 border-red-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">border-8 (8px)</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-8</code>
          </div>
        </div>
      </div>
      
      <!-- Individual Sides -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Individual Sides</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="border-t-4 border-emerald-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">Top Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-t-4</code>
          </div>
          <div class="border-r-4 border-teal-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">Right Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-r-4</code>
          </div>
          <div class="border-b-4 border-cyan-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">Bottom Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-b-4</code>
          </div>
          <div class="border-l-4 border-sky-500 bg-white dark:bg-slate-900 p-6 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white mb-2">Left Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-l-4</code>
          </div>
        </div>
      </div>
      
      <!-- Border Colors -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Border Colors</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="border-4 border-red-500 bg-white dark:bg-slate-900 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">❤️</div>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-red-500</code>
          </div>
          <div class="border-4 border-blue-500 bg-white dark:bg-slate-900 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">💙</div>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-blue-500</code>
          </div>
          <div class="border-4 border-green-500 bg-white dark:bg-slate-900 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">💚</div>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-green-500</code>
          </div>
          <div class="border-4 border-purple-500 bg-white dark:bg-slate-900 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">💜</div>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-purple-500</code>
          </div>
        </div>
      </div>
      
      <!-- Border Style -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Border Styles</h3>
        <div class="space-y-4">
          <div class="border-4 border-solid border-indigo-500 bg-white dark:bg-slate-900 p-4 rounded-lg">
            <p class="font-semibold text-slate-900 dark:text-white">Solid Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-solid</code>
          </div>
          <div class="border-4 border-dashed border-purple-500 bg-white dark:bg-slate-900 p-4 rounded-lg">
            <p class="font-semibold text-slate-900 dark:text-white">Dashed Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-dashed</code>
          </div>
          <div class="border-4 border-dotted border-pink-500 bg-white dark:bg-slate-900 p-4 rounded-lg">
            <p class="font-semibold text-slate-900 dark:text-white">Dotted Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-dotted</code>
          </div>
          <div class="border-4 border-double border-blue-500 bg-white dark:bg-slate-900 p-4 rounded-lg">
            <p class="font-semibold text-slate-900 dark:text-white">Double Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-double</code>
          </div>
        </div>
      </div>
      
      <!-- Border Reference -->
      <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Border Widths</h3>
        <div class="grid grid-cols-4 md:grid-cols-8 gap-2 text-xs text-center">
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">border-0</code><span class="text-slate-600 dark:text-slate-400">0px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">border</code><span class="text-slate-600 dark:text-slate-400">1px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">border-2</code><span class="text-slate-600 dark:text-slate-400">2px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">border-4</code><span class="text-slate-600 dark:text-slate-400">4px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">border-8</code><span class="text-slate-600 dark:text-slate-400">8px</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const radiusExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Border Radius & Divide</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        ⭕ Border Radius & Divide
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Round corners and divide elements
      </p>
      
      <!-- Border Radius -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Border Radius</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="rounded-none bg-gradient-to-br from-rose-400 to-pink-400 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">None</p>
            <code class="text-xs opacity-90">rounded-none</code>
          </div>
          <div class="rounded bg-gradient-to-br from-pink-400 to-fuchsia-400 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Small</p>
            <code class="text-xs opacity-90">rounded</code>
          </div>
          <div class="rounded-lg bg-gradient-to-br from-fuchsia-400 to-purple-400 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Large</p>
            <code class="text-xs opacity-90">rounded-lg</code>
          </div>
          <div class="rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Full</p>
            <code class="text-xs opacity-90">rounded-full</code>
          </div>
        </div>
      </div>
      
      <!-- Individual Corners -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Individual Corners</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="rounded-tl-3xl bg-rose-500 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Top Left</p>
            <code class="text-xs opacity-90">rounded-tl-3xl</code>
          </div>
          <div class="rounded-tr-3xl bg-pink-500 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Top Right</p>
            <code class="text-xs opacity-90">rounded-tr-3xl</code>
          </div>
          <div class="rounded-br-3xl bg-fuchsia-500 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Bottom Right</p>
            <code class="text-xs opacity-90">rounded-br-3xl</code>
          </div>
          <div class="rounded-bl-3xl bg-purple-500 p-6 text-white text-center shadow-lg">
            <p class="font-semibold mb-2">Bottom Left</p>
            <code class="text-xs opacity-90">rounded-bl-3xl</code>
          </div>
        </div>
      </div>
      
      <!-- Divide Utilities -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Divide Between Elements</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">divide-y (Vertical)</p>
            <div class="divide-y divide-rose-300 dark:divide-rose-700">
              <div class="py-3 text-slate-900 dark:text-white">Item 1</div>
              <div class="py-3 text-slate-900 dark:text-white">Item 2</div>
              <div class="py-3 text-slate-900 dark:text-white">Item 3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">divide-x (Horizontal)</p>
            <div class="flex divide-x divide-pink-300 dark:divide-pink-700">
              <div class="px-4 py-3 text-slate-900 dark:text-white">Item 1</div>
              <div class="px-4 py-3 text-slate-900 dark:text-white">Item 2</div>
              <div class="px-4 py-3 text-slate-900 dark:text-white">Item 3</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Ring Utilities -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Ring (Focus States)</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <button class="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg ring-2 ring-rose-300 dark:ring-rose-700 ring-offset-2 dark:ring-offset-slate-900">
            ring-2
          </button>
          <button class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg ring-4 ring-pink-300 dark:ring-pink-700 ring-offset-2 dark:ring-offset-slate-900">
            ring-4
          </button>
          <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg ring ring-purple-300 dark:ring-purple-700 ring-offset-4 dark:ring-offset-slate-900">
            ring-offset-4
          </button>
        </div>
      </div>
      
      <!-- Radius Scale -->
      <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-rose-200 dark:border-rose-800">
        <h3 class="text-lg font-semibold text-rose-900 dark:text-rose-100 mb-4">💡 Radius Scale</h3>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs text-center">
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">rounded-sm</code><span class="text-slate-600 dark:text-slate-400">2px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">rounded</code><span class="text-slate-600 dark:text-slate-400">4px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">rounded-md</code><span class="text-slate-600 dark:text-slate-400">6px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">rounded-lg</code><span class="text-slate-600 dark:text-slate-400">8px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">rounded-xl</code><span class="text-slate-600 dark:text-slate-400">12px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">rounded-2xl</code><span class="text-slate-600 dark:text-slate-400">16px</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Square}
        category="Tailwind CSS · Core Concepts"
        title="Borders"
        description="Master border width, style, radius, and decorative effects"
        colorTheme="emerald"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-emerald-700 dark:text-emerald-300">
            <div className="relative">
              <Circle className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Border System
          </CardTitle>
          <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
            🔲 Complete border control from width to rounded corners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">🔲 Border Properties</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200/50">
                    <div className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm mb-1">Width</div>
                    <code className="text-xs text-emerald-700 dark:text-emerald-300">border-0 to border-8</code>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg border border-teal-200/50">
                    <div className="font-semibold text-teal-900 dark:text-teal-100 text-sm mb-1">Color</div>
                    <code className="text-xs text-teal-700 dark:text-teal-300">border-color-shade</code>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg border border-cyan-200/50">
                    <div className="font-semibold text-cyan-900 dark:text-cyan-100 text-sm mb-1">Style</div>
                    <code className="text-xs text-cyan-700 dark:text-cyan-300">solid, dashed, dotted</code>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200/50">
                    <div className="font-semibold text-green-900 dark:text-green-100 text-sm mb-1">Radius</div>
                    <code className="text-xs text-green-700 dark:text-green-300">rounded-* to rounded-full</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🔲</div>
                  <div className="font-bold text-emerald-700 dark:text-emerald-300">Use Cases</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Card separation
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Focus states
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual accents
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
              <Square className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            1. Border Width, Color & Style
          </CardTitle>
          <CardDescription>Control border appearance and thickness</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={borderExample}
            title="Border Utilities"
            description="Width, color, style, and individual sides"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <Circle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            2. Border Radius & Divide
          </CardTitle>
          <CardDescription>Rounded corners, divide elements, and ring effects</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={radiusExample}
            title="Radius & Divide"
            description="Round corners and add dividers between elements"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Border Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Subtle borders</strong> - Use border with light colors for most cases</li>
            <li><strong>Rounded corners</strong> - rounded-lg for modern, friendly feel</li>
            <li><strong>Focus rings</strong> - ring-2 ring-offset-2 for accessibility</li>
            <li><strong>Divide utilities</strong> - Better than individual borders for lists</li>
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
              Have a question about Borders? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I create a focus ring?"`} 
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
