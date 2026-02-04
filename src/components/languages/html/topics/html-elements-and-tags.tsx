'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code, Layers, Box, Type, List, Image,
  FormInput, Table, Network, Accessibility,
  AlertCircle, CheckCircle, XCircle, Info
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function HtmlElementsAndTags({
  onOpenWebPlayground
}: {
  onOpenWebPlayground: (html: string, css: string, js: string) => void;
}) {

  // ==================== PLAYGROUND EXAMPLES ====================

  const anatomyExample = {
    html: `<!-- Interactive Element Anatomy Breakdown -->
<div class="anatomy-demo">
  <h2>Understanding HTML Element Structure</h2>
  
  <div class="anatomy-item">
    <h3>📦 Simple Heading Element</h3>
    <div class="code-breakdown">
      <span class="tag-part opening">&lt;h1&gt;</span>
      <span class="content-part">Welcome to HTML!</span>
      <span class="tag-part closing">&lt;/h1&gt;</span>
    </div>
    <div class="explanation">
      <p><strong>Opening Tag:</strong> Tells browser "heading level 1 starts here"</p>
      <p><strong>Content:</strong> The actual text that displays on the page</p>
      <p><strong>Closing Tag:</strong> Signals the end of this heading</p>
    </div>
  </div>

  <div class="anatomy-item">
    <h3>🎨 Element with Attributes</h3>
    <div class="code-breakdown">
      <span class="tag-part opening">&lt;a href="https://example.com"&gt;</span>
      <span class="content-part">Click me!</span>
      <span class="tag-part closing">&lt;/a&gt;</span>
    </div>
    <div class="explanation">
      <p><strong>Opening Tag:</strong> Contains the tag name &lt;a&gt; and attribute href</p>
      <p><strong>Attribute:</strong> href="https://example.com" tells where to link</p>
      <p><strong>Content:</strong> The clickable text shown to users</p>
      <p><strong>Closing Tag:</strong> Ends the link element</p>
    </div>
  </div>

  <div class="anatomy-item">
    <h3>⚡ Self-Closing (Void) Elements</h3>
    <div class="code-breakdown">
      <span class="tag-part void">&lt;img src="photo.jpg" alt="My Photo" /&gt;</span>
    </div>
    <div class="explanation">
      <p><strong>Void Element:</strong> No closing tag needed (img, input, br, hr)</p>
      <p><strong>Forward Slash:</strong> The "/" indicates this element is self-closing</p>
      <p><strong>Attributes:</strong> src (source) and alt (alternative text)</p>
      <p>✅ Valid: &lt;img ... /&gt; or &lt;img ...&gt;</p>
    </div>
  </div>

  <div class="anatomy-item">
    <h3>🏗️ Nested Elements (Element Inside Element)</h3>
    <div class="code-breakdown">
      <span class="tag-part opening">&lt;p&gt;</span>
      This is <span class="nested-part opening">&lt;strong&gt;</span><span class="nested-content">important</span><span class="nested-part closing">&lt;/strong&gt;</span> text.
      <span class="tag-part closing">&lt;/p&gt;</span>
    </div>
    <div class="explanation">
      <p><strong>Parent Element:</strong> &lt;p&gt; contains the paragraph</p>
      <p><strong>Child Element:</strong> &lt;strong&gt; is nested inside &lt;p&gt;</p>
      <p><strong>Rule:</strong> Inner tags must close before outer tags</p>
      <p><strong>Order:</strong> &lt;p&gt; opens → &lt;strong&gt; opens → &lt;strong&gt; closes → &lt;p&gt; closes</p>
    </div>
  </div>

  <div class="summary-box">
    <h3>✅ Element Anatomy Summary</h3>
    <ul>
      <li><strong>&lt;tagname&gt;</strong> = Opening tag (starts the element)</li>
      <li><strong>Content</strong> = What goes inside (text or other elements)</li>
      <li><strong>&lt;/tagname&gt;</strong> = Closing tag (ends the element)</li>
      <li><strong>Attributes</strong> = Additional info in the opening tag</li>
      <li><strong>Void Elements</strong> = Self-closing tags (no content)</li>
    </ul>
  </div>
</div>`,
    css: `.anatomy-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
  background: linear-gradient(to bottom, #f0f9ff, #ffffff);
}

@media (prefers-color-scheme: dark) {
  .anatomy-demo {
    background: linear-gradient(to bottom, #1e3a8a, #0f172a);
  }
}

.anatomy-demo > h2 {
  text-align: center;
  color: #0f172a;
  font-size: 2rem;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  .anatomy-demo > h2 {
    color: #f1f5f9;
  }
}

.anatomy-item {
  background: white;
  border: 2px solid #dbeafe;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
}

@media (prefers-color-scheme: dark) {
  .anatomy-item {
    background: #1e293b;
    border-color: #3b82f6;
  }
}

.anatomy-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.1);
}

@media (prefers-color-scheme: dark) {
  .anatomy-item:hover {
    border-color: #60a5fa;
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  }
}

.anatomy-item h3 {
  color: #1e40af;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .anatomy-item h3 {
    color: #93c5fd;
  }
}

.code-breakdown {
  background: #1f2937;
  color: #10b981;
  padding: 1.25rem;
  border-radius: 8px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

@media (prefers-color-scheme: dark) {
  .code-breakdown {
    background: #0f172a;
    color: #34d399;
    border: 1px solid #374151;
  }
}

.tag-part {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}

.tag-part.opening {
  background: #3b82f6;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .tag-part.opening {
    background: #2563eb;
    color: #f1f5f9;
  }
}

.tag-part.closing {
  background: #ef4444;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .tag-part.closing {
    background: #dc2626;
    color: #f1f5f9;
  }
}

.tag-part.void {
  background: #f59e0b;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .tag-part.void {
    background: #d97706;
    color: #f1f5f9;
  }
}

.content-part {
  background: #059669;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

@media (prefers-color-scheme: dark) {
  .content-part {
    background: #047857;
    color: #f1f5f9;
  }
}

.nested-part.opening {
  background: #a855f7;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

@media (prefers-color-scheme: dark) {
  .nested-part.opening {
    background: #9333ea;
    color: #f1f5f9;
  }
}

.nested-part.closing {
  background: #dc2626;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

@media (prefers-color-scheme: dark) {
  .nested-part.closing {
    background: #b91c1c;
    color: #f1f5f9;
  }
}

.nested-content {
  background: #7c3aed;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

@media (prefers-color-scheme: dark) {
  .nested-content {
    background: #6d28d9;
    color: #f1f5f9;
  }
}

.explanation {
  background: #eff6ff;
  padding: 1rem;
  border-left: 4px solid #3b82f6;
  border-radius: 4px;
}

@media (prefers-color-scheme: dark) {
  .explanation {
    background: #1e3a8a;
    border-left-color: #60a5fa;
  }
}

.explanation p {
  margin: 0.5rem 0;
  color: #1e40af;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  .explanation p {
    color: #dbeafe;
  }
}

.explanation p:last-child {
  margin-bottom: 0;
}

.summary-box {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #16a34a;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

@media (prefers-color-scheme: dark) {
  .summary-box {
    background: linear-gradient(135deg, #14532d 0%, #166534 100%);
    border-color: #22c55e;
  }
}

.summary-box h3 {
  color: #15803d;
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  .summary-box h3 {
    color: #86efac;
  }
}

.summary-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.summary-box li {
  padding: 0.75rem 0;
  color: #166534;
  border-bottom: 1px solid #86efac;
  font-size: 1rem;
}

@media (prefers-color-scheme: dark) {
  .summary-box li {
    color: #bbf7d0;
    border-bottom-color: #22c55e;
  }
}

.summary-box li:last-child {
  border-bottom: none;
}`,
    js: ``
  };

  const semanticExample = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Structure</title>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#home">Home</a> | 
      <a href="#about">About</a> | 
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <p>This is the main content area with meaningful semantic markup.</p>
      <figure>
        <img src="https://via.placeholder.com/300x150" alt="Article image" />
        <figcaption>Image caption explaining the visual content</figcaption>
      </figure>
    </article>
    
    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 My Blog. All rights reserved.</p>
  </footer>
</body>
</html>`,
    css: `body { 
  font-family: system-ui, sans-serif; 
  margin: 0; 
  line-height: 1.6; 
  color: #1f2937;
  background: #ffffff;
}

@media (prefers-color-scheme: dark) {
  body {
    color: #f3f4f6;
    background: #0f172a;
  }
}

header, footer { 
  background: #1e40af; 
  color: white; 
  padding: 1.5rem; 
  text-align: center; 
}

@media (prefers-color-scheme: dark) {
  header, footer {
    background: #1e3a8a;
    color: #f1f5f9;
  }
}

nav a { 
  color: white; 
  text-decoration: none; 
  padding: 0 0.5rem; 
}

@media (prefers-color-scheme: dark) {
  nav a {
    color: #dbeafe;
  }
}

nav a:hover { 
  text-decoration: underline; 
}

main { 
  display: flex; 
  gap: 2rem; 
  padding: 2rem; 
  max-width: 1200px; 
  margin: 0 auto; 
}

article { 
  flex: 2; 
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  article {
    color: #d1d5db;
  }
}

aside { 
  flex: 1; 
  background: #f3f4f6; 
  padding: 1.5rem; 
  border-radius: 8px; 
  color: #4b5563;
}

@media (prefers-color-scheme: dark) {
  aside {
    background: #1e293b;
    color: #9ca3af;
  }
}

figure { 
  margin: 1rem 0; 
}

figcaption { 
  font-size: 0.875rem; 
  color: #6b7280; 
  margin-top: 0.5rem; 
}

@media (prefers-color-scheme: dark) {
  figcaption {
    color: #9ca3af;
  }
}

h1, h2, h3 {
  color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  h1, h2, h3 {
    color: #f3f4f6;
  }
}

p {
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #d1d5db;
  }
}

