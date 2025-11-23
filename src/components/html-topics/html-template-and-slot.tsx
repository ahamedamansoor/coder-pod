'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, LayoutTemplate, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlTemplateAndSlotProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<template id='card-tpl'>
  <div class='card'>
    <h3></h3>
    <p></p>
  </div>
</template>
<div id='host'></div>`,css:`.card{border:1px solid #ccc;padding:1rem;border-radius:8px;margin:.5rem 0;font-family:system-ui;}`,js:`const tpl=document.getElementById('card-tpl');const host=document.getElementById('host');['Alpha','Beta'].forEach(t=>{const n=tpl.content.cloneNode(true);n.querySelector('h3').textContent=t;n.querySelector('p').textContent='Generated from template';host.appendChild(n);});`};
export default function HtmlTemplateAndSlot({ onOpenWebPlayground }: HtmlTemplateAndSlotProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Template & Slot' description='Declarative markup fragments & shadow DOM composition' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>&lt;template&gt;</CardTitle><CardDescription>Store inert markup for later cloning.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <p>Content inside <code>&lt;template&gt;</code> is not rendered until cloned via JS.</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Instantiate template cards.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

