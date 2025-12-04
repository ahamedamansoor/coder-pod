'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Play, Code, CheckCircle, XCircle, Lightbulb, Zap, AlertCircle, MousePointer, Grid3x3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlImageMapsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void
}

const svgToDataUrl = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const solarSystemImageUrl = svgToDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
    <defs>
      <radialGradient id="space" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#0b1220" />
        <stop offset="100%" stop-color="#020617" />
      </radialGradient>
    </defs>
    <rect width="600" height="400" fill="url(#space)" />
    <circle cx="300" cy="200" r="60" fill="#facc15" />
    <circle cx="370" cy="200" r="14" fill="#f97316" />
    <circle cx="430" cy="200" r="18" fill="#3b82f6" />
    <circle cx="490" cy="200" r="16" fill="#22c55e" />
    <g stroke="#94a3b8" stroke-width="1" fill="none">
      <circle cx="300" cy="200" r="110" />
      <circle cx="300" cy="200" r="150" />
      <circle cx="300" cy="200" r="190" />
    </g>
  </svg>
`);

const laptopImageUrl = svgToDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300">
    <rect x="0" y="0" width="500" height="300" rx="30" fill="#0f172a" />
    <rect x="40" y="40" width="420" height="200" rx="16" fill="#152238" stroke="#38bdf8" stroke-width="4" />
    <rect x="60" y="220" width="380" height="30" rx="6" fill="#334155" />
    <circle cx="90" cy="235" r="6" fill="#38bdf8" />
    <rect x="120" y="225" width="260" height="10" rx="5" fill="#64748b" />
    <rect x="400" y="225" width="20" height="10" rx="3" fill="#94a3b8" />
  </svg>
`);

const shapesImageUrl = svgToDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <rect width="400" height="300" fill="#ecfccb" />
    <polygon points="200,30 320,170 80,170" fill="#7c3aed" opacity="0.8" />
    <polygon points="50,195 140,285 50,285" fill="#0ea5e9" />
    <polygon points="260,195 350,285 260,285" fill="#f97316" />
    <circle cx="200" cy="200" r="30" fill="#22c55e" opacity="0.6" />
  </svg>
