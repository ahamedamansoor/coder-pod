'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, MonitorSmartphone, Shield, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlIframesProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo = { html:`<iframe title='Example' src='https://example.com' width='100%' height='180' loading='lazy'></iframe>`, css:`iframe{border:1px solid #ccc;border-radius:8px;}`, js:''};
export default function HtmlIframes({ onOpenWebPlayground }: HtmlIframesProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='HTML Iframes' description='Embedding external documents securely' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Core Attributes</CardTitle><CardDescription>Control display & security.</CardDescription></CardHeader>
      <CardContent className='text-sm grid md:grid-cols-2 gap-6'>
        <ul className='list-disc list-inside space-y-1'>
          <li><code>src</code> resource URL</li>
          <li><code>title</code> required for accessibility</li>
          <li><code>loading="lazy"</code> defers offscreen frames</li>
          <li><code>sandbox</code> restricts capabilities</li>
          <li><code>allow</code> fine-grained permission (e.g. camera)</li>
        </ul>
        <div className='space-y-2'>
          <h4 className='font-semibold flex items-center gap-2'><Shield className='w-4 h-4 text-primary'/>Sandbox Flags</h4>
          <p>Add <code>sandbox</code> to isolate content; selectively enable features: <code>allow-scripts</code>, <code>allow-forms</code>, <code>allow-popups</code>.</p>
        </div>
      </CardContent>
    </Card>
    <Card className='border-primary bg-primary/5'>
      <CardHeader><CardTitle className='text-primary flex items-center gap-2'><MonitorSmartphone className='w-4 h-4'/>Responsive Considerations</CardTitle></CardHeader>
      <CardContent className='text-xs space-y-1'>
        <ul className='list-disc list-inside'>
          <li>Wrap in a container with aspect-ratio (CSS) for videos.</li>
          <li>Use <code>loading="lazy"</code> to improve performance.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Open a minimal iframe demo.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

