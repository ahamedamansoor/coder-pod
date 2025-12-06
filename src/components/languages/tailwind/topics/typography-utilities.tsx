'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, AlignLeft, Bold, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
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

export default function TypographyUtilities() {
  
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
        topicTitle: 'Typography',
        question: question,
      }, provider, apiKey);
      
      setQaResult({ answer: result.answer });
    } catch (error) {
      console.error('Error asking question:', error);
    } finally {
      setIsAsking(false);
    }
  };

  const fontSizeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Font Sizes & Weights</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        📝 Typography Utilities
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Complete control over text styling
      </p>
      
      <!-- Font Sizes -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Font Sizes</h3>
        <div class="space-y-3">
          <p class="text-xs text-slate-600 dark:text-slate-400">text-xs - Extra small (0.75rem / 12px)</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">text-sm - Small (0.875rem / 14px)</p>
          <p class="text-base text-slate-700 dark:text-slate-300">text-base - Base (1rem / 16px)</p>
          <p class="text-lg text-slate-800 dark:text-slate-200">text-lg - Large (1.125rem / 18px)</p>
          <p class="text-xl text-slate-900 dark:text-white">text-xl - Extra large (1.25rem / 20px)</p>
          <p class="text-2xl font-semibold text-slate-900 dark:text-white">text-2xl - 2X large (1.5rem / 24px)</p>
          <p class="text-3xl font-bold text-slate-900 dark:text-white">text-3xl - 3X large (1.875rem / 30px)</p>
          <p class="text-4xl font-black text-slate-900 dark:text-white">text-4xl - 4X large (2.25rem / 36px)</p>
        </div>
      </div>
      
      <!-- Font Weights -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Font Weights</h3>
        <div class="space-y-2">
          <p class="font-thin text-lg text-slate-700 dark:text-slate-300">font-thin - Thin (100)</p>
          <p class="font-extralight text-lg text-slate-700 dark:text-slate-300">font-extralight - Extra light (200)</p>
          <p class="font-light text-lg text-slate-700 dark:text-slate-300">font-light - Light (300)</p>
          <p class="font-normal text-lg text-slate-700 dark:text-slate-300">font-normal - Normal (400)</p>
          <p class="font-medium text-lg text-slate-800 dark:text-slate-200">font-medium - Medium (500)</p>
          <p class="font-semibold text-lg text-slate-800 dark:text-slate-200">font-semibold - Semibold (600)</p>
          <p class="font-bold text-lg text-slate-900 dark:text-white">font-bold - Bold (700)</p>
          <p class="font-extrabold text-lg text-slate-900 dark:text-white">font-extrabold - Extra bold (800)</p>
          <p class="font-black text-lg text-slate-900 dark:text-white">font-black - Black (900)</p>
        </div>
      </div>
      
      <!-- Combining Size & Weight -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
        <h3 class="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-4">💡 Combining Size & Weight</h3>
        <div class="space-y-3">
          <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">
            Heading: text-3xl font-bold
          </div>
          <div class="text-xl font-semibold text-amber-700 dark:text-amber-300">
            Subheading: text-xl font-semibold
          </div>
          <div class="text-base font-normal text-amber-800 dark:text-amber-200">
            Body text: text-base font-normal
          </div>
          <div class="text-sm font-medium text-amber-600 dark:text-amber-400">
            Small text: text-sm font-medium
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const textAlignExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Alignment & Decorations</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
      <h1 class="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
        ↔️ Text Alignment & Style
      </h1>
      <p class="text-center text-slate-600 dark:text-slate-300 mb-8">
        Align and style your text content
      </p>
      
      <!-- Text Alignment -->
      <div class="mb-8 space-y-4">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Text Alignment</h3>
        <div class="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border border-rose-200 dark:border-rose-800">
          <p class="text-left text-rose-900 dark:text-rose-100 font-semibold">text-left - Left aligned text</p>
        </div>
        <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
          <p class="text-center text-pink-900 dark:text-pink-100 font-semibold">text-center - Center aligned text</p>
        </div>
        <div class="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-4 rounded-lg border border-fuchsia-200 dark:border-fuchsia-800">
          <p class="text-right text-fuchsia-900 dark:text-fuchsia-100 font-semibold">text-right - Right aligned text</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <p class="text-justify text-purple-900 dark:text-purple-100">text-justify - Justified text that stretches to fill the line width. This creates even edges on both sides of the paragraph.</p>
        </div>
      </div>
      
      <!-- Text Decorations -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Text Decorations</h3>
        <div class="space-y-3 text-lg">
          <p class="underline text-slate-700 dark:text-slate-300">underline - Underlined text</p>
          <p class="overline text-slate-700 dark:text-slate-300">overline - Overlined text</p>
          <p class="line-through text-slate-700 dark:text-slate-300">line-through - Strikethrough text</p>
          <p class="no-underline text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">no-underline (hover to underline)</p>
        </div>
      </div>
      
      <!-- Text Transform -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Text Transform</h3>
        <div class="space-y-3 text-lg">
          <p class="uppercase text-slate-700 dark:text-slate-300">uppercase - uppercase text</p>
          <p class="lowercase text-slate-700 dark:text-slate-300">LOWERCASE - lowercase text</p>
          <p class="capitalize text-slate-700 dark:text-slate-300">capitalize - capitalize each word</p>
          <p class="normal-case text-slate-700 dark:text-slate-300">Normal Case Text</p>
        </div>
      </div>
      
      <!-- Line Height -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-semibold text-rose-900 dark:text-rose-100 mb-2">leading-tight</h4>
          <p class="leading-tight text-sm text-rose-700 dark:text-rose-300">
            This text has tight line height. The lines are closer together for a compact look. Great for headings.
          </p>
        </div>
        <div class="bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-900/20 dark:to-fuchsia-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
          <h4 class="font-semibold text-pink-900 dark:text-pink-100 mb-2">leading-relaxed</h4>
          <p class="leading-relaxed text-sm text-pink-700 dark:text-pink-300">
            This text has relaxed line height. The lines have more space for better readability in body text.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="Tailwind CSS · Core Concepts"
        title="Typography"
        description="Master font sizes, weights, alignment, and text styling utilities"
        colorTheme="orange"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-orange-700 dark:text-orange-300">
            <div className="relative">
              <Bold className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Typography System
          </CardTitle>
          <CardDescription className="text-lg text-orange-600 dark:text-orange-400">
            ✍️ Complete text styling toolkit from fonts to decorations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-orange-700 dark:text-orange-300">📝 Typography Categories</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200/50">
                    <div className="font-semibold text-amber-900 dark:text-amber-100 text-sm mb-1">Font Size</div>
                    <code className="text-xs text-amber-700 dark:text-amber-300">text-xs to text-9xl</code>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200/50">
                    <div className="font-semibold text-orange-900 dark:text-orange-100 text-sm mb-1">Font Weight</div>
                    <code className="text-xs text-orange-700 dark:text-orange-300">font-thin to font-black</code>
                  </div>
                  <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg border border-rose-200/50">
                    <div className="font-semibold text-rose-900 dark:text-rose-100 text-sm mb-1">Alignment</div>
                    <code className="text-xs text-rose-700 dark:text-rose-300">text-left, center, right</code>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg border border-pink-200/50">
                    <div className="font-semibold text-pink-900 dark:text-pink-100 text-sm mb-1">Line Height</div>
                    <code className="text-xs text-pink-700 dark:text-pink-300">leading-tight to loose</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-rose-900/30 p-6 rounded-xl border border-orange-200/50 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="text-3xl">✍️</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300">Best Practices</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Use text-base for body
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Combine size + weight
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Use leading-relaxed
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
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Type className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            1. Font Sizes & Weights
          </CardTitle>
          <CardDescription>Control text size and weight for visual hierarchy</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={fontSizeExample}
            title="Font Sizes & Weights"
            description="Complete scale from text-xs to text-4xl with all weight options"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <AlignLeft className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            2. Text Alignment & Decorations
          </CardTitle>
          <CardDescription>Align, transform, and decorate your text</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={textAlignExample}
            title="Text Styling"
            description="Alignment, decorations, transforms, and line height"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Typography Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Hierarchy</strong> - Use text-4xl+ font-bold for headings</li>
            <li><strong>Readability</strong> - text-base with leading-relaxed for body text</li>
            <li><strong>Consistency</strong> - Stick to a limited set of sizes</li>
            <li><strong>Contrast</strong> - Ensure text is readable in both light/dark modes</li>
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
              Have a question about Typography? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={`e.g., "What font size should I use for headings?"`} 
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
