'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code, Play, Layers, Box, Type, List, Image,
  FormInput, Table, Network, Accessibility,
  AlertCircle, CheckCircle, XCircle, Info
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function HtmlElementsAndTags({
  onOpenWebPlayground
}: {
  onOpenWebPlayground: (html: string, css: string, js: string) => void;
}) {

  // ==================== PLAYGROUND EXAMPLES ====================

  const anatomyExample = {
    html: `<!-- Opening Tag + Content + Closing Tag = Element -->
<h1>Welcome to HTML</h1>
<p>This is a paragraph with <strong>bold text</strong> inside.</p>

<!-- Self-closing (void) elements -->
<img src="https://via.placeholder.com/200" alt="Demo image" />
<br />
<hr />`,
    css: `body { font-family: system-ui, sans-serif; padding: 2rem; line-height: 1.6; }
h1 { color: #2563eb; }
p { font-size: 1rem; }
strong { color: #dc2626; }
img { border-radius: 8px; margin: 1rem 0; }`,
    js: ''
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
    css: `body { font-family: system-ui, sans-serif; margin: 0; line-height: 1.6; }
header, footer { background: #1e40af; color: white; padding: 1.5rem; text-align: center; }
nav a { color: white; text-decoration: none; padding: 0 0.5rem; }
nav a:hover { text-decoration: underline; }
main { display: flex; gap: 2rem; padding: 2rem; max-width: 1200px; margin: 0 auto; }
article { flex: 2; }
aside { flex: 1; background: #f3f4f6; padding: 1.5rem; border-radius: 8px; }
figure { margin: 1rem 0; }
figcaption { font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem; }`,
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
    css: `.block { background: #dbeafe; padding: 1rem; margin: 0.5rem 0; border-left: 4px solid #3b82f6; }
.inline { background: #fef3c7; padding: 0.25rem 0.5rem; border-radius: 4px; }
.container { background: #f3f4f6; padding: 1rem; margin-top: 1rem; border-radius: 8px; }
code { background: #fee2e2; padding: 0.125rem 0.25rem; border-radius: 3px; font-family: monospace; }`,
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
    css: `.container { padding: 1.5rem; background: #f9fafb; border: 2px solid #e5e7eb; border-radius: 8px; }
a { color: #2563eb; text-decoration: none; display: inline-block; margin: 0.5rem 0; }
a:hover { text-decoration: underline; }
img { display: block; border-radius: 8px; margin: 1rem 0; }
input { padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; width: 100%; margin: 1rem 0; }
button { background: #3b82f6; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; }
button:hover { background: #2563eb; }`,
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
    css: `body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 1rem; }
header { background: #1e40af; color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; }
nav ul { list-style: none; padding: 0; display: flex; gap: 1rem; }
nav a { color: white; text-decoration: none; }
article { background: #f9fafb; padding: 1.5rem; border-radius: 8px; }
section { margin-top: 1rem; padding: 1rem; background: white; border-left: 4px solid #3b82f6; }`,
    js: ''
  };

  const formsExample = {
    html: `<form id="demo-form">
  <fieldset>
    <legend>User Registration</legend>
    
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="120" />
    
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">Select...</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
    
    <label>
      <input type="checkbox" name="terms" required />
      I agree to terms
    </label>
    
    <button type="submit">Submit</button>
  </fieldset>
</form>`,
    css: `form { max-width: 500px; margin: 2rem auto; }
fieldset { border: 2px solid #e5e7eb; border-radius: 8px; padding: 1.5rem; }
legend { font-weight: bold; padding: 0 0.5rem; color: #1e40af; }
label { display: block; margin-top: 1rem; font-weight: 500; }
input, select { width: 100%; padding: 0.5rem; margin-top: 0.25rem; border: 1px solid #d1d5db; border-radius: 4px; }
button { margin-top: 1rem; padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; }
button:hover { background: #2563eb; }`,
    js: `document.getElementById('demo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted! (This is a demo)');
});`
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

          <Button onClick={() => onOpenWebPlayground(anatomyExample.html, anatomyExample.css, anatomyExample.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Element Anatomy
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(blockInlineExample.html, blockInlineExample.css, blockInlineExample.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> See Block vs Inline Demo
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(semanticExample.html, semanticExample.css, semanticExample.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Explore Semantic Structure
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(attributesExample.html, attributesExample.css, attributesExample.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Explore Attributes
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(nestingExample.html, nestingExample.css, nestingExample.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> See Nesting Example
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(formsExample.html, formsExample.css, formsExample.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Interactive Form
          </Button>
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

