'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Trophy, Scale, CheckCircle, AlertTriangle, Info, Sparkles, Target } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssSpecificityCascadeProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSpecificityCascade({ onOpenWebPlayground }: CssSpecificityCascadeProps) {
  
  const specificityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Specificity</title>
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
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    /* SPECIFICITY BATTLE! */
    
    /* Element selector (Specificity: 0-0-1) */
    p {
      color: blue;
      font-size: 16px;
    }
    
    /* Class selector (Specificity: 0-1-0) - WINS over element */
    .text {
      color: green;
    }
    
    /* ID selector (Specificity: 1-0-0) - WINS over class */
    #special {
      color: red;
    }
    
    /* More specific class (Specificity: 0-1-1) */
    p.highlighted {
      background: yellow;
      padding: 10px;
      border-radius: 4px;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      p.highlighted {
        background: #78350f;
        color: #fef3c7;
      }
    }
    
    .demo-box {
      background: #f5f3ff;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    .score-card {
      display: inline-block;
      background: #ddd6fe;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      margin: 5px;
      color: #5b21b6;
    }
    
    @media (prefers-color-scheme: dark) {
      .score-card {
        background: #5b21b6;
        color: #e9d5ff;
      }
    }
    
    .winner {
      background: #fef3c7;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .winner {
        background: #78350f;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏆 CSS Specificity Battle</h1>
    
    <div class="demo-box">
      <h2 style="color: #7c3aed; margin-bottom: 15px;">Which Style Wins?</h2>
      
      <p>This paragraph is blue (element selector)</p>
      <p class="text">This paragraph is green (class selector beats element!)</p>
      <p id="special" class="text">This paragraph is red (ID beats class!)</p>
      <p class="highlighted">This paragraph has background (class + element combo)</p>
    </div>
    
    <div class="demo-box">
      <h2 style="color: #7c3aed; margin-bottom: 15px;">Specificity Scores</h2>
      <p style="color: #4b5563; line-height: 2;">
        <span class="score-card">Element: 0-0-1</span><br>
        <span class="score-card">Class: 0-1-0</span><br>
        <span class="score-card">ID: 1-0-0</span><br>
        <span class="score-card winner">🏅 ID Wins!</span>
      </p>
    </div>
    
    <p style="color: #6b7280; margin-top: 20px;">
      <strong>Remember:</strong> The more specific selector wins! ID > Class > Element
    </p>
  </div>
</body>
</html>`;

  const cascadeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Cascade</title>
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
      color: #06b6d4;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    /* FIRST declaration - will be overridden */
    .box {
      background: red;
      color: white;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    /* SECOND declaration - WINS because it comes later! */
    .box {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
    }
    
    .cascade-step {
      background: #cffafe;
      padding: 20px;
      border-radius: 12px;
      margin: 15px 0;
      border-left: 4px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .cascade-step {
        background: #164e63;
        border-left-color: #22d3ee;
      }
    }
    
    .cascade-step h3 {
      color: #0891b2;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .cascade-step h3 {
        color: #67e8f9;
      }
    }
    
    .cascade-step p {
      color: #0c4a6e;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .cascade-step p {
        color: #bae6fd;
      }
    }
    
    .order-demo {
      background: #f0f9ff;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .order-demo {
        background: #082f49;
        color: #e0f2fe;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌊 The CSS Cascade</h1>
    
    <p style="color: #6b7280; text-align: center; margin-bottom: 30px;">
      When multiple rules target the same element, the cascade decides which wins!
    </p>
    
    <div class="box">
      This box was going to be red, but the second .box rule wins because it comes later!
    </div>
    
    <div class="cascade-step">
      <h3>📚 Step 1: Origin & Importance</h3>
      <p>Browser default → Your CSS → User styles → !important declarations</p>
    </div>
    
    <div class="cascade-step">
      <h3>🎯 Step 2: Specificity</h3>
      <p>More specific selectors win (ID > Class > Element)</p>
    </div>
    
    <div class="cascade-step">
      <h3>📍 Step 3: Source Order</h3>
      <p>If specificity is equal, the rule that comes LAST wins</p>
    </div>
    
    <div class="order-demo">
/* First rule */<br>
.box { background: red; }<br>
<br>
/* Second rule - WINS! */<br>
.box { background: blue; }
    </div>
    
    <p style="color: #6b7280; margin-top: 20px;">
      <strong>Remember:</strong> Last rule wins when specificity is equal!
    </p>
  </div>
</body>
</html>`;

  const inheritanceExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Inheritance</title>
  <style>
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
    
    /* Parent styles - these will be inherited by children */
    .parent {
      color: #059669;
      font-size: 18px;
      line-height: 1.8;
      background: #d1fae5;
      padding: 30px;
      border-radius: 12px;
      border-left: 4px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .parent {
        background: #064e3b;
        color: #6ee7b7;
        border-left-color: #34d399;
      }
    }
    
    .child {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
      border: 2px solid #10b981;
      /* Inherits color and font-size from .parent! */
    }
    
    @media (prefers-color-scheme: dark) {
      .child {
        background: #1e293b;
        border-color: #34d399;
      }
    }
    
    .no-inherit {
      background: #fef3c7;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .no-inherit {
        background: #78350f;
        color: #fef3c7;
      }
    }
    
    .example-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }
    
    .prop-card {
      background: #ecfdf5;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .prop-card {
        background: #14532d;
        border-color: #34d399;
        color: #a7f3d0;
      }
    }
    
    .prop-card strong {
      display: block;
      color: #065f46;
      margin-bottom: 5px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .prop-card strong {
        color: #6ee7b7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🧬 CSS Inheritance</h1>
    
    <p style="color: #6b7280; text-align: center; margin-bottom: 30px;">
      Some CSS properties are inherited from parent to child elements
    </p>
    
    <div class="parent">
      <strong>Parent Element</strong>
      <p>I have color: green and font-size: 18px</p>
      
      <div class="child">
        <strong>Child Element</strong>
        <p>I inherited the color and font-size from my parent! I didn't need my own CSS.</p>
      </div>
    </div>
    
    <div class="no-inherit" style="margin-top: 30px;">
      <h3 style="color: #78350f; margin-bottom: 15px;">📝 What Properties Inherit?</h3>
      <div class="example-grid">
        <div class="prop-card">
          <strong>✅ Inherits</strong>
          <div style="font-size: 13px;">
            color<br>
            font-family<br>
            font-size<br>
            line-height
          </div>
        </div>
        <div class="prop-card">
          <strong>❌ Doesn't Inherit</strong>
          <div style="font-size: 13px;">
            background<br>
            border<br>
            padding<br>
            margin
          </div>
        </div>
      </div>
    </div>
    
    <p style="color: #6b7280; margin-top: 20px;">
      <strong>Pro Tip:</strong> Set font properties on body to apply them across your entire page!
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Fundamentals"
        title="Specificity & Cascade"
        description="Understand how CSS determines which styles to apply when rules conflict"
        colorTheme="blue"
      />

      {/* What is Specificity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What is CSS Specificity?
          </CardTitle>
          <CardDescription>
            The weight that determines which style wins
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Specificity</strong> is how browsers decide which CSS rule 
            to apply when multiple rules target the same element. Think of it as a point system - the selector 
            with the highest points wins!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <Trophy className="h-6 w-6 text-red-600 dark:text-red-400 mb-2" />
              <h4 className="font-semibold mb-2">ID Selectors</h4>
              <p className="text-sm text-muted-foreground">
                <code className="text-red-600 dark:text-red-400">#header</code><br/>
                Score: <strong>1-0-0</strong><br/>
                Highest specificity!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Class Selectors</h4>
              <p className="text-sm text-muted-foreground">
                <code className="text-blue-600 dark:text-blue-400">.button</code><br/>
                Score: <strong>0-1-0</strong><br/>
                Medium specificity
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <Target className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Element Selectors</h4>
              <p className="text-sm text-muted-foreground">
                <code className="text-green-600 dark:text-green-400">div</code><br/>
                Score: <strong>0-0-1</strong><br/>
                Lowest specificity
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specificity in Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Trophy className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Specificity in Action
          </CardTitle>
          <CardDescription>
            See which selectors win the specificity battle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={specificityExample}
            title="Specificity Examples"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🧮 Calculating Specificity:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><code>#header .nav a</code> = 1-1-1 (ID + Class + Element)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><code>.nav .menu .item</code> = 0-3-0 (Three classes)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><code>div p span</code> = 0-0-3 (Three elements)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* The Cascade */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            The Cascade
          </CardTitle>
          <CardDescription>
            How CSS resolves conflicts between rules
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cascadeExample}
            title="The Cascade Example"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Info className="h-4 w-4 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Cascade Order</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li><strong>Origin & Importance</strong> - !important declarations win</li>
                <li><strong>Specificity</strong> - More specific selectors win</li>
                <li><strong>Source Order</strong> - Later rules override earlier ones</li>
              </ol>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Inheritance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            CSS Inheritance
          </CardTitle>
          <CardDescription>
            How child elements inherit styles from parents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={inheritanceExample}
            title="Inheritance Example"
            colorTheme="green"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Specificity Quick Reference</CardTitle>
          <CardDescription>
            Remember these rules to master specificity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center justify-between mb-2">
                <strong className="text-sm">Inline Styles</strong>
                <code className="text-xs bg-red-100 dark:bg-red-900 px-2 py-1 rounded text-red-600 dark:text-red-400">1-0-0-0</code>
              </div>
              <p className="text-sm text-muted-foreground">
                <code>style="color: red;"</code> - Highest specificity (avoid using!)
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center justify-between mb-2">
                <strong className="text-sm">IDs</strong>
                <code className="text-xs bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded text-orange-600 dark:text-orange-400">0-1-0-0</code>
              </div>
              <p className="text-sm text-muted-foreground">
                <code>#header</code> - Very specific (use sparingly)
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center justify-between mb-2">
                <strong className="text-sm">Classes, Attributes, Pseudo-classes</strong>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-600 dark:text-blue-400">0-0-1-0</code>
              </div>
              <p className="text-sm text-muted-foreground">
                <code>.button</code>, <code>[type="text"]</code>, <code>:hover</code> - Most commonly used
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <div className="flex items-center justify-between mb-2">
                <strong className="text-sm">Elements & Pseudo-elements</strong>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-600 dark:text-green-400">0-0-0-1</code>
              </div>
              <p className="text-sm text-muted-foreground">
                <code>div</code>, <code>p</code>, <code>::before</code> - Lowest specificity
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Specificity Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Keep specificity low</strong> - Easier to override later</li>
            <li><strong>Avoid IDs for styling</strong> - Too specific, hard to override</li>
            <li><strong>Never use !important</strong> - Last resort only, creates maintainability issues</li>
            <li><strong>Use classes</strong> - Perfect balance of specificity and flexibility</li>
            <li><strong>Organize by specificity</strong> - General rules first, specific last</li>
            <li><strong>Leverage cascade</strong> - Order matters when specificity is equal</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Universal Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Specificity, cascade, and inheritance are fundamental CSS concepts supported by all browsers 
          since CSS1. They work consistently across all platforms and are essential for CSS mastery!
        </AlertDescription>
      </Alert>
    </div>
  );
}
