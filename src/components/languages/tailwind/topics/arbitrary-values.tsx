'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Brackets, CheckCircle, Play, HelpCircle, Zap, Code2 } from 'lucide-react';
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

interface ArbitraryValuesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ArbitraryValues({ onOpenWebPlayground }: ArbitraryValuesProps) {
  
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
        topicTitle: 'Arbitrary Values',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const arbitraryBasics = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arbitrary Values Basics</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        [ ] Arbitrary Values Basics
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Use any value with square bracket notation
      </p>
      
      <!-- Arbitrary Colors -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Arbitrary Colors</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-[#ff6b9d] p-6 rounded-xl text-center">
            <h4 class="text-white font-bold text-lg mb-2">Custom Pink</h4>
            <code class="text-white/80 text-sm">bg-[#ff6b9d]</code>
          </div>
          
          <div class="bg-[#4c6ef5] p-6 rounded-xl text-center">
            <h4 class="text-white font-bold text-lg mb-2">Custom Blue</h4>
            <code class="text-white/80 text-sm">bg-[#4c6ef5]</code>
          </div>
          
          <div class="bg-[#51cf66] p-6 rounded-xl text-center">
            <h4 class="text-white font-bold text-lg mb-2">Custom Green</h4>
            <code class="text-white/80 text-sm">bg-[#51cf66]</code>
          </div>
        </div>
      </div>
      
      <!-- Arbitrary Spacing -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Arbitrary Spacing</h3>
        <div class="space-y-4">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div class="bg-blue-500 w-[137px] h-16 rounded flex items-center justify-center text-white font-semibold">
              w-[137px]
            </div>
          </div>
          
          <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div class="bg-purple-500 h-[73px] rounded flex items-center justify-center text-white font-semibold">
              h-[73px]
            </div>
          </div>
          
          <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
            <div class="bg-pink-500 p-[2.5rem] rounded flex items-center justify-center text-white font-semibold inline-block">
              p-[2.5rem]
            </div>
          </div>
        </div>
      </div>
      
      <!-- Arbitrary Font Sizes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Arbitrary Font Sizes</h3>
        <div class="space-y-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6">
          <p class="text-[11px] text-slate-600 dark:text-slate-400">text-[11px] - Tiny text</p>
          <p class="text-[17px] text-slate-700 dark:text-slate-300">text-[17px] - Custom size</p>
          <p class="text-[23px] text-slate-900 dark:text-white">text-[23px] - Medium custom</p>
          <p class="text-[35px] font-bold text-slate-900 dark:text-white">text-[35px] - Large</p>
        </div>
      </div>
      
      <!-- Arbitrary Borders -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Arbitrary Borders</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border-[3px] border-blue-500 p-6 rounded-xl text-center">
            <p class="text-slate-900 dark:text-white font-semibold mb-2">3px Border</p>
            <code class="text-sm text-slate-600 dark:text-slate-400">border-[3px]</code>
          </div>
          
          <div class="border-[5px] border-purple-500 p-6 rounded-xl text-center">
            <p class="text-slate-900 dark:text-white font-semibold mb-2">5px Border</p>
            <code class="text-sm text-slate-600 dark:text-slate-400">border-[5px]</code>
          </div>
          
          <div class="border-[7px] border-pink-500 p-6 rounded-xl text-center">
            <p class="text-slate-900 dark:text-white font-semibold mb-2">7px Border</p>
            <code class="text-sm text-slate-600 dark:text-slate-400">border-[7px]</code>
          </div>
        </div>
      </div>
      
      <!-- Arbitrary Grid -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Arbitrary Grid</h3>
        <div class="grid grid-cols-[200px_1fr_100px] gap-4">
          <div class="bg-blue-500 p-4 rounded-lg text-white text-center font-semibold">
            200px
          </div>
          <div class="bg-purple-500 p-4 rounded-lg text-white text-center font-semibold">
            1fr (flexible)
          </div>
          <div class="bg-pink-500 p-4 rounded-lg text-white text-center font-semibold">
            100px
          </div>
        </div>
        <code class="text-sm text-slate-600 dark:text-slate-400 mt-3 block text-center">grid-cols-[200px_1fr_100px]</code>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Syntax Guide</h3>
        <div class="space-y-2 text-sm">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Colors:</strong> <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">bg-[#ff0000]</code> or <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">text-[rgb(255,0,0)]</code>
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Sizes:</strong> <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">w-[137px]</code> or <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">h-[50vh]</code>
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            <strong>CSS Values:</strong> <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">top-[117px]</code> or <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">left-[50%]</code>
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const arbitraryProperties = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arbitrary Properties</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        [property:value] Arbitrary Properties
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Use any CSS property directly in your HTML
      </p>
      
      <!-- Text Properties -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Text Properties</h3>
        <div class="space-y-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6">
          <p class="[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] text-2xl font-bold text-slate-900 dark:text-white">
            Text with custom shadow
          </p>
          <code class="text-xs text-slate-600 dark:text-slate-400 block">[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]</code>
          
          <p class="[letter-spacing:0.2em] text-lg text-slate-700 dark:text-slate-300">
            WIDE LETTER SPACING
          </p>
          <code class="text-xs text-slate-600 dark:text-slate-400 block">[letter-spacing:0.2em]</code>
          
          <p class="[word-spacing:1rem] text-lg text-slate-700 dark:text-slate-300">
            Custom word spacing example
          </p>
          <code class="text-xs text-slate-600 dark:text-slate-400 block">[word-spacing:1rem]</code>
        </div>
      </div>
      
      <!-- Transform Properties -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Transform Properties</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
            <div class="[transform:perspective(500px)_rotateY(15deg)] bg-blue-500 p-6 rounded-lg text-white font-bold">
              Perspective
            </div>
            <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">[transform:perspective(500px)_rotateY(15deg)]</code>
          </div>
          
          <div class="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl text-center">
            <div class="[transform:skewX(-10deg)] bg-purple-500 p-6 rounded-lg text-white font-bold">
              Skew X
            </div>
            <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">[transform:skewX(-10deg)]</code>
          </div>
          
          <div class="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-xl text-center">
            <div class="[transform:scale(1.2)_rotate(5deg)] bg-pink-500 p-6 rounded-lg text-white font-bold">
              Combined
            </div>
            <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">[transform:scale(1.2)_rotate(5deg)]</code>
          </div>
        </div>
      </div>
      
      <!-- Filter Properties -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Filter Properties</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="relative h-64 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop" alt="Abstract" class="w-full h-full object-cover [filter:hue-rotate(90deg)]" />
            <div class="absolute bottom-4 left-4 bg-black/50 px-3 py-2 rounded">
              <code class="text-xs text-white">[filter:hue-rotate(90deg)]</code>
            </div>
          </div>
          
          <div class="relative h-64 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop" alt="Workspace" class="w-full h-full object-cover [filter:contrast(150%)_saturate(150%)]" />
            <div class="absolute bottom-4 left-4 bg-black/50 px-3 py-2 rounded">
              <code class="text-xs text-white">[filter:contrast(150%)_saturate(150%)]</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Properties -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Background Properties</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="[background:linear-gradient(135deg,#667eea_0%,#764ba2_100%)] h-48 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            Custom Gradient
          </div>
          
          <div class="[background:radial-gradient(circle,#ff6b9d_0%,#ffc371_100%)] h-48 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            Radial Gradient
          </div>
        </div>
      </div>
      
      <!-- Clip Path -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Clip Path</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="[clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-emerald-500 h-32 w-32 mx-auto"></div>
          <div class="[clip-path:polygon(50%_0%,100%_100%,0%_100%)] bg-teal-500 h-32 w-32 mx-auto"></div>
          <div class="[clip-path:circle(50%)] bg-cyan-500 h-32 w-32 mx-auto"></div>
        </div>
        <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">Custom clip-path shapes</p>
      </div>
      
      <!-- Multiple Properties -->
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">💡 Arbitrary Property Syntax</h3>
        <div class="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
          <p>Use square brackets with <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">[property:value]</code> format</p>
          <p>Underscores become spaces: <code class="bg-white dark:bg-slate-900 px-2 py-1 rounded">[padding-top:2.5rem]</code></p>
          <p>Combine multiple values with underscores for spacing</p>
          <p>Works with any valid CSS property and value</p>
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
  <title>Arbitrary Values Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-7xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white [text-shadow:3px_3px_6px_rgba(0,0,0,0.15)]">
        🎮 Arbitrary Values Playground
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-12 text-lg">
        Create anything with square bracket notation
      </p>
      
      <!-- Custom Color Cards -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🎨 Custom Brand Colors</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-[#ff6b9d] hover:bg-[#ff5a8f] rounded-xl p-8 text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <h3 class="text-2xl font-bold mb-2">#ff6b9d</h3>
            <p class="text-white/80 text-sm">Custom Pink</p>
          </div>
          
          <div class="bg-[#4c6ef5] hover:bg-[#3d5fe6] rounded-xl p-8 text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <h3 class="text-2xl font-bold mb-2">#4c6ef5</h3>
            <p class="text-white/80 text-sm">Custom Blue</p>
          </div>
          
          <div class="bg-[#51cf66] hover:bg-[#42c257] rounded-xl p-8 text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <h3 class="text-2xl font-bold mb-2">#51cf66</h3>
            <p class="text-white/80 text-sm">Custom Green</p>
          </div>
          
          <div class="bg-[#ff8c42] hover:bg-[#ff7d33] rounded-xl p-8 text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <h3 class="text-2xl font-bold mb-2">#ff8c42</h3>
            <p class="text-white/80 text-sm">Custom Orange</p>
          </div>
        </div>
      </div>
      
      <!-- Advanced Layout -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">📐 Custom Grid Layout</h2>
        <div class="grid grid-cols-[150px_1fr_200px_1fr_150px] gap-4">
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white text-center font-semibold">
            150px
          </div>
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white text-center font-semibold">
            1fr
          </div>
          <div class="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-lg text-white text-center font-semibold">
            200px
          </div>
          <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg text-white text-center font-semibold">
            1fr
          </div>
          <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-lg text-white text-center font-semibold">
            150px
          </div>
        </div>
        <code class="text-center text-sm text-slate-600 dark:text-slate-400 mt-4 block">grid-cols-[150px_1fr_200px_1fr_150px]</code>
      </div>
      
      <!-- Custom Transforms -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🔄 Advanced Transforms</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl">
            <div class="[transform:perspective(800px)_rotateY(20deg)] bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center font-bold text-lg shadow-2xl">
              3D Perspective
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl">
            <div class="[transform:rotate3d(1,1,1,45deg)] bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-xl text-white text-center font-bold text-lg shadow-2xl">
              3D Rotation
            </div>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl">
            <div class="[transform:scale(1.2)_rotate(-5deg)_translateY(-10px)] bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-xl text-white text-center font-bold text-lg shadow-2xl">
              Combined
            </div>
          </div>
        </div>
      </div>
      
      <!-- Custom Typography -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">✍️ Custom Typography</h2>
        <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-12 text-center">
          <p class="[font-size:clamp(1.5rem,5vw,4rem)] [letter-spacing:0.1em] [text-shadow:4px_4px_8px_rgba(0,0,0,0.3)] font-black text-white mb-4">
            RESPONSIVE TEXT
          </p>
          <p class="text-white/90 text-lg [line-height:2]">
            With custom line height and letter spacing
          </p>
        </div>
      </div>
      
      <!-- Custom Clip Paths -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">✂️ Clip Path Shapes</h2>
        <div class="grid grid-cols-5 gap-6">
          <div class="[clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-gradient-to-br from-red-400 to-pink-500 h-32 w-full"></div>
          <div class="[clip-path:polygon(50%_0%,100%_100%,0%_100%)] bg-gradient-to-br from-orange-400 to-red-500 h-32 w-full"></div>
          <div class="[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] bg-gradient-to-br from-yellow-400 to-orange-500 h-32 w-full"></div>
          <div class="[clip-path:circle(50%)] bg-gradient-to-br from-green-400 to-emerald-500 h-32 w-full"></div>
          <div class="[clip-path:ellipse(50%_30%)] bg-gradient-to-br from-blue-400 to-cyan-500 h-32 w-full"></div>
        </div>
      </div>
      
      <!-- Custom Filters -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🎨 Custom Filters</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative h-64 rounded-xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop" alt="Abstract" class="w-full h-full object-cover [filter:hue-rotate(180deg)_saturate(150%)] group-hover:[filter:hue-rotate(0deg)_saturate(100%)] transition-all duration-500" />
            <div class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
              <code class="text-xs text-white">hue-rotate(180deg)</code>
            </div>
          </div>
          
          <div class="relative h-64 rounded-xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop" alt="Workspace" class="w-full h-full object-cover [filter:contrast(200%)_brightness(80%)] group-hover:[filter:contrast(100%)_brightness(100%)] transition-all duration-500" />
            <div class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
              <code class="text-xs text-white">contrast + brightness</code>
            </div>
          </div>
          
          <div class="relative h-64 rounded-xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Tech" class="w-full h-full object-cover [filter:sepia(100%)_hue-rotate(-30deg)] group-hover:[filter:sepia(0%)_hue-rotate(0deg)] transition-all duration-500" />
            <div class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
              <code class="text-xs text-white">sepia + hue-rotate</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Custom Gradients -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">🌈 Complex Gradients</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="[background:conic-gradient(from_0deg,#667eea,#764ba2,#f093fb,#4facfe,#667eea)] h-64 rounded-2xl flex items-center justify-center">
            <span class="text-white font-bold text-2xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)]">Conic Gradient</span>
          </div>
          
          <div class="[background:radial-gradient(ellipse_at_top,#667eea,transparent),radial-gradient(ellipse_at_bottom,#764ba2,transparent)] h-64 rounded-2xl flex items-center justify-center">
            <span class="text-white font-bold text-2xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)]">Multi Radial</span>
          </div>
        </div>
      </div>
      
      <!-- Tips -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 Arbitrary Values Pro Tips</h3>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>✨ Use <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">[value]</code> for one-off custom values</li>
          <li>🎨 <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">[property:value]</code> for any CSS property</li>
          <li>📏 Underscores represent spaces in values</li>
          <li>⚡ Perfect for unique designs without config changes</li>
          <li>🔧 Combine with variants: <code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">hover:[property:value]</code></li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Brackets}
        category="Tailwind CSS · Configuration"
        title="Arbitrary Values"
        description="Use any value with square bracket notation for ultimate flexibility"
        colorTheme="emerald"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-emerald-700 dark:text-emerald-300">
            <div className="relative">
              <Brackets className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are Arbitrary Values?
          </CardTitle>
          <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
            [ ] Use any value without modifying your config
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-emerald-400 dark:hover:border-emerald-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Two Syntaxes
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200/50">
                    <Code2 className="w-6 h-6 text-emerald-500" />
                    <div>
                      <div className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">[value]</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400">Custom value</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200/50">
                    <Brackets className="w-6 h-6 text-teal-500" />
                    <div>
                      <div className="font-semibold text-teal-700 dark:text-teal-300 text-sm">[prop:value]</div>
                      <div className="text-xs text-teal-600 dark:text-teal-400">CSS property</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 p-6 rounded-xl border border-emerald-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">[ ]</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-emerald-700 dark:text-emerald-300">Perfect For</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      One-off values
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Quick prototyping
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Any CSS property
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
              <span className="text-slate-600 dark:text-slate-400 text-sm ml-2">Arbitrary Syntax</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* Use any value */</div>
              <div className="text-gray-900 dark:text-white">&lt;<span className="text-purple-700 dark:text-purple-400">div</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-yellow-600 dark:text-yellow-400">"w-[137px] bg-[#ff6b9d]"</span>&gt;</div>
              <div className="text-gray-500 ml-2">/* Or any CSS property */</div>
              <div className="text-gray-900 dark:text-white">&lt;<span className="text-purple-700 dark:text-purple-400">div</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-yellow-600 dark:text-yellow-400">"[filter:blur(4px)]"</span>&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Brackets className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            1. Arbitrary Values Basics
          </CardTitle>
          <CardDescription>Colors, spacing, fonts, borders with custom values</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={arbitraryBasics}
            title="Arbitrary Values Basics"
            description="Custom colors, spacing, fonts, borders, grid"
            colorTheme="emerald"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-teal-500/10 rounded-lg">
              <Code2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            2. Arbitrary Properties
          </CardTitle>
          <CardDescription>Use any CSS property directly</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={arbitraryProperties}
            title="Arbitrary Properties"
            description="Text shadow, transforms, filters, backgrounds, clip-path"
            colorTheme="teal"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Play className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            3. Arbitrary Values Playground
          </CardTitle>
          <CardDescription>Advanced examples and creative uses</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Arbitrary Values Playground"
            description="Custom colors, grids, 3D transforms, filters, gradients"
            colorTheme="cyan"
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
        <AlertTitle>Arbitrary Values Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use for one-offs</strong> - Don't abuse; add to config if used repeatedly</li>
            <li><strong>Underscores for spaces</strong> - `[padding:1rem_2rem]` = `padding: 1rem 2rem`</li>
            <li><strong>Works with variants</strong> - `hover:[property:value]` and `dark:[value]`</li>
            <li><strong>Any CSS property</strong> - `[filter:blur(4px)]`, `[transform:rotate(45deg)]`</li>
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
              Have a question about Arbitrary Values? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I use arbitrary values with dark mode?"`} 
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
