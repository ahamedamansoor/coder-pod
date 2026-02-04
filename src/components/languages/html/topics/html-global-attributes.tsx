'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Fingerprint, Tags, HelpCircle, SpellCheck, Keyboard, EyeOff, Edit, Database, Play, Code, File, Globe, Brush, Move, Hash, BoxSelect, Type, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlGlobalAttributesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
  onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void;
}

const playgroundCode = {
  html: `<h2>Global Attributes Demo</h2>
<p id="main-paragraph" class="important-text" lang="en" title="This is a tooltip!" style="color: blue; border-left: 4px solid blue; padding-left: 10px;">
  This paragraph uses id, class, lang, title and style attributes. Hover over it!
</p>
<div tabindex="0" data-user-id="123" data-role="admin" style="padding: 10px; border: 1px solid #ccc; outline: none; border-radius: 4px;">
  This div is focusable (try tabbing to it) and has custom data.
</div>
<p contenteditable="true" style="margin-top: 1rem; border: 1px dashed #ccc; padding: 5px;">You can edit this paragraph directly!</p>
<button onclick="toggleVisibility()" style="margin-top: 1rem;">Toggle Hidden Text</button>
<p id="hidden-text" hidden>This text is initially hidden.</p>`,
  css: `.important-text { font-weight: bold; }
div[tabindex="0"]:focus { border-color: hsl(var(--primary)); box-shadow: 0 0 5px hsl(var(--primary) / 0.5); }
p[contenteditable="true"]:focus { outline: 2px solid hsl(var(--primary)); }`,
  js: `function toggleVisibility() { const elem = document.getElementById('hidden-text'); elem.hidden = !elem.hidden; }
const dataDiv = document.querySelector('div[data-user-id]');
console.log('User ID:', dataDiv.dataset.userId);`,
};

