import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Palette, Sparkles, CheckCircle, Code, Zap, Target, Box } from 'lucide-react';

interface AccentColorProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function AccentColor({ onOpenWebPlayground }: AccentColorProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Palette}
                category="CSS · Forms & UI"
                title="Accent Color"
                description="Style form controls with a single property - accent-color makes theming checkboxes, radios, and sliders effortless!"
                colorTheme="pink"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-pink-700 dark:text-pink-300">
                        <div className="relative">
                            <Palette className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is Accent Color?
                    </CardTitle>
                    <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
                        🚀 Theme your entire form with one line of CSS - accent-color is a game changer for consistent design!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-pink-400 dark:hover:border-pink-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🎨 One Property, Many Elements
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    The <strong className="text-foreground">accent-color</strong> property automatically styles checkboxes, radio buttons, range sliders, and progress bars with your brand color - no custom CSS needed!
                                </p>

                                {/* Accent Color Visual */}
                                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-lg border border-pink-200/50">
                                    <div className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🌈 Universal Theming
                                    </div>
                                    <div className="text-xs text-pink-600 dark:text-pink-400">
                                        Set once on :root or form, applies to all controls automatically!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Affected Elements
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <CheckCircle className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Checkboxes</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Auto themed</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Target className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Radio Buttons</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Instant color</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Box className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Range Sliders</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Styled thumb</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Zap className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Progress Bars</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Brand color</div>
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
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-pink-700 dark:text-pink-300">Accent Color</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            One property
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Auto applies
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            No JavaScript
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
                                        Set accent-color on :root for global theming across your entire site!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Accent Color Usage</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🎨 Set global accent color */</div>
                            <div className="text-purple-700 dark:text-purple-400">:root</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">accent-color</span>: <span className="text-yellow-600 dark:text-yellow-400">#8b5cf6</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* ✨ All controls styled automatically! */</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC USAGE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Basic Usage
                    </CardTitle>
                    <CardDescription>
                        Theme form controls with a single property
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Accent Color Demo"
                        html={`<div class="form-demo">
  <h3>Default Browser Colors</h3>
  <div class="controls-group default">
    <label>
      <input type="checkbox" checked>
      Checkbox
    </label>
    <label>
      <input type="radio" name="default" checked>
      Radio 1
    </label>
    <label>
      <input type="radio" name="default">
      Radio 2
    </label>
    <input type="range" min="0" max="100" value="50">
    <progress value="70" max="100"></progress>
  </div>
  
  <h3>With accent-color: #8b5cf6</h3>
  <div class="controls-group custom">
    <label>
      <input type="checkbox" checked>
      Checkbox
    </label>
    <label>
      <input type="radio" name="custom" checked>
      Radio 1
    </label>
    <label>
      <input type="radio" name="custom">
      Radio 2
    </label>
    <input type="range" min="0" max="100" value="50">
    <progress value="70" max="100"></progress>
  </div>
</div>`}
                        css={`.form-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.controls-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
}

/* Custom accent color */
.controls-group.custom {
  accent-color: #8b5cf6;
  border-color: #8b5cf6;
  background: linear-gradient(to bottom, 
    rgba(139, 92, 246, 0.05), 
    rgba(139, 92, 246, 0.02)
  );
}

label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
}

input[type="checkbox"],
input[type="radio"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

input[type="range"] {
  width: 100%;
  cursor: pointer;
}

progress {
  width: 100%;
  height: 24px;
  border-radius: 12px;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #e5e7eb;
  }
  
  .controls-group {
    background: #1f2937;
    border-color: #374151;
  }
  
  .controls-group.custom {
    background: linear-gradient(to bottom, 
      rgba(139, 92, 246, 0.15), 
      rgba(139, 92, 246, 0.05)
    );
  }
  
  label {
    color: #e5e7eb;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* MULTIPLE THEMES */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Box className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Multiple Theme Colors
                    </CardTitle>
                    <CardDescription>
                        Create different themed sections easily
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Multiple Accent Colors"
                        html={`<div class="themes-demo">
  <div class="theme-section blue-theme">
    <h4>Blue Theme</h4>
    <label>
      <input type="checkbox" checked>
      Enable feature
    </label>
    <input type="range" value="60">
  </div>
  
  <div class="theme-section green-theme">
    <h4>Green Theme</h4>
    <label>
      <input type="checkbox" checked>
      Enable feature
    </label>
    <input type="range" value="75">
  </div>
  
  <div class="theme-section pink-theme">
    <h4>Pink Theme</h4>
    <label>
      <input type="checkbox" checked>
      Enable feature
    </label>
    <input type="range" value="45">
  </div>
  
  <div class="theme-section orange-theme">
    <h4>Orange Theme</h4>
    <label>
      <input type="checkbox" checked>
      Enable feature
    </label>
    <input type="range" value="85">
  </div>
</div>`}
                        css={`.themes-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.theme-section {
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s;
}

.theme-section:hover {
  transform: translateY(-4px);
}

h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

input[type="range"] {
  width: 100%;
  cursor: pointer;
}

/* Blue theme */
.blue-theme {
  accent-color: #3b82f6;
  background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
  border: 2px solid #3b82f6;
}

.blue-theme h4,
.blue-theme label {
  color: #1e40af;
}

/* Green theme */
.green-theme {
  accent-color: #10b981;
  background: linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%);
  border: 2px solid #10b981;
}

.green-theme h4,
.green-theme label {
  color: #065f46;
}

/* Pink theme */
.pink-theme {
  accent-color: #ec4899;
  background: linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%);
  border: 2px solid #ec4899;
}

.pink-theme h4,
.pink-theme label {
  color: #9f1239;
}

/* Orange theme */
.orange-theme {
  accent-color: #f97316;
  background: linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%);
  border: 2px solid #f97316;
}

.orange-theme h4,
.orange-theme label {
  color: #9a3412;
}

@media (prefers-color-scheme: dark) {
  .blue-theme {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }
  
  .green-theme {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
  
  .pink-theme {
    background: linear-gradient(135deg, #831843 0%, #9f1239 100%);
  }
  
  .orange-theme {
    background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
  }
  
  .theme-section h4,
  .theme-section label {
    color: #f3f4f6;
  }
}`}
                        colorTheme="green"
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
                            <strong className="text-orange-900 dark:text-orange-200">Choose accessible colors:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Ensure your accent color has sufficient contrast with backgrounds (WCAG AA: 4.5:1 minimum).</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Set at appropriate level:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Use <code>:root</code> for global theming or specific containers for section theming.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Works with auto keyword:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Use <code>accent-color: auto</code> to reset to browser defaults.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Combine with custom CSS:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> accent-color works great as a base, but you can still override individual elements if needed.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Good Browser Support</strong>
                    accent-color is supported in Chrome 93+, Firefox 92+, Safari 15.4+, and Edge 93+. For older browsers, controls will use default styling.
                </AlertDescription>
            </Alert>
        </div>
    );
}
