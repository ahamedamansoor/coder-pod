'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  History,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Navigation,
  Code2,
} from 'lucide-react';

export default function JavaScriptHistoryAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={History}
        category="JavaScript Browser APIs"
        title="History API"
        description="Navigate browser history without page reloads"
        colorTheme="blue"
      />

      {/* What is History API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-indigo-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <History className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the History API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The History API lets you <strong className="text-blue-700 dark:text-blue-400">control the browser's history</strong> - go back, forward, or change the URL without reloading the page. Perfect for building Single Page Applications (SPAs) like Gmail or Twitter where pages change but don't reload.
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Think of your browser like a book. The History API is like <strong>bookmarks</strong> that let you:<br/>
              • Go back to previous pages (flip backward)<br/>
              • Go forward (flip forward)<br/>
              • Add new bookmarks without turning pages
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Main Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Navigation className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Main History Methods</CardTitle>
              <CardDescription>Key functions you'll use</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                history.back()
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Go back one page (like clicking browser back button)
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                history.back(); // Same as clicking ← button
              </code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                history.forward()
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Go forward one page (like clicking browser forward button)
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                history.forward(); // Same as clicking → button
              </code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">history.go()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Jump multiple pages at once (negative = back, positive = forward)
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded block mb-1">
                history.go(-2); // Go back 2 pages
              </code>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded block mb-1">
                history.go(1);  // Go forward 1 page
              </code>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded block">
                history.go(0);  // Reload current page
              </code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">history.pushState()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Add new page to history WITHOUT reloading (most important for SPAs!)
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded block">
                history.pushState(data, title, url);
              </code>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">history.replaceState()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Change current page in history WITHOUT reloading (doesn't add to history)
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded block">
                history.replaceState(data, title, url);
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: Single Page App with History API"
        description="Try navigating between pages without reload!"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #2563eb; margin-bottom: 20px;">🌐 My Single Page App</h2>
  
  <!-- Navigation -->
  <nav style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
    <button id="homeBtn" style="padding: 10px 20px; margin-right: 10px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
      🏠 Home
    </button>
    <button id="aboutBtn" style="padding: 10px 20px; margin-right: 10px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
      ℹ️ About
    </button>
    <button id="contactBtn" style="padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
      📧 Contact
    </button>
  </nav>
  
  <!-- Page Content -->
  <div id="content" style="background: white; padding: 30px; border-radius: 8px; border: 2px solid #e2e8f0; min-height: 200px;">
    <h1 style="color: #10b981; margin-bottom: 15px;">🏠 Home Page</h1>
    <p style="color: #64748b; line-height: 1.6;">Welcome to our single page application! Click the navigation buttons above to switch pages without reload.</p>
    <p style="color: #64748b; margin-top: 10px;">Notice: The URL changes but the page doesn't reload! ✨</p>
  </div>
  
  <!-- Browser Controls Simulation -->
  <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
    <p style="margin: 0 0 10px 0; font-weight: 600; color: #92400e;">Browser Navigation:</p>
    <button id="backBtn" style="padding: 8px 16px; margin-right: 10px; background: #f59e0b; color: white; border: none; border-radius: 6px; cursor: pointer;">
      ← Back
    </button>
    <button id="forwardBtn" style="padding: 8px 16px; background: #f59e0b; color: white; border: none; border-radius: 6px; cursor: pointer;">
      Forward →
    </button>
  </div>
  
  <!-- URL Display -->
  <div id="urlDisplay" style="margin-top: 15px; padding: 10px; background: #dbeafe; border-radius: 6px; font-family: monospace; color: #1e40af; font-size: 14px;">
    Current URL: /home
  </div>
</div>`}
        css={`button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}`}
        js={`// Page content
const pages = {
  home: {
    title: '🏠 Home Page',
    content: 'Welcome to our single page application! Click the navigation buttons above to switch pages without reload.',
    color: '#10b981'
  },
  about: {
    title: 'ℹ️ About Page',
    content: 'We are awesome developers learning the History API! This page demonstrates how SPAs work without page reloads.',
    color: '#3b82f6'
  },
  contact: {
    title: '📧 Contact Page',
    content: 'Get in touch: hello@example.com | Phone: (555) 123-4567 | Address: 123 Web Dev Street',
    color: '#8b5cf6'
  }
};

// Navigation history tracking
let historyStack = ['home'];
let currentIndex = 0;

// Update page content
function updatePage(page, message = '') {
  const pageData = pages[page];
  document.getElementById('content').innerHTML = \`
    <h1 style="color: \${pageData.color}; margin-bottom: 15px;">\${pageData.title}</h1>
    <p style="color: #64748b; line-height: 1.6;">\${pageData.content}</p>
    <p style="color: #64748b; margin-top: 10px;">\${message || 'Notice: URL changed to <strong>/' + page + '</strong> without page reload! ✨'}</p>
  \`;
  document.getElementById('urlDisplay').textContent = 'Current URL: /' + page;
}

// Navigate to a page
function navigateTo(page) {
  // Remove any forward history if we navigate from middle
  if (currentIndex < historyStack.length - 1) {
    historyStack = historyStack.slice(0, currentIndex + 1);
  }
  
  // Add new page to history
  historyStack.push(page);
  currentIndex++;
  
  updatePage(page);
  history.pushState({ page: page }, '', '/' + page);
}

// Navigation button handlers
document.getElementById('homeBtn').addEventListener('click', () => navigateTo('home'));
document.getElementById('aboutBtn').addEventListener('click', () => navigateTo('about'));
document.getElementById('contactBtn').addEventListener('click', () => navigateTo('contact'));

// Back button - go to previous page in our history
document.getElementById('backBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    const page = historyStack[currentIndex];
    updatePage(page, '⬅️ Navigated back to ' + page);
  }
});

// Forward button - go to next page in our history
document.getElementById('forwardBtn').addEventListener('click', () => {
  if (currentIndex < historyStack.length - 1) {
    currentIndex++;
    const page = historyStack[currentIndex];
    updatePage(page, '➡️ Navigated forward to ' + page);
  }
});

// Initialize
updatePage('home', 'Welcome! Click navigation buttons to switch pages.');
history.pushState({ page: 'home' }, '', '/home');`}
        colorTheme="blue"
      />

      {/* Example 1: Simple Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Simple Back/Forward Navigation</CardTitle>
          <CardDescription>Basic browser navigation control</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// HTML buttons
<button id="backBtn">← Go Back</button>
<button id="forwardBtn">Go Forward →</button>
<button id="refreshBtn">Refresh Page</button>

// JavaScript
document.getElementById('backBtn').addEventListener('click', () => {
  history.back(); // Go to previous page
});

document.getElementById('forwardBtn').addEventListener('click', () => {
  history.forward(); // Go to next page
});

document.getElementById('refreshBtn').addEventListener('click', () => {
  history.go(0); // Reload current page
});

// 🎯 These work exactly like browser buttons!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: pushState Basics */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Change URL Without Reload (pushState)</CardTitle>
          <CardDescription>The magic of Single Page Applications</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Change URL without page reload!
// Current URL: https://example.com/

// Add new page to history
history.pushState(
  { page: 'about' },           // State object (any data you want)
  'About Page',                // Title (usually ignored by browsers)
  '/about'                     // New URL
);

// URL is now: https://example.com/about
// But page didn't reload! 🎉

console.log(history.state); // { page: 'about' }

// You can now update the page content with JavaScript
document.getElementById('content').innerHTML = '<h1>About Page</h1>';

// Handle back/forward buttons
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.page) {
    // Update content when user clicks back/forward
    const page = event.state.page;
    document.getElementById('content').innerHTML = '<h1>' + page + '</h1>';
  }
});

