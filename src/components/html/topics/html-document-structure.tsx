// Migrated & standardized HTML topic component
'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileJson, Play, Code, Settings, File, LayoutTemplate, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

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

      {/* Visual Document Map */}
      <Card>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <LayoutTemplate className="w-6 h-6 text-primary" />
              Visual Map of an HTML Document
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Use this mental model to understand how <code className="font-mono">&lt;head&gt;</code> and{' '}
              <code className="font-mono">&lt;body&gt;</code> fit together and where different responsibilities live.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                Think of the <strong>head</strong> as everything the browser needs to understand the page{' '}
                <em>before</em> showing it, and the <strong>body</strong> as everything the user will actually see and
                interact with.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Head responsibilities:</strong> metadata, SEO, icons, styles, preload hints, and initial
                  script loading.
                </li>
                <li>
                  <strong>Body responsibilities:</strong> landmarks (<code className="font-mono">&lt;header&gt;</code>,{' '}
                  <code className="font-mono">&lt;main&gt;</code>, <code className="font-mono">&lt;footer&gt;</code>),
                  content hierarchy, and interactive elements.
                </li>
                <li>
                  <strong>Accessibility:</strong> a single <code className="font-mono">&lt;main&gt;</code> region,
                  descriptive headings, and proper landmarks help screen readers and keyboard users navigate your page.
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="rounded-md border bg-slate-50 dark:bg-slate-900/60 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-2">
                  <span>Head region</span>
                  <span>Browser-facing</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-md bg-blue-50 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 px-2 py-1 flex flex-col">
                    <span className="font-mono text-[11px]">&lt;meta&gt;</span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-300">charset, viewport</span>
                  </div>
                  <div className="rounded-md bg-indigo-50 dark:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-700 px-2 py-1 flex flex-col">
                    <span className="font-mono text-[11px]">&lt;title&gt;</span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-300">tab &amp; SEO title</span>
                  </div>
                  <div className="rounded-md bg-emerald-50 dark:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-700 px-2 py-1 flex flex-col">
                    <span className="font-mono text-[11px]">&lt;link&gt;</span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-300">CSS, icons, fonts</span>
                  </div>
                  <div className="rounded-md bg-amber-50 dark:bg-amber-900/60 border border-amber-200 dark:border-amber-700 px-2 py-1 flex flex-col">
                    <span className="font-mono text-[11px]">&lt;script&gt;</span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-300">defer / async bundles</span>
                  </div>
                </div>
              </div>
              <div className="rounded-md border bg-slate-50 dark:bg-slate-900/60 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-2">
                  <span>Body region</span>
                  <span>User-facing</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-md bg-pink-50 dark:bg-pink-900/60 border border-pink-200 dark:border-pink-700 px-2 py-1 flex items-center justify-center font-mono text-[11px]">
                    &lt;header&gt;
                  </div>
                  <div className="rounded-md bg-violet-50 dark:bg-violet-900/60 border border-violet-200 dark:border-violet-700 px-2 py-1 flex items-center justify-center font-mono text-[11px]">
                    &lt;nav&gt;
                  </div>
                  <div className="rounded-md bg-emerald-50 dark:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-700 px-2 py-1 flex items-center justify-center font-mono text-[11px]">
                    &lt;main&gt;
                  </div>
                  <div className="rounded-md bg-amber-50 dark:bg-amber-900/60 border border-amber-200 dark:border-amber-700 px-2 py-1 flex items-center justify-center font-mono text-[11px]">
                    &lt;section&gt; / &lt;article&gt;
                  </div>
                  <div className="rounded-md bg-sky-50 dark:bg-sky-900/60 border border-sky-200 dark:border-sky-700 px-2 py-1 flex items-center justify-center font-mono text-[11px]">
                    &lt;aside&gt;
                  </div>
                  <div className="rounded-md bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-2 py-1 flex items-center justify-center font-mono text-[11px]">
                    &lt;footer&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Request & Render Flow */}
      <Card>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Request and Render Flow
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Document structure matters because it changes how quickly the browser can turn your HTML into pixels on
              the screen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-xs md:text-sm">
              <div className="rounded-md border bg-slate-50 dark:bg-slate-900/60 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-2">
                  <span>Network → DOM</span>
                  <span>Steps 1–2</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-2 py-2">
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">1. Request HTML</div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200">
                      Browser downloads the HTML document from the server.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-2 py-2">
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">2. Parse head &amp; body</div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200">
                      The parser builds the DOM tree, respecting the order of tags.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border bg-slate-50 dark:bg-slate-900/60 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-2">
                  <span>CSS → Pixels</span>
                  <span>Steps 3–4</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-2 py-2">
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">3. Build render tree</div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200">
                      DOM + CSSOM combine so the browser knows both structure and styles.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-2 py-2">
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">4. Layout &amp; paint</div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200">
                      Positions are calculated, then pixels are drawn and composited to the screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                Placing critical styles and non-blocking scripts in the right order inside <code className="font-mono">&lt;head&gt;</code>{' '}
                lets the browser start rendering sooner while still respecting your layout and behavior.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Good structure:</strong> predictable load order, faster first paint, fewer layout shifts.
                </li>
                <li>
                  <strong>Bad structure:</strong> blocking scripts, missing meta tags, and late styles that cause
                  content to &quot;jump&quot; after load.
                </li>
                <li>
                  <strong>Goal:</strong> make the path from &quot;request&quot; to &quot;usable page&quot; as short and
                  smooth as possible.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Head vs Body – Beginner vs Expert */}
      <Card>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Head vs Body: Beginner and Expert Views
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Start with simple rules, then grow into performance, SEO, and accessibility concerns as you become more
              advanced.
            </p>
          </div>
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="beginner">Beginner View</TabsTrigger>
              <TabsTrigger value="expert">Expert View</TabsTrigger>
            </TabsList>
            <TabsContent value="beginner" className="space-y-4">
              <p className="text-sm md:text-base text-muted-foreground">
                As a beginner, follow this rule of thumb: put <strong>page settings</strong> and{' '}
                <strong>behind-the-scenes info</strong> in <code className="font-mono">&lt;head&gt;</code>, and{' '}
                <strong>visible content</strong> in <code className="font-mono">&lt;body&gt;</code>.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">beginner-structure.html</span>
                  <span className="text-slate-500 dark:text-slate-300">Clean, simple layout</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{`<head>
  <!-- Settings & metadata -->
  <meta charset="UTF-8" />
  <title>My Page</title>
</head>
<body>
  <!-- Content & layout -->
  <header>Logo + navigation</header>
  <main>Page content</main>
  <footer>Copyright</footer>
</body>`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="expert" className="space-y-4">
              <p className="text-sm md:text-base text-muted-foreground">
                As an expert, you&apos;ll think about how document structure affects{' '}
                <strong>rendering performance</strong>, <strong>SEO</strong>, and <strong>assistive technologies</strong>.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-900 text-green-100">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-800">
                  <span className="uppercase tracking-wide">expert-structure.html</span>
                  <span className="text-slate-300">Performance, SEO, a11y-aware</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Accessible, Fast Page</title>
    <meta name="description" content="Short, human-friendly summary of this page." />
    <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="/styles.css" />
    <script src="/app.bundle.js" defer></script>
  </head>
  <body>
    <header role="banner">...</header>
    <main id="main-content" role="main">...</main>
    <footer role="contentinfo">...</footer>
  </body>
</html>`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
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
            <div className="rounded-md overflow-hidden border bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800">
                <span className="uppercase tracking-wide">minimal.html</span>
                <span className="text-slate-500 dark:text-slate-300">Starter document</span>
              </div>
              <pre className="font-mono text-xs md:text-sm px-4 py-3 overflow-x-auto whitespace-pre">
{minimalStructure}
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Complete Professional Structure</h3>
            <div className="rounded-md overflow-hidden border bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800">
                <span className="uppercase tracking-wide">production.html</span>
                <span className="text-slate-500 dark:text-slate-300">Rich, SEO-aware boilerplate</span>
              </div>
              <pre className="font-mono text-xs md:text-sm px-4 py-3 overflow-x-auto whitespace-pre">
{completeStructure}
              </pre>
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
