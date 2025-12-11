'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Package, 
  Repeat,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Copy,
  Layers
} from 'lucide-react';

interface SassMixinBasicsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMixinBasicsNew({ onOpenWebPlayground }: SassMixinBasicsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="Sass/SCSS · Reusability"
        title="@mixin Basics"
        description="Learn the fundamentals of mixins in SCSS. Create reusable blocks of CSS code with @mixin and include them anywhere with @include."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Mixins?"
            description="Reusable CSS blocks"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Mixins</strong> are reusable chunks of CSS that you can include anywhere in your stylesheets. They help you avoid repeating the same code over and over. Think of them as <strong>CSS functions</strong> that stamp out styles wherever you need them!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Without Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Copy-paste the same styles everywhere
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">.card {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">display: flex;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">justify-content: center;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">align-items: center;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.modal {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">display: flex;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">justify-content: center;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">align-items: center;</div>
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
                Define once, include anywhere
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-pink-600 dark:text-pink-400">@mixin center {'{ ... }'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.card {'{'}</div>
                <div className="text-blue-600 dark:text-blue-400 ml-2">@include center;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.modal {'{'}</div>
                <div className="text-blue-600 dark:text-blue-400 ml-2">@include center;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ Reusable!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">DRY Principle</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Mixins follow the <strong>Don't Repeat Yourself</strong> principle. Write once, use everywhere!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating a Mixin */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Creating a Mixin"
            description="Use @mixin to define"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Create a mixin with the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@mixin</code> keyword, followed by a name and CSS rules.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Mixin Syntax"
              description="Define a mixin with @mixin"
              code={`// Create a mixin named 'flex-center'
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Create a mixin named 'rounded'
@mixin rounded {
  border-radius: 8px;
}

// Create a mixin named 'shadow'
@mixin shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Name Your Mixins</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use descriptive names that explain what the mixin does: <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">flex-center</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">rounded</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">shadow</code>.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Including a Mixin */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Repeat className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Including a Mixin"
            description="Use @include to apply"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@include</code> keyword to insert a mixin's styles into your CSS.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Using @include"
              description="Include mixins in your selectors"
              code={`// Define the mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Include it in selectors
.container {
  @include flex-center;
  min-height: 100vh;
}

.card {
  @include flex-center;
  padding: 2rem;
}

.modal {
  @include flex-center;
  position: fixed;
}`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              description="The mixin code is inserted everywhere you included it"
              code={`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
}`}
              language="css"
              colorTheme="purple"
            />
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
  <div class="card">
    <h3>Card Title</h3>
    <p>This card uses mixins for styling!</p>
  </div>
  
  <div class="alert">
    <p>Alert message with mixin styles</p>
  </div>
  
  <button class="button">Click Me</button>
</div>`}
          css={`// Define reusable mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin rounded {
  border-radius: 12px;
}

@mixin shadow {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@mixin transition {
  transition: all 0.3s ease;
}

// Base styles
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
  gap: 1.5rem;
  min-height: 100vh;
}

.card {
  @include rounded;
  @include shadow;
  @include transition;
  background: white;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    color: #1e293b;
    margin-bottom: 0.5rem;
    
    @media (prefers-color-scheme: dark) {
      color: #e2e8f0;
    }
  }
  
  p {
    color: #64748b;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

.alert {
  @include rounded;
  @include transition;
  background: #dbeafe;
  border-left: 4px solid #3b82f6;
  padding: 1rem 1.5rem;
  max-width: 400px;
  width: 100%;
  
  @media (prefers-color-scheme: dark) {
    background: #1e3a8a;
  }
  
  p {
    color: #1e40af;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #bfdbfe;
    }
  }
}

.button {
  @include rounded;
  @include shadow;
  @include transition;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: scale(0.98);
  }
}`}
          title="Basic Mixins Example"
          description="Cards, alerts, and buttons using simple mixins"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Multiple Mixins */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Combining Mixins"
            description="Use multiple mixins together"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can include multiple mixins in the same selector to combine their effects.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Stacking Mixins"
              description="Apply several mixins to one element"
              code={`// Define mixins
@mixin rounded {
  border-radius: 8px;
}

@mixin shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@mixin transition {
  transition: all 0.3s;
}

// Use all three mixins together
.card {
  @include rounded;
  @include shadow;
  @include transition;
  
  background: white;
  padding: 1.5rem;
}`}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Mix and Match!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Combine multiple mixins to build complex styles from simple, reusable pieces!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Mixin Patterns */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Common Mixin Patterns"
            description="Useful mixins for everyday use"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <CodeSnippetWithOutput
              title="Flexbox Center"
              code={`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Truncate Text"
              code={`@mixin truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Absolute Center"
              code={`@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Reset Button"
              code={`@mixin reset-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}`}
              language="scss"
              colorTheme="orange"
            />
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@mixin name</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define reusable CSS blocks
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@include name</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use mixins in your selectors
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Reusable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define once, use many times
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Stackable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combine multiple mixins together
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Mixin Arguments!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've learned the basics! Now discover how to make mixins even more powerful with <strong>arguments</strong>! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
