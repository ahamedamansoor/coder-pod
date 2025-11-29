'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, List, Play, Search, ChevronDown, CheckCircle, XCircle, Lightbulb, Code, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlDatalistElementProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<label for='browser'>Browser:</label>
<input list='browsers' id='browser'>
<datalist id='browsers'>
  <option value='Chrome'>
  <option value='Firefox'>
  <option value='Safari'>
  <option value='Edge'>
</datalist>`,
  css: `body{font-family:system-ui;padding:1rem}input{padding:.5rem;width:220px}`,
  js: ''
};

export default function HtmlDatalistElement({ onOpenWebPlayground }: HtmlDatalistElementProps) {
  return (
    <div className='space-y-10 pb-16'>
      {/* Page Header */}
      <PageHeader 
        icon={List} 
        category='HTML Basics' 
        title='Datalist Element' 
        description='Autocomplete suggestions for input fields with free-form typing'
        colorTheme='blue'
      />

      {/* What is Datalist? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Search className='w-5 h-5 text-blue-600' />
            What is Datalist?
          </CardTitle>
          <CardDescription>The datalist element provides autocomplete suggestions while allowing free-form text entry</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                Key Features
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Provides <strong>suggestions</strong> as user types</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Allows <strong>custom values</strong> (not limited to list)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Works with <strong>text inputs</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Native <strong>browser support</strong> (no JavaScript needed)</span>
                </li>
              </ul>
            </div>
            
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <h3 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2'>
                <Code className='w-4 h-4' />
                Basic Structure
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`<input list="suggestions" />

<datalist id="suggestions">
  <option value="Option 1">
  <option value="Option 2">
  <option value="Option 3">
