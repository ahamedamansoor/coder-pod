'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, ListChecks, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlDetailsAndSummaryProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<details open>\n  <summary>Accessible Disclosure</summary>\n  <p>This content is expanded by default using the 'open' attribute.</p>\n</details>\n<details>\n  <summary>Another Item</summary>\n  <p>Hidden until clicked. Great for FAQs.</p>\n</details>`,css:`body{font-family:system-ui;padding:1rem}details{border:1px solid #cbd5e1;padding:.5rem 1rem;margin:.5rem 0;border-radius:8px;background:#f8fafc}summary{cursor:pointer;font-weight:600}details[open]{background:#e0f2fe;border-color:#38bdf8}`,js:`// No JS needed for basic toggle behavior.`};
export default function HtmlDetailsAndSummary({ onOpenWebPlayground }: HtmlDetailsAndSummaryProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Details & Summary Elements' description='Native, accessible disclosure widgets without JavaScript' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Purpose</CardTitle><CardDescription>Simplify collapsible sections such as FAQs or advanced settings.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li><code>&lt;details&gt;</code> container manages state.</li>
          <li><code>&lt;summary&gt;</code> first child acts as toggle handle.</li>
          <li><code>open</code> attribute sets initial expanded state.</li>
          <li>Keyboard accessible & announces state to assistive tech.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Styling & Customization</CardTitle><CardDescription>Use attribute selectors & pseudo-elements to refine UX.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <pre className='text-xs bg-muted p-3 rounded overflow-x-auto whitespace-pre'>{`details[open] > summary { color: hsl(var(--primary)); }\nsummary::-webkit-details-marker { display: none; }`}</pre>
        <p>Hide default marker for custom icons; ensure focus outline remains for accessibility.</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle className='flex items-center gap-2'><ListChecks className='w-4 h-4 text-primary'/>Best Practices</CardTitle></CardHeader>
      <CardContent className='text-xs'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Use concise summaries; they act like button labels.</li>
          <li>Avoid nesting interactive controls directly in <code>&lt;summary&gt;</code>.</li>
          <li>Provide semantic grouping (e.g. wrap related details in a section).</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Open a minimal interactive example.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Demo</Button></CardContent>
    </Card>
  </div>;
}

export const __HTML_DETAILS_AND_SUMMARY__ = true;
