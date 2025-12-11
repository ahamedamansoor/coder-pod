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
  FileCode,
  Book,
  MessageSquare,
  Terminal
} from 'lucide-react';

interface SassDocumentationNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassDocumentationNew({ onOpenWebPlayground }: SassDocumentationNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={FileText}
        category="Sass/SCSS · Testing & Quality"
        title="Documentation"
        description="Document your Sass code with SassDoc for maintainable, well-documented stylesheets."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Documentation"
            description="SassDoc and inline comments"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>SassDoc</strong> is a documentation system for Sass, similar to JSDoc for JavaScript. It generates beautiful documentation from comments in your SCSS files, making your code easier to understand and maintain!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Organized</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Generated documentation site</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Annotations</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Describe functions, mixins, variables</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Searchable</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Easy to find what you need</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Document?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Good documentation helps <strong>teams collaborate</strong>, makes onboarding easier, and keeps your codebase maintainable over time!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installing SassDoc"
            description="Setup documentation generator"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install SassDoc"
            code={`# Install SassDoc globally
npm install -g sassdoc

# Or as dev dependency
npm install --save-dev sassdoc`}
            output={[
              '✅ SassDoc installed',
              '// Documentation generator for Sass'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <CodeSnippetWithOutput
            title="Generate Documentation"
            code={`# Generate docs from SCSS files
sassdoc src/scss

# Custom output directory
sassdoc src/scss --dest docs

# With config file
sassdoc src/scss --config .sassdocrc`}
            output={[
              '✅ Documentation generated',
              '// Open docs/index.html to view'
            ]}
            language="scss"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Documenting Functions"
            description="Annotate custom functions"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Function Documentation"
            code={`/// Converts pixels to rem units
/// @param {Number} $px - Value in pixels
/// @return {Number} - Value in rem
/// @example scss
///   .element {
///     font-size: to-rem(16px); // 1rem
///   }
@function to-rem($px) {
  @return ($px / 16px) * 1rem;
}

/// Doubles the input value
/// @param {Number} $value - Value to double
/// @return {Number} - Doubled value
/// @example scss
///   .box {
///     width: double(50px); // 100px
///   }
@function double($value) {
  @return $value * 2;
}

/// Calculates fluid typography size
/// @param {Number} $min - Minimum size
/// @param {Number} $max - Maximum size
/// @param {Number} $min-vw [320px] - Minimum viewport width
/// @param {Number} $max-vw [1200px] - Maximum viewport width
/// @return {String} - Fluid calc() value
/// @example scss
///   h1 {
///     font-size: fluid-type(1.5rem, 3rem);
///   }
@function fluid-type($min, $max, $min-vw: 320px, $max-vw: 1200px) {
  $slope: ($max - $min) / ($max-vw - $min-vw);
  $intercept: $min - $slope * $min-vw;
  @return calc(#{$intercept} + #{$slope * 100vw});
}`}
            output={[
              '✅ Functions documented',
              '// SassDoc generates API reference'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Documenting Mixins"
            description="Annotate reusable mixins"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Mixin Documentation"
            code={`/// Creates a flexbox container with centering
/// @output Flexbox properties for centering content
/// @example scss
///   .container {
///     @include flex-center;
///   }
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/// Applies responsive breakpoint styles
/// @param {String} $breakpoint - Breakpoint name (sm, md, lg, xl)
/// @content Styles to apply at this breakpoint
/// @example scss
///   .element {
///     font-size: 14px;
///     
///     @include respond-to(md) {
///       font-size: 16px;
///     }
///   }
@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (min-width: 640px) { @content; }
  } @else if $breakpoint == md {
    @media (min-width: 768px) { @content; }
  } @else if $breakpoint == lg {
    @media (min-width: 1024px) { @content; }
  }
}

/// Creates a button with theme colors
/// @param {Color} $bg [$primary] - Background color
/// @param {Color} $text [white] - Text color
/// @param {String} $size [medium] - Button size (small, medium, large)
/// @output Button styles with hover states
/// @example scss
///   .btn-primary {
///     @include button($primary, white, large);
///   }
@mixin button($bg: $primary, $text: white, $size: medium) {
  background: $bg;
  color: $text;
  padding: if($size == small, 0.5rem 1rem, if($size == large, 1rem 2rem, 0.75rem 1.5rem));
  
  &:hover {
    background: darken($bg, 10%);
  }
}`}
            output={[
              '✅ Mixins documented',
              '// Parameters and usage examples included'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Documenting Variables"
            description="Describe design tokens"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Variable Documentation"
            code={`/// Primary brand color
/// @type Color
$primary: #3b82f6;

/// Secondary brand color
/// @type Color
$secondary: #8b5cf6;

/// Base font size for the application
/// @type Number
$base-font-size: 16px;

/// Spacing scale (8px grid system)
/// @type Map
/// @prop {Number} xs [0.25rem] - Extra small spacing
/// @prop {Number} sm [0.5rem] - Small spacing
/// @prop {Number} md [1rem] - Medium spacing
/// @prop {Number} lg [2rem] - Large spacing
/// @prop {Number} xl [4rem] - Extra large spacing
$spacing: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 2rem,
  xl: 4rem
);

/// Responsive breakpoints
/// @type Map
/// @prop {Number} sm [640px] - Small screens
/// @prop {Number} md [768px] - Medium screens
/// @prop {Number} lg [1024px] - Large screens
/// @prop {Number} xl [1280px] - Extra large screens
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px
);`}
            output={[
              '✅ Variables documented',
              '// Design tokens clearly described'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Book className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="SassDoc Annotations"
            description="Available annotation types"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">@param</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Describe function/mixin parameters
              </p>
              <code className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded block mt-2">
                @param &#123;Type&#125; $name - Description
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">@return</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Describe function return value
              </p>
              <code className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded block mt-2">
                @return &#123;Type&#125; - Description
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">@example</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Show usage example
              </p>
              <code className="text-xs bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded block mt-2">
                @example scss - Example code
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">@type</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Specify variable type
              </p>
              <code className="text-xs bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded block mt-2">
                @type Color | Number | String | Map
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">@output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Describe mixin output
              </p>
              <code className="text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded block mt-2">
                @output CSS properties description
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-teal-500">
              <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">@content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Indicate mixin accepts content block
              </p>
              <code className="text-xs bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded block mt-2">
                @content Description of content block
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Configuration"
            description=".sassdocrc configuration file"
            size="lg"
          />

          <CodeSnippetWithOutput
            title=".sassdocrc (YAML)"
            code={`# Project info
package: ./package.json
theme: default
dest: docs

# Source directory
src:
  - src/scss

# Options
verbose: true
strict: true

# Groups
groups:
  functions: Functions
  mixins: Mixins
  variables: Variables
  
# Display options
display:
  access:
    - public
  alias: false
  watermark: true

# Custom theme config
theme_options:
  title: "My SCSS Library"
  description: "Comprehensive style utilities"
  logo: "assets/logo.png"`}
            output={[
              '✅ SassDoc configured',
              '// Customized documentation generation'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="NPM Scripts"
            description="Automate documentation generation"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="package.json"
            code={`{
  "scripts": {
    "docs": "sassdoc src/scss",
    "docs:watch": "sassdoc src/scss --watch",
    "docs:serve": "sassdoc src/scss && http-server docs"
  },
  "devDependencies": {
    "sassdoc": "^2.7.4",
    "http-server": "^14.1.1"
  }
}`}
            output={[
              '// npm run docs → Generate documentation',
              '// npm run docs:watch → Watch for changes',
              '// npm run docs:serve → Generate and serve'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Document All Public APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Functions, mixins, and variables used by others
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Include Examples</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">@example</code> to show usage
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Describe Parameters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Type and purpose of each parameter
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Keep It Updated</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update docs when code changes
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Clear Descriptions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Write for developers who don't know your code
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Document Internals</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Private functions/mixins don't need SassDoc
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Generic Descriptions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "This function does stuff" is not helpful
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use SassDoc</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate beautiful API documentation
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Annotate APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Document functions, mixins, variables
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Include Examples</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Show how to use your code
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Keep Updated</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Maintain docs with code changes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
