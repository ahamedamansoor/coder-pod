'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Target, 
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Layers,
  GitBranch,
  Zap
} from 'lucide-react';

interface SassSelectorModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassSelectorModuleNew({ onOpenWebPlayground }: SassSelectorModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Target}
        category="Sass/SCSS · Built-in Modules"
        title="sass:selector Module"
        description="Advanced selector manipulation: parse, nest, append, extend, replace, and unify for dynamic selector generation."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Target className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:selector Module"
            description="Manipulate CSS selectors programmatically"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:selector</strong> module provides advanced functions to manipulate CSS selectors programmatically. Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:selector'</code> to parse, nest, append, and transform selectors dynamically!
          </p>

          <CodeSnippetWithOutput
            title="Module Basics"
            code={`@use 'sass:selector';

// Parse a selector string
$parsed: selector.parse('.button.primary');
// Returns: ((.button.primary),)

// Current selector
.card {
  $current: &;  // .card
  
  &__header {
    // Use selector functions here
  }
}`}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Target className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Advanced Feature!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              This module is for advanced use cases like building mixins, utilities, and dynamic selector generation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Parse & Nest */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Parse & Nest"
            description="selector.parse(), selector.nest()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="selector.parse()"
              description="Convert string to selector"
              code={`@use 'sass:selector';

// Parse selector string
$selector: selector.parse('.button, .link');
// Returns: ((.button), (.link))

// Parse complex selectors
$complex: selector.parse('div > .item:hover');
// Returns: ((div > .item:hover),)

// Useful for dynamic selector generation
@mixin apply-to($selector) {
  $parsed: selector.parse($selector);
  // Work with parsed selector
}`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="selector.nest()"
              description="Nest selectors programmatically"
              code={`@use 'sass:selector';

// Nest selectors like Sass nesting
$parent: '.card';
$child: '.title';
$nested: selector.nest($parent, $child);
// Returns: .card .title

// Multiple levels
$result: selector.nest('.container', '.row', '.col');
// Returns: .container .row .col

// With combinators
$direct: selector.nest('.menu', '> .item');
// Returns: .menu > .item`}
              output={[
                '.card .title { }',
                '.container .row .col { }',
                '.menu > .item { }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Append */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Append Selectors"
            description="selector.append()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="selector.append()"
              description="Add to end of selector"
              code={`@use 'sass:selector';

// Append to selector
$result: selector.append('.button', '-primary');
// Returns: .button-primary

// Append multiple
$result: selector.append('.card', '__header', '--large');
// Returns: .card__header--large

// Pseudo-classes
$hover: selector.append('.link', ':hover');
// Returns: .link:hover

// Useful for BEM modifiers
@mixin modifier($name) {
  $selector: selector.append(&, '--#{$name}');
  @at-root #{$selector} {
    @content;
  }
}`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Dynamic BEM with Append"
              code={`@use 'sass:selector';

@mixin element($name) {
  $selector: selector.append(&, '__#{$name}');
  @at-root #{$selector} {
    @content;
  }
}

.card {
  background: white;
  
  @include element('header') {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }
  
  @include element('body') {
    padding: 1rem;
  }
}

// Generates:
// .card { background: white; }
// .card__header { padding: 1rem; border-bottom: 1px solid #ddd; }
// .card__body { padding: 1rem; }`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Replace & Unify */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Replace & Unify"
            description="selector.replace(), selector.unify()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="selector.replace()"
              description="Replace part of selector"
              code={`@use 'sass:selector';

// Replace selector parts
$original: '.button.primary';
$replaced: selector.replace($original, '.button', '.btn');
// Returns: .btn.primary

// Replace with complex selectors
$selector: 'div.container > .item';
$result: selector.replace($selector, 'div', 'section');
// Returns: section.container > .item

// Useful for theme switching
@mixin theme-variant($old, $new) {
  $selector: selector.replace(&, $old, $new);
  @at-root #{$selector} {
    @content;
  }
}`}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="selector.unify()"
              description="Combine selectors intelligently"
              code={`@use 'sass:selector';

// Unify selectors (intersection)
$result: selector.unify('.button', '.primary');
// Returns: .button.primary

// Multiple classes
$unified: selector.unify('.card', '.featured.large');
// Returns: .card.featured.large

// Type selectors
$combined: selector.unify('div', '.container');
// Returns: div.container

// Returns null if selectors can't be unified
$invalid: selector.unify('div', 'span');
// Returns: null (can't be both div and span)`}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Smart Unification!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">selector.unify()</code> intelligently combines selectors, returning null if they can't match the same element.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Is-Superselector */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Check Relationships"
            description="selector.is-superselector()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="selector.is-superselector()"
              description="Check if selector contains another"
              code={`@use 'sass:selector';

// Check if one selector is more general than another
$is-super: selector.is-superselector('.button', '.button.primary');
// Returns: true (.button matches more than .button.primary)

$is-super2: selector.is-superselector('.button.primary', '.button');
// Returns: false

// Practical use case
@mixin only-if-more-specific($selector) {
  @if selector.is-superselector($selector, &) {
    @error "This style is too specific!";
  }
  @content;
}`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Specificity Checker"
              code={`@use 'sass:selector';

@function check-specificity($sel1, $sel2) {
  @if selector.is-superselector($sel1, $sel2) {
    @return '#{$sel1} is more general than #{$sel2}';
  } @else if selector.is-superselector($sel2, $sel1) {
    @return '#{$sel2} is more general than #{$sel1}';
  } @else {
    @return 'Neither supersedes the other';
  }
}

// Usage
$result: check-specificity('.button', '.button:hover');
// Returns: '.button is more general than .button:hover'`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Practical Example */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Practical Example"
            description="Building a BEM mixin with selector module"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Advanced BEM Mixin System"
            code={`@use 'sass:selector';

// BEM Element mixin
@mixin element($name) {
  $selector: selector.append(&, '__#{$name}');
  @at-root #{$selector} {
    @content;
  }
}

// BEM Modifier mixin
@mixin modifier($name) {
  $selector: selector.append(&, '--#{$name}');
  @at-root #{$selector} {
    @content;
  }
}

// Usage
.card {
  background: white;
  padding: 1rem;
  
  @include element('header') {
    font-size: 1.5rem;
    font-weight: bold;
    
    @include modifier('large') {
      font-size: 2rem;
    }
  }
  
  @include element('body') {
    padding: 1rem;
  }
  
  @include modifier('featured') {
    border: 2px solid gold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
}

// Generates:
// .card { background: white; padding: 1rem; }
// .card__header { font-size: 1.5rem; font-weight: bold; }
// .card__header--large { font-size: 2rem; }
// .card__body { padding: 1rem; }
// .card--featured { border: 2px solid gold; box-shadow: ...; }`}
            language="scss"
            colorTheme="cyan"
          />
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Selector Module in Action"
          description="BEM components generated with selector functions"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="card">
    <div class="card__header">
      <h3>Featured Card</h3>
    </div>
    <div class="card__body">
      <p>This is a card body with BEM naming</p>
    </div>
  </div>
  
  <div class="card card--featured">
    <div class="card__header card__header--large">
      <h3>Premium Card</h3>
    </div>
    <div class="card__body">
      <p>Featured card with large header</p>
    </div>
  </div>
</div>`}
          css={`@use 'sass:selector';

// BEM structure using selector module
// selector.nest('.card', '__header') => '.card__header'
// selector.append('.card', '--featured') => '.card--featured'

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
}

// Block
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  overflow: hidden;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  // Elements (BEM)
  &__header {
    padding: 1.5rem;
    border-bottom: 2px solid #e2e8f0;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    
    @media (prefers-color-scheme: dark) {
      border-bottom-color: #334155;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    }
    
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      
      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }
    
    // Modifier for header
    &--large {
      padding: 2rem;
      
      h3 {
        font-size: 1.75rem;
        background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }
  
  &__body {
    padding: 1.5rem;
    
    p {
      line-height: 1.6;
      color: #64748b;
      
      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }
  }
  
  // Modifier for card
  &--featured {
    border: 3px solid #f59e0b;
    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);
  }
}`}
          title="BEM with Selector Module"
          description="Clean component structure using selector functions"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Parse</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                selector.parse() - Convert strings
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Nest</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                selector.nest() - Combine selectors
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Append</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                selector.append() - Add to end
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Advanced</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For mixins and utilities
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
