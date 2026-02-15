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
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop"
    alt="Basic image showing web development workspace"
    width="300"
    height="200"
  />
  
  <!-- Lazy Loading -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop"
    alt="Lazy loaded image showing code editor"
    loading="lazy"
    width="300"
    height="200"
  />
  
  <!-- Responsive with srcset -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    srcset="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop 400w, https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop 800w"
    sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
    alt="Responsive image showing modern workspace"
    width="800"
    height="600"
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

      {/* ==================== ATTRIBUTES IN ACTION ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3"><Tags className="w-6 h-6 text-blue-600" /> HTML Attributes in Action</CardTitle>
          <CardDescription className="text-base">See how different attributes enhance HTML elements with dark mode support</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Common Attributes Example"
            description="Practical examples of essential HTML attributes working together"
            html={`<div id="main-content" class="container">
  <h2 class="title">HTML Attributes Demo</h2>
  
  <!-- Link with multiple attributes -->
  <a 
    href="https://developer.mozilla.org" 
    target="_blank" 
    rel="noopener noreferrer"
    title="Visit MDN Web Docs">
    MDN Web Docs
  </a>
  
  <!-- Image with accessibility -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop"
    alt="Professional web development workspace showing HTML attributes in practice"
    width="400"
    height="200"
    loading="lazy" />
  
  <!-- Form with validation -->
  <form class="contact-form">
    <input 
      type="email" 
      name="email"
      placeholder="Enter your email"
      required
      aria-label="Email address" />
    
    <button type="submit" class="btn-primary">
      Subscribe
    </button>
  </form>
  
  <!-- Data attributes -->
  <div 
    class="product-card"
    data-product-id="12345"
    data-category="tech"
    data-price="99.99">
    <h3>Product with Data Attributes</h3>
    <p>Check the HTML to see custom data-* attributes!</p>
  </div>
</div>`}
            css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

#main-content {
  max-width: 600px;
  margin: 0 auto;
}

.container {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  transition: background-color 0.3s;
}

html.dark .container {
  background: #1e293b;
}

.title {
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

html.dark .title {
  color: #60a5fa;
}

a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin: 1rem 0;
  transition: color 0.3s;
}

html.dark a {
  color: #93c5fd;
}

a:hover {
  text-decoration: underline;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.contact-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  transition: background-color 0.3s;
}

html.dark .contact-form {
  background: #334155;
}

input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s, background-color 0.3s;
}

html.dark input[type="email"] {
  background: #1e293b;
  border-color: #475569;
  color: #e2e8f0;
}

input[type="email"]:focus {
  outline: none;
  border-color: #3b82f6;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

html.dark .btn-primary {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn-primary:hover {
  background: #93c5fd;
}

.product-card {
  background: #e0f2fe;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0284c7;
  margin-top: 1.5rem;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark .product-card {
  background: #1e3a5f;
  border-left-color: #38bdf8;
}

.product-card h3 {
  color: #0369a1;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .product-card h3 {
  color: #7dd3fc;
}

.product-card p {
  color: #64748b;
  font-size: 0.875rem;
  transition: color 0.3s;
}

html.dark .product-card p {
  color: #cbd5e1;
}`}
            colorTheme="blue"
            icon={Tags}
            previewHeight="700px"
          />
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

          <InteractivePlayground
            title="Global Attributes Playground"
            description="Explore id, class, title, style, data-* and other global attributes"
            features={[
              'ID & Class',
              'Data Attributes',
              'Lang & Dir',
              'Custom Styling'
            ]}
            buttonText="Explore Global Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: globalAttributesDemo.html,
              css: globalAttributesDemo.css,
              js: globalAttributesDemo.js
            }}
            colorTheme="blue"
          />
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

          <InteractivePlayground
            title="Link Attributes Playground"
            description="Master href, target, rel, download and other link attributes"
            features={[
              'Navigation Links',
              'External Links',
              'Download Links',
              'Security Attributes'
            ]}
            buttonText="Try Link Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: linkAttributesDemo.html,
              css: linkAttributesDemo.css,
              js: linkAttributesDemo.js
            }}
            colorTheme="emerald"
          />
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

          <InteractivePlayground
            title="Image Attributes Playground"
            description="Learn src, alt, width, height, loading and responsive image attributes"
            features={[
              'Image Sources',
              'Alt Text',
              'Dimensions',
              'Lazy Loading'
            ]}
            buttonText="See Image Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: imageAttributesDemo.html,
              css: imageAttributesDemo.css,
              js: imageAttributesDemo.js
            }}
            colorTheme="purple"
          />
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

          <InteractivePlayground
            title="Form Attributes Playground"
            description="Explore action, method, name, placeholder, required and form validation attributes"
            features={[
              'Form Action & Method',
              'Input Attributes',
              'Validation',
              'Required Fields'
            ]}
            buttonText="Interactive Form Demo"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: formAttributesDemo.html,
              css: formAttributesDemo.css,
              js: formAttributesDemo.js
            }}
            colorTheme="amber"
          />
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

          <InteractivePlayground
            title="ARIA Attributes Playground"
            description="Master aria-label, aria-describedby, role and other accessibility attributes"
            features={[
              'ARIA Labels',
              'Roles',
              'Live Regions',
              'Screen Reader Support'
            ]}
            buttonText="ARIA Accessibility Demo"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: ariaAttributesDemo.html,
              css: ariaAttributesDemo.css,
              js: ariaAttributesDemo.js
            }}
            colorTheme="blue"
          />
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

          <InteractivePlayground
            title="Event Attributes Playground"
            description="Experiment with onclick, onmouseover, onchange and other event handlers"
            features={[
              'Click Events',
              'Mouse Events',
              'Form Events',
              'Keyboard Events'
            ]}
            buttonText="Try Event Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: eventAttributesDemo.html,
              css: eventAttributesDemo.css,
              js: eventAttributesDemo.js
            }}
            colorTheme="purple"
          />
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

      {/* ==================== FRONTEND CODE PREVIEW EXAMPLES ==================== */}

      {/* Example 1: Image Attributes in Action */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="1. Image Attributes Showcase"
            description="Essential attributes for embedding and optimizing images"
            html={`<!-- Basic Image with alt -->
<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    alt="Modern web development workspace with multiple monitors"
    width="400"
    height="300"
    title="Hover for more info - Web Development"
  />
  <figcaption>Standard image with dimensions</figcaption>
</figure>

<!-- Lazy Loading -->
<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    alt="Code editor with lazy loading demonstration"
    loading="lazy"
    width="400"
    height="300"
  />
  <figcaption>Image with lazy loading enabled</figcaption>
</figure>

<!-- Responsive with srcset (simulated) -->
<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    alt="Responsive image that adapts to different screen sizes"
    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 90vw, 80vw"
    width="800"
    height="600"
  />
  <figcaption>Image adapts based on viewport size</figcaption>
</figure>`}
            css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #2d1b69 100%);
}

