'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  FileCode,
  Sparkles,
  Layers,
  Globe,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Monitor,
  Play,
  Workflow,
  ArrowRight,
} from 'lucide-react';

interface HtmlIntroductionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML Intro</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 20% 20%, #eef2ff, #f8fafc 50%), #f8fafc;
      color: #0f172a;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .card {
      width: min(760px, 100%);
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      box-shadow: 0 18px 70px rgba(15, 23, 42, 0.08);
      padding: 22px;
    }
    h1 { margin: 0 0 8px; color: #2563eb; }
    p { margin: 0 0 12px; color: #475569; }
    .grid { display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-top: 12px; }
    .pill { padding: 10px 12px; border-radius: 12px; background: #f1f5f9; border: 1px dashed #e2e8f0; font-weight: 600; }
    code { background: #0f172a; color: #e2e8f0; padding: 8px 10px; border-radius: 8px; display: block; white-space: pre; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, HTML!</h1>
    <p>This mini page shows structure: heading, paragraph, and a styled list.</p>
    <div class="grid" id="preview"></div>
    <code id="snippet"></code>
  </div>
  <script src="./html-intro-demo.js"></script>
</body>
</html>`;

const playgroundJs = `const points = [
  '<!DOCTYPE html> declares HTML5',
  '<head> holds metadata like <title>',
  '<body> renders what users see'
];

document.getElementById('preview').innerHTML = points
  .map(text => '<div class="pill">' + text + '</div>')
  .join('');

document.getElementById('snippet').textContent =
'<body>\\n  <h1>Hello, HTML!</h1>\\n  <p>Structure first, style later.</p>\\n</body>';`;

export default function HtmlIntroduction({ onOpenWebPlayground }: HtmlIntroductionProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={FileCode}
        category="HTML · Foundations"
        title="Introduction to HTML"
        description="Understand what HTML is, how browsers read it, and the core tags that build every web page."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why HTML Matters
          </CardTitle>
          <CardDescription className="text-base">
            HTML gives structure and meaning to content. Browsers parse it top-to-bottom before applying CSS or JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Structure</h3>
            </div>
            <p className="text-sm text-muted-foreground">Headings, paragraphs, lists, and containers organize content.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Tags</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Semantics</h3>
            </div>
            <p className="text-sm text-muted-foreground">Meaningful tags improve accessibility and SEO.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Meaning</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Foundation</h3>
            </div>
            <p className="text-sm text-muted-foreground">CSS styles HTML and JavaScript makes it interactive.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Base layer</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Visual flow */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Workflow className="w-7 h-7 text-blue-600/80 dark:text-blue-400/80" />
            How HTML Becomes a Page (Diagram)
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Follow the journey from your editor to a rendered, interactive document.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Write HTML',
              'Browser Parses',
              'Build DOM',
              'Apply CSS',
              'Layout & Paint',
              'User Interacts',
            ].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h4 className="font-semibold">DOM Tree</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                The browser turns tags into nodes. Each element becomes part of the tree you can query and update.
              </p>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h4 className="font-semibold">CSS Cascade</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Styles attach to nodes based on selectors and cascade rules before layout and paint.
              </p>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-2">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h4 className="font-semibold">Accessibility Hooks</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Semantic elements improve keyboard navigation and screen readers—structure is your first a11y tool.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page skeleton */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            HTML Page Skeleton
          </CardTitle>
          <CardDescription className="text-base">
            Every page follows the same outline: doctype, html, head, and body.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Minimal document</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>&lt;!DOCTYPE html&gt;</div>
              <div>&lt;html lang="en"&gt;</div>
              <div className="pl-2">&lt;head&gt;...metadata...&lt;/head&gt;</div>
              <div className="pl-2">&lt;body&gt;...content...&lt;/body&gt;</div>
              <div>&lt;/html&gt;</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Head vs Body</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>&lt;head&gt;: title, meta, links, scripts (optional defer)</div>
              <div>&lt;body&gt;: everything users see</div>
            </div>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Keep heavy scripts deferred so HTML can render first.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Core tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileCode className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Essential Tags
          </CardTitle>
          <CardDescription className="text-base">
            Start with these tags to build any page.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border space-y-2">
            <h4 className="font-semibold">Headings & text</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-1 border">
              <div>&lt;h1&gt;Main title&lt;/h1&gt;</div>
              <div>&lt;p&gt;Supporting paragraph.&lt;/p&gt;</div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border space-y-2">
            <h4 className="font-semibold">Links & media</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-1 border">
              <div>&lt;a href="#"&gt;Visit&lt;/a&gt;</div>
              <div>&lt;img src="photo.jpg" alt="Description" /&gt;</div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border space-y-2">
            <h4 className="font-semibold">Lists</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-1 border">
              <div>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</div>
              <div>&lt;ol&gt;&lt;li&gt;Step&lt;/li&gt;&lt;/ol&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Semantic landmarks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Semantic Landmarks
          </CardTitle>
          <CardDescription className="text-base">
            Wrap your layout with meaningful containers to aid accessibility and navigation.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold">Landmark outline</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>&lt;header&gt;Logo + nav&lt;/header&gt;</div>
              <div>&lt;nav aria-label="Main"&gt;...&lt;/nav&gt;</div>
              <div>&lt;main&gt;Primary content&lt;/main&gt;</div>
              <div>&lt;aside&gt;Related links&lt;/aside&gt;</div>
              <div>&lt;footer&gt;Meta info&lt;/footer&gt;</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Why it matters</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Screen readers jump between landmarks quickly.</li>
              <li>✅ Clear structure improves SEO and maintainability.</li>
              <li>✅ Easier to style when sections are named by intent.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Forms and labels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Form Basics
          </CardTitle>
          <CardDescription className="text-base">
            Pair labels and inputs, add helpful hints, and wire accessibility attributes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Labeled input</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>&lt;label for="email"&gt;Email&lt;/label&gt;</div>
              <div>&lt;input id="email" type="email" aria-describedby="hint" /&gt;</div>
              <div>&lt;small id="hint"&gt;We never share your email&lt;/small&gt;</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Quick tips</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Match `for` and `id` for every control.</li>
              <li>✅ Use specific types (`email`, `number`, `date`) for better UX.</li>
              <li>✅ Add helper text with `aria-describedby` when guidance is needed.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Responsive media */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Monitor className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Responsive Media
          </CardTitle>
          <CardDescription className="text-base">
            Make images adapt to containers and stay accessible.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold">Image pattern</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>&lt;img</div>
              <div className="pl-2">src="hero.jpg"</div>
              <div className="pl-2">alt="Team collaborating in an office"</div>
              <div className="pl-2">loading="lazy"</div>
              <div className="pl-2">style="width:100%;max-width:640px;border-radius:12px;"</div>
              <div>/&gt;</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Why this works</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ `width: 100%` and `max-width` keep images fluid but bounded.</li>
              <li>✅ `loading="lazy"` defers offscreen media.</li>
              <li>✅ Descriptive `alt` text supports accessibility and SEO.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use semantic tags (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;).</li>
              <li>✅ Add alt text to images for accessibility.</li>
              <li>✅ Keep titles and meta descriptions relevant.</li>
              <li>✅ Validate HTML to catch missing tags.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Nesting block elements incorrectly (e.g., &lt;div&gt; inside &lt;p&gt;).</li>
              <li>❌ Omitting language attribute on &lt;html&gt;.</li>
              <li>❌ Using deprecated tags like &lt;font&gt; or &lt;center&gt;.</li>
              <li>❌ Relying on inline styles for layout.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try HTML Live
          </CardTitle>
          <CardDescription className="text-base">
            Open the playground to see a simple page and key structural pieces highlighted.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">html-intro-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Structure + preview pills</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
