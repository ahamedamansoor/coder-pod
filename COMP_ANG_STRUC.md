# Angular Page Structure Guide

> **Complete reference for building Angular learning pages with consistent structure, theming, and interactive playground integration.**

---

## 📋 Table of Contents
1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Common Components](#common-components)
4. [Page Layout Pattern](#page-layout-pattern)
5. [Angular Playground Integration](#angular-playground-integration)
6. [Theming & Colors](#theming--colors)
7. [Code Examples](#code-examples)
8. [Best Practices](#best-practices)

---

## Overview

Angular pages follow a structured, beginner-friendly layout with:
- Clear visual hierarchy
- Interactive playground examples
- Consistent Angular red/pink branding
- Dark mode support
- Responsive design

### Design Philosophy
- **Keep It Simple**: Explain concepts in plain language, avoid jargon
- **One Concept at a Time**: Break complex topics into digestible chunks
- **Show, Don't Tell**: Use visual diagrams and code examples
- **Learn by Doing**: Interactive examples with live preview
- **Visual Learning**: Icons, colors, diagrams, and cards for engagement
- **Consistent Structure**: Predictable layout across all pages

### Content Guidelines
1. **Beginner-Friendly Language**: Write for someone new to Angular
2. **Short Paragraphs**: 2-3 sentences max per paragraph
3. **Visual Diagrams**: Use box diagrams to explain flow and structure
4. **Small Code Snippets**: Use `CodeSnippetWithOutput` for quick examples
5. **Full Playgrounds**: Use Angular Playground for complete working apps
6. **Whitespace**: Give content room to breathe with proper spacing

---

## File Structure

```
src/components/languages/angular/
├── topics/
│   ├── angular-what-is-angular.tsx          ← Example page
│   ├── angular-components.tsx
│   ├── angular-directives.tsx
│   └── [other-topics].tsx
└── ...
```

### File Naming Convention
- **Format**: `angular-[topic-name].tsx`
- **Export**: Default export function with PascalCase name
- **Example**: `angular-what-is-angular.tsx` → `export default function AngularWhatIsAngular()`

---

## Common Components

### 1. Import Required Components

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Button } from '@/components/ui/button';
import { useAngularPlayground } from '@/components/shared/playground/angular-playground-context';
import {
  Zap,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Code,
  ArrowRight,
  // ... other icons
} from 'lucide-react';
```

### 2. Component Breakdown

| Component | Purpose | Angular Theme | When to Use |
|-----------|---------|---------------|-------------|
| `PageHeader` | Page title and description | `colorTheme="red"` | Every page (required) |
| `Card` | Content sections | Red/pink gradients | Grouping related content |
| `CodeSnippetWithOutput` | Small code examples | `colorTheme="blue"` | Quick syntax demos (< 15 lines) |
| Angular Playground | Full interactive apps | Red theme | Complete working examples |
| `Badge` | Tags and labels | Red borders/text | Highlighting features |
| `Alert` | Important notes | Lightbulb icon | Tips and warnings |
| `Button` | Actions | Red/pink gradients | CTAs and interactions |

---

## Page Layout Pattern

### Standard Structure

```tsx
export default function AngularTopic() {
  const { openPlayground } = useAngularPlayground();
  
  // Playground example data
  const exampleData = {
    title: 'Example Title',
    description: 'Brief description',
    openFile: 'src/app/app.component.ts',
    files: {
      'src/app/app.component.ts': `/* TypeScript code */`,
      'src/app/app.component.html': `<!-- HTML template -->`,
      'src/app/app.component.css': `/* CSS styles */`,
      'src/app/app.module.ts': `/* Module definition */`,
      'src/main.ts': `import 'zone.js'; /* Bootstrap */`,
      'src/index.html': `<!DOCTYPE html>...`,
      'src/styles.css': `/* Global styles */`,
      'src/polyfills.ts': `import 'zone.js';`,
      'tsconfig.json': `{ /* TypeScript config */ }`,
    },
  };
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        icon={Zap}
        category="Angular · Category"
        title="Topic Title"
        description="Brief description of the topic"
        colorTheme="red"
      />

      {/* 2. Introduction Section */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        {/* Content */}
      </Card>

      {/* 3. Interactive Playground */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border-2 border-red-200/50 dark:border-red-800/30">
        {/* Playground card */}
      </Card>

      {/* 4. Key Features */}
      <Card>
        {/* Feature cards */}
      </Card>

      {/* 5. Additional Sections */}
      {/* More cards as needed */}
    </div>
  );
}
```

### Section Spacing
- **Container**: `space-y-12` (3rem between sections)
- **Bottom padding**: `pb-16` (4rem)
- **Responsive**: Mobile-friendly grid layouts

---

## Angular Playground Integration

### 1. Prepare Example Data

**IMPORTANT**: Include ALL required Angular files for a working example.

```tsx
const counterExample = {
  title: 'My First Angular App - Counter Component',
  description: 'A simple counter demonstrating Angular basics',
  openFile: 'src/app/app.component.ts',
  files: {
    // Component files
    'src/app/app.component.ts': `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  count = 0;
  
  increment() { this.count++; }
  decrement() { this.count--; }
  reset() { this.count = 0; }
}`,

    'src/app/app.component.html': `<div class="container">
  <h1>{{ title }}</h1>
  <div class="counter">
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
  </div>
  <button (click)="reset()">Reset</button>
</div>`,

    'src/app/app.component.css': `/* Component styles */`,

    // Module file (REQUIRED!)
    'src/app/app.module.ts': `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,

    // Bootstrap file (REQUIRED!)
    'src/main.ts': `import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));`,

    // Polyfills (REQUIRED!)
    'src/polyfills.ts': `import 'zone.js';`,

    // Root HTML
    'src/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Angular App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,

    // Global styles
    'src/styles.css': `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
}`,

    // TypeScript config (REQUIRED!)
    'tsconfig.json': `{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "dom"]
  }
}`,
  },
};
```

### 2. Create Playground Card

```tsx
<Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border-2 border-red-200/50 dark:border-red-800/30">
  <CardContent className="pt-6">
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
        <Rocket className="w-6 h-6 text-white" />
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-red-600 dark:text-red-400">
          Try Your First Angular Component
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Explore this interactive counter component to see Angular in action.
        </p>
        
        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Component-Based
          </Badge>
          <Badge variant="outline" className="text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Event Handling
          </Badge>
        </div>

        {/* Launch Button */}
        <Button
          onClick={() => openPlayground(counterExample)}
          size="lg"
          className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
        >
          <Rocket className="w-5 h-5 mr-2" />
          Open Angular Playground
        </Button>
      </div>
    </div>
  </CardContent>
</Card>
```

### 3. Playground Features

When users click "Open Angular Playground", they get:

```
┌────────────────────────────────────────────────────────┐
│ [👁️ Show Live Preview] [Edit in StackBlitz]  [×]     │
├─────────┬──────────────────┬──────────────────────────┤
│ Files   │ Code Editor      │ Live Preview (Optional)  │
│ □ .ts   │ Monaco Editor    │ StackBlitz Embed        │
│ □ .html │ Syntax Highlight │ Running Angular App     │
│ □ .css  │ Read-only View   │                         │
└─────────┴──────────────────┴──────────────────────────┘
```

---

## Theming & Colors

### Angular Brand Colors

```tsx
// Gradients
from-red-50/60 to-pink-50/60           // Light background
dark:from-red-950/10 dark:to-pink-950/10  // Dark background

from-red-600 to-pink-600               // Buttons, icons
hover:from-red-700 hover:to-pink-700   // Hover state

// Borders
border-red-200/50 dark:border-red-800/30

// Text
text-red-600 dark:text-red-400         // Headings
text-red-700 dark:text-red-300         // Badges

// Badges
border-red-200 dark:border-red-800     // Border
text-red-700 dark:text-red-300         // Text
```

### Card Gradients by Section Type

| Section | Light Mode | Dark Mode |
|---------|------------|-----------|
| Introduction | `from-red-50/60 to-pink-50/60` | `from-red-950/10 to-pink-950/10` |
| Features | `from-blue-50/60 to-cyan-50/60` | `from-blue-950/10 to-cyan-950/10` |
| Architecture | `from-indigo-50/60 to-purple-50/60` | `from-indigo-950/10 to-purple-950/10` |
| Getting Started | `from-green-50/60 to-emerald-50/60` | `from-green-950/10 to-emerald-950/10` |

---

## Visual Diagrams

### Box Diagrams for Concepts

Use simple box diagrams to explain flow, structure, or relationships:

```tsx
<div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
  <div className="space-y-4">
    {/* Flow Diagram */}
    <div className="flex items-center gap-3">
      <div className="px-4 py-3 bg-blue-100 dark:bg-blue-900 rounded-lg border-2 border-blue-500 text-center">
        <p className="font-semibold text-blue-700 dark:text-blue-300">Component</p>
      </div>
      <ArrowRight className="w-6 h-6 text-gray-400" />
      <div className="px-4 py-3 bg-green-100 dark:bg-green-900 rounded-lg border-2 border-green-500 text-center">
        <p className="font-semibold text-green-700 dark:text-green-300">Template</p>
      </div>
      <ArrowRight className="w-6 h-6 text-gray-400" />
      <div className="px-4 py-3 bg-purple-100 dark:bg-purple-900 rounded-lg border-2 border-purple-500 text-center">
        <p className="font-semibold text-purple-700 dark:text-purple-300">Browser</p>
      </div>
    </div>
    
    {/* Explanation */}
    <p className="text-sm text-muted-foreground text-center">
      Data flows from component → template → browser display
    </p>
  </div>
</div>
```

**Tips for Diagrams:**
- Use color-coded boxes for different concepts
- Show direction with arrows (`ArrowRight` icon)
- Keep it simple - max 3-5 boxes per diagram
- Add brief explanation below
- Use borders to make boxes stand out

---

## Code Snippet Component

### When to Use CodeSnippetWithOutput

Use for **small, focused code examples** (< 15 lines) that demonstrate a single concept.

```tsx
<CodeSnippetWithOutput
  title="Component Example"
  description="Basic Angular component structure"
  code={`@Component({
  selector: 'app-hello',
  template: '<h1>Hello, {{name}}!</h1>'
})
export class HelloComponent {
  name = 'Angular';
}`}
  output={[
    'Output: Hello, Angular!',
    '// Component renders the greeting'
  ]}
  language="typescript"
  colorTheme="blue"
/>
```

**Benefits:**
- Shows code + expected output together
- Syntax highlighting included
- Copy button automatic
- No need for full playground setup
- Perfect for syntax demonstrations

**Use Cases:**
- TypeScript syntax examples
- Decorator usage (`@Component`, `@Input`, etc.)
- Simple function definitions
- Template syntax snippets
- Configuration examples

---

## Code Examples

### Feature Grid (2x2)

```tsx
<div className="grid md:grid-cols-2 gap-6">
  {/* Feature Card */}
  <div className="group p-6 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 transition-all hover:shadow-lg">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
        <Workflow className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-2 text-lg">Feature Title</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Feature description explaining the concept.
        </p>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-xs border">
          <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Code Example
          </div>
          <div className="text-muted-foreground">Explanation</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Alert Box

```tsx
<Alert>
  <Lightbulb className="h-4 w-4" />
  <AlertTitle>Pro Tip</AlertTitle>
  <AlertDescription>
    Important information or helpful tip for learners.
  </AlertDescription>
</Alert>
```

### Step-by-Step Guide

```tsx
<div className="space-y-4">
  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border">
    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
      1
    </div>
    <div className="flex-1">
      <h4 className="font-semibold mb-2">Step Title</h4>
      <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-sm border">
        npm install -g @angular/cli
      </div>
    </div>
  </div>
</div>
```

---

## Best Practices

### ✅ DO

1. **Keep It Simple**: Write for beginners, avoid complex terms
2. **One Concept Per Section**: Don't overwhelm with multiple ideas
3. **Use Visual Diagrams**: Show flow and structure with boxes and arrows
4. **Use CodeSnippetWithOutput**: For small syntax examples (< 15 lines)
5. **Use Angular Playground**: For complete working examples only
6. **Short Paragraphs**: Max 2-3 sentences per paragraph
7. **Use PageHeader** for every page with `colorTheme="red"`
8. **Include complete Angular files** in playground examples
9. **Add feature badges** to highlight key concepts
10. **Test in both modes**: Verify light and dark mode display
11. **Give Space**: Use proper spacing (`space-y-6` to `space-y-12`)
12. **Show Before Explaining**: Code/diagram first, then explanation

### ❌ DON'T

1. Don't use jargon or complex terms without explanation
2. Don't write long paragraphs (> 4 sentences)
3. Don't show code without visual context or diagrams
4. Don't use playground for simple syntax examples
5. Don't pack multiple concepts in one section
6. Don't forget `zone.js` import in playground examples
7. Don't skip `app.module.ts` or `tsconfig.json`
8. Don't create overly complex examples
9. Don't hardcode light-only colors
10. Don't forget accessibility (aria-labels, titles)
11. Don't use inconsistent spacing between sections
12. Don't explain before showing (show first!)

---

## Quick Checklist

When creating a new Angular page:

**Content Simplicity:**
- [ ] Write in beginner-friendly language
- [ ] Keep paragraphs short (2-3 sentences)
- [ ] One main concept per section
- [ ] Show diagrams/code before explaining

**Visual Elements:**
- [ ] Add box diagrams for complex concepts
- [ ] Use CodeSnippetWithOutput for small examples
- [ ] Use Angular Playground for full working apps
- [ ] Add proper spacing between sections

**Technical:**
- [ ] Import all required components (including CodeSnippetWithOutput)
- [ ] Add PageHeader with `colorTheme="red"`
- [ ] Use Angular red/pink gradients throughout
- [ ] Create complete playground example (all 9 files)
- [ ] Add `import 'zone.js'` in main.ts
- [ ] Include interactive playground card

**Polish:**
- [ ] Add feature badges with checkmarks
- [ ] Test in both light and dark mode
- [ ] Verify responsive layout (mobile/desktop)
- [ ] Test playground opens and runs in StackBlitz
- [ ] Add helpful alerts and tips
- [ ] Use consistent icon sizes (w-6 h-6 for headers)
- [ ] Verify all buttons use Angular colors

---

## Example Page Template

See `angular-what-is-angular.tsx` for a complete working example that demonstrates:
- ✅ Proper page structure
- ✅ Angular theming
- ✅ Interactive playground
- ✅ Feature grids
- ✅ Alert boxes
- ✅ Step-by-step guides
- ✅ Dark mode support
- ✅ Responsive design

---

## Support

For questions or improvements to this guide:
1. Review existing Angular pages for patterns
2. Check `angular-playground-modal.tsx` for playground features
3. Refer to `language-themes.ts` for color schemes
4. Test changes in both light and dark mode

---

**Last Updated**: December 2024
**Version**: 1.0
