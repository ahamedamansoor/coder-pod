'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Award, 
  CheckCircle2,
  Lightbulb,
  Info,
  AlertTriangle,
  FileCode,
  Layers,
  Zap
} from 'lucide-react';

interface SassBestPracticesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassBestPracticesNew({ onOpenWebPlayground }: SassBestPracticesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Award}
        category="Sass/SCSS · Best Practices"
        title="Best Practices"
        description="Write clean, maintainable, and professional SCSS code following industry standards."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Award className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Best Practices"
            description="Professional SCSS standards"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Follow these <strong>industry-standard best practices</strong> to write clean, maintainable SCSS that scales with your project!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Naming</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Clear, consistent names</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Organization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Logical file structure</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Performance</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Optimized output</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Naming Conventions */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Naming Conventions"
            description="Clear and consistent names"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good: Descriptive Names"
              code={`// Variables - descriptive, kebab-case
$primary-color: #3b82f6;
$base-font-size: 16px;
$header-height: 60px;
$transition-duration: 0.3s;

// Mixins - verb or action
@mixin flex-center { }
@mixin respond-to($breakpoint) { }
@mixin truncate-text { }

// Functions - describe what they return
@function rem($pixels) { }
@function strip-unit($number) { }
@function lighten-color($color, $amount) { }`}
              output={[
                '// Clear, self-documenting code'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="❌ Bad: Unclear Names"
              code={`// Bad variable names
$c: #3b82f6;        // What color?
$s: 16px;           // Size of what?
$h: 60px;           // Height of what?

// Bad mixin names
@mixin fc { }       // What does this do?
@mixin r($b) { }    // Unclear parameters

// Bad function names
@function x($y) { } // What does this return?`}
              output={[
                '// Unclear, hard to maintain'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Naming Rules</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>Variables:</strong> Describe what it is (<code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">$primary-color</code>)</li>
                <li><strong>Mixins:</strong> Use verbs (<code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">@mixin center-content</code>)</li>
                <li><strong>Functions:</strong> Describe return value (<code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">@function get-color</code>)</li>
                <li><strong>Classes:</strong> Follow BEM or chosen methodology</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Organization */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Variable Organization"
            description="Group related variables"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good: Organized Variables"
              code={`// ===== Colors =====
$color-primary: #3b82f6;
$color-secondary: #8b5cf6;
$color-success: #10b981;
$color-danger: #ef4444;
$color-warning: #f59e0b;

// ===== Typography =====
$font-primary: -apple-system, BlinkMacSystemFont, sans-serif;
$font-heading: 'Helvetica Neue', sans-serif;
$font-mono: 'Courier New', monospace;

$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.5rem;

// ===== Spacing =====
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

// ===== Breakpoints =====
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;

// ===== Z-Index Scale =====
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-modal: 1050;
$z-index-tooltip: 1070;`}
              output={[
                '// Well-organized, easy to find variables'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Group variables by <strong>category</strong> with clear section comments (=====). Makes finding variables easy!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Comments & Documentation"
            description="Explain the why, not the what"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good: Helpful Comments"
              code={`// Calculate rem from pixels
// Usage: font-size: rem(24px); // 1.5rem
@function rem($pixels) {
  @return ($pixels / 16px) * 1rem;
}

// Responsive mixin for mobile-first approach
// Generates min-width media queries
@mixin respond($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// Z-index scale - use these instead of random numbers
// Ensures consistent layering across the app
$z-index-dropdown: 1000;
$z-index-modal: 1050;

// HACK: IE11 requires this for flexbox bugs
// TODO: Remove when IE11 support is dropped
.ie11-flex-fix {
  flex: 1 1 auto;
}`}
              output={[
                '// Comments explain WHY and HOW to use'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="❌ Bad: Obvious Comments"
              code={`// Set color to blue
$color: blue;

// Add padding
.box {
  padding: 1rem; // Padding is 1rem
}

// Make it flex
.container {
  display: flex; // Display flex
}`}
              output={[
                '// Comments state the obvious'
              ]}
              language="scss"
              colorTheme="green"
            />

            <div className="p-5 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Comment Types</h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">// Inline comments</code>
                  <p className="mt-1">Not compiled to CSS. Use for SCSS-only notes.</p>
                </div>
                <div>
                  <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">/* Block comments */</code>
                  <p className="mt-1">Compiled to CSS. Use for important notes that should be in output.</p>
                </div>
                <div>
                  <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">/*! Important comments */</code>
                  <p className="mt-1">Always kept, even in compressed output. Use for licenses.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nesting Guidelines */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Nesting Guidelines"
            description="When and how to nest"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="✅ Good: Smart Nesting"
              code={`// Nest pseudo-classes, pseudo-elements, and modifiers
.button {
  padding: 0.5rem 1rem;
  background: blue;
  
  // Pseudo-classes
  &:hover {
    background: darkblue;
  }
  
  &:disabled {
    opacity: 0.5;
  }
  
  // Pseudo-elements
  &::before {
    content: '→';
  }
  
  // Modifiers
  &--large {
    padding: 1rem 2rem;
  }
  
  // Context-specific (use sparingly)
  .dark-theme & {
    background: lightblue;
  }
}`}
              output={[
                '.button { padding: 0.5rem 1rem; background: blue; }',
                '.button:hover { background: darkblue; }',
                '.button:disabled { opacity: 0.5; }',
                '.button::before { content: "→"; }',
                '.button--large { padding: 1rem 2rem; }',
                '.dark-theme .button { background: lightblue; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="❌ Bad: Excessive Nesting"
              code={`// Too deep - creates overly specific selectors
.header {
  .nav {
    .menu {
      .item {
        .link {
          color: blue;
        }
      }
    }
  }
}`}
              output={[
                '.header .nav .menu .item .link { color: blue; }',
                '// 5 levels! Way too specific!'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Nesting Limit</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Keep nesting to <strong>3 levels maximum</strong>. Deeper nesting creates specificity issues and hard-to-maintain code.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Don't Repeat Yourself */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="DRY Principle"
            description="Don't Repeat Yourself"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="❌ Bad: Repeated Code"
              code={`.button-primary {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  background: blue;
}

.button-secondary {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  background: gray;
}

.button-success {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  background: green;
}`}
              output={[
                '// Lots of repeated properties!'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="✅ Good: DRY with Mixins"
              code={`@mixin button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.button-primary {
  @include button-base;
  background: blue;
}

.button-secondary {
  @include button-base;
  background: gray;
}

.button-success {
  @include button-base;
  background: green;
}`}
              output={[
                '// Reusable, maintainable code'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="✅ Better: DRY with @extend"
              code={`%button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.button-primary {
  @extend %button-base;
  background: blue;
}

.button-secondary {
  @extend %button-base;
  background: gray;
}

.button-success {
  @extend %button-base;
  background: green;
}`}
              output={[
                '.button-primary, .button-secondary, .button-success {',
                '  padding: 0.5rem 1rem;',
                '  border: none;',
                '  border-radius: 4px;',
                '  font-weight: 600;',
                '  cursor: pointer;',
                '}',
                '.button-primary { background: blue; }',
                '.button-secondary { background: gray; }',
                '.button-success { background: green; }',
                '// Grouped for efficiency!'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices Checklist */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices Checklist"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">✅ Code Quality</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Use descriptive variable names</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Group related variables</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Comment WHY, not WHAT</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Follow naming conventions</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">✅ Structure</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Limit nesting to 3 levels</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Use partials for organization</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Follow an architecture (BEM, 7-1)</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Keep files focused and small</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">✅ Performance</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Use placeholders (%) for @extend</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Minimize @import usage</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Calculate once, reuse</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Compress for production</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">✅ Maintainability</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Follow DRY principle</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Use mixins for repeated patterns</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Keep selectors simple</div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded">• Document complex logic</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