`);

const basicExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Maps Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    h2 { color: #1e293b; text-align: center; margin-bottom: 2rem; font-size: 2rem; }
    @media (prefers-color-scheme: dark) { h2 { color: #f1f5f9; } }
    .container { max-width: 800px; margin: 0 auto; }
    .section { background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-left: 4px solid #3b82f6; }
    @media (prefers-color-scheme: dark) { .section { background: #1e293b; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); border-left-color: #60a5fa; } }
    .section h3 { color: #3b82f6; margin-top: 0; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { .section h3 { color: #60a5fa; } }
    .map-img { width: 100%; height: auto; border-radius: 8px; cursor: pointer; display: block; border: 2px solid #3b82f6; transition: all 0.3s; }
    .map-img:hover { box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3); transform: scale(1.01); }
    area { cursor: pointer; transition: all 0.2s; }
    .info { color: #475569; font-size: 0.9rem; margin: 0.75rem 0 0; padding: 0.75rem 1rem; background: #eff6ff; border-radius: 6px; border: 2px solid #bfdbfe; font-weight: 500; }
    @media (prefers-color-scheme: dark) { .info { background: #1e3a8a; color: #93c5fd; border-color: #3b82f6; } }
  </style>
</head>
<body>
<h2>Interactive Image Maps Demo</h2>

<div class="container">
  <div class="section">
    <h3>🌍 Interactive Solar System</h3>
    <img 
      src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3CradialGradient id='space' cx='50%25' cy='50%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%230b1220'/%3E%3Cstop offset='100%25' stop-color='%23020617'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23space)'/%3E%3Ccircle cx='300' cy='200' r='60' fill='%23facc15'/%3E%3Ccircle cx='370' cy='200' r='14' fill='%23f97316'/%3E%3Ccircle cx='430' cy='200' r='18' fill='%233b82f6'/%3E%3Ccircle cx='490' cy='200' r='16' fill='%2322c55e'/%3E%3Cg stroke='%2394a3b8' stroke-width='1' fill='none'%3E%3Ccircle cx='300' cy='200' r='110'/%3E%3Ccircle cx='300' cy='200' r='150'/%3E%3Ccircle cx='300' cy='200' r='190'/%3E%3C/g%3E%3C/svg%3E"
      usemap="#solar-system"
      alt="Click on planets to learn more"
      class="map-img"
    />
    <map name="solar-system">
      <area shape="circle" coords="300,200,50" onclick="alert('☀️ The Sun - Our Star'); return false;" alt="Sun" title="Click to learn about the Sun"/>
      <area shape="circle" coords="370,200,15" onclick="alert('🔴 Mercury - Closest planet to the Sun and smallest'); return false;" alt="Mercury" title="Mercury - Closest to Sun"/>
      <area shape="circle" coords="430,200,20" onclick="alert('🟡 Venus - The hottest planet in our solar system'); return false;" alt="Venus" title="Venus - Morning Star"/>
      <area shape="circle" coords="490,200,18" onclick="alert('🌍 Earth - Our home planet with life'); return false;" alt="Earth" title="Earth - Our Home"/>
    </map>
    <p class="info">✅ Click on the Sun and planets to learn about them</p>
  </div>

  <div class="section">
    <h3>💻 Product Image Map</h3>
    <img 
      src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Crect x='0' y='0' width='500' height='300' rx='30' fill='%230f172a'/%3E%3Crect x='40' y='40' width='420' height='200' rx='16' fill='%23152238' stroke='%2338bdf8' stroke-width='4'/%3E%3Crect x='60' y='220' width='380' height='30' rx='6' fill='%23334155'/%3E%3Ccircle cx='90' cy='235' r='6' fill='%2338bdf8'/%3E%3Crect x='120' y='225' width='260' height='10' rx='5' fill='%2364748b'/%3E%3Crect x='400' y='225' width='20' height='10' rx='3' fill='%2394a3b8'/%3E%3C/svg%3E"
      usemap="#laptop"
      alt="Click on laptop features"
      class="map-img"
    />
    <map name="laptop">
      <area shape="rect" coords="100,50,400,200" onclick="alert('📺 4K High Resolution Display - Crystal clear visuals with 120Hz refresh rate'); return false;" alt="Display" title="High Resolution Display"/>
      <area shape="rect" coords="100,210,400,280" onclick="alert('⌨️ Mechanical Keyboard - Premium RGB switches with tactile feedback'); return false;" alt="Keyboard" title="Mechanical Keyboard"/>
      <area shape="rect" coords="200,260,300,295" onclick="alert('🖱️ Precision Trackpad - Smooth glass surface with gesture support'); return false;" alt="Trackpad" title="Precision Trackpad"/>
    </map>
    <p class="info">✅ Click on the Display, Keyboard, and Trackpad to see features</p>
  </div>

  <div class="section">
    <h3>🎨 Interactive Shapes Navigation</h3>
    <img 
      src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23ecfccb'/%3E%3Cpolygon points='200,30 320,170 80,170' fill='%237c3aed' opacity='0.8'/%3E%3Cpolygon points='50,195 140,285 50,285' fill='%230ea5e9'/%3E%3Cpolygon points='260,195 350,285 260,285' fill='%23f97316'/%3E%3Ccircle cx='200' cy='200' r='30' fill='%2322c55e' opacity='0.6'/%3E%3C/svg%3E"
      usemap="#shapes"
      alt="Click on shapes for navigation"
      class="map-img"
    />
    <map name="shapes">
      <area shape="poly" coords="200,20,320,150,80,150" onclick="alert('🔝 Purple Triangle - Pointing to Top'); return false;" alt="Top Triangle" title="Go to Top"/>
      <area shape="poly" coords="50,150,140,280,50,280" onclick="alert('⬅️ Cyan Triangle - Left navigation'); return false;" alt="Bottom Left" title="Go to Left"/>
      <area shape="poly" coords="260,150,350,280,260,280" onclick="alert('➡️ Orange Triangle - Right navigation'); return false;" alt="Bottom Right" title="Go to Right"/>
      <area shape="circle" coords="200,200,30" onclick="alert('🟢 Green Circle - Center point'); return false;" alt="Center" title="Center Circle"/>
    </map>
    <p class="info">✅ Click on the shapes (triangles and circle) to navigate</p>
  </div>
</div>

<script>
  // Add visual feedback on hover
  document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseenter', function() {
      const img = document.querySelector('img[usemap="#' + this.closest('map').name + '"]');
      if (img) img.style.opacity = '0.9';
    });
    area.addEventListener('mouseleave', function() {
      const img = document.querySelector('img[usemap="#' + this.closest('map').name + '"]');
      if (img) img.style.opacity = '1';
    });
  });
</script>
</body>
</html>`,
  css: ``,
  js: ``
};

