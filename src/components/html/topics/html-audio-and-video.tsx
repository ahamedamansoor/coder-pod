'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Play, File, Video, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';

interface HtmlAudioAndVideoProps { onOpenWebPlayground?: (html:string, css:string, js:string)=>void }

const demo = {
  html: `<h2>HTML Media Elements</h2>
<audio controls>
  <source src="demo-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<video width="320" height="180" controls poster="poster.png">
  <source src="demo-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
  css: `body { font-family: system-ui; padding:1rem; display:grid; gap:1.5rem; }
video, audio { max-width:100%; }`,
  js: ''
};

export default function HtmlAudioAndVideo({ onOpenWebPlayground }: HtmlAudioAndVideoProps) {
  return (
    <div className='space-y-8'>
      <PageHeader icon={File} category='HTML Basics' title='HTML Audio & Video' description='Embedding and controlling media content' colorTheme='blue' />
      <Card>
        <CardHeader>
          <CardTitle>Core Elements</CardTitle>
          <CardDescription>Use <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> for native playback without plugins.</CardDescription>
        </CardHeader>
        <CardContent className='grid md:grid-cols-2 gap-6 text-sm'>
          <div className='space-y-2'>
            <h4 className='font-semibold flex items-center gap-2'><Music className='w-4 h-4 text-primary'/>Audio</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>controls</code> renders playback UI</li>
              <li><code>autoplay</code> starts automatically (avoid for UX)</li>
              <li><code>loop</code> restarts after end</li>
              <li><code>muted</code> starts silent (required for autoplay)</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4 className='font-semibold flex items-center gap-2'><Video className='w-4 h-4 text-primary'/>Video</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>poster</code> placeholder image before play</li>
              <li><code>preload</code> hints buffering strategy</li>
              <li><code>playsinline</code> prevent fullscreen on mobile</li>
              <li><code>track</code> adds captions/subtitles</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Tips</CardTitle>
          <CardDescription>Make media usable for all users.</CardDescription>
        </CardHeader>
        <CardContent className='text-sm space-y-2'>
          <ul className='list-disc list-inside space-y-1'>
            <li>Provide <code>&lt;track kind="captions"&gt;</code> for spoken dialogue.</li>
            <li>Offer transcripts for audio-only content.</li>
            <li>Avoid autoplaying audio—disruptive for screen reader users.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className='border-primary bg-primary/5'>
        <CardHeader>
          <CardTitle className='text-primary'>Try It</CardTitle>
          <CardDescription>Open a minimal audio/video example.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={()=>onOpenWebPlayground?.(demo.html,demo.css,demo.js)}><Play className='mr-2 w-4 h-4'/>Open Playground</Button>
        </CardContent>
      </Card>
    </div>
  );
}

