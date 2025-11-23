'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { List, ListOrdered, BookText, Play, GitMerge, ListIcon, Circle } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';

export default function HtmlLists({ onOpenWebPlaygroundAction, onOpenWebPlayground }: { onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void; onOpenWebPlayground?: (html: string, css: string, js: string) => void }) {
  const openPlayground = (html: string, css: string, js: string) => (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);

    const unorderedListCode = `<h2>Shopping List</h2>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>`;

    const unorderedListTypesCode = `<h3>Default (disc)</h3>
<ul style="list-style-type:disc;">
  <li>First item</li>
  <li>Second item</li>
</ul>

<h3>Circle</h3>
<ul style="list-style-type:circle;">
  <li>First item</li>
  <li>Second item</li>
</ul>

<h3>Square</h3>
<ul style="list-style-type:square;">
  <li>First item</li>
  <li>Second item</li>
</ul>`;

    const orderedListCode = `<h2>Recipe Steps</h2>
<ol>
  <li>Boil water.</li>
  <li>Add pasta.</li>
  <li>Cook for 8-10 minutes.</li>
</ol>`;

    const orderedListTypesCode = `<h3>Numbers (default)</h3>
<ol type="1">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Uppercase Letters</h3>
<ol type="A">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Lowercase Letters</h3>
<ol type="a">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Uppercase Roman</h3>
<ol type="I">
  <li>First item</li>
  <li>Second item</li>
</ol>

<h3>Lowercase Roman</h3>
<ol type="i">
  <li>First item</li>
  <li>Second item</li>
</ol>`;

    const descriptionListCode = `<h2>Glossary</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, a language used for describing the presentation of a document written in a markup language.</dd>
</dl>`;
    
    const nestedListCode = `<ul>
  <li>Fruit
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>`;

    const fullPlaygroundCode = {
        html: `<h1>List Examples</h1>

<h2>Shopping List (Unordered)</h2>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>

<h2>Recipe (Ordered)</h2>
<ol type="1">
  <li>Boil water.</li>
  <li>Add pasta.</li>
  <li>Cook for 8-10 minutes.</li>
</ol>

<h2>Glossary (Description)</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>

<h2>Nested List</h2>
<ul>
  <li>Americas
    <ul>
      <li>USA</li>
      <li>Canada</li>
    </ul>
  </li>
  <li>Europe
    <ul>
      <li>France</li>
      <li>Germany</li>
    </ul>
  </li>
</ul>`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
h1, h2, h3 {
  color: hsl(var(--primary));
  border-bottom: 1px solid hsl(var(--border));
  padding-bottom: 4px;
}
ul, ol, dl {
  background-color: hsl(var(--muted));
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 8px;
  border: 1px solid hsl(var(--border));
}
dt {
  font-weight: bold;
  color: hsl(var(--foreground));
}
dd {
  margin-left: 1rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 0.5rem;
}`,
        js: ''
    };

    // Interactive Builder State
    const listKinds = [
      { value: 'ul', label: 'Unordered (ul)' },
      { value: 'ol', label: 'Ordered (ol)' },
      { value: 'dl', label: 'Description (dl)' }
    ];
    const ulStyles = ['disc','circle','square','none'];
    const olStyles = ['1','A','a','I','i'];
    const [kind,setKind] = React.useState('ul');
    const [marker,setMarker] = React.useState('disc');
    const [start,setStart] = React.useState(1);
    const [reversed,setReversed] = React.useState(false);
    // items now objects to allow value override & stable ids
    const [items,setItems] = React.useState<Array<{id:string;text:string;value?:number}>>([
      {id:'i1',text:'First item'},{id:'i2',text:'Second item'},{id:'i3',text:'Third item'}
    ]);
    // description list term pairs with ids for editing
    const [termPairs,setTermPairs] = React.useState<Array<{id:string;term:string;desc:string}>>([
      {id:'t1',term:'HTML',desc:'Structure of the page'},{id:'t2',term:'CSS',desc:'Presentation layer'}
    ]);
    const [newItem,setNewItem] = React.useState('');
    const [newTerm,setNewTerm] = React.useState('');
    const [newDesc,setNewDesc] = React.useState('');
    const [indent,setIndent] = React.useState(24);
    const [listInside,setListInside] = React.useState(false); // list-style-position toggle
    const [customEmoji,setCustomEmoji] = React.useState(''); // custom marker for ul

    const addItem = () => { if(newItem.trim()){ setItems([...items,{id:crypto.randomUUID(),text:newItem.trim()}]); setNewItem(''); } };
    const updateItem = (id:string,text:string) => setItems(items.map(it=> it.id===id? {...it,text}: it));
    const updateItemValue = (id:string,val:number|undefined) => setItems(items.map(it=> it.id===id? {...it,value:val}: it));
    const moveItem = (id:string,dir:-1|1) => {
      const idx = items.findIndex(i=>i.id===id); if(idx<0) return; const target = idx+dir; if(target<0||target>=items.length) return;
      const copy = [...items]; const [a,b] = [copy[idx],copy[target]]; copy[idx]=b; copy[target]=a; setItems(copy);
    };
    const clearItems = () => setItems([]);
    const removeItem = (id:string) => setItems(items.filter(i=>i.id!==id));

    const addPair = () => { if(newTerm.trim() && newDesc.trim()){ setTermPairs([...termPairs,{id:crypto.randomUUID(),term:newTerm.trim(),desc:newDesc.trim()}]); setNewTerm(''); setNewDesc(''); } };
    const updatePair = (id:string,patch:Partial<{term:string;desc:string}>) => setTermPairs(termPairs.map(p=> p.id===id? {...p,...patch}: p));
    const movePair = (id:string,dir:-1|1) => { const idx = termPairs.findIndex(p=>p.id===id); const target=idx+dir; if(idx<0||target<0||target>=termPairs.length) return; const copy=[...termPairs]; const [a,b]=[copy[idx],copy[target]]; copy[idx]=b; copy[target]=a; setTermPairs(copy); };
    const removePair = (id:string) => setTermPairs(termPairs.filter(p=>p.id!==id));

    const generatedHTML = (() => {
      if(kind==='ul') {
        const cls = customEmoji.trim()? ' class="emoji-list"' : '';
        return `<ul${cls}${marker!=='disc' && !customEmoji.trim()?` style=\"list-style-type:${marker};\"`:''}>\n  ${items.map(it=>`<li>${it.text}</li>`).join('\n  ')}\n</ul>`;
      }
      if(kind==='ol') {
        const attrs = [marker!=='1'?`type=\"${marker}\"`:'' , start!==1?`start=\"${start}\"`:'' , reversed? 'reversed' : ''].filter(Boolean).join(' ');
        return `<ol${attrs? ' '+attrs: ''}>\n  ${items.map(it=>`<li${it.value?` value=\"${it.value}\"`:''}>${it.text}</li>`).join('\n  ')}\n</ol>`;
      }
      return `<dl>\n  ${termPairs.map(p=>`<dt>${p.term}</dt>\n  <dd>${p.desc}</dd>`).join('\n  ')}\n</dl>`;
    })();

    const generatedCSS = `/* Builder styles */\nul,ol,dl{\n  padding:.75rem 1rem .75rem ${indent}px;\n  background:hsl(var(--muted));\n  border:1px solid hsl(var(--border));\n  border-radius:8px;\n}\n${kind==='ul' && marker==='none' ? 'ul{list-style:none;}' : ''}\n${listInside? 'ul,ol{list-style-position:inside;}' : 'ul,ol{list-style-position:outside;}'}\n${customEmoji.trim()?`.emoji-list{list-style:none;padding-left:1.75rem;} .emoji-list > li{position:relative;} .emoji-list > li::before{content:'${customEmoji}';position:absolute;left:-1.25rem;}`:''}`;
    const builderPlayground = { html: `<h2>Generated List</h2>\n${generatedHTML}`, css: generatedCSS, js: '' };

    // Live preview with inline styles for immediate feedback
    const renderLivePreview = () => {
      const commonStyle: React.CSSProperties = {
        padding: `.75rem 1rem .75rem ${indent}px`,
        background: 'hsl(var(--muted))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
        listStylePosition: listInside ? 'inside' : 'outside'
      };

      if (kind === 'ul') {
        if (customEmoji.trim()) {
          return (
            <ul style={{ ...commonStyle, listStyleType: 'none', paddingLeft: `${indent + 12}px` }}>
              {items.map(it => (
                <li key={it.id} style={{ position: 'relative', paddingLeft: '1.25rem' }}>
                  <span style={{ position: 'absolute', left: 0 }}>{customEmoji}</span>
                  <span>{it.text}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <ul style={{ ...commonStyle, listStyleType: marker }}>
            {items.map(it => <li key={it.id}>{it.text}</li>)}
          </ul>
        );
      }

      if (kind === 'ol') {
        return (
          <ol
            style={commonStyle}
            type={marker !== '1' ? (marker as any) : undefined}
            start={start !== 1 ? start : undefined}
            reversed={reversed || undefined}
          >
            {items.map(it => (
              <li key={it.id} value={it.value}>
                {it.text}
              </li>
            ))}
          </ol>
        );
      }

      return (
        <dl style={commonStyle}>
          {termPairs.map(p => (
            <React.Fragment key={p.id}>
              <dt style={{ fontWeight: 'bold' }}>{p.term}</dt>
              <dd style={{ marginLeft: '1rem', opacity: 0.7 }}>{p.desc}</dd>
            </React.Fragment>
          ))}
        </dl>
      );
    };

    // Accessibility & Best Practices Content
    const a11yPoints = [
      'Use <ul> and <ol> only for lists of related items.',
      'Prefer <ol> when sequence or ranking matters.',
      'Do not replace list semantics with plain <div> elements (+ screen readers lose structure).',
      'Avoid deep nesting (>3 levels) — consider headings or separate sections.',
      'Description lists (<dl>) best for name-value groups; multiple <dt> before <dd> allowed.',
      'Use CSS for complex markers; the type attribute is limited and legacy oriented.',
      'Use role="list" only when recreating list semantics dynamically (rare).',
    ];

    return (
      <div className="space-y-10 pb-16">
        <PageHeader
          icon={List}
          category="HTML Basics"
          title="HTML Lists"
          description="Organizing content into ordered, unordered, and description lists"
          colorTheme="blue"
        />

        {/* Overview Types */}
        <Card>
          <CardHeader>
            <CardTitle>The Three Types of Lists</CardTitle>
            <CardDescription>Choose a list structure that matches the relationship between items.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-muted p-4 rounded-lg border space-y-2 text-center">
              <List className="w-6 h-6 text-primary mx-auto" />
              <h3 className="font-semibold">Unordered (ul)</h3>
              <p className="text-muted-foreground text-sm">Items with no inherent order. Markers are bullets by default.</p>
            </div>
            <div className="bg-muted p-4 rounded-lg border space-y-2 text-center">
              <ListOrdered className="w-6 h-6 text-primary mx-auto" />
              <h3 className="font-semibold">Ordered (ol)</h3>
              <p className="text-muted-foreground text-sm">Sequence or ranking matters. Supports numbering customization.</p>
            </div>
            <div className="bg-muted p-4 rounded-lg border space-y-2 text-center">
              <BookText className="w-6 h-6 text-primary mx-auto" />
              <h3 className="font-semibold">Description (dl)</h3>
              <p className="text-muted-foreground text-sm">Pairs terms and descriptions (glossaries, metadata).</p>
            </div>
          </CardContent>
        </Card>

        {/* Unordered Lists */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><List className="w-5 h-5 text-primary"/>Unordered Lists: &lt;ul&gt; &amp; &lt;li&gt;</CardTitle>
            <CardDescription>Bullet-based grouping where sequence does not matter.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            <div className="bg-muted p-4 rounded-md">
              <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap">{unorderedListCode}</pre>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Marker Styles (CSS Preferred)</h4>
              <p className="text-muted-foreground">Use <code>list-style-type</code> for modern control: <code>disc</code>, <code>circle</code>, <code>square</code>, <code>none</code>. The legacy <code>type</code> attribute is still supported but limited.</p>
              <div className="grid sm:grid-cols-4 gap-2">
                {ulStyles.map(s => (
                  <div key={s} className="p-3 rounded border bg-background/50 flex flex-col items-center gap-1">
                    <code className="font-mono text-xs">{s}</code>
                    <ul style={{listStyleType:s}} className="list-inside pl-5">
                      <li className="text-xs">A</li>
                      <li className="text-xs">B</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={() => openPlayground(unorderedListCode + '\n' + unorderedListTypesCode, fullPlaygroundCode.css, '')}>
              <Play className="mr-2 h-4 w-4" /> Open Unordered Demo
            </Button>
          </CardContent>
        </Card>

        {/* Ordered Lists */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ListOrdered className="w-5 h-5 text-primary"/>Ordered Lists: &lt;ol&gt; &amp; &lt;li&gt;</CardTitle>
            <CardDescription>Numbered sequences with controllable starting value and style.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            <div className="bg-muted p-4 rounded-md">
              <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap">{orderedListCode}</pre>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Attributes</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><code>type</code>: Marker style (1, A, a, I, i)</li>
                  <li><code>start</code>: Starting index (default 1)</li>
                  <li><code>reversed</code>: Counts downwards</li>
                  <li><code>value</code> on <code>&lt;li&gt;</code>: Override individual number</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Examples</h4>
                <pre className="font-mono text-xs bg-muted p-3 rounded whitespace-pre-wrap">&lt;ol type="A" start="3"&gt;\n  &lt;li&gt;Third letter&lt;/li&gt;\n  &lt;li value="10"&gt;Forced value 10&lt;/li&gt;\n&lt;/ol&gt;</pre>
              </div>
            </div>
            <Button onClick={() => openPlayground(orderedListCode + '\n' + orderedListTypesCode, fullPlaygroundCode.css, '')}>
              <Play className="mr-2 h-4 w-4" /> Open Ordered Demo
            </Button>
          </CardContent>
        </Card>

        {/* Description Lists */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookText className="w-5 h-5 text-primary"/>Description Lists: &lt;dl&gt; / &lt;dt&gt; / &lt;dd&gt;</CardTitle>
            <CardDescription>Structured name–value semantics for definitions and metadata.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <ul className="list-disc list-inside space-y-1">
              <li>Multiple <code>&lt;dt&gt;</code> before a single <code>&lt;dd&gt;</code> allowed.</li>
              <li>Groups can repeat; style with grid for alignment.</li>
              <li>Avoid using for navigation or generic layout.</li>
            </ul>
            <div className="bg-muted p-4 rounded-md">
              <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap">{descriptionListCode}</pre>
            </div>
            <Button onClick={() => openPlayground(descriptionListCode, fullPlaygroundCode.css, '')}>
              <Play className="mr-2 h-4 w-4" /> Open Description Demo
            </Button>
          </CardContent>
        </Card>

        {/* Nested Lists */}
        <Card className="border-accent/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><GitMerge className="w-5 h-5 text-primary"/>Nested Lists</CardTitle>
            <CardDescription>Represent hierarchical data with controlled depth.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="bg-muted p-4 rounded-md">
              <pre className="font-mono text-xs whitespace-pre-wrap">{nestedListCode}</pre>
            </div>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Limit depth (consider headings or separate pages for deeper branches).</li>
              <li>Use <code>list-style-position: inside;</code> for compact nested lists; outside for alignment.</li>
              <li>Consider ARIA tree only for interactive exploration widgets (not static content).</li>
            </ul>
            <Button onClick={() => openPlayground(nestedListCode, fullPlaygroundCode.css, '')}>
              <Play className="mr-2 h-4 w-4" /> Open Nested Demo
            </Button>
          </CardContent>
        </Card>

        {/* Advanced Markers & CSS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ListIcon className="w-5 h-5 text-primary"/>Advanced Marker Techniques</CardTitle>
            <CardDescription>Go beyond defaults using CSS counters and images.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Custom Counters</h4>
                <pre className="bg-muted p-3 rounded font-mono text-xs whitespace-pre-wrap">{`<ol class="fancy">\n  <li>Alpha</li>\n  <li>Beta</li>\n</ol>\n\n<style>\n.fancy { counter-reset: step; }\n.fancy > li {\n  counter-increment: step;\n  list-style: none;\n  position: relative;\n  padding-left: 2rem;\n}\n.fancy > li::before {\n  content: counter(step) ')';\n  position: absolute; left:0; color:#6366f1; font-weight:600;\n}\n</style>`}</pre>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Image / Emoji Markers</h4>
                <pre className="bg-muted p-3 rounded font-mono text-xs whitespace-pre-wrap">{`<ul class="emoji">\n  <li>Fast</li>\n  <li>Friendly</li>\n</ul>\n\n<style>\n.emoji { list-style: none; padding-left:1.2rem; }\n.emoji > li { position: relative; }\n.emoji > li::before { content:'🚀'; position:absolute; left:-1.2rem; }\n</style>`}</pre>
              </div>
            </div>
            <p className="text-muted-foreground">Use pseudo-elements for full flexibility while preserving list semantics.</p>
          </CardContent>
        </Card>

        {/* Accessibility & Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle>Accessibility & Best Practices</CardTitle>
            <CardDescription>Write lists that are semantic, navigable and maintainable.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2 bg-green-50 dark:bg-green-950/20 p-4 rounded border">
              <h4 className="font-semibold">Do</h4>
              <ul className="list-disc list-inside space-y-1">
                {a11yPoints.slice(0,4).map(p=> <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="space-y-2 bg-rose-50 dark:bg-rose-950/20 p-4 rounded border">
              <h4 className="font-semibold">Avoid</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Using lists only for layout indentation.</li>
                <li>Excessive nested levels without headings.</li>
                <li>Stripping markers but not replacing with visual cues.</li>
                <li>Replacing list with <code>div</code> groups + manual numbering.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Interactive List Builder */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Circle className="w-5 h-5 text-primary"/>Interactive List Builder</CardTitle>
            <CardDescription>Create a list, adjust attributes & styling, then open in Playground.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Core Settings */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-semibold">List Type</label>
                  <Select value={kind} onValueChange={v=>{setKind(v); if(v==='ul'){setMarker('disc')} else if(v==='ol'){setMarker('1')} }}>
                    <SelectTrigger><SelectValue placeholder="Select kind"/></SelectTrigger>
                    <SelectContent>
                      {listKinds.map(l=> <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                {kind==='ul' && (
                  <div className="space-y-2">
                    <label className="font-semibold">Marker Style (list-style-type)</label>
                    <Select value={marker} onValueChange={setMarker}>
                      <SelectTrigger><SelectValue placeholder="Marker"/></SelectTrigger>
                      <SelectContent>{ulStyles.map(s=> <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                )}
                {kind==='ol' && (
                  <div className="space-y-2">
                    <label className="font-semibold">Numbering Type</label>
                    <Select value={marker} onValueChange={setMarker}>
                      <SelectTrigger><SelectValue placeholder="Type"/></SelectTrigger>
                      <SelectContent>{olStyles.map(s=> <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                    </Select>
                    <div className="flex items-center gap-2 mt-2">
                      <label className="font-semibold" htmlFor="startInput">Start</label>
                      <Input id="startInput" type="number" min={1} value={start} onChange={e=>setStart(Number(e.target.value)||1)} className="w-24" />
                      <div className="flex items-center gap-2">
                        <Switch id="revSwitch" checked={reversed} onCheckedChange={setReversed} />
                        <label htmlFor="revSwitch">Reversed</label>
                      </div>
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <label className="font-semibold">Left Padding (visual indentation)</label>
                  <Slider value={[indent]} min={12} max={48} step={4} onValueChange={v=>setIndent(v[0])} />
                  <div className="text-xs">{indent}px</div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Switch id="insideSwitch" checked={listInside} onCheckedChange={setListInside} />
                  <label htmlFor="insideSwitch" className="text-xs sm:text-sm">Use list-style-position: inside</label>
                </div>
                {kind==='ul' && (
                  <div className="space-y-2 pt-2">
                    <label className="font-semibold" htmlFor="emojiInput">Custom Emoji Marker (optional)</label>
                    <Input id="emojiInput" value={customEmoji} onChange={e=>setCustomEmoji(e.target.value)} placeholder="e.g. ➤ or 🚀" />
                  </div>
                )}
              </div>

              {/* Items Editor */}
              {kind!=='dl' ? (
                <div className="space-y-3">
                  <label className="font-semibold">Items</label>
                  <div className="flex flex-wrap gap-2">
                    <Input value={newItem} onChange={e=>setNewItem(e.target.value)} placeholder="Add item" className="flex-1 min-w-[160px]" />
                    <Button type="button" onClick={addItem} disabled={!newItem.trim()}>Add</Button>
                    <Button type="button" variant="secondary" onClick={clearItems} disabled={!items.length}>Clear</Button>
                  </div>
                  <ul className="space-y-2">
                    {items.map((it,i)=> (
                      <li key={it.id} className="bg-muted p-2 rounded border flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Input value={it.text} onChange={e=>updateItem(it.id,e.target.value)} className="flex-1" />
                          {kind==='ol' && (
                            <Input type="number" min={1} value={it.value??''} onChange={e=>updateItemValue(it.id, e.target.value? Number(e.target.value): undefined)} placeholder="value" className="w-20" />
                          )}
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm" onClick={()=>moveItem(it.id,-1)} disabled={i===0}>↑</Button>
                            <Button variant="outline" size="sm" onClick={()=>moveItem(it.id,1)} disabled={i===items.length-1}>↓</Button>
                            <Button variant="ghost" size="sm" onClick={()=>removeItem(it.id)}>✕</Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="font-semibold">Term / Description Pairs</label>
                  <div className="flex flex-col gap-2 md:flex-row md:items-end">
                    <Input value={newTerm} onChange={e=>setNewTerm(e.target.value)} placeholder="Term" className="flex-1" />
                    <Input value={newDesc} onChange={e=>setNewDesc(e.target.value)} placeholder="Description" className="flex-[2]" />
                    <Button type="button" onClick={addPair} disabled={!newTerm.trim()||!newDesc.trim()}>Add Pair</Button>
                  </div>
                  <div className="space-y-2">
                    {termPairs.map((p,i)=> (
                      <div key={p.id} className="bg-muted p-2 rounded border flex flex-col gap-2">
                        <div className="flex gap-2">
                          <Input value={p.term} onChange={e=>updatePair(p.id,{term:e.target.value})} className="w-40" />
                          <Input value={p.desc} onChange={e=>updatePair(p.id,{desc:e.target.value})} className="flex-1" />
                        </div>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" onClick={()=>movePair(p.id,-1)} disabled={i===0}>↑</Button>
                          <Button variant="outline" size="sm" onClick={()=>movePair(p.id,1)} disabled={i===termPairs.length-1}>↓</Button>
                          <Button variant="ghost" size="sm" onClick={()=>removePair(p.id)}>✕</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview & Export */}
              <div className="space-y-3">
                <label className="font-semibold">Preview</label>
                <div className="bg-background p-4 rounded border text-sm">
                  {renderLivePreview()}
                </div>
                <div className="bg-background/50 p-3 rounded border font-mono text-xs whitespace-pre overflow-auto">
                  {generatedHTML}\n\n{generatedCSS}
                </div>
                <Button onClick={()=> openPlayground(builderPlayground.html, builderPlayground.css, builderPlayground.js)}>
                  <Play className="mr-2 h-4 w-4" /> Open Generated in Playground
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complete Example */}
        <Card>
          <CardHeader>
            <CardTitle>Putting It All Together</CardTitle>
            <CardDescription>Open a consolidated example containing all list types.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => openPlayground(fullPlaygroundCode.html, fullPlaygroundCode.css, fullPlaygroundCode.js)}>
              <Play className="mr-2 h-4 w-4" /> Open Full Example
            </Button>
          </CardContent>
        </Card>
      </div>
    );
}
