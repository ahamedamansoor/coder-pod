'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, Maximize2, CheckCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssBoxSizingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const contentBoxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>box-sizing: content-box</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
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
      color: #ef4444;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f87171;
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

    /* content-box (DEFAULT) */
    .content-box {
      box-sizing: content-box;
      width: 200px;
      padding: 20px;
      border: 5px solid #ef4444;
      background: #fee2e2;
      margin: 20px auto;
      text-align: center;
      color: #991b1b;
      font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
      .content-box {
        background: #7f1d1d;
        color: #fca5a5;
        border-color: #f87171;
      }
    }

    .calculation {
      background: #fef3c7;
      padding: 20px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #fbbf24;
    }

    @media (prefers-color-scheme: dark) {
      .calculation {
        background: #78350f;
        border-left-color: #fcd34d;
      }
    }

    .calculation h3 {
      color: #78350f;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      .calculation h3 {
        color: #fef3c7;
      }
    }

    .calculation p {
      color: #92400e;
      line-height: 1.8;
      font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
      .calculation p {
        color: #fde68a;
      }
    }

    .math {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      font-family: monospace;
      color: #78350f;
      font-size: 14px;
    }

    @media (prefers-color-scheme: dark) {
      .math {
        background: #1e293b;
        color: #fde68a;
      }
    }

    .warning {
      background: #fecaca;
      padding: 15px;
      border-radius: 8px;
      color: #7f1d1d;
      margin: 20px 0;
      border: 2px solid #ef4444;
    }

    @media (prefers-color-scheme: dark) {
      .warning {
        background: #450a0a;
        color: #fca5a5;
        border-color: #f87171;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 box-sizing: content-box</h1>
    <p class="subtitle">Default CSS box model (confusing!)</p>

    <div class="content-box">
      width: 200px
    </div>

    <div class="calculation">
      <h3>🧮 The Math Problem</h3>
      <p>You set <strong>width: 200px</strong>, but the actual width is larger!</p>

      <div class="math">
Total Width = 200px (content)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 20px (left padding)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 20px (right padding)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 5px (left border)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 5px (right border)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <strong>250px actual width!</strong>
      </div>

      <p style="margin-top: 15px;">Width applies to <strong>content only</strong>. Padding and border are added on top!</p>
    </div>

    <div class="warning">
      <strong>⚠️ Problem:</strong><br>
      This makes layout calculations difficult. If you have width: 25% for 4 columns, 
      adding padding breaks the layout because total width exceeds 100%!
    </div>
  </div>
</body>
</html>`;

  const borderBoxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>box-sizing: border-box</title>
  <style>
    * {
      margin: 0;
      padding: 0;
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

    /* border-box (BETTER!) */
    .border-box {
      box-sizing: border-box;
      width: 200px;
      padding: 20px;
      border: 5px solid #10b981;
      background: #d1fae5;
      margin: 20px auto;
      text-align: center;
      color: #065f46;
      font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
      .border-box {
        background: #064e3b;
        color: #6ee7b7;
        border-color: #34d399;
      }
    }

    .calculation {
      background: #d1fae5;
      padding: 20px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #10b981;
    }

    @media (prefers-color-scheme: dark) {
      .calculation {
        background: #064e3b;
        border-left-color: #34d399;
      }
    }

    .calculation h3 {
      color: #065f46;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      .calculation h3 {
        color: #6ee7b7;
      }
    }

    .calculation p {
      color: #047857;
      line-height: 1.8;
      font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
      .calculation p {
        color: #a7f3d0;
      }
    }

    .math {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      font-family: monospace;
      color: #065f46;
      font-size: 14px;
    }

    @media (prefers-color-scheme: dark) {
      .math {
        background: #1e293b;
        color: #a7f3d0;
      }
    }

    .success {
      background: #ecfdf5;
      padding: 15px;
      border-radius: 8px;
      color: #065f46;
      margin: 20px 0;
      border: 2px solid #10b981;
    }

    @media (prefers-color-scheme: dark) {
      .success {
        background: #14532d;
        color: #6ee7b7;
        border-color: #34d399;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ box-sizing: border-box</h1>
    <p class="subtitle">The better way (recommended!)</p>

    <div class="border-box">
      width: 200px
    </div>

    <div class="calculation">
      <h3>🎯 Much Simpler!</h3>
      <p>You set <strong>width: 200px</strong>, and the total width is exactly 200px!</p>

      <div class="math">
Total Width = <strong>200px</strong><br>
<br>
Content width shrinks to fit:<br>
200px - 20px (left padding)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 20px (right padding)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 5px (left border)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 5px (right border)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 150px content area
      </div>

      <p style="margin-top: 15px;">Padding and border are <strong>included</strong> in the width! Much more intuitive.</p>
    </div>

    <div class="success">
      <strong>✅ Solution:</strong><br>
      With border-box, width: 25% means exactly 25% of parent, even with padding and borders. 
      Layout calculations are simple and predictable!
    </div>
  </div>
</body>
</html>`;

  const comparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Sizing Comparison</title>
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
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
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
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }

    h1 {
      color: #3b82f6;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
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

    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 30px 0;
    }

    @media (max-width: 640px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }

    .example-box {
      background: #f0f9ff;
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #3b82f6;
    }

    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #0c4a6e;
        border-color: #60a5fa;
      }
    }

    .example-box h3 {
      color: #1e40af;
      margin-bottom: 15px;
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      .example-box h3 {
        color: #93c5fd;
      }
    }

    .demo-content-box {
      box-sizing: content-box;
      width: 150px;
      height: 80px;
      padding: 20px;
      border: 5px solid #ef4444;
      background: #fee2e2;
      margin: 15px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #991b1b;
    }

    @media (prefers-color-scheme: dark) {
      .demo-content-box {
        background: #7f1d1d;
        color: #fca5a5;
        border-color: #f87171;
      }
    }

    .demo-border-box {
      box-sizing: border-box;
      width: 150px;
      height: 80px;
      padding: 20px;
      border: 5px solid #10b981;
      background: #d1fae5;
      margin: 15px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #065f46;
    }

    @media (prefers-color-scheme: dark) {
      .demo-border-box {
        background: #064e3b;
        color: #6ee7b7;
        border-color: #34d399;
      }
    }

    .size-label {
      text-align: center;
      font-size: 13px;
      color: #6b7280;
      margin-top: 10px;
    }

    @media (prefers-color-scheme: dark) {
      .size-label {
        color: #94a3b8;
      }
    }

    .code-example {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      margin: 15px 0;
    }

    @media (prefers-color-scheme: dark) {
      .code-example {
        background: #0f172a;
      }
    }

    .global-rule {
      background: #fef3c7;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #fbbf24;
      margin: 30px 0;
    }

    @media (prefers-color-scheme: dark) {
      .global-rule {
        background: #78350f;
        border-left-color: #fcd34d;
      }
    }

    .global-rule h3 {
      color: #78350f;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      .global-rule h3 {
        color: #fef3c7;
      }
    }

    .global-rule p {
      color: #92400e;
      line-height: 1.6;
    }

    @media (prefers-color-scheme: dark) {
      .global-rule p {
        color: #fde68a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚖️ Box Sizing Comparison</h1>
    <p class="subtitle">Same width value, different actual sizes!</p>

    <div class="comparison">
      <div class="example-box">
        <h3>❌ content-box</h3>
        <div class="demo-content-box">
          150px
        </div>
        <p class="size-label">Actual: 200px wide<br>(150 + 20 padding + 20 padding + 5 border + 5 border)</p>

        <div class="code-example">
box-sizing: content-box;
width: 150px;
padding: 20px;
border: 5px solid;
        </div>
      </div>

      <div class="example-box">
        <h3>✅ border-box</h3>
        <div class="demo-border-box">
          150px
        </div>
        <p class="size-label">Actual: 150px wide<br>(padding & border included!)</p>

        <div class="code-example">
box-sizing: border-box;
width: 150px;
padding: 20px;
border: 5px solid;
        </div>
      </div>
    </div>

    <div class="global-rule">
      <h3>💡 The Universal Box Sizing Rule</h3>
      <p style="margin-bottom: 15px;">Add this to the top of every CSS file - it makes life easier!</p>
      <div class="code-example">
* {
  box-sizing: border-box;
}
      </div>
      <p style="margin-top: 15px;">This applies border-box to ALL elements, making layouts predictable and easy to calculate.</p>
    </div>
  </div>
</body>
</html>`;

const layoutProblemExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real Layout Problem</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #312e81 0%, #3730a3 100%);
      }
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
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }

    h1 {
      color: #6366f1;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #818cf8;
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

    .demo {
      margin: 30px 0;
    }

    .demo h2 {
      color: #4f46e5;
      margin-bottom: 20px;
      font-size: 1.2rem;
    }

    @media (prefers-color-scheme: dark) {
      .demo h2 {
        color: #a5b4fc;
      }
    }

    /* BROKEN: content-box layout */
    .broken-layout {
      background: #fee2e2;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      overflow-x: auto;
    }

    @media (prefers-color-scheme: dark) {
      .broken-layout {
        background: #7f1d1d;
      }
    }

    .broken-layout .column {
      box-sizing: content-box;
      width: 50%;
      padding: 20px;
      background: #fecaca;
      border: 3px solid #ef4444;
      float: left;
      color: #7f1d1d;
      min-height: 100px;
    }

    @media (prefers-color-scheme: dark) {
      .broken-layout .column {
        background: #991b1b;
        color: #fca5a5;
        border-color: #f87171;
      }
    }

    /* FIXED: border-box layout */
    .fixed-layout {
      background: #d1fae5;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      overflow: hidden;
    }

    @media (prefers-color-scheme: dark) {
      .fixed-layout {
        background: #064e3b;
      }
    }

    .fixed-layout .column {
      box-sizing: border-box;
      width: 50%;
      padding: 20px;
      background: #a7f3d0;
      border: 3px solid #10b981;
      float: left;
      color: #065f46;
      min-height: 100px;
    }

    @media (prefers-color-scheme: dark) {
      .fixed-layout .column {
        background: #065f46;
        color: #6ee7b7;
        border-color: #34d399;
      }
    }

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    .warning {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      color: #78350f;
      margin: 15px 0;
      border-left: 4px solid #fbbf24;
    }

    @media (prefers-color-scheme: dark) {
      .warning {
        background: #78350f;
        color: #fef3c7;
        border-color: #fcd34d;
      }
    }

    .success {
      background: #ecfdf5;
      padding: 15px;
      border-radius: 8px;
      color: #065f46;
      margin: 15px 0;
      border-left: 4px solid #10b981;
    }

    @media (prefers-color-scheme: dark) {
      .success {
        background: #14532d;
        color: #6ee7b7;
        border-color: #34d399;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚨 The Layout Problem</h1>
    <p class="subtitle">Why box-sizing matters in real layouts</p>

    <div class="demo">
      <h2>❌ BROKEN: content-box (default)</h2>
      <p style="color: #7f1d1d; margin-bottom: 15px;"><strong>Problem:</strong> Both columns are 50% width, but they DON'T fit side-by-side!</p>
      
      <div class="broken-layout clearfix">
        <div class="column">Column 1<br>width: 50%</div>
        <div class="column">Column 2<br>width: 50%</div>
      </div>

      <div class="warning">
        <strong>⚠️ Why it breaks:</strong><br>
        Each column: 50% (width) + 20px (left padding) + 20px (right padding) + 3px (left border) + 3px (right border) = More than 50%!<br>
        <strong>Total: Over 100%</strong> - columns wrap to next line.
      </div>
    </div>

    <div class="demo">
      <h2>✅ FIXED: border-box</h2>
      <p style="color: #065f46; margin-bottom: 15px;"><strong>Solution:</strong> Same 50% width, but padding and border are included!</p>
      
      <div class="fixed-layout clearfix">
        <div class="column">Column 1<br>width: 50%</div>
        <div class="column">Column 2<br>width: 50%</div>
      </div>

      <div class="success">
        <strong>✅ Why it works:</strong><br>
        Each column: 50% width INCLUDES padding and border<br>
        Content area shrinks to fit: 50% - 40px padding - 6px border = content width<br>
        <strong>Total: Exactly 100%</strong> - perfect layout!
      </div>
    </div>
  </div>
</body>
</html>`;

const interactiveExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Box Sizing</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #831843 0%, #9f1239 100%);
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
      color: #ec4899;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
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

    .demo-box {
      position: relative;
      margin: 30px auto;
      background: #fce7f3;
      border-radius: 8px;
      padding: 20px;
    }

    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #831843;
      }
    }

    .box-display {
      width: 200px;
      padding: 30px;
      border: 10px solid #ec4899;
      background: linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 100%);
      margin: 0 auto;
      text-align: center;
      font-weight: 600;
      color: #831843;
      position: relative;
    }

    @media (prefers-color-scheme: dark) {
      .box-display {
        background: linear-gradient(135deg, #9f1239 0%, #be185d 100%);
        color: #fce7f3;
        border-color: #f9a8d4;
      }
    }

    .measurement {
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: #be185d;
      background: white;
      padding: 3px 8px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      white-space: nowrap;
    }

    @media (prefers-color-scheme: dark) {
      .measurement {
        background: #0f172a;
        color: #f9a8d4;
      }
    }

    .top-measure { top: -15px; left: 50%; transform: translateX(-50%); }
    .right-measure { right: -85px; top: 50%; transform: translateY(-50%); }
    .padding-measure { top: 5px; left: 5px; }
    .border-measure { top: -25px; right: -85px; }

    .controls {
      text-align: center;
      margin: 30px 0;
      background: #fef3c7;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #fbbf24;
    }

    @media (prefers-color-scheme: dark) {
      .controls {
        background: #78350f;
        border-color: #fcd34d;
      }
    }

    .controls label {
      display: inline-block;
      margin: 10px 20px;
      font-weight: 600;
      color: #78350f;
      cursor: pointer;
    }

    @media (prefers-color-scheme: dark) {
      .controls label {
        color: #fef3c7;
      }
    }

    input[type="radio"] {
      margin-right: 8px;
      cursor: pointer;
    }

    .info {
      background: #dbeafe;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }

    @media (prefers-color-scheme: dark) {
      .info {
        background: #1e3a8a;
        border-color: #60a5fa;
      }
    }

    .info h3 {
      color: #1e40af;
      margin-bottom: 10px;
    }

    @media (prefers-color-scheme: dark) {
      .info h3 {
        color: #93c5fd;
      }
    }

    .info p {
      color: #1e40af;
      line-height: 1.6;
      font-size: 14px;
    }

    @media (prefers-color-scheme: dark) {
      .info p {
        color: #bfdbfe;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Interactive Box Sizing</h1>
    <p class="subtitle">See how measurements change</p>

    <div class="controls">
      <strong>Choose box-sizing:</strong><br><br>
      <label>
        <input type="radio" name="boxSizing" value="content-box" checked onchange="changeBoxSizing(this.value)">
        content-box (default)
      </label>
      <label>
        <input type="radio" name="boxSizing" value="border-box" onchange="changeBoxSizing(this.value)">
        border-box (better!)
      </label>
    </div>

    <div class="demo-box">
      <div class="box-display" id="box">
        <div class="measurement top-measure" id="widthDisplay">width: 200px</div>
        <div class="measurement right-measure" id="totalDisplay">Total: 280px</div>
        <div class="measurement padding-measure">padding: 30px</div>
        <div class="measurement border-measure">border: 10px</div>
        200px
      </div>
    </div>

    <div class="info" id="explanation">
      <h3>🧮 Current Calculation (content-box):</h3>
      <p>
        <strong>Total Width:</strong> 200px (width) + 30px (left pad) + 30px (right pad) + 10px (left border) + 10px (right border) = <strong>280px</strong><br><br>
        Content area gets the full 200px width.
      </p>
    </div>
  </div>

  <script>
    function changeBoxSizing(value) {
      const box = document.getElementById('box');
      const totalDisplay = document.getElementById('totalDisplay');
      const explanation = document.getElementById('explanation');
      
      box.style.boxSizing = value;
      
      if (value === 'content-box') {
        totalDisplay.textContent = 'Total: 280px';
        totalDisplay.style.background = '#fecaca';
        explanation.innerHTML = \`
          <h3>&#x1F9EE; Current Calculation (content-box):</h3>
          <p>
            <strong>Total Width:</strong> 200px (width) + 30px (left pad) + 30px (right pad) + 10px (left border) + 10px (right border) = <strong>280px</strong><br><br>
            Content area gets the full 200px width.<br>
            <strong style="color: #dc2626;">&#x26A0;&#xFE0F; Problem:</strong> Actual size is BIGGER than specified width!
          </p>
        \`;
      } else {
        totalDisplay.textContent = 'Total: 200px';
        totalDisplay.style.background = '#a7f3d0';
        explanation.innerHTML = \`
          <h3>&#x1F9EE; Current Calculation (border-box):</h3>
          <p>
            <strong>Total Width:</strong> Exactly 200px (includes everything!)<br><br>
            Content area: 200px - 60px (padding) - 20px (border) = <strong>120px</strong><br>
            <strong style="color: #059669;">&#x2705; Solution:</strong> Actual size matches specified width!
          </p>
        \`;
      }
    }
  </script>
</body>
</html>`;

export default function CssBoxSizing({ onOpenWebPlayground }: CssBoxSizingProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="CSS · Fundamentals"
        title="Box Sizing"
        description="Understand content-box vs border-box and make layout calculations easier"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is Box Sizing?
          </CardTitle>
          <CardDescription>
            How CSS calculates element dimensions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">box-sizing</code> property is one of the most important CSS properties 
            for layout design. It controls whether padding and borders are <strong className="text-foreground">included</strong> in 
            an element's width and height, or added on top of it.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h4 className="font-semibold text-red-900 dark:text-red-100">content-box (Default)</h4>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200">
                Width applies to <strong>content only</strong><br/>
                Padding & border are <strong>added on top</strong><br/>
                <span className="text-xs">❌ Makes calculations confusing</span>
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">border-box (Better!)</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Width <strong>includes everything</strong><br/>
                Padding & border are <strong>inside</strong><br/>
                <span className="text-xs">✅ Makes layouts predictable</span>
              </p>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>The Classic Problem</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Imagine you set <code className="px-2 py-1 bg-muted rounded">width: 200px</code> on an element. 
                You add <code className="px-2 py-1 bg-muted rounded">padding: 20px</code> to make it look better.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                <div className="p-2 bg-red-100 dark:bg-red-950 rounded">
                  <strong>content-box:</strong> 240px total<br/>
                  <span className="text-xs text-red-700 dark:text-red-300">😫 Not what you expected!</span>
                </div>
                <div className="p-2 bg-green-100 dark:bg-green-950 rounded">
                  <strong>border-box:</strong> 200px total<br/>
                  <span className="text-xs text-green-700 dark:text-green-300">😊 Exactly what you wanted!</span>
                </div>
              </div>
            </AlertDescription>
          </Alert>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Why This Matters</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              This is <strong>THE most common layout problem</strong> beginners face. Understanding box-sizing is essential 
              for building responsive websites. Every professional CSS developer uses <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900 rounded">border-box</code> for all elements!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* content-box (Default) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Box className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            content-box (Default - Confusing!)
          </CardTitle>
          <CardDescription>
            Width applies to content only
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={contentBoxExample}
            title="content-box Example"
            colorTheme="red"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Why content-box is Problematic</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Actual width = specified width + padding + border</li>
                <li>Makes percentage-based layouts break easily</li>
                <li>Hard to calculate exact sizes</li>
                <li>Not intuitive - width doesn't mean total width</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* border-box (Better!) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            border-box (Recommended!)
          </CardTitle>
          <CardDescription>
            Width includes padding and border
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={borderBoxExample}
            title="border-box Example"
            colorTheme="green"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why border-box is Better</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Actual width = specified width</strong> (includes everything!)</li>
                <li>Percentage layouts work perfectly</li>
                <li>Easy mental model - width means total width</li>
                <li>Industry standard for modern CSS</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Side-by-Side Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Side-by-Side Comparison
          </CardTitle>
          <CardDescription>
            See the difference visually
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={comparisonExample}
            title="content-box vs border-box"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Real Layout Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            Real Layout Problem
          </CardTitle>
          <CardDescription>
            See how box-sizing affects real-world layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={layoutProblemExample}
            title="Two-Column Layout: Broken vs Fixed"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Info className="h-4 w-4 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Why This Matters</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              This is a <strong>very common</strong> problem when building layouts. Without <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">border-box</code>, 
              percentage-based layouts break as soon as you add padding or borders. This is why every modern CSS framework includes the universal box-sizing rule!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Switch between box-sizing modes and see measurements change live
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interactiveExample}
            title="Interactive Box Sizing Calculator"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">💡 Try This:</h4>
            <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Click the radio buttons to switch between content-box and border-box</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Watch the "Total" measurement change (280px vs 200px)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Notice how border-box makes the actual size match your specified width</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Box Sizing Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always use border-box</strong> - Add universal rule at the top of CSS</li>
            <li><strong>Apply to all elements</strong> - Use <code>{'* { box-sizing: border-box; }'}</code></li>
            <li><strong>Set once, forget</strong> - No need to repeat on every element</li>
            <li><strong>Industry standard</strong> - Used by all modern CSS frameworks</li>
            <li><strong>Simplifies responsive design</strong> - Percentages work as expected</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Perfect Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          The box-sizing property is supported in all modern browsers including IE8+. border-box has been 
          widely supported since 2012 and is completely safe to use in production!
        </AlertDescription>
      </Alert>
    </div>
  );
}
