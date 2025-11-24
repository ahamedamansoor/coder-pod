'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Globe,
  Zap,
  Layers,
  Play,
  Sparkles,
  Terminal,
  MonitorSmartphone,
  Server,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface JavaScriptWhatIsJavaScriptProps {
  onOpenEditor?: (code: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundExamples = {
  hello: `// Your first JavaScript
function greet(name) {
  return 'Hello, ' + name + '!';
}

const message = greet('JavaScript');
console.log(message);`,
  interactive: `// Simple interactive counter
let count = 0;

function increment() {
  count = count + 1;
  console.log('Current count:', count);
}

increment();
increment();`,
};

export default function JavaScriptWhatIsJavaScript({ onOpenEditor, onOpenWebPlayground }: JavaScriptWhatIsJavaScriptProps) {
  const [activeExample, setActiveExample] = useState<'hello' | 'interactive'>('hello');
  const [output, setOutput] = useState<string>('');

  const runExample = (key: 'hello' | 'interactive') => {
    const code = playgroundExamples[key];
    setActiveExample(key);

    try {
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map((arg) => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg))).join(' '));
      };

      // Execute only our curated examples
      // eslint-disable-next-line no-eval
      eval(code);
      console.log = originalLog;
      setOutput(logs.join('\n') || '✅ Code ran without console output.');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setOutput(`❌ Error: ${message}`);
    }
  };

  return (
    <div className="w-full space-y-10 pb-16">
      <PageHeader
        icon={Code2}
        category="JavaScript Fundamentals"
        title="What is JavaScript?"
        description="Understand JavaScript's role in the web, where it runs, and why it matters."
        colorTheme="yellow"
      />

      {/* What is JavaScript? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <BookOpen className="w-6 h-6 text-yellow-600" />
            JavaScript in One Sentence
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript is a high-level programming language that makes web pages interactive and dynamic.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm md:text-base leading-relaxed">
              <p>
                When you click a button, submit a form, open a menu, or watch live updates without refreshing the page,
                you&apos;re seeing <strong>JavaScript in action</strong>. It runs inside the browser and can also run on
                servers, mobile apps, and desktop apps.
              </p>
              <p>
                Together with <strong>HTML</strong> (structure) and <strong>CSS</strong> (presentation), JavaScript
                provides the <strong>behavior</strong> layer of the web.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
                  <Globe className="w-3 h-3 mr-1" />
                  Runs in every browser
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100">
                  <Zap className="w-3 h-3 mr-1" />
                  Real-time interactivity
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
                  <Layers className="w-3 h-3 mr-1" />
                  Frontend &amp; backend
                </Badge>
              </div>
            </div>
            <div className="rounded-lg border bg-slate-50 dark:bg-slate-900 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3 text-center">
                HTML, CSS and JavaScript working together
              </h3>
              <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
                <div className="rounded-md bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 p-3 flex flex-col items-center text-center">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">HTML</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">Structure</span>
                  <span className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">What is on the page</span>
                </div>
                <div className="rounded-md bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700 p-3 flex flex-col items-center text-center">
                  <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">CSS</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">Presentation</span>
                  <span className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">How it looks</span>
                </div>
                <div className="rounded-md bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700 p-3 flex flex-col items-center text-center">
                  <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">JavaScript</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">Behavior</span>
                  <span className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">How it reacts</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Where JavaScript Runs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Globe className="w-6 h-6 text-yellow-600" />
            Where Does JavaScript Run?
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript started in the browser, but now runs almost everywhere.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="rounded-lg border bg-slate-50 dark:bg-slate-900 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <MonitorSmartphone className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold">In the Browser</h3>
            </div>
            <p className="text-muted-foreground">
              Runs directly in Chrome, Firefox, Safari, Edge and more. This is how we add interactivity to web pages.
            </p>
          </div>
          <div className="rounded-lg border bg-slate-50 dark:bg-slate-900 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold">On the Server</h3>
            </div>
            <p className="text-muted-foreground">
              With <strong>Node.js</strong>, JavaScript can power APIs and backend services, using the same language on
              both client and server.
            </p>
          </div>
          <div className="rounded-lg border bg-slate-50 dark:bg-slate-900 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold">Beyond the Web</h3>
            </div>
            <p className="text-muted-foreground">
              Used for mobile apps (React Native), desktop apps (Electron), command-line tools, and even IoT devices.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Live Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Play className="w-6 h-6 text-yellow-600" />
            Try JavaScript Right Here
          </CardTitle>
          <CardDescription className="text-base">
            Run curated examples and see the output instantly. No setup required.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs value={activeExample} onValueChange={(value) => setActiveExample(value as 'hello' | 'interactive')}>
            <TabsList className="mb-4">
              <TabsTrigger value="hello">Hello World</TabsTrigger>
              <TabsTrigger value="interactive">Interactive Counter</TabsTrigger>
            </TabsList>
            <TabsContent value="hello">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                  <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                    <span className="uppercase tracking-wide">hello-world.js</span>
                    <span className="text-slate-500 dark:text-slate-300">Console</span>
                  </div>
                  <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{playgroundExamples.hello}
                  </pre>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">
                    This is the classic first program. It prints messages to the browser&apos;s console, which is one of
                    the easiest ways to see JavaScript working.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="w-full md:w-auto"
                      onClick={() => runExample('hello')}
                    >
                      <Terminal className="w-4 h-4 mr-2" />
                      Run Example
                    </Button>
                    {onOpenEditor && (
                      <Button
                        variant="outline"
                        className="w-full md:w-auto"
                        onClick={() => onOpenEditor(playgroundExamples.hello)}
                      >
                        <Code2 className="w-4 h-4 mr-2" />
                        Open in Editor
                      </Button>
                    )}
                    {onOpenWebPlayground && (
                      <Button
                        variant="outline"
                        className="w-full md:w-auto"
                        onClick={() =>
                          onOpenWebPlayground(
                            `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello JavaScript</title>
  </head>
  <body>
    <h1>Open the console to see the output</h1>
  </body>
</html>`,
                            '',
                            playgroundExamples.hello
                          )
                        }
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Open in Web Playground
                      </Button>
                    )}
                  </div>
                  <div className="rounded-md border bg-slate-50 dark:bg-slate-900 p-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide mb-1 text-slate-500 dark:text-slate-400">
                      Output
                    </h4>
                    <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap">
{output && activeExample === 'hello' ? output : 'Click "Run Example" to see output here.'}
                    </pre>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="interactive">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                  <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                    <span className="uppercase tracking-wide">counter.js</span>
                    <span className="text-slate-500 dark:text-slate-300">Console</span>
                  </div>
                  <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{playgroundExamples.interactive}
                  </pre>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">
                    This example shows how JavaScript can keep track of state in memory. Each time you run it, the
                    counter increases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="w-full md:w-auto"
                      onClick={() => runExample('interactive')}
                    >
                      <Terminal className="w-4 h-4 mr-2" />
                      Run Example
                    </Button>
                    {onOpenEditor && (
                      <Button
                        variant="outline"
                        className="w-full md:w-auto"
                        onClick={() => onOpenEditor(playgroundExamples.interactive)}
                      >
                        <Code2 className="w-4 h-4 mr-2" />
                        Open in Editor
                      </Button>
                    )}
                    {onOpenWebPlayground && (
                      <Button
                        variant="outline"
                        className="w-full md:w-auto"
                        onClick={() =>
                          onOpenWebPlayground(
                            `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Counter Demo</title>
  </head>
  <body>
    <h1>Open the console and re-run the code to see the counter increase</h1>
  </body>
</html>`,
                            '',
                            playgroundExamples.interactive
                          )
                        }
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Open in Web Playground
                      </Button>
                    )}
                  </div>
                  <div className="rounded-md border bg-slate-50 dark:bg-slate-900 p-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide mb-1 text-slate-500 dark:text-slate-400">
                      Output
                    </h4>
                    <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap">
{output && activeExample === 'interactive' ? output : 'Click "Run Example" to see the counter in action.'}
                    </pre>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Beginner vs Expert View */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-yellow-600" />
            Beginner vs Expert View
          </CardTitle>
          <CardDescription className="text-base">
            See how your mental model of JavaScript will evolve as you gain experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
          <div className="space-y-3">
            <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">Beginner Perspective</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>JavaScript is mainly for making buttons work and showing alerts.</li>
              <li>You think about lines of code running from top to bottom.</li>
              <li>You mostly work in the browser console or small scripts.</li>
              <li>Focus is on syntax: variables, functions, loops, if statements.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Expert Perspective</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>JavaScript is a flexible, event-driven language used across the full stack.</li>
              <li>You think in terms of the call stack, event loop, and async tasks.</li>
              <li>You design architectures with modules, components, and state management.</li>
              <li>Focus is on performance, readability, testability, and user experience.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
