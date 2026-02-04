
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Play, ExternalLink, Link as LinkIcon, FileImage, ShieldAlert, BadgeInfo, Frame, Rocket } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function HtmlImages({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const simpleImageCode = `<img 
  src="https://picsum.photos/seed/picsum/400/250" 
  alt="A random scenic image from Picsum Photos"
/>`;

    const attributesCode = `<img 
  src="https://picsum.photos/seed/road/400/250" 
  alt="A winding road through a forest" 
  width="400" 
  height="250"
/>`;

    const lazyLoadingCode = `<img 
  src="https://picsum.photos/seed/lazy/400/250" 
  alt="This image will only load when you scroll near it."
  width="400"
  height="250"
  loading="lazy"
/>`;

    const linkImageCode = `<a href="https://picsum.photos/" target="_blank">
  <img 
    src="https://picsum.photos/seed/mountains/400/250" 
    alt="Click to visit Picsum Photos" 
    width="400" 
    height="250"
  />
</a>`;
    
    const figureCode = `<figure>
  <img 
    src="https://picsum.photos/seed/city/400/250" 
    alt="A bustling city street at night" 
    width="400" 
    height="250"
  />
  <figcaption>Fig.1 - A city skyline at night, showcasing modern architecture.</figcaption>
</figure>`;

    const fullPlaygroundCode = {
        html: `<h1>Image Showcase</h1>

<h2>Basic Image with Sizing</h2>
<img 
  src="https://picsum.photos/seed/beach/300/200" 
  alt="A beautiful sunny beach"
  width="300"
  height="200"
/>

<h2>Linked Image</h2>
<p>Click the image below to go to Unsplash.</p>
<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://picsum.photos/seed/camera/300/200" 
    alt="A vintage camera, click to visit Unsplash"
    width="300"
    height="200"
  />
</a>

<h2>Image with a Semantic Caption</h2>
<figure>
  <img 
    src="https://picsum.photos/seed/forest/300/200" 
    alt="A dense green forest with sunlight filtering through."
    width="300"
    height="200"
  />
  <figcaption>Fig.1 - A forest in the morning light.</figcaption>
</figure>

<p style="margin-top: 100vh;">Scroll down to see the lazy-loaded image...</p>

<h2>Lazy-Loaded Image</h2>
<img 
    src="https://picsum.photos/seed/lazyload/300/200" 
    alt="This image loaded only when it was needed."
    width="300"
    height="200"
    loading="lazy"
/>
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
img {
  border: 2px solid hsl(var(--border));
  border-radius: 8px;
  max-width: 100%; /* Important for responsiveness */
  height: auto;
  display: block; /* To prevent extra space below */
  margin-bottom: 1rem;
}
a img {
  border-color: hsl(var(--primary));
  transition: transform 0.2s ease-in-out;
}
a:hover img {
  transform: scale(1.05);
  box-shadow: 0 4px 15px hsla(var(--foreground), 0.1);
}
figure {
  border: 1px solid hsl(var(--border));
  padding: 1rem;
  border-radius: 8px;
  display: inline-block; /* To make it wrap the image */
  background-color: hsl(var(--muted));
  margin: 0;
}
figcaption {
  margin-top: 0.5rem;
  font-style: italic;
  font-size: 0.9rem;
  text-align: center;
  color: hsl(var(--muted-foreground));
}`,
        js: ''
    };

    return (
      <div className="space-y-10 pb-16">
        <PageHeader
          icon={FileImage}
          category="HTML Basics"
          title="HTML Images"
          description="Embedding visual content into your web pages"
          colorTheme="blue"
        />

        <Card>
            <CardHeader>
                <CardTitle>Anatomy of the `&lt;img&gt;` Tag</CardTitle>
                <CardDescription>The `&lt;img&gt;` tag is used to embed an image. It's an "empty" or "void" element, meaning it has no closing tag.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg border">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{simpleImageCode}</pre>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <p className="text-sm">It requires at least two attributes: <code className="font-mono bg-foreground/10 p-1 rounded">src</code> to specify the image source and <code className="font-mono bg-foreground/10 p-1 rounded">alt</code> for alternative text.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Attributes: `src` and `alt`</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><ExternalLink className="w-5 h-5 text-primary"/>`src` (Source)</h3>
                    <p className="text-xs text-muted-foreground mb-2">Specifies the path to the image. It can be an absolute URL to another website or a relative path to a file on your own server.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><BadgeInfo className="w-5 h-5 text-primary"/>`alt` (Alternative Text)</h3>
                    <p className="text-xs text-muted-foreground mb-2">Provides a text description of the image. This is crucial for accessibility (for screen readers) and is displayed if the image fails to load.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Sizing: `width` and `height`</CardTitle>
                <CardDescription>Specifying the image dimensions helps the browser reserve space for the image before it loads, preventing the page layout from jumping around.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{attributesCode}</pre>
                </div>
            </CardContent>
        </Card>

        {/* HTML Images in Action */}
        <div className='space-y-6'>
          <div className='flex items-center gap-3 mb-4'>
            <FileImage className='w-6 h-6 text-blue-600' />
            <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>HTML Images in Action</h2>
          </div>
          <p className='text-slate-600 dark:text-slate-400 mb-6'>
            See how images work with sizing, lazy loading, links, and captions
          </p>

          {/* Example 1: Basic Image */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="1. Basic Image"
                description="Simple image with alt text for accessibility"
              html={`<img 
  src="https://picsum.photos/seed/nature/400/250" 
  alt="A scenic nature view"
/>

<p class="note">📝 Always include <strong>alt text</strong> for accessibility and SEO</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

img {
  max-width: 100%;
  height: auto;
  border: 3px solid #3b82f6;
  border-radius: 8px;
  display: block;
  margin: 1.5rem 0;
}

html.dark img {
  border-color: #60a5fa;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #93c5fd;
}`}
                colorTheme="blue"
                icon={FileImage}
                previewHeight="500px"
              />
            </CardContent>
          </Card>

          {/* Example 2: Sized Image */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="2. Image with Width & Height"
                description="Specifying dimensions prevents layout shift during page load"
                html={`<img 
  src="https://picsum.photos/seed/city/350/200" 
  alt="A modern cityscape"
  width="350"
  height="200"
/>

<p class="note">📐 Specifying <strong>width</strong> and <strong>height</strong> helps browsers reserve space before the image loads</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

img {
  border: 3px solid #10b981;
  border-radius: 8px;
  display: block;
  margin: 1.5rem auto;
}

html.dark img {
  border-color: #34d399;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
                colorTheme="emerald"
                icon={FileImage}
                previewHeight="500px"
              />
            </CardContent>
          </Card>

          {/* Example 3: Linked Image */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="3. Clickable Image"
                description="Wrap images in anchor tags to make them clickable links"
                html={`<a href="https://picsum.photos" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://picsum.photos/seed/mountains/350/200" 
    alt="Click to visit Picsum Photos - Mountain landscape"
    width="350"
    height="200"
    class="clickable"
  />
</a>

<p class="note">🔗 Click the image above to visit Picsum Photos</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
  text-align: center;
}

html.dark body {
  background: #0f172a;
}

a {
  display: inline-block;
  text-decoration: none;
}

img.clickable {
  border: 3px solid #f59e0b;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 1.5rem 0;
}

html.dark img.clickable {
  border-color: #fbbf24;
}

img.clickable:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.4);
  border-color: #d97706;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #78350f;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .note {
  background: #713f12;
  color: #fef3c7;
}`}
                colorTheme="amber"
                icon={LinkIcon}
                previewHeight="550px"
              />
            </CardContent>
          </Card>

          {/* Example 4: Figure with Caption */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="4. Image with Caption (Figure)"
                description="Use figure and figcaption for semantic image captions"
                html={`<figure>
  <img 
    src="https://picsum.photos/seed/beach/350/200" 
    alt="A pristine beach at sunset"
    width="350"
    height="200"
  />
  <figcaption>Fig. 1 - A beautiful beach at golden hour</figcaption>
</figure>

<p class="note">📝 Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for semantic captions</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

html.dark body {
  background: #0f172a;
}

figure {
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border: 3px solid #8b5cf6;
  border-radius: 8px;
  max-width: fit-content;
}

html.dark figure {
  background: #1e293b;
  border-color: #a78bfa;
}

figure img {
  display: block;
  border-radius: 4px;
}

figcaption {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 2px solid #e9d5ff;
  font-style: italic;
  text-align: center;
  color: #6b21a8;
  font-size: 0.9rem;
}

html.dark figcaption {
  border-top-color: #581c87;
  color: #e9d5ff;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
  max-width: 400px;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}

code {
  background: rgba(139, 92, 246, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                colorTheme="purple"
                icon={Frame}
                previewHeight="550px"
              />
            </CardContent>
          </Card>

          {/* Example 5: Lazy Loading */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="5. Lazy-Loaded Images"
                description="Images load only when scrolled into view - great for performance"
                html={`<h2 class="title">⚡ Lazy Loading Demo</h2>
<p class="scroll-hint">Scroll down to see images load on demand ⬇️</p>

<div class="spacer">
  📜 Scroll down to see lazy loading in action
</div>

<img 
  src="https://picsum.photos/seed/lazy1/350/200" 
  alt="Lazy loaded image 1"
  width="350"
  height="200"
  loading="lazy"
  class="lazy-img"
/>
<p class="label">Image 1 - Loaded when visible</p>

<img 
  src="https://picsum.photos/seed/lazy2/350/200" 
  alt="Lazy loaded image 2"
  width="350"
  height="200"
  loading="lazy"
  class="lazy-img"
/>
<p class="label">Image 2 - Loaded when visible</p>

<p class="note">🚀 The <code>loading="lazy"</code> attribute defers image loading until needed</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
  text-align: center;
}

html.dark body {
  background: #0f172a;
}

.title {
  color: #ec4899;
  margin-bottom: 0.5rem;
}

html.dark .title {
  color: #f472b6;
}

.scroll-hint {
  color: #be185d;
  font-weight: 600;
  margin-bottom: 1rem;
}

html.dark .scroll-hint {
  color: #fb7185;
}

.spacer {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px dashed #ec4899;
  border-radius: 8px;
  margin: 1rem 0;
  color: #9d174d;
  font-size: 1.1rem;
}

html.dark .spacer {
  border-color: #f472b6;
  color: #fda4af;
}

.lazy-img {
  border: 3px solid #ec4899;
  border-radius: 8px;
  display: block;
  margin: 1rem auto;
  animation: fadeIn 0.6s ease-in;
}

html.dark .lazy-img {
  border-color: #f472b6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.label {
  color: #ec4899;
  font-weight: 500;
  margin: 0.5rem 0 1.5rem 0;
  font-size: 0.9rem;
}

html.dark .label {
  color: #f472b6;
}

.note {
  margin-top: 2rem;
  padding: 0.75rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .note {
  background: #831843;
  color: #fecdd3;
}

code {
  background: rgba(236, 72, 153, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}`}
                colorTheme="pink"
                icon={Rocket}
                previewHeight="600px"
              />
            </CardContent>
          </Card>

          {/* Example 6: Responsive Image */}
          <Card>
            <CardContent className='pt-6'>
              <FrontendCodePreview
                title="6. Responsive Image"
                description="Images that adapt to their container width using CSS"
                html={`<h2 class="title">📱 Responsive Image</h2>

<img 
  src="https://picsum.photos/seed/responsive/600/300" 
  alt="Responsive image that adapts to container"
  class="responsive-img"
/>

<p class="note">📦 Try resizing your browser - the image adapts! <code>max-width: 100%</code> makes it responsive</p>`}
                css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
  text-align: center;
}

html.dark body {
  background: #0f172a;
}

.title {
  color: #06b6d4;
  margin-bottom: 1.5rem;
}

html.dark .title {
  color: #22d3ee;
}

.responsive-img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 3px solid #06b6d4;
  border-radius: 8px;
  display: block;
  margin: 1rem auto;
  transition: all 0.3s;
}

html.dark .responsive-img {
  border-color: #22d3ee;
}

.responsive-img:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #cffafe;
  color: #164e63;
  border-radius: 6px;
  font-size: 0.9rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

html.dark .note {
  background: #164e63;
  color: #cffafe;
}

code {
  background: rgba(6, 182, 212, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-weight: 600;
}`}
                colorTheme="cyan"
                icon={Image}
                previewHeight="550px"
              />
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary"><Rocket className="w-5 h-5"/>Performance Boost: Lazy Loading</CardTitle>
                <CardDescription>The `loading="lazy"` attribute tells the browser to wait to load an image until the user scrolls near it. This is great for performance.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">This simple attribute can significantly speed up your initial page load time and save data for users on slow connections, especially on pages with many images below the fold.</p>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{lazyLoadingCode}</pre>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Note: The effect is best observed on a long page. Use your browser's developer tools (Network tab) to see images loading as you scroll.</p>
            </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><LinkIcon className="w-5 h-5 text-primary"/>Image as a Link</CardTitle>
                    <CardDescription>To make an image clickable, simply wrap the `&lt;img&gt;` tag within an `&lt;a&gt;` (anchor) tag.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{linkImageCode}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Frame className="w-5 h-5 text-primary"/>Semantic Captions</CardTitle>
                    <CardDescription>The `&lt;figure&gt;` and `&lt;figcaption&gt;` tags are the correct way to associate an image with a caption.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{figureCode}</pre>
                    </div>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Interactive Images Playground</CardTitle>
                <CardDescription>Experiment with all image features in a live code editor with preview and console.</CardDescription>
            </CardHeader>
            <CardContent>
                <InteractivePlayground
                  title="Complete Images Playground"
                  description="Explore basic images, sizing, lazy loading, linked images, and semantic captions"
                  features={[
                    'Image Sizing',
                    'Lazy Loading',
                    'Linked Images',
                    'Figure & Caption'
                  ]}
                  buttonText="Open Images Playground"
                  onLaunchPlayground={onOpenWebPlayground}
                  playgroundData={{
                    html: fullPlaygroundCode.html,
                    css: fullPlaygroundCode.css,
                    js: fullPlaygroundCode.js
                  }}
                  colorTheme="blue"
                />
            </CardContent>
        </Card>
      </div>
    );
}
