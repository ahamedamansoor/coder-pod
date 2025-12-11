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
  Smartphone, 
  Tablet,
  Monitor,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Layers,
  Zap,
  Layout
} from 'lucide-react';

interface SassResponsiveMixinsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassResponsiveMixinsNew({ onOpenWebPlayground }: SassResponsiveMixinsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Smartphone}
        category="Sass/SCSS · Advanced Features"
        title="Responsive Mixins"
        description="Build powerful media query mixins for responsive design with breakpoint management systems."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Smartphone className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Responsive Mixins"
            description="Manage breakpoints and media queries efficiently"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Responsive mixins simplify media query management by providing <strong>reusable breakpoint logic</strong>. Instead of repeating media queries, create mixins that handle responsive behavior consistently across your entire project!
          </p>

          <CodeSnippetWithOutput
            title="Basic Responsive Mixin"
            code={`@mixin respond-to($breakpoint) {
  @if $breakpoint == 'mobile' {
    @media (max-width: 767px) {
      @content;
    }
  }
  @else if $breakpoint == 'tablet' {
    @media (min-width: 768px) and (max-width: 1023px) {
      @content;
    }
  }
  @else if $breakpoint == 'desktop' {
    @media (min-width: 1024px) {
      @content;
    }
  }
}

.container {
  padding: 2rem;
  
  @include respond-to('mobile') {
    padding: 1rem;
  }
  
  @include respond-to('desktop') {
    padding: 3rem;
  }
}`}
            output={[
              '.container { padding: 2rem; }',
              '@media (max-width: 767px) {',
              '  .container { padding: 1rem; }',
              '}',
              '@media (min-width: 1024px) {',
              '  .container { padding: 3rem; }',
              '}'
            ]}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Smartphone className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">@content Directive</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              The <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@content</code> directive passes styles to the mixin!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Map-Based Breakpoints */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Map-Based Breakpoint System"
            description="Centralized breakpoint management"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Breakpoint Map & Mixin"
              code={`$breakpoints: (
  'xs': 320px,
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
  'xxl': 1536px
);

@mixin breakpoint($size, $type: 'min') {
  $breakpoint: map-get($breakpoints, $size);
  
  @if $type == 'min' {
    @media (min-width: $breakpoint) {
      @content;
    }
  }
  @else if $type == 'max' {
    @media (max-width: $breakpoint - 1px) {
      @content;
    }
  }
}

.hero {
  font-size: 24px;
  
  @include breakpoint('md') {
    font-size: 32px;
  }
  
  @include breakpoint('lg') {
    font-size: 48px;
  }
}`}
              output={[
                '.hero { font-size: 24px; }',
                '@media (min-width: 768px) {',
                '  .hero { font-size: 32px; }',
                '}',
                '@media (min-width: 1024px) {',
                '  .hero { font-size: 48px; }',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Min/Max Width Mixins */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Min/Max Width Helpers"
            description="Mobile-first and desktop-first approaches"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Mobile-First (min-width)"
              code={`@mixin min-screen($size) {
  @media (min-width: $size) {
    @content;
  }
}

.button {
  padding: 0.5rem 1rem;
  font-size: 14px;
  
  @include min-screen(768px) {
    padding: 0.75rem 1.5rem;
    font-size: 16px;
  }
  
  @include min-screen(1024px) {
    padding: 1rem 2rem;
    font-size: 18px;
  }
}`}
              output={[
                '.button { padding: 0.5rem 1rem; font-size: 14px; }',
                '@media (min-width: 768px) {',
                '  .button { padding: 0.75rem 1.5rem; font-size: 16px; }',
                '}',
                '@media (min-width: 1024px) {',
                '  .button { padding: 1rem 2rem; font-size: 18px; }',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Desktop-First (max-width)"
              code={`@mixin max-screen($size) {
  @media (max-width: $size - 1px) {
    @content;
  }
}

.sidebar {
  width: 300px;
  
  @include max-screen(1024px) {
    width: 250px;
  }
  
  @include max-screen(768px) {
    width: 100%;
  }
}`}
              output={[
                '.sidebar { width: 300px; }',
                '@media (max-width: 1023px) {',
                '  .sidebar { width: 250px; }',
                '}',
                '@media (max-width: 767px) {',
                '  .sidebar { width: 100%; }',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Between Breakpoints */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Tablet className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Between Breakpoints"
            description="Target specific screen ranges"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Between Mixin"
              code={`@mixin between($min, $max) {
  @media (min-width: $min) and (max-width: $max - 1px) {
    @content;
  }
}

.card {
  padding: 1rem;
  
  // Only for tablets (768px - 1023px)
  @include between(768px, 1024px) {
    padding: 1.5rem;
    display: flex;
  }
  
  // Only for large screens
  @include between(1024px, 1920px) {
    padding: 2rem;
    max-width: 800px;
  }
}`}
              output={[
                '.card { padding: 1rem; }',
                '@media (min-width: 768px) and (max-width: 1023px) {',
                '  .card { padding: 1.5rem; display: flex; }',
                '}',
                '@media (min-width: 1024px) and (max-width: 1919px) {',
                '  .card { padding: 2rem; max-width: 800px; }',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Tablet className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Tablet-Specific Styles!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Between mixins are perfect for targeting specific device ranges like tablets.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Container Queries Mixin */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Monitor className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Advanced Responsive Utilities"
            description="Orientation, retina, and more"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Orientation Mixin"
              code={`@mixin landscape {
  @media (orientation: landscape) {
    @content;
  }
}

@mixin portrait {
  @media (orientation: portrait) {
    @content;
  }
}

.video-player {
  aspect-ratio: 16/9;
  
  @include portrait {
    aspect-ratio: 9/16;
  }
  
  @include landscape {
    width: 100%;
  }
}`}
              output={[
                '.video-player { aspect-ratio: 16/9; }',
                '@media (orientation: portrait) {',
                '  .video-player { aspect-ratio: 9/16; }',
                '}',
                '@media (orientation: landscape) {',
                '  .video-player { width: 100%; }',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Retina Display Mixin"
              code={`@mixin retina {
  @media (-webkit-min-device-pixel-ratio: 2),
         (min-resolution: 192dpi) {
    @content;
  }
}

.logo {
  background-image: url('logo.png');
  
  @include retina {
    background-image: url('logo@2x.png');
    background-size: contain;
  }
}`}
              output={[
                '.logo { background-image: url("logo.png"); }',
                '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {',
                '  .logo {',
                '    background-image: url("logo@2x.png");',
                '    background-size: contain;',
                '  }',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Responsive System in Action"
          description="Complete responsive layout with mixins"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <header class="header">
    <h1>Responsive Design</h1>
    <p class="subtitle">Resize to see changes</p>
  </header>
  
  <div class="grid">
    <div class="card">
      <h3>Card 1</h3>
      <p>Mobile: Stack vertically</p>
      <p>Tablet: 2 columns</p>
      <p>Desktop: 3 columns</p>
    </div>
    <div class="card">
      <h3>Card 2</h3>
      <p>Responsive padding & font sizes</p>
    </div>
    <div class="card">
      <h3>Card 3</h3>
      <p>Built with SCSS mixins!</p>
    </div>
  </div>
</div>`}
          css={`// Responsive mixin system

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
  padding: 1rem;
}

// Container with responsive padding
.container {
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3rem;
  }
}

// Header with responsive typography
.header {
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 24px;
    color: white;
    margin-bottom: 0.5rem;
    
    @media (min-width: 768px) {
      font-size: 32px;
    }
    
    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
  
  .subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
}

// Responsive grid
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  
  // Tablet: 2 columns
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  // Desktop: 3 columns
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

// Responsive cards
.card {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 1rem;
    color: #667eea;
    
    @media (min-width: 768px) {
      font-size: 20px;
    }
    
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
  
  p {
    font-size: 13px;
    line-height: 1.6;
    color: #64748b;
    margin-bottom: 0.5rem;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
    
    @media (min-width: 768px) {
      font-size: 14px;
    }
    
    @media (min-width: 1024px) {
      font-size: 15px;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}`}
          title="Responsive Layout with Mixins"
          description="Mobile, tablet, and desktop breakpoints"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                <Smartphone className="w-5 h-5" /> @content
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Passes styles to mixins
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Tablet className="w-5 h-5" /> Breakpoint Maps
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Centralized management
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <Monitor className="w-5 h-5" /> Mobile-First
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use min-width queries
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" /> DRY Principle
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reusable breakpoint logic
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
