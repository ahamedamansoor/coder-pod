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
  Moon, 
  Sun,
  CheckCircle2,
  Lightbulb,
  Info,
  Palette,
  Eye,
  Zap
} from 'lucide-react';

interface SassDarkModeNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassDarkModeNew({ onOpenWebPlayground }: SassDarkModeNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Moon}
        category="Sass/SCSS · Design Systems"
        title="Dark Mode Implementation"
        description="Build professional dark mode with SCSS using CSS custom properties and smart strategies."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Moon className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Dark Mode"
            description="Light & dark theme switching"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Dark mode</strong> is essential for modern apps! Learn to implement it with <strong>SCSS</strong>, <strong>CSS custom properties</strong>, and smart color management strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <Sun className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h4 className="font-bold text-blue-700 dark:text-blue-300 text-sm">Light Mode</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Default bright theme</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Dark Mode</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Easy on the eyes</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Auto-Switch</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Respects OS preference</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Dark Mode?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Reduces eye strain, saves battery on OLED screens, looks professional, and is expected by users in 2024+!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* CSS Custom Properties Approach */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="CSS Custom Properties Approach"
            description="Modern, runtime-switchable dark mode"
            size="lg"
          />

          <p className="text-gray-700 dark:text-gray-300">
            The <strong>best approach</strong> - use CSS custom properties that switch based on a class or attribute!
          </p>

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Implementation"
              code={`// Define color tokens for both themes
:root {
  // Light mode (default)
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border: #e0e0e0;
  --primary: #3b82f6;
}

// Dark mode
.dark,
[data-theme='dark'] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border: #404040;
  --primary: #60a5fa;
}

// Use variables in components
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
}

.button {
  background: var(--primary);
  color: var(--bg-primary);
}`}
              output={[
                ':root { --bg-primary: #ffffff; --text-primary: #1a1a1a; ... }',
                '.dark { --bg-primary: #1a1a1a; --text-primary: #ffffff; ... }',
                'body { background: var(--bg-primary); color: var(--text-primary); }',
                '.card { background: var(--bg-secondary); border: 1px solid var(--border); }',
                '// Switches automatically when .dark class is added!'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Generate from SCSS Maps"
              code={`// Define themes as SCSS maps
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

.dark {
  @each $key, $value in $dark-theme {
    --#{$key}: #{$value};
  }
}`}
              output={[
                ':root { --bg-primary: #ffffff; --bg-secondary: #f5f5f5; --text-primary: #1a1a1a; ... }',
                '.dark { --bg-primary: #1a1a1a; --bg-secondary: #2a2a2a; --text-primary: #ffffff; ... }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* Automatic Dark Mode Detection */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Automatic Detection (prefers-color-scheme)"
            description="Respect user's OS preference"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Auto Dark Mode"
              code={`// Light mode by default
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
}

// Automatically switch based on OS preference
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #ffffff;
  }
}

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
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Auto + Manual Override"
              code={`// Default (light)
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
}

// Auto dark mode
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --bg: #1a1a1a;
    --text: #ffffff;
  }
}

// Manual dark mode (always overrides)
[data-theme='dark'] {
  --bg: #1a1a1a;
  --text: #ffffff;
}

// Manual light mode (always overrides)
[data-theme='light'] {
  --bg: #ffffff;
  --text: #1a1a1a;
}`}
              output={[
                ':root { --bg: #ffffff; --text: #1a1a1a; }',
                '// Respects OS preference unless manually set',
                '[data-theme="dark"] { --bg: #1a1a1a; --text: #ffffff; }',
                '[data-theme="light"] { --bg: #ffffff; --text: #1a1a1a; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best Practice</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Support <strong>both</strong> automatic (prefers-color-scheme) and manual toggle. Give users control!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Color Management Strategies */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Color Management Strategies"
            description="Smart color adjustments"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="SCSS Color Functions"
              code={`// Base colors
$primary-light: #3b82f6;
$primary-dark: lighten($primary-light, 15%);

$bg-light: #ffffff;
$bg-dark: #1a1a1a;

// Generate shades
:root {
  --primary: #{$primary-light};
  --primary-hover: #{darken($primary-light, 10%)};
  --bg: #{$bg-light};
  --surface: #{darken($bg-light, 3%)};
}

.dark {
  --primary: #{$primary-dark};
  --primary-hover: #{lighten($primary-dark, 10%)};
  --bg: #{$bg-dark};
  --surface: #{lighten($bg-dark, 10%)};
}`}
              output={[
                ':root { --primary: #3b82f6; --primary-hover: #2563eb; --bg: #ffffff; --surface: #f5f5f5; }',
                '.dark { --primary: #60a5fa; --primary-hover: #93c5fd; --bg: #1a1a1a; --surface: #2a2a2a; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Opacity-Based Approach"
              code={`// Use same colors with opacity adjustments
:root {
  --bg-base: 255, 255, 255; // RGB for white
  --text-base: 0, 0, 0;     // RGB for black
  
  // Create variations with opacity
  --bg-primary: rgb(var(--bg-base));
  --bg-secondary: rgba(var(--bg-base), 0.9);
  --text-primary: rgb(var(--text-base));
  --text-secondary: rgba(var(--text-base), 0.6);
}

.dark {
  --bg-base: 26, 26, 26;    // Dark background
  --text-base: 255, 255, 255; // White text
  
  // Same opacity variations
  --bg-primary: rgb(var(--bg-base));
  --bg-secondary: rgba(var(--bg-base), 0.9);
  --text-primary: rgb(var(--text-base));
  --text-secondary: rgba(var(--text-base), 0.6);
}`}
              output={[
                ':root { --bg-base: 255, 255, 255; --text-base: 0, 0, 0; }',
                '.dark { --bg-base: 26, 26, 26; --text-base: 255, 255, 255; }',
                '// Same structure, different base colors'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Semantic Color Scale"
              code={`// Define semantic scales
$gray-light: (
  50: #f9fafb,
  100: #f3f4f6,
  200: #e5e7eb,
  300: #d1d5db,
  400: #9ca3af,
  500: #6b7280,
  600: #4b5563,
  700: #374151,
  800: #1f2937,
  900: #111827
);

$gray-dark: (
  50: #1a1a1a,
  100: #2a2a2a,
  200: #3a3a3a,
  300: #4a4a4a,
  400: #6a6a6a,
  500: #8a8a8a,
  600: #aaaaaa,
  700: #cacaca,
  800: #eaeaea,
  900: #ffffff
);

// Light mode uses light scale
:root {
  --gray-50: #{map-get($gray-light, 50)};
  --gray-100: #{map-get($gray-light, 100)};
  // ... etc
}

// Dark mode uses dark scale (inverted)
.dark {
  --gray-50: #{map-get($gray-dark, 50)};
  --gray-100: #{map-get($gray-dark, 100)};
  // ... etc
}`}
              output={[
                ':root { --gray-50: #f9fafb; --gray-100: #f3f4f6; ... }',
                '.dark { --gray-50: #1a1a1a; --gray-100: #2a2a2a; ... }',
                '// Same variable names, different values'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Component Examples */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Moon className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Dark Mode Components"
            description="Real component examples"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Card Component"
              code={`// Variables
:root {
  --card-bg: #ffffff;
  --card-border: #e0e0e0;
  --card-shadow: rgba(0, 0, 0, 0.1);
  --card-text: #1a1a1a;
}

.dark {
  --card-bg: #2a2a2a;
  --card-border: #404040;
  --card-shadow: rgba(0, 0, 0, 0.3);
  --card-text: #ffffff;
}

// Component
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: 0 2px 8px var(--card-shadow);
  color: var(--card-text);
  border-radius: 8px;
  padding: 1.5rem;
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  &__description {
    opacity: 0.8;
    line-height: 1.6;
  }
}`}
              output={[
                ':root { --card-bg: #ffffff; --card-border: #e0e0e0; ... }',
                '.dark { --card-bg: #2a2a2a; --card-border: #404040; ... }',
                '.card { background: var(--card-bg); border: 1px solid var(--card-border); box-shadow: 0 2px 8px var(--card-shadow); ... }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Button Component"
              code={`// Button variables
:root {
  --btn-primary-bg: #3b82f6;
  --btn-primary-text: #ffffff;
  --btn-primary-hover: #2563eb;
  
  --btn-secondary-bg: #f5f5f5;
  --btn-secondary-text: #1a1a1a;
  --btn-secondary-hover: #e5e5e5;
}

.dark {
  --btn-primary-bg: #60a5fa;
  --btn-primary-text: #1a1a1a;
  --btn-primary-hover: #93c5fd;
  
  --btn-secondary-bg: #2a2a2a;
  --btn-secondary-text: #ffffff;
  --btn-secondary-hover: #3a3a3a;
}

// Button styles
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &--primary {
    background: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    
    &:hover {
      background: var(--btn-primary-hover);
    }
  }
  
  &--secondary {
    background: var(--btn-secondary-bg);
    color: var(--btn-secondary-text);
    
    &:hover {
      background: var(--btn-secondary-hover);
    }
  }
}`}
              output={[
                ':root { --btn-primary-bg: #3b82f6; --btn-primary-text: #ffffff; ... }',
                '.dark { --btn-primary-bg: #60a5fa; --btn-primary-text: #1a1a1a; ... }',
                '.btn--primary { background: var(--btn-primary-bg); color: var(--btn-primary-text); }',
                '.btn--primary:hover { background: var(--btn-primary-hover); }',
                '// Works perfectly in both themes!'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
          title="Dark Mode in Action"
          description="Live demo with theme toggle"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="app">
  <header class="header">
    <h1 class="header__title">Dark Mode Demo</h1>
    <button class="theme-toggle" onclick="toggleTheme()">
      <span class="theme-toggle__icon">🌙</span>
      Toggle Theme
    </button>
  </header>
  
  <main class="main">
    <div class="card">
      <h2 class="card__title">Beautiful Card</h2>
      <p class="card__description">
        This card adapts to light and dark mode seamlessly using CSS custom properties.
      </p>
      <button class="btn btn--primary">Primary Action</button>
      <button class="btn btn--secondary">Secondary</button>
    </div>
    
    <div class="card">
      <h2 class="card__title">Another Card</h2>
      <p class="card__description">
        All colors, shadows, and borders automatically adjust based on the theme.
      </p>
      <div class="stats">
        <div class="stat">
          <div class="stat__value">128</div>
          <div class="stat__label">Users</div>
        </div>
        <div class="stat">
          <div class="stat__value">45</div>
          <div class="stat__label">Projects</div>
        </div>
      </div>
    </div>
  </main>
</div>`}
          css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// Light mode (default)
:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border: #e0e0e0;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --shadow: rgba(0, 0, 0, 0.1);
}

// Dark mode
.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border: #404040;
  --primary: #60a5fa;
  --primary-hover: #93c5fd;
  --shadow: rgba(0, 0, 0, 0.3);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  transition: background 0.3s, color 0.3s;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border);
  
  &__title {
    font-size: 2rem;
    font-weight: 700;
  }
}

.theme-toggle {
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: var(--bg-secondary);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  
  &:hover {
    background: var(--primary-hover);
    transform: scale(1.05);
  }
  
  &__icon {
    font-size: 1.25rem;
  }
}

.main {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px var(--shadow);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--shadow);
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  &__description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  
  &--primary {
    background: var(--primary);
    color: var(--bg-secondary);
    
    &:hover {
      background: var(--primary-hover);
    }
  }
  
  &--secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--border);
    
    &:hover {
      background: var(--bg-primary);
    }
  }
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.stat {
  flex: 1;
  text-align: center;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: 8px;
  
  &__value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary);
  }
  
  &__label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-top: 0.25rem;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .main {
    grid-template-columns: 1fr;
  }
}`}
          js={`function toggleTheme() {
  document.body.classList.toggle('dark');
  
  // Update icon
  const icon = document.querySelector('.theme-toggle__icon');
  if (document.body.classList.contains('dark')) {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
}`}
          title="Dark Mode Toggle Demo"
          description="Click the toggle button to switch between light and dark themes!"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Dark Mode Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use CSS Custom Properties</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Best for runtime switching without recompiling
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Support prefers-color-scheme</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Respect user's OS preference as default
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Allow Manual Toggle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Let users override OS settings
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Test All Components</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Ensure good contrast in both modes
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Smooth Transitions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add <code className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">transition</code> to background and color properties
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Don't Invert Everything</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Images and some colors should stay the same
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Avoid Pure Black</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">#1a1a1a</code> instead of <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">#000000</code> for better eye comfort
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
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">CSS Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Define colors as variables, switch with class/attribute
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Auto Detection</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use prefers-color-scheme media query
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Manual Toggle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                JavaScript to add/remove .dark class
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">SCSS Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Organize theme colors in maps
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
