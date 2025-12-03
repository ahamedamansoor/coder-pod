'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Heading, Type, AlignLeft, Layers, ArrowDown,
  CheckCircle, XCircle, Info, AlertCircle, Eye,
  Accessibility, Play, FileText
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function HtmlHeadingsAndParagraphs({
  onOpenWebPlayground
}: {
  onOpenWebPlayground: (html: string, css: string, js: string) => void
}) {

  // ==================== PLAYGROUND EXAMPLES ====================

  const headingHierarchyDemo = {
    html: `<!-- Interactive Heading Hierarchy -->
<div class="demo-container">
  <nav class="hierarchy-nav">
    <h2 class="nav-title">📑 Jump to Section</h2>
    <ul>
      <li><a href="#main">Main Title</a></li>
      <li><a href="#sec1">Section 1</a></li>
      <li><a href="#sec1-1">├─ Subsection 1.1</a></li>
      <li><a href="#sec1-2">├─ Subsection 1.2</a></li>
      <li><a href="#sec2">Section 2</a></li>
      <li><a href="#sec2-1">├─ Subsection 2.1</a></li>
      <li><a href="#sec2-1-1">│  └─ Sub-subsection</a></li>
    </ul>
  </nav>

  <article>
    <h1 id="main" class="level-1">🎯 Master HTML Heading Hierarchy</h1>
    <p class="intro">Learn the semantic structure that makes content accessible and SEO-friendly.</p>
    
    <section class="section-1">
      <h2 id="sec1" class="level-2">📚 Core Concepts</h2>
      <p>Headings create a logical document structure. Screen readers and search engines rely on proper hierarchy.</p>
      
      <h3 id="sec1-1" class="level-3">🔵 Understanding H1</h3>
      <p>The h1 is your page's main topic. Use only ONE per page. It's like your article headline.</p>
      
      <h3 id="sec1-2" class="level-3">🟢 Secondary Headings (H2)</h3>
      <p>H2 elements break content into major sections. Each section can have one h2.</p>
    </section>
    
    <section class="section-2">
      <h2 id="sec2" class="level-2">🎨 Visual Hierarchy</h2>
      <p>Visually, each heading level should be distinguishable and progressively smaller.</p>
      
      <h3 id="sec2-1" class="level-3">🟡 Subsection Styling</h3>
      <p>H3 elements are for detailed topics under h2 sections. They help organize complex information.</p>
      
      <h4 id="sec2-1-1" class="level-4">🟠 Deep Nesting (H4)</h4>
      <p>Use h4 and beyond sparingly. If content needs h4, consider restructuring your outline.</p>
    </section>
  </article>
</div>`,
    css: `* { box-sizing: border-box; }
.demo-container { display: flex; gap: 2rem; max-width: 1000px; margin: 0 auto; padding: 1.5rem; }
.hierarchy-nav { 
  flex: 0 0 220px; 
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  height: fit-content;
  position: sticky;
  top: 20px;
}
.nav-title { font-size: 1.1rem; margin-bottom: 1rem; margin-top: 0; }
.hierarchy-nav ul { list-style: none; padding: 0; margin: 0; }
.hierarchy-nav li { margin: 0.5rem 0; font-size: 0.9rem; }
.hierarchy-nav a { color: white; text-decoration: none; transition: all 0.2s; }
.hierarchy-nav a:hover { transform: translateX(5px); text-decoration: underline; }
article { flex: 1; font-family: system-ui, sans-serif; line-height: 1.8; }
.intro { font-size: 1.1rem; color: #666; margin-bottom: 2rem; }
.level-1 { 
  font-size: 2.5rem; 
  color: #1e3a8a; 
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 4px solid #3b82f6;
  background: linear-gradient(120deg, #1e3a8a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.level-2 { 
  font-size: 2rem; 
  color: #2563eb;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  padding-left: 1rem;
  border-left: 5px solid #3b82f6;
  transition: all 0.3s;
}
.level-2:hover { padding-left: 1.25rem; border-left-color: #1e40af; }
.level-3 { 
  font-size: 1.5rem; 
  color: #059669;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  border-left: 3px solid #10b981;
}
.level-4 { 
  font-size: 1.25rem; 
  color: #d97706;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
  border-left: 2px dashed #f59e0b;
}
.section-1, .section-2 { margin-bottom: 2rem; }
p { color: #374151; margin-bottom: 1rem; }
@media (max-width: 768px) { .demo-container { flex-direction: column; } .hierarchy-nav { position: static; flex: 1; } }`,
    js: `document.querySelectorAll('.hierarchy-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) { target.style.backgroundColor = '#fef3c7'; setTimeout(() => target.style.backgroundColor = '', 1500); }
  });
});`
  };

  const paragraphStylingDemo = {
    html: `<!-- Interactive Paragraph Showcase -->
<div class="article-container">
  <header class="article-header">
    <h1>The Art of Web Typography</h1>
    <p class="meta">📅 December 2025 • ⏱️ <span id="readtime">5</span> min read • 👤 Web Designer</p>
  </header>

  <main class="article-body">
    <!-- Lead Paragraph -->
    <p class="lead">
      Typography is one of the most overlooked aspects of web design, yet it profoundly impacts user experience. 
      This guide explores how to make your text more readable and visually appealing.
    </p>

    <!-- Regular Content -->
    <section>
      <h2>Why Typography Matters</h2>
      <p>
        Good typography isn't just about making text look pretty. It's about creating a reading experience 
        that guides the reader through your content effortlessly. Poor typography can frustrate users and drive 
        them away from your site.
      </p>
      <p>
        When you choose appropriate fonts, sizes, and spacing, you're respecting your reader's time and attention. 
        You're making a statement that their experience matters to you.
      </p>
    </section>

    <!-- Highlighted Section -->
    <section>
      <h2>Key Principles</h2>
      <p class="highlight-box">
        ⭐ <strong>Readability First:</strong> Your typography should be readable before it's beautiful. 
        If people can't easily read your content, all other design choices become irrelevant.
      </p>
      
      <h3>Line Length & Spacing</h3>
      <p>
        The optimal line length for body text is 50-75 characters. This prevents reader fatigue and maintains focus.
        Pair this with adequate line-height (1.5-1.8) for comfortable reading.
      </p>

      <h3>Contrast & Hierarchy</h3>
      <p class="important">
        Use visual hierarchy to guide readers through your content. Bold important terms, use different sizes 
        for different sections, and leverage whitespace to create breathing room.
      </p>
    </section>

    <!-- Quote Section -->
    <blockquote class="quote">
      <p>
        "Typography is the art of arranging type to make written language legible, readable, and visually appealing."
      </p>
      <footer>— John D. Berry, Typography Designer</footer>
    </blockquote>

    <!-- Conclusion -->
    <section>
      <h2>Best Practices Summary</h2>
      <p class="conclusion">
        Remember: good typography is invisible. When it's working properly, readers don't notice it—they just 
        enjoy a smooth, pleasant reading experience. That's your goal.
      </p>
    </section>
  </main>
</div>`,
    css: `.article-container { 
  max-width: 700px; 
  margin: 0 auto; 
  padding: 2rem;
  font-family: 'Georgia', serif;
  background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
}
.article-header { 
  text-align: center; 
  margin-bottom: 3rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 2rem;
}
.article-header h1 { 
  font-size: 2.75rem; 
  color: #0f172a;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}
.meta { 
  font-size: 0.95rem; 
  color: #64748b;
  margin: 0;
  letter-spacing: 0.5px;
}
.article-body { margin-top: 2rem; }
.lead { 
  font-size: 1.3rem; 
  line-height: 1.7;
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 2rem;
  border-left: 4px solid #3b82f6;
  padding-left: 1.5rem;
  background: #eff6ff;
  padding: 1rem 1rem 1rem 1.5rem;
  border-radius: 4px;
}
h2 { 
  font-size: 1.75rem; 
  color: #0f172a;
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
  line-height: 1.3;
}
h3 { 
  font-size: 1.3rem; 
  color: #334155;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
p { 
  line-height: 1.8; 
  color: #475569;
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
}
.highlight-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 5px solid #f59e0b;
  margin: 1.5rem 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #78350f;
}
.important {
  font-weight: 600;
  background: #f0fdf4;
  padding: 1rem 1.25rem;
  border-radius: 6px;
  border-left: 3px solid #16a34a;
  color: #166534;
}
.quote {
  border-left: 4px solid #8b5cf6;
  background: #f5f3ff;
  padding: 1.5rem;
  margin: 2.5rem 0;
  border-radius: 8px;
  font-style: italic;
  color: #5b21b6;
}
.quote p { margin-bottom: 0.5rem; }
.quote footer { font-style: normal; font-size: 0.95rem; color: #7c3aed; }
.conclusion { 
  background: linear-gradient(120deg, #dbeafe, #dbeafe);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 5px solid #0284c7;
  color: #0c4a6e;
  font-weight: 500;
}
section { margin-bottom: 2rem; }`,
    js: `
    const text = document.querySelector('.article-body').innerText;
    const wordCount = text.split(/\\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    document.getElementById('readtime').textContent = readTime;
    `
  };

  const accessibilityDemo = {
    html: `<!-- Accessibility-First Content Structure -->
<div class="accessible-page">
  <!-- Skip Links for Keyboard Users -->
  <nav class="skip-links" aria-label="Skip navigation">
    <a href="#main-content">Skip to main content</a>
    <a href="#toc">Skip to table of contents</a>
  </nav>

  <!-- Main Header -->
  <header class="page-header">
    <h1 id="page-title">Accessible Web Content Design</h1>
    <p class="tagline">Creating experiences for everyone, including users with disabilities</p>
  </header>

  <!-- Quick Navigation (TOC) -->
  <nav id="toc" class="toc-nav" aria-label="Table of contents">
    <h2>Quick Navigation</h2>
    <ol>
      <li><a href="#about">About Accessibility</a></li>
      <li><a href="#wcag">WCAG Guidelines</a></li>
      <li><a href="#practical">Practical Tips</a></li>
    </ol>
  </nav>

  <!-- Main Content -->
  <main id="main-content" role="main">
    <article aria-labelledby="page-title">
      
      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">About Accessibility</h2>
        <p>
          Web accessibility means ensuring all people, regardless of disability, can perceive, understand, 
          navigate, and interact with your website. This includes users with visual, auditory, motor, and 
          cognitive disabilities.
        </p>
        <p>
          About 15% of the global population experiences some form of disability. Making your site accessible 
          benefits everyone, not just people with disabilities.
        </p>
      </section>

      <section id="wcag" aria-labelledby="wcag-heading">
        <h2 id="wcag-heading">WCAG 2.1 Guidelines</h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) are the gold standard for web accessibility. They're 
          organized around four principles:
        </p>
        
        <h3 id="perceivable" tabindex="-1">🔍 Perceivable</h3>
        <p>Information and UI components must be presentable to users in ways they can perceive.</p>
        
        <h3 id="operable" tabindex="-1">⌨️ Operable</h3>
        <p>UI components and navigation must be operable. All functionality must be available from keyboard.</p>
        
        <h3 id="understandable" tabindex="-1">🧠 Understandable</h3>
        <p>Text and other information must be readable and understandable by everyone.</p>
        
        <h3 id="robust" tabindex="-1">🛡️ Robust</h3>
        <p>Content must work with current and future technologies, including assistive technologies.</p>
      </section>

      <section id="practical" aria-labelledby="practical-heading">
        <h2 id="practical-heading">Practical Accessibility Tips</h2>
        <p>Use these essential techniques to improve your site's accessibility:</p>
        
        <ul class="tips-list">
          <li><strong>Use semantic HTML:</strong> Proper heading hierarchy, landmarks, and form labels</li>
          <li><strong>Provide alt text:</strong> Describe images for screen reader users</li>
          <li><strong>Ensure color contrast:</strong> Minimum 4.5:1 ratio for text</li>
          <li><strong>Support keyboard navigation:</strong> All features accessible via keyboard</li>
          <li><strong>Test with real users:</strong> Include people with disabilities in testing</li>
        </ul>
      </section>
    </article>
  </main>

  <!-- Footer -->
  <footer class="page-footer" role="contentinfo">
    <p>Made with ❤️ for accessibility. Last updated: December 2025</p>
  </footer>
</div>`,
    css: `.accessible-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  font-family: system-ui, sans-serif;
  background: white;
}

/* Skip Links */
.skip-links {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: white;
  padding: 0;
  z-index: 100;
}
.skip-links a {
  display: inline-block;
  padding: 8px 16px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}
.skip-links a:focus {
  outline: 2px solid #fbbf24;
  position: static;
}

/* Header */
.page-header {
  background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}
.page-header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
.tagline {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0;
}

/* Table of Contents */
.toc-nav {
  background: #f1f5f9;
  border-left: 5px solid #3b82f6;
  padding: 1.5rem;
  margin: 2rem;
  border-radius: 8px;
}
.toc-nav h2 {
  margin-top: 0;
  color: #1e40af;
  font-size: 1.3rem;
}
.toc-nav ol {
  margin: 0;
  padding-left: 1.5rem;
}
.toc-nav li {
  margin: 0.5rem 0;
}
.toc-nav a {
  color: #2563eb;
  text-decoration: none;
  transition: all 0.2s;
}
.toc-nav a:hover,
.toc-nav a:focus {
  color: #1e40af;
  text-decoration: underline;
  outline: 2px solid transparent;
}

/* Main Content */
main {
  padding: 2rem;
}
article {
  line-height: 1.8;
  color: #374151;
}
section {
  margin-bottom: 2.5rem;
}
h2 {
  font-size: 1.75rem;
  color: #1e40af;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #dbeafe;
  padding-bottom: 0.5rem;
}
h3 {
  font-size: 1.3rem;
  color: #2563eb;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
p {
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

/* Tips List */
.tips-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}
.tips-list li {
  background: #f0fdf4;
  border-left: 4px solid #16a34a;
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  color: #15803d;
}

/* Footer */
.page-footer {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 2rem;
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
}`,
    js: `
    // Highlight sections when clicking from TOC
    document.querySelectorAll('.toc-nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
          target.style.animation = 'pulse 1.5s ease-in-out';
          setTimeout(() => target.style.animation = '', 1500);
        }
      });
    });

    // Add focus visible styles
    document.addEventListener('keydown', function(e) {
      if(e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    document.addEventListener('mousedown', function() {
      document.body.classList.remove('keyboard-nav');
    });
    `
  };

  const responsiveTypographyDemo = {
    html: `<!-- Fluid & Responsive Typography System -->
<div class="responsive-doc">
  <header class="hero">
    <h1>Responsive Typography Mastery</h1>
    <p class="subtitle">Modern CSS techniques for beautiful text on all devices</p>
  </header>

  <main class="content">
    <article>
      <h2>What is Fluid Typography?</h2>
      <p class="intro">
        Fluid typography scales smoothly between different screen sizes using CSS clamp(), 
        instead of jumping between fixed breakpoints. This creates a more natural, responsive experience.
      </p>

      <h2>The Problem with Traditional Approach</h2>
      <p>
        Traditional responsive design uses media queries to change font sizes at specific breakpoints. 
        This can feel jarring and doesn't scale well between breakpoints.
      </p>

      <p>
        With fluid typography, your font sizes scale continuously as the viewport changes, 
        creating a smooth, proportional experience from mobile to ultra-wide screens.
      </p>

      <h3>Code Example</h3>
      <p>
        Use CSS <code>clamp()</code> function: 
        <code class="block-code">font-size: clamp(1rem, 2.5vw, 2rem);</code>
      </p>

      <h2>Benefits</h2>
      <ul class="benefits">
        <li>✨ Smoother scaling across all devices</li>
        <li>📱 Less code (fewer media queries)</li>
        <li>🎯 Better control with min and max values</li>
        <li>♿ Improved accessibility with flexible sizing</li>
        <li>🚀 Better performance</li>
      </ul>

      <h2>Implementation Tips</h2>
      <div class="tips-container">
        <div class="tip-card">
          <h3>Mobile First</h3>
          <p>Set your minimum font size for mobile devices, then let it scale up smoothly.</p>
        </div>
        <div class="tip-card">
          <h3>Maintain Hierarchy</h3>
          <p>Keep proportional relationships between heading and body text sizes.</p>
        </div>
        <div class="tip-card">
          <h3>Test Thoroughly</h3>
          <p>Test on actual devices, not just browser resize. Actual viewport sizes matter.</p>
        </div>
      </div>

      <h2>Your Viewport Size</h2>
      <p id="viewport-info">Resize your browser to see font sizes scale in real-time!</p>
    </article>
  </main>
</div>`,
    css: `:root {
  /* Fluid typography scale */
  --fluid-h1: clamp(2rem, 6vw, 3.5rem);
  --fluid-h2: clamp(1.5rem, 4.5vw, 2.5rem);
  --fluid-h3: clamp(1.25rem, 3vw, 1.75rem);
  --fluid-body: clamp(1rem, 1.8vw, 1.25rem);
  --fluid-small: clamp(0.875rem, 1.5vw, 1rem);
}

* { box-sizing: border-box; }
body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }

.responsive-doc {
  background: linear-gradient(to bottom, #f0f9ff 0%, #ffffff 100%);
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
  color: white;
  padding: clamp(2rem, 8vw, 4rem) 1rem;
  text-align: center;
}

.hero h1 {
  font-size: var(--fluid-h1);
  margin: 0 0 0.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: var(--fluid-body);
  margin: 0;
  opacity: 0.95;
  font-weight: 300;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(1.5rem, 4vw, 3rem);
}

article {
  line-height: clamp(1.5, 1.2vw + 0.3rem, 1.9);
}

h2 {
  font-size: var(--fluid-h2);
  color: #0f172a;
  margin: clamp(2rem, 4vw, 2.5rem) 0 1rem 0;
  line-height: 1.2;
}

h3 {
  font-size: var(--fluid-h3);
  color: #1e40af;
  margin: clamp(1.25rem, 2.5vw, 1.5rem) 0 0.75rem 0;
}

p {
  font-size: var(--fluid-body);
  color: #334155;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.intro {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 500;
  color: #1e293b;
  background: #e0e7ff;
  padding: clamp(1rem, 2vw, 1.5rem);
  border-radius: 8px;
  border-left: 4px solid #4f46e5;
}

code {
  background: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'Monaco', monospace;
  font-size: 0.9em;
  color: #dc2626;
}

.block-code {
  display: block;
  background: #1f2937;
  color: #10b981;
  padding: clamp(1rem, 2vw, 1.5rem);
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
  font-size: var(--fluid-small);
}

.benefits {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.benefits li {
  background: #f0fdf4;
  border-left: 4px solid #16a34a;
  padding: clamp(0.75rem, 2vw, 1.25rem);
  margin-bottom: 0.75rem;
  border-radius: 4px;
  font-size: var(--fluid-body);
  color: #15803d;
}

.tips-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(1rem, 2vw, 2rem);
  margin: clamp(2rem, 4vw, 2.5rem) 0;
}

.tip-card {
  background: white;
  border: 2px solid #dbeafe;
  border-radius: 8px;
  padding: clamp(1rem, 2vw, 1.5rem);
  transition: all 0.3s;
}

.tip-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.tip-card h3 {
  margin-top: 0;
  color: #1e40af;
}

.tip-card p {
  margin: 0;
  font-size: var(--fluid-small);
}

#viewport-info {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: clamp(1rem, 2vw, 1.25rem);
  border-radius: 4px;
  font-weight: 500;
}`,
    js: `
    function updateViewportInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const info = document.getElementById('viewport-info');
      info.textContent = \`Resize your browser to see font sizes scale! Current viewport: \${width}x\${height}px\`;
    }

    window.addEventListener('resize', updateViewportInfo);
    updateViewportInfo();
    `
  };

  const seoOptimizedDemo = {
    html: `<!-- SEO-Optimized Content Blueprint -->
<div class="seo-example">
  <div class="seo-header">
    <h1>SEO Score: <span id="seo-score" class="score-badge">A+</span></h1>
    <p>Optimized heading structure for search engines & users</p>
  </div>

  <article itemscope itemtype="https://schema.org/Article">
    <!-- Single, Powerful H1 -->
    <h1 itemprop="headline">The Complete Guide to SEO-Friendly HTML Structure</h1>
    
    <div class="article-meta">
      <span itemprop="datePublished">Published: December 2025</span>
      <span itemprop="author">By SEO Expert</span>
    </div>

    <!-- Lead with Keywords -->
    <p class="lead" itemprop="description">
      Discover how to structure your HTML content for maximum SEO impact. 
      Learn the proven methods that top-ranking websites use to improve visibility in search results.
    </p>

    <!-- Section 1 -->
    <section>
      <h2>Why HTML Structure Matters for SEO</h2>
      <p>
        Search engines use heading hierarchy to understand content structure and topic relevance. 
        Proper semantic HTML tells search engines what your content is about and how it's organized.
      </p>
    </section>

    <!-- Section 2: Best Practices -->
    <section>
      <h2>SEO Best Practices for Headings</h2>
      <h3>1. One H1 Per Page (Your Main Topic)</h3>
      <p>Your h1 should be unique, descriptive, and contain your primary keyword.</p>

      <h3>2. Use H2 for Major Sections</h3>
      <p>Break your content into logical sections with descriptive h2 headings.</p>

      <h3>3. Keep Hierarchy Logical</h3>
      <p>Never jump from h1 directly to h3. Follow: h1 → h2 → h3.</p>

      <h3>4. Include Keywords Naturally</h3>
      <p>Add relevant keywords to headings, but keep them natural and user-focused.</p>
    </section>

    <!-- Checklist -->
    <section class="seo-checklist">
      <h2>✅ SEO Heading Checklist</h2>
      <div class="checklist-items">
        <div class="check-item">
          <input type="checkbox" id="check1" checked>
          <label for="check1">✓ Exactly one &lt;h1&gt; per page</label>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check2" checked>
          <label for="check2">✓ H1 contains primary keyword</label>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check3" checked>
          <label for="check3">✓ Logical heading hierarchy</label>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check4" checked>
          <label for="check4">✓ Headings are descriptive</label>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check5" checked>
          <label for="check5">✓ Content matches heading promises</label>
        </div>
      </div>
    </section>
  </article>
</div>`,
    css: `.seo-example {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  font-family: system-ui, sans-serif;
  background: linear-gradient(to bottom, #f0f9ff, #ffffff);
}

.seo-header {
  background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

.seo-header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.score-badge {
  background: #10b981;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.5rem;
}

article {
  padding: 2rem;
  line-height: 1.8;
}

h1 {
  font-size: 2.5rem;
  color: #0f172a;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 1rem;
}

.article-meta {
  display: flex;
  gap: 1.5rem;
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f1f5f9;
  border-radius: 6px;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #1e293b;
  font-weight: 500;
  background: #e0e7ff;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #4f46e5;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2.5rem;
}

h2 {
  font-size: 2rem;
  color: #1e40af;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-left: 5px solid #3b82f6;
  padding-left: 1.25rem;
}

h3 {
  font-size: 1.4rem;
  color: #2563eb;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
}

p {
  color: #334155;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.seo-checklist {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #16a34a;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.seo-checklist h2 {
  color: #15803d;
  border-left-color: #16a34a;
  margin-top: 0;
}

.checklist-items {
  margin-top: 1rem;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  color: #166534;
  font-weight: 500;
}

.check-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #16a34a;
}

.check-item label {
  cursor: pointer;
  flex: 1;
  margin: 0;
}`,
    js: `
    function calculateSEOScore() {
      const checks = document.querySelectorAll('.check-item input[type="checkbox"]:checked');
      const totalChecks = document.querySelectorAll('.check-item input[type="checkbox"]');
      const score = Math.round((checks.length / totalChecks.length) * 100);
      
      const scoreBadge = document.getElementById('seo-score');
      if(score === 100) {
        scoreBadge.textContent = 'A+';
        scoreBadge.style.background = '#10b981';
      } else if(score >= 80) {
        scoreBadge.textContent = 'A';
        scoreBadge.style.background = '#06b6d4';
      } else {
        scoreBadge.textContent = 'B';
        scoreBadge.style.background = '#f59e0b';
      }
    }

    document.querySelectorAll('.check-item input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', calculateSEOScore);
    });
    `
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Heading}
        category="HTML Basics"
        title="Headings & Paragraphs"
        description="Structuring your text content for readability and meaning"
        colorTheme="blue"
      />

      {/* ==================== HEADING BASICS ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Heading className="w-6 h-6 text-blue-600" />
            HTML Heading Elements (h1-h6)
          </CardTitle>
          <CardDescription className="text-base">
            Six levels of headings to structure your content hierarchy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Hierarchy */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg mb-4 text-center">Heading Hierarchy Visual</h4>
            <div className="space-y-3">
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <code className="text-2xl font-bold">&lt;h1&gt;</code>
                <p className="text-sm mt-1">Most Important - Page Title</p>
              </div>
              <div className="ml-4 bg-blue-500 text-white p-3 rounded-lg text-center">
                <code className="text-xl font-bold">&lt;h2&gt;</code>
                <p className="text-xs mt-1">Major Sections</p>
              </div>
              <div className="ml-8 bg-blue-400 text-white p-3 rounded-lg text-center">
                <code className="text-lg font-bold">&lt;h3&gt;</code>
                <p className="text-xs mt-1">Subsections</p>
              </div>
              <div className="ml-12 bg-blue-300 text-white p-2 rounded-lg text-center">
                <code className="text-base font-bold">&lt;h4&gt;</code>
                <p className="text-xs mt-1">Sub-subsections</p>
              </div>
              <div className="ml-16 bg-blue-200 text-gray-800 p-2 rounded-lg text-center">
                <code className="text-sm font-bold">&lt;h5&gt;</code>
                <p className="text-xs mt-1">Rarely Used</p>
              </div>
              <div className="ml-20 bg-blue-100 text-gray-800 p-2 rounded-lg text-center">
                <code className="text-xs font-bold">&lt;h6&gt;</code>
                <p className="text-xs mt-1">Least Important</p>
              </div>
            </div>
          </div>

          {/* Size Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted p-5 rounded-lg border">
              <h4 className="font-bold text-base mb-4">Default Browser Sizes</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm">&lt;h1&gt;</code>
                  <span className="text-sm text-muted-foreground">2em (32px)</span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm">&lt;h2&gt;</code>
                  <span className="text-sm text-muted-foreground">1.5em (24px)</span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm">&lt;h3&gt;</code>
                  <span className="text-sm text-muted-foreground">1.17em (18.72px)</span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm">&lt;h4&gt;</code>
                  <span className="text-sm text-muted-foreground">1em (16px)</span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm">&lt;h5&gt;</code>
                  <span className="text-sm text-muted-foreground">0.83em (13.28px)</span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm">&lt;h6&gt;</code>
                  <span className="text-sm text-muted-foreground">0.67em (10.72px)</span>
                </div>
              </div>
            </div>

            <div className="bg-muted p-5 rounded-lg border">
              <h4 className="font-bold text-base mb-4">HTML Syntax</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-background p-2 rounded font-mono">
                  <span className="text-blue-600">&lt;h1&gt;</span>
                  Main Title
                  <span className="text-red-600">&lt;/h1&gt;</span>
                </div>
                <div className="bg-background p-2 rounded font-mono">
                  <span className="text-blue-600">&lt;h2&gt;</span>
                  Section
                  <span className="text-red-600">&lt;/h2&gt;</span>
                </div>
                <div className="bg-background p-2 rounded font-mono">
                  <span className="text-blue-600">&lt;h3&gt;</span>
                  Subsection
                  <span className="text-red-600">&lt;/h3&gt;</span>
                </div>
              </div>
            </div>
          </div>

          <FrontendCodePreview
            title="Heading Levels Example"
            description="See how all six heading levels look and behave in practice"
            html={`<h1>Main Page Title (H1)</h1>
<p>This is the most important heading - use only once per page.</p>

<h2>Major Section (H2)</h2>
<p>Used for main sections of your content.</p>

<h3>Subsection (H3)</h3>
<p>For subsections within H2 sections.</p>

<h4>Sub-subsection (H4)</h4>
<p>For further nested content.</p>

<h5>Deep Nesting (H5)</h5>
<p>Rarely needed in most documents.</p>

<h6>Deepest Level (H6)</h6>
<p>The smallest heading level.</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 1rem;
}

h1 {
  font-size: 2.5rem;
  color: #1e40af;
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

html.dark h1 {
  color: #60a5fa;
}

h2 {
  font-size: 2rem;
  color: #2563eb;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #93c5fd;
}

h3 {
  font-size: 1.75rem;
  color: #3b82f6;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark h3 {
  color: #bfdbfe;
}

h4 {
  font-size: 1.5rem;
  color: #60a5fa;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark h4 {
  color: #dbeafe;
}

h5 {
  font-size: 1.25rem;
  color: #93c5fd;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark h5 {
  color: #eff6ff;
}

h6 {
  font-size: 1rem;
  color: #bfdbfe;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark h6 {
  color: #f0f9ff;
}

p {
  color: #475569;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark p {
  color: #cbd5e1;
}`}
            colorTheme="blue"
            icon={Heading}
            previewHeight="450px"
          />

          <InteractivePlayground
            title="Heading Hierarchy Playground"
            description="Explore proper heading structure with nested sections and subsections"
            features={[
              'Proper H1-H6 Usage',
              'Nested Sections',
              'SEO Best Practices',
              'Accessibility'
            ]}
            buttonText="Try Heading Hierarchy"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: headingHierarchyDemo.html,
              css: headingHierarchyDemo.css,
              js: headingHierarchyDemo.js
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* ==================== HEADING RULES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-green-600" />
            Heading Hierarchy Rules
          </CardTitle>
          <CardDescription className="text-base">
            Essential guidelines for proper heading structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Correct Usage */}
            <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-4 text-green-700 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                Correct Hierarchy
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-muted p-3 rounded">
                  <code className="font-mono block mb-2 text-green-600 font-bold">✓ Sequential Order</code>
                  <pre className="text-xs font-mono">{`<h1>Main Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
      <h4>Detail</h4>`}</pre>
                </div>
                <div className="bg-muted p-3 rounded">
                  <code className="font-mono block mb-2 text-green-600 font-bold">✓ One H1 per Page</code>
                  <pre className="text-xs font-mono">{`<h1>Page Title</h1>
<p>Only one h1 element</p>`}</pre>
                </div>
              </div>
            </div>

            {/* Incorrect Usage */}
            <div className="bg-red-50 dark:bg-red-950/20 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-4 text-red-700 dark:text-red-400">
                <XCircle className="w-5 h-5" />
                Incorrect Hierarchy
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-muted p-3 rounded">
                  <code className="font-mono block mb-2 text-red-600 font-bold">✗ Skipping Levels</code>
                  <pre className="text-xs font-mono">{`<h1>Title</h1>
  <h3>Wrong!</h3>
    <h5>Skipped h2, h4</h5>`}</pre>
                </div>
                <div className="bg-muted p-3 rounded">
                  <code className="font-mono block mb-2 text-red-600 font-bold">✗ Multiple H1s</code>
                  <pre className="text-xs font-mono">{`<h1>First Title</h1>
<h1>Second Title</h1>`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Rules */}
          <div className="bg-amber-50 dark:bg-amber-950/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-amber-600" />
              Golden Rules
            </h4>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <ArrowDown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>One H1 per page</strong> - Your main page title/topic</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowDown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Don't skip levels</strong> - Follow sequential order (h1→h2→h3)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowDown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Use for structure, not styling</strong> - Don't choose based on size</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowDown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Be descriptive</strong> - Headings should clearly describe content</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowDown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Keep consistent</strong> - Maintain style throughout your site</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* ==================== PARAGRAPH BASICS ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <AlignLeft className="w-6 h-6 text-purple-600" />
            Paragraph Element (&lt;p&gt;)
          </CardTitle>
          <CardDescription className="text-base">
            The fundamental building block for text content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Structure */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg mb-4 text-center">Paragraph Structure</h4>
            <div className="bg-muted p-6 rounded-lg text-center">
              <code className="text-lg font-mono">
                <span className="text-blue-600 dark:text-blue-400">&lt;p&gt;</span>
                <span className="text-foreground"> Your text content goes here. It can be as long or short as needed. </span>
                <span className="text-red-600 dark:text-red-400">&lt;/p&gt;</span>
              </code>
            </div>
          </div>

          {/* Paragraph Characteristics */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-base mb-2">Display</h4>
              <p className="text-sm text-muted-foreground">Block-level element (starts on new line)</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-base mb-2">Spacing</h4>
              <p className="text-sm text-muted-foreground">Default margin top and bottom</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-base mb-2">Content</h4>
              <p className="text-sm text-muted-foreground">Can contain text and inline elements</p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-muted p-5 rounded-lg border">
            <h4 className="font-bold text-base mb-3">Paragraph Best Practices</h4>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>One idea or thought per paragraph</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Keep paragraphs reasonably short (3-5 sentences)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Use white space to improve readability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Start with a topic sentence</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Avoid using &lt;br&gt; for spacing (use CSS)</span>
              </li>
            </ul>
          </div>

          <InteractivePlayground
            title="Paragraph Styling Playground"
            description="Learn text alignment, indentation, line spacing, and paragraph formatting"
            features={[
              'Text Alignment',
              'Line Spacing',
              'Indentation',
              'Drop Caps'
            ]}
            buttonText="Explore Paragraph Styles"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: paragraphStylingDemo.html,
              css: paragraphStylingDemo.css,
              js: paragraphStylingDemo.js
            }}
            colorTheme="emerald"
          />
        </CardContent>
      </Card>

      {/* ==================== ACCESSIBILITY ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-green-600" />
            Accessibility Considerations
          </CardTitle>
          <CardDescription className="text-base">
            Making content accessible to all users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Screen Readers */}
            <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-green-600" />
                Screen Reader Benefits
              </h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Navigate by headings to skip content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Generate document outline/table of contents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Understand content hierarchy and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Semantic elements convey meaning</span>
                </li>
              </ul>
            </div>

            {/* ARIA Attributes */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-lg mb-3">Useful ARIA Attributes</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-muted p-3 rounded">
                  <code className="font-mono font-bold">aria-labelledby</code>
                  <p className="text-xs text-muted-foreground mt-1">Reference heading IDs for sections</p>
                  <code className="text-xs bg-background px-2 py-1 rounded mt-2 inline-block font-mono">
                    aria-labelledby="heading-id"
                  </code>
                </div>
                <div className="bg-muted p-3 rounded">
                  <code className="font-mono font-bold">aria-level</code>
                  <p className="text-xs text-muted-foreground mt-1">Specify heading level for custom elements</p>
                  <code className="text-xs bg-background px-2 py-1 rounded mt-2 inline-block font-mono">
                    role="heading" aria-level="2"
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-purple-50 dark:bg-purple-950/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg mb-3">Accessibility Best Practices</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Use proper heading hierarchy (don't skip levels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Make headings descriptive and unique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Use semantic elements (strong, em) over style-only (b, i)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Keep paragraph text reasonably short</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Provide sufficient color contrast</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Test with screen readers</span>
                </li>
              </ul>
            </div>
          </div>

          <InteractivePlayground
            title="Accessibility Structure Playground"
            description="Build accessible documents with ARIA labels, landmarks, and semantic structure"
            features={[
              'ARIA Landmarks',
              'Skip Navigation',
              'Screen Reader Support',
              'Semantic HTML'
            ]}
            buttonText="Accessible Structure Demo"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: accessibilityDemo.html,
              css: accessibilityDemo.css,
              js: accessibilityDemo.js
            }}
            colorTheme="amber"
          />
        </CardContent>
      </Card>

      {/* ==================== SEO OPTIMIZATION ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            SEO Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Optimizing headings and content for search engines
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* H1 Optimization */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-lg mb-3">H1 Optimization</h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Include primary keyword naturally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Keep it under 60 characters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Make it descriptive and compelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Match or complement your title tag</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Only one H1 per page</span>
                </li>
              </ul>
            </div>

            {/* Content Optimization */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-lg mb-3">Content Strategy</h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Use H2s for main topics/sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Include keywords in H2 and H3 headings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Keep headings concise and clear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Write for humans first, search engines second</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Avoid keyword stuffing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Checklist */}
          <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-lg mb-3">Quick SEO Checklist</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Structure</p>
                <ul className="space-y-1">
                  <li>✓ One H1 per page</li>
                  <li>✓ Logical hierarchy</li>
                  <li>✓ No skipped levels</li>
                  <li>✓ Descriptive headings</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Content</p>
                <ul className="space-y-1">
                  <li>✓ Keywords in headings</li>
                  <li>✓ Short paragraphs</li>
                  <li>✓ Natural language</li>
                  <li>✓ Relevant content</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Technical</p>
                <ul className="space-y-1">
                  <li>✓ Semantic markup</li>
                  <li>✓ Valid HTML</li>
                  <li>✓ Mobile-friendly</li>
                  <li>✓ Fast loading</li>
                </ul>
              </div>
            </div>
          </div>

          <InteractivePlayground
            title="SEO-Optimized Playground"
            description="Learn SEO best practices with proper heading hierarchy and keyword placement"
            features={[
              'One H1 per Page',
              'Logical Hierarchy',
              'Keyword Usage',
              'Meta Content'
            ]}
            buttonText="SEO-Optimized Example"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: seoOptimizedDemo.html,
              css: seoOptimizedDemo.css,
              js: seoOptimizedDemo.js
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* ==================== RESPONSIVE TYPOGRAPHY ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-pink-600" />
            Responsive Typography
          </CardTitle>
          <CardDescription className="text-base">
            Ensuring readability across all device sizes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-pink-50 dark:bg-pink-950/20 p-5 rounded-lg border border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-lg mb-3">Modern Techniques</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-base">CSS clamp()</h5>
                <p className="text-sm text-muted-foreground">Fluid typography that scales between min and max values</p>
                <div className="bg-muted p-3 rounded font-mono text-xs">
                  font-size: clamp(1rem, 2.5vw, 2rem);
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Min: 1rem (16px)</li>
                  <li>• Preferred: 2.5vw (viewport-based)</li>
                  <li>• Max: 2rem (32px)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-base">Viewport Units</h5>
                <p className="text-sm text-muted-foreground">Scale based on screen size</p>
                <div className="bg-muted p-3 rounded font-mono text-xs">
                  font-size: calc(1rem + 1vw);
                </div>
                <ul className="text-sm space-y-1">
                  <li>• vw: viewport width</li>
                  <li>• vh: viewport height</li>
                  <li>• Combined with base size</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Sizes */}
          <div className="bg-muted p-5 rounded-lg border">
            <h4 className="font-bold text-lg mb-3">Recommended Responsive Sizes</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Element</th>
                    <th className="text-left p-2">Mobile</th>
                    <th className="text-left p-2">Tablet</th>
                    <th className="text-left p-2">Desktop</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-mono">h1</td>
                    <td className="p-2">1.75-2rem</td>
                    <td className="p-2">2.25-2.5rem</td>
                    <td className="p-2">2.5-3rem</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">h2</td>
                    <td className="p-2">1.5-1.75rem</td>
                    <td className="p-2">1.875-2rem</td>
                    <td className="p-2">2-2.25rem</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">h3</td>
                    <td className="p-2">1.25-1.5rem</td>
                    <td className="p-2">1.5-1.75rem</td>
                    <td className="p-2">1.75-2rem</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">p</td>
                    <td className="p-2">1rem</td>
                    <td className="p-2">1-1.125rem</td>
                    <td className="p-2">1.125rem</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">small</td>
                    <td className="p-2">0.875rem</td>
                    <td className="p-2">0.875rem</td>
                    <td className="p-2">0.875-1rem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <InteractivePlayground
            title="Responsive Typography Playground"
            description="Create text that scales beautifully across all device sizes using CSS clamp()"
            features={[
              'Fluid Typography',
              'CSS clamp()',
              'Viewport Units',
              'Mobile-First'
            ]}
            buttonText="Try Responsive Typography"
            onLaunchPlayground={onOpenWebPlayground}
            playgroundData={{
              html: responsiveTypographyDemo.html,
              css: responsiveTypographyDemo.css,
              js: responsiveTypographyDemo.js
            }}
            colorTheme="purple"
          />
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
              <h4 className="font-bold text-base mb-2">Heading Rules</h4>
              <ul className="text-sm space-y-1">
                <li>• One H1 per page</li>
                <li>• Sequential hierarchy</li>
                <li>• Descriptive text</li>
                <li>• No skipping levels</li>
                <li>• 60 chars max for H1</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Paragraph Tips</h4>
              <ul className="text-sm space-y-1">
                <li>• One idea per paragraph</li>
                <li>• 3-5 sentences ideal</li>
                <li>• Use white space</li>
                <li>• Topic sentence first</li>
                <li>• Break up long text</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Best Practices</h4>
              <ul className="text-sm space-y-1">
                <li>• Semantic markup</li>
                <li>• Accessibility first</li>
                <li>• SEO-friendly</li>
                <li>• Mobile responsive</li>
                <li>• Test readability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

