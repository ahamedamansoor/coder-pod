
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Video, Play, Info, Subtitles } from 'lucide-react';
import React from 'react';

export default function AudioAndVideo({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const commonAttributes = [
        { attr: 'src', desc: 'The URL of the media file.' },
        { attr: 'controls', desc: 'Shows the default browser controls (play, pause, volume, etc.).' },
        { attr: 'autoplay', desc: 'Starts playing automatically. Note: Most browsers require the `muted` attribute for this to work.' },
        { attr: 'loop', desc: 'Repeats the media file from the beginning after it finishes.' },
        { attr: 'muted', desc: 'Mutes the audio output by default.' },
        { attr: 'preload', desc: 'Hints to the browser how the file should be loaded. Values: `auto`, `metadata`, `none`.' },
    ];

    const videoOnlyAttributes = [
        { attr: 'width/height', desc: 'Sets the dimensions of the video player.' },
        { attr: 'poster', desc: 'An image to show while the video is downloading, or until the user hits play.' },
        { attr: 'playsinline', desc: 'Allows video to play "inline" on mobile devices, instead of entering fullscreen.' },
    ];
    
    const audioExample = `<audio controls>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
  <source src="https://www.soundhelix.com/examples/ogg/SoundHelix-Song-1.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>`;

    const videoExample = `<video controls width="400" poster="https://picsum.photos/seed/poster/400/225">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm" />
  <track default src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  Sorry, your browser doesn't support embedded videos.
</video>`;
    
    const playgroundCode = {
        html: `<h2>Audio Player</h2>
<p>This audio player includes multiple sources for browser compatibility.</p>
<audio controls style="width: 100%;">
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
  <source src="https://www.soundhelix.com/examples/ogg/SoundHelix-Song-1.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>

<hr style="margin: 2rem 0;" />

<h2>Video Player</h2>
<p>This video player includes a poster image and English subtitles.</p>
<video controls width="100%" poster="https://picsum.photos/seed/playground/600/338" data-ai-hint="nature water">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm" />
  <track default src="data:text/vtt;base64,V0VCVlRUDQoNCjAwOjAwOjAyLjUwMCAtLT4gMDA6MDA6MDQuNTAwDQpCeSBub3csIHlvdSdsbCBzaG91dCwNCg0KMDA6MDA6MDQuNTAwIC0tPiAwMDowMDowNi4wMDANCkhvdyBkaWQgSSBldmVyIGdldCBhbG9uZyB3aXRob3V0IHlvdT8=" kind="subtitles" srclang="en" label="English" />
  Sorry, your browser doesn't support embedded videos.
</video>
`,
        css: `body {
  font-family: sans-serif;
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
}
h2 {
  color: hsl(var(--primary));
  border-bottom: 1px solid hsl(var(--border));
  padding-bottom: 5px;
  margin-top: 1rem;
}
video {
  max-width: 600px;
  border-radius: 8px;
  border: 2px solid hsl(var(--border));
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Video className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Audio and Video</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Embedding media directly into your web pages with HTML5.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Common Attributes</CardTitle>
                    <CardDescription>These attributes work for both `&lt;audio /&gt;` and `&lt;video /&gt;` tags.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {commonAttributes.map(attr => (
                        <div key={attr.attr} className="bg-muted p-4 rounded-lg border">
                            <code className="font-mono font-bold text-primary">{attr.attr}</code>
                            <p className="text-sm text-muted-foreground mt-1">{attr.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Music className="w-6 h-6 text-primary" />The `&lt;audio /&gt;` Element</CardTitle>
                        <CardDescription>Used to embed sound content in documents. It's crucial to provide multiple `&lt;source /&gt;` elements for browser compatibility.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{audioExample}</pre>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><Video className="w-6 h-6 text-primary" />The `&lt;video /&gt;` Element</CardTitle>
                        <CardDescription>Used for playing videos. The `&lt;track /&gt;` element is vital for adding subtitles, making your content accessible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="bg-muted rounded-md p-4 mb-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{videoExample}</pre>
                        </div>
                    </CardContent>
                </Card>
            </div>

             <Card>
                <CardHeader>
                    <CardTitle>Video-Only Attributes</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                    {videoOnlyAttributes.map(attr => (
                        <div key={attr.attr} className="bg-muted p-4 rounded-lg border">
                            <code className="font-mono font-bold text-primary">{attr.attr}</code>
                            <p className="text-sm text-muted-foreground mt-1">{attr.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Info className="w-5 h-5" />Best Practices & Key Concepts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">The `&lt;source /&gt;` Element</h3>
                        <p className="text-sm text-muted-foreground">Different browsers support different file formats (like `.mp4`, `.webm`, `.ogg`). To ensure compatibility, you can provide multiple source files inside the `&lt;audio /&gt;` or `&lt;video /&gt;` tag. The browser will use the first one it recognizes.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg flex items-center gap-2"><Subtitles className="w-5 h-5" />The `&lt;track /&gt;` Element (for Accessibility)</h3>
                        <p className="text-sm text-muted-foreground">Used with `&lt;video /&gt;` to specify timed text tracks (like subtitles or captions). This is crucial for users who are deaf or hard of hearing. The `src` attribute points to a WebVTT file (`.vtt`), which contains the timed text. You can also embed VTT content directly using a data URI for simple cases.</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Fallback Content</h3>
                        <p className="text-sm text-muted-foreground">Any text you place between the opening and closing `&lt;audio /&gt;` or `&lt;video /&gt;` tags will be displayed only by browsers that do not support the element, acting as a helpful fallback message.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>See It All In Action</CardTitle>
                    <CardDescription>Open this full example in the Web Playground to interact with both an audio and video player, complete with controls, a poster image, and subtitles.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
