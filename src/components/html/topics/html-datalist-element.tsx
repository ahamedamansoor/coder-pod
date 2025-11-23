'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, List, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlDatalistElementProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<label for='browser'>Browser:</label>
<input list='browsers' id='browser'>
<datalist id='browsers'>
  <option value='Chrome'>
  <option value='Firefox'>
  <option value='Safari'>
  <option value='Edge'>
</datalist>`,css:`body{font-family:system-ui;padding:1rem}input{padding:.5rem;width:220px}`,js:''};
export default function HtmlDatalistElement({ onOpenWebPlayground }: HtmlDatalistElementProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Datalist Element' description='Autocomplete suggestions for inputs' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Difference vs Select</CardTitle><CardDescription>User can still enter free-form values.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <p>Connect via input <code>list</code> attribute matching datalist <code>id</code>.</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Try suggestions.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

