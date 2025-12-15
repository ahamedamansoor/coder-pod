'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Palette, Box, Type, Layout, CheckCircle, Sparkles, Zap, Code2, ArrowRight, HelpCircle } from 'lucide-react';
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
import { marked } from 'marked';

export default function UtilityFirstClasses() {
  
  const [comparisonView, setComparisonView] = useState('traditional');
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
      
      const structuredPrompt = `You are an expert Tailwind CSS tutor. Answer this question with clear, structured examples that follow Tailwind best practices.

**Question:** ${question}

**Topic Context:** Utility-First Classes

**CRITICAL: Provide a complete working example with HTML, CSS, and JavaScript separated into distinct code blocks.**

**Format your answer EXACTLY like this:**

## 🎯 Quick Answer
[Direct 1-2 sentence answer]

## 📖 Detailed Explanation
[Explain clearly in 2-3 short paragraphs. Use simple language.]

## 💻 Live Preview Code

### HTML:
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Utility-First Demo</title>
  <!-- Note: In a real app, Tailwind is compiled. This is a conceptual example. -->
</head>
<body class="min-h-screen bg-slate-50 text-slate-900 p-6">
  <div class="max-w-xl mx-auto space-y-4">
    <h1 class="text-3xl font-bold tracking-tight">Utility-First Card</h1>
    <p class="text-slate-600">A small example showing how utilities replace custom CSS classes.</p>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">Pro Plan</h2>
        <span class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">Popular</span>
      </div>
      <p class="mt-2 text-slate-600">Everything you need to build fast.</p>
      <div class="mt-4 flex items-center gap-3">
        <button id="cta" class="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
        <button class="rounded-xl border border-slate-200 px-4 py-2 font-semibold hover:bg-slate-50 transition">
          Learn more
        </button>
      </div>
    </div>
  </div>
</body>
</html>
\`\`\`

### CSS:
\`\`\`css
/* Optional: small demo-only styles. Tailwind normally replaces most custom CSS. */
/* Keep empty unless you truly need custom styling. */
\`\`\`

### JavaScript (if needed):
\`\`\`javascript
document.getElementById('cta')?.addEventListener('click', () => {
  alert('Utility-first: behavior stays in JS, styling stays in utilities.');
});
\`\`\`

## ✅ Best Practices
- Use semantic HTML and compose utilities.
- Extract repeated patterns into components.
- Reach for custom CSS only when needed.

## ❌ Common Mistakes to Avoid
- Overusing arbitrary values without a design system.
- Duplicating long class strings everywhere.
- Mixing conflicting utilities without intent.

## 📚 Summary
[2-3 sentence recap emphasizing the key takeaway]
`;

      const result = await conductInterview({
        provider,
        apiKey,
        language: 'Tailwind CSS',
        question: structuredPrompt,
        userAnswer: 'Please follow the structured format provided above exactly, with all sections and formatting.',
        previousQuestions: [],
        questionType: 'theory',
      });
      
      marked.setOptions({
        breaks: true,
        gfm: true,
      });

      let parsedAnswer = await marked(result.idealAnswer);
      parsedAnswer = parsedAnswer
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ');

      setQaResult({ answer: parsedAnswer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  // Traditional vs Utility-First Comparison
  const traditionalCssHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traditional CSS Approach</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
      }
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #1e293b;
      }
    }
    
    .card-title {
      font-size: 28px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-title {
        color: #f1f5f9;
      }
    }
    
    .card-description {
      color: #64748b;
      margin-bottom: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-description {
        color: #cbd5e1;
      }
    }
    
    .button {
      background: #ef4444;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .button:hover {
      background: #dc2626;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h2 class="card-title">❌ Traditional CSS</h2>
      <p class="card-description">
        You need to write custom CSS classes for every component. 
        Switching between HTML and CSS files slows down development.
      </p>
      <button class="button">Click Me</button>
      
      <div style="margin-top: 20px; padding: 16px; background: #fee2e2; border-left: 4px solid #ef4444; border-radius: 8px;">
        <p style="color: #991b1b; font-size: 14px;">
          <strong>⚠️ Problems:</strong> Lots of custom CSS, naming classes, context switching
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  const utilityFirstHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Utility-First Approach</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950 min-h-screen p-10">
  <div class="max-w-2xl mx-auto">
    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-3">
        ✅ Utility-First CSS
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        Style elements directly in HTML using pre-built utility classes. 
        No need to write custom CSS or switch between files!
      </p>
      <button class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/50">
        Click Me
      </button>
      
      <div class="mt-5 p-4 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-lg">
        <p class="text-emerald-900 dark:text-emerald-100 text-sm">
          <strong>✨ Benefits:</strong> Fast development, no CSS files, consistent design system
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Colors & Backgrounds
  const colorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colors & Backgrounds</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎨 Colors & Backgrounds
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Tailwind provides a comprehensive color palette with shades from 50-950
      </p>
      
      <!-- Background Colors -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Background Colors</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-blue-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
            <div class="text-2xl mb-2">💙</div>
            <div class="font-semibold">bg-blue-500</div>
          </div>
          <div class="bg-purple-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
            <div class="text-2xl mb-2">💜</div>
            <div class="font-semibold">bg-purple-500</div>
          </div>
          <div class="bg-pink-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
            <div class="text-2xl mb-2">💗</div>
            <div class="font-semibold">bg-pink-500</div>
          </div>
          <div class="bg-emerald-500 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-shadow">
            <div class="text-2xl mb-2">💚</div>
            <div class="font-semibold">bg-emerald-500</div>
          </div>
        </div>
      </div>
      
      <!-- Text Colors -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Text Colors</h3>
        <div class="space-y-2">
          <p class="text-blue-600 dark:text-blue-400 text-lg font-semibold">text-blue-600 • Blue text for links</p>
          <p class="text-red-600 dark:text-red-400 text-lg font-semibold">text-red-600 • Red text for errors</p>
          <p class="text-green-600 dark:text-green-400 text-lg font-semibold">text-green-600 • Green text for success</p>
          <p class="text-amber-600 dark:text-amber-400 text-lg font-semibold">text-amber-600 • Amber text for warnings</p>
        </div>
      </div>
      
      <!-- Gradients -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Gradient Backgrounds</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-semibold mb-1">Horizontal Gradient</div>
            <code class="text-xs opacity-90">from-cyan-500 to-blue-500</code>
          </div>
          <div class="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl p-6 text-white text-center shadow-lg">
            <div class="font-semibold mb-1">Diagonal Gradient</div>
            <code class="text-xs opacity-90">from-purple-500 via-pink-500 to-red-500</code>
          </div>
        </div>
      </div>
      
      <!-- Color Shades -->
      <div class="mt-8 p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
        <h4 class="font-semibold text-slate-900 dark:text-white mb-3">💡 Color Shades</h4>
        <div class="flex items-center gap-2 overflow-x-auto pb-2">
          <div class="bg-blue-50 dark:bg-blue-950 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0">50</div>
          <div class="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0">100</div>
          <div class="bg-blue-200 dark:bg-blue-800 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0">200</div>
          <div class="bg-blue-300 dark:bg-blue-700 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">300</div>
          <div class="bg-blue-400 dark:bg-blue-600 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">400</div>
          <div class="bg-blue-500 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">500</div>
          <div class="bg-blue-600 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">600</div>
          <div class="bg-blue-700 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">700</div>
          <div class="bg-blue-800 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">800</div>
          <div class="bg-blue-900 dark:bg-blue-100 w-16 h-16 rounded flex items-center justify-center text-xs font-mono shrink-0 text-white">900</div>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">
          Each color has 10 shades (50-950) for maximum flexibility
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Spacing & Sizing
  const spacingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spacing & Sizing</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📏 Spacing & Sizing
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Consistent spacing system based on 0.25rem (4px) increments
      </p>
      
      <!-- Padding Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Padding (p-*)</h3>
        <div class="space-y-3">
          <div class="bg-violet-100 dark:bg-violet-900/30 rounded-lg">
            <div class="bg-violet-500 text-white p-2 rounded-lg text-center font-semibold">
              p-2 (0.5rem / 8px)
            </div>
          </div>
          <div class="bg-violet-100 dark:bg-violet-900/30 rounded-lg">
            <div class="bg-violet-500 text-white p-4 rounded-lg text-center font-semibold">
              p-4 (1rem / 16px)
            </div>
          </div>
          <div class="bg-violet-100 dark:bg-violet-900/30 rounded-lg">
            <div class="bg-violet-500 text-white p-8 rounded-lg text-center font-semibold">
              p-8 (2rem / 32px)
            </div>
          </div>
        </div>
      </div>
      
      <!-- Margin Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Margin (m-*)</h3>
        <div class="bg-slate-100 dark:bg-slate-900 rounded-xl p-4">
          <div class="flex items-center gap-4">
            <div class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
              No Margin
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
            <div class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg mx-4">
              mx-4
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
            <div class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg mx-8">
              mx-8
            </div>
          </div>
        </div>
      </div>
      
      <!-- Width & Height -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Width & Height</h3>
        <div class="grid grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              w-16<br/>h-16
            </div>
            <p class="text-xs text-center text-slate-600 dark:text-slate-400">4rem</p>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              w-24<br/>h-24
            </div>
            <p class="text-xs text-center text-slate-600 dark:text-slate-400">6rem</p>
          </div>
          <div class="space-y-2">
            <div class="w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              w-32<br/>h-32
            </div>
            <p class="text-xs text-center text-slate-600 dark:text-slate-400">8rem</p>
          </div>
          <div class="space-y-2">
            <div class="w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              w-40<br/>h-40
            </div>
            <p class="text-xs text-center text-slate-600 dark:text-slate-400">10rem</p>
          </div>
        </div>
      </div>
      
      <!-- Gap (Flexbox/Grid) -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Gap (Flexbox/Grid Spacing)</h3>
        <div class="space-y-4">
          <div class="flex gap-2 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">gap-2</div>
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">0.5rem</div>
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">spacing</div>
          </div>
          <div class="flex gap-4 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">gap-4</div>
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">1rem</div>
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">spacing</div>
          </div>
          <div class="flex gap-8 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">gap-8</div>
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">2rem</div>
            <div class="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">spacing</div>
          </div>
        </div>
      </div>
      
      <!-- Spacing Scale Reference -->
      <div class="mt-8 p-6 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl border border-violet-200 dark:border-violet-800">
        <h4 class="font-semibold text-violet-900 dark:text-violet-100 mb-3">💡 Spacing Scale</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">0</code> = 0px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">1</code> = 4px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">2</code> = 8px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">4</code> = 16px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">8</code> = 32px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">16</code> = 64px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">32</code> = 128px</div>
          <div><code class="bg-violet-100 dark:bg-violet-950 px-2 py-1 rounded">64</code> = 256px</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Typography
  const typographyExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typography Utilities</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📝 Typography Utilities
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Complete control over text styling with utility classes
      </p>
      
      <!-- Font Sizes -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Font Sizes</h3>
        <div class="space-y-3">
          <p class="text-xs text-slate-600 dark:text-slate-400">text-xs • Extra small text (0.75rem)</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">text-sm • Small text (0.875rem)</p>
          <p class="text-base text-slate-700 dark:text-slate-300">text-base • Base text (1rem)</p>
          <p class="text-lg text-slate-800 dark:text-slate-200">text-lg • Large text (1.125rem)</p>
          <p class="text-xl text-slate-900 dark:text-white">text-xl • Extra large text (1.25rem)</p>
          <p class="text-2xl font-semibold text-slate-900 dark:text-white">text-2xl • 2X large (1.5rem)</p>
          <p class="text-4xl font-bold text-slate-900 dark:text-white">text-4xl • 4X large (2.25rem)</p>
        </div>
      </div>
      
      <!-- Font Weights -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Font Weights</h3>
        <div class="space-y-2">
          <p class="font-thin text-lg text-slate-700 dark:text-slate-300">font-thin • Thin weight (100)</p>
          <p class="font-light text-lg text-slate-700 dark:text-slate-300">font-light • Light weight (300)</p>
          <p class="font-normal text-lg text-slate-700 dark:text-slate-300">font-normal • Normal weight (400)</p>
          <p class="font-medium text-lg text-slate-700 dark:text-slate-300">font-medium • Medium weight (500)</p>
          <p class="font-semibold text-lg text-slate-800 dark:text-slate-200">font-semibold • Semibold weight (600)</p>
          <p class="font-bold text-lg text-slate-900 dark:text-white">font-bold • Bold weight (700)</p>
          <p class="font-black text-lg text-slate-900 dark:text-white">font-black • Black weight (900)</p>
        </div>
      </div>
      
      <!-- Text Alignment -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Text Alignment</h3>
        <div class="space-y-3">
          <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <p class="text-left text-amber-900 dark:text-amber-100">text-left • Left aligned text</p>
          </div>
          <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
            <p class="text-center text-orange-900 dark:text-orange-100">text-center • Center aligned text</p>
          </div>
          <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <p class="text-right text-red-900 dark:text-red-100">text-right • Right aligned text</p>
          </div>
        </div>
      </div>
      
      <!-- Text Decorations -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Text Decorations</h3>
        <div class="space-y-2 text-lg">
          <p class="underline text-slate-700 dark:text-slate-300">underline • Underlined text</p>
          <p class="line-through text-slate-700 dark:text-slate-300">line-through • Strikethrough text</p>
          <p class="uppercase text-slate-700 dark:text-slate-300">uppercase • Uppercase text</p>
          <p class="lowercase text-slate-700 dark:text-slate-300">LOWERCASE • Lowercase text</p>
          <p class="capitalize text-slate-700 dark:text-slate-300">capitalize • Capitalized text</p>
        </div>
      </div>
      
      <!-- Line Height & Letter Spacing -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Line Height & Spacing</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="font-semibold text-sm mb-2 text-slate-900 dark:text-white">leading-tight</p>
            <p class="leading-tight text-sm text-slate-600 dark:text-slate-400">
              This text has tight line height. The lines are closer together for a compact look.
            </p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p class="font-semibold text-sm mb-2 text-slate-900 dark:text-white">leading-relaxed</p>
            <p class="leading-relaxed text-sm text-slate-600 dark:text-slate-400">
              This text has relaxed line height. The lines have more space for better readability.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Quick Reference -->
      <div class="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
        <h4 class="font-semibold text-amber-900 dark:text-amber-100 mb-3">💡 Typography Tips</h4>
        <ul class="space-y-2 text-sm text-amber-800 dark:text-amber-200">
          <li>✓ Use text-base for body copy</li>
          <li>✓ Combine font-bold with text-2xl+ for headings</li>
          <li>✓ Use leading-relaxed for better readability</li>
          <li>✓ text-slate-600 dark:text-slate-400 for secondary text</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Core Concepts"
        title="Utility-First Classes"
        description="Build anything with pre-built utility classes - the foundation of Tailwind CSS"
        colorTheme="blue"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Code2 className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are Utility-First Classes?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🚀 Style elements directly in HTML using single-purpose utility classes instead of writing custom CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Comparison Selector */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Traditional vs Utility-First
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <button
                    onClick={() => setComparisonView('traditional')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      comparisonView === 'traditional'
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/30 ring-2 ring-red-200 dark:ring-red-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-700'
                    }`}
                  >
                    <div className="text-3xl mb-2">❌</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Traditional CSS</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Custom classes</p>
                  </button>
                  
                  <button
                    onClick={() => setComparisonView('utility')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      comparisonView === 'utility'
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 ring-2 ring-emerald-200 dark:ring-emerald-800'
                        : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700'
                    }`}
                  >
                    <div className="text-3xl mb-2">✅</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Utility-First</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">No custom CSS</p>
                  </button>
                </div>

                {comparisonView === 'traditional' && (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg border border-red-200/50">
                    <div className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      ❌ Traditional Problems
                    </div>
                    <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                      <li>• Need to create custom CSS classes</li>
                      <li>• Switch between HTML and CSS files</li>
                      <li>• Think of class names</li>
                      <li>• CSS file grows over time</li>
                    </ul>
                  </div>
                )}

                {comparisonView === 'utility' && (
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-emerald-200/50">
                    <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      ✅ Utility-First Benefits
                    </div>
                    <ul className="text-xs text-emerald-600 dark:text-emerald-400 space-y-1">
                      <li>• Style directly in HTML</li>
                      <li>• No context switching</li>
                      <li>• No naming struggles</li>
                      <li>• Tiny production CSS</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Utility Categories */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Layout className="w-5 h-5" />
                  📦 Utility Categories
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Palette className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Colors</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">bg-, text-, border-</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Box className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Spacing</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">p-, m-, gap-</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200/50">
                    <Type className="w-6 h-6 text-amber-500" />
                    <div>
                      <div className="font-semibold text-amber-700 dark:text-amber-300 text-sm">Typography</div>
                      <div className="text-xs text-amber-600 dark:text-amber-400">text-, font-</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200/50">
                    <Layout className="w-6 h-6 text-emerald-500" />
                    <div>
                      <div className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">Layout</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400">flex-, grid-, w-, h-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">🎯</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Why Utility-First?</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      10x faster development
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent design system
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      No CSS bloat
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Easy to maintain
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Combine utilities to create any design. No need to write custom CSS!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* COMPARISON */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Traditional CSS vs Utility-First
          </CardTitle>
          <CardDescription>
            See the difference in approach - same result, different methods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FrontendCodePreview
              html={traditionalCssHtml}
              title="Traditional Approach"
              description="Custom CSS classes with separate stylesheet"
              colorTheme="red"
              styleLanguage="css"
            />
            <FrontendCodePreview
              html={utilityFirstHtml}
              title="Utility-First Approach"
              description="Tailwind utility classes directly in HTML"
              colorTheme="green"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* COLORS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Colors & Backgrounds
          </CardTitle>
          <CardDescription>
            Comprehensive color palette with 10 shades per color
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorsExample}
            title="Color Utilities"
            description="Background colors, text colors, and gradients"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* SPACING */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Box className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            2. Spacing & Sizing
          </CardTitle>
          <CardDescription>
            Consistent spacing system for padding, margin, width, and height
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={spacingExample}
            title="Spacing Utilities"
            description="Padding, margin, gap, width, and height utilities"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* TYPOGRAPHY */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Type className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            3. Typography
          </CardTitle>
          <CardDescription>
            Complete text styling utilities for any design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={typographyExample}
            title="Typography Utilities"
            description="Font sizes, weights, alignment, and decorations"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Utility-First Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Compose utilities</strong> - Combine classes to create complex designs</li>
            <li><strong>Use consistent spacing</strong> - Stick to the spacing scale (4, 8, 16, etc.)</li>
            <li><strong>Extract components</strong> - For repeated patterns, create reusable components</li>
            <li><strong>Keep it readable</strong> - Format classes on multiple lines if needed</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* AI ASSISTANT SECTION */}
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
              Have a question about Utility-First Classes? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "What are the benefits of utility-first CSS?"`} 
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
          return true;
        }}
      />
    </div>
  );
}
