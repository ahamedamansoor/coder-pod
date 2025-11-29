'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Image, Play, Cpu, Code, CheckCircle, XCircle, Lightbulb, Globe, Monitor, Smartphone, Tablet, Zap, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlResponsiveImagesProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<div class="demo-container">
  <h2>Responsive Images Demo</h2>
  
  <!-- srcset with width descriptors -->
  <div class="example">
    <h3>1. srcset with Width Descriptors</h3>
    <img 
      src="https://picsum.photos/400/300?image=10" 
      srcset="
        https://picsum.photos/400/300?image=10 400w,
        https://picsum.photos/800/600?image=10 800w,
        https://picsum.photos/1200/900?image=10 1200w
      "
      sizes="(max-width: 600px) 100vw, 50vw"
      alt="Responsive landscape"
      class="responsive-img"
    >
    <p class="info">Browser selects the best image size based on viewport width</p>
  </div>

  <!-- Picture element for art direction -->
  <div class="example">
    <h3>2. Picture Element (Art Direction)</h3>
    <picture>
      <source 
        media="(min-width: 800px)" 
        srcset="https://picsum.photos/1200/400?image=11">
      <img 
        src="https://picsum.photos/400/600?image=11" 
        alt="Art direction example"
        class="responsive-img"
      >
    </picture>
    <p class="info">Desktop: Wide landscape | Mobile: Portrait crop</p>
  </div>

  <!-- Lazy loading -->
  <div class="example">
    <h3>3. Lazy Loading</h3>
    <img 
      src="https://picsum.photos/800/400?image=12" 
      loading="lazy"
      alt="Lazy loaded image"
      class="responsive-img"
    >
    <p class="info">Images load only when needed</p>
  </div>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
  margin: 0;
  transition: background-color 0.3s;
}

html.dark body {
  background: #0f172a;
}

.demo-container {
  max-width: 900px;
  margin: 0 auto;
}

