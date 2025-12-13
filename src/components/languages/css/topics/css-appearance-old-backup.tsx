import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Eye, Sparkles, CheckCircle, Code, Zap, Box, Palette } from 'lucide-react';

interface CssAppearanceProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAppearance({ onOpenWebPlayground }: CssAppearanceProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Eye}
                category="CSS · Forms & UI"
                title="CSS Appearance"
                description="Remove default browser styling with appearance: none and create custom UI components from scratch"
                colorTheme="indigo"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-indigo-700 dark:text-indigo-300">
                        <div className="relative">
                            <Eye className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Appearance?
                    </CardTitle>
                    <CardDescription className="text-lg text-indigo-600 dark:text-indigo-400">
                        🚀 Remove default browser styling and create fully custom UI components with appearance: none!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🎨 Appearance Property
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    The <strong className="text-foreground">appearance</strong> property removes platform-specific styling from form elements, giving you a blank canvas to create custom designs.
                                </p>

                                {/* Appearance Visual */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-indigo-200/50">
                                    <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🔧 Remove Default Styling
                                    </div>
                                    <div className="text-xs text-indigo-600 dark:text-indigo-400">
                                        appearance: none removes browser defaults - perfect for custom designs!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Use Cases
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Box className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Buttons</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Remove defaults</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Palette className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Selects</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Custom dropdowns</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <CheckCircle className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Checkboxes</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Custom controls</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Eye className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Radio Buttons</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Custom styles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">👁️</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-indigo-700 dark:text-indigo-300">Appearance: None</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Full control
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Consistent design
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Cross-browser
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
                                        Use vendor prefixes (-webkit-, -moz-) for better browser support!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Appearance Property</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🔧 Remove default styling */</div>
                            <div className="text-blue-600 dark:text-blue-400">select</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">-webkit-appearance</span>: <span className="text-yellow-600 dark:text-yellow-400">none</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">-moz-appearance</span>: <span className="text-yellow-600 dark:text-yellow-400">none</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">appearance</span>: <span className="text-yellow-600 dark:text-yellow-400">none</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC USAGE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Basic Usage
                    </CardTitle>
                    <CardDescription>
                        Remove default styling from form elements
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Before and After Appearance"
                        html={`<div class="demo-container">
  <div class="demo-section">
    <h3>Default Browser Style</h3>
    <select class="default-select">
      <option>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    
    <input type="checkbox" class="default-checkbox" checked>
    <label>Default checkbox</label>
  </div>
  
  <div class="demo-section">
    <h3>With appearance: none</h3>
    <select class="custom-select">
      <option>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
    
    <input type="checkbox" class="custom-checkbox" checked>
    <label>Custom checkbox</label>
  </div>
</div>`}
                        css={`.demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 20px;
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

/* Default browser styling */
.default-select {
  padding: 12px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
}

.default-checkbox {
  width: 20px;
  height: 20px;
}

/* Custom styling with appearance: none */
.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 12px 40px 12px 16px;
  font-size: 16px;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%233b82f6' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
}

.custom-select:hover {
  border-color: #2563eb;
}

.custom-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  position: relative;
}

.custom-checkbox:checked {
  background: #3b82f6;
}

.custom-checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 16px;
}

label {
  color: #374151;
  font-size: 16px;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #e5e7eb;
  }
  
  .custom-select {
    background-color: #1f2937;
    color: #e5e7eb;
  }
  
  .custom-checkbox {
    background: #1f2937;
  }
  
  label {
    color: #e5e7eb;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* CUSTOM BUTTON */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Custom Buttons
                    </CardTitle>
                    <CardDescription>
                        Remove default button styling for custom designs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Custom Button Styles"
                        html={`<div class="button-showcase">
  <button class="btn-custom btn-primary">Primary</button>
  <button class="btn-custom btn-secondary">Secondary</button>
  <button class="btn-custom btn-outline">Outline</button>
  <button class="btn-custom btn-gradient">Gradient</button>
</div>`}
                        css={`.button-showcase {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-custom {
  /* Remove all default button styling */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  /* Add custom styling */
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-primary {
  background: #8b5cf6;
  color: white;
}

.btn-primary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(139, 92, 246, 0.4);
}

.btn-secondary {
  background: #10b981;
  color: white;
}

.btn-secondary:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.4);
}

.btn-outline {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.btn-outline:hover {
  background: #3b82f6;
  color: white;
}

.btn-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);
}

.btn-custom:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

.btn-custom:active {
  transform: translateY(0);
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
                            <strong className="text-orange-900 dark:text-orange-200">Use vendor prefixes:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Include <code>-webkit-appearance</code> and <code>-moz-appearance</code> for better browser support.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Rebuild all styling:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> After removing defaults, you must add back all necessary styles including padding, borders, and focus states.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Maintain accessibility:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Ensure focus indicators and keyboard navigation still work properly.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Test across browsers:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Different browsers may handle appearance: none differently.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Excellent Browser Support</strong>
                    The appearance property is well-supported in all modern browsers. Always use vendor prefixes for maximum compatibility.
                </AlertDescription>
            </Alert>
        </div>
    );
}