</datalist>`}</code>
              </pre>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Pro Tip</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              The datalist is <strong>hidden by default</strong>. It only appears when the user focuses on the input or starts typing. Users can still type any value they want!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Datalist vs Select Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ChevronDown className='w-5 h-5 text-purple-600' />
            Datalist vs Select: What's the Difference?
          </CardTitle>
          <CardDescription>Understanding when to use each element</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Datalist Column */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-blue-200 dark:border-blue-800'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>Datalist</Badge>
                <span className='text-sm text-slate-600 dark:text-slate-400'>Flexible Input</span>
              </div>
              
              <div className='space-y-3'>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>User can <strong>type custom values</strong></span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>Shows <strong>suggestions</strong> as you type</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>Filters options based on input</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>No validation by default</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>Great for <strong>search boxes</strong></span>
                </div>
              </div>

              <div className='bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-xs font-mono border border-blue-200 dark:border-blue-800'>
                <div className='text-slate-600 dark:text-slate-400 mb-1'>Example Use Case:</div>
                <div className='text-blue-700 dark:text-blue-300'>City search with suggestions</div>
              </div>
            </div>

            {/* Select Column */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 pb-2 border-b-2 border-purple-200 dark:border-purple-800'>
                <Badge className='bg-purple-600 hover:bg-purple-700'>Select</Badge>
                <span className='text-sm text-slate-600 dark:text-slate-400'>Strict Choice</span>
              </div>
              
              <div className='space-y-3'>
                <div className='flex items-start gap-2 text-sm'>
                  <XCircle className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0' />
                  <span>User <strong>must choose</strong> from list</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>Shows <strong>dropdown menu</strong></span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>All options visible at once</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>Built-in validation</span>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                  <span>Great for <strong>fixed choices</strong></span>
                </div>
              </div>

              <div className='bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg text-xs font-mono border border-purple-200 dark:border-purple-800'>
                <div className='text-slate-600 dark:text-slate-400 mb-1'>Example Use Case:</div>
                <div className='text-purple-700 dark:text-purple-300'>Country selection dropdown</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Datalist Works - Connection Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-emerald-600' />
            How Datalist Works: The Connection
          </CardTitle>
          <CardDescription>Understanding the relationship between input and datalist</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/20 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
              {/* Input Element */}
              <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-blue-500 dark:border-blue-600 flex-1 max-w-sm'>
                <div className='text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold mb-2'>Step 1: Input</div>
                <code className='text-sm font-mono block bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700 mb-2'>
                  &lt;input list=<span className='text-emerald-600'>"browsers"</span> /&gt;
                </code>
                <div className='text-xs text-slate-600 dark:text-slate-400 space-y-1'>
                  <div>• <code className='bg-slate-100 dark:bg-slate-900 px-1 rounded text-emerald-600'>list</code> attribute points to datalist</div>
                  <div>• Value must match datalist <code className='bg-slate-100 dark:bg-slate-900 px-1 rounded'>id</code></div>
                </div>
              </div>

              {/* Connection Arrow */}
              <div className='flex md:flex-row flex-col items-center'>
                <ArrowRight className='w-8 h-8 text-blue-500 dark:text-blue-400 md:rotate-0 rotate-90' />
                <div className='text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 md:mt-0 md:ml-1'>Connected by ID</div>
              </div>

              {/* Datalist Element */}
              <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-emerald-500 dark:border-emerald-600 flex-1 max-w-sm'>
                <div className='text-xs uppercase tracking-wide text-emerald-600 dark:text-emerald-400 font-semibold mb-2'>Step 2: Datalist</div>
                <code className='text-sm font-mono block bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700 mb-2'>
                  &lt;datalist id=<span className='text-emerald-600'>"browsers"</span>&gt;<br/>
                  &nbsp;&nbsp;&lt;option value="..."&gt;<br/>
                  &lt;/datalist&gt;
                </code>
                <div className='text-xs text-slate-600 dark:text-slate-400 space-y-1'>
                  <div>• <code className='bg-slate-100 dark:bg-slate-900 px-1 rounded text-emerald-600'>id</code> must match input's <code className='bg-slate-100 dark:bg-slate-900 px-1 rounded'>list</code></div>
                  <div>• Contains <code className='bg-slate-100 dark:bg-slate-900 px-1 rounded'>&lt;option&gt;</code> elements</div>
                </div>
              </div>
            </div>

            <div className='mt-6 text-center'>
              <Alert className='inline-flex max-w-2xl text-left'>
                <Lightbulb className='h-4 w-4' />
                <AlertDescription>
                  <strong>Important:</strong> The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>list</code> attribute value and <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>id</code> attribute value must be <strong>exactly the same</strong> for the connection to work!
                </AlertDescription>
              </Alert>
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
          <CardDescription>Real-world scenarios where datalist shines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[
              { icon: Search, title: 'Search Suggestions', example: 'Google-style search with history', color: 'blue' },
              { icon: Globe, title: 'Location Input', example: 'City, country, or address autocomplete', color: 'green' },
              { icon: List, title: 'Product Search', example: 'E-commerce product suggestions', color: 'purple' },
              { icon: Code, title: 'Programming Tags', example: 'Tech stack or skill tags', color: 'orange' },
              { icon: File, title: 'File Extensions', example: '.jpg, .png, .pdf suggestions', color: 'red' },
              { icon: Search, title: 'Email Domains', example: '@gmail.com, @yahoo.com', color: 'cyan' },
            ].map((useCase, index) => (
              <div key={index} className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md'>
                <div className='flex items-center gap-2 mb-2'>
                  <useCase.icon className={`w-5 h-5 text-${useCase.color}-600`} />
                  <h4 className='font-semibold text-sm'>{useCase.title}</h4>
                </div>
                <p className='text-xs text-slate-600 dark:text-slate-400'>{useCase.example}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples with FrontendCodePreview */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <List className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Datalist in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See how datalist provides autocomplete suggestions with various input types
        </p>

        {/* Example 1: Browser Selection */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. Browser Selection'
              description='Basic datalist with browser suggestions - type to see options'
            html={`<div class="input-container">
  <label for="browser-input">Choose or Enter Browser:</label>
  <input 
    type="text" 
    id="browser-input" 
    list="browsers" 
    placeholder="Start typing... (e.g., Chrome)"
    class="styled-input"
  >
  <datalist id="browsers">
    <option value="Google Chrome">
    <option value="Mozilla Firefox">
    <option value="Safari">
    <option value="Microsoft Edge">
    <option value="Opera">
    <option value="Brave">
  </datalist>
