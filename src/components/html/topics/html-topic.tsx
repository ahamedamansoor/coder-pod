'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileCode,
  Globe,
  Layout,
  Layers,
  Play,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

type PlaygroundOpener = (html: string, css: string, js: string) => void;

interface HtmlTopicProps {
  onOpenWebPlayground?: PlaygroundOpener;
}

const INTRO_EXAMPLE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
    <p>This is my very first web page.</p>
  </body>
</html>`;

const LIVE_HTML_TEMPLATE = `<main>
  <h1>Hello, HTML 👋</h1>
  <p>Edit this content and see it update instantly.</p>
  <button>Click me</button>
</main>`;

function buildLiveSrcDoc(html: string) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      :root {
        color-scheme: light dark;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      body {
        margin: 0;
        padding: 1.5rem;
        background: #f9fafb;
        color: #0f172a;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background: #020617;
          color: #e5e7eb;
        }
      }
      button {
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        border: none;
        background: #5B7FFF;
        color: white;
        cursor: pointer;
      }
      button:hover {
        background: #3b5edb;
      }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`;
}

export default function HtmlTopic({ onOpenWebPlayground }: HtmlTopicProps) {
  const [liveHtml, setLiveHtml] = useState(LIVE_HTML_TEMPLATE);

  return (
    <div className="w-full min-h-screen pb-16 bg-gradient-to-b from-background via-background to-background">
      <div className="w-full px-3 md:px-6 space-y-10">
        <PageHeader
          icon={FileCode}
          category="HTML · Foundations"
          title="Introduction to HTML"
          description="Explore the structural language of the web—from first tag to expert mental models."
          colorTheme="blue"
        />

        {/* Hero */}
        <Card className="border border-[#5B7FFF]/25 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-100 dark:border-[#5B7FFF]/40 dark:from-slate-900/40 dark:via-slate-950/60 dark:to-slate-900/40">
          <CardContent className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-slate-900/80 px-3 py-1 border border-[#5B7FFF]/30">
                <Sparkles className="w-4 h-4 text-[#5B7FFF]" />
                <span className="text-xs font-semibold tracking-wide text-[#1d3bb8] dark:text-[#c7d2ff]">
                  Beginner → Expert guided journey
                </span>
              </div>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-200">
                HTML gives content meaning: headings, paragraphs, navigation, forms, and more. This page
                walks you from your very first tag to expert-level patterns and mental models.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full md:w-auto text-center text-xs md:text-sm">
              <div className="rounded-xl bg-white/90 dark:bg-slate-950/80 border border-[#5B7FFF]/20 px-3 py-2">
                <p className="font-semibold text-[#1d3bb8] dark:text-[#c7d2ff]">Beginner</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">Tags & structure</p>
              </div>
              <div className="rounded-xl bg-white/90 dark:bg-slate-950/80 border border-[#5B7FFF]/20 px-3 py-2">
                <p className="font-semibold text-[#1d3bb8] dark:text-[#c7d2ff]">Intermediate</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">Semantics & layout</p>
              </div>
              <div className="rounded-xl bg-white/90 dark:bg-slate-950/80 border border-[#5B7FFF]/20 px-3 py-2">
                <p className="font-semibold text-[#1d3bb8] dark:text-[#c7d2ff]">Expert</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">Accessibility & APIs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs: beginner / intermediate / expert views */}
        <Card className="border border-[#5B7FFF]/25 dark:border-[#5B7FFF]/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl">
              <Layers className="w-7 h-7 text-[#5B7FFF]" />
              How to think about HTML
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Switch perspectives as you grow: from simple tags to semantics and accessibility.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="beginner" className="w-full">
              <TabsList className="mb-4 inline-flex rounded-full bg-slate-100/80 dark:bg-slate-900/70 p-1 border border-[#5B7FFF]/25 shadow-sm">
                <TabsTrigger
                  value="beginner"
                  className="px-4 py-1.5 rounded-full text-xs md:text-sm data-[state=active]:bg-[#5B7FFF] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:scale-[1.02] transition-all"
                >
                  Beginner
                </TabsTrigger>
                <TabsTrigger
                  value="intermediate"
                  className="px-4 py-1.5 rounded-full text-xs md:text-sm data-[state=active]:bg-[#5B7FFF] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:scale-[1.02] transition-all"
                >
                  Intermediate
                </TabsTrigger>
                <TabsTrigger
                  value="expert"
                  className="px-4 py-1.5 rounded-full text-xs md:text-sm data-[state=active]:bg-[#5B7FFF] data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:scale-[1.02] transition-all"
                >
                  Expert
                </TabsTrigger>
              </TabsList>

              <TabsContent value="beginner" className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  At this level, HTML is about learning the most common tags and how to structure a basic
                  page.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Core tags
                    </Badge>
                    <ul className="space-y-1">
                      <li>&lt;html&gt;, &lt;head&gt;, &lt;body&gt;</li>
                      <li>Headings &lt;h1&gt;–&lt;h3&gt;</li>
                      <li>Paragraphs &lt;p&gt;</li>
                      <li>Links &lt;a&gt; and images &lt;img&gt;</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Goal
                    </Badge>
                    <p>Create a simple personal profile page with text, images, and links.</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Mindset
                    </Badge>
                    <p>Think in blocks of content, not in pixel-perfect design yet.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Now you start caring about semantics: making the structure meaningful, not just
                  presentational.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Semantic layout
                    </Badge>
                    <ul className="space-y-1">
                      <li>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</li>
                      <li>&lt;section&gt;, &lt;article&gt;, &lt;aside&gt;</li>
                      <li>&lt;nav&gt; for navigation</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Forms
                    </Badge>
                    <p>Introduce &lt;form&gt;, inputs, labels, and basic validation attributes.</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Goal
                    </Badge>
                    <p>Build a multi-section landing page with a contact form.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="expert" className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Expert-level HTML is about accessibility, performance, and resilient structures.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Accessibility
                    </Badge>
                    <ul className="space-y-1">
                      <li>Landmarks & ARIA roles</li>
                      <li>Logical heading hierarchy</li>
                      <li>Keyboard-first interactions</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      HTML5 APIs
                    </Badge>
                    <p>Use modern elements like &lt;dialog&gt;, &lt;template&gt; and media elements.</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4 space-y-2">
                    <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8]">
                      Goal
                    </Badge>
                    <p>Create an accessible application shell with navigation and live regions.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Visual diagram + code sample */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-6">
          <Card className="border border-[#5B7FFF]/25 dark:border-[#5B7FFF]/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Layout className="w-6 h-6 text-[#5B7FFF]" />
                Anatomy of a page
              </CardTitle>
              <CardDescription>
                See how the core structural elements fit together in a real document.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-4 text-xs md:text-sm font-mono">
                <div className="relative border border-[#5B7FFF]/40 rounded-lg p-4">
                  <div className="absolute -top-3 left-4 bg-[#5B7FFF] text-white text-[10px] px-2 py-0.5 rounded-full">
                    Document
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-md border border-[#5B7FFF]/40 bg-white/80 dark:bg-slate-950/80 p-3">
                      <span className="font-semibold text-[#1d3bb8]">&lt;head&gt;</span> – metadata,
                      title, SEO
                    </div>
                    <div className="rounded-md border border-[#5B7FFF]/40 bg-white/80 dark:bg-slate-950/80 p-3 space-y-2">
                      <span className="font-semibold text-[#1d3bb8]">&lt;body&gt;</span>
                      <div className="grid md:grid-cols-3 gap-2 text-[11px]">
                        <div className="rounded border border-[#5B7FFF]/35 p-2">
                          &lt;header&gt; — logo, nav
                        </div>
                        <div className="rounded border border-[#5B7FFF]/35 p-2">
                          &lt;main&gt; — core content
                        </div>
                        <div className="rounded border border-[#5B7FFF]/35 p-2">
                          &lt;footer&gt; — links, legal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#5B7FFF]/25 dark:border-[#5B7FFF]/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Code2 className="w-5 h-5 text-[#5B7FFF]" />
                First HTML file
              </CardTitle>
              <CardDescription>Light in light mode, dark in dark mode.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md overflow-hidden border bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
                <div className="flex items-center justify-between px-4 py-2 text-[11px] font-medium bg-slate-200/70 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">index.html</span>
                  <span className="text-slate-500 dark:text-slate-300">Minimal but complete</span>
                </div>
                <pre className="font-mono text-xs md:text-[13px] px-4 py-3 whitespace-pre overflow-x-auto">
{INTRO_EXAMPLE}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live playground */}
        <Card className="border border-[#5B7FFF]/25 dark:border-[#5B7FFF]/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <TerminalSquare className="w-6 h-6 text-[#5B7FFF]" />
              Live HTML playground
            </CardTitle>
            <CardDescription>
              Edit the HTML on the left and watch the preview update instantly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <FileCode className="w-3 h-3" />
                    Live HTML
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-[11px]"
                    onClick={() => setLiveHtml(LIVE_HTML_TEMPLATE)}
                  >
                    Reset
                  </Button>
                </div>
                <textarea
                  value={liveHtml}
                  onChange={(event) => setLiveHtml(event.target.value)}
                  className="w-full h-64 font-mono text-xs md:text-[13px] rounded-md border bg-slate-50 dark:bg-slate-950/80 dark:border-slate-700 p-3 focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/60"
                  spellCheck={false}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    Live preview
                  </span>
                </div>
                <div className="rounded-md border bg-slate-100 dark:bg-slate-900 h-64 overflow-hidden">
                  <iframe
                    title="HTML live preview"
                    className="w-full h-full border-0"
                    srcDoc={buildLiveSrcDoc(liveHtml)}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>

            {onOpenWebPlayground && (
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-[#5B7FFF]" />
                  Want more room? Open this example in the full playground.
                </p>
                <Button
                  size="sm"
                  className="inline-flex items-center gap-2"
                  onClick={() =>
                    onOpenWebPlayground?.(LIVE_HTML_TEMPLATE, '', '')
                  }
                >
                  <Play className="w-4 h-4" />
                  Open in playground
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mental models */}
        <Card className="border border-[#5B7FFF]/25 dark:border-[#5B7FFF]/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Globe className="w-6 h-6 text-[#5B7FFF]" />
              Mental models & best practices
            </CardTitle>
            <CardDescription>
              A few durable ideas you can reuse as your projects grow.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="structure-first">
                <AccordionTrigger className="text-sm md:text-base">
                  1. Structure first, visuals later
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Great HTML reads like an outline of the page. If you removed all CSS, the content
                    should still make sense in order and hierarchy.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>Use headings to describe sections, not just to make text big.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>Group related content using &lt;section&gt; and &lt;article&gt;.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="accessibility">
                <AccordionTrigger className="text-sm md:text-base">
                  2. Accessibility from day one
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    HTML is the first and most important layer of accessibility.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>
                        Always set the <code className="font-mono">lang</code> attribute on
                        &nbsp;&lt;html&gt;.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>Use real buttons (&lt;button&gt;) for actions, not styled links.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>
                        Provide text alternatives for images with the <code className="font-mono">alt</code>{' '}
                        attribute.
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reusable-patterns">
                <AccordionTrigger className="text-sm md:text-base">
                  3. Think in reusable patterns
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Repeating HTML patterns will later turn into components in frameworks like React or
                    Vue.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>Identify recurring card or list layouts in your markup.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5B7FFF] mt-0.5" />
                      <span>Keep attributes meaningful and consistent across similar elements.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Closing card */}
        <Card className="border border-[#5B7FFF]/25 dark:border-[#5B7FFF]/40 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-100 dark:from-slate-900/40 dark:via-slate-950/60 dark:to-slate-900/40">
          <CardContent className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#5B7FFF]" />
                You&apos;re ready to build real pages
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                With a solid grasp of HTML structure, you&apos;re ready to layer on CSS, JavaScript and
                real-world projects. Keep practicing by rebuilding interfaces you use every day.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8] dark:text-[#c7d2ff]">
                Next · Document structure
              </Badge>
              <Badge variant="outline" className="border-[#5B7FFF]/40 text-[#1d3bb8] dark:text-[#c7d2ff]">
                Next · Semantic HTML
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
