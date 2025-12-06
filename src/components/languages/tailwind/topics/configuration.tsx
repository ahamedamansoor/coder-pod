'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Settings, Palette, Type, Wrench, CheckCircle, Sparkles, Zap, Code2, Layout, Box, HelpCircle } from 'lucide-react';
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

export default function Configuration() {
  
  const [activeTab, setActiveTab] = useState('colors');
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
        topicTitle: 'Configuration',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  // Custom Colors Example
  const customColorsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Colors Configuration</title>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'brand-blue': '#0066FF',
            'brand-purple': '#7C3AED',
            'brand-pink': '#EC4899',
          }
        }
      }
    }
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        🎨 Custom Color Palette
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Define your brand colors once, use them everywhere
      </p>
      
      <!-- Custom Color Cards -->
      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-brand-blue rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-2xl mb-2">💙</div>
          <h3 class="font-bold text-lg mb-1">Brand Blue</h3>
          <code class="text-xs opacity-90">bg-brand-blue</code>
          <p class="text-sm mt-2 opacity-90">#0066FF</p>
        </div>
        
        <div class="bg-brand-purple rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-2xl mb-2">💜</div>
          <h3 class="font-bold text-lg mb-1">Brand Purple</h3>
          <code class="text-xs opacity-90">bg-brand-purple</code>
          <p class="text-sm mt-2 opacity-90">#7C3AED</p>
        </div>
        
        <div class="bg-brand-pink rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow">
          <div class="text-2xl mb-2">💗</div>
          <h3 class="font-bold text-lg mb-1">Brand Pink</h3>
          <code class="text-xs opacity-90">bg-brand-pink</code>
          <p class="text-sm mt-2 opacity-90">#EC4899</p>
        </div>
      </div>
      
      <!-- Usage Examples -->
      <div class="space-y-4">
        <button class="w-full bg-brand-blue hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          Primary Button (Brand Blue)
        </button>
        
        <button class="w-full bg-brand-purple hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
          Secondary Button (Brand Purple)
        </button>
        
        <div class="border-l-4 border-brand-pink bg-pink-50 dark:bg-pink-900/20 p-4 rounded">
          <p class="text-brand-pink dark:text-pink-300 font-semibold">
            ✨ Custom colors work with all utilities: backgrounds, text, borders, and more!
          </p>
        </div>
      </div>
      
      <!-- Config Display -->
      <div class="mt-6 bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div class="text-xs font-mono text-slate-800 dark:text-slate-200">
          <div class="text-slate-500 dark:text-slate-400">// tailwind.config.js</div>
          <div>theme: {</div>
          <div>  extend: {</div>
          <div>    colors: {</div>
          <div class="text-brand-blue">      'brand-blue': '#0066FF',</div>
          <div class="text-brand-purple">      'brand-purple': '#7C3AED',</div>
          <div class="text-brand-pink">      'brand-pink': '#EC4899',</div>
          <div>    }</div>
          <div>  }</div>
          <div>}</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Custom Fonts Example
  const customFontsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Fonts Configuration</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            'display': ['"Playfair Display"', 'serif'],
            'body': ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8 font-body">
  <div class="max-w-4xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <!-- Display Font Example -->
      <h1 class="font-display text-5xl font-black text-center mb-2 text-slate-900 dark:text-white">
        Beautiful Typography
      </h1>
      <p class="font-body text-center text-slate-600 dark:text-slate-300 mb-8">
        Custom font families for headings and body text
      </p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <!-- Display Font Card -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <div class="text-3xl mb-3">🎭</div>
          <h3 class="font-display text-3xl font-bold mb-2 text-purple-900 dark:text-purple-100">
            Display Font
          </h3>
          <p class="font-body text-sm text-purple-700 dark:text-purple-300 mb-3">
            Playfair Display - Perfect for headings and hero text
          </p>
          <code class="text-xs bg-purple-100 dark:bg-purple-950 px-2 py-1 rounded text-purple-700 dark:text-purple-300">
            font-display
          </code>
        </div>
        
        <!-- Body Font Card -->
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div class="text-3xl mb-3">📝</div>
          <h3 class="font-body text-2xl font-bold mb-2 text-blue-900 dark:text-blue-100">
            Body Font
          </h3>
          <p class="font-body text-sm text-blue-700 dark:text-blue-300 mb-3">
            Inter - Clean and readable for body text and UI elements
          </p>
          <code class="text-xs bg-blue-100 dark:bg-blue-950 px-2 py-1 rounded text-blue-700 dark:text-blue-300">
            font-body
          </code>
        </div>
      </div>
      
      <!-- Sample Content -->
      <article class="space-y-4">
        <h2 class="font-display text-3xl font-bold text-slate-900 dark:text-white">
          The Power of Custom Fonts
        </h2>
        <p class="font-body text-slate-600 dark:text-slate-300 leading-relaxed">
          With Tailwind's configuration, you can define custom font families that align with your brand. 
          Use <span class="font-semibold text-slate-900 dark:text-white">font-display</span> for eye-catching headings 
          and <span class="font-semibold text-slate-900 dark:text-white">font-body</span> for comfortable reading.
        </p>
        
        <div class="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
          <p class="font-body text-xs text-slate-600 dark:text-slate-400 mb-2">Configuration:</p>
          <code class="font-mono text-xs text-slate-800 dark:text-slate-200">
            fontFamily: { 'display': ['"Playfair Display"', 'serif'] }
          </code>
        </div>
      </article>
    </div>
  </div>
