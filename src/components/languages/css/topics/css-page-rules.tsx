'use client';

import React from 'react';
import { FileText, Book, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssPageRulesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPageRules({ onOpenWebPlayground }: CssPageRulesProps) {
  
  return (
    <CssTopicLayout
      icon={FileText}
      title="CSS Page Rules"
      description="Control how documents look when printed"
      category="CSS Print & Paged Media"
      whatIsIt={{
        title: "What are CSS @page Rules?",
        description: "Special CSS rules that control the layout of printed pages",
        keyPoints: [
          "Set page size, margins, and orientation",
          "Create headers and footers for printed pages",
          "Control page breaks and numbering",
          "Different styles for first page, left/right pages",
          "Essential for professional documents",
          "Works with @media print"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Page Rules Matter">
        When printing documents like reports or books, you need control over page size, margins, headers, and footers. 
        The <code>@page</code> rule lets you style the printed page itself, not just the content on it!
      </InfoAlert>

      {/* Key Concepts */}
      <SectionCard
        title="What Can You Control?"
        description="Main features of @page rules"
        icon={Book}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "📏 Page Size & Margins",
              description: "Set paper size and margins",
              example: "@page { size: A4; margin: 2cm; }"
            },
            {
              title: "📄 Page Orientation",
              description: "Portrait or landscape",
              example: "@page { size: A4 landscape; }"
            },
            {
              title: "🎯 Specific Pages",
              description: "Style :first, :left, :right pages",
              example: "@page :first { margin-top: 5cm; }"
            },
            {
              title: "🔢 Headers & Footers",
              description: "Add page numbers and titles",
              example: "@top-center { content: 'Report'; }"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic @page Syntax"
        description="How to use page rules"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Simple Page Setup"
            code={`/* Basic page setup for printing */
@page {
  size: A4;              /* Paper size */
  margin: 2cm;           /* All margins */
  margin-top: 3cm;       /* Extra top margin */
}

/* Use with print media query */
@media print {
  @page {
    size: A4 portrait;
    margin: 2.5cm;
  }
  
  body {
    font-size: 12pt;
  }
}`}
          />

          <SyntaxBlock
            title="Page Size Options"
            code={`/* Standard paper sizes */
@page {
  size: A4;              /* 210mm × 297mm */
}

@page {
  size: letter;          /* 8.5in × 11in (US) */
}

@page {
  size: legal;           /* 8.5in × 14in (US) */
}

/* Custom size */
@page {
  size: 8in 10in;        /* Width × Height */
}

/* Orientation */
@page {
  size: A4 landscape;    /* Horizontal */
}

@page {
  size: A4 portrait;     /* Vertical (default) */
}`}
          />

          <SyntaxBlock
            title="Different Margins"
            code={`/* All sides the same */
@page {
  margin: 2cm;
}

/* Top/Bottom and Left/Right */
@page {
  margin: 3cm 2cm;       /* top/bottom left/right */
}

/* Each side individually */
@page {
  margin-top: 3cm;
  margin-right: 2cm;
  margin-bottom: 2cm;
  margin-left: 2.5cm;
}

/* Short form: top right bottom left */
@page {
  margin: 3cm 2cm 2cm 2.5cm;
}`}
          />
        </div>

        <InfoAlert type="tip" title="Print Units">
          For print, use physical units: <code>cm</code> (centimeters), <code>mm</code> (millimeters), 
          or <code>in</code> (inches). These are more accurate for paper than pixels!
        </InfoAlert>
      </SectionCard>

      {/* Pseudo-classes */}
      <SectionCard
        title="Page Pseudo-classes"
        description="Style specific pages differently"
        icon={Target}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="First, Left, and Right Pages"
            code={`/* First page (like a cover page) */
@page :first {
  margin-top: 5cm;       /* Extra top margin */
  margin-bottom: 2cm;
}

/* Left pages (even pages in a book) */
@page :left {
  margin-left: 3cm;      /* Binding side */
  margin-right: 2cm;
}

/* Right pages (odd pages in a book) */
@page :right {
  margin-left: 2cm;
  margin-right: 3cm;     /* Binding side */
}

/* Blank pages */
@page :blank {
  /* No headers/footers on blank pages */
}`}
          />

          <SyntaxBlock
            title="Named Pages"
            code={`/* Define named page styles */
@page chapter-start {
  margin-top: 8cm;       /* Extra space for chapter title */
}

@page appendix {
  size: A4 landscape;    /* Different orientation */
}

/* Use named pages in your HTML */
.chapter {
  page: chapter-start;   /* Apply this page style */
  page-break-before: always;
}

.appendix-section {
  page: appendix;
  page-break-before: always;
}`}
          />
        </div>
      </SectionCard>

      {/* Example 1: Basic Report */}
      <SectionCard
        title="Example: Professional Report Layout"
        description="Setting up page margins and size"
        icon={Book}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="document">
  <div class="cover-page">
    <h1>Annual Report 2024</h1>
    <p class="subtitle">Company Performance Overview</p>
    <p class="date">December 2024</p>
  </div>
  
  <div class="content-page">
    <h2>Executive Summary</h2>
    <p>This report provides a comprehensive overview of company performance 
    for the fiscal year 2024. Key highlights include revenue growth, 
    market expansion, and strategic initiatives.</p>
    
    <h3>Financial Performance</h3>
    <p>Revenue increased by 25% compared to the previous year, 
    reaching $10 million in total sales.</p>
    
    <h3>Market Position</h3>
    <p>We expanded into three new markets and acquired 1,000 new customers.</p>
  </div>
  
  <div class="content-page">
    <h2>Future Outlook</h2>
    <p>Looking ahead to 2025, we anticipate continued growth and 
    expansion into international markets.</p>
  </div>
</div>`}
          css={`/* Screen styles */
.document {
  max-width: 800px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
  padding: 20px;
}

.cover-page {
  text-align: center;
  padding: 100px 20px;
}

.cover-page h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 24px;
  color: #6b7280;
  margin-bottom: 40px;
}

.content-page {
  padding: 40px 20px;
}

/* PRINT STYLES with @page rules */
@media print {
  /* Default page setup */
  @page {
    size: A4 portrait;
    margin: 2.5cm;
  }
  
  /* First page (cover) - extra top margin */
  @page :first {
    margin-top: 8cm;
    margin-bottom: 5cm;
  }
  
  /* Left pages - binding margin on left */
  @page :left {
    margin-left: 3cm;
    margin-right: 2cm;
  }
  
  /* Right pages - binding margin on right */
  @page :right {
    margin-left: 2cm;
    margin-right: 3cm;
  }
  
  /* Reset document container */
  .document {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
  
  /* Cover page styling */
  .cover-page {
    page-break-after: always;
  }
  
  .cover-page h1 {
    font-size: 36pt;
    color: black;
  }
  
  /* Content pages */
  .content-page {
    padding: 0;
  }
  
  h2 {
    font-size: 18pt;
    page-break-after: avoid;
  }
  
  h3 {
    font-size: 14pt;
    page-break-after: avoid;
  }
  
  p {
    font-size: 11pt;
    line-height: 1.6;
    orphans: 3;
    widows: 3;
  }
}`}
          title="Professional Report Layout"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Book Layout */}
      <SectionCard
        title="Example: Book-Style Layout"
        description="Different margins for left and right pages"
        icon={Layers}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<article class="book">
  <section class="chapter">
    <h1>Chapter 1: Getting Started</h1>
    <p>This is the first chapter of our book. Notice how the margins 
    are different on left and right pages, just like in a real book 
    where you need space for binding.</p>
    
    <p>The left pages have more margin on the left side (binding side), 
    and right pages have more margin on the right side (binding side).</p>
  </section>
  
  <section class="chapter">
    <h1>Chapter 2: Advanced Topics</h1>
    <p>This chapter continues on the next pages with proper margins 
    for book binding.</p>
    
    <p>Professional books use this technique to ensure text doesn't 
    get lost in the binding area.</p>
  </section>
</article>`}
          css={`/* Screen styles */
.book {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px;
  font-family: Georgia, serif;
}

.chapter {
  margin-bottom: 60px;
}

.chapter h1 {
  font-size: 32px;
  margin-bottom: 30px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}

.chapter p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

/* PRINT STYLES - Book Layout */
@media print {
  /* Base page setup */
  @page {
    size: 6in 9in;         /* Book size */
    margin: 0;
  }
  
  /* Left pages (verso) */
  @page :left {
    margin-left: 1in;      /* Binding margin */
    margin-right: 0.75in;
    margin-top: 0.75in;
    margin-bottom: 0.75in;
  }
  
  /* Right pages (recto) */
  @page :right {
    margin-left: 0.75in;
    margin-right: 1in;     /* Binding margin */
    margin-top: 0.75in;
    margin-bottom: 0.75in;
  }
  
  /* First page of chapters */
  @page chapter-start {
    margin-top: 2in;       /* Extra space at top */
  }
  
  /* Reset container */
  .book {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
  
  /* Chapter styling */
  .chapter {
    page: chapter-start;
    page-break-before: always;
    margin-bottom: 0;
  }
  
  .chapter h1 {
    font-size: 24pt;
    page-break-after: avoid;
  }
  
  .chapter p {
    font-size: 11pt;
    line-height: 1.6;
    text-align: justify;
    orphans: 3;
    widows: 3;
  }
}`}
          title="Book-Style Layout"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use @page Rules"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Business Reports"
            description="Professional documents with consistent margins"
            icon={FileText}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Books & Manuals"
            description="Different margins for left/right pages"
            icon={Book}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Invoices & Forms"
            description="Custom page sizes and orientations"
            icon={CheckCircle}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Academic Papers"
            description="Standardized formatting and margins"
            icon={Sparkles}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="@page Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Use Physical Units:</strong> Always use cm, mm, or in for page margins and sizes</li>
          <li><strong>Standard Sizes:</strong> Stick to standard paper sizes (A4, Letter, Legal) when possible</li>
          <li><strong>Binding Margins:</strong> For books, add extra margin on the binding side (left for left pages, right for right pages)</li>
          <li><strong>Test Print Preview:</strong> Always test using browser's print preview (Ctrl/Cmd+P)</li>
          <li><strong>First Page Special:</strong> Use <code>@page :first</code> for cover pages with extra spacing</li>
          <li><strong>Avoid Page Breaks:</strong> Use <code>page-break-after: avoid</code> on headings</li>
          <li><strong>Named Pages:</strong> Use named pages for sections with different layouts</li>
        </ul>
      </InfoAlert>

      {/* Page Size Reference */}
      <SectionCard
        title="Common Page Sizes Reference"
        description="Standard paper dimensions"
        icon={Layers}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">ISO A Series (International)</h4>
            <ul className="space-y-2 text-sm">
              <li><code>A4</code> - 210mm × 297mm (most common)</li>
              <li><code>A5</code> - 148mm × 210mm (half A4)</li>
              <li><code>A3</code> - 297mm × 420mm (double A4)</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">US Paper Sizes</h4>
            <ul className="space-y-2 text-sm">
              <li><code>letter</code> - 8.5in × 11in</li>
              <li><code>legal</code> - 8.5in × 14in</li>
              <li><code>ledger</code> - 11in × 17in</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">Book Sizes</h4>
            <ul className="space-y-2 text-sm">
              <li><code>5in × 8in</code> - Small book</li>
              <li><code>6in × 9in</code> - Standard book</li>
              <li><code>8.5in × 11in</code> - Textbook</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-3">Margin Guidelines</h4>
            <ul className="space-y-2 text-sm">
              <li>Standard: <code>2cm - 2.5cm</code></li>
              <li>Books: <code>2cm + 1cm binding</code></li>
              <li>Academic: <code>2.54cm (1in)</code></li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Browser Support */}
      <InfoAlert type="warning" title="Browser Support">
        <p className="mt-2">
          <strong>⚠️ Limited Support:</strong> <code>@page</code> rules work in most browsers, but support varies. 
          Basic features (size, margins) work well. Advanced features (page counters, running headers) have limited support. 
          Always test in multiple browsers, especially Chrome and Firefox!
        </p>
      </InfoAlert>

      {/* Additional Info */}
      <InfoAlert type="info" title="Testing Your Page Rules">
        <div className="mt-2 space-y-2">
          <p><strong>Print Preview:</strong> Press <code>Ctrl+P</code> (Windows) or <code>Cmd+P</code> (Mac)</p>
          <p><strong>Save as PDF:</strong> Use print dialog to save as PDF and check margins</p>
          <p><strong>DevTools:</strong> Chrome DevTools has a "Rendering" tab with print preview</p>
          <p><strong>Real Printing:</strong> Test with actual printing for best accuracy</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}
