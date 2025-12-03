'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Lightbulb, Search } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlMetaDescriptionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const descriptionExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML from scratch with our free tutorials. Master semantic elements, forms, and modern HTML5 features.">
  <title>Learn HTML - Free Tutorials | CoderPod</title>
</head>
<body>
  <h1>Learn HTML</h1>
  <p>The description above appears in search results!</p>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="search-result">
  <div class="title">Learn HTML - Free Tutorials | CoderPod</div>
  <div class="url">https://coderpod.com/html</div>
  <div class="description">Learn HTML from scratch with our free tutorials. Master semantic elements, forms, and modern HTML5 features.</div>
</div>`,
  css: `.search-result{font-family:Arial,sans-serif;max-width:600px;margin:1rem auto;padding:1rem;background:#fff;border-radius:8px;text-align:left;box-shadow:0 2px 8px rgba(0,0,0,.1)}.title{color:#1a0dab;font-size:1.2rem;margin-bottom:.3rem;cursor:pointer}.title:hover{text-decoration:underline}.url{color:#006621;font-size:.85rem;margin-bottom:.3rem}.description{color:#545454;font-size:.9rem;line-height:1.4}@media(prefers-color-scheme:dark){.search-result{background:#1e293b}.title{color:#8ab4f8}.url{color:#bdc1c6}.description{color:#bdc1c6}}`,
  js: ``,
};

export default function HtmlMetaDescription({ onOpenWebPlayground }: HtmlMetaDescriptionProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={FileText}
        category="HTML · Document Head"
        title="Meta Description"
        description="Write compelling descriptions for search engine results"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Search className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is Meta Description?</CardTitle>
              <CardDescription className="text-base mt-1">Your page's elevator pitch</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">meta description</code> provides a 
            brief summary of your page that appears in <strong>search engine results</strong>. It's your chance to convince users to click!
          </p>

          <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg font-mono text-sm overflow-x-auto">
            <code className="text-blue-600 dark:text-blue-400">&lt;meta name="description" content="Your compelling description here"&gt;</code>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">In Search Results</CardTitle>
          <CardDescription>How your description appears on Google</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Search Result Preview"
            description="See how meta description is displayed"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="200px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <FileText className="w-7 h-7" />
            Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Adding Meta Description"
            description="Complete example with description"
            html={descriptionExample.html}
            css={descriptionExample.css}
            js={descriptionExample.js}
            colorTheme="blue"
            previewHeight="280px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Writing Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">✅ Do</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Keep 150-160 characters</li>
                <li>• Include target keywords</li>
                <li>• Write action-oriented copy</li>
                <li>• Make each page unique</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">❌ Don't</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Exceed 160 characters</li>
                <li>• Duplicate descriptions</li>
                <li>• Stuff with keywords</li>
                <li>• Leave it empty</li>
              </ul>
            </div>
          </div>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">SEO Note</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Google may override your description with page content if it better matches the search query.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
