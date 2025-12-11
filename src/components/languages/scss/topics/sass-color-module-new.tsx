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
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Blend,
  Sun,
  Droplet
} from 'lucide-react';

interface SassColorModuleNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassColorModuleNew({ onOpenWebPlayground }: SassColorModuleNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Palette}
        category="Sass/SCSS · Built-in Modules"
        title="sass:color Module"
        description="Master color manipulation: adjust, scale, change, mix, invert, grayscale, complement for dynamic color systems."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="sass:color Module"
            description="Advanced color manipulation"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The <strong>sass:color</strong> module provides powerful functions for manipulating colors. Load it with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use 'sass:color'</code> to access functions for adjusting hue, saturation, lightness, mixing colors, and more!
          </p>

          <CodeSnippetWithOutput
            title="Loading the Module"
            code={`// Load the color module
@use 'sass:color';

$primary: #3b82f6;

.button {
  background: $primary;
  
  &:hover {
    background: color.adjust($primary, $lightness: -10%);
  }
}`}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Modern Color Functions!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Use sass:color functions instead of global color functions like <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">darken()</code> and <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">lighten()</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Adjust */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sun className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="color.adjust()"
            description="Add or subtract color values"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Adjust Lightness"
              code={`@use 'sass:color';

$blue: #3b82f6;

.button {
  background: $blue;
  
  // Make lighter
  &:hover {
    background: color.adjust($blue, $lightness: 10%);
  }
  
  // Make darker
  &:active {
    background: color.adjust($blue, $lightness: -10%);
  }
}`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Adjust Multiple Properties"
              code={`@use 'sass:color';

$color: #3b82f6;

.variants {
  // Adjust hue, saturation, and lightness
  color: color.adjust($color, 
    $hue: 30deg,
    $saturation: 10%, 
    $lightness: 5%
  );
  
  // Adjust alpha (opacity)
  background: color.adjust($color, $alpha: -0.3);
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Scale */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Blend className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="color.scale()"
            description="Scale properties fluidly"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Scale vs Adjust"
              description="Scale is relative, adjust is absolute"
              code={`@use 'sass:color';

$blue: #3b82f6;  // 50% lightness

// adjust() adds/subtracts exact amount
$adjusted: color.adjust($blue, $lightness: 10%);
// 50% + 10% = 60% lightness

// scale() scales the distance to max/min
$scaled: color.scale($blue, $lightness: 50%);
// 50% + (50% of remaining 50%) = 75% lightness`}
              output={[
                'adjust: 60% lightness',
                'scale: 75% lightness (more natural!)'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Practical Scaling"
              code={`@use 'sass:color';

$primary: #3b82f6;

.button {
  background: $primary;
  
  // Scale lighter (more natural)
  &:hover {
    background: color.scale($primary, $lightness: 20%);
  }
  
  // Scale darker
  &:active {
    background: color.scale($primary, $lightness: -20%);
  }
  
  // Scale saturation
  &:disabled {
    background: color.scale($primary, $saturation: -50%);
  }
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Prefer scale() for Consistency!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">color.scale()</code> produces more natural results than adjust() for lightening/darkening!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Change */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="color.change()"
            description="Set properties to exact values"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Change Properties"
              code={`@use 'sass:color';

$color: #3b82f6;

.variants {
  // Change hue to specific value
  color: color.change($color, $hue: 120deg);    // Green hue
  
  // Change lightness to exact value
  color: color.change($color, $lightness: 80%);  // Light blue
  
  // Change alpha (opacity)
  background: color.change($color, $alpha: 0.5); // 50% opacity
  
  // Change multiple at once
  border-color: color.change($color,
    $hue: 200deg,
    $saturation: 50%,
    $lightness: 60%
  );
}`}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Mix */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Droplet className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="color.mix()"
            description="Blend two colors"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Mixing Colors"
              code={`@use 'sass:color';

$blue: #3b82f6;
$red: #ef4444;

.mixed {
  // Mix 50/50 (default)
  color: color.mix($blue, $red);
  
  // 75% blue, 25% red
  color: color.mix($blue, $red, 75%);
  
  // 25% blue, 75% red
  color: color.mix($blue, $red, 25%);
}`}
              output={[
                'Mix creates smooth color transitions',
                'Perfect for color palettes'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Tinting & Shading"
              code={`@use 'sass:color';

$color: #3b82f6;

// Tint (mix with white)
@function tint($color, $percentage) {
  @return color.mix(white, $color, $percentage);
}

// Shade (mix with black)
@function shade($color, $percentage) {
  @return color.mix(black, $color, $percentage);
}

.variants {
  // Light tints
  color: tint($color, 20%);   // 20% white, 80% color
  color: tint($color, 50%);   // 50% white, 50% color
  
  // Dark shades
  color: shade($color, 20%);  // 20% black, 80% color
  color: shade($color, 50%);  // 50% black, 50% color
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Other Functions */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Other Color Functions"
            description="invert, grayscale, complement"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="color.invert()"
              description="Flip colors"
              code={`@use 'sass:color';

$blue: #3b82f6;

.inverted {
  // Invert color
  color: color.invert($blue);        // Orange-ish
  
  // Partial invert
  color: color.invert($blue, 50%);   // Gray-ish
}`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="color.grayscale()"
              description="Remove all saturation"
              code={`@use 'sass:color';

$blue: #3b82f6;

.grayscale {
  // Convert to grayscale
  color: color.grayscale($blue);     // Gray
  
  // Disabled state
  &:disabled {
    background: color.grayscale($blue);
    opacity: 0.6;
  }
}`}
              language="scss"
              colorTheme="cyan"
            />

            <CodeSnippetWithOutput
              title="color.complement()"
              description="Opposite on color wheel"
              code={`@use 'sass:color';

$blue: #3b82f6;    // Blue

.complementary {
  // Get complementary color (opposite on wheel)
  color: color.complement($blue);    // Orange
  
  // Create complementary color scheme
  background: $blue;
  border-color: color.complement($blue);
}`}
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
          title="Color Module in Action"
          description="Dynamic color palette"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="swatch swatch-original">Original</div>
  <div class="swatch swatch-lighter">Lighter</div>
  <div class="swatch swatch-darker">Darker</div>
  <div class="swatch swatch-complement">Complement</div>
  <div class="swatch swatch-mixed">Mixed</div>
  <div class="swatch swatch-grayscale">Grayscale</div>
</div>`}
          css={`@use 'sass:color';

// Using color functions
// color.scale($primary, $lightness: 30%) => lighter
// color.scale($primary, $lightness: -30%) => darker
// color.adjust($primary, $hue: 180deg) => complement

$primary: #3b82f6;
$secondary: #ec4899;

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;
}

.swatch {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 600;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}

// Original color
.swatch-original {
  background: #3b82f6;
}

// Lighter version
.swatch-lighter {
  background: #93bbfd;
}

// Darker version
.swatch-darker {
  background: #1e40af;
}

// Complementary color (opposite on color wheel)
.swatch-complement {
  background: #f59e0b;
}

// Mixed color
.swatch-mixed {
  background: #9370d2;
}

// Grayscale version
.swatch-grayscale {
  background: #6b7280;
}`}
          title="Color Palette Generator"
          description="Using sass:color functions"
          colorTheme="purple"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">adjust()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add/subtract exact amounts
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">scale()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Scale relative to max (better!)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">mix()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Blend two colors together
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Others</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                invert, grayscale, complement
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
