'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Box, Text, Play, File } from 'lucide-react';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

interface HtmlBlockVsInlineProps { onOpenWebPlaygroundAction?: (h:string,c:string,j:string)=>void; onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<h2>Block vs Inline</h2>
<div class='box block'>Block 1</div>
<div class='box block'>Block 2</div>
<p>This line has <span class='box inline'>Inline 1</span> and <span class='box inline'>Inline 2</span>.</p>
<p><span class='box inline-block'>Inline-Block 1</span> <span class='box inline-block'>Inline-Block 2</span></p>`,css:`body{font-family:system-ui} .box{border:2px solid;padding:8px;margin:6px} .block{display:block;border-color:#2563eb;background:#2563eb11} .inline{display:inline;border-color:#dc2626;background:#dc262611} .inline-block{display:inline-block;border-color:#9333ea;background:#9333ea11}`,js:''};
const blockInlinePlayground = { html: demo.html, css: demo.css, js: demo.js };
const spacingPlayground = { html:`<h2>Margin & Height Tests</h2>\n<p class='probe block-el'>Block Paragraph</p>\n<span class='probe inline-el'>Inline Span</span> NEXT TEXT\n<span class='probe inline-block-el'>Inline-Block Span</span> After\n`, css:`body{font-family:system-ui;line-height:1.5;padding:1rem} .probe{background:#f1f5f9;border:2px solid #64748b;padding:4px;margin:8px} .block-el{display:block;color:#2563eb} .inline-el{display:inline;color:#dc2626;height:40px;margin-top:40px} .inline-block-el{display:inline-block;color:#9333ea;height:40px;margin-top:40px;width:140px}`, js:'' };
const conversionPlayground = { html:`<h2>Display Conversion</h2>\n<div class='item'>Default DIV (block)</div>\n<div class='item to-inline' style='display:inline;'>Forced inline DIV</div>\n<span class='item span-block' style='display:block;'>Forced block SPAN</span>\n<span class='item span-inline-block' style='display:inline-block;'>Span inline-block</span>`, css:`body{font-family:system-ui;padding:1rem} .item{border:2px solid #0ea5e9;padding:6px;margin:6px;background:#e0f2fe} .to-inline{background:#fee2e2;border-color:#ef4444} .span-block{background:#ede9fe;border-color:#8b5cf6} .span-inline-block{background:#fef9c3;border-color:#eab308}`, js:'' };

export default function HtmlBlockVsInline({ onOpenWebPlaygroundAction, onOpenWebPlayground }: HtmlBlockVsInlineProps){
  const openPlayground = (h:string,c:string,j:string) => (onOpenWebPlaygroundAction||onOpenWebPlayground)?.(h,c,j);
  const elementOptions = [
    { value:'div', type:'Block', defaultDisplay:'block', notes:'Takes full line; supports width/height/margins.', example:'<div>Section</div>' },
    { value:'p', type:'Block', defaultDisplay:'block', notes:'Paragraph block with semantic text grouping.', example:'<p>Paragraph text</p>' },
    { value:'h1', type:'Block', defaultDisplay:'block', notes:'Heading outlines document structure levels.', example:'<h1>Title</h1>' },
    { value:'span', type:'Inline', defaultDisplay:'inline', notes:'Generic inline; no width/height effect.', example:'<span>Inline piece</span>' },
    { value:'a', type:'Inline', defaultDisplay:'inline', notes:'Interactive link; focusable; inline flow.', example:'<a href="#">Link</a>' },
    { value:'strong', type:'Inline', defaultDisplay:'inline', notes:'Inline semantic importance emphasis.', example:'<strong>Important</strong>' },
    { value:'img', type:'Inline', defaultDisplay:'inline', notes:'Replaced element; width/height apply.', example:'<img src="x" alt="" />' },
    { value:'button', type:'Inline-block', defaultDisplay:'inline-block', notes:'Interactive; can size & align with text.', example:'<button>Click</button>' },
    { value:'input', type:'Inline-block', defaultDisplay:'inline-block', notes:'Form control; width/height styles apply.', example:'<input type="text" />' },
  ];
  const [selected, setSelected] = React.useState(elementOptions[0].value);
  const [displayMode, setDisplayMode] = React.useState<'block'|'inline'|'inline-block'>('block');
  const current = elementOptions.find(e=>e.value===selected)!;
  const [boxWidth,setBoxWidth]=React.useState(160);
  const [lineHeight,setLineHeight]=React.useState(1.4);
  const [showBorder,setShowBorder]=React.useState(true);
  const [sampleText,setSampleText]=React.useState('Sample Box');
  const [wrap,setWrap]=React.useState(true);
  const computedStyle = {
    display: displayMode,
    background: 'var(--accent)',
    padding:'8px',
    border: showBorder? '2px solid var(--accent-foreground)':'0',
    color:'var(--accent-foreground)',
    minWidth: displayMode==='inline' ? 'auto' : boxWidth+'px',
    lineHeight: lineHeight.toString()
  } as React.CSSProperties;
  const cssSnippet = `/* Dynamic styles */\n.sample {\n  display: ${displayMode};\n  ${displayMode!=='inline'?`min-width: ${boxWidth}px;`:''}\n  line-height: ${lineHeight};\n  ${showBorder?'border: 2px solid currentColor;':'/* no border */'}\n}`;
  return <div className='space-y-10 pb-16'>
    <PageHeader icon={File} category='HTML Basics' title='Block vs Inline Elements' description='Understanding default display behaviors' colorTheme='blue'/>
    {/* Overview Diagram */}
    <Card>
      <CardHeader><CardTitle className='flex items-center gap-2'><Box className='w-5 h-5 text-primary'/>Visual Flow Diagram</CardTitle><CardDescription>How block, inline, and inline-block boxes participate in layout.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-4'>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='p-4 rounded border bg-blue-50 dark:bg-blue-950/20'>
            <h4 className='font-semibold mb-2'>Block</h4>
            <div className='space-y-1 text-sm'>
              <p>Starts on new line.</p>
              <p>Expands horizontally by default.</p>
              <p>Respects width, height, vertical margins.</p>
            </div>
          </div>
          <div className='p-4 rounded border bg-red-50 dark:bg-red-950/20'>
            <h4 className='font-semibold mb-2'>Inline</h4>
            <div className='space-y-1 text-sm'>
              <p>Flows within line box.</p>
              <p>Width/height not applied.</p>
              <p>Padding affects line height partially.</p>
            </div>
          </div>
          <div className='p-4 rounded border bg-purple-50 dark:bg-purple-950/20'>
            <h4 className='font-semibold mb-2'>Inline-Block</h4>
            <div className='space-y-1 text-sm'>
              <p>Flows inline but is sized like block.</p>
              <p>Respects width, height, margins.</p>
              <p>Great for badges & interactive controls.</p>
            </div>
          </div>
        </div>
        <p className='text-muted-foreground'>Choosing the correct display context improves semantics, accessibility and responsive alignment.</p>
      </CardContent>
    </Card>

    {/* Block vs Inline in Action */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-3'><Box className='w-6 h-6 text-blue-600' /> Block vs Inline in Action</CardTitle>
        <CardDescription className='text-base'>See how block, inline, and inline-block elements behave with dark mode support</CardDescription>
      </CardHeader>
      <CardContent>
        <FrontendCodePreview
          title="Display Behavior Examples"
          description="Practical demonstration of block, inline, and inline-block elements"
          html={`<div class="container">
  <h1>Display Property Demo</h1>
  
  <!-- Block Elements -->
  <section class="section block-section">
    <h2>Block Elements</h2>
    <div class="box block">Block Element 1</div>
    <div class="box block">Block Element 2</div>
    <div class="box block">Block Element 3</div>
    <p class="note">Each block element starts on a new line and takes full width</p>
  </section>
  
  <!-- Inline Elements -->
  <section class="section inline-section">
    <h2>Inline Elements</h2>
    <p>
      This is a paragraph with 
      <span class="box inline">Inline 1</span> and 
      <span class="box inline">Inline 2</span> and 
      <span class="box inline">Inline 3</span> elements 
      that flow within the text.
    </p>
    <p class="note">Inline elements flow within text without breaking lines</p>
  </section>
  
  <!-- Inline-Block Elements -->
  <section class="section inline-block-section">
    <h2>Inline-Block Elements</h2>
    <span class="box inline-block">IB 1</span>
    <span class="box inline-block">IB 2</span>
    <span class="box inline-block">IB 3</span>
    <span class="box inline-block">IB 4</span>
    <p class="note">Inline-block flows inline but accepts width and height</p>
  </section>
  
  <!-- Mixed Example -->
  <section class="section mixed-section">
    <h2>Mixed Display</h2>
    <div class="box block">Block Container</div>
    <p>
      Text with <span class="box inline">inline</span> and 
      <span class="box inline-block">inline-block</span> elements.
    </p>
  </section>
</div>`}
          css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

.container {
  max-width: 800px;
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
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
  transition: color 0.3s, border-color 0.3s;
}

html.dark h1 {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}

.section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;
}

html.dark .section {
  background: #334155;
}

.section h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #475569;
  transition: color 0.3s;
}

html.dark .section h2 {
  color: #cbd5e1;
}

.box {
  border: 2px solid;
  padding: 8px 12px;
  margin: 6px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
}

.block {
  display: block;
  border-color: #2563eb;
  background: #dbeafe;
  color: #1e40af;
  transition: all 0.3s;
}

html.dark .block {
  border-color: #60a5fa;
  background: #1e3a8a;
  color: #93c5fd;
}

.inline {
  display: inline;
  border-color: #dc2626;
  background: #fee2e2;
  color: #991b1b;
  transition: all 0.3s;
}

html.dark .inline {
  border-color: #f87171;
  background: #7f1d1d;
  color: #fca5a5;
}

.inline-block {
  display: inline-block;
  border-color: #9333ea;
  background: #f3e8ff;
  color: #6b21a8;
  min-width: 80px;
  text-align: center;
  transition: all 0.3s;
}

html.dark .inline-block {
  border-color: #c084fc;
  background: #581c87;
  color: #e9d5ff;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #f1f5f9;
  border-left: 4px solid #64748b;
  font-size: 0.875rem;
  color: #475569;
  border-radius: 4px;
  transition: all 0.3s;
}

html.dark .note {
  background: #1e293b;
  border-left-color: #94a3b8;
  color: #cbd5e1;
}

.block-section {
  border-left: 4px solid #2563eb;
}

html.dark .block-section {
  border-left-color: #60a5fa;
}

.inline-section {
  border-left: 4px solid #dc2626;
}

html.dark .inline-section {
  border-left-color: #f87171;
}

.inline-block-section {
  border-left: 4px solid #9333ea;
}

html.dark .inline-block-section {
  border-left-color: #c084fc;
}

.mixed-section {
  border-left: 4px solid #059669;
}

html.dark .mixed-section {
  border-left-color: #34d399;
}`}
          colorTheme="blue"
          icon={Box}
          previewHeight="700px"
        />
      </CardContent>
    </Card>

    {/* Comparison Table */}
    <Card>
      <CardHeader><CardTitle>Behavior Comparison</CardTitle><CardDescription>Key layout differences at a glance.</CardDescription></CardHeader>
      <CardContent className='overflow-x-auto'>
        <table className='w-full text-sm border-collapse'>
          <thead className='bg-muted'>
            <tr>
              <th className='text-left p-2'>Property</th>
              <th className='text-left p-2'>Block</th>
              <th className='text-left p-2'>Inline</th>
              <th className='text-left p-2'>Inline-Block</th>
            </tr>
          </thead>
          <tbody>
            {[{prop:'Starts new line',block:'Yes',inline:'No',ib:'No'},{prop:'Width/Height apply',block:'Yes',inline:'No',ib:'Yes'},{prop:'Vertical margins',block:'Yes',inline:'No (collapses)',ib:'Yes'},{prop:'Participates in text flow',block:'No',inline:'Yes',ib:'Yes'},{prop:'Good for containers',block:'Sections',inline:'Text fragments',ib:'Small components'},{prop:'Examples',block:'div, p, section',inline:'span, a, strong',ib:'button, input, img'}].map(r=> <tr key={r.prop} className='border-b last:border-0'>
              <td className='p-2 font-medium'>{r.prop}</td>
              <td className='p-2'>{r.block}</td>
              <td className='p-2'>{r.inline}</td>
              <td className='p-2'>{r.ib}</td>
            </tr>)}
          </tbody>
        </table>
      </CardContent>
    </Card>
    {/* Interactive Explorer */}
    <Card>
      <CardHeader><CardTitle className='flex items-center gap-2'><Text className='w-5 h-5 text-primary'/>Element Explorer</CardTitle><CardDescription>Select an element to view its default display and notes.</CardDescription></CardHeader>
      <CardContent className='space-y-4 text-sm'>
        <div className='max-w-sm'>
          <Select value={selected} onValueChange={setSelected}>
            <SelectTrigger aria-label='Choose element'><SelectValue placeholder='Select element'/></SelectTrigger>
            <SelectContent>{elementOptions.map(opt=> <SelectItem key={opt.value} value={opt.value}>{opt.value}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='p-3 rounded border bg-background/50'>
            <h4 className='font-semibold mb-1'>Type</h4>
            <p className='font-mono'>{current.type}</p>
          </div>
          <div className='p-3 rounded border bg-background/50'>
            <h4 className='font-semibold mb-1'>Default Display</h4>
            <p className='font-mono'>{current.defaultDisplay}</p>
          </div>
          <div className='p-3 rounded border bg-background/50'>
            <h4 className='font-semibold mb-1'>Example</h4>
            <code className='font-mono text-xs sm:text-sm bg-muted px-2 py-1 rounded block'>{current.example}</code>
          </div>
        </div>
        <p className='text-muted-foreground'><strong>Notes:</strong> {current.notes}</p>
      </CardContent>
    </Card>
    {/* Attributes & Use Cases */}
    <Card>
      <CardHeader><CardTitle>When to Use Which?</CardTitle><CardDescription>Quick decision checklist.</CardDescription></CardHeader>
      <CardContent className='grid md:grid-cols-3 gap-4 text-sm'>
        <div className='p-4 border rounded bg-blue-50 dark:bg-blue-950/20'>
          <h4 className='font-semibold mb-2'>Choose Block</h4>
          <ul className='list-disc list-inside space-y-1'><li>Grouping larger content</li><li>Semantic sections</li><li>Full-width containers</li><li>Natural vertical stacking</li></ul>
        </div>
        <div className='p-4 border rounded bg-red-50 dark:bg-red-950/20'>
          <h4 className='font-semibold mb-2'>Choose Inline</h4>
          <ul className='list-disc list-inside space-y-1'><li>Styling text fragments</li><li>Inside paragraphs/headings</li><li>Minimal structural impact</li><li>Icons in text flow</li></ul>
        </div>
        <div className='p-4 border rounded bg-purple-50 dark:bg-purple-950/20'>
          <h4 className='font-semibold mb-2'>Choose Inline-Block</h4>
          <ul className='list-disc list-inside space-y-1'><li>Badges & pills needing width</li><li>Buttons aligning with text</li><li>Image + label combos</li><li>Grid-ish row flows</li></ul>
        </div>
      </CardContent>
    </Card>
    {/* Pitfalls */}
    <Card>
      <CardHeader><CardTitle>Common Pitfalls</CardTitle><CardDescription>Avoid layout surprises.</CardDescription></CardHeader>
      <CardContent className='text-sm grid md:grid-cols-2 gap-4'>
        <div className='p-4 rounded border bg-amber-50 dark:bg-amber-900/20'>
          <h4 className='font-semibold mb-2'>Inline Height Myth</h4>
          <p>Setting height on truly inline elements has no effect; use line-height or change display.</p>
        </div>
        <div className='p-4 rounded border bg-rose-50 dark:bg-rose-900/20'>
          <h4 className='font-semibold mb-2'>Unexpected Gaps</h4>
          <p>Inline-block elements render whitespace between them from HTML source. Remove whitespace or use flex.</p>
        </div>
        <div className='p-4 rounded border bg-sky-50 dark:bg-sky-900/20'>
          <h4 className='font-semibold mb-2'>Margin Collapse Misunderstood</h4>
          <p>Inline elements ignore vertical margins; block margins may collapse with parent.</p>
        </div>
        <div className='p-4 rounded border bg-green-50 dark:bg-green-900/20'>
          <h4 className='font-semibold mb-2'>Overusing DIV</h4>
          <p>Prefer semantic tags (header, nav, main, section, article, footer) for structure instead of generic divs.</p>
        </div>
      </CardContent>
    </Card>
    {/* Conversion Examples Playground */}
    <Card>
      <CardHeader><CardTitle>Interactive Playgrounds</CardTitle><CardDescription>Experiment with display properties in live code editors.</CardDescription></CardHeader>
      <CardContent className='space-y-4'>
        <InteractivePlayground
          title="Block vs Inline Playground"
          description="Compare how block and inline elements behave side by side"
          features={[
            'Block Elements',
            'Inline Elements',
            'Inline-Block Elements',
            'Flow Behavior'
          ]}
          buttonText="Open Block vs Inline Playground"
          onLaunchPlayground={openPlayground}
          playgroundData={{
            html: blockInlinePlayground.html,
            css: blockInlinePlayground.css,
            js: blockInlinePlayground.js
          }}
          colorTheme="blue"
        />
        
        <InteractivePlayground
          title="Margins & Height Playground"
          description="Test how margins and height work with different display values"
          features={[
            'Margin Behavior',
            'Height Properties',
            'Block Elements',
            'Inline Elements'
          ]}
          buttonText="Open Margins & Height Playground"
          onLaunchPlayground={openPlayground}
          playgroundData={{
            html: spacingPlayground.html,
            css: spacingPlayground.css,
            js: spacingPlayground.js
          }}
          colorTheme="emerald"
        />
        
        <InteractivePlayground
          title="Display Conversion Playground"
          description="Change display properties to convert between block, inline, and inline-block"
          features={[
            'Display Conversion',
            'DIV to Inline',
            'SPAN to Block',
            'Dynamic Styling'
          ]}
          buttonText="Open Conversion Playground"
          onLaunchPlayground={openPlayground}
          playgroundData={{
            html: conversionPlayground.html,
            css: conversionPlayground.css,
            js: conversionPlayground.js
          }}
          colorTheme="purple"
        />
      </CardContent>
    </Card>
    {/* Live Display Sandbox */}
    <Card>
      <CardHeader>
        <CardTitle>Live Display Sandbox</CardTitle>
        <CardDescription>See block vs inline vs inline-block side by side and experiment interactively.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-6 text-sm'>
        {/* Static Trio Demonstration */}
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='p-4 rounded border bg-blue-50 dark:bg-blue-950/30'>
            <h4 className='font-semibold mb-2'>Block Flow</h4>
            <div className='space-y-2'>
              <div className='demo-box demo-block'>Block A</div>
              <div className='demo-box demo-block'>Block B</div>
              <p className='text-muted-foreground text-xs sm:text-sm'>Each starts on its own new line.</p>
            </div>
          </div>
          <div className='p-4 rounded border bg-red-50 dark:bg-red-950/30'>
            <h4 className='font-semibold mb-2'>Inline Flow</h4>
            <div className='space-y-2'>
              <p className='leading-relaxed'>Text <span className='demo-box demo-inline'>Inline A</span> <span className='demo-box demo-inline'>Inline B</span> continues without line breaks.</p>
              <p className='text-muted-foreground text-xs sm:text-sm'>Width/height ignored; vertical margins ineffective.</p>
            </div>
          </div>
          <div className='p-4 rounded border bg-purple-50 dark:bg-purple-950/30'>
            <h4 className='font-semibold mb-2'>Inline-Block Flow</h4>
            <div className='space-y-2'>
              <div className='flex flex-wrap gap-2'>
                <span className='demo-box demo-inline-block'>IB A</span>
                <span className='demo-box demo-inline-block'>IB B</span>
                <span className='demo-box demo-inline-block'>IB C</span>
              </div>
              <p className='text-muted-foreground text-xs sm:text-sm'>Flows inline yet accepts width / height / margins.</p>
            </div>
          </div>
        </div>
        {/* Interactive Control */}
        <div className='space-y-3'>
          <h4 className='font-semibold'>Try Changing Display</h4>
          <div className='max-w-xs'>
            <Select value={displayMode} onValueChange={(v)=>setDisplayMode(v as any)}>
              <SelectTrigger aria-label='Choose display mode'>
                <SelectValue placeholder='Display mode'/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='block'>block</SelectItem>
                <SelectItem value='inline'>inline</SelectItem>
                <SelectItem value='inline-block'>inline-block</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='border rounded p-4 bg-muted'>
            <div className='flex items-center gap-2 mb-3'>
              <p className='text-xs sm:text-sm'>Current display: <code className='font-mono px-2 py-1 bg-background rounded font-bold'>{displayMode}</code></p>
              {displayMode === 'block' && <span className='text-xs text-blue-600 dark:text-blue-400'>⬜ Takes full width, stacks vertically</span>}
              {displayMode === 'inline' && <span className='text-xs text-red-600 dark:text-red-400'>➡️ Flows with text, ignores width/height</span>}
              {displayMode === 'inline-block' && <span className='text-xs text-purple-600 dark:text-purple-400'>🔲 Flows inline but respects dimensions</span>}
            </div>
            <div className='grid sm:grid-cols-2 gap-4 mb-4'>
              <div className='space-y-2'>
                <label className='font-semibold text-xs sm:text-sm'>Width ({boxWidth}px){displayMode==='inline' && ' (ignored for inline)'} </label>
                <Slider value={[boxWidth]} min={80} max={320} step={10} onValueChange={v=>setBoxWidth(v[0])} disabled={displayMode==='inline'} />
              </div>
              <div className='space-y-2'>
                <label className='font-semibold text-xs sm:text-sm'>Line Height ({lineHeight.toFixed(2)})</label>
                <Slider value={[lineHeight]} min={1} max={2.4} step={0.1} onValueChange={v=>setLineHeight(Number(v[0]))} />
              </div>
              <div className='flex items-center gap-2'>
                <Switch checked={showBorder} onCheckedChange={setShowBorder} id='borderSwitch'/>
                <label htmlFor='borderSwitch' className='text-xs sm:text-sm'>Border</label>
              </div>
              <div className='flex items-center gap-2'>
                <Switch checked={wrap} onCheckedChange={setWrap} id='wrapSwitch'/>
                <label htmlFor='wrapSwitch' className='text-xs sm:text-sm'>Wrap Text</label>
              </div>
              <div className='sm:col-span-2 space-y-2'>
                <label className='font-semibold text-xs sm:text-sm' htmlFor='sampleInput'>Content</label>
                <Input id='sampleInput' value={sampleText} onChange={e=>setSampleText(e.target.value)} placeholder='Sample text'/>
              </div>
            </div>
            <div className={'preview-container font-sans p-4 border-2 rounded-lg '+(wrap?'':'whitespace-nowrap overflow-x-auto')} style={{
              background: 'var(--muted)',
              minHeight: '120px',
              display: 'flex',
              alignItems: displayMode === 'block' ? 'flex-start' : 'center',
              flexDirection: displayMode === 'block' ? 'column' : 'row'
            }}>
              <div className='sample-wrapper' style={{
                display: displayMode === 'block' ? 'block' : 'flex',
                alignItems: 'center',
                width: '100%'
              }}>
                <div className='interactive-sample sample' style={computedStyle} key={displayMode}>
                  {sampleText}
                </div>
                <span className={'adjacent-text text-muted-foreground ' + (displayMode === 'block' ? 'mt-2 block' : 'ml-2 inline')}>Adjacent text to show flow.</span>
              </div>
            </div>
            <p className='mt-3 text-muted-foreground text-xs sm:text-sm'>Adjust width (ignored in pure inline), line-height, border and wrapping to see layout changes instantly.</p>
          </div>
          <div className='bg-background/50 rounded p-3 text-xs sm:text-sm font-mono whitespace-pre overflow-auto border'>
{`<!-- Equivalent HTML representation -->\n<div class="sample" style="display:${displayMode};${displayMode!=='inline'?` min-width:${boxWidth}px;`:''} line-height:${lineHeight};${showBorder?' border:2px solid currentColor;':''}">${sampleText}</div> Adjacent text\n\n${cssSnippet}`}
          </div>
        </div>
        {/* Embedded Styles */}
        <style>{`
          .demo-box{border:2px solid #94a3b8;background:#f1f5f9;padding:6px;font-size:12px;border-radius:4px}
          .demo-block{display:block;margin:4px 0}
          .demo-inline{display:inline;margin:0}
          .demo-inline-block{display:inline-block;margin:0 4px}
          .interactive-sample{
            transition:all .3s ease;
            background:var(--accent);
            color:var(--accent-foreground);
          }
          .sample{
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .preview-container{
            transition: all 0.3s ease;
          }
        `}</style>
      </CardContent>
    </Card>
  </div>;
}
