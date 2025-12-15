'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Binary } from 'lucide-react';

export default function JavaScriptTypedArrays() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Binary}
        category="Advanced Array Methods"
        title="Typed Arrays"
        description="Work with binary data like a pro - fast and memory-efficient!"
        colorTheme="slate"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50/80 via-gray-50/50 to-zinc-50/30 dark:from-slate-950/20 dark:via-gray-950/10 dark:to-zinc-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-500 text-white shadow-xl">
              <Binary className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
                What are Typed Arrays?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of Typed Arrays as <strong className="text-slate-700 dark:text-slate-400">specialized containers for numbers</strong>! 
                Unlike regular arrays that can hold anything, Typed Arrays store only <strong className="text-gray-700 dark:text-gray-400">specific number types</strong> 
                (8-bit integers, 32-bit floats, etc.) in raw binary format. This makes them <strong className="text-zinc-700 dark:text-zinc-400">super fast</strong> 
                and perfect for graphics, audio, files, and WebGL!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Use Typed Arrays?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Performance!</strong> When working with binary data (images, audio, WebGL), Typed Arrays are much faster 
              and use less memory than regular arrays. They're the bridge between JavaScript and low-level binary data.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔢</span>
            Types of Typed Arrays
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/10 border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">Integer Types</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-slate-700 dark:text-slate-300">Int8Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">-128 to 127</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-slate-700 dark:text-slate-300">Uint8Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">0 to 255</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-slate-700 dark:text-slate-300">Int16Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">-32,768 to 32,767</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-slate-700 dark:text-slate-300">Uint16Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">0 to 65,535</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-slate-700 dark:text-slate-300">Int32Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">-2.1B to 2.1B</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-slate-700 dark:text-slate-300">Uint32Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">0 to 4.2B</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-gray-50 to-zinc-50 dark:from-gray-900/20 dark:to-zinc-900/10 border-2 border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3">Float Types</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-700 dark:text-gray-300">Float32Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">32-bit float</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-700 dark:text-gray-300">Float64Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">64-bit float</span>
                </div>
              </div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3 mt-5">Special</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-700 dark:text-gray-300">Uint8ClampedArray</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">0-255, clamped</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-700 dark:text-gray-300">BigInt64Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">BigInt values</span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-700 dark:text-gray-300">BigUint64Array</code>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">Unsigned BigInt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">ArrayBuffer - The Foundation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              All Typed Arrays are <strong>views</strong> over an <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">ArrayBuffer</code> - 
              a fixed-length raw binary data buffer. Think of ArrayBuffer as the raw memory, and Typed Arrays as different ways to view/interpret that memory.
            </p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                const buffer = new ArrayBuffer(16);  // 16 bytes of memory<br/>
                const view = new Uint8Array(buffer); // View as 8-bit integers
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Creating and Using Typed Arrays"
        description="Basic operations with different typed array types"
        language="javascript"
        colorTheme="slate"
        code={`// 1. Create Uint8Array (0-255)
const bytes = new Uint8Array(5);
bytes[0] = 10;
bytes[1] = 255;
bytes[2] = 300;  // Wraps to 44 (300 % 256)

console.log(bytes);
// Uint8Array [10, 255, 44, 0, 0]


// 2. Create from regular array
const numbers = new Int16Array([10, 20, 30, 40]);
console.log(numbers);
// Int16Array [10, 20, 30, 40]


// 3. Float32Array for decimals
const floats = new Float32Array([1.5, 2.7, 3.14]);
console.log(floats);
// Float32Array [1.5, 2.700000047683716, 3.140000104904175]
// Note: Slight precision differences from Float32


// 4. Array-like methods work!
const arr = new Uint8Array([1, 2, 3, 4, 5]);

// map
const doubled = arr.map(x => x * 2);
console.log(doubled);
// Uint8Array [2, 4, 6, 8, 10]

// filter
const evens = arr.filter(x => x % 2 === 0);
console.log(evens);
// Uint8Array [2, 4]

// reduce
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum);  // 15


// 5. Access buffer
const typed = new Uint16Array(4);
console.log(typed.buffer);        // ArrayBuffer
console.log(typed.byteLength);    // 8 (4 elements × 2 bytes each)
console.log(typed.length);        // 4 (number of elements)`}
      />

      <CodeSnippet
        title="Example 2: Working with Binary Data"
        description="Real-world scenarios for Typed Arrays"
        language="javascript"
        colorTheme="slate"
        code={`// 1. Image pixel manipulation
// Images are typically Uint8ClampedArray (RGBA: 0-255 clamped)
function createRedImage(width, height) {
  const pixels = new Uint8ClampedArray(width * height * 4);
  
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] = 255;      // Red
    pixels[i + 1] = 0;    // Green
    pixels[i + 2] = 0;    // Blue
    pixels[i + 3] = 255;  // Alpha (opacity)
  }
  
  return pixels;
}

const redPixels = createRedImage(2, 2);
console.log(redPixels);
// Uint8ClampedArray [255, 0, 0, 255, 255, 0, 0, 255, ...]


// 2. Audio data (Float32Array)
function generateTone(frequency, duration, sampleRate = 44100) {
  const samples = duration * sampleRate;
  const audio = new Float32Array(samples);
  
  for (let i = 0; i < samples; i++) {
    audio[i] = Math.sin(2 * Math.PI * frequency * i / sampleRate);
  }
  
  return audio;
}

const tone = generateTone(440, 0.1);  // 440Hz A note, 0.1 second
console.log(tone.length);  // 4410 samples


// 3. File reading
async function readFileAsUint8Array(file) {
  const buffer = await file.arrayBuffer();
  return new Uint8Array(buffer);
}

// Usage: const bytes = await readFileAsUint8Array(myFile);


// 4. Network data
function encodeMessage(text) {
  const encoder = new TextEncoder();
  return encoder.encode(text);  // Returns Uint8Array
}

function decodeMessage(bytes) {
  const decoder = new TextDecoder();
  return decoder.decode(bytes);  // String
}

const encoded = encodeMessage('Hello!');
console.log(encoded);
// Uint8Array [72, 101, 108, 108, 111, 33]

const decoded = decodeMessage(encoded);
console.log(decoded);  // "Hello!"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Key Differences from Regular Arrays</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Typed Arrays</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Fixed length (can't resize)</li>
                <li>✅ Fixed type (only numbers)</li>
                <li>✅ Contiguous memory</li>
                <li>✅ Much faster for binary data</li>
                <li>✅ Less memory overhead</li>
                <li>✅ Direct binary access</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">✅ Regular Arrays</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Dynamic length (resize)</li>
                <li>✅ Any type (mixed values)</li>
                <li>✅ Not contiguous</li>
                <li>✅ More flexible</li>
                <li>✅ Easier to use</li>
                <li>✅ More methods available</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            When to Use Typed Arrays
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/20 border-2 border-slate-200 dark:border-slate-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎨</span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Image/Canvas Data</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Manipulating pixel data in Canvas API, WebGL, image processing
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-950/20 border-2 border-gray-200 dark:border-gray-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎵</span>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">Audio Processing</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Web Audio API, audio synthesis, real-time audio manipulation
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/20 border-2 border-zinc-200 dark:border-zinc-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📁</span>
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100">File Handling</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Reading/writing binary files, file uploads, parsing binary formats
            </p>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-950/20 border-2 border-stone-200 dark:border-stone-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🌐</span>
              <h4 className="font-bold text-stone-900 dark:text-stone-100">Network Data</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              WebSockets, binary protocols, data transfer optimization
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950/20 dark:via-gray-950/10 dark:to-zinc-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Fixed Type</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store only specific number types in binary format
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Much faster for binary data operations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-zinc-200 dark:border-zinc-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ArrayBuffer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Backed by raw binary buffer - different views possible
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-stone-200 dark:border-stone-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Graphics, audio, files, WebGL, network data
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
