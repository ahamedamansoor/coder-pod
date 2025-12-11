'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Variable, 
  DollarSign, 
  Sparkles, 
  CheckCircle2,
  Lightbulb,
  Zap,
  RefreshCw,
  Code2,
  Palette
} from 'lucide-react';

interface SassVariablesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassVariablesNew({ onOpenWebPlayground }: SassVariablesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Variable}
        category="Sass/SCSS · Fundamentals"
        title="Variables in SCSS"
        description="Learn how to store and reuse values throughout your stylesheets with SCSS variables. Make your code DRY (Don't Repeat Yourself) and easier to maintain."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<DollarSign className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are SCSS Variables?"
            description="Store values once, use everywhere"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Variables in SCSS let you <strong>store values</strong> (like colors, fonts, sizes, etc.) and <strong>reuse them</strong> throughout your stylesheet. Instead of writing the same color code 50 times, define it once as a variable and reference it everywhere!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-pink-700 dark:text-pink-300">$ Syntax</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All SCSS variables start with a dollar sign ($) to identify them
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-rose-300 dark:border-rose-700">
              <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-rose-700 dark:text-rose-300">Reusable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define once, use everywhere in your stylesheet
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Easy Updates</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Change value once, updates everywhere automatically
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Variable Syntax"
            description="How to declare and use variables"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">Declaring Variables</h4>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-sm border border-blue-200 dark:border-blue-800">
                <div className="text-green-600 dark:text-green-400">// Variable declaration</div>
                <div className="text-pink-600 dark:text-pink-400 mt-2">$variable-name: value;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-4">// Examples:</div>
                <div className="text-pink-600 dark:text-pink-400">$primary-color: #3b82f6;</div>
                <div className="text-pink-600 dark:text-pink-400">$font-size: 16px;</div>
                <div className="text-pink-600 dark:text-pink-400">$spacing: 1rem;</div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-4">Using Variables</h4>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-4 font-mono text-sm border border-cyan-200 dark:border-cyan-800">
                <div className="text-green-600 dark:text-green-400">// Use the variable</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">color: <span className="text-pink-600 dark:text-pink-400">$primary-color</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">font-size: <span className="text-pink-600 dark:text-pink-400">$font-size</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: <span className="text-pink-600 dark:text-pink-400">$spacing</span>;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Variable Naming</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <strong>descriptive names</strong> with hyphens: <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">$primary-color</code> not <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">$pc</code>. This makes your code easier to understand!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Variables in Action"
          description="See the power of SCSS variables"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="theme-demo">
  <h2>Color Theme Demo</h2>
  <p>All colors come from SCSS variables!</p>
  
  <div class="buttons">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
  </div>
  
  <div class="cards">
    <div class="card">
      <h3>Card Title</h3>
      <p>Using spacing variables for consistent padding</p>
    </div>
  </div>
</div>`}
          css={`// 🎨 Theme Variables - Define your colors once!
$primary: #3b82f6;
$primary-hover: #2563eb;
$secondary: #8b5cf6;
$secondary-hover: #7c3aed;
$success: #10b981;
$success-hover: #059669;
$danger: #ef4444;
$danger-hover: #dc2626;

// 📏 Spacing Variables
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

// 🔤 Typography Variables
$font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-size-base: 16px;
$font-size-large: 1.25rem;

// 🎯 Border Variables
$radius-sm: 6px;
$radius-md: 12px;

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family;
  font-size: $font-size-base;
  background: #f8fafc;
  padding: $spacing-xl;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

// Using variables everywhere
.theme-demo {
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    color: $primary;  // Using variable
    font-size: $font-size-large;
    margin-bottom: $spacing-lg;
    
    @media (prefers-color-scheme: dark) {
      color: #60a5fa;
    }
  }
  
  p {
    color: #64748b;
    margin-bottom: $spacing-xl;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}

.buttons {
  display: flex;
  gap: $spacing-md;  // Using spacing variable
  flex-wrap: wrap;
  margin-bottom: $spacing-xl;
}

// Button base styles with variables
.btn {
  padding: $spacing-md $spacing-lg;  // Using variables
  border: none;
  border-radius: $radius-sm;  // Using variable
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: $font-size-base;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
}

// Each button uses a different color variable
.btn-primary {
  background: $primary;  // Variable makes it easy to change
  color: white;
  
  &:hover {
    background: $primary-hover;
  }
}

.btn-secondary {
  background: $secondary;
  color: white;
  
  &:hover {
    background: $secondary-hover;
  }
}

.btn-success {
  background: $success;
  color: white;
  
  &:hover {
    background: $success-hover;
  }
}

.btn-danger {
  background: $danger;
  color: white;
  
  &:hover {
    background: $danger-hover;
  }
}

.cards {
  display: grid;
  gap: $spacing-md;
}

