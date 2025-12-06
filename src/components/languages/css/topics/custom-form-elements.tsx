import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CheckSquare, Sparkles, CheckCircle, Code, Zap, Upload, Sliders, Target } from 'lucide-react';

interface CustomFormElementsProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CustomFormElements({ onOpenWebPlayground }: CustomFormElementsProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={CheckSquare}
                category="CSS · Forms & UI"
                title="Custom Form Elements"
                description="Create beautiful custom checkboxes, radio buttons, file inputs, and range sliders with pure CSS"
                colorTheme="purple"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
                        <div className="relative">
                            <CheckSquare className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are Custom Form Elements?
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                        🚀 Replace default browser form controls with custom-styled elements that match your design!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🎨 Custom Form Controls
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Custom Form Elements</strong> allow you to replace default browser styling with your own designs using <code className="text-xs bg-muted px-1 py-0.5 rounded">appearance: none</code> and creative CSS.
                                </p>

                                {/* Elements Visual */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200/50">
                                    <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        📦 Customizable Elements
                                    </div>
                                    <div className="text-xs text-purple-600 dark:text-purple-400">
                                        Checkboxes, Radio buttons, File uploads, Range sliders - all fully customizable!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Custom Elements
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <CheckSquare className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Checkboxes</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Custom styling</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Target className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Radio Buttons</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Custom circles</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Upload className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">File Inputs</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Custom upload</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Sliders className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Range Sliders</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Custom track</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-fuchsia-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-fuchsia-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">☑️</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Custom Controls</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Brand match
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better UX
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
                                        Always test custom elements with keyboard and screen readers for accessibility!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Custom Checkbox</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* ☑️ Hide default checkbox */</div>
                            <div className="text-blue-600 dark:text-blue-400">input[type="checkbox"]</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">appearance</span>: <span className="text-yellow-600 dark:text-yellow-400">none</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">width</span>: <span className="text-yellow-600 dark:text-yellow-400">20px</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">height</span>: <span className="text-yellow-600 dark:text-yellow-400">20px</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border</span>: <span className="text-yellow-600 dark:text-yellow-400">2px solid #3b82f6</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border-radius</span>: <span className="text-yellow-600 dark:text-yellow-400">4px</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CUSTOM CHECKBOXES */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Custom Checkboxes
                    </CardTitle>
                    <CardDescription>
                        Create beautiful custom checkbox designs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Modern Checkboxes"
                        html={`<div class="checkbox-group">
  <label class="checkbox-label">
    <input type="checkbox" checked>
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Enable notifications</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox">
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Subscribe to newsletter</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox" checked>
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Remember me</span>
  </label>
  
  <label class="checkbox-label">
    <input type="checkbox" disabled>
    <span class="checkbox-custom"></span>
    <span class="checkbox-text">Disabled option</span>
  </label>
</div>`}
                        css={`.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s;
}

.checkbox-label:has(input:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hide default checkbox */
.checkbox-label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Custom checkbox */
.checkbox-custom {
  position: relative;
  width: 22px;
  height: 22px;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.checkbox-label:hover .checkbox-custom {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* Checked state */
.checkbox-label input:checked + .checkbox-custom {
  background: #3b82f6;
  border-color: #3b82f6;
}

/* Checkmark */
.checkbox-label input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Focus state */
.checkbox-label input:focus-visible + .checkbox-custom {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Label text */
.checkbox-text {
  font-size: 16px;
  color: #374151;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  .checkbox-custom {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .checkbox-label:hover .checkbox-custom {
    border-color: #60a5fa;
  }
  
  .checkbox-label input:checked + .checkbox-custom {
    background: #3b82f6;
    border-color: #3b82f6;
  }
  
  .checkbox-text {
    color: #e5e7eb;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* CUSTOM RADIO BUTTONS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Custom Radio Buttons
                    </CardTitle>
                    <CardDescription>
                        Style radio buttons with custom designs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Modern Radio Buttons"
                        html={`<div class="radio-group">
  <p class="group-label">Choose your plan:</p>
  
  <label class="radio-label">
    <input type="radio" name="plan" value="free" checked>
    <span class="radio-custom"></span>
    <span class="radio-content">
      <strong>Free Plan</strong>
      <small>Basic features</small>
    </span>
  </label>
  
  <label class="radio-label">
    <input type="radio" name="plan" value="pro">
    <span class="radio-custom"></span>
    <span class="radio-content">
      <strong>Pro Plan</strong>
      <small>Advanced features</small>
    </span>
  </label>
  
  <label class="radio-label">
    <input type="radio" name="plan" value="enterprise">
    <span class="radio-custom"></span>
    <span class="radio-content">
      <strong>Enterprise Plan</strong>
      <small>Full features</small>
    </span>
  </label>
</div>`}
                        css={`.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 16px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.radio-label:hover {
  border-color: #10b981;
  background: #f0fdf4;
}

/* Hide default radio */
.radio-label input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Custom radio button */
.radio-custom {
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid #9ca3af;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.radio-label:hover .radio-custom {
  border-color: #10b981;
}

/* Checked state */
.radio-label input:checked ~ .radio-custom {
  border-color: #10b981;
  background: white;
}

/* Inner dot */
.radio-label input:checked ~ .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
}

/* Selected label style */
.radio-label:has(input:checked) {
  border-color: #10b981;
  background: #f0fdf4;
}

/* Radio content */
.radio-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.radio-content strong {
  color: #374151;
  font-size: 16px;
}

.radio-content small {
  color: #6b7280;
  font-size: 14px;
}

/* Focus state */
.radio-label input:focus-visible ~ .radio-custom {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .group-label {
    color: #e5e7eb;
  }
  
  .radio-label {
    background: #1f2937;
    border-color: #374151;
  }
  
  .radio-label:hover {
    background: #065f46;
    border-color: #10b981;
  }
  
  .radio-custom {
    background: #1f2937;
    border-color: #6b7280;
  }
  
  .radio-label input:checked ~ .radio-custom {
    background: #1f2937;
  }
  
  .radio-label:has(input:checked) {
    background: #065f46;
  }
  
  .radio-content strong {
    color: #e5e7eb;
  }
  
  .radio-content small {
    color: #9ca3af;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* CUSTOM RANGE SLIDER */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Custom Range Slider
                    </CardTitle>
                    <CardDescription>
                        Style range inputs with custom tracks and thumbs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Modern Range Slider"
                        html={`<div class="slider-wrapper">
  <label for="volume">Volume: <span id="volume-value">50</span>%</label>
  <input type="range" id="volume" min="0" max="100" value="50">
</div>

<div class="slider-wrapper">
  <label for="brightness">Brightness: <span id="brightness-value">75</span>%</label>
  <input type="range" id="brightness" min="0" max="100" value="75">
</div>

<script>
const volume = document.getElementById('volume');
const volumeValue = document.getElementById('volume-value');
volume.addEventListener('input', () => {
  volumeValue.textContent = volume.value;
});

const brightness = document.getElementById('brightness');
const brightnessValue = document.getElementById('brightness-value');
brightness.addEventListener('input', () => {
  brightnessValue.textContent = brightness.value;
});
</script>`}
                        css={`.slider-wrapper {
  margin-bottom: 32px;
}

label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #374151;
  font-size: 16px;
}

/* Range input styling */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, 
    #8b5cf6 0%, 
    #8b5cf6 50%, 
    #e5e7eb 50%, 
    #e5e7eb 100%
  );
  outline: none;
  transition: background 0.3s;
}

/* Webkit (Chrome, Safari) Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
  transition: all 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #7c3aed;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.6);
  transform: scale(1.1);
}

/* Firefox Thumb */
input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
  transition: all 0.3s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  background: #7c3aed;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.6);
  transform: scale(1.1);
}

/* Firefox Track */
input[type="range"]::-moz-range-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
}

/* Focus state */
input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input[type="range"] {
    background: linear-gradient(to right, 
      #8b5cf6 0%, 
      #8b5cf6 50%, 
      #374151 50%, 
      #374151 100%
    );
  }
  
  input[type="range"]::-moz-range-track {
    background: #374151;
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
                            <strong className="text-orange-900 dark:text-orange-200">Maintain accessibility:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Keep native HTML elements and only hide them visually - don't remove from DOM.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Keyboard support:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Ensure all custom elements work with Tab, Space, and Enter keys.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Focus indicators:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Always provide visible focus states for keyboard navigation.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Touch targets:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Make clickable areas at least 44x44px for better mobile usability.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Good Browser Support</strong>
                    Custom form elements work in all modern browsers. Use <code className="bg-green-100 dark:bg-green-900 px-1 rounded">appearance: none</code> to remove default styling.
                </AlertDescription>
            </Alert>
        </div>
    );
}
