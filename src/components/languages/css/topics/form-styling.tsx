import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Edit, Sparkles, CheckCircle, Code, Zap, AlertCircle, Target, Box } from 'lucide-react';

interface FormStylingProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FormStyling({ onOpenWebPlayground }: FormStylingProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Edit}
                category="CSS · Forms & UI"
                title="Form Styling"
                description="Master modern form styling - create beautiful, accessible, and user-friendly forms with CSS"
                colorTheme="blue"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Edit className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is Form Styling?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Transform plain forms into beautiful, modern UI components with CSS - enhance user experience and accessibility!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🎨 Modern Form Elements
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Form Styling</strong> involves applying CSS to input fields, buttons, labels, and other form elements to create visually appealing and accessible user interfaces.
                                </p>

                                {/* Form Elements Visual */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200/50">
                                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                        <Box className="w-4 h-4" />
                                        📝 Common Form Elements
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-400">
                                        Inputs, Textareas, Select dropdowns, Buttons, Checkboxes, Radio buttons, File uploads - all can be beautifully styled!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Styling Capabilities
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Edit className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Custom Look</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Unique design</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">States</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Focus, hover, disabled</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Target className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Accessibility</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Screen reader friendly</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Zap className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Responsive</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Mobile optimized</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">📝</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Styled Forms</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better UX
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Brand consistency
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Accessible
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
                                        Always test form styles with keyboard navigation and screen readers!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Basic Form Styling</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 📝 Style input fields */</div>
                            <div className="text-blue-600 dark:text-blue-400">input[type="text"]</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">padding</span>: <span className="text-yellow-600 dark:text-yellow-400">12px</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border</span>: <span className="text-yellow-600 dark:text-yellow-400">2px solid #e5e7eb</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border-radius</span>: <span className="text-yellow-600 dark:text-yellow-400">8px</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">transition</span>: <span className="text-yellow-600 dark:text-yellow-400">border-color 0.3s</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* ✨ Focus state */</div>
                            <div className="text-blue-600 dark:text-blue-400">input[type="text"]:focus</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border-color</span>: <span className="text-yellow-600 dark:text-yellow-400">#3b82f6</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">outline</span>: <span className="text-yellow-600 dark:text-yellow-400">none</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">box-shadow</span>: <span className="text-yellow-600 dark:text-yellow-400">0 0 0 3px rgba(59, 130, 246, 0.1)</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC INPUT STYLING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Edit className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Text Input Styling
                    </CardTitle>
                    <CardDescription>
                        Style text inputs with modern design patterns
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Modern Text Input"
                        html={`<div class="form-group">
  <label for="username">Username</label>
  <input type="text" id="username" placeholder="Enter your username">
</div>

<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">
</div>

<div class="form-group">
  <label for="message">Message</label>
  <textarea id="message" placeholder="Your message here..." rows="4"></textarea>
</div>`}
                        css={`.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #6b7280;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />

                    <Alert className="mt-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                        <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <AlertDescription className="text-blue-700 dark:text-blue-300">
                            <strong>Tip:</strong> Use <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">font-size: 16px</code> minimum on iOS to prevent auto-zoom on focus!
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* BUTTON STYLING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Button Styling
                    </CardTitle>
                    <CardDescription>
                        Create modern, accessible buttons
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Button Variants"
                        html={`<div class="button-group">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>
  <button class="btn btn-ghost">Ghost</button>
</div>

<div class="button-group">
  <button class="btn btn-sm">Small</button>
  <button class="btn">Medium</button>
  <button class="btn btn-lg">Large</button>
</div>

<div class="button-group">
  <button class="btn btn-primary" disabled>Disabled</button>
</div>`}
                        css={`.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: #8b5cf6;
  color: white;
}

.btn-secondary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #3b82f6;
  border-color: #3b82f6;
}

.btn-outline:hover {
  background: #3b82f6;
  color: white;
}

.btn-ghost {
  background: transparent;
  color: #374151;
  border-color: transparent;
}

.btn-ghost:hover {
  background: #f3f4f6;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 14px;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 18px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

@media (prefers-color-scheme: dark) {
  .btn-ghost {
    color: #e5e7eb;
  }
  
  .btn-ghost:hover {
    background: #374151;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* SELECT DROPDOWN */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Box className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Select Dropdown Styling
                    </CardTitle>
                    <CardDescription>
                        Style select dropdowns with custom arrows
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Custom Select"
                        html={`<div class="select-wrapper">
  <label for="country">Country</label>
  <select id="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
    <option value="au">Australia</option>
  </select>
</div>

<div class="select-wrapper">
  <label for="size">Size</label>
  <select id="size">
    <option value="xs">Extra Small</option>
    <option value="sm">Small</option>
    <option value="md" selected>Medium</option>
    <option value="lg">Large</option>
    <option value="xl">Extra Large</option>
  </select>
</div>`}
                        css={`.select-wrapper {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  
  /* Custom arrow */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%236b7280' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

select:hover {
  border-color: #9ca3af;
}

select:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  select {
    background-color: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%239ca3af' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  }
  
  select option {
    background: #1f2937;
  }
}`}
                        colorTheme="purple"
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
                            <strong className="text-orange-900 dark:text-orange-200">Use consistent spacing:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Maintain uniform padding and margins across all form elements.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Clear focus states:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Always provide visible focus indicators for keyboard navigation.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Mobile-first:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Design forms that work great on touch devices with adequate tap targets (44x44px minimum).</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Color contrast:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Ensure text and borders meet WCAG contrast requirements (4.5:1 for normal text).</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Excellent Browser Support</strong>
                    Modern form styling properties are supported in all major browsers. Use progressive enhancement for advanced features.
                </AlertDescription>
            </Alert>
        </div>
    );
}
