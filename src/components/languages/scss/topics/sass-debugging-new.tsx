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
  Bug, 
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Terminal,
  Search,
  Info
} from 'lucide-react';

interface SassDebuggingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassDebuggingNew({ onOpenWebPlayground }: SassDebuggingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Bug}
        category="Sass/SCSS · Advanced Features"
        title="Debugging & Error Handling"
        description="Use @debug, @warn, and @error directives for debugging and validation in your SCSS code."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Bug className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Debugging & Error Handling"
            description="Debug and validate SCSS code effectively"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            SCSS provides three powerful directives for debugging: <strong>@debug</strong> for logging values, <strong>@warn</strong> for non-critical warnings, and <strong>@error</strong> for stopping compilation when something is wrong. These tools help you catch bugs early and validate inputs!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">@debug</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Logs values to console</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300">@warn</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Shows warnings</p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-red-700 dark:text-red-300">@error</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Stops compilation</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* @debug */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="@debug - Logging Values"
            description="Print values during compilation"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic @debug Usage"
              code={`$primary-color: #3b82f6;
$spacing: 16px;

@debug "Primary color is: #{$primary-color}";
@debug "Spacing value: #{$spacing}";

.button {
  color: $primary-color;
  padding: $spacing;
}`}
              output={[
                '// Console output:',
                'DEBUG: "Primary color is: #3b82f6"',
                'DEBUG: "Spacing value: 16px"',
                '',
                '// Compiled CSS:',
                '.button { color: #3b82f6; padding: 16px; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Debugging Calculations"
              code={`$base: 16px;
$multiplier: 2;
$result: $base * $multiplier;

@debug "Base: #{$base}, Multiplier: #{$multiplier}";
@debug "Result: #{$result}";

.element {
  font-size: $result;
}`}
              output={[
                '// Console output:',
                'DEBUG: "Base: 16px, Multiplier: 2"',
                'DEBUG: "Result: 32px"',
                '',
                '.element { font-size: 32px; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Debugging Lists & Maps"
              code={`$colors: red, green, blue;
$theme: (
  primary: #3b82f6,
  secondary: #8b5cf6
);

@debug "Colors list: #{$colors}";
@debug "Theme map: #{$theme}";
@debug "Primary from map: #{map-get($theme, primary)}";

.text { color: map-get($theme, primary); }`}
              output={[
                '// Console output:',
                'DEBUG: "Colors list: red, green, blue"',
                'DEBUG: "Theme map: (primary: #3b82f6, secondary: #8b5cf6)"',
                'DEBUG: "Primary from map: #3b82f6"'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Console Output</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              @debug messages appear in your terminal/console during SCSS compilation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @warn */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="@warn - Non-Critical Warnings"
            description="Alert users without stopping compilation"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Deprecation Warnings"
              code={`@mixin old-button($color) {
  @warn "old-button() is deprecated. Use new-button() instead.";
  background: $color;
  padding: 10px;
}

@mixin new-button($color) {
  background: $color;
  padding: 12px 24px;
  border-radius: 8px;
}

.btn {
  @include old-button(blue);
}`}
              output={[
                '// Console warning:',
                'WARNING: old-button() is deprecated. Use new-button() instead.',
                '',
                '// Still compiles:',
                '.btn { background: blue; padding: 10px; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Value Validation"
              code={`@function calculate-size($size) {
  @if $size < 0 {
    @warn "Negative size (#{$size}) provided. Using 0 instead.";
    @return 0;
  }
  @return $size * 10px;
}

.box {
  width: calculate-size(-5);   // Warning triggered
  height: calculate-size(10);  // No warning
}`}
              output={[
                '// Console:',
                'WARNING: Negative size (-5) provided. Using 0 instead.',
                '',
                '.box { width: 0; height: 100px; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Browser Compatibility Warnings"
              code={`@mixin flex-layout($direction: row) {
  @if $direction == 'inline' {
    @warn "inline direction has limited browser support.";
  }
  
  display: flex;
  flex-direction: $direction;
}

.container {
  @include flex-layout('inline');
}`}
              output={[
                '// Warning:',
                'WARNING: inline direction has limited browser support.',
                '',
                '.container { display: flex; flex-direction: inline; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>

          <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
            <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Compilation Continues</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              @warn shows a message but doesn't stop the compilation process.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* @error */}
      <Card className="bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="@error - Stop Compilation"
            description="Halt compilation on critical errors"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Required Parameter Validation"
              code={`@mixin button($color) {
  @if $color == null {
    @error "Button mixin requires a $color parameter!";
  }
  
  background: $color;
  padding: 12px 24px;
}

.btn-primary {
  @include button(blue);     // OK
}

.btn-invalid {
  @include button(null);     // ERROR - stops here
}`}
              output={[
                '// Compilation stops with error:',
                'ERROR: Button mixin requires a $color parameter!',
                '',
                '// No CSS is generated after the error'
              ]}
              language="scss"
              colorTheme="red"
            />

            <CodeSnippetWithOutput
              title="Type Validation"
              code={`@function safe-divide($a, $b) {
  @if type-of($a) != 'number' {
    @error "$a must be a number, got #{type-of($a)}";
  }
  @if type-of($b) != 'number' {
    @error "$b must be a number, got #{type-of($b)}";
  }
  @if $b == 0 {
    @error "Cannot divide by zero!";
  }
  
  @return $a / $b;
}

.element {
  width: safe-divide(100px, 2);    // OK
  // width: safe-divide(100px, 0);  // Would error
}`}
              output={[
                '// If called with 0:',
                'ERROR: Cannot divide by zero!',
                '',
                '// Compilation stops'
              ]}
              language="scss"
              colorTheme="red"
            />

            <CodeSnippetWithOutput
              title="Range Validation"
              code={`@mixin set-opacity($value) {
  @if $value < 0 or $value > 1 {
    @error "Opacity must be between 0 and 1, got #{$value}";
  }
  
  opacity: $value;
}

.transparent {
  @include set-opacity(0.5);     // OK
}

.invalid {
  @include set-opacity(1.5);     // ERROR
}`}
              output={[
                '// Error message:',
                'ERROR: Opacity must be between 0 and 1, got 1.5',
                '',
                '// Compilation halts'
              ]}
              language="scss"
              colorTheme="red"
            />
          </div>

          <Alert className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-300 dark:border-red-700">
            <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Compilation Stops!</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              @error immediately halts compilation. Use it for critical validation failures.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Debugging Best Practices"
            description="When to use each directive"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Use @debug for:</h4>
                </div>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Inspecting variable values</li>
                  <li>• Tracking calculations</li>
                  <li>• Development debugging</li>
                  <li>• Testing functions</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use @warn for:</h4>
                </div>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Deprecation notices</li>
                  <li>• Suboptimal values</li>
                  <li>• Browser compatibility</li>
                  <li>• Best practice hints</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Use @error for:</h4>
                </div>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Required parameters</li>
                  <li>• Invalid types</li>
                  <li>• Out-of-range values</li>
                  <li>• Critical failures</li>
                </ul>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="Complete Validation Example"
              code={`@function calculate-spacing($multiplier, $base: 8px) {
  // Debug info
  @debug "Calculating spacing: #{$multiplier} × #{$base}";
  
  // Type validation (error)
  @if type-of($multiplier) != 'number' {
    @error "Multiplier must be a number!";
  }
  
  // Warning for unusual values
  @if $multiplier > 10 {
    @warn "Unusually large multiplier (#{$multiplier}). Are you sure?";
  }
  
  // Warning for negative values
  @if $multiplier < 0 {
    @warn "Negative multiplier (#{$multiplier}) will be converted to positive.";
    $multiplier: abs($multiplier);
  }
  
  $result: $multiplier * $base;
  @debug "Result: #{$result}";
  
  @return $result;
}

.box {
  padding: calculate-spacing(2);     // Debug + OK
  margin: calculate-spacing(12);     // Debug + Warning
}`}
              output={[
                '// Console:',
                'DEBUG: "Calculating spacing: 2 × 8px"',
                'DEBUG: "Result: 16px"',
                'DEBUG: "Calculating spacing: 12 × 8px"',
                'WARNING: Unusually large multiplier (12). Are you sure?',
                'DEBUG: "Result: 96px"',
                '',
                '.box { padding: 16px; margin: 96px; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Debugging in Action"
          description="Validated design system with error handling"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <div class="alert alert-info">
    <strong>Info:</strong> Using @debug for development
  </div>
  
  <div class="alert alert-warning">
    <strong>Warning:</strong> Using @warn for deprecations
  </div>
  
  <div class="alert alert-error">
    <strong>Error:</strong> Using @error for validation
  </div>
  
  <div class="card">
    <h3>Validated Spacing</h3>
    <p>All spacing values are validated and logged during compilation.</p>
  </div>
</div>`}
          css={`// SCSS with debugging (comments show what would happen)

// Variables with validation
$base-spacing: 8px;
$max-spacing: 10;

// @debug "Base spacing: #{$base-spacing}";

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
  padding: 2rem;
}

.container {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

// Alert system (demonstrating debug/warn/error concepts)
.alert {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
}

// Info (like @debug)
.alert-info {
  background: #dbeafe;
  border-left-color: #3b82f6;
  color: #1e40af;
  
  @media (prefers-color-scheme: dark) {
    background: #1e3a8a;
    color: #bfdbfe;
  }
}

// Warning (like @warn)
.alert-warning {
  background: #fef3c7;
  border-left-color: #f59e0b;
  color: #92400e;
  
  @media (prefers-color-scheme: dark) {
    background: #78350f;
    color: #fef08a;
  }
}

// Error (like @error)
.alert-error {
  background: #fee2e2;
  border-left-color: #ef4444;
  color: #991b1b;
  
  @media (prefers-color-scheme: dark) {
    background: #7f1d1d;
    color: #fecaca;
  }
}

// Card with validated spacing
.card {
  background: white;
  padding: 24px;  // $base-spacing * 3
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;  // $base-spacing * 2
    color: #667eea;
  }
  
  p {
    line-height: 1.6;
    color: #64748b;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
}`}
          title="Debugging Visualization"
          description="Visual representation of debug, warn, and error states"
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
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">@debug</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Logs values to console during compilation
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">@warn</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Shows warnings, continues compiling
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">@error</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Stops compilation on critical errors
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Validation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Catch bugs early with proper validation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
