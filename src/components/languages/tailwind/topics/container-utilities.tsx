'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, Maximize, CheckCircle, Sparkles, Play, HelpCircle } from 'lucide-react';
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

export default function ContainerUtilities() {
  
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
        topicTitle: 'Container',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const containerBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Container Basics</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto space-y-8">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📦 Container Utility
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Responsive container that adapts to breakpoints
      </p>
      
      <!-- Container Demonstration -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Basic Container</h3>
        <div class="bg-slate-100 dark:bg-slate-950 p-8 rounded-xl">
          <div class="container mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Container</h3>
            <p class="text-sm opacity-90">Automatically sets max-width at each breakpoint</p>
            <code class="text-xs opacity-75 mt-2 block">class="container mx-auto"</code>
          </div>
        </div>
      </div>
      
      <!-- Breakpoint Widths -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Container Breakpoints</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="space-y-3">
            <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-lg">
              <span class="font-semibold text-slate-900 dark:text-white">None (default)</span>
              <span class="text-slate-600 dark:text-slate-400">width: 100%</span>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-lg">
              <span class="font-semibold text-blue-600 dark:text-blue-400">sm (640px)</span>
              <span class="text-slate-600 dark:text-slate-400">max-width: 640px</span>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-lg">
              <span class="font-semibold text-indigo-600 dark:text-indigo-400">md (768px)</span>
              <span class="text-slate-600 dark:text-slate-400">max-width: 768px</span>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-lg">
              <span class="font-semibold text-purple-600 dark:text-purple-400">lg (1024px)</span>
              <span class="text-slate-600 dark:text-slate-400">max-width: 1024px</span>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-lg">
              <span class="font-semibold text-pink-600 dark:text-pink-400">xl (1280px)</span>
              <span class="text-slate-600 dark:text-slate-400">max-width: 1280px</span>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-lg">
              <span class="font-semibold text-rose-600 dark:text-rose-400">2xl (1536px)</span>
              <span class="text-slate-600 dark:text-slate-400">max-width: 1536px</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Visual Comparison -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Visual Comparison</h3>
        <div class="space-y-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Full Width (no container)</p>
            <div class="bg-gradient-to-r from-emerald-400 to-teal-400 text-white p-4 rounded-lg">
              <p class="font-semibold">Stretches to full width</p>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">With Container</p>
            <div class="container mx-auto">
              <div class="bg-gradient-to-r from-blue-400 to-indigo-400 text-white p-4 rounded-lg">
                <p class="font-semibold">Constrained by container max-width</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Info Box -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Container Usage</h3>
        <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>✨ Always use with <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">mx-auto</code> to center</li>
          <li>📱 Automatically responsive at all breakpoints</li>
          <li>🎯 Great for content that shouldn't stretch too wide</li>
          <li>🔧 Combine with padding: <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">container mx-auto px-4</code></li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  const maxWidthExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Max-Width Utilities</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📏 Max-Width Utilities
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control maximum content width for better readability
      </p>
      
      <!-- Max-Width Examples -->
      <div class="mb-8 space-y-6">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Fixed Max-Width</h3>
        
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">max-w-sm (24rem / 384px)</p>
          <div class="max-w-sm mx-auto bg-orange-500 text-white p-4 rounded-lg text-center">
            Small Container
          </div>
        </div>
        
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">max-w-md (28rem / 448px)</p>
          <div class="max-w-md mx-auto bg-amber-500 text-white p-4 rounded-lg text-center">
            Medium Container
          </div>
        </div>
        
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">max-w-lg (32rem / 512px)</p>
          <div class="max-w-lg mx-auto bg-yellow-500 text-white p-4 rounded-lg text-center">
            Large Container
          </div>
        </div>
        
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">max-w-2xl (42rem / 672px)</p>
          <div class="max-w-2xl mx-auto bg-orange-600 text-white p-4 rounded-lg text-center">
            2XL Container
          </div>
        </div>
        
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">max-w-4xl (56rem / 896px)</p>
          <div class="max-w-4xl mx-auto bg-amber-600 text-white p-4 rounded-lg text-center">
            4XL Container
          </div>
        </div>
      </div>
      
      <!-- Special Max-Width -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Special Max-Width</h3>
        
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">max-w-prose (65ch)</p>
            <div class="max-w-prose mx-auto bg-white dark:bg-slate-900 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <p class="text-slate-700 dark:text-slate-300">
                The max-w-prose utility sets the ideal width for readable text content. 
                It limits the line length to approximately 65 characters, which is optimal 
                for readability. This makes long paragraphs much easier to read.
              </p>
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">max-w-screen-* (viewport based)</p>
            <div class="flex gap-3 justify-center flex-wrap">
              <code class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded">max-w-screen-sm</code>
              <code class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded">max-w-screen-md</code>
              <code class="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded">max-w-screen-lg</code>
              <code class="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded">max-w-screen-xl</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Reference Table -->
      <div class="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">💡 Max-Width Scale</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-xs</code>
            <p class="text-slate-600 dark:text-slate-400">20rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-sm</code>
            <p class="text-slate-600 dark:text-slate-400">24rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-md</code>
            <p class="text-slate-600 dark:text-slate-400">28rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-lg</code>
            <p class="text-slate-600 dark:text-slate-400">32rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-xl</code>
            <p class="text-slate-600 dark:text-slate-400">36rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-2xl</code>
            <p class="text-slate-600 dark:text-slate-400">42rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-4xl</code>
            <p class="text-slate-600 dark:text-slate-400">56rem</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-2 rounded text-center">
            <code class="text-orange-700 dark:text-orange-300">max-w-7xl</code>
            <p class="text-slate-600 dark:text-slate-400">80rem</p>
          </div>
        </div>
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
  <title>Container Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen">
  <!-- Hero Section with Container -->
  <section class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-4 text-center">Container Playground</h1>
      <p class="text-xl text-center opacity-90 max-w-2xl mx-auto">
        Explore how containers and max-width utilities create beautiful, responsive layouts
      </p>
    </div>
  </section>
  
  <!-- Content Section -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">Feature Cards</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
            📱
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Responsive</h3>
          <p class="text-slate-600 dark:text-slate-400">
            Automatically adjusts to all screen sizes for perfect viewing experience.
          </p>
        </div>
        
        <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
            ⚡
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Fast Setup</h3>
          <p class="text-slate-600 dark:text-slate-400">
            Single utility class creates responsive containers instantly.
          </p>
        </div>
        
        <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
            🎨
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Beautiful</h3>
          <p class="text-slate-600 dark:text-slate-400">
            Creates well-proportioned layouts that look professional.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Article Section with Prose -->
  <section class="py-16 bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto px-4">
      <article class="max-w-prose mx-auto bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Container Matters</h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          The container utility in Tailwind CSS is essential for creating responsive layouts. 
          It automatically sets a max-width at each breakpoint, ensuring your content looks 
          great on all devices.
        </p>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          Unlike fixed-width containers, Tailwind's container adapts to your screen size. 
          On mobile, it uses the full width. On larger screens, it constrains the width for 
          better readability and visual appeal.
        </p>
        <p class="text-slate-700 dark:text-slate-300">
          Combined with max-w-prose, you can ensure text content never becomes too wide to 
          read comfortably. This is perfect for blog posts, articles, and documentation.
        </p>
      </article>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">Ready to Build?</h2>
      <p class="text-xl mb-8 opacity-90">
        Start using containers and max-width utilities in your projects today!
      </p>
      <div class="flex gap-4 justify-center">
        <button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
        <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors border-2 border-white">
          Learn More
        </button>
      </div>
    </div>
  </section>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="Tailwind CSS · Layout"
        title="Container"
        description="Create responsive, centered layouts with container and max-width utilities"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Maximize className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Container System
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            📦 Responsive containers that adapt to breakpoints automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">📦 Container Features</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">Responsive</span>
                    <span className="text-slate-600 dark:text-slate-400">Adapts to breakpoints</span>
                  </div>
                  <div className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">Centered</span>
                    <span className="text-slate-600 dark:text-slate-400">Use with mx-auto</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                    <span className="font-semibold text-slate-900 dark:text-white">Max-width</span>
                    <span className="text-slate-600 dark:text-slate-400">Fixed at breakpoints</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">📦</div>
                  <div className="font-bold text-blue-700 dark:text-blue-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Page layouts
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Content sections
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Readable text
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
              <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Container Basics
          </CardTitle>
          <CardDescription>Responsive container with automatic breakpoints</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={containerBasicsExample}
            title="Container Basics"
            description="Learn how container adapts to different screen sizes"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Maximize className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            2. Max-Width Utilities
          </CardTitle>
          <CardDescription>Control maximum width with fixed sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={maxWidthExample}
            title="Max-Width Utilities"
            description="From max-w-sm to max-w-7xl and max-w-prose"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Play className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Interactive Playground
          </CardTitle>
          <CardDescription>Full page layout with containers</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Container Playground"
            description="Hero, cards, article, and CTA sections"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Container Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always center</strong> - Use container mx-auto px-4</li>
            <li><strong>Add padding</strong> - Prevent content from touching edges</li>
            <li><strong>Use max-w-prose</strong> - For readable article content</li>
            <li><strong>Combine utilities</strong> - max-w-7xl mx-auto for custom widths</li>
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
              Have a question about Container? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "When should I use container vs max-w?"`} 
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
