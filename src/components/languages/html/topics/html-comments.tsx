'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Lightbulb, Code, Ban } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, ShieldAlert, Wrench, AlertTriangle, Layers, ListChecks } from 'lucide-react';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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

        {/* Comments in Action */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Code className="w-6 h-6 text-blue-600" /> HTML Comments in Action</CardTitle>
            <CardDescription className="text-base">See how comments are invisible in the rendered output with dark mode support</CardDescription>
          </CardHeader>
          <CardContent>
            <FrontendCodePreview
              title="Comment Examples"
              description="Practical examples of single-line, multi-line, and commenting out code"
              html={`<div class="container">
  <h1>HTML Comments Demo</h1>
  
  <!-- This is a single-line comment -->
  <p class="intro">This paragraph appears in the output.</p>
  
  <!--
    This is a multi-line comment.
    It spans multiple lines.
    Perfect for longer explanations!
  -->
  
  <section class="features">
    <h2>Active Features</h2>
    <ul>
      <li>✅ Feature One - Active</li>
      <!-- <li>🚧 Feature Two - Under Development</li> -->
      <li>✅ Feature Three - Active</li>
    </ul>
  </section>
  
  <!-- 
    TODO: Add a newsletter signup form here
    PRIORITY: High
    ASSIGNED: Frontend Team
  -->
  
  <div class="info-box">
    <h3>Did you know?</h3>
    <p>Comments are completely invisible in the browser but visible in source code!</p>
  </div>
  
  <!-- This entire section is commented out
  <section class="disabled">
    <h2>Temporarily Hidden Section</h2>
    <p>This won't appear until we uncomment it.</p>
  </section>
  -->
  
  <!-- NOTE: The section above demonstrates commenting out entire blocks -->
  
  <footer>
    <!-- Copyright 2025 -->
    <p>Made with ❤️ and HTML</p>
  </footer>
</div>`}
              css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  transition: background-color 0.3s;
}

html.dark .container {
  background: #1e293b;
}

h1 {
  color: #1e40af;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark h1 {
  color: #60a5fa;
}

.intro {
  background: #dbeafe;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #3b82f6;
  margin: 1rem 0;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark .intro {
  background: #1e3a8a;
  border-left-color: #60a5fa;
}

.features {
  background: #f0fdf4;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  transition: background-color 0.3s;
}

html.dark .features {
  background: #14532d;
}

.features h2 {
  color: #16a34a;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark .features h2 {
  color: #4ade80;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem;
  background: white;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

html.dark .features li {
  background: #052e16;
  color: #dcfce7;
}

.info-box {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #f59e0b;
  margin: 1.5rem 0;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark .info-box {
  background: #78350f;
  border-color: #fbbf24;
}

.info-box h3 {
  color: #b45309;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .info-box h3 {
  color: #fcd34d;
}

.info-box p {
  color: #78350f;
  transition: color 0.3s;
}

html.dark .info-box p {
  color: #fef3c7;
}

footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #e5e7eb;
  color: #6b7280;
  transition: border-color 0.3s, color 0.3s;
}

html.dark footer {
  border-top-color: #374151;
  color: #9ca3af;
}`}
              colorTheme="blue"
              icon={Code}
              previewHeight="700px"
            />
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
              <InteractivePlayground
                title="Comments Playground"
                description="Experiment with commenting out code and see how it affects the output"
                features={[
                  'Single-line Comments',
                  'Multi-line Comments',
                  'Comment Out Code',
                  'TODO Notes'
                ]}
                buttonText="Open Comments Playground"
                onLaunchPlayground={openPlayground}
                playgroundData={{
                  html: playgroundCode.html,
                  css: playgroundCode.css,
                  js: playgroundCode.js
                }}
                colorTheme="emerald"
              />
            </CardContent>
        </Card>
        {/* Advanced Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Demo</CardTitle>
            <CardDescription>Explore environment markers & legacy conditional form—purely educational.</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractivePlayground
              title="Advanced Comments Playground"
              description="Explore build markers, legacy IE conditionals, and comment strategies"
              features={[
                'Build Directives',
                'Legacy IE Conditionals',
                'Environment Markers',
                'DOM vs Comments'
              ]}
              buttonText="Open Advanced Example"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: advancedPlayground.html,
                css: advancedPlayground.css,
                js: advancedPlayground.js
              }}
              colorTheme="purple"
            />
          </CardContent>
        </Card>
      </div>
    );
}
