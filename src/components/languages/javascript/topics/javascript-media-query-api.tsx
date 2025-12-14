'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Monitor,
  CheckCircle,
  Smartphone,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptMediaQueryAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Monitor}
        category="JavaScript Browser APIs"
        title="Media Query API"
        description="Detect screen size and device features in JavaScript"
        colorTheme="teal"
      />

      {/* What is Media Query API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-emerald-50/20 dark:from-teal-950/10 dark:via-cyan-950/5 dark:to-emerald-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
              <Monitor className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Media Query API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Media Query API lets you <strong className="text-teal-700 dark:text-teal-400">check device features in JavaScript</strong> - screen size, dark mode, touch support, and more! Just like CSS media queries, but in JS.
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Responsive JavaScript:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Use the same media queries from CSS in your JavaScript to adapt behavior based on screen size, preferences, and device capabilities.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: Media Query Detection"
        description="Resize window to see detection in action!"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #0d9488; margin-bottom: 20px;">📱 Media Query Demo</h2>
  
  <!-- Screen Size Detection -->
  <div style="background: #ccfbf1; padding: 20px; border-radius: 8px; margin-bottom: 15px; border: 2px solid #14b8a6;">
    <h3 style="color: #115e59; margin-top: 0;">📐 Screen Size</h3>
    <div id="screenInfo" style="font-size: 18px; font-weight: 600; color: #0f766e;"></div>
  </div>
  
  <!-- Device Features -->
  <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin-bottom: 15px; border: 2px solid #0ea5e9;">
    <h3 style="color: #0c4a6e; margin-top: 0;">🎨 Features Detected</h3>
    <div id="features" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 14px;"></div>
  </div>
  
  <!-- Live Updates -->
  <div style="background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <strong style="color: #92400e;">💡 Try This:</strong>
    <span style="color: #78350f;"> Resize your browser window to see values update in real-time!</span>
  </div>
</div>`}
        js={`// Check screen size
function checkScreenSize() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
  
  let deviceType = '';
  if (isMobile) deviceType = '📱 Mobile';
  else if (isTablet) deviceType = '📱 Tablet';
  else if (isDesktop) deviceType = '💻 Desktop';
  
  const width = window.innerWidth;
  document.getElementById('screenInfo').innerHTML = \`
    <div style="margin-bottom: 10px;">Device: <strong>\${deviceType}</strong></div>
    <div>Width: <strong>\${width}px</strong></div>
  \`;
}

// Check device features
function checkFeatures() {
  const features = {
    'Dark Mode': window.matchMedia('(prefers-color-scheme: dark)').matches,
    'Touch Support': window.matchMedia('(pointer: coarse)').matches,
    'High DPI': window.matchMedia('(min-resolution: 2dppx)').matches,
    'Reduced Motion': window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
  
  let html = '';
  for (const [name, value] of Object.entries(features)) {
    const icon = value ? '✅' : '❌';
    const color = value ? '#10b981' : '#ef4444';
    html += \`<div style="color: \${color};">\${icon} \${name}</div>\`;
  }
  
  document.getElementById('features').innerHTML = html;
}

// Initial check
checkScreenSize();
checkFeatures();

// Listen for screen size changes
const mobileQuery = window.matchMedia('(max-width: 768px)');
mobileQuery.addEventListener('change', checkScreenSize);

// Update on window resize
window.addEventListener('resize', checkScreenSize);

// Listen for color scheme changes
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeQuery.addEventListener('change', checkFeatures);`}
        colorTheme="teal"
      />

      {/* Example 1: Check Screen Size */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Responsive JavaScript</CardTitle>
          <CardDescription>Detect mobile, tablet, desktop</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Check if mobile
const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (isMobile) {
  console.log('User is on mobile');
  // Load mobile-specific features
  loadMobileMenu();
} else {
  console.log('User is on desktop');
  // Load desktop features
  loadDesktopMenu();
}

// Listen for changes (window resize)
const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    console.log('Switched to mobile');
    loadMobileMenu();
  } else {
    console.log('Switched to desktop');
    loadDesktopMenu();
  }
});

// 🎯 Responsive behavior in JavaScript!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Dark Mode Detection */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Detect Dark Mode Preference</CardTitle>
          <CardDescription>Check user's color scheme preference</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Check if user prefers dark mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDark) {
  console.log('User prefers dark mode');
  document.body.classList.add('dark-theme');
} else {
  console.log('User prefers light mode');
  document.body.classList.add('light-theme');
}

// Listen for changes (system theme switch)
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeQuery.addEventListener('change', (e) => {
  if (e.matches) {
    console.log('Switched to dark mode');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    console.log('Switched to light mode');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
});

// 🎯 Respect system preferences!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>When to use Media Query API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800/30">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">📱 Responsive Features</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load different JS features for mobile/desktop
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">🌙 Dark Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Detect and respond to system theme
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">♿ Accessibility</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Respect reduced motion preferences
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">📊 Analytics</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Track device types and preferences
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
              <Code2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Media Query API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔍 Check Media Query</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const isMobile = window.matchMedia('(max-width: 768px)').matches;
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📡 Listen for Changes</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    console.log('Mobile view');
  }
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>🎯 Use Any CSS Query:</strong> Same queries as CSS media queries
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-teal-300 dark:border-teal-700 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-emerald-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">matchMedia()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check media queries<br/>
                    Returns MediaQueryList
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📏</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">.matches</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Boolean property<br/>
                    True if query matches
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">change Event</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Listen for changes<br/>
                    Resize, theme switch
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Any CSS Query</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use CSS media queries<br/>
                    In JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-300 dark:border-teal-700">
            <Smartphone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Responsive JavaScript</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Media Query API brings <strong>responsive design to JavaScript</strong>! Use the same queries from CSS to adapt your JS behavior. Perfect for loading different features based on device capabilities.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
