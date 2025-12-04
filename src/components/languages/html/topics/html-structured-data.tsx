'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Code, Star, ShoppingCart, Calendar, CheckCircle, AlertTriangle, Info, Database } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlStructuredDataProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlStructuredData({ onOpenWebPlayground }: HtmlStructuredDataProps) {
  
  // Example 1: Article with JSON-LD
  const articleExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 JavaScript Tips | Blog</title>
  
  <!-- Structured Data: Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 JavaScript Tips Every Developer Should Know",
    "image": "https://coderpod.com/blog/js-tips.jpg",
    "author": {
      "@type": "Person",
      "name": "John Doe",
      "url": "https://coderpod.com/authors/john-doe"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CoderPod",
      "logo": {
        "@type": "ImageObject",
        "url": "https://coderpod.com/logo.png"
      }
    },
    "datePublished": "2024-01-15T08:00:00Z",
    "dateModified": "2024-01-20T14:30:00Z",
    "description": "Master JavaScript with these essential tips and tricks. Improve your code quality and efficiency."
  }
  </script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
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
      border-bottom: 2px solid #8b5cf6;
    }
    
    :root.dark .article-header {
      border-bottom-color: #a78bfa;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #8b5cf6;
      margin-bottom: 15px;
    }
    
    :root.dark h1 {
      color: #a78bfa;
    }
    
    .meta-info {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      color: #6b7280;
      font-size: 0.9rem;
      margin: 15px 0;
    }
    
    :root.dark .meta-info {
      color: #94a3b8;
    }
    
    .rich-snippet-preview {
      background: #f3f4f6;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #8b5cf6;
    }
    
    :root.dark .rich-snippet-preview {
      background: #334155;
      border-left-color: #a78bfa;
    }
    
    .snippet-title {
      color: #1e40af;
      font-size: 1.5rem;
      margin-bottom: 10px;
      text-decoration: none;
    }
    
    :root.dark .snippet-title {
      color: #60a5fa;
    }
    
    .snippet-url {
      color: #059669;
      font-size: 0.85rem;
      margin-bottom: 10px;
    }
    
    .snippet-description {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    :root.dark .snippet-description {
      color: #94a3b8;
    }
    
    .snippet-meta {
      display: flex;
      gap: 20px;
      font-size: 0.85rem;
      color: #6b7280;
    }
    
    :root.dark .snippet-meta {
      color: #64748b;
    }
    
    .info-badge {
      display: inline-block;
      background: #ddd6fe;
      color: #5b21b6;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin: 10px 5px;
    }
    
    :root.dark .info-badge {
      background: #5b21b6;
      color: #e9d5ff;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="article-header">
      <h1>📝 Article with Structured Data</h1>
      <div class="meta-info">
        <span>👤 By John Doe</span>
        <span>📅 Jan 15, 2024</span>
        <span>✏️ Updated: Jan 20, 2024</span>
      </div>
    </div>
    
    <div style="text-align: center; margin: 20px 0;">
      <span class="info-badge">✨ Rich Snippet Enabled</span>
      <span class="info-badge">🔍 SEO Enhanced</span>
    </div>
    
    <div class="rich-snippet-preview">
      <h3 style="color: #8b5cf6; margin-bottom: 15px;">Google Search Preview:</h3>
      <a href="#" class="snippet-title">10 JavaScript Tips Every Developer Should Know</a>
      <div class="snippet-url">https://coderpod.com › blog › javascript-tips</div>
      <p class="snippet-description">
        Master JavaScript with these essential tips and tricks. Improve your code quality and efficiency.
      </p>
      <div class="snippet-meta">
        <span>📅 Jan 15, 2024</span>
        <span>👤 John Doe</span>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ Structured data helps Google understand your content and display rich results!<br>
      View page source to see the JSON-LD in the &lt;head&gt; section.
    </p>
  </div>
</body>
</html>`;

  // Example 2: Product with Reviews
  const productExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Development Course | CoderPod</title>
  
  <!-- Structured Data: Product with Reviews -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Complete Web Development Course",
    "image": "https://coderpod.com/products/web-dev-course.jpg",
    "description": "Master HTML, CSS, JavaScript, React, and Node.js with our comprehensive course.",
    "brand": {
      "@type": "Brand",
      "name": "CoderPod"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://coderpod.com/courses/web-development",
      "priceCurrency": "USD",
      "price": "99.99",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "CoderPod"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  }
  </script>
  
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
      max-width: 800px;
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
    
    .product-card {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 30px;
      margin-bottom: 30px;
    }
    
    .product-image {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
    }
    
    .product-info h1 {
      font-size: 1.8rem;
      color: #f59e0b;
      margin-bottom: 15px;
    }
    
    :root.dark .product-info h1 {
      color: #fbbf24;
    }
    
    .rating {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 15px 0;
    }
    
    .stars {
      color: #f59e0b;
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
    
    .rating-text {
      color: #6b7280;
      font-size: 0.9rem;
    }
    
    :root.dark .rating-text {
      color: #94a3b8;
    }
    
    .price {
      font-size: 2rem;
      color: #059669;
      font-weight: bold;
      margin: 15px 0;
    }
    
    :root.dark .price {
      color: #34d399;
    }
    
    .availability {
      color: #059669;
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    :root.dark .availability {
      color: #34d399;
    }
    
    .description {
      color: #4b5563;
      line-height: 1.6;
      margin: 20px 0;
    }
    
    :root.dark .description {
      color: #94a3b8;
    }
    
    .rich-result-preview {
      background: #fef3c7;
      padding: 25px;
      border-radius: 12px;
      margin-top: 30px;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .rich-result-preview {
      background: #78350f;
      border-left-color: #fbbf24;
    }
    
    .rich-result-preview h3 {
      color: #d97706;
      margin-bottom: 15px;
    }
    
    :root.dark .rich-result-preview h3 {
      color: #fcd34d;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="product-card">
      <div class="product-image">
        🎓
      </div>
      <div class="product-info">
        <h1>Complete Web Development Course</h1>
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="rating-text">4.8 out of 5 (1,250 reviews)</span>
        </div>
        <div class="price">$99.99</div>
        <div class="availability">✅ In Stock</div>
        <p class="description">
          Master HTML, CSS, JavaScript, React, and Node.js with our comprehensive course.
          Perfect for beginners and intermediate developers.
        </p>
      </div>
    </div>
    
    <div class="rich-result-preview">
      <h3>🌟 Google Rich Result Preview</h3>
      <p style="color: #78350f; line-height: 1.6;">
        With product structured data, your listing appears in Google Shopping results 
        with price, ratings, and availability. This significantly increases click-through rates!
      </p>
    </div>
  </div>
</body>
</html>`;

  // Example 3: Event
  const eventExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Conference 2024 | Events</title>
  
  <!-- Structured Data: Event -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "React Conference 2024",
    "startDate": "2024-06-15T09:00:00-08:00",
    "endDate": "2024-06-17T18:00:00-08:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": [
      {
        "@type": "VirtualLocation",
        "url": "https://coderpod.com/events/react-conf-2024"
      },
      {
        "@type": "Place",
        "name": "San Francisco Convention Center",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "747 Howard Street",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94103",
          "addressCountry": "US"
        }
      }
    ],
    "image": "https://coderpod.com/events/react-conf-2024.jpg",
    "description": "Join us for the biggest React conference of the year with workshops, talks, and networking.",
    "offers": {
      "@type": "Offer",
      "url": "https://coderpod.com/events/react-conf-2024/tickets",
      "price": "299",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01T00:00:00-08:00"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "React Core Team"
    },
    "organizer": {
      "@type": "Organization",
      "name": "CoderPod",
      "url": "https://coderpod.com"
    }
  }
  </script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #164e63 0%, #155e75 100%);
    }
    
    .container {
      max-width: 800px;
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
    
    .event-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      border-radius: 12px;
      margin-bottom: 30px;
      text-align: center;
    }
    
    .event-header h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      color: white;
    }
    
    .event-date {
      font-size: 1.2rem;
      opacity: 0.95;
    }
    
    .event-details {
      display: grid;
      gap: 20px;
      margin: 30px 0;
    }
    
    .detail-card {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #06b6d4;
    }
    
    :root.dark .detail-card {
      background: #334155;
      border-left-color: #22d3ee;
    }
    
    .detail-card h3 {
      color: #06b6d4;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    :root.dark .detail-card h3 {
      color: #22d3ee;
    }
    
    .detail-card p {
      color: #4b5563;
      line-height: 1.6;
    }
    
    :root.dark .detail-card p {
      color: #94a3b8;
    }
    
    .price-badge {
      display: inline-block;
      background: #dcfce7;
      color: #166534;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 20px 0;
    }
    
    :root.dark .price-badge {
      background: #166534;
      color: #bbf7d0;
    }
    
    .status-badge {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="event-header">
      <h1>⚛️ React Conference 2024</h1>
      <p class="event-date">June 15-17, 2024</p>
      <span class="status-badge">🎟️ Tickets Available</span>
    </div>
    
    <div class="event-details">
      <div class="detail-card">
        <h3>📍 Location</h3>
        <p>
          <strong>In-Person:</strong> San Francisco Convention Center<br>
          747 Howard Street, San Francisco, CA 94103
        </p>
        <p style="margin-top: 10px;">
          <strong>Virtual:</strong> Online streaming available
        </p>
      </div>
      
      <div class="detail-card">
        <h3>📅 Schedule</h3>
        <p>
          <strong>Day 1:</strong> Workshops & Tutorials<br>
          <strong>Day 2-3:</strong> Main Conference & Talks
        </p>
      </div>
      
      <div class="detail-card">
        <h3>💰 Pricing</h3>
        <div class="price-badge">$299 USD</div>
        <p>Includes access to all sessions, workshops, and networking events.</p>
      </div>
      
      <div class="detail-card">
        <h3>🎤 Featuring</h3>
        <p>React Core Team members and industry leaders from Meta, Vercel, and more.</p>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ Event structured data helps your event appear in Google Search with dates, location, and pricing!
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Database}
        category="HTML · SEO & Metadata"
        title="Structured Data"
        description="Use JSON-LD schema markup for rich search results and better SEO"
        colorTheme="purple"
      />

      {/* What is Structured Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What is Structured Data?
          </CardTitle>
          <CardDescription>
            Understanding Schema.org markup and JSON-LD for rich search results
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Structured data</strong> is code you add to your HTML that helps search engines
            understand your content better. It enables <strong>rich results</strong> in Google Search - enhanced listings with
            ratings, prices, images, and more.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Star className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Rich Snippets</h4>
              <p className="text-sm text-muted-foreground">
                Star ratings, reviews, and images displayed directly in search results
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <ShoppingCart className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Product Info</h4>
              <p className="text-sm text-muted-foreground">
                Price, availability, and reviews for e-commerce products
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Events & More</h4>
              <p className="text-sm text-muted-foreground">
                Event dates, recipes, job postings, and many other content types
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Article Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Article Structured Data
          </CardTitle>
          <CardDescription>
            JSON-LD for blog posts and articles with author and publish date
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={articleExample}
            title="Article with Structured Data"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Product Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Product Structured Data
          </CardTitle>
          <CardDescription>
            E-commerce products with price, ratings, and availability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={productExample}
            title="Product with Reviews"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Event Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Event Structured Data
          </CardTitle>
          <CardDescription>
            Events with dates, location, and ticketing information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={eventExample}
            title="Event with Virtual and Physical Location"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common Schema Types */}
      <Card>
        <CardHeader>
          <CardTitle>Common Schema.org Types</CardTitle>
          <CardDescription>
            Popular structured data types for different content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📝 Article</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Blog posts, news articles, and editorial content
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Article"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🛒 Product</h4>
              <p className="text-sm text-muted-foreground mb-2">
                E-commerce products with price and reviews
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Product"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🎫 Event</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Concerts, conferences, webinars, and meetups
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Event"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🍳 Recipe</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Cooking recipes with ingredients and instructions
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Recipe"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">💼 JobPosting</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Job listings with salary and requirements
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "JobPosting"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🏢 Organization</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Company or organization information
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Organization"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">👤 Person</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Author profiles and personal information
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Person"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🎓 Course</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Educational courses and training programs
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                "@type": "Course"
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Structured Data Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use JSON-LD format</strong> - Recommended by Google, easier to maintain</li>
            <li><strong>Place in &lt;head&gt;</strong> - Put JSON-LD scripts in document head</li>
            <li><strong>Match visible content</strong> - Structured data must reflect actual page content</li>
            <li><strong>Include required properties</strong> - Each type has mandatory fields</li>
            <li><strong>Use specific types</strong> - Choose most specific schema type available</li>
            <li><strong>Test with tools</strong> - Use Google Rich Results Test before publishing</li>
            <li><strong>Keep updated</strong> - Update structured data when content changes</li>
            <li><strong>Don't spam</strong> - Only add markup for content actually on the page</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Your Structured Data</CardTitle>
          <CardDescription>
            Validate your schema markup before going live
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 Rich Results Test</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Google's official tool to test and preview rich results
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://search.google.com/test/rich-results
              </code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✅ Schema Markup Validator</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Schema.org's official validation tool
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://validator.schema.org/
              </code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">📊 Search Console</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Monitor rich result performance and errors
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://search.google.com/search-console
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Structured Data Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Mismatched content</strong> - Structured data doesn't match visible page content</li>
            <li><strong>Missing required fields</strong> - Each schema type has mandatory properties</li>
            <li><strong>Wrong date format</strong> - Use ISO 8601 format (YYYY-MM-DDTHH:MM:SS)</li>
            <li><strong>Invalid URLs</strong> - Use absolute URLs with https://</li>
            <li><strong>Duplicate markup</strong> - Don't add same structured data multiple times</li>
            <li><strong>Hidden content</strong> - Don't markup content that's not visible to users</li>
            <li><strong>Not testing</strong> - Always validate before publishing</li>
            <li><strong>Outdated markup</strong> - Keep structured data current with content updates</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Search Engine Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Structured data is supported by all major search engines: Google, Bing, Yahoo, Yandex, and DuckDuckGo.
          JSON-LD is the recommended format by Google and is the easiest to implement and maintain.
        </AlertDescription>
      </Alert>
    </div>
  );
}
