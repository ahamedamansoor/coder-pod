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
  Sparkles, 
  CheckCircle2,
  Lightbulb,
  Info,
  Palette,
  Zap,
  Globe
} from 'lucide-react';

interface SassColorSpacesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassColorSpacesNew({ onOpenWebPlayground }: SassColorSpacesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Globe}
        category="Sass/SCSS · Colors"
        title="Modern Color Spaces"
        description="Work with modern CSS colors: oklch(), oklab(), color-mix(), and perceptually uniform color spaces."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Globe className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Modern Color Spaces"
            description="Next-generation color in CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Modern CSS introduces <strong>perceptually uniform</strong> color spaces like <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">oklch()</code> and <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">oklab()</code>, plus native <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">color-mix()</code>. These provide more accurate, vibrant colors!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">oklch()</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Lightness, chroma, hue</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">oklab()</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Lightness, a, b axes</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">color-mix()</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Native CSS mixing</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Browser Support</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Modern color spaces require recent browsers (Chrome 111+, Safari 16.4+, Firefox 113+). Check <strong>caniuse.com</strong>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* oklch() Color Space */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="oklch() Color Space"
            description="Lightness, Chroma, Hue"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic oklch() Syntax"
              code={`// oklch(lightness chroma hue / alpha)
// Lightness: 0% (black) to 100% (white)
// Chroma: 0 (gray) to 0.4+ (vibrant)
// Hue: 0-360 degrees (color wheel)

.color {
  // Bright blue
  &-blue {
    background: oklch(60% 0.3 250);
  }
  
  // Vibrant red
  &-red {
    background: oklch(55% 0.25 25);
  }
  
  // Deep green
  &-green {
    background: oklch(50% 0.2 145);
  }
  
  // With alpha
  &-transparent {
    background: oklch(60% 0.3 250 / 0.5);
  }
}`}
              output={[
                '.color-blue { background: oklch(60% 0.3 250); }',
                '.color-red { background: oklch(55% 0.25 25); }',
                '.color-green { background: oklch(50% 0.2 145); }',
                '.color-transparent { background: oklch(60% 0.3 250 / 0.5); }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Creating Color Scales"
              code={`// Same hue, varying lightness
$base-hue: 250;
$base-chroma: 0.25;

.scale {
  // Lighter to darker
  &-100 { background: oklch(95% $base-chroma $base-hue); }
  &-200 { background: oklch(85% $base-chroma $base-hue); }
  &-300 { background: oklch(75% $base-chroma $base-hue); }
  &-400 { background: oklch(65% $base-chroma $base-hue); }
  &-500 { background: oklch(55% $base-chroma $base-hue); }
  &-600 { background: oklch(45% $base-chroma $base-hue); }
  &-700 { background: oklch(35% $base-chroma $base-hue); }
  &-800 { background: oklch(25% $base-chroma $base-hue); }
  &-900 { background: oklch(15% $base-chroma $base-hue); }
}`}
              output={[
                '.scale-100 { background: oklch(95% 0.25 250); }',
                '.scale-200 { background: oklch(85% 0.25 250); }',
                '.scale-300 { background: oklch(75% 0.25 250); }',
                '.scale-400 { background: oklch(65% 0.25 250); }',
                '.scale-500 { background: oklch(55% 0.25 250); }',
                '.scale-600 { background: oklch(45% 0.25 250); }',
                '.scale-700 { background: oklch(35% 0.25 250); }',
                '.scale-800 { background: oklch(25% 0.25 250); }',
                '.scale-900 { background: oklch(15% 0.25 250); }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Vibrant vs Muted Colors"
              code={`$hue: 180; // Cyan
$lightness: 60%;

// Vary chroma for saturation
.vibrant {
  // High chroma = vibrant
  &-high {
    background: oklch($lightness 0.35 $hue);
  }
  
  &-medium {
    background: oklch($lightness 0.2 $hue);
  }
  
  // Low chroma = muted
  &-low {
    background: oklch($lightness 0.1 $hue);
  }
  
  // No chroma = gray
  &-gray {
    background: oklch($lightness 0 $hue);
  }
}`}
              output={[
                '.vibrant-high { background: oklch(60% 0.35 180); }',
                '.vibrant-medium { background: oklch(60% 0.2 180); }',
                '.vibrant-low { background: oklch(60% 0.1 180); }',
                '.vibrant-gray { background: oklch(60% 0 180); }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why oklch()?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <strong>Perceptually uniform</strong> - equal lightness changes look equally different to humans!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* oklab() Color Space */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="oklab() Color Space"
            description="Lightness and AB color axes"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic oklab() Syntax"
              code={`// oklab(lightness a b / alpha)
// Lightness: 0% (black) to 100% (white)
// a: green (-0.4) to red (+0.4)
// b: blue (-0.4) to yellow (+0.4)

.color {
  // Neutral (gray)
  &-gray {
    background: oklab(60% 0 0);
  }
  
  // Red (positive a)
  &-red {
    background: oklab(60% 0.25 0.15);
  }
  
  // Blue (negative b)
  &-blue {
    background: oklab(60% 0.05 -0.3);
  }
  
  // Green (negative a)
  &-green {
    background: oklab(60% -0.2 0.15);
  }
}`}
              output={[
                '.color-gray { background: oklab(60% 0 0); }',
                '.color-red { background: oklab(60% 0.25 0.15); }',
                '.color-blue { background: oklab(60% 0.05 -0.3); }',
                '.color-green { background: oklab(60% -0.2 0.15); }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Subtle Color Adjustments"
              code={`$base-lightness: 65%;
$base-a: 0.1;
$base-b: -0.15;

.adjust {
  // Base color
  &-base {
    background: oklab($base-lightness $base-a $base-b);
  }
  
  // Shift toward red
  &-warmer {
    background: oklab($base-lightness calc($base-a + 0.05) $base-b);
  }
  
  // Shift toward green
  &-cooler {
    background: oklab($base-lightness calc($base-a - 0.05) $base-b);
  }
}`}
              output={[
                '.adjust-base { background: oklab(65% 0.1 -0.15); }',
                '.adjust-warmer { background: oklab(65% calc(0.1 + 0.05) -0.15); }',
                '.adjust-cooler { background: oklab(65% calc(0.1 - 0.05) -0.15); }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* color-mix() Function */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="color-mix() Function"
            description="Native CSS color mixing"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic color-mix() Usage"
              code={`// color-mix(in colorspace, color1 percentage, color2)

.mix {
  // 50/50 mix in sRGB
  &-50 {
    background: color-mix(in srgb, #3b82f6, #ec4899);
  }
  
  // 75% blue, 25% pink
  &-75 {
    background: color-mix(in srgb, #3b82f6 75%, #ec4899);
  }
  
  // 25% blue, 75% pink
  &-25 {
    background: color-mix(in srgb, #3b82f6 25%, #ec4899);
  }
}`}
              output={[
                '.mix-50 { background: color-mix(in srgb, #3b82f6, #ec4899); }',
                '.mix-75 { background: color-mix(in srgb, #3b82f6 75%, #ec4899); }',
                '.mix-25 { background: color-mix(in srgb, #3b82f6 25%, #ec4899); }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Mixing in Different Color Spaces"
              code={`$color1: #3b82f6; // Blue
$color2: #f59e0b; // Orange

.space {
  // Mix in sRGB (traditional)
  &-srgb {
    background: color-mix(in srgb, $color1, $color2);
  }
  
  // Mix in oklch (modern)
  &-oklch {
    background: color-mix(in oklch, $color1, $color2);
  }
  
  // Mix in oklab
  &-oklab {
    background: color-mix(in oklab, $color1, $color2);
  }
  
  // Mix in hsl
  &-hsl {
    background: color-mix(in hsl, $color1, $color2);
  }
}`}
              output={[
                '.space-srgb { background: color-mix(in srgb, #3b82f6, #f59e0b); }',
                '.space-oklch { background: color-mix(in oklch, #3b82f6, #f59e0b); }',
                '.space-oklab { background: color-mix(in oklab, #3b82f6, #f59e0b); }',
                '.space-hsl { background: color-mix(in hsl, #3b82f6, #f59e0b); }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Creating Tints with color-mix()"
              code={`$primary: #3b82f6;

// Mix with white for tints
.tint {
  &-10 { background: color-mix(in oklch, $primary 90%, white); }
  &-25 { background: color-mix(in oklch, $primary 75%, white); }
  &-50 { background: color-mix(in oklch, $primary 50%, white); }
  &-75 { background: color-mix(in oklch, $primary 25%, white); }
}

// Mix with black for shades
.shade {
  &-10 { background: color-mix(in oklch, $primary 90%, black); }
  &-25 { background: color-mix(in oklch, $primary 75%, black); }
  &-50 { background: color-mix(in oklch, $primary 50%, black); }
}`}
              output={[
                '.tint-10 { background: color-mix(in oklch, #3b82f6 90%, white); }',
                '.tint-25 { background: color-mix(in oklch, #3b82f6 75%, white); }',
                '.tint-50 { background: color-mix(in oklch, #3b82f6 50%, white); }',
                '.tint-75 { background: color-mix(in oklch, #3b82f6 25%, white); }',
                '.shade-10 { background: color-mix(in oklch, #3b82f6 90%, black); }',
                '.shade-25 { background: color-mix(in oklch, #3b82f6 75%, black); }',
                '.shade-50 { background: color-mix(in oklch, #3b82f6 50%, black); }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why color-mix()?</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Native CSS function - <strong>no JavaScript</strong>, works in CSS variables, and supports modern color spaces!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparing Old vs New */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Traditional vs Modern"
            description="RGB/HSL vs oklch/oklab"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Traditional Color Spaces"
              code={`// RGB - Not perceptually uniform
.rgb {
  &-blue { background: rgb(59, 130, 246); }
  &-red  { background: rgb(239, 68, 68); }
}

// HSL - Better but still not uniform
.hsl {
  &-blue { background: hsl(221, 83%, 53%); }
  &-red  { background: hsl(0, 72%, 51%); }
}

// Problems:
// - Lightness varies across hues
// - Not perceptually uniform
// - Limited color gamut`}
              output={[
                '.rgb-blue { background: rgb(59, 130, 246); }',
                '.rgb-red { background: rgb(239, 68, 68); }',
                '.hsl-blue { background: hsl(221, 83%, 53%); }',
                '.hsl-red { background: hsl(0, 72%, 51%); }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Modern Color Spaces"
              code={`// oklch - Perceptually uniform!
.oklch {
  &-blue { background: oklch(60% 0.25 250); }
  &-red  { background: oklch(60% 0.25 25); }
}

// Same lightness looks equally bright
// Same chroma looks equally vibrant

// Benefits:
// - Perceptually uniform
// - Predictable color scales
// - Wider color gamut
// - Better for accessibility`}
              output={[
                '.oklch-blue { background: oklch(60% 0.25 250); }',
                '.oklch-red { background: oklch(60% 0.25 25); }'
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
          title="Modern Color Spaces Demo"
          description="oklch() in action"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <h1>Modern Color Spaces</h1>
  
  <div class="section">
    <h2>oklch() - Perceptually Uniform</h2>
    <div class="palette">
      <div class="swatch oklch-1">1</div>
      <div class="swatch oklch-2">2</div>
      <div class="swatch oklch-3">3</div>
      <div class="swatch oklch-4">4</div>
      <div class="swatch oklch-5">5</div>
    </div>
  </div>
  
  <div class="section">
    <h2>color-mix() Native CSS</h2>
    <div class="palette">
      <div class="swatch mix-1">100%</div>
      <div class="swatch mix-2">75%</div>
      <div class="swatch mix-3">50%</div>
      <div class="swatch mix-4">25%</div>
      <div class="swatch mix-5">0%</div>
    </div>
  </div>
</div>`}
          css={`// Modern SCSS Color Spaces
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
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.swatch {
  aspect-ratio: 1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
}

// oklch palette - same lightness, varying hue
.oklch-1 { background: oklch(60% 0.25 0); }
.oklch-2 { background: oklch(60% 0.25 90); }
.oklch-3 { background: oklch(60% 0.25 180); }
.oklch-4 { background: oklch(60% 0.25 270); }
.oklch-5 { background: oklch(60% 0.25 330); }

// color-mix palette
.mix-1 { background: color-mix(in oklch, #3b82f6 100%, #ec4899 0%); }
.mix-2 { background: color-mix(in oklch, #3b82f6 75%, #ec4899 25%); }
.mix-3 { background: color-mix(in oklch, #3b82f6 50%, #ec4899 50%); }
.mix-4 { background: color-mix(in oklch, #3b82f6 25%, #ec4899 75%); }
.mix-5 { background: color-mix(in oklch, #3b82f6 0%, #ec4899 100%); }

@media (prefers-color-scheme: dark) {
  .section {
    background: #1e293b;
    
    h2 {
      color: #e2e8f0;
    }
  }
}

@media (max-width: 640px) {
  .palette {
    grid-template-columns: repeat(3, 1fr);
  }
}`}
          title="Modern Color Spaces"
          description="oklch() and color-mix() examples"
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">oklch()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perceptually uniform (L, C, H)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">oklab()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lab color axes (L, a, b)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">color-mix()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Native CSS color mixing
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
              <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Browser Support</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Requires modern browsers (2023+)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
