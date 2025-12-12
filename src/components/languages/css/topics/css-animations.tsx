'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Film, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Play, Repeat
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssAnimationsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAnimations({ onOpenWebPlayground }: CssAnimationsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Film}
        category="CSS · Animations & Effects"
        title="CSS Animations"
        description="Create complex multi-step animations with keyframes"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Film className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Animations</CardTitle>
              <CardDescription className="text-base">Multi-step keyframe animations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Animations vs Transitions</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <strong>Transitions:</strong> Simple A → B changes (hover effects)<br />
              <strong>Animations:</strong> Complex multi-step sequences with full control (keyframes)
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-2">Step 1: Define @keyframes</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Create animation sequence with multiple steps
              </p>
            </div>
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="font-bold mb-2">Step 2: Apply animation</h3>
              <p className="text-sm text-green-800 dark:text-green-200">
                Use animation property on element
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Play className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Creating Keyframes
          </CardTitle>
          <CardDescription>Define animation steps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Basic Keyframes Example
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}

.box {
  animation: slide 2s ease infinite;
}`}
              </code>
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Box slides right, then returns to start, repeating forever!
            </p>
          </div>

          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      background: white;
      padding: 60px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      width: 90%;
      max-width: 600px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-30px);
      }
    }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    
    .demo-box {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 12px;
      margin: 0 auto;
    }
    
    .bounce {
      animation: bounce 1s ease infinite;
    }
    
    .spin {
      animation: spin 2s linear infinite;
    }
    
    .pulse {
      animation: pulse 1.5s ease infinite;
    }
    
    .label {
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎬 Keyframe Animations</h1>
    
    <div class="demo-grid">
      <div>
        <div class="demo-box bounce"></div>
        <div class="label">Bounce</div>
      </div>
      
      <div>
        <div class="demo-box spin"></div>
        <div class="label">Spin</div>
      </div>
      
      <div>
        <div class="demo-box pulse"></div>
        <div class="label">Pulse</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Keyframe Animations"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Repeat className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Animation Properties
          </CardTitle>
          <CardDescription>Control animation behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { prop: 'animation-name', desc: 'Which keyframes to use', example: 'slide' },
              { prop: 'animation-duration', desc: 'How long', example: '2s' },
              { prop: 'animation-timing-function', desc: 'Speed curve', example: 'ease' },
              { prop: 'animation-delay', desc: 'Wait before start', example: '1s' },
              { prop: 'animation-iteration-count', desc: 'How many times', example: 'infinite' },
              { prop: 'animation-direction', desc: 'Play direction', example: 'alternate' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
                <code className="font-mono font-bold text-blue-700 dark:text-blue-400 block mb-2">{item.prop}</code>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">{item.desc}</p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">{item.example}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
            Animation Shorthand
          </CardTitle>
          <CardDescription>All properties in one line</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`/* name | duration | timing | delay | iteration | direction */
animation: slide 2s ease 0s infinite alternate;

/* Shorthand */
animation: bounce 1s ease-in-out infinite;`}
              </code>
            </div>
          </div>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Common Pattern</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">infinite alternate</code> makes 
              animations play forward then backward continuously - perfect for smooth loops!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>@keyframes</strong> defines animation steps</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>animation</strong> property applies the animation</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>infinite</strong> loops animation forever</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use percentages (0%, 50%, 100%) for steps</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