h2 {
  color: #1e40af;
  margin-bottom: 2rem;
  text-align: center;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

figure {
  display: inline-block;
  margin: 1rem;
  text-align: center;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, background-color 0.3s, box-shadow 0.3s;
}

html.dark figure {
  background: #1e293b;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

figure:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

html.dark figure:hover {
  box-shadow: 0 8px 12px rgba(0,0,0,0.5);
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  display: block;
}

figcaption {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

html.dark figcaption {
  color: #cbd5e1;
}`}
            colorTheme="blue"
            previewHeight="600px"
          />
        </CardContent>
      </Card>

      {/* Example 2: Form Attributes in Action */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="2. Form Attributes & Validation"
            description="Interactive form with validation, autocomplete, and input constraints"
            html={`<h2>Form Attributes Example</h2>

<form class="demo-form">
  <!-- Text with constraints -->
  <div class="form-group">
    <label for="username">Username (3-20 chars):</label>
    <input 
      type="text"
      id="username"
      name="username"
      placeholder="Enter username"
      minlength="3"
      maxlength="20"
      required
      autocomplete="username"
      pattern="[a-zA-Z0-9_-]+"
      title="Only letters, numbers, underscore, hyphen"
    />
  </div>

  <!-- Email validation -->
  <div class="form-group">
    <label for="email">Email:</label>
    <input 
      type="email"
      id="email"
      name="email"
      placeholder="you@example.com"
      required
      autocomplete="email"
    />
  </div>

  <!-- Number with range -->
  <div class="form-group">
    <label for="age">Age (18-120):</label>
    <input 
      type="number"
      id="age"
      name="age"
      min="18"
      max="120"
      step="1"
      value="25"
    />
  </div>

  <!-- Select dropdown -->
  <div class="form-group">
    <label for="country">Country:</label>
    <select id="country" name="country" required>
      <option value="">-- Select --</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
  </div>

  <!-- Checkbox -->
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox" name="subscribe" />
      Subscribe to newsletter
    </label>
  </div>

  <!-- Radio buttons -->
  <div class="form-group">
    <fieldset>
      <legend>Plan:</legend>
      <label class="radio">
        <input type="radio" name="plan" value="free" checked />
        Free
      </label>
      <label class="radio">
        <input type="radio" name="plan" value="pro" />
        Pro
      </label>
    </fieldset>
  </div>

  <!-- Buttons -->
  <div class="button-group">
    <button type="submit" class="btn-primary">Submit</button>
    <button type="reset" class="btn-secondary">Reset</button>
  </div>
</form>`}
            css={`h2 {
  color: #1e40af;
  text-align: center;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.demo-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
}

html.dark .demo-form {
  background: #1e293b;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
  transition: color 0.3s;
}

html.dark label {
  color: #e2e8f0;
}

input[type="text"],
input[type="email"],
input[type="number"],
select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  background-color: white;
  color: #1f2937;
}

html.dark input[type="text"],
html.dark input[type="email"],
html.dark input[type="number"],
html.dark select {
  background-color: #0f172a;
  color: #e2e8f0;
  border-color: #334155;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

html.dark input[type="text"]:focus,
html.dark input[type="email"]:focus,
html.dark input[type="number"]:focus,
html.dark select:focus {
  box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
}

input[type="text"]:invalid {
  border-color: #ef4444;
}

input[type="text"]:valid {
  border-color: #10b981;
}

.checkbox,
.radio {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0;
  color: #374151;
  transition: color 0.3s;
}

html.dark .checkbox,
html.dark .radio {
  color: #e2e8f0;
}

input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
  width: auto;
}

fieldset {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 1rem;
  transition: border-color 0.3s;
}

html.dark fieldset {
  border-color: #334155;
}

legend {
  font-weight: 600;
  padding: 0 0.5rem;
  color: #374151;
  transition: color 0.3s;
}

html.dark legend {
  color: #e2e8f0;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

html.dark .btn-primary {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn-primary:hover {
  background: #93c5fd;
}

.btn-secondary {
  background: #e5e7eb;
  color: #374151;
}

.btn-secondary:hover {
  background: #d1d5db;
}

html.dark .btn-secondary {
  background: #334155;
  color: #e2e8f0;
}

html.dark .btn-secondary:hover {
  background: #475569;
}`}
            colorTheme="purple"
            previewHeight="700px"
          />
        </CardContent>
      </Card>

      {/* Example 3: Data Attributes & Custom Data */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="3. Data Attributes (Custom Data Storage)"
            description="Using data-* attributes to store and manipulate custom information"
            html={`<h2>Product Cards with Data Attributes</h2>

<div class="products">
  <div class="product-card" 
    data-product-id="101"
    data-price="29.99"
    data-category="electronics"
    data-in-stock="true"
    data-rating="4.5"
    title="Click to view details"
  >
    <div class="product-image">📱</div>
    <h3>Smartphone</h3>
    <p class="price">$29.99</p>
    <p class="rating">⭐ 4.5/5</p>
    <button class="add-to-cart">Add to Cart</button>
  </div>

  <div class="product-card"
    data-product-id="102"
    data-price="49.99"
    data-category="electronics"
    data-in-stock="true"
    data-rating="4.8"
  >
    <div class="product-image">💻</div>
    <h3>Laptop</h3>
    <p class="price">$49.99</p>
    <p class="rating">⭐ 4.8/5</p>
    <button class="add-to-cart">Add to Cart</button>
  </div>

  <div class="product-card"
    data-product-id="103"
    data-price="19.99"
    data-category="accessories"
    data-in-stock="false"
    data-rating="4.2"
  >
    <div class="product-image">🎧</div>
    <h3>Headphones</h3>
    <p class="price">$19.99</p>
    <p class="rating">⭐ 4.2/5</p>
    <button class="add-to-cart" disabled>Out of Stock</button>
  </div>
</div>

<div id="info-panel" class="info-panel">
  <p>Click a product to see its data attributes</p>
</div>`}
            css={`h2 {
  color: #1e40af;
  text-align: center;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

html.dark .product-card {
  background: #1e293b;
  border-color: #334155;
}

.product-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 16px rgba(59,130,246,0.2);
  transform: translateY(-4px);
}

html.dark .product-card:hover {
  border-color: #60a5fa;
  box-shadow: 0 8px 16px rgba(96,165,250,0.2);
}

.product-image {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .product-card h3 {
  color: #e2e8f0;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f59e0b;
  transition: color 0.3s;
}

html.dark .price {
  color: #fbbf24;
}

.rating {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: #6b7280;
  transition: color 0.3s;
}

html.dark .rating {
  color: #cbd5e1;
}

.add-to-cart {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.add-to-cart:hover:not(:disabled) {
  background: #2563eb;
}

.add-to-cart:disabled {
  background: #d1d5db;
  cursor: not-allowed;
}

html.dark .add-to-cart {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .add-to-cart:hover:not(:disabled) {
  background: #93c5fd;
}

html.dark .add-to-cart:disabled {
  background: #475569;
  color: #9ca3af;
}

.info-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f3f4f6;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: background-color 0.3s, border-left-color 0.3s, color 0.3s;
  color: #374151;
}

html.dark .info-panel {
  background: #1e293b;
  border-left-color: #60a5fa;
  color: #cbd5e1;
}`}
            colorTheme="amber"
            previewHeight="550px"
          />
        </CardContent>
      </Card>

      {/* Example 4: Semantic & Accessibility Attributes */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="4. Semantic & Accessibility Attributes"
            description="ARIA, role, and semantic attributes for better accessibility"
            html={`<h2>Accessible Interactive Component</h2>

<button 
  id="menu-toggle"
  aria-expanded="false"
  aria-controls="navigation-menu"
  aria-label="Toggle navigation menu"
  class="menu-button"
>
  ☰ Menu
</button>

<nav 
  id="navigation-menu"
  role="navigation"
  aria-label="Main navigation"
  hidden
  class="navigation"
>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<div role="alert" aria-live="polite" aria-atomic="true" id="status" class="status-message">
  Ready
</div>

<div class="form-section">
  <label for="search">Search:</label>
  <input 
    type="text"
    id="search"
    aria-label="Search products"
    aria-describedby="search-hint"
    placeholder="Type to search..."
  />
  <p id="search-hint" class="hint">
    Enter product name or category
  </p>
</div>`}
            css={`h2 {
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.menu-button {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.menu-button:hover {
  background: #2563eb;
  transform: scale(1.05);
}

.menu-button[aria-expanded="true"] {
  background: #10b981;
}

html.dark .menu-button {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .menu-button:hover {
  background: #93c5fd;
}

html.dark .menu-button[aria-expanded="true"] {
  background: #34d399;
}

.navigation {
  margin-top: 1rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .navigation {
  background: #1e293b;
}

.navigation ul {
  list-style: none;
  padding: 0;
}

.navigation li {
  margin: 0.5rem 0;
}

.navigation a {
  color: #1e40af;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, text-decoration 0.3s;
}

html.dark .navigation a {
  color: #93c5fd;
}

.navigation a:hover {
  text-decoration: underline;
}

.status-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  border-left: 4px solid #10b981;
  transition: background-color 0.3s, color 0.3s, border-left-color 0.3s;
}

html.dark .status-message {
  background: #064e3b;
  color: #a7f3d0;
  border-left-color: #34d399;
}

.form-section {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .form-section {
  background: #1e293b;
}

.form-section label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
  transition: color 0.3s;
}

html.dark .form-section label {
  color: #e2e8f0;
}

.form-section input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  background-color: white;
  color: #1f2937;
}

html.dark .form-section input {
  background-color: #0f172a;
  color: #e2e8f0;
  border-color: #334155;
}

.form-section input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

html.dark .form-section input:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96,165,250,0.2);
}

.hint {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  transition: color 0.3s;
}

html.dark .hint {
  color: #cbd5e1;
}`}
            colorTheme="emerald"
            previewHeight="500px"
          />
        </CardContent>
      </Card>

      {/* Comprehensive Attributes Showcase Playground */}
      <Card>
        <CardHeader>
          <CardTitle>🎨 Comprehensive Attributes Showcase</CardTitle>
          <CardDescription>Interactive showcase featuring all attribute categories with beautiful styling</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Complete HTML Attributes Showcase"
            description="Explore global attributes, link attributes, image attributes, form attributes, ARIA, and data attributes in one comprehensive interactive playground"
            features={[
              'Global Attributes',
              'Link Attributes',
              'Image Attributes',
              'Form Attributes',
              'Data Attributes',
              'ARIA Accessibility'
            ]}
            buttonText="Open Complete Showcase"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Attributes Showcase</title>
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1>✨ HTML Attributes Masterclass</h1>
      <p class="subtitle">Master every HTML attribute category</p>
    </header>

    <section class="showcase-section">
      <h2 class="section-title">🌍 Global Attributes</h2>
      <p>Attributes available on all HTML elements:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>id</strong>
          <p>Unique identifier</p>
        </div>
        <div class="attr-card">
          <strong>class</strong>
          <p>CSS class names</p>
        </div>
        <div class="attr-card">
          <strong>style</strong>
          <p>Inline CSS styles</p>
        </div>
        <div class="attr-card">
          <strong>title</strong>
          <p>Tooltip text</p>
        </div>
        <div class="attr-card">
          <strong>data-*</strong>
          <p>Custom data storage</p>
        </div>
        <div class="attr-card">
          <strong>lang</strong>
          <p>Language code</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">🔗 Link Attributes</h2>
      <p>Attributes specific to &lt;a&gt; elements:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>href</strong>
          <p>Link destination URL</p>
        </div>
        <div class="attr-card">
          <strong>target</strong>
          <p>_blank, _self, _parent</p>
        </div>
        <div class="attr-card">
          <strong>rel</strong>
          <p>Relationship type</p>
        </div>
        <div class="attr-card">
          <strong>download</strong>
          <p>Force download</p>
        </div>
        <div class="attr-card">
          <strong>hreflang</strong>
          <p>Language of linked page</p>
        </div>
        <div class="attr-card">
          <strong>type</strong>
          <p>MIME type hint</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">🖼️ Image Attributes</h2>
      <p>Attributes for &lt;img&gt; elements:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>src</strong>
          <p>Image file path (required)</p>
        </div>
        <div class="attr-card">
          <strong>alt</strong>
          <p>Alternative text (required)</p>
        </div>
        <div class="attr-card">
          <strong>width/height</strong>
          <p>Image dimensions</p>
        </div>
        <div class="attr-card">
          <strong>loading</strong>
          <p>lazy or eager</p>
        </div>
        <div class="attr-card">
          <strong>srcset</strong>
          <p>Responsive images</p>
        </div>
        <div class="attr-card">
          <strong>sizes</strong>
          <p>Viewport sizes</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">📝 Form Attributes</h2>
      <p>Attributes for form controls:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>name</strong>
          <p>Form field identifier</p>
        </div>
        <div class="attr-card">
          <strong>value</strong>
          <p>Default/selected value</p>
        </div>
        <div class="attr-card">
          <strong>required</strong>
          <p>Field mandatory</p>
        </div>
        <div class="attr-card">
          <strong>placeholder</strong>
          <p>Hint text</p>
        </div>
        <div class="attr-card">
          <strong>minlength/maxlength</strong>
          <p>String length validation</p>
        </div>
        <div class="attr-card">
          <strong>pattern</strong>
          <p>Regex validation</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">💾 Data Attributes</h2>
      <p>Custom data storage with data-* prefix:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>data-id</strong>
          <p>Unique identifier</p>
        </div>
        <div class="attr-card">
          <strong>data-type</strong>
          <p>Data type/category</p>
        </div>
        <div class="attr-card">
          <strong>data-value</strong>
          <p>Custom value storage</p>
        </div>
        <div class="attr-card">
          <strong>data-config</strong>
          <p>Configuration data</p>
        </div>
        <div class="attr-card">
          <strong>data-state</strong>
          <p>Element state tracking</p>
        </div>
        <div class="attr-card">
          <strong>dataset API</strong>
          <p>JavaScript access</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">♿ ARIA Attributes</h2>
      <p>Accessibility Rich Internet Applications:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>role</strong>
          <p>Element semantic role</p>
        </div>
        <div class="attr-card">
          <strong>aria-label</strong>
          <p>Accessible name</p>
        </div>
        <div class="attr-card">
          <strong>aria-expanded</strong>
          <p>Expanded state</p>
        </div>
        <div class="attr-card">
          <strong>aria-live</strong>
          <p>Live region updates</p>
        </div>
        <div class="attr-card">
          <strong>aria-describedby</strong>
          <p>Description reference</p>
        </div>
        <div class="attr-card">
          <strong>aria-hidden</strong>
          <p>Hide from screen readers</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>Master HTML attributes to create <strong>semantic</strong>, <em>accessible</em>, and <mark>interactive</mark> web content.</p>
    </footer>
  </div>
</body>
</html>`,
              css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.8;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
  color: #1e293b;
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  color: #e2e8f0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(120deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  border-radius: 12px;
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
}

.showcase-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e7ff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: all 0.3s;
}

html.dark .showcase-section {
  background: #1e293b;
  border-color: #334155;
}

.showcase-section:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}

.section-title {
  font-size: 1.75rem;
  color: #1e40af;
  margin-bottom: 1rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
}

html.dark .section-title {
  color: #93c5fd;
  border-bottom-color: #60a5fa;
}

.attribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.attr-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
  border: 2px solid #dbeafe;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

html.dark .attr-card {
  background: linear-gradient(135deg, #1e3a8a20 0%, #2d1b6920 100%);
  border-color: #3730a3;
}

.attr-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(59,130,246,0.2);
}

.attr-card strong {
  display: block;
  font-size: 1.2rem;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

html.dark .attr-card strong {
  color: #93c5fd;
}

.attr-card p {
  font-size: 0.85rem;
  color: #6b7280;
}

html.dark .attr-card p {
  color: #cbd5e1;
}

.footer {
  text-align: center;
  padding: 2rem;
  border-top: 2px solid #e0e7ff;
  margin-top: 3rem;
}

html.dark .footer {
  border-top-color: #334155;
}

strong {
  color: #3b82f6;
  font-weight: 600;
}

em {
  color: #7c3aed;
  font-style: italic;
}

mark {
  background: #fef08a;
  color: #78350f;
  padding: 0.125rem 0.25rem;
  border-radius: 2px;
}

html.dark mark {
  background: #854d0e;
  color: #fef08a;
}`,
              js: ''
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>
    </div>
  );
}
