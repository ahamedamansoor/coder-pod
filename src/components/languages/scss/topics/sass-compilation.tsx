'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Settings, Terminal, Eye, Zap, CheckCircle, AlertTriangle, Info, Sparkles, Play, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassCompilationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCompilation({ onOpenWebPlayground }: SassCompilationProps) {
  
  const basicCompilationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Compilation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #3b82f6;
      text-align: center;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #60a5fa; }
    }
    
    .terminal {
      background: #0f172a;
      padding: 25px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      margin: 20px 0;
    }
    
    .terminal-header {
      display: flex;
      gap: 8px;
      margin-bottom: 15px;
    }
    
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .dot-red { background: #ef4444; }
    .dot-yellow { background: #eab308; }
    .dot-green { background: #10b981; }
    
    .command {
      color: #10b981;
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    .output {
      color: #60a5fa;
      margin-left: 20px;
      font-size: 13px;
    }
    
    .files {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    
    @media (max-width: 640px) {
      .files { grid-template-columns: 1fr; }
    }
    
    .file-card {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .file-card {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .file-title {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .file-title { color: #bfdbfe; }
    }
    
    .file-type {
      color: #60a5fa;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    code {
      display: block;
      color: #1e3a8a;
      font-size: 13px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      code { color: #dbeafe; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚙️ Sass Compilation</h1>
    
    <div class="terminal">
      <div class="terminal-header">
        <div class="dot dot-red"></div>
        <div class="dot dot-yellow"></div>
        <div class="dot dot-green"></div>
      </div>
      <div class="command">$ sass styles.scss styles.css</div>
      <div class="output">Compiled styles.scss to styles.css.</div>
    </div>
    
    <div class="files">
      <div class="file-card">
        <div class="file-title">📄 Input: styles.scss</div>
        <div class="file-type">SASS/SCSS SOURCE</div>
        <code>
$primary: #3b82f6;<br><br>
.button {<br>
&nbsp;&nbsp;background: $primary;<br>
&nbsp;&nbsp;padding: 10px 20px;<br>
}
        </code>
      </div>
      
      <div class="file-card">
        <div class="file-title">📄 Output: styles.css</div>
        <div class="file-type">COMPILED CSS</div>
        <code>
.button {<br>
&nbsp;&nbsp;background: #3b82f6;<br>
&nbsp;&nbsp;padding: 10px 20px;<br>
}
        </code>
      </div>
    </div>
  </div>
</body>
</html>`;

  const watchModeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Watch Mode</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #065f46 0%, #064e3b 100%); }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #10b981;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #6ee7b7; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .terminal {
      background: #0f172a;
      padding: 25px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      margin: 20px 0;
    }
    
    .terminal-header {
      display: flex;
      gap: 8px;
      margin-bottom: 15px;
    }
    
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .dot-red { background: #ef4444; }
    .dot-yellow { background: #eab308; }
    .dot-green { background: #10b981; }
    
    .command {
      color: #10b981;
      margin-bottom: 12px;
      font-size: 14px;
    }
    
    .watching {
      color: #fbbf24;
      font-size: 13px;
      margin-left: 20px;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .change {
      color: #60a5fa;
      margin-left: 20px;
      font-size: 13px;
      margin-top: 15px;
    }
    
    .compiled {
      color: #6ee7b7;
      margin-left: 20px;
      font-size: 13px;
    }
    
    .benefits {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 30px;
    }
    
    .benefit {
      background: #d1fae5;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      color: #065f46;
      border: 2px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit {
        background: #065f46;
        color: #d1fae5;
        border-color: #6ee7b7;
      }
    }
    
    .benefit h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👁️ Watch Mode</h1>
    <p class="subtitle">Auto-compile on file changes!</p>
    
    <div class="terminal">
      <div class="terminal-header">
        <div class="dot dot-red"></div>
        <div class="dot dot-yellow"></div>
        <div class="dot dot-green"></div>
      </div>
      <div class="command">$ sass --watch styles.scss:styles.css</div>
      <div class="watching">Sass is watching for changes. Press Ctrl-C to stop.</div>
      <div class="change">Change detected to: styles.scss</div>
      <div class="compiled">✓ Compiled styles.scss to styles.css</div>
    </div>
    
    <div class="benefits">
      <div class="benefit">
        <h3>⚡ Instant</h3>
        <p>Compiles automatically on save</p>
      </div>
      <div class="benefit">
        <h3>🔄 Continuous</h3>
        <p>Watches multiple files</p>
      </div>
      <div class="benefit">
        <h3>🚀 Productive</h3>
        <p>See changes immediately</p>
      </div>
    </div>
  </div>
</body>
</html>`;

  const outputStylesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Output Styles</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .styles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .style-card {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      padding: 20px;
      border-radius: 12px;
      border: 3px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .style-card {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    .style-title {
      color: #6b21a8;
      font-weight: 700;
      margin-bottom: 10px;
      text-align: center;
      font-size: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .style-title { color: #ddd6fe; }
    }
    
    .command {
      background: #0f172a;
      padding: 10px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
      color: #10b981;
      margin-bottom: 10px;
      overflow-x: auto;
    }
    
    .output {
      background: #1e293b;
      padding: 12px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 11px;
      color: #e2e8f0;
      line-height: 1.6;
      overflow-x: auto;
    }
    
    .label {
      color: #8b5cf6;
      font-size: 12px;
      font-weight: 600;
      margin: 8px 0 4px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label { color: #ddd6fe; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Output Styles</h1>
    <p class="subtitle">Different CSS formatting options</p>
    
    <div class="styles-grid">
      <div class="style-card">
        <div class="style-title">📦 Compressed</div>
        <div class="command">--style compressed</div>
        <div class="label">Use for: Production</div>
        <div class="output">.button{background:#3b82f6;padding:10px 20px}</div>
      </div>
      
      <div class="style-card">
        <div class="style-title">📄 Expanded</div>
        <div class="command">--style expanded</div>
        <div class="label">Use for: Development</div>
        <div class="output">.button {<br>&nbsp;&nbsp;background: #3b82f6;<br>&nbsp;&nbsp;padding: 10px 20px;<br>}</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Settings}
        category="Sass/SCSS · Workflow"
        title="Compilation"
        description="Learn how to compile Sass to CSS with different options and modes"
        colorTheme="pink"
      />

      {/* What is Compilation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is Sass Compilation?
          </CardTitle>
          <CardDescription>
            Converting Sass/SCSS files into browser-ready CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Browsers can't read .scss or .sass files directly - they only understand CSS. 
            <strong className="text-foreground"> Compilation</strong> is the process of transforming your Sass code into regular CSS.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-4 justify-center text-center">
              <div>
                <div className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">.scss File</div>
                <div className="text-xs text-pink-600 dark:text-pink-400">(Variables, Nesting)</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl">→</div>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">Sass Compiler</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-1">.css File</div>
                <div className="text-xs text-green-600 dark:text-green-400">(Plain CSS)</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Code className="h-5 w-5 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Write Sass</h4>
              <p className="text-sm text-muted-foreground">
                Use variables, nesting, mixins
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Run Compiler</h4>
              <p className="text-sm text-muted-foreground">
                Transform to CSS automatically
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Link CSS</h4>
              <p className="text-sm text-muted-foreground">
                Use compiled file in HTML
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Compilation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Basic Compilation
          </CardTitle>
          <CardDescription>
            Compile a single Sass file to CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicCompilationExample}
            title="Basic Sass Compilation"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Command Breakdown:</h4>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
              <div><span className="text-green-600 dark:text-green-400">sass</span> = Run the Sass compiler</div>
              <div><span className="text-pink-600 dark:text-pink-400">styles.scss</span> = Input file (your Sass code)</div>
              <div><span className="text-blue-600 dark:text-blue-400">styles.css</span> = Output file (compiled CSS)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Watch Mode */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Watch Mode (Auto-Compile)
          </CardTitle>
          <CardDescription>
            Automatically recompile when files change
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={watchModeExample}
            title="Sass Watch Mode Demo"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Sparkles className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Watch Mode Benefits</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Instant feedback</strong> - See changes immediately in browser</li>
                <li><strong>Multiple files</strong> - Watch entire directories</li>
                <li><strong>Development speed</strong> - No manual compilation needed</li>
                <li><strong>Error detection</strong> - Get instant compile error messages</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Output Styles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Output Styles
          </CardTitle>
          <CardDescription>
            Different CSS formatting options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={outputStylesExample}
            title="CSS Output Styles"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-500" />
                Compressed (Production)
              </h4>
              <code className="text-xs bg-background px-2 py-1 rounded">--style compressed</code>
              <p className="text-sm text-muted-foreground mt-2">
                Minified, no whitespace. Perfect for production - smallest file size!
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" />
                Expanded (Development)
              </h4>
              <code className="text-xs bg-background px-2 py-1 rounded">--style expanded</code>
              <p className="text-sm text-muted-foreground mt-2">
                Readable, formatted CSS. Great for debugging and development!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Watch Directories */}
      <Card>
        <CardHeader>
          <CardTitle>Watch Multiple Files</CardTitle>
          <CardDescription>
            Compile entire directories automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">sass --watch scss:css</code>
              <p className="text-sm text-muted-foreground mt-2">
                Watch all .scss files in the <code>scss/</code> folder and compile to <code>css/</code>
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">sass --watch scss:css --style compressed</code>
              <p className="text-sm text-muted-foreground mt-2">
                Watch and compile with compressed output (for production builds)
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">sass --watch scss:css --source-map</code>
              <p className="text-sm text-muted-foreground mt-2">
                Generate source maps for easier debugging in browser DevTools
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Commands */}
      <Card>
        <CardHeader>
          <CardTitle>Common Sass Commands</CardTitle>
          <CardDescription>
            Essential commands you'll use frequently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Single File</h4>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mb-2">
                sass input.scss output.css
              </code>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Compile one file
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Watch Single</h4>
              <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded block mb-2">
                sass --watch input.scss:output.css
              </code>
              <p className="text-sm text-green-700 dark:text-green-300">
                Auto-compile one file
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Watch Folder</h4>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block mb-2">
                sass --watch scss:css
              </code>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Watch entire directory
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Production Build</h4>
              <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded block mb-2">
                sass scss:css --style compressed
              </code>
              <p className="text-sm text-pink-700 dark:text-pink-300">
                Minified output
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Compilation Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use watch mode during development</strong> - Save time with auto-compilation</li>
            <li><strong>Compress for production</strong> - Use --style compressed for live sites</li>
            <li><strong>Enable source maps</strong> - Makes debugging easier in browser DevTools</li>
            <li><strong>Watch directories, not files</strong> - Easier to manage multiple files</li>
            <li><strong>Keep compiled CSS in .gitignore</strong> - Only commit source .scss files</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Source Maps Info */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">What are Source Maps?</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          Source maps help you debug by showing the original Sass file location in browser DevTools instead of the compiled CSS line numbers. 
          Add <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">--source-map</code> flag to generate them automatically.
        </AlertDescription>
      </Alert>
    </div>
  );
}
