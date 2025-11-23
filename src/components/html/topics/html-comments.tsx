'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Lightbulb, Code, Ban } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, ShieldAlert, Wrench, AlertTriangle, Layers, ListChecks } from 'lucide-react';

export default function HtmlComments({ onOpenWebPlaygroundAction, onOpenWebPlayground }: { onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void; onOpenWebPlayground?: (html: string, css: string, js: string) => void; }) {
  const openPlayground = (html: string, css: string, js: string) => {
    (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);
  };

    const singleLineExample = `<!-- This is a single-line comment -->
<p>This paragraph is visible.</p>`;

    const multiLineExample = `<!--
  This is a multi-line comment.
  It can span across several lines.
  Useful for longer explanations.
-->
<p>Another visible paragraph.</p>`;
    
    const commentOutExample = `<!-- <p>This paragraph is commented out and will not be displayed.</p> -->
<p>But this one will!</p>`;

    const playgroundCode = {
        html: `<h1>HTML Comments Demo</h1>

<!-- This is a comment explaining the next section -->
<h2>My Favorite Foods</h2>
<ul>
  <li>Pizza</li>
  <!-- <li>Sushi</li>  <-- Temporarily removed this item -->
  <li>Tacos</li>
</ul>

<!--
  TODO: Add a new section here about hobbies.
  This is a reminder for later.
-->
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}`,
        js: ''
    };

    const advancedPlayground = {
        html: `<!DOCTYPE html>\n<html lang='en'>\n<head>\n  <title>Comment Strategies</title>\n  <!-- Build: Inject analytics script here -->\n  <!-- PROD_ONLY: Remove debug panels -->\n</head>\n<body>\n  <h2>Feature Flags</h2>\n  <!-- EXPERIMENT_A: Button variant test -->\n  <button>Buy Now</button>\n\n  <!--[if IE]>\n    <p>You are using legacy Internet Explorer!</p>\n  <![endif]-->\n\n  <!-- SECURITY: Never place API keys or secrets inside comments. -->\n\n  <div id='output'></div>\n  <script>\n    // This script shows how comments do NOT exist in DOM selection\n    const all = document.body.querySelectorAll('*');\n    document.getElementById('output').textContent = 'Element count (comments excluded): '+all.length;\n  </script>\n</body>\n</html>`,
        css: `body{font-family:system-ui;padding:1.25rem;line-height:1.5}`,
        js: ''
    };

    return (
      <div className="space-y-10">
        <PageHeader
          icon={File}
          category="HTML Basics"
          title="HTML Comments"
          description="Write helpful notes & temporarily disable markup without affecting rendering"
          colorTheme="blue"
        />
        {/* Purpose & Benefits Diagram */}
        <Card>
          <CardHeader>
            <CardTitle>Comment Purposes Diagram</CardTitle>
            <CardDescription>Organize how and why you add comments.</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="border rounded p-3 bg-muted/50">
              <h4 className="font-semibold flex items-center gap-2 mb-1"><Lightbulb className="w-4 h-4 text-primary"/>Explanation</h4>
              <ul className="list-disc list-inside space-y-1"><li>Clarify intent</li><li>Summarize complex markup</li><li>Link to docs</li></ul>
            </div>
            <div className="border rounded p-3 bg-muted/50">
              <h4 className="font-semibold flex items-center gap-2 mb-1"><Ban className="w-4 h-4 text-primary"/>Temporary Disable</h4>
              <ul className="list-disc list-inside space-y-1"><li>Hide feature drafts</li><li>Keep placeholder blocks</li><li>Stage partial refactors</li></ul>
            </div>
            <div className="border rounded p-3 bg-muted/50">
              <h4 className="font-semibold flex items-center gap-2 mb-1"><Code className="w-4 h-4 text-primary"/>TODO / Notes</h4>
              <ul className="list-disc list-inside space-y-1"><li>Tasks & reminders</li><li>Build pipeline hints</li><li>Environment markers</li></ul>
            </div>
            <div className="border rounded p-3 bg-muted/50">
              <h4 className="font-semibold flex items-center gap-2 mb-1"><ShieldAlert className="w-4 h-4 text-primary"/>Warnings</h4>
              <ul className="list-disc list-inside space-y-1"><li>Avoid inline secrets</li><li>Performance caveats</li><li>Deprecated areas</li></ul>
            </div>
            <div className="border rounded p-3 bg-muted/50">
              <h4 className="font-semibold flex items-center gap-2 mb-1"><Layers className="w-4 h-4 text-primary"/>Structure Labels</h4>
              <ul className="list-disc list-inside space-y-1"><li>Section boundaries</li><li>Component mount points</li><li>Template regions</li></ul>
            </div>
            <div className="border rounded p-3 bg-muted/50">
              <h4 className="font-semibold flex items-center gap-2 mb-1"><Wrench className="w-4 h-4 text-primary"/>Tooling Tags</h4>
              <ul className="list-disc list-inside space-y-1"><li>Build directives</li><li>Conditional bundles</li><li>Localization markers</li></ul>
            </div>
          </CardContent>
        </Card>
        {/* Why Use Comments (existing section retained below) */}
        <Card>
            <CardHeader>
                <CardTitle>Why Use Comments?</CardTitle>
                <CardDescription>Comments are essential for making your code understandable for yourself and other developers.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Lightbulb className="w-5 h-5 text-primary"/>Explain Your Code</h3>
                    <p className="text-sm text-muted-foreground">Clarify the purpose of a section or explain complex logic.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Ban className="w-5 h-5 text-primary"/>Temporarily Disable Code</h3>
                    <p className="text-sm text-muted-foreground">Quickly "comment out" a block of HTML to hide it without deleting it.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Code className="w-5 h-5 text-primary"/>Leave Reminders</h3>
                    <p className="text-sm text-muted-foreground">Add "TODO" notes or reminders for future work directly in the code.</p>
                </div>
            </CardContent>
        </Card>
        {/* Syntax Section (existing) */}
        <Card>
            <CardHeader>
                <CardTitle>Syntax</CardTitle>
                <CardDescription>An HTML comment starts with <code>&lt;!--</code> and ends with <code>--&gt;</code>. Everything in between is ignored by the browser.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{singleLineExample}</pre>
                </div>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{multiLineExample}</pre>
                </div>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{commentOutExample}</pre>
                </div>
            </CardContent>
        </Card>
        {/* Advanced & Legacy */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced & Legacy Patterns</CardTitle>
            <CardDescription>Beyond basics: build-time markers, conditional comments, and strategy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="bg-muted p-3 rounded border">
              <h4 className="font-semibold mb-2">Conditional Comments (Legacy IE)</h4>
              <pre className="whitespace-pre-wrap overflow-x-auto">{`<!--[if IE]>\n<p>Legacy Internet Explorer notice.</p>\n<![endif]-->`}</pre>
              <p className="mt-1 text-muted-foreground">Deprecated: kept for historical context—do not use in modern code.</p>
            </div>
            <div className="bg-muted p-3 rounded border">
              <h4 className="font-semibold mb-2">Build / Environment Markers</h4>
              <pre className="whitespace-pre-wrap overflow-x-auto">{`<!-- PROD_ONLY: remove debug panel -->\n<!-- EXPERIMENT_A: variant test -->`}</pre>
              <p className="mt-1 text-muted-foreground">Used by static site generators or custom transform scripts to strip / inject content.</p>
            </div>
            <div className="bg-muted p-3 rounded border">
              <h4 className="font-semibold mb-2">Template Boundaries</h4>
              <pre className="whitespace-pre-wrap overflow-x-auto">{`<!-- HEADER START -->\n<nav>...</nav>\n<!-- HEADER END -->`}</pre>
              <p className="mt-1 text-muted-foreground">Clarify large template segments—especially helpful in server-rendered monoliths.</p>
            </div>
          </CardContent>
        </Card>
        {/* Anti-Patterns & Pitfalls */}
        <Card className="border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-destructive"/>Pitfalls & Anti‑Patterns</CardTitle>
            <CardDescription>Avoid these common misuses that harm maintainability.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Storing secrets / API keys in comments (security risk).</li>
              <li>Leaving massive commented blocks—prefer version control.</li>
              <li>Overusing TODO without task tracking (becomes stale noise).</li>
              <li>Nesting comment markers incorrectly: <code>&lt;!-- ... &lt;!-- ... --&gt; ... --&gt;</code>.</li>
              <li>Attempting to "comment out" malformed HTML to fix structure—repair markup instead.</li>
            </ul>
          </CardContent>
        </Card>
        {/* Best Practices Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ListChecks className="w-5 h-5 text-primary"/>Best Practices Checklist</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc list-inside space-y-1">
              <li>Keep comments short & purposeful.</li>
              <li>Explain <em>why</em>, not what obvious markup does.</li>
              <li>Remove obsolete comments during refactors.</li>
              <li>Use consistent prefixes: <code>TODO:</code>, <code>NOTE:</code>, <code>FIXME:</code>.</li>
              <li>Prefer external docs for large architectural notes—link them.</li>
            </ul>
          </CardContent>
        </Card>
        {/* Existing Putting It All Together */}
        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Open this example in the Web Playground to see how comments work. Notice that the commented-out list item does not appear in the output.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => openPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>
        {/* Advanced Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Demo</CardTitle>
            <CardDescription>Explore environment markers & legacy conditional form—purely educational.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => openPlayground(advancedPlayground.html, advancedPlayground.css, advancedPlayground.js)}>
              <Play className="mr-2 h-4 w-4"/> Open Advanced Example
            </Button>
          </CardContent>
        </Card>
      </div>
    );
}
