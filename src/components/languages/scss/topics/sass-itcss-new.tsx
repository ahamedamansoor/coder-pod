'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  TrendingUp, 
  CheckCircle2,
  Lightbulb,
  Info,
  Layers,
  Settings,
  Box,
  Zap,
  Palette,
  FileCode,
  Layout
} from 'lucide-react';

interface SassItcssNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassItcssNew({ onOpenWebPlayground }: SassItcssNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={TrendingUp}
        category="Sass/SCSS · Architecture"
        title="ITCSS"
        description="Inverted Triangle CSS - Organize styles from generic to specific in increasing specificity."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="ITCSS"
            description="Inverted Triangle CSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>ITCSS</strong> (Inverted Triangle CSS) organizes CSS in <strong>layers</strong> from generic to specific, low to high specificity. Created by Harry Roberts. Think of it as an inverted triangle ▼
          </p>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border">
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded" style={{width: '100%'}}>
                <span className="text-slate-600 dark:text-slate-400">1. Settings</span> <span className="text-xs ml-2">Variables, config</span>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded" style={{width: '90%', marginLeft: '5%'}}>
                <span className="text-blue-700 dark:text-blue-300">2. Tools</span> <span className="text-xs ml-2">Mixins, functions</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded" style={{width: '80%', marginLeft: '10%'}}>
                <span className="text-purple-700 dark:text-purple-300">3. Generic</span> <span className="text-xs ml-2">Resets, normalize</span>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded" style={{width: '70%', marginLeft: '15%'}}>
                <span className="text-green-700 dark:text-green-300">4. Elements</span> <span className="text-xs ml-2">Base elements</span>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded" style={{width: '60%', marginLeft: '20%'}}>
                <span className="text-orange-700 dark:text-orange-300">5. Objects</span> <span className="text-xs ml-2">Patterns, structures</span>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded" style={{width: '50%', marginLeft: '25%'}}>
                <span className="text-yellow-700 dark:text-yellow-300">6. Components</span> <span className="text-xs ml-2">UI components</span>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded" style={{width: '40%', marginLeft: '30%'}}>
                <span className="text-red-700 dark:text-red-300">7. Utilities</span> <span className="text-xs ml-2">Helpers, overrides</span>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Specificity Triangle</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Start with <strong>low specificity</strong> (settings, resets) and gradually increase to <strong>high specificity</strong> (utilities).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 1. Settings */}
      <Card className="bg-gradient-to-br from-slate-50/60 to-gray-50/60 dark:from-slate-950/10 dark:to-gray-950/10 border border-slate-200/50 dark:border-slate-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-slate-600 dark:text-slate-400" />}
            title="1. Settings"
            description="Global variables and config"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Settings:</strong> Global variables, configuration. No CSS output.
          </p>

          <CodeSnippetWithOutput
            title="settings/_colors.scss"
            code={`// Color palette
$color-primary: #3b82f6;
$color-secondary: #8b5cf6;
$color-success: #10b981;
$color-danger: #ef4444;
$color-warning: #f59e0b;

// Grayscale
$color-black: #000000;
$color-gray-900: #111827;
$color-gray-800: #1f2937;
$color-gray-700: #374151;
$color-gray-600: #4b5563;
$color-gray-500: #6b7280;
$color-white: #ffffff;`}
            output={['// No CSS output - variables only']}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="settings/_spacing.scss"
            code={`// Spacing scale
$spacing-unit: 8px;
$spacing-xs: $spacing-unit * 0.5;    // 4px
$spacing-sm: $spacing-unit;          // 8px
$spacing-md: $spacing-unit * 2;      // 16px
$spacing-lg: $spacing-unit * 3;      // 24px
$spacing-xl: $spacing-unit * 4;      // 32px
$spacing-2xl: $spacing-unit * 6;     // 48px

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;`}
            output={['// No CSS output - variables only']}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* 2. Tools */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="2. Tools"
            description="Mixins and functions"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Tools:</strong> Globally available mixins and functions. No CSS output.
          </p>

          <CodeSnippetWithOutput
            title="tools/_mixins.scss"
            code={`// Responsive mixin
@mixin respond($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

// Visually hidden
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}`}
            output={['// No CSS output - mixins ready to use']}
            language="scss"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* 3. Generic */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="3. Generic"
            description="Resets and normalize"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Generic:</strong> Ground zero styles - resets, normalize, box-sizing.
          </p>

          <CodeSnippetWithOutput
            title="generic/_reset.scss"
            code={`// Box-sizing reset
*, *::before, *::after {
  box-sizing: border-box;
}

// Remove default margins
* {
  margin: 0;
  padding: 0;
}

// Root element
html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Body defaults
body {
  min-height: 100vh;
  line-height: 1.5;
}`}
            output={[
              '*, *::before, *::after { box-sizing: border-box; }',
              '* { margin: 0; padding: 0; }',
              'html { font-size: 16px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }',
              'body { min-height: 100vh; line-height: 1.5; }'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* 4. Elements */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="4. Elements"
            description="Bare HTML elements"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Elements:</strong> Styling for bare HTML elements. No classes.
          </p>

          <CodeSnippetWithOutput
            title="elements/_headings.scss"
            code={`// Heading styles
h1, h2, h3, h4, h5, h6 {
  font-family: $font-heading;
  font-weight: 700;
  line-height: 1.2;
  color: $color-gray-900;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }`}
            output={[
              'h1, h2, h3, h4, h5, h6 { font-family: ...; font-weight: 700; line-height: 1.2; color: #111827; }',
              'h1 { font-size: 2.5rem; }',
              'h2 { font-size: 2rem; }',
              'h3 { font-size: 1.75rem; }',
              'h4 { font-size: 1.5rem; }',
              'h5 { font-size: 1.25rem; }',
              'h6 { font-size: 1rem; }'
            ]}
            language="scss"
            colorTheme="green"
          />

          <CodeSnippetWithOutput
            title="elements/_links.scss"
            code={`a {
  color: $color-primary;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: darken($color-primary, 10%);
    text-decoration: underline;
  }
  
  &:focus {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
}`}
            output={[
              'a { color: #3b82f6; text-decoration: none; transition: color 0.3s; }',
              'a:hover { color: #2563eb; text-decoration: underline; }',
              'a:focus { outline: 2px solid #3b82f6; outline-offset: 2px; }'
            ]}
            language="scss"
            colorTheme="green"
          />
        </CardContent>
      </Card>

      {/* 5. Objects */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layout className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="5. Objects"
            description="Layout patterns (prefix: .o-)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Objects:</strong> Class-based selectors for design patterns and structures. Prefix with <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">.o-</code>
          </p>

          <CodeSnippetWithOutput
            title="objects/_container.scss"
            code={`.o-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-md;
}

.o-container--narrow {
  max-width: 800px;
}

.o-container--wide {
  max-width: 1600px;
}`}
            output={[
              '.o-container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }',
              '.o-container--narrow { max-width: 800px; }',
              '.o-container--wide { max-width: 1600px; }'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <CodeSnippetWithOutput
            title="objects/_media.scss"
            code={`// Media object pattern
.o-media {
  display: flex;
  gap: $spacing-md;
}

.o-media__img {
  flex-shrink: 0;
}

.o-media__body {
  flex-grow: 1;
}`}
            output={[
              '.o-media { display: flex; gap: 16px; }',
              '.o-media__img { flex-shrink: 0; }',
              '.o-media__body { flex-grow: 1; }'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      {/* 6. Components */}
      <Card className="bg-gradient-to-br from-yellow-50/60 to-amber-50/60 dark:from-yellow-950/10 dark:to-amber-950/10 border border-yellow-200/50 dark:border-yellow-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />}
            title="6. Components"
            description="UI components (prefix: .c-)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Components:</strong> Designed pieces of UI. Prefix with <code className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">.c-</code>
          </p>

          <CodeSnippetWithOutput
            title="components/_button.scss"
            code={`.c-button {
  display: inline-block;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.c-button--primary {
  background: $color-primary;
  color: white;
  
  &:hover {
    background: darken($color-primary, 10%);
  }
}

.c-button--large {
  padding: $spacing-md $spacing-lg;
  font-size: 1.125rem;
}`}
            output={[
              '.c-button { display: inline-block; padding: 8px 16px; border: none; border-radius: 4px; font-weight: 600; text-align: center; cursor: pointer; transition: all 0.3s; }',
              '.c-button--primary { background: #3b82f6; color: white; }',
              '.c-button--primary:hover { background: #2563eb; }',
              '.c-button--large { padding: 16px 24px; font-size: 1.125rem; }'
            ]}
            language="scss"
            colorTheme="amber"
          />

          <CodeSnippetWithOutput
            title="components/_card.scss"
            code={`.c-card {
  background: white;
  border-radius: 8px;
  padding: $spacing-lg;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.c-card__header {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: $spacing-sm;
}

.c-card__body {
  color: $color-gray-600;
  line-height: 1.6;
}`}
            output={[
              '.c-card { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }',
              '.c-card__header { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }',
              '.c-card__body { color: #4b5563; line-height: 1.6; }'
            ]}
            language="scss"
            colorTheme="amber"
          />
        </CardContent>
      </Card>

      {/* 7. Utilities */}
      <Card className="bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="7. Utilities"
            description="Helper classes (prefix: .u-)"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Utilities:</strong> High-specificity helpers and overrides. Prefix with <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">.u-</code>. Can use <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">!important</code>
          </p>

          <CodeSnippetWithOutput
            title="utilities/_spacing.scss"
            code={`// Margin utilities
.u-mt-0 { margin-top: 0 !important; }
.u-mt-sm { margin-top: $spacing-sm !important; }
.u-mt-md { margin-top: $spacing-md !important; }
.u-mt-lg { margin-top: $spacing-lg !important; }

.u-mb-0 { margin-bottom: 0 !important; }
.u-mb-sm { margin-bottom: $spacing-sm !important; }
.u-mb-md { margin-bottom: $spacing-md !important; }
.u-mb-lg { margin-bottom: $spacing-lg !important; }

// Padding utilities
.u-p-0 { padding: 0 !important; }
.u-p-sm { padding: $spacing-sm !important; }
.u-p-md { padding: $spacing-md !important; }
.u-p-lg { padding: $spacing-lg !important; }`}
            output={[
              '.u-mt-0 { margin-top: 0 !important; }',
              '.u-mt-sm { margin-top: 8px !important; }',
              '.u-mt-md { margin-top: 16px !important; }',
              '.u-mt-lg { margin-top: 24px !important; }',
              '...'
            ]}
            language="scss"
            colorTheme="pink"
          />

          <CodeSnippetWithOutput
            title="utilities/_display.scss"
            code={`.u-hidden {
  display: none !important;
}

.u-block {
  display: block !important;
}

.u-inline-block {
  display: inline-block !important;
}

.u-flex {
  display: flex !important;
}

.u-text-center {
  text-align: center !important;
}

.u-text-right {
  text-align: right !important;
}`}
            output={[
              '.u-hidden { display: none !important; }',
              '.u-block { display: block !important; }',
              '.u-inline-block { display: inline-block !important; }',
              '.u-flex { display: flex !important; }',
              '.u-text-center { text-align: center !important; }',
              '.u-text-right { text-align: right !important; }'
            ]}
            language="scss"
            colorTheme="pink"
          />

          <Alert className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-300 dark:border-red-700">
            <Lightbulb className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">!important Usage</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Utilities are the <strong>only</strong> place where <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">!important</code> is acceptable in ITCSS!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* File Structure */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="ITCSS File Structure"
            size="lg"
          />

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre>{`scss/
├── 1-settings/
│   ├── _colors.scss
│   ├── _spacing.scss
│   └── _typography.scss
├── 2-tools/
│   ├── _mixins.scss
│   └── _functions.scss
├── 3-generic/
│   └── _reset.scss
├── 4-elements/
│   ├── _headings.scss
│   ├── _links.scss
│   └── _forms.scss
├── 5-objects/
│   ├── _container.scss
│   ├── _media.scss
│   └── _grid.scss
├── 6-components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _nav.scss
├── 7-utilities/
│   ├── _spacing.scss
│   └── _display.scss
└── main.scss`}</pre>
          </div>

          <CodeSnippetWithOutput
            title="main.scss"
            code={`// Import in ITCSS order (specificity increases)
// 1. Settings
@import '1-settings/colors';
@import '1-settings/spacing';
@import '1-settings/typography';

// 2. Tools
@import '2-tools/mixins';
@import '2-tools/functions';

// 3. Generic
@import '3-generic/reset';

// 4. Elements
@import '4-elements/headings';
@import '4-elements/links';
@import '4-elements/forms';

// 5. Objects
@import '5-objects/container';
@import '5-objects/media';
@import '5-objects/grid';

// 6. Components
@import '6-components/button';
@import '6-components/card';
@import '6-components/nav';

// 7. Utilities
@import '7-utilities/spacing';
@import '7-utilities/display';`}
            output={[
              '// Compiled CSS with increasing specificity'
            ]}
            language="scss"
            colorTheme="indigo"
          />
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
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">▼ Triangle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generic → Specific, Low → High specificity
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">7 Layers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Settings, Tools, Generic, Elements, Objects, Components, Utilities
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Prefixes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                .o- objects, .c- components, .u- utilities
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Scalable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prevents specificity wars, manages complexity
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
