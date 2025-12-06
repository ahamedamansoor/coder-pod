'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Image, Layers, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
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

export default function BackgroundUtilities() {
  
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
        topicTitle: 'Backgrounds',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const gradientExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Gradients</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🌈 Background Gradients
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Create beautiful gradients with simple utility classes
      </p>
      
      <!-- Linear Gradients -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Linear Gradients</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Right Direction</div>
            <code class="text-sm opacity-90">bg-gradient-to-r from-cyan-500 to-blue-500</code>
          </div>
          
          <div class="bg-gradient-to-l from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Left Direction</div>
            <code class="text-sm opacity-90">bg-gradient-to-l from-purple-500 to-pink-500</code>
          </div>
          
          <div class="bg-gradient-to-b from-emerald-500 to-teal-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Bottom Direction</div>
            <code class="text-sm opacity-90">bg-gradient-to-b from-emerald-500 to-teal-500</code>
          </div>
          
          <div class="bg-gradient-to-t from-orange-500 to-amber-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Top Direction</div>
            <code class="text-sm opacity-90">bg-gradient-to-t from-orange-500 to-amber-500</code>
          </div>
        </div>
      </div>
      
      <!-- Diagonal Gradients -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Diagonal Gradients</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Bottom Right</div>
            <code class="text-sm opacity-90">bg-gradient-to-br</code>
          </div>
          
          <div class="bg-gradient-to-tr from-rose-500 to-pink-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Top Right</div>
            <code class="text-sm opacity-90">bg-gradient-to-tr</code>
          </div>
          
          <div class="bg-gradient-to-bl from-blue-500 to-indigo-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Bottom Left</div>
            <code class="text-sm opacity-90">bg-gradient-to-bl</code>
          </div>
          
          <div class="bg-gradient-to-tl from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Top Left</div>
            <code class="text-sm opacity-90">bg-gradient-to-tl</code>
          </div>
        </div>
      </div>
      
      <!-- Multi-Stop Gradients -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Multi-Stop Gradients</h3>
        <div class="space-y-4">
          <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Three Color Gradient</div>
            <code class="text-sm opacity-90">from-purple-500 via-pink-500 to-red-500</code>
          </div>
          
          <div class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Cool Color Blend</div>
            <code class="text-sm opacity-90">from-cyan-400 via-blue-500 to-purple-600</code>
          </div>
          
          <div class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-bold text-lg mb-2">Warm Color Blend</div>
            <code class="text-sm opacity-90">from-yellow-400 via-orange-500 to-red-500</code>
          </div>
        </div>
      </div>
      
      <!-- Gradient Reference -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Gradient Directions</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-r (right)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-l (left)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-t (top)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-b (bottom)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-tr (top-right)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-tl (top-left)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-br (bottom-right)</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-slate-700 dark:text-slate-300">to-bl (bottom-left)</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const solidColorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solid Backgrounds</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎨 Solid Backgrounds
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Simple solid color backgrounds
      </p>
      
      <!-- Color Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-red-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">❤️</div>
          <div class="font-bold">Red</div>
          <code class="text-xs opacity-90">bg-red-500</code>
        </div>
        
        <div class="bg-blue-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💙</div>
          <div class="font-bold">Blue</div>
          <code class="text-xs opacity-90">bg-blue-500</code>
        </div>
        
        <div class="bg-green-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💚</div>
          <div class="font-bold">Green</div>
          <code class="text-xs opacity-90">bg-green-500</code>
        </div>
        
        <div class="bg-yellow-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💛</div>
          <div class="font-bold">Yellow</div>
          <code class="text-xs opacity-90">bg-yellow-500</code>
        </div>
        
        <div class="bg-purple-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💜</div>
          <div class="font-bold">Purple</div>
          <code class="text-xs opacity-90">bg-purple-500</code>
        </div>
        
        <div class="bg-pink-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💗</div>
          <div class="font-bold">Pink</div>
          <code class="text-xs opacity-90">bg-pink-500</code>
        </div>
        
        <div class="bg-indigo-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💠</div>
          <div class="font-bold">Indigo</div>
          <code class="text-xs opacity-90">bg-indigo-500</code>
        </div>
        
        <div class="bg-teal-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-3xl mb-2">💎</div>
          <div class="font-bold">Teal</div>
          <code class="text-xs opacity-90">bg-teal-500</code>
        </div>
      </div>
      
      <!-- Opacity Backgrounds -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Background Opacity</h3>
        <div class="space-y-3">
          <div class="bg-blue-500/10 border-2 border-blue-500 p-4 rounded-lg">
            <p class="text-slate-900 dark:text-white font-semibold">bg-blue-500/10 - 10% opacity</p>
          </div>
          <div class="bg-blue-500/30 border-2 border-blue-500 p-4 rounded-lg">
            <p class="text-slate-900 dark:text-white font-semibold">bg-blue-500/30 - 30% opacity</p>
          </div>
          <div class="bg-blue-500/50 border-2 border-blue-500 p-4 rounded-lg">
            <p class="text-white font-semibold">bg-blue-500/50 - 50% opacity</p>
          </div>
          <div class="bg-blue-500 p-4 rounded-lg">
            <p class="text-white font-semibold">bg-blue-500 - 100% opacity</p>
          </div>
        </div>
      </div>
      
      <!-- Special Backgrounds -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-transparent border-2 border-dashed border-blue-500 p-6 rounded-xl text-center">
          <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-2">Transparent</h4>
          <code class="text-sm text-slate-600 dark:text-slate-400">bg-transparent</code>
        </div>
        
        <div class="bg-current text-blue-600 dark:text-blue-400 border-2 border-blue-500 p-6 rounded-xl text-center">
          <h4 class="font-bold mb-2">Current Color</h4>
          <code class="text-sm opacity-75">bg-current</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Core Concepts"
        title="Backgrounds"
        description="Master background colors, gradients, and visual effects"
        colorTheme="cyan"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Image className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Background Utilities
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🎨 Create stunning visual effects with colors and gradients
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">🌈 Background Types</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg border border-cyan-200/50">
                    <div className="font-semibold text-cyan-900 dark:text-cyan-100 text-sm mb-1">Solid Colors</div>
                    <code className="text-xs text-cyan-700 dark:text-cyan-300">bg-color-shade</code>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200/50">
                    <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">Gradients</div>
                    <code className="text-xs text-blue-700 dark:text-blue-300">bg-gradient-to-*</code>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-200/50">
                    <div className="font-semibold text-indigo-900 dark:text-indigo-100 text-sm mb-1">Opacity</div>
                    <code className="text-xs text-indigo-700 dark:text-indigo-300">bg-color/opacity</code>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200/50">
                    <div className="font-semibold text-purple-900 dark:text-purple-100 text-sm mb-1">Special</div>
                    <code className="text-xs text-purple-700 dark:text-purple-300">bg-transparent</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🎨</div>
                  <div className="font-bold text-cyan-700 dark:text-cyan-300">Benefits</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual hierarchy
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Brand identity
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Modern aesthetics
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
              <Layers className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            1. Background Gradients
          </CardTitle>
          <CardDescription>Linear, diagonal, and multi-stop gradients</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={gradientExample}
            title="Gradient Backgrounds"
            description="8 directions with from, via, to color stops"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Image className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            2. Solid Colors
          </CardTitle>
          <CardDescription>Solid backgrounds with opacity control</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={solidColorsExample}
            title="Solid Backgrounds"
            description="All colors with opacity modifiers"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Background Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Gradients</strong> - Use for hero sections and cards</li>
            <li><strong>Opacity</strong> - Use /10 to /30 for subtle overlays</li>
            <li><strong>Contrast</strong> - Ensure text is readable on backgrounds</li>
            <li><strong>Dark mode</strong> - Test gradients in both themes</li>
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
              Have a question about Backgrounds? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I create a diagonal gradient?"`} 
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
