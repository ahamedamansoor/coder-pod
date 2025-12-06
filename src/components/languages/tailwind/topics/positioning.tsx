'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, Anchor, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
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

export default function Positioning() {
  
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
        topicTitle: 'Position',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const positionTypesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Position Types</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📍 Position Types
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control element positioning and layering
      </p>
      
      <!-- Static -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Static (Default)</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Normal document flow - not positioned</p>
          <div class="static bg-blue-500 text-white p-4 rounded-lg inline-block">
            Static Position (default)
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">Cannot use top/right/bottom/left</p>
        </div>
      </div>
      
      <!-- Relative -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Relative</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Positioned relative to itself</p>
          <div class="space-y-2">
            <div class="bg-gray-300 dark:bg-gray-700 p-3 rounded">Normal Element</div>
            <div class="relative top-4 left-8 bg-indigo-500 text-white p-3 rounded inline-block">
              Relative (moved 4 units down, 8 units right)
            </div>
            <div class="bg-gray-300 dark:bg-gray-700 p-3 rounded">Notice the gap above!</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="relative top-4 left-8"</code>
        </div>
      </div>
      
      <!-- Absolute -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Absolute</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative h-64">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Positioned relative to nearest positioned ancestor</p>
          <div class="absolute top-0 left-0 bg-purple-500 text-white px-4 py-2 rounded">
            Top-Left
          </div>
          <div class="absolute top-0 right-0 bg-pink-500 text-white px-4 py-2 rounded">
            Top-Right
          </div>
          <div class="absolute bottom-0 left-0 bg-fuchsia-500 text-white px-4 py-2 rounded">
            Bottom-Left
          </div>
          <div class="absolute bottom-0 right-0 bg-violet-500 text-white px-4 py-2 rounded">
            Bottom-Right
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-2 rounded">
            Center
          </div>
          <code class="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-slate-600 dark:text-slate-400">Positioned with top, right, bottom, left</code>
        </div>
      </div>
      
      <!-- Fixed -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Fixed</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Positioned relative to viewport - stays in place on scroll</p>
          <div class="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-lg border-2 border-dashed border-cyan-500">
            <p class="text-cyan-900 dark:text-cyan-100 font-semibold mb-2">💡 Example Use Case:</p>
            <p class="text-sm text-cyan-700 dark:text-cyan-300">Sticky headers, floating action buttons, chat widgets</p>
            <code class="text-xs text-cyan-600 dark:text-cyan-400 mt-2 block">class="fixed top-0 left-0 w-full"</code>
          </div>
        </div>
      </div>
      
      <!-- Sticky -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Sticky</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Toggles between relative and fixed based on scroll</p>
          <div class="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-lg border-2 border-dashed border-emerald-500">
            <p class="text-emerald-900 dark:text-emerald-100 font-semibold mb-2">💡 Example Use Case:</p>
            <p class="text-sm text-emerald-700 dark:text-emerald-300">Table headers, section titles that stick while scrolling</p>
            <code class="text-xs text-emerald-600 dark:text-emerald-400 mt-2 block">class="sticky top-0"</code>
          </div>
        </div>
      </div>
      
      <!-- Position Reference -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Position Types</h3>
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div class="bg-white dark:bg-slate-900 px-3 py-2 rounded">
            <span class="font-semibold text-blue-600 dark:text-blue-400">static</span>
            <span class="text-slate-600 dark:text-slate-400"> - Default flow</span>
          </div>
          <div class="bg-white dark:bg-slate-900 px-3 py-2 rounded">
            <span class="font-semibold text-indigo-600 dark:text-indigo-400">relative</span>
            <span class="text-slate-600 dark:text-slate-400"> - Relative to itself</span>
          </div>
          <div class="bg-white dark:bg-slate-900 px-3 py-2 rounded">
            <span class="font-semibold text-purple-600 dark:text-purple-400">absolute</span>
            <span class="text-slate-600 dark:text-slate-400"> - Relative to parent</span>
          </div>
          <div class="bg-white dark:bg-slate-900 px-3 py-2 rounded">
            <span class="font-semibold text-cyan-600 dark:text-cyan-400">fixed</span>
            <span class="text-slate-600 dark:text-slate-400"> - Relative to viewport</span>
          </div>
          <div class="bg-white dark:bg-slate-900 px-3 py-2 rounded col-span-2">
            <span class="font-semibold text-emerald-600 dark:text-emerald-400">sticky</span>
            <span class="text-slate-600 dark:text-slate-400"> - Hybrid relative/fixed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const placementExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Placement & Z-Index</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎯 Placement & Layering
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Position elements precisely with inset utilities
      </p>
      
      <!-- Inset Utilities -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Inset Utilities</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative h-64">
          <div class="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg flex items-center justify-center">
            <span class="text-sm font-semibold text-orange-700 dark:text-orange-300">inset-0 (all sides at 0)</span>
          </div>
          <div class="absolute inset-x-4 top-4 bg-orange-500 text-white p-2 rounded text-center text-sm">
            inset-x-4 (horizontal)
          </div>
          <div class="absolute inset-y-4 left-4 bg-red-500 text-white p-2 rounded flex items-center text-sm">
            inset-y-4<br/>(vertical)
          </div>
        </div>
      </div>
      
      <!-- Z-Index Layering -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Z-Index (Layering)</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative h-64">
          <div class="absolute top-8 left-8 w-32 h-32 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold z-0">
            z-0
          </div>
          <div class="absolute top-16 left-16 w-32 h-32 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold z-10">
            z-10
          </div>
          <div class="absolute top-24 left-24 w-32 h-32 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold z-20">
            z-20
          </div>
          <div class="absolute top-32 left-32 w-32 h-32 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold z-30">
            z-30
          </div>
          <p class="absolute bottom-4 left-4 text-xs text-slate-600 dark:text-slate-400">Higher z-index = On top</p>
        </div>
      </div>
      
      <!-- Centering Techniques -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Centering with Position</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative h-48">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-center">
              <p class="font-bold">Perfect Center</p>
              <code class="text-xs opacity-90">top-1/2 left-1/2<br/>-translate-x-1/2<br/>-translate-y-1/2</code>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative h-48">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg text-center">
                <p class="font-bold">Flex Center</p>
                <code class="text-xs opacity-90">inset-0 flex<br/>items-center<br/>justify-center</code>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Common Patterns -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-100 mb-3">🏷️ Badge Position</h4>
          <div class="relative inline-block">
            <div class="bg-blue-500 text-white px-6 py-4 rounded-lg">
              Button
            </div>
            <div class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              9+
            </div>
          </div>
          <code class="text-xs text-blue-700 dark:text-blue-300 mt-3 block">absolute -top-2 -right-2</code>
        </div>
        
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-100 mb-3">🖼️ Image Overlay</h4>
          <div class="relative">
            <div class="bg-gradient-to-r from-purple-400 to-pink-400 h-24 rounded-lg"></div>
            <div class="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">Overlay Text</span>
            </div>
          </div>
          <code class="text-xs text-purple-700 dark:text-purple-300 mt-3 block">absolute inset-0</code>
        </div>
      </div>
      
      <!-- Z-Index Scale -->
      <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">💡 Z-Index Scale</h3>
        <div class="grid grid-cols-5 md:grid-cols-10 gap-2 text-xs text-center">
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-0</code></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-10</code></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-20</code></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-30</code></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-40</code></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-50</code></div>
          <div><code class="bg-white dark:bg-slate-900 px-1 py-1 rounded block">z-auto</code></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="Tailwind CSS · Layout"
        title="Position"
        description="Master element positioning with static, relative, absolute, fixed, and sticky"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Anchor className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Positioning System
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            📍 Place elements precisely with 5 positioning types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">📍 Position Types</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">static</span>
                    <span className="text-slate-600 dark:text-slate-400">Normal flow (default)</span>
                  </div>
                  <div className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">relative</span>
                    <span className="text-slate-600 dark:text-slate-400">Relative to itself</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">absolute</span>
                    <span className="text-slate-600 dark:text-slate-400">Relative to parent</span>
                  </div>
                  <div className="flex justify-between items-center bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">fixed</span>
                    <span className="text-slate-600 dark:text-slate-400">Relative to viewport</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">sticky</span>
                    <span className="text-slate-600 dark:text-slate-400">Scroll-aware</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">📍</div>
                  <div className="font-bold text-blue-700 dark:text-blue-300">Use Cases</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Overlays
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Sticky headers
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Badges
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
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Move className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Position Types
          </CardTitle>
          <CardDescription>Static, relative, absolute, fixed, and sticky positioning</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={positionTypesExample}
            title="Position Types"
            description="See how each positioning type affects element placement"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Anchor className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            2. Placement & Z-Index
          </CardTitle>
          <CardDescription>Inset utilities, layering, and centering techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={placementExample}
            title="Placement & Layering"
            description="Control position and stacking with inset and z-index"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Position Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use relative parent</strong> - For absolute children to position correctly</li>
            <li><strong>Z-index scale</strong> - Use 10, 20, 30 increments for layering</li>
            <li><strong>Sticky for headers</strong> - Great for navigation that stays visible</li>
            <li><strong>Translate for centering</strong> - top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2</li>
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
              Have a question about Position? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I center an element with position?"`} 
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
