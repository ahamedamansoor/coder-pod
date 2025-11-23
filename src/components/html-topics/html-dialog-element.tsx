'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, MessageSquare, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlDialogElementProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<button id='open'>Open Dialog</button>
<dialog id='dlg'>
  <form method='dialog'>
    <p><strong>Hello!</strong> I am a native dialog.</p>
    <button>Close</button>
  </form>
</dialog>`,css:`dialog{border:1px solid #ccc;border-radius:8px;padding:1rem;}`,js:`const d=document.getElementById('dlg');document.getElementById('open').onclick=()=>d.showModal();`};
export default function HtmlDialogElement({ onOpenWebPlayground }: HtmlDialogElementProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Dialog Element' description='Accessible modal & popover interface' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Usage</CardTitle><CardDescription>Use <code>dialog.showModal()</code> for modal behavior.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Wrap interactive content inside <code>&lt;form method='dialog'&gt;</code> to enable auto-close submission.</li>
          <li>Call <code>close()</code> or submit form to dismiss.</li>
          <li>Polyfill needed in very old browsers.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Open native dialog example.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

