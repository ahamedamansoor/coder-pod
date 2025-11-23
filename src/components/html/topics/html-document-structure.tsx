// Migrated & standardized HTML topic component
'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileJson, Play, Code, Settings, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

// Minimal boilerplate example
const minimalStructure = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`;

// Complete professional boilerplate example (ASCII replacements for safer parsing)
const completeStructure = `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Character encoding & rendering -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    <!-- SEO basics -->
    <title>Awesome App - Learn Faster</title>
    <meta name="description" content="Awesome App helps you learn web development faster with interactive examples." />
    <meta name="author" content="Your Name" />

    <!-- Favicons & PWA -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Open Graph / Social -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Awesome App" />
    <meta property="og:description" content="Interactive learning platform for modern web developers." />
    <meta property="og:image" content="/social-card.png" />
    <meta property="og:url" content="https://example.com" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Preload critical assets -->
    <link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Styles -->
    <link rel="stylesheet" href="/styles.css" />

    <!-- JS best practice: defer for app bundle -->
    <script src="/app.bundle.js" defer></script>
    <!-- Async for analytics/non-critical -->
    <script src="https://example-analytics.com/script.js" async></script>
  </head>
  <body>
    <header role="banner">
      <nav aria-label="Main navigation">
        <a href="/" class="logo">AwesomeApp</a>
      </nav>
    </header>
    <main id="root" role="main">
      <h1>Welcome</h1>
      <p>Content goes here...</p>
    </main>
    <footer role="contentinfo">&copy; <span id="year"></span> Awesome App</footer>

    <!-- Inline script that depends on DOM -->
    <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
  </body>
</html>`;

// Playground demo code
const playgroundCode = {
  html: `<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <title>Structure Demo</title>
  <link rel='stylesheet' href='style.css' />
  <script defer src='script.js'></script>
</head>
<body>
  <header>
    <h1>Document Structure Demo</h1>
  </header>
  <main>
    <section>
      <h2>Why Structure Matters</h2>
      <p id='dynamic'></p>
    </section>
  </main>
  <footer>&copy; <span id='year'></span></footer>
</body>
</html>`,
  css: `body { font-family: system-ui, sans-serif; margin: 2rem; line-height: 1.5; }
header, footer { background: #0f172a; color: #fff; padding: 1rem; border-radius: 8px; }
main { margin-top: 1rem; }
section { background: #f1f5f9; padding: 1rem 1.25rem; border-radius: 6px; }
code { background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 4px; }`,
  js: `document.getElementById('year').textContent = new Date().getFullYear();
const dynamic = document.getElementById('dynamic');
dynamic.textContent = 'Scripts loaded with defer execute after parsing, keeping the page responsive.';`
};

interface HtmlDocumentStructureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlDocumentStructure({ onOpenWebPlayground }: HtmlDocumentStructureProps) {
  return (
    <div className="space-y-10">
      <PageHeader
        icon={File}
        category="HTML Basics"
        title="HTML Document Structure"
        description="Understanding the essential boilerplate and how the browser interprets your page"
        colorTheme="blue"
      />
      {/* Intro */}
      <Card>
        <CardContent className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            A well-structured document improves accessibility, performance, SEO, and maintainability. The browser reads
            your file top-to-bottom: declare intent early (doctype, language), then progressively add metadata, styles, and
            behavior.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-md p-4 border">
              <h3 className="font-semibold mb-2">Core Root Elements</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><code>&lt;!DOCTYPE html&gt;</code> - Standard mode trigger; always first.</li>
                <li><code>&lt;html lang="en"&gt;</code> - Language aids accessibility & SEO.</li>
                <li><code>&lt;head&gt;</code> - Metadata, links, preload hints, scripts (non-blocking).</li>
                <li><code>&lt;body&gt;</code> - Visible content, interactive UI, app root.</li>
              </ul>
            </div>
            <div className="bg-muted rounded-md p-4 border">
              <h3 className="font-semibold mb-2">High-Value Head Tags</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><code>&lt;meta charset&gt;</code> - Avoid encoding issues.</li>
                <li><code>&lt;meta viewport&gt;</code> - Responsive scaling on mobile.</li>
                <li><code>&lt;title&gt;</code> - Browser tab & search result headline.</li>
                <li><code>&lt;meta name="description"&gt;</code> - Influences snippets.</li>
                <li><code>&lt;link rel="icon"&gt;</code> - Branding & PWA touch icons.</li>
                <li><code>&lt;link rel="preload"&gt;</code> - Prioritize critical assets.</li>
                <li><code>&lt;script defer&gt;</code> - Non-blocking script loading.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* defer vs async */}
      <Card>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2"><Settings className="w-6 h-6 text-primary" /> Script Loading: <code>defer</code> vs <code>async</code></h2>
              <p className="text-muted-foreground text-sm md:text-base">Choose the right attribute to optimize render performance and execution order.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-4 rounded border">
                <code className="font-bold text-blue-600">defer</code>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Downloads in parallel with parsing</li>
                  <li>• Executes after HTML parsed</li>
                  <li>• Preserves tag order</li>
                  <li>• ✅ Use for main app bundles</li>
                </ul>
              </div>
              <div className="bg-background p-4 rounded border">
                <code className="font-bold text-purple-600">async</code>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Downloads in parallel</li>
                  <li>• Executes immediately when ready</li>
                  <li>• No guaranteed order</li>
                  <li>• ✅ Use for analytics / standalone scripts</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Tip: Omit both for inline modules only when execution order is insignificant.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Boilerplates */}
      <Card>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2"><FileJson className="w-6 h-6 text-primary" /> Boilerplate Templates</h2>
            <p className="text-muted-foreground text-sm md:text-base">Start minimal, scale up to a production-ready head section.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Minimal Structure</h3>
            <div className="bg-muted rounded-md p-4">
              <pre className="font-mono text-xs overflow-x-auto whitespace-pre-wrap">{minimalStructure}</pre>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Complete Professional Structure</h3>
            <div className="bg-muted rounded-md p-4">
              <pre className="font-mono text-xs overflow-x-auto whitespace-pre-wrap">{completeStructure}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-primary/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2"><Play className="w-6 h-6 text-primary" /> Interactive Structure Demo</h2>
          <p className="text-muted-foreground text-sm md:text-base">Experience a properly structured document and inspect timing.</p>
          <Button
            size="lg"
            onClick={() => onOpenWebPlayground?.(playgroundCode.html, playgroundCode.css, playgroundCode.js)}
            className="w-full md:w-auto"
          >
            <Play className="mr-2 h-5 w-5" /> Open Live Demo
          </Button>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2"><Code className="w-6 h-6 text-primary" /> Quick Reference Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <ul className="space-y-1 list-disc list-inside">
              <li>✅ Doctype at very top</li>
              <li>✅ <code>lang</code> attribute on <code>&lt;html&gt;</code></li>
              <li>✅ Charset & viewport meta first</li>
              <li>✅ Descriptive, concise <code>&lt;title&gt;</code></li>
              <li>✅ One canonical description meta</li>
              <li>✅ Preload only truly critical assets</li>
              <li>✅ Use <code>defer</code> for app scripts</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside">
              <li>🚫 Avoid duplicate meta descriptions</li>
              <li>🚫 Don't block rendering with large inline scripts</li>
              <li>🚫 Don't forget landmarks (<code>&lt;main&gt;</code>, roles)</li>
              <li>💡 Limit <code>preconnect</code> hints to essentials</li>
              <li>💡 Put analytics <code>async</code> to avoid blocking</li>
              <li>💡 Order head: charset → viewport → title → description</li>
              <li>💡 Tiny inline year script is fine</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

