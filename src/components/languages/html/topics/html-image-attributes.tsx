'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Image, Play, Code, CheckCircle, XCircle, Lightbulb, Eye, Zap, AlertCircle, Badge as BadgeIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlImageAttributesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void
}

const basicExample = {
  html: `<h2>Image Attributes Demo</h2>

<!-- Basic Image with Dimensions -->
<div class="example">
  <h3>1. Width & Height Attributes</h3>
  <img 
    src="https://picsum.photos/400/300?image=20"
    alt="A scenic landscape"
    width="400"
    height="300"
    class="demo-img"
  />
  <p class="info">✓ Dimensions set = no layout shift</p>
</div>

<!-- Alt Text Example -->
<div class="example">
  <h3>2. Alt Text (Accessibility)</h3>
  <img 
    src="https://picsum.photos/400/300?image=21"
    alt="A colorful rainbow over mountains during sunset"
    width="400"
    height="300"
    class="demo-img"
  />
  <p class="info">✓ Shows if image fails to load</p>
</div>

<!-- Lazy Loading -->
<div class="example">
  <h3>3. Lazy Loading</h3>
  <img 
    src="https://picsum.photos/400/300?image=22"
    alt="A lazy loaded nature image"
    loading="lazy"
    width="400"
    height="300"
    class="demo-img"
  />
  <p class="info">✓ Loads only when needed</p>
</div>

<!-- Decoding Attribute -->
<div class="example">
  <h3>4. Decoding Attribute</h3>
  <img 
    src="https://picsum.photos/400/300?image=23"
    alt="A high quality photo"
    decoding="async"
    width="400"
    height="300"
    class="demo-img"
  />
  <p class="info">✓ Non-blocking image decode</p>
</div>

<!-- Title Attribute -->
<div class="example">
  <h3>5. Title Attribute (Hover)</h3>
  <img 
    src="https://picsum.photos/400/300?image=24"
    alt="Hover over me to see tooltip"
    title="Beautiful landscape with mountains and sunset"
    width="400"
    height="300"
    class="demo-img"
  />
  <p class="info">✓ Hover to see tooltip</p>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
  transition: all 0.3s;
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
  font-size: 2rem;
  transition: color 0.3s;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.example {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3b82f6;
  transition: all 0.3s;
}

@media (prefers-color-scheme: dark) {
  .example {
    background: #1e293b;
    border-left-color: #60a5fa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.example:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.15);
}

.example h3 {
  color: #3b82f6;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

@media (prefers-color-scheme: dark) {
  .example h3 {
    color: #60a5fa;
  }
}

.demo-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  display: block;
  margin: 0 auto 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  border: 1px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  .demo-img {
    border-color: #334155;
  }
}

.demo-img:hover {
  transform: scale(1.02) rotate(0.5deg);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.25);
}

.info {
  color: #475569;
  font-size: 0.9rem;
  margin: 0;
  padding: 0.75rem 1rem;
  background: #eff6ff;
  border-radius: 6px;
  border: 2px solid #bfdbfe;
  font-weight: 500;
  transition: all 0.3s;
}

@media (prefers-color-scheme: dark) {
  .info {
    background: #1e3a8a;
    color: #93c5fd;
    border-color: #3b82f6;
  }
}`,
  js: ''
};