export default function HtmlGlobalAttributes({ onOpenWebPlayground, onOpenWebPlaygroundAction }: { onOpenWebPlayground?: (html: string, css: string, js: string) => void; onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void; }) {
  const openPlayground = (html: string, css: string, js: string) => {
    (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);
  };

  const attributes = [
    { icon: Fingerprint, attr: 'id', desc: 'Unique identifier for targeting with CSS, JS, or anchor links.' },
    { icon: Tags, attr: 'class', desc: 'Assigns reusable style hooks (multiple space-separated classes).' },
    { icon: HelpCircle, attr: 'title', desc: 'Accessible tooltip text on hover/focus.' },
    { icon: SpellCheck, attr: 'lang', desc: 'Language of the element’s content (improves screen readers & SEO).' },
    { icon: Code, attr: 'style', desc: 'Inline CSS for one-off styling (prefer classes for reuse).' },
    { icon: Keyboard, attr: 'tabindex', desc: 'Controls tab ordering & focusability; 0 adds to natural order.' },
    { icon: EyeOff, attr: 'hidden', desc: 'Completely hides element; removed from accessibility tree.' },
    { icon: Edit, attr: 'contenteditable', desc: 'Turns region into direct editable surface.' },
    { icon: Database, attr: 'data-*', desc: 'Custom lightweight metadata accessible via dataset.' },
    { icon: Move, attr: 'draggable', desc: 'Hint that element can be dragged (Drag & Drop API).' },
    { icon: Globe, attr: 'dir', desc: 'Text direction (ltr, rtl, auto) for internationalization.' },
    { icon: BoxSelect, attr: 'inert', desc: 'Makes subtree unfocusable & ignored by assistive tech until removed.' },
    { icon: Hash, attr: 'accesskey', desc: 'Defines shortcut key (use sparingly; can conflict with OS).' },
    { icon: Languages, attr: 'translate', desc: 'Suggest if content should be translated (yes | no).' },
    { icon: Type, attr: 'inputmode', desc: 'Hints preferred virtual keyboard layout (e.g. numeric).'},
    { icon: Brush, attr: 'autocapitalize', desc: 'Controls auto-capitalization behavior on editable/input content.' },
  ];

  const microdataSnippet = `<div itemscope itemtype="https://schema.org/` + `Book">\n  <span itemprop="name">The Hobbit</span>\n  <span itemprop="author">J.R.R. Tolkien</span>\n</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={File}
        category="HTML Basics"
        title="Global Attributes Overview"
        description="Attributes that can be used on any HTML element"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle>What are Global Attributes?</CardTitle>
          <CardDescription>Common attributes available on most HTML elements (some may have no effect on specific tags).</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attributes.map(a => (
            <div key={a.attr} className="bg-muted p-4 rounded-lg border">
              <h3 className="font-semibold flex items-center gap-2 mb-2"><a.icon className="w-5 h-5 text-primary" />{a.attr}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Global Attributes in Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3"><Tags className="w-6 h-6 text-blue-600" /> Global Attributes in Action</CardTitle>
          <CardDescription className="text-base">See how global attributes work on different elements with dark mode support</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Essential Global Attributes"
            description="Practical examples of id, class, title, data-*, tabindex, and contenteditable"
            html={`<div id="container" class="main-wrapper">
  <h2 class="title" title="This is a helpful tooltip!">Global Attributes Demo</h2>
  
  <!-- ID and Class -->
  <p id="intro" class="highlight important">
    This paragraph has both an ID and multiple classes for styling.
  </p>
  
  <!-- Title attribute (tooltip) -->
  <p title="Hover over me to see the tooltip!">
    🎯 Hover to see a helpful tooltip
  </p>
  
  <!-- Data attributes -->
  <div 
    class="user-card"
    data-user-id="12345"
    data-role="admin"
    data-active="true">
    <h3>User Profile</h3>
    <p>This element contains custom data-* attributes for JavaScript access.</p>
  </div>
  
  <!-- Tabindex (focus control) -->
  <div 
    tabindex="0" 
    class="focusable-box"
    title="Press Tab to focus on this element">
    Tab to focus me! 🎯
  </div>
  
  <!-- Contenteditable -->
  <p contenteditable="true" class="editable">
    ✏️ Click here to edit this text directly!
  </p>
  
  <!-- Hidden attribute -->
  <p id="secret" hidden>
    🔒 This paragraph is hidden by the 'hidden' attribute
  </p>
  
  <!-- Lang attribute -->
  <p lang="es" dir="ltr" class="spanish">
    ¡Hola Mundo! (Spanish text with lang attribute)
  </p>
  
  <p lang="ar" dir="rtl" class="arabic">
    مرحبا بالعالم (Arabic text with rtl direction)
  </p>
</div>`}
            css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

#container {
  max-width: 700px;
  margin: 0 auto;
}

.main-wrapper {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  transition: background-color 0.3s;
}

html.dark .main-wrapper {
  background: #1e293b;
}

.title {
  color: #1e40af;
  margin-bottom: 1.5rem;
  cursor: help;
  transition: color 0.3s;
}

html.dark .title {
  color: #60a5fa;
}

#intro {
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.highlight {
  background: #fef3c7;
  padding: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .highlight {
  background: #713f12;
  color: #fef3c7;
}

.important {
  border-left: 4px solid #f59e0b;
  font-weight: 500;
}

.user-card {
  background: #dbeafe;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 2px solid #3b82f6;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark .user-card {
  background: #1e3a8a;
  border-color: #60a5fa;
}

.user-card h3 {
  color: #1e40af;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .user-card h3 {
  color: #93c5fd;
}

.user-card p {
  color: #475569;
  font-size: 0.875rem;
  transition: color 0.3s;
}

html.dark .user-card p {
  color: #cbd5e1;
}

.focusable-box {
  background: #e0e7ff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #6366f1;
  margin: 1.5rem 0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.focusable-box:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  transform: scale(1.02);
}

html.dark .focusable-box {
  background: #312e81;
  border-color: #818cf8;
  color: #e0e7ff;
}

html.dark .focusable-box:focus {
  border-color: #c7d2fe;
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.3);
}

.editable {
  background: #fef9c3;
  padding: 1rem;
  border-radius: 6px;
  border: 2px dashed #ca8a04;
  margin: 1.5rem 0;
  cursor: text;
  transition: all 0.3s;
}

.editable:focus {
  outline: none;
  border-color: #eab308;
  border-style: solid;
  box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.2);
}

html.dark .editable {
  background: #713f12;
  border-color: #fbbf24;
  color: #fef3c7;
}

html.dark .editable:focus {
  border-color: #fcd34d;
}

.spanish, .arabic {
  background: #f0fdf4;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #16a34a;
  margin: 1rem 0;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

html.dark .spanish,
html.dark .arabic {
  background: #14532d;
  border-left-color: #4ade80;
  color: #dcfce7;
}`}
            colorTheme="blue"
            icon={Tags}
            previewHeight="950px"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Playground</CardTitle>
          <CardDescription>Experiment with editable content, focus management and hidden toggling.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Global Attributes Playground"
            description="Explore editable content, custom data attributes, tabindex and visibility toggling"
            features={[
              'Editable Content',
              'Focus Management',
              'Custom Data Attributes',
              'Hidden Toggle'
            ]}
            buttonText="Open Global Attributes Playground"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: playgroundCode.html,
              css: playgroundCode.css,
              js: playgroundCode.js
            }}
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Example 1: ID and Class for Styling and Selection */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="1. ID & Class for Identification"
            description="Using id and class attributes for CSS targeting and JavaScript selection"
            html={`<div id="main-content" class="container primary-bg">
  <header id="page-header" class="header-section gradient-border">
    <h1 class="page-title">Global Attributes Demo</h1>
    <p class="subtitle">Master HTML identification attributes</p>
  </header>
  
  <section id="featured" class="featured-box highlighted">
    <h2 class="section-title">Featured Section</h2>
    <p class="section-text">
      This section uses ID for unique targeting and classes for styling.
    </p>
  </section>
  
  <div id="user-profile" class="card profile-card">
    <h3 class="card-title">User Profile</h3>
    <p class="card-text">Multiple classes allow flexible styling combinations.</p>
    <button class="btn btn-primary btn-lg">Get Started</button>
  </div>
  
  <footer id="page-footer" class="footer-section">
    <p class="footer-text">&copy; 2025 Your Site</p>
  </footer>
</div>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #2d1b69 100%);
}

#main-content {
  max-width: 800px;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.primary-bg {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  transition: background-color 0.3s;
}

html.dark .primary-bg {
  background: #1e293b;
}

#page-header {
  text-align: center;
  margin-bottom: 1rem;
}

.header-section {
  padding: 2rem;
  border-radius: 8px;
}

.gradient-border {
  border-bottom: 4px solid #3b82f6;
  transition: border-color 0.3s;
}

html.dark .gradient-border {
  border-bottom-color: #60a5fa;
}

.page-title {
  font-size: 2rem;
  color: #1e40af;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .page-title {
  color: #93c5fd;
}

.subtitle {
  color: #666;
  transition: color 0.3s;
}

html.dark .subtitle {
  color: #cbd5e1;
}

#featured {
  padding: 1.5rem;
  border-radius: 8px;
  background: #f0f9ff;
  transition: background-color 0.3s;
}

html.dark #featured {
  background: #1e3a8a;
}

.featured-box {
  border-left: 4px solid #3b82f6;
}

.highlighted {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  transition: box-shadow 0.3s;
}

html.dark .highlighted {
  box-shadow: 0 4px 12px rgba(96, 165, 250, 0.2);
}

.section-title {
  color: #1e40af;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .section-title {
  color: #93c5fd;
}

.section-text {
  color: #475569;
  transition: color 0.3s;
}

html.dark .section-text {
  color: #cbd5e1;
}

#user-profile {
  padding: 1.5rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%);
  transition: all 0.3s;
}

html.dark #user-profile {
  background: linear-gradient(135deg, #3f2c1e 0%, #3d0d54 100%);
}

.card {
  border: 2px solid #f59e0b;
  transition: border-color 0.3s;
}

html.dark .card {
  border-color: #fbbf24;
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
}

.card-title {
  color: #92400e;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .card-title {
  color: #fcd34d;
}

.card-text {
  color: #78350f;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark .card-text {
  color: #fef3c7;
}

.btn {
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
  transform: scale(1.05);
}

html.dark .btn-primary {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn-primary:hover {
  background: #93c5fd;
}

.btn-lg {
  font-size: 1rem;
  padding: 1rem 2rem;
}

#page-footer {
  text-align: center;
  border-top: 2px solid #e5e7eb;
  padding-top: 1.5rem;
  transition: border-color 0.3s;
}

html.dark #page-footer {
  border-top-color: #334155;
}

.footer-section {
  margin-top: auto;
}

.footer-text {
  color: #666;
  font-size: 0.875rem;
  transition: color 0.3s;
}

html.dark .footer-text {
  color: #999;
}`}
            colorTheme="blue"
            previewHeight="800px"
          />
        </CardContent>
      </Card>

      {/* Example 2: Data Attributes for Custom Data Storage */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="2. Data Attributes for Custom Storage"
            description="Using data-* attributes to store custom metadata accessible via JavaScript"
            html={`<h2>Product Showcase</h2>

<div class="products-container">
  <div class="product-card" 
    data-product-id="001"
    data-price="99.99"
    data-category="electronics"
    data-in-stock="true"
    data-rating="4.5"
    data-tags="gadget,tech,popular">
    <div class="product-icon">📱</div>
    <h3 class="product-name">Smartphone</h3>
    <p class="product-price">$99.99</p>
    <p class="product-rating">⭐ 4.5/5 Stars</p>
    <p class="product-category">Electronics</p>
    <button class="btn-info">View Details</button>
  </div>
  
  <div class="product-card"
    data-product-id="002"
    data-price="199.99"
    data-category="electronics"
    data-in-stock="true"
    data-rating="4.8"
    data-tags="laptop,tech,professional">
    <div class="product-icon">💻</div>
    <h3 class="product-name">Laptop</h3>
    <p class="product-price">$199.99</p>
    <p class="product-rating">⭐ 4.8/5 Stars</p>
    <p class="product-category">Electronics</p>
    <button class="btn-info">View Details</button>
  </div>
  
  <div class="product-card"
    data-product-id="003"
    data-price="49.99"
    data-category="accessories"
    data-in-stock="false"
    data-rating="4.2"
    data-tags="headphones,audio">
    <div class="product-icon">🎧</div>
    <h3 class="product-name">Headphones</h3>
    <p class="product-price">$49.99</p>
    <p class="product-rating">⭐ 4.2/5 Stars</p>
    <p class="product-category">Accessories</p>
    <button class="btn-info" disabled>Out of Stock</button>
  </div>
</div>

<div class="info-box">
  <p>Click "View Details" to see product data in console (check browser DevTools)</p>
</div>`}
            css={`h2 {
  text-align: center;
  color: #1e40af;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
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
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
}

html.dark .product-card:hover {
  border-color: #60a5fa;
  box-shadow: 0 8px 16px rgba(96, 165, 250, 0.2);
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.product-name {
  color: #1f2937;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .product-name {
  color: #e2e8f0;
}

.product-price {
  font-size: 1.5rem;
  color: #f59e0b;
  font-weight: bold;
  margin: 0.5rem 0;
  transition: color 0.3s;
}

html.dark .product-price {
  color: #fbbf24;
}

.product-rating {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0;
  transition: color 0.3s;
}

html.dark .product-rating {
  color: #cbd5e1;
}

.product-category {
  color: #666;
  font-size: 0.85rem;
  margin: 1rem 0;
  transition: color 0.3s;
}

html.dark .product-category {
  color: #9ca3af;
}

.btn-info {
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

.btn-info:hover:not(:disabled) {
  background: #2563eb;
  transform: scale(1.02);
}

.btn-info:disabled {
  background: #d1d5db;
  color: #666;
  cursor: not-allowed;
}

html.dark .btn-info {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn-info:hover:not(:disabled) {
  background: #93c5fd;
}

html.dark .btn-info:disabled {
  background: #475569;
  color: #9ca3af;
}

.info-box {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f0f9ff;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
  text-align: center;
  color: #1e40af;
  font-weight: 500;
  transition: all 0.3s;
}

html.dark .info-box {
  background: #1e3a8a;
  border-left-color: #60a5fa;
  color: #93c5fd;
}`}
            colorTheme="purple"
            previewHeight="850px"
          />
        </CardContent>
      </Card>

      {/* Example 3: Title, Lang, and Dir for Accessibility */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="3. Accessibility: Title, Lang & Dir"
            description="Using title, lang, and dir attributes for better accessibility and internationalization"
            html={`<h2>Accessibility Attributes</h2>

<div class="demo-container">
  <!-- Title attribute for tooltips -->
  <section class="section-box">
    <h3 title="This element provides helpful information on hover">Title Attribute Demo</h3>
    <p>
      <span title="Hover here to see a tooltip">Hover over this text</span> to see a helpful tooltip.
    </p>
    <div class="icon-group">
      <span title="Save your work">💾</span>
      <span title="Edit content">✏️</span>
      <span title="Delete item">🗑️</span>
    </div>
  </section>
  
  <!-- Language attribute -->
  <section class="section-box">
    <h3>Language Attribute</h3>
    <p lang="en">English: Hello, Welcome to our website!</p>
    <p lang="es">Spanish: ¡Hola, Bienvenido a nuestro sitio web!</p>
    <p lang="fr">French: Bonjour, Bienvenue sur notre site Web!</p>
    <p lang="de">German: Hallo, Willkommen auf unserer Website!</p>
  </section>
  
  <!-- Direction attribute -->
  <section class="section-box">
    <h3>Text Direction</h3>
    <p dir="ltr" class="text-ltr">
      ← Left to Right (English, German, French)
    </p>
    <p dir="rtl" class="text-rtl">
      اليمين إلى اليسار (العربية - Right to Left)
    </p>
    <p dir="rtl" class="text-rtl">
      מימין לשמאל (עברית - Hebrew)
    </p>
  </section>
  
  <!-- Combined example -->
  <section class="section-box highlight-box">
    <h3>Combined Accessibility Example</h3>
    <p lang="ar" dir="rtl" title="This text is in Arabic, displayed right-to-left">
      هذا نص توضيحي يجمع بين السمات المختلفة
    </p>
  </section>
</div>`}
            css={`h2 {
  text-align: center;
  color: #1e40af;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.demo-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
}

.section-box {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s;
}

html.dark .section-box {
  background: #1e293b;
  border-color: #334155;
}

.section-box h3 {
  color: #1e40af;
  margin-bottom: 1rem;
  cursor: help;
  transition: color 0.3s;
}

html.dark .section-box h3 {
  color: #93c5fd;
}

.section-box p {
  color: #475569;
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

html.dark .section-box p {
  color: #cbd5e1;
}

.icon-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
}

.icon-group span {
  cursor: help;
  transition: transform 0.2s;
}

.icon-group span:hover {
  transform: scale(1.2);
}

.text-ltr {
  text-align: left;
  background: #e0f2fe;
  padding: 1rem;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .text-ltr {
  background: #1e3a8a;
}

.text-rtl {
  text-align: right;
  background: #fef9c3;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

html.dark .text-rtl {
  background: #713f12;
}

.highlight-box {
  background: linear-gradient(135deg, #dbeafe 0%, #fef3c7 100%);
  border-color: #3b82f6;
  transition: all 0.3s;
}

html.dark .highlight-box {
  background: linear-gradient(135deg, #1e3a8a 0%, #3f2c1e 100%);
  border-color: #60a5fa;
}`}
            colorTheme="emerald"
            previewHeight="900px"
          />
        </CardContent>
      </Card>

      {/* Example 4: Contenteditable and Hidden Attributes */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="4. Interactive Content: Contenteditable & Hidden"
            description="Making content directly editable and toggling visibility with hidden attribute"
            html={`<h2>Interactive Content Demo</h2>

<div class="container">
  <!-- Contenteditable Example -->
  <section class="demo-section">
    <h3>✏️ Editable Content</h3>
    <div class="editable-box" contenteditable="true">
      Click here and start typing! This entire section is editable.
      You can format text, add line breaks, and make changes directly in the browser.
    </div>
    <p class="instruction">Try editing the box above - changes are live!</p>
  </section>
  
  <!-- Hidden/Show Toggle -->
  <section class="demo-section">
    <h3>👁️ Visibility Control</h3>
    <button class="toggle-btn" onclick="toggleElement('secret-content')">
      Show Secret Content
    </button>
    <div id="secret-content" hidden class="hidden-box">
      🎉 This was hidden! Click the button again to hide it.
    </div>
  </section>
  
  <!-- Multiple Hidden Elements -->
  <section class="demo-section">
    <h3>📋 Expandable Sections</h3>
    <button class="toggle-btn" onclick="toggleElement('details-1')">
      Details 1
    </button>
    <div id="details-1" hidden class="details-box">
      <p>First expandable section with hidden attribute.</p>
    </div>
    
    <button class="toggle-btn" onclick="toggleElement('details-2')">
      Details 2
    </button>
    <div id="details-2" hidden class="details-box">
      <p>Second expandable section with hidden attribute.</p>
    </div>
  </section>
  
  <!-- Tabindex for Focus -->
  <section class="demo-section">
    <h3>⌨️ Focus Management</h3>
    <div class="focusable-card" tabindex="0" title="Press Tab to focus this element">
      Press Tab to focus me, then use keyboard to interact
    </div>
  </section>
</div>

<script>
function toggleElement(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const isHidden = element.hasAttribute('hidden');
  if (isHidden) {
    element.removeAttribute('hidden');
    event.target.textContent = event.target.textContent.replace('Show', 'Hide');
  } else {
    element.setAttribute('hidden', '');
    event.target.textContent = event.target.textContent.replace('Hide', 'Show');
  }
}
</script>`}
            css={`h2 {
  text-align: center;
  color: #1e40af;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.demo-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  transition: all 0.3s;
}

html.dark .demo-section {
  background: #1e293b;
  border-left-color: #60a5fa;
}

.demo-section h3 {
  color: #1e40af;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark .demo-section h3 {
  color: #93c5fd;
}

.editable-box {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 6px;
  border: 2px solid #f59e0b;
  min-height: 80px;
  cursor: text;
  transition: all 0.3s;
}

.editable-box:focus {
  outline: none;
  border-color: #ca8a04;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

html.dark .editable-box {
  background: #3f2c1e;
  border-color: #fbbf24;
  color: #fef3c7;
}

html.dark .editable-box:focus {
  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.2);
}

.instruction {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: color 0.3s;
}

html.dark .instruction {
  color: #9ca3af;
}

.toggle-btn {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s;
}

.toggle-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

html.dark .toggle-btn {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .toggle-btn:hover {
  background: #93c5fd;
}

.hidden-box {
  background: #dcfce7;
  border-left: 4px solid #16a34a;
  padding: 1rem;
  border-radius: 6px;
  color: #15803d;
  animation: slideDown 0.3s ease-out;
  transition: all 0.3s;
}

html.dark .hidden-box {
  background: #14532d;
  border-left-color: #4ade80;
  color: #dcfce7;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.details-box {
  background: #e0f2fe;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #0284c7;
  color: #0c4a6e;
  margin-bottom: 1rem;
  animation: slideDown 0.3s ease-out;
  transition: all 0.3s;
}

html.dark .details-box {
  background: #1e3a5f;
  border-left-color: #38bdf8;
  color: #cffafe;
}

.focusable-card {
  background: #f3e8ff;
  border: 2px solid #9333ea;
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  color: #6b21a8;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}

.focusable-card:focus {
  border-color: #7e22ce;
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.3);
  transform: scale(1.02);
}

html.dark .focusable-card {
  background: #3d0d54;
  border-color: #d946ef;
  color: #f472b6;
}

html.dark .focusable-card:focus {
  border-color: #f472b6;
  box-shadow: 0 0 0 3px rgba(244, 114, 182, 0.2);
}`}
            colorTheme="amber"
            previewHeight="1050px"
          />
        </CardContent>
      </Card>

      {/* Comprehensive Global Attributes Showcase Playground */}
      <Card>
        <CardHeader>
          <CardTitle>🎨 Comprehensive Global Attributes Showcase</CardTitle>
          <CardDescription>Interactive showcase featuring all major global attributes with beautiful styling</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Complete Global Attributes Master Class"
            description="Explore id, class, data-*, title, lang, dir, contenteditable, hidden, tabindex and more in one comprehensive interactive playground"
            features={[
              'ID & Class Selection',
              'Custom Data Storage',
              'Accessibility Attributes',
              'Interactive Editing',
              'Visibility Control',
              'Focus Management'
            ]}
            buttonText="Open Complete Global Attributes Showcase"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Global Attributes Showcase</title>
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1>✨ Global Attributes Masterclass</h1>
      <p class="subtitle">Master HTML attributes available on all elements</p>
    </header>

    <section class="showcase-section">
      <h2 class="section-title">🎯 ID & Class for Styling</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <strong>id</strong>
          <p>Unique element identifier</p>
          <code>&lt;div id="main"&gt;</code>
        </div>
        <div class="feature-card">
          <strong>class</strong>
          <p>Reusable style hooks</p>
          <code>&lt;div class="box"&gt;</code>
        </div>
        <div class="feature-card">
          <strong>Multiple classes</strong>
          <p>Flexible combinations</p>
          <code>&lt;div class="box primary"&gt;</code>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">💾 Custom Data Storage</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <strong>data-*</strong>
          <p>Store custom metadata</p>
          <code>&lt;div data-id="123"&gt;</code>
        </div>
        <div class="feature-card">
          <strong>dataset API</strong>
          <p>Access via JavaScript</p>
          <code>element.dataset.id</code>
        </div>
        <div class="feature-card">
          <strong>Multiple attributes</strong>
          <p>Flexible data storage</p>
          <code>data-name, data-role</code>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">♿ Accessibility & Usability</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <strong>title</strong>
          <p>Tooltip on hover/focus</p>
          <code>title="Helpful text"</code>
        </div>
        <div class="feature-card">
          <strong>lang</strong>
          <p>Language declaration</p>
          <code>lang="en" | lang="es"</code>
        </div>
        <div class="feature-card">
          <strong>dir</strong>
          <p>Text direction control</p>
          <code>dir="ltr" | dir="rtl"</code>
        </div>
        <div class="feature-card">
          <strong>tabindex</strong>
          <p>Focus order control</p>
          <code>tabindex="0"</code>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">✏️ Interactive Content</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <strong>contenteditable</strong>
          <p>Make region editable</p>
          <code>contenteditable="true"</code>
        </div>
        <div class="feature-card">
          <strong>hidden</strong>
          <p>Hide from display</p>
          <code>hidden or hidden=""</code>
        </div>
        <div class="feature-card">
          <strong>draggable</strong>
          <p>Enable drag & drop</p>
          <code>draggable="true"</code>
        </div>
        <div class="feature-card">
          <strong>inert</strong>
          <p>Disable interactions</p>
          <code>inert or inert=""</code>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">⌨️ Input & Text Control</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <strong>autocapitalize</strong>
          <p>Auto-capitalize behavior</p>
          <code>autocapitalize="off"</code>
        </div>
        <div class="feature-card">
          <strong>translate</strong>
          <p>Translation hint</p>
          <code>translate="no"</code>
        </div>
        <div class="feature-card">
          <strong>inputmode</strong>
          <p>Virtual keyboard hint</p>
          <code>inputmode="numeric"</code>
        </div>
        <div class="feature-card">
          <strong>spellcheck</strong>
          <p>Spell checking hint</p>
          <code>spellcheck="true"</code>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>Master global attributes to create <strong>semantic</strong>, <em>interactive</em>, and <mark>accessible</mark> HTML content.</p>
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

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.feature-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
  border: 2px solid #dbeafe;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

html.dark .feature-card {
  background: linear-gradient(135deg, #1e3a8a20 0%, #2d1b6920 100%);
  border-color: #3730a3;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(59,130,246,0.2);
}

.feature-card strong {
  display: block;
  font-size: 1.2rem;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

html.dark .feature-card strong {
  color: #93c5fd;
}

.feature-card p {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

html.dark .feature-card p {
  color: #cbd5e1;
}

.feature-card code {
  display: block;
  background: #1e293b;
  color: #10b981;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: monospace;
  word-break: break-all;
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

      <Card className="border-primary bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>Prefer classes over inline <code>style</code> for maintainability.</li>
            <li><code>tabindex</code> greater than 0 creates a custom focus order—use sparingly.</li>
            <li>Avoid using <code>hidden</code> to toggle interactive content; manage visibility with CSS + ARIA when needed.</li>
            <li>Use <code>data-*</code> for lightweight metadata—avoid storing complex JSON.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attribute Groups Diagram</CardTitle>
          <CardDescription>Conceptual map of global attributes by their primary purpose.</CardDescription>
        </CardHeader>
        <CardContent className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm'>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Fingerprint className='w-3 h-3 text-primary'/>Identification</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>id</code></li>
              <li><code>class</code></li>
              <li><code>part</code> / <code>exportparts</code> (Shadow DOM)</li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Globe className='w-3 h-3 text-primary'/>Localization & Text</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>lang</code>, <code>dir</code></li>
              <li><code>translate</code></li>
              <li><code>autocapitalize</code></li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Keyboard className='w-3 h-3 text-primary'/>Focus & Interaction</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>tabindex</code>, <code>accesskey</code></li>
              <li><code>draggable</code></li>
              <li><code>inert</code></li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Edit className='w-3 h-3 text-primary'/>Editing & Input</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>contenteditable</code></li>
              <li><code>inputmode</code></li>
              <li><code>autocapitalize</code></li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><EyeOff className='w-3 h-3 text-primary'/>Visibility & State</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>hidden</code></li>
              <li><code>style</code></li>
              <li><code>popover</code> (new lightweight overlays)</li>
            </ul>
          </div>
          <div className='border rounded p-3 bg-muted/50'>
            <h4 className='font-semibold mb-1 flex items-center gap-2'><Database className='w-3 h-3 text-primary'/>Metadata & Semantics</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>data-*</code></li>
              <li><code>itemprop</code>, <code>itemscope</code>, <code>itemtype</code>, <code>itemid</code>, <code>itemref</code></li>
              <li><code>slot</code></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code Snippets</CardTitle>
          <CardDescription>Common patterns using global attributes effectively.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4 text-sm'>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Accessible Language Switch</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<p lang="fr">Bonjour!</p>\n<p lang="en" translate="no">ProductName™</p>`}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Editable Region With Keyboard Hint</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<div contenteditable inputmode="email" autocapitalize="off">Type your email here...</div>`}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Hidden Placeholder Until Ready</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<section hidden id="results">...</section>\n<script>fetch('/api').then(()=>document.getElementById('results').hidden=false);</script>`}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Structured Data Microdata Stub</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{microdataSnippet}</pre>
          </div>
          <div className='bg-muted p-3 rounded border'>
            <h5 className='font-semibold mb-2'>Shadow DOM Part Exposure</h5>
            <pre className='whitespace-pre-wrap overflow-x-auto'>{`<my-button part="button root"></my-button>\n/* CSS */\nmy-button::part(button){ background:var(--primary); }`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Attribute Tester</CardTitle>
          <CardDescription>Toggle selected attributes and inspect resulting behavior.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4 text-sm'>
          <AttributeTesterComponent />
        </CardContent>
      </Card>
    </div>
  );
}

interface AttributeState {
  hidden: boolean;
  dir: 'ltr' | 'rtl';
  lang: 'en' | 'ar';
  contenteditable: boolean;
}

function AttributeTesterComponent() {
  const [state, setState] = React.useState<AttributeState>({
    hidden: false,
    dir: 'ltr',
    lang: 'en',
    contenteditable: true
  });

  const toggleHidden = () => {
    setState(prev => ({ ...prev, hidden: !prev.hidden }));
  };

  const switchDir = () => {
    setState(prev => ({ ...prev, dir: prev.dir === 'ltr' ? 'rtl' : 'ltr' }));
  };

  const toggleLang = () => {
    setState(prev => ({ ...prev, lang: prev.lang === 'en' ? 'ar' : 'en' }));
  };

  const toggleEditable = () => {
    setState(prev => ({ ...prev, contenteditable: !prev.contenteditable }));
  };

  const getSnapshotText = () => {
    return `hidden: ${state.hidden ? 'hidden' : '(none)'}
dir: ${state.dir}
lang: ${state.lang}
contenteditable: ${state.contenteditable ? 'true' : 'false'}
data-skill-level: beginner`;
  };

  return (
    <div className='space-y-4'>
      <div className='p-4 rounded border bg-muted flex flex-col gap-3'>
        <div
          contentEditable={state.contenteditable}
          data-skill-level='beginner'
          lang={state.lang}
          dir={state.dir}
          hidden={state.hidden}
          style={{
            outline: '1px dashed var(--border)',
            padding: '8px',
            minHeight: '40px',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            textAlign: state.dir === 'rtl' ? 'right' : 'left'
          }}
        >
          {state.lang === 'en'
            ? 'Editable sample text. Change direction, language & visibility.'
            : 'نص عينة قابل للتحرير. غير الاتجاه واللغة والرؤية.'}
        </div>
        <div className='flex flex-wrap gap-2'>
          <button
            type='button'
            className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity'
            onClick={toggleHidden}
          >
            Toggle hidden {state.hidden ? '✓' : ''}
          </button>
          <button
            type='button'
            className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity'
            onClick={switchDir}
          >
            Switch dir ({state.dir})
          </button>
          <button
            type='button'
            className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity'
            onClick={toggleLang}
          >
            Toggle lang ({state.lang})
          </button>
          <button
            type='button'
            className='px-2 py-1 rounded bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity'
            onClick={toggleEditable}
          >
            Toggle editable {state.contenteditable ? '✓' : ''}
          </button>
        </div>
        <pre className='text-sm bg-background/50 p-2 rounded overflow-x-auto text-foreground'>
          {getSnapshotText()}
        </pre>
      </div>
      <p className='text-sm text-muted-foreground'>Click buttons to toggle attributes on the element above and see live changes in the snapshot below.</p>
    </div>
  );
}
