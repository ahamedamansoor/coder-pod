'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, Edit, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlContentEditableProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<div contenteditable='true' class='editable'>Edit this text...</div>`,css:`.editable{border:1px dashed #64748b;padding:1rem;border-radius:6px;font-family:system-ui}`,js:''};
export default function HtmlContentEditable({ onOpenWebPlayground }: HtmlContentEditableProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='contenteditable' description='Inline editing without JavaScript frameworks' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Usage</CardTitle><CardDescription>Add <code>contenteditable</code> to any element to make text editable.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Persist changes manually (e.g. save button).</li>
          <li>Consider accessibility: announce editing state.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Try live editing.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

