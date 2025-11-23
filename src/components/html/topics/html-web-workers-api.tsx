'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, Cpu, SplitSquareHorizontal, Network, Timer, ShieldCheck, Play, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HtmlWebWorkersApiProps { onOpenWebPlayground?: (html:string, css:string, js:string)=>void }

// Playground demos
const basicWorkerDemo = {
  html:`<h2>Basic Web Worker</h2>\n<button id='start'>Start Heavy Task</button>\n<pre id='log'></pre>`,
  css:`body{font-family:system-ui;padding:1.25rem}button{background:#2563eb;color:#fff;border:none;padding:.75rem 1rem;border-radius:6px;font-weight:600}pre{background:#0f172a;color:#fff;padding:.75rem;border-radius:6px;margin-top:1rem;white-space:pre-wrap}`,
  js:`// Create worker from inline blob for playground convenience\nconst workerCode = \
  \`self.onmessage = (e) => {\\n  const count = e.data.count;\\n  let sum = 0;\\n  for (let i=0;i<count;i++){ sum += Math.sqrt(i); }\\n  postMessage({ type: 'done', result: sum });\\n};\`;\nconst blob = new Blob([workerCode], { type: 'text/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\nconst log = document.getElementById('log');\nworker.onmessage = (e)=>{ log.textContent = 'Result: '+ e.data.result; };\ndocument.getElementById('start').onclick=()=>{ log.textContent='Working...'; worker.postMessage({count: 500000}); };`
};

const transferableDemo = {
  html:`<h2>Transferable Objects</h2>\n<button id='calc'>Process Large Array</button>\n<pre id='out'></pre>`,
  css:`body{font-family:system-ui;padding:1.25rem}button{background:#9333ea;color:#fff;border:none;padding:.65rem 1rem;border-radius:6px;font-weight:600}pre{background:#1e293b;color:#fff;padding:.75rem;border-radius:6px;margin-top:1rem;white-space:pre-wrap}`,
  js:`const workerCode = \`self.onmessage = (e)=>{ const buf = e.data; const view = new Float64Array(buf); for (let i=0;i<view.length;i++){ view[i] = Math.sin(view[i]); } postMessage(buf, [buf]); };\`;\nconst blob = new Blob([workerCode],{type:'text/javascript'});\nconst worker = new Worker(URL.createObjectURL(blob));\nconst out = document.getElementById('out');\nworker.onmessage=(e)=>{ const view = new Float64Array(e.data); out.textContent = 'First 5 transformed values: '+ Array.from(view.slice(0,5)).map(v=>v.toFixed(4)).join(', '); };\ndocument.getElementById('calc').onclick=()=>{ const arr = new Float64Array(200000); for(let i=0;i<arr.length;i++){arr[i]=i/10;} worker.postMessage(arr.buffer, [arr.buffer]); out.textContent='Sent buffer...'; };`
};

const sharedWorkerDemo = {
  html:`<h2>Shared Worker Counter</h2>\n<button id='inc'>Increment (Shared)</button>\n<pre id='state'></pre>\n<p>Open this playground in two tabs to see shared state.</p>`,
  css:`body{font-family:system-ui;padding:1.25rem}button{background:#10b981;color:#fff;border:none;padding:.65rem 1rem;border-radius:6px;font-weight:600}pre{background:#022c22;color:#d1fae5;padding:.75rem;border-radius:6px;margin-top:1rem;white-space:pre-wrap}`,
  js:`const sharedCode = \`let count=0; onconnect = (e)=>{ const port = e.ports[0]; port.onmessage=(msg)=>{ if(msg.data==='inc'){ count++; } port.postMessage(count); }; };\`;\nconst blob = new Blob([sharedCode],{type:'text/javascript'});\nconst worker = new SharedWorker(URL.createObjectURL(blob));\nconst state = document.getElementById('state');\nworker.port.onmessage=(e)=>{ state.textContent = 'Shared count: '+ e.data; };\ndocument.getElementById('inc').onclick=()=>{ worker.port.postMessage('inc'); };\nworker.port.start();`
};

