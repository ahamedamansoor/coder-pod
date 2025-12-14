'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Maximize2,
  CheckCircle,
  Monitor,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptFullscreenAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Maximize2}
        category="JavaScript Browser APIs"
        title="Fullscreen API"
        description="Enter and exit fullscreen mode"
        colorTheme="red"
      />

      {/* What is Fullscreen API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-orange-50/30 to-pink-50/20 dark:from-red-950/10 dark:via-orange-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 text-white shadow-lg">
              <Maximize2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Fullscreen API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Fullscreen API lets you display elements in <strong className="text-red-700 dark:text-red-400">fullscreen mode</strong> - perfect for videos, games, presentations, or image galleries!
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>User Interaction Required:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Fullscreen can only be triggered by user action (button click). Browsers block automatic fullscreen for security.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: Fullscreen"
        description="Try entering fullscreen mode!"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #dc2626; margin-bottom: 20px;">🖥️ Fullscreen Demo</h2>
  
  <!-- Fullscreen Target -->
  <div id="fullscreenElement" style="background: linear-gradient(135deg, #fee2e2, #fecaca); padding: 40px; border-radius: 12px; border: 3px solid #ef4444; text-align: center;">
    <h3 style="color: #991b1b; margin-top: 0;">📺 Fullscreen Area</h3>
    <p style="color: #7f1d1d; margin-bottom: 20px;">This section will go fullscreen!</p>
    
    <button id="toggleBtn" style="padding: 12px 24px; background: #dc2626; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 16px; margin-right: 10px;">
      🔲 Enter Fullscreen
    </button>
    
    <div id="status" style="margin-top: 20px; padding: 10px; background: white; border-radius: 6px; color: #991b1b; font-weight: 600;"></div>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <strong style="color: #92400e;">💡 Tip:</strong>
    <span style="color: #78350f;"> Press ESC to exit fullscreen mode!</span>
  </div>
</div>`}
        css={`button:hover {
  background: #b91c1c;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(220, 38, 38, 0.3);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}

#fullscreenElement:-webkit-full-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#fullscreenElement:fullscreen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`}
        js={`const fullscreenElement = document.getElementById('fullscreenElement');
const toggleBtn = document.getElementById('toggleBtn');
const status = document.getElementById('status');

// Toggle fullscreen
toggleBtn.addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      await fullscreenElement.requestFullscreen();
      toggleBtn.textContent = '🔳 Exit Fullscreen';
      status.textContent = '✅ Entered fullscreen mode!';
    } else {
      // Exit fullscreen
      await document.exitFullscreen();
      toggleBtn.textContent = '🔲 Enter Fullscreen';
      status.textContent = '✅ Exited fullscreen mode!';
    }
  } catch (error) {
    status.textContent = '❌ Error: ' + error.message;
  }
});

// Listen for fullscreen changes (ESC key, etc.)
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    status.textContent = '🖥️ Fullscreen active (Press ESC to exit)';
  } else {
    toggleBtn.textContent = '🔲 Enter Fullscreen';
    status.textContent = 'Back to normal view';
  }
});`}
        colorTheme="red"
      />

      {/* Example 1: Enter Fullscreen */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Enter/Exit Fullscreen</CardTitle>
          <CardDescription>Basic fullscreen control</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Enter fullscreen
async function enterFullscreen() {
  const element = document.getElementById('videoPlayer');
  
  try {
    await element.requestFullscreen();
    console.log('Entered fullscreen');
  } catch (error) {
    console.error('Failed to enter fullscreen:', error);
  }
}

// Exit fullscreen
async function exitFullscreen() {
  try {
    await document.exitFullscreen();
    console.log('Exited fullscreen');
  } catch (error) {
    console.error('Failed to exit fullscreen:', error);
  }
}

// Check if in fullscreen
const isFullscreen = document.fullscreenElement !== null;

// 🎯 Must be triggered by user action (click, key press)`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Fullscreen Events */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Detect Fullscreen Changes</CardTitle>
          <CardDescription>Listen for fullscreen events</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Listen for fullscreen changes
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('Entered fullscreen');
    // Update UI (hide controls, etc.)
  } else {
    console.log('Exited fullscreen');
    // Restore UI
  }
});

// Complete example: Video player
const video = document.getElementById('myVideo');
const fullscreenBtn = document.getElementById('fullscreenBtn');

fullscreenBtn.addEventListener('click', async () => {
  if (!document.fullscreenElement) {
    await video.requestFullscreen();
    fullscreenBtn.textContent = 'Exit Fullscreen';
  } else {
    await document.exitFullscreen();
    fullscreenBtn.textContent = 'Fullscreen';
  }
});

// User can also press ESC to exit
// The event will still fire!

// 🎯 Common use: Video players, games, presentations`}</code>
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
              <CardDescription>When to use Fullscreen API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">🎬 Video Players</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fullscreen video playback
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">🎮 Web Games</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Immersive gaming experience
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">📊 Presentations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Slideshow fullscreen mode
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">🖼️ Image Galleries</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                View images in fullscreen
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Code2 className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Fullscreen API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔲 Enter Fullscreen</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`await element.requestFullscreen();`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔳 Exit Fullscreen</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`await document.exitFullscreen();`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📂 Listen for Changes</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('Entered fullscreen');
  }
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>👆 User Action:</strong> Must be triggered by user interaction
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔲</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">requestFullscreen()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enter fullscreen mode<br/>
                    Returns Promise
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔳</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">exitFullscreen()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Leave fullscreen<br/>
                    Or press ESC
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">👆</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">User Action</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Must be user triggered<br/>
                    Click, key press, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">fullscreenchange</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Detect state changes<br/>
                    Update UI accordingly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950/30 dark:to-orange-950/30 border-red-300 dark:border-red-700">
            <Monitor className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Immersive Experience</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Fullscreen API creates <strong>immersive experiences</strong> for videos, games, and presentations. Remember it can only be triggered by user interaction!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
