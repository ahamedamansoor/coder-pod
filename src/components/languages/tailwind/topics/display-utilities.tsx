'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Eye, EyeOff, Layout, CheckCircle, Sparkles, HelpCircle, Play } from 'lucide-react';
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

export default function DisplayUtilities() {
  
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
        topicTitle: 'Display',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const displayTypesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display Types</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        👁️ Display Types
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Control how elements are displayed
      </p>
      
      <!-- Block Display -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Block Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Takes full width, starts on new line</p>
          <div class="block bg-violet-500 text-white p-4 rounded-lg mb-2">
            Block Element 1 (Full Width)
          </div>
          <div class="block bg-purple-500 text-white p-4 rounded-lg">
            Block Element 2 (Full Width)
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="block"</code>
        </div>
      </div>
      
      <!-- Inline Display -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Inline Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Flows with text, only takes needed width</p>
          <div>
            <span class="inline bg-pink-500 text-white px-4 py-2 rounded">Inline 1</span>
            <span class="inline bg-fuchsia-500 text-white px-4 py-2 rounded">Inline 2</span>
            <span class="inline bg-purple-500 text-white px-4 py-2 rounded">Inline 3</span>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="inline"</code>
        </div>
      </div>
      
      <!-- Inline-Block -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Inline-Block Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Inline flow but accepts width/height</p>
          <div>
            <div class="inline-block bg-blue-500 text-white px-6 py-4 rounded-lg">Inline-Block 1</div>
            <div class="inline-block bg-indigo-500 text-white px-6 py-4 rounded-lg">Inline-Block 2</div>
            <div class="inline-block bg-violet-500 text-white px-6 py-4 rounded-lg">Inline-Block 3</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="inline-block"</code>
        </div>
      </div>
      
      <!-- Flex Display -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Flex Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Flexible box layout</p>
          <div class="flex gap-2">
            <div class="flex-1 bg-emerald-500 text-white p-4 rounded-lg text-center">Flex 1</div>
            <div class="flex-1 bg-teal-500 text-white p-4 rounded-lg text-center">Flex 2</div>
            <div class="flex-1 bg-cyan-500 text-white p-4 rounded-lg text-center">Flex 3</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="flex gap-2"</code>
        </div>
      </div>
      
      <!-- Grid Display -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Grid Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Two-dimensional grid layout</p>
          <div class="grid grid-cols-3 gap-2">
            <div class="bg-orange-500 text-white p-4 rounded-lg text-center">Grid 1</div>
            <div class="bg-amber-500 text-white p-4 rounded-lg text-center">Grid 2</div>
            <div class="bg-yellow-500 text-white p-4 rounded-lg text-center">Grid 3</div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="grid grid-cols-3 gap-2"</code>
        </div>
      </div>
      
      <!-- Display Reference -->
      <div class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
        <h3 class="text-lg font-semibold text-violet-900 dark:text-violet-100 mb-4">💡 Display Utilities</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">block</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">inline</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">inline-block</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">flex</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">inline-flex</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">grid</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">inline-grid</code>
          <code class="bg-white dark:bg-slate-900 px-3 py-2 rounded text-violet-700 dark:text-violet-300">hidden</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const visibilityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visibility & Hidden</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        👻 Visibility Controls
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Show, hide, and control element visibility
      </p>
      
      <!-- Hidden vs Invisible -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Hidden vs Invisible</h3>
        
        <div class="space-y-6">
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">hidden - Removes from layout</h4>
            <div class="space-y-2">
              <div class="bg-emerald-500 text-white p-3 rounded">Visible Box 1</div>
              <div class="hidden bg-red-500 text-white p-3 rounded">Hidden Box (Not in DOM flow)</div>
              <div class="bg-emerald-500 text-white p-3 rounded">Visible Box 2 (Moved up!)</div>
            </div>
            <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="hidden"</code>
          </div>
          
          <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="font-semibold text-teal-900 dark:text-teal-100 mb-3">invisible - Keeps space but hides</h4>
            <div class="space-y-2">
              <div class="bg-teal-500 text-white p-3 rounded">Visible Box 1</div>
              <div class="invisible bg-red-500 text-white p-3 rounded border-2 border-dashed border-red-500">Invisible Box (Space reserved)</div>
              <div class="bg-teal-500 text-white p-3 rounded">Visible Box 2 (Gap above!)</div>
            </div>
            <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="invisible"</code>
          </div>
        </div>
      </div>
      
      <!-- Responsive Display -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Responsive Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Resize browser to see changes</p>
          <div class="space-y-3">
            <div class="hidden md:block bg-cyan-500 text-white p-4 rounded-lg text-center">
              📱→💻 Hidden on mobile, visible on desktop (md:block)
            </div>
            <div class="block md:hidden bg-blue-500 text-white p-4 rounded-lg text-center">
              💻→📱 Visible on mobile, hidden on desktop (md:hidden)
            </div>
            <div class="hidden lg:flex gap-2 bg-indigo-500 text-white p-4 rounded-lg">
              <div class="flex-1 bg-indigo-600 p-3 rounded text-center">Flex Item 1</div>
              <div class="flex-1 bg-indigo-600 p-3 rounded text-center">Flex Item 2</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Table Display -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Table Display</h3>
        <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div class="table w-full border-collapse">
            <div class="table-row bg-emerald-500 text-white">
              <div class="table-cell p-3 border border-emerald-600">Header 1</div>
              <div class="table-cell p-3 border border-emerald-600">Header 2</div>
              <div class="table-cell p-3 border border-emerald-600">Header 3</div>
            </div>
            <div class="table-row bg-white dark:bg-slate-900">
              <div class="table-cell p-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">Data 1</div>
              <div class="table-cell p-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">Data 2</div>
              <div class="table-cell p-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">Data 3</div>
            </div>
          </div>
          <code class="text-xs text-slate-600 dark:text-slate-400 mt-3 block">class="table", "table-row", "table-cell"</code>
        </div>
      </div>
      
      <!-- Comparison Chart -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
        <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-4">💡 Quick Comparison</h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-slate-900 dark:text-white">hidden</span>
            <span class="text-slate-600 dark:text-slate-400">Removes from layout</span>
          </div>
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-slate-900 dark:text-white">invisible</span>
            <span class="text-slate-600 dark:text-slate-400">Hides but keeps space</span>
          </div>
          <div class="flex justify-between items-center bg-white dark:bg-slate-900 p-2 rounded">
            <span class="font-semibold text-slate-900 dark:text-white">opacity-0</span>
            <span class="text-slate-600 dark:text-slate-400">Transparent but clickable</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const displayPlaygroundExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-900 to-purple-900 text-slate-900 dark:text-slate-100 min-h-screen py-12">
  <div class="max-w-5xl mx-auto space-y-8 px-4">
    <section class="bg-white dark:bg-slate-900/90 rounded-3xl shadow-2xl border border-slate-200/70 dark:border-slate-800 p-6 space-y-5">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-2">Display Playground</p>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Mix display modes, visibility helpers, and responsive hints</h1>
      </div>
      <div class="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-start">
        <div class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Display Mode</label>
            <select id="display-select" class="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-900">
              <option value="flex flex-wrap gap-3 justify-center">flex</option>
              <option value="grid grid-cols-2 gap-3">grid</option>
              <option value="inline-flex items-center justify-center gap-4">inline-flex</option>
              <option value="block space-y-3">block</option>
              <option value="inline-grid grid-cols-3 gap-2">inline-grid</option>
              <option value="inline-block space-y-2">inline-block</option>
              <option value="table table-auto w-full">table</option>
            </select>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">Visibility</p>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-visibility="visible" class="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">Visible</button>
              <button type="button" data-visibility="hidden" class="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">Hidden</button>
              <button type="button" data-visibility="invisible" class="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">Invisible</button>
              <button type="button" data-visibility="opacity-0 pointer-events-none" class="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">Opacity 0</button>
            </div>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Toggle display values and visibility helpers to see how the boxes reorganize, disappear, or keep their space. Responsive hints live below.
          </p>
        </div>
        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Live preview</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Current: <span id="preview-label" class="font-semibold text-slate-900 dark:text-white"></span></p>
          <div id="preview-box" class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 shadow-2xl p-6 min-h-[220px] transition-all duration-200">
            <div class="space-y-3" id="preview-items">
              <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl px-5 py-3 text-center">Element 1</div>
              <div class="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-xl px-5 py-3 text-center">Element 2</div>
              <div class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl px-5 py-3 text-center">Element 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-br from-slate-900/90 to-slate-800/40 rounded-3xl p-6 border border-slate-800/70 text-white space-y-4">
      <h2 class="text-2xl font-semibold">Responsive display reminders</h2>
      <div class="grid sm:grid-cols-3 gap-4 text-sm">
        <div class="bg-white/10 rounded-2xl p-4 border border-white/20">
          <p class="font-semibold">md:block</p>
          <p class="text-white/80 text-xs">Switch to block stacks for medium screens and up.</p>
        </div>
        <div class="bg-white/10 rounded-2xl p-4 border border-white/20">
          <p class="font-semibold">md:flex</p>
          <p class="text-white/80 text-xs">Use flex rows to align cards at larger widths.</p>
        </div>
        <div class="bg-white/10 rounded-2xl p-4 border border-white/20">
          <p class="font-semibold">lg:grid</p>
          <p class="text-white/80 text-xs">Grid handles two-dimensional layouts beautifully.</p>
        </div>
      </div>
    </section>

    <section class="bg-white/70 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-200/70 dark:border-slate-800/70 space-y-4">
      <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Visibility reference</h2>
      <div class="grid md:grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-300">
        <div class="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <p class="font-semibold">hidden</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Removes elements from the layout flow.</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <p class="font-semibold">invisible</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Hides but keeps the space reserved.</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <p class="font-semibold">opacity-0</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Fully transparent but still interactive.</p>
        </div>
      </div>
    </section>
  </div>

  <script>
    const displaySelect = document.getElementById('display-select');
    const previewBox = document.getElementById('preview-box');
    const previewLabel = document.getElementById('preview-label');
    const visibilityButtons = document.querySelectorAll('[data-visibility]');
    let visibilityClass = '';
    const baseClasses = 'rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 shadow-2xl p-6 min-h-[220px] transition-all duration-200';

    const setVisibility = (cls) => {
      visibilityClass = cls === 'visible' ? '' : cls;
      visibilityButtons.forEach((btn) => {
        const isActive = btn.dataset.visibility === cls;
        btn.classList.toggle('bg-slate-900 text-white', isActive);
        btn.classList.toggle('border-slate-900 dark:border-slate-900', isActive);
      });
      updatePreview();
    };

    const updatePreview = () => {
      const displayText = displaySelect.options[displaySelect.selectedIndex].textContent;
      const visibilityText = visibilityClass ? visibilityClass.split(' ')[0] : 'visible';
      previewLabel.textContent = displayText + ' · ' + visibilityText;
      previewBox.className = baseClasses + ' ' + displaySelect.value + ' ' + visibilityClass;
    };

    displaySelect.addEventListener('change', updatePreview);
    visibilityButtons.forEach((button) => {
      button.addEventListener('click', () => setVisibility(button.dataset.visibility));
    });

    setVisibility('visible');
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Eye}
        category="Tailwind CSS · Layout"
        title="Display"
        description="Control element display type and visibility for perfect layouts"
        colorTheme="purple"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Layout className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Display System
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            👁️ Control how elements flow and display in your layout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">👁️ Display Types</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Block-level</p>
                    <p className="text-slate-600 dark:text-slate-400">block, flex, grid</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Inline-level</p>
                    <p className="text-slate-600 dark:text-slate-400">inline, inline-block</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Hidden</p>
                    <p className="text-slate-600 dark:text-slate-400">hidden, invisible</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">Table</p>
                    <p className="text-slate-600 dark:text-slate-400">table, table-row, table-cell</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 dark:from-purple-900/30 dark:via-violet-900/30 dark:to-fuchsia-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">👁️</div>
                  <div className="font-bold text-purple-700 dark:text-purple-300">Key Benefits</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Layout control
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Responsive design
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Element flow
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
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Layout className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            1. Display Types
          </CardTitle>
          <CardDescription>Block, inline, flex, grid, and more</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={displayTypesExample}
            title="Display Types"
            description="See how different display values affect element flow"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <EyeOff className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            2. Visibility & Hidden
          </CardTitle>
          <CardDescription>Control element visibility and space</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={visibilityExample}
            title="Visibility Controls"
            description="hidden vs invisible and responsive display"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Play className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </div>
            3. Display Playground
          </CardTitle>
          <CardDescription>Combine display modes, visibility, and responsive cues</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={displayPlaygroundExample}
            title="Display Playground"
            description="Experiment with every display type and visibility helper in one sandbox"
            colorTheme="sky"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Display Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Block for full-width</strong> - Use block for sections and containers</li>
            <li><strong>Flex for alignment</strong> - Use flex for centering and distribution</li>
            <li><strong>Grid for layouts</strong> - Use grid for two-dimensional layouts</li>
            <li><strong>Responsive display</strong> - Combine with md:, lg: for adaptive layouts</li>
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
              Have a question about Display? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "When should I use flex vs grid?"`} 
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
