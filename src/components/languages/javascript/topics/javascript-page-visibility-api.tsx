'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Eye,
  CheckCircle,
  EyeOff,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptPageVisibilityAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Eye}
        category="JavaScript Browser APIs"
        title="Page Visibility API"
        description="Detect when page is visible or hidden"
        colorTheme="cyan"
      />

      {/* What is Page Visibility API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Eye className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Page Visibility API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Page Visibility API tells you when the user <strong className="text-cyan-700 dark:text-cyan-400">switches tabs or minimizes the browser</strong>. Perfect for pausing videos, stopping animations, or saving battery!
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Like knowing when someone looks away from your website - you can pause resource-intensive tasks to save battery and performance.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: Visibility Detection"
        description="Switch tabs to see it work!"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #0891b2; margin-bottom: 20px;">👁️ Page Visibility Demo</h2>
  
  <div style="background: #cffafe; padding: 30px; border-radius: 12px; border: 3px solid #06b6d4; text-align: center; margin-bottom: 20px;">
    <div id="status" style="font-size: 48px; margin-bottom: 15px;">👁️</div>
    <h3 id="statusText" style="color: #0e7490; margin: 0;">Page is Visible</h3>
  </div>
  
  <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin-bottom: 20px;">
    <h4 style="color: #0c4a6e; margin-top: 0;">Statistics:</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 14px; color: #164e63;">
      <div>
        <strong>Times Hidden:</strong>
        <div id="hideCount" style="font-size: 24px; color: #0891b2; font-weight: bold;">0</div>
      </div>
      <div>
        <strong>Times Visible:</strong>
        <div id="showCount" style="font-size: 24px; color: #0891b2; font-weight: bold;">0</div>
      </div>
    </div>
  </div>
  
  <div style="padding: 15px; background: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <strong style="color: #92400e;">💡 Try This:</strong>
    <span style="color: #78350f;"> Switch to another tab and come back to see the counter update!</span>
  </div>
</div>`}
        css={`#status {
  transition: all 0.3s ease;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`}
        js={`let hideCount = 0;
let showCount = 0;

const status = document.getElementById('status');
const statusText = document.getElementById('statusText');
const hideCountEl = document.getElementById('hideCount');
const showCountEl = document.getElementById('showCount');

// Listen for visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is now hidden
    status.textContent = '🙈';
    statusText.textContent = 'Page is Hidden';
    statusText.style.color = '#dc2626';
    status.parentElement.style.background = '#fee2e2';
    status.parentElement.style.borderColor = '#ef4444';
    
    hideCount++;
    hideCountEl.textContent = hideCount;
    
    console.log('Page hidden - user switched tab');
    // Pause videos, stop animations, etc.
    
  } else {
    // Page is now visible
    status.textContent = '👁️';
    statusText.textContent = 'Page is Visible';
    statusText.style.color = '#0e7490';
    status.parentElement.style.background = '#cffafe';
    status.parentElement.style.borderColor = '#06b6d4';
    
    showCount++;
    showCountEl.textContent = showCount;
    
    console.log('Page visible - user returned');
    // Resume videos, animations, etc.
  }
});

// Check initial state
if (document.hidden) {
  statusText.textContent = 'Page is Hidden';
  status.textContent = '🙈';
}`}
        colorTheme="cyan"
      />

      {/* Example 1: Basic Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Detect Visibility Changes</CardTitle>
          <CardDescription>Know when user leaves/returns</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Listen for visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('User left the page');
    // Page is hidden (tab switched, minimized, etc.)
    
    // Pause video
    document.getElementById('video').pause();
    
    // Stop animations
    stopAnimations();
    
  } else {
    console.log('User returned to page');
    // Page is visible again
    
    // Resume video
    document.getElementById('video').play();
    
    // Resume animations
    startAnimations();
  }
});

// Check current state anytime
const isHidden = document.hidden;
console.log('Page hidden?', isHidden); // true or false

// 🎯 Saves battery and improves performance!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Video Player */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Auto-Pause Video Player</CardTitle>
          <CardDescription>Pause when user switches tabs</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Auto-pause video when user switches tabs
const video = document.getElementById('myVideo');
let wasPlaying = false;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // User left - pause if playing
    if (!video.paused) {
      wasPlaying = true;
      video.pause();
      console.log('Video auto-paused');
    }
  } else {
    // User returned - resume if it was playing
    if (wasPlaying) {
      video.play();
      wasPlaying = false;
      console.log('Video auto-resumed');
    }
  }
});

// 🎯 Better user experience - saves data/battery
// Common in YouTube, Netflix, etc.`}</code>
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
              <CardDescription>When to use Page Visibility</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">🎬 Video Players</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-pause when tab hidden
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🎮 Games</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pause game when user leaves
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">💬 Chat Apps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Stop polling for new messages
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">📊 Analytics</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Track engagement time accurately
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Page Visibility API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">👁️ Check Visibility</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const isHidden = document.hidden; // true or false`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📡 Listen for Changes</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page hidden - pause activities
  } else {
    // Page visible - resume
  }
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>🔋 Save Resources:</strong> Pause videos/animations when hidden
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🙈</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">document.hidden</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Boolean property<br/>
                    True when hidden
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">visibilitychange</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Event fires on change<br/>
                    Tab switch, minimize
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Save Resources</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pause when hidden<br/>
                    Better battery life
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Common Use</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Auto-pause videos<br/>
                    Stop animations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-300 dark:border-cyan-700">
            <EyeOff className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance & Battery</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Page Visibility API helps <strong>save battery and improve performance</strong> by pausing resource-intensive tasks when users aren't looking!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
