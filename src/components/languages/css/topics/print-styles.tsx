'use client';

import React from 'react';
import { Printer, FileText, Sparkles, Target, Layers, CheckCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface PrintStylesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function PrintStyles({ onOpenWebPlayground }: PrintStylesProps) {
  
  return (
    <CssTopicLayout
      icon={Printer}
      title="Print Styles"
      description="Make your web pages look great when printed"
      category="CSS Best Practices"
      whatIsIt={{
        title: "What are Print Styles?",
        description: "CSS rules that apply only when users print your webpage",
        keyPoints: [
          "Different styles for screen vs print",
          "Hide navigation, ads, and unnecessary elements",
          "Optimize colors and layout for paper",
          "Save ink and improve readability",
          "Use @media print queries",
          "Essential for reports, articles, and documents"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why Print Styles Matter">
        When users print your webpage, they don't need navigation menus, ads, or fancy animations. 
        Print styles let you create a clean, paper-friendly version that saves ink and looks professional on paper!
      </InfoAlert>

      {/* Key Concepts */}
      <SectionCard
        title="Key Print Styling Concepts"
        description="What to focus on"
        icon={FileText}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🖨️ @media print",
              description: "CSS that only applies when printing",
              example: "@media print { /* styles */ }"
            },
            {
              title: "🙈 Hide Unnecessary",
              description: "Remove navigation, ads, sidebars",
              example: "nav, aside, ads { display: none; }"
            },
            {
              title: "🎨 Optimize Colors",
              description: "Use black text on white for ink savings",
              example: "body { color: #000; background: #fff; }"
            },
            {
              title: "📄 Page Breaks",
              description: "Control where content splits across pages",
              example: "page-break-after: always;"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Print Styles"
        description="How to create print-friendly CSS"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Basic Print Media Query"
            code={`/* Normal screen styles */
body {
  font-family: system-ui, sans-serif;
  background: #f3f4f6;
  color: #1f2937;
}

/* Print-only styles */
@media print {
  body {
    background: white;
    color: black;
    font-size: 12pt; /* Use pt for print */
  }
  
  /* Hide navigation and unnecessary elements */
  nav,
  aside,
  .sidebar,
  .ads,
  .no-print {
    display: none !important;
  }
}`}
          />

          <SyntaxBlock
            title="Hide Elements When Printing"
            code={`/* Hide specific elements from print */
@media print {
  /* Navigation */
  header,
  nav,
  footer {
    display: none;
  }
  
  /* Ads and promotional content */
  .advertisement,
  .popup,
  .banner {
    display: none;
  }
  
  /* Interactive elements */
  button:not(.print-button),
  .form-controls {
    display: none;
  }
}`}
          />

          <SyntaxBlock
            title="Optimize Links for Print"
            code={`/* Show link URLs when printed */
@media print {
  a[href]:after {
    content: " (" attr(href) ")";
    color: #666;
    font-size: 90%;
  }
  
  /* Don't show URLs for internal links */
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
}`}
          />

          <SyntaxBlock
            title="Page Breaks"
            code={`/* Control page breaks */
@media print {
  /* Avoid breaking inside these elements */
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
    page-break-inside: avoid;
  }
  
  /* Keep images with their captions */
  figure {
    page-break-inside: avoid;
  }
  
  /* Force page break before chapters */
  .chapter {
    page-break-before: always;
  }
  
  /* Force page break after sections */
  .section {
    page-break-after: always;
  }
}`}
          />
        </div>

        <InfoAlert type="tip" title="Use Points (pt) for Print">
          For print, use <code>pt</code> (points) instead of <code>px</code> for font sizes. 
          Standard print sizes: body text 12pt, headings 14-24pt. This ensures consistent sizing on paper!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: Article Print Styles */}
      <SectionCard
        title="Example: Print-Friendly Article"
        description="Optimize an article for printing"
        icon={FileText}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="page">
  <header class="site-header">
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  
  <main class="content">
    <article>
      <h1>How to Save Ink When Printing</h1>
      <p class="meta">Published on December 13, 2024</p>
      
      <p>This article demonstrates print-friendly styling. When you print this page, 
      the navigation will disappear, colors will optimize, and the layout will adjust for paper.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Saves ink and paper</li>
        <li>Improves readability</li>
        <li>Professional appearance</li>
      </ul>
      
      <p>Try printing this page (Ctrl/Cmd + P) to see the difference!</p>
      
      <div class="ad-banner no-print">
        <strong>Advertisement</strong>
        <p>This ad won't appear in print</p>
      </div>
      
      <a href="https://example.com/learn-more">Learn More</a>
    </article>
  </main>
  
  <aside class="sidebar">
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#">CSS Tips</a></li>
      <li><a href="#">Web Design</a></li>
    </ul>
  </aside>
</div>`}
          css={`/* Screen styles */
.page {
  font-family: system-ui, sans-serif;
  color: #1f2937;
}

.site-header {
  padding: 20px;
  background: #3b82f6;
  color: white;
  margin-bottom: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

.content {
  max-width: 800px;
  padding: 20px;
}

article h1 {
  color: #1f2937;
  font-size: 32px;
  margin-bottom: 10px;
}

.meta {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 20px;
}

.sidebar {
  padding: 20px;
  background: #f3f4f6;
  border-left: 4px solid #3b82f6;
}

.ad-banner {
  padding: 20px;
  background: #fef3c7;
  border: 2px dashed #f59e0b;
  margin: 20px 0;
}

/* PRINT STYLES */
@media print {
  /* Reset to print-friendly colors */
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.6;
  }
  
  /* Hide screen-only elements */
  .site-header,
  nav,
  .sidebar,
  .no-print {
    display: none !important;
  }
  
  /* Optimize layout */
  .content {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  
  /* Typography for print */
  h1 {
    font-size: 24pt;
    page-break-after: avoid;
  }
  
  h2 {
    font-size: 18pt;
    page-break-after: avoid;
  }
  
  p {
    orphans: 3;
    widows: 3;
  }
  
  /* Show link URLs */
  a[href]:after {
    content: " (" attr(href) ")";
    font-size: 90%;
    color: #666;
  }
  
  a[href^="#"]:after {
    content: "";
  }
  
  /* Page breaks */
  article {
    page-break-inside: avoid;
  }
}`}
          title="Print-Friendly Article"
          colorTheme="purple"
          onOpenPlayground={onOpenWebPlayground}
        />

        <InfoAlert type="info" title="Test Your Print Styles">
          Press <code>Ctrl+P</code> (Windows) or <code>Cmd+P</code> (Mac) to preview how this page will look when printed. 
          You'll see the navigation and sidebar disappear!
        </InfoAlert>
      </SectionCard>

      {/* Example 2: Invoice Print Layout */}
      <SectionCard
        title="Example: Printable Invoice"
        description="Professional document styling"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <div class="screen-toolbar no-print">
    <button>Save as PDF</button>
    <button>Email Invoice</button>
    <button onclick="window.print()">Print Invoice</button>
  </div>
  
  <div class="invoice">
    <div class="invoice-header">
      <h1>Invoice #INV-2024-001</h1>
      <p class="date">Date: December 13, 2024</p>
    </div>
    
    <div class="invoice-details">
      <div class="section">
        <h3>From:</h3>
        <p><strong>Your Company</strong></p>
        <p>123 Business St</p>
        <p>City, State 12345</p>
      </div>
      
      <div class="section">
        <h3>To:</h3>
        <p><strong>Client Name</strong></p>
        <p>456 Client Ave</p>
        <p>Town, State 67890</p>
      </div>
    </div>
    
    <table class="invoice-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Web Development</td>
          <td>40 hours</td>
          <td>$100</td>
          <td>$4,000</td>
        </tr>
        <tr>
          <td>Design Services</td>
          <td>20 hours</td>
          <td>$80</td>
          <td>$1,600</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"><strong>Total:</strong></td>
          <td><strong>$5,600</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>`}
          css={`.container {
  padding: 20px;
  font-family: system-ui, sans-serif;
}

/* Screen-only toolbar */
.screen-toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.screen-toolbar button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Invoice */
.invoice {
  max-width: 800px;
  padding: 40px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.invoice-header {
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.invoice-header h1 {
  color: #3b82f6;
  margin: 0 0 10px 0;
}

.date {
  color: #6b7280;
  margin: 0;
}

.invoice-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.section h3 {
  margin: 0 0 10px 0;
  color: #1f2937;
}

.section p {
  margin: 5px 0;
  color: #4b5563;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.invoice-table th,
.invoice-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.invoice-table thead th {
  background: #f9fafb;
  font-weight: 600;
  color: #1f2937;
}

.invoice-table tfoot {
  font-size: 18px;
  background: #f9fafb;
}

/* PRINT STYLES */
@media print {
  /* Hide screen-only elements */
  .no-print {
    display: none !important;
  }
  
  /* Reset container */
  .container {
    padding: 0;
  }
  
  /* Optimize invoice for print */
  .invoice {
    max-width: 100%;
    padding: 0;
    border: none;
    border-radius: 0;
  }
  
  /* Use print-friendly fonts and sizes */
  body {
    font-size: 11pt;
  }
  
  .invoice-header h1 {
    font-size: 20pt;
    color: black;
  }
  
  /* Ensure table stays together */
  .invoice-table {
    page-break-inside: avoid;
  }
  
  .invoice-table th,
  .invoice-table td {
    padding: 8pt;
  }
  
  /* Print borders for table */
  .invoice-table th,
  .invoice-table td {
    border: 1pt solid #000;
  }
  
  /* No page break inside invoice details */
  .invoice-details {
    page-break-inside: avoid;
  }
}`}
          title="Printable Invoice"
          colorTheme="blue"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Print Styles"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Articles & Blog Posts"
            description="Clean, readable print version without distractions"
            icon={FileText}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Invoices & Receipts"
            description="Professional business documents"
            icon={CheckCircle}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Reports & Documents"
            description="Multi-page documents with proper pagination"
            icon={Layers}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Educational Content"
            description="Lessons, tutorials, and study materials"
            icon={Sparkles}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Print Styles Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Use Points (pt):</strong> Font sizes in pt are more consistent for print (12pt body, 18-24pt headings)</li>
          <li><strong>Black & White:</strong> Use black text on white background to save ink</li>
          <li><strong>Hide Navigation:</strong> Remove menus, sidebars, ads, and interactive elements</li>
          <li><strong>Show URLs:</strong> Display link URLs using <code>::after</code> pseudo-element</li>
          <li><strong>Control Page Breaks:</strong> Use <code>page-break-before/after/inside</code> properties</li>
          <li><strong>Test Print Preview:</strong> Always test using Ctrl/Cmd+P before deploying</li>
          <li><strong>Optimize Images:</strong> Reduce image sizes or remove decorative images</li>
          <li><strong>Remove Shadows:</strong> Text shadows and box shadows waste ink</li>
        </ul>
      </InfoAlert>

      {/* Common CSS Properties */}
      <SectionCard
        title="Useful Print CSS Properties"
        description="Key properties for print control"
        icon={Layers}
      >
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">Page Break Control</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code>page-break-before: always</code> - Force page break before element</li>
              <li><code>page-break-after: always</code> - Force page break after element</li>
              <li><code>page-break-inside: avoid</code> - Prevent breaks inside element</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">Widow & Orphan Control</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code>orphans: 3</code> - Minimum lines at bottom of page</li>
              <li><code>widows: 3</code> - Minimum lines at top of page</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">Print-Specific Units</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code>pt</code> - Points (1/72 inch) - best for print font sizes</li>
              <li><code>cm</code> - Centimeters - for page margins</li>
              <li><code>in</code> - Inches - for page dimensions</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>✅ Universal Support:</strong> <code>@media print</code> is supported in all browsers. 
          Page break properties work in all major browsers. Always test print preview in multiple browsers to ensure consistency!
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}
