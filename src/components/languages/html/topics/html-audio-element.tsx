'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Music, Play, Code, CheckCircle, XCircle, Lightbulb, Settings, FileAudio } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlAudioElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicAudioExample = {
  html: `<h2>Audio Element Examples</h2>

<!-- Simple Audio with Controls -->
<div class="audio-container">
  <h3>1. Basic Audio Player</h3>
  <audio controls class="audio-player">
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <p class="info">↑ Click play to listen</p>
</div>

<!-- Audio with Multiple Formats (Fallback) -->
<div class="audio-container">
  <h3>2. Multiple Format Support</h3>
  <audio controls class="audio-player">
    <source src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg">
    <source src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Example.ogg" type="audio/ogg">
    <source src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav" type="audio/wav">
    Your browser does not support audio playback.
  </audio>
  <p class="info">Browsers use first supported format</p>
</div>

<!-- Audio with Autoplay & Loop -->
<div class="audio-container">
  <h3>3. Autoplay & Loop</h3>
  <audio controls autoplay loop class="audio-player">
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg">
  </audio>
  <p class="info">⚠️ May require user interaction</p>
</div>

<!-- Audio with Preload -->
<div class="audio-container">
  <h3>4. Preload Strategy</h3>
  <div>
    <p class="label">preload="metadata"</p>
    <audio controls preload="metadata" class="audio-player">
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg">
    </audio>
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

.audio-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #a78bfa;
}

@media (prefers-color-scheme: dark) {
  .audio-container {
    background: #1e293b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.audio-container h3 {
  color: #a78bfa;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .audio-container h3 {
    color: #d8b4fe;
  }
}

.audio-player {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  background: #f3f4f6;
  transition: all 0.3s;
}

@media (prefers-color-scheme: dark) {
  .audio-player {
    background: #374151;
  }
}

.audio-player:hover {
  box-shadow: 0 4px 8px rgba(167, 139, 250, 0.2);
}

.info {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.75rem 0 0;
  padding: 0.75rem 1rem;
  background: #f0f4ff;
  border-radius: 6px;
  border-left: 3px solid #a78bfa;
}

@media (prefers-color-scheme: dark) {
  .info {
    background: #312e81;
    color: #d8b4fe;
    border-left-color: #a78bfa;
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

export default function HtmlAudioElement({ onOpenWebPlayground }: HtmlAudioElementProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Music}
        category='HTML · Images & Media'
        title='Audio Element'
        description='Embed and control sound content natively in your web pages'
        colorTheme='blue'
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Music className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is the Audio Element?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Native HTML5 element for embedding sound files
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;audio&gt;</code> element allows you to embed sound files directly in your HTML without requiring Flash plugins. It provides built-in controls for playing, pausing, and adjusting volume.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Audio Element?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Easy to use:</strong> No plugins needed. <strong>Accessible:</strong> Works across all modern browsers. <strong>Flexible:</strong> Control playback with attributes and JavaScript.
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
          <CardDescription className='text-base'>How to embed audio files</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3'>Simple Audio Player</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>Tag Structure</h4>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 font-bold'>→</span>
                  <span><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;audio&gt;</code> - Main container</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 font-bold'>→</span>
                  <span><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;source&gt;</code> - Audio file path</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 font-bold'>→</span>
                  <span>Fallback text for old browsers</span>
                </li>
              </ul>
            </div>

            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-3'>Best Practice</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Use multiple <code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;source&gt;</code> elements with different formats for better browser compatibility:
              </p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-orange-200 dark:border-orange-700 overflow-x-auto'>
                <code>{`<source src="audio.mp4" type="audio/mp4">
<source src="audio.ogg" type="audio/ogg">
<source src="audio.mp3" type="audio/mpeg">`}</code>
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
          <CardDescription className='text-base'>Control audio playback behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* controls */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>controls</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Shows playback controls</strong> (play, pause, volume slider)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<audio controls>`}
              </code>
            </div>

            {/* autoplay */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600'>autoplay</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Starts playing automatically</strong> (often requires muted)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<audio autoplay muted>`}
              </code>
            </div>

            {/* loop */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>loop</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Repeats playback</strong> when audio ends
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<audio loop>`}
              </code>
            </div>

            {/* muted */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-pink-600'>muted</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Silences audio</strong> by default
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<audio muted>`}
              </code>
            </div>

            {/* preload */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-cyan-600'>preload</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Loads audio before playing:</strong> none, metadata, auto
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<audio preload="metadata">`}
              </code>
            </div>

            {/* currentTime */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-orange-600'>volume</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Control via JavaScript:</strong> audio.volume = 0.5
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`// 0.0 to 1.0 (muted to full)`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audio Formats */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <FileAudio className='w-7 h-7' />
            Supported Audio Formats
          </CardTitle>
          <CardDescription className='text-base'>Different file types and browser support</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* MP3 */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2'>MP3</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Most compatible</strong> format. Good compression.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700'>
                type="audio/mpeg"
              </code>
              <p className='text-xs text-emerald-600 dark:text-emerald-400 mt-2'>✅ All browsers</p>
            </div>

            {/* WAV */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>WAV</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Uncompressed, <strong>high quality</strong> audio.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700'>
                type="audio/wav"
              </code>
              <p className='text-xs text-blue-600 dark:text-blue-400 mt-2'>⚠️ Large file size</p>
            </div>

            {/* OGG */}
            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-2'>OGG</h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Open format with <strong>good compression</strong>.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-orange-200 dark:border-orange-700'>
                type="audio/ogg"
              </code>
              <p className='text-xs text-orange-600 dark:text-orange-400 mt-2'>⚠️ Limited IE support</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Examples */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Play className='w-7 h-7' />
            See It in Action
          </CardTitle>
          <CardDescription className='text-base'>Interactive audio player examples</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Audio Element Examples"
            description="Various audio configurations and playback options"
            html={basicAudioExample.html}
            css={basicAudioExample.css}
            js={basicAudioExample.js}
            colorTheme="blue"
            previewHeight="600px"
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
          <CardDescription className='text-base'>Audio implementation tips</CardDescription>
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
                <span>Use <strong>multiple formats</strong> for compatibility</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Always add <strong>fallback text</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span><strong>Compress audio</strong> to reduce file size</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span><strong>Show controls</strong> for user interaction</span>
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
                <span>Autoplay without <strong>muted attribute</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>Hidden audio players</strong> annoying users</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Only <strong>one audio format</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Very <strong>large file sizes</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>No user controls</strong> for playback</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Create your own audio player and experiment with different attributes!"
          features={[
            'Build custom audio players',
            'Test different formats',
            'Control playback options',
            'Learn JavaScript integration'
          ]}
          buttonText="Open Playground"
          onLaunchPlayground={() => onOpenWebPlayground(basicAudioExample.html, basicAudioExample.css, basicAudioExample.js)}
          playgroundData={basicAudioExample}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
