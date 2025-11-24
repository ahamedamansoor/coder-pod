# Content Generation Prompt Template

## Overview
This document provides a standardized prompt template for creating modern, interactive learning pages across all programming languages in the Coder POD platform.

## Core Requirements

### 1. Design & Visual Standards
- **Full-width layout**: Content should stretch to viewport, not centered
- **Color theming**: Use language-specific colors from `/src/lib/language-themes.ts`
- **Brand consistency**: All headers, titles, and primary UI elements use Coder POD blue (#5B7FFF / blue-600)
- **Dark mode**: All components must support theme-aware styling
- **Professional appearance**: Subtle gradients, reduced saturation, clean spacing

### 2. Component Structure
```tsx
// Required imports
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/generic-page-header';
import { /* relevant icons */ } from 'lucide-react';
```

### 3. File Naming Convention
- Format: `[language]-[topic-name].tsx`
- Examples: 
  - `javascript-first-program.tsx`
  - `javascript-installation-setup.tsx`
  - `html-introduction.tsx`
  - `css-flexbox.tsx`

### 4. Progressive Learning Structure

#### Beginner Level
- Simple, clear explanations without jargon
- Step-by-step instructions
- Visual examples and diagrams
- Quick win examples that build confidence

#### Intermediate Level
- Deeper concepts and relationships
- Real-world use cases
- Best practices and patterns
- Common pitfalls to avoid

#### Expert Level
- Advanced techniques and optimizations
- System-level understanding
- Performance considerations
- Professional workflows and tooling

## Component Template

### Basic Structure
```tsx
'use client';

import React, { useState } from 'react';
// ... imports

interface [Language][Topic]Props {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function [Language][Topic]({ onOpenWebPlayground }: [Language][Topic]Props) {
  // State management
  const [selectedView, setSelectedView] = useState<'beginner' | 'intermediate' | 'expert'>('beginner');

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={/* IconName */}
        category="[Language] Fundamentals"
        title="[Topic Title]"
        description="[Brief description]"
        colorTheme="blue" // Use blue for brand consistency
      />

      {/* Overview Section */}
      <Card className="border-[color]-200 bg-gradient-to-br from-[color]-50 via-[color]-50 to-[color]-50 dark:from-[color]-950/20 dark:via-[color]-950/15 dark:to-[color]-950/20">
        {/* Content */}
      </Card>

      {/* Progressive Learning Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600" />
            Learning Path
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="beginner">
            <TabsList>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="expert">Expert</TabsTrigger>
            </TabsList>
            {/* Tab content for each level */}
          </Tabs>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600" />
            Live Examples
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Code snippets with playground buttons */}
        </CardContent>
      </Card>

      {/* Visual Diagrams */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600" />
            Visual Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* ASCII diagrams or SVG visualizations */}
        </CardContent>
      </Card>

      {/* Concept Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
            Key Concepts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {/* Accordion items */}
          </Accordion>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="w-6 h-6 text-blue-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Best practices grid */}
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/15 dark:to-yellow-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            Common Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {/* Common mistakes and solutions */}
          </Accordion>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/15 dark:to-sky-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Learning path forward */}
        </CardContent>
      </Card>
    </div>
  );
}
```

## Color Scheme Reference

### Coder POD Brand Blue (Used for ALL branding elements)
- **Primary Blue**: `#5B7FFF` / `blue-600`
- **Light mode**: `text-blue-600`, `bg-blue-50`, `border-blue-200`
- **Dark mode**: `dark:text-blue-400`, `dark:bg-blue-950/30`, `dark:border-blue-800`

**Important:** All headers, titles, sidebar menus, page titles, and primary navigation MUST use blue branding color for consistency.

### Language-Specific Colors (ONLY for content sections, not headers/menus)
- **JavaScript**: Amber/Yellow (`amber-600`, `yellow-600`)
- **HTML**: Blue (`blue-600`) - Already matches brand
- **CSS**: Blue/Indigo (`blue-600`, `indigo-600`) - Already matches brand
- **React**: Cyan (`cyan-600`)
- **Java**: Red/Orange (`red-600`, `orange-600`)
- **Spring**: Green/Emerald (`green-600`, `emerald-600`)
- **SCSS**: Pink/Rose (`pink-600`, `rose-600`)

**Note:** Language colors can be used for content card backgrounds, badges, and special sections, but NOT for page headers, titles, or sidebar navigation.

## Code Snippet Standards

### Theme-Aware Code Blocks
```tsx
<div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
  <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
    <span className="uppercase tracking-wide">filename.ext</span>
    <span className="text-slate-500 dark:text-slate-300">Description</span>
  </div>
  <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{codeSnippet}
  </pre>
</div>
```

### Terminal/Console Style
```tsx
<div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    <span className="text-gray-400 text-sm ml-2">Terminal</span>
  </div>
  <div className="p-4 font-mono text-sm space-y-2">
    <div className="text-blue-400">$ command</div>
    <div className="text-green-400">output</div>
  </div>
</div>
```

## Interactive Elements

### Playground Integration
```tsx
{onOpenWebPlayground && (
  <Button
    className="bg-blue-600 hover:bg-blue-700 text-white"
    onClick={() => onOpenWebPlayground(html, css, js)}
  >
    <Play className="w-4 h-4 mr-2" />
    Open in Web Playground
  </Button>
)}
```

### Interactive State Management
```tsx
const [activeExample, setActiveExample] = useState<string>('basic');

<div className="grid md:grid-cols-3 gap-4">
  {examples.map(ex => (
    <button
      key={ex.id}
      onClick={() => setActiveExample(ex.id)}
      className={`p-4 rounded-lg border-2 transition-all ${
        activeExample === ex.id
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
          : 'border-slate-200 dark:border-slate-700 hover:border-blue-300'
      }`}
    >
      {ex.title}
    </button>
  ))}
</div>
```

## Visual Diagram Guidelines

### ASCII Diagrams
```tsx
<pre className="font-mono text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
{`┌─────────────────────────────────┐
│      Component Architecture      │
├─────────────────────────────────┤
│  ┌──────┐      ┌──────┐          │
│  │ Part │ ───▶ │ Part │          │
│  └──────┘      └──────┘          │
└─────────────────────────────────┘`}
</pre>
```

### Icon-Based Flow
```tsx
<div className="flex items-center justify-center gap-2">
  <div className="flex items-center gap-2">
    <Step1Icon className="w-6 h-6" />
    <span>Step 1</span>
  </div>
  <ArrowRight className="w-4 h-4" />
  <div className="flex items-center gap-2">
    <Step2Icon className="w-6 h-6" />
    <span>Step 2</span>
  </div>
</div>
```

## Best Practices

### Content Quality
1. ✅ **Clear explanations** - Use simple language, avoid unnecessary jargon
2. ✅ **Progressive complexity** - Start simple, build to advanced
3. ✅ **Real examples** - Show practical, runnable code
4. ✅ **Visual aids** - Use diagrams, charts, and illustrations
5. ✅ **Interactive elements** - Include live playground examples
6. ✅ **Comprehensive coverage** - Include edge cases and gotchas

### UI/UX Standards
1. ✅ **Consistent spacing** - Use `space-y-10` for main sections, `space-y-4` for sub-sections
2. ✅ **Responsive design** - Test on mobile, tablet, and desktop
3. ✅ **Accessible colors** - Maintain proper contrast ratios
4. ✅ **Loading states** - Handle async operations gracefully
5. ✅ **Error handling** - Provide clear error messages
6. ✅ **Dark mode** - Test all components in both themes

### Code Quality
1. ✅ **TypeScript** - Use proper typing for all components
2. ✅ **Client components** - Add `'use client'` when using hooks
3. ✅ **Prop interfaces** - Define clear interfaces for all props
4. ✅ **Reusable code** - Extract common patterns to shared utilities
5. ✅ **Performance** - Minimize re-renders and optimize heavy operations
6. ✅ **Accessibility** - Include ARIA labels and semantic HTML

## Example Prompt

When generating content, use this prompt structure:

```
Create a modern, full-width interactive learning page for the "[TOPIC]" component in [LANGUAGE].

Requirements:
1. **ALWAYS use blue branding** - PageHeader, all card titles, sidebar items MUST use blue (#5B7FFF / blue-600)
2. Use PageHeader with blue theme (colorTheme="blue") - DO NOT use language-specific colors
3. Progress from beginner to expert explanations
4. Include Tabs for different skill levels (beginner/intermediate/expert)
5. Add live code playground examples with onOpenWebPlayground integration
6. Create visual architecture diagram (ASCII or styled)
7. Include Accordion for concept checklist
8. Add Common Pitfalls section with solutions
9. Include Best Practices grid
10. Add Next Steps section with learning path forward
11. Use theme-aware code blocks (light/dark mode support)
12. **Blue for ALL headers, titles, and navigation** - consistent branding throughout
13. Language colors ONLY for content sections (optional backgrounds, badges)
14. Make content stretch to viewport (no centering)
15. Include practical, runnable examples
16. Add visual feedback and interactive elements
17. Ensure responsive design
18. Link only to official language documentation

File naming: [language]-[topic].tsx
Example: javascript-first-program.tsx

Output a complete, production-ready component that provides an innovative learning experience.
```

## Quality Checklist

Before submitting content, verify:

- [ ] File named correctly: `[language]-[topic].tsx`
- [ ] **PageHeader MUST use `colorTheme="blue"`** - NO exceptions
- [ ] **All section titles use blue-600/blue-400** (not language colors)
- [ ] **Sidebar menu items use blue branding** (consistent with logo)
- [ ] Tabs for beginner/intermediate/expert levels
- [ ] Live playground examples integrated
- [ ] Visual diagrams included
- [ ] Accordion for concepts/checklist
- [ ] Common pitfalls section
- [ ] Best practices section
- [ ] Next steps/learning path
- [ ] Theme-aware code blocks (light/dark)
- [ ] Language colors ONLY in content sections (if needed)
- [ ] Full-width layout (not centered)
- [ ] Responsive design tested
- [ ] Dark mode tested
- [ ] No external links except official docs
- [ ] TypeScript types defined
- [ ] Interactive elements functional
- [ ] Clear, beginner-friendly explanations
- [ ] Expert-level insights included
- [ ] **Blue branding verified across all headers and navigation**

---

*Last updated: November 24, 2025*
*Coder POD - Your Launchpad for Learning*