ul, li {
  color: #4b5563;
}

@media (prefers-color-scheme: dark) {
  ul, li {
    color: #9ca3af;
  }
}

img {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}`,
    js: ''
  };

  const blockInlineExample = {
    html: `<h2>Block vs Inline Demonstration</h2>

<!-- Block Elements (take full width) -->
<div class="block">DIV - Block Element</div>
<p class="block">P - Block Element</p>
<h3 class="block">H3 - Block Element</h3>

<!-- Inline Elements (flow with text) -->
<p>
  This paragraph contains 
  <span class="inline">SPAN - Inline</span>, 
  <strong class="inline">STRONG - Inline</strong>, and 
  <a href="#" class="inline">A - Inline</a> elements.
</p>

<!-- Mixed Usage -->
<div class="container">
  <p>Block element <code>div</code> can contain both 
  <span>inline</span> and <em>block</em> elements.</p>
</div>`,
    css: `.block { 
  background: #dbeafe; 
  padding: 1rem; 
  margin: 0.5rem 0; 
  border-left: 4px solid #3b82f6; 
  color: #1e40af;
}

@media (prefers-color-scheme: dark) {
  .block { 
    background: #1e3a8a; 
    border-left-color: #60a5fa; 
    color: #dbeafe;
  }
}

.inline { 
  background: #fef3c7; 
  padding: 0.25rem 0.5rem; 
  border-radius: 4px; 
  color: #92400e;
}

@media (prefers-color-scheme: dark) {
  .inline { 
    background: #78350f; 
    color: #fef3c7;
  }
}

.container { 
  background: #f3f4f6; 
  padding: 1rem; 
  margin-top: 1rem; 
  border-radius: 8px; 
  color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  .container { 
    background: #374151; 
    color: #f3f4f6;
  }
}

code { 
  background: #fee2e2; 
  padding: 0.125rem 0.25rem; 
  border-radius: 3px; 
  font-family: monospace; 
  color: #991b1b;
}

@media (prefers-color-scheme: dark) {
  code { 
    background: #7f1d1d; 
    color: #fecaca;
  }
}

h2 {
  color: #1f2937;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f3f4f6;
  }
}

p {
  color: #374151;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #d1d5db;
  }
}`,
    js: ''
  };

  const attributesExample = {
    html: `<!-- Global Attributes (work on any element) -->
<div id="main-content" class="container active" data-section="intro" title="Main content area">
  
  <!-- Link Attributes -->
  <a href="https://example.com" target="_blank" rel="noopener">
    Visit Example.com
  </a>
  
  <!-- Image Attributes -->
  <img 
    src="https://via.placeholder.com/300x200" 
    alt="Descriptive text for accessibility"
    width="300"
    height="200"
    loading="lazy"
  />
  
  <!-- Form Attributes -->
  <input 
    type="email" 
    name="user-email" 
    placeholder="Enter your email"
    required
    aria-label="Email address"
  />
  
  <!-- ARIA Attributes for Accessibility -->
  <button 
    aria-expanded="false" 
    aria-controls="menu"
    data-action="toggle"
  >
    Toggle Menu
  </button>
</div>`,
    css: `.container { 
  padding: 1.5rem; 
  background: #f9fafb; 
  border: 2px solid #e5e7eb; 
  border-radius: 8px; 
  color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1e293b;
    border-color: #374151;
    color: #f3f4f6;
  }
}

a { 
  color: #2563eb; 
  text-decoration: none; 
  display: inline-block; 
  margin: 0.5rem 0; 
}

