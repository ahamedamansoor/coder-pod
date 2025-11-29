'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Highlighter, Type, Bold, Italic, Underline, Subscript, Superscript, Lightbulb, Play, Quote, Code, Clock, Edit3, Terminal, Tag, Keyboard } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function TextFormatting({ onOpenWebPlaygroundAction, onOpenWebPlayground }: { onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void; onOpenWebPlayground?: (html: string, css: string, js: string) => void }) {
  const openPlayground = (html: string, css: string, js: string) => {
    (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);
  }

    const semanticTags = [
        { icon: Bold, tag: '<strong>', description: 'Strong importance – signals critical, urgent, or serious content; conveys emphasis to assistive tech.' },
        { icon: Italic, tag: '<em>', description: 'Stress emphasis – changes meaning/inflection of the surrounding sentence.' },
        { icon: Highlighter, tag: '<mark>', description: 'Highlights text relevant to a current task or context (e.g. search result highlight).' },
        { icon: Quote, tag: '<blockquote>', description: 'Denotes extended quotation block; can include cite attribute for source.' },
        { icon: Quote, tag: '<q>', description: 'Inline short quotation; browsers add quotation marks automatically.' },
        { icon: Tag, tag: '<abbr>', description: 'Abbreviation or acronym; use title attribute to provide the full expansion.' },
        { icon: Tag, tag: '<cite>', description: 'Title of a creative work (book, paper, film, etc.).' },
        { icon: Tag, tag: '<dfn>', description: 'Term being defined; first occurrence of a definition.' },
        { icon: Clock, tag: '<time>', description: 'Machine‑readable date/time; use datetime attribute (ISO 8601).' },
        { icon: Edit3, tag: '<del>', description: 'Deleted / removed text (can have cite & datetime attributes).' },
        { icon: Edit3, tag: '<ins>', description: 'Inserted / added text (can have cite & datetime attributes).' },
        { icon: Code, tag: '<code>', description: 'Fragment of code or command.' },
        { icon: Terminal, tag: '<samp>', description: 'Sample output from a program or system.' },
        { icon: Keyboard, tag: '<kbd>', description: 'User keyboard / input entry (shortcut keys).' },
        { icon: Italic, tag: '<var>', description: 'Variable or placeholder name (conveys a semantic role in math/code).' },
    ].filter(t => t); // Ensures array integrity if any tag missing

    const presentationalTags = [
        { icon: Bold, tag: '<b>', description: 'Stylistic bold without semantic importance (prefer <strong> if importance matters).' },
        { icon: Italic, tag: '<i>', description: 'Stylistic italics for technical terms, taxonomic names, etc. (prefer <em> for emphasis).' },
        { icon: Underline, tag: '<u>', description: 'Non-text annotation rendered with underline (avoid confusion with links).' },
        { icon: Lightbulb, tag: '<s>', description: 'Strikethrough for text that is no longer relevant (not a deletion edit; use <del> for editorial removal).' },
        { icon: Lightbulb, tag: '<small>', description: 'Side comments / disclaimers / fine print.' },
        { icon: Subscript, tag: '<sub>', description: 'Subscript (chemical formulas, mathematical indices).' },
        { icon: Superscript, tag: '<sup>', description: 'Superscript (exponents, footnote markers).' },
    ];

    const attributeNotes = [
      { tag: '<abbr>', attrs: 'title', purpose: 'Full expansion for accessibility & tooltips.' },
      { tag: '<blockquote>', attrs: 'cite', purpose: 'Source URL or reference for quotation.' },
      { tag: '<q>', attrs: 'cite', purpose: 'Source reference (rarely used, but valid).' },
      { tag: '<time>', attrs: 'datetime', purpose: 'Machine readable time aiding SEO & structured data.' },
      { tag: '<del>/<ins>', attrs: 'cite, datetime', purpose: 'Explain origin and timestamp of changes.' },
    ];

    // Interactive playground code blocks
    const basicsPlayground = {
      html: `<h1>Semantic vs Presentational</h1>
<p>Compare: <strong>Critical Warning</strong> vs <b>Bold Styling</b></p>
<p>Emphasis: Please <em>do not unplug</em> vs stylistic italic: <i>genus species</i></p>
<p>Highlight search match: <mark>User</mark> profile settings</p>
<p>Inline quote: <q cite="https://example.com/quote">Simplicity is power</q></p>
<blockquote cite="https://example.com/post">
  <p>“The web’s strength lies in its universality.”</p>
</blockquote>`,
      css: `body { font-family: system-ui; line-height:1.6; padding:1.5rem; }
blockquote { margin:1rem 0; padding:1rem 1.25rem; background:#f1f5f9; border-left:4px solid #3b82f6; border-radius:6px; }
mark { background:#fde68a; padding:0 0.25rem; border-radius:2px; }
q { quotes: '“' '”' '‘' '’'; }
q::before { content: open-quote; } q::after { content: close-quote; }`,
      js: ''
    };

    const codePlayground = {
      html: `<h2>Code & Technical Text</h2>
<p>Command: <code>npm install</code></p>
<p>Shortcut: Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<p>Sample output: <samp>Build succeeded in 2.34s</samp></p>
<p>Variable: Let <var>x</var> be the number of items.</p>`,
      css: `code, kbd, samp, var { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; background:#f8fafc; padding:2px 4px; border-radius:4px; }
kbd { background:#1e293b; color:#fff; box-shadow: inset 0 -2px 0 rgba(0,0,0,.35); }
samp { background:#e0f2fe; }
var { font-style: italic; background:#f1f5f9; }`,
      js: ''
    };

    const editsPlayground = {
      html: `<h2>Edits & Annotation</h2>
<p>Original price: <del datetime="2025-11-22">$129.99</del> <ins datetime="2025-11-22" cite="/pricing-updates">$99.99</ins></p>
<p>Change log: <ins datetime="2025-11-22T09:00:00Z">Feature X enabled</ins></p>
<p>Strikethrough style (not semantic removal): <s>Legacy Feature</s></p>
<p>Highlighted context: <mark>Beta</mark> phase extended.</p>`,
      css: `del { color:#dc2626; text-decoration: line-through; }
ins { color:#16a34a; text-decoration: underline; }
s { color:#6b7280; }
mark { background:#fef08a; }`,
      js: ''
    };

    const timePlayground = {
      html: `<h2>Time & Machine Readable Data</h2>
<p>Published: <time datetime="2025-11-22">Nov 22, 2025</time></p>
<p>Event Starts: <time datetime="2025-12-01T09:30:00Z">Dec 1st 09:30 UTC</time></p>
<p>Relative date (still semantic): <time datetime="2025-11-22">Today</time></p>
<p>Chemistry: H<sub>2</sub>O — Math: E = mc<sup>2</sup></p>`,
      css: `time { font-weight:500; color:#1e40af; }
sub, sup { font-size:0.75em; line-height:0; position:relative; vertical-align: baseline; }
sub { bottom:-0.25em; } sup { top:-0.5em; }`,
      js: ''
    };

    const decisionPlayground = {
      html: `<h2>Decision Guide Examples</h2>
<ul>
  <li>Need emphasis that changes tone → <em>Do NOT ignore</em></li>
  <li>Need importance / urgent meaning → <strong>Critical Alert</strong></li>
  <li>Need stylistic bold only → <b>UI Label</b></li>
  <li>Need highlight for task relevance → <mark>Search Match</mark></li>
  <li>Need code fragment → <code>for (let i=0;i<10;i++) {}</code></li>
  <li>Need user input → Press <kbd>Esc</kbd></li>
  <li>Need date/time SEO → <time datetime="2025-11-22">22 Nov 2025</time></li>
  <li>Need deletion record → <del datetime="2025-10-01">Deprecated</del></li>
</ul>`,
      css: `ul { list-style: disc; padding-left:1.25rem; }
li { margin:0.35rem 0; }`,
      js: ''
    };

    // Consolidated full showcase
    const fullShowcasePlayground = {
      html: `<article>
<h1>Full Text Formatting Showcase</h1>
<p>Emphasis vs style: <em>Read carefully</em> vs <i>tertium quid</i>; importance: <strong>System Failure</strong>; highlight: <mark>Error #42</mark>.</p>
<blockquote cite="https://example.com/design-principles">
  <p>Good design is as little design as possible.</p>
</blockquote>
<p>Inline quote: <q>Clarity breeds confidence</q> — Citation: <cite>Design Systems Handbook</cite></p>
<p>Abbreviation: <abbr title="User Experience">UX</abbr> improves retention.</p>
<p>Definition: <dfn>Progressive Enhancement</dfn> means layering improvements over a solid baseline.</p>
<p>Code: <code>git commit -m "feat: add accessibility"</code> | Output: <samp>Committed 1 file</samp> | Input: <kbd>Ctrl</kbd>+<kbd>K</kbd></p>
<p>Variable notation: Let <var>n</var> = items; formula: H<sub>2</sub>SO<sub>4</sub>; exponent: 10<sup>6</sup></p>
<p>Editorial change: <del datetime="2025-10-10">Old copy</del> <ins datetime="2025-11-01">Updated copy</ins></p>
<p>Time published: <time datetime="2025-11-22">Nov 22, 2025</time></p>
<p>Small print: <small>Terms apply.</small></p>
</article>`,
      css: `article { font-family: system-ui; max-width: 780px; margin:0 auto; line-height:1.7; }
blockquote { margin:1.25rem 0; background:#f8fafc; border-left:4px solid #3b82f6; padding:1rem 1.25rem; border-radius:6px; }
mark { background:#fde68a; }
code, kbd, samp, var { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; background:#f1f5f9; padding:2px 4px; border-radius:4px; }
kbd { background:#1e293b; color:#fff; }
samp { background:#e0f2fe; }
var { font-style:italic; }
del { color:#dc2626; }
ins { color:#16a34a; text-decoration: underline; }
small { color:#64748b; }
q { quotes:'“' '”' '‘' '’'; }
q::before { content: open-quote; } q::after { content: close-quote; }`,
      js: ''
    };

    return (
      <div className="space-y-8 pb-16">
        <PageHeader
          icon={Type}
          category="HTML Basics"
          title="HTML Text Formatting"
          description="Adding meaning and style to your text"
          colorTheme="blue"
        />

        {/* Live Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Type className="w-6 h-6 text-blue-600" /> Text Formatting in Action</CardTitle>
            <CardDescription className="text-base">See how different formatting elements render with dark mode support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Visual Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Semantic Elements */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
                <h4 className="font-bold text-lg mb-4 text-center text-green-700 dark:text-green-400">Semantic (With Meaning)</h4>
                <div className="space-y-2.5">
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-green-300 dark:border-green-700">
                    <code className="text-sm font-mono font-bold text-green-700 dark:text-green-400">&lt;strong&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Strong importance</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-green-300 dark:border-green-700">
                    <code className="text-sm font-mono font-bold text-green-700 dark:text-green-400">&lt;em&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Emphasis / stress</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-green-300 dark:border-green-700">
                    <code className="text-sm font-mono font-bold text-green-700 dark:text-green-400">&lt;mark&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Highlighted text</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-green-300 dark:border-green-700">
                    <code className="text-sm font-mono font-bold text-green-700 dark:text-green-400">&lt;code&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Computer code</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-green-300 dark:border-green-700">
                    <code className="text-sm font-mono font-bold text-green-700 dark:text-green-400">&lt;kbd&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Keyboard input</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-green-300 dark:border-green-700">
                    <code className="text-sm font-mono font-bold text-green-700 dark:text-green-400">&lt;del&gt; / &lt;ins&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Deleted / Inserted</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <p className="text-xs font-semibold text-green-800 dark:text-green-300">✓ Better for accessibility</p>
                  <p className="text-xs font-semibold text-green-800 dark:text-green-300">✓ Improved SEO</p>
                  <p className="text-xs font-semibold text-green-800 dark:text-green-300">✓ Machine-readable</p>
                </div>
              </div>

              {/* Presentational Elements */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-lg mb-4 text-center text-orange-700 dark:text-orange-400">Presentational (Style Only)</h4>
                <div className="space-y-2.5">
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                    <code className="text-sm font-mono font-bold text-orange-700 dark:text-orange-400">&lt;b&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Bold (no importance)</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                    <code className="text-sm font-mono font-bold text-orange-700 dark:text-orange-400">&lt;i&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Italic (no emphasis)</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                    <code className="text-sm font-mono font-bold text-orange-700 dark:text-orange-400">&lt;u&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Underlined</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                    <code className="text-sm font-mono font-bold text-orange-700 dark:text-orange-400">&lt;s&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Strikethrough</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                    <code className="text-sm font-mono font-bold text-orange-700 dark:text-orange-400">&lt;small&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Smaller text</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                    <code className="text-sm font-mono font-bold text-orange-700 dark:text-orange-400">&lt;sub&gt; / &lt;sup&gt;</code>
                    <p className="text-xs text-muted-foreground mt-1">Subscript / Superscript</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">⚠ Visual styling only</p>
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">⚠ No semantic meaning</p>
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">⚠ Prefer CSS when possible</p>
                </div>
              </div>
            </div>

            {/* Key Differences */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-lg mb-4 text-center">Key Differences</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold text-sm mb-1">Semantic Elements</h5>
                  <p className="text-xs text-muted-foreground">Convey meaning to browsers, screen readers & search engines</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h5 className="font-semibold text-sm mb-1">Presentational Elements</h5>
                  <p className="text-xs text-muted-foreground">Only change visual appearance without adding meaning</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <h5 className="font-semibold text-sm mb-1">Best Practice</h5>
                  <p className="text-xs text-muted-foreground">Choose semantic first, presentational only when necessary</p>
                </div>
              </div>
            </div>

            <FrontendCodePreview
              title="Text Formatting Examples"
              description="Common text formatting elements with semantic meaning"
              html={`<h2>Semantic Text Formatting</h2>

<p><strong>Important:</strong> This is critically important information!</p>

<p><em>Emphasis:</em> This changes the tone and inflection.</p>

<p>Search result: The <mark>highlighted</mark> term matches your query.</p>

<p>Code snippet: Use <code>npm install</code> to get started.</p>

<p>Keyboard input: Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<blockquote>
  <p>"Design is not just what it looks like. Design is how it works."</p>
  <cite>— Steve Jobs</cite>
</blockquote>

<p>Chemical formula: H<sub>2</sub>O</p>
<p>Math expression: E = mc<sup>2</sup></p>

<p>Price: <del>$99.99</del> <ins>$79.99</ins></p>

<p>Published: <time datetime="2025-11-22">November 22, 2025</time></p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 1.5rem;
}

h2 {
  color: #1e40af;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

p {
  margin-bottom: 1rem;
  transition: color 0.3s;
}

strong {
  color: #dc2626;
  font-weight: 700;
  transition: color 0.3s;
}

html.dark strong {
  color: #f87171;
}

em {
  color: #7c3aed;
  font-style: italic;
  transition: color 0.3s;
}

html.dark em {
  color: #c084fc;
}

mark {
  background: #fef08a;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  transition: background-color 0.3s;
}

html.dark mark {
  background: #854d0e;
  color: #fef08a;
}

code {
  background: #f1f5f9;
  color: #be123c;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  transition: background-color 0.3s, color 0.3s;
}

html.dark code {
  background: #1e293b;
  color: #fb7185;
}

kbd {
  background: #1e293b;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 0.875rem;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,0.35);
  transition: background-color 0.3s;
}

html.dark kbd {
  background: #475569;
}

blockquote {
  background: #f1f5f9;
  border-left: 4px solid #3b82f6;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  border-radius: 6px;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark blockquote {
  background: #1e293b;
  border-left-color: #60a5fa;
}

cite {
  font-style: italic;
  color: #059669;
  display: block;
  margin-top: 0.5rem;
  transition: color 0.3s;
}

html.dark cite {
  color: #34d399;
}

sub, sup {
  font-size: 0.75em;
}

del {
  color: #dc2626;
  transition: color 0.3s;
}

html.dark del {
  color: #f87171;
}

ins {
  color: #16a34a;
  text-decoration: underline;
  transition: color 0.3s;
}

html.dark ins {
  color: #4ade80;
}

time {
  font-weight: 500;
  color: #1e40af;
  transition: color 0.3s;
}

html.dark time {
  color: #60a5fa;
}`}
              colorTheme="blue"
              icon={Type}
              previewHeight="600px"
            />
          </CardContent>
        </Card>

        {/* Overview & Decision Guide */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Lightbulb className="w-6 h-6 text-primary" /> Overview & Decision Guide</CardTitle>
            <CardDescription className="text-base">Choose the right inline element based on meaning first, styling second.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800 space-y-3">
                <h4 className="font-semibold">Semantic vs Presentational</h4>
                <p className="text-sm text-muted-foreground">Semantic elements (<strong>&lt;strong&gt;</strong>, <em>&lt;em&gt;</em>, <code>&lt;code&gt;</code>) communicate intent & structure to browsers, assistive tech & search engines. Presentational (<b>&lt;b&gt;</b>, <i>&lt;i&gt;</i>) only change look.</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Accessibility & SEO benefits</li>
                  <li>✓ Improves maintainability</li>
                  <li>✗ Styling-only tags lose meaning</li>
                </ul>
              </div>
              <div className="bg-muted p-5 rounded-lg border space-y-3">
                <h4 className="font-semibold">Quick Decision Flow</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Need importance?</strong> → &lt;strong&gt;</li>
                  <li><strong>Need emphasis / tone change?</strong> → &lt;em&gt;</li>
                  <li><strong>Need highlight for task?</strong> → &lt;mark&gt;</li>
                  <li><strong>Need code fragment?</strong> → &lt;code&gt;</li>
                  <li><strong>Need user input?</strong> → &lt;kbd&gt;</li>
                  <li><strong>Need removed/added record?</strong> → &lt;del&gt;/&lt;ins&gt;</li>
                  <li><strong>Need date/time machine-readable?</strong> → &lt;time datetime="..."&gt;</li>
                  <li><strong>Just visual bold?</strong> → &lt;b&gt; (or better: CSS)</li>
                </ul>
              </div>
            </div>
            <InteractivePlayground
              title="Decision Guide Playground"
              description="Interactive examples showing when to use each text formatting element"
              features={[
                'Semantic vs Presentational',
                'Emphasis & Importance',
                'Code & Input',
                'Time & Dates'
              ]}
              buttonText="Decision Examples"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: decisionPlayground.html,
                css: decisionPlayground.css,
                js: decisionPlayground.js
              }}
              colorTheme="blue"
            />
          </CardContent>
        </Card>

        {/* Semantic Tags */}
        <Card>
          <CardHeader>
            <CardTitle>Semantic Inline Elements</CardTitle>
            <CardDescription>Elements that add meaning & are announced differently by assistive technologies.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {semanticTags.map(tag => (
              <div key={tag.tag} className="flex items-start gap-3 bg-muted p-3 rounded-lg border">
                <div className="bg-primary/10 text-primary p-2 rounded-md"><tag.icon className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <code className="font-mono text-sm font-bold">{tag.tag}</code>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tag.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Presentational Tags */}
        <Card>
          <CardHeader>
            <CardTitle>Presentational / Stylistic Elements</CardTitle>
            <CardDescription>Use for legacy or minimal styling; prefer CSS + semantic equivalents.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {presentationalTags.map(tag => (
              <div key={tag.tag} className="flex items-start gap-3 bg-muted p-3 rounded-lg border">
                <div className="bg-muted-foreground/10 text-muted-foreground p-2 rounded-md"><tag.icon className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <code className="font-mono text-sm font-bold">{tag.tag}</code>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tag.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Attributes Focus */}
        <Card>
          <CardHeader>
            <CardTitle>Key Formatting Attributes</CardTitle>
            <CardDescription>Attributes that enhance semantics & machine readability.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attributeNotes.map(a => (
              <div key={a.tag} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 space-y-1">
                <code className="font-mono text-sm font-bold">{a.tag}</code>
                <p className="text-sm text-muted-foreground">Attributes: <span className="font-mono">{a.attrs}</span></p>
                <p className="text-sm">{a.purpose}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Code & Technical */}
        <Card>
          <CardHeader>
            <CardTitle>Technical & Programmatic Text</CardTitle>
            <CardDescription>Distinguish user input, code fragments, sample output & variable names.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg border space-y-2 text-sm">
                <p><code>&lt;code&gt;</code> – inline code snippet</p>
                <p><code>&lt;kbd&gt;</code> – keyboard / input sequence</p>
                <p><code>&lt;samp&gt;</code> – sample output</p>
                <p><code>&lt;var&gt;</code> – placeholder variable</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <p>Accessibility hints:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Use <code>&lt;pre&gt;</code> + <code>&lt;code&gt;</code> for blocks</li>
                  <li>Avoid misusing <code>&lt;kbd&gt;</code> for menu labels</li>
                  <li>Provide context for <code>&lt;var&gt;</code> in math</li>
                  <li>Don’t nest interactive elements inside <code>&lt;code&gt;</code></li>
                </ul>
              </div>
            </div>
            <InteractivePlayground
              title="Code & Technical Text Playground"
              description="Learn code, keyboard input, sample output, and variable notation elements"
              features={[
                'Code Snippets',
                'Keyboard Shortcuts',
                'Program Output',
                'Variables'
              ]}
              buttonText="Code & Input Demo"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: codePlayground.html,
                css: codePlayground.css,
                js: codePlayground.js
              }}
              colorTheme="emerald"
            />
          </CardContent>
        </Card>

        {/* Edits & Annotation */}
        <Card>
          <CardHeader>
            <CardTitle>Editorial Changes & Highlights</CardTitle>
            <CardDescription>Communicate revision history & contextual emphasis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-3 rounded">
                <p className="font-semibold">Deletion</p>
                <code className="block bg-muted mt-1 p-1 rounded text-sm">&lt;del datetime="2025-11-22"&gt;Old&lt;/del&gt;</code>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded">
                <p className="font-semibold">Insertion</p>
                <code className="block bg-muted mt-1 p-1 rounded text-sm">&lt;ins datetime="2025-11-22"&gt;New&lt;/ins&gt;</code>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-3 rounded">
                <p className="font-semibold">Highlight</p>
                <code className="block bg-muted mt-1 p-1 rounded text-sm">&lt;mark&gt;Match&lt;/mark&gt;</code>
              </div>
            </div>
            <InteractivePlayground
              title="Edits & Annotations Playground"
              description="Explore del, ins, mark, and strikethrough elements for tracking changes"
              features={[
                'Deletions (del)',
                'Insertions (ins)',
                'Highlights (mark)',
                'Timestamps'
              ]}
              buttonText="Edits Demo"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: editsPlayground.html,
                css: editsPlayground.css,
                js: editsPlayground.js
              }}
              colorTheme="amber"
            />
          </CardContent>
        </Card>

        {/* Time & Scientific */}
        <Card>
          <CardHeader>
            <CardTitle>Date, Time & Scientific Notation</CardTitle>
            <CardDescription>Make temporal & scientific data accessible & parseable.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg border text-sm space-y-2">
                <p><code>&lt;time datetime="2025-11-22"&gt;Nov 22, 2025&lt;/time&gt;</code></p>
                <p><code>&lt;time datetime="2025-12-01T09:30:00Z"&gt;Dec 1 09:30 UTC&lt;/time&gt;</code></p>
                <p><code>&lt;sub&gt;,&lt;sup&gt;</code> for formulas</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <p>Benefits:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Structured data (datetime) indexing</li>
                  <li>Accessible scientific notation</li>
                  <li>Consistent rendering across devices</li>
                </ul>
              </div>
            </div>
            <InteractivePlayground
              title="Time & Notation Playground"
              description="Master time elements, subscript, and superscript for dates and formulas"
              features={[
                'Time Element',
                'Machine-Readable Dates',
                'Subscript (H₂O)',
                'Superscript (E=mc²)'
              ]}
              buttonText="Time & Notation Demo"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: timePlayground.html,
                css: timePlayground.css,
                js: timePlayground.js
              }}
              colorTheme="purple"
            />
          </CardContent>
        </Card>

        {/* Accessibility & SEO */}
        <Card>
          <CardHeader>
            <CardTitle>Accessibility & SEO Best Practices</CardTitle>
            <CardDescription>Improve screen reader experience & search relevance.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800 space-y-2">
              <p className="font-semibold">Accessibility Tips</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Prefer <code>&lt;strong&gt;</code>/<code>&lt;em&gt;</code> over <code>&lt;b&gt;</code>/<code>&lt;i&gt;</code></li>
                <li>Always add <code>title</code> to <code>&lt;abbr&gt;</code></li>
                <li>Use <code>datetime</code> on <code>&lt;time&gt;</code></li>
                <li>Provide context around <code>&lt;code&gt;</code> blocks</li>
              </ul>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 space-y-2">
              <p className="font-semibold">SEO Enhancers</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Machine-readable dates help rich results</li>
                <li>Clear inline semantics aid snippet generation</li>
                <li>Citations improve authority & clarity</li>
                <li>Consistent highlight patterns assist user tasks</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Reference Table */}
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Inline Reference</CardTitle>
            <CardDescription>Quick lookup for usage, meaning & attributes.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-2">Tag</th>
                  <th className="text-left p-2">Meaning / Use</th>
                  <th className="text-left p-2">Typical Rendering</th>
                  <th className="text-left p-2">Key Attributes</th>
                  <th className="text-left p-2">Accessibility Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tag: 'strong', meaning:'Strong importance', render:'Bold', attrs:'—', a11y:'Emphasis announced' },
                  { tag: 'em', meaning:'Stress emphasis', render:'Italic', attrs:'—', a11y:'Changes tone' },
                  { tag: 'mark', meaning:'Relevant highlight', render:'Highlighted background', attrs:'—', a11y:'Avoid overuse' },
                  { tag: 'b', meaning:'Stylistic bold', render:'Bold', attrs:'—', a11y:'No semantic weight' },
                  { tag: 'i', meaning:'Stylistic italics', render:'Italic', attrs:'—', a11y:'No tone change' },
                  { tag: 'u', meaning:'Annotation underline', render:'Underline', attrs:'—', a11y:'May confuse with links' },
                  { tag: 's', meaning:'No longer accurate', render:'Strikethrough', attrs:'—', a11y:'Not an edit removal' },
                  { tag: 'small', meaning:'Side note / fine print', render:'Smaller font', attrs:'—', a11y:'Ensure readable contrast' },
                  { tag: 'sub', meaning:'Subscript', render:'Lowered baseline', attrs:'—', a11y:'Screen readers read inline' },
                  { tag: 'sup', meaning:'Superscript', render:'Raised baseline', attrs:'—', a11y:'Use for footnotes correctly' },
                  { tag: 'code', meaning:'Code fragment', render:'Monospace', attrs:'—', a11y:'Pair with description' },
                  { tag: 'kbd', meaning:'User input', render:'Monospace styled key', attrs:'—', a11y:'Clear sequence order' },
                  { tag: 'samp', meaning:'Sample output', render:'Monospace variant', attrs:'—', a11y:'Clarify origin' },
                  { tag: 'var', meaning:'Variable placeholder', render:'Italic monospace', attrs:'—', a11y:'Explain in context' },
                  { tag: 'abbr', meaning:'Abbreviation', render:'Dotted underline (user agent dependent)', attrs:'title', a11y:'Title must supply expansion' },
                  { tag: 'blockquote', meaning:'Long quotation', render:'Indented block', attrs:'cite', a11y:'Source context improves clarity' },
                  { tag: 'q', meaning:'Short quotation', render:'Quotation marks', attrs:'cite', a11y:'Ensure clarity of speaker' },
                  { tag: 'cite', meaning:'Work title', render:'Italic (UA dependent)', attrs:'—', a11y:'Not for person names' },
                  { tag: 'dfn', meaning:'Definition term', render:'Italic (often)', attrs:'—', a11y:'First occurrence only' },
                  { tag: 'del', meaning:'Removed text', render:'Strikethrough', attrs:'cite, datetime', a11y:'Change tracking' },
                  { tag: 'ins', meaning:'Inserted text', render:'Underlined', attrs:'cite, datetime', a11y:'Change tracking' },
                  { tag: 'time', meaning:'Date/time', render:'Inline text', attrs:'datetime', a11y:'Machine readable value' },
                ].map(r => (
                  <tr key={r.tag} className="border-b last:border-0">
                    <td className="p-2 font-mono">&lt;{r.tag}&gt;</td>
                    <td className="p-2">{r.meaning}</td>
                    <td className="p-2 text-muted-foreground">{r.render}</td>
                    <td className="p-2 font-mono">{r.attrs}</td>
                    <td className="p-2 text-muted-foreground">{r.a11y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Try Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Examples</CardTitle>
            <CardDescription>Experiment with grouped formatting patterns.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-3 rounded border space-y-2 text-sm">
                <p className="font-semibold">Semantic vs Presentational</p>
                <code>&lt;strong&gt;Critical&lt;/strong&gt; vs &lt;b&gt;Bold&lt;/b&gt;</code>
                <code>&lt;em&gt;Tone shift&lt;/em&gt; vs &lt;i&gt;Latin term&lt;/i&gt;</code>
              </div>
              <div className="bg-muted p-3 rounded border space-y-2 text-sm">
                <p className="font-semibold">Technical Set</p>
                <code>&lt;code&gt;alert()&lt;/code&gt;</code>
                <code>&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;</code>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => openPlayground(basicsPlayground.html, basicsPlayground.css, basicsPlayground.js)}>Basics</Button>
              <Button size="sm" onClick={() => openPlayground(codePlayground.html, codePlayground.css, codePlayground.js)}>Code & Input</Button>
              <Button size="sm" onClick={() => openPlayground(editsPlayground.html, editsPlayground.css, editsPlayground.js)}>Edits</Button>
              <Button size="sm" onClick={() => openPlayground(timePlayground.html, timePlayground.css, timePlayground.js)}>Time & Notation</Button>
              <Button size="sm" variant="secondary" onClick={() => openPlayground(fullShowcasePlayground.html, fullShowcasePlayground.css, fullShowcasePlayground.js)}>Full Showcase</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    );
}
