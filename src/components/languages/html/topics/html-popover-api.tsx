'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Info, Play, Code, CheckCircle, XCircle, Lightbulb, Globe, MousePointer, Layers, Settings, ArrowRight, MessageCircle, Menu, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlPopoverApiProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<button popovertarget='info' popovertargetaction='show'>Show Info</button>
<div id='info' popover>Popover content here</div>`,
  css: `[popover]{border:1px solid #ccc;padding:1rem;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.15);}`,
  js: ''
};

export default function HtmlPopoverApi({ onOpenWebPlayground }: HtmlPopoverApiProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={MessageCircle} 
        category='HTML Basics' 
        title='Popover API' 
        description='Native declarative popovers without JavaScript libraries'
        colorTheme='blue'
      />

      {/* What is Popover API? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What is the Popover API?
          </CardTitle>
          <CardDescription>Native HTML attribute for creating lightweight overlay content</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <strong>Popover API</strong> provides a standardized way to create <strong>popover content</strong> that appears on top of other content. No JavaScript required! Perfect for tooltips, menus, teaching UI, and more.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {[
              { icon: MousePointer, title: 'Declarative', desc: 'HTML attributes only' },
              { icon: Layers, title: 'Top Layer', desc: 'Automatic z-index handling' },
              { icon: CheckCircle, title: 'Accessible', desc: 'Keyboard & ARIA support' },
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

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code className='w-4 h-4' />
              Basic Structure
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<!-- Button to trigger popover -->
<button popovertarget="my-popover">Show Popover</button>

<!-- Popover content -->
<div id="my-popover" popover>
  <p>This is popover content!</p>
</div>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Popover API?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>No JavaScript</strong> for basic functionality, <strong>automatic light dismiss</strong> (clicking outside closes), <strong>ESC key support</strong>, and <strong>top-layer</strong> rendering!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Popover Types */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5 text-purple-600' />
            Popover Types
          </CardTitle>
          <CardDescription>Two behavior modes: auto and manual</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Auto Popover */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>popover="auto"</Badge>
                <span className='text-xs text-slate-600 dark:text-slate-400'>(default)</span>
              </div>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>Auto Popover</h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Light dismiss</strong> - closes on outside click</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>ESC key</strong> closes it</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>One at a time</strong> - closes others</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Best for: Menus, tooltips</span>
                </li>
              </ul>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700 mt-3'>
                &lt;div popover="auto"&gt;
              </code>
            </div>

            {/* Manual Popover */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>popover="manual"</Badge>
              </div>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2'>Manual Popover</h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>No light dismiss</strong> - must close explicitly</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>ESC doesn't close</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>Multiple allowed</strong> - can overlap</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Best for: Persistent UI</span>
                </li>
              </ul>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700 mt-3'>
                &lt;div popover="manual"&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-amber-600' />
            Popover Attributes
          </CardTitle>
          <CardDescription>HTML attributes to control popover behavior</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* popover */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>popover</Badge>
              </div>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>On Popover Element</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Marks element as popover content</p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;div popover&gt; or &lt;div popover="auto"&gt;
              </code>
            </div>

            {/* popovertarget */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600 hover:bg-purple-700'>popovertarget</Badge>
              </div>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>On Button Element</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Links button to popover by ID</p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                &lt;button popovertarget="my-popover"&gt;
              </code>
            </div>

            {/* popovertargetaction */}
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>popovertargetaction</Badge>
              </div>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Action Type</h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>What button does: toggle, show, hide</p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                popovertargetaction="toggle"
              </code>
            </div>

            {/* Actions comparison */}
            <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800'>
              <h4 className='font-semibold text-amber-700 dark:text-amber-300 mb-2 text-sm'>Action Values</h4>
              <ul className='text-xs space-y-1 text-slate-700 dark:text-slate-300'>
                <li><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>toggle</code> - Show/hide (default)</li>
                <li><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>show</code> - Only show</li>
                <li><code className='bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>hide</code> - Only hide</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* JavaScript API */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-purple-600' />
            JavaScript API (Optional)
          </CardTitle>
          <CardDescription>Programmatic control when needed</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* showPopover() */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <Badge className='bg-blue-600 hover:bg-blue-700 mb-2'>showPopover()</Badge>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-2'>Show the popover</p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700'>
                element.showPopover();
              </code>
            </div>

            {/* hidePopover() */}
            <div className='bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800'>
              <Badge className='bg-red-600 hover:bg-red-700 mb-2'>hidePopover()</Badge>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-2'>Hide the popover</p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-red-200 dark:border-red-700'>
                element.hidePopover();
              </code>
            </div>

            {/* togglePopover() */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <Badge className='bg-purple-600 hover:bg-purple-700 mb-2'>togglePopover()</Badge>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-2'>Toggle visibility</p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700'>
                element.togglePopover();
              </code>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Events</h4>
            <div className='grid md:grid-cols-2 gap-3'>
              <div>
                <p className='text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1'>beforetoggle</p>
                <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                  element.addEventListener('beforetoggle', ...)
                </code>
              </div>
              <div>
                <p className='text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1'>toggle</p>
                <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-800'>
                  element.addEventListener('toggle', ...)
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Styling */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Layers className='w-5 h-5 text-emerald-600' />
            Styling Popovers
          </CardTitle>
          <CardDescription>CSS techniques for beautiful popovers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Basic Styling</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`[popover] {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`}</code>
              </pre>
            </div>

            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Open State</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`[popover]:popover-open {
  /* Styles when open */
  animation: fadeIn 0.2s;
}`}</code>
              </pre>
            </div>

            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Backdrop</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`[popover]::backdrop {
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
}`}</code>
              </pre>
            </div>

            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Animations</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}</code>
              </pre>
            </div>
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
          <CardDescription>Real-world scenarios for popover API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { 
                title: 'Tooltips', 
                desc: 'Show additional information on hover/click',
                example: 'Help icons, field descriptions',
                icon: HelpCircle,
                color: 'blue'
              },
              { 
                title: 'Dropdown Menus', 
                desc: 'Navigation or action menus',
                example: 'User menu, settings, actions',
                icon: Menu,
                color: 'emerald'
              },
              { 
                title: 'Teaching UI', 
                desc: 'Onboarding and feature highlights',
                example: 'Product tours, feature announcements',
                icon: Lightbulb,
                color: 'purple'
              },
              { 
                title: 'Action Confirmations', 
                desc: 'Quick confirmations without full modal',
                example: 'Delete confirm, Quick actions',
                icon: CheckCircle,
                color: 'amber'
              },
              { 
                title: 'Context Menus', 
                desc: 'Right-click style menus',
                example: 'Quick options, shortcuts',
                icon: MousePointer,
                color: 'red'
              },
              { 
                title: 'Form Helpers', 
                desc: 'Input hints and validation messages',
                example: 'Password strength, format hints',
                icon: Info,
                color: 'cyan'
              },
            ].map((useCase, index) => (
              <div key={index} className={`bg-${useCase.color}-50 dark:bg-${useCase.color}-950/20 p-4 rounded-lg border border-${useCase.color}-200 dark:border-${useCase.color}-800`}>
                <div className='flex items-center gap-2 mb-2'>
                  <useCase.icon className={`w-5 h-5 text-${useCase.color}-600`} />
                  <h3 className={`font-semibold text-${useCase.color}-700 dark:text-${useCase.color}-300`}>{useCase.title}</h3>
                </div>
                <p className='text-sm text-slate-700 dark:text-slate-300 mb-2'>{useCase.desc}</p>
                <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 block'>
                  {useCase.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <MessageCircle className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Popover API in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See different popover types with various styles and behaviors
        </p>

        {/* Example 1: Auto Popover */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. Auto Popover (Light Dismiss)'
              description='Click outside or press ESC to close - default behavior'
            html={`<button popovertarget="auto-popover" class="btn blue">Show Auto Popover</button>

<div id="auto-popover" popover class="popover-content">
  <h3>ℹ️ Auto Popover</h3>
  <p>This is an auto popover. Try these:</p>
  <ul>
    <li>Click outside to close</li>
    <li>Press ESC to close</li>
    <li>Opening another auto popover closes this one</li>
  </ul>
</div>

<p class="info">🖱️ Light dismiss enabled - click outside or press ESC</p>`}
            css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
  transition: background-color 0.3s;
}

html.dark body {
  background: #0f172a;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  margin-bottom: 1rem;
}

.btn.blue {
  background: #3b82f6;
}

.btn.blue:hover {
  background: #2563eb;
}

[popover] {
  border: none;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

html.dark [popover] {
  background: #1e293b;
  color: #f1f5f9;
}

.popover-content {
  padding: 1.5rem;
  max-width: 400px;
  background: white;
}

html.dark .popover-content {
  background: #1e293b;
}

.popover-content h3 {
  margin: 0 0 1rem 0;
  color: #1e293b;
}

html.dark .popover-content h3 {
  color: #f1f5f9;
}

.popover-content p {
  color: #475569;
  margin-bottom: 0.75rem;
}

html.dark .popover-content p {
  color: #cbd5e1;
}

.popover-content ul {
  list-style: none;
  padding-left: 0;
}

.popover-content li {
  padding: 0.5rem 0;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
}

html.dark .popover-content li {
  color: #94a3b8;
  border-bottom-color: #334155;
}

.popover-content li:last-child {
  border-bottom: none;
}

.info {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .info {
  background: #1e3a8a;
  color: #bfdbfe;
}

[popover]:popover-open {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`}
              colorTheme='blue'
              icon={MessageCircle}
              previewHeight='400px'
            />
          </CardContent>
        </Card>

        {/* Example 2: Manual Popover */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='2. Manual Popover (Persistent)'
              description='Must be closed explicitly with hide button - no light dismiss'
              html={`<button popovertarget="manual-popover" popovertargetaction="show" class="btn green">
  Show Manual Popover
</button>
<button popovertarget="manual-popover" popovertargetaction="hide" class="btn red">
  Hide Manual Popover
</button>

<div id="manual-popover" popover="manual" class="popover-content">
  <h3>🔒 Manual Popover</h3>
  <p>This is a manual popover. Characteristics:</p>
  <ul>
    <li>Clicking outside doesn't close it</li>
    <li>ESC doesn't close it</li>
    <li>Multiple can be open at once</li>
    <li>Must use hide button</li>
  </ul>
</div>

<p class="info accent">⚙️ Manual control only - requires explicit close</p>`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

.btn.green {
  background: #10b981;
}

.btn.green:hover {
  background: #059669;
}

.btn.red {
  background: #ef4444;
}

.btn.red:hover {
  background: #dc2626;
}

[popover] {
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

html.dark [popover] {
  background: #1e293b;
  color: #f1f5f9;
}

.popover-content {
  padding: 1.5rem;
  max-width: 400px;
  background: white;
}

html.dark .popover-content {
  background: #1e293b;
}

.popover-content h3 {
  margin: 0 0 1rem 0;
  color: #1e293b;
}

html.dark .popover-content h3 {
  color: #f1f5f9;
}

.popover-content ul {
  list-style: none;
  padding: 0;
}

.popover-content li {
  padding: 0.5rem 0;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
}

html.dark .popover-content li {
  color: #94a3b8;
  border-bottom-color: #334155;
}

.info {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .info {
  background: #064e3b;
  color: #a7f3d0;
}`}
              colorTheme='emerald'
              icon={MessageCircle}
              previewHeight='400px'
            />
          </CardContent>
        </Card>

        {/* Example 3: Menu Popover */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='3. Styled Menu Popover'
              description='Custom styled actions menu with hover effects'
              html={`<button popovertarget="menu-popover" class="btn purple">Open Menu</button>

<div id="menu-popover" popover class="menu-popover">
  <div class="menu-header">
    <h3>⚙️ Actions Menu</h3>
  </div>
  <div class="menu-items">
    <button class="menu-item">
      <span class="menu-icon">✏️</span>
      Edit
    </button>
    <button class="menu-item">
      <span class="menu-icon">📋</span>
      Copy
    </button>
    <button class="menu-item">
      <span class="menu-icon">📤</span>
      Share
    </button>
    <hr class="menu-divider">
    <button class="menu-item danger">
      <span class="menu-icon">🗑️</span>
      Delete
    </button>
  </div>
</div>

<p class="info">🎨 Custom styled with hover effects and divider</p>`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.btn.purple {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #8b5cf6;
  color: white;
  margin-bottom: 1rem;
}

.btn.purple:hover {
  background: #7c3aed;
}

.menu-popover {
  padding: 0;
  min-width: 200px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

html.dark .menu-popover {
  background: #1e293b;
}

.menu-header {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

html.dark .menu-header {
  border-bottom-color: #374151;
}

.menu-header h3 {
  margin: 0;
  font-size: 0.9rem;
  color: #374151;
}

html.dark .menu-header h3 {
  color: #f3f4f6;
}

.menu-items {
  padding: 0.5rem;
}

.menu-item {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  transition: all 0.3s;
  color: #374151;
  font-size: 0.9rem;
}

html.dark .menu-item {
  color: #d1d5db;
}

.menu-item:hover {
  background: #f3f4f6;
}

html.dark .menu-item:hover {
  background: #374151;
}

.menu-item.danger {
  color: #dc2626;
}

.menu-item.danger:hover {
  background: #fee2e2;
}

html.dark .menu-item.danger:hover {
  background: #7f1d1d;
}

.menu-icon {
  font-size: 1.1rem;
}

.menu-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0.5rem 0;
}

html.dark .menu-divider {
  border-top-color: #374151;
}

.info {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .info {
  background: #581c87;
  color: #e9d5ff;
}`}
              colorTheme='purple'
              icon={Menu}
              previewHeight='450px'
            />
          </CardContent>
        </Card>

        {/* Example 4: Tooltip Popover */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='4. Tooltip-style Popover'
              description='Small info tooltips inline with text'
              html={`<p>
  Hover or click the 
  <button popovertarget="tooltip1" class="tooltip-trigger">ℹ️</button>
  icon to see more info.
</p>

<div id="tooltip1" popover class="tooltip-popover">
  <strong>💡 Did you know?</strong><br>
  Popovers automatically position themselves in the viewport and handle z-index!
</div>

<p style="margin-top: 1rem;">
  Here's another 
  <button popovertarget="tooltip2" class="tooltip-trigger">❓</button>
  tooltip example.
</p>

<div id="tooltip2" popover class="tooltip-popover">
  <strong>🎯 Top Layer</strong><br>
  Popovers render in the top layer, so they're always visible above other content.
</div>

<p class="info">💬 Tooltip pattern for inline help</p>`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

p {
  color: #374151;
  line-height: 1.6;
}

html.dark p {
  color: #d1d5db;
}

.tooltip-trigger {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: help;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.tooltip-trigger:hover {
  background: #e0e7ff;
}

html.dark .tooltip-trigger:hover {
  background: #312e81;
}

.tooltip-popover {
  padding: 0.75rem 1rem;
  max-width: 300px;
  font-size: 0.85rem;
  background: #1e293b;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

html.dark .tooltip-popover {
  background: #475569;
}

.tooltip-popover strong {
  color: #60a5fa;
}

.info {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .info {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
              colorTheme='blue'
              icon={HelpCircle}
              previewHeight='400px'
            />
          </CardContent>
        </Card>

        {/* Example 5: Multiple Controls */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='5. Multiple Control Buttons'
              description='Different actions (show, hide, toggle) for same popover'
              html={`<div class="button-group">
  <button popovertarget="multi-popover" popovertargetaction="show" class="btn blue">
    Show
  </button>
  <button popovertarget="multi-popover" popovertargetaction="hide" class="btn red">
    Hide
  </button>
  <button popovertarget="multi-popover" popovertargetaction="toggle" class="btn purple">
    Toggle
  </button>
</div>

<div id="multi-popover" popover class="popover-content">
  <h3>🎮 Control Demo</h3>
  <p>This popover can be controlled by three different buttons:</p>
  <ul>
    <li><strong>Show</strong> - Only opens</li>
    <li><strong>Hide</strong> - Only closes</li>
    <li><strong>Toggle</strong> - Opens or closes</li>
  </ul>
</div>

<p class="info">🔘 Multiple trigger buttons with different actions</p>`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}

.btn.blue {
  background: #3b82f6;
}

.btn.blue:hover {
  background: #2563eb;
}

.btn.red {
  background: #ef4444;
}

.btn.red:hover {
  background: #dc2626;
}

.btn.purple {
  background: #8b5cf6;
}

.btn.purple:hover {
  background: #7c3aed;
}

[popover] {
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.popover-content {
  padding: 1.5rem;
  max-width: 400px;
  background: white;
}

html.dark .popover-content {
  background: #1e293b;
  color: #f1f5f9;
}

.popover-content h3 {
  margin: 0 0 1rem 0;
}

.popover-content ul {
  list-style: none;
  padding: 0;
}

.popover-content li {
  padding: 0.5rem 0;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
}

html.dark .popover-content li {
  color: #94a3b8;
  border-bottom-color: #334155;
}

.info {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.9rem;
}

html.dark .info {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
              colorTheme='purple'
              icon={Settings}
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
          <CardDescription>Tips for using popover API effectively</CardDescription>
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
                  <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>auto</code> for tooltips and menus</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Add descriptive IDs for accessibility</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Keep popover content concise</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Use animations for smooth transitions</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Test keyboard navigation</span>
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
                  <span>Don't use for complex forms (use dialog)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't block critical content with popovers</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't nest popovers inside popovers</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use manual without good reason</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't forget mobile responsiveness</span>
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
          <CardDescription>Popover API is supported in modern browsers (2023+)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: 'Chrome', version: '114+', supported: true },
              { name: 'Firefox', version: '125+', supported: true },
              { name: 'Safari', version: '17+', supported: true },
              { name: 'Edge', version: '114+', supported: true },
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
              <strong>New Feature:</strong> Popover API is relatively new (2023). For older browsers, consider using a JavaScript library or polyfill as fallback.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Popover Playground</CardTitle>
          <CardDescription>Experiment with popover API in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Popover Playground'
            description='Play around with auto and manual popover examples'
            features={[
              'Auto & Manual Types',
              'Light Dismiss',
              'Multiple Triggers',
              'Custom Styling'
            ]}
            buttonText='Open Popover Playground'
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

