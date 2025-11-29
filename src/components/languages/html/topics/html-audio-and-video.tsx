'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Play, File, Video, Music, Code, CheckCircle, XCircle, Lightbulb, Globe, Volume2, Film, Subtitles, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Video} 
        category='HTML Basics' 
        title='Audio & Video Elements' 
        description='Native HTML5 media playback without plugins'
        colorTheme='blue'
      />

      {/* What are Audio & Video Elements? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Film className='w-5 h-5 text-blue-600' />
            What are Audio & Video Elements?
          </CardTitle>
          <CardDescription>HTML5 elements for embedding and controlling media content directly in web pages</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Audio Element */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <Music className='w-4 h-4' />
                &lt;audio&gt; Element
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Embeds <strong>sound content</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Supports <strong>MP3, WAV, OGG</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Native <strong>playback controls</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>No plugins required</span>
                </li>
              </ul>
              <div className='mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700'>
                <code className='text-xs text-slate-800 dark:text-slate-200'>&lt;audio controls src="file.mp3"&gt;</code>
              </div>
            </div>
            
            {/* Video Element */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Video className='w-4 h-4' />
                &lt;video&gt; Element
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Embeds <strong>video content</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Supports <strong>MP4, WebM, OGG</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Includes <strong>poster images</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Caption/subtitle support</span>
                </li>
              </ul>
              <div className='mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                <code className='text-xs text-slate-800 dark:text-slate-200'>&lt;video controls src="file.mp4"&gt;</code>
              </div>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use HTML5 Media?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              HTML5 audio and video elements provide <strong>native media playback</strong> without requiring Flash or other plugins. They're <strong>faster, more secure</strong>, and work across all modern browsers and devices.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5 text-purple-600' />
            Common Attributes for Audio & Video
          </CardTitle>
          <CardDescription>Essential attributes that control media playback behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* controls */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>controls</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Displays playback controls (play, pause, volume)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;audio <span className='text-blue-600'>controls</span>&gt;
              </code>
            </div>

            {/* autoplay */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-orange-600 hover:bg-orange-700'>autoplay</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Starts playing automatically (requires muted)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;video <span className='text-orange-600'>autoplay</span> muted&gt;
              </code>
            </div>

            {/* loop */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>loop</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Restarts playback after reaching the end
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;audio <span className='text-emerald-600'>loop</span>&gt;
              </code>
            </div>

            {/* muted */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600 hover:bg-purple-700'>muted</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Starts with audio muted (required for autoplay)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;video <span className='text-purple-600'>muted</span>&gt;
              </code>
            </div>

            {/* preload */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-red-600 hover:bg-red-700'>preload</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Hints how to load: none, metadata, auto
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-red-600'>preload</span>=<span className='text-amber-600'>"metadata"</span>
              </code>
            </div>

            {/* poster */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-cyan-600 hover:bg-cyan-700'>poster</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>(video only)</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Image to show before video plays
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                <span className='text-cyan-600'>poster</span>=<span className='text-amber-600'>"thumb.jpg"</span>
              </code>
            </div>
          </div>

          <Alert className='mt-4 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20'>
            <Lightbulb className='h-4 w-4 text-orange-600 dark:text-orange-400' />
            <AlertDescription className='text-orange-700 dark:text-orange-300'>
              <strong>Autoplay Note:</strong> Modern browsers block autoplay with sound. To autoplay, you must add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>muted</code> attribute. Always consider user experience before using autoplay.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Source Element */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-emerald-600' />
            Using Multiple Sources
          </CardTitle>
          <CardDescription>Provide fallback formats for better browser compatibility</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3'>Why Multiple Sources?</h4>
            <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
              Different browsers support different media formats. By providing multiple sources, you ensure your media works everywhere.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <h5 className='text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2'>Audio Formats</h5>
                <ul className='text-sm space-y-1'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-3 h-3 text-green-600' />
                    <span><strong>MP3</strong> - Universal support</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-3 h-3 text-green-600' />
                    <span><strong>OGG</strong> - Open format, Firefox</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-3 h-3 text-green-600' />
                    <span><strong>WAV</strong> - Uncompressed, large files</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2'>Video Formats</h5>
                <ul className='text-sm space-y-1'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-3 h-3 text-green-600' />
                    <span><strong>MP4</strong> - Universal support</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-3 h-3 text-green-600' />
                    <span><strong>WebM</strong> - Modern, efficient</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-3 h-3 text-green-600' />
                    <span><strong>OGG</strong> - Open format</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm'>Audio Example</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`<audio controls>
  <source src="audio.mp3" 
          type="audio/mpeg">
  <source src="audio.ogg" 
          type="audio/ogg">
  Your browser does not 
  support audio.
</audio>`}</code>
              </pre>
            </div>
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Video Example</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`<video controls>
  <source src="video.mp4" 
          type="video/mp4">
  <source src="video.webm" 
          type="video/webm">
  Your browser does not 
  support video.
</video>`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Track Element for Captions */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Subtitles className='w-5 h-5 text-blue-600' />
            Accessibility: Captions & Subtitles
          </CardTitle>
          <CardDescription>Using the &lt;track&gt; element for accessible media</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;track&gt;</code> element adds text tracks like subtitles, captions, or descriptions to video/audio.
          </p>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
            <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 text-sm'>Track Kinds</h4>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='flex items-start gap-2 text-sm'>
                <Badge className='bg-blue-600 text-xs'>captions</Badge>
                <span className='text-slate-700 dark:text-slate-300'>Transcription with sound effects</span>
              </div>
              <div className='flex items-start gap-2 text-sm'>
                <Badge className='bg-emerald-600 text-xs'>subtitles</Badge>
                <span className='text-slate-700 dark:text-slate-300'>Translation of dialogue</span>
              </div>
              <div className='flex items-start gap-2 text-sm'>
                <Badge className='bg-purple-600 text-xs'>descriptions</Badge>
                <span className='text-slate-700 dark:text-slate-300'>Visual content descriptions</span>
              </div>
              <div className='flex items-start gap-2 text-sm'>
                <Badge className='bg-orange-600 text-xs'>chapters</Badge>
                <span className='text-slate-700 dark:text-slate-300'>Navigation markers</span>
              </div>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Example with Captions</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" 
         src="captions-en.vtt" 
         srclang="en" 
         label="English"
         default>
  <track kind="subtitles" 
         src="subtitles-es.vtt" 
         srclang="es" 
         label="Spanish">
</video>`}</code>
            </pre>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <Lightbulb className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertDescription className='text-emerald-700 dark:text-emerald-300'>
              <strong>WebVTT Format:</strong> Caption files use the WebVTT (.vtt) format. Always provide captions for accessibility and to comply with legal requirements in many countries.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-amber-600' />
            Common Use Cases
          </CardTitle>
          <CardDescription>Real-world scenarios for audio and video elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Audio Use Cases */}
            <div>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <Music className='w-4 h-4' />
                Audio Element
              </h3>
              <div className='grid gap-3'>
                {[
                  { icon: Volume2, title: 'Podcasts', example: 'Episode playback with controls' },
                  { icon: Music, title: 'Music Players', example: 'Streaming audio with playlists' },
                  { icon: File, title: 'Sound Effects', example: 'UI feedback sounds' },
                  { icon: Play, title: 'Voice Messages', example: 'User-recorded audio' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800'>
                    <div className='flex items-center gap-2 mb-1'>
                      <useCase.icon className='w-4 h-4 text-purple-600' />
                      <h4 className='font-semibold text-sm text-purple-700 dark:text-purple-300'>{useCase.title}</h4>
                    </div>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Use Cases */}
            <div>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Video className='w-4 h-4' />
                Video Element
              </h3>
              <div className='grid gap-3'>
                {[
                  { icon: Film, title: 'Tutorials', example: 'Educational content with captions' },
                  { icon: Play, title: 'Product Demos', example: 'Feature showcases' },
                  { icon: Video, title: 'Background Videos', example: 'Hero section videos' },
                  { icon: Globe, title: 'Live Streams', example: 'Webinars and events' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800'>
                    <div className='flex items-center gap-2 mb-1'>
                      <useCase.icon className='w-4 h-4 text-blue-600' />
                      <h4 className='font-semibold text-sm text-blue-700 dark:text-blue-300'>{useCase.title}</h4>
                    </div>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples with FrontendCodePreview */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <Video className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Audio & Video in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See how to implement audio and video with various controls and features
        </p>

        {/* Example 1: Basic Audio with Controls */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. Basic Audio Player'
              description='Simple audio element with native browser controls'
            html={`<div class="media-container">
  <h3>Basic Audio Player</h3>
  <p class="description">Simple audio with native controls</p>
  <audio controls class="media-player">
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

<p class="note">🎵 Click play to listen to the audio track</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.media-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .media-container {
  background: #1e293b;
}

h3 {
  color: #334155;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #cbd5e1;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

/* Audio Player */
.media-player {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}`}
            colorTheme='purple'
            icon={Music}
            previewHeight='300px'
          />
        </CardContent>
      </Card>

      {/* Example 2: Audio with Loop */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. Looping Audio'
            description='Audio that automatically repeats when finished'
            html={`<div class="media-container">
  <h3>Looping Audio</h3>
  <p class="description">Audio repeats automatically</p>
  <audio controls loop class="media-player">
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <span class="badge">🔁 Loop enabled</span>
</div>

<p class="note">🔁 Audio will restart automatically when it ends</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.media-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .media-container {
  background: #1e293b;
}

h3 {
  color: #334155;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #cbd5e1;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.media-player {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

html.dark .badge {
  background: #1e3a8a;
  color: #93c5fd;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
            colorTheme='blue'
            icon={Music}
            previewHeight='300px'
          />
        </CardContent>
      </Card>

      {/* Example 3: Basic Video */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. Basic Video Player'
            description='Simple video element with native browser controls'
            html={`<div class="media-container">
  <h3>Basic Video Player</h3>
  <p class="description">Simple video with native controls</p>
  <video controls class="video-player">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<p class="note">🎬 Click play to watch the video</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.media-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .media-container {
  background: #1e293b;
}

h3 {
  color: #334155;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #cbd5e1;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.video-player {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: #000;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
            colorTheme='blue'
            icon={Video}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 4: Video with Custom Size */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. Video with Custom Dimensions'
            description='Video element with specified width and height attributes'
            html={`<div class="media-container">
  <h3>Custom Size Video</h3>
  <p class="description">Video with custom 400x225 dimensions</p>
  <video controls width="400" height="225" class="video-player">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <span class="badge">📏 400x225</span>
</div>

<p class="note">📐 Use width/height attributes to set video dimensions</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.media-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .media-container {
  background: #1e293b;
}

h3 {
  color: #334155;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #cbd5e1;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.video-player {
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: #000;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

html.dark .badge {
  background: #1e3a8a;
  color: #93c5fd;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #78350f;
  color: #fde68a;
}`}
            colorTheme='amber'
            icon={Film}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 5: Video with Autoplay */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='5. Autoplay Video (Muted)'
            description='Video that starts playing automatically with sound muted'
            html={`<div class="media-container">
  <h3>Autoplay Video</h3>
  <p class="description">Starts playing automatically (muted)</p>
  <video controls autoplay muted loop class="video-player">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="badge-group">
    <span class="badge">▶️ Autoplay</span>
    <span class="badge">🔇 Muted</span>
    <span class="badge">🔁 Loop</span>
  </div>
</div>

<p class="note">⚠️ Autoplay requires muted attribute for most browsers</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.media-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .media-container {
  background: #1e293b;
}

h3 {
  color: #334155;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #cbd5e1;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.video-player {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: #000;
}

.badge-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #dcfce7;
  color: #15803d;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

html.dark .badge {
  background: #14532d;
  color: #86efac;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #78350f;
  color: #fde68a;
}`}
            colorTheme='emerald'
            icon={Play}
            previewHeight='400px'
          />
        </CardContent>
      </Card>
    </div>

    {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-5 h-5 text-green-600' />
            Best Practices
          </CardTitle>
          <CardDescription>Tips for using audio and video elements effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Do This */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-green-200 dark:border-green-800'>
                <CheckCircle className='w-5 h-5 text-green-600' />
                <span className='font-semibold text-green-700 dark:text-green-400'>✅ Do This</span>
              </div>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Always add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>controls</code> attribute</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Provide multiple source formats</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Include <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>&lt;track&gt;</code> for captions</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>poster</code> for video thumbnails</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Compress media files for faster loading</span>
                </li>
              </ul>
            </div>

            {/* Avoid This */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-red-200 dark:border-red-800'>
                <XCircle className='w-5 h-5 text-red-600' />
                <span className='font-semibold text-red-700 dark:text-red-400'>❌ Avoid This</span>
              </div>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't autoplay with sound (bad UX)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't forget fallback content for old browsers</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use huge uncompressed files</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't rely on single format only</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't skip accessibility features</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Card className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-emerald-700 dark:text-emerald-300'>
            <Globe className='w-5 h-5' />
            Browser Support
          </CardTitle>
          <CardDescription>HTML5 audio and video are universally supported in modern browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: 'Chrome', version: '4+', supported: true },
              { name: 'Firefox', version: '3.5+', supported: true },
              { name: 'Safari', version: '4+', supported: true },
              { name: 'Edge', version: '12+', supported: true },
            ].map((browser, index) => (
              <div key={index} className='bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 text-center'>
                <div className='font-semibold text-slate-700 dark:text-slate-200'>{browser.name}</div>
                <div className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{browser.version}</div>
                <Badge className='mt-2 bg-emerald-600 hover:bg-emerald-700'>✓ Supported</Badge>
              </div>
            ))}
          </div>
          <Alert className='mt-4 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertDescription className='text-blue-700 dark:text-blue-300'>
              <strong>Excellent Support:</strong> HTML5 audio and video have been supported since 2009-2010. However, format support varies - always provide multiple source formats for best compatibility.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Audio & Video Playground</CardTitle>
          <CardDescription>Experiment with media elements in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Audio & Video Playground'
            description='Play around with audio and video examples'
            features={[
              'Audio Controls',
              'Video Controls',
              'Multiple Sources',
              'Custom Styling'
            ]}
            buttonText='Open Audio & Video Playground'
            onLaunchPlayground={onOpenWebPlayground!}
            playgroundData={{
              html: demo.html,
              css: demo.css,
              js: demo.js
            }}
            colorTheme='blue'
          />
        </CardContent>
      </Card>
    </div>
  );
}

