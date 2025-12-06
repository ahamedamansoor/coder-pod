'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Columns, Rows, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
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

export default function Flexbox() {
  
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
        topicTitle: 'Flexbox',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const flexDirectionExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flex Direction & Wrap</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🔄 Flex Direction & Wrap
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control flex container layout direction and wrapping
      </p>
      
      <!-- Flex Row -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Flex Row (Default)</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="flex gap-2 mb-3">
            <div class="bg-cyan-500 text-white px-6 py-4 rounded-lg font-semibold">1</div>
            <div class="bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold">2</div>
            <div class="bg-indigo-500 text-white px-6 py-4 rounded-lg font-semibold">3</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400">class="flex gap-2" (horizontal)</code>
        </div>
      </div>
      
      <!-- Flex Column -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Flex Column</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="flex flex-col gap-2 mb-3">
            <div class="bg-purple-500 text-white px-6 py-4 rounded-lg font-semibold">1</div>
            <div class="bg-pink-500 text-white px-6 py-4 rounded-lg font-semibold">2</div>
            <div class="bg-fuchsia-500 text-white px-6 py-4 rounded-lg font-semibold">3</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400">class="flex flex-col gap-2" (vertical)</code>
        </div>
      </div>
      
      <!-- Flex Wrap -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Flex Wrap</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="flex flex-wrap gap-2 mb-3">
            <div class="bg-emerald-500 text-white px-6 py-4 rounded-lg font-semibold">Item 1</div>
            <div class="bg-teal-500 text-white px-6 py-4 rounded-lg font-semibold">Item 2</div>
            <div class="bg-cyan-500 text-white px-6 py-4 rounded-lg font-semibold">Item 3</div>
            <div class="bg-sky-500 text-white px-6 py-4 rounded-lg font-semibold">Item 4</div>
            <div class="bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold">Item 5</div>
            <div class="bg-indigo-500 text-white px-6 py-4 rounded-lg font-semibold">Item 6</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400">class="flex flex-wrap gap-2" (wraps to new line)</code>
        </div>
      </div>
      
      <!-- Gap Utilities -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Gap Spacing</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">gap-2 (8px)</p>
            <div class="flex gap-2">
              <div class="flex-1 bg-orange-500 text-white p-3 rounded text-center text-sm">A</div>
              <div class="flex-1 bg-orange-500 text-white p-3 rounded text-center text-sm">B</div>
              <div class="flex-1 bg-orange-500 text-white p-3 rounded text-center text-sm">C</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">gap-6 (24px)</p>
            <div class="flex gap-6">
              <div class="flex-1 bg-amber-500 text-white p-3 rounded text-center text-sm">A</div>
              <div class="flex-1 bg-amber-500 text-white p-3 rounded text-center text-sm">B</div>
              <div class="flex-1 bg-amber-500 text-white p-3 rounded text-center text-sm">C</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quick Reference -->
      <div class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
        <h3 class="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-4">💡 Flex Direction</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-cyan-700 dark:text-cyan-300">flex-row</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-cyan-700 dark:text-cyan-300">flex-col</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-cyan-700 dark:text-cyan-300">flex-wrap</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-cyan-700 dark:text-cyan-300">flex-nowrap</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const alignmentExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flex Alignment</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎯 Flex Alignment
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Justify content and align items for perfect layouts
      </p>
      
      <!-- Justify Content -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Justify Content (Main Axis)</h3>
        
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">justify-start</p>
            <div class="flex justify-start gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
              <div class="bg-purple-500 text-white px-4 py-2 rounded">1</div>
              <div class="bg-purple-500 text-white px-4 py-2 rounded">2</div>
              <div class="bg-purple-500 text-white px-4 py-2 rounded">3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">justify-center</p>
            <div class="flex justify-center gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
              <div class="bg-pink-500 text-white px-4 py-2 rounded">1</div>
              <div class="bg-pink-500 text-white px-4 py-2 rounded">2</div>
              <div class="bg-pink-500 text-white px-4 py-2 rounded">3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">justify-between</p>
            <div class="flex justify-between gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
              <div class="bg-fuchsia-500 text-white px-4 py-2 rounded">1</div>
              <div class="bg-fuchsia-500 text-white px-4 py-2 rounded">2</div>
              <div class="bg-fuchsia-500 text-white px-4 py-2 rounded">3</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">justify-around</p>
            <div class="flex justify-around gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
              <div class="bg-violet-500 text-white px-4 py-2 rounded">1</div>
              <div class="bg-violet-500 text-white px-4 py-2 rounded">2</div>
              <div class="bg-violet-500 text-white px-4 py-2 rounded">3</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Align Items -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Align Items (Cross Axis)</h3>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">items-start</p>
            <div class="flex items-start gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg h-32">
              <div class="bg-emerald-500 text-white px-3 py-2 rounded text-sm">A</div>
              <div class="bg-emerald-500 text-white px-3 py-4 rounded text-sm">B</div>
              <div class="bg-emerald-500 text-white px-3 py-2 rounded text-sm">C</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">items-center</p>
            <div class="flex items-center gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg h-32">
              <div class="bg-teal-500 text-white px-3 py-2 rounded text-sm">A</div>
              <div class="bg-teal-500 text-white px-3 py-4 rounded text-sm">B</div>
              <div class="bg-teal-500 text-white px-3 py-2 rounded text-sm">C</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">items-end</p>
            <div class="flex items-end gap-2 bg-white dark:bg-slate-900 p-4 rounded-lg h-32">
              <div class="bg-cyan-500 text-white px-3 py-2 rounded text-sm">A</div>
              <div class="bg-cyan-500 text-white px-3 py-4 rounded text-sm">B</div>
              <div class="bg-cyan-500 text-white px-3 py-2 rounded text-sm">C</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Perfect Centering -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Perfect Centering</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg h-48">
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg">
              Perfectly Centered!
            </div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block text-center">class="flex items-center justify-center"</code>
        </div>
      </div>
      
      <!-- Flex Grow/Shrink -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Flex Grow & Shrink</h3>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">flex-1 (grow to fill space)</p>
            <div class="flex gap-2">
              <div class="flex-1 bg-blue-500 text-white p-3 rounded text-center">Flex 1</div>
              <div class="bg-indigo-500 text-white p-3 rounded">Fixed</div>
              <div class="flex-1 bg-purple-500 text-white p-3 rounded text-center">Flex 1</div>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Different flex values</p>
            <div class="flex gap-2">
              <div class="flex-1 bg-pink-500 text-white p-3 rounded text-center text-sm">flex-1</div>
              <div class="flex-2 bg-fuchsia-500 text-white p-3 rounded text-center text-sm">flex-2 (2x wider)</div>
              <div class="flex-1 bg-purple-500 text-white p-3 rounded text-center text-sm">flex-1</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Alignment Reference -->
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">💡 Quick Reference</h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-semibold text-purple-800 dark:text-purple-200 mb-2">Justify (Main Axis)</p>
            <div class="space-y-1">
              <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-purple-700 dark:text-purple-300">justify-start</code>
              <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-purple-700 dark:text-purple-300">justify-center</code>
              <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-purple-700 dark:text-purple-300">justify-between</code>
            </div>
          </div>
          <div>
            <p class="font-semibold text-pink-800 dark:text-pink-200 mb-2">Align (Cross Axis)</p>
            <div class="space-y-1">
              <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-pink-700 dark:text-pink-300">items-start</code>
              <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-pink-700 dark:text-pink-300">items-center</code>
              <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block text-pink-700 dark:text-pink-300">items-end</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Columns}
        category="Tailwind CSS · Layout"
        title="Flexbox"
        description="Master flexible layouts with direction, alignment, and spacing control"
        colorTheme="cyan"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Rows className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Flexbox System
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🔄 One-dimensional layouts with powerful alignment control
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">🔄 Flexbox Properties</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Direction</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">flex-row, flex-col</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Wrap</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">flex-wrap, flex-nowrap</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Justify</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">justify-start, center, between</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Align</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">items-start, center, end</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🔄</div>
                  <div className="font-bold text-cyan-700 dark:text-cyan-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Navigation bars
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Card layouts
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Centering
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
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Columns className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            1. Flex Direction & Wrap
          </CardTitle>
          <CardDescription>Control layout direction and wrapping behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexDirectionExample}
            title="Flex Direction & Wrap"
            description="Horizontal, vertical, wrapping, and gap utilities"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Rows className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Alignment & Distribution
          </CardTitle>
          <CardDescription>Justify content and align items for perfect layouts</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={alignmentExample}
            title="Flex Alignment"
            description="Justify content, align items, and flex grow/shrink"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Flexbox Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use gap for spacing</strong> - Better than margins for flex items</li>
            <li><strong>justify-between for navigation</strong> - Perfect for headers</li>
            <li><strong>items-center for vertical centering</strong> - Most common pattern</li>
            <li><strong>flex-wrap for responsive</strong> - Allows items to wrap to new lines</li>
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
              Have a question about Flexbox? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I center items with flexbox?"`} 
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
