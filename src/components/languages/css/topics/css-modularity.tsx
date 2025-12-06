import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Puzzle, Sparkles, CheckCircle, Code, Zap, Package, Box, Component } from 'lucide-react';

interface CssModularityProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssModularity({ onOpenWebPlayground }: CssModularityProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Puzzle}
                category="CSS · Architecture"
                title="CSS Modularity"
                description="Build reusable, maintainable, and scalable CSS with modular component-based architecture"
                colorTheme="purple"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
                        <div className="relative">
                            <Puzzle className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Modularity?
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                        🧩 Breaking CSS into independent, reusable modules that can be composed to build complete interfaces!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Box className="w-5 h-5 animate-pulse" />
                                    🎯 Modular Approach
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Modular CSS</strong> means organizing styles into self-contained, reusable components. Each module is independent, predictable, and can be combined with others without conflicts. This approach improves maintainability and scalability.
                                </p>

                                {/* Visual */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200/50">
                                    <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🧱 Modular Structure
                                    </div>
                                    <div className="text-xs text-purple-600 dark:text-purple-400">
                                        Component = Styles + Structure + Behavior (isolated & reusable)
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    ✨ Modularity Benefits
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Package className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Reusable</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Use anywhere</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Isolated</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">No conflicts</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Zap className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Scalable</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Grows easily</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Component className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Composable</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Mix & match</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🧩</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Modular CSS</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Easy to maintain
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Team-friendly
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Predictable
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
                                        Think of CSS modules like LEGO blocks - small, focused, and infinitely combinable!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Modular CSS Structure</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">{'/* Base Module */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-blue-600 dark:text-blue-400">.button</span> {'{ ... }'}</div>
                            <div className="text-gray-500 mt-2">{'/* Variant Modules */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-green-600 dark:text-green-400">.button--primary</span> {'{ ... }'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-purple-600 dark:text-purple-400">.button--secondary</span> {'{ ... }'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CSS MODULES */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        CSS Modules - Scoped Styles
                    </CardTitle>
                    <CardDescription>
                        Automatically scoped CSS with unique class names per component
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="CSS Modules Example"
                        html={`<!-- Button.module.css is imported -->
<div class="container">
  <button class="btn btn-primary">
    Primary Button
  </button>
  
  <button class="btn btn-secondary">
    Secondary Button
  </button>
  
  <button class="btn btn-outline">
    Outline Button
  </button>
  
  <div class="card">
    <h3 class="card-title">Module Styles</h3>
    <p class="card-text">
      CSS Modules automatically generate unique class names like 
      <code>Button_btn__abc123</code> preventing style conflicts.
    </p>
  </div>
</div>`}
                        css={`/* Button.module.css - Scoped to this component */
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: system-ui, sans-serif;
}

/* Base button module */
.btn {
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Button variant modules */
.btn-primary {
  background: #6366f1;
  color: white;
}

.btn-primary:hover {
  background: #4f46e5;
}

.btn-secondary {
  background: #8b5cf6;
  color: white;
}

.btn-secondary:hover {
  background: #7c3aed;
}

.btn-outline {
  background: transparent;
  border-color: #6366f1;
  color: #6366f1;
}

.btn-outline:hover {
  background: #6366f1;
  color: white;
}

/* Card module */
.card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
}

.card-title {
  color: #1f2937;
  font-size: 20px;
  margin: 0 0 12px 0;
}

.card-text {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.card-text code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #6366f1;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #0f172a;
  }
  
  .card {
    background: #1e293b;
    border-color: #334155;
  }
  
  .card-title {
    color: #f1f5f9;
  }
  
  .card-text {
    color: #cbd5e1;
  }
  
  .card-text code {
    background: #334155;
    color: #a78bfa;
  }
  
  .btn-outline {
    border-color: #818cf8;
    color: #818cf8;
  }
  
  .btn-outline:hover {
    background: #818cf8;
    color: white;
  }
}`}
                        colorTheme="indigo"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* COMPONENT-BASED CSS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Component className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        Component-Based Architecture
                    </CardTitle>
                    <CardDescription>
                        Organizing CSS around reusable UI components
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Component-Based CSS"
                        html={`<div class="app">
  <!-- Alert Component -->
  <div class="alert alert--success">
    <div class="alert__icon">✓</div>
    <div class="alert__content">
      <h4 class="alert__title">Success!</h4>
      <p class="alert__message">Your changes have been saved.</p>
    </div>
  </div>
  
  <!-- Alert Component (Different Variant) -->
  <div class="alert alert--warning">
    <div class="alert__icon">⚠</div>
    <div class="alert__content">
      <h4 class="alert__title">Warning</h4>
      <p class="alert__message">Please review your settings.</p>
    </div>
  </div>
  
  <!-- Alert Component (Error Variant) -->
  <div class="alert alert--error">
    <div class="alert__icon">✗</div>
    <div class="alert__content">
      <h4 class="alert__title">Error</h4>
      <p class="alert__message">Something went wrong.</p>
    </div>
  </div>
</div>`}
                        css={`.app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Alert Component - Base */
.alert {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Alert Elements */
.alert__icon {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.alert__content {
  flex: 1;
}

.alert__title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.alert__message {
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

/* Alert Variants/Modifiers */
.alert--success {
  background: #d1fae5;
  border-color: #6ee7b7;
}

.alert--success .alert__icon {
  color: #059669;
}

.alert--success .alert__title {
  color: #065f46;
}

.alert--success .alert__message {
  color: #047857;
}

.alert--warning {
  background: #fef3c7;
  border-color: #fcd34d;
}

.alert--warning .alert__icon {
  color: #d97706;
}

.alert--warning .alert__title {
  color: #92400e;
}

.alert--warning .alert__message {
  color: #b45309;
}

.alert--error {
  background: #fee2e2;
  border-color: #fca5a5;
}

.alert--error .alert__icon {
  color: #dc2626;
}

.alert--error .alert__title {
  color: #991b1b;
}

.alert--error .alert__message {
  color: #b91c1c;
}

@media (prefers-color-scheme: dark) {
  .app {
    background: #0f172a;
  }
  
  .alert--success {
    background: #064e3b;
    border-color: #059669;
  }
  
  .alert--success .alert__title,
  .alert--success .alert__message {
    color: #d1fae5;
  }
  
  .alert--warning {
    background: #78350f;
    border-color: #f59e0b;
  }
  
  .alert--warning .alert__title,
  .alert--warning .alert__message {
    color: #fef3c7;
  }
  
  .alert--error {
    background: #7f1d1d;
    border-color: #dc2626;
  }
  
  .alert--error .alert__title,
  .alert--error .alert__message {
    color: #fee2e2;
  }
}`}
                        colorTheme="pink"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Sparkles className="w-5 h-5" />
                        Modularity Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Single Responsibility:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Each module should do one thing well - keep components focused and reusable.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Avoid global styles:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Keep styles scoped to components to prevent unwanted cascading and conflicts.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Use composition:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Build complex UIs by combining simple, reusable modules rather than creating monolithic components.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Document dependencies:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Clearly document which modules depend on others for easier maintenance.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                <CheckCircle className="h-4 w-4 text-purple-600" />
                <AlertDescription className="text-purple-700 dark:text-purple-300">
                    <strong className="block mb-1">Universal Approach</strong>
                    Modularity is an organizational pattern that works with any CSS. Tools like CSS Modules require build tools but the modular approach itself is universally applicable!
                </AlertDescription>
            </Alert>

            {/* INTERACTIVE PLAYGROUND */}
            {onOpenWebPlayground && (
                <InteractivePlayground
                    title="🧩 Try CSS Modularity"
                    description="Build modular, reusable components with scoped styles and see them in action"
                    features={[
                        'Scoped Styles',
                        'Component Isolation',
                        'Live Preview',
                        'Modular Architecture'
                    ]}
                    buttonText="Open Modularity Playground"
                    onLaunchPlayground={onOpenWebPlayground}
                    playgroundData={{
                        html: `<div class="app">
  <!-- Alert Component Module -->
  <div class="alert alert--success">
    <div class="alert__icon">✓</div>
    <div class="alert__content">
      <h4 class="alert__title">Success!</h4>
      <p class="alert__message">Your component is modular and reusable.</p>
    </div>
  </div>
  
  <div class="alert alert--warning">
    <div class="alert__icon">⚠</div>
    <div class="alert__content">
      <h4 class="alert__title">Warning</h4>
      <p class="alert__message">This component is self-contained.</p>
    </div>
  </div>
  
  <div class="alert alert--error">
    <div class="alert__icon">✗</div>
    <div class="alert__content">
      <h4 class="alert__title">Error</h4>
      <p class="alert__message">Modular styles prevent conflicts.</p>
    </div>
  </div>
  
  <!-- Button Module -->
  <div class="button-group">
    <button class="btn btn--primary btn--sm">Small</button>
    <button class="btn btn--primary btn--md">Medium</button>
    <button class="btn btn--secondary btn--lg">Large</button>
  </div>
</div>`,
                        css: `.app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Alert Module - Base */
.alert {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.alert__icon {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.alert__content {
  flex: 1;
}

.alert__title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.alert__message {
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

/* Alert Variants */
.alert--success {
  background: #d1fae5;
  border-color: #6ee7b7;
}

.alert--success .alert__icon { color: #059669; }
.alert--success .alert__title { color: #065f46; }
.alert--success .alert__message { color: #047857; }

.alert--warning {
  background: #fef3c7;
  border-color: #fcd34d;
}

.alert--warning .alert__icon { color: #d97706; }
.alert--warning .alert__title { color: #92400e; }
.alert--warning .alert__message { color: #b45309; }

.alert--error {
  background: #fee2e2;
  border-color: #fca5a5;
}

.alert--error .alert__icon { color: #dc2626; }
.alert--error .alert__title { color: #991b1b; }
.alert--error .alert__message { color: #b91c1c; }

/* Button Module */
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn--primary {
  background: #6366f1;
  color: white;
}

.btn--secondary {
  background: #8b5cf6;
  color: white;
}

.btn--sm { padding: 8px 16px; font-size: 14px; }
.btn--md { padding: 12px 24px; font-size: 16px; }
.btn--lg { padding: 16px 32px; font-size: 18px; }`,
                        js: ''
                    }}
                    colorTheme="purple"
                />
            )}
        </div>
    );
}
