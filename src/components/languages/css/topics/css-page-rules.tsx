import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Sparkles, CheckCircle, Code, Zap, Layout, Book, AlignLeft } from 'lucide-react';

interface CssPageRulesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPageRules({ onOpenWebPlayground }: CssPageRulesProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={FileText}
                category="CSS · Print & Paged Media"
                title="CSS Page Rules"
                description="Control printed page layout with @page rules, margins, headers, footers, and page numbering for professional documents"
                colorTheme="blue"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
                        <div className="relative">
                            <FileText className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Page Rules?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        📄 Define page layout, margins, headers, footers, and numbering for printed documents with powerful @page at-rules!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    📄 Page Layout Control
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">@page Rules</strong> allow you to control the layout of printed pages, including margins, size, orientation, and even add content like page numbers and headers. Perfect for creating professional printed documents!
                                </p>

                                {/* Page Visual */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200/50">
                                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        📐 Professional Output
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-400">
                                        @page rules make your printed documents look like professional PDFs!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Page Features
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Layout className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Page Size</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">A4, Letter, etc</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <AlignLeft className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Margins</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Custom spacing</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Book className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Page Numbers</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Auto numbering</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <FileText className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Headers/Footers</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Page regions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">📃</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Page Control</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Custom margins
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Page numbers
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Professional
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💡</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use :first, :left, :right pseudo-classes for different page layouts!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code Example */}
                    <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">@page At-Rule</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 📄 Define page layout */</div>
                            <div className="text-blue-700 dark:text-blue-400">@page</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">size</span>: <span className="text-yellow-600 dark:text-yellow-400">A4</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">margin</span>: <span className="text-yellow-600 dark:text-yellow-400">2cm</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC PAGE MARGINS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layout className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Page Size & Margins
                    </CardTitle>
                    <CardDescription>
                        Set page dimensions and margins for printed output
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Custom Page Layout"
                        html={`<div class="document">
  <h1>Professional Document</h1>
  
  <p>
    This document uses @page rules to set custom page size and margins. 
    When printed, it will have consistent 2.5cm margins on all sides.
  </p>
  
  <section>
    <h2>Section 1: Introduction</h2>
    <p>
      The @page at-rule allows you to modify different aspects of a 
      printed page. You can control the page size, margins, and even 
      add content to page margins.
    </p>
  </section>
  
  <section>
    <h2>Section 2: Page Dimensions</h2>
    <p>
      Common page sizes include A4 (210mm × 297mm), Letter (8.5in × 11in), 
      and Legal (8.5in × 14in). You can also specify custom dimensions.
    </p>
  </section>
  
  <section>
    <h2>Section 3: Margins</h2>
    <p>
      Proper margins make your printed documents more readable and 
      professional. Standard margins are typically between 1.5cm and 2.5cm.
    </p>
  </section>
</div>`}
                        css={`/* Screen styles */
.document {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: Georgia, serif;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #7c3aed;
  font-size: 36px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 3px solid #a78bfa;
}

section {
  margin-bottom: 32px;
}

h2 {
  color: #6d28d9;
  font-size: 24px;
  margin-bottom: 16px;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 16px;
}

/* 📄 PAGE RULES - Set page layout */
@media print {
  /* Define page size and margins */
  @page {
    size: A4;  /* Standard A4 paper */
    margin: 2.5cm;  /* 2.5cm margins on all sides */
  }
  
  /* Alternative: Different margins per side */
  @page {
    margin-top: 3cm;
    margin-bottom: 2cm;
    margin-left: 2.5cm;
    margin-right: 2.5cm;
  }
  
  /* Reset body styles */
  body {
    background: white;
    margin: 0;
    padding: 0;
  }
  
  .document {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
    box-shadow: none;
  }
  
  h1 {
    color: black;
    font-size: 24pt;
    border-bottom: 2pt solid black;
  }
  
  h2 {
    color: black;
    font-size: 16pt;
    page-break-after: avoid;
  }
  
  p {
    font-size: 12pt;
    color: black;
    orphans: 3;
    widows: 3;
  }
  
  section {
    page-break-inside: avoid;
  }
}

@media (prefers-color-scheme: dark) {
  .document {
    background: #1f2937;
  }
  
  h1 {
    color: #a78bfa;
  }
  
  h2 {
    color: #c4b5fd;
  }
  
  p {
    color: #d1d5db;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* DIFFERENT PAGE LAYOUTS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Book className="w-5 h-5 text-green-600 dark:text-green-400" />
                        First, Left & Right Pages
                    </CardTitle>
                    <CardDescription>
                        Apply different styles to first page, left pages, and right pages
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Book-Style Page Layout"
                        html={`<article class="book">
  <h1 class="book-title">The Complete Guide to CSS</h1>
  
  <div class="chapter">
    <h2>Chapter 1: Getting Started</h2>
    <p>
      CSS (Cascading Style Sheets) is a style sheet language used for 
      describing the presentation of a document written in HTML.
    </p>
    <p>
      With CSS, you can control colors, fonts, spacing, layout, and much more. 
      It's an essential skill for web developers.
    </p>
  </div>
  
  <div class="chapter">
    <h2>Chapter 2: Selectors</h2>
    <p>
      CSS selectors are patterns used to select the elements you want to style. 
      There are many different types of selectors available.
    </p>
    <p>
      Learning selectors is crucial for efficient CSS development. They allow 
      you to target exactly the elements you want.
    </p>
  </div>
  
  <div class="chapter">
    <h2>Chapter 3: The Box Model</h2>
    <p>
      Every element in CSS is essentially a box. Understanding the box model 
      is fundamental to mastering CSS layout.
    </p>
  </div>
</article>`}
                        css={`/* Screen styles */
.book {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
}

.book-title {
  color: #059669;
  font-size: 42px;
  text-align: center;
  margin-bottom: 48px;
}

.chapter {
  margin-bottom: 40px;
}

h2 {
  color: #047857;
  font-size: 28px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 16px;
  text-align: justify;
}

/* 📄 PAGE RULES - Book-style layout */
@media print {
  /* First page (cover) - larger margins */
  @page :first {
    margin: 5cm 3cm;
  }
  
  /* Left pages (even) - larger left margin for binding */
  @page :left {
    margin: 2cm 2cm 2cm 3cm;
  }
  
  /* Right pages (odd) - larger right margin for binding */
  @page :right {
    margin: 2cm 3cm 2cm 2cm;
  }
  
  body {
    background: white;
  }
  
  .book {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  
  .book-title {
    color: black;
    font-size: 28pt;
  }
  
  .chapter {
    page-break-before: always;
  }
  
  .chapter:first-of-type {
    page-break-before: avoid;
  }
  
  h2 {
    color: black;
    font-size: 18pt;
    page-break-after: avoid;
  }
  
  p {
    font-size: 12pt;
    color: black;
    orphans: 3;
    widows: 3;
  }
}

@media (prefers-color-scheme: dark) {
  .book {
    background: #111827;
  }
  
  .book-title {
    color: #34d399;
  }
  
  h2 {
    color: #6ee7b7;
  }
  
  p {
    color: #d1d5db;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* PAGE COUNTERS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Page Numbers & Counters
                    </CardTitle>
                    <CardDescription>
                        Add automatic page numbering using CSS counters
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Automatic Page Numbers"
                        html={`<div class="report">
  <header class="report-header">
    <h1>Annual Report 2024</h1>
    <p class="subtitle">Company Performance Overview</p>
  </header>
  
  <main>
    <section class="section">
      <h2>Executive Summary</h2>
      <p>
        This report provides a comprehensive overview of our company's 
        performance throughout 2024. We've achieved significant milestones 
        and exceeded our targets.
      </p>
    </section>
    
    <section class="section">
      <h2>Financial Results</h2>
      <p>
        Revenue increased by 25% year-over-year, demonstrating strong 
        market demand and effective execution of our strategy.
      </p>
      <p>
        Operating margins improved from 15% to 18%, reflecting operational 
        efficiency gains across all departments.
      </p>
    </section>
    
    <section class="section">
      <h2>Future Outlook</h2>
      <p>
        We remain optimistic about 2025, with several new products in 
        development and expansion into emerging markets.
      </p>
    </section>
  </main>
  
  <div class="note">
    📄 Page numbers will appear at the bottom when printed!
  </div>
</div>`}
                        css={`/* Screen styles */
.report {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.report-header {
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 3px solid #f97316;
}

h1 {
  color: #ea580c;
  font-size: 42px;
  margin-bottom: 12px;
}

.subtitle {
  color: #9ca3af;
  font-size: 18px;
  font-style: italic;
}

.section {
  margin-bottom: 40px;
}

h2 {
  color: #ea580c;
  font-size: 28px;
  margin-bottom: 16px;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 16px;
}

.note {
  background: #fed7aa;
  border: 2px solid #f97316;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 32px;
}

/* 📄 PAGE RULES - Page numbering */
@media print {
  /* Define page with bottom margin for page numbers */
  @page {
    size: A4;
    margin: 2cm 2cm 3cm 2cm;  /* Extra bottom margin */
    
    /* Add page number at bottom center */
    @bottom-center {
      content: "Page " counter(page) " of " counter(pages);
      font-size: 10pt;
      color: #666;
    }
  }
  
  /* First page - no page number */
  @page :first {
    @bottom-center {
      content: "";
    }
  }
  
  body {
    background: white;
    counter-reset: page;
  }
  
  .report {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  
  .report-header {
    border-bottom: 2pt solid black;
  }
  
  h1 {
    color: black;
    font-size: 24pt;
  }
  
  .subtitle {
    color: #666;
    font-size: 14pt;
  }
  
  h2 {
    color: black;
    font-size: 16pt;
    page-break-after: avoid;
  }
  
  p {
    font-size: 12pt;
    color: black;
    orphans: 3;
    widows: 3;
  }
  
  .section {
    page-break-inside: avoid;
  }
  
  .note {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  .report {
    background: #111827;
  }
  
  .report-header {
    border-bottom-color: #fb923c;
  }
  
  h1 {
    color: #fb923c;
  }
  
  .subtitle {
    color: #9ca3af;
  }
  
  h2 {
    color: #fdba74;
  }
  
  p {
    color: #d1d5db;
  }
  
  .note {
    background: #7c2d12;
    border-color: #fb923c;
    color: #fed7aa;
  }
}`}
                        colorTheme="orange"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Sparkles className="w-5 h-5" />
                        Page Rule Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-blue-900 dark:text-blue-200">Use standard page sizes:</strong>
                            <span className="text-blue-700 dark:text-blue-300"> Stick to A4, Letter, or Legal for maximum compatibility across printers.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-blue-900 dark:text-blue-200">Set appropriate margins:</strong>
                            <span className="text-blue-700 dark:text-blue-300"> Use 2-3cm margins for comfortable reading and binding space.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-blue-900 dark:text-blue-200">Use :first for cover pages:</strong>
                            <span className="text-blue-700 dark:text-blue-300"> Apply different styling to the first page for title pages or covers.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-blue-900 dark:text-blue-200">Test page numbers:</strong>
                            <span className="text-blue-700 dark:text-blue-300"> Note that margin boxes (@bottom-center) have limited browser support.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                <CheckCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                    <strong className="block mb-1">Partial Browser Support</strong>
                    @page is widely supported for size and margins. However, margin boxes (@bottom-center) and named pages have limited support. Test thoroughly with your target printers.
                </AlertDescription>
            </Alert>
        </div>
    );
}
