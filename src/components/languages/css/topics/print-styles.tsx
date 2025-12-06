import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Printer, Sparkles, CheckCircle, Code, Zap, FileText, DollarSign, Eye } from 'lucide-react';

interface PrintStylesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function PrintStyles({ onOpenWebPlayground }: PrintStylesProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Printer}
                category="CSS · Best Practices"
                title="Print Styles"
                description="Create printer-friendly versions of your web pages with CSS print media queries and optimization techniques"
                colorTheme="purple"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
                        <div className="relative">
                            <Printer className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are Print Styles?
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                        🖨️ Optimize your web pages for printing with dedicated CSS styles that save ink, improve readability, and enhance user experience!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🖨️ Print Optimization
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Print Styles</strong> use the <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded text-purple-700 dark:text-purple-300">@media print</code> media query to apply special CSS rules when users print your web page. This helps save ink, improve readability, and create professional-looking printed documents.
                                </p>

                                {/* Print Visual */}
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200/50">
                                    <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        💰 Cost Savings
                                    </div>
                                    <div className="text-xs text-purple-600 dark:text-purple-400">
                                        Good print styles can reduce ink usage by 50-70% and improve print quality!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Print Optimizations
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <DollarSign className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Save Ink</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Remove backgrounds</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Eye className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Hide Elements</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Remove nav/ads</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <FileText className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Show URLs</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Display links</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Printer className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Page Breaks</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Control layout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🖨️</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Print Friendly</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Save ink
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Clean layout
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
                                        Test print styles with Ctrl/Cmd + P or browser DevTools print preview!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Print Media Query</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🖨️ Apply styles only when printing */</div>
                            <div className="text-purple-700 dark:text-purple-400">@media print</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">body</span> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">background</span>: <span className="text-yellow-600 dark:text-yellow-400">white</span>;</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">color</span>: <span className="text-yellow-600 dark:text-yellow-400">black</span>;</div>
                            <div className="text-gray-900 dark:text-white">   {'}'}</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC PRINT STYLES */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Printer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Basic Print Optimization
                    </CardTitle>
                    <CardDescription>
                        Remove backgrounds, hide navigation, and optimize colors for printing
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Print-Friendly Article"
                        html={`<article class="content">
  <header class="site-header">
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  
  <main>
    <h1>Understanding CSS Print Styles</h1>
    
    <div class="meta">
      <span class="author">By John Doe</span>
      <span class="date">December 5, 2024</span>
    </div>
    
    <p class="intro">
      Print styles help create beautiful printed versions of web pages. 
      They save ink and improve readability.
    </p>
    
    <p>
      When users print your web page, you can provide a clean, 
      professional layout that's optimized for paper.
    </p>
    
    <aside class="tip">
      💡 <strong>Tip:</strong> Always test your print styles!
    </aside>
    
    <p>
      Good print styles remove unnecessary elements like navigation, 
      ads, and interactive components.
    </p>
  </main>
  
  <footer class="site-footer">
    © 2024 Your Website
  </footer>
</article>`}
                        css={`/* Screen styles */
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Georgia, serif;
}

.site-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

h1 {
  color: #667eea;
  font-size: 36px;
  margin-bottom: 12px;
}

.meta {
  display: flex;
  gap: 20px;
  color: #666;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e5e7eb;
}

.intro {
  font-size: 20px;
  font-weight: 500;
  color: #374151;
  line-height: 1.6;
}

p {
  line-height: 1.8;
  margin-bottom: 16px;
  color: #4b5563;
}

.tip {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 16px;
  margin: 24px 0;
  border-radius: 6px;
}

.site-footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  border-radius: 12px;
}

/* 🖨️ PRINT STYLES - Optimize for printing */
@media print {
  /* Reset colors to save ink */
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  /* Hide unnecessary elements */
  .site-header,
  .site-footer,
  nav,
  aside {
    display: none !important;
  }
  
  /* Reset spacing for print */
  body {
    margin: 0;
    padding: 0;
  }
  
  .content {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
  
  /* Optimize typography */
  h1 {
    font-size: 24pt;
    margin-bottom: 12pt;
    page-break-after: avoid;
  }
  
  p {
    font-size: 12pt;
    line-height: 1.5;
    orphans: 3;
    widows: 3;
  }
  
  /* Add border to meta */
  .meta {
    border-bottom: 1pt solid black;
    padding-bottom: 6pt;
  }
  
  /* Avoid breaking elements */
  h1, h2, h3 {
    page-break-after: avoid;
  }
  
  p {
    page-break-inside: avoid;
  }
}

@media (prefers-color-scheme: dark) {
  .content {
    background: #1f2937;
  }
  
  h1 {
    color: #a78bfa;
  }
  
  p {
    color: #d1d5db;
  }
  
  .meta {
    color: #9ca3af;
    border-bottom-color: #374151;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* SHOW URLS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Display Link URLs
                    </CardTitle>
                    <CardDescription>
                        Show URLs next to links so printed documents remain useful
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Print URLs After Links"
                        html={`<div class="article">
  <h2>Useful Resources</h2>
  
  <p>
    Check out <a href="https://developer.mozilla.org">MDN Web Docs</a> 
    for comprehensive CSS documentation.
  </p>
  
  <p>
    Learn more at <a href="https://css-tricks.com">CSS-Tricks</a> 
    for practical examples and tutorials.
  </p>
  
  <p>
    Visit <a href="https://caniuse.com">Can I Use</a> 
    to check browser compatibility.
  </p>
  
  <div class="note">
    📄 When you print this page, URLs will appear next to each link!
  </div>
</div>`}
                        css={`.article {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  font-family: Georgia, serif;
}

h2 {
  color: #059669;
  font-size: 28px;
  margin-bottom: 24px;
}

p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #374151;
}