// 🎯 This is how SPAs work - change URL and content without reload!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Common Use Cases - removed detailed examples 3-6, keeping use cases summary */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Try the Interactive Demo Above!</CardTitle>
          <CardDescription>The live demo shows all these concepts in action</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            Scroll up to the interactive demo to see a working Single Page App with navigation, back/forward buttons, and URL updates - all without page reloads!
          </p>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use History API</CardTitle>
              <CardDescription>Common scenarios</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🎯 Single Page Apps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Change pages without reload (like Gmail, Twitter)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">📑 Tab Systems</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update URL when switching tabs
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">🔍 Search Filters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update URL with search params without reload
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">📄 Pagination</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Show page number in URL
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">🎨 Modal Dialogs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Close modal with back button
              </p>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">📊 Dashboard Views</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Bookmark specific dashboard states
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices - removed detailed Example 4-6, keeping best practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using History API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Always Handle popstate</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Listen for back/forward button clicks with window.addEventListener('popstate')
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Use pushState for New Pages</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When navigating to a new section that should be in history
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Use replaceState for Updates</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When changing filters, sorts, or other temporary states
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✅ Save Useful State</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Store data in state object to restore page when user navigates back
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't Use for External URLs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                History API only works for same-origin URLs (your own site)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>History API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔄 Navigate History</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`history.back();    // Go back one page
history.forward(); // Go forward one page
history.go(-2);    // Go back 2 pages`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎯 Change URL Without Reload</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`// Add to history
history.pushState({ page: 'about' }, '', '/about');

// Replace current entry
history.replaceState({ filter: 'new' }, '', '/products?filter=new');`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⬅️ Handle Back/Forward</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`window.addEventListener('popstate', (event) => {
  console.log('State:', event.state);
  // Update page based on state
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>🎯 pushState:</strong> New entry | <strong>🔄 replaceState:</strong> Update current
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Navigate History</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    back(), forward(), go()<br/>
                    Control browser navigation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">pushState</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add to history<br/>
                    Change URL without reload
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">replaceState</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Update without adding<br/>
                    For filters, tabs, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⬅️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">popstate Event</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Listen for back/forward<br/>
                    Update page content
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <History className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Perfect for Single Page Apps</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The History API is <strong>essential for SPAs</strong>. It lets you change pages without reload, making your app feel fast and smooth. Always handle popstate events to support back/forward buttons!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
