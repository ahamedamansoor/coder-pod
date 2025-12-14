'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  FileText,
  CheckCircle,
  Upload,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptFileAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={FileText}
        category="JavaScript Browser APIs"
        title="File API"
        description="Read files from user's device"
        colorTheme="blue"
      />

      {/* What is File API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-indigo-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the File API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The File API lets you <strong className="text-blue-700 dark:text-blue-400">read files</strong> that users select through file inputs. You can read text files, images, or any file type and display or process their content!
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Security:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Files can only be accessed when the user explicitly selects them through a file input. You cannot read files from their device without permission.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: File Reader"
        description="Upload and preview files!"
        html={`<div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #2563eb; margin-bottom: 20px;">📁 File Reader Demo</h2>
  
  <!-- File Input -->
  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 2px solid #93c5fd;">
    <h3 style="color: #1e40af; margin-top: 0;">Choose a Text File:</h3>
    <input type="file" id="fileInput" accept=".txt,.json,.html,.css,.js" style="width: 100%; padding: 12px; border: 2px solid #60a5fa; border-radius: 6px; background: white;">
    <p style="font-size: 12px; color: #1e40af; margin-top: 8px; margin-bottom: 0;">Accepts: .txt, .json, .html, .css, .js files</p>
  </div>
  
  <!-- File Info -->
  <div id="fileInfo" style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin-bottom: 15px; display: none; border-left: 4px solid #3b82f6;">
    <h4 style="margin: 0 0 10px 0; color: #1e40af;">📄 File Information:</h4>
    <div id="fileDetails" style="font-size: 14px; color: #1e3a8a;"></div>
  </div>
  
  <!-- File Content -->
  <div id="contentArea" style="display: none;">
    <h3 style="color: #2563eb;">📝 File Content:</h3>
    <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 2px solid #bfdbfe;">
      <pre id="fileContent" style="margin: 0; white-space: pre-wrap; font-family: monospace; font-size: 13px; color: #1e293b; max-height: 400px; overflow-y: auto;"></pre>
    </div>
  </div>
</div>`}
        js={`const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileDetails = document.getElementById('fileDetails');
const contentArea = document.getElementById('contentArea');
const fileContent = document.getElementById('fileContent');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  
  if (!file) {
    fileInfo.style.display = 'none';
    contentArea.style.display = 'none';
    return;
  }
  
  // Display file information
  fileInfo.style.display = 'block';
  fileDetails.innerHTML = \`
    <div style="margin-bottom: 5px;"><strong>Name:</strong> \${file.name}</div>
    <div style="margin-bottom: 5px;"><strong>Size:</strong> \${(file.size / 1024).toFixed(2)} KB</div>
    <div style="margin-bottom: 5px;"><strong>Type:</strong> \${file.type || 'unknown'}</div>
    <div><strong>Last Modified:</strong> \${new Date(file.lastModified).toLocaleDateString()}</div>
  \`;
  
  // Read file content
  const reader = new FileReader();
  
  reader.onload = (e) => {
    const text = e.target.result;
    contentArea.style.display = 'block';
    fileContent.textContent = text;
  };
  
  reader.onerror = () => {
    contentArea.style.display = 'block';
    fileContent.textContent = '❌ Error reading file!';
  };
  
  // Read file as text
  reader.readAsText(file);
});`}
        colorTheme="blue"
      />

      {/* Example 1: Read Text File */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Read Text File</CardTitle>
          <CardDescription>Basic file reading</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Read text file content
document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  
  if (!file) return;
  
  // Create FileReader
  const reader = new FileReader();
  
  // Set up onload handler
  reader.onload = (e) => {
    const text = e.target.result;
    console.log('File content:', text);
    document.getElementById('output').textContent = text;
  };
  
  // Read file as text
  reader.readAsText(file);
});

// HTML:
// <input type="file" id="fileInput" accept=".txt">
// <pre id="output"></pre>

// 🎯 FileReader methods:
// - readAsText() - Read as text
// - readAsDataURL() - Read as base64 (for images)
// - readAsArrayBuffer() - Read as binary data`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Image Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Image Preview</CardTitle>
          <CardDescription>Display uploaded image</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Preview image before upload
document.getElementById('imageInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  
  if (!file || !file.type.startsWith('image/')) {
    alert('Please select an image file');
    return;
  }
  
  const reader = new FileReader();
  
  reader.onload = (e) => {
    // e.target.result contains base64 image data
    const img = document.getElementById('preview');
    img.src = e.target.result;
    img.style.display = 'block';
  };
  
  // Read as data URL (base64)
  reader.readAsDataURL(file);
});

// HTML:
// <input type="file" id="imageInput" accept="image/*">
// <img id="preview" style="max-width: 300px; display: none;">

// 🎯 Common use: Profile picture upload with preview`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>When to use File API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🖼️ Image Preview</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Show image before uploading
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">📄 CSV Import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Read and parse CSV/Excel files
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">📝 Text Editor</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Open and edit text files
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">💾 Data Import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Import JSON configuration files
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>File API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📄 Read Text File</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`const file = event.target.files[0];
const reader = new FileReader();
reader.onload = (e) => console.log(e.target.result);
reader.readAsText(file);`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🖼️ Read Image as Data URL</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`reader.readAsDataURL(file); // Returns base64`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>🔒 Security:</strong> Can only read user-selected files
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📂</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">FileReader</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Main API for reading files<br/>
                    Async with events
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Read Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    readAsText()<br/>
                    readAsDataURL()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">User Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only user-selected files<br/>
                    Cannot access randomly
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🖼️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Common Use</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Image previews<br/>
                    CSV/JSON imports
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <Upload className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Client-Side File Processing</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The File API enables <strong>powerful client-side file processing</strong> without uploading to a server. Perfect for privacy-sensitive applications!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
