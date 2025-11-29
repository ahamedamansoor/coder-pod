'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Network, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlFetchApiProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<button id='btn'>Load Data</button><pre id='out'></pre>`,css:`body{font-family:system-ui;padding:1rem}pre{background:#f1f5f9;padding:.75rem;border-radius:6px}`,js:`document.getElementById('btn').onclick=async()=>{const r=await fetch('https://jsonplaceholder.typicode.com/todos/1');document.getElementById('out').textContent=await r.text();};`};
export default function HtmlFetchApi({ onOpenWebPlayground }: HtmlFetchApiProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Fetch API' description='Promise-based network requests' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Basics</CardTitle><CardDescription>Use <code>fetch(url)</code> returning a promise.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <pre className='text-xs bg-muted p-2 rounded'>{`fetch('/api').then(r=>r.json()).then(data=>console.log(data));`}</pre>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Fetch demo JSON.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