</div>

<p class="note">🌐 Type to see suggestions appear. You can also enter any custom value!</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.input-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .input-container {
  background: #1e293b;
}

label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark label {
  color: #cbd5e1;
}

.styled-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark .styled-input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.styled-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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
              icon={Search}
              previewHeight='300px'
            />
          </CardContent>
        </Card>

        {/* Example 2: Programming Languages */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='2. Programming Languages with Descriptions'
              description='Datalist options can include descriptions using option content'
              html={`<div class="input-container">
  <label for="language-input">Select Programming Language:</label>
  <input 
    type="text" 
    id="language-input" 
    list="languages" 
    placeholder="e.g., JavaScript"
    class="styled-input"
  >
  <datalist id="languages">
    <option value="JavaScript">Dynamic web programming</option>
    <option value="Python">General-purpose, easy syntax</option>
    <option value="Java">Enterprise applications</option>
    <option value="C++">System programming</option>
    <option value="TypeScript">JavaScript with types</option>
    <option value="Rust">Memory-safe systems</option>
    <option value="Go">Fast compilation</option>
  </datalist>
</div>

<p class="note">💻 Options show descriptions as hints in some browsers</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.input-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .input-container {
  background: #1e293b;
}

label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark label {
  color: #cbd5e1;
}

.styled-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark .styled-input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.styled-input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
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
              icon={Code}
              previewHeight='300px'
            />
          </CardContent>
        </Card>

        {/* Example 3: Color Picker */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='3. Color Picker with Datalist'
              description='Datalist works with color input to suggest predefined colors'
              html={`<div class="input-container">
  <label for="color-input">Pick or Enter Color:</label>
  <input 
    type="color" 
    id="color-input" 
    list="colors" 
    value="#ec4899"
    class="color-input"
  >
  <datalist id="colors">
    <option value="#3b82f6">Blue</option>
    <option value="#10b981">Green</option>
    <option value="#ef4444">Red</option>
    <option value="#f59e0b">Orange</option>
    <option value="#8b5cf6">Purple</option>
    <option value="#ec4899">Pink</option>
  </datalist>
  <span class="color-display">Selected: #ec4899</span>
</div>

<p class="note">🎨 Datalist provides quick color presets in color picker</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.input-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .input-container {
  background: #1e293b;
}

label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1rem;
}

html.dark label {
  color: #cbd5e1;
}

.color-input {
  width: 150px;
  height: 60px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
}

html.dark .color-input {
  border-color: #475569;
}

.color-input:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.color-display {
  display: block;
  margin-top: 1rem;
  font-family: monospace;
  font-size: 0.9rem;
  color: #64748b;
}

html.dark .color-display {
  color: #94a3b8;
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
  color: #fecdd3;
}`}
              colorTheme='pink'
              icon={Globe}
              previewHeight='300px'
            />
          </CardContent>
        </Card>

        {/* Example 4: Email Domains */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='4. Email Domain Suggestions'
              description='Suggest common email domains for faster input'
              html={`<div class="input-container">
  <label for="email-input">Enter Email Address:</label>
  <input 
    type="email" 
    id="email-input" 
    list="email-domains" 
    placeholder="username@domain.com"
    class="styled-input"
  >
  <datalist id="email-domains">
    <option value="user@gmail.com">
    <option value="user@yahoo.com">
    <option value="user@outlook.com">
    <option value="user@hotmail.com">
    <option value="user@icloud.com">
    <option value="user@protonmail.com">
  </datalist>
</div>

<p class="note">📧 Common email domains appear as suggestions</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.input-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .input-container {
  background: #1e293b;
}

label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark label {
  color: #cbd5e1;
}

.styled-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark .styled-input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.styled-input:focus {
  outline: none;
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #cffafe;
  color: #164e63;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #164e63;
  color: #cffafe;
}`}
              colorTheme='cyan'
              icon={Search}
              previewHeight='300px'
            />
          </CardContent>
        </Card>

        {/* Example 5: Range Slider */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='5. Range Slider with Tick Marks'
              description='Datalist adds visual tick marks to range inputs'
              html={`<div class="input-container">
  <label for="volume-input">Volume Level:</label>
  <input 
    type="range" 
    id="volume-input" 
    list="volume-markers" 
    min="0" 
    max="100" 
    value="50"
    class="range-input"
  >
  <datalist id="volume-markers">
    <option value="0" label="Mute"></option>
    <option value="25" label="Low"></option>
    <option value="50" label="Medium"></option>
    <option value="75" label="High"></option>
    <option value="100" label="Max"></option>
  </datalist>
  <div class="value-display">Current: <span id="value">50</span></div>
</div>

<p class="note">🎚️ Datalist creates tick marks on the range slider</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.input-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .input-container {
  background: #1e293b;
}

label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1rem;
}

