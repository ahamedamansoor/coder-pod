# 🌐 HTML Component Structure Guidelines

## 📋 **Purpose**
This document defines the standard structure, patterns, and best practices for creating HTML topic components in the CoderPod platform. Follow these guidelines to ensure consistency, maintainability, and an excellent learning experience for beginners.

---

## 🏗️ **Component File Structure**

### **File Location & Naming**
```
/src/components/languages/html/topics/html-[topic-name].tsx
```

**Examples:**
- `html-aria-properties.tsx`
- `html-semantic-elements.tsx`
- `html-forms.tsx`
- `html-accessibility-basics.tsx`

---

## 📦 **Component Template**

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Icon1, Icon2, CheckCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlTopicNameProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlTopicName({ onOpenWebPlayground }: HtmlTopicNameProps) {
  
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Title</title>
  <style>
    /* Full CSS with dark mode support */
  </style>
</head>
<body>
  <!-- HTML content -->
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Icon1}
        category="HTML · Category"
        title="Topic Title"
        description="Clear description of the topic"
        colorTheme="orange"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            What is [Topic]?
          </CardTitle>
          <CardDescription>
            Brief explanation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Beginner-friendly explanation with <strong className="text-foreground">key concepts</strong>.
          </p>
        </CardContent>
      </Card>

      {/* CONCEPT SECTIONS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Icon2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            1. First Concept
          </CardTitle>
          <CardDescription>
            What this section covers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Example Title"
            colorTheme="orange"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Tip 1</strong> - Practical advice</li>
            <li><strong>Tip 2</strong> - More guidance</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* BROWSER SUPPORT */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Browser compatibility information
        </AlertDescription>
      </Alert>
    </div>
  );
}
```

---

## 🎨 **HTML Example Structure**

```tsx
const example = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Title</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    /* CRITICAL: Use @media for dark mode, NOT :root.dark */
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Example Content</h1>
    <!-- Semantic, accessible HTML -->
  </div>
</body>
</html>`;
```

---

## 🎯 **Essential Guidelines**

### **1. Dark Mode Support - CRITICAL**
✅ **ALWAYS use `@media (prefers-color-scheme: dark)`**
❌ **NEVER use `:root.dark` selectors**

### **2. Color Themes**
| Category | Theme | Use Case |
|----------|-------|----------|
| **Fundamentals** | Orange | Basic HTML concepts |
| **Forms** | Blue | Form elements |
| **Semantic** | Purple | Semantic elements |
| **Accessibility** | Green | ARIA, A11y |
| **Media** | Cyan | Images, Video, Audio |
| **APIs** | Indigo | Web APIs |

### **3. Component Requirements**
- 1 PageHeader
- 1 Introduction Card
- 2-5 Interactive Examples
- 1 Best Practices Alert
- 1 Browser Support Alert (if relevant)

### **4. Interactive Examples**
- 3-5 working examples per topic
- Self-contained HTML documents
- Semantic, accessible markup
- Visual feedback and interactivity
- Beginner-friendly with comments

### **5. Beginner-Friendly**
- Simple language
- Clear explanations
- Real-world examples
- Highlight common mistakes
- Show practical use cases

---

## 📐 **Accessibility Standards**

All HTML examples must:
- Use semantic HTML elements
- Include proper ARIA attributes
- Have keyboard navigation
- Provide sufficient color contrast
- Include alt text for images
- Use proper heading hierarchy

```html
<!-- ✅ GOOD -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

<!-- ❌ BAD -->
<div class="nav">
  <div onclick="navigate()">Home</div>
</div>
```

---

## 🚀 **Integration Checklist**

- [ ] File created in `/topics/` folder
- [ ] Import added to `html-content-display.tsx`
- [ ] Slug mapping added
- [ ] TypeScript errors resolved
- [ ] Dark mode tested
- [ ] Examples work correctly
- [ ] Mobile responsive
- [ ] Accessibility verified
- [ ] Play button functional
- [ ] No console errors

---

## 💡 **Best Practices**

1. **Semantic First** - Use proper HTML5 elements
2. **Accessibility Always** - WCAG 2.1 Level AA minimum
3. **Mobile Responsive** - Test at all breakpoints
4. **Dark Mode Required** - Full support mandatory
5. **Progressive Enhancement** - Work without JS
6. **Valid HTML** - No validation errors
7. **Performance** - Optimize images and code
8. **Browser Support** - Test modern browsers

---

## 📚 **Reference Components**

Well-structured examples to follow:
- `html-aria-properties.tsx` - Multiple sections, dark mode
- `html-accessibility-basics.tsx` - Semantic examples
- `html-semantic-elements.tsx` - Complete structure
- `html-block-vs-inline.tsx` - Comparison patterns

---

**Last Updated:** December 2025
**Version:** 1.0