export default function HtmlWebWorkersApi({ onOpenWebPlayground }: HtmlWebWorkersApiProps){
  const [activeDemo, setActiveDemo] = useState<'basic'|'transferable'|'shared'>('basic');
  const currentDemo = activeDemo==='basic' ? basicWorkerDemo : activeDemo==='transferable' ? transferableDemo : sharedWorkerDemo;

  return <div className='space-y-10'>
    <PageHeader icon={File} category='HTML Basics' title='Web Workers API' description='Run JavaScript in background threads for smoother UIs' colorTheme='blue'/>

    <Card>
      <CardHeader>
        <CardTitle>Why Web Workers?</CardTitle>
        <CardDescription>Prevent long-running computations from freezing the main (UI) thread.</CardDescription>
      </CardHeader>
      <CardContent className='grid md:grid-cols-2 gap-6 text-sm'>
        <div className='space-y-3'>
          <h4 className='font-semibold flex items-center gap-2'><Cpu className='w-4 h-4 text-primary'/>Main Thread vs Worker</h4>
          <p>The browser UI, layout, rendering, and user input all share the single main thread. Heavy loops here cause jank.</p>
          <ul className='list-disc list-inside space-y-1'>
            <li><strong>Web Worker:</strong> Dedicated background thread.</li>
            <li><strong>Shared Worker:</strong> Shared among multiple tabs/windows of same origin.</li>
            <li><strong>Service Worker:</strong> Network proxy, offline caching (separate concern).</li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h4 className='font-semibold flex items-center gap-2'><SplitSquareHorizontal className='w-4 h-4 text-primary'/>Limitations</h4>
          <ul className='list-disc list-inside space-y-1'>
            <li>No direct DOM access inside workers.</li>
            <li>Communicate via <code>postMessage()</code> and message events.</li>
            <li>Must serialize or transfer data (structured clone).</li>
            <li>Still pay cost for copying large objects unless transferred.</li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Core APIs & Attributes</CardTitle>
        <CardDescription>Essential properties, lifecycle, and messaging patterns.</CardDescription>
      </CardHeader>
      <CardContent className='text-sm space-y-4'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-muted p-4 rounded border space-y-2'>
            <h5 className='font-semibold'>Dedicated Worker</h5>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>{"new Worker(url, { type: 'module' })"}</code> ES module support.</li>
              <li><code>worker.postMessage(data)</code> send data.</li>
              <li><code>worker.onmessage = fn</code> receive messages.</li>
              <li><code>worker.terminate()</code> stop execution.</li>
            </ul>
          </div>
          <div className='bg-muted p-4 rounded border space-y-2'>
            <h5 className='font-semibold'>Shared Worker</h5>
            <ul className='list-disc list-inside space-y-1'>
              <li><code>new SharedWorker(url)</code> returns worker with <code>.port</code>.</li>
              <li><code>port.postMessage()</code> / <code>port.onmessage</code>.</li>
              <li><code>onconnect</code> event inside worker script.</li>
              <li>State persists across tabs.</li>
            </ul>
          </div>
        </div>
        <div className='grid md:grid-cols-3 gap-4 text-xs'>
          <div className='bg-primary/5 border rounded p-3'>
            <strong className='block mb-1'>Transferable Objects</strong>
            <p>Pass ownership of <code>ArrayBuffer</code> to avoid copying.</p>
          </div>
          <div className='bg-primary/5 border rounded p-3'>
            <strong className='block mb-1'>Structured Clone</strong>
            <p>Automatically copies objects (Maps, Dates, etc.).</p>
          </div>
          <div className='bg-primary/5 border rounded p-3'>
            <strong className='block mb-1'>Error Handling</strong>
            <p><code>worker.onerror</code> & <code>worker.onmessageerror</code>.</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Performance & Patterns</CardTitle>
        <CardDescription>Design strategies for CPU heavy tasks.</CardDescription>
      </CardHeader>
      <CardContent className='text-sm space-y-3'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Chunk long loops into batches for progress updates.</li>
          <li>Use transferable buffers for large numeric arrays.</li>
          <li>Pool workers for parallel tasks (limit concurrency).</li>
          <li>Terminate idle workers to reclaim memory.</li>
        </ul>
        <div className='flex flex-wrap gap-2 mt-2'>
          <Badge variant='secondary'>Transferables</Badge>
          <Badge variant='secondary'>Progress Messages</Badge>
          <Badge variant='secondary'>Pooling</Badge>
          <Badge variant='secondary'>Cancellation</Badge>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Security Considerations</CardTitle>
        <CardDescription>Keep your background code safe & predictable.</CardDescription>
      </CardHeader>
      <CardContent className='text-sm grid md:grid-cols-2 gap-6'>
        <div className='space-y-2'>
          <h4 className='font-semibold flex items-center gap-2'><ShieldCheck className='w-4 h-4 text-primary'/>Isolation</h4>
          <p>Workers run in isolated global scope: no direct DOM, limited APIs. Helps contain logic.</p>
        </div>
        <div className='space-y-2'>
          <h4 className='font-semibold flex items-center gap-2'><Network className='w-4 h-4 text-primary'/>Communication Hygiene</h4>
          <p>Validate structured messages. Prefer explicit <code>type</code> fields to avoid confusion.</p>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Interactive Playground</CardTitle>
        <CardDescription>Switch scenarios and open runnable example.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex gap-2 flex-wrap'>
          <Button variant={activeDemo==='basic'? 'default':'secondary'} size='sm' onClick={()=>setActiveDemo('basic')}>Basic Worker</Button>
          <Button variant={activeDemo==='transferable'? 'default':'secondary'} size='sm' onClick={()=>setActiveDemo('transferable')}>Transferable Buffer</Button>
          <Button variant={activeDemo==='shared'? 'default':'secondary'} size='sm' onClick={()=>setActiveDemo('shared')}>Shared Worker</Button>
        </div>
        <div className='text-xs bg-muted p-4 rounded border space-y-2'>
          <p className='font-semibold'>Selected Demo: {activeDemo.replace(/\b\w/g,c=>c.toUpperCase())}</p>
          <p>Click "Open Demo" to run this scenario in an isolated playground.</p>
        </div>
        <Button onClick={()=>onOpenWebPlayground?.(currentDemo.html,currentDemo.css,currentDemo.js)}><Play className='mr-2 w-4 h-4'/>Open Demo</Button>
      </CardContent>
    </Card>

    <Card className='border-primary bg-primary/5'>
      <CardHeader>
        <CardTitle className='text-primary flex items-center gap-2'><Timer className='w-5 h-5'/>Checklist: When To Use</CardTitle>
      </CardHeader>
      <CardContent className='text-xs'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Large data transforms (image processing, parsing).</li>
          <li>Mathematical simulations or crypto operations.</li>
          <li>Continuous streaming calculations (FFT, audio).</li>
          <li>Format conversions (CSV → JSON) without blocking UI.</li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'><Rocket className='w-5 h-5 text-primary'/>Advanced Tips</CardTitle>
      </CardHeader>
      <CardContent className='text-xs space-y-2'>
        <ul className='list-disc list-inside space-y-1'>
          <li>Use <code>Atomics</code> & <code>SharedArrayBuffer</code> for low-latency shared memory (cross-tab sync).</li>
          <li>Consider WASM inside workers for maximum performance.</li>
          <li>Stream partial results back (e.g. progress bars).</li>
          <li>Bundle worker scripts separately to avoid main bundle bloat.</li>
        </ul>
      </CardContent>
    </Card>
  </div>;
}
