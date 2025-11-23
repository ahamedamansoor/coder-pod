'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { Box, Text, Play, File } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlBlockVsInlineProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<h2>Block vs Inline</h2>
<div class='box block'>Block 1</div>
<div class='box block'>Block 2</div>
<p>This line has <span class='box inline'>Inline 1</span> and <span class='box inline'>Inline 2</span>.</p>
<p><span class='box inline-block'>Inline-Block 1</span> <span class='box inline-block'>Inline-Block 2</span></p>`,css:`body{font-family:system-ui} .box{border:2px solid;padding:8px;margin:6px} .block{display:block;border-color:#2563eb;background:#2563eb11} .inline{display:inline;border-color:#dc2626;background:#dc262611} .inline-block{display:inline-block;border-color:#9333ea;background:#9333ea11}`,js:''};
export default function HtmlBlockVsInline({ onOpenWebPlayground }: HtmlBlockVsInlineProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Block vs Inline Elements' description='Understanding default display behaviors' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Block Elements</CardTitle><CardDescription>Start on a new line and take full width by default.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Respect width & height</li>
          <li>Accept vertical margins</li>
          <li>Examples: <code>div</code>, <code>p</code>, <code>section</code>, <code>h1</code></li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Inline Elements</CardTitle><CardDescription>Flow within text without forcing line breaks.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Ignore width/height settings</li>
          <li>No top/bottom margin effect</li>
          <li>Examples: <code>span</code>, <code>a</code>, <code>strong</code>, <code>em</code></li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Inline-Block</CardTitle><CardDescription>Combines inline flow with block sizing.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <p>Useful for badges, chips, and icons needing dimensions while staying on a text line.</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Compare element behaviors.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Demo</Button></CardContent>
    </Card>
  </div>;
}
