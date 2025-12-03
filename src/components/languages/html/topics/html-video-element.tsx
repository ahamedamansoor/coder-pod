'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Video, Play, Code, CheckCircle, XCircle, Lightbulb, AlertCircle, Settings, Film, Subtitles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlVideoElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const mdnFlowerMp4 = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const mdnFlowerWebm = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm';
const mdnFlowerOgg = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.ogg';

const basicVideoExample = {
  html: `<h2>Video Element Examples</h2>

<!-- Basic Video Player -->
<div class="video-container">
  <h3>1. Simple Video Player</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/500/300?image=50">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="info">↑ Click play to watch</p>
</div>

<!-- Video with Multiple Formats -->
<div class="video-container">
    <h3>2. Multiple Format Support</h3>
    <video width="500" height="300" controls class="video-player">
      <source src="${mdnFlowerMp4}" type="video/mp4">
      <source src="${mdnFlowerWebm}" type="video/webm">
      <source src="${mdnFlowerOgg}" type="video/ogg">
    Your browser does not support video playback.
  </video>
  <p class="info">Browsers use first supported format</p>
</div>

<!-- Video with Subtitles/Captions -->
<div class="video-container">
  <h3>3. Video with Subtitles</h3>
  <video width="500" height="300" controls class="video-player" poster="https://picsum.photos/500/300?image=51">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English">
    <track kind="captions" src="captions.vtt" srclang="en" label="Captions">
  </video>
  <p class="info">📝 Captions available (when enabled)</p>
</div>

<!-- Video with Autoplay & Loop -->
<div class="video-container">
  <h3>4. Autoplay & Loop Behavior</h3>
  <video width="500" height="300" autoplay muted loop class="video-player" poster="https://picsum.photos/500/300?image=52">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
  </video>
  <p class="info">⚠️ Requires muted attribute for autoplay</p>
</div>

<!-- Video with Preload -->
<div class="video-container">
  <h3>5. Preload Strategy</h3>
  <div>
    <p class="label">preload="metadata"</p>
    <video width="500" height="300" controls preload="metadata" class="video-player" poster="https://picsum.photos/500/300?image=53">
      <source src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4" type="video/mp4">
    </video>
  </div>
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

.video-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  .video-container {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.video-container h3 {
  color: #3b82f6;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .video-container h3 {
    color: #60a5fa;
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
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

.info {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.75rem 0 0;
  padding: 0.75rem 1rem;
  background: #eff6ff;
  border-radius: 6px;
  border-left: 3px solid #3b82f6;
}

@media (prefers-color-scheme: dark) {
  .info {
    background: #1e3a8a;
    color: #93c5fd;
    border-left-color: #3b82f6;
  }
}

.label {
  color: #475569;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .label {
    color: #cbd5e1;
  }
}`,
  js: ''
};

export default function HtmlVideoElement({ onOpenWebPlayground }: HtmlVideoElementProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Video}
        category='HTML · Images & Media'
        title='Video Element'
        description='Embed and control video content natively in your web pages'
        colorTheme='blue'
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Video className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is the Video Element?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Native HTML5 element for embedding video files
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;video&gt;</code> element allows you to embed video files directly in your HTML. It includes support for captions, subtitles, poster images, and full playback controls without requiring any plugins.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Video Element?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Plugin-free:</strong> No Flash needed. <strong>Responsive:</strong> Works on all devices. <strong>Accessible:</strong> Supports captions and multiple formats.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Code className='w-7 h-7' />
            Basic Syntax
          </CardTitle>
          <CardDescription className='text-base'>How to embed video files</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3'>Simple Video Player</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<video width="640" height="360" controls>
  <source src="${mdnFlowerMp4}" type="video/mp4">
  Your browser does not support the video tag.
