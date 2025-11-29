'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { InteractivePlayground } from '@/components/shared/interactive-playground';
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
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  BookOpen,
  TrendingUp,
} from 'lucide-react';

interface JavaScriptFirstProgramProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const consoleHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello JavaScript</title>
    <style>
      body { 
        font-family: system-ui; 
        padding: 2rem; 
        color: #64748b; 
      }
    </style>
  </head>
  <body>
    <p>Open the console to see the output</p>
  </body>
</html>`;

const consoleJs = `// Your First JavaScript Program

console.log('Hello, JavaScript!');
console.log('Welcome to programming!');

console.log('');
console.log('You can do math:');
console.log('2 + 2 =', 2 + 2);
console.log('10 × 5 =', 10 * 5);

console.log('');
console.log('✅ You just ran your first program!');`;

const domHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Interactive Hello</title>
    <style>
      body { 
        font-family: system-ui; 
        padding: 2rem; 
      }
      button { 
        padding: 0.75rem 1.5rem; 
        font-size: 1rem; 
        cursor: pointer; 
      }
      #message { 
        margin-top: 1rem; 
        font-size: 1.1rem; 
      }
    </style>
  </head>
  <body>
    <button id="btn">Click Me</button>
    <p id="message"></p>
  </body>
</html>`;

const domJs = `// Making Pages Interactive

const button = document.getElementById('btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Hello from JavaScript!';
  message.style.color = '#10b981';
  
  console.log('Button clicked!');
});

console.log('Ready! Click the button.');`;

const loopHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Looped Messages</title>
    <style>
      body { 
        font-family: system-ui; 
        padding: 2rem; 
        color: #64748b; 
      }
    </style>
  </head>
  <body>
    <p>Open the console to see the output</p>
  </body>
</html>`;

const loopJs = `// Using Loops to Repeat Code

console.log('Counting up:');
for (let i = 1; i <= 5; i++) {
  console.log('Number', i);
}

console.log('');
console.log('Counting down:');
for (let i = 3; i >= 1; i--) {
  console.log(i + '...');
}
console.log('Done!');

