'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Database, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlDataAttributesProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<button id='btn' data-track='cta' data-theme='primary'>Click Me</button>
<pre id='out'></pre>`,css:`body{font-family:system-ui;padding:1rem;}button{padding:.75rem 1rem;border-radius:6px;background:#2563eb;color:#fff;border:none}`,js:`document.getElementById('btn').onclick=function(){const o=document.getElementById('out');o.textContent='data-track='+this.dataset.track+'\n'+'data-theme='+this.dataset.theme};`};
export default function HtmlDataAttributes({ onOpenWebPlayground }: HtmlDataAttributesProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Data Attributes' description='Embedding custom metadata in elements' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Syntax</CardTitle><CardDescription><code>data-*</code> attributes accessible via <code>element.dataset</code>.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Do not store large JSON blobs—keep lightweight.</li>
          <li>Great for wiring behavior hints (<code>data-action</code>).</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Inspect dataset values.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

