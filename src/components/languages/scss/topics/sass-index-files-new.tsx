'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FileStack, 
  Folder,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  FolderOpen,
  Layers
} from 'lucide-react';

interface SassIndexFilesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassIndexFilesNew({ onOpenWebPlayground }: SassIndexFilesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileStack}
        category="Sass/SCSS · File Organization"
        title="Index Files"
        description="Learn how to use _index.scss files to create directory-level entry points. Simplify imports and create clean API boundaries for your style modules."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileStack className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Index Files?"
            description="Directory-level entry points"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Index files</strong> (<code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_index.scss</code>) are special files that serve as <strong>entry points for directories</strong>. When you load a directory, Sass automatically looks for and loads its index file. This lets you create clean APIs and simplify imports!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Without Index Files</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Import each file individually
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">@use 'base/colors';</div>
                <div className="text-gray-700 dark:text-gray-300">@use 'base/typography';</div>
                <div className="text-gray-700 dark:text-gray-300">@use 'base/spacing';</div>
                <div className="text-red-600 dark:text-red-400 text-[10px] mt-1">3 separate imports</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <FileStack className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">With Index File</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Import the whole directory
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">@use 'base';</div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">// Gets all 3 automatically!</div>
                <div className="text-green-600 dark:text-green-400 text-[10px] mt-1">✓ One import!</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Automatic Loading!</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              When you <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@use 'folder'</code>, Sass automatically loads <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">folder/_index.scss</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Index Files */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Folder className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Creating Index Files"
            description="Forward all files in a directory"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Create an <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_index.scss</code> file in a directory and use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@forward</code> to re-export all files.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300">Directory Structure</h5>
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-xs border border-blue-200 dark:border-blue-800 space-y-1">
                    <div className="text-gray-700 dark:text-gray-300">base/</div>
                    <div className="text-green-600 dark:text-green-400 ml-3">├── _index.scss    ← Entry point!</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-3">├── _colors.scss</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-3">├── _typography.scss</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-3">└── _spacing.scss</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300">base/_index.scss</h5>
                <CodeSnippetWithOutput
                  title="Forward all files"
                  code={`// Forward all partials in this directory
@forward 'colors';
@forward 'typography';
@forward 'spacing';

// Now users can do:
// @use 'base';
// and get all three!`}
                  language="scss"
                  colorTheme="blue"
                />
              </div>
            </div>

            <CodeSnippetWithOutput
              title="main.scss"
              description="Use the directory (loads index automatically)"
              code={`// Import the entire base directory
@use 'base';

// Access all forwarded members
.container {
  color: base.$primary-color;        // from colors
  font-family: base.$font-family;    // from typography
  padding: base.$spacing-lg;         // from spacing
}`}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Nested Directory Structure */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Nested Directory Structure"
            description="Index files in subdirectories"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            You can have index files at multiple levels to create a hierarchical structure.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300">Full Structure</h5>
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 font-mono text-xs border border-purple-200 dark:border-purple-800 space-y-1">
                    <div className="text-gray-700 dark:text-gray-300">styles/</div>
                    <div className="text-green-600 dark:text-green-400 ml-3">├── _index.scss       ← Main entry</div>
                    <div className="text-gray-700 dark:text-gray-300 ml-3">├── base/</div>
                    <div className="text-green-600 dark:text-green-400 ml-6">├── _index.scss   ← Base entry</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-6">├── _colors.scss</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-6">└── _typography.scss</div>
                    <div className="text-gray-700 dark:text-gray-300 ml-3">└── components/</div>
                    <div className="text-green-600 dark:text-green-400 ml-6">├── _index.scss   ← Components entry</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-6">├── _buttons.scss</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-6">└── _cards.scss</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300">Index Files</h5>
                <div className="space-y-3">
                  <CodeSnippetWithOutput
                    title="base/_index.scss"
                    code={`@forward 'colors';
@forward 'typography';`}
                    language="scss"
                    colorTheme="purple"
                  />
                  
                  <CodeSnippetWithOutput
                    title="components/_index.scss"
                    code={`@forward 'buttons';
@forward 'cards';`}
                    language="scss"
                    colorTheme="purple"
                  />
                </div>
              </div>
            </div>

            <CodeSnippetWithOutput
              title="styles/_index.scss"
              description="Main entry point forwarding subdirectories"
              code={`// Forward all subdirectories
@forward 'base';
@forward 'components';

// Now users can import everything with:
// @use 'styles';`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="app.scss"
              description="One import for everything!"
              code={`// Import the entire styles system
@use 'styles';

// Access everything through one namespace
.app {
  // From base/colors
  color: styles.$primary-color;
  
  // From base/typography
  font-family: styles.$font-family;
}

// Use components
.my-button {
  // Inherits from components/buttons
  @extend styles.%button-base;
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Real World Example */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FolderOpen className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Real World Example"
            description="Design system organization"
            size="lg"
          />

          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-xs border border-green-200 dark:border-green-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">design-system/</div>
                <div className="text-green-600 dark:text-green-400 ml-3">├── _index.scss                ← Main API</div>
                <div className="text-gray-700 dark:text-gray-300 ml-3">├── tokens/</div>
                <div className="text-green-600 dark:text-green-400 ml-6">├── _index.scss            ← Tokens API</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _colors.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _spacing.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">└── _typography.scss</div>
                <div className="text-gray-700 dark:text-gray-300 ml-3">├── components/</div>
                <div className="text-green-600 dark:text-green-400 ml-6">├── _index.scss            ← Components API</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _button.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _card.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">└── _input.scss</div>
                <div className="text-gray-700 dark:text-gray-300 ml-3">└── utilities/</div>
                <div className="text-green-600 dark:text-green-400 ml-6">├── _index.scss            ← Utilities API</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _mixins.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">└── _functions.scss</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <CodeSnippetWithOutput
                title="tokens/_index.scss"
                code={`@forward 'colors';
@forward 'spacing';
@forward 'typography';`}
                language="scss"
                colorTheme="green"
              />

              <CodeSnippetWithOutput
                title="components/_index.scss"
                code={`@forward 'button';
@forward 'card';
@forward 'input';`}
                language="scss"
                colorTheme="green"
              />

              <CodeSnippetWithOutput
                title="utilities/_index.scss"
                code={`@forward 'mixins';
@forward 'functions';`}
                language="scss"
                colorTheme="green"
              />

              <CodeSnippetWithOutput
                title="design-system/_index.scss"
                code={`@forward 'tokens';
@forward 'components';
@forward 'utilities';`}
                language="scss"
                colorTheme="green"
              />
            </div>

            <CodeSnippetWithOutput
              title="app.scss"
              description="Simple, clean import"
              code={`// One line to import the entire design system!
@use 'design-system' as ds;

// Access tokens
.container {
  color: ds.$primary-color;
  padding: ds.$spacing-lg;
  font-family: ds.$font-family;
}

// Use utilities
.card {
  @include ds.elevation(2);
  @include ds.rounded;
}

// Access components
.my-button {
  @extend ds.%button-base;
}`}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Perfect for Libraries!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Index files are ideal for creating design systems and component libraries with clean, simple APIs!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Best Practices"
            description="Tips for using index files"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                One Per Directory
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only one _index.scss per directory
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Forward Only
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use @forward, not @use in index files
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Logical Grouping
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Group related files in same directory
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Document Structure
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add comments explaining the organization
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">_index.scss</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Special file loaded automatically
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Directory Entry Point</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Import folder, get its index
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Use @forward</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Re-export all files in the directory
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Clean APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for libraries and design systems
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">File Organization Complete!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've mastered all file organization techniques: partials, @import, @use, @forward, load paths, and index files! 🎉
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
