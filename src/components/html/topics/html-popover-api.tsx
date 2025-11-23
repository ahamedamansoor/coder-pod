'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Info, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlPopoverApiProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<button popovertarget='info' popovertargetaction='show'>Show Info</button>
<div id='info' popover>Popover content here</div>`,css:`[popover]{border:1px solid #ccc;padding:1rem;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.15);}`,js:''};
export default function HtmlPopoverApi({ onOpenWebPlayground }: HtmlPopoverApiProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Popover API' description='Declarative lightweight popovers' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Key Attributes</CardTitle><CardDescription>Enable interactive overlays without JS.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li><code>popover</code> attribute on target element</li>
          <li><code>popovertarget</code> & <code>popovertargetaction</code> on triggering element</li>
          <li>Automatic positioning & escape key support</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Try native popover.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