html.dark label {
  color: #cbd5e1;
}

.range-input {
  width: 100%;
  height: 8px;
  accent-color: #10b981;
}

.value-display {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #d1fae5;
  border: 2px solid #10b981;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  color: #065f46;
}

html.dark .value-display {
  background: #064e3b;
  border-color: #34d399;
  color: #a7f3d0;
}

#value {
  font-size: 1.2rem;
  color: #10b981;
}

html.dark #value {
  color: #34d399;
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
              js={`const volumeInput = document.getElementById('volume-input');
const valueDisplay = document.getElementById('value');

if (volumeInput && valueDisplay) {
  volumeInput.addEventListener('input', (e) => {
    valueDisplay.textContent = e.target.value;
  });
}`}
              colorTheme='emerald'
              icon={List}
              previewHeight='350px'
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
          <CardDescription>Tips for using datalist effectively</CardDescription>
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
                  <span>Use descriptive <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>id</code> values</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Keep option lists reasonably short (under 100 items)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Add <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>label</code> attributes for better descriptions</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Provide helpful placeholder text</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-600 mt-0.5'>•</span>
                  <span>Test with keyboard navigation</span>
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
                  <span>Don't use for critical selections (use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>&lt;select&gt;</code> instead)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't forget to match <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>list</code> and <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>id</code></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use with very large datasets (consider search API)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't rely solely on it for validation</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-600 mt-0.5'>•</span>
                  <span>Don't use empty <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>value</code> attributes</span>
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
          <CardDescription>Datalist is widely supported across modern browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { name: 'Chrome', version: '20+', supported: true },
              { name: 'Firefox', version: '4+', supported: true },
              { name: 'Safari', version: '12.1+', supported: true },
              { name: 'Edge', version: '12+', supported: true },
            ].map((browser, index) => (
              <div key={index} className='bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 text-center'>
                <div className='font-semibold text-slate-700 dark:text-slate-200'>{browser.name}</div>
                <div className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{browser.version}</div>
                <Badge className='mt-2 bg-emerald-600 hover:bg-emerald-700'>✓ Supported</Badge>
              </div>
            ))}
          </div>
          <Alert className='mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertDescription className='text-amber-700 dark:text-amber-300'>
              <strong>Note:</strong> Safari added support in version 12.1 (2019). For older browsers, the input will still work but suggestions won't appear.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Datalist Playground</CardTitle>
          <CardDescription>Experiment with datalist in a live code editor with preview and console.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Datalist Playground'
            description='Play around with autocomplete suggestions and datalist examples'
            features={[
              'Autocomplete Input',
              'Custom Values',
              'Live Filtering',
              'Multiple Examples'
            ]}
            buttonText='Open Datalist Playground'
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

