'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Sparkles, CheckCircle, Lightbulb, ArrowRight, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Animations() {

  const builtInHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid md:grid-cols-4 gap-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
      <div class="w-16 h-16 bg-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p class="font-semibold text-gray-800 dark:text-white">animate-spin</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
      <div class="w-16 h-16 bg-green-500 rounded-full animate-ping mx-auto mb-4"></div>
      <p class="font-semibold text-gray-800 dark:text-white">animate-ping</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
      <div class="w-16 h-16 bg-purple-500 rounded-full animate-pulse mx-auto mb-4"></div>
      <p class="font-semibold text-gray-800 dark:text-white">animate-pulse</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
      <div class="w-16 h-16 bg-pink-500 rounded-full animate-bounce mx-auto mb-4"></div>
      <p class="font-semibold text-gray-800 dark:text-white">animate-bounce</p>
    </div>
  </div>
</div>`;

  const loadingHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="bg-white dark:bg-slate-800 rounded-xl p-8 text-center">
    <div class="flex justify-center gap-2 mb-6">
      <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
      <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
      <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
    </div>
    <p class="text-gray-600 dark:text-gray-400">Loading...</p>
  </div>
</div>`;

  const buttonHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="flex flex-wrap gap-4 justify-center">
    <button class="relative bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition overflow-hidden group">
      <span class="relative z-10">Hover Me</span>
      <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-pulse"></div>
    </button>
    
    <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:animate-pulse transition">
      Pulse on Hover
    </button>
    
    <button class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold animate-bounce">
      Bouncing Button
    </button>
  </div>
</div>`;

  const notificationHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="max-w-sm mx-auto">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 flex items-start gap-4 animate-pulse">
      <div class="relative">
        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          1
        </div>
        <div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        <div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
      </div>
      <div class="flex-1">
        <h4 class="font-bold text-gray-800 dark:text-white">New Notification</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">You have unread messages</p>
      </div>
    </div>
  </div>
</div>`;

  const successHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 text-center">
    <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
      <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Success!</h3>
    <p class="text-gray-600 dark:text-gray-400">Your action was completed successfully</p>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="Tailwind CSS · Effects & Interactivity"
        title="Animations"
        description="Built-in animations: spin, ping, pulse, bounce"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            Built-in Animations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Four Animations</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">animate-spin</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">animate-ping</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">animate-pulse</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">animate-bounce</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={builtInHTML}
            title="All Animations"
            description="Four built-in animation utilities"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            Loading Indicators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={loadingHTML}
            title="Loading Animation"
            description="Bouncing dots loader"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Animated Buttons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={buttonHTML}
            title="Interactive Buttons"
            description="Buttons with animations"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            Notification Badge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={notificationHTML}
            title="Animated Notification"
            description="Pulsing badge effect"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Success Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={successHTML}
            title="Success Animation"
            description="Bouncing success indicator"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Animation Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">animate-spin</code> perfect for loading spinners</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">animate-ping</code> for notification badges</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use animations sparingly - too many can be distracting</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
