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
  Palette, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  Zap,
  Sun,
  Moon
} from 'lucide-react';

interface SassColorManipulationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassColorManipulationNew({ onOpenWebPlayground }: SassColorManipulationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Palette}
        category="Sass/SCSS · Colors"
        title="Color Manipulation"
        description="Transform colors with lighten(), darken(), saturate(), desaturate(), and adjust-hue() functions."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Color Manipulation"
            description="Transform and adjust colors dynamically"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            SCSS provides powerful functions to manipulate colors programmatically. You can <strong>lighten</strong>, <strong>darken</strong>, <strong>saturate</strong>, <strong>desaturate</strong>, and adjust the <strong>hue</strong> of any color to create dynamic color schemes!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Lightness</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">lighten() / darken()</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Saturation</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">saturate() / desaturate()</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* lighten() Function */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sun className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="lighten() Function"
            description="Make colors brighter"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic lighten() Usage"
              code={`$base-color: #3b82f6;

.button {
  background: $base-color;
  
  &:hover {
    // Lighten by 10%
    background: lighten($base-color, 10%);
  }
  
  &:active {
    // Lighten by 20%
    background: lighten($base-color, 20%);
  }
}`}
              output={[
                '.button { background: #3b82f6; }',
                '.button:hover { background: #6ca2f8; }',
                '.button:active { background: #9dc2fa; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Creating Light Variants"
              code={`$primary: #8b5cf6;

.card {
  background: lighten($primary, 40%);
  border: 1px solid lighten($primary, 30%);
  color: lighten($primary, 10%);
  
  &-header {
    background: lighten($primary, 35%);
  }
}`}
              output={[
                '.card {',
                '  background: #ddd0fd;',
                '  border: 1px solid #c4abfb;',
                '  color: #a483f8;',
                '}',
                '.card-header { background: #d1bffc; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Percentage Range</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use 0% to 100%. Higher values create lighter colors. lighten(color, 50%) makes it 50% lighter.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* darken() Function */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-indigo-50/60 dark:from-purple-950/10 dark:to-indigo-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Moon className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="darken() Function"
            description="Make colors darker"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic darken() Usage"
              code={`$primary: #10b981;

.alert {
  background: lighten($primary, 40%);
  border: 1px solid $primary;
  color: darken($primary, 20%);
  
  &-title {
    color: darken($primary, 30%);
    font-weight: bold;
  }
}`}
              output={[
                '.alert {',
                '  background: #a3eed0;',
                '  border: 1px solid #10b981;',
                '  color: #0a7352;',
                '}',
                '.alert-title { color: #06543d; font-weight: bold; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Hover & Active States"
              code={`$btn-color: #f59e0b;

.button {
  background: $btn-color;
  color: white;
  border: none;
  
  &:hover {
    background: darken($btn-color, 10%);
  }
  
  &:active {
    background: darken($btn-color, 20%);
  }
  
  &:disabled {
    background: lighten($btn-color, 20%);
  }
}`}
              output={[
                '.button { background: #f59e0b; color: white; border: none; }',
                '.button:hover { background: #c37808; }',
                '.button:active { background: #925a06; }',
                '.button:disabled { background: #f8c064; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* saturate() & desaturate() */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="saturate() & desaturate()"
            description="Adjust color vibrancy"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="saturate() - More Vibrant"
              code={`$base: #6b7280; // Gray color

.vibrant {
  // Make color more vibrant/saturated
  color: saturate($base, 50%);
  background: saturate($base, 20%);
  border: 1px solid saturate($base, 80%);
}`}
              output={[
                '.vibrant {',
                '  color: #3d4955;',
                '  background: #5f6975;',
                '  color: #0f1c2a;',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="desaturate() - Less Vibrant"
              code={`$bright-blue: #3b82f6;

.muted {
  // Make color less vibrant/more gray
  background: desaturate($bright-blue, 30%);
  color: desaturate($bright-blue, 50%);
  border: 1px solid desaturate($bright-blue, 70%);
}`}
              output={[
                '.muted {',
                '  background: #5c8cc9;',
                '  border: 1px solid #7a95a3;',
                '  color: #7c98b9;',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Creating Color Variants"
              code={`$primary: #ec4899;

.theme {
  &-vibrant {
    background: saturate($primary, 30%);
  }
  
  &-normal {
    background: $primary;
  }
  
  &-muted {
    background: desaturate($primary, 30%);
  }
  
  &-gray {
    background: desaturate($primary, 100%);
  }
}`}
              output={[
                '.theme-vibrant { background: #f3067f; }',
                '.theme-normal { background: #ec4899; }',
                '.theme-muted { background: #d566a8; }',
                '.theme-gray { background: #8b8b8b; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Saturation Tip</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              desaturate(color, 100%) removes all color, making it grayscale!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* adjust-hue() */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="adjust-hue() Function"
            description="Rotate color on the color wheel"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Hue Rotation"
              code={`$base-color: #3b82f6; // Blue

.colors {
  // Original
  &-original {
    background: $base-color;
  }
  
  // Rotate 60 degrees (more green)
  &-variant-1 {
    background: adjust-hue($base-color, 60deg);
  }
  
  // Rotate 120 degrees (green-cyan)
  &-variant-2 {
    background: adjust-hue($base-color, 120deg);
  }
  
  // Rotate 180 degrees (complement/opposite)
  &-complement {
    background: adjust-hue($base-color, 180deg);
  }
}`}
              output={[
                '.colors-original { background: #3b82f6; }',
                '.colors-variant-1 { background: #3bf679; }',
                '.colors-variant-2 { background: #3be7f6; }',
                '.colors-complement { background: #f6513b; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Creating Color Schemes"
              code={`$primary: #8b5cf6; // Purple

.palette {
  &-primary {
    background: $primary;
  }
  
  // Analogous colors (adjacent on wheel)
  &-analogous-1 {
    background: adjust-hue($primary, 30deg);
  }
  
  &-analogous-2 {
    background: adjust-hue($primary, -30deg);
  }
  
  // Triadic colors (120 degrees apart)
  &-triadic-1 {
    background: adjust-hue($primary, 120deg);
  }
  
  &-triadic-2 {
    background: adjust-hue($primary, 240deg);
  }
}`}
              output={[
                '.palette-primary { background: #8b5cf6; }',
                '.palette-analogous-1 { background: #cf5cf6; }',
                '.palette-analogous-2 { background: #5c82f6; }',
                '.palette-triadic-1 { background: #c7f65c; }',
                '.palette-triadic-2 { background: #f6915c; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Combining Functions */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Combining Color Functions"
            description="Chain multiple transformations"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Chaining Functions"
              code={`$base: #3b82f6;

.advanced {
  // Lighten and saturate
  &-bright {
    background: saturate(lighten($base, 20%), 30%);
  }
  
  // Darken and desaturate (muted dark)
  &-muted-dark {
    background: desaturate(darken($base, 20%), 40%);
  }
  
  // Rotate hue and lighten
  &-shifted {
    background: lighten(adjust-hue($base, 180deg), 10%);
  }
}`}
              output={[
                '.advanced-bright { background: #9dbfff; }',
                '.advanced-muted-dark { background: #5b6e8e; }',
                '.advanced-shifted { background: #ff6b5a; }'
              ]}
              language="scss"
              colorTheme="pink"
            />

            <CodeSnippetWithOutput
              title="Dynamic Theme Generation"
              code={`$brand-color: #10b981;

@mixin theme-variant($color) {
  background: $color;
  border: 2px solid darken($color, 15%);
  color: darken($color, 40%);
  
  &:hover {
    background: lighten($color, 5%);
    border-color: darken($color, 10%);
  }
}

.button-primary {
  @include theme-variant($brand-color);
}

.button-secondary {
  @include theme-variant(adjust-hue($brand-color, 180deg));
}`}
              output={[
                '.button-primary {',
                '  background: #10b981;',
                '  border: 2px solid #0a7352;',
                '  color: #06543d;',
                '}',
                '.button-primary:hover {',
                '  background: #1ed69c;',
                '  border-color: #0d8a61;',
                '}',
                '.button-secondary { background: #b91057; ... }'
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
          title="Color Manipulation Demo"
          description="Interactive color transformations"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <h1>Color Manipulation</h1>
  
  <div class="color-grid">
    <div class="color-box original">
      <span>Original</span>
      <code>#3b82f6</code>
    </div>
    
    <div class="color-box lighten">
      <span>Lighten 30%</span>
      <code>lighten()</code>
    </div>
    
    <div class="color-box darken">
      <span>Darken 20%</span>
      <code>darken()</code>
    </div>
    
    <div class="color-box saturate">
      <span>Saturate 50%</span>
      <code>saturate()</code>
    </div>
    
    <div class="color-box desaturate">
      <span>Desaturate 50%</span>
      <code>desaturate()</code>
    </div>
    
    <div class="color-box hue">
      <span>Hue +180°</span>
      <code>adjust-hue()</code>
    </div>
  </div>
</div>`}
          css={`// SCSS Color Manipulation
$base-color: #3b82f6;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 900px;
  width: 100%;
  
  h1 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.color-box {
  background: white;
  border-radius: 16px;
  padding: 3rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-8px);
  }
  
  span {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
    color: white;
    font-size: 1.1rem;
  }
  
  code {
    display: block;
    font-size: 0.875rem;
    color: #64748b;
    background: #f1f5f9;
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;
    z-index: 1;
  }
  
  &.original::before {
    background: $base-color;
  }
  
  &.lighten::before {
    background: lighten($base-color, 30%);
  }
  
  &.darken::before {
    background: darken($base-color, 20%);
  }
  
  &.saturate::before {
    background: saturate($base-color, 50%);
  }
  
  &.desaturate::before {
    background: desaturate($base-color, 50%);
  }
  
  &.hue::before {
    background: adjust-hue($base-color, 180deg);
  }
}

@media (prefers-color-scheme: dark) {
  .color-box {
    background: #1e293b;
    
    code {
      background: #334155;
      color: #cbd5e1;
    }
  }
}`}
          title="Color Manipulation Gallery"
          description="Visual demonstration of color functions"
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">lighten() / darken()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Adjust brightness (0-100%)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">saturate() / desaturate()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Adjust color vibrancy
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">adjust-hue()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Rotate color wheel (0-360deg)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Chain Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combine for complex transformations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
