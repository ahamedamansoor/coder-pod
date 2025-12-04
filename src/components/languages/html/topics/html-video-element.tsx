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

const basicVideoExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Video Element Examples</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); margin: 0; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    h2 { color: #1e293b; text-align: center; margin-bottom: 2rem; }
    @media (prefers-color-scheme: dark) { h2 { color: #f1f5f9; } }
    .video-container { background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-left: 4px solid #3b82f6; }
    @media (prefers-color-scheme: dark) { .video-container { background: #1e293b; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); } }
    .video-container h3 { color: #3b82f6; margin-top: 0; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { .video-container h3 { color: #60a5fa; } }
    .video-player { width: 100%; max-width: 600px; height: auto; border-radius: 8px; background: #000; display: block; transition: all 0.3s; }
    .video-player:hover { box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25); }
    .info { color: #6b7280; font-size: 0.9rem; margin: 0.75rem 0 0; padding: 0.75rem 1rem; background: #eff6ff; border-radius: 6px; border-left: 3px solid #3b82f6; }
    @media (prefers-color-scheme: dark) { .info { background: #1e3a8a; color: #93c5fd; border-left-color: #3b82f6; } }
    .label { color: #475569; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; }
    @media (prefers-color-scheme: dark) { .label { color: #cbd5e1; } }
    ::cue { background: rgba(0, 0, 0, 0.8); color: white; font-size: 16px; }
  </style>
</head>
<body>
<h2>🎬 Video Element Examples</h2>

<div class="video-container">
  <h3>1. Basic Video Player</h3>
  <video width="600" height="360" controls class="video-player" poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="info">✅ Click play to watch Big Buck Bunny - Professional animated short</p>
</div>

<div class="video-container">
  <h3>2. Multiple Format Support</h3>
  <video width="600" height="360" controls class="video-player" poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    Your browser does not support video playback.
  </video>
  <p class="info">🔄 Browser uses first supported format - MP4</p>
</div>

<div class="video-container">
  <h3>3. Video with Subtitles</h3>
  <video width="600" height="360" controls class="video-player" poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    <track kind="subtitles" srclang="en" label="English" src="data:text/vtt;charset=utf-8,WEBVTT%0A%0A00:00:00.000 --> 00:00:03.000%0AEnable captions for subtitles%0A%0A00:00:03.000 --> 00:00:06.000%0AClick the CC button in the video player%0A%0A00:00:06.000 --> 00:00:09.000%0ASubtitles help translations of dialogue">
  </video>
  <p class="info">📝 Click CC button to enable subtitles - Subtitles show translations of dialogue</p>
</div>

<div class="video-container">
  <h3>4. Autoplay & Loop (Muted)</h3>
  <video width="600" height="360" autoplay muted loop class="video-player" poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&fm=jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
  </video>
  <p class="info">⚠️ Autoplay requires muted attribute for browsers to allow playback</p>
</div>

<div class="video-container">
  <h3>5. Preload Strategies</h3>
  <div>
    <p class="label">preload="metadata" - Load only duration info</p>
    <video width="600" height="360" controls preload="metadata" class="video-player" poster="https://picsum.photos/800/600.jpg">
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4">
    </video>
    <p style="font-size: 0.85rem; color: #6b7280; margin-top: 0.5rem;">Faster initial load - only metadata is cached, video loads on play</p>
  </div>
  <div style="margin-top: 1.5rem;">
    <p class="label">preload="auto" - Load entire video file</p>
    <video width="600" height="360" controls preload="auto" class="video-player" poster="https://picsum.photos/seed/nature/800/600.jpg">
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
    </video>
    <p style="font-size: 0.85rem; color: #6b7280; margin-top: 0.5rem;">Downloads entire video in background for instant playback</p>
  </div>
</div>

<div class="video-container">
  <h3>6. Video with Interactive Subtitles</h3>
  <video width="600" height="360" controls class="video-player" poster="https://picsum.photos/seed/city/800/600.jpg">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4">
    <track kind="subtitles" srclang="en" label="English" src="data:text/vtt;charset=utf-8,WEBVTT%0A%0A00:00:00.000 --> 00:00:02.000%0AAction sequence begins%0A%0A00:00:02.000 --> 00:00:04.000%0AHigh-intensity cinematic sequence%0A%0A00:00:04.000 --> 00:00:06.000%0AProfessional production quality%0A%0A00:00:06.000 --> 00:00:09.000%0AMultiple subtitle tracks available">
    <track kind="captions" srclang="en" label="Captions" src="data:text/vtt;charset=utf-8,WEBVTT%0A%0A00:00:00.000 --> 00:00:02.000%0A[Music playing]%0AAction begins%0A%0A00:00:02.000 --> 00:00:04.000%0A[Sound effects]%0AIntense sequence%0A%0A00:00:04.000 --> 00:00:06.000%0A[Dramatic music]%0AFilm quality%0A%0A00:00:06.000 --> 00:00:09.000%0A[Ambient sound]%0AMultiple tracks">
  </video>
  <p class="info">🎥 Multiple track options - Both Subtitles and Captions available</p>
</div>

<script>
  // Track video events
  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => console.log('Video playing'));
    video.addEventListener('pause', () => console.log('Video paused'));
  });
</script>
</body>
</html>`,
  css: ``,
  js: ``
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
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;video&gt;</code> element allows you to embed video files directly in your HTML without requiring plugins. It provides built-in controls for playing, pausing, adjusting volume, and more.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Video Element?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Native support:</strong> Works in all modern browsers. <strong>Full control:</strong> Control playback with JavaScript. <strong>Accessible:</strong> Add captions and subtitles for everyone.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Video Formats */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Film className='w-7 h-7' />
            Video Formats & Codec Support
          </CardTitle>
          <CardDescription className='text-base'>Different formats for different browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-3 gap-4'>
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>MP4 (MPEG-4)</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Most compatible format. H.264 video codec with AAC audio.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700'>
                type="video/mp4"
              </code>
              <p className='text-xs text-blue-600 dark:text-blue-400 mt-2'>✅ Universal support</p>
            </div>

            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2'>WebM</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Open format with VP8/VP9 codec. Better compression than MP4.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700'>
                type="video/webm"
              </code>
              <p className='text-xs text-emerald-600 dark:text-emerald-400 mt-2'>⚠️ No Safari/IE support</p>
            </div>

            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-2'>OGG (Ogg Theora)</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Open format with Theora video codec. Good compression.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-orange-200 dark:border-orange-700'>
                type="video/ogg"
              </code>
              <p className='text-xs text-orange-600 dark:text-orange-400 mt-2'>⚠️ Limited support</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subtitles & Captions */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Subtitles className='w-7 h-7' />
            Subtitles & Captions
          </CardTitle>
          <CardDescription className='text-base'>Add text tracks for accessibility</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>Subtitles</h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li>✓ Translation of dialogue</li>
                <li>✓ Shown at bottom of video</li>
                <li>✓ For non-native speakers</li>
                <li>✓ kind="subtitles"</li>
              </ul>
            </div>

            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>Captions</h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li>✓ Dialogue + sound effects</li>
                <li>✓ More detailed descriptions</li>
                <li>✓ For deaf/hard of hearing</li>
                <li>✓ kind="captions"</li>
              </ul>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>WebVTT Format</AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              Create <strong>.vtt files</strong> (WebVTT format) for captions with timestamps and styling!
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
          <CardDescription className='text-base'>Interactive video player examples with subtitles</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Video Element Examples"
            description="Various video configurations with Google Cloud Storage videos and subtitle support"
            html={basicVideoExample.html}
            css={basicVideoExample.css}
            js={basicVideoExample.js}
            colorTheme="blue"
            previewHeight="1200px"
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
          <div className='p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700'>
            <h4 className='font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2'>
              <CheckCircle className='w-5 h-5' />
              ✅ Do This
            </h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li>✓ Add width & height attributes</li>
              <li>✓ Use multiple formats (MP4 + WebM)</li>
              <li>✓ Add captions/subtitles</li>
              <li>✓ Set poster image</li>
              <li>✓ Use muted with autoplay</li>
            </ul>
          </div>

          <div className='p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700'>
            <h4 className='font-bold text-lg text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2'>
              <XCircle className='w-5 h-5' />
              ❌ Avoid This
            </h4>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li>✗ Autoplay without muted</li>
              <li>✗ Very large files ({'>'}100MB)</li>
              <li>✗ No fallback content</li>
              <li>✗ Missing poster image</li>
              <li>✗ Only one video format</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Create your own video player with subtitles!"
          features={[
            'Build custom video players',
            'Add multiple video sources',
            'Create subtitle tracks',
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

