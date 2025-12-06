import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Sparkles, CheckCircle, Code, Zap, Target, BookOpen, Hash } from 'lucide-react';

interface CssNamingConventionsProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssNamingConventions({ onOpenWebPlayground }: CssNamingConventionsProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={FileText}
                category="CSS · Architecture"
                title="CSS Naming Conventions"
                description="Master consistent, maintainable class naming patterns for scalable and readable stylesheets"
                colorTheme="green"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
                        <div className="relative">
                            <FileText className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are Naming Conventions?
                    </CardTitle>
                    <CardDescription className="text-lg text-green-600 dark:text-green-400">
                        📛 Standardized patterns for naming CSS classes that improve code readability, maintainability, and team collaboration!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Hash className="w-5 h-5 animate-pulse" />
                                    📋 Naming Matters
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Good naming conventions</strong> make your CSS self-documenting, reduce naming conflicts, improve team communication, and make codebases easier to maintain. Consistent patterns help developers understand component structure instantly.
                                </p>

                                {/* Naming Visual */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        ✅ Good vs Bad Naming
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div className="text-green-600 dark:text-green-400">
                                            <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded mb-1">.card-header</div>
                                            <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded">.btn-primary</div>
                                        </div>
                                        <div className="text-red-600 dark:text-red-400">
                                            <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded mb-1">.ch</div>
                                            <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded">.button1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎯 Naming Principles
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Target className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Descriptive</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Clear purpose</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <BookOpen className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Consistent</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Same pattern</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Zap className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Scalable</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Grows easily</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <FileText className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Readable</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Easy to parse</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-green-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">📛</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-green-700 dark:text-green-300">Good Naming</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Self-documenting
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            No conflicts
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Easy maintenance
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
                                        Choose one naming convention and stick with it throughout your project!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">BEM Naming Example</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">{'/* Block */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-blue-600 dark:text-blue-400">.card</span> {'{ }'}</div>
                            <div className="text-gray-500 mt-2">{'/* Element */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-green-600 dark:text-green-400">.card__title</span> {'{ }'}</div>
                            <div className="text-gray-500 mt-2">{'/* Modifier */'}</div>
                            <div className="text-gray-900 dark:text-white"><span className="text-purple-600 dark:text-purple-400">.card--featured</span> {'{ }'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BEM METHODOLOGY */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        BEM - Block Element Modifier
                    </CardTitle>
                    <CardDescription>
                        Most popular naming convention - Block__Element--Modifier pattern
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="BEM Naming in Action"
                        html={`<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">Product Title</h2>
    <span class="card__badge card__badge--new">New!</span>
  </div>
  
  <div class="card__body">
    <p class="card__description">
      BEM uses double underscores for elements and double hyphens for modifiers.
    </p>
  </div>
  
  <div class="card__footer">
    <button class="card__button card__button--primary">
      Buy Now
    </button>
    <button class="card__button card__button--secondary">
      Learn More
    </button>
  </div>
</div>`}
                        css={`/* Block - standalone component */
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 400px;
  margin: 40px auto;
}

/* Modifier - variant of block */
.card--featured {
  border: 3px solid #3b82f6;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
}

/* Element - part of block */
.card__header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e5e7eb;
}

.card__title {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.card__badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

/* Element modifier */
.card__badge--new {
  background: #10b981;
  color: white;
}

.card__body {
  margin-bottom: 20px;
}

.card__description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.card__footer {
  display: flex;
  gap: 12px;
}

.card__button {
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.card__button:hover {
  transform: translateY(-2px);
}

.card__button--primary {
  background: #3b82f6;
  color: white;
}

.card__button--secondary {
  background: #e5e7eb;
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  .card {
    background: #1f2937;
  }
  
  .card--featured {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #60a5fa;
  }
  
  .card__title {
    color: #f9fafb;
  }
  
  .card__description {
    color: #d1d5db;
  }
  
  .card__header {
    border-bottom-color: #374151;
  }
  
  .card__button--secondary {
    background: #374151;
    color: #f9fafb;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* UTILITY-FIRST NAMING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        Utility-First Naming
                    </CardTitle>
                    <CardDescription>
                        Single-purpose classes for rapid development (like Tailwind CSS)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Utility Class Naming"
                        html={`<div class="container">
  <div class="alert alert-success">
    <div class="flex items-center gap-3">
      <svg class="icon icon-check" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      <div>
        <h3 class="text-lg font-bold mb-1">Success!</h3>
        <p class="text-sm">Your changes have been saved successfully.</p>
      </div>
    </div>
  </div>
  
  <div class="button-group">
    <button class="btn btn-primary btn-lg">
      Large Primary
    </button>
    <button class="btn btn-secondary btn-md">
      Medium Secondary
    </button>
    <button class="btn btn-outline btn-sm">
      Small Outline
    </button>
  </div>
</div>`}
                        css={`.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

/* Utility classes - single purpose */
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-3 {
  gap: 12px;
}

.text-lg {
  font-size: 18px;
}

.text-sm {
  font-size: 14px;
}

.font-bold {
  font-weight: 700;
}

.mb-1 {
  margin-bottom: 4px;
}

/* Component classes */
.alert {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.alert-success {
  background: #d1fae5;
  border: 2px solid #6ee7b7;
  color: #065f46;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.icon-check {
  color: #10b981;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Button variants */
.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-secondary {
  background: #8b5cf6;
  color: white;
}

.btn-outline {
  background: transparent;
  border-color: #3b82f6;
  color: #3b82f6;
}

/* Button sizes */
.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
}

.btn-md {
  padding: 12px 24px;
  font-size: 16px;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #111827;
  }
  
  .alert-success {
    background: #064e3b;
    border-color: #059669;
    color: #d1fae5;
  }
  
  .btn-outline {
    border-color: #60a5fa;
    color: #60a5fa;
  }
}`}
                        colorTheme="cyan"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Sparkles className="w-5 h-5" />
                        Naming Convention Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Use lowercase and hyphens:</strong>
                            <span className="text-green-700 dark:text-green-300"> Prefer <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">card-header</code> over <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">cardHeader</code> or <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">CardHeader</code>.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Be descriptive, not abbreviated:</strong>
                            <span className="text-green-700 dark:text-green-300"> Use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">navigation-menu</code> instead of <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">nav-m</code>.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Avoid presentational names:</strong>
                            <span className="text-green-700 dark:text-green-300"> Use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">alert-error</code> not <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">red-box</code>.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Maintain consistency:</strong>
                            <span className="text-green-700 dark:text-green-300"> If you use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">btn</code> for buttons, don't also use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">button</code>.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Universal Compatibility</strong>
                    Naming conventions are purely organizational - they work in all browsers and don't affect CSS functionality. Choose the convention that works best for your team!
                </AlertDescription>
            </Alert>

            {/* INTERACTIVE PLAYGROUND */}
            {onOpenWebPlayground && (
                <InteractivePlayground
                    title="🎯 Try CSS Naming Conventions"
                    description="Experiment with BEM, utility-first, and other naming patterns in a live playground"
                    features={[
                        'BEM Methodology',
                        'Utility Classes',
                        'Live Preview',
                        'Component Examples'
                    ]}
                    buttonText="Open Naming Playground"
                    onLaunchPlayground={onOpenWebPlayground}
                    playgroundData={{
                        html: `<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">BEM Example Card</h2>
    <span class="card__badge card__badge--new">New!</span>
  </div>
  
  <div class="card__body">
    <p class="card__description">
      This card demonstrates BEM naming convention with clear 
      block, element, and modifier structure.
    </p>
  </div>
  
  <div class="card__footer">
    <button class="card__button card__button--primary">
      Learn More
    </button>
    <button class="card__button card__button--secondary">
      View Details
    </button>
  </div>
</div>

<!-- Utility-First Example -->
<div class="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-lg">
  <h3 class="text-lg font-bold mb-2">Utility-First Approach</h3>
  <p class="text-sm text-gray-700">
    Using single-purpose utility classes for rapid development.
  </p>
  <button class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Action Button
  </button>
</div>`,
                        css: `/* BEM Naming Convention */
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 400px;
  margin: 40px auto;
}

.card--featured {
  border: 3px solid #3b82f6;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e5e7eb;
}

.card__title {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.card__badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.card__badge--new {
  background: #10b981;
  color: white;
}

.card__body {
  margin-bottom: 20px;
}

.card__description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.card__footer {
  display: flex;
  gap: 12px;
}

.card__button {
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.card__button:hover {
  transform: translateY(-2px);
}

.card__button--primary {
  background: #3b82f6;
  color: white;
}

.card__button--secondary {
  background: #e5e7eb;
  color: #374151;
}

/* Utility Classes */
.mt-6 { margin-top: 24px; }
.p-4 { padding: 16px; }
.bg-blue-100 { background: #dbeafe; }
.border { border-width: 1px; }
.border-blue-300 { border-color: #93c5fd; }
.rounded-lg { border-radius: 8px; }
.text-lg { font-size: 18px; }
.font-bold { font-weight: 700; }
.mb-2 { margin-bottom: 8px; }
.text-sm { font-size: 14px; }
.text-gray-700 { color: #374151; }
.mt-3 { margin-top: 12px; }
.px-4 { padding-left: 16px; padding-right: 16px; }
.py-2 { padding-top: 8px; padding-bottom: 8px; }
.bg-blue-600 { background: #2563eb; }
.text-white { color: white; }
.rounded { border-radius: 4px; }
.hover\\:bg-blue-700:hover { background: #1d4ed8; }`,
                        js: ''
                    }}
                    colorTheme="emerald"
                />
            )}
        </div>
    );
}
