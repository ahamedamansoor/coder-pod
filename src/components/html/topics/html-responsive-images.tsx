'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Image, Play, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlResponsiveImagesProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<picture>
  <source srcset='hero-800.webp' type='image/webp'>
  <source srcset='hero-800.jpg' type='image/jpeg'>
  <img src='hero-400.jpg' alt='Mountain landscape' width='100%' loading='lazy'>
</picture>`,css:`body{font-family:system-ui;padding:1rem;}picture,img{max-width:100%;display:block;border-radius:8px;}`,js:''};
export default function HtmlResponsiveImages({ onOpenWebPlayground }: HtmlResponsiveImagesProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Responsive Images' description='Serving the right image for every device' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Techniques</CardTitle><CardDescription><code>&lt;img srcset sizes&gt;</code> & <code>&lt;picture&gt;</code> element.</CardDescription></CardHeader>
      <CardContent className='grid md:grid-cols-2 gap-6 text-sm'>
        <div>
          <h4 className='font-semibold mb-1'>srcset & sizes</h4>
          <p>Let browser pick best candidate based on viewport + density.</p>
          <pre className='text-xs bg-muted p-2 rounded overflow-x-auto'>{`<img src='small.jpg' srcset='small.jpg 400w, medium.jpg 800w, large.jpg 1200w' sizes='(max-width:600px) 100vw, 50vw' alt='Sample'>`}</pre>
        </div>
        <div>
          <h4 className='font-semibold mb-1'>&lt;picture&gt; Art Direction</h4>
          <p>Serve different crops or formats based on media queries.</p>
          <ul className='list-disc list-inside space-y-1 mt-2'>
            <li>Use <code>&lt;source media&gt;</code> for breakpoints</li>
            <li>Prefer modern formats (<code>webp</code>, <code>avif</code>)</li>
            <li>Add descriptive <code>alt</code> text</li>
          </ul>
        </div>
      </CardContent>
    </Card>
    <Card className='border-primary bg-primary/5'>
      <CardHeader><CardTitle className='text-primary flex items-center gap-2'><Cpu className='w-4 h-4'/>Performance Tips</CardTitle></CardHeader>
      <CardContent className='text-xs space-y-1'>
        <ul className='list-disc list-inside'>
          <li>Lazy load below-the-fold images (<code>loading='lazy'</code>).</li>
          <li>Compress & optimize dimensions server-side.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Open a minimal responsive example.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button></CardContent>
    </Card>
  </div>;
}

