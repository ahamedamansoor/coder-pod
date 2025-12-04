'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Twitter, Image as ImageIcon, Video, FileText, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlTwitterCardsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlTwitterCards({ onOpenWebPlayground }: HtmlTwitterCardsProps) {
  
  // Example 1: Summary Card
  const summaryCardExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn Web Development | CoderPod</title>
  
  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@coderpod">
  <meta name="twitter:creator" content="@johndoe">
  <meta name="twitter:title" content="Learn Web Development in 2024">
  <meta name="twitter:description" content="Comprehensive guide to HTML, CSS, JavaScript, and modern frameworks. Perfect for beginners!">
  <meta name="twitter:image" content="https://coderpod.com/images/logo-square.jpg">
  <meta name="twitter:image:alt" content="CoderPod logo with code symbols">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%);
    }
    
    .container {
      max-width: 600px;
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
      font-size: 2rem;
      color: #1da1f2;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #38bdf8;
    }
    
    .card-preview {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      margin: 30px 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    :root.dark .card-preview {
      border-color: #475569;
    }
    
    .card-image {
      width: 100%;
      aspect-ratio: 1/1;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 3rem;
    }
    
    .card-content {
      padding: 20px;
    }
    
    .card-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }
    
    :root.dark .card-title {
      color: #f1f5f9;
    }
    
    .card-description {
      font-size: 0.9rem;
      color: #6b7280;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    
    :root.dark .card-description {
      color: #94a3b8;
    }
    
    .card-footer {
      font-size: 0.85rem;
      color: #9ca3af;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    :root.dark .card-footer {
      color: #64748b;
    }
    
    .badge {
      display: inline-block;
      background: #dbeafe;
      color: #1e40af;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin: 10px 0;
    }
    
    :root.dark .badge {
      background: #1e3a8a;
      color: #bfdbfe;
    }
    
    .info-box {
      background: #f0f9ff;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #1da1f2;
    }
    
    :root.dark .info-box {
      background: #0c4a6e;
      border-left-color: #38bdf8;
    }
    
    .info-box h3 {
      color: #0c7abf;
      margin-bottom: 10px;
    }
    
    :root.dark .info-box h3 {
      color: #7dd3fc;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🐦 Twitter Summary Card</h1>
    
    <span class="badge">Summary Card (1:1 Image)</span>
    
    <div class="info-box">
      <h3>📱 Best For:</h3>
      <p style="color: #334155; line-height: 1.6;">
        General content, blog posts, and websites. Shows square image thumbnail with title and description.
      </p>
    </div>
    
    <div class="card-preview">
      <div class="card-image">
        💻
      </div>
      <div class="card-content">
        <div class="card-title">Learn Web Development in 2024</div>
        <div class="card-description">
          Comprehensive guide to HTML, CSS, JavaScript, and modern frameworks. Perfect for beginners!
        </div>
        <div class="card-footer">
          🔗 coderpod.com
        </div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px;">
      ✅ Image size: 1:1 ratio (e.g., 400×400px). Minimum 144×144px.
    </p>
  </div>
</body>
</html>`;

  // Example 2: Summary Card with Large Image
  const largeImageCardExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 JavaScript Tips Every Developer Should Know | Blog</title>
  
  <!-- Twitter Large Image Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@coderpod">
  <meta name="twitter:creator" content="@johndoe">
  <meta name="twitter:title" content="10 JavaScript Tips Every Developer Should Know">
  <meta name="twitter:description" content="Master JavaScript with these essential tips and tricks. Improve your code quality and efficiency today!">
  <meta name="twitter:image" content="https://coderpod.com/blog/js-tips-banner.jpg">
  <meta name="twitter:image:alt" content="JavaScript code with highlighted tips">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .container {
      max-width: 700px;
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
      font-size: 2rem;
      color: #f59e0b;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #fbbf24;
    }
    
    .card-preview {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      margin: 30px 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    :root.dark .card-preview {
      border-color: #475569;
    }
    
    .card-image {
      width: 100%;
      aspect-ratio: 2/1;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 40px;
    }
    
    .card-image-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
    }
    
    .card-image-subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    
    .card-content {
      padding: 20px;
    }
    
    .card-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 10px;
    }
    
    :root.dark .card-title {
      color: #f1f5f9;
    }
    
    .card-description {
      font-size: 0.95rem;
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    
    :root.dark .card-description {
      color: #94a3b8;
    }
    
    .card-footer {
      font-size: 0.85rem;
      color: #9ca3af;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    :root.dark .card-footer {
      color: #64748b;
    }
    
    .badge {
      display: inline-block;
      background: #fef3c7;
      color: #78350f;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin: 10px 0;
    }
    
    :root.dark .badge {
      background: #78350f;
      color: #fef3c7;
    }
    
    .info-box {
      background: #fffbeb;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .info-box {
      background: #78350f;
      border-left-color: #fbbf24;
    }
    
    .info-box h3 {
      color: #d97706;
      margin-bottom: 10px;
    }
    
    :root.dark .info-box h3 {
      color: #fcd34d;
    }
    
    .info-box p {
      color: #78350f;
    }
    
    :root.dark .info-box p {
      color: #fde68a;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖼️ Large Image Card</h1>
    
    <span class="badge">Summary Large Image (2:1 Ratio)</span>
    
    <div class="info-box">
      <h3>📱 Best For:</h3>
      <p style="line-height: 1.6;">
        Blog posts, articles, and visual content. The large hero image makes tweets stand out in timelines.
      </p>
    </div>
    
    <div class="card-preview">
      <div class="card-image">
        <div class="card-image-title">10 JavaScript Tips</div>
        <div class="card-image-subtitle">🚀 Level Up Your Code</div>
      </div>
      <div class="card-content">
        <div class="card-title">10 JavaScript Tips Every Developer Should Know</div>
        <div class="card-description">
          Master JavaScript with these essential tips and tricks. Improve your code quality and efficiency today!
        </div>
        <div class="card-footer">
          🔗 coderpod.com/blog
        </div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ Image size: 2:1 ratio (e.g., 1200×600px). Minimum 300×157px. Maximum 4096×4096px.
    </p>
  </div>
</body>
</html>`;

  // Example 3: Complete Twitter Cards Template
  const completeTwitterExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Twitter Cards Guide | CoderPod</title>
  
  <!-- Twitter Card Type (Required) -->
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- Twitter Account Information -->
  <meta name="twitter:site" content="@coderpod">
  <meta name="twitter:creator" content="@johndoe">
  
  <!-- Content Details (Required) -->
  <meta name="twitter:title" content="Complete Guide to Twitter Cards">
  <meta name="twitter:description" content="Learn how to implement Twitter Cards for beautiful social media previews. Includes examples for summary, large image, and player cards.">
  <meta name="twitter:image" content="https://coderpod.com/guides/twitter-cards-og.jpg">
  <meta name="twitter:image:alt" content="Twitter card examples showing different card types">
  
  <!-- Open Graph Fallback (Twitter uses OG tags when Twitter tags missing) -->
  <meta property="og:title" content="Complete Guide to Twitter Cards">
  <meta property="og:description" content="Learn how to implement Twitter Cards for beautiful social media previews.">
  <meta property="og:image" content="https://coderpod.com/guides/twitter-cards-og.jpg">
  <meta property="og:url" content="https://coderpod.com/guides/twitter-cards">
  <meta property="og:type" content="article">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%);
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #1da1f2;
      margin-bottom: 20px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #38bdf8;
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      font-size: 1.1rem;
      margin-bottom: 40px;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    .tag-section {
      margin: 30px 0;
    }
    
    .section-title {
      font-size: 1.5rem;
      color: #1f2937;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #1da1f2;
    }
    
    :root.dark .section-title {
      color: #f1f5f9;
      border-bottom-color: #38bdf8;
    }
    
    .tag-grid {
      display: grid;
      gap: 15px;
    }
    
    .tag-item {
      background: #f9fafb;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #1da1f2;
    }
    
    :root.dark .tag-item {
      background: #334155;
      border-left-color: #38bdf8;
    }
    
    .tag-item h4 {
      color: #1da1f2;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    
    :root.dark .tag-item h4 {
      color: #38bdf8;
    }
    
    .tag-item code {
      display: block;
      background: #1f2937;
      color: #38bdf8;
      padding: 10px;
      border-radius: 6px;
      font-size: 0.85rem;
      margin: 10px 0;
      overflow-x: auto;
    }
    
    :root.dark .tag-item code {
      background: #0f172a;
      color: #7dd3fc;
    }
    
    .tag-item p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    :root.dark .tag-item p {
      color: #94a3b8;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-left: 10px;
    }
    
    .badge-required {
      background: #fee2e2;
      color: #991b1b;
    }
    
    .badge-optional {
      background: #dbeafe;
      color: #1e3a8a;
    }
    
    :root.dark .badge-required {
      background: #7f1d1d;
      color: #fecaca;
    }
    
    :root.dark .badge-optional {
      background: #1e3a8a;
      color: #dbeafe;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🐦 Complete Twitter Cards Guide</h1>
    <p class="subtitle">
      All the meta tags you need for perfect Twitter/X previews
    </p>
    
    <div class="tag-section">
      <h2 class="section-title">🎯 Required Tags</h2>
      <div class="tag-grid">
        <div class="tag-item">
          <h4>Card Type <span class="badge badge-required">REQUIRED</span></h4>
          <code>&lt;meta name="twitter:card" content="summary_large_image"&gt;</code>
          <p>
            Type of card: summary, summary_large_image, app, or player.
          </p>
        </div>
        
        <div class="tag-item">
          <h4>Title <span class="badge badge-required">REQUIRED</span></h4>
          <code>&lt;meta name="twitter:title" content="Your Page Title"&gt;</code>
          <p>
            Title of content. Max 70 characters. Falls back to og:title or &lt;title&gt;.
          </p>
        </div>
        
        <div class="tag-item">
          <h4>Description <span class="badge badge-required">REQUIRED</span></h4>
          <code>&lt;meta name="twitter:description" content="Description here..."&gt;</code>
          <p>
            Description of content. Max 200 characters. Falls back to og:description.
          </p>
        </div>
        
        <div class="tag-item">
          <h4>Image <span class="badge badge-required">REQUIRED</span></h4>
          <code>&lt;meta name="twitter:image" content="https://example.com/image.jpg"&gt;</code>
          <p>
            Absolute URL to image. Size depends on card type. Falls back to og:image.
          </p>
        </div>
      </div>
    </div>
    
    <div class="tag-section">
      <h2 class="section-title">⚙️ Optional but Recommended</h2>
      <div class="tag-grid">
        <div class="tag-item">
          <h4>Site Account <span class="badge badge-optional">OPTIONAL</span></h4>
          <code>&lt;meta name="twitter:site" content="@yourhandle"&gt;</code>
          <p>
            Twitter @username of website/organization. Shows in card footer.
          </p>
        </div>
        
        <div class="tag-item">
          <h4>Creator Account <span class="badge badge-optional">OPTIONAL</span></h4>
          <code>&lt;meta name="twitter:creator" content="@authorhandle"&gt;</code>
          <p>
            Twitter @username of content creator. Shown for articles.
          </p>
        </div>
        
        <div class="tag-item">
          <h4>Image Alt Text <span class="badge badge-optional">OPTIONAL</span></h4>
          <code>&lt;meta name="twitter:image:alt" content="Description of image"&gt;</code>
          <p>
            Accessibility description of image. Max 420 characters.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 40px; line-height: 1.6;">
      ✅ Twitter falls back to Open Graph tags when Twitter-specific tags are missing.<br>
      You can use OG tags alone, or combine both for maximum control.
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Twitter}
        category="HTML · SEO & Metadata"
        title="Twitter Cards"
        description="Create rich Twitter/X previews with custom images, titles, and descriptions"
        colorTheme="cyan"
      />

      {/* What are Twitter Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Twitter className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            What are Twitter Cards?
          </CardTitle>
          <CardDescription>
            Understanding Twitter Cards and how they enhance your tweets
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Twitter Cards</strong> (now X Cards) let you attach rich media to tweets
            containing links to your content. Instead of just a URL, users see beautiful cards with images, titles, and descriptions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <ImageIcon className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">Rich Previews</h4>
              <p className="text-sm text-muted-foreground">
                Beautiful cards with custom images and formatted text
              </p>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <FileText className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">More Engagement</h4>
              <p className="text-sm text-muted-foreground">
                Tweets with cards get significantly more clicks and retweets
              </p>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <Video className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">Multiple Types</h4>
              <p className="text-sm text-muted-foreground">
                Summary, large image, video player, and app cards
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            Summary Card
          </CardTitle>
          <CardDescription>
            Basic card with square thumbnail image (1:1 ratio)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={summaryCardExample}
            title="Twitter Summary Card"
            colorTheme="cyan"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Large Image Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            Summary Large Image Card
          </CardTitle>
          <CardDescription>
            Featured card with large banner image (2:1 ratio) - most popular type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={largeImageCardExample}
            title="Twitter Large Image Card"
            colorTheme="cyan"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Card Types Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Twitter Card Types</CardTitle>
          <CardDescription>
            Choose the right card type for your content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🔲</span>
                Summary Card
              </h4>
              <code className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block my-2">
                content="summary"
              </code>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Image:</strong> 1:1 ratio (144×144px min, 4096×4096px max)
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best for:</strong> General content, profile pages, homepages
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🖼️</span>
                Summary Large Image
              </h4>
              <code className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block my-2">
                content="summary_large_image"
              </code>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Image:</strong> 2:1 ratio (300×157px min, 4096×4096px max)
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best for:</strong> Blog posts, articles, visual content. ⭐ Most popular!
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                App Card
              </h4>
              <code className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block my-2">
                content="app"
              </code>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Special:</strong> Requires Twitter approval
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best for:</strong> Mobile apps with direct download buttons
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">▶️</span>
                Player Card
              </h4>
              <code className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block my-2">
                content="player"
              </code>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Special:</strong> Requires Twitter approval
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best for:</strong> Video/audio with in-tweet playback
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            Complete Twitter Cards Template
          </CardTitle>
          <CardDescription>
            Production-ready template with all tags and Open Graph fallbacks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={completeTwitterExample}
            title="Complete Twitter Cards Implementation"
            colorTheme="cyan"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Twitter vs Open Graph */}
      <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <Info className="h-4 w-4 text-cyan-600" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100">Twitter vs Open Graph Tags</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200">
          <p className="mb-2">
            <strong>Good news:</strong> Twitter automatically falls back to Open Graph tags when Twitter-specific tags are missing!
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><code>twitter:title</code> → Falls back to <code>og:title</code> → Falls back to <code>&lt;title&gt;</code></li>
            <li><code>twitter:description</code> → Falls back to <code>og:description</code></li>
            <li><code>twitter:image</code> → Falls back to <code>og:image</code></li>
          </ul>
          <p className="mt-2">
            <strong>Best practice:</strong> Use both OG and Twitter tags for maximum control, or just OG tags for simplicity.
          </p>
        </AlertDescription>
      </Alert>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Twitter Cards Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use summary_large_image</strong> - Most engaging card type for content</li>
            <li><strong>Optimize images</strong> - 1200×600px for large image, under 5MB</li>
            <li><strong>Include @handles</strong> - Use twitter:site and twitter:creator</li>
            <li><strong>Add alt text</strong> - Improves accessibility with twitter:image:alt</li>
            <li><strong>Keep titles short</strong> - Max 70 characters for best display</li>
            <li><strong>Write engaging descriptions</strong> - Max 200 characters</li>
            <li><strong>Use absolute URLs</strong> - Include full https:// for images</li>
            <li><strong>Test before posting</strong> - Use Twitter Card Validator</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Your Twitter Cards</CardTitle>
          <CardDescription>
            Validate your implementation before going live
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 Twitter Card Validator</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Official Twitter tool to preview and validate your cards
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://cards-dev.twitter.com/validator
              </code>
            </div>
            
            <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">First-Time Setup</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                The first time you add Twitter Cards to your domain, use the Card Validator to request approval.
                Twitter will crawl your site and enable cards within a few minutes.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Twitter Card Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Wrong image size</strong> - Use 2:1 for large image, 1:1 for summary</li>
            <li><strong>Relative image URLs</strong> - Must use absolute https:// URLs</li>
            <li><strong>Missing card type</strong> - Always specify twitter:card</li>
            <li><strong>Image too large</strong> - Keep under 5MB for fast loading</li>
            <li><strong>Not testing</strong> - Always validate with Card Validator first</li>
            <li><strong>Forgetting @handles</strong> - Add twitter:site for brand attribution</li>
            <li><strong>Long titles/descriptions</strong> - Get truncated on mobile</li>
            <li><strong>Not clearing cache</strong> - Use validator to refresh after changes</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Platform Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Twitter Cards work on Twitter/X desktop, mobile apps, and embedded tweets. They're also supported by 
          some other platforms like Discord and Slack that display Twitter content.
        </AlertDescription>
      </Alert>
    </div>
  );
}
