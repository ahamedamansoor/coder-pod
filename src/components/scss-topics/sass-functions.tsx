
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, FunctionSquare, Lightbulb, AlertTriangle, Blocks,
    Code, Eye, EyeOff, CheckCircle, Target, Zap, Settings,
    Globe, RefreshCw, Copy, ArrowRight, Hash, TreePine,
    Layers, Star, Rocket, BookOpen, FolderTree, Users,
    Link2, GitBranch, Workflow, Network, Merge, Calculator,
    Palette, Type, Ruler, Wrench, Cog, Beaker, Sparkles
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassFunctions({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    const [selectedExample, setSelectedExample] = useState('builtin');
    const [showOutput, setShowOutput] = useState(false);

    const builtInExampleHtml = `<div class="element"></div>`;
    const builtInExampleScss = `$color: #8a2be2; // BlueViolet

.element {
  // darken() is a built-in color function
  background-color: darken($color, 15%);
  width: round(100.6px); // round() is a built-in numeric function
  padding: 10px;
}`;
    const builtInExampleCss = `.element {
  background-color: #5d12a3;
  width: 101px;
  padding: 10px;
}`;
    
    const customFunctionHtml = `<div class="box"></div>`;
    const customFunctionScss = `// A custom function to calculate rem units from pixels
@function px-to-rem($pixels, $base-font-size: 16px) {
  @return ($pixels / $base-font-size) * 1rem;
}

.box {
  // Use the custom function
  width: px-to-rem(200px);
  padding: px-to-rem(16px);
  background-color: lightblue;
}`;
    const customFunctionCss = `.box {
  width: 12.5rem;
  padding: 1rem;
  background-color: lightblue;
}`;

    const functionCategories = [
        {
            type: 'Color Functions',
            icon: Palette,
            color: 'text-pink-600',
            bgColor: 'bg-pink-50 dark:bg-pink-950/20',
            borderColor: 'border-pink-200',
            description: 'Manipulate and transform colors',
            example: 'darken(), lighten(), mix()'
        },
        {
            type: 'Math Functions',
            icon: Calculator,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Perform mathematical calculations',
            example: 'round(), ceil(), min(), max()'
        },
        {
            type: 'String Functions',
            icon: Type,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Process and manipulate strings',
            example: 'quote(), unquote(), str-length()'
        },
        {
            type: 'Custom Functions',
            icon: Wrench,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Create your own reusable functions',
            example: '@function name() { @return value; }'
        }
    ];

    const interactiveExamples = {
        builtin: {
            title: 'Built-in Functions Showcase',
            html: '<div class="function-demo">\n  <div class="color-showcase">\n    <div class="color-box color-box--original">Original</div>\n    <div class="color-box color-box--darker">Darker</div>\n    <div class="color-box color-box--lighter">Lighter</div>\n    <div class="color-box color-box--saturated">Saturated</div>\n    <div class="color-box color-box--mixed">Mixed</div>\n  </div>\n  \n  <div class="math-showcase">\n    <div class="math-box math-box--rounded">Rounded: 100.7px</div>\n    <div class="math-box math-box--ceiling">Ceiling: 100.2px</div>\n    <div class="math-box math-box--floor">Floor: 100.9px</div>\n    <div class="math-box math-box--percentage">Percentage: 0.75</div>\n  </div>\n  \n  <div class="string-showcase">\n    <div class="string-box string-box--quoted">Quoted String</div>\n    <div class="string-box string-box--length">Length: 5 chars</div>\n    <div class="string-box string-box--slice">Sliced: "hello"</div>\n  </div>\n</div>',
            scss: '// === COLOR FUNCTIONS ===\n$primary-color: #3b82f6;\n$secondary-color: #ef4444;\n\n// Color manipulation functions\n.color-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  border-radius: 8px;\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  transition: all 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-2px);\n  }\n  \n  &--original {\n    background: $primary-color;\n  }\n  \n  &--darker {\n    background: darken($primary-color, 20%);\n  }\n  \n  &--lighter {\n    background: lighten($primary-color, 20%);\n  }\n  \n  &--saturated {\n    background: saturate($primary-color, 30%);\n  }\n  \n  &--mixed {\n    background: mix($primary-color, $secondary-color, 60%);\n  }\n}\n\n// === MATH FUNCTIONS ===\n$base-size: 100px;\n$decimal-value: 100.7px;\n$percentage-value: 0.75;\n\n.math-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  border-left: 4px solid #3b82f6;\n  font-family: monospace;\n  \n  &--rounded {\n    width: round($decimal-value); // 101px\n  }\n  \n  &--ceiling {\n    width: ceil(100.2px); // 101px\n  }\n  \n  &--floor {\n    width: floor(100.9px); // 100px\n  }\n  \n  &--percentage {\n    width: percentage($percentage-value); // 75%\n  }\n}\n\n// === STRING FUNCTIONS ===\n$font-family: "Helvetica Neue";\n$test-string: "hello";\n\n.string-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  background: #ecfdf5;\n  border-radius: 8px;\n  border-left: 4px solid #10b981;\n  \n  &--quoted {\n    font-family: quote($font-family);\n  }\n  \n  &--length {\n    // Using str-length() in a creative way\n    padding-left: str-length($test-string) * 0.5rem;\n  }\n  \n  &--slice {\n    // Using str-slice() for content\n    &::before {\n      content: str-slice($test-string, 1, 3); // "hel"\n    }\n  }\n}\n\n// === LAYOUT ===\n.function-demo {\n  padding: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.color-showcase,\n.math-showcase,\n.string-showcase {\n  margin-bottom: 2rem;\n  \n  &:not(:last-child) {\n    border-bottom: 2px solid #e5e7eb;\n    padding-bottom: 2rem;\n  }\n}',
            css: '.color-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  border-radius: 8px;\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n\n.color-box:hover {\n  transform: translateY(-2px);\n}\n\n.color-box--original {\n  background: #3b82f6;\n}\n\n.color-box--darker {\n  background: #1e40af;\n}\n\n.color-box--lighter {\n  background: #93c5fd;\n}\n\n.color-box--saturated {\n  background: #2563eb;\n}\n\n.color-box--mixed {\n  background: #8b5cf6;\n}\n\n.math-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  border-left: 4px solid #3b82f6;\n  font-family: monospace;\n}\n\n.math-box--rounded {\n  width: 101px;\n}\n\n.math-box--ceiling {\n  width: 101px;\n}\n\n.math-box--floor {\n  width: 100px;\n}\n\n.math-box--percentage {\n  width: 75%;\n}'
        },
        custom: {
            title: 'Custom Function Library',
            html: '<div class="custom-demo">\n  <div class="utility-functions">\n    <div class="unit-conversion">\n      <h3>Unit Conversion</h3>\n      <div class="conversion-box conversion-box--px-to-rem">16px → 1rem</div>\n      <div class="conversion-box conversion-box--em-to-px">2em → 32px</div>\n    </div>\n    \n    <div class="design-system">\n      <h3>Design System Functions</h3>\n      <div class="spacing-box spacing-box--xs">XS Spacing</div>\n      <div class="spacing-box spacing-box--md">MD Spacing</div>\n      <div class="spacing-box spacing-box--xl">XL Spacing</div>\n    </div>\n    \n    <div class="advanced-calculations">\n      <h3>Advanced Calculations</h3>\n      <div class="calc-box calc-box--golden">Golden Ratio</div>\n      <div class="calc-box calc-box--modular">Modular Scale</div>\n      <div class="calc-box calc-box--fluid">Fluid Typography</div>\n    </div>\n  </div>\n</div>',
            scss: '// === UTILITY FUNCTIONS ===\n\n// Unit conversion functions\n@function px-to-rem($pixels, $base: 16px) {\n  @return ($pixels / $base) * 1rem;\n}\n\n@function em-to-px($em, $base: 16px) {\n  @return $em * $base;\n}\n\n@function strip-unit($number) {\n  @if type-of($number) == "number" and not unitless($number) {\n    @return $number / ($number * 0 + 1);\n  }\n  @return $number;\n}\n\n// === DESIGN SYSTEM FUNCTIONS ===\n\n// Spacing scale function\n@function spacing($size) {\n  $spacing-scale: (\n    xs: 0.25rem,\n    sm: 0.5rem,\n    md: 1rem,\n    lg: 1.5rem,\n    xl: 2rem,\n    2xl: 3rem\n  );\n  \n  @return map-get($spacing-scale, $size);\n}\n\n// Color palette function\n@function color($name, $variant: 500) {\n  $colors: (\n    blue: (\n      100: #dbeafe,\n      500: #3b82f6,\n      900: #1e3a8a\n    ),\n    green: (\n      100: #dcfce7,\n      500: #22c55e,\n      900: #14532d\n    )\n  );\n  \n  @return map-get(map-get($colors, $name), $variant);\n}\n\n// === ADVANCED MATHEMATICAL FUNCTIONS ===\n\n// Golden ratio function\n@function golden-ratio($value, $increment: 0) {\n  $ratio: 1.618;\n  @return $value * pow($ratio, $increment);\n}\n\n// Modular scale function\n@function modular-scale($increment, $base: 1rem, $ratio: 1.25) {\n  @return $base * pow($ratio, $increment);\n}\n\n// Fluid typography function\n@function fluid-type($min-size, $max-size, $min-width: 320px, $max-width: 1200px) {\n  $slope: ($max-size - $min-size) / ($max-width - $min-width);\n  $intersection: (-$min-width * $slope) + $min-size;\n  \n  @return clamp(#{$min-size}, #{$intersection} + #{$slope * 100vw}, #{$max-size});\n}\n\n// Power function (for calculations)\n@function pow($base, $exponent) {\n  $result: 1;\n  @if $exponent > 0 {\n    @for $i from 1 through $exponent {\n      $result: $result * $base;\n    }\n  }\n  @return $result;\n}\n\n// === COMPONENT IMPLEMENTATIONS ===\n\n.conversion-box {\n  padding: spacing(md);\n  margin: spacing(sm);\n  background: color(blue, 100);\n  border-radius: 8px;\n  border-left: 4px solid color(blue, 500);\n  font-family: monospace;\n  \n  &--px-to-rem {\n    font-size: px-to-rem(18px);\n  }\n  \n  &--em-to-px {\n    width: px-to-rem(em-to-px(2em));\n  }\n}\n\n.spacing-box {\n  background: color(green, 100);\n  border-radius: 8px;\n  border-left: 4px solid color(green, 500);\n  margin-bottom: spacing(sm);\n  \n  &--xs {\n    padding: spacing(xs);\n  }\n  \n  &--md {\n    padding: spacing(md);\n  }\n  \n  &--xl {\n    padding: spacing(xl);\n  }\n}\n\n.calc-box {\n  padding: spacing(md);\n  margin: spacing(sm);\n  background: #f3e8ff;\n  border-radius: 8px;\n  border-left: 4px solid #8b5cf6;\n  \n  &--golden {\n    width: px-to-rem(golden-ratio(100px, 1));\n  }\n  \n  &--modular {\n    font-size: modular-scale(2);\n  }\n  \n  &--fluid {\n    font-size: fluid-type(1rem, 2rem);\n  }\n}\n\n// === LAYOUT ===\n.custom-demo {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.utility-functions {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  \n  h3 {\n    margin: 0 0 1rem 0;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #374151;\n    border-bottom: 2px solid #e5e7eb;\n    padding-bottom: 0.5rem;\n  }\n}',
            css: '.conversion-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  background: #dbeafe;\n  border-radius: 8px;\n  border-left: 4px solid #3b82f6;\n  font-family: monospace;\n}\n\n.conversion-box--px-to-rem {\n  font-size: 1.125rem;\n}\n\n.conversion-box--em-to-px {\n  width: 2rem;\n}\n\n.spacing-box {\n  background: #dcfce7;\n  border-radius: 8px;\n  border-left: 4px solid #22c55e;\n  margin-bottom: 0.5rem;\n}\n\n.spacing-box--xs {\n  padding: 0.25rem;\n}\n\n.spacing-box--md {\n  padding: 1rem;\n}\n\n.spacing-box--xl {\n  padding: 2rem;\n}\n\n.calc-box {\n  padding: 1rem;\n  margin: 0.5rem;\n  background: #f3e8ff;\n  border-radius: 8px;\n  border-left: 4px solid #8b5cf6;\n}\n\n.calc-box--golden {\n  width: 10.125rem;\n}\n\n.calc-box--modular {\n  font-size: 1.5625rem;\n}\n\n.calc-box--fluid {\n  font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);\n}'
        },
        advanced: {
            title: 'Advanced Function Patterns',
            html: '<div class="advanced-demo">\n  <div class="theme-system">\n    <h2>Dynamic Theme System</h2>\n    <div class="theme-showcase">\n      <div class="theme-card theme-card--primary">Primary Theme</div>\n      <div class="theme-card theme-card--secondary">Secondary Theme</div>\n      <div class="theme-card theme-card--accent">Accent Theme</div>\n    </div>\n  </div>\n  \n  <div class="responsive-system">\n    <h2>Responsive Typography</h2>\n    <div class="typography-showcase">\n      <h1 class="fluid-heading">Fluid Heading</h1>\n      <p class="fluid-text">This text scales smoothly between viewport sizes using advanced Sass functions.</p>\n    </div>\n  </div>\n  \n  <div class="animation-system">\n    <h2>Animation Timing Functions</h2>\n    <div class="animation-showcase">\n      <div class="animated-box animated-box--ease-in">Ease In</div>\n      <div class="animated-box animated-box--ease-out">Ease Out</div>\n      <div class="animated-box animated-box--custom">Custom Curve</div>\n    </div>\n  </div>\n</div>',
            scss: '// === ADVANCED FUNCTION LIBRARY ===\n\n// Theme generation function\n@function generate-theme($base-color, $contrast: 0.8) {\n  @return (\n    primary: $base-color,\n    light: lighten($base-color, 20%),\n    dark: darken($base-color, 20%),\n    contrast: if(lightness($base-color) > 50%, darken($base-color, 60%), lighten($base-color, 60%)),\n    shadow: rgba($base-color, 0.3)\n  );\n}\n\n// Get theme color function\n@function theme-color($theme, $variant: primary) {\n  @return map-get($theme, $variant);\n}\n\n// Responsive value function\n@function responsive-value($min, $max, $min-width: 320px, $max-width: 1200px) {\n  $slope: ($max - $min) / ($max-width - $min-width);\n  $intersection: $min - ($slope * $min-width);\n  @return calc(#{$intersection} + #{$slope * 100vw});\n}\n\n// Easing function generator\n@function cubic-bezier-ease($type: ease-out) {\n  $easings: (\n    ease-in: cubic-bezier(0.4, 0, 1, 1),\n    ease-out: cubic-bezier(0, 0, 0.2, 1),\n    ease-in-out: cubic-bezier(0.4, 0, 0.2, 1),\n    custom: cubic-bezier(0.68, -0.55, 0.265, 1.55)\n  );\n  @return map-get($easings, $type);\n}\n\n// Color contrast function\n@function contrast-color($color, $light: #ffffff, $dark: #000000) {\n  $lightness: lightness($color);\n  @return if($lightness > 50%, $dark, $light);\n}\n\n// Z-index management function\n@function z-index($layer) {\n  $z-layers: (\n    base: 1,\n    dropdown: 100,\n    modal: 200,\n    tooltip: 300,\n    notification: 400\n  );\n  @return map-get($z-layers, $layer);\n}\n\n// === THEME DEFINITIONS ===\n$primary-theme: generate-theme(#3b82f6);\n$secondary-theme: generate-theme(#64748b);\n$accent-theme: generate-theme(#f59e0b);\n\n// === COMPONENT IMPLEMENTATIONS ===\n\n.theme-card {\n  padding: 2rem;\n  margin: 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  text-align: center;\n  transition: all 0.3s cubic-bezier-ease(ease-out);\n  box-shadow: 0 4px 6px theme-color($primary-theme, shadow);\n  \n  &:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 8px 25px theme-color($primary-theme, shadow);\n  }\n  \n  &--primary {\n    background: theme-color($primary-theme, primary);\n    color: contrast-color(theme-color($primary-theme, primary));\n  }\n  \n  &--secondary {\n    background: theme-color($secondary-theme, primary);\n    color: contrast-color(theme-color($secondary-theme, primary));\n  }\n  \n  &--accent {\n    background: theme-color($accent-theme, primary);\n    color: contrast-color(theme-color($accent-theme, primary));\n  }\n}\n\n.fluid-heading {\n  font-size: responsive-value(2rem, 4rem);\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n  background: linear-gradient(45deg, theme-color($primary-theme, primary), theme-color($accent-theme, primary));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.fluid-text {\n  font-size: responsive-value(1rem, 1.25rem);\n  line-height: 1.6;\n  color: theme-color($secondary-theme, dark);\n  margin: 0;\n}\n\n.animated-box {\n  padding: 1rem 2rem;\n  margin: 0.5rem;\n  background: theme-color($primary-theme, light);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: transform 0.3s;\n  \n  &:hover {\n    transform: translateX(20px);\n  }\n  \n  &--ease-in {\n    transition-timing-function: cubic-bezier-ease(ease-in);\n  }\n  \n  &--ease-out {\n    transition-timing-function: cubic-bezier-ease(ease-out);\n  }\n  \n  &--custom {\n    transition-timing-function: cubic-bezier-ease(custom);\n  }\n}\n\n// === LAYOUT ===\n.advanced-demo {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  \n  h2 {\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin: 0 0 1.5rem 0;\n    color: theme-color($primary-theme, dark);\n    border-bottom: 3px solid theme-color($primary-theme, primary);\n    padding-bottom: 0.5rem;\n  }\n}\n\n.theme-showcase {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 3rem;\n}\n\n.typography-showcase {\n  text-align: center;\n  padding: 2rem;\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  border-radius: 12px;\n  margin-bottom: 3rem;\n}\n\n.animation-showcase {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}',
            css: '.theme-card {\n  padding: 2rem;\n  margin: 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  text-align: center;\n  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);\n}\n\n.theme-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n\n.theme-card--primary {\n  background: #3b82f6;\n  color: #ffffff;\n}\n\n.theme-card--secondary {\n  background: #64748b;\n  color: #ffffff;\n}\n\n.theme-card--accent {\n  background: #f59e0b;\n  color: #000000;\n}\n\n.fluid-heading {\n  font-size: calc(-2rem + 8.333vw);\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n  background: linear-gradient(45deg, #3b82f6, #f59e0b);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.fluid-text {\n  font-size: calc(0.75rem + 1.042vw);\n  line-height: 1.6;\n  color: #1e293b;\n  margin: 0;\n}\n\n.animated-box {\n  padding: 1rem 2rem;\n  margin: 0.5rem;\n  background: #93c5fd;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\n.animated-box:hover {\n  transform: translateX(20px);\n}\n\n.animated-box--ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.animated-box--ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.animated-box--custom {\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}'
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FunctionSquare className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sass Functions Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of computational styling with built-in functions and create your own powerful utilities for complex operations.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Beaker className="w-6 h-6 animate-bounce" />
                        The Power of Computational Styling
                    </CardTitle>
                    <CardDescription>
                        Functions compute and return values, enabling dynamic calculations, color manipulations, and complex logic in your stylesheets.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Calculator className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Compute Values</h3>
                            <p className="text-sm text-muted-foreground">Return calculated results</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Palette className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Transform Colors</h3>
                            <p className="text-sm text-muted-foreground">Manipulate color properties</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Wrench className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Custom Logic</h3>
                            <p className="text-sm text-muted-foreground">Build reusable utilities</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Function Categories */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Cog className="w-6 h-6 text-primary" />
                        Function Categories & Types
                    </CardTitle>
                    <CardDescription>
                        Different types of functions for various computational needs and styling operations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {functionCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${category.bgColor} ${category.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${category.color}`} />
                                        <h3 className="font-bold text-sm">{category.type}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{category.description}</p>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                        {category.example}
                                    </code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Function vs Mixin Comparison */}
            <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <GitBranch className="w-6 h-6" />
                        @function vs @mixin: The Critical Difference
                    </CardTitle>
                    <CardDescription>
                        Understanding when to use functions versus mixins for optimal Sass architecture.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                                <FunctionSquare className="w-5 h-5" />
                                @function - Compute & Return
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 mb-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`@function px-to-rem($px) {
  @return $px / 16px * 1rem;
}

.element {
  font-size: px-to-rem(18px);
  // Result: font-size: 1.125rem;
}`}
                                </pre>
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                <p>• Returns a single computed value</p>
                                <p>• No CSS output directly</p>
                                <p>• Perfect for calculations</p>
                                <p>• Can accept parameters</p>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                                <Blocks className="w-5 h-5" />
                                @mixin - Generate Styles
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 mb-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs">
{`@mixin button-style($color) {
  background: $color;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
}

.btn {
  @include button-style(#3b82f6);
}`}
                                </pre>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400 space-y-1">
                                <p>• Generates CSS rules</p>
                                <p>• Outputs styles directly</p>
                                <p>• Perfect for style blocks</p>
                                <p>• Can use @content</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">🎯 Decision Framework</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Use @function When:</h5>
                                <p className="text-blue-600 dark:text-blue-400">You need to calculate and return a value for use in properties</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-1">Use @mixin When:</h5>
                                <p className="text-green-600 dark:text-green-400">You need to generate complete CSS rule blocks</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Function Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different function patterns with real examples and compiled output.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(interactiveExamples).map(([key, example]) => (
                            <Button
                                key={key}
                                variant={selectedExample === key ? "default" : "outline"}
                                onClick={() => setSelectedExample(key)}
                                size="sm"
                                className="transition-all duration-200"
                            >
                                <Badge variant="secondary" className="mr-2 text-xs">
                                    {key === 'builtin' ? 'Built-in' : key === 'custom' ? 'Custom' : 'Advanced'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-600" />
                                    SCSS Input
                                </h3>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
                                    {interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                    CSS Output
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowOutput(!showOutput)}
                                    className="transition-all duration-200"
                                >
                                    {showOutput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <pre className="text-green-600 dark:text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    {showOutput ? interactiveExamples[selectedExample as keyof typeof interactiveExamples].css : 'Click the eye icon to reveal compiled CSS output'}
                                </pre>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                        <Button 
                            onClick={() => onOpenWebPlayground(
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].html,
                                interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss,
                                ''
                            )}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <Play className="w-4 h-4" />
                            Try in Playground
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(interactiveExamples[selectedExample as keyof typeof interactiveExamples].scss)}
                            className="flex items-center gap-2"
                        >
                            <Copy className="w-4 h-4" />
                            Copy SCSS
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Built-in Function Library */}
            <Card className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Palette className="w-6 h-6" />
                        Built-in Function Library
                    </CardTitle>
                    <CardDescription>
                        Sass provides a comprehensive library of built-in functions for colors, math, strings, and more.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                <h4 className="font-semibold mb-2 text-pink-600">Color Functions</h4>
                                <ul className="text-sm space-y-1">
                                    <li><code>darken($color, 20%)</code></li>
                                    <li><code>lighten($color, 15%)</code></li>
                                    <li><code>saturate($color, 30%)</code></li>
                                    <li><code>mix($color1, $color2)</code></li>
                                    <li><code>rgba($color, 0.5)</code></li>
                                </ul>
                            </div>
                            <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                <h4 className="font-semibold mb-2 text-blue-600">Math Functions</h4>
                                <ul className="text-sm space-y-1">
                                    <li><code>round($number)</code></li>
                                    <li><code>ceil($number)</code></li>
                                    <li><code>floor($number)</code></li>
                                    <li><code>min($numbers...)</code></li>
                                    <li><code>max($numbers...)</code></li>
                                </ul>
                            </div>
                            <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                                <h4 className="font-semibold mb-2 text-green-600">String Functions</h4>
                                <ul className="text-sm space-y-1">
                                    <li><code>str-length($string)</code></li>
                                    <li><code>str-slice($string, 1, 3)</code></li>
                                    <li><code>quote($string)</code></li>
                                    <li><code>unquote($string)</code></li>
                                    <li><code>to-upper-case($string)</code></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3">Complete Built-in Functions Example</h4>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// === COLOR FUNCTIONS ===
$primary: #3b82f6;
$secondary: #ef4444;

.color-demo {
  // Color manipulation
  background: darken($primary, 20%);        // #1e40af
  border: 2px solid lighten($primary, 30%); // #a5b4fc
  color: mix($primary, $secondary, 60%);    // #8b5cf6
  
  // Color information
  opacity: alpha($primary);                 // 1
  lightness: lightness($primary);           // 51.37%
}

// === MATH FUNCTIONS ===
$width: 100.7px;
$values: 10px, 20px, 30px;

.math-demo {
  width: round($width);                     // 101px
  height: ceil($width);                     // 101px
  min-width: floor($width);                 // 100px
  max-width: max($values...);               // 30px
  padding: min($values...);                 // 10px
  
  // Percentage calculations
  margin: percentage(0.25);                 // 25%
}

// === STRING FUNCTIONS ===
$font-name: "Helvetica Neue";
$class-prefix: "btn";

.string-demo {
  font-family: quote($font-name);           // "Helvetica Neue"
  
  // Dynamic class generation
  &.#{$class-prefix}-primary {
    background: $primary;
  }
  
  // String manipulation
  content: str-slice($font-name, 1, 9);     // "Helvetica"
  
  &::before {
    content: to-upper-case($class-prefix);   // "BTN"
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Custom Function Patterns */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Wrench className="w-6 h-6" />
                        Custom Function Patterns
                    </CardTitle>
                    <CardDescription>
                        Professional patterns for creating powerful, reusable custom functions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Essential Custom Functions</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// === UNIT CONVERSION FUNCTIONS ===

// Convert pixels to rem
@function px-to-rem($pixels, $base: 16px) {
  @return ($pixels / $base) * 1rem;
}

// Convert rem to pixels
@function rem-to-px($rem, $base: 16px) {
  @return $rem * $base;
}

// Strip units from numbers
@function strip-unit($number) {
  @if type-of($number) == "number" and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }
  @return $number;
}

// === DESIGN SYSTEM FUNCTIONS ===

// Get spacing value from scale
@function spacing($size) {
  $spacing-scale: (
    xs: 0.25rem,
    sm: 0.5rem,
    md: 1rem,
    lg: 1.5rem,
    xl: 2rem,
    2xl: 3rem,
    3xl: 4rem
  );
  
  @if map-has-key($spacing-scale, $size) {
    @return map-get($spacing-scale, $size);
  } @else {
    @warn "Unknown spacing size: #{$size}";
    @return 1rem;
  }
}

// Get color from palette
@function color($name, $variant: 500) {
  $colors: (
    blue: (
      50: #eff6ff,
      100: #dbeafe,
      500: #3b82f6,
      900: #1e3a8a
    ),
    green: (
      50: #f0fdf4,
      100: #dcfce7,
      500: #22c55e,
      900: #14532d
    )
  );
  
  @if map-has-key($colors, $name) {
    $color-map: map-get($colors, $name);
    @if map-has-key($color-map, $variant) {
      @return map-get($color-map, $variant);
    }
  }
  
  @warn "Color #{$name}-#{$variant} not found";
  @return #000000;
}

// === MATHEMATICAL FUNCTIONS ===

// Power function
@function pow($base, $exponent) {
  $result: 1;
  @if $exponent > 0 {
    @for $i from 1 through $exponent {
      $result: $result * $base;
    }
  } @else if $exponent < 0 {
    @for $i from 1 through abs($exponent) {
      $result: $result / $base;
    }
  }
  @return $result;
}

// Modular scale function
@function modular-scale($increment, $base: 1rem, $ratio: 1.25) {
  @return $base * pow($ratio, $increment);
}

// Clamp function for fluid values
@function fluid-size($min, $max, $min-width: 320px, $max-width: 1200px) {
  $slope: ($max - $min) / ($max-width - $min-width);
  $intersection: $min - ($slope * $min-width);
  @return clamp(#{$min}, #{$intersection} + #{$slope * 100vw}, #{$max});
}`}
                                </pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Usage Examples</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">
{`// Using custom functions in components
.component {
  // Unit conversions
  font-size: px-to-rem(18px);              // 1.125rem
  padding: spacing(md);                    // 1rem
  margin: spacing(lg) spacing(sm);         // 1.5rem 0.5rem
  
  // Color system
  background: color(blue, 500);            // #3b82f6
  border: 1px solid color(blue, 200);      // #bfdbfe
  
  // Modular scale typography
  h1 { font-size: modular-scale(3); }      // 1.953rem
  h2 { font-size: modular-scale(2); }      // 1.563rem
  h3 { font-size: modular-scale(1); }      // 1.25rem
  
  // Fluid typography
  .hero-title {
    font-size: fluid-size(2rem, 4rem);
  }
  
  // Complex calculations
  .golden-ratio-box {
    width: 300px;
    height: 300px / 1.618;                 // Golden ratio
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <Lightbulb className="w-6 h-6" />
                        Function Best Practices & Guidelines
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for creating maintainable and efficient function libraries.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Best Practices
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Always use <code>@return</code> to return values</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Provide default parameter values when appropriate</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use descriptive function names: <code>px-to-rem()</code></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Add error handling with <code>@warn</code> or <code>@error</code></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Document function purpose and parameters</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Common Pitfalls
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Generating CSS output in functions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Forgetting to handle edge cases</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Not validating input parameters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating overly complex functions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using functions when mixins would be better</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎯 Function Design Principles</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Pure Functions:</h5>
                                <p className="text-blue-600 dark:text-blue-400">Same input always produces same output</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-1">Single Purpose:</h5>
                                <p className="text-green-600 dark:text-green-400">Each function should do one thing well</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">Composable:</h5>
                                <p className="text-purple-600 dark:text-purple-400">Functions should work together seamlessly</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <BookOpen className="w-6 h-6" />
                        Function Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@function name() {'{ ... }'}</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@return value;</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">name($param: default)</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">function-name(args)</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Common Patterns</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Unit conversions</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Color manipulations</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Math calculations</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Design system helpers</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Built-in Categories</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Color functions</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">Math functions</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">String functions</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">List/Map functions</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            Think of functions as computational tools that transform inputs into outputs. They're perfect for 
                            creating reusable calculations, unit conversions, and design system utilities that keep your 
                            stylesheets DRY and maintainable while enabling complex mathematical operations.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
