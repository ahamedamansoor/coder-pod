'use client';

import React from 'react';
import { TestTube, Sparkles, Target, Layers, CheckCircle, Eye } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssTestingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTesting({ onOpenWebPlayground }: CssTestingProps) {
  
  return (
    <CssTopicLayout
      icon={TestTube}
      title="CSS Testing"
      description="Ensure your styles work correctly across browsers and devices"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What is CSS Testing?",
        description: "The process of verifying that your CSS renders correctly and consistently across different browsers, devices, and screen sizes",
        keyPoints: [
          "Test visual appearance automatically",
          "Catch CSS regressions early",
          "Verify cross-browser compatibility",
          "Test responsive designs",
          "Prevent visual bugs in production",
          "Essential for quality assurance"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Test CSS?">
        CSS can look perfect in Chrome but broken in Safari. Perfect on desktop but terrible on mobile. 
        <strong> CSS testing catches these issues before users see them!</strong> 
        Automated tests save hours of manual checking and prevent embarrassing bugs.
      </InfoAlert>

      {/* Types of CSS Testing */}
      <SectionCard
        title="Types of CSS Testing"
        description="Different ways to test CSS"
        icon={TestTube}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📸 Visual Regression",
              description: "Compare screenshots to detect changes",
              example: "Percy, BackstopJS, Chromatic"
            },
            {
              title: "🌐 Cross-Browser",
              description: "Test in multiple browsers",
              example: "BrowserStack, Sauce Labs"
            },
            {
              title: "📱 Responsive Testing",
              description: "Test different screen sizes",
              example: "Chrome DevTools, LambdaTest"
            },
            {
              title: "♿ Accessibility",
              description: "Test contrast, focus, readability",
              example: "axe, Lighthouse"
            }
          ]}
        />
      </SectionCard>

      {/* Visual Regression Testing */}
      <SectionCard
        title="1. Visual Regression Testing"
        description="Catch unintended visual changes"
        icon={Eye}
        variant="primary"
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">What is Visual Regression Testing?</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Takes screenshots of your site, compares them to baseline images, and alerts you to any visual differences. 
              Perfect for catching CSS bugs that break layouts!
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">1. Baseline</p>
                <p className="text-xs">Take screenshot of correct design</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">2. Compare</p>
                <p className="text-xs">Run after code changes</p>
              </div>
              <div className="p-3 bg-white dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-1">3. Review</p>
                <p className="text-xs">Approve or fix differences</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Percy (by BrowserStack)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Popular visual testing platform. Integrates with CI/CD. Free for open source.
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                percy.io
              </code>
            </div>

            <div className="p-4 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-950/20">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">BackstopJS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Free, open-source visual regression testing. Runs locally or in CI.
              </p>
              <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded">
                npm install -g backstopjs
              </code>
            </div>

            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Chromatic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Made by Storybook team. Great for component testing. Free tier available.
              </p>
              <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                chromatic.com
              </code>
            </div>
          </div>

          <SyntaxBlock
            title="BackstopJS Example Setup"
            code={`# Install BackstopJS
npm install -g backstopjs

# Initialize in your project
backstop init

# Edit backstop.json to define test scenarios
{
  "scenarios": [
    {
      "label": "Homepage",
      "url": "http://localhost:3000",
      "selectors": ["body"]
    },
    {
      "label": "Button Component",
      "url": "http://localhost:3000/components",
      "selectors": [".button"]
    }
  ],
  "viewports": [
    { "label": "phone", "width": 375, "height": 667 },
    { "label": "tablet", "width": 768, "height": 1024 },
    { "label": "desktop", "width": 1920, "height": 1080 }
  ]
}

# Create baseline (reference) screenshots
backstop reference

# Run tests (compare to baseline)
backstop test

# View results in browser
# Approve changes if they're intentional
backstop approve`}
          />
        </div>
      </SectionCard>

      {/* Cross-Browser Testing */}
      <SectionCard
        title="2. Cross-Browser Testing"
        description="Test in multiple browsers"
        icon={Layers}
      >
        <div className="space-y-6">
          <InfoAlert type="warning" title="Why Cross-Browser Testing Matters">
            CSS can render differently in Chrome, Firefox, Safari, and Edge. 
            What works in one browser might be completely broken in another!
          </InfoAlert>

          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-100">Popular Cross-Browser Testing Tools</h4>
            
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-1">BrowserStack</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Test in 3000+ real browsers and devices. Live interactive testing. Screenshots & videos.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  browserstack.com - Free trial available
                </code>
              </div>

              <div className="p-3 bg-white dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-1">LambdaTest</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Cloud-based testing. Automated screenshots. Integrates with CI/CD.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  lambdatest.com - Free tier available
                </code>
              </div>

              <div className="p-3 bg-white dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold text-green-900 dark:text-green-100 mb-1">Sauce Labs</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Enterprise testing platform. Supports Selenium and Cypress. CI/CD integration.
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  saucelabs.com
                </code>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">Free Alternative: Local Browser Testing</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Install multiple browsers on your machine and test manually:
            </p>
            <div className="grid md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-white dark:bg-blue-900/20 rounded text-center">
                <p className="font-semibold">Chrome</p>
                <p className="text-xs">google.com/chrome</p>
              </div>
              <div className="p-2 bg-white dark:bg-blue-900/20 rounded text-center">
                <p className="font-semibold">Firefox</p>
                <p className="text-xs">mozilla.org/firefox</p>
              </div>
              <div className="p-2 bg-white dark:bg-blue-900/20 rounded text-center">
                <p className="font-semibold">Safari</p>
                <p className="text-xs">Mac/iOS only</p>
              </div>
              <div className="p-2 bg-white dark:bg-blue-900/20 rounded text-center">
                <p className="font-semibold">Edge</p>
                <p className="text-xs">microsoft.com/edge</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Responsive Testing */}
      <SectionCard
        title="3. Responsive Testing"
        description="Test different screen sizes"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">Chrome DevTools - Built-in Tool</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Chrome (and other browsers) have built-in responsive testing tools. 
              <strong> Free and powerful!</strong>
            </p>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold">1.</span>
                <span>Open DevTools (F12 or Ctrl+Shift+I)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">2.</span>
                <span>Click device toolbar icon (Ctrl+Shift+M)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">3.</span>
                <span>Choose device or custom dimensions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">4.</span>
                <span>Test different breakpoints</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📱 Mobile</h4>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>• iPhone 14: 390x844</li>
                <li>• Galaxy S21: 360x800</li>
                <li>• iPhone SE: 375x667</li>
              </ul>
            </div>

            <div className="p-4 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📱 Tablet</h4>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>• iPad: 768x1024</li>
                <li>• iPad Pro: 1024x1366</li>
                <li>• Surface: 912x1368</li>
              </ul>
            </div>

            <div className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-xl bg-purple-50 dark:bg-purple-950/20">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💻 Desktop</h4>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Laptop: 1366x768</li>
                <li>• Desktop: 1920x1080</li>
                <li>• 4K: 3840x2160</li>
              </ul>
            </div>
          </div>

          <SyntaxBlock
            title="Responsive Design Testing Checklist"
            code={`# Test these breakpoints at minimum:

✓ Mobile (320px - 480px)
  - Check menu collapses to hamburger
  - Text is readable
  - Images scale properly
  - No horizontal scroll

✓ Tablet (481px - 768px)
  - Layout adjusts appropriately
  - Touch targets are large enough (44x44px min)
  - Navigation works

✓ Desktop (769px - 1920px)
  - Full layout displays correctly
  - Hover states work
  - Multi-column layouts function

✓ Large Desktop (1921px+)
  - Content doesn't stretch too wide
  - Max-width containers work
  - No awkward spacing`}
          />
        </div>
      </SectionCard>

      {/* Automated CSS Testing */}
      <SectionCard
        title="4. Automated CSS Testing with Playwright"
        description="Write tests that run automatically"
        icon={CheckCircle}
      >
        <div className="space-y-6">
          <InfoAlert type="tip" title="Modern Approach: E2E Testing">
            Modern E2E testing tools like Playwright and Cypress can test CSS automatically. 
            Write tests once, run them on every deployment!
          </InfoAlert>

          <SyntaxBlock
            title="Playwright CSS Test Example"
            code={`// Install Playwright
npm install -D @playwright/test

// tests/css-tests.spec.js
import { test, expect } from '@playwright/test';

test('button has correct styles', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  const button = page.locator('.button');
  
  // Test computed styles
  await expect(button).toHaveCSS('background-color', 'rgb(59, 130, 246)');
  await expect(button).toHaveCSS('padding', '12px 24px');
  await expect(button).toHaveCSS('border-radius', '6px');
  
  // Test hover state
  await button.hover();
  await expect(button).toHaveCSS('background-color', 'rgb(37, 99, 235)');
});

test('layout is responsive', async ({ page }) => {
  // Test mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000');
  
  const menu = page.locator('.menu');
  await expect(menu).toHaveCSS('display', 'none'); // Hidden on mobile
  
  // Test desktop
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(menu).toHaveCSS('display', 'flex'); // Visible on desktop
});

test('take screenshot for visual regression', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Take full page screenshot
  await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });
  
  // Compare to baseline (requires setup)
  await expect(page).toHaveScreenshot('homepage.png');
});`}
          />

          <SyntaxBlock
            title="Run Playwright Tests"
            code={`# Run tests
npx playwright test

# Run in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test css-tests.spec.js

# Update baseline screenshots
npx playwright test --update-snapshots`}
          />
        </div>
      </SectionCard>

      {/* Common CSS Issues to Test */}
      <SectionCard
        title="Common CSS Issues to Test For"
        description="What to look for"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border-2 border-red-200 dark:border-red-800 rounded-xl bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Layout Breakage</h4>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Overlapping elements</li>
              <li>• Content overflow</li>
              <li>• Broken grid/flexbox</li>
              <li>• Incorrect positioning</li>
            </ul>
          </div>

          <div className="p-4 border-2 border-orange-200 dark:border-orange-800 rounded-xl bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">❌ Typography Issues</h4>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Unreadable text sizes</li>
              <li>• Wrong font loading</li>
              <li>• Poor line height</li>
              <li>• Text overflow/cutting</li>
            </ul>
          </div>

          <div className="p-4 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl bg-yellow-50 dark:bg-yellow-950/20">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">❌ Color/Contrast</h4>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Poor contrast ratios</li>
              <li>• Dark mode not working</li>
              <li>• Invisible text</li>
              <li>• Wrong colors applied</li>
            </ul>
          </div>

          <div className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">❌ Interactive States</h4>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Hover effects missing</li>
              <li>• Focus states invisible</li>
              <li>• Active states broken</li>
              <li>• Transitions not working</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When CSS Testing is Essential"
        description="Critical scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Before Deployment"
            description="Catch issues before users see them"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="After Refactoring"
            description="Ensure nothing broke during changes"
            icon={Eye}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Design System Updates"
            description="Test component library changes"
            icon={Layers}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Browser Updates"
            description="New browser versions may break CSS"
            icon={Sparkles}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS Testing Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Automate Visual Tests:</strong> Use tools like BackstopJS or Percy for automatic screenshot comparison</li>
          <li><strong>Test Multiple Browsers:</strong> At minimum test Chrome, Firefox, Safari, and Edge</li>
          <li><strong>Test Breakpoints:</strong> Mobile (375px), Tablet (768px), Desktop (1920px) at minimum</li>
          <li><strong>Test Interactive States:</strong> Hover, focus, active, disabled states</li>
          <li><strong>CI/CD Integration:</strong> Run CSS tests automatically on every pull request</li>
          <li><strong>Maintain Baselines:</strong> Update reference screenshots when you intentionally change designs</li>
          <li><strong>Test Dark Mode:</strong> If you support it, test both light and dark themes</li>
          <li><strong>Use Real Devices:</strong> Emulators are good, but test on real phones/tablets when possible</li>
        </ul>
      </InfoAlert>

      {/* Tools Summary */}
      <InfoAlert type="info" title="CSS Testing Tools Summary">
        <div className="mt-2 space-y-2">
          <p><strong>Visual Regression:</strong> BackstopJS (free), Percy, Chromatic</p>
          <p><strong>Cross-Browser:</strong> BrowserStack, LambdaTest, Sauce Labs</p>
          <p><strong>Responsive:</strong> Chrome DevTools (free), BrowserStack</p>
          <p><strong>E2E with CSS:</strong> Playwright, Cypress</p>
          <p><strong>Accessibility:</strong> axe DevTools, Lighthouse</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
