'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Cpu, Lightbulb, AlertTriangle, MessageSquare, Cog } from 'lucide-react';
import React from 'react';

export default function WebWorkersApi({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const playgroundCode = {
        html: `<h1>Web Worker Demo</h1>
<p>Clicking the button will start a long calculation in a background thread. Notice how you can still interact with the page (like selecting this text) while it's running!</p>
<button id="startWorker">Start Heavy Calculation</button>
<button id="updateUI">Update UI</button>
<p>Worker Status: <span id="status">Idle</span></p>
<p>UI Update Count: <span id="uiCount">0</span></p>
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
#status {
    font-weight: bold;
}
`,
        js: `const statusEl = document.getElementById('status');
const uiCountEl = document.getElementById('uiCount');
let count = 0;

// Creating the worker code as a string and then a Blob URL
// This avoids needing a separate worker.js file for the demo.
const workerScript = \`
  self.onmessage = function(e) {
    if (e.data === 'start') {
      console.log('Worker: Starting calculation...');
      // Simulate a very heavy calculation
      let result = 0;
      for (let i = 0; i < 5e9; i++) {
        result += Math.sqrt(i);
      }
      // Post the result back to the main thread
      self.postMessage({ status: 'complete', result: result });
    }
  };
\`;
const blob = new Blob([workerScript], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));

// Listen for messages from the worker
worker.onmessage = function(e) {
  if (e.data.status === 'complete') {
    statusEl.textContent = 'Calculation Complete!';
    statusEl.style.color = 'green';
    console.log('Main thread received result from worker.');
    worker.terminate(); // Good practice to terminate worker when done
  }
};

// Start the worker
document.getElementById('startWorker').onclick = function() {
  statusEl.textContent = 'Calculating...';
  statusEl.style.color = 'orange';
  worker.postMessage('start');
};

// A button to show the UI is responsive
document.getElementById('updateUI').onclick = function() {
  count++;
  uiCountEl.textContent = count;
};
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Cpu className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Web Workers API</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Running background scripts without freezing your web page.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The "Single-Lane Highway" Problem</CardTitle>
                <CardDescription>JavaScript is single-threaded. Imagine a single-lane highway. If a very slow truck (a heavy, long-running script) gets on, all the cars (user interactions like clicking, scrolling) behind it are stuck. The entire webpage freezes. This is a terrible user experience.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-6 h-6"/>The Solution: Web Workers</CardTitle>
                <CardDescription>A Web Worker is a JavaScript script that runs in the background, independently of other scripts, without affecting the performance of the page. It's like opening a new, separate lane on the highway just for that slow truck.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                 <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Cog className="w-5 h-5"/>How it Works</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>You create a new `Worker` object, pointing to a separate JavaScript file.</li>
                        <li>The main page and the worker do not share variables or state. They are completely isolated.</li>
                        <li>They communicate by passing messages back and forth using `postMessage()` and the `onmessage` event handler.</li>
                    </ul>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h4 className="text-center font-bold mb-2">Communication Flow</h4>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-background rounded-lg shadow-sm font-semibold">Main UI Thread</div>
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <div className="bg-background rounded-lg p-2 font-mono text-xs">`worker.postMessage()`</div>
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg shadow-sm font-semibold">Worker Thread</div>
                        <MessageSquare className="w-5 h-5 text-purple-500 rotate-180" />
                        <div className="bg-background rounded-lg p-2 font-mono text-xs">`self.postMessage()`</div>
                         <MessageSquare className="w-5 h-5 text-purple-500 rotate-180" />
                        <div className="p-3 bg-background rounded-lg shadow-sm font-semibold">Main UI Thread (`onmessage`)</div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. Click "Start Heavy Calculation." While the worker is busy, you'll see the "Calculating..." status, but you can still click the "Update UI" button, proving the user interface is not frozen.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>Worker Limitations</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Because they run in a separate context, Web Workers **cannot** directly manipulate the DOM (e.g., change HTML elements) or access some default `window` object properties. They can only perform calculations and communicate results back to the main thread, which can then update the UI.</p>
            </CardContent>
        </Card>
      </div>
    );
}
