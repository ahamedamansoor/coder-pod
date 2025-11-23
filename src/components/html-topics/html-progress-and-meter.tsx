'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, Activity, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlProgressAndMeterProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<progress value='40' max='100'></progress>
<meter value='0.6'>60%</meter>`,css:`progress,meter{width:200px;display:block;margin:1rem 0}`,js:''};
export default function HtmlProgressAndMeter({ onOpenWebPlayground }: HtmlProgressAndMeterProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Progress & Meter' description='Displaying task completion and scalar values' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Differences</CardTitle><CardDescription><code>&lt;progress&gt;</code> for tasks; <code>&lt;meter&gt;</code> for known ranges.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <p>Add accessible text for context (aria-label or surrounding description).</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>View native elements.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

