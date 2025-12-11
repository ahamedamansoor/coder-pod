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
  Droplets,
  Blend
} from 'lucide-react';

interface SassColorMixingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassColorMixingNew({ onOpenWebPlayground }: SassColorMixingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Blend}
        category="Sass/SCSS · Colors"
        title="Color Mixing"
        description="Blend colors with mix(), create color palettes, and master color combination techniques."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blend className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Color Mixing"
            description="Blend and combine colors"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">mix()</code> function allows you to <strong>blend two colors</strong> together at any percentage. Perfect for creating <strong>harmonious color palettes</strong> and <strong>subtle variations</strong>!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">mix() Function</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Blend two colors</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Color Palettes</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Generate variations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic mix() Function */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="mix() Function"
            description="Blend two colors together"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Color Mixing"
              code={`// mix(color1, color2, weight)
// weight: 0% (all color2) to 100% (all color1)

$color1: #ff0000; // Red
$color2: #0000ff; // Blue

.mix-50 {
  // 50/50 blend (default)
  background: mix($color1, $color2);
}

.mix-75 {
  // 75% red, 25% blue
  background: mix($color1, $color2, 75%);
}

.mix-25 {
  // 25% red, 75% blue
  background: mix($color1, $color2, 25%);
}`}
              output={[
                '.mix-50 { background: #7f007f; }',
                '.mix-75 { background: #bf003f; }',
                '.mix-25 { background: #3f00bf; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Practical Example"
              code={`$primary: #3b82f6; // Blue
$white: #ffffff;
$black: #000000;

.button {
  background: $primary;
  
  // Lighter shade
  &-light {
    background: mix($white, $primary, 30%);
  }
  
  // Darker shade
  &-dark {
    background: mix($black, $primary, 30%);
  }
  
  // Muted version
  &-muted {
    background: mix(#888888, $primary, 40%);
  }
}`}
              output={[
                '.button { background: #3b82f6; }',
                '.button-light { background: #7aa7f8; }',
                '.button-dark { background: #29589d; }',
                '.button-muted { background: #5985c5; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Creating Tints & Shades"
              code={`$base-color: #10b981; // Green

// Tints (mixing with white)
.tint {
  &-10 { background: mix(white, $base-color, 10%); }
  &-25 { background: mix(white, $base-color, 25%); }
  &-50 { background: mix(white, $base-color, 50%); }
  &-75 { background: mix(white, $base-color, 75%); }
}

// Shades (mixing with black)
.shade {
  &-10 { background: mix(black, $base-color, 10%); }
  &-25 { background: mix(black, $base-color, 25%); }
  &-50 { background: mix(black, $base-color, 50%); }
}`}
              output={[
                '.tint-10 { background: #25be8d; }',
                '.tint-25 { background: #4bcba0; }',
                '.tint-50 { background: #87dcc0; }',
                '.tint-75 { background: #c3ede0; }',
                '.shade-10 { background: #0ea674; }',
                '.shade-25 { background: #0c7c58; }',
                '.shade-50 { background: #085c40; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Weight Parameter</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Weight of <strong>100%</strong> = all color1. Weight of <strong>0%</strong> = all color2. Default is <strong>50%</strong>.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Color Palette Generation */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Color Palette Generation"
            description="Create harmonious color schemes"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Generating Color Scales"
              code={`$primary: #3b82f6;
$white: #ffffff;
$black: #000000;

// Create a 9-step color scale
.color-scale {
  &-50  { background: mix($white, $primary, 95%); }
  &-100 { background: mix($white, $primary, 90%); }
  &-200 { background: mix($white, $primary, 75%); }
  &-300 { background: mix($white, $primary, 60%); }
  &-400 { background: mix($white, $primary, 40%); }
  &-500 { background: $primary; }
  &-600 { background: mix($black, $primary, 20%); }
  &-700 { background: mix($black, $primary, 40%); }
  &-800 { background: mix($black, $primary, 60%); }
  &-900 { background: mix($black, $primary, 80%); }
}`}
              output={[
                '.color-scale-50 { background: #f0f6fe; }',
                '.color-scale-100 { background: #e1effe; }',
                '.color-scale-200 { background: #aecff9; }',
                '.color-scale-300 { background: #7caef7; }',
                '.color-scale-400 { background: #5c9af6; }',
                '.color-scale-500 { background: #3b82f6; }',
                '.color-scale-600 { background: #2f68c4; }',
                '.color-scale-700 { background: #234e93; }',
                '.color-scale-800 { background: #173462; }',
                '.color-scale-900 { background: #0c1a31; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Analogous Color Scheme"
              code={`// Mix with neighboring colors on the color wheel
$base: #3b82f6;  // Blue
$warm: #f59e0b;  // Orange (warm)
$cool: #06b6d4;  // Cyan (cool)

.palette {
  &-base {
    background: $base;
  }
  
  // Warmer variations
  &-warm-1 {
    background: mix($warm, $base, 15%);
  }
  
  &-warm-2 {
    background: mix($warm, $base, 30%);
  }
  
  // Cooler variations
  &-cool-1 {
    background: mix($cool, $base, 15%);
  }
  
  &-cool-2 {
    background: mix($cool, $base, 30%);
  }
}`}
              output={[
                '.palette-base { background: #3b82f6; }',
                '.palette-warm-1 { background: #4f87f0; }',
                '.palette-warm-2 { background: #6d8ddf; }',
                '.palette-cool-1 { background: #358cf2; }',
                '.palette-cool-2 { background: #2f97e9; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Complementary Color Mixing"
              code={`$primary: #3b82f6;    // Blue
$complement: #f59e0b; // Orange (opposite on wheel)

.theme {
  // Pure colors
  &-primary {
    background: $primary;
  }
  
  &-complement {
    background: $complement;
  }
  
  // Mixed neutrals
  &-neutral-1 {
    background: mix($complement, $primary, 50%);
  }
  
  &-neutral-2 {
    background: mix($complement, $primary, 40%);
  }
  
  &-neutral-3 {
    background: mix($complement, $primary, 60%);
  }
}`}
              output={[
                '.theme-primary { background: #3b82f6; }',
                '.theme-complement { background: #f59e0b; }',
                '.theme-neutral-1 { background: #9b9080; }',
                '.theme-neutral-2 { background: #829493; }',
                '.theme-neutral-3 { background: #b48c6e; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Advanced Mixing Techniques */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blend className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Advanced Mixing Techniques"
            description="Creative color combinations"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Creating Muted Colors"
              code={`$vibrant-red: #ef4444;
$vibrant-blue: #3b82f6;
$vibrant-green: #10b981;

// Mix with gray to create muted versions
$gray: #6b7280;

.muted {
  &-red {
    background: mix($gray, $vibrant-red, 30%);
  }
  
  &-blue {
    background: mix($gray, $vibrant-blue, 30%);
  }
  
  &-green {
    background: mix($gray, $vibrant-green, 30%);
  }
}`}
              output={[
                '.muted-red { background: #bd595f; }',
                '.muted-blue { background: #5b7fb7; }',
                '.muted-green { background: #4b9c80; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Gradient Color Stops"
              code={`$start: #3b82f6;  // Blue
$end: #ec4899;    // Pink

// Create smooth gradient stops
.gradient {
  background: linear-gradient(
    135deg,
    $start 0%,
    mix($end, $start, 25%) 25%,
    mix($end, $start, 50%) 50%,
    mix($end, $start, 75%) 75%,
    $end 100%
  );
}`}
              output={[
                '.gradient {',
                '  background: linear-gradient(',
                '    135deg,',
                '    #3b82f6 0%,',
                '    #7e7ec6 25%,',
                '    #a87ba8 50%,',
                '    #d2788a 75%,',
                '    #ec4899 100%',
                '  );',
                '}'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Theme Color Variants"
              code={`$primary: #3b82f6;
$success: #10b981;
$warning: #f59e0b;
$danger: #ef4444;

// Subtle background versions
.bg {
  &-primary-subtle {
    background: mix(white, $primary, 90%);
    color: mix(black, $primary, 60%);
  }
  
  &-success-subtle {
    background: mix(white, $success, 90%);
    color: mix(black, $success, 60%);
  }
  
  &-warning-subtle {
    background: mix(white, $warning, 90%);
    color: mix(black, $warning, 60%);
  }
  
  &-danger-subtle {
    background: mix(white, $danger, 90%);
    color: mix(black, $danger, 60%);
  }
}`}
              output={[
                '.bg-primary-subtle { background: #e8f0fe; color: #173462; }',
                '.bg-success-subtle { background: #d1f4e8; color: #064a37; }',
                '.bg-warning-subtle { background: #fef3e2; color: #6b3e04; }',
                '.bg-danger-subtle { background: #fde8e8; color: #631b1b; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Mix with <strong>gray</strong> to create muted, professional colors. Mix with <strong>white</strong> for pastels!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Color Mixing Demo"
          description="Interactive color palette"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <h1>Color Mixing Gallery</h1>
  
  <div class="section">
    <h2>Tints (White Mix)</h2>
    <div class="palette">
      <div class="swatch tint-10">10%</div>
      <div class="swatch tint-25">25%</div>
      <div class="swatch tint-50">50%</div>
      <div class="swatch tint-75">75%</div>
    </div>
  </div>
  
  <div class="section">
    <h2>Pure Color</h2>
    <div class="palette">
      <div class="swatch base">Base</div>
    </div>
  </div>
  
  <div class="section">
    <h2>Shades (Black Mix)</h2>
    <div class="palette">
      <div class="swatch shade-10">10%</div>
      <div class="swatch shade-25">25%</div>
      <div class="swatch shade-50">50%</div>
      <div class="swatch shade-75">75%</div>
    </div>
  </div>
</div>`}
          css={`// SCSS Color Mixing
$base-color: #3b82f6;
$white: #ffffff;
$black: #000000;

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
}

.container {
  max-width: 900px;
  margin: 0 auto;
  
  h1 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}

.section {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  h2 {
    color: #1e293b;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}

.palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.swatch {
  height: 120px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
}

.tint-10 {
  background: mix($white, $base-color, 10%);
}

.tint-25 {
  background: mix($white, $base-color, 25%);
}

.tint-50 {
  background: mix($white, $base-color, 50%);
}

.tint-75 {
  background: mix($white, $base-color, 75%);
  color: #1e293b;
  text-shadow: none;
}

.base {
  background: $base-color;
}

.shade-10 {
  background: mix($black, $base-color, 10%);
}

.shade-25 {
  background: mix($black, $base-color, 25%);
}

.shade-50 {
  background: mix($black, $base-color, 50%);
}

.shade-75 {
  background: mix($black, $base-color, 75%);
}

@media (prefers-color-scheme: dark) {
  .section {
    background: #1e293b;
    
    h2 {
      color: #e2e8f0;
    }
  }
}`}
          title="Color Mixing Palette"
          description="Tints, base color, and shades"
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">mix() Function</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                mix(color1, color2, weight)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Tints & Shades</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mix with white/black for variations
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Color Scales</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate 9-step palettes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Muted Colors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mix with gray for professional tones
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
