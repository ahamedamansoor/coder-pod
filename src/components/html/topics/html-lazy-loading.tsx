'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Timer, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlLazyLoadingProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<img src='large.jpg' loading='lazy' alt='Large scenic image' width='600'>`,css:`img{max-width:100%;border-radius:8px;}`,js:''};
export default function HtmlLazyLoading({ onOpenWebPlayground }: HtmlLazyLoadingProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Lazy Loading' description='Deferring offscreen resource loading' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Images</CardTitle><CardDescription>Use <code>loading='lazy'</code> for non-critical imagery.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Reduces initial bandwidth</li>
          <li>Improves Core Web Vitals (LCP)</li>
          <li>Avoid on above-the-fold hero image</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Open a minimal lazy demo.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

