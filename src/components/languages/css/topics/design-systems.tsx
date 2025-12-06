import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Palette, Sparkles, CheckCircle, Code, Zap, Layers, Box, BookOpen } from 'lucide-react';

interface DesignSystemsProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function DesignSystems({ onOpenWebPlayground }: DesignSystemsProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Palette}
                category="CSS · Architecture"
                title="Design Systems"
                description="Build consistent, scalable design systems with design tokens, component libraries, and style guides"
                colorTheme="pink"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-pink-600 dark:text-pink-400">
                        <div className="relative">
                            <Palette className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
                        </div>
                        What are Design Systems?
                    </CardTitle>
                    <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
                        🎨 A collection of reusable components, guidelines, and design tokens that ensure consistency across products!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-pink-400 dark:hover:border-pink-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-pink-600 dark:text-pink-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Layers className="w-5 h-5 animate-pulse" />
                                    🎯 Design System Components
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Design systems</strong> are the single source of truth for your brand's design. They include design tokens (colors, spacing, typography), reusable components, patterns, and documentation that ensures consistency across all products and teams.
                                </p>

                                {/* Visual */}
                                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-lg border border-pink-200/50">
                                    <div className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🎨 Design System = Tokens + Components + Guidelines
                                    </div>
                                    <div className="text-xs text-pink-600 dark:text-pink-400">
                                        Consistent branding • Faster development • Better collaboration
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-pink-600 dark:text-pink-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    ✨ Design System Benefits
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <CheckCircle className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Consistent</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Same look</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Zap className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Efficient</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Build faster</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Layers className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Scalable</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Grows easily</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <BookOpen className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Documented</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Clear guides</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🎨</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-pink-700 dark:text-pink-300">Design System</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Brand consistency
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Team alignment
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Faster iteration
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💡</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Start small! Define colors and typography first, then build components gradually.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code Example */}
                    <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Design Tokens</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">{'/* Color Tokens */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-blue-600 dark:text-blue-400">--color-primary</span>: <span className="text-green-600 dark:text-green-400">#3b82f6</span>;</div>
                            <div className="text-gray-500 mt-2">{'/* Spacing Tokens */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-purple-600 dark:text-purple-400">--space-md</span>: <span className="text-green-600 dark:text-green-400">16px</span>;</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* DESIGN TOKENS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Box className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        Design Tokens - The Foundation
                    </CardTitle>
                    <CardDescription>
                        CSS custom properties for colors, spacing, typography, and more
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Design Token System"
                        html={`<div class="design-system-demo">
  <div class="section">
    <h2 class="heading-lg">Design Tokens in Action</h2>
    <p class="text-body">
      Design tokens are the visual design atoms of your system - colors, 
      spacing, typography, and more.
    </p>
  </div>
  
  <div class="card card-primary">
    <h3 class="heading-md">Primary Card</h3>
    <p class="text-body">Using primary color token</p>
    <button class="btn btn-primary">Primary Button</button>
  </div>
  
  <div class="card card-secondary">
    <h3 class="heading-md">Secondary Card</h3>
    <p class="text-body">Using secondary color token</p>
    <button class="btn btn-secondary">Secondary Button</button>
  </div>
  
  <div class="token-showcase">
    <div class="token-item">
      <div class="color-swatch primary"></div>
      <span>Primary</span>
    </div>
    <div class="token-item">
      <div class="color-swatch secondary"></div>
      <span>Secondary</span>
    </div>
    <div class="token-item">
      <div class="color-swatch success"></div>
      <span>Success</span>
    </div>
  </div>
</div>`}
                        css={`:root {
  /* Color Tokens */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-secondary: #8b5cf6;
  --color-secondary-dark: #7c3aed;
  --color-success: #10b981;
  
  /* Spacing Tokens */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Typography Tokens */
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  
  /* Border Radius Tokens */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

.design-system-demo {
  max-width: 800px;
  margin: 40px auto;
  padding: var(--space-lg);
  font-family: system-ui, sans-serif;
}

.section {
  margin-bottom: var(--space-xl);
}

/* Typography using tokens */
.heading-lg {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 var(--space-md) 0;
}

.heading-md {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 0 var(--space-sm) 0;
}

.text-body {
  font-size: var(--font-size-md);
  line-height: 1.6;
  color: #6b7280;
  margin: 0;
}

/* Cards using tokens */
.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-md);
  border: 2px solid;
}

.card-primary {
  background: #eff6ff;
  border-color: var(--color-primary);
}

.card-primary .heading-md {
  color: var(--color-primary);
}

.card-secondary {
  background: #f5f3ff;
  border-color: var(--color-secondary);
}

.card-secondary .heading-md {
  color: var(--color-secondary);
}

/* Buttons using tokens */
.btn {
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--font-size-md);
  cursor: pointer;
  transition: all 0.2s;
  margin-top: var(--space-md);
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
}

.btn-secondary {
  background: var(--color-secondary);
  color: white;
}

.btn-secondary:hover {
  background: var(--color-secondary-dark);
}

/* Token Showcase */
.token-showcase {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-xl);
  flex-wrap: wrap;
}

.token-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-md);
  border: 2px solid #e5e7eb;
}

.color-swatch.primary {
  background: var(--color-primary);
}

.color-swatch.secondary {
  background: var(--color-secondary);
}

.color-swatch.success {
  background: var(--color-success);
}

.token-item span {
  font-size: var(--font-size-sm);
  color: #6b7280;
}

@media (prefers-color-scheme: dark) {
  .design-system-demo {
    background: #0f172a;
  }
  
  .heading-lg {
    color: #f9fafb;
  }
  
  .text-body {
    color: #d1d5db;
  }
  
  .card-primary {
    background: #1e3a8a;
  }
  
  .card-secondary {
    background: #581c87;
  }
  
  .color-swatch {
    border-color: #374151;
  }
  
  .token-item span {
    color: #9ca3af;
  }
}`}
                        colorTheme="indigo"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* COMPONENT LIBRARY */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Component Library
                    </CardTitle>
                    <CardDescription>
                        Reusable UI components built with design tokens
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Component Library Example"
                        html={`<div class="component-library">
  <h2 class="lib-heading">Button Components</h2>
  
  <div class="component-section">
    <h3 class="section-title">Sizes</h3>
    <div class="component-grid">
      <button class="ds-button ds-button-sm">Small</button>
      <button class="ds-button ds-button-md">Medium</button>
      <button class="ds-button ds-button-lg">Large</button>
    </div>
  </div>
  
  <div class="component-section">
    <h3 class="section-title">Variants</h3>
    <div class="component-grid">
      <button class="ds-button ds-button-primary">Primary</button>
      <button class="ds-button ds-button-secondary">Secondary</button>
      <button class="ds-button ds-button-outline">Outline</button>
      <button class="ds-button ds-button-ghost">Ghost</button>
    </div>
  </div>
  
  <div class="component-section">
    <h3 class="section-title">States</h3>
    <div class="component-grid">
      <button class="ds-button ds-button-primary">Normal</button>
      <button class="ds-button ds-button-primary" disabled>Disabled</button>
    </div>
  </div>
</div>`}
                        css={`:root {
  --ds-primary: #6366f1;
  --ds-secondary: #8b5cf6;
  --ds-text: #1f2937;
  --ds-border: #d1d5db;
  --ds-radius: 8px;
  --ds-spacing-sm: 8px;
  --ds-spacing-md: 12px;
  --ds-spacing-lg: 16px;
}

.component-library {
  max-width: 800px;
  margin: 40px auto;
  padding: 24px;
}

.lib-heading {
  font-size: 28px;
  font-weight: 700;
  color: var(--ds-text);
  margin: 0 0 24px 0;
}

.component-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #6b7280;
  margin: 0 0 12px 0;
}

.component-grid {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Base Button Component */
.ds-button {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: var(--ds-radius);
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ds-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.ds-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Button Sizes */
.ds-button-sm {
  padding: var(--ds-spacing-sm) var(--ds-spacing-md);
  font-size: 14px;
}

.ds-button-md {
  padding: var(--ds-spacing-md) var(--ds-spacing-lg);
  font-size: 16px;
}

.ds-button-lg {
  padding: var(--ds-spacing-lg) 24px;
  font-size: 18px;
}

/* Button Variants */
.ds-button-primary {
  background: var(--ds-primary);
  color: white;
}

.ds-button-primary:hover:not(:disabled) {
  background: #4f46e5;
}

.ds-button-secondary {
  background: var(--ds-secondary);
  color: white;
}

.ds-button-secondary:hover:not(:disabled) {
  background: #7c3aed;
}

.ds-button-outline {
  background: transparent;
  border-color: var(--ds-primary);
  color: var(--ds-primary);
}

.ds-button-outline:hover:not(:disabled) {
  background: var(--ds-primary);
  color: white;
}

.ds-button-ghost {
  background: transparent;
  color: var(--ds-text);
}

.ds-button-ghost:hover:not(:disabled) {
  background: #f3f4f6;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ds-text: #f9fafb;
    --ds-border: #374151;
  }
  
  .component-library {
    background: #0f172a;
  }
  
  .section-title {
    color: #9ca3af;
  }
  
  .ds-button-ghost {
    color: #f9fafb;
  }
  
  .ds-button-ghost:hover:not(:disabled) {
    background: #1f2937;
  }
  
  .ds-button-outline {
    border-color: #818cf8;
    color: #818cf8;
  }
  
  .ds-button-outline:hover:not(:disabled) {
    background: #818cf8;
    color: white;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Sparkles className="w-5 h-5" />
                        Design System Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-pink-900 dark:text-pink-200">Start with design tokens:</strong>
                            <span className="text-pink-700 dark:text-pink-300"> Define your foundation (colors, spacing, typography) before building components.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-pink-900 dark:text-pink-200">Document everything:</strong>
                            <span className="text-pink-700 dark:text-pink-300"> Every component, token, and pattern should have clear documentation and usage examples.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-pink-900 dark:text-pink-200">Version your system:</strong>
                            <span className="text-pink-700 dark:text-pink-300"> Use semantic versioning to manage changes and maintain backwards compatibility.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-pink-900 dark:text-pink-200">Make it accessible:</strong>
                            <span className="text-pink-700 dark:text-pink-300"> Build accessibility (WCAG) into your design system from the start, not as an afterthought.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-pink-200 bg-pink-50 dark:bg-pink-950/20">
                <CheckCircle className="h-4 w-4 text-pink-600" />
                <AlertDescription className="text-pink-700 dark:text-pink-300">
                    <strong className="block mb-1">Modern Standards</strong>
                    Design systems using CSS custom properties work in all modern browsers. For IE11 support, consider using PostCSS to compile variables, or use a CSS-in-JS solution.
                </AlertDescription>
            </Alert>

            {/* INTERACTIVE PLAYGROUND */}
            {onOpenWebPlayground && (
                <InteractivePlayground
                    title="🎨 Try Design Systems"
                    description="Build a complete design system with tokens, components, and consistent styling"
                    features={[
                        'Design Tokens',
                        'Component Library',
                        'Live Preview',
                        'Consistent Theming'
                    ]}
                    buttonText="Open Design System Playground"
                    onLaunchPlayground={onOpenWebPlayground}
                    playgroundData={{
                        html: `<div class="ds-demo">
  <h1 class="ds-heading-xl">Design System Demo</h1>
  <p class="ds-text-body">
    A complete design system with consistent tokens and components.
  </p>
  
  <!-- Button Sizes -->
  <div class="ds-section">
    <h3 class="ds-heading-md">Button Sizes</h3>
    <div class="ds-button-group">
      <button class="ds-btn ds-btn--sm ds-btn--primary">Small</button>
      <button class="ds-btn ds-btn--md ds-btn--primary">Medium</button>
      <button class="ds-btn ds-btn--lg ds-btn--primary">Large</button>
    </div>
  </div>
  
  <!-- Button Variants -->
  <div class="ds-section">
    <h3 class="ds-heading-md">Button Variants</h3>
    <div class="ds-button-group">
      <button class="ds-btn ds-btn--md ds-btn--primary">Primary</button>
      <button class="ds-btn ds-btn--md ds-btn--secondary">Secondary</button>
      <button class="ds-btn ds-btn--md ds-btn--outline">Outline</button>
    </div>
  </div>
  
  <!-- Color Tokens -->
  <div class="ds-section">
    <h3 class="ds-heading-md">Color Tokens</h3>
    <div class="ds-color-grid">
      <div class="ds-color-item">
        <div class="ds-swatch ds-swatch--primary"></div>
        <span>Primary</span>
      </div>
      <div class="ds-color-item">
        <div class="ds-swatch ds-swatch--secondary"></div>
        <span>Secondary</span>
      </div>
      <div class="ds-color-item">
        <div class="ds-swatch ds-swatch--success"></div>
        <span>Success</span>
      </div>
    </div>
  </div>
</div>`,
                        css: `:root {
  /* Color Tokens */
  --ds-color-primary: #6366f1;
  --ds-color-primary-hover: #4f46e5;
  --ds-color-secondary: #8b5cf6;
  --ds-color-secondary-hover: #7c3aed;
  --ds-color-success: #10b981;
  
  /* Spacing Tokens */
  --ds-space-xs: 4px;
  --ds-space-sm: 8px;
  --ds-space-md: 16px;
  --ds-space-lg: 24px;
  --ds-space-xl: 32px;
  
  /* Typography Tokens */
  --ds-font-sm: 14px;
  --ds-font-md: 16px;
  --ds-font-lg: 20px;
  --ds-font-xl: 32px;
  
  /* Border Radius Tokens */
  --ds-radius: 8px;
}

.ds-demo {
  max-width: 800px;
  margin: 40px auto;
  padding: var(--ds-space-lg);
  font-family: system-ui, sans-serif;
}

/* Typography System */
.ds-heading-xl {
  font-size: var(--ds-font-xl);
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 var(--ds-space-md) 0;
}

.ds-heading-md {
  font-size: var(--ds-font-lg);
  font-weight: 600;
  color: #374151;
  margin: 0 0 var(--ds-space-sm) 0;
}

.ds-text-body {
  font-size: var(--ds-font-md);
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 var(--ds-space-xl) 0;
}

/* Layout */
.ds-section {
  margin-bottom: var(--ds-space-xl);
}

.ds-button-group {
  display: flex;
  gap: var(--ds-space-md);
  flex-wrap: wrap;
}

/* Button Component */
.ds-btn {
  border: 2px solid transparent;
  border-radius: var(--ds-radius);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.ds-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Button Sizes */
.ds-btn--sm {
  padding: var(--ds-space-sm) var(--ds-space-md);
  font-size: var(--ds-font-sm);
}

.ds-btn--md {
  padding: var(--ds-space-md) var(--ds-space-lg);
  font-size: var(--ds-font-md);
}

.ds-btn--lg {
  padding: var(--ds-space-lg) var(--ds-space-xl);
  font-size: var(--ds-font-lg);
}

/* Button Variants */
.ds-btn--primary {
  background: var(--ds-color-primary);
  color: white;
}

.ds-btn--primary:hover {
  background: var(--ds-color-primary-hover);
}

.ds-btn--secondary {
  background: var(--ds-color-secondary);
  color: white;
}

.ds-btn--secondary:hover {
  background: var(--ds-color-secondary-hover);
}

.ds-btn--outline {
  background: transparent;
  border-color: var(--ds-color-primary);
  color: var(--ds-color-primary);
}

.ds-btn--outline:hover {
  background: var(--ds-color-primary);
  color: white;
}

/* Color Swatches */
.ds-color-grid {
  display: flex;
  gap: var(--ds-space-lg);
}

.ds-color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-space-xs);
}

.ds-swatch {
  width: 60px;
  height: 60px;
  border-radius: var(--ds-radius);
  border: 2px solid #e5e7eb;
}

.ds-swatch--primary {
  background: var(--ds-color-primary);
}

.ds-swatch--secondary {
  background: var(--ds-color-secondary);
}

.ds-swatch--success {
  background: var(--ds-color-success);
}

.ds-color-item span {
  font-size: var(--ds-font-sm);
  color: #6b7280;
}`,
                        js: ''
                    }}
                    colorTheme="purple"
                />
            )}
        </div>
    );
}
