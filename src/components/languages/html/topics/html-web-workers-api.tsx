'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Cpu, Zap, AlertCircle, CheckCircle, Info, Activity } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlWebWorkersApiProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlWebWorkersApi({ onOpenWebPlayground }: HtmlWebWorkersApiProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Worker Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #f59e0b;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    .controls {
      display: grid;
      gap: 12px;
      margin-bottom: 20px;
    }
    
    button {
      padding: 14px;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-start {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: white;
    }
    
    .btn-start:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
    }
    
    .btn-start:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }
    
    .status {
      padding: 16px;
      background: #fef3c7;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
      margin-bottom: 20px;
      font-size: 14px;
      color: #92400e;
    }
    
    .result-box {
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      min-height: 100px;
    }
    
    .result-title {
      font-weight: 600;
      color: #f59e0b;
      margin-bottom: 12px;
      font-size: 13px;
      text-transform: uppercase;
    }
    
    .result-value {
      color: #1f2937;
      font-family: monospace;
      font-size: 14px;
      line-height: 1.6;
    }
    
    .spinner {
      border: 3px solid #fef3c7;
      border-top: 3px solid #f59e0b;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 20px auto;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #fbbf24;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .status {
        background: #78350f;
        color: #fde68a;
        border-left-color: #f59e0b;
      }
      
      .result-box {
        background: #0f172a;
        border-color: #475569;
      }
      
      .result-title {
        color: #fbbf24;
      }
      
      .result-value {
        color: #e2e8f0;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #fbbf24;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .status {
      background: #78350f;
      color: #fde68a;
      border-left-color: #f59e0b;
    }
    
    :root.dark .result-box {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .result-title {
      color: #fbbf24;
    }
    
    :root.dark .result-value {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚙️ Web Worker Demo</h1>
    <p class="subtitle">Run heavy calculations without freezing the UI</p>
    
    <div class="status">
      <strong>💡 How it works:</strong> Click the button to start a heavy calculation in a background thread. The UI will remain responsive!
    </div>
    
    <div class="controls">
      <button class="btn-start" id="startBtn">🚀 Start Heavy Calculation</button>
    </div>
    
    <div class="result-box" id="resultBox">
      <div class="result-title">Result</div>
      <div class="result-value">Click the button to start...</div>
    </div>
  </div>
  
  <script>
    const startBtn = document.getElementById('startBtn');
    const resultBox = document.getElementById('resultBox');
    
    // Create worker from inline code (using Blob)
    const workerCode = \`
      self.onmessage = function(e) {
        const iterations = e.data.iterations;
        let result = 0;
        
        // Heavy calculation
        for (let i = 0; i < iterations; i++) {
          result += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
          
          // Send progress updates
          if (i % 100000 === 0) {
            self.postMessage({
              type: 'progress',
              progress: (i / iterations * 100).toFixed(1),
              current: i
            });
          }
        }
        
        // Send final result
        self.postMessage({
          type: 'complete',
          result: result.toFixed(2),
          iterations: iterations
        });
      };
    \`;
    
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));
    
    // Handle messages from worker
    worker.onmessage = function(e) {
      const data = e.data;
      
      if (data.type === 'progress') {
        resultBox.innerHTML = \`
          <div class="result-title">Processing...</div>
          <div class="spinner"></div>
          <div class="result-value" style="text-align: center;">
            Progress: \${data.progress}%<br>
            Iterations: \${data.current.toLocaleString()}
          </div>
        \`;
      } else if (data.type === 'complete') {
        resultBox.innerHTML = \`
          <div class="result-title">✅ Calculation Complete!</div>
          <div class="result-value">
            <strong>Final Result:</strong> \${data.result}<br>
            <strong>Iterations:</strong> \${data.iterations.toLocaleString()}<br>
            <br>
            <small style="color: #6b7280;">The UI remained responsive during the entire calculation!</small>
          </div>
        \`;
        startBtn.disabled = false;
        startBtn.textContent = '🔄 Run Again';
      }
    };
    
    // Handle errors
    worker.onerror = function(e) {
      resultBox.innerHTML = \`
        <div class="result-title" style="color: #dc2626;">❌ Error</div>
        <div class="result-value" style="color: #dc2626;">
          \${e.message}
        </div>
      \`;
      startBtn.disabled = false;
    };
    
    // Start calculation
    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      startBtn.textContent = '⏳ Processing...';
      
      resultBox.innerHTML = \`
        <div class="result-title">Starting calculation...</div>
        <div class="spinner"></div>
      \`;
      
      // Send task to worker
      worker.postMessage({ iterations: 1000000 });
    });
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Cpu}
        category="HTML · APIs"
        title="Web Workers API"
        description="Run JavaScript in background threads without blocking the UI"
        colorTheme="amber"
      />

      {/* What are Web Workers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Cpu className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            What are Web Workers?
          </CardTitle>
          <CardDescription>
            JavaScript threads that run in the background without blocking the UI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <code className="px-2 py-1 bg-muted rounded">Web Workers</code> allow you to run JavaScript in background threads, preventing CPU-intensive tasks from freezing the user interface. Perfect for heavy calculations, data processing, or complex algorithms.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Non-Blocking</h4>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                UI stays responsive during heavy tasks
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Parallel Processing</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Run multiple workers simultaneously
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Message Passing</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Communicate via postMessage API
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Cpu className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            Background Calculation with Progress
          </CardTitle>
          <CardDescription>
            Run heavy calculations without freezing the interface
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Web Worker with Progress Updates"
            colorTheme="amber"
          />
        </CardContent>
      </Card>

      {/* Core API */}
      <Card>
        <CardHeader>
          <CardTitle>Core API Methods</CardTitle>
          <CardDescription>
            Essential methods for working with Web Workers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400 block mb-2">new Worker(url)</code>
              <p className="text-sm text-muted-foreground">Create a new worker from a script file</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400 block mb-2">worker.postMessage(data)</code>
              <p className="text-sm text-muted-foreground">Send data to the worker</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400 block mb-2">worker.onmessage</code>
              <p className="text-sm text-muted-foreground">Receive messages from worker</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400 block mb-2">worker.terminate()</code>
              <p className="text-sm text-muted-foreground">Stop the worker immediately</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Limitations */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Worker Limitations</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>No DOM Access:</strong> Workers can't manipulate the DOM directly</li>
            <li><strong>No window object:</strong> Limited access to browser APIs</li>
            <li><strong>Data Copying:</strong> Data is copied (not shared) between threads by default</li>
            <li><strong>Same-origin policy:</strong> Worker scripts must be from the same origin</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Use Cases */}
      <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <Info className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-900 dark:text-amber-100">Common Use Cases</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Image Processing:</strong> Apply filters, resize images without UI lag</li>
            <li><strong>Data Analysis:</strong> Process large datasets, perform calculations</li>
            <li><strong>Encryption/Decryption:</strong> Handle crypto operations in background</li>
            <li><strong>File Parsing:</strong> Parse large CSV, JSON, or XML files</li>
            <li><strong>Ray Tracing:</strong> Render 3D graphics using parallel workers</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
