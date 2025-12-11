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
  Blocks, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  Box,
  FileCode
} from 'lucide-react';

interface SassBemMethodologyNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassBemMethodologyNew({ onOpenWebPlayground }: SassBemMethodologyNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Blocks}
        category="Sass/SCSS · Architecture"
        title="BEM Methodology"
        description="Block Element Modifier - A naming convention for writing scalable, maintainable CSS/SCSS."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blocks className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="BEM Methodology"
            description="Block__Element--Modifier"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>BEM</strong> (Block Element Modifier) is a popular naming methodology that makes CSS classes more transparent and meaningful. It uses a simple naming convention: <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">.block__element--modifier</code>
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Block</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Standalone component</p>
              <code className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded block mt-2">.card</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Element</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Part of block</p>
              <code className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded block mt-2">.card__title</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Modifier</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Variation/state</p>
              <code className="text-xs bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded block mt-2">.card--large</code>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Naming Convention</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">.block</code> for components, 
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded ml-2">.block__element</code> for parts, 
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded ml-2">.block--modifier</code> for variations
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Block */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Block"
            description="Standalone component"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            A <strong>Block</strong> is a standalone entity that is meaningful on its own. Examples: <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">.header</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">.menu</code>, <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">.card</code>
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Block Example"
              code={`// HTML
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>

// SCSS
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`}
              output={[
                '.card {',
                '  background: white;',
                '  border-radius: 8px;',
                '  padding: 1.5rem;',
                '  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Multiple Blocks"
              code={`// Each block is independent
.button { /* Button styles */ }
.menu { /* Menu styles */ }
.header { /* Header styles */ }
.footer { /* Footer styles */ }

// Blocks can contain other blocks
<div class="header">
  <div class="logo">...</div>
  <nav class="menu">...</nav>
</div>`}
              output={[
                '.button { /* Button styles */ }',
                '.menu { /* Menu styles */ }',
                '.header { /* Header styles */ }',
                '.footer { /* Footer styles */ }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Element */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Element"
            description="Part of a block (double underscore)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            An <strong>Element</strong> is a part of a block that has no standalone meaning. Notation: <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">.block__element</code>
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Element Example"
              code={`// HTML
<div class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__description">Description text</p>
  <div class="card__footer">
    <button class="card__button">Click</button>
  </div>
</div>

// SCSS
.card {
  background: white;
  padding: 1.5rem;
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  &__description {
    color: #666;
    line-height: 1.6;
  }
  
  &__footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
  
  &__button {
    padding: 0.5rem 1rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
  }
}`}
              output={[
                '.card { background: white; padding: 1.5rem; }',
                '.card__title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }',
                '.card__description { color: #666; line-height: 1.6; }',
                '.card__footer { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee; }',
                '.card__button { padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Element Naming</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Elements are always part of blocks, not part of other elements. Use <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">.block__element</code>, NOT <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">.block__element__sub-element</code>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Modifier */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Modifier"
            description="Variation or state (double dash)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            A <strong>Modifier</strong> is a flag that changes appearance or behavior. Notation: <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">.block--modifier</code> or <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">.block__element--modifier</code>
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Block Modifiers"
              code={`// HTML
<button class="button button--primary">Primary</button>
<button class="button button--secondary">Secondary</button>
<button class="button button--large">Large Button</button>

// SCSS
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  
  // Modifier: Primary style
  &--primary {
    background: #3b82f6;
    color: white;
  }
  
  // Modifier: Secondary style
  &--secondary {
    background: #6b7280;
    color: white;
  }
  
  // Modifier: Large size
  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
  
  // Modifier: Disabled state
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}`}
              output={[
                '.button { padding: 0.5rem 1rem; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; }',
                '.button--primary { background: #3b82f6; color: white; }',
                '.button--secondary { background: #6b7280; color: white; }',
                '.button--large { padding: 1rem 2rem; font-size: 1.125rem; }',
                '.button--disabled { opacity: 0.5; cursor: not-allowed; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Element Modifiers"
              code={`// HTML
<div class="card">
  <h3 class="card__title card__title--highlighted">Featured Title</h3>
  <p class="card__description">Regular description</p>
</div>

// SCSS
.card {
  background: white;
  padding: 1.5rem;
  
  &__title {
    font-size: 1.5rem;
    color: #333;
    
    // Element modifier
    &--highlighted {
      color: #3b82f6;
      font-weight: 700;
      background: #eff6ff;
      padding: 0.5rem;
      border-left: 4px solid #3b82f6;
    }
  }
  
  &__description {
    color: #666;
  }
}`}
              output={[
                '.card { background: white; padding: 1.5rem; }',
                '.card__title { font-size: 1.5rem; color: #333; }',
                '.card__title--highlighted { color: #3b82f6; font-weight: 700; background: #eff6ff; padding: 0.5rem; border-left: 4px solid #3b82f6; }',
                '.card__description { color: #666; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Complete Example */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blocks className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Complete BEM Example"
            description="Block, elements, and modifiers together"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Full BEM Component"
              code={`// HTML
<article class="article article--featured">
  <header class="article__header">
    <h2 class="article__title">Article Title</h2>
    <time class="article__date article__date--recent">Today</time>
  </header>
  
  <div class="article__content">
    <p class="article__text">Article content...</p>
    <img class="article__image article__image--wide" src="..." alt="...">
  </div>
  
  <footer class="article__footer">
    <button class="article__button article__button--primary">Read More</button>
  </footer>
</article>

// SCSS
.article {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  // Block modifier
  &--featured {
    border: 2px solid #3b82f6;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }
  
  // Elements
  &__header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  &__date {
    color: #666;
    font-size: 0.875rem;
    
    // Element modifier
    &--recent {
      color: #10b981;
      font-weight: 600;
    }
  }
  
  &__content {
    margin-bottom: 1rem;
  }
  
  &__text {
    line-height: 1.6;
    color: #444;
  }
  
  &__image {
    width: 100%;
    border-radius: 4px;
    margin-top: 1rem;
    
    // Element modifier
    &--wide {
      width: calc(100% + 3rem);
      margin-left: -1.5rem;
      margin-right: -1.5rem;
      border-radius: 0;
    }
  }
  
  &__footer {
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
  
  &__button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    
    &--primary {
      background: #3b82f6;
      color: white;
    }
  }
}`}
              output={[
                '.article { background: white; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; }',
                '.article--featured { border: 2px solid #3b82f6; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); }',
                '.article__header { margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee; }',
                '.article__title { font-size: 1.5rem; font-weight: 700; color: #333; margin-bottom: 0.5rem; }',
                '.article__date { color: #666; font-size: 0.875rem; }',
                '.article__date--recent { color: #10b981; font-weight: 600; }',
                '// ... all other compiled CSS'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="BEM in Action"
          description="Live component demo"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="product-card product-card--featured">
  <div class="product-card__badge">Featured</div>
  <img class="product-card__image" src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3EProduct%3C/text%3E%3C/svg%3E" alt="Product">
  <div class="product-card__content">
    <h3 class="product-card__title">Amazing Product</h3>
    <p class="product-card__price product-card__price--sale">$29.99</p>
    <button class="product-card__button product-card__button--primary">Add to Cart</button>
  </div>
</div>

<div class="product-card">
  <img class="product-card__image" src="data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3EProduct%3C/text%3E%3C/svg%3E" alt="Product">
  <div class="product-card__content">
    <h3 class="product-card__title">Regular Product</h3>
    <p class="product-card__price">$49.99</p>
    <button class="product-card__button">View Details</button>
  </div>
</div>`}
          css={`// BEM Methodology in SCSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 3rem 1.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  // Block modifier: Featured
  &--featured {
    border: 2px solid #f59e0b;
  }
  
  // Element: Badge
  &__badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #f59e0b;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 10;
  }
  
  // Element: Image
  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  
  // Element: Content
  &__content {
    padding: 1.5rem;
  }
  
  // Element: Title
  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }
  
  // Element: Price
  &__price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 1rem;
    
    // Element modifier: Sale
    &--sale {
      color: #10b981;
      
      &::before {
        content: "🔥 ";
      }
    }
  }
  
  // Element: Button
  &__button {
    width: 100%;
    padding: 0.75rem 1.5rem;
    border: 2px solid #3b82f6;
    background: white;
    color: #3b82f6;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background: #3b82f6;
      color: white;
    }
    
    // Element modifier: Primary
    &--primary {
      background: #3b82f6;
      color: white;
      
      &:hover {
        background: #2563eb;
        transform: scale(1.05);
      }
    }
  }
}

@media (max-width: 768px) {
  body {
    flex-direction: column;
    align-items: center;
  }
}`}
          title="BEM Product Cards"
          description="Block, Element, Modifier in action"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="BEM Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Use lowercase with hyphens</h4>
              <code className="text-sm bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">.my-block__my-element--my-modifier</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Keep it flat (no nesting)</h4>
              <code className="text-sm bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded block">.menu__item</code>
              <code className="text-sm bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded block mt-2">❌ NOT: .menu__item__link</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Include base class with modifier</h4>
              <code className="text-sm bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">&lt;button class="button button--primary"&gt;</code>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Use SCSS nesting with &</h4>
              <pre className="text-sm bg-green-50 dark:bg-green-900/30 p-2 rounded mt-2 overflow-x-auto"><code>{`.card {
  &__title { }
  &--featured { }
}`}</code></pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Block</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Standalone component
              </p>
              <code className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">.card</code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Element</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Part of block (__)
              </p>
              <code className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">.card__title</code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Modifier</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Variation/state (--)
              </p>
              <code className="text-xs bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">.card--featured</code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Benefits</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clear naming, no conflicts, reusable
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
