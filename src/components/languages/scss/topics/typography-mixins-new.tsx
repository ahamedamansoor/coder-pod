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
  Type, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  FileText,
  Heading,
  AlignLeft,
  Maximize
} from 'lucide-react';

interface TypographyMixinsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function TypographyMixinsNew({ onOpenWebPlayground }: TypographyMixinsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Type}
        category="Sass/SCSS · Mixins Library"
        title="Typography Mixins"
        description="Font-face loading, fluid typography, responsive text scaling, and typography utilities."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Typography Mixins"
            description="Professional typography utilities"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Typography mixins help you manage <strong>custom fonts</strong>, create <strong>fluid responsive text</strong>, and apply consistent <strong>text styles</strong> across your project!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Font Face</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Load custom fonts</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Maximize className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Fluid Type</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Responsive scaling</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Heading className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Headings</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Consistent styles</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <AlignLeft className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300">Body Text</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Readable content</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Font Face Mixin */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Font-Face Mixin"
            description="Load custom web fonts"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Font-Face"
              code={`@mixin font-face($name, $path, $weight: normal, $style: normal) {
  @font-face {
    font-family: $name;
    src: url('#{$path}.woff2') format('woff2'),
         url('#{$path}.woff') format('woff');
    font-weight: $weight;
    font-style: $style;
    font-display: swap;
  }
}

// Usage
@include font-face('Inter', '/fonts/inter-regular', 400, normal);
@include font-face('Inter', '/fonts/inter-bold', 700, normal);
@include font-face('Inter', '/fonts/inter-italic', 400, italic);`}
              output={[
                '@font-face {',
                '  font-family: "Inter";',
                '  src: url("/fonts/inter-regular.woff2") format("woff2"),',
                '       url("/fonts/inter-regular.woff") format("woff");',
                '  font-weight: 400;',
                '  font-style: normal;',
                '  font-display: swap;',
                '}',
                '@font-face { font-family: "Inter"; ... font-weight: 700; }',
                '@font-face { font-family: "Inter"; ... font-style: italic; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Complete Font Loading"
              code={`@mixin font-face($name, $path, $weight: normal, $style: normal) {
  @font-face {
    font-family: $name;
    src: url('#{$path}.woff2') format('woff2'),
         url('#{$path}.woff') format('woff');
    font-weight: $weight;
    font-style: $style;
    font-display: swap;
  }
}

// Load font family with all variants
@include font-face('Montserrat', '/fonts/montserrat-regular', 400);
@include font-face('Montserrat', '/fonts/montserrat-medium', 500);
@include font-face('Montserrat', '/fonts/montserrat-semibold', 600);
@include font-face('Montserrat', '/fonts/montserrat-bold', 700);

body {
  font-family: 'Montserrat', sans-serif;
}`}
              output={[
                '// All font variants loaded',
                '@font-face { font-family: "Montserrat"; font-weight: 400; }',
                '@font-face { font-family: "Montserrat"; font-weight: 500; }',
                '@font-face { font-family: "Montserrat"; font-weight: 600; }',
                '@font-face { font-family: "Montserrat"; font-weight: 700; }',
                'body { font-family: "Montserrat", sans-serif; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Font Display</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">font-display: swap</code> shows fallback text immediately while loading!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Fluid Typography */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Maximize className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Fluid Typography"
            description="Responsive font scaling"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Fluid Font Size Mixin"
              code={`// Fluid typography with clamp()
@mixin fluid-type($min-size, $max-size, $min-vw: 320px, $max-vw: 1200px) {
  font-size: clamp(
    $min-size,
    calc(#{$min-size} + (#{strip-unit($max-size)} - #{strip-unit($min-size)}) * ((100vw - #{$min-vw}) / (#{strip-unit($max-vw)} - #{strip-unit($min-vw)}))),
    $max-size
  );
}

// Helper function to strip units
@function strip-unit($number) {
  @return $number / ($number * 0 + 1);
}

// Usage
h1 {
  @include fluid-type(2rem, 4rem);
}

p {
  @include fluid-type(1rem, 1.25rem);
}`}
              output={[
                'h1 { font-size: clamp(2rem, calc(...), 4rem); }',
                'p { font-size: clamp(1rem, calc(...), 1.25rem); }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Simple Fluid Type"
              code={`// Simpler fluid typography
@mixin fluid-type($min, $max) {
  font-size: clamp($min, calc($min + 1vw), $max);
}

// Usage
.title {
  @include fluid-type(1.5rem, 3rem);
}

.subtitle {
  @include fluid-type(1.125rem, 1.5rem);
}

.body {
  @include fluid-type(1rem, 1.125rem);
}`}
              output={[
                '.title { font-size: clamp(1.5rem, calc(1.5rem + 1vw), 3rem); }',
                '.subtitle { font-size: clamp(1.125rem, calc(1.125rem + 1vw), 1.5rem); }',
                '.body { font-size: clamp(1rem, calc(1rem + 1vw), 1.125rem); }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Type Scale System"
              code={`@mixin fluid-type($min, $max) {
  font-size: clamp($min, calc($min + 1vw), $max);
}

// Type scale
.text {
  &-xs {
    @include fluid-type(0.75rem, 0.875rem);
  }
  
  &-sm {
    @include fluid-type(0.875rem, 1rem);
  }
  
  &-base {
    @include fluid-type(1rem, 1.125rem);
  }
  
  &-lg {
    @include fluid-type(1.125rem, 1.25rem);
  }
  
  &-xl {
    @include fluid-type(1.25rem, 1.5rem);
  }
  
  &-2xl {
    @include fluid-type(1.5rem, 2rem);
  }
  
  &-3xl {
    @include fluid-type(2rem, 3rem);
  }
}`}
              output={[
                '.text-xs { font-size: clamp(0.75rem, ..., 0.875rem); }',
                '.text-sm { font-size: clamp(0.875rem, ..., 1rem); }',
                '.text-base { font-size: clamp(1rem, ..., 1.125rem); }',
                '.text-lg { font-size: clamp(1.125rem, ..., 1.25rem); }',
                '.text-xl { font-size: clamp(1.25rem, ..., 1.5rem); }',
                '.text-2xl { font-size: clamp(1.5rem, ..., 2rem); }',
                '.text-3xl { font-size: clamp(2rem, ..., 3rem); }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Heading Mixins */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Heading className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Heading Mixins"
            description="Consistent heading styles"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Heading Style Mixin"
              code={`@mixin heading-style($size, $weight: 700, $line-height: 1.2) {
  font-size: $size;
  font-weight: $weight;
  line-height: $line-height;
  margin-bottom: 0.5em;
  color: #1a202c;
  
  @media (prefers-color-scheme: dark) {
    color: #f7fafc;
  }
}

// Usage
h1 {
  @include heading-style(3rem);
}

h2 {
  @include heading-style(2.25rem, 600);
}

h3 {
  @include heading-style(1.875rem, 600, 1.3);
}`}
              output={[
                'h1 { font-size: 3rem; font-weight: 700; line-height: 1.2; margin-bottom: 0.5em; color: #1a202c; }',
                '@media (prefers-color-scheme: dark) { h1 { color: #f7fafc; } }',
                'h2 { font-size: 2.25rem; font-weight: 600; ... }',
                'h3 { font-size: 1.875rem; font-weight: 600; line-height: 1.3; ... }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Responsive Headings"
              code={`@mixin heading-responsive($mobile, $desktop, $weight: 700) {
  font-size: $mobile;
  font-weight: $weight;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: $desktop;
  }
}

h1 {
  @include heading-responsive(2rem, 4rem);
}

h2 {
  @include heading-responsive(1.5rem, 3rem, 600);
}

h3 {
  @include heading-responsive(1.25rem, 2rem, 600);
}`}
              output={[
                'h1 { font-size: 2rem; font-weight: 700; line-height: 1.2; }',
                '@media (min-width: 768px) { h1 { font-size: 4rem; } }',
                'h2 { font-size: 1.5rem; font-weight: 600; ... }',
                '@media (min-width: 768px) { h2 { font-size: 3rem; } }',
                'h3 { font-size: 1.25rem; font-weight: 600; ... }',
                '@media (min-width: 768px) { h3 { font-size: 2rem; } }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Body Text Mixins */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlignLeft className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Body Text Mixins"
            description="Readable content styles"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Body Text Mixin"
              code={`@mixin body-text($size: 1rem, $line-height: 1.6) {
  font-size: $size;
  line-height: $line-height;
  color: #4a5568;
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e0;
  }
}

// Usage
p {
  @include body-text;
  margin-bottom: 1em;
}

.lead {
  @include body-text(1.25rem, 1.8);
  font-weight: 300;
}

.small {
  @include body-text(0.875rem, 1.5);
}`}
              output={[
                'p { font-size: 1rem; line-height: 1.6; color: #4a5568; margin-bottom: 1em; }',
                '@media (prefers-color-scheme: dark) { p { color: #cbd5e0; } }',
                '.lead { font-size: 1.25rem; line-height: 1.8; ... font-weight: 300; }',
                '.small { font-size: 0.875rem; line-height: 1.5; ... }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Measure (Line Length)"
              code={`// Optimal line length for readability
@mixin measure($chars: 66) {
  max-width: #{$chars}ch;
}

// Usage
.article {
  @include measure(75); // 75 characters max
}

.sidebar {
  @include measure(45); // Narrower
}

.wide-text {
  @include measure(90); // Wider
}`}
              output={[
                '.article { max-width: 75ch; }',
                '.sidebar { max-width: 45ch; }',
                '.wide-text { max-width: 90ch; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Link Styles"
              code={`@mixin link-style($color: #3182ce, $hover-color: #2c5282) {
  color: $color;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.2s;
  
  &:hover {
    color: $hover-color;
  }
  
  &:focus {
    outline: 2px solid $color;
    outline-offset: 2px;
  }
}

a {
  @include link-style;
}

.link-subtle {
  @include link-style(#718096, #4a5568);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}`}
              output={[
                'a {',
                '  color: #3182ce;',
                '  text-decoration: underline;',
                '  text-decoration-thickness: 1px;',
                '  text-underline-offset: 2px;',
                '  transition: color 0.2s;',
                '}',
                'a:hover { color: #2c5282; }',
                'a:focus { outline: 2px solid #3182ce; outline-offset: 2px; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Readability Tip</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Optimal line length is <strong>45-75 characters</strong> (use <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">ch</code> unit).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Complete Typography System */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Complete Typography Library"
            description="All typography mixins together"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="typography.scss"
              code={`// ===== Font Face =====
@mixin font-face($name, $path, $weight: normal, $style: normal) {
  @font-face {
    font-family: $name;
    src: url('#{$path}.woff2') format('woff2'),
         url('#{$path}.woff') format('woff');
    font-weight: $weight;
    font-style: $style;
    font-display: swap;
  }
}

// ===== Fluid Type =====
@mixin fluid-type($min, $max) {
  font-size: clamp($min, calc($min + 1vw), $max);
}

// ===== Headings =====
@mixin heading-style($size, $weight: 700, $line-height: 1.2) {
  font-size: $size;
  font-weight: $weight;
  line-height: $line-height;
  margin-bottom: 0.5em;
}

// ===== Body Text =====
@mixin body-text($size: 1rem, $line-height: 1.6) {
  font-size: $size;
  line-height: $line-height;
  color: #4a5568;
}

// ===== Measure =====
@mixin measure($chars: 66) {
  max-width: #{$chars}ch;
}

// ===== Links =====
@mixin link-style($color: #3182ce, $hover-color: #2c5282) {
  color: $color;
  text-decoration: underline;
  transition: color 0.2s;
  
  &:hover {
    color: $hover-color;
  }
}`}
              output={[
                '// Complete typography mixin library!',
                '// Import: @use "typography" as *;',
                '',
                '@include font-face("Inter", "/fonts/inter", 400);',
                'h1 { @include heading-style(3rem); }',
                'p { @include body-text; @include measure; }',
                'a { @include link-style; }'
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
          title="Typography System Demo"
          description="Complete type system in action"
          size="lg"
        />

        <FrontendCodePreview
          html={`<article class="article">
  <h1>Typography Mixins</h1>
  <p class="lead">Master typography with powerful SCSS mixins for fluid responsive text, consistent headings, and readable content.</p>
  
  <h2>Fluid Typography</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  
  <h3>Responsive Scaling</h3>
  <p>Text scales smoothly between mobile and desktop using <a href="#">clamp() functions</a>. This ensures perfect readability at any screen size.</p>
  
  <p class="small">Small text for captions and metadata.</p>
</article>`}
          css={`// SCSS Typography Mixins
@mixin fluid-type($min, $max) {
  font-size: clamp($min, calc($min + 1vw), $max);
}

@mixin heading-style($min, $max, $weight: 700) {
  @include fluid-type($min, $max);
  font-weight: $weight;
  line-height: 1.2;
  margin-bottom: 0.75em;
  color: #1a202c;
}

@mixin body-text($size: 1rem, $line-height: 1.6) {
  font-size: $size;
  line-height: $line-height;
  color: #4a5568;
}

@mixin measure($chars: 66) {
  max-width: #{$chars}ch;
}

@mixin link-style($color: #3182ce) {
  color: $color;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s;
  
  &:hover {
    color: darken($color, 15%);
  }
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
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.article {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  @include measure(75);
  
  h1 {
    @include heading-style(2rem, 4rem);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  h2 {
    @include heading-style(1.5rem, 2.5rem, 600);
    margin-top: 2em;
  }
  
  h3 {
    @include heading-style(1.25rem, 1.875rem, 600);
    margin-top: 1.5em;
  }
  
  p {
    @include body-text;
    margin-bottom: 1em;
  }
  
  .lead {
    @include fluid-type(1.125rem, 1.375rem);
    font-weight: 300;
    line-height: 1.8;
    color: #2d3748;
  }
  
  .small {
    @include body-text(0.875rem, 1.5);
    font-style: italic;
  }
  
  a {
    @include link-style(#667eea);
  }
}

@media (prefers-color-scheme: dark) {
  .article {
    background: #1e293b;
    
    h1 {
      -webkit-text-fill-color: unset;
      background: unset;
      color: #8b9aef;
    }
    
    h2, h3 {
      color: #e2e8f0;
    }
    
    p, .lead, .small {
      color: #cbd5e1;
    }
    
    a {
      color: #8b9aef;
      
      &:hover {
        color: #a5b4fc;
      }
    }
  }
}`}
          title="Typography System"
          description="Fluid type, headings, and body text"
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Font-Face</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load custom fonts with font-display: swap
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Fluid Type</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Responsive scaling with clamp()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Headings</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consistent heading styles
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Measure</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Optimal line length (45-75ch)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
