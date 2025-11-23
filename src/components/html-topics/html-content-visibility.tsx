'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, EyeOff, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlContentVisibilityProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<div class='section'>Visible section</div>
<div class='section cv'>Heavy offscreen content</div>`,css:`.section{height:120px;margin:1rem 0;background:#e2e8f0;padding:1rem;border-radius:8px;font-family:system-ui}
.cv{content-visibility:auto;contain-intrinsic-size:120px}`,js:''};
export default function HtmlContentVisibility({ onOpenWebPlayground }: HtmlContentVisibilityProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='content-visibility' description='Boost rendering performance for offscreen content' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Properties</CardTitle><CardDescription>Used via CSS to skip rendering work until scrolled into view.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <p><code>content-visibility:auto</code> + <code>contain-intrinsic-size</code> reserves space.</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Scroll to see effect (needs more content in real demo).</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

