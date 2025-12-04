'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { MapPin } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlAddressElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const example = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Address Element</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .footer { max-width: 600px; margin: 0 auto; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); border-top: 4px solid #06b6d4; }
    @media (prefers-color-scheme: dark) { .footer { background: #1e293b; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); border-top-color: #22d3ee; } }
    .footer h3 { color: #06b6d4; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .footer h3 { color: #22d3ee; } }
    address { font-style: normal; color: #1e293b; line-height: 1.8; }
    @media (prefers-color-scheme: dark) { address { color: #f1f5f9; } }
    address a { color: #06b6d4; text-decoration: none; font-weight: 500; }
    @media (prefers-color-scheme: dark) { address a { color: #22d3ee; } }
    address a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <footer class="footer">
    <h3>Contact Information</h3>
    <address>
      <strong>Tech Learning Academy</strong><br/>
      123 Developer Street<br/>
      San Francisco, CA 94105<br/>
      <br/>
      <strong>Email:</strong> <a href="mailto:info@techacademy.com">info@techacademy.com</a><br/>
      <strong>Phone:</strong> <a href="tel:+14155551234">+1 (415) 555-1234</a>
    </address>
  </footer>
</body>
</html>`,
  css: ``,
  js: ``
};

const example2 = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Article Address</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .article { max-width: 600px; margin: 0 auto; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
    @media (prefers-color-scheme: dark) { .article { background: #1e293b; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); } }
    .article h2 { color: #3b82f6; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .article h2 { color: #60a5fa; } }
    .article p { color: #1e293b; line-height: 1.6; }
    @media (prefers-color-scheme: dark) { .article p { color: #f1f5f9; } }
    .author-info { background: #eff6ff; padding: 1rem; border-radius: 8px; border-left: 3px solid #3b82f6; margin-top: 1rem; }
    @media (prefers-color-scheme: dark) { .author-info { background: #0f172a; border-left-color: #60a5fa; } }
    .author-info h4 { color: #3b82f6; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .author-info h4 { color: #60a5fa; } }
    address { font-style: normal; color: #1e293b; font-size: 0.9rem; }
    @media (prefers-color-scheme: dark) { address { color: #f1f5f9; } }
    address a { color: #06b6d4; text-decoration: none; }
    @media (prefers-color-scheme: dark) { address a { color: #22d3ee; } }
  </style>
</head>
<body>
  <article class="article">
    <h2>Understanding Semantic HTML</h2>
    <p>Semantic HTML elements provide meaning to the web content beyond just presentation. They help browsers, search engines, and assistive technologies understand the structure and purpose of your content.</p>
    
    <div class="author-info">
      <h4>About the Author</h4>
      <address>
        Written by John Developer<br/>
        <a href="mailto:john@example.com">john@example.com</a><br/>
        Austin, Texas
      </address>
    </div>
  </article>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlAddressElement({ onOpenWebPlayground }: HtmlAddressElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={MapPin}
        category="HTML · Semantic Structure"
        title="&lt;address&gt; Element"
        description="Contact information for the nearest article or body element"
        colorTheme="cyan"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-600 dark:text-cyan-400">Page Footer Contact</CardTitle>
          <CardDescription>Organization contact information</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="&lt;address&gt; in Footer"
            description="Contact details for the entire page"
            html={example.html}
            css={example.css}
            js={example.js}
            colorTheme="cyan"
            previewHeight="380px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-600 dark:text-cyan-400">Article Author Info</CardTitle>
          <CardDescription>Author contact within an article</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="&lt;address&gt; with Article"
            description="Author information for specific content"
            html={example2.html}
            css={example2.css}
            js={example2.js}
            colorTheme="cyan"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

