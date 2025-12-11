'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Gem, 
  Sparkles, 
  Code2, 
  Lightbulb, 
  Zap,
  CheckCircle2,
  ArrowRight,
  FileCode,
  Settings
} from 'lucide-react';

interface WhatIsSassScssProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function WhatIsSassScss({ onOpenWebPlayground }: WhatIsSassScssProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Gem}
        category="Sass/SCSS · Introduction"
        title="What is Sass & SCSS?"
        description="Learn how Sass supercharges CSS with variables, nesting, mixins, and more powerful features that make styling easier and more maintainable."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Gem className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is Sass?"
            description="Syntactically Awesome Style Sheets"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Sass (Syntactically Awesome Style Sheets)</strong> is a CSS preprocessor that extends CSS with powerful features like variables, nesting, mixins, functions, and more. It helps you write cleaner, more maintainable stylesheets and compiles down to regular CSS that browsers can understand.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-pink-700 dark:text-pink-300">More Power</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Variables, nesting, mixins, and functions make CSS more dynamic
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-rose-300 dark:border-rose-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-rose-700 dark:text-rose-300">Cleaner Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Write less, do more with reusable styles and better organization
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Maintainable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easier to update, scale, and maintain large stylesheets
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Lightbulb className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Key Concept</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Sass is a <strong>preprocessor</strong>, which means it processes your Sass code and converts it to regular CSS that browsers can understand. You write in Sass, but the browser reads CSS!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Sass vs SCSS Syntax */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Sass vs SCSS: Two Syntaxes"
            description="Same features, different writing styles"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* SCSS Syntax */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <Badge className="bg-blue-500 mb-4">SCSS (Recommended)</Badge>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 text-lg">Sassy CSS - .scss</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Uses CSS-like syntax with curly braces and semicolons. Every valid CSS is also valid SCSS!
              </p>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 font-mono text-sm">
                <div className="text-pink-600 dark:text-pink-400">$primary: #3b82f6;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">color: <span className="text-pink-600 dark:text-pink-400">$primary</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">&:hover {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">opacity: 0.8;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
                ✅ Most popular • Easy transition from CSS • Better tooling support
              </p>
            </div>

            {/* Sass Syntax */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <Badge className="bg-purple-500 mb-4">Sass (Original)</Badge>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3 text-lg">Indented Syntax - .sass</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Uses indentation instead of braces. No semicolons or curly braces required.
              </p>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-4 font-mono text-sm">
                <div className="text-pink-600 dark:text-pink-400">$primary: #3b82f6</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">color: <span className="text-pink-600 dark:text-pink-400">$primary</span></div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">&:hover</div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">opacity: 0.8</div>
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-3">
                ℹ️ More concise • Requires learning new syntax • Less common
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Recommended: Use SCSS</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              We recommend <strong>SCSS (.scss)</strong> for beginners because it looks just like CSS with extra features. All examples in this course use SCSS syntax.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* CSS vs SCSS Comparison */}
      <div className="space-y-6">
        <TopicTitle
          icon={<ArrowRight className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
          title="CSS vs SCSS: See the Difference"
          description="Compare regular CSS with Sass-powered SCSS"
          size="lg"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plain CSS Example */}
          <Card className="border-2 border-red-300 dark:border-red-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-500">Plain CSS</Badge>
                <span className="text-sm text-gray-600 dark:text-gray-400">Repetitive & Hard to Maintain</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-xs space-y-1">
                <div className="text-red-600 dark:text-red-400">/* No variables - repeat colors everywhere */</div>
                <div className="text-gray-700 dark:text-gray-300">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: <span className="text-orange-600">#3b82f6</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: 10px 20px;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: 8px;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button:hover {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: <span className="text-orange-600">#2563eb</span>;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.link {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">color: <span className="text-orange-600">#3b82f6</span>;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.border {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">border: 2px solid <span className="text-orange-600">#3b82f6</span>;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 mt-3">
                ❌ Repeated values • No nesting • Hard to change themes
              </p>
            </CardContent>
          </Card>

          {/* SCSS Example */}
          <Card className="border-2 border-green-300 dark:border-green-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500">SCSS</Badge>
                <span className="text-sm text-gray-600 dark:text-gray-400">Clean & Maintainable</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-xs space-y-1">
                <div className="text-green-600 dark:text-green-400">// Define once, use everywhere!</div>
                <div className="text-pink-600 dark:text-pink-400">$primary: #3b82f6;</div>
                <div className="text-pink-600 dark:text-pink-400">$padding: 10px 20px;</div>
                <div className="text-pink-600 dark:text-pink-400">$radius: 8px;</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.button {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">background: <span className="text-pink-600 dark:text-pink-400">$primary</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">padding: <span className="text-pink-600 dark:text-pink-400">$padding</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">border-radius: <span className="text-pink-600 dark:text-pink-400">$radius</span>;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2">&:hover {'{'} <span className="text-green-600 dark:text-green-400">// Nesting!</span></div>
                <div className="text-gray-700 dark:text-gray-300 ml-8">opacity: 0.8;</div>
                <div className="text-gray-700 dark:text-gray-300 ml-4">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">.link {'{'} color: <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
                <div className="text-gray-700 dark:text-gray-300">.border {'{'} border: 2px solid <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                ✅ Variables • Nesting • Change color once, update everywhere!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Example: Variables */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Live Example: SCSS Variables"
          description="See how variables make styling easier"
          size="lg"
        />
        
        <FrontendCodePreview
          html={`<div class="card">
  <h2>Welcome to SCSS!</h2>
  <p>Variables make it easy to maintain consistent colors and spacing.</p>
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  <div class="alert">
    <strong>Tip:</strong> Change the variable values to see instant updates!
  </div>
</div>`}
          css={`// 🎨 Define your theme colors once
$primary-color: #6366f1;
$primary-hover: #4f46e5;
$secondary-color: #ec4899;
$secondary-hover: #db2777;
$text-dark: #1e293b;
$text-light: #64748b;
$spacing: 1rem;
$radius: 12px;

// Reset and base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f8fafc;
  padding: 1rem;
}

// Apply variables everywhere
.card {
  background: white;
  padding: $spacing * 2;  // Math with variables!
  border-radius: $radius;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  h2 {
    color: $text-dark;
    margin-bottom: $spacing;
    font-size: 1.5rem;
  }
  
  p {
    color: $text-light;
    line-height: 1.6;
    margin-bottom: $spacing * 1.5;
  }
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: $radius / 2;  // Divide variables!
  font-weight: 600;
  cursor: pointer;
  margin-right: $spacing;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
  font-size: 1rem;
  
  &:hover {  // Nested hover state
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
}

.btn-primary {
  background: $primary-color;
  color: white;
  
  &:hover {
    background: $primary-hover;
  }
}

.btn-secondary {
  background: $secondary-color;
  color: white;
  
  &:hover {
    background: $secondary-hover;
  }
}

.alert {
  background: #eef2ff;
  border-left: 4px solid $primary-color;
  padding: $spacing;
  border-radius: $radius / 3;
  margin-top: $spacing * 1.5;
  color: #1e293b;
  
  strong {
    color: $primary-color;
  }
}`}
          title="SCSS Variables in Action"
          description="Try changing the variable values at the top to see instant updates!"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Interactive Example: Nesting */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="Live Example: SCSS Nesting"
          description="Write CSS that mirrors your HTML structure"
          size="lg"
        />
        
        <FrontendCodePreview
          html={`<nav class="navbar">
  <div class="logo">MySite</div>
  <ul class="menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`}
          css={`// Reset and base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f8fafc;
}

// Nesting makes code cleaner and easier to read!
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  // Nested inside .navbar
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    
    // Nested hover state
    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s;
    }
  }
  
  // Nested menu
  .menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
    
    // Nested list items
    li {
      margin: 0;
      
      // Nested links inside list items
      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: all 0.3s;
        display: block;
        
        // Nested hover state for links
        &:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        
        // Nested active state
        &:active {
          transform: translateY(0);
        }
      }
    }
  }
}

// With nesting, the structure matches your HTML!
// Easy to understand and maintain 🎉`}
          title="SCSS Nesting Example"
          description="See how nesting makes your code more organized and readable"
          colorTheme="blue"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Features Overview */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Sass/SCSS Features"
            description="What makes Sass so powerful"
            size="lg"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <div className="text-2xl mb-3">$</div>
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Store colors, fonts, sizes, and reuse them throughout your stylesheet
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="text-2xl mb-3">{'{}'}</div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Nesting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Write CSS that mirrors your HTML structure for better organization
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="text-2xl mb-3">@mixin</div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create reusable chunks of CSS with optional parameters
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <div className="text-2xl mb-3">@import</div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Partials</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Split your CSS into smaller, manageable files
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="text-2xl mb-3">@extend</div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Inheritance</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Share styles between selectors to keep code DRY
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <div className="text-2xl mb-3">fn()</div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built-in functions for colors, math, strings, and more
              </p>
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">What is Sass?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                A CSS preprocessor that adds powerful features to make styling easier and more maintainable
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">SCSS vs Sass</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                SCSS uses CSS-like syntax with braces, Sass uses indentation. SCSS is more popular!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Main Benefits</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Variables, nesting, mixins, functions, and better code organization
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">How It Works</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Write Sass/SCSS → Compile to CSS → Browser reads CSS
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Ready to Learn More?</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Now that you understand what Sass/SCSS is, let's dive deeper into <strong>variables</strong>, <strong>nesting</strong>, <strong>mixins</strong>, and all the powerful features that make Sass so awesome! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