.demo-container h2 {
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark .demo-container h2 {
  color: #f1f5f9;
}

.example {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

html.dark .example {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.example h3 {
  color: #3b82f6;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark .example h3 {
  color: #60a5fa;
}

.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.responsive-img:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.info {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
  padding: 0.5rem 1rem;
  background: #eff6ff;
  border-radius: 6px;
  border: 2px solid #bfdbfe;
  transition: all 0.3s;
}

html.dark .info {
  background: #1e3a8a;
  color: #93c5fd;
  border-color: #3b82f6;
}

picture {
  display: block;
}`,
  js: ''
};

export default function HtmlResponsiveImages({ onOpenWebPlayground }: HtmlResponsiveImagesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Image} 
        category='HTML Basics' 
        title='Responsive Images' 
        description='Serve the perfect image for every device and screen size'
        colorTheme='blue'
      />

      {/* What are Responsive Images? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Monitor className='w-5 h-5 text-blue-600' />
            What are Responsive Images?
          </CardTitle>
          <CardDescription>Images that adapt to different screen sizes, resolutions, and devices</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Responsive images ensure users get the <strong>optimal image</strong> for their device - not too large (wasting bandwidth) and not too small (looking pixelated). This improves performance, saves data, and enhances user experience.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {/* Desktop */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Monitor className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>Desktop</h3>
              </div>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Large</strong> high-res images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>1920px+ width</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>2x for Retina displays</span>
                </li>
              </ul>
            </div>

            {/* Tablet */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Tablet className='w-5 h-5 text-emerald-600' />
                <h3 className='font-semibold text-emerald-700 dark:text-emerald-300'>Tablet</h3>
              </div>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>Medium</strong> images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>768px-1024px width</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Portrait vs landscape</span>
                </li>
              </ul>
            </div>

            {/* Mobile */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Smartphone className='w-5 h-5 text-purple-600' />
                <h3 className='font-semibold text-purple-700 dark:text-purple-300'>Mobile</h3>
              </div>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span><strong>Small</strong> images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>320px-480px width</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Save mobile data</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Responsive Images?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Performance:</strong> Smaller images = faster loading. <strong>Bandwidth:</strong> Mobile users save data. <strong>Quality:</strong> High-DPI screens get sharp images.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* srcset Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5 text-purple-600' />
            The srcset Attribute
          </CardTitle>
          <CardDescription>Let the browser choose the best image based on screen width or pixel density</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2'>How srcset Works</h4>
            <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
              You provide multiple image sources, and the browser <strong>automatically selects</strong> the most appropriate one based on the device's screen size and resolution.
            </p>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<img 
  src="small.jpg" 
  srcset="
    small.jpg 400w,
    medium.jpg 800w,
    large.jpg 1200w
  "
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Responsive image"
>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Width Descriptors */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>w descriptor</Badge>
              </div>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm'>Width Descriptors</h4>
              <p className='text-xs text-slate-700 dark:text-slate-300 mb-2'>
                Tells browser the <strong>intrinsic width</strong> of each image
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700'>
                srcset="<br/>
                &nbsp;&nbsp;small.jpg <span className='text-purple-600'>400w</span>,<br/>
                &nbsp;&nbsp;large.jpg <span className='text-purple-600'>1200w</span><br/>
                "
              </code>
            </div>

            {/* Pixel Density Descriptors */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>x descriptor</Badge>
              </div>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Pixel Density</h4>
              <p className='text-xs text-slate-700 dark:text-slate-300 mb-2'>
                For <strong>Retina/HiDPI</strong> screens
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700'>
                srcset="<br/>
                &nbsp;&nbsp;logo.jpg <span className='text-blue-600'>1x</span>,<br/>
                &nbsp;&nbsp;logo-2x.jpg <span className='text-blue-600'>2x</span><br/>
                "
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* sizes Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-emerald-600' />
            The sizes Attribute
          </CardTitle>
          <CardDescription>Tell the browser how much space the image will take up</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>sizes</code> attribute works with <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>srcset</code> to tell the browser the <strong>display size</strong> of the image at different breakpoints.
          </p>

          <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
            <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 text-sm'>Syntax Breakdown</h4>
            <div className='space-y-3'>
              <div>
                <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700'>
                  sizes="<span className='text-emerald-600'>(max-width: 600px)</span> <span className='text-blue-600'>100vw</span>, <span className='text-purple-600'>50vw</span>"
                </code>
              </div>
              <div className='grid md:grid-cols-3 gap-2 text-xs'>
                <div>
                  <Badge className='bg-emerald-600 text-xs mb-1'>Media Query</Badge>
                  <p className='text-slate-700 dark:text-slate-300'>Breakpoint condition</p>
                </div>
                <div>
                  <Badge className='bg-blue-600 text-xs mb-1'>If True</Badge>
                  <p className='text-slate-700 dark:text-slate-300'>Image takes 100% width</p>
                </div>
                <div>
                  <Badge className='bg-purple-600 text-xs mb-1'>Default</Badge>
                  <p className='text-slate-700 dark:text-slate-300'>Image takes 50% width</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Common Examples</h4>
            <div className='space-y-2 text-xs'>
              <div>
                <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800'>sizes="100vw"</code>
                <span className='text-slate-600 dark:text-slate-400 ml-2'>→ Full viewport width</span>
              </div>
              <div>
                <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800'>sizes="(max-width: 768px) 100vw, 50vw"</code>
                <span className='text-slate-600 dark:text-slate-400 ml-2'>→ Full on mobile, half on desktop</span>
              </div>
              <div>
                <code className='bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800'>sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"</code>
                <span className='text-slate-600 dark:text-slate-400 ml-2'>→ Multiple breakpoints</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Picture Element */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Image className='w-5 h-5 text-blue-600' />
            The &lt;picture&gt; Element
          </CardTitle>
          <CardDescription>Art direction and format selection for complete control</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;picture&gt;</code> element gives you <strong>full control</strong> over which image to display. Use it for art direction (different crops) or modern format support (WebP, AVIF).
          </p>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
            <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Basic Structure</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="desktop.jpg">
  <source 
    media="(min-width: 768px)" 
    srcset="tablet.jpg">
  <img 
    src="mobile.jpg" 
    alt="Responsive image">
</picture>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Art Direction */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm flex items-center gap-2'>
                <ArrowRight className='w-4 h-4' />
                Art Direction
              </h4>
              <p className='text-xs text-slate-700 dark:text-slate-300 mb-3'>
                Different image crops for different screens
              </p>
              <div className='space-y-2 text-xs'>
                <div className='flex items-center gap-2'>
                  <Monitor className='w-3 h-3 text-purple-600' />
                  <span>Desktop: Wide landscape</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Smartphone className='w-3 h-3 text-purple-600' />
                  <span>Mobile: Portrait crop</span>
                </div>
              </div>
            </div>

            {/* Format Fallback */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2 text-sm flex items-center gap-2'>
                <Zap className='w-4 h-4' />
                Modern Formats
              </h4>
              <p className='text-xs text-slate-700 dark:text-slate-300 mb-3'>
                Serve WebP/AVIF with JPEG fallback
              </p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-700'>
                <code>{`<picture>
  <source type="image/avif">
  <source type="image/webp">
  <img src="fallback.jpg">
</picture>`}</code>
              </pre>
            </div>
          </div>

          <Alert className='border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20'>
            <Lightbulb className='h-4 w-4 text-purple-600 dark:text-purple-400' />
            <AlertDescription className='text-purple-700 dark:text-purple-300'>
              <strong>Order Matters:</strong> The browser uses the <strong>first matching</strong> <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>&lt;source&gt;</code>. Always put most specific (modern formats, largest breakpoints) first!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Modern Image Formats */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Zap className='w-5 h-5 text-amber-600' />
            Modern Image Formats
          </CardTitle>
          <CardDescription>Next-generation formats for better compression and quality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* WebP */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <Badge className='bg-blue-600 mb-2'>WebP</Badge>
              <ul className='text-xs space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span><strong>30% smaller</strong> than JPEG</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span>Excellent browser support</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span>Lossy & lossless</span>
                </li>
              </ul>
            </div>

            {/* AVIF */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
              <Badge className='bg-emerald-600 mb-2'>AVIF</Badge>
              <ul className='text-xs space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span><strong>50% smaller</strong> than JPEG</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span>Best compression</span>
                </li>
                <li className='flex items-start gap-2'>
                  <XCircle className='w-3 h-3 text-orange-600 mt-0.5' />
                  <span>Limited browser support</span>
                </li>
              </ul>
            </div>

            {/* JPEG/PNG */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <Badge className='bg-slate-600 mb-2'>JPEG/PNG</Badge>
              <ul className='text-xs space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span>Universal support</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-3 h-3 text-green-600 mt-0.5' />
                  <span>Always use as fallback</span>
                </li>
                <li className='flex items-start gap-2'>
                  <XCircle className='w-3 h-3 text-orange-600 mt-0.5' />
                  <span>Larger file sizes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mt-4'>
            <h4 className='font-semibold text-amber-700 dark:text-amber-300 mb-2 text-sm'>Recommended Format Strategy</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-amber-200 dark:border-amber-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<picture>
  <!-- Newest format first -->
  <source srcset="image.avif" type="image/avif">
  
  <!-- Second newest -->
  <source srcset="image.webp" type="image/webp">
  
  <!-- Universal fallback -->
  <img src="image.jpg" alt="Description">
</picture>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Lazy Loading */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Cpu className='w-5 h-5 text-green-600' />
            Lazy Loading
          </CardTitle>
          <CardDescription>Defer loading images until they're needed</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Lazy loading delays image loading until they're about to enter the viewport. This dramatically improves initial page load time.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800'>
              <h4 className='font-semibold text-green-700 dark:text-green-300 mb-2 text-sm'>Native Lazy Loading</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-green-200 dark:border-green-700'>
                <code className='text-slate-800 dark:text-slate-200'>{`<img 
  src="image.jpg" 
  loading="lazy"
  alt="Lazy loaded image">`}</code>
              </pre>
              <p className='text-xs text-slate-600 dark:text-slate-400 mt-2'>
                ✅ Simple, native, no JavaScript required
              </p>
            </div>

            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Loading Values</h4>
              <div className='space-y-2 text-xs'>
                <div className='flex items-start gap-2'>
                  <Badge className='bg-green-600 text-xs'>lazy</Badge>
                  <span className='text-slate-700 dark:text-slate-300'>Load when near viewport</span>
                </div>
                <div className='flex items-start gap-2'>
                  <Badge className='bg-blue-600 text-xs'>eager</Badge>
                  <span className='text-slate-700 dark:text-slate-300'>Load immediately (default)</span>
                </div>
                <div className='flex items-start gap-2'>
                  <Badge className='bg-slate-600 text-xs'>auto</Badge>
                  <span className='text-slate-700 dark:text-slate-300'>Browser decides</span>
                </div>
              </div>
            </div>
          </div>

          <Alert className='border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20'>
            <Lightbulb className='h-4 w-4 text-green-600 dark:text-green-400' />
            <AlertDescription className='text-green-700 dark:text-green-300'>
              <strong>Best Practice:</strong> Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>loading="lazy"</code> for all images below the fold. Don't lazy load hero images or critical above-the-fold content!
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
          <CardDescription>When to use each responsive image technique</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* srcset/sizes Use Cases */}
            <div>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <Settings className='w-4 h-4' />
                srcset & sizes
              </h3>
              <div className='grid gap-3'>
                {[
                  { title: 'Same image, different sizes', example: 'Content images that scale' },
                  { title: 'Product photos', example: 'E-commerce listings' },
                  { title: 'Blog post images', example: 'Responsive content images' },
                  { title: 'Retina displays', example: '1x, 2x, 3x versions' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800'>
                    <h4 className='font-semibold text-sm text-purple-700 dark:text-purple-300 mb-1'>{useCase.title}</h4>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Picture Use Cases */}
            <div>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Image className='w-4 h-4' />
                &lt;picture&gt; Element
              </h3>
              <div className='grid gap-3'>
                {[
                  { title: 'Art direction', example: 'Different crops per breakpoint' },
                  { title: 'Modern format support', example: 'WebP/AVIF with fallbacks' },
                  { title: 'Hero images', example: 'Landscape vs portrait' },
                  { title: 'Banner ads', example: 'Different designs per size' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800'>
                    <h4 className='font-semibold text-sm text-blue-700 dark:text-blue-300 mb-1'>{useCase.title}</h4>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <Image className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Responsive Images in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See srcset, sizes, picture, and lazy loading in practical examples
        </p>

        {/* Example 1: srcset with Width Descriptors */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. srcset with Width Descriptors'
              description='Browser automatically selects appropriate image size based on viewport width'
            html={`<div class="image-container">
  <h3>srcset with Width Descriptors</h3>
  <p class="description">Browser chooses the best image size based on viewport width</p>
  <img 
    src="https://picsum.photos/400/300?image=1" 
    srcset="
      https://picsum.photos/400/300?image=1 400w,
      https://picsum.photos/800/600?image=1 800w,
      https://picsum.photos/1200/900?image=1 1200w
    "
    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
    alt="Responsive landscape"
    class="responsive-img"
  >
  <div class="info-badge">
    📊 Browser selects optimal size
  </div>
</div>

<p class="note">🖼️ Resize browser to see different image sizes load</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.image-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .image-container {
  background: #1e293b;
}

h3 {
  color: #3b82f6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #60a5fa;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #bfdbfe;
}

html.dark .info-badge {
  background: #1e3a8a;
  color: #93c5fd;
  border-color: #3b82f6;
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
            icon={Monitor}
            previewHeight='450px'
          />
        </CardContent>
      </Card>

      {/* Example 2: Pixel Density */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. Pixel Density Descriptors (Retina)'
            description='Serve high-resolution images for Retina/HiDPI displays'
            html={`<div class="image-container">
  <h3>Pixel Density for Retina Displays</h3>
  <p class="description">Sharp images on high-resolution screens</p>
  <img 
    src="https://picsum.photos/200/200?image=2" 
    srcset="
      https://picsum.photos/200/200?image=2 1x,
      https://picsum.photos/400/400?image=2 2x
    "
    alt="Logo or icon"
    class="retina-img"
  >
  <div class="info-badge">
    ✨ 2x sharper on Retina displays
  </div>
</div>

<p class="note">💎 Use 1x and 2x descriptors for icons and logos</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.image-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .image-container {
  background: #1e293b;
}

h3 {
  color: #8b5cf6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #c4b5fd;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.retina-img {
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #8b5cf6;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #e9d5ff;
}

html.dark .info-badge {
  background: #581c87;
  color: #d8b4fe;
  border-color: #8b5cf6;
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
            icon={Smartphone}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 3: Picture Element */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. Picture Element (Art Direction)'
            description='Serve different images for different screen sizes and orientations'
            html={`<div class="image-container">
  <h3>Art Direction with Picture</h3>
  <p class="description">Desktop shows wide landscape, mobile shows portrait crop</p>
  <picture>
    <source 
      media="(min-width: 1024px)" 
      srcset="https://picsum.photos/1200/400?image=3">
    <source 
      media="(min-width: 768px)" 
      srcset="https://picsum.photos/800/600?image=3">
    <img 
      src="https://picsum.photos/400/600?image=3" 
      alt="Art direction example"
      class="responsive-img"
    >
  </picture>
  <div class="info-badge">
    🎨 Different crops per breakpoint
  </div>
</div>

<p class="note">📱 Resize window to see different image crops</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.image-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .image-container {
  background: #1e293b;
}

h3 {
  color: #10b981;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #6ee7b7;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

picture {
  display: block;
  margin-bottom: 1rem;
}

.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #a7f3d0;
}

html.dark .info-badge {
  background: #064e3b;
  color: #6ee7b7;
  border-color: #10b981;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
            colorTheme='emerald'
            icon={Tablet}
            previewHeight='500px'
          />
        </CardContent>
      </Card>

      {/* Example 4: Lazy Loading */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. Lazy Loading'
            description='Defer image loading until needed to improve page load performance'
            html={`<div class="image-container">
  <h3>Lazy Loading Images</h3>
  <p class="description">Images load only when scrolling into viewport</p>
  <img 
    src="https://picsum.photos/800/400?image=4" 
    loading="lazy"
    alt="Lazy loaded image"
    class="responsive-img"
  >
  <div class="info-badge">
    🚀 Faster initial page load
  </div>
</div>

<p class="note">⚡ Add loading="lazy" to defer offscreen images</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.image-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .image-container {
  background: #1e293b;
}

h3 {
  color: #f59e0b;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #fcd34d;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #fde68a;
}

html.dark .info-badge {
  background: #78350f;
  color: #fcd34d;
  border-color: #f59e0b;
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
            icon={Zap}
            previewHeight='450px'
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
          <CardDescription>Tips for implementing responsive images effectively</CardDescription>
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
                  <span>Always provide multiple image sizes</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Use modern formats (WebP, AVIF) with fallbacks</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>loading="lazy"</code> for below-fold</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Include descriptive alt text</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Specify width and height to prevent layout shift</span>
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
                  <span>Don't use single large image for all devices</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't lazy load above-the-fold images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't forget fallback formats for modern images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use CSS to resize oversized images</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't skip compression and optimization</span>
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
          <CardDescription>Responsive image features are well-supported in modern browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: 'Chrome', version: '38+', supported: true },
              { name: 'Firefox', version: '38+', supported: true },
              { name: 'Safari', version: '9+', supported: true },
              { name: 'Edge', version: '13+', supported: true },
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
              <strong>Great Support:</strong> srcset, sizes, and picture elements have been supported since 2015-2016. WebP is universal, AVIF is in modern browsers (Chrome 85+, Firefox 93+).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Responsive Images Playground</CardTitle>
          <CardDescription>Experiment with responsive images in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Responsive Images Playground'
            description='Play around with srcset, sizes, and picture examples'
            features={[
              'srcset & sizes',
              'Picture Element',
              'Lazy Loading',
              'Art Direction'
            ]}
            buttonText='Open Responsive Images Playground'
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

