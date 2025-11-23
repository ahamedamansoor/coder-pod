'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, MapPin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlGeolocationApiProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<button id='loc'>Get Location</button><pre id='out'></pre>`,css:`body{font-family:system-ui;padding:1rem}pre{background:#f1f5f9;padding:.75rem;border-radius:6px}`,js:`document.getElementById('loc').onclick=()=>navigator.geolocation.getCurrentPosition(p=>{document.getElementById('out').textContent=p.coords.latitude+','+p.coords.longitude;},e=>{document.getElementById('out').textContent=e.message;});`};
export default function HtmlGeolocationApi({ onOpenWebPlayground }: HtmlGeolocationApiProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Geolocation API' description='Access device position (with permission)' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Usage</CardTitle><CardDescription><code>navigator.geolocation.getCurrentPosition</code>.</CardDescription></CardHeader>
      <CardContent className='text-sm'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Requires user permission</li>
          <li>Handle errors & timeouts</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Request current coordinates.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

