'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Paintbrush, Palette, FileCode, Layers, CheckCircle, AlertTriangle, Info, Sparkles, Code, Eye } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssIntroductionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssIntroduction({ onOpenWebPlayground }: CssIntroductionProps) {
  
  const whatIsCssExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>What is CSS?</title>
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
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
    }
    
    .container {
      max-width: 900px;
      width: 100%;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .box {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    .label {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 15px;
    }
    
    .without {
      background: #fee2e2;
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .without {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .with {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .with {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #1f2937;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #e2e8f0;
      }
    }
    
    p {
      color: #6b7280;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: #94a3b8;
      }
    }
    
    .styled-box h1 {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .styled-box p {
      color: #3b82f6;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .styled-box p {
        color: #60a5fa;
      }
    }
    
    .styled-box button {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      margin-top: 15px;
    }
    
    .styled-box button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    
    @media (max-width: 768px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="comparison">
      <div class="box">
        <span class="label without">❌ Without CSS</span>
        <h1>Plain HTML</h1>
        <p>This is just boring, unstyled text. No colors, no spacing, no design.</p>
        <button>Ugly Button</button>
      </div>
      
      <div class="box styled-box">
        <span class="label with">✅ With CSS Magic</span>
        <h1>Beautiful Design!</h1>
        <p>CSS transforms HTML into stunning visual experiences with colors, layouts, and animations!</p>
        <button>Pretty Button</button>
      </div>
    </div>
  </div>
</body>
</html>`;

  const inlineCssExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inline CSS</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
      }
    }
    
    .container {
      max-width: 700px;
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
      color: #06b6d4;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .example-box {
      background: #cffafe;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #164e63;
        border-left-color: #22d3ee;
      }
    }
    
    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      overflow-x: auto;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #0f172a;
      }
    }
    
    .warning {
      background: #fef3c7;
      border: 2px solid #fbbf24;
      padding: 15px;
      border-radius: 8px;
      color: #78350f;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning {
        background: #78350f;
        border-color: #fcd34d;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Method 1: Inline CSS</h1>
    <p class="subtitle">Styles applied directly to HTML elements</p>
    
    <div class="example-box">
      <h3 style="color: #06b6d4; margin-bottom: 10px;">This heading has inline styles!</h3>
      <p style="color: #0891b2; font-size: 18px; font-weight: 600;">
        Inline CSS uses the <strong>style</strong> attribute directly on HTML elements.
      </p>
    </div>
    
    <div class="code">
&lt;h3 style="color: #06b6d4;"&gt;Styled Heading&lt;/h3&gt;
&lt;p style="color: #0891b2; font-size: 18px;"&gt;
  Styled paragraph
&lt;/p&gt;
    </div>
    
    <div class="warning">
      <strong>⚠️ Note:</strong> Inline CSS is quick but not recommended for large projects. 
      It's hard to maintain and can't be reused!
    </div>
  </div>
</body>
</html>`;

  const internalCssExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal CSS</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .container {
      max-width: 700px;
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
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .card {
      background: #f5f3ff;
      padding: 25px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    .card h2 {
      color: #7c3aed;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card h2 {
        color: #c4b5fd;
      }
    }
    
    .card p {
      color: #4b5563;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .card p {
        color: #cbd5e1;
      }
    }
    
    .code-block {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      overflow-x: auto;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-block {
        background: #0f172a;
      }
    }
    
    .highlight {
      color: #a78bfa;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Method 2: Internal CSS</h1>
    <p class="subtitle">Styles defined in the &lt;style&gt; tag within &lt;head&gt;</p>
    
    <div class="card">
      <h2>All These Styles Are Internal!</h2>
      <p>
        This entire page uses <span class="highlight">internal CSS</span> defined 
        in the &lt;style&gt; tag. Notice how we can style multiple elements with 
        reusable classes like <code>.card</code> and <code>.container</code>.
      </p>
    </div>
    
    <div class="code-block">
&lt;head&gt;
  &lt;style&gt;
    .card {
      background: #f5f3ff;
      padding: 25px;
      border-radius: 12px;
    }
  &lt;/style&gt;
&lt;/head&gt;
    </div>
    
    <div class="card">
      <h2>✅ Benefits</h2>
      <p>
        • Perfect for single-page styles<br>
        • Keeps styles in one place<br>
        • Can reuse classes across elements<br>
        • Better than inline CSS for maintenance
      </p>
    </div>
  </div>
</body>
</html>`;

  const externalCssExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External CSS</title>
  <style>
    /* Simulating external CSS with @import or <link> tag */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 800px;
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
      color: #10b981;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .file-structure {
      background: #d1fae5;
      padding: 25px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .file-structure {
        background: #064e3b;
        border-left-color: #34d399;
      }
    }
    
    .file {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      font-family: monospace;
      color: #047857;
      border: 2px solid #6ee7b7;
    }
    
    @media (prefers-color-scheme: dark) {
      .file {
        background: #1e293b;
        color: #6ee7b7;
        border-color: #059669;
      }
    }
    
    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      overflow-x: auto;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #0f172a;
      }
    }
    
    .benefits {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 25px 0;
    }
    
    .benefit-card {
      background: #ecfdf5;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-card {
        background: #064e3b;
        color: #a7f3d0;
      }
    }
    
    .benefit-card h3 {
      margin-bottom: 10px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌟 Method 3: External CSS (Recommended!)</h1>
    <p class="subtitle">Separate CSS file linked to HTML</p>
    
    <div class="file-structure">
      <h3 style="color: #059669; margin-bottom: 15px;">📁 Your Project Structure</h3>
      <div class="file">📄 index.html</div>
      <div class="file">🎨 styles.css</div>
      <div class="file">📄 about.html</div>
      <div class="file">📄 contact.html</div>
    </div>
    
    <h3 style="color: #059669; margin: 20px 0 10px;">In your HTML file:</h3>
    <div class="code">
&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
    </div>
    
    <h3 style="color: #059669; margin: 20px 0 10px;">In your styles.css file:</h3>
    <div class="code">
/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f9ff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
    </div>
    
    <h3 style="color: #059669; margin: 30px 0 15px; text-align: center;">✨ Why External CSS is Best</h3>
    <div class="benefits">
      <div class="benefit-card">
        <h3>♻️ Reusable</h3>
        <p>Use same CSS across multiple pages</p>
      </div>
      <div class="benefit-card">
        <h3>🎯 Organized</h3>
        <p>Keep HTML and CSS separate</p>
      </div>
      <div class="benefit-card">
        <h3>🚀 Fast</h3>
        <p>Browser caches CSS file</p>
      </div>
      <div class="benefit-card">
        <h3>🔧 Maintainable</h3>
        <p>Easy to update site-wide styles</p>
      </div>
    </div>
  </div>
</body>
</html>`;

  const cssSyntaxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Syntax</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
      }
    }
    
    .container {
      max-width: 800px;
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
      color: #f97316;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .syntax-diagram {
      background: #fff7ed;
      padding: 30px;
      border-radius: 12px;
      margin: 25px 0;
      border: 3px solid #f97316;
    }
    
    @media (prefers-color-scheme: dark) {
      .syntax-diagram {
        background: #7c2d12;
        border-color: #fb923c;
      }
    }
    
    .code-large {
      font-family: 'Courier New', monospace;
      font-size: 20px;
      line-height: 2;
      margin: 20px 0;
    }
    
    .selector {
      color: #2563eb;
      font-weight: 700;
    }
    
    .property {
      color: #059669;
      font-weight: 700;
      margin-left: 20px;
    }
    
    .value {
      color: #dc2626;
      font-weight: 700;
    }
    
    .label {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 10px;
    }
    
    .label-selector {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-selector {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .label-property {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-property {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .label-value {
      background: #fee2e2;
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-value {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .examples {
      display: grid;
      gap: 15px;
      margin: 25px 0;
    }
    
    .example-box {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #f97316;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #334155;
        border-left-color: #fb923c;
      }
    }
    
    .example-box code {
      display: block;
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      margin: 10px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box code {
        background: #0f172a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📖 CSS Syntax Structure</h1>
    <p class="subtitle">Understanding how to write CSS rules</p>
    
    <div class="syntax-diagram">
      <h2 style="color: #f97316; margin-bottom: 20px; text-align: center;">Basic CSS Rule Anatomy</h2>
      <div class="code-large">
        <span class="selector">selector</span>
        <span class="label label-selector">What to style</span>
        {<br>
        <span class="property">property</span>: 
        <span class="value">value</span>;
        <span class="label label-property">How to style</span>
        <span class="label label-value">Style value</span><br>
        }
      </div>
    </div>
    
    <h3 style="color: #f97316; margin: 30px 0 15px;">Real Examples:</h3>
    
    <div class="examples">
      <div class="example-box">
        <h4 style="color: #ea580c; margin-bottom: 10px;">Example 1: Styling a Heading</h4>
        <code>h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}</code>
        <p style="margin-top: 10px; color: #64748b;">Makes all &lt;h1&gt; headings blue, 32px, and centered</p>
      </div>
      
      <div class="example-box">
        <h4 style="color: #ea580c; margin-bottom: 10px;">Example 2: Styling with a Class</h4>
        <code>.button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}</code>
        <p style="margin-top: 10px; color: #64748b;">Styles any element with class="button"</p>
      </div>
      
      <div class="example-box">
        <h4 style="color: #ea580c; margin-bottom: 10px;">Example 3: Multiple Properties</h4>
        <code>p {
  color: #1f2937;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}</code>
        <p style="margin-top: 10px; color: #64748b;">Styles all paragraphs with multiple properties</p>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #fbbf24;">
      <p style="color: #78350f; font-weight: 600;">
        💡 <strong>Remember:</strong> Every CSS rule has a selector (what to style) 
        and declarations (how to style it). Each declaration has a property and a value!
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Paintbrush}
        category="CSS · Fundamentals"
        title="Introduction to CSS"
        description="Learn what CSS is, how it works, and how to add beautiful styling to your web pages"
        colorTheme="blue"
      />

      {/* What is CSS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is CSS?
          </CardTitle>
          <CardDescription>
            Understanding the language that styles the web
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">CSS (Cascading Style Sheets)</strong> is the language used to 
            describe how HTML elements should be displayed. While HTML provides the structure and content of a 
            web page, CSS makes it beautiful by controlling colors, layouts, fonts, spacing, and animations.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Palette className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Colors & Backgrounds</h4>
              <p className="text-sm text-muted-foreground">
                Control text colors, background colors, gradients, and images
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Layout & Positioning</h4>
              <p className="text-sm text-muted-foreground">
                Arrange elements with Flexbox, Grid, and positioning
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Typography</h4>
              <p className="text-sm text-muted-foreground">
                Style fonts, sizes, weights, spacing, and text effects
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Visual Effects</h4>
              <p className="text-sm text-muted-foreground">
                Add shadows, borders, rounded corners, and animations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            The Power of CSS
          </CardTitle>
          <CardDescription>
            See the dramatic difference CSS makes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={whatIsCssExample}
            title="HTML Without CSS vs With CSS"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🎨 What CSS Can Do:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Transform appearance</strong> - Plain text becomes beautiful design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Create layouts</strong> - Position elements exactly where you want</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Add interactivity</strong> - Hover effects, animations, and transitions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Make it responsive</strong> - Adapt to any screen size</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Three Ways to Add CSS */}
      <Card>
        <CardHeader>
          <CardTitle>Three Ways to Add CSS</CardTitle>
          <CardDescription>
            Understanding different methods of applying styles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">1️⃣ Inline CSS</h4>
              <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-2">
                Styles applied directly to HTML elements
              </p>
              <code className="text-xs bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">
                style="color: blue;"
              </code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">2️⃣ Internal CSS</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                &lt;style&gt; tag in the &lt;head&gt; section
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                &lt;style&gt;...&lt;/style&gt;
              </code>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">3️⃣ External CSS</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                Separate .css file (Recommended!)
              </p>
              <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                &lt;link rel="stylesheet"&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Method 1: Inline CSS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Code className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            Method 1: Inline CSS
          </CardTitle>
          <CardDescription>
            Applying styles directly to HTML elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={inlineCssExample}
            title="Inline CSS Example"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>When to Use Inline CSS</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>✅ Quick testing or one-off styles</li>
                <li>✅ Email templates (limited CSS support)</li>
                <li>❌ NOT recommended for regular web development</li>
                <li>❌ Hard to maintain and reuse</li>
                <li>❌ Mixes content with presentation</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 2: Internal CSS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <FileCode className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Method 2: Internal CSS
          </CardTitle>
          <CardDescription>
            Styles defined in the &lt;style&gt; tag within &lt;head&gt;
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={internalCssExample}
            title="Internal CSS Example"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">When to Use Internal CSS:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Single-page websites or unique page styles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>When you want to keep everything in one HTML file</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Better than inline, but not as good as external</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Method 3: External CSS (Recommended) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Method 3: External CSS (Best Practice!)
          </CardTitle>
          <CardDescription>
            Separate .css file linked to your HTML
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={externalCssExample}
            title="External CSS - The Professional Way"
            colorTheme="green"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why External CSS is Best</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Reusable</strong> - One CSS file styles multiple pages</li>
                <li><strong>Maintainable</strong> - Change one file, update entire site</li>
                <li><strong>Performance</strong> - Browser caches the CSS file</li>
                <li><strong>Organized</strong> - Separates content (HTML) from presentation (CSS)</li>
                <li><strong>Professional</strong> - Industry standard for web development</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* CSS Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Code className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            CSS Syntax - How to Write CSS
          </CardTitle>
          <CardDescription>
            Understanding the structure of CSS rules
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cssSyntaxExample}
            title="CSS Syntax Explained"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <strong className="text-sm">Selector</strong>
              </div>
              <p className="text-sm text-muted-foreground">
                The HTML element(s) you want to style (e.g., <code>h1</code>, <code>.button</code>, <code>#header</code>)
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <strong className="text-sm">Property</strong>
              </div>
              <p className="text-sm text-muted-foreground">
                The aspect you want to change (e.g., <code>color</code>, <code>font-size</code>, <code>margin</code>)
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <strong className="text-sm">Value</strong>
              </div>
              <p className="text-sm text-muted-foreground">
                The setting for the property (e.g., <code>blue</code>, <code>16px</code>, <code>center</code>)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>CSS Best Practices for Beginners</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use external CSS</strong> - Keep your CSS in separate .css files</li>
            <li><strong>Be consistent</strong> - Use consistent naming conventions (lowercase, hyphens)</li>
            <li><strong>Comment your code</strong> - Add comments to explain complex styles</li>
            <li><strong>Organize logically</strong> - Group related styles together</li>
            <li><strong>Use classes over IDs</strong> - Classes are reusable, IDs are unique</li>
            <li><strong>Keep it simple</strong> - Start with basic styles, add complexity gradually</li>
            <li><strong>Test in browsers</strong> - Check your styles in different browsers</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Universal Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          CSS is supported by all modern browsers (Chrome, Firefox, Safari, Edge). Basic CSS properties 
          like colors, fonts, and layout work everywhere. Modern CSS features like Flexbox, Grid, and 
          CSS Variables are now widely supported. Always test your styles to ensure compatibility!
        </AlertDescription>
      </Alert>
    </div>
  );
}
