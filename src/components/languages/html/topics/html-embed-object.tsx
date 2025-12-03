'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileVideo, Image as ImageIcon, FileAudio, Code, CheckCircle, AlertCircle, Info, Play } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlEmbedObjectProps {
  onOpenWebPlayground?: (content: { html: string; css?: string; js?: string }) => void;
}

export default function HtmlEmbedObject({ onOpenWebPlayground }: HtmlEmbedObjectProps) {
  const embedExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embed Element Examples</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
    
    .demo-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
    
    .demo-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .card-header {
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .card-header h3 {
      margin-bottom: 8px;
      font-size: 1.3rem;
    }
    
    .card-header p {
      font-size: 14px;
      opacity: 0.9;
    }
    
    .card-body {
      padding: 24px;
    }
    
    embed {
      width: 100%;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
    }
    
    .info-box {
      margin-top: 16px;
      padding: 12px 16px;
      background: #f3f4f6;
      border-left: 4px solid #667eea;
      border-radius: 4px;
    }
    
    .info-box strong {
      color: #667eea;
      display: block;
      margin-bottom: 4px;
    }
    
    .info-box p {
      color: #6b7280;
      font-size: 13px;
      line-height: 1.6;
    }
    
    code {
      background: #e5e7eb;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      color: #667eea;
      font-size: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      body,
      :root.dark body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
      
      .container,
      :root.dark .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1,
      :root.dark h1 {
        color: #60a5fa;
      }
      
      .demo-section,
      :root.dark .demo-section {
        background: #0f172a;
        border-color: #475569;
      }
      
      .demo-section h2,
      :root.dark .demo-section h2 {
        color: #f3f4f6;
      }
      
      .embed-box,
      :root.dark .embed-box {
        background: #000;
        border-color: #475569;
      }
      
      .info-box,
      :root.dark .info-box {
        background: #1e3a8a;
        border-color: #3b82f6;
      }
      
      .info-box strong,
      :root.dark .info-box strong {
        color: #93c5fd;
      }
      
      .info-box p,
      :root.dark .info-box p {
        color: #bfdbfe;
      }
      
      code,
      :root.dark code {
        background: #374151;
        color: #60a5fa;
      }
    }@media (prefers-color-scheme: dark) {
      body,
      :root.dark body {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
      
      .container,
      :root.dark .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1,
      :root.dark h1 {
        color: #34d399;
      }
      
      .demo-grid,
      :root.dark .demo-grid {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
      
      .demo-card,
      :root.dark .demo-card {
        background: #0f172a;
        border-color: #475569;
      }
      
      .demo-card h2,
      :root.dark .demo-card h2 {
        color: #f3f4f6;
      }
      
      .object-box,
      :root.dark .object-box {
        background: #000;
        border-color: #475569;
      }
      
      .feature-list,
      :root.dark .feature-list {
        background: #14532d;
        border-color: #22c55e;
      }
      
      .feature-list li,
      :root.dark .feature-list li {
        color: #86efac;
      }
      
      code,
      :root.dark code {
        background: #374151;
        color: #34d399;
      }
    }@media (prefers-color-scheme: dark) {
      body,
      :root.dark body {
        background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
      }
      
      h1,
      :root.dark h1 {
        color: #c4b5fd;
      }
      
      .comparison-table,
      :root.dark .comparison-table {
        background: #1e293b;
        border-color: #475569;
      }
      
      .comparison-table th,
      :root.dark .comparison-table th {
        background: #0f172a;
        color: #f3f4f6;
      }
      
      .comparison-table td,
      :root.dark .comparison-table td {
        border-color: #475569;
        color: #94a3b8;
      }
      
      .pros,
      :root.dark .pros {
        background: #14532d;
        border-color: #22c55e;
      }
      
      .pros li,
      :root.dark .pros li {
        color: #86efac;
      }
      
      .cons,
      :root.dark .cons {
        background: #7f1d1d;
        border-color: #dc2626;
      }
      
      .cons li,
      :root.dark .cons li {
        color: #fecaca;
      }
      
      .recommendation,
      :root.dark .recommendation {
        background: #1e293b;
      }
      
      .recommendation h2,
      :root.dark .recommendation h2 {
        color: #a78bfa;
      }
      
      .rec-item,
      :root.dark .rec-item {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        border-color: #3b82f6;
      }
      
      .rec-item h3,
      :root.dark .rec-item h3 {
        color: #93c5fd;
      }
      
      .rec-item p,
      :root.dark .rec-item p {
        color: #bfdbfe;
      }
      
      .modern,
      :root.dark .modern {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-color: #f59e0b;
      }
      
      .modern h3,
      :root.dark .modern h3 {
        color: #fde68a;
      }
      
      .modern p,
      :root.dark .modern p {
        color: #fed7aa;
      }
    }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🆚 Embed vs Object</h1>
    
    <div class="comparison">
      <!-- Embed Card -->
      <div class="compare-card">
        <div class="card-header embed-header">
          <h2>&lt;embed&gt;</h2>
          <p>Simple, self-closing tag</p>
        </div>
        <div class="card-body">
          <div class="feature">
            <h4>📝 Syntax</h4>
            <p>Self-closing tag, no fallback content allowed</p>
          </div>
          
          <div class="feature">
            <h4>🎯 Use Cases</h4>
            <p>Quick embeds, browser plugins, simple content</p>
          </div>
          
          <div class="feature">
            <h4>⚙️ Attributes</h4>
            <p>src, type, width, height - that's it!</p>
          </div>
          
          <div class="pros-cons">
            <div class="pros">
              <h4>✅ Pros</h4>
              <ul>
                <li>Simple and straightforward</li>
                <li>Less code to write</li>
                <li>Good browser support</li>
              </ul>
            </div>
            
            <div class="cons">
              <h4>❌ Cons</h4>
              <ul>
                <li>No fallback content</li>
                <li>Limited control</li>
                <li>Can't pass parameters</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Object Card -->
      <div class="compare-card object-card">
        <div class="card-header object-header">
          <h2>&lt;object&gt;</h2>
          <p>Full-featured container tag</p>
        </div>
        <div class="card-body">
          <div class="feature">
            <h4>📝 Syntax</h4>
            <p>Container tag with nested fallback content</p>
          </div>
          
          <div class="feature">
            <h4>🎯 Use Cases</h4>
            <p>Complex embeds, PDFs, images with fallbacks</p>
          </div>
          
          <div class="feature">
            <h4>⚙️ Attributes</h4>
            <p>data, type, width, height, + param elements</p>
          </div>
          
          <div class="pros-cons">
            <div class="pros">
              <h4>✅ Pros</h4>
              <ul>
                <li>Supports fallback content</li>
                <li>Can nest multiple alternatives</li>
                <li>Pass parameters with &lt;param&gt;</li>
                <li>Better error handling</li>
              </ul>
            </div>
            
            <div class="cons">
              <h4>❌ Cons</h4>
              <ul>
                <li>More verbose</li>
                <li>Slightly more complex</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="recommendation">
      <h2>📌 When to Use What?</h2>
      <div class="rec-grid">
        <div class="rec-item">
          <h3>Use &lt;embed&gt;</h3>
          <p>When you need quick embeds and fallback isn't critical. Good for SVGs and simple plugins.</p>
        </div>
        
        <div class="rec-item">
          <h3>Use &lt;object&gt;</h3>
          <p>When you need fallback content and better error handling. Perfect for PDFs and images.</p>
        </div>
        
        <div class="rec-item modern">
          <h3>Modern Alternative</h3>
          <p>For videos use &lt;video&gt;, for iframes use &lt;iframe&gt;, for images use &lt;img&gt; with &lt;picture&gt;</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileVideo}
        category="11. Iframes & Embedding"
        title="Embed & Object Elements"
        description="Learn how to embed external content using embed and object elements"
        colorTheme="blue"
      />

      {/* What are Embed & Object */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What are Embed & Object?
          </CardTitle>
          <CardDescription>
            HTML elements for embedding external content like PDFs, images, videos, and plugins
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">&lt;embed&gt;</code> and <code className="px-2 py-1 bg-muted rounded">&lt;object&gt;</code> 
            elements allow you to integrate external resources into your HTML pages. While similar, they have key differences.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <FileVideo className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">&lt;embed&gt;</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                Self-closing tag for simple embeds
              </p>
              <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                <li>• No fallback content</li>
                <li>• Quick and simple</li>
                <li>• Limited control</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">&lt;object&gt;</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
                Container tag with fallback support
              </p>
              <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Supports fallback</li>
                <li>• Pass parameters</li>
                <li>• Better error handling</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Embed Element */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <FileVideo className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Embed Element
          </CardTitle>
          <CardDescription>
            Simple self-closing tag for embedding external content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={embedExample}
            css=""
            title="Embed Element Examples"
            colorTheme="blue"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Essential Attributes:</h4>
              <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">src</code> - URL of the resource to embed</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">type</code> - MIME type (e.g., application/pdf, image/svg+xml)</div>
                <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">width/height</code> - Dimensions of embedded content</div>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Common MIME Types</AlertTitle>
              <AlertDescription className="text-sm">
                <code>application/pdf</code>, <code>image/svg+xml</code>, 
                <code>video/mp4</code>, <code>audio/mpeg</code>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Object Element */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Object Element
          </CardTitle>
          <CardDescription>
            Container element with fallback content support
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={embedExample}
            css=""
            title="Object Element Examples"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Key Advantages:</h4>
              <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Can nest fallback content inside opening/closing tags</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Multiple fallback layers with nested <code>&lt;object&gt;</code> elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Pass parameters using <code>&lt;param&gt;</code> elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Better accessibility with fallback text</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <Code className="h-5 w-5" />
            </div>
            3. Embed vs Object Comparison
          </CardTitle>
          <CardDescription>
            Understand the differences and choose the right one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={embedExample}
            css=""
            title="Comparison"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <FileVideo className="h-4 w-4" />
                PDF Documents
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">Both work, but <code>&lt;object&gt;</code> better for fallbacks</p>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                SVG Graphics
              </h4>
              <p className="text-sm text-green-800 dark:text-green-200">Great for interactive SVGs that need scripting</p>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <FileAudio className="h-4 w-4" />
                Audio/Video
              </h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">Use <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> instead!</p>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                <Play className="h-4 w-4" />
                Flash/Plugins
              </h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">Legacy - avoid Flash, use HTML5 alternatives</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use <code>&lt;object&gt;</code> for content needing fallbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Always specify <code>type</code> attribute</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Provide meaningful fallback content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Set explicit width and height</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Test fallbacks in different browsers</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using for videos (use <code>&lt;video&gt;</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using for audio (use <code>&lt;audio&gt;</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Embedding Flash content (obsolete)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Omitting fallback in <code>&lt;object&gt;</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Not testing across browsers</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Alternatives */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>💡 Modern Alternatives</AlertTitle>
        <AlertDescription>
          For most use cases, HTML5 provides better alternatives: 
          <code>&lt;video&gt;</code> for videos, 
          <code>&lt;audio&gt;</code> for audio, 
          <code>&lt;img&gt;</code> with <code>&lt;picture&gt;</code> for images, 
          and <code>&lt;iframe&gt;</code> for external pages. 
          Use <code>&lt;embed&gt;</code> and <code>&lt;object&gt;</code> mainly for PDFs and SVGs.
        </AlertDescription>
      </Alert>
    </div>
  );
}
