'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Download, CheckCircle, Sparkles, Info, Terminal, Settings, Rocket, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassInstallationSetupProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassInstallationSetup({ onOpenWebPlayground }: SassInstallationSetupProps) {
  const [selectedMethod, setSelectedMethod] = useState('npm');

  const npmExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NPM Installation Guide</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #3b82f6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #60a5fa; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    .step {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #3b82f6;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .step {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .step-number {
      display: inline-block;
      background: #3b82f6;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 15px;
    }
    
    .step-title {
      font-weight: 700;
      color: #1e40af;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .step-title { color: #bfdbfe; }
    }
    
    .step-desc {
      color: #1e3a8a;
      margin-bottom: 15px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .step-desc { color: #dbeafe; }
    }
    
    .terminal {
      background: #0f172a;
      color: #10b981;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 0.95rem;
      overflow-x: auto;
      border: 2px solid #3b82f6;
    }
    
    .terminal-header {
      display: flex;
      gap: 8px;
      margin-bottom: 15px;
    }
    
    .terminal-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .dot-red { background: #ef4444; }
    .dot-yellow { background: #eab308; }
    .dot-green { background: #10b981; }
    
    .command { color: #10b981; }
    .output { color: #60a5fa; margin-left: 20px; }
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24;
      }
    }
    
    .info-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #fde68a; }
    }
    
    .info-text {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 NPM Installation</h1>
    <p class="subtitle">Install Sass using Node Package Manager</p>
    
    <div class="step">
      <div class="step-number">1</div>
      <div class="step-title">Install Node.js</div>
      <div class="step-desc">First, ensure you have Node.js installed on your system.</div>
      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dot dot-red"></div>
          <div class="terminal-dot dot-yellow"></div>
          <div class="terminal-dot dot-green"></div>
        </div>
        <div class="command">$ node --version</div>
        <div class="output">v18.17.0</div>
      </div>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <div class="step-title">Install Sass Package</div>
      <div class="step-desc">Install Sass globally or in your project.</div>
      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dot dot-red"></div>
          <div class="terminal-dot dot-yellow"></div>
          <div class="terminal-dot dot-green"></div>
        </div>
        <div class="command">$ npm install -g sass</div>
        <div class="output">+ sass@1.69.5</div>
        <div class="output">added 1 package</div>
      </div>
    </div>
    
    <div class="step">
      <div class="step-number">3</div>
      <div class="step-title">Compile Sass to CSS</div>
      <div class="step-desc">Run the Sass compiler on your .scss files.</div>
      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dot dot-red"></div>
          <div class="terminal-dot dot-yellow"></div>
          <div class="terminal-dot dot-green"></div>
        </div>
        <div class="command">$ sass input.scss output.css</div>
        <div class="output">Compiled input.scss to output.css.</div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">✨ Watch Mode</div>
      <p class="info-text">
        Use <strong>--watch</strong> flag to automatically recompile when files change:<br>
        <code style="background: #0f172a; color: #10b981; padding: 5px 10px; border-radius: 4px; margin-top: 10px; display: inline-block;">
          sass --watch input.scss:output.css
        </code>
      </p>
    </div>
  </div>
</body>
</html>`;

  const vscodeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>VS Code Setup</title>
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
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 10px;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    .extension-card {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #8b5cf6;
      margin-bottom: 20px;
      transition: all 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .extension-card {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    .extension-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
    }
    
    .ext-icon {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 15px;
    }
    
    .ext-name {
      font-weight: 700;
      color: #6b21a8;
      font-size: 1.3rem;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .ext-name { color: #ddd6fe; }
    }
    
    .ext-desc {
      color: #7c3aed;
      text-align: center;
      margin-bottom: 15px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .ext-desc { color: #ede9fe; }
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
    }
    
    .feature-list li {
      padding: 8px 0;
      color: #6b21a8;
      font-size: 0.95rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-list li { color: #ddd6fe; }
    }
    
    .feature-list li:before {
      content: "✓ ";
      color: #10b981;
      font-weight: 700;
      margin-right: 8px;
    }
    
    .install-btn {
      background: #8b5cf6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      margin-top: 15px;
      font-size: 1rem;
      transition: background 0.3s ease;
    }
    
    .install-btn:hover {
      background: #7c3aed;
    }
    
    .note {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: #78350f;
      border-left: 4px solid #f59e0b;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        color: #fef3c7;
        border-left-color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚙️ VS Code Setup</h1>
    <p class="subtitle">Essential extensions for Sass development</p>
    
    <div class="extension-card">
      <div class="ext-icon">🎨</div>
      <div class="ext-name">Live Sass Compiler</div>
      <div class="ext-desc">Auto-compile Sass/SCSS to CSS with live browser reload</div>
      <ul class="feature-list">
        <li>Real-time compilation</li>
        <li>Auto-prefixer support</li>
        <li>Source maps generation</li>
        <li>Custom output formats</li>
      </ul>
      <button class="install-btn">Install Extension</button>
    </div>
    
    <div class="extension-card">
      <div class="ext-icon">✨</div>
      <div class="ext-name">Sass (.sass only)</div>
      <div class="ext-desc">Indented Sass syntax highlighting</div>
      <ul class="feature-list">
        <li>Syntax highlighting for .sass files</li>
        <li>IntelliSense support</li>
        <li>Code snippets</li>
      </ul>
      <button class="install-btn">Install Extension</button>
    </div>
    
    <div class="note">
      💡 SCSS syntax highlighting is built into VS Code! You only need extensions for .sass files or compilation.
    </div>
  </div>
</body>
</html>`;

  const projectExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Project Setup</title>
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
      max-width: 1000px;
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
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #6ee7b7; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    .structure {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 30px;
      border-radius: 12px;
      border: 3px solid #10b981;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .structure {
        background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);
        border-color: #6ee7b7;
      }
    }
    
    .folder-tree {
      background: #0f172a;
      padding: 25px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 0.95rem;
      color: #e2e8f0;
      line-height: 1.8;
      overflow-x: auto;
    }
    
    .folder { color: #60a5fa; }
    .file-sass { color: #ec4899; }
    .file-css { color: #10b981; }
    .file-json { color: #fbbf24; }
    .indent { margin-left: 20px; }
    
    .config-section {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #3b82f6;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .config-section {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .config-title {
      font-weight: 700;
      color: #1e40af;
      font-size: 1.2rem;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .config-title { color: #bfdbfe; }
    }
    
    .code-block {
      background: #0f172a;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      color: #e2e8f0;
      overflow-x: auto;
      line-height: 1.6;
    }
    
    .json-key { color: #60a5fa; }
    .json-value { color: #10b981; }
    .json-string { color: #fbbf24; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📁 Project Structure</h1>
    <p class="subtitle">Organize your Sass files professionally</p>
    
    <div class="structure">
      <h3 style="color: #059669; margin-bottom: 20px; font-size: 1.3rem; text-align: center;">
        Recommended Folder Structure
      </h3>
      <div class="folder-tree">
<span class="folder">my-project/</span>
<span class="indent"><span class="folder">├── scss/</span></span>
<span class="indent"><span class="indent"><span class="folder">│   ├── abstracts/</span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   ├── _variables.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   ├── _mixins.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   └── _functions.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="folder">│   ├── base/</span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   ├── _reset.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   └── _typography.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="folder">│   ├── components/</span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   ├── _buttons.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   └── _cards.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="folder">│   ├── layout/</span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   ├── _header.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="indent"><span class="file-sass">│   │   └── _footer.scss</span></span></span></span>
<span class="indent"><span class="indent"><span class="file-sass">│   └── main.scss</span></span></span>
<span class="indent"><span class="folder">├── css/</span></span>
<span class="indent"><span class="indent"><span class="file-css">│   └── main.css</span> (generated)</span></span>
<span class="indent"><span class="file-json">└── package.json</span></span>
      </div>
    </div>
    
    <div class="config-section">
      <div class="config-title">📋 package.json Scripts</div>
      <div class="code-block">
<span class="json-key">"scripts"</span>: {
  <span class="json-key">"sass"</span>: <span class="json-string">"sass scss/main.scss css/main.css"</span>,
  <span class="json-key">"sass:watch"</span>: <span class="json-string">"sass --watch scss:css"</span>,
  <span class="json-key">"sass:build"</span>: <span class="json-string">"sass scss/main.scss css/main.css --style compressed"</span>
}
      </div>
    </div>
    
    <div class="config-section">
      <div class="config-title">🔧 main.scss (Entry Point)</div>
      <div class="code-block">
<span style="color: #64748b;">// Abstracts</span>
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'abstracts/variables'</span>;
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'abstracts/mixins'</span>;

<span style="color: #64748b;">// Base</span>
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'base/reset'</span>;
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'base/typography'</span>;

<span style="color: #64748b;">// Components</span>
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'components/buttons'</span>;
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'components/cards'</span>;

<span style="color: #64748b;">// Layout</span>
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'layout/header'</span>;
<span style="color: #c4b5fd;">@use</span> <span style="color: #10b981;">'layout/footer'</span>;
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Download}
        category="CSS · Preprocessors"
        title="Installation & Setup"
        description="Get started with Sass: installation methods, VS Code setup, and project configuration"
        colorTheme="blue"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative overflow-hidden">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Rocket className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Getting Started with Sass
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🚀 Multiple ways to install and use Sass in your projects!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Terminal className="w-5 h-5 animate-pulse" />
                  📦 Installation Methods
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Download className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">NPM (Node Package Manager)</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Most popular method for web projects</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200/50">
                    <Settings className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-cyan-700 dark:text-cyan-300 text-sm">VS Code Extension</div>
                      <div className="text-xs text-cyan-600 dark:text-cyan-400">Live compilation with one click</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200/50">
                    <Code className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Standalone</div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400">Direct download from sass-lang.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Requirements */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ✅ What You Need
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <div className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">For NPM Method</div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      • Node.js (v14+)<br />
                      • NPM or Yarn<br />
                      • Terminal access
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm mb-1">For VS Code Method</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      • VS Code editor<br />
                      • Live Sass Compiler ext.<br />
                      • No Node.js required!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">⚡</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Quick Start</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      5 minutes setup
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Free & Open Source
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Cross-platform
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use NPM for professional projects, VS Code extension for quick prototyping!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* INSTALLATION EXAMPLES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Installation Guides
          </CardTitle>
          <CardDescription>
            Step-by-step setup for different methods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6 flex-wrap">
            <button
              onClick={() => setSelectedMethod('npm')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMethod === 'npm'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              NPM Method
            </button>
            <button
              onClick={() => setSelectedMethod('vscode')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMethod === 'vscode'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              VS Code Setup
            </button>
            <button
              onClick={() => setSelectedMethod('project')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMethod === 'project'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Project Structure
            </button>
          </div>

          {selectedMethod === 'npm' && (
            <FrontendCodePreview
              html={npmExample}
              title="NPM Installation Guide"
              colorTheme="blue"
              styleLanguage="scss"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedMethod === 'vscode' && (
            <FrontendCodePreview
              html={vscodeExample}
              title="VS Code Extensions"
              colorTheme="purple"
              styleLanguage="scss"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedMethod === 'project' && (
            <FrontendCodePreview
              html={projectExample}
              title="Professional Project Structure"
              colorTheme="green"
              styleLanguage="scss"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* COMMON COMMANDS */}
      <Card>
        <CardHeader>
          <CardTitle>Common Sass Commands</CardTitle>
          <CardDescription>
            Essential CLI commands you'll use frequently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">sass input.scss output.css</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Compile a single Sass file to CSS</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">sass --watch input.scss:output.css</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Watch a file and recompile on changes</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">sass --watch scss:css</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Watch entire folders</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">sass input.scss output.css --style compressed</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Compile with minified output for production</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Setup Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use npm for projects:</strong> Better for team collaboration and version control</li>
            <li><strong>Watch mode during development:</strong> Auto-compile changes with --watch flag</li>
            <li><strong>Organize with partials:</strong> Split code into _partial.scss files</li>
            <li><strong>Use main.scss as entry:</strong> Import all partials in one main file</li>
            <li><strong>Add .gitignore:</strong> Ignore node_modules and compiled CSS files</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* INFO */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Dart Sass vs Node Sass</AlertTitle>
        <AlertDescription>
          <strong>Always use Dart Sass (the package called "sass")!</strong> It's the primary implementation, 
          actively maintained, and supports all modern Sass features. Node Sass is deprecated and no longer 
          receives updates. When you install "sass" via npm, you're getting Dart Sass compiled to JavaScript.
        </AlertDescription>
      </Alert>
    </div>
  );
}
