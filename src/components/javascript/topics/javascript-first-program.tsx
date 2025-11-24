'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Zap,
  Terminal,
  MonitorSmartphone,
  MousePointerClick,
  Code2,
  Globe,
  Sparkles,
  Layers,
  Play,
  ArrowRight,
  Target,
} from 'lucide-react';

interface JavaScriptFirstProgramProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const consoleHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello JavaScript</title>
  </head>
  <body style="font-family: system-ui; padding: 2rem;">
    <h1>Hello JavaScript</h1>
    <p>Open your browser console to see your first program.</p>
  </body>
</html>`;

const consoleJs = `console.log('Hello, JavaScript!');
console.log('You just ran your first program 🎉');`;

const domHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Interactive Hello</title>
  </head>
  <body style="font-family: system-ui; padding: 2rem;">
    <h1 id="title">Click the button to say hello</h1>
    <button id="btn" style="padding: 0.75rem 1.5rem; font-size: 1rem;">
      Say Hello
    </button>
    <p id="message" style="margin-top: 1rem;"></p>
  </body>
</html>`;

const domJs = `const button = document.getElementById('btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Hello from JavaScript! 🎉';
});`;

const loopHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Looped Messages</title>
  </head>
  <body style="font-family: system-ui; padding: 2rem;">
    <h1>Open the console to see multiple greetings</h1>
  </body>
</html>`;

const loopJs = `for (let i = 1; i <= 3; i++) {
  console.log('Hello number ' + i);
}
console.log('Loops let you repeat logic easily.');`;

export default function JavaScriptFirstProgram({ onOpenWebPlayground }: JavaScriptFirstProgramProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="First JavaScript Program"
        description="Write, run, and understand your very first JavaScript program—from console logs to interactive pages."
        colorTheme="yellow"
      />

      {/* Overview */}
      <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-yellow-600" />
            From Zero to First Program
          </CardTitle>
          <CardDescription className="text-base">
            We&apos;ll move from a single console line to a fully interactive &quot;Hello, JavaScript&quot; experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold">Step 1: Console Hello</h3>
            </div>
            <p className="text-muted-foreground">
              Learn how to make the browser talk back to you using <code className="font-mono">console.log</code>.
            </p>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
              Beginner
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold">Step 2: Click to Hello</h3>
            </div>
            <p className="text-muted-foreground">
              Attach JavaScript to real HTML elements and respond to user actions.
            </p>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100">
              Intermediate
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold">Step 3: Patterns & Loops</h3>
            </div>
            <p className="text-muted-foreground">
              Use loops and patterns to grow simple programs into reusable, scalable logic.
            </p>
            <Badge variant="secondary" className="bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
              Towards Expert
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Beginner → Expert Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-yellow-600" />
            Beginner to Expert Flow
          </CardTitle>
          <CardDescription className="text-base">
            Switch views to see how your understanding of a &quot;simple&quot; program evolves.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="beginner">
            <TabsList className="mb-4">
              <TabsTrigger value="beginner">Beginner View</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate View</TabsTrigger>
              <TabsTrigger value="expert">Expert View</TabsTrigger>
            </TabsList>
            <TabsContent value="beginner" className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                As a beginner, focus on one thing: <strong>getting a message on the screen</strong>. The easiest place
                to do that is the browser console.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">console.js</span>
                  <span className="text-slate-500 dark:text-slate-300">First program</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
console.log('Hello, JavaScript!');</pre>
              </div>
            </TabsContent>
            <TabsContent value="intermediate" className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                At the intermediate level, you see that a &quot;simple&quot; program still has <strong>inputs</strong>,{' '}
                <strong>logic</strong>, and <strong>outputs</strong>. You think in terms of behavior: &quot;When the
                user clicks, do X.&quot;
              </p>
              <p className="text-muted-foreground">
                The &quot;first program&quot; becomes: &quot;When this event happens, run this function and update the
                UI.&quot;
              </p>
            </TabsContent>
            <TabsContent value="expert" className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                Experts see the same program as part of a <strong>system</strong>: event loop, call stack, DOM APIs,
                and a flow of data. Even a simple console log is a call scheduled on an event loop and printed through
                the devtools pipeline.
              </p>
              <p className="text-muted-foreground">
                Thinking this way prepares you for debugging, performance tuning, and scaling your code beyond one
                file.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Live Playground – First Programs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-yellow-600" />
            Run Your First Programs
          </CardTitle>
          <CardDescription className="text-base">
            Launch curated examples in the Web Playground to see JavaScript run inside a real page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base">
          <Tabs defaultValue="console">
            <TabsList className="mb-4">
              <TabsTrigger value="console">Console Hello</TabsTrigger>
              <TabsTrigger value="dom">Button Click Hello</TabsTrigger>
              <TabsTrigger value="loop">Looped Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="console" className="space-y-3">
              <p className="text-muted-foreground">
                The classic first program: log a message to the console. This example pairs a simple HTML page with a
                script so you can see both sides.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">hello-console.html</span>
                  <span className="text-slate-500 dark:text-slate-300">Console hello</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{consoleHtml}
                </pre>
              </div>
              {onOpenWebPlayground && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => onOpenWebPlayground(consoleHtml, '', consoleJs)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Open in Web Playground
                </Button>
              )}
            </TabsContent>

            <TabsContent value="dom" className="space-y-3">
              <p className="text-muted-foreground">
                Next, attach JavaScript to the DOM. When the user clicks the button, your code runs and updates the
                page.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">hello-dom.html</span>
                  <span className="text-slate-500 dark:text-slate-300">DOM hello</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{domHtml}
                </pre>
              </div>
              {onOpenWebPlayground && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => onOpenWebPlayground(domHtml, domJs ? '' : '', domJs)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Open in Web Playground
                </Button>
              )}
            </TabsContent>

            <TabsContent value="loop" className="space-y-3">
              <p className="text-muted-foreground">
                Finally, add a loop. This &quot;first program&quot; now prints multiple messages and hints at how you&apos;ll
                work with repetition and patterns.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">loop.js</span>
                  <span className="text-slate-500 dark:text-slate-300">Looped messages</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{loopJs}
                </pre>
              </div>
              {onOpenWebPlayground && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => onOpenWebPlayground(loopHtml, '', loopJs)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Open in Web Playground
                </Button>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Concept Checklist – Accordion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-yellow-600" />
            First Program Concepts Checklist
          </CardTitle>
          <CardDescription className="text-base">
            Expand each item to confirm you understand the core ideas behind your first JavaScript program.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="output">
              <AccordionTrigger className="text-sm md:text-base">
                Output: Where does my program&apos;s result appear?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground space-y-2">
                <p>
                  In the browser, your first outputs usually go to the <strong>console</strong> or the{' '}
                  <strong>page itself</strong>.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <code className="font-mono">console.log()</code> → Developer console (great for debugging).
                  </li>
                  <li>DOM updates (like changing text) → What the user sees on the page.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="flow">
              <AccordionTrigger className="text-sm md:text-base">
                Flow: In what order does JavaScript run my code?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground space-y-2">
                <p>
                  JavaScript runs top-to-bottom, one line at a time. When you attach listeners (like
                  <code className="font-mono"> addEventListener</code>), you&apos;re telling the browser: &quot;When
                  this happens later, run this piece of code.&quot;
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mental-model">
              <AccordionTrigger className="text-sm md:text-base">
                Mental Model: What actually is a &quot;program&quot;?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground space-y-2">
                <p>
                  Think of a program as a set of <strong>instructions</strong> the computer follows to transform
                  inputs into outputs. Even your first &quot;Hello, JavaScript!&quot; is a tiny, complete program.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
