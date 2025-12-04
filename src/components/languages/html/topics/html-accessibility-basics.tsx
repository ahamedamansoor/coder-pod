'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Accessibility, Users, Eye, Keyboard, CheckCircle, AlertTriangle, Info, Heart, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAccessibilityBasicsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAccessibilityBasics({ onOpenWebPlayground }: HtmlAccessibilityBasicsProps) {
  
  // Example 1: Accessible vs Inaccessible
  const accessibleVsInaccessible = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible vs Inaccessible Examples</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      padding: 20px;
      min-height: 100vh;
      transition: background-color 0.3s, color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
      }
    }
    
    .container {
      max-width: 1200px;
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
      font-size: 2.5rem;
      color: #06b6d4;
      margin-bottom: 30px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    .example-card {
      padding: 30px;
      border-radius: 12px;
      position: relative;
    }
    
    .bad-example {
      background: #fef2f2;
      border: 3px solid #ef4444;
    }
    
    @media (prefers-color-scheme: dark) {
      .bad-example {
        background: #7f1d1d;
        border-color: #f87171;
      }
    }
    
    .good-example {
      background: #f0fdf4;
      border: 3px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .good-example {
        background: #064e3b;
        border-color: #34d399;
      }
    }
    
    .badge {
      position: absolute;
      top: -15px;
      left: 20px;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .bad-badge {
      background: #ef4444;
      color: white;
    }
    
    .good-badge {
      background: #10b981;
      color: white;
    }
    
    .example-title {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    
    .bad-example .example-title {
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .bad-example .example-title {
        color: #fca5a5;
      }
    }
    
    .good-example .example-title {
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .good-example .example-title {
        color: #6ee7b7;
      }
    }
    
    .demo-button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      margin: 10px 0;
      display: block;
      width: 100%;
    }
    
    .bad-button {
      background: #3b82f6;
      color: white;
    }
    
    .good-button {
      background: #3b82f6;
      color: white;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .good-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    
    .good-button:focus {
      outline: 3px solid #93c5fd;
      outline-offset: 2px;
    }
    
    .issue-list {
      margin-top: 20px;
      padding: 15px;
      background: white;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .issue-list {
        background: #334155;
      }
    }
    
    .issue-list h4 {
      margin-bottom: 10px;
      font-size: 1rem;
    }
    
    .issue-list li {
      margin: 8px 0;
      padding-left: 20px;
      position: relative;
      color: #4b5563;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .issue-list li {
        color: #cbd5e1;
      }
    }
    
    .bad-example .issue-list li::before {
      content: "❌";
      position: absolute;
      left: 0;
    }
    
    .good-example .issue-list li::before {
      content: "✅";
      position: absolute;
      left: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>♿ Accessible vs Inaccessible</h1>
    
    <div class="comparison">
      <!-- Bad Example -->
      <div class="example-card bad-example">
        <div class="badge bad-badge">
          ❌ Inaccessible
        </div>
        <h3 class="example-title">Poor Accessibility</h3>
        
        <div onclick="alert('Clicked!')" class="demo-button bad-button">
          Click here
        </div>
        
        <img src="https://via.placeholder.com/300x150" style="width: 100%; margin: 15px 0; border-radius: 8px;">
        
        <div class="issue-list">
          <h4 style="color: #991b1b;">❌ Issues:</h4>
          <ul style="list-style: none;">
            <li>No semantic HTML (using div for button)</li>
            <li>No alt text on image</li>
            <li>No keyboard focus visible</li>
            <li>Poor color contrast</li>
            <li>Not screen reader friendly</li>
          </ul>
        </div>
      </div>
      
      <!-- Good Example -->
      <div class="example-card good-example">
        <div class="badge good-badge">
          ✅ Accessible
        </div>
        <h3 class="example-title">Great Accessibility</h3>
        
        <button 
          class="demo-button good-button" 
          onclick="alert('Clicked!')"
          aria-label="Submit form">
          Submit Form
        </button>
        
        <img 
          src="https://via.placeholder.com/300x150" 
          alt="Chart showing website traffic growth over 6 months"
          style="width: 100%; margin: 15px 0; border-radius: 8px;">
        
        <div class="issue-list">
          <h4 style="color: #065f46;">✅ Features:</h4>
          <ul style="list-style: none;">
            <li>Proper semantic button element</li>
            <li>Descriptive alt text</li>
            <li>Clear keyboard focus indicator</li>
            <li>Good color contrast (4.5:1+)</li>
            <li>Screen reader accessible</li>
          </ul>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      <strong>Try using Tab key</strong> to navigate and see the difference!<br>
      Accessible design benefits everyone, not just people with disabilities.
    </p>
  </div>
</body>
</html>`;

  // Example 2: Semantic HTML Structure
  const semanticExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML for Accessibility</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      padding: 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .page-container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .page-container {
        background: #1e293b;
      }
    }
    
    header {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    
    header h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    nav {
      background: #f3f4f6;
      padding: 15px 30px;
      border-bottom: 2px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      nav {
        background: #334155;
        border-bottom-color: #a78bfa;
      }
    }
    
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    nav a {
      color: #7c3aed;
      text-decoration: none;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 6px;
      transition: background 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
      nav a {
        color: #c4b5fd;
      }
    }
    
    nav a:hover,
    nav a:focus {
      background: #ddd6fe;
      outline: none;
    }
    
    @media (prefers-color-scheme: dark) {
      nav a:hover,
      nav a:focus {
        background: #5b21b6;
      }
    }
    
    main {
      padding: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      main {
        color: #e2e8f0;
      }
    }
    
    article {
      margin-bottom: 40px;
      padding: 30px;
      background: #faf5ff;
      border-radius: 12px;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      article {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    article h2 {
      color: #7c3aed;
      margin-bottom: 15px;
      font-size: 1.8rem;
    }
    
    @media (prefers-color-scheme: dark) {
      article h2 {
        color: #c4b5fd;
      }
    }
    
    article p {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      article p {
        color: #cbd5e1;
      }
    }
    
    aside {
      background: #ede9fe;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      aside {
        background: #5b21b6;
      }
    }
    
    aside h3 {
      color: #6d28d9;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      aside h3 {
        color: #ddd6fe;
      }
    }
    
    aside p {
      color: #1e293b;
      margin: 0;
    }
    
    @media (prefers-color-scheme: dark) {
      aside p {
        color: #e0e7ff;
      }
    }
    
    section {
      background: #f3f4f6;
      padding: 25px;
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      section {
        background: #334155;
      }
    }
    
    section h2 {
      color: #1f2937;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      section h2 {
        color: #e2e8f0;
      }
    }
    
    section ul {
      list-style: none;
      display: grid;
      gap: 10px;
      padding: 0;
    }
    
    section li {
      color: #374151;
    }
    
    @media (prefers-color-scheme: dark) {
      section li {
        color: #cbd5e1;
      }
    }
    
    footer {
      background: #1e293b;
      color: white;
      padding: 30px;
      text-align: center;
    }
    
    .semantic-badge {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div class="page-container">
    <!-- Semantic Header -->
    <header>
      <h1>🎯 Semantic HTML Structure</h1>
      <p>Proper structure helps screen readers navigate your content</p>
    </header>
    
    <!-- Semantic Navigation -->
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
    <!-- Semantic Main Content -->
    <main>
      <article>
        <h2>
          Why Semantic HTML Matters
          <span class="semantic-badge">&lt;article&gt;</span>
        </h2>
        <p>
          Semantic HTML elements clearly describe their meaning to both the browser and the developer.
          Elements like &lt;article&gt;, &lt;nav&gt;, &lt;header&gt;, and &lt;footer&gt; provide
          structure that assistive technologies can understand and navigate.
        </p>
        <p>
          Screen readers use these landmarks to help users jump to different sections of your page quickly.
          This is similar to how you might use a table of contents in a book.
        </p>
      </article>
      
      <aside>
        <h3>
          💡 Quick Tip
          <span class="semantic-badge">&lt;aside&gt;</span>
        </h3>
        <p>
          Using semantic HTML is one of the easiest ways to improve accessibility.
          It costs nothing and provides immediate benefits!
        </p>
      </aside>
      
      <section>
        <h2>
          Key Semantic Elements
          <span class="semantic-badge">&lt;section&gt;</span>
        </h2>
        <ul>
          <li>✅ &lt;header&gt; - Page or section header</li>
          <li>✅ &lt;nav&gt; - Navigation links</li>
          <li>✅ &lt;main&gt; - Primary content</li>
          <li>✅ &lt;article&gt; - Self-contained content</li>
          <li>✅ &lt;aside&gt; - Sidebar or supplementary info</li>
          <li>✅ &lt;footer&gt; - Page or section footer</li>
        </ul>
      </section>
    </main>
    
    <!-- Semantic Footer -->
    <footer>
      <p>&copy; 2024 CoderPod. Made with ♿ accessibility in mind.</p>
    </footer>
  </div>
</body>
</html>`;

  // Example 3: Accessibility Checklist
  const checklistExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Accessibility Checklist</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      font-size: 2.5rem;
      color: #10b981;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .checklist-section {
      margin: 30px 0;
    }
    
    .section-title {
      font-size: 1.5rem;
      color: #059669;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #10b981;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #6ee7b7;
        border-bottom-color: #34d399;
      }
    }
    
    .checklist-item {
      display: flex;
      align-items: start;
      gap: 15px;
      padding: 20px;
      margin: 15px 0;
      background: #f0fdf4;
      border-radius: 12px;
      border-left: 4px solid #10b981;
      transition: transform 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
      .checklist-item {
        background: #064e3b;
        border-left-color: #34d399;
      }
    }
    
    .checklist-item:hover {
      transform: translateX(5px);
    }
    
    .checkbox {
      width: 24px;
      height: 24px;
      border: 2px solid #10b981;
      border-radius: 6px;
      flex-shrink: 0;
      margin-top: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
    }
    
    @media (prefers-color-scheme: dark) {
      .checkbox {
        background: #334155;
        border-color: #34d399;
      }
    }
    
    .checkbox::after {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    .item-content h4 {
      color: #065f46;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-content h4 {
        color: #a7f3d0;
      }
    }
    
    .item-content p {
      color: #4b5563;
      line-height: 1.5;
      font-size: 0.95rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-content p {
        color: #cbd5e1;
      }
    }
    
    .priority-badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-left: 10px;
    }
    
    .priority-high {
      background: #fef2f2;
      color: #dc2626;
    }
    
    @media (prefers-color-scheme: dark) {
      .priority-high {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .priority-medium {
      background: #fffbeb;
      color: #d97706;
    }
    
    @media (prefers-color-scheme: dark) {
      .priority-medium {
        background: #78350f;
        color: #fcd34d;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Web Accessibility Checklist</h1>
    <p class="subtitle">Essential practices for making your website accessible to everyone</p>
    
    <!-- Content Section -->
    <div class="checklist-section">
      <h2 class="section-title">
        📄 Content
      </h2>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Use semantic HTML
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            Use proper HTML5 elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, 
            and &lt;footer&gt; to provide meaningful structure.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Add alt text to images
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            Every image must have descriptive alt text that explains what the image shows.
            Decorative images should have empty alt="" attributes.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Proper heading hierarchy
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            Use headings (h1-h6) in correct order. Only one h1 per page, and don't skip levels
            (don't jump from h2 to h4).
          </p>
        </div>
      </div>
    </div>
    
    <!-- Interaction Section -->
    <div class="checklist-section">
      <h2 class="section-title">
        ⌨️ Interaction
      </h2>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Keyboard accessible
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            All functionality must be accessible via keyboard. Test using Tab, Enter, 
            Space, and Arrow keys only.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Visible focus indicators
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            Interactive elements must show clear visual feedback when focused. 
            Never remove outlines without providing alternatives.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Forms have labels
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            Every form input must have an associated &lt;label&gt; element with proper 
            for/id connection or aria-label.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Design Section -->
    <div class="checklist-section">
      <h2 class="section-title">
        🎨 Design
      </h2>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Color contrast (4.5:1)
            <span class="priority-badge priority-high">High Priority</span>
          </h4>
          <p>
            Text and background must have sufficient contrast. Regular text needs 4.5:1, 
            large text needs 3:1 minimum.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Don't rely on color alone
            <span class="priority-badge priority-medium">Medium Priority</span>
          </h4>
          <p>
            Use icons, labels, or patterns in addition to color to convey information.
            Example: error states should show both red color AND an error icon.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="checkbox"></div>
        <div class="item-content">
          <h4>
            Responsive and zoomable
            <span class="priority-badge priority-medium">Medium Priority</span>
          </h4>
          <p>
            Page must work at 200% zoom and on all screen sizes. Text should be resizable
            without breaking layout.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Accessibility}
        category="HTML · Accessibility"
        title="What is Web Accessibility?"
        description="Learn the fundamentals of making websites usable for everyone, including people with disabilities"
        colorTheme="blue"
      />

      {/* What is Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Heart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is Web Accessibility?
          </CardTitle>
          <CardDescription>
            Understanding why accessibility matters and who it helps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Web accessibility</strong> means creating websites that everyone can use,
            regardless of their abilities or disabilities. This includes people who are blind, deaf, have motor impairments,
            cognitive disabilities, or use assistive technologies like screen readers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Visual</h4>
              <p className="text-sm text-muted-foreground">
                Blind, low vision, color blind users rely on screen readers and proper contrast
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Keyboard className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Motor</h4>
              <p className="text-sm text-muted-foreground">
                Users with limited mobility need keyboard navigation and large click targets
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Everyone</h4>
              <p className="text-sm text-muted-foreground">
                Good accessibility improves usability for all users, including on mobile
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessible vs Inaccessible */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Accessible vs Inaccessible
          </CardTitle>
          <CardDescription>
            See the difference between good and bad accessibility practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={accessibleVsInaccessible}
            title="Comparison: Accessible vs Inaccessible"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Semantic HTML */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Semantic HTML Structure
          </CardTitle>
          <CardDescription>
            Using proper HTML elements for better accessibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={semanticExample}
            title="Semantic HTML Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Why Accessibility Matters */}
      <Card>
        <CardHeader>
          <CardTitle>Why Accessibility Matters</CardTitle>
          <CardDescription>
            Benefits beyond helping people with disabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                Legal Requirement
              </h4>
              <p className="text-sm text-muted-foreground">
                Many countries require websites to be accessible (ADA, Section 508, WCAG compliance).
                Non-compliance can result in lawsuits.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">👥</span>
                Larger Audience
              </h4>
              <p className="text-sm text-muted-foreground">
                15% of the world's population has some form of disability. That's over 1 billion potential users.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Better SEO
              </h4>
              <p className="text-sm text-muted-foreground">
                Semantic HTML and proper structure help search engines understand and rank your content better.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Improved UX
              </h4>
              <p className="text-sm text-muted-foreground">
                Accessibility features like keyboard navigation and clear labels benefit all users, especially on mobile.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Essential Accessibility Checklist
          </CardTitle>
          <CardDescription>
            Quick reference guide for accessible web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={checklistExample}
            title="Web Accessibility Checklist"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Quick Accessibility Wins</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic HTML</strong> - header, nav, main, article, aside, footer</li>
            <li><strong>Add alt text</strong> - Describe what images show, use alt="" for decorative</li>
            <li><strong>Label form inputs</strong> - Every input needs a label</li>
            <li><strong>Ensure keyboard access</strong> - Test with Tab, Enter, and Arrow keys</li>
            <li><strong>Check color contrast</strong> - Minimum 4.5:1 for text</li>
            <li><strong>Provide focus indicators</strong> - Show when elements are focused</li>
            <li><strong>Use heading hierarchy</strong> - One h1, don't skip levels</li>
            <li><strong>Write descriptive links</strong> - Avoid "click here" text</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Testing Tools</CardTitle>
          <CardDescription>
            Tools to help you test and improve accessibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 WAVE Browser Extension</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Free tool that highlights accessibility issues directly on your page
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                wave.webaim.org
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">⚡ Lighthouse (Chrome DevTools)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Built-in Chrome tool with accessibility audit
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                DevTools → Lighthouse → Accessibility
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🎨 Color Contrast Checker</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Verify your color combinations meet WCAG standards
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                webaim.org/resources/contrastchecker/
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">📱 Screen Readers</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Test with actual screen readers: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Accessibility Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Missing alt text</strong> - Images without alt attributes</li>
            <li><strong>Poor color contrast</strong> - Text that's hard to read</li>
            <li><strong>No keyboard access</strong> - Mouse-only interactions</li>
            <li><strong>Removing focus outlines</strong> - outline: none without replacement</li>
            <li><strong>Using divs for buttons</strong> - Non-semantic HTML</li>
            <li><strong>Auto-playing media</strong> - Videos/audio that start automatically</li>
            <li><strong>Inaccessible forms</strong> - Inputs without labels</li>
            <li><strong>Bad heading structure</strong> - Skipping heading levels or multiple h1s</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* WCAG Levels */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">WCAG 2.1 Conformance Levels</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Level A:</strong> Minimum accessibility (essential)</li>
            <li><strong>Level AA:</strong> Recommended standard (most legal requirements)</li>
            <li><strong>Level AAA:</strong> Highest level (not always achievable)</li>
          </ul>
          <p className="mt-2">
            Aim for <strong>WCAG 2.1 Level AA</strong> compliance for most websites.
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
