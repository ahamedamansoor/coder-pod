'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Settings, Play, Fingerprint, Tags, Type, Link2,
  Image, FormInput, MousePointer, Accessibility,
  Database, Eye, CheckCircle, Info, AlertCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function HtmlAttributes({
  onOpenWebPlaygroundAction,
  onOpenWebPlayground
}: {
  onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}) {
  const openPlayground = (html: string, css: string, js: string) => {
    (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);
  };

  // ==================== PLAYGROUND EXAMPLES ====================

  const globalAttributesDemo = {
    html: `<!-- Global Attributes Demo -->
<div id="main-container" class="container primary" title="Main content area">
  <h1 id="page-title" class="title">Understanding Attributes</h1>
  <p class="intro highlight" style="font-size: 1.2rem;">
    This paragraph uses multiple global attributes.
  </p>
  
  <!-- Custom Data Attributes -->
  <button 
    id="action-btn"
    class="btn primary"
    data-user-id="12345"
    data-action="submit"
    data-track="click-event"
    title="Click to submit">
    Submit Form
  </button>
  
  <!-- Lang and Dir -->
  <p lang="es" dir="ltr">Hola Mundo!</p>
  <p lang="ar" dir="rtl">مرحبا بالعالم</p>
</div>`,
    css: `#main-container { padding: 2rem; background: #f9fafb; border-radius: 8px; }
#page-title { color: #1e40af; margin-bottom: 1rem; }
.container { max-width: 800px; margin: 0 auto; }
.intro { font-style: italic; }
.highlight { background: #fef3c7; padding: 0.5rem; border-left: 4px solid #f59e0b; }
.btn { padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
.primary { background: #3b82f6; color: white; }
.btn:hover { background: #2563eb; }
[title] { position: relative; }`,
    js: `const btn = document.getElementById('action-btn');
btn.addEventListener('click', function() {
  const userId = this.dataset.userId;
  const action = this.dataset.action;
  alert('User ID: ' + userId + '\\nAction: ' + action);
});`
  };

  const linkAttributesDemo = {
    html: `<!-- Link Attributes -->
<nav>
  <!-- Hidden anchor targets placed before usage -->
  <section id="home" hidden></section>
  <section id="about" hidden></section>
  <section id="contact" hidden></section>
  
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    External Site (New Tab)
  </a>
  
  <a href="#section1">Jump to Section 1</a>
  
  <a href="mailto:info@example.com">Email Us</a>
  
  <a href="tel:+1234567890">Call: (123) 456-7890</a>
  
  <!-- <a href="document.pdf" download="my-document.pdf">Download PDF</a> -->
</nav>

<section id="section1">
  <h2>Section 1 Content</h2>
  <p>You jumped here from the navigation link!</p>
</section>`,
    css: `nav { background: #1e40af; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
a { color: white; text-decoration: none; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 4px; display: inline-block; }
a:hover { background: rgba(255,255,255,0.2); }
section { margin-top: 2rem; padding: 2rem; background: #f3f4f6; border-radius: 8px; }`,
    js: ''
  };

  const imageAttributesDemo = {
    html: `<!-- Image Attributes -->
<div class="image-gallery">
  <!-- Basic Image -->
  <img 
    src="https://via.placeholder.com/300x200/3b82f6/ffffff?text=Basic+Image"
    alt="Basic placeholder image"
    width="300"
    height="200"
  />
  
  <!-- Lazy Loading -->
  <img 
    src="https://via.placeholder.com/300x200/10b981/ffffff?text=Lazy+Loaded"
    alt="Lazy loaded image"
    loading="lazy"
    width="300"
    height="200"
  />
  
  <!-- Responsive with srcset -->
  <img 
    src="https://via.placeholder.com/400x300"
    srcset=""
    sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
    alt="Responsive image"
  />
</div>`,
    css: `.image-gallery { display: flex; flex-wrap: wrap; gap: 1rem; padding: 1rem; background: #f9fafb; border-radius: 8px; }
img { border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 100%; height: auto; }`,
    js: ''
  };

  const formAttributesDemo = {
    html: `<form id="demo-form">
  <!-- Text Input -->
  <label for="username">Username:</label>
  <input 
    type="text" 
    id="username" 
    name="username" 
    placeholder="Enter your username"
    required
    minlength="3"
    maxlength="20"
    autocomplete="username"
  />
  
  <!-- Email Input -->
  <label for="email">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="you@example.com"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
  />
  
  <!-- Number Input -->
  <label for="age">Age:</label>
  <input 
    type="number" 
    id="age" 
    name="age" 
    min="1" 
    max="120"
    step="1"
    value="25"
  />
  
  <!-- Select Dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country" required>
    <option value="">Select...</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
  
  <!-- Checkbox -->
  <label>
    <input type="checkbox" name="terms" required />
    I agree to the terms
  </label>
  
  <!-- Radio Buttons -->
  <fieldset>
    <legend>Subscription:</legend>
    <label><input type="radio" name="plan" value="free" checked /> Free</label>
    <label><input type="radio" name="plan" value="pro" /> Pro</label>
  </fieldset>
  
  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea 
    id="message" 
    name="message" 
    rows="4"
    placeholder="Your message here..."
    maxlength="500"
  ></textarea>
  
  <!-- Submit Button -->
  <button type="submit">Submit Form</button>
  <button type="reset">Reset</button>
</form>`,
    css: `form { max-width: 500px; margin: 0 auto; padding: 2rem; background: #f9fafb; border-radius: 8px; }
label { display: block; margin-top: 1rem; font-weight: 600; color: #374151; }
input, select, textarea { width: 100%; padding: 0.5rem; margin-top: 0.25rem; border: 1px solid #d1d5db; border-radius: 4px; font-size: 1rem; }
input:focus, select:focus, textarea:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
fieldset { border: 1px solid #d1d5db; border-radius: 4px; padding: 1rem; margin-top: 1rem; }
legend { font-weight: 600; padding: 0 0.5rem; }
button { margin-top: 1rem; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; margin-right: 0.5rem; }
button[type="submit"] { background: #3b82f6; color: white; }
button[type="reset"] { background: #6b7280; color: white; }
button:hover { opacity: 0.9; }`,
    js: `document.getElementById('demo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted! Check console for data.');
  console.log('Form Data:', new FormData(this));
});`
  };

  const ariaAttributesDemo = {
    html: `<!-- ARIA Attributes for Accessibility -->\n<nav aria-label="Main navigation">\n  <button \n    aria-expanded="false" \n    aria-controls="menu"\n    id="menu-btn"\n  >\n    Toggle Menu\n  </button>\n  \n  <ul id="menu" hidden>\n    <li><span>Home</span></li>\n    <li><span>About</span></li>\n    <li><span>Contact</span></li>\n  </ul>\n</nav>\n\n<!-- Anchor targets removed for demo simplicity -->\n\n<div role="alert" aria-live="polite" id="status" class="sr-only"></div>\n\n<form>\n  <label for="search-input">Search:</label>\n  <input \n    type="text" \n    id="search-input"\n    aria-label="Search our website"\n    aria-describedby="search-hint"\n  />\n  <div id="search-hint" class="hint">\n    Enter keywords to search\n  </div>\n  \n  <button \n    type="button"\n    aria-pressed="false"\n    id="toggle-btn"\n  >\n    Toggle Feature\n  </button>\n</form>`,
    css: `nav { background: #1e40af; padding: 1rem; color: white; }
button { padding: 0.5rem 1rem; margin: 0.5rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; }
button:hover { background: #2563eb; }
button[aria-expanded="true"] { background: #10b981; }
ul { list-style: none; padding: 1rem 0; }
a { color: white; text-decoration: none; }
.hint { font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }`,
    js: `const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const status = document.getElementById('status');

menuBtn.addEventListener('click', function() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  menu.hidden = expanded;
  status.textContent = expanded ? 'Menu collapsed' : 'Menu expanded';
});

document.getElementById('toggle-btn').addEventListener('click', function() {
  const pressed = this.getAttribute('aria-pressed') === 'true';
  this.setAttribute('aria-pressed', !pressed);
  this.textContent = pressed ? 'Toggle Feature' : 'Feature Active';
});`
  };

  const eventAttributesDemo = {
    html: `<!-- Event Attributes -->
<div class="event-demo">
  <button onclick="alert('Clicked!')">
    Click Me
  </button>
  
  <input 
    type="text" 
    onkeyup="this.nextElementSibling.textContent = 'You typed: ' + this.value"
    placeholder="Type something..."
  />
  <p class="output"></p>
  
  <div 
    onmouseover="this.style.background='#3b82f6'" 
    onmouseout="this.style.background='#e5e7eb'"
    class="hover-box"
  >
    Hover over me!
  </div>
  
  <form onsubmit="alert('Form submitted!'); return false;">
    <input type="text" placeholder="Enter text" required />
    <button type="submit">Submit</button>
  </form>
</div>`,
    css: `.event-demo { padding: 2rem; background: #f9fafb; border-radius: 8px; }
button { padding: 0.75rem 1.5rem; margin: 0.5rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; }
input { padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; margin: 0.5rem; }
.output { margin-top: 0.5rem; padding: 0.5rem; background: #fef3c7; border-radius: 4px; min-height: 1.5rem; }
.hover-box { padding: 2rem; margin: 1rem 0; background: #e5e7eb; border-radius: 8px; text-align: center; font-weight: 600; transition: background 0.3s; }`,
    js: ''
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="HTML Basics"
        title="HTML Attributes"
        description="Customizing your HTML elements with extra information and features"
        colorTheme="blue"
      />

      {/* ==================== ATTRIBUTE SYNTAX ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-blue-600" />
            Attribute Syntax
          </CardTitle>
          <CardDescription className="text-base">
            Understanding how to write and use HTML attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Syntax Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
            <div className="text-center mb-4">
              <h4 className="font-bold text-lg mb-3">Complete Attribute Structure</h4>
              <div className="bg-muted p-6 rounded-lg inline-block">
                <code className="text-lg font-mono">
                  <span className="text-blue-600 dark:text-blue-400">&lt;element</span>
                  {' '}
                  <span className="text-orange-600 dark:text-orange-400">attribute</span>
                  <span className="text-foreground">=</span>
                  <span className="text-green-600 dark:text-green-400">"value"</span>
                  <span className="text-blue-600 dark:text-blue-400">&gt;</span>
                  <span className="text-foreground">content</span>
                  <span className="text-red-600 dark:text-red-400">&lt;/element&gt;</span>
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg border-2 border-orange-300 dark:border-orange-700 text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">attribute</div>
                <p className="text-sm font-semibold">Name</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900/30 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-center">
                <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">=</div>
                <p className="text-sm font-semibold">Equals Sign</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300 dark:border-green-700 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">"value"</div>
                <p className="text-sm font-semibold">Value in Quotes</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border-2 border-purple-300 dark:border-purple-700 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Multiple</div>
                <p className="text-sm font-semibold">Separate with Space</p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Correct Usage
              </h4>
              <div className="space-y-2 text-sm">
                <code className="block bg-muted p-2 rounded font-mono">
                  &lt;a href="page.html"&gt;Link&lt;/a&gt;
                </code>
                <code className="block bg-muted p-2 rounded font-mono">
                  &lt;img src="photo.jpg" alt="Photo"&gt;
                </code>
                <code className="block bg-muted p-2 rounded font-mono">
                  &lt;div class="main container"&gt;
                </code>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Common Mistakes
              </h4>
              <div className="space-y-2 text-sm">
                <code className="block bg-muted p-2 rounded font-mono text-red-600">
                  &lt;a href=page.html&gt; {/* Missing quotes */}
                </code>
                <code className="block bg-muted p-2 rounded font-mono text-red-600">
                  &lt;img src = "photo.jpg"&gt; {/* Spaces around = */}
                </code>
                <code className="block bg-muted p-2 rounded font-mono text-red-600">
                  &lt;div CLASS="main"&gt; {/* Uppercase */}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==================== GLOBAL ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Tags className="w-6 h-6 text-purple-600" />
            Global Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Attributes that work on any HTML element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* ID */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3 mb-3">
                <Fingerprint className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">id</h4>
                  <p className="text-sm text-muted-foreground">Unique identifier for an element</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• CSS styling: <code className="bg-background px-1 rounded">#main</code></li>
                  <li>• JavaScript selection</li>
                  <li>• Link anchors: <code className="bg-background px-1 rounded">#section1</code></li>
                  <li>• Form label association</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;div id="header"&gt;...&lt;/div&gt;
                </code>
              </div>
            </div>

            {/* Class */}
            <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3 mb-3">
                <Tags className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">class</h4>
                  <p className="text-sm text-muted-foreground">One or more class names (space-separated)</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• CSS styling: <code className="bg-background px-1 rounded">.btn</code></li>
                  <li>• JavaScript selection</li>
                  <li>• Multiple classes allowed</li>
                  <li>• Reusable across elements</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;p class="text intro highlight"&gt;
                </code>
              </div>
            </div>

            {/* Style */}
            <div className="bg-purple-50 dark:bg-purple-950/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-3 mb-3">
                <Type className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">style</h4>
                  <p className="text-sm text-muted-foreground">Inline CSS styles</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Quick styling</li>
                  <li>• Dynamic styles</li>
                  <li>• Highest CSS specificity</li>
                  <li>• Avoid for maintainability</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;p style="color: blue; font-size: 16px;"&gt;
                </code>
              </div>
            </div>

            {/* Title */}
            <div className="bg-orange-50 dark:bg-orange-950/20 p-5 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-start gap-3 mb-3">
                <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">title</h4>
                  <p className="text-sm text-muted-foreground">Tooltip text on hover</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Additional information</li>
                  <li>• Abbreviation explanations</li>
                  <li>• Icon descriptions</li>
                  <li>• Link previews</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;abbr title="World Wide Web"&gt;WWW&lt;/abbr&gt;
                </code>
              </div>
            </div>

            {/* Data Attributes */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start gap-3 mb-3">
                <Database className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">data-*</h4>
                  <p className="text-sm text-muted-foreground">Custom data attributes</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Store custom data</li>
                  <li>• JavaScript access via dataset</li>
                  <li>• Any name after data-</li>
                  <li>• Configuration values</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;div data-user-id="123" data-role="admin"&gt;
                </code>
              </div>
            </div>

            {/* Lang & Dir */}
            <div className="bg-pink-50 dark:bg-pink-950/20 p-5 rounded-lg border border-pink-200 dark:border-pink-800">
              <div className="flex items-start gap-3 mb-3">
                <Eye className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">lang & dir</h4>
                  <p className="text-sm text-muted-foreground">Language and text direction</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Screen readers</li>
                  <li>• Search engines</li>
                  <li>• dir: ltr (left-right) or rtl</li>
                  <li>• lang: ISO language codes</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;p lang="es" dir="ltr"&gt;Hola&lt;/p&gt;
                </code>
              </div>
            </div>
          </div>

          <Button onClick={() => openPlayground(globalAttributesDemo.html, globalAttributesDemo.css, globalAttributesDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Explore Global Attributes
          </Button>
        </CardContent>
      </Card>

      {/* ==================== LINK ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Link2 className="w-6 h-6 text-blue-600" />
            Link Attributes (&lt;a&gt;)
          </CardTitle>
          <CardDescription className="text-base">
            Attributes for hyperlinks and navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'href', desc: 'URL destination (required)', example: 'href="https://example.com"' },
              { attr: 'target', desc: '_blank (new tab), _self (same tab)', example: 'target="_blank"' },
              { attr: 'rel', desc: 'Relationship: noopener, noreferrer, nofollow', example: 'rel="noopener noreferrer"' },
              { attr: 'download', desc: 'Downloads link instead of navigating', example: 'download="file.pdf"' },
              { attr: 'hreflang', desc: 'Language of linked document', example: 'hreflang="es"' },
              { attr: 'type', desc: 'MIME type of linked resource', example: 'type="application/pdf"' },
            ].map(({ attr, desc, example }) => (
              <div key={attr} className="bg-muted p-4 rounded-lg border">
                <code className="text-base font-mono font-bold text-blue-600">{attr}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <code className="text-sm bg-background px-2 py-1 rounded mt-2 inline-block font-mono">{example}</code>
              </div>
            ))}
          </div>

          <Button onClick={() => openPlayground(linkAttributesDemo.html, linkAttributesDemo.css, linkAttributesDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Link Attributes
          </Button>
        </CardContent>
      </Card>

      {/* ==================== IMAGE ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Image className="w-6 h-6 text-green-600" />
            Image Attributes (&lt;img&gt;)
          </CardTitle>
          <CardDescription className="text-base">
            Essential attributes for images
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'src', desc: 'Image source URL (required)', example: 'src="photo.jpg"', required: true },
              { attr: 'alt', desc: 'Alternative text for accessibility (required)', example: 'alt="Sunset photo"', required: true },
              { attr: 'width', desc: 'Image width in pixels', example: 'width="300"', required: false },
              { attr: 'height', desc: 'Image height in pixels', example: 'height="200"', required: false },
              { attr: 'loading', desc: 'lazy (defer), eager (immediate)', example: 'loading="lazy"', required: false },
              { attr: 'srcset', desc: 'Responsive image sources', example: 'srcset="img-400.jpg 400w"', required: false },
              { attr: 'sizes', desc: 'Image sizes for different viewports', example: 'sizes="(max-width: 600px) 100vw"', required: false },
              { attr: 'decoding', desc: 'async, sync, auto', example: 'decoding="async"', required: false },
            ].map(({ attr, desc, example, required }) => (
              <div key={attr} className={`bg-muted p-4 rounded-lg border ${required ? 'border-red-300 dark:border-red-800' : ''}`}>
                <div className="flex items-center gap-2">
                  <code className="text-base font-mono font-bold text-green-600">{attr}</code>
                  {required && <span className="text-sm bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded font-semibold">REQUIRED</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <code className="text-sm bg-background px-2 py-1 rounded mt-2 inline-block font-mono">{example}</code>
              </div>
            ))}
          </div>

          <Button onClick={() => openPlayground(imageAttributesDemo.html, imageAttributesDemo.css, imageAttributesDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> See Image Attributes
          </Button>
        </CardContent>
      </Card>

      {/* ==================== FORM ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FormInput className="w-6 h-6 text-orange-600" />
            Form & Input Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Attributes for interactive form elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Attributes */}
          <div>
            <h4 className="font-bold text-lg mb-3">&lt;form&gt; Attributes</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { attr: 'action', desc: 'URL to submit form data', example: 'action="/submit"' },
                { attr: 'method', desc: 'GET or POST', example: 'method="post"' },
                { attr: 'enctype', desc: 'Encoding type for file uploads', example: 'enctype="multipart/form-data"' },
                { attr: 'autocomplete', desc: 'on or off', example: 'autocomplete="off"' },
                { attr: 'novalidate', desc: 'Skip HTML5 validation', example: 'novalidate' },
                { attr: 'target', desc: 'Where to display response', example: 'target="_blank"' },
              ].map(({ attr, desc, example }) => (
                <div key={attr} className="bg-muted p-3 rounded text-sm">
                  <code className="font-mono font-bold">{attr}</code>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  <code className="text-sm bg-background px-1.5 py-0.5 rounded mt-1 inline-block font-mono">{example}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Input Attributes */}
          <div>
            <h4 className="font-bold text-lg mb-3">&lt;input&gt; Attributes</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { attr: 'type', desc: 'text, email, password, number, etc.', example: 'type="email"' },
                { attr: 'name', desc: 'Form field name (required)', example: 'name="username"' },
                { attr: 'value', desc: 'Initial/default value', example: 'value="default"' },
                { attr: 'placeholder', desc: 'Hint text', example: 'placeholder="Enter email"' },
                { attr: 'required', desc: 'Field must be filled', example: 'required' },
                { attr: 'disabled', desc: 'Field cannot be edited', example: 'disabled' },
                { attr: 'readonly', desc: 'Can view but not edit', example: 'readonly' },
                { attr: 'min / max', desc: 'Range for numbers/dates', example: 'min="1" max="100"' },
                { attr: 'minlength / maxlength', desc: 'Text length constraints', example: 'maxlength="50"' },
                { attr: 'pattern', desc: 'Regex validation', example: 'pattern="[0-9]{3}"' },
                { attr: 'autocomplete', desc: 'Browser autofill hints', example: 'autocomplete="email"' },
                { attr: 'autofocus', desc: 'Auto-focus on page load', example: 'autofocus' },
              ].map(({ attr, desc, example }) => (
                <div key={attr} className="bg-muted p-3 rounded text-sm">
                  <code className="font-mono font-bold">{attr}</code>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  <code className="text-sm bg-background px-1.5 py-0.5 rounded mt-1 inline-block font-mono">{example}</code>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={() => openPlayground(formAttributesDemo.html, formAttributesDemo.css, formAttributesDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Interactive Form Demo
          </Button>
        </CardContent>
      </Card>

      {/* ==================== ARIA ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-purple-600" />
            ARIA Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Accessibility attributes for screen readers and assistive technology
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'role', desc: 'Element purpose: button, navigation, alert', example: 'role="navigation"' },
              { attr: 'aria-label', desc: 'Accessible name for element', example: 'aria-label="Close dialog"' },
              { attr: 'aria-labelledby', desc: 'ID of labeling element', example: 'aria-labelledby="heading1"' },
              { attr: 'aria-describedby', desc: 'ID of describing element', example: 'aria-describedby="hint1"' },
              { attr: 'aria-hidden', desc: 'Hide from screen readers', example: 'aria-hidden="true"' },
              { attr: 'aria-expanded', desc: 'Collapsed/expanded state', example: 'aria-expanded="false"' },
              { attr: 'aria-pressed', desc: 'Toggle button state', example: 'aria-pressed="true"' },
              { attr: 'aria-current', desc: 'Current item in navigation', example: 'aria-current="page"' },
              { attr: 'aria-live', desc: 'Announce dynamic changes', example: 'aria-live="polite"' },
              { attr: 'aria-controls', desc: 'ID of controlled element', example: 'aria-controls="menu1"' },
            ].map(({ attr, desc, example }) => (
              <div key={attr} className="bg-muted p-4 rounded-lg border">
                <code className="text-base font-mono font-bold text-purple-600">{attr}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <code className="text-sm bg-background px-2 py-1 rounded mt-2 inline-block font-mono">{example}</code>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-base flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              ARIA Best Practices
            </h4>
            <ul className="space-y-1 text-base">
              <li>• Use semantic HTML first (nav, button, header)</li>
              <li>• Add ARIA only when semantic HTML isn't enough</li>
              <li>• Test with screen readers</li>
              <li>• Keep ARIA attributes updated with state changes</li>
            </ul>
          </div>

          <Button onClick={() => openPlayground(ariaAttributesDemo.html, ariaAttributesDemo.css, ariaAttributesDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> ARIA Accessibility Demo
          </Button>
        </CardContent>
      </Card>

      {/* ==================== EVENT ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MousePointer className="w-6 h-6 text-red-600" />
            Event Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Inline JavaScript event handlers (use with caution)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mb-4">
            <p className="text-base flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <strong>Note:</strong> Modern practice prefers addEventListener() in external JavaScript files for better separation of concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { attr: 'onclick', desc: 'Element clicked' },
              { attr: 'ondblclick', desc: 'Double-clicked' },
              { attr: 'onmouseover', desc: 'Mouse enters' },
              { attr: 'onmouseout', desc: 'Mouse leaves' },
              { attr: 'onmousedown', desc: 'Mouse button pressed' },
              { attr: 'onmouseup', desc: 'Mouse button released' },
              { attr: 'onkeydown', desc: 'Key pressed down' },
              { attr: 'onkeyup', desc: 'Key released' },
              { attr: 'onkeypress', desc: 'Key pressed' },
              { attr: 'onchange', desc: 'Value changed' },
              { attr: 'oninput', desc: 'Input value changing' },
              { attr: 'onsubmit', desc: 'Form submitted' },
              { attr: 'onfocus', desc: 'Element focused' },
              { attr: 'onblur', desc: 'Element lost focus' },
              { attr: 'onload', desc: 'Element loaded' },
            ].map(({ attr, desc }) => (
              <div key={attr} className="bg-muted p-3 rounded text-sm">
                <code className="font-mono font-bold text-red-600">{attr}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <Button onClick={() => openPlayground(eventAttributesDemo.html, eventAttributesDemo.css, eventAttributesDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Event Attributes
          </Button>
        </CardContent>
      </Card>

      {/* ==================== OTHER IMPORTANT ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-600" />
            Other Important Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Additional attributes for specific use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Media Attributes */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-base mb-3">Media (video/audio)</h4>
              <div className="space-y-2 text-sm">
                {['controls', 'autoplay', 'loop', 'muted', 'poster', 'preload'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>

            {/* Table Attributes */}
            <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-bold text-base mb-3">Tables</h4>
              <div className="space-y-2 text-sm">
                {['colspan', 'rowspan', 'scope', 'headers'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>

            {/* Meta Attributes */}
            <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
              <h4 className="font-bold text-base mb-3">Meta Tags</h4>
              <div className="space-y-2 text-sm">
                {['charset', 'name', 'content', 'http-equiv', 'property'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>

            {/* Boolean Attributes */}
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-bold text-base mb-3">Boolean (No Value Needed)</h4>
              <div className="space-y-2 text-sm">
                {['checked', 'selected', 'disabled', 'readonly', 'required', 'hidden'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
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
              <h4 className="font-bold text-base mb-2">Most Used</h4>
              <ul className="text-sm space-y-1">
                <li>• id, class, style</li>
                <li>• href, target, rel</li>
                <li>• src, alt</li>
                <li>• type, name, value</li>
                <li>• placeholder, required</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Remember</h4>
              <ul className="text-sm space-y-1">
                <li>• Lowercase names</li>
                <li>• Quote values</li>
                <li>• alt required for images</li>
                <li>• Use data-* for custom</li>
                <li>• ARIA for accessibility</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Best Practices</h4>
              <ul className="text-sm space-y-1">
                <li>• Validate your HTML</li>
                <li>• Use semantic attributes</li>
                <li>• Accessibility first</li>
                <li>• External CSS/JS preferred</li>
                <li>• Test across browsers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
