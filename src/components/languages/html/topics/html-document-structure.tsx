// Migrated & standardized HTML topic component
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FileJson, Play, Code, File, LayoutTemplate, Sparkles, CheckCircle2, XCircle, Lightbulb, Zap, Eye, GitBranch } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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
        <a href="/public" class="logo">AwesomeApp</a>
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
  const [hoveredPart, setHoveredPart] = React.useState<string | null>(null);

  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={File}
        category="HTML · Foundations"
        title="HTML Document Structure"
        description="Understanding the essential boilerplate and how the browser interprets your page"
        colorTheme="blue"
      />

      {/* Why Structure Matters */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/60 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400 animate-pulse" />
            Why Document Structure Matters
          </CardTitle>
          <CardDescription className="text-base">
            Proper structure improves accessibility, performance, SEO, and maintainability
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="group p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 dark:bg-blue-500/30 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg">Performance</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Proper script loading, critical CSS, and preload hints speed up page rendering dramatically.
              </p>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Faster Load Times
              </div>
            </div>

            <div className="group p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-lg">
                  <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg">Accessibility</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Semantic landmarks and proper metadata help screen readers navigate your content efficiently.
              </p>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Inclusive Design
              </div>
            </div>

            <div className="group p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-purple-200 dark:border-purple-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 dark:bg-purple-500/30 rounded-lg">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-lg">SEO</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Search engines parse meta tags, titles, and semantic HTML to understand and rank your content.
              </p>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Better Rankings
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Document Anatomy */}
      <Card className="bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <LayoutTemplate className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
            Anatomy of an HTML Document
          </CardTitle>
          <CardDescription className="text-base">
            Every HTML document has the same fundamental structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Document Parts */}
            <div className="space-y-3">
              <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">Document Parts</Badge>
              <div className="space-y-2">
                {[
                  { name: 'DOCTYPE', desc: 'Declares HTML5 standard', icon: '📄' },
                  { name: '<html>', desc: 'Root container with language', icon: '🌐' },
                  { name: '<head>', desc: 'Metadata & resources', icon: '⚙️' },
                  { name: '<body>', desc: 'Visible content', icon: '👁️' }
                ].map((part) => (
                  <div
                    key={part.name}
                    onMouseEnter={() => setHoveredPart(part.name)}
                    onMouseLeave={() => setHoveredPart(null)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      hoveredPart === part.name
                        ? 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 border-cyan-400 dark:border-cyan-600 shadow-xl transform scale-105'
                        : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{part.icon}</span>
                      <code className="font-bold text-cyan-700 dark:text-cyan-300">{part.name}</code>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{part.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Structure */}
            <div className="space-y-3">
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">Visual Structure</Badge>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 font-mono text-sm space-y-1 border border-cyan-300 dark:border-cyan-700">
                <div className="text-gray-700 dark:text-gray-400">&lt;<span className="text-pink-600 dark:text-pink-400">!DOCTYPE</span> <span className="text-amber-600 dark:text-yellow-300">html</span>&gt;</div>
                <div className="text-gray-700 dark:text-gray-400">&lt;<span className="text-pink-600 dark:text-pink-400">html</span> <span className="text-amber-600 dark:text-yellow-300">lang</span>=<span className="text-green-600 dark:text-green-300">"en"</span>&gt;</div>
                <div className="pl-4 space-y-1">
                  <div className="text-gray-700 dark:text-gray-400">&lt;<span className="text-pink-600 dark:text-pink-400">head</span>&gt;</div>
                  <div className="pl-4 space-y-0.5 text-xs">
                    <div className="text-gray-600 dark:text-gray-500">&lt;<span className="text-pink-500 dark:text-pink-300">meta</span> charset=<span className="text-green-600 dark:text-green-300">"UTF-8"</span>&gt;</div>
                    <div className="text-gray-600 dark:text-gray-500">&lt;<span className="text-pink-500 dark:text-pink-300">title</span>&gt;<span className="text-gray-900 dark:text-white">Page Title</span>&lt;/<span className="text-pink-500 dark:text-pink-300">title</span>&gt;</div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-400">&lt;/<span className="text-pink-600 dark:text-pink-400">head</span>&gt;</div>
                </div>
                <div className="pl-4 space-y-1">
                  <div className="text-gray-700 dark:text-gray-400">&lt;<span className="text-pink-600 dark:text-pink-400">body</span>&gt;</div>
                  <div className="pl-4 space-y-0.5 text-xs">
                    <div className="text-gray-600 dark:text-gray-500">&lt;<span className="text-pink-500 dark:text-pink-300">h1</span>&gt;<span className="text-gray-900 dark:text-white">Hello!</span>&lt;/<span className="text-pink-500 dark:text-pink-300">h1</span>&gt;</div>
                    <div className="text-gray-600 dark:text-gray-500">&lt;<span className="text-pink-500 dark:text-pink-300">p</span>&gt;<span className="text-gray-900 dark:text-white">Content here...</span>&lt;/<span className="text-pink-500 dark:text-pink-300">p</span>&gt;</div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-400">&lt;/<span className="text-pink-600 dark:text-pink-400">body</span>&gt;</div>
                </div>
                <div className="text-gray-700 dark:text-gray-400">&lt;/<span className="text-pink-600 dark:text-pink-400">html</span>&gt;</div>
              </div>
            </div>
          </div>

          <Alert className="bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800">
            <Lightbulb className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Remember</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              The browser reads your HTML top-to-bottom. Place metadata first, then styles, then content!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Script Loading Strategy */}
      <Card className="bg-gradient-to-br from-amber-50/40 to-orange-50/40 dark:from-amber-950/10 dark:to-orange-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            Script Loading: defer vs async
          </CardTitle>
          <CardDescription className="text-base">
            Choose the right loading strategy to optimize performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group p-6 bg-gradient-to-br from-blue-50/80 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 rounded-xl border-2 border-blue-300 dark:border-blue-700 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 dark:bg-blue-500/30 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <code className="text-xl font-bold text-blue-700 dark:text-blue-300">defer</code>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Downloads in parallel with HTML parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Executes after HTML is fully parsed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Preserves script order</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-xs font-semibold text-blue-800 dark:text-blue-200">✅ Best for: Main app bundles</p>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-purple-50/80 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 rounded-xl border-2 border-purple-300 dark:border-purple-700 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 dark:bg-purple-500/30 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <code className="text-xl font-bold text-purple-700 dark:text-purple-300">async</code>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Downloads in parallel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Executes immediately when ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>No guaranteed execution order</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-xs font-semibold text-purple-800 dark:text-purple-200">✅ Best for: Analytics & standalone scripts</p>
              </div>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Use <code className="font-mono">defer</code> for your main application JavaScript. Use <code className="font-mono">async</code> for third-party scripts that don't depend on your code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Boilerplates */}
      <Card className="bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileJson className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            Boilerplate Templates
          </CardTitle>
          <CardDescription className="text-base">
            Start minimal, scale up to a production-ready document structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            title="Minimal Structure"
            description="Perfect starter template - beginner friendly"
            html={minimalStructure}
            colorTheme="emerald"
            icon={FileJson}
            previewHeight="300px"
          />

          <FrontendCodePreview
            title="Complete Professional Structure"
            description="SEO, Performance & Accessibility optimized - Production ready"
            html={completeStructure}
            colorTheme="blue"
            icon={FileJson}
            previewHeight="400px"
          />
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="Interactive Document Structure Playground"
          description="Experience a properly structured document with live examples of defer, async, and DOM manipulation. See head and body sections in action."
          features={[
            'Live Structure',
            'Script Timing (defer)',
            'DOM Updates',
            'Dynamic Content'
          ]}
          buttonText="Launch Document Structure Playground"
          onLaunchPlayground={onOpenWebPlayground}
          playgroundData={{
            html: playgroundCode.html,
            css: playgroundCode.css,
            js: playgroundCode.js
          }}
          colorTheme="blue"
        />
      )}

      {/* Quick Reference */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />
            Quick Reference Checklist
          </CardTitle>
          <CardDescription className="text-base">
            Essential do's and don'ts for document structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Best Practices
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Doctype at very top: <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">&lt;!DOCTYPE html&gt;</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Always set <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">lang</code> attribute on <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">&lt;html&gt;</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Charset & viewport meta tags first in head</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Descriptive, concise <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">&lt;title&gt;</code> (under 60 chars)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>One canonical description meta tag</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Use <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">defer</code> for app scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Preload only truly critical assets</span>
                </li>
              </ul>
            </div>
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Common Mistakes
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Duplicate or conflicting meta descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Blocking rendering with large inline scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Missing semantic landmarks like <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">&lt;main&gt;</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Limit <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">preconnect</code> hints to essentials only</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Use <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">async</code> for analytics to avoid blocking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Order head tags: charset → viewport → title → description</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Small inline scripts (like year) are acceptable</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
