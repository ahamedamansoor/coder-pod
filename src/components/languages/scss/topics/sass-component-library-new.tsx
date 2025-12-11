'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Package, 
  CheckCircle2,
  Lightbulb,
  Info,
  Box,
  Layers,
  FolderTree,
  Code,
  Palette
} from 'lucide-react';

interface SassComponentLibraryNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassComponentLibraryNew({ onOpenWebPlayground }: SassComponentLibraryNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="Sass/SCSS · Design Systems"
        title="Component Libraries"
        description="Build scalable, reusable component libraries with SCSS modules, design tokens, and smart architecture."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Component Libraries"
            description="Reusable, maintainable design systems"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Component libraries</strong> are collections of reusable UI components. Build them with <strong>SCSS modules</strong>, <strong>design tokens</strong>, and proper <strong>architecture</strong> for maximum reusability!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <Box className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">Reusable</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Use across projects</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Modular</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Import only what you need</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <Package className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Themeable</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Customizable via tokens</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Library Structure */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FolderTree className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Library Structure"
            description="Organizing your component library"
            size="lg"
          />

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre>{`my-component-library/
├── src/
│   ├── tokens/
│   │   ├── _colors.scss
│   │   ├── _spacing.scss
│   │   ├── _typography.scss
│   │   ├── _shadows.scss
│   │   └── _index.scss
│   │
│   ├── components/
│   │   ├── button/
│   │   │   ├── _button.scss
│   │   │   ├── _button-variables.scss
│   │   │   └── _index.scss
│   │   ├── card/
│   │   │   ├── _card.scss
│   │   │   ├── _card-variables.scss
│   │   │   └── _index.scss
│   │   ├── input/
│   │   └── ...
│   │
│   ├── utilities/
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   └── _index.scss
│   │
│   └── index.scss (main entry)
│
├── dist/
│   └── my-library.css (compiled)
│
└── package.json`}</pre>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Modular Structure</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Each component in its own folder with variables, styles, and index file. Users import only what they need!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Design Tokens */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Design Tokens"
            description="Foundation of your library"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="tokens/_colors.scss"
              code={`// Brand colors
$color-primary: #3b82f6 !default;
$color-secondary: #8b5cf6 !default;
$color-accent: #06b6d4 !default;

// Semantic colors
$color-success: #10b981 !default;
$color-warning: #f59e0b !default;
$color-error: #ef4444 !default;
$color-info: #3b82f6 !default;

// Neutral colors
$color-white: #ffffff !default;
$color-black: #000000 !default;
$color-gray-50: #f9fafb !default;
$color-gray-100: #f3f4f6 !default;
// ... more grays

// Text colors
$color-text-primary: $color-gray-900 !default;
$color-text-secondary: $color-gray-600 !default;
$color-text-tertiary: $color-gray-500 !default;

// Background colors
$color-bg-primary: $color-white !default;
$color-bg-secondary: $color-gray-50 !default;

// !default allows users to override`}
              output={[
                '// All tokens defined with !default for customization'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="tokens/_spacing.scss"
              code={`// Base unit
$spacing-unit: 0.25rem !default; // 4px

// Spacing scale
$spacing-1: $spacing-unit * 1 !default;   // 4px
$spacing-2: $spacing-unit * 2 !default;   // 8px
$spacing-3: $spacing-unit * 3 !default;   // 12px
$spacing-4: $spacing-unit * 4 !default;   // 16px
$spacing-5: $spacing-unit * 5 !default;   // 20px
$spacing-6: $spacing-unit * 6 !default;   // 24px
$spacing-8: $spacing-unit * 8 !default;   // 32px
$spacing-10: $spacing-unit * 10 !default; // 40px
$spacing-12: $spacing-unit * 12 !default; // 48px

// Semantic spacing
$spacing-xs: $spacing-2 !default;
$spacing-sm: $spacing-4 !default;
$spacing-md: $spacing-6 !default;
$spacing-lg: $spacing-8 !default;
$spacing-xl: $spacing-12 !default;`}
              output={[
                '// Consistent spacing scale for all components'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="tokens/_index.scss"
              code={`// Forward all token modules
@forward 'colors';
@forward 'spacing';
@forward 'typography';
@forward 'shadows';

// Usage in consumer app:
// @use 'my-library/src/tokens' with (
//   $color-primary: #ef4444
// );`}
              output={[
                '// Single entry point for all tokens'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Component Pattern */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Component Pattern"
            description="How to build a component"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="components/button/_button-variables.scss"
              code={`// Button-specific variables (use tokens)
@use '../../tokens' as *;

// Button sizing
$button-padding-sm: $spacing-2 $spacing-4 !default;
$button-padding-md: $spacing-3 $spacing-6 !default;
$button-padding-lg: $spacing-4 $spacing-8 !default;

$button-font-size-sm: 0.875rem !default;
$button-font-size-md: 1rem !default;
$button-font-size-lg: 1.125rem !default;

// Button colors
$button-primary-bg: $color-primary !default;
$button-primary-text: $color-white !default;
$button-primary-hover: darken($color-primary, 10%) !default;

$button-secondary-bg: $color-secondary !default;
$button-secondary-text: $color-white !default;
$button-secondary-hover: darken($color-secondary, 10%) !default;

// Border radius
$button-radius: 0.375rem !default;

// Transition
$button-transition: all 0.2s ease-in-out !default;`}
              output={[
                '// Component-specific variables built on tokens'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="components/button/_button.scss"
              code={`@use './button-variables' as *;

.btn {
  // Base styles
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: none;
  border-radius: $button-radius;
  cursor: pointer;
  transition: $button-transition;
  text-decoration: none;
  
  // Default size
  padding: $button-padding-md;
  font-size: $button-font-size-md;
  
  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  // Sizes
  &--sm {
    padding: $button-padding-sm;
    font-size: $button-font-size-sm;
  }
  
  &--lg {
    padding: $button-padding-lg;
    font-size: $button-font-size-lg;
  }
  
  // Variants
  &--primary {
    background: $button-primary-bg;
    color: $button-primary-text;
    
    &:hover:not(:disabled) {
      background: $button-primary-hover;
    }
  }
  
  &--secondary {
    background: $button-secondary-bg;
    color: $button-secondary-text;
    
    &:hover:not(:disabled) {
      background: $button-secondary-hover;
    }
  }
  
  &--outline {
    background: transparent;
    border: 2px solid $button-primary-bg;
    color: $button-primary-bg;
    
    &:hover:not(:disabled) {
      background: $button-primary-bg;
      color: $button-primary-text;
    }
  }
}`}
              output={[
                '.btn { display: inline-flex; align-items: center; ... }',
                '.btn--sm { padding: 0.5rem 1rem; font-size: 0.875rem; }',
                '.btn--primary { background: #3b82f6; color: #ffffff; }',
                '.btn--primary:hover { background: #2563eb; }',
                '// Complete button component'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="components/button/_index.scss"
              code={`// Forward button variables for customization
@forward 'button-variables';

// Import and use the button styles
@use 'button';`}
              output={[
                '// Single entry point for button component'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Using the Library */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Using the Library"
            description="How consumers use your library"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Import Everything"
              code={`// Import the entire library
@use 'my-component-library' as lib;

// Use components with namespace
.my-app {
  .header {
    // Button component available
  }
}`}
              output={[
                '// All components loaded with lib namespace'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Import Specific Components"
              code={`// Import only what you need
@use 'my-component-library/src/components/button';
@use 'my-component-library/src/components/card';

// Or use individual files
@use 'my-component-library/src/tokens';

.my-app {
  // Use button and card styles
}`}
              output={[
                '// Only loads button and card CSS'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Customize with Tokens"
              code={`// Override tokens before importing
@use 'my-component-library/src/tokens' with (
  $color-primary: #ef4444,
  $color-secondary: #f59e0b,
  $spacing-unit: 0.5rem
);

// Then import components
@use 'my-component-library/src/components/button';
@use 'my-component-library/src/components/card';

// Components now use your custom tokens!`}
              output={[
                '// Buttons use #ef4444 instead of default #3b82f6',
                '// Spacing uses 8px base instead of 4px'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Override Component Variables"
              code={`// Override specific component variables
@use 'my-component-library/src/components/button' with (
  $button-radius: 1rem,
  $button-padding-md: 1rem 2rem
);

// Button now has custom border-radius and padding`}
              output={[
                '// Button component customized without modifying library'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Main Entry Point */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Main Entry Point"
            description="Library index file"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="src/index.scss"
            code={`// Main entry point for the library

// 1. Forward tokens (allow customization)
@forward 'tokens';

// 2. Forward utilities
@forward 'utilities';

// 3. Forward all components
@forward 'components/button';
@forward 'components/card';
@forward 'components/input';
@forward 'components/modal';
@forward 'components/alert';
// ... all other components

// Consumers can now:
// @use 'my-library' as lib;
// or
// @use 'my-library' with ($color-primary: red);`}
            output={[
              '// Single file exports entire library'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="package.json"
            code={`{
  "name": "my-component-library",
  "version": "1.0.0",
  "main": "dist/my-library.css",
  "sass": "src/index.scss",
  "exports": {
    ".": {
      "sass": "./src/index.scss",
      "style": "./dist/my-library.css"
    },
    "./tokens": "./src/tokens/_index.scss",
    "./components/button": "./src/components/button/_index.scss",
    "./components/card": "./src/components/card/_index.scss"
  },
  "files": [
    "src/",
    "dist/"
  ]
}`}
            output={[
              '// Package configuration for npm'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      {/* Complete Example */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Complete Card Component Example"
            description="Full component implementation"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="components/card/_card-variables.scss"
              code={`@use '../../tokens' as *;

// Card variables
$card-bg: $color-bg-primary !default;
$card-border: $color-gray-200 !default;
$card-border-radius: 0.5rem !default;
$card-padding: $spacing-6 !default;
$card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !default;

// Card hover
$card-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !default;

// Card header
$card-header-padding: $spacing-4 $spacing-6 !default;
$card-header-border: $color-gray-200 !default;

// Card footer
$card-footer-padding: $spacing-4 $spacing-6 !default;
$card-footer-bg: $color-gray-50 !default;`}
              output={[
                '// All card configuration in one place'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="components/card/_card.scss"
              code={`@use './card-variables' as *;

.card {
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: $card-border-radius;
  box-shadow: $card-shadow;
  overflow: hidden;
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: $card-hover-shadow;
  }
  
  &__header {
    padding: $card-header-padding;
    border-bottom: 1px solid $card-header-border;
  }
  
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }
  
  &__subtitle {
    font-size: 0.875rem;
    color: $color-text-secondary;
    margin-top: 0.25rem;
  }
  
  &__body {
    padding: $card-padding;
  }
  
  &__footer {
    padding: $card-footer-padding;
    background: $card-footer-bg;
    border-top: 1px solid $card-header-border;
  }
  
  // Variants
  &--elevated {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  &--flat {
    box-shadow: none;
    border: 2px solid $card-border;
  }
}`}
              output={[
                '.card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 0.5rem; ... }',
                '.card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }',
                '.card__header { padding: 1rem 1.5rem; border-bottom: 1px solid #e5e7eb; }',
                '// Full card component with BEM'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Component Library Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use !default Everywhere</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Makes all variables customizable by consumers
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Modular Structure</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each component in its own folder, importable individually
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use @forward and @use</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Modern module system, not @import
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Design Tokens</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Build components on top of tokens, not hardcoded values
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ BEM Naming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consistent naming prevents conflicts
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Document Everything</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                README with examples, variable reference, customization guide
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Modular Design</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each component standalone and importable
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Design Tokens</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Foundation layer for all components
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">!default Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Everything customizable by consumers
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">SCSS Modules</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @use and @forward for modern approach
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
