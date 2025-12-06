import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CheckCircle, AlertCircle, Sparkles, Code, Shield, Zap, XCircle, AlertTriangle } from 'lucide-react';

interface FormValidationStylingProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FormValidationStyling({ onOpenWebPlayground }: FormValidationStylingProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Shield}
                category="CSS · Forms & UI"
                title="Form Validation Styling"
                description="Style form validation states with :valid, :invalid, :required pseudo-classes for better user feedback"
                colorTheme="green"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-green-700 dark:text-green-300">
                        <div className="relative">
                            <Shield className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                        </div>
                        What is Form Validation Styling?
                    </CardTitle>
                    <CardDescription className="text-lg text-green-600 dark:text-green-400">
                        🚀 Provide instant visual feedback with CSS validation pseudo-classes - help users fill forms correctly!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <CheckCircle className="w-5 h-5 animate-pulse" />
                                    ✅ Validation Pseudo-Classes
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Validation Pseudo-classes</strong> let you style form fields based on their validation state - valid, invalid, required, optional, in-range, and out-of-range.
                                </p>

                                {/* Validation States Visual */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🎯 Pseudo-Classes
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        :valid, :invalid, :required, :optional, :in-range, :out-of-range - Style forms based on validation state!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Validation States
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">:valid</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Correct input</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200/50">
                                        <XCircle className="w-6 h-6 text-red-500" />
                                        <div>
                                            <div className="font-semibold text-red-700 dark:text-red-300 text-sm">:invalid</div>
                                            <div className="text-xs text-red-600 dark:text-red-400">Wrong input</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <AlertCircle className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">:required</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Must fill</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Shield className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">:in-range</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Within limits</div>
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
                                        <div className="text-4xl mb-2 animate-bounce">✅</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-green-700 dark:text-green-300">Validation Styling</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Instant feedback
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better UX
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Reduced errors
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
                                        Combine with :focus for better user experience - don't show errors before user interacts!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Validation Styling</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* ✅ Valid state */</div>
                            <div className="text-blue-600 dark:text-blue-400">input:valid</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border-color</span>: <span className="text-yellow-600 dark:text-yellow-400">#10b981</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* ❌ Invalid state */</div>
                            <div className="text-blue-600 dark:text-blue-400">input:invalid</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">border-color</span>: <span className="text-yellow-600 dark:text-yellow-400">#ef4444</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* :VALID AND :INVALID */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        :valid and :invalid Pseudo-Classes
                    </CardTitle>
                    <CardDescription>
                        Style fields based on validation state
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Email Validation"
                        html={`<form>
  <div class="form-group">
    <label for="email">Email Address *</label>
    <input 
      type="email" 
      id="email" 
      placeholder="you@example.com"
      required
    >
    <span class="valid-feedback">✓ Valid email</span>
    <span class="invalid-feedback">✗ Please enter a valid email</span>
  </div>
  
  <div class="form-group">
    <label for="website">Website URL</label>
    <input 
      type="url" 
      id="website" 
      placeholder="https://example.com"
    >
    <span class="valid-feedback">✓ Valid URL</span>
    <span class="invalid-feedback">✗ Please enter a valid URL</span>
  </div>
</form>`}
                        css={`.form-group {
  margin-bottom: 24px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Valid state */
input:valid:not(:placeholder-shown) {
  border-color: #10b981;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M16 6L8 14L4 10' stroke='%2310b981' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

input:valid:not(:placeholder-shown):focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

/* Invalid state */
input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 6L14 14M14 6L6 14' stroke='%23ef4444' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

input:invalid:not(:placeholder-shown):focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Feedback messages */
.valid-feedback,
.invalid-feedback {
  display: none;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
}

.valid-feedback {
  color: #10b981;
}

.invalid-feedback {
  color: #ef4444;
}

input:valid:not(:placeholder-shown) ~ .valid-feedback {
  display: block;
}

input:invalid:not(:placeholder-shown) ~ .invalid-feedback {
  display: block;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />

                    <Alert className="mt-4 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                        <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <AlertDescription className="text-blue-700 dark:text-blue-300">
                            <strong>Note:</strong> Use <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">:not(:placeholder-shown)</code> to avoid showing validation before user types!
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* :REQUIRED AND :OPTIONAL */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        :required and :optional
                    </CardTitle>
                    <CardDescription>
                        Style required and optional fields differently
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Required Fields"
                        html={`<form>
  <div class="form-field">
    <label for="name">Full Name *</label>
    <input type="text" id="name" required>
  </div>
  
  <div class="form-field">
    <label for="phone">Phone (optional)</label>
    <input type="tel" id="phone">
  </div>
  
  <div class="form-field">
    <label for="message">Message *</label>
    <textarea id="message" required rows="4"></textarea>
  </div>
</form>`}
                        css={`.form-field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input, textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

/* Required fields indicator */
input:required,
textarea:required {
  border-left-width: 4px;
  border-left-color: #f59e0b;
}

input:required:focus,
textarea:required:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

/* Optional fields */
input:optional,
textarea:optional {
  border-left-width: 4px;
  border-left-color: #6b7280;
}

input:optional:focus,
textarea:optional:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Add indicator after label for required */
label:has(+ input:required)::after,
label:has(+ textarea:required)::after {
  content: ' (required)';
  color: #f59e0b;
  font-size: 12px;
  font-weight: normal;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input, textarea {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
  }
}`}
                        colorTheme="orange"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* :IN-RANGE AND :OUT-OF-RANGE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        :in-range and :out-of-range
                    </CardTitle>
                    <CardDescription>
                        Style number inputs based on min/max values
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Range Validation"
                        html={`<div class="range-group">
  <label for="age">Age (18-65)</label>
  <input type="number" id="age" min="18" max="65" placeholder="Enter age">
  <div class="range-info">
    <span class="range-valid">✓ Age is valid</span>
    <span class="range-invalid">✗ Age must be between 18 and 65</span>
  </div>
</div>

<div class="range-group">
  <label for="quantity">Quantity (1-10)</label>
  <input type="number" id="quantity" min="1" max="10" value="5">
  <div class="range-info">
    <span class="range-valid">✓ Quantity is valid</span>
    <span class="range-invalid">✗ Quantity must be between 1 and 10</span>
  </div>
</div>

<div class="range-group">
  <label for="price">Price ($10-$1000)</label>
  <input type="number" id="price" min="10" max="1000" step="10" placeholder="Enter price">
  <div class="range-info">
    <span class="range-valid">✓ Price is valid</span>
    <span class="range-invalid">✗ Price must be between $10 and $1000</span>
  </div>
</div>`}
                        css={`.range-group {
  margin-bottom: 24px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input[type="number"] {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

input[type="number"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* In-range styling */
input[type="number"]:in-range {
  border-color: #10b981;
  background: linear-gradient(to right, 
    rgba(16, 185, 129, 0.05), 
    rgba(16, 185, 129, 0.02)
  );
}

input[type="number"]:in-range:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

/* Out-of-range styling */
input[type="number"]:out-of-range {
  border-color: #ef4444;
  background: linear-gradient(to right, 
    rgba(239, 68, 68, 0.05), 
    rgba(239, 68, 68, 0.02)
  );
}

input[type="number"]:out-of-range:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Range info messages */
.range-info {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
}

.range-valid,
.range-invalid {
  display: none;
}

.range-valid {
  color: #10b981;
}

.range-invalid {
  color: #ef4444;
}

input[type="number"]:in-range ~ .range-info .range-valid {
  display: block;
}

input[type="number"]:out-of-range ~ .range-info .range-invalid {
  display: block;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #e5e7eb;
  }
  
  input[type="number"] {
    background: #1f2937;
    border-color: #374151;
    color: #e5e7eb;
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
                            <strong className="text-orange-900 dark:text-orange-200">Wait for interaction:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Use <code>:not(:placeholder-shown)</code> or <code>:focus</code> to avoid showing errors immediately.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Clear messaging:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Provide specific error messages explaining what's wrong and how to fix it.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Use proper HTML5 types:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Leverage <code>type="email"</code>, <code>type="url"</code>, <code>type="tel"</code> for built-in validation.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-orange-900 dark:text-orange-200">Accessible colors:</strong>
                            <span className="text-orange-700 dark:text-orange-300"> Don't rely on color alone - use icons and text labels for validation feedback.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Excellent Browser Support</strong>
                    CSS validation pseudo-classes are supported in all modern browsers. Always complement with JavaScript validation for security.
                </AlertDescription>
            </Alert>
        </div>
    );
}
