'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Package, 
  Repeat,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Wand2
} from 'lucide-react';

interface SassMixinNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMixinNew({ onOpenWebPlayground }: SassMixinNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="Sass/SCSS · Reusable Code"
        title="Mixins"
        description="Learn how to create reusable blocks of CSS code with mixins. Define once, use anywhere! Mixins are perfect for vendor prefixes, media queries, and commonly repeated styles."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Mixins?"
            description="Reusable blocks of CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Mixins</strong> are one of SCSS's most powerful features. They let you define a <strong>reusable block of CSS</strong> that you can include anywhere in your stylesheet. Think of them as <strong>functions for CSS</strong>!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Without Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Repeat the same styles everywhere
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">.card {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">border-radius: 8px;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">box-shadow: 0 2px 8px...</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">border-radius: 8px;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">box-shadow: 0 2px 8px...</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-red-600 dark:text-red-400 text-[10px] mt-1">❌ Repetitive!</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Define once, use anywhere
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-pink-600 dark:text-pink-400">@mixin rounded-shadow {'{ ... }'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.card {'{'}</div>
                <div className="text-blue-600 dark:text-blue-400 ml-2">@include rounded-shadow;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-blue-600 dark:text-blue-400 ml-2">@include rounded-shadow;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Reusable!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Mixin Syntax */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic Mixin Syntax"
            description="Define with @mixin, use with @include"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Create a mixin with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@mixin</code> and use it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@include</code>.
          </p>

          <div className="space-y-6">
            {/* Define Mixin */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pink-500">Step 1: Define</Badge>
                <h4 className="font-bold text-pink-700 dark:text-pink-300">Create the Mixin</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// Define a mixin</div>
                  <div className="text-pink-600 dark:text-pink-400">@mixin flex-center {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">display: flex;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">justify-content: center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">align-items: center;</div>
                  <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Use Mixin */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-500">Step 2: Include</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Use the Mixin</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-sm border border-blue-200 dark:border-blue-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// Use the mixin anywhere</div>
                  <div className="text-gray-700 dark:text-gray-300">.container {'{'}</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-4">@include flex-center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">min-height: 100vh;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.card {'{'}</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-4">@include flex-center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 2rem;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Compiled Output */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">Result</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300">Compiled CSS</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-sm border border-green-200 dark:border-green-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">.container {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">display: flex;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">justify-content: center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">align-items: center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">min-height: 100vh;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.card {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">display: flex;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">justify-content: center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">align-items: center;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 2rem;</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">DRY Principle</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Mixins follow the <strong>Don't Repeat Yourself</strong> principle. Write once, use everywhere!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Mixins with Arguments */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wand2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Mixins with Arguments"
            description="Make mixins flexible with parameters"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Mixins can accept <strong>arguments</strong> to make them more flexible. You can also provide <strong>default values</strong>.
          </p>

          <div className="space-y-6">
            {/* With Arguments */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Mixin with Parameters</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-sm border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// Mixin with arguments</div>
                  <div className="text-pink-600 dark:text-pink-400">@mixin box($width, $height, $bg) {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">width: $width;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">height: $height;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: $bg;</div>
                  <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-3">.small-box {'{'}</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-4">@include box(100px, 100px, #3b82f6);</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.large-box {'{'}</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-4">@include box(200px, 200px, #10b981);</div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>

            {/* With Default Values */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="font-bold text-pink-700 dark:text-pink-300">With Default Values</h4>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-4 font-mono text-sm border border-pink-200 dark:border-pink-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// Default values</div>
                  <div className="text-pink-600 dark:text-pink-400">@mixin button($bg: #3b82f6, $color: white) {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">background: $bg;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">color: $color;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 0.75rem 1.5rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border: none;</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: 6px;</div>
                  <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-3">.btn-default {'{'}</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-4">@include button; <span className="text-green-600 dark:text-green-400">// Uses defaults</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.btn-success {'{'}</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-4">@include button(#10b981); <span className="text-green-600 dark:text-green-400">// Custom bg</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Mixins in Action"
          description="See mixins working in a real example"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card card-small">
    <h3>Small Card</h3>
    <p>Using mixin with 200px width</p>
  </div>
  
  <div class="card card-medium">
    <h3>Medium Card</h3>
    <p>Using mixin with 300px width</p>
  </div>
  
  <div class="card card-large">
    <h3>Large Card</h3>
    <p>Using mixin with 400px width</p>
  </div>
  
  <div class="buttons">
    <button class="btn-primary">Primary</button>
    <button class="btn-success">Success</button>
    <button class="btn-danger">Danger</button>
  </div>
</div>`}
          css={`// Mixin for centering
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Mixin with arguments for cards
@mixin card($width: 300px, $bg: white) {
  width: $width;
  background: $bg;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
}

// Mixin for buttons
@mixin button($bg, $hover-bg) {
  background: $bg;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: $hover-bg;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
}

// Base
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  padding: 2rem;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  @include flex-center;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
}

// Using card mixin with different widths
.card {
  h3 {
    color: #1e293b;
    margin-bottom: 0.5rem;
    
    @media (prefers-color-scheme: dark) {
      color: #e2e8f0;
    }
  }
  
  p {
    color: #64748b;
    font-size: 0.875rem;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

.card-small {
  @include card(200px);
  
  @media (prefers-color-scheme: dark) {
    @include card(200px, #1e293b);
  }
}

.card-medium {
  @include card(300px);
  
  @media (prefers-color-scheme: dark) {
    @include card(300px, #1e293b);
  }
}

.card-large {
  @include card(400px);
  
  @media (prefers-color-scheme: dark) {
    @include card(400px, #1e293b);
  }
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

// Using button mixin with different colors
.btn-primary {
  @include button(#3b82f6, #2563eb);
}

.btn-success {
  @include button(#10b981, #059669);
}

.btn-danger {
  @include button(#ef4444, #dc2626);
}`}
          title="Mixins Example"
          description="Cards and buttons using reusable mixins"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Common Mixin Patterns */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Repeat className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Common Mixin Patterns"
            description="Useful mixins you'll use often"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Media Query Mixin</h5>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">@mixin mobile {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">@media (max-width: 768px) {'{'}</div>
                <div className="text-blue-600 dark:text-blue-400 ml-4">@content;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">{'}'}</div>
                <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Transition Mixin</h5>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-3 font-mono text-xs border border-purple-200 dark:border-purple-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">@mixin transition($prop) {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">transition: $prop 0.3s ease;</div>
                <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Absolute Center</h5>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">@mixin absolute-center {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">position: absolute;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">top: 50%;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">left: 50%;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">transform: translate(-50%, -50%);</div>
                <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Truncate Text</h5>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-3 font-mono text-xs border border-orange-200 dark:border-orange-800 space-y-1">
                <div className="text-pink-600 dark:text-pink-400">@mixin truncate {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">white-space: nowrap;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">overflow: hidden;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">text-overflow: ellipsis;</div>
                <div className="text-pink-600 dark:text-pink-400">{'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@mixin</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define reusable blocks of CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@include</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use the mixin anywhere
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">With Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Make mixins flexible with parameters
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Default Values</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Provide fallback values for arguments
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Functions!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've mastered mixins! Now learn about <strong>functions</strong> to create reusable calculations and logic! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
