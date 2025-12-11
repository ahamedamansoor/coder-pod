'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  FileCode, 
  Link2,
  Globe,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  AlertTriangle,
  Info,
  Download
} from 'lucide-react';

interface SassCssImportsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassCssImportsNew({ onOpenWebPlayground }: SassCssImportsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileCode}
        category="Sass/SCSS · Advanced Features"
        title="Plain CSS @import"
        description="Understand when Sass treats @import as plain CSS and how to work with URL imports."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Plain CSS @import"
            description="When Sass doesn't compile @import"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Sass has specific rules for when <code className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">@import</code> is treated as plain CSS instead of being compiled. Understanding these rules helps you import external stylesheets correctly!
          </p>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Modern Alternative: @use</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              While @import still works, <strong>@use</strong> is the modern way to load Sass files. @import for CSS files remains useful for external stylesheets.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* URL Imports */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="URL Imports (Plain CSS)"
            description="Importing from external URLs"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="HTTP/HTTPS URLs"
              code={`// These remain as plain CSS @import
@import "https://fonts.googleapis.com/css2?family=Roboto";
@import url("https://cdn.example.com/theme.css");

.text {
  font-family: 'Roboto', sans-serif;
}`}
              output={[
                '// Compiled CSS:',
                '@import "https://fonts.googleapis.com/css2?family=Roboto";',
                '@import url("https://cdn.example.com/theme.css");',
                '',
                '.text { font-family: "Roboto", sans-serif; }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Google Fonts Example"
              code={`// Import Google Fonts (stays as CSS)
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

h1 {
  font-weight: 700;
}`}
              output={[
                '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");',
                '',
                'body { font-family: "Inter", sans-serif; font-weight: 400; }',
                'h1 { font-weight: 700; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>
        </CardContent>
      </Card>

      {/* CSS Extension */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title=".css Extension (Plain CSS)"
            description="Files ending in .css"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Importing .css Files"
              code={`// Treated as plain CSS @import
@import "normalize.css";
@import "bootstrap.min.css";

// Your SCSS code
.container {
  max-width: 1200px;
  margin: 0 auto;
}`}
              output={[
                '// Compiled CSS:',
                '@import "normalize.css";',
                '@import "bootstrap.min.css";',
                '',
                '.container { max-width: 1200px; margin: 0 auto; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Local vs External .css"
              code={`// Plain CSS imports (not compiled)
@import "reset.css";
@import "./vendor/library.css";

// Sass imports (compiled)
@use 'variables';
@use 'mixins';

body {
  background: $primary-color; // From variables
}`}
              output={[
                '@import "reset.css";',
                '@import "./vendor/library.css";',
                '',
                'body { background: #3b82f6; }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>

          <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
            <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Extension Matters!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Files with <strong>.css</strong> extension are treated as plain CSS. Use <strong>.scss</strong> for Sass features.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Media Queries */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Link2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="@import with Media Queries"
            description="Conditional CSS imports"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Media Query Imports"
              code={`// Import with media query (plain CSS)
@import "print-styles.css" print;
@import "mobile.css" screen and (max-width: 768px);
@import "dark-mode.css" (prefers-color-scheme: dark);

.page {
  padding: 2rem;
}`}
              output={[
                '@import "print-styles.css" print;',
                '@import "mobile.css" screen and (max-width: 768px);',
                '@import "dark-mode.css" (prefers-color-scheme: dark);',
                '',
                '.page { padding: 2rem; }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Multiple Conditions"
              code={`// Screen-specific imports
@import "desktop.css" screen and (min-width: 1024px);
@import "tablet.css" screen and (min-width: 768px) and (max-width: 1023px);
@import "mobile.css" screen and (max-width: 767px);

body {
  font-family: Arial, sans-serif;
}`}
              output={[
                '@import "desktop.css" screen and (min-width: 1024px);',
                '@import "tablet.css" screen and (min-width: 768px) and (max-width: 1023px);',
                '@import "mobile.css" screen and (max-width: 767px);',
                '',
                'body { font-family: Arial, sans-serif; }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* url() Function */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Download className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="url() Function Imports"
            description="Using url() for imports"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="url() Syntax"
              code={`// Using url() makes it plain CSS
@import url("styles.css");
@import url("https://example.com/theme.css");
@import url('fonts.css') screen;

.element {
  color: blue;
}`}
              output={[
                '@import url("styles.css");',
                '@import url("https://example.com/theme.css");',
                '@import url("fonts.css") screen;',
                '',
                '.element { color: blue; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Sass vs CSS Import */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Sass Import vs CSS Import"
            description="Understanding the difference"
            size="lg"
          />

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Sass Import (Compiled)
                </h4>
                <CodeSnippetWithOutput
                  title="Sass Files"
                  code={`// Compiled by Sass
@import "variables";
@import "mixins";
@use 'helpers';

.button {
  @include button-style;
  color: $primary;
}`}
                  output={[
                    '// All code is compiled together:',
                    '.button {',
                    '  padding: 12px 24px;',
                    '  border-radius: 8px;',
                    '  color: #3b82f6;',
                    '}'
                  ]}
                  language="scss"
                  colorTheme="cyan"
                />
              </div>

              <div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> CSS Import (Plain)
                </h4>
                <CodeSnippetWithOutput
                  title="CSS Files"
                  code={`// Stays as @import
@import "reset.css";
@import url("fonts.css");

.button {
  padding: 12px 24px;
  color: blue;
}`}
                  output={[
                    '// Imports remain:',
                    '@import "reset.css";',
                    '@import url("fonts.css");',
                    '',
                    '.button {',
                    '  padding: 12px 24px;',
                    '  color: blue;',
                    '}'
                  ]}
                  language="scss"
                  colorTheme="blue"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When @import is Plain CSS */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Rules for Plain CSS @import"
            description="When Sass doesn't compile @import"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-rose-300 dark:border-rose-700">
              <h4 className="font-bold text-rose-700 dark:text-rose-300 mb-3">Plain CSS @import when:</h4>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>• File ends with <code className="bg-rose-100 dark:bg-rose-900/30 px-1.5 py-0.5 rounded">.css</code></li>
                <li>• URL starts with <code className="bg-rose-100 dark:bg-rose-900/30 px-1.5 py-0.5 rounded">http://</code> or <code className="bg-rose-100 dark:bg-rose-900/30 px-1.5 py-0.5 rounded">https://</code></li>
                <li>• Uses <code className="bg-rose-100 dark:bg-rose-900/30 px-1.5 py-0.5 rounded">url()</code> function</li>
                <li>• Has media queries</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">Sass compiles when:</h4>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li>• File ends with <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">.scss</code> or <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">.sass</code></li>
                <li>• Relative path (no URL)</li>
                <li>• No <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">url()</code> function</li>
                <li>• No media queries</li>
              </ul>
            </div>
          </div>

          <CodeSnippetWithOutput
            title="Mixed Example"
            code={`// Plain CSS (not compiled)
@import "normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Inter");
@import "print.css" print;

// Sass import (compiled)
@use 'variables';
@use 'mixins';

.container {
  max-width: 1200px;
  padding: $spacing-lg; // From variables
}`}
            output={[
              '// Output CSS:',
              '@import "normalize.css";',
              '@import url("https://fonts.googleapis.com/css2?family=Inter");',
              '@import "print.css" print;',
              '',
              '.container {',
              '  max-width: 1200px;',
              '  padding: 2rem;',
              '}'
            ]}
            language="scss"
            colorTheme="rose"
          />
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Complete Import Example"
          description="Mixing Sass and CSS imports"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="page">
  <header class="header">
    <h1>Import Example</h1>
    <p class="subtitle">Plain CSS vs Sass imports</p>
  </header>
  
  <div class="content">
    <div class="card">
      <h3>Plain CSS @import</h3>
      <p>Stays as @import in final CSS</p>
      <ul>
        <li>.css files</li>
        <li>http:// or https:// URLs</li>
        <li>url() function</li>
        <li>Media queries</li>
      </ul>
    </div>
    
    <div class="card">
      <h3>Sass @import</h3>
      <p>Compiled into final CSS</p>
      <ul>
        <li>.scss or .sass files</li>
        <li>Relative paths</li>
        <li>No url()</li>
        <li>No media queries</li>
      </ul>
    </div>
  </div>
</div>`}
          css={`// Example of imports (shown in comments)
// @import "normalize.css";  // Plain CSS
// @use 'variables';          // Sass import

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.page {
  max-width: 1000px;
  width: 100%;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .subtitle {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
  }
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: white;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #667eea;
    
    @media (prefers-color-scheme: dark) {
      color: #8b9aef;
    }
  }
  
  p {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    
    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      color: #475569;
      
      @media (prefers-color-scheme: dark) {
        color: #cbd5e1;
      }
      
      &:before {
        content: "→";
        position: absolute;
        left: 0;
        color: #667eea;
        font-weight: bold;
      }
    }
  }
}`}
          title="Import Types Demo"
          description="Visual comparison of import methods"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Plain CSS Import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                .css extension, URLs, url(), media queries
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Sass Compilation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                .scss files, relative paths, no url()
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use @use Instead</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Modern alternative for Sass files
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">External CSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use @import for external stylesheets
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
