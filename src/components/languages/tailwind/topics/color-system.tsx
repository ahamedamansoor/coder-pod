'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, Droplet, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
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

export default function ColorSystem() {
  
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
        topicTitle: 'Color System',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const colorPaletteExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Palette</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎨 Color Palette
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Each color has 10 shades from 50 (lightest) to 950 (darkest)
      </p>
      
      <!-- Blue Palette -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Blue Palette</h3>
        <div class="grid grid-cols-5 md:grid-cols-10 gap-2">
          <div class="text-center">
            <div class="bg-blue-50 dark:bg-blue-950 h-16 rounded flex items-center justify-center text-xs font-mono text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">50</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900 h-16 rounded flex items-center justify-center text-xs font-mono text-slate-900 dark:text-white">100</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-200 dark:bg-blue-800 h-16 rounded flex items-center justify-center text-xs font-mono text-slate-900 dark:text-white">200</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-300 dark:bg-blue-700 h-16 rounded flex items-center justify-center text-xs font-mono text-white">300</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-400 dark:bg-blue-600 h-16 rounded flex items-center justify-center text-xs font-mono text-white">400</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-500 h-16 rounded flex items-center justify-center text-xs font-mono text-white">500</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-600 h-16 rounded flex items-center justify-center text-xs font-mono text-white">600</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-700 h-16 rounded flex items-center justify-center text-xs font-mono text-white">700</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-800 h-16 rounded flex items-center justify-center text-xs font-mono text-white">800</div>
          </div>
          <div class="text-center">
            <div class="bg-blue-900 dark:bg-blue-100 h-16 rounded flex items-center justify-center text-xs font-mono text-white dark:text-slate-900">900</div>
          </div>
        </div>
      </div>
      
      <!-- Color Showcase -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-red-500 rounded-xl p-6 text-white text-center shadow-lg">
          <div class="text-3xl mb-2">❤️</div>
          <div class="font-bold text-lg">Red</div>
          <code class="text-xs opacity-90">bg-red-500</code>
        </div>
        <div class="bg-green-500 rounded-xl p-6 text-white text-center shadow-lg">
          <div class="text-3xl mb-2">💚</div>
          <div class="font-bold text-lg">Green</div>
          <code class="text-xs opacity-90">bg-green-500</code>
        </div>
        <div class="bg-purple-500 rounded-xl p-6 text-white text-center shadow-lg">
          <div class="text-3xl mb-2">💜</div>
          <div class="font-bold text-lg">Purple</div>
          <code class="text-xs opacity-90">bg-purple-500</code>
        </div>
        <div class="bg-amber-500 rounded-xl p-6 text-white text-center shadow-lg">
          <div class="text-3xl mb-2">💛</div>
          <div class="font-bold text-lg">Amber</div>
          <code class="text-xs opacity-90">bg-amber-500</code>
        </div>
      </div>
      
      <!-- Text Colors -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Text Colors</h3>
        <div class="space-y-2 text-lg">
          <p class="text-blue-600 dark:text-blue-400 font-semibold">text-blue-600 • Blue text</p>
          <p class="text-red-600 dark:text-red-400 font-semibold">text-red-600 • Red text for errors</p>
          <p class="text-green-600 dark:text-green-400 font-semibold">text-green-600 • Green text for success</p>
          <p class="text-amber-600 dark:text-amber-400 font-semibold">text-amber-600 • Amber text for warnings</p>
        </div>
      </div>
      
      <!-- Border Colors -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Color Utilities</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="border-4 border-blue-500 bg-white dark:bg-slate-900 p-4 rounded-lg text-center">
            <p class="font-semibold text-slate-900 dark:text-white">Border</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">border-blue-500</code>
          </div>
          <div class="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center">
            <p class="font-semibold text-purple-900 dark:text-purple-100">Background</p>
            <code class="text-xs text-purple-700 dark:text-purple-300">bg-purple-100</code>
          </div>
          <div class="bg-white dark:bg-slate-900 p-4 rounded-lg text-center">
            <p class="font-semibold text-green-600 dark:text-green-400">Text Color</p>
            <code class="text-xs text-slate-600 dark:text-slate-400">text-green-600</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const opacityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Opacity</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎭 Color Opacity
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control transparency with opacity modifiers
      </p>
      
      <!-- Opacity Scale -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Background Opacity</h3>
        <div class="space-y-3">
          <div class="bg-blue-500/10 p-4 rounded-lg">
            <p class="text-slate-900 dark:text-white font-semibold">bg-blue-500/10 - 10% opacity</p>
          </div>
          <div class="bg-blue-500/25 p-4 rounded-lg">
            <p class="text-slate-900 dark:text-white font-semibold">bg-blue-500/25 - 25% opacity</p>
          </div>
          <div class="bg-blue-500/50 p-4 rounded-lg">
            <p class="text-white font-semibold">bg-blue-500/50 - 50% opacity</p>
          </div>
          <div class="bg-blue-500/75 p-4 rounded-lg">
            <p class="text-white font-semibold">bg-blue-500/75 - 75% opacity</p>
          </div>
          <div class="bg-blue-500 p-4 rounded-lg">
            <p class="text-white font-semibold">bg-blue-500 - 100% opacity (default)</p>
          </div>
        </div>
      </div>
      
      <!-- Text Opacity -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Text Opacity</h3>
        <div class="bg-slate-100 dark:bg-slate-950 p-6 rounded-xl space-y-2">
          <p class="text-purple-600/25 dark:text-purple-400/25 text-lg font-semibold">text-purple-600/25</p>
          <p class="text-purple-600/50 dark:text-purple-400/50 text-lg font-semibold">text-purple-600/50</p>
          <p class="text-purple-600/75 dark:text-purple-400/75 text-lg font-semibold">text-purple-600/75</p>
          <p class="text-purple-600 dark:text-purple-400 text-lg font-semibold">text-purple-600 (100%)</p>
        </div>
      </div>
      
      <!-- Layered Opacity -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="relative h-64 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white/90 dark:bg-slate-900/90 p-6 rounded-xl text-center">
              <h4 class="font-bold text-lg text-slate-900 dark:text-white mb-2">Glassmorphism</h4>
              <p class="text-sm text-slate-600 dark:text-slate-300">bg-white/90</p>
            </div>
          </div>
        </div>
        
        <div class="relative h-64 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-black/50 backdrop-blur-sm p-6 rounded-xl text-center">
              <h4 class="font-bold text-lg text-white mb-2">Overlay Effect</h4>
              <p class="text-sm text-white/90">bg-black/50</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Opacity Reference -->
      <div class="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Opacity Values</h3>
        <div class="grid grid-cols-5 md:grid-cols-10 gap-2 text-xs text-center">
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/0</code><span class="text-slate-600 dark:text-slate-400">0%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/5</code><span class="text-slate-600 dark:text-slate-400">5%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/10</code><span class="text-slate-600 dark:text-slate-400">10%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/20</code><span class="text-slate-600 dark:text-slate-400">20%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/30</code><span class="text-slate-600 dark:text-slate-400">30%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/40</code><span class="text-slate-600 dark:text-slate-400">40%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/50</code><span class="text-slate-600 dark:text-slate-400">50%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/60</code><span class="text-slate-600 dark:text-slate-400">60%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/75</code><span class="text-slate-600 dark:text-slate-400">75%</span></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">/100</code><span class="text-slate-600 dark:text-slate-400">100%</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="Tailwind CSS · Core Concepts"
        title="Color System"
        description="Master Tailwind's comprehensive color palette with shades and opacity"
        colorTheme="pink"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-pink-700 dark:text-pink-300">
            <div className="relative">
              <Droplet className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Tailwind Color System
          </CardTitle>
          <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
            🎨 Rich palette with 22 colors, each with 10 shades (50-950)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300">🎨 Color Categories</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Neutral</p>
                    <p className="text-slate-600 dark:text-slate-400">slate, gray, zinc, stone</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Primary</p>
                    <p className="text-slate-600 dark:text-slate-400">red, blue, green, yellow</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Extended</p>
                    <p className="text-slate-600 dark:text-slate-400">purple, pink, indigo, cyan</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Special</p>
                    <p className="text-slate-600 dark:text-slate-400">emerald, teal, amber, rose</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🎨</div>
                  <div className="font-bold text-pink-700 dark:text-pink-300">22 Colors</div>
                  <div className="text-2xl font-black text-pink-600 dark:text-pink-400">220+</div>
                  <div className="text-sm text-pink-600 dark:text-pink-400">Total shades</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            1. Color Palette
          </CardTitle>
          <CardDescription>Complete color system with all shades</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorPaletteExample}
            title="Color Palette"
            description="22 colors with 10 shades each (50-950)"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Droplet className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            2. Opacity Modifiers
          </CardTitle>
          <CardDescription>Control transparency with slash notation</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={opacityExample}
            title="Color Opacity"
            description="Add transparency to any color with /0 to /100"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Color Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use 500</strong> as the base shade for most applications</li>
            <li><strong>Dark mode</strong> - Use lighter shades (100-400) in dark mode</li>
            <li><strong>Opacity</strong> - Use /50 or /75 for overlays and glass effects</li>
            <li><strong>Consistency</strong> - Stick to one color family for related elements</li>
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
              Have a question about Color System? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "What shade should I use for buttons?"`} 
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
