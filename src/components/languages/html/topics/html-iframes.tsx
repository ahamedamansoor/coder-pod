'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, MonitorSmartphone, Shield, Play, Code, CheckCircle, XCircle, Lightbulb, Globe, Lock, AlertTriangle, Settings, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlIframesProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = { 
  html: `<iframe title='Example' src='https://example.com' width='100%' height='180' loading='lazy'></iframe>`, 
  css: `iframe{border:1px solid #ccc;border-radius:8px;}`, 
  js: ''
};

export default function HtmlIframes({ onOpenWebPlayground }: HtmlIframesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={ExternalLink} 
        category='HTML Basics' 
        title='HTML Iframes' 
        description='Embed external content securely within your web pages'
        colorTheme='blue'
      />

      {/* What are Iframes? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <MonitorSmartphone className='w-5 h-5 text-blue-600' />
            What are Iframes?
          </CardTitle>
          <CardDescription>The iframe (inline frame) element embeds another HTML document within the current page</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            An <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;iframe&gt;</code> creates a <strong>nested browsing context</strong>, loading another webpage inside your page. It's like having a window to another site or document.
          </p>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code className='w-4 h-4' />
              Basic Structure
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<iframe 
  src="https://example.com"
  title="Example Site"
  width="600"
  height="400"
></iframe>`}</code>
            </pre>
          </div>

          <div className='grid md:grid-cols-3 gap-4'>
            {[
              { icon: ExternalLink, title: 'Embed External Content', desc: 'Display other websites' },
              { icon: Shield, title: 'Security Isolation', desc: 'Sandboxed execution' },
              { icon: Settings, title: 'Full Control', desc: 'Size, permissions, behavior' },
            ].map((feature, index) => (
              <div key={index} className='bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2 mb-2'>
                  <feature.icon className='w-4 h-4 text-blue-600' />
                  <h4 className='font-semibold text-sm text-slate-700 dark:text-slate-300'>{feature.title}</h4>
                </div>
                <p className='text-xs text-slate-600 dark:text-slate-400'>{feature.desc}</p>
              </div>
            ))}
          </div>

          <Alert className='border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20'>
            <AlertTriangle className='h-4 w-4 text-orange-600 dark:text-orange-400' />
            <AlertTitle className='text-orange-700 dark:text-orange-300'>Security Warning</AlertTitle>
            <AlertDescription className='text-orange-600 dark:text-orange-400'>
              Iframes can pose security risks if not configured properly. Always use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>sandbox</code> and limit permissions with <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>allow</code> attributes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Core Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5 text-purple-600' />
            Core Iframe Attributes
          </CardTitle>
          <CardDescription>Essential attributes that control iframe behavior and appearance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* src */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>src</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>(required)</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                URL of the page to embed
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                src="<span className='text-blue-600'>https://example.com</span>"
              </code>
            </div>

            {/* title */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>title</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>(required)</span>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Describes the iframe content (accessibility)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                title="<span className='text-emerald-600'>YouTube video player</span>"
              </code>
            </div>

            {/* width & height */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600 hover:bg-purple-700'>width & height</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Dimensions in pixels or percentage
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                width="<span className='text-purple-600'>600</span>" height="<span className='text-purple-600'>400</span>"
              </code>
            </div>

            {/* loading */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-600 transition-all'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-amber-600 hover:bg-amber-700'>loading</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Lazy loading for performance
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                loading="<span className='text-amber-600'>lazy</span>"
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sandbox Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Shield className='w-5 h-5 text-red-600' />
            The sandbox Attribute
          </CardTitle>
          <CardDescription>Security feature that restricts what the iframe can do</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>sandbox</code> attribute applies <strong>extra restrictions</strong> to the iframe content. By default, it blocks almost everything - then you selectively enable features.
          </p>

          <div className='bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800'>
            <h4 className='font-semibold text-red-700 dark:text-red-300 mb-2 text-sm'>Empty Sandbox (Most Restrictive)</h4>
            <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-red-200 dark:border-red-700 mb-2'>
              &lt;iframe sandbox src="..."&gt;
            </code>
            <p className='text-xs text-slate-600 dark:text-slate-400'>Blocks: scripts, forms, popups, top navigation, plugins</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {[
              { flag: 'allow-scripts', desc: 'Enable JavaScript execution', color: 'blue' },
              { flag: 'allow-forms', desc: 'Allow form submission', color: 'emerald' },
              { flag: 'allow-popups', desc: 'Allow opening new windows', color: 'purple' },
              { flag: 'allow-same-origin', desc: 'Access same origin resources', color: 'orange' },
              { flag: 'allow-top-navigation', desc: 'Navigate top window', color: 'red' },
              { flag: 'allow-modals', desc: 'Allow alerts/confirms', color: 'cyan' },
            ].map((item, index) => (
              <div key={index} className={`bg-${item.color}-50 dark:bg-${item.color}-950/20 p-3 rounded-lg border border-${item.color}-200 dark:border-${item.color}-800`}>
                <Badge className={`bg-${item.color}-600 text-xs mb-2`}>{item.flag}</Badge>
                <p className='text-xs text-slate-700 dark:text-slate-300'>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Example with Multiple Flags</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<iframe 
  sandbox="allow-scripts allow-forms allow-popups"
  src="https://third-party.com"
  title="Third-party content"
></iframe>`}</code>
            </pre>
          </div>

          <Alert className='border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20'>
            <Lock className='h-4 w-4 text-red-600 dark:text-red-400' />
            <AlertDescription className='text-red-700 dark:text-red-300'>
              <strong>Security Best Practice:</strong> Always use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>sandbox</code> for untrusted content. Only enable the minimum required permissions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Allow Attribute */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Lock className='w-5 h-5 text-emerald-600' />
            The allow Attribute
          </CardTitle>
          <CardDescription>Fine-grained permissions for browser features</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>allow</code> attribute controls access to <strong>powerful browser features</strong> like camera, microphone, geolocation, and more.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {[
              { feature: 'camera', example: 'allow="camera"', desc: 'Access device camera', icon: '📷' },
              { feature: 'microphone', example: 'allow="microphone"', desc: 'Access device microphone', icon: '🎤' },
              { feature: 'geolocation', example: 'allow="geolocation"', desc: 'Access location data', icon: '📍' },
              { feature: 'fullscreen', example: 'allow="fullscreen"', desc: 'Enter fullscreen mode', icon: '⛶' },
              { feature: 'payment', example: 'allow="payment"', desc: 'Payment Request API', icon: '💳' },
              { feature: 'autoplay', example: 'allow="autoplay"', desc: 'Autoplay media', icon: '▶️' },
            ].map((item, index) => (
              <div key={index} className='bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-lg'>{item.icon}</span>
                  <h4 className='font-semibold text-sm text-emerald-700 dark:text-emerald-300'>{item.feature}</h4>
                </div>
                <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>{item.desc}</p>
                <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-700'>
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
            <h4 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm'>Combining Multiple Permissions</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<iframe 
  allow="camera; microphone; fullscreen"
  src="https://video-chat.example.com"
  title="Video chat application"
></iframe>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-amber-600' />
            Common Use Cases
          </CardTitle>
          <CardDescription>Real-world scenarios for using iframes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { 
                title: 'Embedded Videos', 
                icon: Play, 
                examples: ['YouTube videos', 'Vimeo players', 'Video tutorials'],
                code: '<iframe src="https://youtube.com/embed/...">' 
              },
              { 
                title: 'Maps Integration', 
                icon: Globe, 
                examples: ['Google Maps', 'Location viewers', 'Store locators'],
                code: '<iframe src="https://maps.google.com/...">' 
              },
              { 
                title: 'Social Media Embeds', 
                icon: ExternalLink, 
                examples: ['Twitter timelines', 'Facebook posts', 'Instagram feeds'],
                code: '<iframe src="https://platform.twitter.com/...">' 
              },
              { 
                title: 'Payment Forms', 
                icon: Shield, 
                examples: ['Stripe checkout', 'PayPal buttons', 'Secure forms'],
                code: '<iframe sandbox="allow-scripts allow-forms">' 
              },
            ].map((useCase, index) => (
              <div key={index} className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2 mb-3'>
                  <useCase.icon className='w-5 h-5 text-blue-600' />
                  <h3 className='font-semibold text-slate-700 dark:text-slate-300'>{useCase.title}</h3>
                </div>
                <ul className='space-y-1 mb-3'>
                  {useCase.examples.map((example, i) => (
                    <li key={i} className='text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2'>
                      <CheckCircle className='w-3 h-3 text-green-600' />
                      {example}
                    </li>
                  ))}
                </ul>
                <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 block'>
                  {useCase.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <ExternalLink className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Iframes in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See different iframe configurations with sandbox, allow, and responsive behavior
        </p>

        {/* Example 1: Basic Iframe */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. Basic Iframe'
              description='Simple iframe embedding external content'
            html={`<div class="iframe-container">
  <h3>Basic Iframe</h3>
  <p class="description">Simple iframe embedding external content</p>
  <iframe 
    src="https://example.com" 
    title="Example website"
    width="100%"
    height="300"
    class="demo-iframe"
  ></iframe>
  <div class="info-badge">
    🌐 External website embedded
  </div>
</div>

<p class="note">🖼️ Iframes load external content in isolation</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.iframe-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .iframe-container {
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

.demo-iframe {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: border-color 0.3s;
}

html.dark .demo-iframe {
  border-color: #334155;
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
            icon={ExternalLink}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 2: Sandboxed Iframe */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. Sandboxed Iframe (Secure)'
            description='Restricted iframe with sandbox attribute for enhanced security'
            html={`<div class="iframe-container">
  <h3>Sandboxed Iframe</h3>
  <p class="description">Restricted iframe with security sandbox</p>
  <iframe 
    sandbox="allow-scripts allow-same-origin"
    src="https://example.com" 
    title="Sandboxed content"
    width="100%"
    height="250"
    class="demo-iframe"
  ></iframe>
  <div class="info-badge">
    🔒 Sandbox: Scripts & same-origin only
  </div>
</div>

<p class="note">🛡️ Sandbox attribute restricts iframe capabilities</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.iframe-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .iframe-container {
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

.demo-iframe {
  border: 2px solid #10b981;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: border-color 0.3s;
}

html.dark .demo-iframe {
  border-color: #34d399;
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
            icon={Shield}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 3: Lazy Loading */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. Lazy Loading Iframe'
            description='Defer iframe loading until it enters the viewport'
            html={`<div class="iframe-container">
  <h3>Lazy Loading Iframe</h3>
  <p class="description">Loads only when scrolled into view</p>
  <iframe 
    src="https://example.com" 
    title="Lazy loaded iframe"
    width="100%"
    height="300"
    loading="lazy"
    class="demo-iframe"
  ></iframe>
  <div class="info-badge">
    🚀 Faster initial page load
  </div>
</div>

<p class="note">⚡ Add loading="lazy" to improve performance</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.iframe-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .iframe-container {
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

.demo-iframe {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: border-color 0.3s;
}

html.dark .demo-iframe {
  border-color: #334155;
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
            icon={Play}
            previewHeight='400px'
          />
        </CardContent>
      </Card>

      {/* Example 4: Responsive Iframe */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. Responsive 16:9 Iframe'
            description='Iframe that maintains aspect ratio across all screen sizes'
            html={`<div class="iframe-container">
  <h3>Responsive 16:9 Iframe</h3>
  <p class="description">Maintains aspect ratio on all devices</p>
  <div class="responsive-wrapper">
    <iframe 
      src="https://example.com" 
      title="Responsive iframe"
      class="responsive-iframe"
    ></iframe>
  </div>
  <div class="info-badge">
    📐 16:9 aspect ratio maintained
  </div>
</div>

<p class="note">📱 Responsive container with padding-bottom trick</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.iframe-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .iframe-container {
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
  margin-bottom: 1rem;
}

html.dark .description {
  color: #94a3b8;
}

.responsive-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
}

html.dark .responsive-iframe {
  border-color: #334155;
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
            icon={MonitorSmartphone}
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
        <CardDescription>Tips for using iframes safely and effectively</CardDescription>
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
                <span>Always add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>title</code> for accessibility</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>sandbox</code> for untrusted content</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>loading="lazy"</code> for below-fold iframes</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use aspect-ratio CSS for responsive videos</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Only grant minimum required permissions</span>
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
                <span>Don't embed untrusted content without sandbox</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't forget the title attribute</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>allow-same-origin</code> with <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>allow-scripts</code></span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't hardcode iframe dimensions (use CSS)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't overuse iframes (impacts performance)</span>
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
        <CardDescription>Iframe features are universally supported</CardDescription>
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
            <strong>Universal Support:</strong> Iframes have been supported since HTML 4. Modern features like <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>sandbox</code> (2012+) and <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>loading="lazy"</code> (2019+) are widely supported.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* Interactive Playground */}
    <Card>
      <CardHeader>
        <CardTitle>Interactive Iframe Playground</CardTitle>
        <CardDescription>Experiment with iframes in a live code editor.</CardDescription>
      </CardHeader>
      <CardContent>
        <InteractivePlayground
          title='Iframe Playground'
          description='Play around with iframe examples and security features'
          features={[
            'Sandbox Attribute',
            'Allow Permissions',
            'Lazy Loading',
            'Responsive Design'
          ]}
          buttonText='Open Iframe Playground'
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

