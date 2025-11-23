'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, PenTool, Paintbrush, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlSvgAndCanvasProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<svg width='120' height='120' viewBox='0 0 120 120'>
  <circle cx='60' cy='60' r='50' fill='#2563eb'/>
  <text x='60' y='66' font-size='28' text-anchor='middle' fill='#fff'>SVG</text>
</svg>
<canvas id='c' width='120' height='120'></canvas>`,css:`svg,canvas{margin:1rem;border-radius:8px;background:#f1f5f9;font-family:system-ui}`,js:`const ctx=document.getElementById('c').getContext('2d');ctx.fillStyle='#10b981';ctx.fillRect(10,10,100,100);ctx.fillStyle='#fff';ctx.font='24px system-ui';ctx.fillText('Canvas',15,70);`};
export default function HtmlSvgAndCanvas({ onOpenWebPlayground }: HtmlSvgAndCanvasProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='SVG & Canvas' description='Vector vs pixel drawing surfaces' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Differences</CardTitle><CardDescription>SVG = DOM based; Canvas = immediate mode bitmap.</CardDescription></CardHeader>
      <CardContent className='text-sm grid md:grid-cols-2 gap-4'>
        <ul className='list-disc list-inside space-y-1'>
          <li>SVG: accessible elements, scalable without loss.</li>
          <li>SVG: style with CSS, animate with SMIL/tween libs.</li>
        </ul>
        <ul className='list-disc list-inside space-y-1'>
          <li>Canvas: fast pixel operations.</li>
          <li>Canvas: manual redraw; not inherently accessible.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Render basic shapes.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

