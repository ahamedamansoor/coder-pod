'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Palette, 
  CheckCircle2,
  Lightbulb,
  Info,
  Moon,
  Sun,
  Layers,
  Sparkles
} from 'lucide-react';

interface SassThemingNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassThemingNew({ onOpenWebPlayground }: SassThemingNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Palette}
        category="Sass/SCSS · Design Systems"
        title="Theming Systems"
        description="Build flexible, scalable theming systems with SCSS for multiple color schemes and brands."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Theming Systems"
            description="Dynamic themes with SCSS"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Theming systems</strong> allow users to switch between different visual styles. Build flexible themes using <strong>SCSS maps</strong>, <strong>CSS custom properties</strong>, and smart architecture!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">Multiple Themes</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Light, dark, brand variants</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Dynamic Switching</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Runtime theme changes</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <Layers className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Maintainable</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Single source of truth</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Maps */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Theme Maps"
            description="Organize themes with SCSS maps"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Theme Map"
              code={`// Define themes as nested maps
$themes: (
  'light': (
    'background': #ffffff,
    'surface': #f5f5f5,
    'text-primary': #1a1a1a,
    'text-secondary': #666666,
    'primary': #3b82f6,
    'border': #e0e0e0
  ),
  'dark': (
    'background': #1a1a1a,
    'surface': #2a2a2a,
    'text-primary': #ffffff,
    'text-secondary': #b0b0b0,
    'primary': #60a5fa,
    'border': #404040
  )
);

// Helper function to get theme value
@function theme($theme-name, $key) {
  @return map-get(map-get($themes, $theme-name), $key);
}

// Usage
.light-theme {
  background: theme('light', 'background');
  color: theme('light', 'text-primary');
}

.dark-theme {
  background: theme('dark', 'background');
  color: theme('dark', 'text-primary');
}`}
              output={[
                '.light-theme { background: #ffffff; color: #1a1a1a; }',
                '.dark-theme { background: #1a1a1a; color: #ffffff; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Theme Mixin"
              code={`$themes: (
  'light': (
    'bg': #ffffff,
    'text': #1a1a1a,
    'primary': #3b82f6
  ),
  'dark': (
    'bg': #1a1a1a,
    'text': #ffffff,
    'primary': #60a5fa
  )
);

@mixin themed($property, $key) {
  @each $theme-name, $theme-map in $themes {
    .theme-#{$theme-name} & {
      #{$property}: map-get($theme-map, $key);
    }
  }
}

// Usage
.card {
  @include themed('background', 'bg');
  @include themed('color', 'text');
  
  .button {
    @include themed('background', 'primary');
  }
}`}
              output={[
                '.theme-light .card { background: #ffffff; color: #1a1a1a; }',
                '.theme-dark .card { background: #1a1a1a; color: #ffffff; }',
                '.theme-light .card .button { background: #3b82f6; }',
                '.theme-dark .card .button { background: #60a5fa; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* CSS Custom Properties */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="CSS Custom Properties (CSS Variables)"
            description="Runtime theme switching"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            Use <strong>CSS custom properties</strong> for runtime theme switching without recompiling SCSS!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Generate CSS Variables from SCSS"
              code={`// Theme definitions in SCSS
$light-theme: (
  'bg-primary': #ffffff,
  'bg-secondary': #f5f5f5,
  'text-primary': #1a1a1a,
  'text-secondary': #666666,
  'primary': #3b82f6,
  'border': #e0e0e0
);

$dark-theme: (
  'bg-primary': #1a1a1a,
  'bg-secondary': #2a2a2a,
  'text-primary': #ffffff,
  'text-secondary': #b0b0b0,
  'primary': #60a5fa,
  'border': #404040
);

// Generate CSS variables
:root {
  @each $key, $value in $light-theme {
    --#{$key}: #{$value};
  }
}

[data-theme='dark'] {
  @each $key, $value in $dark-theme {
    --#{$key}: #{$value};
  }
}

// Use CSS variables
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.button {
  background: var(--primary);
  color: var(--bg-primary);
}`}
              output={[
                ':root { --bg-primary: #ffffff; --bg-secondary: #f5f5f5; --text-primary: #1a1a1a; ... }',
                '[data-theme="dark"] { --bg-primary: #1a1a1a; --bg-secondary: #2a2a2a; ... }',
                '.card { background: var(--bg-primary); color: var(--text-primary); border: 1px solid var(--border); }',
                '.button { background: var(--primary); color: var(--bg-primary); }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Theme Generator Mixin"
              code={`@mixin generate-theme($theme-map, $selector: ':root') {
  #{$selector} {
    @each $key, $value in $theme-map {
      --#{$key}: #{$value};
    }
  }
}

// Light theme
@include generate-theme($light-theme);

// Dark theme
@include generate-theme($dark-theme, '[data-theme="dark"]');

// Brand themes
$brand-red: (
  'primary': #ef4444,
  'primary-hover': #dc2626
);

@include generate-theme($brand-red, '[data-brand="red"]');`}
              output={[
                ':root { --bg-primary: #ffffff; ... }',
                '[data-theme="dark"] { --bg-primary: #1a1a1a; ... }',
                '[data-brand="red"] { --primary: #ef4444; --primary-hover: #dc2626; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best Approach</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <strong>CSS custom properties</strong> for runtime switching. Define values with <strong>SCSS maps</strong> for organization!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Dark Mode Implementation */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Moon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Dark Mode"
            description="Light/dark theme switching"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Prefers-color-scheme Media Query"
              code={`// Colors for both themes
$light-bg: #ffffff;
$light-text: #1a1a1a;
$dark-bg: #1a1a1a;
$dark-text: #ffffff;

// Default (light mode)
:root {
  --bg: #{$light-bg};
  --text: #{$light-text};
}

// Automatic dark mode based on OS preference
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #{$dark-bg};
    --text: #{$dark-text};
  }
}

// Use variables
body {
  background: var(--bg);
  color: var(--text);
}`}
              output={[
                ':root { --bg: #ffffff; --text: #1a1a1a; }',
                '@media (prefers-color-scheme: dark) { :root { --bg: #1a1a1a; --text: #ffffff; } }',
                'body { background: var(--bg); color: var(--text); }'
              ]}
              language="scss"
              colorTheme="indigo"
            />

            <CodeSnippetWithOutput
              title="Manual Toggle with Class"
              code={`// Light theme (default)
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --primary: #3b82f6;
}

// Dark theme (manual toggle)
:root.dark,
[data-theme='dark'] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --primary: #60a5fa;
}

// Support both auto and manual
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --bg-primary: #1a1a1a;
    --text-primary: #ffffff;
    --primary: #60a5fa;
  }
}`}
              output={[
                ':root { --bg-primary: #ffffff; --text-primary: #1a1a1a; --primary: #3b82f6; }',
                ':root.dark, [data-theme="dark"] { --bg-primary: #1a1a1a; --text-primary: #ffffff; --primary: #60a5fa; }',
                '@media (prefers-color-scheme: dark) { ... }'
              ]}
              language="scss"
              colorTheme="indigo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Component Theming */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Component-Level Theming"
            description="Themed components"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Themed Button Component"
              code={`// Button theme map
$button-themes: (
  'primary': (
    'bg': #3b82f6,
    'text': #ffffff,
    'hover': #2563eb
  ),
  'secondary': (
    'bg': #8b5cf6,
    'text': #ffffff,
    'hover': #7c3aed
  ),
  'danger': (
    'bg': #ef4444,
    'text': #ffffff,
    'hover': #dc2626
  )
);

// Generate button variants
@each $variant, $colors in $button-themes {
  .btn-#{$variant} {
    background: map-get($colors, 'bg');
    color: map-get($colors, 'text');
    
    &:hover {
      background: map-get($colors, 'hover');
    }
  }
}

// Adaptive to theme
.btn {
  background: var(--primary);
  color: var(--bg-primary);
  
  &:hover {
    background: var(--primary-hover, var(--primary));
  }
}`}
              output={[
                '.btn-primary { background: #3b82f6; color: #ffffff; }',
                '.btn-primary:hover { background: #2563eb; }',
                '.btn-secondary { background: #8b5cf6; color: #ffffff; }',
                '// ... all variants',
                '.btn { background: var(--primary); color: var(--bg-primary); }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Card with Theme Support"
              code={`// Card variables
:root {
  --card-bg: #ffffff;
  --card-border: #e0e0e0;
  --card-shadow: rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {
  --card-bg: #2a2a2a;
  --card-border: #404040;
  --card-shadow: rgba(0, 0, 0, 0.3);
}

// Card component
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: 0 2px 8px var(--card-shadow);
  border-radius: 8px;
  padding: 1.5rem;
  
  &__title {
    color: var(--text-primary);
    font-size: 1.5rem;
  }
  
  &__body {
    color: var(--text-secondary);
    line-height: 1.6;
  }
}`}
              output={[
                ':root { --card-bg: #ffffff; --card-border: #e0e0e0; --card-shadow: rgba(0, 0, 0, 0.1); }',
                '[data-theme="dark"] { --card-bg: #2a2a2a; --card-border: #404040; --card-shadow: rgba(0, 0, 0, 0.3); }',
                '.card { background: var(--card-bg); border: 1px solid var(--card-border); box-shadow: 0 2px 8px var(--card-shadow); ... }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Multi-Brand Theming */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Multi-Brand Theming"
            description="Support multiple brands"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Brand Theme System"
            code={`// Brand definitions
$brands: (
  'acme': (
    'primary': #3b82f6,
    'secondary': #8b5cf6,
    'accent': #06b6d4
  ),
  'beta': (
    'primary': #ef4444,
    'secondary': #f59e0b,
    'accent': #10b981
  ),
  'gamma': (
    'primary': #8b5cf6,
    'secondary': #ec4899,
    'accent': #f59e0b
  )
);

// Generate brand CSS variables
@each $brand-name, $brand-colors in $brands {
  [data-brand='#{$brand-name}'] {
    @each $key, $value in $brand-colors {
      --brand-#{$key}: #{$value};
    }
  }
}

// Use brand variables
.branded-button {
  background: var(--brand-primary);
  border: 2px solid var(--brand-secondary);
  
  &:hover {
    background: var(--brand-secondary);
  }
  
  &__icon {
    color: var(--brand-accent);
  }
}`}
            output={[
              '[data-brand="acme"] { --brand-primary: #3b82f6; --brand-secondary: #8b5cf6; --brand-accent: #06b6d4; }',
              '[data-brand="beta"] { --brand-primary: #ef4444; --brand-secondary: #f59e0b; --brand-accent: #10b981; }',
              '[data-brand="gamma"] { --brand-primary: #8b5cf6; --brand-secondary: #ec4899; --brand-accent: #f59e0b; }',
              '.branded-button { background: var(--brand-primary); border: 2px solid var(--brand-secondary); }',
              '.branded-button:hover { background: var(--brand-secondary); }',
              '.branded-button__icon { color: var(--brand-accent); }'
            ]}
            language="scss"
            colorTheme="orange"
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Theming Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use CSS Custom Properties</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For runtime theme switching without recompiling SCSS
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Organize with Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define themes in SCSS maps for better organization and DRY code
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Semantic Variable Names</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">--text-primary</code> not <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">--color-black</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Support prefers-color-scheme</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Respect user's OS dark mode preference as default
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Provide Manual Override</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Allow users to manually toggle theme regardless of OS setting
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">SCSS Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Organize theme definitions in nested maps
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">CSS Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use for runtime theme switching
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Dark Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Support both auto (prefers-color-scheme) and manual
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Multi-Brand</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                data-brand attributes for brand variants
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
