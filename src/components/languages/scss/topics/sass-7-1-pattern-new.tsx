'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FolderTree, 
  CheckCircle2,
  Lightbulb,
  Info,
  Folder,
  FileCode,
  Package,
  Settings,
  Layout,
  Palette,
  Blocks
} from 'lucide-react';

interface Sass71PatternNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Sass71PatternNew({ onOpenWebPlayground }: Sass71PatternNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FolderTree}
        category="Sass/SCSS · Architecture"
        title="7-1 Pattern"
        description="Organize Sass with 7 folders and 1 main file for scalable, maintainable architecture."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FolderTree className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="7-1 Pattern"
            description="Industry-standard SCSS architecture"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>7-1 Pattern</strong> is a popular architecture for organizing SCSS in large projects. It uses <strong>7 folders</strong> for partials and <strong>1 main file</strong> that imports everything!
          </p>

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre>{`scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _button.scss
│   └── _card.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
├── pages/
│   ├── _home.scss
│   └── _about.scss
├── themes/
│   ├── _dark.scss
│   └── _light.scss
├── vendors/
│   └── _bootstrap.scss
└── main.scss`}</pre>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why 7-1?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Separates concerns, improves maintainability, and makes it easy to find and update styles!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 1. Abstracts Folder */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="1. abstracts/"
            description="Variables, mixins, functions"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Global Sass tools and helpers. No actual CSS output!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="abstracts/_variables.scss"
              code={`// Colors
$primary: #3b82f6;
$secondary: #8b5cf6;
$success: #10b981;
$danger: #ef4444;

// Typography
$font-primary: -apple-system, BlinkMacSystemFont, sans-serif;
$font-mono: 'Courier New', monospace;

// Spacing
$spacing-unit: 8px;
$spacing-xs: $spacing-unit;
$spacing-sm: $spacing-unit * 2;
$spacing-md: $spacing-unit * 3;
$spacing-lg: $spacing-unit * 4;
$spacing-xl: $spacing-unit * 6;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;`}
              output={[
                '// No CSS output - just variables for other files to use'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="abstracts/_mixins.scss"
              code={`// Responsive breakpoints
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'sm' {
    @media (min-width: $breakpoint-sm) { @content; }
  } @else if $breakpoint == 'md' {
    @media (min-width: $breakpoint-md) { @content; }
  } @else if $breakpoint == 'lg' {
    @media (min-width: $breakpoint-lg) { @content; }
  }
}

// Flexbox center
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Transition
@mixin transition($property: all) {
  transition: $property 0.3s ease;
}`}
              output={[
                '// No CSS output - mixins ready to be used'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="abstracts/_functions.scss"
              code={`// Convert px to rem
@function rem($pixels) {
  @return ($pixels / 16px) * 1rem;
}

// Usage: font-size: rem(24px); // 1.5rem

// Strip unit
@function strip-unit($number) {
  @return $number / ($number * 0 + 1);
}

// Lighten color
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}`}
              output={[
                '// No CSS output - functions for calculations'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* 2. Base Folder */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="2. base/"
            description="Resets, typography, base styles"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Foundation styles that apply globally.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="base/_reset.scss"
              code={`// CSS Reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: $font-primary;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}`}
              output={[
                '* { margin: 0; padding: 0; box-sizing: border-box; }',
                'html { font-size: 16px; scroll-behavior: smooth; }',
                'body { font-family: -apple-system, ...; line-height: 1.6; ... }',
                'img { max-width: 100%; display: block; }',
                'a { text-decoration: none; color: inherit; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="base/_typography.scss"
              code={`h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

h1 { font-size: rem(48px); }
h2 { font-size: rem(36px); }
h3 { font-size: rem(28px); }
h4 { font-size: rem(24px); }
h5 { font-size: rem(20px); }
h6 { font-size: rem(18px); }

p {
  margin-bottom: 1em;
}

code {
  font-family: $font-mono;
  background: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}`}
              output={[
                'h1, h2, h3, h4, h5, h6 { font-weight: 700; line-height: 1.2; margin-bottom: 0.5em; }',
                'h1 { font-size: 3rem; }',
                'h2 { font-size: 2.25rem; }',
                '...',
                'p { margin-bottom: 1em; }',
                'code { font-family: "Courier New", monospace; background: #f5f5f5; ... }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* 3. Components Folder */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blocks className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="3. components/"
            description="Reusable UI components"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Styles for individual components (buttons, cards, forms, etc.).
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="components/_button.scss"
              code={`.button {
  display: inline-block;
  padding: $spacing-sm $spacing-md;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  @include transition(all);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &--primary {
    background: $primary;
    color: white;
  }
  
  &--secondary {
    background: $secondary;
    color: white;
  }
  
  &--large {
    padding: $spacing-md $spacing-lg;
    font-size: rem(18px);
  }
}`}
              output={[
                '.button { display: inline-block; padding: 16px 24px; font-weight: 600; border-radius: 6px; ... transition: all 0.3s ease; }',
                '.button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }',
                '.button--primary { background: #3b82f6; color: white; }',
                '.button--secondary { background: #8b5cf6; color: white; }',
                '.button--large { padding: 24px 32px; font-size: 1.125rem; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="components/_card.scss"
              code={`.card {
  background: white;
  border-radius: 12px;
  padding: $spacing-lg;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @include transition(box-shadow);
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  &__header {
    font-size: rem(24px);
    font-weight: 700;
    margin-bottom: $spacing-md;
    color: $primary;
  }
  
  &__body {
    color: #666;
    line-height: 1.6;
  }
  
  &__footer {
    margin-top: $spacing-md;
    padding-top: $spacing-md;
    border-top: 1px solid #eee;
  }
}`}
              output={[
                '.card { background: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); transition: box-shadow 0.3s ease; }',
                '.card:hover { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); }',
                '.card__header { font-size: 1.5rem; font-weight: 700; margin-bottom: 24px; color: #3b82f6; }',
                '.card__body { color: #666; line-height: 1.6; }',
                '.card__footer { margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* 4. Layout Folder */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="4. layout/"
            description="Major layout sections"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Macro layout elements (header, footer, navigation, grid).
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="layout/_header.scss"
              code={`.header {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: $spacing-md 0;
  position: sticky;
  top: 0;
  z-index: 100;
  
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $spacing-md;
    @include flex-center;
    justify-content: space-between;
  }
  
  &__logo {
    font-size: rem(24px);
    font-weight: 700;
    color: $primary;
  }
  
  &__nav {
    display: flex;
    gap: $spacing-lg;
    
    a {
      color: #666;
      @include transition(color);
      
      &:hover {
        color: $primary;
      }
    }
  }
}`}
              output={[
                '.header { background: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 24px 0; position: sticky; top: 0; z-index: 100; }',
                '.header__container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; }',
                '.header__logo { font-size: 1.5rem; font-weight: 700; color: #3b82f6; }',
                '.header__nav { display: flex; gap: 32px; }',
                '.header__nav a { color: #666; transition: color 0.3s ease; }',
                '.header__nav a:hover { color: #3b82f6; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="layout/_grid.scss"
              code={`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-md;
}

.grid {
  display: grid;
  gap: $spacing-lg;
  
  &--2-cols {
    grid-template-columns: repeat(2, 1fr);
    
    @include respond-to('md') {
      grid-template-columns: 1fr;
    }
  }
  
  &--3-cols {
    grid-template-columns: repeat(3, 1fr);
    
    @include respond-to('lg') {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include respond-to('md') {
      grid-template-columns: 1fr;
    }
  }
  
  &--4-cols {
    grid-template-columns: repeat(4, 1fr);
    
    @include respond-to('xl') {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}`}
              output={[
                '.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }',
                '.grid { display: grid; gap: 32px; }',
                '.grid--2-cols { grid-template-columns: repeat(2, 1fr); }',
                '@media (min-width: 768px) { .grid--2-cols { grid-template-columns: 1fr; } }',
                '.grid--3-cols { grid-template-columns: repeat(3, 1fr); }',
                '...'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* 5. Pages Folder */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="5. pages/"
            description="Page-specific styles"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Styles unique to specific pages.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="pages/_home.scss"
              code={`.home {
  &__hero {
    background: linear-gradient(135deg, $primary, $secondary);
    color: white;
    padding: $spacing-xl * 2 0;
    text-align: center;
    
    h1 {
      font-size: rem(56px);
      margin-bottom: $spacing-md;
    }
    
    p {
      font-size: rem(20px);
      margin-bottom: $spacing-lg;
    }
  }
  
  &__features {
    padding: $spacing-xl 0;
    
    .grid {
      @extend .grid--3-cols;
    }
  }
  
  &__cta {
    background: #f5f5f5;
    padding: $spacing-xl 0;
    text-align: center;
  }
}`}
              output={[
                '.home__hero { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 96px 0; text-align: center; }',
                '.home__hero h1 { font-size: 3.5rem; margin-bottom: 24px; }',
                '.home__hero p { font-size: 1.25rem; margin-bottom: 32px; }',
                '.home__features { padding: 48px 0; }',
                '.home__features .grid { grid-template-columns: repeat(3, 1fr); }',
                '.home__cta { background: #f5f5f5; padding: 48px 0; text-align: center; }'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* 6. Themes Folder */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="6. themes/"
            description="Theme variations"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Different color schemes and themes.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="themes/_dark.scss"
              code={`.theme-dark {
  background: #1a1a1a;
  color: #e0e0e0;
  
  .card {
    background: #2a2a2a;
    color: #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .header {
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
  }
  
  .button {
    &--primary {
      background: lighten($primary, 10%);
    }
  }
  
  a {
    color: lighten($primary, 20%);
    
    &:hover {
      color: lighten($primary, 30%);
    }
  }
}`}
              output={[
                '.theme-dark { background: #1a1a1a; color: #e0e0e0; }',
                '.theme-dark .card { background: #2a2a2a; color: #e0e0e0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); }',
                '.theme-dark .header { background: #2a2a2a; border-bottom: 1px solid #3a3a3a; }',
                '.theme-dark .button--primary { background: #6ca2f8; }',
                '.theme-dark a { color: #9dc2fa; }',
                '.theme-dark a:hover { color: #c3dafe; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* 7. Vendors Folder */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-teal-50/60 dark:from-cyan-950/10 dark:to-teal-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="7. vendors/"
            description="Third-party styles"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Third-party library overrides and customizations.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="vendors/_bootstrap.scss"
              code={`// Override Bootstrap variables before import
$primary: $primary;
$secondary: $secondary;

// Import Bootstrap
@import '~bootstrap/scss/bootstrap';

// Custom overrides after import
.btn {
  border-radius: 8px;
  font-weight: 600;
  @include transition(all);
}

.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`}
              output={[
                '// Bootstrap imported with custom variables',
                '.btn { border-radius: 8px; font-weight: 600; transition: all 0.3s ease; }',
                '.card { border: none; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }'
              ]}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Main File */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="main.scss"
            description="The one file that imports everything"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Purpose:</strong> Import all partials in the correct order.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="main.scss"
              code={`// 1. Abstracts
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';

// 2. Vendors (before our styles)
@import 'vendors/bootstrap';

// 3. Base
@import 'base/reset';
@import 'base/typography';

// 4. Layout
@import 'layout/header';
@import 'layout/footer';
@import 'layout/grid';

// 5. Components
@import 'components/button';
@import 'components/card';
@import 'components/form';

// 6. Pages
@import 'pages/home';
@import 'pages/about';
@import 'pages/contact';

// 7. Themes (last, for overrides)
@import 'themes/dark';
@import 'themes/light';`}
              output={[
                '// Compiled CSS output',
                '// All partials combined in order',
                '// Variables and mixins processed',
                '// Final CSS ready for production'
              ]}
              language="scss"
              colorTheme="pink"
            />
          </div>

          <Alert className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-300 dark:border-rose-700">
            <Lightbulb className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Import Order Matters!</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              <strong>Abstracts first</strong> (variables/mixins), then <strong>vendors</strong>, then <strong>base</strong>, then <strong>specific styles</strong>, and <strong>themes last</strong> for overrides.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Benefits of 7-1 Pattern"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">📁 Organization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clear folder structure makes finding styles easy
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">🔧 Maintainability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Separation of concerns makes updates simple
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">📈 Scalability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easily add new components and pages
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">👥 Team Collaboration</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Multiple developers can work without conflicts
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔄 Reusability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Abstracts folder makes tools reusable
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-rose-300 dark:border-rose-700">
              <h4 className="font-bold text-rose-700 dark:text-rose-300 mb-2">🎨 Themability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easy to create and switch themes
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

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">✅ Use Partials</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prefix with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_</code> (e.g., <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_button.scss</code>) - they won't compile individually
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">✅ Import Order</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Abstracts → Vendors → Base → Layout → Components → Pages → Themes
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">✅ One Main File</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">main.scss</code> gets compiled to CSS
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">✅ Adapt as Needed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Not all projects need all 7 folders - adapt to your project size
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
