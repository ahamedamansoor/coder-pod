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
  Info,
  Sparkles,
  Code,
  Layers
} from 'lucide-react';

interface SassBemWithSassNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassBemWithSassNew({ onOpenWebPlayground }: SassBemWithSassNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Blocks}
        category="Sass/SCSS · Architecture"
        title="BEM with Sass"
        description="Combine BEM methodology with SCSS features for powerful, maintainable component styles."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blocks className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="BEM with Sass"
            description="BEM + SCSS = Perfect combination"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>BEM</strong> (Block Element Modifier) works beautifully with <strong>Sass/SCSS</strong>! Use the <strong>&</strong> parent selector and nesting to write BEM more efficiently!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">❌ Plain CSS</h4>
              <pre className="text-xs bg-blue-50 dark:bg-blue-900/30 p-2 rounded overflow-x-auto"><code>{`.card { }
.card__title { }
.card__body { }
.card--featured { }`}</code></pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Repetitive, harder to maintain</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ With SCSS</h4>
              <pre className="text-xs bg-green-50 dark:bg-green-900/30 p-2 rounded overflow-x-auto"><code>{`.card {
  &__title { }
  &__body { }
  &--featured { }
}`}</code></pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Clean, organized, maintainable</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parent Selector & */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Parent Selector (&)"
            description="The key to BEM + SCSS"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <strong>&</strong> symbol references the parent selector. Perfect for BEM!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic BEM with &"
              code={`// SCSS
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  
  // Element
  &__icon {
    margin-right: 0.5rem;
  }
  
  &__text {
    font-weight: 600;
  }
  
  // Modifiers
  &--primary {
    background: #3b82f6;
    color: white;
  }
  
  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
}`}
              output={[
                '.button { padding: 0.5rem 1rem; border: none; border-radius: 4px; }',
                '.button__icon { margin-right: 0.5rem; }',
                '.button__text { font-weight: 600; }',
                '.button--primary { background: #3b82f6; color: white; }',
                '.button--large { padding: 1rem 2rem; font-size: 1.125rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Nested Elements"
              code={`// SCSS
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  
  &__header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  &__subtitle {
    font-size: 0.875rem;
    color: #666;
  }
  
  &__body {
    line-height: 1.6;
  }
  
  &__footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
}`}
              output={[
                '.card { background: white; border-radius: 8px; padding: 1.5rem; }',
                '.card__header { margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee; }',
                '.card__title { font-size: 1.5rem; font-weight: 700; }',
                '.card__subtitle { font-size: 0.875rem; color: #666; }',
                '.card__body { line-height: 1.6; }',
                '.card__footer { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Modifiers with States */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Modifiers with Pseudo-Classes"
            description="Combine modifiers with hover, focus, etc."
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Button with States"
              code={`// SCSS
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  
  // Primary modifier
  &--primary {
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:disabled {
      background: #93c5fd;
      cursor: not-allowed;
    }
  }
  
  // Secondary modifier
  &--secondary {
    background: #8b5cf6;
    color: white;
    
    &:hover {
      background: #7c3aed;
    }
  }
  
  // Outline modifier
  &--outline {
    background: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
    
    &:hover {
      background: #3b82f6;
      color: white;
    }
  }
}`}
              output={[
                '.button { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; transition: all 0.3s; }',
                '.button--primary { background: #3b82f6; color: white; }',
                '.button--primary:hover { background: #2563eb; transform: translateY(-2px); }',
                '.button--primary:active { transform: translateY(0); }',
                '.button--primary:disabled { background: #93c5fd; cursor: not-allowed; }',
                '.button--secondary { background: #8b5cf6; color: white; }',
                '.button--secondary:hover { background: #7c3aed; }',
                '// ... and so on'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Element Modifiers */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Element Modifiers"
            description="Modifiers on elements"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Elements with Their Own Modifiers"
              code={`// SCSS
.menu {
  list-style: none;
  padding: 0;
  
  &__item {
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
      background: #f5f5f5;
    }
    
    // Element modifier: active
    &--active {
      background: #3b82f6;
      color: white;
      font-weight: 600;
      
      &:hover {
        background: #2563eb;
      }
    }
    
    // Element modifier: disabled
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
      
      &:hover {
        background: transparent;
      }
    }
  }
  
  &__link {
    color: inherit;
    text-decoration: none;
    display: block;
    
    &--external {
      &::after {
        content: ' ↗';
      }
    }
  }
}`}
              output={[
                '.menu { list-style: none; padding: 0; }',
                '.menu__item { padding: 0.75rem 1rem; cursor: pointer; transition: background 0.3s; }',
                '.menu__item:hover { background: #f5f5f5; }',
                '.menu__item--active { background: #3b82f6; color: white; font-weight: 600; }',
                '.menu__item--active:hover { background: #2563eb; }',
                '.menu__item--disabled { opacity: 0.5; cursor: not-allowed; }',
                '.menu__item--disabled:hover { background: transparent; }',
                '.menu__link { color: inherit; text-decoration: none; display: block; }',
                '.menu__link--external::after { content: " ↗"; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Variables with BEM */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Variables with BEM"
            description="Make BEM components themeable"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Themeable BEM Component"
              code={`// SCSS
// Component-scoped variables
.card {
  // Variables
  $card-bg: white;
  $card-padding: 1.5rem;
  $card-border-radius: 8px;
  $card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  // Styles using variables
  background: $card-bg;
  padding: $card-padding;
  border-radius: $card-border-radius;
  box-shadow: $card-shadow;
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  // Dark modifier
  &--dark {
    $card-bg: #2a2a2a;
    $card-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    
    background: $card-bg;
    color: white;
    box-shadow: $card-shadow;
  }
  
  // Compact modifier
  &--compact {
    $card-padding: 1rem;
    padding: $card-padding;
  }
  
  // Elevated modifier
  &--elevated {
    $card-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    box-shadow: $card-shadow;
  }
}`}
              output={[
                '.card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }',
                '.card__title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }',
                '.card--dark { background: #2a2a2a; color: white; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); }',
                '.card--compact { padding: 1rem; }',
                '.card--elevated { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Mixins with BEM */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Mixins with BEM"
            description="Reusable BEM patterns"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="BEM Modifier Mixin"
              code={`// Mixin for consistent modifier styling
@mixin button-variant($bg-color, $text-color) {
  background: $bg-color;
  color: $text-color;
  
  &:hover {
    background: darken($bg-color, 10%);
  }
  
  &:active {
    background: darken($bg-color, 15%);
  }
}

// Use with BEM
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  
  &--primary {
    @include button-variant(#3b82f6, white);
  }
  
  &--secondary {
    @include button-variant(#8b5cf6, white);
  }
  
  &--success {
    @include button-variant(#10b981, white);
  }
  
  &--danger {
    @include button-variant(#ef4444, white);
  }
}`}
              output={[
                '.button { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; transition: all 0.3s; }',
                '.button--primary { background: #3b82f6; color: white; }',
                '.button--primary:hover { background: #2563eb; }',
                '.button--primary:active { background: #1d4ed8; }',
                '.button--secondary { background: #8b5cf6; color: white; }',
                '.button--secondary:hover { background: #7c3aed; }',
                '// ... and so on for all variants'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="BEM + SCSS in Action"
          description="Live component demo"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="product-card product-card--featured">
  <span class="product-card__badge product-card__badge--sale">Sale</span>
  <div class="product-card__image"></div>
  <div class="product-card__content">
    <h3 class="product-card__title">Premium Product</h3>
    <p class="product-card__price">
      <span class="product-card__price--original">$99</span>
      <span class="product-card__price--sale">$79</span>
    </p>
    <button class="product-card__button product-card__button--primary">
      Add to Cart
    </button>
  </div>
</div>

<div class="product-card">
  <div class="product-card__image"></div>
  <div class="product-card__content">
    <h3 class="product-card__title">Regular Product</h3>
    <p class="product-card__price">$49</p>
    <button class="product-card__button">
      Add to Cart
    </button>
  </div>
</div>`}
          css={`// BEM with SCSS - Clean & Maintainable
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
  
  // Block modifier: featured
  &--featured {
    border: 3px solid #f59e0b;
    
    .product-card__title {
      color: #f59e0b;
    }
  }
  
  // Element: badge
  &__badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 10;
    background: #3b82f6;
    color: white;
    
    // Element modifier: sale
    &--sale {
      background: #ef4444;
      
      &::before {
        content: '🔥 ';
      }
    }
  }
  
  // Element: image
  &__image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
      content: '📦';
      font-size: 4rem;
    }
  }
  
  // Element: content
  &__content {
    padding: 1.5rem;
  }
  
  // Element: title
  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }
  
  // Element: price
  &__price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 1rem;
    
    // Element modifier: original price
    &--original {
      font-size: 1rem;
      color: #94a3b8;
      text-decoration: line-through;
      margin-right: 0.5rem;
    }
    
    // Element modifier: sale price
    &--sale {
      color: #10b981;
    }
  }
  
  // Element: button
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
      transform: scale(1.02);
    }
    
    // Element modifier: primary button
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
          title="BEM + SCSS Product Cards"
          description="See how BEM methodology works with SCSS nesting"
          colorTheme="purple"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Use & for BEM</h4>
              <pre className="text-sm bg-green-50 dark:bg-green-900/30 p-2 rounded overflow-x-auto"><code>{`.card {
  &__title { }
  &--featured { }
}`}</code></pre>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Keep nesting shallow</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Max 2-3 levels. Flat BEM structure is better than deep nesting.</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ DON'T: Nest elements</h4>
              <pre className="text-sm bg-red-50 dark:bg-red-900/30 p-2 rounded overflow-x-auto"><code>{`// Bad
.card {
  &__header {
    &__title { }  // No! Use .card__title
  }
}`}</code></pre>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Use variables for theming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Define component variables at the block level for easy customization.</p>
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Parent Selector &</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use <code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">&</code> to reference parent for BEM elements/modifiers
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Cleaner Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                SCSS nesting keeps BEM organized and DRY
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Scope variables to blocks for themeable components
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create reusable modifier patterns with mixins
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
