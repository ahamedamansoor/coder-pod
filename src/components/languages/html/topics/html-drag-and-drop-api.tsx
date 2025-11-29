'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Move, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlDragAndDropApiProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<div class='drop-zone'>Drop Here</div>
<div draggable='true' id='drag' class='drag-item'>Drag Me</div>`,css:`.drop-zone{border:2px dashed #2563eb;padding:2rem;border-radius:8px;margin-bottom:1rem;font-family:system-ui}
.drag-item{background:#2563eb;color:#fff;padding:1rem;border-radius:6px;width:120px;text-align:center;cursor:grab}`,js:`const dz=document.querySelector('.drop-zone');const item=document.getElementById('drag');item.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain','drag'));dz.addEventListener('dragover',e=>e.preventDefault());dz.addEventListener('drop',e=>{e.preventDefault();dz.textContent='Dropped!';});`};
export default function HtmlDragAndDropApi({ onOpenWebPlayground }: HtmlDragAndDropApiProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Drag & Drop API' description='Native drag interactions' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Events</CardTitle><CardDescription><code>dragstart</code>, <code>dragover</code>, <code>drop</code>.</CardDescription></CardHeader>
      <CardContent className='text-sm'>Use <code>dataTransfer</code> to carry payload.</CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Basic drag-drop example.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

