'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Heading, Type, AlignLeft, Layers, ArrowDown,
  CheckCircle, XCircle, Info, AlertCircle, Eye,
  Accessibility, Play, FileText
} from 'lucide-react';
import { PageHeader } from '../generic-page-header';

export default function HtmlHeadingsAndParagraphs({
  onOpenWebPlayground
}: {
  onOpenWebPlayground: (html: string, css: string, js: string) => void
}) {

  // ==================== PLAYGROUND EXAMPLES ====================

  const headingHierarchyDemo = {
    html: `<!-- Proper Heading Hierarchy -->
<article>
  <h1>Main Page Title</h1>
  <p>Introduction to the main topic of the page.</p>
  
  <section>
    <h2>First Major Section</h2>
    <p>Content about the first major topic.</p>
    
    <h3>Subsection 1.1</h3>
    <p>More detailed information about subsection 1.1</p>
    
    <h3>Subsection 1.2</h3>
    <p>More detailed information about subsection 1.2</p>
  </section>
  
  <section>
    <h2>Second Major Section</h2>
    <p>Content about the second major topic.</p>
    
    <h3>Subsection 2.1</h3>
    <p>Details about this subsection.</p>
    
    <h4>Sub-subsection 2.1.1</h4>
    <p>Even more specific information.</p>
  </section>
</article>`,
    css: `article { max-width: 800px; margin: 0 auto; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6; }
h1 { color: #1e40af; font-size: 2.5rem; margin-bottom: 1rem; border-bottom: 3px solid #3b82f6; padding-bottom: 0.5rem; }
h2 { color: #2563eb; font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; border-left: 4px solid #3b82f6; padding-left: 1rem; }
h3 { color: #3b82f6; font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.75rem; }
h4 { color: #60a5fa; font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; }
p { color: #374151; margin-bottom: 1rem; }
section { margin-bottom: 2rem; }`,
    js: ''
  };

  const paragraphStylingDemo = {
    html: `<!-- Various Paragraph Styles -->
<article>
  <h1>Article Title</h1>
  
  <!-- Lead Paragraph -->
  <p class="lead">
    This is a lead paragraph that introduces the article. 
    It's typically larger and stands out from regular paragraphs.
  </p>
  
  <!-- Regular Paragraphs -->
  <p>
    This is a regular paragraph with normal styling. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua.
  </p>
  
  <p>
    Another paragraph that continues the discussion. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  
  <!-- Highlighted Paragraph -->
  <p class="highlight">
    This paragraph is highlighted to draw attention to important information.
  </p>
  
  <!-- Indented Paragraph -->
  <p class="indented">
    This paragraph is indented, often used for quotes or special content that 
    needs to be visually distinguished from the main text flow.
  </p>
  
  <!-- Small Text Paragraph -->
  <p class="small">
    This is small text, often used for footnotes, disclaimers, or less important information.
  </p>
</article>`,
    css: `article { max-width: 700px; margin: 0 auto; padding: 2rem; font-family: Georgia, serif; line-height: 1.8; }
h1 { font-size: 2.5rem; color: #1e293b; margin-bottom: 1.5rem; }
p { margin-bottom: 1.25rem; color: #334155; }
.lead { font-size: 1.25rem; font-weight: 500; color: #1e293b; line-height: 1.6; margin-bottom: 1.5rem; }
.highlight { background: #fef3c7; padding: 1rem; border-left: 4px solid #f59e0b; border-radius: 4px; }
.indented { margin-left: 2rem; padding-left: 1rem; border-left: 2px solid #94a3b8; font-style: italic; }
.small { font-size: 0.875rem; color: #64748b; }`,
    js: ''
  };

  const accessibilityDemo = {
    html: `<!-- Accessibility-Focused Markup -->
<article aria-labelledby="main-heading">
  <h1 id="main-heading">Accessible Content Structure</h1>
  
  <nav aria-label="Table of contents">
    <h2>Contents</h2>
    <ul>
      <li><a href="#section1">Introduction</a></li>
      <li><a href="#section2">Main Content</a></li>
      <li><a href="#section3">Conclusion</a></li>
    </ul>
  </nav>
  
  <section id="section1" aria-labelledby="intro-heading">
    <h2 id="intro-heading">Introduction</h2>
    <p>
      Screen readers use headings to navigate content. Proper heading hierarchy 
      helps users understand document structure and jump between sections.
    </p>
  </section>
  
  <section id="section2" aria-labelledby="content-heading">
    <h2 id="content-heading">Main Content</h2>
    <p>
      Each paragraph should contain a complete thought. Break content into 
      digestible chunks for better readability.
    </p>
    
    <h3>Subsection</h3>
    <p>
      Use h3 for subsections under h2, maintaining logical hierarchy throughout 
      your document.
    </p>
  </section>
  
  <section id="section3" aria-labelledby="conclusion-heading">
    <h2 id="conclusion-heading">Conclusion</h2>
    <p>
      Proper semantic markup ensures your content is accessible to everyone, 
      including those using assistive technologies.
    </p>
  </section>
</article>`,
    css: `article { max-width: 800px; margin: 0 auto; padding: 2rem; font-family: system-ui, sans-serif; }
nav { background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; }
nav h2 { font-size: 1.25rem; margin-bottom: 1rem; }
nav ul { list-style: none; padding: 0; }
nav li { margin: 0.5rem 0; }
nav a { color: #2563eb; text-decoration: none; }
nav a:hover { text-decoration: underline; }
section { margin-top: 2rem; }
h1 { font-size: 2.5rem; color: #1e40af; margin-bottom: 1.5rem; }
h2 { font-size: 2rem; color: #2563eb; margin-top: 2rem; margin-bottom: 1rem; }
h3 { font-size: 1.5rem; color: #3b82f6; margin-top: 1.5rem; margin-bottom: 0.75rem; }
p { line-height: 1.7; color: #334155; margin-bottom: 1rem; }`,
    js: ''
  };

  const textFormattingDemo = {
    html: `<!-- Text Formatting within Paragraphs -->
<article>
  <h1>Text Formatting Examples</h1>
  
  <h2>Emphasis and Importance</h2>
  <p>
    Use <em>emphasis (em)</em> for stress emphasis and 
    <strong>strong importance (strong)</strong> for strong importance.
  </p>
  
  <p>
    The <i>italic (i)</i> element is for technical terms, and 
    <b>bold (b)</b> element is for keywords without extra importance.
  </p>
  
  <h2>Special Text Elements</h2>
  <p>
    You can use <mark>highlighted text</mark> to draw attention, 
    <code>inline code</code> for code snippets, and 
    <kbd>Ctrl+C</kbd> for keyboard shortcuts.
  </p>
  
  <p>
    Scientific notation: H<sub>2</sub>O (subscript) and 
    mathematical expressions: E=mc<sup>2</sup> (superscript).
  </p>
  
  <h2>Quotations and Citations</h2>
  <p>
    As the saying goes, <q>Actions speak louder than words.</q>
  </p>
  
  <p>
    According to <cite>The HTML Specification</cite>, semantic markup 
    improves accessibility and SEO.
  </p>
  
  <h2>Editing Marks</h2>
  <p>
    The price was <del>$100</del> <ins>$80</ins> after the discount.
  </p>
  
  <p>
    <small>Note: This is supplementary information in smaller text.</small>
  </p>
</article>`,
    css: `article { max-width: 800px; margin: 0 auto; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.8; }
h1 { font-size: 2.5rem; color: #1e40af; margin-bottom: 1.5rem; }
h2 { font-size: 1.75rem; color: #2563eb; margin-top: 2rem; margin-bottom: 1rem; }
p { color: #374151; margin-bottom: 1rem; }
em { font-style: italic; color: #7c3aed; }
strong { font-weight: bold; color: #dc2626; }
mark { background: #fef3c7; padding: 0.125rem 0.25rem; }
code { background: #f1f5f9; padding: 0.125rem 0.375rem; border-radius: 3px; font-family: monospace; color: #be123c; }
kbd { background: #1e293b; color: white; padding: 0.125rem 0.5rem; border-radius: 3px; font-family: monospace; font-size: 0.875rem; }
sub, sup { font-size: 0.75rem; }
cite { font-style: italic; color: #059669; }
del { color: #991b1b; }
ins { color: #065f46; text-decoration: underline; }
small { font-size: 0.875rem; color: #6b7280; }`,
    js: ''
  };

  const responsiveTypographyDemo = {
    html: `<!-- Responsive Typography -->
<article>
  <h1 class="responsive-h1">Responsive Heading</h1>
  <p class="responsive-lead">
    This is a lead paragraph that adjusts its size based on viewport width.
  </p>
  
  <h2 class="responsive-h2">Section Heading</h2>
  <p class="responsive-text">
    Regular paragraph text that remains readable across all device sizes. 
    The font size and line height adjust for optimal readability on mobile, 
    tablet, and desktop screens.
  </p>
  
  <h3 class="responsive-h3">Subsection</h3>
  <p class="responsive-text">
    Responsive typography ensures your content looks great on any device, 
    from smartphones to large desktop monitors.
  </p>
</article>`,
    css: `article { 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 1rem;
  font-family: system-ui, sans-serif; 
}

/* Responsive Headings */
.responsive-h1 { 
  font-size: clamp(1.75rem, 5vw, 3rem);
  line-height: 1.2;
  color: #1e40af;
  margin-bottom: 1rem;
}

.responsive-h2 { 
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  line-height: 1.3;
  color: #2563eb;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.responsive-h3 { 
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.4;
  color: #3b82f6;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

/* Responsive Paragraphs */
.responsive-lead { 
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.responsive-text { 
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: clamp(1.6, 2vw, 1.8);
  color: #334155;
  margin-bottom: 1rem;
}

/* Mobile optimization */
@media (max-width: 640px) {
  article { padding: 1rem; }
  .responsive-h1 { margin-bottom: 0.75rem; }
  .responsive-h2 { margin-top: 1.5rem; }
}`,
    js: ''
  };

  const seoOptimizedDemo = {
    html: `<!-- SEO-Optimized Content Structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Guide to HTML Headings | Web Dev Tutorial</title>
  <meta name="description" content="Learn how to use HTML headings properly for SEO, accessibility, and document structure in this comprehensive guide.">
</head>
<body>
  <article>
    <!-- Single H1 per page -->
    <h1>Complete Guide to HTML Headings</h1>
    
    <!-- Lead paragraph with keywords -->
    <p class="lead">
      HTML headings are essential for structuring web content, improving SEO, 
      and enhancing accessibility. This guide covers everything you need to know.
    </p>
    
    <!-- Clear hierarchy -->
    <section>
      <h2>What Are HTML Headings?</h2>
      <p>
        Headings (h1-h6) are HTML elements that define the structure and 
        hierarchy of your content. Search engines use them to understand 
        page content and relevance.
      </p>
    </section>
    
    <section>
      <h2>Best Practices for SEO</h2>
      
      <h3>Use One H1 per Page</h3>
      <p>
        Your h1 should contain your main keyword and accurately describe 
        the page content. Think of it as your page title.
      </p>
      
      <h3>Maintain Logical Hierarchy</h3>
      <p>
        Don't skip heading levels (e.g., h2 to h4). Follow a logical 
        progression: h1 → h2 → h3 → h4, etc.
      </p>
      
      <h3>Include Keywords Naturally</h3>
      <p>
        Use relevant keywords in your headings, but keep them natural 
        and user-focused. Avoid keyword stuffing.
      </p>
    </section>
    
    <section>
      <h2>Conclusion</h2>
      <p>
        Proper heading structure improves both user experience and search 
        engine rankings. Follow these guidelines for optimal results.
      </p>
    </section>
  </article>
</body>
</html>`,
    css: `body { font-family: system-ui, sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.7; }
h1 { font-size: 2.5rem; color: #1e40af; margin-bottom: 1rem; }
.lead { font-size: 1.25rem; color: #1e293b; margin-bottom: 2rem; line-height: 1.6; }
h2 { font-size: 2rem; color: #2563eb; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e2e8f0; }
h3 { font-size: 1.5rem; color: #3b82f6; margin-top: 2rem; margin-bottom: 0.75rem; }
p { color: #374151; margin-bottom: 1rem; }
section { margin-bottom: 2rem; }`,
    js: ''
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

          <Button onClick={() => onOpenWebPlayground(headingHierarchyDemo.html, headingHierarchyDemo.css, headingHierarchyDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Heading Hierarchy
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(paragraphStylingDemo.html, paragraphStylingDemo.css, paragraphStylingDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Explore Paragraph Styles
          </Button>
        </CardContent>
      </Card>

      {/* ==================== TEXT FORMATTING ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-orange-600" />
            Text Formatting Elements
          </CardTitle>
          <CardDescription className="text-base">
            Inline elements for formatting text within paragraphs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Semantic Elements */}
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-green-600">Semantic (With Meaning)</h4>
              {[
                { tag: '<strong>', desc: 'Strong importance', visual: 'Bold text' },
                { tag: '<em>', desc: 'Emphasis/stress', visual: 'Italic text' },
                { tag: '<mark>', desc: 'Highlighted text', visual: 'Yellow highlight' },
                { tag: '<code>', desc: 'Computer code', visual: 'Monospace' },
                { tag: '<kbd>', desc: 'Keyboard input', visual: 'Keyboard style' },
                { tag: '<samp>', desc: 'Sample output', visual: 'Monospace' },
                { tag: '<var>', desc: 'Variable', visual: 'Italic monospace' },
                { tag: '<cite>', desc: 'Citation/title', visual: 'Italic' },
                { tag: '<q>', desc: 'Inline quote', visual: 'Quotes added' },
                { tag: '<abbr>', desc: 'Abbreviation', visual: 'Dotted underline' },
                { tag: '<time>', desc: 'Date/time', visual: 'Normal text' },
                { tag: '<del>', desc: 'Deleted text', visual: 'Strikethrough' },
                { tag: '<ins>', desc: 'Inserted text', visual: 'Underlined' },
              ].map(({ tag, desc, visual }) => (
                <div key={tag} className="bg-muted p-3 rounded border">
                  <div className="flex items-center justify-between mb-1">
                    <code className="font-mono font-bold text-sm">{tag}</code>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded">Semantic</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                  <p className="text-xs text-blue-600 mt-1">Visual: {visual}</p>
                </div>
              ))}
            </div>

            {/* Presentational Elements */}
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-orange-600">Presentational (Style Only)</h4>
              {[
                { tag: '<b>', desc: 'Bold (no importance)', visual: 'Bold text' },
                { tag: '<i>', desc: 'Italic (no emphasis)', visual: 'Italic text' },
                { tag: '<u>', desc: 'Underlined', visual: 'Underlined' },
                { tag: '<s>', desc: 'Strikethrough', visual: 'Strikethrough' },
                { tag: '<small>', desc: 'Smaller text', visual: 'Reduced size' },
                { tag: '<sub>', desc: 'Subscript', visual: 'Below baseline' },
                { tag: '<sup>', desc: 'Superscript', visual: 'Above baseline' },
              ].map(({ tag, desc, visual }) => (
                <div key={tag} className="bg-muted p-3 rounded border">
                  <div className="flex items-center justify-between mb-1">
                    <code className="font-mono font-bold text-sm">{tag}</code>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded">Style</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                  <p className="text-xs text-blue-600 mt-1">Visual: {visual}</p>
                </div>
              ))}

              <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded border border-amber-200 dark:border-amber-800 mt-4">
                <p className="text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <strong>Tip:</strong> Prefer semantic elements for better accessibility and SEO
                </p>
              </div>
            </div>
          </div>

          <Button onClick={() => onOpenWebPlayground(textFormattingDemo.html, textFormattingDemo.css, textFormattingDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Text Formatting
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(accessibilityDemo.html, accessibilityDemo.css, accessibilityDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Accessible Structure Demo
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(seoOptimizedDemo.html, seoOptimizedDemo.css, seoOptimizedDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> SEO-Optimized Example
          </Button>
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

          <Button onClick={() => onOpenWebPlayground(responsiveTypographyDemo.html, responsiveTypographyDemo.css, responsiveTypographyDemo.js)} className="w-full md:w-auto">
            <Play className="mr-2 h-4 w-4" /> Try Responsive Typography
          </Button>
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

