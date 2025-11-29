'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, PenTool, Paintbrush, Play, Code, CheckCircle, XCircle, Lightbulb, Globe, Zap, Image, Layers, Settings, ArrowRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlSvgAndCanvasProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<svg width='120' height='120' viewBox='0 0 120 120'>
  <circle cx='60' cy='60' r='50' fill='#2563eb'/>
  <text x='60' y='66' font-size='28' text-anchor='middle' fill='#fff'>SVG</text>
</svg>
<canvas id='c' width='120' height='120'></canvas>`,
  css: `svg,canvas{margin:1rem;border-radius:8px;background:#f1f5f9;font-family:system-ui}`,
  js: `const ctx=document.getElementById('c').getContext('2d');ctx.fillStyle='#10b981';ctx.fillRect(10,10,100,100);ctx.fillStyle='#fff';ctx.font='24px system-ui';ctx.fillText('Canvas',15,70);`
};

export default function HtmlSvgAndCanvas({ onOpenWebPlayground }: HtmlSvgAndCanvasProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Paintbrush} 
        category='HTML Basics' 
        title='SVG & Canvas' 
        description='Two powerful ways to create graphics on the web'
        colorTheme='blue'
      />

      {/* What are SVG & Canvas? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Layers className='w-5 h-5 text-blue-600' />
            What are SVG & Canvas?
          </CardTitle>
          <CardDescription>Two different approaches to creating graphics in HTML</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Both SVG and Canvas allow you to create graphics, but they work in fundamentally different ways. Understanding when to use each is key to building performant web applications.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* SVG */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <PenTool className='w-4 h-4' />
                SVG (Scalable Vector Graphics)
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span><strong>Vector-based</strong> - uses math</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span><strong>DOM elements</strong> - can be styled with CSS</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span><strong>Scalable</strong> - no quality loss when resized</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span><strong>Event handlers</strong> - individual elements clickable</span>
                </li>
              </ul>
              <div className='mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700'>
                <code className='text-xs text-slate-800 dark:text-slate-200'>&lt;svg&gt;&lt;circle /&gt;&lt;/svg&gt;</code>
              </div>
            </div>
            
            {/* Canvas */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Paintbrush className='w-4 h-4' />
                Canvas (Bitmap Graphics)
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Pixel-based</strong> - raster graphics</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>JavaScript API</strong> - programmatic drawing</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Better performance</strong> - for many objects</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Immediate mode</strong> - draw and forget</span>
                </li>
              </ul>
              <div className='mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                <code className='text-xs text-slate-800 dark:text-slate-200'>&lt;canvas id="c"&gt;&lt;/canvas&gt;</code>
              </div>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Quick Rule of Thumb</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Use <strong>SVG</strong> for logos, icons, diagrams, charts. Use <strong>Canvas</strong> for games, photo editing, complex animations, thousands of objects.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Detailed Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-amber-600' />
            SVG vs Canvas Comparison
          </CardTitle>
          <CardDescription>Choose the right tool for your graphics needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b-2 border-slate-200 dark:border-slate-700'>
                  <th className='text-left p-3 font-semibold text-slate-700 dark:text-slate-300'>Feature</th>
                  <th className='text-left p-3 font-semibold text-purple-600 dark:text-purple-400'>SVG</th>
                  <th className='text-left p-3 font-semibold text-blue-600 dark:text-blue-400'>Canvas</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100 dark:divide-slate-800'>
                <tr>
                  <td className='p-3 font-medium'>Type</td>
                  <td className='p-3'>Vector (XML-based)</td>
                  <td className='p-3'>Raster (pixel-based)</td>
                </tr>
                <tr className='bg-slate-50 dark:bg-slate-900/30'>
                  <td className='p-3 font-medium'>Scalability</td>
                  <td className='p-3 text-green-600 dark:text-green-400'>✓ Infinite scaling</td>
                  <td className='p-3 text-orange-600 dark:text-orange-400'>✗ Pixelated when scaled</td>
                </tr>
                <tr>
                  <td className='p-3 font-medium'>DOM Access</td>
                  <td className='p-3 text-green-600 dark:text-green-400'>✓ Each element accessible</td>
                  <td className='p-3 text-orange-600 dark:text-orange-400'>✗ Single element</td>
                </tr>
                <tr className='bg-slate-50 dark:bg-slate-900/30'>
                  <td className='p-3 font-medium'>Performance</td>
                  <td className='p-3'>Good for few elements</td>
                  <td className='p-3 text-green-600 dark:text-green-400'>✓ Better for many objects</td>
                </tr>
                <tr>
                  <td className='p-3 font-medium'>Event Handling</td>
                  <td className='p-3 text-green-600 dark:text-green-400'>✓ Individual elements</td>
                  <td className='p-3'>Manual hit detection</td>
                </tr>
                <tr className='bg-slate-50 dark:bg-slate-900/30'>
                  <td className='p-3 font-medium'>CSS Styling</td>
                  <td className='p-3 text-green-600 dark:text-green-400'>✓ Full CSS support</td>
                  <td className='p-3 text-orange-600 dark:text-orange-400'>✗ No CSS styling</td>
                </tr>
                <tr>
                  <td className='p-3 font-medium'>Accessibility</td>
                  <td className='p-3 text-green-600 dark:text-green-400'>✓ Screen reader friendly</td>
                  <td className='p-3'>Requires extra work</td>
                </tr>
                <tr className='bg-slate-50 dark:bg-slate-900/30'>
                  <td className='p-3 font-medium'>Best For</td>
                  <td className='p-3'>Icons, logos, charts</td>
                  <td className='p-3'>Games, complex animations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* SVG Basics */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <PenTool className='w-5 h-5 text-purple-600' />
            SVG Basics
          </CardTitle>
          <CardDescription>Essential SVG elements and attributes</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Basic Shapes */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm'>Basic Shapes</h4>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li><code>&lt;circle&gt;</code> - Circles</li>
                <li><code>&lt;rect&gt;</code> - Rectangles</li>
                <li><code>&lt;line&gt;</code> - Straight lines</li>
                <li><code>&lt;polygon&gt;</code> - Multi-sided shapes</li>
                <li><code>&lt;ellipse&gt;</code> - Ovals</li>
                <li><code>&lt;path&gt;</code> - Complex paths</li>
              </ul>
            </div>

            {/* Common Attributes */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Common Attributes</h4>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li><code>fill</code> - Fill color</li>
                <li><code>stroke</code> - Border color</li>
                <li><code>stroke-width</code> - Border width</li>
                <li><code>opacity</code> - Transparency</li>
                <li><code>transform</code> - Transformations</li>
              </ul>
            </div>

            {/* ViewBox */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2 text-sm'>ViewBox</h4>
              <p className='text-xs text-slate-700 dark:text-slate-300 mb-2'>
                Controls coordinate system and aspect ratio
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-700 block'>
                viewBox="0 0 100 100"
              </code>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Example: Circle</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<svg width="200" height="200" viewBox="0 0 200 200">
  <circle 
    cx="100" 
    cy="100" 
    r="80" 
    fill="#8b5cf6" 
    stroke="#6d28d9" 
    stroke-width="4" 
  />
</svg>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Canvas Basics */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Paintbrush className='w-5 h-5 text-blue-600' />
            Canvas Basics
          </CardTitle>
          <CardDescription>Essential Canvas API methods and concepts</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Setup */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Setup</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-blue-200 dark:border-blue-700'>
                <code>{`const canvas = 
  document.getElementById('c');
const ctx = 
  canvas.getContext('2d');`}</code>
              </pre>
            </div>

            {/* Drawing Methods */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2 text-sm'>Drawing Methods</h4>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li><code>fillRect()</code> - Rectangle</li>
                <li><code>strokeRect()</code> - Outline</li>
                <li><code>arc()</code> - Circles/arcs</li>
                <li><code>lineTo()</code> - Lines</li>
                <li><code>fillText()</code> - Text</li>
              </ul>
            </div>

            {/* Styles */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm'>Styles</h4>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li><code>fillStyle</code> - Fill color</li>
                <li><code>strokeStyle</code> - Stroke color</li>
                <li><code>lineWidth</code> - Line width</li>
                <li><code>globalAlpha</code> - Opacity</li>
              </ul>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Example: Rectangle & Circle</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = '#3b82f6';
ctx.fillRect(50, 50, 150, 100);

// Draw circle
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = '#10b981';
ctx.fill();`}</code>
            </pre>
          </div>

          <Alert className='border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20'>
            <Lightbulb className='h-4 w-4 text-orange-600 dark:text-orange-400' />
            <AlertDescription className='text-orange-700 dark:text-orange-300'>
              <strong>Canvas Performance:</strong> Canvas doesn't retain what you draw. To animate, you must clear and redraw the entire canvas on each frame.
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
          <CardDescription>When to use SVG vs Canvas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* SVG Use Cases */}
            <div>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <PenTool className='w-4 h-4' />
                Use SVG For:
              </h3>
              <div className='grid gap-3'>
                {[
                  { title: 'Logos & Icons', desc: 'Scalable across all sizes' },
                  { title: 'Charts & Graphs', desc: 'Interactive data visualization' },
                  { title: 'UI Elements', desc: 'Buttons, badges, shapes' },
                  { title: 'Diagrams', desc: 'Flowcharts, architecture diagrams' },
                  { title: 'Illustrations', desc: 'Artwork that needs to scale' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800'>
                    <h4 className='font-semibold text-sm text-purple-700 dark:text-purple-300 mb-1 flex items-center gap-2'>
                      <CheckCircle className='w-3 h-3' />
                      {useCase.title}
                    </h4>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Use Cases */}
            <div>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Paintbrush className='w-4 h-4' />
                Use Canvas For:
              </h3>
              <div className='grid gap-3'>
                {[
                  { title: 'Games', desc: '2D game engines and animations' },
                  { title: 'Photo Editing', desc: 'Pixel manipulation, filters' },
                  { title: 'Data Visualization', desc: 'Thousands of data points' },
                  { title: 'Generative Art', desc: 'Complex algorithmic art' },
                  { title: 'Video Processing', desc: 'Frame manipulation' },
                ].map((useCase, index) => (
                  <div key={index} className='bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800'>
                    <h4 className='font-semibold text-sm text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-2'>
                      <CheckCircle className='w-3 h-3' />
                      {useCase.title}
                    </h4>
                    <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.desc}</p>
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
          <Layers className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>SVG & Canvas in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See both technologies with practical examples and comparisons
        </p>

        {/* Example 1: SVG Circle */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. SVG Circle'
              description='Create a scalable vector circle with SVG'
            html={`<div class="graphic-container">
  <h3>SVG Circle</h3>
  <p class="description">Vector-based, infinitely scalable circle</p>
  <svg viewBox="0 0 200 200" class="svg-demo">
    <circle cx="100" cy="100" r="80" fill="#8b5cf6" stroke="#6d28d9" stroke-width="4"/>
  </svg>
  <code class="code-label">&lt;circle cx="100" cy="100" r="80" /&gt;</code>
  <div class="info-badge">
    ✓ Scales without quality loss
  </div>
</div>

<p class="note">📐 SVG uses mathematical vectors - perfect for icons and logos</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
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

.svg-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #7c3aed;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #581c87;
  color: #e9d5ff;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #7c3aed;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #d8b4fe;
}

html.dark .info-badge {
  background: #581c87;
  color: #e9d5ff;
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
            icon={PenTool}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 2: SVG Rectangle */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. SVG Rectangle'
            description='Create rounded rectangles with SVG rect element'
            html={`<div class="graphic-container">
  <h3>SVG Rectangle</h3>
  <p class="description">Vector rectangle with rounded corners</p>
  <svg viewBox="0 0 200 200" class="svg-demo">
    <rect x="30" y="50" width="140" height="100" fill="#3b82f6" rx="10"/>
  </svg>
  <code class="code-label">&lt;rect x="30" y="50" width="140" height="100" rx="10" /&gt;</code>
  <div class="info-badge">
    ✓ Use rx for rounded corners
  </div>
</div>

<p class="note">📦 SVG rectangles can have rounded corners with rx/ry attributes</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
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
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.svg-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #1e3a8a;
  color: #bfdbfe;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #93c5fd;
}

html.dark .info-badge {
  background: #1e3a8a;
  color: #bfdbfe;
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
            icon={PenTool}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 3: SVG Path (Star) */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. SVG Path (Star Shape)'
            description='Complex shapes using SVG path element'
            html={`<div class="graphic-container">
  <h3>SVG Path - Star</h3>
  <p class="description">Complex shapes with path commands</p>
  <svg viewBox="0 0 200 200" class="svg-demo">
    <path d="M100,20 L122,80 L190,80 L136,120 L158,180 L100,140 L42,180 L64,120 L10,80 L78,80 Z" 
          fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
  </svg>
  <code class="code-label">&lt;path d="M100,20 L122,80..." /&gt;</code>
  <div class="info-badge">
    ✓ Path creates any shape
  </div>
</div>

<p class="note">⭐ SVG paths use commands (M=move, L=line) for complex shapes</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
  background: #1e293b;
}

h3 {
  color: #fbbf24;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #fcd34d;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.svg-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #78350f;
  color: #fde68a;
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
  color: #fde68a;
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
            icon={PenTool}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 4: SVG Polygon */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. SVG Polygon (Triangle)'
            description='Create polygons with point coordinates'
            html={`<div class="graphic-container">
  <h3>SVG Polygon</h3>
  <p class="description">Multi-sided shapes with points</p>
  <svg viewBox="0 0 200 200" class="svg-demo">
    <polygon points="100,30 180,170 20,170" fill="#10b981" stroke="#059669" stroke-width="4"/>
  </svg>
  <code class="code-label">&lt;polygon points="100,30 180,170 20,170" /&gt;</code>
  <div class="info-badge">
    ✓ Define with point coordinates
  </div>
</div>

<p class="note">🔺 Polygons automatically close their path</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
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
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.svg-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #064e3b;
  color: #a7f3d0;
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
  color: #a7f3d0;
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
            icon={PenTool}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 5: Canvas Circle */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='5. Canvas Circle'
            description='Draw circles programmatically with Canvas API'
            html={`<div class="graphic-container">
  <h3>Canvas Circle</h3>
  <p class="description">Programmatic circle drawing with JavaScript</p>
  <canvas id="circleCanvas" width="200" height="200" class="canvas-demo"></canvas>
  <code class="code-label">ctx.arc(100, 100, 70, 0, Math.PI * 2)</code>
  <div class="info-badge">
    ⚡ Pixel-based rendering
  </div>
</div>

<p class="note">🎨 Canvas requires JavaScript to draw graphics</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
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

.canvas-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
  border-radius: 8px;
  background: #f8fafc;
}

html.dark .canvas-demo {
  background: #0f172a;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #581c87;
  color: #e9d5ff;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #e9d5ff;
}

html.dark .info-badge {
  background: #581c87;
  color: #e9d5ff;
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
            js={`const canvas = document.getElementById('circleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  
  // Draw circle
  ctx.beginPath();
  ctx.arc(100, 100, 70, 0, Math.PI * 2);
  ctx.fillStyle = '#8b5cf6';
  ctx.fill();
  ctx.strokeStyle = '#6d28d9';
  ctx.lineWidth = 4;
  ctx.stroke();
}`}
            colorTheme='purple'
            icon={Paintbrush}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 6: Canvas Rectangle with Gradient */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='6. Canvas Gradient Rectangle'
            description='Create gradients and rectangles with Canvas'
            html={`<div class="graphic-container">
  <h3>Canvas Gradient</h3>
  <p class="description">Linear gradient with fillRect()</p>
  <canvas id="gradientCanvas" width="200" height="200" class="canvas-demo"></canvas>
  <code class="code-label">createLinearGradient()</code>
  <div class="info-badge">
    ⚡ Dynamic gradients
  </div>
</div>

<p class="note">🌈 Canvas gradients are created programmatically</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
  background: #1e293b;
}

h3 {
  color: #ec4899;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #f9a8d4;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.canvas-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
  border-radius: 8px;
  background: #f8fafc;
}

html.dark .canvas-demo {
  background: #0f172a;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #831843;
  color: #fbcfe8;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #fbcfe8;
}

html.dark .info-badge {
  background: #831843;
  color: #fbcfe8;
  border-color: #ec4899;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #831843;
  color: #fbcfe8;
}`}
            js={`const canvas = document.getElementById('gradientCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 200, 200);
  gradient.addColorStop(0, '#ec4899');
  gradient.addColorStop(1, '#8b5cf6');
  
  // Draw rectangle with gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(20, 20, 160, 160);
}`}
            colorTheme='purple'
            icon={Paintbrush}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 7: Canvas Text */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='7. Canvas Text Rendering'
            description='Draw and style text on Canvas'
            html={`<div class="graphic-container">
  <h3>Canvas Text</h3>
  <p class="description">Programmatic text rendering</p>
  <canvas id="textCanvas" width="200" height="200" class="canvas-demo"></canvas>
  <code class="code-label">ctx.fillText('Canvas', 100, 100)</code>
  <div class="info-badge">
    ⚡ Dynamic text styling
  </div>
</div>

<p class="note">✍️ Canvas text is drawn as pixels, not selectable</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.graphic-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

html.dark .graphic-container {
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
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.canvas-demo {
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
  border-radius: 8px;
  background: #f8fafc;
}

html.dark .canvas-demo {
  background: #0f172a;
}

.code-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.85rem;
  margin: 1rem 0;
}

html.dark .code-label {
  background: #1e3a8a;
  color: #bfdbfe;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #93c5fd;
}

html.dark .info-badge {
  background: #1e3a8a;
  color: #bfdbfe;
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
            js={`const canvas = document.getElementById('textCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(0, 0, 200, 200);
  
  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Canvas', 100, 100);
  ctx.fillText('Text', 100, 140);
}`}
            colorTheme='blue'
            icon={Paintbrush}
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
        <CardDescription>Tips for using SVG and Canvas effectively</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* SVG Best Practices */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 pb-2 border-b-2 border-purple-200 dark:border-purple-800'>
              <PenTool className='w-5 h-5 text-purple-600' />
              <span className='font-semibold text-purple-700 dark:text-purple-400'>SVG Best Practices</span>
            </div>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <span className='text-purple-600 mt-0.5'>•</span>
                  <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>viewBox</code> for responsiveness</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 mt-0.5'>•</span>
                  <span>Optimize with SVGO or similar tools</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 mt-0.5'>•</span>
                  <span>Add ARIA labels for accessibility</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 mt-0.5'>•</span>
                  <span>Use CSS for styling when possible</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 mt-0.5'>•</span>
                  <span>Avoid inline SVG for large graphics</span>
                </li>
              </ul>
            </div>

            {/* Canvas Best Practices */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-blue-200 dark:border-blue-800'>
                <Paintbrush className='w-5 h-5 text-blue-600' />
                <span className='font-semibold text-blue-700 dark:text-blue-400'>Canvas Best Practices</span>
              </div>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 mt-0.5'>•</span>
                  <span>Set canvas size with width/height attributes</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 mt-0.5'>•</span>
                  <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>requestAnimationFrame</code> for animations</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 mt-0.5'>•</span>
                  <span>Clear canvas before redrawing</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 mt-0.5'>•</span>
                  <span>Use off-screen canvas for better performance</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-600 mt-0.5'>•</span>
                  <span>Provide fallback content for accessibility</span>
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
          <CardDescription>Both SVG and Canvas are universally supported</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: 'Chrome', version: 'All', supported: true },
              { name: 'Firefox', version: 'All', supported: true },
              { name: 'Safari', version: 'All', supported: true },
              { name: 'Edge', version: 'All', supported: true },
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
              <strong>Excellent Support:</strong> SVG has been supported since IE9+ and all modern browsers. Canvas 2D has universal support since 2010. Canvas WebGL requires GPU support.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive SVG & Canvas Playground</CardTitle>
          <CardDescription>Experiment with both graphics technologies in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='SVG & Canvas Playground'
            description='Play around with vector and raster graphics examples'
            features={[
              'SVG Shapes',
              'Canvas Drawing',
              'Animations',
              'Interactivity'
            ]}
            buttonText='Open Graphics Playground'
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

