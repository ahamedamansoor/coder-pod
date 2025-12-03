'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Key, Play, AlertCircle, Sigma, DollarSign, Pilcrow } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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

        {/* Character Entities in Action */}
        <div className='space-y-6'>
          <div className='flex items-center gap-3 mb-4'>
            <Key className='w-6 h-6 text-blue-600' />
            <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Character Entities in Action</h2>
          </div>
          <p className='text-slate-600 dark:text-slate-400 mb-6'>
            See how character entities render in HTML with different use cases
          </p>

          {/* Example 1: Reserved Characters */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="1. Reserved Characters"
                description="Escaping HTML special characters to display them literally"
              html={`<h2>Displaying HTML Code</h2>
<p class="code-example">
  HTML tag: <code>&lt;div class=&quot;box&quot;&gt;Content&lt;/div&gt;</code>
</p>
<p>Use <code>&amp;lt;</code> and <code>&amp;gt;</code> to show literal angle brackets!</p>

<h2>Attribute Quotes</h2>
<p>Attribute with quotes: <code>data-text=&quot;Hello World&quot;</code></p>
<p>Single quote: <code>It&apos;s working!</code></p>

<h2>Ampersand</h2>
<p>R&amp;D (Research &amp; Development)</p>
<p>AT&amp;T Corporation</p>

<p class="note">✅ Always escape <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code>, <code>&quot;</code> in text content!</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

h2 {
  color: #3b82f6;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
}

html.dark h2 {
  color: #60a5fa;
}

p {
  margin-bottom: 0.75rem;
  color: #475569;
}

html.dark p {
  color: #cbd5e1;
}

.code-example {
  background: #dbeafe;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: ui-monospace, monospace;
  margin-bottom: 0.75rem;
}

html.dark .code-example {
  background: #1e3a8a;
}

code {
  background: #e0e7ff;
  color: #4338ca;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 0.875rem;
}

html.dark code {
  background: #312e81;
  color: #c7d2fe;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .note {
  background: #1e3a8a;
  color: #93c5fd;
}`}
                colorTheme="blue"
                icon={AlertCircle}
                previewHeight="400px"
              />
            </CardContent>
          </Card>

          {/* Example 2: Mathematical Symbols */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="2. Mathematical Symbols"
                description="Display mathematical operations and comparisons"
                html={`<h2>Basic Operations</h2>
<p>5 &times; 6 = 30 (multiplication)</p>
<p>10 &divide; 2 = 5 (division)</p>
<p>x &plusmn; 2 (plus or minus)</p>

<h2>Comparisons</h2>
<p>x &ge; 5 (greater than or equal)</p>
<p>y &le; 10 (less than or equal)</p>
<p>a &ne; b (not equal)</p>

<h2>Other Symbols</h2>
<p>Temperature: 25&deg;C or 77&deg;F</p>
<p>Angle: 90&deg; (right angle)</p>

<p class="note">➗ Use math entities for clear, semantic mathematical expressions</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

h2 {
  color: #8b5cf6;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
}

html.dark h2 {
  color: #a78bfa;
}

p {
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.05rem;
}

html.dark p {
  color: #cbd5e1;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}`}
                colorTheme="purple"
                icon={Sigma}
                previewHeight="450px"
              />
            </CardContent>
          </Card>

          {/* Example 3: Currency & Marks */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="3. Currency & Trademark Symbols"
                description="Display currency symbols and legal marks"
                html={`<h2>Currency Symbols</h2>
<p>Price: &euro;99.99 (Euro)</p>
<p>Cost: &yen;10,000 (Yen)</p>
<p>Total: &pound;75.50 (Pound Sterling)</p>
<p>Sale: 50&cent; off!</p>

<h2>Legal & Trademark</h2>
<p>Copyright &copy; 2025 Company Name</p>
<p>MyBrand&reg; (Registered Trademark)</p>
<p>NewProduct&trade; (Trademark)</p>

<p class="note">💰 Use proper currency symbols for international audiences</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

h2 {
  color: #f59e0b;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
}

html.dark h2 {
  color: #fbbf24;
}

p {
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.05rem;
}

html.dark p {
  color: #cbd5e1;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #78350f;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .note {
  background: #713f12;
  color: #fef3c7;
}`}
                colorTheme="amber"
                icon={DollarSign}
                previewHeight="400px"
              />
            </CardContent>
          </Card>

          {/* Example 4: Typography */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="4. Smart Typography"
                description="Professional quotes, dashes, and punctuation"
                html={`<h2>Smart Quotes</h2>
<p>&ldquo;Smart quotes&rdquo; look better than "straight quotes"</p>
<p>&lsquo;Single quotes&rsquo; also available</p>

<h2>Dashes</h2>
<p>Em dash &mdash; connects independent clauses</p>
<p>En dash &ndash; for ranges (2010&ndash;2020)</p>
<p>Regular hyphen - for compound words</p>

<h2>Special Punctuation</h2>
<p>Ellipsis&hellip; for trailing thoughts</p>
<p>&sect; Section sign</p>
<p>&para; Paragraph mark</p>

<p class="note">✨ Smart typography makes content look more professional</p>`}
                css={`body {
  font-family: Georgia, serif;
  padding: 2rem;
  background: #f5f7fa;
  line-height: 1.8;
}

html.dark body {
  background: #0f172a;
}

h2 {
  color: #06b6d4;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
}

html.dark h2 {
  color: #22d3ee;
}

p {
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.05rem;
}

html.dark p {
  color: #cbd5e1;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #cffafe;
  color: #164e63;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: system-ui, sans-serif;
}

html.dark .note {
  background: #164e63;
  color: #cffafe;
}`}
                colorTheme="cyan"
                icon={Pilcrow}
                previewHeight="500px"
              />
            </CardContent>
          </Card>

          {/* Example 5: Arrows */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="5. Directional Arrows"
                description="Navigation and logical operators with arrows"
                html={`<h2>Basic Directions</h2>
<p>&larr; Go Back | Forward &rarr;</p>
<p>&uarr; Scroll Up | Down &darr;</p>

<h2>Double Arrows (Implications)</h2>
<p>If A then B &rArr; (implies)</p>
<p>&lArr; Reverse implication</p>
<p>A &hArr; B (if and only if)</p>

<h2>Navigation Examples</h2>
<p>&larr; Previous | Next &rarr;</p>
<p>↑ Top | ↓ Bottom</p>

<p class="note">➡️ Perfect for navigation, logic, and flow diagrams</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

h2 {
  color: #10b981;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
}

html.dark h2 {
  color: #34d399;
}

p {
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.1rem;
  text-align: center;
}

html.dark p {
  color: #cbd5e1;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: left;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
                colorTheme="emerald"
                icon={Key}
                previewHeight="450px"
              />
            </CardContent>
          </Card>

          {/* Example 6: Whitespace Control */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="6. Whitespace Control"
                description="Non-breaking spaces for units and proper wrapping"
                html={`<h2>Normal Spaces (Collapse)</h2>
<p>Multiple    spaces    collapse    into    one</p>
<p>A B C D E (normal wrapping)</p>

<h2>Non-Breaking Spaces</h2>
<p>Weight: 10&nbsp;kg (stays together)</p>
<p>Company: Apple&nbsp;Inc. (no break)</p>
<p>Date: January&nbsp;15,&nbsp;2025</p>
<p>Phone: 1&nbsp;800&nbsp;123&nbsp;4567</p>

<h2>When to Use</h2>
<p>Units: 100&nbsp;mph, 25&nbsp;°C</p>
<p>Names: Dr.&nbsp;Smith, Mr.&nbsp;Johnson</p>
<p>Numbers: $&nbsp;1,234.56</p>

<p class="note">🔒 Non-breaking spaces prevent awkward line breaks in units and names</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

h2 {
  color: #ec4899;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
}

html.dark h2 {
  color: #f472b6;
}

p {
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.05rem;
}

html.dark p {
  color: #cbd5e1;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .note {
  background: #831843;
  color: #fecdd3;
}`}
                colorTheme="pink"
                icon={Key}
                previewHeight="550px"
              />
            </CardContent>
          </Card>
        </div>

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
            <InteractivePlayground
              title="Character Entities Playground"
              description="Experiment with reserved characters, math symbols, currency, typography, and more"
              features={[
                'Reserved Characters',
                'Math & Currency',
                'Smart Typography',
                'International Letters'
              ]}
              buttonText="Open Entities Playground"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: playgroundCode.html,
                css: playgroundCode.css,
                js: playgroundCode.js
              }}
              colorTheme="purple"
            />
          </CardContent>
        </Card>

        {/* Example: International Content */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="7. International & Accented Characters"
              description="Display accented letters and international text using entities"
              html={`<h2>European Languages</h2>
<p>&Aacute;lbum (Spanish) - Musical recording</p>
<p>Caf&eacute; (French) - Coffee house</p>
<p>Na&iuml;ve (French) - Lacking experience</p>
<p>M&uuml;nchen (German) - City in Bavaria</p>

<h2>Scandinavian Letters</h2>
<p>&Oslash;resund (Danish/Swedish) - Strait/Bridge</p>
<p>&Aring;rhus (Danish) - City in Denmark</p>

<h2>German Special</h2>
<p>Stra&szlig;e (German) - Street</p>

<h2>Ligatures</h2>
<p>&AElig; (Ash ligature)</p>
<p>&oelig; (oe ligature)</p>

<p class="note">🌍 Modern best practice: Use UTF-8 directly instead of entities for international text</p>`}
              css={`body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%);
}

html.dark body {
  background: linear-gradient(135deg, #2d1b69 0%, #3d0d54 100%);
}

h2 {
  color: #d946ef;
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
  border-bottom: 2px solid #f0e1ff;
  padding-bottom: 0.5rem;
}

html.dark h2 {
  color: #f472b6;
  border-bottom-color: #5b21b6;
}

p {
  margin-bottom: 0.75rem;
  color: #581c87;
  font-size: 1.05rem;
}

html.dark p {
  color: #f3e8ff;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: rgba(236, 72, 153, 0.1);
  color: #be185d;
  border-radius: 6px;
  border-left: 4px solid #ec4899;
  font-size: 0.9rem;
}

html.dark .note {
  background: rgba(236, 72, 153, 0.2);
  color: #fbcfe8;
}`}
              colorTheme="purple"
              previewHeight="450px"
            />
          </CardContent>
        </Card>

        {/* Comprehensive Entity Showcase Playground */}
        <Card>
          <CardHeader>
            <CardTitle>🎨 Comprehensive Entity Showcase</CardTitle>
            <CardDescription>Interactive showcase featuring all entity categories with beautiful styling</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractivePlayground
              title="Complete Character Entities Showcase"
              description="Explore all HTML entity categories: reserved, symbols, typography, arrows, math, currency, and more in one beautiful interactive playground"
              features={[
                'Reserved Characters',
                'Math Symbols',
                'Currency & Marks',
                'Smart Typography',
                'Arrows & Indicators',
                'International Letters',
                'Whitespace Control'
              ]}
              buttonText="Open Complete Showcase"
              onLaunchPlayground={openPlayground}
              playgroundData={{
                html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Character Entities Showcase</title>
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1>✨ Character Entities Masterclass</h1>
      <p class="subtitle">Master HTML special characters and symbols</p>
    </header>

    <section class="showcase-section">
      <h2 class="section-title">🔐 Reserved Characters</h2>
      <p>Essential for displaying HTML code literally:</p>
      <div class="entity-grid">
        <div class="entity-card">
          <span class="entity-char">&lt;</span>
          <code>&amp;lt;</code>
          <p>Less than</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&gt;</span>
          <code>&amp;gt;</code>
          <p>Greater than</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&amp;</span>
          <code>&amp;amp;</code>
          <p>Ampersand</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&quot;</span>
          <code>&amp;quot;</code>
          <p>Double quote</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">📐 Math & Science</h2>
      <p>Mathematical operations and scientific notation:</p>
      <div class="entity-grid">
        <div class="entity-card">
          <span class="entity-char">&times;</span>
          <code>&amp;times;</code>
          <p>Multiplication</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&divide;</span>
          <code>&amp;divide;</code>
          <p>Division</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&plusmn;</span>
          <code>&amp;plusmn;</code>
          <p>Plus-Minus</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&deg;</span>
          <code>&amp;deg;</code>
          <p>Degree</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&ne;</span>
          <code>&amp;ne;</code>
          <p>Not equal</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&le;</span>
          <code>&amp;le;</code>
          <p>Less or equal</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">💰 Currency & Legal</h2>
      <p>Currency symbols and trademark marks:</p>
      <div class="entity-grid">
        <div class="entity-card">
          <span class="entity-char">&euro;</span>
          <code>&amp;euro;</code>
          <p>Euro</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&pound;</span>
          <code>&amp;pound;</code>
          <p>Pound</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&yen;</span>
          <code>&amp;yen;</code>
          <p>Yen</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&cent;</span>
          <code>&amp;cent;</code>
          <p>Cent</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&copy;</span>
          <code>&amp;copy;</code>
          <p>Copyright</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&reg;</span>
          <code>&amp;reg;</code>
          <p>Registered</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">✍️ Smart Typography</h2>
      <p>Professional quotation marks and dashes:</p>
      <div class="entity-grid">
        <div class="entity-card">
          <span class="entity-char">&ldquo;</span>
          <code>&amp;ldquo;</code>
          <p>Left quote</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&rdquo;</span>
          <code>&amp;rdquo;</code>
          <p>Right quote</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&lsquo;</span>
          <code>&amp;lsquo;</code>
          <p>Left single</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&rsquo;</span>
          <code>&amp;rsquo;</code>
          <p>Right single</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&mdash;</span>
          <code>&amp;mdash;</code>
          <p>Em dash</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&ndash;</span>
          <code>&amp;ndash;</code>
          <p>En dash</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">➡️ Directional Arrows</h2>
      <p>Navigation and logical operators:</p>
      <div class="entity-grid">
        <div class="entity-card">
          <span class="entity-char">&larr;</span>
          <code>&amp;larr;</code>
          <p>Left</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&rarr;</span>
          <code>&amp;rarr;</code>
          <p>Right</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&uarr;</span>
          <code>&amp;uarr;</code>
          <p>Up</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&darr;</span>
          <code>&amp;darr;</code>
          <p>Down</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&rArr;</span>
          <code>&amp;rArr;</code>
          <p>Double right</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&lArr;</span>
          <code>&amp;lArr;</code>
          <p>Double left</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">🌍 International</h2>
      <p>Accented letters and special characters:</p>
      <div class="entity-grid">
        <div class="entity-card">
          <span class="entity-char">&eacute;</span>
          <code>&amp;eacute;</code>
          <p>é (acute)</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&ntilde;</span>
          <code>&amp;ntilde;</code>
          <p>ñ (tilde)</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&aelig;</span>
          <code>&amp;aelig;</code>
          <p>æ (ligature)</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&oslash;</span>
          <code>&amp;oslash;</code>
          <p>ø (slash)</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&szlig;</span>
          <code>&amp;szlig;</code>
          <p>ß (eszett)</p>
        </div>
        <div class="entity-card">
          <span class="entity-char">&hellip;</span>
          <code>&amp;hellip;</code>
          <p>Ellipsis</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>Master character entities to create <strong>professional</strong>, <em>accessible</em>, and <mark>semantic</mark> HTML content.</p>
    </footer>
  </div>
</body>
</html>`,
                css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.8;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
  color: #1e293b;
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  color: #e2e8f0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(120deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  border-radius: 12px;
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
}

.showcase-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e7ff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

html.dark .showcase-section {
  background: #1e293b;
  border-color: #334155;
}

.showcase-section:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.section-title {
  font-size: 1.75rem;
  color: #1e40af;
  margin-bottom: 1rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
}

html.dark .section-title {
  color: #93c5fd;
  border-bottom-color: #60a5fa;
}

.entity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.entity-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
  border: 2px solid #dbeafe;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

html.dark .entity-card {
  background: linear-gradient(135deg, #1e3a8a20 0%, #2d1b6920 100%);
  border-color: #3730a3;
}

.entity-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
}

.entity-char {
  display: block;
  font-size: 2.5rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

html.dark .entity-char {
  color: #93c5fd;
}

.entity-card code {
  display: block;
  background: #1e293b;
  color: #10b981;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: ui-monospace, monospace;
  margin: 0.5rem 0;
  overflow-x: auto;
}

.entity-card p {
  font-size: 0.85rem;
  color: #475569;
  margin: 0.5rem 0 0 0;
}

html.dark .entity-card p {
  color: #cbd5e1;
}

.footer {
  text-align: center;
  padding: 2rem;
  border-top: 2px solid #e0e7ff;
  margin-top: 3rem;
}

html.dark .footer {
  border-top-color: #334155;
}

.footer p {
  font-size: 1.1rem;
  color: #475569;
  margin: 0;
}

html.dark .footer p {
  color: #cbd5e1;
}

strong {
  color: #3b82f6;
  font-weight: 600;
}

em {
  color: #7c3aed;
  font-style: italic;
}

mark {
  background: #fef08a;
  color: #78350f;
  padding: 0.125rem 0.25rem;
  border-radius: 2px;
}

html.dark mark {
  background: #854d0e;
  color: #fef08a;
}`,
                js: ''
              }}
              colorTheme="blue"
            />
          </CardContent>
        </Card>
      </div>
    );
}
