'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  TestTube, CheckCircle, Code, Eye, Monitor, 
  Camera, GitCompare, Smartphone, AlertCircle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssTestingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTesting({ onOpenWebPlayground }: CssTestingProps) {
  const [selectedTest, setSelectedTest] = useState('visual');

  const testingTypes = [
    { id: 'visual', name: 'Visual Regression', icon: Camera, color: 'bg-blue-500' },
    { id: 'snapshot', name: 'Snapshot Testing', icon: GitCompare, color: 'bg-purple-500' },
    { id: 'cross-browser', name: 'Cross-Browser', icon: Monitor, color: 'bg-green-500' },
    { id: 'responsive', name: 'Responsive Testing', icon: Smartphone, color: 'bg-orange-500' },
  ];

  const visualTestExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Testing - Visual Regression</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
      }
    }
    
    .container {
      max-width: 900px;
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
      color: #3b82f6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .test-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .test-card {
      padding: 24px;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      border-radius: 12px;
      border: 2px solid #3b82f6;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .test-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .test-card {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .test-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    
    .test-title {
      color: #1e40af;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .test-title {
        color: #93c5fd;
      }
    }
    
    .test-desc {
      color: #64748b;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .test-desc {
        color: #cbd5e0;
      }
    }
    
    .info-box {
      background: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 20px;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #1e3a8a;
        border-left-color: #60a5fa;
      }
    }
    
    .info-title {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #93c5fd;
      }
    }
    
    .tool-list {
      list-style: none;
      padding: 0;
    }
    
    .tool-item {
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .tool-item {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
    
    .tool-check {
      color: #3b82f6;
      font-weight: bold;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🧪 CSS Testing</h1>
    <p class="subtitle">Visual Regression Testing for CSS Changes</p>
    
    <div class="test-grid">
      <div class="test-card">
        <div class="test-icon">📸</div>
        <div class="test-title">Take Snapshot</div>
        <p class="test-desc">Capture current visual state</p>
      </div>
      
      <div class="test-card">
        <div class="test-icon">🔄</div>
        <div class="test-title">Make Changes</div>
        <p class="test-desc">Update your CSS code</p>
      </div>
      
      <div class="test-card">
        <div class="test-icon">🔍</div>
        <div class="test-title">Compare</div>
        <p class="test-desc">Detect visual differences</p>
      </div>
      
      <div class="test-card">
        <div class="test-icon">✅</div>
        <div class="test-title">Approve/Fix</div>
        <p class="test-desc">Accept changes or fix issues</p>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">📦 Popular Testing Tools</div>
      <ul class="tool-list">
        <li class="tool-item">
          <span class="tool-check">✓</span>
          <strong>Percy</strong> - Visual testing and review platform
        </li>
        <li class="tool-item">
          <span class="tool-check">✓</span>
          <strong>BackstopJS</strong> - Automated visual regression testing
        </li>
        <li class="tool-item">
          <span class="tool-check">✓</span>
          <strong>Chromatic</strong> - Storybook visual testing
        </li>
        <li class="tool-item">
          <span class="tool-check">✓</span>
          <strong>Jest + Puppeteer</strong> - Snapshot testing
        </li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TestTube}
        category="CSS · Quality & Testing"
        title="CSS Testing"
        description="Ensure your styles work correctly with automated testing"
        colorTheme="blue"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <TestTube className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Why Test CSS?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🧪 Catch visual bugs before they reach production!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Benefits of CSS Testing
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Camera className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Catch Visual Regressions</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Detect unintended changes to your UI
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Monitor className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Cross-Browser Consistency</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Ensure consistent appearance across browsers
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Smartphone className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Responsive Testing</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Verify layouts work at all screen sizes
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200/50">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Testing Strategy
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl mb-2">1️⃣</div>
                    <div className="font-semibold text-sm mb-1">Unit Tests</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Test individual components</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl mb-2">2️⃣</div>
                    <div className="font-semibold text-sm mb-1">Visual Tests</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Compare screenshots</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl mb-2">3️⃣</div>
                    <div className="font-semibold text-sm mb-1">Integration</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Test component interactions</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl mb-2">4️⃣</div>
                    <div className="font-semibold text-sm mb-1">E2E Tests</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Full user workflows</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🧪</div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">CSS Testing</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Visual Regression
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Snapshot Testing
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Cross-Browser
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Automated QA
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Automate CSS testing in your CI/CD pipeline
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
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Testing Types
          </CardTitle>
          <CardDescription>
            Different approaches to testing CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {testingTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedTest(type.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedTest === type.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center`}>
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm text-gray-900 dark:text-gray-100">{type.name}</div>
                </div>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            html={visualTestExample}
            title="CSS Testing - Visual Regression Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Testing Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Percy
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                Visual testing and review platform with CI/CD integration
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">npm install @percy/cli</code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                <GitCompare className="w-4 h-4" />
                BackstopJS
              </h4>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                Automated visual regression testing tool
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">npm install backstopjs</code>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Chromatic
              </h4>
              <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                Visual testing for Storybook components
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">npm install chromatic</code>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Playwright
              </h4>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-3">
                Cross-browser testing automation framework
              </p>
              <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">npm install @playwright/test</code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Test early</strong> - Integrate testing from the start of development</li>
            <li><strong>Automate</strong> - Run tests automatically in CI/CD pipeline</li>
            <li><strong>Test critical paths</strong> - Focus on important user journeys</li>
            <li><strong>Multiple viewports</strong> - Test responsive designs at various sizes</li>
            <li><strong>Review failures</strong> - Investigate and fix visual regressions promptly</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Testing Resources</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <div><strong>📸 Percy:</strong> https://percy.io/</div>
            <div><strong>🔄 BackstopJS:</strong> https://github.com/garris/BackstopJS</div>
            <div><strong>🎨 Chromatic:</strong> https://www.chromatic.com/</div>
            <div><strong>🎭 Playwright:</strong> https://playwright.dev/</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