</body>
</html>`;

  // Custom Spacing Example
  const customSpacingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Spacing Configuration</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          spacing: {
            '72': '18rem',
            '84': '21rem',
            '96': '24rem',
            '128': '32rem',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📏 Custom Spacing Scale
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Extend Tailwind's spacing system with your own values
      </p>
      
      <!-- Spacing Visualization -->
      <div class="space-y-4 mb-8">
        <div class="flex items-center gap-4">
          <span class="w-20 text-sm font-mono text-slate-600 dark:text-slate-400">w-72</span>
          <div class="w-72 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            18rem (288px)
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <span class="w-20 text-sm font-mono text-slate-600 dark:text-slate-400">w-84</span>
          <div class="w-84 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            21rem (336px)
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <span class="w-20 text-sm font-mono text-slate-600 dark:text-slate-400">w-96</span>
          <div class="w-96 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            24rem (384px)
          </div>
        </div>
      </div>
      
      <!-- Use Cases -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xl">
              📐
            </div>
            <div>
              <h3 class="font-bold text-emerald-900 dark:text-emerald-100">Width & Height</h3>
              <p class="text-xs text-emerald-600 dark:text-emerald-400">Custom dimensions</p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <code class="block bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded text-emerald-700 dark:text-emerald-300">w-72 h-72</code>
            <code class="block bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded text-emerald-700 dark:text-emerald-300">max-w-96</code>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
              📦
            </div>
            <div>
              <h3 class="font-bold text-blue-900 dark:text-blue-100">Margin & Padding</h3>
              <p class="text-xs text-blue-600 dark:text-blue-400">Spacing utilities</p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <code class="block bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded text-blue-700 dark:text-blue-300">p-72 m-84</code>
            <code class="block bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded text-blue-700 dark:text-blue-300">gap-96</code>
          </div>
        </div>
      </div>
      
      <!-- Config -->
      <div class="mt-6 bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div class="text-xs font-mono text-slate-800 dark:text-slate-200">
          <div class="text-slate-500 dark:text-slate-400">// Custom spacing values</div>
          <div>spacing: {</div>
          <div class="text-emerald-600 dark:text-emerald-400">  '72': '18rem',  // 288px</div>
          <div class="text-cyan-600 dark:text-cyan-400">  '84': '21rem',  // 336px</div>
          <div class="text-blue-600 dark:text-blue-400">  '96': '24rem',  // 384px</div>
          <div>}</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Settings}
        category="Tailwind CSS · Customization"
        title="Configuration"
        description="Customize Tailwind to match your brand - colors, fonts, spacing, and more"
        colorTheme="purple"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Wrench className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Tailwind Configuration
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            🎨 Make Tailwind your own - customize colors, fonts, spacing, and extend with your own utilities
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Configuration Tabs */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Configuration Options
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setActiveTab('colors')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      activeTab === 'colors'
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    🎨 Colors
                  </button>
                  <button
                    onClick={() => setActiveTab('fonts')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      activeTab === 'fonts'
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    📝 Fonts
                  </button>
                  <button
                    onClick={() => setActiveTab('spacing')}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      activeTab === 'spacing'
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    📏 Spacing
                  </button>
                </div>

                {activeTab === 'colors' && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200/50">
                    <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      💡 Custom Brand Colors
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">
                      Define your brand colors once in the config and use them everywhere with utilities like bg-brand-blue, text-brand-purple!
                    </div>
                  </div>
                )}

                {activeTab === 'fonts' && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-lg border border-amber-200/50">
                    <div className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                      <Type className="w-4 h-4" />
                      💡 Custom Typography
                    </div>
                    <div className="text-xs text-amber-600 dark:text-amber-400">
                      Add custom font families for display text, body text, and monospace code. Perfect for maintaining brand consistency!
                    </div>
                  </div>
                )}

                {activeTab === 'spacing' && (
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-emerald-200/50">
                    <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                      <Box className="w-4 h-4" />
                      💡 Custom Spacing Scale
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400">
                      Extend the spacing scale with your own values for width, height, padding, margin, and gap utilities!
                    </div>
                  </div>
                )}
              </div>

              {/* Config File Structure */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  📄 Config File Structure
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Layout className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Content Paths</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Tell Tailwind which files to scan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Palette className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Theme Extension</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Add custom colors, fonts, spacing</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200/50">
                    <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm">Plugins</div>
                      <div className="text-xs text-emerald-700 dark:text-emerald-300">Add additional functionality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">⚙️</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Why Configure?</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Brand consistency
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Custom utilities
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Extend defaults
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Team alignment
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use extend to add to defaults, not replace them. This keeps all of Tailwind's utilities available!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CUSTOM COLORS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Custom Colors
          </CardTitle>
          <CardDescription>
            Define your brand colors and use them throughout your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={customColorsHtml}
            title="Custom Brand Colors"
            description="Add custom colors to your Tailwind configuration"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">💡 Key Points:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>extend.colors</strong> - Add colors without removing default ones</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Naming</strong> - Use descriptive names like 'brand-blue' or 'primary'</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>All utilities</strong> - Works with bg-, text-, border-, and more</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CUSTOM FONTS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Type className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            2. Custom Fonts
          </CardTitle>
          <CardDescription>
            Add custom font families for different text styles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={customFontsHtml}
            title="Custom Typography"
            description="Configure custom font families for your project"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">📝 Font Configuration:</h4>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>font-display</strong> - For headings and hero text</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>font-body</strong> - For body text and UI elements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Import fonts</strong> - Use Google Fonts or local font files</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CUSTOM SPACING */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Box className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Custom Spacing
          </CardTitle>
          <CardDescription>
            Extend the spacing scale with your own values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={customSpacingHtml}
            title="Custom Spacing Scale"
            description="Add custom spacing values for consistent layouts"
            colorTheme="green"
            styleLanguage="tailwind"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">📏 Spacing Usage:</h4>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Width/Height</strong> - w-72, h-84, max-w-96</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Padding/Margin</strong> - p-72, m-84, px-96</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Gap</strong> - gap-72, space-x-84</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CONFIG FILE REFERENCE */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Complete configuration file example
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm font-mono text-slate-600 dark:text-slate-400">tailwind.config.js</span>
            </div>
            <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto"><code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0066FF',
        'brand-purple': '#7C3AED',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Configuration Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use extend</strong> - Don't replace defaults, add to them</li>
            <li><strong>Meaningful names</strong> - Use descriptive names like 'brand-primary' not 'color1'</li>
            <li><strong>Document choices</strong> - Comment your config to explain design decisions</li>
            <li><strong>Version control</strong> - Commit your config file for team consistency</li>
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
              Have a question about Configuration? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "How do I add custom colors to my config?"`} 
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
        }}
      />
    </div>
  );
}