.card {
  background: white;
  padding: $spacing-lg;  // Consistent spacing
  border-radius: $radius-md;  // Using radius variable
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 4px solid $primary;  // Using color variable
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    border-left-color: #60a5fa;
  }
  
  h3 {
    color: $primary;
    margin-bottom: $spacing-sm;
    
    @media (prefers-color-scheme: dark) {
      color: #60a5fa;
    }
  }
  
  p {
    color: #64748b;
    font-size: 0.875rem;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}`}
          title="SCSS Variables Example"
          description="Change a variable value at the top and see it update everywhere!"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Variable Types */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Types of Values You Can Store"
            description="Variables can hold any CSS value"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Colors</h5>
              <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <div><span className="text-pink-600 dark:text-pink-400">$color-hex</span>: #3b82f6;</div>
                <div><span className="text-pink-600 dark:text-pink-400">$color-rgb</span>: rgb(59, 130, 246);</div>
                <div><span className="text-pink-600 dark:text-pink-400">$color-rgba</span>: rgba(59, 130, 246, 0.5);</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Numbers & Units</h5>
              <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <div><span className="text-pink-600 dark:text-pink-400">$size-px</span>: 16px;</div>
                <div><span className="text-pink-600 dark:text-pink-400">$size-rem</span>: 1.5rem;</div>
                <div><span className="text-pink-600 dark:text-pink-400">$percentage</span>: 100%;</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-bold text-green-700 dark:text-green-300 mb-3">Strings</h5>
              <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <div><span className="text-pink-600 dark:text-pink-400">$font</span>: 'Arial', sans-serif;</div>
                <div><span className="text-pink-600 dark:text-pink-400">$weight</span>: bold;</div>
                <div><span className="text-pink-600 dark:text-pink-400">$url</span>: '/images/bg.jpg';</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Lists & Maps</h5>
              <div className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <div><span className="text-pink-600 dark:text-pink-400">$sizes</span>: 1rem 2rem 3rem;</div>
                <div><span className="text-pink-600 dark:text-pink-400">$colors</span>: (primary: blue);</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Math with Variables */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Math with Variables"
            description="Calculate values dynamically"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            SCSS lets you perform <strong>math operations</strong> on variables! This is perfect for creating consistent spacing scales.
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-orange-300 dark:border-orange-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-orange-700 dark:text-orange-300 mb-3">SCSS with Math</h5>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 font-mono text-sm border border-orange-200 dark:border-orange-800">
                  <div className="text-pink-600 dark:text-pink-400">$base-size: 1rem;</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.small {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: <span className="text-pink-600 dark:text-pink-400">$base-size / 2</span>; <span className="text-green-600 dark:text-green-400">// 0.5rem</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">.large {'{'}</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-4">padding: <span className="text-pink-600 dark:text-pink-400">$base-size * 2</span>; <span className="text-green-600 dark:text-green-400">// 2rem</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Available Operations</h5>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">+</span> Addition: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$size + 5px</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">-</span> Subtraction: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$size - 2px</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">*</span> Multiplication: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$size * 3</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">/</span> Division: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$size / 2</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Variable Best Practices"
            description="How to use variables effectively"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-bold text-green-700 dark:text-green-300 text-lg">✅ Do This</h5>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Use Descriptive Names</p>
                <div className="font-mono text-xs text-green-800 dark:text-green-200">
                  $primary-color<br/>
                  $heading-font-size<br/>
                  $button-padding
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Group Related Variables</p>
                <div className="font-mono text-xs text-green-800 dark:text-green-200">
                  // Colors<br/>
                  $primary: #3b82f6;<br/>
                  $secondary: #8b5cf6;<br/>
                  <br/>
                  // Spacing<br/>
                  $spacing-sm: 0.5rem;
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Define at the Top</p>
                <p className="text-xs text-green-800 dark:text-green-200">
                  Put all variables at the beginning of your file for easy access
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-red-700 dark:text-red-300 text-lg">❌ Avoid This</h5>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">Cryptic Names</p>
                <div className="font-mono text-xs text-red-800 dark:text-red-200">
                  $c1<br/>
                  $s<br/>
                  $btn-pd
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">Hardcode Values</p>
                <div className="font-mono text-xs text-red-800 dark:text-red-200">
                  .button {'{'}<br/>
                  {'  '}color: #3b82f6; // Bad!<br/>
                  {'}'}
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">Too Many Variables</p>
                <p className="text-xs text-red-800 dark:text-red-200">
                  Don't create variables for values used only once
                </p>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">$ Prefix</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All SCSS variables must start with a dollar sign ($)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Reusability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define once, use everywhere - DRY principle
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Any Value</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Store colors, sizes, fonts, or any CSS value
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Math Operations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perform calculations: +, -, *, / on variables
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next Step: Nesting</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now that you know variables, learn about <strong>nesting</strong> to organize your CSS structure better! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
