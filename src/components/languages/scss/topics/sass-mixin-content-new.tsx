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
  Box, 
  Layers,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Monitor,
  Smartphone
} from 'lucide-react';

interface SassMixinContentNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassMixinContentNew({ onOpenWebPlayground }: SassMixinContentNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Box}
        category="Sass/SCSS · Reusability"
        title="@content Directive"
        description="Learn how to pass entire blocks of CSS to mixins with @content. Create powerful, flexible patterns like responsive breakpoints and modifier states."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @content?"
            description="Pass CSS blocks to mixins"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@content</strong> allows you to pass an entire block of CSS styles into a mixin. Instead of just passing values as arguments, you can pass <strong>entire style rules</strong>! This makes mixins incredibly powerful for creating wrappers like media queries, state modifiers, and theme variations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Regular Arguments</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Pass single values
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">@mixin box($size) {'{'}</div>
                <div className="text-gray-700 dark:text-gray-300 ml-2">width: $size;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-blue-600 dark:text-blue-400 text-[10px] mt-2">Values only</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Box className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">@content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Pass entire CSS blocks
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@mixin wrapper {'{'}</div>
                <div className="text-pink-600 dark:text-pink-400 ml-2">@content;</div>
                <div className="text-gray-700 dark:text-gray-300">{'}'}</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-2">✓ Whole CSS blocks!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Super Powerful!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              @content is perfect for creating reusable wrappers around your styles, like media queries and pseudo-class handlers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic @content */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic @content"
            description="Simple content injection"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Define <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@content</code> in a mixin where you want the passed styles to appear.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Simple @content Example"
              description="Pass CSS block to mixin"
              code={`// Define mixin with @content
@mixin wrapper {
  border: 2px solid #e5e7eb;
  padding: 1rem;
  @content;  // Insert passed content here
}

// Use the mixin and pass styles
.card {
  @include wrapper {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}`}
              output={[
                '✓ border and padding from mixin',
                '✓ background, border-radius, box-shadow from @content'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Compiled CSS"
              description="Everything combined together"
              code={`.card {
  border: 2px solid #e5e7eb;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`}
              language="css"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Media Query Pattern */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Monitor className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Media Query Mixins"
            description="The most popular @content pattern"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The most common use of <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@content</code> is creating responsive breakpoint mixins!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Responsive Breakpoint Mixins"
              description="DRY media queries"
              code={`// Define breakpoint mixins
@mixin mobile {
  @media (max-width: 640px) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: 641px) and (max-width: 1024px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1025px) {
    @content;
  }
}

// Use them cleanly
.container {
  padding: 3rem;
  
  @include mobile {
    padding: 1rem;
    font-size: 14px;
  }
  
  @include tablet {
    padding: 2rem;
    font-size: 16px;
  }
  
  @include desktop {
    padding: 4rem;
    font-size: 18px;
  }
}`}
              output={[
                '✓ No more writing @media queries!',
                '✓ Clean, readable code',
                '✓ Easy to change breakpoints'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Industry Standard!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Using @content for media query mixins is an extremely common pattern in production codebases!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Smartphone className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Responsive @content Demo"
          description="Resize to see breakpoint mixins in action"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="hero">
    <h1>Responsive Design</h1>
    <p>Resize the window to see different layouts!</p>
  </div>
  
  <div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</div>`}
          css={`// Breakpoint mixins with @content
@mixin mobile {
  @media (max-width: 640px) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: 641px) and (max-width: 1024px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1025px) {
    @content;
  }
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
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  padding: 2rem;
  
  @include mobile {
    padding: 1rem;
  }
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
  
  @include mobile {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    
    @include mobile {
      font-size: 1.5rem;
    }
    
    @include tablet {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    opacity: 0.9;
    
    @include mobile {
      font-size: 0.875rem;
    }
  }
}

.grid {
  display: grid;
  gap: 1.5rem;
  
  // Desktop: 3 columns
  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
  
  // Tablet: 2 columns
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }
  
  // Mobile: 1 column
  @include mobile {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #e2e8f0;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
  
  @include mobile {
    padding: 1.5rem;
    font-size: 1rem;
  }
}`}
          title="Responsive Layout with @content"
          description="Media query mixins make responsive design clean"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Pseudo-Class Patterns */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="State & Modifier Patterns"
            description="Hover, focus, and custom states"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use @content for state patterns like hover effects and custom modifiers.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Hover Mixin"
              description="Consistent hover effects"
              code={`// Hover state wrapper
@mixin on-hover {
  transition: all 0.3s ease;
  
  &:hover {
    @content;
  }
}

// Use it
.button {
  background: #3b82f6;
  color: white;
  
  @include on-hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Modifier Pattern"
              description="BEM-style modifiers"
              code={`// Modifier wrapper
@mixin modifier($name) {
  &--#{$name} {
    @content;
  }
}

// Use it
.button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: #3b82f6;
  
  @include modifier('large') {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
  
  @include modifier('danger') {
    background: #ef4444;
  }
}

// Generates: .button--large and .button--danger`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Theme Pattern */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Theme Pattern"
            description="Dark mode and theme variations"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Create theme mixins to handle light/dark mode or custom themes.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Dark Mode Mixin"
              code={`// Dark mode wrapper
@mixin dark-mode {
  @media (prefers-color-scheme: dark) {
    @content;
  }
}

// Use it
.card {
  background: white;
  color: #1e293b;
  
  @include dark-mode {
    background: #1e293b;
    color: #e2e8f0;
  }
}

.button {
  background: #3b82f6;
  
  @include dark-mode {
    background: #60a5fa;
  }
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Theme Context Mixin"
              code={`// Theme context wrapper
@mixin theme($name) {
  .theme-#{$name} & {
    @content;
  }
}

// Use it
.card {
  background: white;
  
  @include theme('dark') {
    background: #1e293b;
  }
  
  @include theme('ocean') {
    background: #0ea5e9;
  }
}

// Generates:
// .theme-dark .card { ... }
// .theme-ocean .card { ... }`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Advanced Pattern */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Combining Arguments + @content"
            description="Maximum flexibility"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can use both arguments and @content in the same mixin!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Arguments + @content"
              description="Best of both worlds"
              code={`// Breakpoint mixin with custom size
@mixin respond-to($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// Use it with any breakpoint
.sidebar {
  display: none;
  
  @include respond-to(768px) {
    display: block;
    width: 250px;
  }
  
  @include respond-to(1200px) {
    width: 300px;
  }
}`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Container Mixin"
              code={`// Container with customization
@mixin container($max-width: 1200px) {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 1rem;
  @content;
}

.main {
  @include container {
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}

.wide {
  @include container(1400px) {
    padding: 0 2rem;
  }
}`}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pass entire CSS blocks to mixins
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Media Queries</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for responsive breakpoints
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">State Patterns</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hover, focus, and custom states
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Flexible</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combine with arguments for power
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Mixin Mastery Complete!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've mastered mixins: basics, arguments, and @content! Now move on to <strong>@extend</strong> for another reusability pattern! 🎉
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