// Previous content was using template variables that weren't being substituted
// Now using complete HTML documents with embedded SVG data URLs and interactive handlers

export default function HtmlImageMaps({ onOpenWebPlayground }: HtmlImageMapsProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader
        icon={Grid3x3}
        category='HTML · Images & Media'
        title='Image Maps'
        description='Create interactive clickable regions on images with &lt;map&gt; and &lt;area&gt; tags'
        colorTheme='blue'
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Grid3x3 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Image Maps?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Turn parts of an image into clickable links with hot spots
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Image maps allow you to define <strong>multiple clickable areas</strong> (hot spots) on a single image. Each area can link to a different URL or trigger different actions. Perfect for interactive diagrams, infographics, and visual navigation.
          </p>
          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Common Use Cases</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Infographics,</strong> world maps, product diagrams, floor plans, constellation maps, and any image where different areas link to different content.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Image Maps Work */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <MousePointer className='w-7 h-7' />
            How Image Maps Work
          </CardTitle>
          <CardDescription className='text-base'>Three simple components working together</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* 1. Image */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm'>1</div>
                <h4 className='font-semibold text-blue-700 dark:text-blue-300'>Image</h4>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Regular <code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>&lt;img&gt;</code> tag with <code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>usemap</code> attribute
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                {`<img\n  usemap="#name"\n/>`}
              </code>
            </div>

            {/* 2. Map */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm'>2</div>
                <h4 className='font-semibold text-emerald-700 dark:text-emerald-300'>Map</h4>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Container with unique <code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>name</code> attribute
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                {`<map\n  name="map-id"\n></map>`}
              </code>
            </div>

            {/* 3. Areas */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm'>3</div>
                <h4 className='font-semibold text-purple-700 dark:text-purple-300'>Areas</h4>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Clickable regions with <code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>shape</code> and <code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded text-xs'>coords</code>
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                {`<area\n  shape="rect"\n  coords="x,y..."\n/>`}
              </code>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>Complete Flow</AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              User clicks <strong>image</strong> → browser finds matching <strong>area</strong> in the <strong>map</strong> → navigates to the linked URL
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Shape Types */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Zap className='w-7 h-7' />
            Shape Types & Coordinates
          </CardTitle>
          <CardDescription className='text-base'>Define clickable regions using different shapes</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Rectangle */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-blue-600'>rect</Badge>
                Rectangle (Most Common)
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Rectangular clickable area. Perfect for product features or document regions.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-blue-200 dark:border-blue-700 overflow-x-auto mb-2'>
                {`<area shape="rect"\n  coords="100,50,400,200"\n  href="page"/>`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400'>
                <strong>coords:</strong> x1, y1 (top-left), x2, y2 (bottom-right)
              </p>
            </div>

            {/* Circle */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-emerald-600'>circle</Badge>
                Circle
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Circular clickable area. Great for planet maps or round elements.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-emerald-200 dark:border-emerald-700 overflow-x-auto mb-2'>
                {`<area shape="circle"\n  coords="300,200,50"\n  href="page"/>`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400'>
                <strong>coords:</strong> centerX, centerY, radius
              </p>
            </div>

            {/* Polygon */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-purple-600'>poly</Badge>
                Polygon (Complex Shapes)
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Multi-sided shape using multiple points. Perfect for irregular shapes.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-purple-200 dark:border-purple-700 overflow-x-auto mb-2'>
                {`<area shape="poly"\n  coords="x1,y1,x2,y2,x3,y3..."\n  href="page"/>`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400'>
                <strong>coords:</strong> List of x,y pairs for each vertex
              </p>
            </div>

            {/* Default */}
            <div className='bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800'>
              <h4 className='font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2'>
                <Badge className='bg-orange-600'>default</Badge>
                Default
              </h4>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Fallback area for unmapped regions. Catch-all clickable area.
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-orange-200 dark:border-orange-700 overflow-x-auto mb-2'>
                {`<area shape="default"\n  href="page" alt="Other"/>`}
              </code>
              <p className='text-xs text-slate-600 dark:text-slate-400'>
                No coords needed - applies to unmatched clicks
              </p>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Finding Coordinates</h4>
            <p className='text-xs text-slate-600 dark:text-slate-400 mb-3'>
              Use browser DevTools or online image map generators:
            </p>
            <ul className='text-xs text-slate-600 dark:text-slate-400 space-y-1'>
              <li className='flex items-center gap-2'>
                <span className='text-blue-600'>→</span>
                <span>Inspect element in DevTools to see image dimensions</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-blue-600'>→</span>
                <span>Use online tools like ImageMapResizer or online-image-editor.com</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-blue-600'>→</span>
                <span>Measure pixel positions manually using graphics software</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Area Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Code className='w-7 h-7' />
            Area Element Attributes
          </CardTitle>
          <CardDescription className='text-base'>Control the behavior of clickable regions</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* href */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600'>href</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Destination URL</strong> when area is clicked
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<area href="/page">`}
              </code>
            </div>

            {/* alt */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-green-600'>alt</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Alternative text</strong> for accessibility
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<area alt="North America">`}
              </code>
            </div>

            {/* title */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>title</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Tooltip text</strong> on hover
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<area title="Click for details">`}
              </code>
            </div>

            {/* target */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-orange-600'>target</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>How to open</strong> the link
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<area target="_blank">`}
              </code>
            </div>

            {/* download */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-pink-600'>download</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Download file</strong> instead of navigate
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<area download>`}
              </code>
            </div>

            {/* rel */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-cyan-600'>rel</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                <strong>Relationship</strong> to target
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-3 rounded block border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                {`<area rel="external">`}
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
          <CardDescription className='text-base'>Interactive image maps with different shapes</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FrontendCodePreview
            title="Image Maps Examples"
            description="Try clicking on different areas of the images"
            html={basicExample.html}
            css={basicExample.css}
            js={basicExample.js}
            colorTheme="blue"
            previewHeight="800px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Complete Example */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <Code className='w-7 h-7' />
            Complete Example
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm'>World Map Navigation</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<img 
  src="world-map.jpg"
  alt="World map"
  usemap="#world"
/>

<map name="world">
  <!-- North America -->
  <area 
    shape="rect"
    coords="10,50,150,150"
    href="/north-america"
    alt="North America"
    title="Click to explore North America"
  />

  <!-- Europe -->
  <area 
    shape="rect"
    coords="200,50,350,150"
    href="/europe"
    alt="Europe"
  />

  <!-- Africa (complex shape) -->
  <area 
    shape="poly"
    coords="200,150,350,150,350,280,200,280"
    href="/africa"
    alt="Africa"
  />

  <!-- Catch-all -->
  <area 
    shape="default"
    href="/"
    alt="Back to home"
  />
</map>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400'>
            <CheckCircle className='w-7 h-7' />
            Best Practices
          </CardTitle>
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
                <span>Add <strong>title tooltips</strong> for better UX</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Use <strong>responsive image</strong> techniques</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Keep <strong>coordinate numbers</strong> accurate</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-emerald-600 font-bold'>✓</span>
                <span>Provide <strong>text alternatives</strong> to the map</span>
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
                <span>Using maps for <strong>layouts</strong> (use CSS instead)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Complex maps with <strong>many overlapping</strong> areas</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Forgetting to test <strong>responsiveness</strong></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Skipping <strong>alt text</strong> in area elements</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-rose-600 font-bold'>✗</span>
                <span>Making areas too <strong>small or overlapping</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Alert */}
      <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
        <AlertCircle className='h-4 w-4 text-amber-600 dark:text-amber-400' />
        <AlertTitle className='text-amber-700 dark:text-amber-300'>Accessibility Note</AlertTitle>
        <AlertDescription className='text-amber-600 dark:text-amber-400'>
          Image maps can be <strong>difficult for mobile users</strong> and screen reader users. Consider providing <strong>alternative navigation</strong> or using modern <strong>CSS-based interactive elements</strong> instead.
        </AlertDescription>
      </Alert>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try It Yourself"
          description="Create your own interactive image map and see how it works!"
          features={[
            'Define custom areas',
            'Test with different shapes',
            'Add tooltips and alt text',
            'Click to navigate'
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
