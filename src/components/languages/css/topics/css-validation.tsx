'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  CheckCircle, AlertTriangle, Code, Shield, Zap, 
  Search, FileCheck, Terminal, Settings, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssValidationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssValidation({ onOpenWebPlayground }: CssValidationProps) {
  const [selectedTool, setSelectedTool] = useState('w3c');

  const validationTools = [
    { id: 'w3c', name: 'W3C Validator', icon: Shield, color: 'bg-blue-500', description: 'Official CSS validator' },
    { id: 'stylelint', name: 'Stylelint', icon: Code, color: 'bg-purple-500', description: 'Modern CSS linter' },
    { id: 'csslint', name: 'CSSLint', icon: Search, color: 'bg-green-500', description: 'CSS quality checker' },
    { id: 'prettier', name: 'Prettier', icon: Zap, color: 'bg-pink-500', description: 'Code formatter' },
  ];

  const validExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Validation - Valid Code</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #10b981;
      margin-bottom: 20px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    /* ✅ Valid CSS - Follows Standards */
    .valid-card {
      padding: 24px;
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-radius: 12px;
      border: 2px solid #10b981;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .valid-card {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
        border-color: #34d399;
      }
    }
    
    .valid-list {
      list-style: none;
      padding: 0;
    }
    
    .valid-item {
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 8px;
      border-left: 4px solid #10b981;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .valid-item {
        background: #0f172a;
        border-left-color: #34d399;
        color: #e2e8f0;
      }
    }
    
    .check-icon {
      color: #10b981;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .item-text {
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-text {
        color: #e2e8f0;
      }
    }
    
    .info-box {
      background: #dcfce7;
      border: 1px solid #10b981;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #065f46;
        border-color: #34d399;
      }
    }
    
    .info-title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #a7f3d0;
      }
    }
    
    .info-text {
      color: #047857;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text {
        color: #d1fae5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Valid CSS</h1>
    
    <div class="valid-card">
      <h3 style="color: #065f46; font-weight: 700; margin-bottom: 16px;">CSS Validation Passed!</h3>
      
      <ul class="valid-list">
        <li class="valid-item">
          <span class="check-icon">✓</span>
          <span class="item-text">No syntax errors found</span>
        </li>
        <li class="valid-item">
          <span class="check-icon">✓</span>
          <span class="item-text">All properties are valid</span>
        </li>
        <li class="valid-item">
          <span class="check-icon">✓</span>
          <span class="item-text">Proper vendor prefixes used</span>
        </li>
        <li class="valid-item">
          <span class="check-icon">✓</span>
          <span class="item-text">Follows W3C standards</span>
        </li>
        <li class="valid-item">
          <span class="check-icon">✓</span>
          <span class="item-text">Dark mode compatible</span>
        </li>
      </ul>
    </div>
    
    <div class="info-box">
      <div class="info-title">🎉 Congratulations!</div>
      <p class="info-text">
        Your CSS passes validation. Valid code ensures better browser compatibility 
        and maintainability!
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Shield}
        category="CSS · Quality & Testing"
        title="CSS Validation"
        description="Ensure your CSS code follows standards and best practices"
        colorTheme="green"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-green-700 dark:text-green-300">
            <div className="relative">
              <Shield className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is CSS Validation?
          </CardTitle>
          <CardDescription className="text-lg text-green-600 dark:text-green-400">
            ✅ Check your CSS for errors, warnings, and standard compliance!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-green-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Why Validate CSS?
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Find Errors Early</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Catch syntax errors and typos before deployment
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Standards Compliance</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Ensure your code follows W3C standards
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Better Compatibility</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Works consistently across all browsers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200/50">
                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300">
                  Common Validation Issues
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-red-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <div className="font-semibold text-sm text-red-700 dark:text-red-300">Syntax Errors</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Missing semicolons, braces</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <div className="font-semibold text-sm text-orange-700 dark:text-orange-300">Invalid Properties</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Typos, non-existent properties</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-yellow-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <div className="font-semibold text-sm text-yellow-700 dark:text-yellow-300">Wrong Values</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Invalid units, color formats</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-purple-500" />
                      <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">Deprecated Code</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Outdated properties, values</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-green-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">✅</div>
                  <div className="font-bold text-lg text-green-700 dark:text-green-300">CSS Validation</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Error Detection
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Standards Check
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Quality Assurance
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Best Practices
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Validate CSS early and often during development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <FileCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Validation Tools
          </CardTitle>
          <CardDescription>
            Choose from popular CSS validation and linting tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {validationTools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedTool === tool.id
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100 mb-1">{tool.name}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedTool === 'w3c' && (
            <FrontendCodePreview
              html={validExample}
              title="W3C Validator - Valid CSS Example"
              colorTheme="green"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedTool === 'stylelint' && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">.stylelintrc.json</h4>
              <pre className="text-sm overflow-x-auto"><code>{`{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-length": "short",
    "selector-max-id": 0,
    "selector-max-type": 0,
    "font-family-name-quotes": "always-where-recommended",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true
  }
}`}</code></pre>
              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Install:</strong> <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">npm install stylelint --save-dev</code>
                </p>
              </div>
            </div>
          )}

          {selectedTool === 'csslint' && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-4">CSSLint Configuration</h4>
              <pre className="text-sm overflow-x-auto"><code>{`// .csslintrc
{
  "adjoining-classes": false,
  "box-model": true,
  "box-sizing": false,
  "compatible-vendor-prefixes": true,
  "duplicate-background-images": true,
  "duplicate-properties": true,
  "empty-rules": true,
  "errors": true,
  "fallback-colors": true,
  "floats": true,
  "font-sizes": true,
  "gradients": true,
  "ids": true,
  "import": true,
  "important": true
}`}</code></pre>
            </div>
          )}

          {selectedTool === 'prettier' && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-4">.prettierrc</h4>
              <pre className="text-sm overflow-x-auto"><code>{`{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}`}</code></pre>
              <div className="mt-4 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <p className="text-sm text-pink-700 dark:text-pink-300">
                  <strong>Note:</strong> Prettier formats your CSS automatically for consistency
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Validate regularly</strong> - Check CSS during development, not just at the end</li>
            <li><strong>Use linters</strong> - Automate validation with tools like Stylelint</li>
            <li><strong>Fix errors</strong> - Address validation errors before deploying</li>
            <li><strong>Set up CI/CD</strong> - Add validation to your build process</li>
            <li><strong>Document exceptions</strong> - If you must break rules, document why</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <Info className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Validation Resources</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <div className="space-y-2 mt-2">
            <div><strong>🌐 W3C CSS Validator:</strong> https://jigsaw.w3.org/css-validator/</div>
            <div><strong>📦 Stylelint:</strong> https://stylelint.io/</div>
            <div><strong>🔍 CSSLint:</strong> http://csslint.net/</div>
            <div><strong>💅 Prettier:</strong> https://prettier.io/</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
