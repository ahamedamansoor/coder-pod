'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Repeat } from 'lucide-react';

export default function JavaScriptArrayBufferTransfer() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="Modern JavaScript (ES2024)"
        title="ArrayBuffer Transfer"
        description="Transfer and resize ArrayBuffers efficiently!"
        colorTheme="cyan"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50/80 via-sky-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:via-sky-950/10 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 text-white shadow-xl">
              <Repeat className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-700 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                What is ArrayBuffer Transfer?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded">ArrayBuffer.prototype.transfer()</code> and 
                <code className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 rounded mx-1">transferToFixedLength()</code> let you 
                <strong className="text-cyan-700 dark:text-cyan-400"> efficiently transfer</strong> and 
                <strong className="text-sky-700 dark:text-sky-400"> resize ArrayBuffers</strong>! 
                The original buffer becomes <strong className="text-blue-700 dark:text-blue-400">detached</strong> - perfect for 
                zero-copy transfers between workers!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Zero-Copy Performance!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Transfer ownership without copying data - extremely efficient for large buffers and worker communication!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            Transfer Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">transfer(newByteLength?)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Transfer with optional resize. Returns resizable ArrayBuffer.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/10 border-2 border-sky-200 dark:border-sky-800">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-2">transferToFixedLength(newByteLength?)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Transfer with optional resize. Returns fixed-length ArrayBuffer.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Basic Transfer and Resize"
        description="Transfer ArrayBuffer ownership and resize"
        language="javascript"
        colorTheme="cyan"
        code={`// Create ArrayBuffer
const buffer1 = new ArrayBuffer(16);
const view1 = new Uint8Array(buffer1);
view1[0] = 42;
view1[1] = 99;

console.log(buffer1.byteLength);  // 16
console.log(view1[0]);            // 42


// Transfer to new buffer (same size)
const buffer2 = buffer1.transfer();

console.log(buffer2.byteLength);  // 16
console.log(buffer1.byteLength);  // 0 - DETACHED!

// Original buffer is now detached - can't use it
try {
  const view = new Uint8Array(buffer1);  // ❌ Error!
} catch (e) {
  console.log('Original buffer detached');
}

// New buffer has the data
const view2 = new Uint8Array(buffer2);
console.log(view2[0]);  // 42 ✅


// Transfer with resize (grow)
const buffer3 = new ArrayBuffer(8);
const view3 = new Uint8Array(buffer3);
view3[0] = 100;

const buffer4 = buffer3.transfer(16);  // Grow from 8 to 16

console.log(buffer4.byteLength);  // 16
console.log(buffer3.byteLength);  // 0 - detached

const view4 = new Uint8Array(buffer4);
console.log(view4[0]);   // 100 (preserved)
console.log(view4[15]);  // 0 (new space)


// Transfer with resize (shrink)
const buffer5 = new ArrayBuffer(16);
const view5 = new Uint8Array(buffer5);
for (let i = 0; i < 16; i++) view5[i] = i;

const buffer6 = buffer5.transfer(8);  // Shrink from 16 to 8

console.log(buffer6.byteLength);  // 8
const view6 = new Uint8Array(buffer6);
console.log(view6.length);  // 8 (truncated)


// transferToFixedLength - creates non-resizable buffer
const resizable = new ArrayBuffer(8, { maxByteLength: 32 });
const fixed = resizable.transferToFixedLength(16);

console.log(fixed.byteLength);      // 16
console.log(fixed.resizable);       // false
console.log(fixed.maxByteLength);   // 16 (same as byteLength)`}
      />

      <CodeSnippet
        title="Example 2: Worker Communication with Zero-Copy Transfer"
        description="Efficiently transfer large buffers between workers"
        language="javascript"
        colorTheme="cyan"
        code={`// Main Thread
const largeBuffer = new ArrayBuffer(1024 * 1024 * 10);  // 10MB
const view = new Uint8Array(largeBuffer);

// Fill with data
for (let i = 0; i < view.length; i++) {
  view[i] = i % 256;
}

console.log('Main: Created buffer:', largeBuffer.byteLength);

// Create worker
const worker = new Worker('worker.js');

// Transfer buffer to worker (zero-copy!)
worker.postMessage(
  { buffer: largeBuffer },
  [largeBuffer]  // Transferable list
);

console.log('Main: Buffer transferred');
console.log('Main: Original buffer detached:', largeBuffer.byteLength);  // 0

// Original buffer is now unusable in main thread
// Worker has full ownership


// Worker Thread (worker.js)
self.onmessage = ({ data: { buffer } }) => {
  console.log('Worker: Received buffer:', buffer.byteLength);
  
  const view = new Uint8Array(buffer);
  
  // Process data
  let sum = 0;
  for (let i = 0; i < view.length; i++) {
    sum += view[i];
  }
  
  console.log('Worker: Processed data, sum:', sum);
  
  // Transfer back to main thread
  self.postMessage({ buffer, sum }, [buffer]);
  
  // Buffer is now detached in worker
  console.log('Worker: Buffer transferred back');
};


// Real-world: Image processing pipeline
class ImageProcessor {
  constructor() {
    this.worker = new Worker('image-worker.js');
  }
  
  async processImage(imageData) {
    // Create buffer from image data
    const buffer = new ArrayBuffer(imageData.length);
    const view = new Uint8Array(buffer);
    view.set(imageData);
    
    return new Promise((resolve) => {
      this.worker.onmessage = ({ data: { processedBuffer } }) => {
        const result = new Uint8Array(processedBuffer);
        resolve(result);
      };
      
      // Transfer to worker for processing
      this.worker.postMessage(
        { buffer, width: 1920, height: 1080 },
        [buffer]
      );
    });
  }
}


// Resizable buffer transfer
const growableBuffer = new ArrayBuffer(1024, {
  maxByteLength: 1024 * 1024  // Can grow up to 1MB
});

// Initially 1KB
console.log(growableBuffer.byteLength);     // 1024
console.log(growableBuffer.maxByteLength);  // 1048576

// Transfer and resize to 2KB
const transferred = growableBuffer.transfer(2048);

console.log(transferred.byteLength);      // 2048
console.log(transferred.maxByteLength);   // 1048576
console.log(transferred.resizable);       // true


// Memory-efficient buffer swapping
function swapBuffers(buffer1, buffer2) {
  // Transfer both buffers to new sizes if needed
  const newBuffer1 = buffer1.transfer();
  const newBuffer2 = buffer2.transfer();
  
  // Original buffers are now detached
  // New buffers can be used
  return [newBuffer2, newBuffer1];  // Swapped!
}`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Buffer States After Transfer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-900/30 dark:to-sky-900/30">
                  <th className="p-3 text-left border border-cyan-200 dark:border-cyan-800 text-gray-900 dark:text-gray-100">Property</th>
                  <th className="p-3 text-center border border-cyan-200 dark:border-cyan-800 text-gray-900 dark:text-gray-100">Original Buffer</th>
                  <th className="p-3 text-center border border-cyan-200 dark:border-cyan-800 text-gray-900 dark:text-gray-100">New Buffer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">byteLength</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">0 (detached)</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">New size ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Usable</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">No ❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Yes ✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Data</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Lost ❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Preserved ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">detached</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">true</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-cyan-950/20 dark:via-sky-950/10 dark:to-blue-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Zero-Copy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transfer ownership without copying data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Detached</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Original buffer becomes unusable
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📏</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Resize</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optionally resize during transfer
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2024</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Efficient buffer management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