@media (prefers-color-scheme: dark) {
  a {
    color: #60a5fa;
  }
}

a:hover { 
  text-decoration: underline; 
}

img { 
  display: block; 
  border-radius: 8px; 
  margin: 1rem 0; 
}

input { 
  padding: 0.5rem; 
  border: 1px solid #d1d5db; 
  border-radius: 4px; 
  width: 100%; 
  margin: 1rem 0; 
  background: #ffffff;
  color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  input {
    border-color: #4b5563;
    background: #1f2937;
    color: #f3f4f6;
  }
}

button { 
  background: #3b82f6; 
  color: white; 
  padding: 0.5rem 1rem; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
}

@media (prefers-color-scheme: dark) {
  button {
    background: #2563eb;
  }
}

button:hover { 
  background: #2563eb; 
}

@media (prefers-color-scheme: dark) {
  button:hover {
    background: #1d4ed8;
  }
}

body {
  font-family: system-ui, sans-serif;
  color: #1f2937;
  background: #ffffff;
  padding: 2rem;
}

@media (prefers-color-scheme: dark) {
  body {
    color: #f3f4f6;
    background: #0f172a;
  }
}

h2, h3, h4 {
  color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  h2, h3, h4 {
    color: #f3f4f6;
  }
}

p {
  color: #374151;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #d1d5db;
  }
}`,
    js: `document.querySelector('button').addEventListener('click', function() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  alert('ARIA expanded: ' + !expanded);
});`
  };

  const nestingExample = {
    html: `<!-- Proper Nesting Hierarchy -->
<body>
  <header>
    <h1>Site Title</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <section>
        <h3>Section Heading</h3>
        <p>Paragraph with <strong>nested inline elements</strong> and <em>emphasis</em>.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </section>
    </article>
  </main>
</body>`,
    css: `body { 
  font-family: system-ui, sans-serif; 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 1rem; 
  color: #1f2937;
  background: #ffffff;
}

@media (prefers-color-scheme: dark) {
  body {
    color: #f3f4f6;
    background: #0f172a;
  }
}

header { 
  background: #1e40af; 
  color: white; 
  padding: 1.5rem; 
  border-radius: 8px; 
  margin-bottom: 1rem; 
}

@media (prefers-color-scheme: dark) {
  header {
    background: #1e3a8a;
    color: #f1f5f9;
  }
}

nav ul { 
  list-style: none; 
  padding: 0; 
  display: flex; 
  gap: 1rem; 
}

nav a { 
  color: white; 
  text-decoration: none; 
}

@media (prefers-color-scheme: dark) {
  nav a {
    color: #dbeafe;
  }
}

nav a:hover {
  text-decoration: underline;
}

article { 
  background: #f9fafb; 
  padding: 1.5rem; 
  border-radius: 8px; 
}

@media (prefers-color-scheme: dark) {
  article {
    background: #1e293b;
  }
}

section { 
  margin-top: 1rem; 
  padding: 1rem; 
  background: white; 
  border-left: 4px solid #3b82f6; 
}

@media (prefers-color-scheme: dark) {
  section {
    background: #374151;
    border-left-color: #60a5fa;
  }
}

h2, h3 {
  color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  h2, h3 {
    color: #f3f4f6;
  }
}

p {
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #d1d5db;
  }
}

ul, li {
  color: #4b5563;
}

@media (prefers-color-scheme: dark) {
  ul, li {
    color: #9ca3af;
  }
}`,
    js: ''
  };

  const formsExample = {
    html: `<form id="creative-form" class="creative-form">
  <div class="form-header">
    <h2>🚀 Create Your AI Assistant</h2>
    <p>Design your perfect AI companion with personality and skills</p>
  </div>

  <!-- AI Personality Section -->
  <fieldset class="personality-section">
    <legend>🤖 Personality & Traits</legend>
    
    <div class="form-group">
      <label for="ai-name">AI Assistant Name</label>
      <input type="text" id="ai-name" name="ai-name" placeholder="e.g., CodeMaster, CreativeGenius" required minlength="3" maxlength="20">
      <small>Give your AI a unique name (3-20 characters)</small>
    </div>

    <div class="form-group">
      <label for="personality-type">Personality Type</label>
      <select id="personality-type" name="personality-type" required>
        <option value="">Choose personality...</option>
        <option value="creative">🎨 Creative & Artistic</option>
        <option value="analytical">📊 Analytical & Logical</option>
        <option value="friendly">😊 Friendly & Supportive</option>
        <option value="professional">💼 Professional & Formal</option>
        <option value="playful">🎮 Playful & Fun</option>
      </select>
    </div>

    <div class="form-group">
      <label>Communication Style</label>
      <div class="radio-group">
        <label class="radio-option">
          <input type="radio" name="communication" value="casual" required>
          <span>😎 Casual & Relaxed</span>
        </label>
        <label class="radio-option">
          <input type="radio" name="communication" value="professional" required>
          <span>👔 Professional & Formal</span>
        </label>
        <label class="radio-option">
          <input type="radio" name="communication" value="enthusiastic" required>
          <span>🎉 Enthusiastic & Energetic</span>
        </label>
      </div>
    </div>
  </fieldset>

  <!-- Skills Section -->
  <fieldset class="skills-section">
    <legend>⚡ Skills & Capabilities</legend>
    
    <div class="form-group">
      <label>Core Skills (Select multiple)</label>
      <div class="checkbox-group">
        <label class="checkbox-option">
          <input type="checkbox" name="skills" value="coding">
          <span>💻 Programming & Coding</span>
        </label>
        <label class="checkbox-option">
          <input type="checkbox" name="skills" value="writing">
          <span>✍️ Creative Writing</span>
        </label>
        <label class="checkbox-option">
          <input type="checkbox" name="skills" value="analysis">
          <span>📈 Data Analysis</span>
        </label>
        <label class="checkbox-option">
          <input type="checkbox" name="skills" value="design">
          <span>🎨 Design & Creativity</span>
        </label>
        <label class="checkbox-option">
          <input type="checkbox" name="skills" value="translation">
          <span>🌍 Language Translation</span>
        </label>
      </div>
    </div>

    <div class="form-group">
      <label for="experience-level">Experience Level</label>
      <input type="range" id="experience-level" name="experience-level" min="1" max="10" value="5">
      <div class="range-labels">
        <span>🌱 Beginner</span>
        <span id="level-value">Level 5</span>
        <span>🚀 Expert</span>
      </div>
    </div>
  </fieldset>

  <!-- Preferences Section -->
  <fieldset class="preferences-section">
    <legend>⚙️ Preferences & Settings</legend>
    
    <div class="form-group">
      <label for="response-time">Response Speed</label>
      <input type="number" id="response-time" name="response-time" min="100" max="5000" step="100" value="500" placeholder="ms">
      <small>How quickly should your AI respond? (100-5000ms)</small>
    </div>

    <div class="form-group">
      <label for="language">Primary Language</label>
      <input type="text" id="language" name="language" list="languages" placeholder="Start typing...">
      <datalist id="languages">
        <option value="English">
        <option value="Spanish">
        <option value="French">
        <option value="German">
        <option value="Chinese">
        <option value="Japanese">
      </datalist>
    </div>

    <div class="form-group">
      <label for="bio">AI Bio & Description</label>
      <textarea id="bio" name="bio" rows="4" placeholder="Describe your AI assistant's purpose and characteristics..." maxlength="200"></textarea>
      <div class="char-counter">
        <span id="char-count">0</span>/200 characters
      </div>
    </div>
  </fieldset>

  <!-- Advanced Settings -->
  <details class="advanced-settings">
    <summary>🔧 Advanced Configuration</summary>
    <div class="form-group">
      <label for="api-key">API Key (Optional)</label>
      <input type="password" id="api-key" name="api-key" placeholder="Enter your custom API key">
      <small>For advanced integration with external services</small>
    </div>
    
    <div class="form-group">
      <label>
        <input type="checkbox" name="notifications" checked>
        Enable real-time notifications
      </label>
    </div>
  </details>

  <!-- Form Actions -->
  <div class="form-actions">
    <button type="button" id="preview-btn" class="secondary-btn">👁️ Preview AI</button>
    <button type="reset" class="secondary-btn">🔄 Reset Form</button>
    <button type="submit" class="primary-btn">✨ Create AI Assistant</button>
  </div>
