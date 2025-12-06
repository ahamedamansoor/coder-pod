import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Trash2, Sparkles, CheckCircle, Code, Zap, FileSearch, Scissors, Package } from 'lucide-react';

interface UnusedCssRemovalProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function UnusedCssRemoval({ onOpenWebPlayground }: UnusedCssRemovalProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Trash2}
                category="CSS · Performance"
                title="Unused CSS Removal"
                description="Eliminate dead CSS code with PurgeCSS, tree-shaking, and code coverage tools to reduce bundle size"
                colorTheme="red"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
                        <div className="relative">
                            <Trash2 className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is Unused CSS Removal?
                    </CardTitle>
                    <CardDescription className="text-lg text-red-600 dark:text-red-400">
                        🗑️ Dramatically reduce file size by removing unused CSS rules and selectors that aren't used in your application!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-red-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-red-400 dark:hover:border-red-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🗑️ Dead Code Elimination
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">Unused CSS Removal</strong> identifies and eliminates CSS rules that aren't actually used on your pages. CSS frameworks like Bootstrap or Tailwind can include hundreds of KB of unused styles. Removing them can reduce file size by 80-95%!
                                </p>

                                {/* Removal Visual */}
                                <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 p-4 rounded-lg border border-red-200/50">
                                    <div className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        📉 Size Reduction
                                    </div>
                                    <div className="text-xs text-red-600 dark:text-red-400">
                                        Remove unused CSS to reduce bundle size by 70-95%!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-red-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Removal Tools
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Scissors className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">PurgeCSS</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Auto removal</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <FileSearch className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Coverage</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Find unused</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Package className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">UnCSS</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Strip styles</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Trash2 className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Tree Shake</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Build-time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-red-100 via-rose-100 to-pink-100 dark:from-red-900/30 dark:via-rose-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-red-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🗑️</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-red-700 dark:text-red-300">Clean Code</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Smaller files
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Faster load
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better performance
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
                                        Use Chrome DevTools Coverage tab to find unused CSS instantly!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">PurgeCSS Config</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">// 🗑️ Remove unused CSS</div>
                            <div className="text-purple-700 dark:text-purple-400">module.exports</div>
                            <div className="text-gray-900 dark:text-white"> = {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">content</span>: [<span className="text-green-600 dark:text-green-400">'./src/**/*.html'</span>],</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">css</span>: [<span className="text-green-600 dark:text-green-400">'./src/**/*.css'</span>]</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BEFORE/AFTER EXAMPLE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileSearch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Before & After Removal
                    </CardTitle>
                    <CardDescription>
                        See the dramatic difference in file size after removing unused CSS
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="CSS Size Comparison"
                        html={`<div class="demo">
  <div class="used-only">
    <h2>This Example Uses:</h2>
    <ul>
      <li>.container</li>
      <li>.title</li>
      <li>.description</li>
      <li>.button</li>
    </ul>
  </div>
  
  <div class="container">
    <h1 class="title">Welcome</h1>
    <p class="description">
      This page only uses 4 CSS classes, but the full 
      framework has 200+ classes included.
    </p>
    <button class="button">Click Me</button>
  </div>
  
  <div class="stats">
    <div class="stat">
      <span class="label">Before:</span>
      <span class="value">180 KB</span>
    </div>
    <div class="stat">
      <span class="label">After PurgeCSS:</span>
      <span class="value">8 KB</span>
    </div>
    <div class="stat success">
      <span class="label">Reduction:</span>
      <span class="value">95.5%</span>
    </div>
  </div>
</div>`}
                        css={`/* ❌ BEFORE - Full framework (180 KB)
   Includes 200+ unused classes like:
   .header, .footer, .sidebar, .modal,
   .dropdown, .card, .badge, .alert, etc.
*/

/* ✅ AFTER PurgeCSS - Only used classes (8 KB) */

.demo {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

.used-only {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 20px;
  margin-bottom: 32px;
  border-radius: 8px;
}

.used-only h2 {
  color: #92400e;
  margin-top: 0;
  font-size: 18px;
}

.used-only ul {
  margin: 12px 0 0 0;
  padding-left: 20px;
  color: #78350f;
}

.container {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
}

.title {
  color: #7c3aed;
  font-size: 32px;
  margin: 0 0 16px 0;
}

.description {
  color: #4b5563;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.button {
  background: #7c3aed;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.button:hover {
  background: #6d28d9;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}

.stat.success {
  background: #d1fae5;
}

.label {
  display: block;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
  font-weight: 500;
}

.value {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
}

.success .label {
  color: #065f46;
}

.success .value {
  color: #047857;
}

@media (prefers-color-scheme: dark) {
  .demo {
    background: #111827;
  }
  
  .container {
    background: #1f2937;
    border-color: #374151;
  }
  
  .title {
    color: #a78bfa;
  }
  
  .description {
    color: #d1d5db;
  }
  
  .stat {
    background: #374151;
  }
  
  .label {
    color: #9ca3af;
  }
  
  .value {
    color: #f9fafb;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* PURGECSS CONFIGURATION */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Scissors className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        PurgeCSS Setup
                    </CardTitle>
                    <CardDescription>
                        Configure PurgeCSS to automatically remove unused styles
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="PurgeCSS Configuration"
                        html={`<!-- index.html -->
<div class="app">
  <header class="header">
    <h1 class="logo">My App</h1>
    <nav class="nav">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">About</a>
    </nav>
  </header>
  
  <main class="content">
    <h2 class="heading">PurgeCSS Demo</h2>
    <p class="text">
      PurgeCSS scans your HTML and removes unused CSS classes.
    </p>
    <button class="btn">Get Started</button>
  </main>
</div>

<!-- purgecss.config.js -->
<script>
// PurgeCSS will keep only these classes:
// .app, .header, .logo, .nav, .nav-link,
// .content, .heading, .text, .btn

// All other CSS will be removed!
</script>`}
                        css={`/* Original CSS - 50 classes */

/* ✅ USED - Will be kept */
.app { 
  font-family: system-ui; 
}

.header { 
  background: #3b82f6;
  padding: 20px;
}

.logo { 
  color: white;
  font-size: 24px;
  margin: 0;
}

.nav { 
  display: flex;
  gap: 20px;
  margin-top: 16px;
}

.nav-link { 
  color: white;
  text-decoration: none;
}

.content { 
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.heading { 
  color: #1e40af;
  font-size: 32px;
}

.text { 
  line-height: 1.7;
  color: #4b5563;
}

.btn { 
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

/* ❌ UNUSED - Will be removed by PurgeCSS */
.modal { display: none; }
.dropdown { position: relative; }
.sidebar { width: 250px; }
.footer { background: #111; }
.card { border: 1px solid; }
.badge { padding: 4px 8px; }
/* ... 40 more unused classes ... */

@media (prefers-color-scheme: dark) {
  .header {
    background: #1e40af;
  }
  
  .heading {
    color: #60a5fa;
  }
  
  .text {
    color: #d1d5db;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* CHROME DEVTOOLS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileSearch className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Finding Unused CSS
                    </CardTitle>
                    <CardDescription>
                        Use Chrome DevTools Coverage tab to identify unused styles
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Manual Detection Example"
                        html={`<div class="page">
  <div class="instructions">
    <h3>🔍 How to Find Unused CSS:</h3>
    <ol>
      <li>Open Chrome DevTools (F12)</li>
      <li>Press Ctrl+Shift+P (Cmd+Shift+P on Mac)</li>
      <li>Type "Coverage" and press Enter</li>
      <li>Click the reload button</li>
      <li>See unused bytes in red!</li>
    </ol>
  </div>
  
  <div class="example-section">
    <h2 class="section-title">Example Content</h2>
    <p class="active-class">
      This class is used and will show as green in Coverage.
    </p>
    <button class="primary-btn">Active Button</button>
  </div>
  
  <div class="coverage-info">
    <strong>Coverage Results:</strong><br>
    Total: 45 KB<br>
    Used: 12 KB (26.7%)<br>
    Unused: 33 KB (73.3%) 🔴
  </div>
</div>`}
                        css={`/* Used classes - will show GREEN in Coverage */
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

.instructions {
  background: #dbeafe;
  border: 2px solid #3b82f6;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
}

.instructions h3 {
  color: #1e40af;
  margin-top: 0;
}

.instructions ol {
  color: #1e3a8a;
  line-height: 1.8;
}

.example-section {
  background: white;
  border: 2px solid #e5e7eb;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.section-title {
  color: #059669;
  font-size: 24px;
}

.active-class {
  color: #047857;
  font-size: 16px;
  line-height: 1.7;
}

.primary-btn {
  background: #059669;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.coverage-info {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.8;
}

/* ❌ Unused classes - will show RED in Coverage */
.unused-modal { display: none; }
.unused-dropdown { position: absolute; }
.unused-sidebar { width: 200px; }
.unused-card { padding: 20px; }
.unused-header { background: #111; }
.unused-footer { height: 100px; }
.unused-tooltip { position: fixed; }
.unused-badge { font-size: 12px; }

@media (prefers-color-scheme: dark) {
  .page {
    background: #111827;
  }
  
  .example-section {
    background: #1f2937;
    border-color: #374151;
  }
  
  .section-title {
    color: #34d399;
  }
  
  .active-class {
    color: #6ee7b7;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <Sparkles className="w-5 h-5" />
                        CSS Removal Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-red-900 dark:text-red-200">Automate with build tools:</strong>
                            <span className="text-red-700 dark:text-red-300"> Integrate PurgeCSS into your Webpack, Vite, or PostCSS pipeline.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-red-900 dark:text-red-200">Safelist dynamic classes:</strong>
                            <span className="text-red-700 dark:text-red-300"> Preserve classes added by JavaScript or frameworks with safelist configuration.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-red-900 dark:text-red-200">Test after removal:</strong>
                            <span className="text-red-700 dark:text-red-300"> Always test your application after purging to ensure no required styles were removed.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-red-900 dark:text-red-200">Run in production only:</strong>
                            <span className="text-red-700 dark:text-red-300"> Keep full CSS in development for faster rebuilds, purge only for production builds.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Build-Time Tool</strong>
                    CSS removal happens at build time, so it works with all browsers. The resulting smaller CSS files load faster everywhere with no compatibility issues.
                </AlertDescription>
            </Alert>
        </div>
    );
}
