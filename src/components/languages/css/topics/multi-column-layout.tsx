'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Columns, Sparkles, FileText, Target, CheckCircle, Info, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface MultiColumnLayoutProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const columnBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Column Basics</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Georgia, serif;
      background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #b45309 0%, #92400e 100%); }
    }
    .container {
      max-width: 1100px;
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
      color: #f59e0b;
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #fbbf24; }
    }
    .demo-section {
      margin-bottom: 40px;
      padding: 30px;
      background: #fffbeb;
      border-radius: 12px;
      border: 3px solid #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .demo-section { background: #451a03; border-color: #d97706; }
    }
    .demo-title {
      color: #92400e;
      margin-bottom: 20px;
      text-align: center;
      font-size: 1.5rem;
    }
    @media (prefers-color-scheme: dark) {
      .demo-title { color: #fbbf24; }
    }
    .article {
      text-align: justify;
      line-height: 1.8;
      color: #1e293b;
    }
    @media (prefers-color-scheme: dark) {
      .article { color: #e2e8f0; }
    }
    .two-columns {
      column-count: 2;
      column-gap: 40px;
    }
    .three-columns {
      column-count: 3;
      column-gap: 30px;
    }
    .auto-columns {
      column-width: 250px;
      column-gap: 30px;
    }
    .article h2 {
      color: #f59e0b;
      margin: 20px 0 10px;
      break-after: avoid;
    }
    @media (prefers-color-scheme: dark) {
      .article h2 { color: #fbbf24; }
    }
    .code-label {
      margin-top: 15px;
      padding: 12px;
      background: #1e293b;
      color: #fbbf24;
      border-radius: 6px;
      font-family: monospace;
      font-size: 14px;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      .code-label { background: #020617; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📰 Multi-Column Layout</h1>
    
    <div class="demo-section">
      <h2 class="demo-title">Two Columns</h2>
      <div class="article two-columns">
        <p>
          The CSS Multi-column Layout Module extends the block layout mode to allow the easy 
          definition of multiple columns of text. People have trouble reading text if lines are 
          too long; if it takes too long for the eyes to move from the end of one line to the 
          beginning of the next, they lose track of which line they were on.
        </p>
        <p>
          Therefore, to make maximum use of a large screen, authors should have limited-width 
          columns of text placed side by side, just as newspapers do. This is especially useful 
          for articles and blog posts where you want that classic newspaper feel.
        </p>
        <h2>Benefits of Columns</h2>
        <p>
          Multi-column layout gives you an easy way to create magazine-style layouts without 
          complex CSS Grid or Flexbox setups. Content flows naturally from one column to the next, 
          making it perfect for text-heavy content like articles, documentation, and news sites.
        </p>
      </div>
      <div class="code-label">column-count: 2; column-gap: 40px;</div>
    </div>
    
    <div class="demo-section">
      <h2 class="demo-title">Three Columns</h2>
      <div class="article three-columns">
        <p>
          When you increase the number of columns, each column becomes narrower. This works great 
          for wider viewports but might require media queries for smaller screens. The content 
          automatically balances across all columns.
        </p>
        <p>
          Three-column layouts are commonly seen in newspapers and magazines. They provide a 
          nice balance between readability and space efficiency. You can use this for feature 
          lists, product descriptions, or any content that benefits from compact presentation.
        </p>
        <p>
          The beauty of multi-column layout is its simplicity. With just two CSS properties, 
          you can create sophisticated magazine-style layouts that would otherwise require 
          complex positioning or grid systems.
        </p>
      </div>
      <div class="code-label">column-count: 3; column-gap: 30px;</div>
    </div>
    
    <div class="demo-section">
      <h2 class="demo-title">Auto Columns (Based on Width)</h2>
      <div class="article auto-columns">
        <p>
          Instead of specifying a fixed number of columns, you can use column-width to let the 
          browser automatically create as many columns as will fit. Try resizing your browser 
          window to see this in action!
        </p>
        <p>
          The browser will create as many columns as can fit given the minimum width you specify. 
          This makes the layout responsive without media queries. Each column will be at least 
          250px wide in this example.
        </p>
        <p>
          This approach is perfect for responsive designs where you want columns on larger screens 
          but a single column on mobile devices. The browser handles all the layout calculations 
          automatically.
        </p>
      </div>
      <div class="code-label">column-width: 250px; column-gap: 30px;</div>
    </div>
  </div>
</body>
</html>`;

const columnRuleExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Column Rules & Styling</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Georgia, serif;
      background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #b45309 0%, #92400e 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #f59e0b; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #fbbf24; }
    }
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
    }
    .demo-card {
      background: #fffbeb;
      padding: 25px;
      border-radius: 12px;
      border: 2px solid #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .demo-card { background: #451a03; border-color: #d97706; }
    }
    h3 {
      color: #92400e;
      margin-bottom: 15px;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      h3 { color: #fbbf24; }
    }
    .article {
      column-count: 2;
      column-gap: 30px;
      text-align: justify;
      line-height: 1.6;
      font-size: 14px;
      color: #1e293b;
    }
    @media (prefers-color-scheme: dark) {
      .article { color: #e2e8f0; }
    }
    .rule-solid { column-rule: 2px solid #f59e0b; }
    .rule-dotted { column-rule: 3px dotted #f59e0b; }
    .rule-dashed { column-rule: 2px dashed #f59e0b; }
    .rule-thick { column-rule: 5px double #f59e0b; }
    .code {
      margin-top: 12px;
      padding: 10px;
      background: #1e293b;
      color: #fbbf24;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      .code { background: #020617; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📏 Column Rules</h1>
    
    <div class="demo-grid">
      <div class="demo-card">
        <h3>Solid Rule</h3>
        <div class="article rule-solid">
          <p>
            Column rules are lines drawn between columns. They're styled similarly to borders 
            and add visual separation. This example uses a solid line to clearly divide the columns.
          </p>
          <p>
            The rule appears in the middle of the gap between columns and takes up no space itself. 
            It's purely decorative but adds a professional touch to multi-column layouts.
          </p>
        </div>
        <div class="code">column-rule: 2px solid #f59e0b;</div>
      </div>
      
      <div class="demo-card">
        <h3>Dotted Rule</h3>
        <div class="article rule-dotted">
          <p>
            Dotted rules provide a lighter, more playful separation between columns. They're less 
            formal than solid lines and work well for casual content or creative layouts.
          </p>
          <p>
            The dotted style can be made more or less prominent by adjusting the width. Thicker 
            dotted lines create larger dots with more visual weight.
          </p>
        </div>
        <div class="code">column-rule: 3px dotted #f59e0b;</div>
      </div>
      
      <div class="demo-card">
        <h3>Dashed Rule</h3>
        <div class="article rule-dashed">
          <p>
            Dashed rules strike a balance between solid and dotted styles. They provide clear 
            separation while maintaining a lighter visual weight than solid lines.
          </p>
          <p>
            This style is perfect for modern, clean designs where you want column separation 
            without heavy visual elements drawing too much attention.
          </p>
        </div>
        <div class="code">column-rule: 2px dashed #f59e0b;</div>
      </div>
      
      <div class="demo-card">
        <h3>Double Rule</h3>
        <div class="article rule-thick">
          <p>
            Double rules create an elegant, classic look reminiscent of traditional print media. 
            The parallel lines add sophistication to your layout.
          </p>
          <p>
            This style works particularly well for formal content like academic papers, legal 
            documents, or traditional newspaper-style layouts where a more refined aesthetic is desired.
          </p>
        </div>
        <div class="code">column-rule: 5px double #f59e0b;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const columnBreaksExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Column Breaks & Spanning</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Georgia, serif;
      background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #b45309 0%, #92400e 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #f59e0b; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #fbbf24; }
    }
    .article {
      column-count: 3;
      column-gap: 30px;
      column-rule: 2px solid #fbbf24;
      text-align: justify;
      line-height: 1.8;
      color: #1e293b;
    }
    @media (prefers-color-scheme: dark) {
      .article { color: #e2e8f0; }
    }
    .article h2 {
      color: #f59e0b;
      margin: 25px 0 15px;
      break-after: avoid;
      column-span: all;
      text-align: center;
      padding: 20px;
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
      border-radius: 8px;
      border: 2px solid #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .article h2 { color: #fbbf24; background: #451a03; border-color: #d97706; }
    }
    .article h3 {
      color: #92400e;
      margin: 15px 0 10px;
      break-after: avoid;
    }
    @media (prefers-color-scheme: dark) {
      .article h3 { color: #fde68a; }
    }
    .highlight-box {
      padding: 20px;
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      margin: 20px 0;
      break-inside: avoid;
      border-radius: 8px;
    }
    @media (prefers-color-scheme: dark) {
      .highlight-box { background: #451a03; border-color: #fbbf24; }
    }
    .figure {
      margin: 20px 0;
      padding: 15px;
      background: #fffbeb;
      border-radius: 8px;
      text-align: center;
      break-inside: avoid;
      border: 2px dashed #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .figure { background: #78350f; border-color: #d97706; }
    }
    .figure-caption {
      margin-top: 10px;
      font-style: italic;
      font-size: 14px;
      color: #78350f;
    }
    @media (prefers-color-scheme: dark) {
      .figure-caption { color: #fde68a; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Column Breaks & Spanning</h1>
    
    <div class="article">
      <p>
        Multi-column layouts need careful control of where content breaks. Without proper break 
        controls, headings can end up at the bottom of one column with their content in the next, 
        or images can be awkwardly split.
      </p>
      
      <h2>Main Heading Spans All Columns</h2>
      
      <p>
        The heading above uses column-span: all to break out of the column layout and span across 
        all columns. This is perfect for major section headings that should apply to all the content below.
      </p>
      
      <h3>Break Controls</h3>
      <p>
        CSS provides several properties to control column breaks: break-before, break-after, and 
        break-inside. These let you prevent awkward splits and keep related content together.
      </p>
      
      <div class="highlight-box">
        <strong>Important Note:</strong> This highlighted box uses break-inside: avoid to ensure 
        it doesn't split across columns. The content stays together as a cohesive unit.
      </div>
      
      <p>
        Headings typically use break-after: avoid to ensure they stay with their following content. 
        This prevents orphaned headings at the bottom of columns—a common typographic issue in 
        multi-column layouts.
      </p>
      
      <div class="figure">
        <div style="width: 100%; height: 80px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
          Figure Content
        </div>
        <p class="figure-caption">Figure 1: This figure uses break-inside: avoid</p>
      </div>
      
      <h3>Best Practices</h3>
      <p>
        Always set break-after: avoid on headings to keep them with their content. Use break-inside: avoid 
        on elements like images, code blocks, and callout boxes that should never be split across columns.
      </p>
      
      <p>
        For major section breaks, column-span: all is perfect. It lets important headings or content 
        break out of the column flow and span the full width, creating clear visual hierarchy.
      </p>
      
      <p>
        Remember that break controls are suggestions to the browser, not hard rules. In constrained 
        spaces, the browser may still need to break content to avoid worse layout problems.
      </p>
    </div>
  </div>
</body>
</html>`;

export default function MultiColumnLayout({ onOpenWebPlayground }: MultiColumnLayoutProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Columns}
        category="CSS · Modern Layout"
        title="Multi-Column Layout"
        description="Create magazine-style layouts with column-count, column-width, and column-rule"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What are Multi-Column Layouts?
          </CardTitle>
          <CardDescription>
            Magazine and newspaper-style text layouts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            CSS Multi-column Layout lets you <strong className="text-foreground">split text into multiple columns</strong> like 
            newspapers and magazines. It's perfect for articles, documentation, and any text-heavy content where you want 
            to improve readability on wide screens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Columns className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Column Count</h4>
              <p className="text-sm text-muted-foreground">
                Fixed number of columns
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Column Width</h4>
              <p className="text-sm text-muted-foreground">
                Auto columns based on width
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Column Rules</h4>
              <p className="text-sm text-muted-foreground">
                Visual separators between columns
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Columns className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Column Basics
          </CardTitle>
          <CardDescription>
            Creating columns with count and width
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={columnBasicsExample}
            title="Column Basics"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Column Properties:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>column-count:</strong> Fixed number of columns (e.g., 2, 3, 4)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>column-width:</strong> Minimum width, browser creates as many as fit</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>column-gap:</strong> Space between columns</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            2. Column Rules
          </CardTitle>
          <CardDescription>
            Visual separators between columns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={columnRuleExample}
            title="Column Rules"
            colorTheme="emerald"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Column Breaks & Spanning
          </CardTitle>
          <CardDescription>
            Control where content breaks and spans
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={columnBreaksExample}
            title="Breaks & Spanning"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Break Control Properties</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li><strong>break-inside: avoid</strong> - Prevent element from breaking across columns</li>
                <li><strong>break-after: avoid</strong> - Keep element with following content</li>
                <li><strong>column-span: all</strong> - Span element across all columns</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">column-count: 3;</code>
              <p className="text-sm text-muted-foreground mt-1">Create 3 equal columns</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">column-width: 250px;</code>
              <p className="text-sm text-muted-foreground mt-1">Auto columns, min 250px each</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">column-rule: 2px solid #ccc;</code>
              <p className="text-sm text-muted-foreground mt-1">Add vertical line between columns</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">column-span: all;</code>
              <p className="text-sm text-muted-foreground mt-1">Span element across all columns</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use column-width for responsive:</strong> Let browser decide column count</li>
            <li><strong>Set reasonable gaps:</strong> 20-40px for good readability</li>
            <li><strong>Add break-after: avoid to headings:</strong> Keep headings with content</li>
            <li><strong>Use break-inside: avoid on images/boxes:</strong> Prevent awkward splits</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Multi-column layout has excellent browser support! All modern browsers fully support column properties.
        </AlertDescription>
      </Alert>
    </div>
  );
}
