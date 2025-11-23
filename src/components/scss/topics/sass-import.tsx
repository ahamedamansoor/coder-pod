
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Import, Book, File, ArrowRight, Lightbulb, AlertTriangle,
    FolderTree, Play, Code, Eye, EyeOff, CheckCircle,
    Layers, Settings, Globe, RefreshCw, Copy, Target,
    Zap, BookOpen, Star, Rocket, TreePine, Hash
} from 'lucide-react';
import React, { useState } from 'react';

export default function SassImport({ onOpenEditor, onOpenWebPlayground }: {
  onOpenEditor?: (code: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
} = {}) {
    const [selectedExample, setSelectedExample] = useState('basic');
    const [showOutput, setShowOutput] = useState(false);

    const partialExample = `// _variables.scss
$primary-color: #8a2be2;
$base-font-size: 16px;

// _buttons.scss
@import 'variables';

.button {
  background-color: $primary-color;
  font-size: $base-font-size;
  padding: 10px 15px;
}`;

    const mainExample = `// main.scss
@import 'buttons';

body {
  font-family: sans-serif;
}
`;
    
    const finalCss = `/* main.css - Compiled Output */
.button {
  background-color: #8a2be2;
  font-size: 16px;
  padding: 10px 15px;
}

body {
  font-family: sans-serif;
}
`;

    const importPatterns = [
        {
            type: 'Basic Partials',
            icon: File,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            borderColor: 'border-blue-200',
            description: 'Simple file imports with underscore naming',
            example: '@import "variables", "mixins";'
        },
        {
            type: 'Nested Imports',
            icon: FolderTree,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950/20',
            borderColor: 'border-green-200',
            description: 'Organize imports in folder structures',
            example: '@import "base/reset", "components/buttons";'
        },
        {
            type: 'Index Files',
            icon: Layers,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/20',
            borderColor: 'border-purple-200',
            description: 'Use index files to group related imports',
            example: '@import "components"; // imports _index.scss'
        },
        {
            type: 'Conditional Imports',
            icon: Settings,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/20',
            borderColor: 'border-orange-200',
            description: 'Import files based on conditions',
            example: '@if $theme == dark { @import "dark-theme"; }'
        }
    ];

    const interactiveExamples = {
        basic: {
            title: 'Basic Import Structure',
            html: `<div class="app">
  <header class="header">
    <h1 class="header__title">My App</h1>
    <nav class="nav">
      <a href="#" class="nav__link">Home</a>
      <a href="#" class="nav__link">About</a>
    </nav>
  </header>
  <main class="main">
    <div class="card">
      <h2 class="card__title">Welcome</h2>
      <p class="card__content">This is a modular Sass example.</p>
      <button class="btn btn--primary">Get Started</button>
    </div>
  </main>
</div>`,
            files: {
                '_variables.scss': `// Color palette
$primary-color: #3b82f6;
$secondary-color: #64748b;
$success-color: #10b981;
$danger-color: #ef4444;

// Typography
$font-family-base: 'Inter', -apple-system, sans-serif;
$font-size-base: 1rem;
$font-size-lg: 1.25rem;
$font-size-xl: 1.5rem;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;`,
                '_mixins.scss': `// Button mixin
@mixin button-style($bg-color, $text-color: white) {
  background: $bg-color;
  color: $text-color;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: darken($bg-color, 10%);
    transform: translateY(-1px);
  }
}

// Card mixin
@mixin card-style {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: $spacing-lg;
}

// Responsive mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (min-width: $breakpoint-sm) { @content; }
  }
  @if $breakpoint == md {
    @media (min-width: $breakpoint-md) { @content; }
  }
  @if $breakpoint == lg {
    @media (min-width: $breakpoint-lg) { @content; }
  }
}`,
                '_base.scss': `// Reset and base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: 1.6;
  color: #1a202c;
  background: #f7fafc;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}`,
                '_components.scss': `// Header component
.header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: $spacing-md $spacing-lg;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &__title {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $primary-color;
  }
}

// Navigation component
.nav {
  display: flex;
  gap: $spacing-md;
  
  &__link {
    color: $secondary-color;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: $primary-color;
    }
  }
}

// Card component
.card {
  @include card-style;
  
  &__title {
    font-size: $font-size-lg;
    margin-bottom: $spacing-sm;
    color: #1a202c;
  }
  
  &__content {
    color: $secondary-color;
    margin-bottom: $spacing-lg;
  }
}

// Button component
.btn {
  @include button-style($secondary-color);
  
  &--primary {
    @include button-style($primary-color);
  }
  
  &--success {
    @include button-style($success-color);
  }
}

// Main layout
.main {
  flex: 1;
  padding: $spacing-xl;
  
  @include respond-to(md) {
    padding: $spacing-xl * 2;
  }
}`,
                'main.scss': `// Import order matters!
@import 'variables';  // Variables first
@import 'mixins';     // Then mixins
@import 'base';       // Base styles
@import 'components'; // Finally components`
            },
            css: `.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1a202c;
  background: #f7fafc;
}

.header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.btn {
  background: #64748b;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #475569;
  transform: translateY(-1px);
}

.btn--primary {
  background: #3b82f6;
}

.btn--primary:hover {
  background: #2563eb;
}`
        },
        advanced: {
            title: 'Advanced Architecture',
            html: `<div class="theme-system">
  <div class="layout">
    <aside class="sidebar">
      <nav class="menu">
        <div class="menu__item menu__item--active">Dashboard</div>
        <div class="menu__item">Projects</div>
        <div class="menu__item">Settings</div>
      </nav>
    </aside>
    <main class="content">
      <div class="dashboard">
        <div class="stats">
          <div class="stat-card stat-card--primary">
            <h3>Total Users</h3>
            <span class="stat-card__value">1,234</span>
          </div>
          <div class="stat-card stat-card--success">
            <h3>Revenue</h3>
            <span class="stat-card__value">$12,345</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>`,
            files: {
                'abstracts/_variables.scss': `// Design tokens
$colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981,
  warning: #f59e0b,
  danger: #ef4444,
  light: #f8fafc,
  dark: #1e293b
);

$spacing: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem,
  xl: 2rem,
  2xl: 3rem
);

$typography: (
  font-family: ('Inter', -apple-system, sans-serif),
  font-sizes: (
    xs: 0.75rem,
    sm: 0.875rem,
    base: 1rem,
    lg: 1.125rem,
    xl: 1.25rem,
    2xl: 1.5rem
  )
);`,
                'abstracts/_functions.scss': `// Color function
@function color($name) {
  @return map-get($colors, $name);
}

// Spacing function
@function spacing($size) {
  @return map-get($spacing, $size);
}

// Font size function
@function font-size($size) {
  @return map-get(map-get($typography, font-sizes), $size);
}`,
                'abstracts/_mixins.scss': `// Theme mixin
@mixin theme($theme-name) {
  .theme-#{$theme-name} & {
    @content;
  }
}

// Component variant mixin
@mixin variant($name, $color) {
  &--#{$name} {
    background: color($color);
    color: white;
    
    @if $color == warning {
      color: color(dark);
    }
  }
}

// Layout mixin
@mixin layout-grid($columns: 12, $gap: spacing(md)) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}`,
                'base/_reset.scss': `// Modern CSS reset
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}`,
                'components/_layout.scss': `// Layout components
.layout {
  @include layout-grid(4, 0);
  min-height: 100vh;
}

.sidebar {
  grid-column: 1;
  background: color(light);
  border-right: 1px solid #e2e8f0;
  padding: spacing(lg);
}

.content {
  grid-column: 2 / -1;
  padding: spacing(xl);
}`,
                'components/_menu.scss': `// Menu component
.menu {
  display: flex;
  flex-direction: column;
  gap: spacing(sm);
  
  &__item {
    padding: spacing(sm) spacing(md);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: rgba(color(primary), 0.1);
    }
    
    &--active {
      background: color(primary);
      color: white;
    }
  }
}`,
                'components/_cards.scss': `// Card components
.stat-card {
  background: white;
  padding: spacing(lg);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: font-size(sm);
    color: color(secondary);
    margin-bottom: spacing(sm);
  }
  
  &__value {
    font-size: font-size(2xl);
    font-weight: 700;
    color: color(dark);
  }
  
  @include variant(primary, primary);
  @include variant(success, success);
  @include variant(warning, warning);
}`,
                'main.scss': `// Import abstracts first
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';

// Base styles
@import 'base/reset';

// Components
@import 'components/layout';
@import 'components/menu';
@import 'components/cards';

// Global styles
body {
  font-family: map-get(map-get($typography, font-family), null);
  background: color(light);
  color: color(dark);
}`
            },
            css: `/* Compiled CSS output */
.layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  min-height: 100vh;
}

.sidebar {
  grid-column: 1;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  padding: 1.5rem;
}

.content {
  grid-column: 2 / -1;
  padding: 2rem;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu__item {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.menu__item:hover {
  background: rgba(59, 130, 246, 0.1);
}

.menu__item--active {
  background: #3b82f6;
  color: white;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-card--primary {
  background: #3b82f6;
  color: white;
}

.stat-card--success {
  background: #10b981;
  color: white;
}`
        },
        organization: {
            title: 'File Organization',
            html: `<div class="architecture-demo">
  <div class="folder-structure">
    <h3>SCSS Architecture</h3>
    <div class="folder">
      <span class="folder-name">scss/</span>
      <div class="folder-contents">
        <div class="folder">abstracts/</div>
        <div class="folder">base/</div>
        <div class="folder">components/</div>
        <div class="folder">layout/</div>
        <div class="folder">pages/</div>
        <div class="folder">themes/</div>
        <div class="file">main.scss</div>
      </div>
    </div>
  </div>
</div>`,
            files: {
                'Architecture Overview': `// 7-1 Architecture Pattern
scss/
├── abstracts/
│   ├── _variables.scss    // Global variables
│   ├── _functions.scss    // Sass functions
│   ├── _mixins.scss       // Sass mixins
│   └── _placeholders.scss // Sass placeholders
├── base/
│   ├── _reset.scss        // CSS reset
│   ├── _typography.scss   // Typography rules
│   └── _helpers.scss      // Helper classes
├── components/
│   ├── _buttons.scss      // Button styles
│   ├── _cards.scss        // Card component
│   ├── _forms.scss        // Form elements
│   └── _navigation.scss   // Navigation
├── layout/
│   ├── _header.scss       // Header layout
│   ├── _footer.scss       // Footer layout
│   ├── _sidebar.scss      // Sidebar layout
│   └── _grid.scss         // Grid system
├── pages/
│   ├── _home.scss         // Home page styles
│   ├── _about.scss        // About page styles
│   └── _contact.scss      // Contact page styles
├── themes/
│   ├── _light.scss        // Light theme
│   └── _dark.scss         // Dark theme
└── main.scss              // Main import file`,
                'main.scss': `// Main import file following 7-1 pattern

// 1. Abstracts
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

// 2. Base
@import 'base/reset';
@import 'base/typography';
@import 'base/helpers';

// 3. Layout
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/grid';

// 4. Components
@import 'components/buttons';
@import 'components/cards';
@import 'components/forms';
@import 'components/navigation';

// 5. Pages
@import 'pages/home';
@import 'pages/about';
@import 'pages/contact';

// 6. Themes
@import 'themes/light';
@import 'themes/dark';`,
                'Import Best Practices': `// ✅ Good practices

// 1. Import order matters
@import 'variables';  // Variables first
@import 'mixins';     // Then mixins that use variables
@import 'base';       // Base styles
@import 'components'; // Components last

// 2. Use index files for organization
// components/_index.scss
@import 'buttons';
@import 'cards';
@import 'forms';

// Then in main.scss
@import 'components'; // Imports the index file

// 3. Conditional imports
@if $include-print-styles {
  @import 'print';
}

// 4. Use forward and use (Dart Sass)
@use 'variables' as vars;
@use 'mixins' as mix;

.button {
  color: vars.$primary-color;
  @include mix.button-style;
}`
            },
            css: `/* File organization doesn't produce CSS directly,
   but enables better maintainability and scalability */

/* Example of well-organized output: */
/* Variables and mixins are processed first */
/* Base styles establish foundation */
/* Components build on the foundation */
/* Pages add specific customizations */
/* Themes provide variations */

.btn {
  /* Styles from components/_buttons.scss */
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
}

.card {
  /* Styles from components/_cards.scss */
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header {
  /* Styles from layout/_header.scss */
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
        }
    };


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Import className="w-10 h-10 text-primary animate-pulse" />
                    <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sass @import & Partials Mastery
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of organizing stylesheets with modular architecture and reusable components.
                </p>
            </div>

            {/* Quick Overview */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                        <Target className="w-6 h-6 animate-bounce" />
                        The Power of Modular CSS
                    </CardTitle>
                    <CardDescription>
                        Break down large stylesheets into smaller, manageable pieces that work together seamlessly.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FolderTree className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Organize Files</h3>
                            <p className="text-sm text-muted-foreground">Split styles into logical, reusable modules</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Compile Once</h3>
                            <p className="text-sm text-muted-foreground">All imports merge into a single CSS file</p>
                        </div>
                        <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Rocket className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Scale Easily</h3>
                            <p className="text-sm text-muted-foreground">Maintain large projects with ease</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Import Patterns */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Import Patterns & Techniques
                    </CardTitle>
                    <CardDescription>
                        Different approaches to organizing and importing your Sass files.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {importPatterns.map((pattern, index) => {
                            const Icon = pattern.icon;
                            return (
                                <div key={index} className={`p-4 rounded-lg border ${pattern.bgColor} ${pattern.borderColor} hover:shadow-lg transition-all duration-200`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`w-6 h-6 ${pattern.color}`} />
                                        <h3 className="font-bold text-sm">{pattern.type}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{pattern.description}</p>
                                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded block">
                                        {pattern.example}
                                    </code>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Visual Diagram */}
            <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <TreePine className="w-6 h-6" />
                        How @import Works: Visual Flow
                    </CardTitle>
                    <CardDescription>
                        See how multiple Sass files combine into a single CSS output.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="space-y-3">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">📁 Partials</h4>
                                <div className="space-y-1 text-xs">
                                    <div className="flex items-center gap-2">
                                        <File className="w-3 h-3" />
                                        <span>_variables.scss</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <File className="w-3 h-3" />
                                        <span>_mixins.scss</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <File className="w-3 h-3" />
                                        <span>_components.scss</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <ArrowRight className="w-6 h-6 text-primary" />
                                <span className="text-sm font-semibold text-primary">@import</span>
                                <ArrowRight className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">📄 Output</h4>
                            <div className="space-y-1 text-xs">
                                <div className="flex items-center gap-2">
                                    <File className="w-3 h-3" />
                                    <span>main.css</span>
                                </div>
                                <p className="text-muted-foreground">Single compiled file</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded border border-amber-200">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 Key Benefits</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <ul className="space-y-1 text-amber-600 dark:text-amber-400">
                                <li>• Modular organization</li>
                                <li>• Reusable components</li>
                                <li>• Better maintainability</li>
                            </ul>
                            <ul className="space-y-1 text-amber-600 dark:text-amber-400">
                                <li>• Single HTTP request</li>
                                <li>• Compile-time optimization</li>
                                <li>• Team collaboration</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Examples */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Play className="w-6 h-6 text-primary" />
                        Interactive Import Examples
                    </CardTitle>
                    <CardDescription>
                        Explore different import strategies with real-world examples and file structures.
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
                                    {key === 'basic' ? '@import' : key === 'advanced' ? '7-1' : 'Arch'}
                                </Badge>
                                {example.title}
                            </Button>
                        ))}
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <FolderTree className="w-5 h-5 text-blue-600" />
                                File Structure
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                                {Object.entries(interactiveExamples[selectedExample as keyof typeof interactiveExamples].files).map(([filename, content]) => (
                                    <div key={filename} className="bg-gray-100 dark:bg-gray-900 rounded-lg">
                                        <div className="bg-gray-800 px-3 py-2 rounded-t-lg border-b border-gray-700">
                                            <h4 className="text-gray-800 dark:text-white font-mono text-sm flex items-center gap-2">
                                                <File className="w-4 h-4" />
                                                {filename}
                                            </h4>
                                        </div>
                                        <div className="p-3 max-h-48 overflow-y-auto">
                                            <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">
                                                {content}
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                    Compiled CSS Output
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
                        {onOpenWebPlayground && (
                            <Button 
                                onClick={() => onOpenWebPlayground(
                                    interactiveExamples[selectedExample as keyof typeof interactiveExamples].html,
                                    Object.values(interactiveExamples[selectedExample as keyof typeof interactiveExamples].files).join('\n\n'),
                                    ''
                                )}
                                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            >
                                <Play className="w-4 h-4" />
                                Try in Playground
                            </Button>
                        )}
                        <Button 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(Object.values(interactiveExamples[selectedExample as keyof typeof interactiveExamples].files).join('\n\n'))}
                            className="flex items-center gap-2"
                        >
                            <Copy className="w-4 h-4" />
                            Copy All Files
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Partials Deep Dive */}
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <File className="w-6 h-6" />
                        Understanding Partials
                    </CardTitle>
                    <CardDescription>
                        Partials are the building blocks of modular Sass architecture.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-3">What are Partials?</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Underscore prefix</strong> - Files starting with _ (e.g., _variables.scss)
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Not compiled directly</strong> - Only included when imported
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Import without underscore</strong> - @import 'variables' not '_variables'
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Modular organization</strong> - Each partial has a specific purpose
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">Naming Conventions</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
                                <pre className="text-gray-800 dark:text-white font-mono text-xs whitespace-pre-wrap">{`// ✅ Good partial names
_variables.scss     // Global variables
_mixins.scss        // Reusable mixins
_functions.scss     // Custom functions
_base.scss          // Base/reset styles
_typography.scss    // Font styles
_buttons.scss       // Button components
_cards.scss         // Card components
_utilities.scss     // Utility classes

// Import without underscore or extension
@import 'variables';
@import 'mixins';
@import 'base';`}</pre>
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
                        Import Best Practices
                    </CardTitle>
                    <CardDescription>
                        Professional guidelines for organizing and importing Sass files effectively.
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
                                    <span>Import variables and functions first</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use logical import order (abstracts → base → components)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Group related imports with index files</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Use descriptive, consistent file names</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Follow the 7-1 architecture pattern</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Common Mistakes
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Importing in wrong order (components before variables)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Creating circular import dependencies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Using CSS @import instead of Sass @import</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Not using partials for organization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span>Importing the same file multiple times</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CSS vs Sass Import */}
            <Card className="border-red-500 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="w-6 h-6" />
                        CSS @import vs Sass @import
                    </CardTitle>
                    <CardDescription>
                        Understanding the crucial difference between CSS and Sass imports.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">❌ CSS @import (Avoid)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`/* CSS @import - BAD */
@import url('styles.css');
@import url('components.css');

/* Problems: */
// ❌ Multiple HTTP requests
// ❌ Blocks rendering
// ❌ Poor performance
// ❌ No compile-time optimization`}</pre>
                            </div>
                            <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/20 rounded border border-red-200">
                                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Performance Impact</h4>
                                <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                                    <li>• Each @import = separate HTTP request</li>
                                    <li>• Blocks page rendering</li>
                                    <li>• Waterfall loading effect</li>
                                    <li>• Poor mobile performance</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">✅ Sass @import (Good)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Sass @import - GOOD
@import 'variables';
@import 'mixins';
@import 'components';

/* Benefits: */
// ✅ Compile-time processing
// ✅ Single CSS file output
// ✅ Optimal performance
// ✅ Modular development`}</pre>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/20 rounded border border-green-200">
                                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Performance Benefits</h4>
                                <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                                    <li>• Single HTTP request</li>
                                    <li>• Faster page loading</li>
                                    <li>• Compile-time optimization</li>
                                    <li>• Better caching</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-primary" />
                        Advanced Import Techniques
                    </CardTitle>
                    <CardDescription>
                        Expert-level patterns for complex Sass architectures.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">1. Conditional Imports</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Conditional imports based on variables
$theme: 'dark' !default;
$include-animations: true !default;

@if $theme == 'dark' {
  @import 'themes/dark';
} @else {
  @import 'themes/light';
}

@if $include-animations {
  @import 'components/animations';
}

// Environment-based imports
$environment: 'production' !default;

@if $environment == 'development' {
  @import 'debug/grid-overlay';
  @import 'debug/component-outlines';
}`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">2. Index Files for Organization</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// components/_index.scss
@import 'buttons';
@import 'cards';
@import 'forms';
@import 'navigation';
@import 'modals';

// abstracts/_index.scss
@import 'variables';
@import 'functions';
@import 'mixins';
@import 'placeholders';

// main.scss - Clean and organized
@import 'abstracts';
@import 'base';
@import 'layout';
@import 'components';
@import 'pages';
@import 'themes';`}</pre>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold mb-3">3. Modern @use and @forward (Dart Sass)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                                <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap">{`// Modern Sass module system
@use 'variables' as vars;
@use 'mixins' as mix;

.button {
  color: vars.$primary-color;
  @include mix.button-style;
}

// Forward for creating module APIs
// _index.scss
@forward 'variables';
@forward 'functions';
@forward 'mixins';

// Usage
@use 'abstracts' as *; // Import all forwarded items`}</pre>
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
                        Import Quick Reference
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Basic Syntax</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@import 'filename';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@import 'folder/file';</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">@import 'a', 'b', 'c';</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">File Naming</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">_variables.scss</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">_mixins.scss</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">_components.scss</code>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Import Order</h4>
                            <div className="space-y-1">
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">1. Variables</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">2. Functions/Mixins</code>
                                <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded block">3. Base/Components</code>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            Use the 7-1 architecture pattern: 7 folders (abstracts, base, components, layout, pages, themes, vendors) 
                            and 1 main file that imports everything. This creates a scalable, maintainable structure for any project size.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
