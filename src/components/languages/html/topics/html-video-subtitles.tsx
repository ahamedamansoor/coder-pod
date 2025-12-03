'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Subtitles, Play, Code, CheckCircle, XCircle, Lightbulb, AlertCircle, FileText, Book } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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
  html: `<h2>Video with Captions & Subtitles</h2>

<!-- Video with English Subtitles -->
<div class="video-section">
  <h3>1. Video with Subtitles</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/500/300?image=60">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    <track kind="subtitles" src="${englishVtt}" srclang="en" label="English">
    Your browser does not support the video tag.
  </video>
  <p class="info">↑ Click CC button to toggle subtitles</p>
</div>

<!-- Video with Captions -->
<div class="video-section">
  <h3>2. Video with Captions (Accessibility)</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/500/300?image=61">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    <track kind="captions" src="${captionsVtt}" srclang="en" label="English Captions">
    Your browser does not support the video tag.
  </video>
  <p class="info">Includes dialogue + sound descriptions</p>
</div>

<!-- Video with Multiple Languages -->
<div class="video-section">
  <h3>3. Multiple Language Support</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/500/300?image=62">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    <track kind="subtitles" src="${englishVtt}" srclang="en" label="English">
    <track kind="subtitles" src="${spanishVtt}" srclang="es" label="Español">
    <track kind="subtitles" src="${frenchVtt}" srclang="fr" label="Français">
    Your browser does not support the video tag.
  </video>
  <p class="info">Select language from captions menu</p>
</div>

<!-- Video with Descriptions -->
<div class="video-section">
  <h3>4. Descriptions for Visually Impaired</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/500/300?image=63">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    <track kind="captions" src="${captionsVtt}" srclang="en" label="Captions">
    <track kind="descriptions" src="${descriptionsVtt}" srclang="en" label="English Descriptions">
    Your browser does not support the video tag.
  </video>
  <p class="info">Detailed descriptions of video content</p>
</div>

<!-- Example VTT File Content (for reference) -->
<div class="vtt-example">
  <h3>5. Example VTT File Format</h3>
  <pre class="code-block">WEBVTT

00:00:00.000 --> 00:00:02.000
Welcome to our video!

00:00:02.000 --> 00:00:04.500
This is the first subtitle

00:00:04.500 --> 00:00:07.000
Each subtitle has a time code</pre>
</div>`,
  css: `* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.video-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #06b6d4;
}

@media (prefers-color-scheme: dark) {
  .video-section {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.video-section h3 {
  color: #06b6d4;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .video-section h3 {
    color: #22d3ee;
  }
}

.video-player {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  background: #000;
  display: block;
  transition: all 0.3s;
}

.video-player:hover {
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.25);
}

.info {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.75rem 0 0;
  padding: 0.75rem 1rem;
  background: #ecf0ff;
  border-radius: 6px;
  border-left: 3px solid #06b6d4;
}

@media (prefers-color-scheme: dark) {
  .info {
    background: #164e63;
    color: #22d3ee;
    border-left-color: #06b6d4;
  }
}

.vtt-example {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #f59e0b;
}

@media (prefers-color-scheme: dark) {
  .vtt-example {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.vtt-example h3 {
  color: #f59e0b;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .vtt-example h3 {
    color: #fbbf24;
  }
}

.code-block {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Courier New", monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  .code-block {
    background: #374151;
  }
}`,
  js: ''
};

export default function HtmlVideoSubtitles({ onOpenWebPlayground }: HtmlVideoSubtitlesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Subtitles}
        category='HTML · Images & Media'
        title='Video Subtitles & Captions'
        description='Add text tracks for accessibility and multi-language support'
        colorTheme='blue'
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Subtitles className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Track Element & Video Captions
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Add subtitles, captions, and descriptions to video content
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;track&gt;</code> element adds text tracks to <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;video&gt;</code> elements. It supports subtitles, captions, descriptions, chapters, and metadata in WebVTT format.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Captions?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Accessibility:</strong> Deaf and hard of hearing users. <strong>Global:</strong> Multi-language support. <strong>Engagement:</strong> Higher completion rates. <strong>SEO:</strong> Search engines index captions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Code className='w-7 h-7' />
            Track Element Syntax
          </CardTitle>
          <CardDescription className='text-base'>How to add captions to videos</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3'>Basic Structure</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<!-- Example: Video with subtitles -->
<video controls>
  <source src="your-video.mp4" type="video/mp4">
  <track kind="subtitles" 
         src="subtitles-en.vtt" 
         srclang="en" label="English">
  <track kind="captions" 
         src="captions.vtt" 
         srclang="en" label="Captions">
