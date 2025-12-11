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
  Code2, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  AlertTriangle,
  Info,
  Shield,
  Zap
} from 'lucide-react';

interface SassCssCompatibilityNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCssCompatibilityNew({ onOpenWebPlayground }: SassCssCompatibilityNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Shield}
        category="Sass/SCSS · Advanced Features"
        title="CSS Compatibility"
        description="Write CSS-compatible Sass code and preserve modern CSS functions like calc(), min(), max(), and clamp()."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Shield className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="CSS Compatibility"
            description="Modern CSS features in Sass"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Sass is designed to be <strong>CSS-compatible</strong>, meaning valid CSS is valid SCSS. However, Sass sometimes needs special handling for modern CSS functions like <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">calc()</code>, <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">min()</code>, <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">max()</code>, and <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">clamp()</code> to preserve them properly!
          </p>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">All CSS is Valid SCSS!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              You can paste any valid CSS into a .scss file and it will work perfectly.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* calc() Function */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="calc() Function"
            description="Preserving CSS calc()"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic calc() Usage"
              code={`// calc() is preserved as-is
.container {
  width: calc(100% - 80px);
  height: calc(100vh - 60px);
  padding: calc(1rem + 10px);
}

// Using variables in calc()
$sidebar-width: 250px;

.content {
  width: calc(100% - #{$sidebar-width});
  margin-left: calc(#{$sidebar-width} + 20px);
}`}
              output={[
                '.container {',
                '  width: calc(100% - 80px);',
                '  height: calc(100vh - 60px);',
                '  padding: calc(1rem + 10px);',
                '}',
                '',
                '.content {',
                '  width: calc(100% - 250px);',
                '  margin-left: calc(250px + 20px);',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Interpolation in calc()"
              code={`$base-size: 16px;
$multiplier: 2;

.element {
  // Use #{} for Sass variables
  font-size: calc(#{$base-size} * #{$multiplier});
  
  // Complex calc with variables
  width: calc((100% - #{$base-size * 2}) / 3);
  
  // Mixing units
  padding: calc(#{$base-size} + 1rem);
}`}
              output={[
                '.element {',
                '  font-size: calc(16px * 2);',
                '  width: calc((100% - 32px) / 3);',
                '  padding: calc(16px + 1rem);',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Interpolation Required!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">#&#123;$variable&#125;</code> to insert Sass variables into calc().
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* min() and max() */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="min() and max() Functions"
            description="CSS comparison functions"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="min() for Responsive Sizing"
              code={`// min() picks the smallest value
.container {
  // Never wider than 1200px, but 90% on small screens
  width: min(90%, 1200px);
  
  // Responsive font size
  font-size: min(5vw, 32px);
  
  // With Sass variables
  $max-width: 1000px;
  max-width: min(100%, #{$max-width});
}`}
              output={[
                '.container {',
                '  width: min(90%, 1200px);',
                '  font-size: min(5vw, 32px);',
                '  max-width: min(100%, 1000px);',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="max() for Minimum Sizes"
              code={`// max() picks the largest value
.button {
  // At least 44px for touch targets
  min-height: max(44px, 3em);
  
  // Responsive padding
  padding: max(1rem, 2vw);
  
  // With calculations
  width: max(200px, 30%);
}`}
              output={[
                '.button {',
                '  min-height: max(44px, 3em);',
                '  padding: max(1rem, 2vw);',
                '  width: max(200px, 30%);',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Combining min() and max()"
              code={`// Create responsive ranges
.text {
  // Between 16px and 24px
  font-size: min(max(16px, 2vw), 24px);
  
  // Better written with clamp()
  font-size: clamp(16px, 2vw, 24px);
}`}
              output={[
                '.text {',
                '  font-size: min(max(16px, 2vw), 24px);',
                '  font-size: clamp(16px, 2vw, 24px);',
                '}'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* clamp() Function */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="clamp() Function"
            description="Fluid responsive values"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Fluid Typography"
              code={`// clamp(min, preferred, max)
h1 {
  // Fluid font size between 24px and 48px
  font-size: clamp(24px, 5vw, 48px);
}

h2 {
  // Between 20px and 36px
  font-size: clamp(20px, 4vw, 36px);
}

p {
  // Body text: 14px to 18px
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.6;
}`}
              output={[
                'h1 { font-size: clamp(24px, 5vw, 48px); }',
                'h2 { font-size: clamp(20px, 4vw, 36px); }',
                'p {',
                '  font-size: clamp(14px, 2vw, 18px);',
                '  line-height: 1.6;',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Fluid Spacing"
              code={`// Responsive padding and margins
.container {
  // Padding: 16px to 48px
  padding: clamp(16px, 5vw, 48px);
  
  // Gap between items
  gap: clamp(12px, 3vw, 32px);
}

.section {
  // Vertical spacing
  margin-block: clamp(32px, 8vw, 96px);
}`}
              output={[
                '.container {',
                '  padding: clamp(16px, 5vw, 48px);',
                '  gap: clamp(12px, 3vw, 32px);',
                '}',
                '',
                '.section {',
                '  margin-block: clamp(32px, 8vw, 96px);',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="With Sass Variables"
              code={`$min-font: 16px;
$max-font: 24px;
$fluid-scale: 3vw;

.text {
  // Using variables in clamp()
  font-size: clamp(#{$min-font}, #{$fluid-scale}, #{$max-font});
  
  // Calculate preferred value
  $preferred: calc(#{$min-font} + 1vw);
  line-height: clamp(1.4, #{$preferred}, 1.8);
}`}
              output={[
                '.text {',
                '  font-size: clamp(16px, 3vw, 24px);',
                '  line-height: clamp(1.4, calc(16px + 1vw), 1.8);',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Custom Properties (CSS Variables) */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="CSS Custom Properties"
            description="CSS variables in Sass"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Mixing Sass and CSS Variables"
              code={`// Sass variables (compile-time)
$primary: #3b82f6;
$spacing: 16px;

// CSS custom properties (runtime)
:root {
  --primary-color: #{$primary};
  --base-spacing: #{$spacing};
  --double-spacing: calc(var(--base-spacing) * 2);
}

.element {
  color: var(--primary-color);
  padding: var(--base-spacing);
  margin: var(--double-spacing);
}`}
              output={[
                ':root {',
                '  --primary-color: #3b82f6;',
                '  --base-spacing: 16px;',
                '  --double-spacing: calc(var(--base-spacing) * 2);',
                '}',
                '',
                '.element {',
                '  color: var(--primary-color);',
                '  padding: var(--base-spacing);',
                '  margin: var(--double-spacing);',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Theming with CSS Variables"
              code={`:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s, color 0.3s;
}`}
              output={[
                ':root { --bg-color: white; --text-color: black; }',
                '[data-theme="dark"] { --bg-color: #1a1a1a; --text-color: #ffffff; }',
                'body {',
                '  background: var(--bg-color);',
                '  color: var(--text-color);',
                '  transition: background 0.3s, color 0.3s;',
                '}'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Modern CSS Features */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Preserving Modern CSS"
            description="Grid, flexbox, and more"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="CSS Grid"
              code={`// Modern CSS Grid is fully supported
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  
  // Named grid areas
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`}
              output={[
                '.grid {',
                '  display: grid;',
                '  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
                '  gap: clamp(1rem, 3vw, 2rem);',
                '  grid-template-areas: "header header" "sidebar main" "footer footer";',
                '}'
              ]}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Container Queries"
              code={`// Container queries (modern CSS)
.card {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card-content {
    display: flex;
    gap: 1rem;
  }
}`}
              output={[
                '.card {',
                '  container-type: inline-size;',
                '  container-name: card;',
                '}',
                '',
                '@container card (min-width: 400px) {',
                '  .card-content { display: flex; gap: 1rem; }',
                '}'
              ]}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="Modern Selectors"
              code={`// :is(), :where(), :has()
.nav {
  // :is() selector
  :is(a, button) {
    padding: 0.5rem 1rem;
  }
  
  // :has() selector
  &:has(> .active) {
    background: #f0f9ff;
  }
}

// :where() for low specificity
:where(h1, h2, h3) {
  margin-top: 0;
}`}
              output={[
                '.nav :is(a, button) { padding: 0.5rem 1rem; }',
                '.nav:has(> .active) { background: #f0f9ff; }',
                ':where(h1, h2, h3) { margin-top: 0; }'
              ]}
              language="scss"
              colorTheme="cyan"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Modern CSS in Action"
          description="Fluid, responsive design with modern CSS"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <header class="header">
    <h1>Modern CSS</h1>
    <p>Using clamp(), min(), max(), and calc()</p>
  </header>
  
  <div class="grid">
    <div class="card">
      <h3>Fluid Typography</h3>
      <p>Text scales smoothly with viewport size using clamp()</p>
    </div>
    
    <div class="card">
      <h3>Responsive Spacing</h3>
      <p>Padding and margins adapt automatically</p>
    </div>
    
    <div class="card">
      <h3>CSS Compatibility</h3>
      <p>All modern CSS works perfectly in Sass!</p>
    </div>
  </div>
</div>`}
          css={`// SCSS with Modern CSS Functions
// Variables for colors
$primary: #667eea;
$secondary: #764ba2;
$card-bg: white;
$card-bg-dark: #1e293b;
$text-color: #64748b;
$text-color-dark: #94a3b8;

// Variables for spacing
$spacing-base: 2rem;
$border-radius: 16px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, $primary 0%, $secondary 100%);
  min-height: 100vh;
  padding: $spacing-base;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
}

.header {
  text-align: center;
  margin-bottom: calc($spacing-base * 1.5);
  
  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  p {
    font-size: clamp(0.875rem, 2vw, 1.25rem);
    color: rgba(255, 255, 255, 0.9);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-base;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: calc($spacing-base * 0.75);
  }
}

.card {
  background: $card-bg;
  padding: $spacing-base;
  border-radius: $border-radius;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin-bottom: 1rem;
    color: $primary;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: $text-color;
  }
  
  @media (prefers-color-scheme: dark) {
    background: $card-bg-dark;
    color: white;
    
    h3 {
      color: lighten($primary, 10%);
    }
    
    p {
      color: $text-color-dark;
    }
  }
}`}
          title="Fluid Design System"
          description="Fully responsive using modern CSS functions"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">calc()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use #{} to interpolate Sass variables
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">min() / max()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                CSS comparison functions preserved
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">clamp()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fluid responsive values (min, preferred, max)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">CSS Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Runtime theming with custom properties
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
