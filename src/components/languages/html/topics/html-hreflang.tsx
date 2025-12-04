'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Globe, Languages, MapPin, CheckCircle, AlertTriangle, Info, Navigation } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlHreflangProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlHreflang({ onOpenWebPlayground }: HtmlHreflangProps) {
  
  // Example 1: Multi-Language Site
  const multiLanguageExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CoderPod - Learn Web Development</title>
  
  <!-- Hreflang for Multiple Languages -->
  <link rel="alternate" hreflang="en" href="https://coderpod.com/">
  <link rel="alternate" hreflang="es" href="https://coderpod.com/es/">
  <link rel="alternate" hreflang="fr" href="https://coderpod.com/fr/">
  <link rel="alternate" hreflang="de" href="https://coderpod.com/de/">
  <link rel="alternate" hreflang="x-default" href="https://coderpod.com/">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
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
      color: #6366f1;
      margin-bottom: 20px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    .language-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 30px 0;
    }
    
    .lang-card {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      border: 2px solid transparent;
      transition: all 0.3s;
    }
    
    :root.dark .lang-card {
      background: #334155;
    }
    
    .lang-card:hover {
      border-color: #6366f1;
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(99, 102, 241, 0.2);
    }
    
    .lang-card.active {
      border-color: #6366f1;
      background: #eef2ff;
    }
    
    :root.dark .lang-card.active {
      background: #4c1d95;
      border-color: #818cf8;
    }
    
    .flag {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    
    .lang-name {
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 5px;
    }
    
    :root.dark .lang-name {
      color: #f1f5f9;
    }
    
    .lang-code {
      font-size: 0.85rem;
      color: #6366f1;
      font-family: monospace;
    }
    
    :root.dark .lang-code {
      color: #a5b4fc;
    }
    
    .info-banner {
      background: #ede9fe;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #6366f1;
    }
    
    :root.dark .info-banner {
      background: #4c1d95;
      border-left-color: #818cf8;
    }
    
    .info-banner h3 {
      color: #4f46e5;
      margin-bottom: 15px;
    }
    
    :root.dark .info-banner h3 {
      color: #c7d2fe;
    }
    
    .info-banner p {
      color: #4c1d95;
      line-height: 1.6;
    }
    
    :root.dark .info-banner p {
      color: #e0e7ff;
    }
    
    .tag-display {
      background: #1f2937;
      color: #818cf8;
      padding: 20px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      margin: 20px 0;
      overflow-x: auto;
      line-height: 1.8;
    }
    
    :root.dark .tag-display {
      background: #0f172a;
      color: #a5b4fc;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌍 Multi-Language Website</h1>
    
    <div class="info-banner">
      <h3>💡 What is Hreflang?</h3>
      <p>
        Hreflang tags tell search engines which language version to show users based on their
        location and language preferences. This ensures French users see the French version,
        Spanish users see the Spanish version, etc.
      </p>
    </div>
    
    <h2 style="color: #6366f1; margin: 30px 0 15px; font-size: 1.5rem;">
      Available Languages:
    </h2>
    
    <div class="language-grid">
      <div class="lang-card active">
        <div class="flag">🇬🇧</div>
        <div class="lang-name">English</div>
        <div class="lang-code">hreflang="en"</div>
      </div>
      
      <div class="lang-card">
        <div class="flag">🇪🇸</div>
        <div class="lang-name">Español</div>
        <div class="lang-code">hreflang="es"</div>
      </div>
      
      <div class="lang-card">
        <div class="flag">🇫🇷</div>
        <div class="lang-name">Français</div>
        <div class="lang-code">hreflang="fr"</div>
      </div>
      
      <div class="lang-card">
        <div class="flag">🇩🇪</div>
        <div class="lang-name">Deutsch</div>
        <div class="lang-code">hreflang="de"</div>
      </div>
    </div>
    
    <h3 style="color: #6366f1; margin: 30px 0 15px;">Hreflang Tags:</h3>
    <div class="tag-display">
&lt;link rel="alternate" hreflang="en" href="https://coderpod.com/"&gt;
&lt;link rel="alternate" hreflang="es" href="https://coderpod.com/es/"&gt;
&lt;link rel="alternate" hreflang="fr" href="https://coderpod.com/fr/"&gt;
&lt;link rel="alternate" hreflang="de" href="https://coderpod.com/de/"&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://coderpod.com/"&gt;
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ x-default is the fallback for users whose language isn't specified<br>
      View source to see all hreflang tags in the &lt;head&gt;!
    </p>
  </div>
</body>
</html>`;

  // Example 2: Regional Targeting
  const regionalExample = `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CoderPod - US Store</title>
  
  <!-- Hreflang for Regional Targeting -->
  <link rel="alternate" hreflang="en-US" href="https://coderpod.com/us/">
  <link rel="alternate" hreflang="en-GB" href="https://coderpod.com/uk/">
  <link rel="alternate" hreflang="en-CA" href="https://coderpod.com/ca/">
  <link rel="alternate" hreflang="en-AU" href="https://coderpod.com/au/">
  <link rel="alternate" hreflang="en" href="https://coderpod.com/">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
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
      color: #0ea5e9;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #38bdf8;
    }
    
    .region-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .region-card {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      border: 3px solid transparent;
      transition: all 0.3s;
    }
    
    :root.dark .region-card {
      background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
    }
    
    .region-card:hover {
      border-color: #0ea5e9;
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
    }
    
    .region-card.active {
      border-color: #0ea5e9;
      background: linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%);
    }
    
    :root.dark .region-card.active {
      background: linear-gradient(135deg, #075985 0%, #0369a1 100%);
    }
    
    .flag {
      font-size: 4rem;
      margin-bottom: 15px;
    }
    
    .region-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: #0369a1;
      margin-bottom: 8px;
    }
    
    :root.dark .region-name {
      color: #7dd3fc;
    }
    
    .region-code {
      font-size: 0.9rem;
      color: #0ea5e9;
      font-family: monospace;
      margin-bottom: 10px;
    }
    
    :root.dark .region-code {
      color: #bae6fd;
    }
    
    .region-details {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 10px;
    }
    
    :root.dark .region-details {
      color: #94a3b8;
    }
    
    .format-box {
      background: #fef3c7;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .format-box {
      background: #78350f;
      border-left-color: #fbbf24;
    }
    
    .format-box h3 {
      color: #d97706;
      margin-bottom: 15px;
      font-size: 1.2rem;
    }
    
    :root.dark .format-box h3 {
      color: #fcd34d;
    }
    
    .format-example {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      font-family: monospace;
      font-size: 0.9rem;
    }
    
    :root.dark .format-example {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    .format-label {
      color: #78350f;
      font-size: 0.85rem;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    :root.dark .format-label {
      color: #fef3c7;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🗺️ Regional Targeting (Same Language)</h1>
    
    <p style="text-align: center; color: #6b7280; font-size: 1.1rem; margin-bottom: 30px;">
      Target different English-speaking regions with region-specific content
    </p>
    
    <div class="region-grid">
      <div class="region-card active">
        <div class="flag">🇺🇸</div>
        <div class="region-name">United States</div>
        <div class="region-code">hreflang="en-US"</div>
        <div class="region-details">
          $ USD • Shipping: 2-5 days<br>
          coderpod.com/us/
        </div>
      </div>
      
      <div class="region-card">
        <div class="flag">🇬🇧</div>
        <div class="region-name">United Kingdom</div>
        <div class="region-code">hreflang="en-GB"</div>
        <div class="region-details">
          £ GBP • Shipping: 3-7 days<br>
          coderpod.com/uk/
        </div>
      </div>
      
      <div class="region-card">
        <div class="flag">🇨🇦</div>
        <div class="region-name">Canada</div>
        <div class="region-code">hreflang="en-CA"</div>
        <div class="region-details">
          $ CAD • Shipping: 2-6 days<br>
          coderpod.com/ca/
        </div>
      </div>
      
      <div class="region-card">
        <div class="flag">🇦🇺</div>
        <div class="region-name">Australia</div>
        <div class="region-code">hreflang="en-AU"</div>
        <div class="region-details">
          $ AUD • Shipping: 5-10 days<br>
          coderpod.com/au/
        </div>
      </div>
    </div>
    
    <div class="format-box">
      <h3>📋 Hreflang Format Guide</h3>
      
      <div class="format-example">
        <div class="format-label">Language Only:</div>
        <code>hreflang="en"</code> → Any English speaker
      </div>
      
      <div class="format-example">
        <div class="format-label">Language + Region:</div>
        <code>hreflang="en-US"</code> → English speakers in United States
      </div>
      
      <div class="format-example">
        <div class="format-label">Fallback (Always include):</div>
        <code>hreflang="x-default"</code> → Default for unmatched users
      </div>
      
      <p style="color: #78350f; margin-top: 15px; line-height: 1.6;">
        <strong>Format:</strong> language-REGION (ISO 639-1 + ISO 3166-1 Alpha 2)<br>
        <strong>Examples:</strong> en-US, es-MX, fr-CA, de-CH, pt-BR
      </p>
    </div>
  </div>
</body>
</html>`;

  // Example 3: Complete Implementation
  const completeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hreflang Best Practices | Guide</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #5b21b6 0%, #6d28d9 100%);
    }
    
    .container {
      max-width: 1100px;
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
      color: #8b5cf6;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #a78bfa;
    }
    
    .rules-grid {
      display: grid;
      gap: 20px;
      margin: 30px 0;
    }
    
    .rule-card {
      background: #faf5ff;
      padding: 25px;
      border-radius: 12px;
      border-left: 5px solid #8b5cf6;
    }
    
    :root.dark .rule-card {
      background: #4c1d95;
      border-left-color: #a78bfa;
    }
    
    .rule-card h3 {
      color: #7c3aed;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    :root.dark .rule-card h3 {
      color: #c4b5fd;
    }
    
    .rule-card p {
      color: #6d28d9;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    :root.dark .rule-card p {
      color: #ddd6fe;
    }
    
    .code-example {
      background: #1f2937;
      color: #a78bfa;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      line-height: 1.6;
    }
    
    :root.dark .code-example {
      background: #0f172a;
      color: #c4b5fd;
    }
    
    .do-dont-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 30px 0;
    }
    
    .do-card {
      background: #f0fdf4;
      padding: 20px;
      border-radius: 12px;
      border-left: 5px solid #10b981;
    }
    
    :root.dark .do-card {
      background: #064e3b;
      border-left-color: #34d399;
    }
    
    .do-card h4 {
      color: #059669;
      margin-bottom: 10px;
    }
    
    :root.dark .do-card h4 {
      color: #6ee7b7;
    }
    
    .dont-card {
      background: #fef2f2;
      padding: 20px;
      border-radius: 12px;
      border-left: 5px solid #ef4444;
    }
    
    :root.dark .dont-card {
      background: #7f1d1d;
      border-left-color: #f87171;
    }
    
    .dont-card h4 {
      color: #dc2626;
      margin-bottom: 10px;
    }
    
    :root.dark .dont-card h4 {
      color: #fca5a5;
    }
    
    .do-card code,
    .dont-card code {
      display: block;
      background: rgba(0,0,0,0.1);
      padding: 10px;
      border-radius: 6px;
      font-size: 0.85rem;
      margin-top: 10px;
    }
    
    :root.dark .do-card code {
      background: rgba(255,255,255,0.1);
    }
    
    :root.dark .dont-card code {
      background: rgba(255,255,255,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Hreflang Best Practices</h1>
    
    <div class="rules-grid">
      <div class="rule-card">
        <h3>
          <span style="font-size: 1.5rem;">1️⃣</span>
          Bidirectional Links
        </h3>
        <p>
          Each language version must link to ALL other versions, including itself.
          If page A links to page B, then page B must link back to page A.
        </p>
        <div class="code-example">
&lt;!-- On English page --&gt;
&lt;link rel="alternate" hreflang="en" href="https://example.com/"&gt;
&lt;link rel="alternate" hreflang="es" href="https://example.com/es/"&gt;

&lt;!-- On Spanish page --&gt;
&lt;link rel="alternate" hreflang="es" href="https://example.com/es/"&gt;
&lt;link rel="alternate" hreflang="en" href="https://example.com/"&gt;
        </div>
      </div>
      
      <div class="rule-card">
        <h3>
          <span style="font-size: 1.5rem;">2️⃣</span>
          Self-Referencing Required
        </h3>
        <p>
          Each page must include a hreflang tag pointing to itself.
        </p>
        <div class="code-example">
&lt;!-- On English page, must include self-reference --&gt;
&lt;link rel="alternate" hreflang="en" href="https://example.com/"&gt;
        </div>
      </div>
      
      <div class="rule-card">
        <h3>
          <span style="font-size: 1.5rem;">3️⃣</span>
          Always Include x-default
        </h3>
        <p>
          Add an x-default version for users whose language/region doesn't match any specified version.
        </p>
        <div class="code-example">
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/"&gt;
        </div>
      </div>
      
      <div class="rule-card">
        <h3>
          <span style="font-size: 1.5rem;">4️⃣</span>
          Use Absolute URLs
        </h3>
        <p>
          Always use full URLs with protocol and domain. Relative URLs won't work.
        </p>
        <div class="code-example">
&lt;!-- Good --&gt;
&lt;link rel="alternate" hreflang="es" href="https://example.com/es/"&gt;

&lt;!-- Bad - Don't use relative URLs --&gt;
&lt;link rel="alternate" hreflang="es" href="/es/"&gt;
        </div>
      </div>
      
      <div class="rule-card">
        <h3>
          <span style="font-size: 1.5rem;">5️⃣</span>
          Correct Language Codes
        </h3>
        <p>
          Use ISO 639-1 for language and ISO 3166-1 Alpha 2 for region codes.
        </p>
        <div class="code-example">
&lt;!-- Language only --&gt;
hreflang="en"     ✅ English (any region)
hreflang="es"     ✅ Spanish (any region)

&lt;!-- Language + Region --&gt;
hreflang="en-US"  ✅ English in United States
hreflang="en-GB"  ✅ English in United Kingdom
hreflang="es-ES"  ✅ Spanish in Spain
hreflang="es-MX"  ✅ Spanish in Mexico
        </div>
      </div>
    </div>
    
    <h2 style="color: #8b5cf6; margin: 40px 0 20px; font-size: 2rem; text-align: center;">
      ✅ Do's and ❌ Don'ts
    </h2>
    
    <div class="do-dont-grid">
      <div class="do-card">
        <h4>✅ DO</h4>
        <ul style="margin: 10px 0 10px 20px; line-height: 1.8;">
          <li>Include self-reference</li>
          <li>Link bidirectionally</li>
          <li>Use absolute URLs</li>
          <li>Add x-default</li>
          <li>Match HTML lang attribute</li>
          <li>Use canonical with hreflang</li>
        </ul>
      </div>
      
      <div class="dont-card">
        <h4>❌ DON'T</h4>
        <ul style="margin: 10px 0 10px 20px; line-height: 1.8;">
          <li>Use relative URLs</li>
          <li>Forget bidirectional links</li>
          <li>Skip self-reference</li>
          <li>Omit x-default</li>
          <li>Use wrong language codes</li>
          <li>Link to 404 pages</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Globe}
        category="HTML · SEO & Metadata"
        title="Hreflang"
        description="Target users by language and region with proper international SEO"
        colorTheme="blue"
      />

      {/* What is Hreflang */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Languages className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is Hreflang?
          </CardTitle>
          <CardDescription>
            Understanding hreflang tags for multi-language and multi-regional sites
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Hreflang</strong> tags tell search engines which language and regional versions
            of a page to show users based on their location and language preferences. This prevents duplicate content issues
            and ensures users see the right version.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Languages className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Multi-Language</h4>
              <p className="text-sm text-muted-foreground">
                Serve different language versions of the same content
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Regional Targeting</h4>
              <p className="text-sm text-muted-foreground">
                Target specific regions with localized content (pricing, shipping)
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Navigation className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">User Experience</h4>
              <p className="text-sm text-muted-foreground">
                Automatically show users content in their preferred language
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multi-Language Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Multi-Language Implementation
          </CardTitle>
          <CardDescription>
            How to implement hreflang for different language versions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={multiLanguageExample}
            title="Multi-Language Hreflang"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Regional Targeting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Regional Targeting
          </CardTitle>
          <CardDescription>
            Target different regions with the same language but localized content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={regionalExample}
            title="Regional Hreflang Targeting"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Language Codes Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Common Language Codes</CardTitle>
          <CardDescription>
            ISO 639-1 language codes and ISO 3166-1 region codes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold mb-3">Language Only:</h4>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">en</code> - English (any region)
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">es</code> - Spanish
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">fr</code> - French
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">de</code> - German
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">zh</code> - Chinese
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">ja</code> - Japanese
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold mb-3">Language + Region:</h4>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">en-US</code> - English (United States)
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">en-GB</code> - English (United Kingdom)
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">es-ES</code> - Spanish (Spain)
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">es-MX</code> - Spanish (Mexico)
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">fr-CA</code> - French (Canada)
              </div>
              <div className="p-3 bg-muted rounded text-sm">
                <code className="text-blue-600 dark:text-blue-400">pt-BR</code> - Portuguese (Brazil)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Hreflang Best Practices
          </CardTitle>
          <CardDescription>
            Complete guide to implementing hreflang correctly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={completeExample}
            title="Hreflang Best Practices Guide"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Implementation Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Three Ways to Implement Hreflang</CardTitle>
          <CardDescription>
            Choose the method that works best for your site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">1. HTML Link Tags (Recommended)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Add link tags in the &lt;head&gt; section of each page
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                &lt;link rel="alternate" hreflang="es" href="https://example.com/es/"&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">2. HTTP Headers</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Return hreflang in HTTP response headers (for PDFs, non-HTML files)
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                Link: &lt;https://example.com/es/&gt;; rel="alternate"; hreflang="es"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">3. XML Sitemap</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Add hreflang annotations in your sitemap.xml file
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mt-2">
                &lt;xhtml:link rel="alternate" hreflang="es" href="https://example.com/es/"/&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Hreflang Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Bidirectional links</strong> - Each page must link to all others, including itself</li>
            <li><strong>Self-referencing required</strong> - Include hreflang for current page</li>
            <li><strong>Always add x-default</strong> - Fallback for unmatched users</li>
            <li><strong>Use absolute URLs</strong> - Full URLs with https://</li>
            <li><strong>Correct format</strong> - language-REGION (en-US, es-MX)</li>
            <li><strong>Match HTML lang</strong> - Hreflang should match lang attribute</li>
            <li><strong>Use with canonical</strong> - Canonical + hreflang work together</li>
            <li><strong>Test thoroughly</strong> - Use Search Console International Targeting report</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Hreflang Implementation</CardTitle>
          <CardDescription>
            Tools to validate your hreflang tags
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 Google Search Console</h4>
              <p className="text-sm text-muted-foreground mb-2">
                International Targeting report shows hreflang errors
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                Settings → International Targeting
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">✅ Hreflang Tags Testing Tool</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Free online validator for hreflang implementation
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Hreflang Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Missing self-reference</strong> - Page must include hreflang to itself</li>
            <li><strong>One-way links</strong> - Must be bidirectional (A→B and B→A)</li>
            <li><strong>Relative URLs</strong> - Must use absolute URLs with domain</li>
            <li><strong>No x-default</strong> - Always include fallback version</li>
            <li><strong>Wrong language codes</strong> - Use ISO 639-1 and ISO 3166-1</li>
            <li><strong>Conflicting with canonical</strong> - Both should point to same URL</li>
            <li><strong>404 links</strong> - All hreflang URLs must be accessible</li>
            <li><strong>Inconsistent implementation</strong> - All pages must have complete set</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Search Engine Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Hreflang is fully supported by Google, Bing, and Yandex. It's been a standard for international SEO since 2011
          and is essential for any multi-language or multi-regional website.
        </AlertDescription>
      </Alert>
    </div>
  );
}
