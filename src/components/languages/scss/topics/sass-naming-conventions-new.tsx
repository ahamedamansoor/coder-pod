'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FileText, 
  CheckCircle2,
  Lightbulb,
  Info,
  AlertTriangle,
  Code,
  Tag,
  Hash
} from 'lucide-react';

interface SassNamingConventionsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassNamingConventionsNew({ onOpenWebPlayground }: SassNamingConventionsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileText}
        category="Sass/SCSS · Best Practices"
        title="Naming Conventions"
        description="Clear, consistent naming rules for variables, mixins, functions, and classes in SCSS."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Naming Conventions"
            description="Write self-documenting code"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Good <strong>naming conventions</strong> make your SCSS code self-documenting and easy to maintain. Follow these industry-standard practices!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <Tag className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">Variables</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Descriptive, kebab-case</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Code className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Mixins</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Action verbs</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <Hash className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Functions</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Return value description</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Naming */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Tag className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Variable Naming"
            description="Descriptive, kebab-case"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good Variable Names"
              code={`// Colors - describe what it is
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$success-color: #10b981;
$danger-color: #ef4444;
$text-color: #333333;
$background-color: #ffffff;

// Typography - clear purpose
$font-family-primary: -apple-system, sans-serif;
$font-family-heading: 'Helvetica Neue', sans-serif;
$font-family-mono: 'Courier New', monospace;

$font-size-small: 0.875rem;
$font-size-base: 1rem;
$font-size-large: 1.125rem;
$font-weight-normal: 400;
$font-weight-bold: 700;

// Spacing - organized scale
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

// Breakpoints - descriptive sizes
$breakpoint-mobile: 640px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-wide: 1280px;

// Z-index - layering system
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-modal: 1050;
$z-index-tooltip: 1070;`}
              output={[
                '// Clear, self-documenting variable names'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="❌ Bad Variable Names"
              code={`// Too short - unclear meaning
$c: #3b82f6;           // What color?
$s: 0.5rem;            // Size of what?
$f: 'Arial';           // Font for what?
$bp: 768px;            // Breakpoint for what?

// Abbreviated - hard to understand
$pri: #3b82f6;         // Primary? Print? Priority?
$sec: #8b5cf6;         // Secondary? Section? Seconds?
$btn-bg: blue;         // Better: $button-background

// Using camelCase (not standard for SCSS)
$primaryColor: #3b82f6;    // Use kebab-case instead
$fontSize: 1rem;           // Use $font-size

// Numbers without context
$size-1: 0.5rem;       // Better: $spacing-sm
$color-1: #3b82f6;     // Better: $primary-color`}
              output={[
                '// Unclear, hard to maintain'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Variable Naming Rules</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Use <strong>kebab-case</strong> (lowercase with hyphens). Be <strong>descriptive</strong> - code is read more than written!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Mixin Naming */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Mixin Naming"
            description="Use action verbs"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good Mixin Names"
              code={`// Action verbs - describe what it does
@mixin center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin truncate-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin respond-to($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

@mixin button-variant($bg, $color) {
  background: $bg;
  color: $color;
}

@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}`}
              output={[
                '// Action-oriented, clear purpose'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="❌ Bad Mixin Names"
              code={`// Unclear purpose
@mixin stuff { }           // What does it do?
@mixin helper { }          // What does it help with?
@mixin thing { }           // Too generic

// Noun instead of verb
@mixin flex { }            // Better: @mixin flexbox-container
@mixin text { }            // Better: @mixin style-text

// Abbreviated
@mixin btn($c) { }         // Better: @mixin button-style($color)
@mixin resp { }            // Better: @mixin responsive`}
              output={[
                '// Unclear, hard to understand'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Info className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Mixin Naming Rules</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Start with <strong>action verbs</strong> (center, truncate, respond, style). Makes it clear what the mixin does!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Function Naming */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Function Naming"
            description="Describe what it returns"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good Function Names"
              code={`// Describe return value
@function rem($pixels) {
  @return ($pixels / 16px) * 1rem;
}

@function get-color($name) {
  @return map-get($colors, $name);
}

@function strip-unit($number) {
  @return $number / ($number * 0 + 1);
}

@function lighten-color($color, $amount) {
  @return lighten($color, $amount);
}

@function calculate-spacing($multiplier) {
  @return $base-spacing * $multiplier;
}

@function is-dark-color($color) {
  @return lightness($color) < 50%;
}

@function generate-gradient($start, $end) {
  @return linear-gradient(135deg, $start, $end);
}`}
              output={[
                '// Clear what the function returns'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="❌ Bad Function Names"
              code={`// Unclear return value
@function convert($x) { }      // Convert to what?
@function do($y) { }           // Do what?
@function process { }          // Process what?

// Too generic
@function helper { }           // What does it return?
@function util($val) { }       // Unclear purpose

// Action verb (use for mixins, not functions)
@function calculate { }        // Better: calculate-value or get-calculated-value`}
              output={[
                '// Unclear return value'
              ]}
              language="scss"
              colorTheme="green"
            />

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Function Naming Rules</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Name functions based on <strong>what they return</strong>. Use prefixes like <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">get-</code>, <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">calculate-</code>, <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">is-</code>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Class Naming (BEM) */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Class Naming (BEM)"
            description="Block Element Modifier"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good BEM Class Names"
              code={`// Block - component name
.button { }
.card { }
.menu { }
.header { }

// Element - part of block (__)
.button__icon { }
.button__text { }
.card__title { }
.card__body { }
.menu__item { }
.menu__link { }

// Modifier - variation (---)
.button--primary { }
.button--large { }
.card--featured { }
.card--compact { }
.menu__item--active { }
.menu__item--disabled { }

// Complete example
.product-card { }
.product-card__image { }
.product-card__title { }
.product-card__price { }
.product-card__button { }
.product-card--featured { }
.product-card__price--sale { }`}
              output={[
                '// BEM: .block__element--modifier',
                '// Clear hierarchy and relationships'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="❌ Bad Class Names"
              code={`// Too generic
.btn { }               // Better: .button
.img { }               // Better: .image or context-specific
.txt { }               // Better: .text or .title

// Confusing hierarchy
.card-title-text { }   // Use BEM: .card__title
.button_icon { }       // Use BEM: .button__icon

// Too deep nesting
.menu__item__link__icon { }  // Too deep! Keep it flat

// Inconsistent separators
.card-title { }        // Dash
.card_body { }         // Underscore
.cardFooter { }        // camelCase
// Pick one convention and stick to it!

// Not descriptive
.wrapper { }           // Wrapper for what?
.container { }         // Container for what?
.item { }              // What kind of item?`}
              output={[
                '// Inconsistent, unclear'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* File Naming */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="File Naming"
            description="Partials and organization"
            size="lg"
          />

          <div className="space-y-6">
            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
              <div className="space-y-1">
                <div className="text-green-400">// ✅ Good file names</div>
                <div>_variables.scss</div>
                <div>_mixins.scss</div>
                <div>_functions.scss</div>
                <div>_button.scss</div>
                <div>_card.scss</div>
                <div>_header.scss</div>
                <div>_footer.scss</div>
                <div>main.scss</div>
                <div className="mt-4 text-red-400">// ❌ Bad file names</div>
                <div>styles.scss          <span className="text-gray-500">// Too generic</span></div>
                <div>Button.scss          <span className="text-gray-500">// Use lowercase</span></div>
                <div>_button_component.scss  <span className="text-gray-500">// Redundant</span></div>
                <div>component.scss      <span className="text-gray-500">// What component?</span></div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">File Naming Rules</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Partials:</strong> Prefix with underscore <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_button.scss</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lowercase:</strong> Use all lowercase letters <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_header.scss</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hyphens:</strong> Separate words with hyphens <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_user-profile.scss</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Descriptive:</strong> Name matches content <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_navigation.scss</code></span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Naming Patterns */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Tag className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Common Naming Patterns"
            description="Standard prefixes and suffixes"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-3">Variable Patterns</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">$color-*</code> - Colors</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">$font-*</code> - Typography</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">$spacing-*</code> - Spacing scale</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">$breakpoint-*</code> - Breakpoints</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">$z-index-*</code> - Z-index scale</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-3">Function Patterns</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">get-*</code> - Retrieve value</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">calculate-*</code> - Calculate result</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">is-*</code> - Boolean check</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">to-*</code> - Convert to type</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">strip-*</code> - Remove something</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-3">Mixin Patterns</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">*-style</code> - Apply styling</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">*-variant</code> - Create variant</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">respond-*</code> - Responsive</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">center-*</code> - Centering</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">generate-*</code> - Generate styles</div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-3">Class Patterns (States)</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">.is-*</code> - Current state</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">.has-*</code> - Has feature</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">.u-*</code> - Utility class</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">.js-*</code> - JavaScript hook</div>
                <div><code className="bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">.t-*</code> - Theme variant</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Quick Reference"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Variables</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ <code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">$primary-color</code></li>
                <li>✅ <code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">$font-size-large</code></li>
                <li>❌ <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">$c</code> or <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">$fontSize</code></li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Mixins</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ <code className="bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">@mixin center-content</code></li>
                <li>✅ <code className="bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">@mixin button-style</code></li>
                <li>❌ <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">@mixin btn</code> or <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">@mixin helper</code></li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Functions</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">@function rem($px)</code></li>
                <li>✅ <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">@function get-color</code></li>
                <li>❌ <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">@function x($y)</code></li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Classes (BEM)</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ <code className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">.card__title</code></li>
                <li>✅ <code className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">.button--primary</code></li>
                <li>❌ <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">.btn</code> or <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">.cardTitle</code></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