export default function HtmlImageAttributes({ onOpenWebPlayground }: HtmlImageAttributesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Image}
        category='HTML · Images & Media'
        title='Image Attributes'
        description='Master all HTML image element attributes for perfect image handling and accessibility'
        colorTheme='blue'
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Image className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Image Attributes?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                HTML attributes that control image behavior, performance, and accessibility
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-blue-200 dark:border-blue-700'>&lt;img&gt;</code> tag has many attributes that control how images are loaded, displayed, and accessed. Understanding these attributes is crucial for web performance and accessibility.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Key Benefits</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Proper image attributes improve <strong>page performance</strong>, <strong>user experience</strong>, and <strong>accessibility</strong> for all users.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Essential Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Code className='w-7 h-7' />
            Essential Attributes
          </CardTitle>
          <CardDescription className='text-base'>Must-have attributes for every image</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* src */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>src</Badge>
                <span className='text-xs text-red-600 font-bold'>Required</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Image source URL</strong> - path to the image file
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img src="path/to/image.jpg" />`}
              </code>
            </div>

            {/* alt */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-green-600 hover:bg-green-700'>alt</Badge>
                <span className='text-xs text-red-600 font-bold'>Required</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Alternative text</strong> for accessibility and broken images
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img alt="A beautiful sunset" />`}
              </code>
            </div>

            {/* width */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600 hover:bg-purple-700'>width</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Image width in pixels</strong> - prevents layout shift
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img width="400" />`}
              </code>
            </div>

            {/* height */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-pink-400 dark:hover:border-pink-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-pink-600 hover:bg-pink-700'>height</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Image height in pixels</strong> - reserve space before loading
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img height="300" />`}
              </code>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>Best Practice</AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              <strong>Always include width and height</strong> attributes to prevent layout shift (CLS - Cumulative Layout Shift). This improves Core Web Vitals and user experience!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Performance Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Zap className='w-7 h-7' />
            Performance Attributes
          </CardTitle>
          <CardDescription className='text-base'>Optimize image loading and rendering</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* loading */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600'>loading</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>lazy | eager</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Lazy loading</strong> defers image loading until needed
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                {`<img loading="lazy" />`}
              </code>
              <div className='mt-2 text-xs text-slate-600 dark:text-slate-400'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600' />
                  <span><strong>lazy:</strong> Load on scroll</span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                  <CheckCircle className='w-3 h-3 text-blue-600' />
                  <span><strong>eager:</strong> Load immediately</span>
                </div>
              </div>
            </div>

            {/* decoding */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>decoding</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>sync | async | auto</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Async decoding</strong> doesn't block rendering
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                {`<img decoding="async" />`}
              </code>
              <div className='mt-2 text-xs text-slate-600 dark:text-slate-400'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600' />
                  <span><strong>async:</strong> Non-blocking</span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                  <CheckCircle className='w-3 h-3 text-orange-600' />
                  <span><strong>sync:</strong> Blocks rendering</span>
                </div>
              </div>
            </div>

            {/* fetchpriority */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>fetchpriority</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>high | low | auto</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Resource loading priority</strong> hint
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                {`<img fetchpriority="high" />`}
              </code>
              <div className='mt-2 text-xs text-slate-600 dark:text-slate-400'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-3 h-3 text-red-600' />
                  <span><strong>high:</strong> Hero images (LCP)</span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                  <CheckCircle className='w-3 h-3 text-blue-600' />
                  <span><strong>low:</strong> Below-fold images</span>
                </div>
              </div>
            </div>

            {/* importance */}
            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-orange-600'>importance</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>high | low | auto</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Network request priority</strong>
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-orange-200 dark:border-orange-700 overflow-x-auto'>
                {`<img importance="high" />`}
              </code>
              <div className='mt-2 text-xs text-slate-600 dark:text-slate-400'>
                <div className='flex items-center gap-2'>
                  <Lightbulb className='w-3 h-3 text-amber-600' />
                  <span>Works with lazy loading</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility & UX Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Eye className='w-7 h-7' />
            Accessibility & UX Attributes
          </CardTitle>
          <CardDescription className='text-base'>Improve user experience for everyone</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* title */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>title</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Tooltip text</strong> on hover - additional information
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                {`<img title="A sunset over the ocean" />`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400 mt-2'>
                Appears on mouse hover. Keep it short and helpful.
              </p>
            </div>

            {/* role */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>role</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Semantic role</strong> for screen readers
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                {`<img role="presentation" />`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400 mt-2'>
                Use <code className='bg-white dark:bg-slate-900 px-1'>presentation</code> for decorative images
              </p>
            </div>

            {/* aria-label */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600'>aria-label</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Accessible name</strong> for screen readers
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                {`<img aria-label="Company logo" />`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400 mt-2'>
                For complex images without alt text
              </p>
            </div>

            {/* aria-describedby */}
            <div className='bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-pink-600'>aria-describedby</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Long description</strong> element ID reference
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-pink-200 dark:border-pink-700 overflow-x-auto'>
                {`<img aria-describedby="desc1" />`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400 mt-2'>
                Points to separate detailed description
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Cross-Origin Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <AlertCircle className='w-7 h-7' />
            Security & Cross-Origin Attributes
          </CardTitle>
          <CardDescription className='text-base'>Control security and external resources</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* crossorigin */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-slate-700'>crossorigin</Badge>
                <span className='text-xs text-slate-600'>anonymous | use-credentials</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>CORS policy</strong> for cross-origin images
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img crossorigin="anonymous" />`}
              </code>
            </div>

            {/* referrerpolicy */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-slate-700'>referrerpolicy</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Referrer information</strong> control
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img referrerpolicy="no-referrer" />`}
              </code>
            </div>

            {/* usemap */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-slate-700'>usemap</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Image map</strong> reference
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img usemap="#map-name" />`}
              </code>
            </div>

            {/* ismap */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-slate-700'>ismap</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Server-side image map</strong>
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<img ismap />`}
              </code>
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
          <CardDescription className='text-base'>Try all image attributes together</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Image Attributes Demo"
            description="Interactive examples of all image attributes"
            html={basicExample.html}
            css={basicExample.css}
            js={basicExample.js}
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
          <CardDescription className='text-base'>Write better HTML image code</CardDescription>
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
                <span>Always include <strong>alt text</strong> for accessibility</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Set <strong>width and height</strong> to prevent CLS</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use <strong>lazy loading</strong> for below-fold images</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Set <strong>fetchpriority="high"</strong> for LCP images</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use <strong>decoding="async"</strong> for performance</span>
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
                <span>Empty or generic <strong>alt text</strong> ("image")</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Missing <strong>dimensions</strong> on all images</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span><strong>Loading="eager"</strong> on all images</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Using images for <strong>text or icons</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Ignoring <strong>responsive images</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference Table */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <BadgeIcon className='w-7 h-7' />
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b-2 border-blue-200 dark:border-blue-800'>
                <th className='text-left p-2 text-blue-600 dark:text-blue-400 font-bold'>Attribute</th>
                <th className='text-left p-2 text-blue-600 dark:text-blue-400 font-bold'>Purpose</th>
                <th className='text-left p-2 text-blue-600 dark:text-blue-400 font-bold'>Values</th>
              </tr>
            </thead>
            <tbody className='text-slate-700 dark:text-slate-300'>
              <tr className='border-b border-slate-200 dark:border-slate-700'>
                <td className='p-2 font-mono text-xs bg-slate-50 dark:bg-slate-900/30'>src</td>
                <td className='p-2'>Image URL</td>
                <td className='p-2 text-xs'>Path to image file</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700'>
                <td className='p-2 font-mono text-xs bg-slate-50 dark:bg-slate-900/30'>alt</td>
                <td className='p-2'>Alternative text</td>
                <td className='p-2 text-xs'>Descriptive text</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700'>
                <td className='p-2 font-mono text-xs bg-slate-50 dark:bg-slate-900/30'>width/height</td>
                <td className='p-2'>Image dimensions</td>
                <td className='p-2 text-xs'>Pixels (e.g., 400, 300)</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700'>
                <td className='p-2 font-mono text-xs bg-slate-50 dark:bg-slate-900/30'>loading</td>
                <td className='p-2'>Load timing</td>
                <td className='p-2 text-xs'>lazy | eager</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700'>
                <td className='p-2 font-mono text-xs bg-slate-50 dark:bg-slate-900/30'>decoding</td>
                <td className='p-2'>Decode timing</td>
                <td className='p-2 text-xs'>sync | async | auto</td>
              </tr>
              <tr className='border-b border-slate-200 dark:border-slate-700'>
                <td className='p-2 font-mono text-xs bg-slate-50 dark:bg-slate-900/30'>fetchpriority</td>
                <td className='p-2'>Resource priority</td>
                <td className='p-2 text-xs'>high | low | auto</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Experiment with different image attributes and see the effects!"
          features={[
            'Live image attribute editor',
            'Test all attributes',
            'See loading behavior',
            'Check accessibility'
          ]}
          buttonText="Open Playground"
          onLaunchPlayground={() => onOpenWebPlayground(basicExample.html, basicExample.css, basicExample.js)}
          playgroundData={basicExample}
          colorTheme="blue"
        />
      )}
    </div>
  );
}

