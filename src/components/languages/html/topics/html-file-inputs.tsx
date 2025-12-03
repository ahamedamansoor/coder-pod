'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Upload, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlFileInputsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const fileInputExample = {
  html: `<h2>File Upload Input</h2>
<form class="form-container" enctype="multipart/form-data">
  <div class="form-group">
    <label for="avatar">Upload Avatar (Image only):</label>
    <input type="file" id="avatar" name="avatar" accept="image/*">
    <small>Accepts: JPG, PNG, GIF, WebP</small>
  </div>

  <div class="form-group">
    <label for="document">Upload Document (PDF):</label>
    <input type="file" id="document" name="document" accept=".pdf">
    <small>PDF files only</small>
  </div>

  <div class="form-group">
    <label for="multiple">Upload Multiple Files:</label>
    <input type="file" id="multiple" name="files" multiple>
    <small>Hold Ctrl/Cmd to select multiple files</small>
  </div>

  <div class="form-group">
    <label for="capture">Capture from Camera:</label>
    <input type="file" id="capture" name="photo" accept="image/*" capture="environment">
    <small>Mobile: Opens camera app</small>
  </div>

  <button type="submit" class="btn">Upload Files</button>
</form>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .form-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #f1f5f9;
  }
}

input[type="file"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  color: #475569;
}

input[type="file"]::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background: #d97706;
}

@media (prefers-color-scheme: dark) {
  input[type="file"] {
    background: #0f172a;
    border-color: #334155;
    color: #cbd5e1;
  }
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
}

@media (prefers-color-scheme: dark) {
  small {
    color: #9ca3af;
  }
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #d97706;
}

@media (prefers-color-scheme: dark) {
  .btn {
    background: #b45309;
  }
  
  .btn:hover {
    background: #92400e;
  }
}`,
  js: ``,
};

export default function HtmlFileInputs({ onOpenWebPlayground }: HtmlFileInputsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Upload}
        category="HTML · Forms"
        title="File Inputs"
        description="Learn to handle file uploads in forms"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Upload className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                File Inputs
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Allow users to upload files
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            File input allows users to select files from their device to upload. Use accept attribute to restrict file types.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Important</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use enctype="multipart/form-data" on forms with file inputs. Always validate files on the server!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* File Inputs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Upload className="w-7 h-7" />
            File Input Examples
          </CardTitle>
          <CardDescription className="text-base">
            Different file input configurations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="File Input Types"
            description="Single, multiple, and filtered file uploads"
            html={fileInputExample.html}
            css={fileInputExample.css}
            js={fileInputExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { attr: 'accept', desc: 'File types allowed (e.g., "image/*", ".pdf")' },
              { attr: 'multiple', desc: 'Allow selecting multiple files' },
              { attr: 'capture', desc: 'Mobile: "user" (front) or "environment" (back) camera' },
              { attr: 'required', desc: 'File must be selected before submit' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 className="font-mono font-semibold text-amber-600 dark:text-amber-400 mb-1">{item.attr}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use multipart/form-data</li>
                <li>✓ Restrict file types</li>
                <li>✓ Show file size limits</li>
                <li>✓ Validate on server</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ No file type filtering</li>
                <li>✗ Client-only validation</li>
                <li>✗ Unlimited file size</li>
                <li>✗ No user feedback</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

