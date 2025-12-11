'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Palette, 
  CheckCircle2,
  Lightbulb,
  Info,
  Layers,
  Box,
  Type,
  Zap
} from 'lucide-react';

interface SassDesignTokensNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassDesignTokensNew({ onOpenWebPlayground }: SassDesignTokensNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Palette}
        category="Sass/SCSS · Best Practices"
        title="Design Tokens"
        description="Create a centralized system of design values for consistent, maintainable styling."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Design Tokens"
            description="Centralized design system values"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Design tokens</strong> are named variables that store design decisions (colors, spacing, typography, etc.). They create a <strong>single source of truth</strong> for your design system!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">Consistency</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Same values everywhere</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Maintainability</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Update once, change everywhere</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <Layers className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Scalability</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Easy to extend and manage</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">What Are Design Tokens?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Design tokens are the <strong>visual DNA</strong> of your design system. Instead of using random values, you reference named tokens!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Color Tokens */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Color Tokens"
            description="Brand colors, semantic colors, neutral palette"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Color Token System"
              code={`// ===== Brand Colors =====
$color-brand-primary: #3b82f6;
$color-brand-secondary: #8b5cf6;
$color-brand-accent: #06b6d4;

// ===== Semantic Colors =====
$color-success: #10b981;
$color-warning: #f59e0b;
$color-error: #ef4444;
$color-info: #3b82f6;

// ===== Neutral Palette =====
$color-gray-50: #f9fafb;
$color-gray-100: #f3f4f6;
$color-gray-200: #e5e7eb;
$color-gray-300: #d1d5db;
$color-gray-400: #9ca3af;
$color-gray-500: #6b7280;
$color-gray-600: #4b5563;
$color-gray-700: #374151;
$color-gray-800: #1f2937;
$color-gray-900: #111827;

// ===== Text Colors =====
$color-text-primary: $color-gray-900;
$color-text-secondary: $color-gray-600;
$color-text-tertiary: $color-gray-500;
$color-text-disabled: $color-gray-400;
$color-text-inverse: #ffffff;

// ===== Background Colors =====
$color-bg-primary: #ffffff;
$color-bg-secondary: $color-gray-50;
$color-bg-tertiary: $color-gray-100;
$color-bg-inverse: $color-gray-900;

// ===== Border Colors =====
$color-border-light: $color-gray-200;
$color-border-medium: $color-gray-300;
$color-border-dark: $color-gray-400;

// Usage
.button-primary {
  background: $color-brand-primary;
  color: $color-text-inverse;
  border: 2px solid $color-brand-primary;
}

.alert-success {
  background: lighten($color-success, 45%);
  color: darken($color-success, 20%);
  border-left: 4px solid $color-success;
}`}
              output={[
                '.button-primary { background: #3b82f6; color: #ffffff; border: 2px solid #3b82f6; }',
                '.alert-success { background: #d1fae5; color: #065f46; border-left: 4px solid #10b981; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Spacing Tokens */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Spacing Tokens"
            description="Consistent spacing scale"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Spacing Scale"
              code={`// ===== Base Unit =====
$spacing-unit: 0.25rem; // 4px

// ===== Spacing Scale (4px increments) =====
$spacing-0: 0;
$spacing-1: $spacing-unit * 1;      // 4px
$spacing-2: $spacing-unit * 2;      // 8px
$spacing-3: $spacing-unit * 3;      // 12px
$spacing-4: $spacing-unit * 4;      // 16px
$spacing-5: $spacing-unit * 5;      // 20px
$spacing-6: $spacing-unit * 6;      // 24px
$spacing-8: $spacing-unit * 8;      // 32px
$spacing-10: $spacing-unit * 10;    // 40px
$spacing-12: $spacing-unit * 12;    // 48px
$spacing-16: $spacing-unit * 16;    // 64px
$spacing-20: $spacing-unit * 20;    // 80px
$spacing-24: $spacing-unit * 24;    // 96px

// ===== Semantic Spacing =====
$spacing-xs: $spacing-2;            // 8px
$spacing-sm: $spacing-4;            // 16px
$spacing-md: $spacing-6;            // 24px
$spacing-lg: $spacing-8;            // 32px
$spacing-xl: $spacing-12;           // 48px
$spacing-2xl: $spacing-16;          // 64px

// Usage
.card {
  padding: $spacing-md;
  margin-bottom: $spacing-lg;
  
  &__title {
    margin-bottom: $spacing-sm;
  }
  
  &__footer {
    margin-top: $spacing-lg;
    padding-top: $spacing-md;
  }
}`}
              output={[
                '.card { padding: 24px; margin-bottom: 32px; }',
                '.card__title { margin-bottom: 16px; }',
                '.card__footer { margin-top: 32px; padding-top: 24px; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Typography Tokens */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Typography Tokens"
            description="Font families, sizes, weights, line heights"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Typography System"
              code={`// ===== Font Families =====
$font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-heading: 'Inter', 'Helvetica Neue', sans-serif;
$font-family-mono: 'Fira Code', 'Courier New', monospace;

// ===== Font Sizes =====
$font-size-xs: 0.75rem;      // 12px
$font-size-sm: 0.875rem;     // 14px
$font-size-base: 1rem;       // 16px
$font-size-lg: 1.125rem;     // 18px
$font-size-xl: 1.25rem;      // 20px
$font-size-2xl: 1.5rem;      // 24px
$font-size-3xl: 1.875rem;    // 30px
$font-size-4xl: 2.25rem;     // 36px
$font-size-5xl: 3rem;        // 48px

// ===== Font Weights =====
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;

// ===== Line Heights =====
$line-height-tight: 1.25;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;
$line-height-loose: 2;

// ===== Letter Spacing =====
$letter-spacing-tight: -0.025em;
$letter-spacing-normal: 0;
$letter-spacing-wide: 0.025em;
$letter-spacing-wider: 0.05em;

// Usage
h1 {
  font-family: $font-family-heading;
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  letter-spacing: $letter-spacing-tight;
}

body {
  font-family: $font-family-primary;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-normal;
}

code {
  font-family: $font-family-mono;
  font-size: $font-size-sm;
}`}
              output={[
                'h1 { font-family: "Inter", ...; font-size: 2.25rem; font-weight: 700; line-height: 1.25; letter-spacing: -0.025em; }',
                'body { font-family: -apple-system, ...; font-size: 1rem; font-weight: 400; line-height: 1.5; }',
                'code { font-family: "Fira Code", ...; font-size: 0.875rem; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Shadow & Border Tokens */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Shadow & Border Tokens"
            description="Elevation and borders"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Shadow & Border System"
              code={`// ===== Box Shadows =====
$shadow-none: none;
$shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
$shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

// ===== Border Radius =====
$radius-none: 0;
$radius-sm: 0.125rem;     // 2px
$radius-md: 0.375rem;     // 6px
$radius-lg: 0.5rem;       // 8px
$radius-xl: 0.75rem;      // 12px
$radius-2xl: 1rem;        // 16px
$radius-full: 9999px;     // Fully rounded

// ===== Border Width =====
$border-width-0: 0;
$border-width-1: 1px;
$border-width-2: 2px;
$border-width-4: 4px;
$border-width-8: 8px;

// Usage
.card {
  box-shadow: $shadow-md;
  border-radius: $radius-lg;
  border: $border-width-1 solid $color-border-light;
  
  &:hover {
    box-shadow: $shadow-lg;
  }
}

.button {
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  
  &--rounded {
    border-radius: $radius-full;
  }
}

.avatar {
  border-radius: $radius-full;
  border: $border-width-2 solid $color-border-medium;
}`}
              output={[
                '.card { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-radius: 0.5rem; border: 1px solid #e5e7eb; }',
                '.card:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }',
                '.button { border-radius: 0.375rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); }',
                '.button--rounded { border-radius: 9999px; }',
                '.avatar { border-radius: 9999px; border: 2px solid #d1d5db; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Z-Index & Transitions */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Z-Index & Transition Tokens"
            description="Layering and animations"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Z-Index & Transitions"
              code={`// ===== Z-Index Scale =====
$z-index-base: 0;
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;
$z-index-notification: 1080;

// ===== Transition Duration =====
$duration-fast: 150ms;
$duration-base: 300ms;
$duration-slow: 500ms;
$duration-slower: 700ms;

// ===== Transition Timing =====
$ease-in: cubic-bezier(0.4, 0, 1, 1);
$ease-out: cubic-bezier(0, 0, 0.2, 1);
$ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
$ease-linear: linear;

// Usage
.dropdown {
  z-index: $z-index-dropdown;
  transition: opacity $duration-base $ease-in-out;
}

.modal {
  z-index: $z-index-modal;
  
  &-backdrop {
    z-index: $z-index-modal-backdrop;
    transition: opacity $duration-slow $ease-out;
  }
}

.button {
  transition: all $duration-fast $ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
  }
}

.tooltip {
  z-index: $z-index-tooltip;
  transition: opacity $duration-base $ease-in;
}`}
              output={[
                '.dropdown { z-index: 1000; transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1); }',
                '.modal { z-index: 1050; }',
                '.modal-backdrop { z-index: 1040; transition: opacity 500ms cubic-bezier(0, 0, 0.2, 1); }',
                '.button { transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1); }',
                '.button:hover { transform: translateY(-2px); }',
                '.tooltip { z-index: 1070; transition: opacity 300ms cubic-bezier(0.4, 0, 1, 1); }'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Organizing Tokens */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Organizing Design Tokens"
            description="File structure"
            size="lg"
          />

          <div className="space-y-6">
            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
              <pre>{`scss/
├── tokens/
│   ├── _colors.scss       // All color tokens
│   ├── _spacing.scss      // Spacing scale
│   ├── _typography.scss   // Font tokens
│   ├── _shadows.scss      // Shadow tokens
│   ├── _borders.scss      // Border tokens
│   ├── _z-index.scss      // Z-index scale
│   ├── _transitions.scss  // Animation tokens
│   └── _index.scss        // Import all tokens
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── ...
└── main.scss`}</pre>
            </div>

            <CodeSnippetWithOutput
              title="tokens/_index.scss"
              code={`// Import all token files
@forward 'colors';
@forward 'spacing';
@forward 'typography';
@forward 'shadows';
@forward 'borders';
@forward 'z-index';
@forward 'transitions';`}
              output={[
                '// All tokens available via @use "tokens"'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              code={`// Import tokens first
@use 'tokens';

// Then import components
@use 'components/button';
@use 'components/card';

// Components can now use tokens
// e.g., tokens.$color-brand-primary`}
              output={[
                '// All tokens loaded before components'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Using Tokens with Maps */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-teal-50/60 dark:from-cyan-950/10 dark:to-teal-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Tokens as Maps"
            description="Advanced organization"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Design Token Maps"
              code={`// Organize tokens in maps
$colors: (
  'brand': (
    'primary': #3b82f6,
    'secondary': #8b5cf6
  ),
  'semantic': (
    'success': #10b981,
    'error': #ef4444,
    'warning': #f59e0b
  ),
  'text': (
    'primary': #111827,
    'secondary': #6b7280
  )
);

$spacing: (
  'xs': 0.5rem,
  'sm': 1rem,
  'md': 1.5rem,
  'lg': 2rem,
  'xl': 3rem
);

// Helper function
@function token($category, $name) {
  @return map-get(map-get($colors, $category), $name);
}

// Usage
.button-primary {
  background: token('brand', 'primary');
  color: token('text', 'primary');
}

.alert-success {
  background: lighten(token('semantic', 'success'), 45%);
  border-left: 4px solid token('semantic', 'success');
}`}
              output={[
                '.button-primary { background: #3b82f6; color: #111827; }',
                '.alert-success { background: #d1fae5; border-left: 4px solid #10b981; }'
              ]}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Design Token Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Use semantic naming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">$color-text-primary</code> instead of <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">$color-black</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Create scales</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use consistent scales (spacing-1, spacing-2, etc.) instead of random values
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ DO: Document tokens</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add comments explaining when and how to use tokens
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ DON'T: Use magic numbers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use tokens instead of hardcoded values like <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">padding: 23px</code>
              </p>
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Single Source of Truth</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All design decisions in one place
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Consistent Scales</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use systematic scales for spacing, typography, etc.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Semantic Naming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Name by purpose, not appearance
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Easy Updates</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Change once, update everywhere
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