</video>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg border-2 border-cyan-200 dark:border-cyan-800'>
              <h4 className='font-semibold text-cyan-700 dark:text-cyan-300 mb-3'>Attributes</h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-cyan-600 font-bold'>→</span>
                  <span><strong>kind:</strong> Type of track</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-cyan-600 font-bold'>→</span>
                  <span><strong>src:</strong> Path to VTT file</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-cyan-600 font-bold'>→</span>
                  <span><strong>srclang:</strong> Language code</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-cyan-600 font-bold'>→</span>
                  <span><strong>label:</strong> Display name</span>
                </li>
              </ul>
            </div>

            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>Multiple Languages</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                <code>{`<track kind="subtitles"
       src="subtitles-en.vtt"
       srclang="en"
       label="English">
<track kind="subtitles"
       src="subtitles-es.vtt"
       srclang="es"
       label="Español">`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Track Kinds */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Book className='w-7 h-7' />
            Track Kinds Explained
          </CardTitle>
          <CardDescription className='text-base'>Different types of text tracks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Subtitles */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-emerald-600 text-xs'>subtitles</Badge>
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Translation</strong> of dialogue
              </p>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li>• For non-native speakers</li>
                <li>• Assumes user can hear</li>
                <li>• Dialogue only</li>
              </ul>
            </div>

            {/* Captions */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-blue-600 text-xs'>captions</Badge>
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Full transcription</strong> of audio
              </p>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li>• For deaf/hard of hearing</li>
                <li>• Dialogue + sounds</li>
                <li>• [door opens], [music]</li>
              </ul>
            </div>

            {/* Descriptions */}
            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-orange-600 text-xs'>descriptions</Badge>
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Visual descriptions</strong> of content
              </p>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li>• For visually impaired</li>
                <li>• Describes scenes/actions</li>
                <li>• Usually narrated</li>
              </ul>
            </div>

            {/* Chapters */}
            <div className='bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800'>
              <h4 className='font-semibold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-pink-600 text-xs'>chapters</Badge>
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Chapter markers</strong> in timeline
              </p>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li>• Video navigation</li>
                <li>• Section titles</li>
                <li>• Time-based bookmarks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* VTT File Format */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <FileText className='w-7 h-7' />
            WebVTT File Format
          </CardTitle>
          <CardDescription className='text-base'>Creating subtitle and caption files</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3'>Basic VTT Structure</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`WEBVTT

00:00:00.000 --> 00:00:02.000
First subtitle line

00:00:02.500 --> 00:00:05.000
Second subtitle line
Can be multiple lines

00:00:05.500 --> 00:00:08.000
Third subtitle`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* File Requirements */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>File Requirements</h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold'>✓</span>
                  <span><strong>.vtt extension</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold'>✓</span>
                  <span><strong>UTF-8 encoding</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold'>✓</span>
                  <span><strong>Start with WEBVTT</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-600 font-bold'>✓</span>
                  <span>HH:MM:SS.mmm format</span>
                </li>
              </ul>
            </div>

            {/* Time Code Format */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>Time Code Examples</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                <code>{`00:00:00.500 --> 00:00:03.000
(Half second to 3 seconds)

00:01:23.456 --> 00:01:27.890
(1min 23.456s to 1min 27.890s)

00:10:00.000 --> 00:10:05.000
(10 minutes)`}</code>
              </pre>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>Important Notes</AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              <strong>CORS:</strong> VTT files must be on same domain or have proper CORS headers. <strong>Timing:</strong> Keep subtitles in sync with video. <strong>Length:</strong> Keep each subtitle 1-2 seconds visible.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Live Examples */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Play className='w-7 h-7' />
            See It in Action
          </CardTitle>
          <CardDescription className='text-base'>Videos with captions and multiple languages</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Video Subtitles Examples"
            description="Various caption and subtitle configurations"
            html={videoSubtitlesExample.html}
            css={videoSubtitlesExample.css}
            js={videoSubtitlesExample.js}
            colorTheme="blue"
            previewHeight="1000px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <CheckCircle className='w-7 h-7' />
            Best Practices for Captions
          </CardTitle>
          <CardDescription className='text-base'>Create effective subtitles and captions</CardDescription>
        </CardHeader>
        <CardContent className='grid md:grid-cols-2 gap-4'>
          {/* Do's */}
          <div className='p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700'>
            <h4 className='font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2'>
              <CheckCircle className='w-5 h-5' />
              ✅ Do This
            </h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Keep <strong>timing in sync</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span><strong>Include speaker names</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Describe <strong>sound effects</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Provide <strong>multiple languages</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use <strong>proper punctuation</strong></span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className='p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700'>
            <h4 className='font-bold text-lg text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2'>
              <XCircle className='w-5 h-5' />
              ❌ Avoid This
            </h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>Out of sync</strong> captions</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Too much <strong>text per line</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Ignoring <strong>sound effects</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Poor <strong>translation quality</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>No fallback</strong> captions</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Create videos with captions and experiment with track elements!"
          features={[
            'Add subtitles to videos',
            'Support multiple languages',
            'Create VTT files',
            'Test caption timing'
          ]}
          buttonText="Open Playground"
          onLaunchPlayground={() => onOpenWebPlayground(videoSubtitlesExample.html, videoSubtitlesExample.css, videoSubtitlesExample.js)}
          playgroundData={videoSubtitlesExample}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
