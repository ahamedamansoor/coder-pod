'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FolderOpen, 
  File,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Code2,
  FileText,
  Layers
} from 'lucide-react';

interface SassPartialsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassPartialsNew({ onOpenWebPlayground }: SassPartialsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FolderOpen}
        category="Sass/SCSS · File Organization"
        title="Partials"
        description="Learn how to split your SCSS into modular files using partials. Create maintainable, organized stylesheets with the underscore naming convention."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FolderOpen className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="What are Partials?"
            description="Modular SCSS files that start with underscore"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Partials</strong> are SCSS files that start with an <strong>underscore (_)</strong>. They are meant to be <strong>imported</strong> into other SCSS files and won't be compiled into separate CSS files. This lets you organize your styles into smaller, maintainable modules!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                <File className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-300">Regular SCSS File</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Compiles to its own CSS file
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-3 font-mono text-xs border border-red-200 dark:border-red-800">
                <div className="text-gray-700 dark:text-gray-300">styles.scss</div>
                <div className="text-green-600 dark:text-green-400 mt-2">↓ Compiles to:</div>
                <div className="text-gray-700 dark:text-gray-300">styles.css</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-300">Partial File</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Won't compile on its own
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 font-mono text-xs border border-green-200 dark:border-green-800">
                <div className="text-gray-700 dark:text-gray-300">_variables.scss</div>
                <div className="text-green-600 dark:text-green-400 mt-2">✓ Import only</div>
                <div className="text-gray-700 dark:text-gray-300">No CSS output</div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-300 dark:border-pink-700">
            <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Why Use Partials?</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Partials help you organize your styles into logical modules like <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">_variables</code>, <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">_mixins</code>, <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">_buttons</code>, etc. This makes your codebase more maintainable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Naming Convention */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<File className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Naming Convention"
            description="The underscore prefix"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Partial files <strong>must start with an underscore</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">_</code>. This tells Sass not to compile them into separate CSS files.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Correct Partial Names
              </h5>
              <div className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>_variables.scss</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>_mixins.scss</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>_buttons.scss</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>_typography.scss</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span>
                Not Partials
              </h5>
              <div className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">✗</span>
                  <span>variables.scss</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">✗</span>
                  <span>mixins.scss</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">✗</span>
                  <span>buttons.scss</span>
                </div>
                <div className="text-xs text-red-600 dark:text-red-400 mt-3">
                  These will compile to separate CSS files!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Importing Partials */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Importing Partials"
            description="Use @import to include partials"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">@import</code> to include partials in your main SCSS file. You can <strong>omit the underscore and extension</strong> when importing.
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="_variables.scss"
              description="Partial with color variables"
              code={`// Color Variables
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$success-color: #10b981;
$error-color: #ef4444;
$text-color: #1e293b;
$bg-color: #ffffff;`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="_mixins.scss"
              description="Partial with reusable mixins"
              code={`// Flex Center Mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Button Mixin
@mixin button($bg) {
  background: $bg;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="main.scss"
              description="Main file importing partials"
              code={`// Import partials (no underscore or extension needed)
@import 'variables';
@import 'mixins';

// Use the imported variables and mixins
.button {
  @include button($primary-color);
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}

.container {
  @include flex-center;
  background: $bg-color;
  color: $text-color;
}`}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Omit Underscore & Extension</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              When importing <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">_variables.scss</code>, you can just write <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">@import 'variables'</code>. Sass knows to look for the partial!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* File Structure Example */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Typical File Structure"
            description="Organizing your SCSS project"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Here's a common way to organize SCSS files using partials:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Project Structure</h5>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 font-mono text-xs border border-green-200 dark:border-green-800 space-y-1">
                <div className="text-gray-700 dark:text-gray-300">scss/</div>
                <div className="text-gray-700 dark:text-gray-300 ml-3">├── main.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-3">├── _variables.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-3">├── _mixins.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-3">├── _functions.scss</div>
                <div className="text-gray-700 dark:text-gray-300 ml-3">└── components/</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _buttons.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _cards.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">├── _forms.scss</div>
                <div className="text-blue-600 dark:text-blue-400 ml-6">└── _navigation.scss</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">main.scss</h5>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 font-mono text-xs border border-blue-200 dark:border-blue-800 space-y-1">
                <div className="text-green-600 dark:text-green-400">// Base</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'variables';</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'mixins';</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'functions';</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// Components</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'components/buttons';</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'components/cards';</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'components/forms';</div>
                <div className="text-gray-700 dark:text-gray-300">@import 'components/navigation';</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Benefits of Partials"
            description="Why use modular SCSS files?"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Better Organization
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Keep related styles together in logical modules
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Easier Maintenance
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Find and update styles quickly in smaller files
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Team Collaboration
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Multiple developers can work on different partials
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Reusability
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Import the same partial in multiple projects
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Single CSS Output
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All partials compile into one CSS file
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Import Order Control
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Control which styles load first
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Partials */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Common Partial Names"
            description="Standard organization patterns"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Base/Foundation</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>_variables.scss</div>
                <div>_mixins.scss</div>
                <div>_functions.scss</div>
                <div>_reset.scss</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Layout</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>_grid.scss</div>
                <div>_header.scss</div>
                <div>_footer.scss</div>
                <div>_sidebar.scss</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Components</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>_buttons.scss</div>
                <div>_cards.scss</div>
                <div>_forms.scss</div>
                <div>_modals.scss</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Utilities</h5>
              <div className="font-mono text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <div>_typography.scss</div>
                <div>_utilities.scss</div>
                <div>_helpers.scss</div>
                <div>_animations.scss</div>
              </div>
            </div>
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
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Underscore Prefix</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Start partial files with _ to prevent compilation
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Import Without _</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Omit underscore and extension when importing
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Better Organization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Split code into logical, maintainable modules
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Single CSS Output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All partials combine into one CSS file
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Next: Modern Modules!</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              You've learned about partials! Next, discover the modern <strong>@use and @forward</strong> module system that's replacing @import! 🚀
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
