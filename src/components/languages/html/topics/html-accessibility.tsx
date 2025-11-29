'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Building, Search, UserCheck, Eye, Pointer, Puzzle, Speaker, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface HtmlAccessibilityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundCode = {
  html: `<h2>Forms: Before vs. After</h2>
<!-- BAD: Not Accessible -->
<h3>Inaccessible Form:</h3>
<div>
  Your Name:
  <input type="text">
  <button>Submit</button>
</div>
<hr>
<!-- GOOD: Accessible -->
<h3>Accessible Form:</h3>
<form>
  <label for="name-input">Your Name:</label>
  <input type="text" id="name-input" name="username">
  <button type="submit">Submit</button>
</form>
<hr>
<h2>Images: Before vs. After</h2>
<!-- BAD: No alt text -->
<h3>Inaccessible Image:</h3>
<img src="https://picsum.photos/seed/a11y/200/150" alt="" data-ai-hint="nature mountain">
<!-- GOOD: With descriptive alt text -->
<h3>Accessible Image:</h3>
<img src="https://picsum.photos/seed/a11y/200/150" alt="A majestic snow-capped mountain against a clear blue sky" data-ai-hint="nature mountain">`,
  css: `body { font-family: sans-serif; line-height: 1.6; }
h3 { margin-top: 1rem; }
hr { margin: 2rem 0; border: none; border-top: 1px solid #eee; }
input { margin-right: 5px; padding: 5px; }
button { padding: 5px 10px; }
img { border: 2px solid #ccc; border-radius: 4px; }`,
  js: ''
};

export default function HtmlAccessibility({ onOpenWebPlayground }: HtmlAccessibilityProps) {
  const principles = [
    { icon: Eye, title: 'Perceivable', description: 'Information and UI components must be presented in ways users can perceive.' },
    { icon: Pointer, title: 'Operable', description: 'Users must be able to operate interactive components via keyboard or other means.' },
    { icon: Puzzle, title: 'Understandable', description: 'Content and operation cannot be beyond the user\'s understanding.' },
    { icon: Speaker, title: 'Robust', description: 'Content must work with current and future user agents & assistive tech.' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={File}
        category="HTML Basics"
        title="HTML Accessibility (a11y)"
        description="Building inclusive experiences that work for everyone"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle>The "Digital Ramps" Analogy</CardTitle>
          <CardDescription>Like buildings need ramps and elevators, websites need semantic markup and proper attributes for assistive technologies.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-muted p-4 rounded-lg border text-center">
            <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-2"><Building className="w-5 h-5 text-primary" />Inclusion</h3>
            <p className="text-sm text-muted-foreground">Ensures equal access to information and functionality.</p>
          </div>
          <div className="bg-muted p-4 rounded-lg border text-center">
            <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-2"><Search className="w-5 h-5 text-primary" />Better SEO</h3>
            <p className="text-sm text-muted-foreground">Semantic structure improves how search engines parse pages.</p>
          </div>
          <div className="bg-muted p-4 rounded-lg border text-center">
            <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-2"><UserCheck className="w-5 h-5 text-primary" />Wider Audience</h3>
            <p className="text-sm text-muted-foreground">Supports users with permanent, temporary, or situational disabilities.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The 4 POUR Principles</CardTitle>
          <CardDescription>Core pillars from WCAG that guide accessible design & development.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map(p => (
            <div key={p.title} className="bg-muted p-4 rounded-lg border">
              <h3 className="font-bold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary" />{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Practical HTML Accessibility Checklist</CardTitle>
          <CardDescription>High‑impact actions you can take immediately.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Use semantic HTML:</strong> Prefer &lt;nav&gt;, &lt;button&gt;, &lt;main&gt; over generic &lt;div&gt;s.</li>
            <li><strong>Provide alt text:</strong> Every meaningful &lt;img&gt; needs descriptive <code>alt</code>. Decorative images: <code>alt=""</code>.</li>
            <li><strong>Label form controls:</strong> Associate inputs with &lt;label for / id&gt; pairs.</li>
            <li><strong>Heading hierarchy:</strong> Don\'t skip levels; structure conveys meaning.</li>
            <li><strong>Keyboard access:</strong> All interactive elements must be reachable and operable via keyboard.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Comparison</CardTitle>
          <CardDescription>Open and inspect accessible vs. inaccessible patterns.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => onOpenWebPlayground?.(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
            <Play className="mr-2 h-4 w-4" /> Open Playground Example
          </Button>
        </CardContent>
      </Card>

      <Card className="border-primary bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Intro to ARIA</CardTitle>
          <CardDescription>ARIA augments semantics for custom widgets. Use natively semantic elements first.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p>ARIA attributes communicate roles, states, and properties to assistive tech. They do not change behavior or styling.</p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="font-mono text-xs whitespace-pre-wrap">{`<div role="button" tabindex="0">Click Me</div>`}</pre>
          </div>
          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
            <li><code>role="button"</code> exposes expected semantics.</li>
            <li><code>tabindex="0"</code> makes non-focusable elements keyboard-focusable.</li>
          </ul>
          <p className="text-xs text-muted-foreground"><strong>Rule:</strong> Always choose a real &lt;button&gt; when possible. ARIA enhances, it should not replace native semantics.</p>
        </CardContent>
      </Card>
    </div>
  );
}
