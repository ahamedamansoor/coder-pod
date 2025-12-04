'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Subtitles, CheckCircle, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlVideoSubtitlesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const encodeVtt = (content: string) => `data:text/vtt;charset=utf-8,${encodeURIComponent(content)}`;

const englishVtt = encodeVtt(`WEBVTT

00:00:00.000 --> 00:00:02.000
Welcome to our video!

00:00:02.000 --> 00:00:04.500
This is the first subtitle.

00:00:04.500 --> 00:00:07.000
Each subtitle has a time code.`);

const captionsVtt = encodeVtt(`WEBVTT

00:00:00.000 --> 00:00:02.000
[Narrator] Welcome to the demo video.

00:00:02.000 --> 00:00:04.500
Captions describe every sound and dialogue.

00:00:04.500 --> 00:00:07.000
Ready for accessible storytelling.`);

const spanishVtt = encodeVtt(`WEBVTT

00:00:00.000 --> 00:00:02.000
Bienvenidos al video.

00:00:02.000 --> 00:00:04.500
Explora subtítulos en español.

00:00:04.500 --> 00:00:07.000
Cada línea tiene un código de tiempo.`);

const frenchVtt = encodeVtt(`WEBVTT

00:00:00.000 --> 00:00:02.000
Bienvenue dans la vidéo.

00:00:02.000 --> 00:00:04.500
Choisissez les sous-titres en français.

00:00:04.500 --> 00:00:07.000
Chaque sous-titre indique les temps.`);

const descriptionsVtt = encodeVtt(`WEBVTT

00:00:00.000 --> 00:00:02.000
The camera pans over a bright meadow.

00:00:02.000 --> 00:00:04.500
Gentle breeze rustles through tall grass.

00:00:04.500 --> 00:00:07.000
Soft chimes signal the end of the intro.`);

const videoSubtitlesExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video with Captions & Subtitles</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); margin: 0; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    h2 { color: #1e293b; text-align: center; margin-bottom: 2rem; }
    @media (prefers-color-scheme: dark) { h2 { color: #f1f5f9; } }
    .video-section { background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-left: 4px solid #06b6d4; }
    @media (prefers-color-scheme: dark) { .video-section { background: #1e293b; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); } }
    .video-section h3 { color: #06b6d4; margin-top: 0; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { .video-section h3 { color: #22d3ee; } }
    .video-player { width: 100%; max-width: 500px; height: auto; border-radius: 8px; background: #000; display: block; transition: all 0.3s; }
    .video-player:hover { box-shadow: 0 4px 12px rgba(6, 182, 212, 0.25); }
    .info { color: #6b7280; font-size: 0.9rem; margin: 0.75rem 0 0; padding: 0.75rem 1rem; background: #f0f9fa; border-radius: 6px; border-left: 3px solid #06b6d4; }
    @media (prefers-color-scheme: dark) { .info { background: #164e63; color: #67e8f9; border-left-color: #06b6d4; } }
    .vtt-example { background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-left: 4px solid #8b5cf6; }
    @media (prefers-color-scheme: dark) { .vtt-example { background: #1e293b; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); } }
    .vtt-example h3 { color: #8b5cf6; margin-top: 0; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { .vtt-example h3 { color: #d8b4fe; } }
    .code-block { background: #1f2937; color: #f3f4f6; padding: 1rem; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; line-height: 1.4; }
    @media (prefers-color-scheme: dark) { .code-block { background: #0f172a; color: #e2e8f0; } }
    ::cue { background: rgba(0, 0, 0, 0.8); color: white; font-size: 14px; }
  </style>
</head>
<body>
<h2>🎬 Video with Captions & Subtitles</h2>

<div class="video-section">
  <h3>1. Video with Subtitles</h3>
  <video width="500" height="300" controls class="video-player" poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    <track kind="subtitles" src="${englishVtt}" srclang="en" label="English">
    Your browser does not support the video tag.
  </video>
  <p class="info">📝 Click CC button to toggle subtitles</p>
</div>

<div class="video-section">
  <h3>2. Video with Captions (Accessibility)</h3>
  <video width="500" height="300" controls class="video-player" poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
    <track kind="captions" src="${captionsVtt}" srclang="en" label="English Captions">
    Your browser does not support the video tag.
  </video>
  <p class="info">♿ Includes dialogue + sound descriptions</p>
</div>

<div class="video-section">
  <h3>3. Multiple Language Support</h3>
  <video width="500" height="300" controls class="video-player" poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4">
    <track kind="subtitles" src="${englishVtt}" srclang="en" label="English">
    <track kind="subtitles" src="${spanishVtt}" srclang="es" label="Español">
    <track kind="subtitles" src="${frenchVtt}" srclang="fr" label="Français">
    Your browser does not support the video tag.
  </video>
  <p class="info">🌐 Select language from captions menu</p>
</div>

<div class="video-section">
  <h3>4. Descriptions for Visually Impaired</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/seed/nature/800/600.jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4">
    <track kind="captions" src="${captionsVtt}" srclang="en" label="Captions">
    <track kind="descriptions" src="${descriptionsVtt}" srclang="en" label="English Descriptions">
    Your browser does not support the video tag.
  </video>
  <p class="info">👁️ Detailed descriptions of video content</p>
</div>

<div class="vtt-example">
  <h3>5. Example VTT File Format</h3>
  <pre class="code-block">WEBVTT

00:00:00.000 --> 00:00:02.000
Welcome to our video!

00:00:02.000 --> 00:00:04.500
This is the first subtitle

00:00:04.500 --> 00:00:07.000
Each subtitle has a time code</pre>
</div>

<script>
  document.querySelectorAll('video').forEach((video, index) => {
    video.addEventListener('play', () => console.log('Video ' + (index + 1) + ' playing'));
    video.addEventListener('pause', () => console.log('Video ' + (index + 1) + ' paused'));
  });
</script>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlVideoSubtitles({ onOpenWebPlayground }: HtmlVideoSubtitlesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Subtitles}
        category='HTML · Images & Media'
        title='Video Subtitles & Captions'
        description='Add text tracks for accessibility and multi-language support'
        colorTheme='cyan'
      />

      {/* Introduction */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-xl">
              <Subtitles className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-cyan-600 dark:text-cyan-400">
                Video Subtitles & Captions
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Make videos accessible to everyone
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-cyan-200 dark:border-cyan-700'>&lt;track&gt;</code> element adds text tracks to videos. It supports subtitles, captions, descriptions, and more in WebVTT format for better accessibility.
          </p>
          <Alert className='border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20'>
            <Lightbulb className='h-4 w-4 text-cyan-600 dark:text-cyan-400' />
            <AlertTitle className='text-cyan-700 dark:text-cyan-300'>Key Benefits</AlertTitle>
            <AlertDescription className='text-cyan-600 dark:text-cyan-400'>
              ✓ Accessibility for deaf/hard of hearing  ✓ Multi-language support  ✓ SEO improvement  ✓ Better UX
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Track Types */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400'>
            <CheckCircle className='w-7 h-7' />
            Track Types
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>Subtitles</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300'>Translation of dialogue. Shown at bottom of video.</p>
            </div>
            <div className='p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2'>Captions</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300'>Dialogue + sound effects. For accessibility.</p>
            </div>
            <div className='p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2'>Descriptions</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300'>Scene descriptions for visually impaired.</p>
            </div>
            <div className='p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-2 border-amber-200 dark:border-amber-800'>
              <h4 className='font-semibold text-amber-700 dark:text-amber-300 mb-2'>Chapters</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300'>Clickable navigation points in video.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Example */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400'>
            Working Examples
          </CardTitle>
          <CardDescription>Click CC button to see subtitles and captions</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Video Subtitles & Captions Examples"
            description="Working examples with English, Spanish, and French subtitles"
            html={videoSubtitlesExample.html}
            css={videoSubtitlesExample.css}
            js={videoSubtitlesExample.js}
            colorTheme="cyan"
            previewHeight="800px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400'>
            <CheckCircle className='w-7 h-7' />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className='grid md:grid-cols-2 gap-4'>
          <div className='p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700'>
            <h4 className='font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3'>✅ Do This</h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li>✓ Use accurate, timed subtitles</li>
              <li>✓ Provide multiple languages</li>
              <li>✓ Include captions for accessibility</li>
              <li>✓ Use WebVTT format</li>
              <li>✓ Add descriptions for visual content</li>
            </ul>
          </div>
          <div className='p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700'>
            <h4 className='font-bold text-lg text-rose-600 dark:text-rose-400 mb-3'>❌ Avoid This</h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li>✗ Misaligned or inaccurate timing</li>
              <li>✗ Auto-translations without review</li>
              <li>✗ Using wrong track kind</li>
              <li>✗ Missing default subtitle</li>
              <li>✗ Broken or missing subtitle files</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

