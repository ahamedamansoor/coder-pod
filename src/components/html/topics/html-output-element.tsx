'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Calculator, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlOutputElementProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<form oninput='sum.value = parseInt(a.value)+parseInt(b.value)'>
<input type='number' id='a' value='2'> + <input type='number' id='b' value='3'> = <output name='sum'>5</output>
</form>`,css:`form{font-family:system-ui;padding:1rem}input{width:60px}`,js:''};
export default function HtmlOutputElement({ onOpenWebPlayground }: HtmlOutputElementProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Output Element' description='Displaying live calculation results' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Usage</CardTitle><CardDescription>Tie <code>&lt;output&gt;</code> to form inputs via <code>oninput</code>.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <p>Use <code>name</code> for form association; can reference in constraint validation.</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Live summation.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