console.log('');
console.log('✅ Loops repeat code automatically');`;

export default function JavaScriptFirstProgram({ onOpenWebPlayground }: JavaScriptFirstProgramProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="First JavaScript Program"
        description="Write, run, and understand your very first JavaScript program—from console logs to interactive pages."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            From Zero to First Program
          </CardTitle>
          <CardDescription className="text-base">
            We&apos;ll move from a single console line to a fully interactive &quot;Hello, JavaScript&quot; experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Step 1: Console Hello</h3>
            </div>
            <p className="text-muted-foreground">
              Learn how to make the browser talk back to you using <code className="font-mono">console.log</code>.
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
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
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
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
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Towards Expert
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Live Playground – First Programs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Run Your First Programs
          </CardTitle>
          <CardDescription className="text-base">
            Launch curated examples in the Web Playground to see JavaScript run inside a real page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Console Hello */}
          <div className="space-y-4">
            <CodeSnippetWithOutput
              title="1. Console Hello"
              description="The classic first program: log a message to the console. This example pairs a simple HTML page with a script."
              code={consoleJs}
              output={[
                "Hello, JavaScript!",
                "Welcome to programming!",
                "",
                "You can do math:",
                "2 + 2 = 4",
                "10 × 5 = 50",
                "",
                "✅ You just ran your first program!"
              ]}
              language="javascript"
              colorTheme="blue"
              icon={Terminal}
            />
            {onOpenWebPlayground && (
              <InteractivePlayground
                title="Try Console Hello"
                description="Run your first JavaScript program and see console.log in action"
                features={[
                  'Console Output',
                  'Math Operations',
                  'Text Logging',
                  'Beginner Friendly'
                ]}
                buttonText="Open Console Hello"
                onLaunchPlayground={onOpenWebPlayground}
                playgroundData={{
                  html: consoleHtml,
                  css: '',
                  js: consoleJs
                }}
                colorTheme="blue"
              />
            )}
          </div>

          {/* Example 2: Button Click */}
          <div className="space-y-4">
            <CodeSnippetWithOutput
              title="2. Button Click Hello"
              description="Attach JavaScript to the DOM. When the user clicks the button, your code runs and updates the page."
              code={domJs}
              output={[
                "Ready! Click the button.",
                "// After clicking:",
                "Button clicked!",
                "// DOM updates: 'Hello from JavaScript!' (text turns green)"
              ]}
              language="javascript"
              colorTheme="emerald"
              icon={MousePointerClick}
            />
            {onOpenWebPlayground && (
              <InteractivePlayground
                title="Try Button Click"
                description="Experience interactive DOM manipulation with click events"
                features={[
                  'Event Listeners',
                  'DOM Updates',
                  'Style Changes',
                  'User Interaction'
                ]}
                buttonText="Open Button Demo"
                onLaunchPlayground={onOpenWebPlayground}
                playgroundData={{
                  html: domHtml,
                  css: '',
                  js: domJs
                }}
                colorTheme="emerald"
              />
            )}
          </div>

          {/* Example 3: Loop */}
          <div className="space-y-4">
            <CodeSnippetWithOutput
              title="3. Looped Messages"
              description="Add a loop to your first program. This prints multiple messages and demonstrates repetition and patterns."
              code={loopJs}
              output={[
                "Counting up:",
                "Number 1",
                "Number 2",
                "Number 3",
                "Number 4",
                "Number 5",
                "",
                "Counting down:",
                "3...",
                "2...",
                "1...",
                "Done!",
                "",
                "✅ Loops repeat code automatically"
              ]}
              language="javascript"
              colorTheme="purple"
              icon={Layers}
            />
            {onOpenWebPlayground && (
              <InteractivePlayground
                title="Try Loops"
                description="Learn how loops work by repeating code automatically"
                features={[
                  'For Loops',
                  'Repetition',
                  'Counting Logic',
                  'Pattern Practice'
                ]}
                buttonText="Open Loop Demo"
                onLaunchPlayground={onOpenWebPlayground}
                playgroundData={{
                  html: loopHtml,
                  css: '',
                  js: loopJs
                }}
                colorTheme="purple"
              />
            )}
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Visual Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Anatomy of Your First Program
          </CardTitle>
          <CardDescription className="text-base">
            Let's break down every part of console.log('Hello, World!') and understand what's happening.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* console */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <div className="font-mono text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3">console</div>
              <h4 className="font-semibold mb-2">The Console Object</h4>
              <p className="text-sm text-muted-foreground mb-3">
                A built-in JavaScript object that provides access to the browser's debugging console.
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">Global object (available everywhere)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">Part of Web APIs</span>
                </div>
              </div>
            </div>

            {/* .log() */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <div className="font-mono text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">.log()</div>
              <h4 className="font-semibold mb-2">The Method</h4>
              <p className="text-sm text-muted-foreground mb-3">
                A function (method) that outputs messages to the console. Think of it as "print" or "display".
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  <span className="text-muted-foreground">Takes any value as input</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  <span className="text-muted-foreground">Shows result in DevTools</span>
                </div>
              </div>
            </div>

            {/* 'Hello, World!' */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <div className="font-mono text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">'Hello!'</div>
              <h4 className="font-semibold mb-2">The String</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Text data wrapped in quotes. This is what will be displayed in the console.
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span className="text-muted-foreground">Can use single or double quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span className="text-muted-foreground">Called a "string" data type</span>
                </div>
              </div>
            </div>

            {/* ; */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <div className="font-mono text-2xl font-bold text-amber-700 dark:text-amber-300 mb-3">;</div>
              <h4 className="font-semibold mb-2">The Semicolon</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Marks the end of a statement. Like a period at the end of a sentence.
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                  <span className="text-muted-foreground">Optional (but recommended)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                  <span className="text-muted-foreground">Helps avoid bugs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Example with Annotations */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Putting It All Together
            </h4>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">console</span>
                <span className="text-gray-600 dark:text-gray-400">.</span>
                <span className="text-emerald-600 dark:text-emerald-400">log</span>
                <span className="text-gray-600 dark:text-gray-400">(</span>
                <span className="text-purple-600 dark:text-purple-400">'Hello, World!'</span>
                <span className="text-gray-600 dark:text-gray-400">);</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              This single line tells JavaScript: "Take the text 'Hello, World!' and display it in the console."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Common Beginner Mistakes
          </CardTitle>
          <CardDescription className="text-base">
            Learn from these common pitfalls and save yourself hours of debugging!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Mistake 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-rose-200 dark:border-rose-800">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-1">Missing Quotes</h4>
                  <div className="font-mono text-xs bg-rose-50 dark:bg-rose-950/20 p-2 rounded mb-2">
                    console.log(Hello); // ❌ Error!
                  </div>
                  <p className="text-sm text-muted-foreground">Without quotes, JavaScript thinks "Hello" is a variable, not text.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3 pt-3 border-t border-rose-200 dark:border-rose-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Correct Way</h4>
                  <div className="font-mono text-xs bg-emerald-50 dark:bg-emerald-950/20 p-2 rounded">
                    console.log('Hello'); // ✅ Works!
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-rose-200 dark:border-rose-800">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-1">Typos in console</h4>
                  <div className="font-mono text-xs bg-rose-50 dark:bg-rose-950/20 p-2 rounded mb-2">
                    consol.log('Hi'); // ❌ Error!
                  </div>
                  <p className="text-sm text-muted-foreground">JavaScript is case-sensitive and spelling matters!</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3 pt-3 border-t border-rose-200 dark:border-rose-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Correct Way</h4>
                  <div className="font-mono text-xs bg-emerald-50 dark:bg-emerald-950/20 p-2 rounded">
                    console.log('Hi'); // ✅ Works!
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-rose-200 dark:border-rose-800">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-1">Mismatched Quotes</h4>
                  <div className="font-mono text-xs bg-rose-50 dark:bg-rose-950/20 p-2 rounded mb-2">
                    console.log('Hello"); // ❌ Error!
                  </div>
                  <p className="text-sm text-muted-foreground">Start and end quotes must match!</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3 pt-3 border-t border-rose-200 dark:border-rose-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Correct Way</h4>
                  <div className="font-mono text-xs bg-emerald-50 dark:bg-emerald-950/20 p-2 rounded">
                    console.log("Hello"); // ✅ Works!
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 4 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-rose-200 dark:border-rose-800">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-1">Missing Parentheses</h4>
                  <div className="font-mono text-xs bg-rose-50 dark:bg-rose-950/20 p-2 rounded mb-2">
                    console.log'Hello'; // ❌ Error!
                  </div>
                  <p className="text-sm text-muted-foreground">Functions need () to be called!</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3 pt-3 border-t border-rose-200 dark:border-rose-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Correct Way</h4>
                  <div className="font-mono text-xs bg-emerald-50 dark:bg-emerald-950/20 p-2 rounded">
                    console.log('Hello'); // ✅ Works!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Pro Tip</h4>
                <p className="text-sm text-muted-foreground">
                  When you get an error, read the message carefully! It usually tells you exactly what went wrong and which line has the problem.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
