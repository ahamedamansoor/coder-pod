'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Maximize2, Minimize2, Square, CheckCircle, Sparkles, Zap, HelpCircle } from 'lucide-react';
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

export default function SizingUtilities() {
  
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
        topicTitle: 'Sizing',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const widthHeightExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Width & Height</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📐 Width & Height
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control element dimensions with size utilities
      </p>
      
      <!-- Fixed Sizes -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Fixed Sizes</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-400 rounded-lg mx-auto flex items-center justify-center text-white font-bold shadow-lg">
              16
            </div>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">w-16 h-16<br/>4rem / 64px</p>
          </div>
          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-lg mx-auto flex items-center justify-center text-white font-bold shadow-lg">
              24
            </div>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">w-24 h-24<br/>6rem / 96px</p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-fuchsia-400 to-pink-400 rounded-lg mx-auto flex items-center justify-center text-white font-bold shadow-lg">
              32
            </div>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">w-32 h-32<br/>8rem / 128px</p>
          </div>
          <div class="text-center">
            <div class="w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg mx-auto flex items-center justify-center text-white font-bold shadow-lg">
              40
            </div>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">w-40 h-40<br/>10rem / 160px</p>
          </div>
        </div>
      </div>
      
      <!-- Percentage Sizes -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Percentage Widths</h3>
        <div class="space-y-3">
          <div class="w-1/2 bg-violet-500 text-white p-4 rounded-lg font-semibold text-center shadow-lg">
            w-1/2 (50%)
          </div>
          <div class="w-2/3 bg-purple-500 text-white p-4 rounded-lg font-semibold text-center shadow-lg">
            w-2/3 (66.67%)
          </div>
          <div class="w-3/4 bg-fuchsia-500 text-white p-4 rounded-lg font-semibold text-center shadow-lg">
            w-3/4 (75%)
          </div>
          <div class="w-full bg-pink-500 text-white p-4 rounded-lg font-semibold text-center shadow-lg">
            w-full (100%)
          </div>
        </div>
      </div>
      
      <!-- Viewport Units -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Viewport Units</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800">
            <h4 class="font-semibold text-violet-900 dark:text-violet-100 mb-2">Width</h4>
            <div class="space-y-2 text-sm">
              <code class="block bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">w-screen (100vw)</code>
              <code class="block bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">w-svw (100svw)</code>
            </div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">Height</h4>
            <div class="space-y-2 text-sm">
              <code class="block bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">h-screen (100vh)</code>
              <code class="block bg-white dark:bg-slate-900 px-3 py-2 rounded text-purple-700 dark:text-purple-300">h-svh (100svh)</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Size Reference -->
      <div class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
        <h3 class="text-lg font-semibold text-violet-900 dark:text-violet-100 mb-4">💡 Common Sizes</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-px</code><span class="text-slate-600 dark:text-slate-400">1px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-0.5</code><span class="text-slate-600 dark:text-slate-400">2px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-1</code><span class="text-slate-600 dark:text-slate-400">4px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-2</code><span class="text-slate-600 dark:text-slate-400">8px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-4</code><span class="text-slate-600 dark:text-slate-400">16px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-8</code><span class="text-slate-600 dark:text-slate-400">32px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-16</code><span class="text-slate-600 dark:text-slate-400">64px</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-2 py-1 rounded block">w-32</code><span class="text-slate-600 dark:text-slate-400">128px</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const minMaxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Min/Max Sizing</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        ⚖️ Min/Max Constraints
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Set minimum and maximum size constraints for responsive layouts
      </p>
      
      <!-- Min Width -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Minimum Width</h3>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">min-w-0 (No minimum)</p>
            <div class="min-w-0 bg-cyan-500 text-white p-3 rounded inline-block">
              Content
            </div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">min-w-full (100%)</p>
            <div class="min-w-full bg-blue-500 text-white p-3 rounded text-center">
              Full Width Content
            </div>
          </div>
        </div>
      </div>
      
      <!-- Max Width -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Maximum Width</h3>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">max-w-sm (24rem / 384px)</p>
            <div class="max-w-sm bg-cyan-500 text-white p-4 rounded mx-auto text-center">
              Small Container
            </div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">max-w-md (28rem / 448px)</p>
            <div class="max-w-md bg-blue-500 text-white p-4 rounded mx-auto text-center">
              Medium Container
            </div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">max-w-lg (32rem / 512px)</p>
            <div class="max-w-lg bg-indigo-500 text-white p-4 rounded mx-auto text-center">
              Large Container
            </div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">max-w-prose (65ch)</p>
            <div class="max-w-prose bg-purple-500 text-white p-4 rounded mx-auto">
              Ideal for readable text content. This class limits the width to approximately 65 characters for optimal readability.
            </div>
          </div>
        </div>
      </div>
      
      <!-- Min/Max Height -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
          <h3 class="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-4">Min Height</h3>
          <div class="space-y-3 text-sm">
            <div class="min-h-24 bg-cyan-500 text-white p-3 rounded flex items-center justify-center">
              min-h-24
            </div>
            <div class="min-h-32 bg-cyan-600 text-white p-3 rounded flex items-center justify-center">
              min-h-32
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Max Height</h3>
          <div class="space-y-3 text-sm">
            <div class="max-h-24 bg-blue-500 text-white p-3 rounded overflow-auto">
              max-h-24: This content will scroll if it exceeds 6rem (96px) in height. Add more content to see scrolling.
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
        icon={Maximize2}
        category="Tailwind CSS · Core Concepts"
        title="Sizing"
        description="Control width, height, min/max sizing, and dimensions with precision"
        colorTheme="purple"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Square className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Sizing Utilities
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            📏 Control element dimensions with width, height, and constraint utilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">📐 Size Types</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-purple-900 dark:text-purple-100 min-w-24">Fixed:</span>
                    <code className="bg-purple-100 dark:bg-purple-950 px-2 py-1 rounded text-purple-700 dark:text-purple-300">w-16, h-32</code>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-purple-900 dark:text-purple-100 min-w-24">Percentage:</span>
                    <code className="bg-purple-100 dark:bg-purple-950 px-2 py-1 rounded text-purple-700 dark:text-purple-300">w-1/2, w-full</code>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-purple-900 dark:text-purple-100 min-w-24">Viewport:</span>
                    <code className="bg-purple-100 dark:bg-purple-950 px-2 py-1 rounded text-purple-700 dark:text-purple-300">w-screen, h-screen</code>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-purple-900 dark:text-purple-100 min-w-24">Auto:</span>
                    <code className="bg-purple-100 dark:bg-purple-950 px-2 py-1 rounded text-purple-700 dark:text-purple-300">w-auto, h-auto</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100 dark:from-purple-900/30 dark:via-fuchsia-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">📦</div>
                  <div className="font-bold text-purple-700 dark:text-purple-300">Key Benefits</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Responsive layouts
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent sizing
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Flexible constraints
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
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Width & Height
          </CardTitle>
          <CardDescription>Fixed, percentage, and viewport-based sizing</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={widthHeightExample}
            title="Width & Height Utilities"
            description="Control element dimensions with various sizing options"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Minimize2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            2. Min/Max Constraints
          </CardTitle>
          <CardDescription>Set minimum and maximum size limits</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={minMaxExample}
            title="Min/Max Sizing"
            description="Control size boundaries for responsive layouts"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Sizing Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use max-w-*</strong> for readable content containers</li>
            <li><strong>min-h-screen</strong> for full-height sections</li>
            <li><strong>w-full</strong> for responsive, full-width elements</li>
            <li><strong>Combine with responsive prefixes</strong> for adaptive layouts</li>
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
              Have a question about Sizing? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "When should I use max-w-prose?"`} 
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