</form>

<!-- Preview Modal -->
<div id="preview-modal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3>Your AI Assistant Preview</h3>
      <button class="close-btn" id="close-modal">&times;</button>
    </div>
    <div class="modal-body" id="preview-content">
      <!-- Dynamic content will be inserted here -->
    </div>
  </div>
</div>`,
    css: `/* Creative Form Styling */
.creative-form {
  max-width: 700px;
  margin: 2rem auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  color: white;
}

@media (prefers-color-scheme: dark) {
  .creative-form {
    background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h2 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
}

.form-header p {
  margin: 0;
  opacity: 0.9;
  font-size: 1.1rem;
}

/* Fieldset Styling */
fieldset {
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

@media (prefers-color-scheme: dark) {
  fieldset {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
  }
}

legend {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 1rem;
  color: #fbbf24;
}

/* Form Groups */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group small {
  display: block;
  margin-top: 0.25rem;
  opacity: 0.8;
  font-size: 0.85rem;
}

/* Input Styling */
input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"],
select,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
  font-size: 1rem;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="password"],
  select,
  textarea {
    background: rgba(30, 41, 59, 0.9);
    color: #f3f4f6;
    border-color: rgba(255, 255, 255, 0.2);
  }
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #fbbf24;
  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.2);
  transform: translateY(-2px);
}

/* Radio Button Group */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radio-option {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.radio-option:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.2);
}

.radio-option input[type="radio"] {
  width: auto;
  margin-right: 0.75rem;
}

.radio-option span {
  font-size: 0.95rem;
}

/* Checkbox Group */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.checkbox-option {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.checkbox-option:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.2);
}

.checkbox-option input[type="checkbox"] {
  width: auto;
  margin-right: 0.75rem;
}

.checkbox-option span {
  font-size: 0.95rem;
}

/* Range Slider */
input[type="range"] {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);
  outline: none;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fbbf24;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
}

input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fbbf24;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
}

.range-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

#level-value {
  font-weight: bold;
  color: #fbbf24;
}

