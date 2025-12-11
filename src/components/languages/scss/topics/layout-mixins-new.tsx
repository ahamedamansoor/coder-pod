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
  Layout, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  Grid3x3,
  AlignHorizontalJustifyCenter,
  Box,
  Columns
} from 'lucide-react';

interface LayoutMixinsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function LayoutMixinsNew({ onOpenWebPlayground }: LayoutMixinsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layout}
        category="Sass/SCSS · Mixins Library"
        title="Layout Mixins"
        description="Powerful mixins for flexbox, grid, centering, and modern layout patterns."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Layout Mixins"
            description="Reusable layout patterns for modern CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Layout mixins simplify <strong>flexbox</strong>, <strong>grid</strong>, and <strong>positioning</strong> patterns. Create responsive layouts faster with these battle-tested utilities!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <AlignHorizontalJustifyCenter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Flexbox</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Center, align, distribute</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Grid3x3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Grid</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Responsive grids</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Box className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Centering</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Perfect centering</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Columns className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300">Container</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Max-width wrappers</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flexbox Mixins */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlignHorizontalJustifyCenter className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Flexbox Mixins"
            description="Flexible box layout utilities"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Flex Center"
              code={`// Center both horizontally and vertically
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Usage
.modal {
  @include flex-center;
  min-height: 100vh;
}

.card {
  @include flex-center;
  height: 200px;
}`}
              output={[
                '.modal {',
                '  display: flex;',
                '  justify-content: center;',
                '  align-items: center;',
                '  min-height: 100vh;',
                '}',
                '.card { display: flex; justify-content: center; align-items: center; height: 200px; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Flex Patterns"
              code={`// Horizontal centering
@mixin flex-center-x {
  display: flex;
  justify-content: center;
}

// Vertical centering
@mixin flex-center-y {
  display: flex;
  align-items: center;
}

// Space between items
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// Usage
.header {
  @include flex-between;
}

.button {
  @include flex-center;
  gap: 0.5rem;
}`}
              output={[
                '.header {',
                '  display: flex;',
                '  justify-content: space-between;',
                '  align-items: center;',
                '}',
                '.button { display: flex; justify-content: center; align-items: center; gap: 0.5rem; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Advanced Flex Mixin"
              code={`// Flexible flex mixin with parameters
@mixin flex($direction: row, $justify: flex-start, $align: stretch, $wrap: nowrap) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  flex-wrap: $wrap;
}

// Usage examples
.nav {
  @include flex(row, space-between, center);
}

.sidebar {
  @include flex(column, flex-start, stretch);
}

.grid-fallback {
  @include flex(row, flex-start, flex-start, wrap);
}`}
              output={[
                '.nav { display: flex; flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: nowrap; }',
                '.sidebar { display: flex; flex-direction: column; ... }',
                '.grid-fallback { display: flex; flex-wrap: wrap; ... }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Grid Mixins */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Grid3x3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="CSS Grid Mixins"
            description="Powerful grid layout utilities"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Auto-Fit Grid"
              code={`// Responsive grid with auto-fit
@mixin grid-auto($min-width: 250px, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, 1fr));
  gap: $gap;
}

// Usage
.gallery {
  @include grid-auto(300px, 2rem);
}

.product-grid {
  @include grid-auto(200px, 1.5rem);
}

.card-grid {
  @include grid-auto; // Default 250px
}`}
              output={[
                '.gallery {',
                '  display: grid;',
                '  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));',
                '  gap: 2rem;',
                '}',
                '.product-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }',
                '.card-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Fixed Columns Grid"
              code={`// Grid with specific number of columns
@mixin grid-columns($cols: 3, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($cols, 1fr);
  gap: $gap;
}

// Usage
.features {
  @include grid-columns(3, 2rem);
  
  @media (max-width: 768px) {
    @include grid-columns(2, 1.5rem);
  }
  
  @media (max-width: 480px) {
    @include grid-columns(1, 1rem);
  }
}`}
              output={[
                '.features {',
                '  display: grid;',
                '  grid-template-columns: repeat(3, 1fr);',
                '  gap: 2rem;',
                '}',
                '@media (max-width: 768px) {',
                '  .features { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }',
                '}',
                '@media (max-width: 480px) {',
                '  .features { grid-template-columns: repeat(1, 1fr); gap: 1rem; }',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Grid Areas"
              code={`// Grid with named areas
@mixin grid-areas($areas, $columns: 1fr, $rows: auto, $gap: 1rem) {
  display: grid;
  grid-template-areas: $areas;
  grid-template-columns: $columns;
  grid-template-rows: $rows;
  gap: $gap;
}

// Usage
.layout {
  @include grid-areas(
    "header header" 
    "sidebar main" 
    "footer footer",
    250px 1fr,
    auto 1fr auto,
    1.5rem
  );
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
              output={[
                '.layout {',
                '  display: grid;',
                '  grid-template-areas: "header header" "sidebar main" "footer footer";',
                '  grid-template-columns: 250px 1fr;',
                '  grid-template-rows: auto 1fr auto;',
                '  gap: 1.5rem;',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Grid3x3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Auto-Fit vs Auto-Fill</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <strong>auto-fit</strong>: Expands columns to fill space. <strong>auto-fill</strong>: Creates empty columns.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Centering Mixins */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Centering Mixins"
            description="Perfect centering techniques"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Absolute Center"
              code={`// Center with absolute positioning
@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Usage
.modal-overlay {
  position: relative;
  
  .modal-content {
    @include absolute-center;
    width: 500px;
  }
}

.tooltip {
  position: relative;
  
  &::after {
    @include absolute-center;
    content: attr(data-tooltip);
  }
}`}
              output={[
                '.modal-content {',
                '  position: absolute;',
                '  top: 50%;',
                '  left: 50%;',
                '  transform: translate(-50%, -50%);',
                '  width: 500px;',
                '}',
                '.tooltip::after { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); ... }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Grid Center"
              code={`// Center using CSS Grid
@mixin grid-center {
  display: grid;
  place-items: center;
}

// Usage
.hero {
  @include grid-center;
  min-height: 100vh;
}

.card {
  @include grid-center;
  height: 300px;
}`}
              output={[
                '.hero {',
                '  display: grid;',
                '  place-items: center;',
                '  min-height: 100vh;',
                '}',
                '.card { display: grid; place-items: center; height: 300px; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Margin Auto Center"
              code={`// Horizontal centering with margin auto
@mixin center-x($width: auto) {
  width: $width;
  margin-left: auto;
  margin-right: auto;
}

// Usage
.container {
  @include center-x(1200px);
}

.content {
  @include center-x(800px);
}

.button {
  @include center-x(200px);
  display: block;
}`}
              output={[
                '.container { width: 1200px; margin-left: auto; margin-right: auto; }',
                '.content { width: 800px; margin-left: auto; margin-right: auto; }',
                '.button { width: 200px; margin-left: auto; margin-right: auto; display: block; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Container Mixins */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Columns className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Container Mixins"
            description="Max-width wrappers and padding"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Responsive Container"
              code={`// Container with max-width and padding
@mixin container($max-width: 1200px, $padding: 1rem) {
  width: 100%;
  max-width: $max-width;
  margin-left: auto;
  margin-right: auto;
  padding-left: $padding;
  padding-right: $padding;
}

// Usage
.container {
  @include container;
}

.container-sm {
  @include container(800px, 1.5rem);
}

.container-lg {
  @include container(1400px, 2rem);
}`}
              output={[
                '.container {',
                '  width: 100%;',
                '  max-width: 1200px;',
                '  margin-left: auto;',
                '  margin-right: auto;',
                '  padding-left: 1rem;',
                '  padding-right: 1rem;',
                '}',
                '.container-sm { max-width: 800px; padding-left: 1.5rem; padding-right: 1.5rem; }',
                '.container-lg { max-width: 1400px; padding-left: 2rem; padding-right: 2rem; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Full Width Breakout"
              code={`// Full-width section that breaks out of container
@mixin full-width-breakout {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

// Usage
.article {
  @include container(800px);
  
  .full-width-image {
    @include full-width-breakout;
  }
}`}
              output={[
                '.article { width: 100%; max-width: 800px; margin-left: auto; margin-right: auto; ... }',
                '.full-width-image {',
                '  width: 100vw;',
                '  margin-left: calc(50% - 50vw);',
                '  margin-right: calc(50% - 50vw);',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Complete Layout System */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Complete Layout Library"
            description="All layout mixins together"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="layout.scss"
              code={`// ===== Flexbox =====
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// ===== Grid =====
@mixin grid-auto($min-width: 250px, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, 1fr));
  gap: $gap;
}

@mixin grid-columns($cols: 3, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($cols, 1fr);
  gap: $gap;
}

// ===== Centering =====
@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@mixin grid-center {
  display: grid;
  place-items: center;
}

// ===== Container =====
@mixin container($max-width: 1200px, $padding: 1rem) {
  width: 100%;
  max-width: $max-width;
  margin-left: auto;
  margin-right: auto;
  padding-left: $padding;
  padding-right: $padding;
}`}
              output={[
                '// Complete layout mixin library!',
                '// Import: @use "layout" as *;',
                '',
                '.header { @include flex-between; }',
                '.grid { @include grid-auto(300px, 2rem); }',
                '.modal { @include flex-center; }',
                '.container { @include container; }'
              ]}
              language="scss"
              colorTheme="pink"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Layout Mixins in Action"
          description="Complete layout system demo"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <header class="header">
    <div class="logo">Logo</div>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  
  <main class="main">
    <section class="hero">
      <h1>Layout Mixins</h1>
      <p>Powerful SCSS utilities for modern layouts</p>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <h3>Flexbox</h3>
        <p>Easy alignment</p>
      </div>
      <div class="feature-card">
        <h3>Grid</h3>
        <p>Responsive grids</p>
      </div>
      <div class="feature-card">
        <h3>Center</h3>
        <p>Perfect centering</p>
      </div>
    </section>
  </main>
</div>`}
          css={`// SCSS Layout Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@mixin grid-auto($min-width: 250px, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, 1fr));
  gap: $gap;
}

@mixin container($max-width: 1200px, $padding: 1rem) {
  width: 100%;
  max-width: $max-width;
  margin-left: auto;
  margin-right: auto;
  padding-left: $padding;
  padding-right: $padding;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  @include container(1000px, 2rem);
}

.header {
  @include flex-between;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #667eea;
  }
  
  .nav {
    @include flex-center;
    gap: 2rem;
    
    a {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
      
      &:hover {
        color: #667eea;
      }
    }
  }
}

.hero {
  @include flex-center;
  flex-direction: column;
  background: white;
  padding: 4rem 2rem;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  h1 {
    font-size: 3rem;
    color: #667eea;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.25rem;
    color: #64748b;
  }
}

.features {
  @include grid-auto(280px, 1.5rem);
}

.feature-card {
  @include flex-center;
  flex-direction: column;
  background: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
    color: #667eea;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
  }
}

@media (prefers-color-scheme: dark) {
  .header,
  .hero,
  .feature-card {
    background: #1e293b;
    color: white;
  }
  
  .logo,
  h1,
  h3 {
    color: #8b9aef !important;
  }
  
  .nav a,
  p {
    color: #94a3b8 !important;
  }
}`}
          title="Layout System Demo"
          description="Flexbox, Grid, and Container mixins"
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
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Flexbox Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                flex-center, flex-between for alignment
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Grid Mixins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                grid-auto, grid-columns for layouts
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Centering</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                absolute-center, grid-center, margin auto
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Container</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Responsive max-width wrappers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
