'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Minimize2, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlMinificationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlMinification({ onOpenWebPlayground }: HtmlMinificationProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Minimize2}
        category="HTML · Best Practices"
        title="What is HTML Minification?"
        description="Learn how to optimize HTML by removing unnecessary characters"
        colorTheme="blue"
      />

      {/* What is Minification */}
      <Card>
        <CardHeader>
          <CardTitle>What is Minification?</CardTitle>
          <CardDescription>
            Removing unnecessary characters without changing functionality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold mb-2">Before Minification (Original HTML)</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  </head>
  <body>
    <header>
      <h1>Welcome</h1>
    </header>
    <main>
      <p>This is content</p>
    </main>
  </body>
</html>`}
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Size: ~230 bytes (with whitespace and indentation)
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold mb-2">After Minification</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>My Page</title></head><body><header><h1>Welcome</h1></header><main><p>This is content</p></main></body></html>`}
              </pre>
              <p className="text-sm text-green-700 dark:text-green-300 mt-2 font-semibold">
                Size: ~165 bytes (28% smaller!)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Gets Removed */}
      <Card>
        <CardHeader>
          <CardTitle>What Gets Removed During Minification?</CardTitle>
          <CardDescription>
            Elements removed to reduce file size
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✂️ Whitespace</h4>
              <p className="text-sm text-muted-foreground">
                All unnecessary spaces, tabs, and newlines between tags
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✂️ Comments</h4>
              <p className="text-sm text-muted-foreground">
                HTML comments (&lt;!-- comment --&gt;) are removed
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✂️ Empty Attributes</h4>
              <p className="text-sm text-muted-foreground">
                Attributes like disabled="" become disabled
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✂️ Optional Quotes</h4>
              <p className="text-sm text-muted-foreground">
                Quotes around simple attribute values (class="test" → class=test)
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✂️ Optional Closing Tags</h4>
              <p className="text-sm text-muted-foreground">
                Some closing tags like &lt;/li&gt; and &lt;/p&gt; (when safe)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools */}
      <Card>
        <CardHeader>
          <CardTitle>HTML Minification Tools</CardTitle>
          <CardDescription>
            Popular tools for minifying HTML
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">1. html-minifier</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Node.js package for minifying HTML
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                npm install html-minifier
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">2. Webpack (html-loader)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Minify HTML during build process
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                npm install html-loader --save-dev
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">3. Gulp (gulp-htmlmin)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Task runner for HTML minification
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                npm install gulp-htmlmin --save-dev
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">4. Online Tools</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Web-based minifiers for quick testing
              </p>
              <ul className="text-xs text-muted-foreground list-disc list-inside mt-2">
                <li>HTMLMinifier.com</li>
                <li>minifycode.com</li>
                <li>kangax.github.io/html-minifier</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Impact</CardTitle>
          <CardDescription>
            How minification improves page load times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">📉 File Size Reduction</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 10-30% smaller files</li>
                <li>• Faster downloads</li>
                <li>• Less bandwidth usage</li>
                <li>• Better for mobile users</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">⚡ Faster Parsing</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Browser parses faster</li>
                <li>• Quicker page renders</li>
                <li>• Improved Time to Interactive</li>
                <li>• Better Core Web Vitals</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Minification Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Minify in production only</strong> - Keep readable code in development</li>
            <li><strong>Automate the process</strong> - Use build tools (Webpack, Gulp, npm scripts)</li>
            <li><strong>Source maps</strong> - Generate source maps for debugging minified code</li>
            <li><strong>Gzip compression</strong> - Combine minification with gzip for max reduction</li>
            <li><strong>Test after minification</strong> - Ensure functionality still works</li>
            <li><strong>Cache minified files</strong> - Set proper cache headers</li>
            <li><strong>Version/hash filenames</strong> - Bust cache when content changes</li>
            <li><strong>Minify CSS and JS too</strong> - Don't just minify HTML</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* When NOT to Minify */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>When NOT to Minify</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Development environment</strong> - Keep code readable for debugging</li>
            <li><strong>&lt;pre&gt; tags</strong> - Whitespace matters in preformatted text</li>
            <li><strong>Inline scripts</strong> - May break JavaScript with aggressive minification</li>
            <li><strong>Email templates</strong> - Some email clients require proper formatting</li>
            <li><strong>Human-readable APIs</strong> - Documentation or teaching examples</li>
            <li><strong>Very small files</strong> - Minification overhead not worth it (&lt;1KB)</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Additional Info */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Advanced Optimization</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <p><strong>Combine with other optimizations:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Gzip/Brotli compression</strong> - Server-side compression (70-80% reduction)</li>
              <li><strong>HTTP/2</strong> - Multiplexing reduces need for file concatenation</li>
              <li><strong>CDN</strong> - Serve minified files from edge servers</li>
              <li><strong>Critical CSS</strong> - Inline critical CSS, defer rest</li>
              <li><strong>Code splitting</strong> - Load only what's needed</li>
              <li><strong>Tree shaking</strong> - Remove unused code</li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      {/* Example Build Script */}
      <Card>
        <CardHeader>
          <CardTitle>Example npm Build Script</CardTitle>
          <CardDescription>
            Automate HTML minification in your workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">package.json</h4>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`{
  "scripts": {
    "build": "npm run minify-html",
    "minify-html": "html-minifier --input-dir src --output-dir dist --collapse-whitespace --remove-comments --minify-css --minify-js"
  },
  "devDependencies": {
    "html-minifier": "^4.0.0"
  }
}`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Run minification</h4>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                npm run build
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