/* Character Counter */
.char-counter {
  text-align: right;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* Advanced Settings */
details {
  margin: 1.5rem 0;
}

summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

summary:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.primary-btn {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #1f2937;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.4);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 5% auto;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

@media (prefers-color-scheme: dark) {
  .modal-content {
    background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  opacity: 0.8;
}

.close-btn:hover {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .creative-form {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .radio-group,
  .checkbox-group {
    gap: 0.5rem;
  }
}`,
    js: `// Interactive Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('creative-form');
  const rangeSlider = document.getElementById('experience-level');
  const levelValue = document.getElementById('level-value');
  const bioTextarea = document.getElementById('bio');
  const charCount = document.getElementById('char-count');
  const previewBtn = document.getElementById('preview-btn');
  const modal = document.getElementById('preview-modal');
  const closeModal = document.getElementById('close-modal');
  const previewContent = document.getElementById('preview-content');

  // Range Slider Update
  rangeSlider.addEventListener('input', function() {
    levelValue.textContent = 'Level ' + this.value;
    // Add visual feedback based on level
    if (this.value <= 3) {
      levelValue.style.color = '#10b981'; // Green for beginner
    } else if (this.value <= 7) {
      levelValue.style.color = '#f59e0b'; // Yellow for intermediate
    } else {
      levelValue.style.color = '#ef4444'; // Red for expert
    }
  });

  // Character Counter
  bioTextarea.addEventListener('input', function() {
    const currentLength = this.value.length;
    charCount.textContent = currentLength;
    
    // Change color based on character count
    if (currentLength >= 180) {
      charCount.style.color = '#ef4444'; // Red when near limit
    } else if (currentLength >= 150) {
      charCount.style.color = '#f59e0b'; // Yellow when getting close
    } else {
      charCount.style.color = 'inherit'; // Default color
    }
  });

  // Real-time Validation
  const aiNameInput = document.getElementById('ai-name');
  aiNameInput.addEventListener('input', function() {
    const value = this.value;
    const small = this.nextElementSibling;
    
    if (value.length < 3) {
      small.textContent = 'Name too short (minimum 3 characters)';
      small.style.color = '#ef4444';
    } else if (value.length > 20) {
      small.textContent = 'Name too long (maximum 20 characters)';
      small.style.color = '#ef4444';
    } else {
      small.textContent = 'Perfect name length!';
      small.style.color = '#10b981';
    }
  });

  // Preview Modal Functionality
  previewBtn.addEventListener('click', function() {
    const formData = new FormData(form);
    const aiData = {
      name: formData.get('ai-name') || 'Unnamed AI',
      personality: formData.get('personality-type') || 'Not specified',
      communication: formData.get('communication') || 'Not specified',
      skills: formData.getAll('skills'),
      experience: formData.get('experience-level') || '5',
      responseTime: formData.get('response-time') || '500',
      language: formData.get('language') || 'English',
      bio: formData.get('bio') || 'No description provided'
    };

    // Generate preview content
    previewContent.innerHTML = \`
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🤖</div>
        <h2 style="color: #fbbf24; margin: 0 0 0.5rem 0;">\${aiData.name}</h2>
        <p style="opacity: 0.9; margin: 0;">Your Personal AI Assistant</p>
      </div>
      
      <div style="display: grid; gap: 1rem;">
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>🎭 Personality:</strong> \${aiData.personality}
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>💬 Communication:</strong> \${aiData.communication}
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>⚡ Skills:</strong> \${aiData.skills.length > 0 ? aiData.skills.join(', ') : 'None selected'}
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>📊 Experience Level:</strong> \${aiData.experience}/10
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>⏱️ Response Speed:</strong> \${aiData.responseTime}ms
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>🌍 Language:</strong> \${aiData.language}
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
          <strong>📝 Bio:</strong> \${aiData.bio}
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.2);">
        <p style="margin: 0; opacity: 0.8;">✨ Your AI Assistant is ready to go!</p>
      </div>
    \`;

    modal.style.display = 'block';
  });

  // Close Modal
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Form Submit Handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const aiName = formData.get('ai-name');
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = \`
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      z-index: 1001;
      animation: slideIn 0.3s ease;
    \`;
    successMessage.innerHTML = \`
      <strong>🎉 Success!</strong><br>
      \${aiName || 'Your AI Assistant'} has been created!
    \`;
    
    document.body.appendChild(successMessage);
    
    // Remove message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
    
    // Optional: Reset form after successful submission
    setTimeout(() => {
      if (confirm('Would you like to create another AI Assistant?')) {
        form.reset();
        levelValue.textContent = 'Level 5';
        charCount.textContent = '0';
      }
    }, 1000);
  });

  // Add animation styles
  const style = document.createElement('style');
  style.textContent = \`
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  \`;
  document.head.appendChild(style);
});`,
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Code}
        category="HTML Basics"
        title="HTML Elements and Tags"
        description="The fundamental building blocks of every web page"
        colorTheme="blue"
      />

      {/* ==================== ELEMENT ANATOMY ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600" />
            Element Anatomy
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the three parts that make up an HTML element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">&lt;tag&gt;</div>
                <p className="font-semibold text-base">Opening Tag</p>
                <p className="text-sm text-muted-foreground mt-1">Starts the element</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300 dark:border-green-700">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Content</div>
                <p className="font-semibold text-base">Content</p>
                <p className="text-sm text-muted-foreground mt-1">Text or nested elements</p>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-300 dark:border-red-700">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">&lt;/tag&gt;</div>
                <p className="font-semibold text-base">Closing Tag</p>
                <p className="text-sm text-muted-foreground mt-1">Ends the element</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-block bg-muted p-4 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                <code className="text-lg font-mono">
                  <span className="text-blue-600 dark:text-blue-400">&lt;h1&gt;</span>
                  <span className="text-foreground">Hello World</span>
                  <span className="text-red-600 dark:text-red-400">&lt;/h1&gt;</span>
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Opening Tag + Content + Closing Tag = Complete Element</p>
            </div>
          </div>

          <FrontendCodePreview
            title="Basic HTML Elements"
            description="See how opening tags, content, and closing tags work together"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic HTML Elements</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, sans-serif;
      line-height: 1.6;
      padding: 2rem;
      background: #f9fafb;
      color: #1f2937;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
        color: #e2e8f0;
      }
    }

    h1 {
      color: #3b82f6;
      border-bottom: 3px solid #3b82f6;
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
        border-bottom-color: #60a5fa;
      }
    }

    p {
      margin: 1rem 0;
    }

    strong {
      color: #dc2626;
      font-weight: 700;
    }

    @media (prefers-color-scheme: dark) {
      strong {
        color: #fca5a5;
      }
    }

    em {
      color: #059669;
      font-style: italic;
    }

    @media (prefers-color-scheme: dark) {
      em {
        color: #6ee7b7;
      }
    }

    span {
      padding: 2px 4px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This is a <strong>paragraph</strong> with some <em>emphasis</em>.</p>
  <p>Elements can be <span style="color: blue;">styled</span> and <span style="background: yellow; padding: 2px 4px;">highlighted</span>.</p>
</body>
</html>`}
            colorTheme="blue"
            icon={Code}
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />

          {/* Void Elements */}
          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-amber-600" />
              Void Elements (Self-Closing)
            </h4>
            <p className="text-base mb-3">Some elements don't have content or closing tags:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['<img />', '<br />', '<hr />', '<input />', '<meta />', '<link />'].map(tag => (
                <code key={tag} className="bg-muted px-3 py-2 rounded text-sm font-mono border text-center">
                  {tag}
                </code>
              ))}
            </div>
          </div>

          <InteractivePlayground
            title="Element Anatomy Playground"
            description="Experiment with HTML elements, see opening/closing tags, and explore self-closing elements"
            features={[
              'Element Structure',
              'Self-closing Tags',
              'Content & Styling',
              'Live Preview'
            ]}
            buttonText="Try Element Anatomy"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: anatomyExample.html,
              css: anatomyExample.css,
              js: anatomyExample.js
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* ==================== BLOCK VS INLINE ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Box className="w-6 h-6 text-purple-600" />
            Block vs Inline Elements
          </CardTitle>
          <CardDescription className="text-base">
            Understanding how elements behave on the page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Block Elements */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">Block Elements</h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Start on a new line</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Take full width available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Can contain other elements</span>
                </li>
              </ul>
              <div className="mt-4 space-y-1">
                <p className="font-semibold text-sm mb-2">Examples:</p>
                {['<div>', '<p>', '<h1>-<h6>', '<section>', '<article>', '<ul>', '<ol>'].map(tag => (
                  <code key={tag} className="inline-block bg-muted px-2 py-1 rounded text-sm font-mono mr-2 mb-1">
                    {tag}
                  </code>
                ))}
              </div>
            </div>

            {/* Inline Elements */}
            <div className="bg-purple-50 dark:bg-purple-950/20 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">Inline Elements</h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Flow within text line</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Only take necessary width</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cannot contain block elements</span>
                </li>
              </ul>
              <div className="mt-4 space-y-1">
                <p className="font-semibold text-sm mb-2">Examples:</p>
                {['<span>', '<a>', '<strong>', '<em>', '<code>', '<img>'].map(tag => (
                  <code key={tag} className="inline-block bg-muted px-2 py-1 rounded text-sm font-mono mr-2 mb-1">
                    {tag}
                  </code>
                ))}
              </div>
            </div>
          </div>

          <InteractivePlayground
            title="Block vs Inline Playground"
            description="See the difference between block and inline elements in action with visual highlighting"
            features={[
              'Block Elements',
              'Inline Elements',
              'Visual Comparison',
              'Mixed Usage'
            ]}
            buttonText="See Block vs Inline Demo"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: blockInlineExample.html,
              css: blockInlineExample.css,
              js: blockInlineExample.js
            }}
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* ==================== SEMANTIC HTML ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Network className="w-6 h-6 text-green-600" />
            Semantic HTML Elements
          </CardTitle>
          <CardDescription className="text-base">
            Elements that describe their meaning to browsers and developers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { tag: '<header>', desc: 'Introductory content, site logo, navigation', color: 'blue' },
              { tag: '<nav>', desc: 'Navigation links section', color: 'indigo' },
              { tag: '<main>', desc: 'Primary content (use once per page)', color: 'purple' },
              { tag: '<article>', desc: 'Self-contained content (blog post, card)', color: 'pink' },
              { tag: '<section>', desc: 'Thematic grouping with heading', color: 'red' },
              { tag: '<aside>', desc: 'Tangential content (sidebar, related)', color: 'orange' },
              { tag: '<footer>', desc: 'Footer content, copyright, links', color: 'amber' },
              { tag: '<figure>', desc: 'Image with caption (figcaption)', color: 'green' },
            ].map(({ tag, desc, color }) => (
              <div key={tag} className={`bg-${color}-50 dark:bg-${color}-950/20 p-4 rounded-lg border border-${color}-200 dark:border-${color}-800`}>
                <code className="text-base font-mono font-bold">{tag}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-base flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Why Use Semantic HTML?
            </h4>
            <ul className="space-y-1 text-base">
              <li>✓ Better accessibility for screen readers</li>
              <li>✓ Improved SEO (search engines understand content)</li>
              <li>✓ Easier to maintain and understand code</li>
              <li>✓ Consistent structure across projects</li>
            </ul>
          </div>

          <InteractivePlayground
            title="Semantic HTML Playground"
            description="Explore semantic HTML5 elements like header, nav, main, article, aside, and footer"
            features={[
              'Semantic Structure',
              'Page Layout',
              'Navigation',
              'Accessibility'
            ]}
            buttonText="Explore Semantic Structure"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: semanticExample.html,
              css: semanticExample.css,
              js: semanticExample.js
            }}
            colorTheme="emerald"
          />
        </CardContent>
      </Card>

      {/* ==================== ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-orange-600" />
            HTML Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Additional information that modifies elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg border">
            <code className="text-base font-mono">
              <span className="text-blue-600 dark:text-blue-400">&lt;a</span>
              {' '}
              <span className="text-orange-600 dark:text-orange-400">href</span>
              <span className="text-foreground">=</span>
              <span className="text-green-600 dark:text-green-400">"https://example.com"</span>
              {' '}
              <span className="text-orange-600 dark:text-orange-400">target</span>
              <span className="text-foreground">=</span>
              <span className="text-green-600 dark:text-green-400">"_blank"</span>
              <span className="text-blue-600 dark:text-blue-400">&gt;</span>
              <span className="text-foreground">Link</span>
              <span className="text-red-600 dark:text-red-400">&lt;/a&gt;</span>
            </code>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Global Attributes */}
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Global Attributes</h4>
              <div className="space-y-2">
                {[
                  { attr: 'id', desc: 'Unique identifier' },
                  { attr: 'class', desc: 'CSS class names' },
                  { attr: 'style', desc: 'Inline CSS styles' },
                  { attr: 'title', desc: 'Tooltip text' },
                  { attr: 'data-*', desc: 'Custom data attributes' },
                ].map(({ attr, desc }) => (
                  <div key={attr} className="bg-muted p-3 rounded">
                    <code className="text-base font-mono font-bold">{attr}</code>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Attributes */}
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Element-Specific</h4>
              <div className="space-y-2">
                {[
                  { attr: 'href', desc: 'Link destination (<a>)', elem: 'Links' },
                  { attr: 'src', desc: 'Image/script source', elem: 'Media' },
                  { attr: 'alt', desc: 'Alternative text for images', elem: 'Images' },
                  { attr: 'type', desc: 'Input or button type', elem: 'Forms' },
                  { attr: 'placeholder', desc: 'Input hint text', elem: 'Forms' },
                ].map(({ attr, desc, elem }) => (
                  <div key={attr} className="bg-muted p-3 rounded">
                    <div className="flex items-center justify-between">
                      <code className="text-base font-mono font-bold">{attr}</code>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{elem}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InteractivePlayground
            title="HTML Attributes Playground"
            description="See global attributes, link attributes, image attributes, and ARIA accessibility attributes in action"
            features={[
              'Global Attributes',
              'Link & Image',
              'Form Attributes',
              'ARIA Accessibility'
            ]}
            buttonText="Explore Attributes"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: attributesExample.html,
              css: attributesExample.css,
              js: attributesExample.js
            }}
            colorTheme="amber"
          />
        </CardContent>
      </Card>

      {/* ==================== NESTING RULES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-600" />
            Element Nesting Rules
          </CardTitle>
          <CardDescription className="text-base">
            Proper hierarchy for valid HTML structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Correct Nesting */}
            <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-4 text-green-700 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                Correct Nesting
              </h4>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded">
                  <code className="text-sm font-mono block">
                    &lt;div&gt;<br />
                    &nbsp;&nbsp;&lt;p&gt;Text&lt;/p&gt;<br />
                    &lt;/div&gt;
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">✓ Block inside block</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <code className="text-sm font-mono block">
                    &lt;p&gt;Text with &lt;strong&gt;bold&lt;/strong&gt;&lt;/p&gt;
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">✓ Inline inside block</p>
                </div>
              </div>
            </div>

            {/* Incorrect Nesting */}
            <div className="bg-red-50 dark:bg-red-950/20 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-4 text-red-700 dark:text-red-400">
                <XCircle className="w-5 h-5" />
                Incorrect Nesting
              </h4>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded">
                  <code className="text-sm font-mono block">
                    &lt;span&gt;<br />
                    &nbsp;&nbsp;&lt;div&gt;Text&lt;/div&gt;<br />
                    &lt;/span&gt;
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">✗ Block inside inline</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <code className="text-sm font-mono block">
                    &lt;p&gt;&lt;p&gt;Nested&lt;/p&gt;&lt;/p&gt;
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">✗ Paragraph in paragraph</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-base flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Key Rules
            </h4>
            <ul className="space-y-1 text-base">
              <li>• Block elements can contain block or inline elements</li>
              <li>• Inline elements can only contain inline elements</li>
              <li>• &lt;p&gt; cannot contain block elements</li>
              <li>• Always close tags in reverse order of opening</li>
            </ul>
          </div>

          <InteractivePlayground
            title="Element Nesting Playground"
            description="Understand proper HTML nesting with valid and invalid examples"
            features={[
              'Proper Nesting',
              'Parent-Child Rules',
              'Common Mistakes',
              'Best Practices'
            ]}
            buttonText="See Nesting Example"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: nestingExample.html,
              css: nestingExample.css,
              js: nestingExample.js
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* ==================== COMMON ELEMENT CATEGORIES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Box className="w-6 h-6 text-purple-600" />
            Common Element Categories
          </CardTitle>
          <CardDescription className="text-base">
            Essential HTML elements organized by purpose
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Text Content */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <Type className="w-5 h-5 text-blue-600" />
                Text Content
              </h4>
              <div className="space-y-1">
                {['h1-h6', 'p', 'span', 'strong', 'em', 'mark', 'code'].map(tag => (
                  <code key={tag} className="block bg-muted px-2 py-1 rounded text-sm font-mono">
                    &lt;{tag}&gt;
                  </code>
                ))}
              </div>
            </div>

            {/* Lists */}
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <List className="w-5 h-5 text-green-600" />
                Lists
              </h4>
              <div className="space-y-1">
                {['ul', 'ol', 'li', 'dl', 'dt', 'dd'].map(tag => (
                  <code key={tag} className="block bg-muted px-2 py-1 rounded text-sm font-mono">
                    &lt;{tag}&gt;
                  </code>
                ))}
              </div>
            </div>

            {/* Links & Media */}
            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <Image className="w-5 h-5 text-purple-600" />
                Links & Media
              </h4>
              <div className="space-y-1">
                {['a', 'img', 'video', 'audio', 'picture', 'source'].map(tag => (
                  <code key={tag} className="block bg-muted px-2 py-1 rounded text-sm font-mono">
                    &lt;{tag}&gt;
                  </code>
                ))}
              </div>
            </div>

            {/* Forms */}
            <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <FormInput className="w-5 h-5 text-orange-600" />
                Forms
              </h4>
              <div className="space-y-1">
                {['form', 'input', 'button', 'select', 'textarea', 'label'].map(tag => (
                  <code key={tag} className="block bg-muted px-2 py-1 rounded text-sm font-mono">
                    &lt;{tag}&gt;
                  </code>
                ))}
              </div>
            </div>

            {/* Tables */}
            <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <Table className="w-5 h-5 text-pink-600" />
                Tables
              </h4>
              <div className="space-y-1">
                {['table', 'thead', 'tbody', 'tr', 'th', 'td'].map(tag => (
                  <code key={tag} className="block bg-muted px-2 py-1 rounded text-sm font-mono">
                    &lt;{tag}&gt;
                  </code>
                ))}
              </div>
            </div>

            {/* Semantic */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-indigo-600" />
                Semantic
              </h4>
              <div className="space-y-1">
                {['header', 'nav', 'main', 'article', 'section', 'footer'].map(tag => (
                  <code key={tag} className="block bg-muted px-2 py-1 rounded text-sm font-mono">
                    &lt;{tag}&gt;
                  </code>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==================== FORMS EXAMPLE ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FormInput className="w-6 h-6 text-orange-600" />
            Form Elements
          </CardTitle>
          <CardDescription className="text-base">
            Interactive elements for user input
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { tag: '<input>', desc: 'Single-line text input (various types)' },
              { tag: '<textarea>', desc: 'Multi-line text input' },
              { tag: '<select>', desc: 'Dropdown selection list' },
              { tag: '<button>', desc: 'Clickable button' },
              { tag: '<label>', desc: 'Input label for accessibility' },
              { tag: '<fieldset>', desc: 'Group related form controls' },
            ].map(({ tag, desc }) => (
              <div key={tag} className="bg-muted p-3 rounded border">
                <code className="text-base font-mono font-bold">{tag}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <InteractivePlayground
            title="Interactive Form Playground"
            description="Build and test forms with various input types, labels, validation, and submit handling"
            features={[
              'Form Elements',
              'Input Types',
              'Validation',
              'Submit Handling'
            ]}
            buttonText="Try Interactive Form"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: formsExample.html,
              css: formsExample.css,
              js: formsExample.js
            }}
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* ==================== ELEMENTS IN PRACTICE ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Code className="w-6 h-6 text-indigo-600" />
            HTML Elements in Practice
          </CardTitle>
          <CardDescription className="text-base">
            See how different HTML elements work together to create a real webpage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Complete Webpage Example"
            description="A practical example showing semantic HTML, headings, paragraphs, lists, images, and links working together"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Post - HTML Elements</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
    @media (prefers-color-scheme: dark) { body { color: #e2e8f0; background: #1e293b; } }
    header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    header h1 { font-size: 2rem; margin-bottom: 1rem; }
    nav { display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; flex-wrap: wrap; }
    nav a { color: white; text-decoration: none; font-weight: 500; }
    nav a:hover { opacity: 0.8; text-decoration: underline; }
    main { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; }
    article { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    @media (prefers-color-scheme: dark) { article { background: #334155; box-shadow: 0 2px 8px rgba(0,0,0,0.3); } }
    article h2 { color: #667eea; font-size: 2rem; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { article h2 { color: #93a5fa; } }
    article h3 { color: #764ba2; font-size: 1.5rem; margin: 1.5rem 0 1rem; }
    @media (prefers-color-scheme: dark) { article h3 { color: #c084fc; } }
    .meta { color: #666; font-size: 0.9rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #f0f0f0; }
    @media (prefers-color-scheme: dark) { .meta { color: #94a3b8; border-bottom-color: #475569; } }
    article p { margin-bottom: 1rem; }
    figure { margin: 2rem 0; }
    figure img { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
    figcaption { text-align: center; font-style: italic; color: #666; margin-top: 0.5rem; font-size: 0.9rem; }
    @media (prefers-color-scheme: dark) { figcaption { color: #94a3b8; } }
    ul, ol { margin-left: 2rem; margin-bottom: 1rem; }
    li { margin-bottom: 0.5rem; }
    blockquote { background: #f9f9f9; border-left: 4px solid #667eea; padding: 1rem 1.5rem; margin: 2rem 0; font-style: italic; color: #555; }
    @media (prefers-color-scheme: dark) { blockquote { background: #1e293b; border-left-color: #93a5fa; color: #cbd5e1; } }
    cite { display: block; text-align: right; margin-top: 0.5rem; font-size: 0.9rem; color: #888; }
    @media (prefers-color-scheme: dark) { cite { color: #94a3b8; } }
    article a { color: #667eea; text-decoration: none; font-weight: 500; }
    @media (prefers-color-scheme: dark) { article a { color: #93a5fa; } }
    article a:hover { text-decoration: underline; }
    aside { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); height: fit-content; }
    @media (prefers-color-scheme: dark) { aside { background: #334155; box-shadow: 0 2px 8px rgba(0,0,0,0.3); } }
    aside h3 { color: #764ba2; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { aside h3 { color: #c084fc; } }
    aside ul { list-style: none; margin-left: 0; }
    aside li { margin-bottom: 0.75rem; }
    aside a { color: #667eea; text-decoration: none; }
    @media (prefers-color-scheme: dark) { aside a { color: #93a5fa; } }
    aside a:hover { text-decoration: underline; }
    footer { background: #2d3748; color: white; text-align: center; padding: 2rem; margin-top: 2rem; }
    @media (prefers-color-scheme: dark) { footer { background: #0c1425; } }
    footer p { margin-bottom: 0.5rem; }
    small { font-size: 0.85rem; opacity: 0.8; }
    @media (max-width: 768px) { main { grid-template-columns: 1fr; } header h1 { font-size: 1.5rem; } nav { gap: 1rem; } }
  </style>
</head>
<body>
  <header>
    <h1>🌐 Web Development Blog</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#articles">Articles</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Understanding HTML Elements</h2>
      <p class="meta"><time datetime="2025-01-15">January 15, 2025</time> • <span>By John Doe</span></p>
      <p><strong>HTML elements</strong> are the foundation of web development. They provide <em>structure</em> and <em>meaning</em> to your content.</p>
      <figure>
        <img src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg" alt="Professional web development image" width="600" height="300" />
        <figcaption>Figure 1: Professional web development</figcaption>
      </figure>
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Semantic HTML</strong> - Using meaningful tags</li>
        <li><strong>Accessibility</strong> - Making content available to all</li>
        <li><strong>SEO</strong> - Helping search engines understand content</li>
      </ul>
      <h3>Common Elements</h3>
      <ol>
        <li>Headings (h1-h6) for titles and sections</li>
        <li>Paragraphs (p) for text content</li>
        <li>Lists (ul, ol, li) for grouped items</li>
        <li>Links (a) for navigation</li>
        <li>Images (img) for visuals</li>
      </ol>
      <blockquote>
        "The best way to learn HTML is by building real projects and experimenting with different elements."
        <cite>- Web Developer's Handbook</cite>
      </blockquote>
      <p>For more information, visit <a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a> or check out <a href="https://www.w3.org" target="_blank" rel="noopener">W3C Standards</a>.</p>
    </article>

    <aside>
      <h3>📚 Related Articles</h3>
      <ul>
        <li><a href="#">CSS Styling Basics</a></li>
        <li><a href="#">JavaScript Fundamentals</a></li>
        <li><a href="#">Responsive Design</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Web Dev Blog. All rights reserved.</p>
    <p><small>Built with HTML, CSS, and JavaScript</small></p>
  </footer>
</body>
</html>`}
            colorTheme="blue"
            previewHeight="850px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* ==================== ACCESSIBILITY ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-green-600" />
            Accessibility Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Making your HTML accessible to everyone
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-base mb-3">Essential Practices</h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Use semantic HTML elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Add alt text to all images</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Label all form inputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Use proper heading hierarchy</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-base mb-3">ARIA Attributes</h4>
              <div className="space-y-2">
                {[
                  { attr: 'aria-label', desc: 'Accessible name' },
                  { attr: 'aria-labelledby', desc: 'References label element' },
                  { attr: 'aria-describedby', desc: 'Additional description' },
                  { attr: 'role', desc: 'Element purpose' },
                ].map(({ attr, desc }) => (
                  <div key={attr} className="bg-muted p-2 rounded">
                    <code className="text-sm font-mono font-bold">{attr}</code>
                    <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==================== CHOOSING THE RIGHT ELEMENT ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600" />
            Choosing the Right Element
          </CardTitle>
          <CardDescription className="text-base">
            Match your content and behavior to the most semantic HTML tag
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                <Type className="w-5 h-5 text-blue-600" />
                Text emphasis
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use semantic emphasis instead of purely visual tags.
              </p>
              <ul className="text-sm space-y-1">
                <li><span className="font-semibold">&lt;strong&gt;</span> — important, high-priority text.</li>
                <li><span className="font-semibold">&lt;em&gt;</span> — stress emphasis, changes meaning.</li>
                <li><span className="font-semibold">Avoid:</span> using &lt;b&gt; / &lt;i&gt; just for styling.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                <Box className="w-5 h-5 text-emerald-600" />
                Navigation vs actions
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Choose between links and buttons based on behavior.
              </p>
              <ul className="text-sm space-y-1">
                <li><span className="font-semibold">&lt;a&gt;</span> — go to another URL or section.</li>
                <li><span className="font-semibold">&lt;button&gt;</span> — trigger an in-page action.</li>
                <li><span className="font-semibold">Avoid:</span> using buttons for navigation-only links.</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                <List className="w-5 h-5 text-amber-600" />
                Lists or paragraphs?
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Repeated, related items belong in lists, not separate paragraphs.
              </p>
              <ul className="text-sm space-y-1">
                <li>Use <span className="font-semibold">&lt;ul&gt;</span> / <span className="font-semibold">&lt;ol&gt;</span> for sets of options or steps.</li>
                <li>Use <span className="font-semibold">&lt;p&gt;</span> for flowing prose.</li>
                <li><span className="font-semibold">Avoid:</span> many short paragraphs acting like bullets.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
              <span className="uppercase tracking-wide">elements-in-practice.html</span>
              <span className="text-slate-500 dark:text-slate-300">Better element choices</span>
            </div>
            <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{`<!-- Good: button for an in-page action -->
<button type="button" data-action="open-modal">
  Open settings
</button>

<!-- Good: link for navigation -->
<a href="/settings">
  Go to settings page
</a>

<!-- Good: semantic emphasis -->
<p>
  Please <strong>save your work</strong> before you continue.
</p>

<!-- Good: real list instead of repeated paragraphs -->
<ul>
  <li>Download the starter project</li>
  <li>Run <code>npm install</code></li>
  <li>Start the dev server</li>
</ul>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* ==================== QUICK REFERENCE ==================== */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl">🎯 Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Remember</h4>
              <ul className="text-sm space-y-1">
                <li>• Element = Tag + Content</li>
                <li>• Always close tags</li>
                <li>• Use semantic HTML</li>
                <li>• Nest properly</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Avoid</h4>
              <ul className="text-sm space-y-1">
                <li>• Divs for everything</li>
                <li>• Missing alt text</li>
                <li>• Inline inside block wrong</li>
                <li>• Skipping heading levels</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Best Practices</h4>
              <ul className="text-sm space-y-1">
                <li>• Validate your HTML</li>
                <li>• Test accessibility</li>
                <li>• Use proper attributes</li>
                <li>• Keep it simple</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
