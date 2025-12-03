'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { 
  Code2, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  Lightbulb,
  Zap,
  Monitor,
  Settings,
  Keyboard,
  FileCode
} from 'lucide-react';

interface HtmlEditorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlEditors({ onOpenWebPlayground }: HtmlEditorsProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Hero Section */}
      <PageHeader
        icon={Code2}
        category="HTML · Fundamentals"
        title="HTML Editors & Tools"
        description="Discover the best tools and editors to write HTML code efficiently—from beginner-friendly options to professional setups."
        colorTheme="blue"
      />

      {/* 1. WHY YOU NEED AN EDITOR */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <FileCode className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">Why Use a Code Editor?</CardTitle>
              <CardDescription className="text-base mt-1">
                The right tools make coding faster, easier, and more enjoyable
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-lg">Auto-Complete</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Type &lt;div and the editor suggests the closing tag automatically. Saves tons of time!
              </p>
            </div>

            <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-lg">Syntax Highlighting</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Different colors for tags, attributes, and text make code easy to read and debug.
              </p>
            </div>

            <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-lg">Error Detection</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Instantly see typos, missing tags, and mistakes before you even run the code.
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-700">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              While you <em>can</em> write HTML in Notepad, a proper code editor is like upgrading from a bicycle to a sports car!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 2. TOP EDITORS FOR BEGINNERS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Monitor className="w-7 h-7" />
            Best Editors for Beginners
          </CardTitle>
          <CardDescription className="text-base">
            These free tools are perfect for learning HTML—professional yet easy to use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* VS Code */}
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="bg-blue-500 text-white mb-3">RECOMMENDED</Badge>
                <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Visual Studio Code (VS Code)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  The most popular code editor in the world—free, powerful, and beginner-friendly
                </p>
              </div>
              <Download className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-bold text-sm mb-2 text-blue-600 dark:text-blue-400">✨ Why It's Great</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Free and open-source</li>
                  <li>• Works on Windows, Mac, and Linux</li>
                  <li>• Thousands of extensions available</li>
                  <li>• Built-in terminal and Git support</li>
                  <li>• Live preview of your HTML pages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-2 text-blue-600 dark:text-blue-400">🚀 Perfect For</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Complete beginners</li>
                  <li>• Professional developers</li>
                  <li>• Any skill level in between</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Download at:</p>
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">code.visualstudio.com</code>
            </div>
          </div>

          {/* Other Editors */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Sublime Text */}
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Sublime Text</h3>
              <Badge className="bg-blue-500 text-white mb-3 text-xs">FAST & LIGHTWEIGHT</Badge>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Blazing fast editor with a minimalist design. Great for quick edits and lightweight projects.
              </p>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>✓ Super fast startup</p>
                <p>✓ Multiple cursors</p>
                <p>✓ Free trial (paid license)</p>
              </div>
            </div>

            {/* Brackets */}
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Brackets</h3>
              <Badge className="bg-blue-500 text-white mb-3 text-xs">WEB-FOCUSED</Badge>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Made specifically for web development with live preview built right in. Perfect for HTML/CSS.
              </p>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>✓ Live HTML preview</p>
                <p>✓ Inline editing</p>
                <p>✓ 100% free</p>
              </div>
            </div>

            {/* Atom */}
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Atom</h3>
              <Badge className="bg-blue-500 text-white mb-3 text-xs">CUSTOMIZABLE</Badge>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Highly customizable editor by GitHub. Great for learners who like to personalize everything.
              </p>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>✓ Thousands of themes</p>
                <p>✓ Package manager</p>
                <p>✓ Free & open-source</p>
              </div>
            </div>

            {/* Notepad++ */}
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Notepad++</h3>
              <Badge className="bg-blue-500 text-white mb-3 text-xs">WINDOWS CLASSIC</Badge>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Simple, fast, and reliable. A Windows favorite for quick HTML editing and lightweight tasks.
              </p>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>✓ Very lightweight</p>
                <p>✓ Windows only</p>
                <p>✓ Free forever</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. ESSENTIAL EXTENSIONS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Must-Have VS Code Extensions
          </CardTitle>
          <CardDescription className="text-base">
            Supercharge your editor with these game-changing extensions
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-lg">Live Server</h4>
              <Badge className="bg-orange-500 text-white text-xs">ESSENTIAL</Badge>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              See your HTML changes instantly in the browser without manually refreshing. Auto-reload on save!
            </p>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Install command:</p>
              <code className="text-xs font-mono text-orange-600 dark:text-orange-400">ext install ritwickdey.LiveServer</code>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-lg">HTML Snippets</h4>
              <Badge className="bg-purple-500 text-white text-xs">ESSENTIAL</Badge>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Type shortcuts like "html5" and get full HTML templates instantly. Massive time saver!
            </p>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Try typing:</p>
              <code className="text-xs font-mono text-purple-600 dark:text-purple-400">html:5 + Tab</code>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg mb-3">Auto Rename Tag</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Change &lt;div&gt; to &lt;section&gt; and the closing tag updates automatically. Magic!
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-lg mb-3">Prettier</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Formats your messy HTML into clean, readable code with one keyboard shortcut.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg mb-3">Color Highlight</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Shows actual colors next to color codes in your HTML. Perfect for quick reference.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-lg mb-3">IntelliSense for CSS</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Suggests CSS class names as you type. Works great with inline styles too!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 4. BROWSER DEVTOOLS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Monitor className="w-7 h-7" />
            Browser DevTools: Your Secret Weapon
          </CardTitle>
          <CardDescription className="text-base">
            Every browser has built-in tools to inspect, debug, and experiment with HTML
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            title="Inspect Any Website"
            description="Right-click any element and choose 'Inspect' to see its HTML code"
            html={`<div class="inspect-demo">
  <h2>🔍 Try This!</h2>
  <p>Right-click this text and select "Inspect Element"</p>
  <button class="inspect-btn">Inspect Me!</button>
  <div class="info-box">
    <strong>What you'll see:</strong>
    <ul>
      <li>HTML structure</li>
      <li>Applied CSS styles</li>
      <li>Element dimensions</li>
    </ul>
  </div>
</div>`}
            css={`body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
  }
}

.inspect-demo {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(234, 88, 12, 0.2);
  max-width: 500px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .inspect-demo {
    background: #1e293b;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  }
}

h2 {
  color: #ea580c;
  margin-bottom: 1rem;
  font-size: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #fb923c;
  }
}

p {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #cbd5e1;
  }
}

.inspect-btn {
  background: linear-gradient(135deg, #ea580c, #dc2626);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);
  transition: all 0.3s;
  margin-bottom: 1.5rem;
}

.inspect-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(234, 88, 12, 0.6);
}

.info-box {
  background: #fff7ed;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ea580c;
  text-align: left;
}

@media (prefers-color-scheme: dark) {
  .info-box {
    background: #292524;
    border-left-color: #fb923c;
  }
}

.info-box strong {
  color: #ea580c;
  display: block;
  margin-bottom: 0.75rem;
}

@media (prefers-color-scheme: dark) {
  .info-box strong {
    color: #fb923c;
  }
}

.info-box ul {
  list-style: none;
  padding-left: 0;
}

.info-box li {
  color: #64748b;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

@media (prefers-color-scheme: dark) {
  .info-box li {
    color: #cbd5e1;
  }
}

.info-box li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #ea580c;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .info-box li:before {
    color: #fb923c;
  }
}`}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <Keyboard className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
              <h4 className="font-bold mb-2">Open DevTools</h4>
              <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <p><strong>Windows/Linux:</strong> F12 or Ctrl+Shift+I</p>
                <p><strong>Mac:</strong> Cmd+Option+I</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-bold mb-2">Edit Live</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Double-click any HTML element to edit it live and see changes instantly!
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
              <h4 className="font-bold mb-2">Learn from Others</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Inspect any website to see how they built features you like!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5. KEYBOARD SHORTCUTS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Keyboard className="w-7 h-7" />
            Essential Keyboard Shortcuts
          </CardTitle>
          <CardDescription className="text-base">
            Work 10x faster with these must-know shortcuts in VS Code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Save File</h4>
                <Badge className="bg-emerald-500 text-white text-xs">BASIC</Badge>
              </div>
              <code className="text-sm text-slate-700 dark:text-slate-300">Ctrl+S (Cmd+S on Mac)</code>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Duplicate Line</h4>
                <Badge className="bg-purple-500 text-white text-xs">TIME-SAVER</Badge>
              </div>
              <code className="text-sm text-slate-700 dark:text-slate-300">Shift+Alt+Down</code>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Comment Code</h4>
                <Badge className="bg-amber-500 text-white text-xs">USEFUL</Badge>
              </div>
              <code className="text-sm text-slate-700 dark:text-slate-300">Ctrl+/ (Cmd+/)</code>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Find & Replace</h4>
                <Badge className="bg-orange-500 text-white text-xs">POWERFUL</Badge>
              </div>
              <code className="text-sm text-slate-700 dark:text-slate-300">Ctrl+H (Cmd+H)</code>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Move Line Up/Down</h4>
                <Badge className="bg-cyan-500 text-white text-xs">HANDY</Badge>
              </div>
              <code className="text-sm text-slate-700 dark:text-slate-300">Alt+Up/Down</code>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Multi-Cursor Edit</h4>
                <Badge className="bg-rose-500 text-white text-xs">ADVANCED</Badge>
              </div>
              <code className="text-sm text-slate-700 dark:text-slate-300">Alt+Click</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 6. ONLINE EDITORS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            Online Code Editors (No Installation!)
          </CardTitle>
          <CardDescription className="text-base">
            Practice HTML right in your browser—perfect for quick experiments and learning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-500 text-white mb-3">BEGINNER-FRIENDLY</Badge>
              <h3 className="text-xl font-bold mb-2">CodePen</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Write HTML, CSS, and JavaScript side-by-side with instant preview. Great for sharing code!
              </p>
              <code className="text-xs text-orange-600 dark:text-orange-400">codepen.io</code>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-500 text-white mb-3">FULL PROJECTS</Badge>
              <h3 className="text-xl font-bold mb-2">CodeSandbox</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Build complete projects with multiple files. Supports frameworks like React and Vue.
              </p>
              <code className="text-xs text-purple-600 dark:text-purple-400">codesandbox.io</code>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h3 className="text-xl font-bold mb-2">JSFiddle</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Simple, clean interface. Perfect for testing small HTML snippets quickly.
              </p>
              <code className="text-xs text-emerald-600 dark:text-emerald-400">jsfiddle.net</code>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
              <h3 className="text-xl font-bold mb-2">Replit</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Full IDE in the browser. Collaborate in real-time with others!
              </p>
              <code className="text-xs text-cyan-600 dark:text-cyan-400">replit.com</code>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-700">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle>When to Use Online Editors?</AlertTitle>
            <AlertDescription className="text-amber-900 dark:text-amber-100">
              Perfect for quick experiments, sharing code with others, or learning on devices where you can't install software. But for serious projects, install VS Code!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 7. INTERACTIVE PLAYGROUND */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🎨 Try Your First HTML Editor Experience"
          description="Experiment with code editing right here—see how syntax highlighting and auto-formatting make coding easier!"
          features={[
            'Syntax highlighting',
            'Auto-completion',
            'Live preview',
            'Instant feedback'
          ]}
          buttonText="Launch Code Editor"
          onLaunchPlayground={() => onOpenWebPlayground(
            `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My HTML Editor</title>
</head>
<body>
  <div class="container">
    <h1>🎉 Welcome to Your HTML Editor!</h1>
    <p>Try editing this code and see the changes instantly!</p>
    
    <section class="features">
      <h2>What Makes Good Editors Great?</h2>
      <ul>
        <li>✨ Syntax highlighting (see the colors?)</li>
        <li>🚀 Auto-complete (type &lt; and watch)</li>
        <li>💡 Error detection (catch mistakes early)</li>
        <li>⚡ Live preview (see results instantly)</li>
      </ul>
    </section>

    <button onclick="celebrate()">Click to Celebrate!</button>
    <div id="message"></div>
  </div>
</body>
</html>`,
            `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  min-height: 100vh;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #ea580c, #dc2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

p {
  color: #64748b;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.features {
  background: #fff7ed;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #ea580c;
  margin-bottom: 2rem;
}

h2 {
  color: #ea580c;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
}

li {
  color: #475569;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #fed7aa;
}

li:last-child {
  border-bottom: none;
}

button {
  background: linear-gradient(135deg, #ea580c, #dc2626);
  color: white;
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(234, 88, 12, 0.6);
}

#message {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s;
}

#message.show {
  opacity: 1;
}`,
            `function celebrate() {
  const message = document.getElementById('message');
  message.textContent = '🎉 You just used a code editor! Keep experimenting!';
  message.style.background = 'linear-gradient(135deg, #ea580c, #dc2626)';
  message.style.color = 'white';
  message.classList.add('show');
  
  setTimeout(() => {
    message.textContent = '💡 Pro Tip: Good editors make coding 10x more fun!';
  }, 2000);
}

console.log('🚀 This is your code editor playground!');
console.log('💡 Try editing the HTML, CSS, or JavaScript!');`
          )}
          playgroundData={{
            html: `<!DOCTYPE html><html><body><h1>Editor Playground</h1></body></html>`,
            css: '',
            js: ''
          }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
