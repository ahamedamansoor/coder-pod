'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Share2, 
  FileStack,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  Eye,
  EyeOff
} from 'lucide-react';

interface SassForwardNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassForwardNew({ onOpenWebPlayground }: SassForwardNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Share2}
        category="Sass/SCSS · File Organization"
        title="@forward Rule"
        description="Learn how to re-export modules with @forward. Create library APIs, aggregate multiple modules, and control member visibility with show/hide."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Share2 className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What is @forward?"
            description="Re-export modules to create APIs"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>@forward</strong> makes a module's members available when someone uses your file. It's perfect for creating <strong>library APIs</strong> and <strong>aggregating multiple modules</strong> into a single entry point. Think of it as "passing through" another module's exports!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <FileStack className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">@use</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                For using modules in your file
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 font-mono text-xs border border-blue-200 dark:border-blue-800">
                <div className="text-gray-700 dark:text-gray-300">@use 'colors';</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">// Use in THIS file</div>
                <div className="text-gray-700 dark:text-gray-300">color: colors.$primary;</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">@forward</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                For re-exporting to other files
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@forward 'colors';</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">// Available to OTHERS</div>
                <div className="text-gray-700 dark:text-gray-300">// who use this file</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Create Library APIs!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Use @forward to create a single entry point that re-exports multiple modules. Perfect for organizing large projects!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic @forward */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Basic @forward"
            description="Re-export a module"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@forward</code> to make another module's members available through your file.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_colors.scss"
              description="Module with color variables"
              code={`$primary: #3b82f6;
$secondary: #8b5cf6;
$success: #10b981;`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="_typography.scss"
              description="Module with typography"
              code={`$font-family: 'Inter', sans-serif;
$font-size-base: 1rem;
$font-weight-bold: 700;`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="_index.scss"
              description="Aggregate file forwarding both modules"
              code={`// Forward both modules
@forward 'colors';
@forward 'typography';

// Now anyone who uses _index.scss
// gets access to BOTH modules!`}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Use the aggregated module"
              code={`// Load the index (entry point)
@use 'index';

// Access members from both forwarded modules
.button {
  background: index.$primary;        // from colors
  font-family: index.$font-family;   // from typography
  font-weight: index.$font-weight-bold;
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Single Entry Point!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Instead of loading many files separately, users only need to load your index file which forwards everything!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Typical Use Case */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileStack className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Typical Use Case"
            description="Organize a design system"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Here's a typical project structure using @forward to create a clean API:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300">File Structure</h5>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-xs border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="text-gray-700 dark:text-gray-300">design-system/</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-3">├── _index.scss</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-3">├── base/</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-6">├── _colors.scss</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-6">├── _typography.scss</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-6">└── _spacing.scss</div>
                  <div className="text-gray-700 dark:text-gray-300 ml-3">└── components/</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-6">├── _buttons.scss</div>
                  <div className="text-blue-600 dark:text-blue-400 ml-6">└── _cards.scss</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300">_index.scss</h5>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-xs border border-purple-200 dark:border-purple-800 space-y-1">
                  <div className="text-green-600 dark:text-green-400">// Forward all base</div>
                  <div className="text-gray-700 dark:text-gray-300">@forward 'base/colors';</div>
                  <div className="text-gray-700 dark:text-gray-300">@forward 'base/typography';</div>
                  <div className="text-gray-700 dark:text-gray-300">@forward 'base/spacing';</div>
                  <div className="text-green-600 dark:text-green-400 mt-2">// Forward components</div>
                  <div className="text-gray-700 dark:text-gray-300">@forward 'components/buttons';</div>
                  <div className="text-gray-700 dark:text-gray-300">@forward 'components/cards';</div>
                </div>
              </div>
            </div>
          </div>

          <CodeSnippetWithOutput
            title="app.scss"
            description="Simple! Just load the design system"
            code={`// Load the entire design system
@use 'design-system' as ds;

// Access everything through one namespace
.my-button {
  background: ds.$primary;
  font-family: ds.$font-family;
  padding: ds.$spacing-md;
}`}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Show and Hide */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Controlling Visibility"
            description="Use show and hide"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Control which members get forwarded with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">show</code> and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">hide</code>.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  show - Only Forward Specific Members
                </h5>
                <CodeSnippetWithOutput
                  title="Forward only selected members"
                  code={`// _colors.scss
$primary: #3b82f6;
$secondary: #8b5cf6;
$-internal: #1e293b;
$-debug: #ef4444;

// _index.scss
// Only forward primary and secondary
@forward 'colors' show $primary, $secondary;

// $-internal and $-debug are NOT forwarded`}
                  language="scss"
                  colorTheme="green"
                />
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 flex items-center gap-2">
                  <EyeOff className="w-5 h-5" />
                  hide - Forward Everything Except
                </h5>
                <CodeSnippetWithOutput
                  title="Forward all except specific members"
                  code={`// _colors.scss
$primary: #3b82f6;
$secondary: #8b5cf6;
$-internal: #1e293b;
$-debug: #ef4444;

// _index.scss
// Forward all except internal and debug
@forward 'colors' hide $-internal, $-debug;`}
                  language="scss"
                  colorTheme="orange"
                />
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Private Members Already Hidden</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Members starting with <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">-</code> or <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">_</code> are automatically private and won't be forwarded!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Add Prefix */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Adding Prefixes"
            description="Use 'as' to add namespace prefix"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Add a prefix to forwarded members to avoid naming conflicts.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_buttons.scss"
              description="Button colors"
              code={`$primary: #3b82f6;
$secondary: #8b5cf6;
$danger: #ef4444;`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="_index.scss"
              description="Forward with prefix"
              code={`// Add 'btn-' prefix to all button variables
@forward 'buttons' as btn-*;

// Now they're accessible as:
// $btn-primary
// $btn-secondary
// $btn-danger`}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Use prefixed members"
              code={`@use 'index';

.button {
  background: index.$btn-primary;
  
  &.secondary {
    background: index.$btn-secondary;
  }
  
  &.danger {
    background: index.$btn-danger;
  }
}`}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* @use and @forward Together */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileStack className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="@use and @forward Together"
            description="Use in this file AND forward to others"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@forward</code> to pass through AND <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@use</code> to use in the same file.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_theme.scss"
              description="Use colors locally AND forward them"
              code={`// Forward colors to users of this file
@forward 'colors';

// ALSO use colors in THIS file
@use 'colors';

// Use colors to create derived values
$accent: colors.$primary;
$hover: darken(colors.$primary, 10%);

// These derived values are also available to users`}
              language="scss"
              colorTheme="cyan"
            />
          </div>

          <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Order Matters!</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Always put <code className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">@forward</code> before <code className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">@use</code> in your file!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real World Example */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Real World Example"
            description="Material Design System"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="material/_index.scss"
              description="Main entry point"
              code={`// Forward all base tokens
@forward 'tokens/colors';
@forward 'tokens/typography';
@forward 'tokens/elevation';

// Forward all components
@forward 'components/button';
@forward 'components/card';
@forward 'components/dialog';

// Use tokens to create utilities
@use 'tokens/colors';
@use 'tokens/spacing';

// Theme utilities available to users
$theme-primary: colors.$blue-500;
$theme-spacing: spacing.$base;`}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="app.scss"
              description="One import for everything!"
              code={`// Import the entire Material design system
@use 'material' as mat;

// Access tokens
.app {
  color: mat.$theme-primary;
  font-family: mat.$font-family;
}

// Access components
.my-button {
  @include mat.button-base;
  @include mat.button-filled(mat.$theme-primary);
}

.my-card {
  @include mat.card;
  @include mat.elevation-2;
}`}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Re-export Modules</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @forward makes modules available to your users
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Create APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for library and design system entry points
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">show / hide</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Control which members get forwarded
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">as prefix-*</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add prefixes to avoid naming conflicts
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Module System Complete!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You now understand the complete modern Sass module system: <strong>@use</strong> for loading, <strong>@forward</strong> for re-exporting! 🎉
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
