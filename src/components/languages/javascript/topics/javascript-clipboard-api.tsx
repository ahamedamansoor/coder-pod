'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Clipboard,
  CheckCircle,
  Copy,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptClipboardAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Clipboard}
        category="JavaScript Browser APIs"
        title="Clipboard API"
        description="Copy and paste text programmatically"
        colorTheme="purple"
      />

      {/* What is Clipboard API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-violet-50/30 to-pink-50/20 dark:from-purple-950/10 dark:via-violet-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
              <Clipboard className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Clipboard API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Clipboard API lets you <strong className="text-purple-700 dark:text-purple-400">copy and read text</strong> from the user's clipboard. Perfect for "copy to clipboard" buttons, sharing links, or copying code snippets!
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Security Note:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Reading from clipboard requires user permission. Writing to clipboard is usually allowed automatically.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: Copy to Clipboard"
        description="Try copying text with one click!"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #9333ea; margin-bottom: 20px;">📋 Clipboard Demo</h2>
  
  <!-- Text to copy -->
  <div style="background: #f3e8ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 2px solid #d8b4fe;">
    <h3 style="color: #7c3aed; margin-top: 0;">Text to Copy:</h3>
    <textarea id="textInput" style="width: 100%; padding: 12px; border: 2px solid #c084fc; border-radius: 6px; font-family: monospace; font-size: 14px; min-height: 100px;">Hello from Clipboard API! 👋
This text will be copied to your clipboard.</textarea>
  </div>
  
  <!-- Copy button -->
  <button id="copyBtn" style="padding: 12px 24px; background: #9333ea; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 16px; width: 100%; margin-bottom: 15px;">
    📋 Copy to Clipboard
  </button>
  
  <!-- Status message -->
  <div id="status" style="padding: 12px; border-radius: 6px; text-align: center; font-weight: 600; display: none;"></div>
  
  <!-- Paste area -->
  <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-top: 20px; border: 2px solid #fcd34d;">
    <h3 style="color: #d97706; margin-top: 0;">Paste Area (try Ctrl/Cmd+V):</h3>
    <textarea id="pasteArea" placeholder="Paste here to verify..." style="width: 100%; padding: 12px; border: 2px solid #fbbf24; border-radius: 6px; font-family: monospace; font-size: 14px; min-height: 100px;"></textarea>
  </div>
</div>`}
        css={`button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(147, 51, 234, 0.3);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}

textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.2);
}`}
        js={`const copyBtn = document.getElementById('copyBtn');
const textInput = document.getElementById('textInput');
const status = document.getElementById('status');

copyBtn.addEventListener('click', async () => {
  try {
    // Get text from textarea
    const text = textInput.value;
    
    // Copy to clipboard
    await navigator.clipboard.writeText(text);
    
    // Show success message
    status.style.display = 'block';
    status.style.background = '#d1fae5';
    status.style.color = '#065f46';
    status.textContent = '✅ Copied to clipboard!';
    
    // Change button text temporarily
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✓ Copied!';
    copyBtn.style.background = '#10b981';
    
    // Reset after 2 seconds
    setTimeout(() => {
      status.style.display = 'none';
      copyBtn.textContent = originalText;
      copyBtn.style.background = '#9333ea';
    }, 2000);
    
  } catch (error) {
    // Show error message
    status.style.display = 'block';
    status.style.background = '#fee2e2';
    status.style.color = '#991b1b';
    status.textContent = '❌ Failed to copy: ' + error.message;
  }
});

// Highlight paste area when user pastes
const pasteArea = document.getElementById('pasteArea');
pasteArea.addEventListener('paste', () => {
  setTimeout(() => {
    pasteArea.style.background = '#d1fae5';
    setTimeout(() => {
      pasteArea.style.background = 'white';
    }, 1000);
  }, 100);
});`}
        colorTheme="purple"
      />

      {/* Example 1: Copy Text */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Copy Text to Clipboard</CardTitle>
          <CardDescription>Simple copy functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied!');
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}

// Usage: Copy button
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  copyToClipboard(text);
});

// Copy a specific value
copyToClipboard('Hello, World!');

// 🎯 Common use: "Copy link" buttons`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Read from Clipboard */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Read from Clipboard</CardTitle>
          <CardDescription>Paste functionality (requires permission)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Read text from clipboard (requires user permission)
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted text:', text);
    return text;
  } catch (error) {
    console.error('Failed to read clipboard:', error);
    // User denied permission or browser blocked it
  }
}

// Usage: Paste button
document.getElementById('pasteBtn').addEventListener('click', async () => {
  const text = await pasteFromClipboard();
  if (text) {
    document.getElementById('textArea').value = text;
  }
});

// ⚠️ Note: Reading requires user permission!
// Browser will show a permission prompt`}</code>
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
              <CardDescription>When to use Clipboard API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">📋 Copy Code Snippets</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "Copy code" buttons on documentation sites
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🔗 Share Links</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Copy share URLs with one click
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">📱 Copy Contact Info</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Copy email addresses, phone numbers
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">🎫 Copy Promo Codes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                One-click coupon code copying
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Clipboard API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📝 Write to Clipboard</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`await navigator.clipboard.writeText('text');`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📖 Read from Clipboard</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const text = await navigator.clipboard.readText();`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>⚠️ Permission:</strong> Reading requires user permission prompt
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">writeText()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Copy text to clipboard<br/>
                    No permission needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📖</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">readText()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Read from clipboard<br/>
                    Requires permission
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Async API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns promises<br/>
                    Use async/await
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Better UX</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Show success feedback<br/>
                    Handle errors gracefully
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-300 dark:border-purple-700">
            <Copy className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Modern Copy/Paste</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Clipboard API is the <strong>modern way</strong> to handle copy/paste. Much better than the old <code className="text-xs bg-white dark:bg-slate-800 px-1 rounded">document.execCommand()</code> method!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
