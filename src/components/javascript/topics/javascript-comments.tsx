'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  MessageSquare,
  Sparkles,
  FileCode,
  PencilLine,
  Lightbulb,
  CheckCircle2,
  XCircle,
  BookOpen,
  ClipboardList,
  Play,
  ListChecks,
} from 'lucide-react';

interface JavaScriptCommentsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const commentsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Comments Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 48px 32px;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
      max-width: 600px;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
      font-size: 32px;
    }
    p {
      color: #64748b;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Monaco', monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💬 Comments</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./comments.js"></script>
</body>
</html>`;

const commentsJs = `// Single-line comment: quick note for the next line
const price = 10; // inline comment explaining the value

/*
 Multi-line comment: add context
 Useful for describing steps in a block of code.
*/
function applyDiscount(total) {
  return total * 0.9;
}

/**
 * getOrderMessage builds a friendly message.
 * @param {string} customer - Name of the customer
 * @param {number} total - Order total before discounts
 * @returns {string} message for the user
 */
function getOrderMessage(customer, total) {
  const discounted = applyDiscount(total);
  return \`Thanks \${customer}! You saved 10% and owe $\${discounted}.\`;
}

const output = [
  getOrderMessage('Ada', price),
  'Inline comment kept price readable.',
  'Multi-line comment documented the discount rule.',
  'JSDoc explains parameters and return values.'
];

document.getElementById('output').innerHTML = output
  .map(line => '<div class="card">' + line + '</div>')
  .join('');`;

export default function JavaScriptComments({ onOpenWebPlayground }: JavaScriptCommentsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={MessageSquare}
        category="JavaScript Fundamentals"
        title="Comments"
        description="Use single-line, multi-line, and JSDoc comments to clarify intent, document APIs, and guide future developers."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Comments Matter
          </CardTitle>
          <CardDescription className="text-base">
            Comments are for humans, not the JavaScript engine. Use them to explain intent, document APIs, and speed up onboarding.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Clarify Intent</h3>
            </div>
            <p className="text-sm text-muted-foreground">Describe the why behind tricky logic or domain rules.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Context beats guesses
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Document APIs</h3>
            </div>
            <p className="text-sm text-muted-foreground">JSDoc helps editors provide autocomplete and type hints.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Better DX
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <PencilLine className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Coordinate Teams</h3>
            </div>
            <p className="text-sm text-muted-foreground">Call out TODOs, temporary hacks, or feature flags to teammates.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
              Collaboration
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Comment Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <BookOpen className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Three Comment Styles
          </CardTitle>
          <CardDescription className="text-base">
            Single-line, multi-line, and JSDoc each solve a different need. Pick the right tool for the context.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h4 className="font-semibold">Single-line //</h4>
            </div>
            <p className="text-sm text-muted-foreground">Best for short notes or inline hints beside a line of code.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
              <div><span className="text-slate-500">// Explain the next line</span></div>
              <div>const maxUsers = 50;</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h4 className="font-semibold">Multi-line /* */</h4>
            </div>
            <p className="text-sm text-muted-foreground">Use for longer explanations, pseudo-code, or temporarily disabling blocks.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
              <div className="text-slate-500">/*</div>
              <div className="text-slate-500"> Describe algorithm steps</div>
              <div className="text-slate-500">*/</div>
              <div>const result = compute();</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <PencilLine className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h4 className="font-semibold">JSDoc /** */</h4>
            </div>
            <p className="text-sm text-muted-foreground">Document parameters, returns, and edge cases. Editors can surface hints.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border space-y-1">
              <div className="text-slate-500">/**</div>
              <div className="text-slate-500"> * @param {'{number}'} qty</div>
              <div className="text-slate-500"> * @returns {'{number}'}</div>
              <div className="text-slate-500"> */</div>
              <div>function total(qty) {'{'} ... {'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* JSDoc essentials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            JSDoc Essentials
          </CardTitle>
          <CardDescription className="text-base">
            Add structure so teams and IDEs understand your functions and objects.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Core tags
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>@param {'{Type}'} name - what this argument represents</li>
                <li>@returns {'{Type}'} - what the function gives back</li>
                <li>@throws - document possible errors</li>
              </ul>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Works with TS/JS
              </h4>
              <p className="text-sm text-muted-foreground">
                Even in plain JS files, JSDoc lets editors infer types for auto-complete and inline hints.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Keep it concise
              </h4>
              <p className="text-sm text-muted-foreground">
                Focus on intent, edge cases, and units. Avoid repeating the obvious.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30">
              <span className="uppercase tracking-wide text-emerald-700 dark:text-emerald-300">JavaScript</span>
              <span className="text-emerald-600/70 dark:text-emerald-400/70">JSDoc with async example</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{`/**
 * Fetch user profile from the API.
 * @param {string} id - user identifier
 * @returns {Promise<{ name: string; plan: 'free' | 'pro'; }>}
 */
async function fetchProfile(id) {
  const res = await fetch('/api/users/' + id);
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Do/Don't */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Commenting Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Explain why code exists, not what each line does.</li>
              <li>✅ Keep TODO/FIXME with owners or ticket links.</li>
              <li>✅ Remove obsolete comments during refactors.</li>
              <li>✅ Use JSDoc for reusable functions and shared APIs.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Stating the obvious (e.g., <code className="font-mono">i++ // increment i</code>).</li>
              <li>❌ Hiding secrets or API keys in comments.</li>
              <li>❌ Leaving large blocks of dead code indefinitely.</li>
              <li>❌ Copy/pasting outdated docs that drift from code.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ comment styles and documentation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(commentsHtml, '', commentsJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights comment usage (single-line, multi-line, and JSDoc) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
