'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Share2, Image as ImageIcon, FileText, Video, CheckCircle, AlertTriangle, Info, Facebook } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlOpenGraphProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlOpenGraph({ onOpenWebPlayground }: HtmlOpenGraphProps) {
  
  // Example 1: Basic Open Graph Tags
  const basicOgExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Regular SEO Meta Tags -->
  <title>Ultimate Web Development Guide 2024 | CoderPod</title>
  <meta name="description" content="Master web development with comprehensive tutorials on HTML, CSS, JavaScript, and modern frameworks.">
  
  <!-- Open Graph Meta Tags for Social Media -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="Ultimate Web Development Guide 2024">
  <meta property="og:description" content="Master web development with comprehensive tutorials on HTML, CSS, JavaScript, and modern frameworks.">
  <meta property="og:image" content="https://coderpod.com/images/web-dev-guide-og.jpg">
  <meta property="og:url" content="https://coderpod.com/guides/web-development">
  <meta property="og:site_name" content="CoderPod">
  <meta property="og:locale" content="en_US">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #3b82f6;
      margin-bottom: 20px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #60a5fa;
    }
    
    .og-preview {
      background: #f3f4f6;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin: 30px 0;
    }
    
    :root.dark .og-preview {
      background: #334155;
    }
    
    .og-image {
      width: 100%;
      height: 250px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      font-weight: bold;
    }
    
    .og-content {
      padding: 20px;
    }
    
    .og-title {
      font-size: 1.4rem;
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 10px;
    }
    
    :root.dark .og-title {
      color: #f1f5f9;
    }
    
    .og-description {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 15px;
    }
    
    :root.dark .og-description {
      color: #94a3b8;
    }
    
    .og-url {
      color: #3b82f6;
      font-size: 0.85rem;
      text-decoration: none;
    }
    
    :root.dark .og-url {
      color: #60a5fa;
    }
    
    .info-box {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }
    
    :root.dark .info-box {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      border-left-color: #60a5fa;
    }
    
    .info-box h3 {
      color: #1e40af;
      margin-bottom: 10px;
    }
    
    :root.dark .info-box h3 {
      color: #93c5fd;
    }
    
    .info-box p {
      color: #1f2937;
      line-height: 1.6;
    }
    
    :root.dark .info-box p {
      color: #cbd5e1;
    }
    
    .tag-list {
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    :root.dark .tag-list {
      background: #334155;
    }
    
    .tag-list code {
      display: block;
      background: #1f2937;
      color: #60a5fa;
      padding: 8px;
      border-radius: 4px;
      margin: 8px 0;
      font-size: 0.85rem;
    }
    
    :root.dark .tag-list code {
      background: #0f172a;
      color: #93c5fd;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌐 Open Graph Protocol</h1>
    
    <div class="info-box">
      <h3>💡 What is Open Graph?</h3>
      <p>
        Open Graph Protocol controls how your page appears when shared on social media platforms
        like Facebook, LinkedIn, Discord, and Slack. These meta tags create rich previews with
        images, titles, and descriptions.
      </p>
    </div>
    
    <h2 style="color: #3b82f6; margin: 30px 0 15px;">Preview: How Your Link Looks on Social Media</h2>
    
    <div class="og-preview">
      <div class="og-image">
        🚀 Web Development Guide
      </div>
      <div class="og-content">
        <div class="og-title">Ultimate Web Development Guide 2024</div>
        <div class="og-description">
          Master web development with comprehensive tutorials on HTML, CSS, JavaScript, 
          and modern frameworks.
        </div>
        <a href="#" class="og-url">coderpod.com</a>
      </div>
    </div>
    
    <h2 style="color: #3b82f6; margin: 30px 0 15px;">Required Open Graph Tags</h2>
    
    <div class="tag-list">
      <code>&lt;meta property="og:title" content="Your Page Title"&gt;</code>
      <code>&lt;meta property="og:type" content="website"&gt;</code>
      <code>&lt;meta property="og:image" content="https://example.com/image.jpg"&gt;</code>
      <code>&lt;meta property="og:url" content="https://example.com/page"&gt;</code>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px;">
      ✅ View the page source to see all Open Graph tags in the &lt;head&gt; section!
    </p>
  </div>
</body>
</html>`;

  // Example 2: Article Type Open Graph
  const articleOgExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 Essential JavaScript Tips for Beginners | CoderPod Blog</title>
  
  <!-- Basic Open Graph Tags -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="10 Essential JavaScript Tips for Beginners">
  <meta property="og:description" content="Level up your JavaScript skills with these 10 essential tips and tricks. Perfect for beginners looking to write cleaner, more efficient code.">
  <meta property="og:image" content="https://coderpod.com/blog/js-tips-featured.jpg">
  <meta property="og:url" content="https://coderpod.com/blog/javascript-tips-beginners">
  <meta property="og:site_name" content="CoderPod Blog">
  
  <!-- Article-Specific Tags -->
  <meta property="article:published_time" content="2024-01-15T08:00:00Z">
  <meta property="article:modified_time" content="2024-01-20T14:30:00Z">
  <meta property="article:author" content="https://coderpod.com/authors/john-doe">
  <meta property="article:section" content="JavaScript">
  <meta property="article:tag" content="JavaScript">
  <meta property="article:tag" content="Programming">
  <meta property="article:tag" content="Tutorial">
  
  <!-- Image Details -->
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="JavaScript code on a laptop screen with colorful syntax highlighting">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    .article-header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 30px;
      border-bottom: 2px solid #f59e0b;
    }
    
    :root.dark .article-header {
      border-bottom-color: #fbbf24;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #f59e0b;
      margin-bottom: 15px;
    }
    
    :root.dark h1 {
      color: #fbbf24;
    }
    
    .meta-info {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      color: #6b7280;
      font-size: 0.9rem;
    }
    
    :root.dark .meta-info {
      color: #94a3b8;
    }
    
    .tag-container {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 20px 0;
    }
    
    .tag {
      background: #fef3c7;
      color: #78350f;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    :root.dark .tag {
      background: #78350f;
      color: #fef3c7;
    }
    
    .og-specs {
      background: #f3f4f6;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
    }
    
    :root.dark .og-specs {
      background: #334155;
    }
    
    .og-specs h3 {
      color: #1f2937;
      margin-bottom: 20px;
      font-size: 1.3rem;
    }
    
    :root.dark .og-specs h3 {
      color: #f1f5f9;
    }
    
    .spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    
    .spec-item {
      background: white;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .spec-item {
      background: #1e293b;
      border-left-color: #fbbf24;
    }
    
    .spec-label {
      font-size: 0.8rem;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    
    :root.dark .spec-label {
      color: #94a3b8;
    }
    
    .spec-value {
      font-weight: 600;
      color: #1f2937;
      font-size: 1.1rem;
    }
    
    :root.dark .spec-value {
      color: #f1f5f9;
    }
    
    .code-block {
      background: #1f2937;
      color: #fbbf24;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;
      line-height: 1.6;
    }
    
    :root.dark .code-block {
      background: #0f172a;
      color: #fde047;
    }
    
    .code-block code {
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="article-header">
      <h1>📝 Article-Type Open Graph</h1>
      <div class="meta-info">
        <span>📅 Published: Jan 15, 2024</span>
        <span>✏️ Updated: Jan 20, 2024</span>
        <span>👤 By: John Doe</span>
      </div>
      <div class="tag-container">
        <span class="tag">#JavaScript</span>
        <span class="tag">#Programming</span>
        <span class="tag">#Tutorial</span>
      </div>
    </div>
    
    <div class="og-specs">
      <h3>📊 Open Graph Specifications for Articles</h3>
      <div class="spec-grid">
        <div class="spec-item">
          <div class="spec-label">Type</div>
          <div class="spec-value">article</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Image Size</div>
          <div class="spec-value">1200×630px</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Published</div>
          <div class="spec-value">ISO 8601</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Section</div>
          <div class="spec-value">Category</div>
        </div>
      </div>
    </div>
    
    <h3 style="color: #f59e0b; margin: 30px 0 15px;">Article-Specific Tags:</h3>
    <div class="code-block">
      <code>
&lt;!-- Article Metadata --&gt;<br>
&lt;meta property="article:published_time" content="2024-01-15T08:00:00Z"&gt;<br>
&lt;meta property="article:modified_time" content="2024-01-20T14:30:00Z"&gt;<br>
&lt;meta property="article:author" content="Author URL"&gt;<br>
&lt;meta property="article:section" content="JavaScript"&gt;<br>
&lt;meta property="article:tag" content="JavaScript"&gt;<br>
&lt;meta property="article:tag" content="Programming"&gt;<br>
<br>
&lt;!-- Image Details --&gt;<br>
&lt;meta property="og:image:width" content="1200"&gt;<br>
&lt;meta property="og:image:height" content="630"&gt;<br>
&lt;meta property="og:image:alt" content="Descriptive alt text"&gt;
      </code>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ These additional tags help platforms like Facebook and LinkedIn show richer article previews
      with author info, publish dates, and proper categorization.
    </p>
  </div>
</body>
</html>`;

  // Example 3: Video Open Graph
  const videoOgExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn React Hooks in 30 Minutes | Video Tutorial</title>
  
  <!-- Video Open Graph Tags -->
  <meta property="og:type" content="video.other">
  <meta property="og:title" content="Learn React Hooks in 30 Minutes">
  <meta property="og:description" content="Complete guide to React Hooks including useState, useEffect, useContext, and custom hooks. Perfect for beginners!">
  <meta property="og:image" content="https://coderpod.com/videos/react-hooks-thumbnail.jpg">
  <meta property="og:url" content="https://coderpod.com/videos/react-hooks-tutorial">
  <meta property="og:site_name" content="CoderPod">
  
  <!-- Video-Specific Tags -->
  <meta property="og:video" content="https://coderpod.com/videos/react-hooks.mp4">
  <meta property="og:video:secure_url" content="https://coderpod.com/videos/react-hooks.mp4">
  <meta property="og:video:type" content="video/mp4">
  <meta property="og:video:width" content="1280">
  <meta property="og:video:height" content="720">
  <meta property="og:video:duration" content="1800">
  
  <!-- Additional Details -->
  <meta property="video:duration" content="1800">
  <meta property="video:release_date" content="2024-01-10T10:00:00Z">
  <meta property="video:tag" content="React">
  <meta property="video:tag" content="Hooks">
  <meta property="video:tag" content="JavaScript">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #831843 0%, #6b1646 100%);
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #ec4899;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #f9a8d4;
    }
    
    .video-preview {
      background: #000;
      border-radius: 12px;
      overflow: hidden;
      margin: 30px 0;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    
    .video-thumbnail {
      width: 100%;
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      position: relative;
    }
    
    .play-button {
      width: 80px;
      height: 80px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      margin-bottom: 20px;
    }
    
    .play-icon {
      width: 0;
      height: 0;
      border-left: 25px solid white;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      margin-left: 8px;
    }
    
    .duration-badge {
      position: absolute;
      bottom: 15px;
      right: 15px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    .video-info {
      padding: 25px;
      background: white;
    }
    
    :root.dark .video-info {
      background: #334155;
    }
    
    .video-title {
      font-size: 1.5rem;
      color: #1f2937;
      margin-bottom: 10px;
      font-weight: 700;
    }
    
    :root.dark .video-title {
      color: #f1f5f9;
    }
    
    .video-meta {
      display: flex;
      gap: 20px;
      color: #6b7280;
      font-size: 0.9rem;
      margin: 15px 0;
    }
    
    :root.dark .video-meta {
      color: #94a3b8;
    }
    
    .video-description {
      color: #4b5563;
      line-height: 1.6;
    }
    
    :root.dark .video-description {
      color: #cbd5e1;
    }
    
    .tag-grid {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      flex-wrap: wrap;
    }
    
    .video-tag {
      background: #fce7f3;
      color: #be185d;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    :root.dark .video-tag {
      background: #831843;
      color: #fbcfe8;
    }
    
    .specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin: 30px 0;
    }
    
    .spec-card {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }
    
    :root.dark .spec-card {
      background: #475569;
    }
    
    .spec-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    .spec-label {
      font-size: 0.85rem;
      color: #6b7280;
      margin-bottom: 5px;
    }
    
    :root.dark .spec-label {
      color: #cbd5e1;
    }
    
    .spec-value {
      font-weight: 700;
      color: #1f2937;
      font-size: 1.1rem;
    }
    
    :root.dark .spec-value {
      color: #f1f5f9;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎥 Video Open Graph Tags</h1>
    
    <div class="video-preview">
      <div class="video-thumbnail">
        <div class="play-button">
          <div class="play-icon"></div>
        </div>
        <div style="font-size: 1.5rem; font-weight: bold;">Learn React Hooks</div>
        <div class="duration-badge">30:00</div>
      </div>
      <div class="video-info">
        <div class="video-title">Learn React Hooks in 30 Minutes</div>
        <div class="video-meta">
          <span>📅 Jan 10, 2024</span>
          <span>⏱️ 30 minutes</span>
          <span>🎬 1280×720 HD</span>
        </div>
        <p class="video-description">
          Complete guide to React Hooks including useState, useEffect, useContext, and custom hooks. 
          Perfect for beginners looking to master modern React development!
        </p>
        <div class="tag-grid">
          <span class="video-tag">#React</span>
          <span class="video-tag">#Hooks</span>
          <span class="video-tag">#JavaScript</span>
        </div>
      </div>
    </div>
    
    <h2 style="color: #ec4899; margin: 30px 0 20px; font-size: 1.8rem;">Video Specifications</h2>
    <div class="specs-grid">
      <div class="spec-card">
        <div class="spec-icon">📐</div>
        <div class="spec-label">Resolution</div>
        <div class="spec-value">1280×720</div>
      </div>
      <div class="spec-card">
        <div class="spec-icon">⏱️</div>
        <div class="spec-label">Duration</div>
        <div class="spec-value">30 min</div>
      </div>
      <div class="spec-card">
        <div class="spec-icon">📹</div>
        <div class="spec-label">Format</div>
        <div class="spec-value">MP4</div>
      </div>
      <div class="spec-card">
        <div class="spec-icon">🔒</div>
        <div class="spec-label">Protocol</div>
        <div class="spec-value">HTTPS</div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ Video-specific Open Graph tags enable platforms to display rich video previews
      with playback controls, duration, and quality information.
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Share2}
        category="HTML · SEO & Metadata"
        title="Open Graph Protocol"
        description="Control how your content appears when shared on social media platforms"
        colorTheme="blue"
      />

      {/* What is Open Graph */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Share2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is Open Graph Protocol?
          </CardTitle>
          <CardDescription>
            Understanding OG tags and their role in social media sharing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Open Graph Protocol</strong> was created by Facebook and is now used by 
            most social media platforms (Facebook, LinkedIn, Discord, Slack, WhatsApp, etc.) to generate rich link previews. 
            When someone shares your URL, these tags control the title, description, and image that appears.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Rich Previews</h4>
              <p className="text-sm text-muted-foreground">
                Beautiful cards with images, titles, and descriptions when links are shared
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Image Control</h4>
              <p className="text-sm text-muted-foreground">
                Choose exactly which image appears in social shares
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Content Types</h4>
              <p className="text-sm text-muted-foreground">
                Different tags for articles, videos, products, and more
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Open Graph Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Basic Open Graph Tags
          </CardTitle>
          <CardDescription>
            Essential OG tags for any web page with visual preview
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicOgExample}
            title="Basic Open Graph Implementation"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Required OG Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Required Open Graph Tags</CardTitle>
          <CardDescription>
            The four essential tags needed for proper social sharing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
              <Info className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-900 dark:text-red-100">Critical Tags</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                These four tags are required for Open Graph to work properly. Without them, platforms will 
                generate their own (often poor quality) previews.
              </AlertDescription>
            </Alert>
            
            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                  &lt;meta property="og:title" content="Your Page Title"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Title of your content.</strong> Can be different from the <code>&lt;title&gt;</code> tag. 
                  Keep under 60 characters for best display.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                  &lt;meta property="og:type" content="website"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Type of content.</strong> Common values: <code>website</code>, <code>article</code>, 
                  <code>video.other</code>, <code>product</code>. Determines what additional tags are available.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                  &lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Preview image URL.</strong> Use absolute URL (with https://). Recommended size: 1200×630px. 
                  Supports JPG, PNG. Keep under 8MB.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                  &lt;meta property="og:url" content="https://example.com/page"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Canonical URL.</strong> The permanent URL for this content. Should match your canonical link tag.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Article Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Article-Type Open Graph
          </CardTitle>
          <CardDescription>
            Additional tags for blog posts and articles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={articleOgExample}
            title="Article Open Graph Tags"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Video Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Video Open Graph
          </CardTitle>
          <CardDescription>
            Special tags for video content with embedded player support
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={videoOgExample}
            title="Video Open Graph Tags"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Optional but Recommended Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Optional but Recommended Tags</CardTitle>
          <CardDescription>
            Additional tags that improve social sharing quality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                &lt;meta property="og:description" content="..."&gt;
              </code>
              <p className="text-sm text-muted-foreground">
                2-3 sentence description. Can differ from meta description. 150-300 characters recommended.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                &lt;meta property="og:site_name" content="Your Site Name"&gt;
              </code>
              <p className="text-sm text-muted-foreground">
                Name of your overall website. Shown separately from page title on most platforms.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                &lt;meta property="og:locale" content="en_US"&gt;
              </code>
              <p className="text-sm text-muted-foreground">
                Language and region. Format: language_TERRITORY. Example: en_US, es_ES, fr_FR.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                &lt;meta property="og:image:width" content="1200"&gt;<br/>
                &lt;meta property="og:image:height" content="630"&gt;
              </code>
              <p className="text-sm text-muted-foreground">
                Image dimensions in pixels. Helps platforms display images faster without downloading first.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                &lt;meta property="og:image:alt" content="Description"&gt;
              </code>
              <p className="text-sm text-muted-foreground">
                Alt text for the OG image. Important for accessibility and when images fail to load.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image Specifications */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <ImageIcon className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">OG Image Best Practices</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Size: 1200×630px</strong> - Recommended by Facebook, works well everywhere</li>
            <li><strong>Aspect ratio: 1.91:1</strong> - Maintains quality across platforms</li>
            <li><strong>Format: JPG or PNG</strong> - JPG for photos, PNG for graphics with text</li>
            <li><strong>File size: Under 8MB</strong> - Most platforms have this limit</li>
            <li><strong>Min size: 200×200px</strong> - Smaller images may not display</li>
            <li><strong>Use absolute URLs</strong> - Include full https:// path</li>
            <li><strong>Add important text at center</strong> - Platforms may crop edges</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Open Graph Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always use absolute URLs</strong> - Include full https:// for images and URLs</li>
            <li><strong>Create custom OG images</strong> - Don't rely on random page images</li>
            <li><strong>Keep titles concise</strong> - Under 60 characters for best display</li>
            <li><strong>Write compelling descriptions</strong> - Encourage clicks with clear value</li>
            <li><strong>Match content type</strong> - Use "article" for blog posts, "video.other" for videos</li>
            <li><strong>Test before publishing</strong> - Use Facebook Debugger or LinkedIn Inspector</li>
            <li><strong>Include image dimensions</strong> - Speeds up preview generation</li>
            <li><strong>Use consistent site_name</strong> - Same across all pages for brand recognition</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Your Open Graph Tags</CardTitle>
          <CardDescription>
            Tools to validate and debug your OG implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 Facebook Sharing Debugger</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Test and refresh Facebook's cache of your Open Graph tags
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://developers.facebook.com/tools/debug/
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">💼 LinkedIn Post Inspector</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Validate OG tags for LinkedIn sharing
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://www.linkedin.com/post-inspector/
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🐦 Twitter Card Validator</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Preview how your content looks on Twitter/X
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://cards-dev.twitter.com/validator
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✅ OpenGraph.xyz</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Quick preview across multiple platforms
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://www.opengraph.xyz/
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Open Graph Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Using relative URLs</strong> - Always use full https:// URLs</li>
            <li><strong>Wrong image dimensions</strong> - Use 1200×630px for best results</li>
            <li><strong>Forgetting og:url</strong> - Canonical URL is required</li>
            <li><strong>Missing og:type</strong> - Defaults to "website" but should be explicit</li>
            <li><strong>Not testing</strong> - Always validate with platform tools before sharing</li>
            <li><strong>Inconsistent content</strong> - OG tags should match actual page content</li>
            <li><strong>Image too large</strong> - Keep under 8MB for compatibility</li>
            <li><strong>Not updating cache</strong> - Use debuggers to refresh after changes</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Platform Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Open Graph is supported by all major social media platforms: Facebook, LinkedIn, Twitter/X, Discord, 
          Slack, WhatsApp, Telegram, Pinterest, and Reddit. It's the standard for social sharing metadata.
        </AlertDescription>
      </Alert>
    </div>
  );
}
