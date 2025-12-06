import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Focus, Sparkles, CheckCircle, Code, Zap, Target, Eye, Keyboard } from 'lucide-react';

interface FocusManagementProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FocusManagement({ onOpenWebPlayground }: FocusManagementProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Focus}
                category="CSS · Accessibility"
                title="Focus Management"
                description="Create visible, accessible focus indicators for keyboard navigation with modern CSS selectors"
                colorTheme="blue"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
                        <div className="relative">
                            <Focus className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is Focus Management?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Make keyboard navigation visible and intuitive with proper focus styles for all interactive elements!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    ⌨️ Keyboard Navigation
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Focus Management</strong> ensures keyboard users can see which element is currently active. Focus indicators are essential for accessibility - they're the visual equivalent of a mouse cursor for keyboard-only users.
                                </p>

                                {/* Focus Visual */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200/50">
                                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🎯 Focus Indicators
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-400">
                                        15% of web users rely on keyboard navigation - make it visible!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Focus Selectors
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Target className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">:focus</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">All focus</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Keyboard className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">:focus-visible</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Keyboard only</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Eye className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">:focus-within</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Parent focus</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Focus className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">outline</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Custom styles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-sky-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">⌨️</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Focus States</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Keyboard friendly
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Screen readers
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            WCAG compliant
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
                                        Use :focus-visible to show focus only for keyboard users, not mouse clicks!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Focus Visible</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* ⌨️ Show focus only for keyboard */</div>
                            <div className="text-blue-600 dark:text-blue-400">button:focus-visible</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">outline</span>: <span className="text-yellow-600 dark:text-yellow-400">2px solid #3b82f6</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">outline-offset</span>: <span className="text-yellow-600 dark:text-yellow-400">2px</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* FOCUS VS FOCUS-VISIBLE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        :focus vs :focus-visible
                    </CardTitle>
                    <CardDescription>
                        Understand the difference and when to use each
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Focus Selectors Comparison"
                        html={`<div class="demo-container">
  <div class="demo-section">
    <h3>Using :focus (Shows on click & keyboard)</h3>
    <button class="btn-focus">Click or Tab to me</button>
    <input type="text" class="input-focus" placeholder="Focus shows on click too">
  </div>
  
  <div class="demo-section">
    <h3>Using :focus-visible (Keyboard only)</h3>
    <button class="btn-focus-visible">Click or Tab to me</button>
    <input type="text" class="input-focus-visible" placeholder="Focus only on keyboard">
  </div>
</div>`}
                        css={`.demo-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

/* Using :focus - shows for both mouse and keyboard */
.btn-focus,
.input-focus {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-focus {
  background: #8b5cf6;
  color: white;
  border-color: #8b5cf6;
}

.btn-focus:focus {
  outline: 3px solid #fbbf24;
  outline-offset: 2px;
}

.input-focus:focus {
  border-color: #8b5cf6;
  outline: 3px solid #fbbf24;
  outline-offset: 2px;
}

/* Using :focus-visible - shows only for keyboard */
.btn-focus-visible,
.input-focus-visible {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-focus-visible {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

/* Remove default focus outline */
.btn-focus-visible:focus,
.input-focus-visible:focus {
  outline: none;
}

/* Only show focus for keyboard navigation */
.btn-focus-visible:focus-visible {
  outline: 3px solid #10b981;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.2);
}

.input-focus-visible:focus-visible {
  border-color: #3b82f6;
  outline: 3px solid #10b981;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.2);
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #e5e7eb;
  }
  
  .btn-focus,
  .btn-focus-visible,
  .input-focus,
  .input-focus-visible {
    background: #1f2937;
    color: #e5e7eb;
    border-color: #374151;
  }
  
  .btn-focus {
    background: #7c3aed;
    border-color: #7c3aed;
  }
  
  .btn-focus-visible {
    background: #2563eb;
    border-color: #2563eb;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* FOCUS-WITHIN */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                        :focus-within
                    </CardTitle>
                    <CardDescription>
                        Style parent elements when children receive focus
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Focus Within Example"
                        html={`<div class="search-container">
  <label for="search">Search</label>
  <div class="search-wrapper">
    <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM13 13l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <input type="text" id="search" placeholder="Search...">
  </div>
  <p class="helper-text">Try tabbing into the input field!</p>
</div>

<form class="login-form">
  <h3>Login Form</h3>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="you@example.com">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="••••••••">
  </div>
  <button type="submit">Login</button>
</form>`}
                        css={`.search-container {
  margin-bottom: 40px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
}

.search-wrapper {
  position: relative;
  max-width: 400px;
  transition: all 0.3s ease;
  padding: 4px;
  border-radius: 12px;
}

/* Highlight wrapper when input is focused */
.search-wrapper:focus-within {
  background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  transition: color 0.3s;
}

.search-wrapper:focus-within .search-icon {
  color: #3b82f6;
}

.search-wrapper input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
  background: white;
}

.search-wrapper input:focus {
  outline: none;
  border-color: #3b82f6;
}

.helper-text {
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
}

/* Login Form */
.login-form {
  max-width: 400px;
  padding: 32px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.login-form:focus-within {
  border-color: #10b981;
  box-shadow: 0 12px 32px rgba(16, 185, 129, 0.15);
  transform: translateY(-2px);
}

.login-form h3 {
  margin: 0 0 24px 0;
  font-size: 24px;
  color: #111827;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
  background: white;
}

.form-group input:focus {
  outline: none;
  border-color: #10b981;
}

.login-form button {
  width: 100%;
  padding: 12px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.login-form button:hover {
  background: #059669;
}

.login-form button:focus-visible {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  label,
  .helper-text {
    color: #e5e7eb;
  }
  
  .search-wrapper:focus-within {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }
  
  .search-wrapper input,
  .form-group input {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
  
  .login-form {
    background: #1f2937;
    border-color: #374151;
  }
  
  .login-form h3 {
    color: #f9fafb;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* CUSTOM FOCUS STYLES */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Focus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Custom Focus Styles
                    </CardTitle>
                    <CardDescription>
                        Create beautiful, accessible custom focus indicators
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Creative Focus Indicators"
                        html={`<div class="focus-styles-demo">
  <button class="btn-glow">Glow Effect</button>
  <button class="btn-ring">Ring Effect</button>
  <button class="btn-underline">Underline Effect</button>
  <button class="btn-scale">Scale Effect</button>
  <button class="btn-border">Border Effect</button>
  <button class="btn-shadow">Shadow Effect</button>
</div>`}
                        css={`.focus-styles-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  padding: 20px;
}

/* Base button styles */
.focus-styles-demo button {
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #3b82f6;
  color: white;
}

/* Glow Effect */
.btn-glow:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3),
              0 0 20px rgba(59, 130, 246, 0.6);
}

/* Ring Effect */
.btn-ring {
  background: #8b5cf6;
}

.btn-ring:focus-visible {
  outline: 3px solid #c4b5fd;
  outline-offset: 3px;
}

/* Underline Effect */
.btn-underline {
  background: #10b981;
  position: relative;
}

.btn-underline:focus-visible {
  outline: none;
}

.btn-underline:focus-visible::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: #10b981;
  border-radius: 2px;
}

/* Scale Effect */
.btn-scale {
  background: #f59e0b;
}

.btn-scale:focus-visible {
  outline: none;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
}

/* Border Effect */
.btn-border {
  background: #ec4899;
  border: 2px solid transparent;
}

.btn-border:focus-visible {
  outline: none;
  border-color: #fce7f3;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3);
}

/* Shadow Effect */
.btn-shadow {
  background: #6366f1;
}

.btn-shadow:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #818cf8,
              0 8px 24px rgba(99, 102, 241, 0.5);
}

/* Hover states */
.focus-styles-demo button:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

@media (prefers-color-scheme: dark) {
  .btn-ring:focus-visible {
    outline-color: #7c3aed;
  }
  
  .btn-border:focus-visible {
    border-color: #9d174d;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Sparkles className="w-5 h-5" />
                        Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Never remove outlines without replacement:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> If you use <code>outline: none</code>, always provide an alternative visual indicator.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Use :focus-visible for buttons:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Show focus only for keyboard users, not mouse clicks - better UX.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Sufficient contrast:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Focus indicators must have 3:1 contrast ratio with adjacent colors (WCAG 2.1).</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Test keyboard navigation:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Press Tab through your entire page - every interactive element should be visible when focused.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Excellent Browser Support</strong>
                    :focus-visible is supported in all modern browsers (Chrome 86+, Firefox 85+, Safari 15.4+). :focus and :focus-within have universal support.
                </AlertDescription>
            </Alert>
        </div>
    );
}
