'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Code, Play, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlMicrodataStructuredDataProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<div itemscope itemtype='https://schema.org/Movie'>
  <h1 itemprop='name'>Avatar</h1>
  <p>Directed by: <span itemprop='director'>James Cameron</span></p>
  <p>Genre: <span itemprop='genre'>Science Fiction</span></p>
  <a href='https://www.imdb.com/title/tt0499549/' itemprop='url'>IMDb Page</a>
</div>`,css:`div[itemscope]{border:1px solid #ccc;padding:1rem;border-radius:8px;background:#f9fafb;font-family:system-ui}`,js:''};
export default function HtmlMicrodataStructuredData({ onOpenWebPlayground }: HtmlMicrodataStructuredDataProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Microdata & Structured Data' description='Enhancing semantic richness for search engines' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Concept</CardTitle><CardDescription>Add machine-readable semantics directly to markup.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-2'>
        <p><code>itemscope</code> starts a new item; <code>itemtype</code> points to vocabulary; <code>itemprop</code> names properties.</p>
      </CardContent>
    </Card>
    <Card className='border-primary bg-primary/5'>
      <CardHeader><CardTitle className='text-primary'>JSON-LD Preferred</CardTitle></CardHeader>
      <CardContent className='text-xs'>Place a <code>&lt;script type='application/ld+json'&gt;</code> block in head for maintainable structure.</CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Inspect movie microdata.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Example</Button></CardContent>
    </Card>
  </div>;
}

export {};
