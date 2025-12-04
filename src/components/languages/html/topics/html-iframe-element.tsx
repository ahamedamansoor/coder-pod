'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { ExternalLink, Frame, Map, Code, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlIframeElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlIframeElement({ onOpenWebPlayground }: HtmlIframeElementProps) {
  const basicIframeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Iframe</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #667eea;
      margin-bottom: 20px;
    }
    
    .iframe-wrapper {
      border: 3px solid #667eea;
      border-radius: 12px;
      overflow: hidden;
      margin: 20px 0;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    iframe {
      width: 100%;
      height: 400px;
      border: none;
      display: block;
    }
    
    .info {
      padding: 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #60a5fa;
      }
      
      p {
        color: #94a3b8;
      }
      
      code {
        background: #374151;
        color: #e2e8f0;
      }
    }

    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }

    :root.dark h1 {
      color: #60a5fa;
    }

    :root.dark p {
      color: #94a3b8;
    }

    :root.dark code {
      background: #374151;
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖼️ Iframe Example</h1>
    <p>An iframe (inline frame) embeds another HTML page within the current page.</p>
    
    <div class="iframe-wrapper">
      <iframe 
        src="https://example.com" 
        title="Example Website"
        loading="lazy">
      </iframe>
    </div>
    
    <div class="info">
      <strong>💡 Key Attributes:</strong>
      <ul style="margin: 10px 0 0 20px;">
        <li><code>src</code> - URL of the page to embed</li>
        <li><code>title</code> - Accessibility description</li>
        <li><code>loading</code> - Controls loading behavior (lazy/eager)</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  const responsiveIframeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Iframe</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: #f3f4f6;
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: #1f2937;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
      
      h1 {
        color: #f3f4f6;
      }
    }

    :root.dark body {
      background: #0f172a;
    }

    :root.dark h1 {
      color: #f3f4f6;
    }
    
    /* Responsive iframe wrapper with 16:9 aspect ratio */
    .iframe-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
      overflow: hidden;
      background: #000;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      margin-bottom: 20px;
    }
    
    .iframe-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    
    .badge {
      display: inline-block;
      padding: 8px 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    
    .card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    
    .card h3 {
      color: #667eea;
      margin-bottom: 12px;
    }
    
    code {
      background: #f3f4f6;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      .card h3 {
        color: #60a5fa;
      }
      
      .card p {
        color: #94a3b8;
      }
      
      code {
        background: #374151;
        color: #60a5fa;
      }
    }

    :root.dark .card {
      background: #1e293b;
      color: #e2e8f0;
    }

    :root.dark .card h3 {
      color: #60a5fa;
    }

    :root.dark .card p {
      color: #94a3b8;
    }

    :root.dark code {
      background: #374151;
      color: #60a5fa;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📱 Responsive Video Embed</h1>
    
    <div class="card">
      <span class="badge">✨ 16:9 Aspect Ratio</span>
      <h3>YouTube Video Example</h3>
      <p>This iframe maintains aspect ratio and is fully responsive!</p>
    </div>
    
    <div class="iframe-container">
      <iframe 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
    
    <div class="card">
      <h3>🎯 How It Works</h3>
      <p><strong>Aspect Ratio Trick:</strong> <code>padding-bottom: 56.25%</code> creates 16:9 ratio</p>
      <p style="margin-top: 8px;"><strong>Formula:</strong> (9 / 16) × 100 = 56.25%</p>
      <ul style="margin-top: 12px; margin-left: 20px;">
        <li>Parent has <code>position: relative</code></li>
        <li>Iframe has <code>position: absolute</code></li>
        <li>Iframe fills 100% width and height</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  const advancedIframeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advanced Iframe Features</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
      grid-column: 1 / -1;
    }
    
    .demo-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    
    .demo-card:hover {
      transform: translateY(-4px);
    }
    
    .demo-header {
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .demo-header h3 {
      margin-bottom: 8px;
      font-size: 1.3rem;
    }
    
    .demo-header p {
      font-size: 0.9rem;
      opacity: 0.9;
    }
    
    .demo-body {
      padding: 20px;
    }
    
    iframe {
      width: 100%;
      height: 250px;
      border: none;
      border-radius: 8px;
      background: #f3f4f6;
    }
    
    .feature-list {
      margin-top: 16px;
      padding: 16px;
      background: #f3f4f6;
      border-radius: 8px;
      border-left: 4px solid #667eea;
    }
    
    .feature-list li {
      margin: 8px 0 8px 20px;
      color: #4b5563;
    }
    
    .attribute-badge {
      display: inline-block;
      padding: 4px 12px;
      background: #667eea;
      color: white;
      border-radius: 12px;
      font-size: 12px;
      margin: 4px 4px 4px 0;
      font-family: monospace;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
      }
      
      .demo-card {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      .demo-body {
        color: #e2e8f0;
      }
      
      iframe {
        background: #0f172a;
      }
      
      .feature-list {
        background: #0f172a;
        border-left-color: #60a5fa;
      }
      
      .feature-list li {
        color: #94a3b8;
      }
      
      .feature-list strong {
        color: #e2e8f0;
      }
    }

    :root.dark body {
      background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
    }

    :root.dark .demo-card {
      background: #1e293b;
      color: #e2e8f0;
    }

    :root.dark .demo-body {
      color: #e2e8f0;
    }

    :root.dark iframe {
      background: #0f172a;
    }

    :root.dark .feature-list {
      background: #0f172a;
      border-left-color: #60a5fa;
    }

    :root.dark .feature-list li {
      color: #94a3b8;
    }

    :root.dark .feature-list strong {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="grid">
    <h1>🚀 Advanced Iframe Attributes</h1>
    
    <!-- Sandbox Demo -->
    <div class="demo-card">
      <div class="demo-header">
        <h3>🔒 Sandbox Attribute</h3>
        <p>Restricts iframe capabilities for security</p>
      </div>
      <div class="demo-body">
        <iframe 
          srcdoc="<h2>Sandboxed Content</h2><p>This iframe has restricted permissions.</p><script>alert('Scripts blocked!');</script>"
          sandbox="allow-same-origin"
          title="Sandboxed iframe">
        </iframe>
        <div class="feature-list">
          <strong>🛡️ Sandbox Values:</strong>
          <div style="margin-top: 8px;">
            <span class="attribute-badge">allow-scripts</span>
            <span class="attribute-badge">allow-forms</span>
            <span class="attribute-badge">allow-popups</span>
            <span class="attribute-badge">allow-same-origin</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Lazy Loading Demo -->
    <div class="demo-card">
      <div class="demo-header">
        <h3>⚡ Lazy Loading</h3>
        <p>Load iframe only when visible</p>
      </div>
      <div class="demo-body">
        <iframe 
          src="https://example.com"
          loading="lazy"
          title="Lazy loaded iframe">
        </iframe>
        <div class="feature-list">
          <strong>🎯 Loading Options:</strong>
          <ul>
            <li><code>loading="lazy"</code> - Load when near viewport</li>
            <li><code>loading="eager"</code> - Load immediately (default)</li>
            <li>Improves page performance significantly</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Referrer Policy Demo -->
    <div class="demo-card">
      <div class="demo-header">
        <h3>🔐 Referrer Policy</h3>
        <p>Control referrer information sent</p>
      </div>
      <div class="demo-body">
        <iframe 
          src="https://example.com"
          referrerpolicy="no-referrer"
          title="Iframe with referrer policy">
        </iframe>
        <div class="feature-list">
          <strong>📋 Policy Values:</strong>
          <ul>
            <li><code>no-referrer</code> - Don't send referrer</li>
            <li><code>origin</code> - Send only origin</li>
            <li><code>strict-origin</code> - Send origin on HTTPS only</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Allow Attribute Demo -->
    <div class="demo-card">
      <div class="demo-header">
        <h3>🎥 Allow Attribute</h3>
        <p>Control feature permissions</p>
      </div>
      <div class="demo-body">
        <iframe 
          src="https://example.com"
          allow="camera; microphone; geolocation"
          title="Iframe with permissions">
        </iframe>
        <div class="feature-list">
          <strong>🎛️ Feature Policies:</strong>
          <div style="margin-top: 8px;">
            <span class="attribute-badge">camera</span>
            <span class="attribute-badge">microphone</span>
            <span class="attribute-badge">geolocation</span>
            <span class="attribute-badge">payment</span>
            <span class="attribute-badge">fullscreen</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Frame}
        category="HTML · Iframes & Embedding"
        title="What is the Iframe Element?"
        description="Learn how to embed external content within your web pages using iframes"
        colorTheme="blue"
      />

      {/* What is Iframe */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Frame className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is an Iframe?
          </CardTitle>
          <CardDescription>
            An iframe (inline frame) embeds another HTML document within the current page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">&lt;iframe&gt;</code> element creates a nested 
            browsing context, allowing you to embed content from other pages or domains into your website.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Embed Content</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Display external websites, videos, or interactive content
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Map className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Separate Context</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Isolated environment with its own document and styles
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Independent</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                CSS and JavaScript don't affect parent page
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Frame className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            How Iframes Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
            <div className="space-y-4">
              {/* Parent Page */}
              <div className="p-6 rounded-lg border-4 border-blue-500 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Parent Page (yourwebsite.com)</span>
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Main Document</span>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="h-4 bg-blue-200 dark:bg-blue-900 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 dark:bg-blue-900 rounded w-1/2"></div>
                  
                  {/* Nested Iframe */}
                  <div className="mt-4 p-4 rounded-lg border-4 border-green-500 bg-green-50 dark:bg-green-950/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-green-900 dark:text-green-100">Iframe (external-site.com)</span>
                      <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Embedded</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-green-300 dark:bg-green-800 rounded w-full"></div>
                      <div className="h-3 bg-green-300 dark:bg-green-800 rounded w-5/6"></div>
                      <div className="h-3 bg-green-300 dark:bg-green-800 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  <div className="h-4 bg-blue-200 dark:bg-blue-900 rounded w-2/3"></div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-700 dark:text-gray-300">Parent Page</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-700 dark:text-gray-300">Iframe Content</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Iframe Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Frame className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Basic Iframe
          </CardTitle>
          <CardDescription>
            Simple iframe with essential attributes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicIframeExample}
            css=""
            title="Basic Iframe Example"
            colorTheme="blue"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Essential Attributes:</h4>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">src</code> - URL of the page to embed</div>
              <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">title</code> - Accessibility description (required)</div>
              <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">width/height</code> - Dimensions in pixels or percentage</div>
              <div><code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">loading</code> - lazy or eager loading</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Iframe Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <ExternalLink className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Responsive Iframe (16:9 Ratio)
          </CardTitle>
          <CardDescription>
            Maintain aspect ratio across all screen sizes - perfect for videos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={responsiveIframeExample}
            css=""
            title="Responsive Iframe"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Aspect Ratio Technique</AlertTitle>
              <AlertDescription className="text-sm">
                <strong>padding-bottom: 56.25%</strong> creates a 16:9 aspect ratio. 
                The percentage is calculated as (9 ÷ 16) × 100 = 56.25%. 
                For 4:3 ratio, use 75% (3 ÷ 4 × 100).
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Iframe Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <Code className="h-5 w-5" />
            </div>
            3. Advanced Iframe Attributes
          </CardTitle>
          <CardDescription>
            Modern iframe features for security, performance, and permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={advancedIframeExample}
            css=""
            title="Advanced Iframe Features"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Modern Attributes:</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">sandbox</strong>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Restricts iframe capabilities</p>
                </div>
                <div>
                  <strong className="text-purple-700 dark:text-purple-300">loading</strong>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Controls when iframe loads</p>
                </div>
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">referrerpolicy</strong>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Controls referrer information</p>
                </div>
                <div>
                  <strong className="text-purple-700 dark:text-purple-300">allow</strong>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Feature permissions (Permissions Policy)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📹 Video Embedding</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">YouTube, Vimeo, and other video platforms</p>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🗺️ Maps</h4>
              <p className="text-sm text-green-800 dark:text-green-200">Google Maps, OpenStreetMap integration</p>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💳 Payment Forms</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">Secure payment gateway integration</p>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">📊 External Widgets</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">Social media feeds, analytics dashboards</p>
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
                  <span>Always include <code>title</code> attribute for accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use <code>loading="lazy"</code> for performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Apply <code>sandbox</code> for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Make iframes responsive with CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Specify width and height to prevent layout shift</span>
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
                  <span>Embedding untrusted content without sandbox</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using iframes for layout purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Omitting the title attribute</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Loading many iframes on page load</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Nesting iframes excessively</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          The <code>&lt;iframe&gt;</code> element is supported in all browsers. Modern attributes like 
          <code>loading</code> (Chrome 77+, Firefox 75+) and <code>sandbox</code> (all modern browsers) 
          provide enhanced functionality. The <code>allow</code> attribute (Permissions Policy) is supported in Chrome 60+, Edge 79+, and Safari 11.1+.
        </AlertDescription>
      </Alert>
    </div>
  );
}
