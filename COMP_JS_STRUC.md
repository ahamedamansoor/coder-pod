# CODER POD Component Design System
## Educational Content Component Structure & Styling Guide

This document defines the design system, color palette, component patterns, and styling conventions used in CODER POD educational content components. Follow these guidelines to maintain consistency across all components.

---

## Table of Contents
1. [Overall Structure](#overall-structure)
2. [Page Header](#page-header)
3. [Color Palette & Theme System](#color-palette--theme-system)
4. [Card Component Patterns](#card-component-patterns)
5. [Badge Styling](#badge-styling)
6. [Code Block Styling](#code-block-styling)
7. [Icon Usage Guidelines](#icon-usage-guidelines)
8. [Comparison Cards Pattern](#comparison-cards-pattern)
9. [Alert Component](#alert-component)
10. [Table Styling](#table-styling)
11. [Button Styling](#button-styling)
12. [Key Design Principles](#key-design-principles)
13. [Section Organization Pattern](#section-organization-pattern)

---

## Overall Structure

### Base Setup
```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  // Import relevant icons from lucide-react
} from 'lucide-react';
```

### Main Container
```tsx
<div className="w-full min-h-screen space-y-10 pb-16">
  {/* All content goes here */}
</div>
```

**Key Points:**
- Use `space-y-10` for spacing between major sections
- Include `pb-16` for bottom padding
- Use `min-h-screen` for full-height layout

---

## Page Header

```tsx
<PageHeader
  icon={IconName}
  category="JavaScript Fundamentals"
  title="Component Title"
  description="Brief description of what this component teaches"
  colorTheme="blue"
/>
```

**Guidelines:**
- `colorTheme` should be `"blue"` to match CODER POD logo
- Keep descriptions concise and informative
- Use appropriate icon from lucide-react

---

## Color Palette & Theme System

### Primary Colors (Light/Dark mode)

| Color | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Blue** (Primary) | `text-blue-600/80` | `text-blue-400/80` | Logo color, primary actions |
| **Emerald/Green** | `text-emerald-600/80` | `text-emerald-400/80` | Success, positive actions |
| **Purple** | `text-purple-600/80` | `text-purple-400/80` | Advanced features |
| **Amber/Yellow** | `text-amber-600/80` | `text-amber-400/80` | Warnings, tips |
| **Cyan** | `text-cyan-600/80` | `text-cyan-400/80` | Information |
| **Indigo** | `text-indigo-600/80` | `text-indigo-400/80` | Secondary features |
| **Rose/Red** | `text-rose-600/80` | `text-rose-400/80` | Errors, things to avoid |

### Gradient Backgrounds (Soft & Light)

**Always use low opacity for subtle, professional appearance:**

```tsx
// Blue gradient
className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10"

// Emerald gradient
className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10"

// Purple gradient
className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10"

// Indigo gradient
className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10"

// Amber gradient
className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10"

// Cyan gradient
className="bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10"

// Rose gradient
className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10"
```

### Border Colors

```tsx
// Light border (subtle)
className="border border-{color}-200/50 dark:border-{color}-800/30"

// Strong border (emphasis)
className="border-2 border-{color}-200/60 dark:border-{color}-800/40"
```

---

## Card Component Patterns

### 1. Overview/Summary Card

Use this pattern for the first section that summarizes the topic.

```tsx
<Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl">
      <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
      Section Title
    </CardTitle>
    <CardDescription className="text-base">
      Brief description of what this section covers
    </CardDescription>
  </CardHeader>
  <CardContent className="grid md:grid-cols-3 gap-4">
    {/* 3-column grid of sub-cards */}
    <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
        <h3 className="font-semibold">Sub-section Title</h3>
      </div>
      <p className="text-muted-foreground text-sm">
        Description text
      </p>
      <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
        Label
      </Badge>
    </div>
  </CardContent>
</Card>
```

### 2. Standard Content Card

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-2xl">
      <Icon className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
      Card Title
    </CardTitle>
    <CardDescription className="text-base">
      Card description
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Content with space-y-6 between elements */}
  </CardContent>
</Card>
```

### 3. Feature Grid Cards

Use for displaying multiple related features or concepts.

```tsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
    <h4 className="font-semibold mb-3 flex items-center gap-2">
      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      Feature Title
    </h4>
    <p className="text-sm text-muted-foreground mb-3">
      Feature description
    </p>
    {/* Additional content */}
  </div>
</div>
```

### 4. Highlighted Feature Box

Use for important concepts that need special attention.

```tsx
<div className="rounded-xl border-2 border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 p-6 space-y-4">
  <div className="flex items-center gap-3 mb-2">
    <div className="p-2 bg-blue-500/80 dark:bg-blue-600/80 rounded-lg">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300">Title</h3>
      <p className="text-xs text-blue-600/70 dark:text-blue-400/70">Subtitle</p>
    </div>
  </div>
  {/* Content */}
</div>
```

### 5. Benefit/Feature Pills

Use for listing 3 key benefits or features.

```tsx
<div className="grid md:grid-cols-3 gap-3">
  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
    <p className="text-sm font-semibold mb-1">Feature Title</p>
    <p className="text-xs text-muted-foreground">Description</p>
  </div>
</div>
```

---

## Badge Styling

### Standard Badge Pattern

```tsx
<Badge className="bg-{color}-100/80 text-{color}-700 dark:bg-{color}-900/30 dark:text-{color}-300 border border-{color}-300/50 dark:border-{color}-700/40">
  Label Text
</Badge>
```

### Examples by Color:

```tsx
// Blue (Primary)
<Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
  Recommended ✅
</Badge>

// Emerald (Success)
<Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
  Best Practice
</Badge>

// Rose (Warning/Avoid)
<Badge variant="outline" className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
  Avoid ❌
</Badge>
```

---

## Code Block Styling

### Full Code Block with Header

```tsx
<div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
  <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
    <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">
      filename.js
    </span>
    <span className="text-blue-600/70 dark:text-blue-400/70">
      Description
    </span>
  </div>
  <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
    {codeString}
  </pre>
</div>
```

### Inline Code Snippet

**IMPORTANT: Use Simple Pre Blocks for Vertical Expansion**

❌ **DON'T use complex inline JSX with spans:**
```tsx
<div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
  <span className="text-blue-600 dark:text-blue-400">const</span>{' '}
  <span className="text-amber-700 dark:text-amber-300">variable</span> ={' '}
  <span className="text-purple-600 dark:text-purple-400">'value'</span>;
</div>
```

✅ **DO use simple pre blocks with template literals:**
```tsx
<pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const variable = 'value';

const result = someFunction(variable);

console.log(result);
// Output: expected result`}
</pre>
```

**Key Rules:**
- Always use `<pre>` with template literals for code blocks
- Add blank lines between logical sections for vertical expansion
- Include `overflow-x-auto` for horizontal scrolling
- Show complete examples with variable declarations and outputs
- Add comments to explain what the code does

### Syntax Highlighting Color Guide

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Keywords (const, let, function) | `text-blue-600` | `text-blue-400` |
| Strings | `text-green-600` or `text-purple-600` | `text-green-400` or `text-purple-400` |
| Functions/Variables | `text-amber-600` | `text-amber-400` |
| Attributes | `text-emerald-600` | `text-emerald-400` |
| Comments | `text-gray-500` | `text-gray-500` |
| HTML Tags | `text-blue-600` | `text-blue-400` |
| Punctuation | `text-gray-600` | `text-gray-400` |

---

## Icon Usage Guidelines

### Icon Sizes by Context

| Context | Size Class | Example |
|---------|-----------|---------|
| Section headers | `w-6 h-6` | `<Icon className="w-6 h-6" />` |
| Sub-section headers | `w-5 h-5` | `<Icon className="w-5 h-5" />` |
| List items | `w-4 h-4` | `<Icon className="w-4 h-4" />` |
| Buttons | `w-4 h-4` | `<Icon className="w-4 h-4 mr-2" />` |

### Common Icon Patterns

```tsx
// Section Title with Icon
<CardTitle className="flex items-center gap-3 text-2xl">
  <Icon className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
  Section Title
</CardTitle>

// Feature Header with Icon
<h4 className="font-semibold mb-3 flex items-center gap-2">
  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  Feature Title
</h4>

// List Item with Icon
<li className="flex items-start gap-2">
  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
  <span>List item text</span>
</li>

// Icon in Colored Pill
<div className="p-2 bg-blue-500/80 dark:bg-blue-600/80 rounded-lg">
  <Icon className="w-5 h-5 text-white" />
</div>
```

**Import rule:** Always import every icon you render and remove unused icon imports to prevent undefined icon errors.

### Recommended Icons by Purpose

| Purpose | Icon | Import |
|---------|------|--------|
| Code/Programming | `Code2`, `FileCode` | lucide-react |
| Success/Correct | `CheckCircle2` | lucide-react |
| Error/Wrong | `XCircle` | lucide-react |
| Warning | `AlertTriangle` | lucide-react |
| Tips/Ideas | `Lightbulb` | lucide-react |
| Features | `Sparkles`, `Zap` | lucide-react |
| Navigation | `ArrowRight` | lucide-react |
| Settings/Config | `Settings` | lucide-react |
| Links/External | `Link`, `ExternalLink` | lucide-react |
| Play/Execute | `Play` | lucide-react |
| Upload/Download | `Upload`, `Download` | lucide-react |

---

## Comparison Cards Pattern

Use this pattern for "Do This" vs "Avoid This" comparisons.

```tsx
<div className="grid md:grid-cols-2 gap-4">
  {/* Do This - Green/Emerald */}
  <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
    <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
      <CheckCircle2 className="w-5 h-5" />
      Do This
    </h4>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li>✅ Use external .js files for production</li>
      <li>✅ Add defer to script tags</li>
      <li>✅ Keep JavaScript separate from HTML</li>
    </ul>
  </div>
  
  {/* Avoid This - Rose/Red */}
  <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
    <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
      <XCircle className="w-5 h-5" />
      Avoid This
    </h4>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li>❌ Inline JavaScript in production</li>
      <li>❌ Scripts without defer/async</li>
      <li>❌ Mixing HTML and JavaScript logic</li>
    </ul>
  </div>
</div>
```

---

## Alert Component

### Standard Alert

```tsx
<Alert>
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>
    Alert message with <code className="font-mono">inline code</code> support.
  </AlertDescription>
</Alert>
```

### Alert with Lightbulb (Tips)

```tsx
<Alert>
  <Lightbulb className="h-4 w-4" />
  <AlertTitle>Pro Tip</AlertTitle>
  <AlertDescription>
    Helpful tip or best practice information.
  </AlertDescription>
</Alert>
```

### Colored Info Box (Alternative to Alert)

```tsx
<div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
  <div className="flex items-start gap-3">
    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-1">
        Quick Rule
      </h4>
      <p className="text-sm text-muted-foreground">
        Information content here
      </p>
    </div>
  </div>
</div>
```

---

## Table Styling

### Responsive Table with Alternating Rows

```tsx
<div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-slate-100 dark:bg-slate-900">
        <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
          Column Header 1
        </th>
        <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
          Column Header 2
        </th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr>
        <td className="border border-slate-300 dark:border-slate-700 p-3">
          Cell content
        </td>
        <td className="border border-slate-300 dark:border-slate-700 p-3">
          Cell content
        </td>
      </tr>
      <tr className="bg-slate-50 dark:bg-slate-900/50">
        <td className="border border-slate-300 dark:border-slate-700 p-3">
          Cell content (alternating row)
        </td>
        <td className="border border-slate-300 dark:border-slate-700 p-3">
          Cell content
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Table with Badges

```tsx
<td className="border border-slate-300 dark:border-slate-700 p-3">
  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
    Yes ✅
  </Badge>
</td>
```

---

## Button Styling

### Standard Button with Icon

```tsx
<Button onClick={handleClick}>
  <Play className="w-4 h-4 mr-2" />
  Button Text
</Button>
```

### Button for Playground

```tsx
{onOpenWebPlayground && (
  <Button
    className="w-full md:w-auto"
    onClick={() => onOpenWebPlayground(htmlCode, cssCode, jsCode)}
  >
    <Globe className="w-4 h-4 mr-2" />
    Open in Web Playground
  </Button>
)}
```

---

## Key Design Principles

### 1. No Tabs
❌ **Don't use:** Tab components that hide content
✅ **Do use:** Expandable cards or all content visible at once

### 2. Soft, Light Colors
- Use low opacity: `/50`, `/60` for light mode backgrounds
- Use very low opacity: `/10`, `/20` for dark mode backgrounds
- Avoid bright, saturated colors

### 3. Always Include Dark Mode
- Every color class must have a `dark:` variant
- Test in both light and dark modes
- Use `text-muted-foreground` for secondary text

### 4. Consistent Spacing
| Context | Spacing Class |
|---------|--------------|
| Between major sections | `space-y-10` |
| Between subsections | `space-y-6` |
| Between cards in grid | `gap-4` or `gap-6` |
| Within card content | `space-y-4` |
| List items | `space-y-2` |

### 5. Rounded Corners
| Element | Border Radius |
|---------|--------------|
| Large cards | `rounded-xl` |
| Feature boxes | `rounded-xl` |
| Code blocks | `rounded-lg` |
| Small pills | `rounded-lg` |
| Icon containers | `rounded-lg` |

### 6. Icon-First Headers
Always pair section titles with relevant icons:
```tsx
<CardTitle className="flex items-center gap-3 text-2xl">
  <Icon className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
  Section Title
</CardTitle>
```

### 7. Grid Layouts
- Use `md:grid-cols-2` for two-column layouts
- Use `md:grid-cols-3` for three-column layouts
- Always responsive with `md:` prefix
- Mobile shows single column by default

### 8. Interactive Elements
- Include playground buttons for code examples
- Add hover effects on cards: `hover:shadow-lg`, `transition-all`
- Use `cursor-pointer` for clickable elements

### 9. Typography Hierarchy
| Element | Class |
|---------|-------|
| Main section titles | `text-2xl` |
| Card descriptions | `text-base` |
| Body text | `text-sm` |
| Small labels | `text-xs` |
| Muted text | `text-muted-foreground` |

### 10. Professional Polish
- Use `font-mono` for code
- Use `font-semibold` for headers
- Use `uppercase tracking-wide` for file labels
- Add `overflow-x-auto` to code blocks and tables

### 11. Live Preview Content (Playground HTML/CSS)
- Keep playground previews visually polished: centered cards/panels, subtle gradients or soft backgrounds, rounded corners, and readable typography.
- Avoid unnecessary `<h1>` headings inside playground demos (e.g., “Comment Styles”) unless they add real instructional value; use concise titles or omit entirely.
- Use consistent padding, spacing, and borders so embedded previews feel structured and aligned with surrounding UI.
- Prefer light, friendly accent colors with clear contrast in both light and dark modes.
- In decision diagrams/flows, use action-forward phrasing (e.g., “Need index + control? → Reach for for”, “Value-only, readable? → Grab for...of”, “Need early exit? → Pick for/while; skip forEach”) to keep guidance skimmable and engaging.
- Pair decision steps with tiny inline code snippets that prove the choice (e.g., `for (let i = 0; i < arr.length; i++)`, `for (const item of items)`, `if (!ready) break;`) instead of plain text lists.
- For each topic, include at least one canonical snippet that shows the core syntax plus key attributes/parameters (e.g., functions with `name`, `params`, `return`; loops with `init/condition/increment`; conditionals with `if/else if/else`; DOM examples with `defer`, `type`, or relevant attributes). Make the example runnable and minimal.
- **CRITICAL: Expand snippets vertically with blank lines between statements** - Use `<pre>` blocks with template literals, not complex inline JSX with spans.
- Add explicit inputs/outputs or comments (e.g., `add(2,3) // 5`, `console.log(result) // Output: 10`) so learners see cause-and-effect at a glance.
- Avoid overly terse one-liners when clarity suffers - break code into multiple lines with proper spacing.
- Show complete examples: variable declarations → function calls → console.log → comments with expected output.

---

## Section Organization Pattern

Follow this order for consistent component structure:

### 1. Overview Card (First Section)
- 3-column grid summary
- Soft gradient background
- Brief introduction to topic
- Visual icons for each sub-topic

### 2. Main Content Cards (Core Concepts)
- One card per major concept/method
- Clear headers with icons
- Detailed explanations
- Code examples where relevant

### 3. Comparison/Feature Cards
- Grid layout (usually 2 columns)
- Pros/Cons or Do/Don't patterns
- Visual distinctions (colors, icons)

### 4. Advanced Topics
- Optional deeper dive sections
- Highlighted feature boxes
- More technical details

### 5. Reference Material
- Tables for quick lookup
- Comparison charts
- Visual diagrams (if applicable)

### 6. Best Practices Summary (Final Section)
- Do This / Avoid This grid
- Emerald (Do) vs Rose (Avoid) colors
- Actionable recommendations

---

## Complete Example Structure

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Code2, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

interface ComponentProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Component({ onOpenWebPlayground }: ComponentProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Code2}
        category="JavaScript Fundamentals"
        title="Component Title"
        description="Brief description"
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Overview Title
          </CardTitle>
          <CardDescription className="text-base">
            Overview description
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {/* Sub-cards */}
        </CardContent>
      </Card>

      {/* Main Content Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Main Topic
          </CardTitle>
          <CardDescription className="text-base">
            Topic description
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Content */}
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This / Avoid This */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## Quick Reference Checklist

When creating a new component, ensure:

- [ ] Uses 'use client' directive
- [ ] Imports all necessary UI components
- [ ] Verify all rendered icons/components are imported and remove unused imports to prevent undefined errors
- [ ] Main container has `space-y-10 pb-16`
- [ ] PageHeader has `colorTheme="blue"`
- [ ] All colors have dark mode variants
- [ ] Gradients use low opacity (50/60 light, 10/20 dark)
- [ ] Icons paired with all section headers
- [ ] **Code blocks use `<pre>` with template literals (not inline JSX spans)**
- [ ] **Code snippets are vertically expanded with blank lines between statements**
- [ ] Responsive grid layouts (`md:grid-cols-*`)
- [ ] No tab components used
- [ ] Comparison cards for Do/Don't patterns
- [ ] Best practices section at the end
- [ ] All text readable in both themes
- [ ] Playground buttons for code examples (if applicable)
- [ ] Consistent spacing throughout
- [ ] Professional typography hierarchy

---

## Notes for AI Tools

When generating components based on this design system:

1. **Always prioritize visual consistency** - Match the color scheme exactly
2. **Include comprehensive content** - Don't create placeholder text, write real educational content
3. **No tabs or hidden content** - Make everything visible with cards
4. **Test dark mode** - Ensure all colors work in both themes
5. **Use real code examples** - Include working, practical code snippets
6. **Follow the section order** - Overview → Main Content → Advanced → Reference → Best Practices
7. **Icons matter** - Choose appropriate icons for each section
8. **Mobile-first** - Ensure responsive design works on all screen sizes

---

*Last Updated: November 2024*
*CODER POD Educational Platform*