a {
  color: #0ea5e9;
  text-decoration: underline;
  font-weight: 500;
}

a:hover {
  color: #0284c7;
}

.note {
  background: #dbeafe;
  border-left: 4px solid #0ea5e9;
  padding: 16px;
  margin-top: 32px;
  border-radius: 6px;
  font-size: 15px;
}

/* 🖨️ PRINT STYLES - Show URLs after links */
@media print {
  body {
    background: white;
  }
  
  .article {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  
  h2 {
    color: black;
    font-size: 18pt;
  }
  
  p {
    font-size: 12pt;
    color: black;
  }
  
  /* Show URL after each link */
  a::after {
    content: " (" attr(href) ")";
    font-size: 10pt;
    color: #666;
    font-weight: normal;
  }
  
  /* Don't show URL for anchor links */
  a[href^="#"]::after {
    content: "";
  }
  
  /* Style links for print */
  a {
    color: black;
    text-decoration: underline;
  }
  
  .note {
    background: #f0f0f0;
    border-left: 2pt solid black;
  }
}

@media (prefers-color-scheme: dark) {
  .article {
    background: #1f2937;
  }
  
  h2 {
    color: #34d399;
  }
  
  p {
    color: #d1d5db;
  }
  
  .note {
    background: #1e3a8a;
    border-left-color: #60a5fa;
    color: #dbeafe;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* PAGE BREAKS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Page Break Control
                    </CardTitle>
                    <CardDescription>
                        Control where content breaks across printed pages
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Page Break Management"
                        html={`<div class="document">
  <section class="chapter">
    <h2>Chapter 1: Introduction</h2>
    <p>
      This is the first chapter of our document. It contains important 
      information that should stay together when printed.
    </p>
    <p>
      Page breaks are controlled using CSS properties like 
      page-break-before, page-break-after, and page-break-inside.
    </p>
  </section>
  
  <section class="chapter">
    <h2>Chapter 2: Getting Started</h2>
    <p>
      This chapter starts on a new page when printed, making the 
      document easier to read and more professional.
    </p>
    <div class="code-block">
      <pre>@media print {
  .chapter {
    page-break-before: always;
  }
}</pre>
    </div>
  </section>
  
  <section class="chapter">
    <h2>Chapter 3: Advanced Topics</h2>
    <p>
      Each chapter starts fresh on its own page, creating a clean 
      and organized printed document.
    </p>
  </section>
</div>`}
                        css={`.document {
  max-width: 700px;
  margin: 0 auto;
  padding: 24px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.chapter {
  margin-bottom: 48px;
  padding: 24px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #f59e0b;
  font-size: 28px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid #fbbf24;
}

p {
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 16px;
}

.code-block {
  background: #1f2937;
  padding: 16px;
  border-radius: 8px;
  margin: 20px 0;
}

pre {
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  margin: 0;
  overflow-x: auto;
}

/* 🖨️ PRINT STYLES - Control page breaks */
@media print {
  body {
    background: white;
  }
  
  .document {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  
  .chapter {
    margin-bottom: 0;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    
    /* Start each chapter on a new page */
    page-break-before: always;
    page-break-inside: avoid;
  }
  
  /* Don't break the first chapter */
  .chapter:first-of-type {
    page-break-before: avoid;
  }
  
  h2 {
    color: black;
    font-size: 18pt;
    border-bottom: 1pt solid black;
    
    /* Keep heading with content */
    page-break-after: avoid;
  }
  
  p {
    font-size: 12pt;
    color: black;
    
    /* Prevent orphans and widows */
    orphans: 3;
    widows: 3;
    page-break-inside: avoid;
  }
  
  .code-block {
    background: #f3f4f6;
    border: 1pt solid black;
    page-break-inside: avoid;
  }
  
  pre {
    color: black;
    font-size: 10pt;
  }
}

@media (prefers-color-scheme: dark) {
  .document {
    background: #111827;
  }
  
  .chapter {
    background: #1f2937;
    border-color: #374151;
  }
  
  h2 {
    color: #fbbf24;
  }
  
  p {
    color: #d1d5db;
  }
}`}
                        colorTheme="orange"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Sparkles className="w-5 h-5" />
                        Print Style Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Remove backgrounds and colors:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Use white backgrounds and black text to save ink costs.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Hide navigation and UI:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Remove headers, footers, sidebars, and interactive elements that don't work on paper.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Use point sizes:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Use `pt` units for print (12pt body text, 18pt headings) for consistent sizing.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-purple-900 dark:text-purple-200">Control page breaks:</strong>
                            <span className="text-purple-700 dark:text-purple-300"> Use `page-break-*` properties to avoid breaking headings, images, or important content.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Universal Browser Support</strong>
                    @media print is supported in all browsers. Test your print styles with browser print preview (Ctrl/Cmd + P) before deployment.
                </AlertDescription>
            </Alert>
        </div>
    );
}
