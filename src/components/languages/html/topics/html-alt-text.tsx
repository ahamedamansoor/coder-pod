'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Image as ImageIcon, FileImage, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAltTextProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAltText({ onOpenWebPlayground }: HtmlAltTextProps) {
  
  const altTextExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alt Text Best Practices</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%); }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #06b6d4; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #22d3ee; }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    .example-card {
      padding: 25px;
      border-radius: 12px;
      border: 3px solid;
    }
    
    .bad { background: #fef2f2; border-color: #ef4444; }
    .good { background: #f0fdf4; border-color: #10b981; }
    :root.dark .bad { background: #7f1d1d; border-color: #f87171; }
    :root.dark .good { background: #064e3b; border-color: #34d399; }
    
    .example-card h3 {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .bad h3 { color: #991b1b; }
    .good h3 { color: #065f46; }
    :root.dark .bad h3 { color: #fca5a5; }
    :root.dark .good h3 { color: #6ee7b7; }
    
    .image-container {
      background: white;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      margin: 15px 0;
    }
    :root.dark .image-container { background: #334155; }
    
    .placeholder-img {
      width: 100%;
      height: 150px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 3rem;
      margin-bottom: 10px;
    }
    
    .code-display {
      background: #1f2937;
      color: #22d3ee;
      padding: 12px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 0.8rem;
      overflow-x: auto;
      margin: 10px 0;
    }
    :root.dark .code-display { background: #0f172a; color: #67e8f9; }
    
    .explanation {
      color: #6b7280;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-top: 10px;
    }
    :root.dark .explanation { color: #94a3b8; }
    
    .category-section {
      margin: 40px 0;
      padding: 30px;
      background: #f0f9ff;
      border-radius: 12px;
      border-left: 4px solid #06b6d4;
    }
    :root.dark .category-section { background: #0c4a6e; }
    
    .category-section h2 {
      color: #0369a1;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    :root.dark .category-section h2 { color: #7dd3fc; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖼️ Alt Text Best Practices</h1>
    
    <!-- Informative Images -->
    <div class="category-section">
      <h2>1. Informative Images</h2>
      <p style="color: #6b7280; margin-bottom: 20px;">
        Images that convey important information need descriptive alt text.
      </p>
      
      <div class="comparison">
        <div class="example-card bad">
          <h3>❌ Bad Alt Text</h3>
          <div class="image-container">
            <div class="placeholder-img">📊</div>
            <img src="chart.png" alt="image" style="display: none;">
          </div>
          <div class="code-display">
&lt;img src="chart.png" alt="image"&gt;
          </div>
          <p class="explanation">
            "image" tells screen reader users nothing useful. What does the chart show?
          </p>
        </div>
        
        <div class="example-card good">
          <h3>✅ Good Alt Text</h3>
          <div class="image-container">
            <div class="placeholder-img">📊</div>
            <img src="chart.png" alt="Bar chart showing 50% increase in sales from 2023 to 2024" style="display: none;">
          </div>
          <div class="code-display">
&lt;img src="chart.png" 
  alt="Bar chart showing 50% increase 
  in sales from 2023 to 2024"&gt;
          </div>
          <p class="explanation">
            Describes what the chart conveys. Screen reader users get the same information as sighted users.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Decorative Images -->
    <div class="category-section">
      <h2>2. Decorative Images</h2>
      <p style="color: #6b7280; margin-bottom: 20px;">
        Images that don't add information should have empty alt attributes.
      </p>
      
      <div class="comparison">
        <div class="example-card bad">
          <h3>❌ Bad</h3>
          <div class="image-container">
            <div class="placeholder-img">⭐</div>
            <h4 style="margin-top: 10px;">Premium Features</h4>
          </div>
          <div class="code-display">
&lt;img src="star.png" alt="star icon"&gt;
&lt;h2&gt;Premium Features&lt;/h2&gt;
          </div>
          <p class="explanation">
            Screen readers announce "star icon" and "Premium Features" - redundant!
          </p>
        </div>
        
        <div class="example-card good">
          <h3>✅ Good</h3>
          <div class="image-container">
            <div class="placeholder-img">⭐</div>
            <h4 style="margin-top: 10px;">Premium Features</h4>
          </div>
          <div class="code-display">
&lt;img src="star.png" alt=""&gt;
&lt;h2&gt;Premium Features&lt;/h2&gt;
          </div>
          <p class="explanation">
            Empty alt="" tells screen readers to skip the image. Clean and concise!
          </p>
        </div>
      </div>
    </div>
    
    <!-- Functional Images -->
    <div class="category-section">
      <h2>3. Functional Images (Buttons/Links)</h2>
      <p style="color: #6b7280; margin-bottom: 20px;">
        Images that are clickable should describe the action, not the image.
      </p>
      
      <div class="comparison">
        <div class="example-card bad">
          <h3>❌ Bad</h3>
          <div class="image-container">
            <a href="#" style="display: inline-block;">
              <div class="placeholder-img" style="width: 60px; height: 60px; font-size: 2rem;">🔍</div>
            </a>
          </div>
          <div class="code-display">
&lt;a href="/search"&gt;
  &lt;img src="icon.png" alt="magnifying glass"&gt;
&lt;/a&gt;
          </div>
          <p class="explanation">
            "Magnifying glass" describes the image, not what it does. Confusing!
          </p>
        </div>
        
        <div class="example-card good">
          <h3>✅ Good</h3>
          <div class="image-container">
            <a href="#" style="display: inline-block;">
              <div class="placeholder-img" style="width: 60px; height: 60px; font-size: 2rem;">🔍</div>
            </a>
          </div>
          <div class="code-display">
&lt;a href="/search"&gt;
  &lt;img src="icon.png" alt="Search"&gt;
&lt;/a&gt;
          </div>
          <p class="explanation">
            Describes the action. Screen reader announces "Search, link" - perfect!
          </p>
        </div>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin-top: 40px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #78350f; margin-bottom: 15px;">⚡ Quick Alt Text Rules</h3>
      <ul style="list-style: none; line-height: 2; color: #92400e;">
        <li>✓ Describe the content/function, not the image</li>
        <li>✓ Keep it concise (150 characters or less)</li>
        <li>✓ Don't start with "Image of" or "Picture of"</li>
        <li>✓ Use alt="" for decorative images</li>
        <li>✓ Never leave alt attribute empty (no alt="")</li>
        <li>✓ For complex images, provide long description nearby</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={ImageIcon}
        category="HTML · Accessibility"
        title="What is Alt Text?"
        description="Learn how to write effective alternative text for images"
        colorTheme="blue"
      />

      {/* Alt Text Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileImage className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Alt Text Best Practices
          </CardTitle>
          <CardDescription>
            Examples of good and bad alt text for different image types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={altTextExample}
            title="Alt Text Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Image Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Four Types of Images</CardTitle>
          <CardDescription>
            How to handle alt text for different purposes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">📊 Informative Images</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Convey important content or information
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;img src="chart.png" alt="Sales increased 50% from Q1 to Q2"&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🎨 Decorative Images</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Purely visual, don't add information (borders, spacers, design elements)
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;img src="decoration.png" alt=""&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🔘 Functional Images</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Clickable (buttons, links) - describe the action, not the image
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;a href="/cart"&gt;&lt;img src="cart.png" alt="View shopping cart"&gt;&lt;/a&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">📝 Complex Images</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Detailed (infographics, diagrams) - use short alt + long description
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;img src="diagram.png" alt="Website architecture" aria-describedby="desc"&gt;
                &lt;p id="desc"&gt;Detailed description...&lt;/p&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Writing Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Writing Great Alt Text</CardTitle>
          <CardDescription>
            Guidelines for creating effective descriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold mb-3 text-green-900 dark:text-green-100">✅ DO</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Be specific and concise</li>
                <li>• Describe the content/function</li>
                <li>• Keep under 150 characters</li>
                <li>• Use empty alt="" for decorative</li>
                <li>• Include text in images</li>
                <li>• Consider context</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-3 text-red-900 dark:text-red-100">❌ DON'T</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Start with "Image of..."</li>
                <li>• Be vague ("picture", "graphic")</li>
                <li>• Omit alt attribute entirely</li>
                <li>• Use filename as alt text</li>
                <li>• Make it too long (&gt;150 chars)</li>
                <li>• Include redundant info</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Alt Text Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Be concise</strong> - Aim for under 150 characters (screen readers may cut off)</li>
            <li><strong>Describe content, not appearance</strong> - "Dog running" not "Photo of dog"</li>
            <li><strong>Include text in images</strong> - If image contains text, include it in alt</li>
            <li><strong>Context matters</strong> - Same image may need different alt text in different contexts</li>
            <li><strong>Empty for decorative</strong> - Use alt="" not missing alt</li>
            <li><strong>Describe function for links</strong> - "Search" not "magnifying glass icon"</li>
            <li><strong>Don't repeat nearby text</strong> - If caption says it, alt text can be shorter</li>
            <li><strong>Test with screen reader</strong> - Hear how it sounds</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Alt Text Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Missing alt entirely</strong> - &lt;img src="photo.jpg"&gt; with no alt</li>
            <li><strong>Using filename</strong> - alt="IMG_1234.jpg"</li>
            <li><strong>"Image of" prefix</strong> - Screen readers already say "image"</li>
            <li><strong>Too verbose</strong> - Paragraphs of text in alt attribute</li>
            <li><strong>Generic text</strong> - alt="image", alt="photo", alt="picture"</li>
            <li><strong>Wrong type</strong> - Describing decorative images or not describing informative ones</li>
            <li><strong>Repeating caption</strong> - Alt text identical to visible caption</li>
            <li><strong>Not updating</strong> - Alt text doesn't match updated image</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Complex Images */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Handling Complex Images</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <p className="mb-2">
            For complex images like infographics, charts, or diagrams:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Use short alt text as summary</li>
            <li>Provide detailed description in text below or via aria-describedby</li>
            <li>Consider providing data table equivalent for charts</li>
            <li>Use longdesc attribute (deprecated but still supported)</li>
            <li>Link to separate page with full description if needed</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
