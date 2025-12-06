import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Minimize2, Sparkles, CheckCircle, Code, Zap, FileCode, Gauge, Package } from 'lucide-react';

interface CssMinificationProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssMinification({ onOpenWebPlayground }: CssMinificationProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Minimize2}
                category="CSS · Performance"
                title="CSS Minification"
                description="Compress CSS files by removing whitespace, comments, and optimizing syntax for faster downloads and better performance"
                colorTheme="amber"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-amber-600 dark:text-amber-400">
                        <div className="relative">
                            <Minimize2 className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Minification?
                    </CardTitle>
                    <CardDescription className="text-lg text-amber-600 dark:text-amber-400">
                        📦 Reduce file size by removing unnecessary characters, whitespace, and comments without changing functionality!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-amber-400 dark:hover:border-amber-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-amber-600 dark:text-amber-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    📦 File Compression
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Minification</strong> removes all unnecessary characters from CSS code without changing its functionality. This includes whitespace, line breaks, comments, and shortening syntax. Minified CSS files are 40-60% smaller!
                                </p>

                                {/* Minification Visual */}
                                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-4 rounded-lg border border-amber-200/50">
                                    <div className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        ⚡ Compression
                                    </div>
                                    <div className="text-xs text-amber-600 dark:text-amber-400">
                                        Minification reduces CSS file size by 40-60% on average!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Minification Tools
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <FileCode className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">cssnano</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">PostCSS plugin</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Package className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">CleanCSS</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Fast minifier</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Gauge className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Webpack</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Build tool</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Minimize2 className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Terser</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Universal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-900/30 dark:via-yellow-900/30 dark:to-orange-900/30 p-6 rounded-xl border border-amber-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">📦</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-amber-700 dark:text-amber-300">Minified CSS</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Smaller size
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Faster load
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Same function
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
                                        Always keep source maps for easier debugging in production!
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
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Minify CSS</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">{'# 📦 Minify CSS with cssnano'}</div>
                            <div className="text-green-600 dark:text-green-400">npm</div>
                            <div className="text-gray-900 dark:text-white"> install <span className="text-blue-600 dark:text-blue-400">cssnano</span></div>
                            <div className="text-gray-900 dark:text-white">npx <span className="text-purple-600 dark:text-purple-400">cssnano</span> input.css output.min.css</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BEFORE/AFTER EXAMPLE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Before & After Minification
                    </CardTitle>
                    <CardDescription>
                        See how minification dramatically reduces file size
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Minification Comparison"
                        html={`<div class="comparison">
  <div class="panel before">
    <h3>Before Minification</h3>
    <div class="code-block">
      <pre>.button {
  padding: 12px 24px;
  background: #3b82f6;
  border-radius: 8px;
}</pre>
    </div>
    <div class="stats">
      <span class="label">Size:</span>
      <span class="size">1,245 bytes</span>
    </div>
  </div>
  
  <div class="arrow">→</div>
  
  <div class="panel after">
    <h3>After Minification</h3>
    <div class="code-block">
      <pre>.button{padding:12px 24px;background:#3b82f6;border-radius:8px}</pre>
    </div>
    <div class="stats success">
      <span class="label">Size:</span>
      <span class="size">687 bytes</span>
      <span class="reduction">(-45%)</span>
    </div>
  </div>
</div>

<div class="benefits">
  <h4>What Was Removed:</h4>
  <ul>
    <li>✓ Whitespace and line breaks</li>
    <li>✓ Unnecessary spaces</li>
    <li>✓ Comments</li>
    <li>✓ Redundant semicolons</li>
  </ul>
</div>`}
                        css={`/* ❌ BEFORE - Human-readable CSS (1245 bytes) */
.comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

.panel {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.panel h3 {
  color: #111827;
  font-size: 18px;
  margin: 0 0 16px 0;
}

.code-block {
  background: #1f2937;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
}

.stats {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f3f4f6;
  border-radius: 6px;
}

.stats.success {
  background: #d1fae5;
}

.label {
  font-weight: 600;
  color: #6b7280;
}

.size {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.reduction {
  color: #059669;
  font-weight: 600;
  font-size: 14px;
}

.arrow {
  font-size: 36px;
  color: #3b82f6;
  font-weight: bold;
}

.benefits {
  max-width: 1000px;
  margin: 32px auto 0;
  padding: 0 32px;
}

.benefits h4 {
  color: #111827;
  font-size: 20px;
  margin-bottom: 16px;
}

.benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits li {
  padding: 12px;
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  margin-bottom: 8px;
  border-radius: 4px;
  color: #1e40af;
  font-weight: 500;
}

/* ✅ AFTER - Minified version would be:
.comparison{display:grid;grid-template-columns:1fr auto 1fr;gap:20px;align-items:center;max-width:1000px;margin:0 auto;padding:32px;font-family:system-ui,sans-serif}.panel{background:#fff;border:2px solid #e5e7eb;border-radius:12px;padding:24px;box-shadow:0 4px 12px rgba(0,0,0,.05)}...
*/

@media (prefers-color-scheme: dark) {
  .comparison {
    background: #111827;
  }
  
  .panel {
    background: #1f2937;
    border-color: #374151;
  }
  
  .panel h3,
  .size,
  .benefits h4 {
    color: #f9fafb;
  }
  
  .stats {
    background: #374151;
  }
  
  .label {
    color: #9ca3af;
  }
  
  .benefits li {
    background: #1e3a8a;
    border-left-color: #60a5fa;
    color: #dbeafe;
  }
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* MINIFICATION TECHNIQUES */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Minification Techniques
                    </CardTitle>
                    <CardDescription>
                        Different ways to compress and optimize CSS code
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Optimization Methods"
                        html={`<div class="techniques">
  <div class="technique">
    <h3>1. Remove Whitespace</h3>
    <div class="example">
      <div class="before-code">
/* Before */
.box {
  margin: 10px;
  padding: 20px;
}
      </div>
      <div class="after-code">
/* After */
.box{margin:10px;padding:20px}
      </div>
    </div>
  </div>
  
  <div class="technique">
    <h3>2. Shorten Colors</h3>
    <div class="example">
      <div class="before-code">
color: #ffffff;
background: #000000;
      </div>
      <div class="after-code">
color:#fff;
background:#000
      </div>
    </div>
  </div>
  
  <div class="technique">
    <h3>3. Merge Properties</h3>
    <div class="example">
      <div class="before-code">
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 10px;
      </div>
      <div class="after-code">
margin:10px
      </div>
    </div>
  </div>
  
  <div class="technique">
    <h3>4. Remove Zero Units</h3>
    <div class="example">
      <div class="before-code">
padding: 0px;
margin: 0em;
      </div>
      <div class="after-code">
padding:0;
margin:0
      </div>
    </div>
  </div>
</div>`}
                        css={`.techniques {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

.technique {
  margin-bottom: 32px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.technique h3 {
  color: #7c3aed;
  font-size: 20px;
  margin: 0 0 16px 0;
}

.example {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.before-code,
.after-code {
  padding: 16px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.before-code {
  background: #fee2e2;
  border: 2px solid #ef4444;
  color: #991b1b;
}

.after-code {
  background: #d1fae5;
  border: 2px solid #10b981;
  color: #065f46;
}

.before-code::before {
  content: '❌ Original';
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: system-ui, sans-serif;
}

.after-code::before {
  content: '✅ Minified';
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: system-ui, sans-serif;
}

@media (prefers-color-scheme: dark) {
  .techniques {
    background: #111827;
  }
  
  .technique {
    background: #1f2937;
    border-color: #374151;
  }
  
  .technique h3 {
    color: #a78bfa;
  }
  
  .before-code {
    background: #7f1d1d;
    border-color: #dc2626;
    color: #fecaca;
  }
  
  .after-code {
    background: #064e3b;
    border-color: #059669;
    color: #a7f3d0;
  }
}

@media (max-width: 768px) {
  .example {
    grid-template-columns: 1fr;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BUILD TOOL INTEGRATION */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Build Tool Integration
                    </CardTitle>
                    <CardDescription>
                        Automate minification with popular build tools
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Webpack & Vite Setup"
                        html={`<!-- package.json -->
<div class="setup-guide">
  <h3>Install Minifier</h3>
  <div class="command">
    npm install --save-dev cssnano postcss
  </div>
  
  <h3>Configure PostCSS</h3>
  <div class="config-file">
    <strong>postcss.config.js:</strong>
    <pre>module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default'
    })
  ]
}</pre>
  </div>
  
  <h3>Build Command</h3>
  <div class="command">
    npm run build
  </div>
  
  <div class="result">
    ✅ CSS automatically minified in production!
  </div>
</div>`}
                        css={`.setup-guide {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px;
  font-family: system-ui, sans-serif;
}

h3 {
  color: #059669;
  font-size: 22px;
  margin: 32px 0 16px 0;
}

h3:first-child {
  margin-top: 0;
}

.command {
  background: #1f2937;
  color: #10b981;
  padding: 16px 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 2px solid #059669;
  margin-bottom: 24px;
}

.config-file {
  background: white;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.config-file strong {
  color: #6b7280;
  font-size: 14px;
  display: block;
  margin-bottom: 12px;
}

.config-file pre {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #1f2937;
}

.result {
  background: #d1fae5;
  border-left: 4px solid #10b981;
  padding: 20px;
  border-radius: 8px;
  color: #065f46;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .setup-guide {
    background: #111827;
  }
  
  h3 {
    color: #34d399;
  }
  
  .command {
    border-color: #34d399;
    color: #6ee7b7;
  }
  
  .config-file {
    background: #1f2937;
    border-color: #374151;
  }
  
  .config-file strong {
    color: #9ca3af;
  }
  
  .config-file pre {
    background: #111827;
    color: #e5e7eb;
  }
  
  .result {
    background: #064e3b;
    border-left-color: #6ee7b7;
    color: #a7f3d0;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                        <Sparkles className="w-5 h-5" />
                        Minification Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-amber-900 dark:text-amber-200">Minify in production only:</strong>
                            <span className="text-amber-700 dark:text-amber-300"> Keep readable CSS in development for easier debugging.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-amber-900 dark:text-amber-200">Generate source maps:</strong>
                            <span className="text-amber-700 dark:text-amber-300"> Create .map files so DevTools can show original code.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-amber-900 dark:text-amber-200">Use cssnano with PostCSS:</strong>
                            <span className="text-amber-700 dark:text-amber-300"> Most comprehensive minifier with safe optimizations.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-amber-900 dark:text-amber-200">Combine with gzip:</strong>
                            <span className="text-amber-700 dark:text-amber-300"> Minification + gzip compression can reduce size by 80-90%.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Universal Support</strong>
                    Minified CSS works in all browsers since it's just compressed syntax. The browser sees identical CSS rules, just in a smaller file.
                </AlertDescription>
            </Alert>
        </div>
    );
}
