'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Key, Play, AlertCircle, Sigma, DollarSign, Pilcrow } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function HtmlCharacterEntities({ onOpenWebPlaygroundAction, onOpenWebPlayground }: { onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void; onOpenWebPlayground?: (html: string, css: string, js: string) => void; }) {
  const openPlayground = (html: string, css: string, js: string) => (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);

    const reservedChars = [
        { description: 'Less than', result: '<', name: '&lt;', number: '&#60;' },
        { description: 'Greater than', result: '>', name: '&gt;', number: '&#62;' },
        { description: 'Ampersand', result: '&', name: '&amp;', number: '&#38;' },
        { description: 'Double quote', result: '"', name: '&quot;', number: '&#34;' },
        { description: 'Single quote', result: "'", name: '&apos;', number: '&#39;' },
    ];
    
    const punctuationSymbols = [
        { description: 'Non-breaking space', result: ' ', name: '&nbsp;', number: '&#160;' },
        { description: 'Inverted exclamation', result: '¡', name: '&iexcl;', number: '&#161;' },
        { description: 'Inverted question mark', result: '¿', name: '&iquest;', number: '&#191;' },
        { description: 'Section sign', result: '§', name: '&sect;', number: '&#167;' },
        { description: 'Paragraph sign', result: '¶', name: '&para;', number: '&#182;' },
        { description: 'Bullet', result: '•', name: '&bull;', number: '&#8226;' },
        { description: 'En dash', result: '–', name: '&ndash;', number: '&#8211;' },
        { description: 'Em dash', result: '—', name: '&mdash;', number: '&#8212;' },
    ];
    
    const currencySymbols = [
        { description: 'Cent', result: '¢', name: '&cent;', number: '&#162;' },
        { description: 'Pound', result: '£', name: '&pound;', number: '&#163;' },
        { description: 'Yen', result: '¥', name: '&yen;', number: '&#165;' },
        { description: 'Euro', result: '€', name: '&euro;', number: '&#8364;' },
        { description: 'Copyright', result: '©', name: '&copy;', number: '&#169;' },
        { description: 'Registered TM', result: '®', name: '&reg;', number: '&#174;' },
    ];
    
    const mathSymbols = [
        { description: 'Plus-minus', result: '±', name: '&plusmn;', number: '&#177;' },
        { description: 'Multiplication', result: '×', name: '&times;', number: '&#215;' },
        { description: 'Division', result: '÷', name: '&divide;', number: '&#247;' },
        { description: 'Not equal', result: '≠', name: '&ne;', number: '&#8800;' },
        { description: 'Less than or equal', result: '≤', name: '&le;', number: '&#8804;' },
        { description: 'Greater than or equal', result: '≥', name: '&ge;', number: '&#8805;' },
        { description: 'Degree', result: '°', name: '&deg;', number: '&#176;' },
        { description: 'Tilde', result: '~', name: 'N/A', number: '&#126;' },
    ];
    // Extended categories
    const whitespaceEntities = [
      { description: 'Non‑breaking space', result: '\u00A0', name: '&nbsp;', number: '&#160;' },
      { description: 'Thin space', result: '\u2009', name: '&thinsp;', number: '&#8201;' },
      { description: 'Hair space', result: '\u200A', name: 'N/A', number: '&#8202;' },
      { description: 'Em space', result: '\u2003', name: '&emsp;', number: '&#8195;' },
      { description: 'En space', result: '\u2002', name: '&ensp;', number: '&#8194;' },
    ];
    const typographicEntities = [
      { description: 'Left single quote', result: '‘', name: '&lsquo;', number: '&#8216;' },
      { description: 'Right single quote', result: '’', name: '&rsquo;', number: '&#8217;' },
      { description: 'Left double quote', result: '“', name: '&ldquo;', number: '&#8220;' },
      { description: 'Right double quote', result: '”', name: '&rdquo;', number: '&#8221;' },
      { description: 'Ellipsis', result: '…', name: '&hellip;', number: '&#8230;' },
      { description: 'Trademark', result: '™', name: '&trade;', number: '&#8482;' },
    ];
    const arrowEntities = [
      { description: 'Left arrow', result: '←', name: '&larr;', number: '&#8592;' },
      { description: 'Right arrow', result: '→', name: '&rarr;', number: '&#8594;' },
      { description: 'Up arrow', result: '↑', name: '&uarr;', number: '&#8593;' },
      { description: 'Down arrow', result: '↓', name: '&darr;', number: '&#8595;' },
      { description: 'Double right arrow', result: '⇒', name: '&rArr;', number: '&#8658;' },
      { description: 'Double left arrow', result: '⇐', name: '&lArr;', number: '&#8656;' },
    ];
    const latinEntities = [
      { description: 'é (e acute)', result: 'é', name: '&eacute;', number: '&#233;' },
      { description: 'ñ (enye)', result: 'ñ', name: '&ntilde;', number: '&#241;' },
      { description: 'æ (ae ligature)', result: 'æ', name: '&aelig;', number: '&#230;' },
      { description: 'ø (o slash)', result: 'ø', name: '&oslash;', number: '&#248;' },
      { description: 'ß (eszett)', result: 'ß', name: '&szlig;', number: '&#223;' },
    ];

    const playgroundCode = {
        html: `<!-- Character Entities Playground -->\n<h2>Reserved & Escaped</h2>\n<p>Show literal tags: <code>&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</code></p>\n<h2>Math & Currency</h2>\n<p>5 &times; 6 = 30 &nbsp; | &nbsp; Profit &ge; Cost &nbsp; | &nbsp; Price: 12&yen; / 10&euro;</p>\n<h2>Whitespace Control</h2>\n<p>Normal spaces collapse: A B C</p>\n<p>With non-breaking: A&nbsp;B&nbsp;C (no wrap)</p>\n<h2>Typography</h2>\n<p>&ldquo;Smart quotes&rdquo; vs "straight quotes" &mdash; choose based on context.</p>\n<h2>Arrows & Indicators</h2>\n<p>Navigate &larr; Back | Forward &rarr; | Double &rArr;</p>\n<h2>International</h2>\n<p>Crème brûlée, Piñata, façade, coöperate, Straße.</p>`,
        css: `body { font-family: system-ui; line-height:1.6; padding:1rem; }\nh2 { margin-top:1.5rem; font-size:1.15rem; border-bottom:1px solid #e2e8f0; padding-bottom:4px; }\ncode { background:#f1f5f9; padding:2px 6px; border-radius:4px; font-family:ui-monospace, SFMono-Regular, Menlo, monospace; }\np { margin:.5rem 0; }`,
        js: ''
    };
    
    const EntityTable = ({ entities }: { entities: typeof reservedChars }) => (
         <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {entities.map(entity => (
                    <TableRow key={entity.description}>
                        <TableCell className="text-sm">{entity.description}</TableCell>
                        <TableCell><code className="font-mono text-sm bg-muted px-2 py-1 rounded inline-block min-w-[2ch] text-center">{entity.result}</code></TableCell>
                        <TableCell><code className="font-mono text-sm bg-muted px-2 py-1 rounded inline-block">{entity.name}</code></TableCell>
                        <TableCell><code className="font-mono text-sm bg-muted px-2 py-1 rounded inline-block">{entity.number}</code></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    // ===== Entity Explorer State & Mapping (added) =====
    const ENTITY_MAP: Record<string, { name: string; num: string }> = {
      '&copy;': { name: '&copy;', num: '&#169;' },
      '&euro;': { name: '&euro;', num: '&#8364;' },
      '&hellip;': { name: '&hellip;', num: '&#8230;' },
      '&mdash;': { name: '&mdash;', num: '&#8212;' },
      '&rarr;': { name: '&rarr;', num: '&#8594;' },
      '&times;': { name: '&times;', num: '&#215;' },
      '&nbsp;': { name: '&nbsp;', num: '&#160;' },
    };
    const explorerOptions: { value: string; label: string }[] = [
      { value: '&copy;', label: '© Copyright' },
      { value: '&euro;', label: '€ Euro' },
      { value: '&hellip;', label: '… Ellipsis' },
      { value: '&mdash;', label: '— Em Dash' },
      { value: '&rarr;', label: '→ Right Arrow' },
      { value: '&times;', label: '× Multiplication' },
      { value: '&nbsp;', label: 'NBSP (Non‑breaking space)' },
    ];
    const [selectedEntity, setSelectedEntity] = useState<string>(explorerOptions[0].value);
    const selectedInfo = useMemo(() => {
      const info = ENTITY_MAP[selectedEntity];
      if (info) return info;
      if (/^&.+;$/.test(selectedEntity)) return { name: selectedEntity, num: selectedEntity };
      const nums = Array.from(selectedEntity).map(c => '&#' + c.codePointAt(0) + ';').join(' ');
      return { name: '(no named entity)', num: nums };
    }, [selectedEntity]);

    return (
      <div className="space-y-10 pb-16">
        <PageHeader
          icon={Key}
          category="HTML Basics"
          title="HTML Character Entities"
          description="Using coded references to display reserved characters & special symbols"
          colorTheme="blue"
        />
        {/* Anatomy Diagram */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertCircle className="w-5 h-5 text-primary" />Entity Anatomy</CardTitle>
            <CardDescription>Structure of a named & numeric entity reference</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-900/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2">Named Entity</h4>
                <code className="block font-mono text-base bg-muted px-3 py-2 rounded">&amp;copy;</code>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>&amp;</strong> start delimiter</li>
                  <li><strong>copy</strong> entity name</li>
                  <li><strong>;</strong> terminator (required)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-900/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold mb-2">Numeric Entity</h4>
                <code className="block font-mono text-base bg-muted px-3 py-2 rounded">&#169;</code>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>&amp;#</strong> start + numeric marker</li>
                  <li><strong>169</strong> Unicode code point (decimal) / use <strong>0xA9</strong> in hex form</li>
                  <li><strong>;</strong> terminator</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded border border-amber-200 dark:border-amber-700 flex flex-col gap-2">
              <p className="text-sm"><strong>When to use which?</strong> Prefer named entities for readability (e.g. &amp;copy;), use numeric when no named version exists or when generating programmatically.</p>
              <p className="text-sm">Hex form: <code className="bg-muted px-1 rounded">&amp;#xA9;</code> works the same as decimal.</p>
            </div>
          </CardContent>
        </Card>
        {/* Reserved Characters */}
        <Card>
          <CardHeader>
            <CardTitle>Reserved Characters</CardTitle>
            <CardDescription>Must be escaped to avoid breaking markup structure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <EntityTable entities={reservedChars} />
            <p className="text-muted-foreground">Always escape &lt; &gt; &amp; inside text nodes and attribute values where they could be misinterpreted.</p>
          </CardContent>
        </Card>
        {/* Punctuation & Symbols */}
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Pilcrow className="w-5 h-5 text-primary" />Punctuation & Symbols</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={punctuationSymbols} />
          </CardContent>
        </Card>
        {/* Typography */}
        <Card>
          <CardHeader><CardTitle>Typography & Quotes</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={typographicEntities} />
          </CardContent>
        </Card>
        {/* Whitespace */}
        <Card>
          <CardHeader><CardTitle>Whitespace Control</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={whitespaceEntities} />
            <p className="text-muted-foreground">Use sparingly: excessive non-breaking spaces harm accessibility and responsive wrapping.</p>
          </CardContent>
        </Card>
        {/* Currency & Trademark */}
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-primary" />Currency & Marks</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={currencySymbols} />
          </CardContent>
        </Card>
        {/* Math */}
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Sigma className="w-5 h-5 text-primary" />Mathematical Symbols</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={mathSymbols} />
          </CardContent>
        </Card>
        {/* Arrows */}
        <Card>
          <CardHeader><CardTitle>Directional Arrows</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={arrowEntities} />
          </CardContent>
        </Card>
        {/* International Letters */}
        <Card>
          <CardHeader><CardTitle>International Latin Letters</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-4">
            <EntityTable entities={latinEntities} />
            <p className="text-muted-foreground">Prefer direct UTF‑8 characters in modern HTML; entities remain useful in legacy contexts and for clarity in tutorials.</p>
          </CardContent>
        </Card>
        {/* Interactive Explorer */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Entity Explorer</CardTitle>
            <CardDescription>Pick an entity and see its name, number and live rendering.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div id="entity-explorer" className="p-4 rounded border bg-muted flex flex-col gap-3">
              {/* Radix Select with state-driven updates */}
              <div className="space-y-2 max-w-sm">
                <label className="text-sm font-semibold" htmlFor="entitySelect">Choose example:</label>
                <Select value={selectedEntity} onValueChange={setSelectedEntity}>
                  <SelectTrigger id="entitySelect" aria-label="Choose entity">
                    <SelectValue placeholder="Select an entity" />
                  </SelectTrigger>
                  <SelectContent>
                    {explorerOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background/50 p-3 rounded border">
                  <h4 className="font-semibold mb-2">Rendered</h4>
                  <div id="entityRendered" className="text-lg font-mono">{selectedEntity === '&nbsp;' ? '[NBSP]' : <span dangerouslySetInnerHTML={{ __html: selectedEntity }} />}</div>
                </div>
                <div className="bg-background/50 p-3 rounded border">
                  <h4 className="font-semibold mb-2">HTML Name</h4>
                  <code id="entityName" className="font-mono text-sm">{selectedInfo.name}</code>
                </div>
                <div className="bg-background/50 p-3 rounded border">
                  <h4 className="font-semibold mb-2">Numeric</h4>
                  <code id="entityNumber" className="font-mono text-sm" dangerouslySetInnerHTML={{ __html: selectedInfo.num }} />
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Tip: Don’t double-encode. Writing <code>&amp;amp;copy;</code> shows “&amp;copy;” instead of ©. Unknown characters fall back to their numeric code points.</p>
            </div>
          </CardContent>
        </Card>
        {/* Best Practices & Pitfalls */}
        <Card>
          <CardHeader><CardTitle>Best Practices & Pitfalls</CardTitle></CardHeader>
          <CardContent className="text-sm grid md:grid-cols-2 gap-6">
            <div className="space-y-2 bg-green-50 dark:bg-green-950/20 p-4 border border-green-200 dark:border-green-800 rounded">
              <h4 className="font-semibold">Do</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use entities for reserved characters in code examples.</li>
                <li>Prefer UTF‑8 characters directly for common accented letters.</li>
                <li>Use non-breaking spaces only for indivisible units (e.g. “10&nbsp;kg”).</li>
                <li>Pick named entities for readability; fallback to numeric if missing.</li>
              </ul>
            </div>
            <div className="space-y-2 bg-red-50 dark:bg-red-950/20 p-4 border border-red-200 dark:border-red-800 rounded">
              <h4 className="font-semibold">Avoid</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Double encoding (&amp;amp;copy;).</li>
                <li>Excessive &nbsp; for layout (use CSS gaps).</li>
                <li>Mixing similar look-alikes (– vs — vs -).</li>
                <li>Forgetting the semicolon (may merge with following text).</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        {/* Quick Reference */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader><CardTitle>Quick Reference Cheat Sheet</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white dark:bg-slate-900 p-3 rounded border">
              <h5 className="font-semibold mb-2">Core Reserved</h5>
              <code className="block">&amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;apos;</code>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded border">
              <h5 className="font-semibold mb-2">Whitespace</h5>
              <code className="block">&amp;nbsp; &amp;ensp; &amp;emsp; &amp;thinsp;</code>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded border">
              <h5 className="font-semibold mb-2">Typography</h5>
              <code className="block">&amp;ldquo; &amp;rdquo; &amp;hellip; &amp;mdash;</code>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded border">
              <h5 className="font-semibold mb-2">Arrows</h5>
              <code className="block">&amp;larr; &amp;rarr; &amp;uarr; &amp;darr;</code>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded border">
              <h5 className="font-semibold mb-2">Math</h5>
              <code className="block">&amp;times; &amp;divide; &amp;ge; &amp;le; &amp;ne;</code>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded border">
              <h5 className="font-semibold mb-2">Currency</h5>
              <code className="block">&amp;euro; &amp;yen; &amp;pound; &amp;cent;</code>
            </div>
          </CardContent>
        </Card>
        {/* Playground Launch */}
        <Card>
          <CardHeader>
            <CardTitle>Open Combined Playground</CardTitle>
            <CardDescription>Experiment with a curated set of entities rendered in context.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => openPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)} className="w-full md:w-auto">
              <Play className="mr-2 h-4 w-4" /> Open Entities Playground
            </Button>
          </CardContent>
        </Card>
      </div>
    );
}