</video>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>Tag Structure</h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 font-bold'>→</span>
                  <span><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;video&gt;</code> - Main container</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 font-bold'>→</span>
                  <span><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;source&gt;</code> - Video file & type</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 font-bold'>→</span>
                  <span><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;track&gt;</code> - Captions/subtitles</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 font-bold'>→</span>
                  <span>Fallback text for old browsers</span>
                </li>
              </ul>
            </div>

            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-3'>Best Practice</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Always set <strong>width and height</strong> to prevent layout shift:
              </p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-orange-200 dark:border-orange-700 overflow-x-auto'>
                <code>{`<video width="640" height="360"
         controls>
  ...
</video>`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Settings className='w-7 h-7' />
            Essential Attributes
          </CardTitle>
          <CardDescription className='text-base'>Control video playback behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* width & height */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>width / height</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Video dimensions</strong> (prevents layout shift)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`width="640" height="360"`}
              </code>
            </div>

            {/* controls */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>controls</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Shows playback controls</strong> (play, pause, timeline)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<video controls>`}
              </code>
            </div>

            {/* poster */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600'>poster</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Thumbnail image</strong> shown before playback
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`poster="image.jpg"`}
              </code>
            </div>

            {/* autoplay */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600'>autoplay</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Starts playing automatically</strong> (requires muted)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<video autoplay muted>`}
              </code>
            </div>

            {/* loop */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>loop</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Repeats playback</strong> when video ends
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<video loop>`}
              </code>
            </div>

            {/* preload */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-cyan-600'>preload</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Load strategy:</strong> none, metadata, auto
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`preload="metadata"`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Formats */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Film className='w-7 h-7' />
            Supported Video Formats
          </CardTitle>
          <CardDescription className='text-base'>Different file types and codecs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* MP4 */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>MP4</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Most compatible</strong> format. H.264 video codec.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700'>
                type="video/mp4"
              </code>
              <p className='text-xs text-blue-600 dark:text-blue-400 mt-2'>✅ Universal support</p>
            </div>

            {/* WebM */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2'>WebM</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Modern format</strong> with great compression.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700'>
                type="video/webm"
              </code>
              <p className='text-xs text-emerald-600 dark:text-emerald-400 mt-2'>⚠️ No IE support</p>
            </div>

            {/* OGG */}
            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-2'>OGG</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Open format. Theora video codec.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-orange-200 dark:border-orange-700'>
                type="video/ogg"
              </code>
              <p className='text-xs text-orange-600 dark:text-orange-400 mt-2'>⚠️ Limited support</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Captions & Subtitles */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Subtitles className='w-7 h-7' />
            Captions & Subtitles (Track Element)
          </CardTitle>
          <CardDescription className='text-base'>Add text tracks for accessibility</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3'>Track Element Syntax</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<video controls>
  <source src="${mdnFlowerMp4}" type="video/mp4">
  <track kind="subtitles" src="en.vtt" srclang="en" label="English">
  <track kind="captions" src="captions.vtt" srclang="en" label="Captions">
</video>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Subtitles */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <Subtitles className='w-4 h-4' />
                Subtitles
              </h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li>• Translation of dialogue</li>
                <li>• Shown at bottom of video</li>
                <li>• For non-native speakers</li>
                <li>• kind="subtitles"</li>
              </ul>
            </div>

            {/* Captions */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Subtitles className='w-4 h-4' />
                Captions
              </h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li>• Dialogue + sound effects</li>
                <li>• More detailed descriptions</li>
                <li>• For deaf/hard of hearing</li>
                <li>• kind="captions"</li>
              </ul>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>VTT File Format</AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              Create <strong>.vtt files</strong> (WebVTT format) for captions. Simple text format with timestamps!
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
          <CardDescription className='text-base'>Interactive video player examples</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Video Element Examples"
            description="Various video configurations with different features"
            html={basicVideoExample.html}
            css={basicVideoExample.css}
            js={basicVideoExample.js}
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
            Best Practices
          </CardTitle>
          <CardDescription className='text-base'>Video implementation tips</CardDescription>
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
                <span>Add <strong>width & height</strong> attributes</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use <strong>multiple formats</strong> (MP4 + WebM)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Add <strong>captions/subtitles</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Set <strong>poster image</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use <strong>muted</strong> with autoplay</span>
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
                <span>Autoplay without <strong>muted</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>Very large files</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>No <strong>fallback content</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>Missing poster image</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Only <strong>one video format</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Create your own video player with captions and experiment with attributes!"
          features={[
            'Build custom video players',
            'Add captions and subtitles',
            'Test different formats',
            'Control playback options'
          ]}
          buttonText="Open Playground"
          onLaunchPlayground={() => onOpenWebPlayground(basicVideoExample.html, basicVideoExample.css, basicVideoExample.js)}
          playgroundData={basicVideoExample}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
