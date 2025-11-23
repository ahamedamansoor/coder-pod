'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '../generic-page-header';
import { File, Share2, FileJson, Image, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HtmlMetaTagsAndSeoProps { onOpenWebPlayground?: (h:string,c:string,j:string)=>void }
const demo={html:`<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1.0'><title>Awesome Web Page | My Site</title><meta name='description' content='An awesome web page about HTML, CSS, and JavaScript.'><meta name='keywords' content='HTML, CSS, JavaScript, Web Development'><meta name='author' content='Coder Pod'><link rel='icon' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>'><meta property='og:type' content='website'><meta property='og:url' content='https://example.com/'><meta property='og:title' content='Awesome Web Page | My Site'><meta property='og:description' content='An awesome web page about HTML, CSS, and JavaScript.'><meta property='og:image' content='https://picsum.photos/seed/og-image/1200/630'><meta property='twitter:card' content='summary_large_image'><meta property='twitter:url' content='https://example.com/'><meta property='twitter:title' content='Awesome Web Page | My Site'><meta property='twitter:description' content='An awesome web page about HTML, CSS, and JavaScript.'><meta property='twitter:image' content='https://picsum.photos/seed/twitter-image/1200/630'></head><body><h1>Inspect Head</h1><p>SEO and social tags demo.</p></body></html>`,css:`body{font-family:system-ui;padding:2rem}`,js:''};
export default function HtmlMetaTagsAndSeo({ onOpenWebPlayground }: HtmlMetaTagsAndSeoProps){
  return <div className='space-y-8'>
    <PageHeader icon={File} category='HTML Basics' title='Meta Tags & SEO' description='Helping search engines & social platforms understand your page' colorTheme='blue'/>
    <Card>
      <CardHeader><CardTitle>Essential Tags</CardTitle><CardDescription>Every page should define basic metadata.</CardDescription></CardHeader>
      <CardContent className='text-sm space-y-1'>
        <ul className='list-disc list-inside'>
          <li><code>&lt;title&gt;</code> concise keyword rich title</li>
          <li><code>&lt;meta name='description'&gt;</code> ~155 chars summary</li>
          <li><code>&lt;meta name='viewport'&gt;</code> responsive scaling</li>
          <li><code>&lt;link rel='icon'&gt;</code> brand identity</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle className='flex items-center gap-2'><Share2 className='w-4 h-4'/>Open Graph & Twitter</CardTitle><CardDescription>Control share previews for major platforms.</CardDescription></CardHeader>
      <CardContent className='grid md:grid-cols-2 gap-4 text-xs'>
        <div className='bg-muted p-3 rounded'>
          <h4 className='font-semibold flex items-center gap-2 mb-1'><FileJson className='w-3 h-3'/>Open Graph</h4>
          <p>Use <code>og:title</code>, <code>og:description</code>, <code>og:image</code>, <code>og:url</code>.</p>
        </div>
        <div className='bg-muted p-3 rounded'>
          <h4 className='font-semibold flex items-center gap-2 mb-1'><Image className='w-3 h-3'/>Twitter Card</h4>
          <p>Set <code>twitter:card</code> and corresponding title/description/image.</p>
        </div>
      </CardContent>
    </Card>
    <Card className='border-primary bg-primary/5'>
      <CardHeader><CardTitle className='text-primary'>Best Practices</CardTitle></CardHeader>
      <CardContent className='text-xs space-y-1'>
        <ul className='list-disc list-inside'>
          <li>Unique title & description per page.</li>
          <li>Use HTTPS absolute URLs for images.</li>
          <li>Prefer descriptive alt text for preview images.</li>
        </ul>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Playground</CardTitle><CardDescription>View a full <code>&lt;head&gt;</code> block.</CardDescription></CardHeader>
      <CardContent><Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Example</Button></CardContent>
    </Card>
  </div>;
}

export function HtmlMetaTagsAndSeoComponent(props: HtmlMetaTagsAndSeoProps) { return <HtmlMetaTagsAndSeo {...props} /> }
